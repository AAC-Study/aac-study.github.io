/* Unit test of the supabase REST request building in js/social.js, with a fake Store.sb.
   Loads the real page (mock mode) in Playwright, signs in a mock user (for myId()),
   then swaps Store.sb for a recorder and switches Social to the supabase backend.
   Needs a static server on :8765:  python3 -m http.server 8765
   Run: node test/social.rest.test.js */
'use strict';
const { chromium } = require('playwright');
const assert = require('assert');

const BASE = 'http://localhost:8765/index.html';
let passed = 0, failures = 0;
async function step(name, fn) {
  try { await fn(); passed++; console.log('  ok   ' + name); }
  catch (e) { failures++; console.log('  FAIL ' + name + '\n       ' + String(e && e.stack || e).split('\n').slice(0, 5).join('\n       ')); }
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto(BASE);
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.waitForSelector('.auth__switch button');
  await page.click('.auth__switch button');
  await page.fill('#f-name', 'Rest Tester'); await page.fill('#f-email', 'rest@x.y');
  await page.fill('#f-pass', 'secret1'); await page.fill('#f-invite', 'AAC2026');
  await page.click('form button[type=submit]');
  await page.waitForSelector('.side');

  /* fake Store.sb: records every call; answers are configurable per path prefix */
  await page.evaluate(() => {
    window.__calls = [];
    window.__answers = [];   // [{match: RegExp source, method, value | error}]
    function answer(method, path) {
      for (var i = 0; i < window.__answers.length; i++) {
        var a = window.__answers[i];
        if ((!a.method || a.method === method) && new RegExp(a.match).test(path)) {
          if (a.error) { var e = new Error(a.error.message); e.data = a.error; return Promise.reject(e); }
          return Promise.resolve(JSON.parse(JSON.stringify(a.value)));
        }
      }
      return Promise.resolve(method === 'GET' ? [] : null);
    }
    var fake = {
      url: 'https://fake.supabase.co', key: 'anon-key',
      uid: function () { return Store.auth.current().id; },
      token: function () { return Promise.resolve('tok'); },
      api: function (method, path, body, opts) {
        window.__calls.push({ method: method, path: path, body: body instanceof Blob ? { blob: true, type: body.type, size: body.size } : body, opts: opts || null });
        return answer(method, path);
      },
      rpc: function (name, args) { return fake.api('POST', '/rest/v1/rpc/' + name, args || {}); }
    };
    window.__realSb = Store.sb;
    Store.sb = fake;
    Social._setBackend('supabase');
  });
  const me = await page.evaluate(() => Store.auth.current().id);
  const reset = (answers) => page.evaluate(a => { window.__calls = []; window.__answers = a || []; }, answers || []);
  /* badge polling (refreshBadges) runs in the background and after each mutating call; its reads are noise for most steps */
  const NOISE = /^\/rest\/v1\/(rpc\/sc_my_chats|friend_requests\?|friendships\?|user_marks\?|sc_notifications\?|profiles\?)/;
  const calls = (raw) => page.evaluate(() => window.__calls).then(c => raw ? c : c.filter(x => !NOISE.test(x.path)));

  await step('friend RPCs send the right names and args', async () => {
    await reset();
    await page.evaluate(() => Promise.all([
      Social.request('u2'), Social.cancel('u2'), Social.accept('u3'), Social.decline('u4'),
      Social.removeFriend('u5'), Social.restore('u5'), Social.block('u6', true), Social.block('u6', false), Social.pinUser('u7', true)
    ]));
    const c = await calls();
    const got = c.map(x => x.path.replace('/rest/v1/rpc/', '') + ' ' + JSON.stringify(x.body));
    assert.deepStrictEqual(got, [
      'sc_friend_request {"p_to":"u2"}', 'sc_friend_cancel {"p_to":"u2"}', 'sc_friend_accept {"p_from":"u3"}',
      'sc_friend_decline {"p_from":"u4"}', 'sc_friend_remove {"p_other":"u5"}', 'sc_friend_restore {"p_other":"u5"}',
      'sc_block {"p_other":"u6","p_on":true}', 'sc_block {"p_other":"u6","p_on":false}', 'sc_pin_user {"p_other":"u7","p_on":true}'
    ]);
    assert.ok(c.every(x => x.method === 'POST'));
  });

  await step('people(): profiles + requests + friendships + marks, relations built', async () => {
    await reset([
      { match: '^/rest/v1/profiles', value: [{ id: me, name: 'Rest Tester', xp: 0 }, { id: 'f1', name: 'Friend', xp: 500 }, { id: 'i1', name: 'Incoming' }, { id: 'b1', name: 'Blocked' }] },
      { match: '^/rest/v1/friend_requests', value: [{ from_id: 'i1', to_id: me, created_at: '2026-01-01T00:00:00Z' }] },
      { match: '^/rest/v1/friendships', value: [{ user_a: 'f1', user_b: me, created_at: '2026-01-01T00:00:00Z' }] },
      { match: '^/rest/v1/user_marks', value: [{ target_id: 'b1', pinned: false, blocked: true, removed: false }] }
    ]);
    const res = await page.evaluate(() => Social.people().then(p => JSON.parse(JSON.stringify(p))));
    const c = await calls(true);
    assert.ok(c.some(x => x.path === '/rest/v1/profiles?select=id,name,avatar_url,frame,xp,role,prefs&order=created_at.asc'));
    assert.ok(c.some(x => x.path === '/rest/v1/friend_requests?select=from_id,to_id,created_at'));
    assert.ok(c.some(x => x.path === '/rest/v1/friendships?select=user_a,user_b,created_at'));
    assert.ok(c.some(x => x.path === '/rest/v1/user_marks?select=target_id,pinned,blocked,removed'));
    const flat = JSON.stringify(res);
    assert.ok(flat.indexOf('"f1"') >= 0 && flat.indexOf('"i1"') >= 0 && flat.indexOf('"b1"') >= 0, 'all users present');
  });

  await step('messages(): since / before / ids query strings', async () => {
    await reset();
    await page.evaluate(() => Promise.all([
      Social.messages('c1', { since: '2026-05-01T10:00:00.123+00:00' }),
      Social.messages('c1', { before: 120, limit: 30 }),
      Social.messages('c1', { ids: [5, '7'] }),
      Social.messages('c1')
    ]));
    const p = (await calls()).map(x => x.path);
    const cols = 'id,chat_id,sender_id,kind,body,media_path,file_name,file_size,reply_to,deleted,edited_at,expires_at,created_at,updated_at';
    assert.strictEqual(p[0], '/rest/v1/messages?select=' + cols + '&chat_id=eq.c1&updated_at=gt.2026-05-01T10%3A00%3A00.123%2B00%3A00&order=updated_at.asc&limit=300');
    assert.strictEqual(p[1], '/rest/v1/messages?select=' + cols + '&chat_id=eq.c1&id=lt.120&order=id.desc&limit=30');
    assert.strictEqual(p[2], '/rest/v1/messages?select=' + cols + '&chat_id=eq.c1&id=in.(5,7)');
    assert.strictEqual(p[3], '/rest/v1/messages?select=' + cols + '&chat_id=eq.c1&order=id.desc&limit=60');
  });

  await step('messages(): reactions fetched for live messages and aggregated; page reversed to ascending', async () => {
    await reset([
      { match: '^/rest/v1/messages', value: [
        { id: 3, chat_id: 'c1', sender_id: 'x', kind: 'text', body: 'c' },
        { id: 2, chat_id: 'c1', sender_id: 'x', kind: 'system', body: 'joined' },
        { id: 1, chat_id: 'c1', sender_id: 'x', kind: 'text', body: 'a', deleted: true }] },
      { match: '^/rest/v1/reactions', value: [{ message_id: 3, user_id: 'u1', emoji: '👍' }, { message_id: 3, user_id: 'u2', emoji: '👍' }] }
    ]);
    const msgs = await page.evaluate(() => Social.messages('c1').then(m => JSON.parse(JSON.stringify(m))));
    const p = (await calls()).map(x => x.path);
    assert.strictEqual(p[1], '/rest/v1/reactions?select=message_id,user_id,emoji&message_id=in.(3)');
    assert.deepStrictEqual(msgs.map(m => m.id), [1, 2, 3]);
    assert.deepStrictEqual(msgs[2].reactions, [{ emoji: '👍', users: ['u1', 'u2'] }]);
  });

  await step('send(text): POST messages with return=representation, server fields not sent', async () => {
    await reset([{ match: '^/rest/v1/messages', method: 'POST', value: [{ id: 9, chat_id: 'c1', kind: 'text', body: 'hi' }] }]);
    const m = await page.evaluate(() => Social.send('c1', { kind: 'text', body: 'hi', reply_to: 4 }));
    const c = await calls();
    assert.strictEqual(c.length, 1);
    assert.strictEqual(c[0].method, 'POST');
    assert.ok(c[0].path.indexOf('/rest/v1/messages?select=id,chat_id') === 0);
    assert.deepStrictEqual(c[0].body, { chat_id: 'c1', kind: 'text', body: 'hi', reply_to: 4 });
    assert.strictEqual(c[0].opts.headers.Prefer, 'return=representation');
    assert.strictEqual(m.id, 9);
  });

  await step('send(photo): uploads JPEG blob to chat/<chat>/<me>/... then inserts media_path', async () => {
    await reset([{ match: '^/rest/v1/messages', method: 'POST', value: [{ id: 10, kind: 'photo' }] }]);
    const jpeg = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQ==';
    await page.evaluate(d => Social.send('c1', { kind: 'photo', photo: d }), jpeg);
    const c = await calls();
    assert.strictEqual(c.length, 2);
    const re = new RegExp('^/storage/v1/object/chat/c1/' + me + '/\\d+-[a-z0-9]+\\.jpg$');
    assert.ok(re.test(c[0].path), c[0].path);
    assert.strictEqual(c[0].body.blob, true);
    assert.strictEqual(c[0].opts.raw, true);
    assert.strictEqual(c[0].opts.contentType, 'image/jpeg');
    assert.strictEqual(c[1].body.media_path, c[0].path.replace('/storage/v1/object/chat/', ''));
    assert.strictEqual(c[1].body.kind, 'photo');
  });

  await step('send(file): failed insert deletes the uploaded object and maps the error code', async () => {
    await reset([{ match: '^/rest/v1/messages', method: 'POST', error: { message: 'sc_err_no_files', code: 'P0001' } }]);
    const err = await page.evaluate(() => Social.send('c1', { kind: 'file', file: { name: 'notes.PDF', size: 12, data: 'data:application/pdf;base64,JVBERi0=' } })
      .then(() => null, e => ({ code: e.code, n: e.n })));
    await page.waitForTimeout(50);
    const c = await calls();
    assert.deepStrictEqual(err, { code: 'sc_err_no_files', n: undefined });
    assert.ok(/\.pdf$/.test(c[0].path));
    assert.strictEqual(c[1].body.file_name, 'notes.PDF');
    assert.strictEqual(c[1].body.file_size, 12);
    assert.strictEqual(c[2].method, 'DELETE');
    assert.strictEqual(c[2].path, c[0].path);
  });

  await step('normErr: slow-mode hint becomes n; RLS -> sc_err_no_rights; network -> err_network', async () => {
    await reset([{ match: 'sc_react', error: { message: 'new row violates row-level security policy' } },
                 { match: '^/rest/v1/messages', method: 'POST', error: { message: 'sc_err_slow', hint: '17' } }]);
    const r = await page.evaluate(() => Promise.all([
      Social.send('c1', { kind: 'text', body: 'x' }).catch(e => ({ code: e.code, n: e.n, text: Social.errText(e) })),
      Social.react(1, '👍').catch(e => ({ code: e.code })),
      Promise.resolve(Social.normErr(new TypeError('Failed to fetch')).code)
    ]));
    assert.strictEqual(r[0].code, 'sc_err_slow');
    assert.strictEqual(r[0].n, 17);
    assert.ok(r[0].text.indexOf('17') >= 0, r[0].text);
    assert.strictEqual(r[1].code, 'sc_err_no_rights');
    assert.strictEqual(r[2], 'err_network');
  });

  await step('edit(): PATCH id=eq with only body; empty result -> sc_err_no_rights', async () => {
    await reset([{ match: '^/rest/v1/messages', method: 'PATCH', value: [] }]);
    const e = await page.evaluate(() => Social.edit(42, 'fixed').catch(e => e.code));
    const c = await calls();
    assert.strictEqual(c[0].method, 'PATCH');
    assert.ok(/&id=eq\.42$/.test(c[0].path));
    assert.deepStrictEqual(c[0].body, { body: 'fixed' });
    assert.strictEqual(e, 'sc_err_no_rights');
  });

  await step('removeMessage(): RPC then deletes own media only', async () => {
    await reset();
    await page.evaluate(id => Promise.all([
      Social.removeMessage({ id: 1, media: 'c1/' + id + '/a.jpg', sender_id: id }),
      Social.removeMessage({ id: 2, media: 'c1/other/b.jpg', sender_id: 'other' })
    ]), me);
    await page.waitForTimeout(50);
    const c = (await calls()).map(x => x.method + ' ' + x.path + (x.method === 'POST' ? ' ' + JSON.stringify(x.body) : ''));
    assert.ok(c.indexOf('POST /rest/v1/rpc/sc_delete_message {"p_msg":1}') >= 0);
    assert.ok(c.indexOf('POST /rest/v1/rpc/sc_delete_message {"p_msg":2}') >= 0);
    assert.ok(c.indexOf('DELETE /storage/v1/object/chat/c1/' + me + '/a.jpg') >= 0);
    assert.ok(!c.some(x => x.indexOf('other/b.jpg') >= 0));
  });

  await step('group RPCs: perms -> p_* keys, member actions, pins, reactions', async () => {
    await reset();
    await page.evaluate(() => Promise.all([
      Social.groupUpdate('g1', { title: 'T', perms: { links: false, photos: true }, slow_sec: 30, banned_words: ['bad'] }),
      Social.memberAction('g1', 'u2', 'restrict', '2026-12-01T00:00:00Z'),
      Social.memberAction('g1', 'u3', 'promote', null, { ban: true, pin: false }),
      Social.pinMessage('g1', null), Social.pinMessage('g1', 5),
      Social.react(5, '🔥'), Social.markRead('g1'), Social.groupAdd('g1', ['u4']),
      Social.createGroup('Study', ['u2', 'u3']), Social.openDirect('u2'), Social.leave('g1'), Social.groupDelete('g1')
    ]));
    const c = (await calls()).map(x => x.path.replace('/rest/v1/rpc/', '') + ' ' + JSON.stringify(x.body));
    assert.deepStrictEqual(c, [
      'sc_group_update {"p_chat":"g1","p_patch":{"title":"T","p_links":false,"p_photos":true,"slow_sec":30,"banned_words":["bad"]}}',
      'sc_member_action {"p_chat":"g1","p_user":"u2","p_action":"restrict","p_until":"2026-12-01T00:00:00Z","p_rights":{}}',
      'sc_member_action {"p_chat":"g1","p_user":"u3","p_action":"promote","p_until":null,"p_rights":{"ban":true,"pin":false}}',
      'sc_pin_message {"p_chat":"g1","p_msg":null}', 'sc_pin_message {"p_chat":"g1","p_msg":5}',
      'sc_react {"p_msg":5,"p_emoji":"🔥"}', 'sc_mark_read {"p_chat":"g1"}', 'sc_group_add {"p_chat":"g1","p_users":["u4"]}',
      'sc_create_group {"p_title":"Study","p_members":["u2","u3"]}', 'sc_open_direct {"p_other":"u2"}',
      'sc_leave {"p_chat":"g1"}', 'sc_group_delete {"p_chat":"g1"}'
    ]);
  });

  await step('chat(): reads chats/members/bans by id and maps p_*/r_* columns', async () => {
    await reset([
      { match: '^/rest/v1/chats', value: [{ id: 'g1', kind: 'group', title: 'G', p_text: true, p_links: false, only_admins: true, slow_sec: 10, banned_words: ['x'] }] },
      { match: '^/rest/v1/chat_members', value: [{ user_id: me, role: 'admin', r_ban: true, r_pin: false }] },
      { match: '^/rest/v1/chat_bans', value: [{ user_id: 'z', until: null }, { user_id: 'old', until: '2000-01-01T00:00:00Z' }] }
    ]);
    const ch = await page.evaluate(() => Social.chat('g1').then(c => JSON.parse(JSON.stringify(c))));
    const p = (await calls()).map(x => x.path);
    assert.ok(p.indexOf('/rest/v1/chats?select=*&id=eq.g1') >= 0);
    assert.ok(p.indexOf('/rest/v1/chat_members?select=*&chat_id=eq.g1') >= 0);
    assert.ok(p.indexOf('/rest/v1/chat_bans?select=user_id,until&chat_id=eq.g1') >= 0);
    assert.strictEqual(ch.perms.text, true); assert.strictEqual(ch.perms.links, false);
    assert.strictEqual(ch.only_admins, true);
    assert.strictEqual(ch.members[0].rights.ban, true); assert.strictEqual(ch.members[0].rights.pin, false);
    assert.deepStrictEqual(ch.bans.map(b => b.user_id), ['z'], 'expired ban dropped');
  });

  await step('sendSupport(): sc_support_open, then text and each image as photo', async () => {
    await reset([{ match: 'sc_support_open', value: 'sup1' },
                 { match: '^/rest/v1/messages', method: 'POST', value: [{ id: 1 }] }]);
    const r = await page.evaluate(() => Social.sendSupport({ html: '<p>Broken <b>button</b></p><br>line 2',
      images: ['data:image/jpeg;base64,/9j/4AA=', 'not-an-image', 'data:image/png;base64,iVBORw0KGgo='] }));
    const c = await calls();
    assert.deepStrictEqual(r, { chatId: 'sup1', sent: 3 });
    assert.strictEqual(c[0].path, '/rest/v1/rpc/sc_support_open');
    assert.strictEqual(c[1].body.kind, 'text');
    assert.strictEqual(c[1].body.chat_id, 'sup1');
    assert.ok(/Broken button/.test(c[1].body.body) && /line 2/.test(c[1].body.body), c[1].body.body);
    const uploads = c.filter(x => x.path.indexOf('/storage/v1/object/chat/sup1/' + me + '/') === 0);
    assert.strictEqual(uploads.length, 2);
  });

  await step('notifications(): reads sc_notifications and unread chats; notifSeen RPC', async () => {
    await reset([
      { match: 'sc_my_chats', value: [{ id: 'd1', kind: 'direct', other_id: 'f1', unread: 2, last_msg_at: '2026-01-01T00:00:00Z' }] },
      { match: '^/rest/v1/sc_notifications', value: [{ id: 'n1', kind: 'accepted', actor_id: 'f1', seen: false, created_at: '2026-01-01T00:00:00Z' }] },
      { match: '^/rest/v1/profiles', value: [{ id: 'f1', name: 'Friend' }] }
    ]);
    await page.evaluate(() => Social.invalidate());
    const items = await page.evaluate(() => Social.notifications().then(x => x.map(i => ({ kind: i.kind, href: i.href }))));
    await page.evaluate(() => Social.markNotificationsSeen && Social.markNotificationsSeen());
    const p = (await calls(true)).map(x => x.path);
    assert.ok(p.indexOf('/rest/v1/sc_notifications?select=id,kind,actor_id,chat_id,seen,created_at&order=created_at.desc&limit=40') >= 0);
    assert.ok(p.indexOf('/rest/v1/rpc/sc_my_chats') >= 0);
    assert.ok(p.indexOf('/rest/v1/rpc/sc_notif_seen') >= 0);
    assert.deepStrictEqual(items, [{ kind: 'message', href: '#/chat/d1' }, { kind: 'accepted', href: '#/user/f1' }]);
  });

  await step('no page errors', async () => {
    await page.evaluate(() => { Store.sb = window.__realSb; Social._setBackend('mock'); });
    assert.deepStrictEqual(errors, []);
  });

  await browser.close();
  console.log('\n' + passed + ' passed, ' + failures + ' failed');
  process.exit(failures ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });

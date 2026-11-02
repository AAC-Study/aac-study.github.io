/* Checks supabase/social.sql on a real local PostgreSQL with a tiny Supabase stand-in (test/sb-shim.sql).
   Every rule is tried "from the browser console": as role `authenticated` with a user id in the JWT setting.
   Run:  PGHOST=/var/tmp/scpg PGPORT=5433 node test/social.db.test.js
   (needs psql + a running server where user `postgres` can create databases) */
'use strict';
const { execFileSync } = require('child_process');
const path = require('path');
const assert = require('assert');

const DB = 'sctest_social';
const ROOT = path.join(__dirname, '..');
const base = ['-U', 'postgres', '-v', 'ON_ERROR_STOP=1', '-q', '-X', '-t', '-A'];
function psql(args, input) {
  return execFileSync('psql', base.concat(args), { input: input || undefined, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
}
function admin(sql) { return psql(['-d', DB, '-c', sql]).trim(); }
/* run SQL as a signed-in user; returns {ok, out, err} */
function as(uid, sql) {
  const full = "set role authenticated; select set_config('request.jwt.claim.sub', '" + uid + "', false) \\g /dev/null\n" + sql;
  try { return { ok: true, out: psql(['-d', DB], full).trim() }; }
  catch (e) { return { ok: false, err: String(e.stderr || e.message) }; }
}
function ok(uid, sql) { const r = as(uid, sql); if (!r.ok) throw new Error('expected ok: ' + sql + '\n' + r.err); return r.out; }
function fails(uid, sql, code) {
  const r = as(uid, sql);
  if (r.ok) throw new Error('expected failure (' + code + '): ' + sql + '\n got: ' + r.out);
  if (code && r.err.indexOf(code) < 0) throw new Error('expected ' + code + ' for: ' + sql + '\n got: ' + r.err);
  return r.err;
}

let passed = 0, failed = 0;
function step(name, fn) {
  try { fn(); passed++; console.log('  ok   ' + name); }
  catch (e) { failed++; console.log('  FAIL ' + name + '\n       ' + String(e.message).split('\n').slice(0, 5).join('\n       ')); }
}

psql(['-d', 'postgres', '-c', 'drop database if exists ' + DB]);
psql(['-d', 'postgres', '-c', 'create database ' + DB]);
psql(['-d', DB, '-f', path.join(ROOT, 'test/sb-shim.sql')]);
admin("set client_min_messages = warning");
execFileSync('psql', base.concat(['-d', DB, '-f', path.join(ROOT, 'supabase/schema.sql')]), { env: Object.assign({}, process.env, { PGOPTIONS: '-c client_min_messages=warning' }) });
execFileSync('psql', base.concat(['-d', DB, '-f', path.join(ROOT, 'supabase/social.sql')]), { env: Object.assign({}, process.env, { PGOPTIONS: '-c client_min_messages=warning' }) });
admin("update public.app_secrets set value = 'TEST' where key = 'invite_code'");

const U = {};
['a', 'b', 'c', 'd'].forEach(function (n) {
  U[n] = admin("insert into auth.users(email, raw_user_meta_data) values ('" + n + "@x.y', '{\"name\":\"" + n.toUpperCase() + "\",\"invite\":\"TEST\"}') returning id");
});
const A = U.a, B = U.b, C = U.c, D = U.d;
const rpc = (fn, args) => 'select public.' + fn + '(' + args + ')';
const q = (s) => "'" + s + "'";

console.log('social.sql on PostgreSQL');
step('sql file loads twice (idempotent)', function () {
  execFileSync('psql', base.concat(['-d', DB, '-f', path.join(ROOT, 'supabase/social.sql')]), { env: Object.assign({}, process.env, { PGOPTIONS: '-c client_min_messages=warning' }) });
});
step('direct writes to friendship tables are refused', function () {
  fails(A, "insert into public.friendships(user_a, user_b) values (least(" + q(A) + "::uuid," + q(B) + "::uuid), greatest(" + q(A) + "::uuid," + q(B) + "::uuid))", 'permission denied');
  fails(A, "insert into public.friend_requests(from_id, to_id) values (" + q(B) + "," + q(A) + ")", 'permission denied');
  fails(A, "insert into public.user_marks(owner_id, target_id) values (" + q(B) + "," + q(A) + ")", 'permission denied');
});
step('friend request → notification → accept', function () {
  assert.strictEqual(ok(A, rpc('sc_friend_request', q(B))), 'outgoing');
  assert.strictEqual(ok(B, "select count(*) from public.sc_notifications where kind = 'request'"), '1');
  assert.strictEqual(ok(C, "select count(*) from public.friend_requests"), '0', 'C must not see A→B request');
  assert.strictEqual(ok(B, rpc('sc_friend_accept', q(A))), 'friend');
  assert.strictEqual(ok(A, "select count(*) from public.sc_notifications where kind = 'accepted'"), '1');
  assert.strictEqual(ok(A, "select count(*) from public.friendships"), '1');
});
step('cannot accept a request that was never sent', function () { fails(C, rpc('sc_friend_accept', q(A)), 'sc_err_no_request'); });
step('crossing requests become friendship', function () {
  ok(A, rpc('sc_friend_request', q(C)));
  assert.strictEqual(ok(C, rpc('sc_friend_request', q(A))), 'friend');
  ok(A, rpc('sc_friend_request', q(D))); ok(D, rpc('sc_friend_accept', q(A)));
  ok(B, rpc('sc_friend_request', q(C))); ok(C, rpc('sc_friend_accept', q(B)));
});
step('blocked user cannot send request', function () {
  ok(D, rpc('sc_block', q(B) + ', true'));
  fails(B, rpc('sc_friend_request', q(D)), 'sc_err_blocked');
  assert.strictEqual(ok(B, "select count(*) from public.user_marks"), '0', 'B cannot see that D blocked him');
});
step('direct chat only between friends, and not when blocked', function () {
  fails(B, rpc('sc_open_direct', q(D)), 'sc_err_not_friends');
  const cid = ok(A, rpc('sc_open_direct', q(B)));
  assert.ok(/^[0-9a-f-]{36}$/.test(cid));
  assert.strictEqual(ok(B, rpc('sc_open_direct', q(A))), cid, 'same chat for both');
  assert.strictEqual(ok(C, "select count(*) from public.chats where id = " + q(cid)), '0', 'non-member cannot see chat');
  ok(A, "insert into public.messages(chat_id, body) values (" + q(cid) + ", 'שלום 👋 привет')");
  fails(C, "insert into public.messages(chat_id, body) values (" + q(cid) + ", 'spy')", 'sc_err_not_member');
  // sender is forced to the caller
  ok(B, "insert into public.messages(chat_id, sender_id, body) values (" + q(cid) + ", " + q(A) + ", 'forged')");
  assert.strictEqual(ok(A, "select count(*) from public.messages where chat_id = " + q(cid) + " and body = 'forged' and sender_id = " + q(B)), '1');
  ok(A, rpc('sc_block', q(B) + ', true'));
  fails(B, "insert into public.messages(chat_id, body) values (" + q(cid) + ", 'hey')", 'sc_err_blocked');
  ok(A, rpc('sc_block', q(B) + ', false'));
  ok(B, "insert into public.messages(chat_id, body) values (" + q(cid) + ", 'back')");
  ok(A, rpc('sc_friend_remove', q(B)));
  fails(B, "insert into public.messages(chat_id, body) values (" + q(cid) + ", 'hey')", 'sc_err_not_friends');
  assert.strictEqual(ok(A, "select removed from public.user_marks where target_id = " + q(B)), 't');
  ok(A, rpc('sc_friend_restore', q(B)));
  ok(B, "insert into public.messages(chat_id, body) values (" + q(cid) + ", 'friends again')");
});
step('system messages cannot be forged; edits only change text', function () {
  const cid = ok(A, rpc('sc_open_direct', q(B)));
  fails(A, "insert into public.messages(chat_id, kind, body) values (" + q(cid) + ", 'system', '{}')", 'sc_err_no_rights');
  const mid = ok(A, "insert into public.messages(chat_id, body) values (" + q(cid) + ", 'typo') returning id");
  fails(A, "update public.messages set chat_id = chat_id where id = " + mid, 'permission denied');
  ok(A, "update public.messages set body = 'fixed' where id = " + mid);
  assert.strictEqual(ok(A, "select body || '|' || (edited_at is not null) from public.messages where id = " + mid), 'fixed|true');
  assert.strictEqual(ok(B, "update public.messages set body = 'hacked' where id = " + mid + " returning id"), '', 'B cannot edit A message');
  fails(B, rpc('sc_delete_message', mid), 'sc_err_no_rights');
  ok(B, rpc('sc_react', mid + ", '❤️'"));
  assert.strictEqual(ok(A, "select emoji from public.reactions where message_id = " + mid), '❤️');
  ok(A, rpc('sc_delete_message', mid));
  assert.strictEqual(ok(B, "select deleted::text || coalesce(body, '-') from public.messages where id = " + mid), 'true-');
});
let G;
step('group: only friends, max 50, owner rights', function () {
  fails(B, rpc('sc_create_group', "'Spies', array[" + q(D) + "]::uuid[]"), 'sc_err_not_friends');
  G = ok(A, rpc('sc_create_group', "'Study 🧠', array[" + q(B) + "," + q(C) + "]::uuid[]"));
  assert.strictEqual(ok(B, "select count(*) from public.chat_members where chat_id = " + q(G)), '3');
  assert.strictEqual(ok(D, "select count(*) from public.chat_members where chat_id = " + q(G)), '0');
  const many = []; for (let i = 0; i < 50; i++) many.push("gen_random_uuid()");
  fails(A, rpc('sc_create_group', "'Big', array[" + many.join(',') + "]::uuid[]"), 'sc_err_group_full');
  fails(B, "update public.chats set only_admins = true where id = " + q(G) + " returning id", 'permission denied');
  fails(B, rpc('sc_group_update', q(G) + ", '{\"only_admins\": true}'"), 'sc_err_no_rights');
});
step('group: only admins can write', function () {
  ok(A, rpc('sc_group_update', q(G) + ", '{\"only_admins\": true}'"));
  fails(B, "insert into public.messages(chat_id, body) values (" + q(G) + ", 'hi')", 'sc_err_only_admins');
  ok(A, "insert into public.messages(chat_id, body) values (" + q(G) + ", 'admin speaks')");
  ok(A, rpc('sc_group_update', q(G) + ", '{\"only_admins\": false}'"));
  ok(B, "insert into public.messages(chat_id, body) values (" + q(G) + ", 'hi')");
});
step('group: banned words (any case, any language) on send and edit', function () {
  ok(A, rpc('sc_group_update', q(G) + ", '{\"banned_words\": [\"Spoiler\", \"קללה\"]}'"));
  fails(B, "insert into public.messages(chat_id, body) values (" + q(G) + ", 'big SPOILER here')", 'sc_err_banned_word');
  fails(B, "insert into public.messages(chat_id, body) values (" + q(G) + ", 'זו קללה')", 'sc_err_banned_word');
  const mid = ok(C, "insert into public.messages(chat_id, body) values (" + q(G) + ", 'clean') returning id");
  fails(C, "update public.messages set body = 'spoiler!' where id = " + mid, 'sc_err_banned_word');
  ok(A, rpc('sc_group_update', q(G) + ", '{\"banned_words\": []}'"));
});
step('group: slow mode (members only), admins exempt', function () {
  ok(A, rpc('sc_group_update', q(G) + ", '{\"slow_sec\": 30}'"));
  const e = fails(B, "insert into public.messages(chat_id, body) values (" + q(G) + ", 'second')", 'sc_err_slow');
  assert.ok(/HINT:\s+\d+/.test(e), 'hint carries seconds left');
  ok(A, "insert into public.messages(chat_id, body) values (" + q(G) + ", 'a1')");
  ok(A, "insert into public.messages(chat_id, body) values (" + q(G) + ", 'a2')");
  ok(A, rpc('sc_group_update', q(G) + ", '{\"slow_sec\": 0}'"));
});
step('group: member permissions (text, links, stickers, photos, reactions)', function () {
  ok(A, rpc('sc_group_update', q(G) + ", '{\"p_links\": false, \"p_stickers\": false, \"p_photos\": false, \"p_reactions\": false}'"));
  fails(B, "insert into public.messages(chat_id, body) values (" + q(G) + ", 'see https://evil.example')", 'sc_err_no_links');
  fails(B, "insert into public.messages(chat_id, body) values (" + q(G) + ", 'go to site.com now')", 'sc_err_no_links');
  fails(B, "insert into public.messages(chat_id, kind, body) values (" + q(G) + ", 'sticker', '🦊')", 'sc_err_no_stickers');
  fails(B, "insert into public.messages(chat_id, kind, media_path) values (" + q(G) + ", 'photo', " + q(G + '/' + B + '/x.jpg') + ")", 'sc_err_no_photos');
  const mid = ok(A, "insert into public.messages(chat_id, body) values (" + q(G) + ", 'react to me') returning id");
  fails(B, rpc('sc_react', mid + ", '👍'"), 'sc_err_no_reactions');
  ok(A, rpc('sc_group_update', q(G) + ", '{\"p_text\": false}'"));
  fails(C, "insert into public.messages(chat_id, body) values (" + q(G) + ", 'text')", 'sc_err_no_text');
  ok(A, rpc('sc_group_update', q(G) + ", '{\"p_text\": true, \"p_links\": true, \"p_stickers\": true, \"p_photos\": true, \"p_reactions\": true}'"));
  ok(B, "insert into public.messages(chat_id, kind, media_path) values (" + q(G) + ", 'photo', " + q(G + '/' + B + '/x.jpg') + ")");
  fails(B, "insert into public.messages(chat_id, kind, media_path) values (" + q(G) + ", 'photo', " + q(G + '/' + C + '/x.jpg') + ")", 'sc_err_generic');
});
step('group: restrict until date, ban, admins rights', function () {
  fails(B, rpc('sc_member_action', q(G) + ", " + q(C) + ", 'restrict', now() + interval '1 hour', '{}'"), 'sc_err_no_rights');
  ok(A, rpc('sc_member_action', q(G) + ", " + q(B) + ", 'promote', null, '{\"ban\": true, \"delete\": true}'"));
  fails(B, rpc('sc_member_action', q(G) + ", " + q(C) + ", 'promote', null, '{\"info\": true}'"), 'sc_err_no_rights');
  ok(B, rpc('sc_member_action', q(G) + ", " + q(C) + ", 'restrict', now() + interval '1 hour', '{}'"));
  fails(C, "insert into public.messages(chat_id, body) values (" + q(G) + ", 'muted?')", 'sc_err_restricted');
  ok(B, rpc('sc_member_action', q(G) + ", " + q(C) + ", 'unrestrict', null, '{}'"));
  ok(C, "insert into public.messages(chat_id, body) values (" + q(G) + ", 'free')");
  fails(B, rpc('sc_member_action', q(G) + ", " + q(A) + ", 'kick', null, '{}'"), 'sc_err_owner');
  const cm = ok(C, "insert into public.messages(chat_id, body) values (" + q(G) + ", 'delete me') returning id");
  ok(B, rpc('sc_delete_message', cm));
  ok(B, rpc('sc_member_action', q(G) + ", " + q(C) + ", 'ban', null, '{}'"));
  assert.strictEqual(ok(C, "select count(*) from public.messages where chat_id = " + q(G)), '0', 'banned user no longer reads');
  ok(A, rpc('sc_member_action', q(G) + ", " + q(B) + ", 'demote', null, '{}'"));
  fails(B, rpc('sc_group_add', q(G) + ", array[" + q(C) + "]::uuid[]"), 'sc_err_user_banned');   // plain member cannot lift a ban
  ok(A, rpc('sc_group_add', q(G) + ", array[" + q(C) + "]::uuid[]"));   // owner can lift ban by adding
  fails(A, rpc('sc_leave', q(G)), 'sc_err_owner');
});
step('auto-delete: expires_at set, admins excluded with scope, expired hidden', function () {
  ok(A, rpc('sc_group_update', q(G) + ", '{\"autodel_sec\": 3600, \"autodel_scope\": \"except_admins\"}'"));
  const m1 = ok(C, "insert into public.messages(chat_id, body) values (" + q(G) + ", 'temp') returning id");
  const m2 = ok(A, "insert into public.messages(chat_id, body) values (" + q(G) + ", 'stays') returning id");
  assert.strictEqual(admin("select (expires_at is not null)::text from public.messages where id = " + m1), 'true');
  assert.strictEqual(admin("select (expires_at is null)::text from public.messages where id = " + m2), 'true');
  admin("select set_config('sc.internal', '1', false); update public.messages set expires_at = now() - interval '1 second' where id = " + m1);
  assert.strictEqual(ok(C, "select count(*) from public.messages where id = " + m1), '0');
  ok(A, rpc('sc_group_update', q(G) + ", '{\"autodel_sec\": 0}'"));
});
step('chat list + unread counter + mark read', function () {
  const list = JSON.parse(ok(C, rpc('sc_my_chats', '')));
  const g = list.filter(function (x) { return x.id === G; })[0];
  assert.ok(g && g.kind === 'group' && g.member_count === 3, JSON.stringify(g));
  ok(A, "insert into public.messages(chat_id, body) values (" + q(G) + ", 'new for C')");
  const g2 = JSON.parse(ok(C, rpc('sc_my_chats', ''))).filter(function (x) { return x.id === G; })[0];
  assert.ok(g2.unread >= 1, 'unread ' + g2.unread);
  ok(C, rpc('sc_mark_read', q(G)));
  const g3 = JSON.parse(ok(C, rpc('sc_my_chats', ''))).filter(function (x) { return x.id === G; })[0];
  assert.strictEqual(g3.unread, 0);
});
step('locked styles cannot be saved from the console', function () {
  fails(B, "update public.profiles set prefs = '{\"nickStyle\":\"celestial\"}' where id = " + q(B), 'sc_err_locked');
  ok(B, "update public.profiles set prefs = '{\"nickStyle\":\"accent\",\"bubbleStyle\":\"soft\",\"chatBg\":\"dots\"}' where id = " + q(B));
  fails(B, "update public.profiles set xp = 99999 where id = " + q(B), 'permission denied');
});
step('storage: only members read, upload only into own folder', function () {
  ok(B, "insert into storage.objects(bucket_id, name) values ('chat', " + q(G + '/' + B + '/p.jpg') + ")");
  fails(B, "insert into storage.objects(bucket_id, name) values ('chat', " + q(G + '/' + A + '/p.jpg') + ")", 'row-level security');
  fails(D, "insert into storage.objects(bucket_id, name) values ('chat', " + q(G + '/' + D + '/p.jpg') + ")", 'row-level security');
  assert.strictEqual(ok(D, "select count(*) from storage.objects where bucket_id = 'chat'"), '0');
  assert.strictEqual(ok(C, "select count(*) from storage.objects where bucket_id = 'chat'"), '1');
});
step('public stats show only counts; internal helpers are not callable', function () {
  admin("insert into public.progress(user_id, key, points) values (" + q(B) + ", 'read:x', 10), (" + q(B) + ", 'solve:y', 20), (" + q(B) + ", 'solve:z', 20)");
  const s = JSON.parse(ok(A, rpc('sc_public_stats', q(B))));
  assert.strictEqual(s.read, 1); assert.strictEqual(s.solved, 2);
  fails(A, rpc('sc_are_friends', q(A) + ',' + q(B)), 'permission denied');
  fails(A, rpc('sc_blocked_either', q(A) + ',' + q(D)), 'permission denied');
  fails(A, rpc('sc_system', q(G) + ',' + q(A) + ", 'created', null"), 'permission denied');
});
step('support chat: any user ↔ admins, no friendship needed', function () {
  const sid = ok(D, rpc('sc_support_open', ''));
  assert.strictEqual(ok(D, rpc('sc_support_open', '')), sid, 'same thread');
  ok(D, "insert into public.messages(chat_id, body) values (" + q(sid) + ", 'button broken')");
  assert.strictEqual(ok(A, "select count(*) from public.messages where chat_id = " + q(sid)), '1', 'admin A (first user) reads it');
  ok(A, "insert into public.messages(chat_id, body) values (" + q(sid) + ", 'fixed, thanks')");
  assert.strictEqual(ok(B, "select count(*) from public.chats where id = " + q(sid)), '0', 'other users do not see it');
  fails(D, rpc('sc_pin_message', q(sid) + ', null'), 'sc_err_no_rights');
});
step('admin: invite code get/set, only for admin', function () {
  assert.strictEqual(ok(A, rpc('admin_invite_get', '')), 'TEST');
  fails(B, rpc('admin_invite_get', ''), 'not_admin');
  fails(B, rpc('admin_invite_set', "'HACKED-123'"), 'not_admin');
  fails(A, rpc('admin_invite_set', "'abc'"), 'bad_invite');
  ok(A, rpc('admin_invite_set', "'NEW-CODE-2026'"));
  assert.strictEqual(admin("select value from public.app_secrets where key = 'invite_code'"), 'NEW-CODE-2026');
  let err = '';
  try { admin("insert into auth.users(email, raw_user_meta_data) values ('z@x.y', '{\"name\":\"Z\",\"invite\":\"TEST\"}')"); } catch (e) { err = String(e.stderr || e.message); }
  assert.ok(/invalid_invite/.test(err), 'old code no longer works: ' + err);
  admin("update public.app_secrets set value = 'TEST' where key = 'invite_code'");
});
step('admin: ban blocks everything, unban restores; users cannot ban or unban themselves', function () {
  fails(B, rpc('admin_ban', q(C) + ', true'), 'not_admin');
  fails(A, rpc('admin_ban', q(A) + ', true'), 'ban_self');
  fails(B, "update public.profiles set banned = false where id = " + q(B), 'permission denied');
  admin("insert into auth.sessions(user_id) values (" + q(C) + ")");
  ok(A, rpc('admin_ban', q(C) + ', true'));
  assert.strictEqual(admin("select banned_until > now() from auth.users where id = " + q(C)), 't');
  assert.strictEqual(admin("select count(*) from auth.sessions where user_id = " + q(C)), '0');
  fails(C, rpc('sc_friend_request', q(D)), 'sc_err_banned');
  assert.strictEqual(ok(C, "select count(*) from public.messages"), '0', 'banned reads no chats');
  fails(C, "insert into public.issues(info) values ('{}')", 'row-level security');
  fails(C, "select public.award('read:x')", 'banned');
  fails(C, "update public.profiles set banned = false where id = " + q(C), 'permission denied');
  ok(A, rpc('admin_ban', q(C) + ', false'));
  assert.strictEqual(admin("select banned_until is null from auth.users where id = " + q(C)), 't');
  assert.ok(Number(ok(C, "select count(*) from public.chats")) > 0, 'after unban C sees chats again');
});
step('drafts: own rows only, upsert works, limit counts only new keys', function () {
  ok(B, "insert into public.drafts(user_id, key, data) values (" + q(B) + ", 'solve:l:t1', '{\"text\":\"x\"}') on conflict (user_id, key) do update set data = excluded.data");
  ok(B, "insert into public.drafts(user_id, key, data) values (" + q(B) + ", 'solve:l:t1', '{\"text\":\"y\"}') on conflict (user_id, key) do update set data = excluded.data");
  assert.strictEqual(ok(B, "select data->>'text' from public.drafts"), 'y');
  assert.strictEqual(ok(D, "select count(*) from public.drafts"), '0', 'D does not see B drafts');
  fails(D, "insert into public.drafts(user_id, key, data) values (" + q(B) + ", 'k', '{}')", 'row-level security');
  ok(D, "update public.drafts set data = '{}' where user_id = " + q(B));
  assert.strictEqual(admin("select data->>'text' from public.drafts where user_id = " + q(B)), 'y', 'D cannot change B drafts');
});
step('anon gets nothing', function () {
  const r = as('', "set role anon; select count(*) from public.messages");
  assert.ok(!r.ok && /permission denied/.test(r.err), r.err || r.out);
});

console.log('\n' + passed + ' passed, ' + failed + ' failed');
process.exit(failed ? 1 : 0);

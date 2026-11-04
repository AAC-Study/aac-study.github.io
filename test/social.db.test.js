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
admin("update public.app_secrets set value = '' where key = 'email_domains'");   // тестовые адреса @x.y

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
step('signup only with @gmail.com / @mail.ru (when set); email change too', function () {
  admin("update public.app_secrets set value = 'gmail.com, mail.ru' where key = 'email_domains'");
  const ins = (e) => "insert into auth.users(email, raw_user_meta_data) values ('" + e + "', '{\"name\":\"X\",\"invite\":\"TEST\"}') returning id";
  let err = ''; try { admin(ins('dom1@yahoo.com')); } catch (e) { err = String(e.stderr || e.message); }
  assert(/bad_email_domain/.test(err), 'yahoo refused: ' + err);
  err = ''; try { admin(ins('dom2@gmail.com.evil.io')); } catch (e) { err = String(e.stderr || e.message); }
  assert(/bad_email_domain/.test(err), 'lookalike refused');
  const g = admin(ins('Dom3@GMail.com')); assert(g, 'gmail ok (any case)');
  const m = admin(ins('dom4@mail.ru')); assert(m, 'mail.ru ok');
  err = ''; try { admin("update auth.users set email = 'dom3@outlook.com' where id = '" + g + "'"); } catch (e) { err = String(e.stderr || e.message); }
  assert(/bad_email_domain/.test(err), 'change to outlook refused');
  admin("update auth.users set email = 'dom3b@mail.ru' where id = '" + g + "'");
  admin("delete from auth.users where id in ('" + g + "', '" + m + "')");
  admin("update public.app_secrets set value = '' where key = 'email_domains'");
});
step('guest problem report: anon can send, limits, nobody but admin reads it', function () {
  const anon = (sql) => { try { return { ok: true, out: psql(['-d', DB], 'set role anon;\n' + sql).trim() }; } catch (e) { return { ok: false, err: String(e.stderr || e.message) }; } };
  const r = anon("select public.report_issue_guest('{\"type\":\"user\",\"text\":\"cannot sign up\",\"email\":\"g@gmail.com\"}'::jsonb)");
  assert(r.ok, r.err); const id = r.out;
  assert.strictEqual(admin("select info->>'type' || '|' || coalesce(user_id::text, 'null') from public.issues where id = " + id), 'guest|null');
  assert(!anon("select count(*) from public.issues").ok || anon("select count(*) from public.issues").out === '0', 'anon reads nothing');
  assert.strictEqual(ok(B, "select count(*) from public.issues where id = " + id), '0', 'student does not see guest report');
  assert.strictEqual(ok(A, "select count(*) from public.issues where id = " + id), '1', 'admin sees it');
  const odd = anon("select public.report_issue_guest('{\"err\":{\"x\":1},\"where\":[1],\"role\":\"admin\",\"text\":\"t\",\"images\":[\"javascript:x\",\"data:image/png;base64,AA\",5]}'::jsonb)");
  assert(odd.ok, odd.err);
  assert.strictEqual(admin("select (info - 'type')::text from public.issues where id = " + odd.out), '{"text": "t", "images": ["data:image/png;base64,AA"]}', 'only known text fields and data:image pictures are kept');
  const big = anon("select public.report_issue_guest(jsonb_build_object('text', repeat('x', 1700000)))");
  assert(!big.ok && /report_too_big/.test(big.err), 'too big refused');
  // one address (IP): 5 per hour, then refused; another address still works
  const fromIp = (ip, txt) => anon("select set_config('request.headers', '{\"cf-connecting-ip\":\"" + ip + "\"}', false) \\g /dev/null\nselect public.report_issue_guest('{\"text\":\"" + txt + "\"}'::jsonb)");
  for (let i = 0; i < 5; i++) { const x = fromIp('1.2.3.4', 'ip' + i); assert(x.ok, x.err); }
  const ipOver = fromIp('1.2.3.4', 'ip6');
  assert(!ipOver.ok && /too_many_reports/.test(ipOver.err), '6th from one address refused');
  assert(fromIp('5.6.7.8', 'other').ok, 'other address still works');
  assert.strictEqual(admin("select count(*) from public.issues where src is not null and info::text like '%1.2.3.4%'"), '0', 'IP not stored in clear');
  // whole site: 30 per hour (2 + 6 so far)
  for (let i = 0; i < 22; i++) assert(anon("select public.report_issue_guest('{\"text\":\"n" + i + "\"}'::jsonb)").ok);
  const over = anon("select public.report_issue_guest('{\"text\":\"one too many\"}'::jsonb)");
  assert(!over.ok && /too_many_reports/.test(over.err), '31st in an hour refused');
  const ins = anon("insert into public.issues(info) values ('{\"text\":\"direct\"}')");
  assert(!ins.ok, 'anon cannot insert directly');
  admin("delete from public.issues where user_id is null");
});
step('security 03.11: drafts total size, prefs size, message chat id hidden from strangers', function () {
  const chunk = "jsonb_build_object('s', repeat('x', 390000))";
  let err = '';
  for (let i = 0; i < 40 && !err; i++) { const r = as(B, "insert into public.drafts(key, data) values ('big" + i + "', " + chunk + ")"); if (!r.ok) err = r.err; }
  assert(/too_many_drafts/.test(err), 'drafts over ~15 MB refused: ' + err.slice(0, 200));
  admin("delete from public.drafts where key like 'big%'");
  fails(B, "update public.profiles set prefs = jsonb_build_object('x', repeat('y', 9000)) where id = '" + B + "'", 'profiles_prefs_size');
  const mid = admin("select id from public.messages order by id limit 1");
  if (mid) {
    const cid = admin("select chat_id from public.messages where id = " + mid);
    const members = admin("select string_agg(user_id::text, ',') from public.chat_members where chat_id = '" + cid + "'");
    const outsider = [A, B, C].filter(u => members.indexOf(u) < 0)[0];
    if (outsider) assert.strictEqual(ok(outsider, "select coalesce(public.sc_msg_chat(" + mid + ")::text, 'none')"), 'none');
  }
});
step('presence: sc_seen marks me, sc_presence shows others, not to blocked people, not to anon', function () {
  ok(B, "select public.sc_seen()");
  const t1 = admin("select last_seen is not null from public.profiles where id = '" + B + "'");
  assert.strictEqual(t1, 't');
  const seen = ok(C, "select count(*) from public.sc_presence(array['" + B + "'::uuid])");
  assert.strictEqual(seen, '1');
  const anon = (() => { try { psql(['-d', DB], "set role anon;\nselect public.sc_presence(array['" + B + "'::uuid]);"); return 'ran'; } catch (e) { return String(e.stderr || e.message); } })();
  assert(/permission denied/.test(anon), 'anon refused: ' + anon.slice(0, 120));
  admin("insert into public.user_marks(owner_id, target_id, blocked) values ('" + B + "', '" + D + "', true) on conflict (owner_id, target_id) do update set blocked = true");
  assert.strictEqual(ok(D, "select count(*) from public.sc_presence(array['" + B + "'::uuid])"), '0', 'blocked person does not see it');
  admin("update public.user_marks set blocked = false where owner_id = '" + B + "' and target_id = '" + D + "'");
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
admin("update public.app_secrets set value = '' where key = 'email_domains'");   // тестовые адреса @x.y
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
step('hardening: push endpoint allowlist, issue limits, award catalog', function () {
  fails(B, "insert into public.push_subs(endpoint, user_id, p256dh, auth) values ('http://127.0.0.1:9/x', " + q(B) + ", 'k', 'a')", 'push_subs_endpoint_ok');
  fails(B, "insert into public.push_subs(endpoint, user_id, p256dh, auth) values ('https://fcm.googleapis.com.evil.io/x', " + q(B) + ", 'k', 'a')", 'push_subs_endpoint_ok');
  ok(B, "insert into public.push_subs(endpoint, user_id, p256dh, auth) values ('https://fcm.googleapis.com/fcm/send/abc', " + q(B) + ", 'k', 'a')");
  for (let i = 0; i < 12; i++) ok(B, "insert into public.push_subs(endpoint, user_id, p256dh, auth) values ('https://fcm.googleapis.com/fcm/send/n" + i + "', " + q(B) + ", 'k', 'a')");
  assert.strictEqual(admin("select count(*) from public.push_subs where user_id = " + q(B)), '10', 'max 10 devices');
  fails(B, "insert into public.issues(info) values (jsonb_build_object('t', repeat('x', 5000000)))", 'issues_info_size');
  for (let i = 0; i < 10; i++) ok(D, "insert into public.issues(info) values ('{\"t\":1}')");
  fails(D, "insert into public.issues(info) values ('{\"t\":1}')", 'too_many_reports');
  // empty catalog: anything allowed (old setups keep working)
  ok(B, "select public.award('read:any-lesson')");
  admin("insert into public.award_keys(key) values ('read:math-2026-11-01'), ('solve:math-2026-11-01:t1')");
  fails(B, "select public.award('read:forged-1')", 'bad_key');
  fails(B, "select public.award('solve:math-2026-11-01:fake')", 'bad_key');
  ok(B, "select public.award('solve:math-2026-11-01:t1', 'solve', 0)");
  ok(B, "select public.award('download:math-2026-11-01:ru')");
  fails(B, "select public.award('download:math-2026-11-01:xx')", 'bad_key');
  fails(B, "select count(*) from public.award_keys", 'permission denied');
});
step('anti-spam 04.11: messages, edits, reactions, requests, groups, uploads, avatars', function () {
  const cid = ok(A, rpc('sc_open_direct', q(C)));
  // 10 messages in a row are fine, the 11th right away is refused with a wait time
  ok(C, "do $x$ begin for i in 1..10 loop insert into public.messages(chat_id, body) values (" + q(cid) + ", 'm' || i); end loop; end $x$");
  const e = fails(C, "insert into public.messages(chat_id, body) values (" + q(cid) + ", 'm11')", 'sc_err_rate');
  assert.ok(/HINT:\s+[0-9]+/.test(e), 'hint with seconds: ' + e);
  // the other person is not affected
  ok(A, "insert into public.messages(chat_id, body) values (" + q(cid) + ", 'still fine')");
  // after the wait it works again (simulate time passing)
  admin("update public.sc_rate set at = at - interval '10 seconds' where user_id = " + q(C) + " and kind = 'msg'");
  ok(C, "insert into public.messages(chat_id, body) values (" + q(cid) + ", 'after wait')");
  // edits
  const mid = ok(C, "select id from public.messages where chat_id = " + q(cid) + " and body = 'after wait'");
  ok(C, "do $x$ begin for i in 1..10 loop update public.messages set body = 'e' || i where id = " + mid + "; end loop; end $x$");
  fails(C, "update public.messages set body = 'e11' where id = " + mid, 'sc_err_rate');
  // reactions
  ok(A, "do $x$ begin for i in 1..20 loop perform public.sc_react(" + mid + ", case when i % 2 = 0 then '👍' else '❤' end); end loop; end $x$");
  fails(A, rpc('sc_react', mid + ", '😀'"), 'sc_err_rate');
  // friend requests: burst of 10
  admin("insert into public.sc_rate(user_id, kind, tokens) values (" + q(D) + ", 'friend', 0.5)");
  fails(D, rpc('sc_friend_request', q(C)), 'sc_err_rate');
  // groups: 3 in a row (A already made groups earlier in this test file)
  admin("delete from public.sc_rate where kind = 'group'");
  ok(A, "do $x$ begin for i in 1..3 loop perform public.sc_create_group('g' || i, array[" + q(C) + "]::uuid[]); end loop; end $x$");
  fails(A, rpc('sc_create_group', "'g4', array[" + q(C) + "]::uuid[]"), 'sc_err_rate');
  // nobody can read or reset the counters, nor call the helper directly
  fails(C, "select count(*) from public.sc_rate", 'permission denied');
  fails(C, "delete from public.sc_rate", 'permission denied');
  fails(C, "select public.sc_rate_take('msg', 1000, 0.001)", 'permission denied');
  // chat files: 60 per hour
  admin("insert into storage.objects(bucket_id, name) select 'chat', " + q(cid + '/' + C + '/f') + " || g from generate_series(1, 60) g");
  fails(C, "insert into storage.objects(bucket_id, name) values ('chat', " + q(cid + '/' + C + '/x.jpg') + ")", 'row-level security');
  ok(A, "insert into storage.objects(bucket_id, name) values ('chat', " + q(cid + '/' + A + '/x.jpg') + ")");
  // chat files: ~300 MB total
  admin("update storage.objects set created_at = now() - interval '2 hours', metadata = '{\"size\":6000000}' where name like " + q(cid + '/' + C + '/f%'));
  fails(C, "insert into storage.objects(bucket_id, name) values ('chat', " + q(cid + '/' + C + '/y.jpg') + ")", 'row-level security');
  // avatars: at most 5 files in own folder
  for (let i = 0; i < 5; i++) ok(D, "insert into storage.objects(bucket_id, name) values ('avatars', " + q(D + '/avatar-' + i + '.jpg') + ")");
  fails(D, "insert into storage.objects(bucket_id, name) values ('avatars', " + q(D + '/avatar-9.jpg') + ")", 'row-level security');
});
step('account can be deleted even with messages (text, system, deleted); messages stay without author', function () {
  const E = admin("insert into auth.users(email, raw_user_meta_data) values ('del1@gmail.com', '{\"name\":\"E\",\"invite\":\"TEST\"}') returning id");
  const sid = ok(E, rpc('sc_support_open', ''));
  const m1 = ok(E, "insert into public.messages(chat_id, body) values (" + q(sid) + ", 'hi') returning id");
  ok(E, "insert into public.messages(chat_id, body) values (" + q(sid) + ", 'bye')");
  admin("select set_config('sc.internal', '1', false); insert into public.messages(chat_id, sender_id, kind, body) values (" + q(sid) + ", " + q(E) + ", 'system', 'x'); update public.messages set deleted = true where id = " + m1);
  admin("delete from auth.users where id = " + q(E));
  assert.strictEqual(admin("select count(*) from public.profiles where id = " + q(E)), '0', 'profile gone');
  assert.strictEqual(admin("select count(*) || '|' || count(sender_id) from public.messages where chat_id = " + q(sid)), '3|0', 'messages kept, author cleared');
  // a normal user still cannot clear the author of a message
  const ma = ok(A, "insert into public.messages(chat_id, body) values (" + q(sid) + ", 'admin here') returning id");
  fails(A, "update public.messages set sender_id = null where id = " + ma, 'permission denied');
  assert.strictEqual(admin("select sender_id from public.messages where id = " + ma), A, 'author unchanged');
  // the one-off script given to the admin for 04.11 works too (sc.internal path)
  const F = admin("insert into auth.users(email, raw_user_meta_data) values ('del2@gmail.com', '{\"name\":\"F\",\"invite\":\"TEST\"}') returning id");
  const sf = ok(F, rpc('sc_support_open', ''));
  ok(F, "insert into public.messages(chat_id, body) values (" + q(sf) + ", 'x')");
  admin("insert into storage.objects(bucket_id, name, owner) values ('avatars', " + q(F + '/a.jpg') + ", " + q(F) + ")");
  psql(['-d', DB], "begin; set local sc.internal = '1'; update storage.objects set owner = null where owner in (select id from auth.users where email in ('del2@gmail.com')); delete from auth.users where email in ('del2@gmail.com'); commit;");
  assert.strictEqual(admin("select count(*) from auth.users where id = " + q(F)), '0', 'deleted by script');
});
step('anon gets nothing', function () {
  const r = as('', "set role anon; select count(*) from public.messages");
  assert.ok(!r.ok && /permission denied/.test(r.err), r.err || r.out);
});

console.log('\n' + passed + ' passed, ' + failed + ' failed');
process.exit(failed ? 1 : 0);

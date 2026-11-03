/* Homework "I did it" + reminder schedule on a real local PostgreSQL (Supabase stand-in test/sb-shim.sql).
   Also runs the exact SQL that setup.html copies (homework list + cron block; locally there is no pg_cron,
   so the cron part must be skipped without breaking anything).
   Run:  PGHOST=/var/tmp/scpg PGPORT=5433 node test/hw.db.test.js   (static server on :8765 for setup.html) */
'use strict';
const { execFileSync } = require('child_process');
const path = require('path');
const assert = require('assert');
const { chromium } = require('playwright');

const DB = 'sctest_hw';
const ROOT = path.join(__dirname, '..');
const base = ['-U', 'postgres', '-v', 'ON_ERROR_STOP=1', '-q', '-X', '-t', '-A'];
const ENV = Object.assign({}, process.env, { PGOPTIONS: '-c client_min_messages=warning' });
function psql(args, input) { return execFileSync('psql', base.concat(args), { input: input || undefined, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'], env: ENV }); }
function admin(sql) { return psql(['-d', DB, '-c', sql]).trim(); }
function as(uid, sql) {
  const full = "set role authenticated; select set_config('request.jwt.claim.sub', '" + uid + "', false) \\g /dev/null\n" + sql;
  try { return { ok: true, out: psql(['-d', DB], full).trim() }; } catch (e) { return { ok: false, err: String(e.stderr || e.message) }; }
}
function ok(uid, sql) { const r = as(uid, sql); if (!r.ok) throw new Error('expected ok: ' + sql + '\n' + r.err); return r.out; }
function fails(uid, sql) { const r = as(uid, sql); if (r.ok) throw new Error('expected failure: ' + sql + '\n got: ' + r.out); return r.err; }
let passed = 0, failed = 0;
async function step(name, fn) {
  try { await fn(); passed++; console.log('  ok   ' + name); }
  catch (e) { failed++; console.log('  FAIL ' + name + '\n       ' + String(e.message).split('\n').slice(0, 6).join('\n       ')); }
}

(async () => {
  /* the SQL exactly as the "copy" button on setup.html builds it */
  const b = await chromium.launch(); const ctx = await b.newContext({ permissions: ['clipboard-read', 'clipboard-write'] }); const p = await ctx.newPage();
  await ctx.route(/\/js\/config\.js(\?.*)?$/, r => r.fulfill({ contentType: 'application/javascript', body: "window.APP_CONFIG={SUPABASE_URL:'https://zckcgydjbjpanegmyzvs.supabase.co',SUPABASE_ANON_KEY:'sb_publishable_test',MOCK_INVITE_CODE:'',TURNSTILE_SITE_KEY:''};" }));
  await p.goto('http://localhost:8765/setup.html'); await p.waitForFunction(() => !document.getElementById('copyDb').disabled, null, { timeout: 15000 });
  await p.fill('#code', 'TESTCODE1'); await p.click('#copyDb'); await p.waitForTimeout(300);
  const sql = await p.evaluate(() => navigator.clipboard.readText());
  await b.close();

  psql(['-d', 'postgres', '-c', 'drop database if exists ' + DB]);
  psql(['-d', 'postgres', '-c', 'create database ' + DB]);
  psql(['-d', DB, '-f', path.join(ROOT, 'test/sb-shim.sql')]);
  console.log('homework tables + setup SQL');
  await step('setup SQL has the homework list and the reminder schedule', () => {
    assert(/insert into public\.hw_items\(id, due, title\) values/.test(sql));
    assert(/'sql-2026-10-29-ptiha', '2026-11-03T12:00:00\+02:00'::timestamptz/.test(sql), 'due date');
    assert(/cron\.schedule\('hw-remind', '\*\/10 \* \* \* \*'/.test(sql) && /zckcgydjbjpanegmyzvs\.supabase\.co\/functions\/v1\/push/.test(sql) && /'action', 'hw_tick'/.test(sql));
  });
  await step('whole setup SQL runs (twice) even without pg_cron', () => {
    const out1 = psql(['-d', DB], sql); const out2 = psql(['-d', DB], sql);
    assert(/Готово! База настроена\. Напоминания: ✗/.test(out1 + out2), out2.slice(-300));
    assert.strictEqual(admin('select count(*) from public.hw_items'), String(2));
    assert.strictEqual(admin("select count(*) from public.app_secrets where key = 'cron_key' and length(value) = 64"), '1');
  });
  await step('cron job SQL itself is valid: with stand-ins for cron.schedule / net.http_post it posts {action: hw_tick, key}', () => {
    admin("create schema if not exists cron; create schema if not exists net; create table if not exists net.calls(url text, headers jsonb, body jsonb);" +
      "create or replace function net.http_post(url text, headers jsonb, body jsonb) returns bigint language sql as $$ insert into net.calls values (url, headers, body) returning 1::bigint $$;" +
      "create or replace function cron.schedule(name text, sched text, cmd text) returns bigint language plpgsql as $$ begin execute cmd; return 1; end $$;");
    const block = sql.slice(sql.indexOf('do $cron$'), sql.indexOf('end $cron$;') + 'end $cron$;'.length)
      .replace(/^\s*create extension[^\n]*\n/gm, '').replace(/exception when others then raise notice[^\n]*\n/, '');
    psql(['-d', DB], block);
    const row = admin("select url || ' ' || (body->>'action') || ' ' || (body->>'key' = (select value from public.app_secrets where key = 'cron_key'))::text || ' ' || (headers->>'apikey') from net.calls");
    assert.strictEqual(row, 'https://zckcgydjbjpanegmyzvs.supabase.co/functions/v1/push hw_tick true sb_publishable_test');
  });
  admin("update public.app_secrets set value = '' where key = 'email_domains'");
  const A = admin("insert into auth.users(email, raw_user_meta_data) values ('a@x.y', '{\"name\":\"A\",\"invite\":\"TESTCODE1\"}') returning id");
  const B = admin("insert into auth.users(email, raw_user_meta_data) values ('b@x.y', '{\"name\":\"B\",\"invite\":\"TESTCODE1\"}') returning id");
  await step('"I did it": own mark only, only for real homework, can undo', () => {
    ok(A, "insert into public.hw_done(hw_id) values ('sql-2026-10-29-ptiha')");
    assert.strictEqual(ok(A, 'select hw_id from public.hw_done'), 'sql-2026-10-29-ptiha');
    assert.strictEqual(ok(B, 'select count(*) from public.hw_done'), '0', 'B does not see A');
    fails(B, "insert into public.hw_done(user_id, hw_id) values ('" + A + "', 'fullstack-2026-10-28-mesakem')");
    fails(A, "insert into public.hw_done(hw_id) values ('no-such-homework')");
    fails(A, "update public.hw_done set hw_id = 'fullstack-2026-10-28-mesakem'");
    ok(B, "delete from public.hw_done");   // B cannot delete A's row (RLS: 0 rows)
    assert.strictEqual(admin('select count(*) from public.hw_done'), '1');
    ok(A, "delete from public.hw_done where hw_id = 'sql-2026-10-29-ptiha'");
    assert.strictEqual(admin('select count(*) from public.hw_done'), '0');
  });
  await step('nobody outside can read or change the homework list or the cron key', () => {
    fails(A, "insert into public.hw_items(id) values ('x')");
    fails(A, "delete from public.hw_items");
    assert.strictEqual(ok(A, 'select count(*) from public.hw_items'), '2');
    assert.strictEqual(ok(A, 'select count(*) from public.app_secrets'), '0');
  });
  console.log('\n' + passed + ' passed, ' + failed + ' failed');
  process.exit(failed ? 1 : 0);
})();

/* Runs supabase/functions/push/index.ts under Node (types stripped) with a fake database and fake push service,
   and checks the daily homework reminder (action hw_tick).
   Run: node --experimental-strip-types test/push-hw.test.mjs */
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const SP = process.env.SP || '/tmp';
let src = fs.readFileSync(path.join(ROOT, 'supabase/functions/push/index.ts'), 'utf8');
src = src.replace(/^import \* as webpush from .*$/m, 'const webpush = globalThis.__webpush;');
const tmp = path.join(SP, 'push-under-test.ts');
fs.writeFileSync(tmp, src);

/* ---- fake world ---- */
const W = { now: null, items: [], subs: [], profiles: [], done: [], log: new Set(), sent: [], cron: 'k'.repeat(64) };
const RealDate = Date, realNow = RealDate.now.bind(RealDate);
class FakeDate extends RealDate { constructor(...a) { super(...(a.length ? a : [FakeDate.now()])); } static now() { return W.now ? W.now.getTime() : realNow(); } }
globalThis.Date = FakeDate;
globalThis.__webpush = {
  importVapidKeys: async () => ({}), exportApplicationServerKey: async () => 'PUB', Urgency: { High: 'high' }, PushMessageError: class extends Error {},
  ApplicationServer: { new: async () => ({ subscribe: (s) => ({ pushTextMessage: async (txt) => { W.sent.push({ endpoint: s.endpoint, msg: JSON.parse(txt) }); } }) }) },
};
let handler = null;
globalThis.Deno = { env: { get: (k) => ({ SUPABASE_URL: 'https://x.supabase.co', SUPABASE_SECRET_KEYS: '{"default":"sb_secret_x"}' })[k] }, serve: (fn) => { handler = fn; } };
const J = (o, st = 200) => new Response(JSON.stringify(o), { status: st, headers: { 'Content-Type': 'application/json' } });
globalThis.fetch = async (url, init = {}) => {
  const u = new URL(url), m = init.method || 'GET', q = u.searchParams;
  const p = u.pathname.replace('/rest/v1/', '');
  if (u.pathname === '/auth/v1/user') return J({}, 401);
  if (p === 'app_secrets') { const key = q.get('key').slice(3); if (key === 'cron_key') return J([{ value: W.cron }]); if (key === 'vapid') return J([{ value: '{}' }]); return J([]); }
  if (p === 'hw_items') return J(W.items);
  if (p === 'push_subs') {
    const ids = (q.get('user_id') || '').replace(/^in\.\(|\)$/g, '').split(',').filter(Boolean);
    return J(W.subs.filter((s) => !ids.length || ids.includes(s.user_id)));
  }
  if (p === 'profiles') { const ids = q.get('id').replace(/^in\.\(|\)$/g, '').split(','); return J(W.profiles.filter((x) => ids.includes(x.id))); }
  if (p === 'hw_done') return J(W.done);
  if (p === 'push_log' && m === 'POST') { const rows = JSON.parse(init.body).filter((r) => !W.log.has(r.key)); rows.forEach((r) => W.log.add(r.key)); return J(rows); }
  if (p === 'rpc/push_take') return J(0);
  return J([]);
};
await import(pathToFileURL(tmp).href);
const tick = async (key = W.cron) => { const r = await handler(new Request('https://f/push', { method: 'POST', body: JSON.stringify({ action: 'hw_tick', key }) })); return { status: r.status, body: await r.json() }; };

let passed = 0, failed = 0;
async function step(name, fn) { try { await fn(); passed++; console.log('  ok   ' + name); } catch (e) { failed++; console.log('  FAIL ' + name + '\n       ' + String(e && e.stack || e).split('\n').slice(0, 5).join('\n       ')); } }
const sub = (uid, lang) => ({ user_id: uid, endpoint: 'https://fcm.googleapis.com/fcm/send/' + uid, p256dh: 'p', auth: 'a', lang, origin: 'https://aac-study.github.io' });
function reset() {
  W.items = [{ id: 'sql-1', due: '2026-11-20T12:00:00+02:00', title: { he: 'SQL', ru: 'Задание SQL', en: 'SQL task' } }, { id: 'old', due: '2026-10-01T12:00:00+02:00', title: { ru: 'Старое' } }];
  W.subs = [sub('dflt', 'ru'), sub('off', 'ru'), sub('ny', 'en'), sub('done', 'ru'), sub('auto', 'he')];
  W.profiles = [
    { id: 'dflt', prefs: {} },                                                     // по умолчанию: Израиль, 11:00
    { id: 'off', prefs: { hwRemind: { on: false } } },
    { id: 'ny', prefs: { hwRemind: { on: true, tz: 'America/New_York', time: '09:30' } } },
    { id: 'done', prefs: {} },
    { id: 'auto', prefs: { hwRemind: { tz: 'Europe/Athens', time: '12:00' } } },
  ];
  W.done = [{ user_id: 'done', hw_id: 'sql-1' }]; W.log = new Set(); W.sent = [];
}
const who = () => W.sent.map((s) => s.endpoint.split('/').pop()).sort();

await step('wrong or missing key → 403, nothing sent', async () => {
  reset(); W.now = new RealDate('2026-11-04T09:05:00Z');   // 11:05 in Israel
  assert.strictEqual((await tick('nope')).status, 403);
  assert.strictEqual((await tick('')).status, 403);
  assert.deepStrictEqual(W.sent, []);
});
await step('11:05 Israel: default person gets it (in Russian, with the task name); switched off / all done / other zones do not', async () => {
  reset(); W.now = new RealDate('2026-11-04T09:05:00Z');
  const r = await tick();
  assert.strictEqual(r.status, 200);
  assert.deepStrictEqual(who(), ['dflt']);   // Athens person chose 12:00
  const m = W.sent[0].msg;
  assert.ok(/Домашнее задание/.test(m.title) && /Задание SQL/.test(m.body) && /Я сделал/.test(m.body) && m.url === '#/homework', JSON.stringify(m));
});
await step('only once a day: the next ticks the same day send nothing to the same person', async () => {
  reset(); W.now = new RealDate('2026-11-04T09:05:00Z'); await tick();
  W.sent = []; W.now = new RealDate('2026-11-04T09:15:00Z'); await tick();
  assert.deepStrictEqual(who(), []);
});
await step('the chosen country and time: Athens 12:00, New York 09:30', async () => {
  reset(); W.now = new RealDate('2026-11-04T09:05:00Z'); await tick(); W.sent = [];
  W.now = new RealDate('2026-11-04T10:02:00Z'); await tick();     // Athens 12:02 (UTC+2)
  assert.deepStrictEqual(who(), ['auto']);
  assert.ok(/שיעורי בית/.test(W.sent[0].msg.title), 'Hebrew');
  W.sent = []; W.now = new RealDate('2026-11-04T14:40:00Z'); await tick();     // New York 09:40 (UTC-5)
  assert.deepStrictEqual(who(), ['ny']);
});
await step('before the chosen time and long after it: nothing', async () => {
  reset(); W.now = new RealDate('2026-11-04T08:50:00Z'); await tick();   // 10:50 Israel
  assert.deepStrictEqual(who(), []);
  W.now = new RealDate('2026-11-04T13:30:00Z'); await tick();            // 15:30 Israel — window is 2 h
  assert.deepStrictEqual(who(), []);
});
await step('when every homework is done or past its deadline: nothing for anyone', async () => {
  reset(); W.items = [W.items[1]]; W.now = new RealDate('2026-11-04T09:05:00Z');
  const r = await tick();
  assert.deepStrictEqual(r.body, { sent: 0, open: 0 });
  assert.deepStrictEqual(who(), []);
});
await step('next day it comes again', async () => {
  reset(); W.now = new RealDate('2026-11-04T09:05:00Z'); await tick(); W.sent = [];
  W.now = new RealDate('2026-11-05T09:05:00Z'); await tick();
  assert.deepStrictEqual(who(), ['dflt']);
});
await step('several homework left → count in the text', async () => {
  reset(); W.items.push({ id: 'html-1', due: null, title: { ru: 'HTML' } }); W.now = new RealDate('2026-11-04T09:05:00Z'); await tick();
  assert.ok(/заданий: 2/.test(W.sent.find((s) => s.endpoint.endsWith('dflt')).msg.body));
});
fs.unlinkSync(tmp);
console.log('\n' + passed + ' passed, ' + failed + ' failed');
process.exit(failed ? 1 : 0);

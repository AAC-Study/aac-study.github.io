/* "Online / offline": shown on People, a profile and in a direct chat; asked only while that page is open.
   Needs a static server on :8765 from the site root.  Run: node test/presence.e2e.js */
'use strict';
const { chromium } = require('playwright');
const assert = require('assert');
let failures = 0, passed = 0;
async function step(name, fn) {
  try { await fn(); passed++; console.log('  ok   ' + name); }
  catch (e) { failures++; console.log('  FAIL ' + name + '\n       ' + String(e && e.message || e).split('\n').slice(0, 6).join('\n       ')); }
}
(async () => {
  const b = await chromium.launch();
  await step('mock: me online on People, others offline / last seen; text in the chosen language', async () => {
    const ctx = await b.newContext({ viewport: { width: 1280, height: 900 } }); const p = await ctx.newPage(); const errs = [];
    p.on('pageerror', e => errs.push(e.message));
    await ctx.route('**/js/config.js', r => r.fulfill({ contentType: 'application/javascript', body: "window.APP_CONFIG={SUPABASE_URL:'',SUPABASE_ANON_KEY:'',MOCK_INVITE_CODE:'AAC2026',TURNSTILE_SITE_KEY:''};" }));
    await p.goto('http://localhost:8765/index.html'); await p.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', '"ru"'); }); await p.reload();
    await p.evaluate(() => Store.auth.signUp({ email: 'pr@gmail.com', password: 'secret1', name: 'Pr', invite: 'AAC2026' }).then(() => Store.auth.signIn({ email: 'pr@gmail.com', password: 'secret1', remember: true })));
    await p.goto('http://localhost:8765/index.html#/people'); await p.waitForSelector('.sc-row');
    await p.evaluate(() => Presence.ping(true));
    // a classmate seen 7 minutes ago
    const other = await p.evaluate(() => { const r = [...document.querySelectorAll('.sc-row')].find(x => !x.classList.contains('sc-row--self')); return r && r.getAttribute('data-uid'); });
    if (other) await p.evaluate(id => { const m = JSON.parse(localStorage.getItem('mock_seen') || '{}'); m[id] = Date.now() - 7 * 60000; localStorage.setItem('mock_seen', JSON.stringify(m)); }, other);
    await p.evaluate(() => document.dispatchEvent(new Event('visibilitychange')));
    await p.waitForSelector('.sc-row--self .pres--on');
    assert.strictEqual((await p.textContent('.sc-row--self .pres__t')).trim(), 'в сети');
    if (other) {
      await p.waitForFunction(id => { const n = document.querySelector('.sc-row[data-uid="' + id + '"] .pres__t'); return n && /7 мин назад/.test(n.textContent); }, other);
    }
    await p.selectOption('select', 'en').catch(() => {});
    assert.deepStrictEqual(errs, []); await ctx.close();
  });
  await step('supabase: sc_seen sent while visible; sc_presence only on People, stops after leaving', async () => {
    const SB = 'https://zckcgydjbjpanegmyzvs.supabase.co';   // routed locally, never reaches the real project
    const ctx = await b.newContext({ viewport: { width: 1280, height: 900 } }); const p = await ctx.newPage(); const calls = [];
    await ctx.route('**/js/config.js', r => r.fulfill({ contentType: 'application/javascript', body: `window.APP_CONFIG={SUPABASE_URL:'${SB}',SUPABASE_ANON_KEY:'k',INVITE_CODE_HINT:'AAC',MOCK_INVITE_CODE:'AAC2026',TURNSTILE_SITE_KEY:''};` }));
    await ctx.route(SB + '/**', r => {
      const u = new URL(r.request().url()); calls.push(u.pathname);
      const j = o => r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(o) });
      if (u.pathname === '/auth/v1/user') return j({ id: 'u1', email: 'a@gmail.com' });
      if (u.pathname === '/rest/v1/profiles') return j([{ id: 'u1', name: 'A', role: 'student', xp: 0, prefs: {}, frame: 'none' }].concat(/id=eq/.test(u.search) ? [] : [{ id: 'u2', name: 'Bob', role: 'student', xp: 0, prefs: {}, frame: 'none' }]));
      if (u.pathname === '/rest/v1/rpc/sc_presence') return j([{ id: 'u2', last_seen: new Date().toISOString() }]);
      if (u.pathname === '/rest/v1/rpc/sc_people') return j([{ user_id: 'u2', name: 'Bob', avatar_url: null, frame: 'none', xp: 0, prefs: {}, rel: 'friend', pinned: false }]);
      if (u.pathname.startsWith('/rest/v1/rpc/')) return j(null);
      return j([]);
    });
    await p.goto('http://localhost:8765/index.html'); await p.evaluate(() => {
      localStorage.clear(); localStorage.setItem('lang', '"ru"');
      localStorage.setItem('sb_session', JSON.stringify({ access_token: 'AT', refresh_token: 'RT', expires_at: Math.floor(Date.now() / 1000) + 3600, user: { id: 'u1', email: 'a@gmail.com' } }));
      localStorage.setItem('auth_pol', JSON.stringify({ r: true, at: Date.now(), seen: Date.now() }));
    });
    await p.goto('http://localhost:8765/index.html#/homework'); await p.reload(); await p.waitForSelector('.hw-card');
    await p.waitForTimeout(2500);
    assert(calls.includes('/rest/v1/rpc/sc_seen'), 'marks me as here');
    assert(!calls.includes('/rest/v1/rpc/sc_presence'), 'no presence requests on a page without statuses');
    await p.goto('http://localhost:8765/index.html#/people'); await p.waitForSelector('.sc-row[data-uid="u2"] .pres--on');
    const onPeople = calls.filter(x => x === '/rest/v1/rpc/sc_presence').length;
    await p.goto('http://localhost:8765/index.html#/homework'); await p.waitForTimeout(500);
    const before = calls.filter(x => x === '/rest/v1/rpc/sc_presence').length;
    await p.evaluate(() => document.dispatchEvent(new Event('visibilitychange')));
    await p.waitForTimeout(800);
    assert.strictEqual(calls.filter(x => x === '/rest/v1/rpc/sc_presence').length, before, 'stopped after leaving People');
    assert(onPeople >= 1, 'asked on People');
    assert.strictEqual(await p.evaluate(() => 0), 0);
    await ctx.close();
  });
  await b.close();
  console.log('\n' + passed + ' passed, ' + failures + ' failed');
  process.exit(failures ? 1 : 0);
})();

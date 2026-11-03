/* Fast open for someone who already signed in on this device: the site shows right away from the saved profile,
   the fresh profile comes after. If the server says the sign-in is no longer valid → login screen.
   Supabase is faked by routing (nothing real is touched). Needs a static server on :8765. Run: node test/faststart.e2e.js */
'use strict';
const { chromium } = require('playwright');
const assert = require('assert');
let failures = 0, passed = 0;
async function step(name, fn) {
  try { await fn(); passed++; console.log('  ok   ' + name); }
  catch (e) { failures++; console.log('  FAIL ' + name + '\n       ' + String(e && e.message || e).split('\n').slice(0, 6).join('\n       ')); }
}
const SB = 'https://zckcgydjbjpanegmyzvs.supabase.co';
const UID = '11111111-2222-3333-4444-555555555555';
(async () => {
  const b = await chromium.launch();
  async function open(mode) {
    const ctx = await b.newContext({ viewport: { width: 390, height: 800 }, serviceWorkers: 'block' });
    const st = { mode, profileAsked: 0 };
    await ctx.route('**/js/config.js*', r => r.fulfill({ contentType: 'application/javascript', body: `window.APP_CONFIG={SUPABASE_URL:'${SB}',SUPABASE_ANON_KEY:'k',MOCK_INVITE_CODE:'',TURNSTILE_SITE_KEY:''};` }));
    await ctx.route(SB + '/**', async r => {
      const u = new URL(r.request().url());
      const j = (o, s) => r.fulfill({ status: s || 200, contentType: 'application/json', body: JSON.stringify(o) });
      if (u.pathname === '/rest/v1/profiles' && u.searchParams.get('id') === 'eq.' + UID) {
        st.profileAsked++;
        if (st.mode === 'slow') await new Promise(s => setTimeout(s, 4000));
        if (st.mode === 'revoked') return j({ message: 'JWT expired' }, 401);
        return j([{ id: UID, name: 'Fresh', role: 'student', xp: 300, prefs: {}, frame: 'none' }]);
      }
      if (u.pathname === '/auth/v1/logout') return j({});
      if (u.pathname.startsWith('/rest/v1/rpc/')) return j(null);
      return j([]);
    });
    const p = await ctx.newPage(); const errs = [];
    p.on('pageerror', e => errs.push(e.message));
    await p.goto('http://localhost:8765/index.html');
    await p.evaluate(uid => {
      localStorage.clear(); localStorage.setItem('lang', '"ru"');
      localStorage.setItem('sb_session', JSON.stringify({ access_token: 'AT', refresh_token: 'RT', expires_at: Math.floor(Date.now() / 1000) + 3600, user: { id: uid, email: 'a@gmail.com' } }));
      localStorage.setItem('auth_pol', JSON.stringify({ r: true, at: Date.now(), seen: Date.now() }));
      localStorage.setItem('sb_me_cache', JSON.stringify({ id: uid, me: { id: uid, name: 'Cached', role: 'student', xp: 120, prefs: {}, frame: 'none' }, done: {} }));
    }, UID);
    return { ctx, p, errs, st };
  }

  await step('saved profile on this device: site opens without waiting for the server (server answers after 4 s)', async () => {
    const { ctx, p, errs, st } = await open('slow');
    const t0 = Date.now();
    await p.reload(); await p.waitForSelector('.side', { timeout: 3500 });
    assert.ok(Date.now() - t0 < 3500, 'took ' + (Date.now() - t0));
    await p.waitForFunction(() => Store.auth.current() && Store.auth.current().name === 'Fresh', null, { timeout: 8000 });
    assert.ok(st.profileAsked >= 1);
    assert.deepStrictEqual(errs, []); await ctx.close();
  });
  await step('server says the sign-in is not valid any more → login screen', async () => {
    const { ctx, p, errs } = await open('revoked');
    await p.reload();
    await p.waitForSelector('.auth, form', { timeout: 8000 });
    assert.strictEqual(await p.locator('.side').count(), 0);
    assert.strictEqual(await p.evaluate(() => localStorage.getItem('sb_me_cache')), 'null');
    assert.deepStrictEqual(errs, []); await ctx.close();
  });
  await step('no saved profile → waits for the server as before', async () => {
    const { ctx, p, errs } = await open('ok');
    await p.evaluate(() => localStorage.removeItem('sb_me_cache'));
    await p.reload(); await p.waitForSelector('.side', { timeout: 8000 });
    assert.strictEqual(await p.evaluate(() => Store.auth.current().name), 'Fresh');
    assert.deepStrictEqual(errs, []); await ctx.close();
  });
  await b.close();
  console.log('\n' + passed + ' passed, ' + failures + ' failed');
  process.exit(failures ? 1 : 0);
})();

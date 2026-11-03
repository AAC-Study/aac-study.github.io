/* Saving a profile photo on the real server: upload WITHOUT "x-upsert" (upsert needs an extra Storage SELECT rule, otherwise 403),
   simulated like Supabase Storage does it; the old own photo is removed afterwards.
   Needs a static server on :8765 from the site root.  Run: node test/avatar-save.e2e.js */
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
  await step('upload is a plain insert (no upsert), profile gets the new url, old file deleted', async () => {
    const SB = 'https://zckcgydjbjpanegmyzvs.supabase.co';   // routed locally, never reaches the real project
    const UID = '11111111-2222-3333-4444-555555555555';
    const OLD = SB + '/storage/v1/object/public/avatars/' + UID + '/avatar-1000.jpg';
    const ctx = await b.newContext({ viewport: { width: 1280, height: 900 } }); const p = await ctx.newPage(); const calls = [];
    await ctx.route('**/js/config.js', r => r.fulfill({ contentType: 'application/javascript', body: `window.APP_CONFIG={SUPABASE_URL:'${SB}',SUPABASE_ANON_KEY:'k',MOCK_INVITE_CODE:'AAC2026',TURNSTILE_SITE_KEY:''};` }));
    let profile = { id: UID, name: 'A', role: 'student', xp: 0, prefs: {}, frame: 'none', avatar_url: OLD };
    await ctx.route(SB + '/**', async r => {
      const req = r.request(), u = new URL(req.url());
      calls.push(req.method() + ' ' + u.pathname + (req.headers()['x-upsert'] ? ' UPSERT' : ''));
      const j = (o, st) => r.fulfill({ status: st || 200, contentType: 'application/json', body: JSON.stringify(o) });
      if (u.pathname === '/auth/v1/user') return j({ id: UID, email: 'a@gmail.com' });
      if (u.pathname.startsWith('/storage/v1/object/avatars/')) {
        /* like Supabase: upsert without a SELECT policy → 403 */
        if (req.method() === 'POST' && req.headers()['x-upsert']) return j({ statusCode: '403', error: 'Unauthorized', message: 'new row violates row-level security policy' }, 400);
        return j({ Key: 'avatars/' + u.pathname.split('/avatars/')[1] });
      }
      if (u.pathname === '/rest/v1/profiles' && req.method() === 'PATCH') { profile = Object.assign({}, profile, JSON.parse(req.postData())); return j([profile]); }
      if (u.pathname === '/rest/v1/profiles') return j([profile]);
      if (u.pathname.startsWith('/rest/v1/rpc/')) return j(null);
      return j([]);
    });
    await p.goto('http://localhost:8765/index.html'); await p.evaluate(uid => {
      localStorage.clear(); localStorage.setItem('lang', '"ru"');
      localStorage.setItem('sb_session', JSON.stringify({ access_token: 'AT', refresh_token: 'RT', expires_at: Math.floor(Date.now() / 1000) + 3600, user: { id: uid, email: 'a@gmail.com' } }));
      localStorage.setItem('auth_pol', JSON.stringify({ r: true, at: Date.now(), seen: Date.now() }));
    }, UID);
    await p.reload(); await p.waitForSelector('.side, .app');
    const res = await p.evaluate(() => {
      const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'); x.fillStyle = '#c33'; x.fillRect(0, 0, 64, 64);
      return Store.profile.update({ avatar: c.toDataURL('image/jpeg', .8) }).then(u => ({ ok: true, url: u.avatar || u.avatar_url || '' }), e => ({ ok: false, e: String(e && e.message || e) }));
    });
    await p.waitForTimeout(400);
    assert.ok(res.ok, JSON.stringify(res));
    assert.ok(/\/avatars\/1111.*\/avatar-\d+\.jpg$/.test(profile.avatar_url) && profile.avatar_url !== OLD, profile.avatar_url);
    assert.ok(calls.some(c => /^POST \/storage\/v1\/object\/avatars\/.*avatar-\d+\.jpg$/.test(c)), calls.join('\n'));
    assert.ok(!calls.some(c => /UPSERT/.test(c)), 'no upsert');
    assert.ok(calls.includes('DELETE /storage/v1/object/avatars/' + UID + '/avatar-1000.jpg'), 'old photo removed: ' + calls.join('\n'));
    await ctx.close();
  });
  await b.close();
  console.log('\n' + passed + ' passed, ' + failures + ' failed');
  process.exit(failures ? 1 : 0);
})();

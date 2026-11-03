/* Site themes in Settings: picking one draws the animated background layer, survives a reload, "plain" removes it.
   Needs a static server on :8765 from the site root.  Run: node test/themes.e2e.js */
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
  const ctx = await b.newContext({ viewport: { width: 1280, height: 900 } }); const p = await ctx.newPage(); const errs = [];
  p.on('pageerror', e => errs.push(e.message));
  await ctx.route('**/js/config.js', r => r.fulfill({ contentType: 'application/javascript', body: "window.APP_CONFIG={SUPABASE_URL:'',SUPABASE_ANON_KEY:'',MOCK_INVITE_CODE:'AAC2026',TURNSTILE_SITE_KEY:''};" }));
  await p.goto('http://localhost:8765/index.html'); await p.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', '"ru"'); }); await p.reload();
  await p.evaluate(() => Store.auth.signUp({ email: 'th@gmail.com', password: 'secret1', name: 'Th', invite: 'AAC2026' }).then(() => Store.auth.signIn({ email: 'th@gmail.com', password: 'secret1', remember: true })));

  await step('settings show 9 themes with icons and names, plain is chosen', async () => {
    await p.goto('http://localhost:8765/index.html#/settings'); await p.waitForSelector('.th-opt');
    const opts = await p.$$eval('.th-opt', a => a.map(x => ({ id: x.dataset.themeId, on: x.getAttribute('aria-checked'), ic: x.querySelector('.th-opt__ic').textContent, name: x.querySelector('.th-opt__name').textContent })));
    assert.strictEqual(opts.length, 9);
    assert.deepStrictEqual(opts.map(o => o.id), ['none', 'autumn', 'halloween', 'autumnween', 'christmas', 'space', 'ocean', 'sakura', 'aurora']);
    assert.ok(opts.every(o => o.ic && o.name), 'icon + name');
    assert.strictEqual(opts.find(o => o.on === 'true').id, 'none');
    assert.strictEqual(await p.$eval('#site-bg', n => n.children.length), 0);
  });

  for (const id of ['autumn', 'halloween', 'autumnween', 'christmas', 'space', 'ocean', 'sakura', 'aurora']) {
    await step('theme ' + id + ': particles appear and are animated', async () => {
      await p.click('.th-opt[data-theme-id="' + id + '"]');
      assert.strictEqual(await p.evaluate(() => document.documentElement.getAttribute('data-site-theme')), id);
      const info = await p.$eval('#site-bg', n => ({ n: n.children.length, anim: Array.prototype.filter.call(n.children, c => getComputedStyle(c).animationName !== 'none').length }));
      assert.ok(info.n > 0, 'particles');
      assert.ok(info.anim > 0, 'animated');
      assert.strictEqual(await p.$eval('.th-opt[data-theme-id="' + id + '"]', n => n.getAttribute('aria-checked')), 'true');
      /* content still clickable: background is under the app and ignores the mouse */
      assert.strictEqual(await p.$eval('#site-bg', n => getComputedStyle(n).pointerEvents), 'none');
    });
  }

  await step('choice survives a reload; plain removes everything', async () => {
    await p.click('.th-opt[data-theme-id="christmas"]');
    await p.reload(); await p.waitForSelector('.app');
    assert.strictEqual(await p.evaluate(() => document.documentElement.getAttribute('data-site-theme')), 'christmas');
    assert.ok(await p.$eval('#site-bg', n => n.children.length) > 0);
    await p.goto('http://localhost:8765/index.html#/settings'); await p.waitForSelector('.th-opt');
    await p.click('.th-opt[data-theme-id="none"]');
    assert.strictEqual(await p.evaluate(() => document.documentElement.getAttribute('data-site-theme')), null);
    assert.strictEqual(await p.$eval('#site-bg', n => n.children.length), 0);
  });

  await step('no page errors', async () => { assert.deepStrictEqual(errs, []); });
  await b.close();
  console.log((failures ? 'FAILED ' : 'OK ') + passed + ' passed, ' + failures + ' failed');
  process.exit(failures ? 1 : 0);
})();

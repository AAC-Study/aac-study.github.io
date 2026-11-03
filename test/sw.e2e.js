/* Fast loading (sw.js keeps the site files on the device) and the update flow after a new version is published.
   Starts its own small server on :8799 from the repo, so it can "publish" a new version in the middle of the test.
   Run: node test/sw.e2e.js */
'use strict';
const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const ROOT = path.join(__dirname, '..');
let failures = 0, passed = 0;
async function step(name, fn) {
  try { await fn(); passed++; console.log('  ok   ' + name); }
  catch (e) { failures++; console.log('  FAIL ' + name + '\n       ' + String(e && e.stack || e).split('\n').slice(0, 6).join('\n       ')); }
}
const CFG = "window.APP_CONFIG={SUPABASE_URL:'',SUPABASE_ANON_KEY:'',MOCK_INVITE_CODE:'AAC2026',TURNSTILE_SITE_KEY:''};";
const TYPES = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml', '.webmanifest': 'application/manifest+json' };

const swSrc = fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8');
const indexSrc = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const VER = (swSrc.match(/SW_VERSION = '([^']+)'/) || [])[1];
const over = {};            // "published" changes
const hits = [];
const server = http.createServer((req, res) => {
  const u = new URL(req.url, 'http://x');
  let rel = decodeURIComponent(u.pathname).replace(/^\/+/, '') || 'index.html';
  hits.push(rel);
  let body = null;
  if (over[rel] != null) body = over[rel];
  else if (rel === 'js/config.js') body = CFG;
  else { const f = path.join(ROOT, rel); if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end('no'); } body = fs.readFileSync(f); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(rel)] || 'application/octet-stream', 'Cache-Control': 'max-age=600' });
  res.end(body);
});

(async () => {
  await step('versions match: version.json = sw.js SW_VERSION = index.html app-version', async () => {
    const vj = JSON.parse(fs.readFileSync(path.join(ROOT, 'version.json'), 'utf8')).v;
    const meta = (indexSrc.match(/name="app-version" content="([^"]+)"/) || [])[1];
    assert.strictEqual(VER, vj); assert.strictEqual(meta, vj);
  });
  await step('every file index.html loads is in the sw.js SHELL list (otherwise it would always come from the network)', async () => {
    const shell = JSON.parse(swSrc.match(/var SHELL = (\[[\s\S]*?\]);/)[1].replace(/'/g, '"'));
    const used = [];
    indexSrc.replace(/<(?:script[^>]+src|link[^>]+href)="([^"]+)"/g, (m, u) => { if (!/^https?:|^\/\//.test(u)) used.push(u.split('?')[0]); });
    const missing = used.filter(u => shell.indexOf(u) < 0);
    assert.deepStrictEqual(missing, []);
    shell.forEach(f => assert.ok(fs.existsSync(path.join(ROOT, f)), 'SHELL file missing: ' + f));
  });

  await new Promise(r => server.listen(8799, '127.0.0.1', r));
  const BASE = 'http://localhost:8799/';
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 390, height: 800 } });
  const p = await ctx.newPage(); const errs = [];
  p.on('pageerror', e => errs.push(e.message));

  await step('splash (book) is shown first and disappears when the site is ready', async () => {
    let html = '';
    await p.route(BASE + 'js/app.js', async r => { html = await p.evaluate(() => document.getElementById('app').innerHTML).catch(() => ''); r.continue(); });
    await p.goto(BASE);
    await p.waitForSelector('.auth, form');
    await p.unroute(BASE + 'js/app.js');
    assert.ok(/splash__book/.test(html), 'splash before scripts: ' + html.slice(0, 200));
    assert.strictEqual(await p.locator('#splash').count(), 0);
  });

  await step('after the first visit the site opens from the device, even with no internet', async () => {
    await p.evaluate(() => localStorage.setItem('sw_cache_test', '1'));
    await p.reload(); await p.waitForSelector('.auth, form');
    await p.waitForFunction(() => navigator.serviceWorker.controller && /cache=1/.test(navigator.serviceWorker.controller.scriptURL), null, { timeout: 10000 });
    await p.waitForTimeout(800); await p.waitForLoadState('load'); await p.waitForSelector('.auth, form');   // the page may quietly reload once on the new worker
    const keys = await p.evaluate(() => caches.keys());
    assert.ok(keys.indexOf('aac-static-' + VER) >= 0, keys.join());
    hits.length = 0;
    await p.reload(); await p.waitForSelector('.auth, form');
    const fromNet = hits.filter(h => /\.(js|css)$/.test(h) && h !== 'sw.js');
    assert.deepStrictEqual(fromNet, [], 'files that still came from the server: ' + fromNet.join());
    await ctx.setOffline(true);
    await p.reload(); await p.waitForSelector('.auth, form', { timeout: 8000 });
    await ctx.setOffline(false);
  });

  await step('version.json is always asked from the server (to notice a new version)', async () => {
    hits.length = 0;
    await p.evaluate(() => fetch('version.json?t=' + Date.now(), { cache: 'no-store' }).then(r => r.json()));
    assert.ok(hits.indexOf('version.json') >= 0);
  });

  await step('new version published → banner «Сайт обновился» → «Обновить» opens the new version, old files removed', async () => {
    const NV = 'TEST-NEW';
    over['sw.js'] = swSrc.replace(/SW_VERSION = '[^']+'/, "SW_VERSION = '" + NV + "'");
    over['index.html'] = indexSrc.replace(/name="app-version" content="[^"]+"/, 'name="app-version" content="' + NV + '"');
    over['version.json'] = JSON.stringify({ v: NV });
    over['js/i18n.js'] = fs.readFileSync(path.join(ROOT, 'js/i18n.js'), 'utf8') + '\nwindow.__NEW_FILE = 1;';
    await p.evaluate(() => localStorage.setItem('lang', '"ru"'));
    await p.evaluate(() => document.dispatchEvent(new Event('visibilitychange')));
    await p.waitForSelector('.upd', { timeout: 8000 });
    assert.strictEqual(await p.evaluate(() => document.querySelector('meta[name="app-version"]').content), VER, 'still the old version until refresh');
    await Promise.all([p.waitForNavigation({ timeout: 12000 }), p.click('.upd .btn--primary')]);
    await p.waitForSelector('.auth, form');
    assert.strictEqual(await p.evaluate(() => document.querySelector('meta[name="app-version"]').content), NV);
    assert.strictEqual(await p.evaluate(() => window.__NEW_FILE), 1, 'new js file');
    const keys = await p.evaluate(() => caches.keys());
    assert.deepStrictEqual(keys.filter(k => /^aac-static-/.test(k)), ['aac-static-' + NV]);
  });

  await step('another version published, person just presses F5 → within seconds the new version opens by itself', async () => {
    const NV = 'TEST-NEW-2';
    over['sw.js'] = swSrc.replace(/SW_VERSION = '[^']+'/, "SW_VERSION = '" + NV + "'");
    over['index.html'] = indexSrc.replace(/name="app-version" content="[^"]+"/, 'name="app-version" content="' + NV + '"');
    over['version.json'] = JSON.stringify({ v: NV });
    await p.reload(); await p.waitForSelector('.auth, form');
    await p.waitForFunction(v => { const m = document.querySelector('meta[name="app-version"]'); return m && m.content === v; }, NV, { timeout: 12000 });
    await p.waitForSelector('.auth, form');
  });

  await step('no errors on the page', async () => { assert.deepStrictEqual(errs, []); });
  await b.close(); server.close();
  console.log('\n' + passed + ' passed, ' + failures + ' failed');
  process.exit(failures ? 1 : 0);
})();

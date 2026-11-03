/* Titles, frames and chat backgrounds: icons, animation from level 5, seasonal frames and chat backgrounds,
   and the chat style list in js/social.js matches supabase/social.sql (the DB checks levels).
   Needs a static server on :8765 from the site root.  Run: node test/looks.e2e.js */
'use strict';
const { chromium } = require('playwright');
const assert = require('assert');
const fs = require('fs');
const path = require('path');
let failures = 0, passed = 0;
async function step(name, fn) {
  try { await fn(); passed++; console.log('  ok   ' + name); }
  catch (e) { failures++; console.log('  FAIL ' + name + '\n       ' + String(e && e.message || e).split('\n').slice(0, 6).join('\n       ')); }
}
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 1000, height: 900 } }); const p = await ctx.newPage(); const errs = [];
  p.on('pageerror', e => errs.push(e.message));
  await ctx.route('**/js/config.js', r => r.fulfill({ contentType: 'application/javascript', body: "window.APP_CONFIG={SUPABASE_URL:'',SUPABASE_ANON_KEY:'',MOCK_INVITE_CODE:'AAC2026',TURNSTILE_SITE_KEY:''};" }));
  await p.goto('http://localhost:8765/index.html'); await p.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', '"ru"'); }); await p.reload();
  await p.waitForFunction(() => window.Titles && window.Frames && window.Social);

  await step('titles: every title has an icon and text; from level 5 every title is animated', async () => {
    const r = await p.evaluate(() => Titles.list.map(x => {
      const n = Titles.badge(x.id); document.body.appendChild(n);
      const anims = [n, n.querySelector('.ttl__t')].map(e => getComputedStyle(e).animationName)
        .concat([getComputedStyle(n, '::before').animationName, getComputedStyle(n, '::after').animationName]);
      const out = { id: x.id, lvl: x.lvl, ic: n.querySelector('.ttl__ic').textContent, t: n.querySelector('.ttl__t').textContent, anim: anims.some(a => a && a !== 'none'), shadow: getComputedStyle(n).boxShadow };
      n.remove(); return out;
    }));
    r.forEach(x => { assert.ok(x.ic && x.t, x.id); assert.ok(x.shadow && x.shadow !== 'none', 'shadow ' + x.id); assert.strictEqual(x.anim, x.lvl >= 5, 'animation ' + x.id + ' lvl ' + x.lvl); });
  });

  await step('frames: 4 Halloween + 4 Christmas (2 animated, 2 static each), all render, picker has season groups', async () => {
    const r = await p.evaluate(() => {
      const by = s => Frames.list.filter(x => x.season === s);
      const one = id => { const n = Frames.render({ frame: id, size: 96, name: 'Тест Т' }); document.body.appendChild(n); const ok = n.getAttribute('data-frame') === id && n.querySelectorAll('svg').length > 0; n.remove(); return ok; };
      const pk = Frames.picker({ level: 100, current: 'none', name: 'Т' });
      return { h: by('halloween').map(x => x.animated), c: by('christmas').map(x => x.animated), render: by('halloween').concat(by('christmas')).every(x => one(x.id)),
        heads: Array.from(pk.querySelectorAll('.frp__head')).map(x => x.textContent), items: pk.querySelectorAll('.frp__item').length, total: Frames.list.length };
    });
    assert.deepStrictEqual(r.h.filter(Boolean).length, 2); assert.strictEqual(r.h.length, 4);
    assert.deepStrictEqual(r.c.filter(Boolean).length, 2); assert.strictEqual(r.c.length, 4);
    assert.ok(r.render, 'svg decorations');
    assert.ok(r.heads.some(h => /Хэллоуин/.test(h)) && r.heads.some(h => /Рождество/.test(h)), JSON.stringify(r.heads));
    assert.strictEqual(r.items, r.total);
  });

  await step('chat backgrounds: 3 Halloween + 3 Christmas, animated ones move', async () => {
    const r = await p.evaluate(() => ['pumpkin', 'xmas', 'bats', 'garland', 'ghosts', 'blizzard'].map(id => {
      const d = document.createElement('div'); d.className = 'sc-bg sc-bg--' + id; d.style.cssText = 'position:relative;width:200px;height:300px';
      const l = document.createElement('div'); l.className = 'sc-bg__layer'; d.appendChild(l); document.body.appendChild(d);
      const out = { id, bg: getComputedStyle(d).backgroundImage, anim: getComputedStyle(l, '::before').animationName };
      d.remove(); return out;
    }));
    r.forEach(x => assert.ok(x.bg && x.bg !== 'none', 'background ' + x.id));
    assert.deepStrictEqual(r.map(x => x.anim !== 'none'), [false, false, true, true, true, true]);
  });

  await step('chat style list in js/social.js = supabase/social.sql sc_style_levels', async () => {
    const js = await p.evaluate(() => { const S = Social.STYLES || (Social._styles); const out = []; Object.keys(S).forEach(k => S[k].forEach(s => out.push(k + ':' + s.id + ':' + s.lvl))); return out.sort(); });
    const sql = fs.readFileSync(path.join(__dirname, '..', 'supabase', 'social.sql'), 'utf8');
    const block = sql.slice(sql.indexOf('insert into public.sc_style_levels'), sql.indexOf('on conflict (kind, id)'));
    const rows = []; block.replace(/\('(nick|bubble|bg)','([a-z0-9-]+)',(\d+)\)/g, (m, k, id, l) => { rows.push(k + ':' + id + ':' + l); });
    assert.deepStrictEqual(js, rows.sort());
  });

  await step('no page errors', async () => { assert.deepStrictEqual(errs, []); });
  await b.close();
  console.log((failures ? 'FAILED ' : 'OK ') + passed + ' passed, ' + failures + ' failed');
  process.exit(failures ? 1 : 0);
})();

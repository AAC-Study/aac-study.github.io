/* После перезагрузки: прогресс чтения сохраняется, открытая задача открывается снова, неотправленные очки дошлются.
   Нужен статический сервер копии сайта на :8765. Run: node test/persist.e2e.js */
const { chromium } = require('playwright'); const assert = require('assert');
const SB = 'https://zckcgydjbjpanegmyzvs.supabase.co';
(async () => {
  const b = await chromium.launch(); let pass = 0;
  async function step(n, f) { await f(); pass++; console.log('  ok ' + n); }
  await step('reading progress survives reload; open task reopens', async () => {
    const ctx = await b.newContext({ viewport: { width: 1280, height: 800 } }); const p = await ctx.newPage(); const errs = [];
    p.on('pageerror', e => errs.push(e.message));
    await p.goto('http://localhost:8765/index.html'); await p.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', '"ru"'); }); await p.reload();
    await p.evaluate(() => Store.auth.signUp({ email: 'a@x.y', password: '123456', name: 'A', invite: 'AAC2026' }).then(() => Store.auth.signIn({ email: 'a@x.y', password: '123456' })));
    await p.evaluate(() => App.go('/lesson/math-2026-11-01'));
    await p.waitForSelector('.ls-step');
    for (let i = 0; i < 16; i++) { await p.mouse.move(100 + i * 10, 300); await p.mouse.wheel(0, 250); await p.waitForTimeout(400); }
    await p.waitForTimeout(2300);
    const before = await p.evaluate(() => JSON.parse(localStorage.getItem(Object.keys(localStorage).find(k => k.startsWith('read_st:')))));
    assert(before && before.engagedMs > 3000, JSON.stringify(before));
    const pctBefore = await p.locator('.ls-prog__text, .ls-progress__text, [class*=prog] [class*=text]').first().innerText().catch(() => '?');
    // open task A2
    await p.evaluate(() => document.querySelectorAll('.ls-tile')[1].click());
    await p.waitForSelector('.tk');
    const title1 = await p.locator('.modal__title').innerText();
    await p.reload();
    await p.waitForSelector('.tk', { timeout: 8000 }); await p.waitForTimeout(100);
    const title2 = await p.locator('.modal__title').innerText();
    assert.strictEqual(title2, title1);
    const st = await p.evaluate(() => { var s = ReadingTracker._states['math-2026-11-01']; return s && s.engagedMs; });
    assert(st >= before.engagedMs, st + ' < ' + before.engagedMs);
    const pctAfter = await p.locator('.ls-prog__text, .ls-progress__text, [class*=prog] [class*=text]').first().innerText().catch(() => '?');
    console.log('    progress text', pctBefore, '->', pctAfter, '| engaged', before.engagedMs, '->', st);
    await p.click('.modal__head button'); await p.waitForTimeout(300);
    assert.strictEqual(await p.evaluate(() => sessionStorage.getItem('open_task')), null);
    await p.reload(); await p.waitForSelector('.ls-step'); await p.waitForTimeout(400);
    assert.strictEqual(await p.locator('.tk').count(), 0);
    assert.deepStrictEqual(errs, []); await ctx.close();
  });
  await step('points: network failure is queued and sent after reload', async () => {
    const ctx = await b.newContext(); const p = await ctx.newPage(); const errs = []; let fail = true, awards = [];
    p.on('pageerror', e => errs.push(e.message));
    await ctx.route('**/js/config.js', r => r.fulfill({ contentType: 'application/javascript', body: `window.APP_CONFIG={SUPABASE_URL:'${SB}',SUPABASE_ANON_KEY:'k',INVITE_CODE_HINT:'AAC',MOCK_INVITE_CODE:'AAC2026',TURNSTILE_SITE_KEY:''};` }));
    await ctx.route(SB + '/**', async r => {
      const u = new URL(r.request().url()); const j = (s, o) => r.fulfill({ status: s, contentType: 'application/json', body: JSON.stringify(o) });
      if (u.pathname === '/rest/v1/rpc/award') { const bd = JSON.parse(r.request().postData()); awards.push(bd.p_key + (fail ? ':fail' : ':ok')); return fail ? r.abort('failed') : j(200, { added: 10, xp: 10 }); }
      if (u.pathname === '/rest/v1/profiles') return j(200, [{ id: 'u1', name: 'A', role: 'student', xp: 0, prefs: {}, frame: 'none' }]);
      if (u.pathname.startsWith('/rest/v1/rpc/')) return j(200, null);
      if (u.pathname.startsWith('/rest/v1/')) return j(200, []);
      return j(200, {});
    });
    await p.goto('http://localhost:8765/index.html');
    await p.evaluate(() => { localStorage.clear(); localStorage.setItem('sb_session', JSON.stringify({ access_token: 'AT', refresh_token: 'RT', expires_at: 9999999999, user: { id: 'u1', email: 'a@b.c' } })); });
    await p.reload(); await p.waitForSelector('.side');
    await p.evaluate(() => Store.progress.award('read:math-2026-11-01', 10).catch(() => {}));
    await p.waitForTimeout(300);
    const q = await p.evaluate(() => JSON.parse(localStorage.getItem('award_q:u1')));
    assert(q && q['read:math-2026-11-01'], JSON.stringify(q));
    fail = false;
    await p.reload(); await p.waitForSelector('.side'); await p.waitForTimeout(2800);
    assert.deepStrictEqual(awards, ['read:math-2026-11-01:fail', 'read:math-2026-11-01:ok']);
    assert.deepStrictEqual(await p.evaluate(() => JSON.parse(localStorage.getItem('award_q:u1'))), {});
    assert.deepStrictEqual(errs, []); await ctx.close();
  });
  console.log(pass + ' passed'); await b.close();
})().catch(e => { console.error(e); process.exit(1); });

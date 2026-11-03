/* End-to-end checks for the lesson module (Playwright).
   Needs a static server on :8765 from the site root:  python3 -m http.server 8765
   Run: node test/lesson.e2e.js [screenshotDir] */
'use strict';
const { chromium } = require('playwright');
const assert = require('assert');
const fs = require('fs');
const path = require('path');

const BASE = 'http://localhost:8765/test/lesson-test.html';
const SHOTS = process.argv[2] || path.join(__dirname, 'shots');
fs.mkdirSync(SHOTS, { recursive: true });
const URL = (lang, theme, extra) => `${BASE}?lang=${lang}&theme=${theme}${extra || ''}#/lesson/math-2026-11-01`;

let failures = 0, passed = 0;
async function step(name, fn) {
  try { await fn(); passed++; console.log('  ok   ' + name); }
  catch (e) { failures++; console.log('  FAIL ' + name + '\n       ' + String(e && e.message || e).split('\n').slice(0, 6).join('\n       ')); }
}
function watchErrors(page, list) {
  page.on('console', m => { if (m.type() === 'error') list.push('console: ' + m.text()); });
  page.on('pageerror', e => list.push('pageerror: ' + e.message));
}

(async () => {
  const browser = await chromium.launch();

  /* ---------- 1. every language × theme × width renders without console errors ---------- */
  for (const lang of ['he', 'ru', 'en']) for (const theme of ['light', 'dark']) for (const width of [360, 1280]) {
    await step(`render ${lang}/${theme}/${width}`, async () => {
      const ctx = await browser.newContext({ viewport: { width, height: 860 }, hasTouch: width < 500 });
      const page = await ctx.newPage(); const errs = []; watchErrors(page, errs);
      await page.goto(URL(lang, theme));
      await page.waitForSelector('.ls-tile');
      await page.waitForTimeout(300);
      assert.strictEqual(await page.locator('.ls-tile').count(), 31 + 12);
      assert.strictEqual(await page.locator('.ls-tile:visible').count(), 31 + 4);   // 31 teacher + one AI level
      assert.strictEqual(await page.evaluate(() => document.documentElement.dir), lang === 'he' ? 'rtl' : 'ltr');
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      assert.ok(overflow <= 0, 'horizontal overflow ' + overflow);
      // no student names / recording words in the rendered page
      const text = await page.evaluate(() => document.body.innerText.toLowerCase());
      ['record', 'transcri', 'запис', 'транскри', 'הקלט', 'תמלול'].forEach(w => assert.ok(!text.includes(w), 'forbidden word ' + w));
      await page.screenshot({ path: path.join(SHOTS, `page-${lang}-${theme}-${width}.png`) });
      assert.deepStrictEqual(errs, []);
      await ctx.close();
    });
  }

  /* ---------- 2. TOC navigation (desktop + phone sheet) ---------- */
  await step('TOC desktop: click → scroll + active', async () => {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 860 } });
    const page = await ctx.newPage();
    await page.goto(URL('en', 'light'));
    await page.waitForSelector('.ls-toc');
    await page.click('.ls-toc .ls-toc__item[data-sec="teacher"]');
    await page.waitForTimeout(1200);
    const top = await page.evaluate(() => document.getElementById('ls-teacher').getBoundingClientRect().top);
    assert.ok(top >= 0 && top < 200, 'section top ' + top);
    assert.ok(await page.locator('.ls-toc .ls-toc__item[data-sec="teacher"]').evaluate(n => n.classList.contains('is-active')));
    // scroll-spy follows manual scrolling
    await page.evaluate(() => document.getElementById('ls-review').scrollIntoView());
    await page.waitForTimeout(300);
    assert.ok(await page.locator('.ls-toc .ls-toc__item[data-sec="review"]').evaluate(n => n.classList.contains('is-active')));
    await ctx.close();
  });
  await step('TOC phone: floating button → bottom sheet → section', async () => {
    const ctx = await browser.newContext({ viewport: { width: 360, height: 760 }, hasTouch: true });
    const page = await ctx.newPage();
    await page.goto(URL('he', 'light'));
    await page.waitForSelector('.ls-fab');
    assert.ok(await page.locator('.ls-toc').isHidden());
    await page.tap('.ls-fab');
    await page.waitForTimeout(400);
    assert.ok(await page.locator('.ls-sheet').isVisible());
    await page.screenshot({ path: path.join(SHOTS, 'sheet-he-360.png') });
    await page.tap('.ls-sheet .ls-toc__item[data-sec="review"]');
    await page.waitForTimeout(1200);
    assert.ok(await page.locator('.ls-sheet').isHidden());
    const top = await page.evaluate(() => document.getElementById('ls-review').getBoundingClientRect().top);
    assert.ok(top >= -5 && top < 200, 'review top ' + top);
    await ctx.close();
  });

  /* ---------- 3. downloads ---------- */
  await step('downloads: .txt with BOM, Hebrew / Russian, answers at the end, points', async () => {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 860 }, acceptDownloads: true });
    const page = await ctx.newPage();
    await page.goto(URL('en', 'light'));
    await page.waitForSelector('.ls-dl');
    for (const l of ['he', 'ru']) {
      const [dl] = await Promise.all([page.waitForEvent('download'), page.click(`.ls-dl[data-lang="${l}"]`)]);
      const file = path.join(SHOTS, 'download-' + l + '.txt');
      await dl.saveAs(file);
      const buf = fs.readFileSync(file);
      assert.deepStrictEqual([...buf.slice(0, 3)], [0xEF, 0xBB, 0xBF], 'BOM');
      const txt = buf.toString('utf8');
      assert.ok(/\.txt$/.test(dl.suggestedFilename()), dl.suggestedFilename());
      if (l === 'he') { assert.ok(/[֐-׿]/.test(txt)); assert.ok(txt.includes('מתמטיקה · 01.11.2026 · משוואה ריבועית')); }
      else { assert.ok(/[Ѐ-ӿ]/.test(txt)); assert.ok(txt.includes('Математика · 01.11.2026 · Квадратные уравнения')); }
      const iAns = txt.indexOf(l === 'he' ? 'תשובות' : 'ОТВЕТЫ');
      const iTasks = txt.indexOf(l === 'he' ? 'משימות מהמורה' : 'ЗАДАЧИ ОТ ПРЕПОДАВАТЕЛЯ');
      assert.ok(iTasks > 0 && iAns > iTasks, 'answers after tasks');
      assert.ok(txt.includes('x₁ = −1,  x₂ = −5'));
      assert.ok(!txt.includes('·  ') && !/\d ?· ?\d/.test(txt), 'no · as multiplication');
      assert.ok(!txt.includes('`'), 'no backticks');
      // Q&A placed right after its point: calculator question follows the formula item
      const iFormula = txt.indexOf(l === 'he' ? 'נוסחת השורשים' : 'Формула корней');
      const iCalc = txt.indexOf(l === 'he' ? 'איך מקלידים' : 'Как правильно набрать');
      assert.ok(iFormula > 0 && iCalc > iFormula);
    }
    const done = await page.evaluate(() => [Store.progress.has('download:math-2026-11-01:he'), Store.progress.has('download:math-2026-11-01:ru')]);
    assert.deepStrictEqual(done, [true, true]);
    await ctx.close();
  });

  /* ---------- 4. task window ---------- */
  await step('task window: draw (mouse), check gating, wrong → hints, curtain, correct', async () => {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 860 } });
    const page = await ctx.newPage(); const errs = []; watchErrors(page, errs);
    await page.goto(URL('he', 'light'));
    await page.waitForSelector('.ls-tile');
    await page.locator('.ls-tile').first().click();
    await page.waitForSelector('.tk');
    await page.waitForTimeout(300);
    // draw
    const c = await page.locator('.dr-canvas').boundingBox();
    await page.mouse.move(c.x + 40, c.y + 40); await page.mouse.down();
    for (let i = 0; i < 20; i++) await page.mouse.move(c.x + 40 + i * 10, c.y + 40 + i * 4);
    await page.mouse.up();
    const inked = await page.evaluate(() => {
      const cv = document.querySelector('.dr-canvas'); const d = cv.getContext('2d').getImageData(0, 0, cv.width, cv.height).data;
      let n = 0; for (let i = 3; i < d.length; i += 4) if (d[i]) n++; return n;
    });
    assert.ok(inked > 200, 'canvas has ink ' + inked);
    // check button gating
    assert.ok(await page.locator('.tk-check').isDisabled());
    await page.fill('.tk-answer__input', '-');
    assert.ok(await page.locator('.tk-check').isEnabled());
    assert.ok(await page.locator('.tk-check').evaluate(n => n.classList.contains('is-ready')));
    await page.fill('.tk-answer__input', '');
    assert.ok(await page.locator('.tk-check').isDisabled());
    // curtain closed by default
    assert.strictEqual(await page.getAttribute('.tk-panel--sol .tk-panel__head', 'aria-expanded'), 'false');
    assert.ok(await page.locator('.tk-panel--sol .tk-panel__body').isHidden());
    // wrong #1 → hint 1
    await page.fill('.tk-answer__input', '1, 5');
    await page.click('.tk-check');
    await page.waitForTimeout(500);
    assert.strictEqual(await page.getAttribute('.tk-panel--hint .tk-panel__head', 'aria-expanded'), 'true');
    assert.strictEqual(await page.locator('.tk-hints__item').count(), 1);
    assert.ok((await page.textContent('.tk-diag')).includes('−b'), 'sign diagnosis');
    // wrong #2 → hint 2
    await page.fill('.tk-answer__input', '-1');
    await page.click('.tk-check');
    await page.waitForTimeout(500);
    assert.strictEqual(await page.locator('.tk-hints__item').count(), 2);
    // curtain toggles and does not move the scroll position
    const scroller = '.t-modal__body';
    await page.$eval('.tk-panel--sol .tk-panel__head', n => n.scrollIntoView({ block: 'center' }));
    await page.waitForTimeout(100);
    const before = await page.$eval(scroller, n => n.scrollTop);
    await page.$eval('.tk-panel--sol .tk-panel__head', n => n.click());
    await page.waitForTimeout(500);
    assert.strictEqual(await page.getAttribute('.tk-panel--sol .tk-panel__head', 'aria-expanded'), 'true');
    assert.ok(await page.locator('.tk-sol li').count() > 10);
    assert.strictEqual(await page.$eval(scroller, n => n.scrollTop), before, 'scroll position kept');
    await page.$eval('.tk-panel--sol .tk-panel__head', n => n.click());
    await page.waitForTimeout(500);
    assert.ok(await page.locator('.tk-panel--sol .tk-panel__body').isHidden());
    assert.strictEqual(await page.$eval(scroller, n => n.scrollTop), before, 'scroll position kept after closing');
    // correct
    await page.fill('.tk-answer__input', 'x=-5 ו x=-1');
    await page.click('.tk-check');
    await page.waitForTimeout(400);
    assert.ok(await page.locator('.tk-result--ok').isVisible());
    assert.ok(await page.evaluate(() => Store.progress.has('solve:math-2026-11-01:t2-1')));
    const xp = await page.evaluate(() => Store.auth.current().done['solve:math-2026-11-01:t2-1']);
    assert.strictEqual(xp, 10, 'solve_hint points after hints');
    await page.keyboard.press('Escape');
    await page.waitForTimeout(200);
    assert.ok(await page.locator('.ls-tile').first().evaluate(n => n.classList.contains('is-solved')));
    assert.deepStrictEqual(errs, []);
    await ctx.close();
  });

  await step('task window: unparsable answer → honest message + issue log; prompt copy/download', async () => {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 860 }, acceptDownloads: true, permissions: ['clipboard-read', 'clipboard-write'] });
    const page = await ctx.newPage();
    await page.goto(URL('ru', 'dark'));
    await page.waitForSelector('.ls-tile');
    await page.locator('.ls-tile').nth(6).click();     // 2ז 6x²+5x+1
    await page.waitForSelector('.tk');
    await page.fill('.tk-answer__input', 'наверное минус треть');
    await page.click('.tk-check');
    await page.waitForTimeout(300);
    assert.ok(await page.locator('.tk-result--warn').isVisible());
    assert.ok((await page.textContent('.tk-result')).includes('промпт'));
    const log = await page.evaluate(() => JSON.parse(localStorage.getItem('issue_log') || '[]'));
    assert.ok(log.some(x => x.info.task === 't2-7' && x.info.input === 'наверное минус треть'));
    await page.click('.tk-panel--ai .tk-panel__head');
    await page.waitForTimeout(400);
    const prompt = await page.inputValue('.tk-prompt');
    ['6x² + 5x + 1 = 0', 'наверное минус треть', 'one operation per line', 'hint first', 'answer me in Russian', 'D = b² − 4ac', 'FIRST ask me to send a photo'].forEach(s => assert.ok(prompt.includes(s), 'prompt has ' + s));
    await page.click('.tk-prompt__btns .btn--primary');
    await page.waitForTimeout(300);
    const clip = await page.evaluate(() => navigator.clipboard.readText());
    assert.strictEqual(clip, prompt);
    const [dl] = await Promise.all([page.waitForEvent('download'), page.click('.tk-prompt__btns .btn:not(.btn--primary)')]);
    const f = path.join(SHOTS, 'prompt.txt'); await dl.saveAs(f);
    assert.ok(fs.readFileSync(f, 'utf8').includes('6x² + 5x + 1 = 0'));
    await page.screenshot({ path: path.join(SHOTS, 'task-ru-dark-1280.png') });
    await ctx.close();
  });

  await step('task window on phone: touch drawing, choice task', async () => {
    const ctx = await browser.newContext({ viewport: { width: 360, height: 760 }, hasTouch: true, isMobile: true, deviceScaleFactor: 2 });
    const page = await ctx.newPage(); const errs = []; watchErrors(page, errs);
    await page.goto(URL('he', 'dark'));
    await page.waitForSelector('.ls-tile');
    await page.locator('.ls-tile').nth(2).tap();
    await page.waitForSelector('.tk');
    await page.waitForTimeout(400);
    const c = await page.locator('.dr-canvas').boundingBox();
    const cdp = await ctx.newCDPSession(page);
    const pt = (x, y) => [{ x: c.x + x, y: c.y + y, radiusX: 2, radiusY: 2, force: 0.5, id: 1 }];
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: pt(30, 30) });
    for (let i = 1; i < 20; i++) await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: pt(30 + i * 12, 30 + i * 6) });
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    const inked = await page.evaluate(() => {
      const cv = document.querySelector('.dr-canvas'); const d = cv.getContext('2d').getImageData(0, 0, cv.width, cv.height).data;
      let n = 0; for (let i = 3; i < d.length; i += 4) if (d[i]) n++; return n;
    });
    assert.ok(inked > 200, 'touch ink ' + inked);
    // dpr-sharp canvas
    assert.ok(await page.evaluate(() => { const cv = document.querySelector('.dr-canvas'); return cv.width === Math.round(cv.getBoundingClientRect().width * 2); }));
    // the page itself did not scroll while drawing
    await page.screenshot({ path: path.join(SHOTS, 'task-he-dark-360.png') });
    // (headless Chromium drops the click of the first tap after a synthetic touch-action:none gesture,
    //  even on a plain div without handlers — so do one neutral tap first)
    await page.locator('.tk-head').tap();
    await page.locator('.tk-panel--hint .tk-panel__head').tap();
    await page.waitForTimeout(400);
    assert.strictEqual(await page.locator('.tk-hints__item').count(), 1, 'manual hint opens hint 1');
    await page.evaluate(() => document.querySelector('.t-modal__head button').click());
    // AI level 2 choice task
    await page.evaluate(() => document.getElementById('ls-ai').scrollIntoView());
    await page.locator('#ls-tab-2').evaluate(n => n.scrollIntoView({ block: 'center' }));
    await page.locator('#ls-tab-2').tap();
    await page.locator('#ls-pane-2 .ls-tile').nth(2).evaluate(n => n.scrollIntoView({ block: 'center' }));
    await page.locator('#ls-pane-2 .ls-tile').nth(2).tap();
    await page.waitForSelector('.tk-choice');
    assert.ok(await page.locator('.tk-check').isDisabled());
    await page.locator('.tk-choice').nth(0).tap();
    assert.ok(await page.locator('.tk-check').isEnabled());
    await page.locator('.tk-check').tap();
    await page.waitForTimeout(300);
    assert.ok(await page.locator('.tk-result--ok').isVisible());
    const pts = await page.evaluate(() => Store.auth.current().done['solve:math-2026-11-01:ai2-3']);
    assert.strictEqual(pts, 20 + 2 * 5, 'AI level bonus');
    assert.deepStrictEqual(errs, []);
    await ctx.close();
  });

  /* ---------- 5. every task's own answer passes the checker in the browser ---------- */
  await step('all teacher + AI answers pass TaskCheck in the browser', async () => {
    const ctx = await browser.newContext(); const page = await ctx.newPage();
    await page.goto(URL('he', 'light'));
    await page.waitForSelector('.ls-tile');
    const bad = await page.evaluate(() => {
      const L = window.LESSONS['math-2026-11-01']; const out = [];
      L.tasks.teacher.concat(L.tasks.ai).forEach(tk => {
        const a = tk.answer;
        const input = tk.kind === 'choice' ? String(a.index) : tk.kind === 'number' ? a.value : (a.roots.length ? a.roots.join(', ') : 'אין פתרון');
        const r = TaskCheck.check(tk, input);
        if (r.status !== 'correct') out.push(tk.id + ':' + r.status);
      });
      return out;
    });
    assert.deepStrictEqual(bad, []);
    await ctx.close();
  });

  /* ---------- 6. reading tracker ---------- */
  await step('reading tracker: not instant, idle does not count, awards after reading', async () => {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 860 } });
    const page = await ctx.newPage();
    await page.clock.install();
    await page.goto(URL('en', 'light'));
    await page.waitForSelector('.ls-tile');
    const st = () => page.evaluate(() => window.ReadingTracker._states['math-2026-11-01']);
    // jump to the end immediately — must NOT count as read
    // wait until the browser really delivers the scroll event (it comes on a real frame, the test clock is fake)
    await page.evaluate(() => new Promise(r => { document.addEventListener('scroll', () => r(), { once: true, capture: true }); document.querySelector('[data-read-end]').scrollIntoView(); }));
    await page.clock.runFor(3000);
    assert.strictEqual(await page.evaluate(() => Store.progress.has('read:math-2026-11-01')), false, 'not instant');
    // idle for a minute: engaged time grows by ≤ 5 s
    const e0 = (await st()).engagedMs;
    await page.clock.runFor(60000);
    const e1 = (await st()).engagedMs;
    assert.ok(e1 - e0 <= 5600, 'idle counted ' + (e1 - e0));
    // read: scroll slowly from top to bottom with activity, then back up
    await page.evaluate(() => window.scrollTo(0, 0));
    let read = false, seconds = 0;
    const H = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let pass = 0; pass < 6 && !read; pass++) {
      for (let y = 0; y < H && !read; y += 120) {
        await page.evaluate(yy => window.scrollTo(0, yy), y);
        await page.mouse.move(400 + (y % 50), 300);
        await page.clock.runFor(1000); seconds++;
        read = await page.evaluate(() => Store.progress.has('read:math-2026-11-01'));
      }
    }
    const s = await st();
    assert.ok(read, 'read after scrolling; state ' + JSON.stringify({ engaged: s.engagedMs, end: s.endReached }));
    assert.ok(seconds >= 30, 'took at least the minimum time: ' + seconds + 's');
    assert.ok(await page.locator('.ls-readchip').isVisible());
    console.log('       read after ~' + seconds + ' s of simulated reading (engaged ' + Math.round(s.engagedMs / 1000) + ' s)');
    await ctx.close();
  });

  /* ---------- 6b. old-browser fallbacks: no IntersectionObserver, no PointerEvent ---------- */
  await step('fallbacks: reading without IntersectionObserver, drawing without PointerEvent', async () => {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 860 } });
    const page = await ctx.newPage(); const errs = []; watchErrors(page, errs);
    await page.addInitScript(() => { delete window.IntersectionObserver; delete window.PointerEvent; delete window.ResizeObserver; });
    await page.clock.install();
    await page.goto(URL('ru', 'light'));
    await page.waitForSelector('.ls-tile');
    assert.strictEqual(await page.evaluate(() => typeof window.IntersectionObserver), 'undefined');
    const H = await page.evaluate(() => document.documentElement.scrollHeight);
    let read = false;
    for (let pass = 0; pass < 6 && !read; pass++) for (let y = 0; y < H && !read; y += 120) {
      await page.evaluate(yy => window.scrollTo(0, yy), y);
      await page.keyboard.press('Shift');
      await page.clock.runFor(1000);
      read = await page.evaluate(() => Store.progress.has('read:math-2026-11-01'));
    }
    assert.ok(read, 'read without IO');
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.locator('.ls-tile').first().click();
    await page.waitForSelector('.tk');
    await page.clock.runFor(500);
    const c = await page.locator('.dr-canvas').boundingBox();
    await page.mouse.move(c.x + 40, c.y + 40); await page.mouse.down();
    for (let i = 0; i < 15; i++) await page.mouse.move(c.x + 40 + i * 10, c.y + 40 + i * 5);
    await page.mouse.up();
    const inked = await page.evaluate(() => {
      const cv = document.querySelector('.dr-canvas'); const d = cv.getContext('2d').getImageData(0, 0, cv.width, cv.height).data;
      let n = 0; for (let i = 3; i < d.length; i += 4) if (d[i]) n++; return n;
    });
    assert.ok(inked > 100, 'mouse fallback ink ' + inked);
    // undo removes it, resize keeps strokes
    await page.click('.tk-toolbar__end .tk-tool');
    const after = await page.evaluate(() => {
      const cv = document.querySelector('.dr-canvas'); const d = cv.getContext('2d').getImageData(0, 0, cv.width, cv.height).data;
      let n = 0; for (let i = 3; i < d.length; i += 4) if (d[i]) n++; return n;
    });
    assert.strictEqual(after, 0, 'undo clears the stroke');
    assert.deepStrictEqual(errs, []);
    await ctx.close();
  });

  await step('drawing survives a resize (strokes kept in CSS px)', async () => {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 860 } });
    const page = await ctx.newPage();
    await page.goto(URL('en', 'light'));
    await page.waitForSelector('.ls-tile');
    await page.locator('.ls-tile').first().click();
    await page.waitForSelector('.tk'); await page.waitForTimeout(300);
    const c = await page.locator('.dr-canvas').boundingBox();
    await page.mouse.move(c.x + 20, c.y + 20); await page.mouse.down();
    for (let i = 0; i < 15; i++) await page.mouse.move(c.x + 20 + i * 8, c.y + 20 + i * 6);
    await page.mouse.up();
    await page.setViewportSize({ width: 700, height: 800 });
    await page.waitForTimeout(400);
    const ink = await page.evaluate(() => {
      const cv = document.querySelector('.dr-canvas'); const d = cv.getContext('2d').getImageData(0, 0, cv.width, cv.height).data;
      let n = 0; for (let i = 3; i < d.length; i += 4) if (d[i]) n++; return [n, cv.width];
    });
    assert.ok(ink[0] > 100 && ink[1] < 700, 'ink after resize ' + ink);
    await ctx.close();
  });

  /* ---------- 7. language switch re-renders in place ---------- */
  await step('langchange re-renders (he → ru → en)', async () => {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 860 } });
    const page = await ctx.newPage(); const errs = []; watchErrors(page, errs);
    await page.goto(URL('he', 'light'));
    await page.waitForSelector('.ls-tile');
    await page.selectOption('#lang', 'ru');
    await page.waitForTimeout(200);
    assert.ok((await page.textContent('.ls-hero__title')).includes('Квадратные'));
    await page.selectOption('#lang', 'en');
    await page.waitForTimeout(200);
    assert.ok((await page.textContent('#ls-h-teacher')).includes('Teacher tasks'));
    assert.strictEqual(await page.locator('.ls').count(), 1);
    assert.deepStrictEqual(errs, []);
    await ctx.close();
  });

  await browser.close();
  console.log(`\n${passed} passed, ${failures} failed`);
  process.exit(failures ? 1 : 0);
})();

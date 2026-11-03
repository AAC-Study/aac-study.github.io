/* Homework section: list with dates and time left, the homework page, AI prompt in English with a reply-language switch.
   Needs a static server on :8765 from the site root.  Run: node test/homework.e2e.js */
'use strict';
const { chromium } = require('playwright');
const assert = require('assert');
const SP = process.env.SP || '/tmp';
let failures = 0, passed = 0;
async function step(name, fn) {
  try { await fn(); passed++; console.log('  ok   ' + name); }
  catch (e) { failures++; console.log('  FAIL ' + name + '\n       ' + String(e && e.message || e).split('\n').slice(0, 6).join('\n       ')); }
}
(async () => {
  const b = await chromium.launch();
  async function mk(width, lang) {
    const ctx = await b.newContext({ viewport: { width: width || 1280, height: 900 } }); const p = await ctx.newPage(); const errs = [];
    p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error' && !/Failed to load resource|favicon/.test(m.text())) errs.push(m.text()); });
    await ctx.route('**/js/config.js', r => r.fulfill({ contentType: 'application/javascript', body: "window.APP_CONFIG={SUPABASE_URL:'',SUPABASE_ANON_KEY:'',MOCK_INVITE_CODE:'AAC2026',TURNSTILE_SITE_KEY:''};" }));
    await ctx.addInitScript(() => { const T = new Date('2026-11-01T10:00:00+02:00').getTime(), real = Date.now(); const off = T - real; Date.now = () => real + off + (performance.now() | 0); });
    await p.goto('http://localhost:8765/index.html'); await p.evaluate(l => { localStorage.clear(); localStorage.setItem('lang', JSON.stringify(l)); }, lang || 'ru'); await p.reload();
    await p.evaluate(() => Store.auth.signUp({ email: 'hw@gmail.com', password: 'secret1', name: 'Hw', invite: 'AAC2026' }).then(() => Store.auth.signIn({ email: 'hw@gmail.com', password: 'secret1', remember: true })));
    return { ctx, p, errs };
  }
  await step('menu has Homework; list shows subject, given, due and time left', async () => {
    const { ctx, p, errs } = await mk(1280);
    await p.goto('http://localhost:8765/index.html#/'); await p.waitForSelector('.side');
    assert(await p.locator('.side a[href="#/homework"], .side [data-path="/homework"]').count() >= 1 || /Домашние задания/.test(await p.locator('.side').innerText()), 'menu item');
    await p.goto('http://localhost:8765/index.html#/homework'); await p.waitForSelector('.hw-card');
    assert.strictEqual(await p.locator('.hw-card').count(), 2);
    const sql = p.locator('.hw-card', { hasText: 'Вводное упражнение' });
    const txt = await sql.innerText();
    assert(/Базы данных SQL/.test(txt) && /Выдали/.test(txt) && /Сдать до/.test(txt) && /Осталось 2 дн\. [12] ч/.test(txt), JSON.stringify(txt));
    assert(/Срок сдачи пока не известен/.test(await p.locator('.hw-card', { hasText: 'HTML' }).innerText()));
    await p.screenshot({ path: SP + '/hw-list.png' });
    assert.deepStrictEqual(errs, []); await ctx.close();
  });
  await step('homework page: steps, how to submit, teacher text; AI prompt in English, reply language switch, no "made by AI" text inside', async () => {
    const { ctx, p, errs } = await mk(390, 'he');
    await p.goto('http://localhost:8765/index.html#/homework/sql-2026-10-29-ptiha'); await p.waitForSelector('.hw-steps');
    assert.strictEqual(await p.locator('.hw-steps li').count(), 7);
    assert(/Moodle/.test(await p.locator('.hw-submit').innerText()));
    await p.click('.hw-ai summary'); await p.click('.hw-mode .tk-seg__btn[data-mode="tutor"]');
    const pr1 = await p.inputValue('.hw-ai textarea');
    assert(/^You are a patient tutor/.test(pr1) && /answer me in Hebrew/.test(pr1) && /הגדר מסד נתונים/.test(pr1) && /FIRST ask me to send a photo or screenshot/.test(pr1), pr1.slice(0, 300));
    await p.click('.hw-ai .tk-seg__btn[data-lang="ru"]');
    const pr2 = await p.inputValue('.hw-ai textarea');
    assert(/answer me in Russian/.test(pr2) && !/answer me in Hebrew/.test(pr2));
    assert(/ai-warn/.test(await p.innerHTML('.hw-ai')), 'warning on the site');
    await p.screenshot({ path: SP + '/hw-page.png', fullPage: true });
    // remembered for tasks too
    assert.strictEqual(await p.evaluate(() => Tasks.aiLang()), 'ru');
    assert.deepStrictEqual(errs, []); await ctx.close();
  });
  await step('AI-banned course: red note on the page and in the card', async () => {
    const { ctx, p, errs } = await mk(1280);
    await p.goto('http://localhost:8765/index.html#/homework/fullstack-2026-10-28-mesakem'); await p.waitForSelector('.hw-rule');
    assert(/запретил ИИ/.test(await p.locator('.hw-rule').innerText()));
    await p.click('.hw-ai summary');
    assert(/Never write the solution or code for me/.test(await p.inputValue('.hw-ai textarea')));
    assert.deepStrictEqual(errs, []); await ctx.close();
  });
  await step('"Do it all" mode: full solution, explanation file starts with the AI line, remembered; default full, tutor on AI-banned courses', async () => {
    const { ctx, p, errs } = await mk(390, 'ru');
    await p.goto('http://localhost:8765/index.html#/homework/sql-2026-10-29-ptiha'); await p.waitForSelector('.hw-ai');
    await p.click('.hw-ai summary');
    assert.strictEqual(await p.getAttribute('.hw-mode .tk-seg__btn[data-mode="full"]', 'aria-pressed'), 'true', 'full is the default');
    await p.click('.hw-mode .tk-seg__btn[data-mode="tutor"]'); await p.click('.hw-mode .tk-seg__btn[data-mode="full"]');
    const pr = await p.inputValue('.hw-ai textarea');
    assert(/Do the WHOLE homework for me/.test(pr) && /explanation\.txt/.test(pr), pr.slice(0, 200));
    assert(/VERY FIRST line of this file must be exactly, in Hebrew: "העבודה נעשתה בעזרת בינה מלאכותית/.test(pr), 'AI line');
    assert(/The second line: the same sentence in Russian/.test(pr) && /answer me in Russian/.test(pr));
    assert(/NO notes, remarks/.test(pr) && /5 questions the teacher/.test(pr) && /הגדר מסד נתונים/.test(pr));
    assert(/Сделано с помощью ИИ/.test(await p.locator('.hw-ai__body').innerText()), 'site text explains the AI line');
    await p.reload(); await p.waitForSelector('.hw-ai'); await p.click('.hw-ai summary');
    assert(/Do the WHOLE homework/.test(await p.inputValue('.hw-ai textarea')), 'mode remembered');
    await p.click('.hw-ai .tk-seg__btn[data-lang="he"]');
    const he = await p.inputValue('.hw-ai textarea');
    assert(!/The second line/.test(he) && /answer me in Hebrew/.test(he));
    await p.screenshot({ path: SP + '/hw-full.png', fullPage: true });
    await p.goto('http://localhost:8765/index.html#/homework/fullstack-2026-10-28-mesakem'); await p.waitForSelector('.hw-ai'); await p.click('.hw-ai summary');
    assert(/работу могут не принять/.test(await p.locator('.hw-ai__body').innerText()), 'banned warning in full mode');
    await p.click('.hw-mode .tk-seg__btn[data-mode="tutor"]');
    assert(/Never write the solution or code for me/.test(await p.inputValue('.hw-ai textarea')));
    assert.deepStrictEqual(errs, []); await ctx.close();
  });
  await step('lessons: prompt for any task (no context) on the subject page and in a lesson; asks for context first, every why, warns once', async () => {
    const { ctx, p, errs } = await mk(390, 'ru');
    await p.goto('http://localhost:8765/index.html#/homework'); await p.waitForSelector('.hw-card');
    assert.strictEqual(await p.locator('.tk-any').count(), 0, 'not on the homework page');
    await p.goto('http://localhost:8765/index.html#/lesson/math-2026-11-01'); await p.waitForSelector('.ls-tasks--ai');
    assert.strictEqual(await p.locator('.tk-any').count(), 1, 'in a lesson');
    await p.goto('http://localhost:8765/index.html#/subject/math'); await p.waitForSelector('.tk-any');
    assert(/без контекста/.test(await p.locator('.tk-any summary').innerText()));
    await p.click('.tk-any summary');
    const pr = await p.inputValue('.tk-any textarea');
    assert(/You do not know what I am working on yet\. Before anything else, ask me to send the context/.test(pr), pr.slice(0, 300));
    assert(!/Homework:|Topic:/.test(pr), 'no context inside');
    assert(/why \+ and not -/.test(pr) && /moves to the other side of =/.test(pr) && /fastest effective way/.test(pr));
    assert(/very first reply with ONE short line warning me that you are an AI/.test(pr) && /answer me in Russian/.test(pr));
    await p.click('.tk-any .tk-seg__btn[data-lang="en"]');
    assert(/answer me in English/.test(await p.inputValue('.tk-any textarea')));
    /* the same detail rules in the homework tutor prompt and in lesson prompts */
    assert(/why \+ and not -/.test(await p.evaluate(() => Homework.buildPrompt(HOMEWORK[0], 'ru', 'tutor'))));
    assert(/why \+ and not -/.test(await p.evaluate(() => Homework.buildPrompt(HOMEWORK[0], 'ru', 'full'))));
    assert(/why \+ and not -/.test(await p.evaluate(() => Tasks.DETAIL.join(' '))));
    await p.screenshot({ path: SP + '/lesson-any.png', fullPage: true });
    assert.deepStrictEqual(errs, []); await ctx.close();
  });
  await step('reminder card on top: on by default, Israel 11:00; globe list (Israel first, then Russia, Ukraine, USA…); time; switch off', async () => {
    const { ctx, p, errs } = await mk(390);
    await p.goto('http://localhost:8765/index.html#/homework'); await p.waitForSelector('.hw-rem');
    const first = await p.evaluate(() => { const r = document.querySelector('.hw-rem'), l = document.querySelector('.hw-list'); return !!(r.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_FOLLOWING); });
    assert.ok(first, 'card above the list');
    assert.ok(await p.locator('.hw-rem .switch input').isChecked());
    assert.strictEqual(await p.locator('.hw-rem__time').inputValue(), '11:00');
    assert.ok(/Израиль/.test(await p.locator('.hw-rem__zone').innerText()));
    assert.ok(/11:00/.test(await p.locator('.hw-rem__hint').innerText()));
    await p.click('.hw-rem__zone');
    const opts = await p.locator('.hw-rem__opt').allInnerTexts();
    assert.ok(/Израиль/.test(opts[0]) && /телефон/.test(opts[1]) && /Израиль/.test(opts[2]) && /Россия/.test(opts[3]) && /Украина/.test(opts[4]) && /США/.test(opts[5]), opts.slice(0, 6).join(' | '));
    await p.screenshot({ path: SP + '/hw-remind-list.png' });
    await p.click('.hw-rem__opt[data-zone="us-ny"]');
    await p.locator('.hw-rem__time').fill('09:30'); await p.locator('.hw-rem__time').dispatchEvent('change');
    await p.waitForTimeout(200);
    const c = await p.evaluate(() => Store.auth.current().prefs.hwRemind);
    assert.deepStrictEqual([c.on, c.zone, c.tz, c.time], [true, 'us-ny', 'America/New_York', '09:30']);
    await p.reload(); await p.waitForSelector('.hw-rem');
    assert.ok(/США/.test(await p.locator('.hw-rem__zone').innerText()));
    assert.strictEqual(await p.locator('.hw-rem__time').inputValue(), '09:30');
    await p.click('.hw-rem .switch span'); await p.waitForTimeout(200);
    assert.strictEqual(await p.evaluate(() => Store.auth.current().prefs.hwRemind.on), false);
    assert.ok(await p.locator('.hw-rem__zone').isDisabled());
    assert.ok(/Выключено/.test(await p.locator('.hw-rem__hint').innerText()));
    assert.deepStrictEqual(errs, []); await ctx.close();
  });
  await step('«Я сделал» at the bottom of a homework page: green → grey, card in the list marked done; undo works', async () => {
    const { ctx, p, errs } = await mk(390);
    await p.goto('http://localhost:8765/index.html#/homework/sql-2026-10-29-ptiha'); await p.waitForSelector('.hw-done__btn');
    const last = await p.evaluate(() => { const d = document.querySelector('.hw-done'); const ai = document.querySelector('.hw-ai'); return !ai || !!(ai.compareDocumentPosition(d) & Node.DOCUMENT_POSITION_FOLLOWING); });
    assert.ok(last, 'button after the AI box');
    const green = await p.locator('.hw-done__btn').evaluate(e => getComputedStyle(e).backgroundColor);
    await p.locator('.hw-done').scrollIntoViewIfNeeded(); await p.screenshot({ path: SP + '/hw-done-before.png' });
    await p.click('.hw-done__btn');
    await p.waitForSelector('.hw-done__btn.is-done');
    const grey = await p.locator('.hw-done__btn').evaluate(e => getComputedStyle(e).backgroundColor);
    assert.notStrictEqual(green, grey);
    assert.ok(/24, 160, 88|60, 207, 130/.test(green), 'green: ' + green);
    assert.ok(await p.locator('.hw-done__btn').isDisabled());
    await p.screenshot({ path: SP + '/hw-done-after.png' });
    await p.goto('http://localhost:8765/index.html#/homework'); await p.waitForSelector('.hw-card');
    await p.waitForSelector('.hw-card.is-done');
    assert.ok(/Вводное/.test(await p.locator('.hw-card.is-done').innerText()));
    assert.ok(await p.locator('.hw-card.is-done .hw-donechip').isVisible());
    await p.goto('http://localhost:8765/index.html#/homework/sql-2026-10-29-ptiha'); await p.waitForSelector('.hw-done__undo');
    await p.click('.hw-done__undo'); await p.waitForSelector('.hw-done__btn:not(.is-done)');
    assert.deepStrictEqual(errs, []); await ctx.close();
  });
  await step('home: «Продолжить» card for the last opened unread lesson, with its part; gone when nothing is in progress', async () => {
    const { ctx, p, errs } = await mk(390);
    await p.goto('http://localhost:8765/index.html#/'); await p.waitForSelector('.side');
    assert.strictEqual(await p.locator('.cont-card').count(), 0, 'nothing started yet → no card');
    await p.goto('http://localhost:8765/index.html#/lesson/math-2026-11-01'); await p.waitForSelector('.ls-part');
    await p.click('.ls-part.is-open .ls-part__next'); await p.waitForTimeout(300);
    await p.goto('http://localhost:8765/index.html#/'); await p.waitForSelector('.cont-card');
    const txt = await p.locator('.cont-card').innerText();
    assert.ok(/Продолжить/i.test(txt) && /Квадратные уравнения/.test(txt) && /Часть 2 из/.test(txt), txt);
    await p.click('.cont-card'); await p.waitForSelector('.ls-part.is-open[data-part="1"]');
    assert.deepStrictEqual(errs, []); await ctx.close();
  });
  await b.close();
  console.log('\n' + passed + ' passed, ' + failures + ' failed');
  process.exit(failures ? 1 : 0);
})();

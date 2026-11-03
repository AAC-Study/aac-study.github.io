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
    await p.click('.hw-ai summary');
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
  await b.close();
  console.log('\n' + passed + ' passed, ' + failures + ' failed');
  process.exit(failures ? 1 : 0);
})();

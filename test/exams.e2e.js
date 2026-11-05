/* Exams on the home screen: shown quietly, unknown date → "date not known yet", past ones hidden.
   Needs a static server on :8765 from the site root.  Run: node test/exams.e2e.js */
'use strict';
const { chromium, devices } = require('playwright');
const assert = require('assert');
let failures = 0, passed = 0;
async function step(name, fn) {
  try { await fn(); passed++; console.log('  ok   ' + name); }
  catch (e) { failures++; console.log('  FAIL ' + name + '\n       ' + String(e && e.message || e).split('\n').slice(0, 6).join('\n       ')); }
}
const CFG = "window.APP_CONFIG={SUPABASE_URL:'',SUPABASE_ANON_KEY:'',MOCK_INVITE_CODE:'AAC2026',TURNSTILE_SITE_KEY:''};";
const SHOT = process.env.SHOT_DIR;
(async () => {
  const b = await chromium.launch();
  async function home(exams, lang) {
    const ctx = await b.newContext(devices['Pixel 7']); const p = await ctx.newPage(); const errs = [];
    p.on('pageerror', e => errs.push(e.message));
    await ctx.route('**/js/config.js', r => r.fulfill({ contentType: 'application/javascript', body: CFG }));
    if (exams) await ctx.route('**/data/exams.js', r => r.fulfill({ contentType: 'application/javascript', body: 'window.EXAMS=' + JSON.stringify(exams) + ';' }));
    await p.goto('http://localhost:8765/'); await p.waitForSelector('form');
    if (lang) await p.evaluate(l => { I18N.set(l); }, lang);
    await p.evaluate(() => Store.auth.signUp({ email: 'ex@gmail.com', password: 'secret1', name: 'Ex', invite: 'AAC2026' }));
    await p.evaluate(() => Store.auth.signIn({ email: 'ex@gmail.com', password: 'secret1', remember: true }).then(() => App.go('/')));
    await p.waitForSelector('.hero', { timeout: 8000 });
    return { ctx, p, errs };
  }
  const iso = n => { const d = new Date(Date.now() + n * 864e5); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };

  await step('real data: the computer quiz shows with "date not known yet"', async () => {
    const { ctx, p, errs } = await home(null, 'ru');
    const txt = await p.locator('.exam-card').first().innerText();
    assert(/Дата пока неизвестна/.test(txt), txt);
    assert(/Системы счисления/.test(txt), txt);
    assert.strictEqual(await p.getAttribute('.exam-card', 'href'), '#/subject/computer');
    if (SHOT) await p.screenshot({ path: SHOT + '/exam_ru.png' });
    assert.deepStrictEqual(errs, []); await ctx.close();
  });
  await step('dated exams: sorted by date, "in N days", past and expired hidden', async () => {
    const T = { he: 'T', ru: 'T', en: 'T' };
    const { ctx, p, errs } = await home([
      { id: 'u', subject: 'math', kind: T, title: { he: 'U', ru: 'U', en: 'U' }, date: null },
      { id: 'b', subject: 'sql', kind: T, title: { he: 'B', ru: 'B', en: 'B' }, date: iso(5) },
      { id: 'a', subject: 'algo', kind: T, title: { he: 'A', ru: 'A', en: 'A' }, date: iso(1) },
      { id: 'old', subject: 'algo', kind: T, title: { he: 'OLD', ru: 'OLD', en: 'OLD' }, date: iso(-1) },
      { id: 'exp', subject: 'algo', kind: T, title: { he: 'EXP', ru: 'EXP', en: 'EXP' }, date: null, hideAfter: iso(-1) }
    ], 'ru');
    const titles = await p.locator('.exam-card__title').allInnerTexts();
    assert.deepStrictEqual(titles, ['A', 'B', 'U']);
    const whens = await p.locator('.exam-card__when').allInnerTexts();
    assert(/завтра/.test(whens[0]) && /через 5 дн\./.test(whens[1]), whens.join(' | '));
    assert.deepStrictEqual(errs, []); await ctx.close();
  });
  await step('no exams → nothing on the home screen', async () => {
    const { ctx, p, errs } = await home([], 'ru');
    assert.strictEqual(await p.locator('.exam-list').count(), 0);
    assert.deepStrictEqual(errs, []); await ctx.close();
  });
  await b.close();
  console.log('\n' + passed + ' passed, ' + failures + ' failed');
  process.exit(failures ? 1 : 0);
})();

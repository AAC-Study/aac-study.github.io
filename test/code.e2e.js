/* Programming lessons: the task window has a code field, no drawing and no math symbols; HTML has a safe live preview.
   Needs a static server on :8765 from the site root.  Run: node test/code.e2e.js */
'use strict';
const { chromium } = require('playwright');
const assert = require('assert');
const SP = process.env.SP || '/tmp';
let failures = 0, passed = 0;
async function step(name, fn) {
  try { await fn(); passed++; console.log('  ok   ' + name); }
  catch (e) { failures++; console.log('  FAIL ' + name + '\n       ' + String(e && e.message || e).split('\n').slice(0, 6).join('\n       ')); }
}
const URL = (id, lang) => `http://localhost:8765/test/lesson-test.html?lang=${lang || 'ru'}&theme=light#/lesson/${id}`;

(async () => {
  const browser = await chromium.launch();
  async function openFirst(id, lang, width) {
    const ctx = await browser.newContext({ viewport: { width: width || 1280, height: 900 } });
    const page = await ctx.newPage(); const errs = [];
    page.on('pageerror', e => errs.push(e.message)); page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    await page.goto(URL(id, lang)); await page.waitForSelector('.ls-tile');
    await page.locator('.ls-tile').first().click(); await page.waitForSelector('.tk-work');
    return { ctx, page, errs };
  }
  await step('Java task: code field, no drawing, code symbols, Tab = 4 spaces, code goes into the AI prompt', async () => {
    const { ctx, page, errs } = await openFirst('algo-2026-11-01');
    assert.strictEqual(await page.locator('.tk-canvas').count(), 0, 'no canvas');
    assert.strictEqual(await page.locator('.tk-seg').count(), 0, 'no draw/type switch');
    assert(await page.locator('textarea.tk-code').isVisible(), 'code field visible');
    assert.strictEqual(await page.getAttribute('textarea.tk-code', 'dir'), 'ltr');
    const syms = await page.$$eval('.tk-sym', b => b.map(x => x.textContent));
    assert(syms.includes('{') && syms.includes(';') && !syms.includes('√') && !syms.includes('²'), syms.join(' '));
    assert(/Java/.test(await page.textContent('.tk-code__label')));
    await page.click('textarea.tk-code'); await page.keyboard.type('int s = 0;'); await page.keyboard.press('Enter'); await page.keyboard.press('Tab'); await page.keyboard.type('s++;');
    assert.strictEqual(await page.inputValue('textarea.tk-code'), 'int s = 0;\n    s++;');
    assert(await page.evaluate(() => document.activeElement.classList.contains('tk-code')), 'focus stays in the code field');
    await page.click('.tk-sym:text-is("{")');
    assert(/s\+\+;\{$/.test(await page.inputValue('textarea.tk-code')), 'symbol goes into the code');
    await page.click('.tk-panel--ai .tk-panel__head'); await page.waitForTimeout(300);
    const pr = await page.inputValue('.tk-prompt');
    assert(/репетитор по программированию \(Java\)/.test(pr) && /Мой код:/.test(pr) && /int s = 0;/.test(pr) && !/математике/.test(pr), pr.slice(0, 400));
    await page.screenshot({ path: SP + '/code-java.png' });
    // reload keeps the code
    await page.reload(); await page.waitForSelector('textarea.tk-code');   // the open task reopens by itself
    assert(/int s = 0;/.test(await page.inputValue('textarea.tk-code')), 'code kept after reload');
    assert.deepStrictEqual(errs, []); await ctx.close();
  });
  await step('HTML task: live preview in a sandbox (no scripts run, no access to the site)', async () => {
    const { ctx, page, errs } = await openFirst('fullstack-2026-10-28', 'he', 390);
    assert.strictEqual(await page.locator('.tk-canvas').count(), 0);
    await page.fill('textarea.tk-code', '<body style="background:#ffeeaa"><h1 id="x">שלום</h1><table border="1"><tr><td>1</td><td>2</td></tr></table><script>parent.document.body.innerHTML="HACK";window.top.hacked=1</script><img src=x onerror="parent.hacked=2"></body>');
    await page.click('.tk-preview__btn');
    const fr = page.frameLocator('.tk-preview__frame');
    await fr.locator('#x').waitFor();
    assert.strictEqual(await fr.locator('#x').textContent(), 'שלום');
    assert.strictEqual(await fr.locator('td').count(), 2);
    await page.waitForTimeout(400);
    assert.strictEqual(await page.evaluate(() => window.hacked), undefined, 'scripts in preview must not run');
    assert(!/HACK/.test(await page.evaluate(() => document.body.innerText.slice(0, 50))));
    assert.strictEqual(await page.getAttribute('.tk-preview__frame', 'sandbox'), '');
    await page.fill('textarea.tk-code', '<p id="y">live</p>'); await page.waitForTimeout(700);
    assert.strictEqual(await fr.locator('#y').textContent(), 'live', 'preview updates while typing');
    await page.screenshot({ path: SP + '/code-html.png', fullPage: false });
    assert.deepStrictEqual(errs.filter(e => !/Blocked script execution|sandboxed/.test(e)), []); await ctx.close();
  });
  await step('math lesson keeps drawing and math symbols', async () => {
    const { ctx, page } = await openFirst('math-2026-11-01');
    assert(await page.locator('.tk-canvas').isVisible());
    const syms = await page.$$eval('.tk-sym', b => b.map(x => x.textContent));
    assert(syms.includes('√')); await ctx.close();
  });
  await browser.close();
  console.log('\n' + passed + ' passed, ' + failures + ' failed');
  process.exit(failures ? 1 : 0);
})();

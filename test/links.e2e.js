/* A link sent in a chat, opened for the first time on a new phone: login screen first (no error), then the page from the link.
   Links without "#" (aac-study.github.io/math) go through 404.html.
   Needs a static server on :8765 from the site root.  Run: node test/links.e2e.js */
'use strict';
const { chromium, devices } = require('playwright');
const assert = require('assert');
let failures = 0, passed = 0;
async function step(name, fn) {
  try { await fn(); passed++; console.log('  ok   ' + name); }
  catch (e) { failures++; console.log('  FAIL ' + name + '\n       ' + String(e && e.message || e).split('\n').slice(0, 6).join('\n       ')); }
}
const CFG = "window.APP_CONFIG={SUPABASE_URL:'',SUPABASE_ANON_KEY:'',MOCK_INVITE_CODE:'AAC2026',TURNSTILE_SITE_KEY:''};";
(async () => {
  const b = await chromium.launch();
  async function fresh() {
    const ctx = await b.newContext(devices['Pixel 7']); const p = await ctx.newPage(); const errs = [];
    p.on('pageerror', e => errs.push(e.message));
    await ctx.route('**/js/config.js', r => r.fulfill({ contentType: 'application/javascript', body: CFG }));
    return { ctx, p, errs };
  }
  /* registered account exists (mock store lives in localStorage of this origin) */
  async function makeUser(p) {
    await p.evaluate(() => Store.auth.signUp({ email: 'ln@gmail.com', password: 'secret1', name: 'Ln', invite: 'AAC2026' }));
    await p.evaluate(() => Store.auth.signOut && Store.auth.signOut());
  }
  for (const link of ['#/subject/math', '#/lesson/math-2026-11-01', '#/profile', '#/homework/sql-2026-10-29-ptiha', '#/lesson/no-such-lesson', '#/something/weird', '?fbclid=abc123#/subject/algo']) {
    await step('new phone opens ' + link + ' → login / register screen, no error', async () => {
      const { ctx, p, errs } = await fresh();
      await p.goto('http://localhost:8765/' + link);
      await p.waitForSelector('.auth, form', { timeout: 8000 });
      const txt = await p.locator('body').innerText();
      assert(/Вход|Login|כניסה/i.test(txt) && /Регистрац|Sign up|Register|הרשמה|להירשם|אין לך חשבון/i.test(txt), txt.slice(0, 400));
      assert.deepStrictEqual(errs, []); await ctx.close();
    });
  }
  await step('after logging in, the page from the link opens', async () => {
    const { ctx, p, errs } = await fresh();
    await p.goto('http://localhost:8765/'); await p.waitForSelector('form');
    await makeUser(p);
    await p.goto('http://localhost:8765/#/lesson/math-2026-11-01'); await p.waitForSelector('form');
    await p.evaluate(() => Store.auth.signIn({ email: 'ln@gmail.com', password: 'secret1', remember: true }).then(() => App.render()));
    await p.waitForSelector('.ls-tasks', { timeout: 8000 });
    assert(/#\/lesson\/math-2026-11-01/.test(p.url()));
    assert.deepStrictEqual(errs, []); await ctx.close();
  });
  for (const [from, to] of [['/math', '#/subject/math'], ['/profile/', '#/profile'], ['/lesson/math-2026-11-01', '#/lesson/math-2026-11-01'], ['/whatever/x/y', '#/']]) {
    await step('link without # ' + from + ' → ' + to, async () => {
      const { ctx, p } = await fresh();
      /* python http.server has no 404.html fallback — serve it like GitHub Pages does */
      await ctx.route(u => new URL(u).pathname === from, async r => r.fulfill({ status: 404, contentType: 'text/html', body: require('fs').readFileSync(__dirname + '/../404.html', 'utf8') }));
      await p.goto('http://localhost:8765' + from);
      await p.waitForURL(u => String(u).endsWith('/' + to), { timeout: 8000 });
      await p.waitForSelector('form');
      await ctx.close();
    });
  }
  await b.close();
  console.log((failures ? 'FAILED ' : 'OK ') + passed + ' passed, ' + failures + ' failed');
  process.exit(failures ? 1 : 0);
})();

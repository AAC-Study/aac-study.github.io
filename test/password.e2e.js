/* «Забыл пароль?», новый пароль по ссылке из письма, смена пароля в настройках и пауза 24 часа.
   Нужен статический сервер копии сайта на :8765. Run: SP=/tmp node test/password.e2e.js */
const { chromium } = require('playwright'); const assert = require('assert');
const SB = 'https://zckcgydjbjpanegmyzvs.supabase.co';
(async () => {
  const b = await chromium.launch(); let pass = 0;
  async function step(n, f) { await f(); pass++; console.log('  ok ' + n); }
  async function mk(opts) {
    const ctx = await b.newContext({ viewport: { width: 390, height: 800 } }); const p = await ctx.newPage(); const errs = [], calls = [];
    p.on('pageerror', e => errs.push(e.message));
    await ctx.route('**/js/config.js', r => r.fulfill({ contentType: 'application/javascript', body: `window.APP_CONFIG={SUPABASE_URL:'${SB}',SUPABASE_ANON_KEY:'k',INVITE_CODE_HINT:'AAC',MOCK_INVITE_CODE:'AAC2026',TURNSTILE_SITE_KEY:''};` }));
    await ctx.route(SB + '/**', async r => {
      const u = new URL(r.request().url()); const body = r.request().postData();
      calls.push({ m: r.request().method(), path: u.pathname + u.search, body: body ? JSON.parse(body) : null });
      const j = (s, o) => r.fulfill({ status: s, contentType: 'application/json', body: JSON.stringify(o) });
      if (u.pathname === '/auth/v1/recover') return opts.recErr ? j(500, { code: 500, error_code: 'unexpected_failure', msg: 'Error sending recovery email' }) : j(200, {});
      if (u.pathname === '/auth/v1/user' && r.request().method() === 'PUT') return opts.putErr ? j(500, { code: 500, error_code: 'unexpected_failure', msg: 'Database error updating user' }) : j(200, { id: 'u1' });
      if (u.pathname === '/auth/v1/user') return j(200, { id: 'u1', email: 'a@b.c' });
      if (u.pathname === '/rest/v1/pass_changes') return j(200, opts.recent ? [{ changed_at: new Date(Date.now() - 3600e3).toISOString() }] : []);
      if (u.pathname === '/rest/v1/profiles') return j(200, [{ id: 'u1', name: 'A', role: 'student', xp: 0, prefs: {}, frame: 'none' }]);
      if (u.pathname.startsWith('/rest/v1/rpc/')) return j(200, null);
      if (u.pathname.startsWith('/rest/v1/')) return j(200, []);
      return j(200, {});
    });
    return { ctx, p, errs, calls };
  }
  const LINK = 'http://localhost:8765/index.html#access_token=AT2&expires_at=9999999999&expires_in=3600&refresh_token=RT2&token_type=bearer&type=recovery';
  await step('forgot password sends recover request', async () => {
    const { ctx, p, errs, calls } = await mk({});
    await p.goto('http://localhost:8765/index.html'); await p.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', '"ru"'); }); await p.reload();
    await p.click('.auth-forgot'); await p.fill('#f-email', ' A@B.c '); await p.click('form button[type=submit]');
    await p.waitForSelector('.auth-mail');
    const c = calls.find(x => x.path.startsWith('/auth/v1/recover'));
    assert.strictEqual(c.body.email, 'a@b.c'); assert(c.path.includes('redirect_to='));
    await p.screenshot({ path: process.env.SP + '/pw-forgot.png' });
    assert.deepStrictEqual(errs, []); await ctx.close();
  });
  await step('forgot password: mail server error is not "wrong email or password"', async () => {
    const { ctx, p } = await mk({ recErr: true });
    p.on('console', () => {});
    await p.goto('http://localhost:8765/index.html'); await p.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', '"ru"'); }); await p.reload();
    await p.click('.auth-forgot'); await p.fill('#f-email', 'x@y.z'); await p.click('form button[type=submit]');
    await p.waitForFunction(() => /Сервер не смог отправить письмо/.test(document.body.innerText));
    const txt = await p.evaluate(() => document.body.innerText);
    assert(!/пароль\b.*Неверный|Неверный email или пароль/.test(txt)); assert(/F-500 · unexpected_failure/.test(txt), txt); assert.strictEqual(await p.getAttribute('.err-code', 'title'), 'Error sending recovery email');
    await ctx.close();
  });
  await step('recovery link -> new password screen -> saved -> home', async () => {
    const { ctx, p, errs, calls } = await mk({});
    await p.goto('http://localhost:8765/index.html'); await p.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', '"ru"'); });
    await p.goto('about:blank'); await p.goto(LINK);
    await p.waitForSelector('#f-np1');
    await p.screenshot({ path: process.env.SP + '/pw-new.png' });
    await p.fill('#f-np1', 'newpass1'); await p.fill('#f-np2', 'newpass2'); await p.click('.pw-form button[type=submit]');
    assert(/не совпадают/.test(await p.locator('.form-error').innerText()));
    await p.fill('#f-np2', 'newpass1'); await p.click('.pw-form button[type=submit]');
    await p.waitForSelector('.side');
    const put = calls.find(x => x.m === 'PUT'); assert.strictEqual(put.body.password, 'newpass1');
    assert.strictEqual(await p.evaluate(() => location.hash), '#/');
    assert.deepStrictEqual(errs, []); await ctx.close();
  });
  await step('cooldown: recent change disables button with hours left', async () => {
    const { ctx, p, errs } = await mk({ recent: true });
    await p.goto('http://localhost:8765/index.html'); await p.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', '"ru"'); });
    await p.goto('about:blank'); await p.goto(LINK);
    await p.waitForSelector('.pw-note--wait');
    assert(/23 ч/.test(await p.locator('.pw-note').innerText()), await p.locator('.pw-note').innerText());
    assert(await p.locator('.pw-form button[type=submit]').isDisabled());
    await p.click('.auth__switch button'); await p.waitForSelector('.side');
    assert.deepStrictEqual(errs, []); await ctx.close();
  });
  await step('server refuses (cooldown) -> clear message', async () => {
    const { ctx, p, errs } = await mk({ putErr: true });
    await p.goto('http://localhost:8765/index.html'); await p.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', '"ru"'); });
    await p.goto('about:blank'); await p.goto(LINK);
    await p.waitForSelector('#f-np1'); await p.fill('#f-np1', 'newpass1'); await p.fill('#f-np2', 'newpass1'); await p.click('.pw-form button[type=submit]');
    await p.waitForFunction(() => document.querySelector('.pw-form .form-error').style.display === 'block');
    assert(/24 час/.test(await p.locator('.pw-form .form-error').innerText()));
    await ctx.close();
  });
  await step('mock: change password in settings, then cooldown', async () => {
    const ctx = await b.newContext(); const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
    await p.goto('http://localhost:8765/index.html'); await p.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', '"ru"'); }); await p.reload();
    await p.evaluate(() => Store.auth.signUp({ email: 'a@x.y', password: '123456', name: 'A', invite: 'AAC2026' }).then(() => Store.auth.signIn({ email: 'a@x.y', password: '123456' })));
    await p.evaluate(() => App.go('/settings')); await p.click('[data-act=change-pass]');
    await p.fill('#f-np1', 'abcdef'); await p.fill('#f-np2', 'abcdef'); await p.click('.pw-form button[type=submit]');
    await p.waitForFunction(() => !document.querySelector('.pw-form'));
    await p.evaluate(() => Store.auth.signOut()); 
    const ok = await p.evaluate(() => Store.auth.signIn({ email: 'a@x.y', password: 'abcdef' }).then(() => 'in', e => e.code)); assert.strictEqual(ok, 'in');
    await p.evaluate(() => App.go('/settings')); await p.waitForSelector('[data-act=change-pass]'); await p.click('[data-act=change-pass]');
    await p.waitForSelector('.pw-note--wait');
    await p.screenshot({ path: process.env.SP + '/pw-settings.png' });
    assert.deepStrictEqual(errs, []); await ctx.close();
  });
  console.log(pass + ' passed'); await b.close();
})().catch(e => { console.error(e); process.exit(1); });

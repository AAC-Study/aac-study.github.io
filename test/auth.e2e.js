/* Вход: проверка «не робот» (Turnstile, подменённый), экран «проверь почту», вход по ссылке из письма.
   Нужен статический сервер копии сайта на :8765 (python3 -m http.server 8765). Run: node test/auth.e2e.js */
const { chromium } = require('playwright'); const assert = require('assert');
const SB = 'https://zckcgydjbjpanegmyzvs.supabase.co';
(async () => {
  const b = await chromium.launch(); let pass = 0;
  async function mk(opts) {
    const ctx = await b.newContext({ viewport: { width: 390, height: 800 } }); const p = await ctx.newPage(); const errs = [], calls = [];
    p.on('pageerror', e => errs.push(e.message));
    p.on('console', m => { if (m.type() === 'error' && !/favicon|Failed to load resource/.test(m.text())) errs.push('console: ' + m.text()); });
    await ctx.route('**/js/config.js', r => r.fulfill({ contentType: 'application/javascript', body: `window.APP_CONFIG={SUPABASE_URL:'${SB}',SUPABASE_ANON_KEY:'k',INVITE_CODE_HINT:'AAC',MOCK_INVITE_CODE:'AAC2026',TURNSTILE_SITE_KEY:${opts.key ? "'1x00000000000000000000AA'" : "''"}};` }));
    await ctx.route('https://challenges.cloudflare.com/**', r => r.fulfill({ contentType: 'application/javascript', body:
      `window.turnstile={render:function(el,o){window.__cfo=o;el.textContent='[cf]';setTimeout(function(){o.callback('TOK'+(++window.__n||(window.__n=1)))},50);return 'w1'},reset:function(){window.__resets=(window.__resets||0)+1;setTimeout(function(){window.__cfo.callback('TOKR')},50)},remove:function(){}};` }));
    await ctx.route(SB + '/**', async r => {
      const u = new URL(r.request().url()); const body = r.request().postData(); calls.push({ path: u.pathname + u.search, body: body ? JSON.parse(body) : null, auth: r.request().headers().authorization });
      const j = (s, o) => r.fulfill({ status: s, contentType: 'application/json', body: JSON.stringify(o) });
      if (u.pathname === '/auth/v1/signup' && opts.signupErr) return j(opts.signupErr.code, opts.signupErr);
      if (u.pathname === '/rest/v1/rpc/report_issue_guest') return j(200, 77);
      if (u.pathname === '/auth/v1/signup' && opts.taken) return j(200, { id: 'fake', email: 'a@gmail.com', identities: [] });
      if (u.pathname === '/auth/v1/signup' && opts.signupSession) return j(200, { access_token: 'ATS', refresh_token: 'RTS', expires_in: 3600, user: { id: 'u1', email: 'a@gmail.com' } });
      if (u.pathname === '/auth/v1/signup') return j(200, { id: 'u1', email: 'a@gmail.com', identities: [{ id: 'i1' }] });
      if (u.pathname === '/auth/v1/token') return opts.tokenErr ? j(400, opts.tokenErr) : j(200, { access_token: 'AT', refresh_token: 'RT', expires_in: 3600, user: { id: 'u1', email: 'a@gmail.com' } });
      if (u.pathname === '/auth/v1/logout') return r.fulfill({ status: 204, body: '' });
      if (u.pathname === '/auth/v1/user') return opts.userBad ? j(401, { msg: 'bad jwt' }) : j(200, { id: 'u1', email: 'a@gmail.com' });
      if (u.pathname === '/rest/v1/profiles') return j(200, [{ id: 'u1', name: 'A', role: 'student', xp: 0, prefs: {}, frame: 'none' }]);
      if (u.pathname.startsWith('/rest/v1/rpc/')) return j(200, null);
      if (u.pathname.startsWith('/rest/v1/')) return j(200, []);
      if (u.pathname.startsWith('/functions/')) return j(200, {});
      return j(404, {});
    });
    return { ctx, p, errs, calls };
  }
  async function step(n, f) { await f(); pass++; console.log('  ok ' + n); }

  await step('signup with captcha + confirm screen', async () => {
    const { ctx, p, errs, calls } = await mk({ key: true });
    await p.goto('http://localhost:8765/index.html'); await p.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', '"ru"'); }); await p.reload();
    await p.waitForSelector('.auth__switch button'); await p.click('.auth__switch button');
    await p.waitForSelector('.cf-box'); await p.waitForFunction(() => document.querySelector('.cf-box').textContent === '[cf]');
    await p.fill('#f-name', 'A'); await p.fill('#f-email', 'A@Gmail.com'); await p.fill('#f-pass', 'secret1'); await p.fill('#f-invite', 'X123456');
    await p.waitForTimeout(100);
    await p.click('form button[type=submit]');
    await p.waitForSelector('.auth-mail');
    const txt = await p.locator('.auth-mail').innerText();
    assert(/Проверь почту/.test(txt) && /a@gmail\.com/.test(txt), txt);
    const c = calls.find(x => x.path.startsWith('/auth/v1/signup'));
    assert(/^TOK\d$/.test(c.body.gotrue_meta_security.captcha_token));
    assert(c.path.includes('redirect_to=http%3A%2F%2Flocalhost%3A8765%2Findex.html'), c.path);
    await p.screenshot({ path: require('os').tmpdir() + '/auth-mail.png' });
    assert.deepStrictEqual(errs, []); await ctx.close();
  });
  await step('login: email not confirmed -> message, captcha reset', async () => {
    const { ctx, p, errs, calls } = await mk({ key: true, tokenErr: { code: 400, error_code: 'email_not_confirmed', msg: 'Email not confirmed' } });
    await p.goto('http://localhost:8765/index.html'); await p.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', '"ru"'); }); await p.reload();
    await p.waitForFunction(() => (document.querySelector('.cf-box') || {}).textContent === '[cf]');
    await p.fill('#f-email', 'a@gmail.com'); await p.fill('#f-pass', 'secret1'); await p.waitForTimeout(100);
    await p.click('form button[type=submit]');
    await p.waitForFunction(() => document.querySelector('.form-error').style.display === 'block');
    const e = await p.locator('.form-error').innerText(); assert(/подтверди почту/.test(e), e);
    assert.strictEqual(await p.evaluate(() => window.__resets), 1);
    assert.strictEqual(calls.find(x => x.path.startsWith('/auth/v1/token')).body.gotrue_meta_security.captcha_token, 'TOK1');
    assert.deepStrictEqual(errs, []); await ctx.close();
  });
  await step('login: captcha failed message', async () => {
    const { ctx, p, errs } = await mk({ key: true, tokenErr: { code: 400, error_code: 'captcha_failed', msg: 'captcha protection: request disallowed (timeout-or-duplicate)' } });
    await p.goto('http://localhost:8765/index.html'); await p.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', '"ru"'); }); await p.reload();
    await p.waitForFunction(() => (document.querySelector('.cf-box') || {}).textContent === '[cf]');
    await p.fill('#f-email', 'a@gmail.com'); await p.fill('#f-pass', 'secret1'); await p.waitForTimeout(100);
    await p.click('form button[type=submit]');
    await p.waitForFunction(() => document.querySelector('.form-error').style.display === 'block');
    assert(/не робот/.test(await p.locator('.form-error').innerText()));
    await ctx.close();
  });
  await step('no key: no widget, login works, no captcha field', async () => {
    const { ctx, p, errs, calls } = await mk({ key: false });
    await p.goto('http://localhost:8765/index.html'); await p.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', '"ru"'); }); await p.reload();
    await p.waitForSelector('#f-email'); assert.strictEqual(await p.locator('.cf-box').count(), 0);
    await p.fill('#f-email', 'a@gmail.com'); await p.fill('#f-pass', 'secret1'); await p.click('form button[type=submit]');
    await p.waitForSelector('.side');
    const c = calls.find(x => x.path.startsWith('/auth/v1/token')); assert(!('gotrue_meta_security' in c.body));
    assert.deepStrictEqual(errs.filter(e => !/404/.test(e)), []); await ctx.close();
  });
  await step('link from email: confirmed, then sign in yourself (email filled in)', async () => {
    const { ctx, p, errs, calls } = await mk({ key: false });
    await p.goto('http://localhost:8765/index.html'); await p.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', '"ru"'); });
    await p.goto('http://localhost:8765/index.html#access_token=AT2&expires_at=9999999999&expires_in=3600&refresh_token=RT2&token_type=bearer&type=signup');
    await p.waitForSelector('#f-remember');
    assert.strictEqual(await p.evaluate(() => location.hash), '#/');
    await p.waitForSelector('.toast'); assert(/Почта подтверждена/.test(await p.locator('.toast').first().innerText()));
    assert.strictEqual(await p.inputValue('#f-email'), 'a@gmail.com');
    assert(!JSON.parse(await p.evaluate(() => localStorage.getItem('sb_session') || 'null')), 'no session kept');
    assert(calls.some(x => x.path === '/auth/v1/logout' && x.auth === 'Bearer AT2'), 'link session revoked');
    assert.deepStrictEqual(errs.filter(e => !/404/.test(e)), []); await ctx.close();
  });
  await step('signup does not sign in: login screen with note, server session revoked', async () => {
    const { ctx, p, errs, calls } = await mk({ key: false, signupSession: true });
    await p.goto('http://localhost:8765/index.html'); await p.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', '"ru"'); }); await p.reload();
    await p.click('.auth__switch button');
    await p.fill('#f-name', 'A'); await p.fill('#f-email', 'a@gmail.com'); await p.fill('#f-pass', 'secret1'); await p.fill('#f-invite', 'X123456');
    await p.click('form button[type=submit]');
    await p.waitForSelector('.form-ok');
    assert(/Аккаунт создан/.test(await p.locator('.form-ok').innerText()));
    assert.strictEqual(await p.inputValue('#f-email'), 'a@gmail.com');
    assert(!(await p.$('.side')));
    assert(calls.some(x => x.path === '/auth/v1/logout' && x.auth === 'Bearer ATS'));
    await p.fill('#f-pass', 'secret1'); await p.check('#f-remember'); await p.click('form button[type=submit]');
    await p.waitForSelector('.side');
    const pol = await p.evaluate(() => JSON.parse(localStorage.getItem('auth_pol')));
    assert.strictEqual(pol.r, true);
    await p.screenshot({ path: require('os').tmpdir() + '/auth-remember.png' });
    assert.deepStrictEqual(errs.filter(e => !/404/.test(e)), []); await ctx.close();
  });
  await step('remember off: 31 min away -> signed out with message; 29 min -> still in', async () => {
    const { ctx, p, calls } = await mk({ key: false });
    await p.goto('http://localhost:8765/index.html'); await p.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', '"ru"'); }); await p.reload();
    await p.fill('#f-email', 'a@gmail.com'); await p.fill('#f-pass', 'secret1'); await p.click('form button[type=submit]');
    await p.waitForSelector('.side');
    assert.strictEqual(await p.evaluate(() => JSON.parse(localStorage.getItem('auth_pol')).r), false);
    await p.evaluate(() => { var x = JSON.parse(localStorage.getItem('auth_pol')); x.seen = Date.now() - 29 * 60e3; localStorage.setItem('auth_pol', JSON.stringify(x)); });
    await p.reload(); await p.waitForSelector('.side');
    await p.evaluate(() => { var x = JSON.parse(localStorage.getItem('auth_pol')); x.seen = Date.now() - 31 * 60e3; localStorage.setItem('auth_pol', JSON.stringify(x)); });
    await p.reload(); await p.waitForSelector('#f-email'); await p.waitForSelector('.toast');
    assert(/автоматически вышел/.test(await p.locator('.toast').first().innerText()));
    assert(calls.filter(x => x.path === '/auth/v1/logout').length >= 1);
    await ctx.close();
  });
  await step('remember on: day 6 still in, after 7 days (minus 2 min) signed out, also while the tab is open', async () => {
    const { ctx, p } = await mk({ key: false });
    await p.goto('http://localhost:8765/index.html'); await p.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', '"ru"'); }); await p.reload();
    await p.fill('#f-email', 'a@gmail.com'); await p.fill('#f-pass', 'secret1'); await p.check('#f-remember'); await p.click('form button[type=submit]');
    await p.waitForSelector('.side');
    await p.evaluate(() => { var x = JSON.parse(localStorage.getItem('auth_pol')); x.at = Date.now() - 6 * 864e5; x.seen = Date.now() - 2 * 864e5; localStorage.setItem('auth_pol', JSON.stringify(x)); });
    await p.reload(); await p.waitForSelector('.side');
    // открытая вкладка: срок подходит, проверка при возврате на вкладку выкидывает
    await p.evaluate(() => { var x = JSON.parse(localStorage.getItem('auth_pol')); x.at = Date.now() - (7 * 864e5 - 60e3); localStorage.setItem('auth_pol', JSON.stringify(x)); document.dispatchEvent(new Event('visibilitychange')); });
    await p.waitForSelector('#f-email'); await p.waitForSelector('.toast');
    assert(/автоматически вышел/.test(await p.locator('.toast').first().innerText()));
    await ctx.close();
  });
  await step('signed in before this version: kept for a week from now', async () => {
    const { ctx, p } = await mk({ key: false });
    await p.goto('http://localhost:8765/index.html'); await p.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', '"ru"');
      localStorage.setItem('sb_session', JSON.stringify({ access_token: 'AT', refresh_token: 'RT', expires_at: 9999999999, user: { id: 'u1', email: 'a@gmail.com' } })); });
    await p.reload(); await p.waitForSelector('.side');
    const pol = await p.evaluate(() => JSON.parse(localStorage.getItem('auth_pol')));
    assert.strictEqual(pol.r, true); assert(Date.now() - pol.at < 60e3);
    await ctx.close();
  });
  await step('signup errors never say "wrong email or password"', async () => {
    for (const [err, re] of [[{ code: 400, error_code: 'validation_failed', msg: 'Something odd' }, /^Не получилось зарегистрироваться\. Проверь email и код приглашения$/],
                             [{ code: 429, error_code: 'over_email_send_rate_limit', msg: 'email rate limit exceeded' }, /Слишком много писем/],
                             [{ code: 500, error_code: 'unexpected_failure', msg: 'Database error saving new user' }, /Неверный код приглашения/]]) {
      const { ctx, p } = await mk({ key: false, signupErr: err });
      await p.goto('http://localhost:8765/index.html'); await p.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', '"ru"'); }); await p.reload();
      await p.click('.auth__switch button');
      await p.fill('#f-name', 'A'); await p.fill('#f-email', 'a@gmail.com'); await p.fill('#f-pass', 'secret1'); await p.fill('#f-invite', 'X123456');
      await p.click('form button[type=submit]');
      await p.waitForFunction(() => document.querySelector('.form-error').style.display === 'block');
      const e = (await p.evaluate(() => document.querySelector('.form-error').firstChild.textContent));
      assert(re.test(e), e); assert(!/Неверный email или пароль/.test(e), e);
      if (err.code === 400) {
        assert(!(await p.isVisible('.err-tip')), 'code hidden at first');
        await p.click('.form-error'); await p.waitForSelector('.err-tip', { state: 'visible' });
        assert.strictEqual(await p.locator('.err-tip code').innerText(), 'R-400 · validation_failed · Something odd');
        await p.click('.form-error'); assert(!(await p.isVisible('.err-tip')), 'tap again hides');
        await p.mouse.move(5, 5); await p.waitForTimeout(100); await p.hover('.form-error'); await p.waitForSelector('.err-tip', { state: 'visible' });
      }
      await ctx.close();
    }
  });
  await step('email already taken -> clear message, no confirm screen', async () => {
    const { ctx, p } = await mk({ key: false, taken: true });
    await p.goto('http://localhost:8765/index.html'); await p.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', '"ru"'); }); await p.reload();
    await p.click('.auth__switch button');
    await p.fill('#f-name', 'A'); await p.fill('#f-email', 'a@gmail.com'); await p.fill('#f-pass', 'secret1'); await p.fill('#f-invite', 'X123456');
    await p.click('form button[type=submit]');
    await p.waitForFunction(() => document.querySelector('.form-error').style.display === 'block');
    assert(/Аккаунт с этим email уже есть/.test(await p.locator('.form-error').innerText()));
    assert(!(await p.$('.auth-mail'))); await ctx.close();
  });
  await step('only @gmail.com / @mail.ru can sign up (no request sent otherwise)', async () => {
    const { ctx, p, calls } = await mk({ key: false });
    await p.goto('http://localhost:8765/index.html'); await p.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', '"ru"'); }); await p.reload();
    await p.click('.auth__switch button');
    assert(/Только @gmail.com или @mail.ru/.test(await p.locator('form').innerText()));
    for (const bad of ['a@yahoo.com', 'a@gmail.com.evil.io', 'a@mail.ru.com', 'agmail.com']) {
      await p.fill('#f-name', 'A'); await p.fill('#f-email', bad); await p.fill('#f-pass', 'secret1'); await p.fill('#f-invite', 'X123456');
      await p.click('form button[type=submit]');
      await p.waitForFunction(() => document.querySelector('.form-error').style.display === 'block');
      assert(/только с почтой @gmail.com или @mail.ru/.test(await p.locator('.form-error').innerText()), bad);
    }
    assert(!calls.some(x => x.path.startsWith('/auth/v1/signup')), 'nothing sent');
    await p.fill('#f-email', 'Someone@Mail.RU'); await p.click('form button[type=submit]');
    await p.waitForSelector('.auth-mail');
    await ctx.close();
  });
  await step('guest report from the sign-up screen: red guide, last error attached, sent without account', async () => {
    const { ctx, p, calls } = await mk({ key: false, signupErr: { code: 500, error_code: 'unexpected_failure', msg: 'Database error saving new user' } });
    await p.goto('http://localhost:8765/index.html'); await p.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', '"ru"'); }); await p.reload();
    await p.click('.auth__switch button');
    await p.fill('#f-name', 'A'); await p.fill('#f-email', 'a@gmail.com'); await p.fill('#f-pass', 'secret1'); await p.fill('#f-invite', 'WRONG1');
    await p.click('form button[type=submit]');
    await p.waitForFunction(() => document.querySelector('.form-error').style.display === 'block');
    await p.click('.auth-report');
    await p.waitForSelector('.rp-important');
    const txt = await p.locator('.modal').innerText();
    assert(/Важно!/.test(txt) && /Никогда не пиши сюда свой пароль/.test(txt), txt);
    assert(/R-500 · unexpected_failure · Database error saving new user/.test(await p.locator('.rp-attached').innerText()));
    assert.strictEqual(await p.inputValue('#rp-email'), 'a@gmail.com');
    await p.click('.modal .rte__area'); await p.keyboard.type('Не могу зарегистрироваться');
    await p.click('.modal .btn--primary');
    await p.waitForSelector('.toast');
    const c = calls.find(x => x.path === '/rest/v1/rpc/report_issue_guest');
    assert(c && c.body.p.email === 'a@gmail.com' && /R-500/.test(c.body.p.err) && c.body.p.where === 'register' && /Не могу/.test(c.body.p.text), JSON.stringify(c && c.body));
    assert(!c.body.p.password && !JSON.stringify(c.body).includes('secret1'), 'no password sent');
    await p.waitForTimeout(300);
    const f = calls.find(x => x.path === '/functions/v1/push'); assert(f && f.body.action === 'issue_guest' && f.body.id === 77);
    await p.screenshot({ path: require('os').tmpdir() + '/guest-report.png' });
    await ctx.close();
  });
  await step('expired link -> login page + message', async () => {
    const { ctx, p, errs } = await mk({ key: false });
    await p.goto('http://localhost:8765/index.html'); await p.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', '"ru"'); });
    await p.goto('http://localhost:8765/index.html#error=access_denied&error_code=otp_expired&error_description=Email+link+is+invalid+or+has+expired');
    await p.waitForSelector('#f-email'); await p.waitForSelector('.toast');
    assert(/не действует/.test(await p.locator('.toast').first().innerText()));
    assert.strictEqual(await p.evaluate(() => location.hash), '#/');
    await ctx.close();
  });
  console.log(pass + ' passed'); await b.close();
})().catch(e => { console.error(e); process.exit(1); });

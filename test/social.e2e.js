/* End-to-end checks for the social module in mock mode (Playwright).
   Needs a static server on :8765 from the site root:  python3 -m http.server 8765
   Run: node test/social.e2e.js [screenshotDir] */
'use strict';
const { chromium } = require('playwright');
const assert = require('assert');
const fs = require('fs');
const path = require('path');

const BASE = 'http://localhost:8765/index.html';
const SHOTS = process.argv[2] || path.join(__dirname, 'shots-social');
fs.mkdirSync(SHOTS, { recursive: true });

let failures = 0, passed = 0;
async function step(name, fn) {
  try { await fn(); passed++; console.log('  ok   ' + name); }
  catch (e) { failures++; console.log('  FAIL ' + name + '\n       ' + String(e && e.stack || e).split('\n').slice(0, 6).join('\n       ')); }
}
function watchErrors(page, list) {
  page.on('console', m => { if (m.type() === 'error') list.push('console: ' + m.text()); });
  page.on('pageerror', e => list.push('pageerror: ' + e.message));
}
const NAMES = { a: 'Alice 🦊', b: 'Борис Очень-Длинное-Имя Для Проверки Бегущей Строки', c: 'כרמן' };

async function register(page, key) {
  await page.evaluate(() => Store.auth.signOut());
  await page.waitForSelector('.auth__switch button');
  await page.click('.auth__switch button');
  await page.fill('#f-name', NAMES[key]); await page.fill('#f-email', key + '@x.y');
  await page.fill('#f-pass', 'secret1'); await page.fill('#f-invite', 'AAC2026');
  await page.click('form button[type=submit]');
  await page.waitForSelector('.form-ok');   // после регистрации — экран «Вход»
  await page.fill('#f-pass', 'secret1'); await page.click('form button[type=submit]');
  await page.waitForSelector('.side');
}
async function setSwitch(page, sel, on) {
  if ((await page.isChecked(sel)) !== on) await page.click(sel + ' + span');
  await page.waitForTimeout(150);
}
async function as(page, key, hash) {
  await closeModals(page);
  await page.evaluate(k => Store.auth.signIn({ email: k + '@x.y', password: 'secret1' }), key);
  await go(page, hash || '/people');
}
async function go(page, hash) {
  await page.evaluate(h => { if (location.hash === '#' + h) App.render(); else location.hash = '#' + h; }, hash);
  await page.waitForTimeout(350);
}
async function uid(page, key) { return page.evaluate(k => { const r = JSON.parse(localStorage.mock_users); return r[k + '@x.y'].id; }, key); }
async function sendErr(page, chatId, payload) {
  return page.evaluate(([c, p]) => Social.send(c, p).then(() => 'OK', e => e.code), [chatId, payload]);
}
async function bigPng(page) {
  const b64 = await page.evaluate(() => {
    const c = document.createElement('canvas'); c.width = 2400; c.height = 1600;
    const g = c.getContext('2d'); const gr = g.createLinearGradient(0, 0, 2400, 1600);
    gr.addColorStop(0, '#6656f5'); gr.addColorStop(1, '#12b5a6'); g.fillStyle = gr; g.fillRect(0, 0, 2400, 1600);
    g.fillStyle = '#fff'; g.font = 'bold 220px sans-serif'; g.fillText('AAC 📚', 500, 900);
    return c.toDataURL('image/png').split(',')[1];
  });
  return Buffer.from(b64, 'base64');
}
async function toastText(page) {
  await page.waitForSelector('.toast', { timeout: 3000 });
  return page.evaluate(() => Array.from(document.querySelectorAll('.toast')).map(x => x.textContent).join(' | '));
}
async function clearToasts(page) { await page.evaluate(() => { const b = document.getElementById('toasts'); if (b) b.innerHTML = ''; }); }
async function closeModals(page) {
  await page.evaluate(() => document.querySelectorAll('.modal-root').forEach(m => m.remove()));
  await page.evaluate(() => document.body.classList.remove('no-scroll'));
}

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 860 } });
  const page = await ctx.newPage();
  page.setDefaultTimeout(6000);
  const errs = []; watchErrors(page, errs);
  await page.goto(BASE);
  await page.evaluate(() => { localStorage.clear(); localStorage.setItem('lang', '"en"'); localStorage.setItem('theme', '"light"'); });
  await page.reload();
  let A, B, C, direct, group;

  console.log('social module (mock mode)');
  await step('register three demo accounts in one browser', async () => {
    await page.waitForSelector('.auth__switch button');
    await register(page, 'a'); await register(page, 'b'); await register(page, 'c');
    A = await uid(page, 'a'); B = await uid(page, 'b'); C = await uid(page, 'c');
    assert.ok(A && B && C);
    await as(page, 'a');
    assert.strictEqual(await page.locator('.navlink[data-path="/people"]').count(), 1);
    assert.strictEqual(await page.locator('.navlink[data-path="/chats"]').count(), 1);
    assert.strictEqual(await page.locator('.sc-demo__acc').count(), 3, 'demo switcher lists all accounts');
  });

  await step('people list: every user with level badge; A sends request to B and C', async () => {
    assert.strictEqual(await page.locator('.sc-row').count(), 3);
    assert.strictEqual(await page.locator('.sc-row .sc-lvl').count(), 3, 'level badge next to every nickname');
    await page.click(`.sc-row[data-uid="${B}"] [data-act=add]`);
    assert.ok(/Request sent/.test(await toastText(page)));
    await page.waitForSelector(`.sc-row[data-uid="${B}"].sc-row--outgoing`);
    await page.click(`.sc-row[data-uid="${C}"] .sc-row__main`);
    await page.click('.sc-sheet [data-act=add]');
    await page.waitForSelector(`.sc-row[data-uid="${C}"].sc-row--outgoing`);
  });

  await step('B sees the request (bell + People dot) and accepts', async () => {
    await clearToasts(page);
    await as(page, 'b');
    await page.evaluate(() => Social.refreshBadges());
    await page.waitForSelector('.bell.bell--has');
    await page.waitForSelector('.navlink[data-path="/people"].navlink--dot');
    await page.click('.bell');
    await page.waitForSelector('.notif-pop .sc-notif__item');
    assert.ok(/wants to be your friend/.test(await page.textContent('.notif-pop')));
    await page.click('.sc-view h1');   // close popover
    await page.waitForSelector('.sc-sec--req .sc-row');
    await page.click(`.sc-sec--req .sc-row[data-uid="${A}"] [data-act=accept]`);
    await page.waitForSelector(`.sc-row[data-uid="${A}"].sc-row--friend`);
    await as(page, 'c');
    await page.click(`.sc-row[data-uid="${A}"] [data-act=accept]`);
    await page.waitForSelector(`.sc-row[data-uid="${A}"].sc-row--friend`);
    // B and C become friends too (for the group)
    await page.click(`.sc-row[data-uid="${B}"] [data-act=add]`);
    await as(page, 'b');
    await page.click(`.sc-row[data-uid="${C}"] [data-act=accept]`);
    await page.waitForSelector(`.sc-row[data-uid="${C}"].sc-row--friend`);
  });

  await step('A opens direct chat with B, sends text (Enter) and a photo', async () => {
    await as(page, 'a');
    const n = await page.evaluate(() => Social.notifications().then(x => x.filter(i => i.kind === 'accepted').length));
    assert.strictEqual(n, 2, 'accepted notifications');
    await page.click(`.sc-row[data-uid="${B}"] [data-act=message]`);
    await page.waitForSelector('.sc-chat .sc-input');
    direct = await page.evaluate(() => location.hash.split('/').pop());
    await page.fill('.sc-input', 'Привет! שלום 👋 hello');
    await page.press('.sc-input', 'Enter');
    await page.waitForSelector('.sc-msg--out .sc-bub__text');
    assert.ok((await page.textContent('.sc-msg--out .sc-bub__text')).includes('שלום'));
    await page.setInputFiles('.sc-file-photo', { name: 'big.png', mimeType: 'image/png', buffer: await bigPng(page) });
    await page.waitForSelector('.sc-mpv img');
    await page.fill('.sc-mpvbox input', 'Конспект 📚');
    await page.click('[data-act=send-media]');
    await page.waitForSelector('.sc-photo img[src^="data:image/jpeg"]');
    const w = await page.evaluate(() => new Promise(r => { const i = document.querySelector('.sc-photo img'); if (i.complete) r(i.naturalWidth); else i.onload = () => r(i.naturalWidth); }));
    assert.ok(w <= 1280 && w > 1000, 'compressed to max 1280px, got ' + w);
    await page.screenshot({ path: path.join(SHOTS, 'chat-direct-a-1280.png') });
  });

  await step('B sees unread badge, opens chat, replies and reacts', async () => {
    await as(page, 'b', '/chats');
    await page.waitForSelector(`.sc-crow[data-cid="${direct}"] .sc-badge`);
    assert.strictEqual(await page.textContent(`.sc-crow[data-cid="${direct}"] .sc-badge`), '2');
    await page.evaluate(() => Social.refreshBadges());
    await page.waitForSelector('.navlink[data-path="/chats"].navlink--dot');
    await page.click(`.sc-crow[data-cid="${direct}"]`);
    await page.waitForSelector('.sc-msg--in .sc-photo img');
    await page.click('.sc-msg--in .sc-bub--k-text');
    await page.click('.sc-sheet [data-act=reply]');
    await page.fill('.sc-input', 'Получил 🙌');
    await page.click('[data-act=send]');
    await page.waitForSelector('.sc-msg--out .sc-bub__reply');
    await page.click('.sc-msg--in .sc-bub--k-text');
    await page.click('.sc-reactpick [data-emoji="👍"]');
    await page.waitForSelector('.sc-react.is-mine');
    await page.evaluate(() => Social.refreshBadges());
    await page.waitForFunction(() => !document.querySelector('.navlink[data-path="/chats"]').classList.contains('navlink--dot'));
  });

  await step('A gets B reply via polling; edits and deletes own message', async () => {
    await as(page, 'a', '/chat/' + direct);
    await page.waitForSelector('.sc-msg--in .sc-bub__reply');
    await page.waitForSelector('.sc-bub__tick.is-read');
    await page.click('.sc-msg--out .sc-bub--k-text');
    await page.click('.sc-sheet [data-act=edit]');
    await page.fill('.sc-input', 'Привет! (edited)');
    await page.press('.sc-input', 'Enter');
    await page.waitForFunction(() => /edited/.test(document.querySelector('.sc-msg--out .sc-bub__meta').textContent));
    await page.fill('.sc-input', 'oops');
    await page.press('.sc-input', 'Enter');
    await page.waitForFunction(() => Array.from(document.querySelectorAll('.sc-bub__text')).some(x => x.textContent === 'oops'));
    await page.locator('.sc-bub__text', { hasText: /^oops$/ }).click();
    await page.click('.sc-sheet [data-act=delete]');
    await page.waitForSelector('.sc-bub--k-deleted');
  });

  await step('chat does not flicker on polls; ✓✓ appears within ~3 s after the other side reads', async () => {
    await page.fill('.sc-input', 'tick-test');
    await page.press('.sc-input', 'Enter');
    await page.waitForFunction(() => Array.from(document.querySelectorAll('.sc-bub__text')).some(x => x.textContent === 'tick-test'));
    await page.waitForTimeout(2500);
    await page.evaluate(() => { window.__first = document.querySelector('.sc-msg'); window.__muts = 0;
      new MutationObserver(m => { window.__muts += m.length; }).observe(document.querySelector('.sc-chat'), { childList: true, subtree: true }); });
    await page.waitForTimeout(7000);   // several polls with nothing new
    const r = await page.evaluate(() => ({ same: document.querySelector('.sc-msg') === window.__first && window.__first.isConnected, muts: window.__muts }));
    assert.ok(r.same, 'message node was rebuilt');
    assert.strictEqual(r.muts, 0, 'DOM changed while nothing happened: ' + r.muts);
    // B reads on another device: bump B's last_read_at directly in the mock store
    await page.evaluate(([cid, b]) => { const k = Object.keys(localStorage).find(x => { try { const d = JSON.parse(localStorage[x]); return d && d.v === 1 && d.members; } catch (e) { return false; } });
      const d = JSON.parse(localStorage[k]); d.members[cid][b].last_read_at = new Date(Date.now() + 1000).toISOString(); localStorage[k] = JSON.stringify(d); }, [direct, B]);
    const t0 = Date.now();
    await page.waitForFunction(() => { const o = Array.from(document.querySelectorAll('.sc-msg--out')).pop(); return o && o.querySelector('.sc-bub__tick.is-read'); }, null, { timeout: 4000 });
    assert.ok(Date.now() - t0 < 3500, 'ticks took ' + (Date.now() - t0) + ' ms');
  });

  await step('group with 3 users: only admins can write', async () => {
    await go(page, '/chats');
    await page.click('[data-act=new-group]');
    await page.fill('[data-act=group-title]', 'Study 🧠 group');
    await page.click(`.sc-pick__item[data-uid="${B}"]`);
    await page.click(`.sc-pick__item[data-uid="${C}"]`);
    await page.click('[data-act=pick-ok]');
    await page.waitForSelector('.sc-chat .sc-sys');
    group = await page.evaluate(() => location.hash.split('/').pop());
    await page.click('[data-act=group-settings]');
    await page.click('.sc-gi__tabs [data-v=settings]');
    await setSwitch(page, '[data-act=set-only-admins]', true);
    await page.waitForFunction(() => /only admins/.test(document.querySelector('.sc-chat__sub').textContent));
    await closeModals(page);
    await page.fill('.sc-input', 'Admins only now');
    await page.press('.sc-input', 'Enter');
    await page.waitForSelector('.sc-msg--out');
    await as(page, 'b', '/chat/' + group);
    await page.waitForSelector('.sc-comp__notice:not([hidden])');
    assert.ok(/Only admins can write/.test(await page.textContent('.sc-comp__notice')));
    assert.strictEqual(await sendErr(page, group, { kind: 'text', body: 'let me in' }), 'sc_err_only_admins');
  });

  await step('banned word is rejected; permissions (links) enforced', async () => {
    await as(page, 'a', '/chat/' + group);
    await page.click('[data-act=group-settings]');
    await page.click('.sc-gi__tabs [data-v=settings]');
    await setSwitch(page, '[data-act=set-only-admins]', false);
    await page.fill('[data-act=set-words]', 'spoiler, קללה');
    await page.click('[data-act=set-words-save]');
    await page.waitForTimeout(200);
    await page.click('.sc-gi__tabs [data-v=perms]');
    await setSwitch(page, '[data-act=perm-links]', false);
    await page.waitForTimeout(200);
    await closeModals(page);
    await as(page, 'b', '/chat/' + group);
    await clearToasts(page);
    await page.fill('.sc-input', 'big SPOILER inside');
    await page.press('.sc-input', 'Enter');
    assert.ok(/banned/.test(await toastText(page)));
    assert.strictEqual(await page.locator('.sc-msg--out').count(), 0);
    assert.strictEqual(await sendErr(page, group, { kind: 'text', body: 'זו קללה' }), 'sc_err_banned_word');
    assert.strictEqual(await sendErr(page, group, { kind: 'text', body: 'see https://x.io' }), 'sc_err_no_links');
  });

  await step('slow mode: second message is blocked with countdown', async () => {
    await as(page, 'a', '/chat/' + group);
    await page.click('[data-act=group-settings]');
    await page.click('.sc-gi__tabs [data-v=settings]');
    await page.click('[data-act=set-slow] [data-v="30"]');
    await page.waitForTimeout(200);
    await closeModals(page);
    await as(page, 'b', '/chat/' + group);
    await page.fill('.sc-input', 'first');
    await page.press('.sc-input', 'Enter');
    await page.waitForSelector('.sc-msg--out');
    await page.waitForSelector('.sc-send.is-cool');
    assert.strictEqual(await sendErr(page, group, { kind: 'text', body: 'second' }), 'sc_err_slow');
    const ph = await page.getAttribute('.sc-input', 'placeholder');
    assert.ok(/Slow mode/.test(ph), ph);
    await page.screenshot({ path: path.join(SHOTS, 'chat-group-b-1280.png') });
  });

  await step('member rights: owner restricts and promotes; admin rights enforced', async () => {
    await as(page, 'a', '/chat/' + group);
    await page.click('[data-act=group-settings]');
    await page.click('.sc-gi__tabs [data-v=members]');
    await page.click(`.sc-gi__list [data-uid="${C}"]`);
    await page.click('.sc-sheet [data-act=restrict]');
    await page.click('[data-act=until-3600]');
    await page.waitForTimeout(200);
    await as(page, 'c', '/chat/' + group);
    assert.strictEqual(await sendErr(page, group, { kind: 'text', body: 'muted?' }), 'sc_err_restricted');
    await page.evaluate(([g, b]) => Social.memberAction(g, b, 'kick').catch(e => e.code), [group, B]).then(r => assert.strictEqual(r, 'sc_err_no_rights'));
    await as(page, 'a', '/chat/' + group);
    await page.evaluate(([g, c]) => Social.memberAction(g, c, 'unrestrict'), [group, C]);
    await page.evaluate(([g, b]) => Social.memberAction(g, b, 'promote', null, { ban: true }), [group, B]);
    await as(page, 'b', '/chat/' + group);
    const r = await page.evaluate(([g, c]) => Social.memberAction(g, c, 'promote', null, { info: true }).then(() => 'OK', e => e.code), [group, C]);
    assert.strictEqual(r, 'sc_err_no_rights', 'admin cannot grant a right he does not have');
  });

  await step('block / unblock flow and red names in “Removed & blocked”', async () => {
    await as(page, 'a');
    await page.click(`.sc-row[data-uid="${B}"] .sc-row__main`);
    await page.click('.sc-sheet [data-act=block]');
    await page.click('[data-act=confirm]');
    await page.waitForSelector(`.sc-sec--gone .sc-row[data-uid="${B}"] .sc-name--red`);
    const color = await page.evaluate(() => getComputedStyle(document.querySelector('.sc-sec--gone .sc-nick')).webkitTextFillColor);
    assert.ok(/rgb\(214, 69, 69\)/.test(color), 'red name ' + color);
    await as(page, 'b', '/chat/' + direct);
    await page.waitForSelector('.sc-comp__notice:not([hidden])');
    assert.strictEqual(await sendErr(page, direct, { kind: 'text', body: 'hey' }), 'sc_err_blocked');
    assert.strictEqual(await page.evaluate(a => Social.request(a).then(() => 'OK', e => e.code), A), 'sc_err_blocked');
    await as(page, 'a');
    await page.click(`.sc-sec--gone .sc-row[data-uid="${B}"] [data-act=unblock]`);
    await page.waitForSelector(`.sc-row[data-uid="${B}"].sc-row--friend`);
  });

  await step('remove friend → restore; pin keeps user on top', async () => {
    await page.click(`.sc-row[data-uid="${C}"] .sc-row__main`);
    await page.click('.sc-sheet [data-act=remove]');
    await page.click('[data-act=confirm]');
    await page.waitForSelector(`.sc-sec--gone .sc-row[data-uid="${C}"]`);
    await page.click(`.sc-sec--gone .sc-row[data-uid="${C}"] [data-act=restore]`);
    await page.waitForSelector(`.sc-row[data-uid="${C}"].sc-row--friend`);
    await page.click(`.sc-row[data-uid="${C}"] .sc-row__main`);
    await page.click('.sc-sheet [data-act=pin]');
    await page.waitForSelector(`.sc-sec:first-child .sc-row[data-uid="${C}"] .sc-row__pin`);
  });

  await step('public profile shows only public data', async () => {
    await go(page, '/user/' + B);
    await page.waitForSelector('.sc-pub__card .lvl');
    const txt = await page.textContent('.sc-pub__card');
    assert.ok(!/@x\.y/.test(txt), 'no email');
    assert.strictEqual(await page.locator('.sc-stat').count(), 3);
  });

  await step('chat style: pick bubble + background, others see the bubble', async () => {
    await go(page, '/chats');
    await page.click('[data-act=chat-style]');
    await page.click('.scp--bubble [data-id=aurora]');
    await page.click('[data-act=style-tab] [data-v=bg]');
    await page.click('.scp--bg [data-id=stars]');
    await page.click('[data-act=save-style]');
    await page.waitForTimeout(400);
    const prefs = await page.evaluate(() => Store.auth.current().prefs);
    assert.strictEqual(prefs.bubbleStyle, 'aurora'); assert.strictEqual(prefs.chatBg, 'stars');
    await as(page, 'b', '/chat/' + direct);
    await page.waitForSelector('.sc-msg--in .sc-bub--aurora');
  });

  await step('nickname style picker component', async () => {
    const r = await page.evaluate(() => {
      let picked = null;
      const host = Social.nickStylePicker({ current: 'plain', level: 12, onPick: id => { picked = id; } });
      document.body.appendChild(host);
      host.querySelector('[data-id=royal]').click();
      host.querySelector('[data-id=celestial]').click();   // locked at level 12
      const out = { picked, items: host.querySelectorAll('.scp__item').length, locked: host.querySelectorAll('.is-locked').length };
      host.remove(); return out;
    });
    assert.deepStrictEqual(r, { picked: 'royal', items: 20, locked: 12 });
  });

  await step('support thread: any user → admin, no friendship needed', async () => {
    await as(page, 'c');
    const res = await page.evaluate(() => Social.sendSupport({ html: '<b>Button</b> broken<br>on lessons', images: [] }));
    assert.strictEqual(res.sent, 1);
    await as(page, 'a', '/chats');
    await page.waitForSelector(`.sc-crow[data-cid="${res.chatId}"] .sc-badge`);
    assert.ok(/Support/.test(await page.textContent(`.sc-crow[data-cid="${res.chatId}"]`)));
  });

  await step('no console errors during the flow', async () => { assert.deepStrictEqual(errs, []); });
  const SNAP = await page.evaluate(() => { const o = {}; Object.keys(localStorage).forEach(k => { o[k] = localStorage.getItem(k); }); return o; });
  await ctx.close();

  /* ---------- languages × themes × widths, marquee, overflow ---------- */
  for (const lang of ['he', 'ru', 'en']) for (const theme of ['light', 'dark']) for (const width of [360, 1280]) {
    await step(`render ${lang}/${theme}/${width}`, async () => {
      const c = await browser.newContext({ viewport: { width, height: 800 }, hasTouch: width < 500, isMobile: width < 500 });
      const p = await c.newPage(); const e2 = []; watchErrors(p, e2);
      p.setDefaultTimeout(6000);
      await p.goto(BASE);
      await p.evaluate(([l, th, data]) => {
        Object.keys(data).forEach(k => localStorage.setItem(k, data[k]));
        localStorage.setItem('lang', JSON.stringify(l)); localStorage.setItem('theme', JSON.stringify(th));
      }, [lang, theme, SNAP]);
      await p.reload();
      await p.evaluate(() => Store.auth.signIn({ email: 'a@x.y', password: 'secret1' }));
      for (const [route, sel] of [['/people', '.sc-row'], ['/chats', '.sc-crow'], ['/chat/' + group, '.sc-msg'], ['/user/' + B, '.sc-stat']]) {
        await p.evaluate(h => { location.hash = '#' + h; }, route);
        await p.waitForSelector(sel);
        await p.waitForTimeout(450);
        assert.strictEqual(await p.evaluate(() => document.documentElement.dir), lang === 'he' ? 'rtl' : 'ltr');
        const overflow = await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
        assert.ok(overflow <= 0, route + ' horizontal overflow ' + overflow);
        if (route === '/people') {
          const marq = await p.locator(`.sc-row[data-uid="${B}"] .sc-name.is-marquee`).count();
          if (width === 360) assert.strictEqual(marq, 1, 'long name scrolls at 360px');
          assert.strictEqual(await p.locator(`.sc-row[data-uid="${A}"] .sc-name.is-marquee`).count(), 0, 'short name does not scroll');
        }
        const tag = route.split('/')[1];
        await p.screenshot({ path: path.join(SHOTS, `${tag}-${lang}-${theme}-${width}.png`) });
      }
      // reduced motion: no marquee
      await p.evaluate(() => { document.documentElement.setAttribute('data-motion', 'reduce'); location.hash = '#/people'; });
      await p.waitForSelector('.sc-row'); await p.waitForTimeout(400);
      assert.strictEqual(await p.locator('.sc-name.is-marquee').count(), 0, 'reduced motion → no marquee');
      assert.deepStrictEqual(e2, []);
      await c.close();
    });
  }

  console.log('\n' + passed + ' passed, ' + failures + ' failed');
  await browser.close();
  process.exit(failures ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });

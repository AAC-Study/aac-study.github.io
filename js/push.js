/* =====================================================================
   Push — пуш-уведомления.
   Работает только по https (на GitHub Pages), не из файла на компьютере.
   iPhone/iPad: только iOS 16.4+ и только если сайт добавлен на экран «Домой».
   С настоящей базой (Supabase) уведомления приходят, даже когда сайт закрыт.
   В пробной версии (без базы) — только пока вкладка открыта.
   ===================================================================== */
(function () {
  'use strict';
  var el = U.el, t = function (k, p) { return I18N.t(k, p); };

  I18N.add({
    he: { push_topics: 'שיעורים חדשים לפי מקצוע', push_topics_hint: 'כשמתפרסם שיעור חדש — תגיע התראה. כבו מקצועות שלא מעניינים אתכם.', push_title: 'התראות', push_switch: 'התראות פוש', push_switch_hint: 'יגיעו גם כשהאתר סגור. בכל מכשיר מפעילים פעם אחת.',
      push_test: 'בדיקת התראה', push_test_hint: 'לוחצים, סוגרים את האתר, וההתראה מגיעה בעוד 10 שניות.', push_now: 'עכשיו', push_in10: 'בעוד 10 שנ׳',
      push_goal: 'מטרת בדיקה: ללחוץ על 3 כפתורים', push_goal_hint: 'כשכל ה-3 דולקים, תגיע התראה כמו על הישג אמיתי.',
      push_sent: 'נשלח. אפשר לסגור את האתר', push_nosub: 'השרת לא מצא את המכשיר הזה. כבו את ההתראות והפעילו שוב.', push_sent_local: 'ההתראה תופיע בעוד רגע', push_on: 'התראות הופעלו', push_off: 'התראות כבויות',
      push_need_https: 'התראות יעבדו באתר האמיתי (GitHub Pages). כאן, בגרסת הניסיון או מקובץ, הן לא זמינות.', push_ios_home: 'באייפון: שתפו ← «הוספה למסך הבית», ופתחו את האתר מהסמל.',
      push_old: 'הדפדפן הזה לא תומך בהתראות. נסו Chrome, Edge, Firefox או Safari חדש.', push_denied: 'ההתראות חסומות בדפדפן. לחצו על המנעול ליד הכתובת ← התראות ← לאפשר.',
      push_fail: 'לא הצלחנו להפעיל התראות', push_demo_note: 'גרסת ניסיון: ההתראה מגיעה רק כשהאתר פתוח. עם הבסיס האמיתי היא תגיע גם כשהאתר סגור.',
      push_offer_title: 'להפעיל התראות?', push_offer_text: 'נודיע על תשובות, הישגים ושיעורים חדשים. אפשר לכבות בהגדרות.', push_offer_yes: 'להפעיל', push_offer_later: 'לא עכשיו', push_offer_never: 'לא לשאול שוב',
      push_goal_done: 'המטרה הושגה!', push_site_only: 'רק באתר האמיתי', push_blocked_chip: 'חסום בדפדפן' },
    ru: { push_topics: 'Новые уроки по предметам', push_topics_hint: 'Когда выходит новый урок, придёт уведомление. Выключи предметы, которые не нужны.', push_title: 'Уведомления', push_switch: 'Пуш-уведомления', push_switch_hint: 'Приходят, даже когда сайт закрыт. На каждом устройстве включается один раз.',
      push_test: 'Проверить уведомление', push_test_hint: 'Нажми, закрой сайт, и через 10 секунд придёт уведомление.', push_now: 'Сейчас', push_in10: 'Через 10 сек',
      push_goal: 'Тестовая цель: нажми 3 кнопки', push_goal_hint: 'Когда загорятся все 3, придёт уведомление, как за настоящее достижение.',
      push_sent: 'Отправлено. Можно закрыть сайт', push_nosub: 'Сервер не нашёл это устройство. Выключи уведомления и включи снова.', push_sent_local: 'Уведомление появится через пару секунд', push_on: 'Уведомления включены', push_off: 'Уведомления выключены',
      push_need_https: 'Уведомления заработают на настоящем сайте (GitHub Pages). В пробной ссылке и из файла на компьютере их нет.', push_ios_home: 'На iPhone: «Поделиться» → «На экран Домой», и открыть сайт со значка.',
      push_old: 'Этот браузер не умеет уведомления. Попробуй Chrome, Edge, Firefox или новый Safari.', push_denied: 'Уведомления запрещены в браузере. Нажми на замок у адреса → Уведомления → Разрешить.',
      push_fail: 'Не удалось включить уведомления', push_demo_note: 'Пробная версия: уведомление приходит, только пока сайт открыт. С настоящей базой придёт и при закрытом сайте.',
      push_offer_title: 'Включить уведомления?', push_offer_text: 'Сообщим об ответах, достижениях и новых уроках. Выключить можно в настройках.', push_offer_yes: 'Включить', push_offer_later: 'Не сейчас', push_offer_never: 'Больше не спрашивать',
      push_goal_done: 'Цель выполнена!', push_site_only: 'Только на настоящем сайте', push_blocked_chip: 'Запрещено в браузере' },
    en: { push_topics: 'New lessons by subject', push_topics_hint: 'You get a notification when a new lesson is posted. Turn off subjects you do not need.', push_title: 'Notifications', push_switch: 'Push notifications', push_switch_hint: 'Arrive even when the site is closed. Turn on once per device.',
      push_test: 'Test notification', push_test_hint: 'Tap, close the site, and a notification arrives in 10 seconds.', push_now: 'Now', push_in10: 'In 10 s',
      push_goal: 'Test goal: press 3 buttons', push_goal_hint: 'When all 3 light up, you get a notification like a real achievement.',
      push_sent: 'Sent. You can close the site', push_nosub: 'The server could not find this device. Turn notifications off and on again.', push_sent_local: 'The notification will appear in a moment', push_on: 'Notifications on', push_off: 'Notifications off',
      push_need_https: 'Notifications will work on the real site (GitHub Pages). They are not available in this demo link or from a file.', push_ios_home: 'On iPhone: Share → “Add to Home Screen”, then open the site from the icon.',
      push_old: 'This browser does not support notifications. Try Chrome, Edge, Firefox or a recent Safari.', push_denied: 'Notifications are blocked. Click the lock next to the address → Notifications → Allow.',
      push_fail: 'Could not turn on notifications', push_demo_note: 'Demo: the notification only arrives while the site is open. With the real database it arrives even when closed.',
      push_offer_title: 'Turn on notifications?', push_offer_text: 'We will tell you about answers, achievements and new lessons. You can turn them off in settings.', push_offer_yes: 'Turn on', push_offer_later: 'Not now', push_offer_never: 'Don’t ask again',
      push_goal_done: 'Goal reached!', push_site_only: 'Live site only', push_blocked_chip: 'Blocked in browser' }
  });

  var LOCAL_TEXT = {
    test: { he: ['בדיקה 🔔', 'התראות עובדות במכשיר הזה.'], ru: ['Проверка 🔔', 'Уведомления на этом устройстве работают.'], en: ['Test 🔔', 'Notifications work on this device.'] },
    goal: { he: ['המטרה הושגה! 🎯', 'לחצת על 3 הכפתורים.'], ru: ['Цель выполнена! 🎯', 'Все 3 кнопки нажаты.'], en: ['Goal reached! 🎯', 'All 3 buttons pressed.'] }
  };

  var ua = navigator.userAgent || '';
  var isIOS = /iP(hone|ad|od)/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var standalone = !!((window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true);
  function server() { return Store.mode === 'supabase' && !!Store.sb; }

  /* почему нельзя (код текста) или null */
  function reason() {
    var framed = false; try { framed = window.self !== window.top; } catch (e) { framed = true; }
    if (location.protocol === 'file:' || !window.isSecureContext || framed) return 'push_need_https';
    if (isIOS && !standalone) return 'push_ios_home';
    if (!('serviceWorker' in navigator) || !('Notification' in window) || (server() && !('PushManager' in window))) return 'push_old';
    if (Notification.permission === 'denied') return 'push_denied';
    return null;
  }

  var regP = null;
  function reg() {
    if (!regP) regP = navigator.serviceWorker.register('sw.js').then(function () { return navigator.serviceWorker.ready; });
    return regP;
  }
  function fn(body) { return Store.sb.api('POST', '/functions/v1/push', body); }
  function b64ToU8(s) {
    var pad = '='.repeat((4 - s.length % 4) % 4), b = atob((s + pad).replace(/-/g, '+').replace(/_/g, '/'));
    var out = new Uint8Array(b.length); for (var i = 0; i < b.length; i++) out[i] = b.charCodeAt(i); return out;
  }
  function askPermission() {
    return new Promise(function (resolve) {
      var p = Notification.requestPermission(function (r) { resolve(r); });   // старый Safari: через callback
      if (p && p.then) p.then(resolve);
    });
  }
  function mySub() {
    return reg().then(function (r) { return r.pushManager ? r.pushManager.getSubscription() : null; });
  }

  var warmAt = 0;
  /* подписка этого устройства (если её нет — создаём) + запись на сервер для текущего человека и языка */
  function subscribeAndSave(registration) {
    var keyP = U.storage.get('push_vapid', '') ? Promise.resolve(U.storage.get('push_vapid', '')) :
      fn({ action: 'key' }).then(function (x) { U.storage.set('push_vapid', x.key); return x.key; });
    var lang = I18N.lang;
    return keyP.then(function (key) {
      return registration.pushManager.getSubscription().then(function (s) {
        return s || registration.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64ToU8(key) });
      });
    }).then(function (sub) {
      return fn({ action: 'save', sub: sub.toJSON(), lang: lang, ua: ua });
    }).then(function () { synced = (Store.auth.current() || {}).id + '|' + lang; });
  }
  var synced = null;
  var Push = {
    reason: reason,
    /* включено ли на этом устройстве */
    isOn: function () {
      if (reason() || Notification.permission !== 'granted') return Promise.resolve(false);
      if (U.storage.get('push_on', null) === false) return Promise.resolve(false);   // выключил сам кнопкой
      if (!server()) return Promise.resolve(true);
      return mySub().then(function (s) { return !!s; }, function () { return false; });
    },
    /* вызывать только из нажатия кнопки (так требуют браузеры) */
    enable: function () {
      var r = reason();
      if (r) return Promise.reject(new Error(r));
      return askPermission().then(function (perm) {
        if (perm !== 'granted') throw new Error(perm === 'denied' ? 'push_denied' : 'push_fail');
        return reg();
      }).then(function (registration) {
        if (!server()) return null;
        return subscribeAndSave(registration);
      }).then(function () { U.storage.set('push_on', true); U.storage.set('push_offer', 'done'); });
    },
    disable: function () {
      U.storage.set('push_on', false);
      if (!server() || reason()) return Promise.resolve();
      return mySub().then(function (s) {
        if (!s) return null;
        var ep = s.endpoint;
        return s.unsubscribe().then(function () { return fn({ action: 'remove', endpoint: ep }); });
      }).catch(function () { /* уже отписано */ });
    },
    /* уведомление прямо из страницы (пробная версия) */
    local: function (kind) {
      var tx = LOCAL_TEXT[kind][I18N.lang] || LOCAL_TEXT[kind].he;
      return reg().then(function (r) {
        return r.showNotification(tx[0], { body: tx[1], icon: 'img/icon-192.png', badge: 'img/badge-96.png', tag: kind, silent: false, vibrate: [180, 80, 180] });
      });
    },
    /* kind: 'test' | 'goal'; delay в секундах */
    send: function (kind, delay) {
      if (!server()) {
        return new Promise(function (resolve) { setTimeout(function () { Push.local(kind).then(resolve, resolve); }, (delay || 1) * 1000); });
      }
      return mySub().then(function (s) {
        return fn({ action: kind, delay: delay || 0, endpoint: s ? s.endpoint : '' });
      });
    },
    /* подсказка серверу: «я сделал действие — разошли пуш» (сервер сам проверяет, что это правда) */
    hint: function (body) {
      if (!server() || !Store.auth.current()) return;
      fn(body).catch(function () { /* действие уже сохранено, пуш не обязателен */ });
    },
    /* человек начал печатать — заранее «будим» функцию, чтобы пуш ушёл сразу после отправки (не чаще раза в минуту) */
    warm: function () {
      if (!server() || !Store.auth.current() || Date.now() - warmAt < 60e3) return;
      warmAt = Date.now();
      fn({ action: 'warm' }).catch(function () {});
    },
    /* админ: разослать «новый урок» тем, у кого включён этот предмет */
    announceLesson: function (lesson) {
      if (!server()) return Promise.resolve({ sent: 0 });
      var sj = (window.SUBJECTS || []).filter(function (x) { return x.id === lesson.subject; })[0];
      return fn({ action: 'lesson', id: lesson.id, subject: lesson.subject, title: lesson.title, subjectName: sj ? sj.name : null });
    },
    notifyAdmin: function (issueId) {
      if (!server() || !issueId) return;
      fn({ action: 'issue', id: issueId }).catch(function () { /* сообщение уже сохранено, пуш не обязателен */ });
    }
  };
  /* Уведомления не должны выключаться сами (переустановка приложения, вход в аккаунт, обновление сайта, смена языка).
     Если разрешение уже дано и человек сам не выключил их кнопкой — тихо включаем обратно и сообщаем серверу,
     на каком языке присылать. Раз на человека и язык за открытие сайта. */
  function syncLang() {
    if (!server() || reason() || Notification.permission !== 'granted') return;
    var me = Store.auth.current();
    if (!me || U.storage.get('push_on', null) === false) return;
    var key = me.id + '|' + I18N.lang;
    if (synced === key) return;
    synced = key;
    reg().then(subscribeAndSave).then(function () { U.storage.set('push_on', true); })
      .catch(function () { synced = null; /* попробуем в следующий раз */ });
  }
  document.addEventListener('langchange', syncLang);
  document.addEventListener('userchange', syncLang);
  if (Store.ready && Store.ready.then) Store.ready.then(syncLang, function () {});
  /* при каждом открытии сайта проверяем, нет ли новой версии «обработчика уведомлений» (sw.js) —
     иначе телефон может ещё долго показывать уведомления по-старому */
  if ('serviceWorker' in navigator && navigator.serviceWorker.getRegistration) {
    navigator.serviceWorker.getRegistration().then(function (r) { if (r) r.update().catch(function () {}); }, function () {});
  }
  /* открыл чат — убираем его уведомления с телефона/компьютера */
  Push.clearChat = function (chatId) {
    if (!chatId || !('serviceWorker' in navigator) || !navigator.serviceWorker.getRegistration) return;
    navigator.serviceWorker.getRegistration().then(function (r) {
      if (!r || !r.getNotifications) return null;
      return r.getNotifications().then(function (list) {
        list.forEach(function (n) { if ((n.data && n.data.chat === chatId) || n.tag === 'chat-' + chatId) n.close(); });
      });
    }).catch(function () {});
  };
  /* версия обработчика уведомлений на этом устройстве (для проверки, что обновление дошло) */
  Push.swVersion = function () {
    return new Promise(function (resolve) {
      if (!('serviceWorker' in navigator) || !navigator.serviceWorker.controller || !window.MessageChannel) return resolve('');
      var ch = new MessageChannel(), done = false;
      ch.port1.onmessage = function (e) { done = true; resolve(String(e.data || '')); };
      setTimeout(function () { if (!done) resolve(''); }, 1500);
      navigator.serviceWorker.controller.postMessage({ type: 'version' }, [ch.port2]);
    });
  };
  Push.syncLang = syncLang;

  /* пришёл пуш, а сайт открыт: сразу обновляем колокольчик, чаты и список */
  if ('serviceWorker' in navigator && navigator.serviceWorker.addEventListener) {
    navigator.serviceWorker.addEventListener('message', function (e) {
      if (!e.data || e.data.type !== 'push') return;
      if (window.Social && Social.refreshBadges) Social.refreshBadges();
      try { document.dispatchEvent(new CustomEvent('socialchange', { detail: 'push' })); } catch (err) { /* */ }
    });
  }

  window.Push = Push;

  /* ---------- Предложение: не чаще раза в день, в случайный момент визита ---------- */
  var offerTimer = null;
  function today() { var d = new Date(); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); }
  function maybeOffer() {
    if (offerTimer || document.querySelector('.push-offer')) return;
    if (!Store.auth.current() || reason() || Notification.permission !== 'default') return;
    var st = U.storage.get('push_offer', '');
    if (st === 'never' || st === 'done' || U.storage.get('push_offer_day', '') === today()) return;
    var delay = 15000 + Math.floor(Math.random() * 75000);   // через 15–90 секунд после входа
    offerTimer = setTimeout(function () {
      offerTimer = null;
      if (!Store.auth.current() || document.querySelector('.modal')) return;
      U.storage.set('push_offer_day', today());
      var box;
      function close() { box.classList.add('is-out'); setTimeout(function () { if (box.parentNode) box.parentNode.removeChild(box); }, 300); }
      box = el('div', { class: 'push-offer', role: 'dialog', 'aria-label': t('push_offer_title') }, [
        el('span', { class: 'push-offer__ic', html: Icons.get('bellRing') }),
        el('div', { class: 'push-offer__text' }, [el('b', null, t('push_offer_title')), el('div', { class: 'muted' }, t('push_offer_text'))]),
        el('div', { class: 'push-offer__btns' }, [
          el('button', { type: 'button', class: 'btn btn--primary', onclick: function () {
            close();
            Push.enable().then(function () { U.toast(t('push_on')); }, function (e) { U.toast(t(e && /^push_/.test(e.message) ? e.message : 'push_fail'), 'err'); });
          } }, t('push_offer_yes')),
          el('button', { type: 'button', class: 'btn btn--ghost', onclick: close }, t('push_offer_later')),
          el('button', { type: 'button', class: 'push-offer__never', onclick: function () { U.storage.set('push_offer', 'never'); close(); } }, t('push_offer_never'))
        ])
      ]);
      document.body.appendChild(box);
    }, delay);
  }
  Push.maybeOffer = maybeOffer;

  /* ---------- Блок в настройках ---------- */
  Push.settingsCard = function (row, sw) {
    var r = reason();
    var card = el('div', { class: 'card' });
    var swEl = sw(false, function (on) {
      (on ? Push.enable() : Push.disable()).then(function () {
        U.toast(t(on ? 'push_on' : 'push_off')); App.render();
      }, function (e) {
        U.toast(t(e && /^push_/.test(e.message) ? e.message : 'push_fail'), 'err'); App.render();
      });
    });
    var input = swEl.querySelector('input');
    if (r) input.disabled = true;
    swEl.classList.add('push-sw');
    var ctl = r ? el('span', { class: 'chip push-lock', html: Icons.get('lock') + '<span>' + U.esc(t(r === 'push_denied' ? 'push_blocked_chip' : 'push_site_only')) + '</span>' }) : swEl;
    card.appendChild(row('bell', t('push_switch'), r ? t(r) : t('push_switch_hint'), ctl));
    if (r) card.classList.add('push-card--off');
    Push.isOn().then(function (on) { input.checked = on; });

    var btnNow = el('button', { type: 'button', class: 'btn', disabled: !!r }, t('push_now'));
    var btnLater = el('button', { type: 'button', class: 'btn btn--primary', disabled: !!r, html: Icons.get('bellRing') + '<span>' + U.esc(t('push_in10')) + '</span>' });
    function test(delay, b) {
      Push.isOn().then(function (on) {
        return on ? null : Push.enable();
      }).then(function () {
        b.disabled = true;
        U.toast(t(Store.mode === 'supabase' ? 'push_sent' : 'push_sent_local'));
        return Push.send('test', delay);
      }).then(function (res) {
        b.disabled = false;
        if (res && res.sent === 0) U.toast(t('push_nosub'), 'err');
      }, function (e) {
        b.disabled = false; U.toast(t(e && /^push_/.test(e.message) ? e.message : 'push_fail'), 'err');
      });
    }
    btnNow.addEventListener('click', function () { test(1, btnNow); });
    btnLater.addEventListener('click', function () { test(10, btnLater); });
    card.appendChild(row('bellRing', t('push_test'), t('push_test_hint'), el('div', { class: 'push-test' }, [btnNow, btnLater])));

    /* тестовая цель: три кнопки */
    var pressed = {};
    var goalBtns = [1, 2, 3].map(function (n) {
      return el('button', { type: 'button', class: 'goal-btn', 'aria-pressed': 'false', disabled: !!r, onclick: function () {
        pressed[n] = !pressed[n];
        this.setAttribute('aria-pressed', pressed[n] ? 'true' : 'false');
        if (pressed[1] && pressed[2] && pressed[3]) {
          U.toast(t('push_goal_done'), 'level');
          Push.isOn().then(function (on) { return on ? null : Push.enable(); })
            .then(function () { return Push.send('goal', 1); })
            .catch(function (e) { U.toast(t(e && /^push_/.test(e.message) ? e.message : 'push_fail'), 'err'); });
          setTimeout(function () { pressed = {}; goalBtns.forEach(function (b) { b.setAttribute('aria-pressed', 'false'); }); }, 1200);
        }
      } }, String(n));
    });
    card.appendChild(row('star', t('push_goal'), t('push_goal_hint'), el('div', { class: 'goal-btns' }, goalBtns)));
    if (Store.mode === 'mock' && !r) card.appendChild(el('p', { class: 'muted push-note' }, t('push_demo_note')));
    /* уведомления о новых уроках по предметам (по умолчанию все включены) */
    var me = Store.auth.current();
    if (me && window.SUBJECTS && window.SUBJECTS.length) {
      var topics = (me.prefs && me.prefs.pushTopics) || {};
      var tl = el('div', { class: 'push-topics' });
      window.SUBJECTS.forEach(function (sj) {
        var on = topics[sj.id] !== false;
        var i = el('input', { type: 'checkbox', 'data-subject': sj.id }); i.checked = on;   // настройка аккаунта — работает на всех устройствах
        i.addEventListener('change', function () {
          var cur = Store.auth.current(); if (!cur) return;
          var p = JSON.parse(JSON.stringify(cur.prefs || {})); p.pushTopics = p.pushTopics || {};
          p.pushTopics[sj.id] = i.checked;
          Store.profile.update({ prefs: p }).catch(function () { i.checked = !i.checked; U.toast(t('push_fail'), 'err'); });
        });
        tl.appendChild(el('label', { class: 'push-topic' }, [el('span', { class: 'push-topic__ic', style: '--h:' + sj.hue, html: Icons.get(sj.icon) }),
          el('span', { class: 'push-topic__name' }, sj.name[I18N.lang] || sj.name.he), el('span', { class: 'switch' }, [i, el('span')])]));
      });
      card.appendChild(row('book', t('push_topics'), t('push_topics_hint'), null));
      card.appendChild(tl);
    }
    var ver = el('p', { class: 'muted push-note push-ver' });
    card.appendChild(ver);
    Push.swVersion().then(function (v) { if (v) ver.textContent = 'sw ' + v; });
    return card;
  };

  /* показать предложение после входа */
  document.addEventListener('DOMContentLoaded', function () {
    if (Store.ready && Store.ready.then) Store.ready.then(function () { setTimeout(maybeOffer, 0); }, function () {});
  });
  window.addEventListener('hashchange', function () { maybeOffer(); });
})();

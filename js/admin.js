/* Админка: код приглашения и бан участников.
   Права проверяет база (admin_invite_get / admin_invite_set / admin_ban — только для админа).
   В пробном режиме всё хранится в этом браузере. */
(function () {
  'use strict';
  var el = U.el;
  I18N.add({
    he: { adm_head: 'ניהול', adm_lead: 'קוד הזמנה, משתתפים ודיווחים על בעיות.', adm_invite: 'קוד הזמנה',
      adm_invite_hint: 'בלי הקוד הזה אי אפשר להירשם. אם הקוד דלף — שנו אותו. מי שכבר רשום לא ייפגע.',
      adm_invite_save: 'שמירה', adm_invite_saved: 'הקוד החדש נשמר', adm_invite_bad: 'הקוד צריך 6–64 תווים',
      adm_people: 'משתתפים', adm_people_hint: 'חסימה: האדם לא יוכל להיכנס, לכתוב או לקבל התראות. אפשר לבטל בכל רגע.',
      adm_ban: 'לחסום', adm_unban: 'לבטל חסימה', adm_banned: 'חסום', adm_ban_sure: 'לחסום את {name}?', adm_you: 'את/ה',
      adm_admin: 'מנהל', adm_issues: 'דיווחים על בעיות', adm_ban_done: '{name} נחסם/ה', adm_unban_done: 'החסימה של {name} בוטלה',
      adm_announce: 'התראה על שיעור חדש', adm_announce_hint: 'אחרי שהשיעור עלה לאתר: בחרו אותו ושלחו. תגיע רק למי שהמקצוע פתוח אצלו.', adm_announce_btn: 'לשלוח', adm_announce_done: 'נשלח: {n}', adm_announce_again: 'על השיעור הזה כבר נשלחה התראה', adm_auto_done: 'נשלחה התראה על שיעור חדש: {title} ({n})', adm_auto_fail: 'לא הצלחתי לשלוח התראה על: {title}. אפשר לשלוח ידנית בניהול.', nav_admin: 'ניהול', err_banned: 'החשבון נחסם על ידי מנהל האתר', sc_err_banned: 'החשבון נחסם על ידי מנהל האתר' },
    ru: { adm_head: 'Админка', adm_lead: 'Код приглашения, участники и сообщения о проблемах.', adm_invite: 'Код приглашения',
      adm_invite_hint: 'Без этого кода нельзя зарегистрироваться. Если код утёк — смени его. Тех, кто уже зарегистрирован, это не затронет.',
      adm_invite_save: 'Сохранить', adm_invite_saved: 'Новый код сохранён', adm_invite_bad: 'Код должен быть от 6 до 64 символов',
      adm_people: 'Участники', adm_people_hint: 'Бан: человек не сможет войти, писать и получать уведомления. Снять бан можно в любой момент.',
      adm_ban: 'Забанить', adm_unban: 'Снять бан', adm_banned: 'Забанен', adm_ban_sure: 'Забанить {name}?', adm_you: 'Ты',
      adm_admin: 'Админ', adm_issues: 'Сообщения о проблемах', adm_ban_done: '{name}: бан', adm_unban_done: '{name}: бан снят',
      adm_announce: 'Уведомление о новом уроке', adm_announce_hint: 'Когда урок появился на сайте: выбери его и отправь. Придёт только тем, у кого включён этот предмет.', adm_announce_btn: 'Разослать', adm_announce_done: 'Отправлено: {n}', adm_announce_again: 'Об этом уроке уже рассылали', adm_auto_done: 'Разослано уведомление о новом уроке: {title} ({n})', adm_auto_fail: 'Не удалось разослать уведомление: {title}. Можно вручную в админке.', nav_admin: 'Админка', err_banned: 'Аккаунт заблокирован администратором сайта', sc_err_banned: 'Аккаунт заблокирован администратором сайта' },
    en: { adm_head: 'Admin', adm_lead: 'Invite code, members and problem reports.', adm_invite: 'Invite code',
      adm_invite_hint: 'Nobody can sign up without this code. If it leaked, change it. People who already joined are not affected.',
      adm_invite_save: 'Save', adm_invite_saved: 'New code saved', adm_invite_bad: 'The code needs 6–64 characters',
      adm_people: 'Members', adm_people_hint: 'Ban: the person cannot sign in, write or get notifications. You can lift it any time.',
      adm_ban: 'Ban', adm_unban: 'Unban', adm_banned: 'Banned', adm_ban_sure: 'Ban {name}?', adm_you: 'You',
      adm_admin: 'Admin', adm_issues: 'Problem reports', adm_ban_done: '{name} is banned', adm_unban_done: '{name} is unbanned',
      adm_announce: 'New lesson notification', adm_announce_hint: 'Once the lesson is on the site: pick it and send. Only people with that subject turned on get it.', adm_announce_btn: 'Send', adm_announce_done: 'Sent: {n}', adm_announce_again: 'This lesson was already announced', adm_auto_done: 'New lesson notification sent: {title} ({n})', adm_auto_fail: 'Could not send the notification for: {title}. You can send it by hand in Admin.', nav_admin: 'Admin', err_banned: 'This account was blocked by the site admin', sc_err_banned: 'This account was blocked by the site admin' }
  });

  var sb = function () { return Store.sb; };
  var cfg = window.APP_CONFIG || {};
  function mockBanned() { return U.storage.get('mock_banned', {}) || {}; }

  var api = Store.mode === 'supabase' ? {
    inviteGet: function () { return sb().rpc('admin_invite_get'); },
    inviteSet: function (code) { return sb().rpc('admin_invite_set', { p_code: code }); },
    people: function () { return sb().api('GET', '/rest/v1/profiles?select=id,name,role,banned,xp,avatar_url,frame,created_at&order=created_at.asc'); },
    ban: function (id, on) { return sb().rpc('admin_ban', { p_user: id, p_on: on }); }
  } : {
    inviteGet: function () { return Promise.resolve(U.storage.get('mock_invite', cfg.MOCK_INVITE_CODE)); },
    inviteSet: function (code) {
      code = String(code || '').trim();
      if (code.length < 6 || code.length > 64) { var e = new Error('bad_invite'); return Promise.reject(e); }
      U.storage.set('mock_invite', code); return Promise.resolve();
    },
    people: function () {
      var b = mockBanned();
      return Social.users().then(function (map) {
        return Object.keys(map).map(function (id) { var u = map[id]; return { id: id, name: u.name, role: u.role, xp: u.xp, avatar_url: u.avatar, frame: u.frame, banned: !!b[id] }; });
      });
    },
    ban: function (id, on) { var b = mockBanned(); if (on) b[id] = true; else delete b[id]; U.storage.set('mock_banned', b); return Promise.resolve(); }
  };

  function errText(e) {
    var m = String((e && (e.message || (e.data && e.data.message))) || '');
    if (/bad_invite/.test(m)) return t('adm_invite_bad');
    return t('err_network');
  }

  function inviteCard() {
    var input = el('input', { class: 'input', type: 'text', autocomplete: 'off', spellcheck: 'false', dir: 'ltr', maxlength: '64', 'aria-label': t('adm_invite') });
    var save = el('button', { type: 'button', class: 'btn btn--primary', disabled: true }, t('adm_invite_save'));
    var orig = '';
    api.inviteGet().then(function (v) { orig = String(v || ''); input.value = orig; }, function () {});
    input.addEventListener('input', function () { var v = input.value.trim(); save.disabled = v === orig || v.length < 6; });
    save.addEventListener('click', function () {
      var v = input.value.trim();
      save.disabled = true;
      api.inviteSet(v).then(function () { orig = v; U.toast(t('adm_invite_saved')); }, function (e) { save.disabled = false; U.toast(errText(e), 'err'); });
    });
    return el('div', { class: 'card adm-card' }, [
      el('h2', { class: 'adm-h' }, t('adm_invite')),
      el('p', { class: 'muted' }, t('adm_invite_hint')),
      el('div', { class: 'adm-invite' }, [input, save])
    ]);
  }

  function peopleCard() {
    var me = Store.auth.current();
    var list = el('div', { class: 'adm-people' }, el('p', { class: 'muted' }, '…'));
    function draw() {
      api.people().then(function (rows) {
        list.innerHTML = '';
        rows.forEach(function (p) {
          var self = p.id === me.id, admin = p.role === 'admin';
          var u = { id: p.id, name: p.name, avatar: p.avatar_url || p.avatar || null, frame: p.frame || 'none', xp: p.xp || 0 };
          var btn = self || admin ? null : el('button', { type: 'button', class: 'btn ' + (p.banned ? 'btn--ghost' : 'btn--danger'), 'data-act': p.banned ? 'unban' : 'ban' },
            t(p.banned ? 'adm_unban' : 'adm_ban'));
          if (btn) btn.addEventListener('click', function () {
            if (!p.banned && !window.confirm(t('adm_ban_sure', { name: p.name }))) return;
            btn.disabled = true;
            api.ban(p.id, !p.banned).then(function () {
              U.toast(t(p.banned ? 'adm_unban_done' : 'adm_ban_done', { name: p.name }));
              if (Social.invalidate) Social.invalidate();
              draw();
            }, function (e) { btn.disabled = false; U.toast(errText(e), 'err'); });
          });
          list.appendChild(el('div', { class: 'adm-row' + (p.banned ? ' is-banned' : ''), 'data-uid': p.id }, [
            el('span', { class: 'adm-row__ava' }, App.avatar(u, 36)),
            el('bdi', { class: 'adm-row__name', dir: 'auto' }, p.name),
            self ? el('span', { class: 'chip' }, t('adm_you')) : admin ? el('span', { class: 'chip' }, t('adm_admin')) : null,
            p.banned ? el('span', { class: 'chip chip--danger' }, t('adm_banned')) : null,
            el('span', { class: 'adm-row__sp' }),
            btn
          ]));
        });
      }, function (e) { list.innerHTML = ''; list.appendChild(el('p', { class: 'muted' }, errText(e))); });
    }
    draw();
    return el('div', { class: 'card adm-card' }, [el('h2', { class: 'adm-h' }, t('adm_people')), el('p', { class: 'muted' }, t('adm_people_hint')), list]);
  }

  function announceCard() {
    var idx = (window.LESSON_INDEX || []).slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    if (!idx.length || !window.Push || !Push.announceLesson) return null;
    var lang = I18N.lang;
    var sel = el('select', { class: 'input', 'aria-label': t('adm_announce') }, idx.map(function (l) {
      var sj = (window.SUBJECTS || []).filter(function (x) { return x.id === l.subject; })[0];
      return el('option', { value: l.id }, l.date + ' · ' + (sj ? (sj.name[lang] || sj.name.he) : l.subject) + ' · ' + (l.title[lang] || l.title.he));
    }));
    var btn = el('button', { type: 'button', class: 'btn btn--primary', 'data-act': 'announce' }, t('adm_announce_btn'));
    btn.addEventListener('click', function () {
      var l = idx.filter(function (x) { return x.id === sel.value; })[0]; if (!l) return;
      btn.disabled = true;
      Push.announceLesson(l).then(function (r) {
        btn.disabled = false;
        U.toast(r && r.again ? t('adm_announce_again') : t('adm_announce_done', { n: (r && r.sent) || 0 }));
      }, function (e) { btn.disabled = false; U.toast(errText(e), 'err'); });
    });
    return el('div', { class: 'card adm-card' }, [el('h2', { class: 'adm-h' }, t('adm_announce')), el('p', { class: 'muted' }, t('adm_announce_hint')),
      el('div', { class: 'adm-invite' }, [sel, btn])]);
  }

  /* Новые уроки (в index.js помечены notify: true) рассылаются сами, когда админ открывает сайт.
     Сервер сам не даст разослать один урок дважды, а здесь помним, что уже пробовали на этом устройстве. */
  var autoDone = false;
  function autoAnnounce() {
    if (autoDone || !window.Push || !Push.announceLesson) return;
    autoDone = true;
    var lang = I18N.lang;
    (window.LESSON_INDEX || []).filter(function (l) { return l.notify; }).forEach(function (l) {
      var key = 'ann:' + l.id, seen = null;
      try { seen = localStorage.getItem(key); } catch (e) {}
      if (seen) return;
      Push.announceLesson(l).then(function (r) {
        try { localStorage.setItem(key, '1'); } catch (e) {}
        if (r && !r.again) U.toast(t('adm_auto_done', { title: l.title[lang] || l.title.he, n: r.sent || 0 }));
      }, function (e) { U.toast(t('adm_auto_fail', { title: l.title[lang] || l.title.he }) + ' ' + errText(e), 'err'); });
    });
  }

  window.Admin = {
    api: api,
    autoAnnounce: autoAnnounce,
    isBannedMock: function (id) { return !!mockBanned()[id]; },
    tools: function () { return el('div', { class: 'adm-tools' }, [inviteCard(), announceCard(), peopleCard(), el('h2', { class: 'adm-h adm-h--issues' }, t('adm_issues'))]); }
  };
})();

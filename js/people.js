/* Люди и друзья: список всех, заявки, закреп, блок, «Удалённые и заблокированные», публичный профиль.
   Маршруты: /people, /user/:id, /notifications. Данные — window.Social. ES2017, без ?. и ??. */
(function () {
  'use strict';
  var el = U.el;
  function ic(name) { return Icons.get(name); }
  function btn(cls, icon, label, onClick, attrs) {
    var a = { type: 'button', class: 'btn ' + (cls || ''), onclick: onClick, html: (icon ? ic(icon) : '') + '<span>' + U.esc(label) + '</span>' };
    if (attrs) Object.keys(attrs).forEach(function (k) { a[k] = attrs[k]; });
    return el('button', a);
  }
  function fail(e) { U.toast(Social.errText(e), 'bad'); }
  function titleBadge(u) { var id = u.prefs && u.prefs.title; return id && window.Titles ? Titles.badge(id) : null; }

  /* ---------- нижнее меню действий ---------- */
  function sheet(head, items) {
    var m;
    var list = el('div', { class: 'sc-sheet' }, items.filter(Boolean).map(function (it) {
      return el('button', { type: 'button', class: 'sc-sheet__item' + (it.danger ? ' is-danger' : '') + (it.ok ? ' is-ok' : ''), 'data-act': it.id || null,
        onclick: function () { m.close(); setTimeout(it.onClick, 10); } },
        [el('span', { class: 'sc-sheet__ic', html: ic(it.icon) }), el('span', null, it.label)]);
    }));
    m = App.modal({ title: '', content: el('div', null, [head, list]) });
    m.el.classList.add('sc-sheet-modal');
    return m;
  }
  function personHead(u, extra) {
    return el('div', { class: 'sc-sheet__head' }, [
      App.avatar(u, 56),
      el('div', { class: 'sc-sheet__who' }, [Social.nameEl(u, { size: 'l' }), el('div', { class: 'sc-sheet__sub' }, [titleBadge(u), extra || null])])
    ]);
  }

  function openChatWith(uid) {
    return Social.openDirect(uid).then(function (cid) { App.go('/chat/' + cid); }, fail);
  }
  /* действия над человеком: одинаковые на странице «Люди» и в профиле */
  function actionsFor(p, after) {
    var u = p.user, done = function (msg) { return function () { if (msg) U.toast(msg); if (after) after(); }; };
    var A = [];
    A.push({ id: 'profile', icon: 'user', label: t('sc_open_profile'), onClick: function () { App.go('/user/' + u.id); } });
    if (p.rel === 'self') return A;
    if (p.rel === 'friend') A.push({ id: 'message', icon: 'chat', label: t('sc_message'), ok: true, onClick: function () { openChatWith(u.id); } });
    if (p.rel === 'none') A.push({ id: 'add', icon: 'userPlus', label: t('sc_add_friend'), ok: true, onClick: function () { Social.request(u.id).then(function (r) { done(r === 'friend' ? t('sc_now_friends') : t('sc_request_sent'))(); }, fail); } });
    if (p.rel === 'outgoing') A.push({ id: 'cancel', icon: 'close', label: t('sc_cancel_request'), onClick: function () { Social.cancel(u.id).then(done(), fail); } });
    if (p.rel === 'incoming') {
      A.push({ id: 'accept', icon: 'userCheck', label: t('sc_accept'), ok: true, onClick: function () { Social.accept(u.id).then(done(t('sc_now_friends')), fail); } });
      A.push({ id: 'decline', icon: 'close', label: t('sc_decline'), onClick: function () { Social.decline(u.id).then(done(), fail); } });
    }
    if (p.rel === 'removed') A.push({ id: 'restore', icon: 'userCheck', label: t('sc_restore'), ok: true, onClick: function () { Social.restore(u.id).then(done(t('sc_now_friends')), fail); } });
    if (p.rel !== 'blocked' && p.rel !== 'removed') {
      A.push(p.pinned
        ? { id: 'unpin', icon: 'pin', label: t('sc_unpin'), onClick: function () { Social.pinUser(u.id, false).then(done(), fail); } }
        : { id: 'pin', icon: 'pin', label: t('sc_pin'), onClick: function () { Social.pinUser(u.id, true).then(done(t('sc_pinned_ok')), fail); } });
    }
    if (p.rel === 'friend') A.push({ id: 'remove', icon: 'userMinus', label: t('sc_remove_friend'), danger: true, onClick: function () {
      confirmSheet(t('sc_remove_q', { name: u.name }), t('sc_remove_friend'), function () { Social.removeFriend(u.id).then(done(t('sc_removed_ok')), fail); });
    } });
    A.push(p.blocked
      ? { id: 'unblock', icon: 'block', label: t('sc_unblock'), onClick: function () { Social.block(u.id, false).then(done(t('sc_unblocked_ok')), fail); } }
      : { id: 'block', icon: 'block', label: t('sc_block'), danger: true, onClick: function () {
          confirmSheet(t('sc_block_q', { name: u.name }), t('sc_block'), function () { Social.block(u.id, true).then(done(t('sc_blocked_ok')), fail); });
        } });
    return A;
  }
  function confirmSheet(text, okLabel, onOk) {
    var m = App.modal({ title: '', content: el('div', { class: 'sc-confirm' }, [
      el('p', null, text),
      el('div', { class: 'sc-confirm__btns' }, [
        btn('btn--ghost', null, t('sc_cancel'), function () { m.close(); }),
        btn('btn--danger-solid', null, okLabel, function () { m.close(); onOk(); }, { 'data-act': 'confirm' })
      ])
    ]) });
    m.el.classList.add('sc-sheet-modal');
  }
  function personSheet(p, after) {
    var chip = relChip(p);
    sheet(personHead(p.user, chip), actionsFor(p, after));
  }
  Social.personSheet = function (uid, after) {
    Social.user(uid).then(function (p) { personSheet(p, after); }, fail);
  };

  function relChip(p) {
    var map = { friend: ['ok', 'sc_rel_friend'], outgoing: ['', 'sc_rel_outgoing'], incoming: ['', 'sc_rel_incoming'],
                blocked: ['bad', 'sc_rel_blocked'], removed: ['bad', 'sc_rel_removed'], self: ['', 'sc_rel_self'] };
    var x = map[p.rel]; if (!x) return null;
    return el('span', { class: 'chip sc-chip' + (x[0] ? ' sc-chip--' + x[0] : '') }, t(x[1]));
  }

  /* ---------- строка человека ---------- */
  function row(p, refresh) {
    var u = p.user, red = p.rel === 'blocked' || p.rel === 'removed';
    var main = el('button', { type: 'button', class: 'sc-row__main', 'aria-label': u.name, onclick: function () { personSheet(p, refresh); } }, [
      el('span', { class: 'sc-row__ava' }, [App.avatar(u, 48), p.pinned && !red ? el('span', { class: 'sc-row__pin', html: ic('pin') }) : null]),
      el('span', { class: 'sc-row__text' }, [
        Social.nameEl(u, { red: red }),
        el('span', { class: 'sc-row__sub' }, [p.rel !== 'blocked' && window.Presence ? Presence.badge(u.id) : null, titleBadge(u), p.rel !== 'none' && p.rel !== 'friend' && p.rel !== 'incoming' ? relChip(p) : null])
      ])
    ]);
    var side = el('span', { class: 'sc-row__side' });
    if (p.rel === 'incoming') {
      side.appendChild(el('button', { type: 'button', class: 'btn btn--ok sc-btn-s', 'data-act': 'accept', onclick: function () { Social.accept(u.id).then(function () { U.toast(t('sc_now_friends')); refresh(); }, fail); } }, t('sc_accept')));
      side.appendChild(el('button', { type: 'button', class: 'btn btn--ghost sc-btn-s', 'data-act': 'decline', onclick: function () { Social.decline(u.id).then(refresh, fail); } }, t('sc_decline')));
    } else if (p.rel === 'friend') {
      side.appendChild(el('button', { type: 'button', class: 'btn btn--ghost icon-btn', 'aria-label': t('sc_message'), 'data-act': 'message', html: ic('chat'), onclick: function () { openChatWith(u.id); } }));
    } else if (p.rel === 'none') {
      side.appendChild(el('button', { type: 'button', class: 'btn btn--ghost icon-btn', 'aria-label': t('sc_add_friend'), 'data-act': 'add', html: ic('userPlus'),
        onclick: function () { Social.request(u.id).then(function (r) { U.toast(r === 'friend' ? t('sc_now_friends') : t('sc_request_sent')); refresh(); }, fail); } }));
    } else if (p.rel === 'blocked') {
      side.appendChild(el('button', { type: 'button', class: 'btn sc-btn-s', 'data-act': 'unblock', onclick: function () { Social.block(u.id, false).then(function () { U.toast(t('sc_unblocked_ok')); refresh(); }, fail); } }, t('sc_unblock')));
    } else if (p.rel === 'removed') {
      side.appendChild(el('button', { type: 'button', class: 'btn sc-btn-s', 'data-act': 'restore', onclick: function () { Social.restore(u.id).then(function () { U.toast(t('sc_now_friends')); refresh(); }, fail); } }, t('sc_restore')));
    }
    return el('div', { class: 'sc-row' + (red ? ' sc-row--red' : '') + ' sc-row--' + p.rel, 'data-uid': u.id }, [main, side]);
  }

  function section(title, list, refresh, opts) {
    opts = opts || {};
    if (!list.length && !opts.always) return null;
    return el('section', { class: 'sc-sec' + (opts.cls ? ' ' + opts.cls : '') }, [
      el('div', { class: 'section-label sc-sec__label' }, [opts.icon ? el('span', { class: 'sc-sec__ic', html: ic(opts.icon) }) : null, title,
        el('span', { class: 'sc-sec__n' }, String(list.length))]),
      list.length ? el('div', { class: 'card sc-list' }, list.map(function (p) { return row(p, refresh); }))
                  : el('div', { class: 'card empty sc-empty' }, opts.empty || '')
    ]);
  }

  /* ---------- пробный режим: переключение аккаунтов ---------- */
  function demoSwitch() {
    var raw = U.storage.get('mock_users', {}) || {}, me = Store.auth.current();
    var accs = Object.keys(raw).map(function (e) { return raw[e]; });
    var chips = el('div', { class: 'sc-demo__list' }, accs.map(function (a) {
      var on = me && a.id === me.id;
      return el('button', { type: 'button', class: 'sc-demo__acc' + (on ? ' is-on' : ''), 'aria-pressed': on ? 'true' : 'false', 'data-email': a.email,
        onclick: function () {
          if (on) return;
          Store.auth.signIn({ email: a.email, password: a.pass }).then(function () {
            Social.invalidate(); App.render(); Social.refreshBadges(); U.toast(t('sc_demo_now', { name: a.name }));
          }, fail);
        } }, [App.avatar({ name: a.name, avatar: a.avatar, frame: a.frame }, 30), el('bdi', { dir: 'auto' }, a.name)]);
    }));
    return el('div', { class: 'card sc-demo' }, [
      el('div', { class: 'sc-demo__head' }, [el('b', null, t('sc_demo_switch')), el('span', { class: 'muted' }, t('sc_demo_hint'))]),
      chips,
      el('button', { type: 'button', class: 'btn btn--ghost sc-btn-s sc-demo__new', html: ic('userPlus') + '<span>' + U.esc(t('sc_demo_new')) + '</span>',
        onclick: function () { Store.auth.signOut(); } })
    ]);
  }

  /* ---------- /people ---------- */
  App.registerRoute('/people', function (params, view) {
    App.setTitle(t('sc_people'));
    view.classList.add('sc-view');
    view.appendChild(el('div', { class: 'page-head' }, [el('h1', null, t('sc_people')), el('p', null, t('sc_people_lead'))]));
    if (Store.mode === 'mock') view.appendChild(demoSwitch());
    var search = el('input', { class: 'input sc-search__input', type: 'search', placeholder: t('sc_search_people'), 'aria-label': t('sc_search_people'), value: '', dir: 'auto', autocomplete: 'off' });
    search.value = '';
    view.appendChild(el('div', { class: 'sc-search' }, [el('span', { class: 'sc-search__ic', html: ic('search') }), search]));
    var host = el('div', { class: 'sc-people' }, el('div', { class: 'sc-skel' }, [el('div'), el('div'), el('div')]));
    view.appendChild(host);
    var data = null, alive = true;
    function draw() {
      if (!alive || !data) return;
      var needle = String(search.value || '').trim().toLowerCase();
      var list = data.filter(function (p) { return !needle || String(p.user.name).toLowerCase().indexOf(needle) >= 0; });
      var red = function (p) { return p.rel === 'blocked' || p.rel === 'removed'; };
      var incoming = list.filter(function (p) { return p.rel === 'incoming'; });
      var pinned = list.filter(function (p) { return p.pinned && !red(p) && p.rel !== 'incoming' && p.rel !== 'self'; });
      var friends = list.filter(function (p) { return p.rel === 'friend' && !p.pinned; });
      var everyone = list.filter(function (p) { return (p.rel === 'none' || p.rel === 'outgoing' || p.rel === 'self') && !(p.pinned && p.rel !== 'self'); });
      everyone.sort(function (a, b) { return (a.rel === 'self' ? -1 : 0) - (b.rel === 'self' ? -1 : 0); });
      var gone = list.filter(red);
      host.innerHTML = '';
      [
        section(t('sc_requests'), incoming, load, { icon: 'userPlus', cls: 'sc-sec--req' }),
        section(t('sc_pinned'), pinned, load, { icon: 'pin' }),
        section(t('sc_friends'), friends, load, { icon: 'users', always: !needle, empty: t('sc_no_friends') }),
        section(t('sc_everyone'), everyone, load, { icon: 'globe' }),
        section(t('sc_removed_blocked'), gone, load, { icon: 'block', cls: 'sc-sec--gone' })
      ].forEach(function (s) { if (s) host.appendChild(s); });
      if (needle && !list.length) host.appendChild(el('div', { class: 'card empty' }, t('sc_nothing_found')));
    }
    function load() {
      return Social.people().then(function (r) { data = r; draw(); }, function (e) { host.innerHTML = ''; host.appendChild(el('div', { class: 'form-error' }, Social.errText(e))); });
    }
    search.addEventListener('input', draw);
    load();
    var pres = window.Presence ? Presence.watch(host) : null;   // «в сети» — только пока открыта эта страница
    var tmr = null;
    function onChange(e) { if (e && e.detail === 'read') return; clearTimeout(tmr); tmr = setTimeout(load, 120); }
    document.addEventListener('socialchange', onChange);
    var poll = setInterval(function () { if (!document.hidden) load(); }, Store.mode === 'mock' ? 5000 : 30000);
    return function () { alive = false; clearInterval(poll); document.removeEventListener('socialchange', onChange); if (pres) pres.stop(); };
  });

  /* ---------- /user/:id — то, что видят другие ---------- */
  App.registerRoute('/user/:id', function (params, view) {
    view.classList.add('sc-view');
    App.setTitle(t('sc_profile'));
    var host = el('div', { class: 'sc-pub' }, el('div', { class: 'sc-skel sc-skel--card' }, [el('div'), el('div')]));
    view.appendChild(host);
    var alive = true;
    function load() {
      Social.user(params.id).then(function (p) {
        if (!alive) return;
        var u = p.user;
        App.setTitle(u.name);
        host.innerHTML = '';
        var actions = el('div', { class: 'sc-pub__actions' });
        if (p.rel === 'self') {
          actions.appendChild(el('div', { class: 'mock-banner sc-pub__note' }, t('sc_self_view')));
          actions.appendChild(btn('', 'pencil', t('nav_profile'), function () { App.go('/profile'); }));
        } else {
          if (p.rel === 'friend') actions.appendChild(btn('btn--primary', 'chat', t('sc_message'), function () { openChatWith(u.id); }, { 'data-act': 'message' }));
          if (p.rel === 'none') actions.appendChild(btn('btn--primary', 'userPlus', t('sc_add_friend'), function () { Social.request(u.id).then(function () { U.toast(t('sc_request_sent')); load(); }, fail); }, { 'data-act': 'add' }));
          if (p.rel === 'outgoing') actions.appendChild(btn('', 'close', t('sc_cancel_request'), function () { Social.cancel(u.id).then(load, fail); }, { 'data-act': 'cancel' }));
          if (p.rel === 'incoming') actions.appendChild(btn('btn--ok', 'userCheck', t('sc_accept'), function () { Social.accept(u.id).then(load, fail); }, { 'data-act': 'accept' }));
          if (p.rel === 'removed') actions.appendChild(btn('', 'userCheck', t('sc_restore'), function () { Social.restore(u.id).then(load, fail); }, { 'data-act': 'restore' }));
          if (p.rel === 'blocked') actions.appendChild(btn('', 'block', t('sc_unblock'), function () { Social.block(u.id, false).then(load, fail); }, { 'data-act': 'unblock' }));
          actions.appendChild(el('button', { type: 'button', class: 'btn icon-btn', 'aria-label': t('sc_more'), html: ic('more'), onclick: function () { personSheet(p, load); } }));
        }
        var st = p.stats || {};
        function stat(icon, n, label) {
          return el('div', { class: 'sc-stat' }, [el('span', { class: 'sc-stat__ic', html: ic(icon) }), el('b', null, String(n)), el('span', null, label)]);
        }
        host.appendChild(el('div', { class: 'card card--public sc-pub__card' }, [
          el('div', { class: 'profile-top' }, [
            el('div', { class: 'profile-top__ava' }, App.avatar(u, 132)),
            el('div', { class: 'profile-top__info' }, [
              el('h1', { class: 'sc-pub__name' }, Social.nameEl(u, { size: 'xl', red: p.rel === 'blocked' || p.rel === 'removed' })),
              el('div', { class: 'profile-top__title' }, [titleBadge(u), p.rel !== 'none' && p.rel !== 'self' ? relChip(p) : null]),
              p.rel !== 'blocked' && window.Presence ? el('div', { class: 'sc-pub__pres' }, Presence.badge(u.id)) : null,
              actions
            ]),
            App.levelBlock(u.xp, 'card')
          ]),
          el('div', { class: 'sc-stats' }, [
            stat('book', st.read || 0, t('sc_stat_read')), stat('check', st.solved || 0, t('sc_stat_solved')), stat('users', st.friends || 0, t('sc_stat_friends'))
          ])
        ]));
      }, function (e) { host.innerHTML = ''; host.appendChild(el('div', { class: 'card empty' }, Social.errText(e))); });
    }
    load();
    var pres = window.Presence ? Presence.watch(host) : null;
    return function () { alive = false; if (pres) pres.stop(); };
  });

  /* ---------- /notifications ---------- */
  App.registerRoute('/notifications', function (params, view) {
    view.classList.add('sc-view');
    App.setTitle(t('notifications'));
    view.appendChild(el('div', { class: 'page-head' }, el('h1', null, t('notifications'))));
    var host = el('div', { class: 'card sc-list' }, el('div', { class: 'muted', style: 'padding:12px' }, '…'));
    view.appendChild(host);
    Social.notifications().then(function (items) {
      host.innerHTML = '';
      if (!items.length) { host.className = 'card empty'; host.textContent = t('no_notifications'); return; }
      items.forEach(function (n) {
        host.appendChild(el('a', { class: 'sc-row sc-nrow' + (n.seen ? '' : ' is-new'), href: n.href }, [
          el('span', { class: 'sc-row__main' }, [
            el('span', { class: 'sc-row__ava' }, n.user ? App.avatar(n.user, 44) : el('span', { class: 'sc-gava', html: ic('users') })),
            el('span', { class: 'sc-row__text' }, [el('span', { class: 'sc-nrow__t' }, n.text), el('small', { class: 'muted' }, Social.fmt.ago(n.at))])
          ]),
          el('span', { class: 'sc-row__side', html: ic('chevron') })
        ]));
      });
      setTimeout(function () { Social.markNotificationsSeen(); }, 800);
    }, function (e) { host.textContent = Social.errText(e); });
  });

  I18N.add({
    he: {
      sc_nav_people: 'אנשים', sc_people: 'אנשים', sc_people_lead: 'כל החברים באתר. חברים יכולים לכתוב אחד לשני ולהתאחד בקבוצות.',
      sc_search_people: 'חיפוש לפי שם', sc_requests: 'בקשות חברות', sc_pinned: 'מוצמדים', sc_friends: 'חברים', sc_everyone: 'כולם',
      sc_removed_blocked: 'הוסרו וחסומים', sc_no_friends: 'עוד אין חברים. הוסיפו מישהו מהרשימה למטה 👇', sc_nothing_found: 'לא נמצא אף אחד',
      sc_open_profile: 'לפתוח פרופיל', sc_message: 'לכתוב', sc_add_friend: 'להוסיף לחברים', sc_cancel_request: 'לבטל בקשה',
      sc_accept: 'לאשר', sc_decline: 'לדחות', sc_restore: 'להחזיר', sc_pin: 'להצמיד למעלה', sc_unpin: 'לבטל הצמדה',
      sc_remove_friend: 'להסיר מהחברים', sc_block: 'לחסום', sc_unblock: 'לבטל חסימה', sc_more: 'עוד', sc_cancel: 'ביטול',
      sc_remove_q: 'להסיר את {name} מהחברים? אפשר יהיה להחזיר מ״הוסרו וחסומים״.', sc_block_q: 'לחסום את {name}? הוא לא יוכל לכתוב לך או לשלוח בקשות.',
      sc_request_sent: 'הבקשה נשלחה', sc_now_friends: 'עכשיו אתם חברים 🎉', sc_pinned_ok: 'הוצמד', sc_removed_ok: 'הוסר מהחברים',
      sc_blocked_ok: 'נחסם', sc_unblocked_ok: 'החסימה בוטלה',
      sc_rel_friend: 'חבר', sc_rel_outgoing: 'הבקשה נשלחה', sc_rel_incoming: 'רוצה להיות חבר', sc_rel_blocked: 'חסום', sc_rel_removed: 'הוסר', sc_rel_self: 'זה אתה',
      sc_profile: 'פרופיל', sc_self_view: 'כך אחרים רואים את הפרופיל שלך.', sc_stat_read: 'שיעורים נקראו', sc_stat_solved: 'משימות נפתרו', sc_stat_friends: 'חברים',
      sc_demo_switch: 'ניסיון: החלפת חשבון', sc_demo_hint: 'כדי לבדוק בקשות וצ׳אטים בין שני חשבונות בדפדפן אחד.', sc_demo_new: 'חשבון ניסיון חדש', sc_demo_now: 'עכשיו את/ה: {name}'
    },
    ru: {
      sc_nav_people: 'Люди', sc_people: 'Люди', sc_people_lead: 'Все, кто есть на сайте. Друзья могут переписываться и собираться в группы.',
      sc_search_people: 'Поиск по имени', sc_requests: 'Заявки в друзья', sc_pinned: 'Закреплённые', sc_friends: 'Друзья', sc_everyone: 'Все',
      sc_removed_blocked: 'Удалённые и заблокированные', sc_no_friends: 'Друзей пока нет. Добавь кого-нибудь из списка ниже 👇', sc_nothing_found: 'Никого не нашли',
      sc_open_profile: 'Открыть профиль', sc_message: 'Написать', sc_add_friend: 'Добавить в друзья', sc_cancel_request: 'Отменить заявку',
      sc_accept: 'Принять', sc_decline: 'Отклонить', sc_restore: 'Вернуть', sc_pin: 'Закрепить сверху', sc_unpin: 'Открепить',
      sc_remove_friend: 'Удалить из друзей', sc_block: 'Заблокировать', sc_unblock: 'Разблокировать', sc_more: 'Ещё', sc_cancel: 'Отмена',
      sc_remove_q: 'Удалить {name} из друзей? Вернуть можно в «Удалённые и заблокированные».', sc_block_q: 'Заблокировать {name}? Он(а) не сможет писать тебе и присылать заявки.',
      sc_request_sent: 'Заявка отправлена', sc_now_friends: 'Теперь вы друзья 🎉', sc_pinned_ok: 'Закреплено', sc_removed_ok: 'Удалён(а) из друзей',
      sc_blocked_ok: 'Заблокировано', sc_unblocked_ok: 'Блокировка снята',
      sc_rel_friend: 'Друг', sc_rel_outgoing: 'Заявка отправлена', sc_rel_incoming: 'Хочет дружить', sc_rel_blocked: 'Заблокирован', sc_rel_removed: 'Удалён', sc_rel_self: 'Это ты',
      sc_profile: 'Профиль', sc_self_view: 'Так твой профиль видят другие.', sc_stat_read: 'уроков прочитано', sc_stat_solved: 'задач решено', sc_stat_friends: 'друзей',
      sc_demo_switch: 'Проба: сменить аккаунт', sc_demo_hint: 'Чтобы проверить заявки и чаты между двумя аккаунтами в одном браузере.', sc_demo_new: 'Новый пробный аккаунт', sc_demo_now: 'Сейчас ты: {name}'
    },
    en: {
      sc_nav_people: 'People', sc_people: 'People', sc_people_lead: 'Everyone on the site. Friends can chat and team up in groups.',
      sc_search_people: 'Search by name', sc_requests: 'Friend requests', sc_pinned: 'Pinned', sc_friends: 'Friends', sc_everyone: 'Everyone',
      sc_removed_blocked: 'Removed & blocked', sc_no_friends: 'No friends yet. Add someone from the list below 👇', sc_nothing_found: 'Nobody found',
      sc_open_profile: 'Open profile', sc_message: 'Message', sc_add_friend: 'Add friend', sc_cancel_request: 'Cancel request',
      sc_accept: 'Accept', sc_decline: 'Decline', sc_restore: 'Restore', sc_pin: 'Pin to top', sc_unpin: 'Unpin',
      sc_remove_friend: 'Remove friend', sc_block: 'Block', sc_unblock: 'Unblock', sc_more: 'More', sc_cancel: 'Cancel',
      sc_remove_q: 'Remove {name} from friends? You can restore them from “Removed & blocked”.', sc_block_q: 'Block {name}? They won’t be able to message you or send requests.',
      sc_request_sent: 'Request sent', sc_now_friends: 'You are friends now 🎉', sc_pinned_ok: 'Pinned', sc_removed_ok: 'Removed from friends',
      sc_blocked_ok: 'Blocked', sc_unblocked_ok: 'Unblocked',
      sc_rel_friend: 'Friend', sc_rel_outgoing: 'Request sent', sc_rel_incoming: 'Wants to be friends', sc_rel_blocked: 'Blocked', sc_rel_removed: 'Removed', sc_rel_self: 'You',
      sc_profile: 'Profile', sc_self_view: 'This is how others see your profile.', sc_stat_read: 'lessons read', sc_stat_solved: 'tasks solved', sc_stat_friends: 'friends',
      sc_demo_switch: 'Demo: switch account', sc_demo_hint: 'To test requests and chats between two accounts in one browser.', sc_demo_new: 'New demo account', sc_demo_now: 'You are now: {name}'
    }
  });
})();

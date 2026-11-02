/* Чаты: список (/chats), переписка (/chat/:id), группы и их настройки (как в Telegram), стиль пузырей и фона.
   Новые сообщения — опрос каждые 3 с, пока чат открыт (без веб-сокетов). ES2017, без ?. и ??. */
(function () {
  'use strict';
  var el = U.el;
  function ic(n) { return Icons.get(n); }
  function fail(e) { U.toast(Social.errText(e), 'bad'); }
  function me() { return Store.auth.current() || {}; }
  function iconBtn(icon, label, onClick, cls, act) {
    return el('button', { type: 'button', class: 'btn btn--ghost icon-btn ' + (cls || ''), 'aria-label': label, title: label, html: ic(icon), onclick: onClick, 'data-act': act || null });
  }
  function btn(cls, icon, label, onClick, act) {
    return el('button', { type: 'button', class: 'btn ' + (cls || ''), 'data-act': act || null, onclick: onClick,
      html: (icon ? ic(icon) : '') + '<span>' + U.esc(label) + '</span>' });
  }
  function sw(checked, onChange, disabled, act) {
    var i = el('input', { type: 'checkbox', disabled: !!disabled, 'data-act': act || null }); i.checked = !!checked;
    i.addEventListener('change', function () { onChange(i.checked, i); });
    return el('label', { class: 'switch' + (disabled ? ' is-disabled' : '') }, [i, el('span')]);
  }
  function seg(options, current, onPick, act) {
    var box = el('div', { class: 'seg sc-seg', role: 'group', 'data-act': act || null });
    function draw(cur) {
      box.innerHTML = '';
      options.forEach(function (o) {
        box.appendChild(el('button', { type: 'button', 'aria-pressed': String(o.id) === String(cur) ? 'true' : 'false', 'data-v': String(o.id),
          onclick: function () { draw(o.id); onPick(o.id); } }, o.label));
      });
    }
    draw(current);
    return box;
  }
  /* «без уведомлений» для чата: пуш и колокольчик молчат */
  function toggleMute(chatId, nowMuted, after) {
    Social.mute(chatId, !nowMuted).then(function (on) {
      U.toast(t(on ? 'sc_muted_on' : 'sc_muted_off'));
      if (after) after(on);
    }, fail);
  }
  function hashHue(s) { var h = 0; s = String(s || ''); for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 360; return h; }
  function firstGlyph(s) {
    s = String(s || '?').trim();
    var g = window.Intl && Intl.Segmenter ? Array.from(new Intl.Segmenter(undefined, { granularity: 'grapheme' }).segment(s), function (x) { return x.segment; })[0] : Array.from(s)[0];
    return (g || '?').toUpperCase();
  }
  function groupAva(c, size) {
    var h = hashHue(c.id);
    return el('span', { class: 'sc-gava', style: 'width:' + size + 'px;height:' + size + 'px;font-size:' + Math.round(size * 0.42) + 'px;background:linear-gradient(135deg,hsl(' + h + ',70%,62%),hsl(' + ((h + 50) % 360) + ',65%,48%))' },
      el('bdi', null, firstGlyph(c.title)));
  }
  Social.groupAvatar = groupAva;
  function supportAva(size) {
    return el('span', { class: 'sc-gava sc-gava--support', style: 'width:' + size + 'px;height:' + size + 'px', html: ic('question') });
  }
  /* название чата поддержки: у пользователя — «Поддержка», у админа — «Поддержка · Имя» */
  function supportTitle(c, users, myId) {
    if (c.owner_id === myId) return t('sc_support');
    var u = users[c.owner_id];
    return t('sc_support_from', { name: u ? u.name : '…' });
  }
  function bubbleOf(u) { return Social.styleOf('bubble', u && u.prefs && u.prefs.bubbleStyle); }
  function sysText(m, users) {
    var x = {}; try { x = JSON.parse(m.body || '{}'); } catch (e) { x = {}; }
    var a = users[m.sender_id], b = x.t ? users[x.t] : null;
    return t('sc_sys_' + (x.e || 'created'), { a: a ? a.name : '…', b: b ? b.name : '…' });
  }
  function preview(m, users, myId, isGroup) {
    if (!m) return '';
    if (m.kind === 'system') return sysText(m, users);
    var who = m.sender_id === myId ? t('sc_you') + ': ' : (isGroup && users[m.sender_id] ? users[m.sender_id].name + ': ' : '');
    var body = m.kind === 'photo' ? '📷 ' + (m.body || t('sc_photo')) : m.kind === 'file' ? '📎 ' + (m.file_name || t('sc_file'))
      : m.kind === 'sticker' ? m.body + ' ' + t('sc_sticker') : (m.body || '');
    return who + String(body).replace(/\s+/g, ' ');
  }
  function fmtSize(n) { n = n || 0; return n > 1048576 ? (n / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(n / 1024)) + ' KB'; }
  /* текст → узлы, ссылки кликабельны (только http/https), без innerHTML */
  var URL_RE = /((?:https?:\/\/|www\.)[^\s<>"']+)/gi;
  function richText(s) {
    var frag = document.createDocumentFragment(), last = 0, m;
    s = String(s || '');
    URL_RE.lastIndex = 0;
    while ((m = URL_RE.exec(s))) {
      var url = m[1].replace(/[.,!?;:)\]]+$/, '');
      if (m.index > last) frag.appendChild(document.createTextNode(s.slice(last, m.index)));
      var href = /^https?:\/\//i.test(url) ? url : 'https://' + url;
      frag.appendChild(el('a', { href: href, target: '_blank', rel: 'noopener noreferrer nofollow', dir: 'ltr' }, url));
      last = m.index + url.length;
      URL_RE.lastIndex = last;
    }
    if (last < s.length) frag.appendChild(document.createTextNode(s.slice(last)));
    return frag;
  }
  var coarse = !!(window.matchMedia && matchMedia('(pointer: coarse)').matches);

  /* ===================================================================
     СТИЛЬ ЧАТА (пузырь + фон) — личная настройка, видна в профиле prefs
     =================================================================== */
  function openChatStyle(after) {
    var u = me(), lvl = Store.effectiveLevel();
    var bub = Social.styleOf('bubble', u.prefs.bubbleStyle), bg = Social.styleOf('bg', u.prefs.chatBg);
    var save = btn('btn--ok', 'check', t('save'), null, 'save-style');
    save.disabled = true;
    var preview = el('div', { class: 'sc-stylepv sc-bg' });
    var pvLayer = el('div', { class: 'sc-bg__layer' });
    function drawPv() {
      preview.className = 'sc-stylepv sc-bg sc-bg--' + bg;
      preview.innerHTML = ''; preview.appendChild(pvLayer);
      preview.appendChild(el('div', { class: 'sc-stylepv__msgs' }, [
        el('div', { class: 'sc-msg sc-msg--in' }, el('div', { class: 'sc-bub sc-bub--classic sc-bub--in' }, el('span', { class: 'sc-bub__text' }, t('sc_sample_q')))),
        el('div', { class: 'sc-msg sc-msg--out' }, el('div', { class: 'sc-bub sc-bub--' + bub + ' sc-bub--out' }, [el('span', { class: 'sc-bub__text' }, t('sc_sample_a')),
          el('span', { class: 'sc-bub__meta' }, '12:30')]))
      ]));
      save.disabled = bub === Social.styleOf('bubble', u.prefs.bubbleStyle) && bg === Social.styleOf('bg', u.prefs.chatBg);
    }
    drawPv();
    var tabs = el('div', { class: 'sc-tabs' });
    var body = el('div');
    function show(which) {
      body.innerHTML = '';
      body.appendChild(which === 'bubble'
        ? Social.bubblePicker({ current: bub, level: lvl, onPick: function (id) { bub = id; drawPv(); } })
        : Social.bgPicker({ current: bg, level: lvl, onPick: function (id) { bg = id; drawPv(); } }));
    }
    tabs.appendChild(seg([{ id: 'bubble', label: t('sc_bubble_style') }, { id: 'bg', label: t('sc_chat_bg') }], 'bubble', show, 'style-tab'));
    show('bubble');
    var m = App.modal({ title: t('sc_chat_style'), wide: true, content: el('div', { class: 'sc-stylebox' }, [
      el('p', { class: 'muted' }, t('sc_chat_style_lead')), preview, el('div', { class: 'sc-stylebox__bar' }, [tabs, save]), body
    ]) });
    save.addEventListener('click', function () {
      var prefs = JSON.parse(JSON.stringify(me().prefs || {}));
      prefs.bubbleStyle = bub; prefs.chatBg = bg;
      Store.profile.update({ prefs: prefs }).then(function () { Social.invalidate(); U.toast(t('saved')); m.close(); if (after) after(); }, fail);
    });
  }
  Social.openChatStyle = openChatStyle;

  /* ===================================================================
     ВЫБОР ДРУЗЕЙ (для нового чата / группы / добавления)
     =================================================================== */
  function pickFriends(o) {
    /* o: {title, multi, exclude:{id:1}, okLabel, withTitle, max, onDone(ids, title)} */
    Social.people().then(function (people) {
      var friends = people.filter(function (p) { return p.rel === 'friend' && !(o.exclude && o.exclude[p.user.id]); });
      var chosen = {};
      var titleInp = o.withTitle ? el('input', { class: 'input', type: 'text', maxlength: '64', dir: 'auto', placeholder: t('sc_group_name'), 'aria-label': t('sc_group_name'), 'data-act': 'group-title' }) : null;
      var search = el('input', { class: 'input sc-search__input', type: 'search', placeholder: t('sc_search_people'), dir: 'auto', 'aria-label': t('sc_search_people') });
      var list = el('div', { class: 'sc-pick' });
      var count = el('span', { class: 'muted sc-pick__count' });
      var ok = btn('btn--primary', o.multi ? 'check' : null, o.okLabel || t('sc_create'), null, 'pick-ok');
      function upd() {
        var n = Object.keys(chosen).length;
        count.textContent = o.multi ? t('sc_selected', { n: n, max: o.max || Social.MAX_GROUP }) : '';
        ok.disabled = o.withTitle ? !(titleInp.value.trim()) : (o.multi && !n);
      }
      function draw() {
        var needle = search.value.trim().toLowerCase();
        list.innerHTML = '';
        var shown = friends.filter(function (p) { return !needle || String(p.user.name).toLowerCase().indexOf(needle) >= 0; });
        if (!shown.length) list.appendChild(el('div', { class: 'empty' }, friends.length ? t('sc_nothing_found') : t('sc_no_friends_chat')));
        shown.forEach(function (p) {
          var on = !!chosen[p.user.id];
          list.appendChild(el('button', { type: 'button', class: 'sc-pick__item' + (on ? ' is-on' : ''), 'aria-pressed': on ? 'true' : 'false', 'data-uid': p.user.id,
            onclick: function () {
              if (!o.multi) { m.close(); o.onDone([p.user.id]); return; }
              if (chosen[p.user.id]) delete chosen[p.user.id];
              else {
                if (Object.keys(chosen).length + 1 >= (o.max || Social.MAX_GROUP)) { U.toast(t('sc_err_group_full')); return; }
                chosen[p.user.id] = 1;
              }
              draw(); upd();
            } }, [App.avatar(p.user, 40), el('span', { class: 'sc-pick__name' }, Social.nameEl(p.user)),
              o.multi ? el('span', { class: 'sc-pick__tick', html: ic('check') }) : el('span', { class: 'sc-pick__go', html: ic('chevron') })]));
        });
      }
      search.addEventListener('input', draw);
      if (titleInp) titleInp.addEventListener('input', upd);
      ok.addEventListener('click', function () { m.close(); o.onDone(Object.keys(chosen), titleInp ? titleInp.value.trim() : null); });
      var m = App.modal({ title: o.title, content: el('div', { class: 'sc-pickbox' }, [
        titleInp ? el('label', { class: 'field' }, [el('span', { class: 'field__label' }, t('sc_group_name')), titleInp]) : null,
        el('div', { class: 'sc-search' }, [el('span', { class: 'sc-search__ic', html: ic('search') }), search]),
        list,
        o.multi ? el('div', { class: 'sc-pickbox__foot' }, [count, ok]) : null
      ]) });
      draw(); upd();
      if (titleInp && !coarse) setTimeout(function () { titleInp.focus(); }, 300);
    }, fail);
  }
  function newGroup() {
    pickFriends({ title: t('sc_new_group'), multi: true, withTitle: true, okLabel: t('sc_create'), onDone: function (ids, title) {
      Social.createGroup(title, ids).then(function (cid) { App.go('/chat/' + cid); }, fail);
    } });
  }
  function newDirect() {
    pickFriends({ title: t('sc_new_chat'), multi: false, onDone: function (ids) {
      Social.openDirect(ids[0]).then(function (cid) { App.go('/chat/' + cid); }, fail);
    } });
  }

  /* ===================================================================
     /chats — список
     =================================================================== */
  App.registerRoute('/chats', function (params, view) {
    App.setTitle(t('sc_chats'));
    view.classList.add('sc-view');
    view.appendChild(el('div', { class: 'page-head sc-chats-head' }, [
      el('div', null, [el('h1', null, t('sc_chats')), el('p', null, t('sc_chats_lead'))]),
      el('div', { class: 'sc-chats-head__btns' }, [
        btn('', 'palette', t('sc_chat_style'), function () { openChatStyle(); }, 'chat-style'),
        btn('', 'chat', t('sc_new_chat'), newDirect, 'new-chat'),
        btn('btn--primary', 'users', t('sc_new_group'), newGroup, 'new-group')
      ])
    ]));
    var host = el('div', { class: 'card sc-clist' }, el('div', { class: 'sc-skel' }, [el('div'), el('div'), el('div')]));
    view.appendChild(host);
    var alive = true, myId = me().id;
    function load() {
      Promise.all([Social.chats(), Social.users()]).then(function (r) {
        if (!alive) return;
        var chats = r[0], users = r[1];
        host.innerHTML = '';
        if (!chats.length) {
          host.className = 'card sc-clist sc-clist--empty';
          host.appendChild(el('div', { class: 'sc-empty-hero' }, [
            el('div', { class: 'sc-empty-hero__ic', html: ic('chat') }),
            el('b', null, t('sc_no_chats')), el('p', { class: 'muted' }, t('sc_no_chats_hint')),
            btn('btn--primary', 'users', t('sc_nav_people'), function () { App.go('/people'); })
          ]));
          return;
        }
        host.className = 'card sc-clist';
        chats.forEach(function (c) {
          var isG = c.kind === 'group', isS = c.kind === 'support';
          var nameNode = isG ? el('span', { class: 'sc-crow__gname' }, [el('span', { class: 'sc-crow__gic', html: ic('users') }), el('bdi', { dir: 'auto' }, c.title)])
                       : isS ? el('span', { class: 'sc-crow__gname' }, [el('span', { class: 'sc-crow__gic', html: ic('question') }), el('bdi', { dir: 'auto' }, supportTitle(c, users, myId))])
                       : Social.nameEl(c.other || {});
          host.appendChild(el('a', { class: 'sc-crow' + (c.unread ? ' has-unread' : '') + (c.muted ? ' is-muted' : ''), href: '#/chat/' + c.id, 'data-cid': c.id,
            title: t('sc_mute_hint'),
            oncontextmenu: function (e) { e.preventDefault(); toggleMute(c.id, c.muted, function () { load(); }); } }, [
            el('span', { class: 'sc-crow__ava' }, isG ? groupAva(c, 52) : isS ? supportAva(52) : App.avatar(c.other || {}, 52)),
            el('span', { class: 'sc-crow__body' }, [
              el('span', { class: 'sc-crow__top' }, [nameNode, c.muted ? el('span', { class: 'sc-crow__muted', title: t('sc_muted'), html: ic('bellOff') }) : null,
                el('span', { class: 'sc-crow__time' }, c.last ? Social.fmt.short(c.last.created_at) : '')]),
              el('span', { class: 'sc-crow__bottom' }, [
                el('bdi', { class: 'sc-crow__prev', dir: 'auto' }, c.last ? preview(c.last, users, myId, isG || isS) : t('sc_no_messages')),
                c.unread ? el('span', { class: 'sc-badge' }, c.unread > 99 ? '99+' : String(c.unread)) : null
              ])
            ])
          ]));
        });
      }, function (e) { host.innerHTML = ''; host.appendChild(el('div', { class: 'form-error' }, Social.errText(e))); });
    }
    load();
    function onChange() { if (alive) load(); }
    document.addEventListener('socialchange', onChange);
    var poll = setInterval(function () { if (!document.hidden) load(); }, Store.mode === 'mock' ? 3000 : 20000);
    return function () { alive = false; clearInterval(poll); document.removeEventListener('socialchange', onChange); };
  });

  /* ===================================================================
     /chat/:id — переписка
     =================================================================== */
  App.registerRoute('/chat/:id', function (params, view) {
    var S = { id: params.id, chat: null, msgs: {}, ids: [], since: null, hasMore: true, loadingOld: false, reply: null, edit: null,
              nodes: {}, users: {}, firstUnread: null, alive: true, cooldownUntil: 0, polls: 0, myId: me().id };
    view.classList.add('sc-view', 'sc-view--chat');
    document.body.classList.add('sc-chat-open');
    App.setTitle(t('sc_chats'));

    var layer = el('div', { class: 'sc-bg__layer' });
    var headSlot = el('div', { class: 'sc-chat__head' });
    var pinSlot = el('div', { class: 'sc-chat__pin', hidden: true });
    var list = el('div', { class: 'sc-msgs', role: 'log', 'aria-live': 'polite' });
    var scroll = el('div', { class: 'sc-chat__scroll' }, list);
    var jump = el('button', { type: 'button', class: 'sc-jump', 'aria-label': t('sc_to_bottom'), html: ic('chevronDown') + '<span class="sc-jump__n"></span>', hidden: true });
    var composer = el('div', { class: 'sc-composer' });
    var box = el('div', { class: 'sc-chat sc-bg' }, [layer, headSlot, pinSlot, el('div', { class: 'sc-chat__mid' }, [scroll, jump]), composer]);
    view.appendChild(box);

    /* высота: под клавиатуру на телефоне */
    function fitHeight() {
      var vv = window.visualViewport;
      var top = box.getBoundingClientRect().top;
      var h = (vv ? vv.height + (vv.offsetTop || 0) : window.innerHeight) - Math.max(0, top);
      box.style.height = Math.max(260, Math.round(h)) + 'px';
    }
    var onVV = function () { fitHeight(); if (atBottom(140)) toBottom(); };
    window.addEventListener('resize', onVV);
    if (window.visualViewport) window.visualViewport.addEventListener('resize', onVV);
    setTimeout(fitHeight, 0);

    function atBottom(slack) { return scroll.scrollHeight - scroll.scrollTop - scroll.clientHeight < (slack || 60); }
    function toBottom(smooth) {
      if (smooth && !U.reducedMotion() && scroll.scrollTo) scroll.scrollTo({ top: scroll.scrollHeight, behavior: 'smooth' });
      else scroll.scrollTop = scroll.scrollHeight;
    }

    /* ---------- шапка ---------- */
    function myMuted() { var mm = (S.chat.members || []).filter(function (m) { return m.user_id === S.myId; })[0]; return !!(mm && mm.muted); }
    function muteBtn() {
      var on = myMuted();
      return iconBtn(on ? 'bellOff' : 'bell', t(on ? 'sc_unmute' : 'sc_mute'), function () {
        this.blur && this.blur();
        toggleMute(S.chat.id, on, function (now) {
          (S.chat.members || []).forEach(function (m) { if (m.user_id === S.myId) m.muted = now; });
          drawHead();
        });
      }, on ? 'is-on' : '', 'mute');
    }
    function drawHead() {
      var c = S.chat; headSlot.innerHTML = '';
      if (c.kind === 'support') {
        var st = supportTitle(c, S.users, S.myId);
        headSlot.appendChild(iconBtn('back', t('sc_back'), function () { App.go('/chats'); }, 'sc-chat__back', 'back'));
        headSlot.appendChild(el('div', { class: 'sc-chat__who' }, [el('span', { class: 'sc-chat__ava' }, supportAva(42)),
          el('span', { class: 'sc-chat__titles' }, [el('bdi', { class: 'sc-chat__gtitle', dir: 'auto' }, st), el('span', { class: 'sc-chat__sub' }, t('sc_support_sub'))])]));
        headSlot.appendChild(muteBtn());
        headSlot.appendChild(iconBtn('palette', t('sc_chat_style'), function () { openChatStyle(function () { applyBg(); renderList(true); }); }, '', 'chat-style'));
        App.setTitle(st);
        return;
      }
      var other = c.kind === 'direct' ? (c.members.filter(function (m) { return m.user_id !== S.myId; })[0] || {}).user : null;
      var who = el('button', { type: 'button', class: 'sc-chat__who', 'data-act': 'chat-info', onclick: function () {
        if (other) App.go('/user/' + other.id); else openGroupInfo('info');
      } }, [
        el('span', { class: 'sc-chat__ava' }, other ? App.avatar(other, 42) : groupAva(c, 42)),
        el('span', { class: 'sc-chat__titles' }, [
          other ? Social.nameEl(other) : el('bdi', { class: 'sc-chat__gtitle', dir: 'auto' }, c.title),
          el('span', { class: 'sc-chat__sub' }, other ? (S.chat.ctx && S.chat.ctx.blocked ? t('sc_rel_blocked') : (S.chat.ctx && !S.chat.ctx.friends ? t('sc_not_friends_now') : t('sc_direct')))
            : subLine(c))
        ])
      ]);
      headSlot.appendChild(iconBtn('back', t('sc_back'), function () { App.go('/chats'); }, 'sc-chat__back', 'back'));
      headSlot.appendChild(who);
      headSlot.appendChild(muteBtn());
      headSlot.appendChild(iconBtn('palette', t('sc_chat_style'), function () { openChatStyle(function () { applyBg(); renderList(true); }); }, '', 'chat-style'));
      if (c.kind === 'group') headSlot.appendChild(iconBtn('settings', t('sc_group_settings'), function () { openGroupInfo('info'); }, '', 'group-settings'));
      App.setTitle(c.kind === 'group' ? c.title : (other ? other.name : t('sc_chats')));
    }
    function subLine(c) {
      var bits = [t('sc_members_n', { n: c.members.length })];
      if (c.only_admins) bits.push(t('sc_only_admins_short'));
      if (c.slow_sec) bits.push('⏱ ' + fmtDur(c.slow_sec));
      if (c.autodel_sec) bits.push('🗑 ' + fmtDur(c.autodel_sec));
      return bits.join(' · ');
    }
    function applyBg() {
      var c = S.chat, mine = Social.styleOf('bg', me().prefs.chatBg);
      var bg = c && c.kind === 'group' && c.bg ? c.bg : mine;
      box.className = 'sc-chat sc-bg sc-bg--' + bg;
    }

    /* ---------- закреплённое ---------- */
    function drawPin() {
      var id = S.chat.pinned_msg_id;
      if (!id) { pinSlot.hidden = true; pinSlot.innerHTML = ''; return; }
      var m = S.msgs[id];
      var go = function () {
        if (S.nodes[id]) { flash(id); return; }
        Social.messages(S.id, { ids: [id] }).then(function (r) { if (r[0]) showMsgModal(r[0]); }, fail);
      };
      pinSlot.hidden = false; pinSlot.innerHTML = '';
      pinSlot.appendChild(el('button', { type: 'button', class: 'sc-chat__pinbtn', onclick: go, 'data-act': 'pinned' }, [
        el('span', { class: 'sc-chat__pinic', html: ic('pin') }),
        el('span', { class: 'sc-chat__pintext' }, [el('b', null, t('sc_pinned_msg')), el('bdi', { dir: 'auto' }, m ? preview(m, S.users, null, false) : '…')])
      ]));
      if (Social.can(S.chat, S.myId, 'pin')) pinSlot.appendChild(iconBtn('close', t('sc_unpin'), function () {
        Social.pinMessage(S.id, null).then(function () { S.chat.pinned_msg_id = null; drawPin(); }, fail);
      }, '', 'unpin-msg'));
    }
    function flash(id) {
      var n = S.nodes[id] && S.nodes[id].node; if (!n) return;
      n.scrollIntoView({ block: 'center', behavior: U.reducedMotion() ? 'auto' : 'smooth' });
      n.classList.remove('is-flash'); void n.offsetWidth; n.classList.add('is-flash');
    }
    function showMsgModal(m) {
      App.modal({ title: t('sc_pinned_msg'), content: el('div', { class: 'sc-msgs sc-msgs--single' }, msgNode(m, null, null).node) });
    }

    /* ---------- сообщения ---------- */
    function merge(list) {
      var changed = false, oldest = S.ids.length ? S.ids[0] : null;
      list.forEach(function (m) {
        var had = S.msgs[m.id];
        if (!had && oldest != null && m.id < oldest && S.hasMore) return;   // старое вне окна — догрузится при прокрутке
        if (!had || had.updated_at !== m.updated_at || JSON.stringify(had.reactions) !== JSON.stringify(m.reactions)) {
          S.msgs[m.id] = m; changed = true;
        }
        if (!S.since || Social.fmt.ms(m.updated_at) > Social.fmt.ms(S.since) || (Social.fmt.ms(m.updated_at) === Social.fmt.ms(S.since) && m.updated_at > S.since)) S.since = m.updated_at;
      });
      /* скрыть исчезнувшие по таймеру */
      var now = Date.now();
      Object.keys(S.msgs).forEach(function (k) { var x = S.msgs[k]; if (x.expires_at && Social.fmt.ms(x.expires_at) <= now) { delete S.msgs[k]; changed = true; } });
      S.ids = Object.keys(S.msgs).map(Number).sort(function (a, b) { return a - b; });
      return changed;
    }
    function sameRun(a, b) {
      return a && b && a.kind !== 'system' && b.kind !== 'system' && a.sender_id === b.sender_id &&
        Math.abs(Social.fmt.ms(b.created_at) - Social.fmt.ms(a.created_at)) < 5 * 60000 &&
        new Date(Social.fmt.ms(a.created_at)).toDateString() === new Date(Social.fmt.ms(b.created_at)).toDateString();
    }
    function readByOthers(m) {
      var t0 = Social.fmt.ms(m.created_at);
      return S.chat.members.some(function (x) { return x.user_id !== S.myId && Social.fmt.ms(x.last_read_at) >= t0; });
    }
    function msgNode(m, prev, next) {
      var users = S.users, u = users[m.sender_id] || { id: m.sender_id, name: '…', prefs: {} };
      if (m.kind === 'system') {
        return { sig: 'sys' + m.id + m.updated_at, node: el('div', { class: 'sc-sys', 'data-id': m.id }, el('span', null, sysText(m, users))) };
      }
      var out = m.sender_id === S.myId, isG = S.chat.kind !== 'direct';
      var first = !sameRun(prev, m), lastInRun = !sameRun(m, next);
      var style = bubbleOf(u), read = out && readByOthers(m);
      var sig = [m.id, m.updated_at, first, lastInRun, style, read, u.name, u.xp, (u.prefs || {}).nickStyle, JSON.stringify(m.reactions || [])].join('|');
      var bubKids = [];
      if (isG && !out && first) bubKids.push(el('span', { class: 'sc-bub__name' }, Social.nameEl(u, { size: 's' })));
      if (m.reply_to && !m.deleted) {
        var rm = S.msgs[m.reply_to];
        bubKids.push(el('button', { type: 'button', class: 'sc-bub__reply', onclick: function (e) { e.stopPropagation(); if (S.nodes[m.reply_to]) flash(m.reply_to); } }, [
          el('b', { dir: 'auto' }, rm ? ((users[rm.sender_id] || {}).name || '…') : t('sc_reply')),
          el('bdi', { dir: 'auto' }, rm ? (rm.deleted ? t('sc_deleted') : preview(rm, users, null, false)) : '…')
        ]));
      }
      var kindCls = m.deleted ? 'deleted' : m.kind;
      if (m.deleted) bubKids.push(el('span', { class: 'sc-bub__text sc-bub__text--deleted' }, [el('span', { html: ic('trash') }), t('sc_deleted')]));
      else if (m.kind === 'sticker') bubKids.push(el('span', { class: 'sc-sticker', role: 'img', 'aria-label': t('sc_sticker') }, m.body));
      else if (m.kind === 'photo') {
        var img = el('img', { class: 'sc-photo__img', alt: m.body || t('sc_photo'), decoding: 'async' });
        var ph = el('button', { type: 'button', class: 'sc-photo is-loading', 'aria-label': t('sc_open_photo'), 'data-act': 'photo',
          onclick: function (e) { e.stopPropagation(); if (img.src) viewPhoto(img.src); } }, img);
        img.onload = function () { ph.classList.remove('is-loading'); if (atBottom(img.naturalHeight + 120)) toBottom(); };
        Social.mediaUrl(m).then(function (src) { if (src) img.src = src; }, function () { ph.classList.add('is-broken'); });
        bubKids.push(ph);
        if (m.body) bubKids.push(el('span', { class: 'sc-bub__text', dir: 'auto' }, richText(m.body)));
      } else if (m.kind === 'file') {
        var a = el('a', { class: 'sc-file', href: '#', 'data-act': 'file', onclick: function (e) {
          e.preventDefault(); e.stopPropagation();
          Social.mediaUrl(m).then(function (src) { var l = el('a', { href: src, download: m.file_name || 'file' }); document.body.appendChild(l); l.click(); document.body.removeChild(l); }, fail);
        } }, [el('span', { class: 'sc-file__ic', html: ic('file') }), el('span', { class: 'sc-file__t' }, [el('bdi', { dir: 'auto' }, m.file_name || t('sc_file')), el('small', null, fmtSize(m.file_size))])]);
        bubKids.push(a);
        if (m.body) bubKids.push(el('span', { class: 'sc-bub__text', dir: 'auto' }, richText(m.body)));
      } else bubKids.push(el('span', { class: 'sc-bub__text', dir: 'auto' }, richText(m.body)));
      bubKids.push(el('span', { class: 'sc-bub__meta' }, [
        m.expires_at ? el('span', { class: 'sc-bub__timer', title: t('sc_autodel'), html: ic('clock') }) : null,
        m.edited_at && !m.deleted ? el('span', null, t('sc_edited')) : null,
        el('time', null, Social.fmt.time(m.created_at)),
        out && !m.deleted ? el('span', { class: 'sc-bub__tick' + (read ? ' is-read' : ''), 'aria-label': read ? t('sc_read') : t('sc_sent'),
          html: read ? '<svg viewBox="0 0 18 12" aria-hidden="true"><path d="M1 6.5 4.5 10 11 2M7.5 9.5 8 10l6.5-8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
                     : '<svg viewBox="0 0 18 12" aria-hidden="true"><path d="M4 6.5 7.5 10 14 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>' }) : null
      ]));
      var bub = el('div', { class: 'sc-bub sc-bub--' + style + ' sc-bub--' + (out ? 'out' : 'in') + ' sc-bub--k-' + kindCls + (lastInRun ? ' sc-bub--tail' : ''),
        tabindex: '0', role: 'button', 'aria-label': t('sc_msg_actions'),
        onclick: function () { msgSheet(m); },
        onkeydown: function (e) { if (e.key === 'Enter') msgSheet(m); } }, bubKids);
      var reacts = null;
      if ((m.reactions || []).length && !m.deleted) {
        reacts = el('div', { class: 'sc-reacts' }, m.reactions.map(function (r) {
          var mine = r.users.indexOf(S.myId) >= 0;
          return el('button', { type: 'button', class: 'sc-react' + (mine ? ' is-mine' : ''), 'data-emoji': r.emoji, 'aria-pressed': mine ? 'true' : 'false',
            title: r.users.map(function (x) { return (users[x] || {}).name || '…'; }).join(', '),
            onclick: function () { react(m, r.emoji); } }, [el('span', null, r.emoji), el('b', null, String(r.users.length))]);
        }));
      }
      var showAva = isG && !out;
      var node = el('div', { class: 'sc-msg sc-msg--' + (out ? 'out' : 'in') + (first ? ' sc-msg--first' : '') + (lastInRun ? ' sc-msg--last' : '') + (showAva ? ' sc-msg--ava' : ''), 'data-id': m.id }, [
        showAva ? el('span', { class: 'sc-msg__ava' }, lastInRun ? el('button', { type: 'button', class: 'sc-msg__avabtn', 'aria-label': u.name, onclick: function () { App.go('/user/' + u.id); } }, App.avatar(u, 32)) : null) : null,
        el('div', { class: 'sc-msg__col' }, [bub, reacts])
      ]);
      return { sig: sig, node: node };
    }
    function renderList(force) {
      var keepBottom = atBottom(80);
      var prevH = scroll.scrollHeight, prevTop = scroll.scrollTop;
      var frag = document.createDocumentFragment(), lastDay = null, nodes = {};
      if (S.hasMore && S.ids.length) frag.appendChild(el('div', { class: 'sc-more' }, el('button', { type: 'button', class: 'btn btn--ghost sc-btn-s', onclick: loadOlder, 'data-act': 'older' }, t('sc_load_older'))));
      if (!S.ids.length) frag.appendChild(el('div', { class: 'sc-hello' }, [el('span', { class: 'sc-hello__ic', html: ic('chat') }), el('span', null, t('sc_say_hi'))]));
      S.ids.forEach(function (id, i) {
        var m = S.msgs[id], prev = S.msgs[S.ids[i - 1]], next = S.msgs[S.ids[i + 1]];
        var day = new Date(Social.fmt.ms(m.created_at)).toDateString();
        if (day !== lastDay) { frag.appendChild(el('div', { class: 'sc-day' }, el('span', null, Social.fmt.day(m.created_at)))); lastDay = day; }
        if (S.firstUnread === id) frag.appendChild(el('div', { class: 'sc-unread-sep', id: 'sc-unread' }, el('span', null, t('sc_new_messages'))));
        var cached = S.nodes[id], built = msgNode(m, prev, next);
        if (!force && cached && cached.sig === built.sig) built = cached;
        built.node.classList.toggle('sc-msg--still', i < S.ids.length - 14);   // анимируем только последние
        nodes[id] = built;
        frag.appendChild(built.node);
      });
      S.nodes = nodes;
      list.innerHTML = '';
      list.appendChild(frag);
      if (keepBottom) toBottom(); else if (S._anchorOld) { scroll.scrollTop = prevTop + (scroll.scrollHeight - prevH); S._anchorOld = false; }
      drawPin();
    }
    function loadOlder() {
      if (S.loadingOld || !S.hasMore || !S.ids.length) return;
      S.loadingOld = true;
      Social.messages(S.id, { before: S.ids[0], limit: 60 }).then(function (r) {
        S.loadingOld = false;
        if (r.length < 60) S.hasMore = false;
        r.forEach(function (m) { S.msgs[m.id] = m; });
        S.ids = Object.keys(S.msgs).map(Number).sort(function (a, b) { return a - b; });
        S._anchorOld = true; renderList();
      }, function (e) { S.loadingOld = false; fail(e); });
    }
    scroll.addEventListener('scroll', function () {
      if (scroll.scrollTop < 60 && S.hasMore) loadOlder();
      if (atBottom(120)) { jump.hidden = true; jump.classList.remove('has-n'); markRead(); } else jump.hidden = false;
    });
    jump.addEventListener('click', function () { toBottom(true); });

    var readTimer = null;
    function markRead() {
      if (document.hidden) return;   // отметим в onVisible, когда экран станет видимым
      clearTimeout(readTimer);
      readTimer = setTimeout(function () { if (S.alive) Social.markRead(S.id).catch(function () {}); }, 600);
    }

    /* ---------- реакции и меню сообщения ---------- */
    function react(m, emoji) {
      Social.react(m.id, emoji).then(poll, fail);
    }
    function msgSheet(m) {
      if (m.deleted) {
        if (Social.can(S.chat, S.myId, 'delete') || m.sender_id === S.myId) return;
        return;
      }
      var ab = Social.abilities(S.chat, S.myId, S.chat.ctx);
      var out = m.sender_id === S.myId, mm;
      var items = [];
      var canWrite = !ab.blockReason;
      if (canWrite) items.push({ id: 'reply', icon: 'reply', label: t('sc_reply'), fn: function () { setReply(m); } });
      if (m.body && m.kind !== 'sticker') items.push({ id: 'copy', icon: 'copy', label: t('sc_copy'), fn: function () { copy(m.body); } });
      if (out && (m.kind === 'text' || m.kind === 'photo' || m.kind === 'file')) items.push({ id: 'edit', icon: 'pencil', label: t('sc_edit'), fn: function () { setEdit(m); } });
      if (ab.pin) items.push(S.chat.pinned_msg_id === m.id
        ? { id: 'unpin', icon: 'pin', label: t('sc_unpin'), fn: function () { Social.pinMessage(S.id, null).then(refreshChat, fail); } }
        : { id: 'pin', icon: 'pin', label: t('sc_pin_msg'), fn: function () { Social.pinMessage(S.id, m.id).then(function () { U.toast(t('sc_pinned_ok')); refreshChat(); }, fail); } });
      if (out || ab.del) items.push({ id: 'delete', icon: 'trash', label: out ? t('sc_delete') : t('sc_delete_for_all'), danger: true, fn: function () {
        Social.removeMessage(m).then(poll, fail);
      } });
      var u = S.users[m.sender_id];
      var reactRow = ab.react ? el('div', { class: 'sc-reactpick' }, Social.REACTIONS.map(function (e) {
        var mine = (m.reactions || []).some(function (r) { return r.emoji === e && r.users.indexOf(S.myId) >= 0; });
        return el('button', { type: 'button', class: 'sc-reactpick__e' + (mine ? ' is-mine' : ''), 'aria-label': e, 'data-emoji': e, onclick: function () { mm.close(); react(m, e); } }, e);
      })) : null;
      mm = App.modal({ title: '', content: el('div', null, [
        el('div', { class: 'sc-msgpv' }, [u ? Social.nameEl(u, { size: 's' }) : null, el('bdi', { dir: 'auto' }, preview(m, S.users, null, false)), el('small', { class: 'muted' }, Social.fmt.day(m.created_at) + ' ' + Social.fmt.time(m.created_at))]),
        reactRow,
        el('div', { class: 'sc-sheet' }, items.map(function (it) {
          return el('button', { type: 'button', class: 'sc-sheet__item' + (it.danger ? ' is-danger' : ''), 'data-act': it.id, onclick: function () { mm.close(); setTimeout(it.fn, 10); } },
            [el('span', { class: 'sc-sheet__ic', html: ic(it.icon) }), el('span', null, it.label)]);
        }))
      ]) });
      mm.el.classList.add('sc-sheet-modal');
    }
    function copy(text) {
      var ok = function () { U.toast(t('copied')); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(ok, function () { legacyCopy(text); ok(); });
      else { legacyCopy(text); ok(); }
    }
    function legacyCopy(text) {
      var ta = el('textarea', { style: 'position:fixed;top:-1000px' }); ta.value = text; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); } catch (e) { /* ignore */ }
      document.body.removeChild(ta);
    }
    function viewPhoto(src) {
      var m = App.modal({ title: t('sc_photo'), wide: true, content: el('div', { class: 'sc-viewer' }, el('img', { src: src, alt: '' })) });
      m.el.classList.add('sc-viewer-modal');
    }

    /* ---------- поле ввода ---------- */
    var ta = el('textarea', { class: 'sc-input', rows: '1', dir: 'auto', maxlength: '4000', 'aria-label': t('sc_type_message'), placeholder: t('sc_type_message') });
    var sendBtn = el('button', { type: 'button', class: 'sc-send', 'aria-label': t('sc_send'), 'data-act': 'send', html: ic('send') + '<span class="sc-send__n"></span>' });
    var attachBtn = iconBtn('clip', t('sc_attach'), function () { attach(); }, 'sc-comp__btn', 'attach');
    var stickBtn = iconBtn('smile', t('sc_stickers'), function () { stickers(); }, 'sc-comp__btn', 'stickers');
    var photoInput = el('input', { type: 'file', accept: 'image/*', class: 'sc-hidden-input sc-file-photo', tabindex: '-1', 'aria-hidden': 'true' });
    var fileInput = el('input', { type: 'file', class: 'sc-hidden-input sc-file-any', tabindex: '-1', 'aria-hidden': 'true' });
    var ctxBar = el('div', { class: 'sc-ctxbar', hidden: true });
    var row = el('div', { class: 'sc-comp__row' }, [attachBtn, stickBtn, el('div', { class: 'sc-comp__field' }, ta), sendBtn]);
    var notice = el('div', { class: 'sc-comp__notice', hidden: true });
    composer.appendChild(ctxBar); composer.appendChild(row); composer.appendChild(notice);
    composer.appendChild(photoInput); composer.appendChild(fileInput);

    function autosize() { ta.style.height = 'auto'; ta.style.height = Math.min(140, ta.scrollHeight) + 'px'; }
    ta.addEventListener('input', function () { autosize(); syncSend(); });
    ta.addEventListener('keydown', function (e) {
      if ((e.key === 'Enter' || e.keyCode === 13) && !e.shiftKey && !coarse && !e.isComposing) { e.preventDefault(); sendText(); }
      if (e.key === 'Escape' && (S.reply || S.edit)) { clearCtx(); }
    });
    sendBtn.addEventListener('click', sendText);
    function syncSend() { sendBtn.classList.toggle('is-ready', !!ta.value.trim()); }
    function drawComposer() {
      var ab = Social.abilities(S.chat, S.myId, S.chat.ctx);
      if (ab.blockReason) {
        row.hidden = true; ctxBar.hidden = true; notice.hidden = false;
        notice.innerHTML = '';
        notice.appendChild(el('span', { html: ic(ab.blockReason === 'sc_err_blocked' ? 'block' : 'lock') }));
        notice.appendChild(el('span', null, t(ab.blockReason)));
        return;
      }
      row.hidden = false; notice.hidden = true;
      attachBtn.hidden = !(ab.photo || ab.file);
      stickBtn.hidden = !ab.sticker;
      ta.disabled = !ab.text && !S.edit;
      var ph = ab.text ? t('sc_type_message') : t('sc_err_no_text');
      if (S.chat.kind === 'group' && S.chat.slow_sec && (ab.role === 'member')) ph = t('sc_slow_ph', { d: fmtDur(S.chat.slow_sec) });
      ta.setAttribute('placeholder', ph);
      tickCooldown();
    }
    var cdTimer = null;
    function tickCooldown() {
      clearTimeout(cdTimer);
      var left = Math.ceil((S.cooldownUntil - Date.now()) / 1000);
      var n = sendBtn.querySelector('.sc-send__n');
      if (left > 0) { sendBtn.classList.add('is-cool'); n.textContent = String(left); sendBtn.disabled = true; cdTimer = setTimeout(tickCooldown, 500); }
      else { sendBtn.classList.remove('is-cool'); n.textContent = ''; sendBtn.disabled = false; }
    }
    function startCooldown(sec) { S.cooldownUntil = Date.now() + sec * 1000; tickCooldown(); }
    function afterSent(m) {
      var mem = Social.memberOf(S.chat, S.myId);
      if (mem) { mem.last_sent_at = m.created_at; mem.last_read_at = m.created_at; }
      if (S.chat.kind === 'group' && S.chat.slow_sec && mem && mem.role === 'member') startCooldown(S.chat.slow_sec);
      merge([m]); renderList(); toBottom(true);
    }
    function onSendErr(e) {
      e = Social.normErr(e);
      if (e.code === 'sc_err_slow' && e.n) startCooldown(e.n);
      fail(e);
      if (['sc_err_only_admins', 'sc_err_restricted', 'sc_err_not_friends', 'sc_err_blocked', 'sc_err_not_member'].indexOf(e.code) >= 0) refreshChat();
    }
    function sendText() {
      var txt = ta.value;
      if (!txt.trim()) { ta.focus(); return; }
      if (S.edit) {
        var em = S.edit;
        Social.edit(em.id, txt).then(function (m) { clearCtx(); ta.value = ''; autosize(); syncSend(); merge([m]); renderList(); }, fail);
        return;
      }
      var reply = S.reply ? S.reply.id : null;
      var pre = Social.sendCheck(S.chat, S.myId, 'text', txt, null, S.chat.ctx);
      if (pre) { onSendErr(Social.normErr({ code: pre.code, n: pre.n, message: pre.code })); if (pre.code === 'sc_err_slow') startCooldown(pre.n); return; }
      ta.value = ''; autosize(); syncSend(); clearCtx();
      Social.send(S.id, { kind: 'text', body: txt, reply_to: reply }).then(afterSent, function (e) {
        if (!ta.value) { ta.value = txt; autosize(); syncSend(); }
        onSendErr(e);
      });
      if (!coarse) ta.focus();
    }
    function setReply(m) {
      S.edit = null; S.reply = m;
      ctxBar.hidden = false; ctxBar.innerHTML = '';
      ctxBar.appendChild(el('span', { class: 'sc-ctxbar__ic', html: ic('reply') }));
      ctxBar.appendChild(el('span', { class: 'sc-ctxbar__t' }, [el('b', null, t('sc_reply_to', { name: (S.users[m.sender_id] || {}).name || '…' })), el('bdi', { dir: 'auto' }, preview(m, S.users, null, false))]));
      ctxBar.appendChild(iconBtn('close', t('sc_cancel'), clearCtx, '', 'ctx-close'));
      ta.focus();
    }
    function setEdit(m) {
      S.reply = null; S.edit = m;
      ctxBar.hidden = false; ctxBar.innerHTML = '';
      ctxBar.appendChild(el('span', { class: 'sc-ctxbar__ic', html: ic('pencil') }));
      ctxBar.appendChild(el('span', { class: 'sc-ctxbar__t' }, [el('b', null, t('sc_editing')), el('bdi', { dir: 'auto' }, m.body || '')]));
      ctxBar.appendChild(iconBtn('close', t('sc_cancel'), function () { clearCtx(); ta.value = ''; autosize(); syncSend(); }, '', 'ctx-close'));
      ta.disabled = false; ta.value = m.body || ''; autosize(); syncSend(); ta.focus();
    }
    function clearCtx() { S.reply = null; S.edit = null; ctxBar.hidden = true; ctxBar.innerHTML = ''; if (S.chat) drawComposer(); }

    function attach() {
      var ab = Social.abilities(S.chat, S.myId, S.chat.ctx);
      if (ab.photo && !ab.file) { photoInput.click(); return; }
      if (ab.file && !ab.photo) { fileInput.click(); return; }
      var mm = App.modal({ title: t('sc_attach'), content: el('div', { class: 'sc-sheet' }, [
        el('button', { type: 'button', class: 'sc-sheet__item', 'data-act': 'attach-photo', onclick: function () { mm.close(); photoInput.click(); } }, [el('span', { class: 'sc-sheet__ic', html: ic('image') }), el('span', null, t('sc_photo'))]),
        el('button', { type: 'button', class: 'sc-sheet__item', 'data-act': 'attach-file', onclick: function () { mm.close(); fileInput.click(); } }, [el('span', { class: 'sc-sheet__ic', html: ic('file') }), el('span', null, t('sc_file'))])
      ]) });
      mm.el.classList.add('sc-sheet-modal');
    }
    photoInput.addEventListener('change', function () {
      var f = photoInput.files && photoInput.files[0]; photoInput.value = '';
      if (!f) return;
      Social.compressImage(f).then(function (img) { mediaPreview({ kind: 'photo', photo: img.data }); }, fail);
    });
    fileInput.addEventListener('change', function () {
      var f = fileInput.files && fileInput.files[0]; fileInput.value = '';
      if (!f) return;
      Social.readFile(f, Social.FILE_LIMIT).then(function (file) { mediaPreview({ kind: 'file', file: file }); }, fail);
    });
    function mediaPreview(p) {
      var cap = el('input', { class: 'input', type: 'text', maxlength: '1000', dir: 'auto', placeholder: t('sc_caption'), 'aria-label': t('sc_caption') });
      var send = btn('btn--primary', 'send', t('sc_send'), null, 'send-media');
      var pv = p.kind === 'photo' ? el('div', { class: 'sc-mpv' }, el('img', { src: p.photo, alt: '' }))
        : el('div', { class: 'sc-file sc-file--pv' }, [el('span', { class: 'sc-file__ic', html: ic('file') }), el('span', { class: 'sc-file__t' }, [el('bdi', { dir: 'auto' }, p.file.name), el('small', null, fmtSize(p.file.size))])]);
      var m = App.modal({ title: p.kind === 'photo' ? t('sc_send_photo') : t('sc_send_file'), content: el('div', { class: 'sc-mpvbox' }, [pv, cap, send]) });
      function go() {
        var body = cap.value.trim() || null;
        var pre = Social.sendCheck(S.chat, S.myId, p.kind, body, p.file ? p.file.name : null, S.chat.ctx);
        if (pre) { if (pre.code === 'sc_err_slow') startCooldown(pre.n); fail(Social.normErr({ code: pre.code, n: pre.n })); return; }
        send.disabled = true;
        Social.send(S.id, { kind: p.kind, photo: p.photo, file: p.file, body: body, reply_to: S.reply ? S.reply.id : null }).then(function (msg) {
          m.close(); clearCtx(); afterSent(msg);
        }, function (e) { send.disabled = false; onSendErr(e); });
      }
      send.addEventListener('click', go);
      cap.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); go(); } });
    }
    function stickers() {
      var mm = App.modal({ title: t('sc_stickers'), content: el('div', { class: 'sc-stickers' }, Social.STICKERS.map(function (s) {
        return el('button', { type: 'button', class: 'sc-stickers__s', 'aria-label': s, 'data-sticker': s, onclick: function () {
          var pre = Social.sendCheck(S.chat, S.myId, 'sticker', s, null, S.chat.ctx);
          if (pre) { if (pre.code === 'sc_err_slow') startCooldown(pre.n); fail(Social.normErr({ code: pre.code, n: pre.n })); return; }
          mm.close();
          Social.send(S.id, { kind: 'sticker', body: s, reply_to: S.reply ? S.reply.id : null }).then(function (msg) { clearCtx(); afterSent(msg); }, onSendErr);
        } }, s);
      })) });
      mm.el.classList.add('sc-sheet-modal');
    }

    /* ---------- загрузка и опрос ---------- */
    function refreshChat() {
      return Promise.all([Social.chat(S.id), Social.users()]).then(function (r) {
        if (!S.alive) return;
        S.chat = r[0]; S.users = r[1];
        S.chat.members.forEach(function (m) { S.users[m.user_id] = m.user; });
        drawHead(); applyBg(); drawComposer(); drawPin();
      });
    }
    function readSig() {
      return ((S.chat && S.chat.members) || []).filter(function (m) { return m.user_id !== S.myId; })
        .map(function (m) { return m.user_id + ':' + m.last_read_at; }).join('|');
    }
    var polling = false;
    function poll() {
      if (!S.alive || polling) return Promise.resolve();
      polling = true;
      S.polls++;
      /* участники (а с ними и «прочитано» ✓✓) обновляются: в личном чате раз в 6 с, в группе раз в 15 с */
      var every = S.chat && S.chat.kind === 'direct' ? 2 : 5;
      var extra = S.polls % every === 0 ? refreshChat().catch(function () {}) : Promise.resolve();
      return Promise.all([Social.messages(S.id, S.since ? { since: S.since } : { limit: 60 }), extra]).then(function (r) {
        polling = false;
        if (!S.alive) return;
        var fresh = r[0], wasBottom = atBottom(80);
        var newFromOthers = fresh.filter(function (m) { return !S.msgs[m.id] && m.sender_id !== S.myId && m.kind !== 'system'; }).length;
        var sys = fresh.some(function (m) { return !S.msgs[m.id] && m.kind === 'system'; });
        var rs = readSig();
        if (merge(fresh)) {
          renderList(S.polls % 5 === 0 || rs !== S.readSig);
          if (newFromOthers && !wasBottom) { jump.hidden = false; jump.classList.add('has-n'); jump.querySelector('.sc-jump__n').textContent = String(newFromOthers); }
          if (newFromOthers && wasBottom) markRead();
        }
        else if (rs !== S.readSig) renderList(true);   // собеседник прочитал — перерисовать галочки
        S.readSig = rs;
        if (sys) refreshChat().catch(function () {});
      }, function (e) {
        polling = false;
        e = Social.normErr(e);
        if (e.code === 'sc_err_not_member' && S.alive) { U.toast(t('sc_err_not_member')); App.go('/chats'); }
      });
    }
    function onSocial(e) { if (e && (e.detail === 'storage' || e.detail === 'push')) poll(); }
    document.addEventListener('socialchange', onSocial);
    /* вернулся в приложение (например, нажал на уведомление) — сразу отмечаем прочитанным */
    function onVisible() { if (!document.hidden && S.alive) { poll(); if (atBottom(200)) markRead(); } }
    document.addEventListener('visibilitychange', onVisible);
    window.addEventListener('focus', onVisible);
    /* «я сейчас в этом чате»: раз в 15 секунд отмечаем прочитанным — сервер не шлёт пуш ни на одно моё устройство */
    var beats = 0;
    var timer = setInterval(function () {
      if (document.hidden) return;
      poll();
      if (++beats % 5 === 0 && (!document.hasFocus || document.hasFocus()) && atBottom(200)) Social.markRead(S.id).catch(function () {});
    }, 3000);

    Promise.all([refreshChat(), Social.messages(S.id, { limit: 60 })]).then(function (r) {
      if (!S.alive) return;
      var msgs = r[1];
      if (msgs.length < 60) S.hasMore = false;
      var my = Social.memberOf(S.chat, S.myId);
      var lr = my ? Social.fmt.ms(my.last_read_at) : 0;
      var fu = msgs.filter(function (m) { return m.sender_id !== S.myId && m.kind !== 'system' && Social.fmt.ms(m.created_at) > lr; })[0];
      S.firstUnread = fu ? fu.id : null;
      merge(msgs);
      if (!S.since) S.since = S.chat.created_at;
      renderList(true);
      fitHeight();
      var sep = document.getElementById('sc-unread');
      if (sep && sep.offsetTop > scroll.clientHeight) scroll.scrollTop = sep.offsetTop - 80; else toBottom();
      markRead();
      if (!coarse && !ta.disabled) ta.focus();
    }, function (e) {
      list.innerHTML = '';
      list.appendChild(el('div', { class: 'card empty sc-chat__err' }, [Social.errText(e), el('div', { style: 'margin-top:12px' }, btn('', 'back', t('sc_back'), function () { App.go('/chats'); }))]));
    });

    /* ===================================================================
       НАСТРОЙКИ ГРУППЫ (как в Telegram)
       =================================================================== */
    function openGroupInfo(tab) {
      var c = S.chat; if (!c || c.kind !== 'group') return;
      var ab = Social.abilities(c, S.myId, null);
      var tabsList = [{ id: 'info', label: t('sc_tab_info') }, { id: 'members', label: t('sc_tab_members') }];
      if (ab.settings) { tabsList.push({ id: 'perms', label: t('sc_tab_perms') }); tabsList.push({ id: 'settings', label: t('sc_tab_settings') }); }
      var body = el('div', { class: 'sc-gi__body' });
      var m = App.modal({ title: c.title, wide: true, content: el('div', { class: 'sc-gi' }, [
        el('div', { class: 'sc-gi__tabs' }, seg(tabsList, tab, show, 'gi-tab')), body
      ]) });
      m.el.classList.add('sc-gi-modal');
      function reload(next) {
        refreshChat().then(function () { c = S.chat; ab = Social.abilities(c, S.myId, null); show(next || cur); }, fail);
      }
      var cur = tab;
      function show(which) {
        cur = which; body.innerHTML = '';
        if (which === 'info') body.appendChild(infoTab());
        else if (which === 'members') body.appendChild(membersTab());
        else if (which === 'perms') body.appendChild(permsTab());
        else body.appendChild(settingsTab());
      }
      function infoTab() {
        var wrap = el('div', { class: 'sc-gi__info' });
        var titleI = el('input', { class: 'input', type: 'text', maxlength: '64', dir: 'auto', 'data-act': 'gi-title', disabled: !ab.info });
        titleI.value = c.title || '';
        var aboutI = el('textarea', { class: 'input', rows: '2', maxlength: '300', dir: 'auto', 'data-act': 'gi-about', disabled: !ab.info, placeholder: t('sc_about_ph') });
        aboutI.value = c.about || '';
        var bg = c.bg || null;
        wrap.appendChild(el('div', { class: 'sc-gi__hero' }, [groupAva(c, 72), el('div', null, [el('b', { dir: 'auto' }, c.title), el('div', { class: 'muted' }, subLine(c))])]));
        wrap.appendChild(el('label', { class: 'field' }, [el('span', { class: 'field__label' }, t('sc_group_name')), titleI]));
        wrap.appendChild(el('label', { class: 'field' }, [el('span', { class: 'field__label' }, t('sc_about')), aboutI]));
        if (ab.info) {
          var bgHost = el('div');
          var useOwn = sw(!bg, function (on) { bg = on ? null : (bg || 'dots'); drawBg(); }, false, 'gi-bg-own');
          var drawBg = function () {
            bgHost.innerHTML = '';
            if (bg) bgHost.appendChild(Social.bgPicker({ current: bg, level: Store.effectiveLevel(), onPick: function (id) { bg = id; } }));
          };
          wrap.appendChild(el('div', { class: 'settings-row' }, [el('div', { class: 'settings-row__text' }, [el('span', { class: 'settings-row__ic', html: ic('palette') }),
            el('div', null, [el('b', null, t('sc_group_bg')), el('div', { class: 'muted settings-row__hint' }, t('sc_group_bg_hint'))])]), useOwn]));
          wrap.appendChild(bgHost); drawBg();
          wrap.appendChild(el('div', { class: 'sc-gi__save' }, btn('btn--ok', 'check', t('save'), function () {
            Social.groupUpdate(S.id, { title: titleI.value, about: aboutI.value, bg: bg }).then(function () { U.toast(t('saved')); m.close(); refreshChat(); }, fail);
          }, 'gi-save')));
        } else if (c.about) wrap.appendChild(el('p', { dir: 'auto' }, c.about));
        var my = Social.memberOf(c, S.myId) || {};
        wrap.appendChild(el('div', { class: 'sc-gi__danger' }, my.role === 'owner'
          ? btn('btn--danger', 'trash', t('sc_delete_group'), function () {
              confirmBox(t('sc_delete_group_q'), t('sc_delete_group'), function () { Social.groupDelete(S.id).then(function () { m.close(); App.go('/chats'); }, fail); });
            }, 'gi-delete')
          : btn('btn--danger', 'leave', t('sc_leave'), function () {
              confirmBox(t('sc_leave_q'), t('sc_leave'), function () { Social.leave(S.id).then(function () { m.close(); App.go('/chats'); }, fail); });
            }, 'gi-leave')));
        return wrap;
      }
      function roleChip(mb) {
        if (mb.role === 'owner') return el('span', { class: 'chip sc-chip sc-chip--gold', html: ic('crown') + '<span>' + U.esc(t('sc_owner')) + '</span>' });
        if (mb.role === 'admin') return el('span', { class: 'chip sc-chip', html: ic('shield') + '<span>' + U.esc(t('sc_admin')) + '</span>' });
        if (Social.isRestricted(mb)) return el('span', { class: 'chip sc-chip sc-chip--bad' }, mb.restricted_until === 'infinity' ? t('sc_restricted') : t('sc_restricted_until', { d: fmtDate(mb.restricted_until) }));
        return null;
      }
      function membersTab() {
        var wrap = el('div');
        if (ab.add) wrap.appendChild(btn('btn--primary sc-gi__add', 'userPlus', t('sc_add_members'), function () {
          var ex = {}; c.members.forEach(function (x) { ex[x.user_id] = 1; });
          pickFriends({ title: t('sc_add_members'), multi: true, exclude: ex, max: Social.MAX_GROUP - c.members.length + 1, okLabel: t('sc_add'), onDone: function (ids) {
            if (!ids.length) return;
            Social.groupAdd(S.id, ids).then(function () { U.toast(t('saved')); reload('members'); poll(); }, fail);
          } });
        }, 'gi-add'));
        wrap.appendChild(el('div', { class: 'muted sc-gi__count' }, t('sc_members_of', { n: c.members.length, max: Social.MAX_GROUP })));
        var order = { owner: 0, admin: 1, member: 2 };
        var mems = c.members.slice().sort(function (a, b) { return order[a.role] - order[b.role] || String(a.user.name).localeCompare(String(b.user.name)); });
        wrap.appendChild(el('div', { class: 'sc-list sc-gi__list' }, mems.map(function (mb) {
          return el('button', { type: 'button', class: 'sc-row sc-row--btn', 'data-uid': mb.user_id, onclick: function () { memberSheet(mb); } }, [
            el('span', { class: 'sc-row__main' }, [el('span', { class: 'sc-row__ava' }, App.avatar(mb.user, 44)),
              el('span', { class: 'sc-row__text' }, [Social.nameEl(mb.user), el('span', { class: 'sc-row__sub' }, [roleChip(mb), mb.user_id === S.myId ? el('span', { class: 'chip sc-chip' }, t('sc_rel_self')) : null])])]),
            el('span', { class: 'sc-row__side', html: ic('more') })
          ]);
        })));
        if (ab.ban && c.bans && c.bans.length) {
          wrap.appendChild(el('div', { class: 'section-label' }, t('sc_banned_list')));
          wrap.appendChild(el('div', { class: 'sc-list' }, c.bans.map(function (b) {
            return el('div', { class: 'sc-row sc-row--red' }, [
              el('span', { class: 'sc-row__main' }, [el('span', { class: 'sc-row__ava' }, App.avatar(b.user, 40)),
                el('span', { class: 'sc-row__text' }, [Social.nameEl(b.user, { red: true }), el('small', { class: 'muted' }, b.until ? t('sc_until', { d: fmtDate(b.until) }) : t('sc_forever'))])]),
              el('span', { class: 'sc-row__side' }, el('button', { type: 'button', class: 'btn sc-btn-s', 'data-act': 'unban', onclick: function () {
                Social.memberAction(S.id, b.user_id, 'unban').then(function () { reload('members'); }, fail);
              } }, t('sc_unban')))
            ]);
          })));
        }
        return wrap;
      }
      function memberSheet(mb) {
        var my = Social.memberOf(c, S.myId) || {}, items = [];
        var self = mb.user_id === S.myId;
        var overAdmin = mb.role !== 'admin' || my.role === 'owner' || mb.promoted_by === S.myId;
        items.push({ id: 'profile', icon: 'user', label: t('sc_open_profile'), fn: function () { m.close(); App.go('/user/' + mb.user_id); } });
        if (!self && mb.role !== 'owner') {
          if (ab.promote && overAdmin) items.push({ id: 'promote', icon: 'shield', label: mb.role === 'admin' ? t('sc_edit_rights') : t('sc_make_admin'), fn: function () { rightsEditor(mb); } });
          if (mb.role === 'admin' && (my.role === 'owner' || (ab.promote && mb.promoted_by === S.myId))) items.push({ id: 'demote', icon: 'userMinus', label: t('sc_remove_admin'), fn: function () {
            Social.memberAction(S.id, mb.user_id, 'demote').then(function () { reload('members'); }, fail);
          } });
          if (ab.ban && overAdmin) {
            if (Social.isRestricted(mb)) items.push({ id: 'unrestrict', icon: 'check', label: t('sc_unrestrict'), fn: function () { Social.memberAction(S.id, mb.user_id, 'unrestrict').then(function () { reload('members'); }, fail); } });
            else items.push({ id: 'restrict', icon: 'lock', label: t('sc_restrict'), fn: function () { untilPicker(t('sc_restrict'), function (until) { Social.memberAction(S.id, mb.user_id, 'restrict', until).then(function () { U.toast(t('saved')); reload('members'); }, fail); }); } });
            items.push({ id: 'kick', icon: 'leave', label: t('sc_kick'), danger: true, fn: function () { Social.memberAction(S.id, mb.user_id, 'kick').then(function () { reload('members'); poll(); }, fail); } });
            items.push({ id: 'ban', icon: 'block', label: t('sc_ban'), danger: true, fn: function () { untilPicker(t('sc_ban'), function (until) { Social.memberAction(S.id, mb.user_id, 'ban', until).then(function () { reload('members'); poll(); }, fail); }); } });
          }
        }
        var sm = App.modal({ title: '', content: el('div', null, [
          el('div', { class: 'sc-sheet__head' }, [App.avatar(mb.user, 52), el('div', { class: 'sc-sheet__who' }, [Social.nameEl(mb.user, { size: 'l' }), el('div', { class: 'sc-sheet__sub' }, roleChip(mb))])]),
          el('div', { class: 'sc-sheet' }, items.map(function (it) {
            return el('button', { type: 'button', class: 'sc-sheet__item' + (it.danger ? ' is-danger' : ''), 'data-act': it.id, onclick: function () { sm.close(); setTimeout(it.fn, 10); } },
              [el('span', { class: 'sc-sheet__ic', html: ic(it.icon) }), el('span', null, it.label)]);
          }))
        ]) });
        sm.el.classList.add('sc-sheet-modal');
      }
      function rightsEditor(mb) {
        var my = Social.memberOf(c, S.myId) || {};
        var r = {}; ['info', 'delete', 'ban', 'add', 'pin', 'promote'].forEach(function (k) { r[k] = mb.role === 'admin' ? !!mb.rights[k] : (k !== 'promote'); });
        var rows = ['info', 'delete', 'ban', 'add', 'pin', 'promote'].map(function (k) {
          var mine = my.role === 'owner' || !!(my.rights || {})[k];
          if (!mine) r[k] = false;
          return el('div', { class: 'settings-row' }, [el('div', { class: 'settings-row__text' }, el('b', null, t('sc_right_' + k))),
            sw(r[k], function (on) { r[k] = on; }, !mine, 'right-' + k)]);
        });
        var rm = App.modal({ title: t('sc_admin_rights'), content: el('div', null, [
          el('div', { class: 'sc-sheet__head' }, [App.avatar(mb.user, 44), Social.nameEl(mb.user)]),
          el('div', { class: 'card sc-gi__card' }, rows),
          el('div', { class: 'sc-gi__save' }, btn('btn--ok', 'check', t('save'), function () {
            Social.memberAction(S.id, mb.user_id, 'promote', null, r).then(function () { rm.close(); U.toast(t('saved')); reload('members'); }, fail);
          }, 'rights-save'))
        ]) });
      }
      function untilPicker(title, cb) {
        var custom = el('input', { class: 'input', type: 'datetime-local', 'aria-label': t('sc_until_date') });
        var opts = [[3600, t('sc_1h')], [86400, t('sc_1d')], [604800, t('sc_1w')], [0, t('sc_forever')]];
        var um = App.modal({ title: title, content: el('div', null, [
          el('div', { class: 'sc-sheet' }, opts.map(function (o) {
            return el('button', { type: 'button', class: 'sc-sheet__item', 'data-act': 'until-' + o[0], onclick: function () {
              um.close(); cb(o[0] ? new Date(Date.now() + o[0] * 1000).toISOString() : null);
            } }, [el('span', { class: 'sc-sheet__ic', html: ic('clock') }), el('span', null, o[1])]);
          })),
          el('label', { class: 'field', style: 'margin-top:12px' }, [el('span', { class: 'field__label' }, t('sc_until_date')), custom]),
          btn('btn--primary', 'check', t('sc_apply'), function () {
            var v = custom.value ? new Date(custom.value) : null;
            if (!v || isNaN(v.getTime()) || v.getTime() < Date.now()) { custom.focus(); return; }
            um.close(); cb(v.toISOString());
          }, 'until-custom')
        ]) });
        um.el.classList.add('sc-sheet-modal');
      }
      function permsTab() {
        var keys = ['text', 'photos', 'files', 'stickers', 'links', 'reactions', 'add', 'pin', 'info'];
        var icons = { text: 'chat', photos: 'image', files: 'file', stickers: 'sticker', links: 'globe', reactions: 'smile', add: 'userPlus', pin: 'pin', info: 'pencil' };
        return el('div', null, [
          el('p', { class: 'muted' }, t('sc_perms_lead')),
          el('div', { class: 'card sc-gi__card' }, keys.map(function (k) {
            return el('div', { class: 'settings-row' }, [
              el('div', { class: 'settings-row__text' }, [el('span', { class: 'settings-row__ic', html: ic(icons[k]) }), el('b', null, t('sc_perm_' + k))]),
              sw(c.perms[k], function (on, inp) {
                var p = {}; p[k] = on;
                Social.groupUpdate(S.id, { perms: p }).then(function () { c.perms[k] = on; U.toast(t('saved')); refreshChat(); }, function (e) { inp.checked = !on; fail(e); });
              }, false, 'perm-' + k)
            ]);
          }))
        ]);
      }
      function settingsTab() {
        var wrap = el('div');
        function upd(patch, okMsg) { return Social.groupUpdate(S.id, patch).then(function () { U.toast(okMsg || t('saved')); return refreshChat().then(function () { c = S.chat; }); }, fail); }
        var card = el('div', { class: 'card sc-gi__card' });
        card.appendChild(el('div', { class: 'settings-row' }, [
          el('div', { class: 'settings-row__text' }, [el('span', { class: 'settings-row__ic', html: ic('shield') }), el('div', null, [el('b', null, t('sc_only_admins')), el('div', { class: 'muted settings-row__hint' }, t('sc_only_admins_hint'))])]),
          sw(c.only_admins, function (on) { upd({ only_admins: on }); }, false, 'set-only-admins')
        ]));
        var slowOpts = [[0, t('sc_off')], [10, '10s'], [30, '30s'], [60, '1m'], [300, '5m'], [900, '15m'], [3600, '1h']].map(function (o) { return { id: o[0], label: o[1] }; });
        card.appendChild(el('div', { class: 'settings-row' }, [
          el('div', { class: 'settings-row__text' }, [el('span', { class: 'settings-row__ic', html: ic('clock') }), el('div', null, [el('b', null, t('sc_slow')), el('div', { class: 'muted settings-row__hint' }, t('sc_slow_hint'))])]),
          seg(slowOpts, c.slow_sec, function (v) { upd({ slow_sec: v }); }, 'set-slow')
        ]));
        var adOpts = [{ id: 0, label: t('sc_off') }, { id: 3600, label: t('sc_1h') }, { id: 86400, label: t('sc_1d') }, { id: 604800, label: t('sc_1w') }, { id: 'custom', label: t('sc_custom') }];
        var known = [0, 3600, 86400, 604800].indexOf(c.autodel_sec) >= 0;
        var hours = el('input', { class: 'input sc-gi__hours', type: 'number', min: '1', max: '8784', inputmode: 'numeric', 'aria-label': t('sc_hours'), 'data-act': 'set-autodel-hours' });
        hours.value = known ? '' : String(Math.round(c.autodel_sec / 3600) || '');
        var customRow = el('div', { class: 'sc-gi__custom', hidden: known }, [hours, el('span', null, t('sc_hours')),
          btn('', 'check', t('sc_apply'), function () { var h = parseInt(hours.value, 10); if (!(h > 0)) { hours.focus(); return; } upd({ autodel_sec: h * 3600 }); }, 'set-autodel-apply')]);
        card.appendChild(el('div', { class: 'settings-row' }, [
          el('div', { class: 'settings-row__text' }, [el('span', { class: 'settings-row__ic', html: ic('trash') }), el('div', null, [el('b', null, t('sc_autodel')), el('div', { class: 'muted settings-row__hint' }, t('sc_autodel_hint'))])]),
          el('div', { class: 'sc-gi__col' }, [seg(adOpts, known ? c.autodel_sec : 'custom', function (v) {
            if (v === 'custom') { customRow.hidden = false; hours.focus(); return; }
            customRow.hidden = true; upd({ autodel_sec: v });
          }, 'set-autodel'), customRow])
        ]));
        card.appendChild(el('div', { class: 'settings-row' }, [
          el('div', { class: 'settings-row__text' }, [el('span', { class: 'settings-row__ic', html: ic('users') }), el('div', null, [el('b', null, t('sc_autodel_scope')), el('div', { class: 'muted settings-row__hint' }, t('sc_autodel_scope_hint'))])]),
          seg([{ id: 'all', label: t('sc_scope_all') }, { id: 'except_admins', label: t('sc_scope_except') }], c.autodel_scope, function (v) { upd({ autodel_scope: v }); }, 'set-scope')
        ]));
        wrap.appendChild(card);
        var words = el('textarea', { class: 'input', rows: '3', dir: 'auto', placeholder: t('sc_banned_ph'), 'data-act': 'set-words' });
        words.value = (c.banned_words || []).join(', ');
        wrap.appendChild(el('div', { class: 'section-label' }, t('sc_banned_words')));
        wrap.appendChild(el('div', { class: 'card sc-gi__card' }, [
          el('p', { class: 'muted', style: 'margin-top:0' }, t('sc_banned_hint')), words,
          el('div', { class: 'sc-gi__save' }, btn('btn--ok', 'check', t('save'), function () {
            upd({ banned_words: words.value.split(/[,\n]/) });
          }, 'set-words-save'))
        ]));
        return wrap;
      }
      show(tab);
    }
    function confirmBox(text, okLabel, onOk) {
      var cm = App.modal({ title: '', content: el('div', { class: 'sc-confirm' }, [el('p', null, text), el('div', { class: 'sc-confirm__btns' }, [
        btn('btn--ghost', null, t('sc_cancel'), function () { cm.close(); }),
        btn('btn--danger-solid', null, okLabel, function () { cm.close(); onOk(); }, 'confirm')
      ])]) });
      cm.el.classList.add('sc-sheet-modal');
    }

    return function () {
      S.alive = false;
      clearInterval(timer); clearTimeout(readTimer); clearTimeout(cdTimer);
      document.removeEventListener('socialchange', onSocial);
      document.removeEventListener('visibilitychange', onVisible);
      window.removeEventListener('focus', onVisible);
      window.removeEventListener('resize', onVV);
      if (window.visualViewport) window.visualViewport.removeEventListener('resize', onVV);
      document.body.classList.remove('sc-chat-open');
    };
  });

  function fmtDur(s) {
    if (s % 86400 === 0 && s >= 86400) return t('sc_dur_d', { n: s / 86400 });
    if (s % 3600 === 0 && s >= 3600) return t('sc_dur_h', { n: s / 3600 });
    if (s % 60 === 0 && s >= 60) return t('sc_dur_m', { n: s / 60 });
    return t('sc_dur_s', { n: s });
  }
  function fmtDate(iso) {
    var d = new Date(Social.fmt.ms(iso));
    try { return d.toLocaleString(I18N.lang === 'he' ? 'he-IL' : I18N.lang === 'ru' ? 'ru-RU' : 'en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }); }
    catch (e) { return d.toString(); }
  }

  I18N.add({
    he: {
      sc_mute: 'השתקה', sc_unmute: 'ביטול השתקה', sc_muted: 'מושתק', sc_muted_on: 'הצ׳אט הושתק', sc_muted_off: 'ההתראות של הצ׳אט הופעלו',
      sc_mute_hint: 'קליק ימני או לחיצה ארוכה: השתקה',
      sc_nav_chats: 'צ׳אטים', sc_chats: 'צ׳אטים', sc_chats_lead: 'שיחות עם חברים וקבוצות לימוד.', sc_new_chat: 'צ׳אט חדש', sc_new_group: 'קבוצה חדשה',
      sc_chat_style: 'עיצוב צ׳אט', sc_chat_style_lead: 'סגנון הבועות שלך רואים כולם. הרקע — רק אצלך.', sc_bubble_style: 'בועות', sc_chat_bg: 'רקע',
      sc_sample_q: 'מתי המבחן? 🤔', sc_sample_a: 'ביום ראשון! בהצלחה 💪',
      sc_no_chats: 'עוד אין צ׳אטים', sc_no_chats_hint: 'הוסיפו חברים בדף ״אנשים״ ותתחילו לכתוב.', sc_no_messages: 'אין הודעות', sc_no_friends_chat: 'צריך קודם להוסיף חברים',
      sc_you: 'את/ה', sc_photo: 'תמונה', sc_file: 'קובץ', sc_sticker: 'מדבקה', sc_group_name: 'שם הקבוצה', sc_create: 'ליצור', sc_add: 'להוסיף',
      sc_selected: 'נבחרו {n} (עד {max})', sc_back: 'חזרה', sc_direct: 'צ׳אט אישי', sc_not_friends_now: 'כבר לא חברים', sc_members_n: '{n} משתתפים',
      sc_only_admins_short: 'רק מנהלים כותבים', sc_group_settings: 'הגדרות קבוצה', sc_pinned_msg: 'הודעה מוצמדת', sc_to_bottom: 'למטה',
      sc_load_older: 'הודעות קודמות', sc_say_hi: 'עוד אין הודעות. תגידו שלום 👋', sc_new_messages: 'הודעות חדשות', sc_reply: 'להגיב', sc_reply_to: 'תגובה ל{name}',
      sc_deleted: 'ההודעה נמחקה', sc_open_photo: 'לפתוח תמונה', sc_edited: 'נערך', sc_read: 'נקרא', sc_sent: 'נשלח', sc_msg_actions: 'פעולות להודעה',
      sc_copy: 'להעתיק', sc_edit: 'לערוך', sc_editing: 'עריכת הודעה', sc_pin_msg: 'להצמיד', sc_delete: 'למחוק', sc_delete_for_all: 'למחוק לכולם',
      sc_type_message: 'הודעה…', sc_send: 'לשלוח', sc_attach: 'לצרף', sc_stickers: 'מדבקות', sc_caption: 'כיתוב (לא חובה)', sc_send_photo: 'לשלוח תמונה', sc_send_file: 'לשלוח קובץ',
      sc_slow_ph: 'מצב איטי: הודעה כל {d}',
      sc_tab_info: 'מידע', sc_tab_members: 'משתתפים', sc_tab_perms: 'הרשאות', sc_tab_settings: 'הגדרות', sc_about: 'תיאור', sc_about_ph: 'על מה הקבוצה?',
      sc_group_bg: 'רקע לקבוצה', sc_group_bg_hint: 'כבוי: כל אחד רואה את הרקע שלו.', sc_delete_group: 'למחוק את הקבוצה', sc_delete_group_q: 'למחוק את הקבוצה וכל ההודעות לכולם?',
      sc_leave: 'לצאת מהקבוצה', sc_leave_q: 'לצאת מהקבוצה?', sc_owner: 'יוצר', sc_admin: 'מנהל', sc_restricted: 'מוגבל', sc_restricted_until: 'מוגבל עד {d}',
      sc_add_members: 'להוסיף משתתפים', sc_members_of: '{n} מתוך {max} משתתפים', sc_banned_list: 'חסומים בקבוצה', sc_until: 'עד {d}', sc_forever: 'לתמיד', sc_unban: 'לבטל חסימה',
      sc_edit_rights: 'הרשאות מנהל', sc_make_admin: 'למנות למנהל', sc_remove_admin: 'להסיר ניהול', sc_unrestrict: 'לבטל הגבלה', sc_restrict: 'להגביל (רק קריאה)',
      sc_kick: 'להוציא מהקבוצה', sc_ban: 'לחסום בקבוצה', sc_admin_rights: 'הרשאות מנהל',
      sc_right_info: 'לשנות פרטי קבוצה', sc_right_delete: 'למחוק הודעות של אחרים', sc_right_ban: 'לחסום ולהגביל משתתפים', sc_right_add: 'להוסיף משתתפים', sc_right_pin: 'להצמיד הודעות', sc_right_promote: 'למנות מנהלים חדשים',
      sc_1h: 'שעה', sc_1d: 'יום', sc_1w: 'שבוע', sc_until_date: 'עד תאריך', sc_apply: 'להחיל', sc_custom: 'אחר', sc_hours: 'שעות', sc_off: 'כבוי',
      sc_perms_lead: 'מה מותר למשתתפים רגילים. מנהלים יכולים הכול.',
      sc_perm_text: 'לשלוח הודעות', sc_perm_photos: 'לשלוח תמונות', sc_perm_files: 'לשלוח קבצים', sc_perm_stickers: 'מדבקות', sc_perm_links: 'קישורים', sc_perm_reactions: 'תגובות אימוג׳י',
      sc_perm_add: 'להוסיף משתתפים', sc_perm_pin: 'להצמיד הודעות', sc_perm_info: 'לשנות פרטי קבוצה',
      sc_only_admins: 'רק מנהלים כותבים', sc_only_admins_hint: 'כולם קוראים, רק מנהלים שולחים.', sc_slow: 'מצב איטי', sc_slow_hint: 'הודעה אחת בכל פרק זמן למשתתף.',
      sc_autodel: 'מחיקה אוטומטית', sc_autodel_hint: 'הודעות חדשות נעלמות אחרי הזמן הזה.', sc_autodel_scope: 'למי זה חל', sc_autodel_scope_hint: 'אפשר להשאיר הודעות של מנהלים.',
      sc_scope_all: 'כולם', sc_scope_except: 'חוץ ממנהלים', sc_banned_words: 'מילים אסורות', sc_banned_hint: 'הודעות וכיתובים עם המילים האלה לא יישלחו. מפרידים בפסיק או בשורה חדשה.', sc_banned_ph: 'מילה, עוד מילה',
      sc_dur_s: '{n} שנ׳', sc_dur_m: '{n} דק׳', sc_dur_h: '{n} שע׳', sc_dur_d: '{n} ימים',
      sc_sys_created: '{a} יצר/ה את הקבוצה', sc_sys_added: '{a} הוסיף/ה את {b}', sc_sys_kicked: '{a} הוציא/ה את {b}', sc_sys_banned: '{a} חסם/ה את {b}', sc_sys_left: '{a} יצא/ה מהקבוצה'
    },
    ru: {
      sc_mute: 'Без уведомлений', sc_unmute: 'Включить уведомления', sc_muted: 'Без уведомлений', sc_muted_on: 'Уведомления этого чата выключены', sc_muted_off: 'Уведомления этого чата включены',
      sc_mute_hint: 'Правая кнопка мыши или долгое нажатие: без уведомлений',
      sc_nav_chats: 'Чаты', sc_chats: 'Чаты', sc_chats_lead: 'Переписка с друзьями и учебные группы.', sc_new_chat: 'Новый чат', sc_new_group: 'Новая группа',
      sc_chat_style: 'Оформление чата', sc_chat_style_lead: 'Стиль твоих сообщений видят все. Фон — только ты.', sc_bubble_style: 'Сообщения', sc_chat_bg: 'Фон',
      sc_sample_q: 'Когда контрольная? 🤔', sc_sample_a: 'В воскресенье! Удачи 💪',
      sc_no_chats: 'Чатов пока нет', sc_no_chats_hint: 'Добавь друзей на странице «Люди» и начни переписку.', sc_no_messages: 'Нет сообщений', sc_no_friends_chat: 'Сначала добавь друзей',
      sc_you: 'Ты', sc_photo: 'Фото', sc_file: 'Файл', sc_sticker: 'Стикер', sc_group_name: 'Название группы', sc_create: 'Создать', sc_add: 'Добавить',
      sc_selected: 'Выбрано {n} (до {max})', sc_back: 'Назад', sc_direct: 'Личный чат', sc_not_friends_now: 'Больше не друзья', sc_members_n: 'Участников: {n}',
      sc_only_admins_short: 'пишут только админы', sc_group_settings: 'Настройки группы', sc_pinned_msg: 'Закреплённое сообщение', sc_to_bottom: 'Вниз',
      sc_load_older: 'Предыдущие сообщения', sc_say_hi: 'Сообщений пока нет. Поздоровайся 👋', sc_new_messages: 'Новые сообщения', sc_reply: 'Ответить', sc_reply_to: 'Ответ для {name}',
      sc_deleted: 'Сообщение удалено', sc_open_photo: 'Открыть фото', sc_edited: 'изм.', sc_read: 'Прочитано', sc_sent: 'Отправлено', sc_msg_actions: 'Действия с сообщением',
      sc_copy: 'Копировать', sc_edit: 'Изменить', sc_editing: 'Редактирование', sc_pin_msg: 'Закрепить', sc_delete: 'Удалить', sc_delete_for_all: 'Удалить для всех',
      sc_type_message: 'Сообщение…', sc_send: 'Отправить', sc_attach: 'Прикрепить', sc_stickers: 'Стикеры', sc_caption: 'Подпись (необязательно)', sc_send_photo: 'Отправить фото', sc_send_file: 'Отправить файл',
      sc_slow_ph: 'Медленный режим: одно сообщение в {d}',
      sc_tab_info: 'Инфо', sc_tab_members: 'Участники', sc_tab_perms: 'Разрешения', sc_tab_settings: 'Настройки', sc_about: 'Описание', sc_about_ph: 'О чём группа?',
      sc_group_bg: 'Фон группы', sc_group_bg_hint: 'Выключено: каждый видит свой фон.', sc_delete_group: 'Удалить группу', sc_delete_group_q: 'Удалить группу и все сообщения для всех?',
      sc_leave: 'Выйти из группы', sc_leave_q: 'Выйти из группы?', sc_owner: 'Создатель', sc_admin: 'Админ', sc_restricted: 'Ограничен', sc_restricted_until: 'Ограничен до {d}',
      sc_add_members: 'Добавить участников', sc_members_of: '{n} из {max} участников', sc_banned_list: 'Заблокированы в группе', sc_until: 'до {d}', sc_forever: 'навсегда', sc_unban: 'Разблокировать',
      sc_edit_rights: 'Права админа', sc_make_admin: 'Назначить админом', sc_remove_admin: 'Снять админа', sc_unrestrict: 'Снять ограничение', sc_restrict: 'Ограничить (только чтение)',
      sc_kick: 'Удалить из группы', sc_ban: 'Заблокировать в группе', sc_admin_rights: 'Права админа',
      sc_right_info: 'Изменять данные группы', sc_right_delete: 'Удалять чужие сообщения', sc_right_ban: 'Блокировать и ограничивать', sc_right_add: 'Добавлять участников', sc_right_pin: 'Закреплять сообщения', sc_right_promote: 'Назначать новых админов',
      sc_1h: '1 час', sc_1d: '1 день', sc_1w: '1 неделя', sc_until_date: 'До даты', sc_apply: 'Применить', sc_custom: 'Своё', sc_hours: 'часов', sc_off: 'Выкл.',
      sc_perms_lead: 'Что разрешено обычным участникам. Админам можно всё.',
      sc_perm_text: 'Отправка сообщений', sc_perm_photos: 'Отправка фото', sc_perm_files: 'Отправка файлов', sc_perm_stickers: 'Стикеры', sc_perm_links: 'Ссылки', sc_perm_reactions: 'Реакции',
      sc_perm_add: 'Добавление участников', sc_perm_pin: 'Закрепление сообщений', sc_perm_info: 'Изменение данных группы',
      sc_only_admins: 'Пишут только админы', sc_only_admins_hint: 'Все читают, отправлять могут только админы.', sc_slow: 'Медленный режим', sc_slow_hint: 'Одно сообщение за промежуток времени.',
      sc_autodel: 'Автоудаление', sc_autodel_hint: 'Новые сообщения исчезнут через это время.', sc_autodel_scope: 'Для кого', sc_autodel_scope_hint: 'Сообщения админов можно оставлять.',
      sc_scope_all: 'Для всех', sc_scope_except: 'Кроме админов', sc_banned_words: 'Запрещённые слова', sc_banned_hint: 'Сообщения и подписи с этими словами не отправятся. Через запятую или с новой строки.', sc_banned_ph: 'слово, ещё слово',
      sc_dur_s: '{n} с', sc_dur_m: '{n} мин', sc_dur_h: '{n} ч', sc_dur_d: '{n} дн.',
      sc_sys_created: '{a} создал(а) группу', sc_sys_added: '{a} добавил(а) {b}', sc_sys_kicked: '{a} удалил(а) {b}', sc_sys_banned: '{a} заблокировал(а) {b}', sc_sys_left: '{a} вышел(ла) из группы'
    },
    en: {
      sc_mute: 'Mute', sc_unmute: 'Unmute', sc_muted: 'Muted', sc_muted_on: 'This chat is muted', sc_muted_off: 'This chat is unmuted',
      sc_mute_hint: 'Right-click or long-press: mute',
      sc_nav_chats: 'Chats', sc_chats: 'Chats', sc_chats_lead: 'Messages with friends and study groups.', sc_new_chat: 'New chat', sc_new_group: 'New group',
      sc_chat_style: 'Chat style', sc_chat_style_lead: 'Everyone sees your bubble style. The background is just for you.', sc_bubble_style: 'Bubbles', sc_chat_bg: 'Background',
      sc_sample_q: 'When is the test? 🤔', sc_sample_a: 'On Sunday! Good luck 💪',
      sc_no_chats: 'No chats yet', sc_no_chats_hint: 'Add friends on the People page and start chatting.', sc_no_messages: 'No messages', sc_no_friends_chat: 'Add some friends first',
      sc_you: 'You', sc_photo: 'Photo', sc_file: 'File', sc_sticker: 'Sticker', sc_group_name: 'Group name', sc_create: 'Create', sc_add: 'Add',
      sc_selected: '{n} selected (up to {max})', sc_back: 'Back', sc_direct: 'Direct chat', sc_not_friends_now: 'Not friends anymore', sc_members_n: '{n} members',
      sc_only_admins_short: 'only admins write', sc_group_settings: 'Group settings', sc_pinned_msg: 'Pinned message', sc_to_bottom: 'Down',
      sc_load_older: 'Earlier messages', sc_say_hi: 'No messages yet. Say hi 👋', sc_new_messages: 'New messages', sc_reply: 'Reply', sc_reply_to: 'Reply to {name}',
      sc_deleted: 'Message deleted', sc_open_photo: 'Open photo', sc_edited: 'edited', sc_read: 'Read', sc_sent: 'Sent', sc_msg_actions: 'Message actions',
      sc_copy: 'Copy', sc_edit: 'Edit', sc_editing: 'Editing', sc_pin_msg: 'Pin', sc_delete: 'Delete', sc_delete_for_all: 'Delete for everyone',
      sc_type_message: 'Message…', sc_send: 'Send', sc_attach: 'Attach', sc_stickers: 'Stickers', sc_caption: 'Caption (optional)', sc_send_photo: 'Send photo', sc_send_file: 'Send file',
      sc_slow_ph: 'Slow mode: one message every {d}',
      sc_tab_info: 'Info', sc_tab_members: 'Members', sc_tab_perms: 'Permissions', sc_tab_settings: 'Settings', sc_about: 'Description', sc_about_ph: 'What is this group about?',
      sc_group_bg: 'Group background', sc_group_bg_hint: 'Off: everyone sees their own background.', sc_delete_group: 'Delete group', sc_delete_group_q: 'Delete the group and all messages for everyone?',
      sc_leave: 'Leave group', sc_leave_q: 'Leave this group?', sc_owner: 'Owner', sc_admin: 'Admin', sc_restricted: 'Restricted', sc_restricted_until: 'Restricted until {d}',
      sc_add_members: 'Add members', sc_members_of: '{n} of {max} members', sc_banned_list: 'Banned from group', sc_until: 'until {d}', sc_forever: 'forever', sc_unban: 'Unban',
      sc_edit_rights: 'Admin rights', sc_make_admin: 'Make admin', sc_remove_admin: 'Dismiss admin', sc_unrestrict: 'Lift restriction', sc_restrict: 'Restrict (read only)',
      sc_kick: 'Remove from group', sc_ban: 'Ban from group', sc_admin_rights: 'Admin rights',
      sc_right_info: 'Change group info', sc_right_delete: 'Delete others’ messages', sc_right_ban: 'Ban and restrict members', sc_right_add: 'Add members', sc_right_pin: 'Pin messages', sc_right_promote: 'Add new admins',
      sc_1h: '1 hour', sc_1d: '1 day', sc_1w: '1 week', sc_until_date: 'Until date', sc_apply: 'Apply', sc_custom: 'Custom', sc_hours: 'hours', sc_off: 'Off',
      sc_perms_lead: 'What regular members may do. Admins can do everything.',
      sc_perm_text: 'Send messages', sc_perm_photos: 'Send photos', sc_perm_files: 'Send files', sc_perm_stickers: 'Stickers', sc_perm_links: 'Links', sc_perm_reactions: 'Reactions',
      sc_perm_add: 'Add members', sc_perm_pin: 'Pin messages', sc_perm_info: 'Change group info',
      sc_only_admins: 'Only admins can write', sc_only_admins_hint: 'Everyone reads, only admins send.', sc_slow: 'Slow mode', sc_slow_hint: 'One message per member per interval.',
      sc_autodel: 'Auto-delete', sc_autodel_hint: 'New messages disappear after this time.', sc_autodel_scope: 'Applies to', sc_autodel_scope_hint: 'You can keep admins’ messages.',
      sc_scope_all: 'Everyone', sc_scope_except: 'Except admins', sc_banned_words: 'Banned words', sc_banned_hint: 'Messages and captions with these words won’t be sent. Separate with commas or new lines.', sc_banned_ph: 'word, another word',
      sc_dur_s: '{n} s', sc_dur_m: '{n} min', sc_dur_h: '{n} h', sc_dur_d: '{n} d',
      sc_sys_created: '{a} created the group', sc_sys_added: '{a} added {b}', sc_sys_kicked: '{a} removed {b}', sc_sys_banned: '{a} banned {b}', sc_sys_left: '{a} left the group'
    }
  });
})();

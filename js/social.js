/* Социальный модуль: данные (друзья, чаты, группы) + общие элементы (ник со стилем, пикеры стилей).
   window.Social — Promise API с двумя реализациями за одним интерфейсом:
     mock     — всё в localStorage этого браузера (можно переключаться между демо-аккаунтами);
     supabase — REST через Store.sb.api; все правила проверяет база (supabase/social.sql).
   Пишем на ES2017 без ?. и ?? — для старых телефонов. */
(function () {
  'use strict';
  var el = U.el;

  /* =====================================================================
     СТИЛИ: ник, пузырь сообщения, фон чата. 10 статичных + 10 анимированных.
     Уровни открытия совпадают с таблицей sc_style_levels в supabase/social.sql.
     ===================================================================== */
  function S(id, lvl, anim, he, ru, en) { return { id: id, lvl: lvl, anim: anim, name: { he: he, ru: ru, en: en } }; }
  var STYLES = {
    nick: [
      S('plain', 0, false, 'רגיל', 'Обычный', 'Plain'), S('accent', 0, false, 'צבע מוביל', 'Акцент', 'Accent'),
      S('ocean', 2, false, 'אוקיינוס', 'Океан', 'Ocean'), S('sunset', 4, false, 'שקיעה', 'Закат', 'Sunset'),
      S('mint', 6, false, 'מנטה', 'Мята', 'Mint'), S('berry', 8, false, 'פירות יער', 'Ягоды', 'Berry'),
      S('royal', 10, false, 'מלכותי', 'Королевский', 'Royal'), S('retro', 13, false, 'רטרו', 'Ретро', 'Retro'),
      S('ember', 16, false, 'גחלים', 'Угли', 'Ember'), S('frost', 20, false, 'כפור', 'Иней', 'Frost'),
      S('shimmer', 10, true, 'נצנוץ', 'Блеск', 'Shimmer'), S('aurora', 15, true, 'זוהר צפוני', 'Сияние', 'Aurora'),
      S('glow', 20, true, 'הילה', 'Свечение', 'Glow'), S('wave', 25, true, 'גל', 'Волна', 'Wave'),
      S('neon', 30, true, 'ניאון', 'Неон', 'Neon'), S('rainbow', 40, true, 'קשת', 'Радуга', 'Rainbow'),
      S('fire', 50, true, 'אש', 'Огонь', 'Fire'), S('galaxy', 60, true, 'גלקסיה', 'Галактика', 'Galaxy'),
      S('glitch', 75, true, 'גליץ׳', 'Глитч', 'Glitch'), S('celestial', 90, true, 'שמימי', 'Небесный', 'Celestial')
    ],
    bubble: [
      S('classic', 0, false, 'קלאסי', 'Классика', 'Classic'), S('soft', 0, false, 'פסטל', 'Пастель', 'Pastel'),
      S('glass', 2, false, 'זכוכית', 'Стекло', 'Glass'), S('outline', 4, false, 'מתאר', 'Контур', 'Outline'),
      S('paper', 6, false, 'נייר', 'Бумага', 'Paper'), S('mint', 8, false, 'מנטה', 'Мята', 'Mint'),
      S('sky', 10, false, 'שמיים', 'Небо', 'Sky'), S('rose', 13, false, 'ורד', 'Роза', 'Rose'),
      S('midnight', 16, false, 'חצות', 'Полночь', 'Midnight'), S('sunset', 20, false, 'שקיעה', 'Закат', 'Sunset'),
      S('aurora', 10, true, 'זוהר', 'Сияние', 'Aurora'), S('shimmer', 15, true, 'ברק', 'Блик', 'Gleam'),
      S('neon', 20, true, 'ניאון', 'Неон', 'Neon'), S('prism', 25, true, 'פריזמה', 'Призма', 'Prism'),
      S('stars', 30, true, 'כוכבים', 'Звёзды', 'Stars'), S('lava', 40, true, 'לבה', 'Лава', 'Lava'),
      S('ocean', 50, true, 'אוקיינוס', 'Океан', 'Ocean'), S('holo', 60, true, 'הולוגרמה', 'Голограмма', 'Hologram'),
      S('ember', 75, true, 'להט', 'Жар', 'Ember'), S('cosmic', 90, true, 'קוסמי', 'Космос', 'Cosmic')
    ],
    bg: [
      S('plain', 0, false, 'רגיל', 'Без узора', 'Plain'), S('dots', 0, false, 'נקודות', 'Точки', 'Dots'),
      S('grid', 2, false, 'משבצות', 'Клетка', 'Grid'), S('waves', 4, false, 'גלים', 'Волны', 'Waves'),
      S('dawn', 6, false, 'שחר', 'Рассвет', 'Dawn'), S('mint', 8, false, 'מנטה', 'Мята', 'Mint'),
      S('night', 10, false, 'לילה', 'Ночь', 'Night'), S('paper', 13, false, 'נייר', 'Бумага', 'Paper'),
      S('stripes', 16, false, 'פסים', 'Полоски', 'Stripes'), S('prism', 20, false, 'פריזמה', 'Призма', 'Prism'),
      S('aurora', 10, true, 'זוהר צפוני', 'Сияние', 'Aurora'), S('stars', 15, true, 'שמי כוכבים', 'Звёздное небо', 'Starfield'),
      S('bubbles', 20, true, 'בועות', 'Пузырьки', 'Bubbles'), S('flow', 25, true, 'זרימה', 'Поток', 'Flow'),
      S('rain', 30, true, 'גשם', 'Дождь', 'Rain'), S('snow', 40, true, 'שלג', 'Снег', 'Snow'),
      S('nebula', 50, true, 'ערפילית', 'Туманность', 'Nebula'), S('pulse', 60, true, 'דופק', 'Пульс', 'Pulse'),
      S('tide', 75, true, 'גאות', 'Прилив', 'Tide'), S('petals', 90, true, 'עלי כותרת', 'Лепестки', 'Petals')
    ]
  };
  var STYLE_BY = {};
  Object.keys(STYLES).forEach(function (k) { STYLE_BY[k] = {}; STYLES[k].forEach(function (s) { STYLE_BY[k][s.id] = s; }); });
  var DEF_STYLE = { nick: 'plain', bubble: 'classic', bg: 'plain' };
  function styleOf(kind, id) { return STYLE_BY[kind][id] ? id : DEF_STYLE[kind]; }

  var STICKERS = ['🦊', '🐼', '🐸', '🐙', '🦄', '🐝', '🌵', '🍩', '☕', '📚', '🧠', '💡', '🚀', '🎉', '🔥', '💯', '👏', '😴', '🤯', '🫡'];
  var REACTIONS = ['👍', '❤️', '😂', '😮', '🔥', '🎉', '🙏', '👀'];
  var LINK_RE = /(https?:\/\/|www\.)\S+|\b[a-z0-9-]+\.(com|net|org|io|ru|il|co|me|app|dev|info|ly|gg|tv|xyz|link)\b/i;
  var MAX_GROUP = 50;

  /* =====================================================================
     ОБЩИЕ ПОМОЩНИКИ
     ===================================================================== */
  function scErr(code, n) { var e = new Error(code); e.code = code; if (n != null) e.n = n; return e; }
  function normErr(e) {
    if (e && e.code && (String(e.code).indexOf('sc_err') === 0 || String(e.code).indexOf('err_') === 0)) return e;
    var data = (e && e.data) || {};
    var msg = String(data.message || (e && e.message) || '');
    var m = msg.match(/sc_err_[a-z_]+/);
    var code = m ? m[0] : (/row-level security|permission denied/i.test(msg) ? 'sc_err_no_rights'
      : (/failed to fetch|networkerror|load failed/i.test(msg) ? 'err_network' : 'sc_err_generic'));
    var hint = data.hint != null ? parseInt(data.hint, 10) : null;
    return scErr(code, isNaN(hint) ? null : hint);
  }
  function errText(e) {
    e = normErr(e);
    return t(e.code, { n: e.n != null ? e.n : '' });
  }
  function nowIso() { return new Date().toISOString(); }
  function tms(iso) { if (!iso) return 0; if (iso === 'infinity') return Infinity; var x = Date.parse(iso); return isNaN(x) ? 0 : x; }
  function isRestricted(m) { return !!(m && m.restricted_until && tms(m.restricted_until) > Date.now()); }
  function levelOf(u) { return Store.levelInfo((u && u.xp) || 0).level; }
  function emitChange(what) {
    try { document.dispatchEvent(new CustomEvent('socialchange', { detail: what || null })); } catch (e) { /* старые браузеры */ }
  }
  function myId() { var u = Store.auth.current(); return u ? u.id : null; }
  /* чат, открытый сейчас на экране: его новые сообщения не попадают в колокольчик и точки */
  function openChatId() { var m = /^#\/chat\/([^/?#]+)/.exec(location.hash || ''); return m && !document.hidden ? decodeURIComponent(m[1]) : null; }
  function hasBanned(words, text) {
    if (!text || !words || !words.length) return false;
    var low = String(text).toLowerCase();
    for (var i = 0; i < words.length; i++) {
      var w = String(words[i] || '').trim().toLowerCase();
      if (w && low.indexOf(w) >= 0) return true;
    }
    return false;
  }
  function hasLink(text) { return !!text && LINK_RE.test(String(text)); }
  function cleanWords(list) {
    var seen = {}, out = [];
    (list || []).forEach(function (w) {
      w = String(w || '').trim().slice(0, 40);
      var k = w.toLowerCase();
      if (w && !seen[k]) { seen[k] = 1; out.push(w); }
    });
    return out.slice(0, 200);
  }

  /* Права в группе — то же, что sc_can() в SQL. what: info|settings|delete|ban|add|pin|promote */
  function can(chat, uid, what) {
    if (!chat) return false;
    var m = memberOf(chat, uid);
    if (!m) return false;
    if (chat.kind === 'direct') return what === 'pin';
    if (chat.kind === 'support') return false;
    if (m.role === 'owner') return true;
    var p = chat.perms || {}, r = m.rights || {};
    if (m.role === 'admin') {
      if (what === 'info') return !!(r.info || p.info);
      if (what === 'settings' || what === 'ban') return !!r.ban;
      if (what === 'delete') return !!r['delete'];
      if (what === 'add') return !!(r.add || p.add);
      if (what === 'pin') return !!(r.pin || p.pin);
      if (what === 'promote') return !!r.promote;
      return false;
    }
    if (isRestricted(m)) return false;
    if (what === 'info') return !!p.info;
    if (what === 'add') return !!p.add;
    if (what === 'pin') return !!p.pin;
    return false;
  }
  function memberOf(chat, uid) {
    var list = chat.members || [];
    for (var i = 0; i < list.length; i++) if (list[i].user_id === uid) return list[i];
    return null;
  }
  /* Можно ли отправить: возвращает код ошибки или null. То же, что триггер sc_msg_before_insert.
     ctx (для личного чата): {friends, blocked} */
  function sendCheck(chat, uid, kind, body, fileName, ctx) {
    var m = memberOf(chat, uid);
    if (!m) return { code: 'sc_err_not_member' };
    if (kind === 'text' && !String(body || '').trim()) return { code: 'sc_err_empty' };
    if (body && String(body).length > (kind === 'text' ? 4000 : 1000)) return { code: 'sc_err_too_long' };
    if (chat.kind === 'support') return null;   // поддержка: писать можно всегда
    if (chat.kind === 'direct') {
      if (ctx && !ctx.friends) return { code: 'sc_err_not_friends' };
      if (ctx && ctx.blocked) return { code: 'sc_err_blocked' };
      return null;
    }
    var adm = m.role === 'owner' || m.role === 'admin', p = chat.perms || {};
    if (!adm) {
      if (chat.only_admins) return { code: 'sc_err_only_admins' };
      if (isRestricted(m)) return { code: 'sc_err_restricted' };
      if (kind === 'text' && !p.text) return { code: 'sc_err_no_text' };
      if (kind === 'photo' && !p.photos) return { code: 'sc_err_no_photos' };
      if (kind === 'file' && !p.files) return { code: 'sc_err_no_files' };
      if (kind === 'sticker' && !p.stickers) return { code: 'sc_err_no_stickers' };
      if (kind !== 'sticker' && !p.links && hasLink(body)) return { code: 'sc_err_no_links' };
      if (chat.slow_sec > 0 && m.last_sent_at) {
        var left = tms(m.last_sent_at) + chat.slow_sec * 1000 - Date.now();
        if (left > 0) return { code: 'sc_err_slow', n: Math.max(1, Math.ceil(left / 1000)) };
      }
    }
    if (hasBanned(chat.banned_words, body) || hasBanned(chat.banned_words, fileName)) return { code: 'sc_err_banned_word' };
    return null;
  }
  /* Что пользователю можно в этом чате (для интерфейса) */
  function abilities(chat, uid, ctx) {
    var m = memberOf(chat, uid) || {};
    var a = {
      member: !!m.role, role: m.role || null, restricted: isRestricted(m),
      text: !sendCheck(chat, uid, 'text', 'x', null, ctx), photo: !sendCheck(chat, uid, 'photo', '', null, ctx),
      file: !sendCheck(chat, uid, 'file', '', null, ctx), sticker: !sendCheck(chat, uid, 'sticker', '🙂', null, ctx),
      react: chat.kind === 'direct' ? !(ctx && ctx.blocked) : (m.role === 'owner' || m.role === 'admin' || (!!(chat.perms || {}).reactions && !isRestricted(m))),
      info: can(chat, uid, 'info'), settings: can(chat, uid, 'settings'), del: can(chat, uid, 'delete'), ban: can(chat, uid, 'ban'),
      add: can(chat, uid, 'add'), pin: can(chat, uid, 'pin'), promote: can(chat, uid, 'promote')
    };
    /* почему поле ввода закрыто целиком (а не только какой-то тип сообщений) */
    var s = sendCheck(chat, uid, 'text', 'x', null, ctx);
    var general = ['sc_err_not_member', 'sc_err_not_friends', 'sc_err_blocked', 'sc_err_only_admins', 'sc_err_restricted'];
    a.blockReason = s && general.indexOf(s.code) >= 0 ? s.code : (!a.text && !a.photo && !a.file && !a.sticker ? 'sc_err_no_rights' : null);
    return a;
  }

  /* связь двух людей с моей стороны (одинаково для обеих реализаций) */
  function relOf(me, other, f) {
    if (other === me) return 'self';
    var mk = f.marks[other] || {};
    if (mk.blocked) return 'blocked';
    if (f.friends[other]) return 'friend';
    if (f.incoming[other]) return 'incoming';
    if (mk.removed) return 'removed';
    if (f.outgoing[other]) return 'outgoing';
    return 'none';
  }
  function buildPeople(me, users, f) {
    return Object.keys(users).map(function (id) {
      var mk = f.marks[id] || {};
      return { user: users[id], rel: relOf(me, id, f), pinned: !!mk.pinned, blocked: !!mk.blocked,
               at: f.incoming[id] || f.outgoing[id] || null };
    }).sort(function (a, b) { return String(a.user.name).localeCompare(String(b.user.name)); });
  }

  /* =====================================================================
     ПРОБНЫЙ РЕЖИМ (localStorage)
     ===================================================================== */
  var MK = 'sc_mock_db';
  function emptyDb() {
    return { v: 1, seq: 1, requests: {}, friends: {}, marks: {}, chats: {}, members: {}, bans: {}, msgs: [], reacts: {}, notifs: [] };
  }
  function D() { var d = U.storage.get(MK, null); return d && d.v === 1 ? d : emptyDb(); }
  function W(d) {
    var now = Date.now();
    d.msgs = d.msgs.filter(function (m) { return !m.expires_at || tms(m.expires_at) > now - 60000; });
    try { window.localStorage.setItem(MK, JSON.stringify(d)); } catch (e) { throw scErr('sc_err_storage_full'); }
  }
  function mockUsersRaw() { return U.storage.get('mock_users', {}) || {}; }
  function pubUser(u) {
    return { id: u.id, name: u.name, avatar: u.avatar || null, frame: u.frame || 'none', xp: u.xp || 0, role: u.role || 'student', prefs: u.prefs || {} };
  }
  function MU() {
    var raw = mockUsersRaw(), out = {};
    Object.keys(raw).forEach(function (e) { var u = raw[e]; if (u && u.id) out[u.id] = pubUser(u); });
    return out;
  }
  function fk(x, y) { return x < y ? x + '|' + y : y + '|' + x; }
  function mark(d, owner, target) { return (d.marks[owner] && d.marks[owner][target]) || {}; }
  function setMark(d, owner, target, field, on) {
    if (!d.marks[owner]) d.marks[owner] = {};
    if (!d.marks[owner][target]) d.marks[owner][target] = { pinned: false, blocked: false, removed: false };
    d.marks[owner][target][field] = !!on;
  }
  function areFriends(d, x, y) { return !!d.friends[fk(x, y)]; }
  function blockedEither(d, x, y) { return !!(mark(d, x, y).blocked || mark(d, y, x).blocked); }
  function notify(d, user, kind, actor, chat) {
    d.notifs = d.notifs.filter(function (n) { return !(n.user === user && n.actor === actor && n.kind === kind && kind === 'request'); });
    d.notifs.push({ id: d.seq++, user: user, kind: kind, actor: actor, chat: chat || null, seen: false, at: nowIso() });
    if (d.notifs.length > 400) d.notifs = d.notifs.slice(-400);
  }
  function friendFacts(d, me) {
    var f = { friends: {}, incoming: {}, outgoing: {}, marks: d.marks[me] || {} };
    Object.keys(d.friends).forEach(function (k) {
      var p = k.split('|');
      if (p[0] === me) f.friends[p[1]] = d.friends[k].at; else if (p[1] === me) f.friends[p[0]] = d.friends[k].at;
    });
    Object.keys(d.requests).forEach(function (k) {
      var p = k.split('>');
      if (p[1] === me) f.incoming[p[0]] = d.requests[k].at; else if (p[0] === me) f.outgoing[p[1]] = d.requests[k].at;
    });
    return f;
  }
  function needMe() { var id = myId(); if (!id) throw scErr('sc_err_auth'); return id; }
  function act(fn) {
    return new Promise(function (res) { res(fn()); }).then(function (v) { emitChange(); return v; });
  }
  function ask(fn) { return new Promise(function (res) { res(fn()); }); }

  function mAccept(d, me, from) {
    if (!d.requests[from + '>' + me]) throw scErr('sc_err_no_request');
    delete d.requests[from + '>' + me]; delete d.requests[me + '>' + from];
    if (blockedEither(d, me, from)) throw scErr('sc_err_blocked');
    if (!d.friends[fk(me, from)]) d.friends[fk(me, from)] = { at: nowIso() };
    setMark(d, me, from, 'removed', false); setMark(d, from, me, 'removed', false);
    d.notifs.forEach(function (n) { if (n.user === me && n.actor === from && n.kind === 'request') n.seen = true; });
    notify(d, from, 'accepted', me);
    return 'friend';
  }
  function mChatDetail(d, id, users) {
    var c = d.chats[id]; if (!c) return null;
    var mem = d.members[id] || {};
    var out = JSON.parse(JSON.stringify(c));
    out.members = Object.keys(mem).map(function (uid) {
      var m = mem[uid];
      return { user_id: uid, user: users[uid] || ghost(uid), role: m.role, rights: m.rights || {}, promoted_by: m.promoted_by || null,
               restricted_until: m.restricted_until || null, last_read_at: m.last_read_at, last_sent_at: m.last_sent_at || null, joined_at: m.joined_at, muted: !!m.muted };
    });
    var bans = d.bans[id] || {};
    out.bans = Object.keys(bans).filter(function (uid) { var b = bans[uid]; return !b.until || tms(b.until) > Date.now(); })
      .map(function (uid) { return { user_id: uid, user: users[uid] || ghost(uid), until: bans[uid].until || null }; });
    return out;
  }
  function mVisible(m) { return !m.expires_at || tms(m.expires_at) > Date.now(); }
  function mMsgOut(d, m) {
    var r = d.reacts[m.id] || {}, agg = {};
    Object.keys(r).forEach(function (uid) { var e = r[uid]; if (!agg[e]) agg[e] = []; agg[e].push(uid); });
    var o = JSON.parse(JSON.stringify(m));
    o.reactions = Object.keys(agg).map(function (e) { return { emoji: e, users: agg[e] }; });
    return o;
  }
  function mSystem(d, chatId, actor, ev, target) {
    var c = d.chats[chatId], now = nowIso();
    d.msgs.push({ id: d.seq++, chat_id: chatId, sender_id: actor, kind: 'system', body: JSON.stringify({ e: ev, t: target || null }),
      media: null, file_name: null, file_size: null, reply_to: null, deleted: false, edited_at: null,
      expires_at: c && c.autodel_sec > 0 ? new Date(Date.now() + c.autodel_sec * 1000).toISOString() : null, created_at: now, updated_at: now });
    if (c) c.last_msg_at = now;
  }
  function memberObj(role) {
    var all = role === 'owner';
    return { role: role, rights: { info: all, 'delete': all, ban: all, add: all, pin: all, promote: all }, promoted_by: null,
             restricted_until: null, last_read_at: nowIso(), last_sent_at: null, joined_at: nowIso() };
  }
  function directCtx(d, chat, me) {
    if (chat.kind !== 'direct') return null;
    var other = Object.keys(d.members[chat.id] || {}).filter(function (x) { return x !== me; })[0];
    return { friends: !!other && areFriends(d, me, other), blocked: !!other && blockedEither(d, me, other), other: other };
  }

  var MOCK = {
    users: function () { return ask(function () { return MU(); }); },
    people: function () {
      return ask(function () { var me = needMe(), d = D(); return buildPeople(me, MU(), friendFacts(d, me)); });
    },
    user: function (id) {
      return ask(function () {
        var me = needMe(), d = D(), raw = mockUsersRaw(), u = null;
        Object.keys(raw).forEach(function (e) { if (raw[e].id === id) u = raw[e]; });
        if (!u) throw scErr('sc_err_no_user');
        var done = u.done || {}, read = 0, solved = 0;
        Object.keys(done).forEach(function (k) { if (k.indexOf('read:') === 0) read++; else if (k.indexOf('solve:') === 0) solved++; });
        var friends = Object.keys(d.friends).filter(function (k) { return k.split('|').indexOf(id) >= 0; }).length;
        var f = friendFacts(d, me), mk = f.marks[id] || {};
        return { user: pubUser(u), rel: relOf(me, id, f), pinned: !!mk.pinned, blocked: !!mk.blocked,
                 stats: { read: read, solved: solved, friends: friends } };
      });
    },
    request: function (to) {
      return act(function () {
        var me = needMe(), d = D();
        if (to === me) throw scErr('sc_err_self');
        if (!MU()[to]) throw scErr('sc_err_no_user');
        if (blockedEither(d, me, to)) throw scErr('sc_err_blocked');
        if (areFriends(d, me, to)) return 'friend';
        var r;
        if (d.requests[to + '>' + me]) r = mAccept(d, me, to);
        else {
          if (!d.requests[me + '>' + to]) { d.requests[me + '>' + to] = { at: nowIso() }; notify(d, to, 'request', me); }
          r = 'outgoing';
        }
        W(d); return r;
      });
    },
    cancel: function (to) {
      return act(function () {
        var me = needMe(), d = D();
        delete d.requests[me + '>' + to];
        d.notifs = d.notifs.filter(function (n) { return !(n.user === to && n.actor === me && n.kind === 'request'); });
        W(d); return 'none';
      });
    },
    accept: function (from) { return act(function () { var me = needMe(), d = D(); var r = mAccept(d, me, from); W(d); return r; }); },
    decline: function (from) {
      return act(function () {
        var me = needMe(), d = D();
        delete d.requests[from + '>' + me];
        d.notifs.forEach(function (n) { if (n.user === me && n.actor === from && n.kind === 'request') n.seen = true; });
        W(d); return 'none';
      });
    },
    unfriend: function (other) {
      return act(function () {
        var me = needMe(), d = D();
        if (d.friends[fk(me, other)]) { delete d.friends[fk(me, other)]; setMark(d, me, other, 'removed', true); }
        W(d); return 'removed';
      });
    },
    restore: function (other) {
      return act(function () {
        var me = needMe(), d = D();
        if (!mark(d, me, other).removed) throw scErr('sc_err_generic');
        if (blockedEither(d, me, other)) throw scErr('sc_err_blocked');
        d.friends[fk(me, other)] = { at: nowIso() };
        setMark(d, me, other, 'removed', false);
        W(d); return 'friend';
      });
    },
    block: function (other, on) {
      return act(function () {
        var me = needMe(), d = D();
        if (other === me) throw scErr('sc_err_self');
        setMark(d, me, other, 'blocked', on !== false);
        if (on !== false) {
          delete d.requests[me + '>' + other]; delete d.requests[other + '>' + me];
          d.notifs = d.notifs.filter(function (n) { return !(n.user === me && n.actor === other && n.kind === 'request'); });
        }
        W(d); return on !== false ? 'blocked' : 'none';
      });
    },
    pinUser: function (other, on) {
      return act(function () { var me = needMe(), d = D(); setMark(d, me, other, 'pinned', on !== false); W(d); return 'ok'; });
    },

    /* ---------- чаты ---------- */
    chats: function () {
      return ask(function () {
        var me = needMe(), d = D(), users = MU();
        var out = [];
        Object.keys(d.chats).forEach(function (id) {
          var mem = d.members[id] || {};
          if (!mem[me]) return;
          var c = d.chats[id], my = mem[me];
          var msgs = d.msgs.filter(function (m) { return m.chat_id === id && mVisible(m) && !m.deleted; });
          var last = msgs.length ? msgs[msgs.length - 1] : null;
          var unread = msgs.filter(function (m) { return m.kind !== 'system' && m.sender_id !== me && tms(m.created_at) > tms(my.last_read_at); }).length;
          var other = Object.keys(mem).filter(function (x) { return x !== me; })[0] || null;
          out.push({ id: id, kind: c.kind, title: c.title, bg: c.bg || null, owner_id: c.owner_id || null, pinned_msg_id: c.pinned_msg_id || null, role: my.role,
            member_count: Object.keys(mem).length, other: c.kind === 'direct' && other ? (users[other] || ghost(other)) : null,
            last: last ? { id: last.id, sender_id: last.sender_id, kind: last.kind, body: last.body, file_name: last.file_name, created_at: last.created_at } : null,
            unread: unread, muted: !!my.muted, last_msg_at: c.last_msg_at });
        });
        return out.sort(function (a, b) { return tms(b.last_msg_at) - tms(a.last_msg_at); });
      });
    },
    openDirect: function (other) {
      return act(function () {
        var me = needMe(), d = D();
        if (other === me) throw scErr('sc_err_self');
        var key = fk(me, other);
        var found = Object.keys(d.chats).filter(function (id) { return d.chats[id].direct_key === key; })[0];
        if (found) return found;
        if (!areFriends(d, me, other)) throw scErr('sc_err_not_friends');
        if (blockedEither(d, me, other)) throw scErr('sc_err_blocked');
        var id = 'c' + (d.seq++) + Date.now().toString(36);
        d.chats[id] = { id: id, kind: 'direct', direct_key: key, title: null, about: null, bg: null, owner_id: null, pinned_msg_id: null,
          perms: defPerms(), only_admins: false, slow_sec: 0, autodel_sec: 0, autodel_scope: 'all', banned_words: [], created_at: nowIso(), last_msg_at: nowIso() };
        d.members[id] = {}; d.members[id][me] = memberObj('member'); d.members[id][other] = memberObj('member');
        W(d); return id;
      });
    },
    openSupport: function () {
      return act(function () {
        var me = needMe(), d = D(), key = 'support:' + me;
        var id = Object.keys(d.chats).filter(function (x) { return d.chats[x].direct_key === key; })[0];
        if (!id) {
          id = 's' + (d.seq++) + Date.now().toString(36);
          d.chats[id] = { id: id, kind: 'support', direct_key: key, title: null, about: null, bg: null, owner_id: me, pinned_msg_id: null,
            perms: defPerms(), only_admins: false, slow_sec: 0, autodel_sec: 0, autodel_scope: 'all', banned_words: [], created_at: nowIso(), last_msg_at: nowIso() };
          d.members[id] = {};
        }
        var mem = d.members[id], us = MU();
        if (!mem[me]) mem[me] = memberObj('member');
        Object.keys(us).forEach(function (uid) { if (us[uid].role === 'admin' && !mem[uid]) mem[uid] = memberObj('member'); });
        W(d); return id;
      });
    },
    createGroup: function (title, ids) {
      return act(function () {
        var me = needMe(), d = D();
        title = String(title || '').trim();
        if (!title || title.length > 64) throw scErr('sc_err_title');
        var uniq = {}; (ids || []).forEach(function (x) { if (x !== me) uniq[x] = 1; });
        ids = Object.keys(uniq);
        if (ids.length + 1 > MAX_GROUP) throw scErr('sc_err_group_full');
        ids.forEach(function (x) {
          if (!areFriends(d, me, x)) throw scErr('sc_err_not_friends');
          if (blockedEither(d, me, x)) throw scErr('sc_err_blocked');
        });
        var id = 'g' + (d.seq++) + Date.now().toString(36);
        d.chats[id] = { id: id, kind: 'group', direct_key: null, title: title, about: null, bg: null, owner_id: me, pinned_msg_id: null,
          perms: defPerms(), only_admins: false, slow_sec: 0, autodel_sec: 0, autodel_scope: 'all', banned_words: [], created_at: nowIso(), last_msg_at: nowIso() };
        d.members[id] = {}; d.members[id][me] = memberObj('owner');
        mSystem(d, id, me, 'created', null);
        ids.forEach(function (x) { d.members[id][x] = memberObj('member'); notify(d, x, 'added', me, id); });
        W(d); return id;
      });
    },
    chat: function (id) {
      return ask(function () {
        var me = needMe(), d = D();
        if (!d.chats[id] || !(d.members[id] || {})[me]) throw scErr('sc_err_not_member');
        var c = mChatDetail(d, id, MU());
        c.ctx = directCtx(d, c, me);
        return c;
      });
    },
    messages: function (chatId, o) {
      o = o || {};
      return ask(function () {
        var me = needMe(), d = D();
        if (!(d.members[chatId] || {})[me]) throw scErr('sc_err_not_member');
        var list = d.msgs.filter(function (m) { return m.chat_id === chatId && mVisible(m); });
        if (o.since) list = list.filter(function (m) { return tms(m.updated_at) > tms(o.since); });
        if (o.before) list = list.filter(function (m) { return m.id < o.before; });
        if (o.ids) list = list.filter(function (m) { return o.ids.indexOf(m.id) >= 0; });
        if (!o.since && !o.ids) list = list.slice(-(o.limit || 60));
        return list.map(function (m) { return mMsgOut(d, m); });
      });
    },
    send: function (chatId, p) {
      return act(function () {
        var me = needMe(), d = D(), c = d.chats[chatId];
        if (!c || !(d.members[chatId] || {})[me]) throw scErr('sc_err_not_member');
        var kind = p.kind || 'text', body = p.body != null ? String(p.body) : null;
        if (body !== null && !body.trim()) body = null;
        var detail = mChatDetail(d, chatId, {});
        var bad = sendCheck(detail, me, kind, body, p.file ? p.file.name : null, directCtx(d, c, me));
        if (bad) throw scErr(bad.code, bad.n);
        if ((kind === 'photo' && !p.photo) || (kind === 'file' && !p.file)) throw scErr('sc_err_generic');
        var now = nowIso(), my = d.members[chatId][me];
        var isAdm = my.role === 'owner' || my.role === 'admin';
        var exp = c.autodel_sec > 0 && !(c.kind === 'group' && c.autodel_scope === 'except_admins' && isAdm)
          ? new Date(Date.now() + c.autodel_sec * 1000).toISOString() : null;
        var replyOk = p.reply_to && d.msgs.some(function (m) { return m.id === p.reply_to && m.chat_id === chatId; });
        var msg = { id: d.seq++, chat_id: chatId, sender_id: me, kind: kind, body: body,
          media: kind === 'photo' ? p.photo : (kind === 'file' ? p.file.data : null),
          file_name: kind === 'file' ? String(p.file.name).slice(0, 200) : null, file_size: kind === 'file' ? (p.file.size || 0) : null,
          reply_to: replyOk ? p.reply_to : null, deleted: false, edited_at: null, expires_at: exp, created_at: now, updated_at: now };
        d.msgs.push(msg);
        my.last_sent_at = now; my.last_read_at = now; c.last_msg_at = now;
        W(d); return mMsgOut(d, msg);
      });
    },
    edit: function (id, body) {
      return act(function () {
        var me = needMe(), d = D();
        var m = d.msgs.filter(function (x) { return x.id === id; })[0];
        if (!m || m.sender_id !== me || m.deleted || ['text', 'photo', 'file'].indexOf(m.kind) < 0) throw scErr('sc_err_no_rights');
        body = String(body || '').trim() || null;
        if (m.kind === 'text' && !body) throw scErr('sc_err_empty');
        if (body && body.length > (m.kind === 'text' ? 4000 : 1000)) throw scErr('sc_err_too_long');
        var c = d.chats[m.chat_id], my = (d.members[m.chat_id] || {})[me] || {};
        if (c.kind === 'group' && hasBanned(c.banned_words, body)) throw scErr('sc_err_banned_word');
        if (c.kind === 'group' && !c.perms.links && hasLink(body) && my.role !== 'owner' && my.role !== 'admin') throw scErr('sc_err_no_links');
        m.body = body; m.edited_at = nowIso(); m.updated_at = m.edited_at;
        W(d); return mMsgOut(d, m);
      });
    },
    removeMsg: function (msg) {
      var id = typeof msg === 'object' ? msg.id : msg;
      return act(function () {
        var me = needMe(), d = D();
        var m = d.msgs.filter(function (x) { return x.id === id; })[0];
        if (!m || !(d.members[m.chat_id] || {})[me]) throw scErr('sc_err_not_member');
        var detail = mChatDetail(d, m.chat_id, {});
        if ((m.sender_id !== me || m.kind === 'system') && !can(detail, me, 'delete')) throw scErr('sc_err_no_rights');
        m.deleted = true; m.body = null; m.media = null; m.file_name = null; m.file_size = null; m.updated_at = nowIso();
        delete d.reacts[id];
        if (d.chats[m.chat_id].pinned_msg_id === id) d.chats[m.chat_id].pinned_msg_id = null;
        W(d); return true;
      });
    },
    react: function (id, emoji) {
      return act(function () {
        var me = needMe(), d = D();
        var m = d.msgs.filter(function (x) { return x.id === id && !x.deleted && x.kind !== 'system' && mVisible(x); })[0];
        if (!m) throw scErr('sc_err_generic');
        var c = d.chats[m.chat_id], my = (d.members[m.chat_id] || {})[me];
        if (!my) throw scErr('sc_err_not_member');
        if (c.kind === 'direct') { var cx = directCtx(d, c, me); if (cx.blocked) throw scErr('sc_err_blocked'); }
        else if (my.role === 'member' && (!c.perms.reactions || isRestricted(my))) throw scErr('sc_err_no_reactions');
        if (!d.reacts[id]) d.reacts[id] = {};
        var r;
        if (d.reacts[id][me] === emoji) { delete d.reacts[id][me]; r = 'removed'; } else { d.reacts[id][me] = emoji; r = 'added'; }
        m.updated_at = nowIso();
        W(d); return r;
      });
    },
    mute: function (chatId, on) {
      return ask(function () {
        var me = needMe(), d = D(), my = (d.members[chatId] || {})[me];
        if (!my) throw scErr('sc_err_not_member');
        my.muted = on !== false; W(d);
        return my.muted;
      });
    },
    here: function () { return Promise.resolve(true); },   // пробный режим: пушей нет
    readState: function (chatId) {
      return ask(function () {
        var me = needMe(), d = D(), mm = d.members[chatId] || {};
        if (!mm[me]) throw scErr('sc_err_not_member');
        return Object.keys(mm).map(function (u) { return { user_id: u, last_read_at: mm[u].last_read_at }; });
      });
    },
    markRead: function (chatId) {
      return ask(function () {
        var me = needMe(), d = D(), my = (d.members[chatId] || {})[me];
        if (my) { my.last_read_at = nowIso(); W(d); }
        return true;
      }).then(function (v) { emitChange('read'); return v; });
    },
    pinMessage: function (chatId, msgId) {
      return act(function () {
        var me = needMe(), d = D(), detail = mChatDetail(d, chatId, {});
        if (!detail || !can(detail, me, 'pin')) throw scErr('sc_err_no_rights');
        if (msgId != null && !d.msgs.some(function (m) { return m.id === msgId && m.chat_id === chatId && !m.deleted; })) throw scErr('sc_err_generic');
        d.chats[chatId].pinned_msg_id = msgId == null ? null : msgId;
        W(d); return true;
      });
    },
    groupUpdate: function (chatId, patch) {
      return act(function () {
        var me = needMe(), d = D(), c = d.chats[chatId];
        if (!c || c.kind !== 'group' || !(d.members[chatId] || {})[me]) throw scErr('sc_err_not_member');
        var detail = mChatDetail(d, chatId, {});
        var info = ['title', 'about', 'bg'], sets = ['perms', 'only_admins', 'slow_sec', 'autodel_sec', 'autodel_scope', 'banned_words'];
        Object.keys(patch).forEach(function (k) {
          if (info.indexOf(k) >= 0) { if (!can(detail, me, 'info')) throw scErr('sc_err_no_rights'); }
          else if (sets.indexOf(k) >= 0) { if (!can(detail, me, 'settings')) throw scErr('sc_err_no_rights'); }
          else throw scErr('sc_err_generic');
        });
        if ('title' in patch) { var tt = String(patch.title || '').trim(); if (!tt || tt.length > 64) throw scErr('sc_err_title'); c.title = tt; }
        if ('about' in patch) c.about = String(patch.about || '').trim().slice(0, 300) || null;
        if ('bg' in patch) { if (patch.bg && !STYLE_BY.bg[patch.bg]) throw scErr('sc_err_generic'); c.bg = patch.bg || null; }
        if (patch.perms) Object.keys(patch.perms).forEach(function (k) { if (k in c.perms) c.perms[k] = !!patch.perms[k]; });
        if ('only_admins' in patch) c.only_admins = !!patch.only_admins;
        if ('slow_sec' in patch) c.slow_sec = clampInt(patch.slow_sec, 0, 86400);
        if ('autodel_sec' in patch) c.autodel_sec = clampInt(patch.autodel_sec, 0, 31622400);
        if ('autodel_scope' in patch) c.autodel_scope = patch.autodel_scope === 'except_admins' ? 'except_admins' : 'all';
        if ('banned_words' in patch) c.banned_words = cleanWords(patch.banned_words);
        W(d); return true;
      });
    },
    groupAdd: function (chatId, ids) {
      return act(function () {
        var me = needMe(), d = D(), c = d.chats[chatId];
        if (!c || c.kind !== 'group') throw scErr('sc_err_not_member');
        var detail = mChatDetail(d, chatId, {});
        if (!can(detail, me, 'add')) throw scErr('sc_err_no_rights');
        var n = 0, mem = d.members[chatId];
        (ids || []).forEach(function (x) {
          if (x === me || mem[x]) return;
          if (!areFriends(d, me, x)) throw scErr('sc_err_not_friends');
          if (blockedEither(d, me, x)) throw scErr('sc_err_blocked');
          var b = (d.bans[chatId] || {})[x];
          if (b && (!b.until || tms(b.until) > Date.now()) && !can(detail, me, 'ban')) throw scErr('sc_err_user_banned');
          if (d.bans[chatId]) delete d.bans[chatId][x];
          if (Object.keys(mem).length >= MAX_GROUP) throw scErr('sc_err_group_full');
          mem[x] = memberObj('member'); notify(d, x, 'added', me, chatId); mSystem(d, chatId, me, 'added', x); n++;
        });
        W(d); return n;
      });
    },
    memberAction: function (chatId, uid, action, until, rights) {
      return act(function () {
        var me = needMe(), d = D(), c = d.chats[chatId];
        if (!c || c.kind !== 'group') throw scErr('sc_err_not_member');
        var mem = d.members[chatId], a = mem[me], tg = mem[uid];
        if (!a) throw scErr('sc_err_not_member');
        if (uid === me) throw scErr('sc_err_self');
        if (tg && tg.role === 'owner') throw scErr('sc_err_owner');
        var detail = mChatDetail(d, chatId, {});
        if (['kick', 'ban', 'restrict', 'unrestrict'].indexOf(action) >= 0) {
          if (!can(detail, me, 'ban')) throw scErr('sc_err_no_rights');
          if (tg && tg.role === 'admin' && !(a.role === 'owner' || tg.promoted_by === me)) throw scErr('sc_err_no_rights');
          if (action === 'ban') { if (!d.bans[chatId]) d.bans[chatId] = {}; d.bans[chatId][uid] = { until: until || null, by: me }; }
          if (action === 'kick' || action === 'ban') {
            if (tg) { delete mem[uid]; mSystem(d, chatId, me, action === 'ban' ? 'banned' : 'kicked', uid); }
          } else if (action === 'restrict') {
            if (!tg) throw scErr('sc_err_not_member');
            var keep = tg.last_read_at;
            mem[uid] = memberObj('member'); mem[uid].last_read_at = keep; mem[uid].restricted_until = until || 'infinity';
          } else if (tg) tg.restricted_until = null;
        } else if (action === 'unban') {
          if (!can(detail, me, 'ban')) throw scErr('sc_err_no_rights');
          if (d.bans[chatId]) delete d.bans[chatId][uid];
        } else if (action === 'promote') {
          if (!tg) throw scErr('sc_err_not_member');
          if (!can(detail, me, 'promote')) throw scErr('sc_err_no_rights');
          if (tg.role === 'admin' && !(a.role === 'owner' || tg.promoted_by === me)) throw scErr('sc_err_no_rights');
          rights = rights || {};
          var keys = ['info', 'delete', 'ban', 'add', 'pin', 'promote'];
          if (a.role !== 'owner' && keys.some(function (k) { return rights[k] && !a.rights[k]; })) throw scErr('sc_err_no_rights');
          var r = {}; keys.forEach(function (k) { r[k] = !!rights[k]; });
          tg.promoted_by = tg.role === 'admin' ? tg.promoted_by : me;
          tg.role = 'admin'; tg.rights = r; tg.restricted_until = null;
        } else if (action === 'demote') {
          if (!tg || tg.role !== 'admin') return 'ok';
          if (!(a.role === 'owner' || (can(detail, me, 'promote') && tg.promoted_by === me))) throw scErr('sc_err_no_rights');
          var lr = tg.last_read_at; mem[uid] = memberObj('member'); mem[uid].last_read_at = lr; mem[uid].last_sent_at = tg.last_sent_at;
        } else throw scErr('sc_err_generic');
        W(d); return 'ok';
      });
    },
    leave: function (chatId) {
      return act(function () {
        var me = needMe(), d = D(), c = d.chats[chatId], my = (d.members[chatId] || {})[me];
        if (!c || c.kind !== 'group' || !my) throw scErr('sc_err_not_member');
        if (my.role === 'owner') throw scErr('sc_err_owner');
        delete d.members[chatId][me]; mSystem(d, chatId, me, 'left', null);
        W(d); return true;
      });
    },
    groupDelete: function (chatId) {
      return act(function () {
        var me = needMe(), d = D(), my = (d.members[chatId] || {})[me];
        if (!my || my.role !== 'owner') throw scErr('sc_err_no_rights');
        delete d.chats[chatId]; delete d.members[chatId]; delete d.bans[chatId];
        d.msgs = d.msgs.filter(function (m) { return m.chat_id !== chatId; });
        W(d); return true;
      });
    },
    notifications: function () {
      return ask(function () {
        var me = needMe(), d = D();
        return d.notifs.filter(function (n) { return n.user === me; }).slice(-40).reverse()
          .map(function (n) { return { id: n.id, kind: n.kind, actor_id: n.actor, chat_id: n.chat, seen: n.seen, at: n.at }; });
      });
    },
    notifSeen: function () {
      return ask(function () {
        var me = needMe(), d = D();
        d.notifs.forEach(function (n) { if (n.user === me && n.kind !== 'request') n.seen = true; });
        W(d); return true;
      });
    },
    mediaUrl: function (m) { return Promise.resolve(m && m.media ? m.media : null); }
  };
  function defPerms() { return { text: true, photos: true, files: true, stickers: true, links: true, reactions: true, add: true, pin: true, info: false }; }
  function clampInt(v, lo, hi) { v = parseInt(v, 10); if (isNaN(v)) v = 0; return Math.max(lo, Math.min(hi, v)); }
  function ghost(id) { return { id: id, name: '…', avatar: null, frame: 'none', xp: 0, role: 'student', prefs: {}, ghost: true }; }

  /* =====================================================================
     НАСТОЯЩИЙ РЕЖИМ: Supabase REST (без supabase-js)
     ===================================================================== */
  var MSG_COLS = 'id,chat_id,sender_id,kind,body,media_path,file_name,file_size,reply_to,deleted,edited_at,expires_at,created_at,updated_at';
  var PERM_KEYS = ['text', 'photos', 'files', 'stickers', 'links', 'reactions', 'add', 'pin', 'info'];
  var RIGHT_KEYS = ['info', 'delete', 'ban', 'add', 'pin', 'promote'];
  function enc(v) { return encodeURIComponent(v); }
  function sb() { return Store.sb; }
  function api(method, path, body, opts) { return sb().api(method, path, body, opts); }
  function rpc(name, args) { return sb().rpc(name, args || {}); }
  var profCache = null, profAt = 0;
  function sbUser(p) {
    return { id: p.id, name: p.name, avatar: p.avatar_url || null, frame: p.frame || 'none', xp: p.xp || 0, role: p.role || 'student', prefs: p.prefs || {} };
  }
  function profiles(force) {
    if (!force && profCache && Date.now() - profAt < 30000) return Promise.resolve(profCache);
    return api('GET', '/rest/v1/profiles?select=id,name,avatar_url,frame,xp,role,prefs&order=created_at.asc').then(function (rows) {
      var m = {}; (rows || []).forEach(function (p) { m[p.id] = sbUser(p); });
      profCache = m; profAt = Date.now(); return m;
    });
  }
  function sbFacts(me) {
    return Promise.all([
      api('GET', '/rest/v1/friend_requests?select=from_id,to_id,created_at'),
      api('GET', '/rest/v1/friendships?select=user_a,user_b,created_at'),
      api('GET', '/rest/v1/user_marks?select=target_id,pinned,blocked,removed')
    ]).then(function (r) {
      var f = { friends: {}, incoming: {}, outgoing: {}, marks: {} };
      (r[0] || []).forEach(function (x) { if (x.to_id === me) f.incoming[x.from_id] = x.created_at; else if (x.from_id === me) f.outgoing[x.to_id] = x.created_at; });
      (r[1] || []).forEach(function (x) { f.friends[x.user_a === me ? x.user_b : x.user_a] = x.created_at; });
      (r[2] || []).forEach(function (x) { f.marks[x.target_id] = { pinned: x.pinned, blocked: x.blocked, removed: x.removed }; });
      return f;
    });
  }
  function sbChat(row, mems, bans, users) {
    var c = { id: row.id, kind: row.kind, direct_key: row.direct_key, title: row.title, about: row.about, bg: row.bg, owner_id: row.owner_id,
      pinned_msg_id: row.pinned_msg_id, perms: {}, only_admins: row.only_admins, slow_sec: row.slow_sec, autodel_sec: row.autodel_sec,
      autodel_scope: row.autodel_scope, banned_words: row.banned_words || [], created_at: row.created_at, last_msg_at: row.last_msg_at };
    PERM_KEYS.forEach(function (k) { c.perms[k] = !!row['p_' + k]; });
    c.members = (mems || []).map(function (m) {
      var r = {}; RIGHT_KEYS.forEach(function (k) { r[k] = !!m['r_' + k]; });
      return { user_id: m.user_id, user: users[m.user_id] || ghost(m.user_id), role: m.role, rights: r, promoted_by: m.promoted_by,
               restricted_until: m.restricted_until, last_read_at: m.last_read_at, last_sent_at: m.last_sent_at, joined_at: m.joined_at, muted: !!m.muted };
    });
    c.bans = (bans || []).filter(function (b) { return !b.until || tms(b.until) > Date.now(); })
      .map(function (b) { return { user_id: b.user_id, user: users[b.user_id] || ghost(b.user_id), until: b.until }; });
    return c;
  }
  function sbMsg(m, reacts) {
    var agg = {};
    (reacts || []).forEach(function (r) { if (r.message_id === m.id) { if (!agg[r.emoji]) agg[r.emoji] = []; agg[r.emoji].push(r.user_id); } });
    return { id: m.id, chat_id: m.chat_id, sender_id: m.sender_id, kind: m.kind, body: m.body, media: m.media_path, file_name: m.file_name,
      file_size: m.file_size, reply_to: m.reply_to, deleted: m.deleted, edited_at: m.edited_at, expires_at: m.expires_at,
      created_at: m.created_at, updated_at: m.updated_at, reactions: Object.keys(agg).map(function (e) { return { emoji: e, users: agg[e] }; }) };
  }
  function withReactions(rows) {
    rows = rows || [];
    var ids = rows.filter(function (m) { return !m.deleted && m.kind !== 'system'; }).map(function (m) { return m.id; });
    if (!ids.length) return Promise.resolve(rows.map(function (m) { return sbMsg(m, []); }));
    return api('GET', '/rest/v1/reactions?select=message_id,user_id,emoji&message_id=in.(' + ids.join(',') + ')').then(function (rs) {
      return rows.map(function (m) { return sbMsg(m, rs); });
    });
  }
  function dataUrlToBlob(d) {
    var parts = String(d).split(','), mime = (parts[0].match(/:(.*?);/) || [])[1] || 'application/octet-stream';
    var bin = atob(parts[1] || ''), arr = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
    return new Blob([arr], { type: mime });
  }
  function rnd() { return Math.random().toString(36).slice(2, 10); }
  function extOf(name) { var m = String(name || '').match(/\.([a-z0-9]{1,8})$/i); return m ? m[1].toLowerCase() : 'bin'; }
  var mediaCache = {};

  var SB = {
    users: function () { return profiles(); },
    people: function () {
      var me = myId();
      return Promise.all([profiles(true), sbFacts(me)]).then(function (r) { return buildPeople(me, r[0], r[1]); });
    },
    user: function (id) {
      var me = myId();
      return Promise.all([profiles(), sbFacts(me), rpc('sc_public_stats', { p_user: id })]).then(function (r) {
        var u = r[0][id]; if (!u) throw scErr('sc_err_no_user');
        var mk = r[1].marks[id] || {}, st = r[2] || {};
        return { user: u, rel: relOf(me, id, r[1]), pinned: !!mk.pinned, blocked: !!mk.blocked,
                 stats: { read: st.read || 0, solved: st.solved || 0, friends: st.friends || 0 } };
      });
    },
    request: function (to) { return rpc('sc_friend_request', { p_to: to }); },
    cancel: function (to) { return rpc('sc_friend_cancel', { p_to: to }); },
    accept: function (from) { return rpc('sc_friend_accept', { p_from: from }); },
    decline: function (from) { return rpc('sc_friend_decline', { p_from: from }); },
    unfriend: function (other) { return rpc('sc_friend_remove', { p_other: other }); },
    restore: function (other) { return rpc('sc_friend_restore', { p_other: other }); },
    block: function (other, on) { return rpc('sc_block', { p_other: other, p_on: on !== false }); },
    pinUser: function (other, on) { return rpc('sc_pin_user', { p_other: other, p_on: on !== false }); },

    chats: function () {
      return Promise.all([rpc('sc_my_chats'), profiles()]).then(function (r) {
        return (r[0] || []).map(function (c) {
          return { id: c.id, kind: c.kind, title: c.title, bg: c.bg, pinned_msg_id: c.pinned_msg_id, role: c.role, member_count: c.member_count, owner_id: c.owner_id || null,
                   other: c.kind === 'direct' && c.other_id ? (r[1][c.other_id] || ghost(c.other_id)) : null,
                   last: c.last || null, unread: c.unread || 0, muted: !!c.muted, last_msg_at: c.last_msg_at };
        });
      });
    },
    openDirect: function (other) { return rpc('sc_open_direct', { p_other: other }); },
    openSupport: function () { return rpc('sc_support_open'); },
    createGroup: function (title, ids) { return rpc('sc_create_group', { p_title: title, p_members: ids || [] }); },
    chat: function (id) {
      var me = myId();
      return Promise.all([
        api('GET', '/rest/v1/chats?select=*&id=eq.' + enc(id)),
        api('GET', '/rest/v1/chat_members?select=*&chat_id=eq.' + enc(id)),
        api('GET', '/rest/v1/chat_bans?select=user_id,until&chat_id=eq.' + enc(id)),
        profiles()
      ]).then(function (r) {
        if (!r[0] || !r[0][0]) throw scErr('sc_err_not_member');
        var c = sbChat(r[0][0], r[1], r[2], r[3]);
        if (c.kind !== 'direct') { c.ctx = null; return c; }
        var other = (c.members.filter(function (m) { return m.user_id !== me; })[0] || {}).user_id;
        return sbFacts(me).then(function (f) {
          c.ctx = { other: other, friends: !!(other && f.friends[other]), blocked: !!(other && (f.marks[other] || {}).blocked) };
          return c;
        });
      });
    },
    messages: function (chatId, o) {
      o = o || {};
      var q = '/rest/v1/messages?select=' + MSG_COLS + '&chat_id=eq.' + enc(chatId);
      if (o.since) q += '&updated_at=gt.' + enc(o.since) + '&order=updated_at.asc&limit=300';
      else if (o.ids) q += '&id=in.(' + o.ids.map(Number).join(',') + ')';
      else q += (o.before ? '&id=lt.' + Number(o.before) : '') + '&order=id.desc&limit=' + (o.limit || 60);
      return api('GET', q).then(function (rows) {
        rows = rows || [];
        if (!o.since && !o.ids) rows.reverse();
        return withReactions(rows);
      });
    },
    send: function (chatId, p) {
      var me = myId(), kind = p.kind || 'text', path = null, up = Promise.resolve();
      if (kind === 'photo' || kind === 'file') {
        path = chatId + '/' + me + '/' + Date.now() + '-' + rnd() + '.' + (kind === 'photo' ? 'jpg' : extOf(p.file && p.file.name));
        var blob = kind === 'photo' ? dataUrlToBlob(p.photo) : (p.file.blob || dataUrlToBlob(p.file.data));
        up = api('POST', '/storage/v1/object/chat/' + path, blob, { raw: true, contentType: kind === 'photo' ? 'image/jpeg' : (blob.type || 'application/octet-stream') });
      }
      var row = { chat_id: chatId, kind: kind, body: p.body || null, reply_to: p.reply_to || null };
      if (path) row.media_path = path;
      if (kind === 'file') { row.file_name = String(p.file.name).slice(0, 200); row.file_size = p.file.size || null; }
      return up.then(function () {
        return api('POST', '/rest/v1/messages?select=' + MSG_COLS, row, { headers: { Prefer: 'return=representation' } });
      }).then(function (r) { return sbMsg((r || [])[0] || {}, []); }, function (e) {
        if (path) api('DELETE', '/storage/v1/object/chat/' + path).catch(function () {});
        throw e;
      });
    },
    edit: function (id, body) {
      return api('PATCH', '/rest/v1/messages?select=' + MSG_COLS + '&id=eq.' + Number(id), { body: body },
        { headers: { Prefer: 'return=representation' } }).then(function (r) {
        if (!r || !r[0]) throw scErr('sc_err_no_rights');
        return sbMsg(r[0], []);
      });
    },
    removeMsg: function (msg) {
      var id = typeof msg === 'object' ? msg.id : msg;
      return rpc('sc_delete_message', { p_msg: id }).then(function () {
        if (msg && msg.media && msg.sender_id === myId()) api('DELETE', '/storage/v1/object/chat/' + msg.media).catch(function () {});
        return true;
      });
    },
    react: function (id, emoji) { return rpc('sc_react', { p_msg: id, p_emoji: emoji }); },
    markRead: function (chatId) { return rpc('sc_mark_read', { p_chat: chatId }); },
    /* кто до какого момента прочитал — лёгкий запрос для галочек ✓✓ */
    readState: function (chatId) { return api('GET', '/rest/v1/chat_members?select=user_id,last_read_at&chat_id=eq.' + enc(chatId)); },
    here: function (chatId, on, keep) { return sb().rpc('sc_here', { p_chat: chatId, p_on: on !== false }, keep ? { keepalive: true } : undefined); },
    mute: function (chatId, on) { return rpc('sc_mute', { p_chat: chatId, p_on: on !== false }).then(function () { return on !== false; }); },
    pinMessage: function (chatId, msgId) { return rpc('sc_pin_message', { p_chat: chatId, p_msg: msgId == null ? null : msgId }); },
    groupUpdate: function (chatId, patch) {
      var p = {};
      Object.keys(patch).forEach(function (k) {
        if (k === 'perms') Object.keys(patch.perms).forEach(function (pk) { p['p_' + pk] = !!patch.perms[pk]; });
        else p[k] = patch[k];
      });
      return rpc('sc_group_update', { p_chat: chatId, p_patch: p });
    },
    groupAdd: function (chatId, ids) { return rpc('sc_group_add', { p_chat: chatId, p_users: ids || [] }); },
    memberAction: function (chatId, uid, action, until, rights) {
      return rpc('sc_member_action', { p_chat: chatId, p_user: uid, p_action: action, p_until: until || null, p_rights: rights || {} });
    },
    leave: function (chatId) { return rpc('sc_leave', { p_chat: chatId }); },
    groupDelete: function (chatId) { return rpc('sc_group_delete', { p_chat: chatId }); },
    notifications: function () {
      return api('GET', '/rest/v1/sc_notifications?select=id,kind,actor_id,chat_id,seen,created_at&order=created_at.desc&limit=40').then(function (rows) {
        return (rows || []).map(function (n) { return { id: n.id, kind: n.kind, actor_id: n.actor_id, chat_id: n.chat_id, seen: n.seen, at: n.created_at }; });
      });
    },
    notifSeen: function () { return rpc('sc_notif_seen'); },
    /* закрытый бакет: скачиваем с токеном и показываем через blob: URL */
    mediaUrl: function (m) {
      var path = m && m.media;
      if (!path) return Promise.resolve(null);
      if (/^(data:|blob:|https?:)/.test(path)) return Promise.resolve(path);
      if (mediaCache[path]) return mediaCache[path];
      mediaCache[path] = sb().token().then(function (tok) {
        return fetch(sb().url + '/storage/v1/object/authenticated/chat/' + path, { headers: { apikey: sb().key, Authorization: 'Bearer ' + tok } });
      }).then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.blob();
      }).then(function (b) { return URL.createObjectURL(b); }, function (e) { delete mediaCache[path]; throw e; });
      return mediaCache[path];
    }
  };

  /* =====================================================================
     ПУБЛИЧНЫЙ API
     ===================================================================== */
  var B = Store.mode === 'supabase' ? SB : MOCK;
  var mutating = { mute: 1, request: 1, cancel: 1, accept: 1, decline: 1, unfriend: 1, removeMsg: 1, restore: 1, block: 1, pinUser: 1, openDirect: 1, createGroup: 1,
    openSupport: 1, send: 1, edit: 1, react: 1, pinMessage: 1, groupUpdate: 1, groupAdd: 1, memberAction: 1, leave: 1, groupDelete: 1 };
  /* после этих действий просим сервер разослать пуш (заявка, принятие, группа, сообщение) */
  var PUSH_HINT = { request: 1, accept: 1, createGroup: 1, groupAdd: 1, send: 1 };
  function wrap(name) {
    return function () {
      var args = arguments;
      return new Promise(function (res) { res(B[name].apply(null, args)); }).then(function (v) {
        if (Store.mode === 'supabase' && mutating[name]) { emitChange(name); setTimeout(refreshBadges, 300); }
        if (Store.mode === 'supabase' && PUSH_HINT[name] && window.Push && Push.hint) {
          Push.hint(name === 'send' ? { action: 'message', id: v && v.id } : { action: 'social' });
        }
        if (Store.mode === 'mock' && mutating[name]) setTimeout(refreshBadges, 0);
        return v;
      }, function (e) { throw normErr(e); });
    };
  }

  var Social = {
    mode: Store.mode,
    STYLES: STYLES, STICKERS: STICKERS, REACTIONS: REACTIONS, MAX_GROUP: MAX_GROUP,
    styleOf: styleOf,
    isUnlocked: function (kind, id, level) { var s = STYLE_BY[kind][id]; return !!s && (level || 0) >= s.lvl; },
    can: can, abilities: abilities, sendCheck: sendCheck, isRestricted: isRestricted, memberOf: memberOf, hasLink: hasLink,
    errText: errText, normErr: normErr, levelOf: levelOf,
    _mock: MOCK, _sb: SB, _setBackend: function (b) { B = b === 'supabase' ? SB : MOCK; Social.mode = b; profCache = null; },
    invalidate: function () { profCache = null; }
  };
  ['users', 'people', 'user', 'request', 'cancel', 'accept', 'decline', 'restore', 'block', 'pinUser',
   'chats', 'openDirect', 'openSupport', 'createGroup', 'chat', 'messages', 'send', 'edit', 'react', 'markRead', 'here', 'readState', 'mute', 'pinMessage',
   'groupUpdate', 'groupAdd', 'memberAction', 'leave', 'groupDelete', 'notifSeen', 'mediaUrl'].forEach(function (n) { Social[n] = wrap(n); });
  Social.removeFriend = wrap('unfriend');
  Social.removeMessage = wrap('removeMsg');

  /* ---------- «Сообщить о проблеме» → личная переписка с админами ----------
     Social.sendSupport({html?, text?, images?: [JPEG dataURL]}) → Promise<{chatId, sent}>.
     Работает для любого пользователя (дружба не нужна); админы видят её в «Чатах». */
  function htmlToText(html) {
    try {
      var doc = new DOMParser().parseFromString('<body>' + String(html || '').replace(/<br\s*\/?>/gi, '\n') + '</body>', 'text/html');
      return (doc.body.textContent || '').replace(/\n{3,}/g, '\n\n').trim();
    } catch (e) { return String(html || '').replace(/<[^>]*>/g, '').trim(); }
  }
  Social.sendSupport = function (o) {
    o = o || {};
    var text = String(o.text != null && String(o.text).trim() ? o.text : htmlToText(o.html)).trim().slice(0, 4000);
    var images = (o.images || []).filter(function (x) { return /^data:image\//.test(String(x)); }).slice(0, 10);
    return Social.openSupport().then(function (cid) {
      var sent = 0, chain = Promise.resolve();
      if (text) chain = chain.then(function () { return Social.send(cid, { kind: 'text', body: text }).then(function () { sent++; }); });
      images.forEach(function (img) { chain = chain.then(function () { return Social.send(cid, { kind: 'photo', photo: img }).then(function () { sent++; }); }); });
      return chain.then(function () { return { chatId: cid, sent: sent }; });
    });
  };

  /* ---------- уведомления: заявки, принятые заявки, добавление в группу, новые сообщения ---------- */
  Social.notifications = function () {
    return Promise.all([wrap('notifications')(), Social.chats().catch(function () { return []; }), Social.users().catch(function () { return {}; })])
      .then(function (r) {
        var users = r[2], items = [];
        r[1].forEach(function (c) {
          if (!c.unread || c.muted || c.id === openChatId()) return;   // «без уведомлений» и открытый сейчас чат в колокольчик не попадают
          var name = c.kind === 'direct' ? (c.other ? c.other.name : '…') : c.title;
          items.push({ id: 'm' + c.id, kind: 'message', user: c.other, chat_id: c.id, title: c.title, count: c.unread, seen: false, at: c.last_msg_at,
                       text: t('sc_n_message', { name: name, n: c.unread }), href: '#/chat/' + c.id });
        });
        r[0].forEach(function (n) {
          var u = users[n.actor_id] || ghost(n.actor_id);
          var href = n.kind === 'added' && n.chat_id ? '#/chat/' + n.chat_id : (n.kind === 'request' ? '#/people' : '#/user/' + n.actor_id);
          if (n.kind === 'request' && n.seen) return;
          items.push({ id: n.id, kind: n.kind, user: u, chat_id: n.chat_id, seen: n.seen, at: n.at, href: href,
                       text: t('sc_n_' + n.kind, { name: u.name }) });
        });
        return items;
      });
  };
  Social.markNotificationsSeen = function () { return Social.notifSeen().then(function () { refreshBadges(); }); };

  /* =====================================================================
     НИК: стиль + уровень + бегущая строка, если не помещается
     ===================================================================== */
  var RTL_RE = /[֐-ࣿיִ-﷿ﹰ-﻿]/;
  var LTR_RE = /[A-Za-zÀ-ɏͰ-ϿЀ-ӿ]/;
  function textDir(s) {
    s = String(s || '');
    for (var i = 0; i < s.length; i++) {
      var ch = s.charAt(i);
      if (RTL_RE.test(ch)) return 'rtl';
      if (LTR_RE.test(ch)) return 'ltr';
    }
    return I18N.dir();
  }
  /* разбить на «буквы» с учётом эмодзи и диакритики (для волны) */
  function graphemes(s) {
    if (window.Intl && Intl.Segmenter) {
      try { return Array.from(new Intl.Segmenter(undefined, { granularity: 'grapheme' }).segment(s), function (x) { return x.segment; }); } catch (e) { /* ниже */ }
    }
    var cps = Array.from(s), out = [];
    cps.forEach(function (c) {
      var joiner = /[̀-֑ͯ-ׇ‍️⃣]|[\uD83C][\uDFFB-\uDFFF]/.test(c);
      if (out.length && (joiner || out[out.length - 1].slice(-1) === '‍')) out[out.length - 1] += c; else out.push(c);
    });
    return out;
  }
  function motionOff() { return U.reducedMotion() || document.documentElement.getAttribute('data-motion') === 'reduce'; }
  var RANK_SVG = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M6 1.2l1.4 2.9 3.2.4-2.3 2.2.6 3.1L6 8.3 3.1 9.8l.6-3.1L1.4 4.5l3.2-.4z" fill="currentColor"/></svg>';
  function levelBadge(lvl) {
    var tier = lvl >= 90 ? 'max' : lvl >= 60 ? 'gold' : lvl >= 30 ? 'violet' : lvl >= 10 ? 'teal' : 'base';
    var b = el('span', { class: 'sc-lvl sc-lvl--' + tier, title: t('level', { n: lvl }), 'aria-label': t('level', { n: lvl }) });
    b.innerHTML = RANK_SVG + '<b>' + lvl + '</b>';
    return b;
  }
  /* эмодзи в градиентном нике остаются цветными: оборачиваем их отдельно */
  var EMO_RE = null;
  try { EMO_RE = new RegExp('\\p{Extended_Pictographic}|\\p{Regional_Indicator}', 'u'); } catch (e) { EMO_RE = /[\uD83C-\uDBFF][\uDC00-\uDFFF]|[☀-➿⭐⭕]/; }
  function isEmoji(g) { return EMO_RE.test(g); }
  function nickEl(name, style) {
    var dir = textDir(name);
    var n = el('bdi', { class: 'sc-nick sc-nick--' + style, dir: dir, 'data-text': name });
    var wave = style === 'wave' && !/[؀-ۿ]/.test(name);
    var gs = graphemes(name), run = '';
    function flush() { if (run) { n.appendChild(document.createTextNode(run)); run = ''; } }
    gs.forEach(function (g, i) {
      if (wave) { n.appendChild(el('span', { class: 'sc-wv' + (isEmoji(g) ? ' sc-emo' : ''), style: 'animation-delay:' + (i * 0.09).toFixed(2) + 's' }, g === ' ' ? ' ' : g)); return; }
      if (isEmoji(g)) { flush(); n.appendChild(el('span', { class: 'sc-emo' }, g)); } else run += g;
    });
    flush();
    return n;
  }
  /* nameEl(user, {size:'s'|'m'|'l'|'xl', badge:true, marquee:true, red:false, style:override}) */
  function nameEl(user, opts) {
    opts = opts || {};
    user = user || {};
    var name = String(user.name || '…');
    var style = styleOf('nick', opts.style || (user.prefs && user.prefs.nickStyle));
    var dir = textDir(name);
    var nick = nickEl(name, style);
    var track = el('span', { class: 'sc-name__track' }, nick);
    var clip = el('span', { class: 'sc-name__clip', dir: dir }, track);
    var root = el('span', { class: 'sc-name' + (opts.size ? ' sc-name--' + opts.size : '') + (opts.red ? ' sc-name--red' : '') + (STYLE_BY.nick[style].anim ? ' sc-name--anim' : ''),
      title: name }, [clip, opts.badge === false ? null : levelBadge(levelOf(user))]);
    if (opts.marquee !== false) queueFit(root);
    return root;
  }
  var fitQueue = [], fitTimer = null;
  function queueFit(root) {
    root._scTries = 0; fitQueue.push(root);
    if (!fitTimer) fitTimer = setTimeout(flushFit, 30);
  }
  function connected(n) { return n.isConnected !== undefined ? n.isConnected : document.documentElement.contains(n); }
  function flushFit() {
    fitTimer = null;
    var again = [];
    fitQueue.forEach(function (r) {
      if (connected(r) && r.offsetWidth) fitMarquee(r);
      else if (r._scTries++ < 25) again.push(r);
    });
    fitQueue = again;
    if (fitQueue.length) fitTimer = setTimeout(flushFit, 120);
  }
  function fitMarquee(root) {
    var clip = root.querySelector('.sc-name__clip'), track = root.querySelector('.sc-name__track');
    if (!clip || !track) return;
    var clone = track.querySelector('.sc-nick--clone');
    if (clone) track.removeChild(clone);
    root.classList.remove('is-marquee');
    track.style.animationDuration = '';
    var nick = track.firstChild;
    var over = nick.getBoundingClientRect().width - clip.getBoundingClientRect().width;
    if (over > 1.5) {
      root.classList.add('is-over');
      if (motionOff()) return;
      clone = nick.cloneNode(true);
      clone.classList.add('sc-nick--clone'); clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
      root.classList.add('is-marquee');
      var w = nick.getBoundingClientRect().width + 36;   // 36 = отступ между копиями (css)
      track.style.animationDuration = Math.max(7, w / 26).toFixed(1) + 's';   // ~26px/с — спокойно
    } else root.classList.remove('is-over');
  }
  function refitAll() { U.$$('.sc-name').forEach(function (r) { if (r.querySelector('.sc-name__clip')) fitMarquee(r); }); }
  var rz = null;
  window.addEventListener('resize', function () { clearTimeout(rz); rz = setTimeout(refitAll, 200); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { setTimeout(refitAll, 50); });

  Social.nameEl = nameEl;
  Social.levelBadge = levelBadge;
  Social.refitNames = refitAll;
  Social.textDir = textDir;

  /* =====================================================================
     ПИКЕРЫ СТИЛЕЙ (ник, пузырь, фон). Открываются по уровню, как рамки.
     ===================================================================== */
  function picker(kind, opts) {
    opts = opts || {};
    var level = Math.max(0, +opts.level || 0);
    var current = styleOf(kind, opts.current);
    var me = Store.auth.current() || {};
    var sampleUser = opts.user || me;
    var root = el('div', { class: 'scp scp--' + kind });
    var buttons = [];
    function tile(s) {
      var locked = level < s.lvl;
      var prev;
      if (kind === 'nick') {
        prev = el('span', { class: 'scp__prev scp__prev--nick' }, nameEl({ name: sampleUser.name, xp: sampleUser.xp, prefs: { nickStyle: s.id } }, { badge: false, marquee: false }));
      } else if (kind === 'bubble') {
        prev = el('span', { class: 'scp__prev scp__prev--bubble sc-bg sc-bg--plain' }, [
          el('span', { class: 'sc-bub sc-bub--' + s.id + ' sc-bub--in scp__b1' }, el('span', { class: 'sc-bub__text' }, t('sc_sample_hi'))),
          el('span', { class: 'sc-bub sc-bub--' + s.id + ' sc-bub--out scp__b2' }, el('span', { class: 'sc-bub__text' }, '🙂'))
        ]);
      } else {
        prev = el('span', { class: 'scp__prev scp__prev--bg sc-bg sc-bg--' + s.id }, [
          el('span', { class: 'sc-bub sc-bub--classic sc-bub--in scp__b1' }, el('span', { class: 'sc-bub__text' }, '…')),
          el('span', { class: 'sc-bub sc-bub--classic sc-bub--out scp__b2' }, el('span', { class: 'sc-bub__text' }, '✓'))
        ]);
      }
      var b = el('button', { type: 'button', class: 'scp__item' + (locked ? ' is-locked' : '') + (s.id === current ? ' is-current' : ''),
        'data-id': s.id, 'aria-pressed': s.id === current ? 'true' : 'false',
        'aria-label': U.tr(s.name) + (locked ? ' — ' + t('locked_until', { n: s.lvl }) : '') }, [
        prev,
        el('span', { class: 'scp__name' }, [s.anim ? el('span', { class: 'scp__anim', html: Icons.get('spark') }) : null, U.tr(s.name)]),
        locked ? el('span', { class: 'scp__lock', html: Icons.get('lock') + '<span>' + U.esc(t('sc_lv_n', { n: s.lvl })) + '</span>' }) : null,
        el('span', { class: 'scp__check', html: Icons.get('check') })
      ]);
      b.addEventListener('click', function () {
        if (locked) { U.toast(t('locked_until', { n: s.lvl })); return; }
        if (current === s.id) return;
        current = s.id;
        buttons.forEach(function (x) {
          var on = x.getAttribute('data-id') === current;
          x.classList.toggle('is-current', on); x.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        if (typeof opts.onPick === 'function') opts.onPick(s.id);
      });
      buttons.push(b);
      return b;
    }
    function group(title, list) {
      root.appendChild(el('div', { class: 'scp__head' }, title));
      root.appendChild(el('div', { class: 'scp__grid' }, list.map(tile)));
    }
    group(t('sc_styles_static'), STYLES[kind].filter(function (s) { return !s.anim; }));
    group(t('sc_styles_anim'), STYLES[kind].filter(function (s) { return s.anim; }));
    return root;
  }
  /* для «Личного кабинета»: nickStylePicker({current, level, onPick, user?, onName?}) */
  Social.nickStylePicker = function (opts) {
    opts = opts || {};
    var wrapEl = el('div', { class: 'sc-nickpick' });
    if (typeof opts.onName === 'function') {
      var u = opts.user || Store.auth.current() || {};
      var inp = el('input', { class: 'input', type: 'text', maxlength: '64', dir: 'auto', value: u.name || '', 'aria-label': t('sc_nickname'), autocomplete: 'nickname' });
      inp.addEventListener('input', function () { opts.onName(inp.value); });
      wrapEl.appendChild(el('label', { class: 'field' }, [el('span', { class: 'field__label' }, t('sc_nickname')), inp,
        el('span', { class: 'field__hint' }, t('sc_nickname_hint'))]));
    }
    wrapEl.appendChild(picker('nick', opts));
    return wrapEl;
  };
  Social.bubblePicker = function (opts) { return picker('bubble', opts); };
  Social.bgPicker = function (opts) { return picker('bg', opts); };

  /* =====================================================================
     ФОТО: сжатие на телефоне до 1280px JPEG ~0.8
     ===================================================================== */
  Social.compressImage = function (file, max, quality) {
    max = max || 1280; quality = quality || 0.8;
    return new Promise(function (resolve, reject) {
      if (!file || !/^image\//.test(file.type || '')) { reject(scErr('sc_err_not_image')); return; }
      var url = URL.createObjectURL(file);
      var img = new Image();
      img.onload = function () {
        var w = img.naturalWidth, h = img.naturalHeight, k = Math.min(1, max / Math.max(w, h));
        var cw = Math.max(1, Math.round(w * k)), ch = Math.max(1, Math.round(h * k));
        var c = document.createElement('canvas'); c.width = cw; c.height = ch;
        var g = c.getContext('2d');
        g.fillStyle = '#fff'; g.fillRect(0, 0, cw, ch);   // прозрачный PNG → белый фон
        g.drawImage(img, 0, 0, cw, ch);
        URL.revokeObjectURL(url);
        try { resolve({ data: c.toDataURL('image/jpeg', quality), width: cw, height: ch }); } catch (e) { reject(scErr('sc_err_not_image')); }
      };
      img.onerror = function () { URL.revokeObjectURL(url); reject(scErr('sc_err_not_image')); };
      img.src = url;
    });
  };
  Social.readFile = function (file, maxBytes) {
    return new Promise(function (resolve, reject) {
      if (!file) { reject(scErr('sc_err_generic')); return; }
      if (maxBytes && file.size > maxBytes) { reject(scErr('sc_err_file_big', Math.round(maxBytes / 1024 / 1024 * 10) / 10)); return; }
      if (Store.mode === 'supabase') { resolve({ name: file.name, size: file.size, blob: file }); return; }
      var r = new FileReader();
      r.onload = function () { resolve({ name: file.name, size: file.size, data: r.result }); };
      r.onerror = function () { reject(scErr('sc_err_generic')); };
      r.readAsDataURL(file);
    });
  };
  Social.FILE_LIMIT = Store.mode === 'supabase' ? 10 * 1024 * 1024 : 400 * 1024;

  /* =====================================================================
     ОПРОС И ЗНАЧКИ: красная точка у «Чаты»/«Люди» и у колокольчика
     ===================================================================== */
  var last = { unread: 0, requests: 0, notifs: 0 }, badgeTimer = null, busy = false;
  function applyBadges() {
    var chats = U.$('.navlink[data-path="/chats"]'), people = U.$('.navlink[data-path="/people"]'), bell = U.$('.bell');
    if (chats) chats.classList.toggle('navlink--dot', last.unread > 0);
    if (people) people.classList.toggle('navlink--dot', last.requests > 0);
    var has = last.unread > 0 || last.notifs > 0;
    if (bell) {
      if (has) { bell.classList.add('bell--has'); bell.setAttribute('data-sc-has', '1'); }
      else if (bell.getAttribute('data-sc-has') === '1') { bell.classList.remove('bell--has'); bell.removeAttribute('data-sc-has'); }
    }
  }
  function refreshBadges() {
    if (busy || !Store.auth.current()) return Promise.resolve(last);
    busy = true;
    return Promise.all([B.chats(), B.notifications()]).then(function (r) {
      busy = false;
      var oc = openChatId();
      var unread = 0; r[0].forEach(function (c) { if (!c.muted && c.id !== oc) unread += c.unread || 0; });
      var notifs = r[1].filter(function (n) { return !n.seen; });
      var prev = last.unread;
      last = { unread: unread, requests: notifs.filter(function (n) { return n.kind === 'request'; }).length, notifs: notifs.length };
      applyBadges();
      if (unread !== prev) emitChange('unread');
      return last;
    }, function () { busy = false; return last; });
  }
  Social.refreshBadges = refreshBadges;
  Social.badges = function () { return last; };
  function startBadges() {
    if (badgeTimer) clearInterval(badgeTimer);
    badgeTimer = setInterval(function () { if (!document.hidden) refreshBadges(); }, Store.mode === 'mock' ? 4000 : 20000);
    refreshBadges();
  }
  /* app.js пересобирает каркас при каждом переходе — возвращаем точки на место */
  ['hashchange', 'langchange'].forEach(function (ev) {
    (ev === 'hashchange' ? window : document).addEventListener(ev, function () { setTimeout(applyBadges, 0); });
  });
  document.addEventListener('userchange', function () { profCache = null; setTimeout(refreshBadges, 0); });
  document.addEventListener('visibilitychange', function () { if (!document.hidden) refreshBadges(); });
  window.addEventListener('storage', function (e) { if (e.key === MK || e.key === 'mock_users') { refreshBadges(); emitChange('storage'); } });
  document.addEventListener('DOMContentLoaded', function () { Store.ready.then(startBadges, startBadges); });

  /* Колокольчик: дописываем наши уведомления в окошко app.js (если app.js сам не вставил Social.notifPanel()) */
  Social.notifPanel = function () {
    var box = el('div', { class: 'sc-notif' }, el('div', { class: 'sc-notif__loading muted' }, '…'));
    Social.notifications().then(function (items) {
      box.innerHTML = '';
      /* надпись «Новых уведомлений нет» показываем только одну: свою, а старую из шапки прячем */
      var pop = box.parentNode;
      if (pop) U.$$('p.muted', pop).forEach(function (p) { if (!box.contains(p) && p.textContent === t('no_notifications')) p.style.display = 'none'; });
      /* в колокольчике только новое; вся история — на странице «Все уведомления» */
      items = items.filter(function (n) { return !n.seen; });
      if (!items.length) { box.appendChild(el('p', { class: 'muted sc-notif__empty' }, t('no_notifications'))); }
      items.slice(0, 12).forEach(function (n) {
        box.appendChild(el('a', { class: 'sc-notif__item is-new', href: n.href, onclick: function () {
          var a = this; if (a.parentNode) a.parentNode.removeChild(a);
          if (!box.querySelector('.sc-notif__item') && !box.querySelector('.sc-notif__empty')) box.insertBefore(el('p', { class: 'muted sc-notif__empty' }, t('no_notifications')), box.firstChild);
          Social.markNotificationsSeen();
        } }, [
          n.user ? App.avatar(n.user, 36) : el('span', { class: 'sc-notif__ic', html: Icons.get('chat') }),
          el('span', { class: 'sc-notif__text' }, [el('span', null, n.text), el('small', { class: 'muted' }, fmtAgo(n.at))])
        ]));
      });
      box.appendChild(el('a', { class: 'sc-notif__all', href: '#/notifications' }, t('sc_n_all')));
      setTimeout(function () { Social.markNotificationsSeen(); }, 1200);
    }, function () { box.innerHTML = ''; });
    return box;
  };
  document.addEventListener('click', function (e) {
    var b = e.target && e.target.closest ? e.target.closest('.bell') : null;
    if (!b) return;
    setTimeout(function () {
      var pop = U.$('.notif-pop');
      if (pop && !pop.querySelector('.sc-notif')) pop.appendChild(Social.notifPanel());
    }, 0);
  });

  /* ---------- время ---------- */
  function locale() { return I18N.lang === 'he' ? 'he-IL' : I18N.lang === 'ru' ? 'ru-RU' : 'en-GB'; }
  function fmtTime(iso) {
    var d = new Date(tms(iso));
    try { return d.toLocaleTimeString(locale(), { hour: '2-digit', minute: '2-digit' }); } catch (e) { return d.getHours() + ':' + ('0' + d.getMinutes()).slice(-2); }
  }
  function fmtDay(iso) {
    var d = new Date(tms(iso)), now = new Date();
    var day0 = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    if (d.getTime() >= day0) return t('sc_today');
    if (d.getTime() >= day0 - 86400000) return t('sc_yesterday');
    try { return d.toLocaleDateString(locale(), { day: 'numeric', month: 'long', year: d.getFullYear() === now.getFullYear() ? undefined : 'numeric' }); }
    catch (e) { return d.toDateString(); }
  }
  function fmtShort(iso) {
    var d = new Date(tms(iso)), now = new Date();
    if (d.toDateString() === now.toDateString()) return fmtTime(iso);
    if (now - d < 6 * 86400000) { try { return d.toLocaleDateString(locale(), { weekday: 'short' }); } catch (e) { /* ниже */ } }
    try { return d.toLocaleDateString(locale(), { day: 'numeric', month: 'short' }); } catch (e) { return d.toDateString(); }
  }
  function fmtAgo(iso) {
    var s = Math.max(0, Math.round((Date.now() - tms(iso)) / 1000));
    if (s < 60) return t('sc_just_now');
    if (s < 3600) return t('sc_min_ago', { n: Math.round(s / 60) });
    if (s < 86400) return t('sc_h_ago', { n: Math.round(s / 3600) });
    return fmtShort(iso);
  }
  Social.fmt = { time: fmtTime, day: fmtDay, short: fmtShort, ago: fmtAgo, ms: tms };

  window.Social = Social;

  /* ---------- переводы общих строк ---------- */
  I18N.add({
    he: {
      sc_styles_static: 'סגנונות', sc_styles_anim: 'סגנונות מונפשים', sc_lv_n: 'רמה {n}', sc_sample_hi: 'היי! 👋',
      sc_nickname: 'כינוי', sc_nickname_hint: 'כל שפה, אימוג׳י ורווחים — עד 64 תווים.',
      sc_n_message: '{name}: הודעות חדשות ({n})', sc_n_request: '{name} רוצה להיות חבר שלך', sc_n_accepted: '{name} אישר/ה את בקשת החברות',
      sc_n_added: '{name} הוסיף/ה אותך לקבוצה', sc_n_all: 'כל ההתראות',
      sc_today: 'היום', sc_yesterday: 'אתמול', sc_just_now: 'עכשיו', sc_min_ago: 'לפני {n} דק׳', sc_h_ago: 'לפני {n} שע׳',
      sc_err_generic: 'משהו השתבש, נסו שוב', sc_err_auth: 'צריך להתחבר מחדש', sc_err_self: 'זה אתה 🙂',
      sc_err_no_user: 'המשתמש לא נמצא', sc_err_blocked: 'אי אפשר: יש חסימה בין המשתמשים', sc_err_not_friends: 'אפשר לכתוב רק לחברים',
      sc_err_no_request: 'הבקשה כבר לא בתוקף', sc_err_not_member: 'אתה לא בצ׳אט הזה', sc_err_no_rights: 'אין לך הרשאה לזה',
      sc_err_only_admins: 'בקבוצה הזו רק מנהלים כותבים', sc_err_restricted: 'הוגבלת בקבוצה הזו',
      sc_err_no_text: 'אסור לשלוח טקסט בקבוצה הזו', sc_err_no_photos: 'אסור לשלוח תמונות בקבוצה הזו', sc_err_no_files: 'אסור לשלוח קבצים בקבוצה הזו',
      sc_err_no_stickers: 'אסור לשלוח מדבקות בקבוצה הזו', sc_err_no_links: 'אסור לשלוח קישורים בקבוצה הזו', sc_err_no_reactions: 'תגובות כבויות בקבוצה הזו',
      sc_err_slow: 'מצב איטי: אפשר לכתוב שוב בעוד {n} שנ׳', sc_err_banned_word: 'ההודעה מכילה מילה אסורה בקבוצה',
      sc_err_group_full: 'בקבוצה יכולים להיות עד 50 משתתפים', sc_err_user_banned: 'המשתמש חסום בקבוצה', sc_err_owner: 'אי אפשר עם יוצר הקבוצה',
      sc_err_title: 'צריך שם לקבוצה (עד 64 תווים)', sc_err_empty: 'ההודעה ריקה', sc_err_too_long: 'ההודעה ארוכה מדי',
      sc_err_locked: 'הסגנון עוד נעול', sc_err_storage_full: 'אין מקום בדפדפן (מצב ניסיון). מחקו תמונות ישנות.',
      sc_support: 'תמיכה', sc_support_from: 'תמיכה · {name}', sc_support_sub: 'מנהלי האתר רואים את ההודעות כאן',
      sc_err_not_image: 'זו לא תמונה', sc_err_file_big: 'הקובץ גדול מדי (עד {n} MB)'
    },
    ru: {
      sc_styles_static: 'Стили', sc_styles_anim: 'Анимированные стили', sc_lv_n: 'Ур. {n}', sc_sample_hi: 'Привет! 👋',
      sc_nickname: 'Ник', sc_nickname_hint: 'Любой язык, эмодзи и пробелы — до 64 символов.',
      sc_n_message: '{name}: новые сообщения ({n})', sc_n_request: '{name} хочет добавить тебя в друзья', sc_n_accepted: '{name} принял(а) заявку в друзья',
      sc_n_added: '{name} добавил(а) тебя в группу', sc_n_all: 'Все уведомления',
      sc_today: 'Сегодня', sc_yesterday: 'Вчера', sc_just_now: 'только что', sc_min_ago: '{n} мин назад', sc_h_ago: '{n} ч назад',
      sc_err_generic: 'Что-то пошло не так, попробуй ещё раз', sc_err_auth: 'Нужно войти заново', sc_err_self: 'Это ты 🙂',
      sc_err_no_user: 'Пользователь не найден', sc_err_blocked: 'Нельзя: между вами блокировка', sc_err_not_friends: 'Писать можно только друзьям',
      sc_err_no_request: 'Заявка уже недействительна', sc_err_not_member: 'Тебя нет в этом чате', sc_err_no_rights: 'Нет прав на это действие',
      sc_err_only_admins: 'В этой группе пишут только админы', sc_err_restricted: 'Тебя ограничили в этой группе',
      sc_err_no_text: 'В этой группе нельзя отправлять текст', sc_err_no_photos: 'В этой группе нельзя отправлять фото', sc_err_no_files: 'В этой группе нельзя отправлять файлы',
      sc_err_no_stickers: 'В этой группе нельзя отправлять стикеры', sc_err_no_links: 'В этой группе нельзя отправлять ссылки', sc_err_no_reactions: 'Реакции в этой группе выключены',
      sc_err_slow: 'Медленный режим: следующее сообщение через {n} с', sc_err_banned_word: 'В сообщении запрещённое в группе слово',
      sc_err_group_full: 'В группе может быть до 50 участников', sc_err_user_banned: 'Пользователь заблокирован в группе', sc_err_owner: 'Нельзя с создателем группы',
      sc_err_title: 'Нужно название группы (до 64 символов)', sc_err_empty: 'Пустое сообщение', sc_err_too_long: 'Слишком длинное сообщение',
      sc_err_locked: 'Этот стиль ещё закрыт', sc_err_storage_full: 'В браузере нет места (пробный режим). Удали старые фото.',
      sc_support: 'Поддержка', sc_support_from: 'Поддержка · {name}', sc_support_sub: 'Здесь сообщения видят админы сайта',
      sc_err_not_image: 'Это не картинка', sc_err_file_big: 'Файл слишком большой (до {n} МБ)'
    },
    en: {
      sc_styles_static: 'Styles', sc_styles_anim: 'Animated styles', sc_lv_n: 'Lv {n}', sc_sample_hi: 'Hi there! 👋',
      sc_nickname: 'Nickname', sc_nickname_hint: 'Any language, emoji and spaces — up to 64 characters.',
      sc_n_message: '{name}: new messages ({n})', sc_n_request: '{name} wants to be your friend', sc_n_accepted: '{name} accepted your friend request',
      sc_n_added: '{name} added you to a group', sc_n_all: 'All notifications',
      sc_today: 'Today', sc_yesterday: 'Yesterday', sc_just_now: 'just now', sc_min_ago: '{n} min ago', sc_h_ago: '{n} h ago',
      sc_err_generic: 'Something went wrong, please try again', sc_err_auth: 'Please log in again', sc_err_self: 'That is you 🙂',
      sc_err_no_user: 'User not found', sc_err_blocked: 'Not possible: one of you blocked the other', sc_err_not_friends: 'You can only message friends',
      sc_err_no_request: 'This request is no longer valid', sc_err_not_member: 'You are not in this chat', sc_err_no_rights: 'You don’t have permission for this',
      sc_err_only_admins: 'Only admins can write in this group', sc_err_restricted: 'You are restricted in this group',
      sc_err_no_text: 'Text messages are off in this group', sc_err_no_photos: 'Photos are off in this group', sc_err_no_files: 'Files are off in this group',
      sc_err_no_stickers: 'Stickers are off in this group', sc_err_no_links: 'Links are off in this group', sc_err_no_reactions: 'Reactions are off in this group',
      sc_err_slow: 'Slow mode: you can write again in {n} s', sc_err_banned_word: 'The message contains a word banned in this group',
      sc_err_group_full: 'A group can have up to 50 members', sc_err_user_banned: 'This user is banned from the group', sc_err_owner: 'Not possible with the group owner',
      sc_err_title: 'The group needs a name (up to 64 characters)', sc_err_empty: 'The message is empty', sc_err_too_long: 'The message is too long',
      sc_err_locked: 'This style is still locked', sc_err_storage_full: 'Browser storage is full (demo mode). Delete old photos.',
      sc_support: 'Support', sc_support_from: 'Support · {name}', sc_support_sub: 'Site admins see messages here',
      sc_err_not_image: 'That is not an image', sc_err_file_big: 'The file is too big (up to {n} MB)'
    }
  });
})();

/* Слой данных. Сейчас пробный режим (localStorage).
   Когда в config.js появятся SUPABASE_URL и ключ, здесь же добавится настоящий вход через Supabase REST.
   Все функции возвращают Promise, чтобы замена была незаметна для остального кода. */
(function () {
  'use strict';
  var cfg = window.APP_CONFIG || {};
  var POINTS = { read: 10, download: 5, solve: 20, solve_hint: 10, ai_level_bonus: 5 };

  /* Уровни от 0 до 90. Переход L → L+1 стоит 50 + 25×L очков. */
  var MAX_LEVEL = 90;
  function levelInfo(xp) {
    var level = 0, need = 50, left = xp || 0;
    while (level < MAX_LEVEL && left >= need) { left -= need; level++; need = 50 + 25 * level; }
    if (level >= MAX_LEVEL) return { level: MAX_LEVEL, into: 0, need: 0, pct: 100, max: true };
    return { level: level, into: left, need: need, pct: Math.round(100 * left / need), max: false };
  }

  function emit() { document.dispatchEvent(new CustomEvent('userchange', { detail: Store.auth.current() })); }

  /* ---------- пробный режим ---------- */
  var users = U.storage.get('mock_users', {});      // email → {id, email, pass, name, avatar, frame, xp, done:{key:points}, role}
  var sessionEmail = U.storage.get('mock_session', null);
  function saveUsers() { U.storage.set('mock_users', users); }
  function pub(u) {
    if (!u) return null;
    return { id: u.id, email: u.email, name: u.name, avatar: u.avatar || null, frame: u.frame || 'none',
             xp: u.xp || 0, role: u.role || 'student', done: u.done || {}, prefs: u.prefs || {} };
  }
  function err(code) { var e = new Error(code); e.code = code; return Promise.reject(e); }

  var Store = {
    mode: cfg.SUPABASE_URL ? 'supabase' : 'mock',
    POINTS: POINTS,
    levelInfo: levelInfo,
    MAX_LEVEL: MAX_LEVEL,
    /* Пробный режим: «открыть всё» для проверки рамок и титулов */
    demoUnlocked: function () { var u = Store.auth.current(); return Store.mode === 'mock' && !!u && (u.prefs.demoUnlock !== false); },
    effectiveLevel: function () { var u = Store.auth.current(); if (!u) return 0; return Store.demoUnlocked() ? MAX_LEVEL : levelInfo(u.xp).level; },
    auth: {
      current: function () { return pub(users[sessionEmail]); },
      signUp: function (p) {
        var email = String(p.email || '').trim().toLowerCase();
        if (!email || !p.password || !p.name || !p.invite) return err('err_fields');
        if (String(p.password).length < 6) return err('err_short_pass');
        var inv = String(U.storage.get('mock_invite', cfg.MOCK_INVITE_CODE) || '');
        if (String(p.invite).trim().toUpperCase() !== inv.toUpperCase()) return err('err_invite');
        if (users[email]) return err('err_exists');
        var first = Object.keys(users).length === 0;
        users[email] = { id: 'u' + Date.now(), email: email, pass: p.password, name: String(p.name).trim(),
                         xp: 0, done: {}, frame: 'none', role: first ? 'admin' : 'student' };
        saveUsers(); sessionEmail = email; U.storage.set('mock_session', email); emit();
        return Promise.resolve(pub(users[email]));
      },
      signIn: function (p) {
        var email = String(p.email || '').trim().toLowerCase();
        var u = users[email];
        if (!u || u.pass !== p.password) return err('err_login');
        if ((U.storage.get('mock_banned', {}) || {})[u.id]) return err('err_banned');
        sessionEmail = email; U.storage.set('mock_session', email); emit();
        return Promise.resolve(pub(u));
      },
      signOut: function () { sessionEmail = null; U.storage.set('mock_session', null); emit(); return Promise.resolve(); },
      /* «Забыл пароль?»: в пробном режиме письма нет, просто делаем вид */
      recover: function () { return Promise.resolve(); },
      passChangedAt: function () { var u = users[sessionEmail]; return Promise.resolve(u && u.passAt ? new Date(u.passAt) : null); },
      setPassword: function (pw) {
        var u = users[sessionEmail]; if (!u) return err('no_session');
        if (String(pw || '').length < 6) return err('err_short_pass');
        if (u.passAt && Date.now() - u.passAt < 24 * 3600 * 1000) return err('err_pass_cooldown');
        u.pass = pw; u.passAt = Date.now(); saveUsers(); return Promise.resolve();
      }
    },
    profile: {
      /* patch: {name?, avatar? (dataURL), frame?, prefs?} */
      update: function (patch) {
        var u = users[sessionEmail]; if (!u) return err('no_session');
        Object.keys(patch).forEach(function (k) { u[k] = patch[k]; });
        saveUsers(); emit(); return Promise.resolve(pub(u));
      }
    },
    progress: {
      has: function (key) { var u = users[sessionEmail]; return !!(u && u.done && u.done[key]); },
      /* Очки за одно и то же (key) даются один раз. */
      award: function (key, points) {
        var u = users[sessionEmail]; if (!u) return err('no_session');
        u.done = u.done || {};
        if (u.done[key]) return Promise.resolve({ added: 0, xp: u.xp, level: levelInfo(u.xp).level, leveledUp: false });
        var before = levelInfo(u.xp).level;
        u.done[key] = points; u.xp = (u.xp || 0) + points; saveUsers();
        var after = levelInfo(u.xp).level;
        emit();
        if (window.U) U.toast(t('points_plus', { n: points }), 'xp');
        if (after > before && window.U) setTimeout(function () { U.toast(t('level_up', { n: after }), 'level'); }, 400);
        return Promise.resolve({ added: points, xp: u.xp, level: after, leveledUp: after > before });
      }
    },
    /* Журнал проблем для админа (этап 3 — уйдёт в базу и пуш). */
    listIssues: function () { return Promise.resolve(U.storage.get('issue_log', []).slice().reverse()); },
    resolveIssue: function (at) {
      var log = U.storage.get('issue_log', []);
      log.forEach(function (x) { if (x.at === at) x.resolved = true; });
      U.storage.set('issue_log', log); document.dispatchEvent(new CustomEvent('issueschange')); return Promise.resolve();
    },
    reportIssue: function (info) {
      var log = U.storage.get('issue_log', []);
      var me = Store.auth.current();
      var row = { at: new Date().toISOString(), who: me ? me.name : '', info: info, resolved: false };
      log.push(row);
      /* картинки занимают место: держим последние 100 записей, а картинки только у последних 15 */
      log = log.slice(-100);
      log.forEach(function (x, i) { if (i < log.length - 15 && x.info && x.info.images) { x.info.imagesRemoved = x.info.images.length; delete x.info.images; } });
      if (!U.storage.set('issue_log', log) && info.images) { delete info.images; U.storage.set('issue_log', log); }
      document.dispatchEvent(new CustomEvent('issueschange'));
      return Promise.resolve({ at: row.at });
    }
  };

  Store.ready = Promise.resolve();

  /* =====================================================================
     НАСТОЯЩИЙ РЕЖИМ: Supabase через обычные HTTP-запросы (без большой библиотеки,
     чтобы работало и на старых iPhone). Включается, когда в config.js есть SUPABASE_URL.
     ===================================================================== */
  if (Store.mode === 'supabase') (function () {
    var URL = String(cfg.SUPABASE_URL).replace(/\/+$/, '');
    var KEY = cfg.SUPABASE_ANON_KEY;
    var sess = U.storage.get('sb_session', null);   // {access_token, refresh_token, expires_at, user:{id,email}}
    var me = null;            // профиль
    var done = {};            // ключи полученных очков
    var refreshing = null;

    function saveSess(x) { sess = x; U.storage.set('sb_session', x); }
    function sessFrom(r) {
      return { access_token: r.access_token, refresh_token: r.refresh_token,
               expires_at: Math.floor(Date.now() / 1000) + (r.expires_in || 3600), user: { id: r.user.id, email: r.user.email } };
    }
    function http(method, path, body, opts) {
      opts = opts || {};
      var h = { apikey: KEY, 'Content-Type': opts.contentType || 'application/json' };
      if (opts.auth !== false && sess) h.Authorization = 'Bearer ' + sess.access_token;
      if (opts.headers) Object.keys(opts.headers).forEach(function (k) { h[k] = opts.headers[k]; });
      var b = body == null ? undefined : (opts.raw ? body : JSON.stringify(body));
      return fetch(URL + path, { method: method, headers: h, body: b, keepalive: !!opts.keepalive }).then(function (res) {
        return res.text().then(function (txt) {
          var data = null; try { data = txt ? JSON.parse(txt) : null; } catch (e) { data = txt; }
          if (!res.ok) { var e = new Error((data && (data.msg || data.message || data.error_description || data.error)) || ('HTTP ' + res.status)); e.status = res.status; e.data = data; throw e; }
          return data;
        });
      });
    }
    /* токен живёт час: обновляем заранее */
    function fresh() {
      if (!sess) return Promise.resolve(null);
      if (sess.expires_at - 60 > Date.now() / 1000) return Promise.resolve(sess);
      if (!refreshing) refreshing = http('POST', '/auth/v1/token?grant_type=refresh_token', { refresh_token: sess.refresh_token }, { auth: false })
        .then(function (r) { saveSess(sessFrom(r)); refreshing = null; return sess; })
        .catch(function (e) {
          refreshing = null;
          // нет интернета — вход не сбрасываем (офлайн-уроки), выходим только если сервер сказал «токен недействителен»
          if (e && (e.status === 400 || e.status === 401 || e.status === 403)) { saveSess(null); me = null; U.storage.set('sb_me_cache', null); emit(); }
          throw e;
        });
      return refreshing;
    }
    function api(method, path, body, opts) { return fresh().then(function () { return http(method, path, body, opts); }); }
    function toPub(p) {
      if (!p) return null;
      return { id: p.id, email: sess && sess.user.email, name: p.name, avatar: p.avatar_url || null, frame: p.frame || 'none',
               xp: p.xp || 0, role: p.role || 'student', done: done, prefs: p.prefs || {} };
    }
    function loadMe() {
      if (!sess) { me = null; return Promise.resolve(null); }
      return Promise.all([
        api('GET', '/rest/v1/profiles?id=eq.' + sess.user.id + '&select=*'),
        api('GET', '/rest/v1/progress?select=key')
      ]).then(function (r) {
        me = r[0] && r[0][0] ? r[0][0] : null;
        done = {}; (r[1] || []).forEach(function (x) { done[x.key] = true; });
        U.storage.set('sb_me_cache', me ? { id: me.id, me: me, done: done } : null);   // для открытия без интернета
        return me;
      }).catch(function (e) {
        if (e.status === 401) { saveSess(null); me = null; U.storage.set('sb_me_cache', null); throw e; }
        // нет интернета: показываем последний сохранённый профиль, чтобы открылись скачанные уроки
        var c = U.storage.get('sb_me_cache', null);
        if (c && sess && c.id === sess.user.id) { me = c.me; done = c.done || {}; return me; }
        throw e;
      });
    }
    function mapAuthErr(e) {
      var m = (String((e && e.message) || '') + ' ' + String((e && e.data && e.data.error_code) || '')).toLowerCase().replace(/_/g, ' ');
      var code = 'err_login';
      if (m.indexOf('database error') >= 0 || m.indexOf('invalid_invite') >= 0) code = 'err_invite';
      else if (m.indexOf('banned') >= 0) code = 'err_banned';
      else if (m.indexOf('not confirmed') >= 0) code = 'err_not_confirmed';
      else if (m.indexOf('captcha') >= 0) code = 'err_captcha';
      else if (m.indexOf('already') >= 0) code = 'err_exists';
      else if (m.indexOf('password') >= 0 && m.indexOf('6') >= 0) code = 'err_short_pass';
      else if (e && e.status === 0) code = 'err_network';
      var er = new Error(code); er.code = code; return er;
    }

    Store.sb = { url: URL, key: KEY, api: api, uid: function () { return sess && sess.user.id; },
      token: function () { return fresh().then(function (x) { return x && x.access_token; }); },
      rpc: function (name, args, opts) { return api('POST', '/rest/v1/rpc/' + name, args || {}, opts); } };

    /* ссылка из письма «подтверди почту»: Supabase возвращает сюда с #access_token=… — сразу входим */
    function fromLink() {
      var h = location.hash || '';
      if (h.indexOf('access_token=') < 0 && h.indexOf('error_code=') < 0 && h.indexOf('error=') < 0) return Promise.resolve();
      var q = {};
      h.replace(/^#\/?/, '').split('&').forEach(function (kv) {
        var i = kv.indexOf('=');
        if (i > 0) { try { q[decodeURIComponent(kv.slice(0, i))] = decodeURIComponent(kv.slice(i + 1).replace(/\+/g, ' ')); } catch (e) { /* */ } }
      });
      if (!q.access_token && !q.error && !q.error_code) return Promise.resolve();
      try { history.replaceState(null, '', location.pathname + location.search + '#/'); } catch (e) { location.hash = '#/'; }
      if (!q.access_token) { Store.linkNote = 'auth_link_bad'; return Promise.resolve(); }
      return fetch(URL + '/auth/v1/user', { headers: { apikey: KEY, Authorization: 'Bearer ' + q.access_token } })
        .then(function (r) { if (!r.ok) throw new Error('bad'); return r.json(); })
        .then(function (u) {
          saveSess({ access_token: q.access_token, refresh_token: q.refresh_token,
            expires_at: Number(q.expires_at) || Math.floor(Date.now() / 1000) + (Number(q.expires_in) || 3600), user: { id: u.id, email: u.email } });
          if (q.type === 'recovery') { Store.pendingReset = true; Store.linkNote = null; }
          else Store.linkNote = 'auth_confirmed';
        })
        .catch(function () { Store.linkNote = 'auth_link_bad'; });
    }
    Store.ready = fromLink().then(loadMe).then(function (x) { setTimeout(flushAwards, 2000); return x; })
      .catch(function () { /* нет сети или сессия истекла */ });

    Store.auth = {
      current: function () { return toPub(me); },
      signUp: function (p) {
        var email = String(p.email || '').trim().toLowerCase();
        if (!email || !p.password || !p.name || !p.invite) return err('err_fields');
        if (String(p.password).length < 6) return err('err_short_pass');
        var body = { email: email, password: p.password, data: { name: String(p.name).trim(), invite: String(p.invite).trim() } };
        if (p.captcha) body.gotrue_meta_security = { captcha_token: p.captcha };
        // если в Supabase включено подтверждение почты: ссылка из письма вернёт человека сюда же
        var back = location.origin + location.pathname;
        return http('POST', '/auth/v1/signup?redirect_to=' + encodeURIComponent(back), body, { auth: false })
          .then(function (r) {
            if (!r || !r.access_token) return { confirm: true, email: email };   // ждём, пока подтвердит почту
            saveSess(sessFrom(r));
            return loadMe().then(function () { emit(); return toPub(me); });
          }, function (e) { throw mapAuthErr(e); });
      },
      signIn: function (p) {
        var email = String(p.email || '').trim().toLowerCase();
        var body = { email: email, password: p.password };
        if (p.captcha) body.gotrue_meta_security = { captcha_token: p.captcha };
        return http('POST', '/auth/v1/token?grant_type=password', body, { auth: false })
          .then(function (r) { saveSess(sessFrom(r)); return loadMe(); }, function (e) { throw mapAuthErr(e); })
          .then(function () { emit(); return toPub(me); });
      },
      /* «Забыл пароль?»: Supabase присылает письмо со ссылкой; ссылка возвращает сюда же */
      recover: function (p) {
        var email = String(p.email || '').trim().toLowerCase();
        if (!email) return err('err_fields');
        var body = { email: email };
        if (p.captcha) body.gotrue_meta_security = { captcha_token: p.captcha };
        return http('POST', '/auth/v1/recover?redirect_to=' + encodeURIComponent(location.origin + location.pathname), body, { auth: false })
          .then(function () {}, function (e) {
            if (e && e.status === 429) { var x = new Error('err_too_often'); x.code = 'err_too_often'; throw x; }
            throw mapAuthErr(e);
          });
      },
      /* когда пароль меняли в последний раз (не чаще раза в 24 часа — проверяет база) */
      passChangedAt: function () {
        if (!sess) return Promise.resolve(null);
        return api('GET', '/rest/v1/pass_changes?select=changed_at&user_id=eq.' + sess.user.id)
          .then(function (r) { return r && r[0] ? new Date(r[0].changed_at) : null; }, function () { return null; });
      },
      setPassword: function (pw) {
        if (!sess) return err('no_session');
        if (String(pw || '').length < 6) return err('err_short_pass');
        return fresh().then(function () { return http('PUT', '/auth/v1/user', { password: pw }); }).then(function () { Store.pendingReset = false; }, function (e) {
          var m = String((e && e.message) || '').toLowerCase() + ' ' + String((e && e.data && e.data.error_code) || '');
          var code = 'err_pass_save';
          if (/pass_cooldown|database error|unexpected/.test(m) || (e && e.status >= 500)) code = 'err_pass_cooldown';
          else if (/different from the old|same_password/.test(m)) code = 'err_same_pass';
          else if (/weak|at least|6 char/.test(m)) code = 'err_short_pass';
          else if (e && e.status === 0) code = 'err_network';
          var x = new Error(code); x.code = code; throw x;
        });
      },
      signOut: function () {
        var p = sess ? http('POST', '/auth/v1/logout', {}).catch(function () {}) : Promise.resolve();
        saveSess(null); me = null; done = {}; U.storage.set('sb_me_cache', null); emit(); return p;
      }
    };

    function dataUrlToBlob(d) {
      var parts = d.split(','), mime = parts[0].match(/:(.*?);/)[1], bin = atob(parts[1]), arr = new Uint8Array(bin.length);
      for (var i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
      return new Blob([arr], { type: mime });
    }
    Store.profile = {
      update: function (patch) {
        if (!me) return err('no_session');
        var row = {}, chain = Promise.resolve();
        if ('name' in patch) row.name = patch.name;
        if ('frame' in patch) row.frame = patch.frame;
        if ('prefs' in patch) row.prefs = patch.prefs;
        if ('avatar' in patch) {
          if (patch.avatar && String(patch.avatar).indexOf('data:') === 0) {
            var path = me.id + '/avatar-' + Date.now() + '.jpg';
            chain = api('POST', '/storage/v1/object/avatars/' + path, dataUrlToBlob(patch.avatar), { raw: true, contentType: 'image/jpeg', headers: { 'x-upsert': 'true' } })
              .then(function () { row.avatar_url = URL + '/storage/v1/object/public/avatars/' + path; });
          } else row.avatar_url = patch.avatar || null;
        }
        return chain.then(function () {
          return api('PATCH', '/rest/v1/profiles?id=eq.' + me.id, row, { headers: { Prefer: 'return=representation' } });
        }).then(function (r) { if (r && r[0]) me = r[0]; emit(); return toPub(me); });
      }
    };
    Store.progress = {
      has: function (key) { return !!done[key]; },
      award: function (key, points, meta) {
        if (!me) return err('no_session');
        if (done[key]) return Promise.resolve({ added: 0, xp: me.xp, level: levelInfo(me.xp).level, leveledUp: false });
        var before = levelInfo(me.xp).level;
        done[key] = true;
        return Store.sb.rpc('award', { p_key: key, p_kind: (meta && meta.kind) || null, p_level: (meta && meta.level) || 0 }).then(function (r) {
          awardQ(key, null);
          me.xp = r.xp; var after = levelInfo(me.xp).level; emit();
          if (r.added) U.toast(t('points_plus', { n: r.added }), 'xp');
          if (after > before) setTimeout(function () { U.toast(t('level_up', { n: after }), 'level'); }, 400);
          return { added: r.added, xp: r.xp, level: after, leveledUp: after > before };
        }, function (e) {
          // нет сети или сбой сервера: очки не теряем — запоминаем и отправим ещё раз позже
          if (!e || !e.status || e.status >= 500) { awardQ(key, { points: points, meta: meta || null }); throw e; }
          awardQ(key, null); delete done[key]; throw e;
        });
      }
    };
    /* очередь неотправленных очков (в этом браузере, для этого человека) */
    function awardQKey() { return 'award_q:' + (me ? me.id : ''); }
    function awardQ(key, val) {
      if (!me) return;
      var q = U.storage.get(awardQKey(), {}) || {};
      if (val) q[key] = val; else if (q[key]) delete q[key]; else return;
      U.storage.set(awardQKey(), q);
    }
    var flushing = false;
    function flushAwards() {
      if (!me || flushing || (navigator.onLine === false)) return;
      var q = U.storage.get(awardQKey(), {}) || {};
      var keys = Object.keys(q);
      if (!keys.length) return;
      flushing = true;
      keys.reduce(function (p, k) {
        return p.then(function () {
          delete done[k];
          return Store.progress.award(k, q[k].points, q[k].meta).catch(function () { /* в другой раз */ });
        });
      }, Promise.resolve()).then(function () { flushing = false; }, function () { flushing = false; });
    }
    Store.flushAwards = flushAwards;
    window.addEventListener('online', function () { setTimeout(flushAwards, 1500); });
    Store.reportIssue = function (info) {
      if (!me) return Promise.resolve();
      return api('POST', '/rest/v1/issues', { info: info }, { headers: { Prefer: 'return=representation' } })
        .then(function (rows) { document.dispatchEvent(new CustomEvent('issueschange')); var r = rows && rows[0]; return r ? { id: r.id, at: r.created_at } : {}; })
        .catch(function (e) { if (info.type === 'user') throw e; return {}; });   // автоматические ошибки молча
    };
    Store.listIssues = function () {
      if (!me || me.role !== 'admin') return Promise.resolve([]);
      return api('GET', '/rest/v1/issues?select=id,info,resolved,created_at,profiles(name)&order=created_at.desc&limit=200').then(function (rows) {
        return (rows || []).map(function (x) { return { id: x.id, at: x.created_at, who: x.profiles ? x.profiles.name : '', info: x.info, resolved: x.resolved }; });
      }).catch(function () { return []; });
    };
    Store.resolveIssue = function (at, id) {
      return api('PATCH', '/rest/v1/issues?created_at=eq.' + encodeURIComponent(at), { resolved: true })
        .then(function () { document.dispatchEvent(new CustomEvent('issueschange')); });
    };
  })();

  window.Store = Store;
})();

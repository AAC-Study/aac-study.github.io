/* Выбор и редактирование аватарки: Avatar.open({ onSave: function (dataURL) {} }).
   Шаги: источник (файл / камера) → камера (если есть) → редактор (Cropper.js 1.6, грузится лениво).
   ES2017 максимум, без ?. и ??, без модулей. Камеру никогда не считаем гарантированной. */
(function () {
  'use strict';

  var MAX_SIDE = 2048;    // большие фото с телефона уменьшаем до этого размера перед редактором
  var OUT_SIZE = 256;     // итоговая аватарка 256×256 JPEG

  /* Путь к корню сайта считаем от адреса этого скрипта, чтобы vendor/ находился и из test/. */
  var BASE = (function () {
    var s = document.currentScript, src = '';
    if (!s) {
      var all = document.getElementsByTagName('script');
      for (var i = 0; i < all.length; i++) if (/avatar\.js(\?|$)/.test(all[i].src)) { s = all[i]; break; }
    }
    src = s ? s.src : '';
    return src ? src.replace(/js\/avatar\.js(\?.*)?$/, '') : '';
  })();

  if (window.I18N) I18N.add({
    he: {
      av_title: 'תמונת פרופיל', av_choose: 'לבחור תמונה', av_take: 'לצלם', av_remove: 'להסיר את התמונה',
      av_source_hint: 'אפשר לבחור תמונה מהגלריה או לצלם עכשיו. אחר כך מזיזים ומגדילים כדי שהפנים יהיו בעיגול.',
      av_inapp: 'כדי להשתמש במצלמה, כדאי לפתוח את האתר ב-Safari או ב-Chrome: בתפריט ⋯ בוחרים „פתיחה בדפדפן”.',
      av_err_notfound: 'לא נמצאה מצלמה. אפשר לבחור תמונה מקובץ.',
      av_err_denied: 'הגישה למצלמה חסומה.',
      av_err_denied_hint: 'כדי לאפשר: לוחצים על סמל המנעול ליד שורת הכתובת ← מצלמה ← לאפשר, ומנסים שוב. באייפון: הגדרות ← Safari ← מצלמה. אפשר גם פשוט לבחור תמונה מקובץ.',
      av_err_busy: 'המצלמה תפוסה באפליקציה אחרת. סוגרים אותה ומנסים שוב, או בוחרים תמונה מקובץ.',
      av_err_generic: 'לא הצלחנו להפעיל את המצלמה. אפשר לבחור תמונה מקובץ.',
      av_err_file: 'לא הצלחנו לפתוח את התמונה. כדאי לנסות קובץ JPG או PNG.',
      av_err_notimage: 'הקובץ הזה הוא לא תמונה.',
      av_err_editor: 'לא הצלחנו לטעון את העורך. בודקים את החיבור לאינטרנט ומנסים שוב.',
      av_err_save: 'לא הצלחנו לשמור. מנסים שוב?',
      av_loading: 'טוען…', av_camera_starting: 'מפעילים את המצלמה…', av_shutter: 'לצלם', av_switch: 'להחליף מצלמה',
      av_back: 'חזרה', av_zoom_in: 'להגדיל', av_zoom_out: 'להקטין', av_rotate: 'לסובב ב-90°', av_reset: 'איפוס',
      av_save: 'לשמור', av_saving: 'שומרים…',
      av_crop_hint: 'גוררים את התמונה וצובטים כדי להגדיל. מה שבתוך העיגול יישמר.'
    },
    ru: {
      av_title: 'Фото профиля', av_choose: 'Выбрать фото', av_take: 'Сделать фото', av_remove: 'Удалить фото',
      av_source_hint: 'Выбери фото из галереи или сфотографируйся прямо сейчас. Потом подвинь и приблизь, чтобы лицо было в круге.',
      av_inapp: 'Чтобы снять фото камерой, открой сайт в Safari или Chrome: в меню ⋯ выбери «Открыть в браузере».',
      av_err_notfound: 'Камера не найдена. Можно выбрать фото из файла.',
      av_err_denied: 'Доступ к камере запрещён.',
      av_err_denied_hint: 'Чтобы разрешить: нажми на значок замка рядом с адресом → Камера → Разрешить и попробуй снова. На iPhone: Настройки → Safari → Камера. Или просто выбери фото из файла.',
      av_err_busy: 'Камера занята другим приложением. Закрой его и попробуй снова или выбери фото из файла.',
      av_err_generic: 'Не получилось включить камеру. Можно выбрать фото из файла.',
      av_err_file: 'Не получилось открыть картинку. Попробуй файл JPG или PNG.',
      av_err_notimage: 'Это не картинка.',
      av_err_editor: 'Не удалось загрузить редактор. Проверь интернет и попробуй снова.',
      av_err_save: 'Не получилось сохранить. Попробовать ещё раз?',
      av_loading: 'Загрузка…', av_camera_starting: 'Включаем камеру…', av_shutter: 'Снять', av_switch: 'Сменить камеру',
      av_back: 'Назад', av_zoom_in: 'Приблизить', av_zoom_out: 'Отдалить', av_rotate: 'Повернуть на 90°', av_reset: 'Сбросить',
      av_save: 'Сохранить', av_saving: 'Сохраняем…',
      av_crop_hint: 'Двигай фото пальцем, щипком меняй масштаб. Сохранится то, что внутри круга.'
    },
    en: {
      av_title: 'Profile photo', av_choose: 'Choose photo', av_take: 'Take photo', av_remove: 'Remove photo',
      av_source_hint: 'Pick a photo from your gallery or take one now. Then move and zoom so your face fits the circle.',
      av_inapp: 'To use the camera, open this site in Safari or Chrome: tap the ⋯ menu and choose “Open in browser”.',
      av_err_notfound: 'No camera found. You can choose a photo from a file.',
      av_err_denied: 'Camera access is blocked.',
      av_err_denied_hint: 'To allow it: tap the lock icon next to the address bar → Camera → Allow, then try again. On iPhone: Settings → Safari → Camera. Or just choose a photo from a file.',
      av_err_busy: 'The camera is being used by another app. Close it and try again, or choose a file.',
      av_err_generic: 'Couldn’t start the camera. You can choose a photo from a file.',
      av_err_file: 'Couldn’t open this image. Try a JPG or PNG file.',
      av_err_notimage: 'This file isn’t an image.',
      av_err_editor: 'Couldn’t load the editor. Check your connection and try again.',
      av_err_save: 'Couldn’t save. Try again?',
      av_loading: 'Loading…', av_camera_starting: 'Turning on the camera…', av_shutter: 'Take picture', av_switch: 'Switch camera',
      av_back: 'Back', av_zoom_in: 'Zoom in', av_zoom_out: 'Zoom out', av_rotate: 'Rotate 90°', av_reset: 'Reset',
      av_save: 'Save', av_saving: 'Saving…',
      av_crop_hint: 'Drag the photo and pinch to zoom. Whatever is inside the circle will be saved.'
    }
  });

  function tt(k, v) { return window.t ? window.t(k, v) : k; }
  function icon(name) { return window.Icons ? Icons.get(name) : ''; }
  function noop() {}
  var el = U.el;

  /* ---------- что умеет браузер ---------- */
  function hasCameraApi() {
    try {
      return window.isSecureContext !== false && !!navigator.mediaDevices &&
        typeof navigator.mediaDevices.getUserMedia === 'function';
    } catch (e) { return false; }
  }
  /* Сколько камер видно. -1 = неизвестно (API нет или ошибка) — тогда кнопку не прячем. */
  function countCameras() {
    try {
      var md = navigator.mediaDevices;
      if (!md || typeof md.enumerateDevices !== 'function') return Promise.resolve(-1);
      return Promise.resolve(md.enumerateDevices()).then(function (list) {
        var n = 0;
        (list || []).forEach(function (d) { if (d && d.kind === 'videoinput') n++; });
        return n;
      }, function () { return -1; });
    } catch (e) { return Promise.resolve(-1); }
  }
  function isInAppBrowser() {
    var ua = navigator.userAgent || '';
    return /Instagram|FBAN|FBAV|FB_IAB|FBIOS|\bLine\/|TikTok|BytedanceWebview|musical_ly/i.test(ua);
  }

  /* ---------- Cropper.js: грузим только когда открывается редактор ---------- */
  var cropperPromise = null;
  function loadCropper() {
    if (window.Cropper) return Promise.resolve(window.Cropper);
    if (cropperPromise) return cropperPromise;
    cropperPromise = new Promise(function (resolve, reject) {
      var done = false;
      var cssReady = new Promise(function (res) {
        if (document.querySelector('link[data-cropper-css]')) return res();
        var l = document.createElement('link');
        l.rel = 'stylesheet'; l.href = BASE + 'vendor/cropper.min.css';
        l.setAttribute('data-cropper-css', '');
        l.onload = l.onerror = function () { res(); };
        setTimeout(res, 4000);
        document.head.appendChild(l);
      });
      var s = document.createElement('script');
      s.src = BASE + 'vendor/cropper.min.js';
      s.async = true;
      var timer = setTimeout(function () { fail(new Error('cropper timeout')); }, 20000);
      function fail(e) { if (done) return; done = true; clearTimeout(timer); cropperPromise = null; reject(e); }
      s.onload = function () {
        if (done) return;
        if (!window.Cropper) return fail(new Error('Cropper missing'));
        cssReady.then(function () { done = true; clearTimeout(timer); resolve(window.Cropper); });
      };
      s.onerror = function () { fail(new Error('cropper load error')); };
      document.head.appendChild(s);
    });
    return cropperPromise;
  }

  /* ---------- картинки ---------- */
  var URLx = window.URL || window.webkitURL;
  function canvasToUrl(canvas, type, q) {
    return new Promise(function (resolve, reject) {
      function viaData() {
        try { resolve({ url: canvas.toDataURL(type, q), revoke: noop }); } catch (e) { reject(e); }
      }
      if (canvas.toBlob && URLx && URLx.createObjectURL) {
        try {
          canvas.toBlob(function (blob) {
            if (!blob) return viaData();
            var u = URLx.createObjectURL(blob);
            resolve({ url: u, revoke: function () { try { URLx.revokeObjectURL(u); } catch (e) { /* */ } } });
          }, type, q);
        } catch (e) { viaData(); }
      } else viaData();
    });
  }
  function loadImage(src) {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.onload = function () { resolve(img); };
      img.onerror = function () { reject(new Error('image decode')); };
      img.src = src;
    });
  }
  function fileToImage(file) {
    if (URLx && URLx.createObjectURL) {
      var u = URLx.createObjectURL(file);
      return loadImage(u).then(function (img) { try { URLx.revokeObjectURL(u); } catch (e) { /* */ } return img; },
        function (e) { try { URLx.revokeObjectURL(u); } catch (er) { /* */ } throw e; });
    }
    return new Promise(function (resolve, reject) {
      var r = new FileReader();
      r.onload = function () { loadImage(r.result).then(resolve, reject); };
      r.onerror = function () { reject(new Error('read')); };
      r.readAsDataURL(file);
    });
  }
  /* Рисуем источник (img/video) на холст не больше MAX_SIDE. Современные браузеры при этом уже
     учитывают EXIF-ориентацию; на старых фото может лечь боком — для этого есть кнопка «повернуть». */
  function toEditable(src, w, h, mirror) {
    if (!w || !h) return Promise.reject(new Error('empty image'));
    var k = Math.min(1, MAX_SIDE / Math.max(w, h));
    var cw = Math.max(1, Math.round(w * k)), ch = Math.max(1, Math.round(h * k));
    var c = document.createElement('canvas');
    c.width = cw; c.height = ch;
    var ctx = c.getContext('2d');
    if (!ctx) return Promise.reject(new Error('no canvas'));
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, cw, ch);
    if (mirror) { ctx.translate(cw, 0); ctx.scale(-1, 1); }
    try { ctx.drawImage(src, 0, 0, cw, ch); } catch (e) { return Promise.reject(e); }
    return canvasToUrl(c, 'image/jpeg', 0.92);
  }

  function camErrorMessage(err) {
    var n = (err && (err.name || err.code)) || '';
    var inapp = isInAppBrowser();
    if (/NotFound|DevicesNotFound/i.test(n)) return { kind: 'warn', text: tt('av_err_notfound'), noCamera: true };
    if (/NotAllowed|PermissionDenied|Security/i.test(n)) {
      return { kind: 'warn', text: tt('av_err_denied'), hint: inapp ? tt('av_inapp') : tt('av_err_denied_hint') };
    }
    if (/NotReadable|TrackStart/i.test(n)) return { kind: 'warn', text: tt('av_err_busy') };
    return { kind: 'bad', text: tt('av_err_generic'), hint: inapp ? tt('av_inapp') : '' };
  }

  /* ---------- модальное окно ---------- */
  function openModal(title, content, onClose) {
    if (window.App && typeof App.modal === 'function') {
      return App.modal({ title: title, content: content, wide: true, onClose: onClose });
    }
    throw new Error('App.modal is not available');
  }

  /* ================== Avatar.open ================== */
  function open(opts) {
    opts = opts || {};
    var st = { screen: '', stream: null, cropper: null, urls: [], closed: false, facing: 'user',
               cams: -1, noCamera: false, mirror: false, camToken: 0 };
    var root = el('div', { class: 'av' });
    var modal = null;

    function cleanup() {
      if (st.closed) return;
      st.closed = true;
      stopStream();
      destroyCropper();
      revokeAll();
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pagehide', onPageHide);
      if (typeof opts.onClose === 'function') { try { opts.onClose(); } catch (e) { /* */ } }
    }
    function close() {
      var wasClosed = st.closed;
      cleanup();
      if (!wasClosed && modal && modal.close) modal.close();
    }
    function stopStream() {
      st.camToken++;
      var s = st.stream;
      st.stream = null;
      if (s) {
        try { (s.getTracks ? s.getTracks() : []).forEach(function (tr) { try { tr.stop(); } catch (e) { /* */ } }); } catch (e) { /* */ }
      }
      var v = root.querySelector('video');
      if (v) { try { v.pause(); } catch (e) { /* */ } try { v.srcObject = null; } catch (e) { /* */ } v.removeAttribute('src'); }
    }
    function destroyCropper() {
      if (st.cropper) { try { st.cropper.destroy(); } catch (e) { /* */ } st.cropper = null; }
    }
    function revokeAll() { st.urls.forEach(function (r) { r.revoke(); }); st.urls = []; }
    function onVisibility() {
      if (st.screen !== 'camera') return;
      if (document.hidden) stopStream();
      else if (!st.stream) startCamera();
    }
    function onPageHide() { stopStream(); }
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('pagehide', onPageHide);

    function setScreen(name, node) {
      if (st.screen === 'camera' && name !== 'camera') stopStream();
      if (st.screen === 'editor' && name !== 'editor') destroyCropper();
      st.screen = name;
      root.innerHTML = '';
      root.setAttribute('data-screen', name);
      root.appendChild(node);
    }

    function msgBox(m) {
      if (!m) return null;
      var box = el('div', { class: 'av__msg av__msg--' + (m.kind || 'info'), role: m.kind === 'info' ? 'status' : 'alert' });
      box.appendChild(el('div', { class: 'av__msg-title', text: m.text }));
      if (m.hint) box.appendChild(el('div', { class: 'av__msg-hint', text: m.hint }));
      return box;
    }

    /* ----- шаг 1: откуда взять фото ----- */
    function showSource(message) {
      if (message && message.noCamera) st.noCamera = true;
      var input = el('input', { type: 'file', accept: 'image/*', class: 'av__file', 'aria-label': tt('av_choose') });
      var choose = el('label', { class: 'btn btn--primary av__big av__choose' }, [
        el('span', { class: 'av__big-ic', html: icon('image') }), el('span', { text: tt('av_choose') }), input
      ]);
      var take = el('button', { type: 'button', class: 'btn av__big av__take', onclick: function () { showCamera(); } }, [
        el('span', { class: 'av__big-ic', html: icon('camera') }), el('span', { text: tt('av_take') })
      ]);
      var msgSlot = el('div', { class: 'av__msg-slot', 'aria-live': 'polite' });
      var cameraOk = hasCameraApi() && !st.noCamera && st.cams !== 0;
      if (!cameraOk) take.hidden = true;

      var me = null;
      try { me = window.Store && Store.auth ? Store.auth.current() : null; } catch (e) { me = null; }
      var cur = opts.current !== undefined ? opts.current : (me ? me.avatar : null);
      var name = opts.name || (me ? me.name : '');
      var frame = opts.frame || (me ? me.frame : 'none');
      var preview = window.Frames ? Frames.render({ img: cur, name: name, frame: frame, size: 112 }) : null;

      var kids = [
        preview ? el('div', { class: 'av__hero' }, preview) : null,
        el('p', { class: 'av__lead', text: tt('av_source_hint') }),
        msgSlot,
        el('div', { class: 'av__actions' }, [choose, take])
      ];
      if (isInAppBrowser()) kids.push(el('p', { class: 'av__note', text: tt('av_inapp') }));
      if (cur && typeof opts.onRemove === 'function') {
        kids.push(el('button', { type: 'button', class: 'btn btn--ghost av__remove', onclick: function () {
          Promise.resolve(opts.onRemove()).then(close, function () { msgSlot.innerHTML = ''; msgSlot.appendChild(msgBox({ kind: 'bad', text: tt('av_err_save') })); });
        } }, [el('span', { html: icon('trash') }), el('span', { text: tt('av_remove') })]));
      }
      setScreen('source', el('div', { class: 'av__screen av__src' }, kids));
      if (message) msgSlot.appendChild(msgBox(message));

      input.addEventListener('change', function () {
        var file = input.files && input.files[0];
        input.value = '';
        if (!file) return;
        if (file.type && !/^image\//i.test(file.type)) {
          msgSlot.innerHTML = ''; msgSlot.appendChild(msgBox({ kind: 'bad', text: tt('av_err_notimage') }));
          return;
        }
        msgSlot.innerHTML = ''; msgSlot.appendChild(msgBox({ kind: 'info', text: tt('av_loading') }));
        choose.classList.add('is-busy');
        fileToImage(file).then(function (img) {
          return toEditable(img, img.naturalWidth || img.width, img.naturalHeight || img.height, false);
        }).then(function (res) {
          if (st.closed) { res.revoke(); return; }
          st.urls.push(res);
          showEditor(res.url);
        }).catch(function () {
          if (st.closed || st.screen !== 'source') return;
          choose.classList.remove('is-busy');
          msgSlot.innerHTML = ''; msgSlot.appendChild(msgBox({ kind: 'bad', text: tt('av_err_file') }));
        });
      });

      /* Уточняем, есть ли камеры вообще (только типы устройств — подписи до разрешения пустые). */
      if (cameraOk && st.cams === -1) {
        countCameras().then(function (n) {
          st.cams = n;
          if (n === 0 && st.screen === 'source') take.hidden = true;
        });
      }
    }

    /* ----- шаг 2: живая камера ----- */
    var camEls = null;
    function showCamera() {
      if (!hasCameraApi()) { showSource({ kind: 'warn', text: tt('av_err_generic') }); return; }
      var video = el('video', { class: 'av__video', playsinline: true, 'webkit-playsinline': true, muted: true, autoplay: true });
      video.muted = true; video.playsInline = true;
      var status = el('div', { class: 'av__status', text: tt('av_camera_starting') });
      var shutter = el('button', { type: 'button', class: 'av__shutter', 'aria-label': tt('av_shutter'), disabled: true, onclick: capture },
        el('span', { class: 'av__shutter-in' }));
      var sw = el('button', { type: 'button', class: 'btn icon-btn av__switch', 'aria-label': tt('av_switch'), title: tt('av_switch'), html: icon('repeat'),
        onclick: function () { st.facing = st.facing === 'user' ? 'environment' : 'user'; startCamera(); } });
      sw.hidden = !(st.cams > 1);
      var back = el('button', { type: 'button', class: 'btn icon-btn btn--ghost av__back', 'aria-label': tt('av_back'), title: tt('av_back'),
        html: icon('chevron'), onclick: function () { showSource(); } });
      camEls = { video: video, status: status, shutter: shutter, sw: sw };
      setScreen('camera', el('div', { class: 'av__screen av__cam' }, [
        el('div', { class: 'av__stage' }, [video, el('div', { class: 'av__guide', 'aria-hidden': 'true',
          html: '<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"><circle cx="50" cy="50" r="38" fill="none" stroke="#fff" stroke-opacity=".85" stroke-width=".8" stroke-dasharray="2 2.2"/></svg>' }), status]),
        el('div', { class: 'av__bar' }, [back, shutter, sw])
      ]));
      startCamera();
    }
    function startCamera() {
      stopStream();
      var token = ++st.camToken;
      var md = navigator.mediaDevices;
      var els = camEls;
      if (!els) return;
      els.shutter.disabled = true;
      els.status.hidden = false;
      els.status.textContent = tt('av_camera_starting');
      var p;
      try {
        p = Promise.resolve(md.getUserMedia({ video: { facingMode: st.facing, width: { ideal: 1280 }, height: { ideal: 1280 } }, audio: false }))
          .catch(function (err) {
            var n = err && err.name;
            if (n === 'OverconstrainedError' || n === 'ConstraintNotSatisfiedError') return md.getUserMedia({ video: true, audio: false });
            throw err;
          });
      } catch (e) { p = Promise.reject(e); }
      p.then(function (stream) {
        if (st.closed || token !== st.camToken || st.screen !== 'camera') {
          try { stream.getTracks().forEach(function (tr) { tr.stop(); }); } catch (e) { /* */ }
          return;
        }
        st.stream = stream;
        var track = stream.getVideoTracks ? stream.getVideoTracks()[0] : null;
        var settings = track && track.getSettings ? track.getSettings() : {};
        st.mirror = settings.facingMode ? settings.facingMode !== 'environment' : st.facing === 'user';
        els.video.classList.toggle('is-mirror', st.mirror);
        if (track) track.addEventListener('ended', function () {
          if (st.stream === stream && st.screen === 'camera' && !document.hidden) { stopStream(); showSource(camErrorMessage({ name: 'Error' })); }
        });
        try { els.video.srcObject = stream; } catch (e) { els.video.src = URLx.createObjectURL(stream); }
        var ready = function () {
          if (token !== st.camToken) return;
          if (els.video.videoWidth) { els.shutter.disabled = false; els.status.hidden = true; }
        };
        els.video.addEventListener('loadedmetadata', ready);
        els.video.addEventListener('playing', ready);
        var pl = els.video.play();
        if (pl && pl.catch) pl.catch(noop);
        /* после разрешения камер может оказаться больше одной */
        countCameras().then(function (n) { if (n >= 0) st.cams = n; if (els.sw) els.sw.hidden = !(n > 1); });
      }).catch(function (err) {
        if (st.closed || token !== st.camToken) return;
        stopStream();
        showSource(camErrorMessage(err));
      });
    }
    function capture() {
      var v = camEls && camEls.video;
      if (!v || !v.videoWidth) return;
      camEls.shutter.disabled = true;
      var mirror = st.mirror;
      toEditable(v, v.videoWidth, v.videoHeight, mirror).then(function (res) {
        stopStream();
        if (st.closed) { res.revoke(); return; }
        st.urls.push(res);
        showEditor(res.url);
      }).catch(function () {
        stopStream();
        showSource({ kind: 'bad', text: tt('av_err_generic') });
      });
    }

    /* ----- шаг 3: редактор ----- */
    function showEditor(url) {
      var img = el('img', { alt: '', class: 'av__img' });
      var crop = el('div', { class: 'av__crop', dir: 'ltr' }, [img, el('div', { class: 'av__spin', 'aria-hidden': 'true' })]);
      var msgSlot = el('div', { class: 'av__msg-slot', 'aria-live': 'polite' });
      function tool(name, label, fn) {
        return el('button', { type: 'button', class: 'btn icon-btn av__tool', 'data-act': name, 'aria-label': label, title: label, html: icon(name), disabled: true, onclick: fn });
      }
      var tools = [
        tool('zoomOut', tt('av_zoom_out'), function () { if (st.cropper) st.cropper.zoom(-0.15); }),
        tool('zoomIn', tt('av_zoom_in'), function () { if (st.cropper) st.cropper.zoom(0.15); }),
        tool('rotate', tt('av_rotate'), function () { if (st.cropper) st.cropper.rotate(90); }),
        el('button', { type: 'button', class: 'btn av__tool av__reset', 'data-act': 'reset', disabled: true, onclick: function () { if (st.cropper) st.cropper.reset(); } }, tt('av_reset'))
      ];
      var save = el('button', { type: 'button', class: 'btn btn--primary av__save', disabled: true, onclick: doSave }, [
        el('span', { html: icon('check') }), el('span', { class: 'av__save-l', text: tt('av_save') })
      ]);
      var back = el('button', { type: 'button', class: 'btn btn--ghost av__back-txt', onclick: function () { showSource(); } }, tt('av_back'));
      setScreen('editor', el('div', { class: 'av__screen av__edit' }, [
        crop,
        el('p', { class: 'av__hint', text: tt('av_crop_hint') }),
        msgSlot,
        el('div', { class: 'av__tools' }, tools),
        el('div', { class: 'av__foot' }, [back, save])
      ]));

      function enable(on) { tools.concat([save]).forEach(function (b) { b.disabled = !on; }); }

      loadCropper().then(function (Cropper) {
        if (st.closed || st.screen !== 'editor') return;
        img.onload = function () {
          if (st.closed || st.screen !== 'editor') return;
          /* Даём окну появиться и получить размеры, затем создаём Cropper. */
          var raf = window.requestAnimationFrame || function (fn) { return setTimeout(fn, 16); };
          raf(function () {
            if (st.closed || st.screen !== 'editor') return;
            try {
              st.cropper = new Cropper(img, {
                aspectRatio: 1, viewMode: 1, dragMode: 'move', autoCropArea: 0.86,
                cropBoxMovable: false, cropBoxResizable: false, toggleDragModeOnDblclick: false,
                guides: false, center: false, highlight: false, background: false, modal: true,
                checkOrientation: false, checkCrossOrigin: false, restore: false, responsive: true,
                zoomOnTouch: true, zoomOnWheel: true, wheelZoomRatio: 0.1,
                minContainerWidth: 200, minContainerHeight: 200,
                ready: function () { crop.classList.add('is-ready'); enable(true); }
              });
            } catch (e) {
              msgSlot.appendChild(msgBox({ kind: 'bad', text: tt('av_err_file') }));
            }
          });
        };
        img.onerror = function () { showSource({ kind: 'bad', text: tt('av_err_file') }); };
        img.src = url;
      }, function () {
        if (st.closed) return;
        showSource({ kind: 'bad', text: tt('av_err_editor') });
      });

      function doSave() {
        if (!st.cropper) return;
        var data;
        try {
          /* Сначала 512, потом вдвое — так картинка чёткая и в браузерах без imageSmoothingQuality. */
          var big = st.cropper.getCroppedCanvas({ width: OUT_SIZE * 2, height: OUT_SIZE * 2, fillColor: '#ffffff',
            imageSmoothingEnabled: true, imageSmoothingQuality: 'high' });
          if (!big) throw new Error('no canvas');
          var out = document.createElement('canvas');
          out.width = OUT_SIZE; out.height = OUT_SIZE;
          var ctx = out.getContext('2d');
          ctx.imageSmoothingEnabled = true;
          try { ctx.imageSmoothingQuality = 'high'; } catch (e) { /* */ }
          ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, OUT_SIZE, OUT_SIZE);
          ctx.drawImage(big, 0, 0, OUT_SIZE, OUT_SIZE);
          data = out.toDataURL('image/jpeg', 0.85);
          if (data.length > 80000) data = out.toDataURL('image/jpeg', 0.75);
        } catch (e) {
          msgSlot.innerHTML = ''; msgSlot.appendChild(msgBox({ kind: 'bad', text: tt('av_err_save') }));
          return;
        }
        enable(false);
        save.querySelector('.av__save-l').textContent = tt('av_saving');
        var r;
        try { r = typeof opts.onSave === 'function' ? opts.onSave(data) : null; } catch (e) { r = Promise.reject(e); }
        Promise.resolve(r).then(function () { close(); }, function () {
          if (st.closed) return;
          enable(true);
          save.querySelector('.av__save-l').textContent = tt('av_save');
          msgSlot.innerHTML = ''; msgSlot.appendChild(msgBox({ kind: 'bad', text: tt('av_err_save') }));
        });
      }
    }

    showSource();
    modal = openModal(tt('av_title'), root, cleanup);
    return { close: close, el: root };
  }

  window.Avatar = {
    open: open,
    hasCameraApi: hasCameraApi,
    isInAppBrowser: isInAppBrowser,
    loadCropper: loadCropper
  };
})();

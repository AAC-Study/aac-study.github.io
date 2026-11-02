/* =====================================================================
   RichText — поле с форматированием как в Telegram:
   выделил текст → всплывает панель (жирный, курсив, подчёркнутый, зачёркнутый, код).
   Картинки: Ctrl+V, Win+V (история буфера Windows вставляет так же, как Ctrl+V),
   перетаскивание, файл с ПК/телефона, камера на телефоне.
   Report — окно «Сообщить о проблеме» на этом поле.
   ===================================================================== */
(function () {
  'use strict';
  var el = U.el, t = function (k, p) { return I18N.t(k, p); };

  I18N.add({
    he: { rt_bold: 'מודגש', rt_italic: 'נטוי', rt_underline: 'קו תחתון', rt_strike: 'קו חוצה', rt_code: 'קוד', rt_clear: 'ניקוי עיצוב',
      rt_attach: 'הוספת תמונה', rt_camera: 'צילום', rt_paste_hint: 'אפשר להדביק צילום מסך: Ctrl+V או Win+V. לעיצוב, סמנו טקסט.', rt_touch_hint: 'תמונה: אטב או מצלמה. לעיצוב, סמנו טקסט.',
      rt_too_many: 'אפשר עד {n} תמונות', rt_bad_file: 'זה לא קובץ תמונה', rt_remove: 'הסרה', rt_img_fail: 'לא הצלחנו לפתוח את התמונה',
      rp_placeholder: 'כתבו כאן מה קרה…', rp_send_fail: 'לא נשלח. בדקו את האינטרנט ונסו שוב.', admin_images: 'תמונות: {n}' },
    ru: { rt_bold: 'Жирный', rt_italic: 'Курсив', rt_underline: 'Подчёркнутый', rt_strike: 'Зачёркнутый', rt_code: 'Код', rt_clear: 'Убрать оформление',
      rt_attach: 'Добавить фото', rt_camera: 'Сфотографировать', rt_paste_hint: 'Скриншот можно вставить: Ctrl+V или Win+V. Для оформления выдели текст.', rt_touch_hint: 'Фото: скрепка или камера. Для оформления выдели текст.',
      rt_too_many: 'Можно до {n} картинок', rt_bad_file: 'Это не картинка', rt_remove: 'Убрать', rt_img_fail: 'Не удалось открыть картинку',
      rp_placeholder: 'Напиши здесь, что случилось…', rp_send_fail: 'Не отправилось. Проверь интернет и попробуй ещё раз.', admin_images: 'Картинок: {n}' },
    en: { rt_bold: 'Bold', rt_italic: 'Italic', rt_underline: 'Underline', rt_strike: 'Strikethrough', rt_code: 'Code', rt_clear: 'Clear formatting',
      rt_attach: 'Add photo', rt_camera: 'Take photo', rt_paste_hint: 'Paste a screenshot with Ctrl+V or Win+V. Select text to format it.', rt_touch_hint: 'Photo: paperclip or camera. Select text to format it.',
      rt_too_many: 'Up to {n} images', rt_bad_file: 'That is not an image', rt_remove: 'Remove', rt_img_fail: 'Could not open the image',
      rp_placeholder: 'Write what happened…', rp_send_fail: 'Not sent. Check your connection and try again.', admin_images: 'Images: {n}' }
  });

  /* ---------- безопасный HTML: оставляем только простое оформление ---------- */
  var MAP = { B: 'b', STRONG: 'b', I: 'i', EM: 'i', U: 'u', S: 's', STRIKE: 's', DEL: 's', CODE: 'code' };
  function sanitize(html) {
    var box = document.createElement('div');
    box.innerHTML = String(html || '');
    function walk(node) {
      var out = '';
      for (var c = node.firstChild; c; c = c.nextSibling) {
        if (c.nodeType === 3) { out += U.esc(c.nodeValue); continue; }
        if (c.nodeType !== 1) continue;
        var tag = c.tagName;
        if (tag === 'BR') { out += '<br>'; continue; }
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'IMG' || tag === 'IFRAME') continue;
        var inner = walk(c);
        /* оформление, заданное через style (некоторые браузеры так делают) */
        var st = c.getAttribute && c.getAttribute('style') || '';
        if (/font-weight:\s*(bold|[6-9]00)/i.test(st)) inner = '<b>' + inner + '</b>';
        if (/font-style:\s*italic/i.test(st)) inner = '<i>' + inner + '</i>';
        if (/underline/i.test(st)) inner = '<u>' + inner + '</u>';
        if (/line-through/i.test(st)) inner = '<s>' + inner + '</s>';
        var m = MAP[tag];
        if (m) out += '<' + m + '>' + inner + '</' + m + '>';
        else if (tag === 'DIV' || tag === 'P' || tag === 'LI') out += (out && !/<br>$/.test(out) ? '<br>' : '') + inner + '<br>';
        else out += inner;
      }
      return out;
    }
    return walk(box).replace(/(<br>)+$/, '').replace(/(<br>){3,}/g, '<br><br>');
  }
  function toText(html) {
    var box = document.createElement('div');
    box.innerHTML = sanitize(html).replace(/<br>/g, '\n');
    return (box.textContent || '').trim();
  }

  /* ---------- сжатие картинки: до maxSide пикселей, JPEG ---------- */
  function compress(file, maxSide, quality) {
    return new Promise(function (resolve, reject) {
      var fr = new FileReader();
      fr.onerror = reject;
      fr.onload = function () {
        var img = new Image();
        img.onerror = reject;
        img.onload = function () {
          var w = img.naturalWidth, h = img.naturalHeight, k = Math.min(1, maxSide / Math.max(w, h));
          var c = document.createElement('canvas'); c.width = Math.round(w * k); c.height = Math.round(h * k);
          var g = c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, c.width, c.height);
          g.drawImage(img, 0, 0, c.width, c.height);
          try { resolve(c.toDataURL('image/jpeg', quality)); } catch (e) { reject(e); }
        };
        img.src = fr.result;
      };
      fr.readAsDataURL(file);
    });
  }

  var isTouch = !!(window.matchMedia && matchMedia('(pointer: coarse)').matches);
  var TOOLS = [
    { cmd: 'bold', icon: 'bold', key: 'rt_bold', kbd: 'Ctrl+B' },
    { cmd: 'italic', icon: 'italic', key: 'rt_italic', kbd: 'Ctrl+I' },
    { cmd: 'underline', icon: 'underline', key: 'rt_underline', kbd: 'Ctrl+U' },
    { cmd: 'strikeThrough', icon: 'strike', key: 'rt_strike', kbd: 'Ctrl+Shift+X' },
    { cmd: 'code', icon: 'code', key: 'rt_code', kbd: 'Ctrl+Shift+M' },
    { cmd: 'removeFormat', icon: 'close', key: 'rt_clear' }
  ];

  /* opts: {placeholder, maxImages, maxSide, quality, minHeight} */
  function create(opts) {
    opts = opts || {};
    var maxImages = opts.maxImages == null ? 4 : opts.maxImages;
    var images = [];
    var ed = el('div', { class: 'rte__area', contenteditable: 'true', role: 'textbox', 'aria-multiline': 'true', spellcheck: 'true',
      'data-ph': opts.placeholder || '', dir: 'auto', style: opts.minHeight ? 'min-height:' + opts.minHeight + 'px' : null });
    var thumbs = el('div', { class: 'rte__thumbs' });
    var fileIn = el('input', { type: 'file', accept: 'image/*', multiple: true, hidden: true });
    var camIn = el('input', { type: 'file', accept: 'image/*', capture: 'environment', hidden: true });

    function exec(cmd) {
      ed.focus();
      if (cmd === 'code') {
        var sel = window.getSelection(); var txt = sel ? String(sel) : '';
        if (txt) document.execCommand('insertHTML', false, '<code>' + U.esc(txt) + '</code>');
      } else {
        try { document.execCommand('styleWithCSS', false, false); } catch (e) { /* старые браузеры */ }
        document.execCommand(cmd, false, null);
      }
      update();
    }
    function toolBtn(tl, small) {
      var b = el('button', { type: 'button', class: 'rte__btn', 'data-cmd': tl.cmd, title: t(tl.key) + (tl.kbd ? ' (' + tl.kbd + ')' : ''), 'aria-label': t(tl.key),
        html: Icons.get(tl.icon) });
      /* mousedown, чтобы не терять выделение при нажатии */
      b.addEventListener('mousedown', function (e) { e.preventDefault(); });
      b.addEventListener('click', function () { exec(tl.cmd); if (small) placeBubble(); });
      return b;
    }
    var bar = el('div', { class: 'rte__bar', role: 'toolbar' }, TOOLS.map(function (tl) { return toolBtn(tl); }).concat([
      el('span', { class: 'rte__sep' }),
      el('button', { type: 'button', class: 'rte__btn', title: t('rt_attach'), 'aria-label': t('rt_attach'), html: Icons.get('paperclip'), onclick: function () { fileIn.click(); } }),
      isTouch ? el('button', { type: 'button', class: 'rte__btn', title: t('rt_camera'), 'aria-label': t('rt_camera'), html: Icons.get('camera'), onclick: function () { camIn.click(); } }) : null
    ]));
    /* всплывающая панель над выделением */
    var bubble = el('div', { class: 'rte__bubble', hidden: true, role: 'toolbar' }, TOOLS.slice(0, 5).map(function (tl) { return toolBtn(tl, true); }));
    document.body.appendChild(bubble);

    function inEditor(node) { while (node) { if (node === ed) return true; node = node.parentNode; } return false; }
    function placeBubble() {
      var sel = window.getSelection();
      if (!sel || sel.isCollapsed || !sel.rangeCount || !inEditor(sel.anchorNode)) { bubble.hidden = true; return; }
      var r = sel.getRangeAt(0).getBoundingClientRect();
      if (!r || (!r.width && !r.height)) { bubble.hidden = true; return; }
      bubble.hidden = false;
      var bw = bubble.offsetWidth, bh = bubble.offsetHeight;
      var x = Math.max(8, Math.min(window.innerWidth - bw - 8, r.left + r.width / 2 - bw / 2));
      /* на телефоне сверху появляется системное меню «Копировать», поэтому ставим панель снизу */
      var y = isTouch ? r.bottom + 10 : r.top - bh - 8;
      if (y < 8) y = r.bottom + 10;
      if (y + bh > window.innerHeight - 8) y = Math.max(8, r.top - bh - 8);
      bubble.style.left = x + 'px'; bubble.style.top = y + 'px';
    }
    function update() {
      var btns = bar.querySelectorAll('[data-cmd]'), bb = bubble.querySelectorAll('[data-cmd]');
      [btns, bb].forEach(function (list) {
        Array.prototype.forEach.call(list, function (b) {
          var c = b.getAttribute('data-cmd'), on = false;
          if (c !== 'removeFormat' && c !== 'code') { try { on = document.queryCommandState(c); } catch (e) { on = false; } }
          b.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
      });
      ed.classList.toggle('is-empty', !toText(ed.innerHTML));
    }
    function onSel() { if (!document.body.contains(ed)) { cleanup(); return; } placeBubble(); if (inEditor((window.getSelection() || {}).anchorNode)) update(); }
    document.addEventListener('selectionchange', onSel);
    window.addEventListener('scroll', onSel, true);
    function cleanup() {
      document.removeEventListener('selectionchange', onSel);
      window.removeEventListener('scroll', onSel, true);
      if (bubble.parentNode) bubble.parentNode.removeChild(bubble);
    }

    function addFiles(files) {
      var list = Array.prototype.slice.call(files || []);
      list.forEach(function (f) {
        if (!f || !/^image\//.test(f.type || '')) { if (f) U.toast(t('rt_bad_file'), 'err'); return; }
        if (images.length >= maxImages) { U.toast(t('rt_too_many', { n: maxImages }), 'err'); return; }
        var slot = { data: null };
        images.push(slot);
        var th = el('div', { class: 'rte__thumb is-loading' });
        thumbs.appendChild(th);
        compress(f, opts.maxSide || 1600, opts.quality || 0.8).then(function (data) {
          slot.data = data;
          th.classList.remove('is-loading');
          th.appendChild(el('img', { src: data, alt: '', onclick: function () { view(data); } }));
          th.appendChild(el('button', { type: 'button', class: 'rte__thumb-x', 'aria-label': t('rt_remove'), html: Icons.get('close'), onclick: function () {
            images.splice(images.indexOf(slot), 1); thumbs.removeChild(th);
          } }));
        }, function () {
          images.splice(images.indexOf(slot), 1); thumbs.removeChild(th); U.toast(t('rt_img_fail'), 'err');
        });
      });
    }
    fileIn.addEventListener('change', function () { addFiles(fileIn.files); fileIn.value = ''; });
    camIn.addEventListener('change', function () { addFiles(camIn.files); camIn.value = ''; });

    ed.addEventListener('paste', function (e) {
      var cd = e.clipboardData || window.clipboardData;
      if (!cd) return;
      var files = [];
      if (cd.items) Array.prototype.forEach.call(cd.items, function (it) { if (it.kind === 'file' && /^image\//.test(it.type)) { var f = it.getAsFile(); if (f) files.push(f); } });
      if (!files.length && cd.files) Array.prototype.forEach.call(cd.files, function (f) { if (/^image\//.test(f.type)) files.push(f); });
      e.preventDefault();
      if (files.length) { addFiles(files); return; }
      /* чужое оформление (цвета, шрифты) не тащим: вставляем простой текст */
      var txt = cd.getData('text/plain') || '';
      if (txt) document.execCommand('insertText', false, txt);
    });
    ed.addEventListener('dragover', function (e) { e.preventDefault(); ed.classList.add('is-drop'); });
    ed.addEventListener('dragleave', function () { ed.classList.remove('is-drop'); });
    ed.addEventListener('drop', function (e) {
      ed.classList.remove('is-drop');
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length) { e.preventDefault(); addFiles(e.dataTransfer.files); }
    });
    ed.addEventListener('keydown', function (e) {
      if (!(e.ctrlKey || e.metaKey) || !e.shiftKey) return;
      var k = (e.key || '').toLowerCase();
      if (k === 'x') { e.preventDefault(); exec('strikeThrough'); }
      if (k === 'm') { e.preventDefault(); exec('code'); }
    });
    ed.addEventListener('input', update);
    ed.addEventListener('blur', function () { setTimeout(function () { if (document.activeElement !== ed) bubble.hidden = true; }, 150); });

    var root = el('div', { class: 'rte' }, [bar, ed, thumbs, fileIn, camIn, el('div', { class: 'rte__hint muted' }, t(isTouch ? 'rt_touch_hint' : 'rt_paste_hint'))]);
    setTimeout(update, 0);
    return {
      el: root, area: ed,
      html: function () { return sanitize(ed.innerHTML); },
      text: function () { return toText(ed.innerHTML); },
      images: function () { return images.filter(function (x) { return x.data; }).map(function (x) { return x.data; }); },
      busy: function () { return images.some(function (x) { return !x.data; }); },
      isEmpty: function () { return !toText(ed.innerHTML) && !images.length; },
      focus: function () { ed.focus(); },
      destroy: cleanup
    };
  }

  function view(src) {
    App.modal({ title: '', wide: true, content: el('img', { src: src, alt: '', class: 'rte__full' }) });
  }

  window.RichText = { create: create, sanitize: sanitize, toText: toText, compress: compress, view: view };

  /* ---------- «Сообщить о проблеме» ---------- */
  function open() {
    var mock = Store.mode === 'mock';
    var rt = create({ placeholder: t('rp_placeholder'), maxImages: 4, maxSide: mock ? 1200 : 1600, quality: mock ? 0.7 : 0.8, minHeight: 130 });
    var send = el('button', { class: 'btn btn--primary', type: 'button', style: 'width:100%;margin-top:12px', html: Icons.get('send') + '<span>' + U.esc(t('rp_send')) + '</span>' });
    var m = App.modal({ title: t('rp_title'), onClose: rt.destroy, content: el('div', null, [
      el('p', { class: 'muted' }, t('rp_lead')),
      rt.el,
      send
    ]) });
    send.addEventListener('click', function () {
      if (rt.isEmpty()) { rt.focus(); return; }
      if (rt.busy()) { setTimeout(function () { send.click(); }, 300); return; }
      send.disabled = true;
      var info = { type: 'user', text: rt.text(), html: rt.html(), images: rt.images(), page: location.hash || '#/', ua: navigator.userAgent, lang: I18N.lang };
      Store.reportIssue(info).then(function (r) {
        m.close(); U.toast(t('rp_thanks'));
        if (window.Push && r && r.id) Push.notifyAdmin(r.id);
        /* копия админу в личные сообщения на сайте (когда подключены чаты) */
        if (window.Social && typeof Social.sendSupport === 'function') {
          try { Promise.resolve(Social.sendSupport({ html: info.html, text: info.text, images: info.images })).catch(function () {}); } catch (e) { /* не мешаем отправке */ }
        }
      }, function () { send.disabled = false; U.toast(t('rp_send_fail'), 'err'); });
    });
    setTimeout(rt.focus, 300);
  }
  window.Report = { open: open };
})();

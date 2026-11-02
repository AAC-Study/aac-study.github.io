/* Мелкие помощники. Пишем без optional chaining и ?? — для старых iPhone (iOS 12+). */
(function () {
  'use strict';
  var U = {};
  U.$ = function (sel, root) { return (root || document).querySelector(sel); };
  U.$$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  U.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  /* el('div', {class:'x', onclick: fn}, [children or text]) */
  U.el = function (tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v == null || v === false) return;
      if (k.indexOf('on') === 0 && typeof v === 'function') n.addEventListener(k.slice(2), v);
      else if (k === 'html') n.innerHTML = v;
      else if (k === 'text') n.textContent = v;
      else n.setAttribute(k, v === true ? '' : v);
    });
    if (children != null) {
      if (!Array.isArray(children)) children = [children];
      children.forEach(function (c) {
        if (c == null || c === false) return;
        n.appendChild(typeof c === 'string' || typeof c === 'number' ? document.createTextNode(String(c)) : c);
      });
    }
    return n;
  };
  U.storage = {
    get: function (k, def) {
      try { var v = window.localStorage.getItem(k); return v == null ? def : JSON.parse(v); } catch (e) { return def; }
    },
    set: function (k, v) { try { window.localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } }
  };
  /* Текст на выбранном языке из объекта {he, ru, en}; если перевода нет — иврит, потом русский. */
  U.tr = function (obj) {
    if (obj == null) return '';
    if (typeof obj === 'string') return obj;
    var l = window.I18N ? window.I18N.lang : 'he';
    return obj[l] || obj.he || obj.ru || obj.en || '';
  };
  U.toast = function (text, kind) {
    var box = U.$('#toasts');
    if (!box) return;
    var t = U.el('div', { class: 'toast' + (kind ? ' toast--' + kind : ''), role: 'status' }, text);
    box.appendChild(t);
    setTimeout(function () { t.classList.add('toast--out'); }, 2600);
    setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 3100);
  };
  U.reducedMotion = function () {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  };
  window.U = U;
})();

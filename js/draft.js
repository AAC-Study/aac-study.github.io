/* Черновик для рисования (холст в окне задачи).
   Draft.create(host, {strokes, onChange}) → { setColor, setSize, setTool, undo, clear, isEmpty, getStrokes, refresh, destroy }
   - Pointer Events; для старого Safari (<13) — touch + mouse.
   - Чёткость на Retina (devicePixelRatio), сглаживание квадратичными кривыми, нажим стилуса.
   - Штрихи хранятся в CSS-пикселях, поэтому при изменении размера рисунок не теряется.
   - touch-action: none только на самом холсте (страница вокруг прокручивается как обычно). */
(function () {
  'use strict';

  function cssVar(name, fallback) {
    try {
      var v = getComputedStyle(document.documentElement).getPropertyValue(name);
      return (v && v.trim()) || fallback;
    } catch (e) { return fallback; }
  }

  function create(host, opts) {
    opts = opts || {};
    var canvas = document.createElement('canvas');
    canvas.className = 'dr-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    canvas.style.touchAction = 'none';
    host.appendChild(canvas);
    var ctx = canvas.getContext('2d');

    var strokes = (opts.strokes || []).slice();   // {tool, color, size, pts:[[x,y,w],...]}
    var history = [];                              // для undo: {type:'stroke'} | {type:'clear', prev:[...]}
    strokes.forEach(function () { history.push({ type: 'stroke' }); });
    var color = 'ink', size = 4, tool = 'pen';
    var cur = null, activeId = null;
    var w = 0, h = 0, dpr = 1;

    function resolveColor(c) { return c === 'ink' ? cssVar('--text', '#171a2e') : c; }

    function resize() {
      var r = host.getBoundingClientRect();
      var nw = Math.round(r.width), nh = Math.round(r.height);
      var nd = Math.min(window.devicePixelRatio || 1, 3);
      if (!nw || !nh) return;
      if (nw === w && nh === h && nd === dpr) return;
      w = nw; h = nh; dpr = nd;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      redraw();
    }

    function setup(s) {
      ctx.globalCompositeOperation = s.tool === 'eraser' ? 'destination-out' : 'source-over';
      ctx.strokeStyle = s.tool === 'eraser' ? 'rgba(0,0,0,1)' : resolveColor(s.color);
      ctx.fillStyle = ctx.strokeStyle;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    }

    /* Отрезок i: квадратичная кривая от середины (p[i-2],p[i-1]) через p[i-1] к середине (p[i-1],p[i]). */
    function drawSegment(s, i) {
      var p = s.pts;
      if (i === 0) {
        ctx.beginPath();
        ctx.arc(p[0][0], p[0][1], p[0][2] / 2, 0, Math.PI * 2);
        ctx.fill();
        return;
      }
      var a = p[i - 1], b = p[i];
      var start = i >= 2 ? [(p[i - 2][0] + a[0]) / 2, (p[i - 2][1] + a[1]) / 2] : [a[0], a[1]];
      var end = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
      ctx.lineWidth = (a[2] + b[2]) / 2;
      ctx.beginPath();
      ctx.moveTo(start[0], start[1]);
      ctx.quadraticCurveTo(a[0], a[1], end[0], end[1]);
      ctx.stroke();
    }
    function finishStroke(s) {
      var p = s.pts, n = p.length;
      if (n < 2) return;
      var a = p[n - 2], b = p[n - 1];
      ctx.lineWidth = b[2];
      ctx.beginPath();
      ctx.moveTo((a[0] + b[0]) / 2, (a[1] + b[1]) / 2);
      ctx.lineTo(b[0], b[1]);
      ctx.stroke();
    }

    function redraw() {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      strokes.forEach(function (s) {
        setup(s);
        for (var i = 0; i < s.pts.length; i++) drawSegment(s, i);
        finishStroke(s);
      });
      ctx.globalCompositeOperation = 'source-over';
    }

    function widthFor(pressure, type) {
      var base = tool === 'eraser' ? size * 4 + 8 : size;
      if (tool === 'pen' && (type === 'pen' || type === 'touch-force') && pressure > 0) return Math.max(1, base * (0.35 + pressure * 1.3));
      return base;
    }

    function pos(clientX, clientY) {
      var r = canvas.getBoundingClientRect();
      return [clientX - r.left, clientY - r.top];
    }

    function begin(x, y, pressure, type) {
      cur = { tool: tool, color: color, size: size, pts: [[x, y, widthFor(pressure, type)]] };
      strokes.push(cur);
      setup(cur);
      drawSegment(cur, 0);
    }
    function move(x, y, pressure, type) {
      if (!cur) return;
      var last = cur.pts[cur.pts.length - 1];
      if (Math.abs(last[0] - x) < 0.6 && Math.abs(last[1] - y) < 0.6) return;
      cur.pts.push([x, y, widthFor(pressure, type)]);
      setup(cur);
      drawSegment(cur, cur.pts.length - 1);
    }
    function end() {
      if (!cur) return;
      setup(cur);
      finishStroke(cur);
      ctx.globalCompositeOperation = 'source-over';
      history.push({ type: 'stroke' });
      cur = null;
      activeId = null;
      if (opts.onChange) opts.onChange(strokes.slice());
    }

    /* ---------- events ---------- */
    var off = [];
    function on(target, type, fn, o) { target.addEventListener(type, fn, o || false); off.push(function () { target.removeEventListener(type, fn, o || false); }); }

    if (window.PointerEvent) {
      on(canvas, 'pointerdown', function (e) {
        if (e.button != null && e.button > 0) return;
        if (cur) return;
        if (e.pointerType === 'mouse') e.preventDefault();   // для touch хватает touch-action: none
        activeId = e.pointerId;
        try { canvas.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
        var p = pos(e.clientX, e.clientY);
        begin(p[0], p[1], e.pressure, e.pointerType);
      });
      on(canvas, 'pointermove', function (e) {
        if (!cur || e.pointerId !== activeId) return;
        e.preventDefault();
        var list = e.getCoalescedEvents ? e.getCoalescedEvents() : null;
        if (!list || !list.length) list = [e];
        for (var i = 0; i < list.length; i++) {
          var p = pos(list[i].clientX, list[i].clientY);
          move(p[0], p[1], list[i].pressure, e.pointerType);
        }
      });
      var up = function (e) { if (cur && e.pointerId === activeId) end(); };
      on(canvas, 'pointerup', up);
      on(canvas, 'pointercancel', up);
      on(canvas, 'lostpointercapture', up);
    } else {
      // старый Safari: touch
      var touchId = null;
      on(canvas, 'touchstart', function (e) {
        if (cur) return;
        var tt = e.changedTouches[0];
        touchId = tt.identifier;
        e.preventDefault();
        var p = pos(tt.clientX, tt.clientY);
        begin(p[0], p[1], tt.force || 0, tt.force ? 'touch-force' : 'touch');
      }, { passive: false });
      on(canvas, 'touchmove', function (e) {
        if (!cur) return;
        for (var i = 0; i < e.changedTouches.length; i++) {
          var tt = e.changedTouches[i];
          if (tt.identifier !== touchId) continue;
          e.preventDefault();
          var p = pos(tt.clientX, tt.clientY);
          move(p[0], p[1], tt.force || 0, tt.force ? 'touch-force' : 'touch');
        }
      }, { passive: false });
      var tend = function (e) {
        for (var i = 0; i < e.changedTouches.length; i++) if (e.changedTouches[i].identifier === touchId) { end(); touchId = null; }
      };
      on(canvas, 'touchend', tend);
      on(canvas, 'touchcancel', tend);
      // мышь
      var mouseDown = false;
      on(canvas, 'mousedown', function (e) {
        if (e.button !== 0 || cur) return;
        e.preventDefault();
        mouseDown = true;
        var p = pos(e.clientX, e.clientY);
        begin(p[0], p[1], 0, 'mouse');
      });
      on(window, 'mousemove', function (e) {
        if (!mouseDown) return;
        var p = pos(e.clientX, e.clientY);
        move(p[0], p[1], 0, 'mouse');
      });
      on(window, 'mouseup', function () { if (mouseDown) { mouseDown = false; end(); } });
    }

    var ro = null;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(function () { resize(); });
      ro.observe(host);
    } else {
      on(window, 'resize', resize);
      on(window, 'orientationchange', function () { setTimeout(resize, 200); });
    }
    // смена темы → перекрасить «чернила»
    var mo = null;
    if (window.MutationObserver) {
      mo = new MutationObserver(function () { redraw(); });
      mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    }
    resize();

    return {
      el: canvas,
      setColor: function (c) { color = c; },
      setSize: function (s) { size = s; },
      setTool: function (t) { tool = t === 'eraser' ? 'eraser' : 'pen'; canvas.classList.toggle('is-eraser', tool === 'eraser'); },
      undo: function () {
        var last = history.pop();
        if (!last) return;
        if (last.type === 'clear') strokes = last.prev;
        else strokes.pop();
        redraw();
        if (opts.onChange) opts.onChange(strokes.slice());
      },
      clear: function () {
        if (!strokes.length) return;
        history.push({ type: 'clear', prev: strokes });
        strokes = [];
        redraw();
        if (opts.onChange) opts.onChange(strokes.slice());
      },
      isEmpty: function () { return strokes.length === 0; },
      getStrokes: function () { return strokes.slice(); },
      refresh: function () { w = 0; resize(); },
      destroy: function () {
        off.forEach(function (f) { f(); });
        if (ro) ro.disconnect();
        if (mo) mo.disconnect();
      }
    };
  }

  window.Draft = { create: create };
})();

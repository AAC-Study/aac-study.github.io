/* Визуальные мини-тренажёры для «урока-игры». Каждый: function(host, stage, api) → { check, readyAtStart? }.
   api.ready(bool) включает кнопку «Проверить», api.right(text) / api.wrong(text) — итог попытки. */
(function () {
  'use strict';
  var W = window.PlayWidgets = window.PlayWidgets || {};
  function el(t, a, k) { return window.PlayWidgets._el(t, a, k); }
  W._el = function (tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (attrs[k] == null) continue;
      if (k === 'class') n.className = attrs[k]; else if (k === 'text') n.textContent = attrs[k]; else if (k === 'html') n.innerHTML = attrs[k];
      else if (k.indexOf('on') === 0) n.addEventListener(k.slice(2), attrs[k]); else n.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c != null) n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return n;
  };
  function num(s) { var t = String(s).trim().replace(/[−–—]/g, '-').replace(',', '.'); return t === '' || isNaN(+t) ? NaN : +t; }

  /* ---------- биты: собрать число / дополнение до 2 ---------- */
  function bitRow(n, opts) {
    var row = el('div', { class: 'bits' }), btns = [];
    row.style.setProperty('--n', n);
    for (var i = 0; i < n; i++) {
      var w = Math.pow(2, n - 1 - i);
      var label = opts.signed && i === 0 ? '±' : String(w);
      var b = el('button', { type: 'button', class: 'bit__b' + (opts.fixed ? ' fixed' : ''), 'aria-pressed': 'false', text: '0', 'aria-label': 'бит ' + w });
      (function (b) {
        if (opts.fixed) b.disabled = true;
        else b.addEventListener('click', function () { set(b, b.textContent === '0'); if (opts.onchange) opts.onchange(); });
      })(b);
      btns.push(b);
      row.appendChild(el('div', { class: 'bit' }, [opts.noWeights ? null : el('div', { class: 'bit__w', text: label }), b]));
    }
    function set(b, on) { b.textContent = on ? '1' : '0'; b.setAttribute('aria-pressed', on ? 'true' : 'false'); }
    return {
      row: row, btns: btns,
      get: function () { return btns.map(function (b) { return b.textContent; }).join(''); },
      put: function (s) { s.split('').forEach(function (c, i) { set(btns[i], c === '1'); }); }
    };
  }
  function signed(bits) { var v = parseInt(bits, 2); return bits[0] === '1' ? v - Math.pow(2, bits.length) : v; }
  function sumLine(bits) {
    var parts = []; bits.split('').forEach(function (c, i) { if (c === '1') parts.push(Math.pow(2, bits.length - 1 - i)); });
    return parts.length ? parts.join(' + ') + ' = ' + parseInt(bits, 2) : '0';
  }

  W.bits = function (host, s, api) {
    var n = s.n || 8;
    if (s.mode === 'make') {
      var big = el('div', { class: 'w-big' }), line = el('div', { class: 'sum-line' });
      var r = bitRow(n, { onchange: upd });
      host.appendChild(r.row); host.appendChild(line); host.appendChild(big);
      function upd() { var v = r.get(); big.innerHTML = parseInt(v, 2) + '<small>цель: ' + s.target + '</small>'; line.textContent = sumLine(v); api.ready(true); }
      upd(); api.ready(false);
      return {
        check: function () {
          var v = parseInt(r.get(), 2);
          if (v === s.target) api.right(s.why || (r.get() + ' = ' + sumLine(r.get())));
          else api.wrong(v > s.target ? 'Получилось ' + v + ', это больше ' + s.target + '. Начни с самого большого веса, который помещается, и убери лишнее.' : 'Получилось ' + v + ', это меньше ' + s.target + '. Какого веса не хватает? ' + s.target + ' − ' + v + ' = ' + (s.target - v) + '.');
        }
      };
    }
    if (s.mode === 'twos') {
      var pos = (s.n2 >>> 0).toString(2).padStart(n, '0');
      var inv = pos.split('').map(function (c) { return c === '1' ? '0' : '1'; }).join('');
      var res = ((Math.pow(2, n) - s.n2) >>> 0).toString(2).padStart(n, '0');
      var phase = 1;
      host.appendChild(el('div', { class: 'bits-row-label', text: s.n2 + ' в двоичной (' + n + ' бит)' }));
      var a = bitRow(n, { fixed: true }); a.put(pos); host.appendChild(a.row);
      var lab = el('div', { class: 'bits-row-label', text: 'Шаг 1. Переверни каждый бит: 0 → 1, 1 → 0' });
      host.appendChild(lab);
      var b = bitRow(n, { noWeights: true, onchange: function () { api.ready(true); } });
      host.appendChild(b.row);
      var note = el('div', { class: 'sum-line' }); host.appendChild(note);
      return {
        check: function () {
          var v = b.get();
          if (phase === 1) {
            if (v === inv) {
              phase = 2;
              lab.textContent = 'Шаг 2. Теперь прибавь 1 к перевёрнутому числу';
              note.textContent = 'перевёрнуто: ' + inv + '  (это дополнение до 1)';
              api.ready(true);
              return;
            }
            var badAt = v.split('').map(function (c, i) { return c === inv[i] ? null : i + 1; }).filter(Boolean);
            return api.wrong('Не перевёрнуты биты № ' + badAt.join(', ') + ' (слева). Под каждой 1 должен стоять 0, под каждым 0 — 1.');
          }
          if (v === res) {
            b.btns.forEach(function (x) { x.disabled = true; });
            note.textContent = res + ' = ' + signed(res) + ' (со знаком)';
            return api.right(s.why || ('−' + s.n2 + ' = ' + res + '. Старший бит 1, значит число отрицательное.'));
          }
          api.wrong('Прибавляем 1 к ' + inv + ' справа: 0 + 1 = 1; 1 + 1 = 10 — пишем 0, 1 переносим дальше влево.');
        }
      };
    }
  };

  /* ---------- сложение в столбик (двоичное) ---------- */
  W.binadd = function (host, s, api) {
    var a = s.a, b = s.b, len = Math.max(a.length, b.length) + 1;
    a = a.padStart(len, ' '); b = b.padStart(len, ' ');
    var sum = (parseInt(s.a, 2) + parseInt(s.b, 2)).toString(2).padStart(len, '0');
    var carries = []; var c = 0;
    for (var i = len - 1; i >= 0; i--) {
      var x = (a[i] === '1' ? 1 : 0) + (b[i] === '1' ? 1 : 0) + c; carries[i] = c; c = x >= 2 ? 1 : 0;
    }
    var grid = el('div', { class: 'col' }); grid.style.gridTemplateColumns = 'repeat(' + (len + 1) + ', 34px)';
    var carryCells = [];
    grid.appendChild(el('div', { class: 'col__c' }));
    for (i = 0; i < len; i++) { var cc = el('div', { class: 'col__c col__carry', text: '' }); carryCells.push(cc); grid.appendChild(cc); }
    function row(sign, str) { grid.appendChild(el('div', { class: 'col__c', text: sign })); str.split('').forEach(function (ch) { grid.appendChild(el('div', { class: 'col__c', text: ch.trim() })); }); }
    row('', a); row('+', b);
    grid.appendChild(el('div', { class: 'col__line' }));
    grid.appendChild(el('div', { class: 'col__c', text: '' }));
    var ins = [];
    for (i = 0; i < len; i++) {
      (function (i) {
        var inp = el('button', { type: 'button', class: 'col__in', text: '' });
        inp.addEventListener('click', function () { inp.textContent = inp.textContent === '' ? '0' : inp.textContent === '0' ? '1' : ''; inp.classList.remove('bad', 'ok'); api.ready(ins.some(function (x) { return x.textContent !== ''; })); });
        ins.push(inp); grid.appendChild(inp);
      })(i);
    }
    host.appendChild(grid);
    host.appendChild(el('p', { class: 'w-note', text: 'Нажимай на клетки ответа: пусто → 0 → 1. Начинай справа. Самая левая клетка — для переноса (если он есть).' }));
    return {
      check: function () {
        var bad = [], firstBad = -1;
        for (var i = len - 1; i >= 0; i--) {
          var want = sum[i], got = ins[i].textContent || (i === 0 && sum[0] === '0' ? '0' : '');
          if (i === 0 && sum[0] === '0' && got === '') got = '0';
          var ok = got === want;
          ins[i].classList.toggle('ok', ok); ins[i].classList.toggle('bad', !ok);
          if (!ok) { bad.push(i); if (firstBad < 0) firstBad = i; }
        }
        carryCells.forEach(function (cc, i) { cc.textContent = carries[i] && (bad.length === 0 || i > firstBad) ? '1' : ''; });
        if (!bad.length) {
          if (s.drop) ins[0].classList.add('drop');
          return api.right(s.why);
        }
        var i0 = firstBad, ones = (a[i0] === '1' ? 1 : 0) + (b[i0] === '1' ? 1 : 0) + carries[i0];
        var col = len - i0;
        api.wrong('Столбик № ' + col + ' справа: ' + ones + (ones === 1 ? ' единица' : ones === 0 ? ' единиц' : ' единицы') + (carries[i0] ? ' (вместе с переносом)' : '') + '. ' +
          (ones === 0 ? 'Пишем 0.' : ones === 1 ? 'Пишем 1, переноса нет.' : ones === 2 ? '1 + 1 = 10: пишем 0, 1 переносим влево.' : '1 + 1 + 1 = 11: пишем 1, 1 переносим влево.'));
      }
    };
  };

  /* ---------- таблица отслеживания цикла ---------- */
  W.trace = function (host, s, api) {
    var t = el('table', { class: 'trace' }), head = el('tr', null, [el('th', { text: s.roundLabel || 'проход' })]);
    s.cols.forEach(function (c) { head.appendChild(el('th', { text: c })); });
    t.appendChild(head);
    var inputs = [];
    s.rows.forEach(function (r, ri) {
      var tr = el('tr', null, [el('td', { class: 'round', text: String(ri + 1) })]);
      inputs[ri] = [];
      r.forEach(function (v, ci) {
        var given = s.given && s.given[ri] && s.given[ri][ci];
        var inp = el('input', { type: 'text', inputmode: 'text', autocomplete: 'off', 'aria-label': s.cols[ci] + ', проход ' + (ri + 1) });
        if (given) { inp.value = v; inp.readOnly = true; }
        inp.addEventListener('input', function () { inp.classList.remove('bad'); api.ready(true); });
        inputs[ri][ci] = inp; tr.appendChild(el('td', null, [inp]));
      });
      t.appendChild(tr);
    });
    host.appendChild(t);
    return {
      check: function () {
        var first = null;
        s.rows.forEach(function (r, ri) {
          r.forEach(function (v, ci) {
            var inp = inputs[ri][ci]; if (inp.readOnly) return;
            var ok = String(inp.value).trim().replace(/[−–—]/g, '-') === String(v);
            inp.classList.toggle('ok', ok); inp.classList.toggle('bad', !ok);
            if (!ok && !first) first = { ri: ri, ci: ci };
          });
        });
        if (!first) return api.right(s.why);
        var h = s.hint ? s.hint(first.ri, first.ci) : 'Проверь проход ' + (first.ri + 1) + '.';
        api.wrong(h);
      }
    };
  };

  /* ---------- SQL: отметь строки, которые вернёт запрос ---------- */
  W.sqlrows = function (host, s, api) {
    var t = el('table', { class: 'tbl' }), head = el('tr', null, [el('th', { text: '' })]);
    s.cols.forEach(function (c) { head.appendChild(el('th', { text: c })); });
    t.appendChild(head);
    var trs = [];
    s.rows.forEach(function (r, ri) {
      var tr = el('tr', { class: 'row', 'aria-pressed': 'false', role: 'button', tabindex: '0' }, [el('td', { text: '○' })]);
      r.forEach(function (v) { tr.appendChild(el('td', { text: String(v) })); });
      tr.addEventListener('click', function () {
        var on = tr.getAttribute('aria-pressed') !== 'true';
        tr.setAttribute('aria-pressed', on ? 'true' : 'false'); tr.firstChild.textContent = on ? '●' : '○';
        trs.forEach(function (x) { x.classList.remove('ok', 'bad', 'miss'); });
        api.ready(true);
      });
      trs.push(tr); t.appendChild(tr);
    });
    host.appendChild(t);
    host.appendChild(el('p', { class: 'w-note', text: 'Нажми на строки, которые попадут в результат. Если ни одна не подходит — сразу «Проверить».' }));
    return {
      readyAtStart: true,
      check: function () {
        var extra = [], missed = [];
        trs.forEach(function (tr, i) {
          var on = tr.getAttribute('aria-pressed') === 'true', want = s.answer.indexOf(i) >= 0;
          if (on && want) tr.classList.add('ok');
          if (on && !want) { tr.classList.add('bad'); extra.push(i); }
          if (!on && want) { tr.classList.add('miss'); missed.push(i); }
        });
        if (!extra.length && !missed.length) return api.right(s.why);
        var msg = [];
        if (extra.length) msg.push('Красные строки не подходят под условие: ' + extra.map(function (i) { return s.explain ? s.explain(s.rows[i]) : s.rows[i].join(', '); }).join('; ') + '.');
        if (missed.length) msg.push('Строки в зелёной рамке подходят, но ты их не отметил: ' + missed.map(function (i) { return s.explain ? s.explain(s.rows[i]) : s.rows[i].join(', '); }).join('; ') + '.');
        api.wrong(msg.join(' '));
      }
    };
  };

  /* ---------- CSS grid: живой просмотр ---------- */
  W.grid = function (host, s, api) {
    var colors = ['#6656f5', '#12b5a6', '#e2683c', '#d64590', '#3b82f6', '#d98b05', '#18a058', '#8b5cf6'];
    var prev = el('div', { class: 'gprev' }), items = [];
    for (var i = 0; i < (s.items || 6); i++) { var d = el('div', { text: String(i + 1) }); d.style.background = colors[i % colors.length]; items.push(d); prev.appendChild(d); }
    var css = el('div', { class: 'gcss' });
    var state = { cols: s.start || 'auto', span: false };
    function upd() {
      prev.style.gridTemplateColumns = state.cols;
      items[0].style.gridColumn = state.span ? '1 / span 2' : '';
      items[0].style.gridRow = state.span && s.rowSpan ? '1 / span 2' : '';
      css.textContent = '.box {\n  display: grid;\n  grid-template-columns: ' + state.cols + ';\n}' + (s.spanCtl ? '\n#one {\n  grid-column: ' + (state.span ? '1 /span 2' : 'auto') + ';' + (s.rowSpan ? '\n  grid-row: ' + (state.span ? '1 /span 2' : 'auto') + ';' : '') + '\n}' : '');
    }
    var ctrl = el('div', { class: 'gctrl' }), cbtns = [];
    (s.options || []).forEach(function (o) {
      var b = el('button', { type: 'button', 'aria-pressed': o === state.cols ? 'true' : 'false', text: o });
      b.addEventListener('click', function () { state.cols = o; cbtns.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); }); upd(); api.ready(true); });
      cbtns.push(b); ctrl.appendChild(b);
    });
    if (s.spanCtl) {
      var sb = el('button', { type: 'button', 'aria-pressed': 'false', text: '#one: span 2' });
      sb.addEventListener('click', function () { state.span = !state.span; sb.setAttribute('aria-pressed', state.span ? 'true' : 'false'); upd(); api.ready(true); });
      ctrl.appendChild(sb);
    }
    host.appendChild(prev); host.appendChild(css); host.appendChild(ctrl);
    upd();
    return {
      check: function () {
        var okCols = !s.target || state.cols === s.target, okSpan = !s.spanCtl || state.span === true;
        if (okCols && okSpan) return api.right(s.why);
        if (!okCols) {
          var n = state.cols.split(' ').length, want = s.target.split(' ').length;
          return api.wrong('Сейчас ' + n + ' ' + (n === 1 ? 'столбец' : n < 5 ? 'столбца' : 'столбцов') + ', а нужно ' + want + '. Сколько слов после grid-template-columns — столько и столбцов.');
        }
        api.wrong('Первая коробка должна занять 2 столбца. Включи «#one: span 2».');
      }
    };
  };

  /* ---------- квадратное уравнение по шагам + парабола ---------- */
  W.quad = function (host, s, api) {
    var A = s.a, B = s.b, C = s.c, D = B * B - 4 * A * C, sq = Math.sqrt(D);
    var roots = D < 0 ? [] : D === 0 ? [-B / (2 * A)] : [(-B + sq) / (2 * A), (-B - sq) / (2 * A)];
    var steps = [
      { k: 'a', v: A, hint: 'a — число перед x². Если перед x² ничего не написано, a = 1.' },
      { k: 'b', v: B, hint: 'b — число перед x вместе со знаком. Если x нет, b = 0.' },
      { k: 'c', v: C, hint: 'c — число без x вместе со знаком.' },
      { k: 'D', v: D, wide: true, hint: 'D = b² − 4 × a × c = ' + '(' + B + ')² − 4 × ' + A + ' × (' + C + ')' },
      { k: '√D', v: sq, wide: true, hint: 'Какое число в квадрате даёт ' + D + '?' },
      { k: 'x₁', v: roots[0], half: true, hint: 'x = (−b + √D) / (2a) = (' + (-B) + ' + ' + sq + ') / ' + 2 * A },
      { k: 'x₂', v: roots[1], half: true, hint: 'x = (−b − √D) / (2a) = (' + (-B) + ' − ' + sq + ') / ' + 2 * A }
    ];
    host.appendChild(el('div', { class: 'formula', text: s.eq }));
    var g = el('div', { class: 'quad' }), ins = [];
    steps.forEach(function (st, i) {
      var inp = el('input', { type: 'text', inputmode: 'text', autocomplete: 'off', 'aria-label': st.k });
      inp.disabled = i > 0;
      inp.addEventListener('input', function () { inp.classList.remove('bad'); api.ready(true); });
      inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') chk(); });
      ins.push(inp);
      g.appendChild(el('label', { class: st.wide ? 'wide' : st.half ? 'half' : null }, [st.k, inp]));
    });
    host.appendChild(g);
    var formula = el('div', { class: 'formula', text: 'D = b² − 4ac\nx = (−b ± √D) / 2a' });
    host.appendChild(formula);
    // парабола
    var svgNS = 'http://www.w3.org/2000/svg', svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', '0 0 320 180'); svg.setAttribute('class', 'plot');
    var xs = roots.length ? roots : [-B / (2 * A)], mid = -B / (2 * A), span = Math.max(3, Math.max.apply(null, xs.map(function (r) { return Math.abs(r - mid); })) * 1.6);
    var x0 = mid - span, x1 = mid + span, ys = [], N = 60;
    for (var i = 0; i <= N; i++) { var x = x0 + (x1 - x0) * i / N; ys.push(A * x * x + B * x + C); }
    var ymin = Math.min.apply(null, ys.concat([0])), ymax = Math.max.apply(null, ys.concat([0]));
    function px(x) { return 10 + (x - x0) / (x1 - x0) * 300; }
    function py(y) { return 170 - (y - ymin) / (ymax - ymin || 1) * 160; }
    var ax = document.createElementNS(svgNS, 'line'); ax.setAttribute('x1', 10); ax.setAttribute('x2', 310); ax.setAttribute('y1', py(0)); ax.setAttribute('y2', py(0)); ax.setAttribute('class', 'ax'); svg.appendChild(ax);
    var path = 'M'; for (i = 0; i <= N; i++) { var xx = x0 + (x1 - x0) * i / N; path += (i ? ' L' : '') + px(xx).toFixed(1) + ' ' + py(A * xx * xx + B * xx + C).toFixed(1); }
    var cv = document.createElementNS(svgNS, 'path'); cv.setAttribute('d', path); cv.setAttribute('class', 'cv'); svg.appendChild(cv);
    var dots = roots.map(function (r) {
      var c = document.createElementNS(svgNS, 'circle'); c.setAttribute('cx', px(r)); c.setAttribute('cy', py(0)); c.setAttribute('r', 0); c.setAttribute('class', 'rt'); svg.appendChild(c);
      var t = document.createElementNS(svgNS, 'text'); t.setAttribute('x', px(r)); t.setAttribute('y', py(0) - 10); t.setAttribute('text-anchor', 'middle'); t.textContent = ''; svg.appendChild(t);
      return { c: c, t: t, r: r };
    });
    host.appendChild(svg);
    host.appendChild(el('p', { class: 'w-note', text: 'Корни — это точки, где парабола пересекает ось x. Они появятся на графике, когда найдёшь их.' }));
    var cur = 0, usedRoot = -1;
    function chk() {
      var st = steps[cur], v = num(ins[cur].value);
      var ok = Math.abs(v - st.v) < 1e-9;
      if (cur >= 5 && roots.length === 2) {         // корни в любом порядке
        var idx = roots.map(function (r, i) { return Math.abs(v - r) < 1e-9 && i !== usedRoot ? i : -1; }).filter(function (i) { return i >= 0; })[0];
        ok = idx != null; if (ok) usedRoot = idx;
        if (ok) { dots[idx].c.setAttribute('r', 6); dots[idx].t.textContent = 'x = ' + roots[idx]; }
      }
      if (!ok) { ins[cur].classList.add('bad'); return api.wrong('Подсказка: ' + st.hint); }
      ins[cur].classList.add('ok'); ins[cur].disabled = true;
      cur++;
      if (cur < steps.length) { ins[cur].disabled = false; try { ins[cur].focus({ preventScroll: true }); } catch (e) {} api.ready(false); retryDock(); return; }
      api.right(s.why);
    }
    function retryDock() { /* следующее поле: кнопка «Проверить» остаётся */ }
    return { check: chk };
  };
})();

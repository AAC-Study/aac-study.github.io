/* Движок тренажёров к בוחן מבוא למחשב. Один файл на игру, всё внутри, без интернета. */
(function () {
  'use strict';
  var G = window.GAME, app = document.getElementById('app');

  /* ---------- мелочи ---------- */
  function el(tag, cls, html) { var n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; }
  function get(k, d) { try { var v = localStorage.getItem('ex_' + G.id + '_' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } }
  function put(k, v) { try { localStorage.setItem('ex_' + G.id + '_' + k, JSON.stringify(v)); } catch (e) { } }
  function vib(ms) { try { if (navigator.vibrate) navigator.vibrate(ms); } catch (e) { } }
  function shake(n) { n.classList.remove('shake'); void n.offsetWidth; n.classList.add('shake'); vib(60); }
  function pop(n) { n.classList.remove('pop'); void n.offsetWidth; n.classList.add('pop'); }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  var KEYS = { b: '01', o: '01234567', d: '0123456789', h: '0123456789ABCDEF' };
  function keysOf(k) { return KEYS[k] || k; }
  function stripZ(s) { s = String(s).toUpperCase().replace(/\s/g, ''); s = s.replace(/^0+(?=.)/, ''); return s; }
  function wsum(bin) { var p = [], n = bin.length; for (var i = 0; i < n; i++) if (bin[i] === '1') p.push(Math.pow(2, n - 1 - i)); return p.length ? p.join(' + ') : '0'; }
  window.EX = { wsum: wsum, shuffle: shuffle };

  /* ---------- плитки: нажми или перетащи ---------- */
  function pad(keys, onKey, opts) {
    opts = opts || {};
    var row = el('div', 'pad');
    keys.split('').forEach(function (k) {
      var t = el('button', 'tile' + (keys.length > 4 ? ' sm' : ''), k);
      t.type = 'button';
      var st = null, gh = null;
      t.addEventListener('pointerdown', function (e) { e.preventDefault(); st = { x: e.clientX, y: e.clientY }; try { t.setPointerCapture(e.pointerId); } catch (er) { } });
      t.addEventListener('pointermove', function (e) {
        if (!st) return;
        if (!gh && Math.abs(e.clientX - st.x) + Math.abs(e.clientY - st.y) > 12) { gh = t.cloneNode(true); gh.classList.add('ghost'); document.body.appendChild(gh); }
        if (gh) { gh.style.left = e.clientX + 'px'; gh.style.top = e.clientY + 'px'; }
      });
      t.addEventListener('pointerup', function (e) {
        if (!st) return; st = null;
        if (gh) {
          gh.remove(); gh = null;
          var tg = document.elementFromPoint(e.clientX, e.clientY);
          var s = tg && tg.closest && tg.closest('.slot,.res,.disp,.grp');
          if (s) onKey(k, s);
        } else onKey(k);
      });
      t.addEventListener('pointercancel', function () { st = null; if (gh) { gh.remove(); gh = null; } });
      row.appendChild(t);
    });
    if (opts.back) { var b = el('button', 'tile op', '⌫'); b.type = 'button'; b.onclick = opts.back; row.appendChild(b); }
    if (opts.ok) { var o = el('button', 'tile go', '✓'); o.type = 'button'; o.onclick = opts.ok; row.appendChild(o); }
    return row;
  }

  /* ---------- экраны ---------- */
  function top(title, onBack) {
    var t = el('div', 'top');
    var b = el('button', 'back', '←'); b.onclick = onBack; t.appendChild(b);
    t.appendChild(el('div', 'ttl', title));
    return t;
  }
  function menu() {
    stopArc();
    app.innerHTML = '';
    var t = el('div', 'top');
    var a = el('a', 'back', '⌂'); a.href = './'; t.appendChild(a);
    t.appendChild(el('div', 'ttl', G.emoji + ' ' + G.title));
    app.appendChild(t);
    var b = el('div', 'body');
    if (G.intro) b.appendChild(el('div', 'card', G.intro));
    var steps = typeof G.learn === 'function' ? null : G.learn;
    var pos = get('pos', 0), fin = get('fin', 0);
    var l = el('button', 'big' + (fin ? '' : ' hl'));
    l.innerHTML = '<div class="e">📘</div><div><b>' + (G.learnName || '1. Учимся с нуля') + '</b><span>' +
      (steps ? (fin ? '✅ пройдено, можно ещё раз' : (pos ? 'продолжить: шаг ' + (pos + 1) + ' из ' + steps.length : steps.length + ' коротких шагов')) : (G.learnSub || '')) + '</span></div>';
    l.onclick = function () { learn(steps && !fin ? pos : 0); };
    b.appendChild(l);
    if (G.arcade) {
      var g = el('button', 'big' + (fin ? ' hl' : ''));
      g.innerHTML = '<div class="e">' + G.arcade.emoji + '</div><div><b>2. ' + G.arcade.name + '</b><span>рекорд: ' + get('best', 0) + ' · ' + G.arcade.sub + '</span></div>';
      g.onclick = arcade;
      b.appendChild(g);
    }
    app.appendChild(b);
    scrollTo(0, 0);
  }

  /* ---------- обучение ---------- */
  var steps, idx;
  function learn(start) {
    steps = typeof G.learn === 'function' ? G.learn() : G.learn;
    idx = start || 0;
    show();
  }
  function show() {
    app.innerHTML = '';
    app.appendChild(top(G.title, menu));
    var bar = el('div', 'bar'); bar.innerHTML = '<i style="width:' + Math.round(idx / steps.length * 100) + '%"></i>'; app.appendChild(bar);
    var body = el('div', 'body'), foot = el('div', 'foot');
    app.appendChild(body); app.appendChild(foot);
    var s = steps[idx];
    if (s.title) body.appendChild(el('h2', '', s.title));
    var R = W[s.t];
    R(s, body, foot, function () {
      foot.innerHTML = '';
      var n = el('button', 'btn', idx + 1 < steps.length ? 'Дальше →' : 'Готово ✅');
      n.onclick = next; foot.appendChild(n);
      setTimeout(function () { n.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }, 60);
    });
    scrollTo(0, 0);
  }
  function next() {
    idx++;
    if (typeof G.learn !== 'function') put('pos', idx >= steps.length ? 0 : idx);
    if (idx >= steps.length) { if (typeof G.learn !== 'function') put('fin', 1); return finish(); }
    show();
  }
  function finish() {
    app.innerHTML = '';
    app.appendChild(top(G.title, menu));
    var b = el('div', 'body');
    b.innerHTML = '<h2>✅ Готово!</h2><div class="card">' + (G.doneText || 'Теперь закрепи в игре: там то же самое, только быстро.') + '</div>';
    if (G.arcade) { var g = el('button', 'btn', G.arcade.emoji + ' ' + G.arcade.name); g.onclick = arcade; b.appendChild(g); }
    if (typeof G.learn === 'function') { var r = el('button', 'btn sec', '📝 Ещё вариант'); r.onclick = function () { learn(0); }; b.appendChild(r); }
    var m = el('button', 'btn sec', 'В меню'); m.onclick = menu; b.appendChild(m);
    app.appendChild(b);
  }

  var W = {};
  /* card: просто текст */
  W.card = function (s, body, foot, done) { body.appendChild(el('div', 'card', s.html)); done(); };

  /* choice: выбрать ответ */
  W.choice = function (s, body, foot, done) {
    if (s.q) body.appendChild(el('div', 'card', s.q));
    var box = el('div', 'opts'), say = el('div', 'say'), ok = false;
    say.style.display = 'none';
    var order = shuffle(s.opts.map(function (o, i) { return i; }));
    order.forEach(function (i) {
      var b = el('button', 'opt', s.opts[i]);
      b.onclick = function () {
        if (ok) return;
        say.style.display = '';
        if (i === s.a) { ok = true; b.classList.add('ok'); say.className = 'say ok'; say.innerHTML = '✅ ' + (s.why || 'Верно'); done(); }
        else { b.classList.add('bad'); shake(b); say.className = 'say bad'; say.innerHTML = '❌ ' + (s.hint || 'Не то. Попробуй ещё.'); }
      };
      box.appendChild(b);
    });
    body.appendChild(box); body.appendChild(say);
  };

  /* fill: перетащи цифры в клеточки */
  W.fill = function (s, body, foot, done) {
    if (s.q) body.appendChild(el('div', 'card', s.q));
    var ans = s.answer.split(''), vals = [], slots = el('div', 'slots'), say = el('div', 'say', s.say || (s.rtl ? 'Заполняй справа налево. Нажми цифру или перетащи её в жёлтую клетку.' : 'Нажми цифру или перетащи её в жёлтую клетку.'));
    var cells = ans.map(function (c, i) {
      var d = el('div', 'slot'); d.onclick = function () { if (fin) return; vals[i] = null; draw(); }; slots.appendChild(d); return d;
    });
    var fin = false;
    function target() {
      if (s.rtl) { for (var i = ans.length - 1; i >= 0; i--) if (vals[i] == null) return i; }
      else for (var j = 0; j < ans.length; j++) if (vals[j] == null) return j;
      return -1;
    }
    function draw() {
      var t = target();
      cells.forEach(function (c, i) { c.textContent = vals[i] == null ? '' : vals[i]; c.className = 'slot' + (vals[i] != null ? ' f' : '') + (i === t && !fin ? ' act' : ''); });
    }
    function key(k) {
      if (fin) return;
      var t = target(); if (t < 0) return;
      vals[t] = k; draw(); pop(cells[t]);
      if (target() < 0) check();
    }
    function check() {
      var bad = [];
      ans.forEach(function (c, i) { if (vals[i] !== c) bad.push(i); });
      if (!bad.length) {
        fin = true; draw();
        cells.forEach(function (c) { c.classList.add('ok'); });
        say.className = 'say ok'; say.innerHTML = '✅ ' + (s.why || 'Верно!');
        foot.innerHTML = ''; done();
      } else {
        bad.forEach(function (i) { cells[i].classList.add('bad'); });
        shake(slots); say.className = 'say bad'; say.innerHTML = '❌ ' + (s.hint || 'Красные клетки неверные. Исправь.');
        setTimeout(function () { bad.forEach(function (i) { vals[i] = null; }); draw(); }, 900);
      }
    }
    body.appendChild(slots); body.appendChild(say);
    foot.appendChild(pad(keysOf(s.keys || 'b'), key));
    draw();
  };

  /* type: набрать ответ (длина неизвестна) */
  W.type = function (s, body, foot, done) {
    if (s.q) body.appendChild(el('div', 'card', s.q));
    var v = '', disp = el('div', 'disp'), say = el('div', 'say', s.say || 'Набери ответ и нажми ✓'), tries = 0, fin = false;
    function draw() { disp.textContent = v || ' '; }
    function check() {
      if (fin || !v) return;
      if (stripZ(v) === stripZ(s.answer)) {
        fin = true; disp.className = 'disp ok'; say.className = 'say ok'; say.innerHTML = '✅ ' + (s.why || 'Верно!'); foot.innerHTML = ''; done();
      } else {
        tries++; disp.className = 'disp bad'; shake(disp); say.className = 'say bad';
        if (tries >= 2) {
          fin = true; say.innerHTML = '❌ Правильно: <b class="y m">' + s.answer + '</b><br>' + (s.why || ''); foot.innerHTML = ''; done();
        } else {
          say.innerHTML = '❌ ' + (s.hint || 'Не то. Проверь ещё раз.');
          setTimeout(function () { if (!fin) { disp.className = 'disp'; v = ''; draw(); } }, 900);
        }
      }
    }
    body.appendChild(disp); body.appendChild(say);
    foot.appendChild(pad(keysOf(s.keys || 'd'), function (k) { if (fin) return; if (v.length < 16) v += k; disp.className = 'disp'; draw(); }, { back: function () { if (!fin) { v = v.slice(0, -1); draw(); } }, ok: check }));
    draw();
  };

  /* flip: перевернуть каждый бит */
  W.flip = function (s, body, foot, done) {
    body.appendChild(el('div', 'card', s.q || 'Нажми на каждый бит: <b class="y">1 → 0</b>, <b class="y">0 → 1</b>.'));
    var src = s.bits.split(''), cur = src.slice(), row = el('div', 'bits'), say = el('div', 'say', 'Было: <span class="m">' + s.bits + '</span>'), fin = false;
    var bs = src.map(function (c, i) {
      var b = el('button', 'bit', c);
      b.onclick = function () {
        if (fin) return;
        cur[i] = cur[i] === '1' ? '0' : '1'; b.textContent = cur[i]; pop(b);
        b.classList.toggle('done', cur[i] !== src[i]);
        if (cur.every(function (x, j) { return x !== src[j]; })) {
          fin = true; say.className = 'say ok';
          say.innerHTML = '✅ <span class="m">' + s.bits + '</span> → <b class="g m">' + cur.join('') + '</b>' + (s.why ? '<br>' + s.why : '');
          done();
        }
      };
      row.appendChild(b); return b;
    });
    body.appendChild(row); body.appendChild(say);
  };

  /* lamps: зажги веса, чтобы получилось число */
  W.lamps = function (s, body, foot, done) {
    var n = s.n || 8, on = [], row = el('div', 'lamps'), sum = el('div', 'sum'), say = el('div', 'say', s.say || 'Нажимай на лампочки. Под каждой её вес. Надо набрать ровно <b class="y">' + s.target + '</b>.'), fin = false;
    body.appendChild(el('div', 'card', s.q || 'Собери число <b class="y">' + s.target + '</b> из весов.'));
    for (var i = 0; i < n; i++) (function (i) {
      var w = Math.pow(2, n - 1 - i), b = el('button', 'lamp', '<i>' + w + '</i><b>0</b>');
      b.onclick = function () {
        if (fin) return;
        on[i] = !on[i]; b.classList.toggle('on', on[i]); b.querySelector('b').textContent = on[i] ? '1' : '0';
        upd();
      };
      row.appendChild(b);
    })(i);
    function upd() {
      var t = 0, parts = [];
      for (var i = 0; i < n; i++) if (on[i]) { t += Math.pow(2, n - 1 - i); parts.push(Math.pow(2, n - 1 - i)); }
      sum.innerHTML = (parts.length ? parts.join(' + ') + ' = ' : '') + '<b class="' + (t === s.target ? 'g' : t > s.target ? 'r' : 'y') + '">' + t + '</b>';
      if (t > s.target) { say.className = 'say bad'; say.innerHTML = '❌ Перебор: ' + t + ' больше ' + s.target + '. Выключи что-то.'; }
      else if (t === s.target) {
        fin = true;
        var bin = s.target.toString(2);
        say.className = 'say ok'; say.innerHTML = '✅ ' + s.target + ' = ' + parts.join(' + ') + '<br>В двоичной: <b class="g m">' + bin + '</b> (нули слева не пишем)' + (s.why ? '<br>' + s.why : '');
        done();
      } else { say.className = 'say'; say.innerHTML = 'Ещё не хватает: ' + (s.target - t); }
    }
    body.appendChild(row); body.appendChild(sum); body.appendChild(say);
    upd();
  };

  /* groups: двоичное → 8 или 16 по группам */
  W.groups = function (s, body, foot, done) {
    var k = s.base === 8 ? 3 : 4, b = s.bin;
    while (b.length % k) b = '0' + b;
    var gs = []; for (var i = 0; i < b.length; i += k) gs.push(b.slice(i, i + k));
    var ans = gs.map(function (g) { return parseInt(g, 2).toString(16).toUpperCase(); });
    body.appendChild(el('div', 'card', s.q || ('Переведи <b class="m">' + s.bin + '</b>₂ в ' + s.base + '-ичную. Группы по ' + k + ' справа, слева дописали нули. Под каждой группой веса <span class="m">' + (k === 3 ? '4 2 1' : '8 4 2 1') + '</span>.')));
    var row = el('div', 'grp'), cells = [], cur = 0, say = el('div', 'say', 'Сколько в жёлтой группе? Нажми цифру.');
    gs.forEach(function (g) {
      var d = el('div', 'g'); d.innerHTML = '<div class="bb">' + g + '</div><div class="w">' + (k === 3 ? '421' : '8421') + '</div>';
      var sl = el('div', 'slot'); d.appendChild(sl); row.appendChild(d); cells.push({ d: d, s: sl });
    });
    function draw() { cells.forEach(function (c, i) { c.d.className = 'g' + (i === cur ? ' act' : ''); }); }
    function parts(g) { var w = k === 3 ? [4, 2, 1] : [8, 4, 2, 1], p = []; g.split('').forEach(function (c, i) { if (c === '1') p.push(w[i]); }); return p.length ? p.join(' + ') : '0'; }
    function key(x) {
      if (cur >= gs.length) return;
      var c = cells[cur];
      if (x === ans[cur]) {
        c.s.textContent = x; c.s.className = 'slot ok'; pop(c.s);
        say.className = 'say ok'; say.innerHTML = '✅ <span class="m">' + gs[cur] + '</span> = ' + parts(gs[cur]) + ' = ' + parseInt(gs[cur], 2) + (parseInt(gs[cur], 2) > 9 ? ' = ' + ans[cur] : '');
        cur++; draw();
        if (cur >= gs.length) { say.innerHTML += '<br>Ответ: <b class="g m">' + ans.join('') + '</b>' + (s.why ? '<br>' + s.why : ''); foot.innerHTML = ''; done(); }
      } else { shake(c.s); say.className = 'say bad'; say.innerHTML = '❌ Сложи веса там, где стоит 1: <span class="m">' + gs[cur] + '</span>'; }
    }
    body.appendChild(row); body.appendChild(say);
    foot.appendChild(pad(keysOf(s.base === 8 ? 'o' : 'h'), key));
    draw();
  };

  /* общая сетка для столбиков */
  function gridBox(cols, size) { var g = el('div', 'grid'); g.style.gridTemplateColumns = 'repeat(' + cols + ',' + size + 'px)'; g.style.fontSize = Math.round(size * 0.72) + 'px'; return g; }
  function cell(g, txt, cls, size, h) { var c = el('div', 'c ' + (cls || ''), txt == null ? '' : txt); c.style.height = (h || size) + 'px'; g.appendChild(c); return c; }
  function cellSize(cols) { return Math.max(26, Math.min(44, Math.floor((Math.min(innerWidth, 560) - 40) / cols))); }

  /* add: сложение в столбик, справа налево */
  W.add = function (s, body, foot, done) {
    var n = Math.max(s.a.length, s.b.length), A = s.a, B = s.b;
    while (A.length < n) A = '0' + A; while (B.length < n) B = '0' + B;
    var cols = n + 2, sz = cellSize(cols), g = gridBox(cols, sz);
    if (s.q) body.appendChild(el('div', 'card', s.q));
    var car = [], ra = [], rb = [], rr = [];
    cell(g, '', '', sz, sz * .55); for (var i = 0; i <= n; i++) car[n - i] = cell(g, '', 'carry', sz, sz * .55);
    cell(g, '', '', sz); cell(g, '', '', sz); for (i = 0; i < n; i++) ra[n - 1 - i] = cell(g, A[i], '', sz);
    cell(g, '+', 'sign', sz); cell(g, '', '', sz); for (i = 0; i < n; i++) rb[n - 1 - i] = cell(g, B[i], '', sz);
    for (i = 0; i < cols; i++) cell(g, '', 'line', sz, 3);
    cell(g, '', '', sz); for (i = 0; i <= n; i++) rr[n - i] = cell(g, '', 'res', sz);
    var say = el('div', 'say'), c = 0, cin = 0, fin = false, out = [];
    body.appendChild(g); body.appendChild(say);
    function hl() {
      [car, ra, rb, rr].forEach(function (row) { row.forEach(function (x, j) { if (x) x.classList.toggle('cur', j === c && !fin); }); });
      rr.forEach(function (x, j) { x.classList.toggle('act', j === c && !fin); });
    }
    function ask() {
      hl();
      if (c < n) {
        var parts = [ra[c].textContent, rb[c].textContent]; if (cin) parts.push('<b class="r">1</b> (перенос)');
        say.className = 'say'; say.innerHTML = 'Столбик ' + (c + 1) + ' справа: ' + parts.join(' + ') + ' = ?<br><span class="mut">Какую цифру пишем вниз? Нажми или перетащи.</span>';
      } else {
        say.className = 'say'; say.innerHTML = 'Остался перенос <b class="r">1</b>. Сносим его вниз: нажми 1.';
      }
    }
    function explain(sum) {
      return ['0 → пишем 0', '1 → пишем 1', '1 + 1 = 10 → пишем <b class="g">0</b>, <b class="r">1 наверх</b>', '1 + 1 + 1 = 11 → пишем <b class="g">1</b>, <b class="r">1 наверх</b>'][sum];
    }
    function key(k) {
      if (fin) return;
      var sum = c < n ? (+A[n - 1 - c]) + (+B[n - 1 - c]) + cin : 1, want = String(sum % 2);
      if (k !== want) {
        shake(rr[c]); say.className = 'say bad';
        say.innerHTML = '❌ ' + (c < n ? 'В столбике единиц: ' + sum + '. ' + ['0 = 0', '1 = 1', '2 = 10 (пишем последнюю цифру)', '3 = 11 (пишем последнюю цифру)'][sum] : 'Перенос сносим как есть: 1');
        return;
      }
      rr[c].textContent = k; pop(rr[c]); out.unshift(k);
      if (c < n) {
        say.className = 'say ok'; say.innerHTML = '✅ ' + explain(sum);
        cin = sum >> 1;
        if (cin) { car[c + 1].textContent = '1'; pop(car[c + 1]); }
        c++;
        if (c === n && !cin) return end();
        setTimeout(ask, 650);
      } else end();
    }
    function end() {
      fin = true; hl();
      var res = out.join('');
      var html = '✅ Ответ: <b class="g m">' + res + '</b>';
      if (s.drop && res.length > n) {
        rr[n].classList.add('drop');
        html = '✅ Получилось <span class="m">' + res + '</span> — это ' + res.length + ' бит.<br>Лишний ' + res.length + '-й бит слева <b class="r">отбрасываем</b> (גלישה).<br>Ответ: <b class="g m">' + res.slice(1) + '</b>';
      }
      if (s.check) html += '<br>' + s.check;
      say.className = 'say ok'; say.innerHTML = html; foot.innerHTML = ''; done();
    }
    foot.appendChild(pad('01', key));
    ask();
  };

  /* mul: умножение в столбик с «единичками» */
  W.mul = function (s, body, foot, done) {
    var A = s.a, B = s.b, la = A.length, lb = B.length, Wd = la + lb, cols = Wd + 1, sz = cellSize(cols), g = gridBox(cols, sz);
    if (s.q) body.appendChild(el('div', 'card', s.q));
    var rows = [], car = [], rr = [], bcells = [], i, j;
    cell(g, '', '', sz); for (i = 0; i < Wd; i++) { var ch = Wd - 1 - i; cell(g, ch < la ? A[la - 1 - ch] : '', '', sz); }
    cell(g, '×', 'sign', sz); for (i = 0; i < Wd; i++) { ch = Wd - 1 - i; bcells[ch] = cell(g, ch < lb ? B[lb - 1 - ch] : '', '', sz); }
    for (i = 0; i < cols; i++) cell(g, '', 'line', sz, 3);
    cell(g, '', '', sz, sz * .55); for (i = 0; i < Wd; i++) car[Wd - 1 - i] = cell(g, '', 'carry', sz, sz * .55);
    for (j = 0; j < lb; j++) { rows[j] = []; cell(g, j ? '+' : '', 'sign', sz); for (i = 0; i < Wd; i++) rows[j][Wd - 1 - i] = cell(g, '', '', sz); }
    for (i = 0; i < cols; i++) cell(g, '', 'line', sz, 3);
    cell(g, '', '', sz); for (i = 0; i < Wd; i++) rr[Wd - 1 - i] = cell(g, '', 'res', sz);
    var say = el('div', 'say'), ph = 1, r = 0, c = 0, extra = [], sub = 'A', ones = 0, out = [], fin = false;
    for (i = 0; i <= Wd + 3; i++) extra[i] = 0;
    body.appendChild(g); body.appendChild(say);
    function bit(row, col) { var p = col - row; return p >= 0 && p < la && B[lb - 1 - row] === '1' && A[la - 1 - p] === '1' ? 1 : 0; }
    function lastCol() { var m = -1; for (var k = 0; k < Wd; k++) { var o = extra[k]; for (var q = 0; q < lb; q++) o += bit(q, k); if (o) m = k; } return m; }
    function clr() { g.querySelectorAll('.cur,.bhl,.act').forEach(function (x) { x.classList.remove('cur', 'bhl', 'act'); }); }
    function phase1() {
      clr(); foot.innerHTML = '';
      if (r >= lb) { ph = 2; return phase2(); }
      bcells[r].classList.add('bhl');
      var d = B[lb - 1 - r];
      say.className = 'say'; say.innerHTML = 'Шаг 1, строка ' + (r + 1) + '. Цифра множителя (жёлтая) = <b class="y">' + d + '</b>.<br>Что пишем в строку?' + (r ? '<br><span class="mut">Строку сдвигаем на ' + r + ' влево.</span>' : '');
      var box = el('div', 'opts');
      [['Копию верхнего числа', '1'], ['Одни нули', '0']].forEach(function (o) {
        var b = el('button', 'opt', o[0]);
        b.onclick = function () {
          if (o[1] !== d) { b.classList.add('bad'); shake(b); say.className = 'say bad'; say.innerHTML = '❌ ' + (d === '1' ? '1 × число = само число → копия верхнего.' : '0 × число = 0 → одни нули.'); return; }
          for (var p = 0; p < la; p++) { var x = rows[r][p + r]; x.textContent = d === '1' ? A[la - 1 - p] : '0'; pop(x); }
          r++; setTimeout(phase1, 350);
        };
        box.appendChild(b);
      });
      foot.appendChild(box);
    }
    function colCells(k) { var a = [car[k], rr[k]]; for (var q = 0; q < lb; q++) a.push(rows[q][k]); return a; }
    function phase2() {
      clr(); foot.innerHTML = '';
      if (c > lastCol()) return end();
      colCells(c).forEach(function (x) { x.classList.add('cur'); });
      ones = extra[c]; for (var q = 0; q < lb; q++) ones += bit(q, c);
      sub = 'A';
      say.className = 'say'; say.innerHTML = 'Шаг 2, столбик ' + (c + 1) + ' справа.<br>Сколько единиц в жёлтом столбике? <span class="mut">Красные маленькие тоже считаем.</span>';
      foot.appendChild(pad('0123456', key));
    }
    function key(k) {
      if (fin || ph !== 2) return;
      if (sub === 'A') {
        if (+k !== ones) { shake(say); say.className = 'say bad'; say.innerHTML = '❌ Посчитай ещё раз все 1 в жёлтом столбике, вместе с красными сверху.'; return; }
        var bin = ones.toString(2);
        sub = 'B'; rr[c].classList.add('act');
        say.className = 'say'; say.innerHTML = '✅ Единиц: ' + ones + '. В двоичной ' + ones + ' = <b class="y m">' + bin + '</b>.<br>Пиши вниз <b>последнюю</b> цифру.';
        foot.innerHTML = ''; foot.appendChild(pad('01', key));
      } else {
        var b2 = ones.toString(2), want = b2[b2.length - 1];
        if (k !== want) { shake(rr[c]); say.className = 'say bad'; say.innerHTML = '❌ ' + ones + ' = ' + b2 + '. Последняя цифра: ' + want + '.'; return; }
        rr[c].textContent = k; pop(rr[c]); out.unshift(k);
        var parts = [];
        for (var t = 1; t < b2.length; t++) {
          var d = b2[b2.length - 1 - t];
          if (d === '1') { extra[c + t]++; car[c + t].textContent = new Array(extra[c + t] + 1).join('1'); pop(car[c + t]); }
          parts.push((t === 1 ? 'в соседний столбик ' : t === 2 ? 'через один ' : 'через два ') + '<b class="r">' + d + '</b>');
        }
        say.className = 'say ok'; say.innerHTML = '✅ ' + ones + ' = ' + b2 + ' → пишем <b class="g">' + k + '</b>' + (parts.length ? ', ' + parts.join(', ') : '') + '.';
        c++; foot.innerHTML = '';
        setTimeout(phase2, 900);
      }
    }
    function end() {
      fin = true; clr();
      var res = out.join('').replace(/^0+(?=.)/, '');
      var da = parseInt(A, 2), db = parseInt(B, 2);
      say.className = 'say ok';
      say.innerHTML = '✅ Ответ: <b class="g m">' + res + '</b><br>Проверка: ' + da + ' × ' + db + ' = ' + (da * db) + '. А ' + res + ' = ' + wsum(res) + ' = ' + parseInt(res, 2) + (parseInt(res, 2) === da * db ? ' ✅' : ' ❌') + (s.why ? '<br>' + s.why : '');
      done();
    }
    phase1();
  };

  /* mulrow: почему строка = копия или нули, и почему сдвиг. Сам заполняешь строки и сумму. */
  W.mulrow = function (s, body, foot, done) {
    var base = s.base || 2, A = s.a, B = s.b, la = A.length, lb = B.length, Wd = la + lb, cols = Wd + 1, sz = cellSize(cols), g = gridBox(cols, sz), i, ch;
    if (s.q) body.appendChild(el('div', 'card', s.q));
    var ta = [], bc = [], rows = [], car = [], rr = [], val = [];
    cell(g, '', '', sz); for (i = 0; i < Wd; i++) { ch = Wd - 1 - i; ta[ch] = cell(g, ch < la ? A[la - 1 - ch] : '', '', sz); }
    cell(g, '×', 'sign', sz); for (i = 0; i < Wd; i++) { ch = Wd - 1 - i; bc[ch] = cell(g, ch < lb ? B[lb - 1 - ch] : '', '', sz); }
    for (i = 0; i < cols; i++) cell(g, '', 'line', sz, 3);
    cell(g, '', '', sz, sz * .55); for (i = 0; i < Wd; i++) car[Wd - 1 - i] = cell(g, '', 'carry', sz, sz * .55);
    for (var j0 = 0; j0 < lb; j0++) { rows[j0] = []; val[j0] = []; cell(g, j0 ? '+' : '', 'sign', sz); for (i = 0; i < Wd; i++) rows[j0][Wd - 1 - i] = cell(g, '', '', sz); }
    for (i = 0; i < cols; i++) cell(g, '', 'line', sz, 3);
    cell(g, '', '', sz); for (i = 0; i < Wd; i++) rr[Wd - 1 - i] = cell(g, '', 'res', sz);
    var say = el('div', 'say'), j = 0, p = 0, ph = 'row', c = 0, cin = 0, out = [], fin = false;
    body.appendChild(g); body.appendChild(say);
    var digits = base === 10 ? '0123456789' : '01';
    function clr() { g.querySelectorAll('.cur,.bhl,.act').forEach(function (x) { x.classList.remove('cur', 'bhl', 'act'); }); }
    function nextBtn(t, fn) { foot.innerHTML = ''; var b = el('button', 'btn', t); b.onclick = fn; foot.appendChild(b); }
    function startRow() {
      clr();
      if (j >= lb) return nextBtn('Теперь складываем ↓', startSum);
      var d = B[lb - 1 - j];
      bc[j].classList.add('bhl');
      for (var k = 0; k < j; k++) { rows[j][k].textContent = '0'; rows[j][k].classList.add('dim'); val[j][k] = 0; }
      var place = base === 10 ? ['единицы', 'десятки', 'сотни'][j] : ['1-я справа', '2-я справа', '3-я справа'][j];
      say.className = 'say';
      say.innerHTML = 'Строка ' + (j + 1) + '. Жёлтая цифра нижнего числа: <b class="y">' + d + '</b> (' + place + ').<br>Умножаем на неё <b>каждую</b> цифру <b>верхнего</b> числа (всегда верхнего, не новых строк), справа налево.' +
        (j ? '<br><span class="mut">Эта цифра стоит на ' + j + ' клетку левее → строку начинаем на ' + j + ' левее. Пустая клетка справа = <b>0</b>, поэтому это ×' + (base === 10 ? '10' : '10₂ (×2)') + '.</span>' : '');
      p = 0; foot.innerHTML = ''; foot.appendChild(pad(digits, key)); ask();
    }
    function ask() {
      g.querySelectorAll('.cur,.act').forEach(function (x) { x.classList.remove('cur', 'act'); });
      ta[p].classList.add('cur'); rows[j][p + j].classList.add('res', 'act');
      var d = B[lb - 1 - j];
      var q = say.querySelector('.q') || say.appendChild(el('div', 'q'));
      q.innerHTML = '<br><b class="a m" style="font-size:20px">' + A[la - 1 - p] + ' × ' + d + ' = ?</b>';
    }
    function key(k) {
      if (fin) return;
      if (ph === 'row') {
        var d = +B[lb - 1 - j], a = +A[la - 1 - p], want = String(a * d), x = rows[j][p + j];
        if (k !== want) { shake(x); var q = say.querySelector('.q'); if (q) q.innerHTML = '<br>❌ <b class="m">' + a + ' × ' + d + ' = ' + want + '</b>' + (d === 0 ? ' (всё × 0 = 0)' : ' (× 1 не меняет)'); return; }
        x.textContent = k; x.classList.remove('act'); pop(x); val[j][p + j] = +k;
        p++;
        if (p < la) return ask();
        clr();
        var row = '';
        for (var t = la - 1; t >= 0; t--) row += A[la - 1 - t] * +B[lb - 1 - j];
        say.className = 'say ok';
        say.innerHTML = '✅ ' + A + ' × ' + B[lb - 1 - j] + ' = <b class="g m">' + row + '</b> → ' + (B[lb - 1 - j] === '1' ? '<b>копия</b> верхнего (× 1 ничего не меняет)' : '<b>одни нули</b> (× 0 = 0)') + (j ? ', сдвинута на ' + j + ' влево' : '') + '.';
        j++;
        return j < lb ? nextBtn('Следующая цифра нижнего →', startRow) : nextBtn('Строки готовы. Складываем ↓', startSum);
      }
      var tot = cin; for (var q2 = 0; q2 < lb; q2++) tot += val[q2][c] || 0;
      var w2 = String(tot % base);
      if (k !== w2) { shake(rr[c]); say.className = 'say bad'; say.innerHTML = '❌ В столбике сумма ' + tot + (base === 2 && tot > 1 ? ' = ' + tot.toString(2) + ' в двоичной' : '') + '. Пишем последнюю цифру: ' + w2; return; }
      rr[c].textContent = k; pop(rr[c]); out.unshift(k);
      var nc = Math.floor(tot / base);
      say.className = 'say ok'; say.innerHTML = '✅ пишем ' + k + (nc ? ', <b class="r">' + nc + '</b> наверх в следующий столбик' : '');
      cin = nc; if (nc) { car[c + 1].textContent = String(nc); pop(car[c + 1]); }
      c++; setTimeout(sumAsk, 600);
    }
    function lastCol() { var m = -1; for (var k2 = 0; k2 < Wd; k2++) for (var q3 = 0; q3 < lb; q3++) if (val[q3][k2]) m = k2; return m; }
    function startSum() { ph = 'sum'; c = 0; cin = 0; foot.innerHTML = ''; foot.appendChild(pad(digits, key)); sumAsk(); }
    function sumAsk() {
      clr();
      if (c > lastCol() && !cin) return end();
      var parts = []; for (var q = 0; q < lb; q++) { var v = val[q][c]; parts.push(v == null ? 0 : v); rows[q][c].classList.add('cur'); }
      if (cin) parts.push('<b class="r">' + cin + '</b>');
      car[c].classList.add('cur'); rr[c].classList.add('cur', 'act');
      say.className = 'say'; say.innerHTML = 'Складываем столбик ' + (c + 1) + ' справа:<br><b class="a m" style="font-size:20px">' + parts.join(' + ') + ' = ?</b><br><span class="mut">Тут <b>складываем</b> (не умножаем), только новые строки. Пустая клетка = 0. Сумма 2 = 10, 3 = 11: вниз последнюю цифру, 1 в следующий столбик слева.</span>';
    }
    function end() {
      fin = true; clr(); foot.innerHTML = '';
      var res = out.join('').replace(/^0+(?=.)/, ''), da = parseInt(A, base), db = parseInt(B, base), dr = parseInt(res, base);
      say.className = 'say ok';
      say.innerHTML = '✅ Ответ: <b class="g m">' + res + '</b>' + (base === 2 ? '<br>Проверка: ' + da + ' × ' + db + ' = ' + (da * db) + '. А ' + res + ' = ' + wsum(res) + ' = ' + dr + (dr === da * db ? ' ✅' : ' ❌') : '<br>Проверка на калькуляторе: ' + A + ' × ' + B + ' = ' + (da * db) + ' ✅') + (s.why ? '<br>' + s.why : '');
      done();
    }
    nextBtn('Начать →', startRow);
    say.innerHTML = 'Верхнее число: <b class="m">' + A + '</b>. Нижнее: <b class="m">' + B + '</b>.<br>Нижнее берём <b>по одной цифре</b>, справа налево. Каждая цифра даёт одну строку.<br>В нижнем ' + lb + ' цифр' + (lb < 5 ? 'ы' : '') + ' → будет <b>' + lb + ' строк' + (lb < 5 ? 'и' : '') + '</b>.';
  };

  /* ---------- игра ---------- */
  var arcRun = null;
  function stopArc() { if (arcRun) { arcRun.stop(); arcRun = null; } }
  function arcade() {
    stopArc();
    app.innerHTML = '';
    var A = G.arcade, root = el('div', 'arc');
    var hud = el('div', 'hud'), bk = el('button', 'back', '←'); bk.onclick = menu;
    var sc = el('div', '', '⭐ 0'), hp = el('div', '', '❤️❤️❤️'), lv = el('div', 'mut', 'ур. 1');
    hud.appendChild(bk); hud.appendChild(sc); hud.appendChild(el('div', 'sp')); hud.appendChild(lv); hud.appendChild(hp);
    var stage = el('div', 'stage'), cv = el('canvas'), qb = el('div', 'qbox');
    stage.appendChild(cv); stage.appendChild(qb);
    var ops = el('div', 'aopts'), btns = [];
    for (var i = 0; i < 3; i++) (function (i) { var b = el('button'); b.onclick = function () { answer(i); }; btns.push(b); ops.appendChild(b); })(i);
    root.appendChild(hud); root.appendChild(stage); root.appendChild(ops);
    app.appendChild(root);
    var ctx = cv.getContext('2d'), dpr = Math.min(2, window.devicePixelRatio || 1), Wc = 0, Hc = 0;
    function fit() { Wc = stage.clientWidth; Hc = stage.clientHeight; cv.width = Wc * dpr; cv.height = Hc * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
    fit(); window.addEventListener('resize', fit);
    var S = { score: 0, hearts: 3, level: 1, streak: 0, q: null, opts: [], a: 0, t0: 0, dur: 10, state: 'play', fx: [], lane: 1, rush: 0, pick: -1, scroll: 0, flash: 0, flashC: '' };
    var alive = true, raf = 0, last = performance.now(), paused = 0;
    var R = A.style === 'race' ? race() : blocks();
    function nextQ() {
      var q = A.gen(S.level);
      var o = q.opts.map(function (t, i) { return { t: t, ok: i === 0 }; });
      shuffle(o);
      S.q = q; S.opts = o.map(function (x) { return x.t; }); S.a = o.findIndex(function (x) { return x.ok; });
      S.dur = (q.t || 12) * Math.max(0.55, 1 - (S.level - 1) * 0.08);
      S.t0 = performance.now(); S.state = 'play'; S.pick = -1; S.rush = 0;
      qb.textContent = q.q; qb.style.display = A.style === 'race' ? '' : 'none';
      btns.forEach(function (b, i) { b.textContent = (A.style === 'race' && S.opts[i].length > 10 ? (i + 1) + ' · ' : '') + S.opts[i]; b.className = S.opts[i].length > 9 ? 'long' : ''; b.disabled = false; });
      R.newQ();
    }
    function hud2() {
      sc.textContent = '⭐ ' + S.score; lv.textContent = 'ур. ' + S.level;
      hp.textContent = S.hearts > 0 ? new Array(S.hearts + 1).join('❤️') : '💔';
    }
    function answer(i) {
      if (S.state !== 'play') return;
      if (A.style === 'race') { S.pick = i; S.lane = i; S.rush = performance.now(); S.state = 'rush'; return; }
      resolve(i);
    }
    function resolve(i) {
      S.state = 'res';
      if (i === S.a) {
        S.score++; S.streak++; if (S.streak % 5 === 0) S.level++;
        R.good(); vib(25); hud2();
        setTimeout(function () { if (alive) nextQ(); }, 600);
      } else {
        S.hearts--; S.streak = 0; R.bad(); vib([80, 40, 80]); hud2();
        var ov = el('div', 'over');
        ov.innerHTML = '<div class="card"><div style="font-size:20px">' + (i < 0 ? '⏰ Не успел' : '❌ Не то') + '</div><p class="m" style="font-size:20px;white-space:pre-wrap">' + S.q.q + '</p><p>Правильно: <b class="g m" style="font-size:22px">' + S.opts[S.a] + '</b></p>' + (S.q.why ? '<p>' + S.q.why + '</p>' : '') + '</div>';
        var b = el('button', 'btn', S.hearts > 0 ? 'Понятно, дальше' : 'Конец игры');
        b.onclick = function () { ov.remove(); if (S.hearts > 0) nextQ(); else over(); };
        ov.appendChild(b); stage.appendChild(ov);
        btns.forEach(function (x) { x.disabled = true; });
      }
    }
    function over() {
      S.state = 'over';
      var best = get('best', 0); if (S.score > best) put('best', S.score);
      var ov = el('div', 'over');
      ov.innerHTML = '<div class="card" style="text-align:center"><div style="font-size:44px">🏁</div><h2>Счёт: ' + S.score + '</h2><p class="mut">Рекорд: ' + Math.max(best, S.score) + (S.score > best ? ' · новый рекорд! 🎉' : '') + '</p></div>';
      var a = el('button', 'btn', 'Ещё раз'); a.onclick = arcade;
      var m = el('button', 'btn sec', 'В меню'); m.onclick = menu;
      ov.appendChild(a); ov.appendChild(m); stage.appendChild(ov);
    }
    function frame(now) {
      if (!alive) return;
      var dt = Math.min(50, now - last); last = now;
      var p = S.state === 'play' ? (now - S.t0) / (S.dur * 1000) : S.p || 0;
      if (S.state === 'play') { S.p = p; if (p >= 1) resolve(-1); }
      if (S.state === 'rush') {
        var k = (now - S.rush) / 350; S.p = (S.p || 0) + (1 - (S.p || 0)) * Math.min(1, k);
        if (k >= 1) { S.p = 1; resolve(S.pick); }
      }
      R.draw(S.p || 0, dt, now);
      raf = requestAnimationFrame(frame);
    }
    function vis() { if (document.hidden) { paused = performance.now(); } else if (paused && S.state === 'play') { S.t0 += performance.now() - paused; paused = 0; } }
    document.addEventListener('visibilitychange', vis);
    arcRun = { stop: function () { alive = false; cancelAnimationFrame(raf); window.removeEventListener('resize', fit); document.removeEventListener('visibilitychange', vis); } };

    function txtFit(t, maxW, size, weight) {
      var f = size;
      do { ctx.font = (weight || 800) + ' ' + f + 'px ui-monospace,"Roboto Mono",monospace'; if (ctx.measureText(t).width <= maxW) break; f--; } while (f > 9);
      return f;
    }
    function parts(x, y, cols, n) { for (var i = 0; i < n; i++) S.fx.push({ x: x, y: y, vx: (Math.random() - .5) * 9, vy: -Math.random() * 9 - 2, s: 4 + Math.random() * 8, c: cols[i % cols.length], l: 1 }); }
    function drawFx(dt) {
      S.fx = S.fx.filter(function (f) { return f.l > 0; });
      S.fx.forEach(function (f) {
        f.x += f.vx * dt / 16; f.y += f.vy * dt / 16; f.vy += .45 * dt / 16; f.l -= dt / 900;
        ctx.globalAlpha = Math.max(0, f.l); ctx.fillStyle = f.c; ctx.fillRect(f.x, f.y, f.s, f.s);
      });
      ctx.globalAlpha = 1;
    }

    /* «Ломай блоки»: блок с вопросом падает, ломай правильным ответом */
    function blocks() {
      var tex = {}, kinds = [['#8a8a8a', '#6f6f6f', '#a3a3a3'], ['#8b5a2b', '#6e4520', '#a0703c'], ['#d4af37', '#b8912a', '#f0d36b'], ['#4fd1c5', '#2aa198', '#9ff0e8'], ['#7c4dff', '#5a32d0', '#b39dff']];
      function texture(k) {
        if (tex[k]) return tex[k];
        var c = document.createElement('canvas'); c.width = c.height = 16; var x = c.getContext('2d'), col = kinds[k];
        for (var i = 0; i < 16; i++) for (var j = 0; j < 16; j++) { x.fillStyle = col[(i * 7 + j * 13 + (i * j) % 5) % 3]; x.fillRect(i, j, 1, 1); }
        return (tex[k] = c);
      }
      function ground() {
        var s = 28, gy = Hc - s * 2;
        for (var x = 0; x < Wc; x += s) {
          ctx.fillStyle = '#5bbf3a'; ctx.fillRect(x, gy, s, 7); ctx.fillStyle = '#7a5230'; ctx.fillRect(x, gy + 7, s, s - 7);
          ctx.fillStyle = '#6a4526'; ctx.fillRect(x, gy + s, s, s);
          ctx.fillStyle = '#00000022'; ctx.fillRect(x + s - 2, gy, 2, s * 2);
        }
        return gy;
      }
      var bx = { y: 0, k: 0, gone: false, shake: 0 };
      return {
        newQ: function () { bx.gone = false; bx.k = Math.min(kinds.length - 1, Math.floor((S.level - 1) / 2)); bx.shake = 0; },
        good: function () { bx.gone = true; var bw = Math.min(Wc * .78, 300); parts(Wc / 2, bx.y + 60, kinds[bx.k].concat(['#fff']), 46); S.flash = 1; S.flashC = '#3ddc84'; },
        bad: function () { bx.shake = 1; S.flash = 1; S.flashC = '#ff5c7a'; },
        draw: function (p, dt) {
          var g = ctx.createLinearGradient(0, 0, 0, Hc); g.addColorStop(0, '#5aa9ff'); g.addColorStop(1, '#bfe3ff');
          ctx.fillStyle = g; ctx.fillRect(0, 0, Wc, Hc);
          ctx.fillStyle = '#ffffffcc'; [[.15, .12], [.7, .2], [.45, .06]].forEach(function (c, i) { var x = ((c[0] * Wc + performance.now() / (60 + i * 20)) % (Wc + 120)) - 60; ctx.fillRect(x, c[1] * Hc, 70, 18); ctx.fillRect(x + 14, c[1] * Hc - 10, 40, 12); });
          var gy = ground();
          var lines = String(S.q ? S.q.q : '').split('\n');
          var bw = Math.min(Wc * .82, 320), lh = 30, bh = Math.max(110, lines.length * lh + 50);
          var y = -bh * .2 + p * (gy - bh + bh * .2);
          bx.y = y;
          if (!bx.gone) {
            var sx = bx.shake > 0 ? (Math.random() - .5) * 14 * bx.shake : 0; bx.shake = Math.max(0, bx.shake - dt / 500);
            var x = (Wc - bw) / 2 + sx;
            ctx.imageSmoothingEnabled = false; ctx.drawImage(texture(bx.k), x, y, bw, bh);
            ctx.strokeStyle = '#00000066'; ctx.lineWidth = 3; ctx.strokeRect(x, y, bw, bh);
            ctx.fillStyle = '#ffffffee'; var pad = 12; ctx.fillRect(x + pad, y + pad, bw - pad * 2, bh - pad * 2);
            ctx.fillStyle = '#101828'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            lines.forEach(function (t, i) { txtFit(t, bw - pad * 2 - 10, 24); ctx.fillText(t, Wc / 2 + sx, y + bh / 2 + (i - (lines.length - 1) / 2) * lh); });
            /* полоска времени */
            ctx.fillStyle = '#00000055'; ctx.fillRect(x, y - 10, bw, 6); ctx.fillStyle = p > .75 ? '#ff5c7a' : '#ffd166'; ctx.fillRect(x, y - 10, bw * (1 - p), 6);
          }
          drawFx(dt);
          if (S.flash > 0) { ctx.globalAlpha = S.flash * .25; ctx.fillStyle = S.flashC; ctx.fillRect(0, 0, Wc, Hc); ctx.globalAlpha = 1; S.flash -= dt / 400; }
        }
      };
    }

    /* «Гонка»: ворота с ответами едут на тебя, выбери полосу */
    function race() {
      var carX = 1, crash = 0;
      return {
        newQ: function () { S.lane = 1; crash = 0; },
        good: function () { var lw = Wc / 3; parts(lw * S.lane + lw / 2, Hc - 120, ['#3ddc84', '#ffd166', '#fff'], 30); S.flash = 1; S.flashC = '#3ddc84'; },
        bad: function () { crash = 1; S.flash = 1; S.flashC = '#ff5c7a'; },
        draw: function (p, dt) {
          var lw = Wc / 3, spd = 2 + S.level * .6;
          if (S.state !== 'over' && !crash) S.scroll = (S.scroll + dt * spd * .12) % 60;
          ctx.fillStyle = '#3f7d3a'; ctx.fillRect(0, 0, Wc, Hc);
          ctx.fillStyle = '#3a3f4b'; ctx.fillRect(6, 0, Wc - 12, Hc);
          ctx.fillStyle = '#ffffffaa';
          for (var l = 1; l < 3; l++) for (var y = -60 + S.scroll; y < Hc; y += 60) ctx.fillRect(l * lw - 3, y, 6, 32);
          ctx.fillStyle = '#ff5c7a'; for (y = -60 + S.scroll; y < Hc; y += 30) { ctx.fillRect(0, y, 6, 15); ctx.fillRect(Wc - 6, y, 6, 15); }
          var carY = Hc - 110, gTop = 70, gy = gTop + p * (carY - 50 - gTop);
          /* ворота */
          for (var i = 0; i < 3; i++) {
            var gx = i * lw + 8, gw = lw - 16;
            var col = '#f4f6ff';
            if (S.state === 'res' || S.state === 'over') col = i === S.a ? '#3ddc84' : (i === S.pick ? '#ff5c7a' : '#f4f6ff');
            ctx.fillStyle = '#00000055'; ctx.fillRect(gx + 3, gy + 4, gw, 48);
            ctx.fillStyle = col; ctx.fillRect(gx, gy, gw, 48);
            ctx.fillStyle = '#101828'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            var t = S.opts[i] || '';
            if (t.length > 10) t = String(i + 1);
            txtFit(t, gw - 8, 22); ctx.fillText(t, gx + gw / 2, gy + 24);
          }
          /* машина */
          carX += (S.lane - carX) * Math.min(1, dt / 90);
          var cx = carX * lw + lw / 2 + (crash > 0 ? (Math.random() - .5) * 12 * crash : 0); crash = Math.max(0, crash - dt / 700);
          ctx.fillStyle = '#111'; ctx.fillRect(cx - 26, carY + 8, 10, 22); ctx.fillRect(cx + 16, carY + 8, 10, 22); ctx.fillRect(cx - 26, carY + 52, 10, 22); ctx.fillRect(cx + 16, carY + 52, 10, 22);
          ctx.fillStyle = '#ff3b3b'; ctx.fillRect(cx - 19, carY, 38, 82);
          ctx.fillStyle = '#9fe3ff'; ctx.fillRect(cx - 14, carY + 14, 28, 16);
          ctx.fillStyle = '#ffffff'; ctx.fillRect(cx - 3, carY, 6, 82);
          /* время */
          ctx.fillStyle = '#00000088'; ctx.fillRect(0, Hc - 8, Wc, 8); ctx.fillStyle = p > .75 ? '#ff5c7a' : '#ffd166'; ctx.fillRect(0, Hc - 8, Wc * (1 - p), 8);
          drawFx(dt);
          if (S.flash > 0) { ctx.globalAlpha = S.flash * .25; ctx.fillStyle = S.flashC; ctx.fillRect(0, 0, Wc, Hc); ctx.globalAlpha = 1; S.flash -= dt / 400; }
        }
      };
    }
    hud2(); nextQ();
    raf = requestAnimationFrame(frame);
  }

  window.EX.W = W; window.EX.cur = function () { return steps && steps[idx]; };
  menu();
  if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(function () { });
})();

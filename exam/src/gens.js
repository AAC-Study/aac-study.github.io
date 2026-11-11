/* Генераторы вопросов для игр. Каждый возвращает { q, opts:[правильный, …неправильные], why, t? } */
(function () {
  'use strict';
  function rnd(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function bin(n, w) { var s = n.toString(2); while (w && s.length < w) s = '0' + s; return s; }
  function hex(n) { return n.toString(16).toUpperCase(); }
  function flipBit(s) { var i = rnd(0, s.length - 1); return s.slice(0, i) + (s[i] === '1' ? '0' : '1') + s.slice(i + 1); }
  function inv(s) { return s.replace(/./g, function (c) { return c === '1' ? '0' : '1'; }); }
  function twos(n) { return bin((256 - n) & 255, 8); } /* −n в дополнении до 2 на 8 битах */
  function wsum(b) { var p = [], n = b.length; for (var i = 0; i < n; i++) if (b[i] === '1') p.push(Math.pow(2, n - 1 - i)); return p.join(' + ') || '0'; }
  function uniq(right, cands, mk) {
    var out = [right], guard = 0;
    cands.forEach(function (c) { if (out.length < 3 && c != null && out.indexOf(String(c)) < 0) out.push(String(c)); });
    while (out.length < 3 && guard++ < 50) { var c = String(mk()); if (out.indexOf(c) < 0) out.push(c); }
    return out;
  }

  var GEN = {};
  /* сложение */
  GEN.add = function (lv) {
    if (Math.random() < .2) {
      var r = pick([['1 + 1', '10', ['11', '2'], '2 = 10'], ['1 + 1 + 1', '11', ['10', '111'], '3 = 11'], ['1 + 0', '1', ['10', '0'], '1 + 0 = 1'], ['10 + 1', '11', ['100', '101'], '2 + 1 = 3 = 11'], ['11 + 1', '100', ['111', '110'], '3 + 1 = 4 = 100']]);
      return { q: r[0] + ' = ?', opts: [r[1]].concat(r[2]), why: r[3], t: 9 };
    }
    var n = lv < 3 ? 4 : lv < 5 ? 5 : 6, a = rnd(1, Math.pow(2, n) - 1), b = rnd(1, Math.pow(2, n) - 1), s = bin(a + b);
    return {
      q: bin(a, n) + '\n+ ' + bin(b, n), opts: uniq(s, [bin(a ^ b), flipBit(s)], function () { return flipBit(s); }),
      why: a + ' + ' + b + ' = ' + (a + b) + ' = ' + wsum(s), t: 16 + n
    };
  };
  /* умножение и «единички» в столбике */
  GEN.mul = function (lv) {
    var r = Math.random();
    if (r < .35) {
      var k = rnd(2, lv < 3 ? 4 : 5), b2 = k.toString(2);
      var said = ['', '', 'пишем 0, 1 в соседний столбик', 'пишем 1, 1 в соседний столбик', 'пишем 0, в соседний 0, 1 через один', 'пишем 1, в соседний 0, 1 через один'];
      if (Math.random() < .5) return { q: 'В столбике ' + k + ' единиц' + (k < 5 ? 'ы' : '') + '.\nСколько это в двоичной?', opts: uniq(b2, ['10', '11', '100', '101', '111'].filter(function (x) { return x !== b2; }).sort(function () { return Math.random() - .5; }), function () { return '1'; }), why: k + ' = ' + b2 + ': ' + said[k], t: 10 };
      var others = said.slice(2).filter(function (x, i) { return i + 2 !== k; }).sort(function () { return Math.random() - .5; });
      return { q: 'В столбике ' + k + ' единиц' + (k < 5 ? 'ы' : '') + '.\nЧто делаем?', opts: [said[k], others[0], others[1]], why: k + ' = ' + b2 + ' → ' + said[k], t: 13 };
    }
    if (r < .45) { var m = pick([['1 × 1', '1'], ['1 × 0', '0'], ['0 × 1', '0']]); return { q: m[0] + ' = ?', opts: [m[1], m[1] === '1' ? '0' : '1', '10'], why: 'Умножение как обычно: только 1 × 1 = 1', t: 7 }; }
    var a = rnd(lv < 3 ? 3 : 5, lv < 3 ? 7 : 15), b = rnd(2, lv < 3 ? 3 : 7), p = bin(a * b);
    return { q: bin(a) + '\n× ' + bin(b), opts: uniq(p, [bin(a + b), flipBit(p)], function () { return flipBit(p); }), why: a + ' × ' + b + ' = ' + (a * b) + ' = ' + wsum(p), t: 22 + lv };
  };
  /* отрицательные: дополнение до 2 (8 бит) */
  GEN.neg = function (lv) {
    var r = Math.random(), n = rnd(1, lv < 3 ? 15 : 60);
    if (r < .15) { var s = pick(['0', '1']) + bin(rnd(1, 127), 7); return { q: s + '\nкакой знак?', opts: s[0] === '1' ? ['отрицательное', 'положительное', 'ноль'] : ['положительное', 'отрицательное', 'ноль'], why: 'Смотрим старший бит (слева): 0 = плюс, 1 = минус', t: 9 }; }
    if (r < .35) { var x = bin(rnd(1, 120), 8); return { q: 'Переверни все биты:\n' + x, opts: uniq(inv(x), [x, flipBit(inv(x))], function () { return flipBit(inv(x)); }), why: 'Каждый 1 → 0, каждый 0 → 1 (משלים ל-1)', t: 13 }; }
    if (r < .65) return { q: '−' + n + ' в дополнении до 2\n(8 бит)', opts: uniq(twos(n), [inv(bin(n, 8)), '1' + bin(n, 7)], function () { return flipBit(twos(n)); }), why: n + ' = ' + bin(n, 8) + ' → переворачиваем ' + inv(bin(n, 8)) + ' → +1 = ' + twos(n), t: 20 };
    if (r < .85) return { q: twos(n) + ' = ? (со знаком)', opts: uniq('−' + n, [String(256 - n), '−' + (n - 1 || n + 1), String(n)], function () { return '−' + rnd(1, 99); }), why: 'Старший бит 1 → минус. Переворачиваем: ' + inv(twos(n)) + ', +1 = ' + bin(n, 8) + ' = ' + n + ' → −' + n, t: 22 };
    var a = rnd(1, 30), b = rnd(1, 30), sum = twos(a + b);
    return { q: '−' + a + ' + −' + b + ' = ? (8 бит)', opts: uniq(sum, [inv(bin(a + b, 8)), flipBit(sum)], function () { return flipBit(sum); }), why: '−' + a + ' + −' + b + ' = −' + (a + b) + '. ' + (a + b) + ' = ' + bin(a + b, 8) + ' → переворачиваем → +1 = ' + sum, t: 30 };
  };
  /* 10 ↔ 2 */
  GEN.b10 = function (lv) {
    var max = lv < 3 ? 31 : lv < 5 ? 63 : 255, n = rnd(3, max), b = bin(n), rev = b.split('').reverse().join('');
    if (Math.random() < .5) return { q: n + ' → двоичная', opts: uniq(b, [rev !== b ? rev : null, flipBit(b)], function () { return flipBit(b); }), why: n + ' = ' + wsum(b) + ' → ' + b, t: 14 };
    return { q: b + ' → десятичная', opts: uniq(String(n), [rev !== b ? String(parseInt(rev, 2)) : null, String(n + pick([1, 2, -1, -2, 4]))], function () { return String(n + rnd(-6, 6)); }), why: b + ' = ' + wsum(b) + ' = ' + n, t: 14 };
  };
  /* 8 и 16 */
  GEN.hex = function (lv) {
    var r = Math.random();
    if (r < .15) { var v = rnd(10, 15); return { q: hex(v) + ' = ? (десятичная)', opts: uniq(String(v), [String(v + 1), String(v - 1)], function () { return String(rnd(10, 15)); }), why: 'A=10 B=11 C=12 D=13 E=14 F=15', t: 8 }; }
    if (r < .4) { var n = rnd(16, lv < 3 ? 255 : 4095), b = bin(n); return { q: b + ' → 16-ричная', opts: uniq(hex(n), [hex(n ^ 1), hex(n ^ 16)], function () { return hex(rnd(16, 4095)); }), why: 'Группы по 4 справа (8 4 2 1) → ' + hex(n), t: 18 }; }
    if (r < .6) { n = rnd(8, lv < 3 ? 63 : 511); b = bin(n); return { q: b + ' → 8-ичная', opts: uniq(n.toString(8), [(n ^ 1).toString(8), (n ^ 8).toString(8)], function () { return rnd(8, 511).toString(8); }), why: 'Группы по 3 справа (4 2 1) → ' + n.toString(8), t: 18 }; }
    if (r < .8) { n = rnd(17, lv < 3 ? 255 : 1000); var h = hex(n); return { q: h + '₁₆ → десятичная', opts: uniq(String(n), [String(n + 16), String(n - 1)], function () { return String(n + rnd(-20, 20)); }), why: h.split('').map(function (c, i) { return parseInt(c, 16) + ' × ' + Math.pow(16, h.length - 1 - i); }).join(' + ') + ' = ' + n, t: 20 }; }
    n = rnd(9, 63); var o = n.toString(8);
    return { q: o + '₈ → десятичная', opts: uniq(String(n), [String(n + 8), String(+o)], function () { return String(n + rnd(-9, 9)); }), why: o.split('').map(function (c, i) { return c + ' × ' + Math.pow(8, o.length - 1 - i); }).join(' + ') + ' = ' + n, t: 16 };
  };
  GEN.mix = function (lv) { return GEN[pick(['add', 'neg', 'b10', 'hex', 'add', 'neg'])](lv); };
  window.GEN = GEN;
  window.GU = { rnd: rnd, pick: pick, bin: bin, hex: hex, inv: inv, twos: twos, wsum: wsum };
})();

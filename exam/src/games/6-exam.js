window.GAME = {
  id: 'exam', list: 'новый вариант каждый раз · как завтра', emoji: '📝', title: 'Вариант экзамена',
  learnName: '1. Решить вариант экзамена', learnSub: '3 задания, числа каждый раз новые',
  doneText: 'Вариант решён ✅ Нажми «Ещё вариант», чтобы получить новые числа. 2–3 варианта, и завтра будет легко.',
  intro: 'Как на בוחן 12.11: 3 задания, 1 час. Показывай путь и проверяй ответ.<div class="he">השלם את הטבלה · העבר לבינארי ובצע חיבור · פתור</div>',
  learn: function () {
    var U = window.GU, r = U.rnd, B = U.bin, S = [];
    var NAMES = { d: 'десятичная (10)', b: 'двоичная (2)', o: '8-ичная', h: '16-ричная' };
    var n = r(20, 300), v = { d: String(n), b: B(n), o: n.toString(8), h: U.hex(n) };
    function grp(bits, k) { while (bits.length % k) bits = '0' + bits; var g = []; for (var i = 0; i < bits.length; i += k) g.push(bits.slice(i, i + k)); return g; }
    function digW(s, base) { return s.split('').map(function (c, i) { return parseInt(c, base) + ' × ' + Math.pow(base, s.length - 1 - i); }).join(' + '); }
    function why(from, to) {
      if (to === 'd') return from === 'b' ? v.b + ' = ' + U.wsum(v.b) + ' = ' + n : v[from] + ' = ' + digW(v[from], from === 'o' ? 8 : 16) + ' = ' + n;
      if (to === 'b') {
        if (from === 'd') return n + ' = ' + U.wsum(v.b) + ' → ' + v.b;
        var k = from === 'o' ? 3 : 4;
        return 'каждую цифру ' + k + ' битами: ' + v[from].split('').map(function (c) { return B(parseInt(c, from === 'o' ? 8 : 16), k); }).join(' ') + ' → ' + v.b;
      }
      var kk = to === 'o' ? 3 : 4;
      return (from === 'b' ? '' : 'через двоичную ' + v.b + ': ') + 'группы по ' + kk + ' справа: ' + grp(v.b, kk).join(' ') + ' → ' + v[to];
    }
    var src = U.pick(['d', 'b', 'o', 'h']);
    var order = { d: ['b', 'o', 'h'], b: ['d', 'o', 'h'], o: ['b', 'd', 'h'], h: ['b', 'd', 'o'] }[src];
    S.push({ t: 'card', title: 'Задание 1: таблица', html: 'Дано: <b class="y m">' + v[src] + '</b> — ' + NAMES[src] + '.<br>Заполни остальные три клетки.<p class="mut">Удобно сначала получить двоичную: из неё 8 и 16 делаются группами.</p><div class="he">השלם את הטבלה</div>' });
    order.forEach(function (t) {
      S.push({ t: 'type', q: '<b class="m">' + v[src] + '</b> (' + NAMES[src] + ') → <b>' + NAMES[t] + '</b>' + (t !== 'b' && src !== 'b' ? '<br><span class="mut">двоичная: ' + v.b + '</span>' : ''), answer: v[t], keys: t, why: why(src, t) });
    });
    S.push({ t: 'card', title: 'Таблица готова ✅', html: '<div class="rule"><span class="m">10</span>' + v.d + '</div><div class="rule"><span class="m">2</span>' + v.b + '</div><div class="rule"><span class="m">8</span>' + v.o + '</div><div class="rule"><span class="m">16</span>' + v.h + '</div>' });
    var a = r(5, 31), b = r(5, 31), ab = B(a + b);
    S.push({ t: 'card', title: 'Задание 2', html: 'a = <b class="y">' + a + '</b>, b = <b class="y">' + b + '</b>.<br>Переведи в двоичную и сложи. Потом проверь.<div class="he">העבר לבינארי ובצע חיבור</div>' });
    S.push({ t: 'type', q: 'a = ' + a + ' → двоичная', answer: B(a), keys: 'b', why: a + ' = ' + U.wsum(B(a)) + ' → ' + B(a) });
    S.push({ t: 'type', q: 'b = ' + b + ' → двоичная', answer: B(b), keys: 'b', why: b + ' = ' + U.wsum(B(b)) + ' → ' + B(b) });
    S.push({ t: 'add', title: 'Сложи', a: B(a), b: B(b) });
    S.push({ t: 'type', q: 'Проверка: <b class="m">' + ab + '</b> → десятичная', answer: String(a + b), keys: 'd', why: U.wsum(ab) + ' = ' + (a + b) + ', и ' + a + ' + ' + b + ' = ' + (a + b) + ' ✅' });
    var x = r(2, 30), y = r(2, 30), sum = x + y, tx = U.twos(x), ty = U.twos(y), ts = U.twos(sum);
    S.push({ t: 'card', title: 'Задание 3', html: 'Реши в дополнении до 2 (8 бит): <b class="y m">−' + x + ' + −' + y + '</b><div class="he">פתור</div><p class="mut">Минус → пишем число в 8 битах, переворачиваем, +1.</p>' });
    [[x, tx], [y, ty]].forEach(function (p) {
      S.push({ t: 'fill', title: '−' + p[0] + ': шаг 1', q: p[0] + ' в 8 битах:', answer: B(p[0], 8), keys: 'b', why: p[0] + ' = ' + U.wsum(B(p[0])) + ' → ' + B(p[0], 8) });
      S.push({ t: 'flip', title: '−' + p[0] + ': переворачиваем', bits: B(p[0], 8) });
      S.push({ t: 'add', title: '−' + p[0] + ': +1', a: U.inv(B(p[0], 8)), b: '00000001', check: '−' + p[0] + ' = <b class="m">' + p[1] + '</b>' });
    });
    S.push({ t: 'add', title: 'Складываем', a: tx, b: ty, drop: true, check: 'Слева 1 → ответ с минусом. Узнаем число: перевернуть и +1.' });
    S.push({ t: 'flip', title: 'Переворачиваем ответ', bits: ts });
    S.push({ t: 'add', title: '+1', a: U.inv(ts), b: '00000001' });
    S.push({ t: 'type', q: '<b class="m">' + B(sum, 8) + '</b> → десятичная', answer: String(sum), keys: 'd', why: U.wsum(B(sum)) + ' = ' + sum });
    S.push({ t: 'choice', q: 'Значит ответ −' + x + ' + −' + y + ' = ?', opts: ['−' + sum, String(sum), '−' + (sum + 1)], a: 0, why: 'Проверка: −' + x + ' − ' + y + ' = −' + sum + ' ✅' });
    return S;
  },
  arcade: { name: 'Блиц: всё вперемешку', emoji: '⚡', sub: 'сложение, минусы, переводы', style: 'blocks', gen: function (lv) { return GEN.mix(lv); } }
};

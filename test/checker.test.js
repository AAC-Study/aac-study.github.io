/* Unit tests for the answer checker (js/tasks.js → TaskCheck).
   Run: node test/checker.test.js */
'use strict';
var assert = require('assert');
var path = require('path');
var TaskCheck = require(path.join(__dirname, '..', 'js', 'tasks.js'));

global.window = {};
require(path.join(__dirname, '..', 'data', 'lessons', 'math-2026-11-01.js'));
var lesson = global.window.LESSONS['math-2026-11-01'];

var passed = 0;
function test(name, fn) {
  try { fn(); passed++; } catch (e) { console.error('FAIL: ' + name + '\n  ' + e.message); process.exitCode = 1; }
}
function roots(r, abc) { return { kind: 'roots', answer: { roots: r, abc: abc } }; }
function st(task, input) { return TaskCheck.check(task, input).status; }
function diag(task, input) { return TaskCheck.check(task, input).diag; }

/* ---------- evaluator ---------- */
test('evalExpr basics', function () {
  var E = TaskCheck.evalExpr;
  assert.strictEqual(E('-1/3'), -1 / 3);
  assert.strictEqual(E('2^2'), 4);
  assert.strictEqual(E('√16'), 4);
  assert.strictEqual(E('(-6+4)/2'), -1);
  assert.strictEqual(E('2(3)'), 6);
  assert.ok(isNaN(E('x+1')));
  assert.ok(isNaN(E('1/0')));
  assert.ok(isNaN(E('√(-4)')));
  assert.ok(isNaN(E('')));
  assert.ok(isNaN(E('alert(1)')));
});

/* ---------- roots ---------- */
var t2a = roots(['-1', '-5'], ['1', '6', '5']);
test('roots: plain list, any order, any separator', function () {
  ['-1, -5', '-5,-1', '-1;-5', '-1 -5', '−1, −5', '-1 and -5', '−1 ו −5', '−1 ו-5', '-1 и -5',
   'x=-1, x=-5', 'x1=-1 x2=-5', 'x₁ = −1, x₂ = −5', 'x_1=-1; x_2=-5', '{-1, -5}', 'х=-1, х=-5', 'Ответ: -1; -5',
   'תשובה: x=-1, x=-5', '-1 or -5', '−1 − 5', '-1.0, -5.00', '-2/2, -10/2', '(-6+4)/2, (-6-4)/2']
    .forEach(function (s) { assert.strictEqual(st(t2a, s), 'correct', s); });
});
test('roots: wrong answers are wrong', function () {
  ['-1', '1, 5', '-1, -4', '-1, -5, 2', '0', 'אין פתרון'].forEach(function (s) {
    assert.strictEqual(st(t2a, s), 'wrong', s);
  });
});
test('roots: fractions and decimals with tolerance', function () {
  var t = roots(['-1/3', '-1/2'], ['6', '5', '1']);
  assert.strictEqual(st(t, '-1/3, -1/2'), 'correct');
  assert.strictEqual(st(t, '-0.5, -1/3'), 'correct');
  assert.strictEqual(st(t, '-0,5; -1/3'), 'correct');     // decimal comma
  assert.strictEqual(st(t, '-0.3333333333, -0.5'), 'correct');
  assert.strictEqual(st(t, '-0.33, -0.5'), 'wrong');       // too rough
  assert.strictEqual(st(t, '−1⁄3, −½'), 'correct');
});
test('roots: ± notation', function () {
  var t = roots(['1', '-1'], ['4', '0', '-4']);
  assert.strictEqual(st(t, '±1'), 'correct');
  assert.strictEqual(st(t, 'x = ±1'), 'correct');
  assert.strictEqual(st(t, '1, -1'), 'correct');
  assert.strictEqual(st(t, '1'), 'wrong');
});
test('roots: double root accepts one value (or repeated)', function () {
  var t = roots(['-2'], ['1', '4', '4']);
  assert.strictEqual(st(t, '-2'), 'correct');
  assert.strictEqual(st(t, 'x=-2'), 'correct');
  assert.strictEqual(st(t, '-2, -2'), 'correct');
  assert.strictEqual(st(t, 'x1=x2=-2'), 'correct');
  assert.strictEqual(st(t, '2'), 'wrong');
  assert.strictEqual(diag(t, '-2, 2'), 'tk_diag_extra');
});
test('roots: no solution words', function () {
  var t = roots([], ['1', '2', '2']);
  ['אין', 'אין פתרון', 'אין פתרונות', 'нет', 'нет решений', 'Нет корней', 'решений нет', 'none', 'No solution', '∅', 'x = ∅', '{}', 'no real roots', '"אין פתרון"']
    .forEach(function (s) { assert.strictEqual(st(t, s), 'correct', s); });
  assert.strictEqual(st(t, '-1, -1'), 'wrong');
  assert.strictEqual(diag(t, '-1'), 'tk_diag_expected_none');
});
test('roots: unparsable input', function () {
  ['x^2+6x', 'не знаю', 'abc', '???', '-1, foo'].forEach(function (s) { assert.strictEqual(st(t2a, s), 'unparsed', s); });
  assert.strictEqual(st(t2a, '   '), 'empty');
});
test('roots: diagnostics', function () {
  assert.strictEqual(diag(t2a, '-1'), 'tk_diag_missing');
  assert.strictEqual(diag(t2a, '1, 5'), 'tk_diag_sign');
  assert.strictEqual(diag(t2a, '-1, 7'), 'tk_diag_one_wrong');
  assert.strictEqual(diag(t2a, '-2, -10'), 'tk_diag_2a');          // forgot 2a
  assert.strictEqual(diag(t2a, 'אין פתרון'), 'tk_diag_square');      // b − 4ac = 6 − 20 < 0
  assert.strictEqual(diag(roots(['6', '-1'], ['1', '-5', '-6']), 'нет решений'), 'tk_diag_said_none');
  // 6x²+5x+1: forgetting to square b gives 5 − 24 = −19 → "no solution"
  var tz = roots(['-1/3', '-1/2'], ['6', '5', '1']);
  assert.strictEqual(diag(tz, 'אין פתרון'), 'tk_diag_square');
  // x²+2x−15: sign of 4ac wrong → D = 4 − 60 < 0; with c>0... use x² − x − 6 (roots 3, −2): b²+4ac = 1 − 24 < 0
  var tq = roots(['3', '-2'], ['1', '-1', '-6']);
  assert.strictEqual(diag(tq, '1/2'), 'tk_diag_generic');
});

/* ---------- number / text / choice ---------- */
test('number kind', function () {
  var t = { kind: 'number', answer: { value: '9' } };
  assert.strictEqual(st(t, '9'), 'correct');
  assert.strictEqual(st(t, 'D = 9'), 'correct');
  assert.strictEqual(st(t, ' 9.0 '), 'correct');
  assert.strictEqual(st(t, '49 - 40'), 'correct');
  assert.strictEqual(st(t, '89'), 'wrong');
  assert.strictEqual(diag(t, '-9'), 'tk_diag_sign_one');
  assert.strictEqual(st(t, 'nine?'), 'unparsed');
});
test('text kind', function () {
  var t = { kind: 'text', answer: { accept: ['Discriminant', 'дискриминант', 'דיסקרימיננטה'] } };
  assert.strictEqual(st(t, ' discriminant. '), 'correct');
  assert.strictEqual(st(t, 'Дискриминант'), 'correct');
  assert.strictEqual(st(t, 'root'), 'wrong');
});
test('choice kind', function () {
  var t = { kind: 'choice', answer: { index: 0 } };
  assert.strictEqual(st(t, '0'), 'correct');
  assert.strictEqual(st(t, '2'), 'wrong');
  assert.strictEqual(st(t, ''), 'empty');
});

/* ---------- every task of the lesson passes with its own answer ---------- */
function answerInputs(task) {
  var a = task.answer;
  if (task.kind === 'choice') return [String(a.index)];
  if (task.kind === 'number') return [a.value, 'D = ' + a.value];
  if (task.kind === 'text') return a.accept;
  if (!a.roots.length) return ['אין פתרון', 'нет решений', 'no solution'];
  var uni = a.roots.map(function (r) { return r.replace(/-/g, '−'); });
  var dec = a.roots.map(function (r) { return String(TaskCheck.evalExpr(r)); });
  return [a.roots.join(', '), uni.slice().reverse().join('; '), 'x = ' + uni.join(' ו ') , dec.join(' ')];
}
['teacher', 'ai'].forEach(function (group) {
  lesson.tasks[group].forEach(function (task) {
    test(group + ' ' + task.id + ' accepts its answer', function () {
      answerInputs(task).forEach(function (inp) {
        assert.strictEqual(TaskCheck.check(task, inp).status, 'correct', task.id + ' <- ' + inp);
      });
    });
    test(group + ' ' + task.id + ' rejects a wrong answer', function () {
      var bad = task.kind === 'choice' ? String((task.answer.index + 1) % 3) : (task.kind === 'number' ? '12345' : '123');
      assert.strictEqual(TaskCheck.check(task, bad).status, 'wrong', task.id);
    });
    // independent float check: each root satisfies a·x² + b·x + c = 0 of the stored abc
    if (task.kind === 'roots') test(group + ' ' + task.id + ' roots satisfy abc', function () {
      var abc = task.answer.abc.map(TaskCheck.evalExpr);
      var D = abc[1] * abc[1] - 4 * abc[0] * abc[2];
      assert.strictEqual(task.answer.roots.length, D > 0 ? 2 : (D === 0 ? 1 : 0), task.id + ' root count vs D');
      task.answer.roots.forEach(function (r) {
        var x = TaskCheck.evalExpr(r);
        assert.ok(Math.abs(abc[0] * x * x + abc[1] * x + abc[2]) < 1e-9, task.id + ' root ' + r);
      });
    });
  });
});

/* independent re-derivation from the task text for plain "ax² + bx + c = 0" tasks */
test('abc matches the printed equation', function () {
  var n = 0;
  lesson.tasks.teacher.concat(lesson.tasks.ai).forEach(function (task) {
    if (typeof task.text !== 'string') return;
    var m = /^(.*) = 0$/.exec(task.text);
    if (!m || /[()\/.]/.test(m[1])) return;
    var s = m[1].replace(/−/g, '-').replace(/\s+/g, '');
    var coef = { 2: 0, 1: 0, 0: 0 };
    s.replace(/([+-]?)(\d*)(x²|x)?/g, function (all, sg, d, v) {
      if (!all) return '';
      var k = d === '' ? 1 : Number(d);
      if (sg === '-') k = -k;
      coef[v === 'x²' ? 2 : (v === 'x' ? 1 : 0)] += k;
      return '';
    });
    assert.deepStrictEqual([coef[2], coef[1], coef[0]], task.answer.abc.map(Number), task.id + ' ' + task.text);
    n++;
  });
  assert.ok(n >= 30, 'checked ' + n);
});

console.log((process.exitCode ? 'FAILED' : 'OK') + ' — ' + passed + ' tests passed');

/* Проверка файла урока: node test/lesson-validate.js <lesson-id> [<lesson-id> ...]
   Структура (три языка везде), уникальные id задач, и что правильный ответ из файла
   проходит проверку сайта (TaskCheck), а заведомо неверный — нет. */
'use strict';
var path = require('path');
var TaskCheck = require(path.join(__dirname, '..', 'js', 'tasks.js'));
global.window = {};
require(path.join(__dirname, '..', 'data', 'subjects.js'));
var SUBJ = (global.window.SUBJECTS || []).map(function (s) { return s.id; });
var LANGS = ['he', 'ru', 'en'];
var bad = 0;
function fail(id, msg) { bad++; console.log('  FAIL ' + id + ': ' + msg); }
function tri(id, where, o, optional) {
  if (o == null) { if (!optional) fail(id, where + ' missing'); return; }
  if (typeof o === 'string') return;            // формула/строка без перевода — допустимо
  LANGS.forEach(function (l) { if (typeof o[l] !== 'string' || !o[l].trim()) fail(id, where + '.' + l + ' empty'); });
}
function rightInput(task) {
  var a = task.answer || {};
  if (task.kind === 'roots') return (a.roots || []).length ? a.roots.join(', ') : '∅';
  if (task.kind === 'number') return String(a.value);
  if (task.kind === 'text') return (a.accept || [])[0];
  if (task.kind === 'choice') return String(a.index);
  return null;
}
process.argv.slice(2).forEach(function (id) {
  try { require(path.join(__dirname, '..', 'data', 'lessons', id + '.js')); } catch (e) { fail(id, 'cannot load: ' + e.message); return; }
  var L = (global.window.LESSONS || {})[id];
  if (!L) return fail(id, 'window.LESSONS["' + id + '"] not set');
  if (L.id !== id) fail(id, 'id mismatch');
  if (SUBJ.indexOf(L.subject) < 0) fail(id, 'unknown subject ' + L.subject);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(L.date || '')) fail(id, 'bad date');
  tri(id, 'title', L.title); tri(id, 'summary', L.summary);
  (L.timeline || []).forEach(function (it, i) {
    var w = 'timeline[' + i + ']';
    if (it.kind === 'qa' || it.kind === 'faq') { tri(id, w + '.q', it.q); tri(id, w + '.a', it.a); }
    else if (!it.text && !it.math) fail(id, w + ' has no text/math');
    if (it.title) tri(id, w + '.title', it.title);
    if (it.text) tri(id, w + '.text', it.text);
    if (it.why) tri(id, w + '.why', it.why);
  });
  if (!(L.timeline || []).length) fail(id, 'empty timeline');
  (L.review || []).forEach(function (r, i) { tri(id, 'review[' + i + '].title', r.title); tri(id, 'review[' + i + '].text', r.text); });
  var tasks = ((L.tasks || {}).teacher || []).concat((L.tasks || {}).ai || []);
  var seen = {};
  tasks.forEach(function (tk) {
    var w = 'task ' + tk.id;
    if (!tk.id || seen[tk.id]) fail(id, w + ' missing or duplicate id'); seen[tk.id] = 1;
    if (['roots', 'number', 'text', 'choice'].indexOf(tk.kind) < 0) return fail(id, w + ' bad kind ' + tk.kind);
    tri(id, w + '.text', tk.text);
    if (tk.kind === 'choice') (tk.options || []).forEach(function (o, i) { tri(id, w + '.options[' + i + ']', o); });
    (tk.hints || []).forEach(function (h, i) { tri(id, w + '.hints[' + i + ']', h); });
    if (tk.example) tri(id, w + '.example', tk.example);   // свёрнутая вкладка «Пример» в задаче
    if (!(tk.solution || []).length) fail(id, w + ' no solution');
    (tk.solution || []).forEach(function (h, i) { tri(id, w + '.solution[' + i + ']', h); });
    var inp = rightInput(tk);
    var r = TaskCheck.check(tk, inp);
    if (!r || r.status !== 'correct') fail(id, w + ' own answer "' + inp + '" is not accepted (' + (r && r.status) + ')');
    var wrong = tk.kind === 'choice' ? String(((tk.answer.index || 0) + 1) % Math.max(2, (tk.options || []).length)) : '123456789';
    var r2 = TaskCheck.check(tk, wrong);
    if (r2 && r2.status === 'correct') fail(id, w + ' a wrong answer "' + wrong + '" is accepted');
  });
  console.log((bad ? '' : '  ok   ') + id + ': ' + (L.timeline || []).length + ' steps, ' + tasks.length + ' tasks');
});
console.log(bad ? bad + ' problem(s)' : 'all good');
process.exit(bad ? 1 : 0);

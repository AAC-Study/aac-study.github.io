/* Урок-игра: SQL 05.11 — in, between, like, order by, top, distinct на таблице hayot (5 строк из урока). */
window.PLAY = window.PLAY || {};
(function () {
  var COLS = ['mispar_shvav', 'haya', 'gil'];
  var ROWS = [[1001, 'kelev', 3], [1002, 'chatul', 5], [1003, 'arnav', 1], [1004, 'tuki', 2], [1005, 'kelev', 7]];
  function ex(r) { return r[1] + ' (' + r[2] + ')'; }
  window.PLAY['sql-2026-11-05'] = {
    subject: 'sql', date: '05.11', badge: 'SQL', title: 'in, between, like, order by, top, distinct',
    levels: [
      { name: 'Запуск и ошибки', stages: [
        { type: 'quiz', q: 'Запустил весь код второй раз и получил `Database \'animals\' already exists`. Что это значит?', options: [
          { t: 'База уже создана в первый раз — запускаю только следующую часть', ok: true, why: 'create создаёт один раз, как папку с тем же именем. Выдели мышкой только нужные строки → F5.' },
          { t: 'Код сломан', why: 'Код как раз сработал в первый раз. SQL просто говорит «это уже есть».' },
          { t: 'Нужно переустановить SSMS', why: 'Ничего не сломано. Запускай частями: выделить → F5.' } ] },
        { type: 'quiz', q: 'SQL пишет `Invalid object name \'hayot\'`, хотя таблицу создавал. Чего не хватает?', options: [
          { t: '`use animals`', ok: true, why: 'Без use SQL ищет таблицу в базе master. use выбирает нашу базу (или выбор в списке рядом с Execute).' },
          { t: 'Ещё одного `create table`', why: 'Таблица уже есть — в базе animals. Нужно просто перейти в эту базу.' },
          { t: 'Запятой', why: 'Это ошибка «не нашёл объект», а не синтаксис. Значит, мы не в той базе.' } ] }
      ] },
      { name: 'Какие строки вернутся', stages: [
        { type: 'learn', title: 'Таблица hayot', text: 'Дальше все запросы — на этой таблице из урока:', code: ['mispar_shvav  haya    gil', '1001          kelev   3', '1002          chatul  5', '1003          arnav   1', '1004          tuki    2', '1005          kelev   7'] },
        { type: 'widget', widget: 'sqlrows', q: 'Отметь строки, которые вернёт запрос:', code: ['select * from hayot', "where haya in ('kelev', 'arnav')"], cols: COLS, rows: ROWS, answer: [0, 2, 4], explain: ex,
          why: 'in = «равно любому из списка». kelev — 2 строки, arnav — 1.' },
        { type: 'widget', widget: 'sqlrows', q: 'А теперь с опечаткой (как было в тетради):', code: ['select * from hayot', "where haya in ('kelev', 'amav')"], cols: COLS, rows: ROWS, answer: [0, 4], explain: ex,
          why: 'amav ≠ arnav (rn похоже на m). SQL ищет точное совпадение букв, поэтому кроликов нет.' },
        { type: 'widget', widget: 'sqlrows', q: 'between: края входят или нет?', code: ['select * from hayot', 'where gil between 2 and 5'], cols: COLS, rows: ROWS, answer: [0, 1, 3], explain: ex,
          why: 'between 2 and 5 = gil >= 2 and gil <= 5. Края 2 и 5 входят: 3, 5, 2.' },
        { type: 'widget', widget: 'sqlrows', q: 'like с `%`:', code: ['select * from hayot', "where haya like '%u%'"], cols: COLS, rows: ROWS, answer: [1, 3], explain: ex,
          why: '%u% = буква u где угодно: chatul, tuki.' }
      ] },
      { name: '= или like', stages: [
        { type: 'quiz', q: 'Нужны все работники с почтой Gmail. Какой запрос?', options: [
          { t: "`where doal = 'gmail'`", why: '= ищет точное равенство. Адрес smeier@gmail.com не равен слову gmail — он только содержит его.' },
          { t: "`where doal like '%gmail%'`", ok: true, why: '% = «здесь что угодно». Найдёт gmail в любом месте адреса.' },
          { t: "`where doal like 'gmail'`", why: 'Без % это то же самое, что = \'gmail\'. Нужен шаблон: \'%gmail%\'.' } ] }
      ] },
      { name: 'Порядок и сортировка', stages: [
        { type: 'order', q: 'Собери запрос: животные старше 2 лет, от старшего к младшему.', lines: ['select *', 'from hayot', 'where gil > 2', 'order by gil desc'],
          why: 'Порядок частей всегда: select → from → where → order by. Сначала выбрали строки, потом упорядочили.' },
        { type: 'input', q: 'Какое животное покажет запрос? (слово из таблицы)', code: ['select top 1 * from hayot', 'order by gil desc'], answer: ['kelev'],
          hints: ['desc — от большего к меньшему. Кто старше всех?', 'Самый большой gil = 7.'], solution: ['сортировка по gil: 7, 5, 3, 2, 1', 'top 1 → строка с 7', '(1005, kelev, 7)'], why: 'gil 7 → kelev. Без order by top взял бы строку в неопределённом порядке.' }
      ] },
      { name: 'Запятая и distinct', stages: [
        { type: 'quiz', q: 'Что покажет запрос без запятой?', code: ['select haya gil from hayot'], options: [
          { t: 'Ошибку', why: 'Ошибки не будет — и в этом ловушка. Слово сразу после столбца = новое имя для него.' },
          { t: 'Два столбца: haya и gil', why: 'Для двух столбцов нужна запятая: select haya, gil.' },
          { t: 'Один столбец с названием gil, а в нём животные', ok: true, why: 'gil стал новым именем для haya. Поэтому после запуска считай: сколько столбцов просил и сколько получил.' } ] },
        { type: 'input', q: 'Сколько строк вернёт запрос?', code: ['select distinct haya from hayot'], answer: ['4'],
          hints: ['distinct убирает повторы. Какое животное в таблице два раза?'], solution: ['kelev, chatul, arnav, tuki, kelev', 'без повторов: kelev, chatul, arnav, tuki', '4 строки'], why: 'kelev дважды, distinct оставит его один раз: 4 строки.' }
      ] }
    ]
  };
})();

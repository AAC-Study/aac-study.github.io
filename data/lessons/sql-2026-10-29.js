/* Lesson data — format: see the comment at the top of data/lessons/math-2026-11-01.js.
   SQL, second lesson: where with selected columns, operators (or / and / not, truth tables),
   and the opening exercise "build a database" (a table of funny video clips).
   Every row count below was checked by running the query in sqlite3 on the 11-row shlifot table
   from the previous lesson (and on the small clips sample written in the task). */
window.LESSONS = window.LESSONS || {};
window.LESSONS["sql-2026-10-29"] = {
  id: "sql-2026-10-29",
  subject: "sql",
  date: "2026-10-29",
  title: { he: "where, אופרטורים ותרגיל פתיחה", ru: "where, операторы и вводное упражнение", en: "where, operators and an opening exercise" },
  summary: {
    he: "סינון שורות עם `where` יחד עם בחירת עמודות, האופרטורים `or`, `and`, `not` וטבלאות אמת, ותרגיל פתיחה: להקים מסד נתונים לקטעי וידאו מצחיקים מאפס.",
    ru: "Фильтр строк `where` вместе с выбором столбцов, операторы `or`, `and`, `not` и таблицы истинности, и вводное упражнение: создать с нуля базу данных смешных видеоклипов.",
    en: "Filtering rows with `where` together with choosing columns, the operators `or`, `and`, `not` and truth tables, and an opening exercise: build a database of funny video clips from scratch."
  },

  timeline: [
    { kind: "board",
      title: { he: "חזרה: where על טבלת shlifot", ru: "Повторение: where на таблице shlifot", en: "Recap: where on the shlifot table" },
      text: {
        he: "ממשיכים עם הטבלה shlifot מהשיעור הקודם (11 חנויות).\nהשאילתה הראשונה מציגה רק את כל הנתונים ששייכים לחנות rehitim.\nהשנייה — שילוב סלקטיבי של כמה שדות (כתובת ומייל) רק על rehitim: select בוחר עמודות, where בוחר שורות.",
        ru: "Продолжаем с таблицей shlifot с прошлого урока (11 магазинов).\nПервый запрос показывает только все данные магазина rehitim.\nВторой — выборочное сочетание нескольких полей (адрес и почта) только для rehitim: select выбирает столбцы, where выбирает строки.",
        en: "We continue with the shlifot table from last lesson (11 shops).\nThe first query shows only all the data of the rehitim shop.\nThe second is a selective combination of a few fields (address and email) for rehitim only: select picks columns, where picks rows."
      },
      math: [
        "select * from shlifot where chanut = 'rehitim'",
        "select ktovet, email from shlifot where chanut = 'rehitim'"
      ] },
    { kind: "board",
      title: { he: "תרגיל מהשקופית", ru: "Упражнение со слайда", en: "Exercise from the slide" },
      text: {
        he: "1. צרו שאילתה ששולפת נתונים על מוכרים ששמם moshe; הציגו את שדה הכתובת.\n2. הציגו את הרשומות של חנות rehitim בלבד, רק עם שדה עסקאות.\nהפתרונות — במשימות מהמורה למטה.",
        ru: "1. Напишите запрос, который достаёт данные о продавцах по имени moshe; покажите поле адреса.\n2. Покажите записи только магазина rehitim, только с полем сделок.\nРешения — в задачах от преподавателя ниже.",
        en: "1. Write a query that retrieves data on sellers named moshe; show the address field.\n2. Show the records of the rehitim shop only, with just the deals field.\nThe solutions are in the teacher tasks below."
      } },
    { kind: "board",
      title: { he: "Operators: or, and, not", ru: "Operators: or, and, not", en: "Operators: or, and, not" },
      text: {
        he: "בשקופית \"Operators\" היו שלוש שאילתות: תנאי השוואה אחד, ואחר כך שני תנאים שמחוברים ב־`or` וב־`and`. לצידן: Or, And, Not — טבלאות אמת.",
        ru: "На слайде «Operators» было три запроса: одно условие сравнения, а потом два условия, соединённые через `or` и через `and`. Рядом: Or, And, Not — таблицы истинности (טבלאות אמת).",
        en: "The \"Operators\" slide had three queries: one comparison, then two conditions joined with `or` and with `and`. Next to them: Or, And, Not — truth tables."
      },
      math: [
        "select * from shlifot",
        "where iskaot >= 10",
        "",
        "select * from shlifot",
        "where iskaot >= 10 or chanut = 'rehitim'",
        "",
        "select * from shlifot",
        "where iskaot >= 10 and chanut = 'rehitim'"
      ] },
    { kind: "talk",
      title: { he: "טבלאות אמת", ru: "Таблицы истинности", en: "Truth tables" },
      text: {
        he: "`where` בודק כל שורה: התנאי אמת או שקר. השורה נכנסת לתוצאה רק אם הכול יוצא אמת.\n`and` (וגם) — אמת רק אם שני התנאים אמת.\n`or` (או) — אמת אם לפחות אחד מהם אמת.\n`not` (לא) — הופך: אמת נהיה שקר, ושקר נהיה אמת.\nלכן `and` מחזיר בדרך כלל פחות שורות מכל תנאי לבד, ו־`or` — יותר.",
        ru: "`where` проверяет каждую строку: условие истинно или ложно. Строка попадает в результат, только если в итоге получается «истина».\n`and` (и) — истина, только если оба условия истинны.\n`or` (или) — истина, если хотя бы одно истинно.\n`not` (не) — переворачивает: истина становится ложью, ложь — истиной.\nПоэтому `and` обычно даёт меньше строк, чем каждое условие отдельно, а `or` — больше.",
        en: "`where` checks every row: the condition is true or false. A row gets into the result only if the whole thing comes out true.\n`and` — true only if both conditions are true.\n`or` — true if at least one is true.\n`not` — flips it: true becomes false, false becomes true.\nSo `and` usually returns fewer rows than each condition alone, and `or` returns more."
      },
      math: [
        "A      B      A and B   A or B",
        "true   true   true      true",
        "true   false  false     true",
        "false  true   false     true",
        "false  false  false     false",
        "",
        "not true = false    not false = true"
      ] },
    { kind: "board",
      title: { he: "תרגיל פתיחה — הקמת מסד נתונים", ru: "Вводное упражнение — создание базы данных", en: "Opening exercise — building a database" },
      text: {
        he: "חברה אוספת מרחבי האינטרנט קטעי צחוק בסרטוני וידאו, ועוד לא סידרה את הנתונים במסד. צריך ליצור לה מסד שיכיל:\n• מספר סידורי של אומן\n• שם האומן\n• שם הקטע\n• מספר שניות של אורך הקטע\n• לינק אל הקטע\n• מספר הלייקים שהקטע קיבל באתרים השונים (אם אין לייקים — הערך 0)\nמטלה:\n1. הגדירו מסד נתונים ועברו אליו.\n2. הגדירו טבלה שעונה על דרישות החברה.\n3. מלאו את הטבלה בנתוני דמה (מהדמיון).\n4. שאילתה שמציגה את כל הנתונים.\n5. שאילתה שמציגה את שם האומן ואת מספר הלייקים של כל הרשומות.",
        ru: "Компания собирает по интернету смешные видеоклипы и ещё не разложила данные по базе. Нужно создать базу, в которой будут:\n• порядковый номер артиста\n• имя артиста\n• название клипа\n• длина клипа в секундах\n• ссылка на клип\n• количество лайков, которые клип получил на разных сайтах (если лайков нет — значение 0)\nЗадание:\n1. Создайте базу данных и перейдите в неё.\n2. Создайте таблицу под требования компании.\n3. Заполните таблицу вымышленными данными.\n4. Запрос, который показывает все данные.\n5. Запрос, который показывает имя артиста и количество лайков всех записей.",
        en: "A company collects funny video clips from around the internet and has not yet put its data into a database. Create one that holds:\n• the artist's serial number\n• the artist's name\n• the clip name\n• the clip length in seconds\n• a link to the clip\n• the number of likes the clip got on various sites (if none, the value is 0)\nTask:\n1. Define a database and switch to it.\n2. Define a table that meets the company's needs.\n3. Fill it with dummy data (from your imagination).\n4. A query that shows all the data.\n5. A query that shows the artist name and the number of likes for all records."
      } },
    { kind: "tip",
      title: { he: "איך בוחרים סוגים לטבלה", ru: "Как выбрать типы для таблицы", en: "How to choose the column types" },
      text: {
        he: "כל מה שהוא מספר שלם — `int`: מספר האומן, השניות, הלייקים. כל מה שהוא טקסט — `nvarchar(n)` עם n מספיק גדול: שם אומן, שם קטע, ולינק (לינקים ארוכים, אז n גדול, למשל 200).\nלקטע בלי לייקים כותבים ב־insert את המספר 0.\nשלב 5 זה בדיוק \"בחירת עמודות\": שתי עמודות אחרי select, ובלי where — כי רוצים את כל הרשומות.",
        ru: "Всё, что целое число, — `int`: номер артиста, секунды, лайки. Всё, что текст, — `nvarchar(n)` с достаточно большим n: имя артиста, название клипа и ссылка (ссылки длинные, так что n большой, например 200).\nДля клипа без лайков в insert пишем число 0.\nШаг 5 — это ровно «выбор столбцов»: два столбца после select и без where — ведь нужны все записи.",
        en: "Anything that is a whole number is `int`: artist number, seconds, likes. Anything that is text is `nvarchar(n)` with a big enough n: artist name, clip name and link (links are long, so a big n, e.g. 200).\nFor a clip with no likes, write the number 0 in the insert.\nStep 5 is exactly \"choosing columns\": two columns after select and no where — because we want all records."
      } }
  ],

  review: [
    { title: { he: "עמודות ושורות", ru: "Столбцы и строки", en: "Columns and rows" },
      text: { he: "אחרי `select` — אילו עמודות. אחרי `where` — אילו שורות. אפשר את שניהם יחד.", ru: "После `select` — какие столбцы. После `where` — какие строки. Можно и то и другое вместе.", en: "After `select` — which columns. After `where` — which rows. You can use both together." } },
    { title: { he: "טקסט בגרשיים", ru: "Текст в кавычках", en: "Text in quotes" },
      text: { he: "`where menahel = 'moshe'` — טקסט תמיד בתוך `'…'`; מספר בלי.", ru: "`where menahel = 'moshe'` — текст всегда в `'…'`; число без кавычек.", en: "`where menahel = 'moshe'` — text always inside `'…'`; numbers without." } },
    { title: { he: "השוואות", ru: "Сравнения", en: "Comparisons" },
      text: { he: "`=`, `>`, `<`, `>=`, `<=` — למשל `iskaot >= 10`.", ru: "`=`, `>`, `<`, `>=`, `<=` — например, `iskaot >= 10`.", en: "`=`, `>`, `<`, `>=`, `<=` — for example `iskaot >= 10`." } },
    { title: { he: "and", ru: "and", en: "and" },
      text: { he: "שני התנאים חייבים להיות אמת. בדרך כלל פחות שורות.", ru: "Оба условия должны быть истинны. Обычно строк меньше.", en: "Both conditions must be true. Usually fewer rows." } },
    { title: { he: "or", ru: "or", en: "or" },
      text: { he: "מספיק שתנאי אחד אמת. בדרך כלל יותר שורות.", ru: "Достаточно одного истинного условия. Обычно строк больше.", en: "One true condition is enough. Usually more rows." } },
    { title: { he: "not", ru: "not", en: "not" },
      text: { he: "הופך את התנאי: `not chanut = 'rehitim'` — כל החנויות חוץ מ־rehitim.", ru: "Переворачивает условие: `not chanut = 'rehitim'` — все магазины, кроме rehitim.", en: "Flips the condition: `not chanut = 'rehitim'` — every shop except rehitim." } },
    { title: { he: "מסד מאפס", ru: "База с нуля", en: "A database from scratch" },
      text: { he: "`create database` → `use` → `create table` → `insert into` → `select`. מספרים — `int`, טקסט — `nvarchar(n)`.", ru: "`create database` → `use` → `create table` → `insert into` → `select`. Числа — `int`, текст — `nvarchar(n)`.", en: "`create database` → `use` → `create table` → `insert into` → `select`. Numbers are `int`, text is `nvarchar(n)`." } }
  ],

  tasks: {
    groups: {
      ex: { he: "התרגיל מהשקופית (טבלת shlifot)", ru: "Упражнение со слайда (таблица shlifot)", en: "The slide exercise (shlifot table)" },
      ops: { he: "Operators", ru: "Operators", en: "Operators" },
      clips: { he: "תרגיל פתיחה: מסד קטעי וידאו", ru: "Вводное упражнение: база видеоклипов", en: "Opening exercise: a video clips database" }
    },
    teacher: [
      {
        id: "t-e-1", group: "ex",
        label: { he: "תרגיל 1", ru: "Задание 1", en: "Exercise 1" },
        kind: "choice",
        text: {
          he: "תרגיל 1: נתונים על מוכרים ששמם moshe — להציג את שדה הכתובת. איזו שאילתה?",
          ru: "Задание 1: данные о продавцах по имени moshe — показать поле адреса. Какой запрос?",
          en: "Exercise 1: data on sellers named moshe — show the address field. Which query?"
        },
        options: [
          "`select * from shlifot where menahel = 'moshe'`",
          "`select ktovet from shlifot where menahel = 'moshe'`",
          "`select menahel from shlifot where ktovet = 'moshe'`",
          "`select ktovet from shlifot where menahel = moshe`"
        ],
        answer: { index: 1 },
        hints: [
          { he: "שם המוכר נמצא בעמודה menahel, הכתובת — בעמודה ktovet.", ru: "Имя продавца — в столбце menahel, адрес — в столбце ktovet.", en: "The seller's name is in menahel, the address in ktovet." },
          { he: "ביקשו רק את שדה הכתובת, לא את כל העמודות. ו־moshe הוא טקסט.", ru: "Просили только поле адреса, а не все столбцы. И moshe — это текст.", en: "Only the address field was asked for, not all columns. And moshe is text." }
        ],
        solution: [
          { he: "עמודה להצגה: ktovet → אחרי select.", ru: "Столбец для показа: ktovet → после select.", en: "Column to show: ktovet → after select." },
          { he: "השורות: רק של moshe → `where menahel = 'moshe'` (עם גרשיים).", ru: "Строки: только moshe → `where menahel = 'moshe'` (в кавычках).", en: "Rows: only moshe → `where menahel = 'moshe'` (with quotes)." },
          "select ktovet from shlifot where menahel = 'moshe'"
        ]
      },
      {
        id: "t-e-2", group: "ex",
        label: { he: "תרגיל 1 — כמה", ru: "Задание 1 — сколько", en: "Exercise 1 — how many" },
        kind: "number",
        text: {
          he: "כמה כתובות תציג השאילתה של תרגיל 1 על טבלת shlifot?",
          ru: "Сколько адресов покажет запрос задания 1 на таблице shlifot?",
          en: "How many addresses does the exercise 1 query show on the shlifot table?"
        },
        answer: { value: "5" },
        hints: [
          { he: "ספרו את השורות שבהן הערך האחרון הוא 'moshe'.", ru: "Посчитай строки, где последнее значение — 'moshe'.", en: "Count the rows whose last value is 'moshe'." }
        ],
        solution: [
          { he: "השורות של moshe:", ru: "Строки moshe:", en: "The moshe rows:" },
          "dayan 11 rechovot · ezra 14 haifa · ofer 14 beer sheva · hanadiv 89 chadera · golda meir 89 chadera",
          { he: "סה״כ 5 כתובות.", ru: "Итого 5 адресов.", en: "That is 5 addresses." }
        ]
      },
      {
        id: "t-e-3", group: "ex",
        label: { he: "תרגיל 2", ru: "Задание 2", en: "Exercise 2" },
        kind: "choice",
        text: {
          he: "תרגיל 2: הרשומות של חנות rehitim בלבד, רק עם שדה עסקאות. איזו שאילתה?",
          ru: "Задание 2: записи только магазина rehitim, только с полем сделок. Какой запрос?",
          en: "Exercise 2: records of the rehitim shop only, with just the deals field. Which query?"
        },
        options: [
          "`select iskaot from shlifot where chanut = 'rehitim'`",
          "`select chanut from shlifot where iskaot = 'rehitim'`",
          "`select * from shlifot where chanut = 'rehitim'`",
          "`select iskaot from shlifot`"
        ],
        answer: { index: 0 },
        hints: [
          { he: "איזו עמודה מציגים? ואיזה תנאי מסנן את השורות?", ru: "Какой столбец показываем? И какое условие отбирает строки?", en: "Which column is shown? Which condition filters the rows?" },
          { he: "עסקאות = iskaot. חנות = chanut.", ru: "Сделки = iskaot. Магазин = chanut.", en: "Deals = iskaot. Shop = chanut." }
        ],
        solution: [
          { he: "עמודה: iskaot. שורות: chanut = 'rehitim'.", ru: "Столбец: iskaot. Строки: chanut = 'rehitim'.", en: "Column: iskaot. Rows: chanut = 'rehitim'." },
          "select iskaot from shlifot where chanut = 'rehitim'"
        ]
      },
      {
        id: "t-e-4", group: "ex",
        label: { he: "תרגיל 2 — כמה", ru: "Задание 2 — сколько", en: "Exercise 2 — how many" },
        kind: "number",
        text: {
          he: "כמה שורות תחזיר השאילתה של תרגיל 2?",
          ru: "Сколько строк вернёт запрос задания 2?",
          en: "How many rows does the exercise 2 query return?"
        },
        answer: { value: "4" },
        hints: [
          { he: "ספרו את החנויות rehitim בטבלה.", ru: "Посчитай магазины rehitim в таблице.", en: "Count the rehitim shops in the table." }
        ],
        solution: [
          { he: "ערכי iskaot של rehitim: 9, 9, 110, 104.", ru: "Значения iskaot у rehitim: 9, 9, 110, 104.", en: "rehitim iskaot values: 9, 9, 110, 104." },
          { he: "סה״כ 4 שורות.", ru: "Итого 4 строки.", en: "That is 4 rows." }
        ]
      },
      {
        id: "t-o-1", group: "ops",
        label: "and",
        kind: "number",
        text: {
          he: "כמה שורות תחזיר השאילתה השלישית מהשקופית?\n`select * from shlifot where iskaot >= 10 and chanut = 'rehitim'`",
          ru: "Сколько строк вернёт третий запрос со слайда?\n`select * from shlifot where iskaot >= 10 and chanut = 'rehitim'`",
          en: "How many rows does the third query on the slide return?\n`select * from shlifot where iskaot >= 10 and chanut = 'rehitim'`"
        },
        answer: { value: "2" },
        hints: [
          { he: "עם and שני התנאים חייבים להתקיים יחד.", ru: "С and оба условия должны выполняться одновременно.", en: "With and both conditions must hold together." },
          { he: "קחו רק את 4 שורות rehitim ובדקו בכל אחת אם iskaot ≥ 10.", ru: "Возьми только 4 строки rehitim и проверь в каждой iskaot ≥ 10.", en: "Take just the 4 rehitim rows and check iskaot ≥ 10 in each." }
        ],
        solution: [
          { he: "rehitim: 9, 9, 110, 104.", ru: "rehitim: 9, 9, 110, 104.", en: "rehitim: 9, 9, 110, 104." },
          { he: "מתוכן 10 ומעלה: 110, 104.", ru: "Из них 10 и больше: 110, 104.", en: "Of those, 10 or more: 110, 104." },
          { he: "סה״כ 2 שורות.", ru: "Итого 2 строки.", en: "That is 2 rows." }
        ]
      },
      {
        id: "t-o-2", group: "ops",
        label: { he: "or מול and", ru: "or против and", en: "or vs and" },
        kind: "choice",
        text: {
          he: "בשקופית יש אותם שני תנאים פעם עם `or` ופעם עם `and`. איזו שאילתה מחזירה יותר שורות?",
          ru: "На слайде одни и те же два условия: один раз с `or`, другой — с `and`. Какой запрос вернёт больше строк?",
          en: "The slide has the same two conditions once with `or` and once with `and`. Which query returns more rows?"
        },
        options: [
          { he: "זו עם or", ru: "С or", en: "The one with or" },
          { he: "זו עם and", ru: "С and", en: "The one with and" },
          { he: "שתיהן אותו מספר", ru: "Одинаково", en: "Both the same" }
        ],
        answer: { index: 0 },
        hints: [
          { he: "or: מספיק תנאי אחד. and: צריך את שניהם.", ru: "or: хватает одного условия. and: нужны оба.", en: "or: one condition is enough. and: both are needed." }
        ],
        solution: [
          { he: "על טבלת shlifot: עם or — 7 שורות, עם and — 2 שורות.", ru: "На таблице shlifot: с or — 7 строк, с and — 2 строки.", en: "On shlifot: with or — 7 rows, with and — 2 rows." },
          { he: "התשובה: זו עם or.", ru: "Ответ: с or.", en: "Answer: the one with or." }
        ]
      },
      {
        id: "t-k-1", group: "clips",
        label: { he: "מטלה 1", ru: "Шаг 1", en: "Task 1" },
        kind: "choice",
        text: {
          he: "מטלה 1: \"הגדר מסד נתונים ותעבור אליו\". מה עושים?",
          ru: "Шаг 1: «создай базу данных и перейди в неё». Что пишем?",
          en: "Task 1: \"define a database and switch to it\". What do you write?"
        },
        options: [
          "`create table shtuyot`",
          "`create database shtuyot` + `use shtuyot`",
          "`use shtuyot` + `create database shtuyot`",
          "`select * from shtuyot`"
        ],
        answer: { index: 1 },
        hints: [
          { he: "אי אפשר לעבור למסד שעוד לא קיים.", ru: "Нельзя перейти в базу, которой ещё нет.", en: "You cannot switch to a database that does not exist yet." }
        ],
        solution: [
          { he: "קודם יוצרים, אחר כך עוברים:", ru: "Сначала создаём, потом переходим:", en: "Create first, then switch:" },
          "create database shtuyot",
          "use shtuyot"
        ]
      },
      {
        id: "t-k-2", group: "clips",
        label: { he: "כמה עמודות", ru: "Сколько столбцов", en: "How many columns" },
        kind: "number",
        text: {
          he: "כמה עמודות צריכות להיות בטבלה לפי דרישות החברה?",
          ru: "Сколько столбцов должно быть в таблице по требованиям компании?",
          en: "How many columns must the table have according to the company's needs?"
        },
        answer: { value: "6" },
        hints: [
          { he: "כל פריט ברשימה של החברה הוא עמודה.", ru: "Каждый пункт в списке компании — это столбец.", en: "Each item in the company's list is a column." }
        ],
        solution: [
          { he: "מספר אומן, שם אומן, שם הקטע, שניות, לינק, לייקים.", ru: "Номер артиста, имя артиста, название клипа, секунды, ссылка, лайки.", en: "Artist number, artist name, clip name, seconds, link, likes." },
          { he: "סה״כ 6 עמודות.", ru: "Итого 6 столбцов.", en: "That is 6 columns." }
        ]
      },
      {
        id: "t-k-3", group: "clips",
        label: { he: "לייקים", ru: "Лайки", en: "Likes" },
        kind: "text",
        text: {
          he: "איזה סוג נתונים מתאים לעמודת הלייקים?",
          ru: "Какой тип данных подходит для столбца лайков?",
          en: "Which data type fits the likes column?"
        },
        answer: { accept: ["int", "integer"] },
        hints: [
          { he: "מספר הלייקים הוא תמיד מספר שלם (גם 0).", ru: "Количество лайков — всегда целое число (и 0 тоже).", en: "The number of likes is always a whole number (0 included)." }
        ],
        solution: [
          { he: "מספר שלם → `int`. לקטע בלי לייקים מכניסים 0.", ru: "Целое число → `int`. Для клипа без лайков вставляем 0.", en: "A whole number → `int`. For a clip with no likes insert 0." },
          "likes int"
        ]
      },
      {
        id: "t-k-4", group: "clips",
        label: { he: "מטלה 5", ru: "Шаг 5", en: "Task 5" },
        kind: "choice",
        text: {
          he: "מטלה 5: שם האומן ומספר הלייקים של כל הרשומות. בטבלה clips העמודות נקראות artist_name ו־likes. איזו שאילתה?",
          ru: "Шаг 5: имя артиста и количество лайков всех записей. В таблице clips столбцы называются artist_name и likes. Какой запрос?",
          en: "Task 5: the artist name and number of likes for all records. In the clips table the columns are artist_name and likes. Which query?"
        },
        options: [
          "`select * from clips`",
          "`select artist_name, likes from clips where likes > 0`",
          "`select artist_name, likes from clips`",
          "`select artist_name and likes from clips`"
        ],
        answer: { index: 2 },
        hints: [
          { he: "\"כל הרשומות\" — האם צריך where?", ru: "«Все записи» — нужен ли where?", en: "\"All records\" — do you need a where?" },
          { he: "בין עמודות ב־select שמים פסיק, לא and.", ru: "Между столбцами в select ставят запятую, а не and.", en: "Columns in select are separated by a comma, not and." }
        ],
        solution: [
          { he: "שתי עמודות אחרי select, עם פסיק ביניהן. בלי where — כל השורות.", ru: "Два столбца после select через запятую. Без where — все строки.", en: "Two columns after select, with a comma. No where — all rows." },
          "select artist_name, likes from clips"
        ]
      }
    ],

    ai: [
      {
        id: "ai-1", level: 1,
        label: "and",
        kind: "choice",
        text: {
          he: "תנאי אחד אמת והשני שקר. מה התוצאה של `and` ביניהם?",
          ru: "Одно условие истинно, другое ложно. Каков результат `and` между ними?",
          en: "One condition is true and the other false. What is the result of `and`?"
        },
        options: [
          { he: "אמת", ru: "Истина", en: "True" },
          { he: "שקר", ru: "Ложь", en: "False" }
        ],
        answer: { index: 1 },
        hints: [
          { he: "and צריך ששניהם יהיו אמת.", ru: "and требует, чтобы оба были истинны.", en: "and needs both to be true." }
        ],
        solution: [
          "true and false = false",
          { he: "השורה לא תיכנס לתוצאה.", ru: "Строка не попадёт в результат.", en: "The row will not be in the result." }
        ]
      },
      {
        id: "ai-2", level: 1,
        label: { he: "לפחות אחד", ru: "Хотя бы одно", en: "At least one" },
        kind: "text",
        text: {
          he: "איזו מילה מחברת שני תנאים כך שמספיק שאחד מהם אמת?",
          ru: "Какое слово соединяет два условия так, что хватает одного истинного?",
          en: "Which word joins two conditions so that one true condition is enough?"
        },
        answer: { accept: ["or"] },
        hints: [
          { he: "בעברית: \"או\".", ru: "По-русски «или».", en: "It is the partner of and in the truth table." }
        ],
        solution: [
          "where iskaot >= 10 or chanut = 'rehitim'",
          { he: "התשובה: `or`.", ru: "Ответ: `or`.", en: "Answer: `or`." }
        ]
      },
      {
        id: "ai-3", level: 1,
        label: "not",
        kind: "choice",
        text: {
          he: "איזה תנאי בוחר בדיוק את אותן שורות כמו `not iskaot >= 10`?",
          ru: "Какое условие выбирает ровно те же строки, что `not iskaot >= 10`?",
          en: "Which condition picks exactly the same rows as `not iskaot >= 10`?"
        },
        options: ["`iskaot > 10`", "`iskaot <= 10`", "`iskaot < 10`", "`iskaot = 10`"],
        answer: { index: 2 },
        hints: [
          { he: "not הופך: מה ההפך של \"10 ומעלה\"?", ru: "not переворачивает: что противоположно «10 и больше»?", en: "not flips it: what is the opposite of \"10 or more\"?" },
          { he: "שימו לב: 10 עצמו שייך ל־\"10 ומעלה\".", ru: "Внимание: само 10 относится к «10 и больше».", en: "Careful: 10 itself belongs to \"10 or more\"." }
        ],
        solution: [
          { he: "`iskaot >= 10` כולל את 10. ההפך — כל מה שקטן מ־10.", ru: "`iskaot >= 10` включает 10. Противоположное — всё, что меньше 10.", en: "`iskaot >= 10` includes 10. The opposite is everything below 10." },
          "not iskaot >= 10  ⇔  iskaot < 10"
        ]
      },
      {
        id: "ai-4", level: 2,
        label: "moshe and",
        kind: "number",
        text: {
          he: "כמה שורות תחזיר השאילתה על טבלת shlifot?\n`select * from shlifot where menahel = 'moshe' and iskaot >= 10`",
          ru: "Сколько строк вернёт запрос на таблице shlifot?\n`select * from shlifot where menahel = 'moshe' and iskaot >= 10`",
          en: "How many rows does the query return on shlifot?\n`select * from shlifot where menahel = 'moshe' and iskaot >= 10`"
        },
        answer: { value: "3" },
        hints: [
          { he: "קחו את 5 השורות של moshe ובדקו בכל אחת את iskaot.", ru: "Возьми 5 строк moshe и проверь в каждой iskaot.", en: "Take the 5 moshe rows and check iskaot in each." },
          { he: "ל־moshe: 9, 9, 400, 55, 104.", ru: "У moshe: 9, 9, 400, 55, 104.", en: "moshe has: 9, 9, 400, 55, 104." }
        ],
        solution: [
          { he: "iskaot של moshe: 9, 9, 400, 55, 104.", ru: "iskaot у moshe: 9, 9, 400, 55, 104.", en: "moshe's iskaot: 9, 9, 400, 55, 104." },
          { he: "10 ומעלה: 400 (chalav), 55 (ginot), 104 (rehitim).", ru: "10 и больше: 400 (chalav), 55 (ginot), 104 (rehitim).", en: "10 or more: 400 (chalav), 55 (ginot), 104 (rehitim)." },
          { he: "סה״כ 3 שורות.", ru: "Итого 3 строки.", en: "That is 3 rows." }
        ]
      },
      {
        id: "ai-5", level: 2,
        label: "shayish or avi",
        kind: "number",
        text: {
          he: "כמה שורות תחזיר השאילתה?\n`select * from shlifot where chanut = 'shayish' or menahel = 'avi'`",
          ru: "Сколько строк вернёт запрос?\n`select * from shlifot where chanut = 'shayish' or menahel = 'avi'`",
          en: "How many rows does the query return?\n`select * from shlifot where chanut = 'shayish' or menahel = 'avi'`"
        },
        answer: { value: "3" },
        hints: [
          { he: "יש 2 שורות shayish ו־2 שורות avi. אולי יש שורה ששייכת לשתי הקבוצות?", ru: "Есть 2 строки shayish и 2 строки avi. Может, какая-то строка входит в обе группы?", en: "There are 2 shayish rows and 2 avi rows. Is any row in both groups?" }
        ],
        solution: [
          { he: "shayish: vered 2 kfar saba (avi), ezra 4 dimona (riki).", ru: "shayish: vered 2 kfar saba (avi), ezra 4 dimona (riki).", en: "shayish: vered 2 kfar saba (avi), ezra 4 dimona (riki)." },
          { he: "avi: hazagot, ו־shayish ב־vered 2 kfar saba — שכבר נספרה.", ru: "avi: hazagot и shayish на vered 2 kfar saba — она уже посчитана.", en: "avi: hazagot, and the shayish at vered 2 kfar saba — already counted." },
          "2 + 2 − 1 = 3"
        ]
      },
      {
        id: "ai-6", level: 2,
        label: "not rehitim",
        kind: "number",
        text: {
          he: "כמה שורות תחזיר השאילתה?\n`select * from shlifot where not chanut = 'rehitim'`",
          ru: "Сколько строк вернёт запрос?\n`select * from shlifot where not chanut = 'rehitim'`",
          en: "How many rows does the query return?\n`select * from shlifot where not chanut = 'rehitim'`"
        },
        answer: { value: "7" },
        hints: [
          { he: "not הופך את התנאי: כל מה שאינו rehitim.", ru: "not переворачивает условие: всё, что не rehitim.", en: "not flips the condition: everything that is not rehitim." },
          { he: "בטבלה 11 שורות, ו־4 מהן rehitim.", ru: "В таблице 11 строк, и 4 из них — rehitim.", en: "The table has 11 rows, 4 of them rehitim." }
        ],
        solution: [
          { he: "כל השורות פחות שורות rehitim:", ru: "Все строки минус строки rehitim:", en: "All rows minus the rehitim rows:" },
          "11 − 4 = 7"
        ]
      },
      {
        id: "ai-7", level: 2,
        label: { he: "טווח", ru: "Диапазон", en: "Range" },
        kind: "number",
        text: {
          he: "כמה שורות תחזיר השאילתה?\n`select * from shlifot where iskaot > 50 and iskaot < 200`",
          ru: "Сколько строк вернёт запрос?\n`select * from shlifot where iskaot > 50 and iskaot < 200`",
          en: "How many rows does the query return?\n`select * from shlifot where iskaot > 50 and iskaot < 200`"
        },
        answer: { value: "3" },
        hints: [
          { he: "צריך מספר שגדול מ־50 וגם קטן מ־200 — \"בין\".", ru: "Нужно число больше 50 и одновременно меньше 200 — «между».", en: "The number must be above 50 and also below 200 — \"between\"." },
          { he: "הערכים: 9, 9, 400, 8, 8, 8, 1, 110, 55, 18, 104.", ru: "Значения: 9, 9, 400, 8, 8, 8, 1, 110, 55, 18, 104.", en: "The values: 9, 9, 400, 8, 8, 8, 1, 110, 55, 18, 104." }
        ],
        solution: [
          { he: "מעל 50: 400, 110, 55, 104. מתוכם מתחת ל־200: 110, 55, 104.", ru: "Больше 50: 400, 110, 55, 104. Из них меньше 200: 110, 55, 104.", en: "Above 50: 400, 110, 55, 104. Of those below 200: 110, 55, 104." },
          { he: "400 נופל בתנאי השני. סה״כ 3 שורות.", ru: "400 не проходит второе условие. Итого 3 строки.", en: "400 fails the second condition. That is 3 rows." }
        ]
      },
      {
        id: "ai-8", level: 3,
        label: { he: "כתבו את השאילתה", ru: "Составь запрос", en: "Build the query" },
        kind: "choice",
        text: {
          he: "רוצים את הכתובות של חנויות rehitim שיש להן יותר מ־100 עסקאות. איזו שאילתה?",
          ru: "Нужны адреса магазинов rehitim, у которых больше 100 сделок. Какой запрос?",
          en: "You want the addresses of rehitim shops with more than 100 deals. Which query?"
        },
        options: [
          "`select ktovet from shlifot where chanut = 'rehitim' or iskaot > 100`",
          "`select ktovet from shlifot where chanut = 'rehitim' and iskaot > 100`",
          "`select * from shlifot where chanut = 'rehitim' and iskaot > 100`",
          "`select ktovet from shlifot where chanut = 'rehitim' and iskaot >= 100`"
        ],
        answer: { index: 1 },
        hints: [
          { he: "שני התנאים חייבים להתקיים יחד — or או and?", ru: "Оба условия должны выполняться вместе — or или and?", en: "Both must hold together — or or and?" },
          { he: "\"יותר מ־100\" — האם 100 עצמו נכלל?", ru: "«Больше 100» — входит ли само 100?", en: "\"More than 100\" — is 100 itself included?" }
        ],
        solution: [
          { he: "עמודה: ktovet. שני תנאים יחד → and. \"יותר מ־100\" → `> 100`.", ru: "Столбец: ktovet. Два условия вместе → and. «Больше 100» → `> 100`.", en: "Column: ktovet. Both conditions → and. \"More than 100\" → `> 100`." },
          "select ktovet from shlifot where chanut = 'rehitim' and iskaot > 100",
          { he: "התוצאה: iris 44 kfar saba, golda meir 89 chadera.", ru: "Результат: iris 44 kfar saba, golda meir 89 chadera.", en: "Result: iris 44 kfar saba, golda meir 89 chadera." }
        ]
      },
      {
        id: "ai-9", level: 3,
        label: { he: "שורה אחת", ru: "Одна строка", en: "One row" },
        kind: "choice",
        text: {
          he: "השורה ('sfarim', 'herzl 55 holon', 'c.yahoo.com', 8, 'shimon') — האם היא תופיע בתוצאה של `where iskaot >= 10 or chanut = 'rehitim'`?",
          ru: "Строка ('sfarim', 'herzl 55 holon', 'c.yahoo.com', 8, 'shimon') — попадёт ли она в результат `where iskaot >= 10 or chanut = 'rehitim'`?",
          en: "Will the row ('sfarim', 'herzl 55 holon', 'c.yahoo.com', 8, 'shimon') appear in the result of `where iskaot >= 10 or chanut = 'rehitim'`?"
        },
        options: [
          { he: "כן", ru: "Да", en: "Yes" },
          { he: "לא", ru: "Нет", en: "No" }
        ],
        answer: { index: 1 },
        hints: [
          { he: "בדקו כל תנאי לבד: 8 ≥ 10? sfarim = rehitim?", ru: "Проверь каждое условие: 8 ≥ 10? sfarim = rehitim?", en: "Check each condition: 8 ≥ 10? sfarim = rehitim?" }
        ],
        solution: [
          "8 >= 10  →  false",
          "'sfarim' = 'rehitim'  →  false",
          "false or false = false",
          { he: "השורה לא תופיע.", ru: "Строка не попадёт.", en: "The row will not appear." }
        ]
      },
      {
        id: "ai-10", level: 2,
        label: { he: "סוג ללינק", ru: "Тип для ссылки", en: "Type for the link" },
        kind: "choice",
        text: {
          he: "בטבלת הקטעים, איזה סוג מתאים לעמודת הלינק?",
          ru: "В таблице клипов какой тип подходит для столбца ссылки?",
          en: "In the clips table, which type fits the link column?"
        },
        options: ["`int`", "`nvarchar(10)`", "`nvarchar(200)`", "`int(200)`"],
        answer: { index: 2 },
        hints: [
          { he: "לינק הוא טקסט, לא מספר.", ru: "Ссылка — текст, а не число.", en: "A link is text, not a number." },
          { he: "כתובת של סרטון היא בדרך כלל יותר מ־10 תווים.", ru: "Адрес видео обычно длиннее 10 символов.", en: "A video address is usually longer than 10 characters." }
        ],
        solution: [
          { he: "טקסט → nvarchar. לינקים ארוכים → מקסימום גדול, למשל 200.", ru: "Текст → nvarchar. Ссылки длинные → большой максимум, например 200.", en: "Text → nvarchar. Links are long → a big maximum, e.g. 200." },
          "link nvarchar(200)"
        ]
      },
      {
        id: "ai-11", level: 3,
        label: { he: "קטעים", ru: "Клипы", en: "Clips" },
        kind: "number",
        text: {
          he: "בטבלה clips יש 4 שורות (seconds, likes):\nקטע 1: 95, 5400 · קטע 2: 34, 0 · קטע 3: 210, 0 · קטע 4: 47, 3100.\nכמה שורות תחזיר `select * from clips where likes = 0 or seconds < 60`?",
          ru: "В таблице clips 4 строки (seconds, likes):\nклип 1: 95, 5400 · клип 2: 34, 0 · клип 3: 210, 0 · клип 4: 47, 3100.\nСколько строк вернёт `select * from clips where likes = 0 or seconds < 60`?",
          en: "The clips table has 4 rows (seconds, likes):\nclip 1: 95, 5400 · clip 2: 34, 0 · clip 3: 210, 0 · clip 4: 47, 3100.\nHow many rows does `select * from clips where likes = 0 or seconds < 60` return?"
        },
        answer: { value: "3" },
        hints: [
          { he: "עברו על כל קטע ובדקו: אין לייקים? או קצר מ־60 שניות?", ru: "Пройди по каждому клипу: нет лайков? или короче 60 секунд?", en: "Go through each clip: no likes? or shorter than 60 seconds?" }
        ],
        solution: [
          { he: "קטע 1: 5400 ≠ 0, 95 ≥ 60 → לא.", ru: "Клип 1: 5400 ≠ 0, 95 ≥ 60 → нет.", en: "Clip 1: 5400 ≠ 0, 95 ≥ 60 → no." },
          { he: "קטע 2: 0 לייקים → כן. קטע 3: 0 לייקים → כן. קטע 4: 47 < 60 → כן.", ru: "Клип 2: 0 лайков → да. Клип 3: 0 лайков → да. Клип 4: 47 < 60 → да.", en: "Clip 2: 0 likes → yes. Clip 3: 0 likes → yes. Clip 4: 47 < 60 → yes." },
          { he: "סה״כ 3 שורות.", ru: "Итого 3 строки.", en: "That is 3 rows." }
        ]
      },
      {
        id: "ai-12", level: 3,
        label: { he: "סכום", ru: "Сумма", en: "Sum" },
        kind: "number",
        text: {
          he: "השאילתה של תרגיל 2 (`select iskaot from shlifot where chanut = 'rehitim'`) מציגה עמודה של מספרים. מה הסכום שלהם?",
          ru: "Запрос задания 2 (`select iskaot from shlifot where chanut = 'rehitim'`) показывает столбец чисел. Какова их сумма?",
          en: "The exercise 2 query (`select iskaot from shlifot where chanut = 'rehitim'`) shows a column of numbers. What is their sum?"
        },
        answer: { value: "232" },
        hints: [
          { he: "קודם מצאו את 4 הערכים של rehitim.", ru: "Сначала найди 4 значения у rehitim.", en: "First find the 4 rehitim values." }
        ],
        solution: [
          { he: "הערכים: 9, 9, 110, 104.", ru: "Значения: 9, 9, 110, 104.", en: "The values: 9, 9, 110, 104." },
          "9 + 9 + 110 + 104 = 232"
        ]
      }
    ]
  }
};

/* Lesson data — format: see the comment at the top of data/lessons/math-2026-11-01.js.
   SQL 05.11: SSMS with the mouse (New Database, Table Designer, Allow Nulls, Edit Top 200 Rows),
   the animals class exercise, recap of select/where/and/or, then in, between, order by, like, top,
   top percent, distinct, and the "targilim perek 1" exercises on the employees table from Moodle.
   Built first around the student's own stuck points (already exists, use, missing comma, = vs like,
   ranges, "all the data" = select *, exact match in in()).
   Every row count was checked in sqlite3: hayot = the 5 rows written in the tasks;
   haovdim = the teacher's 200-row script (counts only, no personal-looking data copied).
   TOP PERCENT rounding and TOP without ORDER BY: per learn.microsoft.com (TOP Transact-SQL). */
window.LESSONS = window.LESSONS || {};
window.LESSONS["sql-2026-11-05"] = {
  "id": "sql-2026-11-05",
  "subject": "sql",
  "date": "2026-11-05",
  "title": {
    "he": "עבודה עם העכבר ב־SSMS, NULL, ופקודות שליפה: in, between, order by, like, top, distinct",
    "ru": "Работа мышкой в SSMS, NULL и команды выборки: in, between, order by, like, top, distinct",
    "en": "SSMS with the mouse, NULL, and query commands: in, between, order by, like, top, distinct"
  },
  "summary": {
    "he": "יצירת מסד וטבלה עם העכבר, Allow Nulls ו־NULL, תרגיל animals, חזרה על where, and, or, ואז in, between, order by, like עם %, top, top percent ו־distinct, ותרגילים על טבלת העובדים.",
    "ru": "Создание базы и таблицы мышкой, Allow Nulls и NULL, упражнение animals, повторение where, and, or, затем in, between, order by, like с %, top, top percent и distinct, и упражнения на таблице работников.",
    "en": "Creating a database and table with the mouse, Allow Nulls and NULL, the animals exercise, a recap of where, and, or, then in, between, order by, like with %, top, top percent and distinct, and exercises on the employees table."
  },
  "timeline": [
    {
      "why": {
        "he": "לפני שיוצרים מסד או טבלה כדאי לבדוק שהם עוד לא קיימים. מכאן מגיעה השגיאה 'already exists': מנסים ליצור שוב משהו שכבר נמצא ברשימה. ו־Refresh נחוץ כי הרשימה לא מתעדכנת לבד.",
        "ru": "Прежде чем создавать базу или таблицу, полезно проверить, что её ещё нет. Отсюда ошибка «already exists»: пытаешься создать то, что уже есть в списке. А Refresh нужен, потому что список сам не обновляется.",
        "en": "Before creating a database or table it helps to check it is not there yet. That is where 'already exists' comes from: you try to create something already in the list. Refresh is needed because the list does not update by itself."
      },
      "kind": "board",
      "time": "12:44",
      "title": {
        "he": "לראות מה כבר יש: Object Explorer",
        "ru": "Посмотреть, что уже есть: Object Explorer",
        "en": "See what already exists: Object Explorer"
      },
      "text": {
        "he": "בצד שמאל ב־SSMS: Databases ← המסד ← Tables ← הטבלה ← Columns.\nכך רואים את כל המסדים, הטבלאות והשדות שכבר יצרנו.\nלא רואים משהו חדש? קליק ימני ← Refresh.",
        "ru": "Слева в SSMS: Databases → база → Tables → таблица → Columns.\nТак видно все базы, таблицы и поля, которые уже создали.\nНе видно нового? Правый клик → Refresh (Обновить).",
        "en": "On the left in SSMS: Databases → the database → Tables → the table → Columns.\nThat shows every database, table and field you already made.\nSomething new is missing? Right-click → Refresh."
      }
    },
    {
      "why": {
        "he": "שתי דרכים לאותה תוצאה. במבחן ובעבודה כותבים קוד, אבל העכבר עוזר להבין מה הקוד עושה ולראות את התוצאה.",
        "ru": "Два пути к одному результату. На проверке и в работе пишут код, но мышка помогает понять, что делает код, и увидеть результат.",
        "en": "Two ways to the same result. Tests and real work use code, but the mouse helps you see what the code does."
      },
      "kind": "board",
      "time": "12:47",
      "title": {
        "he": "מסד נתונים עם העכבר",
        "ru": "База данных мышкой",
        "en": "A database with the mouse"
      },
      "text": {
        "he": "קליק ימני על Databases ← New Database ← שם (למשל Dugma10) ← OK.\nזה בדיוק מה שעושה הפקודה `create database`.",
        "ru": "Правый клик на Databases → New Database → имя (например Dugma10) → OK.\nЭто ровно то же, что команда `create database`.",
        "en": "Right-click Databases → New Database → a name (e.g. Dugma10) → OK.\nIt is exactly what the `create database` command does."
      },
      "math": [
        "create database Dugma10"
      ]
    },
    {
      "why": {
        "he": "זה אותו `create table` רק בטבלה ויזואלית. בעורך 50 ב־nvarchar(50) הוא רק ערך ברירת מחדל: אפשר לשנות (לפי Microsoft עד 4000 או max). nvarchar תופס רק כמה שצריך — כמו שלמדנו ב־29.10 על varchar.",
        "ru": "Это тот же `create table`, только в виде таблички. В конструкторе 50 в nvarchar(50) — просто значение по умолчанию: его можно менять (по Microsoft до 4000 или max). nvarchar занимает только нужное место — как мы проходили 29.10 про varchar.",
        "en": "It is the same `create table`, just as a visual grid. The 50 in nvarchar(50) is only the designer's default: you can change it (per Microsoft up to 4000 or max). nvarchar takes only what it needs, as we saw on 29.10 with varchar."
      },
      "kind": "board",
      "time": "12:50",
      "title": {
        "he": "טבלה עם העכבר: Table Designer",
        "ru": "Таблица мышкой: Table Designer",
        "en": "A table with the mouse: Table Designer"
      },
      "text": {
        "he": "במסד: Tables ← קליק ימני ← New ← Table.\nלכל שדה: Column Name (שם), Data Type (סוג), Allow Nulls.\nשמירה (Save) ← שם הטבלה, למשל Table_1. בלי Refresh לא רואים אותה ברשימה.",
        "ru": "В базе: Tables → правый клик → New → Table.\nДля каждого поля: Column Name (имя), Data Type (тип), Allow Nulls.\nСохранить (Save) → имя таблицы, например Table_1. Без Refresh в списке её не видно.",
        "en": "In the database: Tables → right-click → New → Table.\nFor each field: Column Name, Data Type, Allow Nulls.\nSave → a table name, e.g. Table_1. Without Refresh you will not see it in the list."
      },
      "math": [
        "create table Table_1",
        "(",
        "id int not null,",
        "[first name]",
        "  nvarchar(50),",
        "[last name]",
        "  nvarchar(50),",
        "grade int",
        ")"
      ]
    },
    {
      "why": {
        "he": "למה זה חשוב: 0 אומר \"ידוע, והוא אפס\" (למשל 0 לייקים). NULL אומר \"לא יודעים\". לשדה שמזהה שורה (id) אסור להיות ריק, אחרת אי אפשר למצוא את השורה.",
        "ru": "Почему это важно: 0 значит «известно, и это ноль» (например, 0 лайков). NULL значит «не знаем». Поле, по которому находят строку (id), не должно быть пустым, иначе строку не найти.",
        "en": "Why it matters: 0 means \"known, and it is zero\" (e.g. 0 likes). NULL means \"unknown\". A field that identifies a row (id) must not be empty, or the row cannot be found."
      },
      "kind": "talk",
      "time": "12:51",
      "title": {
        "he": "Allow Nulls: NULL זה לא 0",
        "ru": "Allow Nulls: NULL — это не 0",
        "en": "Allow Nulls: NULL is not 0"
      },
      "text": {
        "he": "NULL = אין ערך בכלל, \"כלום\". זה לא 0 ולא רווח.\nV ב־Allow Nulls = מותר להשאיר את השדה ריק.\nבלי V (כמו ב־id) = חייבים להכניס ערך.",
        "ru": "NULL = значения нет совсем, «ничего». Это не 0 и не пробел.\nГалочка Allow Nulls = поле можно оставить пустым.\nБез галочки (как у id) = значение вводить обязательно.",
        "en": "NULL = no value at all, \"nothing\". It is not 0 and not a space.\nAllow Nulls ticked = the field may stay empty.\nNot ticked (like id) = a value must be entered."
      }
    },
    {
      "why": {
        "he": "טוב להכיר, אבל שאילתה שכתבתם בעצמכם מלמדת יותר: אתם יודעים בדיוק מה ביקשתם. Edit Top 200 נוח לבדוק מהר מה יש בטבלה.",
        "ru": "Полезно знать, но запрос, написанный самому, учит больше: ты точно знаешь, что попросил. Edit Top 200 удобен, чтобы быстро глянуть, что в таблице.",
        "en": "Good to know, but a query you write yourself teaches more: you know exactly what you asked for. Edit Top 200 is handy for a quick look at the table."
      },
      "kind": "board",
      "time": "12:57",
      "title": {
        "he": "Edit Top 200 Rows ו־Select Top 1000 Rows",
        "ru": "Edit Top 200 Rows и Select Top 1000 Rows",
        "en": "Edit Top 200 Rows and Select Top 1000 Rows"
      },
      "text": {
        "he": "קליק ימני על הטבלה:\nEdit Top 200 Rows — להקליד נתונים ישר לטבלה.\nSelect Top 1000 Rows — SSMS כותב בשבילכם שאילתת select ומריץ אותה.\nהמרצה עצמה כותבת שאילתות ביד.",
        "ru": "Правый клик на таблице:\nEdit Top 200 Rows — вводить данные прямо в таблицу.\nSelect Top 1000 Rows — SSMS сам пишет запрос select и запускает его.\nПреподаватель сама пишет запросы руками.",
        "en": "Right-click the table:\nEdit Top 200 Rows — type data straight into the table.\nSelect Top 1000 Rows — SSMS writes a select query for you and runs it.\nThe teacher writes queries by hand."
      }
    },
    {
      "why": {
        "he": "זה כל המסלול מהשיעורים הקודמים בתרגיל אחד: create database ← use ← create table ← insert ← select. כל פקודה מריצים בנפרד: מסמנים אותה ← Execute (F5).",
        "ru": "Это весь путь прошлых уроков в одном упражнении: create database → use → create table → insert → select. Каждую команду запускай отдельно: выдели её → Execute (F5).",
        "en": "It is the whole path of the earlier lessons in one exercise: create database → use → create table → insert → select. Run each command on its own: select it → Execute (F5)."
      },
      "kind": "board",
      "time": "13:01",
      "title": {
        "he": "תרגיל בשיעור: animals",
        "ru": "Упражнение на уроке: animals",
        "en": "Class exercise: animals"
      },
      "text": {
        "he": "מהלוח:\nפתח DB בשם animals\nצור טבלה מהשדות: מספר שבב, חיה, גיל\nהכנס נתונים\nבצע שאילתא על כל הפרטים\nמספר שבב = מספר הצ'יפ של החיה. רווח בשם עמודה אסור, לכן `mispar_shvav` (או `[chip num]` בסוגריים מרובעים).",
        "ru": "С доски (иврит):\nפתח DB בשם animals\nצור טבלה מהשדות: מספר שבב, חיה, גיל\nהכנס נתונים\nבצע שאילתא על כל הפרטים\nТо есть: база animals; таблица с полями «номер чипа», «животное», «возраст»; вставить данные; запрос на всё.\nПробел в имени столбца нельзя, поэтому `mispar_shvav` (или `[chip num]` в квадратных скобках).",
        "en": "From the board:\nפתח DB בשם animals\nצור טבלה מהשדות: מספר שבב, חיה, גיל\nהכנס נתונים\nבצע שאילתא על כל הפרטים\nThat is: database animals; a table with chip number, animal, age; insert data; a query for everything.\nNo spaces in a column name, so `mispar_shvav` (or `[chip num]` in square brackets)."
      },
      "math": [
        "create database animals",
        "",
        "use animals",
        "",
        "create table hayot",
        "(",
        "mispar_shvav int,",
        "haya nvarchar(20),",
        "gil int",
        ")",
        "",
        "insert into hayot values",
        "(1001, 'kelev', 3),",
        "(1002, 'chatul', 5),",
        "(1003, 'arnav', 1),",
        "(1004, 'tuki', 2),",
        "(1005, 'kelev', 7)",
        "",
        "select * from hayot"
      ]
    },
    {
      "why": {
        "he": "כמו תיקייה: אי אפשר ליצור שתי תיקיות עם אותו שם באותו מקום. create יוצר פעם אחת. לכן מריצים חלקים: מסמנים בעכבר רק את השורות שצריך ← F5.",
        "ru": "Как с папкой: нельзя создать две папки с одним именем в одном месте. create создаёт один раз. Поэтому запускают частями: выдели мышкой только нужные строки → F5.",
        "en": "Like a folder: you cannot make two folders with the same name in one place. create makes it once. So run in parts: select only the lines you need → F5."
      },
      "kind": "tip",
      "title": {
        "he": "'already exists' — זה לא תקלה",
        "ru": "«already exists» — это не поломка",
        "en": "'already exists' is not a breakdown"
      },
      "text": {
        "he": "`Database 'animals' already exists` / `There is already an object named 'hayot'`\nהקוד כבר עבד בפעם הראשונה. הרצתם שוב — וה־SQL אומר \"זה כבר קיים\".\nמה לעשות: להריץ רק את מה שעוד לא רץ (למשל רק `select * from hayot`).",
        "ru": "`Database 'animals' already exists` / `There is already an object named 'hayot'`\nКод уже сработал в первый раз. Ты запустил его снова — и SQL говорит «это уже есть».\nЧто делать: запускать только то, что ещё не запускал (например, только `select * from hayot`).",
        "en": "`Database 'animals' already exists` / `There is already an object named 'hayot'`\nThe code already worked the first time. You ran it again and SQL says \"this already exists\".\nWhat to do: run only what has not run yet (e.g. only `select * from hayot`)."
      }
    },
    {
      "why": {
        "he": "SSMS בודק את הקוד לפני שהוא מריץ. כשהכול מסומן יחד, הוא רואה `use animals` עוד לפני שהמסד נוצר — ולכן שגיאה. כשמריצים חלק אחרי חלק, כל שלב כבר מוכן לשלב הבא.",
        "ru": "SSMS проверяет код до запуска. Когда выделено всё сразу, он видит `use animals` ещё до того, как база создана, — отсюда ошибка. Когда запускаешь часть за частью, каждый шаг уже готов для следующего.",
        "en": "SSMS checks the code before running it. When everything is selected at once, it sees `use animals` before the database exists, hence the error. Run it part by part and each step is ready for the next."
      },
      "kind": "tip",
      "title": {
        "he": "למה use, ולמה הוא מסומן באדום",
        "ru": "Зачем use и почему он подчёркнут красным",
        "en": "Why use, and why it is underlined in red"
      },
      "text": {
        "he": "`use animals` בוחר באיזה מסד עובדים. בלעדיו SQL מחפש את הטבלה במסד אחר (master) וכותב `Invalid object name`.\nאותו דבר אפשר לבחור ברשימה ליד Execute. פעם אחת בכל חלון שאילתה חדש.\nאם `use animals` מסומן באדום — המסד עוד לא נוצר. קודם מריצים `create database`, ורק אחר כך `use`.",
        "ru": "`use animals` выбирает, в какой базе работаем. Без него SQL ищет таблицу в другой базе (master) и пишет `Invalid object name`.\nТо же самое можно выбрать в списке рядом с Execute. Один раз в каждом новом окне запроса.\nЕсли `use animals` подчёркнут красным — базы ещё нет. Сначала запусти `create database`, и только потом `use`.",
        "en": "`use animals` picks which database you work in. Without it SQL looks for the table in another database (master) and says `Invalid object name`.\nYou can pick the same in the list next to Execute. Once in every new query window.\nIf `use animals` is underlined in red, the database does not exist yet. Run `create database` first, and only then `use`."
      }
    },
    {
      "why": {
        "he": "כל שאילתה עונה על שתי שאלות: מה להראות (select) ועל מי (where). and מצמצם את התוצאה, or מרחיב אותה.",
        "ru": "Любой запрос отвечает на два вопроса: что показать (select) и про кого (where). and сужает результат, or расширяет.",
        "en": "Every query answers two questions: what to show (select) and about whom (where). and narrows the result, or widens it."
      },
      "kind": "board",
      "time": "13:22",
      "title": {
        "he": "חזרה: עמודות, where, and, or",
        "ru": "Повторение: столбцы, where, and, or",
        "en": "Recap: columns, where, and, or"
      },
      "text": {
        "he": "עמודות אחרי `select` — מופרדות בפסיק.\n`where` בוחר שורות.\n`and` — שני התנאים חייבים להתקיים.\n`or` — מספיק אחד.",
        "ru": "Столбцы после `select` — через запятую.\n`where` выбирает строки.\n`and` — должны выполниться оба условия.\n`or` — хватит одного.",
        "en": "Columns after `select` — separated by commas.\n`where` picks rows.\n`and` — both conditions must hold.\n`or` — one is enough."
      },
      "math": [
        "select haya, gil",
        "from hayot",
        "where gil > 2",
        "and haya = 'kelev'"
      ]
    },
    {
      "why": {
        "he": "ב־SQL מותר לתת לעמודה שם אחר בתוצאה: כותבים את השם החדש מיד אחריה. לכן פסיק שחסר לא שובר את השאילתה — הוא משנה את המשמעות שלה. אחרי כל הרצה בדקו: כמה עמודות ביקשתי, וכמה קיבלתי?",
        "ru": "В SQL можно дать столбцу другое имя в результате: новое имя пишут сразу после него. Поэтому пропущенная запятая не ломает запрос — она меняет его смысл. После каждого запуска проверяй: сколько столбцов просил и сколько получил?",
        "en": "SQL lets you rename a column in the result by writing the new name right after it. So a missing comma does not break the query, it changes its meaning. After each run check: how many columns did I ask for, and how many did I get?"
      },
      "kind": "tip",
      "title": {
        "he": "פסיק אחד שחסר",
        "ru": "Одна пропущенная запятая",
        "en": "One missing comma"
      },
      "text": {
        "he": "`select mishpacha, machlaka prati` — אין פסיק בין machlaka ל־prati.\nSQL לא נותן שגיאה: הוא חושב ש־prati הוא שם חדש לעמודה machlaka. רואים את המחלקה בעמודה בשם prati, ושמות לא רואים בכלל.\nנכון: `select mishpacha, machlaka, prati`",
        "ru": "`select mishpacha, machlaka prati` — нет запятой между machlaka и prati.\nSQL не даёт ошибку: он думает, что prati — новое имя для столбца machlaka. Видишь отдел в столбце с именем prati, а имён нет вовсе.\nПравильно: `select mishpacha, machlaka, prati`",
        "en": "`select mishpacha, machlaka prati` — no comma between machlaka and prati.\nSQL gives no error: it thinks prati is a new name for the machlaka column. You see the department under the name prati and no first names at all.\nCorrect: `select mishpacha, machlaka, prati`"
      }
    },
    {
      "why": {
        "he": "ה־* הוא קיצור של \"כל העמודות\". אם במשימה ביקשו את כל הנתונים ואתם מציגים רק עמודה אחת, השורות נכונות אבל התשובה לא שלמה.",
        "ru": "* — это сокращение «все столбцы». Если просили все данные, а ты показываешь один столбец, строки верные, но ответ неполный.",
        "en": "* is short for \"every column\". If all the data was asked for and you show one column, the rows are right but the answer is incomplete."
      },
      "kind": "tip",
      "title": {
        "he": "\"כל הנתונים\" = select *",
        "ru": "«Все данные» = select *",
        "en": "\"All the data\" = select *"
      },
      "text": {
        "he": "במשימה כתוב \"הצג את כל הנתונים\" ← `select *` (כל העמודות).\n\"הצג רק את...\" ← שמות העמודות אחרי select.\nשם העמודה — בדיוק כמו בכותרת בתוצאה של `select *`, אות באות. אחרת: `Invalid column name`.",
        "ru": "В задании «הצג את כל הנתונים» (покажи все данные) → `select *` (все столбцы).\n«הצג רק את…» (покажи только…) → имена столбцов после select.\nИмя столбца — точно как в заголовке результата `select *`, буква в букву. Иначе: `Invalid column name`.",
        "en": "The task says \"show all the data\" → `select *` (every column).\n\"show only...\" → the column names after select.\nA column name must match the header in the `select *` result letter for letter. Otherwise: `Invalid column name`."
      }
    },
    {
      "why": {
        "he": "קודם בוחרים שורות (where) ורק אז מסדרים את מה שנשאר — לכן order by בסוף. במיון לפי שתי עמודות, השנייה קובעת את הסדר רק בתוך קבוצה עם ערך זהה בראשונה.",
        "ru": "Сначала выбирают строки (where), потом упорядочивают то, что осталось, — поэтому order by в конце. При сортировке по двум столбцам второй решает порядок только внутри группы с одинаковым значением первого.",
        "en": "First pick the rows (where), then order what is left, so order by goes last. When sorting by two columns, the second decides the order only inside a group with the same value in the first."
      },
      "kind": "board",
      "time": "13:25",
      "title": {
        "he": "order by: מיון",
        "ru": "order by: сортировка",
        "en": "order by: sorting"
      },
      "text": {
        "he": "`order by gil` — מהקטן לגדול (asc, ברירת מחדל).\n`order by gil desc` — מהגדול לקטן.\nטקסט ממוין לפי א־ב. אפשר לפי שתי עמודות: `order by machlaka desc, prati`.\nסדר החלקים: select ← from ← where ← order by (תמיד בסוף).",
        "ru": "`order by gil` — от меньшего к большему (asc, по умолчанию).\n`order by gil desc` — от большего к меньшему.\nТекст сортируется по алфавиту. Можно по двум столбцам: `order by machlaka desc, prati`.\nПорядок частей: select → from → where → order by (всегда в конце).",
        "en": "`order by gil` — smallest to largest (asc, the default).\n`order by gil desc` — largest to smallest.\nText sorts alphabetically. Two columns work too: `order by machlaka desc, prati`.\nThe order of parts: select → from → where → order by (always last)."
      },
      "math": [
        "select * from hayot",
        "where gil > 1",
        "order by gil desc"
      ]
    },
    {
      "why": {
        "he": "in חוסך לכתוב `haya = 'kelev' or haya = 'tuki'`. אם חסרות שורות בתוצאה, קודם בודקים את האיות: SQL לא מנחש למה התכוונתם.",
        "ru": "in избавляет от записи `haya = 'kelev' or haya = 'tuki'`. Если в результате не хватает строк, сначала проверь написание: SQL не угадывает, что ты имел в виду.",
        "en": "in saves writing `haya = 'kelev' or haya = 'tuki'`. If rows are missing, check the spelling first: SQL does not guess what you meant."
      },
      "kind": "board",
      "time": "13:26",
      "title": {
        "he": "in ו־not in",
        "ru": "in и not in",
        "en": "in and not in"
      },
      "text": {
        "he": "`where haya in ('kelev', 'tuki')` — כל השורות שבהן הערך שווה לאחד מהרשימה (כמו כמה or).\n`not in` — כל השאר.\nההשוואה מדויקת: `'amav'` במקום `'arnav'` לא ימצא כלום (rn דומה ל־m).",
        "ru": "`where haya in ('kelev', 'tuki')` — все строки, где значение равно любому из списка (как несколько or).\n`not in` — все остальные.\nСравнение точное: `'amav'` вместо `'arnav'` ничего не найдёт (rn похоже на m).",
        "en": "`where haya in ('kelev', 'tuki')` — every row whose value equals any item in the list (like several ors).\n`not in` — all the rest.\nThe match is exact: `'amav'` instead of `'arnav'` finds nothing (rn looks like m)."
      },
      "math": [
        "select * from hayot",
        "where haya in",
        "('kelev', 'tuki')"
      ]
    },
    {
      "why": {
        "he": "לטווח יש שני גבולות, אז צריך שני תנאים. between הוא קיצור שלהם, והקצוות בפנים (>= ו־<=, לא > ו־<).",
        "ru": "У промежутка две границы, значит нужны два условия. between — их сокращение, и края внутри (>= и <=, а не > и <).",
        "en": "A range has two limits, so you need two conditions. between is short for them, and the edges are inside (>= and <=, not > and <)."
      },
      "kind": "board",
      "time": "13:27",
      "title": {
        "he": "between: טווח",
        "ru": "between: промежуток",
        "en": "between: a range"
      },
      "text": {
        "he": "\"בין 10000 ל־12000\" ← `where maskoret between 10000 and 12000`. הקצוות נכללים.\nאותו דבר: `maskoret >= 10000 and maskoret <= 12000`.\n`not between` — מה שמחוץ לטווח.\n`> 10000` לבד זה רק \"מעל 10000\", בלי גבול עליון.",
        "ru": "«От 10000 до 12000» → `where maskoret between 10000 and 12000`. Края входят.\nТо же самое: `maskoret >= 10000 and maskoret <= 12000`.\n`not between` — всё, что вне промежутка.\nОдно `> 10000` — это только «больше 10000», без верхней границы.",
        "en": "\"Between 10000 and 12000\" → `where maskoret between 10000 and 12000`. The edges are included.\nThe same: `maskoret >= 10000 and maskoret <= 12000`.\n`not between` — everything outside the range.\n`> 10000` alone is only \"above 10000\", with no upper limit."
      },
      "math": [
        "select * from hayot",
        "where gil between 2 and 5"
      ]
    },
    {
      "why": {
        "he": "לפעמים יודעים רק חלק מהנתונים. כאן רואים שוב למה NULL שונה מ־0: לחיה החדשה אין גיל ידוע, לא \"גיל 0\". אם העמודה בלי Allow Nulls — insert כזה ייכשל.",
        "ru": "Иногда известна только часть данных. Тут снова видно, чем NULL отличается от 0: у нового животного возраст неизвестен, а не «0 лет». Если у столбца нет Allow Nulls — такой insert не пройдёт.",
        "en": "Sometimes only part of the data is known. Here again NULL differs from 0: the new animal's age is unknown, not \"age 0\". If the column has no Allow Nulls, such an insert fails."
      },
      "kind": "board",
      "time": "13:29",
      "title": {
        "he": "insert רק לחלק מהעמודות",
        "ru": "insert только в часть столбцов",
        "en": "insert into some columns only"
      },
      "text": {
        "he": "`insert into hayot (haya) values ('dag')`\nאחרי שם הטבלה — בסוגריים רק העמודות שממלאים. בשאר העמודות יהיה NULL.\nהשורה החדשה מופיעה בסוף הטבלה.\nבשיעור ה־insert הזה נתן שגיאה על שם עמודה. סיבה נפוצה: השם לא זהה אות באות (למשל רווח מיותר). בדקו ב־Columns.",
        "ru": "`insert into hayot (haya) values ('dag')`\nПосле имени таблицы — в скобках только те столбцы, которые заполняем. В остальных будет NULL.\nНовая строка появляется в конце таблицы.\nНа уроке такой insert выдал ошибку про имя столбца. Частая причина: имя не совпадает буква в букву (например, лишний пробел). Проверь в Columns.",
        "en": "`insert into hayot (haya) values ('dag')`\nAfter the table name, in brackets, only the columns you fill. The rest get NULL.\nThe new row appears at the end of the table.\nIn class this insert gave a column-name error. A common cause: the name is not identical letter for letter (e.g. an extra space). Check under Columns."
      },
      "math": [
        "insert into hayot (haya)",
        "values ('dag')"
      ]
    },
    {
      "why": {
        "he": "אימייל שלם אף פעם לא שווה למילה 'gmail' — הוא רק מכיל אותה. לכן צריך תבנית ולא שוויון. איפה ש־% חסר, הטקסט חייב להתחיל או להיגמר בדיוק ככה.",
        "ru": "Целый адрес никогда не равен слову 'gmail' — он только содержит его. Поэтому нужен шаблон, а не равенство. Где % нет, текст обязан начинаться или кончаться ровно так.",
        "en": "A whole email is never equal to the word 'gmail', it only contains it. So you need a pattern, not equality. Where there is no %, the text must start or end exactly like that."
      },
      "kind": "board",
      "time": "13:37",
      "title": {
        "he": "like ו־%",
        "ru": "like и %",
        "en": "like and %"
      },
      "text": {
        "he": "`=` — שווה בדיוק. `doal = 'gmail'` לא ימצא את `smeier@gmail.com`.\n`like` עם `%` (= \"כל דבר כאן\"):\n`like 'k%'` — מתחיל ב־k\n`like '%gmail.com'` — נגמר ב־gmail.com\n`like '%gmail%'` — gmail בכל מקום\n`not like` — ההפך.",
        "ru": "`=` — равно точно. `doal = 'gmail'` не найдёт `smeier@gmail.com`.\n`like` с `%` (= «здесь что угодно»):\n`like 'k%'` — начинается на k\n`like '%gmail.com'` — кончается на gmail.com\n`like '%gmail%'` — gmail где угодно\n`not like` — наоборот.",
        "en": "`=` means exactly equal. `doal = 'gmail'` will not find `smeier@gmail.com`.\n`like` with `%` (= \"anything here\"):\n`like 'k%'` — starts with k\n`like '%gmail.com'` — ends with gmail.com\n`like '%gmail%'` — gmail anywhere\n`not like` — the opposite."
      },
      "math": [
        "select doal from haovdim",
        "where doal like '%gmail%'"
      ]
    },
    {
      "why": {
        "he": "בלי order by, לפי Microsoft, top מחזיר שורות בסדר לא מוגדר — לכן בשיעור התוצאה הפתיעה. כדי לקבל \"הכי גבוהים\" או \"הכי נמוכים\" תמיד מוסיפים order by.",
        "ru": "Без order by, по документации Microsoft, top возвращает строки в неопределённом порядке — поэтому на уроке результат удивил. Чтобы получить «самые большие» или «самые маленькие», всегда добавляй order by.",
        "en": "Without order by, per Microsoft's docs, top returns rows in an undefined order, which is why the result surprised us in class. To get \"the highest\" or \"the lowest\", always add order by."
      },
      "kind": "board",
      "time": "14:54",
      "title": {
        "he": "top: רק השורות הראשונות",
        "ru": "top: только первые строки",
        "en": "top: only the first rows"
      },
      "text": {
        "he": "`select top 4 * from shlifot` — רק 4 השורות הראשונות.\nעם `order by` — 4 הראשונות לפי המיון:\n`select top 3 * from haovdim order by maskoret desc` = שלוש המשכורות הגבוהות ביותר.",
        "ru": "`select top 4 * from shlifot` — только 4 первые строки.\nС `order by` — 4 первые по сортировке:\n`select top 3 * from haovdim order by maskoret desc` = три самые большие зарплаты.",
        "en": "`select top 4 * from shlifot` — only the first 4 rows.\nWith `order by` — the first 4 in the sorted order:\n`select top 3 * from haovdim order by maskoret desc` = the three highest salaries."
      },
      "math": [
        "select top 3 *",
        "from haovdim",
        "order by maskoret desc"
      ]
    },
    {
      "why": {
        "he": "percent מתייחס למספר השורות בתוצאה, לא לערכים שבתוכן. בטבלה של 11 שורות: 40% = 4.4 ← 5 שורות.",
        "ru": "percent относится к количеству строк в результате, а не к значениям в них. В таблице из 11 строк: 40% = 4.4 → 5 строк.",
        "en": "percent is about the number of rows in the result, not the values in them. In an 11-row table: 40% = 4.4 → 5 rows."
      },
      "kind": "board",
      "time": "15:00",
      "title": {
        "he": "top ... percent",
        "ru": "top ... percent",
        "en": "top ... percent"
      },
      "text": {
        "he": "`select top 40 percent * from shlifot order by iskaot`\n40 אחוז מהשורות (לא מהעסקאות!).\nב־200 שורות: 40% = 80 שורות. אם יוצא שבר — לפי Microsoft מעגלים למעלה.",
        "ru": "`select top 40 percent * from shlifot order by iskaot`\n40 процентов строк (не сделок!).\nИз 200 строк: 40% = 80 строк. Если выходит дробь — по Microsoft округляют вверх.",
        "en": "`select top 40 percent * from shlifot order by iskaot`\n40 percent of the rows (not of the deals!).\nOut of 200 rows: 40% = 80 rows. A fraction is rounded up, per Microsoft."
      }
    },
    {
      "why": {
        "he": "distinct עונה על שאלה \"אילו ערכים בכלל יש?\" — למשל אילו מחלקות יש לעובדים שמרוויחים מעל 19000. בלי distinct אותה מחלקה תחזור כמה פעמים.",
        "ru": "distinct отвечает на вопрос «какие значения вообще есть?» — например, в каких отделах работают те, кто получает больше 19000. Без distinct один отдел повторится много раз.",
        "en": "distinct answers \"which values exist at all?\" — for example, which departments have people earning over 19000. Without distinct the same department repeats many times."
      },
      "kind": "board",
      "time": "15:02",
      "title": {
        "he": "distinct: בלי כפילויות",
        "ru": "distinct: без повторов",
        "en": "distinct: no duplicates"
      },
      "text": {
        "he": "`select distinct chanut from shlifot -- no duplications!`\nכל חנות מופיעה פעם אחת, גם אם יש לה הרבה שורות.\nמהלוח: `select ktovet, email from shlifot where email like '%@%' and chanut = 'rehitim'`",
        "ru": "`select distinct chanut from shlifot -- no duplications!`\nКаждый магазин один раз, даже если у него много строк.\nС доски: `select ktovet, email from shlifot where email like '%@%' and chanut = 'rehitim'`",
        "en": "`select distinct chanut from shlifot -- no duplications!`\nEach shop appears once, even if it has many rows.\nFrom the board: `select ktovet, email from shlifot where email like '%@%' and chanut = 'rehitim'`"
      },
      "math": [
        "select distinct haya",
        "from hayot"
      ]
    },
    {
      "why": {
        "he": "על 200 שורות כבר אי אפשר לבדוק בעיניים — ורק שם רואים למה צריך where, order by, top ו־distinct. כל תרגיל משתמש בפקודה אחת או שתיים מהשיעור.",
        "ru": "На 200 строках глазами уже не проверишь — и именно тут видно, зачем нужны where, order by, top и distinct. Каждое упражнение использует одну-две команды урока.",
        "en": "With 200 rows you cannot check by eye any more, and that is where where, order by, top and distinct prove their worth. Each exercise uses one or two commands from the lesson."
      },
      "kind": "talk",
      "time": "15:04",
      "title": {
        "he": "תרגילים: טבלת עובדים",
        "ru": "Упражнения: таблица работников",
        "en": "Exercises: the employees table"
      },
      "text": {
        "he": "המרצה העלתה ל־Moodle מסד גדול: טבלת עובדים (haovdim). להעתיק את הקוד ל־SSMS, להריץ, ולפתור את כל התרגילים מהקובץ \"targilim perek 1\" (1.1–1.12 על המסך). בשיעור פתרו יחד בחדרים.\nהתרגילים — למטה בקבוצה \"תרגילים פרק 1\".",
        "ru": "Преподаватель загрузила в Moodle большую базу: таблица работников (haovdim). Скопировать код в SSMS, запустить и решить все упражнения из файла «targilim perek 1» (1.1–1.12 на экране). На уроке решали вместе в комнатах.\nУпражнения — ниже в группе «Упражнения, глава 1».",
        "en": "The teacher uploaded a big database to Moodle: the employees table (haovdim). Copy the code into SSMS, run it, and solve every exercise from the file \"targilim perek 1\" (1.1–1.12 on screen). In class people solved them together in rooms.\nThe exercises are below in the group \"Exercises, chapter 1\"."
      }
    }
  ],
  "review": [
    {
      "title": {
        "he": "סדר החלקים",
        "ru": "Порядок частей",
        "en": "Order of parts"
      },
      "text": {
        "he": "`select` ← `from` ← `where` ← `order by`. top ו־distinct באים מיד אחרי select.",
        "ru": "`select` → `from` → `where` → `order by`. top и distinct — сразу после select.",
        "en": "`select` → `from` → `where` → `order by`. top and distinct go right after select."
      }
    },
    {
      "title": {
        "he": "= או like",
        "ru": "= или like",
        "en": "= or like"
      },
      "text": {
        "he": "`=` — בדיוק. `like` עם `%` — תבנית: מתחיל ב־, נגמר ב־, מכיל.",
        "ru": "`=` — точно. `like` с `%` — шаблон: начинается, кончается, содержит.",
        "en": "`=` — exact. `like` with `%` — a pattern: starts with, ends with, contains."
      }
    },
    {
      "title": {
        "he": "in ו־between",
        "ru": "in и between",
        "en": "in and between"
      },
      "text": {
        "he": "`in (...)` — אחד מהרשימה, התאמה מדויקת. `between a and b` — טווח, הקצוות בפנים.",
        "ru": "`in (...)` — одно из списка, точное совпадение. `between a and b` — промежуток, края включены.",
        "en": "`in (...)` — one of the list, exact match. `between a and b` — a range, edges included."
      }
    },
    {
      "title": {
        "he": "NULL",
        "ru": "NULL",
        "en": "NULL"
      },
      "text": {
        "he": "NULL = אין ערך, לא 0. insert לחלק מהעמודות משאיר NULL בשאר.",
        "ru": "NULL = значения нет, это не 0. insert в часть столбцов оставляет NULL в остальных.",
        "en": "NULL = no value, not 0. An insert into some columns leaves NULL in the rest."
      }
    },
    {
      "title": {
        "he": "top ו־distinct",
        "ru": "top и distinct",
        "en": "top and distinct"
      },
      "text": {
        "he": "`top 3` + `order by ... desc` = שלושת הגבוהים. `distinct` — כל ערך פעם אחת.",
        "ru": "`top 3` + `order by ... desc` = три самых больших. `distinct` — каждое значение один раз.",
        "en": "`top 3` + `order by ... desc` = the three highest. `distinct` — each value once."
      }
    }
  ],
  "tasks": {
    "groups": {
      "animals": {
        "he": "תרגיל בשיעור: animals",
        "ru": "Упражнение на уроке: animals",
        "en": "Class exercise: animals"
      },
      "lesson": {
        "he": "פקודות השיעור על טבלת hayot",
        "ru": "Команды урока на таблице hayot",
        "en": "The lesson's commands on the hayot table"
      },
      "perek1": {
        "he": "תרגילים פרק 1 (טבלת עובדים)",
        "ru": "Упражнения, глава 1 (таблица работников)",
        "en": "Exercises, chapter 1 (employees table)"
      }
    },
    "teacher": [
      {
        "id": "t-a-1",
        "group": "animals",
        "label": {
          "he": "טבלה",
          "ru": "Таблица",
          "en": "Table"
        },
        "kind": "choice",
        "text": {
          "he": "איזה קוד יוצר נכון את הטבלה מהתרגיל (מספר שבב, חיה, גיל)?",
          "ru": "Какой код правильно создаёт таблицу из упражнения (номер чипа, животное, возраст)?",
          "en": "Which code correctly creates the exercise table (chip number, animal, age)?"
        },
        "example": {
          "he": "טבלת פירות: `create table perot (mispar_pri int, shem nvarchar(20), kamut int)`. הכללים: בשם עמודה אין רווחים (במקום רווח `_`), לכל עמודה יש טיפוס, והעמודות מופרדות בפסיקים.",
          "ru": "Таблица фруктов: `create table perot (mispar_pri int, shem nvarchar(20), kamut int)`. Правила: в имени столбца нет пробелов (вместо пробела `_`), у каждого столбца есть тип, столбцы разделены запятыми.",
          "en": "A fruit table: `create table perot (mispar_pri int, shem nvarchar(20), kamut int)`. The rules: no spaces in a column name (use `_`), every column has a type, columns are separated by commas."
        },
        "options": [
          "`create table hayot (mispar shvav int, haya nvarchar(20), gil int)`",
          "`create table hayot (mispar_shvav int haya nvarchar(20) gil int)`",
          "`create table hayot (mispar_shvav int, haya nvarchar(20), gil int)`",
          "`create table hayot (mispar_shvav, haya, gil)`"
        ],
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "רווח בשם עמודה אסור בלי סוגריים מרובעים.",
            "ru": "Пробел в имени столбца без квадратных скобок нельзя.",
            "en": "A space in a column name is not allowed without square brackets."
          },
          {
            "he": "בין העמודות שמים פסיק.",
            "ru": "Между столбцами ставят запятую.",
            "en": "Columns are separated by commas."
          }
        ],
        "solution": [
          {
            "he": "שם בלי רווח, סוג לכל עמודה, פסיק ביניהן:",
            "ru": "Имя без пробела, тип у каждого столбца, запятые между ними:",
            "en": "A name without spaces, a type for each column, commas between:"
          },
          "create table hayot",
          "(",
          "mispar_shvav int,",
          "haya nvarchar(20),",
          "gil int",
          ")"
        ]
      },
      {
        "id": "t-a-2",
        "group": "animals",
        "label": {
          "he": "שוב",
          "ru": "Снова",
          "en": "Again"
        },
        "kind": "choice",
        "text": {
          "he": "הרצת את כל הקוד בפעם השנייה וקיבלת `Database 'animals' already exists`. מה זה אומר?",
          "ru": "Ты запустил весь код второй раз и получил `Database 'animals' already exists`. Что это значит?",
          "en": "You ran all the code a second time and got `Database 'animals' already exists`. What does it mean?"
        },
        "example": {
          "he": "הרצת בפעם השנייה `create table perot (...)` וקיבלת `There is already an object named 'perot'`. הטבלה נוצרה כבר בפעם הראשונה, ואין צורך ליצור אותה שוב. ממשיכים: מסמנים ומריצים רק את השורות הבאות.",
          "ru": "Ты второй раз запустил `create table perot (...)` и получил `There is already an object named 'perot'`. Таблица создалась ещё в первый раз, второй раз её создавать не нужно. Дальше выделяешь и запускаешь только следующие строки.",
          "en": "You ran `create table perot (...)` a second time and got `There is already an object named 'perot'`. The table was already created the first time, so there is no need to create it again. Next, select and run only the following lines."
        },
        "options": [
          {
            "he": "הקוד שבור וצריך למחוק את SSMS",
            "ru": "Код сломан, надо удалять SSMS",
            "en": "The code is broken and SSMS must be removed"
          },
          {
            "he": "המסד כבר נוצר בפעם הראשונה — מריצים רק את החלק הבא",
            "ru": "База уже создана в первый раз — запускаем только следующую часть",
            "en": "The database was already created the first time — run only the next part"
          },
          {
            "he": "צריך לכתוב go אחרי כל שורה",
            "ru": "Нужно писать go после каждой строки",
            "en": "You must write go after every line"
          }
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "מה create database עשה בפעם הראשונה?",
            "ru": "Что create database сделал в первый раз?",
            "en": "What did create database do the first time?"
          }
        ],
        "solution": [
          {
            "he": "בפעם הראשונה המסד נוצר. create לא יכול ליצור אותו שוב.",
            "ru": "В первый раз база создалась. create не может создать её снова.",
            "en": "The first time the database was created. create cannot create it again."
          },
          {
            "he": "להריץ רק את מה שעוד לא רץ: לסמן ← F5.",
            "ru": "Запускать только то, что ещё не запускал: выделить → F5.",
            "en": "Run only what has not run yet: select → F5."
          }
        ]
      },
      {
        "id": "t-a-3",
        "group": "animals",
        "label": {
          "he": "use",
          "ru": "use",
          "en": "use"
        },
        "kind": "text",
        "text": {
          "he": "איזו פקודה בוחרת את המסד animals לעבודה? (כתבו את השורה)",
          "ru": "Какая команда выбирает базу animals для работы? (напиши строку)",
          "en": "Which command selects the animals database to work in? (write the line)"
        },
        "example": {
          "he": "כדי לעבוד עם מסד הנתונים shop כותבים `use shop` ומריצים את השורה. מעכשיו כל השאילתות הולכות ל־shop.",
          "ru": "Чтобы работать с базой shop, пишут `use shop` и запускают эту строку. После этого все запросы идут в базу shop.",
          "en": "To work with the database shop, write `use shop` and run that line. After that every query goes to shop."
        },
        "answer": {
          "accept": [
            "use animals",
            "use animals;"
          ]
        },
        "hints": [
          {
            "he": "שלוש אותיות, ואחריהן שם המסד.",
            "ru": "Три буквы, а за ними имя базы.",
            "en": "Three letters, then the database name."
          }
        ],
        "solution": [
          "use animals",
          {
            "he": "בלי זה SQL מחפש את הטבלה ב־master ← Invalid object name.",
            "ru": "Без неё SQL ищет таблицу в master → Invalid object name.",
            "en": "Without it SQL looks in master → Invalid object name."
          }
        ]
      },
      {
        "id": "t-a-4",
        "group": "animals",
        "label": {
          "he": "in ושגיאת כתיב",
          "ru": "in и опечатка",
          "en": "in and a typo"
        },
        "kind": "number",
        "text": {
          "he": "טבלת hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — עמודות mispar_shvav, haya, gil.\nכמה שורות יחזיר `select * from hayot where haya in ('kelev', 'amav')`?",
          "ru": "Таблица hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — столбцы mispar_shvav, haya, gil.\nСколько строк вернёт `select * from hayot where haya in ('kelev', 'amav')`?",
          "en": "Table hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — columns mispar_shvav, haya, gil.\nHow many rows does `select * from hayot where haya in ('kelev', 'amav')` return?"
        },
        "example": {
          "he": "טבלה אחרת, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where pri in ('anavim', 'kiwi')` → anavim קיים (שורה 4), kiwi לא קיים בטבלה בכלל → שורה 1. `in` מחפש רק התאמה מדויקת, אות באות.",
          "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where pri in ('anavim', 'kiwi')` → anavim есть (строка 4), kiwi в таблице нет совсем → 1 строка. `in` ищет только точное совпадение, буква в букву.",
          "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where pri in ('anavim', 'kiwi')` → anavim exists (row 4), kiwi is not in the table at all → 1 row. `in` looks only for an exact match, letter by letter."
        },
        "answer": {
          "value": "2"
        },
        "hints": [
          {
            "he": "השוו אות באות: amav ו־arnav הן לא אותה מילה.",
            "ru": "Сравни буква в букву: amav и arnav — не одно слово.",
            "en": "Compare letter by letter: amav and arnav are not the same word."
          }
        ],
        "solution": [
          {
            "he": "kelev — 2 שורות (1001, 1005).",
            "ru": "kelev — 2 строки (1001, 1005).",
            "en": "kelev — 2 rows (1001, 1005)."
          },
          {
            "he": "'amav' — אין כזה ערך, 0 שורות.",
            "ru": "'amav' — такого значения нет, 0 строк.",
            "en": "'amav' — no such value, 0 rows."
          },
          "2 + 0 = 2"
        ]
      },
      {
        "id": "t-a-5",
        "group": "animals",
        "label": {
          "he": "in נכון",
          "ru": "in правильно",
          "en": "in fixed"
        },
        "kind": "number",
        "text": {
          "he": "טבלת hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — עמודות mispar_shvav, haya, gil.\nועכשיו `select * from hayot where haya in ('kelev', 'arnav')` — כמה שורות?",
          "ru": "Таблица hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — столбцы mispar_shvav, haya, gil.\nА теперь `select * from hayot where haya in ('kelev', 'arnav')` — сколько строк?",
          "en": "Table hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — columns mispar_shvav, haya, gil.\nAnd now `select * from hayot where haya in ('kelev', 'arnav')` — how many rows?"
        },
        "example": {
          "he": "טבלה אחרת, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where pri in ('tapuach', 'banana')` → tapuach בשורות 1 ו־3, banana בשורות 2 ו־5 → 4 שורות.",
          "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where pri in ('tapuach', 'banana')` → tapuach в строках 1 и 3, banana в строках 2 и 5 → 4 строки.",
          "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where pri in ('tapuach', 'banana')` → tapuach is in rows 1 and 3, banana in rows 2 and 5 → 4 rows."
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "in = כל השורות שהערך שלהן הוא אחד מהרשימה.",
            "ru": "in = все строки, где значение — одно из списка.",
            "en": "in = every row whose value is one of the list."
          }
        ],
        "solution": [
          {
            "he": "kelev — 2, arnav — 1.",
            "ru": "kelev — 2, arnav — 1.",
            "en": "kelev — 2, arnav — 1."
          },
          "2 + 1 = 3"
        ]
      },
      {
        "id": "t-l-1",
        "group": "lesson",
        "label": {
          "he": "between",
          "ru": "between",
          "en": "between"
        },
        "kind": "number",
        "text": {
          "he": "טבלת hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — עמודות mispar_shvav, haya, gil.\nכמה שורות יחזיר `select * from hayot where gil between 2 and 5`?",
          "ru": "Таблица hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — столбцы mispar_shvav, haya, gil.\nСколько строк вернёт `select * from hayot where gil between 2 and 5`?",
          "en": "Table hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — columns mispar_shvav, haya, gil.\nHow many rows does `select * from hayot where gil between 2 and 5` return?"
        },
        "example": {
          "he": "טבלה אחרת, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where kamut between 4 and 6` → kamut 4 ✅, 6 ✅, 2 ❌, 9 ❌, 1 ❌ → 2 שורות. הקצוות (4 ו־6) נכללים.",
          "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where kamut between 4 and 6` → kamut 4 ✅, 6 ✅, 2 ❌, 9 ❌, 1 ❌ → 2 строки. Края (4 и 6) входят.",
          "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where kamut between 4 and 6` → kamut 4 ✅, 6 ✅, 2 ❌, 9 ❌, 1 ❌ → 2 rows. The ends (4 and 6) are included."
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "הקצוות 2 ו־5 נכללים.",
            "ru": "Края 2 и 5 входят.",
            "en": "The edges 2 and 5 are included."
          }
        ],
        "solution": [
          {
            "he": "גילים: 3, 5, 1, 2, 7.",
            "ru": "Возрасты: 3, 5, 1, 2, 7.",
            "en": "Ages: 3, 5, 1, 2, 7."
          },
          {
            "he": "בטווח 2–5: 3, 5, 2.",
            "ru": "В промежутке 2–5: 3, 5, 2.",
            "en": "In 2–5: 3, 5, 2."
          },
          {
            "he": "3 שורות.",
            "ru": "3 строки.",
            "en": "3 rows."
          }
        ]
      },
      {
        "id": "t-l-2",
        "group": "lesson",
        "label": {
          "he": "like",
          "ru": "like",
          "en": "like"
        },
        "kind": "number",
        "text": {
          "he": "טבלת hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — עמודות mispar_shvav, haya, gil.\nכמה שורות יחזיר `select * from hayot where haya like '%u%'`?",
          "ru": "Таблица hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — столбцы mispar_shvav, haya, gil.\nСколько строк вернёт `select * from hayot where haya like '%u%'`?",
          "en": "Table hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — columns mispar_shvav, haya, gil.\nHow many rows does `select * from hayot where haya like '%u%'` return?"
        },
        "example": {
          "he": "טבלה אחרת, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where pri like '%n%'` → `%` פירושו \"כל אותיות או כלום\" → יש n במילה: banana ✅, anavim ✅, banana ✅, tapuach ❌ → 3 שורות.",
          "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where pri like '%n%'` → `%` значит «любые буквы или ничего» → в слове есть n: banana ✅, anavim ✅, banana ✅, tapuach ❌ → 3 строки.",
          "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where pri like '%n%'` → `%` means \"any letters or none\" → the word has an n: banana ✅, anavim ✅, banana ✅, tapuach ❌ → 3 rows."
        },
        "answer": {
          "value": "2"
        },
        "hints": [
          {
            "he": "%u% = האות u בכל מקום במילה.",
            "ru": "%u% = буква u в любом месте слова.",
            "en": "%u% = the letter u anywhere in the word."
          }
        ],
        "solution": [
          {
            "he": "kelev — אין u. chatul — יש. arnav — אין. tuki — יש.",
            "ru": "kelev — нет u. chatul — есть. arnav — нет. tuki — есть.",
            "en": "kelev — no u. chatul — yes. arnav — no. tuki — yes."
          },
          {
            "he": "2 שורות.",
            "ru": "2 строки.",
            "en": "2 rows."
          }
        ]
      },
      {
        "id": "t-l-3",
        "group": "lesson",
        "label": {
          "he": "top + order by",
          "ru": "top + order by",
          "en": "top + order by"
        },
        "kind": "text",
        "text": {
          "he": "טבלת hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — עמודות mispar_shvav, haya, gil.\n`select top 1 * from hayot order by gil desc` — איזו חיה תופיע? (המילה מהטבלה)",
          "ru": "Таблица hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — столбцы mispar_shvav, haya, gil.\n`select top 1 * from hayot order by gil desc` — какое животное покажется? (слово из таблицы)",
          "en": "Table hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — columns mispar_shvav, haya, gil.\n`select top 1 * from hayot order by gil desc` — which animal appears? (the word from the table)"
        },
        "example": {
          "he": "טבלה אחרת, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select top 1 * from perot order by kamut desc` → ממיינים מהגדול לקטן: 9, 6, 4, 2, 1 → `top 1` לוקח את השורה הראשונה → anavim (kamut 9).",
          "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select top 1 * from perot order by kamut desc` → сортируем от большого к маленькому: 9, 6, 4, 2, 1 → `top 1` берёт первую строку → anavim (kamut 9).",
          "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select top 1 * from perot order by kamut desc` → sort from big to small: 9, 6, 4, 2, 1 → `top 1` takes the first row → anavim (kamut 9)."
        },
        "answer": {
          "accept": [
            "kelev"
          ]
        },
        "hints": [
          {
            "he": "desc = מהגדול לקטן. top 1 = השורה הראשונה אחרי המיון.",
            "ru": "desc = от большего к меньшему. top 1 = первая строка после сортировки.",
            "en": "desc = largest first. top 1 = the first row after sorting."
          }
        ],
        "solution": [
          {
            "he": "מיון לפי גיל מהגדול: 7, 5, 3, 2, 1.",
            "ru": "Сортировка по возрасту от большего: 7, 5, 3, 2, 1.",
            "en": "Sort by age, largest first: 7, 5, 3, 2, 1."
          },
          {
            "he": "גיל 7 = (1005, 'kelev', 7).",
            "ru": "Возраст 7 = (1005, 'kelev', 7).",
            "en": "Age 7 = (1005, 'kelev', 7)."
          },
          "kelev"
        ]
      },
      {
        "id": "t-l-4",
        "group": "lesson",
        "label": {
          "he": "percent",
          "ru": "percent",
          "en": "percent"
        },
        "kind": "number",
        "text": {
          "he": "טבלת hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — עמודות mispar_shvav, haya, gil.\nכמה שורות יחזיר `select top 40 percent * from hayot`?",
          "ru": "Таблица hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — столбцы mispar_shvav, haya, gil.\nСколько строк вернёт `select top 40 percent * from hayot`?",
          "en": "Table hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — columns mispar_shvav, haya, gil.\nHow many rows does `select top 40 percent * from hayot` return?"
        },
        "example": {
          "he": "טבלה אחרת, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select top 60 percent * from perot` → `5 × 0.6 = 3` → 3 שורות. אם יוצא שבר, SQL Server מעגל כלפי מעלה.",
          "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select top 60 percent * from perot` → 5 строк × 0.6 = 3 → 3 строки. Если получается дробь, SQL Server округляет вверх.",
          "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select top 60 percent * from perot` → 5 rows × 0.6 = 3 → 3 rows. If it comes out as a fraction, SQL Server rounds up."
        },
        "answer": {
          "value": "2"
        },
        "hints": [
          {
            "he": "40 אחוז ממספר השורות, לא מהערכים.",
            "ru": "40 процентов от числа строк, а не от значений.",
            "en": "40 percent of the number of rows, not of the values."
          }
        ],
        "solution": [
          {
            "he": "בטבלה 5 שורות.",
            "ru": "В таблице 5 строк.",
            "en": "The table has 5 rows."
          },
          "5 × 0.4 = 2",
          {
            "he": "2 שורות.",
            "ru": "2 строки.",
            "en": "2 rows."
          }
        ]
      },
      {
        "id": "t-l-5",
        "group": "lesson",
        "label": {
          "he": "distinct",
          "ru": "distinct",
          "en": "distinct"
        },
        "kind": "number",
        "text": {
          "he": "טבלת hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — עמודות mispar_shvav, haya, gil.\nכמה שורות יחזיר `select distinct haya from hayot`?",
          "ru": "Таблица hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — столбцы mispar_shvav, haya, gil.\nСколько строк вернёт `select distinct haya from hayot`?",
          "en": "Table hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — columns mispar_shvav, haya, gil.\nHow many rows does `select distinct haya from hayot` return?"
        },
        "example": {
          "he": "טבלה אחרת, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select distinct pri from perot` → tapuach, banana, tapuach, anavim, banana → כפילויות מוצגות פעם אחת → tapuach, banana, anavim → 3 שורות.",
          "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select distinct pri from perot` → tapuach, banana, tapuach, anavim, banana → повторы показываются один раз → tapuach, banana, anavim → 3 строки.",
          "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select distinct pri from perot` → tapuach, banana, tapuach, anavim, banana → repeats are shown once → tapuach, banana, anavim → 3 rows."
        },
        "answer": {
          "value": "4"
        },
        "hints": [
          {
            "he": "kelev מופיע פעמיים בטבלה, אבל ב־distinct רק פעם אחת.",
            "ru": "kelev в таблице дважды, но в distinct — один раз.",
            "en": "kelev is in the table twice, but distinct shows it once."
          }
        ],
        "solution": [
          {
            "he": "ערכים: kelev, chatul, arnav, tuki, kelev.",
            "ru": "Значения: kelev, chatul, arnav, tuki, kelev.",
            "en": "Values: kelev, chatul, arnav, tuki, kelev."
          },
          {
            "he": "בלי כפילויות: kelev, chatul, arnav, tuki.",
            "ru": "Без повторов: kelev, chatul, arnav, tuki.",
            "en": "Without duplicates: kelev, chatul, arnav, tuki."
          },
          {
            "he": "4 שורות.",
            "ru": "4 строки.",
            "en": "4 rows."
          }
        ]
      },
      {
        "id": "t-l-6",
        "group": "lesson",
        "label": {
          "he": "פסיק",
          "ru": "Запятая",
          "en": "Comma"
        },
        "kind": "choice",
        "text": {
          "he": "מה יראה `select haya gil from hayot` (בלי פסיק)?",
          "ru": "Что покажет `select haya gil from hayot` (без запятой)?",
          "en": "What does `select haya gil from hayot` (no comma) show?"
        },
        "example": {
          "he": "`select pri as shem from perot` → עמודה אחת עם הכותרת shem, ובה שמות הפירות. אפשר לא לכתוב `as`: `select pri shem from perot` עושה אותו דבר. פסיק בין העמודות משנה את המשמעות.",
          "ru": "`select pri as shem from perot` → один столбец с заголовком shem, а в нём названия фруктов. Слово `as` можно не писать: `select pri shem from perot` делает то же самое. Запятая между столбцами меняет смысл.",
          "en": "`select pri as shem from perot` → one column with the heading shem, holding the fruit names. You can leave out `as`: `select pri shem from perot` does the same. A comma between columns changes the meaning."
        },
        "options": [
          {
            "he": "שגיאה",
            "ru": "Ошибку",
            "en": "An error"
          },
          {
            "he": "שתי עמודות: haya ו־gil",
            "ru": "Два столбца: haya и gil",
            "en": "Two columns: haya and gil"
          },
          {
            "he": "עמודה אחת בשם gil ובה שמות החיות",
            "ru": "Один столбец с именем gil, а в нём названия животных",
            "en": "One column named gil holding the animal names"
          }
        ],
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "מילה מיד אחרי שם עמודה = שם חדש לעמודה בתוצאה.",
            "ru": "Слово сразу после имени столбца = новое имя столбца в результате.",
            "en": "A word right after a column name = a new name for that column in the result."
          }
        ],
        "solution": [
          {
            "he": "gil נהיה שם חדש של haya.",
            "ru": "gil становится новым именем haya.",
            "en": "gil becomes a new name for haya."
          },
          {
            "he": "עמודה אחת, הכותרת gil, ובתוכה שמות החיות.",
            "ru": "Один столбец, заголовок gil, а внутри — названия животных.",
            "en": "One column, headed gil, holding the animal names."
          },
          "select haya, gil from hayot"
        ]
      },
      {
        "id": "t-l-7",
        "group": "lesson",
        "label": {
          "he": "insert חלקי",
          "ru": "Частичный insert",
          "en": "Partial insert"
        },
        "kind": "choice",
        "text": {
          "he": "אחרי `insert into hayot (haya) values ('dag')` — מה יהיה בעמודה gil של השורה החדשה?",
          "ru": "После `insert into hayot (haya) values ('dag')` — что будет в столбце gil новой строки?",
          "en": "After `insert into hayot (haya) values ('dag')` — what is in the gil column of the new row?"
        },
        "example": {
          "he": "`insert into perot (id, pri) values (6, 'kiwi')` → נתנו id ו־pri, אבל את kamut לא כתבנו בכלל. חשבו: 0 הוא מספר שמישהו הקליד. ומה SQL שם בעמודה שלא הקלידו בה כלום? אחר כך הסתכלו ב־`select * from perot` ב־SSMS.",
          "ru": "`insert into perot (id, pri) values (6, 'kiwi')` → id и pri мы дали, а kamut не написали совсем. Подумай: 0 — это число, которое кто-то ввёл. А что SQL ставит в столбец, куда не ввели ничего? Посмотри потом `select * from perot` в SSMS.",
          "en": "`insert into perot (id, pri) values (6, 'kiwi')` → we gave id and pri, but did not write kamut at all. Think: 0 is a number someone typed. What does SQL put in a column where nothing was typed? Then look at `select * from perot` in SSMS."
        },
        "options": [
          "0",
          "NULL",
          {
            "he": "רווח",
            "ru": "Пробел",
            "en": "A space"
          },
          "dag"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "מילאנו רק את haya. מה מקבלות שאר העמודות?",
            "ru": "Заполнили только haya. Что получают остальные столбцы?",
            "en": "Only haya was filled. What do the other columns get?"
          }
        ],
        "solution": [
          {
            "he": "עמודה שלא מילאו ב־insert מקבלת NULL (אם Allow Nulls מסומן).",
            "ru": "Столбец, не заполненный в insert, получает NULL (если стоит Allow Nulls).",
            "en": "A column not filled in the insert gets NULL (if Allow Nulls is ticked)."
          },
          "NULL"
        ]
      },
      {
        "id": "t-p-1-1",
        "group": "perek1",
        "label": "1.1",
        "kind": "number",
        "text": {
          "he": "טבלת העובדים מ־Moodle (haovdim, 200 שורות; עמודות prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.1. הצג את כל הנתונים.\nכתבו את השאילתה, הריצו, וכמה שורות קיבלתם?",
          "ru": "Таблица работников из Moodle (haovdim, 200 строк; столбцы prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.1. Покажи все данные.\nНапиши запрос, запусти — сколько строк получилось?",
          "en": "The employees table from Moodle (haovdim, 200 rows; columns prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.1. Show all the data.\nWrite the query, run it — how many rows did you get?"
        },
        "example": {
          "he": "על הטבלה hayot מהשיעור: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nכל הנתונים: `select * from hayot` → כל 5 השורות. `*` פירושו \"כל העמודות\".",
          "ru": "На таблице hayot с урока: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nВсе данные: `select * from hayot` → все 5 строк. `*` значит «все столбцы».",
          "en": "On the hayot table from the lesson: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nAll the data: `select * from hayot` → all 5 rows. `*` means \"all columns\"."
        },
        "answer": {
          "value": "200"
        },
        "hints": [
          {
            "he": "\"כל הנתונים\" = כל העמודות, בלי where.",
            "ru": "«Все данные» = все столбцы, без where.",
            "en": "\"All the data\" = every column, no where."
          }
        ],
        "solution": [
          "select * from haovdim",
          {
            "he": "התוצאה: 200 שורות.",
            "ru": "Результат: 200 строк.",
            "en": "Result: 200 rows."
          }
        ]
      },
      {
        "id": "t-p-1-2",
        "group": "perek1",
        "label": "1.2",
        "kind": "number",
        "text": {
          "he": "טבלת העובדים מ־Moodle (haovdim, 200 שורות; עמודות prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.2. הצג את כל הנתונים של העובדים במחלקה 1.\nכתבו את השאילתה, הריצו, וכמה שורות קיבלתם?",
          "ru": "Таблица работников из Moodle (haovdim, 200 строк; столбцы prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.2. Покажи все данные работников отдела 1.\nНапиши запрос, запусти — сколько строк получилось?",
          "en": "The employees table from Moodle (haovdim, 200 rows; columns prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.2. Show all the data of the employees in department 1.\nWrite the query, run it — how many rows did you get?"
        },
        "example": {
          "he": "על הטבלה hayot מהשיעור: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nרק כלבים: `select * from hayot where haya = 'kelev'` → השורות 1001 ו־1005 → 2 שורות. מספר כותבים בלי גרשיים: `where gil = 3`.",
          "ru": "На таблице hayot с урока: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nТолько собаки: `select * from hayot where haya = 'kelev'` → строки 1001 и 1005 → 2 строки. Число пишут без кавычек: `where gil = 3`.",
          "en": "On the hayot table from the lesson: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nOnly dogs: `select * from hayot where haya = 'kelev'` → rows 1001 and 1005 → 2 rows. A number is written without quotes: `where gil = 3`."
        },
        "answer": {
          "value": "51"
        },
        "hints": [
          {
            "he": "המחלקה בעמודה machlaka, והיא מספר — בלי גרשיים.",
            "ru": "Отдел — в столбце machlaka, это число — без кавычек.",
            "en": "The department is in machlaka, a number — no quotes."
          }
        ],
        "solution": [
          "select * from haovdim",
          "where machlaka = 1",
          {
            "he": "התוצאה: 51 שורות.",
            "ru": "Результат: 51 строк.",
            "en": "Result: 51 rows."
          }
        ]
      },
      {
        "id": "t-p-1-3",
        "group": "perek1",
        "label": "1.3",
        "kind": "number",
        "text": {
          "he": "טבלת העובדים מ־Moodle (haovdim, 200 שורות; עמודות prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.3. הצג את כל הנתונים של העובדים המשתכרים מעל 11000 ש\"ח במחלקה 3.\nכתבו את השאילתה, הריצו, וכמה שורות קיבלתם?",
          "ru": "Таблица работников из Moodle (haovdim, 200 строк; столбцы prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.3. Покажи все данные работников отдела 3 с зарплатой выше 11000.\nНапиши запрос, запусти — сколько строк получилось?",
          "en": "The employees table from Moodle (haovdim, 200 rows; columns prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.3. Show all the data of department 3 employees earning over 11000.\nWrite the query, run it — how many rows did you get?"
        },
        "example": {
          "he": "על הטבלה hayot מהשיעור: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nכלבים מעל גיל 4: `select * from hayot where haya = 'kelev' and gil > 4` → 1001 (3) ❌, 1005 (7) ✅ → שורה 1. `and` — שני התנאים חייבים להתקיים.",
          "ru": "На таблице hayot с урока: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nСобаки старше 4 лет: `select * from hayot where haya = 'kelev' and gil > 4` → 1001 (3) ❌, 1005 (7) ✅ → 1 строка. `and` — должны выполняться оба условия.",
          "en": "On the hayot table from the lesson: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nDogs older than 4: `select * from hayot where haya = 'kelev' and gil > 4` → 1001 (3) ❌, 1005 (7) ✅ → 1 row. `and` means both conditions must hold."
        },
        "answer": {
          "value": "94"
        },
        "hints": [
          {
            "he": "שני תנאים שחייבים להתקיים יחד ← and.",
            "ru": "Два условия, которые должны выполниться вместе → and.",
            "en": "Two conditions that must both hold → and."
          }
        ],
        "solution": [
          "select * from haovdim",
          "where maskoret > 11000",
          "and machlaka = 3",
          {
            "he": "התוצאה: 94 שורות.",
            "ru": "Результат: 94 строк.",
            "en": "Result: 94 rows."
          }
        ]
      },
      {
        "id": "t-p-1-4",
        "group": "perek1",
        "label": "1.4",
        "kind": "number",
        "text": {
          "he": "טבלת העובדים מ־Moodle (haovdim, 200 שורות; עמודות prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.4. הצג את כל הנתונים של העובדים המשתכרים בין 10000 ל־12000 ש\"ח.\nכתבו את השאילתה, הריצו, וכמה שורות קיבלתם?",
          "ru": "Таблица работников из Moodle (haovdim, 200 строк; столбцы prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.4. Покажи все данные работников с зарплатой от 10000 до 12000.\nНапиши запрос, запусти — сколько строк получилось?",
          "en": "The employees table from Moodle (haovdim, 200 rows; columns prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.4. Show all the data of employees earning between 10000 and 12000.\nWrite the query, run it — how many rows did you get?"
        },
        "example": {
          "he": "על הטבלה hayot מהשיעור: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nגיל מ־1 עד 2: `select * from hayot where gil between 1 and 2` → arnav (1) ו־tuki (2) → 2 שורות. הקצוות נכללים.",
          "ru": "На таблице hayot с урока: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nВозраст от 1 до 2: `select * from hayot where gil between 1 and 2` → arnav (1) и tuki (2) → 2 строки. Края входят.",
          "en": "On the hayot table from the lesson: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nAge from 1 to 2: `select * from hayot where gil between 1 and 2` → arnav (1) and tuki (2) → 2 rows. The ends are included."
        },
        "answer": {
          "value": "36"
        },
        "hints": [
          {
            "he": "טווח עם שני גבולות ← between (הקצוות בפנים). `> 10000` לבד לא מספיק.",
            "ru": "Промежуток с двумя границами → between (края внутри). Одного `> 10000` мало.",
            "en": "A range with two limits → between (edges included). `> 10000` alone is not enough."
          }
        ],
        "solution": [
          "select * from haovdim",
          "where maskoret",
          "between 10000 and 12000",
          {
            "he": "התוצאה: 36 שורות.",
            "ru": "Результат: 36 строк.",
            "en": "Result: 36 rows."
          }
        ]
      },
      {
        "id": "t-p-1-5",
        "group": "perek1",
        "label": "1.5",
        "kind": "number",
        "text": {
          "he": "טבלת העובדים מ־Moodle (haovdim, 200 שורות; עמודות prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.5. הצג את כל הנתונים של העובדים המשתכרים פחות מ־10000 או יותר מ־12000 ש\"ח.\nכתבו את השאילתה, הריצו, וכמה שורות קיבלתם?",
          "ru": "Таблица работников из Moodle (haovdim, 200 строк; столбцы prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.5. Покажи все данные работников с зарплатой меньше 10000 или больше 12000.\nНапиши запрос, запусти — сколько строк получилось?",
          "en": "The employees table from Moodle (haovdim, 200 rows; columns prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.5. Show all the data of employees earning under 10000 or over 12000.\nWrite the query, run it — how many rows did you get?"
        },
        "example": {
          "he": "על הטבלה hayot מהשיעור: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nגיל קטן מ־2 או גדול מ־5: `select * from hayot where gil < 2 or gil > 5` → arnav (1) ו־kelev (7) → 2 שורות. `or` — מספיק תנאי אחד.",
          "ru": "На таблице hayot с урока: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nВозраст меньше 2 или больше 5: `select * from hayot where gil < 2 or gil > 5` → arnav (1) и kelev (7) → 2 строки. `or` — хватает одного условия.",
          "en": "On the hayot table from the lesson: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nAge below 2 or above 5: `select * from hayot where gil < 2 or gil > 5` → arnav (1) and kelev (7) → 2 rows. `or` means one condition is enough."
        },
        "answer": {
          "value": "164"
        },
        "hints": [
          {
            "he": "\"או\" ← or. זה בדיוק מה שמחוץ לטווח של 1.4.",
            "ru": "«Или» → or. Это ровно то, что вне промежутка из 1.4.",
            "en": "\"Or\" → or. It is exactly what lies outside the 1.4 range."
          }
        ],
        "solution": [
          "select * from haovdim",
          "where maskoret < 10000",
          "or maskoret > 12000",
          {
            "he": "בדיקה: 36 (מ־1.4) + 164 = 200.",
            "ru": "Проверка: 36 (из 1.4) + 164 = 200.",
            "en": "Check: 36 (from 1.4) + 164 = 200."
          },
          {
            "he": "התוצאה: 164 שורות.",
            "ru": "Результат: 164 строк.",
            "en": "Result: 164 rows."
          }
        ]
      },
      {
        "id": "t-p-1-6",
        "group": "perek1",
        "label": "1.6",
        "kind": "choice",
        "text": {
          "he": "טבלת העובדים מ־Moodle (haovdim, 200 שורות; עמודות prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.6. הצג אך ורק את השמות הפרטיים ואת האימיילים של כל העובדים. איזו שאילתה?",
          "ru": "Таблица работников из Moodle (haovdim, 200 строк; столбцы prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.6. Покажи только имена и e-mail всех работников. Какой запрос?",
          "en": "The employees table from Moodle (haovdim, 200 rows; columns prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.6. Show only the first names and emails of all employees. Which query?"
        },
        "example": {
          "he": "על הטבלה hayot מהשיעור: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nרק החיה והגיל: `select haya, gil from hayot` → 2 עמודות, כל 5 השורות. את העמודות שצריך כותבים עם פסיק ביניהן.",
          "ru": "На таблице hayot с урока: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nТолько животное и возраст: `select haya, gil from hayot` → 2 столбца, все 5 строк. Нужные столбцы перечисляют через запятую.",
          "en": "On the hayot table from the lesson: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nOnly the animal and the age: `select haya, gil from hayot` → 2 columns, all 5 rows. List the columns you need with commas."
        },
        "options": [
          "`select * from haovdim`",
          "`select prati, doal from haovdim`",
          "`select prati doal from haovdim`",
          "`select prati and doal from haovdim`"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "\"אך ורק\" = רק העמודות האלה. בין עמודות — פסיק.",
            "ru": "«Только» = только эти столбцы. Между столбцами — запятая.",
            "en": "\"Only\" = just these columns. Commas between columns."
          }
        ],
        "solution": [
          "select prati, doal",
          "from haovdim"
        ]
      },
      {
        "id": "t-p-1-7",
        "group": "perek1",
        "label": "1.7",
        "kind": "number",
        "text": {
          "he": "טבלת העובדים מ־Moodle (haovdim, 200 שורות; עמודות prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.7. הצג את כל הנתונים של העובדים שיש להם מייל ב־gmail.\nכתבו את השאילתה, הריצו, וכמה שורות קיבלתם?",
          "ru": "Таблица работников из Moodle (haovdim, 200 строк; столбцы prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.7. Покажи все данные работников с почтой gmail.\nНапиши запрос, запусти — сколько строк получилось?",
          "en": "The employees table from Moodle (haovdim, 200 rows; columns prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.7. Show all the data of employees with a gmail address.\nWrite the query, run it — how many rows did you get?"
        },
        "example": {
          "he": "על הטבלה hayot מהשיעור: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nחיות עם האות a בשם: `select * from hayot where haya like '%a%'` → chatul ו־arnav → 2 שורות. דואר gmail מחפשים באותה דרך: חלק טקסט בין `%`.",
          "ru": "На таблице hayot с урока: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nЖивотные с буквой a в названии: `select * from hayot where haya like '%a%'` → chatul и arnav → 2 строки. Почту gmail ищут так же: кусок текста между `%`.",
          "en": "On the hayot table from the lesson: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nAnimals with the letter a in the name: `select * from hayot where haya like '%a%'` → chatul and arnav → 2 rows. Gmail addresses are found the same way: a piece of text between `%`."
        },
        "answer": {
          "value": "12"
        },
        "hints": [
          {
            "he": "= מחפש התאמה מדויקת. צריך like עם %.",
            "ru": "= ищет точное совпадение. Нужен like с %.",
            "en": "= looks for an exact match. You need like with %."
          }
        ],
        "solution": [
          "select * from haovdim",
          "where doal like '%gmail%'",
          {
            "he": "התוצאה: 12 שורות.",
            "ru": "Результат: 12 строк.",
            "en": "Result: 12 rows."
          }
        ]
      },
      {
        "id": "t-p-1-8",
        "group": "perek1",
        "label": "1.8",
        "kind": "choice",
        "text": {
          "he": "טבלת העובדים מ־Moodle (haovdim, 200 שורות; עמודות prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.8. הצג את כל הנתונים של העובדים במחלקה 1, ממוינים לפי שם המשפחה. איזו שאילתה?",
          "ru": "Таблица работников из Moodle (haovdim, 200 строк; столбцы prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.8. Покажи все данные работников отдела 1, отсортированные по фамилии. Какой запрос?",
          "en": "The employees table from Moodle (haovdim, 200 rows; columns prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.8. Show all the data of department 1 employees, sorted by family name. Which query?"
        },
        "example": {
          "he": "על הטבלה hayot מהשיעור: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nמעל גיל 2, לפי סדר האלף־בית: `select * from hayot where gil > 2 order by haya` → chatul, kelev, kelev. סדר החלקים: `select` → `from` → `where` → `order by`.",
          "ru": "На таблице hayot с урока: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nСтарше 2 лет, по алфавиту: `select * from hayot where gil > 2 order by haya` → chatul, kelev, kelev. Порядок частей: `select` → `from` → `where` → `order by`.",
          "en": "On the hayot table from the lesson: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nOlder than 2, in alphabetical order: `select * from hayot where gil > 2 order by haya` → chatul, kelev, kelev. The order of parts: `select` → `from` → `where` → `order by`."
        },
        "options": [
          "`select * from haovdim where machlaka = 1 order by mishpacha`",
          "`select * from haovdim order by mishpacha where machlaka = 1`",
          "`select mishpacha, machlaka prati from haovdim where machlaka = 1 order by mishpacha`",
          "`select * from haovdim where machlaka = 1 order by prati`"
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "\"כל הנתונים\" ← *. order by תמיד אחרי where.",
            "ru": "«Все данные» → *. order by всегда после where.",
            "en": "\"All the data\" → *. order by always after where."
          }
        ],
        "solution": [
          "select * from haovdim",
          "where machlaka = 1",
          "order by mishpacha",
          {
            "he": "התוצאה: 51 שורות, לפי א־ב של mishpacha.",
            "ru": "Результат: 51 строка, по алфавиту mishpacha.",
            "en": "Result: 51 rows, alphabetical by mishpacha."
          }
        ]
      },
      {
        "id": "t-p-1-9",
        "group": "perek1",
        "label": "1.9",
        "kind": "choice",
        "text": {
          "he": "טבלת העובדים מ־Moodle (haovdim, 200 שורות; עמודות prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.9. הצג את כל הנתונים, ממוינים לפי מחלקה בסדר יורד, ובתוך כל מחלקה לפי השם הפרטי. איזו שאילתה?",
          "ru": "Таблица работников из Moodle (haovdim, 200 строк; столбцы prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.9. Покажи все данные, отсортированные по отделу по убыванию, а внутри отдела — по имени. Какой запрос?",
          "en": "The employees table from Moodle (haovdim, 200 rows; columns prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.9. Show all the data sorted by department descending, and inside each department by first name. Which query?"
        },
        "example": {
          "he": "על הטבלה hayot מהשיעור: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\n`select * from hayot order by haya desc, gil` → קודם לפי החיה מ־Z ל־A: tuki, kelev, kelev, chatul, arnav. שני ה־kelev לפי הגיל: 3, אחר כך 7. `desc` שייך רק לעמודה שלפניו.",
          "ru": "На таблице hayot с урока: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\n`select * from hayot order by haya desc, gil` → сначала по животному от Z к A: tuki, kelev, kelev, chatul, arnav. Две kelev стоят по возрасту: 3, потом 7. `desc` относится только к столбцу перед ним.",
          "en": "On the hayot table from the lesson: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\n`select * from hayot order by haya desc, gil` → first by animal from Z to A: tuki, kelev, kelev, chatul, arnav. The two kelev rows go by age: 3, then 7. `desc` belongs only to the column before it."
        },
        "options": [
          "`select * from haovdim order by prati, machlaka desc`",
          "`select * from haovdim order by machlaka, prati desc`",
          "`select * from haovdim order by machlaka desc, prati`",
          "`select * from haovdim where machlaka desc order by prati`"
        ],
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "\"סדר יורד\" = desc. desc חל רק על העמודה שלפניו.",
            "ru": "«По убыванию» = desc. desc действует только на столбец перед ним.",
            "en": "\"Descending\" = desc. desc applies only to the column before it."
          }
        ],
        "solution": [
          "select * from haovdim",
          "order by machlaka desc, prati",
          {
            "he": "קודם מחלקה 4, 3, 2, 1; בתוך כל מחלקה השמות לפי א־ב.",
            "ru": "Сначала отдел 4, 3, 2, 1; внутри каждого — имена по алфавиту.",
            "en": "Department 4, 3, 2, 1 first; inside each, names alphabetically."
          }
        ]
      },
      {
        "id": "t-p-1-10",
        "group": "perek1",
        "label": "1.10",
        "kind": "number",
        "text": {
          "he": "טבלת העובדים מ־Moodle (haovdim, 200 שורות; עמודות prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.10. הצג את כל הנתונים של שלושת העובדים בעלי המשכורות הגבוהות ביותר. מה המשכורת של השלישי בתוצאה?",
          "ru": "Таблица работников из Moodle (haovdim, 200 строк; столбцы prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.10. Покажи все данные трёх работников с самыми большими зарплатами. Какая зарплата у третьего в результате?",
          "en": "The employees table from Moodle (haovdim, 200 rows; columns prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.10. Show all the data of the three employees with the highest salaries. What is the third one's salary in the result?"
        },
        "example": {
          "he": "על הטבלה hayot מהשיעור: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nשני המבוגרים ביותר: `select top 2 * from hayot order by gil desc` → kelev (7), chatul (5). השני בתוצאה — גיל 5. בלי `order by ... desc` ה־`top` היה לוקח סתם את השורות הראשונות.",
          "ru": "На таблице hayot с урока: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nДва самых старых: `select top 2 * from hayot order by gil desc` → kelev (7), chatul (5). Второй в результате — возраст 5. Без `order by ... desc` `top` взял бы просто первые строки.",
          "en": "On the hayot table from the lesson: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nThe two oldest: `select top 2 * from hayot order by gil desc` → kelev (7), chatul (5). The second in the result has age 5. Without `order by ... desc`, `top` would just take the first rows."
        },
        "answer": {
          "value": "19388"
        },
        "hints": [
          {
            "he": "top 3 + מיון מהגדול לקטן.",
            "ru": "top 3 + сортировка от большего к меньшему.",
            "en": "top 3 + sort largest first."
          },
          {
            "he": "בלי order by, top לוקח שורות בסדר לא מוגדר.",
            "ru": "Без order by top берёт строки в неопределённом порядке.",
            "en": "Without order by, top takes rows in an undefined order."
          }
        ],
        "solution": [
          "select top 3 *",
          "from haovdim",
          "order by maskoret desc",
          "19865, 19692, 19388",
          {
            "he": "השלישי: 19388.",
            "ru": "Третий: 19388.",
            "en": "The third: 19388."
          }
        ]
      },
      {
        "id": "t-p-1-11",
        "group": "perek1",
        "label": "1.11",
        "kind": "number",
        "text": {
          "he": "טבלת העובדים מ־Moodle (haovdim, 200 שורות; עמודות prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.11. הצג את כל הנתונים של העובדים המשתכרים מעל 19000 ש\"ח.\nכתבו את השאילתה, הריצו, וכמה שורות קיבלתם?",
          "ru": "Таблица работников из Moodle (haovdim, 200 строк; столбцы prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.11. Покажи все данные работников с зарплатой выше 19000.\nНапиши запрос, запусти — сколько строк получилось?",
          "en": "The employees table from Moodle (haovdim, 200 rows; columns prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.11. Show all the data of employees earning over 19000.\nWrite the query, run it — how many rows did you get?"
        },
        "example": {
          "he": "על הטבלה hayot מהשיעור: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nמעל 4: `select * from hayot where gil > 4` → chatul (5), kelev (7) → 2 שורות. בדיוק 4 לא היה נכנס: `>` גדול ממש.",
          "ru": "На таблице hayot с урока: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nСтарше 4: `select * from hayot where gil > 4` → chatul (5), kelev (7) → 2 строки. Ровно 4 не попало бы: `>` строго больше.",
          "en": "On the hayot table from the lesson: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\nOlder than 4: `select * from hayot where gil > 4` → chatul (5), kelev (7) → 2 rows. Exactly 4 would not count: `>` means strictly greater."
        },
        "answer": {
          "value": "5"
        },
        "hints": [
          {
            "he": "\"מעל\" ← > (בלי =).",
            "ru": "«Больше» → > (без =).",
            "en": "\"Over\" → > (without =)."
          }
        ],
        "solution": [
          "select * from haovdim",
          "where maskoret > 19000",
          {
            "he": "התוצאה: 5 שורות.",
            "ru": "Результат: 5 строк.",
            "en": "Result: 5 rows."
          }
        ]
      },
      {
        "id": "t-p-1-12",
        "group": "perek1",
        "label": "1.12",
        "kind": "number",
        "text": {
          "he": "טבלת העובדים מ־Moodle (haovdim, 200 שורות; עמודות prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.12. הצג רשימה של המחלקות של העובדים מ־1.11 (מעל 19000), עם distinct. כמה שורות?",
          "ru": "Таблица работников из Moodle (haovdim, 200 строк; столбцы prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.12. Покажи список отделов работников из 1.11 (больше 19000), с distinct. Сколько строк?",
          "en": "The employees table from Moodle (haovdim, 200 rows; columns prati, mishpacha, tikishi, doal, leda, machlaka, maskoret).\n1.12. List the departments of the employees from 1.11 (over 19000), using distinct. How many rows?"
        },
        "example": {
          "he": "על הטבלה hayot מהשיעור: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\n`select distinct haya from hayot where gil >= 2` → קודם `where`: kelev, chatul, tuki, kelev → אחר כך `distinct` מוריד את הכפילות → kelev, chatul, tuki → 3 שורות.",
          "ru": "На таблице hayot с урока: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\n`select distinct haya from hayot where gil >= 2` → сначала `where`: kelev, chatul, tuki, kelev → потом `distinct` убирает повтор → kelev, chatul, tuki → 3 строки.",
          "en": "On the hayot table from the lesson: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7).\n`select distinct haya from hayot where gil >= 2` → first `where`: kelev, chatul, tuki, kelev → then `distinct` removes the repeat → kelev, chatul, tuki → 3 rows."
        },
        "answer": {
          "value": "2"
        },
        "hints": [
          {
            "he": "אותו where כמו ב־1.11, אבל רק העמודה machlaka ו־distinct.",
            "ru": "Тот же where, что в 1.11, но только столбец machlaka и distinct.",
            "en": "The same where as 1.11, but only the machlaka column and distinct."
          }
        ],
        "solution": [
          "select distinct machlaka",
          "from haovdim",
          "where maskoret > 19000",
          {
            "he": "5 העובדים מ־1.11 נמצאים במחלקות 1 ו־2.",
            "ru": "5 работников из 1.11 — в отделах 1 и 2.",
            "en": "The 5 employees from 1.11 are in departments 1 and 2."
          },
          {
            "he": "התוצאה: 2 שורות.",
            "ru": "Результат: 2 строки.",
            "en": "Result: 2 rows."
          }
        ]
      }
    ],
    "ai": [
      {
        "id": "ai-1",
        "level": 1,
        "label": {
          "he": "מיון",
          "ru": "Сортировка",
          "en": "Sorting"
        },
        "kind": "number",
        "text": {
          "he": "טבלת hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — עמודות mispar_shvav, haya, gil.\n`select * from hayot order by gil` — מה הגיל בשורה הראשונה?",
          "ru": "Таблица hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — столбцы mispar_shvav, haya, gil.\n`select * from hayot order by gil` — какой возраст в первой строке?",
          "en": "Table hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — columns mispar_shvav, haya, gil.\n`select * from hayot order by gil` — what age is in the first row?"
        },
        "example": {
          "he": "טבלה אחרת, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot order by kamut desc` → מהגדול לקטן: 9, 6, 4, 2, 1 → בשורה הראשונה 9. בלי `desc` המיון הולך לכיוון ההפוך.",
          "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot order by kamut desc` → от большого к маленькому: 9, 6, 4, 2, 1 → в первой строке 9. Без `desc` сортировка идёт в обратную сторону.",
          "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot order by kamut desc` → from big to small: 9, 6, 4, 2, 1 → the first row has 9. Without `desc` the sort goes the other way."
        },
        "answer": {
          "value": "1"
        },
        "hints": [
          {
            "he": "בלי desc = מהקטן לגדול.",
            "ru": "Без desc = от меньшего к большему.",
            "en": "No desc = smallest first."
          }
        ],
        "solution": [
          "1, 2, 3, 5, 7",
          "1"
        ]
      },
      {
        "id": "ai-2",
        "level": 1,
        "label": {
          "he": "מילה חסרה",
          "ru": "Пропущенное слово",
          "en": "Missing word"
        },
        "kind": "text",
        "text": {
          "he": "השלימו: `select * from hayot where haya ___ 'k%'`",
          "ru": "Допиши: `select * from hayot where haya ___ 'k%'`",
          "en": "Fill in: `select * from hayot where haya ___ 'k%'`"
        },
        "example": {
          "he": "חסר אחר: `select * from perot ___ by kamut` → כאן חסר `order` (יוצא `order by`, מיון). במשימה שלך צריך מילה לחיפוש לפי תבנית עם `%`.",
          "ru": "Другой пропуск: `select * from perot ___ by kamut` → здесь не хватает `order` (получается `order by`, сортировка). В твоей задаче нужно слово для поиска по шаблону с `%`.",
          "en": "A different blank: `select * from perot ___ by kamut` → the missing word here is `order` (giving `order by`, sorting). Your task needs the word for searching by a pattern with `%`."
        },
        "answer": {
          "accept": [
            "like"
          ]
        },
        "hints": [
          {
            "he": "עם % לא משתמשים ב־=.",
            "ru": "С % не используют =.",
            "en": "With % you do not use =."
          }
        ],
        "solution": [
          "like"
        ]
      },
      {
        "id": "ai-3",
        "level": 2,
        "label": {
          "he": "מחוץ לטווח",
          "ru": "Вне промежутка",
          "en": "Outside the range"
        },
        "kind": "number",
        "text": {
          "he": "טבלת hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — עמודות mispar_shvav, haya, gil.\nכמה שורות יחזיר `select * from hayot where gil not between 2 and 5`?",
          "ru": "Таблица hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — столбцы mispar_shvav, haya, gil.\nСколько строк вернёт `select * from hayot where gil not between 2 and 5`?",
          "en": "Table hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — columns mispar_shvav, haya, gil.\nHow many rows does `select * from hayot where gil not between 2 and 5` return?"
        },
        "example": {
          "he": "טבלה אחרת, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where kamut not between 2 and 9` → `not` הופך: מתאימים אלה שלא בין 2 ל־9 → רק kamut 1 → שורה 1.",
          "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where kamut not between 2 and 9` → `not` переворачивает: подходят те, что НЕ от 2 до 9 → только kamut 1 → 1 строка.",
          "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where kamut not between 2 and 9` → `not` flips it: the rows NOT from 2 to 9 fit → only kamut 1 → 1 row."
        },
        "answer": {
          "value": "2"
        },
        "hints": [
          {
            "he": "not between = מה שלא בטווח 2–5.",
            "ru": "not between = то, что не в промежутке 2–5.",
            "en": "not between = what is not in 2–5."
          }
        ],
        "solution": [
          {
            "he": "גילים: 3, 5, 1, 2, 7.",
            "ru": "Возрасты: 3, 5, 1, 2, 7.",
            "en": "Ages: 3, 5, 1, 2, 7."
          },
          {
            "he": "מחוץ ל־2–5: 1, 7.",
            "ru": "Вне 2–5: 1, 7.",
            "en": "Outside 2–5: 1, 7."
          },
          "2"
        ]
      },
      {
        "id": "ai-4",
        "level": 2,
        "label": {
          "he": "סדר",
          "ru": "Порядок",
          "en": "Order"
        },
        "kind": "choice",
        "text": {
          "he": "איזו שאילתה כתובה בסדר הנכון?",
          "ru": "Какой запрос написан в правильном порядке?",
          "en": "Which query is in the right order?"
        },
        "example": {
          "he": "סדר החלקים בשאילתה תמיד כזה: `select` (מה להציג) → `from` (מאיזו טבלה) → `where` (תנאי) → `order by` (מיון). לדוגמה: `select pri from perot where kamut > 3 order by kamut`.",
          "ru": "Правильный порядок частей запроса всегда такой: `select` (что показать) → `from` (из какой таблицы) → `where` (условие) → `order by` (сортировка). Например: `select pri from perot where kamut > 3 order by kamut`.",
          "en": "The parts of a query always go in this order: `select` (what to show) → `from` (which table) → `where` (condition) → `order by` (sorting). For example: `select pri from perot where kamut > 3 order by kamut`."
        },
        "options": [
          "`select haya from hayot order by haya where gil > 2`",
          "`select haya where gil > 2 from hayot`",
          "`from hayot select haya where gil > 2`",
          "`select haya from hayot where gil > 2 order by haya`"
        ],
        "answer": {
          "index": 3
        },
        "hints": [
          {
            "he": "select ← from ← where ← order by.",
            "ru": "select → from → where → order by.",
            "en": "select → from → where → order by."
          }
        ],
        "solution": [
          "select haya from hayot",
          "where gil > 2",
          "order by haya"
        ]
      },
      {
        "id": "ai-5",
        "level": 3,
        "label": "like + and",
        "kind": "number",
        "text": {
          "he": "טבלת hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — עמודות mispar_shvav, haya, gil.\nכמה שורות יחזיר `select * from hayot where haya like '%e%' and gil > 2`?",
          "ru": "Таблица hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — столбцы mispar_shvav, haya, gil.\nСколько строк вернёт `select * from hayot where haya like '%e%' and gil > 2`?",
          "en": "Table hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — columns mispar_shvav, haya, gil.\nHow many rows does `select * from hayot where haya like '%e%' and gil > 2` return?"
        },
        "example": {
          "he": "טבלה אחרת, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where pri like '%a%' and kamut > 3` → צריך את שני התנאים: tapuach 4 ✅, banana 6 ✅, tapuach 2 ❌ (2 לא גדול מ־3), anavim 9 ✅, banana 1 ❌ → 3 שורות.",
          "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where pri like '%a%' and kamut > 3` → нужно оба условия: tapuach 4 ✅, banana 6 ✅, tapuach 2 ❌ (2 не больше 3), anavim 9 ✅, banana 1 ❌ → 3 строки.",
          "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where pri like '%a%' and kamut > 3` → both conditions are needed: tapuach 4 ✅, banana 6 ✅, tapuach 2 ❌ (2 is not more than 3), anavim 9 ✅, banana 1 ❌ → 3 rows."
        },
        "answer": {
          "value": "2"
        },
        "hints": [
          {
            "he": "קודם: באילו מילים יש e? אחר כך: מי מהן מעל גיל 2?",
            "ru": "Сначала: в каких словах есть e? Потом: кто из них старше 2?",
            "en": "First: which words contain e? Then: which of them are over 2?"
          }
        ],
        "solution": [
          {
            "he": "e יש רק ב־kelev (1001, 1005).",
            "ru": "e есть только в kelev (1001, 1005).",
            "en": "Only kelev has an e (1001, 1005)."
          },
          {
            "he": "גילים 3 ו־7 — שניהם > 2.",
            "ru": "Возрасты 3 и 7 — оба > 2.",
            "en": "Ages 3 and 7 — both > 2."
          },
          "2"
        ]
      },
      {
        "id": "ai-6",
        "level": 3,
        "label": "top 3",
        "kind": "number",
        "text": {
          "he": "טבלת hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — עמודות mispar_shvav, haya, gil.\n`select top 3 * from hayot order by gil desc` — מה הגיל הקטן ביותר בתוצאה?",
          "ru": "Таблица hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — столбцы mispar_shvav, haya, gil.\n`select top 3 * from hayot order by gil desc` — какой самый маленький возраст в результате?",
          "en": "Table hayot: (1001,'kelev',3), (1002,'chatul',5), (1003,'arnav',1), (1004,'tuki',2), (1005,'kelev',7) — columns mispar_shvav, haya, gil.\n`select top 3 * from hayot order by gil desc` — what is the smallest age in the result?"
        },
        "example": {
          "he": "טבלה אחרת, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select top 2 * from perot order by kamut desc` → ממיינים 9, 6, 4, 2, 1 → לוקחים 2 ראשונים: 9 ו־6 → הקטן ביותר בתוצאה 6.",
          "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select top 2 * from perot order by kamut desc` → сортируем 9, 6, 4, 2, 1 → берём первые 2: 9 и 6 → самое маленькое в результате 6.",
          "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select top 2 * from perot order by kamut desc` → sort 9, 6, 4, 2, 1 → take the first 2: 9 and 6 → the smallest in the result is 6."
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "קודם ממיינים מהגדול, אחר כך לוקחים 3.",
            "ru": "Сначала сортируем от большего, потом берём 3.",
            "en": "Sort largest first, then take 3."
          }
        ],
        "solution": [
          "7, 5, 3, 2, 1",
          "7, 5, 3",
          "3"
        ]
      }
    ]
  }
};

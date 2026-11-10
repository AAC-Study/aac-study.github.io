/* Lesson data — format: see the comment at the top of data/lessons/math-2026-11-01.js.
   SQL, first lesson: what a database is, installing SQL Server Express + SSMS,
   create database / use / create table / insert / select / where.
   Every row count below was checked by running the query on the 11-row shlifot table from the lesson
   (sqlite3, same standard SQL). */
window.LESSONS = window.LESSONS || {};
window.LESSONS["sql-2026-10-22"] = {
  id: "sql-2026-10-22",
  subject: "sql",
  date: "2026-10-22",
  title: { he: "SQL מאפס: מסד נתונים ושליפות ראשונות", ru: "SQL с нуля: база данных и первые запросы", en: "SQL from scratch: a database and first queries" },
  summary: {
    he: "מה זה מסד נתונים, טבלאות וקשרים ביניהן, התקנת SQL Server ו־SSMS, ואז הקוד הראשון: `create database`, `use`, `create table`, `insert into`, `select` ו־`where`.",
    ru: "Что такое база данных, таблицы и связи между ними, установка SQL Server и SSMS, а потом первый код: `create database`, `use`, `create table`, `insert into`, `select` и `where`.",
    en: "What a database is, tables and the relations between them, installing SQL Server and SSMS, then the first code: `create database`, `use`, `create table`, `insert into`, `select` and `where`."
  },

  timeline: [
    { "why": {"he": "למה לא פשוט קובץ Excel? כשיש מאות אלפי רשומות והרבה אנשים עובדים יחד, צריך מקום אחד שבו כל נתון כתוב פעם אחת, אפשר לשאול עליו שאלות מהר, ואף אחד לא מוחק בטעות של אחר. זה מה ששרת מסד נתונים עושה. עמודה = תכונה אחת, שורה = דבר אחד שלם — כך תמיד יודעים איפה לחפש.", "ru": "Почему не просто файл Excel? Когда записей сотни тысяч и с ними работают многие люди сразу, нужно одно место, где каждый факт записан один раз, где можно быстро задать вопрос и где никто случайно не испортит чужое. Это и делает сервер базы данных. Столбец = одно свойство, строка = один предмет целиком, поэтому всегда понятно, где искать.", "en": "Why not just an Excel file? With hundreds of thousands of records and many people working at once, you need one place where each fact is written once, questions are answered fast, and nobody accidentally ruins someone else's work. That is what a database server does. A column = one property, a row = one whole thing, so you always know where to look."}, kind: "board",
      title: { he: "מה זה מסד נתונים", ru: "Что такое база данных", en: "What a database is" },
      text: {
        he: "SQL = Structured Query Language — השפה שבה \"מדברים\" עם מסד הנתונים (מסד נתונים, Data Base, DB).\nעל הלוח: מסד נתונים מכיל טבלאות, טבלה מכילה עמודות, והנתונים נשמרים ברשומות (שורות).\nעמודה — תכונה אחת (שם, גיל, עיר). שורה = רשומה — אדם או פריט אחד שלם.\nדוגמה מהלוח: טבלת \"פרטים אישיים\" עם העמודות שם, משפחה, גיל, שכר, עיר.",
        ru: "SQL = Structured Query Language — язык, на котором «разговаривают» с базой данных (מסד נתונים, Data Base, DB).\nНа доске: база данных содержит таблицы, таблица — столбцы, а данные хранятся в записях (строках).\nСтолбец — одно свойство (имя, возраст, город). Строка = запись — один человек или предмет целиком.\nПример с доски: таблица «личные данные» (פרטים אישיים) со столбцами имя, фамилия, возраст, зарплата, город.",
        en: "SQL = Structured Query Language — the language we use to \"talk\" to a database (Data Base, DB).\nOn the board: a database holds tables, a table holds columns, and the data is stored in records (rows).\nA column is one property (name, age, city). A row = a record — one whole person or item.\nBoard example: a \"personal details\" table with the columns first name, last name, age, salary, city."
      },
      math: ["DB  →  tables  →  columns  →  records"] },
    { "why": {"he": "למה מפתח ולא שם? שמות חוזרים: יש הרבה \"משה כהן\". מספר ת.ז הוא ייחודי, ולכן הוא מזהה אדם אחד בלבד. כך אפשר לפצל את המידע לכמה טבלאות קטנות ולחבר אותן לפי המספר, במקום לכתוב את כל הפרטים שוב ושוב.", "ru": "Почему ключ, а не имя? Имена повторяются: «Моше Коэнов» много. Номер ת.ז уникален, поэтому указывает ровно на одного человека. Так данные можно разложить по нескольким маленьким таблицам и соединять их по номеру, а не переписывать все данные снова и снова.", "en": "Why a key and not a name? Names repeat: there are many \"Moshe Cohen\"s. An ID number is unique, so it points to exactly one person. That lets you split data into several small tables and join them by the number, instead of rewriting all the details again and again."}, kind: "talk",
      title: { he: "כמה טבלאות ומפתח", ru: "Несколько таблиц и ключ", en: "Several tables and a key" },
      text: {
        he: "בלוח היה גם מסד עם כמה טבלאות: פרטים אישיים, שכר, עיר. כולן מחוברות דרך מספר תעודת הזהות (ת.ז).\nהעמודה המשותפת שדרכה מחברים טבלאות נקראת מפתח ראשי (primary key). כמעט תמיד זה מספר: ת.ז, מספר קורס, מספר סטודנט.\nשאילתה (query) היא שאלה למסד הנתונים, למשל: מי מעל גיל 29 ומרוויח יותר מ־10,000?",
        ru: "На доске была и база с несколькими таблицами: личные данные, зарплата, город. Все связаны через номер удостоверения (ת.ז).\nОбщий столбец, через который связывают таблицы, называется первичный ключ (primary key, מפתח ראשי). Почти всегда это число: ת.ז, номер курса, номер студента.\nЗапрос (שאילתה, query) — это вопрос к базе, например: кто старше 29 и получает больше 10 000?",
        en: "The board also showed a database with several tables: personal details, salary, city. They are all linked by the ID number.\nThe shared column that links tables is called the primary key. It is almost always a number: ID, course number, student number.\nA query is a question to the database, for example: who is over 29 and earns more than 10,000?"
      } },
    { "why": {"he": "למה זה חשוב? סוג הקשר קובע איך בונים את הטבלאות. ב-1:N מספיק לשים את מספר המרצה בטבלת הקורסים. ב-M:N זה כבר לא עובד (בתא אחד אי אפשר לשים כמה מרצים), ולכן בונים טבלה שלישית שמחברת ביניהם. את זה לומדים בהמשך.", "ru": "Зачем это знать? От вида связи зависит, как строить таблицы. При 1:N достаточно записать номер лектора в таблицу курсов. При M:N так уже не получится (в одну ячейку не впишешь несколько лекторов), поэтому строят третью таблицу-связку. Это будет дальше в курсе.", "en": "Why does it matter? The kind of link decides how you build the tables. For 1:N it is enough to put the lecturer number in the courses table. For M:N that no longer works (one cell cannot hold several lecturers), so you build a third linking table. That comes later in the course."}, kind: "talk",
      title: { he: "קשרים בין טבלאות", ru: "Связи между таблицами", en: "Relations between tables" },
      text: {
        he: "דוגמה: טבלת מרצים וטבלת קורסים.\nאחד לאחד (1:1) — מרצה מלמד קורס אחד בלבד.\nאחד לרבים (1:N) — מרצה אחד מלמד כמה קורסים.\nרבים לרבים (M:N) — אותו קורס מלמדים מרצים שונים, וכל אחד מהם מלמד גם קורסים אחרים.",
        ru: "Пример: таблица лекторов и таблица курсов.\nОдин к одному (1:1) — лектор ведёт ровно один курс.\nОдин ко многим (1:N) — один лектор ведёт несколько курсов.\nМногие ко многим (M:N) — один и тот же курс ведут разные лекторы, и каждый из них ведёт ещё и другие курсы.",
        en: "Example: a lecturers table and a courses table.\nOne to one (1:1) — a lecturer teaches exactly one course.\nOne to many (1:N) — one lecturer teaches several courses.\nMany to many (M:N) — the same course is taught by different lecturers, and each of them also teaches other courses."
      } },
    { "why": {"he": "למה כפילויות הן בעיה? אם אותו לקוח כתוב פעמיים והכתובת שלו מתעדכנת רק באחת — יש שתי \"אמיתות\", ולא ברור איזו נכונה. לכן בודקים לפי מפתח ייחודי (ת.ז) ולא לפי שם: שם זהה עם ת.ז שונה הם שני אנשים.", "ru": "Почему дубликаты — это плохо? Если один клиент записан дважды и адрес обновили только в одной записи, у базы две «правды», и непонятно, какая верная. Поэтому сверяют по уникальному ключу (ת.ז), а не по имени: одинаковое имя с разной ת.ז — это два человека.", "en": "Why are duplicates a problem? If the same customer is stored twice and the address is updated in only one row, the database has two \"truths\" and you cannot tell which is right. So you check by a unique key (ID), not by name: the same name with a different ID is two people."}, kind: "talk",
      title: { he: "DBA וכפילויות", ru: "DBA и дубликаты", en: "DBA and duplicates" },
      text: {
        he: "DBA (מנהל מסדי נתונים) הוא מקצוע: לשמור שהמסד תקין. מדובר במאות אלפי רשומות.\nהמשימה הראשונה — למנוע כפילויות, ולהבין מתי שתי רשומות דומות הן בעצם שונות: שני אנשים עם אותו שם, אבל גיל שונה ומספר ת.ז שונה — הם שני אנשים, לא כפילות.",
        ru: "DBA (администратор баз данных) — профессия: следить, чтобы база была в порядке. Речь о сотнях тысяч записей.\nПервая задача — не допускать дубликатов и понимать, когда похожие записи на самом деле разные: два человека с одинаковым именем, но разным возрастом и разным номером ת.ז — это два человека, а не дубликат.",
        en: "A DBA (database administrator) is a profession: keeping the database in good order. We are talking about hundreds of thousands of records.\nThe first job is to prevent duplicates, and to recognise when two similar records are really different: two people with the same name but a different age and ID number are two people, not a duplicate."
      } },
    { "why": {"he": "למה שתי תוכנות? השרת הוא \"המחסן\": הוא שומר את הנתונים ועובד ברקע, גם כשאין חלון פתוח. SSMS הוא רק \"הדלפק\" שדרכו מבקשים דברים מהמחסן. לכן אם השירות לא ב-Running, החיבור ייכשל גם אם SSMS תקין. `Trust Server Certificate` נדרש כי SSMS מצפין את החיבור, והשרת המקומי משתמש בתעודה שהוא יצר לעצמו.", "ru": "Почему две программы? Сервер — это «склад»: он хранит данные и работает в фоне, даже когда никакое окно не открыто. SSMS — только «окошко», через которое просят у склада. Поэтому если служба не Running, подключение не пройдёт, даже если SSMS в порядке. `Trust Server Certificate` нужен, потому что SSMS шифрует связь, а локальный сервер использует сертификат, который сделал сам себе.", "en": "Why two programs? The server is the \"warehouse\": it stores data and runs in the background even with no window open. SSMS is just the \"counter\" you ask the warehouse through. So if the service is not Running, connecting fails even if SSMS is fine. `Trust Server Certificate` is needed because SSMS encrypts the connection and the local server uses a certificate it made for itself."}, kind: "talk",
      title: { he: "שתי תוכנות: שרת וחלון פקודות", ru: "Две программы: сервер и окно для команд", en: "Two programs: a server and a command window" },
      text: {
        he: "SQL Server Express — השרת עצמו. הוא רץ ברקע ושומר את המסדים. בודקים ב־Services שהשירות SQL Server (SQLEXPRESS) במצב Running.\nSQL Server Management Studio 22 (SSMS) — החלון שבו כותבים פקודות. הוא מתחבר לשרת:\nServer Name: `.\\SQLEXPRESS` · Authentication: Windows Authentication · לסמן Trust Server Certificate · Connect.\nאחרי החיבור: New Query, כותבים קוד, ו־Execute או F5. אם מסמנים שורה אחת ולוחצים F5 — רק היא מתבצעת.\nמשמאל חלון Object Explorer — רשימת המסדים והטבלאות. מסד חדש מופיע שם אחרי Refresh (לחיצה ימנית → Refresh).",
        ru: "SQL Server Express — сам сервер. Он работает в фоне и хранит базы. В Services проверяют, что служба SQL Server (SQLEXPRESS) в состоянии Running.\nSQL Server Management Studio 22 (SSMS) — окно, где пишут команды. Оно подключается к серверу:\nServer Name: `.\\SQLEXPRESS` · Authentication: Windows Authentication · галочка Trust Server Certificate · Connect.\nПосле подключения: New Query, пишем код, затем Execute или F5. Если выделить одну строку и нажать F5 — выполнится только она.\nСлева окно Object Explorer — список баз и таблиц. Новая база появляется там после Refresh (правый клик → Refresh).",
        en: "SQL Server Express is the server itself. It runs in the background and stores the databases. In Services, check that SQL Server (SQLEXPRESS) is Running.\nSQL Server Management Studio 22 (SSMS) is the window where you type commands. It connects to the server:\nServer Name: `.\\SQLEXPRESS` · Authentication: Windows Authentication · tick Trust Server Certificate · Connect.\nAfter connecting: New Query, type code, then Execute or F5. If you select one line and press F5, only that line runs.\nOn the left, Object Explorer lists databases and tables. A new database shows up there after Refresh (right-click → Refresh)."
      } },
    { "why": {"he": "Windows מגן על תיקיות מערכת מפני שינוי. התקנה של שרת כותבת לתיקיות כאלה ומתקינה שירות, ולכן צריך הרשאות מנהל. זו לא תקלה בתוכנה אלא הגנה של Windows.", "ru": "Windows защищает системные папки от изменений. Установка сервера пишет в такие папки и ставит службу, поэтому нужны права администратора. Это не поломка программы, а защита Windows.", "en": "Windows protects system folders from changes. Installing a server writes into such folders and adds a service, so it needs administrator rights. It is not a bug in the program but Windows protection."}, kind: "tip",
      title: { he: "שגיאה בהתקנה: Access … is denied", ru: "Ошибка установки: Access … is denied", en: "Install error: Access … is denied" },
      text: {
        he: "בהתקנה הופיעה שגיאה: Access to the path …\\SSEI\\LogFiles is denied. לתוכנת ההתקנה חסרות הרשאות: קליק ימני על קובץ ההתקנה → Run as administrator.",
        ru: "При установке была ошибка: Access to the path …\\SSEI\\LogFiles is denied. Установщику не хватает прав: правой кнопкой по установщику → «Запуск от имени администратора».",
        en: "During installation an error appeared: Access to the path …\\SSEI\\LogFiles is denied. The installer lacks permissions: right-click the installer → Run as administrator."
      } },
    { "why": {"he": "`MSSQL$SQLEXPRESS` הוא שם השירות ב-Windows: \"שירות SQL, עותק בשם SQLEXPRESS\". על מחשב אחד אפשר להתקין כמה עותקים של השרת, ולכל אחד שם. בחיבור כותבים \"מחשב\\עותק\": הנקודה היא המחשב הזה, ו-SQLEXPRESS הוא העותק.", "ru": "`MSSQL$SQLEXPRESS` — это имя службы в Windows: «служба SQL, копия по имени SQLEXPRESS». На одном компьютере можно поставить несколько копий сервера, у каждой своё имя. При подключении пишут «компьютер\\копия»: точка — этот компьютер, SQLEXPRESS — копия.", "en": "`MSSQL$SQLEXPRESS` is the Windows service name: \"SQL service, instance named SQLEXPRESS\". One computer can have several server instances, each with a name. To connect you write \"computer\\instance\": the dot is this computer, SQLEXPRESS is the instance."}, kind: "qa",
      q: {
        he: "את שם השרת מעתיקים יחד עם סימן הדולר?",
        ru: "Имя сервера переписывать вместе со знаком доллара?",
        en: "Do we copy the server name together with the dollar sign?"
      },
      a: {
        he: "לא. ב־Services השם נראה כמו `MSSQL$SQLEXPRESS`. לוקחים רק מה שמימין ל־$, ולכן מתחברים ל־`.\\SQLEXPRESS` (הנקודה = המחשב הזה).",
        ru: "Нет. В Services имя выглядит как `MSSQL$SQLEXPRESS`. Берём только то, что справа от $, поэтому подключаемся к `.\\SQLEXPRESS` (точка = этот компьютер).",
        en: "No. In Services the name looks like `MSSQL$SQLEXPRESS`. Take only what is right of the $, so you connect to `.\\SQLEXPRESS` (the dot means this computer)."
      } },
    { "why": {"he": "למה `create` לא נכנס לבד? כי לפעמים יוצרים כמה מסדים מאותו חלון, או יוצרים מסד ונשארים לעבוד במקום אחר. `use` הוא החלטה נפרדת: \"מעכשיו אני כאן\". master הוא מסד המערכת של השרת עצמו — לא לשים בו טבלאות שלנו.", "ru": "Почему `create` не переходит сам? Иногда из одного окна создают несколько баз или создают базу, а работают в другой. `use` — отдельное решение: «теперь я здесь». master — системная база самого сервера, свои таблицы туда класть не надо.", "en": "Why does `create` not switch by itself? Sometimes you create several databases from one window, or create one and keep working elsewhere. `use` is a separate decision: \"from now on I am here\". master is the server's own system database; do not put your tables there."}, kind: "board",
      title: { he: "יוצרים מסד ועוברים אליו", ru: "Создаём базу и переходим в неё", en: "Create a database and switch to it" },
      text: {
        he: "`create database` יוצר מסד חדש, אבל לא עובר אליו. `use` אומר: מעכשיו עובדים במסד הזה. בלי זה עובדים במסד המערכת master.\nל־SQL לא משנה אותיות גדולות או קטנות. שם עם רווח כותבים בסוגריים מרובעים: `[Dugma 2]`.",
        ru: "`create database` создаёт новую базу, но не переходит в неё. `use` говорит: дальше работаем в этой базе. Без этого работаешь в системной базе master.\nSQL не различает большие и маленькие буквы. Имя с пробелом пишут в квадратных скобках: `[Dugma 2]`.",
        en: "`create database` creates a new database but does not switch to it. `use` says: from now on work in this database. Without it you are in the system database master.\nSQL ignores upper/lower case. A name with a space goes in square brackets: `[Dugma 2]`."
      },
      math: ["create database Dugma2", "use Dugma2"] },
    { "why": {"he": "הרשימה למעלה ו-`use` עושים אותו דבר. היתרון של `use` בקוד: כשפותחים את הקובץ מחר, הוא יעבוד במסד הנכון גם אם ברשימה כתוב master.", "ru": "Список наверху и `use` делают одно и то же. Плюс `use` в коде: если завтра открыть файл, он сработает в нужной базе, даже если в списке стоит master.", "en": "The dropdown and `use` do the same thing. The advantage of `use` in code: when you open the file tomorrow, it runs in the right database even if the dropdown says master."}, kind: "qa",
      q: {
        he: "חייבים לכתוב `use Dugma2`?",
        ru: "Обязательно писать `use Dugma2`?",
        en: "Do we have to write `use Dugma2`?"
      },
      a: {
        he: "לא. אפשר לבחור את המסד ברשימה הנפתחת בסרגל העליון (שם שכתוב master) — זה עושה אותו דבר. באותה רשימה גם עוברים בין מסדים שונים.",
        ru: "Нет. Можно выбрать базу в выпадающем списке на верхней панели (где написано master) — это то же самое. В этом же списке переходят между разными базами.",
        en: "No. You can pick the database in the drop-down list on the top toolbar (where it says master) — it does the same. The same list switches between databases."
      } },
    { "why": {"he": "למה צריך סוג לכל עמודה? השרת שומר מיליוני תאים, ולכן הוא רוצה לדעת מראש מה ייכנס: מספר אפשר לחבר ולמיין לפי גודל, טקסט — לא. ה-`n` ב-`nvarchar` אומר Unicode, ולכן עברית ורוסית נשמרות נכון. המספר בסוגריים הוא תקרה: מילה ארוכה יותר לא תיכנס.", "ru": "Зачем каждому столбцу тип? Сервер хранит миллионы ячеек и хочет заранее знать, что в них будет: числа можно складывать и сортировать по величине, текст — нет. Буква `n` в `nvarchar` значит Unicode, поэтому иврит и русский сохраняются правильно. Число в скобках — потолок: слово длиннее не поместится.", "en": "Why does each column need a type? The server stores millions of cells and wants to know in advance what goes in: numbers can be added and sorted by size, text cannot. The `n` in `nvarchar` means Unicode, so Hebrew and Russian are stored correctly. The number in brackets is a ceiling: a longer word will not fit."}, kind: "board",
      title: { he: "יוצרים טבלה: create table", ru: "Создаём таблицу: create table", en: "Create a table: create table" },
      text: {
        he: "אחרי שם הטבלה, בסוגריים — רשימת העמודות: שם העמודה וסוג הנתונים, ופסיק בין עמודות (אחרי האחרונה אין פסיק).\n`nvarchar(20)` — טקסט עד 20 תווים (גם בעברית). המקום תופס רק כמה שכתבת בפועל — לכן \"var\", אורך משתנה.\n`int` — מספר שלם, בלי אורך בסוגריים.\nהעמודות: chanut — חנות, ktovet — כתובת, email, iskaot — עסקאות, menahel — מנהל.",
        ru: "После имени таблицы в скобках — список столбцов: имя столбца и тип данных, между столбцами запятая (после последнего запятой нет).\n`nvarchar(20)` — текст до 20 символов (в том числе на иврите). Место занимается только под то, что реально написано, — отсюда «var», переменная длина.\n`int` — целое число, длину в скобках не пишут.\nСтолбцы: chanut — магазин, ktovet — адрес, email, iskaot — сделки, menahel — менеджер.",
        en: "After the table name, in brackets, comes the list of columns: column name and data type, with a comma between columns (none after the last one).\n`nvarchar(20)` — text up to 20 characters (Hebrew too). It only takes as much space as you actually wrote — hence \"var\", variable length.\n`int` — a whole number, no length in brackets.\nThe columns: chanut — shop, ktovet — address, email, iskaot — deals, menahel — manager."
      },
      math: [
        "create table shlifot",
        "(",
        " chanut nvarchar(20),",
        " ktovet nvarchar(30),",
        " email nvarchar(20),",
        " iskaot int,",
        " menahel nvarchar(20)",
        ")"
      ] },
    { "why": {"he": "ל-`int` יש גודל קבוע: הוא תמיד תופס אותו מקום ומחזיק מספרים עד בערך 2 מיליארד (פלוס או מינוס). לכן אין מה לכתוב בסוגריים. ומה לגבי מספר טלפון? הוא נראה כמו מספר, אבל לא מחשבים איתו ויש בו 0 בהתחלה — לכן שומרים אותו כטקסט.", "ru": "У `int` размер постоянный: он всегда занимает одно и то же место и хранит числа примерно до 2 миллиардов (плюс или минус). Поэтому в скобках писать нечего. А номер телефона? Он похож на число, но с ним не считают и он начинается с 0, поэтому его хранят как текст.", "en": "`int` has a fixed size: it always takes the same space and holds numbers up to about 2 billion (plus or minus). So there is nothing to put in brackets. What about a phone number? It looks like a number, but you never calculate with it and it starts with 0, so it is stored as text."}, kind: "qa",
      q: {
        he: "למה ל־iskaot יש `int` בלי מספר בסוגריים?",
        ru: "Почему у iskaot тип `int` и без числа в скобках?",
        en: "Why does iskaot have `int` with no number in brackets?"
      },
      a: {
        he: "כי שם יש מספר (למשל 9). בשאר העמודות יש טקסט, ולכן `nvarchar` עם מקסימום 20 או 30. ל־`int` לא כותבים אורך — השרת יודע אותו לבד.",
        ru: "Потому что там число (например, 9). В остальных столбцах текст, поэтому `nvarchar` с максимумом 20 или 30. Для `int` длину не указывают — сервер знает её сам.",
        en: "Because it holds a number (e.g. 9). The other columns hold text, so `nvarchar` with a maximum of 20 or 30. `int` takes no length — the server knows it."
      } },
    { "why": {"he": "למה אותו סדר? כשלא כותבים את שמות העמודות, השרת פשוט ממלא אותן לפי הסדר מ-create table: ערך ראשון לעמודה ראשונה וכן הלאה. אם מחליפים מקומות, `9` ייכנס לאימייל, או שתהיה שגיאה. גרשיים מסמנים איפה טקסט מתחיל ונגמר — אחרת השרת לא יודע אם `moshe` זה טקסט או שם של עמודה.", "ru": "Почему тот же порядок? Если не написать имена столбцов, сервер просто раскладывает значения по порядку из create table: первое в первый столбец и так далее. Перепутаешь — `9` попадёт в email или будет ошибка. Кавычки показывают, где текст начинается и кончается, иначе сервер не знает, `moshe` — это текст или имя столбца.", "en": "Why the same order? If you do not name the columns, the server fills them in the order from create table: first value to the first column, and so on. Swap them and `9` lands in email, or you get an error. Quotes mark where text starts and ends; otherwise the server cannot tell whether `moshe` is text or a column name."}, kind: "board",
      title: { he: "מכניסים שורות: insert into … values", ru: "Добавляем строки: insert into … values", en: "Add rows: insert into … values" },
      text: {
        he: "הערכים באותו סדר כמו העמודות ב־create table. טקסט — בגרש בודד מכל צד: `'moshe'`. מספר — בלי גרשיים. אפשר להכניס כמה שורות בפקודה אחת: סוגריים עם פסיק ביניהם. בשיעור הכניסו 11 חנויות (קודם 3, בדקו, ואז השאר):",
        ru: "Значения в том же порядке, что столбцы в create table. Текст — в одинарных кавычках с двух сторон: `'moshe'`. Число — без кавычек. Можно добавить много строк одной командой: скобки через запятую. На уроке добавили 11 магазинов (сначала 3, проверили, потом остальные):",
        en: "Values go in the same order as the columns in create table. Text goes in single quotes on both sides: `'moshe'`. Numbers have no quotes. Several rows can go in one command: brackets separated by commas. In class 11 shops were added (first 3, checked, then the rest):"
      },
      math: [
        "insert into shlifot values",
        "('rehitim', 'dayan 11 rechovot', 'a@gmail', 9, 'moshe'),",
        "('rehitim', 'ezra 14 haifa', 'bb@walla.co.il', 9, 'moshe'),",
        "('chalav', 'ofer 14 beer sheva', 'b@gmail', 400, 'moshe'),",
        "('sfarim', 'herzl 55 holon', 'c.yahoo.com', 8, 'shimon'),",
        "('sratim', 'chaim 155 metula', 'c.bezeqint.co.il', 8, 'shimon'),",
        "('hazagot', 'elazar 44 holon', 'c.gmail', 8, 'avi'),",
        "('shayish', 'vered 2 kfar saba', 'a7@walla.co.il', 1, 'avi'),",
        "('rehitim', 'iris 44 kfar saba', 'a4@walla.co.il', 110, 'sari'),",
        "('ginot', 'hanadiv 89 chadera', 'a88@walla.co.il', 55, 'moshe'),",
        "('shayish', 'ezra 4 dimona', 'd@gmail', 18, 'riki'),",
        "('rehitim', 'golda meir 89 chadera', 'e@gmail', 104, 'moshe')"
      ] },
    { "why": {"he": "הפסיק מפריד בין שדות, והגרש מקיף את הטקסט. אלה שני תפקידים שונים, ולכן הם לא \"מתחברים\". דרך לבדוק: ספרו פסיקים — צריך להיות אחד פחות ממספר העמודות (5 עמודות → 4 פסיקים).", "ru": "Запятая разделяет поля, а кавычки обнимают текст. Это две разные роли, поэтому они не «сливаются». Как проверить: посчитай запятые, их на одну меньше, чем столбцов (5 столбцов → 4 запятые).", "en": "The comma separates fields; the quotes wrap the text. Two different jobs, so they do not \"merge\". A quick check: count the commas, there should be one fewer than the columns (5 columns → 4 commas)."}, kind: "qa",
      q: {
        he: "אז שמים שני פסיקים?",
        ru: "Значит, ставят две запятые?",
        en: "So we put two commas?"
      },
      a: {
        he: "לא. גרשיים שמים משני צדי הטקסט, ופסיק אחד בין שדה לשדה: `('rehitim', 'dayan 11 rechovot', 'a@gmail', 9, 'moshe')`.",
        ru: "Нет. Кавычки ставят с двух сторон текста, а запятая одна, между полями: `('rehitim', 'dayan 11 rechovot', 'a@gmail', 9, 'moshe')`.",
        en: "No. Quotes go on both sides of the text, and one comma between fields: `('rehitim', 'dayan 11 rechovot', 'a@gmail', 9, 'moshe')`."
      } },
    { "why": {"he": "`select` הוא השאלה הכי נפוצה בעבודה עם מסדים, והוא בטוח: הוא רק מראה ולא משנה כלום. לכן אפשר להריץ אותו כמה פעמים שרוצים. בעבודה אמיתית עדיף לכתוב את שמות העמודות ולא `*`: בטבלה עם 50 עמודות קשה למצוא את מה שצריך.", "ru": "`select` — самый частый вопрос к базе, и он безопасен: только показывает и ничего не меняет. Поэтому его можно запускать сколько угодно. В настоящей работе лучше писать имена столбцов, а не `*`: в таблице на 50 столбцов трудно найти нужное.", "en": "`select` is the most common question you ask a database, and it is safe: it only shows and changes nothing. So you can run it as often as you like. In real work it is better to list column names rather than `*`: in a table with 50 columns it is hard to find what you need."}, kind: "board",
      title: { he: "שליפה: select", ru: "Выборка: select", en: "Retrieving: select" },
      text: {
        he: "`select` = בחר. `*` = כל העמודות (כל הטורים). `from shlifot` = מהטבלה shlifot. זו שאילתה — היא לא משנה כלום, רק מציגה.\nבמקום `*` אפשר לכתוב שמות עמודות עם פסיק: הן יוצגו בסדר שכתבת, וכל השורות נשארות.",
        ru: "`select` = выбрать. `*` = все столбцы (כל הטורים). `from shlifot` = из таблицы shlifot. Это запрос — он ничего не меняет, только показывает.\nВместо `*` можно написать имена столбцов через запятую: они выйдут в написанном порядке, а строки останутся все.",
        en: "`select` = choose. `*` = all columns. `from shlifot` = from the shlifot table. This is a query — it changes nothing, it only shows.\nInstead of `*` you can list column names with commas: they appear in the order you wrote, and all rows stay."
      },
      math: [
        "select * from shlifot",
        "select chanut from shlifot",
        "select chanut, menahel from shlifot"
      ] },
    { "why": {"he": "למה שני מקומות? כי אלה שתי שאלות שונות: \"מה להראות?\" (עמודות, אחרי select) ו\"על מי?\" (שורות, אחרי where). `or` מרחיב — יותר שורות עוברות. בשיעור הבא נראה את `and`, שמצמצם.", "ru": "Почему два места? Это два разных вопроса: «что показать?» (столбцы, после select) и «про кого?» (строки, после where). `or` расширяет — проходит больше строк. На следующем уроке будет `and`, он сужает.", "en": "Why two places? They are two different questions: \"what to show?\" (columns, after select) and \"about whom?\" (rows, after where). `or` widens — more rows pass. Next lesson brings `and`, which narrows."}, kind: "board",
      title: { he: "סינון שורות: where", ru: "Фильтр строк: where", en: "Filtering rows: where" },
      text: {
        he: "מה שבין select ל־from מסנן עמודות; `where` מסנן שורות — נשארות רק השורות שבהן התנאי נכון. ביחד (שילוב): גם עמודות וגם שורות.\nבתנאי אפשר להשוות מספרים: `>=` גדול או שווה. `or` (או) מחבר שני תנאים — השורה נכנסת אם לפחות אחד מהם נכון.",
        ru: "То, что между select и from, отбирает столбцы; `where` отбирает строки — остаются только те, где условие верно. Вместе (שילוב, сочетание): и столбцы, и строки.\nВ условии можно сравнивать числа: `>=` больше или равно. `or` (או) соединяет два условия — строка подходит, если верно хотя бы одно.",
        en: "What is between select and from filters columns; `where` filters rows — only rows where the condition is true remain. Together (a \"combination\"): both columns and rows.\nA condition can compare numbers: `>=` greater than or equal. `or` joins two conditions — a row qualifies if at least one is true."
      },
      math: [
        "select * from shlifot where chanut = 'rehitim'",
        "-- shiluv:",
        "select ktovet, email from shlifot where chanut = 'rehitim'",
        "select * from shlifot",
        "where iskaot >= 10",
        "select * from shlifot",
        "where iskaot >= 10 or chanut = 'rehitim'"
      ] },
    { "why": {"he": "למה `drop` בהערה? כדי שהשורה תהיה מוכנה, אבל לא תרוץ בטעות כשמריצים את כל הקובץ ב-F5. אין \"פח מחזור\" במסד נתונים: מה שנמחק, נמחק. לכן מסירים את `--` רק כשבאמת רוצים להתחיל מחדש.", "ru": "Зачем `drop` в комментарии? Чтобы строка была под рукой, но не выполнилась случайно, когда весь файл запускают по F5. В базе данных нет «корзины»: что удалено, то удалено. Поэтому `--` убирают, только когда правда хотят начать заново.", "en": "Why keep `drop` in a comment? So the line is ready but does not run by accident when you press F5 on the whole file. A database has no \"recycle bin\": what is dropped is gone. So remove the `--` only when you really want to start over."}, kind: "tip",
      title: { he: "הערות `--` ו־drop table", ru: "Комментарии `--` и drop table", en: "Comments `--` and drop table" },
      text: {
        he: "שני מקפים `--` הופכים שורה להערה (remark): השרת לא קורא אותה.\n`drop table shlifot` מוחק את הטבלה כולה עם הנתונים — אי אפשר להחזיר. בשיעור היא עמדה בהערה, \"to be on the safe side\": אם כבר קיימת טבלה ישנה בשם הזה, מוחקים אותה ויוצרים מחדש. כשלרבים בכיתה הייתה שגיאה — הריצו drop table ואז שוב create table.",
        ru: "Две чёрточки `--` делают строку комментарием (remark, הערה): сервер её не читает.\n`drop table shlifot` удаляет таблицу целиком вместе с данными — вернуть нельзя. На уроке она стояла в комментарии «to be on the safe side»: если уже есть старая таблица с таким именем, её удаляют и создают заново. Когда у многих в классе была ошибка — выполнили drop table, а потом снова create table.",
        en: "Two dashes `--` turn a line into a comment (remark): the server does not read it.\n`drop table shlifot` deletes the whole table with its data — it cannot be undone. In class it sat in a comment \"to be on the safe side\": if an old table with that name already exists, you drop it and create it again. When many in the class got an error, they ran drop table and then create table again."
      },
      math: ["--drop table shlifot"] },
    { "why": {"he": "כמעט כל השגיאות כאן הן \"השרת לא מצא את מה שביקשת\": מסד אחר (master), שם עם טעות, שם עם רווח, או טקסט בלי גרשיים שהשרת חושב שהוא שם של עמודה (הודעה `Invalid column name`). כשיש שגיאה — קודם בודקים באיזה מסד אנחנו ואיך בדיוק כתוב השם.", "ru": "Почти все ошибки здесь — это «сервер не нашёл то, что ты просишь»: другая база (master), имя с опечаткой, имя с пробелом или текст без кавычек, который сервер принял за имя столбца (сообщение `Invalid column name`). При ошибке сначала смотри, в какой ты базе и как точно написано имя.", "en": "Almost every error here means \"the server could not find what you asked for\": another database (master), a typo in a name, a name with a space, or text without quotes that the server takes for a column name (message `Invalid column name`). When you get an error, first check which database you are in and exactly how the name is spelled."}, kind: "tip",
      title: { he: "טעויות שהיו בכיתה", ru: "Ошибки, которые были на уроке", en: "Mistakes seen in class" },
      text: {
        he: "• `use master` במקום המסד שלך — הטבלה נוצרת במסד master.\n• שגיאת כתיב: `shilfot` במקום `shlifot` — אחר כך השאילתות לא מוצאות את הטבלה.\n• `[Dugma 2]` ו־`dugma2` — עם רווח ובלי רווח אלה שני מסדים שונים.\n• פסיק אחרי העמודה האחרונה ב־create table — שגיאה.\n• טקסט בלי גרשיים: `where chanut = rehitim` — SQL מחפש עמודה בשם rehitim. צריך `'rehitim'`.",
        ru: "• `use master` вместо своей базы — таблица создаётся в master.\n• Опечатка: `shilfot` вместо `shlifot` — потом запросы не находят таблицу.\n• `[Dugma 2]` и `dugma2` — с пробелом и без это две разные базы.\n• Запятая после последнего столбца в create table — ошибка.\n• Текст без кавычек: `where chanut = rehitim` — SQL ищет столбец rehitim. Нужно `'rehitim'`.",
        en: "• `use master` instead of your own database — the table is created in master.\n• A typo: `shilfot` instead of `shlifot` — later queries cannot find the table.\n• `[Dugma 2]` and `dugma2` — with and without a space these are two different databases.\n• A comma after the last column in create table — an error.\n• Text without quotes: `where chanut = rehitim` — SQL looks for a column named rehitim. You need `'rehitim'`."
      } },
    { "why": {"he": "זה אותו מסלול כמו בשיעור, רק לבד: `create database` → `use` → `create table` עם סוג לכל עמודה. מספר קורס ומספר שעות הם `int`, שם קורס ומרצה הם `nvarchar`. מספר קורס הוא המועמד הטבעי למפתח — הוא לא חוזר.", "ru": "Это тот же путь, что на уроке, только самому: `create database` → `use` → `create table` с типом для каждого столбца. Номер курса и число часов — `int`, название курса и лектор — `nvarchar`. Номер курса — естественный кандидат в ключ: он не повторяется.", "en": "It is the same path as in class, on your own: `create database` → `use` → `create table` with a type for every column. Course number and hours are `int`; course name and lecturer are `nvarchar`. The course number is the natural key candidate — it does not repeat."}, kind: "board",
      title: { he: "תרגיל מהלוח", ru: "Упражнение с доски", en: "Exercise from the board" },
      text: {
        he: "1) צרו מסד נתונים בשם קורסים.\n2) צרו טבלה בשם קורס.\n3) הכניסו את השדות: מספר קורס, שם קורס, מספר שעות, מרצה.\n\"שדה\" כאן זה עמודה. שמות בעברית עם רווח כותבים בסוגריים מרובעים, למשל `[מספר קורס]`; פשוט יותר באותיות לטיניות בלי רווחים.",
        ru: "1) Создайте базу данных «курсы» (קורסים).\n2) Создайте таблицу «курс» (קורס).\n3) Добавьте поля: номер курса, название курса, количество часов, лектор.\n«Поле» (שדה) здесь — это столбец. Имена на иврите с пробелом пишут в квадратных скобках, например `[מספר קורס]`; проще латиницей без пробелов.",
        en: "1) Create a database called courses (קורסים).\n2) Create a table called course (קורס).\n3) Add the fields: course number, course name, number of hours, lecturer.\nA \"field\" here is a column. Hebrew names with a space go in square brackets, e.g. `[מספר קורס]`; Latin letters without spaces are simpler."
      } },
    { "why": {"he": "גם בלי הגשה כדאי לעשות: את הצעדים האלה (מסד → טבלה → הכנסה → שאילתה) חוזרים עליהם בכל שיעור SQL ובמטלות. מי שעשה אותם פעם אחת לבד, עובד אחר כך הרבה יותר מהר.", "ru": "Даже без сдачи стоит сделать: эти шаги (база → таблица → вставка → запрос) повторяются на каждом уроке SQL и в заданиях. Кто сделал их один раз сам, дальше работает гораздо быстрее.", "en": "Even without handing it in, it is worth doing: these steps (database → table → insert → query) repeat in every SQL lesson and assignment. Whoever has done them once alone works much faster later."}, kind: "qa",
      q: {
        he: "את התרגיל מהלוח צריך להגיש?",
        ru: "Упражнение с доски надо сдавать?",
        en: "Do we have to hand in the board exercise?"
      },
      a: {
        he: "לא, הוא לתרגול ולא להגשה.",
        ru: "Нет, оно для тренировки, не для сдачи.",
        en: "No, it is for practice, not for submission."
      } }
  ],

  review: [
    { title: { he: "המבנה", ru: "Устройство", en: "The structure" },
      text: { he: "מסד נתונים ← טבלאות ← עמודות ← רשומות (שורות). עמודה = תכונה, שורה = פריט אחד שלם.", ru: "База → таблицы → столбцы → записи (строки). Столбец = свойство, строка = один предмет целиком.", en: "Database → tables → columns → records (rows). A column is a property, a row is one whole item." } },
    { title: { he: "קשרים", ru: "Связи", en: "Relations" },
      text: { he: "1:1, 1:N, M:N. טבלאות מתחברות דרך מפתח ראשי — בדרך כלל מספר, כמו ת.ז.", ru: "1:1, 1:N, M:N. Таблицы связываются через первичный ключ — обычно число, как ת.ז.", en: "1:1, 1:N, M:N. Tables link through a primary key — usually a number, like an ID." } },
    { title: { he: "מסד", ru: "База", en: "Database" },
      text: { he: "`create database שם` — יוצר. `use שם` (או הרשימה למעלה) — עובר אליו.", ru: "`create database имя` — создаёт. `use имя` (или список сверху) — переходит в неё.", en: "`create database name` creates it. `use name` (or the top list) switches to it." } },
    { title: { he: "טבלה וסוגים", ru: "Таблица и типы", en: "Table and types" },
      text: { he: "`create table שם ( עמודה סוג, … )`. `nvarchar(n)` — טקסט עד n תווים, `int` — מספר שלם.", ru: "`create table имя ( столбец тип, … )`. `nvarchar(n)` — текст до n символов, `int` — целое число.", en: "`create table name ( column type, … )`. `nvarchar(n)` is text up to n chars, `int` is a whole number." } },
    { title: { he: "הכנסה", ru: "Вставка", en: "Insert" },
      text: { he: "`insert into שם values (…), (…)` — באותו סדר כמו העמודות; טקסט ב־`'…'`, מספרים בלי.", ru: "`insert into имя values (…), (…)` — в порядке столбцов; текст в `'…'`, числа без кавычек.", en: "`insert into name values (…), (…)` — in column order; text in `'…'`, numbers without." } },
    { title: { he: "שליפה", ru: "Выборка", en: "Select" },
      text: { he: "`select *` — כל העמודות; `select a, b` — רק אלה. `where` — מסנן שורות. `or` — מספיק שתנאי אחד נכון.", ru: "`select *` — все столбцы; `select a, b` — только эти. `where` — фильтр строк. `or` — достаточно одного верного условия.", en: "`select *` — all columns; `select a, b` — only those. `where` filters rows. `or` — one true condition is enough." } },
    { title: { he: "בטיחות", ru: "Безопасность", en: "Safety" },
      text: { he: "`--` — הערה. `drop table` מוחק טבלה לתמיד; מחזיקים אותו בהערה ומריצים רק כשצריך.", ru: "`--` — комментарий. `drop table` удаляет таблицу навсегда; держат его в комментарии и выполняют только когда нужно.", en: "`--` is a comment. `drop table` deletes a table forever; keep it commented and run it only when needed." } }
  ],

  tasks: {
    groups: {
      board: { he: "התרגיל מהלוח: מסד קורסים", ru: "Упражнение с доски: база курсов", en: "Board exercise: a courses database" },
      code: { he: "השאילתות מקוד השיעור (טבלת shlifot)", ru: "Запросы из кода урока (таблица shlifot)", en: "Queries from the lesson code (shlifot table)" }
    },
    teacher: [
      {
        id: "t-b-1", group: "board",
        example: {"he": "משימה דומה: לפתוח את המסד shop שכבר קיים, כדי לעבוד בו → `use shop`.\nשים לב: `use` רק פותח מסד קיים. ליצור מסד חדש זו פקודה אחרת.", "ru": "Похожая задача: открыть базу shop, которая уже есть, чтобы работать в ней → `use shop`.\nОбрати внимание: `use` только открывает готовую базу. Создать новую базу — это другая команда.", "en": "A similar task: open the existing database shop to work in it → `use shop`.\nNote: `use` only opens a database that already exists. Creating a new database is a different command."},
        label: { he: "שלב 1", ru: "Шаг 1", en: "Step 1" },
        kind: "choice",
        text: {
          he: "שלב 1 בתרגיל: ליצור מסד נתונים בשם קורסים. איזו פקודה?",
          ru: "Шаг 1 упражнения: создать базу данных «курсы». Какая команда?",
          en: "Step 1 of the exercise: create a database called courses. Which command?"
        },
        options: ["`create table kursim`", "`use kursim`", "`create database kursim`", "`select * from kursim`"],
        answer: { index: 2 },
        hints: [
          { he: "יוצרים — create. מה יוצרים: טבלה או מסד?", ru: "Создать — create. Что создаём: таблицу или базу?", en: "Create is create. What are we creating: a table or a database?" },
          { he: "`use` רק עובר למסד שכבר קיים.", ru: "`use` только переходит в уже существующую базу.", en: "`use` only switches to a database that already exists." }
        ],
        solution: [
          "create database kursim",
          { he: "ורק אחרי זה עוברים אליו:", ru: "И только потом переходим в неё:", en: "Only then switch to it:" },
          "use kursim"
        ]
      },
      {
        id: "t-b-2", group: "board",
        example: {"he": "שדה «שם הפרי» (טקסט בעברית, עד 20 אותיות) → `nvarchar(20)`.\nטקסט הוא nvarchar עם אורך בסוגריים. לשדה עם מספר צריך טיפוס אחר.", "ru": "Поле «название фрукта» (текст на иврите, до 20 букв) → `nvarchar(20)`.\nТекст — nvarchar с длиной в скобках. Для поля с числом нужен другой тип.", "en": "A \"fruit name\" field (Hebrew text, up to 20 letters) → `nvarchar(20)`.\nText is nvarchar with the length in brackets. A field with a number needs a different type."},
        label: { he: "סוג לשעות", ru: "Тип для часов", en: "Type for hours" },
        kind: "text",
        text: {
          he: "איזה סוג נתונים מתאים לשדה מספר שעות (מספר שלם)?",
          ru: "Какой тип данных подходит для поля «количество часов» (целое число)?",
          en: "Which data type fits the field number of hours (a whole number)?"
        },
        answer: { accept: ["int", "integer"] },
        hints: [
          { he: "כמו iskaot בטבלה מהשיעור.", ru: "Как iskaot в таблице с урока.", en: "Like iskaot in the lesson table." },
          { he: "שלוש אותיות, מ־integer.", ru: "Три буквы, от integer.", en: "Three letters, from integer." }
        ],
        solution: [
          { he: "מספר שעות הוא מספר שלם, ולכן `int` (בלי אורך בסוגריים).", ru: "Количество часов — целое число, поэтому `int` (без длины в скобках).", en: "Number of hours is a whole number, so `int` (no length in brackets)." },
          "shaot int"
        ]
      },
      {
        id: "t-b-3", group: "board",
        example: {"he": "טבלת פירות נכונה:\n`create table perot (mispar_pri int, shem nvarchar(20), kamut int)`\nבודקים לפי שלבים:\nשלב 1. כל העמודות בתוך הסוגריים.\nשלב 2. בין העמודות יש פסיק, ואחרי העמודה האחרונה אין פסיק.\nשלב 3. הטיפוס מתאים למשמעות: מספר וכמות הם `int`, שם הוא `nvarchar`.", "ru": "Правильная таблица фруктов:\n`create table perot (mispar_pri int, shem nvarchar(20), kamut int)`\nПроверяем по шагам:\nШаг 1. Все столбцы внутри скобок.\nШаг 2. Между столбцами запятая, после последнего столбца запятой нет.\nШаг 3. Тип подходит к смыслу: номер и количество — `int`, название — `nvarchar`.", "en": "A correct fruit table:\n`create table perot (mispar_pri int, shem nvarchar(20), kamut int)`\nCheck step by step:\nStep 1. All columns are inside the brackets.\nStep 2. A comma between columns, no comma after the last column.\nStep 3. The type fits the meaning: a number and an amount are `int`, a name is `nvarchar`."},
        label: { he: "הטבלה", ru: "Таблица", en: "The table" },
        kind: "choice",
        text: {
          he: "שלבים 2–3: איזו פקודה יוצרת נכון את הטבלה קורס עם ארבעת השדות?",
          ru: "Шаги 2–3: какая команда правильно создаёт таблицу «курс» с четырьмя полями?",
          en: "Steps 2–3: which command correctly creates the course table with the four fields?"
        },
        options: [
          "`create table kurs (mispar_kurs int, shem_kurs nvarchar(50), shaot int, martze nvarchar(50),)`",
          "`create table kurs (mispar_kurs int, shem_kurs nvarchar(50), shaot int, martze nvarchar(50))`",
          "`create table kurs mispar_kurs int, shem_kurs nvarchar(50), shaot int, martze nvarchar(50)`",
          "`create table kurs (mispar_kurs nvarchar(50), shem_kurs int, shaot nvarchar(50), martze int)`"
        ],
        answer: { index: 1 },
        hints: [
          { he: "בדקו שלושה דברים: סוגריים, פסיק אחרון, וסוג לכל שדה.", ru: "Проверь три вещи: скобки, последнюю запятую и тип каждого поля.", en: "Check three things: brackets, the last comma, and each field type." },
          { he: "שם קורס ומרצה הם טקסט; מספר קורס ושעות הם מספרים.", ru: "Название курса и лектор — текст; номер курса и часы — числа.", en: "Course name and lecturer are text; course number and hours are numbers." }
        ],
        solution: [
          { he: "באפשרות הראשונה יש פסיק אחרי העמודה האחרונה — שגיאה.", ru: "В первом варианте запятая после последнего столбца — ошибка.", en: "The first option has a comma after the last column — an error." },
          { he: "בשלישית חסרים סוגריים; ברביעית הסוגים הפוכים.", ru: "В третьем нет скобок; в четвёртом типы перепутаны.", en: "The third has no brackets; the fourth has the types swapped." },
          "create table kurs (mispar_kurs int, shem_kurs nvarchar(50), shaot int, martze nvarchar(50))"
        ]
      },
      {
        id: "t-c-1", group: "code",
        example: {"he": "טבלה אחרת `perot (id, pri, kamut)`:\n```\n(1,'tapuach',4)\n(2,'banana',6)\n(3,'tapuach',2)\n(4,'anavim',9)\n(5,'banana',1)\n```\n`select * from perot where pri = 'banana'`\nמחפשים שורות שבהן `pri = banana`: שורה 2 ושורה 5 → 2 שורות.", "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where pri = 'banana'`\nИщем строки, где pri = banana: строка 2 и строка 5 → 2 строки.", "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where pri = 'banana'`\nLook for rows where pri = banana: row 2 and row 5 → 2 rows."},
        label: "where = 'rehitim'",
        kind: "number",
        text: {
          he: "כמה שורות תחזיר השאילתה מהשיעור על טבלת shlifot (11 החנויות)?\n`select * from shlifot where chanut = 'rehitim'`",
          ru: "Сколько строк вернёт запрос с урока на таблице shlifot (11 магазинов)?\n`select * from shlifot where chanut = 'rehitim'`",
          en: "How many rows does this lesson query return on the shlifot table (the 11 shops)?\n`select * from shlifot where chanut = 'rehitim'`"
        },
        answer: { value: "4" },
        hints: [
          { he: "עברו על ה־insert ובדקו בכל שורה את הערך הראשון (chanut).", ru: "Пройди по insert и в каждой строке смотри первое значение (chanut).", en: "Go through the insert and check the first value (chanut) in each row." }
        ],
        solution: [
          { he: "שורות שבהן chanut = 'rehitim':", ru: "Строки, где chanut = 'rehitim':", en: "Rows where chanut = 'rehitim':" },
          "dayan 11 rechovot · ezra 14 haifa · iris 44 kfar saba · golda meir 89 chadera",
          { he: "סה״כ 4 שורות.", ru: "Итого 4 строки.", en: "That is 4 rows." }
        ]
      },
      {
        id: "t-c-2", group: "code",
        example: {"he": "טבלה אחרת `perot (id, pri, kamut)`:\n```\n(1,'tapuach',4)\n(2,'banana',6)\n(3,'tapuach',2)\n(4,'anavim',9)\n(5,'banana',1)\n```\n`select * from perot where kamut >= 4`\n`>=` פירושו «גדול או שווה», לכן גם 4 מתאים.\nkamut: 4 כן, 6 כן, 2 לא, 9 כן, 1 לא → 3 שורות.", "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where kamut >= 4`\n`>=` значит «больше или равно», поэтому 4 тоже подходит.\nkamut: 4 да, 6 да, 2 нет, 9 да, 1 нет → 3 строки.", "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where kamut >= 4`\n`>=` means \"greater than or equal\", so 4 fits too.\nkamut: 4 yes, 6 yes, 2 no, 9 yes, 1 no → 3 rows."},
        label: "iskaot >= 10",
        kind: "number",
        text: {
          he: "כמה שורות תחזיר השאילתה?\n`select * from shlifot where iskaot >= 10`",
          ru: "Сколько строк вернёт запрос?\n`select * from shlifot where iskaot >= 10`",
          en: "How many rows does the query return?\n`select * from shlifot where iskaot >= 10`"
        },
        answer: { value: "5" },
        hints: [
          { he: "iskaot הוא הערך הרביעי בכל שורה. אילו מהם 10 ומעלה?", ru: "iskaot — четвёртое значение в каждой строке. Какие из них 10 и больше?", en: "iskaot is the fourth value in each row. Which are 10 or more?" },
          { he: "הערכים: 9, 9, 400, 8, 8, 8, 1, 110, 55, 18, 104.", ru: "Значения: 9, 9, 400, 8, 8, 8, 1, 110, 55, 18, 104.", en: "The values: 9, 9, 400, 8, 8, 8, 1, 110, 55, 18, 104." }
        ],
        solution: [
          { he: "ערכי iskaot: 9, 9, 400, 8, 8, 8, 1, 110, 55, 18, 104.", ru: "Значения iskaot: 9, 9, 400, 8, 8, 8, 1, 110, 55, 18, 104.", en: "iskaot values: 9, 9, 400, 8, 8, 8, 1, 110, 55, 18, 104." },
          { he: "10 ומעלה: 400, 110, 55, 18, 104.", ru: "10 и больше: 400, 110, 55, 18, 104.", en: "10 or more: 400, 110, 55, 18, 104." },
          { he: "סה״כ 5 שורות.", ru: "Итого 5 строк.", en: "That is 5 rows." }
        ]
      },
      {
        id: "t-c-3", group: "code",
        example: {"he": "טבלה אחרת `perot (id, pri, kamut)`:\n```\n(1,'tapuach',4)\n(2,'banana',6)\n(3,'tapuach',2)\n(4,'anavim',9)\n(5,'banana',1)\n```\n`select * from perot where kamut >= 4 or pri = 'tapuach'`\n`or` — מספיק שהשורה מקיימת תנאי אחד.\n`kamut >= 4`: שורות 1, 2, 4.\n`pri = tapuach`: שורות 1, 3.\nשורה 1 מתאימה פעמיים, אבל נספרת פעם אחת.\nביחד: 1, 2, 3, 4 → 4 שורות.", "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where kamut >= 4 or pri = 'tapuach'`\n`or` — строке достаточно одного условия.\nkamut >= 4: строки 1, 2, 4.\npri = tapuach: строки 1, 3.\nСтрока 1 подходит дважды, но считается один раз.\nВместе: 1, 2, 3, 4 → 4 строки.", "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where kamut >= 4 or pri = 'tapuach'`\n`or` means one condition is enough for a row.\nkamut >= 4: rows 1, 2, 4.\npri = tapuach: rows 1, 3.\nRow 1 fits twice but is counted once.\nTogether: 1, 2, 3, 4 → 4 rows."},
        label: "or",
        kind: "number",
        text: {
          he: "כמה שורות תחזיר השאילתה?\n`select * from shlifot where iskaot >= 10 or chanut = 'rehitim'`",
          ru: "Сколько строк вернёт запрос?\n`select * from shlifot where iskaot >= 10 or chanut = 'rehitim'`",
          en: "How many rows does the query return?\n`select * from shlifot where iskaot >= 10 or chanut = 'rehitim'`"
        },
        answer: { value: "7" },
        hints: [
          { he: "שורה נכנסת אם לפחות אחד מהתנאים נכון.", ru: "Строка подходит, если верно хотя бы одно условие.", en: "A row qualifies if at least one condition is true." },
          { he: "5 שורות עם iskaot ≥ 10, ו־4 שורות rehitim. כמה מהן נספרו פעמיים?", ru: "5 строк с iskaot ≥ 10 и 4 строки rehitim. Сколько из них посчитаны дважды?", en: "5 rows with iskaot ≥ 10 and 4 rehitim rows. How many were counted twice?" }
        ],
        solution: [
          { he: "iskaot ≥ 10: chalav, rehitim (110), ginot, shayish (18), rehitim (104) — 5 שורות.", ru: "iskaot ≥ 10: chalav, rehitim (110), ginot, shayish (18), rehitim (104) — 5 строк.", en: "iskaot ≥ 10: chalav, rehitim (110), ginot, shayish (18), rehitim (104) — 5 rows." },
          { he: "rehitim שעוד לא נספרו: שתי השורות עם 9 עסקאות — עוד 2.", ru: "rehitim, которых ещё нет: две строки с 9 сделками — ещё 2.", en: "rehitim rows not yet counted: the two with 9 deals — 2 more." },
          "5 + 2 = 7"
        ]
      },
      {
        id: "t-c-4", group: "code",
        example: {"he": "טבלה אחרת `perot (id, pri, kamut)`:\n```\n(1,'tapuach',4)\n(2,'banana',6)\n(3,'tapuach',2)\n(4,'anavim',9)\n(5,'banana',1)\n```\n`select pri, kamut from perot where pri = 'banana'`\nשלב 1. שורות: banana — שורה 2 ושורה 5 → 2 שורות.\nשלב 2. עמודות: pri ו־kamut → 2 עמודות.\nשלב 3. תאים: `2 × 2 = 4` ערכים.", "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select pri, kamut from perot where pri = 'banana'`\nШаг 1. Строки: banana — строка 2 и строка 5 → 2 строки.\nШаг 2. Столбцы: pri и kamut → 2 столбца.\nШаг 3. Ячейки: 2 × 2 = 4 значения.", "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select pri, kamut from perot where pri = 'banana'`\nStep 1. Rows: banana is row 2 and row 5 → 2 rows.\nStep 2. Columns: pri and kamut → 2 columns.\nStep 3. Cells: 2 × 2 = 4 values."},
        label: { he: "שילוב", ru: "Сочетание", en: "Combination" },
        kind: "number",
        text: {
          he: "השאילתה \"שילוב\" מהשיעור מחזירה טבלה קטנה. כמה ערכים (תאים) יש בה?\n`select ktovet, email from shlifot where chanut = 'rehitim'`",
          ru: "Запрос «сочетание» с урока возвращает маленькую таблицу. Сколько в ней значений (ячеек)?\n`select ktovet, email from shlifot where chanut = 'rehitim'`",
          en: "The lesson's \"combination\" query returns a small table. How many values (cells) does it have?\n`select ktovet, email from shlifot where chanut = 'rehitim'`"
        },
        answer: { value: "8" },
        hints: [
          { he: "כמה עמודות ביקשנו אחרי select?", ru: "Сколько столбцов мы попросили после select?", en: "How many columns did we ask for after select?" },
          { he: "כמה שורות עוברות את ה־where? (ראו את השאלה הראשונה בקבוצה)", ru: "Сколько строк проходит через where? (см. первый вопрос группы)", en: "How many rows pass the where? (see the first question in this group)" }
        ],
        solution: [
          { he: "עמודות: ktovet, email — 2.", ru: "Столбцы: ktovet, email — 2.", en: "Columns: ktovet, email — 2." },
          { he: "שורות: 4 החנויות rehitim.", ru: "Строки: 4 магазина rehitim.", en: "Rows: the 4 rehitim shops." },
          "4 × 2 = 8"
        ]
      }
    ],

    ai: [
      {
        id: "ai-1", level: 1,
        example: {"he": "השמטה דומה: `select * ___ perot`\nבין `*` לשם הטבלה צריך את המילה «מאיזו טבלה» → `from`.\nהשאילתה המלאה: `select * from perot`.", "ru": "Похожий пропуск: `select * ___ perot`\nМежду `*` и именем таблицы нужно слово «из какой таблицы» → `from`.\nЗапрос целиком: `select * from perot`.", "en": "A similar gap: `select * ___ perot`\nBetween `*` and the table name you need the word \"from which table\" → `from`.\nThe whole query: `select * from perot`."},
        label: { he: "בחר", ru: "Выбрать", en: "Choose" },
        kind: "text",
        text: {
          he: "השלימו את מילת המפתח החסרה, כך שהשאילתה תשלוף את כל הנתונים מהטבלה:\n`___ * from shlifot`",
          ru: "Допиши пропущенное ключевое слово, чтобы запрос достал все данные из таблицы:\n`___ * from shlifot`",
          en: "Fill in the missing keyword so the query retrieves all the data from the table:\n`___ * from shlifot`"
        },
        answer: { accept: ["select", "select *"] },
        hints: [
          { he: "באנגלית: \"בחר\".", ru: "По-английски «выбрать».", en: "The English word for \"choose\"." }
        ],
        solution: [
          "select * from shlifot",
          { he: "התשובה: `select`.", ru: "Ответ: `select`.", en: "Answer: `select`." }
        ]
      },
      {
        id: "ai-2", level: 1,
        example: {"he": "`select pri, kamut from perot` → מציג רק את העמודות pri ו־kamut, ואת כל השורות.\nומה אם במקום רשימת העמודות כתוב `*`? תחשוב מה הוא מחליף.", "ru": "`select pri, kamut from perot` → показывает только столбцы pri и kamut, и все строки.\nА если вместо списка столбцов стоит `*`? Подумай, что он заменяет.", "en": "`select pri, kamut from perot` → shows only the columns pri and kamut, and all the rows.\nAnd if `*` stands instead of the list of columns? Think what it replaces."},
        label: { he: "הכוכבית", ru: "Звёздочка", en: "The star" },
        kind: "choice",
        text: {
          he: "מה אומרת הכוכבית ב־`select * from shlifot`?",
          ru: "Что значит звёздочка в `select * from shlifot`?",
          en: "What does the star mean in `select * from shlifot`?"
        },
        options: [
          { he: "כל העמודות", ru: "Все столбцы", en: "All columns" },
          { he: "רק השורה הראשונה", ru: "Только первая строка", en: "Only the first row" },
          { he: "כפל", ru: "Умножение", en: "Multiplication" },
          { he: "כל הטבלאות במסד", ru: "Все таблицы базы", en: "All tables in the database" }
        ],
        answer: { index: 0 },
        hints: [
          { he: "בקוד של השיעור הייתה הערה: `-- * = kol haturim`.", ru: "В коде урока был комментарий: `-- * = kol haturim`.", en: "The lesson code had a comment: `-- * = kol haturim`." }
        ],
        solution: [
          { he: "`*` = כל הטורים (העמודות). הטבלה היא כבר זו שאחרי from.", ru: "`*` = все столбцы (כל הטורים). Таблица — та, что после from.", en: "`*` = all columns. The table is the one after from." }
        ]
      },
      {
        id: "ai-3", level: 1,
        example: {"he": "עמודה «שם בעברית, עד 20 אותיות» → `nvarchar(20)`.\n`n` — אפשר עברית, בסוגריים — מספר האותיות המקסימלי.\nעמודה «גיל» → `int`, בלי סוגריים.", "ru": "Столбец «имя на иврите, до 20 букв» → `nvarchar(20)`.\n`n` — можно иврит, в скобках — максимум букв.\nСтолбец «возраст» → `int`, без скобок.", "en": "A column \"name in Hebrew, up to 20 letters\" → `nvarchar(20)`.\n`n` means Hebrew is allowed, the brackets hold the maximum letters.\nA column \"age\" → `int`, no brackets."},
        label: { he: "טקסט", ru: "Текст", en: "Text" },
        kind: "choice",
        text: {
          he: "איזה סוג מתאים לעמודה של שם עיר בעברית, עד 30 תווים?",
          ru: "Какой тип подходит для столбца с названием города на иврите, до 30 символов?",
          en: "Which type fits a column with a city name in Hebrew, up to 30 characters?"
        },
        options: ["`int`", "`nvarchar(30)`", "`nvarchar`", "`int(30)`"],
        answer: { index: 1 },
        hints: [
          { he: "שם עיר הוא טקסט, לא מספר.", ru: "Название города — текст, а не число.", en: "A city name is text, not a number." },
          { he: "את המספר בסוגריים כותבים תמיד, כמו בקוד השיעור.", ru: "Число в скобках пишем всегда, как в коде урока.", en: "Always write the number in brackets, as in the lesson code." }
        ],
        solution: [
          { he: "טקסט → `nvarchar`; המקסימום 30 → `nvarchar(30)`. ה־n מאפשר גם עברית.", ru: "Текст → `nvarchar`; максимум 30 → `nvarchar(30)`. Буква n разрешает и иврит.", en: "Text → `nvarchar`; maximum 30 → `nvarchar(30)`. The n allows Hebrew too." }
        ]
      },
      {
        id: "ai-4", level: 1,
        example: {"he": "טבלה אחרת `perot (id, pri, kamut)`:\n```\n(1,'tapuach',4)\n(2,'banana',6)\n(3,'tapuach',2)\n(4,'anavim',9)\n(5,'banana',1)\n```\nשורה אחת, למשל `(2,'banana',6)`, היא כל המידע על פרי אחד: מספר, שם, כמות.\nעמודה אחת, למשל kamut, היא תכונה אחת של כל הפירות.", "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\nОдна строка, например `(2,'banana',6)`, — это всё про один фрукт: номер, название, количество.\nОдин столбец, например kamut, — это одно свойство у всех фруктов.", "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\nOne row, for example `(2,'banana',6)`, is everything about one fruit: number, name, amount.\nOne column, for example kamut, is one property of all the fruits."},
        label: { he: "שורה", ru: "Строка", en: "Row" },
        kind: "choice",
        text: {
          he: "בטבלה \"פרטים אישיים\", מה זו שורה אחת?",
          ru: "Что такое одна строка в таблице «личные данные»?",
          en: "In a \"personal details\" table, what is one row?"
        },
        options: [
          { he: "כל הגילים של כולם", ru: "Все возрасты всех людей", en: "Everyone's ages" },
          { he: "כל הפרטים של אדם אחד (רשומה)", ru: "Все данные одного человека (запись)", en: "All the details of one person (a record)" },
          { he: "שם הטבלה", ru: "Название таблицы", en: "The table name" },
          { he: "מסד הנתונים כולו", ru: "Вся база данных", en: "The whole database" }
        ],
        answer: { index: 1 },
        hints: [
          { he: "עמודה הולכת מלמעלה למטה ומחזיקה תכונה אחת. שורה הולכת לרוחב.", ru: "Столбец идёт сверху вниз и хранит одно свойство. Строка идёт поперёк.", en: "A column runs top to bottom and holds one property. A row runs across." }
        ],
        solution: [
          { he: "שורה = רשומה: אדם אחד עם כל הפרטים שלו. \"כל הגילים\" זו עמודה.", ru: "Строка = запись: один человек со всеми его данными. «Все возрасты» — это столбец.", en: "A row = a record: one person with all their details. \"Everyone's ages\" is a column." }
        ]
      },
      {
        id: "ai-5", level: 2,
        example: {"he": "טבלה אחרת `perot (id, pri, kamut)`:\n```\n(1,'tapuach',4)\n(2,'banana',6)\n(3,'tapuach',2)\n(4,'anavim',9)\n(5,'banana',1)\n```\n`select * from perot where kamut = 2`\nkamut: 4, 6, 2, 9, 1 → רק שורה 3 → שורה אחת.", "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where kamut = 2`\nkamut: 4, 6, 2, 9, 1 → только строка 3 → 1 строка.", "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where kamut = 2`\nkamut: 4, 6, 2, 9, 1 → only row 3 → 1 row."},
        label: "iskaot = 8",
        kind: "number",
        text: {
          he: "כמה שורות תחזיר השאילתה על טבלת shlifot מהשיעור?\n`select * from shlifot where iskaot = 8`",
          ru: "Сколько строк вернёт запрос на таблице shlifot с урока?\n`select * from shlifot where iskaot = 8`",
          en: "How many rows does the query return on the lesson's shlifot table?\n`select * from shlifot where iskaot = 8`"
        },
        answer: { value: "3" },
        hints: [
          { he: "חפשו את המספר 8 במקום הרביעי בכל שורה.", ru: "Ищи число 8 на четвёртом месте в каждой строке.", en: "Look for 8 in the fourth place of each row." }
        ],
        solution: [
          { he: "iskaot = 8: sfarim, sratim, hazagot.", ru: "iskaot = 8: sfarim, sratim, hazagot.", en: "iskaot = 8: sfarim, sratim, hazagot." },
          { he: "סה״כ 3 שורות.", ru: "Итого 3 строки.", en: "That is 3 rows." }
        ]
      },
      {
        id: "ai-6", level: 2,
        example: {"he": "טבלה אחרת `perot (id, pri, kamut)`:\n```\n(1,'tapuach',4)\n(2,'banana',6)\n(3,'tapuach',2)\n(4,'anavim',9)\n(5,'banana',1)\n```\n`select id from perot where pri = 'anavim'`\nמוצגת רק העמודה id, אבל יש כמה שורות שמתאימות לתנאי.\nanavim רק בשורה 4 → שורה אחת.", "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select id from perot where pri = 'anavim'`\nПоказывается только столбец id, но строк столько, сколько подходят под условие.\nanavim только в строке 4 → 1 строка.", "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select id from perot where pri = 'anavim'`\nOnly the id column is shown, but there are as many rows as fit the condition.\nanavim is only in row 4 → 1 row."},
        label: "menahel = 'avi'",
        kind: "number",
        text: {
          he: "כמה שורות תחזיר השאילתה?\n`select chanut from shlifot where menahel = 'avi'`",
          ru: "Сколько строк вернёт запрос?\n`select chanut from shlifot where menahel = 'avi'`",
          en: "How many rows does the query return?\n`select chanut from shlifot where menahel = 'avi'`"
        },
        answer: { value: "2" },
        hints: [
          { he: "menahel הוא הערך האחרון בכל שורה.", ru: "menahel — последнее значение в каждой строке.", en: "menahel is the last value in each row." },
          { he: "העמודה chanut לא משנה את מספר השורות — רק ה־where.", ru: "Столбец chanut не меняет число строк — только where.", en: "The chanut column does not change the row count — only where does." }
        ],
        solution: [
          { he: "שורות עם 'avi': hazagot, shayish (vered 2 kfar saba).", ru: "Строки с 'avi': hazagot, shayish (vered 2 kfar saba).", en: "Rows with 'avi': hazagot, shayish (vered 2 kfar saba)." },
          { he: "סה״כ 2 שורות, ובכל אחת רק שם החנות.", ru: "Итого 2 строки, в каждой только название магазина.", en: "That is 2 rows, each with just the shop name." }
        ]
      },
      {
        id: "ai-7", level: 2,
        example: {"he": "טבלה perot (id, pri, kamut):\n`insert into perot values (6, 'agas', 3)`\nבודקים לפי שלבים:\nשלב 1. סדר הערכים כמו סדר העמודות: id, pri, kamut.\nשלב 2. טקסט בגרשיים: `'agas'`.\nשלב 3. מספר בלי גרשיים: `6`, `3`.", "ru": "Таблица perot (id, pri, kamut):\n`insert into perot values (6, 'agas', 3)`\nПроверяем по шагам:\nШаг 1. Порядок значений как порядок столбцов: id, pri, kamut.\nШаг 2. Текст в кавычках: `'agas'`.\nШаг 3. Число без кавычек: `6`, `3`.", "en": "Table perot (id, pri, kamut):\n`insert into perot values (6, 'agas', 3)`\nCheck step by step:\nStep 1. The order of values is the order of columns: id, pri, kamut.\nStep 2. Text in quotes: `'agas'`.\nStep 3. A number without quotes: `6`, `3`."},
        label: "insert",
        kind: "choice",
        text: {
          he: "איזו שורה נכונה להכנסה לטבלת shlifot (chanut, ktovet, email, iskaot, menahel)?",
          ru: "Какая строка правильна для вставки в shlifot (chanut, ktovet, email, iskaot, menahel)?",
          en: "Which line correctly inserts into shlifot (chanut, ktovet, email, iskaot, menahel)?"
        },
        options: [
          "`insert into shlifot values ('ofot', 'herzl 3 ashkelon', 'f@gmail', '12', 'dana')`",
          "`insert into shlifot values (ofot, herzl 3 ashkelon, f@gmail, 12, dana)`",
          "`insert into shlifot values ('ofot', 'herzl 3 ashkelon', 'f@gmail', 12, 'dana')`",
          "`insert into shlifot values ('ofot', 'herzl 3 ashkelon', 12, 'f@gmail', 'dana')`"
        ],
        answer: { index: 2 },
        hints: [
          { he: "טקסט — בגרשיים; מספר — בלי.", ru: "Текст — в кавычках; число — без.", en: "Text in quotes; numbers without." },
          { he: "הסדר חייב להיות כמו העמודות: iskaot רביעי.", ru: "Порядок как у столбцов: iskaot четвёртый.", en: "The order must match the columns: iskaot is fourth." }
        ],
        solution: [
          { he: "בראשונה 12 בגרשיים, כאילו טקסט. בשנייה הטקסט בלי גרשיים. ברביעית הסדר הפוך.", ru: "В первой 12 в кавычках, как текст. Во второй текст без кавычек. В четвёртой перепутан порядок.", en: "The first quotes 12 as if it were text. The second has text without quotes. The fourth has the wrong order." },
          "('ofot', 'herzl 3 ashkelon', 'f@gmail', 12, 'dana')"
        ]
      },
      {
        id: "ai-8", level: 2,
        example: {"he": "דוגמה אחרת: סטודנטים וקורסים.\nשאלה 1. כמה קורסים יש לסטודנט אחד? הרבה.\nשאלה 2. כמה סטודנטים יש בקורס אחד? הרבה.\nהרבה משני הצדדים → `M:N`.\nשאל את אותן שתי השאלות על מרצים וקורסים.", "ru": "Другой пример: студенты и курсы.\nВопрос 1. Сколько курсов у одного студента? Много.\nВопрос 2. Сколько студентов на одном курсе? Много.\nМного с обеих сторон → M:N.\nЗадай эти же два вопроса про лекторов и курсы.", "en": "Another example: students and courses.\nQuestion 1. How many courses does one student have? Many.\nQuestion 2. How many students are in one course? Many.\nMany on both sides → M:N.\nAsk the same two questions about lecturers and courses."},
        label: { he: "סוג קשר", ru: "Тип связи", en: "Relation type" },
        kind: "choice",
        text: {
          he: "במכללה קטנה כל קורס מלמד מרצה אחד בלבד, אבל מרצה יכול ללמד כמה קורסים. איזה קשר זה בין מרצים לקורסים?",
          ru: "В маленьком колледже каждый курс ведёт только один лектор, но лектор может вести несколько курсов. Какая это связь между лекторами и курсами?",
          en: "In a small college each course has only one lecturer, but a lecturer can teach several courses. What relation is this between lecturers and courses?"
        },
        options: ["1:1", "1:N", "M:N"],
        answer: { index: 1 },
        hints: [
          { he: "כמה קורסים יכולים להיות למרצה אחד? וכמה מרצים לקורס אחד?", ru: "Сколько курсов у одного лектора? А сколько лекторов у одного курса?", en: "How many courses can one lecturer have? How many lecturers per course?" }
        ],
        solution: [
          { he: "למרצה — הרבה קורסים; לקורס — מרצה אחד.", ru: "У лектора — много курсов; у курса — один лектор.", en: "A lecturer has many courses; a course has one lecturer." },
          { he: "\"הרבה\" רק מצד אחד → אחד לרבים, 1:N.", ru: "«Много» только с одной стороны → один ко многим, 1:N.", en: "\"Many\" on one side only → one to many, 1:N." }
        ]
      },
      {
        id: "ai-9", level: 2,
        example: {"he": "שגיאה אחרת: `create table perot (pri nvarchar(20) kamut int)`\nבין `nvarchar(20)` ל־`kamut` אין פסיק → SQL לא מבין איפה נגמרת עמודה אחת ומתחילה אחרת.\nמתוקן: `create table perot (pri nvarchar(20), kamut int)`.", "ru": "Другая ошибка: `create table perot (pri nvarchar(20) kamut int)`\nМежду `nvarchar(20)` и `kamut` нет запятой → SQL не понимает, где кончается один столбец и начинается другой.\nИсправлено: `create table perot (pri nvarchar(20), kamut int)`.", "en": "Another error: `create table perot (pri nvarchar(20) kamut int)`\nThere is no comma between `nvarchar(20)` and `kamut` → SQL cannot tell where one column ends and the next begins.\nFixed: `create table perot (pri nvarchar(20), kamut int)`."},
        label: { he: "מצאו את הטעות", ru: "Найди ошибку", en: "Find the mistake" },
        kind: "choice",
        text: {
          he: "הפקודה נותנת שגיאה Incorrect syntax near ')'. למה?\n`create table sfarim (shem nvarchar(40), mechir int, mechaber nvarchar(40),)`",
          ru: "Команда даёт ошибку Incorrect syntax near ')'. Почему?\n`create table sfarim (shem nvarchar(40), mechir int, mechaber nvarchar(40),)`",
          en: "The command gives the error Incorrect syntax near ')'. Why?\n`create table sfarim (shem nvarchar(40), mechir int, mechaber nvarchar(40),)`"
        },
        options: [
          { he: "פסיק אחרי העמודה האחרונה", ru: "Запятая после последнего столбца", en: "A comma after the last column" },
          { he: "ל־`int` חסר אורך", ru: "У `int` нет длины", en: "`int` has no length" },
          { he: "צריך `create database`", ru: "Нужно `create database`", en: "It should be `create database`" },
          { he: "אסור שלוש עמודות", ru: "Нельзя три столбца", en: "Three columns are not allowed" }
        ],
        answer: { index: 0 },
        hints: [
          { he: "השגיאה \"ליד הסוגר\". מה עומד ממש לפניו?", ru: "Ошибка «возле скобки». Что стоит прямо перед ней?", en: "The error is \"near the bracket\". What is right before it?" }
        ],
        solution: [
          { he: "אחרי `nvarchar(40)` האחרון יש פסיק, ואחריו כבר לא באה עמודה.", ru: "После последнего `nvarchar(40)` стоит запятая, а столбца после неё нет.", en: "After the last `nvarchar(40)` there is a comma, but no column follows." },
          "create table sfarim (shem nvarchar(40), mechir int, mechaber nvarchar(40))"
        ]
      },
      {
        id: "ai-10", level: 3,
        example: {"he": "טבלה אחרת `perot (id, pri, kamut)`:\n```\n(1,'tapuach',4)\n(2,'banana',6)\n(3,'tapuach',2)\n(4,'anavim',9)\n(5,'banana',1)\n```\n`select * from perot where kamut < 4`\n`<` — קטן ממש, 4 עצמו לא מתאים.\nkamut: 4 לא, 6 לא, 2 כן, 9 לא, 1 כן → 2 שורות.", "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where kamut < 4`\n`<` — строго меньше, само 4 не подходит.\nkamut: 4 нет, 6 нет, 2 да, 9 нет, 1 да → 2 строки.", "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where kamut < 4`\n`<` means strictly less, 4 itself does not fit.\nkamut: 4 no, 6 no, 2 yes, 9 no, 1 yes → 2 rows."},
        label: "iskaot < 10",
        kind: "number",
        text: {
          he: "הסימן `<` הוא \"קטן מ־\". כמה שורות תחזיר השאילתה על טבלת shlifot?\n`select * from shlifot where iskaot < 10`",
          ru: "Знак `<` — «меньше». Сколько строк вернёт запрос на таблице shlifot?\n`select * from shlifot where iskaot < 10`",
          en: "The sign `<` means \"less than\". How many rows does the query return on shlifot?\n`select * from shlifot where iskaot < 10`"
        },
        answer: { value: "6" },
        hints: [
          { he: "יש 11 שורות, ו־5 מהן הן iskaot ≥ 10.", ru: "Всего 11 строк, и в 5 из них iskaot ≥ 10.", en: "There are 11 rows, and 5 of them have iskaot ≥ 10." },
          { he: "כל שורה היא או \"קטן מ־10\" או \"10 ומעלה\".", ru: "Каждая строка либо «меньше 10», либо «10 и больше».", en: "Each row is either \"less than 10\" or \"10 or more\"." }
        ],
        solution: [
          { he: "iskaot מתחת ל־10: 9, 9, 8, 8, 8, 1.", ru: "iskaot меньше 10: 9, 9, 8, 8, 8, 1.", en: "iskaot below 10: 9, 9, 8, 8, 8, 1." },
          "11 − 5 = 6"
        ]
      },
      {
        id: "ai-11", level: 3,
        example: {"he": "בתנאי כותבים טקסט בגרשיים: `where pri = 'banana'`.\nמספר כותבים בלי גרשיים: `where kamut = 6`.\nתחשוב: מילה בלי גרשיים — SQL קורא אותה כטקסט או כשם של משהו בטבלה?", "ru": "В условии текст пишут в кавычках: `where pri = 'banana'`.\nЧисло пишут без кавычек: `where kamut = 6`.\nПодумай: слово без кавычек SQL читает как текст или как имя чего-то в таблице?", "en": "In a condition, text is written in quotes: `where pri = 'banana'`.\nA number is written without quotes: `where kamut = 6`.\nThink: does SQL read a word without quotes as text, or as the name of something in the table?"},
        label: { he: "בלי גרשיים", ru: "Без кавычек", en: "No quotes" },
        kind: "choice",
        text: {
          he: "מה יקרה בהרצת `select * from shlifot where chanut = rehitim`?",
          ru: "Что будет при выполнении `select * from shlifot where chanut = rehitim`?",
          en: "What happens when you run `select * from shlifot where chanut = rehitim`?"
        },
        options: [
          { he: "יחזרו 4 השורות של rehitim", ru: "Вернутся 4 строки rehitim", en: "The 4 rehitim rows come back" },
          { he: "שגיאה: SQL מחפש עמודה בשם rehitim", ru: "Ошибка: SQL ищет столбец с именем rehitim", en: "An error: SQL looks for a column named rehitim" },
          { he: "יחזרו כל 11 השורות", ru: "Вернутся все 11 строк", en: "All 11 rows come back" },
          { he: "הטבלה תימחק", ru: "Таблица удалится", en: "The table is deleted" }
        ],
        answer: { index: 1 },
        hints: [
          { he: "בלי גרשיים, מה SQL חושב שהמילה rehitim היא?", ru: "Без кавычек — чем SQL считает слово rehitim?", en: "Without quotes, what does SQL think the word rehitim is?" }
        ],
        solution: [
          { he: "מילה בלי גרשיים היא שם של עמודה. עמודה כזו אין — שגיאה (Invalid column name).", ru: "Слово без кавычек — имя столбца. Такого столбца нет — ошибка (Invalid column name).", en: "A word without quotes is a column name. There is no such column — error (Invalid column name)." },
          "select * from shlifot where chanut = 'rehitim'"
        ]
      },
      {
        id: "ai-12", level: 3,
        example: {"he": "טבלה אחרת `perot (id, pri, kamut)`:\n```\n(1,'tapuach',4)\n(2,'banana',6)\n(3,'tapuach',2)\n(4,'anavim',9)\n(5,'banana',1)\n```\n`select pri, kamut from perot where kamut > 5`\nשלב 1. שורות: kamut 6 ו־9 → 2 שורות.\nשלב 2. עמודות: pri ו־kamut → 2 עמודות.\nשלב 3. תאים: `2 × 2 = 4` ערכים.", "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select pri, kamut from perot where kamut > 5`\nШаг 1. Строки: kamut 6 и 9 → 2 строки.\nШаг 2. Столбцы: pri и kamut → 2 столбца.\nШаг 3. Ячейки: 2 × 2 = 4 значения.", "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select pri, kamut from perot where kamut > 5`\nStep 1. Rows: kamut 6 and 9 → 2 rows.\nStep 2. Columns: pri and kamut → 2 columns.\nStep 3. Cells: 2 × 2 = 4 values."},
        label: "iskaot > 100",
        kind: "number",
        text: {
          he: "כמה ערכים (תאים) תחזיר השאילתה?\n`select chanut, menahel from shlifot where iskaot > 100`",
          ru: "Сколько значений (ячеек) вернёт запрос?\n`select chanut, menahel from shlifot where iskaot > 100`",
          en: "How many values (cells) does the query return?\n`select chanut, menahel from shlifot where iskaot > 100`"
        },
        answer: { value: "6" },
        hints: [
          { he: "קודם ספרו שורות (where), אחר כך עמודות (select).", ru: "Сначала посчитай строки (where), потом столбцы (select).", en: "First count rows (where), then columns (select)." },
          { he: "iskaot מעל 100: 400, 110, 104.", ru: "iskaot больше 100: 400, 110, 104.", en: "iskaot above 100: 400, 110, 104." }
        ],
        solution: [
          { he: "שורות: chalav (400), rehitim (110), rehitim (104) — 3.", ru: "Строки: chalav (400), rehitim (110), rehitim (104) — 3.", en: "Rows: chalav (400), rehitim (110), rehitim (104) — 3." },
          { he: "עמודות: chanut, menahel — 2.", ru: "Столбцы: chanut, menahel — 2.", en: "Columns: chanut, menahel — 2." },
          "3 × 2 = 6"
        ]
      }
    ]
  }
};

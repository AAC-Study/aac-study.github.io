/* Домашние задания. Новые — сверху не обязательно: список сортируется сам (ближайший срок первым).
   Поля:
     id, subject (id из data/subjects.js), title {he,ru,en}
     given / due — ISO с часовым поясом Израиля (+02:00 зимой, +03:00 летом); due: null, если срок неизвестен
     summary {he,ru,en} — коротко, что это
     original {lang, text} — текст задания, как его дал преподаватель
     steps [{he,ru,en}] — что сделать, по шагам
     submit {he,ru,en} — куда и как сдать; links [{label:{he,ru,en}, url}]
     level — что уже прошли (по-английски, для промпта ИИ)
     aiRule: 'banned' — преподаватель запретил ИИ на этом курсе
     selfPrompt: true — преподаватель просит самому написать промпт (тогда ИИ помогает написать свой) */
window.HOMEWORK = [
  {
    id: 'sql-2026-11-05-perek1', subject: 'sql',
    title: { he: 'תרגילים פרק 1 – טבלת עובדים', ru: 'Упражнения, глава 1: таблица работников', en: 'Exercises, chapter 1: the employees table' },
    given: '2026-11-05T15:04:00+02:00', givenDateOnly: true, due: null,
    summary: {
      he: 'מסד גדול מ־Moodle (טבלת עובדים, 200 שורות): להריץ ב־SSMS ולפתור את תרגילי השליפה מהקובץ targilim perek 1.',
      ru: 'Большая база из Moodle (таблица работников, 200 строк): запустить в SSMS и решить упражнения на выборку из файла targilim perek 1.',
      en: 'A big database from Moodle (employees table, 200 rows): run it in SSMS and solve the query exercises from the file targilim perek 1.'
    },
    original: { lang: 'he', text: 'השתמש בטבלת עובדים\n\nהצגת נתונים\n1.1. הצג את כל הנתונים\n1.2. הצג את כל הנתונים של כל העובדים, העובדים במחלקה 1\n1.3. הצג את כל הנתונים של כל העובדים המשתכרים מעל 11000 שח העובדים במחלקה 3\n1.4. הצג את כל הנתונים של כל העובדים המשתכרים בין 10000 שח ל- 12000 שח\n1.5. הצג את כל הנתונים של כל העובדים המשתכרים פחות מ- 10000 או יותר מ- 12000 שח\n1.6. הצג אך ורק את השמות הפרטיים ואת האימיילים של כל העובדים\n1.7. הצג את כל הנתונים של כל העובדים שיש להם מייל ב- gmail\n1.8. הצג את כל הנתונים של כל העובדים, העובדים במחלקה 1, ממוינים לפי שם המשפחה\n1.9. הצג את כל הנתונים של כל העובדים, ממוינים לפי מחלקה בסדר יורד, עם מיון פנימי (לפי מחלקה) של השם הפרטי\n1.10. הצג את כל הנתונים של שלושה העובדים בעלי המשכורות הגבוהה ביותר\n1.11. הצג את כל הנתונים של כל העובדים המשתכרים מעל 19000 שח\n1.12. הצג רשימה של המחלקות של עובדים אלו (השתמש ב- distinct)\n\n(בקובץ יש עמוד שני — עוד לא הועתק.)' },
    steps: [
      { he: 'הורידו מ־Moodle את קובץ המסד (טבלת עובדים) ופתחו אותו ב־SSMS.', ru: 'Скачай из Moodle файл базы (таблица работников) и открой его в SSMS.', en: 'Download the database file (employees table) from Moodle and open it in SSMS.' },
      { he: 'הריצו בחלקים: create database ← use ← create table ← insert. אם יש "already exists" — החלק הזה כבר רץ.', ru: 'Запусти частями: create database → use → create table → insert. Если «already exists» — эта часть уже запускалась.', en: 'Run it in parts: create database → use → create table → insert. "already exists" means that part already ran.' },
      { he: 'בדיקה: `select * from haovdim` מחזיר 200 שורות.', ru: 'Проверка: `select * from haovdim` возвращает 200 строк.', en: 'Check: `select * from haovdim` returns 200 rows.' },
      { he: 'כתבו שאילתה לכל תרגיל 1.1–1.12. "כל הנתונים" = `select *`.', ru: 'Напиши запрос на каждое упражнение 1.1–1.12. «Все данные» = `select *`.', en: 'Write a query for each exercise 1.1–1.12. "All the data" = `select *`.' },
      { he: 'בדקו את עצמכם בשיעור 05.11 באתר: קבוצת "תרגילים פרק 1" (כמה שורות צריך לקבל).', ru: 'Проверь себя в уроке 05.11 на сайте: группа «Упражнения, глава 1» (сколько строк должно выйти).', en: 'Check yourself in the 05.11 lesson on the site: the "Exercises, chapter 1" group (how many rows you should get).' }
    ],
    submit: { he: 'לא נאמר שצריך להגיש. בשיעור פתרו בחדרים יחד.', ru: 'Сдавать не говорили. На уроке решали вместе в комнатах.', en: 'No submission was mentioned. In class it was solved together in rooms.' },
    links: [],
    level: 'So far in SQL we learned: create database, use, create table (int, nvarchar, date), insert into ... values (also into some columns only, the rest become NULL), select * and selected columns, where with and / or / not, in / not in, between / not between, order by (asc, desc, two columns), like with %, top N, top N percent and distinct. We use SQL Server with SSMS.'
  },
  {
    id: 'sql-2026-10-29-ptiha', subject: 'sql',
    title: { he: 'תרגיל פתיחה – הקמת מסד נתונים', ru: 'Вводное упражнение: создать базу данных', en: 'Opening exercise: build a database' },
    given: '2026-10-29T13:00:00+02:00', givenDateOnly: true, due: '2026-11-03T12:00:00+02:00',
    summary: {
      he: 'מסד נתונים לחברת "שטויות בע"מ": טבלה של קטעי וידאו מצחיקים, נתוני דמה ושתי שאילתות.',
      ru: 'База данных для фирмы «Штуйот»: таблица смешных видеоклипов, выдуманные данные и два запроса.',
      en: 'A database for the "Shtuyot Ltd." company: a table of funny video clips, dummy data and two queries.'
    },
    original: { lang: 'he', text: 'חברת שטויות בע"מ אוספת מרחבי האינטרנט קטעי צחוק בסרטוני וידאו. הם טרם סידרו את הנתונים שלהם במסד נתונים, וביקשו ממך, במסגרת התכנית "תכניתן נולד", ליצור להם אותו.\nהם מעוניינים ליצור מסד נתונים שיכיל את הנתונים הבאים:\n• מספר סידורי של אומן\n• שם האומן\n• שם הקטע\n• מספר שניות של אורך הקטע\n• לינק אל הקטע\n• מספר הלייקים שהקטע קיבל באתרים השונים (אם אין לייקים, ערך זה יהיה 0)\n\nמטלה:\n1. הגדר מסד נתונים, ותעבור אליו\n2. הגדר טבלה העונה על דרישת החברה\n3. תמלא את הטבלה בנתוני-דמה (מדמיונך הפורה)\n4. הגדר שאילתה המציגה את כל הנתונים שהוכנסו למסד הנתונים\n5. הגדר שאילתה המציגה את שם האומן וכן את מספר הלייקים של כל הרשומות' },
    steps: [
      { he: 'פתחו את SSMS והתחברו לשרת (כמו בשיעור).', ru: 'Открой SSMS и подключись к серверу (как на уроке).', en: 'Open SSMS and connect to the server (as in class).' },
      { he: 'צרו מסד נתונים עם create database ועברו אליו עם use.', ru: 'Создай базу командой create database и перейди в неё командой use.', en: 'Create a database with create database and switch to it with use.' },
      { he: 'צרו טבלה עם create table ובה 6 עמודות: מספר אומן (int), שם אומן (nvarchar), שם הקטע (nvarchar), אורך בשניות (int), לינק (nvarchar), לייקים (int).', ru: 'Создай таблицу create table с 6 столбцами: номер артиста (int), имя артиста (nvarchar), название клипа (nvarchar), длина в секундах (int), ссылка (nvarchar), лайки (int).', en: 'Create a table with create table and 6 columns: artist number (int), artist name (nvarchar), clip name (nvarchar), length in seconds (int), link (nvarchar), likes (int).' },
      { he: 'הכניסו כמה שורות של נתוני דמה עם insert into … values. אם לקטע אין לייקים, כתבו 0.', ru: 'Добавь несколько строк выдуманных данных через insert into … values. Если у клипа нет лайков, пиши 0.', en: 'Insert a few rows of made-up data with insert into … values. If a clip has no likes, write 0.' },
      { he: 'שאילתה שמציגה הכול: select * from …', ru: 'Запрос, который показывает всё: select * from …', en: 'A query that shows everything: select * from …' },
      { he: 'שאילתה שמציגה רק את שם האומן ואת מספר הלייקים.', ru: 'Запрос, который показывает только имя артиста и число лайков.', en: 'A query that shows only the artist name and the number of likes.' },
      { he: 'הריצו הכול, צלמו מסך של SSMS עם הקוד והתוצאה, והעלו ל־Moodle.', ru: 'Запусти всё, сделай скриншот SSMS с кодом и результатом и загрузи в Moodle.', en: 'Run everything, take a screenshot of SSMS with the code and the result, and upload it to Moodle.' }
    ],
    submit: { he: 'צילום מסך מ־SSMS (הקוד והתוצאה) ב־Moodle, עד 3.11 בשעה 12:00. ב-2.11 המרצה אמרה: מי שלא הגיש — עדיין מוזמן להגיש.', ru: 'Скриншот из SSMS (код и результат) в Moodle, до 03.11 в 12:00. 02.11 преподавательница сказала: кто не сдал, ещё может сдать.', en: 'A screenshot from SSMS (code and result) in Moodle, by 3 Nov at 12:00. On 2 Nov the teacher said: whoever has not handed it in still may.' },
    links: [],
    level: 'So far in SQL we learned: what a database and a table are, create database, use, create table with int and nvarchar columns, insert into ... values, select * from, selecting specific columns, and where with the operators and / or / not. We use SQL Server with SSMS.'
  },
  {
    id: 'algo-2026-10-18-grade', subject: 'algo',
    title: { he: 'שיעורי בית: חישוב ציון סופי (40% בוחן, 60% מבחן)', ru: 'Домашнее задание: итоговая оценка (40% квиз, 60% экзамен)', en: 'Homework: final grade (40% quiz, 60% exam)' },
    given: '2026-10-18T08:45:00+03:00', givenDateOnly: true, due: '2026-10-25T08:45:00+02:00',
    summary: {
      he: 'מהמצגת "משתנים ב-Java" (נושא השיעור 18.10): תוכנית שמחשבת ציון סופי, וקריאה על if-else.',
      ru: 'Из презентации преподавателя «Переменные в Java» (тема урока 18.10): программа, которая считает итоговую оценку, и чтение про if-else.',
      en: 'From the teacher\'s slides "Variables in Java" (the 18.10 lesson topic): a program that computes a final grade, and reading on if-else.'
    },
    original: { lang: 'he', text: 'שיעורי בית למפגש הבא\nתרגול: כתבו תוכנית המחשבת את ציונו הסופי של סטודנט (השקלול הוא: 40% בוחן, 60% מבחן). השתמשו בטיפוסים עשרוניים ואופרטורים.\nקריאה: התחילו לקרוא על מבני בקרה בסיסיים: if-else ו-switch.' },
    steps: [
      { he: 'צרו ב-IntelliJ מחלקה חדשה עם main.', ru: 'Создай в IntelliJ новый класс с main.', en: 'Create a new class with main in IntelliJ.' },
      { he: 'הגדירו שני משתנים מסוג double עם ציונים: בוחן ומבחן (למשל `double quiz = 80;`). קלט עם Scanner נלמד רק ב-25.10, אחר כך אפשר להוסיף.', ru: 'Объяви две переменные типа double с оценками: квиз и экзамен (например, `double quiz = 80;`). Ввод через Scanner проходили только 25.10, его можно добавить потом.', en: 'Declare two double variables with grades: quiz and exam (e.g. `double quiz = 80;`). Scanner input came only on 25 Oct; you can add it later.' },
      { he: 'חשבו: ציון סופי = בוחן × 0.4 + מבחן × 0.6.', ru: 'Посчитай: итог = квиз × 0.4 + экзамен × 0.6.', en: 'Compute: final = quiz × 0.4 + exam × 0.6.' },
      { he: 'הדפיסו את הציון הסופי. בדיקה: בוחן 80 ומבחן 90 נותנים 86.0.', ru: 'Напечатай итоговую оценку. Проверка: квиз 80 и экзамен 90 дают 86.0.', en: 'Print the final grade. Check: quiz 80 and exam 90 give 86.0.' },
      { he: 'קריאה: if-else (עברנו בשיעור 25.10). את switch עוד לא עברנו.', ru: 'Чтение: if-else (прошли на уроке 25.10). switch на уроках ещё не было.', en: 'Reading: if-else (covered on 25 Oct). switch has not been covered yet.' }
    ],
    submit: { he: 'לא נאמר שצריך להגיש. זה תרגול למפגש הבא.', ru: 'Сдавать не говорили. Это тренировка к следующей встрече.', en: 'No submission was mentioned. It is practice for the next meeting.' },
    links: [],
    level: 'So far in Java we learned: IntelliJ, a first program with main, System.out.println, variables of types int, double, char, boolean and String (values written in the code; Scanner input was not taught yet), arithmetic operators including / and %, casting, and comparison and logical operators.'
  },
  {
    id: 'ai-2026-10-26-balls', subject: 'ai', selfPrompt: true,
    title: { he: 'שיעורי בית: למצוא את הכשל באלגוריתם הכדורים בעזרת AI', ru: 'Домашнее задание: найти ошибку в алгоритме шаров с помощью ИИ', en: 'Homework: find the flaw in the balls algorithm with AI' },
    given: '2026-10-26T08:45:00+02:00', givenDateOnly: true, due: '2026-11-02T08:45:00+02:00',
    summary: {
      he: 'מהשקופית "אתגר לוגי": לכתוב פרומפט שבו ה-AI מנחה ולא פותר, ולמצוא לבד למה האלגוריתם לא מוצא את הכדור הכבד ביותר.',
      ru: 'Со слайда «Логическая задача»: написать промпт, в котором ИИ направляет, а не решает, и самому найти, почему алгоритм не находит самый тяжёлый шар.',
      en: 'From the "logic challenge" slide: write a prompt where the AI guides rather than solves, and find yourself why the algorithm misses the heaviest ball.'
    },
    original: { lang: 'he', text: 'אתגר לוגי: האלגוריתם רץ — אבל טועה\nלפניך 10 כדורים, ולכל כדור משקל משלו. האלגוריתם אמור להדפיס את משקל הכדור הכבד ביותר.\nאתחול: קח את כדור מס\' 1 והנח אותו על המדף הזמני ("הכדור הכבד ביותר עד כה").\nלולאת השוואה: עבור כל כדור N מ-2 עד 10: שקול את כדור N. השווה את משקלו של כדור N למשקלו של כדור N-1 (הכדור הקודם בסדרה). אם משקלו של כדור N גדול ממשקלו של כדור N-1, החלף את הכדור שעל המדף בכדור N. אחרת, השאר את המדף ללא שינוי.\nפלט: הצג את הכדור שנשאר על המדף.\nגלו את הכשל בלי לבקש את הפתרון. כתבו פרומפט שיגרום ל־AI להנחות את החשיבה שלכם. מנחה — לא פותר.\nבפרומפט שלכם דרשו:\n• שאלה מכוונת אחת בכל פעם\n• מעקב ידני עם 3 משקלים לדוגמה\n• רמז רק אחרי ניסיון שלכם\n• בלי קוד מתוקן ובלי חשיפת השגיאה\nהצג בעיות קצה והנחה איך לפתור אותם.\nהמטרה: להסביר בעצמכם מה האלגוריתם באמת עושה.' },
    steps: [
      { he: 'פתחו ChatGPT, Gemini או Claude והדביקו את האלגוריתם מהשקופית.', ru: 'Открой ChatGPT, Gemini или Claude и вставь алгоритм со слайда.', en: 'Open ChatGPT, Gemini or Claude and paste the algorithm from the slide.' },
      { he: 'כתבו בפרומפט את 4 הדרישות מהשקופית: שאלה אחת בכל פעם, מעקב ידני עם 3 משקלים, רמז רק אחרי ניסיון, בלי פתרון ובלי לחשוף את השגיאה.', ru: 'Впиши в промпт 4 требования со слайда: один вопрос за раз, ручная проверка на 3 весах, подсказка только после твоей попытки, без решения и без раскрытия ошибки.', en: 'Put the 4 demands from the slide in the prompt: one question at a time, a hand trace with 3 weights, a hint only after your try, no solution and no revealing the error.' },
      { he: 'ענו על השאלות של ה-AI ועקבו ביד אחרי המדף, כדור אחרי כדור.', ru: 'Отвечай на вопросы ИИ и сам следи за полкой, шар за шаром.', en: 'Answer the AI\'s questions and trace the shelf by hand, ball by ball.' },
      { he: 'כתבו במשפט אחד במילים שלכם: מה האלגוריתם באמת עושה, ולמה זה לא הכדור הכבד ביותר.', ru: 'Запиши одной фразой своими словами: что алгоритм делает на самом деле и почему это не самый тяжёлый шар.', en: 'Write in one sentence in your own words what the algorithm really does and why that is not the heaviest ball.' },
      { he: 'בואו לשיעור הבא עם התשובה.', ru: 'Приходи на следующий урок с ответом.', en: 'Come to the next lesson with the answer.' }
    ],
    submit: { he: 'לא נאמר שצריך להגיש. מביאים את התשובה לשיעור הבא.', ru: 'Сдавать не говорили. Ответ приносим на следующий урок.', en: 'No submission was mentioned. Bring the answer to the next lesson.' },
    links: [],
    level: 'So far in Intro to AI we learned: what AI is, a regular program (clear if/else instructions) vs. AI that learns from examples, neurons and neural networks, tokens and the context window, chatbots, a verbal algorithm, syntax vs. logic errors, and the prompt-engineering rule that the AI should guide, not solve.'
  },
  {
    id: 'ai-2026-11-02-calc', subject: 'ai', selfPrompt: true,
    title: { he: 'משימה: מחשבון עם 4 פעולות ב-Gemini / Canvas', ru: 'Задание: калькулятор с 4 действиями в Gemini / Canvas', en: 'Task: a 4-operation calculator in Gemini / Canvas' },
    given: '2026-11-02T10:15:00+02:00', givenDateOnly: true, due: null,
    summary: {
      he: 'לבנות ב-Gemini (Canvas) מחשבון עם ארבע הפעולות הבסיסיות, מעוצב יפה, ולהגיש ב-Moodle את התוצר ואת הפרומפט.',
      ru: 'Сделать в Gemini (Canvas) калькулятор с четырьмя основными действиями, красиво оформить и сдать в Moodle результат и свой промпт.',
      en: 'Build a calculator with the four basic operations in Gemini (Canvas), design it nicely, and hand in the result and your prompt in Moodle.'
    },
    original: { lang: 'he', text: 'מתוך דברי המרצה בסוף השיעור (דף המשימה יעלה ל-Moodle):\nמחשבון עם ארבע פעולות בסיסיות. קודם כל צריך לעצב אותו יפה. מגישים ב-Moodle את התוצר ואת מה שכתבתם (הפרומפט).' },
    steps: [
      { he: 'פתחו Gemini והפעילו Canvas (כמו בתרגיל מחשבון המחיר בשיעור).', ru: 'Открой Gemini и включи Canvas (как в упражнении с калькулятором цены на уроке).', en: 'Open Gemini and turn on Canvas (as in the price-calculator exercise in class).' },
      { he: 'כתבו פרומפט משלכם לפי RTC-C: תפקיד, משימה (מחשבון: חיבור, חיסור, כפל, חילוק), הקשר, ומגבלות (עיצוב, שפה).', ru: 'Напиши свой промпт по RTC-C: роль, задача (калькулятор: сложение, вычитание, умножение, деление), контекст и ограничения (оформление, язык).', en: 'Write your own prompt using RTC-C: role, task (a calculator: add, subtract, multiply, divide), context and constraints (design, language).' },
      { he: 'בדקו כל פעולה במחשבון רגיל, וגם מקרה קצה: חילוק ב-0.', ru: 'Проверь каждое действие обычным калькулятором и крайний случай — деление на 0.', en: 'Check every operation with a normal calculator, and the edge case of dividing by 0.' },
      { he: 'אם משהו לא טוב — חזקו את הרכיב החסר בפרומפט ושלחו שוב (לא מתחילים מאפס).', ru: 'Если что-то не так, усиль недостающую часть промпта и отправь снова (не начинай с нуля).', en: 'If something is off, strengthen the missing part of the prompt and send again (do not start over).' },
      { he: 'שמרו את הפרומפט הסופי והעלו ל-Moodle את התוצר (קישור שיתוף או צילום מסך) ואת הפרומפט.', ru: 'Сохрани итоговый промпт и загрузи в Moodle результат (ссылку «Поделиться» или скриншот) и промпт.', en: 'Save the final prompt and upload to Moodle the result (a share link or a screenshot) and the prompt.' }
    ],
    submit: { he: 'ב-Moodle: התוצר והפרומפט. המועד עוד לא ידוע — בדקו בדף המשימה ב-Moodle.', ru: 'В Moodle: результат и промпт. Срок пока не известен, смотри лист задания в Moodle.', en: 'In Moodle: the result and the prompt. The due date is not known yet; check the task sheet in Moodle.' },
    links: [],
    level: 'So far in Intro to AI we learned: what AI is, tokens and the context window, Garbage In / Garbage Out, weak vs. strong prompts, the RTC-C framework (Role, Task, Context, Constraints) used iteratively, edge cases, and building a small app in Gemini Canvas from a prompt (a price calculator with shipping, profit and 18% VAT).'
  },
  {
    id: 'fullstack-2026-10-28-mesakem', subject: 'fullstack',
    title: { he: 'תרגיל מסכם – HTML: אתר לעסק (4 דפים)', ru: 'Итоговое задание по HTML: сайт бизнеса (4 страницы)', en: 'HTML summary exercise: a business website (4 pages)' },
    given: '2026-10-28T11:19:00+02:00', due: null, aiRule: 'banned',
    summary: {
      he: 'אתר לעסק דמיוני או אמיתי: דף הבית, דף הרשמה עם טופס, דף "תודה על הרשמתך" ודף מחירון עם טבלה.',
      ru: 'Сайт выдуманного или настоящего бизнеса: главная, страница регистрации с формой, страница «Спасибо за регистрацию» и прайс-лист с таблицей.',
      en: 'A site for an imaginary or real business: home page, sign-up page with a form, a "thank you" page and a price list with a table.'
    },
    original: { lang: 'he', text: 'צרו אתר דמיוני לעסק (העסק יכול להיות מדומיין או אמיתי), ובו לפחות 4 דפים: דף הבית, דף הרשמה, דף אישור הרשמה ודף מחירון.\n• בדף הבית יופיע שם העסק, הלוגו שלו, תמונת "קונספט" (תמונת סביבה או המוצרים שהוא מוכר), והסבר קצר על העסק. בדף יופיע גם תפריט שיקשר לשני הדפים האחרים.\n• דף ההרשמה יהיה טופס form ובו המשתמש יצטרך למלא את שמו, המייל שלו, סיסמה, טלפון, מגדר (בחירה בין זכר/נקבה/מעדיף לא לענות), פירוט על מוצרים אהובים (בתיבת טקסט או סימון בחירות), ותיבת סימון הסכמה לתנאי השימוש. לחיצה על שלח תוביל אותו לדף אישור הרשמה. ניתן גם לחזור לדף הבית מדף ההרשמה (ללא השלכות או מסירת מידע).\n• לדף אישור ההרשמה ("תודה על הרשמתך") יש לצרף קישור פשוט חזרה למסך הבית.\n• בדף המחירון יופיעו לפחות 5 מוצרים בפורמט של טבלה, בהם יפורטו החלקים הבאים: שם המוצר, מחיר, זמינות (קיים/לא קיים במלאי), תמונה. בדף המחירון תופיע האפשרות לחזור למסך הבית.\nשימו לב: יש ליצור לכל אלמנט class או ID משלו. יש להשתמש בקונבנציות נכונות ובשמות הגיוניים. אנחנו נתחיל להשתמש בהם החל מהתרגיל הבא. ב־FORM יש ליצור class.' },
    steps: [
      { he: 'צרו תיקייה לאתר ובה 4 קבצים: דף הבית, הרשמה, תודה, מחירון (שמות באנגלית, למשל index.html).', ru: 'Создай папку сайта и в ней 4 файла: главная, регистрация, спасибо, прайс-лист (имена на английском, например index.html).', en: 'Create a folder for the site with 4 files: home, sign-up, thank-you, price list (English names, e.g. index.html).' },
      { he: 'דף הבית: שם העסק, לוגו, תמונת קונספט, הסבר קצר ותפריט קישורים לדפים האחרים.', ru: 'Главная: название бизнеса, логотип, картинка-«концепт», короткий текст и меню со ссылками на другие страницы.', en: 'Home: business name, logo, concept image, a short text and a menu of links to the other pages.' },
      { he: 'דף הרשמה: form עם שם, מייל, סיסמה, טלפון, מגדר (3 אפשרויות), מוצרים אהובים ותיבת הסכמה. כפתור "שלח" מוביל לדף התודה. קישור חזרה לדף הבית.', ru: 'Регистрация: form с именем, email, паролем, телефоном, полом (3 варианта), любимыми товарами и галочкой согласия. Кнопка «Отправить» ведёт на страницу «Спасибо». Ссылка назад на главную.', en: 'Sign-up: a form with name, email, password, phone, gender (3 options), favorite products and a consent checkbox. "Send" leads to the thank-you page. A link back home.' },
      { he: 'דף תודה: "תודה על הרשמתך" וקישור חזרה לדף הבית.', ru: 'Страница «Спасибо за регистрацию» и ссылка на главную.', en: 'Thank-you page: "Thanks for signing up" and a link back home.' },
      { he: 'מחירון: טבלה עם לפחות 5 מוצרים ועמודות שם, מחיר, זמינות, תמונה. קישור חזרה לדף הבית.', ru: 'Прайс-лист: таблица минимум из 5 товаров со столбцами название, цена, наличие, картинка. Ссылка на главную.', en: 'Price list: a table with at least 5 products and columns name, price, availability, image. A link back home.' },
      { he: 'לכל אלמנט class או id עם שם הגיוני, ול־form יש class.', ru: 'У каждого элемента свой class или id с понятным именем, у form обязательно class.', en: 'Every element gets its own class or id with a sensible name; the form must have a class.' },
      { he: 'מ־04.11 (מצגת "מבוא ל־CSS"): לעצב את האתר בקובץ CSS נפרד: רקע בצבע אחר, תמונת הקונספט תופסת שלושה רבעים מהמסך, תפריט מסודר בצבעים (אנכי או אופקי, אפשר כטבלה), וטופס ההרשמה והמחירון מעוצבים גם הם.', ru: 'С 04.11 (презентация «Введение в CSS»): оформить сайт отдельным CSS-файлом: фон другого цвета, картинка-концепт на три четверти экрана, аккуратное цветное меню (вертикальное или горизонтальное, можно таблицей), формы регистрации и прайс-лист тоже оформлены.', en: 'From 04.11 (the "Intro to CSS" slides): style the site with a separate CSS file: a different background colour, the concept image taking three quarters of the screen, a tidy coloured menu (vertical or horizontal, a table is fine), and the sign-up form and price list styled too.' },
      { he: 'בדקו כל דף ב־Live Server וכל קישור.', ru: 'Проверь каждую страницу в Live Server и каждую ссылку.', en: 'Check every page and every link in Live Server.' }
    ],
    submit: { he: 'המועד ואופן ההגשה לא נמסרו עדיין. בדקו ב־Moodle או שאלו את המרצה.', ru: 'Срок и как сдавать пока не известны. Проверь Moodle или спроси преподавателя.', en: 'The deadline and how to submit are not known yet. Check Moodle or ask the teacher.' },
    links: [],
    level: 'So far in HTML we learned: the page skeleton, headings h1-h6, p, br, img (with width/height), a (links between pages), the attributes dir, align and style, a background image via style in the head, tables (table, tr, th, td, colspan, border), basic form elements, and class / id. On 04.11 we started CSS: a separate .css file linked with <link>, tag / .class / #id selectors and which one wins, color, background-color, width in rem, border, box-shadow, padding and margin, and page layout with display: grid (grid-template-columns, gaps, grid-column / grid-row with span) and display: flex (flex-direction, flex-wrap). We use VS Code with Live Server. No JavaScript yet.'
  }
];

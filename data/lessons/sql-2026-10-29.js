/* Lesson data — format: see the comment at the top of data/lessons/math-2026-11-01.js.
   SQL, second lesson: where with selected columns, operators (or / and / not, truth tables),
   and the opening exercise "build a database" (a table of funny video clips).
   Every row count below was checked by running the query in sqlite3 on the 11-row shlifot table
   from the previous lesson (and on the small clips sample written in the task). */
window.LESSONS = window.LESSONS || {};
window.LESSONS["sql-2026-10-29"] = {
  "id": "sql-2026-10-29",
  "subject": "sql",
  "date": "2026-10-29",
  "title": {
    "he": "where, אופרטורים ותרגיל פתיחה",
    "ru": "where, операторы и вводное упражнение",
    "en": "where, operators and an opening exercise"
  },
  "summary": {
    "he": "סינון שורות עם `where` יחד עם בחירת עמודות, האופרטורים `or`, `and`, `not` וטבלאות אמת, ותרגיל פתיחה: להקים מסד נתונים לקטעי וידאו מצחיקים מאפס.",
    "ru": "Фильтр строк `where` вместе с выбором столбцов, операторы `or`, `and`, `not` и таблицы истинности, и вводное упражнение: создать с нуля базу данных смешных видеоклипов.",
    "en": "Filtering rows with `where` together with choosing columns, the operators `or`, `and`, `not` and truth tables, and an opening exercise: build a database of funny video clips from scratch."
  },
  "timeline": [
    {
      "why": {
        "he": "למה בכלל קיים `char`? כשכל הערכים תמיד באותו אורך (למשל קוד מדינה `IL`, `RU` — תמיד 2 אותיות), `char` מתאים ומעט יותר פשוט לשרת. כשהאורך משתנה — שם, כתובת, אימייל — `varchar` חוסך מקום. `char` משלים את החסר ברווחים, ולכן `rehitim` ב-`char(20)` הוא בעצם 7 אותיות ועוד 13 רווחים.",
        "ru": "Зачем вообще нужен `char`? Когда все значения всегда одной длины (например, код страны `IL`, `RU` — всегда 2 буквы), `char` подходит и чуть проще для сервера. Когда длина разная — имя, адрес, почта — `varchar` экономит место. `char` добивает недостающее пробелами, поэтому `rehitim` в `char(20)` — это 7 букв и ещё 13 пробелов.",
        "en": "Why does `char` exist at all? When every value is always the same length (say a country code `IL`, `RU` — always 2 letters), `char` fits and is slightly simpler for the server. When the length varies — name, address, email — `varchar` saves space. `char` pads the rest with spaces, so `rehitim` in `char(20)` is really 7 letters plus 13 spaces."
      },
      "kind": "talk",
      "time": "12:44",
      "title": {
        "he": "char או varchar",
        "ru": "char или varchar",
        "en": "char or varchar"
      },
      "text": {
        "he": "`char(20)` תופס תמיד 20 תווים, גם אם שם החנות קצר יותר — זה בזבוז מקום.\n`varchar(20)` הוא דינמי: תופס רק כמה שצריך, עד 20. השם rehitim (7 אותיות) יתפוס 7, לא 20.\nלכן לטקסט כמו שם, כתובת ומייל משתמשים ב־`varchar` (או `nvarchar` — כשיש גם עברית).",
        "ru": "`char(20)` всегда занимает 20 символов, даже если название магазина короче, — это лишнее место.\n`varchar(20)` — динамический: занимает только сколько нужно, до 20. Название rehitim (7 букв) займёт 7, а не 20.\nПоэтому для текста вроде имени, адреса и почты берут `varchar` (или `nvarchar` — если есть и иврит).",
        "en": "`char(20)` always takes 20 characters, even if the shop name is shorter — wasted space.\n`varchar(20)` is dynamic: it takes only what it needs, up to 20. The name rehitim (7 letters) takes 7, not 20.\nSo for text like a name, address or email we use `varchar` (or `nvarchar` — when there is Hebrew too)."
      }
    },
    {
      "why": {
        "he": "חוזרים על זה כי זה הבסיס של כל שאילתה בהמשך: תמיד שתי שאלות — אילו עמודות (`select`) ואילו שורות (`where`). מי שמפריד ביניהן בראש, כותב כל שאילתה בלי לנחש.",
        "ru": "Повторяем, потому что это основа всех следующих запросов: всегда два вопроса — какие столбцы (`select`) и какие строки (`where`). Кто разделяет их в голове, пишет любой запрос без угадывания.",
        "en": "We repeat this because it is the base of every later query: always two questions — which columns (`select`) and which rows (`where`). Whoever keeps them apart in their head writes any query without guessing."
      },
      "kind": "board",
      "title": {
        "he": "חזרה: where על טבלת shlifot",
        "ru": "Повторение: where на таблице shlifot",
        "en": "Recap: where on the shlifot table"
      },
      "text": {
        "he": "ממשיכים עם הטבלה shlifot מהשיעור הקודם (11 חנויות).\nהשאילתה הראשונה מציגה רק את כל הנתונים ששייכים לחנות rehitim.\nהשנייה — שילוב סלקטיבי של כמה שדות (כתובת ומייל) רק על rehitim: select בוחר עמודות, where בוחר שורות.",
        "ru": "Продолжаем с таблицей shlifot с прошлого урока (11 магазинов).\nПервый запрос показывает только все данные магазина rehitim.\nВторой — выборочное сочетание нескольких полей (адрес и почта) только для rehitim: select выбирает столбцы, where выбирает строки.",
        "en": "We continue with the shlifot table from last lesson (11 shops).\nThe first query shows only all the data of the rehitim shop.\nThe second is a selective combination of a few fields (address and email) for rehitim only: select picks columns, where picks rows."
      },
      "math": [
        "select * from shlifot where chanut = 'rehitim'",
        "select ktovet, email from shlifot where chanut = 'rehitim'"
      ]
    },
    {
      "why": {
        "he": "איך לפרק משפט לשאילתה: \"על מי?\" הולך ל-`where` (`menahel = 'moshe'`), \"מה להראות?\" הולך אחרי `select` (`ktovet`). המילה \"רק\" בדרך כלל אומרת `where`, והמילה \"שדה\" אומרת עמודה.",
        "ru": "Как разобрать фразу на запрос: «про кого?» идёт в `where` (`menahel = 'moshe'`), «что показать?» — после `select` (`ktovet`). Слово «только» обычно значит `where`, а слово «поле» — столбец.",
        "en": "How to turn a sentence into a query: \"about whom?\" goes into `where` (`menahel = 'moshe'`), \"what to show?\" goes after `select` (`ktovet`). The word \"only\" usually means `where`, and the word \"field\" means a column."
      },
      "kind": "board",
      "title": {
        "he": "תרגיל מהשקופית",
        "ru": "Упражнение со слайда",
        "en": "Exercise from the slide"
      },
      "text": {
        "he": "1. צרו שאילתה ששולפת נתונים על מוכרים ששמם moshe; הציגו את שדה הכתובת.\n2. הציגו את הרשומות של חנות rehitim בלבד, רק עם שדה עסקאות.\nהפתרונות — במשימות מהמורה למטה.",
        "ru": "1. Напишите запрос, который достаёт данные о продавцах по имени moshe; покажите поле адреса.\n2. Покажите записи только магазина rehitim, только с полем сделок.\nРешения — в задачах от преподавателя ниже.",
        "en": "1. Write a query that retrieves data on sellers named moshe; show the address field.\n2. Show the records of the rehitim shop only, with just the deals field.\nThe solutions are in the teacher tasks below."
      }
    },
    {
      "why": {
        "he": "למה צריך אופרטורים? שאלות אמיתיות כמעט אף פעם לא עם תנאי אחד: \"חנויות rehitim שיש להן לפחות 10 עסקאות\" — שני תנאים יחד. `and`, `or` ו-`not` מאפשרים לבנות כל שאלה כזאת מחלקים קטנים.",
        "ru": "Зачем нужны операторы? В настоящих вопросах почти никогда не одно условие: «магазины rehitim, у которых не меньше 10 сделок» — это два условия вместе. `and`, `or` и `not` позволяют собрать любой такой вопрос из маленьких кусочков.",
        "en": "Why do we need operators? Real questions almost never have just one condition: \"rehitim shops with at least 10 deals\" is two conditions together. `and`, `or` and `not` let you build any such question from small pieces."
      },
      "kind": "board",
      "title": {
        "he": "Operators: or, and, not",
        "ru": "Operators: or, and, not",
        "en": "Operators: or, and, not"
      },
      "text": {
        "he": "בשקופית \"Operators\" היו שלוש שאילתות: תנאי השוואה אחד, ואחר כך שני תנאים שמחוברים ב־`or` וב־`and`. לצידן: Or, And, Not — טבלאות אמת.",
        "ru": "На слайде «Operators» было три запроса: одно условие сравнения, а потом два условия, соединённые через `or` и через `and`. Рядом: Or, And, Not — таблицы истинности (טבלאות אמת).",
        "en": "The \"Operators\" slide had three queries: one comparison, then two conditions joined with `or` and with `and`. Next to them: Or, And, Not — truth tables."
      },
      "math": [
        "select * from shlifot",
        "where iskaot >= 10",
        "",
        "select * from shlifot",
        "where iskaot >= 10 or chanut = 'rehitim'",
        "",
        "select * from shlifot",
        "where iskaot >= 10 and chanut = 'rehitim'"
      ]
    },
    {
      "why": {
        "he": "טבלת אמת היא דרך לבדוק את עצמך בלי לנחש: יש רק 4 מצבים לשני תנאים, ואפשר לעבור על כולם. זה אותו היגיון כמו `&&` ו-`||` ב-Java באלגוריתמיקה, רק במילים. כשמערבבים `and` ו-`or` באותה שאילתה, `and` מחושב קודם — לכן עדיף לשים סוגריים ולא לסמוך על הזיכרון.",
        "ru": "Таблица истинности — способ проверить себя без угадывания: у двух условий всего 4 случая, и можно пройти все. Это та же логика, что `&&` и `||` в Java на алгоритмике, только словами. Если в одном запросе смешать `and` и `or`, `and` считается первым, поэтому лучше ставить скобки, а не надеяться на память.",
        "en": "A truth table lets you check yourself without guessing: two conditions have only 4 cases, and you can go through them all. It is the same logic as `&&` and `||` in Java in the algorithms course, just in words. When you mix `and` and `or` in one query, `and` is evaluated first, so use brackets rather than relying on memory."
      },
      "kind": "talk",
      "title": {
        "he": "טבלאות אמת",
        "ru": "Таблицы истинности",
        "en": "Truth tables"
      },
      "text": {
        "he": "`where` בודק כל שורה: התנאי אמת או שקר. השורה נכנסת לתוצאה רק אם הכול יוצא אמת.\n`and` (וגם) — אמת רק אם שני התנאים אמת.\n`or` (או) — אמת אם לפחות אחד מהם אמת.\n`not` (לא) — הופך: אמת נהיה שקר, ושקר נהיה אמת.\nלכן `and` מחזיר בדרך כלל פחות שורות מכל תנאי לבד, ו־`or` — יותר.",
        "ru": "`where` проверяет каждую строку: условие истинно или ложно. Строка попадает в результат, только если в итоге получается «истина».\n`and` (и) — истина, только если оба условия истинны.\n`or` (или) — истина, если хотя бы одно истинно.\n`not` (не) — переворачивает: истина становится ложью, ложь — истиной.\nПоэтому `and` обычно даёт меньше строк, чем каждое условие отдельно, а `or` — больше.",
        "en": "`where` checks every row: the condition is true or false. A row gets into the result only if the whole thing comes out true.\n`and` — true only if both conditions are true.\n`or` — true if at least one is true.\n`not` — flips it: true becomes false, false becomes true.\nSo `and` usually returns fewer rows than each condition alone, and `or` returns more."
      },
      "math": [
        "A      B      A and B   A or B",
        "true   true   true      true",
        "true   false  false     true",
        "false  true   false     true",
        "false  false  false     false",
        "",
        "not true = false    not false = true"
      ]
    },
    {
      "why": {
        "he": "למה זה עוזר? כי כפל וחיבור כבר מוכרים, ואז לא צריך לזכור טבלה. בכפל מספיק `0` אחד כדי שהכול יהיה `0` — בדיוק כמו `and`: תנאי אחד שקרי מפיל הכול. בחיבור מספיק `1` אחד — כמו `or`. (ב-`1 + 1` התוצאה היא פשוט \"אמת\", לא 2.)",
        "ru": "Чем это помогает? Умножение и сложение уже знакомы, и таблицу не нужно зубрить. При умножении достаточно одного `0`, чтобы всё стало `0`, — ровно как `and`: одно ложное условие валит всё. При сложении достаточно одной `1` — как `or`. (В `1 + 1` результат просто «истина», а не 2.)",
        "en": "How does this help? Multiplication and addition are already familiar, so there is no table to memorise. In multiplication one `0` makes everything `0` — exactly like `and`: one false condition sinks it all. In addition one `1` is enough — like `or`. (For `1 + 1` the result is simply \"true\", not 2.)"
      },
      "kind": "tip",
      "time": "13:12",
      "title": {
        "he": "and — כפל לוגי, or — חיבור לוגי",
        "ru": "and — логическое умножение, or — логическое сложение",
        "en": "and is logical multiplication, or is logical addition"
      },
      "text": {
        "he": "אמת = `1`, שקר = `0` (ערך בוליאני).\n`and` עובד כמו כפל: `1 × 1 = 1`, ובכל מקרה אחר יוצא `0`. למשל: «אני מלמדת גם SQL וגם מתמטיקה» — אמת רק אם שניהם נכונים.\n`or` עובד כמו חיבור: מספיק `1` אחד כדי שיצא אמת. רק `0` ו־`0` נותנים `0`.",
        "ru": "Истина = `1`, ложь = `0` (логическое, «булево» значение).\n`and` работает как умножение: `1 × 1 = 1`, во всех остальных случаях выходит `0`. Например: «я преподаю и SQL, и математику» — истина, только если верно и то и другое.\n`or` работает как сложение: достаточно одной `1`, чтобы вышла истина. Только `0` и `0` дают `0`.",
        "en": "True = `1`, false = `0` (a boolean value).\n`and` works like multiplication: `1 × 1 = 1`, every other case gives `0`. For example: «I teach both SQL and maths» — true only if both are true.\n`or` works like addition: one `1` is enough for true. Only `0` and `0` give `0`."
      }
    },
    {
      "why": {
        "he": "זה תרגיל שמחקה עבודה אמיתית: לקוח מספר מה הוא צריך במילים, ואנחנו הופכים את זה לטבלה. כל \"פריט מידע\" ברשימה הופך לעמודה אחת, וכל קליפ הוא שורה אחת. מספר סידורי של אמן הוא המפתח — לפיו מבדילים בין שני אמנים עם אותו שם.",
        "ru": "Это упражнение повторяет настоящую работу: заказчик словами говорит, что ему нужно, а мы превращаем это в таблицу. Каждый пункт списка становится одним столбцом, каждый клип — одной строкой. Порядковый номер артиста — это ключ: по нему различают двух артистов с одинаковым именем.",
        "en": "This exercise copies real work: a client says in words what they need, and we turn it into a table. Each item on the list becomes one column, each clip becomes one row. The artist's serial number is the key: it tells apart two artists with the same name."
      },
      "kind": "board",
      "title": {
        "he": "תרגיל פתיחה — הקמת מסד נתונים",
        "ru": "Вводное упражнение — создание базы данных",
        "en": "Opening exercise — building a database"
      },
      "text": {
        "he": "חברה אוספת מרחבי האינטרנט קטעי צחוק בסרטוני וידאו, ועוד לא סידרה את הנתונים במסד. צריך ליצור לה מסד שיכיל:\n• מספר סידורי של אומן\n• שם האומן\n• שם הקטע\n• מספר שניות של אורך הקטע\n• לינק אל הקטע\n• מספר הלייקים שהקטע קיבל באתרים השונים (אם אין לייקים — הערך 0)\nמטלה:\n1. הגדירו מסד נתונים ועברו אליו.\n2. הגדירו טבלה שעונה על דרישות החברה.\n3. מלאו את הטבלה בנתוני דמה (מהדמיון).\n4. שאילתה שמציגה את כל הנתונים.\n5. שאילתה שמציגה את שם האומן ואת מספר הלייקים של כל הרשומות.",
        "ru": "Компания собирает по интернету смешные видеоклипы и ещё не разложила данные по базе. Нужно создать базу, в которой будут:\n• порядковый номер артиста\n• имя артиста\n• название клипа\n• длина клипа в секундах\n• ссылка на клип\n• количество лайков, которые клип получил на разных сайтах (если лайков нет — значение 0)\nЗадание:\n1. Создайте базу данных и перейдите в неё.\n2. Создайте таблицу под требования компании.\n3. Заполните таблицу вымышленными данными.\n4. Запрос, который показывает все данные.\n5. Запрос, который показывает имя артиста и количество лайков всех записей.",
        "en": "A company collects funny video clips from around the internet and has not yet put its data into a database. Create one that holds:\n• the artist's serial number\n• the artist's name\n• the clip name\n• the clip length in seconds\n• a link to the clip\n• the number of likes the clip got on various sites (if none, the value is 0)\nTask:\n1. Define a database and switch to it.\n2. Define a table that meets the company's needs.\n3. Fill it with dummy data (from your imagination).\n4. A query that shows all the data.\n5. A query that shows the artist name and the number of likes for all records."
      }
    },
    {
      "why": {
        "he": "השאלה לכל עמודה: \"האם אחשב עם זה?\" לייקים ושניות — כן (סכום, ממוצע, מיון), לכן `int`. קישור — לא, לכן טקסט. למה 0 ולא להשאיר ריק? 0 אומר \"בדקנו ואין לייקים\", ריק אומר \"לא יודעים\". אלה שני דברים שונים, והחברה ביקשה 0.",
        "ru": "Вопрос к каждому столбцу: «буду ли я с этим считать?» Лайки и секунды — да (сумма, среднее, сортировка), поэтому `int`. Ссылка — нет, поэтому текст. Почему 0, а не пусто? 0 значит «проверили, лайков нет», пусто — «не знаем». Это разные вещи, и компания просила 0.",
        "en": "The question for each column: \"will I calculate with it?\" Likes and seconds — yes (sum, average, sorting), so `int`. A link — no, so text. Why 0 and not empty? 0 means \"we checked, no likes\"; empty means \"we do not know\". Different things, and the company asked for 0."
      },
      "kind": "tip",
      "title": {
        "he": "איך בוחרים סוגים לטבלה",
        "ru": "Как выбрать типы для таблицы",
        "en": "How to choose the column types"
      },
      "text": {
        "he": "כל מה שהוא מספר שלם — `int`: מספר האומן, השניות, הלייקים. כל מה שהוא טקסט — `nvarchar(n)` עם n מספיק גדול: שם אומן, שם קטע, ולינק (לינקים ארוכים, אז n גדול, למשל 200).\nלקטע בלי לייקים כותבים ב־insert את המספר 0.\nשלב 5 זה בדיוק \"בחירת עמודות\": שתי עמודות אחרי select, ובלי where — כי רוצים את כל הרשומות.",
        "ru": "Всё, что целое число, — `int`: номер артиста, секунды, лайки. Всё, что текст, — `nvarchar(n)` с достаточно большим n: имя артиста, название клипа и ссылка (ссылки длинные, так что n большой, например 200).\nДля клипа без лайков в insert пишем число 0.\nШаг 5 — это ровно «выбор столбцов»: два столбца после select и без where — ведь нужны все записи.",
        "en": "Anything that is a whole number is `int`: artist number, seconds, likes. Anything that is text is `nvarchar(n)` with a big enough n: artist name, clip name and link (links are long, so a big n, e.g. 200).\nFor a clip with no likes, write the number 0 in the insert.\nStep 5 is exactly \"choosing columns\": two columns after select and no where — because we want all records."
      }
    },
    {
      "why": {
        "he": "הערות הן בשבילך בעוד שבוע ובשביל מי שיקרא את הקוד: קובץ SQL עם 20 שאילתות בלי הסברים קשה להבין. ו-`--` לפני שורה זה \"כיבוי\" בטוח: השורה נשארת, אבל לא רצה.",
        "ru": "Комментарии — для тебя через неделю и для того, кто будет читать код: файл SQL с 20 запросами без пояснений трудно понять. А `--` перед строкой — безопасное «выключение»: строка остаётся, но не выполняется.",
        "en": "Comments are for you a week from now and for whoever reads the code: an SQL file with 20 queries and no notes is hard to follow. And `--` before a line is a safe \"off switch\": the line stays but does not run."
      },
      "kind": "tip",
      "time": "13:33",
      "title": {
        "he": "הערה: שני מקפים --",
        "ru": "Комментарий: два минуса --",
        "en": "A comment: two dashes --"
      },
      "text": {
        "he": "מה שכתוב אחרי `--` עד סוף השורה הוא הערה: SQL לא מריץ את זה.\n`-- כאן אני שולפת רק חנויות rehitim`\n`select * from shlifot where chanut = 'rehitim'`\nנוח לכתוב לעצמך מה כל שאילתה עושה, או לכבות שורה בלי למחוק אותה.",
        "ru": "Всё, что после `--` до конца строки, — комментарий: SQL это не выполняет.\n`-- тут достаю только магазины rehitim`\n`select * from shlifot where chanut = 'rehitim'`\nУдобно подписать себе, что делает каждый запрос, или выключить строку, не стирая её.",
        "en": "Everything after `--` to the end of the line is a comment: SQL does not run it.\n`-- here I fetch only rehitim shops`\n`select * from shlifot where chanut = 'rehitim'`\nHandy to note what each query does, or to switch a line off without deleting it."
      }
    },
    {
      "kind": "tip",
      "title": {
        "he": "מבט קדימה: מה עוד יש במצגת של הקורס",
        "ru": "Взгляд вперёд: что ещё есть в презентации курса",
        "en": "A look ahead: what else is in the course slides"
      },
      "text": {
        "he": "בשיעור עברנו עד שקופית ה-Operators. בהמשך המצגת, על אותה טבלה `shlifot`:\n• `order by` — מיון (עולה, ו-`desc` יורד)\n• `in (…)` ו-`between … and …` — רשימה וטווח\n• `like '%co.il'` — חיפוש לפי חלק מטקסט\n• `top 4` ו-`distinct` — רק כמה שורות, בלי כפילויות\nזה עוד לא חומר חובה — רק כדי לדעת לאן ממשיכים.",
        "ru": "На уроке дошли до слайда Operators. Дальше в презентации, на той же таблице `shlifot`:\n• `order by` — сортировка (по возрастанию, а с `desc` по убыванию)\n• `in (…)` и `between … and …` — список и диапазон\n• `like '%co.il'` — поиск по части текста\n• `top 4` и `distinct` — только несколько строк, без повторов\nЭто пока не обязательный материал — только чтобы знать, куда идём.",
        "en": "In class we reached the Operators slide. Later in the slides, on the same `shlifot` table:\n• `order by` — sorting (ascending, and `desc` for descending)\n• `in (…)` and `between … and …` — a list and a range\n• `like '%co.il'` — search by part of a text\n• `top 4` and `distinct` — only a few rows, no duplicates\nNot required yet — just to know where we are heading."
      },
      "math": [
        "select * from shlifot",
        "where chanut in ('rehitim', 'shayish')",
        "order by iskaot desc"
      ],
      "why": {
        "he": "למה להציץ? כי כל הפקודות האלה נכתבות אחרי `where` שכבר מכירים, ובאותו סדר: קודם בוחרים עמודות (`select`), אחר כך שורות (`where`), ובסוף מסדרים (`order by`). מי שמבין את הסדר הזה עכשיו, ילמד את החדש מהר.",
        "ru": "Зачем заглядывать? Все эти команды пишутся после уже знакомого `where` и в том же порядке: сначала выбираем столбцы (`select`), потом строки (`where`), в конце упорядочиваем (`order by`). Кто понял этот порядок сейчас, новое выучит быстро.",
        "en": "Why peek? All these commands are written after the familiar `where`, in the same order: first choose columns (`select`), then rows (`where`), and finally sort (`order by`). Whoever gets this order now will learn the new ones fast."
      },
      "_src": "pass-0311"
    }
  ],
  "review": [
    {
      "title": {
        "he": "עמודות ושורות",
        "ru": "Столбцы и строки",
        "en": "Columns and rows"
      },
      "text": {
        "he": "אחרי `select` — אילו עמודות. אחרי `where` — אילו שורות. אפשר את שניהם יחד.",
        "ru": "После `select` — какие столбцы. После `where` — какие строки. Можно и то и другое вместе.",
        "en": "After `select` — which columns. After `where` — which rows. You can use both together."
      }
    },
    {
      "title": {
        "he": "טקסט בגרשיים",
        "ru": "Текст в кавычках",
        "en": "Text in quotes"
      },
      "text": {
        "he": "`where menahel = 'moshe'` — טקסט תמיד בתוך `'…'`; מספר בלי.",
        "ru": "`where menahel = 'moshe'` — текст всегда в `'…'`; число без кавычек.",
        "en": "`where menahel = 'moshe'` — text always inside `'…'`; numbers without."
      }
    },
    {
      "title": {
        "he": "השוואות",
        "ru": "Сравнения",
        "en": "Comparisons"
      },
      "text": {
        "he": "`=`, `>`, `<`, `>=`, `<=` — למשל `iskaot >= 10`.",
        "ru": "`=`, `>`, `<`, `>=`, `<=` — например, `iskaot >= 10`.",
        "en": "`=`, `>`, `<`, `>=`, `<=` — for example `iskaot >= 10`."
      }
    },
    {
      "title": {
        "he": "and",
        "ru": "and",
        "en": "and"
      },
      "text": {
        "he": "שני התנאים חייבים להיות אמת. בדרך כלל פחות שורות.",
        "ru": "Оба условия должны быть истинны. Обычно строк меньше.",
        "en": "Both conditions must be true. Usually fewer rows."
      }
    },
    {
      "title": {
        "he": "or",
        "ru": "or",
        "en": "or"
      },
      "text": {
        "he": "מספיק שתנאי אחד אמת. בדרך כלל יותר שורות.",
        "ru": "Достаточно одного истинного условия. Обычно строк больше.",
        "en": "One true condition is enough. Usually more rows."
      }
    },
    {
      "title": {
        "he": "not",
        "ru": "not",
        "en": "not"
      },
      "text": {
        "he": "הופך את התנאי: `not chanut = 'rehitim'` — כל החנויות חוץ מ־rehitim.",
        "ru": "Переворачивает условие: `not chanut = 'rehitim'` — все магазины, кроме rehitim.",
        "en": "Flips the condition: `not chanut = 'rehitim'` — every shop except rehitim."
      }
    },
    {
      "title": {
        "he": "מסד מאפס",
        "ru": "База с нуля",
        "en": "A database from scratch"
      },
      "text": {
        "he": "`create database` → `use` → `create table` → `insert into` → `select`. מספרים — `int`, טקסט — `nvarchar(n)`.",
        "ru": "`create database` → `use` → `create table` → `insert into` → `select`. Числа — `int`, текст — `nvarchar(n)`.",
        "en": "`create database` → `use` → `create table` → `insert into` → `select`. Numbers are `int`, text is `nvarchar(n)`."
      }
    }
  ],
  "tasks": {
    "groups": {
      "ex": {
        "he": "התרגיל מהשקופית (טבלת shlifot)",
        "ru": "Упражнение со слайда (таблица shlifot)",
        "en": "The slide exercise (shlifot table)"
      },
      "ops": {
        "he": "Operators",
        "ru": "Operators",
        "en": "Operators"
      },
      "clips": {
        "he": "תרגיל פתיחה: מסד קטעי וידאו",
        "ru": "Вводное упражнение: база видеоклипов",
        "en": "Opening exercise: a video clips database"
      }
    },
    "teacher": [
      {
        "id": "t-e-1",
        "example": {"he": "טבלה אחרת `perot (id, pri, kamut)`:\n```\n(1,'tapuach',4)\n(2,'banana',6)\n(3,'tapuach',2)\n(4,'anavim',9)\n(5,'banana',1)\n```\nצריך: להציג רק את הכמות (kamut) של הפירות tapuach.\n`select kamut from perot where pri = 'tapuach'`\nאחרי `select` — איזו עמודה להציג. אחרי `where` — לפי איזה תנאי בוחרים שורות.", "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\nНужно: показать только количество (kamut) у фруктов tapuach.\n`select kamut from perot where pri = 'tapuach'`\nПосле `select` — какой столбец показать. После `where` — по какому условию отбирать строки.", "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\nNeeded: show only the amount (kamut) of the tapuach fruits.\n`select kamut from perot where pri = 'tapuach'`\nAfter `select` comes the column to show. After `where` comes the condition that picks the rows."},
        "group": "ex",
        "label": {
          "he": "תרגיל 1",
          "ru": "Задание 1",
          "en": "Exercise 1"
        },
        "kind": "choice",
        "text": {
          "he": "תרגיל 1: נתונים על מוכרים ששמם moshe — להציג את שדה הכתובת. איזו שאילתה?",
          "ru": "Задание 1: данные о продавцах по имени moshe — показать поле адреса. Какой запрос?",
          "en": "Exercise 1: data on sellers named moshe — show the address field. Which query?"
        },
        "options": [
          "`select * from shlifot where menahel = 'moshe'`",
          "`select ktovet from shlifot where menahel = 'moshe'`",
          "`select menahel from shlifot where ktovet = 'moshe'`",
          "`select ktovet from shlifot where menahel = moshe`"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "שם המוכר נמצא בעמודה menahel, הכתובת — בעמודה ktovet.",
            "ru": "Имя продавца — в столбце menahel, адрес — в столбце ktovet.",
            "en": "The seller's name is in menahel, the address in ktovet."
          },
          {
            "he": "ביקשו רק את שדה הכתובת, לא את כל העמודות. ו־moshe הוא טקסט.",
            "ru": "Просили только поле адреса, а не все столбцы. И moshe — это текст.",
            "en": "Only the address field was asked for, not all columns. And moshe is text."
          }
        ],
        "solution": [
          {
            "he": "עמודה להצגה: ktovet → אחרי select.",
            "ru": "Столбец для показа: ktovet → после select.",
            "en": "Column to show: ktovet → after select."
          },
          {
            "he": "השורות: רק של moshe → `where menahel = 'moshe'` (עם גרשיים).",
            "ru": "Строки: только moshe → `where menahel = 'moshe'` (в кавычках).",
            "en": "Rows: only moshe → `where menahel = 'moshe'` (with quotes)."
          },
          "select ktovet from shlifot where menahel = 'moshe'"
        ]
      },
      {
        "id": "t-e-2",
        "example": {"he": "טבלה אחרת `perot (id, pri, kamut)`:\n```\n(1,'tapuach',4)\n(2,'banana',6)\n(3,'tapuach',2)\n(4,'anavim',9)\n(5,'banana',1)\n```\n`select kamut from perot where pri = 'anavim'`\nanavim רק בשורה 4 → שורה אחת (הערך 9).\nיש עמודה אחת, אבל שורות כמה שמתאימות.", "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select kamut from perot where pri = 'anavim'`\nanavim только в строке 4 → 1 строка (значение 9).\nСтолбец один, но строк столько, сколько подходят.", "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select kamut from perot where pri = 'anavim'`\nanavim is only in row 4 → 1 row (the value 9).\nOne column, but as many rows as fit."},
        "group": "ex",
        "label": {
          "he": "תרגיל 1 — כמה",
          "ru": "Задание 1 — сколько",
          "en": "Exercise 1 — how many"
        },
        "kind": "number",
        "text": {
          "he": "הריצו את השאילתה של תרגיל 1 על טבלת shlifot:\n`select ktovet from shlifot where menahel = 'moshe'`\nכמה שורות (כתובות) היא תחזיר?",
          "ru": "Выполни запрос задания 1 на таблице shlifot:\n`select ktovet from shlifot where menahel = 'moshe'`\nСколько строк (адресов) он вернёт?",
          "en": "Run the exercise 1 query on the shlifot table:\n`select ktovet from shlifot where menahel = 'moshe'`\nHow many rows (addresses) does it return?"
        },
        "answer": {
          "value": "5"
        },
        "hints": [
          {
            "he": "`where` בודק כל שורה: האם בעמודה menahel כתוב 'moshe'? (זה הערך האחרון ב־insert)",
            "ru": "`where` проверяет каждую строку: в столбце menahel стоит 'moshe'? (это последнее значение в insert)",
            "en": "`where` checks every row: is the menahel column 'moshe'? (it is the last value in the insert)"
          }
        ],
        "solution": [
          "select ktovet from shlifot where menahel = 'moshe'",
          {
            "he": "התוצאה — עמודה ktovet:",
            "ru": "Результат — столбец ktovet:",
            "en": "The result — the ktovet column:"
          },
          "dayan 11 rechovot · ezra 14 haifa · ofer 14 beer sheva · hanadiv 89 chadera · golda meir 89 chadera",
          {
            "he": "סה״כ 5 שורות.",
            "ru": "Итого 5 строк.",
            "en": "That is 5 rows."
          }
        ]
      },
      {
        "id": "t-e-3",
        "example": {"he": "טבלה אחרת `perot (id, pri, kamut)`:\n```\n(1,'tapuach',4)\n(2,'banana',6)\n(3,'tapuach',2)\n(4,'anavim',9)\n(5,'banana',1)\n```\nצריך: רק הרשומות של הפרי banana, ורק עם שדה הכמות.\n`select kamut from perot where pri = 'banana'`\nהעמודה להצגה — אחרי `select`. התנאי על טקסט — אחרי `where`, והטקסט בגרשיים.", "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\nНужно: записи только фрукта banana, только с полем количества.\n`select kamut from perot where pri = 'banana'`\nСтолбец для показа — после `select`. Условие на текст — после `where`, текст в кавычках.", "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\nNeeded: only the records of the fruit banana, only with the amount field.\n`select kamut from perot where pri = 'banana'`\nThe column to show goes after `select`. The text condition goes after `where`, the text in quotes."},
        "group": "ex",
        "label": {
          "he": "תרגיל 2",
          "ru": "Задание 2",
          "en": "Exercise 2"
        },
        "kind": "choice",
        "text": {
          "he": "תרגיל 2: הרשומות של חנות rehitim בלבד, רק עם שדה עסקאות. איזו שאילתה?",
          "ru": "Задание 2: записи только магазина rehitim, только с полем сделок. Какой запрос?",
          "en": "Exercise 2: records of the rehitim shop only, with just the deals field. Which query?"
        },
        "options": [
          "`select iskaot from shlifot where chanut = 'rehitim'`",
          "`select chanut from shlifot where iskaot = 'rehitim'`",
          "`select * from shlifot where chanut = 'rehitim'`",
          "`select iskaot from shlifot`"
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "איזו עמודה מציגים? ואיזה תנאי מסנן את השורות?",
            "ru": "Какой столбец показываем? И какое условие отбирает строки?",
            "en": "Which column is shown? Which condition filters the rows?"
          },
          {
            "he": "עסקאות = iskaot. חנות = chanut.",
            "ru": "Сделки = iskaot. Магазин = chanut.",
            "en": "Deals = iskaot. Shop = chanut."
          }
        ],
        "solution": [
          {
            "he": "עמודה: iskaot. שורות: chanut = 'rehitim'.",
            "ru": "Столбец: iskaot. Строки: chanut = 'rehitim'.",
            "en": "Column: iskaot. Rows: chanut = 'rehitim'."
          },
          "select iskaot from shlifot where chanut = 'rehitim'"
        ]
      },
      {
        "id": "t-e-4",
        "example": {"he": "טבלה אחרת `perot (id, pri, kamut)`:\n```\n(1,'tapuach',4)\n(2,'banana',6)\n(3,'tapuach',2)\n(4,'anavim',9)\n(5,'banana',1)\n```\n`select kamut from perot where pri = 'banana'`\nbanana בשורה 2 ובשורה 5 → 2 שורות (הערכים 6 ו־1).", "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select kamut from perot where pri = 'banana'`\nbanana в строке 2 и в строке 5 → 2 строки (значения 6 и 1).", "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select kamut from perot where pri = 'banana'`\nbanana is in row 2 and row 5 → 2 rows (the values 6 and 1)."},
        "group": "ex",
        "label": {
          "he": "תרגיל 2 — כמה",
          "ru": "Задание 2 — сколько",
          "en": "Exercise 2 — how many"
        },
        "kind": "number",
        "text": {
          "he": "הריצו את השאילתה של תרגיל 2:\n`select iskaot from shlifot where chanut = 'rehitim'`\nכמה שורות היא תחזיר?",
          "ru": "Выполни запрос задания 2:\n`select iskaot from shlifot where chanut = 'rehitim'`\nСколько строк он вернёт?",
          "en": "Run the exercise 2 query:\n`select iskaot from shlifot where chanut = 'rehitim'`\nHow many rows does it return?"
        },
        "answer": {
          "value": "4"
        },
        "hints": [
          {
            "he": "`where chanut = 'rehitim'` משאיר רק את השורות של rehitim ב־insert.",
            "ru": "`where chanut = 'rehitim'` оставляет только строки rehitim из insert.",
            "en": "`where chanut = 'rehitim'` keeps only the rehitim rows from the insert."
          }
        ],
        "solution": [
          "select iskaot from shlifot where chanut = 'rehitim'",
          {
            "he": "התוצאה — עמודה iskaot: 9, 9, 110, 104.",
            "ru": "Результат — столбец iskaot: 9, 9, 110, 104.",
            "en": "The result — the iskaot column: 9, 9, 110, 104."
          },
          {
            "he": "סה״כ 4 שורות.",
            "ru": "Итого 4 строки.",
            "en": "That is 4 rows."
          }
        ]
      },
      {
        "id": "t-o-1",
        "example": {"he": "טבלה אחרת `perot (id, pri, kamut)`:\n```\n(1,'tapuach',4)\n(2,'banana',6)\n(3,'tapuach',2)\n(4,'anavim',9)\n(5,'banana',1)\n```\n`select * from perot where kamut >= 4 and pri = 'banana'`\n`and` — צריך את שני התנאים יחד.\n`kamut >= 4`: שורות 1, 2, 4.\nמהן banana: רק שורה 2 → שורה אחת.", "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where kamut >= 4 and pri = 'banana'`\n`and` — нужны оба условия сразу.\nkamut >= 4: строки 1, 2, 4.\nИз них banana: только строка 2 → 1 строка.", "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where kamut >= 4 and pri = 'banana'`\n`and` means both conditions at once.\nkamut >= 4: rows 1, 2, 4.\nOf those, banana: only row 2 → 1 row."},
        "group": "ops",
        "label": "and",
        "kind": "number",
        "text": {
          "he": "כמה שורות תחזיר השאילתה השלישית מהשקופית?\n`select * from shlifot where iskaot >= 10 and chanut = 'rehitim'`",
          "ru": "Сколько строк вернёт третий запрос со слайда?\n`select * from shlifot where iskaot >= 10 and chanut = 'rehitim'`",
          "en": "How many rows does the third query on the slide return?\n`select * from shlifot where iskaot >= 10 and chanut = 'rehitim'`"
        },
        "answer": {
          "value": "2"
        },
        "hints": [
          {
            "he": "עם and שני התנאים חייבים להתקיים יחד.",
            "ru": "С and оба условия должны выполняться одновременно.",
            "en": "With and both conditions must hold together."
          },
          {
            "he": "קחו רק את 4 שורות rehitim ובדקו בכל אחת אם iskaot ≥ 10.",
            "ru": "Возьми только 4 строки rehitim и проверь в каждой iskaot ≥ 10.",
            "en": "Take just the 4 rehitim rows and check iskaot ≥ 10 in each."
          }
        ],
        "solution": [
          {
            "he": "rehitim: 9, 9, 110, 104.",
            "ru": "rehitim: 9, 9, 110, 104.",
            "en": "rehitim: 9, 9, 110, 104."
          },
          {
            "he": "מתוכן 10 ומעלה: 110, 104.",
            "ru": "Из них 10 и больше: 110, 104.",
            "en": "Of those, 10 or more: 110, 104."
          },
          {
            "he": "סה״כ 2 שורות.",
            "ru": "Итого 2 строки.",
            "en": "That is 2 rows."
          }
        ]
      },
      {
        "id": "t-o-2",
        "example": {"he": "טבלה אחרת `perot (id, pri, kamut)`:\n```\n(1,'tapuach',4)\n(2,'banana',6)\n(3,'tapuach',2)\n(4,'anavim',9)\n(5,'banana',1)\n```\nהתנאים: `kamut >= 4` ו־`pri = 'tapuach'`.\nעם `and`: צריך את שניהם → רק שורה 1 → שורה אחת.\nעכשיו תספור בעצמך עם `or` (מספיק תנאי אחד) ותשווה.", "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\nУсловия: `kamut >= 4` и `pri = 'tapuach'`.\nС `and`: нужны оба → только строка 1 → 1 строка.\nТеперь посчитай сам для `or` (хватает одного условия) и сравни.", "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\nThe conditions: `kamut >= 4` and `pri = 'tapuach'`.\nWith `and`: both are needed → only row 1 → 1 row.\nNow count it yourself for `or` (one condition is enough) and compare."},
        "group": "ops",
        "label": {
          "he": "or מול and",
          "ru": "or против and",
          "en": "or vs and"
        },
        "kind": "choice",
        "text": {
          "he": "בשקופית יש אותם שני תנאים פעם עם `or` ופעם עם `and`. איזו שאילתה מחזירה יותר שורות?",
          "ru": "На слайде одни и те же два условия: один раз с `or`, другой — с `and`. Какой запрос вернёт больше строк?",
          "en": "The slide has the same two conditions once with `or` and once with `and`. Which query returns more rows?"
        },
        "options": [
          {
            "he": "זו עם or",
            "ru": "С or",
            "en": "The one with or"
          },
          {
            "he": "זו עם and",
            "ru": "С and",
            "en": "The one with and"
          },
          {
            "he": "שתיהן אותו מספר",
            "ru": "Одинаково",
            "en": "Both the same"
          }
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "or: מספיק תנאי אחד. and: צריך את שניהם.",
            "ru": "or: хватает одного условия. and: нужны оба.",
            "en": "or: one condition is enough. and: both are needed."
          }
        ],
        "solution": [
          {
            "he": "על טבלת shlifot: עם or — 7 שורות, עם and — 2 שורות.",
            "ru": "На таблице shlifot: с or — 7 строк, с and — 2 строки.",
            "en": "On shlifot: with or — 7 rows, with and — 2 rows."
          },
          {
            "he": "התשובה: זו עם or.",
            "ru": "Ответ: с or.",
            "en": "Answer: the one with or."
          }
        ]
      },
      {
        "id": "t-k-1",
        "example": {"he": "משימה דומה: לעבור למסד shop שכבר קיים → רק `use shop`.\nאם המסד עוד לא קיים, צריך קודם ליצור אותו. תחשוב באיזה סדר באות שתי הפקודות: אפשר לעבור למסד שעוד לא קיים?", "ru": "Похожая задача: перейти в базу shop, которая УЖЕ есть → только `use shop`.\nЕсли базы ещё нет, её сначала нужно создать. Подумай, в каком порядке идут две команды: можно ли перейти в базу, которой ещё нет?", "en": "A similar task: switch to the database shop that ALREADY exists → only `use shop`.\nIf the database does not exist yet, it has to be created first. Think about the order of the two commands: can you switch to a database that does not exist yet?"},
        "group": "clips",
        "label": {
          "he": "מטלה 1",
          "ru": "Шаг 1",
          "en": "Task 1"
        },
        "kind": "choice",
        "text": {
          "he": "מטלה 1: \"הגדר מסד נתונים ותעבור אליו\". מה עושים?",
          "ru": "Шаг 1: «создай базу данных и перейди в неё». Что пишем?",
          "en": "Task 1: \"define a database and switch to it\". What do you write?"
        },
        "options": [
          "`create table shtuyot`",
          "`create database shtuyot` + `use shtuyot`",
          "`use shtuyot` + `create database shtuyot`",
          "`select * from shtuyot`"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "אי אפשר לעבור למסד שעוד לא קיים.",
            "ru": "Нельзя перейти в базу, которой ещё нет.",
            "en": "You cannot switch to a database that does not exist yet."
          }
        ],
        "solution": [
          {
            "he": "קודם יוצרים, אחר כך עוברים:",
            "ru": "Сначала создаём, потом переходим:",
            "en": "Create first, then switch:"
          },
          "create database shtuyot",
          "use shtuyot"
        ]
      },
      {
        "id": "t-k-2",
        "example": {"he": "חברה אחרת רוצה טבלת פירות: «מספר פרי, שם, כמות».\nכל סעיף בדרישה — עמודה אחת → 3 סעיפים → 3 עמודות:\n`create table perot (id int, pri nvarchar(20), kamut int)`", "ru": "Другая компания хочет таблицу фруктов: «номер фрукта, название, количество».\nКаждый пункт требования — один столбец → 3 пункта → 3 столбца:\n`create table perot (id int, pri nvarchar(20), kamut int)`", "en": "Another company wants a fruit table: \"fruit number, name, amount\".\nEach item of the requirement is one column → 3 items → 3 columns:\n`create table perot (id int, pri nvarchar(20), kamut int)`"},
        "group": "clips",
        "label": {
          "he": "כמה עמודות",
          "ru": "Сколько столбцов",
          "en": "How many columns"
        },
        "kind": "number",
        "text": {
          "he": "כתבו את הפקודה `create table clips (...)` לפי דרישות החברה — עמודה לכל פריט. כמה עמודות יהיו בתוך הסוגריים?",
          "ru": "Напиши команду `create table clips (...)` по требованиям компании — по столбцу на каждый пункт. Сколько столбцов будет в скобках?",
          "en": "Write the `create table clips (...)` command from the company's needs — one column per item. How many columns go inside the brackets?"
        },
        "answer": {
          "value": "6"
        },
        "hints": [
          {
            "he": "כל פריט ברשימה של החברה הופך לשורה \"שם טיפוס\" בתוך הסוגריים.",
            "ru": "Каждый пункт из списка компании становится парой «имя тип» в скобках.",
            "en": "Each item in the company's list becomes a \"name type\" pair inside the brackets."
          }
        ],
        "solution": [
          "create table clips (",
          "  artist_num int,",
          "  artist_name nvarchar(50),",
          "  clip_name nvarchar(100),",
          "  seconds int,",
          "  link nvarchar(200),",
          "  likes int",
          ")",
          {
            "he": "סה״כ 6 עמודות (ובלי פסיק אחרי האחרונה).",
            "ru": "Итого 6 столбцов (и без запятой после последнего).",
            "en": "That is 6 columns (and no comma after the last one)."
          }
        ]
      },
      {
        "id": "t-k-3",
        "example": {"he": "עמודה «שם הקליפ» היא טקסט → `nvarchar(n)`, למשל `nvarchar(100)`.\nולייקים — זה טקסט או מספר שלם?", "ru": "Столбец «название клипа» — это текст → `nvarchar(n)`, например `nvarchar(100)`.\nА лайки — это текст или целое число?", "en": "A \"clip name\" column is text → `nvarchar(n)`, for example `nvarchar(100)`.\nAnd likes: are they text or a whole number?"},
        "group": "clips",
        "label": {
          "he": "לייקים",
          "ru": "Лайки",
          "en": "Likes"
        },
        "kind": "text",
        "text": {
          "he": "איזה סוג נתונים מתאים לעמודת הלייקים?",
          "ru": "Какой тип данных подходит для столбца лайков?",
          "en": "Which data type fits the likes column?"
        },
        "answer": {
          "accept": [
            "int",
            "integer"
          ]
        },
        "hints": [
          {
            "he": "מספר הלייקים הוא תמיד מספר שלם (גם 0).",
            "ru": "Количество лайков — всегда целое число (и 0 тоже).",
            "en": "The number of likes is always a whole number (0 included)."
          }
        ],
        "solution": [
          {
            "he": "מספר שלם → `int`. לקטע בלי לייקים מכניסים 0.",
            "ru": "Целое число → `int`. Для клипа без лайков вставляем 0.",
            "en": "A whole number → `int`. For a clip with no likes insert 0."
          },
          "likes int"
        ]
      },
      {
        "id": "t-k-4",
        "example": {"he": "טבלה אחרת `perot (id, pri, kamut)`:\n```\n(1,'tapuach',4)\n(2,'banana',6)\n(3,'tapuach',2)\n(4,'anavim',9)\n(5,'banana',1)\n```\nצריך: מספר ושם של כל הפירות.\n`select id, pri from perot`\nהעמודות מופרדות בפסיק. לא כותבים `where`, כי צריך את כל השורות.", "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\nНужно: номер и название всех фруктов.\n`select id, pri from perot`\nСтолбцы через запятую. `where` не пишем, потому что нужны все строки.", "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\nNeeded: the number and name of all the fruits.\n`select id, pri from perot`\nColumns are separated by a comma. No `where`, because all rows are needed."},
        "group": "clips",
        "label": {
          "he": "מטלה 5",
          "ru": "Шаг 5",
          "en": "Task 5"
        },
        "kind": "choice",
        "text": {
          "he": "מטלה 5: שם האומן ומספר הלייקים של כל הרשומות. בטבלה clips העמודות נקראות artist_name ו־likes. איזו שאילתה?",
          "ru": "Шаг 5: имя артиста и количество лайков всех записей. В таблице clips столбцы называются artist_name и likes. Какой запрос?",
          "en": "Task 5: the artist name and number of likes for all records. In the clips table the columns are artist_name and likes. Which query?"
        },
        "options": [
          "`select * from clips`",
          "`select artist_name, likes from clips where likes > 0`",
          "`select artist_name, likes from clips`",
          "`select artist_name and likes from clips`"
        ],
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "\"כל הרשומות\" — האם צריך where?",
            "ru": "«Все записи» — нужен ли where?",
            "en": "\"All records\" — do you need a where?"
          },
          {
            "he": "בין עמודות ב־select שמים פסיק, לא and.",
            "ru": "Между столбцами в select ставят запятую, а не and.",
            "en": "Columns in select are separated by a comma, not and."
          }
        ],
        "solution": [
          {
            "he": "שתי עמודות אחרי select, עם פסיק ביניהן. בלי where — כל השורות.",
            "ru": "Два столбца после select через запятую. Без where — все строки.",
            "en": "Two columns after select, with a comma. No where — all rows."
          },
          "select artist_name, likes from clips"
        ]
      }
    ],
    "ai": [
      {
        "id": "ai-1",
        "example": {"he": "השורה `(1,'tapuach',4)` והשאילתה `where kamut >= 4 and pri = 'tapuach'`.\nתנאי 1: `4 >= 4` → אמת.\nתנאי 2: `tapuach = tapuach` → אמת.\n`and`: שניהם אמת → השורה תופיע בתוצאה.", "ru": "Строка `(1,'tapuach',4)` и запрос `where kamut >= 4 and pri = 'tapuach'`.\nУсловие 1: 4 >= 4 → истинно.\nУсловие 2: tapuach = tapuach → истинно.\n`and`: оба истинны → строка попадёт в результат.", "en": "The row `(1,'tapuach',4)` and the query `where kamut >= 4 and pri = 'tapuach'`.\nCondition 1: 4 >= 4 → true.\nCondition 2: tapuach = tapuach → true.\n`and`: both are true → the row is in the result."},
        "level": 1,
        "label": "and",
        "kind": "choice",
        "text": {
          "he": "השורה `('rehitim', 'dayan 11 rechovot', 'a@gmail', 9, 'moshe')`: בשבילה `chanut = 'rehitim'` אמת, ו־`iskaot >= 10` שקר. האם היא תופיע בתוצאה של\n`select * from shlifot where iskaot >= 10 and chanut = 'rehitim'`?",
          "ru": "Строка ('rehitim', 'dayan 11 rechovot', 'a@gmail', 9, 'moshe'): для неё `chanut = 'rehitim'` истинно, а `iskaot >= 10` ложно. Попадёт ли она в результат\n`select * from shlifot where iskaot >= 10 and chanut = 'rehitim'`?",
          "en": "The row ('rehitim', 'dayan 11 rechovot', 'a@gmail', 9, 'moshe'): for it `chanut = 'rehitim'` is true and `iskaot >= 10` is false. Will it be in the result of\n`select * from shlifot where iskaot >= 10 and chanut = 'rehitim'`?"
        },
        "options": [
          {
            "he": "כן",
            "ru": "Да",
            "en": "Yes"
          },
          {
            "he": "לא",
            "ru": "Нет",
            "en": "No"
          }
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "`and` מכניס שורה לתוצאה רק אם שני התנאים אמת.",
            "ru": "`and` пропускает строку в результат, только если оба условия истинны.",
            "en": "`and` lets a row into the result only if both conditions are true."
          }
        ],
        "solution": [
          "9 >= 10  →  false",
          "'rehitim' = 'rehitim'  →  true",
          "false and true  →  false",
          {
            "he": "השורה לא תיכנס לתוצאה.",
            "ru": "Строка не попадёт в результат.",
            "en": "The row will not be in the result."
          }
        ]
      },
      {
        "id": "ai-2",
        "example": {"he": "השמטה דומה: `select * from perot where kamut >= 4 ___ pri = 'tapuach'`\nאם צריך ששני התנאים יהיו אמת, חסר `and`.\nבמשימה צריך משהו אחר: מספיק תנאי אחד.", "ru": "Похожий пропуск: `select * from perot where kamut >= 4 ___ pri = 'tapuach'`\nЕсли нужно, чтобы были истинны ОБА условия, пропущено `and`.\nВ задании нужно другое: хватает одного условия.", "en": "A similar gap: `select * from perot where kamut >= 4 ___ pri = 'tapuach'`\nIf BOTH conditions must be true, the missing word is `and`.\nThe task needs something else: one condition is enough."},
        "level": 1,
        "label": {
          "he": "לפחות אחד",
          "ru": "Хотя бы одно",
          "en": "At least one"
        },
        "kind": "text",
        "text": {
          "he": "השלימו את המילה החסרה בשאילתה, כך שמספיק שאחד התנאים אמת:\n`select * from shlifot where iskaot >= 10 ___ chanut = 'rehitim'`",
          "ru": "Допиши пропущенное слово в запросе так, чтобы хватало одного истинного условия:\n`select * from shlifot where iskaot >= 10 ___ chanut = 'rehitim'`",
          "en": "Fill in the missing word so that one true condition is enough:\n`select * from shlifot where iskaot >= 10 ___ chanut = 'rehitim'`"
        },
        "answer": {
          "accept": [
            "or"
          ]
        },
        "hints": [
          {
            "he": "בעברית: \"או\".",
            "ru": "По-русски «или».",
            "en": "It is the partner of and in the truth table."
          }
        ],
        "solution": [
          "select * from shlifot where iskaot >= 10 or chanut = 'rehitim'",
          {
            "he": "התשובה: `or`.",
            "ru": "Ответ: `or`.",
            "en": "Answer: `or`."
          }
        ]
      },
      {
        "id": "ai-3",
        "example": {"he": "טבלה אחרת `perot (id, pri, kamut)`:\n```\n(1,'tapuach',4)\n(2,'banana',6)\n(3,'tapuach',2)\n(4,'anavim',9)\n(5,'banana',1)\n```\n`not kamut < 4` — «לא קטן מ־4».\nלא קטן מ־4 — כלומר 4 או יותר → `kamut >= 4`.\nבדיקה: שני התנאים בוחרים את שורות 1, 2, 4.", "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`not kamut < 4` — «НЕ меньше 4».\nНе меньше 4 — значит 4 или больше → `kamut >= 4`.\nПроверка: оба условия выбирают строки 1, 2, 4.", "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`not kamut < 4` means \"NOT less than 4\".\nNot less than 4 means 4 or more → `kamut >= 4`.\nCheck: both conditions pick rows 1, 2, 4."},
        "level": 1,
        "label": "not",
        "kind": "choice",
        "text": {
          "he": "איזה תנאי בוחר בדיוק את אותן שורות כמו `not iskaot >= 10`?",
          "ru": "Какое условие выбирает ровно те же строки, что `not iskaot >= 10`?",
          "en": "Which condition picks exactly the same rows as `not iskaot >= 10`?"
        },
        "options": [
          "`iskaot > 10`",
          "`iskaot <= 10`",
          "`iskaot < 10`",
          "`iskaot = 10`"
        ],
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "not הופך: מה ההפך של \"10 ומעלה\"?",
            "ru": "not переворачивает: что противоположно «10 и больше»?",
            "en": "not flips it: what is the opposite of \"10 or more\"?"
          },
          {
            "he": "שימו לב: 10 עצמו שייך ל־\"10 ומעלה\".",
            "ru": "Внимание: само 10 относится к «10 и больше».",
            "en": "Careful: 10 itself belongs to \"10 or more\"."
          }
        ],
        "solution": [
          {
            "he": "`iskaot >= 10` כולל את 10. ההפך — כל מה שקטן מ־10.",
            "ru": "`iskaot >= 10` включает 10. Противоположное — всё, что меньше 10.",
            "en": "`iskaot >= 10` includes 10. The opposite is everything below 10."
          },
          "not iskaot >= 10  ⇔  iskaot < 10"
        ]
      },
      {
        "id": "ai-4",
        "example": {"he": "טבלה אחרת `perot (id, pri, kamut)`:\n```\n(1,'tapuach',4)\n(2,'banana',6)\n(3,'tapuach',2)\n(4,'anavim',9)\n(5,'banana',1)\n```\n`select * from perot where pri = 'tapuach' and kamut >= 4`\ntapuach: שורות 1 ו־3.\nמהן `kamut >= 4`: שורה 1 (4 כן), שורה 3 (2 לא) → שורה אחת.", "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where pri = 'tapuach' and kamut >= 4`\ntapuach: строки 1 и 3.\nИз них kamut >= 4: строка 1 (4 да), строка 3 (2 нет) → 1 строка.", "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where pri = 'tapuach' and kamut >= 4`\ntapuach: rows 1 and 3.\nOf those, kamut >= 4: row 1 (4 yes), row 3 (2 no) → 1 row."},
        "level": 2,
        "label": "moshe and",
        "kind": "number",
        "text": {
          "he": "כמה שורות תחזיר השאילתה על טבלת shlifot?\n`select * from shlifot where menahel = 'moshe' and iskaot >= 10`",
          "ru": "Сколько строк вернёт запрос на таблице shlifot?\n`select * from shlifot where menahel = 'moshe' and iskaot >= 10`",
          "en": "How many rows does the query return on shlifot?\n`select * from shlifot where menahel = 'moshe' and iskaot >= 10`"
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "קחו את 5 השורות של moshe ובדקו בכל אחת את iskaot.",
            "ru": "Возьми 5 строк moshe и проверь в каждой iskaot.",
            "en": "Take the 5 moshe rows and check iskaot in each."
          },
          {
            "he": "ל־moshe: 9, 9, 400, 55, 104.",
            "ru": "У moshe: 9, 9, 400, 55, 104.",
            "en": "moshe has: 9, 9, 400, 55, 104."
          }
        ],
        "solution": [
          {
            "he": "iskaot של moshe: 9, 9, 400, 55, 104.",
            "ru": "iskaot у moshe: 9, 9, 400, 55, 104.",
            "en": "moshe's iskaot: 9, 9, 400, 55, 104."
          },
          {
            "he": "10 ומעלה: 400 (chalav), 55 (ginot), 104 (rehitim).",
            "ru": "10 и больше: 400 (chalav), 55 (ginot), 104 (rehitim).",
            "en": "10 or more: 400 (chalav), 55 (ginot), 104 (rehitim)."
          },
          {
            "he": "סה״כ 3 שורות.",
            "ru": "Итого 3 строки.",
            "en": "That is 3 rows."
          }
        ]
      },
      {
        "id": "ai-5",
        "example": {"he": "טבלה אחרת `perot (id, pri, kamut)`:\n```\n(1,'tapuach',4)\n(2,'banana',6)\n(3,'tapuach',2)\n(4,'anavim',9)\n(5,'banana',1)\n```\n`select * from perot where pri = 'anavim' or kamut = 1`\n`pri = anavim`: שורה 4.\n`kamut = 1`: שורה 5.\nביחד: שורות 4 ו־5 → 2 שורות.", "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where pri = 'anavim' or kamut = 1`\npri = anavim: строка 4.\nkamut = 1: строка 5.\nВместе: строки 4 и 5 → 2 строки.", "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where pri = 'anavim' or kamut = 1`\npri = anavim: row 4.\nkamut = 1: row 5.\nTogether: rows 4 and 5 → 2 rows."},
        "level": 2,
        "label": "shayish or avi",
        "kind": "number",
        "text": {
          "he": "כמה שורות תחזיר השאילתה?\n`select * from shlifot where chanut = 'shayish' or menahel = 'avi'`",
          "ru": "Сколько строк вернёт запрос?\n`select * from shlifot where chanut = 'shayish' or menahel = 'avi'`",
          "en": "How many rows does the query return?\n`select * from shlifot where chanut = 'shayish' or menahel = 'avi'`"
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "יש 2 שורות shayish ו־2 שורות avi. אולי יש שורה ששייכת לשתי הקבוצות?",
            "ru": "Есть 2 строки shayish и 2 строки avi. Может, какая-то строка входит в обе группы?",
            "en": "There are 2 shayish rows and 2 avi rows. Is any row in both groups?"
          }
        ],
        "solution": [
          {
            "he": "shayish: vered 2 kfar saba (avi), ezra 4 dimona (riki).",
            "ru": "shayish: vered 2 kfar saba (avi), ezra 4 dimona (riki).",
            "en": "shayish: vered 2 kfar saba (avi), ezra 4 dimona (riki)."
          },
          {
            "he": "avi: hazagot, ו־shayish ב־vered 2 kfar saba — שכבר נספרה.",
            "ru": "avi: hazagot и shayish на vered 2 kfar saba — она уже посчитана.",
            "en": "avi: hazagot, and the shayish at vered 2 kfar saba — already counted."
          },
          "2 + 2 − 1 = 3"
        ]
      },
      {
        "id": "ai-6",
        "example": {"he": "טבלה אחרת `perot (id, pri, kamut)`:\n```\n(1,'tapuach',4)\n(2,'banana',6)\n(3,'tapuach',2)\n(4,'anavim',9)\n(5,'banana',1)\n```\n`select * from perot where not pri = 'banana'`\nבסך הכול 5 שורות, banana — שורות 2 ו־5.\n`not` לוקח את כל השאר: `5 − 2 = 3` שורות (1, 3, 4).", "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where not pri = 'banana'`\nВсего 5 строк, banana — строки 2 и 5.\n`not` берёт все остальные: 5 − 2 = 3 строки (1, 3, 4).", "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where not pri = 'banana'`\n5 rows in total, banana is rows 2 and 5.\n`not` takes all the others: 5 − 2 = 3 rows (1, 3, 4)."},
        "level": 2,
        "label": "not rehitim",
        "kind": "number",
        "text": {
          "he": "כמה שורות תחזיר השאילתה?\n`select * from shlifot where not chanut = 'rehitim'`",
          "ru": "Сколько строк вернёт запрос?\n`select * from shlifot where not chanut = 'rehitim'`",
          "en": "How many rows does the query return?\n`select * from shlifot where not chanut = 'rehitim'`"
        },
        "answer": {
          "value": "7"
        },
        "hints": [
          {
            "he": "not הופך את התנאי: כל מה שאינו rehitim.",
            "ru": "not переворачивает условие: всё, что не rehitim.",
            "en": "not flips the condition: everything that is not rehitim."
          },
          {
            "he": "בטבלה 11 שורות, ו־4 מהן rehitim.",
            "ru": "В таблице 11 строк, и 4 из них — rehitim.",
            "en": "The table has 11 rows, 4 of them rehitim."
          }
        ],
        "solution": [
          {
            "he": "כל השורות פחות שורות rehitim:",
            "ru": "Все строки минус строки rehitim:",
            "en": "All rows minus the rehitim rows:"
          },
          "11 − 4 = 7"
        ]
      },
      {
        "id": "ai-7",
        "example": {"he": "טבלה אחרת `perot (id, pri, kamut)`:\n```\n(1,'tapuach',4)\n(2,'banana',6)\n(3,'tapuach',2)\n(4,'anavim',9)\n(5,'banana',1)\n```\n`select * from perot where kamut > 1 and kamut < 6`\nצריך יותר מ־1 וגם פחות מ־6 (1 ו־6 עצמם לא מתאימים).\nkamut: 4 כן, 6 לא, 2 כן, 9 לא, 1 לא → 2 שורות.", "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where kamut > 1 and kamut < 6`\nНужно больше 1 и меньше 6 (сами 1 и 6 не подходят).\nkamut: 4 да, 6 нет, 2 да, 9 нет, 1 нет → 2 строки.", "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\n`select * from perot where kamut > 1 and kamut < 6`\nIt must be more than 1 and less than 6 (1 and 6 themselves do not fit).\nkamut: 4 yes, 6 no, 2 yes, 9 no, 1 no → 2 rows."},
        "level": 2,
        "label": {
          "he": "טווח",
          "ru": "Диапазон",
          "en": "Range"
        },
        "kind": "number",
        "text": {
          "he": "כמה שורות תחזיר השאילתה?\n`select * from shlifot where iskaot > 50 and iskaot < 200`",
          "ru": "Сколько строк вернёт запрос?\n`select * from shlifot where iskaot > 50 and iskaot < 200`",
          "en": "How many rows does the query return?\n`select * from shlifot where iskaot > 50 and iskaot < 200`"
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "צריך מספר שגדול מ־50 וגם קטן מ־200 — \"בין\".",
            "ru": "Нужно число больше 50 и одновременно меньше 200 — «между».",
            "en": "The number must be above 50 and also below 200 — \"between\"."
          },
          {
            "he": "הערכים: 9, 9, 400, 8, 8, 8, 1, 110, 55, 18, 104.",
            "ru": "Значения: 9, 9, 400, 8, 8, 8, 1, 110, 55, 18, 104.",
            "en": "The values: 9, 9, 400, 8, 8, 8, 1, 110, 55, 18, 104."
          }
        ],
        "solution": [
          {
            "he": "מעל 50: 400, 110, 55, 104. מתוכם מתחת ל־200: 110, 55, 104.",
            "ru": "Больше 50: 400, 110, 55, 104. Из них меньше 200: 110, 55, 104.",
            "en": "Above 50: 400, 110, 55, 104. Of those below 200: 110, 55, 104."
          },
          {
            "he": "400 נופל בתנאי השני. סה״כ 3 שורות.",
            "ru": "400 не проходит второе условие. Итого 3 строки.",
            "en": "400 fails the second condition. That is 3 rows."
          }
        ]
      },
      {
        "id": "ai-8",
        "example": {"he": "טבלה אחרת `perot (id, pri, kamut)`:\n```\n(1,'tapuach',4)\n(2,'banana',6)\n(3,'tapuach',2)\n(4,'anavim',9)\n(5,'banana',1)\n```\nצריך: שמות הפירות שה־kamut שלהם יותר מ־3 ופחות מ־9.\n`select pri from perot where kamut > 3 and kamut < 9`\nבודקים לפי שלבים:\nשלב 1. מציגים רק pri, לא `*`.\nשלב 2. צריך את שני התנאים → `and`.\nשלב 3. «יותר» → `>`, לא `>=`.", "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\nНужно: названия фруктов, у которых kamut больше 3 и меньше 9.\n`select pri from perot where kamut > 3 and kamut < 9`\nПроверяем по шагам:\nШаг 1. Показываем только pri, не `*`.\nШаг 2. Нужны оба условия → `and`.\nШаг 3. «Больше» → `>`, не `>=`.", "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\nNeeded: the names of the fruits whose kamut is more than 3 and less than 9.\n`select pri from perot where kamut > 3 and kamut < 9`\nCheck step by step:\nStep 1. Show only pri, not `*`.\nStep 2. Both conditions are needed → `and`.\nStep 3. \"More than\" → `>`, not `>=`."},
        "level": 3,
        "label": {
          "he": "כתבו את השאילתה",
          "ru": "Составь запрос",
          "en": "Build the query"
        },
        "kind": "choice",
        "text": {
          "he": "רוצים את הכתובות של חנויות rehitim שיש להן יותר מ־100 עסקאות. איזו שאילתה?",
          "ru": "Нужны адреса магазинов rehitim, у которых больше 100 сделок. Какой запрос?",
          "en": "You want the addresses of rehitim shops with more than 100 deals. Which query?"
        },
        "options": [
          "`select ktovet from shlifot where chanut = 'rehitim' or iskaot > 100`",
          "`select ktovet from shlifot where chanut = 'rehitim' and iskaot > 100`",
          "`select * from shlifot where chanut = 'rehitim' and iskaot > 100`",
          "`select ktovet from shlifot where chanut = 'rehitim' and iskaot >= 100`"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "שני התנאים חייבים להתקיים יחד — or או and?",
            "ru": "Оба условия должны выполняться вместе — or или and?",
            "en": "Both must hold together — or or and?"
          },
          {
            "he": "\"יותר מ־100\" — האם 100 עצמו נכלל?",
            "ru": "«Больше 100» — входит ли само 100?",
            "en": "\"More than 100\" — is 100 itself included?"
          }
        ],
        "solution": [
          {
            "he": "עמודה: ktovet. שני תנאים יחד → and. \"יותר מ־100\" → `> 100`.",
            "ru": "Столбец: ktovet. Два условия вместе → and. «Больше 100» → `> 100`.",
            "en": "Column: ktovet. Both conditions → and. \"More than 100\" → `> 100`."
          },
          "select ktovet from shlifot where chanut = 'rehitim' and iskaot > 100",
          {
            "he": "התוצאה: iris 44 kfar saba, golda meir 89 chadera.",
            "ru": "Результат: iris 44 kfar saba, golda meir 89 chadera.",
            "en": "Result: iris 44 kfar saba, golda meir 89 chadera."
          }
        ]
      },
      {
        "id": "ai-9",
        "example": {"he": "השורה `(3,'tapuach',2)` והתנאי `where kamut >= 4 or pri = 'tapuach'`.\nתנאי 1: `2 >= 4` → שקר.\nתנאי 2: `tapuach = tapuach` → אמת.\n`or`: מספיק תנאי אמת אחד → השורה תופיע.", "ru": "Строка `(3,'tapuach',2)` и условие `where kamut >= 4 or pri = 'tapuach'`.\nУсловие 1: 2 >= 4 → ложно.\nУсловие 2: tapuach = tapuach → истинно.\n`or`: хватает одного истинного → строка попадёт.", "en": "The row `(3,'tapuach',2)` and the condition `where kamut >= 4 or pri = 'tapuach'`.\nCondition 1: 2 >= 4 → false.\nCondition 2: tapuach = tapuach → true.\n`or`: one true condition is enough → the row is in."},
        "level": 3,
        "label": {
          "he": "שורה אחת",
          "ru": "Одна строка",
          "en": "One row"
        },
        "kind": "choice",
        "text": {
          "he": "השורה `('sfarim', 'herzl 55 holon', 'c.yahoo.com', 8, 'shimon')` — האם היא תופיע בתוצאה של `where iskaot >= 10 or chanut = 'rehitim'`?",
          "ru": "Строка ('sfarim', 'herzl 55 holon', 'c.yahoo.com', 8, 'shimon') — попадёт ли она в результат `where iskaot >= 10 or chanut = 'rehitim'`?",
          "en": "Will the row ('sfarim', 'herzl 55 holon', 'c.yahoo.com', 8, 'shimon') appear in the result of `where iskaot >= 10 or chanut = 'rehitim'`?"
        },
        "options": [
          {
            "he": "כן",
            "ru": "Да",
            "en": "Yes"
          },
          {
            "he": "לא",
            "ru": "Нет",
            "en": "No"
          }
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "בדקו כל תנאי לבד: 8 ≥ 10? sfarim = rehitim?",
            "ru": "Проверь каждое условие: 8 ≥ 10? sfarim = rehitim?",
            "en": "Check each condition: 8 ≥ 10? sfarim = rehitim?"
          }
        ],
        "solution": [
          "8 >= 10  →  false",
          "'sfarim' = 'rehitim'  →  false",
          "false or false = false",
          {
            "he": "השורה לא תופיע.",
            "ru": "Строка не попадёт.",
            "en": "The row will not appear."
          }
        ]
      },
      {
        "id": "ai-10",
        "example": {"he": "עמודה «שם הקליפ»: טקסט, בדרך כלל עד 50 תווים → `nvarchar(50)`.\nאת האורך n בוחרים לפי הטקסט הכי ארוך שיכול להיות בעמודה.\nתחשוב: קישור הוא קצר או ארוך?", "ru": "Столбец «название клипа»: текст, обычно до 50 символов → `nvarchar(50)`.\nДлину n выбирают по самому длинному тексту, который может быть в столбце.\nПодумай: ссылка короткая или длинная?", "en": "A \"clip name\" column: text, usually up to 50 characters → `nvarchar(50)`.\nThe length n is chosen by the longest text the column may hold.\nThink: is a link short or long?"},
        "level": 2,
        "label": {
          "he": "סוג ללינק",
          "ru": "Тип для ссылки",
          "en": "Type for the link"
        },
        "kind": "choice",
        "text": {
          "he": "בטבלת הקטעים, איזה סוג מתאים לעמודת הלינק?",
          "ru": "В таблице клипов какой тип подходит для столбца ссылки?",
          "en": "In the clips table, which type fits the link column?"
        },
        "options": [
          "`int`",
          "`nvarchar(10)`",
          "`nvarchar(200)`",
          "`int(200)`"
        ],
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "לינק הוא טקסט, לא מספר.",
            "ru": "Ссылка — текст, а не число.",
            "en": "A link is text, not a number."
          },
          {
            "he": "כתובת של סרטון היא בדרך כלל יותר מ־10 תווים.",
            "ru": "Адрес видео обычно длиннее 10 символов.",
            "en": "A video address is usually longer than 10 characters."
          }
        ],
        "solution": [
          {
            "he": "טקסט → nvarchar. לינקים ארוכים → מקסימום גדול, למשל 200.",
            "ru": "Текст → nvarchar. Ссылки длинные → большой максимум, например 200.",
            "en": "Text → nvarchar. Links are long → a big maximum, e.g. 200."
          },
          "link nvarchar(200)"
        ]
      },
      {
        "id": "ai-11",
        "example": {"he": "נתונים אחרים, 4 קליפים (seconds, likes):\nקליפ 1: 120, 0 · קליפ 2: 75, 2500 · קליפ 3: 200, 1300 · קליפ 4: 30, 0.\n`where likes = 0 or seconds < 60`:\nקליפ 1: `likes = 0` → כן.\nקליפ 2: לא ולא → לא.\nקליפ 3: לא ולא → לא.\nקליפ 4: `likes = 0` → כן.\nסך הכול 2 שורות.", "ru": "Другие данные, 4 клипа (seconds, likes):\nклип 1: 120, 0 · клип 2: 75, 2500 · клип 3: 200, 1300 · клип 4: 30, 0.\n`where likes = 0 or seconds < 60`:\nклип 1: likes = 0 → да.\nклип 2: нет и нет → нет.\nклип 3: нет и нет → нет.\nклип 4: likes = 0 → да.\nИтого 2 строки.", "en": "Other data, 4 clips (seconds, likes):\nclip 1: 120, 0 · clip 2: 75, 2500 · clip 3: 200, 1300 · clip 4: 30, 0.\n`where likes = 0 or seconds < 60`:\nclip 1: likes = 0 → yes.\nclip 2: no and no → no.\nclip 3: no and no → no.\nclip 4: likes = 0 → yes.\nTotal 2 rows."},
        "level": 3,
        "label": {
          "he": "קטעים",
          "ru": "Клипы",
          "en": "Clips"
        },
        "kind": "number",
        "text": {
          "he": "בטבלה clips יש 4 שורות (seconds, likes):\nקטע 1: 95, 5400 · קטע 2: 34, 0 · קטע 3: 210, 0 · קטע 4: 47, 3100.\nכמה שורות תחזיר `select * from clips where likes = 0 or seconds < 60`?",
          "ru": "В таблице clips 4 строки (seconds, likes):\nклип 1: 95, 5400 · клип 2: 34, 0 · клип 3: 210, 0 · клип 4: 47, 3100.\nСколько строк вернёт `select * from clips where likes = 0 or seconds < 60`?",
          "en": "The clips table has 4 rows (seconds, likes):\nclip 1: 95, 5400 · clip 2: 34, 0 · clip 3: 210, 0 · clip 4: 47, 3100.\nHow many rows does `select * from clips where likes = 0 or seconds < 60` return?"
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "עברו על כל קטע ובדקו: אין לייקים? או קצר מ־60 שניות?",
            "ru": "Пройди по каждому клипу: нет лайков? или короче 60 секунд?",
            "en": "Go through each clip: no likes? or shorter than 60 seconds?"
          }
        ],
        "solution": [
          {
            "he": "קטע 1: 5400 ≠ 0, 95 ≥ 60 → לא.",
            "ru": "Клип 1: 5400 ≠ 0, 95 ≥ 60 → нет.",
            "en": "Clip 1: 5400 ≠ 0, 95 ≥ 60 → no."
          },
          {
            "he": "קטע 2: 0 לייקים → כן. קטע 3: 0 לייקים → כן. קטע 4: 47 < 60 → כן.",
            "ru": "Клип 2: 0 лайков → да. Клип 3: 0 лайков → да. Клип 4: 47 < 60 → да.",
            "en": "Clip 2: 0 likes → yes. Clip 3: 0 likes → yes. Clip 4: 47 < 60 → yes."
          },
          {
            "he": "סה״כ 3 שורות.",
            "ru": "Итого 3 строки.",
            "en": "That is 3 rows."
          }
        ]
      },
      {
        "id": "ai-12",
        "example": {"he": "טבלה אחרת `perot (id, pri, kamut)`:\n```\n(1,'tapuach',4)\n(2,'banana',6)\n(3,'tapuach',2)\n(4,'anavim',9)\n(5,'banana',1)\n```\nצריך: רק kamut של הפירות tapuach שה־kamut שלהם פחות מ־3.\n`select kamut from perot where pri = 'tapuach' and kamut < 3`\ntapuach: שורות 1 (4) ו־3 (2). פחות מ־3 רק 2 → שורה אחת.", "ru": "Другая таблица, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\nНужно: только kamut у фруктов tapuach, у которых kamut меньше 3.\n`select kamut from perot where pri = 'tapuach' and kamut < 3`\ntapuach: строки 1 (4) и 3 (2). Меньше 3 только 2 → 1 строка.", "en": "Another table, perot (id, pri, kamut): (1,'tapuach',4), (2,'banana',6), (3,'tapuach',2), (4,'anavim',9), (5,'banana',1).\nNeeded: only kamut of the tapuach fruits whose kamut is less than 3.\n`select kamut from perot where pri = 'tapuach' and kamut < 3`\ntapuach: rows 1 (4) and 3 (2). Only 2 is less than 3 → 1 row."},
        "level": 3,
        "label": {
          "he": "and עם <",
          "ru": "and с <",
          "en": "and with <"
        },
        "kind": "number",
        "text": {
          "he": "כתבו שאילתה שמציגה רק את שדה העסקאות (iskaot) של חנויות rehitim שיש להן פחות מ־10 עסקאות. הריצו אותה על טבלת shlifot — כמה שורות היא תחזיר?",
          "ru": "Напиши запрос, который показывает только поле сделок (iskaot) у магазинов rehitim, у которых меньше 10 сделок. Выполни его на таблице shlifot — сколько строк он вернёт?",
          "en": "Write a query that shows only the deals field (iskaot) of rehitim shops that have fewer than 10 deals. Run it on the shlifot table — how many rows does it return?"
        },
        "answer": {
          "value": "2"
        },
        "hints": [
          {
            "he": "את העמודה כותבים אחרי `select`, ואת התנאים אחרי `where`. שני התנאים צריכים להתקיים יחד — במה מחברים אותם?",
            "ru": "Столбец пишем после `select`, условия — после `where`. Оба условия должны выполняться вместе — чем их соединить?",
            "en": "The column goes after `select`, the conditions after `where`. Both must hold together — what joins them?"
          },
          "select iskaot from shlifot where chanut = 'rehitim' and iskaot < 10"
        ],
        "solution": [
          "select iskaot from shlifot where chanut = 'rehitim' and iskaot < 10",
          {
            "he": "ל־rehitim יש iskaot: 9, 9, 110, 104. רק 9 ו־9 קטנים מ־10.",
            "ru": "У rehitim iskaot: 9, 9, 110, 104. Меньше 10 только 9 и 9.",
            "en": "rehitim has iskaot: 9, 9, 110, 104. Only 9 and 9 are below 10."
          },
          {
            "he": "השאילתה מחזירה 2 שורות.",
            "ru": "Запрос возвращает 2 строки.",
            "en": "The query returns 2 rows."
          }
        ]
      },
      {
        "id": "ai-13",
        "example": {"he": "קוד מדינה הוא תמיד 2 אותיות (`IL`, `RU`) → מתאים `char(2)`: האורך תמיד אותו דבר.\nומה אם אורך הטקסט משתנה (שם, כתובת)? תיזכר איזה טיפוס לא מבזבז מקום מיותר.", "ru": "Код страны всегда 2 буквы (`IL`, `RU`) → подходит `char(2)`: длина всегда одна и та же.\nА если длина текста разная (имя, адрес)? Вспомни, какой тип не тратит лишнее место.", "en": "A country code is always 2 letters (`IL`, `RU`) → `char(2)` fits: the length is always the same.\nAnd if the text length varies (name, address)? Recall which type wastes no extra space."},
        "level": 1,
        "label": {
          "he": "varchar",
          "ru": "varchar",
          "en": "varchar"
        },
        "kind": "choice",
        "text": {
          "he": "איזה סוג תופס רק כמה מקום שהטקסט צריך (עד הגבול שכתבנו)?",
          "ru": "Какой тип занимает только столько места, сколько нужно тексту (до заданного предела)?",
          "en": "Which type takes only as much space as the text needs (up to the limit we set)?"
        },
        "options": [
          "char(20)",
          "varchar(20)",
          "int"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "אחד מהם תמיד תופס את כל 20 התווים.",
            "ru": "Один из них всегда занимает все 20 символов.",
            "en": "One of them always takes all 20 characters."
          }
        ],
        "solution": [
          {
            "he": "`char(20)` תמיד תופס 20 תווים.",
            "ru": "`char(20)` всегда занимает 20 символов.",
            "en": "`char(20)` always takes 20 characters."
          },
          {
            "he": "`varchar(20)` דינמי — רק כמה שצריך. התשובה: `varchar(20)`.",
            "ru": "`varchar(20)` динамический — только сколько нужно. Ответ: `varchar(20)`.",
            "en": "`varchar(20)` is dynamic — only what it needs. Answer: `varchar(20)`."
          }
        ]
      },
      {
        "id": "ai-14",
        "example": {"he": "אמת = 1, שקר = 0.\n`1 and 1 = 1` (שניהם אמת).\n`0 or 1 = 1` (עם `or` מספיק אחד).\nעכשיו בעצמך: `and` עם תנאי שקר אחד.", "ru": "Истина = 1, ложь = 0.\n`1 and 1` = 1 (оба истинны).\n`0 or 1` = 1 (с `or` хватает одного).\nТеперь сам: `and` с одним ложным условием.", "en": "True = 1, false = 0.\n`1 and 1` = 1 (both are true).\n`0 or 1` = 1 (with `or` one is enough).\nNow yourself: `and` with one false condition."},
        "level": 2,
        "label": {
          "he": "1 ו־0",
          "ru": "1 и 0",
          "en": "1 and 0"
        },
        "kind": "number",
        "text": {
          "he": "אמת = 1, שקר = 0. התנאי הראשון אמת, השני שקר. מה יוצא ב־`and`? (1 או 0)",
          "ru": "Истина = 1, ложь = 0. Первое условие истинно, второе ложно. Что получится с `and`? (1 или 0)",
          "en": "True = 1, false = 0. The first condition is true, the second false. What does `and` give? (1 or 0)"
        },
        "answer": {
          "value": "0"
        },
        "hints": [
          {
            "he": "`and` עובד כמו כפל.",
            "ru": "`and` работает как умножение.",
            "en": "`and` works like multiplication."
          }
        ],
        "solution": [
          "1 × 0 = 0",
          {
            "he": "התשובה: 0 — שקר. ב־`and` צריך ששני התנאים יהיו אמת.",
            "ru": "Ответ: 0 — ложь. Для `and` нужно, чтобы оба условия были истинны.",
            "en": "Answer: 0 — false. `and` needs both conditions to be true."
          }
        ]
      }
    ]
  }
};

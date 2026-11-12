/* Lesson data — format: see the comment at the top of data/lessons/math-2026-11-01.js.
   Every answer and every perot example in this file was checked by running the SQL in sqlite3
   (the commands used here behave the same in SQL Server). */
window.LESSONS = window.LESSONS || {};
window.LESSONS["sql-2026-11-12"] = {
  "id": "sql-2026-11-12",
  "subject": "sql",
  "date": "2026-11-12",
  "title": {
    "he": "update ו־delete, ותרגיל מסד נתונים של רכבים",
    "ru": "update и delete, и упражнение: база данных машин",
    "en": "update and delete, and a car database exercise"
  },
  "summary": {
    "he": "הטבלה idkunim: הכנסת 10 שורות בפקודה אחת, `update` עם ערך שמחושב מהישן (`zahov = zahov * 2`), `delete`, ומה קורה בלי `where`. ותרגיל: מסד targil עם טבלת רכבים, עמודה חדשה ועדכון גרמניה לטורקיה. בסוף: `alter table` (להוסיף ולמחוק עמודה), `*=`, ואיך תיראה הבדיקה בסוף הקורס.",
    "ru": "Таблица idkunim: 10 строк одной командой, `update` со значением из старого (`zahov = zahov * 2`), `delete` и что будет без `where`. И упражнение: база targil с таблицей машин, новый столбец и замена Германии на Турцию. В конце: `alter table` (добавить и убрать столбец), `*=` и какой будет проверка в конце курса.",
    "en": "The idkunim table: 10 rows in one command, `update` with a value computed from the old one (`zahov = zahov * 2`), `delete`, and what happens without `where`. And an exercise: the targil database with a car table, a new column and changing Germany to Turkey. At the end: `alter table` (add and remove a column), `*=`, and what the end-of-course test will look like."
  },
  "timeline": [
    {
      "kind": "talk",
      "title": {
        "he": "משנים נתונים שכבר בטבלה: update ו־delete",
        "ru": "Меняем данные, которые уже в таблице: update и delete",
        "en": "Changing data already in the table: update and delete"
      },
      "text": {
        "he": "עד עכשיו יצרנו טבלאות (`create table`), הכנסנו שורות (`insert`) ושלפנו (`select`). היום שתי פקודות חדשות:\n• `update` — משנה ערכים בשורות שכבר קיימות.\n• `delete` — מוחקת שורות.\nבשתיהן `where` בוחר באילו שורות לגעת, בדיוק כמו ב־`select`.",
        "ru": "До сих пор мы создавали таблицы (`create table`), добавляли строки (`insert`) и выбирали (`select`). Сегодня две новые команды:\n• `update` — меняет значения в уже существующих строках.\n• `delete` — удаляет строки.\nВ обеих `where` выбирает, какие строки трогать, точно как в `select`.",
        "en": "So far we created tables (`create table`), added rows (`insert`) and queried (`select`). Today two new commands:\n• `update` — changes values in rows that already exist.\n• `delete` — removes rows.\nIn both, `where` chooses which rows to touch, exactly like in `select`."
      },
      "why": {
        "he": "למה לא פשוט למחוק ולהכניס מחדש? כי בטבלה אמיתית יש אלפי שורות. `update` משנה רק את מה שצריך, ומשאיר את כל השאר כמו שהוא.",
        "ru": "Почему не удалить и не вставить заново? В настоящей таблице тысячи строк. `update` меняет только нужное и оставляет всё остальное как было.",
        "en": "Why not just delete and insert again? A real table has thousands of rows. `update` changes only what is needed and leaves everything else as it was."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "הטבלה idkunim",
        "ru": "Таблица idkunim",
        "en": "The idkunim table"
      },
      "text": {
        "he": "מסד הנתונים \"example 5-idkunim\": טבלה של שחקנים עם העמודות `prati` (שם פרטי), `mishpaha` (שם משפחה), `eretz` (ארץ), `club` (קבוצה), `zahov` (כרטיסים צהובים) ו־`bonus`. 10 שורות נכנסו בפקודת `insert` אחת: כל שורה בסוגריים, ופסיק בין השורות.",
        "ru": "База «example 5-idkunim»: таблица игроков со столбцами `prati` (имя), `mishpaha` (фамилия), `eretz` (страна), `club` (клуб), `zahov` (жёлтые карточки) и `bonus`. 10 строк добавили одной командой `insert`: каждая строка в скобках, между строками запятая.",
        "en": "The database \"example 5-idkunim\": a table of players with the columns `prati` (first name), `mishpaha` (family name), `eretz` (country), `club`, `zahov` (yellow cards) and `bonus`. 10 rows went in with one `insert` command: each row in brackets, a comma between rows."
      },
      "math": [
        "insert into idkunim values",
        "('lev', 'deri', 'argentina', 'liverpool', 10, 6),",
        "('asaf', 'cohen', 'argentina', 'arsenal', 0, 0),",
        "('nati', 'hareven', 'spain', 'ajax', 0, 9),",
        "('yair', 'deri', 'argentina', 'liverpool', 12, 0),",
        "('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8),",
        "('assi', 'yacobi', 'germany', 'juventus', 8, 19),",
        "('uzi', 'deri', 'argentina', 'liverpool', 2, 10),",
        "('roi', 'levi', 'germany', 'ajax', 8, 0),",
        "('yair', 'lerner', 'germany', 'arsenal', 18, 6),",
        "('avi', 'levi', 'germany', 'liverpool', 4, 4)"
      ],
      "why": {
        "he": "למה פקודת `insert` אחת ל־10 שורות? זה קצר יותר ורץ מהר יותר מ־10 פקודות נפרדות. שימו לב: פסיק בין השורות, ובסוף אין פסיק.",
        "ru": "Зачем одна команда `insert` на 10 строк? Это короче и быстрее, чем 10 отдельных команд. Внимание: запятая между строками, а в конце запятой нет.",
        "en": "Why one `insert` for 10 rows? It is shorter and runs faster than 10 separate commands. Note: a comma between rows, and no comma at the end."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "update: להכפיל את הצהובים של yair",
        "ru": "update: удвоить жёлтые карточки у yair",
        "en": "update: double yair's yellow cards"
      },
      "text": {
        "he": "`set zahov = zahov * 2` — הערך החדש מחושב מהערך הישן: לוקחים את מה שיש ומכפילים ב־2. `where prati = 'yair'` — רק בשורות של yair. יש שני yair (deri ו־lerner), ולכן משתנות 2 שורות: `12 → 24` ו־`18 → 36`.",
        "ru": "`set zahov = zahov * 2` — новое значение считается из старого: берём то, что есть, и умножаем на 2. `where prati = 'yair'` — только в строках yair. Их двое (deri и lerner), поэтому меняются 2 строки: `12 → 24` и `18 → 36`.",
        "en": "`set zahov = zahov * 2` — the new value is computed from the old one: take what is there and multiply by 2. `where prati = 'yair'` — only in yair's rows. There are two yairs (deri and lerner), so 2 rows change: `12 → 24` and `18 → 36`."
      },
      "math": [
        "update idkunim",
        "set zahov = zahov * 2",
        "where prati = 'yair'",
        "select * from idkunim"
      ],
      "why": {
        "he": "אחרי כל `update` או `delete` מריצים `select * from idkunim` כדי לראות מה באמת השתנה. בשיעור כך עשו אחרי כל פקודה.",
        "ru": "После каждого `update` или `delete` запускают `select * from idkunim`, чтобы увидеть, что на самом деле изменилось. На уроке так делали после каждой команды.",
        "en": "After every `update` or `delete` run `select * from idkunim` to see what really changed. In class this was done after every command."
      }
    },
    {
      "kind": "tip",
      "title": {
        "he": "בלי where — כל השורות!",
        "ru": "Без where — все строки!",
        "en": "Without where — all rows!"
      },
      "text": {
        "he": "אם שוכחים את `where`, הפקודה עובדת על כל הטבלה: `update idkunim set zahov = 0` מאפס את הצהובים של כל 10 השחקנים, ו־`delete from idkunim` מוחק את כל השורות. אין כפתור \"בטל\". לכן קודם כותבים את ה־`where`, ורק אז מריצים.",
        "ru": "Если забыть `where`, команда сработает на всей таблице: `update idkunim set zahov = 0` обнулит жёлтые карточки у всех 10 игроков, а `delete from idkunim` удалит все строки. Кнопки «отменить» нет. Поэтому сначала пишем `where`, и только потом запускаем.",
        "en": "If you forget `where`, the command works on the whole table: `update idkunim set zahov = 0` resets the yellow cards of all 10 players, and `delete from idkunim` deletes every row. There is no \"undo\" button. So write the `where` first, and only then run it."
      },
      "math": [
        "update idkunim set zahov = 0              -- all 10 rows",
        "update idkunim set zahov = 0 where prati = 'avi'   -- 1 row"
      ],
      "why": {
        "he": "איך לא לטעות? טריק: קודם כותבים `select * from idkunim where …` עם אותו תנאי, ורואים אילו שורות חוזרות. רק אחר כך מחליפים את `select *` ב־`update … set` או ב־`delete`.",
        "ru": "Как не ошибиться? Приём: сначала пишешь `select * from idkunim where …` с тем же условием и смотришь, какие строки вернулись. Только потом меняешь `select *` на `update … set` или `delete`.",
        "en": "How not to make a mistake? A trick: first write `select * from idkunim where …` with the same condition and see which rows come back. Only then replace `select *` with `update … set` or `delete`."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "delete ו־insert",
        "ru": "delete и insert",
        "en": "delete and insert"
      },
      "text": {
        "he": "\n```\ndelete from idkunim where prati = 'yair'\n```\n מוחק את שתי השורות של yair (ולכן גם ההכפלה מקודם כבר לא רואים). אחרי זה נכנסה שורה חדשה עם `insert`. נשארו 9 שורות.",
        "ru": "`delete from idkunim where prati = 'yair'` удаляет обе строки yair (поэтому и удвоения, сделанного раньше, уже не видно). После этого добавили новую строку через `insert`. Осталось 9 строк.",
        "en": "`delete from idkunim where prati = 'yair'` deletes both of yair's rows (so the doubling from before is no longer visible). After that a new row went in with `insert`. 9 rows are left."
      },
      "math": [
        "delete from idkunim where prati = 'yair'",
        "select * from idkunim",
        "",
        "insert into idkunim values ('etti', 'senyor', 'israel', 'macabbi', 2, 100)",
        "select * from idkunim"
      ],
      "why": {
        "he": "מה ההבדל בין `delete` ל\"לשים 0\"? `delete` מוחק את כל השורה, עם כל העמודות. `update … set zahov = 0` משאיר את השחקן בטבלה ומשנה רק עמודה אחת.",
        "ru": "В чём разница между `delete` и «поставить 0»? `delete` удаляет всю строку со всеми столбцами. `update … set zahov = 0` оставляет игрока в таблице и меняет только один столбец.",
        "en": "What is the difference between `delete` and \"setting 0\"? `delete` removes the whole row with all its columns. `update … set zahov = 0` keeps the player in the table and changes one column only."
      }
    },
    {
      "kind": "tip",
      "title": {
        "he": "השורה החדשה לא תמיד בסוף",
        "ru": "Новая строка не всегда в конце",
        "en": "The new row is not always at the end"
      },
      "text": {
        "he": "במסך אחרי ה־`insert`, השורה של etti הופיעה במקום הרביעי ולא בסוף: SQL Server שם אותה במקום שהתפנה אחרי ה־`delete`. בלי `order by` לא מובטח שום סדר של שורות.\nעוד דבר מהמסך: בטבלה הסופית spain כבר כתוב sfarad, ויש עוד שינויים. כלומר הורצו עוד פקודות `update`, שהטקסט שלהן לא רואים בצילום.",
        "ru": "На экране после `insert` строка etti оказалась на 4-м месте, а не в конце: SQL Server поставил её на место, освободившееся после `delete`. Без `order by` никакой порядок строк не гарантирован.\nЕщё с экрана: в итоговой таблице вместо spain уже написано sfarad, и есть другие изменения. Значит, запускали ещё команды `update`, текста которых на снимке не видно.",
        "en": "On screen after the `insert`, etti's row appeared in 4th place, not at the end: SQL Server put it in the spot freed by the `delete`. Without `order by` no row order is guaranteed.\nAlso from the screen: in the final table spain already reads sfarad, and there are other changes. So more `update` commands were run, whose text is not visible in the photo."
      },
      "why": {
        "he": "למה זה חשוב? אם צריך סדר (לפי שם, לפי צהובים), כותבים `order by` — את זה למדנו ב־05.11. בלי זה אסור לסמוך על \"השורה האחרונה\".",
        "ru": "Почему это важно? Если нужен порядок (по имени, по жёлтым карточкам), пишут `order by` — это проходили 05.11. Без него нельзя рассчитывать на «последнюю строку».",
        "en": "Why does it matter? If you need an order (by name, by yellow cards), write `order by` — we learned it on 05.11. Without it you cannot rely on \"the last row\"."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "תרגיל: מסד נתונים של רכבים",
        "ru": "Упражнение: база данных машин",
        "en": "Exercise: a car database"
      },
      "text": {
        "he": "התרגיל מהלוח:\n1. לבנות מסד נתונים בשם targil.\n2. לבנות טבלה עם השדות: מספר רכב, שם רכב, שנת ייצור, יצרן. לחשוב איזה טיפוס לכל שדה.\n3. להכניס 3 שורות נתונים.\n4. להריץ שאילתה כללית.\n5. להריץ שאילתה של שם רכב ויצרן.\n6. להציג את כל הרכבים משנת 2025.\nהמשך: להוסיף עמודה \"ארץ ייצור\", להשלים לה נתונים, ולעדכן בכל הרשומות שבהן הארץ גרמניה — לטורקיה.",
        "ru": "Упражнение с доски:\n1. Создать базу данных targil.\n2. Создать таблицу с полями: номер машины, название машины, год выпуска, производитель. Подумать, какой тип у каждого поля.\n3. Добавить 3 строки данных.\n4. Запустить общий запрос.\n5. Запустить запрос на название машины и производителя.\n6. Показать все машины 2025 года.\nПродолжение: добавить столбец «страна производства», заполнить его, и во всех записях, где страна Германия, поменять её на Турцию.",
        "en": "The exercise from the board:\n1. Create a database named targil.\n2. Create a table with the fields: car number, car name, year of manufacture, manufacturer. Think which type each field gets.\n3. Insert 3 rows of data.\n4. Run a general query.\n5. Run a query on car name and manufacturer.\n6. Show all cars from 2025.\nContinuation: add a column \"country of manufacture\", fill it in, and in all records where the country is Germany change it to Turkey."
      },
      "why": {
        "he": "עמודה חדשה אפשר להוסיף עם העכבר ב־Design של הטבלה (כמו ב־05.11), או בקוד: \n```\nalter table שם_הטבלה add שם_העמודה nvarchar(20)\n```\n — את הפקודה הזאת הראו בסוף השיעור (בשלב הבא). אחרי ההוספה העמודה ריקה (NULL) בכל השורות, ולכן ממלאים אותה עם `update`.",
        "ru": "Новый столбец можно добавить мышкой в Design таблицы (как 05.11) или кодом: `alter table имя_таблицы add имя_столбца nvarchar(20)` — эту команду показали в конце урока (следующий шаг). После добавления столбец пустой (NULL) во всех строках, поэтому его заполняют через `update`.",
        "en": "A new column can be added with the mouse in the table's Design (like on 05.11) or in code: `alter table table_name add column_name nvarchar(20)` — this command was shown at the end of the lesson (next step). After adding it, the column is empty (NULL) in every row, so you fill it with `update`."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "בסוף השיעור: alter table — להוסיף ולמחוק עמודה",
        "ru": "В конце урока: alter table — добавить и убрать столбец",
        "en": "At the end of the lesson: alter table — add and remove a column"
      },
      "text": {
        "he": "`alter table` משנה את המבנה של הטבלה, לא את הנתונים:\n• `add` — מוסיף עמודה חדשה. בכל השורות היא ריקה (NULL), עד שממלאים אותה עם `update`.\n• `drop column` — מוחק עמודה, יחד עם כל הנתונים שבה.\nבשיעור הוסיפו עמודה ומחקו אותה, ואחר כך הוסיפו את `salary` ומילאו 100 לכולם:",
        "ru": "`alter table` меняет устройство таблицы, а не данные:\n• `add` — добавляет новый столбец. Во всех строках он пустой (NULL), пока не заполнишь его через `update`.\n• `drop column` — удаляет столбец вместе со всеми данными в нём.\nНа уроке добавили столбец и удалили его, а потом добавили `salary` и всем заполнили 100:",
        "en": "`alter table` changes the table's structure, not the data:\n• `add` — adds a new column. It is empty (NULL) in every row until you fill it with `update`.\n• `drop column` — removes a column together with all its data.\nIn class a column was added and removed, then `salary` was added and filled with 100 for everyone:"
      },
      "math": [
        "alter table idkunim add adom int",
        "alter table idkunim drop column adom",
        "",
        "alter table idkunim add salary int",
        "update idkunim set salary = 100"
      ],
      "why": {
        "he": "איך לזכור מי עושה מה? `insert` מוסיף שורות, `alter table … add` מוסיף עמודות, `update` משנה ערכים בתוך התאים, `delete` מוחק שורות, `drop column` מוחק עמודה. ולמה אחרי `add` צריך `update`? כי SQL לא יודע מה לשים בעמודה החדשה, ולכן משאיר NULL (\"אין ערך\").",
        "ru": "Как запомнить, кто что делает? `insert` добавляет строки, `alter table … add` добавляет столбцы, `update` меняет значения в ячейках, `delete` удаляет строки, `drop column` удаляет столбец. А зачем после `add` нужен `update`? SQL не знает, что положить в новый столбец, поэтому оставляет NULL («нет значения»).",
        "en": "How to remember who does what? `insert` adds rows, `alter table … add` adds columns, `update` changes values inside cells, `delete` removes rows, `drop column` removes a column. And why is `update` needed after `add`? SQL does not know what to put in the new column, so it leaves NULL (\"no value\")."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "`*=` ובונוס של 10000",
        "ru": "`*=` и бонус 10000",
        "en": "`*=` and a 10000 bonus"
      },
      "text": {
        "he": "עוד פקודות מסוף השיעור:\n• `zahov *= 2` — כתיבה קצרה של `zahov = zahov * 2` (כמו ב־Java).\n• `bonus = +10000` — שם בבונוס בדיוק 10000 (הפלוס הוא רק סימן של מספר חיובי), לכל מי שיש לו יותר מ־10 צהובים.\n• ואז `delete` מוחק את כל מי שהבונוס שלו 10000 ומעלה.",
        "ru": "Ещё команды из конца урока:\n• `zahov *= 2` — короткая запись `zahov = zahov * 2` (как в Java).\n• `bonus = +10000` — ставит в бонус ровно 10000 (плюс — просто знак положительного числа) всем, у кого больше 10 жёлтых карточек.\n• Потом `delete` удаляет всех, у кого бонус 10000 и больше.",
        "en": "More commands from the end of the lesson:\n• `zahov *= 2` — short for `zahov = zahov * 2` (like in Java).\n• `bonus = +10000` — sets the bonus to exactly 10000 (the plus is just the sign of a positive number) for everyone with more than 10 yellow cards.\n• Then `delete` removes everyone whose bonus is 10000 or more."
      },
      "math": [
        "update idkunim set zahov *= 2 where prati = 'yair'",
        "update idkunim set bonus = +10000 where zahov > 10",
        "delete from idkunim where bonus >= 10000"
      ],
      "why": {
        "he": "מלכודת: `bonus = +10000` הוא לא \"להוסיף 10000\"! הוא מחליף את מה שהיה. להוסיף זה `bonus = bonus + 10000` או `bonus += 10000`. ועוד: `zahov > 10` לא כולל את 10 עצמו — ל־lev יש בדיוק 10, והוא לא מקבל בונוס.",
        "ru": "Ловушка: `bonus = +10000` — это не «прибавить 10000»! Оно заменяет то, что было. Прибавить — это `bonus = bonus + 10000` или `bonus += 10000`. И ещё: `zahov > 10` не включает само 10 — у lev ровно 10, и бонус он не получает.",
        "en": "A trap: `bonus = +10000` is not \"add 10000\"! It replaces what was there. Adding is `bonus = bonus + 10000` or `bonus += 10000`. Also: `zahov > 10` does not include 10 itself — lev has exactly 10 and gets no bonus."
      }
    },
    {
      "kind": "tip",
      "title": {
        "he": "איך תיראה הבדיקה בסוף הקורס",
        "ru": "Какой будет проверка в конце курса",
        "en": "What the end-of-course test will look like"
      },
      "text": {
        "he": "המרצה סיפרה: בסוף הקורס הבדיקה תהיה בכתב, על כל הפקודות שנלמד עד אז. צריך יהיה ליצור טבלה ולהכניס לה כמה שורות נתונים (בערך שלוש — \"לא יותר מדי שורות\"). התאריך עוד לא נאמר. העצה שלה: להקדיש לזה כמה שעות בסוף השבוע.",
        "ru": "Преподавательница рассказала: в конце курса проверка будет письменной, по всем командам, которые пройдём до тех пор. Нужно будет создать таблицу и вставить в неё несколько строк данных (около трёх — «не слишком много строк»). Дату пока не назвали. Её совет: посвятить этому несколько часов на выходных.",
        "en": "The teacher said: at the end of the course the test will be in writing, on all the commands we learn by then. You will need to create a table and insert a few rows of data into it (about three — \"not too many rows\"). The date has not been given yet. Her advice: spend a few hours on it over the weekend."
      },
      "why": {
        "he": "למה בכתב זה קשה יותר? אין SSMS שיסמן שגיאה באדום. צריך לזכור לבד: פסיקים בין העמודות, גרשיים סביב טקסט (`'lev'`), בלי גרשיים סביב מספרים, ופסיק בין השורות ב־`insert`. התרגול הכי טוב: לכתוב `create table` ו־`insert` על דף, ורק אחר כך להריץ ולבדוק.",
        "ru": "Почему письменно труднее? Нет SSMS, который подчеркнёт ошибку красным. Нужно помнить самому: запятые между столбцами, кавычки вокруг текста (`'lev'`), без кавычек вокруг чисел и запятая между строками в `insert`. Лучшая тренировка: написать `create table` и `insert` на листке, и только потом запустить и проверить.",
        "en": "Why is writing it harder? There is no SSMS to underline a mistake in red. You must remember yourself: commas between columns, quotes around text (`'lev'`), no quotes around numbers, and a comma between rows in `insert`. The best practice: write `create table` and `insert` on paper, and only then run it and check."
      }
    }
  ],
  "review": [
    {
      "title": {
        "he": "update",
        "ru": "update",
        "en": "update"
      },
      "text": {
        "he": "`update טבלה set עמודה = ערך where תנאי`. ערך חדש יכול להיות מחושב מהישן: `zahov = zahov * 2`.",
        "ru": "`update таблица set столбец = значение where условие`. Новое значение можно считать из старого: `zahov = zahov * 2`.",
        "en": "`update table set column = value where condition`. The new value can come from the old one: `zahov = zahov * 2`."
      }
    },
    {
      "title": {
        "he": "delete",
        "ru": "delete",
        "en": "delete"
      },
      "text": {
        "he": "`delete from טבלה where תנאי` — מוחק שורות שלמות.",
        "ru": "`delete from таблица where условие` — удаляет строки целиком.",
        "en": "`delete from table where condition` — deletes whole rows."
      }
    },
    {
      "title": {
        "he": "בלי where",
        "ru": "Без where",
        "en": "Without where"
      },
      "text": {
        "he": "`update` ו־`delete` בלי `where` = כל הטבלה.",
        "ru": "`update` и `delete` без `where` = вся таблица.",
        "en": "`update` and `delete` without `where` = the whole table."
      }
    },
    {
      "title": {
        "he": "סדר השורות",
        "ru": "Порядок строк",
        "en": "Row order"
      },
      "text": {
        "he": "בלי `order by` הסדר לא מובטח.",
        "ru": "Без `order by` порядок не гарантирован.",
        "en": "Without `order by` the order is not guaranteed."
      }
    },
    {
      "title": {
        "he": "alter table",
        "ru": "alter table",
        "en": "alter table"
      },
      "text": {
        "he": "`alter table טבלה add עמודה int` מוסיף עמודה (ריקה, NULL). `drop column` מוחק עמודה.",
        "ru": "`alter table таблица add столбец int` добавляет столбец (пустой, NULL). `drop column` удаляет столбец.",
        "en": "`alter table table add column int` adds a column (empty, NULL). `drop column` removes a column."
      }
    }
  ],
  "tasks": {
    "groups": {
      "idk": {
        "he": "פקודות השיעור על idkunim",
        "ru": "Команды урока на таблице idkunim",
        "en": "The lesson's commands on idkunim"
      },
      "cars": {
        "he": "תרגיל הרכבים",
        "ru": "Упражнение с машинами",
        "en": "The car exercise"
      }
    },
    "teacher": [
      {
        "id": "s1",
        "group": "idk",
        "label": {
          "he": "zahov × 2",
          "ru": "zahov × 2",
          "en": "zahov × 2"
        },
        "kind": "number",
        "text": {
          "he": "הטבלה `idkunim` מהשיעור (10 השורות מההתחלה):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nמריצים:\n```\nupdate idkunim\nset zahov = zahov * 2\nwhere prati = 'yair'\n```\nכמה יהיה `zahov` של yair lerner?",
          "ru": "Таблица `idkunim` с урока (10 строк из начала):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nЗапускаем:\n```\nupdate idkunim\nset zahov = zahov * 2\nwhere prati = 'yair'\n```\nСколько станет `zahov` у yair lerner?",
          "en": "The `idkunim` table from the lesson (the 10 starting rows):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nWe run:\n```\nupdate idkunim\nset zahov = zahov * 2\nwhere prati = 'yair'\n```\nWhat will yair lerner's `zahov` be?"
        },
        "example": {
          "he": "טבלה אחרת:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n```\nupdate perot set kamut = kamut * 3 where pri = 'banana'\n```\n → שתי שורות banana: `6 × 3 = 18` ו־`1 × 3 = 3`.",
          "ru": "Другая таблица:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n`update perot set kamut = kamut * 3 where pri = 'banana'` → две строки banana: `6 × 3 = 18` и `1 × 3 = 3`.",
          "en": "Another table:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n`update perot set kamut = kamut * 3 where pri = 'banana'` → two banana rows: `6 × 3 = 18` and `1 × 3 = 3`."
        },
        "answer": {
          "value": "36"
        },
        "hints": [
          {
            "he": "מה היה ה־`zahov` שלו לפני?",
            "ru": "Какой у него был `zahov` до этого?",
            "en": "What was his `zahov` before?"
          }
        ],
        "solution": [
          "yair lerner: zahov = 18",
          "18 × 2 = 36",
          {
            "he": "תשובה: 36",
            "ru": "Ответ: 36",
            "en": "Answer: 36"
          }
        ]
      },
      {
        "id": "s2",
        "group": "idk",
        "label": {
          "he": "כמה שורות השתנו?",
          "ru": "Сколько строк изменилось?",
          "en": "How many rows changed?"
        },
        "kind": "number",
        "text": {
          "he": "הטבלה `idkunim` מהשיעור (10 השורות מההתחלה):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nאותה פקודה: \n```\nupdate idkunim set zahov = zahov * 2 where prati = 'yair'\n```\n בכמה שורות היא משנה משהו?",
          "ru": "Таблица `idkunim` с урока (10 строк из начала):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nТа же команда: `update idkunim set zahov = zahov * 2 where prati = 'yair'`. Во скольких строках она что-то меняет?",
          "en": "The `idkunim` table from the lesson (the 10 starting rows):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nThe same command: `update idkunim set zahov = zahov * 2 where prati = 'yair'`. In how many rows does it change something?"
        },
        "example": {
          "he": "טבלה אחרת:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n```\nupdate perot set kamut = kamut * 3 where pri = 'anavim'\n```\n → anavim מופיע רק בשורה 4 → משתנה שורה אחת.",
          "ru": "Другая таблица:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n`update perot set kamut = kamut * 3 where pri = 'anavim'` → anavim есть только в строке 4 → меняется 1 строка.",
          "en": "Another table:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n`update perot set kamut = kamut * 3 where pri = 'anavim'` → anavim appears only in row 4 → 1 row changes."
        },
        "answer": {
          "value": "2"
        },
        "hints": [
          {
            "he": "ספרו כמה שורות עם `prati = 'yair'`.",
            "ru": "Посчитай строки с `prati = 'yair'`.",
            "en": "Count the rows with `prati = 'yair'`."
          }
        ],
        "solution": [
          "yair deri, yair lerner",
          {
            "he": "תשובה: 2",
            "ru": "Ответ: 2",
            "en": "Answer: 2"
          }
        ]
      },
      {
        "id": "s3",
        "group": "idk",
        "label": {
          "he": "אחרי delete",
          "ru": "После delete",
          "en": "After delete"
        },
        "kind": "number",
        "text": {
          "he": "הטבלה `idkunim` מהשיעור (10 השורות מההתחלה):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nמריצים \n```\ndelete from idkunim where prati = 'yair'\n```\n כמה שורות יישארו בטבלה?",
          "ru": "Таблица `idkunim` с урока (10 строк из начала):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nЗапускаем `delete from idkunim where prati = 'yair'`. Сколько строк останется в таблице?",
          "en": "The `idkunim` table from the lesson (the 10 starting rows):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nWe run `delete from idkunim where prati = 'yair'`. How many rows are left in the table?"
        },
        "example": {
          "he": "טבלה אחרת:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n```\ndelete from perot where pri = 'tapuach'\n```\n → נמחקות 2 שורות tapuach → `5 - 2 = 3` שורות נשארות.",
          "ru": "Другая таблица:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n`delete from perot where pri = 'tapuach'` → удаляются 2 строки tapuach → 5 − 2 = 3 строки остаются.",
          "en": "Another table:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n`delete from perot where pri = 'tapuach'` → 2 tapuach rows are deleted → 5 − 2 = 3 rows are left."
        },
        "answer": {
          "value": "8"
        },
        "hints": [
          {
            "he": "כמה שורות של yair נמחקות?",
            "ru": "Сколько строк yair удалится?",
            "en": "How many yair rows are deleted?"
          }
        ],
        "solution": [
          "10 - 2 = 8",
          {
            "he": "תשובה: 8",
            "ru": "Ответ: 8",
            "en": "Answer: 8"
          }
        ]
      },
      {
        "id": "s4",
        "group": "idk",
        "label": {
          "he": "אחרי כל הפקודות",
          "ru": "После всех команд",
          "en": "After all the commands"
        },
        "kind": "number",
        "text": {
          "he": "הטבלה `idkunim` מהשיעור (10 השורות מההתחלה):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nמריצים לפי הסדר מהשיעור: ה־`update` של yair, אחר כך \n```\ndelete from idkunim where prati = 'yair'\n```\n ואז \n```\ninsert into idkunim values ('etti', 'senyor', 'israel', 'macabbi', 2, 100)\n```\n כמה שורות יחזיר עכשיו \n```\nselect * from idkunim where bonus >= 10\n```\n",
          "ru": "Таблица `idkunim` с урока (10 строк из начала):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nЗапускаем по порядку, как на уроке: `update` для yair, потом `delete from idkunim where prati = 'yair'`, потом `insert into idkunim values ('etti', 'senyor', 'israel', 'macabbi', 2, 100)`. Сколько строк вернёт теперь `select * from idkunim where bonus >= 10`?",
          "en": "The `idkunim` table from the lesson (the 10 starting rows):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nWe run in order, as in class: the `update` for yair, then `delete from idkunim where prati = 'yair'`, then `insert into idkunim values ('etti', 'senyor', 'israel', 'macabbi', 2, 100)`. How many rows does `select * from idkunim where bonus >= 10` return now?"
        },
        "example": {
          "he": "טבלה אחרת:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n`select * from perot where kamut >= 5` → banana עם 6 ו־anavim עם 9 → 2 שורות.",
          "ru": "Другая таблица:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n`select * from perot where kamut >= 5` → banana с 6 и anavim с 9 → 2 строки.",
          "en": "Another table:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n`select * from perot where kamut >= 5` → banana with 6 and anavim with 9 → 2 rows."
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "ל־yair היה bonus 0 ו־6, והם נמחקו. מה עם etti?",
            "ru": "У yair был bonus 0 и 6, их удалили. А etti?",
            "en": "yair had bonus 0 and 6, and they were deleted. What about etti?"
          }
        ],
        "solution": [
          "assi: 19",
          "uzi deri: 10",
          "etti: 100",
          {
            "he": "תשובה: 3",
            "ru": "Ответ: 3",
            "en": "Answer: 3"
          }
        ]
      },
      {
        "id": "s5",
        "group": "idk",
        "label": {
          "he": "שכחו where",
          "ru": "Забыли where",
          "en": "Forgot where"
        },
        "kind": "choice",
        "text": {
          "he": "מה עושה `update idkunim set zahov = 0` (בלי `where`)?",
          "ru": "Что делает `update idkunim set zahov = 0` (без `where`)?",
          "en": "What does `update idkunim set zahov = 0` do (without `where`)?"
        },
        "options": [
          {
            "he": "שגיאה: חסר where",
            "ru": "Ошибка: нет where",
            "en": "An error: where is missing"
          },
          {
            "he": "משנה רק את השורה הראשונה",
            "ru": "Меняет только первую строку",
            "en": "Changes only the first row"
          },
          {
            "he": "ב־10 השורות zahov נהיה 0",
            "ru": "Во всех 10 строках zahov станет 0",
            "en": "zahov becomes 0 in all 10 rows"
          }
        ],
        "example": {
          "he": "טבלה אחרת:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n```\nupdate perot set kamut = 0 where id = 2\n```\n → יש `where`, ו־`id = 2` רק בשורה אחת → רק banana בשורה 2 מקבלת 0.",
          "ru": "Другая таблица:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n`update perot set kamut = 0 where id = 2` → есть `where`, и `id = 2` только в одной строке → 0 получает только banana в строке 2.",
          "en": "Another table:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n`update perot set kamut = 0 where id = 2` → there is a `where`, and `id = 2` is in one row only → only banana in row 2 gets 0."
        },
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "בלי `where` אין סינון.",
            "ru": "Без `where` нет фильтра.",
            "en": "Without `where` there is no filter."
          }
        ],
        "solution": [
          {
            "he": "אין where → כל 10 השורות",
            "ru": "Нет where → все 10 строк",
            "en": "No where → all 10 rows"
          },
          {
            "he": "תשובה: כל השחקנים מקבלים 0",
            "ru": "Ответ: у всех игроков станет 0",
            "en": "Answer: every player gets 0"
          }
        ]
      },
      {
        "id": "s6",
        "group": "idk",
        "label": {
          "he": "zahov + 5",
          "ru": "zahov + 5",
          "en": "zahov + 5"
        },
        "kind": "number",
        "text": {
          "he": "הטבלה `idkunim` מהשיעור (10 השורות מההתחלה):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nמריצים \n```\nupdate idkunim set zahov = zahov + 5 where club = 'ajax'\n```\n כמה יהיה `zahov` של roi?",
          "ru": "Таблица `idkunim` с урока (10 строк из начала):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nЗапускаем `update idkunim set zahov = zahov + 5 where club = 'ajax'`. Сколько станет `zahov` у roi?",
          "en": "The `idkunim` table from the lesson (the 10 starting rows):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nWe run `update idkunim set zahov = zahov + 5 where club = 'ajax'`. What will roi's `zahov` be?"
        },
        "example": {
          "he": "טבלה אחרת:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n```\nupdate perot set kamut = kamut + 10 where pri = 'anavim'\n```\n → `9 + 10 = 19`.",
          "ru": "Другая таблица:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n`update perot set kamut = kamut + 10 where pri = 'anavim'` → 9 + 10 = 19.",
          "en": "Another table:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n`update perot set kamut = kamut + 10 where pri = 'anavim'` → 9 + 10 = 19."
        },
        "answer": {
          "value": "13"
        },
        "hints": [
          {
            "he": "roi משחק ב־ajax?",
            "ru": "roi играет в ajax?",
            "en": "Does roi play for ajax?"
          }
        ],
        "solution": [
          "roi: club = 'ajax', zahov = 8",
          "8 + 5 = 13",
          {
            "he": "תשובה: 13",
            "ru": "Ответ: 13",
            "en": "Answer: 13"
          }
        ]
      },
      {
        "id": "s7",
        "group": "idk",
        "label": {
          "he": "סדר המילים",
          "ru": "Порядок слов",
          "en": "Word order"
        },
        "kind": "choice",
        "text": {
          "he": "איזו פקודה כתובה נכון?",
          "ru": "Какая команда написана правильно?",
          "en": "Which command is written correctly?"
        },
        "options": [
          "update idkunim where prati = 'avi' set bonus = 5",
          "update idkunim set bonus = 5 where prati = 'avi'",
          "update set bonus = 5 idkunim where prati = 'avi'",
          "set bonus = 5 update idkunim where prati = 'avi'"
        ],
        "example": {
          "he": "ב־`select` הסדר קבוע: `select … from … where …`. גם ב־`update` יש סדר קבוע, ו־`where` תמיד בסוף.",
          "ru": "В `select` порядок постоянный: `select … from … where …`. В `update` тоже постоянный порядок, и `where` всегда в конце.",
          "en": "In `select` the order is fixed: `select … from … where …`. `update` has a fixed order too, and `where` is always last."
        },
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "קודם מה משנים (`set`), אחר כך איפה (`where`).",
            "ru": "Сначала что меняем (`set`), потом где (`where`).",
            "en": "First what to change (`set`), then where (`where`)."
          }
        ],
        "solution": [
          "update idkunim set bonus = 5 where prati = 'avi'",
          {
            "he": "תשובה: האפשרות השנייה",
            "ru": "Ответ: второй вариант",
            "en": "Answer: the second option"
          }
        ]
      },
      {
        "id": "s8",
        "group": "idk",
        "label": {
          "he": "בונוס 10000 ואז delete",
          "ru": "Бонус 10000, потом delete",
          "en": "A 10000 bonus, then delete"
        },
        "kind": "number",
        "text": {
          "he": "הטבלה `idkunim` מהשיעור (10 השורות מההתחלה):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nמריצים לפי הסדר:\n1. \n```\nupdate idkunim set zahov *= 2 where prati = 'yair'\n```\n2. \n```\nupdate idkunim set bonus = +10000 where zahov > 10\n```\n3. \n```\ndelete from idkunim where bonus >= 10000\n```\nכמה שורות יישארו?",
          "ru": "Таблица `idkunim` с урока (10 строк из начала):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nЗапускаем по порядку:\n1. `update idkunim set zahov *= 2 where prati = 'yair'`\n2. `update idkunim set bonus = +10000 where zahov > 10`\n3. `delete from idkunim where bonus >= 10000`\nСколько строк останется?",
          "en": "The `idkunim` table from the lesson (the 10 starting rows):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nRun in order:\n1. `update idkunim set zahov *= 2 where prati = 'yair'`\n2. `update idkunim set bonus = +10000 where zahov > 10`\n3. `delete from idkunim where bonus >= 10000`\nHow many rows are left?"
        },
        "example": {
          "he": "טבלה אחרת:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n```\nupdate perot set kamut = +100 where kamut > 5\n```\n ואז `delete from perot where kamut >= 100` → banana (6) ו־anavim (9) מקבלים 100 ונמחקים → נשארות 3.",
          "ru": "Другая таблица:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n`update perot set kamut = +100 where kamut > 5`, потом `delete from perot where kamut >= 100` → banana (6) и anavim (9) получают 100 и удаляются → остаются 3.",
          "en": "Another table:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n`update perot set kamut = +100 where kamut > 5`, then `delete from perot where kamut >= 100` → banana (6) and anavim (9) get 100 and are deleted → 3 are left."
        },
        "answer": {
          "value": "7"
        },
        "hints": [
          {
            "he": "אחרי שלב 1: yair deri 24, yair lerner 36.",
            "ru": "После шага 1: yair deri 24, yair lerner 36.",
            "en": "After step 1: yair deri 24, yair lerner 36."
          },
          {
            "he": "`> 10` לא כולל את 10 עצמו (lev).",
            "ru": "`> 10` не включает само 10 (lev).",
            "en": "`> 10` does not include 10 itself (lev)."
          }
        ],
        "solution": [
          "zahov > 10: yair deri 24, uzi mozkovitz 14, yair lerner 36",
          "10 − 3 = 7",
          {
            "he": "תשובה: 7",
            "ru": "Ответ: 7",
            "en": "Answer: 7"
          }
        ]
      },
      {
        "id": "c1",
        "group": "cars",
        "label": {
          "he": "טיפוס לשנה",
          "ru": "Тип для года",
          "en": "A type for the year"
        },
        "kind": "choice",
        "text": {
          "he": "בתרגיל הרכבים: איזה טיפוס מתאים לשדה \"שנת ייצור\" (למשל 2025)?",
          "ru": "В упражнении с машинами: какой тип подходит полю «год выпуска» (например, 2025)?",
          "en": "In the car exercise: which type fits the field \"year of manufacture\" (e.g. 2025)?"
        },
        "options": [
          "int",
          "nvarchar(20)",
          "date"
        ],
        "example": {
          "he": "לשדה \"יצרן\" (toyota, bmw…) — אלה אותיות → `nvarchar(20)`, כמו שמות בשיעורים הקודמים.",
          "ru": "Для поля «производитель» (toyota, bmw…) — это буквы → `nvarchar(20)`, как имена на прошлых уроках.",
          "en": "For the \"manufacturer\" field (toyota, bmw…) — these are letters → `nvarchar(20)`, like names in earlier lessons."
        },
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "שנה היא מספר שלם.",
            "ru": "Год — целое число.",
            "en": "A year is a whole number."
          }
        ],
        "solution": [
          "2025  →  int",
          {
            "he": "תשובה: int",
            "ru": "Ответ: int",
            "en": "Answer: int"
          }
        ]
      },
      {
        "id": "c2",
        "group": "cars",
        "label": {
          "he": "רכבים מ־2025",
          "ru": "Машины 2025 года",
          "en": "Cars from 2025"
        },
        "kind": "number",
        "text": {
          "he": "נניח שהכנסת לטבלה 3 רכבים כאלה (נתונים מומצאים):\n```\nrechev (mispar_rechev, shem_rechev, shnat_yitzur, yatzran)\n('12-345-67', 'corolla', 2025, 'toyota')\n('23-456-78', 'golf', 2019, 'volkswagen')\n('34-567-89', 'x5', 2025, 'bmw')\n```\nכמה שורות יחזיר \n```\nselect * from rechev where shnat_yitzur = 2025\n```\n",
          "ru": "Допустим, ты добавил в таблицу 3 такие машины (данные придуманы):\n```\nrechev (mispar_rechev, shem_rechev, shnat_yitzur, yatzran)\n('12-345-67', 'corolla', 2025, 'toyota')\n('23-456-78', 'golf', 2019, 'volkswagen')\n('34-567-89', 'x5', 2025, 'bmw')\n```\nСколько строк вернёт `select * from rechev where shnat_yitzur = 2025`?",
          "en": "Suppose you inserted these 3 cars into the table (made-up data):\n```\nrechev (mispar_rechev, shem_rechev, shnat_yitzur, yatzran)\n('12-345-67', 'corolla', 2025, 'toyota')\n('23-456-78', 'golf', 2019, 'volkswagen')\n('34-567-89', 'x5', 2025, 'bmw')\n```\nHow many rows does `select * from rechev where shnat_yitzur = 2025` return?"
        },
        "example": {
          "he": "טבלה אחרת:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n`select * from perot where kamut = 6` → רק banana בשורה 2 → שורה אחת.",
          "ru": "Другая таблица:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n`select * from perot where kamut = 6` → только banana в строке 2 → 1 строка.",
          "en": "Another table:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n`select * from perot where kamut = 6` → only banana in row 2 → 1 row."
        },
        "answer": {
          "value": "2"
        },
        "hints": [
          {
            "he": "בדקו את העמודה השלישית.",
            "ru": "Посмотри третий столбец.",
            "en": "Look at the third column."
          }
        ],
        "solution": [
          "corolla 2025, x5 2025",
          {
            "he": "תשובה: 2",
            "ru": "Ответ: 2",
            "en": "Answer: 2"
          }
        ]
      },
      {
        "id": "c3",
        "group": "cars",
        "label": {
          "he": "להוסיף עמודה",
          "ru": "Добавить столбец",
          "en": "Add a column"
        },
        "kind": "choice",
        "text": {
          "he": "המשך התרגיל: להוסיף לטבלה `rechev` עמודה `eretz`. איזו פקודה עושה את זה? (את הפקודה הראו בסוף השיעור; אפשר גם עם העכבר ב־Design.)",
          "ru": "Продолжение упражнения: добавить в таблицу `rechev` столбец `eretz`. Какая команда это делает? (Эту команду показали в конце урока; можно и мышкой в Design.)",
          "en": "The exercise continues: add a column `eretz` to the `rechev` table. Which command does it? (This command was shown at the end of the lesson; you can also use the mouse in Design.)"
        },
        "options": [
          "insert into rechev add eretz nvarchar(20)",
          "update rechev add eretz nvarchar(20)",
          "alter table rechev add eretz nvarchar(20)"
        ],
        "example": {
          "he": "`insert` מוסיף שורות, לא עמודות: \n```\ninsert into perot values (6, 'kiwi', 3)\n```\n מוסיף שורה שישית.",
          "ru": "`insert` добавляет строки, а не столбцы: `insert into perot values (6, 'kiwi', 3)` добавляет шестую строку.",
          "en": "`insert` adds rows, not columns: `insert into perot values (6, 'kiwi', 3)` adds a sixth row."
        },
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "משנים את מבנה הטבלה, לא את הנתונים.",
            "ru": "Меняем устройство таблицы, а не данные.",
            "en": "We change the table's structure, not the data."
          }
        ],
        "solution": [
          "alter table rechev add eretz nvarchar(20)",
          {
            "he": "תשובה: alter table … add …",
            "ru": "Ответ: alter table … add …",
            "en": "Answer: alter table … add …"
          }
        ]
      },
      {
        "id": "c4",
        "group": "cars",
        "label": {
          "he": "גרמניה → טורקיה",
          "ru": "Германия → Турция",
          "en": "Germany → Turkey"
        },
        "kind": "number",
        "text": {
          "he": "הוספת עמודה `eretz`, ומילאת: corolla → japan, golf → germany, x5 → germany. הטבלה:\n```\nrechev (mispar_rechev, shem_rechev, shnat_yitzur, yatzran)\n('12-345-67', 'corolla', 2025, 'toyota')\n('23-456-78', 'golf', 2019, 'volkswagen')\n('34-567-89', 'x5', 2025, 'bmw')\n```\nבכמה שורות תשנה משהו הפקודה \n```\nupdate rechev set eretz = 'turkey' where eretz = 'germany'\n```\n",
          "ru": "Ты добавил столбец `eretz` и заполнил: corolla → japan, golf → germany, x5 → germany. Таблица:\n```\nrechev (mispar_rechev, shem_rechev, shnat_yitzur, yatzran)\n('12-345-67', 'corolla', 2025, 'toyota')\n('23-456-78', 'golf', 2019, 'volkswagen')\n('34-567-89', 'x5', 2025, 'bmw')\n```\nВо скольких строках что-то изменит команда `update rechev set eretz = 'turkey' where eretz = 'germany'`?",
          "en": "You added an `eretz` column and filled it: corolla → japan, golf → germany, x5 → germany. The table:\n```\nrechev (mispar_rechev, shem_rechev, shnat_yitzur, yatzran)\n('12-345-67', 'corolla', 2025, 'toyota')\n('23-456-78', 'golf', 2019, 'volkswagen')\n('34-567-89', 'x5', 2025, 'bmw')\n```\nIn how many rows does `update rechev set eretz = 'turkey' where eretz = 'germany'` change something?"
        },
        "example": {
          "he": "טבלה אחרת:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n```\nupdate perot set pri = 'tapuz' where pri = 'anavim'\n```\n → anavim רק בשורה 4 → שורה אחת משתנה.",
          "ru": "Другая таблица:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n`update perot set pri = 'tapuz' where pri = 'anavim'` → anavim только в строке 4 → меняется 1 строка.",
          "en": "Another table:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n`update perot set pri = 'tapuz' where pri = 'anavim'` → anavim is only in row 4 → 1 row changes."
        },
        "answer": {
          "value": "2"
        },
        "hints": [
          {
            "he": "כמה רכבים עם germany?",
            "ru": "Сколько машин с germany?",
            "en": "How many cars have germany?"
          }
        ],
        "solution": [
          "golf, x5  →  turkey",
          {
            "he": "תשובה: 2",
            "ru": "Ответ: 2",
            "en": "Answer: 2"
          }
        ]
      }
    ],
    "ai": [
      {
        "id": "a1",
        "level": 1,
        "label": "1.1",
        "kind": "text",
        "text": {
          "he": "השלימו את המילה החסרה: `delete ___ idkunim where prati = 'avi'`",
          "ru": "Допиши пропущенное слово: `delete ___ idkunim where prati = 'avi'`",
          "en": "Fill in the missing word: `delete ___ idkunim where prati = 'avi'`"
        },
        "example": {
          "he": "ב־`insert` המילה אחרי הפקודה היא `into`: `insert into perot values (…)`.",
          "ru": "В `insert` слово после команды — `into`: `insert into perot values (…)`.",
          "en": "In `insert` the word after the command is `into`: `insert into perot values (…)`."
        },
        "answer": {
          "accept": [
            "from"
          ]
        },
        "hints": [
          {
            "he": "כמו ב־`select * ___ idkunim`.",
            "ru": "Как в `select * ___ idkunim`.",
            "en": "Like in `select * ___ idkunim`."
          }
        ],
        "solution": [
          "delete from idkunim where prati = 'avi'",
          {
            "he": "תשובה: from",
            "ru": "Ответ: from",
            "en": "Answer: from"
          }
        ]
      },
      {
        "id": "a2",
        "level": 2,
        "label": "2.1",
        "kind": "number",
        "text": {
          "he": "הטבלה `idkunim` מהשיעור (10 השורות מההתחלה):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nבכמה שורות תשנה משהו הפקודה \n```\nupdate idkunim set bonus = bonus + 1 where eretz = 'germany'\n```\n",
          "ru": "Таблица `idkunim` с урока (10 строк из начала):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nВо скольких строках что-то изменит `update idkunim set bonus = bonus + 1 where eretz = 'germany'`?",
          "en": "The `idkunim` table from the lesson (the 10 starting rows):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nIn how many rows does `update idkunim set bonus = bonus + 1 where eretz = 'germany'` change something?"
        },
        "example": {
          "he": "טבלה אחרת:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n```\nupdate perot set kamut = kamut + 1 where pri = 'banana'\n```\n → 2 שורות banana.",
          "ru": "Другая таблица:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n`update perot set kamut = kamut + 1 where pri = 'banana'` → 2 строки banana.",
          "en": "Another table:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n`update perot set kamut = kamut + 1 where pri = 'banana'` → 2 banana rows."
        },
        "answer": {
          "value": "4"
        },
        "hints": [
          {
            "he": "ספרו את germany בעמודה eretz.",
            "ru": "Посчитай germany в столбце eretz.",
            "en": "Count germany in the eretz column."
          }
        ],
        "solution": [
          "assi, roi, yair lerner, avi",
          {
            "he": "תשובה: 4",
            "ru": "Ответ: 4",
            "en": "Answer: 4"
          }
        ]
      },
      {
        "id": "a3",
        "level": 3,
        "label": "3.1",
        "kind": "number",
        "text": {
          "he": "הטבלה `idkunim` מהשיעור (10 השורות מההתחלה):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nמריצים \n```\ndelete from idkunim where zahov = 0 or bonus = 0\n```\n כמה שורות יישארו?",
          "ru": "Таблица `idkunim` с урока (10 строк из начала):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nЗапускаем `delete from idkunim where zahov = 0 or bonus = 0`. Сколько строк останется?",
          "en": "The `idkunim` table from the lesson (the 10 starting rows):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nWe run `delete from idkunim where zahov = 0 or bonus = 0`. How many rows are left?"
        },
        "example": {
          "he": "טבלה אחרת:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n```\ndelete from perot where kamut < 3 or pri = 'anavim'\n```\n → נמחקות שורה 3 (`2 < 3`), שורה 5 (`1 < 3`) ושורה 4 (anavim) → נשארות 2.",
          "ru": "Другая таблица:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n`delete from perot where kamut < 3 or pri = 'anavim'` → удаляются строка 3 (2 < 3), строка 5 (1 < 3) и строка 4 (anavim) → остаются 2.",
          "en": "Another table:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n`delete from perot where kamut < 3 or pri = 'anavim'` → rows 3 (2 < 3), 5 (1 < 3) and 4 (anavim) are deleted → 2 are left."
        },
        "answer": {
          "value": "6"
        },
        "hints": [
          {
            "he": "עם `or` מספיק תנאי אחד.",
            "ru": "С `or` хватает одного условия.",
            "en": "With `or` one condition is enough."
          }
        ],
        "solution": [
          "asaf (0, 0), nati (zahov 0), yair deri (bonus 0), roi (bonus 0)",
          "10 - 4 = 6",
          {
            "he": "תשובה: 6",
            "ru": "Ответ: 6",
            "en": "Answer: 6"
          }
        ]
      },
      {
        "id": "a4",
        "level": 3,
        "label": "3.2",
        "kind": "number",
        "text": {
          "he": "הטבלה `idkunim` מהשיעור (10 השורות מההתחלה):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nקודם \n```\nupdate idkunim set zahov = zahov * 2 where prati = 'yair'\n```\n ואחר כך `select * from idkunim where zahov > 20`. כמה שורות יחזרו?",
          "ru": "Таблица `idkunim` с урока (10 строк из начала):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nСначала `update idkunim set zahov = zahov * 2 where prati = 'yair'`, потом `select * from idkunim where zahov > 20`. Сколько строк вернётся?",
          "en": "The `idkunim` table from the lesson (the 10 starting rows):\n```\nprati, mishpaha, eretz, club, zahov, bonus\n('lev', 'deri', 'argentina', 'liverpool', 10, 6)\n('asaf', 'cohen', 'argentina', 'arsenal', 0, 0)\n('nati', 'hareven', 'spain', 'ajax', 0, 9)\n('yair', 'deri', 'argentina', 'liverpool', 12, 0)\n('uzi', 'mozkovitz', 'spain', 'juventus', 14, 8)\n('assi', 'yacobi', 'germany', 'juventus', 8, 19)\n('uzi', 'deri', 'argentina', 'liverpool', 2, 10)\n('roi', 'levi', 'germany', 'ajax', 8, 0)\n('yair', 'lerner', 'germany', 'arsenal', 18, 6)\n('avi', 'levi', 'germany', 'liverpool', 4, 4)\n```\nFirst `update idkunim set zahov = zahov * 2 where prati = 'yair'`, then `select * from idkunim where zahov > 20`. How many rows come back?"
        },
        "example": {
          "he": "טבלה אחרת:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n```\nupdate perot set kamut = kamut * 3 where pri = 'banana'\n```\n ואז `select * from perot where kamut > 10` → banana: 18 ו־3 → רק 18 גדול מ־10 → שורה אחת.",
          "ru": "Другая таблица:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n`update perot set kamut = kamut * 3 where pri = 'banana'`, потом `select * from perot where kamut > 10` → banana: 18 и 3 → больше 10 только 18 → 1 строка.",
          "en": "Another table:\n```\nperot (id, pri, kamut)\n(1, 'tapuach', 4)\n(2, 'banana', 6)\n(3, 'tapuach', 2)\n(4, 'anavim', 9)\n(5, 'banana', 1)\n```\n`update perot set kamut = kamut * 3 where pri = 'banana'`, then `select * from perot where kamut > 10` → banana: 18 and 3 → only 18 is above 10 → 1 row."
        },
        "answer": {
          "value": "2"
        },
        "hints": [
          {
            "he": "לפני ה־update אף אחד לא מעל 20.",
            "ru": "До update ни у кого нет больше 20.",
            "en": "Before the update nobody is above 20."
          }
        ],
        "solution": [
          "yair deri: 12 × 2 = 24",
          "yair lerner: 18 × 2 = 36",
          "uzi mozkovitz: 14",
          {
            "he": "תשובה: 2",
            "ru": "Ответ: 2",
            "en": "Answer: 2"
          }
        ]
      }
    ]
  }
};

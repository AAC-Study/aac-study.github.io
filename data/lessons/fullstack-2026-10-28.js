/* Lesson data — format: see the comment at the top of data/lessons/math-2026-11-01.js.
   Full Stack: HTML tables, a background image through <style>, form elements, the summary HTML project.
   Every count below (rows, cells, tags) was checked by hand, cell by cell. */
window.LESSONS = window.LESSONS || {};
window.LESSONS["fullstack-2026-10-28"] = {
  "id": "fullstack-2026-10-28",
  "subject": "fullstack",
  "date": "2026-10-28",
  "title": {
    "he": "טבלאות ב־HTML ותמונת רקע",
    "ru": "Таблицы в HTML и фоновая картинка",
    "en": "HTML tables and a background image"
  },
  "summary": {
    "he": "תמונת רקע לדף דרך `<style>` ב־head, טבלה עם `<table>`, `<tr>`, `<th>`, `<td>` והתכונות שלה, תרגילון טבלה, אלמנטים של טופס, והתרגיל המסכם: אתר של עסק עם 4 דפים.",
    "ru": "Фоновая картинка страницы через `<style>` в head, таблица из `<table>`, `<tr>`, `<th>`, `<td>` и её атрибуты, упражнение с таблицей, элементы формы и итоговое задание: сайт бизнеса из 4 страниц.",
    "en": "A page background image via `<style>` in the head, a table built from `<table>`, `<tr>`, `<th>`, `<td>` and its attributes, a table exercise, form elements, and the summary project: a 4-page business website."
  },
  "timeline": [
    {
      "why": {
        "he": "דוגמה מהחיים: `id` הוא כמו תעודת זהות — לכל אדם מספר משלו. `class` הוא כמו \"כיתה\" — הרבה תלמידים באותה כיתה. אם שני אלמנטים מקבלים אותו `id`, JavaScript שמחפש \"את האלמנט עם ה-id הזה\" ימצא רק אחד — וזה באג שקשה למצוא.",
        "ru": "Пример из жизни: `id` — как теудат зеут, у каждого человека свой номер. `class` — как «класс»: много учеников в одном классе. Если двум элементам дать одинаковый `id`, JavaScript, который ищет «элемент с этим id», найдёт только один — и это ошибка, которую трудно найти.",
        "en": "A real-life example: `id` is like an ID card — each person has their own number. `class` is like a school class — many students in the same class. If two elements get the same `id`, JavaScript looking for \"the element with this id\" finds only one — a bug that is hard to find."
      },
      "kind": "talk",
      "time": "08:39",
      "title": {
        "he": "id ו־class — מה ההבדל",
        "ru": "id и class — в чём разница",
        "en": "id and class — the difference"
      },
      "text": {
        "he": "`id` (מאנגלית identity — זהות) — שם ייחודי שנותנים לאלמנט אחד בלבד. בדף לא יהיו שני אלמנטים עם אותו `id`.\n`class` — שם שאפשר לתת להרבה אלמנטים יחד, למשל לכל השורות בטבלה.\nבהמשך הקורס (CSS) נשתמש בהם כדי לעצב אלמנט מסוים או קבוצה שלמה.",
        "ru": "`id` (от английского identity — «личность») — уникальное имя, которое дают только одному элементу. На странице не бывает двух элементов с одинаковым `id`.\n`class` — имя, которое можно дать многим элементам сразу, например всем строкам таблицы.\nДальше в курсе (CSS) по ним будем оформлять один конкретный элемент или целую группу.",
        "en": "`id` (from \"identity\") — a unique name given to one element only. A page never has two elements with the same `id`.\n`class` — a name many elements can share, e.g. all rows of a table.\nLater in the course (CSS) we use them to style one element or a whole group."
      }
    },
    {
      "why": {
        "he": "למה ב-head ולא בתגית body עצמה? כי זה כבר CSS אמיתי: כלל אחד (`body { … }`) שחל על כל ה-body, במקום `style` שצריך לכתוב בכל תגית. `cover` אומר: \"תגדיל את התמונה עד שתכסה את כל המסך, גם אם קצת ממנה ייחתך\".",
        "ru": "Почему в head, а не в самом теге body? Потому что это уже настоящий CSS: одно правило (`body { … }`) на весь body, вместо `style`, который надо писать в каждом теге. `cover` значит: «увеличь картинку, пока она не закроет весь экран, даже если её края обрежутся».",
        "en": "Why in the head and not in the body tag itself? Because this is real CSS: one rule (`body { … }`) for the whole body, instead of a `style` in every tag. `cover` means \"enlarge the picture until it covers the whole screen, even if some of it is cut off\"."
      },
      "kind": "talk",
      "title": {
        "he": "תמונת רקע לכל הדף",
        "ru": "Фоновая картинка для всей страницы",
        "en": "A background image for the whole page"
      },
      "text": {
        "he": "את הרקע של הדף כותבים בתוך `<head>`, בתגית `<style>`. בתוכה פונים ל־`body` ונותנים לו תמונה. את קובץ התמונה שמים באותה תיקייה של קובץ ה־HTML.\n`background-image: url(\"background.jpg\");` — איזו תמונה.\n`background-size: cover;` — התמונה מכסה את כל הדף.",
        "ru": "Фон страницы пишут внутри `<head>`, в теге `<style>`. В нём обращаемся к `body` и даём ему картинку. Файл картинки кладём в ту же папку, что и HTML-файл.\n`background-image: url(\"background.jpg\");` — какая картинка.\n`background-size: cover;` — картинка закрывает всю страницу.",
        "en": "The page background goes inside `<head>`, in a `<style>` tag. In it we address `body` and give it an image. Put the image file in the same folder as the HTML file.\n`background-image: url(\"background.jpg\");` — which image.\n`background-size: cover;` — the image covers the whole page."
      },
      "math": [
        "<head>",
        "  <title>עמוד האינטרנט הראשון שלי</title>",
        "  <style>",
        "    body {",
        "      background-image: url(\"background.jpg\");",
        "      background-size: cover;",
        "    }",
        "  </style>",
        "</head>"
      ]
    },
    {
      "why": {
        "he": "ה-head יכול להכיל הרבה סוגים של דברים (כותרת, שפה, עיצוב). התגית `<style>` אומרת לדפדפן: \"מה שבפנים הוא CSS\". בלעדיה הוא לא יודע באיזו שפה לקרוא את הטקסט, ומתעלם ממנו — בלי שגיאה.",
        "ru": "В head могут быть разные вещи (название, язык, оформление). Тег `<style>` говорит браузеру: «внутри — CSS». Без него браузер не знает, на каком языке читать этот текст, и просто его пропускает — без ошибки.",
        "en": "The head can hold many kinds of things (title, language, styling). The `<style>` tag tells the browser \"what is inside is CSS\". Without it the browser does not know which language to read the text in, and skips it — with no error."
      },
      "kind": "tip",
      "title": {
        "he": "טעות נפוצה: בלי `<style>`",
        "ru": "Частая ошибка: без `<style>`",
        "en": "Common mistake: no `<style>`"
      },
      "text": {
        "he": "אם כותבים `body { … }` ישר בתוך `<head>`, בלי `<style>` מסביב, הדפדפן לא מבין שזה עיצוב — והרקע לא מופיע. הקוד הזה תמיד יושב בין `<style>` ל־`</style>`.\nתוספות שימושיות: `background-repeat: no-repeat;` (בלי חזרות), `background-position: center;` (במרכז), `background-attachment: fixed;` (הרקע לא זז כשגוללים).",
        "ru": "Если написать `body { … }` прямо внутри `<head>`, без `<style>` вокруг, браузер не поймёт, что это оформление, — и фона не будет. Этот код всегда стоит между `<style>` и `</style>`.\nПолезные добавки: `background-repeat: no-repeat;` (без повторов), `background-position: center;` (по центру), `background-attachment: fixed;` (фон не едет при прокрутке).",
        "en": "If you write `body { … }` straight inside `<head>`, without `<style>` around it, the browser does not see it as styling — and no background appears. This code always sits between `<style>` and `</style>`.\nUseful extras: `background-repeat: no-repeat;` (no tiling), `background-position: center;`, `background-attachment: fixed;` (the background stays put when scrolling)."
      }
    },
    {
      "why": {
        "he": "למה אין תגית לעמודה? כי טבלה נבנית שורה אחרי שורה, כמו שכותבים: משמאל לימין, מלמעלה למטה. העמודה נוצרת לבד — מהתא הראשון בכל שורה, מהשני בכל שורה, וכן הלאה. לכן בכל שורה צריך אותו מספר תאים.\nדימוי שעבד בשיעור: `table` = ארון, `tr` = מדף, `td` = קופסאות על המדף.",
        "ru": "Почему нет тега для столбца? Потому что таблица строится строка за строкой, как мы пишем: слева направо, сверху вниз. Столбец получается сам — из первой ячейки каждой строки, из второй и так далее. Поэтому в каждой строке должно быть одинаковое число ячеек.\nСравнение, которое сработало на уроке: `table` = шкаф, `tr` = полка, `td` = коробки на полке.",
        "en": "Why is there no tag for a column? Because a table is built row by row, the way we write: left to right, top to bottom. A column forms by itself — from the first cell of each row, the second, and so on. So every row needs the same number of cells.\nThe picture that worked in class: `table` = a cupboard, `tr` = a shelf, `td` = boxes on the shelf."
      },
      "kind": "board",
      "title": {
        "he": "מבנה של טבלה",
        "ru": "Устройство таблицы",
        "en": "How a table is built"
      },
      "text": {
        "he": "על הלוח צוירה טבלה של 2 × 2: שורות ובתוכן תאים.\n`<table>` — כל הטבלה. `<tr>` (table row) — שורה. בתוך שורה יש תאים: `<th>` — תא כותרת (מודגש וממורכז), `<td>` — תא רגיל.\nהסדר תמיד: table ← tr ← th/td. תא לא עומד לבד — הוא תמיד בתוך שורה.",
        "ru": "На доске нарисовали таблицу 2 × 2: строки, а в них ячейки.\n`<table>` — вся таблица. `<tr>` (table row) — строка. Внутри строки ячейки: `<th>` — ячейка-заголовок (жирная и по центру), `<td>` — обычная ячейка.\nПорядок всегда: table → tr → th/td. Ячейка не стоит сама по себе — она всегда внутри строки.",
        "en": "A 2 × 2 table was drawn on the board: rows, and cells inside them.\n`<table>` is the whole table. `<tr>` (table row) is a row. Inside a row are cells: `<th>` is a header cell (bold and centred), `<td>` is a normal cell.\nThe order is always table → tr → th/td. A cell never stands alone — it is always inside a row."
      },
      "math": [
        "<table border=\"1\">",
        "  <tr>",
        "    <th>שלב</th>",
        "    <th>מה לעשות</th>",
        "  </tr>",
        "  <tr>",
        "    <td>1</td>",
        "    <td>להוריד את VS Code</td>",
        "  </tr>",
        "</table>"
      ]
    },
    {
      "why": {
        "he": "בלי `border` הטבלה קיימת, אבל לא רואים את הקווים — וזה נראה כמו טקסט מפוזר. כשמגדירים תכונה בשורה (`tr`) היא חלה על כל התאים בשורה; בתא (`td`) — רק עליו. זה שוב \"הקרוב ביותר מנצח\" משיעור 21.10.",
        "ru": "Без `border` таблица есть, но линий не видно — и она похожа на разбросанный текст. Атрибут на строке (`tr`) действует на все её ячейки, на ячейке (`td`) — только на неё. Это снова «побеждает ближайшее» с урока 21.10.",
        "en": "Without `border` the table exists, but you cannot see the lines — it looks like scattered text. An attribute on a row (`tr`) applies to all its cells; on a cell (`td`), only to that cell. Again \"the closest wins\", from the 21.10 lesson."
      },
      "kind": "talk",
      "title": {
        "he": "התכונות של הטבלה",
        "ru": "Атрибуты таблицы",
        "en": "Table attributes"
      },
      "text": {
        "he": "בדוגמה של המרצה: `<table id=\"sesameStreet\" width=\"600px\" border=\"1px\" align=\"center\">`.\n`width` — רוחב הטבלה (בפיקסלים או באחוזים). `border` — עובי המסגרת; בלי border לא רואים קווים. `align=\"center\"` — הטבלה באמצע הדף.\nגם לשורה אפשר לתת תכונות: `<tr class=\"rows\" align=\"right\">`. ולתא — `style`, למשל צבע טקסט.\nבתוך תא אפשר לשים כל דבר: טקסט, קישור `<a>`, תמונה `<img width=\"40%\">` (האחוזים — מרוחב התא).",
        "ru": "В примере преподавателя: `<table id=\"sesameStreet\" width=\"600px\" border=\"1px\" align=\"center\">`.\n`width` — ширина таблицы (в пикселях или процентах). `border` — толщина рамки; без border линий не видно. `align=\"center\"` — таблица по центру страницы.\nСтроке тоже можно дать атрибуты: `<tr class=\"rows\" align=\"right\">`. А ячейке — `style`, например цвет текста.\nВ ячейку можно положить что угодно: текст, ссылку `<a>`, картинку `<img width=\"40%\">` (проценты — от ширины ячейки).",
        "en": "In the lecturer's example: `<table id=\"sesameStreet\" width=\"600px\" border=\"1px\" align=\"center\">`.\n`width` — table width (pixels or percent). `border` — frame thickness; without border no lines are visible. `align=\"center\"` — the table sits in the middle of the page.\nA row can get attributes too: `<tr class=\"rows\" align=\"right\">`. A cell can get `style`, e.g. a text colour.\nA cell can hold anything: text, a link `<a>`, an image `<img width=\"40%\">` (percent of the cell width)."
      }
    },
    {
      "why": {
        "he": "אחוזים תמיד נמדדים ביחס ל\"הורה\": טבלה — ביחס לדף, תמונה בתא — ביחס לתא. בגלל זה תמונה עם `40%` לא יוצאת מהתא: היא לא יכולה להיות גדולה מהקופסה שלה.",
        "ru": "Проценты всегда считаются от «родителя»: таблица — от страницы, картинка в ячейке — от ячейки. Поэтому картинка с `40%` не вылезает из ячейки: она не может быть больше своей коробки.",
        "en": "Percent is always measured against the \"parent\": a table against the page, a picture in a cell against the cell. That is why a picture at `40%` does not spill out of the cell: it cannot be bigger than its box."
      },
      "kind": "tip",
      "time": "08:53",
      "title": {
        "he": "פיקסלים או אחוזים, ויישור בתא",
        "ru": "Пиксели или проценты, и выравнивание в ячейке",
        "en": "Pixels or percent, and alignment in a cell"
      },
      "text": {
        "he": "`width=\"600px\"` — הטבלה תמיד ברוחב 600 פיקסלים. `width=\"50%\"` — חצי מרוחב הדף: כשהחלון קטן, גם הטבלה קטנה.\n`<th>` מיושר למרכז מעצמו. בתא רגיל אפשר לבחור: `<td align=\"right\">` — לימין, `align=\"left\"` — לשמאל.\nתמונה עם `width=\"40%\"` תופסת 40% מרוחב התא שלה ולא יוצאת ממנו.",
        "ru": "`width=\"600px\"` — таблица всегда шириной 600 пикселей. `width=\"50%\"` — половина ширины страницы: если окно меньше, таблица тоже меньше.\n`<th>` сам стоит по центру. В обычной ячейке можно выбрать: `<td align=\"right\">` — вправо, `align=\"left\"` — влево.\nКартинка с `width=\"40%\"` занимает 40% ширины своей ячейки и не вылезает из неё.",
        "en": "`width=\"600px\"` — the table is always 600 pixels wide. `width=\"50%\"` — half the page width: a smaller window means a smaller table.\n`<th>` is centred by itself. In a normal cell you choose: `<td align=\"right\">` — right, `align=\"left\"` — left.\nAn image with `width=\"40%\"` takes 40% of its cell width and stays inside it."
      }
    },
    {
      "why": {
        "he": "כל עמודה בתרגיל מתרגלת משהו אחר: טקסט — `td` רגיל, תמונה — `img` בתוך תא, קישור — `a` בתוך תא, כותרת — `th`. אחרי התרגיל הזה טבלת המחירים בפרויקט הסיום כבר מוכרת.",
        "ru": "Каждый столбец в упражнении тренирует своё: текст — обычный `td`, картинка — `img` внутри ячейки, ссылка — `a` внутри ячейки, заголовок — `th`. После этого прайс-лист в итоговом задании уже знаком.",
        "en": "Each column in the exercise practises something different: text — a plain `td`, a picture — `img` inside a cell, a link — `a` inside a cell, a header — `th`. After this, the price list in the final task is already familiar."
      },
      "kind": "board",
      "title": {
        "he": "תרגילון: טבלה משלכם",
        "ru": "Упражнение: своя таблица",
        "en": "Mini-exercise: your own table"
      },
      "text": {
        "he": "צרו טבלה דומה ככל האפשר לטבלה בדוגמה. הנושא — חופשי, אבל לפחות 3 שורות ואת העמודות:\n• עמודת טקסט (שם, שם משפחה וכו׳)\n• תמונה\n• היפר־קישור\n• כותרת (header)",
        "ru": "Сделайте таблицу, как можно более похожую на пример. Тема любая, но минимум 3 строки и столбцы:\n• текстовый столбец (имя, фамилия и т. п.)\n• картинка\n• гиперссылка\n• заголовок (header)",
        "en": "Make a table as close as possible to the example. Any topic, but at least 3 rows and these columns:\n• a text column (name, surname, etc.)\n• an image\n• a hyperlink\n• a header"
      }
    },
    {
      "why": {
        "he": "למה `name`? כשהטופס נשלח, כל ערך נשלח עם השם שלו — `fullname=דני`. בלי `name` השרת לא יודע מה זה הערך. ב-`radio` השם המשותף אומר \"אלה אפשרויות של אותה שאלה\", ולכן אפשר לבחור רק אחת.",
        "ru": "Зачем `name`? Когда форма отправляется, каждое значение уходит со своим именем — `fullname=Дани`. Без `name` сервер не знает, что это за значение. У `radio` общее имя говорит: «это варианты одного вопроса», — поэтому выбрать можно только один.",
        "en": "Why `name`? When the form is sent, each value goes with its name — `fullname=Dani`. Without `name` the server does not know what the value is. For `radio`, the shared name says \"these are options of the same question\", so only one can be chosen."
      },
      "kind": "board",
      "time": "10:25",
      "title": {
        "he": "טופס: איך הוא בנוי",
        "ru": "Форма: как она устроена",
        "en": "A form: how it is built"
      },
      "text": {
        "he": "טופס אוסף מידע מהמשתמש ושולח אותו. זו הדרך העיקרית לקבל מידע מהמשתמש באתר.\n`<form action=\"thanks.html\">`\n`  <label>שם</label> <input type=\"text\" name=\"fullname\">`\n`  <input type=\"radio\" name=\"gender\"> זכר`\n`  <input type=\"radio\" name=\"gender\"> נקבה`\n`  <input type=\"checkbox\" name=\"agree\"> מסכים לתנאים`\n`  <input type=\"submit\" value=\"שלח\">`\n`</form>`\n`type` קובע איזה מידע מקבלים: `text` — טקסט, `radio` — אחת מכמה, `checkbox` — וי.\nלשני כפתורי ה־radio אותו `name=\"gender\"`, ולכן אפשר לסמן רק אחד.",
        "ru": "Форма собирает данные от пользователя и отправляет их. Это главный способ получить информацию от пользователя на сайте.\n`<form action=\"thanks.html\">`\n`  <label>שם</label> <input type=\"text\" name=\"fullname\">`\n`  <input type=\"radio\" name=\"gender\"> זכר`\n`  <input type=\"radio\" name=\"gender\"> נקבה`\n`  <input type=\"checkbox\" name=\"agree\"> מסכים לתנאים`\n`  <input type=\"submit\" value=\"שלח\">`\n`</form>`\n`type` решает, что вводят: `text` — текст, `radio` — один вариант из нескольких, `checkbox` — галочка.\nУ обеих кнопок radio одно `name=\"gender\"`, поэтому отметить можно только одну.",
        "en": "A form collects data from the user and sends it. It is the main way a site gets information from the user.\n`<form action=\"thanks.html\">`\n`  <label>שם</label> <input type=\"text\" name=\"fullname\">`\n`  <input type=\"radio\" name=\"gender\"> זכר`\n`  <input type=\"radio\" name=\"gender\"> נקבה`\n`  <input type=\"checkbox\" name=\"agree\"> מסכים לתנאים`\n`  <input type=\"submit\" value=\"שלח\">`\n`</form>`\n`type` decides what is entered: `text` — text, `radio` — one of several, `checkbox` — a tick.\nBoth radio buttons share `name=\"gender\"`, so only one can be selected."
      }
    },
    {
      "why": {
        "he": "באתר אמיתי `action` הוא כתובת של שרת שמקבל את הנתונים ושומר אותם (זה ה-back-end שנלמד בשנה הבאה). עכשיו אין שרת, ולכן שולחים לדף \"תודה\" — כדי שהמשתמש יראה שמשהו קרה.",
        "ru": "На настоящем сайте `action` — это адрес сервера, который принимает данные и сохраняет их (это back-end, его будут учить на втором году). Сейчас сервера нет, поэтому отправляем на страницу «спасибо», чтобы человек видел, что что-то произошло.",
        "en": "On a real site `action` is the address of a server that receives the data and stores it (that is the back-end, taught next year). There is no server now, so we send to a \"thank you\" page so the user sees that something happened."
      },
      "kind": "tip",
      "time": "10:29",
      "title": {
        "he": "submit ו־action",
        "ru": "submit и action",
        "en": "submit and action"
      },
      "text": {
        "he": "לחיצה על `<input type=\"submit\">` מפעילה את `action` של הטופס: הדפדפן עובר לדף שכתוב בו, למשל `thanks.html` — דף \"תודה על ההרשמה\".\nבלי `action` המשתמש נשאר באותו דף ולא רואה שמשהו קרה.\nבתרגיל המסכם: \"שלח\" בדף ההרשמה מוביל לדף האישור.",
        "ru": "Нажатие на `<input type=\"submit\">` запускает `action` формы: браузер переходит на страницу, которая там написана, например `thanks.html` — страницу «спасибо за регистрацию».\nБез `action` пользователь остаётся на той же странице и не видит, что что-то произошло.\nВ итоговом задании: «Отправить» на странице регистрации ведёт на страницу подтверждения.",
        "en": "Clicking `<input type=\"submit\">` runs the form's `action`: the browser goes to the page written there, e.g. `thanks.html` — a \"thanks for registering\" page.\nWithout `action` the user stays on the same page and sees nothing happen.\nIn the summary exercise: \"Send\" on the registration page leads to the confirmation page."
      }
    },
    {
      "why": {
        "he": "למה כל כך הרבה סוגים? כי כל סוג עוזר למשתמש: `email` בודק שיש @, `date` פותח לוח שנה, ובטלפון `email` פותח מקלדת עם @. פחות טעויות ופחות הקלדה.",
        "ru": "Зачем столько типов? Каждый помогает человеку: `email` проверяет, что есть @, `date` открывает календарь, а на телефоне `email` открывает клавиатуру с @. Меньше ошибок и меньше набора.",
        "en": "Why so many types? Each one helps the user: `email` checks there is an @, `date` opens a calendar, and on a phone `email` opens a keyboard with @. Fewer mistakes and less typing."
      },
      "kind": "tip",
      "time": "10:30",
      "title": {
        "he": "כל הסוגים של input",
        "ru": "Все типы input",
        "en": "All input types"
      },
      "text": {
        "he": "ב־VS Code כתבו `<input type=\"` — העורך יציע את כל הסוגים. יש הרבה ורובם מובנים מהשם: `color` — בחירת צבע, `password` — סיסמה בנקודות, `email` — מייל, `date` — תאריך, `reset` — מנקה את כל הטופס.",
        "ru": "В VS Code напишите `<input type=\"` — редактор сам предложит все типы. Их много, и почти все понятны по названию: `color` — выбор цвета, `password` — пароль точками, `email` — почта, `date` — дата, `reset` — очищает всю форму.",
        "en": "In VS Code type `<input type=\"` — the editor suggests every type. There are many, mostly clear from the name: `color` — a colour picker, `password` — a password shown as dots, `email` — email, `date` — a date, `reset` — clears the whole form."
      }
    },
    {
      "why": {
        "he": "`label` הוא לא רק טקסט: אם מחברים אותו לשדה, לחיצה על המילה מסמנת את השדה — נוח במיוחד ב-radio וב-checkbox, שהם קטנים. `textarea` ולא `text` כשמצפים לכמה שורות.",
        "ru": "`label` — не просто текст: если связать его с полем, нажатие на слово выбирает поле. Особенно удобно для radio и checkbox — они маленькие. `textarea`, а не `text`, — когда ждём несколько строк.",
        "en": "`label` is not just text: when linked to a field, clicking the word selects the field — especially handy for radio and checkbox, which are small. Use `textarea`, not `text`, when you expect several lines."
      },
      "kind": "talk",
      "time": "10:31",
      "title": {
        "he": "Form — אלמנטים חשובים",
        "ru": "Form — важные элементы",
        "en": "Form — important elements"
      },
      "text": {
        "he": "שקופית על טפסים — האלמנטים שישמשו בתרגיל המסכם:\nLabel — תווית, כדי לרשום מידע נלווה.\nText — הזנת מידע בשורה בודדת.\nTextarea — תיבת טקסט (הזנת מידע בסדר גודל גדול יותר).\nRadio — בחירת אופציה אחת מתוך כמה; צריך לשים לב שכולן תחת אותו שם בתכונה `name`.\nCheckbox — סימון \"וי\" למידע מסוים.\nDatalist — רשימה נגללת, בחירה מתוך רשימה.\nButton — כפתור. Submit — כפתור הגשה.",
        "ru": "Слайд о формах — элементы, которые понадобятся в итоговом задании:\nLabel — подпись, чтобы написать сопутствующую информацию.\nText — ввод в одну строку.\nTextarea — текстовое поле (для большего объёма текста).\nRadio — выбор одного варианта из нескольких; важно, чтобы у всех было одно и то же имя в атрибуте `name`.\nCheckbox — галочка для определённой информации.\nDatalist — выпадающий список, выбор из списка.\nButton — кнопка. Submit — кнопка отправки.",
        "en": "A slide on forms — the elements needed for the summary exercise:\nLabel — a caption for accompanying info.\nText — single-line input.\nTextarea — a text box (for larger input).\nRadio — choose one option out of several; they must all share the same `name` attribute.\nCheckbox — a tick for a certain piece of info.\nDatalist — a drop-down list, choose from a list.\nButton — a button. Submit — a submit button."
      }
    },
    {
      "why": {
        "he": "הפרויקט אוסף את כל מה שלמדנו: דפים וקישורים (21.10), טבלה וטופס (28.10). 4 דפים כי ככה נראה אתר עסק אמיתי: בית, הרשמה, אישור, מחירון. כדאי לבנות דף אחרי דף ולבדוק את הקישורים אחרי כל דף.",
        "ru": "Проект собирает всё, что прошли: страницы и ссылки (21.10), таблицу и форму (28.10). 4 страницы — потому что так выглядит настоящий сайт бизнеса: главная, регистрация, подтверждение, прайс. Лучше строить страницу за страницей и проверять ссылки после каждой.",
        "en": "The project gathers everything so far: pages and links (21.10), tables and forms (28.10). 4 pages because that is what a real business site looks like: home, sign-up, confirmation, prices. Build one page at a time and check the links after each."
      },
      "kind": "board",
      "time": "11:19",
      "title": {
        "he": "תרגיל מסכם — HTML",
        "ru": "Итоговое задание — HTML",
        "en": "Summary exercise — HTML"
      },
      "text": {
        "he": "צרו אתר דמיוני לעסק (אמיתי או מדומיין) עם לפחות 4 דפים:\n• דף הבית — שם העסק, לוגו, תמונת \"קונספט\" (הסביבה או המוצרים), הסבר קצר ותפריט שמקשר לדפים האחרים.\n• דף הרשמה — טופס `form`: שם, מייל, סיסמה, טלפון, מגדר (זכר / נקבה / מעדיף לא לענות), מוצרים אהובים (תיבת טקסט או סימון בחירות) ותיבת הסכמה לתנאי השימוש. \"שלח\" מוביל לדף אישור; אפשר לחזור לדף הבית.\n• דף אישור הרשמה (\"תודה על הרשמתך\") — קישור חזרה לדף הבית.\n• דף מחירון — לפחות 5 מוצרים בטבלה: שם המוצר, מחיר, זמינות (קיים / לא קיים במלאי), תמונה; ואפשרות לחזור לדף הבית.",
        "ru": "Создайте воображаемый сайт бизнеса (настоящего или придуманного) минимум из 4 страниц:\n• Главная — название бизнеса, логотип, «концепт»-картинка (обстановка или товары), короткое описание и меню со ссылками на другие страницы.\n• Регистрация — форма `form`: имя, почта, пароль, телефон, пол (мужской / женский / предпочитаю не отвечать), любимые товары (текстовое поле или отметки) и галочка согласия с условиями. «Отправить» ведёт на страницу подтверждения; можно вернуться на главную.\n• Подтверждение («спасибо за регистрацию») — ссылка обратно на главную.\n• Прайс-лист — минимум 5 товаров в таблице: название, цена, наличие (есть / нет на складе), картинка; и возможность вернуться на главную.",
        "en": "Build an imaginary website for a business (real or invented) with at least 4 pages:\n• Home — business name, logo, a \"concept\" image (the place or the products), a short description and a menu linking to the other pages.\n• Registration — a `form`: name, email, password, phone, gender (male / female / prefer not to say), favourite products (text box or checkboxes) and a checkbox to accept the terms. \"Send\" leads to the confirmation page; you can go back home.\n• Confirmation (\"thanks for registering\") — a link back to the home page.\n• Price list — at least 5 products in a table: product name, price, availability (in stock / out of stock), image; plus a way back to the home page."
      }
    },
    {
      "why": {
        "he": "למה עכשיו, אם אין עדיין CSS? כי במטלה הבאה מעצבים את אותו אתר. מי שנתן שמות טובים עכשיו (`price-table`, `signup-form`) רק כותב CSS. מי שלא — צריך לחזור לכל תגית ולהוסיף.",
        "ru": "Зачем сейчас, если CSS ещё нет? Потому что в следующем задании оформляют этот же сайт. Кто сейчас дал хорошие имена (`price-table`, `signup-form`), просто пишет CSS. Кто нет — вернётся к каждому тегу и будет дописывать.",
        "en": "Why now, if there is no CSS yet? Because the next task styles the same site. Whoever gives good names now (`price-table`, `signup-form`) just writes CSS. Whoever does not has to go back to every tag and add them."
      },
      "kind": "tip",
      "title": {
        "he": "class או ID לכל אלמנט",
        "ru": "class или ID у каждого элемента",
        "en": "A class or ID for every element"
      },
      "text": {
        "he": "בתרגיל המסכם צריך לתת לכל אלמנט `class` או `id` משלו, עם שמות הגיוניים ולפי מוסכמות נכונות. ל־`form` חייבים `class`. משתמשים בהם החל מהתרגיל הבא.",
        "ru": "В итоговом задании каждому элементу нужно дать свой `class` или `id`, с понятными именами и по правильным соглашениям. У `form` обязательно должен быть `class`. Они понадобятся начиная со следующего задания.",
        "en": "In the summary exercise every element needs its own `class` or `id`, with sensible names following proper conventions. The `form` must have a `class`. We start using them from the next exercise."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "מקובץ השיעור של המרצה: העלאת קובץ וטקסט על הכפתור",
        "ru": "Из файла урока преподавателя: загрузка файла и текст на кнопке",
        "en": "From the teacher's lesson file: file upload and button text"
      },
      "text": {
        "he": "בטופס לדוגמה של המרצה (בובות \"רחוב סומסום\") יש עוד שני דברים:\n`<input type=\"file\">` — כפתור \"בחר קובץ\", למשל תמונה.\n`<input type=\"submit\" value=\"הגש טופס\">` — `value` קובע מה כתוב על הכפתור.",
        "ru": "В примере формы преподавателя (куклы «Улицы Сезам») есть ещё две вещи:\n`<input type=\"file\">` — кнопка «Выбрать файл», например картинку.\n`<input type=\"submit\" value=\"הגש טופס\">` — `value` задаёт надпись на кнопке.",
        "en": "The teacher's sample form (the Sesame Street puppets) has two more things:\n`<input type=\"file\">` — a \"Choose file\" button, e.g. for a picture.\n`<input type=\"submit\" value=\"הגש טופס\">` — `value` sets the text on the button."
      },
      "math": [
        "<form action=\"thanks.html\">",
        "  <label>Picture</label>",
        "  <input type=\"file\">",
        "  <input type=\"submit\" value=\"Send\">",
        "</form>"
      ],
      "why": {
        "he": "בלי `value` הדפדפן כותב על הכפתור טקסט משלו (\"Submit\" או \"שלח\"), ובכל דפדפן הוא קצת אחר. עם `value` אתם מחליטים. ו-`type=\"file\"` רק בוחר קובץ — כדי שהוא באמת יעלה לשרת צריך back-end, שנלמד בהמשך.",
        "ru": "Без `value` браузер пишет на кнопке свой текст («Submit» или «Отправить»), и в каждом браузере немного разный. С `value` решаешь ты. А `type=\"file\"` только выбирает файл — чтобы он правда попал на сервер, нужен back-end, его будут проходить позже.",
        "en": "Without `value` the browser writes its own text on the button (\"Submit\" or similar), slightly different in each browser. With `value` you decide. And `type=\"file\"` only picks a file — for it to really reach a server you need a back-end, which comes later."
      },
      "_src": "pass-0311"
    },
    {
      "kind": "tip",
      "title": {
        "he": "מקובץ השיעור: `th` מול `td` — שתי טעויות נפוצות",
        "ru": "Из файла урока: `th` и `td` — две частые ошибки",
        "en": "From the lesson file: `th` vs `td` — two common mistakes"
      },
      "text": {
        "he": "בקובץ של המרצה (טבלת מחירים) יש `<th>size<th/>`. זו טעות הקלדה: תגית סוגרת היא `</th>`, עם הלוכסן לפני השם. ובקובץ של שיעור 2 כל התאים בטבלה הם `th`. `th` הוא רק לכותרת של עמודה. את הנתונים שמים ב-`td`.",
        "ru": "В файле преподавателя (таблица цен) написано `<th>size<th/>`. Это опечатка: закрывающий тег — `</th>`, косая черта перед именем. А в файле урока 2 все ячейки таблицы — `th`. `th` — только заголовок столбца. Данные кладут в `td`.",
        "en": "In the teacher's file (a price table) there is `<th>size<th/>`. That is a typo: the closing tag is `</th>`, with the slash before the name. And in the lesson 2 file every table cell is a `th`. `th` is only for a column heading. Data goes in `td`."
      },
      "math": [
        "<tr>",
        "  <th>size</th>  <th>price</th>",
        "</tr>",
        "<tr>",
        "  <td>10mm</td>  <td>5$</td>",
        "</tr>"
      ],
      "why": {
        "he": "גם כאן HTML \"סלחנית\": הדפדפן מציג את הטבלה למרות הטעויות, ולכן קל לא לשים לב. `th` נראה מודגש ובמרכז, ולכן טבלה שכולה `th` נראית \"צועקת\". שוב הדימוי מהשיעור: `tr` = מדף, `th` = שלט על המדף, `td` = הקופסאות.",
        "ru": "И здесь HTML «прощает»: браузер показывает таблицу, несмотря на ошибки, поэтому их легко не заметить. `th` выглядит жирным и по центру, поэтому таблица из одних `th` «кричит». Снова сравнение с урока: `tr` — полка, `th` — табличка на полке, `td` — коробки.",
        "en": "Again HTML \"forgives\": the browser shows the table despite the mistakes, so they are easy to miss. `th` looks bold and centred, so a table of only `th` \"shouts\". The picture from class again: `tr` = a shelf, `th` = the sign on the shelf, `td` = the boxes."
      },
      "_src": "pass-0311"
    }
  ],
  "review": [
    {
      "title": {
        "he": "id ו־class",
        "ru": "id и class",
        "en": "id and class"
      },
      "text": {
        "he": "`id` — לאלמנט אחד בלבד, `class` — להרבה אלמנטים.",
        "ru": "`id` — только одному элементу, `class` — многим.",
        "en": "`id` — one element only, `class` — many elements."
      }
    },
    {
      "title": {
        "he": "submit ו־action",
        "ru": "submit и action",
        "en": "submit and action"
      },
      "text": {
        "he": "`submit` מפעיל את `action` של הטופס ← הדפדפן עובר לדף שכתוב בו.",
        "ru": "`submit` запускает `action` формы → браузер переходит на страницу из него.",
        "en": "`submit` runs the form's `action` → the browser opens that page."
      }
    },
    {
      "title": {
        "he": "רקע לדף",
        "ru": "Фон страницы",
        "en": "Page background"
      },
      "text": {
        "he": "ב־`<head>` → `<style>` → `body { background-image: url(\"…\"); background-size: cover; }`.",
        "ru": "В `<head>` → `<style>` → `body { background-image: url(\"…\"); background-size: cover; }`.",
        "en": "In `<head>` → `<style>` → `body { background-image: url(\"…\"); background-size: cover; }`."
      }
    },
    {
      "title": {
        "he": "ארבע תגיות של טבלה",
        "ru": "Четыре тега таблицы",
        "en": "Four table tags"
      },
      "text": {
        "he": "`<table>` — טבלה, `<tr>` — שורה, `<th>` — תא כותרת, `<td>` — תא רגיל.",
        "ru": "`<table>` — таблица, `<tr>` — строка, `<th>` — ячейка-заголовок, `<td>` — обычная ячейка.",
        "en": "`<table>` table, `<tr>` row, `<th>` header cell, `<td>` normal cell."
      }
    },
    {
      "title": {
        "he": "הסדר",
        "ru": "Порядок",
        "en": "The order"
      },
      "text": {
        "he": "table ← tr ← th/td. כל תא יושב בתוך שורה.",
        "ru": "table → tr → th/td. Каждая ячейка внутри строки.",
        "en": "table → tr → th/td. Every cell sits inside a row."
      }
    },
    {
      "title": {
        "he": "תכונות של טבלה",
        "ru": "Атрибуты таблицы",
        "en": "Table attributes"
      },
      "text": {
        "he": "`width` — רוחב, `border` — מסגרת (בלעדיה אין קווים), `align=\"center\"` — באמצע.",
        "ru": "`width` — ширина, `border` — рамка (без неё нет линий), `align=\"center\"` — по центру.",
        "en": "`width` — width, `border` — frame (no lines without it), `align=\"center\"` — centred."
      }
    },
    {
      "title": {
        "he": "מה אפשר לשים בתא",
        "ru": "Что можно положить в ячейку",
        "en": "What a cell can hold"
      },
      "text": {
        "he": "טקסט, קישור `<a href>`, תמונה `<img>` — כל דבר.",
        "ru": "Текст, ссылку `<a href>`, картинку `<img>` — что угодно.",
        "en": "Text, a link `<a href>`, an image `<img>` — anything."
      }
    },
    {
      "title": {
        "he": "אלמנטים של טופס",
        "ru": "Элементы формы",
        "en": "Form elements"
      },
      "text": {
        "he": "Text — שורה, Textarea — טקסט ארוך, Radio — אחת מכמה (אותו `name`), Checkbox — וי, Datalist — רשימה, Submit — הגשה.",
        "ru": "Text — строка, Textarea — длинный текст, Radio — один из нескольких (одно `name`), Checkbox — галочка, Datalist — список, Submit — отправка.",
        "en": "Text — one line, Textarea — long text, Radio — one of several (same `name`), Checkbox — a tick, Datalist — a list, Submit — submit."
      }
    },
    {
      "title": {
        "he": "התרגיל המסכם",
        "ru": "Итоговое задание",
        "en": "The summary exercise"
      },
      "text": {
        "he": "4 דפים: בית, הרשמה (form), אישור הרשמה, מחירון (טבלה של 5+ מוצרים). לכל אלמנט class או id.",
        "ru": "4 страницы: главная, регистрация (form), подтверждение, прайс-лист (таблица из 5+ товаров). У каждого элемента class или id.",
        "en": "4 pages: home, registration (form), confirmation, price list (a table of 5+ products). Every element gets a class or id."
      }
    }
  ],
  "tasks": {
    "groups": {
      "tbl": {
        "he": "תרגילון: טבלה",
        "ru": "Упражнение: таблица",
        "en": "Mini-exercise: a table"
      },
      "site": {
        "he": "תרגיל מסכם: אתר של עסק",
        "ru": "Итоговое задание: сайт бизнеса",
        "en": "Summary exercise: a business website"
      },
      "files": {
        "he": "מקובצי השיעור של המרצה",
        "ru": "Из файлов урока преподавателя",
        "en": "From the teacher's lesson files"
      }
    },
    "teacher": [
      {
        "id": "t-tbl-1",
        "group": "tbl",
        "label": {
          "he": "כותרת",
          "ru": "Заголовок",
          "en": "Header"
        },
        "kind": "choice",
        "text": {
          "he": "בתרגילון צריך עמודת כותרת (header). באיזו תגית כותבים תא כותרת?",
          "ru": "В упражнении нужен заголовок (header). Каким тегом пишут ячейку-заголовок?",
          "en": "The exercise needs a header. Which tag makes a header cell?"
        },
        "options": [
          "`<td>`",
          "`<tr>`",
          "`<th>`",
          "`<h1>`"
        ],
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "h בסוף — מ־header.",
            "ru": "h в конце — от header.",
            "en": "The h at the end is for header."
          },
          {
            "he": "`<tr>` היא שורה, לא תא.",
            "ru": "`<tr>` — строка, а не ячейка.",
            "en": "`<tr>` is a row, not a cell."
          }
        ],
        "solution": [
          {
            "he": "`<th>` (table header) — תא כותרת; הוא מודגש וממורכז.",
            "ru": "`<th>` (table header) — ячейка-заголовок; жирная и по центру.",
            "en": "`<th>` (table header) is a header cell; bold and centred."
          },
          "<tr><th>שם</th><th>תמונה</th><th>קישור</th></tr>"
        ]
      },
      {
        "id": "t-tbl-2",
        "group": "tbl",
        "label": {
          "he": "תמונה בתא",
          "ru": "Картинка в ячейке",
          "en": "Image in a cell"
        },
        "kind": "choice",
        "text": {
          "he": "איך שמים תמונה בתא של הטבלה?",
          "ru": "Как положить картинку в ячейку таблицы?",
          "en": "How do you put an image in a table cell?"
        },
        "options": [
          "`<tr src=\"elmo.jpg\">`",
          "`<td><img src=\"elmo.jpg\" width=\"40%\"></td>`",
          "`<img><td src=\"elmo.jpg\"></td></img>`",
          "`<td img=\"elmo.jpg\"></td>`"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "תמונה תמיד נוצרת עם `<img src>`.",
            "ru": "Картинку всегда делают через `<img src>`.",
            "en": "An image is always made with `<img src>`."
          },
          {
            "he": "התמונה יושבת בתוך התא, כלומר בין `<td>` ל־`</td>`.",
            "ru": "Картинка сидит внутри ячейки, то есть между `<td>` и `</td>`.",
            "en": "The image sits inside the cell, between `<td>` and `</td>`."
          }
        ],
        "solution": [
          {
            "he": "התא `<td>` הוא \"קופסה\", ובתוכו שמים `<img>` רגיל.",
            "ru": "Ячейка `<td>` — «коробка», внутри неё обычный `<img>`.",
            "en": "The cell `<td>` is a \"box\" with a normal `<img>` inside."
          },
          "<td><img src=\"elmo.jpg\" width=\"40%\"></td>"
        ]
      },
      {
        "id": "t-tbl-3",
        "group": "tbl",
        "label": {
          "he": "שורות",
          "ru": "Строки",
          "en": "Rows"
        },
        "kind": "number",
        "text": {
          "he": "כתבו טבלה עם שורת כותרת אחת (`<th>`) ועוד 3 שורות של נתונים (`<td>`). כמה תגיות `<tr>` פותחות יהיו בקוד שלכם?",
          "ru": "Напиши таблицу: одна строка-заголовок (`<th>`) и ещё 3 строки данных (`<td>`). Сколько открывающих тегов `<tr>` будет в твоём коде?",
          "en": "Write a table with one header row (`<th>`) and 3 data rows (`<td>`). How many opening `<tr>` tags will your code have?"
        },
        "answer": {
          "value": "4"
        },
        "hints": [
          {
            "he": "כל שורה בטבלה מתחילה ב־`<tr>` — גם שורת הכותרת.",
            "ru": "Каждая строка таблицы начинается с `<tr>` — и строка-заголовок тоже.",
            "en": "Every table row starts with `<tr>` — the header row too."
          }
        ],
        "solution": [
          "<table border=\"1\">",
          "  <tr><th>…</th><th>…</th></tr>",
          "  <tr><td>…</td><td>…</td></tr>",
          "  <tr><td>…</td><td>…</td></tr>",
          "  <tr><td>…</td><td>…</td></tr>",
          "</table>",
          {
            "he": "שורת כותרת אחת + 3 שורות נתונים: בקוד 4 תגיות `<tr>`.",
            "ru": "Одна строка-заголовок + 3 строки данных: в коде 4 тега `<tr>`.",
            "en": "One header row + 3 data rows: the code has 4 `<tr>` tags."
          }
        ]
      },
      {
        "id": "t-site-1",
        "group": "site",
        "label": {
          "he": "כמה דפים",
          "ru": "Сколько страниц",
          "en": "How many pages"
        },
        "kind": "number",
        "text": {
          "he": "בתרגיל המסכם כל דף באתר הוא קובץ `.html` נפרד, והתפריט מקשר ביניהם עם `<a href>`. כמה קובצי `.html` לפחות תצטרכו לכתוב?",
          "ru": "В итоговом задании каждая страница сайта — отдельный файл `.html`, а меню связывает их через `<a href>`. Сколько файлов `.html` минимум тебе придётся написать?",
          "en": "In the summary exercise every page of the site is a separate `.html` file, and the menu links them with `<a href>`. At least how many `.html` files will you need to write?"
        },
        "answer": {
          "value": "4"
        },
        "hints": [
          {
            "he": "לכל דף מהתרגיל — קובץ משלו: בית, הרשמה, …",
            "ru": "Каждой странице из задания — свой файл: главная, регистрация, …",
            "en": "Each page of the exercise gets its own file: home, registration, …"
          }
        ],
        "solution": [
          {
            "he": "דף הבית, דף הרשמה, דף אישור הרשמה, דף מחירון — כל אחד בקובץ משלו.",
            "ru": "Главная, регистрация, подтверждение регистрации, прайс-лист — каждая в своём файле.",
            "en": "Home, registration, registration confirmation, price list — each in its own file."
          },
          {
            "he": "התפריט בדף הבית, למשל:",
            "ru": "Меню на главной, например:",
            "en": "The menu on the home page, for example:"
          },
          "<a href=\"register.html\">…</a>  <a href=\"prices.html\">…</a>",
          {
            "he": "סה״כ 4 קבצים.",
            "ru": "Итого 4 файла.",
            "en": "That is 4 files."
          }
        ]
      },
      {
        "id": "t-site-2",
        "group": "site",
        "label": {
          "he": "מחירון",
          "ru": "Прайс-лист",
          "en": "Price list"
        },
        "kind": "number",
        "text": {
          "he": "כתבו את טבלת המחירון: שורת כותרת עם `<th>` (שם המוצר, מחיר, זמינות, תמונה) ובדיוק 5 מוצרים, כל מוצר בשורת `<tr>` משלו. כמה תגיות `<td>` יהיו בקוד שלכם?",
          "ru": "Напиши таблицу прайс-листа: строка-заголовок из `<th>` (название, цена, наличие, картинка) и ровно 5 товаров, каждый в своей строке `<tr>`. Сколько тегов `<td>` будет в твоём коде?",
          "en": "Write the price-list table: a header row of `<th>` (name, price, availability, image) and exactly 5 products, each in its own `<tr>` row. How many `<td>` tags will your code have?"
        },
        "answer": {
          "value": "20"
        },
        "hints": [
          {
            "he": "שורת הכותרת בנויה מ־`<th>`, לא מ־`<td>`.",
            "ru": "Строка-заголовок состоит из `<th>`, а не `<td>`.",
            "en": "The header row is made of `<th>`, not `<td>`."
          },
          {
            "he": "כתבו שורת מוצר אחת: כמה `<td>` יש בה? יש 5 שורות כאלה.",
            "ru": "Напиши одну строку товара: сколько в ней `<td>`? Таких строк 5.",
            "en": "Write one product row: how many `<td>` does it have? There are 5 such rows."
          }
        ],
        "solution": [
          "<table border=\"1\">",
          "  <tr><th>שם</th><th>מחיר</th><th>זמינות</th><th>תמונה</th></tr>",
          "  <tr><td>…</td><td>…</td><td>…</td><td>…</td></tr>   × 5",
          "</table>",
          {
            "he": "בכל שורת מוצר 4 תגיות `<td>`, ויש 5 שורות מוצרים: 20. שורת הכותרת היא `<th>` ולא נספרת.",
            "ru": "В каждой строке товара 4 тега `<td>`, строк с товарами 5: всего 20. Строка-заголовок — `<th>`, не считается.",
            "en": "Each product row has 4 `<td>` tags, and there are 5 product rows: 20. The header row is `<th>` and is not counted."
          }
        ]
      },
      {
        "id": "t-site-3",
        "group": "site",
        "label": {
          "he": "טופס",
          "ru": "Форма",
          "en": "Form"
        },
        "kind": "text",
        "text": {
          "he": "באיזו תגית עוטפים את כל השדות של דף ההרשמה? (שם התגית)",
          "ru": "Каким тегом оборачивают все поля страницы регистрации? (имя тега)",
          "en": "Which tag wraps all the fields of the registration page? (tag name)"
        },
        "answer": {
          "accept": [
            "form",
            "<form>",
            "<form></form>"
          ]
        },
        "hints": [
          {
            "he": "הדרישה בתרגיל: \"דף ההרשמה יהיה טופס …\".",
            "ru": "В задании: «страница регистрации будет формой …».",
            "en": "The exercise says: \"the registration page will be a … \"."
          },
          {
            "he": "טופס באנגלית.",
            "ru": "«Форма» по-английски.",
            "en": "The English word for this."
          }
        ],
        "solution": [
          {
            "he": "כל שדות ההרשמה יושבים בתוך `<form>` … `</form>`, ולו צריך לתת `class`.",
            "ru": "Все поля регистрации внутри `<form>` … `</form>`, и ему нужен `class`.",
            "en": "All registration fields go inside `<form>` … `</form>`, which needs a `class`."
          },
          "<form class=\"register-form\"> … </form>"
        ]
      },
      {
        "id": "t-site-4",
        "group": "site",
        "label": {
          "he": "מגדר",
          "ru": "Пол",
          "en": "Gender"
        },
        "kind": "choice",
        "text": {
          "he": "בטופס ההרשמה בוחרים מגדר: זכר / נקבה / מעדיף לא לענות — רק אחת. איזה אלמנט מתאים?",
          "ru": "В форме выбирают пол: мужской / женский / предпочитаю не отвечать — только один. Какой элемент подходит?",
          "en": "In the form you pick a gender: male / female / prefer not to say — only one. Which element fits?"
        },
        "options": [
          "Checkbox",
          "Radio",
          "Textarea",
          "Submit"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "צריך בדיוק אופציה אחת מתוך כמה.",
            "ru": "Нужен ровно один вариант из нескольких.",
            "en": "You need exactly one option out of several."
          },
          {
            "he": "Checkbox מאפשר לסמן כמה יחד.",
            "ru": "Checkbox позволяет отметить несколько сразу.",
            "en": "Checkbox lets you tick several together."
          }
        ],
        "solution": [
          {
            "he": "Radio — בחירת אופציה אחת מתוך כמה.",
            "ru": "Radio — выбор одного варианта из нескольких.",
            "en": "Radio — choose one option out of several."
          },
          {
            "he": "לכל שלוש האופציות נותנים אותו `name`, ואז אפשר לבחור רק אחת.",
            "ru": "Всем трём вариантам даём одно `name`, тогда можно выбрать только один.",
            "en": "All three options get the same `name`, so only one can be picked."
          }
        ]
      },
      {
        "id": "t-site-5",
        "group": "site",
        "label": {
          "he": "תנאי שימוש",
          "ru": "Условия",
          "en": "Terms"
        },
        "kind": "text",
        "text": {
          "he": "בסוף הטופס יש \"אני מסכים לתנאי השימוש\" עם סימון וי. איזה אלמנט זה? (באנגלית)",
          "ru": "В конце формы — «я согласен с условиями» с галочкой. Какой это элемент? (по-английски)",
          "en": "At the end of the form there is \"I accept the terms\" with a tick. Which element is it?"
        },
        "answer": {
          "accept": [
            "checkbox",
            "check box",
            "type=\"checkbox\"",
            "type=checkbox",
            "input type=\"checkbox\""
          ]
        },
        "hints": [
          {
            "he": "בשקופית: \"סימון וי למידע מסוים\".",
            "ru": "На слайде: «галочка для определённой информации».",
            "en": "On the slide: \"a tick for a certain piece of info\"."
          },
          {
            "he": "check + box.",
            "ru": "check + box.",
            "en": "check + box."
          }
        ],
        "solution": [
          {
            "he": "Checkbox — תיבת סימון שאפשר לסמן או להשאיר ריקה.",
            "ru": "Checkbox — поле-галочка, которое можно отметить или оставить пустым.",
            "en": "Checkbox — a box you can tick or leave empty."
          }
        ]
      },
      {
        "id": "fz1",
        "group": "files",
        "label": "value",
        "kind": "text",
        "text": {
          "he": "מה ייכתב על הכפתור?\n`<input type=\"submit\" value=\"Send\">`",
          "ru": "Что будет написано на кнопке?\n`<input type=\"submit\" value=\"Send\">`",
          "en": "What text is on the button?\n`<input type=\"submit\" value=\"Send\">`"
        },
        "answer": {
          "accept": [
            "Send"
          ]
        },
        "hints": [
          {
            "he": "`value` הוא הטקסט של הכפתור.",
            "ru": "`value` — это надпись на кнопке.",
            "en": "`value` is the button text."
          }
        ],
        "solution": [
          {
            "he": "תשובה: Send",
            "ru": "Ответ: Send",
            "en": "Answer: Send"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "fz2",
        "group": "files",
        "label": "</th>",
        "kind": "choice",
        "text": {
          "he": "איך נכון לסגור תא כותרת?",
          "ru": "Как правильно закрыть ячейку-заголовок?",
          "en": "How do you correctly close a header cell?"
        },
        "options": [
          "`<th/>`",
          "`</th>`",
          "`<th>`",
          "`<\\th>`"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "בתגית סוגרת הלוכסן בא מיד אחרי `<`.",
            "ru": "В закрывающем теге косая черта идёт сразу после `<`.",
            "en": "In a closing tag the slash comes right after `<`."
          }
        ],
        "solution": [
          {
            "he": "תשובה: `</th>`",
            "ru": "Ответ: `</th>`",
            "en": "Answer: `</th>`"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "fz3",
        "group": "files",
        "label": "file",
        "kind": "choice",
        "text": {
          "he": "איזה input נותן למשתמש לבחור תמונה מהמחשב?",
          "ru": "Какой input даёт выбрать картинку с компьютера?",
          "en": "Which input lets the user pick a picture from the computer?"
        },
        "options": [
          "`type=\"text\"`",
          "`type=\"radio\"`",
          "`type=\"file\"`",
          "`type=\"submit\"`"
        ],
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "תמונה היא קובץ.",
            "ru": "Картинка — это файл.",
            "en": "A picture is a file."
          }
        ],
        "solution": [
          {
            "he": "תשובה: `type=\"file\"`",
            "ru": "Ответ: `type=\"file\"`",
            "en": "Answer: `type=\"file\"`"
          }
        ],
        "_src": "pass-0311"
      }
    ],
    "ai": [
      {
        "id": "ai-1",
        "level": 1,
        "label": {
          "he": "שורה",
          "ru": "Строка",
          "en": "Row"
        },
        "kind": "text",
        "text": {
          "he": "איזו תגית יוצרת שורה בטבלה? (שם התגית)",
          "ru": "Какой тег создаёт строку таблицы? (имя тега)",
          "en": "Which tag creates a table row? (tag name)"
        },
        "answer": {
          "accept": [
            "tr",
            "<tr>",
            "<tr></tr>"
          ]
        },
        "hints": [
          {
            "he": "table row — באותיות הראשונות.",
            "ru": "table row — по первым буквам.",
            "en": "table row — by the first letters."
          }
        ],
        "solution": [
          {
            "he": "`<tr>` = table row.",
            "ru": "`<tr>` = table row.",
            "en": "`<tr>` = table row."
          },
          "<tr><td>1</td><td>2</td></tr>"
        ]
      },
      {
        "id": "ai-2",
        "level": 1,
        "label": {
          "he": "מסגרת",
          "ru": "Рамка",
          "en": "Border"
        },
        "kind": "choice",
        "text": {
          "he": "כתבנו טבלה בלי שום תכונה, והקווים בין התאים לא נראים. מה להוסיף ל־`<table>`?",
          "ru": "Мы написали таблицу без атрибутов, и линий между ячейками не видно. Что добавить в `<table>`?",
          "en": "We wrote a table with no attributes and the lines between cells are invisible. What do we add to `<table>`?"
        },
        "options": [
          "`align=\"center\"`",
          "`border=\"1\"`",
          "`width=\"600\"`",
          "`id=\"lines\"`"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "מסגרת באנגלית היא border.",
            "ru": "Рамка по-английски — border.",
            "en": "A frame is a border."
          }
        ],
        "solution": [
          {
            "he": "`border` קובע את עובי המסגרת; בלעדיו אין קווים.",
            "ru": "`border` задаёт толщину рамки; без него линий нет.",
            "en": "`border` sets the frame thickness; without it there are no lines."
          },
          "<table border=\"1\">"
        ]
      },
      {
        "id": "ai-3",
        "level": 1,
        "label": {
          "he": "תמונת רקע",
          "ru": "Фоновая картинка",
          "en": "Background image"
        },
        "kind": "text",
        "text": {
          "he": "איזו תכונת CSS קובעת תמונת רקע ל־body? (כתבו את שם התכונה)",
          "ru": "Какое свойство CSS задаёт фоновую картинку для body? (имя свойства)",
          "en": "Which CSS property sets a background image for body? (property name)"
        },
        "answer": {
          "accept": [
            "background-image",
            "background-image:",
            "background image"
          ]
        },
        "hints": [
          {
            "he": "שתי מילים באנגלית עם מקף: רקע + תמונה.",
            "ru": "Два английских слова через дефис: фон + картинка.",
            "en": "Two English words with a hyphen: background + image."
          }
        ],
        "solution": [
          "background-image: url(\"background.jpg\");",
          {
            "he": "התשובה: `background-image`.",
            "ru": "Ответ: `background-image`.",
            "en": "Answer: `background-image`."
          }
        ]
      },
      {
        "id": "ai-4",
        "level": 2,
        "label": {
          "he": "ספירת td",
          "ru": "Считаем td",
          "en": "Count td"
        },
        "kind": "number",
        "text": {
          "he": "כמה תאים `<td>` יש בטבלה?\n`<tr><th>שם</th><th>תמונה</th><th>קישור</th></tr>`\n`<tr><td>…</td><td>…</td><td>…</td></tr>`\n`<tr><td>…</td><td>…</td><td>…</td></tr>`\n`<tr><td>…</td><td>…</td><td>…</td></tr>`",
          "ru": "Сколько ячеек `<td>` в таблице?\n`<tr><th>שם</th><th>תמונה</th><th>קישור</th></tr>`\n`<tr><td>…</td><td>…</td><td>…</td></tr>`\n`<tr><td>…</td><td>…</td><td>…</td></tr>`\n`<tr><td>…</td><td>…</td><td>…</td></tr>`",
          "en": "How many `<td>` cells does the table have?\n`<tr><th>שם</th><th>תמונה</th><th>קישור</th></tr>`\n`<tr><td>…</td><td>…</td><td>…</td></tr>`\n`<tr><td>…</td><td>…</td><td>…</td></tr>`\n`<tr><td>…</td><td>…</td><td>…</td></tr>`"
        },
        "answer": {
          "value": "9"
        },
        "hints": [
          {
            "he": "השורה הראשונה בנויה מ־`<th>` — היא לא נספרת.",
            "ru": "Первая строка из `<th>` — её не считаем.",
            "en": "The first row is made of `<th>` — do not count it."
          },
          {
            "he": "כמה שורות של `<td>` יש, וכמה תאים בכל אחת?",
            "ru": "Сколько строк с `<td>` и сколько ячеек в каждой?",
            "en": "How many `<td>` rows, and how many cells in each?"
          }
        ],
        "solution": [
          {
            "he": "שורה 1: שלושה `<th>` — לא `<td>`.",
            "ru": "Строка 1: три `<th>` — не `<td>`.",
            "en": "Row 1: three `<th>` — not `<td>`."
          },
          {
            "he": "שורות 2–4: בכל אחת 3 תאים `<td>`.",
            "ru": "Строки 2–4: в каждой 3 ячейки `<td>`.",
            "en": "Rows 2–4: 3 `<td>` cells each."
          },
          "3 × 3 = 9"
        ]
      },
      {
        "id": "ai-5",
        "level": 2,
        "label": {
          "he": "הרקע לא עובד",
          "ru": "Фон не работает",
          "en": "Background not working"
        },
        "kind": "choice",
        "text": {
          "he": "איזה קוד ב־`<head>` באמת ייתן לדף תמונת רקע שמכסה את כל המסך?",
          "ru": "Какой код в `<head>` действительно даст странице фоновую картинку на весь экран?",
          "en": "Which code in `<head>` really gives the page a full-screen background image?"
        },
        "options": [
          "`body { background-image: url(\"bg.jpg\"); background-size: cover; }`",
          "`<style> body { background-image: url(\"bg.jpg\"); background-size: cover; } </style>`",
          "`<body background-image=\"bg.jpg\" size=\"cover\">`",
          "`<style> body { background-image: bg.jpg; } </style>`"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "בלי `<style>` הדפדפן לא יודע שזה עיצוב.",
            "ru": "Без `<style>` браузер не знает, что это оформление.",
            "en": "Without `<style>` the browser does not know it is styling."
          },
          {
            "he": "שם הקובץ נכתב בתוך `url(\"…\")`.",
            "ru": "Имя файла пишут внутри `url(\"…\")`.",
            "en": "The file name goes inside `url(\"…\")`."
          }
        ],
        "solution": [
          {
            "he": "בלי `<style>` הדפדפן לא מבין שזה עיצוב; ל־`<body>` אין תכונות `background-image` ו־`size`; ושם הקובץ חייב להיות בתוך `url(…)`.",
            "ru": "Без `<style>` браузер не поймёт, что это оформление; у `<body>` нет атрибутов `background-image` и `size`; а имя файла должно быть внутри `url(…)`.",
            "en": "Without `<style>` the browser does not see styling; `<body>` has no `background-image` or `size` attributes; and the file name must be inside `url(…)`."
          },
          "<style> body { background-image: url(\"bg.jpg\"); background-size: cover; } </style>"
        ]
      },
      {
        "id": "ai-6",
        "level": 2,
        "label": {
          "he": "טקסט ארוך",
          "ru": "Длинный текст",
          "en": "Long text"
        },
        "kind": "choice",
        "text": {
          "he": "בטופס רוצים שדה שבו המשתמש כותב כמה שורות על המוצרים שהוא אוהב. איזה אלמנט מתאים?",
          "ru": "В форме нужно поле, где пользователь пишет несколько строк о любимых товарах. Какой элемент подходит?",
          "en": "The form needs a field where the user writes several lines about favourite products. Which element fits?"
        },
        "options": [
          "Text",
          "Textarea",
          "Radio",
          "Button"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "Text — רק שורה אחת.",
            "ru": "Text — только одна строка.",
            "en": "Text is only one line."
          }
        ],
        "solution": [
          {
            "he": "Textarea — תיבת טקסט להזנת מידע בסדר גודל גדול יותר.",
            "ru": "Textarea — поле для большего объёма текста.",
            "en": "Textarea — a text box for larger input."
          }
        ]
      },
      {
        "id": "ai-7",
        "level": 2,
        "label": {
          "he": "שורות במחירון",
          "ru": "Строки прайса",
          "en": "Price list rows"
        },
        "kind": "number",
        "text": {
          "he": "כתבו מחירון ב־HTML: שורת כותרת עם 4 תגיות `<th>`, ו־7 מוצרים, כל מוצר ב־`<tr>` משלו עם 4 תגיות `<td>`. כמה תגיות תא (`<th>` וגם `<td>`) יהיו בקוד בסך הכול?",
          "ru": "Напиши прайс-лист на HTML: строка-заголовок из 4 тегов `<th>` и 7 товаров, каждый в своей `<tr>` с 4 тегами `<td>`. Сколько всего тегов-ячеек (и `<th>`, и `<td>`) будет в коде?",
          "en": "Write a price list in HTML: a header row of 4 `<th>` tags and 7 products, each in its own `<tr>` with 4 `<td>` tags. How many cell tags (`<th>` and `<td>`) will the code have in total?"
        },
        "answer": {
          "value": "32"
        },
        "hints": [
          {
            "he": "כמה שורות `<tr>` יהיו בקוד, כולל שורת הכותרת?",
            "ru": "Сколько строк `<tr>` будет в коде, включая заголовок?",
            "en": "How many `<tr>` rows will the code have, including the header?"
          },
          {
            "he": "8 שורות `<tr>`, ובכל אחת 4 תאים.",
            "ru": "8 строк `<tr>`, в каждой 4 ячейки.",
            "en": "8 `<tr>` rows, 4 cells each."
          }
        ],
        "solution": [
          "<tr><th>…</th><th>…</th><th>…</th><th>…</th></tr>",
          "<tr><td>…</td><td>…</td><td>…</td><td>…</td></tr>   × 7",
          {
            "he": "שורות `<tr>`: 1 (כותרת) + 7 (מוצרים) = 8, בכל אחת 4 תאים.",
            "ru": "Строк `<tr>`: 1 (заголовок) + 7 (товары) = 8, в каждой 4 ячейки.",
            "en": "`<tr>` rows: 1 (header) + 7 (products) = 8, 4 cells each."
          },
          {
            "he": "סה״כ 32 תגיות תא: 4 `<th>` ו־28 `<td>`.",
            "ru": "Всего 32 тега-ячейки: 4 `<th>` и 28 `<td>`.",
            "en": "In total 32 cell tags: 4 `<th>` and 28 `<td>`."
          }
        ]
      },
      {
        "id": "ai-8",
        "level": 3,
        "label": {
          "he": "מצאו את הטעות",
          "ru": "Найди ошибку",
          "en": "Find the mistake"
        },
        "kind": "choice",
        "text": {
          "he": "מה לא בסדר בקוד?\n`<table border=\"1\">`\n`  <td>א</td><td>ב</td>`\n`</table>`",
          "ru": "Что не так в коде?\n`<table border=\"1\">`\n`  <td>א</td><td>ב</td>`\n`</table>`",
          "en": "What is wrong with this code?\n`<table border=\"1\">`\n`  <td>א</td><td>ב</td>`\n`</table>`"
        },
        "options": [
          {
            "he": "חסרה שורה `<tr>` סביב התאים",
            "ru": "Нет строки `<tr>` вокруг ячеек",
            "en": "There is no `<tr>` row around the cells"
          },
          {
            "he": "צריך `<th>` במקום `<td>`",
            "ru": "Нужно `<th>` вместо `<td>`",
            "en": "It must be `<th>` instead of `<td>`"
          },
          {
            "he": "אסור `border` ב־`<table>`",
            "ru": "У `<table>` нельзя `border`",
            "en": "`<table>` cannot have `border`"
          },
          {
            "he": "הכול תקין",
            "ru": "Всё правильно",
            "en": "Nothing is wrong"
          }
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "זכרו את הסדר: table ← ? ← td.",
            "ru": "Вспомни порядок: table → ? → td.",
            "en": "Remember the order: table → ? → td."
          }
        ],
        "solution": [
          {
            "he": "תא תמיד יושב בתוך שורה.",
            "ru": "Ячейка всегда внутри строки.",
            "en": "A cell always sits inside a row."
          },
          "<table border=\"1\"><tr><td>א</td><td>ב</td></tr></table>"
        ]
      },
      {
        "id": "ai-9",
        "level": 3,
        "label": {
          "he": "Radio",
          "ru": "Radio",
          "en": "Radio"
        },
        "kind": "choice",
        "text": {
          "he": "בטופס יש שלושה כפתורי Radio למגדר, אבל אפשר לסמן את שלושתם יחד. מה כנראה הבעיה?",
          "ru": "В форме три кнопки Radio для пола, но можно отметить все три сразу. В чём, скорее всего, проблема?",
          "en": "A form has three Radio buttons for gender, but all three can be selected at once. What is most likely wrong?"
        },
        "options": [
          {
            "he": "לכל אחד יש `name` אחר",
            "ru": "У каждой свой `name`",
            "en": "Each one has a different `name`"
          },
          {
            "he": "חסר להם `id`",
            "ru": "У них нет `id`",
            "en": "They have no `id`"
          },
          {
            "he": "הם לא בתוך טבלה",
            "ru": "Они не в таблице",
            "en": "They are not in a table"
          },
          {
            "he": "צריך Textarea במקומם",
            "ru": "Нужен Textarea вместо них",
            "en": "They should be a Textarea"
          }
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "בשקופית הייתה הערה מיוחדת על Radio.",
            "ru": "На слайде было особое замечание про Radio.",
            "en": "The slide had a special note about Radio."
          },
          {
            "he": "ההערה הייתה על התכונה `name`.",
            "ru": "Замечание было про атрибут `name`.",
            "en": "The note was about the `name` attribute."
          }
        ],
        "solution": [
          {
            "he": "כפתורי Radio עובדים כקבוצה רק אם לכולם אותו `name`.",
            "ru": "Кнопки Radio работают как группа, только если у всех одно `name`.",
            "en": "Radio buttons act as one group only when they share the same `name`."
          },
          {
            "he": "אם השמות שונים, כל כפתור הוא \"קבוצה\" לבד — ואפשר לסמן את כולם.",
            "ru": "Если имена разные, каждая кнопка — отдельная «группа», и отмечаются все.",
            "en": "With different names each button is its own \"group\", so all can be ticked."
          }
        ]
      },
      {
        "id": "ai-10",
        "level": 3,
        "label": {
          "he": "colspan",
          "ru": "colspan",
          "en": "colspan"
        },
        "kind": "number",
        "text": {
          "he": "התכונה `colspan=\"3\"` מותחת תא אחד על פני 3 עמודות. כמה תגיות תא (`<th>` ו־`<td>` יחד) יש בטבלה?\n`<tr><th colspan=\"3\">מחירון</th></tr>`\n`<tr><td>חלב</td><td>6</td><td>קיים</td></tr>`\n`<tr><td>לחם</td><td>9</td><td>לא קיים</td></tr>`",
          "ru": "Атрибут `colspan=\"3\"` растягивает одну ячейку на 3 столбца. Сколько тегов-ячеек (`<th>` и `<td>` вместе) в таблице?\n`<tr><th colspan=\"3\">מחירון</th></tr>`\n`<tr><td>חלב</td><td>6</td><td>קיים</td></tr>`\n`<tr><td>לחם</td><td>9</td><td>לא קיים</td></tr>`",
          "en": "The attribute `colspan=\"3\"` stretches one cell over 3 columns. How many cell tags (`<th>` and `<td>` together) does the table have?\n`<tr><th colspan=\"3\">מחירון</th></tr>`\n`<tr><td>חלב</td><td>6</td><td>קיים</td></tr>`\n`<tr><td>לחם</td><td>9</td><td>לא קיים</td></tr>`"
        },
        "answer": {
          "value": "7"
        },
        "hints": [
          {
            "he": "סופרים תגיות, לא עמודות: התא עם colspan הוא תגית אחת.",
            "ru": "Считаем теги, а не столбцы: ячейка с colspan — один тег.",
            "en": "Count tags, not columns: the colspan cell is one tag."
          },
          {
            "he": "שורה 1: תגית אחת. שורות 2 ו־3: כמה בכל אחת?",
            "ru": "Строка 1: один тег. В строках 2 и 3 — сколько в каждой?",
            "en": "Row 1: one tag. Rows 2 and 3: how many each?"
          }
        ],
        "solution": [
          {
            "he": "שורה 1: `<th colspan=\"3\">` — תגית אחת (רחבה כמו 3 עמודות).",
            "ru": "Строка 1: `<th colspan=\"3\">` — один тег (шириной в 3 столбца).",
            "en": "Row 1: `<th colspan=\"3\">` — one tag (3 columns wide)."
          },
          {
            "he": "שורות 2 ו־3: 3 תגיות `<td>` בכל אחת.",
            "ru": "Строки 2 и 3: по 3 тега `<td>`.",
            "en": "Rows 2 and 3: 3 `<td>` tags each."
          },
          "1 + 3 + 3 = 7"
        ]
      },
      {
        "id": "ai-11",
        "level": 2,
        "label": {
          "he": "cover",
          "ru": "cover",
          "en": "cover"
        },
        "kind": "text",
        "text": {
          "he": "איזה ערך כותבים ב־`background-size` כדי שהתמונה תכסה את כל הדף? (מילה אחת)",
          "ru": "Какое значение пишут в `background-size`, чтобы картинка закрыла всю страницу? (одно слово)",
          "en": "What value goes in `background-size` so the image covers the whole page? (one word)"
        },
        "answer": {
          "accept": [
            "cover",
            "cover;",
            "background-size: cover",
            "background-size: cover;",
            "background-size:cover"
          ]
        },
        "hints": [
          {
            "he": "באנגלית \"לכסות\".",
            "ru": "По-английски «покрыть».",
            "en": "The English verb \"to cover\"."
          }
        ],
        "solution": [
          "background-size: cover;",
          {
            "he": "התשובה: `cover`.",
            "ru": "Ответ: `cover`.",
            "en": "Answer: `cover`."
          }
        ]
      },
      {
        "id": "ai-12",
        "level": 1,
        "label": {
          "he": "action",
          "ru": "action",
          "en": "action"
        },
        "kind": "choice",
        "text": {
          "he": "מה קורה בלחיצה על `<input type=\"submit\">` בטופס `<form action=\"thanks.html\">`?",
          "ru": "Что произойдёт при нажатии на `<input type=\"submit\">` в форме `<form action=\"thanks.html\">`?",
          "en": "What happens when you click `<input type=\"submit\">` in the form `<form action=\"thanks.html\">`?"
        },
        "options": [
          {
            "he": "הדפדפן עובר לדף `thanks.html`",
            "ru": "Браузер перейдёт на страницу `thanks.html`",
            "en": "The browser goes to the page `thanks.html`"
          },
          {
            "he": "הטופס מתנקה ונשארים באותו דף",
            "ru": "Форма очистится, и мы останемся на той же странице",
            "en": "The form is cleared and we stay on the same page"
          },
          {
            "he": "נפתח חלון לבחירת צבע",
            "ru": "Откроется окно выбора цвета",
            "en": "A colour picker opens"
          },
          {
            "he": "לא קורה כלום",
            "ru": "Ничего не произойдёт",
            "en": "Nothing happens"
          }
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "מה כתוב בתוך `action`?",
            "ru": "Что написано внутри `action`?",
            "en": "What is written inside `action`?"
          }
        ],
        "solution": [
          {
            "he": "`submit` מפעיל את `action` של הטופס.",
            "ru": "`submit` запускает `action` формы.",
            "en": "`submit` runs the form's `action`."
          },
          {
            "he": "ב־`action` כתוב `thanks.html`, ולכן עוברים לדף הזה.",
            "ru": "В `action` написано `thanks.html`, поэтому переходим на эту страницу.",
            "en": "`action` says `thanks.html`, so we go to that page."
          }
        ]
      },
      {
        "id": "ai-13",
        "level": 1,
        "label": {
          "he": "id",
          "ru": "id",
          "en": "id"
        },
        "kind": "choice",
        "text": {
          "he": "לכמה אלמנטים בדף אפשר לתת את אותו `id`?",
          "ru": "Скольким элементам на странице можно дать один и тот же `id`?",
          "en": "How many elements on a page can share the same `id`?"
        },
        "options": [
          {
            "he": "רק לאחד",
            "ru": "Только одному",
            "en": "Only one"
          },
          {
            "he": "לשניים",
            "ru": "Двум",
            "en": "Two"
          },
          {
            "he": "לכמה שרוצים",
            "ru": "Сколько угодно",
            "en": "As many as you like"
          }
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "`id` בא מהמילה identity — זהות.",
            "ru": "`id` — от слова identity, «личность».",
            "en": "`id` comes from \"identity\"."
          }
        ],
        "solution": [
          {
            "he": "`id` — שם ייחודי, רק לאלמנט אחד.",
            "ru": "`id` — уникальное имя, только для одного элемента.",
            "en": "`id` is a unique name, for one element only."
          },
          {
            "he": "שם לכמה אלמנטים יחד — זה `class`.",
            "ru": "Имя для многих элементов сразу — это `class`.",
            "en": "A name for many elements at once is a `class`."
          }
        ]
      },
      {
        "id": "ai-14",
        "level": 2,
        "label": {
          "he": "password",
          "ru": "password",
          "en": "password"
        },
        "kind": "text",
        "text": {
          "he": "בדף ההרשמה צריך שדה סיסמה שמראה נקודות במקום אותיות. מה כותבים ב־`type` של ה־`<input>`? (מילה אחת)",
          "ru": "На странице регистрации нужно поле пароля, которое показывает точки вместо букв. Что пишут в `type` у `<input>`? (одно слово)",
          "en": "The registration page needs a password field that shows dots instead of letters. What goes in the `type` of the `<input>`? (one word)"
        },
        "answer": {
          "accept": [
            "password",
            "\"password\"",
            "type=\"password\""
          ]
        },
        "hints": [
          {
            "he": "באנגלית \"סיסמה\".",
            "ru": "По-английски «пароль».",
            "en": "The English word for it."
          }
        ],
        "solution": [
          "<input type=\"password\" name=\"pass\">",
          {
            "he": "התשובה: `password`.",
            "ru": "Ответ: `password`.",
            "en": "Answer: `password`."
          }
        ]
      }
    ]
  }
};

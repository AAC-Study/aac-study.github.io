/* Lesson data — format: see the comment at the top of data/lessons/math-2026-11-01.js.
   Full Stack: HTML tables, a background image through <style>, form elements, the summary HTML project.
   Every count below (rows, cells, tags) was checked by hand, cell by cell. */
window.LESSONS = window.LESSONS || {};
window.LESSONS['fullstack-2026-10-28'] = {
  id: 'fullstack-2026-10-28',
  subject: 'fullstack',
  date: '2026-10-28',
  title: { he: 'טבלאות ב־HTML ותמונת רקע', ru: 'Таблицы в HTML и фоновая картинка', en: 'HTML tables and a background image' },
  summary: {
    he: 'תמונת רקע לדף דרך `<style>` ב־head, טבלה עם `<table>`, `<tr>`, `<th>`, `<td>` והתכונות שלה, תרגילון טבלה, אלמנטים של טופס, והתרגיל המסכם: אתר של עסק עם 4 דפים.',
    ru: 'Фоновая картинка страницы через `<style>` в head, таблица из `<table>`, `<tr>`, `<th>`, `<td>` и её атрибуты, упражнение с таблицей, элементы формы и итоговое задание: сайт бизнеса из 4 страниц.',
    en: 'A page background image via `<style>` in the head, a table built from `<table>`, `<tr>`, `<th>`, `<td>` and its attributes, a table exercise, form elements, and the summary project: a 4-page business website.'
  },

  timeline: [
    { kind: 'talk',
      title: { he: 'תמונת רקע לכל הדף', ru: 'Фоновая картинка для всей страницы', en: 'A background image for the whole page' },
      text: {
        he: 'את הרקע של הדף כותבים בתוך `<head>`, בתגית `<style>`. בתוכה פונים ל־`body` ונותנים לו תמונה. את קובץ התמונה שמים באותה תיקייה של קובץ ה־HTML.\n`background-image: url("background.jpg");` — איזו תמונה.\n`background-size: cover;` — התמונה מכסה את כל הדף.',
        ru: 'Фон страницы пишут внутри `<head>`, в теге `<style>`. В нём обращаемся к `body` и даём ему картинку. Файл картинки кладём в ту же папку, что и HTML-файл.\n`background-image: url("background.jpg");` — какая картинка.\n`background-size: cover;` — картинка закрывает всю страницу.',
        en: 'The page background goes inside `<head>`, in a `<style>` tag. In it we address `body` and give it an image. Put the image file in the same folder as the HTML file.\n`background-image: url("background.jpg");` — which image.\n`background-size: cover;` — the image covers the whole page.'
      },
      math: [
        '<head>',
        '  <title>עמוד האינטרנט הראשון שלי</title>',
        '  <style>',
        '    body {',
        '      background-image: url("background.jpg");',
        '      background-size: cover;',
        '    }',
        '  </style>',
        '</head>'
      ] },
    { kind: 'tip',
      title: { he: 'טעות נפוצה: בלי `<style>`', ru: 'Частая ошибка: без `<style>`', en: 'Common mistake: no `<style>`' },
      text: {
        he: 'אם כותבים `body { … }` ישר בתוך `<head>`, בלי `<style>` מסביב, הדפדפן לא מבין שזה עיצוב — והרקע לא מופיע. הקוד הזה תמיד יושב בין `<style>` ל־`</style>`.\nתוספות שימושיות: `background-repeat: no-repeat;` (בלי חזרות), `background-position: center;` (במרכז), `background-attachment: fixed;` (הרקע לא זז כשגוללים).',
        ru: 'Если написать `body { … }` прямо внутри `<head>`, без `<style>` вокруг, браузер не поймёт, что это оформление, — и фона не будет. Этот код всегда стоит между `<style>` и `</style>`.\nПолезные добавки: `background-repeat: no-repeat;` (без повторов), `background-position: center;` (по центру), `background-attachment: fixed;` (фон не едет при прокрутке).',
        en: 'If you write `body { … }` straight inside `<head>`, without `<style>` around it, the browser does not see it as styling — and no background appears. This code always sits between `<style>` and `</style>`.\nUseful extras: `background-repeat: no-repeat;` (no tiling), `background-position: center;`, `background-attachment: fixed;` (the background stays put when scrolling).'
      } },
    { kind: 'board',
      title: { he: 'מבנה של טבלה', ru: 'Устройство таблицы', en: 'How a table is built' },
      text: {
        he: 'על הלוח צוירה טבלה של 2 × 2: שורות ובתוכן תאים.\n`<table>` — כל הטבלה. `<tr>` (table row) — שורה. בתוך שורה יש תאים: `<th>` — תא כותרת (מודגש וממורכז), `<td>` — תא רגיל.\nהסדר תמיד: table ← tr ← th/td. תא לא עומד לבד — הוא תמיד בתוך שורה.',
        ru: 'На доске нарисовали таблицу 2 × 2: строки, а в них ячейки.\n`<table>` — вся таблица. `<tr>` (table row) — строка. Внутри строки ячейки: `<th>` — ячейка-заголовок (жирная и по центру), `<td>` — обычная ячейка.\nПорядок всегда: table → tr → th/td. Ячейка не стоит сама по себе — она всегда внутри строки.',
        en: 'A 2 × 2 table was drawn on the board: rows, and cells inside them.\n`<table>` is the whole table. `<tr>` (table row) is a row. Inside a row are cells: `<th>` is a header cell (bold and centred), `<td>` is a normal cell.\nThe order is always table → tr → th/td. A cell never stands alone — it is always inside a row.'
      },
      math: [
        '<table border="1">',
        '  <tr>',
        '    <th>שלב</th>',
        '    <th>מה לעשות</th>',
        '  </tr>',
        '  <tr>',
        '    <td>1</td>',
        '    <td>להוריד את VS Code</td>',
        '  </tr>',
        '</table>'
      ] },
    { kind: 'talk',
      title: { he: 'התכונות של הטבלה', ru: 'Атрибуты таблицы', en: 'Table attributes' },
      text: {
        he: 'בדוגמה של המרצה: `<table id="sesameStreet" width="600px" border="1px" align="center">`.\n`width` — רוחב הטבלה (בפיקסלים או באחוזים). `border` — עובי המסגרת; בלי border לא רואים קווים. `align="center"` — הטבלה באמצע הדף.\nגם לשורה אפשר לתת תכונות: `<tr class="rows" align="right">`. ולתא — `style`, למשל צבע טקסט.\nבתוך תא אפשר לשים כל דבר: טקסט, קישור `<a>`, תמונה `<img width="40%">` (האחוזים — מרוחב התא).',
        ru: 'В примере преподавателя: `<table id="sesameStreet" width="600px" border="1px" align="center">`.\n`width` — ширина таблицы (в пикселях или процентах). `border` — толщина рамки; без border линий не видно. `align="center"` — таблица по центру страницы.\nСтроке тоже можно дать атрибуты: `<tr class="rows" align="right">`. А ячейке — `style`, например цвет текста.\nВ ячейку можно положить что угодно: текст, ссылку `<a>`, картинку `<img width="40%">` (проценты — от ширины ячейки).',
        en: 'In the lecturer\'s example: `<table id="sesameStreet" width="600px" border="1px" align="center">`.\n`width` — table width (pixels or percent). `border` — frame thickness; without border no lines are visible. `align="center"` — the table sits in the middle of the page.\nA row can get attributes too: `<tr class="rows" align="right">`. A cell can get `style`, e.g. a text colour.\nA cell can hold anything: text, a link `<a>`, an image `<img width="40%">` (percent of the cell width).'
      } },
    { kind: 'board',
      title: { he: 'תרגילון: טבלה משלכם', ru: 'Упражнение: своя таблица', en: 'Mini-exercise: your own table' },
      text: {
        he: 'צרו טבלה דומה ככל האפשר לטבלה בדוגמה. הנושא — חופשי, אבל לפחות 3 שורות ואת העמודות:\n• עמודת טקסט (שם, שם משפחה וכו׳)\n• תמונה\n• היפר־קישור\n• כותרת (header)',
        ru: 'Сделайте таблицу, как можно более похожую на пример. Тема любая, но минимум 3 строки и столбцы:\n• текстовый столбец (имя, фамилия и т. п.)\n• картинка\n• гиперссылка\n• заголовок (header)',
        en: 'Make a table as close as possible to the example. Any topic, but at least 3 rows and these columns:\n• a text column (name, surname, etc.)\n• an image\n• a hyperlink\n• a header'
      } },
    { kind: 'talk', time: '10:31',
      title: { he: 'Form — אלמנטים חשובים', ru: 'Form — важные элементы', en: 'Form — important elements' },
      text: {
        he: 'שקופית על טפסים — האלמנטים שישמשו בתרגיל המסכם:\nLabel — תווית, כדי לרשום מידע נלווה.\nText — הזנת מידע בשורה בודדת.\nTextarea — תיבת טקסט (הזנת מידע בסדר גודל גדול יותר).\nRadio — בחירת אופציה אחת מתוך כמה; צריך לשים לב שכולן תחת אותו שם בתכונה `name`.\nCheckbox — סימון "וי" למידע מסוים.\nDatalist — רשימה נגללת, בחירה מתוך רשימה.\nButton — כפתור. Submit — כפתור הגשה.',
        ru: 'Слайд о формах — элементы, которые понадобятся в итоговом задании:\nLabel — подпись, чтобы написать сопутствующую информацию.\nText — ввод в одну строку.\nTextarea — текстовое поле (для большего объёма текста).\nRadio — выбор одного варианта из нескольких; важно, чтобы у всех было одно и то же имя в атрибуте `name`.\nCheckbox — галочка для определённой информации.\nDatalist — выпадающий список, выбор из списка.\nButton — кнопка. Submit — кнопка отправки.',
        en: 'A slide on forms — the elements needed for the summary exercise:\nLabel — a caption for accompanying info.\nText — single-line input.\nTextarea — a text box (for larger input).\nRadio — choose one option out of several; they must all share the same `name` attribute.\nCheckbox — a tick for a certain piece of info.\nDatalist — a drop-down list, choose from a list.\nButton — a button. Submit — a submit button.'
      } },
    { kind: 'board', time: '11:19',
      title: { he: 'תרגיל מסכם — HTML', ru: 'Итоговое задание — HTML', en: 'Summary exercise — HTML' },
      text: {
        he: 'צרו אתר דמיוני לעסק (אמיתי או מדומיין) עם לפחות 4 דפים:\n• דף הבית — שם העסק, לוגו, תמונת "קונספט" (הסביבה או המוצרים), הסבר קצר ותפריט שמקשר לדפים האחרים.\n• דף הרשמה — טופס `form`: שם, מייל, סיסמה, טלפון, מגדר (זכר / נקבה / מעדיף לא לענות), מוצרים אהובים (תיבת טקסט או סימון בחירות) ותיבת הסכמה לתנאי השימוש. "שלח" מוביל לדף אישור; אפשר לחזור לדף הבית.\n• דף אישור הרשמה ("תודה על הרשמתך") — קישור חזרה לדף הבית.\n• דף מחירון — לפחות 5 מוצרים בטבלה: שם המוצר, מחיר, זמינות (קיים / לא קיים במלאי), תמונה; ואפשרות לחזור לדף הבית.',
        ru: 'Создайте воображаемый сайт бизнеса (настоящего или придуманного) минимум из 4 страниц:\n• Главная — название бизнеса, логотип, «концепт»-картинка (обстановка или товары), короткое описание и меню со ссылками на другие страницы.\n• Регистрация — форма `form`: имя, почта, пароль, телефон, пол (мужской / женский / предпочитаю не отвечать), любимые товары (текстовое поле или отметки) и галочка согласия с условиями. «Отправить» ведёт на страницу подтверждения; можно вернуться на главную.\n• Подтверждение («спасибо за регистрацию») — ссылка обратно на главную.\n• Прайс-лист — минимум 5 товаров в таблице: название, цена, наличие (есть / нет на складе), картинка; и возможность вернуться на главную.',
        en: 'Build an imaginary website for a business (real or invented) with at least 4 pages:\n• Home — business name, logo, a "concept" image (the place or the products), a short description and a menu linking to the other pages.\n• Registration — a `form`: name, email, password, phone, gender (male / female / prefer not to say), favourite products (text box or checkboxes) and a checkbox to accept the terms. "Send" leads to the confirmation page; you can go back home.\n• Confirmation ("thanks for registering") — a link back to the home page.\n• Price list — at least 5 products in a table: product name, price, availability (in stock / out of stock), image; plus a way back to the home page.'
      } },
    { kind: 'tip',
      title: { he: 'class או ID לכל אלמנט', ru: 'class или ID у каждого элемента', en: 'A class or ID for every element' },
      text: {
        he: 'בתרגיל המסכם צריך לתת לכל אלמנט `class` או `id` משלו, עם שמות הגיוניים ולפי מוסכמות נכונות. ל־`form` חייבים `class`. משתמשים בהם החל מהתרגיל הבא.',
        ru: 'В итоговом задании каждому элементу нужно дать свой `class` или `id`, с понятными именами и по правильным соглашениям. У `form` обязательно должен быть `class`. Они понадобятся начиная со следующего задания.',
        en: 'In the summary exercise every element needs its own `class` or `id`, with sensible names following proper conventions. The `form` must have a `class`. We start using them from the next exercise.'
      } }
  ],

  review: [
    { title: { he: 'רקע לדף', ru: 'Фон страницы', en: 'Page background' },
      text: { he: 'ב־`<head>` → `<style>` → `body { background-image: url("…"); background-size: cover; }`.', ru: 'В `<head>` → `<style>` → `body { background-image: url("…"); background-size: cover; }`.', en: 'In `<head>` → `<style>` → `body { background-image: url("…"); background-size: cover; }`.' } },
    { title: { he: 'ארבע תגיות של טבלה', ru: 'Четыре тега таблицы', en: 'Four table tags' },
      text: { he: '`<table>` — טבלה, `<tr>` — שורה, `<th>` — תא כותרת, `<td>` — תא רגיל.', ru: '`<table>` — таблица, `<tr>` — строка, `<th>` — ячейка-заголовок, `<td>` — обычная ячейка.', en: '`<table>` table, `<tr>` row, `<th>` header cell, `<td>` normal cell.' } },
    { title: { he: 'הסדר', ru: 'Порядок', en: 'The order' },
      text: { he: 'table ← tr ← th/td. כל תא יושב בתוך שורה.', ru: 'table → tr → th/td. Каждая ячейка внутри строки.', en: 'table → tr → th/td. Every cell sits inside a row.' } },
    { title: { he: 'תכונות של טבלה', ru: 'Атрибуты таблицы', en: 'Table attributes' },
      text: { he: '`width` — רוחב, `border` — מסגרת (בלעדיה אין קווים), `align="center"` — באמצע.', ru: '`width` — ширина, `border` — рамка (без неё нет линий), `align="center"` — по центру.', en: '`width` — width, `border` — frame (no lines without it), `align="center"` — centred.' } },
    { title: { he: 'מה אפשר לשים בתא', ru: 'Что можно положить в ячейку', en: 'What a cell can hold' },
      text: { he: 'טקסט, קישור `<a href>`, תמונה `<img>` — כל דבר.', ru: 'Текст, ссылку `<a href>`, картинку `<img>` — что угодно.', en: 'Text, a link `<a href>`, an image `<img>` — anything.' } },
    { title: { he: 'אלמנטים של טופס', ru: 'Элементы формы', en: 'Form elements' },
      text: { he: 'Text — שורה, Textarea — טקסט ארוך, Radio — אחת מכמה (אותו `name`), Checkbox — וי, Datalist — רשימה, Submit — הגשה.', ru: 'Text — строка, Textarea — длинный текст, Radio — один из нескольких (одно `name`), Checkbox — галочка, Datalist — список, Submit — отправка.', en: 'Text — one line, Textarea — long text, Radio — one of several (same `name`), Checkbox — a tick, Datalist — a list, Submit — submit.' } },
    { title: { he: 'התרגיל המסכם', ru: 'Итоговое задание', en: 'The summary exercise' },
      text: { he: '4 דפים: בית, הרשמה (form), אישור הרשמה, מחירון (טבלה של 5+ מוצרים). לכל אלמנט class או id.', ru: '4 страницы: главная, регистрация (form), подтверждение, прайс-лист (таблица из 5+ товаров). У каждого элемента class или id.', en: '4 pages: home, registration (form), confirmation, price list (a table of 5+ products). Every element gets a class or id.' } }
  ],

  tasks: {
    groups: {
      tbl: { he: 'תרגילון: טבלה', ru: 'Упражнение: таблица', en: 'Mini-exercise: a table' },
      site: { he: 'תרגיל מסכם: אתר של עסק', ru: 'Итоговое задание: сайт бизнеса', en: 'Summary exercise: a business website' }
    },
    teacher: [
      {
        id: 't-tbl-1', group: 'tbl',
        label: { he: 'כותרת', ru: 'Заголовок', en: 'Header' },
        kind: 'choice',
        text: {
          he: 'בתרגילון צריך עמודת כותרת (header). באיזו תגית כותבים תא כותרת?',
          ru: 'В упражнении нужен заголовок (header). Каким тегом пишут ячейку-заголовок?',
          en: 'The exercise needs a header. Which tag makes a header cell?'
        },
        options: ['`<td>`', '`<tr>`', '`<th>`', '`<h1>`'],
        answer: { index: 2 },
        hints: [
          { he: 'h בסוף — מ־header.', ru: 'h в конце — от header.', en: 'The h at the end is for header.' },
          { he: '`<tr>` היא שורה, לא תא.', ru: '`<tr>` — строка, а не ячейка.', en: '`<tr>` is a row, not a cell.' }
        ],
        solution: [
          { he: '`<th>` (table header) — תא כותרת; הוא מודגש וממורכז.', ru: '`<th>` (table header) — ячейка-заголовок; жирная и по центру.', en: '`<th>` (table header) is a header cell; bold and centred.' },
          '<tr><th>שם</th><th>תמונה</th><th>קישור</th></tr>'
        ]
      },
      {
        id: 't-tbl-2', group: 'tbl',
        label: { he: 'תמונה בתא', ru: 'Картинка в ячейке', en: 'Image in a cell' },
        kind: 'choice',
        text: {
          he: 'איך שמים תמונה בתא של הטבלה?',
          ru: 'Как положить картинку в ячейку таблицы?',
          en: 'How do you put an image in a table cell?'
        },
        options: [
          '`<tr src="elmo.jpg">`',
          '`<td><img src="elmo.jpg" width="40%"></td>`',
          '`<img><td src="elmo.jpg"></td></img>`',
          '`<td img="elmo.jpg"></td>`'
        ],
        answer: { index: 1 },
        hints: [
          { he: 'תמונה תמיד נוצרת עם `<img src>`.', ru: 'Картинку всегда делают через `<img src>`.', en: 'An image is always made with `<img src>`.' },
          { he: 'התמונה יושבת בתוך התא, כלומר בין `<td>` ל־`</td>`.', ru: 'Картинка сидит внутри ячейки, то есть между `<td>` и `</td>`.', en: 'The image sits inside the cell, between `<td>` and `</td>`.' }
        ],
        solution: [
          { he: 'התא `<td>` הוא "קופסה", ובתוכו שמים `<img>` רגיל.', ru: 'Ячейка `<td>` — «коробка», внутри неё обычный `<img>`.', en: 'The cell `<td>` is a "box" with a normal `<img>` inside.' },
          '<td><img src="elmo.jpg" width="40%"></td>'
        ]
      },
      {
        id: 't-tbl-3', group: 'tbl',
        label: { he: 'שורות', ru: 'Строки', en: 'Rows' },
        kind: 'number',
        text: {
          he: 'טבלה עם שורת כותרת אחת ועוד 3 שורות של נתונים. כמה תגיות `<tr>` יש בה?',
          ru: 'В таблице одна строка-заголовок и ещё 3 строки данных. Сколько в ней тегов `<tr>`?',
          en: 'A table with one header row and 3 data rows. How many `<tr>` tags does it have?'
        },
        answer: { value: '4' },
        hints: [
          { he: 'כל שורה — `<tr>` אחד, גם שורת הכותרת.', ru: 'Каждая строка — один `<tr>`, и строка-заголовок тоже.', en: 'Every row is one `<tr>`, including the header row.' }
        ],
        solution: [
          { he: 'שורת כותרת (עם `<th>`) — `<tr>` אחד.', ru: 'Строка-заголовок (с `<th>`) — один `<tr>`.', en: 'Header row (with `<th>`) — one `<tr>`.' },
          { he: '3 שורות נתונים — עוד 3.', ru: '3 строки данных — ещё 3.', en: '3 data rows — 3 more.' },
          '1 + 3 = 4'
        ]
      },
      {
        id: 't-site-1', group: 'site',
        label: { he: 'כמה דפים', ru: 'Сколько страниц', en: 'How many pages' },
        kind: 'number',
        text: {
          he: 'כמה דפים לפחות צריכים להיות באתר של התרגיל המסכם?',
          ru: 'Сколько страниц минимум должно быть на сайте итогового задания?',
          en: 'At least how many pages must the summary-exercise website have?'
        },
        answer: { value: '4' },
        hints: [
          { he: 'מנו את הדפים: בית, הרשמה, …', ru: 'Перечисли страницы: главная, регистрация, …', en: 'List the pages: home, registration, …' }
        ],
        solution: [
          { he: 'דף הבית, דף הרשמה, דף אישור הרשמה, דף מחירון.', ru: 'Главная, регистрация, подтверждение регистрации, прайс-лист.', en: 'Home, registration, registration confirmation, price list.' },
          { he: 'סה״כ 4 דפים.', ru: 'Итого 4 страницы.', en: 'That is 4 pages.' }
        ]
      },
      {
        id: 't-site-2', group: 'site',
        label: { he: 'מחירון', ru: 'Прайс-лист', en: 'Price list' },
        kind: 'number',
        text: {
          he: 'במחירון יש שורת כותרת (שם המוצר, מחיר, זמינות, תמונה) ובדיוק 5 מוצרים, כל מוצר בשורה. כמה תאים `<td>` יש בטבלה?',
          ru: 'В прайс-листе строка-заголовок (название, цена, наличие, картинка) и ровно 5 товаров, по товару в строке. Сколько ячеек `<td>` в таблице?',
          en: 'The price list has a header row (name, price, availability, image) and exactly 5 products, one per row. How many `<td>` cells does the table have?'
        },
        answer: { value: '20' },
        hints: [
          { he: 'שורת הכותרת בנויה מ־`<th>`, לא מ־`<td>`.', ru: 'Строка-заголовок состоит из `<th>`, а не `<td>`.', en: 'The header row is made of `<th>`, not `<td>`.' },
          { he: 'בכל שורת מוצר יש 4 תאים.', ru: 'В каждой строке товара 4 ячейки.', en: 'Each product row has 4 cells.' }
        ],
        solution: [
          { he: 'עמודות: שם, מחיר, זמינות, תמונה — 4.', ru: 'Столбцы: название, цена, наличие, картинка — 4.', en: 'Columns: name, price, availability, image — 4.' },
          { he: 'שורות מוצרים: 5. שורת הכותרת היא `<th>` ולא נספרת.', ru: 'Строк с товарами: 5. Строка-заголовок — `<th>`, не считается.', en: 'Product rows: 5. The header row is `<th>` and is not counted.' },
          '5 × 4 = 20'
        ]
      },
      {
        id: 't-site-3', group: 'site',
        label: { he: 'טופס', ru: 'Форма', en: 'Form' },
        kind: 'text',
        text: {
          he: 'באיזו תגית עוטפים את כל השדות של דף ההרשמה? (שם התגית)',
          ru: 'Каким тегом оборачивают все поля страницы регистрации? (имя тега)',
          en: 'Which tag wraps all the fields of the registration page? (tag name)'
        },
        answer: { accept: ['form', '<form>', '<form></form>'] },
        hints: [
          { he: 'הדרישה בתרגיל: "דף ההרשמה יהיה טופס …".', ru: 'В задании: «страница регистрации будет формой …».', en: 'The exercise says: "the registration page will be a … ".' },
          { he: 'טופס באנגלית.', ru: '«Форма» по-английски.', en: 'The English word for this.' }
        ],
        solution: [
          { he: 'כל שדות ההרשמה יושבים בתוך `<form>` … `</form>`, ולו צריך לתת `class`.', ru: 'Все поля регистрации внутри `<form>` … `</form>`, и ему нужен `class`.', en: 'All registration fields go inside `<form>` … `</form>`, which needs a `class`.' },
          '<form class="register-form"> … </form>'
        ]
      },
      {
        id: 't-site-4', group: 'site',
        label: { he: 'מגדר', ru: 'Пол', en: 'Gender' },
        kind: 'choice',
        text: {
          he: 'בטופס ההרשמה בוחרים מגדר: זכר / נקבה / מעדיף לא לענות — רק אחת. איזה אלמנט מתאים?',
          ru: 'В форме выбирают пол: мужской / женский / предпочитаю не отвечать — только один. Какой элемент подходит?',
          en: 'In the form you pick a gender: male / female / prefer not to say — only one. Which element fits?'
        },
        options: ['Checkbox', 'Radio', 'Textarea', 'Submit'],
        answer: { index: 1 },
        hints: [
          { he: 'צריך בדיוק אופציה אחת מתוך כמה.', ru: 'Нужен ровно один вариант из нескольких.', en: 'You need exactly one option out of several.' },
          { he: 'Checkbox מאפשר לסמן כמה יחד.', ru: 'Checkbox позволяет отметить несколько сразу.', en: 'Checkbox lets you tick several together.' }
        ],
        solution: [
          { he: 'Radio — בחירת אופציה אחת מתוך כמה.', ru: 'Radio — выбор одного варианта из нескольких.', en: 'Radio — choose one option out of several.' },
          { he: 'לכל שלוש האופציות נותנים אותו `name`, ואז אפשר לבחור רק אחת.', ru: 'Всем трём вариантам даём одно `name`, тогда можно выбрать только один.', en: 'All three options get the same `name`, so only one can be picked.' }
        ]
      },
      {
        id: 't-site-5', group: 'site',
        label: { he: 'תנאי שימוש', ru: 'Условия', en: 'Terms' },
        kind: 'text',
        text: {
          he: 'בסוף הטופס יש "אני מסכים לתנאי השימוש" עם סימון וי. איזה אלמנט זה? (באנגלית)',
          ru: 'В конце формы — «я согласен с условиями» с галочкой. Какой это элемент? (по-английски)',
          en: 'At the end of the form there is "I accept the terms" with a tick. Which element is it?'
        },
        answer: { accept: ['checkbox', 'check box', 'type="checkbox"', 'type=checkbox', 'input type="checkbox"'] },
        hints: [
          { he: 'בשקופית: "סימון וי למידע מסוים".', ru: 'На слайде: «галочка для определённой информации».', en: 'On the slide: "a tick for a certain piece of info".' },
          { he: 'check + box.', ru: 'check + box.', en: 'check + box.' }
        ],
        solution: [
          { he: 'Checkbox — תיבת סימון שאפשר לסמן או להשאיר ריקה.', ru: 'Checkbox — поле-галочка, которое можно отметить или оставить пустым.', en: 'Checkbox — a box you can tick or leave empty.' }
        ]
      }
    ],

    ai: [
      {
        id: 'ai-1', level: 1,
        label: { he: 'שורה', ru: 'Строка', en: 'Row' },
        kind: 'text',
        text: {
          he: 'איזו תגית יוצרת שורה בטבלה? (שם התגית)',
          ru: 'Какой тег создаёт строку таблицы? (имя тега)',
          en: 'Which tag creates a table row? (tag name)'
        },
        answer: { accept: ['tr', '<tr>', '<tr></tr>'] },
        hints: [
          { he: 'table row — באותיות הראשונות.', ru: 'table row — по первым буквам.', en: 'table row — by the first letters.' }
        ],
        solution: [
          { he: '`<tr>` = table row.', ru: '`<tr>` = table row.', en: '`<tr>` = table row.' },
          '<tr><td>1</td><td>2</td></tr>'
        ]
      },
      {
        id: 'ai-2', level: 1,
        label: { he: 'מסגרת', ru: 'Рамка', en: 'Border' },
        kind: 'choice',
        text: {
          he: 'כתבנו טבלה בלי שום תכונה, והקווים בין התאים לא נראים. מה להוסיף ל־`<table>`?',
          ru: 'Мы написали таблицу без атрибутов, и линий между ячейками не видно. Что добавить в `<table>`?',
          en: 'We wrote a table with no attributes and the lines between cells are invisible. What do we add to `<table>`?'
        },
        options: ['`align="center"`', '`border="1"`', '`width="600"`', '`id="lines"`'],
        answer: { index: 1 },
        hints: [
          { he: 'מסגרת באנגלית היא border.', ru: 'Рамка по-английски — border.', en: 'A frame is a border.' }
        ],
        solution: [
          { he: '`border` קובע את עובי המסגרת; בלעדיו אין קווים.', ru: '`border` задаёт толщину рамки; без него линий нет.', en: '`border` sets the frame thickness; without it there are no lines.' },
          '<table border="1">'
        ]
      },
      {
        id: 'ai-3', level: 1,
        label: { he: 'תמונת רקע', ru: 'Фоновая картинка', en: 'Background image' },
        kind: 'text',
        text: {
          he: 'איזו תכונת CSS קובעת תמונת רקע ל־body? (כתבו את שם התכונה)',
          ru: 'Какое свойство CSS задаёт фоновую картинку для body? (имя свойства)',
          en: 'Which CSS property sets a background image for body? (property name)'
        },
        answer: { accept: ['background-image', 'background-image:', 'background image'] },
        hints: [
          { he: 'שתי מילים באנגלית עם מקף: רקע + תמונה.', ru: 'Два английских слова через дефис: фон + картинка.', en: 'Two English words with a hyphen: background + image.' }
        ],
        solution: [
          'background-image: url("background.jpg");',
          { he: 'התשובה: `background-image`.', ru: 'Ответ: `background-image`.', en: 'Answer: `background-image`.' }
        ]
      },
      {
        id: 'ai-4', level: 2,
        label: { he: 'ספירת td', ru: 'Считаем td', en: 'Count td' },
        kind: 'number',
        text: {
          he: 'כמה תאים `<td>` יש בטבלה?\n`<tr><th>שם</th><th>תמונה</th><th>קישור</th></tr>`\n`<tr><td>…</td><td>…</td><td>…</td></tr>`\n`<tr><td>…</td><td>…</td><td>…</td></tr>`\n`<tr><td>…</td><td>…</td><td>…</td></tr>`',
          ru: 'Сколько ячеек `<td>` в таблице?\n`<tr><th>שם</th><th>תמונה</th><th>קישור</th></tr>`\n`<tr><td>…</td><td>…</td><td>…</td></tr>`\n`<tr><td>…</td><td>…</td><td>…</td></tr>`\n`<tr><td>…</td><td>…</td><td>…</td></tr>`',
          en: 'How many `<td>` cells does the table have?\n`<tr><th>שם</th><th>תמונה</th><th>קישור</th></tr>`\n`<tr><td>…</td><td>…</td><td>…</td></tr>`\n`<tr><td>…</td><td>…</td><td>…</td></tr>`\n`<tr><td>…</td><td>…</td><td>…</td></tr>`'
        },
        answer: { value: '9' },
        hints: [
          { he: 'השורה הראשונה בנויה מ־`<th>` — היא לא נספרת.', ru: 'Первая строка из `<th>` — её не считаем.', en: 'The first row is made of `<th>` — do not count it.' },
          { he: 'כמה שורות של `<td>` יש, וכמה תאים בכל אחת?', ru: 'Сколько строк с `<td>` и сколько ячеек в каждой?', en: 'How many `<td>` rows, and how many cells in each?' }
        ],
        solution: [
          { he: 'שורה 1: שלושה `<th>` — לא `<td>`.', ru: 'Строка 1: три `<th>` — не `<td>`.', en: 'Row 1: three `<th>` — not `<td>`.' },
          { he: 'שורות 2–4: בכל אחת 3 תאים `<td>`.', ru: 'Строки 2–4: в каждой 3 ячейки `<td>`.', en: 'Rows 2–4: 3 `<td>` cells each.' },
          '3 × 3 = 9'
        ]
      },
      {
        id: 'ai-5', level: 2,
        label: { he: 'הרקע לא עובד', ru: 'Фон не работает', en: 'Background not working' },
        kind: 'choice',
        text: {
          he: 'איזה קוד ב־`<head>` באמת ייתן לדף תמונת רקע שמכסה את כל המסך?',
          ru: 'Какой код в `<head>` действительно даст странице фоновую картинку на весь экран?',
          en: 'Which code in `<head>` really gives the page a full-screen background image?'
        },
        options: [
          '`body { background-image: url("bg.jpg"); background-size: cover; }`',
          '`<style> body { background-image: url("bg.jpg"); background-size: cover; } </style>`',
          '`<body background-image="bg.jpg" size="cover">`',
          '`<style> body { background-image: bg.jpg; } </style>`'
        ],
        answer: { index: 1 },
        hints: [
          { he: 'בלי `<style>` הדפדפן לא יודע שזה עיצוב.', ru: 'Без `<style>` браузер не знает, что это оформление.', en: 'Without `<style>` the browser does not know it is styling.' },
          { he: 'שם הקובץ נכתב בתוך `url("…")`.', ru: 'Имя файла пишут внутри `url("…")`.', en: 'The file name goes inside `url("…")`.' }
        ],
        solution: [
          { he: 'בלי `<style>` הדפדפן לא מבין שזה עיצוב; ל־`<body>` אין תכונות `background-image` ו־`size`; ושם הקובץ חייב להיות בתוך `url(…)`.', ru: 'Без `<style>` браузер не поймёт, что это оформление; у `<body>` нет атрибутов `background-image` и `size`; а имя файла должно быть внутри `url(…)`.', en: 'Without `<style>` the browser does not see styling; `<body>` has no `background-image` or `size` attributes; and the file name must be inside `url(…)`.' },
          '<style> body { background-image: url("bg.jpg"); background-size: cover; } </style>'
        ]
      },
      {
        id: 'ai-6', level: 2,
        label: { he: 'טקסט ארוך', ru: 'Длинный текст', en: 'Long text' },
        kind: 'choice',
        text: {
          he: 'בטופס רוצים שדה שבו המשתמש כותב כמה שורות על המוצרים שהוא אוהב. איזה אלמנט מתאים?',
          ru: 'В форме нужно поле, где пользователь пишет несколько строк о любимых товарах. Какой элемент подходит?',
          en: 'The form needs a field where the user writes several lines about favourite products. Which element fits?'
        },
        options: ['Text', 'Textarea', 'Radio', 'Button'],
        answer: { index: 1 },
        hints: [
          { he: 'Text — רק שורה אחת.', ru: 'Text — только одна строка.', en: 'Text is only one line.' }
        ],
        solution: [
          { he: 'Textarea — תיבת טקסט להזנת מידע בסדר גודל גדול יותר.', ru: 'Textarea — поле для большего объёма текста.', en: 'Textarea — a text box for larger input.' }
        ]
      },
      {
        id: 'ai-7', level: 2,
        label: { he: 'שורות במחירון', ru: 'Строки прайса', en: 'Price list rows' },
        kind: 'number',
        text: {
          he: 'במחירון יש שורת כותרת ו־7 מוצרים, כל מוצר בשורה משלו, ו־4 עמודות. כמה תאים יש בטבלה בסך הכול (`<th>` וגם `<td>`)?',
          ru: 'В прайс-листе строка-заголовок и 7 товаров, каждый в своей строке, и 4 столбца. Сколько всего ячеек в таблице (и `<th>`, и `<td>`)?',
          en: 'A price list has a header row and 7 products, each in its own row, and 4 columns. How many cells in total (`<th>` and `<td>`)?'
        },
        answer: { value: '32' },
        hints: [
          { he: 'כמה שורות יש בסך הכול, כולל הכותרת?', ru: 'Сколько всего строк, включая заголовок?', en: 'How many rows in total, including the header?' },
          { he: '8 שורות, ובכל אחת 4 תאים.', ru: '8 строк, в каждой 4 ячейки.', en: '8 rows, 4 cells each.' }
        ],
        solution: [
          { he: 'שורות: 1 (כותרת) + 7 (מוצרים) = 8.', ru: 'Строк: 1 (заголовок) + 7 (товары) = 8.', en: 'Rows: 1 (header) + 7 (products) = 8.' },
          '8 × 4 = 32'
        ]
      },
      {
        id: 'ai-8', level: 3,
        label: { he: 'מצאו את הטעות', ru: 'Найди ошибку', en: 'Find the mistake' },
        kind: 'choice',
        text: {
          he: 'מה לא בסדר בקוד?\n`<table border="1">`\n`  <td>א</td><td>ב</td>`\n`</table>`',
          ru: 'Что не так в коде?\n`<table border="1">`\n`  <td>א</td><td>ב</td>`\n`</table>`',
          en: 'What is wrong with this code?\n`<table border="1">`\n`  <td>א</td><td>ב</td>`\n`</table>`'
        },
        options: [
          { he: 'חסרה שורה `<tr>` סביב התאים', ru: 'Нет строки `<tr>` вокруг ячеек', en: 'There is no `<tr>` row around the cells' },
          { he: 'צריך `<th>` במקום `<td>`', ru: 'Нужно `<th>` вместо `<td>`', en: 'It must be `<th>` instead of `<td>`' },
          { he: 'אסור `border` ב־`<table>`', ru: 'У `<table>` нельзя `border`', en: '`<table>` cannot have `border`' },
          { he: 'הכול תקין', ru: 'Всё правильно', en: 'Nothing is wrong' }
        ],
        answer: { index: 0 },
        hints: [
          { he: 'זכרו את הסדר: table ← ? ← td.', ru: 'Вспомни порядок: table → ? → td.', en: 'Remember the order: table → ? → td.' }
        ],
        solution: [
          { he: 'תא תמיד יושב בתוך שורה.', ru: 'Ячейка всегда внутри строки.', en: 'A cell always sits inside a row.' },
          '<table border="1"><tr><td>א</td><td>ב</td></tr></table>'
        ]
      },
      {
        id: 'ai-9', level: 3,
        label: { he: 'Radio', ru: 'Radio', en: 'Radio' },
        kind: 'choice',
        text: {
          he: 'בטופס יש שלושה כפתורי Radio למגדר, אבל אפשר לסמן את שלושתם יחד. מה כנראה הבעיה?',
          ru: 'В форме три кнопки Radio для пола, но можно отметить все три сразу. В чём, скорее всего, проблема?',
          en: 'A form has three Radio buttons for gender, but all three can be selected at once. What is most likely wrong?'
        },
        options: [
          { he: 'לכל אחד יש `name` אחר', ru: 'У каждой свой `name`', en: 'Each one has a different `name`' },
          { he: 'חסר להם `id`', ru: 'У них нет `id`', en: 'They have no `id`' },
          { he: 'הם לא בתוך טבלה', ru: 'Они не в таблице', en: 'They are not in a table' },
          { he: 'צריך Textarea במקומם', ru: 'Нужен Textarea вместо них', en: 'They should be a Textarea' }
        ],
        answer: { index: 0 },
        hints: [
          { he: 'בשקופית הייתה הערה מיוחדת על Radio.', ru: 'На слайде было особое замечание про Radio.', en: 'The slide had a special note about Radio.' },
          { he: 'ההערה הייתה על התכונה `name`.', ru: 'Замечание было про атрибут `name`.', en: 'The note was about the `name` attribute.' }
        ],
        solution: [
          { he: 'כפתורי Radio עובדים כקבוצה רק אם לכולם אותו `name`.', ru: 'Кнопки Radio работают как группа, только если у всех одно `name`.', en: 'Radio buttons act as one group only when they share the same `name`.' },
          { he: 'אם השמות שונים, כל כפתור הוא "קבוצה" לבד — ואפשר לסמן את כולם.', ru: 'Если имена разные, каждая кнопка — отдельная «группа», и отмечаются все.', en: 'With different names each button is its own "group", so all can be ticked.' }
        ]
      },
      {
        id: 'ai-10', level: 3,
        label: { he: 'colspan', ru: 'colspan', en: 'colspan' },
        kind: 'number',
        text: {
          he: 'התכונה `colspan="3"` מותחת תא אחד על פני 3 עמודות. כמה תגיות תא (`<th>` ו־`<td>` יחד) יש בטבלה?\n`<tr><th colspan="3">מחירון</th></tr>`\n`<tr><td>חלב</td><td>6</td><td>קיים</td></tr>`\n`<tr><td>לחם</td><td>9</td><td>לא קיים</td></tr>`',
          ru: 'Атрибут `colspan="3"` растягивает одну ячейку на 3 столбца. Сколько тегов-ячеек (`<th>` и `<td>` вместе) в таблице?\n`<tr><th colspan="3">מחירון</th></tr>`\n`<tr><td>חלב</td><td>6</td><td>קיים</td></tr>`\n`<tr><td>לחם</td><td>9</td><td>לא קיים</td></tr>`',
          en: 'The attribute `colspan="3"` stretches one cell over 3 columns. How many cell tags (`<th>` and `<td>` together) does the table have?\n`<tr><th colspan="3">מחירון</th></tr>`\n`<tr><td>חלב</td><td>6</td><td>קיים</td></tr>`\n`<tr><td>לחם</td><td>9</td><td>לא קיים</td></tr>`'
        },
        answer: { value: '7' },
        hints: [
          { he: 'סופרים תגיות, לא עמודות: התא עם colspan הוא תגית אחת.', ru: 'Считаем теги, а не столбцы: ячейка с colspan — один тег.', en: 'Count tags, not columns: the colspan cell is one tag.' },
          { he: 'שורה 1: תגית אחת. שורות 2 ו־3: כמה בכל אחת?', ru: 'Строка 1: один тег. В строках 2 и 3 — сколько в каждой?', en: 'Row 1: one tag. Rows 2 and 3: how many each?' }
        ],
        solution: [
          { he: 'שורה 1: `<th colspan="3">` — תגית אחת (רחבה כמו 3 עמודות).', ru: 'Строка 1: `<th colspan="3">` — один тег (шириной в 3 столбца).', en: 'Row 1: `<th colspan="3">` — one tag (3 columns wide).' },
          { he: 'שורות 2 ו־3: 3 תגיות `<td>` בכל אחת.', ru: 'Строки 2 и 3: по 3 тега `<td>`.', en: 'Rows 2 and 3: 3 `<td>` tags each.' },
          '1 + 3 + 3 = 7'
        ]
      },
      {
        id: 'ai-11', level: 2,
        label: { he: 'cover', ru: 'cover', en: 'cover' },
        kind: 'text',
        text: {
          he: 'איזה ערך כותבים ב־`background-size` כדי שהתמונה תכסה את כל הדף? (מילה אחת)',
          ru: 'Какое значение пишут в `background-size`, чтобы картинка закрыла всю страницу? (одно слово)',
          en: 'What value goes in `background-size` so the image covers the whole page? (one word)'
        },
        answer: { accept: ['cover', 'cover;', 'background-size: cover', 'background-size: cover;', 'background-size:cover'] },
        hints: [
          { he: 'באנגלית "לכסות".', ru: 'По-английски «покрыть».', en: 'The English verb "to cover".' }
        ],
        solution: [
          'background-size: cover;',
          { he: 'התשובה: `cover`.', ru: 'Ответ: `cover`.', en: 'Answer: `cover`.' }
        ]
      }
    ]
  }
};

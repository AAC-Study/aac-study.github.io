/* Lesson data — format: see the comment at the top of data/lessons/math-2026-11-01.js.
   Full Stack, first HTML lesson: page skeleton, basic tags, attributes, image size.
   Every answer below was checked by hand against the HTML rules (tags counted one by one). */
window.LESSONS = window.LESSONS || {};
window.LESSONS["fullstack-2026-10-21"] = {
  "id": "fullstack-2026-10-21",
  "subject": "fullstack",
  "date": "2026-10-21",
  "title": {
    "he": "HTML מאפס: תגיות ותכונות",
    "ru": "HTML с нуля: теги и атрибуты",
    "en": "HTML from scratch: tags and attributes"
  },
  "summary": {
    "he": "מה זה Full Stack, התקנת VS Code ו־Live Server, שלד של דף HTML, תגיות בסיסיות (כותרות, פסקה, קישור, רשימות, תמונה) ותכונות: `dir`, `align`, `style`, גודל תמונה בפיקסלים ובאחוזים.",
    "ru": "Что такое Full Stack, установка VS Code и Live Server, скелет HTML-страницы, базовые теги (заголовки, абзац, ссылка, списки, картинка) и атрибуты: `dir`, `align`, `style`, размер картинки в пикселях и процентах.",
    "en": "What Full Stack is, installing VS Code and Live Server, the skeleton of an HTML page, basic tags (headings, paragraph, link, lists, image) and attributes: `dir`, `align`, `style`, image size in pixels and percent."
  },
  "timeline": [
    {
      "why": {
        "he": "\"Full Stack\" = יודעים את שני הצדדים. למה זה חשוב? כי באתר אמיתי הם תמיד עובדים יחד: הכפתור (לקוח) שולח בקשה, השרת שומר אותה במסד נתונים (זה בדיוק מה שלומדים ב-SQL). מי שמבין את שניהם יכול לבנות אתר שלם לבד.",
        "ru": "«Full Stack» = умеешь обе стороны. Зачем? Потому что на настоящем сайте они всегда работают вместе: кнопка (клиент) отправляет запрос, сервер сохраняет его в базу данных (как раз то, что учим на SQL). Кто понимает обе, может построить сайт целиком сам.",
        "en": "\"Full Stack\" = you know both sides. Why does it matter? On a real site they always work together: the button (client) sends a request, the server saves it in a database (exactly what we learn in SQL). Someone who knows both can build a whole site alone."
      },
      "kind": "talk",
      "title": {
        "he": "מה זה Full Stack",
        "ru": "Что такое Full Stack",
        "en": "What Full Stack is"
      },
      "text": {
        "he": "Front-end (צד לקוח) — כל מה שהמשתמש רואה: כפתור, הצבע שלו, איפה הוא עומד ומה קורה כשלוחצים עליו.\nBack-end (צד שרת) — מה שקורה \"מאחורי הקלעים\": מסד נתונים, בדיקת כניסה, שליחה לשרת.\nדוגמה מהשיעור: אתר של מספרה. המראה והכפתורים הם צד לקוח; כשלקוח נרשם לתור והספר מקבל את זה אצלו — זה צד שרת.\nהקורס נמשך שנתיים. בשנה הראשונה — רק צד לקוח: HTML ו־CSS (בערך חצי מסמסטר א), ואחר כך JavaScript. בשנה השנייה — צד שרת וחיבור הכול יחד.",
        "ru": "Front-end (צד לקוח) — всё, что видит пользователь: кнопка, её цвет, где она стоит и что происходит при нажатии.\nBack-end (צד שרת) — то, что происходит «за кулисами»: база данных, проверка входа, отправка на сервер.\nПример с урока: сайт парикмахерской. Внешний вид и кнопки — это клиентская часть; когда клиент записался на время и парикмахер получил это у себя — это серверная часть.\nКурс длится два года. В первый год — только клиентская часть: HTML и CSS (примерно половина семестра א), потом JavaScript. Во второй год — серверная часть и соединение всего вместе.",
        "en": "Front-end (client side) is everything the user sees: a button, its colour, where it stands and what happens when you click it.\nBack-end (server side) is what happens \"behind the scenes\": the database, checking a login, sending data to the server.\nExample from class: a barber shop website. The look and the buttons are the client side; when a customer books a time and the barber receives it, that is the server side.\nThe course lasts two years. Year one is client side only: HTML and CSS (about half of semester A), then JavaScript. Year two is the server side and connecting everything together."
      }
    },
    {
      "why": {
        "he": "למה אסור AI בסמסטר א? כי עכשיו בונים את היסודות, וצריך שהידיים יזכרו את התגיות. בהגנה המרצה שואל \"למה כתבת כך?\" — מי שכתב בעצמו עונה בקלות. לכן באתר בקורס הזה הפרומפטים רק מסבירים, לא כותבים במקומכם.",
        "ru": "Почему в семестре א нельзя ИИ? Потому что сейчас строим основу, и руки должны запомнить теги. На «הגנה» преподаватель спросит: «почему ты написал так?» — кто писал сам, ответит легко. Поэтому на сайте в этом курсе промпты только объясняют, а не пишут за тебя.",
        "en": "Why no AI in semester א? Because now you build the basics, and your hands need to remember the tags. At the \"defence\" the teacher asks \"why did you write it like this?\" — whoever wrote it alone answers easily. So on this site the prompts for this course only explain, they do not write for you."
      },
      "kind": "tip",
      "title": {
        "he": "כללי הקורס",
        "ru": "Правила курса",
        "en": "Course rules"
      },
      "text": {
        "he": "לא הבנתם — עוצרים את המרצה מיד ומבקשים הסבר בדרך אחרת. אחרי השיעור הוא לא חוזר על החומר באופן פרטי.\nבסמסטר א אסור להשתמש ב־AI. בסוף השנה, אם יש חשד, תהיה \"הגנה\": צריך להסביר את העבודה שלך מול המרצה. בשנה השנייה ילמדו לעבוד עם AI נכון.",
        "ru": "Не понял — сразу останавливай преподавателя и проси объяснить по-другому. После урока он не повторяет материал лично.\nВ семестре א пользоваться ИИ запрещено. В конце года, если есть подозрение, будет «הגנה»: нужно объяснить свою работу преподавателю. Во второй год будут учить правильно работать с ИИ.",
        "en": "If something is unclear, stop the lecturer right away and ask for another explanation. After class he does not repeat the material privately.\nIn semester A using AI is not allowed. At the end of the year, if there is a suspicion, there is a \"defence\": you explain your own work to the lecturer. In year two you will learn to work with AI properly."
      }
    },
    {
      "why": {
        "he": "למה Live Server? בלעדיו צריך לפתוח את הקובץ מחדש בדפדפן אחרי כל שינוי. Live Server מריץ \"שרת קטן\" במחשב ומרענן את הדף לבד בכל שמירה — רואים מיד מה כל שורה עושה.\nלמה תיקייה? כי אתר הוא כמה קבצים (דפים, תמונות) שצריכים \"לראות\" אחד את השני.",
        "ru": "Зачем Live Server? Без него после каждого изменения надо заново открывать файл в браузере. Live Server запускает «маленький сервер» на компьютере и сам обновляет страницу при каждом сохранении — сразу видно, что делает каждая строка.\nЗачем папка? Потому что сайт — это несколько файлов (страницы, картинки), которые должны «видеть» друг друга.",
        "en": "Why Live Server? Without it you must reopen the file in the browser after every change. Live Server runs a \"small server\" on your computer and refreshes the page on every save — you see at once what each line does.\nWhy a folder? Because a site is several files (pages, pictures) that must \"see\" each other."
      },
      "kind": "talk",
      "title": {
        "he": "VS Code ו־Live Server",
        "ru": "VS Code и Live Server",
        "en": "VS Code and Live Server"
      },
      "text": {
        "he": "ב־Full Stack כותבים ב־Visual Studio Code (לא ב־IntelliJ, שהוא ל־Java).\n1. מתקינים VS Code.\n2. ב־Extensions מחפשים Live Server ומתקינים.\n3. File → Open Folder — בוחרים תיקייה לשיעור.\n4. יוצרים קובץ שהשם שלו נגמר ב־`.html`, למשל `lesson1.html`.\n5. קליק ימני על הקובץ → Open with Live Server — הדף נפתח בדפדפן.\n6. משנים קוד ולוחצים Ctrl+S — הדפדפן מתעדכן לבד.",
        "ru": "На Full Stack пишут в Visual Studio Code (не в IntelliJ, он для Java).\n1. Устанавливаем VS Code.\n2. В Extensions ищем Live Server и ставим.\n3. File → Open Folder — выбираем папку урока.\n4. Создаём файл, имя которого кончается на `.html`, например `lesson1.html`.\n5. Правой кнопкой по файлу → Open with Live Server — страница откроется в браузере.\n6. Меняем код и жмём Ctrl+S — браузер обновится сам.",
        "en": "In Full Stack we write in Visual Studio Code (not IntelliJ, which is for Java).\n1. Install VS Code.\n2. In Extensions, search for Live Server and install it.\n3. File → Open Folder — choose a folder for the lesson.\n4. Create a file whose name ends with `.html`, for example `lesson1.html`.\n5. Right-click the file → Open with Live Server — the page opens in the browser.\n6. Change the code and press Ctrl+S — the browser refreshes by itself."
      }
    },
    {
      "why": {
        "he": "שפת תכנות מחשבת ומחליטה (תנאים, לולאות — כמו ב-Java). HTML רק מתאר מה יש בדף. בגלל זה אין \"שגיאה אדומה\": הדפדפן מנסה להציג כמה שאפשר גם כשיש טעות. לכן אחרי כל שינוי מסתכלים על הדף בעיניים.",
        "ru": "Язык программирования считает и принимает решения (условия, циклы — как в Java). HTML только описывает, что есть на странице. Поэтому и нет «красной ошибки»: браузер старается показать всё, что может, даже с ошибкой. Значит, после каждого изменения смотри на страницу глазами.",
        "en": "A programming language computes and decides (conditions, loops — like Java). HTML only describes what is on the page. That is why there is no \"red error\": the browser tries to show as much as it can even with a mistake. So after every change, look at the page yourself."
      },
      "kind": "talk",
      "title": {
        "he": "מה זה HTML",
        "ru": "Что такое HTML",
        "en": "What HTML is"
      },
      "text": {
        "he": "HTML היא לא שפת תכנות אלא שפת תגיות: היא רק אומרת לדפדפן מה להציג — \"פה כותרת, פה רשימה, פה תמונה\".\nהדפדפן (Chrome, Edge, Safari) לוקח את הקבצים והופך אותם לדף.\nHTML \"לא צועקת\": אין שגיאות אדומות כמו ב־Java. הדף ייפתח, רק ייראה לא כמו שרצית — את הטעות מחפשים בעיניים.",
        "ru": "HTML — не язык программирования, а язык разметки: он только говорит браузеру, что показать — «тут заголовок, тут список, тут картинка».\nБраузер (Chrome, Edge, Safari) берёт файлы и превращает их в страницу.\nHTML «не кричит»: красных ошибок, как в Java, нет. Страница откроется, просто будет выглядеть не так — ошибку ищешь глазами.",
        "en": "HTML is not a programming language but a markup language: it only tells the browser what to show — \"a heading here, a list here, an image here\".\nThe browser (Chrome, Edge, Safari) takes the files and turns them into a page.\nHTML \"does not shout\": there are no red errors like in Java. The page opens, it just looks wrong — you find the mistake with your eyes."
      }
    },
    {
      "why": {
        "he": "למה צריך head ו-body? ה-head הוא \"מידע על הדף\" בשביל הדפדפן וגוגל: כותרת הלשונית, שפה, ובהמשך קבצי עיצוב. ה-body הוא מה שהמשתמש רואה. ההפרדה עוזרת לדפדפן לדעת מה להציג ומה רק לקרוא.",
        "ru": "Зачем head и body? head — это «сведения о странице» для браузера и Google: название вкладки, язык, позже файлы оформления. body — то, что видит человек. Это разделение помогает браузеру понять, что показать, а что только прочитать.",
        "en": "Why head and body? The head is \"information about the page\" for the browser and Google: the tab title, the language, and later style files. The body is what the user sees. The split tells the browser what to show and what only to read."
      },
      "kind": "board",
      "title": {
        "he": "השלד של כל דף",
        "ru": "Скелет любой страницы",
        "en": "The skeleton of every page"
      },
      "text": {
        "he": "כל מה שבסוגריים משולשים `< >` הוא תגית. לרוב יש תגית פתיחה `<h1>` ותגית סגירה `</h1>` (עם לוכסן).\n`<html>` — תחילת הדף וסופו. `<head>` — \"הראש\": מה שלא מופיע בדף עצמו, למשל `<title>`, הטקסט בלשונית של הדפדפן. `<body>` — \"הגוף\": כל מה שרואים בדף.",
        "ru": "Всё в угловых скобках `< >` — это тег. Обычно есть открывающий тег `<h1>` и закрывающий `</h1>` (со слэшем).\n`<html>` — начало и конец страницы. `<head>` — «голова»: то, чего нет на самой странице, например `<title>` — текст на вкладке браузера. `<body>` — «тело»: всё, что видно на странице.",
        "en": "Anything in angle brackets `< >` is a tag. Usually there is an opening tag `<h1>` and a closing tag `</h1>` (with a slash).\n`<html>` is the start and end of the page. `<head>` is the \"head\": things not shown on the page itself, e.g. `<title>`, the text on the browser tab. `<body>` is the \"body\": everything you see on the page."
      },
      "math": [
        "<html lang=\"he\" dir=\"rtl\">",
        "<head>",
        "    <title>עמוד האינטרנט הראשון שלי</title>",
        "</head>",
        "<body>",
        "    <h1>שלום</h1>",
        "</body>",
        "</html>"
      ]
    },
    {
      "why": {
        "he": "ב-HTML אין שגיאה שתזכיר לכם תגית פתוחה — הדף פשוט \"נשבר\" במקום אחר, וקשה למצוא למה. כשסוגרים מיד, אין מה לשכוח. וההזחה (רווח בתחילת שורה) מראה בעין מי בתוך מי.",
        "ru": "В HTML нет ошибки, которая напомнит про незакрытый тег — страница просто «ломается» в другом месте, и трудно понять почему. Если закрыть сразу, забывать нечего. А отступ (пробелы в начале строки) показывает глазами, кто внутри кого.",
        "en": "HTML has no error to remind you of an unclosed tag — the page just \"breaks\" somewhere else, and it is hard to see why. Close it at once and there is nothing to forget. Indentation (spaces at the start of a line) shows at a glance what is inside what."
      },
      "kind": "tip",
      "title": {
        "he": "כותבים \"מבחוץ פנימה\"",
        "ru": "Пиши «снаружи внутрь»",
        "en": "Write \"from the outside in\""
      },
      "text": {
        "he": "קודם פותחים תגית וסוגרים אותה מיד, ורק אחר כך כותבים בפנים: `<html></html>` → בפנים `<head></head>` ו־`<body></body>` → רק עכשיו ממלאים את body. כך לא שוכחים לסגור.\nהתגיות מקוננות זו בתוך זו כמו \"אב ובנים\": body הוא האב של כל מה שבתוכו.",
        "ru": "Сначала открой тег и сразу закрой, и только потом пиши внутрь: `<html></html>` → внутрь `<head></head>` и `<body></body>` → только теперь заполняй body. Так не забудешь закрыть.\nТеги вложены друг в друга, как «родитель и дети»: body — родитель всего, что внутри него.",
        "en": "First open a tag and close it right away, and only then write inside: `<html></html>` → inside it `<head></head>` and `<body></body>` → only now fill the body. That way you never forget to close.\nTags are nested like \"parent and children\": body is the parent of everything inside it."
      }
    },
    {
      "why": {
        "he": "למה כל כך הרבה תגיות, אם אפשר לכתוב הכול בטקסט? כי התגית אומרת מה התפקיד של הדבר: \"זו כותרת\", \"זו רשימה\". גוגל, קוראי מסך לעיוורים ו-CSS בהמשך — כולם משתמשים בזה. `h1` אחד בעמוד = הנושא הראשי.\n`img` ו-`br` בלי תגית סוגרת, כי אין להם תוכן בפנים.",
        "ru": "Зачем столько тегов, если можно написать всё текстом? Потому что тег говорит, какая это роль: «это заголовок», «это список». Этим пользуются Google, программы чтения с экрана для незрячих и позже CSS. Один `h1` на странице = главная тема.\n`img` и `br` без закрывающего тега, потому что внутри у них нет содержимого.",
        "en": "Why so many tags if you could write everything as text? Because a tag says what role the thing plays: \"this is a heading\", \"this is a list\". Google, screen readers for blind people and later CSS all use it. One `h1` per page = the main topic.\n`img` and `br` have no closing tag because there is nothing inside them."
      },
      "kind": "board",
      "title": {
        "he": "התגיות של השיעור",
        "ru": "Теги урока",
        "en": "The tags of the lesson"
      },
      "text": {
        "he": "`<h1>` … `<h6>` — כותרות; h1 הכי גדולה, ככל שהמספר גדל הכותרת קטנה.\n`<p>` — פסקה. `<div>` — מחלק את הדף לחלקים.\n`<a href=\"…\">` — קישור; את הכתובת שמים ב־href.\n`<ol>` — רשימה ממוספרת, `<ul>` — רשימה עם נקודות, `<li>` — פריט אחד ברשימה.\n`<br>` — ירידת שורה. `<img src=\"…\">` — תמונה; בלי src הדפדפן לא יודע איזו תמונה להציג.",
        "ru": "`<h1>` … `<h6>` — заголовки; h1 самый большой, чем больше цифра, тем меньше заголовок.\n`<p>` — абзац. `<div>` — делит страницу на части.\n`<a href=\"…\">` — ссылка; адрес пишут в href.\n`<ol>` — нумерованный список, `<ul>` — список с точками, `<li>` — один пункт списка.\n`<br>` — перенос строки. `<img src=\"…\">` — картинка; без src браузер не знает, какую картинку показать.",
        "en": "`<h1>` … `<h6>` — headings; h1 is the biggest, the bigger the number the smaller the heading.\n`<p>` — paragraph. `<div>` — divides the page into parts.\n`<a href=\"…\">` — link; the address goes in href.\n`<ol>` — numbered list, `<ul>` — bulleted list, `<li>` — one list item.\n`<br>` — line break. `<img src=\"…\">` — image; without src the browser does not know which image to show."
      },
      "math": [
        "<h1>כותרת ראשית</h1>",
        "<p>פסקה של טקסט</p>",
        "<a href=\"https://www.google.com\">קישור לגוגל</a>",
        "<ol>",
        "    <li>ראשון</li>",
        "    <li>שני</li>",
        "</ol>",
        "שורה אחת<br>",
        "שורה שנייה",
        "<img src=\"dog.jpg\">"
      ]
    },
    {
      "why": {
        "he": "הדפדפן מחפש את התמונה לפי `src` בדיוק כמו שכתוב. שם בלבד = \"באותה תיקייה כמו הדף\". אם התמונה בתיקייה אחרת או השם שונה באות אחת (גם `.JPG` מול `.jpg` באתר אמיתי) — היא לא תופיע. כתובת של דף במקום כתובת של תמונה — גם לא תעבוד.",
        "ru": "Браузер ищет картинку по `src` ровно так, как написано. Только имя = «в той же папке, что и страница». Если картинка в другой папке или имя отличается хоть на букву (на настоящем сайте даже `.JPG` и `.jpg`) — она не появится. Адрес страницы вместо адреса картинки тоже не сработает.",
        "en": "The browser looks for the image by `src` exactly as written. Just a name = \"in the same folder as the page\". If the image is in another folder, or the name differs by one letter (on a real site even `.JPG` vs `.jpg`), it will not show. A page address instead of an image address will not work either."
      },
      "kind": "talk",
      "title": {
        "he": "מאיפה לוקחים תמונה",
        "ru": "Откуда брать картинку",
        "en": "Where to get an image"
      },
      "text": {
        "he": "מהאינטרנט — צריך את הכתובת של התמונה עצמה (נגמרת ב־`.jpg`, `.png`, `.gif`), לא של הדף שבו היא מופיעה.\nמהמחשב — הדרך הקלה: לשים את התמונה באותה תיקייה של קובץ ה־HTML ולכתוב רק את השם: `<img src=\"33.jpg\">`. VS Code משלים את השם לבד. תמונה מתיקייה אחרת דורשת לכתוב נתיב — את זה עדיין לא צריך.",
        "ru": "Из интернета — нужен адрес самой картинки (кончается на `.jpg`, `.png`, `.gif`), а не страницы, где она показана.\nС компьютера — проще всего положить картинку в ту же папку, что и HTML-файл, и написать только имя: `<img src=\"33.jpg\">`. VS Code сам подскажет имя. Картинка из другой папки требует пути — это пока не нужно.",
        "en": "From the internet — you need the address of the image itself (ending in `.jpg`, `.png`, `.gif`), not of the page that shows it.\nFrom your computer — the easy way: put the image in the same folder as the HTML file and write just its name: `<img src=\"33.jpg\">`. VS Code completes the name for you. An image in another folder needs a path — not needed yet."
      }
    },
    {
      "why": {
        "he": "תגית אומרת מה זה, ותכונה אומרת איך או איזה. `<img>` — \"תמונה\"; `src` — \"איזו תמונה\". למה `id` ו-`class` כבר עכשיו, אם הם לא משנים כלום? כי בעוד כמה שיעורים CSS ו-JavaScript ימצאו אלמנטים לפי השמות האלה.",
        "ru": "Тег говорит, что это, а атрибут — какое или как. `<img>` — «картинка»; `src` — «какая картинка». Зачем `id` и `class` уже сейчас, если они ничего не меняют? Потому что через несколько уроков CSS и JavaScript будут находить элементы именно по этим именам.",
        "en": "A tag says what it is, an attribute says which or how. `<img>` is \"a picture\"; `src` is \"which picture\". Why `id` and `class` already, if they change nothing? Because in a few lessons CSS and JavaScript will find elements by exactly these names."
      },
      "kind": "talk",
      "title": {
        "he": "תכונות (attributes)",
        "ru": "Атрибуты (תכונות)",
        "en": "Attributes"
      },
      "text": {
        "he": "תכונה היא הגדרה נוספת של תגית. כותבים אותה בתוך הסוגריים, אחרי שם התגית: `<תגית תכונה=\"ערך\">`. אפשר כמה תכונות, עם רווח ביניהן.\n`lang=\"he\"` — שפת הדף. `dir=\"rtl\"` — כיוון מימין לשמאל (משפיע גם על הנקודות והמספרים של רשימות). `align` — יישור: `right`, `left`, `center`.\n`id` — שם ייחודי לאלמנט; `class` — שם שאפשר לתת לכמה אלמנטים. על המסך הם לא משנים כלום, הם יידרשו ב־CSS וב־JavaScript.\n`alt` — טקסט במקום תמונה שלא נטענה. `title` — טקסט שקופץ כשמעבירים עכבר.",
        "ru": "Атрибут — дополнительная настройка тега. Пишется внутри скобок, после имени тега: `<тег атрибут=\"значение\">`. Атрибутов может быть несколько, через пробел.\n`lang=\"he\"` — язык страницы. `dir=\"rtl\"` — направление справа налево (влияет и на точки и номера списков). `align` — выравнивание: `right`, `left`, `center`.\n`id` — уникальное имя элемента; `class` — имя, которое можно дать нескольким элементам. На экране они ничего не меняют, понадобятся в CSS и JavaScript.\n`alt` — текст вместо картинки, если она не загрузилась. `title` — подсказка при наведении мышки.",
        "en": "An attribute is an extra setting of a tag. It goes inside the brackets, after the tag name: `<tag attribute=\"value\">`. You can have several, separated by spaces.\n`lang=\"he\"` — the page language. `dir=\"rtl\"` — right-to-left direction (it also moves list bullets and numbers). `align` — alignment: `right`, `left`, `center`.\n`id` — a unique name for an element; `class` — a name you can give to several elements. They change nothing on screen; they will be needed in CSS and JavaScript.\n`alt` — text shown instead of an image that did not load. `title` — text that pops up on mouse hover."
      }
    },
    {
      "why": {
        "he": "`style` הוא בעצם CSS בתוך התגית. זה נוח לדבר אחד, אבל כשיש 20 כותרות צריך לכתוב את זה 20 פעמים. בגלל זה בהמשך הקורס מעבירים את העיצוב לקובץ CSS נפרד — ואותו כלל `תכונה: ערך;` נשאר.",
        "ru": "`style` — это, по сути, CSS внутри тега. Удобно для одной вещи, но если заголовков 20, писать придётся 20 раз. Поэтому дальше в курсе оформление переносят в отдельный файл CSS — а правило `свойство: значение;` остаётся то же.",
        "en": "`style` is really CSS inside the tag. Handy for one thing, but with 20 headings you write it 20 times. That is why later in the course styling moves to a separate CSS file — and the same `property: value;` rule stays."
      },
      "kind": "board",
      "title": {
        "he": "התכונה style: צבע, רקע, מסגרת",
        "ru": "Атрибут style: цвет, фон, рамка",
        "en": "The style attribute: colour, background, border"
      },
      "text": {
        "he": "את המראה כותבים בתוך `style`: `תכונה: ערך;`. כמה תכונות מפרידים בנקודה־פסיק.\n`color` — צבע הטקסט, `background-color` — צבע הרקע, `border: 2px solid green` — מסגרת בעובי 2 פיקסלים, קו רציף, ירוקה, `font-size` — גודל הגופן.",
        "ru": "Внешний вид пишут внутри `style`: `свойство: значение;`. Несколько свойств разделяют точкой с запятой.\n`color` — цвет текста, `background-color` — цвет фона, `border: 2px solid green` — рамка толщиной 2 пикселя, сплошная, зелёная, `font-size` — размер шрифта.",
        "en": "The look goes inside `style`: `property: value;`. Several properties are separated by semicolons.\n`color` — text colour, `background-color` — background colour, `border: 2px solid green` — a 2-pixel solid green border, `font-size` — font size."
      },
      "math": [
        "<ul>",
        "  <li style=\"color: bisque; background-color: azure\">…</li>",
        "  <li style=\"background-color: plum\">צבע רקע</li>",
        "  <li style=\"border: 2px solid green\">גבולות</li>",
        "</ul>"
      ]
    },
    {
      "why": {
        "he": "אלה שתי \"שפות\" שונות: התכונות שייכות ל-HTML (מופרדות ברווח), ומה שבתוך `style` הוא CSS (מופרד בנקודה-פסיק). אם מערבבים, הדפדפן לא מבין והעיצוב פשוט לא עובד — בלי שום הודעת שגיאה.",
        "ru": "Это два разных «языка»: атрибуты — это HTML (через пробел), а внутри `style` — это CSS (через точку с запятой). Если перепутать, браузер не поймёт, и оформление просто не сработает — без всякого сообщения об ошибке.",
        "en": "These are two different \"languages\": attributes belong to HTML (separated by spaces), and what is inside `style` is CSS (separated by semicolons). Mix them up and the browser does not understand, so the style just does not work — with no error message."
      },
      "kind": "tip",
      "title": {
        "he": "שני מפרידים שונים",
        "ru": "Два разных разделителя",
        "en": "Two different separators"
      },
      "text": {
        "he": "בין תכונות שמים רווח: `style=\"…\" title=\"…\"`.\nנקודה־פסיק צריך רק בתוך style, בין התכונות של העיצוב: `color: red; background-color: plum`.",
        "ru": "Между атрибутами ставят пробел: `style=\"…\" title=\"…\"`.\nТочка с запятой нужна только внутри style, между свойствами: `color: red; background-color: plum`.",
        "en": "Between attributes you put a space: `style=\"…\" title=\"…\"`.\nA semicolon is needed only inside style, between the properties: `color: red; background-color: plum`."
      }
    },
    {
      "why": {
        "he": "הכלל: ההגדרה הכי קרובה לאלמנט מנצחת. כך אפשר לקבוע משהו לכל הדף פעם אחת, ולשנות רק במקום שצריך. זה אותו רעיון שנקרא בהמשך \"הורשה\" ב-CSS.",
        "ru": "Правило: побеждает настройка, которая ближе всего к элементу. Так можно один раз задать что-то для всей страницы и поменять только там, где нужно. Та же идея дальше в CSS называется «наследованием».",
        "en": "The rule: the setting closest to the element wins. So you can set something for the whole page once and change it only where needed. The same idea is called \"inheritance\" in CSS later."
      },
      "kind": "talk",
      "title": {
        "he": "הילד גובר על ההורה",
        "ru": "Ребёнок «перебивает» родителя",
        "en": "The child overrides the parent"
      },
      "text": {
        "he": "אם ל־body יש `align=\"right\"`, כל מה שבתוכו מיושר לימין. אבל אפשר לתת לאלמנט אחד בפנים `align=\"left\"` — ההגדרה שלו גוברת על מה שקבע ההורה.",
        "ru": "Если у body стоит `align=\"right\"`, всё внутри выравнивается вправо. Но одному элементу внутри можно поставить `align=\"left\"` — его собственная настройка «перебивает» то, что задал родитель.",
        "en": "If body has `align=\"right\"`, everything inside it is aligned right. But you can give one element inside `align=\"left\"` — its own setting overrides what the parent set."
      }
    },
    {
      "why": {
        "he": "פיקסלים — גודל קבוע, טוב לאייקון קטן. אחוזים — גודל יחסי, טוב כשהאתר צריך להיראות טוב גם בטלפון וגם במחשב: התמונה מתכווצת יחד עם המסך. בגלל זה אתרים מודרניים משתמשים בעיקר בגדלים יחסיים.",
        "ru": "Пиксели — постоянный размер, хорошо для маленькой иконки. Проценты — относительный размер, хорошо, когда сайт должен смотреться и на телефоне, и на компьютере: картинка уменьшается вместе с экраном. Поэтому современные сайты в основном используют относительные размеры.",
        "en": "Pixels are a fixed size, good for a small icon. Percent is a relative size, good when the site must look right on a phone and a computer: the image shrinks with the screen. That is why modern sites mostly use relative sizes."
      },
      "kind": "board",
      "time": "11:52",
      "title": {
        "he": "גודל תמונה: פיקסלים ואחוזים",
        "ru": "Размер картинки: пиксели и проценты",
        "en": "Image size: pixels and percent"
      },
      "text": {
        "he": "גודל מוחלט — `height=\"150px\"`: תמיד 150 פיקסלים, לא משנה מה גודל החלון.\nגודל יחסי — `width=\"10%\"`: 10% מהרוחב של מה שמסביב (כרגע — החלון). מקטינים את החלון — התמונה קטנה.\nבשורה השלישית נתנו גם גובה וגם רוחב, והתמונה יצאה \"מרוחה\".",
        "ru": "Абсолютный размер — `height=\"150px\"`: всегда 150 пикселей, какое бы ни было окно.\nОтносительный размер — `width=\"10%\"`: 10% ширины того, что вокруг (сейчас — окна). Сузишь окно — картинка станет меньше.\nВ третьей строке задали и высоту, и ширину, и картинка вышла «размазанной» (מרוחה).",
        "en": "Absolute size — `height=\"150px\"`: always 150 pixels, whatever the window size.\nRelative size — `width=\"10%\"`: 10% of the width of what surrounds it (here, the window). Make the window narrower and the image shrinks.\nIn the third line both height and width were given, and the image came out \"smeared\" (stretched)."
      },
      "math": [
        "<h2>תכונות של תמונות</h2>",
        "<img src=\"ziggyStardust.jpg\" height=\"150px\">",
        "<img src=\"ziggyStardust.jpg\" width=\"10%\" alt=\"תמונה על פי אחוזים\">",
        "<img src=\"ziggyStardust.jpg\" height=\"250px\" width=\"350px\" title=\"מרוחה\">"
      ]
    },
    {
      "why": {
        "he": "לכל תמונה יש יחס בין רוחב לגובה. כשנותנים רק מספר אחד, הדפדפן מחשב את השני לפי היחס המקורי. כשנותנים שניים שלא מתאימים ליחס — הוא חייב \"למתוח\" את התמונה.",
        "ru": "У каждой картинки есть соотношение ширины и высоты. Если дать только одно число, браузер посчитает второе по исходному соотношению. Если дать два, которые не подходят к нему, — он вынужден «растянуть» картинку.",
        "en": "Every picture has a ratio between width and height. Give only one number and the browser computes the other from the original ratio. Give two that do not match the ratio and it has to \"stretch\" the picture."
      },
      "kind": "tip",
      "title": {
        "he": "נותנים רק רוחב או רק גובה",
        "ru": "Задавай только ширину или только высоту",
        "en": "Give only the width or only the height"
      },
      "text": {
        "he": "אם נותנים רק אחד מהם, הדפדפן מחשב את השני לבד והפרופורציות נשמרות. אם נותנים את שניהם, התמונה עלולה להימתח או להימעך.",
        "ru": "Если задать только одно из них, браузер сам подберёт второе, и пропорции сохранятся. Если задать оба, картинка может растянуться или сплющиться.",
        "en": "If you give only one of them, the browser works out the other and the proportions stay right. Give both and the image may stretch or squash."
      }
    },
    {
      "why": {
        "he": "`align=\"right\"` מזיז רק את הטקסט. `dir=\"rtl\"` משנה את כיוון הדף כולו — ולכן גם את המקום של הנקודות והמספרים. לדפים בעברית שמים `dir=\"rtl\"` כבר ב-`<html>`, ואז כל הדף נכון מההתחלה.",
        "ru": "`align=\"right\"` двигает только текст. `dir=\"rtl\"` меняет направление всей страницы — а значит, и место точек и номеров. Для страниц на иврите ставим `dir=\"rtl\"` сразу в `<html>`, и тогда вся страница правильная с самого начала.",
        "en": "`align=\"right\"` moves only the text. `dir=\"rtl\"` changes the direction of the whole page — and so also where the bullets and numbers go. For Hebrew pages put `dir=\"rtl\"` right in `<html>`, and the whole page is right from the start."
      },
      "kind": "qa",
      "q": {
        "he": "עשיתי את הכול, אבל הנקודות והמספרים של הרשימה עדיין נשארו בצד שמאל. למה?",
        "ru": "Я всё сделал, но точки и номера списка так и остались слева. Почему?",
        "en": "I did everything, but the list bullets and numbers are still on the left. Why?"
      },
      "a": {
        "he": "צריך לשנות את כיוון הקריאה: `dir=\"rtl\"` (למשל ב־`<html lang=\"he\" dir=\"rtl\">`). הכיוון משפיע על הרשימות, ואז הנקודות והמספרים עוברים לימין.",
        "ru": "Нужно поменять направление чтения: `dir=\"rtl\"` (например, в `<html lang=\"he\" dir=\"rtl\">`). Направление влияет на списки, и точки с номерами переходят направо.",
        "en": "You need to change the reading direction: `dir=\"rtl\"` (for example in `<html lang=\"he\" dir=\"rtl\">`). Direction affects lists, so the bullets and numbers move to the right."
      }
    },
    {
      "why": {
        "he": "למה קורות חיים? זה דף שיש בו מכל דבר קצת: כותרות, רשימות, תמונה וקישורים — בדיוק התגיות של השיעור. וגם: בסוף הקורס זה יכול להפוך לדף אמיתי שמראים למעסיק.",
        "ru": "Почему резюме? На такой странице есть всего понемногу: заголовки, списки, картинка, ссылки — ровно теги урока. И ещё: к концу курса это может стать настоящей страницей, которую показывают работодателю.",
        "en": "Why a CV? Such a page has a bit of everything: headings, lists, a picture and links — exactly the tags of the lesson. And by the end of the course it can become a real page to show an employer."
      },
      "kind": "talk",
      "title": {
        "he": "עבודה בכיתה: דף \"קורות חיים\"",
        "ru": "Работа в классе: страница «קורות חיים»",
        "en": "Class work: a \"CV\" page"
      },
      "text": {
        "he": "אחרי התגיות — כל אחד בונה דף \"קורות חיים\" (אמיתי או מצחיק) בקובץ חדש, מההתחלה: html, head, body — ומבפנים החוצה. כמה שיותר תגיות ותמונות.\nבחצי השעה האחרונה — מעצבים את הדף עם התכונות שלמדנו: יישור, צבעים, רקעים, גודל תמונות. מותר לחפש בגוגל איך עושים תכונה עיצובית מסוימת. תרגיל רשמי יינתן בשבוע הבא.",
        "ru": "После тегов каждый делает страницу «קורות חיים» (резюме, настоящее или шуточное) в новом файле, с нуля: html, head, body — снаружи внутрь. Как можно больше тегов и картинок.\nПоследние полчаса — оформляем страницу атрибутами урока: выравнивание, цвета, фон, размер картинок. Можно искать в Google, как сделать конкретное оформление. Официальное задание будет на следующей неделе.",
        "en": "After the tags, everyone builds a \"CV\" page (real or funny) in a new file, from scratch: html, head, body — outside in. As many tags and images as possible.\nIn the last half hour you style the page with the attributes from class: alignment, colours, backgrounds, image size. You may search Google for how to do a specific style. A proper exercise will be given next week."
      }
    },
    {
      "why": {
        "he": "התרגיל הזה מחבר כמה דפים לאתר אחד: הקישורים הולכים מהדף הראשי לדפי השירים וחזרה. זה הצעד הראשון לפרויקט הסיום, שבו צריך אתר של 4 דפים עם תפריט. `target=\"_blank\"` מלמד עוד דבר חשוב: לחפש בעצמכם תכונה שלא למדתם — כך עובדים מתכנתים כל יום.",
        "ru": "Это упражнение связывает несколько страниц в один сайт: ссылки ведут с главной на страницы песен и обратно. Это первый шаг к итоговому заданию, где нужен сайт из 4 страниц с меню. `target=\"_blank\"` учит ещё одному важному делу — самому найти атрибут, которого не проходили: так программисты работают каждый день.",
        "en": "This exercise joins several pages into one site: links go from the main page to the song pages and back. It is the first step toward the final task, a 4-page site with a menu. `target=\"_blank\"` teaches one more important thing — finding an attribute you did not learn by yourself: programmers do that every day."
      },
      "kind": "talk",
      "title": {
        "he": "תרגיל מחומרי הקורס: אתר רשימת השמעה",
        "ru": "Упражнение из материалов курса: сайт-плейлист",
        "en": "An exercise from the course materials: a playlist site"
      },
      "text": {
        "he": "תרגיל על תכונות מהחומרים של הקורס:\n• עמוד ראשי עם רשימה ממוספרת של לפחות 3 שירים (`<ol>`). כל שיר הוא קישור לעמוד שלו.\n• בכל עמוד שיר: כותרת עם שם השיר והמחבר; תמונה של המחבר שלחיצה עליה פותחת את ויקיפדיה, עם `title`, ברוחב `10%` מהמסך; מילות השיר ממורכזות, כל בית בתיבה עם צבע רקע; קישור ל-YouTube שנפתח בכרטיסייה חדשה; קישור חזרה לעמוד הראשי.\nכרטיסייה חדשה — זו תכונה שלא למדנו, צריך לחפש: `target=\"_blank\"`.",
        "ru": "Упражнение на атрибуты из материалов курса:\n• Главная страница с нумерованным списком минимум из 3 песен (`<ol>`). Каждая песня — ссылка на свою страницу.\n• На странице песни: заголовок с названием и автором; фото автора, клик по которому открывает Википедию, с `title` и шириной `10%` экрана; слова песни по центру, каждый куплет в блоке со своим цветом фона; ссылка на YouTube, которая открывается в новой вкладке; ссылка назад на главную.\nНовая вкладка — атрибут, которого на уроке не было, его надо найти самому: `target=\"_blank\"`.",
        "en": "An attributes exercise from the course materials:\n• A main page with a numbered list of at least 3 songs (`<ol>`). Each song links to its own page.\n• On each song page: a header with the song and the author; a photo of the author that opens Wikipedia when clicked, with a `title` and a width of `10%` of the screen; the lyrics centred, each verse in a box with a background colour; a YouTube link that opens in a new tab; a link back to the main page.\nA new tab is an attribute we did not learn, you have to look it up: `target=\"_blank\"`."
      },
      "math": [
        "<a href=\"https://he.wikipedia.org/…\">",
        "    <img src=\"author.jpg\" width=\"10%\" title=\"…\">",
        "</a>",
        "<a href=\"https://youtube.com/…\" target=\"_blank\">YouTube</a>",
        "<a href=\"index.html\">חזרה</a>"
      ]
    },
    {
      "why": {
        "he": "הדפדפן \"סלחן\": הוא מתקן לבד הרבה טעויות כדי שהדף ייפתח. אבל דפדפן אחר או בודק אוטומטי יכול להבין את זה אחרת. לכן לומדים את הכתיבה הנכונה מההתחלה — כמו לכתוב בלי שגיאות כתיב, גם אם מבינים אתכם.",
        "ru": "Браузер «прощает»: он сам чинит много ошибок, чтобы страница открылась. Но другой браузер или автоматическая проверка может понять это иначе. Поэтому учим правильную запись с самого начала — как писать без орфографических ошибок, даже если тебя и так поймут.",
        "en": "The browser \"forgives\": it fixes many mistakes itself so the page opens. But another browser or an automatic checker may read it differently. So learn the correct form from the start — like spelling correctly even when people would understand you anyway."
      },
      "kind": "faq",
      "q": {
        "he": "כותבים `<br>` או `</br>`?",
        "ru": "Писать `<br>` или `</br>`?",
        "en": "Do we write `<br>` or `</br>`?"
      },
      "a": {
        "he": "לפי כללי HTML הנכון הוא `<br>` — תגית בודדת בלי סגירה. דפדפנים מתקנים בשקט גם `</br>`, ולכן זה עבד בשיעור. אותו דבר עם `width`/`height`: לפי התקן כותבים מספר בלי יחידות (`height=\"150\"` זה כבר פיקסלים), ואת האחוזים עושים בהמשך ב־CSS.",
        "ru": "По правилам HTML правильно `<br>` — одиночный тег без закрытия. Браузеры молча чинят и `</br>`, поэтому на уроке всё работало. То же с `width`/`height`: по стандарту пишут число без единиц (`height=\"150\"` — это уже пиксели), а проценты дальше будут через CSS.",
        "en": "By the HTML rules the correct form is `<br>` — a single tag with no closing. Browsers quietly fix `</br>` too, which is why it worked in class. Same with `width`/`height`: by the standard you write a plain number (`height=\"150\"` already means pixels), and percent comes later with CSS."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "מקובצי השיעור של המרצה: עוד תגיות קטנות",
        "ru": "Из файлов урока преподавателя: ещё маленькие теги",
        "en": "From the teacher's lesson files: a few more small tags"
      },
      "text": {
        "he": "`<button>` — כפתור. `<b>` — טקסט מודגש. `<i>` — טקסט נטוי.\n`<!DOCTYPE html>` — שורה ראשונה בקובץ: אומרת לדפדפן \"זה HTML מודרני\".\n`<html lang=\"he\" dir=\"rtl\">` — שפת הדף וכיוון הכתיבה לכל הדף בבת אחת.",
        "ru": "`<button>` — кнопка. `<b>` — жирный текст. `<i>` — курсив.\n`<!DOCTYPE html>` — первая строка файла: говорит браузеру «это современный HTML».\n`<html lang=\"he\" dir=\"rtl\">` — язык страницы и направление письма сразу для всей страницы.",
        "en": "`<button>` — a button. `<b>` — bold text. `<i>` — italic text.\n`<!DOCTYPE html>` — the first line of the file: tells the browser \"this is modern HTML\".\n`<html lang=\"he\" dir=\"rtl\">` — the page language and writing direction for the whole page at once."
      },
      "math": [
        "<!DOCTYPE html>",
        "<html lang=\"he\" dir=\"rtl\">",
        "  <body>",
        "    <p><b>bold</b> and <i>italic</i></p>",
        "    <button>Click me</button>",
        "  </body>",
        "</html>"
      ],
      "why": {
        "he": "למה `dir` על `<html>` ולא על כל פסקה? כי אז כל הדף יורש אותו — זה שוב \"הילד יורש מההורה\". ו-`<!DOCTYPE html>`: בלעדיו הדפדפן עובר ל\"מצב ישן\" (Quirks Mode) ומציג חלק מהדברים אחרת. ב-VS Code הקיצור `!` ואז Enter כותב את כל השלד יחד עם השורה הזאת.",
        "ru": "Почему `dir` у `<html>`, а не у каждого абзаца? Тогда вся страница его наследует — снова «ребёнок наследует от родителя». А `<!DOCTYPE html>`: без него браузер переходит в «старый режим» (Quirks Mode) и показывает часть вещей иначе. В VS Code сокращение `!` и Enter пишет весь скелет вместе с этой строкой.",
        "en": "Why `dir` on `<html>` and not on every paragraph? Then the whole page inherits it — again \"the child inherits from the parent\". And `<!DOCTYPE html>`: without it the browser switches to an \"old mode\" (Quirks Mode) and shows some things differently. In VS Code the shortcut `!` then Enter writes the whole skeleton including this line."
      },
      "_src": "pass-0311"
    },
    {
      "kind": "tip",
      "title": {
        "he": "HTML \"סלחנית\" — ולכן צריך לבדוק בעצמך",
        "ru": "HTML «прощает ошибки» — поэтому проверяй сам",
        "en": "HTML \"forgives\" — so check yourself"
      },
      "text": {
        "he": "מהמצגת: ל-HTML אין קומפיילר. טעות לא עוצרת את הדף — הדפדפן מנחש ומציג משהו. דוגמה מקבצי השיעור: ברשימה כתוב `<li><ul>…</ul></li>`, והדף עדיין עובד. הסדר הנכון הפוך: `<ul>` בחוץ, `<li>` בפנים. גם `</br>` עובד, אבל הנכון הוא `<br>`.",
        "ru": "Из презентации: у HTML нет компилятора. Ошибка не останавливает страницу — браузер угадывает и что-то показывает. Пример из файлов урока: в списке написано `<li><ul>…</ul></li>`, и страница всё равно работает. Правильный порядок наоборот: `<ul>` снаружи, `<li>` внутри. И `</br>` тоже срабатывает, но правильно `<br>`.",
        "en": "From the slides: HTML has no compiler. A mistake does not stop the page — the browser guesses and shows something. Example from the lesson files: a list written as `<li><ul>…</ul></li>`, and the page still works. The right order is the other way round: `<ul>` outside, `<li>` inside. `</br>` also works, but the correct form is `<br>`."
      },
      "math": [
        "<ul>",
        "  <li>first</li>",
        "  <li>second</li>",
        "</ul>"
      ],
      "why": {
        "he": "למה זה חשוב אם זה עובד? כי דפדפנים שונים \"מנחשים\" אחרת, ובהמשך CSS ו-JavaScript מחפשים את המבנה הנכון. ב-Java המחשב צועק על כל טעות; ב-HTML הוא שותק, ולכן בודקים לבד: מסתכלים על הדף, ובכלי המפתחים (F12) רואים איך הדפדפן הבין את הקוד.",
        "ru": "Почему это важно, если работает? Разные браузеры «угадывают» по-разному, а позже CSS и JavaScript ищут правильную структуру. В Java компьютер кричит о каждой ошибке, а в HTML молчит, поэтому проверяем сами: смотрим на страницу, а в инструментах разработчика (F12) видно, как браузер понял код.",
        "en": "Why does it matter if it works? Different browsers \"guess\" differently, and later CSS and JavaScript look for the correct structure. In Java the computer shouts about every mistake; in HTML it stays silent, so check yourself: look at the page, and in the developer tools (F12) you can see how the browser understood the code."
      },
      "_src": "pass-0311"
    },
    {
      "kind": "tip",
      "title": {
        "he": "מהתרגיל של המרצה: קורות חיים — בונוס",
        "ru": "Из задания преподавателя: резюме — бонус",
        "en": "From the teacher's exercise: the CV — bonus"
      },
      "text": {
        "he": "בתרגיל קורות החיים: כל חלק (פרטים, ניסיון, השכלה, כישורים) בתוך `<div>` או `<section>` משלו. בונוס: האייקון של הרשת החברתית הוא בעצמו הקישור — שמים `<img>` בתוך `<a>`.",
        "ru": "В задании «резюме»: каждый раздел (данные, опыт, образование, навыки) — в своём `<div>` или `<section>`. Бонус: иконка соцсети сама является ссылкой — кладём `<img>` внутрь `<a>`.",
        "en": "In the CV exercise: each part (details, experience, education, skills) goes in its own `<div>` or `<section>`. Bonus: the social-network icon is itself the link — put `<img>` inside `<a>`."
      },
      "math": [
        "<section>",
        "  <h2>Contact</h2>",
        "  <a href=\"https://github.com/…\">",
        "    <img src=\"github.png\" width=\"32\">",
        "  </a>",
        "</section>"
      ],
      "why": {
        "he": "למה לחלק לבלוקים? כך הקוד קריא, וכשנלמד CSS אפשר יהיה לעצב כל חלק בנפרד. `<section>` הוא כמו `<div>`, אבל עם משמעות: \"זה פרק בדף\". קישור יכול לעטוף כל דבר, לא רק טקסט.",
        "ru": "Зачем делить на блоки? Так код читается, а когда будет CSS, каждый раздел можно будет оформить отдельно. `<section>` — как `<div>`, но со смыслом: «это раздел страницы». Ссылка может обернуть что угодно, не только текст.",
        "en": "Why split into blocks? The code is readable, and once we learn CSS each part can be styled separately. `<section>` is like `<div>` but with meaning: \"this is a section of the page\". A link can wrap anything, not only text."
      },
      "_src": "pass-0311"
    }
  ],
  "review": [
    {
      "title": {
        "he": "צד לקוח וצד שרת",
        "ru": "Клиент и сервер",
        "en": "Client and server"
      },
      "text": {
        "he": "Front-end — מה שהמשתמש רואה. Back-end — מה שקורה מאחורי הקלעים. השנה לומדים רק צד לקוח: HTML, CSS, JavaScript.",
        "ru": "Front-end — то, что видит пользователь. Back-end — то, что за кулисами. В этом году только клиентская часть: HTML, CSS, JavaScript.",
        "en": "Front-end is what the user sees. Back-end is what happens behind the scenes. This year is client side only: HTML, CSS, JavaScript."
      }
    },
    {
      "title": {
        "he": "השלד",
        "ru": "Скелет",
        "en": "The skeleton"
      },
      "text": {
        "he": "`<html>` עוטף הכול, `<head>` — מה שלא רואים בדף (`<title>`), `<body>` — כל מה שרואים.",
        "ru": "`<html>` оборачивает всё, `<head>` — то, чего не видно на странице (`<title>`), `<body>` — всё видимое.",
        "en": "`<html>` wraps everything, `<head>` holds what is not shown (`<title>`), `<body>` holds everything visible."
      }
    },
    {
      "title": {
        "he": "תגית = פתיחה + סגירה",
        "ru": "Тег = открытие + закрытие",
        "en": "Tag = open + close"
      },
      "text": {
        "he": "`<p>` … `</p>`. פותחים וסוגרים מיד, ורק אז כותבים בפנים. `<br>` ו־`<img>` הן תגיות בודדות בלי סגירה.",
        "ru": "`<p>` … `</p>`. Открыл и сразу закрыл, потом пиши внутрь. `<br>` и `<img>` — одиночные теги без закрытия.",
        "en": "`<p>` … `</p>`. Open and close right away, then write inside. `<br>` and `<img>` are single tags with no closing."
      }
    },
    {
      "title": {
        "he": "רשימות",
        "ru": "Списки",
        "en": "Lists"
      },
      "text": {
        "he": "`<ol>` — ממוספרת, `<ul>` — עם נקודות. כל פריט הוא `<li>`, והוא חי רק בתוך ol או ul.",
        "ru": "`<ol>` — нумерованный, `<ul>` — с точками. Каждый пункт — `<li>`, он живёт только внутри ol или ul.",
        "en": "`<ol>` is numbered, `<ul>` has bullets. Each item is an `<li>`, which lives only inside ol or ul."
      }
    },
    {
      "title": {
        "he": "קישור ותמונה",
        "ru": "Ссылка и картинка",
        "en": "Link and image"
      },
      "text": {
        "he": "`<a href=\"כתובת\">טקסט</a>` — קישור. `<img src=\"שם.jpg\">` — תמונה; הכי קל לשים אותה באותה תיקייה של הקובץ.",
        "ru": "`<a href=\"адрес\">текст</a>` — ссылка. `<img src=\"имя.jpg\">` — картинка; проще всего держать её в той же папке, что и файл.",
        "en": "`<a href=\"address\">text</a>` is a link. `<img src=\"name.jpg\">` is an image; easiest to keep it in the same folder as the file."
      }
    },
    {
      "title": {
        "he": "תכונות",
        "ru": "Атрибуты",
        "en": "Attributes"
      },
      "text": {
        "he": "בתוך תגית הפתיחה: `<תגית תכונה=\"ערך\">`. החשובות: `dir`, `align`, `style`, `id`, `class`, `alt`, `title`.",
        "ru": "Внутри открывающего тега: `<тег атрибут=\"значение\">`. Главные: `dir`, `align`, `style`, `id`, `class`, `alt`, `title`.",
        "en": "Inside the opening tag: `<tag attribute=\"value\">`. Key ones: `dir`, `align`, `style`, `id`, `class`, `alt`, `title`."
      }
    },
    {
      "title": {
        "he": "style",
        "ru": "style",
        "en": "style"
      },
      "text": {
        "he": "`style=\"color: red; background-color: plum\"` — תכונה: ערך, ונקודה־פסיק ביניהן.",
        "ru": "`style=\"color: red; background-color: plum\"` — свойство: значение, между ними точка с запятой.",
        "en": "`style=\"color: red; background-color: plum\"` — property: value, with a semicolon between them."
      }
    },
    {
      "title": {
        "he": "גודל תמונה",
        "ru": "Размер картинки",
        "en": "Image size"
      },
      "text": {
        "he": "פיקסלים — גודל קבוע; אחוזים — יחסית למה שמסביב. נותנים רק רוחב או רק גובה, כדי שהתמונה לא תימרח.",
        "ru": "Пиксели — постоянный размер; проценты — относительно того, что вокруг. Задавай только ширину или только высоту, чтобы картинка не «размазалась».",
        "en": "Pixels give a fixed size; percent is relative to the surroundings. Give only width or only height so the image is not stretched."
      }
    }
  ],
  "tasks": {
    "groups": {
      "cv": {
        "he": "מהעבודה בכיתה: דף קורות חיים",
        "ru": "Из работы в классе: страница-резюме",
        "en": "From the class work: the CV page"
      },
      "pl": {
        "he": "מחומרי הקורס: אתר רשימת השמעה",
        "ru": "Из материалов курса: сайт-плейлист",
        "en": "From the course materials: a playlist site"
      },
      "files": {
        "he": "מקובצי השיעור של המרצה",
        "ru": "Из файлов урока преподавателя",
        "en": "From the teacher's lesson files"
      }
    },
    "teacher": [
      {
        "id": "t-cv-1",
        "group": "cv",
        "label": {
          "he": "שלד",
          "ru": "Скелет",
          "en": "Skeleton"
        },
        "kind": "choice",
        "text": {
          "he": "מתחילים את דף קורות החיים בקובץ חדש. איזה שלד נכון?",
          "ru": "Начинаем страницу-резюме в новом файле. Какой скелет правильный?",
          "en": "You start the CV page in a new file. Which skeleton is correct?"
        },
        "options": [
          "`<html><body></body><head></head></html>`",
          "`<html><head></head><body></body></html>`",
          "`<head><html></html><body></body></head>`",
          "`<body><head></head></body>`"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "מה עוטף את כל הדף?",
            "ru": "Что оборачивает всю страницу?",
            "en": "What wraps the whole page?"
          },
          {
            "he": "`<html>` בחוץ; בתוכו קודם `<head>` ואחריו `<body>`.",
            "ru": "Снаружи `<html>`; внутри сначала `<head>`, потом `<body>`.",
            "en": "`<html>` outside; inside it first `<head>`, then `<body>`."
          }
        ],
        "solution": [
          {
            "he": "`<html>` הוא תחילת הדף וסופו, לכן הוא בחוץ.",
            "ru": "`<html>` — начало и конец страницы, значит он снаружи.",
            "en": "`<html>` is the start and end of the page, so it is outside."
          },
          {
            "he": "בתוכו \"הראש\" `<head>` (מה שלא רואים) ואחריו \"הגוף\" `<body>` (מה שרואים).",
            "ru": "Внутри «голова» `<head>` (невидимое) и после неё «тело» `<body>` (видимое).",
            "en": "Inside it the \"head\" `<head>` (not visible), then the \"body\" `<body>` (visible)."
          },
          "<html><head></head><body></body></html>"
        ]
      },
      {
        "id": "t-cv-2",
        "group": "cv",
        "label": {
          "he": "כיוון",
          "ru": "Направление",
          "en": "Direction"
        },
        "kind": "text",
        "text": {
          "he": "בדף בעברית הנקודות של הרשימה נשארו בצד שמאל. איזו תכונה צריך להוסיף ל־`<html>` כדי שהן יעברו לימין? (כתבו את שם התכונה)",
          "ru": "На странице на иврите точки списка остались слева. Какой атрибут нужно добавить в `<html>`, чтобы они перешли направо? (напиши имя атрибута)",
          "en": "On a Hebrew page the list bullets stayed on the left. Which attribute must be added to `<html>` to move them to the right? (write the attribute name)"
        },
        "answer": {
          "accept": [
            "dir",
            "dir=\"rtl\"",
            "dir=rtl",
            "dir = \"rtl\"",
            "dir = rtl"
          ]
        },
        "hints": [
          {
            "he": "השאלה היא על כיוון הקריאה של הדף.",
            "ru": "Вопрос про направление чтения страницы.",
            "en": "The question is about the reading direction of the page."
          },
          {
            "he": "right to left בקיצור הוא rtl. איך נקראת התכונה שמקבלת את הערך הזה?",
            "ru": "right to left сокращённо rtl. Как называется атрибут с этим значением?",
            "en": "right to left is rtl for short. What is the attribute that takes this value?"
          }
        ],
        "solution": [
          {
            "he": "כיוון הקריאה משפיע גם על הרשימות.",
            "ru": "Направление чтения влияет и на списки.",
            "en": "The reading direction also affects lists."
          },
          "<html lang=\"he\" dir=\"rtl\">",
          {
            "he": "התשובה: `dir` (עם הערך `rtl`).",
            "ru": "Ответ: `dir` (со значением `rtl`).",
            "en": "Answer: `dir` (with the value `rtl`)."
          }
        ]
      },
      {
        "id": "t-cv-3",
        "group": "cv",
        "label": {
          "he": "תמונה",
          "ru": "Картинка",
          "en": "Image"
        },
        "kind": "choice",
        "text": {
          "he": "בדף קורות החיים התמונה יצאה \"מרוחה\": `<img src=\"me.jpg\" height=\"250\" width=\"350\">`. מה הדרך שלמדנו לתקן?",
          "ru": "На странице-резюме картинка вышла «размазанной»: `<img src=\"me.jpg\" height=\"250\" width=\"350\">`. Как исправить по уроку?",
          "en": "On the CV page the image came out \"smeared\": `<img src=\"me.jpg\" height=\"250\" width=\"350\">`. What fix did we learn?"
        },
        "options": [
          {
            "he": "להשאיר רק רוחב או רק גובה",
            "ru": "Оставить только ширину или только высоту",
            "en": "Keep only the width or only the height"
          },
          {
            "he": "להוסיף `alt`",
            "ru": "Добавить `alt`",
            "en": "Add `alt`"
          },
          {
            "he": "להחליף את `src` ב־`href`",
            "ru": "Заменить `src` на `href`",
            "en": "Replace `src` with `href`"
          },
          {
            "he": "להגדיל את שני המספרים",
            "ru": "Увеличить оба числа",
            "en": "Make both numbers bigger"
          }
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "התמונה נמתחת כשהגובה והרוחב לא מתאימים לפרופורציות המקוריות.",
            "ru": "Картинка растягивается, когда высота и ширина не соответствуют исходным пропорциям.",
            "en": "The image stretches when height and width do not match its original proportions."
          },
          {
            "he": "אם נותנים רק מידה אחת, מי מחשב את השנייה?",
            "ru": "Если задать только один размер, кто посчитает второй?",
            "en": "If you give only one size, who works out the other?"
          }
        ],
        "solution": [
          {
            "he": "כשנותנים גם גובה וגם רוחב, הדפדפן מכריח את התמונה למידות האלה.",
            "ru": "Когда заданы и высота, и ширина, браузер втискивает картинку в эти размеры.",
            "en": "With both height and width, the browser forces the image into those sizes."
          },
          {
            "he": "משאירים רק אחת מהן — הדפדפן מחשב את השנייה והפרופורציות נשמרות:",
            "ru": "Оставляем одну — браузер посчитает вторую, пропорции сохранятся:",
            "en": "Keep just one — the browser computes the other and keeps the proportions:"
          },
          "<img src=\"me.jpg\" width=\"350\">"
        ]
      },
      {
        "id": "t-cv-4",
        "group": "cv",
        "label": {
          "he": "עיצוב",
          "ru": "Оформление",
          "en": "Styling"
        },
        "kind": "choice",
        "text": {
          "he": "בעיצוב דף קורות החיים רוצים כותרת בצבע ירוק עם רקע plum. איזה קוד נכון?",
          "ru": "При оформлении резюме нужен заголовок зелёного цвета с фоном plum. Какой код правильный?",
          "en": "Styling the CV page, you want a green heading on a plum background. Which code is correct?"
        },
        "options": [
          "`<h1 color=\"green\" background=\"plum\">`",
          "`<h1 style=\"color: green, background-color: plum\">`",
          "`<h1 style=\"color: green; background-color: plum\">`",
          "`<h1 style=\"green; plum\">`"
        ],
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "אין תכונות נפרדות color ו־background — הכול נכתב בתוך style.",
            "ru": "Отдельных атрибутов color и background нет — всё пишется внутри style.",
            "en": "There are no separate color and background attributes — everything goes inside style."
          },
          {
            "he": "בתוך style: `תכונה: ערך`, ובין תכונות — נקודה־פסיק.",
            "ru": "Внутри style: `свойство: значение`, между свойствами — точка с запятой.",
            "en": "Inside style: `property: value`, and a semicolon between properties."
          }
        ],
        "solution": [
          {
            "he": "צבע טקסט — `color`, צבע רקע — `background-color`.",
            "ru": "Цвет текста — `color`, цвет фона — `background-color`.",
            "en": "Text colour is `color`, background colour is `background-color`."
          },
          {
            "he": "מפרידים ביניהן בנקודה־פסיק, לא בפסיק:",
            "ru": "Разделяем точкой с запятой, а не запятой:",
            "en": "Separate them with a semicolon, not a comma:"
          },
          "<h1 style=\"color: green; background-color: plum\">"
        ]
      },
      {
        "id": "t-pl-1",
        "group": "pl",
        "label": "target",
        "kind": "text",
        "text": {
          "he": "בתרגיל הפלייליסט הקישור ל-YouTube צריך להיפתח בכרטיסייה חדשה. איזו תכונה מוסיפים ל-`<a>`? כתבו את התכונה עם הערך.",
          "ru": "В плейлисте ссылка на YouTube должна открываться в новой вкладке. Какой атрибут добавляем в `<a>`? Напиши атрибут вместе со значением.",
          "en": "In the playlist exercise the YouTube link must open in a new tab. Which attribute do we add to `<a>`? Write the attribute with its value."
        },
        "answer": {
          "accept": [
            "target=\"_blank\"",
            "target='_blank'",
            "target=_blank",
            "target = \"_blank\""
          ]
        },
        "hints": [
          {
            "he": "שם התכונה מתחיל ב-t, והערך מתחיל בקו תחתון.",
            "ru": "Имя атрибута начинается на t, а значение — с нижнего подчёркивания.",
            "en": "The attribute name starts with t, the value starts with an underscore."
          }
        ],
        "solution": [
          "<a href=\"https://youtube.com/…\" target=\"_blank\">YouTube</a>",
          {
            "he": "`target=\"_blank\"` פותח את הקישור בכרטיסייה חדשה.",
            "ru": "`target=\"_blank\"` открывает ссылку в новой вкладке.",
            "en": "`target=\"_blank\"` opens the link in a new tab."
          }
        ]
      },
      {
        "id": "t-pl-2",
        "group": "pl",
        "label": "width 10%",
        "kind": "choice",
        "text": {
          "he": "`<img src=\"author.jpg\" width=\"10%\">` — 10% ממה?",
          "ru": "`<img src=\"author.jpg\" width=\"10%\">` — 10% от чего?",
          "en": "`<img src=\"author.jpg\" width=\"10%\">` — 10% of what?"
        },
        "options": [
          {
            "he": "מהרוחב המקורי של התמונה",
            "ru": "От исходной ширины картинки",
            "en": "Of the picture's original width"
          },
          {
            "he": "מרוחב המסך (ליתר דיוק: של הבלוק שהתמונה נמצאת בו)",
            "ru": "От ширины экрана (точнее, блока, в котором лежит картинка)",
            "en": "Of the screen width (more exactly: of the block the picture is in)"
          },
          {
            "he": "10 פיקסלים",
            "ru": "10 пикселей",
            "en": "10 pixels"
          }
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "מה קורה לתמונה כשמצמצמים את החלון?",
            "ru": "Что происходит с картинкой, когда сужаешь окно?",
            "en": "What happens to the picture when you make the window narrower?"
          }
        ],
        "solution": [
          {
            "he": "באחוזים הגודל נמדד ביחס למסך (לבלוק שמכיל את התמונה), לא ביחס לתמונה עצמה. כך כתוב גם בחומר של השיעור.",
            "ru": "Проценты считаются от экрана (от блока, где лежит картинка), а не от самой картинки. Так написано и в материале урока.",
            "en": "Percent is measured against the screen (the block holding the picture), not the picture itself. The lesson material says the same."
          }
        ]
      },
      {
        "id": "t-pl-3",
        "group": "pl",
        "label": "img → link",
        "kind": "choice",
        "text": {
          "he": "לחיצה על תמונת המחבר צריכה לפתוח את ויקיפדיה. איזה קוד נכון?",
          "ru": "Клик по фото автора должен открыть Википедию. Какой код правильный?",
          "en": "Clicking the author's photo must open Wikipedia. Which code is right?"
        },
        "options": [
          "<img src=\"author.jpg\" href=\"https://he.wikipedia.org/…\">",
          "<a href=\"https://he.wikipedia.org/…\"><img src=\"author.jpg\"></a>",
          "<a src=\"author.jpg\">https://he.wikipedia.org/…</a>"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "ל-`<img>` אין תכונה `href`. מה עוטף את התמונה?",
            "ru": "У `<img>` нет атрибута `href`. Что оборачивает картинку?",
            "en": "`<img>` has no `href` attribute. What wraps the picture?"
          }
        ],
        "solution": [
          {
            "he": "את `<img>` שמים בתוך `<a>` — כך התמונה עצמה היא הקישור.",
            "ru": "`<img>` кладём внутрь `<a>` — тогда сама картинка становится ссылкой.",
            "en": "Put `<img>` inside `<a>` — then the picture itself is the link."
          }
        ]
      },
      {
        "id": "fz1",
        "group": "files",
        "label": "<ul> <li>",
        "kind": "choice",
        "text": {
          "he": "איזה קוד של רשימה נכון?",
          "ru": "Какой код списка правильный?",
          "en": "Which list code is correct?"
        },
        "options": [
          "`<li><ul>milk</ul></li>`",
          "`<ul><li>milk</li></ul>`",
          "`<ul>milk</ul><li>`",
          "`<li>milk<ul>`"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "הרשימה היא הקופסה, הפריט בתוכה.",
            "ru": "Список — коробка, пункт — внутри.",
            "en": "The list is the box, the item goes inside."
          }
        ],
        "solution": [
          {
            "he": "`ul` = הרשימה כולה, `li` = פריט אחד בתוכה.",
            "ru": "`ul` — весь список, `li` — один пункт внутри.",
            "en": "`ul` = the whole list, `li` = one item inside."
          },
          {
            "he": "תשובה: `<ul><li>milk</li></ul>`",
            "ru": "Ответ: `<ul><li>milk</li></ul>`",
            "en": "Answer: `<ul><li>milk</li></ul>`"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "fz2",
        "group": "files",
        "label": "<b>",
        "kind": "choice",
        "text": {
          "he": "איזו תגית עושה טקסט מודגש?",
          "ru": "Какой тег делает текст жирным?",
          "en": "Which tag makes text bold?"
        },
        "options": [
          "`<i>`",
          "`<b>`",
          "`<br>`",
          "`<button>`"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "b = bold.",
            "ru": "b = bold (жирный).",
            "en": "b = bold."
          }
        ],
        "solution": [
          {
            "he": "`<b>` מודגש, `<i>` נטוי, `<br>` ירידת שורה, `<button>` כפתור.",
            "ru": "`<b>` — жирный, `<i>` — курсив, `<br>` — перенос строки, `<button>` — кнопка.",
            "en": "`<b>` bold, `<i>` italic, `<br>` line break, `<button>` a button."
          },
          {
            "he": "תשובה: `<b>`",
            "ru": "Ответ: `<b>`",
            "en": "Answer: `<b>`"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "fz3",
        "group": "files",
        "label": "DOCTYPE",
        "kind": "choice",
        "text": {
          "he": "איפה כותבים `<!DOCTYPE html>`?",
          "ru": "Где пишут `<!DOCTYPE html>`?",
          "en": "Where do you write `<!DOCTYPE html>`?"
        },
        "options": [
          {
            "he": "בשורה הראשונה של הקובץ",
            "ru": "Первой строкой файла",
            "en": "On the first line of the file"
          },
          {
            "he": "בתוך `<head>`",
            "ru": "Внутри `<head>`",
            "en": "Inside `<head>`"
          },
          {
            "he": "בסוף `<body>`",
            "ru": "В конце `<body>`",
            "en": "At the end of `<body>`"
          },
          {
            "he": "בכל פסקה",
            "ru": "В каждом абзаце",
            "en": "In every paragraph"
          }
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "זו הודעה לדפדפן עוד לפני שהוא קורא את ה-HTML.",
            "ru": "Это сообщение браузеру ещё до того, как он прочтёт HTML.",
            "en": "It is a note to the browser before it reads the HTML."
          }
        ],
        "solution": [
          {
            "he": "תשובה: בשורה הראשונה, לפני `<html>`",
            "ru": "Ответ: первой строкой, до `<html>`",
            "en": "Answer: on the first line, before `<html>`"
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
          "he": "כותרת",
          "ru": "Заголовок",
          "en": "Heading"
        },
        "kind": "text",
        "text": {
          "he": "איזו תגית יוצרת את הכותרת הכי גדולה וחשובה בדף? (כתבו רק את שם התגית)",
          "ru": "Какой тег создаёт самый большой и главный заголовок страницы? (напиши только имя тега)",
          "en": "Which tag makes the biggest, most important heading on the page? (write just the tag name)"
        },
        "answer": {
          "accept": [
            "h1",
            "<h1>",
            "<h1></h1>"
          ]
        },
        "hints": [
          {
            "he": "כותרות הן h1 עד h6.",
            "ru": "Заголовки — от h1 до h6.",
            "en": "Headings go from h1 to h6."
          },
          {
            "he": "ככל שהמספר קטן יותר, הכותרת גדולה יותר.",
            "ru": "Чем меньше цифра, тем больше заголовок.",
            "en": "The smaller the number, the bigger the heading."
          }
        ],
        "solution": [
          {
            "he": "כותרות: `<h1>` … `<h6>`; h1 היא הגדולה ביותר.",
            "ru": "Заголовки: `<h1>` … `<h6>`; h1 — самый большой.",
            "en": "Headings: `<h1>` … `<h6>`; h1 is the biggest."
          },
          "<h1>קורות החיים שלי</h1>"
        ]
      },
      {
        "id": "ai-2",
        "level": 1,
        "label": {
          "he": "רשימה ממוספרת",
          "ru": "Нумерованный список",
          "en": "Numbered list"
        },
        "kind": "choice",
        "text": {
          "he": "רוצים רשימה שבה המספרים 1, 2, 3 מופיעים לבד. באיזו תגית עוטפים את הפריטים?",
          "ru": "Нужен список, где номера 1, 2, 3 ставятся сами. Каким тегом оборачиваем пункты?",
          "en": "You want a list where the numbers 1, 2, 3 appear by themselves. Which tag wraps the items?"
        },
        "options": [
          "`<ul>`",
          "`<ol>`",
          "`<li>`",
          "`<p>`"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "o = ordered (מסודרת), u = unordered.",
            "ru": "o = ordered (упорядоченный), u = unordered.",
            "en": "o = ordered, u = unordered."
          },
          {
            "he": "`<li>` הוא פריט אחד, לא הרשימה כולה.",
            "ru": "`<li>` — один пункт, а не весь список.",
            "en": "`<li>` is one item, not the whole list."
          }
        ],
        "solution": [
          {
            "he": "`<ol>` (ordered list) — רשימה ממוספרת. `<ul>` — עם נקודות.",
            "ru": "`<ol>` (ordered list) — нумерованный список. `<ul>` — с точками.",
            "en": "`<ol>` (ordered list) is numbered. `<ul>` has bullets."
          },
          "<ol><li>ראשון</li><li>שני</li></ol>"
        ]
      },
      {
        "id": "ai-3",
        "level": 1,
        "label": {
          "he": "כתובת הקישור",
          "ru": "Адрес ссылки",
          "en": "Link address"
        },
        "kind": "text",
        "text": {
          "he": "בתגית `<a>` — באיזו תכונה כותבים את הכתובת שאליה הקישור מוביל?",
          "ru": "В теге `<a>` — в каком атрибуте пишут адрес, куда ведёт ссылка?",
          "en": "In the `<a>` tag — which attribute holds the address the link goes to?"
        },
        "answer": {
          "accept": [
            "href",
            "href=",
            "href=\"\""
          ]
        },
        "hints": [
          {
            "he": "בלי התכונה הזו `<a>` הוא סתם טקסט.",
            "ru": "Без этого атрибута `<a>` — просто текст.",
            "en": "Without this attribute `<a>` is just text."
          },
          {
            "he": "ארבע אותיות, מתחיל ב־h.",
            "ru": "Четыре буквы, начинается на h.",
            "en": "Four letters, starts with h."
          }
        ],
        "solution": [
          "<a href=\"https://www.google.com\">קישור לגוגל</a>",
          {
            "he": "התשובה: `href`.",
            "ru": "Ответ: `href`.",
            "en": "Answer: `href`."
          }
        ]
      },
      {
        "id": "ai-4",
        "level": 1,
        "label": {
          "he": "תמונה שלא נטענה",
          "ru": "Картинка не загрузилась",
          "en": "Image did not load"
        },
        "kind": "choice",
        "text": {
          "he": "איזו תכונה של `<img>` נותנת טקסט שיוצג במקום התמונה אם היא לא נטענה?",
          "ru": "Какой атрибут `<img>` даёт текст, который покажется вместо картинки, если она не загрузилась?",
          "en": "Which `<img>` attribute gives text shown instead of the image if it fails to load?"
        },
        "options": [
          "`title`",
          "`src`",
          "`alt`",
          "`id`"
        ],
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "`title` קופץ כשמעבירים עכבר — זה משהו אחר.",
            "ru": "`title` всплывает при наведении мыши — это другое.",
            "en": "`title` pops up on mouse hover — that is something else."
          },
          {
            "he": "מקור המילה: alternative.",
            "ru": "От слова alternative.",
            "en": "It comes from \"alternative\"."
          }
        ],
        "solution": [
          {
            "he": "`alt` — טקסט חלופי. אותו טקסט קוראות גם תוכנות לעיוורים.",
            "ru": "`alt` — альтернативный текст. Его же читают программы для незрячих.",
            "en": "`alt` is alternative text. Screen readers read it too."
          },
          "<img src=\"dog.jpg\" alt=\"כלב\">"
        ]
      },
      {
        "id": "ai-5",
        "level": 2,
        "label": {
          "he": "כמה פריטים",
          "ru": "Сколько пунктов",
          "en": "How many items"
        },
        "kind": "number",
        "text": {
          "he": "כמה פריטי רשימה יציג הדפדפן?\n`<ul><li>חלב</li><li>לחם</li><li>ביצים</li></ul>`\n`<ol><li>ראשון</li><li>שני</li></ol>`",
          "ru": "Сколько пунктов списка покажет браузер?\n`<ul><li>חלב</li><li>לחם</li><li>ביצים</li></ul>`\n`<ol><li>ראשון</li><li>שני</li></ol>`",
          "en": "How many list items will the browser show?\n`<ul><li>חלב</li><li>לחם</li><li>ביצים</li></ul>`\n`<ol><li>ראשון</li><li>שני</li></ol>`"
        },
        "answer": {
          "value": "5"
        },
        "hints": [
          {
            "he": "כל פריט הוא `<li>` אחד. סופרים את תגיות הפתיחה `<li>`.",
            "ru": "Каждый пункт — один `<li>`. Считай открывающие `<li>`.",
            "en": "Each item is one `<li>`. Count the opening `<li>` tags."
          },
          {
            "he": "בראשונה 3, בשנייה…?",
            "ru": "В первом 3, во втором…?",
            "en": "The first has 3, the second…?"
          }
        ],
        "solution": [
          {
            "he": "ב־`<ul>`: חלב, לחם, ביצים — 3 פריטים.",
            "ru": "В `<ul>`: חלב, לחם, ביצים — 3 пункта.",
            "en": "In `<ul>`: 3 items."
          },
          {
            "he": "ב־`<ol>`: ראשון, שני — 2 פריטים.",
            "ru": "В `<ol>`: ראשון, שני — 2 пункта.",
            "en": "In `<ol>`: 2 items."
          },
          "3 + 2 = 5"
        ]
      },
      {
        "id": "ai-6",
        "level": 2,
        "label": {
          "he": "מצאו את הטעות",
          "ru": "Найди ошибку",
          "en": "Find the mistake"
        },
        "kind": "choice",
        "text": {
          "he": "הקוד `<img href=\"dog.jpg\">` לא מציג שום תמונה. מה הבעיה?",
          "ru": "Код `<img href=\"dog.jpg\">` не показывает никакой картинки. В чём проблема?",
          "en": "The code `<img href=\"dog.jpg\">` shows no image. What is wrong?"
        },
        "options": [
          {
            "he": "חסרה תגית סגירה `</img>`",
            "ru": "Нет закрывающего тега `</img>`",
            "en": "The closing tag `</img>` is missing"
          },
          {
            "he": "לתמונה צריך `src`, לא `href`",
            "ru": "У картинки нужен `src`, а не `href`",
            "en": "An image needs `src`, not `href`"
          },
          {
            "he": "צריך לכתוב `.png` במקום `.jpg`",
            "ru": "Нужно `.png` вместо `.jpg`",
            "en": "It must be `.png` instead of `.jpg`"
          },
          {
            "he": "חסר `alt`",
            "ru": "Нет `alt`",
            "en": "`alt` is missing"
          }
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "`href` שייך לתגית אחרת. לאיזו?",
            "ru": "`href` относится к другому тегу. К какому?",
            "en": "`href` belongs to another tag. Which one?"
          },
          {
            "he": "בלי src הדפדפן יודע שיש פה תמונה, אבל לא יודע איזו.",
            "ru": "Без src браузер знает, что тут картинка, но не знает какая.",
            "en": "Without src the browser knows there is an image but not which one."
          }
        ],
        "solution": [
          {
            "he": "`href` הוא הכתובת של קישור `<a>`. לתמונה הכתובת נכתבת ב־`src`.",
            "ru": "`href` — адрес ссылки `<a>`. У картинки адрес пишут в `src`.",
            "en": "`href` is the address of an `<a>` link. An image takes its address in `src`."
          },
          "<img src=\"dog.jpg\">"
        ]
      },
      {
        "id": "ai-7",
        "level": 2,
        "label": {
          "he": "בלי סגירה",
          "ru": "Без закрытия",
          "en": "No closing"
        },
        "kind": "number",
        "text": {
          "he": "כמה תגיות בקוד הזה הן תגיות בודדות (בלי תגית סגירה)?\n`<p>שורה אחת<br>שורה שנייה</p>`\n`<img src=\"a.jpg\"><br><h2>סוף</h2>`",
          "ru": "Сколько тегов в этом коде — одиночные (без закрывающего тега)?\n`<p>שורה אחת<br>שורה שנייה</p>`\n`<img src=\"a.jpg\"><br><h2>סוף</h2>`",
          "en": "How many tags in this code are single tags (with no closing tag)?\n`<p>שורה אחת<br>שורה שנייה</p>`\n`<img src=\"a.jpg\"><br><h2>סוף</h2>`"
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "מהשיעור: `<br>` ו־`<img>` לא נסגרים.",
            "ru": "С урока: `<br>` и `<img>` не закрываются.",
            "en": "From class: `<br>` and `<img>` are not closed."
          },
          {
            "he": "ספרו כמה פעמים כל אחת מהן מופיעה.",
            "ru": "Посчитай, сколько раз встречается каждый.",
            "en": "Count how many times each one appears."
          }
        ],
        "solution": [
          {
            "he": "`<p>` ו־`<h2>` נסגרים — לא נספרים.",
            "ru": "`<p>` и `<h2>` закрываются — не считаем.",
            "en": "`<p>` and `<h2>` are closed — not counted."
          },
          {
            "he": "`<br>` מופיע פעמיים, `<img>` פעם אחת.",
            "ru": "`<br>` встречается два раза, `<img>` один раз.",
            "en": "`<br>` appears twice, `<img>` once."
          },
          "2 + 1 = 3"
        ]
      },
      {
        "id": "ai-8",
        "level": 2,
        "label": {
          "he": "id או class",
          "ru": "id или class",
          "en": "id or class"
        },
        "kind": "choice",
        "text": {
          "he": "רוצים לתת את אותו שם לשלוש פסקאות כדי לעצב אותן יחד בהמשך. באיזו תכונה משתמשים?",
          "ru": "Нужно дать одно и то же имя трём абзацам, чтобы потом оформить их вместе. Какой атрибут?",
          "en": "You want to give the same name to three paragraphs to style them together later. Which attribute?"
        },
        "options": [
          "`id`",
          "`class`",
          "`title`",
          "`lang`"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "id הוא כמו תעודת זהות — ייחודי.",
            "ru": "id — как удостоверение личности: уникальный.",
            "en": "id is like an ID card — unique."
          },
          {
            "he": "איזו תכונה אפשר לתת לכמה אלמנטים?",
            "ru": "Какой атрибут можно дать нескольким элементам?",
            "en": "Which attribute can several elements share?"
          }
        ],
        "solution": [
          {
            "he": "`id` — שם ייחודי לאלמנט אחד. `class` — אותו שם לכמה אלמנטים.",
            "ru": "`id` — уникальное имя одного элемента. `class` — одно имя для нескольких.",
            "en": "`id` is a unique name for one element. `class` is one name for many."
          },
          "<p class=\"info\">…</p>  <p class=\"info\">…</p>  <p class=\"info\">…</p>"
        ]
      },
      {
        "id": "ai-9",
        "level": 3,
        "label": {
          "he": "יישור",
          "ru": "Выравнивание",
          "en": "Alignment"
        },
        "kind": "choice",
        "text": {
          "he": "איפה יופיע הטקסט \"שלום\"?\n`<body align=\"right\">`\n`  <div align=\"left\">שלום</div>`\n`</body>`",
          "ru": "Где окажется текст «שלום»?\n`<body align=\"right\">`\n`  <div align=\"left\">שלום</div>`\n`</body>`",
          "en": "Where will the text \"שלום\" appear?\n`<body align=\"right\">`\n`  <div align=\"left\">שלום</div>`\n`</body>`"
        },
        "options": [
          {
            "he": "בימין",
            "ru": "Справа",
            "en": "On the right"
          },
          {
            "he": "בשמאל",
            "ru": "Слева",
            "en": "On the left"
          },
          {
            "he": "באמצע",
            "ru": "По центру",
            "en": "In the centre"
          }
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "ההורה (body) אומר ימין. מה אומר הילד (div)?",
            "ru": "Родитель (body) говорит «вправо». А что говорит ребёнок (div)?",
            "en": "The parent (body) says right. What does the child (div) say?"
          },
          {
            "he": "ההגדרה של הילד גוברת על של ההורה.",
            "ru": "Настройка ребёнка перебивает настройку родителя.",
            "en": "The child setting overrides the parent."
          }
        ],
        "solution": [
          {
            "he": "`body` מיישר הכול לימין.",
            "ru": "`body` выравнивает всё вправо.",
            "en": "`body` aligns everything right."
          },
          {
            "he": "ל־`div` יש `align=\"left\"` משלו — הוא גובר.",
            "ru": "У `div` свой `align=\"left\"` — он побеждает.",
            "en": "The `div` has its own `align=\"left\"` — it wins."
          },
          {
            "he": "התשובה: בשמאל.",
            "ru": "Ответ: слева.",
            "en": "Answer: on the left."
          }
        ]
      },
      {
        "id": "ai-10",
        "level": 3,
        "label": {
          "he": "קינון",
          "ru": "Вложенность",
          "en": "Nesting"
        },
        "kind": "choice",
        "text": {
          "he": "איזו שורה מקוננת נכון?",
          "ru": "Какая строка вложена правильно?",
          "en": "Which line is nested correctly?"
        },
        "options": [
          "`<p><a href=\"x.html\">קישור</p></a>`",
          "`<p><a href=\"x.html\">קישור</a></p>`",
          "`<a href=\"x.html\"><p>קישור</a></p>`",
          "`<p><a href=\"x.html\">קישור<p></a>`"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "מה שנפתח אחרון — נסגר ראשון.",
            "ru": "Что открылось последним — закрывается первым.",
            "en": "What opens last closes first."
          },
          {
            "he": "נפתחו `<p>` ואז `<a>`. מי צריך להיסגר קודם?",
            "ru": "Открыли `<p>`, потом `<a>`. Кто должен закрыться первым?",
            "en": "`<p>` opened, then `<a>`. Which must close first?"
          }
        ],
        "solution": [
          {
            "he": "התגית הפנימית `<a>` נסגרת לפני החיצונית `<p>`, כמו \"מבחוץ פנימה\".",
            "ru": "Внутренний `<a>` закрывается раньше внешнего `<p>` — как «снаружи внутрь».",
            "en": "The inner `<a>` closes before the outer `<p>` — outside in."
          },
          "<p><a href=\"x.html\">קישור</a></p>"
        ]
      },
      {
        "id": "ai-11",
        "level": 3,
        "label": {
          "he": "כמה כותרות",
          "ru": "Сколько заголовков",
          "en": "How many headings"
        },
        "kind": "number",
        "text": {
          "he": "כמה כותרות (מכל הגדלים) יש בקוד?\n`<h1>קורות חיים</h1><p>שלום</p>`\n`<h3>הפלוסים שלי</h3><ul><li>לומד</li></ul>`\n`<h3>המינוסים שלי</h3><div>…</div><h2>סוף</h2>`",
          "ru": "Сколько заголовков (любого размера) в коде?\n`<h1>קורות חיים</h1><p>שלום</p>`\n`<h3>הפלוסים שלי</h3><ul><li>לומד</li></ul>`\n`<h3>המינוסים שלי</h3><div>…</div><h2>סוף</h2>`",
          "en": "How many headings (of any size) are in the code?\n`<h1>קורות חיים</h1><p>שלום</p>`\n`<h3>הפלוסים שלי</h3><ul><li>לומד</li></ul>`\n`<h3>המינוסים שלי</h3><div>…</div><h2>סוף</h2>`"
        },
        "answer": {
          "value": "4"
        },
        "hints": [
          {
            "he": "כותרות הן h1–h6. p, ul, li, div — לא כותרות.",
            "ru": "Заголовки — h1–h6. p, ul, li, div — не заголовки.",
            "en": "Headings are h1–h6. p, ul, li, div are not."
          },
          {
            "he": "ספרו תגיות פתיחה שמתחילות ב־h ומספר.",
            "ru": "Считай открывающие теги вида h+цифра.",
            "en": "Count opening tags of the form h + digit."
          }
        ],
        "solution": [
          {
            "he": "שורה 1: `<h1>` — 1.",
            "ru": "Строка 1: `<h1>` — 1.",
            "en": "Line 1: `<h1>` — 1."
          },
          {
            "he": "שורה 2: `<h3>` — 1.",
            "ru": "Строка 2: `<h3>` — 1.",
            "en": "Line 2: `<h3>` — 1."
          },
          {
            "he": "שורה 3: `<h3>` ו־`<h2>` — 2.",
            "ru": "Строка 3: `<h3>` и `<h2>` — 2.",
            "en": "Line 3: `<h3>` and `<h2>` — 2."
          },
          "1 + 1 + 2 = 4"
        ]
      }
    ]
  }
};

/* Lesson data — format: see the comment at the top of data/lessons/math-2026-11-01.js.
   The CSS behaviour in this file (last transform wins, max-width 650px inclusive, keyframe values
   at 10/35/60/75/100%) was checked in Chromium with getComputedStyle. */
window.LESSONS = window.LESSONS || {};
window.LESSONS["fullstack-2026-11-11"] = {
  "id": "fullstack-2026-11-11",
  "subject": "fullstack",
  "date": "2026-11-11",
  "title": {
    "he": "transition, transform, `@media` לטלפון ו־`@keyframes`",
    "ru": "transition, transform, `@media` для телефона и `@keyframes`",
    "en": "transition, transform, `@media` for phones and `@keyframes`"
  },
  "summary": {
    "he": "שינוי חלק כשמעבירים עכבר (`:hover`, `transition-duration`, `transition-delay`, `transition-timing-function`), סיבוב והטיה עם `transform`, דף שמתאים את עצמו לטלפון עם `@media (max-width: 650px)`, ואנימציה עם `@keyframes`.",
    "ru": "Плавное изменение при наведении мыши (`:hover`, `transition-duration`, `transition-delay`, `transition-timing-function`), поворот и наклон через `transform`, страница под телефон через `@media (max-width: 650px)` и анимация через `@keyframes`.",
    "en": "A smooth change on mouse hover (`:hover`, `transition-duration`, `transition-delay`, `transition-timing-function`), turning and slanting with `transform`, a page that adapts to a phone with `@media (max-width: 650px)`, and animation with `@keyframes`."
  },
  "timeline": [
    {
      "kind": "talk",
      "title": {
        "he": "הקבצים של השיעור",
        "ru": "Файлы урока",
        "en": "The lesson files"
      },
      "text": {
        "he": "בשיעור עבדו ב־VS Code עם Live Server בשתי תיקיות: \"lesson 7\" (הקבצים `example.html` ו־`responsiveLesson.css`) ו־\"lesson 8\" (`lesson8.html` ו־`lesson8-design.css`). הנושאים: מעבר חלק (transition) כשמעבירים עכבר, סיבוב והטיה (transform), דף שמתאים את עצמו לטלפון (`@media`) ואנימציה (`@keyframes`).",
        "ru": "На уроке работали в VS Code с Live Server в двух папках: «lesson 7» (файлы `example.html` и `responsiveLesson.css`) и «lesson 8» (`lesson8.html` и `lesson8-design.css`). Темы: плавный переход (transition) при наведении мыши, поворот и наклон (transform), страница, которая подстраивается под телефон (`@media`), и анимация (`@keyframes`).",
        "en": "In class we worked in VS Code with Live Server in two folders: \"lesson 7\" (the files `example.html` and `responsiveLesson.css`) and \"lesson 8\" (`lesson8.html` and `lesson8-design.css`). The topics: a smooth change (transition) on mouse hover, rotating and slanting (transform), a page that adapts to a phone (`@media`), and animation (`@keyframes`)."
      },
      "why": {
        "he": "למה שני קבצים (HTML ו־CSS)? ב־HTML כתוב מה יש בדף, וב־CSS איך הוא נראה. כך אפשר לשנות עיצוב בלי לגעת בתוכן. Live Server מרענן את הדף בכל שמירה (Ctrl+S).",
        "ru": "Зачем два файла (HTML и CSS)? В HTML написано, что есть на странице, а в CSS — как она выглядит. Так можно менять оформление, не трогая содержимое. Live Server обновляет страницу при каждом сохранении (Ctrl+S).",
        "en": "Why two files (HTML and CSS)? HTML says what is on the page, CSS says how it looks. That way you change the design without touching the content. Live Server refreshes the page on every save (Ctrl+S)."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "`:hover` — מה קורה כשהעכבר מעל",
        "ru": "`:hover` — что происходит при наведении мыши",
        "en": "`:hover` — what happens when the mouse is over it"
      },
      "text": {
        "he": "בדף יש תמונה של טלפון: `<img src=\"phone2.png\" id=\"phone\">`. ל־`#phone` יש עיצוב רגיל (רוחב 100%, מסגרת salmon של 5px), ול־`#phone:hover` עיצוב אחר, שעובד רק כל עוד העכבר מעל התמונה: רוחב 30% ומסגרת נקודות (dotted) בצבע peachpuff של 10px. כשהעכבר יוצא, התמונה חוזרת לעיצוב הרגיל.",
        "ru": "На странице картинка телефона: `<img src=\"phone2.png\" id=\"phone\">`. У `#phone` обычное оформление (ширина 100%, рамка salmon 5px), а у `#phone:hover` другое, которое работает, только пока мышь над картинкой: ширина 30% и рамка из точек (dotted) цвета peachpuff 10px. Когда мышь уходит, картинка возвращается к обычному виду.",
        "en": "The page has a phone picture: `<img src=\"phone2.png\" id=\"phone\">`. `#phone` has a normal style (100% width, a 5px salmon border), and `#phone:hover` has another style that works only while the mouse is over the picture: 30% width and a 10px peachpuff dotted border. When the mouse leaves, the picture goes back to the normal style."
      },
      "math": [
        "#phone {",
        "  width: 100%;",
        "  border: 5px solid salmon;",
        "  transition-duration: 0.5s;",
        "  transition-delay: 0.1s;",
        "  transition-timing-function: ease;",
        "}",
        "#phone:hover {",
        "  width: 30%;",
        "  border: 10px dotted peachpuff;",
        "  transform: rotate(360deg);",
        "  transform: skewX(50deg);",
        "}"
      ],
      "why": {
        "he": "`:hover` הוא לא אלמנט חדש, אלא \"מצב\" של אותו אלמנט. לכן כותבים אותו צמוד, בלי רווח: `#phone:hover`.",
        "ru": "`:hover` — не новый элемент, а «состояние» того же элемента. Поэтому его пишут слитно, без пробела: `#phone:hover`.",
        "en": "`:hover` is not a new element but a \"state\" of the same element. That is why it is written together, with no space: `#phone:hover`."
      }
    },
    {
      "kind": "talk",
      "title": {
        "he": "transition: שינוי חלק במקום קפיצה",
        "ru": "transition: плавное изменение вместо скачка",
        "en": "transition: a smooth change instead of a jump"
      },
      "text": {
        "he": "בלי transition התמונה קופצת מיד מ־100% ל־30%. עם transition הדפדפן מצייר את כל הדרך:\n• `transition-duration` — כמה זמן נמשך השינוי (בשיעור ניסו 2s ואחר כך 0.5s).\n• `transition-delay` — כמה לחכות לפני שהשינוי מתחיל (0.1s).\n• `transition-timing-function` — איך המהירות משתנה בדרך (`ease`: מתחיל לאט, מאיץ ומאט בסוף).\nאת ה־transition כותבים בעיצוב הרגיל (`#phone`), ולכן הוא עובד גם כשהעכבר נכנס וגם כשהוא יוצא.",
        "ru": "Без transition картинка мгновенно прыгает со 100% на 30%. С transition браузер рисует весь путь:\n• `transition-duration` — сколько длится изменение (на уроке пробовали 2s, потом 0.5s).\n• `transition-delay` — сколько ждать до начала изменения (0.1s).\n• `transition-timing-function` — как меняется скорость по дороге (`ease`: начинает медленно, разгоняется и замедляется в конце).\ntransition пишут в обычном оформлении (`#phone`), поэтому он работает и когда мышь заходит, и когда уходит.",
        "en": "Without transition the picture jumps from 100% to 30% at once. With transition the browser draws the whole way:\n• `transition-duration` — how long the change takes (in class they tried 2s, then 0.5s).\n• `transition-delay` — how long to wait before the change starts (0.1s).\n• `transition-timing-function` — how the speed changes on the way (`ease`: starts slowly, speeds up and slows down at the end).\nThe transition is written in the normal style (`#phone`), so it works both when the mouse comes in and when it leaves."
      },
      "math": [
        "0s  →  0.1s   delay",
        "0.1s  →  0.6s   change (0.5s)"
      ],
      "why": {
        "he": "ההשהיה והמשך מתחברים: עם `0.1s` השהיה ו־`0.5s` משך, השינוי נגמר אחרי 0.6 שניות מהרגע שהעכבר נכנס.",
        "ru": "Задержка и длительность складываются: с задержкой `0.1s` и длительностью `0.5s` изменение кончается через 0.6 секунды после того, как мышь зашла.",
        "en": "The delay and the duration add up: with a `0.1s` delay and a `0.5s` duration, the change ends 0.6 seconds after the mouse comes in."
      }
    },
    {
      "kind": "tip",
      "title": {
        "he": "שתי שורות transform: רק האחרונה עובדת",
        "ru": "Две строки transform: работает только последняя",
        "en": "Two transform lines: only the last one works"
      },
      "text": {
        "he": "ב־`#phone:hover` כתובות שתי שורות: `transform: rotate(360deg);` (סיבוב שלם) ו־`transform: skewX(50deg);` (הטיה הצידה). זו אותה תכונה פעמיים, ולכן השנייה דורסת את הראשונה: התמונה רק נוטה, ולא מסתובבת.\nבדקנו בדפדפן: נשארת רק ההטיה.",
        "ru": "В `#phone:hover` написаны две строки: `transform: rotate(360deg);` (полный поворот) и `transform: skewX(50deg);` (наклон вбок). Это одно и то же свойство дважды, поэтому вторая строка перекрывает первую: картинка только наклоняется и не крутится.\nПроверили в браузере: остаётся только наклон.",
        "en": "`#phone:hover` has two lines: `transform: rotate(360deg);` (a full turn) and `transform: skewX(50deg);` (a sideways slant). It is the same property twice, so the second line overrides the first: the picture only slants and does not turn.\nChecked in a browser: only the slant stays."
      },
      "math": [
        "transform: rotate(360deg);   /* overridden */",
        "transform: skewX(50deg);     /* this one works */"
      ],
      "why": {
        "he": "ב־CSS, אם אותה תכונה כתובה פעמיים באותו כלל, מנצחת זו שכתובה אחרונה. (כדי לקבל גם סיבוב וגם הטיה כותבים אותם בשורה אחת עם רווח: \n```\ntransform: rotate(360deg) skewX(50deg);\n```\n — את זה לא ראינו בשיעור.)",
        "ru": "В CSS, если одно свойство записано в правиле дважды, побеждает последнее. (Чтобы было и вращение, и наклон, их пишут в одной строке через пробел: `transform: rotate(360deg) skewX(50deg);` — этого на уроке не было.)",
        "en": "In CSS, if the same property is written twice in one rule, the last one wins. (To get both a turn and a slant, write them on one line with a space: `transform: rotate(360deg) skewX(50deg);` — this was not shown in class.)"
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "`@media`: עיצוב מיוחד למסך צר",
        "ru": "`@media`: отдельное оформление для узкого экрана",
        "en": "`@media`: a special style for a narrow screen"
      },
      "text": {
        "he": "בקובץ `responsiveLesson.css` יש בלוק `@media screen and (max-width: 650px)`. כל מה שבתוכו עובד רק כשרוחב המסך 650px או פחות (טלפון). במסך רחב יותר הבלוק לא קיים מבחינת הדפדפן.\nמה משתנה בטלפון:\n• `p { column-count: 1; }` — הטקסט בעמודה אחת.\n• \n```\n#content { display: flex; flex-flow: column; }\n```\n — החלקים עומדים אחד מתחת לשני.\n• `h1 { align-self: center; }` — הכותרת באמצע.\n• `img { width: 100%; }` — התמונה ברוחב כל המסך.\n• `#mainTitle { font-size: 250%; }` — כותרת ראשית גדולה.",
        "ru": "В файле `responsiveLesson.css` есть блок `@media screen and (max-width: 650px)`. Всё, что внутри, работает, только когда ширина экрана 650px или меньше (телефон). На экране шире браузер этот блок как будто не видит.\nЧто меняется на телефоне:\n• `p { column-count: 1; }` — текст в одну колонку.\n• `#content { display: flex; flex-flow: column; }` — части стоят одна под другой.\n• `h1 { align-self: center; }` — заголовок посередине.\n• `img { width: 100%; }` — картинка во всю ширину экрана.\n• `#mainTitle { font-size: 250%; }` — главный заголовок крупный.",
        "en": "The file `responsiveLesson.css` has a block `@media screen and (max-width: 650px)`. Everything inside works only when the screen is 650px wide or less (a phone). On a wider screen the browser acts as if the block is not there.\nWhat changes on a phone:\n• `p { column-count: 1; }` — the text in one column.\n• `#content { display: flex; flex-flow: column; }` — the parts stand one under another.\n• `h1 { align-self: center; }` — the heading in the middle.\n• `img { width: 100%; }` — the picture across the whole screen.\n• `#mainTitle { font-size: 250%; }` — a big main title."
      },
      "math": [
        "@media screen and (max-width: 650px) {",
        "  p { column-count: 1; }",
        "  #content { display: flex; flex-flow: column; }",
        "  h1 { align-self: center; }",
        "  section { text-align: center; align-items: center; }",
        "  img { width: 100%; }",
        "  #mainTitle { font-size: 250%; }",
        "}"
      ],
      "why": {
        "he": "`max-width: 650px` פירושו \"עד 650px, כולל\". בדקנו בדפדפן: ב־650px הכללים עובדים, ב־651px כבר לא.",
        "ru": "`max-width: 650px` значит «до 650px включительно». Проверили в браузере: при 650px правила работают, при 651px уже нет.",
        "en": "`max-width: 650px` means \"up to 650px, inclusive\". Checked in a browser: at 650px the rules work, at 651px they no longer do."
      }
    },
    {
      "kind": "tip",
      "title": {
        "he": "flex-flow ו־align-self",
        "ru": "flex-flow и align-self",
        "en": "flex-flow and align-self"
      },
      "text": {
        "he": "בשיעור הקודם ראינו `flex-direction: row` (בשורה). `flex-flow: column` הוא קיצור שקובע את הכיוון לעמודה: הילדים אחד מתחת לשני.\n`align-self: center` כותבים לילד אחד (כאן `h1`) כדי שרק הוא יעמוד באמצע, בלי להזיז את האחרים.",
        "ru": "На прошлом уроке было `flex-direction: row` (в ряд). `flex-flow: column` — сокращение, которое ставит направление в столбик: дети стоят один под другим.\n`align-self: center` пишут одному ребёнку (здесь `h1`), чтобы только он встал посередине, не двигая остальных.",
        "en": "Last lesson we saw `flex-direction: row` (in a row). `flex-flow: column` is a shortcut that sets the direction to a column: the children stand one under another.\n`align-self: center` is written for one child (here `h1`) so only it stands in the middle, without moving the others."
      },
      "math": [
        "#content { display: flex; flex-flow: column; }",
        "h1 { align-self: center; }"
      ],
      "why": {
        "he": "למה לא `text-align: center` על הכותרת? `text-align` ממרכז את הטקסט בתוך הקופסה, ו־`align-self` מזיז את הקופסה עצמה בתוך ה־flex. בטלפון רוצים שהקופסה כולה תעמוד באמצע.",
        "ru": "Почему не `text-align: center` для заголовка? `text-align` центрирует текст внутри коробки, а `align-self` двигает саму коробку внутри flex. На телефоне хотят, чтобы вся коробка стояла посередине.",
        "en": "Why not `text-align: center` on the heading? `text-align` centers the text inside the box, while `align-self` moves the box itself inside the flex. On a phone we want the whole box in the middle."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "אנימציה: `@keyframes`",
        "ru": "Анимация: `@keyframes`",
        "en": "Animation: `@keyframes`"
      },
      "text": {
        "he": "בשיעור 8 יש ריבוע שחור `.shapes` של 50px. כשהעכבר מעליו מתחילה אנימציה בשם `shapes1`:\n• `animation-name` — שם האנימציה, אותו שם כמו אחרי `@keyframes`.\n• `animation-duration: 3s` — סיבוב אחד של האנימציה נמשך 3 שניות.\n• `animation-iteration-count: infinite` — חוזרת שוב ושוב, כל עוד העכבר מעל.\nב־`@keyframes` כותבים \"תחנות\" באחוזים מהזמן: ב־10% הריבוע קטן ל־10% ונהיה עיגול, ב־35% חוזר לגודל מלא, ב־60% שוב קטן ועגול ואדום, ב־75% גדול וכחול עם פינות מעוגלות 25%. בין התחנות הדפדפן ממלא את השינוי בעצמו.",
        "ru": "В уроке 8 есть чёрный квадрат `.shapes` 50px. Когда мышь над ним, начинается анимация с именем `shapes1`:\n• `animation-name` — имя анимации, то же, что после `@keyframes`.\n• `animation-duration: 3s` — один круг анимации длится 3 секунды.\n• `animation-iteration-count: infinite` — повторяется снова и снова, пока мышь над ним.\nВ `@keyframes` пишут «остановки» в процентах от времени: на 10% квадрат сжимается до 10% и становится кругом, на 35% возвращается к полному размеру, на 60% снова маленький, круглый и красный, на 75% большой и синий со скруглением углов 25%. Между остановками браузер сам достраивает изменение.",
        "en": "Lesson 8 has a black 50px square `.shapes`. When the mouse is over it, an animation called `shapes1` starts:\n• `animation-name` — the animation's name, the same name as after `@keyframes`.\n• `animation-duration: 3s` — one round of the animation takes 3 seconds.\n• `animation-iteration-count: infinite` — it repeats again and again while the mouse is over it.\nIn `@keyframes` you write \"stops\" in percent of the time: at 10% the square shrinks to 10% and becomes a circle, at 35% it is back to full size, at 60% small, round and red again, at 75% big and blue with 25% rounded corners. Between the stops the browser fills in the change itself."
      },
      "math": [
        ".shapes {",
        "  height: 50px;",
        "  width: 50px;",
        "  background-color: black;",
        "}",
        ".shapes:hover {",
        "  animation-name: shapes1;",
        "  animation-duration: 3s;",
        "  animation-iteration-count: infinite;",
        "  transition-timing-function: ease-out;",
        "}",
        "@keyframes shapes1 {",
        "  10% { transform: scale(10%, 10%); border-radius: 50%; }",
        "  35% { transform: scale(100%, 100%); }",
        "  60% { transform: scale(10%, 10%); border-radius: 50%; background-color: red; }",
        "  75% { transform: scale(100%, 100%); background-color: blue; border-radius: 25%; }",
        "}"
      ],
      "why": {
        "he": "אחוז בתחנה = חלק מהזמן: 60% מ־3 שניות = 1.8 שניות. את 0% ו־100% לא כתבו, ולכן שם הריבוע נראה כמו בעיצוב הרגיל שלו: שחור ומרובע.",
        "ru": "Процент в остановке = доля времени: 60% от 3 секунд = 1.8 секунды. 0% и 100% не написаны, поэтому там квадрат выглядит как в своём обычном оформлении: чёрный и квадратный.",
        "en": "A percent in a stop = a share of the time: 60% of 3 seconds = 1.8 seconds. 0% and 100% are not written, so there the square looks like its normal style: black and square."
      }
    },
    {
      "kind": "tip",
      "title": {
        "he": "transition-timing-function לא משפיע על אנימציה",
        "ru": "transition-timing-function не влияет на анимацию",
        "en": "transition-timing-function does not affect an animation"
      },
      "text": {
        "he": "ב־`.shapes:hover` כתוב גם `transition-timing-function: ease-out;`. התכונה הזאת שייכת ל־transition, ולריבוע אין transition, ולכן היא לא משנה את האנימציה. לאנימציה יש תכונה משלה: `animation-timing-function` (את זה לא ראינו בשיעור).",
        "ru": "В `.shapes:hover` написано ещё `transition-timing-function: ease-out;`. Это свойство относится к transition, а у квадрата transition нет, поэтому на анимацию оно не влияет. У анимации своё свойство: `animation-timing-function` (на уроке его не было).",
        "en": "`.shapes:hover` also has `transition-timing-function: ease-out;`. That property belongs to transition, and the square has no transition, so it does not change the animation. An animation has its own property: `animation-timing-function` (not shown in class)."
      },
      "why": {
        "he": "איך לבדוק את זה בעצמך? מוחקים את השורה, שומרים, ומסתכלים: האנימציה זהה. שורה שמחיקתה לא משנה כלום — לא עושה כלום.",
        "ru": "Как проверить самому? Удаляешь строку, сохраняешь и смотришь: анимация такая же. Строка, удаление которой ничего не меняет, ничего и не делает.",
        "en": "How to check it yourself? Delete the line, save, and look: the animation is the same. A line whose removal changes nothing does nothing."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "דוגמה מהכיתה: דף בסגנון YouTube",
        "ru": "Пример из класса: страница в стиле YouTube",
        "en": "An example from class: a YouTube-style page"
      },
      "text": {
        "he": "עבודה של חברים לכיתה על התרגיל \"להעתיק עיצוב של אתר\" (שיעור 04.11). היא מחברת את שני השיעורים:\n• מ־04.11: `display: grid` על `.container`. שני טורים (`200px` וכל השאר), שלוש שורות. ה־header תופס את שני הטורים (`1 / span 2`), ה־aside תופס שתי שורות בצד (`2 / span 2`). בתוך `main` יש עוד grid של 3 טורים לכרטיסי הווידאו.\n• מ־11.11: `:hover` עם `transition` ו־`transform: scale(1.1)`. כשהעכבר מעל התמונה, היא גדלה ב־10% בצורה חלקה.\nבעבודה המקורית יש גם סקריפט קצר שמפעיל וידאו כשהעכבר מעל. זה JavaScript, ועוד לא למדנו אותו.",
        "ru": "Работа одногруппников по заданию «повторить оформление сайта» (урок 04.11). Она соединяет оба урока:\n• С 04.11: `display: grid` у `.container`. Два столбца (`200px` и всё остальное), три строки. header занимает оба столбца (`1 / span 2`), aside занимает две строки сбоку (`2 / span 2`). Внутри `main` ещё один grid на 3 столбца для карточек видео.\n• С 11.11: `:hover` с `transition` и `transform: scale(1.1)`. Когда мышь над картинкой, она плавно увеличивается на 10%.\nВ оригинальной работе есть ещё короткий скрипт, который запускает видео при наведении. Это JavaScript, его мы ещё не проходили.",
        "en": "Classmates' work on the \"copy a site's design\" exercise (lesson 04.11). It joins both lessons:\n• From 04.11: `display: grid` on `.container`. Two columns (`200px` and the rest), three rows. The header takes both columns (`1 / span 2`), the aside takes two rows on the side (`2 / span 2`). Inside `main` there is another grid of 3 columns for the video cards.\n• From 11.11: `:hover` with `transition` and `transform: scale(1.1)`. When the mouse is over the picture, it grows smoothly by 10%.\nThe original work also has a short script that plays a video on hover. That is JavaScript, which we have not learned yet."
      },
      "math": [
        ".container {",
        "  display: grid;",
        "  grid-template-columns: 200px auto;",
        "  grid-template-rows: 70px 50px auto;",
        "}",
        "header { grid-column: 1 / span 2; grid-row: 1; }",
        "aside  { grid-column: 1; grid-row: 2 / span 2; }",
        "nav    { grid-column: 2; grid-row: 2; }",
        "main {",
        "  grid-column: 2; grid-row: 3;",
        "  display: grid;",
        "  grid-template-columns: auto auto auto;",
        "  gap: 15px;",
        "}",
        ".thumbnail { transition: transform 0.3s ease; }",
        ".thumbnail:hover { transform: scale(1.1); }"
      ],
      "why": {
        "he": "שני דברים שכדאי לבדוק בעבודה כזאת:\n1. נתיב שמתחיל ב־`/` (למשל `/assets/a.jpg`) מחפש מהשורש. כשפותחים את הקובץ מהדיסק בלחיצה כפולה, התמונה לא תימצא. `assets/a.jpg` בלי `/` מחפש ליד קובץ ה־HTML.\n2. בלוק `@media` שמעתיקים מתרגיל אחר: להשאיר רק כללים לאלמנטים שיש בדף הזה. כלל של רוחב `200%` לכל התמונות היה מותח אותן בטלפון פי 2.",
        "ru": "Две вещи, которые стоит проверить в такой работе:\n1. Путь, который начинается с `/` (например, `/assets/a.jpg`), ищет от корня. Если открыть файл с диска двойным щелчком, картинка не найдётся. `assets/a.jpg` без `/` ищет рядом с HTML-файлом.\n2. Блок `@media`, скопированный из другого задания: оставлять только правила для элементов, которые есть на этой странице. `img { width: 200%; }` растянул бы картинки на телефоне в 2 раза.",
        "en": "Two things worth checking in work like this:\n1. A path that starts with `/` (for example `/assets/a.jpg`) searches from the root. If you open the file from disk by double-clicking, the picture is not found. `assets/a.jpg` without `/` searches next to the HTML file.\n2. An `@media` block copied from another exercise: keep only rules for elements that exist on this page. `img { width: 200%; }` would stretch the pictures on a phone 2 times."
      }
    }
  ],
  "review": [
    {
      "title": {
        "he": "`:hover`",
        "ru": "`:hover`",
        "en": "`:hover`"
      },
      "text": {
        "he": "עיצוב שעובד רק כשהעכבר מעל האלמנט.",
        "ru": "Оформление, которое работает, только пока мышь над элементом.",
        "en": "A style that works only while the mouse is over the element."
      }
    },
    {
      "title": {
        "he": "transition",
        "ru": "transition",
        "en": "transition"
      },
      "text": {
        "he": "`duration` — כמה זמן, `delay` — כמה לחכות, `timing-function` — איך המהירות משתנה.",
        "ru": "`duration` — сколько длится, `delay` — сколько ждать, `timing-function` — как меняется скорость.",
        "en": "`duration` — how long, `delay` — how long to wait, `timing-function` — how the speed changes."
      }
    },
    {
      "title": {
        "he": "transform",
        "ru": "transform",
        "en": "transform"
      },
      "text": {
        "he": "`rotate` — סיבוב, `skewX` — הטיה, `scale` — הגדלה/הקטנה. שתי שורות transform — האחרונה מנצחת.",
        "ru": "`rotate` — поворот, `skewX` — наклон, `scale` — увеличение/уменьшение. Две строки transform — побеждает последняя.",
        "en": "`rotate` — turn, `skewX` — slant, `scale` — grow/shrink. Two transform lines — the last one wins."
      }
    },
    {
      "title": {
        "he": "`@media (max-width: 650px)`",
        "ru": "`@media (max-width: 650px)`",
        "en": "`@media (max-width: 650px)`"
      },
      "text": {
        "he": "הכללים בפנים עובדים רק במסך של 650px או פחות.",
        "ru": "Правила внутри работают только на экране 650px и меньше.",
        "en": "The rules inside work only on a screen of 650px or less."
      }
    },
    {
      "title": {
        "he": "`@keyframes`",
        "ru": "`@keyframes`",
        "en": "`@keyframes`"
      },
      "text": {
        "he": "תחנות באחוזים מהזמן. `animation-name` + `animation-duration` + `animation-iteration-count`.",
        "ru": "Остановки в процентах от времени. `animation-name` + `animation-duration` + `animation-iteration-count`.",
        "en": "Stops in percent of the time. `animation-name` + `animation-duration` + `animation-iteration-count`."
      }
    }
  ],
  "tasks": {
    "groups": {
      "hover": {
        "he": "שיעור 7: hover, transition, transform",
        "ru": "Урок 7: hover, transition, transform",
        "en": "Lesson 7: hover, transition, transform"
      },
      "media": {
        "he": "שיעור 7: ‏@media לטלפון",
        "ru": "Урок 7: @media для телефона",
        "en": "Lesson 7: @media for a phone"
      },
      "anim": {
        "he": "שיעור 8: אנימציה",
        "ru": "Урок 8: анимация",
        "en": "Lesson 8: animation"
      },
      "yt": {
        "he": "דוגמה: דף בסגנון YouTube",
        "ru": "Пример: страница в стиле YouTube",
        "en": "Example: a YouTube-style page"
      }
    },
    "teacher": [
      {
        "id": "h1",
        "group": "hover",
        "label": {
          "he": "מתי נגמר?",
          "ru": "Когда закончится?",
          "en": "When does it end?"
        },
        "kind": "number",
        "text": {
          "he": "זה העיצוב של תמונת הטלפון מהשיעור:\n```\n#phone {\n  width: 100%;\n  border: 5px solid salmon;\n  transition-duration: 0.5s;\n  transition-delay: 0.1s;\n  transition-timing-function: ease;\n}\n#phone:hover {\n  width: 30%;\n  border: 10px dotted peachpuff;\n  transform: rotate(360deg);\n  transform: skewX(50deg);\n}\n```\nהעכבר נכנס לתמונה. אחרי כמה שניות התמונה תגיע לרוחב 30%?",
          "ru": "Это оформление картинки телефона с урока:\n```\n#phone {\n  width: 100%;\n  border: 5px solid salmon;\n  transition-duration: 0.5s;\n  transition-delay: 0.1s;\n  transition-timing-function: ease;\n}\n#phone:hover {\n  width: 30%;\n  border: 10px dotted peachpuff;\n  transform: rotate(360deg);\n  transform: skewX(50deg);\n}\n```\nМышь зашла на картинку. Через сколько секунд картинка дойдёт до ширины 30%?",
          "en": "This is the phone picture's style from the lesson:\n```\n#phone {\n  width: 100%;\n  border: 5px solid salmon;\n  transition-duration: 0.5s;\n  transition-delay: 0.1s;\n  transition-timing-function: ease;\n}\n#phone:hover {\n  width: 30%;\n  border: 10px dotted peachpuff;\n  transform: rotate(360deg);\n  transform: skewX(50deg);\n}\n```\nThe mouse goes over the picture. After how many seconds does the picture reach 30% width?"
        },
        "example": {
          "he": "בגרסה הראשונה בשיעור היה `transition-duration: 2s;` עם אותה השהיה `0.1s` → מחכים 0.1 שניות, ואז השינוי נמשך 2 שניות → נגמר אחרי 2.1 שניות.",
          "ru": "В первой версии на уроке было `transition-duration: 2s;` с той же задержкой `0.1s` → ждём 0.1 секунды, потом изменение длится 2 секунды → заканчивается через 2.1 секунды.",
          "en": "In the first version in class it was `transition-duration: 2s;` with the same `0.1s` delay → wait 0.1 seconds, then the change takes 2 seconds → it ends after 2.1 seconds."
        },
        "answer": {
          "value": "0.6"
        },
        "hints": [
          {
            "he": "קודם ההשהיה, אחר כך המשך.",
            "ru": "Сначала задержка, потом длительность.",
            "en": "First the delay, then the duration."
          }
        ],
        "solution": [
          "0.1 + 0.5 = 0.6",
          {
            "he": "תשובה: 0.6 שניות",
            "ru": "Ответ: 0.6 секунды",
            "en": "Answer: 0.6 seconds"
          }
        ]
      },
      {
        "id": "h2",
        "group": "hover",
        "label": {
          "he": "שתי שורות transform",
          "ru": "Две строки transform",
          "en": "Two transform lines"
        },
        "kind": "choice",
        "text": {
          "he": "זה העיצוב של תמונת הטלפון מהשיעור:\n```\n#phone {\n  width: 100%;\n  border: 5px solid salmon;\n  transition-duration: 0.5s;\n  transition-delay: 0.1s;\n  transition-timing-function: ease;\n}\n#phone:hover {\n  width: 30%;\n  border: 10px dotted peachpuff;\n  transform: rotate(360deg);\n  transform: skewX(50deg);\n}\n```\nמה יקרה לתמונה כשהעכבר מעליה?",
          "ru": "Это оформление картинки телефона с урока:\n```\n#phone {\n  width: 100%;\n  border: 5px solid salmon;\n  transition-duration: 0.5s;\n  transition-delay: 0.1s;\n  transition-timing-function: ease;\n}\n#phone:hover {\n  width: 30%;\n  border: 10px dotted peachpuff;\n  transform: rotate(360deg);\n  transform: skewX(50deg);\n}\n```\nЧто будет с картинкой, когда мышь над ней?",
          "en": "This is the phone picture's style from the lesson:\n```\n#phone {\n  width: 100%;\n  border: 5px solid salmon;\n  transition-duration: 0.5s;\n  transition-delay: 0.1s;\n  transition-timing-function: ease;\n}\n#phone:hover {\n  width: 30%;\n  border: 10px dotted peachpuff;\n  transform: rotate(360deg);\n  transform: skewX(50deg);\n}\n```\nWhat happens to the picture when the mouse is over it?"
        },
        "options": [
          {
            "he": "רק מסתובבת (rotate)",
            "ru": "Только крутится (rotate)",
            "en": "Only turns (rotate)"
          },
          {
            "he": "רק נוטה הצידה (skewX)",
            "ru": "Только наклоняется (skewX)",
            "en": "Only slants (skewX)"
          },
          {
            "he": "גם מסתובבת וגם נוטה",
            "ru": "И крутится, и наклоняется",
            "en": "Both turns and slants"
          },
          {
            "he": "שום דבר, שגיאה",
            "ru": "Ничего, ошибка",
            "en": "Nothing, an error"
          }
        ],
        "example": {
          "he": "אותו רעיון עם צבע: `p { color: red; color: blue; }` → אותה תכונה פעמיים → האחרונה מנצחת → הטקסט כחול.",
          "ru": "Та же идея с цветом: `p { color: red; color: blue; }` → одно свойство дважды → побеждает последнее → текст синий.",
          "en": "The same idea with colour: `p { color: red; color: blue; }` → the same property twice → the last one wins → the text is blue."
        },
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "`transform` כתוב פעמיים באותו כלל.",
            "ru": "`transform` написан в одном правиле дважды.",
            "en": "`transform` is written twice in one rule."
          }
        ],
        "solution": [
          {
            "he": "השורה השנייה דורסת את הראשונה",
            "ru": "Вторая строка перекрывает первую",
            "en": "The second line overrides the first"
          },
          {
            "he": "תשובה: רק הטיה (skewX)",
            "ru": "Ответ: только наклон (skewX)",
            "en": "Answer: only the slant (skewX)"
          }
        ]
      },
      {
        "id": "h3",
        "group": "hover",
        "label": {
          "he": "השהיה",
          "ru": "Задержка",
          "en": "Delay"
        },
        "kind": "text",
        "text": {
          "he": "איזו תכונה קובעת כמה זמן לחכות לפני שה־transition מתחיל? (כתבו את שם התכונה)",
          "ru": "Какое свойство задаёт, сколько ждать до начала transition? (напиши имя свойства)",
          "en": "Which property sets how long to wait before the transition starts? (write the property name)"
        },
        "example": {
          "he": "התכונה שקובעת כמה זמן נמשך השינוי עצמו היא `transition-duration` (בשיעור: `0.5s`).",
          "ru": "Свойство, которое задаёт, сколько длится само изменение, — `transition-duration` (на уроке: `0.5s`).",
          "en": "The property that sets how long the change itself takes is `transition-duration` (in class: `0.5s`)."
        },
        "answer": {
          "accept": [
            "transition-delay",
            "transition-delay:"
          ]
        },
        "hints": [
          {
            "he": "המילה האנגלית ל\"עיכוב\".",
            "ru": "Английское слово «задержка».",
            "en": "The English word for a wait."
          }
        ],
        "solution": [
          "transition-delay: 0.1s;",
          {
            "he": "תשובה: transition-delay",
            "ru": "Ответ: transition-delay",
            "en": "Answer: transition-delay"
          }
        ]
      },
      {
        "id": "h4",
        "group": "hover",
        "label": {
          "he": "hover כתוב צמוד",
          "ru": "hover слитно",
          "en": "hover written together"
        },
        "kind": "choice",
        "text": {
          "he": "איך כותבים כלל שעובד רק כשהעכבר מעל `#phone`?",
          "ru": "Как написать правило, которое работает, только когда мышь над `#phone`?",
          "en": "How do you write a rule that works only when the mouse is over `#phone`?"
        },
        "options": [
          "#phone hover { … }",
          "#phone .hover { … }",
          "#phone:hover { … }",
          "hover#phone { … }"
        ],
        "example": {
          "he": "אותו דבר לתגית: כלל לכל תמונה כשהעכבר מעליה הוא `img:hover { … }` — שם התגית, נקודתיים ו־hover, בלי רווח.",
          "ru": "То же для тега: правило для любой картинки под мышью — `img:hover { … }`: имя тега, двоеточие и hover, без пробела.",
          "en": "The same for a tag: a rule for any picture under the mouse is `img:hover { … }` — the tag name, a colon and hover, with no space."
        },
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "`:hover` הוא מצב של אותו אלמנט.",
            "ru": "`:hover` — состояние того же элемента.",
            "en": "`:hover` is a state of the same element."
          }
        ],
        "solution": [
          "#phone:hover { … }",
          {
            "he": "תשובה: #phone:hover",
            "ru": "Ответ: #phone:hover",
            "en": "Answer: #phone:hover"
          }
        ]
      },
      {
        "id": "m1",
        "group": "media",
        "label": {
          "he": "איזה רוחב?",
          "ru": "Какая ширина?",
          "en": "Which width?"
        },
        "kind": "choice",
        "text": {
          "he": "זה הבלוק לטלפון מהשיעור:\n```\n@media screen and (max-width: 650px) {\n  p { column-count: 1; }\n  #content { display: flex; flex-flow: column; }\n  h1 { align-self: center; }\n  section { text-align: center; align-items: center; }\n  img { width: 100%; }\n  #mainTitle { font-size: 250%; }\n}\n```\nבאילו מסכים הכללים בתוכו עובדים?",
          "ru": "Это блок для телефона с урока:\n```\n@media screen and (max-width: 650px) {\n  p { column-count: 1; }\n  #content { display: flex; flex-flow: column; }\n  h1 { align-self: center; }\n  section { text-align: center; align-items: center; }\n  img { width: 100%; }\n  #mainTitle { font-size: 250%; }\n}\n```\nНа каких экранах работают правила внутри?",
          "en": "This is the phone block from the lesson:\n```\n@media screen and (max-width: 650px) {\n  p { column-count: 1; }\n  #content { display: flex; flex-flow: column; }\n  h1 { align-self: center; }\n  section { text-align: center; align-items: center; }\n  img { width: 100%; }\n  #mainTitle { font-size: 250%; }\n}\n```\nOn which screens do the rules inside work?"
        },
        "options": [
          {
            "he": "רק מעל 650px",
            "ru": "Только шире 650px",
            "en": "Only wider than 650px"
          },
          {
            "he": "650px ופחות",
            "ru": "650px и меньше",
            "en": "650px and less"
          },
          {
            "he": "רק בדיוק 650px",
            "ru": "Только ровно 650px",
            "en": "Only exactly 650px"
          }
        ],
        "example": {
          "he": "אילו היה כתוב `(max-width: 900px)` (מספר אחר, לא מהשיעור) → הכללים היו עובדים במסכים של 900px ופחות, למשל גם בטאבלט של 800px.",
          "ru": "Если бы было написано `(max-width: 900px)` (другое число, не с урока) → правила работали бы на экранах 900px и меньше, например и на планшете 800px.",
          "en": "If it said `(max-width: 900px)` (another number, not from class) → the rules would work on screens of 900px and less, for example on an 800px tablet too."
        },
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "`max` = הכי הרבה.",
            "ru": "`max` = самое большее.",
            "en": "`max` = at most."
          }
        ],
        "solution": [
          "650px  →  yes",
          "651px  →  no",
          {
            "he": "תשובה: 650px ופחות",
            "ru": "Ответ: 650px и меньше",
            "en": "Answer: 650px and less"
          }
        ]
      },
      {
        "id": "m2",
        "group": "media",
        "label": {
          "he": "flex-flow: column",
          "ru": "flex-flow: column",
          "en": "flex-flow: column"
        },
        "kind": "choice",
        "text": {
          "he": "בטלפון `#content` מקבל `display: flex; flex-flow: column;`. איך יעמדו החלקים שבתוכו?",
          "ru": "На телефоне `#content` получает `display: flex; flex-flow: column;`. Как встанут части внутри него?",
          "en": "On a phone `#content` gets `display: flex; flex-flow: column;`. How do the parts inside it stand?"
        },
        "options": [
          {
            "he": "בשורה, אחד ליד השני",
            "ru": "В ряд, один рядом с другим",
            "en": "In a row, side by side"
          },
          {
            "he": "אחד מתחת לשני",
            "ru": "Один под другим",
            "en": "One under another"
          },
          {
            "he": "אחד על השני, באותו מקום",
            "ru": "Друг на друге, в одном месте",
            "en": "On top of each other, in one place"
          }
        ],
        "example": {
          "he": "בשיעור הקודם: `flex-direction: row` → הילדים עומדים בשורה, אחד ליד השני.",
          "ru": "На прошлом уроке: `flex-direction: row` → дети стоят в ряд, один рядом с другим.",
          "en": "Last lesson: `flex-direction: row` → the children stand in a row, side by side."
        },
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "column = עמודה.",
            "ru": "column = столбец.",
            "en": "column = a column."
          }
        ],
        "solution": [
          {
            "he": "column → אחד מתחת לשני",
            "ru": "column → один под другим",
            "en": "column → one under another"
          }
        ]
      },
      {
        "id": "m3",
        "group": "media",
        "label": {
          "he": "align-self",
          "ru": "align-self",
          "en": "align-self"
        },
        "kind": "choice",
        "text": {
          "he": "בטלפון כתוב `h1 { align-self: center; }`. מה זה עושה?",
          "ru": "На телефоне написано `h1 { align-self: center; }`. Что это делает?",
          "en": "On a phone it says `h1 { align-self: center; }`. What does it do?"
        },
        "options": [
          {
            "he": "רק הכותרת h1 עומדת באמצע",
            "ru": "Только заголовок h1 встаёт посередине",
            "en": "Only the h1 heading stands in the middle"
          },
          {
            "he": "כל הדף עובר לאמצע",
            "ru": "Вся страница уходит в середину",
            "en": "The whole page moves to the middle"
          },
          {
            "he": "הכותרת נעלמת",
            "ru": "Заголовок исчезает",
            "en": "The heading disappears"
          }
        ],
        "example": {
          "he": "`img { width: 100%; }` מאותו בלוק → משנה רק את התמונות, לא את האחרים → התמונה ברוחב כל המסך.",
          "ru": "`img { width: 100%; }` из того же блока → меняет только картинки, не остальных → картинка во всю ширину экрана.",
          "en": "`img { width: 100%; }` from the same block → changes only the pictures, not the others → the picture across the whole screen."
        },
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "self = \"בעצמו\": רק האלמנט הזה.",
            "ru": "self = «сам»: только этот элемент.",
            "en": "self = \"itself\": only this element."
          }
        ],
        "solution": [
          {
            "he": "תשובה: רק הכותרת עומדת באמצע",
            "ru": "Ответ: только заголовок встаёт посередине",
            "en": "Answer: only the heading stands in the middle"
          }
        ]
      },
      {
        "id": "k1",
        "group": "anim",
        "label": {
          "he": "מתי אדום?",
          "ru": "Когда красный?",
          "en": "When is it red?"
        },
        "kind": "number",
        "text": {
          "he": "זה הריבוע עם האנימציה מהשיעור:\n```\n.shapes {\n  height: 50px;\n  width: 50px;\n  background-color: black;\n}\n.shapes:hover {\n  animation-name: shapes1;\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n  transition-timing-function: ease-out;\n}\n@keyframes shapes1 {\n  10% { transform: scale(10%, 10%); border-radius: 50%; }\n  35% { transform: scale(100%, 100%); }\n  60% { transform: scale(10%, 10%); border-radius: 50%; background-color: red; }\n  75% { transform: scale(100%, 100%); background-color: blue; border-radius: 25%; }\n}\n```\nהעכבר נכנס לריבוע. אחרי כמה שניות הריבוע יהיה אדום לגמרי (התחנה של `60%`)?",
          "ru": "Это квадрат с анимацией с урока:\n```\n.shapes {\n  height: 50px;\n  width: 50px;\n  background-color: black;\n}\n.shapes:hover {\n  animation-name: shapes1;\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n  transition-timing-function: ease-out;\n}\n@keyframes shapes1 {\n  10% { transform: scale(10%, 10%); border-radius: 50%; }\n  35% { transform: scale(100%, 100%); }\n  60% { transform: scale(10%, 10%); border-radius: 50%; background-color: red; }\n  75% { transform: scale(100%, 100%); background-color: blue; border-radius: 25%; }\n}\n```\nМышь зашла на квадрат. Через сколько секунд квадрат станет полностью красным (остановка 60%)?",
          "en": "This is the square with the animation from the lesson:\n```\n.shapes {\n  height: 50px;\n  width: 50px;\n  background-color: black;\n}\n.shapes:hover {\n  animation-name: shapes1;\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n  transition-timing-function: ease-out;\n}\n@keyframes shapes1 {\n  10% { transform: scale(10%, 10%); border-radius: 50%; }\n  35% { transform: scale(100%, 100%); }\n  60% { transform: scale(10%, 10%); border-radius: 50%; background-color: red; }\n  75% { transform: scale(100%, 100%); background-color: blue; border-radius: 25%; }\n}\n```\nThe mouse goes over the square. After how many seconds is the square fully red (the 60% stop)?"
        },
        "example": {
          "he": "התחנה של 75% (כחול): 75% מ־3 שניות → `3 × 0.75 = 2.25` → אחרי 2.25 שניות.",
          "ru": "Остановка 75% (синий): 75% от 3 секунд → `3 × 0.75 = 2.25` → через 2.25 секунды.",
          "en": "The 75% stop (blue): 75% of 3 seconds → `3 × 0.75 = 2.25` → after 2.25 seconds."
        },
        "answer": {
          "value": "1.8"
        },
        "hints": [
          {
            "he": "60% מתוך `animation-duration`.",
            "ru": "60% от `animation-duration`.",
            "en": "60% of `animation-duration`."
          }
        ],
        "solution": [
          "3 × 0.6 = 1.8",
          {
            "he": "תשובה: 1.8 שניות",
            "ru": "Ответ: 1.8 секунды",
            "en": "Answer: 1.8 seconds"
          }
        ]
      },
      {
        "id": "k2",
        "group": "anim",
        "label": {
          "he": "כמה פעמים?",
          "ru": "Сколько раз?",
          "en": "How many times?"
        },
        "kind": "choice",
        "text": {
          "he": "בריבוע כתוב `animation-iteration-count: infinite;`. כמה פעמים האנימציה תחזור?",
          "ru": "У квадрата написано `animation-iteration-count: infinite;`. Сколько раз повторится анимация?",
          "en": "The square has `animation-iteration-count: infinite;`. How many times does the animation repeat?"
        },
        "options": [
          {
            "he": "פעם אחת",
            "ru": "Один раз",
            "en": "Once"
          },
          {
            "he": "3 פעמים",
            "ru": "3 раза",
            "en": "3 times"
          },
          {
            "he": "שוב ושוב, כל עוד העכבר מעל",
            "ru": "Снова и снова, пока мышь над квадратом",
            "en": "Again and again while the mouse is over it"
          }
        ],
        "example": {
          "he": "עם `animation-iteration-count: 2;` (מספר אחר) → האנימציה רצה פעמיים ועוצרת, גם אם העכבר עוד מעל.",
          "ru": "С `animation-iteration-count: 2;` (другое число) → анимация проходит 2 раза и останавливается, даже если мышь ещё над квадратом.",
          "en": "With `animation-iteration-count: 2;` (another number) → the animation runs twice and stops, even if the mouse is still over it."
        },
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "infinite = אינסופי. ומתי העכבר יוצא?",
            "ru": "infinite = бесконечно. А когда мышь уходит?",
            "en": "infinite = endless. And when the mouse leaves?"
          }
        ],
        "solution": [
          {
            "he": "האנימציה כתובה ב־`:hover`",
            "ru": "Анимация написана в `:hover`",
            "en": "The animation is written in `:hover`"
          },
          {
            "he": "תשובה: שוב ושוב, כל עוד העכבר מעל",
            "ru": "Ответ: снова и снова, пока мышь над квадратом",
            "en": "Answer: again and again while the mouse is over it"
          }
        ]
      },
      {
        "id": "k3",
        "group": "anim",
        "label": {
          "he": "scale(10%)",
          "ru": "scale(10%)",
          "en": "scale(10%)"
        },
        "kind": "number",
        "text": {
          "he": "הריבוע ברוחב `50px`. בתחנה של 10% כתוב `transform: scale(10%, 10%);`. מה הרוחב שרואים על המסך, בפיקסלים?",
          "ru": "Ширина квадрата `50px`. В остановке 10% написано `transform: scale(10%, 10%);`. Какая видимая ширина на экране, в пикселях?",
          "en": "The square is `50px` wide. The 10% stop has `transform: scale(10%, 10%);`. What width do you see on the screen, in pixels?"
        },
        "example": {
          "he": "אילו היה `scale(50%, 50%)` (לא מהשיעור) → `50 × 0.5 = 25` → ריבוע של 25px. ב־`scale(100%, 100%)` (התחנה של 35%) הוא חוזר ל־50px.",
          "ru": "Если бы было `scale(50%, 50%)` (не с урока) → `50 × 0.5 = 25` → квадрат 25px. При `scale(100%, 100%)` (остановка 35%) он снова 50px.",
          "en": "If it were `scale(50%, 50%)` (not from class) → `50 × 0.5 = 25` → a 25px square. At `scale(100%, 100%)` (the 35% stop) it is 50px again."
        },
        "answer": {
          "value": "5"
        },
        "hints": [
          {
            "he": "10% מ־50.",
            "ru": "10% от 50.",
            "en": "10% of 50."
          }
        ],
        "solution": [
          "50 × 0.1 = 5",
          {
            "he": "תשובה: 5px",
            "ru": "Ответ: 5px",
            "en": "Answer: 5px"
          }
        ]
      },
      {
        "id": "k4",
        "group": "anim",
        "label": {
          "he": "בסוף הסיבוב",
          "ru": "В конце круга",
          "en": "At the end of a round"
        },
        "kind": "choice",
        "text": {
          "he": "זה הריבוע עם האנימציה מהשיעור:\n```\n.shapes {\n  height: 50px;\n  width: 50px;\n  background-color: black;\n}\n.shapes:hover {\n  animation-name: shapes1;\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n  transition-timing-function: ease-out;\n}\n@keyframes shapes1 {\n  10% { transform: scale(10%, 10%); border-radius: 50%; }\n  35% { transform: scale(100%, 100%); }\n  60% { transform: scale(10%, 10%); border-radius: 50%; background-color: red; }\n  75% { transform: scale(100%, 100%); background-color: blue; border-radius: 25%; }\n}\n```\nאיזה צבע יש לריבוע בדיוק בסוף סיבוב, ב־100%?",
          "ru": "Это квадрат с анимацией с урока:\n```\n.shapes {\n  height: 50px;\n  width: 50px;\n  background-color: black;\n}\n.shapes:hover {\n  animation-name: shapes1;\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n  transition-timing-function: ease-out;\n}\n@keyframes shapes1 {\n  10% { transform: scale(10%, 10%); border-radius: 50%; }\n  35% { transform: scale(100%, 100%); }\n  60% { transform: scale(10%, 10%); border-radius: 50%; background-color: red; }\n  75% { transform: scale(100%, 100%); background-color: blue; border-radius: 25%; }\n}\n```\nКакого цвета квадрат ровно в конце круга, на 100%?",
          "en": "This is the square with the animation from the lesson:\n```\n.shapes {\n  height: 50px;\n  width: 50px;\n  background-color: black;\n}\n.shapes:hover {\n  animation-name: shapes1;\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n  transition-timing-function: ease-out;\n}\n@keyframes shapes1 {\n  10% { transform: scale(10%, 10%); border-radius: 50%; }\n  35% { transform: scale(100%, 100%); }\n  60% { transform: scale(10%, 10%); border-radius: 50%; background-color: red; }\n  75% { transform: scale(100%, 100%); background-color: blue; border-radius: 25%; }\n}\n```\nWhat colour is the square exactly at the end of a round, at 100%?"
        },
        "options": [
          "black",
          "blue",
          "red"
        ],
        "example": {
          "he": "`border-radius` ב־0% (התחלה): התחנה 0% לא כתובה → לוקחים מהעיצוב הרגיל של `.shapes`, ושם אין `border-radius` → פינות ישרות, ריבוע.",
          "ru": "`border-radius` на 0% (начало): остановка 0% не написана → берётся из обычного оформления `.shapes`, а там `border-radius` нет → углы прямые, квадрат.",
          "en": "`border-radius` at 0% (the start): the 0% stop is not written → it comes from the normal `.shapes` style, which has no `border-radius` → straight corners, a square."
        },
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "האם יש תחנה של 100%?",
            "ru": "Есть ли остановка 100%?",
            "en": "Is there a 100% stop?"
          }
        ],
        "solution": [
          {
            "he": "אין 100% → העיצוב הרגיל: `background-color: black`",
            "ru": "Нет 100% → обычное оформление: `background-color: black`",
            "en": "No 100% → the normal style: `background-color: black`"
          },
          {
            "he": "תשובה: שחור",
            "ru": "Ответ: чёрный",
            "en": "Answer: black"
          }
        ]
      },
      {
        "id": "y1",
        "group": "yt",
        "label": {
          "he": "header ב־grid",
          "ru": "header в grid",
          "en": "header in the grid"
        },
        "kind": "choice",
        "text": {
          "he": "זה ה־CSS מהדף בסגנון YouTube:\n```\n.container {\n  display: grid;\n  grid-template-columns: 200px auto;\n  grid-template-rows: 70px 50px auto;\n}\nheader { grid-column: 1 / span 2; grid-row: 1; }\naside  { grid-column: 1; grid-row: 2 / span 2; }\nnav    { grid-column: 2; grid-row: 2; }\nmain {\n  grid-column: 2; grid-row: 3;\n  display: grid;\n  grid-template-columns: auto auto auto;\n  gap: 15px;\n}\n.thumbnail { transition: transform 0.3s ease; }\n.thumbnail:hover { transform: scale(1.1); }\n```\nאיזה חלק מהדף תופס ה־header?",
          "ru": "Это CSS страницы в стиле YouTube:\n```\n.container {\n  display: grid;\n  grid-template-columns: 200px auto;\n  grid-template-rows: 70px 50px auto;\n}\nheader { grid-column: 1 / span 2; grid-row: 1; }\naside  { grid-column: 1; grid-row: 2 / span 2; }\nnav    { grid-column: 2; grid-row: 2; }\nmain {\n  grid-column: 2; grid-row: 3;\n  display: grid;\n  grid-template-columns: auto auto auto;\n  gap: 15px;\n}\n.thumbnail { transition: transform 0.3s ease; }\n.thumbnail:hover { transform: scale(1.1); }\n```\nКакую часть страницы занимает header?",
          "en": "This is the CSS of the YouTube-style page:\n```\n.container {\n  display: grid;\n  grid-template-columns: 200px auto;\n  grid-template-rows: 70px 50px auto;\n}\nheader { grid-column: 1 / span 2; grid-row: 1; }\naside  { grid-column: 1; grid-row: 2 / span 2; }\nnav    { grid-column: 2; grid-row: 2; }\nmain {\n  grid-column: 2; grid-row: 3;\n  display: grid;\n  grid-template-columns: auto auto auto;\n  gap: 15px;\n}\n.thumbnail { transition: transform 0.3s ease; }\n.thumbnail:hover { transform: scale(1.1); }\n```\nWhich part of the page does the header take?"
        },
        "options": [
          {
            "he": "רק את הטור השמאלי (200px)",
            "ru": "Только левый столбец (200px)",
            "en": "Only the left column (200px)"
          },
          {
            "he": "את כל השורה העליונה, בשני הטורים",
            "ru": "Всю верхнюю строку, оба столбца",
            "en": "The whole top row, both columns"
          },
          {
            "he": "שתי שורות בצד",
            "ru": "Две строки сбоку",
            "en": "Two rows on the side"
          },
          {
            "he": "שום דבר, זו שגיאה",
            "ru": "Ничего, это ошибка",
            "en": "Nothing, it is an error"
          }
        ],
        "example": {
          "he": "ה־aside: `grid-row: 2 / span 2` → מתחיל בשורה 2 ותופס 2 שורות → שורות 2 ו־3, כל הגובה מתחת ל־header, בטור השמאלי.",
          "ru": "aside: `grid-row: 2 / span 2` → начинается со строки 2 и занимает 2 строки → строки 2 и 3, вся высота под header, в левом столбце.",
          "en": "The aside: `grid-row: 2 / span 2` → starts at row 2 and takes 2 rows → rows 2 and 3, the whole height under the header, in the left column."
        },
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "`span 2` = כמה טורים לתפוס.",
            "ru": "`span 2` = сколько столбцов занять.",
            "en": "`span 2` = how many columns to take."
          }
        ],
        "solution": [
          "grid-column: 1 / span 2  →  columns 1 and 2",
          "grid-row: 1  →  the top row",
          {
            "he": "תשובה: את כל השורה העליונה",
            "ru": "Ответ: всю верхнюю строку",
            "en": "Answer: the whole top row"
          }
        ]
      },
      {
        "id": "y2",
        "group": "yt",
        "label": {
          "he": "scale",
          "ru": "scale",
          "en": "scale"
        },
        "kind": "number",
        "text": {
          "he": "זה ה־CSS מהדף בסגנון YouTube:\n```\n.container {\n  display: grid;\n  grid-template-columns: 200px auto;\n  grid-template-rows: 70px 50px auto;\n}\nheader { grid-column: 1 / span 2; grid-row: 1; }\naside  { grid-column: 1; grid-row: 2 / span 2; }\nnav    { grid-column: 2; grid-row: 2; }\nmain {\n  grid-column: 2; grid-row: 3;\n  display: grid;\n  grid-template-columns: auto auto auto;\n  gap: 15px;\n}\n.thumbnail { transition: transform 0.3s ease; }\n.thumbnail:hover { transform: scale(1.1); }\n```\nתמונת הווידאו ברוחב 300px. כמה רחבה היא תיראה על המסך (בפיקסלים) כשהעכבר מעליה?",
          "ru": "Это CSS страницы в стиле YouTube:\n```\n.container {\n  display: grid;\n  grid-template-columns: 200px auto;\n  grid-template-rows: 70px 50px auto;\n}\nheader { grid-column: 1 / span 2; grid-row: 1; }\naside  { grid-column: 1; grid-row: 2 / span 2; }\nnav    { grid-column: 2; grid-row: 2; }\nmain {\n  grid-column: 2; grid-row: 3;\n  display: grid;\n  grid-template-columns: auto auto auto;\n  gap: 15px;\n}\n.thumbnail { transition: transform 0.3s ease; }\n.thumbnail:hover { transform: scale(1.1); }\n```\nКартинка видео шириной 300px. Какой ширины она будет на экране (в пикселях), когда мышь над ней?",
          "en": "This is the CSS of the YouTube-style page:\n```\n.container {\n  display: grid;\n  grid-template-columns: 200px auto;\n  grid-template-rows: 70px 50px auto;\n}\nheader { grid-column: 1 / span 2; grid-row: 1; }\naside  { grid-column: 1; grid-row: 2 / span 2; }\nnav    { grid-column: 2; grid-row: 2; }\nmain {\n  grid-column: 2; grid-row: 3;\n  display: grid;\n  grid-template-columns: auto auto auto;\n  gap: 15px;\n}\n.thumbnail { transition: transform 0.3s ease; }\n.thumbnail:hover { transform: scale(1.1); }\n```\nThe video picture is 300px wide. How wide does it look on screen (in pixels) when the mouse is over it?"
        },
        "example": {
          "he": "`scale(1.5)` על תמונה של 200px → ‏200 × 1.5 = 300px. (מספרים אחרים, לא מהעבודה.)",
          "ru": "`scale(1.5)` у картинки 200px → 200 × 1.5 = 300px. (Другие числа, не из работы.)",
          "en": "`scale(1.5)` on a 200px picture → 200 × 1.5 = 300px. (Other numbers, not from the work.)"
        },
        "answer": {
          "value": "330"
        },
        "hints": [
          {
            "he": "`scale(1.1)` = פי 1.1.",
            "ru": "`scale(1.1)` = в 1.1 раза.",
            "en": "`scale(1.1)` = 1.1 times."
          }
        ],
        "solution": [
          "300 × 1.1 = 330",
          {
            "he": "תשובה: 330",
            "ru": "Ответ: 330",
            "en": "Answer: 330"
          }
        ]
      }
    ],
    "ai": [
      {
        "id": "a1",
        "level": 1,
        "label": "D1",
        "kind": "text",
        "text": {
          "he": "איך נקרא הכלל ב־CSS שבו כותבים את התחנות של אנימציה? (כתבו אותו כמו בקוד)",
          "ru": "Как называется правило CSS, в котором пишут остановки анимации? (напиши как в коде)",
          "en": "What is the CSS rule called where you write an animation's stops? (write it as in code)"
        },
        "example": {
          "he": "בלוק לטלפון מתחיל ב־`@media`. גם הוא מתחיל ב־`@`.",
          "ru": "Блок для телефона начинается с `@media`. Он тоже начинается с `@`.",
          "en": "The phone block starts with `@media`. It also starts with `@`."
        },
        "answer": {
          "accept": [
            "@keyframes",
            "keyframes"
          ]
        },
        "hints": [
          {
            "he": "מתחיל ב־`@`.",
            "ru": "Начинается с `@`.",
            "en": "Starts with `@`."
          }
        ],
        "solution": [
          "@keyframes shapes1 { … }",
          {
            "he": "תשובה: @keyframes",
            "ru": "Ответ: @keyframes",
            "en": "Answer: @keyframes"
          }
        ]
      },
      {
        "id": "a2",
        "level": 2,
        "label": "D2",
        "kind": "number",
        "text": {
          "he": "`transition-duration: 2s;` ו־`transition-delay: 0.5s;`. אחרי כמה שניות מהרגע שהעכבר נכנס השינוי ייגמר?",
          "ru": "`transition-duration: 2s;` и `transition-delay: 0.5s;`. Через сколько секунд после того, как мышь зашла, изменение закончится?",
          "en": "`transition-duration: 2s;` and `transition-delay: 0.5s;`. How many seconds after the mouse comes in does the change end?"
        },
        "example": {
          "he": "`transition-duration: 1s;` בלי `transition-delay` → ההשהיה 0 → נגמר אחרי שנייה אחת.",
          "ru": "`transition-duration: 1s;` без `transition-delay` → задержка 0 → заканчивается через 1 секунду.",
          "en": "`transition-duration: 1s;` without `transition-delay` → the delay is 0 → it ends after 1 second."
        },
        "answer": {
          "value": "2.5"
        },
        "hints": [
          {
            "he": "מחברים השהיה ומשך.",
            "ru": "Складываем задержку и длительность.",
            "en": "Add the delay and the duration."
          }
        ],
        "solution": [
          "0.5 + 2 = 2.5",
          {
            "he": "תשובה: 2.5",
            "ru": "Ответ: 2.5",
            "en": "Answer: 2.5"
          }
        ]
      },
      {
        "id": "a3",
        "level": 3,
        "label": "D3",
        "kind": "choice",
        "text": {
          "he": "לתמונה יש `transition-duration: 1s;` וב־`:hover` רק `transform: rotate(360deg);`. איך התמונה תיראה אחרי שהסיבוב נגמר?",
          "ru": "У картинки `transition-duration: 1s;`, а в `:hover` только `transform: rotate(360deg);`. Как картинка будет выглядеть, когда поворот закончится?",
          "en": "A picture has `transition-duration: 1s;`, and `:hover` has only `transform: rotate(360deg);`. How does the picture look after the turn ends?"
        },
        "options": [
          {
            "he": "בדיוק כמו בהתחלה (רואים את הסיבוב רק בדרך)",
            "ru": "Точно как в начале (поворот виден только по дороге)",
            "en": "Exactly like at the start (the turn is seen only on the way)"
          },
          {
            "he": "הפוכה",
            "ru": "Вверх ногами",
            "en": "Upside down"
          },
          {
            "he": "שוכבת על הצד",
            "ru": "Лежит на боку",
            "en": "Lying on its side"
          }
        ],
        "example": {
          "he": "עם `rotate(180deg)` → חצי סיבוב → התמונה נשארת הפוכה, למטה־למעלה.",
          "ru": "С `rotate(180deg)` → полоборота → картинка остаётся перевёрнутой вверх ногами.",
          "en": "With `rotate(180deg)` → half a turn → the picture stays upside down."
        },
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "כמה מעלות יש בסיבוב שלם?",
            "ru": "Сколько градусов в полном обороте?",
            "en": "How many degrees are in a full turn?"
          }
        ],
        "solution": [
          "360deg = 1 full turn",
          {
            "he": "תשובה: בדיוק כמו בהתחלה",
            "ru": "Ответ: точно как в начале",
            "en": "Answer: exactly like at the start"
          }
        ]
      },
      {
        "id": "a4",
        "level": 3,
        "label": "D4",
        "kind": "choice",
        "text": {
          "he": "זה הריבוע עם האנימציה מהשיעור:\n```\n.shapes {\n  height: 50px;\n  width: 50px;\n  background-color: black;\n}\n.shapes:hover {\n  animation-name: shapes1;\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n  transition-timing-function: ease-out;\n}\n@keyframes shapes1 {\n  10% { transform: scale(10%, 10%); border-radius: 50%; }\n  35% { transform: scale(100%, 100%); }\n  60% { transform: scale(10%, 10%); border-radius: 50%; background-color: red; }\n  75% { transform: scale(100%, 100%); background-color: blue; border-radius: 25%; }\n}\n```\nבתחנה של 35% לא כתוב `border-radius`. איזה `border-radius` יש לריבוע ב־35%?",
          "ru": "Это квадрат с анимацией с урока:\n```\n.shapes {\n  height: 50px;\n  width: 50px;\n  background-color: black;\n}\n.shapes:hover {\n  animation-name: shapes1;\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n  transition-timing-function: ease-out;\n}\n@keyframes shapes1 {\n  10% { transform: scale(10%, 10%); border-radius: 50%; }\n  35% { transform: scale(100%, 100%); }\n  60% { transform: scale(10%, 10%); border-radius: 50%; background-color: red; }\n  75% { transform: scale(100%, 100%); background-color: blue; border-radius: 25%; }\n}\n```\nВ остановке 35% не написан `border-radius`. Какой `border-radius` у квадрата на 35%?",
          "en": "This is the square with the animation from the lesson:\n```\n.shapes {\n  height: 50px;\n  width: 50px;\n  background-color: black;\n}\n.shapes:hover {\n  animation-name: shapes1;\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n  transition-timing-function: ease-out;\n}\n@keyframes shapes1 {\n  10% { transform: scale(10%, 10%); border-radius: 50%; }\n  35% { transform: scale(100%, 100%); }\n  60% { transform: scale(10%, 10%); border-radius: 50%; background-color: red; }\n  75% { transform: scale(100%, 100%); background-color: blue; border-radius: 25%; }\n}\n```\nThe 35% stop has no `border-radius`. What `border-radius` does the square have at 35%?"
        },
        "options": [
          "0",
          "50%",
          "25%"
        ],
        "example": {
          "he": "`background-color` ב־35%: הוא כתוב רק ב־60% (red), ולפני זה רק בעיצוב הרגיל (black) → ב־35% הצבע בדרך מ־black ל־red (הדפדפן הראה `rgb(223, 0, 0)`, כמעט אדום).",
          "ru": "`background-color` на 35%: он написан только на 60% (red), а до этого только в обычном оформлении (black) → на 35% цвет по дороге от black к red (браузер показал `rgb(223, 0, 0)`, почти красный).",
          "en": "`background-color` at 35%: it is written only at 60% (red), and before that only in the normal style (black) → at 35% the colour is on the way from black to red (the browser showed `rgb(223, 0, 0)`, almost red)."
        },
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "מה כתוב בתחנה שלפני 35% ובתחנה שאחריה?",
            "ru": "Что написано в остановке до 35% и после?",
            "en": "What is written in the stop before 35% and the one after?"
          }
        ],
        "solution": [
          "10%: 50%",
          "60%: 50%",
          {
            "he": "בין 50% ל־50% → 50%",
            "ru": "Между 50% и 50% → 50%",
            "en": "Between 50% and 50% → 50%"
          },
          {
            "he": "תשובה: 50%",
            "ru": "Ответ: 50%",
            "en": "Answer: 50%"
          }
        ]
      }
    ]
  }
};

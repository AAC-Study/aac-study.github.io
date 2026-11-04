/* Lesson data — format: see the comment at the top of data/lessons/math-2026-11-01.js.
   Full Stack 04.11: intro to CSS (external file, selectors, which rule wins, box properties)
   and layouts (grid and flex). Code on the slides comes from the projector photos and the
   course files "שיעור 5 - היכרות CSS" / "שיעור 6 - layouts".
   Every grid placement and every "which rule wins" answer below was checked in a real browser
   (Chromium, getComputedStyle / getBoundingClientRect). */
window.LESSONS = window.LESSONS || {};
window.LESSONS["fullstack-2026-11-04"] = {
  "id": "fullstack-2026-11-04",
  "subject": "fullstack",
  "date": "2026-11-04",
  "title": {
    "he": "מבוא ל־CSS ו־Layout: grid ו־flex",
    "ru": "Введение в CSS и раскладка: grid и flex",
    "en": "Intro to CSS and layouts: grid and flex"
  },
  "summary": {
    "he": "למה מפרידים HTML ו־CSS, קובץ CSS נפרד עם `<link>`, בוררים: תגית, `.class`, `#id` ומי מנצח, `border`, `box-shadow`, `padding` ו־`margin`. אחר כך layout: `display: grid`, `grid-template-columns`, רווחים, `grid-column` / `grid-row` עם `span`, ו־`display: flex`.",
    "ru": "Зачем отделять HTML от CSS, отдельный CSS-файл через `<link>`, селекторы: тег, `.class`, `#id` и кто побеждает, `border`, `box-shadow`, `padding` и `margin`. Потом раскладка: `display: grid`, `grid-template-columns`, промежутки, `grid-column` / `grid-row` со `span` и `display: flex`.",
    "en": "Why HTML and CSS are kept apart, a separate CSS file via `<link>`, selectors: tag, `.class`, `#id` and which one wins, `border`, `box-shadow`, `padding` and `margin`. Then layouts: `display: grid`, `grid-template-columns`, gaps, `grid-column` / `grid-row` with `span`, and `display: flex`."
  },
  "timeline": [
    {
      "kind": "talk",
      "title": {
        "he": "שלד, עור, מוח ובגדים",
        "ru": "Скелет, кожа, мозг и одежда",
        "en": "Skeleton, skin, brain and clothes"
      },
      "text": {
        "he": "המצגת מדמה אתר לאדם:\n`HTML` — השלד: רק תוכן ומבנה (כותרות, רשימות, טפסים).\n`CSS` — העור, השיער, צבע העיניים: איך הכול נראה כברירת מחדל.\n`JavaScript` — המוח: איך האתר מגיב למשתמש.\nFrameworks (למשל React) — הבגדים: שינוי המראה וההתנהגות בזמן אמת.\nהיום מתחילים את השכבה השנייה — CSS.",
        "ru": "В презентации сайт сравнивают с человеком:\n`HTML` — скелет: только содержимое и структура (заголовки, списки, формы).\n`CSS` — кожа, волосы, цвет глаз: как всё выглядит по умолчанию.\n`JavaScript` — мозг: как сайт реагирует на пользователя.\nFrameworks (например React) — одежда: меняют вид и поведение на ходу.\nСегодня начинаем второй слой — CSS.",
        "en": "The slides compare a website to a person:\n`HTML` is the skeleton: only content and structure (headings, lists, forms).\n`CSS` is the skin, hair and eye colour: how everything looks by default.\n`JavaScript` is the brain: how the site reacts to the user.\nFrameworks (e.g. React) are the clothes: they change looks and behaviour on the fly.\nToday we start the second layer, CSS."
      },
      "why": {
        "he": "כשכל שכבה בקובץ משלה, אפשר לשנות את העיצוב של כל האתר בלי לגעת בתוכן. עד היום כתבנו `style` בתוך תגיות — וזה בדיוק \"לצבוע את השלד\".",
        "ru": "Когда у каждого слоя свой файл, можно поменять оформление всего сайта, не трогая содержимое. До сегодня мы писали `style` внутри тегов — это как раз «красить скелет».",
        "en": "With each layer in its own file you can restyle the whole site without touching the content. Until today we wrote `style` inside tags, which is exactly \"painting the skeleton\"."
      }
    },
    {
      "kind": "talk",
      "title": {
        "he": "מה זה CSS",
        "ru": "Что такое CSS",
        "en": "What CSS is"
      },
      "text": {
        "he": "CSS = Cascading Style Sheets. Cascading (\"מפל\") — יש סדר דריסה שקובע איזה כלל מנצח.\nלפי המצגת CSS היא שפת עיצוב ולא שפת תכנות: אין בה משתנים או פונקציות כמו ב־Java. היא רק \"מחפשת\" אלמנט לפי תגית, `class` או `id`, ונותנת לו פקודות עיצוב.",
        "ru": "CSS = Cascading Style Sheets. Cascading («каскад») — есть порядок перекрытия, который решает, какое правило побеждает.\nПо презентации CSS — язык оформления, а не программирования: в нём нет переменных и функций, как в Java. Он только «ищет» элемент по тегу, `class` или `id` и даёт ему команды оформления.",
        "en": "CSS = Cascading Style Sheets. Cascading means there is an override order that decides which rule wins.\nPer the slides CSS is a styling language, not a programming language: no variables or functions like in Java. It only \"finds\" an element by tag, `class` or `id` and gives it styling commands."
      },
      "why": {
        "he": "\"מי מנצח\" הוא הלב של CSS. ההשוואה מהשיעור: ב־Java שתי פונקציות עם אותו שם הן שגיאה. ב־CSS שני כללים לאותו אלמנט זה בסדר, והמפל מחליט מי מנצח. לכן כשמשהו לא נצבע כמו שרצית, כמעט תמיד כלל אחר דרס אותו.",
        "ru": "«Кто побеждает» — сердце CSS. Сравнение с урока: если в Java написать две функции с одним именем, будет ошибка. В CSS два правила для одного элемента — нормально, каскад решает, какое победит. Поэтому когда что-то покрасилось не так, почти всегда его перекрыло другое правило.",
        "en": "\"Which rule wins\" is the heart of CSS. The comparison from class: in Java two functions with the same name are an error. In CSS two rules for one element are fine; the cascade decides which wins. So when something isn't styled the way you wanted, another rule almost always overrode it."
      }
    },
    {
      "kind": "talk",
      "title": {
        "he": "3 דרכים לכתוב CSS",
        "ru": "3 способа писать CSS",
        "en": "3 ways to write CSS"
      },
      "text": {
        "he": "1. התכונה `style` בתוך התגית — \"לא נעשה את זה אף פעם\".\n2. התגית `<style>` בתוך הדף — \"נשתדל שלא\". באתר קטן של עמוד או שניים זה בסדר.\n3. קובץ CSS נפרד — \"נעשה תמיד\".\nמעכשיו ב־HTML כותבים רק תוכן, בלי `style`.",
        "ru": "1. Атрибут `style` внутри тега — «не будем делать никогда».\n2. Тег `<style>` внутри страницы — «постараемся не делать». На маленьком сайте из 1–2 страниц это нормально.\n3. Отдельный CSS-файл — «будем делать всегда».\nС этого урока в HTML пишем только содержимое, без `style`.",
        "en": "1. The `style` attribute inside a tag: \"we will never do this\".\n2. A `<style>` tag inside the page: \"we'll try not to\". On a small site of 1–2 pages it's fine.\n3. A separate CSS file: \"we always do this\".\nFrom now on HTML holds only content, no `style`."
      },
      "why": {
        "he": "קובץ אחד יכול לעצב את כל 4 הדפים של התרגיל המסכם. משנים צבע פעם אחת — וכל הדפים מתעדכנים.",
        "ru": "Один файл может оформить все 4 страницы итогового задания. Меняешь цвет один раз — и обновляются все страницы.",
        "en": "One file can style all 4 pages of the summary project. Change a colour once and every page updates."
      }
    },
    {
      "kind": "board",
      "time": "09:03",
      "title": {
        "he": "מחברים קובץ CSS לדף",
        "ru": "Подключаем CSS-файл к странице",
        "en": "Linking a CSS file to the page"
      },
      "text": {
        "he": "בתוך `<head>` כותבים `<link>` עם `rel=\"stylesheet\"` ו־`href` — שם הקובץ. הקובץ `design.css` יושב באותה תיקייה כמו הדף.",
        "ru": "Внутри `<head>` пишем `<link>` с `rel=\"stylesheet\"` и `href` — имя файла. Файл `design.css` лежит в той же папке, что и страница.",
        "en": "Inside `<head>` write `<link>` with `rel=\"stylesheet\"` and `href`, the file name. `design.css` sits in the same folder as the page."
      },
      "math": [
        "<head>",
        "  <meta charset=\"UTF-8\">",
        "  <link rel=\"stylesheet\" href=\"design.css\">",
        "</head>"
      ],
      "why": {
        "he": "`rel` — סוג הקשר (stylesheet = קובץ עיצוב), `href` — למה מקשרים. אם השם ב־`href` לא זהה בדיוק לשם הקובץ (אות, רווח, קו תחתון) — הדפדפן לא מוצא אותו ושום עיצוב לא עובד, בלי שום הודעת שגיאה.",
        "ru": "`rel` — какая это связь (stylesheet = файл оформления), `href` — с чем связываем. Если имя в `href` не совпадает с именем файла буква в букву (буква, пробел, подчёркивание), браузер его не найдёт и оформление не сработает — без всякой ошибки.",
        "en": "`rel` is the kind of link (stylesheet = a styling file), `href` is what we link to. If the name in `href` doesn't match the file name exactly (a letter, a space, an underscore), the browser can't find it and no styling works, with no error at all."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "כלל CSS: בורר { תכונה: ערך; }",
        "ru": "Правило CSS: селектор { свойство: значение; }",
        "en": "A CSS rule: selector { property: value; }"
      },
      "text": {
        "he": "זה הכלל מהשיעור, בקובץ `design.css`. `h1` הוא הבורר (את מי מעצבים), ובתוך הסוגריים המסולסלים — תכונות. כל שורה נגמרת ב־`;`.",
        "ru": "Это правило с урока, из файла `design.css`. `h1` — селектор (кого оформляем), внутри фигурных скобок — свойства. Каждая строка кончается на `;`.",
        "en": "This is the rule from class, in `design.css`. `h1` is the selector (what we style); inside the curly braces are properties. Every line ends with `;`."
      },
      "math": [
        "h1 {",
        "  color: beige;",
        "  background-color: darkred;",
        "  width: 15rem;",
        "  border: 5px dotted white;",
        "  box-shadow: 2px 2px 2px black;",
        "  padding: 25px;",
        "}"
      ],
      "why": {
        "he": "`color` — צבע האותיות, `background-color` — צבע הקופסה. `rem` — יחידת גודל: 1rem = גודל הגופן של הדף (בדרך כלל 16px). `border` — עובי, סוג קו, צבע. `box-shadow` — הזזה ימינה, הזזה למטה, טשטוש, צבע.",
        "ru": "`color` — цвет букв, `background-color` — цвет коробки. `rem` — единица размера: 1rem = размер шрифта страницы (обычно 16px). `border` — толщина, вид линии, цвет. `box-shadow` — сдвиг вправо, сдвиг вниз, размытие, цвет.",
        "en": "`color` is the letter colour, `background-color` the box colour. `rem` is a size unit: 1rem = the page font size (usually 16px). `border` is thickness, line style, colour. `box-shadow` is right offset, down offset, blur, colour."
      }
    },
    {
      "kind": "board",
      "time": "09:09",
      "title": {
        "he": "שלושה סוגי בוררים",
        "ru": "Три вида селекторов",
        "en": "Three kinds of selectors"
      },
      "text": {
        "he": "`h1` — לפי שם התגית: כל ה־h1 בדף.\n`.one` — לפי class (עם נקודה): כל מי שיש לו `class=\"one\"`.\n`#special` — לפי id (עם סולמית): האלמנט היחיד עם `id=\"special\"`.\nבדף של השיעור: שלוש כותרות h1 עם `class=\"one\"`, ולאחת מהן גם `id=\"special\"`.",
        "ru": "`h1` — по имени тега: все h1 на странице.\n`.one` — по class (с точкой): все, у кого `class=\"one\"`.\n`#special` — по id (с решёткой): единственный элемент с `id=\"special\"`.\nНа странице урока: три заголовка h1 с `class=\"one\"`, и у одного из них ещё `id=\"special\"`.",
        "en": "`h1` by tag name: every h1 on the page.\n`.one` by class (with a dot): everyone with `class=\"one\"`.\n`#special` by id (with a hash): the single element with `id=\"special\"`.\nOn the class page: three h1 headings with `class=\"one\"`, and one of them also has `id=\"special\"`."
      },
      "math": [
        ".one {",
        "  color: lightcyan;",
        "  background-color: black;",
        "  width: 18rem;",
        "}",
        "#special {",
        "  color: ghostwhite;",
        "  background-color: khaki;",
        "  padding: 5px;",
        "}",
        "body { background-color: lightblue; }"
      ],
      "why": {
        "he": "זה ההמשך של `id` ו־`class` מ־28.10: שם אמרנו \"בהמשך נעצב לפיהם\". נקודה = class, סולמית = id. בלי הסימן CSS יחפש תגית בשם `one` — ולא ימצא.",
        "ru": "Это продолжение `id` и `class` с 28.10: там сказали «дальше будем по ним оформлять». Точка = class, решётка = id. Без значка CSS будет искать тег с именем `one` — и не найдёт.",
        "en": "This continues `id` and `class` from 28.10, where we said \"later we'll style by them\". Dot = class, hash = id. Without the symbol CSS looks for a tag called `one` and finds nothing."
      }
    },
    {
      "kind": "tip",
      "title": {
        "he": "מי מנצח: id ← class ← תגית",
        "ru": "Кто побеждает: id → class → тег",
        "en": "Who wins: id → class → tag"
      },
      "text": {
        "he": "כשכמה כללים נותנים לאותו אלמנט את אותה תכונה, מנצח הכלל המדויק יותר:\n`#id` חזק מ־`.class`, ו־`.class` חזק משם תגית.\nלכותרת `<h1 class=\"one\" id=\"special\">` מהשיעור: צבע ghostwhite ורקע khaki (מ־#special), רוחב 18rem (מ־.one, כי ל־#special אין width).\nאם שני הכללים באותו כוח — מנצח זה שכתוב מאוחר יותר.\nמעל כולם יש `!important`, אבל כמעט לא משתמשים בו.",
        "ru": "Когда несколько правил дают одному элементу одно и то же свойство, побеждает более точное:\n`#id` сильнее `.class`, а `.class` сильнее имени тега.\nДля заголовка `<h1 class=\"one\" id=\"special\">` с урока: цвет ghostwhite и фон khaki (из #special), ширина 18rem (из .one, потому что у #special нет width).\nЕсли два правила одной силы, побеждает то, что написано ниже.\nВыше всех стоит `!important`, но им почти не пользуются.",
        "en": "When several rules give the same element the same property, the more precise one wins:\n`#id` beats `.class`, and `.class` beats a tag name.\nFor the class heading `<h1 class=\"one\" id=\"special\">`: colour ghostwhite and background khaki (from #special), width 18rem (from .one, since #special has no width).\nIf two rules are equally strong, the one written later wins.\nAbove them all is `!important`, but it is hardly ever used."
      },
      "why": {
        "he": "כל תכונה נבדקת לחוד. לכן אלמנט יכול לקבל צבע מכלל אחד ורוחב מכלל אחר. בדקנו בדפדפן אמיתי.",
        "ru": "Каждое свойство решается отдельно. Поэтому элемент может взять цвет из одного правила, а ширину из другого. Проверено в настоящем браузере.",
        "en": "Each property is decided separately, so an element can take its colour from one rule and its width from another. Checked in a real browser."
      }
    },
    {
      "kind": "qa",
      "title": {
        "he": "איך לעצב רק חלק מהכותרות?",
        "ru": "Как оформить только часть заголовков?",
        "en": "How to style only some headings?"
      },
      "q": {
        "he": "כתבתי כלל ל־`h1`, והוא נדבק לכל ה־h1, גם לאלה עם class. איך לעצב רק חלק?",
        "ru": "Я написал правило для `h1`, и оно прилипло ко всем h1, даже к тем, у кого есть class. Как оформить только часть?",
        "en": "I wrote a rule for `h1` and it stuck to every h1, even the ones with a class. How do I style only some?"
      },
      "a": {
        "he": "כלל של תגית תופס את כולן. שמים את העיצוב רק בכלל של ה־class (`.o { … }`), ואת ה־class נותנים רק למי שצריך. class הוא כמו שם של משתנה: אתה בוחר את השם, וכל מי שמקבל אותו מקבל את העיצוב. אפשר לתת אותו גם ל־`<p>` או ל־`<div>`, לא רק לכותרת.",
        "ru": "Правило тега ловит всех. Оформление кладём только в правило класса (`.o { … }`), а класс даём только тем, кому нужно. Класс — как имя переменной: имя выбираешь ты, и все, кто его получил, получают оформление. Его можно дать и `<p>` или `<div>`, не только заголовку.",
        "en": "A tag rule catches them all. Put the styling only in the class rule (`.o { … }`) and give the class only to those who need it. A class is like a variable name: you pick it, and whoever gets it gets the styling. It can go on a `<p>` or a `<div>` too, not only a heading."
      },
      "why": {
        "he": "זו הסיבה שהמרצה מבקש class או id לכל אלמנט בתרגיל המסכם: כך אפשר לעצב כל דבר בנפרד.",
        "ru": "Поэтому в итоговом задании просят class или id у каждого элемента: так можно оформить всё по отдельности.",
        "en": "That's why the summary project asks for a class or id on every element: then everything can be styled separately."
      }
    },
    {
      "kind": "board",
      "time": "10:39",
      "title": {
        "he": "padding ו־margin, וגם צד אחד",
        "ru": "padding и margin, и одна сторона",
        "en": "padding and margin, and one side"
      },
      "text": {
        "he": "על הלוח נוספו ל־h1 ריווחים. `padding` / `margin` בלי צד — לכל 4 הצדדים. `padding-left` / `margin-left` — רק לצד אחד (יש גם right, top, bottom).\nכאן `margin: 50px` נותן 50 לכל צד, ואז `margin-left: 0px` שכתוב אחריו דורס רק את הצד השמאלי.",
        "ru": "На доске к h1 добавили отступы. `padding` / `margin` без стороны — на все 4 стороны. `padding-left` / `margin-left` — только одна сторона (есть ещё right, top, bottom).\nЗдесь `margin: 50px` даёт 50 на каждую сторону, а `margin-left: 0px`, написанный после, перекрывает только левую.",
        "en": "Spacing was added to h1 on the board. `padding` / `margin` with no side means all 4 sides. `padding-left` / `margin-left` means one side only (there are also right, top, bottom).\nHere `margin: 50px` gives 50 on every side, and `margin-left: 0px` written after it overrides only the left one."
      },
      "math": [
        "h1 {",
        "  padding: 5px;",
        "  padding-left: 20rem;",
        "  margin: 50px;",
        "  margin-left: 0px;",
        "}"
      ],
      "why": {
        "he": "הסדר חשוב: אם כותבים קודם `padding-left: 20px` ואחריו `padding: 5px`, הכללי שבא אחרי דורס גם את השמאלי, ויוצא 5px. בדקנו בדפדפן.",
        "ru": "Порядок важен: если сначала написать `padding-left: 20px`, а потом `padding: 5px`, общее правило ниже перекроет и левую сторону — выйдет 5px. Проверено в браузере.",
        "en": "Order matters: write `padding-left: 20px` first and `padding: 5px` after it, and the general one below overrides the left side too, giving 5px. Checked in a browser."
      }
    },
    {
      "kind": "qa",
      "title": {
        "he": "padding מזיז את הטקסט, לא את הקופסה",
        "ru": "padding двигает текст, а не коробку",
        "en": "padding moves the text, not the box"
      },
      "q": {
        "he": "`padding` מזיז רק את הטקסט בתוך הקופסה. איך מזיזים את הקופסה עצמה?",
        "ru": "`padding` двигает только текст внутри коробки. Как подвинуть саму коробку?",
        "en": "`padding` only moves the text inside the box. How do I move the box itself?"
      },
      "a": {
        "he": "`padding` — ריווח בפנים: בין הטקסט למסגרת, והקופסה גדלה.\n`margin` — ריווח בחוץ: בין המסגרת לשכנים, והקופסה זזה.\nכדי להזיז קופסה — `margin` (או `margin-left` לצד אחד).",
        "ru": "`padding` — отступ внутри: между текстом и рамкой, коробка растёт.\n`margin` — отступ снаружи: между рамкой и соседями, коробка сдвигается.\nЧтобы подвинуть коробку — `margin` (или `margin-left` для одной стороны).",
        "en": "`padding` is space inside, between the text and the border; the box grows.\n`margin` is space outside, between the border and the neighbours; the box moves.\nTo move a box use `margin` (or `margin-left` for one side)."
      },
      "why": {
        "he": "תדמיין קופסת קרטון: padding הוא הקלקר בפנים, margin הוא המרחק מהקופסה השכנה על המדף.",
        "ru": "Представь картонную коробку: padding — это пенопласт внутри, margin — расстояние до соседней коробки на полке.",
        "en": "Picture a cardboard box: padding is the foam inside, margin is the distance to the next box on the shelf."
      }
    },
    {
      "kind": "talk",
      "title": {
        "he": "מודל הקופסה",
        "ru": "Модель коробки",
        "en": "The box model"
      },
      "text": {
        "he": "לכל אלמנט יש 4 שכבות, מבפנים החוצה:\nתוכן ← `padding` ← `border` ← `margin`.\n`padding` קיים תמיד, בדרך כלל 0. גם `border` בדרך כלל 0px, ואפשר להגדיל אותו. `margin` הוא \"קיר בלתי נראה\" בין האלמנט לשכנים.\nבשיעור ראינו את זה גם באתר אמיתי: לחיצה ימנית ← Inspect (בדיקה), ולמטה בכרטיסייה Computed מצויר המלבן עם המספרים של כל שכבה.",
        "ru": "У каждого элемента 4 слоя, изнутри наружу:\nсодержимое → `padding` → `border` → `margin`.\n`padding` есть всегда, обычно 0. `border` тоже обычно 0px, и его можно увеличить. `margin` — «невидимая стена» между элементом и соседями.\nНа уроке это смотрели и на настоящем сайте: правая кнопка мыши → «Просмотреть код» (Inspect), внизу во вкладке Computed нарисован прямоугольник с числами каждого слоя.",
        "en": "Every element has 4 layers, inside out:\ncontent → `padding` → `border` → `margin`.\n`padding` always exists, usually 0. `border` is usually 0px too and can be widened. `margin` is an \"invisible wall\" between the element and its neighbours.\nIn class we also looked at a real site: right-click → Inspect, and in the Computed tab a rectangle shows the numbers of every layer."
      },
      "why": {
        "he": "כשמשהו זז \"לא מסיבה\", פותחים Computed ורואים איזו שכבה גדולה מדי. ככה מוצאים padding או margin שהדפדפן הוסיף לבד.",
        "ru": "Когда что-то сдвинулось «без причины», открываешь Computed и видишь, какой слой слишком большой. Так находят padding или margin, которые браузер добавил сам.",
        "en": "When something shifts \"for no reason\", open Computed and see which layer is too big. That's how you find padding or margin the browser added on its own."
      }
    },
    {
      "kind": "qa",
      "title": {
        "he": "קופסה לכל דבר — div",
        "ru": "Коробка для чего угодно — div",
        "en": "A box for anything: div"
      },
      "q": {
        "he": "איך יוצרים קופסה שאפשר לשים בה מה שרוצים?",
        "ru": "Как сделать коробку, в которую можно положить что угодно?",
        "en": "How do I make a box I can put anything into?"
      },
      "a": {
        "he": "`<div class=\"box\"> … </div>` — קופסה ריקה בלי עיצוב משלה. שמים בתוכה כותרות, תמונות, טקסט, ומעצבים אותה דרך `.box` (`width`, `border`, `padding`, `background-color`).",
        "ru": "`<div class=\"box\"> … </div>` — пустая коробка без своего оформления. Внутрь кладёшь заголовки, картинки, текст, а оформляешь её через `.box` (`width`, `border`, `padding`, `background-color`).",
        "en": "`<div class=\"box\"> … </div>` is an empty box with no styling of its own. Put headings, images, text inside and style it through `.box` (`width`, `border`, `padding`, `background-color`)."
      },
      "why": {
        "he": "ב־layout כל חלק בדף הוא div כזה. בלי קופסאות אין מה לסדר.",
        "ru": "В раскладке каждая часть страницы — такой div. Без коробок нечего раскладывать.",
        "en": "In a layout every part of the page is a div like this. Without boxes there's nothing to arrange."
      }
    },
    {
      "kind": "tip",
      "title": {
        "he": "צל רק לאותיות: text-shadow",
        "ru": "Тень только для букв: text-shadow",
        "en": "A shadow for letters only: text-shadow"
      },
      "text": {
        "he": "בשיעור רק הזכירו אותו וביקשו לחפש לבד. `box-shadow` מטיל צל של כל הקופסה. לצל של האותיות בלבד יש `text-shadow`: ימינה, למטה, טשטוש, צבע. רק 3 מספרים: אין לו מספר רביעי (spread) כמו ל־`box-shadow`.",
        "ru": "На уроке его только назвали и предложили поискать самим. `box-shadow` даёт тень всей коробке. Для тени только у букв есть `text-shadow`: вправо, вниз, размытие, цвет. Только 3 числа: четвёртого числа (spread), как у `box-shadow`, у него нет.",
        "en": "In class it was only named, with a suggestion to look it up. `box-shadow` shadows the whole box. For the letters only there is `text-shadow`: right, down, blur, colour. Just 3 numbers: it has no 4th number (spread) like `box-shadow`."
      },
      "math": [
        "h1 { text-shadow: 3px 3px 5px black; }"
      ],
      "why": {
        "he": "אם כותבים לו 4 מספרים, הדפדפן מתעלם מכל הכלל, ולכן \"זה לא עובד\".",
        "ru": "Если написать ему 4 числа, браузер проигнорирует всё правило, поэтому «не работает».",
        "en": "Give it 4 numbers and the browser ignores the whole rule, so \"it doesn't work\"."
      }
    },
    {
      "kind": "talk",
      "time": "11:02",
      "title": {
        "he": "Layout: הדף כרשת של קופסאות",
        "ru": "Раскладка: страница как сетка из коробок",
        "en": "Layout: the page as a grid of boxes"
      },
      "text": {
        "he": "עד עכשיו כל האלמנטים יורדים אחד אחרי השני מלמעלה למטה. באתרים אמיתיים הדף מחולק לחלקים: תפריט, חיפוש, סרטונים וכו׳.\nבשיעור חילקו דף עסקי של פייסבוק למשבצות \"שורה,טור\": 2 טורים ו־6 שורות. משבצת אחת תופסת 2 שורות (3-4,1).",
        "ru": "До сих пор все элементы идут один за другим сверху вниз. На настоящих сайтах страница поделена на части: меню, поиск, видео и т. д.\nНа уроке страницу бизнеса в Facebook разбили на клетки «строка,столбец»: 2 столбца и 6 строк. Одна клетка занимает 2 строки (3-4,1).",
        "en": "So far every element goes one after another, top to bottom. Real sites split the page into parts: menu, search, videos and so on.\nIn class a Facebook business page was split into \"row,column\" cells: 2 columns and 6 rows. One cell takes 2 rows (3-4,1)."
      },
      "why": {
        "he": "זה בדיוק כמו טבלה מ־28.10 עם `rowspan`, רק שעכשיו בונים את זה ב־CSS ולא בטבלה.",
        "ru": "Это точно как таблица с 28.10 с `rowspan`, только теперь строим это через CSS, а не таблицей.",
        "en": "It's exactly like the 28.10 table with `rowspan`, only now we build it with CSS instead of a table."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "תרגילון: לפרק אתר לחלקים",
        "ru": "Упражнение: разобрать сайт на части",
        "en": "Mini-exercise: split a site into parts"
      },
      "text": {
        "he": "10–15 דקות: פותחים אתר מודרני וכותבים את כל החלקים שמרכיבים אותו: תפריט עליון, תפריט צד, שורת חיפוש, תוכן ראשי, תמונה גדולה וכו׳.",
        "ru": "10–15 минут: открыть современный сайт и выписать все части, из которых он состоит: верхнее меню, боковое меню, строка поиска, главный контент, большая картинка и т. д.",
        "en": "10–15 minutes: open a modern site and list every part it is built from: top menu, side menu, search bar, main content, a big image, etc."
      },
      "why": {
        "he": "לפני שכותבים grid צריך לראות את המשבצות. מי שפירק את הדף על נייר יודע כמה טורים ושורות לבקש.",
        "ru": "Прежде чем писать grid, нужно увидеть клетки. Кто разобрал страницу на бумаге, тот знает, сколько столбцов и строк просить.",
        "en": "Before writing a grid you need to see the cells. Once you split the page on paper you know how many columns and rows to ask for."
      }
    },
    {
      "kind": "talk",
      "title": {
        "he": "2 דרכים: grid ו־flex",
        "ru": "2 способа: grid и flex",
        "en": "2 ways: grid and flex"
      },
      "text": {
        "he": "Grid — כל אלמנט במשבצת משלו ברשת. אפשר לשנות גודל משבצות ולמתוח אלמנט על כמה משבצות. חדש יותר, קשה יותר ללמוד, פחות תקלות. מתאים לרוב האתרים.\nFlex — האלמנטים בשורה אחד אחרי השני, בסדר שבוחרים. ישן יותר, עובד גם בדפדפנים ישנים, פשוט לביצוע אבל יותר תקלות. מתאים לדפי נחיתה ותפריטים.\nלרוב משלבים את שניהם. float קיים, אבל בקורס לא ניכנס אליו.",
        "ru": "Grid — каждый элемент в своей клетке сетки. Можно менять размеры клеток и растягивать элемент на несколько клеток. Новее, сложнее выучить, меньше сбоев. Подходит большинству сайтов.\nFlex — элементы в ряд один за другим, в выбранном порядке. Старше, работает и в старых браузерах, прост в выполнении, но сбоев больше. Подходит для лендингов и меню.\nЧаще всего их сочетают. Есть ещё float, но в курсе его не будет.",
        "en": "Grid puts every element in its own cell of a grid. You can resize cells and stretch an element over several. Newer, harder to learn, fewer glitches. Fits most sites.\nFlex lines elements up one after another in the order you choose. Older, works in old browsers, simple to do but more glitches. Fits landing pages and menus.\nMost often both are combined. float exists, but the course won't go into it."
      },
      "why": {
        "he": "דימוי מהשיעור: לוח שחמט הוא grid — שורות וטורים, ולכל משבצת כתובת (כמו e4). flex הוא שורה של דברים אחד אחרי השני, טוב לדברים דינמיים כמו דף מוצרים. float רק \"מזיז שמאלה או ימינה\", מסובך ומועד לטעויות, ולכן לא נשתמש בו.",
        "ru": "Сравнение с урока: шахматная доска — это grid: строки и столбцы, у каждой клетки адрес (как e4). flex — ряд вещей одна за другой, хорош для динамичного, например страницы товаров. float только «двигает влево или вправо», сложный и даёт ошибки, поэтому его не берём.",
        "en": "The picture from class: a chessboard is a grid, rows and columns with an address for every square (like e4). flex is a row of things one after another, good for dynamic content like product pages. float only \"moves left or right\", is complicated and error-prone, so we won't use it."
      }
    },
    {
      "kind": "board",
      "time": "11:23",
      "title": {
        "he": "grid.html: האבא אומר לילדים להסתדר",
        "ru": "grid.html: родитель велит детям выстроиться",
        "en": "grid.html: the parent tells its children to line up"
      },
      "text": {
        "he": "בדף: `<h1>Grid Layout</h1>` ואחריו `<div>` אחד, ובתוכו הרבה ילדים: `h2`, `p`, `img` שוב ושוב.\n`display: grid` נכתב על ה־div (האבא). הילדים שלו מסתדרים במשבצות, 2 בכל שורה.\n`h2` ו־`p` מקבלים `margin: 0px`, כי לדפדפן יש להם margin משלו שמפריע לרשת.",
        "ru": "На странице: `<h1>Grid Layout</h1>`, после него один `<div>`, а внутри много детей: `h2`, `p`, `img` снова и снова.\n`display: grid` написан на div (родителе). Его дети встают по клеткам, по 2 в строке.\n`h2` и `p` получают `margin: 0px`, потому что у браузера для них свой margin, который мешает сетке.",
        "en": "The page has `<h1>Grid Layout</h1>`, then one `<div>` holding many children: `h2`, `p`, `img` again and again.\n`display: grid` is written on the div (the parent). Its children line up in cells, 2 per row.\n`h2` and `p` get `margin: 0px` because the browser gives them its own margin, which disturbs the grid."
      },
      "math": [
        "div {",
        "  display: grid;",
        "  grid-template-columns: auto auto;",
        "  grid-row-gap: 2rem;",
        "}",
        "h2 { margin: 0px; }",
        "p  { margin: 0px; }"
      ],
      "why": {
        "he": "לפי המצגת: `display: grid` אומר לאלמנט שהילדים שלו יסתדרו ברשת, ואת האבא עצמו זה לא משנה. לכן שמים אותו על הקופסה החיצונית, לא על כל ילד.",
        "ru": "По презентации: `display: grid` говорит элементу, что его ДЕТИ встанут в сетку, а самого родителя это не меняет. Поэтому его ставят на внешнюю коробку, а не на каждого ребёнка.",
        "en": "Per the slides: `display: grid` tells an element that its CHILDREN line up in a grid; the parent itself doesn't change. So it goes on the outer box, not on each child."
      }
    },
    {
      "kind": "tip",
      "title": {
        "he": "ארון ומדפים: grid על האבא",
        "ru": "Шкаф и полки: grid ставим родителю",
        "en": "A cupboard and shelves: grid goes on the parent"
      },
      "text": {
        "he": "האבא (הארון) — `display: grid`, `grid-template-columns`, הרווחים.\nהילד (קופסה בארון) — איפה הוא עומד (`grid-column`, `grid-row`) ואיך הוא נראה (צבע, רקע, צל, padding).\nטעות נפוצה: לשים `display: grid` על קופסה שיש בה רק טקסט אחד. אין לה ילדים לסדר, ולכן לא קורה כלום, וגם הרווח לא עובד.\nועוד טעות: לכתוב `div { … }` — זה תופס את כל ה־div בדף. עדיף class: `.page { … }`.",
        "ru": "Родитель (шкаф) — `display: grid`, `grid-template-columns`, промежутки.\nРебёнок (коробка в шкафу) — где он стоит (`grid-column`, `grid-row`) и как выглядит (цвет, фон, тень, padding).\nЧастая ошибка: ставить `display: grid` на коробку, где внутри один текст. Раскладывать некого, поэтому ничего не происходит, и промежуток тоже не работает.\nЕщё ошибка: писать `div { … }` — это ловит все div на странице. Лучше класс: `.page { … }`.",
        "en": "The parent (cupboard) gets `display: grid`, `grid-template-columns` and the gaps.\nThe child (a box in the cupboard) gets where it stands (`grid-column`, `grid-row`) and how it looks (colour, background, shadow, padding).\nCommon mistake: putting `display: grid` on a box that holds a single text. There are no children to arrange, so nothing happens and the gap doesn't work either.\nAnother: writing `div { … }`, which catches every div on the page. Better a class: `.page { … }`."
      },
      "math": [
        "<div class=\"page\">",
        "  <div class=\"page1\">…</div>",
        "  <div class=\"page2\">…</div>",
        "  <div class=\"page3\">…</div>",
        "</div>",
        "",
        ".page {",
        "  display: grid;",
        "  grid-template-columns: auto auto;",
        "  grid-column-gap: 20px;",
        "  grid-row-gap: 20px;",
        "}"
      ],
      "why": {
        "he": "אם כל ילד הוא רשת נפרדת ואין ארון משותף, הם פשוט יורדים אחד מתחת לשני, כי ה־body עצמו לא grid.",
        "ru": "Если каждый ребёнок — отдельная сетка, а общего шкафа нет, они просто идут друг под другом, потому что сам body не grid.",
        "en": "If every child is its own grid and there's no shared cupboard, they just stack, because body itself isn't a grid."
      }
    },
    {
      "kind": "tip",
      "title": {
        "he": "grid-template-columns = כמה טורים",
        "ru": "grid-template-columns = сколько столбцов",
        "en": "grid-template-columns = how many columns"
      },
      "text": {
        "he": "סופרים את המילים: `auto auto` = 2 טורים, `auto auto auto auto` = 4 טורים. זה קובע רק את הרוחב.\nבמצגת כתוב \"נקבל 4 שורות\", אבל הכוונה ל־4 טורים: 4 אלמנטים זה לצד זה, ואז ירידת שורה.\nאת מספר השורות הדפדפן יוצר לבד, כמה שצריך: 7 ילדים ב־3 טורים = 3 שורות (3 + 3 + 1).\n`auto` = רוחב לפי התוכן: איפה שיש יותר תוכן, הטור רחב יותר.\nאפשר גם גדלים: `33% 33% 33%`, `60% 40%` או שילוב `10% 20% auto` (auto לוקח את מה שנשאר).",
        "ru": "Считай слова: `auto auto` = 2 столбца, `auto auto auto auto` = 4 столбца. Это задаёт только ширину.\nВ презентации написано «получим 4 строки» (4 שורות), но имеются в виду 4 столбца: 4 элемента рядом, потом новая строка.\nСтроки браузер создаёт сам, сколько нужно: 7 детей в 3 столбцах = 3 строки (3 + 3 + 1).\n`auto` = ширина по содержимому: где содержимого больше, столбец шире.\nМожно и размеры: `33% 33% 33%`, `60% 40%` или смесь `10% 20% auto` (auto забирает остаток).",
        "en": "Count the words: `auto auto` = 2 columns, `auto auto auto auto` = 4 columns. It only sets the width.\nThe slide says \"we get 4 rows\", but it means 4 columns: 4 elements side by side, then a new row.\nThe browser makes the rows itself, as many as needed: 7 children in 3 columns = 3 rows (3 + 3 + 1).\n`auto` = width by content: more content, wider column.\nSizes work too: `33% 33% 33%`, `60% 40%` or a mix `10% 20% auto` (auto takes the rest)."
      },
      "why": {
        "he": "איך לזכור: row = שורה, שוכבת ↔ כמו מדף. column = טור, עומד ↕ כמו עמוד של בניין. אבל המספר של טור נספר משמאל לימין (ובדף עם `dir=\"rtl\"` — מימין לשמאל).",
        "ru": "Как запомнить: row = строка, лежит ↔ как полка. column = столбец, стоит ↕ как колонна здания. Но номер столбца считают слева направо (а на странице с `dir=\"rtl\"` — справа налево).",
        "en": "How to remember: row lies flat ↔ like a shelf. column stands ↕ like a building's pillar. But column numbers count left to right (right to left on a page with `dir=\"rtl\"`)."
      }
    },
    {
      "kind": "board",
      "time": "11:30",
      "title": {
        "he": "#batman: תמונה על 2 טורים ו־2 שורות",
        "ru": "#batman: картинка на 2 столбца и 2 строки",
        "en": "#batman: an image over 2 columns and 2 rows"
      },
      "text": {
        "he": "לאחת התמונות יש `id=\"batman\"`. היא מתחילה בטור 1 ותופסת 2 טורים, מתחילה בשורה 1 ותופסת 2 שורות. `width: 100%` — התמונה ממלאת את כל המשבצת הגדולה.",
        "ru": "У одной картинки `id=\"batman\"`. Она начинается в столбце 1 и занимает 2 столбца, начинается в строке 1 и занимает 2 строки. `width: 100%` — картинка заполняет всю большую клетку.",
        "en": "One image has `id=\"batman\"`. It starts in column 1 and takes 2 columns, starts in row 1 and takes 2 rows. `width: 100%` makes it fill the whole big cell."
      },
      "math": [
        "#batman {",
        "  grid-column: 1 /span 2;",
        "  grid-row: 1 /span 2;",
        "  width: 100%;",
        "}"
      ],
      "why": {
        "he": "`span` = \"תתפרש על\". זה ה־`colspan` / `rowspan` של הטבלה מ־28.10. `1 /span 2` = מתחילים ב־1 ותופסים 2 (כלומר 1 ו־2). 2 טורים × 2 שורות = 4 משבצות. כל שאר הילדים מסתדרים מסביב לפי הסדר הרגיל.",
        "ru": "`span` = «растянись на». Это `colspan` / `rowspan` из таблицы 28.10. `1 /span 2` = начать с 1 и занять 2 (то есть 1 и 2). 2 столбца × 2 строки = 4 клетки. Все остальные дети встают вокруг по обычному порядку.",
        "en": "`span` means \"stretch over\". It's the `colspan` / `rowspan` of the 28.10 table. `1 /span 2` = start at 1 and take 2 (that is 1 and 2). 2 columns × 2 rows = 4 cells. All the other children fill in around it in normal order."
      }
    },
    {
      "kind": "board",
      "time": "11:35",
      "title": {
        "he": "#special: טור 2, משורה 3 על 9 שורות",
        "ru": "#special: столбец 2, со строки 3 на 9 строк",
        "en": "#special: column 2, from row 3 over 9 rows"
      },
      "text": {
        "he": "אלמנט עם `id=\"special\"` עומד בטור 2, מתחיל בשורה 3 ותופס 9 שורות: 3, 4, … 11. רקע yellowgreen כדי לראות כמה מקום הוא תופס.",
        "ru": "Элемент с `id=\"special\"` стоит в столбце 2, начинается в строке 3 и занимает 9 строк: 3, 4, … 11. Фон yellowgreen, чтобы видеть, сколько места он занимает.",
        "en": "The element with `id=\"special\"` stands in column 2, starts at row 3 and takes 9 rows: 3, 4, … 11. A yellowgreen background shows how much space it takes."
      },
      "math": [
        "#special {",
        "  grid-column: 2;",
        "  grid-row: 3 /span 9;",
        "  background-color: yellowgreen;",
        "}"
      ],
      "why": {
        "he": "אם כותבים לילד שורה שעוד לא קיימת, הדפדפן פשוט מוסיף שורות. כדי לראות את הקווים: F12 ← Elements ← ליד ה־div לוחצים על התג הקטן grid.",
        "ru": "Если ребёнку написать строку, которой ещё нет, браузер просто добавит строки. Чтобы увидеть линии: F12 → Elements → рядом с div нажми маленький значок grid.",
        "en": "Give a child a row that doesn't exist yet and the browser just adds rows. To see the lines: F12 → Elements → click the small grid badge next to the div."
      }
    },
    {
      "kind": "faq",
      "title": {
        "he": "שמתי grid-column: 3 — למה האחרים ירדו למטה?",
        "ru": "Поставил grid-column: 3 — почему остальные ушли вниз?",
        "en": "I set grid-column: 3. Why did the others drop down?"
      },
      "q": {
        "he": "ב־`.page` יש 4 טורים ו־4 ילדים. נתתי לראשון `grid-column: 3`, ושני ילדים ירדו לשורה השנייה. למה?",
        "ru": "В `.page` 4 столбца и 4 ребёнка. Первому дал `grid-column: 3`, и двое ушли на вторую строку. Почему?",
        "en": "`.page` has 4 columns and 4 children. I gave the first `grid-column: 3` and two children dropped to the second row. Why?"
      },
      "a": {
        "he": "`grid-column: 3` זה \"טור שלישי משמאל\", לא \"3 למטה\". הדפדפן מסדר את הילדים לפי הסדר ולא חוזר אחורה:\nהראשון ← שורה 1, טור 3.\nהשני ← המשבצת הפנויה הבאה, שורה 1, טור 4.\nהשורה נגמרה, אז השלישי והרביעי ← שורה 2, טורים 1 ו־2.\nכדי לבחור מקום לכולם — נותנים לכל ילד `grid-column` ו־`grid-row`. כדי להוריד למטה — `grid-row`.",
        "ru": "`grid-column: 3` — это «третий столбец слева», а не «3 вниз». Браузер ставит детей по порядку и назад не возвращается:\nпервый → строка 1, столбец 3.\nвторой → следующая свободная клетка, строка 1, столбец 4.\nстрока кончилась, поэтому третий и четвёртый → строка 2, столбцы 1 и 2.\nЧтобы выбрать место всем — дай каждому ребёнку `grid-column` и `grid-row`. Чтобы опустить вниз — `grid-row`.",
        "en": "`grid-column: 3` means \"third column from the left\", not \"3 down\". The browser places children in order and never goes back:\nthe first → row 1, column 3.\nthe second → the next free cell, row 1, column 4.\nthe row is full, so the third and fourth → row 2, columns 1 and 2.\nTo choose everyone's place, give each child `grid-column` and `grid-row`. To move something down, use `grid-row`."
      },
      "why": {
        "he": "בדקנו בדפדפן: בדיוק כך הם עומדים. זו טעות שקל ליפול בה כשמבלבלים בין row ל־column.",
        "ru": "Проверено в браузере: стоят ровно так. В эту ловушку легко попасть, когда путаешь row и column.",
        "en": "Checked in a browser: that's exactly where they land. An easy trap when row and column get mixed up."
      }
    },
    {
      "kind": "board",
      "time": "11:35",
      "title": {
        "he": "Flex: כרטיסי טלפונים בשורה",
        "ru": "Flex: карточки телефонов в ряд",
        "en": "Flex: phone cards in a row"
      },
      "text": {
        "he": "בקובץ `lessonFlexBox.css`: הקופסה `#content` היא flex. הילדים (כרטיסים `.phonecard`) עומדים בשורה, ו־`flex-wrap: wrap` מוריד כרטיס לשורה חדשה כשאין מקום.\nלכרטיס: רקע, `margin`, טקסט במרכז, צל ופינות מעוגלות. לתמונה: רוחב 70% ומסגרת. ל־h1: `font-size: 200px` — גודל האותיות.\nבשיעור הוסיפו טלפונים: ככל שיש יותר מקום, יותר טלפונים בשורה. `flex-direction: column` מסדר אותם בטור, `column-reverse` — בטור בסדר הפוך (הטלפון האחרון למעלה). גודל אותיות אפשר גם במילה: `font-size: xx-large`.",
        "ru": "В файле `lessonFlexBox.css`: коробка `#content` — flex. Дети (карточки `.phonecard`) стоят в ряд, а `flex-wrap: wrap` переносит карточку на новую строку, когда нет места.\nУ карточки: фон, `margin`, текст по центру, тень и скруглённые углы. У картинки: ширина 70% и рамка. У h1: `font-size: 200px` — размер букв.\nНа уроке добавляли телефоны: чем больше места, тем больше их в одном ряду. `flex-direction: column` ставит их столбиком, `column-reverse` — столбиком в обратном порядке (последний телефон наверху). Размер букв можно и словом: `font-size: xx-large`.",
        "en": "In `lessonFlexBox.css` the box `#content` is flex. Its children (the `.phonecard` cards) stand in a row, and `flex-wrap: wrap` moves a card to a new line when there's no room.\nThe card gets a background, `margin`, centred text, a shadow and rounded corners. The image: 70% width and a border. h1: `font-size: 200px`, the letter size.\nIn class more phones were added: the more room, the more per row. `flex-direction: column` stacks them, `column-reverse` stacks them in reverse (the last phone on top). Letter size can be a word too: `font-size: xx-large`."
      },
      "math": [
        "#content {",
        "  display: flex;",
        "  flex-direction: row;",
        "  flex-wrap: wrap;",
        "}",
        ".phonecard {",
        "  background-color: blueviolet;",
        "  margin: 10px;",
        "  text-align: center;",
        "  box-shadow: 5px 5px 5px black;",
        "  border-radius: 5%;",
        "}",
        "img { width: 70%; border: 5px solid black; }",
        "h1 { color: white; font-size: 200px; }"
      ],
      "why": {
        "he": "גם ב־flex הכלל זהה: `display: flex` על האבא, והילדים מסתדרים. `wrap` קיים רק ב־flex; ב־grid אין `grid-wrap`, שם הירידה לשורה חדשה אוטומטית לפי מספר הטורים.",
        "ru": "И во flex правило то же: `display: flex` на родителе, дети выстраиваются. `wrap` есть только у flex; у grid нет `grid-wrap`, там переход на новую строку автоматический по числу столбцов.",
        "en": "Flex follows the same rule: `display: flex` on the parent, and the children line up. `wrap` exists only in flex; grid has no `grid-wrap`, it moves to a new row automatically by the column count."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "עבודה בכיתה: אתר אמיתי",
        "ru": "Работа в классе: настоящий сайт",
        "en": "Class work: a real site"
      },
      "text": {
        "he": "שתי אפשרויות:\n1. לבחור אתר (YouTube, Facebook, Wikipedia או אחר, לא דף החיפוש של Google) ולהעתיק את העיצוב שלו קרוב למקור ככל האפשר.\n2. או לקחת ממנו השראה ולעצב איתו את התרגיל המסכם מהשיעור הקודם, עם קובץ CSS.",
        "ru": "Два варианта:\n1. Выбрать сайт (YouTube, Facebook, Wikipedia или другой, только не страницу поиска Google) и повторить его оформление как можно ближе к оригиналу.\n2. Или взять у него идеи и оформить ими итоговое задание с прошлого урока, через CSS-файл.",
        "en": "Two options:\n1. Pick a site (YouTube, Facebook, Wikipedia or another, but not the Google search page) and copy its design as closely as possible.\n2. Or take inspiration from it and style the summary project from last lesson with a CSS file."
      },
      "why": {
        "he": "כאן מתחברים כל הנושאים של היום: קובץ CSS, class ו־id, padding ו־margin, ו־grid או flex לחלוקת הדף. מתחילים מהפירוק לחלקים, כמו בתרגילון.",
        "ru": "Здесь сходятся все темы урока: CSS-файл, class и id, padding и margin, grid или flex для разметки. Начинать с разбора на части, как в упражнении.",
        "en": "All of today meets here: a CSS file, class and id, padding and margin, and grid or flex for the layout. Start by splitting the page into parts, as in the mini-exercise."
      }
    }
  ],
  "review": [
    {
      "title": {
        "he": "HTML / CSS / JS",
        "ru": "HTML / CSS / JS",
        "en": "HTML / CSS / JS"
      },
      "text": {
        "he": "שלד / עור ומראה / מוח.",
        "ru": "Скелет / кожа и внешность / мозг.",
        "en": "Skeleton / skin and looks / brain."
      }
    },
    {
      "title": {
        "he": "חיבור קובץ CSS",
        "ru": "Подключить CSS-файл",
        "en": "Linking a CSS file"
      },
      "text": {
        "he": "ב־`<head>`: `<link rel=\"stylesheet\" href=\"design.css\">`.",
        "ru": "В `<head>`: `<link rel=\"stylesheet\" href=\"design.css\">`.",
        "en": "In `<head>`: `<link rel=\"stylesheet\" href=\"design.css\">`."
      }
    },
    {
      "title": {
        "he": "בוררים",
        "ru": "Селекторы",
        "en": "Selectors"
      },
      "text": {
        "he": "`h1` — תגית, `.one` — class, `#special` — id.",
        "ru": "`h1` — тег, `.one` — class, `#special` — id.",
        "en": "`h1` tag, `.one` class, `#special` id."
      }
    },
    {
      "title": {
        "he": "מי מנצח",
        "ru": "Кто побеждает",
        "en": "Who wins"
      },
      "text": {
        "he": "id ← class ← תגית. באותו כוח — האחרון בקובץ.",
        "ru": "id → class → тег. При равной силе — последний в файле.",
        "en": "id → class → tag. If equal, the last one in the file."
      }
    },
    {
      "title": {
        "he": "padding / margin",
        "ru": "padding / margin",
        "en": "padding / margin"
      },
      "text": {
        "he": "`padding` — בפנים, `margin` — בחוץ. `-left` וכו׳ — צד אחד.",
        "ru": "`padding` — внутри, `margin` — снаружи. `-left` и т. д. — одна сторона.",
        "en": "`padding` inside, `margin` outside. `-left` etc. means one side."
      }
    },
    {
      "title": {
        "he": "grid על האבא",
        "ru": "grid на родителе",
        "en": "grid on the parent"
      },
      "text": {
        "he": "`display: grid` + `grid-template-columns` + gap — על הארון. `grid-column` / `grid-row` — על הילד.",
        "ru": "`display: grid` + `grid-template-columns` + gap — на шкаф. `grid-column` / `grid-row` — на ребёнка.",
        "en": "`display: grid` + `grid-template-columns` + gap on the cupboard. `grid-column` / `grid-row` on the child."
      }
    },
    {
      "title": {
        "he": "row / column",
        "ru": "row / column",
        "en": "row / column"
      },
      "text": {
        "he": "row = שורה ↔ (סופרים מלמעלה), column = טור ↕ (סופרים משמאל). `auto auto auto` = 3 טורים.",
        "ru": "row = строка ↔ (считаем сверху), column = столбец ↕ (считаем слева). `auto auto auto` = 3 столбца.",
        "en": "row ↔ (count from the top), column ↕ (count from the left). `auto auto auto` = 3 columns."
      }
    },
    {
      "title": {
        "he": "span",
        "ru": "span",
        "en": "span"
      },
      "text": {
        "he": "`1 /span 2` = מתחילים ב־1 ותופסים 2. כמו colspan / rowspan.",
        "ru": "`1 /span 2` = начать с 1 и занять 2. Как colspan / rowspan.",
        "en": "`1 /span 2` = start at 1 and take 2. Like colspan / rowspan."
      }
    },
    {
      "title": {
        "he": "flex",
        "ru": "flex",
        "en": "flex"
      },
      "text": {
        "he": "`display: flex` על האבא, `flex-direction: row` — בשורה, `flex-wrap: wrap` — ירידת שורה כשאין מקום.",
        "ru": "`display: flex` на родителе, `flex-direction: row` — в ряд, `flex-wrap: wrap` — перенос, когда нет места.",
        "en": "`display: flex` on the parent, `flex-direction: row` in a row, `flex-wrap: wrap` wraps when there's no room."
      }
    }
  ],
  "tasks": {
    "groups": {
      "css": {
        "he": "מהשיעור: CSS",
        "ru": "С урока: CSS",
        "en": "From class: CSS"
      },
      "grid": {
        "he": "מהשיעור: grid ו־flex",
        "ru": "С урока: grid и flex",
        "en": "From class: grid and flex"
      }
    },
    "teacher": [
      {
        "id": "c-1",
        "group": "css",
        "label": {
          "he": "חיבור",
          "ru": "Подключение",
          "en": "Link"
        },
        "kind": "choice",
        "text": {
          "he": "איזו שורה ב־`<head>` מחברת לדף את הקובץ `design.css`?",
          "ru": "Какая строка в `<head>` подключает к странице файл `design.css`?",
          "en": "Which line in `<head>` links the file `design.css` to the page?"
        },
        "options": [
          "`<style href=\"design.css\">`",
          "`<link rel=\"stylesheet\" href=\"design.css\">`",
          "`<css src=\"design.css\">`",
          "`<a href=\"design.css\">`"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "התגית נקראת \"קישור\" באנגלית.",
            "ru": "Тег называется «связь» по-английски.",
            "en": "The tag is called \"link\"."
          },
          {
            "he": "צריך גם להגיד מה זה: `rel=\"stylesheet\"`.",
            "ru": "Нужно ещё сказать, что это: `rel=\"stylesheet\"`.",
            "en": "You also say what it is: `rel=\"stylesheet\"`."
          }
        ],
        "solution": [
          {
            "he": "`<link>` ב־head, עם `rel=\"stylesheet\"` ושם הקובץ ב־`href`.",
            "ru": "`<link>` в head, с `rel=\"stylesheet\"` и именем файла в `href`.",
            "en": "`<link>` in the head, with `rel=\"stylesheet\"` and the file name in `href`."
          },
          "<link rel=\"stylesheet\" href=\"design.css\">"
        ]
      },
      {
        "id": "c-2",
        "group": "css",
        "label": {
          "he": "בורר class",
          "ru": "Селектор класса",
          "en": "Class selector"
        },
        "kind": "choice",
        "text": {
          "he": "ב־HTML כתוב `<h1 class=\"one\">`. איך כותבים ב־CSS כלל לכל מי שיש לו את ה־class הזה?",
          "ru": "В HTML написано `<h1 class=\"one\">`. Как в CSS написать правило для всех, у кого этот класс?",
          "en": "The HTML says `<h1 class=\"one\">`. How do you write a CSS rule for everyone with this class?"
        },
        "options": [
          "`one { }`",
          "`#one { }`",
          "`.one { }`",
          "`class=one { }`"
        ],
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "class — עם נקודה, id — עם סולמית.",
            "ru": "class — с точкой, id — с решёткой.",
            "en": "class has a dot, id has a hash."
          }
        ],
        "solution": [
          {
            "he": "נקודה לפני השם = class.",
            "ru": "Точка перед именем = class.",
            "en": "A dot before the name = class."
          },
          ".one { color: lightcyan; }"
        ]
      },
      {
        "id": "c-3",
        "group": "css",
        "label": {
          "he": "מי מנצח?",
          "ru": "Кто победит?",
          "en": "Who wins?"
        },
        "kind": "choice",
        "text": {
          "he": "כמו בשיעור: `h1 { color: beige; }`, `.one { color: lightcyan; }`, `#special { color: ghostwhite; }`. באיזה צבע יהיו האותיות של `<h1 class=\"one\" id=\"special\">`?",
          "ru": "Как на уроке: `h1 { color: beige; }`, `.one { color: lightcyan; }`, `#special { color: ghostwhite; }`. Какого цвета будут буквы у `<h1 class=\"one\" id=\"special\">`?",
          "en": "As in class: `h1 { color: beige; }`, `.one { color: lightcyan; }`, `#special { color: ghostwhite; }`. What colour are the letters of `<h1 class=\"one\" id=\"special\">`?"
        },
        "options": [
          "beige",
          "lightcyan",
          "ghostwhite"
        ],
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "הכלל המדויק ביותר מנצח.",
            "ru": "Побеждает самое точное правило.",
            "en": "The most precise rule wins."
          },
          {
            "he": "id חזק מ־class, ו־class חזק מתגית.",
            "ru": "id сильнее class, а class сильнее тега.",
            "en": "id beats class, and class beats a tag."
          }
        ],
        "solution": [
          {
            "he": "יש לה id, ו־`#special` חזק מכולם ← ghostwhite.",
            "ru": "У него есть id, а `#special` сильнее всех → ghostwhite.",
            "en": "It has an id, and `#special` beats them all → ghostwhite."
          }
        ]
      },
      {
        "id": "c-4",
        "group": "css",
        "label": {
          "he": "רוחב",
          "ru": "Ширина",
          "en": "Width"
        },
        "kind": "choice",
        "text": {
          "he": "באותו קובץ: `h1 { width: 15rem; }`, `.one { width: 18rem; }`, ול־`#special` אין width. מה הרוחב של `<h1 class=\"one\" id=\"special\">`?",
          "ru": "В том же файле: `h1 { width: 15rem; }`, `.one { width: 18rem; }`, а у `#special` нет width. Какая ширина у `<h1 class=\"one\" id=\"special\">`?",
          "en": "Same file: `h1 { width: 15rem; }`, `.one { width: 18rem; }`, and `#special` has no width. What is the width of `<h1 class=\"one\" id=\"special\">`?"
        },
        "options": [
          "15rem",
          "18rem",
          {
            "he": "בלי רוחב, כי ל־#special אין width",
            "ru": "Без ширины, потому что у #special нет width",
            "en": "No width, because #special has none"
          }
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "כל תכונה נבדקת לחוד.",
            "ru": "Каждое свойство решается отдельно.",
            "en": "Each property is decided separately."
          },
          {
            "he": "מי הכי חזק מבין אלה שכן נותנים width?",
            "ru": "Кто сильнее всех среди тех, кто ДАЁТ width?",
            "en": "Who is strongest among those that DO set width?"
          }
        ],
        "solution": [
          {
            "he": "`#special` לא נוגע ב־width. מבין `h1` ו־`.one` — class חזק יותר ← 18rem.",
            "ru": "`#special` не трогает width. Из `h1` и `.one` сильнее класс → 18rem.",
            "en": "`#special` doesn't touch width. Between `h1` and `.one` the class is stronger → 18rem."
          }
        ]
      },
      {
        "id": "c-5",
        "group": "css",
        "label": {
          "he": "להזיז קופסה",
          "ru": "Подвинуть коробку",
          "en": "Move a box"
        },
        "kind": "choice",
        "text": {
          "he": "רוצים שהקופסה עצמה תתרחק 30px מהקופסה שמשמאלה. מה כותבים?",
          "ru": "Нужно, чтобы сама коробка отодвинулась на 30px от коробки слева. Что пишем?",
          "en": "You want the box itself to move 30px away from the box on its left. What do you write?"
        },
        "options": [
          "`padding-left: 30px;`",
          "`margin-left: 30px;`",
          "`width-left: 30px;`",
          "`border-left: 30px;`"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "padding בפנים, margin בחוץ.",
            "ru": "padding внутри, margin снаружи.",
            "en": "padding inside, margin outside."
          }
        ],
        "solution": [
          {
            "he": "`margin-left` — ריווח מבחוץ, משמאל. `width-left` לא קיים בכלל.",
            "ru": "`margin-left` — отступ снаружи слева. `width-left` вообще не существует.",
            "en": "`margin-left` is outside space on the left. `width-left` doesn't exist at all."
          },
          ".box { margin-left: 30px; }"
        ]
      },
      {
        "id": "g-1",
        "group": "grid",
        "label": {
          "he": "איפה grid?",
          "ru": "Где grid?",
          "en": "Where grid?"
        },
        "kind": "choice",
        "text": {
          "he": "`<div class=\"page\">` ובתוכו 4 קופסאות. על מי כותבים `display: grid` כדי שהן יעמדו ברשת?",
          "ru": "`<div class=\"page\">`, а внутри 4 коробки. Кому пишем `display: grid`, чтобы они встали сеткой?",
          "en": "`<div class=\"page\">` with 4 boxes inside. Which gets `display: grid` so they line up in a grid?"
        },
        "options": [
          {
            "he": "על `.page` (האבא)",
            "ru": "На `.page` (родителя)",
            "en": "On `.page` (the parent)"
          },
          {
            "he": "על כל אחת מ־4 הקופסאות",
            "ru": "На каждую из 4 коробок",
            "en": "On each of the 4 boxes"
          },
          {
            "he": "על `body`",
            "ru": "На `body`",
            "en": "On `body`"
          }
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "`display: grid` מסדר את הילדים של האלמנט.",
            "ru": "`display: grid` раскладывает ДЕТЕЙ элемента.",
            "en": "`display: grid` arranges an element's CHILDREN."
          }
        ],
        "solution": [
          {
            "he": "הארון הוא `.page`, הקופסאות הן הילדים שלו.",
            "ru": "Шкаф — это `.page`, коробки — его дети.",
            "en": "The cupboard is `.page`; the boxes are its children."
          },
          ".page { display: grid; grid-template-columns: auto auto; }"
        ]
      },
      {
        "id": "g-2",
        "group": "grid",
        "label": {
          "he": "כמה טורים?",
          "ru": "Сколько столбцов?",
          "en": "How many columns?"
        },
        "kind": "choice",
        "text": {
          "he": "`grid-template-columns: auto auto auto auto;` ובתוך האבא 4 ילדים. מה יוצא?",
          "ru": "`grid-template-columns: auto auto auto auto;`, внутри родителя 4 ребёнка. Что получится?",
          "en": "`grid-template-columns: auto auto auto auto;` with 4 children inside the parent. What do you get?"
        },
        "options": [
          {
            "he": "4 טורים ו־4 שורות",
            "ru": "4 столбца и 4 строки",
            "en": "4 columns and 4 rows"
          },
          {
            "he": "4 טורים ושורה אחת: כולם זה לצד זה",
            "ru": "4 столбца и 1 строка: все рядом",
            "en": "4 columns and 1 row: all side by side"
          },
          {
            "he": "טור אחד ו־4 שורות: כולם זה מתחת לזה",
            "ru": "1 столбец и 4 строки: все друг под другом",
            "en": "1 column and 4 rows: all stacked"
          }
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "`grid-template-columns` קובע רק טורים.",
            "ru": "`grid-template-columns` задаёт только столбцы.",
            "en": "`grid-template-columns` sets columns only."
          },
          {
            "he": "שורות הדפדפן מוסיף רק כשהשורה מתמלאת.",
            "ru": "Строки браузер добавляет, только когда строка заполнилась.",
            "en": "The browser adds rows only when a row fills up."
          }
        ],
        "solution": [
          {
            "he": "4 מילים = 4 טורים. 4 ילדים ממלאים שורה אחת.",
            "ru": "4 слова = 4 столбца. 4 ребёнка заполняют одну строку.",
            "en": "4 words = 4 columns. 4 children fill one row."
          }
        ]
      },
      {
        "id": "g-3",
        "group": "grid",
        "label": "#batman",
        "kind": "choice",
        "text": {
          "he": "`#batman { grid-column: 1 /span 2; }` — על אילו טורים התמונה עומדת?",
          "ru": "`#batman { grid-column: 1 /span 2; }` — на каких столбцах стоит картинка?",
          "en": "`#batman { grid-column: 1 /span 2; }` — which columns does the image stand on?"
        },
        "options": [
          {
            "he": "רק טור 2",
            "ru": "Только столбец 2",
            "en": "Only column 2"
          },
          {
            "he": "טורים 1 ו־2",
            "ru": "Столбцы 1 и 2",
            "en": "Columns 1 and 2"
          },
          {
            "he": "טורים 1, 2 ו־3",
            "ru": "Столбцы 1, 2 и 3",
            "en": "Columns 1, 2 and 3"
          }
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "מתחילים ב־1, ו־span 2 = תופסים 2 טורים בסך הכול.",
            "ru": "Начинаем с 1, а span 2 = занять всего 2 столбца.",
            "en": "Start at 1; span 2 = take 2 columns in total."
          }
        ],
        "solution": [
          {
            "he": "טור 1 ועוד אחד ← טורים 1 ו־2. כמו `colspan=\"2\"`.",
            "ru": "Столбец 1 и ещё один → столбцы 1 и 2. Как `colspan=\"2\"`.",
            "en": "Column 1 plus one more → columns 1 and 2. Like `colspan=\"2\"`."
          }
        ]
      },
      {
        "id": "g-4",
        "group": "grid",
        "label": "#special",
        "kind": "choice",
        "text": {
          "he": "`#special { grid-row: 3 /span 9; }` — באילו שורות האלמנט נמצא?",
          "ru": "`#special { grid-row: 3 /span 9; }` — в каких строках находится элемент?",
          "en": "`#special { grid-row: 3 /span 9; }` — which rows is the element in?"
        },
        "options": [
          {
            "he": "שורות 3 עד 9",
            "ru": "Строки с 3 по 9",
            "en": "Rows 3 to 9"
          },
          {
            "he": "שורות 3 עד 11",
            "ru": "Строки с 3 по 11",
            "en": "Rows 3 to 11"
          },
          {
            "he": "שורות 3 עד 12",
            "ru": "Строки с 3 по 12",
            "en": "Rows 3 to 12"
          }
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "span 9 = 9 שורות, כולל שורה 3.",
            "ru": "span 9 = 9 строк, включая строку 3.",
            "en": "span 9 = 9 rows, including row 3."
          },
          {
            "he": "ספרו: 3, 4, 5, 6, 7, 8, 9, 10, …",
            "ru": "Посчитай: 3, 4, 5, 6, 7, 8, 9, 10, …",
            "en": "Count: 3, 4, 5, 6, 7, 8, 9, 10, …"
          }
        ],
        "solution": [
          {
            "he": "3, 4, 5, 6, 7, 8, 9, 10, 11 — זה 9 שורות.",
            "ru": "3, 4, 5, 6, 7, 8, 9, 10, 11 — это 9 строк.",
            "en": "3, 4, 5, 6, 7, 8, 9, 10, 11 — that's 9 rows."
          }
        ]
      },
      {
        "id": "g-5",
        "group": "grid",
        "label": "wrap",
        "kind": "choice",
        "text": {
          "he": "`#content { display: flex; flex-direction: row; flex-wrap: wrap; }` — מה עושה `flex-wrap: wrap`?",
          "ru": "`#content { display: flex; flex-direction: row; flex-wrap: wrap; }` — что делает `flex-wrap: wrap`?",
          "en": "`#content { display: flex; flex-direction: row; flex-wrap: wrap; }` — what does `flex-wrap: wrap` do?"
        },
        "options": [
          {
            "he": "עוטף כל כרטיס במסגרת",
            "ru": "Обводит каждую карточку рамкой",
            "en": "Wraps each card in a border"
          },
          {
            "he": "מוריד כרטיס לשורה חדשה כשאין מקום",
            "ru": "Переносит карточку на новую строку, когда нет места",
            "en": "Moves a card to a new line when there's no room"
          },
          {
            "he": "מסדר את הכרטיסים מלמעלה למטה",
            "ru": "Ставит карточки сверху вниз",
            "en": "Stacks the cards top to bottom"
          }
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "בלי wrap כל הכרטיסים נדחסים בשורה אחת.",
            "ru": "Без wrap все карточки сжимаются в одну строку.",
            "en": "Without wrap all the cards squeeze into one line."
          }
        ],
        "solution": [
          {
            "he": "wrap = ירידת שורה, כמו מילים בטקסט.",
            "ru": "wrap = перенос строки, как слова в тексте.",
            "en": "wrap = line wrapping, like words in text."
          }
        ]
      }
    ],
    "ai": [
      {
        "id": "ai-1",
        "level": 1,
        "label": {
          "he": "רווח בין שורות",
          "ru": "Промежуток строк",
          "en": "Row gap"
        },
        "kind": "text",
        "text": {
          "he": "איזו תכונה, כמו בשיעור, נותנת רווח בין השורות של grid? (שם התכונה)",
          "ru": "Какое свойство, как на уроке, даёт промежуток между строками grid? (имя свойства)",
          "en": "Which property, as in class, puts space between grid rows? (property name)"
        },
        "answer": {
          "accept": [
            "grid-row-gap",
            "grid-row-gap:",
            "row-gap"
          ]
        },
        "hints": [
          {
            "he": "grid + row + רווח (gap).",
            "ru": "grid + row + промежуток (gap).",
            "en": "grid + row + gap."
          }
        ],
        "solution": [
          {
            "he": "`grid-row-gap`, ולטורים `grid-column-gap`.",
            "ru": "`grid-row-gap`, а для столбцов `grid-column-gap`.",
            "en": "`grid-row-gap`, and `grid-column-gap` for columns."
          },
          ".page { grid-row-gap: 2rem; }"
        ]
      },
      {
        "id": "ai-2",
        "level": 1,
        "label": {
          "he": "בורר id",
          "ru": "Селектор id",
          "en": "id selector"
        },
        "kind": "text",
        "text": {
          "he": "איזה סימן כותבים ב־CSS לפני שם של id? (סימן אחד)",
          "ru": "Какой знак пишут в CSS перед именем id? (один знак)",
          "en": "Which symbol goes before an id name in CSS? (one symbol)"
        },
        "answer": {
          "accept": [
            "#"
          ]
        },
        "hints": [
          {
            "he": "כמו ב־`#batman`.",
            "ru": "Как в `#batman`.",
            "en": "Like in `#batman`."
          }
        ],
        "solution": [
          {
            "he": "`#` — סולמית.",
            "ru": "`#` — решётка.",
            "en": "`#`, the hash."
          },
          "#batman { width: 100%; }"
        ]
      },
      {
        "id": "ai-3",
        "level": 2,
        "label": {
          "he": "כמה שורות?",
          "ru": "Сколько строк?",
          "en": "How many rows?"
        },
        "kind": "choice",
        "text": {
          "he": "`.page { display: grid; grid-template-columns: auto auto auto; }` ובתוכו 7 ילדים בלי `grid-row` ו־`grid-column`. כמה שורות יהיו?",
          "ru": "`.page { display: grid; grid-template-columns: auto auto auto; }`, внутри 7 детей без `grid-row` и `grid-column`. Сколько будет строк?",
          "en": "`.page { display: grid; grid-template-columns: auto auto auto; }` with 7 children and no `grid-row` or `grid-column`. How many rows?"
        },
        "options": [
          "2",
          "3",
          "7"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "3 ילדים בכל שורה.",
            "ru": "По 3 ребёнка в строке.",
            "en": "3 children per row."
          }
        ],
        "solution": [
          {
            "he": "שורה 1: 3 ילדים. שורה 2: 3 ילדים. שורה 3: הילד ה־7 לבד.",
            "ru": "Строка 1: 3 ребёнка. Строка 2: 3 ребёнка. Строка 3: седьмой один.",
            "en": "Row 1: 3 children. Row 2: 3 children. Row 3: the 7th alone."
          }
        ]
      },
      {
        "id": "ai-4",
        "level": 2,
        "label": {
          "he": "איפה השלישי?",
          "ru": "Где третий?",
          "en": "Where's the third?"
        },
        "kind": "choice",
        "text": {
          "he": "`.page` עם `grid-template-columns: auto auto auto auto;` ו־4 ילדים: `.page1`, `.page2`, `.page3`, `.box`. כתוב רק `.page1 { grid-column: 3; }`. איפה יעמוד `.page3`?",
          "ru": "`.page` с `grid-template-columns: auto auto auto auto;` и 4 ребёнка: `.page1`, `.page2`, `.page3`, `.box`. Написано только `.page1 { grid-column: 3; }`. Где встанет `.page3`?",
          "en": "`.page` with `grid-template-columns: auto auto auto auto;` and 4 children: `.page1`, `.page2`, `.page3`, `.box`. Only `.page1 { grid-column: 3; }` is written. Where does `.page3` go?"
        },
        "options": [
          {
            "he": "שורה 1, טור 1",
            "ru": "Строка 1, столбец 1",
            "en": "Row 1, column 1"
          },
          {
            "he": "שורה 1, טור 4",
            "ru": "Строка 1, столбец 4",
            "en": "Row 1, column 4"
          },
          {
            "he": "שורה 2, טור 1",
            "ru": "Строка 2, столбец 1",
            "en": "Row 2, column 1"
          }
        ],
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "הדפדפן מסדר לפי הסדר ולא חוזר אחורה.",
            "ru": "Браузер ставит по порядку и назад не возвращается.",
            "en": "The browser places in order and never goes back."
          },
          {
            "he": "`.page2` תופס את המשבצת הפנויה אחרי `.page1`.",
            "ru": "`.page2` занимает свободную клетку после `.page1`.",
            "en": "`.page2` takes the free cell after `.page1`."
          }
        ],
        "solution": [
          {
            "he": "`.page1` ← שורה 1, טור 3.",
            "ru": "`.page1` → строка 1, столбец 3.",
            "en": "`.page1` → row 1, column 3."
          },
          {
            "he": "`.page2` ← שורה 1, טור 4.",
            "ru": "`.page2` → строка 1, столбец 4.",
            "en": "`.page2` → row 1, column 4."
          },
          {
            "he": "השורה נגמרה ← `.page3` בשורה 2, טור 1 (בדקנו בדפדפן).",
            "ru": "Строка кончилась → `.page3` в строке 2, столбец 1 (проверено в браузере).",
            "en": "The row is full → `.page3` in row 2, column 1 (checked in a browser)."
          }
        ]
      },
      {
        "id": "ai-5",
        "level": 3,
        "label": {
          "he": "שלושה כללים",
          "ru": "Три правила",
          "en": "Three rules"
        },
        "kind": "choice",
        "text": {
          "he": "בקובץ CSS בסדר הזה: `#main { color: red; }`, `.card { color: blue; }`, `div { color: green; }`. באיזה צבע יהיה `<div class=\"card\" id=\"main\">`?",
          "ru": "В CSS-файле в таком порядке: `#main { color: red; }`, `.card { color: blue; }`, `div { color: green; }`. Какого цвета будет `<div class=\"card\" id=\"main\">`?",
          "en": "A CSS file in this order: `#main { color: red; }`, `.card { color: blue; }`, `div { color: green; }`. What colour is `<div class=\"card\" id=\"main\">`?"
        },
        "options": [
          "red",
          "blue",
          "green"
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "\"האחרון מנצח\" עובד רק בין כללים באותו כוח.",
            "ru": "«Последний побеждает» работает только между правилами одной силы.",
            "en": "\"The last one wins\" only applies between equally strong rules."
          }
        ],
        "solution": [
          {
            "he": "id חזק מ־class ומתגית, גם אם הוא כתוב ראשון ← red.",
            "ru": "id сильнее класса и тега, даже если написан первым → red.",
            "en": "id beats class and tag even when written first → red."
          }
        ]
      },
      {
        "id": "ai-6",
        "level": 3,
        "label": {
          "he": "על כל השורה",
          "ru": "На всю строку",
          "en": "The whole row"
        },
        "kind": "choice",
        "text": {
          "he": "ב־`.page` יש 3 טורים. רוצים ש־`.box` יתפוס את כל רוחב השורה. מה כותבים ב־`.box`?",
          "ru": "В `.page` 3 столбца. Нужно, чтобы `.box` занял всю ширину строки. Что пишем в `.box`?",
          "en": "`.page` has 3 columns. You want `.box` to take the full row width. What goes in `.box`?"
        },
        "options": [
          "`grid-column: 3;`",
          "`grid-column: 1 /span 3;`",
          "`grid-row: 1 /span 3;`",
          "`width: 3;`"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "רוחב = טורים = column.",
            "ru": "Ширина = столбцы = column.",
            "en": "Width = columns = column."
          },
          {
            "he": "מתחילים בטור 1 ומתפרשים על כל ה־3.",
            "ru": "Начинаем со столбца 1 и растягиваемся на все 3.",
            "en": "Start at column 1 and span all 3."
          }
        ],
        "solution": [
          {
            "he": "`grid-column: 1 /span 3` = טורים 1, 2, 3. `grid-row` היה מותח למטה, לא לרוחב.",
            "ru": "`grid-column: 1 /span 3` = столбцы 1, 2, 3. `grid-row` растянул бы вниз, а не в ширину.",
            "en": "`grid-column: 1 /span 3` = columns 1, 2, 3. `grid-row` would stretch downward, not across."
          },
          ".box { grid-column: 1 /span 3; }"
        ]
      }
    ]
  }
};

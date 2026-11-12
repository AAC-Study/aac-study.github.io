/* Lesson ai-2026-11-09 (Intro to AI). Format: see the comment at the top of data/lessons/math-2026-11-01.js.
   Every to_snake_case result was checked by running the Java code; queue answers and counts are checked in the generator. */
window.LESSONS = window.LESSONS || {};
window.LESSONS["ai-2026-11-09"] = {
  "id": "ai-2026-11-09",
  "subject": "ai",
  "date": "2026-11-09",
  "title": {
    "he": "פרומפט לקוד, פסאודו־קוד, FIFO ו־LIFO",
    "ru": "Промпт для кода, псевдокод, FIFO и LIFO",
    "en": "A prompt for code, pseudocode, FIFO and LIFO"
  },
  "summary": {
    "he": "סימנייה RTL, חזרה על ארבעת החוקים (RTCC), תרגיל snake_case: פרומפט שמחזיר רק קוד ובדיקה על 3 טקסטים. פסאודו־קוד: ספירת מספרים דו־ספרתיים ותור בבנק, המושגים FIFO ו־LIFO, ומשימה בחדרים: השכרת רכב.",
    "ru": "Закладка RTL, повтор четырёх правил (RTCC), упражнение snake_case: промпт, который возвращает только код, и проверка на 3 текстах. Псевдокод: подсчёт двузначных чисел и очередь в банке, понятия FIFO и LIFO, и задание в комнатах: аренда машин.",
    "en": "An RTL bookmark, a recap of the four rules (RTCC), the snake_case exercise: a prompt that returns only code and a test on 3 texts. Pseudocode: counting two-digit numbers and a bank queue, the concepts FIFO and LIFO, and a breakout-room task: car rental."
  },
  "timeline": [
    {
      "kind": "tip",
      "title": {
        "he": "סימנייה RTL לצ'אט",
        "ru": "Закладка RTL для чата",
        "en": "An RTL bookmark for the chat"
      },
      "text": {
        "he": "בתחילת השיעור המרצה שאלה את Gemini: \"כתוב תכנית בפייתון שקולטת בצורה רנדומלית 20 מספרים ומדפיסה את המספר הגדול ביותר. טווח המספרים בין 100 ל־999\". התשובה בעברית עם קוד באנגלית יצאה מבולגנת: חלק מימין, חלק משמאל.\nהפתרון שהראתה: סימנייה (bookmark) בדפדפן, שבמקום כתובת יש בה סקריפט קצר ב־JavaScript. לוחצים עליה — כל הדף מתהפך מימין לשמאל, לוחצים שוב — חוזר. הסקריפט מהקובץ שלה:",
        "ru": "В начале урока преподавательница спросила Gemini: «Напиши программу на Python, которая случайно берёт 20 чисел и печатает самое большое. Диапазон чисел от 100 до 999». Ответ на иврите с кодом на английском вышел перепутанным: часть справа, часть слева.\nРешение, которое она показала: закладка (bookmark) в браузере, где вместо адреса — короткий скрипт на JavaScript. Нажимаешь на неё — вся страница переворачивается справа налево, нажимаешь снова — обратно. Скрипт из её файла:",
        "en": "At the start of the lesson the teacher asked Gemini: \"Write a Python program that randomly takes 20 numbers and prints the largest one. The range is 100 to 999\". The answer, in Hebrew with English code, came out jumbled: some from the right, some from the left.\nThe fix she showed: a browser bookmark that holds a short JavaScript script instead of an address. Click it — the whole page flips to right-to-left; click again — it flips back. The script from her file:"
      },
      "math": [
        "javascript: (function() { var elements = document.getElementsByTagName(\"*\"); for (e of elements) { if (!e.style) continue; if (!e.style.direction || e.style.direction === 'ltr' ) e.style.direction = 'rtl'; else e.style.direction = 'ltr'; } })()"
      ],
      "why": {
        "he": "איך שומרים? מוסיפים סימנייה חדשה (למשל לדף כלשהו), עורכים אותה, ובשדה הכתובת מדביקים את כל הסקריפט. למה זה עובד? הסקריפט עובר על כל האלמנטים בדף ומחליף להם את `direction` בין `ltr` ל־`rtl`. ועוד דבר מהתשובה של Gemini: הוא השתמש ב־`max()`, והוסיף שאם בקורס אסור פונקציה מוכנה, מחפשים את המקסימום בלולאה ידנית — בדיוק כמו באלגוריתמיקה.",
        "ru": "Как сохранить? Добавляешь новую закладку (например, на любую страницу), редактируешь её и в поле адреса вставляешь весь скрипт. Почему это работает? Скрипт проходит по всем элементам страницы и меняет им `direction` между `ltr` и `rtl`. И ещё из ответа Gemini: он использовал `max()` и добавил, что если на курсе готовую функцию нельзя, максимум ищут вручную в цикле — ровно как на алгоритмике.",
        "en": "How to save it? Add a new bookmark (to any page), edit it, and paste the whole script into the address field. Why does it work? The script goes over every element on the page and switches its `direction` between `ltr` and `rtl`. One more thing from Gemini's answer: it used `max()`, and added that if a ready-made function is not allowed in the course, you find the maximum by hand in a loop — just like in algorithms."
      }
    },
    {
      "kind": "talk",
      "title": {
        "he": "חזרה: RTC-C בארבע החלטות",
        "ru": "Повтор: RTC-C в четырёх решениях",
        "en": "Recap: RTC-C in four decisions"
      },
      "text": {
        "he": "המשך מהשבוע שעבר (שקף \"RTC-C: ממסגור הבקשה לפרומפט מדויק\"): ארבע החלטות פשוטות שמקטינות עמימות:\n• Role — מי המודל צריך להיות? (מומחיות, נקודת מבט, רמת ניסיון)\n• Task — מה בדיוק צריך לבצע? (פעולה ברורה, תוצר, קריטריון הצלחה)\n• Context — מה חשוב לדעת מראש? (קהל יעד, מטרה, נתונים)\n• Constraints — באילו גבולות הפלט עומד? (שפה, אורך, טון, פורמט, מה אסור להמציא)\nהדוגמה מהשקף: \"פעל כמורה מנוסה לשפת Java\" · \"הסבר המרה מבסיס 2 לבסיס 10 ב־5 שלבים\" · \"לסטודנטים שלומדים Java שבועיים\" · \"בעברית, עד 120 מילים, דוגמה אחת\".\nה־flow: שליחה ← בדיקה מול הדרישה ← זיהוי הרכיב החלש ← חידוד ושליחה מחדש.",
        "ru": "Продолжение прошлой недели (слайд «RTC-C: от формулировки запроса к точному промпту»): четыре простых решения, которые уменьшают неясность:\n• Role — кем должна быть модель? (экспертиза, точка зрения, уровень опыта)\n• Task — что именно сделать? (ясное действие, результат, критерий успеха)\n• Context — что важно знать заранее? (целевая аудитория, цель, данные)\n• Constraints — в каких рамках ответ? (язык, длина, тон, формат, что нельзя выдумывать)\nПример со слайда: «Действуй как опытный преподаватель Java» · «Объясни перевод из системы 2 в систему 10 за 5 шагов» · «Для студентов, которые учат Java две недели» · «На иврите, до 120 слов, один пример».\nFlow: отправка → проверка по требованию → находим слабую часть → уточняем и отправляем снова.",
        "en": "Continuing from last week (slide \"RTC-C: from framing the request to a precise prompt\"): four simple decisions that reduce ambiguity:\n• Role — who should the model be? (expertise, point of view, experience level)\n• Task — what exactly to do? (a clear action, an output, a success criterion)\n• Context — what is important to know in advance? (audience, goal, data)\n• Constraints — what limits the output? (language, length, tone, format, what must not be made up)\nThe slide example: \"Act as an experienced Java teacher\" · \"Explain converting base 2 to base 10 in 5 steps\" · \"For students who have learned Java for two weeks\" · \"In Hebrew, up to 120 words, one example\".\nThe flow: send → check against the requirement → find the weak component → refine and resend."
      },
      "why": {
        "he": "למה ארבע החלטות? כל אחת סוגרת ניחוש אחר של המודל: מי לדבר (רמה וסגנון), מה לעשות, בשביל מי, ואיך התשובה צריכה להיראות. כשחלק חסר, המודל ממלא אותו ב\"ממוצע\", והתשובה כללית מדי. ולמה \"מחזקים את הרכיב שחסר — ולא מתחילים הכול מחדש\"? כי ככה רואים מה בדיוק שיפר את התשובה.",
        "ru": "Почему четыре решения? Каждое закрывает отдельную догадку модели: кем говорить (уровень и стиль), что делать, для кого и как должен выглядеть ответ. Если части нет, модель заполняет её «средним», и ответ выходит слишком общим. А почему «усиливаем недостающую часть, а не начинаем всё заново»? Так видно, что именно улучшило ответ.",
        "en": "Why four decisions? Each closes a different guess of the model: who to speak as (level and style), what to do, for whom, and what the answer should look like. When a part is missing, the model fills it with an \"average\", and the answer is too general. And why \"strengthen the missing component instead of starting over\"? That way you see exactly what improved the answer."
      }
    },
    {
      "kind": "talk",
      "title": {
        "he": "מה זה snake_case",
        "ru": "Что такое snake_case",
        "en": "What snake_case is"
      },
      "text": {
        "he": "בשם של משתנה אסור רווח: `user profile data` זה לא שם אחד. לכן מחברים את המילים. ב־snake_case מחברים בקו תחתון, וכל האותיות קטנות:\n`User Profile Data` ← `user_profile_data`\nהשם בא מ\"נחש\": המילים זוחלות על הקו התחתון. בשיעור המרצה הקלידה דוגמה למשתנה כזה: `int grade_average`.",
        "ru": "В имени переменной нельзя пробел: `user profile data` — это не одно имя. Поэтому слова соединяют. В snake_case соединяют нижним подчёркиванием, и все буквы маленькие:\n`User Profile Data` → `user_profile_data`\nНазвание от «змеи»: слова ползут по нижней черте. На уроке преподавательница набрала пример такой переменной: `int grade_average`.",
        "en": "A variable name cannot contain a space: `user profile data` is not one name. So the words are joined. In snake_case they are joined with an underscore, and all letters are lowercase:\n`User Profile Data` → `user_profile_data`\nThe name comes from \"snake\": the words crawl along the bottom line. In class the teacher typed an example of such a variable: `int grade_average`."
      },
      "why": {
        "he": "למה צריך כמה סגנונות? כל שפה רגילה לסגנון שלה. ב־Java נהוג camelCase למשתנים (`userProfileData`, כמו שכותבים באלגוריתמיקה), וב־Python וב־SQL נהוג snake_case. המחשב מבין את שניהם, אבל כשכולם בצוות כותבים באותו סגנון, קל לקרוא קוד של אחרים. (camelCase לא היה בשיעור הזה, זה להשוואה.)",
        "ru": "Зачем несколько стилей? Каждый язык привык к своему. В Java для переменных принят camelCase (`userProfileData`, как пишем на алгоритмике), а в Python и SQL — snake_case. Компьютер понимает оба, но когда вся команда пишет в одном стиле, чужой код легко читать. (camelCase на этом уроке не было, это для сравнения.)",
        "en": "Why several styles? Each language is used to its own. Java uses camelCase for variables (`userProfileData`, as we write in algorithms), while Python and SQL use snake_case. The computer understands both, but when the whole team writes in one style, other people's code is easy to read. (camelCase was not in this lesson; it is here for comparison.)"
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "תרגיל: הפרומפט מהשקף",
        "ru": "Упражнение: промпт со слайда",
        "en": "Exercise: the prompt from the slide"
      },
      "text": {
        "he": "הפרומפט שעל השקף, כמו שהוא. שימו לב שהוא בנוי לפי ארבעת החוקים: תפקיד, משימה, מגבלות ודוגמאות.",
        "ru": "Промпт со слайда как есть. Обрати внимание: он построен по четырём правилам — роль, задача, ограничения и примеры.",
        "en": "The prompt on the slide, as is. Notice it follows the four rules: role, task, constraints and examples."
      },
      "math": [
        "Role: Java Developer",
        "Task: Write a function to_snake_case(text: str) -> str",
        "Constraints:",
        "- Replace spaces, hyphens, and dots with a single underscore.",
        "- Convert all characters to lowercase.",
        "- Return ONLY the executable Java code block. No explanations.",
        "Examples:",
        "- \"User Profile Data\" -> \"user_profile_data\"",
        "- \"get-user-id\" -> \"get_user_id\""
      ],
      "why": {
        "he": "למה המגבלה \n```\nReturn ONLY the executable Java code block\n```\n בלי זה המודל מוסיף \"בטח! הנה הקוד…\" והסברים ארוכים. כשצריך רק להעתיק ולהריץ, הטקסט המיותר מפריע. ולמה `text: str -> str`? זו כתיבה בסגנון Python שאומרת \"מקבלת מחרוזת ומחזירה מחרוזת\". ב־Java זה יהיה `String to_snake_case(String text)`.",
        "ru": "Зачем ограничение `Return ONLY the executable Java code block`? Без него модель добавляет «Конечно! Вот код…» и длинные объяснения. Когда нужно только скопировать и запустить, лишний текст мешает. А что такое `text: str -> str`? Это запись в стиле Python: «принимает строку и возвращает строку». В Java это будет `String to_snake_case(String text)`.",
        "en": "Why the constraint `Return ONLY the executable Java code block`? Without it the model adds \"Sure! Here is the code…\" and long explanations. When you only need to copy and run, the extra text gets in the way. And what is `text: str -> str`? It is Python-style notation for \"takes a string and returns a string\". In Java it is `String to_snake_case(String text)`."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "הכללים לתרגיל (צד ימין של השקף)",
        "ru": "Правила упражнения (правая часть слайда)",
        "en": "The exercise rules (right side of the slide)"
      },
      "text": {
        "he": "1. מדביקים את הפרומפט ב־ChatGPT או ב־Claude (Gemini פחות טוב בכתיבת קוד, לפי המרצה).\n2. ה־AI חייב להחזיר רק בלוק קוד, בלי טקסט פתיחה או סיום.\n3. בפרומפט יש לפחות שתי דוגמאות של קלט ← פלט.\n4. בודקים את הקוד ב־VS Code על 3 טקסטים שונים.\nעבדנו על זה בחדרים ב־Zoom.",
        "ru": "1. Вставляем промпт в ChatGPT или Claude (Gemini, по словам преподавательницы, хуже пишет код).\n2. ИИ должен вернуть только блок кода, без вступления и окончания.\n3. В промпте не меньше двух примеров «ввод → вывод».\n4. Проверяем код в VS Code на 3 разных текстах.\nРаботали над этим в комнатах Zoom.",
        "en": "1. Paste the prompt into ChatGPT or Claude (Gemini is weaker at writing code, according to the teacher).\n2. The AI must return only a code block, with no opening or closing text.\n3. The prompt contains at least two input → output examples.\n4. Test the code in VS Code on 3 different texts.\nWe worked on it in Zoom breakout rooms."
      },
      "why": {
        "he": "למה דוגמאות בתוך הפרומפט? דוגמה אחת שווה פסקה של הסבר: המודל רואה בדיוק מה נכנס ומה צריך לצאת, ופחות מנחש. ולמה 3 טקסטים משלכם? הדוגמאות מהשקף כבר \"ידועות\" למודל — טקסט חדש בודק שהקוד באמת עובד ולא רק מתאים לדוגמאות.",
        "ru": "Зачем примеры внутри промпта? Один пример стоит абзаца объяснений: модель видит точно, что входит и что должно выйти, и меньше гадает. А зачем 3 своих текста? Примеры со слайда модель уже «знает» — новый текст проверяет, что код действительно работает, а не просто подогнан под примеры.",
        "en": "Why examples inside the prompt? One example is worth a paragraph of explanation: the model sees exactly what goes in and what must come out, and guesses less. And why 3 texts of your own? The model already \"knows\" the slide examples — a new text checks that the code really works and is not just fitted to the examples."
      }
    },
    {
      "kind": "tip",
      "title": {
        "he": "לא כותבים \"היי צ'אט\"",
        "ru": "Не пишем «Привет, чат»",
        "en": "Don't write \"Hi chat\""
      },
      "text": {
        "he": "כשהסתכלה על הפרומפטים שלנו, המרצה אמרה: לא כותבים \"היי צ'אט, אני צריך שתיצור לי…\" — זה בזבוז של טוקנים. כותבים ישר לפי הכללים, למשל:\n\"אתה תוכניתן בכיר ב־Java. עליך לכתוב תוכנית ש… הראה את הקוד בלי הערות. הוסף שתי דוגמאות.\"",
        "ru": "Посмотрев наши промпты, преподавательница сказала: не пишем «Привет, чат, мне нужно, чтобы ты сделал…» — это трата токенов. Пишем сразу по правилам, например:\n«Ты старший программист на Java. Тебе нужно написать программу, которая… Покажи код без комментариев. Добавь два примера.»",
        "en": "Looking at our prompts, the teacher said: don't write \"Hi chat, I need you to make me…\" — it wastes tokens. Write straight to the rules, for example:\n\"You are a senior Java programmer. You need to write a program that… Show the code without comments. Add two examples.\""
      },
      "why": {
        "he": "למה זה חשוב אם המודל ממילא מבין? כל מילה היא טוקנים (זוכרים מהשיעור הראשון?), ולמודל יש חלון הקשר מוגבל. מילים ריקות לא מוסיפות מידע, אבל הן כן \"מושכות\" את התשובה לסגנון של שיחה. משפט \"אתה תוכניתן בכיר\" נותן תפקיד — זה מידע אמיתי.",
        "ru": "Почему это важно, если модель всё равно понимает? Каждое слово — это токены (помнишь с первого урока?), а окно контекста у модели ограничено. Пустые слова не добавляют информации, зато «тянут» ответ в разговорный стиль. Фраза «ты старший программист» задаёт роль — это настоящая информация.",
        "en": "Why does it matter if the model understands anyway? Every word is tokens (remember the first lesson?), and the model's context window is limited. Empty words add no information, but they do \"pull\" the answer into a chatty style. \"You are a senior programmer\" sets a role — that is real information."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "קוד אחד שאפשר לקבל, ובדיקה על 3 טקסטים",
        "ru": "Один код, который можно получить, и проверка на 3 текстах",
        "en": "One code you might get, and a test on 3 texts"
      },
      "text": {
        "he": "ככה יכולה להיראות תשובה לפרומפט (זה לא קוד מהלוח — זו תשובה אפשרית אחת, והרצנו אותה כדי לבדוק). שתי הדוגמאות מהשקף ועוד 3 טקסטים לבדיקה, והפלט כתוב בהערות:",
        "ru": "Так может выглядеть ответ на промпт (это не код с доски — это один возможный ответ, мы его запустили и проверили). Два примера со слайда и ещё 3 текста для проверки, вывод написан в комментариях:",
        "en": "This is what an answer to the prompt can look like (it is not code from the board — it is one possible answer, and we ran it to check). The two slide examples plus 3 more test texts, with the output written in the comments:"
      },
      "math": [
        "public class Main {",
        "    public static String to_snake_case(String text) {",
        "        return text.replaceAll(\"[ .-]+\", \"_\").toLowerCase();",
        "    }",
        "",
        "    public static void main(String[] args) {",
        "        System.out.println(to_snake_case(\"User Profile Data\"));   // user_profile_data",
        "        System.out.println(to_snake_case(\"get-user-id\"));         // get_user_id",
        "        System.out.println(to_snake_case(\"Hello World Java\"));    // hello_world_java",
        "        System.out.println(to_snake_case(\"file.name-Version 2\")); // file_name_version_2",
        "        System.out.println(to_snake_case(\"Order.Total-Price\"));   // order_total_price",
        "    }",
        "}"
      ],
      "why": {
        "he": "מה זה `\"[ .-]+\"`? זה \"ביטוי רגולרי\" (regex): בסוגריים המרובעים — אחד מהתווים רווח, נקודה או מקף; ה־`+` אומר \"אחד או יותר ברצף\". כך גם `a - b` (רווח, מקף, רווח) הופך לקו תחתון אחד: `a_b`, בדיוק כמו שהמגבלה \"single underscore\" דורשת. regex עוד לא למדנו; כאן מספיק להבין מה הוא עושה.",
        "ru": "Что такое `\"[ .-]+\"`? Это «регулярное выражение» (regex): в квадратных скобках — один из символов: пробел, точка или дефис; `+` значит «один или больше подряд». Поэтому и `a - b` (пробел, дефис, пробел) становится одним подчёркиванием: `a_b`, ровно как требует ограничение «single underscore». regex мы ещё не проходили; здесь достаточно понять, что он делает.",
        "en": "What is `\"[ .-]+\"`? It is a \"regular expression\" (regex): inside the square brackets — one of the characters space, dot or hyphen; the `+` means \"one or more in a row\". So `a - b` (space, hyphen, space) also becomes a single underscore: `a_b`, exactly as the \"single underscore\" constraint requires. We have not learned regex yet; here it is enough to understand what it does."
      }
    },
    {
      "kind": "talk",
      "title": {
        "he": "מה זה פסאודו־קוד?",
        "ru": "Что такое псевдокод?",
        "en": "What is pseudocode?"
      },
      "text": {
        "he": "נושא חדש. מהשקף:\n• תיאור מילולי של האלגוריתם, צעד אחר צעד.\n• לא כתוב בשפת תכנות מסוימת — אין צורך בתחביר מדויק.\n• מתמקד בלוגיקה (\"מה\" עושים) ולא בפרטי הכתיבה (\"איך\" כותבים).\n• קל לקריאה ולהבנה, גם למי שאינו מתכנת.\n• גשר בין הבעיה לבין הקוד.\nהמרצה: זה \"קוד אוניברסלי\" עם מילים כמו read, check, if, print — כל מי שיודע קצת אנגלית יבין. ושקף נוסף: פירוק בעיה מורכבת, במילים, לתתי־בעיות עצמאיות.",
        "ru": "Новая тема. Со слайда:\n• Словесное описание алгоритма, шаг за шагом.\n• Не написан на конкретном языке программирования — точный синтаксис не нужен.\n• Сосредоточен на логике («что» делаем), а не на деталях записи («как» пишем).\n• Легко читать и понимать даже не программисту.\n• Мост между задачей и кодом.\nПреподавательница: это «универсальный код» со словами вроде read, check, if, print — поймёт любой, кто немного знает английский. И ещё слайд: разбить сложную задачу словами на независимые подзадачи.",
        "en": "A new topic. From the slide:\n• A verbal description of the algorithm, step by step.\n• Not written in a specific programming language — no exact syntax needed.\n• Focuses on the logic (\"what\" we do), not on writing details (\"how\" we write).\n• Easy to read and understand, even for a non-programmer.\n• A bridge between the problem and the code.\nThe teacher: it is \"universal code\" with words like read, check, if, print — anyone with a little English understands. And one more slide: break a complex problem, in words, into independent sub-problems."
      },
      "why": {
        "he": "למה לא לכתוב ישר קוד? כשכותבים קוד, חצי מהראש עסוק בתחביר (סוגריים, טיפוסים, `;`), ושגיאות לוגיות מתחבאות. בפסאודו־קוד רואים רק את הרעיון, ולכן קל למצוא בו טעות. וגם: פסאודו־קוד טוב הוא פרומפט מצוין — נותנים אותו ל־AI ומבקשים \"תכתוב את זה ב־Java\".",
        "ru": "Почему не писать сразу код? Когда пишешь код, полголовы занято синтаксисом (скобки, типы, `;`), и логические ошибки прячутся. В псевдокоде видна только идея, поэтому ошибку в нём легко найти. И ещё: хороший псевдокод — отличный промпт: даём его ИИ и просим «напиши это на Java».",
        "en": "Why not write code right away? When writing code, half your head is busy with syntax (brackets, types, `;`), and logic errors hide. In pseudocode you see only the idea, so a mistake is easy to find. Also: good pseudocode is an excellent prompt — give it to the AI and ask \"write this in Java\"."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "אלגוריתם: כמה מספרים דו־ספרתיים מתוך 20",
        "ru": "Алгоритм: сколько двузначных чисел из 20",
        "en": "Algorithm: how many two-digit numbers out of 20"
      },
      "text": {
        "he": "השקף: \"אלגוריתם לקליטת 20 מספרים וספירה כמה מספרים יש מתוך ה־20 המורכבים מ־2 ספרות\". כתבנו ביחד:\n1. יצירת לולאה שקולטת 20 מספרים רנדומליים.\n2. בדיקה של כל מספר אם הוא מורכב מ־2 ספרות: לבדוק אם המספר בין 10 ל־99. למשל 12 — עונה לתנאי? כן ← מוסיפים למונה. 123 — עונה לתנאי? לא.\n3. מציגים את המונה.\nבהתחלה חשבנו לפצל לספרת עשרות ואחדות, אבל אחד הסטודנטים פישט: \"בין 10 ל־99\". ובאנגלית, כמו שנכתב על הלוח:",
        "ru": "Слайд: «Алгоритм: ввести 20 чисел и посчитать, сколько из 20 состоят из 2 цифр». Писали вместе:\n1. Создаём цикл, который вводит 20 случайных чисел.\n2. Проверяем каждое число, состоит ли оно из 2 цифр: смотрим, от 10 до 99 ли оно. Например, 12 — подходит? Да → прибавляем к счётчику. 123 — подходит? Нет.\n3. Показываем счётчик.\nСначала думали делить число на десятки и единицы, но один из студентов упростил: «от 10 до 99». А по-английски, как написали на доске:",
        "en": "The slide: \"An algorithm to read 20 numbers and count how many of the 20 have 2 digits\". We wrote it together:\n1. Create a loop that reads 20 random numbers.\n2. Check each number for 2 digits: is it between 10 and 99? E.g. 12 — does it match? Yes → add to the counter. 123 — does it match? No.\n3. Show the counter.\nAt first we thought of splitting into tens and units, but one of the students simplified it: \"between 10 and 99\". And in English, as written on the board:"
      },
      "math": [
        "Read 20 numbers",
        "Check each number if it is between 10 to 99",
        "If yes - count in a counter",
        "Print the result of this counter"
      ],
      "why": {
        "he": "למה \"בין 10 ל־99\" ולא לפצל ספרות? זה אותו דבר, רק פשוט יותר: 9 הוא הגדול ביותר עם ספרה אחת, ו־100 הוא הקטן ביותר עם שלוש. וחשוב: 10 ו־99 עצמם נספרים, לכן כותבים `n >= 10` ולא `n > 10`. ולמה המונה מתחיל ב־0? לפני שבדקנו משהו, עוד לא מצאנו אף מספר. (זה בדיוק המונה מהאלגוריתמיקה.)",
        "ru": "Почему «от 10 до 99», а не делить на цифры? Это то же самое, только проще: 9 — самое большое с одной цифрой, 100 — самое маленькое с тремя. И важно: сами 10 и 99 считаются, поэтому пишем `n >= 10`, а не `n > 10`. А почему счётчик начинается с 0? Пока ничего не проверили, ни одного числа ещё не нашли. (Это ровно счётчик с алгоритмики.)",
        "en": "Why \"between 10 and 99\" and not split digits? It is the same thing, just simpler: 9 is the largest with one digit, and 100 is the smallest with three. Important: 10 and 99 themselves count, so we write `n >= 10`, not `n > 10`. And why does the counter start at 0? Before checking anything, we have not found any number yet. (It is exactly the counter from algorithms.)"
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "\"מה כן אפשר?\": AI כארכיטקט, תור בבנק",
        "ru": "«Что можно?»: ИИ как архитектор, очередь в банке",
        "en": "\"What can you do?\": AI as an architect, a bank queue"
      },
      "text": {
        "he": "הפרומפט מהשקף — כאן ה־AI לא כותב קוד, רק מתכנן:\n\"אתה ארכיטקט תוכנה. אל תכתוב קוד! תתרכז בתכנון בלבד.\nאני צריך לנהל תור בבנק. פרק את הבעיה ל־3 פונקציות מרכזיות.\nלכל פונקציה ציין:\n1. שם הפונקציה ב־`snake_case`.\n2. מהם סוגי הקלט והפלט (Input/Output Types).\n3. פסאודו-קוד מילולי קצר של הלוגיקה.\"\nמה Gemini החזיר — שלוש פונקציות:",
        "ru": "Промпт со слайда (на иврите) — здесь ИИ не пишет код, а только планирует:\n«Ты архитектор программ. Не пиши код! Сосредоточься только на планировании. Мне нужно управлять очередью в банке. Разбей задачу на 3 главные функции. Для каждой функции укажи: 1. имя функции в snake_case; 2. типы ввода и вывода (Input/Output Types); 3. короткий словесный псевдокод логики.»\nЧто вернул Gemini — три функции:",
        "en": "The prompt from the slide (in Hebrew) — here the AI does not write code, it only plans:\n\"You are a software architect. Don't write code! Focus on planning only. I need to manage a queue in a bank. Break the problem into 3 main functions. For each function state: 1. the function name in snake_case; 2. the input and output types (Input/Output Types); 3. a short verbal pseudocode of the logic.\"\nWhat Gemini returned — three functions:"
      },
      "math": [
        "add_customer_to_queue(bank_queue, customer_info) -> ticket_number",
        "serve_next_customer(bank_queue, teller_id) -> next_customer (or Null)",
        "get_queue_status(bank_queue, ticket_number) -> status_details"
      ],
      "why": {
        "he": "מה כל פונקציה עושה? להוסיף לקוח לסוף התור ולהחזיר מספר תור (למשל `A-104`); לקרוא ללקוח הבא — ואם התור ריק, להחזיר Null; ולבדוק סטטוס: כמה מחכים לפניך × זמן טיפול ממוצע = זמן המתנה. שימו לב: השמות כבר ב־`snake_case`, כמו בתרגיל הקודם. ולמה \"אל תכתוב קוד\"? כי קודם מבינים ומאשרים את התכנון, ורק אחר כך בונים.",
        "ru": "Что делает каждая функция? добавить клиента в конец очереди и вернуть номер (например, `A-104`); вызвать следующего клиента — а если очередь пуста, вернуть Null; и проверить статус: сколько ждут перед тобой × среднее время обслуживания = время ожидания. Обрати внимание: имена уже в snake_case, как в прошлом упражнении. А зачем «не пиши код»? Сначала понимаем и утверждаем план, и только потом строим.",
        "en": "What does each function do? add a customer to the end of the queue and return a ticket number (e.g. `A-104`); call the next customer — and if the queue is empty, return Null; and check the status: how many wait before you × the average service time = the waiting time. Notice the names are already in snake_case, as in the previous exercise. And why \"don't write code\"? First you understand and approve the plan, and only then build."
      }
    },
    {
      "kind": "talk",
      "title": {
        "he": "FIFO ו־LIFO",
        "ru": "FIFO и LIFO",
        "en": "FIFO and LIFO"
      },
      "text": {
        "he": "\"תרשמו לכם את המושג\": שני מושגים מאוד חשובים בתחום שלנו.\n• FIFO — First In, First Out: מי שנכנס ראשון יוצא ראשון. זה תור: תור לרופא, תור לקולנוע, תור בקפיטריה. גם במוצרי מזון: מה שהתוקף שלו נגמר קודם — משתמשים בו ראשון.\n• LIFO — Last In, First Out: מי שנכנס אחרון יוצא ראשון. הדוגמה מהשיעור: נכנסים למעלית מלאה — מי שנכנס אחרון עומד ליד הדלת ויוצא ראשון.",
        "ru": "«Запишите себе это понятие»: два очень важных понятия в нашей области.\n• FIFO — First In, First Out: кто вошёл первым, выходит первым. Это очередь: к врачу, в кино, в кафетерии. И с продуктами: что раньше истекает по сроку — используем первым.\n• LIFO — Last In, First Out: кто вошёл последним, выходит первым. Пример с урока: заходим в полный лифт — кто зашёл последним, стоит у двери и выходит первым.",
        "en": "\"Write this term down\": two very important concepts in our field.\n• FIFO — First In, First Out: whoever comes in first goes out first. That is a queue: at the doctor, at the cinema, in the cafeteria. Also with food products: whatever expires first is used first.\n• LIFO — Last In, First Out: whoever comes in last goes out first. The example from class: you get into a full elevator — the last one in stands by the door and gets out first."
      },
      "why": {
        "he": "למה זה חשוב בתכנות? המחשב כל הזמן מנהל \"תורים\" של מספרים ופקודות. FIFO נקרא queue (תור): הדפסות למדפסת, הודעות שמחכות. LIFO נקרא stack (מחסנית): כפתור \"בטל\" (Ctrl+Z) מבטל קודם את הפעולה האחרונה, וכפתור \"אחורה\" בדפדפן חוזר לדף האחרון. (את המילים queue ו־stack ואת דוגמאות המחשב לא אמרו בשיעור — זה להבנה.)",
        "ru": "Почему это важно в программировании? Компьютер постоянно ведёт «очереди» чисел и команд. FIFO называют queue (очередь): задания на принтер, сообщения, которые ждут. LIFO называют stack (стек, стопка): «Отменить» (Ctrl+Z) отменяет сначала последнее действие, а кнопка «Назад» в браузере возвращает на последнюю страницу. (queue, stack и компьютерные примеры на уроке не звучали — это для понимания.)",
        "en": "Why does it matter in programming? The computer constantly manages \"queues\" of numbers and commands. FIFO is called a queue: print jobs, waiting messages. LIFO is called a stack: \"Undo\" (Ctrl+Z) undoes the last action first, and the browser's \"Back\" button returns to the last page. (queue, stack and the computer examples were not said in class — they are here for understanding.)"
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "משימה בחדרים: השכרת רכב",
        "ru": "Задание в комнатах: аренда машин",
        "en": "Breakout-room task: car rental"
      },
      "text": {
        "he": "מהשקף: \"בנו פסאודו קוד בשפתכם בנושא: השכרת רכב. אתם צריכים לבנות אפליקציה לניהול צי רכבים (Avis למשל). עליכם לבנות את כל הניהול של הזמנות לקוח.\"\nמה המרצה הזכירה כשעברה על התשובות: איזו דרגת רכב הלקוח רוצה (A, B או C) ומה עושים אם אין רכב פנוי בדרגה; איך מחשבים מחיר; ביטוח; וסטטוס כמו \"ההזמנה בוטלה\". אחר כך מעתיקים את הפסאודו־קוד ל־ChatGPT או ל־Claude והופכים לקוד. בסוף הסטודנטים הראו מה יצא: אלגוריתם בשני חלקים (הזמנת רכב, החזרת רכב עם קנס על איחור) ואפילו אפליקציה שלמה לניהול הזמנות.",
        "ru": "Со слайда: «Постройте псевдокод своими словами на тему: аренда машин. Вам нужно построить приложение для управления автопарком (например, Avis). Вы должны построить всё управление заказами клиента».\nЧто напомнила преподавательница, когда проходила по ответам: какой класс машины хочет клиент (A, B или C) и что делать, если в этом классе нет свободной машины; как считать цену; страховка; и статус вроде «заказ отменён». Потом копируем псевдокод в ChatGPT или Claude и превращаем в код. В конце студенты показали, что получилось: алгоритм из двух частей (заказ машины, возврат машины со штрафом за опоздание) и даже целое приложение для управления заказами.",
        "en": "From the slide: \"Build pseudocode in your own words on: car rental. You need to build an app to manage a car fleet (Avis, for example). You must build all the management of customer orders.\"\nWhat the teacher pointed out while going over answers: which car class the customer wants (A, B or C) and what to do if there is no free car in that class; how to calculate the price; insurance; and a status like \"order cancelled\". Then copy the pseudocode into ChatGPT or Claude and turn it into code. At the end students showed what came out: a two-part algorithm (booking a car, returning a car with a late fee) and even a whole order-management app."
      },
      "why": {
        "he": "למה קודם פסאודו־קוד ורק אחר כך AI? כי אם אתם לא יודעים מה התוכנית צריכה לעשות, גם ה־AI לא יודע — והוא ימציא. פסאודו־קוד מכריח לחשוב על כל המקרים (\"אין רכב פנוי\", \"ההזמנה בוטלה\", איחור) לפני שיש קוד. ככה גם קל לבדוק את הקוד שחזר: עוברים שורה־שורה ובודקים שכל צעד מהפסאודו־קוד נמצא בו.",
        "ru": "Почему сначала псевдокод, а уже потом ИИ? Если ты сам не знаешь, что программа должна делать, ИИ тоже не знает — и он придумает. Псевдокод заставляет продумать все случаи («нет свободной машины», «заказ отменён», опоздание) до того, как появится код. Так и полученный код легко проверить: идём строка за строкой и смотрим, что каждый шаг из псевдокода в нём есть.",
        "en": "Why pseudocode first and only then AI? If you don't know what the program should do, the AI doesn't either — and it will make things up. Pseudocode forces you to think through every case (\"no free car\", \"order cancelled\", being late) before there is code. It also makes the returned code easy to check: go line by line and see every step of the pseudocode is in it."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "בדיקה של אפליקציית מחשבון",
        "ru": "Проверка приложения-калькулятора",
        "en": "Testing a calculator app"
      },
      "text": {
        "he": "בסוף אחד הסטודנטים הראה מחשבון שה־AI בנה לו, והמרצה בדקה אותו בכמה פעולות: שארית (`20 % …`), חיבור (`35 + …`) וכפל ב־1.17, למשל `12 × 1.17 = 14.04`. הכל עבד.",
        "ru": "В конце один из студентов показал калькулятор, который сделал ИИ, и преподавательница проверила его несколькими действиями: остаток (`20 % …`), сложение (`35 + …`) и умножение на 1.17, например `12 × 1.17 = 14.04`. Всё сработало.",
        "en": "At the end a student showed a calculator built by the AI, and the teacher tested it with a few operations: remainder (`20 % …`), addition (`35 + …`) and multiplying by 1.17, e.g. `12 × 1.17 = 14.04`. It all worked."
      },
      "why": {
        "he": "למה כפל ב־1.17? כפל ב־1.17 מוסיף 17% למחיר: `12 + 12 × 0.17 = 14.04`. ולמה לבדוק כמה פעולות שונות? כי אפליקציה מ־AI יכולה לעבוד בחיבור ולהישבר בשארית או במספר עשרוני. בודקים כל כפתור, כמו שבדקנו את snake_case על 3 טקסטים.",
        "ru": "Зачем умножать на 1.17? Умножение на 1.17 добавляет к цене 17%: `12 + 12 × 0.17 = 14.04`. А зачем проверять разные действия? Приложение от ИИ может работать на сложении и сломаться на остатке или дробном числе. Проверяем каждую кнопку, как проверяли snake_case на 3 текстах.",
        "en": "Why multiply by 1.17? Multiplying by 1.17 adds 17% to a price: `12 + 12 × 0.17 = 14.04`. And why test several operations? An AI-built app can work for addition and break on remainder or a decimal number. Test every button, just as we tested snake_case on 3 texts."
      }
    },
    {
      "kind": "faq",
      "q": {
        "he": "תמיד צריך Role?",
        "ru": "Role нужен всегда?",
        "en": "Is a Role always needed?"
      },
      "a": {
        "he": "שאלו את זה בסוף השיעור. המרצה: זו פחות או יותר הדרך הסטנדרטית לעבוד עם AI — אתה ממקד אותו (תפקיד, הקשר), מגדיר מגבלות, והוא מתחיל לענות \"מלמעלה\", ברמה הנכונה. ואחר כך משפרים באיטרציות.",
        "ru": "Это спросили в конце урока. Преподавательница: это, в общем-то, стандартный способ работы с ИИ — ты его фокусируешь (роль, контекст), задаёшь ограничения, и он сразу отвечает «с высоты», на нужном уровне. А потом улучшаем итерациями.",
        "en": "This was asked at the end of the lesson. The teacher: it is more or less the standard way to work with AI — you focus it (role, context), set constraints, and it starts answering \"from above\", at the right level. Then you improve in iterations."
      },
      "why": {
        "he": "ומה קורה בלי תפקיד? המודל עונה כמו \"עוזר כללי\": לפעמים זה מספיק לשאלה פשוטה. אבל בשאלה מקצועית, \"אתה תוכניתן בכיר ב־Java\" משנה את המילים, את הדוגמאות ואת רמת הפירוט. הכי טוב לבדוק בעצמכם: שלחו את אותה שאלה עם תפקיד ובלי, והשוו.",
        "ru": "А что без роли? Модель отвечает как «общий помощник»: для простого вопроса этого иногда хватает. Но в профессиональном вопросе «ты старший программист на Java» меняет слова, примеры и уровень подробности. Лучше проверить самому: отправь один и тот же вопрос с ролью и без, и сравни.",
        "en": "And without a role? The model answers as a \"general assistant\": for a simple question that is sometimes enough. But for a professional question, \"you are a senior Java programmer\" changes the wording, the examples and the level of detail. Best to check yourself: send the same question with a role and without, and compare."
      }
    }
  ],
  "review": [
    {
      "title": {
        "he": "snake_case",
        "ru": "snake_case",
        "en": "snake_case"
      },
      "text": {
        "he": "מילים מחוברות בקו תחתון, כל האותיות קטנות: `User Profile Data` ← `user_profile_data`.",
        "ru": "Слова соединены подчёркиванием, все буквы маленькие: `User Profile Data` → `user_profile_data`.",
        "en": "Words joined by underscores, all letters lowercase: `User Profile Data` → `user_profile_data`."
      }
    },
    {
      "title": {
        "he": "פרומפט לקוד",
        "ru": "Промпт для кода",
        "en": "A prompt for code"
      },
      "text": {
        "he": "תפקיד + משימה + מגבלות (\"רק בלוק קוד\") + לפחות 2 דוגמאות קלט ← פלט. בודקים על 3 טקסטים חדשים.",
        "ru": "Роль + задача + ограничения («только блок кода») + не меньше 2 примеров ввод → вывод. Проверяем на 3 новых текстах.",
        "en": "Role + task + constraints (\"only a code block\") + at least 2 input → output examples. Test on 3 new texts."
      }
    },
    {
      "title": {
        "he": "פסאודו־קוד",
        "ru": "Псевдокод",
        "en": "Pseudocode"
      },
      "text": {
        "he": "אלגוריתם במילים, צעד אחר צעד (read, check, if, print). בלי תחביר של שפה מסוימת.",
        "ru": "Алгоритм словами, шаг за шагом (read, check, if, print). Без синтаксиса конкретного языка.",
        "en": "An algorithm in words, step by step (read, check, if, print). No syntax of a specific language."
      }
    },
    {
      "title": {
        "he": "FIFO",
        "ru": "FIFO",
        "en": "FIFO"
      },
      "text": {
        "he": "First In, First Out — מי שנכנס ראשון יוצא ראשון. תור לרופא.",
        "ru": "First In, First Out — кто первым вошёл, первым выходит. Очередь к врачу.",
        "en": "First In, First Out — first in is first out. A queue at the doctor."
      }
    },
    {
      "title": {
        "he": "LIFO",
        "ru": "LIFO",
        "en": "LIFO"
      },
      "text": {
        "he": "Last In, First Out — מי שנכנס אחרון יוצא ראשון. מעלית מלאה.",
        "ru": "Last In, First Out — кто последним вошёл, первым выходит. Полный лифт.",
        "en": "Last In, First Out — last in is first out. A full elevator."
      }
    }
  ],
  "tasks": {
    "groups": {
      "snake": {
        "he": "snake_case: מה הפונקציה תחזיר",
        "ru": "snake_case: что вернёт функция",
        "en": "snake_case: what the function returns"
      },
      "pseudo": {
        "he": "פסאודו־קוד",
        "ru": "Псевдокод",
        "en": "Pseudocode"
      },
      "queue": {
        "he": "FIFO ו־LIFO",
        "ru": "FIFO и LIFO",
        "en": "FIFO and LIFO"
      }
    },
    "teacher": [
      {
        "id": "s1",
        "group": "snake",
        "label": {
          "he": "שלושה טקסטים לבדיקה",
          "ru": "Три текста для проверки",
          "en": "Three test texts"
        },
        "kind": "text",
        "text": {
          "he": "הפונקציה מהשיעור: \n```\ntext.replaceAll(\"[ .-]+\", \"_\").toLowerCase()\n```\n מה יחזיר `to_snake_case(\"Hello World Java\")`?",
          "ru": "Функция с урока: `text.replaceAll(\"[ .-]+\", \"_\").toLowerCase()`. Что вернёт `to_snake_case(\"Hello World Java\")`?",
          "en": "The function from class: `text.replaceAll(\"[ .-]+\", \"_\").toLowerCase()`. What does `to_snake_case(\"Hello World Java\")` return?"
        },
        "example": {
          "he": "`\"Big Red Car\"` ← `\"big_red_car\"`. שני רווחים ← שני קווים תחתונים, והאותיות קטנות.",
          "ru": "`\"Big Red Car\"` → `\"big_red_car\"`. Два пробела → два подчёркивания, буквы маленькие.",
          "en": "`\"Big Red Car\"` → `\"big_red_car\"`. Two spaces → two underscores, letters lowercase."
        },
        "answer": {
          "accept": [
            "hello_world_java"
          ]
        },
        "hints": [
          {
            "he": "כל רצף של רווחים, נקודות ומקפים הופך לקו תחתון אחד.",
            "ru": "Любая цепочка пробелов, точек и дефисов становится одним подчёркиванием.",
            "en": "Every run of spaces, dots and hyphens becomes one underscore."
          },
          {
            "he": "בסוף `toLowerCase()` הופך את כל האותיות לקטנות.",
            "ru": "В конце `toLowerCase()` делает все буквы маленькими.",
            "en": "At the end `toLowerCase()` makes every letter lowercase."
          }
        ],
        "solution": [
          "Hello World Java",
          "Hello_World_Java",
          {
            "he": "תשובה: hello_world_java",
            "ru": "Ответ: hello_world_java",
            "en": "Answer: hello_world_java"
          }
        ]
      },
      {
        "id": "s2",
        "group": "snake",
        "label": {
          "he": "נקודה, מקף ורווח ביחד",
          "ru": "Точка, дефис и пробел вместе",
          "en": "Dot, hyphen and space together"
        },
        "kind": "text",
        "text": {
          "he": "הפונקציה מהשיעור: \n```\ntext.replaceAll(\"[ .-]+\", \"_\").toLowerCase()\n```\n מה יחזיר `to_snake_case(\"file.name-Version 2\")`?",
          "ru": "Функция с урока: `text.replaceAll(\"[ .-]+\", \"_\").toLowerCase()`. Что вернёт `to_snake_case(\"file.name-Version 2\")`?",
          "en": "The function from class: `text.replaceAll(\"[ .-]+\", \"_\").toLowerCase()`. What does `to_snake_case(\"file.name-Version 2\")` return?"
        },
        "example": {
          "he": "`\"My-File.Name\"` ← `\"my_file_name\"`. מקף ונקודה ← קו תחתון.",
          "ru": "`\"My-File.Name\"` → `\"my_file_name\"`. Дефис и точка → подчёркивание.",
          "en": "`\"My-File.Name\"` → `\"my_file_name\"`. Hyphen and dot → underscore."
        },
        "answer": {
          "accept": [
            "file_name_version_2"
          ]
        },
        "hints": [
          {
            "he": "גם נקודה, גם מקף וגם רווח מוחלפים.",
            "ru": "Заменяются и точка, и дефис, и пробел.",
            "en": "The dot, the hyphen and the space are all replaced."
          },
          {
            "he": "ספרות לא משתנות.",
            "ru": "Цифры не меняются.",
            "en": "Digits do not change."
          }
        ],
        "solution": [
          "file.name-Version 2",
          "file_name_Version_2",
          {
            "he": "תשובה: file_name_version_2",
            "ru": "Ответ: file_name_version_2",
            "en": "Answer: file_name_version_2"
          }
        ]
      },
      {
        "id": "s3",
        "group": "snake",
        "label": {
          "he": "קו תחתון אחד",
          "ru": "Одно подчёркивание",
          "en": "A single underscore"
        },
        "kind": "text",
        "text": {
          "he": "הפונקציה מהשיעור: \n```\ntext.replaceAll(\"[ .-]+\", \"_\").toLowerCase()\n```\n מה יחזיר `to_snake_case(\"a - b\")`?",
          "ru": "Функция с урока: `text.replaceAll(\"[ .-]+\", \"_\").toLowerCase()`. Что вернёт `to_snake_case(\"a - b\")`?",
          "en": "The function from class: `text.replaceAll(\"[ .-]+\", \"_\").toLowerCase()`. What does `to_snake_case(\"a - b\")` return?"
        },
        "example": {
          "he": "`\"x . y\"` ← `\"x_y\"`. רווח, נקודה, רווח — רצף אחד ← `_` אחד.",
          "ru": "`\"x . y\"` → `\"x_y\"`. Пробел, точка, пробел — одна цепочка → один `_`.",
          "en": "`\"x . y\"` → `\"x_y\"`. Space, dot, space — one run → one `_`."
        },
        "answer": {
          "accept": [
            "a_b"
          ]
        },
        "hints": [
          {
            "he": "בין a ל־b יש שלושה תווים ברצף: רווח, מקף, רווח.",
            "ru": "Между a и b три символа подряд: пробел, дефис, пробел.",
            "en": "Between a and b there are three characters in a row: space, hyphen, space."
          },
          {
            "he": "ה־`+` ב־regex תופס את כל הרצף ביחד.",
            "ru": "`+` в regex захватывает всю цепочку сразу.",
            "en": "The `+` in the regex grabs the whole run at once."
          }
        ],
        "solution": [
          "\" - \"  →  \"_\"",
          {
            "he": "תשובה: a_b",
            "ru": "Ответ: a_b",
            "en": "Answer: a_b"
          }
        ]
      },
      {
        "id": "s4",
        "group": "snake",
        "label": {
          "he": "איזה חלק בפרומפט?",
          "ru": "Какая часть промпта?",
          "en": "Which part of the prompt?"
        },
        "kind": "choice",
        "text": {
          "he": "בפרומפט מהשקף: \n```\nReturn ONLY the executable Java code block. No explanations.\n```\n — לאיזה חלק זה שייך?",
          "ru": "В промпте со слайда: `Return ONLY the executable Java code block. No explanations.` — к какой части это относится?",
          "en": "In the slide prompt: `Return ONLY the executable Java code block. No explanations.` — which part is it?"
        },
        "options": [
          {
            "he": "Role — תפקיד",
            "ru": "Role — роль",
            "en": "Role"
          },
          {
            "he": "Task — משימה",
            "ru": "Task — задача",
            "en": "Task"
          },
          {
            "he": "Context — הקשר",
            "ru": "Context — контекст",
            "en": "Context"
          },
          {
            "he": "Constraints — מגבלות",
            "ru": "Constraints — ограничения",
            "en": "Constraints"
          }
        ],
        "example": {
          "he": "`Role: Java Developer` ← זה Role: מי המודל צריך להיות.",
          "ru": "`Role: Java Developer` → это Role: кем должна быть модель.",
          "en": "`Role: Java Developer` → that is the Role: who the model should be."
        },
        "answer": {
          "index": 3
        },
        "hints": [
          {
            "he": "זה לא \"מה לעשות\", אלא \"איך התשובה צריכה להיראות\".",
            "ru": "Это не «что сделать», а «как должен выглядеть ответ».",
            "en": "It is not \"what to do\" but \"what the answer should look like\"."
          }
        ],
        "solution": [
          {
            "he": "השורה נמצאת תחת `Constraints:` בשקף.",
            "ru": "Строка стоит под `Constraints:` на слайде.",
            "en": "The line sits under `Constraints:` on the slide."
          },
          {
            "he": "תשובה: Constraints — מגבלות",
            "ru": "Ответ: Constraints — ограничения",
            "en": "Answer: Constraints"
          }
        ]
      },
      {
        "id": "p1",
        "group": "pseudo",
        "label": {
          "he": "ספירת דו־ספרתיים",
          "ru": "Считаем двузначные",
          "en": "Counting two-digit numbers"
        },
        "kind": "number",
        "text": {
          "he": "הפסאודו־קוד מהשיעור (`count` גדל כשהמספר בין 10 ל־99). 20 המספרים שנקלטו:\n```\n5, 12, 99, 100, 10, 7, 45, 9, 300, 64, 1, 18, 250, 33, 98, 101, 8, 70, 11, 2\n```\nמה יודפס?",
          "ru": "Псевдокод с урока (`count` растёт, когда число от 10 до 99). Введены 20 чисел:\n`5, 12, 99, 100, 10, 7, 45, 9, 300, 64, 1, 18, 250, 33, 98, 101, 8, 70, 11, 2`\nЧто напечатается?",
          "en": "The pseudocode from class (`count` grows when the number is between 10 and 99). The 20 numbers read:\n`5, 12, 99, 100, 10, 7, 45, 9, 300, 64, 1, 18, 250, 33, 98, 101, 8, 70, 11, 2`\nWhat is printed?"
        },
        "example": {
          "he": "אם היו רק 10 מספרים: `3, 15, 150, 10, 99, 6, 42, 100, 9, 77` ← דו־ספרתיים: `15, 10, 99, 42, 77` ← יודפס 5. (150 ו־100 — שלוש ספרות.)",
          "ru": "Если бы было всего 10 чисел: `3, 15, 150, 10, 99, 6, 42, 100, 9, 77` → двузначные: 15, 10, 99, 42, 77 → напечатается 5. (150 и 100 — три цифры.)",
          "en": "If there were only 10 numbers: `3, 15, 150, 10, 99, 6, 42, 100, 9, 77` → two-digit: 15, 10, 99, 42, 77 → it prints 5. (150 and 100 have three digits.)"
        },
        "answer": {
          "value": "10"
        },
        "hints": [
          {
            "he": "גם 10 וגם 99 נספרים.",
            "ru": "И 10, и 99 считаются.",
            "en": "Both 10 and 99 count."
          },
          {
            "he": "100 ו־101 כבר שלוש ספרות.",
            "ru": "100 и 101 — уже три цифры.",
            "en": "100 and 101 already have three digits."
          }
        ],
        "solution": [
          "12, 99, 10, 45, 64, 18, 33, 98, 70, 11",
          {
            "he": "תשובה: 10",
            "ru": "Ответ: 10",
            "en": "Answer: 10"
          }
        ]
      },
      {
        "id": "p2",
        "group": "pseudo",
        "label": {
          "he": "התנאי לדו־ספרתי",
          "ru": "Условие «двузначное»",
          "en": "The two-digit condition"
        },
        "kind": "choice",
        "text": {
          "he": "איזה תנאי בודק נכון שהמספר `n` דו־ספרתי (מספרים חיוביים)?",
          "ru": "Какое условие правильно проверяет, что число `n` двузначное (числа положительные)?",
          "en": "Which condition correctly checks that `n` is two-digit (positive numbers)?"
        },
        "options": [
          {
            "he": "n >= 10 and n <= 99",
            "ru": "n >= 10 and n <= 99",
            "en": "n >= 10 and n <= 99"
          },
          {
            "he": "n > 10 and n < 99",
            "ru": "n > 10 and n < 99",
            "en": "n > 10 and n < 99"
          },
          {
            "he": "n >= 10 or n <= 99",
            "ru": "n >= 10 or n <= 99",
            "en": "n >= 10 or n <= 99"
          }
        ],
        "example": {
          "he": "תלת־ספרתי: `n >= 100 and n <= 999`. גם 100 וגם 999 בפנים.",
          "ru": "Трёхзначное: `n >= 100 and n <= 999`. И 100, и 999 внутри.",
          "en": "Three-digit: `n >= 100 and n <= 999`. Both 100 and 999 are inside."
        },
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "בדקו את 10: הוא צריך להיספר.",
            "ru": "Проверь 10: оно должно считаться.",
            "en": "Check 10: it must be counted."
          },
          {
            "he": "עם `or` כמעט כל מספר עובר.",
            "ru": "С `or` проходит почти любое число.",
            "en": "With `or` almost any number passes."
          }
        ],
        "solution": [
          {
            "he": "`n > 10` מפספס את 10, ו־`n < 99` מפספס את 99.",
            "ru": "`n > 10` пропускает 10, а `n < 99` пропускает 99.",
            "en": "`n > 10` misses 10, and `n < 99` misses 99."
          },
          {
            "he": "`or`: גם 5 עובר (`5 <= 99`).",
            "ru": "`or`: проходит даже 5 (`5 <= 99`).",
            "en": "`or`: even 5 passes (`5 <= 99`)."
          },
          {
            "he": "תשובה: `n >= 10 and n <= 99`",
            "ru": "Ответ: `n >= 10 and n <= 99`",
            "en": "Answer: `n >= 10 and n <= 99`"
          }
        ]
      },
      {
        "id": "q1",
        "group": "queue",
        "label": {
          "he": "תור לרופא",
          "ru": "Очередь к врачу",
          "en": "A queue at the doctor"
        },
        "kind": "choice",
        "text": {
          "he": "תור לרופא: מי שהגיע ראשון נכנס ראשון. זה FIFO או LIFO?",
          "ru": "Очередь к врачу: кто пришёл первым, заходит первым. Это FIFO или LIFO?",
          "en": "A queue at the doctor: whoever arrived first goes in first. Is it FIFO or LIFO?"
        },
        "options": [
          {
            "he": "FIFO — מי שנכנס ראשון יוצא ראשון",
            "ru": "FIFO — кто первым вошёл, первым выходит",
            "en": "FIFO — first in, first out"
          },
          {
            "he": "LIFO — מי שנכנס אחרון יוצא ראשון",
            "ru": "LIFO — кто последним вошёл, первым выходит",
            "en": "LIFO — last in, first out"
          }
        ],
        "example": {
          "he": "תור לקולנוע: מי שעומד ראשון קונה כרטיס ראשון ← FIFO.",
          "ru": "Очередь в кино: кто стоит первым, первым покупает билет → FIFO.",
          "en": "A cinema queue: whoever is first buys a ticket first → FIFO."
        },
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "First In — מי שנכנס ראשון.",
            "ru": "First In — кто вошёл первым.",
            "en": "First In — whoever came in first."
          }
        ],
        "solution": [
          {
            "he": "תשובה: FIFO",
            "ru": "Ответ: FIFO",
            "en": "Answer: FIFO"
          }
        ]
      },
      {
        "id": "q2",
        "group": "queue",
        "label": {
          "he": "מעלית מלאה",
          "ru": "Полный лифт",
          "en": "A full elevator"
        },
        "kind": "choice",
        "text": {
          "he": "מעלית מלאה: מי שנכנס אחרון עומד ליד הדלת ויוצא ראשון. זה FIFO או LIFO?",
          "ru": "Полный лифт: кто зашёл последним, стоит у двери и выходит первым. Это FIFO или LIFO?",
          "en": "A full elevator: the last one in stands by the door and gets out first. Is it FIFO or LIFO?"
        },
        "options": [
          {
            "he": "FIFO — מי שנכנס ראשון יוצא ראשון",
            "ru": "FIFO — кто первым вошёл, первым выходит",
            "en": "FIFO — first in, first out"
          },
          {
            "he": "LIFO — מי שנכנס אחרון יוצא ראשון",
            "ru": "LIFO — кто последним вошёл, первым выходит",
            "en": "LIFO — last in, first out"
          }
        ],
        "example": {
          "he": "ערימת צלחות: את הצלחת ששמו אחרונה (למעלה) לוקחים ראשונה ← LIFO. (דוגמה שלא הייתה בשיעור.)",
          "ru": "Стопка тарелок: тарелку, которую положили последней (сверху), берут первой → LIFO. (Пример не с урока.)",
          "en": "A stack of plates: the plate put last (on top) is taken first → LIFO. (Not an example from class.)"
        },
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "מי יוצא ראשון — הראשון או האחרון שנכנס?",
            "ru": "Кто выходит первым — первый или последний вошедший?",
            "en": "Who gets out first — the first or the last one in?"
          }
        ],
        "solution": [
          {
            "he": "תשובה: LIFO",
            "ru": "Ответ: LIFO",
            "en": "Answer: LIFO"
          }
        ]
      },
      {
        "id": "q3",
        "group": "queue",
        "label": {
          "he": "מי הבא בתור?",
          "ru": "Кто следующий?",
          "en": "Who is next?"
        },
        "kind": "text",
        "text": {
          "he": "לתור FIFO נכנסו לפי הסדר A, B, C, D. שני לקוחות כבר יצאו. מי יוצא עכשיו?",
          "ru": "В очередь FIFO по порядку вошли A, B, C, D. Два клиента уже вышли. Кто выходит сейчас?",
          "en": "A, B, C, D entered a FIFO queue in that order. Two customers have already left. Who leaves now?"
        },
        "example": {
          "he": "נכנסו X, Y, Z, ויצא אחד (X) ← הבא הוא Y.",
          "ru": "Вошли X, Y, Z, вышел один (X) → следующий Y.",
          "en": "X, Y, Z came in, one left (X) → next is Y."
        },
        "answer": {
          "accept": [
            "C"
          ]
        },
        "hints": [
          {
            "he": "ב־FIFO יוצאים לפי סדר הכניסה.",
            "ru": "В FIFO выходят в порядке входа.",
            "en": "In FIFO they leave in the order they came."
          }
        ],
        "solution": [
          {
            "he": "יצאו A ואז B",
            "ru": "Вышли A, потом B",
            "en": "A left, then B"
          },
          {
            "he": "תשובה: C",
            "ru": "Ответ: C",
            "en": "Answer: C"
          }
        ]
      },
      {
        "id": "q4",
        "group": "queue",
        "label": {
          "he": "ערימה: מה למעלה?",
          "ru": "Стопка: что сверху?",
          "en": "A stack: what is on top?"
        },
        "kind": "text",
        "text": {
          "he": "שמים צלחות אחת על השנייה: `1, 2, 3, 4` (LIFO). לוקחים 2 צלחות. איזה מספר עכשיו למעלה?",
          "ru": "Кладём тарелки одну на другую: 1, 2, 3, 4 (LIFO). Снимаем 2 тарелки. Какой номер теперь сверху?",
          "en": "Plates are put one on another: 1, 2, 3, 4 (LIFO). We take 2 plates. Which number is on top now?"
        },
        "example": {
          "he": "שמו `5, 6, 7` ולקחו אחת (7) ← למעלה 6.",
          "ru": "Положили 5, 6, 7 и сняли одну (7) → сверху 6.",
          "en": "Put 5, 6, 7 and took one (7) → 6 is on top."
        },
        "answer": {
          "accept": [
            "2"
          ]
        },
        "hints": [
          {
            "he": "ב־LIFO לוקחים קודם את האחרונה ששמו.",
            "ru": "В LIFO сначала снимают последнюю положенную.",
            "en": "In LIFO you first take the last one put."
          }
        ],
        "solution": [
          {
            "he": "לוקחים 4, אחר כך 3",
            "ru": "Снимаем 4, потом 3",
            "en": "Take 4, then 3"
          },
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
        "kind": "choice",
        "text": {
          "he": "מה לא צריך בפסאודו־קוד?",
          "ru": "Что НЕ нужно в псевдокоде?",
          "en": "What is NOT needed in pseudocode?"
        },
        "options": [
          {
            "he": "תחביר מדויק (`;` וסוגריים)",
            "ru": "Точный синтаксис (`;` и скобки)",
            "en": "Exact syntax (`;` and brackets)"
          },
          {
            "he": "צעדים לפי הסדר",
            "ru": "Шаги по порядку",
            "en": "Steps in order"
          },
          {
            "he": "תנאים (if)",
            "ru": "Условия (if)",
            "en": "Conditions (if)"
          }
        ],
        "example": {
          "he": "בפסאודו־קוד כותבים \"if n is between 10 and 99\" — בלי `;`, בלי טיפוסים ובלי סוגריים מסולסלים.",
          "ru": "В псевдокоде пишут «if n is between 10 and 99» — без `;`, без типов и без фигурных скобок.",
          "en": "In pseudocode you write \"if n is between 10 and 99\" — no `;`, no types, no curly braces."
        },
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "פסאודו־קוד הוא \"קוד אוניברסלי\".",
            "ru": "Псевдокод — «универсальный код».",
            "en": "Pseudocode is \"universal code\"."
          }
        ],
        "solution": [
          {
            "he": "צעדים לפי הסדר ותנאים צריך, תחביר מדויק — לא.",
            "ru": "Шаги по порядку и условия нужны, точный синтаксис — нет.",
            "en": "Steps in order and conditions are needed; exact syntax is not."
          },
          {
            "he": "תשובה: תחביר מדויק של שפה",
            "ru": "Ответ: точный синтаксис языка",
            "en": "Answer: exact syntax of a language"
          }
        ]
      },
      {
        "id": "a2",
        "level": 2,
        "label": "2.1",
        "kind": "text",
        "text": {
          "he": "הפונקציה מהשיעור: \n```\ntext.replaceAll(\"[ .-]+\", \"_\").toLowerCase()\n```\n מה יחזיר `to_snake_case(\"GET.User Id\")`?",
          "ru": "Функция с урока: `text.replaceAll(\"[ .-]+\", \"_\").toLowerCase()`. Что вернёт `to_snake_case(\"GET.User Id\")`?",
          "en": "The function from class: `text.replaceAll(\"[ .-]+\", \"_\").toLowerCase()`. What does `to_snake_case(\"GET.User Id\")` return?"
        },
        "example": {
          "he": "`\"My.Big-Car\"` ← `\"my_big_car\"`. ",
          "ru": "`\"My.Big-Car\"` → `\"my_big_car\"`. ",
          "en": "`\"My.Big-Car\"` → `\"my_big_car\"`. "
        },
        "answer": {
          "accept": [
            "get_user_id"
          ]
        },
        "hints": [
          {
            "he": "כל רצף של רווחים, נקודות ומקפים הופך לקו תחתון אחד.",
            "ru": "Любая цепочка пробелов, точек и дефисов становится одним подчёркиванием.",
            "en": "Every run of spaces, dots and hyphens becomes one underscore."
          },
          {
            "he": "בסוף `toLowerCase()` הופך את כל האותיות לקטנות.",
            "ru": "В конце `toLowerCase()` делает все буквы маленькими.",
            "en": "At the end `toLowerCase()` makes every letter lowercase."
          }
        ],
        "solution": [
          "GET_User_Id",
          {
            "he": "תשובה: get_user_id",
            "ru": "Ответ: get_user_id",
            "en": "Answer: get_user_id"
          }
        ]
      },
      {
        "id": "a3",
        "level": 2,
        "label": "2.2",
        "kind": "text",
        "text": {
          "he": "תור FIFO ריק. נכנסים `1, 2, 3`; יוצא אחד; נכנס 4; יוצאים שניים. מי נשאר בתור?",
          "ru": "Очередь FIFO пуста. Входят 1, 2, 3; выходит один; входит 4; выходят двое. Кто остался в очереди?",
          "en": "An empty FIFO queue. 1, 2, 3 come in; one leaves; 4 comes in; two leave. Who is left in the queue?"
        },
        "example": {
          "he": "נכנסים a, b; יוצא אחד (a); נכנס c; יוצא אחד (b) ← נשאר c.",
          "ru": "Входят a, b; выходит один (a); входит c; выходит один (b) → остался c.",
          "en": "a, b come in; one leaves (a); c comes in; one leaves (b) → c is left."
        },
        "answer": {
          "accept": [
            "4"
          ]
        },
        "hints": [
          {
            "he": "רשמו את התור על דף אחרי כל צעד.",
            "ru": "Записывай очередь после каждого шага.",
            "en": "Write the queue down after each step."
          }
        ],
        "solution": [
          "[1, 2, 3] → [2, 3] → [2, 3, 4] → [4]",
          {
            "he": "תשובה: 4",
            "ru": "Ответ: 4",
            "en": "Answer: 4"
          }
        ]
      },
      {
        "id": "a4",
        "level": 3,
        "label": "3.1",
        "kind": "text",
        "text": {
          "he": "אותם צעדים, אבל LIFO: נכנסים `1, 2, 3`; יוצא אחד; נכנס 4; יוצאים שניים. מי נשאר?",
          "ru": "Те же шаги, но LIFO: входят 1, 2, 3; выходит один; входит 4; выходят двое. Кто остался?",
          "en": "Same steps, but LIFO: 1, 2, 3 come in; one leaves; 4 comes in; two leave. Who is left?"
        },
        "example": {
          "he": "LIFO: נכנסים a, b; יוצא אחד (b); נכנס c; יוצא אחד (c) ← נשאר a.",
          "ru": "LIFO: входят a, b; выходит один (b); входит c; выходит один (c) → остался a.",
          "en": "LIFO: a, b come in; one leaves (b); c comes in; one leaves (c) → a is left."
        },
        "answer": {
          "accept": [
            "1"
          ]
        },
        "hints": [
          {
            "he": "ב־LIFO יוצא תמיד האחרון שנכנס.",
            "ru": "В LIFO всегда выходит последний вошедший.",
            "en": "In LIFO the last one in always leaves."
          }
        ],
        "solution": [
          "[1, 2, 3] → [1, 2] → [1, 2, 4] → [1]",
          {
            "he": "תשובה: 1",
            "ru": "Ответ: 1",
            "en": "Answer: 1"
          }
        ]
      },
      {
        "id": "a5",
        "level": 3,
        "label": "3.2",
        "kind": "text",
        "text": {
          "he": "הפונקציה מהשיעור: \n```\ntext.replaceAll(\"[ .-]+\", \"_\").toLowerCase()\n```\n מה יחזיר `to_snake_case(\"  hi  \")`?",
          "ru": "Функция с урока: `text.replaceAll(\"[ .-]+\", \"_\").toLowerCase()`. Что вернёт `to_snake_case(\"  hi  \")`?",
          "en": "The function from class: `text.replaceAll(\"[ .-]+\", \"_\").toLowerCase()`. What does `to_snake_case(\"  hi  \")` return?"
        },
        "example": {
          "he": "`\" New Car\"` ← `\"_new_car\"`. הרווח בהתחלה גם הופך לקו תחתון — המגבלות לא אמרו למחוק רווחים בקצוות.",
          "ru": "`\" New Car\"` → `\"_new_car\"`. Пробел в начале тоже становится подчёркиванием — ограничения не говорили убирать пробелы по краям.",
          "en": "`\" New Car\"` → `\"_new_car\"`. The leading space also becomes an underscore — the constraints did not say to remove spaces at the edges."
        },
        "answer": {
          "accept": [
            "_hi_"
          ]
        },
        "hints": [
          {
            "he": "בהתחלה יש שני רווחים, וגם בסוף.",
            "ru": "В начале два пробела, и в конце тоже.",
            "en": "There are two spaces at the start and at the end."
          },
          {
            "he": "הקוד עושה רק מה שכתוב בכללים — אין שם \"למחוק רווחים בקצוות\".",
            "ru": "Код делает только то, что написано в правилах — там нет «убрать пробелы по краям».",
            "en": "The code does only what the rules say — there is no \"remove spaces at the edges\"."
          }
        ],
        "solution": [
          "\"  \" → \"_\",  \"  \" → \"_\"",
          {
            "he": "תשובה: _hi_",
            "ru": "Ответ: _hi_",
            "en": "Answer: _hi_"
          }
        ]
      }
    ]
  }
};

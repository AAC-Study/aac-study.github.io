/* =====================================================================
   LESSON DATA FILE — how to fill it (one file per lesson)
   ---------------------------------------------------------------------
   window.LESSONS['<id>'] = {
     id: 'math-2026-11-01',            // same id as in data/lessons/index.js
     subject: 'math',                  // id from data/subjects.js
     date: 'YYYY-MM-DD',
     title:   { he, ru, en },
     summary: { he, ru, en },

     // Lesson flow, in the order it happened. kind:
     //   'talk'  – explanation          'board' – example from the board
     //   'tip'   – tip / common mistake  'qa'   – question asked in class
     //   'faq'   – common question (not from this class)
     // Fields: title?{he,ru,en}  text?{he,ru,en}  math?['formula line', ...]
     //         q?{he,ru,en} a?{he,ru,en}   (for 'qa' / 'faq'; the answer is shown right under the question)
     //         time?'13:19'  (optional, only real lesson times)
     // Inside any text `x² + 6x + 5 = 0` in backticks = math (shown left-to-right, mono).
     //                  '\n' = new line.
     timeline: [ ... ],

     review: [ { title:{he,ru,en}, text:{he,ru,en} } ],   // short "lesson review" cards

     tasks: {
       groups: { '2': { he, ru, en }, ... },   // optional headings for teacher tasks (task.group)
       teacher: [ task, ... ],
       ai:      [ task with level: 1 | 2 | 3, ... ]   // invented by AI on the lesson topic
     }
   }

   task = {
     id: 't2-1',                         // unique inside the lesson (progress key: solve:<lesson>:<task id>)
     group?: '2',  level?: 1,            // level only for AI tasks
     label: '2א'  or { he, ru, en },     // short tile label
     kind: 'roots' | 'number' | 'text' | 'choice',
     text: 'x² + 6x + 5 = 0'             // a plain string = math expression shown as is
           or { he, ru, en },            // or a sentence (math inside `backticks`)
     options?: ['0', '1', '2'],          // only for 'choice' (strings or {he,ru,en})
     answer:
       roots  → { roots: ['-1', '-5'], abc?: ['1', '6', '5'] }   // exact values as text ('-1/3' ok);
                                                                 // roots: [] = no solution; one value = double root;
                                                                 // abc (a, b, c of the final ax²+bx+c=0) enables mistake diagnostics
       number → { value: '9' }
       text   → { accept: ['answer', 'other spelling'] }
       choice → { index: 0 },
     hints:    [ {he,ru,en}, ... ],      // in order: first a nudge, then more concrete (shown after each wrong try)
     solution: [ {he,ru,en} | 'formula line', ... ]   // step by step, one operation per line
   }

   Content rules: no names, nothing personal, no times from private chats.
   Every answer and every solution line in this file was computed and verified
   with exact fraction arithmetic (each root substituted into the ORIGINAL equation).
   Multiplication sign is "×".
   ===================================================================== */
window.LESSONS = window.LESSONS || {};
window.LESSONS["math-2026-11-01"] = {
  "id": "math-2026-11-01",
  "subject": "math",
  "date": "2026-11-01",
  "title": {
    "he": "משוואה ריבועית",
    "ru": "Квадратные уравнения",
    "en": "Quadratic equations"
  },
  "summary": {
    "he": "נוסחת השורשים, הדיסקרימיננטה, הדרך הקצרה כש־`a + c = b`, ופתיחת סוגריים שמובילה למשוואה ריבועית.",
    "ru": "Формула корней, дискриминант, короткий способ при `a + c = b` и раскрытие скобок, которое приводит к квадратному уравнению.",
    "en": "The quadratic formula, the discriminant, the `a + c = b` shortcut, and expanding brackets into a quadratic equation."
  },
  "timeline": [
    {
      "why": {
        "he": "למה `a ≠ 0`? אם `a = 0`, ה-`x²` נעלם ונשארת משוואה ממעלה ראשונה — את זה כבר יודעים לפתור. למה צד אחד שווה 0? כי נוסחת השורשים נבנתה בדיוק לצורה `ax² + bx + c = 0`. בלי זה a, b, c יוצאים לא נכונים.",
        "ru": "Почему `a ≠ 0`? Если `a = 0`, `x²` пропадает, и остаётся линейное уравнение — его мы уже умеем решать. Почему одна часть равна 0? Потому что формула корней сделана ровно для вида `ax² + bx + c = 0`. Без этого a, b, c выпишутся неверно.",
        "en": "Why `a ≠ 0`? If `a = 0`, the `x²` vanishes and a first-degree equation is left — we can already solve that. Why is one side 0? Because the quadratic formula is built exactly for the form `ax² + bx + c = 0`. Without it, a, b, c come out wrong."
      },
      "kind": "talk",
      "title": {
        "he": "מהי משוואה ריבועית",
        "ru": "Что такое квадратное уравнение",
        "en": "What a quadratic equation is"
      },
      "text": {
        "he": "משוואה ריבועית היא משוואה מהצורה `ax² + bx + c = 0`, כאשר `a ≠ 0`. המספרים a, b, c נקראים מקדמים: a עומד ליד x², b עומד ליד x, ו־c הוא המספר החופשי. לפני שפותרים, מסדרים את המשוואה כך שבצד אחד יהיה 0.",
        "ru": "Квадратное уравнение — это уравнение вида `ax² + bx + c = 0`, где `a ≠ 0`. Числа a, b, c называются коэффициентами: a стоит при x², b — при x, c — свободный член. Перед решением приводим уравнение к виду, где с одной стороны 0.",
        "en": "A quadratic equation has the form `ax² + bx + c = 0`, where `a ≠ 0`. The numbers a, b, c are the coefficients: a goes with x², b goes with x, and c is the constant term. Before solving, arrange the equation so that one side is 0."
      }
    },
    {
      "why": {
        "he": "במשוואה ממעלה ראשונה x מופיע רק בחזקה 1, ולכן מעבירים ומחלקים. כש-`x²` נשאר, אי אפשר \"לבודד\" את x בחילוק אחד, כי x מופיע פעמיים בצורות שונות — לכן צריך שיטה חדשה: נוסחת השורשים.",
        "ru": "В линейном уравнении x есть только в первой степени, поэтому переносим и делим. Когда `x²` остаётся, x не получится «выделить» одним делением: он стоит дважды и в разном виде — поэтому нужен новый способ, формула корней.",
        "en": "In a first-degree equation x appears only to the power 1, so you move and divide. When `x²` stays, you cannot isolate x with one division, because x appears twice in different forms — so you need a new method: the quadratic formula."
      },
      "kind": "faq",
      "q": {
        "he": "מה עושים כש־x² לא מצטמצם ונשאר במשוואה?",
        "ru": "Что делать, если x² не сокращается и остаётся в уравнении?",
        "en": "What do we do when x² doesn't cancel and stays in the equation?"
      },
      "a": {
        "he": "זו בדיוק משוואה ריבועית. מעבירים את כל האיברים לצד אחד, מזהים את a, b, c ופותרים בנוסחת השורשים — את זה לומדים בשיעור הזה.",
        "ru": "Это и есть квадратное уравнение. Переносим всё в одну сторону, выписываем a, b, c и решаем по формуле корней — этому посвящён урок.",
        "en": "That is exactly a quadratic equation. Move all terms to one side, find a, b, c and use the quadratic formula — that is what this lesson is about."
      }
    },
    {
      "why": {
        "he": "בדיקה — מציבים את שני השורשים.",
        "ru": "Проверка — подставляем оба корня.",
        "en": "Check — substitute both roots."
      },
      "whyMath": [
        "x = −1",
        "(−1)² + 6 × (−1) + 5",
        "= 1 − 6 + 5 = 0",
        "x = −5",
        "(−5)² + 6 × (−5) + 5",
        "= 25 − 30 + 5 = 0"
      ],
      "kind": "board",
      "title": {
        "he": "דוגמה מהלוח `x² + 6x + 5 = 0`",
        "ru": "Пример с доски `x² + 6x + 5 = 0`",
        "en": "Board example `x² + 6x + 5 = 0`"
      },
      "text": {
        "he": "המקדמים `a = 1`, `b = 6`, `c = 5`.\nכאן `a + c = 1 + 5 = 6`, וזה בדיוק b. במקרה כזה יש דרך קצרה, והפתרונות יוצאים מיד",
        "ru": "Коэффициенты `a = 1`, `b = 6`, `c = 5`.\nЗдесь `a + c = 1 + 5 = 6`, а это ровно b. В таком случае есть короткий способ, и корни получаются сразу",
        "en": "The coefficients `a = 1`, `b = 6`, `c = 5`.\nHere `a + c = 1 + 5 = 6`, which is exactly b. In that case there is a shortcut and the roots come out at once"
      },
      "math": [
        "x₁ = −1",
        "x₂ = −c/a = −5/1 = −5"
      ]
    },
    {
      "why": {
        "he": "למה זה עובד? מציבים `x = −1` בצורה הכללית ומקבלים `a − b + c`. אם `a + c = b`, זה בדיוק 0 — ולכן `−1` תמיד שורש. השורש השני יוצא מכך שמכפלת השורשים שווה תמיד `c/a`.",
        "ru": "Почему это работает? Подставим `x = −1` в общий вид и получим `a − b + c`. Если `a + c = b`, это ровно 0 — значит `−1` всегда корень. Второй корень следует из того, что произведение корней всегда равно `c/a`.",
        "en": "Why does it work? Put `x = −1` into the general form and you get `a − b + c`. If `a + c = b`, that is exactly 0 — so `−1` is always a root. The second root follows because the product of the roots always equals `c/a`."
      },
      "whyMath": [
        "a × (−1)² + b × (−1) + c",
        "= a − b + c",
        "= (a + c) − b = 0",
        "x₁ × x₂ = c/a",
        "(−1) × x₂ = c/a",
        "x₂ = −c/a"
      ],
      "kind": "tip",
      "title": {
        "he": "הדרך הקצרה: כש־`a + c = b`",
        "ru": "Короткий способ: когда `a + c = b`",
        "en": "The shortcut: when `a + c = b`"
      },
      "text": {
        "he": "אם `a + c = b`, אז פתרון אחד הוא תמיד `x₁ = −1`, והשני `x₂ = −c/a`.\nהדרך הזו עובדת רק כשהתנאי מתקיים. למשל ב־`x² + 6x + 8 = 0`, `1 + 8 = 9`, וזה לא 6 — לכן פותרים בנוסחה (תרגיל 2ב).",
        "ru": "Если `a + c = b`, то один корень всегда `x₁ = −1`, а второй `x₂ = −c/a`.\nСпособ работает только при этом условии. Например, в `x² + 6x + 8 = 0`, `1 + 8 = 9`, а не 6 — значит решаем по формуле (задание 2ב).",
        "en": "If `a + c = b`, one root is always `x₁ = −1` and the other is `x₂ = −c/a`.\nThis only works when the condition holds. For example, in `x² + 6x + 8 = 0`, `1 + 8 = 9`, not 6 — so use the formula (exercise 2ב)."
      }
    },
    {
      "why": {
        "he": "למה `±`? כי לכל מספר חיובי יש שני שורשים: גם `3 × 3 = 9` וגם `(−3) × (−3) = 9`. לכן פעם מחברים את `√D` ופעם מחסירים — ומקבלים שני פתרונות. הנוסחה מגיעה מ\"השלמה לריבוע\", ולכן היא עובדת לכל משוואה ריבועית.",
        "ru": "Почему `±`? Потому что у положительного числа два квадратных корня: и `3 × 3 = 9`, и `(−3) × (−3) = 9`. Поэтому один раз прибавляем `√D`, другой — вычитаем, и получаем два решения. Формула выводится «выделением полного квадрата», поэтому работает для любого квадратного уравнения.",
        "en": "Why `±`? Because a positive number has two square roots `3 × 3 = 9` and `(−3) × (−3) = 9`. So once you add `√D` and once you subtract it — two solutions. The formula comes from \"completing the square\", so it works for every quadratic."
      },
      "kind": "talk",
      "title": {
        "he": "נוסחת השורשים",
        "ru": "Формула корней",
        "en": "The quadratic formula"
      },
      "text": {
        "he": "הדרך הכללית עובדת תמיד. קודם מחשבים את הדיסקרימיננטה D, אחר כך מוציאים ממנה שורש ומציבים בנוסחה — פעם עם פלוס ופעם עם מינוס",
        "ru": "Общий способ работает всегда. Сначала считаем дискриминант D, потом извлекаем из него корень и подставляем в формулу — один раз с плюсом, один раз с минусом",
        "en": "The general method always works. First compute the discriminant D, then take its square root and substitute into the formula — once with plus, once with minus"
      },
      "math": [
        "D = b² − 4ac",
        "x₁,₂ = (−b ± √D) / (2a)",
        "x = (−b ± √(b² − 4 × a × c)) / (2 × a)"
      ]
    },
    {
      "why": {
        "he": "המחשבון מבצע לפי סדר פעולות `√` פועל רק על מה שבא מיד אחריו. `√b² − 4ac` בלי סוגריים זה `√(b²)` ואז מינוס `4ac`. סוגריים או `=` לפני — מבטיחים שהשורש יחול על כל `D`.",
        "ru": "Калькулятор считает по порядку действий `√` действует только на то, что идёт сразу после него. `√b² − 4ac` без скобок — это `√(b²)` и потом минус `4ac`. Скобки или `=` перед корнем гарантируют, что корень возьмётся из всего `D`.",
        "en": "The calculator follows the order of operations `√` acts only on what comes right after it. `√b² − 4ac` without brackets is `√(b²)` and then minus `4ac`. Brackets, or pressing `=` first, make sure the root covers all of `D`."
      },
      "kind": "qa",
      "q": {
        "he": "איך מקלידים את זה נכון במחשבון?",
        "ru": "Как правильно набрать это на калькуляторе?",
        "en": "How do I type this correctly on a calculator?"
      },
      "a": {
        "he": "קודם מחשבים את `b² − 4ac` ולוחצים `=`. רק אחר כך לוחצים √ על התוצאה (Ans). אפשר גם בבת אחת, אבל עם סוגריים `√(b² − 4ac)`.\nאם לוחצים √ בהתחלה בלי סוגריים, המחשבון מוציא שורש רק מ־b², והתוצאה יוצאת שגויה.",
        "ru": "Сначала считаем `b² − 4ac` и нажимаем `=`. Только потом нажимаем √ от результата (Ans). Можно и сразу, но со скобками `√(b² − 4ac)`.\nЕсли нажать √ в начале без скобок, калькулятор извлечёт корень только из b², и результат будет неверным.",
        "en": "First compute `b² − 4ac` and press `=`. Only then press √ on the result (Ans). You can do it in one go, but with brackets `√(b² − 4ac)`.\nIf you press √ first without brackets, the calculator takes the root of b² only, and the result is wrong."
      }
    },
    {
      "why": {
        "he": "`−b` פירושו \"ההפך של b\", לא \"מספר שלילי\". אם b כבר שלילי, ההפך שלו חיובי. לכן כותבים בטיוטה שורה נפרדת `−b = …` לפני ההצבה — זה מונע את רוב טעויות הסימן.",
        "ru": "`−b` значит «число, противоположное b», а не «отрицательное число». Если b уже отрицательное, противоположное ему — положительное. Поэтому в черновике пиши отдельную строку `−b = …` перед подстановкой — это убирает большинство ошибок со знаком.",
        "en": "`−b` means \"the opposite of b\", not \"a negative number\". If b is already negative, its opposite is positive. So on scrap paper write a separate line `−b = …` before substituting — it prevents most sign mistakes."
      },
      "kind": "tip",
      "title": {
        "he": "כש-b שלילי, ‎−b חיובי",
        "ru": "Если b отрицательное, то −b положительное",
        "en": "When b is negative, −b is positive"
      },
      "text": {
        "he": "בנוסחה כתוב `−b`. אם b עצמו שלילי, שני המינוסים נותנים פלוס: כש-`b = −5`, אז `−b = −(−5) = 5`.\nגם בריבוע `(−5)² = 25` — תמיד חיובי.",
        "ru": "В формуле стоит `−b`. Если само b отрицательное, два минуса дают плюс: при `b = −5` получается `−b = −(−5) = 5`.\nИ в квадрате тоже `(−5)² = 25` — всегда положительное.",
        "en": "The formula has `−b`. If b itself is negative, the two minuses make a plus: with `b = −5`, `−b = −(−5) = 5`.\nThe square too `(−5)² = 25` — always positive."
      },
      "math": [
        "b = −5",
        "−b = −(−5) = 5",
        "b² = (−5)² = 25"
      ]
    },
    {
      "why": {
        "he": "D מחליט כמה פתרונות יש, ולכן טעות ב-D משנה את כל התשובה: מ\"שני פתרונות\" ל\"אין פתרון\". בגלל זה כדאי לחשב את D לבד, בשורה נפרדת, לפני הנוסחה.",
        "ru": "D решает, сколько будет решений, поэтому ошибка в D меняет весь ответ: с «двух решений» на «нет решений». Поэтому D лучше посчитать отдельно, отдельной строкой, до формулы.",
        "en": "D decides how many solutions there are, so a mistake in D changes the whole answer: from \"two solutions\" to \"no solution\". That is why it is worth computing D on its own line before the formula."
      },
      "kind": "tip",
      "title": {
        "he": "טעות נפוצה: לשכוח את הריבוע של b",
        "ru": "Частая ошибка: забыть возвести b в квадрат",
        "en": "Common mistake: forgetting to square b"
      },
      "text": {
        "he": "ב־`6x² + 5x + 1 = 0`, `D = 5² − 4 × 6 × 1 = 25 − 24 = 1`.\nמי ששוכח את הריבוע מקבל `5 − 24 = −19`, ואז נדמה שאין פתרון. במחשבון — לוחצים x² מיד אחרי b.",
        "ru": "В `6x² + 5x + 1 = 0`, `D = 5² − 4 × 6 × 1 = 25 − 24 = 1`.\nЕсли забыть квадрат, получится `5 − 24 = −19`, и покажется, что решений нет. На калькуляторе нажимай x² сразу после b.",
        "en": "In `6x² + 5x + 1 = 0`, `D = 5² − 4 × 6 × 1 = 25 − 24 = 1`.\nForget the square and you get `5 − 24 = −19`, which looks like \"no solution\". On the calculator, press x² right after b."
      }
    },
    {
      "why": {
        "he": "כש-`D = 0`, `+√0` ו-`−√0` זה אותו דבר, ולכן שני השורשים מתלכדים לאחד. כש-`D < 0` אין מספר ממשי שבריבוע נותן שלילי (כל מספר בריבוע ≥ 0), ולכן אין פתרון.",
        "ru": "При `D = 0`, `+√0` и `−√0` — одно и то же, поэтому два корня сливаются в один. При `D < 0` нет такого обычного числа, которое в квадрате даёт отрицательное (любое число в квадрате ≥ 0), поэтому решений нет.",
        "en": "When `D = 0`, `+√0` and `−√0` are the same, so the two roots merge into one. When `D < 0` there is no real number whose square is negative (every square is ≥ 0), so there is no solution."
      },
      "kind": "talk",
      "title": {
        "he": "כמה פתרונות יש? (תרגיל 3)",
        "ru": "Сколько решений? (задание 3)",
        "en": "How many solutions? (exercise 3)"
      },
      "text": {
        "he": "הסימן של D אומר כמה פתרונות יש\n`D > 0` — שני פתרונות\n`D = 0` — פתרון אחד `x = −b / (2a)`\n`D < 0` — אין פתרון, כי אי אפשר להוציא שורש ממספר שלילי",
        "ru": "Знак D говорит, сколько решений\n`D > 0` — два корня\n`D = 0` — один корень `x = −b / (2a)`\n`D < 0` — решений нет, потому что корень из отрицательного числа не извлекается",
        "en": "The sign of D tells you how many solutions there are\n`D > 0` — two roots\n`D = 0` — one root `x = −b / (2a)`\n`D < 0` — no solution, because you can't take the square root of a negative number"
      }
    },
    {
      "why": {
        "he": "כש-`b = 0` יש גם דרך קצרה, בלי נוסחה.",
        "ru": "Когда `b = 0`, есть и короткий путь, без формулы.",
        "en": "When `b = 0` there is also a short way, without the formula."
      },
      "whyMath": [
        "4x² − 4 = 0",
        "4x² = 4",
        "x² = 1",
        "x₁ = 1",
        "x₂ = −1"
      ],
      "kind": "board",
      "title": {
        "he": "דוגמה מהלוח `4x² − 4 = 0`",
        "ru": "Пример с доски `4x² − 4 = 0`",
        "en": "Board example `4x² − 4 = 0`"
      },
      "text": {
        "he": "כאן אין איבר עם x, ולכן `b = 0`. המקדמים `a = 4`, `b = 0`, `c = −4`. מציבים בנוסחה",
        "ru": "Здесь нет члена с x, поэтому `b = 0`. Коэффициенты `a = 4`, `b = 0`, `c = −4`. Подставляем в формулу",
        "en": "There is no x term here, so `b = 0`. The coefficients `a = 4`, `b = 0`, `c = −4`. Substitute into the formula"
      },
      "math": [
        "D = 0² − 4 × 4 × (−4)",
        "D = 64",
        "√D = 8",
        "x₁ = (0 + 8) / (2 × 4) = 1",
        "x₂ = (0 − 8) / (2 × 4) = −1"
      ]
    },
    {
      "why": {
        "he": "a הוא תמיד המספר שליד `x²`, לא משנה איפה הוא כתוב או מה כתוב ליד הדוגמה. טעות ב-a משנה גם את D וגם את המכנה `2a`, ולכן היא מקלקלת את שני השורשים.",
        "ru": "a — это всегда число при `x²`, где бы оно ни стояло и что бы ни было написано рядом с примером. Ошибка в a меняет и D, и знаменатель `2a`, поэтому портит оба корня.",
        "en": "a is always the number next to `x²`, wherever it is written and whatever is written next to the example. A mistake in a changes both D and the denominator `2a`, so it spoils both roots."
      },
      "kind": "tip",
      "title": {
        "he": "שימו לב מהו a",
        "ru": "Внимательно с a",
        "en": "Check what a is"
      },
      "text": {
        "he": "על הלוח נכתב ליד הדוגמה `a = 1`, אבל המקדם של x² כאן הוא 4, ולכן `a = 4` — וכך גם הוצב בנוסחה. תמיד בודקים איזה מספר עומד ליד x².",
        "ru": "На доске рядом с примером было написано `a = 1`, но коэффициент при x² здесь 4, значит `a = 4` — так и подставлено в формулу. Всегда смотри, какое число стоит при x².",
        "en": "Next to this example the board said `a = 1`, but the coefficient of x² is 4, so `a = 4` — and that is what goes into the formula. Always check which number stands next to x²."
      }
    },
    {
      "why": {
        "he": "כש-`c = 0` יש קיצור: מוציאים x מחוץ לסוגריים. מכפלה שווה 0 רק אם אחד הגורמים 0.",
        "ru": "Когда `c = 0`, есть короткий путь — выносим x за скобку. Произведение равно 0, только если один из множителей равен 0.",
        "en": "When `c = 0` there is a shortcut: take x out of the bracket. A product is 0 only if one of its factors is 0."
      },
      "whyMath": [
        "ax² + bx = 0",
        "x(ax + b) = 0",
        "x = 0",
        "ax + b = 0  →  x = −b/a"
      ],
      "kind": "faq",
      "q": {
        "he": "הנוסחה עובדת גם כש־b = 0 או c = 0?",
        "ru": "Формула работает, если b = 0 или c = 0?",
        "en": "Does the formula still work when b = 0 or c = 0?"
      },
      "a": {
        "he": "כן. פשוט מציבים 0 במקום המקדם החסר. ב־`4x² − 4 = 0` הצבנו `b = 0` וקיבלנו `x = 1` ו־`x = −1`.",
        "ru": "Да. Просто подставляем 0 вместо недостающего коэффициента. В `4x² − 4 = 0` мы подставили `b = 0` и получили `x = 1` и `x = −1`.",
        "en": "Yes. Just put 0 in place of the missing coefficient. In `4x² − 4 = 0` we used `b = 0` and got `x = 1` and `x = −1`."
      }
    },
    {
      "why": {
        "he": "למה מעבירים הכול שמאלה? כי הנוסחה צריכה \"= 0\". אם משאירים איברים בשני הצדדים, a, b ו-c שתרשמו לא יהיו נכונים. אחרי ההעברה מכנסים איברים דומים — ורק אז רושמים a, b, c.",
        "ru": "Зачем переносить всё влево? Потому что формуле нужно «= 0». Если оставить члены с обеих сторон, выписанные a, b и c будут неверными. После переноса приводим подобные — и только потом выписываем a, b, c.",
        "en": "Why move everything to the left? Because the formula needs \"= 0\". If terms stay on both sides, the a, b and c you write down will be wrong. After moving, combine like terms — and only then write a, b, c."
      },
      "kind": "talk",
      "title": {
        "he": "תרגיל 12: סוגריים שמובילים למשוואה ריבועית",
        "ru": "Задание 12: скобки, которые приводят к квадратному уравнению",
        "en": "Exercise 12: brackets that lead to a quadratic"
      },
      "text": {
        "he": "כאן יש סוגריים כפול סוגריים, כמו בנושא \"סוגריים כפול סוגריים\" שלמדנו קודם: כל איבר כפול כל איבר.\nההבדל: בצד ימין יש `2x²`, ולכן x² לא מצטמצם. מעבירים את כל האיברים לצד שמאל, בצד ימין נשאר 0 — ומתקבלת משוואה ריבועית. דוגמה (לא מהתרגיל)",
        "ru": "Здесь скобка умножается на скобку, как в теме «скобка на скобку», которую мы проходили раньше: каждый член на каждый.\nОтличие: справа стоит `2x²`, поэтому x² не сокращается. Переносим все члены влево, справа остаётся 0 — и получается квадратное уравнение. Пример (не из задания)",
        "en": "Here a bracket multiplies a bracket, just like the earlier topic \"bracket times bracket\": every term times every term.\nThe difference: the right side has `2x²`, so x² does not cancel. Move every term to the left, 0 stays on the right — and you get a quadratic equation. An example (not from the exercise)"
      },
      "math": [
        "(x + 1)(x − 3) = 2x² − 5x + 1",
        "x² − 3x + x − 3 = 2x² − 5x + 1",
        "x² − 2x − 3 − 2x² + 5x − 1 = 0",
        "−x² + 3x − 4 = 0"
      ]
    },
    {
      "why": {
        "he": "כפל של כל המשוואה ב-`(−1)` לא משנה את השורשים `0 × (−1)` עדיין 0, והאגף השמאלי שווה 0 באותם x בדיוק. מספרים חיוביים פשוט נוחים יותר ומקטינים טעויות.",
        "ru": "Умножение всего уравнения на `(−1)` не меняет корней `0 × (−1)` — всё ещё 0, и левая часть равна 0 ровно при тех же x. Положительные числа просто удобнее и дают меньше ошибок.",
        "en": "Multiplying the whole equation by `(−1)` does not change the roots `0 × (−1)` is still 0, and the left side is 0 for exactly the same x. Positive numbers are just handier and lead to fewer mistakes."
      },
      "kind": "tip",
      "title": {
        "he": "כש־a שלילי",
        "ru": "Когда a отрицательное",
        "en": "When a is negative"
      },
      "text": {
        "he": "אפשר לעבוד עם a שלילי כמו שהוא (למשל `a = −1`) — רק לזכור שגם המכנה `2a` יוצא שלילי. אפשר גם לכפול את כל המשוואה ב־(−1) ולהפוך את כל הסימנים. התשובה יוצאת אותו דבר.",
        "ru": "С отрицательным a можно работать как есть (например, `a = −1`) — только помни, что знаменатель `2a` тоже отрицательный. Можно и умножить всё уравнение на (−1), поменяв все знаки. Ответ получится тот же.",
        "en": "You can work with a negative a as it is (for example `a = −1`) — just remember that the denominator `2a` is negative too. Or multiply the whole equation by (−1) and flip every sign. The answer is the same."
      }
    },
    {
      "why": {
        "he": "לפי סדר הפעולות, חזקה לפני הסימן מינוס. לכן `−0.5²` זה \"מינוס של (0.5 בריבוע)\" = `−0.25`. הסוגריים אומרים \"את המספר השלילי כולו בריבוע\".",
        "ru": "По порядку действий степень считается раньше знака минус. Поэтому `−0.5²` — это «минус от (0.5 в квадрате)» = `−0.25`. Скобки говорят: «в квадрат возводим всё отрицательное число».",
        "en": "By the order of operations, the power comes before the minus sign. So `−0.5²` is \"minus (0.5 squared)\" = `−0.25`. The brackets say \"square the whole negative number\"."
      },
      "kind": "tip",
      "title": {
        "he": "בדיקה בהצבה — ומספר שלילי תמיד בסוגריים",
        "ru": "Проверка подстановкой — и отрицательное число всегда в скобках",
        "en": "Check by substitution — and always bracket negative numbers"
      },
      "text": {
        "he": "כדי לבדוק פתרון, מציבים אותו במשוואה המקורית ובודקים ששני הצדדים שווים.\nמספר שלילי מקלידים תמיד בסוגריים `(−0.5)² = 0.25`, אבל `−0.5²` במחשבון נותן `−0.25`, כי המחשבון מעלה בריבוע רק את 0.5.",
        "ru": "Чтобы проверить корень, подставь его в исходное уравнение и убедись, что обе части равны.\nОтрицательное число всегда набирай в скобках `(−0.5)² = 0.25`, а `−0.5²` на калькуляторе даёт `−0.25`, потому что в квадрат возводится только 0.5.",
        "en": "To check a root, substitute it into the original equation and make sure both sides are equal.\nAlways type a negative number in brackets `(−0.5)² = 0.25`, but `−0.5²` on a calculator gives `−0.25`, because only 0.5 gets squared."
      }
    },
    {
      "why": {
        "he": "אלה שתי פעולות שונות `−` (חיסור) צריך שני מספרים — \"7 פחות 3\". `(-)` (סימן) שייך למספר אחד ואומר שהוא שלילי. המחשבון מבחין ביניהם, ולכן מקש לא נכון יכול לתת תוצאה אחרת או שגיאה.",
        "ru": "Это две разные операции `−` (вычитание) нужны два числа — «7 минус 3». `(-)` (знак) принадлежит одному числу и говорит, что оно отрицательное. Калькулятор их различает, поэтому не та кнопка может дать другой результат или ошибку.",
        "en": "These are two different operations `−` (subtraction) needs two numbers — \"7 minus 3\". `(-)` (sign) belongs to one number and says it is negative. The calculator tells them apart, so the wrong key can give another result or an error."
      },
      "kind": "tip",
      "title": {
        "he": "במחשבון: שני מקשי מינוס",
        "ru": "На калькуляторе две разные кнопки минуса",
        "en": "Two different minus keys on the calculator"
      },
      "text": {
        "he": "ב-Casio יש מקש `(-)` — הסימן של מספר שלילי, ומקש `−` — פעולת החיסור. אלה לא אותו דבר. מספר שלילי מקלידים עם `(-)` ובסוגריים `( (-) 5 ) x²` נותן 25.",
        "ru": "На Casio есть кнопка `(-)` — знак отрицательного числа, и кнопка `−` — вычитание. Это не одно и то же. Отрицательное число набираем через `(-)` и в скобках `( (-) 5 ) x²` даёт 25.",
        "en": "A Casio has a `(-)` key, the sign of a negative number, and a `−` key, subtraction. They are not the same. Type a negative number with `(-)` and in brackets `( (-) 5 ) x²` gives 25."
      }
    },
    {
      "why": {
        "he": "כאן x נמצא גם במכנה, ולכן המכנה המשותף כולל את `(x + 6)`. אחרי הכפל כל המכנים נעלמים, ובזכות ה-x שבמכנה מופיע `x²` — לכן התרגיל הזה נמצא בשיעור של משוואות ריבועיות.",
        "ru": "Здесь x есть и в знаменателе, поэтому общий знаменатель включает `(x + 6)`. После умножения все знаменатели пропадают, а из-за x в знаменателе появляется `x²` — поэтому это задание и стоит в уроке про квадратные уравнения.",
        "en": "Here x is also in a denominator, so the common denominator includes `(x + 6)`. After multiplying, all the denominators vanish, and because of the x in the denominator an `x²` appears — that is why this task is in the quadratics lesson."
      },
      "kind": "board",
      "title": {
        "he": "משוואה עם שברים",
        "ru": "Уравнение с дробями",
        "en": "An equation with fractions"
      },
      "text": {
        "he": "ב־`(1 + 2x)/3 − (3x − 1)/4 = 1/(x + 6)` מוצאים מכנה משותף — `12(x + 6)` — וכופלים בו כל איבר. אחרי פתיחת הסוגריים מתקבלת משוואה ריבועית, ופותרים אותה כרגיל.\nלא לשכוח `x ≠ −6`, כי אסור לחלק באפס.",
        "ru": "В `(1 + 2x)/3 − (3x − 1)/4 = 1/(x + 6)` находим общий знаменатель — `12(x + 6)` — и умножаем на него каждый член. После раскрытия скобок получается квадратное уравнение, решаем как обычно.\nНе забудь `x ≠ −6`, на ноль делить нельзя.",
        "en": "In `(1 + 2x)/3 − (3x − 1)/4 = 1/(x + 6)` find the common denominator — `12(x + 6)` — and multiply every term by it. After expanding you get a quadratic equation; solve it as usual.\nDon't forget `x ≠ −6`, no division by zero."
      }
    },
    {
      "why": {
        "he": "למה צריך לפסול? כשכופלים במשהו שיש בו x, ייתכן שכפלנו ב-0 בלי לשים לב — וכפל ב-0 הופך כל משוואה לנכונה. כך יכול להופיע \"שורש מזויף\" שלא מתאים למשוואה המקורית. תחום ההגדרה הוא הרשימה של מה שאסור, ונבדוק מולה בסוף.",
        "ru": "Зачем отбрасывать? Когда умножаем на выражение с x, могли незаметно умножить на 0 — а умножение на 0 делает любое уравнение верным. Так может появиться «лишний корень», который не подходит исходному уравнению. Область определения — это список запрещённого, и в конце сверяемся с ним.",
        "en": "Why throw it out? When you multiply by something with x in it, you may have multiplied by 0 without noticing — and multiplying by 0 makes any equation true. That can create a \"fake root\" that does not fit the original equation. The domain is the list of what is forbidden, and we check against it at the end."
      },
      "kind": "tip",
      "title": {
        "he": "תחום הגדרה",
        "ru": "Область определения (תחום הגדרה)",
        "en": "The domain of definition"
      },
      "text": {
        "he": "כשיש x במכנה, לפני הפתרון כותבים מה x לא יכול להיות: מכנה לא שווה ל-0. כאן `x + 6 ≠ 0`, ולכן `x ≠ −6`.\nבסוף בודקים: אם אחד הפתרונות יצא בדיוק הערך האסור, הוא נפסל.",
        "ru": "Когда x стоит в знаменателе, до решения записываем, чем x быть не может: знаменатель не равен 0. Здесь `x + 6 ≠ 0`, значит `x ≠ −6`.\nВ конце проверяем: если какой-то корень получился ровно запрещённым значением, его отбрасываем.",
        "en": "When x is in a denominator, before solving write what x cannot be: the denominator is not 0. Here `x + 6 ≠ 0`, so `x ≠ −6`.\nAt the end check: if a root comes out exactly as the forbidden value, it is thrown out."
      },
      "math": [
        "x + 6 ≠ 0",
        "x ≠ −6"
      ]
    },
    {
      "why": {
        "he": "`4(…)` פירושו \"4 פעמים כל מה שבסוגריים\". אם יש 4 שקיות ובכל אחת תפוח וגם בננה — יש 4 תפוחים וגם 4 בננות, לא רק 4 תפוחים. לכן כל איבר בפנים מוכפל.",
        "ru": "`4(…)` значит «4 раза всё, что в скобке». Если есть 4 пакета, и в каждом яблоко и банан, — то это 4 яблока и 4 банана, а не только 4 яблока. Поэтому умножается каждый член внутри.",
        "en": "`4(…)` means \"4 times everything in the bracket\". If there are 4 bags, each with an apple and a banana, you have 4 apples and 4 bananas, not just 4 apples. So every term inside is multiplied."
      },
      "kind": "faq",
      "q": {
        "he": "כשכופלים מספר בסוגריים — מה בדיוק כופלים?",
        "ru": "Когда число умножается на скобку — что именно умножать?",
        "en": "When a number multiplies a bracket — what exactly gets multiplied?"
      },
      "a": {
        "he": "את כל האיברים שבתוך הסוגריים, כל אחד מהם `4(2x² + 13x + 6) = 8x² + 52x + 24`. ואם יש מינוס לפני הסוגריים — הוא הופך את הסימן של כל איבר בפנים.",
        "ru": "Каждый член внутри скобки `4(2x² + 13x + 6) = 8x² + 52x + 24`. А если перед скобкой минус — он меняет знак каждого члена внутри.",
        "en": "Every term inside the bracket `4(2x² + 13x + 6) = 8x² + 52x + 24`. And a minus in front of the bracket flips the sign of every term inside."
      }
    }
  ],
  "review": [
    {
      "title": {
        "he": "הצורה הכללית",
        "ru": "Общий вид",
        "en": "Standard form"
      },
      "text": {
        "he": "`ax² + bx + c = 0`, כאשר `a ≠ 0`. קודם מעבירים הכול לצד אחד.",
        "ru": "`ax² + bx + c = 0`, где `a ≠ 0`. Сначала переносим всё в одну сторону.",
        "en": "`ax² + bx + c = 0`, where `a ≠ 0`. First move everything to one side."
      }
    },
    {
      "title": {
        "he": "הדיסקרימיננטה",
        "ru": "Дискриминант",
        "en": "The discriminant"
      },
      "text": {
        "he": "`D = b² − 4ac`.\n`D > 0` — שני פתרונות, `D = 0` — אחד, `D < 0` — אין.",
        "ru": "`D = b² − 4ac`.\n`D > 0` — два корня, `D = 0` — один, `D < 0` — нет.",
        "en": "`D = b² − 4ac`.\n`D > 0` — two roots, `D = 0` — one, `D < 0` — none."
      }
    },
    {
      "title": {
        "he": "נוסחת השורשים",
        "ru": "Формула корней",
        "en": "The formula"
      },
      "text": {
        "he": "`x = (−b ± √D) / (2a)` — פעם עם פלוס ופעם עם מינוס.",
        "ru": "`x = (−b ± √D) / (2a)` — один раз с плюсом, один раз с минусом.",
        "en": "`x = (−b ± √D) / (2a)` — once with plus, once with minus."
      }
    },
    {
      "title": {
        "he": "הדרך הקצרה",
        "ru": "Короткий способ",
        "en": "The shortcut"
      },
      "text": {
        "he": "אם `a + c = b`, אז `x₁ = −1` ו־`x₂ = −c/a`.",
        "ru": "Если `a + c = b`, то `x₁ = −1` и `x₂ = −c/a`.",
        "en": "If `a + c = b`, then `x₁ = −1` and `x₂ = −c/a`."
      }
    },
    {
      "title": {
        "he": "סוגריים ← משוואה ריבועית",
        "ru": "Скобки → квадратное уравнение",
        "en": "Brackets → quadratic"
      },
      "text": {
        "he": "פותחים סוגריים. אם x² לא מצטמצם — מעבירים הכול שמאלה ופותרים בנוסחה.",
        "ru": "Раскрываем скобки. Если x² не сокращается — переносим всё влево и решаем по формуле.",
        "en": "Expand the brackets. If x² does not cancel, move everything to the left and use the formula."
      }
    },
    {
      "title": {
        "he": "מחשבון",
        "ru": "Калькулятор",
        "en": "Calculator"
      },
      "text": {
        "he": "קודם `b² − 4ac =`, אחר כך √. מספר שלילי — תמיד בסוגריים `(−5)² = 25`.",
        "ru": "Сначала `b² − 4ac =`, потом √. Отрицательное число — всегда в скобках `(−5)² = 25`.",
        "en": "First `b² − 4ac =`, then √. A negative number always goes in brackets `(−5)² = 25`."
      }
    },
    {
      "title": {
        "he": "משוואה עם שברים",
        "ru": "Уравнение с дробями",
        "en": "Equations with fractions"
      },
      "text": {
        "he": "מכנה משותף, כפל של כל איבר, ובסוף בודקים שהפתרון לא מאפס אף מכנה.",
        "ru": "Общий знаменатель, умножение каждого члена, а в конце проверка, что корень не обнуляет знаменатель.",
        "en": "Common denominator, multiply every term, and finally check that no root makes a denominator zero."
      }
    }
  ],
  "tasks": {
    "groups": {
      "2": {
        "he": "תרגיל 2 — פתרו את המשוואות",
        "ru": "Задание 2 — Решите уравнения",
        "en": "Exercise 2 — Solve the equations"
      },
      "3": {
        "he": "תרגיל 3 — פתרו את המשוואות (פתרון אחד או אין פתרון)",
        "ru": "Задание 3 — Решите уравнения (один корень или нет решений)",
        "en": "Exercise 3 — Solve the equations (one root or no solution)"
      },
      "12": {
        "he": "תרגיל 12 — פתחו סוגריים ופתרו",
        "ru": "Задание 12 — Раскройте скобки и решите",
        "en": "Exercise 12 — Expand the brackets and solve"
      },
      "frac": {
        "he": "משוואה עם שברים",
        "ru": "Уравнение с дробями",
        "en": "An equation with fractions"
      }
    },
    "teacher": [
      {
        "id": "t2-1",
        "group": "2",
        "label": "2א",
        "kind": "roots",
        "text": "x² + 6x + 5 = 0",
        "example": {
          "he": "המשוואה:\n```\nx² + 3x + 2 = 0\na = 1, b = 3, c = 2\nD = b² − 4ac\n  = 3² − 4 × 1 × 2\n  = 9 − 8 = 1\n√D = 1\nx₁ = (−b + √D) / 2a\n   = (−3 + 1) / 2 = −1\nx₂ = (−b − √D) / 2a\n   = (−3 − 1) / 2 = −2\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\nx² + 3x + 2 = 0\na = 1, b = 3, c = 2\nD = b² − 4ac\n  = 3² − 4 × 1 × 2\n  = 9 − 8 = 1\n√D = 1\nx₁ = (−b + √D) / 2a\n   = (−3 + 1) / 2 = −1\nx₂ = (−b − √D) / 2a\n   = (−3 − 1) / 2 = −2\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\nx² + 3x + 2 = 0\na = 1, b = 3, c = 2\nD = b² − 4ac\n  = 3² − 4 × 1 × 2\n  = 9 − 8 = 1\n√D = 1\nx₁ = (−b + √D) / 2a\n   = (−3 + 1) / 2 = −1\nx₂ = (−b − √D) / 2a\n   = (−3 − 1) / 2 = −2\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "-1",
            "-5"
          ],
          "abc": [
            "1",
            "6",
            "5"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 1, b = 6, c = 5. אחר כך חשבו D = b² − 4ac. שימו לב: a + c = b, אז אפשר גם בדרך הקצרה.",
            "ru": "Начни с коэффициентов: a = 1, b = 6, c = 5. Потом посчитай D = b² − 4ac. Заметь: a + c = b — подойдёт и короткий способ.",
            "en": "Start with the coefficients: a = 1, b = 6, c = 5. Then compute D = b² − 4ac. Notice: a + c = b, so the shortcut works too."
          },
          {
            "he": "D = 16, ולכן √D = 4. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 16, значит √D = 4. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 16, so √D = 4. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          },
          {
            "he": "x₁ = (−6 + 4) / 2. חשבו את זה, ואחר כך את x₂ עם מינוס לפני השורש. בסוף חלקו גם במכנה (2a = 2).",
            "ru": "x₁ = (−6 + 4) / 2. Посчитай, потом x₂ с минусом перед корнем. Не забудь разделить на знаменатель (2a = 2).",
            "en": "x₁ = (−6 + 4) / 2. Work it out, then x₂ with a minus before the root. Don't forget to divide by 2a = 2."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 1,  b = 6,  c = 5",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 6² − 4 × 1 × 5",
          "D = 36 − 20",
          "D = 16",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √16 = 4",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "x₁ = (−6 + 4) / (2 × 1)",
          "x₁ = −2 / 2",
          "x₁ = −1",
          "x₂ = (−6 − 4) / (2 × 1)",
          "x₂ = −10 / 2",
          "x₂ = −5",
          {
            "he": "תשובה: x₁ = −1,  x₂ = −5",
            "ru": "Ответ: x₁ = −1,  x₂ = −5",
            "en": "Answer: x₁ = −1,  x₂ = −5"
          },
          {
            "he": "בדיקה בדרך הקצרה: a + c = 1 + 5 = 6 = b, ולכן x₁ = −1 ו־x₂ = −c/a = −5",
            "ru": "Проверка коротким способом: a + c = 1 + 5 = 6 = b, значит x₁ = −1, x₂ = −c/a = −5",
            "en": "Shortcut check: a + c = 1 + 5 = 6 = b, so x₁ = −1 and x₂ = −c/a = −5"
          }
        ]
      },
      {
        "id": "t2-2",
        "group": "2",
        "label": "2ב",
        "kind": "roots",
        "text": "x² + 6x + 8 = 0",
        "example": {
          "he": "המשוואה:\n```\nx² + 4x + 3 = 0\na = 1, b = 4, c = 3\nD = b² − 4ac\n  = 4² − 4 × 1 × 3\n  = 16 − 12 = 4\n√D = 2\nx₁ = (−b + √D) / 2a\n   = (−4 + 2) / 2 = −1\nx₂ = (−b − √D) / 2a\n   = (−4 − 2) / 2 = −3\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\nx² + 4x + 3 = 0\na = 1, b = 4, c = 3\nD = b² − 4ac\n  = 4² − 4 × 1 × 3\n  = 16 − 12 = 4\n√D = 2\nx₁ = (−b + √D) / 2a\n   = (−4 + 2) / 2 = −1\nx₂ = (−b − √D) / 2a\n   = (−4 − 2) / 2 = −3\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\nx² + 4x + 3 = 0\na = 1, b = 4, c = 3\nD = b² − 4ac\n  = 4² − 4 × 1 × 3\n  = 16 − 12 = 4\n√D = 2\nx₁ = (−b + √D) / 2a\n   = (−4 + 2) / 2 = −1\nx₂ = (−b − √D) / 2a\n   = (−4 − 2) / 2 = −3\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "-2",
            "-4"
          ],
          "abc": [
            "1",
            "6",
            "8"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 1, b = 6, c = 8. אחר כך חשבו D = b² − 4ac.",
            "ru": "Начни с коэффициентов: a = 1, b = 6, c = 8. Потом посчитай D = b² − 4ac.",
            "en": "Start with the coefficients: a = 1, b = 6, c = 8. Then compute D = b² − 4ac."
          },
          {
            "he": "D = 4, ולכן √D = 2. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 4, значит √D = 2. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 4, so √D = 2. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          },
          {
            "he": "x₁ = (−6 + 2) / 2. חשבו את זה, ואחר כך את x₂ עם מינוס לפני השורש. בסוף חלקו גם במכנה (2a = 2).",
            "ru": "x₁ = (−6 + 2) / 2. Посчитай, потом x₂ с минусом перед корнем. Не забудь разделить на знаменатель (2a = 2).",
            "en": "x₁ = (−6 + 2) / 2. Work it out, then x₂ with a minus before the root. Don't forget to divide by 2a = 2."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 1,  b = 6,  c = 8",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 6² − 4 × 1 × 8",
          "D = 36 − 32",
          "D = 4",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √4 = 2",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "x₁ = (−6 + 2) / (2 × 1)",
          "x₁ = −4 / 2",
          "x₁ = −2",
          "x₂ = (−6 − 2) / (2 × 1)",
          "x₂ = −8 / 2",
          "x₂ = −4",
          {
            "he": "תשובה: x₁ = −2,  x₂ = −4",
            "ru": "Ответ: x₁ = −2,  x₂ = −4",
            "en": "Answer: x₁ = −2,  x₂ = −4"
          }
        ]
      },
      {
        "id": "t2-3",
        "group": "2",
        "label": "2ג",
        "kind": "roots",
        "text": "x² + 7x + 12 = 0",
        "example": {
          "he": "המשוואה:\n```\nx² + 7x + 10 = 0\na = 1, b = 7, c = 10\nD = b² − 4ac\n  = 7² − 4 × 1 × 10\n  = 49 − 40 = 9\n√D = 3\nx₁ = (−b + √D) / 2a\n   = (−7 + 3) / 2 = −2\nx₂ = (−b − √D) / 2a\n   = (−7 − 3) / 2 = −5\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\nx² + 7x + 10 = 0\na = 1, b = 7, c = 10\nD = b² − 4ac\n  = 7² − 4 × 1 × 10\n  = 49 − 40 = 9\n√D = 3\nx₁ = (−b + √D) / 2a\n   = (−7 + 3) / 2 = −2\nx₂ = (−b − √D) / 2a\n   = (−7 − 3) / 2 = −5\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\nx² + 7x + 10 = 0\na = 1, b = 7, c = 10\nD = b² − 4ac\n  = 7² − 4 × 1 × 10\n  = 49 − 40 = 9\n√D = 3\nx₁ = (−b + √D) / 2a\n   = (−7 + 3) / 2 = −2\nx₂ = (−b − √D) / 2a\n   = (−7 − 3) / 2 = −5\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "-3",
            "-4"
          ],
          "abc": [
            "1",
            "7",
            "12"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 1, b = 7, c = 12. אחר כך חשבו D = b² − 4ac.",
            "ru": "Начни с коэффициентов: a = 1, b = 7, c = 12. Потом посчитай D = b² − 4ac.",
            "en": "Start with the coefficients: a = 1, b = 7, c = 12. Then compute D = b² − 4ac."
          },
          {
            "he": "D = 1, ולכן √D = 1. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 1, значит √D = 1. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 1, so √D = 1. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          },
          {
            "he": "x₁ = (−7 + 1) / 2. חשבו את זה, ואחר כך את x₂ עם מינוס לפני השורש. בסוף חלקו גם במכנה (2a = 2).",
            "ru": "x₁ = (−7 + 1) / 2. Посчитай, потом x₂ с минусом перед корнем. Не забудь разделить на знаменатель (2a = 2).",
            "en": "x₁ = (−7 + 1) / 2. Work it out, then x₂ with a minus before the root. Don't forget to divide by 2a = 2."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 1,  b = 7,  c = 12",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 7² − 4 × 1 × 12",
          "D = 49 − 48",
          "D = 1",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √1 = 1",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "x₁ = (−7 + 1) / (2 × 1)",
          "x₁ = −6 / 2",
          "x₁ = −3",
          "x₂ = (−7 − 1) / (2 × 1)",
          "x₂ = −8 / 2",
          "x₂ = −4",
          {
            "he": "תשובה: x₁ = −3,  x₂ = −4",
            "ru": "Ответ: x₁ = −3,  x₂ = −4",
            "en": "Answer: x₁ = −3,  x₂ = −4"
          }
        ]
      },
      {
        "id": "t2-4",
        "group": "2",
        "label": "2ד",
        "kind": "roots",
        "text": "2x² + 10x + 8 = 0",
        "example": {
          "he": "המשוואה:\n```\n2x² + 6x + 4 = 0\na = 2, b = 6, c = 4\nD = b² − 4ac\n  = 6² − 4 × 2 × 4\n  = 36 − 32 = 4\n√D = 2\nx₁ = (−b + √D) / 2a\n   = (−6 + 2) / 4 = −1\nx₂ = (−b − √D) / 2a\n   = (−6 − 2) / 4 = −2\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\n2x² + 6x + 4 = 0\na = 2, b = 6, c = 4\nD = b² − 4ac\n  = 6² − 4 × 2 × 4\n  = 36 − 32 = 4\n√D = 2\nx₁ = (−b + √D) / 2a\n   = (−6 + 2) / 4 = −1\nx₂ = (−b − √D) / 2a\n   = (−6 − 2) / 4 = −2\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\n2x² + 6x + 4 = 0\na = 2, b = 6, c = 4\nD = b² − 4ac\n  = 6² − 4 × 2 × 4\n  = 36 − 32 = 4\n√D = 2\nx₁ = (−b + √D) / 2a\n   = (−6 + 2) / 4 = −1\nx₂ = (−b − √D) / 2a\n   = (−6 − 2) / 4 = −2\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "-1",
            "-4"
          ],
          "abc": [
            "2",
            "10",
            "8"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 2, b = 10, c = 8. אחר כך חשבו D = b² − 4ac. שימו לב: a + c = b, אז אפשר גם בדרך הקצרה.",
            "ru": "Начни с коэффициентов: a = 2, b = 10, c = 8. Потом посчитай D = b² − 4ac. Заметь: a + c = b — подойдёт и короткий способ.",
            "en": "Start with the coefficients: a = 2, b = 10, c = 8. Then compute D = b² − 4ac. Notice: a + c = b, so the shortcut works too."
          },
          {
            "he": "D = 36, ולכן √D = 6. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 36, значит √D = 6. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 36, so √D = 6. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          },
          {
            "he": "x₁ = (−10 + 6) / 4. חשבו את זה, ואחר כך את x₂ עם מינוס לפני השורש. בסוף חלקו גם במכנה (2a = 4).",
            "ru": "x₁ = (−10 + 6) / 4. Посчитай, потом x₂ с минусом перед корнем. Не забудь разделить на знаменатель (2a = 4).",
            "en": "x₁ = (−10 + 6) / 4. Work it out, then x₂ with a minus before the root. Don't forget to divide by 2a = 4."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 2,  b = 10,  c = 8",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 10² − 4 × 2 × 8",
          "D = 100 − 64",
          "D = 36",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √36 = 6",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "x₁ = (−10 + 6) / (2 × 2)",
          "x₁ = −4 / 4",
          "x₁ = −1",
          "x₂ = (−10 − 6) / (2 × 2)",
          "x₂ = −16 / 4",
          "x₂ = −4",
          {
            "he": "תשובה: x₁ = −1,  x₂ = −4",
            "ru": "Ответ: x₁ = −1,  x₂ = −4",
            "en": "Answer: x₁ = −1,  x₂ = −4"
          },
          {
            "he": "בדיקה בדרך הקצרה: a + c = 2 + 8 = 10 = b, ולכן x₁ = −1 ו־x₂ = −c/a = −4",
            "ru": "Проверка коротким способом: a + c = 2 + 8 = 10 = b, значит x₁ = −1, x₂ = −c/a = −4",
            "en": "Shortcut check: a + c = 2 + 8 = 10 = b, so x₁ = −1 and x₂ = −c/a = −4"
          }
        ]
      },
      {
        "id": "t2-5",
        "group": "2",
        "label": "2ה",
        "kind": "roots",
        "text": "3x² + 24x + 45 = 0",
        "example": {
          "he": "המשוואה:\n```\n3x² + 9x + 6 = 0\na = 3, b = 9, c = 6\nD = b² − 4ac\n  = 9² − 4 × 3 × 6\n  = 81 − 72 = 9\n√D = 3\nx₁ = (−b + √D) / 2a\n   = (−9 + 3) / 6 = −1\nx₂ = (−b − √D) / 2a\n   = (−9 − 3) / 6 = −2\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\n3x² + 9x + 6 = 0\na = 3, b = 9, c = 6\nD = b² − 4ac\n  = 9² − 4 × 3 × 6\n  = 81 − 72 = 9\n√D = 3\nx₁ = (−b + √D) / 2a\n   = (−9 + 3) / 6 = −1\nx₂ = (−b − √D) / 2a\n   = (−9 − 3) / 6 = −2\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\n3x² + 9x + 6 = 0\na = 3, b = 9, c = 6\nD = b² − 4ac\n  = 9² − 4 × 3 × 6\n  = 81 − 72 = 9\n√D = 3\nx₁ = (−b + √D) / 2a\n   = (−9 + 3) / 6 = −1\nx₂ = (−b − √D) / 2a\n   = (−9 − 3) / 6 = −2\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "-3",
            "-5"
          ],
          "abc": [
            "3",
            "24",
            "45"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 3, b = 24, c = 45. אחר כך חשבו D = b² − 4ac.",
            "ru": "Начни с коэффициентов: a = 3, b = 24, c = 45. Потом посчитай D = b² − 4ac.",
            "en": "Start with the coefficients: a = 3, b = 24, c = 45. Then compute D = b² − 4ac."
          },
          {
            "he": "D = 36, ולכן √D = 6. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 36, значит √D = 6. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 36, so √D = 6. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          },
          {
            "he": "x₁ = (−24 + 6) / 6. חשבו את זה, ואחר כך את x₂ עם מינוס לפני השורש. בסוף חלקו גם במכנה (2a = 6).",
            "ru": "x₁ = (−24 + 6) / 6. Посчитай, потом x₂ с минусом перед корнем. Не забудь разделить на знаменатель (2a = 6).",
            "en": "x₁ = (−24 + 6) / 6. Work it out, then x₂ with a minus before the root. Don't forget to divide by 2a = 6."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 3,  b = 24,  c = 45",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 24² − 4 × 3 × 45",
          "D = 576 − 540",
          "D = 36",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √36 = 6",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "x₁ = (−24 + 6) / (2 × 3)",
          "x₁ = −18 / 6",
          "x₁ = −3",
          "x₂ = (−24 − 6) / (2 × 3)",
          "x₂ = −30 / 6",
          "x₂ = −5",
          {
            "he": "תשובה: x₁ = −3,  x₂ = −5",
            "ru": "Ответ: x₁ = −3,  x₂ = −5",
            "en": "Answer: x₁ = −3,  x₂ = −5"
          }
        ]
      },
      {
        "id": "t2-6",
        "group": "2",
        "label": "2ו",
        "kind": "roots",
        "text": "4x² + 20x + 24 = 0",
        "example": {
          "he": "המשוואה:\n```\n2x² + 10x + 12 = 0\na = 2, b = 10, c = 12\nD = b² − 4ac\n  = 10² − 4 × 2 × 12\n  = 100 − 96 = 4\n√D = 2\nx₁ = (−b + √D) / 2a\n   = (−10 + 2) / 4 = −2\nx₂ = (−b − √D) / 2a\n   = (−10 − 2) / 4 = −3\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\n2x² + 10x + 12 = 0\na = 2, b = 10, c = 12\nD = b² − 4ac\n  = 10² − 4 × 2 × 12\n  = 100 − 96 = 4\n√D = 2\nx₁ = (−b + √D) / 2a\n   = (−10 + 2) / 4 = −2\nx₂ = (−b − √D) / 2a\n   = (−10 − 2) / 4 = −3\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\n2x² + 10x + 12 = 0\na = 2, b = 10, c = 12\nD = b² − 4ac\n  = 10² − 4 × 2 × 12\n  = 100 − 96 = 4\n√D = 2\nx₁ = (−b + √D) / 2a\n   = (−10 + 2) / 4 = −2\nx₂ = (−b − √D) / 2a\n   = (−10 − 2) / 4 = −3\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "-2",
            "-3"
          ],
          "abc": [
            "4",
            "20",
            "24"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 4, b = 20, c = 24. אחר כך חשבו D = b² − 4ac.",
            "ru": "Начни с коэффициентов: a = 4, b = 20, c = 24. Потом посчитай D = b² − 4ac.",
            "en": "Start with the coefficients: a = 4, b = 20, c = 24. Then compute D = b² − 4ac."
          },
          {
            "he": "D = 16, ולכן √D = 4. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 16, значит √D = 4. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 16, so √D = 4. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          },
          {
            "he": "x₁ = (−20 + 4) / 8. חשבו את זה, ואחר כך את x₂ עם מינוס לפני השורש. בסוף חלקו גם במכנה (2a = 8).",
            "ru": "x₁ = (−20 + 4) / 8. Посчитай, потом x₂ с минусом перед корнем. Не забудь разделить на знаменатель (2a = 8).",
            "en": "x₁ = (−20 + 4) / 8. Work it out, then x₂ with a minus before the root. Don't forget to divide by 2a = 8."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 4,  b = 20,  c = 24",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 20² − 4 × 4 × 24",
          "D = 400 − 384",
          "D = 16",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √16 = 4",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "x₁ = (−20 + 4) / (2 × 4)",
          "x₁ = −16 / 8",
          "x₁ = −2",
          "x₂ = (−20 − 4) / (2 × 4)",
          "x₂ = −24 / 8",
          "x₂ = −3",
          {
            "he": "תשובה: x₁ = −2,  x₂ = −3",
            "ru": "Ответ: x₁ = −2,  x₂ = −3",
            "en": "Answer: x₁ = −2,  x₂ = −3"
          }
        ]
      },
      {
        "id": "t2-7",
        "group": "2",
        "label": "2ז",
        "kind": "roots",
        "text": "6x² + 5x + 1 = 0",
        "example": {
          "he": "המשוואה:\n```\n2x² + 3x + 1 = 0\na = 2, b = 3, c = 1\nD = b² − 4ac\n  = 3² − 4 × 2 × 1\n  = 9 − 8 = 1\n√D = 1\nx₁ = (−b + √D) / 2a\n   = (−3 + 1) / 4 = −1/2\nx₂ = (−b − √D) / 2a\n   = (−3 − 1) / 4 = −1\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\n2x² + 3x + 1 = 0\na = 2, b = 3, c = 1\nD = b² − 4ac\n  = 3² − 4 × 2 × 1\n  = 9 − 8 = 1\n√D = 1\nx₁ = (−b + √D) / 2a\n   = (−3 + 1) / 4 = −1/2\nx₂ = (−b − √D) / 2a\n   = (−3 − 1) / 4 = −1\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\n2x² + 3x + 1 = 0\na = 2, b = 3, c = 1\nD = b² − 4ac\n  = 3² − 4 × 2 × 1\n  = 9 − 8 = 1\n√D = 1\nx₁ = (−b + √D) / 2a\n   = (−3 + 1) / 4 = −1/2\nx₂ = (−b − √D) / 2a\n   = (−3 − 1) / 4 = −1\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "-1/3",
            "-1/2"
          ],
          "abc": [
            "6",
            "5",
            "1"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 6, b = 5, c = 1. אחר כך חשבו D = b² − 4ac.",
            "ru": "Начни с коэффициентов: a = 6, b = 5, c = 1. Потом посчитай D = b² − 4ac.",
            "en": "Start with the coefficients: a = 6, b = 5, c = 1. Then compute D = b² − 4ac."
          },
          {
            "he": "D = 1, ולכן √D = 1. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 1, значит √D = 1. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 1, so √D = 1. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          },
          {
            "he": "x₁ = (−5 + 1) / 12. חשבו את זה, ואחר כך את x₂ עם מינוס לפני השורש. בסוף חלקו גם במכנה (2a = 12).",
            "ru": "x₁ = (−5 + 1) / 12. Посчитай, потом x₂ с минусом перед корнем. Не забудь разделить на знаменатель (2a = 12).",
            "en": "x₁ = (−5 + 1) / 12. Work it out, then x₂ with a minus before the root. Don't forget to divide by 2a = 12."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 6,  b = 5,  c = 1",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 5² − 4 × 6 × 1",
          "D = 25 − 24",
          "D = 1",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √1 = 1",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "x₁ = (−5 + 1) / (2 × 6)",
          "x₁ = −4 / 12",
          "x₁ = −1/3",
          "x₂ = (−5 − 1) / (2 × 6)",
          "x₂ = −6 / 12",
          "x₂ = −1/2",
          {
            "he": "תשובה: x₁ = −1/3,  x₂ = −1/2",
            "ru": "Ответ: x₁ = −1/3,  x₂ = −1/2",
            "en": "Answer: x₁ = −1/3,  x₂ = −1/2"
          }
        ]
      },
      {
        "id": "t2-8",
        "group": "2",
        "label": "2ח",
        "kind": "roots",
        "text": "8x² + 6x + 1 = 0",
        "example": {
          "he": "המשוואה:\n```\n3x² + 4x + 1 = 0\na = 3, b = 4, c = 1\nD = b² − 4ac\n  = 4² − 4 × 3 × 1\n  = 16 − 12 = 4\n√D = 2\nx₁ = (−b + √D) / 2a\n   = (−4 + 2) / 6 = −1/3\nx₂ = (−b − √D) / 2a\n   = (−4 − 2) / 6 = −1\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\n3x² + 4x + 1 = 0\na = 3, b = 4, c = 1\nD = b² − 4ac\n  = 4² − 4 × 3 × 1\n  = 16 − 12 = 4\n√D = 2\nx₁ = (−b + √D) / 2a\n   = (−4 + 2) / 6 = −1/3\nx₂ = (−b − √D) / 2a\n   = (−4 − 2) / 6 = −1\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\n3x² + 4x + 1 = 0\na = 3, b = 4, c = 1\nD = b² − 4ac\n  = 4² − 4 × 3 × 1\n  = 16 − 12 = 4\n√D = 2\nx₁ = (−b + √D) / 2a\n   = (−4 + 2) / 6 = −1/3\nx₂ = (−b − √D) / 2a\n   = (−4 − 2) / 6 = −1\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "-1/4",
            "-1/2"
          ],
          "abc": [
            "8",
            "6",
            "1"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 8, b = 6, c = 1. אחר כך חשבו D = b² − 4ac.",
            "ru": "Начни с коэффициентов: a = 8, b = 6, c = 1. Потом посчитай D = b² − 4ac.",
            "en": "Start with the coefficients: a = 8, b = 6, c = 1. Then compute D = b² − 4ac."
          },
          {
            "he": "D = 4, ולכן √D = 2. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 4, значит √D = 2. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 4, so √D = 2. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          },
          {
            "he": "x₁ = (−6 + 2) / 16. חשבו את זה, ואחר כך את x₂ עם מינוס לפני השורש. בסוף חלקו גם במכנה (2a = 16).",
            "ru": "x₁ = (−6 + 2) / 16. Посчитай, потом x₂ с минусом перед корнем. Не забудь разделить на знаменатель (2a = 16).",
            "en": "x₁ = (−6 + 2) / 16. Work it out, then x₂ with a minus before the root. Don't forget to divide by 2a = 16."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 8,  b = 6,  c = 1",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 6² − 4 × 8 × 1",
          "D = 36 − 32",
          "D = 4",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √4 = 2",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "x₁ = (−6 + 2) / (2 × 8)",
          "x₁ = −4 / 16",
          "x₁ = −1/4",
          "x₂ = (−6 − 2) / (2 × 8)",
          "x₂ = −8 / 16",
          "x₂ = −1/2",
          {
            "he": "תשובה: x₁ = −1/4,  x₂ = −1/2",
            "ru": "Ответ: x₁ = −1/4,  x₂ = −1/2",
            "en": "Answer: x₁ = −1/4,  x₂ = −1/2"
          }
        ]
      },
      {
        "id": "t2-9",
        "group": "2",
        "label": "2ט",
        "kind": "roots",
        "text": "15x² + 8x + 1 = 0",
        "example": {
          "he": "המשוואה:\n```\n10x² + 7x + 1 = 0\na = 10, b = 7, c = 1\nD = b² − 4ac\n  = 7² − 4 × 10 × 1\n  = 49 − 40 = 9\n√D = 3\nx₁ = (−b + √D) / 2a\n   = (−7 + 3) / 20 = −1/5\nx₂ = (−b − √D) / 2a\n   = (−7 − 3) / 20 = −1/2\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\n10x² + 7x + 1 = 0\na = 10, b = 7, c = 1\nD = b² − 4ac\n  = 7² − 4 × 10 × 1\n  = 49 − 40 = 9\n√D = 3\nx₁ = (−b + √D) / 2a\n   = (−7 + 3) / 20 = −1/5\nx₂ = (−b − √D) / 2a\n   = (−7 − 3) / 20 = −1/2\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\n10x² + 7x + 1 = 0\na = 10, b = 7, c = 1\nD = b² − 4ac\n  = 7² − 4 × 10 × 1\n  = 49 − 40 = 9\n√D = 3\nx₁ = (−b + √D) / 2a\n   = (−7 + 3) / 20 = −1/5\nx₂ = (−b − √D) / 2a\n   = (−7 − 3) / 20 = −1/2\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "-1/5",
            "-1/3"
          ],
          "abc": [
            "15",
            "8",
            "1"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 15, b = 8, c = 1. אחר כך חשבו D = b² − 4ac.",
            "ru": "Начни с коэффициентов: a = 15, b = 8, c = 1. Потом посчитай D = b² − 4ac.",
            "en": "Start with the coefficients: a = 15, b = 8, c = 1. Then compute D = b² − 4ac."
          },
          {
            "he": "D = 4, ולכן √D = 2. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 4, значит √D = 2. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 4, so √D = 2. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          },
          {
            "he": "x₁ = (−8 + 2) / 30. חשבו את זה, ואחר כך את x₂ עם מינוס לפני השורש. בסוף חלקו גם במכנה (2a = 30).",
            "ru": "x₁ = (−8 + 2) / 30. Посчитай, потом x₂ с минусом перед корнем. Не забудь разделить на знаменатель (2a = 30).",
            "en": "x₁ = (−8 + 2) / 30. Work it out, then x₂ with a minus before the root. Don't forget to divide by 2a = 30."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 15,  b = 8,  c = 1",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 8² − 4 × 15 × 1",
          "D = 64 − 60",
          "D = 4",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √4 = 2",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "x₁ = (−8 + 2) / (2 × 15)",
          "x₁ = −6 / 30",
          "x₁ = −1/5",
          "x₂ = (−8 − 2) / (2 × 15)",
          "x₂ = −10 / 30",
          "x₂ = −1/3",
          {
            "he": "תשובה: x₁ = −1/5,  x₂ = −1/3",
            "ru": "Ответ: x₁ = −1/5,  x₂ = −1/3",
            "en": "Answer: x₁ = −1/5,  x₂ = −1/3"
          }
        ]
      },
      {
        "id": "t2-10",
        "group": "2",
        "label": "2י",
        "kind": "roots",
        "text": "x² − 5x + 6 = 0",
        "example": {
          "he": "המשוואה:\n```\nx² − 4x + 3 = 0\na = 1, b = −4, c = 3\nD = b² − 4ac\n  = (−4)² − 4 × 1 × 3\n  = 16 − 12 = 4\n√D = 2\nx₁ = (−b + √D) / 2a\n   = (4 + 2) / 2 = 3\nx₂ = (−b − √D) / 2a\n   = (4 − 2) / 2 = 1\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\nx² − 4x + 3 = 0\na = 1, b = −4, c = 3\nD = b² − 4ac\n  = (−4)² − 4 × 1 × 3\n  = 16 − 12 = 4\n√D = 2\nx₁ = (−b + √D) / 2a\n   = (4 + 2) / 2 = 3\nx₂ = (−b − √D) / 2a\n   = (4 − 2) / 2 = 1\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\nx² − 4x + 3 = 0\na = 1, b = −4, c = 3\nD = b² − 4ac\n  = (−4)² − 4 × 1 × 3\n  = 16 − 12 = 4\n√D = 2\nx₁ = (−b + √D) / 2a\n   = (4 + 2) / 2 = 3\nx₂ = (−b − √D) / 2a\n   = (4 − 2) / 2 = 1\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "3",
            "2"
          ],
          "abc": [
            "1",
            "-5",
            "6"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 1, b = −5, c = 6. אחר כך חשבו D = b² − 4ac. שימו לב: b שלילי, לכן b² = (−5)² = 25 — עם סוגריים, כי מספר שלילי בריבוע יוצא חיובי.",
            "ru": "Начни с коэффициентов: a = 1, b = −5, c = 6. Потом посчитай D = b² − 4ac. Внимание: b отрицательное, поэтому b² = (−5)² = 25 — в скобках, ведь отрицательное число в квадрате положительно.",
            "en": "Start with the coefficients: a = 1, b = −5, c = 6. Then compute D = b² − 4ac. Careful: b is negative, so b² = (−5)² = 25 — use brackets, a negative number squared is positive."
          },
          {
            "he": "D = 1, ולכן √D = 1. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 1, значит √D = 1. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 1, so √D = 1. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          },
          {
            "he": "x₁ = (5 + 1) / 2. חשבו את זה, ואחר כך את x₂ עם מינוס לפני השורש. בסוף חלקו גם במכנה (2a = 2).",
            "ru": "x₁ = (5 + 1) / 2. Посчитай, потом x₂ с минусом перед корнем. Не забудь разделить на знаменатель (2a = 2).",
            "en": "x₁ = (5 + 1) / 2. Work it out, then x₂ with a minus before the root. Don't forget to divide by 2a = 2."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 1,  b = −5,  c = 6",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = (−5)² − 4 × 1 × 6",
          "D = 25 − 24",
          "D = 1",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √1 = 1",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "−b = −(−5) = 5",
          "x₁ = (5 + 1) / (2 × 1)",
          "x₁ = 6 / 2",
          "x₁ = 3",
          "x₂ = (5 − 1) / (2 × 1)",
          "x₂ = 4 / 2",
          "x₂ = 2",
          {
            "he": "תשובה: x₁ = 3,  x₂ = 2",
            "ru": "Ответ: x₁ = 3,  x₂ = 2",
            "en": "Answer: x₁ = 3,  x₂ = 2"
          }
        ]
      },
      {
        "id": "t2-11",
        "group": "2",
        "label": "2יא",
        "kind": "roots",
        "text": "2x² − 10x + 8 = 0",
        "example": {
          "he": "המשוואה:\n```\n3x² − 9x + 6 = 0\na = 3, b = −9, c = 6\nD = b² − 4ac\n  = (−9)² − 4 × 3 × 6\n  = 81 − 72 = 9\n√D = 3\nx₁ = (−b + √D) / 2a\n   = (9 + 3) / 6 = 2\nx₂ = (−b − √D) / 2a\n   = (9 − 3) / 6 = 1\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\n3x² − 9x + 6 = 0\na = 3, b = −9, c = 6\nD = b² − 4ac\n  = (−9)² − 4 × 3 × 6\n  = 81 − 72 = 9\n√D = 3\nx₁ = (−b + √D) / 2a\n   = (9 + 3) / 6 = 2\nx₂ = (−b − √D) / 2a\n   = (9 − 3) / 6 = 1\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\n3x² − 9x + 6 = 0\na = 3, b = −9, c = 6\nD = b² − 4ac\n  = (−9)² − 4 × 3 × 6\n  = 81 − 72 = 9\n√D = 3\nx₁ = (−b + √D) / 2a\n   = (9 + 3) / 6 = 2\nx₂ = (−b − √D) / 2a\n   = (9 − 3) / 6 = 1\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "4",
            "1"
          ],
          "abc": [
            "2",
            "-10",
            "8"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 2, b = −10, c = 8. אחר כך חשבו D = b² − 4ac. שימו לב: b שלילי, לכן b² = (−10)² = 100 — עם סוגריים, כי מספר שלילי בריבוע יוצא חיובי.",
            "ru": "Начни с коэффициентов: a = 2, b = −10, c = 8. Потом посчитай D = b² − 4ac. Внимание: b отрицательное, поэтому b² = (−10)² = 100 — в скобках, ведь отрицательное число в квадрате положительно.",
            "en": "Start with the coefficients: a = 2, b = −10, c = 8. Then compute D = b² − 4ac. Careful: b is negative, so b² = (−10)² = 100 — use brackets, a negative number squared is positive."
          },
          {
            "he": "D = 36, ולכן √D = 6. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 36, значит √D = 6. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 36, so √D = 6. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          },
          {
            "he": "x₁ = (10 + 6) / 4. חשבו את זה, ואחר כך את x₂ עם מינוס לפני השורש. בסוף חלקו גם במכנה (2a = 4).",
            "ru": "x₁ = (10 + 6) / 4. Посчитай, потом x₂ с минусом перед корнем. Не забудь разделить на знаменатель (2a = 4).",
            "en": "x₁ = (10 + 6) / 4. Work it out, then x₂ with a minus before the root. Don't forget to divide by 2a = 4."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 2,  b = −10,  c = 8",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = (−10)² − 4 × 2 × 8",
          "D = 100 − 64",
          "D = 36",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √36 = 6",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "−b = −(−10) = 10",
          "x₁ = (10 + 6) / (2 × 2)",
          "x₁ = 16 / 4",
          "x₁ = 4",
          "x₂ = (10 − 6) / (2 × 2)",
          "x₂ = 4 / 4",
          "x₂ = 1",
          {
            "he": "תשובה: x₁ = 4,  x₂ = 1",
            "ru": "Ответ: x₁ = 4,  x₂ = 1",
            "en": "Answer: x₁ = 4,  x₂ = 1"
          }
        ]
      },
      {
        "id": "t2-12",
        "group": "2",
        "label": "2יב",
        "kind": "roots",
        "text": "15x² − 8x + 1 = 0",
        "example": {
          "he": "המשוואה:\n```\n6x² − 5x + 1 = 0\na = 6, b = −5, c = 1\nD = b² − 4ac\n  = (−5)² − 4 × 6 × 1\n  = 25 − 24 = 1\n√D = 1\nx₁ = (−b + √D) / 2a\n   = (5 + 1) / 12 = 1/2\nx₂ = (−b − √D) / 2a\n   = (5 − 1) / 12 = 1/3\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\n6x² − 5x + 1 = 0\na = 6, b = −5, c = 1\nD = b² − 4ac\n  = (−5)² − 4 × 6 × 1\n  = 25 − 24 = 1\n√D = 1\nx₁ = (−b + √D) / 2a\n   = (5 + 1) / 12 = 1/2\nx₂ = (−b − √D) / 2a\n   = (5 − 1) / 12 = 1/3\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\n6x² − 5x + 1 = 0\na = 6, b = −5, c = 1\nD = b² − 4ac\n  = (−5)² − 4 × 6 × 1\n  = 25 − 24 = 1\n√D = 1\nx₁ = (−b + √D) / 2a\n   = (5 + 1) / 12 = 1/2\nx₂ = (−b − √D) / 2a\n   = (5 − 1) / 12 = 1/3\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "1/3",
            "1/5"
          ],
          "abc": [
            "15",
            "-8",
            "1"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 15, b = −8, c = 1. אחר כך חשבו D = b² − 4ac. שימו לב: b שלילי, לכן b² = (−8)² = 64 — עם סוגריים, כי מספר שלילי בריבוע יוצא חיובי.",
            "ru": "Начни с коэффициентов: a = 15, b = −8, c = 1. Потом посчитай D = b² − 4ac. Внимание: b отрицательное, поэтому b² = (−8)² = 64 — в скобках, ведь отрицательное число в квадрате положительно.",
            "en": "Start with the coefficients: a = 15, b = −8, c = 1. Then compute D = b² − 4ac. Careful: b is negative, so b² = (−8)² = 64 — use brackets, a negative number squared is positive."
          },
          {
            "he": "D = 4, ולכן √D = 2. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 4, значит √D = 2. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 4, so √D = 2. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          },
          {
            "he": "x₁ = (8 + 2) / 30. חשבו את זה, ואחר כך את x₂ עם מינוס לפני השורש. בסוף חלקו גם במכנה (2a = 30).",
            "ru": "x₁ = (8 + 2) / 30. Посчитай, потом x₂ с минусом перед корнем. Не забудь разделить на знаменатель (2a = 30).",
            "en": "x₁ = (8 + 2) / 30. Work it out, then x₂ with a minus before the root. Don't forget to divide by 2a = 30."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 15,  b = −8,  c = 1",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = (−8)² − 4 × 15 × 1",
          "D = 64 − 60",
          "D = 4",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √4 = 2",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "−b = −(−8) = 8",
          "x₁ = (8 + 2) / (2 × 15)",
          "x₁ = 10 / 30",
          "x₁ = 1/3",
          "x₂ = (8 − 2) / (2 × 15)",
          "x₂ = 6 / 30",
          "x₂ = 1/5",
          {
            "he": "תשובה: x₁ = 1/3,  x₂ = 1/5",
            "ru": "Ответ: x₁ = 1/3,  x₂ = 1/5",
            "en": "Answer: x₁ = 1/3,  x₂ = 1/5"
          }
        ]
      },
      {
        "id": "t2-13",
        "group": "2",
        "label": "2יג",
        "kind": "roots",
        "text": "x² + 2x − 15 = 0",
        "example": {
          "he": "המשוואה:\n```\nx² + 2x − 8 = 0\na = 1, b = 2, c = −8\nD = b² − 4ac\n  = 2² − 4 × 1 × (−8)\n  = 4 − (−32) = 36\n√D = 6\nx₁ = (−b + √D) / 2a\n   = (−2 + 6) / 2 = 2\nx₂ = (−b − √D) / 2a\n   = (−2 − 6) / 2 = −4\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\nx² + 2x − 8 = 0\na = 1, b = 2, c = −8\nD = b² − 4ac\n  = 2² − 4 × 1 × (−8)\n  = 4 − (−32) = 36\n√D = 6\nx₁ = (−b + √D) / 2a\n   = (−2 + 6) / 2 = 2\nx₂ = (−b − √D) / 2a\n   = (−2 − 6) / 2 = −4\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\nx² + 2x − 8 = 0\na = 1, b = 2, c = −8\nD = b² − 4ac\n  = 2² − 4 × 1 × (−8)\n  = 4 − (−32) = 36\n√D = 6\nx₁ = (−b + √D) / 2a\n   = (−2 + 6) / 2 = 2\nx₂ = (−b − √D) / 2a\n   = (−2 − 6) / 2 = −4\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "3",
            "-5"
          ],
          "abc": [
            "1",
            "2",
            "-15"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 1, b = 2, c = −15. אחר כך חשבו D = b² − 4ac.",
            "ru": "Начни с коэффициентов: a = 1, b = 2, c = −15. Потом посчитай D = b² − 4ac.",
            "en": "Start with the coefficients: a = 1, b = 2, c = −15. Then compute D = b² − 4ac."
          },
          {
            "he": "D = 64, ולכן √D = 8. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 64, значит √D = 8. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 64, so √D = 8. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          },
          {
            "he": "x₁ = (−2 + 8) / 2. חשבו את זה, ואחר כך את x₂ עם מינוס לפני השורש. בסוף חלקו גם במכנה (2a = 2).",
            "ru": "x₁ = (−2 + 8) / 2. Посчитай, потом x₂ с минусом перед корнем. Не забудь разделить на знаменатель (2a = 2).",
            "en": "x₁ = (−2 + 8) / 2. Work it out, then x₂ with a minus before the root. Don't forget to divide by 2a = 2."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 1,  b = 2,  c = −15",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 2² − 4 × 1 × (−15)",
          "D = 4 − (−60)",
          "D = 4 + 60",
          "D = 64",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √64 = 8",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "x₁ = (−2 + 8) / (2 × 1)",
          "x₁ = 6 / 2",
          "x₁ = 3",
          "x₂ = (−2 − 8) / (2 × 1)",
          "x₂ = −10 / 2",
          "x₂ = −5",
          {
            "he": "תשובה: x₁ = 3,  x₂ = −5",
            "ru": "Ответ: x₁ = 3,  x₂ = −5",
            "en": "Answer: x₁ = 3,  x₂ = −5"
          }
        ]
      },
      {
        "id": "t2-14",
        "group": "2",
        "label": "2יד",
        "kind": "roots",
        "text": "5x² + 5x − 10 = 0",
        "example": {
          "he": "המשוואה:\n```\n2x² + 4x − 6 = 0\na = 2, b = 4, c = −6\nD = b² − 4ac\n  = 4² − 4 × 2 × (−6)\n  = 16 − (−48) = 64\n√D = 8\nx₁ = (−b + √D) / 2a\n   = (−4 + 8) / 4 = 1\nx₂ = (−b − √D) / 2a\n   = (−4 − 8) / 4 = −3\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\n2x² + 4x − 6 = 0\na = 2, b = 4, c = −6\nD = b² − 4ac\n  = 4² − 4 × 2 × (−6)\n  = 16 − (−48) = 64\n√D = 8\nx₁ = (−b + √D) / 2a\n   = (−4 + 8) / 4 = 1\nx₂ = (−b − √D) / 2a\n   = (−4 − 8) / 4 = −3\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\n2x² + 4x − 6 = 0\na = 2, b = 4, c = −6\nD = b² − 4ac\n  = 4² − 4 × 2 × (−6)\n  = 16 − (−48) = 64\n√D = 8\nx₁ = (−b + √D) / 2a\n   = (−4 + 8) / 4 = 1\nx₂ = (−b − √D) / 2a\n   = (−4 − 8) / 4 = −3\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "1",
            "-2"
          ],
          "abc": [
            "5",
            "5",
            "-10"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 5, b = 5, c = −10. אחר כך חשבו D = b² − 4ac.",
            "ru": "Начни с коэффициентов: a = 5, b = 5, c = −10. Потом посчитай D = b² − 4ac.",
            "en": "Start with the coefficients: a = 5, b = 5, c = −10. Then compute D = b² − 4ac."
          },
          {
            "he": "D = 225, ולכן √D = 15. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 225, значит √D = 15. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 225, so √D = 15. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          },
          {
            "he": "x₁ = (−5 + 15) / 10. חשבו את זה, ואחר כך את x₂ עם מינוס לפני השורש. בסוף חלקו גם במכנה (2a = 10).",
            "ru": "x₁ = (−5 + 15) / 10. Посчитай, потом x₂ с минусом перед корнем. Не забудь разделить на знаменатель (2a = 10).",
            "en": "x₁ = (−5 + 15) / 10. Work it out, then x₂ with a minus before the root. Don't forget to divide by 2a = 10."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 5,  b = 5,  c = −10",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 5² − 4 × 5 × (−10)",
          "D = 25 − (−200)",
          "D = 25 + 200",
          "D = 225",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √225 = 15",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "x₁ = (−5 + 15) / (2 × 5)",
          "x₁ = 10 / 10",
          "x₁ = 1",
          "x₂ = (−5 − 15) / (2 × 5)",
          "x₂ = −20 / 10",
          "x₂ = −2",
          {
            "he": "תשובה: x₁ = 1,  x₂ = −2",
            "ru": "Ответ: x₁ = 1,  x₂ = −2",
            "en": "Answer: x₁ = 1,  x₂ = −2"
          }
        ]
      },
      {
        "id": "t2-15",
        "group": "2",
        "label": "2טו",
        "kind": "roots",
        "text": "6x² + x − 1 = 0",
        "example": {
          "he": "המשוואה:\n```\n2x² + x − 1 = 0\na = 2, b = 1, c = −1\nD = b² − 4ac\n  = 1² − 4 × 2 × (−1)\n  = 1 − (−8) = 9\n√D = 3\nx₁ = (−b + √D) / 2a\n   = (−1 + 3) / 4 = 1/2\nx₂ = (−b − √D) / 2a\n   = (−1 − 3) / 4 = −1\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\n2x² + x − 1 = 0\na = 2, b = 1, c = −1\nD = b² − 4ac\n  = 1² − 4 × 2 × (−1)\n  = 1 − (−8) = 9\n√D = 3\nx₁ = (−b + √D) / 2a\n   = (−1 + 3) / 4 = 1/2\nx₂ = (−b − √D) / 2a\n   = (−1 − 3) / 4 = −1\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\n2x² + x − 1 = 0\na = 2, b = 1, c = −1\nD = b² − 4ac\n  = 1² − 4 × 2 × (−1)\n  = 1 − (−8) = 9\n√D = 3\nx₁ = (−b + √D) / 2a\n   = (−1 + 3) / 4 = 1/2\nx₂ = (−b − √D) / 2a\n   = (−1 − 3) / 4 = −1\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "1/3",
            "-1/2"
          ],
          "abc": [
            "6",
            "1",
            "-1"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 6, b = 1, c = −1. אחר כך חשבו D = b² − 4ac.",
            "ru": "Начни с коэффициентов: a = 6, b = 1, c = −1. Потом посчитай D = b² − 4ac.",
            "en": "Start with the coefficients: a = 6, b = 1, c = −1. Then compute D = b² − 4ac."
          },
          {
            "he": "D = 25, ולכן √D = 5. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 25, значит √D = 5. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 25, so √D = 5. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          },
          {
            "he": "x₁ = (−1 + 5) / 12. חשבו את זה, ואחר כך את x₂ עם מינוס לפני השורש. בסוף חלקו גם במכנה (2a = 12).",
            "ru": "x₁ = (−1 + 5) / 12. Посчитай, потом x₂ с минусом перед корнем. Не забудь разделить на знаменатель (2a = 12).",
            "en": "x₁ = (−1 + 5) / 12. Work it out, then x₂ with a minus before the root. Don't forget to divide by 2a = 12."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 6,  b = 1,  c = −1",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 1² − 4 × 6 × (−1)",
          "D = 1 − (−24)",
          "D = 1 + 24",
          "D = 25",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √25 = 5",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "x₁ = (−1 + 5) / (2 × 6)",
          "x₁ = 4 / 12",
          "x₁ = 1/3",
          "x₂ = (−1 − 5) / (2 × 6)",
          "x₂ = −6 / 12",
          "x₂ = −1/2",
          {
            "he": "תשובה: x₁ = 1/3,  x₂ = −1/2",
            "ru": "Ответ: x₁ = 1/3,  x₂ = −1/2",
            "en": "Answer: x₁ = 1/3,  x₂ = −1/2"
          }
        ]
      },
      {
        "id": "t2-16",
        "group": "2",
        "label": "2טז",
        "kind": "roots",
        "text": "x² − 2x − 24 = 0",
        "example": {
          "he": "המשוואה:\n```\nx² − 2x − 15 = 0\na = 1, b = −2, c = −15\nD = b² − 4ac\n  = (−2)² − 4 × 1 × (−15)\n  = 4 − (−60) = 64\n√D = 8\nx₁ = (−b + √D) / 2a\n   = (2 + 8) / 2 = 5\nx₂ = (−b − √D) / 2a\n   = (2 − 8) / 2 = −3\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\nx² − 2x − 15 = 0\na = 1, b = −2, c = −15\nD = b² − 4ac\n  = (−2)² − 4 × 1 × (−15)\n  = 4 − (−60) = 64\n√D = 8\nx₁ = (−b + √D) / 2a\n   = (2 + 8) / 2 = 5\nx₂ = (−b − √D) / 2a\n   = (2 − 8) / 2 = −3\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\nx² − 2x − 15 = 0\na = 1, b = −2, c = −15\nD = b² − 4ac\n  = (−2)² − 4 × 1 × (−15)\n  = 4 − (−60) = 64\n√D = 8\nx₁ = (−b + √D) / 2a\n   = (2 + 8) / 2 = 5\nx₂ = (−b − √D) / 2a\n   = (2 − 8) / 2 = −3\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "6",
            "-4"
          ],
          "abc": [
            "1",
            "-2",
            "-24"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 1, b = −2, c = −24. אחר כך חשבו D = b² − 4ac. שימו לב: b שלילי, לכן b² = (−2)² = 4 — עם סוגריים, כי מספר שלילי בריבוע יוצא חיובי.",
            "ru": "Начни с коэффициентов: a = 1, b = −2, c = −24. Потом посчитай D = b² − 4ac. Внимание: b отрицательное, поэтому b² = (−2)² = 4 — в скобках, ведь отрицательное число в квадрате положительно.",
            "en": "Start with the coefficients: a = 1, b = −2, c = −24. Then compute D = b² − 4ac. Careful: b is negative, so b² = (−2)² = 4 — use brackets, a negative number squared is positive."
          },
          {
            "he": "D = 100, ולכן √D = 10. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 100, значит √D = 10. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 100, so √D = 10. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          },
          {
            "he": "x₁ = (2 + 10) / 2. חשבו את זה, ואחר כך את x₂ עם מינוס לפני השורש. בסוף חלקו גם במכנה (2a = 2).",
            "ru": "x₁ = (2 + 10) / 2. Посчитай, потом x₂ с минусом перед корнем. Не забудь разделить на знаменатель (2a = 2).",
            "en": "x₁ = (2 + 10) / 2. Work it out, then x₂ with a minus before the root. Don't forget to divide by 2a = 2."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 1,  b = −2,  c = −24",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = (−2)² − 4 × 1 × (−24)",
          "D = 4 − (−96)",
          "D = 4 + 96",
          "D = 100",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √100 = 10",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "−b = −(−2) = 2",
          "x₁ = (2 + 10) / (2 × 1)",
          "x₁ = 12 / 2",
          "x₁ = 6",
          "x₂ = (2 − 10) / (2 × 1)",
          "x₂ = −8 / 2",
          "x₂ = −4",
          {
            "he": "תשובה: x₁ = 6,  x₂ = −4",
            "ru": "Ответ: x₁ = 6,  x₂ = −4",
            "en": "Answer: x₁ = 6,  x₂ = −4"
          }
        ]
      },
      {
        "id": "t2-17",
        "group": "2",
        "label": "2יז",
        "kind": "roots",
        "text": "7x² − 7x − 14 = 0",
        "example": {
          "he": "המשוואה:\n```\n3x² − 6x − 9 = 0\na = 3, b = −6, c = −9\nD = b² − 4ac\n  = (−6)² − 4 × 3 × (−9)\n  = 36 − (−108) = 144\n√D = 12\nx₁ = (−b + √D) / 2a\n   = (6 + 12) / 6 = 3\nx₂ = (−b − √D) / 2a\n   = (6 − 12) / 6 = −1\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\n3x² − 6x − 9 = 0\na = 3, b = −6, c = −9\nD = b² − 4ac\n  = (−6)² − 4 × 3 × (−9)\n  = 36 − (−108) = 144\n√D = 12\nx₁ = (−b + √D) / 2a\n   = (6 + 12) / 6 = 3\nx₂ = (−b − √D) / 2a\n   = (6 − 12) / 6 = −1\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\n3x² − 6x − 9 = 0\na = 3, b = −6, c = −9\nD = b² − 4ac\n  = (−6)² − 4 × 3 × (−9)\n  = 36 − (−108) = 144\n√D = 12\nx₁ = (−b + √D) / 2a\n   = (6 + 12) / 6 = 3\nx₂ = (−b − √D) / 2a\n   = (6 − 12) / 6 = −1\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "2",
            "-1"
          ],
          "abc": [
            "7",
            "-7",
            "-14"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 7, b = −7, c = −14. אחר כך חשבו D = b² − 4ac. שימו לב: b שלילי, לכן b² = (−7)² = 49 — עם סוגריים, כי מספר שלילי בריבוע יוצא חיובי.",
            "ru": "Начни с коэффициентов: a = 7, b = −7, c = −14. Потом посчитай D = b² − 4ac. Внимание: b отрицательное, поэтому b² = (−7)² = 49 — в скобках, ведь отрицательное число в квадрате положительно.",
            "en": "Start with the coefficients: a = 7, b = −7, c = −14. Then compute D = b² − 4ac. Careful: b is negative, so b² = (−7)² = 49 — use brackets, a negative number squared is positive."
          },
          {
            "he": "D = 441, ולכן √D = 21. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 441, значит √D = 21. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 441, so √D = 21. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          },
          {
            "he": "x₁ = (7 + 21) / 14. חשבו את זה, ואחר כך את x₂ עם מינוס לפני השורש. בסוף חלקו גם במכנה (2a = 14).",
            "ru": "x₁ = (7 + 21) / 14. Посчитай, потом x₂ с минусом перед корнем. Не забудь разделить на знаменатель (2a = 14).",
            "en": "x₁ = (7 + 21) / 14. Work it out, then x₂ with a minus before the root. Don't forget to divide by 2a = 14."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 7,  b = −7,  c = −14",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = (−7)² − 4 × 7 × (−14)",
          "D = 49 − (−392)",
          "D = 49 + 392",
          "D = 441",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √441 = 21",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "−b = −(−7) = 7",
          "x₁ = (7 + 21) / (2 × 7)",
          "x₁ = 28 / 14",
          "x₁ = 2",
          "x₂ = (7 − 21) / (2 × 7)",
          "x₂ = −14 / 14",
          "x₂ = −1",
          {
            "he": "תשובה: x₁ = 2,  x₂ = −1",
            "ru": "Ответ: x₁ = 2,  x₂ = −1",
            "en": "Answer: x₁ = 2,  x₂ = −1"
          },
          {
            "he": "בדיקה בדרך הקצרה: a + c = 7 + (−14) = −7 = b, ולכן x₁ = −1 ו־x₂ = −c/a = 2",
            "ru": "Проверка коротким способом: a + c = 7 + (−14) = −7 = b, значит x₁ = −1, x₂ = −c/a = 2",
            "en": "Shortcut check: a + c = 7 + (−14) = −7 = b, so x₁ = −1 and x₂ = −c/a = 2"
          }
        ]
      },
      {
        "id": "t2-18",
        "group": "2",
        "label": "2יח",
        "kind": "roots",
        "text": "20x² − x − 1 = 0",
        "example": {
          "he": "המשוואה:\n```\n6x² − x − 1 = 0\na = 6, b = −1, c = −1\nD = b² − 4ac\n  = (−1)² − 4 × 6 × (−1)\n  = 1 − (−24) = 25\n√D = 5\nx₁ = (−b + √D) / 2a\n   = (1 + 5) / 12 = 1/2\nx₂ = (−b − √D) / 2a\n   = (1 − 5) / 12 = −1/3\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\n6x² − x − 1 = 0\na = 6, b = −1, c = −1\nD = b² − 4ac\n  = (−1)² − 4 × 6 × (−1)\n  = 1 − (−24) = 25\n√D = 5\nx₁ = (−b + √D) / 2a\n   = (1 + 5) / 12 = 1/2\nx₂ = (−b − √D) / 2a\n   = (1 − 5) / 12 = −1/3\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\n6x² − x − 1 = 0\na = 6, b = −1, c = −1\nD = b² − 4ac\n  = (−1)² − 4 × 6 × (−1)\n  = 1 − (−24) = 25\n√D = 5\nx₁ = (−b + √D) / 2a\n   = (1 + 5) / 12 = 1/2\nx₂ = (−b − √D) / 2a\n   = (1 − 5) / 12 = −1/3\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "1/4",
            "-1/5"
          ],
          "abc": [
            "20",
            "-1",
            "-1"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 20, b = −1, c = −1. אחר כך חשבו D = b² − 4ac. שימו לב: b שלילי, לכן b² = (−1)² = 1 — עם סוגריים, כי מספר שלילי בריבוע יוצא חיובי.",
            "ru": "Начни с коэффициентов: a = 20, b = −1, c = −1. Потом посчитай D = b² − 4ac. Внимание: b отрицательное, поэтому b² = (−1)² = 1 — в скобках, ведь отрицательное число в квадрате положительно.",
            "en": "Start with the coefficients: a = 20, b = −1, c = −1. Then compute D = b² − 4ac. Careful: b is negative, so b² = (−1)² = 1 — use brackets, a negative number squared is positive."
          },
          {
            "he": "D = 81, ולכן √D = 9. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 81, значит √D = 9. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 81, so √D = 9. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          },
          {
            "he": "x₁ = (1 + 9) / 40. חשבו את זה, ואחר כך את x₂ עם מינוס לפני השורש. בסוף חלקו גם במכנה (2a = 40).",
            "ru": "x₁ = (1 + 9) / 40. Посчитай, потом x₂ с минусом перед корнем. Не забудь разделить на знаменатель (2a = 40).",
            "en": "x₁ = (1 + 9) / 40. Work it out, then x₂ with a minus before the root. Don't forget to divide by 2a = 40."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 20,  b = −1,  c = −1",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = (−1)² − 4 × 20 × (−1)",
          "D = 1 − (−80)",
          "D = 1 + 80",
          "D = 81",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √81 = 9",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "−b = −(−1) = 1",
          "x₁ = (1 + 9) / (2 × 20)",
          "x₁ = 10 / 40",
          "x₁ = 1/4",
          "x₂ = (1 − 9) / (2 × 20)",
          "x₂ = −8 / 40",
          "x₂ = −1/5",
          {
            "he": "תשובה: x₁ = 1/4,  x₂ = −1/5",
            "ru": "Ответ: x₁ = 1/4,  x₂ = −1/5",
            "en": "Answer: x₁ = 1/4,  x₂ = −1/5"
          }
        ]
      },
      {
        "id": "t2-19",
        "group": "2",
        "label": "2יט",
        "kind": "roots",
        "text": "−x² − 9x − 20 = 0",
        "example": {
          "he": "המשוואה:\n```\n−x² − 3x − 2 = 0\na = −1, b = −3, c = −2\nD = b² − 4ac\n  = (−3)² − 4 × (−1) × (−2)\n  = 9 − 8 = 1\n√D = 1\nx₁ = (−b + √D) / 2a\n   = (3 + 1) / (−2) = −2\nx₂ = (−b − √D) / 2a\n   = (3 − 1) / (−2) = −1\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\n−x² − 3x − 2 = 0\na = −1, b = −3, c = −2\nD = b² − 4ac\n  = (−3)² − 4 × (−1) × (−2)\n  = 9 − 8 = 1\n√D = 1\nx₁ = (−b + √D) / 2a\n   = (3 + 1) / (−2) = −2\nx₂ = (−b − √D) / 2a\n   = (3 − 1) / (−2) = −1\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\n−x² − 3x − 2 = 0\na = −1, b = −3, c = −2\nD = b² − 4ac\n  = (−3)² − 4 × (−1) × (−2)\n  = 9 − 8 = 1\n√D = 1\nx₁ = (−b + √D) / 2a\n   = (3 + 1) / (−2) = −2\nx₂ = (−b − √D) / 2a\n   = (3 − 1) / (−2) = −1\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "-5",
            "-4"
          ],
          "abc": [
            "-1",
            "-9",
            "-20"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = −1, b = −9, c = −20. אחר כך חשבו D = b² − 4ac. שימו לב: b שלילי, לכן b² = (−9)² = 81 — עם סוגריים, כי מספר שלילי בריבוע יוצא חיובי.",
            "ru": "Начни с коэффициентов: a = −1, b = −9, c = −20. Потом посчитай D = b² − 4ac. Внимание: b отрицательное, поэтому b² = (−9)² = 81 — в скобках, ведь отрицательное число в квадрате положительно.",
            "en": "Start with the coefficients: a = −1, b = −9, c = −20. Then compute D = b² − 4ac. Careful: b is negative, so b² = (−9)² = 81 — use brackets, a negative number squared is positive."
          },
          {
            "he": "D = 1, ולכן √D = 1. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 1, значит √D = 1. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 1, so √D = 1. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          },
          {
            "he": "x₁ = (9 + 1) / (−2). חשבו את זה, ואחר כך את x₂ עם מינוס לפני השורש. בסוף חלקו גם במכנה (2a = −2).",
            "ru": "x₁ = (9 + 1) / (−2). Посчитай, потом x₂ с минусом перед корнем. Не забудь разделить на знаменатель (2a = −2).",
            "en": "x₁ = (9 + 1) / (−2). Work it out, then x₂ with a minus before the root. Don't forget to divide by 2a = −2."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = −1,  b = −9,  c = −20",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = (−9)² − 4 × (−1) × (−20)",
          "D = 81 − 80",
          "D = 1",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √1 = 1",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "−b = −(−9) = 9",
          "x₁ = (9 + 1) / (2 × (−1))",
          "x₁ = 10 / (−2)",
          "x₁ = −5",
          "x₂ = (9 − 1) / (2 × (−1))",
          "x₂ = 8 / (−2)",
          "x₂ = −4",
          {
            "he": "תשובה: x₁ = −5,  x₂ = −4",
            "ru": "Ответ: x₁ = −5,  x₂ = −4",
            "en": "Answer: x₁ = −5,  x₂ = −4"
          }
        ]
      },
      {
        "id": "t2-20",
        "group": "2",
        "label": "2כ",
        "kind": "roots",
        "text": "−4x² − 12x − 8 = 0",
        "example": {
          "he": "המשוואה:\n```\n−2x² − 8x − 6 = 0\na = −2, b = −8, c = −6\nD = b² − 4ac\n  = (−8)² − 4 × (−2) × (−6)\n  = 64 − 48 = 16\n√D = 4\nx₁ = (−b + √D) / 2a\n   = (8 + 4) / (−4) = −3\nx₂ = (−b − √D) / 2a\n   = (8 − 4) / (−4) = −1\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\n−2x² − 8x − 6 = 0\na = −2, b = −8, c = −6\nD = b² − 4ac\n  = (−8)² − 4 × (−2) × (−6)\n  = 64 − 48 = 16\n√D = 4\nx₁ = (−b + √D) / 2a\n   = (8 + 4) / (−4) = −3\nx₂ = (−b − √D) / 2a\n   = (8 − 4) / (−4) = −1\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\n−2x² − 8x − 6 = 0\na = −2, b = −8, c = −6\nD = b² − 4ac\n  = (−8)² − 4 × (−2) × (−6)\n  = 64 − 48 = 16\n√D = 4\nx₁ = (−b + √D) / 2a\n   = (8 + 4) / (−4) = −3\nx₂ = (−b − √D) / 2a\n   = (8 − 4) / (−4) = −1\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "-2",
            "-1"
          ],
          "abc": [
            "-4",
            "-12",
            "-8"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = −4, b = −12, c = −8. אחר כך חשבו D = b² − 4ac. שימו לב: b שלילי, לכן b² = (−12)² = 144 — עם סוגריים, כי מספר שלילי בריבוע יוצא חיובי.",
            "ru": "Начни с коэффициентов: a = −4, b = −12, c = −8. Потом посчитай D = b² − 4ac. Внимание: b отрицательное, поэтому b² = (−12)² = 144 — в скобках, ведь отрицательное число в квадрате положительно.",
            "en": "Start with the coefficients: a = −4, b = −12, c = −8. Then compute D = b² − 4ac. Careful: b is negative, so b² = (−12)² = 144 — use brackets, a negative number squared is positive."
          },
          {
            "he": "D = 16, ולכן √D = 4. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 16, значит √D = 4. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 16, so √D = 4. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          },
          {
            "he": "x₁ = (12 + 4) / (−8). חשבו את זה, ואחר כך את x₂ עם מינוס לפני השורש. בסוף חלקו גם במכנה (2a = −8).",
            "ru": "x₁ = (12 + 4) / (−8). Посчитай, потом x₂ с минусом перед корнем. Не забудь разделить на знаменатель (2a = −8).",
            "en": "x₁ = (12 + 4) / (−8). Work it out, then x₂ with a minus before the root. Don't forget to divide by 2a = −8."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = −4,  b = −12,  c = −8",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = (−12)² − 4 × (−4) × (−8)",
          "D = 144 − 128",
          "D = 16",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √16 = 4",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "−b = −(−12) = 12",
          "x₁ = (12 + 4) / (2 × (−4))",
          "x₁ = 16 / (−8)",
          "x₁ = −2",
          "x₂ = (12 − 4) / (2 × (−4))",
          "x₂ = 8 / (−8)",
          "x₂ = −1",
          {
            "he": "תשובה: x₁ = −2,  x₂ = −1",
            "ru": "Ответ: x₁ = −2,  x₂ = −1",
            "en": "Answer: x₁ = −2,  x₂ = −1"
          },
          {
            "he": "בדיקה בדרך הקצרה: a + c = (−4) + (−8) = −12 = b, ולכן x₁ = −1 ו־x₂ = −c/a = −2",
            "ru": "Проверка коротким способом: a + c = (−4) + (−8) = −12 = b, значит x₁ = −1, x₂ = −c/a = −2",
            "en": "Shortcut check: a + c = (−4) + (−8) = −12 = b, so x₁ = −1 and x₂ = −c/a = −2"
          }
        ]
      },
      {
        "id": "t2-21",
        "group": "2",
        "label": "2כא",
        "kind": "roots",
        "text": "−12x² − 7x − 1 = 0",
        "example": {
          "he": "המשוואה:\n```\n−6x² − 5x − 1 = 0\na = −6, b = −5, c = −1\nD = b² − 4ac\n  = (−5)² − 4 × (−6) × (−1)\n  = 25 − 24 = 1\n√D = 1\nx₁ = (−b + √D) / 2a\n   = (5 + 1) / (−12) = −1/2\nx₂ = (−b − √D) / 2a\n   = (5 − 1) / (−12) = −1/3\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\n−6x² − 5x − 1 = 0\na = −6, b = −5, c = −1\nD = b² − 4ac\n  = (−5)² − 4 × (−6) × (−1)\n  = 25 − 24 = 1\n√D = 1\nx₁ = (−b + √D) / 2a\n   = (5 + 1) / (−12) = −1/2\nx₂ = (−b − √D) / 2a\n   = (5 − 1) / (−12) = −1/3\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\n−6x² − 5x − 1 = 0\na = −6, b = −5, c = −1\nD = b² − 4ac\n  = (−5)² − 4 × (−6) × (−1)\n  = 25 − 24 = 1\n√D = 1\nx₁ = (−b + √D) / 2a\n   = (5 + 1) / (−12) = −1/2\nx₂ = (−b − √D) / 2a\n   = (5 − 1) / (−12) = −1/3\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "-1/3",
            "-1/4"
          ],
          "abc": [
            "-12",
            "-7",
            "-1"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = −12, b = −7, c = −1. אחר כך חשבו D = b² − 4ac. שימו לב: b שלילי, לכן b² = (−7)² = 49 — עם סוגריים, כי מספר שלילי בריבוע יוצא חיובי.",
            "ru": "Начни с коэффициентов: a = −12, b = −7, c = −1. Потом посчитай D = b² − 4ac. Внимание: b отрицательное, поэтому b² = (−7)² = 49 — в скобках, ведь отрицательное число в квадрате положительно.",
            "en": "Start with the coefficients: a = −12, b = −7, c = −1. Then compute D = b² − 4ac. Careful: b is negative, so b² = (−7)² = 49 — use brackets, a negative number squared is positive."
          },
          {
            "he": "D = 1, ולכן √D = 1. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 1, значит √D = 1. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 1, so √D = 1. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          },
          {
            "he": "x₁ = (7 + 1) / (−24). חשבו את זה, ואחר כך את x₂ עם מינוס לפני השורש. בסוף חלקו גם במכנה (2a = −24).",
            "ru": "x₁ = (7 + 1) / (−24). Посчитай, потом x₂ с минусом перед корнем. Не забудь разделить на знаменатель (2a = −24).",
            "en": "x₁ = (7 + 1) / (−24). Work it out, then x₂ with a minus before the root. Don't forget to divide by 2a = −24."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = −12,  b = −7,  c = −1",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = (−7)² − 4 × (−12) × (−1)",
          "D = 49 − 48",
          "D = 1",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √1 = 1",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "−b = −(−7) = 7",
          "x₁ = (7 + 1) / (2 × (−12))",
          "x₁ = 8 / (−24)",
          "x₁ = −1/3",
          "x₂ = (7 − 1) / (2 × (−12))",
          "x₂ = 6 / (−24)",
          "x₂ = −1/4",
          {
            "he": "תשובה: x₁ = −1/3,  x₂ = −1/4",
            "ru": "Ответ: x₁ = −1/3,  x₂ = −1/4",
            "en": "Answer: x₁ = −1/3,  x₂ = −1/4"
          }
        ]
      },
      {
        "id": "t3-1",
        "group": "3",
        "label": "3א",
        "kind": "roots",
        "text": "x² + 4x + 4 = 0",
        "example": {
          "he": "המשוואה:\n```\nx² + 10x + 25 = 0\na = 1, b = 10, c = 25\nD = b² − 4ac\n  = 10² − 4 × 1 × 25\n  = 100 − 100 = 0\nx = −b / 2a\n  = −10 / 2 = −5\n```\n`D = 0` → פתרון אחד.",
          "ru": "Уравнение:\n```\nx² + 10x + 25 = 0\na = 1, b = 10, c = 25\nD = b² − 4ac\n  = 10² − 4 × 1 × 25\n  = 100 − 100 = 0\nx = −b / 2a\n  = −10 / 2 = −5\n```\n`D = 0` → одно решение.",
          "en": "Equation:\n```\nx² + 10x + 25 = 0\na = 1, b = 10, c = 25\nD = b² − 4ac\n  = 10² − 4 × 1 × 25\n  = 100 − 100 = 0\nx = −b / 2a\n  = −10 / 2 = −5\n```\n`D = 0` → one solution."
        },
        "answer": {
          "roots": [
            "-2"
          ],
          "abc": [
            "1",
            "4",
            "4"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 1, b = 4, c = 4. אחר כך חשבו D = b² − 4ac.",
            "ru": "Начни с коэффициентов: a = 1, b = 4, c = 4. Потом посчитай D = b² − 4ac.",
            "en": "Start with the coefficients: a = 1, b = 4, c = 4. Then compute D = b² − 4ac."
          },
          {
            "he": "D = 0. כשהדיסקרימיננטה שווה לאפס יש פתרון אחד בלבד: x = −b / (2a).",
            "ru": "D = 0. Когда дискриминант равен нулю, корень один: x = −b / (2a).",
            "en": "D = 0. When the discriminant is zero there is only one root: x = −b / (2a)."
          },
          {
            "he": "x = −4 / 2. מספיק לכתוב ערך אחד.",
            "ru": "x = −4 / 2. Достаточно написать одно число.",
            "en": "x = −4 / 2. One value is enough."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 1,  b = 4,  c = 4",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 4² − 4 × 1 × 4",
          "D = 16 − 16",
          "D = 0",
          {
            "he": "D = 0 — יש פתרון אחד בלבד",
            "ru": "D = 0 — корень один",
            "en": "D = 0 — there is only one root"
          },
          "x = −b / (2a)",
          "x = (−4) / (2 × 1)",
          "x = −4 / 2",
          "x = −2",
          {
            "he": "תשובה: x = −2 (פתרון אחד)",
            "ru": "Ответ: x = −2 (один корень)",
            "en": "Answer: x = −2 (one root)"
          }
        ]
      },
      {
        "id": "t3-2",
        "group": "3",
        "label": "3ב",
        "kind": "roots",
        "text": "x² − 12x + 36 = 0",
        "example": {
          "he": "המשוואה:\n```\nx² − 8x + 16 = 0\na = 1, b = −8, c = 16\nD = b² − 4ac\n  = (−8)² − 4 × 1 × 16\n  = 64 − 64 = 0\nx = −b / 2a\n  = 8 / 2 = 4\n```\n`D = 0` → פתרון אחד.",
          "ru": "Уравнение:\n```\nx² − 8x + 16 = 0\na = 1, b = −8, c = 16\nD = b² − 4ac\n  = (−8)² − 4 × 1 × 16\n  = 64 − 64 = 0\nx = −b / 2a\n  = 8 / 2 = 4\n```\n`D = 0` → одно решение.",
          "en": "Equation:\n```\nx² − 8x + 16 = 0\na = 1, b = −8, c = 16\nD = b² − 4ac\n  = (−8)² − 4 × 1 × 16\n  = 64 − 64 = 0\nx = −b / 2a\n  = 8 / 2 = 4\n```\n`D = 0` → one solution."
        },
        "answer": {
          "roots": [
            "6"
          ],
          "abc": [
            "1",
            "-12",
            "36"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 1, b = −12, c = 36. אחר כך חשבו D = b² − 4ac. שימו לב: b שלילי, לכן b² = (−12)² = 144 — עם סוגריים, כי מספר שלילי בריבוע יוצא חיובי.",
            "ru": "Начни с коэффициентов: a = 1, b = −12, c = 36. Потом посчитай D = b² − 4ac. Внимание: b отрицательное, поэтому b² = (−12)² = 144 — в скобках, ведь отрицательное число в квадрате положительно.",
            "en": "Start with the coefficients: a = 1, b = −12, c = 36. Then compute D = b² − 4ac. Careful: b is negative, so b² = (−12)² = 144 — use brackets, a negative number squared is positive."
          },
          {
            "he": "D = 0. כשהדיסקרימיננטה שווה לאפס יש פתרון אחד בלבד: x = −b / (2a).",
            "ru": "D = 0. Когда дискриминант равен нулю, корень один: x = −b / (2a).",
            "en": "D = 0. When the discriminant is zero there is only one root: x = −b / (2a)."
          },
          {
            "he": "x = 12 / 2. מספיק לכתוב ערך אחד.",
            "ru": "x = 12 / 2. Достаточно написать одно число.",
            "en": "x = 12 / 2. One value is enough."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 1,  b = −12,  c = 36",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = (−12)² − 4 × 1 × 36",
          "D = 144 − 144",
          "D = 0",
          {
            "he": "D = 0 — יש פתרון אחד בלבד",
            "ru": "D = 0 — корень один",
            "en": "D = 0 — there is only one root"
          },
          "x = −b / (2a)",
          "x = 12 / (2 × 1)",
          "x = 12 / 2",
          "x = 6",
          {
            "he": "תשובה: x = 6 (פתרון אחד)",
            "ru": "Ответ: x = 6 (один корень)",
            "en": "Answer: x = 6 (one root)"
          }
        ]
      },
      {
        "id": "t3-3",
        "group": "3",
        "label": "3ג",
        "kind": "roots",
        "text": "x² + 2x + 1 = 0",
        "example": {
          "he": "המשוואה:\n```\nx² − 6x + 9 = 0\na = 1, b = −6, c = 9\nD = b² − 4ac\n  = (−6)² − 4 × 1 × 9\n  = 36 − 36 = 0\nx = −b / 2a\n  = 6 / 2 = 3\n```\n`D = 0` → פתרון אחד.",
          "ru": "Уравнение:\n```\nx² − 6x + 9 = 0\na = 1, b = −6, c = 9\nD = b² − 4ac\n  = (−6)² − 4 × 1 × 9\n  = 36 − 36 = 0\nx = −b / 2a\n  = 6 / 2 = 3\n```\n`D = 0` → одно решение.",
          "en": "Equation:\n```\nx² − 6x + 9 = 0\na = 1, b = −6, c = 9\nD = b² − 4ac\n  = (−6)² − 4 × 1 × 9\n  = 36 − 36 = 0\nx = −b / 2a\n  = 6 / 2 = 3\n```\n`D = 0` → one solution."
        },
        "answer": {
          "roots": [
            "-1"
          ],
          "abc": [
            "1",
            "2",
            "1"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 1, b = 2, c = 1. אחר כך חשבו D = b² − 4ac.",
            "ru": "Начни с коэффициентов: a = 1, b = 2, c = 1. Потом посчитай D = b² − 4ac.",
            "en": "Start with the coefficients: a = 1, b = 2, c = 1. Then compute D = b² − 4ac."
          },
          {
            "he": "D = 0. כשהדיסקרימיננטה שווה לאפס יש פתרון אחד בלבד: x = −b / (2a).",
            "ru": "D = 0. Когда дискриминант равен нулю, корень один: x = −b / (2a).",
            "en": "D = 0. When the discriminant is zero there is only one root: x = −b / (2a)."
          },
          {
            "he": "x = −2 / 2. מספיק לכתוב ערך אחד.",
            "ru": "x = −2 / 2. Достаточно написать одно число.",
            "en": "x = −2 / 2. One value is enough."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 1,  b = 2,  c = 1",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 2² − 4 × 1 × 1",
          "D = 4 − 4",
          "D = 0",
          {
            "he": "D = 0 — יש פתרון אחד בלבד",
            "ru": "D = 0 — корень один",
            "en": "D = 0 — there is only one root"
          },
          "x = −b / (2a)",
          "x = (−2) / (2 × 1)",
          "x = −2 / 2",
          "x = −1",
          {
            "he": "תשובה: x = −1 (פתרון אחד)",
            "ru": "Ответ: x = −1 (один корень)",
            "en": "Answer: x = −1 (one root)"
          }
        ]
      },
      {
        "id": "t3-4",
        "group": "3",
        "label": "3ד",
        "kind": "roots",
        "text": "x² + 2x + 2 = 0",
        "example": {
          "he": "המשוואה:\n```\nx² + x + 1 = 0\na = 1, b = 1, c = 1\nD = b² − 4ac\n  = 1² − 4 × 1 × 1\n  = 1 − 4 = −3\n```\n`D < 0` → אין פתרונות.",
          "ru": "Уравнение:\n```\nx² + x + 1 = 0\na = 1, b = 1, c = 1\nD = b² − 4ac\n  = 1² − 4 × 1 × 1\n  = 1 − 4 = −3\n```\n`D < 0` → решений нет.",
          "en": "Equation:\n```\nx² + x + 1 = 0\na = 1, b = 1, c = 1\nD = b² − 4ac\n  = 1² − 4 × 1 × 1\n  = 1 − 4 = −3\n```\n`D < 0` → no solutions."
        },
        "answer": {
          "roots": [],
          "abc": [
            "1",
            "2",
            "2"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 1, b = 2, c = 2. אחר כך חשבו D = b² − 4ac.",
            "ru": "Начни с коэффициентов: a = 1, b = 2, c = 2. Потом посчитай D = b² − 4ac.",
            "en": "Start with the coefficients: a = 1, b = 2, c = 2. Then compute D = b² − 4ac."
          },
          {
            "he": "D = −4. מה קורה כשצריך להוציא שורש ממספר שלילי?",
            "ru": "D = −4. Что происходит, когда нужно извлечь корень из отрицательного числа?",
            "en": "D = −4. What happens when you need the square root of a negative number?"
          },
          {
            "he": "D שלילי, ולכן למשוואה אין פתרון. כתבו \"אין פתרון\".",
            "ru": "D отрицательный, значит решений нет. Напиши «нет решений».",
            "en": "D is negative, so the equation has no solution. Write \"no solution\"."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 1,  b = 2,  c = 2",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 2² − 4 × 1 × 2",
          "D = 4 − 8",
          "D = −4",
          {
            "he": "D < 0 — אי אפשר להוציא שורש ממספר שלילי, ולכן אין פתרון.",
            "ru": "D < 0 — из отрицательного числа корень не извлекается, поэтому решений нет.",
            "en": "D < 0 — you can't take the square root of a negative number, so there is no solution."
          },
          {
            "he": "תשובה: אין פתרון",
            "ru": "Ответ: решений нет",
            "en": "Answer: no solution"
          }
        ]
      },
      {
        "id": "t3-5",
        "group": "3",
        "label": "3ה",
        "kind": "roots",
        "text": "2x² − 3x + 4 = 0",
        "example": {
          "he": "המשוואה:\n```\n2x² + x + 3 = 0\na = 2, b = 1, c = 3\nD = b² − 4ac\n  = 1² − 4 × 2 × 3\n  = 1 − 24 = −23\n```\n`D < 0` → אין פתרונות.",
          "ru": "Уравнение:\n```\n2x² + x + 3 = 0\na = 2, b = 1, c = 3\nD = b² − 4ac\n  = 1² − 4 × 2 × 3\n  = 1 − 24 = −23\n```\n`D < 0` → решений нет.",
          "en": "Equation:\n```\n2x² + x + 3 = 0\na = 2, b = 1, c = 3\nD = b² − 4ac\n  = 1² − 4 × 2 × 3\n  = 1 − 24 = −23\n```\n`D < 0` → no solutions."
        },
        "answer": {
          "roots": [],
          "abc": [
            "2",
            "-3",
            "4"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 2, b = −3, c = 4. אחר כך חשבו D = b² − 4ac. שימו לב: b שלילי, לכן b² = (−3)² = 9 — עם סוגריים, כי מספר שלילי בריבוע יוצא חיובי.",
            "ru": "Начни с коэффициентов: a = 2, b = −3, c = 4. Потом посчитай D = b² − 4ac. Внимание: b отрицательное, поэтому b² = (−3)² = 9 — в скобках, ведь отрицательное число в квадрате положительно.",
            "en": "Start with the coefficients: a = 2, b = −3, c = 4. Then compute D = b² − 4ac. Careful: b is negative, so b² = (−3)² = 9 — use brackets, a negative number squared is positive."
          },
          {
            "he": "D = −23. מה קורה כשצריך להוציא שורש ממספר שלילי?",
            "ru": "D = −23. Что происходит, когда нужно извлечь корень из отрицательного числа?",
            "en": "D = −23. What happens when you need the square root of a negative number?"
          },
          {
            "he": "D שלילי, ולכן למשוואה אין פתרון. כתבו \"אין פתרון\".",
            "ru": "D отрицательный, значит решений нет. Напиши «нет решений».",
            "en": "D is negative, so the equation has no solution. Write \"no solution\"."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 2,  b = −3,  c = 4",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = (−3)² − 4 × 2 × 4",
          "D = 9 − 32",
          "D = −23",
          {
            "he": "D < 0 — אי אפשר להוציא שורש ממספר שלילי, ולכן אין פתרון.",
            "ru": "D < 0 — из отрицательного числа корень не извлекается, поэтому решений нет.",
            "en": "D < 0 — you can't take the square root of a negative number, so there is no solution."
          },
          {
            "he": "תשובה: אין פתרון",
            "ru": "Ответ: решений нет",
            "en": "Answer: no solution"
          }
        ]
      },
      {
        "id": "t3-6",
        "group": "3",
        "label": "3ו",
        "kind": "roots",
        "text": "3x² + x + 1 = 0",
        "example": {
          "he": "המשוואה:\n```\nx² + 4x + 5 = 0\na = 1, b = 4, c = 5\nD = b² − 4ac\n  = 4² − 4 × 1 × 5\n  = 16 − 20 = −4\n```\n`D < 0` → אין פתרונות.",
          "ru": "Уравнение:\n```\nx² + 4x + 5 = 0\na = 1, b = 4, c = 5\nD = b² − 4ac\n  = 4² − 4 × 1 × 5\n  = 16 − 20 = −4\n```\n`D < 0` → решений нет.",
          "en": "Equation:\n```\nx² + 4x + 5 = 0\na = 1, b = 4, c = 5\nD = b² − 4ac\n  = 4² − 4 × 1 × 5\n  = 16 − 20 = −4\n```\n`D < 0` → no solutions."
        },
        "answer": {
          "roots": [],
          "abc": [
            "3",
            "1",
            "1"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 3, b = 1, c = 1. אחר כך חשבו D = b² − 4ac.",
            "ru": "Начни с коэффициентов: a = 3, b = 1, c = 1. Потом посчитай D = b² − 4ac.",
            "en": "Start with the coefficients: a = 3, b = 1, c = 1. Then compute D = b² − 4ac."
          },
          {
            "he": "D = −11. מה קורה כשצריך להוציא שורש ממספר שלילי?",
            "ru": "D = −11. Что происходит, когда нужно извлечь корень из отрицательного числа?",
            "en": "D = −11. What happens when you need the square root of a negative number?"
          },
          {
            "he": "D שלילי, ולכן למשוואה אין פתרון. כתבו \"אין פתרון\".",
            "ru": "D отрицательный, значит решений нет. Напиши «нет решений».",
            "en": "D is negative, so the equation has no solution. Write \"no solution\"."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 3,  b = 1,  c = 1",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 1² − 4 × 3 × 1",
          "D = 1 − 12",
          "D = −11",
          {
            "he": "D < 0 — אי אפשר להוציא שורש ממספר שלילי, ולכן אין פתרון.",
            "ru": "D < 0 — из отрицательного числа корень не извлекается, поэтому решений нет.",
            "en": "D < 0 — you can't take the square root of a negative number, so there is no solution."
          },
          {
            "he": "תשובה: אין פתרון",
            "ru": "Ответ: решений нет",
            "en": "Answer: no solution"
          }
        ]
      },
      {
        "id": "t12-1",
        "group": "12",
        "label": "12א",
        "kind": "roots",
        "text": "(x − 2)(x + 1) = 2x² − 6x + 4",
        "example": {
          "he": "המשוואה:\n```\n(x − 1)(x + 2) = 2x² − 3x + 1\nx² + x − 2 = 2x² − 3x + 1\n```\nפתחנו סוגריים משמאל. מעבירים הכול לצד אחד (מחסרים את הצד הימני) ומכנסים איברים דומים:\n```\n−x² + 4x − 3 = 0\na = −1, b = 4, c = −3\nD = b² − 4ac\n  = 4² − 4 × (−1) × (−3)\n  = 16 − 12 = 4\n√D = 2\nx₁ = (−b + √D) / 2a\n   = (−4 + 2) / (−2) = 1\nx₂ = (−b − √D) / 2a\n   = (−4 − 2) / (−2) = 3\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\n(x − 1)(x + 2) = 2x² − 3x + 1\nx² + x − 2 = 2x² − 3x + 1\n```\nРаскрыли скобки слева. Переносим всё в одну сторону (правую часть вычитаем) и приводим подобные:\n```\n−x² + 4x − 3 = 0\na = −1, b = 4, c = −3\nD = b² − 4ac\n  = 4² − 4 × (−1) × (−3)\n  = 16 − 12 = 4\n√D = 2\nx₁ = (−b + √D) / 2a\n   = (−4 + 2) / (−2) = 1\nx₂ = (−b − √D) / 2a\n   = (−4 − 2) / (−2) = 3\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\n(x − 1)(x + 2) = 2x² − 3x + 1\nx² + x − 2 = 2x² − 3x + 1\n```\nWe opened the brackets on the left. Move everything to one side (subtract the right side) and combine like terms:\n```\n−x² + 4x − 3 = 0\na = −1, b = 4, c = −3\nD = b² − 4ac\n  = 4² − 4 × (−1) × (−3)\n  = 16 − 12 = 4\n√D = 2\nx₁ = (−b + √D) / 2a\n   = (−4 + 2) / (−2) = 1\nx₂ = (−b − √D) / 2a\n   = (−4 − 2) / (−2) = 3\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "2",
            "3"
          ],
          "abc": [
            "-1",
            "5",
            "-6"
          ]
        },
        "hints": [
          {
            "he": "קודם פותחים סוגריים: (x − 2)(x + 1) = x² − x − 2. אחר כך מעבירים הכול לצד אחד, כך שבצד השני יישאר 0.",
            "ru": "Сначала раскрой скобки: (x − 2)(x + 1) = x² − x − 2. Потом перенеси всё в одну сторону, чтобы с другой остался 0.",
            "en": "First expand: (x − 2)(x + 1) = x² − x − 2. Then move everything to one side so that 0 is left on the other."
          },
          {
            "he": "אחרי ההעברה מתקבל −x² + 5x − 6 = 0.",
            "ru": "После переноса получается −x² + 5x − 6 = 0.",
            "en": "After moving everything you get −x² + 5x − 6 = 0."
          },
          {
            "he": "התחילו מהמקדמים: a = −1, b = 5, c = −6. אחר כך חשבו D = b² − 4ac.",
            "ru": "Начни с коэффициентов: a = −1, b = 5, c = −6. Потом посчитай D = b² − 4ac.",
            "en": "Start with the coefficients: a = −1, b = 5, c = −6. Then compute D = b² − 4ac."
          },
          {
            "he": "D = 1, ולכן √D = 1. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 1, значит √D = 1. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 1, so √D = 1. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          }
        ],
        "solution": [
          {
            "he": "פותחים את הסוגריים בצד שמאל (כל איבר כפול כל איבר)",
            "ru": "Раскрываем скобки слева (каждый член на каждый)",
            "en": "Expand the left side (every term times every term)"
          },
          "(x − 2)(x + 1) = x² + x − 2x − 2",
          "(x − 2)(x + 1) = x² − x − 2",
          {
            "he": "x² לא מצטמצם, לכן מעבירים הכול לצד שמאל, ובצד ימין נשאר 0",
            "ru": "x² не сокращается, поэтому переносим всё влево, справа остаётся 0",
            "en": "x² does not cancel, so move everything to the left side; 0 stays on the right"
          },
          "x² − x − 2 − 2x² + 6x − 4 = 0",
          "−x² + 5x − 6 = 0",
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = −1,  b = 5,  c = −6",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 5² − 4 × (−1) × (−6)",
          "D = 25 − 24",
          "D = 1",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √1 = 1",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "x₁ = (−5 + 1) / (2 × (−1))",
          "x₁ = −4 / (−2)",
          "x₁ = 2",
          "x₂ = (−5 − 1) / (2 × (−1))",
          "x₂ = −6 / (−2)",
          "x₂ = 3",
          {
            "he": "תשובה: x₁ = 2,  x₂ = 3",
            "ru": "Ответ: x₁ = 2,  x₂ = 3",
            "en": "Answer: x₁ = 2,  x₂ = 3"
          }
        ]
      },
      {
        "id": "t12-2",
        "group": "12",
        "label": "12ב",
        "kind": "roots",
        "text": "(x − 4)(x − 5) = 2x² − 24x + 76",
        "example": {
          "he": "המשוואה:\n```\n(x − 2)(x − 3) = 2x² − 14x + 26\nx² − 5x + 6 = 2x² − 14x + 26\n```\nפתחנו סוגריים משמאל. מעבירים הכול לצד אחד (מחסרים את הצד הימני) ומכנסים איברים דומים:\n```\n−x² + 9x − 20 = 0\na = −1, b = 9, c = −20\nD = b² − 4ac\n  = 9² − 4 × (−1) × (−20)\n  = 81 − 80 = 1\n√D = 1\nx₁ = (−b + √D) / 2a\n   = (−9 + 1) / (−2) = 4\nx₂ = (−b − √D) / 2a\n   = (−9 − 1) / (−2) = 5\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\n(x − 2)(x − 3) = 2x² − 14x + 26\nx² − 5x + 6 = 2x² − 14x + 26\n```\nРаскрыли скобки слева. Переносим всё в одну сторону (правую часть вычитаем) и приводим подобные:\n```\n−x² + 9x − 20 = 0\na = −1, b = 9, c = −20\nD = b² − 4ac\n  = 9² − 4 × (−1) × (−20)\n  = 81 − 80 = 1\n√D = 1\nx₁ = (−b + √D) / 2a\n   = (−9 + 1) / (−2) = 4\nx₂ = (−b − √D) / 2a\n   = (−9 − 1) / (−2) = 5\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\n(x − 2)(x − 3) = 2x² − 14x + 26\nx² − 5x + 6 = 2x² − 14x + 26\n```\nWe opened the brackets on the left. Move everything to one side (subtract the right side) and combine like terms:\n```\n−x² + 9x − 20 = 0\na = −1, b = 9, c = −20\nD = b² − 4ac\n  = 9² − 4 × (−1) × (−20)\n  = 81 − 80 = 1\n√D = 1\nx₁ = (−b + √D) / 2a\n   = (−9 + 1) / (−2) = 4\nx₂ = (−b − √D) / 2a\n   = (−9 − 1) / (−2) = 5\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "7",
            "8"
          ],
          "abc": [
            "-1",
            "15",
            "-56"
          ]
        },
        "hints": [
          {
            "he": "קודם פותחים סוגריים: (x − 4)(x − 5) = x² − 9x + 20. אחר כך מעבירים הכול לצד אחד, כך שבצד השני יישאר 0.",
            "ru": "Сначала раскрой скобки: (x − 4)(x − 5) = x² − 9x + 20. Потом перенеси всё в одну сторону, чтобы с другой остался 0.",
            "en": "First expand: (x − 4)(x − 5) = x² − 9x + 20. Then move everything to one side so that 0 is left on the other."
          },
          {
            "he": "אחרי ההעברה מתקבל −x² + 15x − 56 = 0.",
            "ru": "После переноса получается −x² + 15x − 56 = 0.",
            "en": "After moving everything you get −x² + 15x − 56 = 0."
          },
          {
            "he": "התחילו מהמקדמים: a = −1, b = 15, c = −56. אחר כך חשבו D = b² − 4ac.",
            "ru": "Начни с коэффициентов: a = −1, b = 15, c = −56. Потом посчитай D = b² − 4ac.",
            "en": "Start with the coefficients: a = −1, b = 15, c = −56. Then compute D = b² − 4ac."
          },
          {
            "he": "D = 1, ולכן √D = 1. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 1, значит √D = 1. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 1, so √D = 1. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          }
        ],
        "solution": [
          {
            "he": "פותחים את הסוגריים בצד שמאל (כל איבר כפול כל איבר)",
            "ru": "Раскрываем скобки слева (каждый член на каждый)",
            "en": "Expand the left side (every term times every term)"
          },
          "(x − 4)(x − 5) = x² − 5x − 4x + 20",
          "(x − 4)(x − 5) = x² − 9x + 20",
          {
            "he": "x² לא מצטמצם, לכן מעבירים הכול לצד שמאל, ובצד ימין נשאר 0",
            "ru": "x² не сокращается, поэтому переносим всё влево, справа остаётся 0",
            "en": "x² does not cancel, so move everything to the left side; 0 stays on the right"
          },
          "x² − 9x + 20 − 2x² + 24x − 76 = 0",
          "−x² + 15x − 56 = 0",
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = −1,  b = 15,  c = −56",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 15² − 4 × (−1) × (−56)",
          "D = 225 − 224",
          "D = 1",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √1 = 1",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "x₁ = (−15 + 1) / (2 × (−1))",
          "x₁ = −14 / (−2)",
          "x₁ = 7",
          "x₂ = (−15 − 1) / (2 × (−1))",
          "x₂ = −16 / (−2)",
          "x₂ = 8",
          {
            "he": "תשובה: x₁ = 7,  x₂ = 8",
            "ru": "Ответ: x₁ = 7,  x₂ = 8",
            "en": "Answer: x₁ = 7,  x₂ = 8"
          }
        ]
      },
      {
        "id": "t12-3",
        "group": "12",
        "label": "12ג",
        "kind": "roots",
        "text": "(x − 7)(x + 6) = 2x² − 17x + 18",
        "example": {
          "he": "המשוואה:\n```\n(x + 1)(x − 4) = 2x² − 11x + 8\nx² − 3x − 4 = 2x² − 11x + 8\n```\nפתחנו סוגריים משמאל. מעבירים הכול לצד אחד (מחסרים את הצד הימני) ומכנסים איברים דומים:\n```\n−x² + 8x − 12 = 0\na = −1, b = 8, c = −12\nD = b² − 4ac\n  = 8² − 4 × (−1) × (−12)\n  = 64 − 48 = 16\n√D = 4\nx₁ = (−b + √D) / 2a\n   = (−8 + 4) / (−2) = 2\nx₂ = (−b − √D) / 2a\n   = (−8 − 4) / (−2) = 6\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\n(x + 1)(x − 4) = 2x² − 11x + 8\nx² − 3x − 4 = 2x² − 11x + 8\n```\nРаскрыли скобки слева. Переносим всё в одну сторону (правую часть вычитаем) и приводим подобные:\n```\n−x² + 8x − 12 = 0\na = −1, b = 8, c = −12\nD = b² − 4ac\n  = 8² − 4 × (−1) × (−12)\n  = 64 − 48 = 16\n√D = 4\nx₁ = (−b + √D) / 2a\n   = (−8 + 4) / (−2) = 2\nx₂ = (−b − √D) / 2a\n   = (−8 − 4) / (−2) = 6\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\n(x + 1)(x − 4) = 2x² − 11x + 8\nx² − 3x − 4 = 2x² − 11x + 8\n```\nWe opened the brackets on the left. Move everything to one side (subtract the right side) and combine like terms:\n```\n−x² + 8x − 12 = 0\na = −1, b = 8, c = −12\nD = b² − 4ac\n  = 8² − 4 × (−1) × (−12)\n  = 64 − 48 = 16\n√D = 4\nx₁ = (−b + √D) / 2a\n   = (−8 + 4) / (−2) = 2\nx₂ = (−b − √D) / 2a\n   = (−8 − 4) / (−2) = 6\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "6",
            "10"
          ],
          "abc": [
            "-1",
            "16",
            "-60"
          ]
        },
        "hints": [
          {
            "he": "קודם פותחים סוגריים: (x − 7)(x + 6) = x² − x − 42. אחר כך מעבירים הכול לצד אחד, כך שבצד השני יישאר 0.",
            "ru": "Сначала раскрой скобки: (x − 7)(x + 6) = x² − x − 42. Потом перенеси всё в одну сторону, чтобы с другой остался 0.",
            "en": "First expand: (x − 7)(x + 6) = x² − x − 42. Then move everything to one side so that 0 is left on the other."
          },
          {
            "he": "אחרי ההעברה מתקבל −x² + 16x − 60 = 0.",
            "ru": "После переноса получается −x² + 16x − 60 = 0.",
            "en": "After moving everything you get −x² + 16x − 60 = 0."
          },
          {
            "he": "התחילו מהמקדמים: a = −1, b = 16, c = −60. אחר כך חשבו D = b² − 4ac.",
            "ru": "Начни с коэффициентов: a = −1, b = 16, c = −60. Потом посчитай D = b² − 4ac.",
            "en": "Start with the coefficients: a = −1, b = 16, c = −60. Then compute D = b² − 4ac."
          },
          {
            "he": "D = 16, ולכן √D = 4. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 16, значит √D = 4. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 16, so √D = 4. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          }
        ],
        "solution": [
          {
            "he": "פותחים את הסוגריים בצד שמאל (כל איבר כפול כל איבר)",
            "ru": "Раскрываем скобки слева (каждый член на каждый)",
            "en": "Expand the left side (every term times every term)"
          },
          "(x − 7)(x + 6) = x² + 6x − 7x − 42",
          "(x − 7)(x + 6) = x² − x − 42",
          {
            "he": "x² לא מצטמצם, לכן מעבירים הכול לצד שמאל, ובצד ימין נשאר 0",
            "ru": "x² не сокращается, поэтому переносим всё влево, справа остаётся 0",
            "en": "x² does not cancel, so move everything to the left side; 0 stays on the right"
          },
          "x² − x − 42 − 2x² + 17x − 18 = 0",
          "−x² + 16x − 60 = 0",
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = −1,  b = 16,  c = −60",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 16² − 4 × (−1) × (−60)",
          "D = 256 − 240",
          "D = 16",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √16 = 4",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "x₁ = (−16 + 4) / (2 × (−1))",
          "x₁ = −12 / (−2)",
          "x₁ = 6",
          "x₂ = (−16 − 4) / (2 × (−1))",
          "x₂ = −20 / (−2)",
          "x₂ = 10",
          {
            "he": "תשובה: x₁ = 6,  x₂ = 10",
            "ru": "Ответ: x₁ = 6,  x₂ = 10",
            "en": "Answer: x₁ = 6,  x₂ = 10"
          }
        ]
      },
      {
        "id": "t-frac",
        "group": "frac",
        "label": {
          "he": "שברים",
          "ru": "Дроби",
          "en": "Fractions"
        },
        "kind": "roots",
        "text": "(1 + 2x)/3 − (3x − 1)/4 = 1/(x + 6)",
        "example": {
          "he": "המשוואה:\n```\nx/2 = 2/(x + 3)        x ≠ −3\nx(x + 3) = 4\n```\nכפלנו את שני הצדדים במכנה המשותף `2(x + 3)`. חשוב: `x ≠ −3`, אחרת המכנה 0. מעבירים את 4 שמאלה:\n```\nx² + 3x − 4 = 0\na = 1, b = 3, c = −4\nD = b² − 4ac\n  = 3² − 4 × 1 × (−4)\n  = 9 − (−16) = 25\n√D = 5\nx₁ = (−b + √D) / 2a\n   = (−3 + 5) / 2 = 1\nx₂ = (−b − √D) / 2a\n   = (−3 − 5) / 2 = −4\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\nx/2 = 2/(x + 3)        x ≠ −3\nx(x + 3) = 4\n```\nУмножили обе части на общий знаменатель `2(x + 3)`. Важно: `x ≠ −3`, иначе знаменатель 0. Переносим 4 влево:\n```\nx² + 3x − 4 = 0\na = 1, b = 3, c = −4\nD = b² − 4ac\n  = 3² − 4 × 1 × (−4)\n  = 9 − (−16) = 25\n√D = 5\nx₁ = (−b + √D) / 2a\n   = (−3 + 5) / 2 = 1\nx₂ = (−b − √D) / 2a\n   = (−3 − 5) / 2 = −4\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\nx/2 = 2/(x + 3)        x ≠ −3\nx(x + 3) = 4\n```\nWe multiplied both sides by the common denominator `2(x + 3)`. Important: `x ≠ −3`, otherwise the denominator is 0. Move the 4 to the left:\n```\nx² + 3x − 4 = 0\na = 1, b = 3, c = −4\nD = b² − 4ac\n  = 3² − 4 × 1 × (−4)\n  = 9 − (−16) = 25\n√D = 5\nx₁ = (−b + √D) / 2a\n   = (−3 + 5) / 2 = 1\nx₂ = (−b − √D) / 2a\n   = (−3 − 5) / 2 = −4\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "-5",
            "6"
          ],
          "abc": [
            "-1",
            "1",
            "30"
          ]
        },
        "hints": [
          {
            "he": "מתחילים ממכנה משותף: 12(x + 6). כופלים בו כל איבר — גם את 1/(x + 6) בצד ימין.",
            "ru": "Начни с общего знаменателя: 12(x + 6). Умножь на него каждый член — и 1/(x + 6) справа тоже.",
            "en": "Start with the common denominator 12(x + 6). Multiply every term by it — including 1/(x + 6) on the right."
          },
          {
            "he": "מתקבל 4(1 + 2x)(x + 6) − 3(3x − 1)(x + 6) = 12. כשכופלים מספר בסוגריים — כופלים את כל האיברים שבתוכם.",
            "ru": "Получится 4(1 + 2x)(x + 6) − 3(3x − 1)(x + 6) = 12. Умножая число на скобку, умножай каждый член внутри.",
            "en": "You get 4(1 + 2x)(x + 6) − 3(3x − 1)(x + 6) = 12. When a number multiplies a bracket, multiply every term inside."
          },
          {
            "he": "אחרי פתיחת הסוגריים והעברת 12 לצד שמאל: −x² + x + 30 = 0. עכשיו a = −1, b = 1, c = 30.",
            "ru": "После раскрытия скобок и переноса 12 влево: −x² + x + 30 = 0. Теперь a = −1, b = 1, c = 30.",
            "en": "After expanding and moving 12 to the left: −x² + x + 30 = 0. Now a = −1, b = 1, c = 30."
          },
          {
            "he": "D = 121, ולכן √D = 11. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 121, значит √D = 11. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 121, so √D = 11. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          }
        ],
        "solution": [
          {
            "he": "תחום הגדרה: x ≠ −6 (אסור לחלק באפס).",
            "ru": "ОДЗ: x ≠ −6 (на ноль делить нельзя).",
            "en": "Domain: x ≠ −6 (no division by zero)."
          },
          {
            "he": "מכנה משותף: 12(x + 6). כופלים בו כל איבר",
            "ru": "Общий знаменатель: 12(x + 6). Умножаем на него каждый член",
            "en": "Common denominator: 12(x + 6). Multiply every term by it"
          },
          "4(1 + 2x)(x + 6) − 3(3x − 1)(x + 6) = 12",
          {
            "he": "פותחים את הסוגריים הראשונים",
            "ru": "Раскрываем первые скобки",
            "en": "Expand the first brackets"
          },
          "(1 + 2x)(x + 6) = x + 6 + 2x² + 12x",
          "(1 + 2x)(x + 6) = 2x² + 13x + 6",
          "4 × (2x² + 13x + 6) = 8x² + 52x + 24",
          {
            "he": "פותחים את הסוגריים השניים",
            "ru": "Раскрываем вторые скобки",
            "en": "Expand the second brackets"
          },
          "(3x − 1)(x + 6) = 3x² + 18x − x − 6",
          "(3x − 1)(x + 6) = 3x² + 17x − 6",
          "3 × (3x² + 17x − 6) = 9x² + 51x − 18",
          {
            "he": "מחסרים — המינוס לפני הסוגריים הופך את כל הסימנים",
            "ru": "Вычитаем — минус перед скобкой меняет все знаки",
            "en": "Subtract — the minus before the bracket flips every sign"
          },
          "8x² + 52x + 24 − 9x² − 51x + 18 = 12",
          "−x² + x + 42 = 12",
          "−x² + x + 30 = 0",
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = −1,  b = 1,  c = 30",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 1² − 4 × (−1) × 30",
          "D = 1 − (−120)",
          "D = 1 + 120",
          "D = 121",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √121 = 11",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "x₁ = (−1 + 11) / (2 × (−1))",
          "x₁ = 10 / (−2)",
          "x₁ = −5",
          "x₂ = (−1 − 11) / (2 × (−1))",
          "x₂ = −12 / (−2)",
          "x₂ = 6",
          {
            "he": "תשובה: x₁ = −5,  x₂ = 6",
            "ru": "Ответ: x₁ = −5,  x₂ = 6",
            "en": "Answer: x₁ = −5,  x₂ = 6"
          },
          {
            "he": "בודקים: שני הפתרונות שונים מ־−6, ולכן שניהם מתאימים.",
            "ru": "Проверяем: оба корня не равны −6, значит оба подходят.",
            "en": "Check: neither root equals −6, so both are valid."
          }
        ]
      }
    ],
    "ai": [
      {
        "id": "ai1-1",
        "level": 1,
        "label": "1.1",
        "kind": "roots",
        "text": "x² + 5x + 4 = 0",
        "example": {
          "he": "המשוואה:\n```\nx² + 7x + 6 = 0\na = 1, b = 7, c = 6\nD = b² − 4ac\n  = 7² − 4 × 1 × 6\n  = 49 − 24 = 25\n√D = 5\nx₁ = (−b + √D) / 2a\n   = (−7 + 5) / 2 = −1\nx₂ = (−b − √D) / 2a\n   = (−7 − 5) / 2 = −6\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\nx² + 7x + 6 = 0\na = 1, b = 7, c = 6\nD = b² − 4ac\n  = 7² − 4 × 1 × 6\n  = 49 − 24 = 25\n√D = 5\nx₁ = (−b + √D) / 2a\n   = (−7 + 5) / 2 = −1\nx₂ = (−b − √D) / 2a\n   = (−7 − 5) / 2 = −6\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\nx² + 7x + 6 = 0\na = 1, b = 7, c = 6\nD = b² − 4ac\n  = 7² − 4 × 1 × 6\n  = 49 − 24 = 25\n√D = 5\nx₁ = (−b + √D) / 2a\n   = (−7 + 5) / 2 = −1\nx₂ = (−b − √D) / 2a\n   = (−7 − 5) / 2 = −6\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "-1",
            "-4"
          ],
          "abc": [
            "1",
            "5",
            "4"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 1, b = 5, c = 4. אחר כך חשבו D = b² − 4ac. שימו לב: a + c = b, אז אפשר גם בדרך הקצרה.",
            "ru": "Начни с коэффициентов: a = 1, b = 5, c = 4. Потом посчитай D = b² − 4ac. Заметь: a + c = b — подойдёт и короткий способ.",
            "en": "Start with the coefficients: a = 1, b = 5, c = 4. Then compute D = b² − 4ac. Notice: a + c = b, so the shortcut works too."
          },
          {
            "he": "D = 9, ולכן √D = 3. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 9, значит √D = 3. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 9, so √D = 3. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          },
          {
            "he": "x₁ = (−5 + 3) / 2. חשבו את זה, ואחר כך את x₂ עם מינוס לפני השורש. בסוף חלקו גם במכנה (2a = 2).",
            "ru": "x₁ = (−5 + 3) / 2. Посчитай, потом x₂ с минусом перед корнем. Не забудь разделить на знаменатель (2a = 2).",
            "en": "x₁ = (−5 + 3) / 2. Work it out, then x₂ with a minus before the root. Don't forget to divide by 2a = 2."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 1,  b = 5,  c = 4",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 5² − 4 × 1 × 4",
          "D = 25 − 16",
          "D = 9",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √9 = 3",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "x₁ = (−5 + 3) / (2 × 1)",
          "x₁ = −2 / 2",
          "x₁ = −1",
          "x₂ = (−5 − 3) / (2 × 1)",
          "x₂ = −8 / 2",
          "x₂ = −4",
          {
            "he": "תשובה: x₁ = −1,  x₂ = −4",
            "ru": "Ответ: x₁ = −1,  x₂ = −4",
            "en": "Answer: x₁ = −1,  x₂ = −4"
          },
          {
            "he": "בדיקה בדרך הקצרה: a + c = 1 + 4 = 5 = b, ולכן x₁ = −1 ו־x₂ = −c/a = −4",
            "ru": "Проверка коротким способом: a + c = 1 + 4 = 5 = b, значит x₁ = −1, x₂ = −c/a = −4",
            "en": "Shortcut check: a + c = 1 + 4 = 5 = b, so x₁ = −1 and x₂ = −c/a = −4"
          }
        ]
      },
      {
        "id": "ai1-2",
        "level": 1,
        "label": "1.2",
        "kind": "roots",
        "text": "2x² + 7x + 3 = 0",
        "example": {
          "he": "המשוואה:\n```\n2x² + 5x + 2 = 0\na = 2, b = 5, c = 2\nD = b² − 4ac\n  = 5² − 4 × 2 × 2\n  = 25 − 16 = 9\n√D = 3\nx₁ = (−b + √D) / 2a\n   = (−5 + 3) / 4 = −1/2\nx₂ = (−b − √D) / 2a\n   = (−5 − 3) / 4 = −2\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\n2x² + 5x + 2 = 0\na = 2, b = 5, c = 2\nD = b² − 4ac\n  = 5² − 4 × 2 × 2\n  = 25 − 16 = 9\n√D = 3\nx₁ = (−b + √D) / 2a\n   = (−5 + 3) / 4 = −1/2\nx₂ = (−b − √D) / 2a\n   = (−5 − 3) / 4 = −2\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\n2x² + 5x + 2 = 0\na = 2, b = 5, c = 2\nD = b² − 4ac\n  = 5² − 4 × 2 × 2\n  = 25 − 16 = 9\n√D = 3\nx₁ = (−b + √D) / 2a\n   = (−5 + 3) / 4 = −1/2\nx₂ = (−b − √D) / 2a\n   = (−5 − 3) / 4 = −2\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "-1/2",
            "-3"
          ],
          "abc": [
            "2",
            "7",
            "3"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 2, b = 7, c = 3. אחר כך חשבו D = b² − 4ac.",
            "ru": "Начни с коэффициентов: a = 2, b = 7, c = 3. Потом посчитай D = b² − 4ac.",
            "en": "Start with the coefficients: a = 2, b = 7, c = 3. Then compute D = b² − 4ac."
          },
          {
            "he": "D = 25, ולכן √D = 5. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 25, значит √D = 5. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 25, so √D = 5. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          },
          {
            "he": "x₁ = (−7 + 5) / 4. חשבו את זה, ואחר כך את x₂ עם מינוס לפני השורש. בסוף חלקו גם במכנה (2a = 4).",
            "ru": "x₁ = (−7 + 5) / 4. Посчитай, потом x₂ с минусом перед корнем. Не забудь разделить на знаменатель (2a = 4).",
            "en": "x₁ = (−7 + 5) / 4. Work it out, then x₂ with a minus before the root. Don't forget to divide by 2a = 4."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 2,  b = 7,  c = 3",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 7² − 4 × 2 × 3",
          "D = 49 − 24",
          "D = 25",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √25 = 5",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "x₁ = (−7 + 5) / (2 × 2)",
          "x₁ = −2 / 4",
          "x₁ = −1/2",
          "x₂ = (−7 − 5) / (2 × 2)",
          "x₂ = −12 / 4",
          "x₂ = −3",
          {
            "he": "תשובה: x₁ = −1/2,  x₂ = −3",
            "ru": "Ответ: x₁ = −1/2,  x₂ = −3",
            "en": "Answer: x₁ = −1/2,  x₂ = −3"
          }
        ]
      },
      {
        "id": "ai1-3",
        "level": 1,
        "label": "1.3",
        "kind": "number",
        "text": {
          "he": "חשבו את הדיסקרימיננטה D של המשוואה `x² − 7x + 10 = 0`.",
          "ru": "Найди дискриминант D уравнения `x² − 7x + 10 = 0`.",
          "en": "Find the discriminant D of `x² − 7x + 10 = 0`."
        },
        "example": {
          "he": "המשוואה:\n```\nx² − 6x + 5 = 0\na = 1, b = −6, c = 5\nD = b² − 4ac\n  = (−6)² − 4 × 1 × 5\n  = 36 − 20 = 16\n```",
          "ru": "Уравнение:\n```\nx² − 6x + 5 = 0\na = 1, b = −6, c = 5\nD = b² − 4ac\n  = (−6)² − 4 × 1 × 5\n  = 36 − 20 = 16\n```",
          "en": "Equation:\n```\nx² − 6x + 5 = 0\na = 1, b = −6, c = 5\nD = b² − 4ac\n  = (−6)² − 4 × 1 × 5\n  = 36 − 20 = 16\n```"
        },
        "answer": {
          "value": "9"
        },
        "hints": [
          {
            "he": "a = 1, b = −7, c = 10. הנוסחה: D = b² − 4ac.",
            "ru": "a = 1, b = −7, c = 10. Формула: D = b² − 4ac.",
            "en": "a = 1, b = −7, c = 10. The formula: D = b² − 4ac."
          },
          {
            "he": "(−7)² = 49 (עם סוגריים!), ו־4 × 1 × 10 = 40.",
            "ru": "(−7)² = 49 (в скобках!), а 4 × 1 × 10 = 40.",
            "en": "(−7)² = 49 (with brackets!), and 4 × 1 × 10 = 40."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 1,  b = −7,  c = 10",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = (−7)² − 4 × 1 × 10",
          "D = 49 − 40",
          "D = 9",
          {
            "he": "תשובה: D = 9",
            "ru": "Ответ: D = 9",
            "en": "Answer: D = 9"
          }
        ]
      },
      {
        "id": "ai1-4",
        "level": 1,
        "label": "1.4",
        "kind": "roots",
        "text": "x² + 6x + 9 = 0",
        "example": {
          "he": "המשוואה:\n```\nx² + 8x + 16 = 0\na = 1, b = 8, c = 16\nD = b² − 4ac\n  = 8² − 4 × 1 × 16\n  = 64 − 64 = 0\nx = −b / 2a\n  = −8 / 2 = −4\n```\n`D = 0` → פתרון אחד.",
          "ru": "Уравнение:\n```\nx² + 8x + 16 = 0\na = 1, b = 8, c = 16\nD = b² − 4ac\n  = 8² − 4 × 1 × 16\n  = 64 − 64 = 0\nx = −b / 2a\n  = −8 / 2 = −4\n```\n`D = 0` → одно решение.",
          "en": "Equation:\n```\nx² + 8x + 16 = 0\na = 1, b = 8, c = 16\nD = b² − 4ac\n  = 8² − 4 × 1 × 16\n  = 64 − 64 = 0\nx = −b / 2a\n  = −8 / 2 = −4\n```\n`D = 0` → one solution."
        },
        "answer": {
          "roots": [
            "-3"
          ],
          "abc": [
            "1",
            "6",
            "9"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 1, b = 6, c = 9. אחר כך חשבו D = b² − 4ac.",
            "ru": "Начни с коэффициентов: a = 1, b = 6, c = 9. Потом посчитай D = b² − 4ac.",
            "en": "Start with the coefficients: a = 1, b = 6, c = 9. Then compute D = b² − 4ac."
          },
          {
            "he": "D = 0. כשהדיסקרימיננטה שווה לאפס יש פתרון אחד בלבד: x = −b / (2a).",
            "ru": "D = 0. Когда дискриминант равен нулю, корень один: x = −b / (2a).",
            "en": "D = 0. When the discriminant is zero there is only one root: x = −b / (2a)."
          },
          {
            "he": "x = −6 / 2. מספיק לכתוב ערך אחד.",
            "ru": "x = −6 / 2. Достаточно написать одно число.",
            "en": "x = −6 / 2. One value is enough."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 1,  b = 6,  c = 9",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 6² − 4 × 1 × 9",
          "D = 36 − 36",
          "D = 0",
          {
            "he": "D = 0 — יש פתרון אחד בלבד",
            "ru": "D = 0 — корень один",
            "en": "D = 0 — there is only one root"
          },
          "x = −b / (2a)",
          "x = (−6) / (2 × 1)",
          "x = −6 / 2",
          "x = −3",
          {
            "he": "תשובה: x = −3 (פתרון אחד)",
            "ru": "Ответ: x = −3 (один корень)",
            "en": "Answer: x = −3 (one root)"
          }
        ]
      },
      {
        "id": "ai2-1",
        "level": 2,
        "label": "2.1",
        "kind": "roots",
        "text": "−x² + 3x + 10 = 0",
        "example": {
          "he": "המשוואה:\n```\n−x² − x + 6 = 0\na = −1, b = −1, c = 6\nD = b² − 4ac\n  = (−1)² − 4 × (−1) × 6\n  = 1 − (−24) = 25\n√D = 5\nx₁ = (−b + √D) / 2a\n   = (1 + 5) / (−2) = −3\nx₂ = (−b − √D) / 2a\n   = (1 − 5) / (−2) = 2\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\n−x² − x + 6 = 0\na = −1, b = −1, c = 6\nD = b² − 4ac\n  = (−1)² − 4 × (−1) × 6\n  = 1 − (−24) = 25\n√D = 5\nx₁ = (−b + √D) / 2a\n   = (1 + 5) / (−2) = −3\nx₂ = (−b − √D) / 2a\n   = (1 − 5) / (−2) = 2\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\n−x² − x + 6 = 0\na = −1, b = −1, c = 6\nD = b² − 4ac\n  = (−1)² − 4 × (−1) × 6\n  = 1 − (−24) = 25\n√D = 5\nx₁ = (−b + √D) / 2a\n   = (1 + 5) / (−2) = −3\nx₂ = (−b − √D) / 2a\n   = (1 − 5) / (−2) = 2\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "-2",
            "5"
          ],
          "abc": [
            "-1",
            "3",
            "10"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = −1, b = 3, c = 10. אחר כך חשבו D = b² − 4ac.",
            "ru": "Начни с коэффициентов: a = −1, b = 3, c = 10. Потом посчитай D = b² − 4ac.",
            "en": "Start with the coefficients: a = −1, b = 3, c = 10. Then compute D = b² − 4ac."
          },
          {
            "he": "D = 49, ולכן √D = 7. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 49, значит √D = 7. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 49, so √D = 7. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          },
          {
            "he": "x₁ = (−3 + 7) / (−2). חשבו את זה, ואחר כך את x₂ עם מינוס לפני השורש. בסוף חלקו גם במכנה (2a = −2).",
            "ru": "x₁ = (−3 + 7) / (−2). Посчитай, потом x₂ с минусом перед корнем. Не забудь разделить на знаменатель (2a = −2).",
            "en": "x₁ = (−3 + 7) / (−2). Work it out, then x₂ with a minus before the root. Don't forget to divide by 2a = −2."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = −1,  b = 3,  c = 10",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 3² − 4 × (−1) × 10",
          "D = 9 − (−40)",
          "D = 9 + 40",
          "D = 49",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √49 = 7",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "x₁ = (−3 + 7) / (2 × (−1))",
          "x₁ = 4 / (−2)",
          "x₁ = −2",
          "x₂ = (−3 − 7) / (2 × (−1))",
          "x₂ = −10 / (−2)",
          "x₂ = 5",
          {
            "he": "תשובה: x₁ = −2,  x₂ = 5",
            "ru": "Ответ: x₁ = −2,  x₂ = 5",
            "en": "Answer: x₁ = −2,  x₂ = 5"
          }
        ]
      },
      {
        "id": "ai2-2",
        "level": 2,
        "label": "2.2",
        "kind": "roots",
        "text": "3x² − 12 = 0",
        "example": {
          "he": "אין כאן איבר עם x, ולכן `b = 0`. הנוסחה עובדת אותו דבר.\nהמשוואה:\n```\n2x² − 18 = 0\na = 2, b = 0, c = −18\nD = b² − 4ac\n  = 0² − 4 × 2 × (−18)\n  = 0 − (−144) = 144\n√D = 12\nx₁ = (−b + √D) / 2a\n   = (0 + 12) / 4 = 3\nx₂ = (−b − √D) / 2a\n   = (0 − 12) / 4 = −3\n```\n`D > 0` → שני פתרונות.",
          "ru": "Здесь нет члена с x, значит `b = 0`. Формула работает так же.\nУравнение:\n```\n2x² − 18 = 0\na = 2, b = 0, c = −18\nD = b² − 4ac\n  = 0² − 4 × 2 × (−18)\n  = 0 − (−144) = 144\n√D = 12\nx₁ = (−b + √D) / 2a\n   = (0 + 12) / 4 = 3\nx₂ = (−b − √D) / 2a\n   = (0 − 12) / 4 = −3\n```\n`D > 0` → два решения.",
          "en": "There is no x term here, so `b = 0`. The formula works the same.\nEquation:\n```\n2x² − 18 = 0\na = 2, b = 0, c = −18\nD = b² − 4ac\n  = 0² − 4 × 2 × (−18)\n  = 0 − (−144) = 144\n√D = 12\nx₁ = (−b + √D) / 2a\n   = (0 + 12) / 4 = 3\nx₂ = (−b − √D) / 2a\n   = (0 − 12) / 4 = −3\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "2",
            "-2"
          ],
          "abc": [
            "3",
            "0",
            "-12"
          ]
        },
        "hints": [
          {
            "he": "התחילו מהמקדמים: a = 3, b = 0, c = −12. אחר כך חשבו D = b² − 4ac.",
            "ru": "Начни с коэффициентов: a = 3, b = 0, c = −12. Потом посчитай D = b² − 4ac.",
            "en": "Start with the coefficients: a = 3, b = 0, c = −12. Then compute D = b² − 4ac."
          },
          {
            "he": "D = 144, ולכן √D = 12. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 144, значит √D = 12. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 144, so √D = 12. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          },
          {
            "he": "x₁ = (0 + 12) / 6. חשבו את זה, ואחר כך את x₂ עם מינוס לפני השורש. בסוף חלקו גם במכנה (2a = 6).",
            "ru": "x₁ = (0 + 12) / 6. Посчитай, потом x₂ с минусом перед корнем. Не забудь разделить на знаменатель (2a = 6).",
            "en": "x₁ = (0 + 12) / 6. Work it out, then x₂ with a minus before the root. Don't forget to divide by 2a = 6."
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 3,  b = 0,  c = −12",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 0² − 4 × 3 × (−12)",
          "D = 0 − (−144)",
          "D = 0 + 144",
          "D = 144",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √144 = 12",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "x₁ = (0 + 12) / (2 × 3)",
          "x₁ = 12 / 6",
          "x₁ = 2",
          "x₂ = (0 − 12) / (2 × 3)",
          "x₂ = −12 / 6",
          "x₂ = −2",
          {
            "he": "תשובה: x₁ = 2,  x₂ = −2",
            "ru": "Ответ: x₁ = 2,  x₂ = −2",
            "en": "Answer: x₁ = 2,  x₂ = −2"
          }
        ]
      },
      {
        "id": "ai2-3",
        "level": 2,
        "label": "2.3",
        "kind": "choice",
        "text": {
          "he": "כמה פתרונות יש למשוואה `x² + 3x + 5 = 0`?",
          "ru": "Сколько решений у уравнения `x² + 3x + 5 = 0`?",
          "en": "How many solutions does `x² + 3x + 5 = 0` have?"
        },
        "example": {
          "he": "המשוואה:\n```\nx² + 4x + 3 = 0\nD = 4² − 4 × 1 × 3\n  = 16 − 12 = 4\n```\n`D > 0` → 2 פתרונות.\nהכלל: `D > 0` → 2 פתרונות, `D = 0` → פתרון אחד, `D < 0` → אין פתרונות.",
          "ru": "Уравнение:\n```\nx² + 4x + 3 = 0\nD = 4² − 4 × 1 × 3\n  = 16 − 12 = 4\n```\n`D > 0` → 2 решения.\nПравило: `D > 0` → 2 решения, `D = 0` → 1 решение, `D < 0` → решений нет.",
          "en": "Equation:\n```\nx² + 4x + 3 = 0\nD = 4² − 4 × 1 × 3\n  = 16 − 12 = 4\n```\n`D > 0` → 2 solutions.\nThe rule: `D > 0` → 2 solutions, `D = 0` → 1 solution, `D < 0` → no solutions."
        },
        "options": [
          "0",
          "1",
          "2"
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "לא צריך למצוא את x — מספיק לחשב את D ולבדוק את הסימן שלו.",
            "ru": "Искать x не нужно — достаточно посчитать D и посмотреть на знак.",
            "en": "You don't need x — just compute D and look at its sign."
          },
          {
            "he": "D = 3² − 4 × 1 × 5 = 9 − 20. האם זה חיובי, אפס או שלילי?",
            "ru": "D = 3² − 4 × 1 × 5 = 9 − 20. Это больше нуля, ноль или меньше?",
            "en": "D = 3² − 4 × 1 × 5 = 9 − 20. Is that positive, zero or negative?"
          }
        ],
        "solution": [
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 1,  b = 3,  c = 5",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 3² − 4 × 1 × 5",
          "D = 9 − 20",
          "D = −11",
          {
            "he": "D < 0 — אי אפשר להוציא שורש ממספר שלילי, ולכן אין פתרון.",
            "ru": "D < 0 — из отрицательного числа корень не извлекается, поэтому решений нет.",
            "en": "D < 0 — you can't take the square root of a negative number, so there is no solution."
          },
          {
            "he": "תשובה: 0 פתרונות",
            "ru": "Ответ: 0 решений",
            "en": "Answer: 0 solutions"
          }
        ]
      },
      {
        "id": "ai2-4",
        "level": 2,
        "label": "2.4",
        "kind": "roots",
        "text": "(x − 3)(x + 2) = 2x² − 5x − 2",
        "example": {
          "he": "המשוואה:\n```\n(x − 1)(x + 1) = 2x² − 6x + 8\nx² − 1 = 2x² − 6x + 8\n```\nפתחנו סוגריים משמאל. מעבירים הכול לצד אחד (מחסרים את הצד הימני) ומכנסים איברים דומים:\n```\n−x² + 6x − 9 = 0\na = −1, b = 6, c = −9\nD = b² − 4ac\n  = 6² − 4 × (−1) × (−9)\n  = 36 − 36 = 0\nx = −b / 2a\n  = −6 / (−2) = 3\n```\n`D = 0` → פתרון אחד.",
          "ru": "Уравнение:\n```\n(x − 1)(x + 1) = 2x² − 6x + 8\nx² − 1 = 2x² − 6x + 8\n```\nРаскрыли скобки слева. Переносим всё в одну сторону (правую часть вычитаем) и приводим подобные:\n```\n−x² + 6x − 9 = 0\na = −1, b = 6, c = −9\nD = b² − 4ac\n  = 6² − 4 × (−1) × (−9)\n  = 36 − 36 = 0\nx = −b / 2a\n  = −6 / (−2) = 3\n```\n`D = 0` → одно решение.",
          "en": "Equation:\n```\n(x − 1)(x + 1) = 2x² − 6x + 8\nx² − 1 = 2x² − 6x + 8\n```\nWe opened the brackets on the left. Move everything to one side (subtract the right side) and combine like terms:\n```\n−x² + 6x − 9 = 0\na = −1, b = 6, c = −9\nD = b² − 4ac\n  = 6² − 4 × (−1) × (−9)\n  = 36 − 36 = 0\nx = −b / 2a\n  = −6 / (−2) = 3\n```\n`D = 0` → one solution."
        },
        "answer": {
          "roots": [
            "2"
          ],
          "abc": [
            "-1",
            "4",
            "-4"
          ]
        },
        "hints": [
          {
            "he": "קודם פותחים סוגריים: (x − 3)(x + 2) = x² − x − 6. אחר כך מעבירים הכול לצד אחד, כך שבצד השני יישאר 0.",
            "ru": "Сначала раскрой скобки: (x − 3)(x + 2) = x² − x − 6. Потом перенеси всё в одну сторону, чтобы с другой остался 0.",
            "en": "First expand: (x − 3)(x + 2) = x² − x − 6. Then move everything to one side so that 0 is left on the other."
          },
          {
            "he": "אחרי ההעברה מתקבל −x² + 4x − 4 = 0.",
            "ru": "После переноса получается −x² + 4x − 4 = 0.",
            "en": "After moving everything you get −x² + 4x − 4 = 0."
          },
          {
            "he": "התחילו מהמקדמים: a = −1, b = 4, c = −4. אחר כך חשבו D = b² − 4ac.",
            "ru": "Начни с коэффициентов: a = −1, b = 4, c = −4. Потом посчитай D = b² − 4ac.",
            "en": "Start with the coefficients: a = −1, b = 4, c = −4. Then compute D = b² − 4ac."
          },
          {
            "he": "D = 0. כשהדיסקרימיננטה שווה לאפס יש פתרון אחד בלבד: x = −b / (2a).",
            "ru": "D = 0. Когда дискриминант равен нулю, корень один: x = −b / (2a).",
            "en": "D = 0. When the discriminant is zero there is only one root: x = −b / (2a)."
          }
        ],
        "solution": [
          {
            "he": "פותחים את הסוגריים בצד שמאל (כל איבר כפול כל איבר)",
            "ru": "Раскрываем скобки слева (каждый член на каждый)",
            "en": "Expand the left side (every term times every term)"
          },
          "(x − 3)(x + 2) = x² + 2x − 3x − 6",
          "(x − 3)(x + 2) = x² − x − 6",
          {
            "he": "x² לא מצטמצם, לכן מעבירים הכול לצד שמאל, ובצד ימין נשאר 0",
            "ru": "x² не сокращается, поэтому переносим всё влево, справа остаётся 0",
            "en": "x² does not cancel, so move everything to the left side; 0 stays on the right"
          },
          "x² − x − 6 − 2x² + 5x + 2 = 0",
          "−x² + 4x − 4 = 0",
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = −1,  b = 4,  c = −4",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = 4² − 4 × (−1) × (−4)",
          "D = 16 − 16",
          "D = 0",
          {
            "he": "D = 0 — יש פתרון אחד בלבד",
            "ru": "D = 0 — корень один",
            "en": "D = 0 — there is only one root"
          },
          "x = −b / (2a)",
          "x = (−4) / (2 × (−1))",
          "x = −4 / (−2)",
          "x = 2",
          {
            "he": "תשובה: x = 2 (פתרון אחד)",
            "ru": "Ответ: x = 2 (один корень)",
            "en": "Answer: x = 2 (one root)"
          }
        ]
      },
      {
        "id": "ai3-1",
        "level": 3,
        "label": "3.1",
        "kind": "roots",
        "text": "x²/2 − x − 4 = 0",
        "example": {
          "he": "המשוואה:\n```\nx²/3 − x − 6 = 0\n```\nכופלים הכול ב־3 כדי להיפטר מהשבר:\n```\nx² − 3x − 18 = 0\na = 1, b = −3, c = −18\nD = b² − 4ac\n  = (−3)² − 4 × 1 × (−18)\n  = 9 − (−72) = 81\n√D = 9\nx₁ = (−b + √D) / 2a\n   = (3 + 9) / 2 = 6\nx₂ = (−b − √D) / 2a\n   = (3 − 9) / 2 = −3\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\nx²/3 − x − 6 = 0\n```\nУмножаем всё на 3, чтобы убрать дробь:\n```\nx² − 3x − 18 = 0\na = 1, b = −3, c = −18\nD = b² − 4ac\n  = (−3)² − 4 × 1 × (−18)\n  = 9 − (−72) = 81\n√D = 9\nx₁ = (−b + √D) / 2a\n   = (3 + 9) / 2 = 6\nx₂ = (−b − √D) / 2a\n   = (3 − 9) / 2 = −3\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\nx²/3 − x − 6 = 0\n```\nMultiply everything by 3 to get rid of the fraction:\n```\nx² − 3x − 18 = 0\na = 1, b = −3, c = −18\nD = b² − 4ac\n  = (−3)² − 4 × 1 × (−18)\n  = 9 − (−72) = 81\n√D = 9\nx₁ = (−b + √D) / 2a\n   = (3 + 9) / 2 = 6\nx₂ = (−b − √D) / 2a\n   = (3 − 9) / 2 = −3\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "4",
            "-2"
          ],
          "abc": [
            "1",
            "-2",
            "-8"
          ]
        },
        "hints": [
          {
            "he": "קשה לעבוד עם שבר. כפלו את כל המשוואה ב־2 — כל איבר!",
            "ru": "С дробью неудобно. Умножь всё уравнение на 2 — каждый член!",
            "en": "Fractions are awkward. Multiply the whole equation by 2 — every term!"
          },
          {
            "he": "התחילו מהמקדמים: a = 1, b = −2, c = −8. אחר כך חשבו D = b² − 4ac. שימו לב: b שלילי, לכן b² = (−2)² = 4 — עם סוגריים, כי מספר שלילי בריבוע יוצא חיובי.",
            "ru": "Начни с коэффициентов: a = 1, b = −2, c = −8. Потом посчитай D = b² − 4ac. Внимание: b отрицательное, поэтому b² = (−2)² = 4 — в скобках, ведь отрицательное число в квадрате положительно.",
            "en": "Start with the coefficients: a = 1, b = −2, c = −8. Then compute D = b² − 4ac. Careful: b is negative, so b² = (−2)² = 4 — use brackets, a negative number squared is positive."
          },
          {
            "he": "D = 36, ולכן √D = 6. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 36, значит √D = 6. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 36, so √D = 6. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          }
        ],
        "solution": [
          {
            "he": "כופלים את כל המשוואה ב־2 כדי להיפטר מהשבר",
            "ru": "Умножаем всё уравнение на 2, чтобы избавиться от дроби",
            "en": "Multiply the whole equation by 2 to get rid of the fraction"
          },
          "x² − 2x − 8 = 0",
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 1,  b = −2,  c = −8",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = (−2)² − 4 × 1 × (−8)",
          "D = 4 − (−32)",
          "D = 4 + 32",
          "D = 36",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √36 = 6",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "−b = −(−2) = 2",
          "x₁ = (2 + 6) / (2 × 1)",
          "x₁ = 8 / 2",
          "x₁ = 4",
          "x₂ = (2 − 6) / (2 × 1)",
          "x₂ = −4 / 2",
          "x₂ = −2",
          {
            "he": "תשובה: x₁ = 4,  x₂ = −2",
            "ru": "Ответ: x₁ = 4,  x₂ = −2",
            "en": "Answer: x₁ = 4,  x₂ = −2"
          }
        ]
      },
      {
        "id": "ai3-2",
        "level": 3,
        "label": "3.2",
        "kind": "roots",
        "text": "0.5x² − 1.5x + 1 = 0",
        "example": {
          "he": "המשוואה:\n```\n0.5x² − 3x + 4 = 0\n```\nכופלים הכול ב־2 כדי שלא יהיו שברים:\n```\nx² − 6x + 8 = 0\na = 1, b = −6, c = 8\nD = b² − 4ac\n  = (−6)² − 4 × 1 × 8\n  = 36 − 32 = 4\n√D = 2\nx₁ = (−b + √D) / 2a\n   = (6 + 2) / 2 = 4\nx₂ = (−b − √D) / 2a\n   = (6 − 2) / 2 = 2\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\n0.5x² − 3x + 4 = 0\n```\nУмножаем всё на 2, чтобы не было дробей:\n```\nx² − 6x + 8 = 0\na = 1, b = −6, c = 8\nD = b² − 4ac\n  = (−6)² − 4 × 1 × 8\n  = 36 − 32 = 4\n√D = 2\nx₁ = (−b + √D) / 2a\n   = (6 + 2) / 2 = 4\nx₂ = (−b − √D) / 2a\n   = (6 − 2) / 2 = 2\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\n0.5x² − 3x + 4 = 0\n```\nMultiply everything by 2 so there are no fractions:\n```\nx² − 6x + 8 = 0\na = 1, b = −6, c = 8\nD = b² − 4ac\n  = (−6)² − 4 × 1 × 8\n  = 36 − 32 = 4\n√D = 2\nx₁ = (−b + √D) / 2a\n   = (6 + 2) / 2 = 4\nx₂ = (−b − √D) / 2a\n   = (6 − 2) / 2 = 2\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "2",
            "1"
          ],
          "abc": [
            "1",
            "-3",
            "2"
          ]
        },
        "hints": [
          {
            "he": "אפשר להציב גם עם עשרוניים, אבל קל יותר לכפול קודם ב־2.",
            "ru": "Можно подставлять и десятичные, но проще сначала умножить на 2.",
            "en": "You can use the decimals, but it is easier to multiply by 2 first."
          },
          {
            "he": "התחילו מהמקדמים: a = 1, b = −3, c = 2. אחר כך חשבו D = b² − 4ac. שימו לב: b שלילי, לכן b² = (−3)² = 9 — עם סוגריים, כי מספר שלילי בריבוע יוצא חיובי.",
            "ru": "Начни с коэффициентов: a = 1, b = −3, c = 2. Потом посчитай D = b² − 4ac. Внимание: b отрицательное, поэтому b² = (−3)² = 9 — в скобках, ведь отрицательное число в квадрате положительно.",
            "en": "Start with the coefficients: a = 1, b = −3, c = 2. Then compute D = b² − 4ac. Careful: b is negative, so b² = (−3)² = 9 — use brackets, a negative number squared is positive."
          },
          {
            "he": "D = 1, ולכן √D = 1. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 1, значит √D = 1. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 1, so √D = 1. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          }
        ],
        "solution": [
          {
            "he": "כופלים ב־2 כדי לקבל מספרים שלמים",
            "ru": "Умножаем на 2, чтобы получить целые числа",
            "en": "Multiply by 2 to get whole numbers"
          },
          "x² − 3x + 2 = 0",
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 1,  b = −3,  c = 2",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = (−3)² − 4 × 1 × 2",
          "D = 9 − 8",
          "D = 1",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √1 = 1",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "−b = −(−3) = 3",
          "x₁ = (3 + 1) / (2 × 1)",
          "x₁ = 4 / 2",
          "x₁ = 2",
          "x₂ = (3 − 1) / (2 × 1)",
          "x₂ = 2 / 2",
          "x₂ = 1",
          {
            "he": "תשובה: x₁ = 2,  x₂ = 1",
            "ru": "Ответ: x₁ = 2,  x₂ = 1",
            "en": "Answer: x₁ = 2,  x₂ = 1"
          }
        ]
      },
      {
        "id": "ai3-3",
        "level": 3,
        "label": "3.3",
        "kind": "roots",
        "text": "(2x + 1)(x − 3) = x² − 9",
        "example": {
          "he": "המשוואה:\n```\n(2x − 1)(x + 1) = x² + 5\n2x² + x − 1 = x² + 5\n```\nפתחנו סוגריים משמאל. מעבירים הכול לצד אחד (מחסרים את הצד הימני) ומכנסים איברים דומים:\n```\nx² + x − 6 = 0\na = 1, b = 1, c = −6\nD = b² − 4ac\n  = 1² − 4 × 1 × (−6)\n  = 1 − (−24) = 25\n√D = 5\nx₁ = (−b + √D) / 2a\n   = (−1 + 5) / 2 = 2\nx₂ = (−b − √D) / 2a\n   = (−1 − 5) / 2 = −3\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\n(2x − 1)(x + 1) = x² + 5\n2x² + x − 1 = x² + 5\n```\nРаскрыли скобки слева. Переносим всё в одну сторону (правую часть вычитаем) и приводим подобные:\n```\nx² + x − 6 = 0\na = 1, b = 1, c = −6\nD = b² − 4ac\n  = 1² − 4 × 1 × (−6)\n  = 1 − (−24) = 25\n√D = 5\nx₁ = (−b + √D) / 2a\n   = (−1 + 5) / 2 = 2\nx₂ = (−b − √D) / 2a\n   = (−1 − 5) / 2 = −3\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\n(2x − 1)(x + 1) = x² + 5\n2x² + x − 1 = x² + 5\n```\nWe opened the brackets on the left. Move everything to one side (subtract the right side) and combine like terms:\n```\nx² + x − 6 = 0\na = 1, b = 1, c = −6\nD = b² − 4ac\n  = 1² − 4 × 1 × (−6)\n  = 1 − (−24) = 25\n√D = 5\nx₁ = (−b + √D) / 2a\n   = (−1 + 5) / 2 = 2\nx₂ = (−b − √D) / 2a\n   = (−1 − 5) / 2 = −3\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "3",
            "2"
          ],
          "abc": [
            "1",
            "-5",
            "6"
          ]
        },
        "hints": [
          {
            "he": "פתחו סוגריים: (2x + 1)(x − 3) = 2x² − 5x − 3. אחר כך העבירו הכול שמאלה.",
            "ru": "Раскрой скобки: (2x + 1)(x − 3) = 2x² − 5x − 3. Потом перенеси всё влево.",
            "en": "Expand: (2x + 1)(x − 3) = 2x² − 5x − 3. Then move everything to the left."
          },
          {
            "he": "התחילו מהמקדמים: a = 1, b = −5, c = 6. אחר כך חשבו D = b² − 4ac. שימו לב: b שלילי, לכן b² = (−5)² = 25 — עם סוגריים, כי מספר שלילי בריבוע יוצא חיובי.",
            "ru": "Начни с коэффициентов: a = 1, b = −5, c = 6. Потом посчитай D = b² − 4ac. Внимание: b отрицательное, поэтому b² = (−5)² = 25 — в скобках, ведь отрицательное число в квадрате положительно.",
            "en": "Start with the coefficients: a = 1, b = −5, c = 6. Then compute D = b² − 4ac. Careful: b is negative, so b² = (−5)² = 25 — use brackets, a negative number squared is positive."
          },
          {
            "he": "D = 1, ולכן √D = 1. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 1, значит √D = 1. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 1, so √D = 1. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          }
        ],
        "solution": [
          {
            "he": "פותחים סוגריים בצד שמאל",
            "ru": "Раскрываем скобки слева",
            "en": "Expand the left side"
          },
          "(2x + 1)(x − 3) = 2x² − 6x + x − 3",
          "(2x + 1)(x − 3) = 2x² − 5x − 3",
          {
            "he": "מעבירים הכול לצד שמאל",
            "ru": "Переносим всё влево",
            "en": "Move everything to the left"
          },
          "2x² − 5x − 3 − x² + 9 = 0",
          "x² − 5x + 6 = 0",
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 1,  b = −5,  c = 6",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = (−5)² − 4 × 1 × 6",
          "D = 25 − 24",
          "D = 1",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √1 = 1",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "−b = −(−5) = 5",
          "x₁ = (5 + 1) / (2 × 1)",
          "x₁ = 6 / 2",
          "x₁ = 3",
          "x₂ = (5 − 1) / (2 × 1)",
          "x₂ = 4 / 2",
          "x₂ = 2",
          {
            "he": "תשובה: x₁ = 3,  x₂ = 2",
            "ru": "Ответ: x₁ = 3,  x₂ = 2",
            "en": "Answer: x₁ = 3,  x₂ = 2"
          }
        ]
      },
      {
        "id": "ai3-4",
        "level": 3,
        "label": "3.4",
        "kind": "roots",
        "text": "(x + 1)/2 − 1 = 3/x",
        "example": {
          "he": "המשוואה:\n```\nx/2 − 1 = 4/x        x ≠ 0\nx² − 2x = 8\n```\nכפלנו את שני הצדדים ב־`2x`. חשוב: `x ≠ 0`. מעבירים את 8 שמאלה:\n```\nx² − 2x − 8 = 0\na = 1, b = −2, c = −8\nD = b² − 4ac\n  = (−2)² − 4 × 1 × (−8)\n  = 4 − (−32) = 36\n√D = 6\nx₁ = (−b + √D) / 2a\n   = (2 + 6) / 2 = 4\nx₂ = (−b − √D) / 2a\n   = (2 − 6) / 2 = −2\n```\n`D > 0` → שני פתרונות.",
          "ru": "Уравнение:\n```\nx/2 − 1 = 4/x        x ≠ 0\nx² − 2x = 8\n```\nУмножили обе части на `2x`. Важно: `x ≠ 0`. Переносим 8 влево:\n```\nx² − 2x − 8 = 0\na = 1, b = −2, c = −8\nD = b² − 4ac\n  = (−2)² − 4 × 1 × (−8)\n  = 4 − (−32) = 36\n√D = 6\nx₁ = (−b + √D) / 2a\n   = (2 + 6) / 2 = 4\nx₂ = (−b − √D) / 2a\n   = (2 − 6) / 2 = −2\n```\n`D > 0` → два решения.",
          "en": "Equation:\n```\nx/2 − 1 = 4/x        x ≠ 0\nx² − 2x = 8\n```\nWe multiplied both sides by `2x`. Important: `x ≠ 0`. Move the 8 to the left:\n```\nx² − 2x − 8 = 0\na = 1, b = −2, c = −8\nD = b² − 4ac\n  = (−2)² − 4 × 1 × (−8)\n  = 4 − (−32) = 36\n√D = 6\nx₁ = (−b + √D) / 2a\n   = (2 + 6) / 2 = 4\nx₂ = (−b − √D) / 2a\n   = (2 − 6) / 2 = −2\n```\n`D > 0` → two solutions."
        },
        "answer": {
          "roots": [
            "3",
            "-2"
          ],
          "abc": [
            "1",
            "-1",
            "-6"
          ]
        },
        "hints": [
          {
            "he": "כפלו כל איבר ב־2x (המכנה המשותף). גם את 1 שבאמצע!",
            "ru": "Умножь каждый член на 2x (общий знаменатель). И единицу посередине тоже!",
            "en": "Multiply every term by 2x (the common denominator) — the 1 in the middle too!"
          },
          {
            "he": "התחילו מהמקדמים: a = 1, b = −1, c = −6. אחר כך חשבו D = b² − 4ac. שימו לב: b שלילי, לכן b² = (−1)² = 1 — עם סוגריים, כי מספר שלילי בריבוע יוצא חיובי.",
            "ru": "Начни с коэффициентов: a = 1, b = −1, c = −6. Потом посчитай D = b² − 4ac. Внимание: b отрицательное, поэтому b² = (−1)² = 1 — в скобках, ведь отрицательное число в квадрате положительно.",
            "en": "Start with the coefficients: a = 1, b = −1, c = −6. Then compute D = b² − 4ac. Careful: b is negative, so b² = (−1)² = 1 — use brackets, a negative number squared is positive."
          },
          {
            "he": "D = 25, ולכן √D = 5. עכשיו הציבו ב־x = (−b ± √D) / (2a) — פעם עם פלוס ופעם עם מינוס.",
            "ru": "D = 25, значит √D = 5. Теперь подставь в x = (−b ± √D) / (2a) — один раз с плюсом, один раз с минусом.",
            "en": "D = 25, so √D = 5. Now substitute into x = (−b ± √D) / (2a) — once with plus, once with minus."
          }
        ],
        "solution": [
          {
            "he": "תחום הגדרה: x ≠ 0.",
            "ru": "ОДЗ: x ≠ 0.",
            "en": "Domain: x ≠ 0."
          },
          {
            "he": "מכנה משותף: 2x. כופלים בו כל איבר",
            "ru": "Общий знаменатель: 2x. Умножаем на него каждый член",
            "en": "Common denominator: 2x. Multiply every term by it"
          },
          "x(x + 1) − 2x = 6",
          "x² + x − 2x = 6",
          "x² − x = 6",
          "x² − x − 6 = 0",
          {
            "he": "מזהים את המקדמים",
            "ru": "Выписываем коэффициенты",
            "en": "Write down the coefficients"
          },
          "a = 1,  b = −1,  c = −6",
          {
            "he": "מחשבים את הדיסקרימיננטה",
            "ru": "Считаем дискриминант",
            "en": "Compute the discriminant"
          },
          "D = b² − 4ac",
          "D = (−1)² − 4 × 1 × (−6)",
          "D = 1 − (−24)",
          "D = 1 + 24",
          "D = 25",
          {
            "he": "מוציאים שורש",
            "ru": "Извлекаем корень",
            "en": "Take the square root"
          },
          "√D = √25 = 5",
          {
            "he": "מציבים בנוסחת השורשים",
            "ru": "Подставляем в формулу корней",
            "en": "Substitute into the quadratic formula"
          },
          "x = (−b ± √D) / (2a)",
          "−b = −(−1) = 1",
          "x₁ = (1 + 5) / (2 × 1)",
          "x₁ = 6 / 2",
          "x₁ = 3",
          "x₂ = (1 − 5) / (2 × 1)",
          "x₂ = −4 / 2",
          "x₂ = −2",
          {
            "he": "תשובה: x₁ = 3,  x₂ = −2",
            "ru": "Ответ: x₁ = 3,  x₂ = −2",
            "en": "Answer: x₁ = 3,  x₂ = −2"
          },
          {
            "he": "בודקים: אף פתרון אינו 0, ולכן שניהם מתאימים.",
            "ru": "Проверяем: ни один корень не равен 0, значит оба подходят.",
            "en": "Check: neither root is 0, so both are valid."
          }
        ]
      }
    ]
  }
};

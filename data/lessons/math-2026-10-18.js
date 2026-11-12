/* Lesson data file. Format: see the comment at the top of data/lessons/math-2026-11-01.js.
   Every answer and every equation line in the solutions, hints and board examples was checked
   with exact fraction arithmetic (the solution substituted back into each line) — 429 lines.
   Multiplication sign is "×". */
window.LESSONS = window.LESSONS || {};
window.LESSONS["math-2026-10-18"] = {
  "id": "math-2026-10-18",
  "subject": "math",
  "date": "2026-10-18",
  "title": {
    "he": "משוואות ממעלה ראשונה ומערכות משוואות",
    "ru": "Линейные уравнения и системы уравнений",
    "en": "Linear equations and systems of equations"
  },
  "summary": {
    "he": "מעבר אגף, פתיחת סוגריים (גם עם מינוס), סוגריים כפול סוגריים, מכנה משותף, ומערכת של שתי משוואות בשיטת החיבור.",
    "ru": "Перенос через «=», раскрытие скобок (и с минусом), скобка на скобку, общий знаменатель и система двух уравнений методом сложения.",
    "en": "Moving terms across \"=\", expanding brackets (including a minus), bracket times bracket, common denominators, and a system of two equations by the addition method."
  },
  "timeline": [
    {
      "why": {
        "he": "למה מתחילים ממשוואות? כמעט כל נושא בהמשך (מערכות, משוואה ריבועית, סטטיסטיקה, ובתכנות — נוסחאות בקוד) מגיע בסוף למשוואה שצריך לפתור. מי ששולט בהעברת אגפים — רגוע בכל השאר.",
        "ru": "Зачем начинать с уравнений? Почти каждая тема дальше (системы, квадратные уравнения, статистика, а в программировании — формулы в коде) в конце сводится к уравнению, которое надо решить. Кто уверенно переносит через «=», тому спокойно и во всём остальном.",
        "en": "Why start with equations? Almost every later topic (systems, quadratics, statistics, and formulas in code) ends in an equation to solve. If you can move terms across \"=\" with confidence, the rest is calm."
      },
      "kind": "talk",
      "title": {
        "he": "פתיחת הקורס: מתחילים מהבסיס",
        "ru": "Начало курса: с самой базы",
        "en": "Starting the course: the basics"
      },
      "text": {
        "he": "השיעור התחיל ממשוואות ממעלה ראשונה — הבסיס של כל הקורס. בהמשך הקורס: גאומטריה ותלת־ממד, סטטיסטיקה והסתברות. לומדים מה שצריך למקצוע.",
        "ru": "Урок начался с линейных уравнений (משוואות ממעלה ראשונה) — это основа всего курса. Дальше в курсе: геометрия и 3D, статистика и вероятность. Учим то, что нужно для специальности.",
        "en": "The lesson started with linear equations (משוואות ממעלה ראשונה) — the foundation of the whole course. Later in the course: geometry and 3D, statistics and probability. We learn what the profession needs."
      }
    },
    {
      "why": {
        "he": "משוואה היא מאזניים בשיווי משקל. אם מורידים 8 רק מצד אחד — המאזניים נוטים. לכן כל פעולה עושים בשני האגפים. \"העברה\" היא רק קיצור: במקום לכתוב `+ 8` בשני הצדדים, ה-`− 8` \"עובר\" ומחליף סימן.",
        "ru": "Уравнение — это весы в равновесии. Если снять 8 только с одной чаши, весы перекосятся. Поэтому каждое действие делаем с обеими частями. «Перенос» — это просто сокращение: вместо того чтобы писать `+ 8` в обеих частях, `− 8` «переходит» на другую сторону и меняет знак.",
        "en": "An equation is a balanced scale. Take 8 off one side only and the scale tips. So every action is done to both sides. \"Moving\" a term is just a shortcut: instead of writing `+ 8` on both sides, the `− 8` \"moves over\" and changes sign."
      },
      "kind": "talk",
      "title": {
        "he": "משוואה היא מאזניים",
        "ru": "Уравнение — это весы",
        "en": "An equation is a balance"
      },
      "text": {
        "he": "מה שעושים לאגף אחד — עושים גם לאגף השני. מעבר אגף מחליף פעולה `+` הופך ל־`−`, כפל הופך לחילוק.",
        "ru": "Что делаем с одной частью (אגף) — делаем и с другой. Перенос через «=» меняет действие `+` становится `−`, умножение — делением.",
        "en": "Whatever you do to one side (אגף), do to the other. Moving across \"=\" swaps the operation `+` becomes `−`, multiplication becomes division."
      },
      "math": [
        "5x − 8 = 22",
        "5x = 22 + 8",
        "5x = 30",
        "x = 30 / 5",
        "x = 6"
      ]
    },
    {
      "why": {
        "he": "למה מחלקים במספר יחד עם הסימן שלו? כי מה שעומד ליד x הוא `−3.5`, לא `3.5`. אם מחלקים רק ב-3.5, נשאר `−x`, ועוד צעד לטעות. במחשבון Casio את המספר השלילי מקלידים עם `(-)` ובסוגריים.",
        "ru": "Почему делим на число вместе с его знаком? Потому что рядом с x стоит `−3.5`, а не `3.5`. Если разделить только на 3.5, останется `−x` — и лишний шаг для ошибки. На Casio отрицательное число набираем через `(-)` и в скобках.",
        "en": "Why divide by the number together with its sign? Because what stands next to x is `−3.5`, not `3.5`. Dividing only by 3.5 leaves `−x` — one more step to get wrong. On a Casio type the negative number with `(-)` and in brackets."
      },
      "kind": "tip",
      "title": {
        "he": "מותר להשתמש במחשבון",
        "ru": "Калькулятор можно",
        "en": "A calculator is allowed"
      },
      "text": {
        "he": "אין חובה לחשב ביד — מותר לפתור עם מחשבון. מחלקים במספר שלפני x יחד עם הסימן שלו",
        "ru": "Не обязательно считать вручную — можно решать на калькуляторе. Делим на число перед x вместе с его знаком",
        "en": "You don't have to compute by hand — a calculator is allowed. Divide by the number in front of x together with its sign"
      },
      "math": [
        "−3.5x = 31.5",
        "x = 31.5 / (−3.5)",
        "x = −9"
      ]
    },
    {
      "why": {
        "he": "בדיקה: מציבים `x = −2.5`.",
        "ru": "Проверка — подставляем `x = −2.5`.",
        "en": "Check: substitute `x = −2.5`."
      },
      "whyMath": [
        "−12.3 − 1.6 × (−2.5)",
        "= −12.3 + 4",
        "= −8.3"
      ],
      "kind": "board",
      "title": {
        "he": "דוגמה מהלוח `−12.3 − 1.6x = −8.3`",
        "ru": "Пример с доски `−12.3 − 1.6x = −8.3`",
        "en": "Board example `−12.3 − 1.6x = −8.3`"
      },
      "text": {
        "he": "מעבירים את המספר לאגף ימין ומחלקים ב־`−1.6`",
        "ru": "Переносим число вправо и делим на `−1.6`",
        "en": "Move the number to the right and divide by `−1.6`"
      },
      "math": [
        "−1.6x = −8.3 + 12.3",
        "−1.6x = 4",
        "x = −2.5"
      ]
    },
    {
      "why": {
        "he": "אוספים את כל ה-x לצד אחד, כי רק כך אפשר לקבל \"מספר × x = מספר\" ולחלק. כינוס איברים דומים קודם מקטין את מספר האיברים, ולכן פחות מקום לטעות בסימן.",
        "ru": "Все x собираем в одну сторону, потому что только так получится «число × x = число», и можно разделить. Приведение подобных сначала уменьшает число членов — меньше места для ошибки в знаке.",
        "en": "Gather all the x terms on one side, because only then do you get \"number × x = number\" and can divide. Combining like terms first leaves fewer terms, so fewer chances for a sign mistake."
      },
      "kind": "talk",
      "title": {
        "he": "x בשני האגפים",
        "ru": "x в обеих частях",
        "en": "x on both sides"
      },
      "text": {
        "he": "דרך אחת: אוספים את כל ה־x לאגף אחד ואת כל המספרים לאגף השני. לפני כן כדאי לכנס איברים דומים בכל אגף.",
        "ru": "Способ: все x переносим в одну сторону, все числа — в другую. Перед этим удобно привести подобные в каждой части.",
        "en": "The method: move all x terms to one side and all numbers to the other. Before that, combine like terms on each side."
      },
      "math": [
        "12 + 3x + 2x = 4x + 8 + 3x",
        "12 + 5x = 7x + 8",
        "5x − 7x = 8 − 12",
        "−2x = −4",
        "x = 2"
      ]
    },
    {
      "why": {
        "he": "הסימן לפני המספר שייך למספר. `−3(5 + x)` פירושו `(−3) × 5 + (−3) × x`. טעות נפוצה היא להכפיל רק את האיבר הראשון או לשכוח את המינוס באיבר השני.",
        "ru": "Знак перед числом принадлежит числу. `−3(5 + x)` означает `(−3) × 5 + (−3) × x`. Частая ошибка — умножить только первый член или забыть минус у второго.",
        "en": "The sign before the number belongs to the number. `−3(5 + x)` means `(−3) × 5 + (−3) × x`. A common mistake is multiplying only the first term, or forgetting the minus on the second."
      },
      "whyMath": [
        "−3(5 + x)",
        "= (−3) × 5 + (−3) × x",
        "= −15 − 3x"
      ],
      "kind": "tip",
      "title": {
        "he": "מינוס לפני סוגריים",
        "ru": "Минус перед скобкой",
        "en": "A minus in front of brackets"
      },
      "text": {
        "he": "כאן הרבה טועים. המספר שלפני הסוגריים — יחד עם המינוס — כופל כל איבר בפנים",
        "ru": "Здесь многие ошибаются. Число перед скобкой — вместе с минусом — умножает каждый член внутри",
        "en": "Many people make mistakes here. The number in front of the brackets — together with its minus — multiplies every term inside"
      },
      "math": [
        "−3(5 + x) = −15 − 3x"
      ]
    },
    {
      "why": {
        "he": "למה לא `15 − 4 = 11`? כי ה-4 \"דבוק\" לסוגריים: זה כפל, וכפל לפני חיסור. אם מחסרים קודם, משנים את התרגיל. וגם `−4 × (−3) = +12`, מינוס כפול מינוס.",
        "ru": "Почему нельзя `15 − 4 = 11`? Потому что 4 «приклеено» к скобке: это умножение, а умножение раньше вычитания. Если вычесть сначала, получится другое выражение. И ещё `−4 × (−3) = +12` — минус на минус.",
        "en": "Why not `15 − 4 = 11`? Because the 4 is \"stuck\" to the bracket: it is multiplication, and multiplication comes before subtraction. Subtracting first changes the problem. Also `−4 × (−3) = +12`, minus times minus."
      },
      "kind": "board",
      "title": {
        "he": "סוגריים במשוואה `15 − 4(2x − 3) = 43`",
        "ru": "Скобки в уравнении `15 − 4(2x − 3) = 43`",
        "en": "Brackets in an equation `15 − 4(2x − 3) = 43`"
      },
      "text": {
        "he": "לא מחשבים קודם `15 − 4` הכפל קודם, לכן קודם פותחים סוגריים.",
        "ru": "Нельзя сначала считать `15 − 4` умножение раньше, поэтому сначала раскрываем скобку.",
        "en": "Don't compute `15 − 4` first: multiplication comes first, so expand the bracket first."
      },
      "math": [
        "15 − 8x + 12 = 43",
        "27 − 8x = 43",
        "−8x = 16",
        "x = −2"
      ]
    },
    {
      "why": {
        "he": "כל איבר בסוגריים הראשונים צריך \"לפגוש\" כל איבר בשניים — 2 × 2 = 4 מכפלות. כדי לא לשכוח: מכפילים את הראשון בשניהם, אחר כך את השני בשניהם. ה-`x²` מצטמצם רק כי הוא מופיע בשני האגפים עם אותו מקדם — אחרת זו משוואה ריבועית (שיעור 01.11).",
        "ru": "Каждый член первой скобки должен «встретиться» с каждым членом второй — 2 × 2 = 4 произведения. Чтобы не забыть: умножаем первый на оба, потом второй на оба. `x²` сокращается только потому, что он есть в обеих частях с одним и тем же коэффициентом — иначе это квадратное уравнение (урок 01.11).",
        "en": "Each term of the first bracket must \"meet\" each term of the second — 2 × 2 = 4 products. To not miss one: multiply the first by both, then the second by both. The `x²` cancels only because it is on both sides with the same coefficient — otherwise it is a quadratic (lesson 01.11)."
      },
      "whyMath": [
        "(x + 3)(x + 4)",
        "= x × x + x × 4 + 3 × x + 3 × 4",
        "= x² + 7x + 12"
      ],
      "kind": "talk",
      "title": {
        "he": "סוגריים כפול סוגריים",
        "ru": "Скобка на скобку",
        "en": "Bracket times bracket"
      },
      "text": {
        "he": "כל איבר מהסוגריים הראשונים כופלים בכל איבר מהסוגריים השניים. `x × x = x²`. אם `x²` מופיע בשני האגפים — הוא מצטמצם, ונשארת משוואה ממעלה ראשונה.",
        "ru": "Каждый член первой скобки умножаем на каждый член второй. `x × x = x²`. Если `x²` есть в обеих частях — он сокращается, и остаётся линейное уравнение.",
        "en": "Multiply every term of the first bracket by every term of the second. `x × x = x²`. If `x²` is on both sides, it cancels and a linear equation remains."
      },
      "math": [
        "(x + 3)(x + 4) = x(x + 5) + 96",
        "x² + 7x + 12 = x² + 5x + 96",
        "2x = 84",
        "x = 42"
      ]
    },
    {
      "why": {
        "he": "למה מכנה משותף? שברים קשה להעביר ולחבר. אם מכפילים את כל המשוואה במספר שמתחלק בכל המכנים, כל השברים נעלמים — ומקבלים משוואה רגילה. מותר, כי כופלים את שני האגפים באותו מספר (המאזניים נשארים מאוזנים).\nלמה סוגריים למונה? כי המינוס לפני השבר שייך לכל המונה, לא רק לאיבר הראשון.",
        "ru": "Зачем общий знаменатель? Дроби трудно переносить и складывать. Если умножить всё уравнение на число, которое делится на все знаменатели, все дроби исчезают — и получается обычное уравнение. Так можно, потому что обе части умножаем на одно и то же число (весы остаются в равновесии).\nЗачем скобки у числителя? Потому что минус перед дробью относится ко всему числителю, а не только к первому члену.",
        "en": "Why a common denominator? Fractions are hard to move and add. Multiply the whole equation by a number every denominator divides, and all the fractions vanish — you get an ordinary equation. It is allowed because both sides are multiplied by the same number (the scale stays balanced).\nWhy brackets on the numerator? Because the minus before the fraction belongs to the whole numerator, not only its first term."
      },
      "kind": "talk",
      "title": {
        "he": "משוואות עם מכנה",
        "ru": "Уравнения со знаменателем",
        "en": "Equations with denominators"
      },
      "text": {
        "he": "מוצאים מכנה משותף וכופלים בו כל איבר במשוואה — גם איבר בלי שבר. מינוס לפני שבר חל על כל המונה, לכן שמים את המונה בסוגריים.\nהשיטה מהשיעור: לוקחים את המכנה הגדול וכופלים אותו ב־2, 3, 4… עד שהוא מתחלק בכל המכנים. אפשר גם לכפול את כל המכנים זה בזה — זה עובד, אבל יוצאים מספרים ענקיים.",
        "ru": "Находим общий знаменатель и умножаем на него каждый член уравнения — даже без дроби. Минус перед дробью действует на весь числитель, поэтому числитель берём в скобки.\nСпособ с урока: берём самый большой знаменатель и умножаем его на 2, 3, 4…, пока он не поделится на все знаменатели. Можно и перемножить все знаменатели — это работает, но получаются огромные числа.",
        "en": "Find a common denominator and multiply every term of the equation by it — even a term without a fraction. A minus before a fraction applies to the whole numerator, so put the numerator in brackets.\nThe method from class: take the largest denominator and multiply it by 2, 3, 4… until it divides by all the denominators. Multiplying all the denominators together also works, but the numbers get huge."
      }
    },
    {
      "why": {
        "he": "למה 80? הוא המספר הקטן ביותר שמתחלק ב-5, 16, 20 ו-4. מכפלה של כל המכנים (`5 × 16 × 20 × 4 = 6400`) גם תעבוד, אבל המספרים יהיו ענקיים.\nבדיקה: מציבים `x = 4`.",
        "ru": "Почему 80? Это самое маленькое число, которое делится на 5, 16, 20 и 4. Произведение всех знаменателей (`5 × 16 × 20 × 4 = 6400`) тоже сработает, но числа будут огромными.\nПроверка — подставляем `x = 4`.",
        "en": "Why 80? It is the smallest number divisible by 5, 16, 20 and 4. The product of all the denominators (`5 × 16 × 20 × 4 = 6400`) also works, but the numbers get huge.\nCheck: substitute `x = 4`."
      },
      "whyMath": [
        "(2 × 4 − 3)/5 = 1",
        "(5 × 4 + 12)/16 = 2",
        "(32 − 3 × 4)/20 = 1",
        "1 + 2 − 1 = 2",
        "(5 × 4 − 12)/4 = 2"
      ],
      "kind": "board",
      "title": {
        "he": "דוגמה מהלוח: מכנה משותף 80",
        "ru": "Пример с доски: общий знаменатель 80",
        "en": "Board example: common denominator 80"
      },
      "text": {
        "he": "`(2x − 3)/5 + (5x + 12)/16 − (32 − 3x)/20 = (5x − 12)/4`\nמעל כל שבר כותבים בכמה כופלים `80 / 5 = 16`, `80 / 16 = 5`, `80 / 20 = 4`, `80 / 4 = 20`.",
        "ru": "`(2x − 3)/5 + (5x + 12)/16 − (32 − 3x)/20 = (5x − 12)/4`\nНад каждой дробью пишем, на сколько умножаем `80 / 5 = 16`, `80 / 16 = 5`, `80 / 20 = 4`, `80 / 4 = 20`.",
        "en": "`(2x − 3)/5 + (5x + 12)/16 − (32 − 3x)/20 = (5x − 12)/4`\nAbove each fraction write what it is multiplied by `80 / 5 = 16`, `80 / 16 = 5`, `80 / 20 = 4`, `80 / 4 = 20`."
      },
      "math": [
        "16(2x − 3) + 5(5x + 12) − 4(32 − 3x) = 20(5x − 12)",
        "32x − 48 + 25x + 60 − 128 + 12x = 100x − 240",
        "−31x = −124",
        "x = 4"
      ]
    },
    {
      "why": {
        "he": "משוואה אחת עם שני נעלמים יש לה אינסוף פתרונות (`x + y = 8` — גם 7 ו-1, גם 5 ו-3). המשוואה השנייה בוחרת מתוכם את הזוג היחיד שמתאים לשתיהן. חיבור משוואות מותר, כי מוסיפים לשני האגפים דברים שווים.",
        "ru": "У одного уравнения с двумя неизвестными бесконечно много решений (`x + y = 8` — и 7 и 1, и 5 и 3). Второе уравнение выбирает из них единственную пару, которая подходит обоим. Складывать уравнения можно, потому что к обеим частям прибавляем равные вещи.",
        "en": "One equation with two unknowns has infinitely many solutions (`x + y = 8` — 7 and 1, 5 and 3...). The second equation picks the one pair that fits both. Adding equations is allowed because we add equal things to both sides."
      },
      "kind": "talk",
      "title": {
        "he": "מערכת של שתי משוואות: שיטת החיבור",
        "ru": "Система двух уравнений: метод сложения",
        "en": "A system of two equations: the addition method"
      },
      "text": {
        "he": "כשיש שני נעלמים, x ו־y, צריך שתי משוואות. מחברים את המשוואות כך שאחד הנעלמים מצטמצם, מוצאים את השני, ואז מציבים אותו באחת המשוואות.",
        "ru": "Когда неизвестных два, x и y, нужны два уравнения. Складываем уравнения так, чтобы одно неизвестное сократилось, находим второе и подставляем его в одно из уравнений.",
        "en": "With two unknowns, x and y, you need two equations. Add the equations so that one unknown cancels, find the other, then substitute it into one of the equations."
      },
      "math": [
        "x + y = 8",
        "x − y = 6",
        "2x = 14",
        "x = 7",
        "7 + y = 8",
        "y = 1"
      ]
    },
    {
      "why": {
        "he": "המטרה היא שאחד המקדמים יהפוך ל-0. `3y + (−3y) = 0` — לכן מחברים כשהסימנים שונים. `3y − 3y = 0` — לכן מחסרים כשהסימנים שווים. העצה \"להכפיל במספר שלילי\" הופכת את המקרה השני לראשון, ואז תמיד מחברים — פחות דברים לזכור.",
        "ru": "Цель — чтобы один из коэффициентов стал 0. `3y + (−3y) = 0` — поэтому складываем, когда знаки разные. `3y − 3y = 0` — поэтому вычитаем, когда знаки одинаковые. Совет «умножить на отрицательное число» превращает второй случай в первый, и тогда всегда складываем — меньше запоминать.",
        "en": "The goal is to make one coefficient 0. `3y + (−3y) = 0` — so add when the signs differ. `3y − 3y = 0` — so subtract when the signs are the same. The tip \"multiply by a negative number\" turns the second case into the first, so you always add — less to remember."
      },
      "kind": "tip",
      "title": {
        "he": "מתי מחברים ומתי מחסירים",
        "ru": "Когда складывать, а когда вычитать",
        "en": "When to add and when to subtract"
      },
      "text": {
        "he": "אותו מקדם עם סימנים שונים — מחברים. אותו מקדם עם אותו סימן — מחסירים.\nאם המקדמים לא שווים, כופלים משוואה במספר — את כל המשוואה, כל איבר. את המשוואה השנייה לא חייבים לכפול.\nהעצה מהשיעור: לכפול במספר שלילי — ואז תמיד מחברים.",
        "ru": "Одинаковый коэффициент с разными знаками — складываем. С одинаковыми знаками — вычитаем.\nЕсли коэффициенты не равны, умножаем уравнение на число — всё уравнение, каждый член. Второе уравнение умножать не обязательно.\nСовет с урока: умножать на отрицательное число — и тогда всегда складывать.",
        "en": "Same coefficient with different signs — add. Same coefficient with the same sign — subtract.\nIf the coefficients are not equal, multiply an equation by a number — the whole equation, every term. You don't have to multiply the other equation.\nThe tip from class: multiply by a negative number — then you always add."
      }
    },
    {
      "why": {
        "he": "למה להכפיל דווקא ב-2? כי ב-y יש `1` ו-`−2` אחרי כפל ב-2 מקבלים `2y` ו-`−2y`, שמתבטלים בחיבור. מכפילים את כל המשוואה — גם את 9 — אחרת היא כבר לא אותה משוואה.\nבדיקה במשוואה השנייה `3 × 2 − 2 × 1 = 4`.",
        "ru": "Почему умножаем именно на 2? Потому что у y стоят `1` и `−2` после умножения на 2 получаем `2y` и `−2y`, которые при сложении сокращаются. Умножаем всё уравнение — и 9 тоже, иначе это уже другое уравнение.\nПроверка во втором уравнении — `3 × 2 − 2 × 1 = 4`.",
        "en": "Why multiply by 2? Because y has `1` and `−2` after multiplying by 2 we get `2y` and `−2y`, which cancel when added. Multiply the whole equation — the 9 too — otherwise it is no longer the same equation.\nCheck in the second equation `3 × 2 − 2 × 1 = 4`."
      },
      "kind": "board",
      "title": {
        "he": "תרגיל 24 מהלוח",
        "ru": "Задание 24 с доски",
        "en": "Exercise 24 from the board"
      },
      "text": {
        "he": "`4x + y = 9`, `3x − 2y = 4`. כאן אי אפשר לחבר מיד: כופלים את המשוואה הראשונה ב־2, ואז `+2y` ו־`−2y` מצטמצמים.",
        "ru": "`4x + y = 9`, `3x − 2y = 4`. Сразу сложить нельзя: умножаем первое уравнение на 2, и тогда `+2y` и `−2y` сокращаются.",
        "en": "`4x + y = 9`, `3x − 2y = 4`. You can't add right away: multiply the first equation by 2, and then `+2y` and `−2y` cancel."
      },
      "math": [
        "8x + 2y = 18",
        "11x = 22",
        "x = 2",
        "4 × 2 + y = 9",
        "y = 1"
      ]
    },
    {
      "why": {
        "he": "הפתרון אותו פתרון, כי זה אותו זוג מספרים. בוחרים את מה שקל יותר: את הנעלם שהמקדמים שלו כבר שווים, או שצריך להכפיל רק משוואה אחת במספר קטן.",
        "ru": "Ответ получится тот же, потому что это та же пара чисел. Выбирай, что проще: неизвестное, у которого коэффициенты уже равны, или где нужно умножить только одно уравнение на маленькое число.",
        "en": "The answer is the same, because it is the same pair of numbers. Pick what is easier: the unknown whose coefficients are already equal, or where only one equation needs a small multiplier."
      },
      "kind": "qa",
      "q": {
        "he": "את מה מצמצמים — את x או את y?",
        "ru": "Что убирать — x или y?",
        "en": "Which one do we eliminate — x or y?"
      },
      "a": {
        "he": "זה לא משנה. העיקר שאחד הנעלמים ייעלם בשלב הראשון; אחר כך מוצאים אותו ומציבים כדי למצוא את השני.",
        "ru": "Не важно. Главное, чтобы на первом шаге одно неизвестное исчезло; потом находим его и подставляем, чтобы найти второе.",
        "en": "It doesn't matter. The main thing is that one unknown disappears in the first step; then find it and substitute to get the other."
      }
    },
    {
      "why": {
        "he": "בבחינה אין AI. אם הוא פותר במקומכם, נשארת תשובה בלי מיומנות. כשמבקשים רמז — \"מה הצעד הבא?\" — אתם עושים את החשבון בעצמכם, וזה מה שנשאר בראש.",
        "ru": "На экзамене ИИ нет. Если он решает за тебя, остаётся ответ без навыка. Когда просишь подсказку — «какой следующий шаг?» — считаешь сам, и именно это остаётся в голове.",
        "en": "There is no AI in the exam. If it solves for you, you are left with an answer and no skill. When you ask for a hint — \"what is the next step?\" — you do the work yourself, and that is what stays."
      },
      "kind": "tip",
      "title": {
        "he": "שימוש ב־AI",
        "ru": "Как пользоваться ИИ",
        "en": "Using AI"
      },
      "text": {
        "he": "מותר להיעזר ב־AI במתמטיקה, אבל לבקש ממנו רמז — איך לחשוב על הפתרון — ולא תשובה מוכנה.",
        "ru": "Пользоваться ИИ в математике можно, но просить у него подсказку — как думать над решением, — а не готовый ответ.",
        "en": "You may use AI for math, but ask it for a hint — how to think about the solution — not for a ready answer."
      }
    },
    {
      "why": {
        "he": "מציבים במשוואה המקורית ולא בשורה אחרונה של הפתרון — כי אם טעיתם באמצע, גם השורה האחרונה כבר שגויה, והבדיקה בה \"תאשר\" את הטעות.",
        "ru": "Подставляем в исходное уравнение, а не в последнюю строку решения: если ошибка была посередине, последняя строка уже неверная, и проверка по ней «подтвердит» ошибку.",
        "en": "Substitute into the original equation, not the last line of your work: if you slipped in the middle, the last line is already wrong, and checking it would \"confirm\" the mistake."
      },
      "kind": "faq",
      "q": {
        "he": "איך בודקים שהתשובה נכונה?",
        "ru": "Как проверить ответ?",
        "en": "How do I check my answer?"
      },
      "a": {
        "he": "מציבים את התשובה במשוואה המקורית ומחשבים כל אגף לחוד. אם שני האגפים שווים — התשובה נכונה. למשל ב־`5x − 8 = 22` עם `x = 6`, `5 × 6 − 8 = 22`.",
        "ru": "Подставляем ответ в исходное уравнение и считаем каждую часть отдельно. Если части равны — ответ верный. Например, в `5x − 8 = 22` при `x = 6`, `5 × 6 − 8 = 22`.",
        "en": "Substitute the answer into the original equation and compute each side separately. If both sides are equal, the answer is right. For example, in `5x − 8 = 22` with `x = 6`, `5 × 6 − 8 = 22`."
      }
    },
    {
      "kind": "talk",
      "title": {
        "he": "מספר הלימוד: מה זה משוואה ומה זה פתרון",
        "ru": "Из учебника: что такое уравнение и что такое решение",
        "en": "From the textbook: what an equation and a solution are"
      },
      "text": {
        "he": "משוואה — שני ביטויים עם סימן `=` ביניהם.\nפתרון — המספר שכאשר מציבים אותו במקום x, מקבלים שוויון נכון.\nדוגמה מהספר: `x + 2 = 5`. האם `x = 6`? לא, כי `6 + 2 = 8`. האם `x = 3`? כן, כי `3 + 2 = 5`. לכן `x = 3` הוא הפתרון.",
        "ru": "Уравнение — два выражения со знаком `=` между ними.\nРешение — число, которое после подстановки вместо x даёт верное равенство.\nПример из учебника — `x + 2 = 5`. Подходит ли `x = 6`? Нет, потому что `6 + 2 = 8`. Подходит ли `x = 3`? Да, потому что `3 + 2 = 5`. Значит, `x = 3` — решение.",
        "en": "An equation is two expressions with `=` between them.\nA solution is the number that, put in place of x, gives a true equality.\nExample from the book — `x + 2 = 5`. Is `x = 6` right? No, because `6 + 2 = 8`. Is `x = 3`? Yes, because `3 + 2 = 5`. So `x = 3` is the solution."
      },
      "why": {
        "he": "מההגדרה הזאת יוצאת הבדיקה: אחרי שפתרתם, מציבים את התשובה במשוואה המקורית. אם שני האגפים יוצאים שווים — הפתרון נכון. זה לוקח חצי דקה ומונע טעות בסימן.",
        "ru": "Из этого определения следует проверка: решил — подставь ответ в исходное уравнение. Если обе части равны, решение верное. Это полминуты, и так ловится ошибка в знаке.",
        "en": "This definition gives you the check: once solved, put the answer back into the original equation. If both sides come out equal, the solution is right. It takes half a minute and catches sign mistakes."
      },
      "_src": "pass-0311"
    },
    {
      "kind": "board",
      "title": {
        "he": "מספר הלימוד: משוואות שקולות",
        "ru": "Из учебника: равносильные уравнения",
        "en": "From the textbook: equivalent equations"
      },
      "text": {
        "he": "משוואות שקולות — משוואות עם אותו פתרון. הספר מתחיל מ-`x + 6 = 10` (הפתרון `x = 4`) ועושה פעולה על שני האגפים. בכל פעם הפתרון נשאר 4",
        "ru": "Равносильные уравнения — уравнения с одним и тем же решением. Учебник берёт `x + 6 = 10` (решение `x = 4`) и делает действие с обеими частями. Каждый раз решение остаётся 4.",
        "en": "Equivalent equations have the same solution. The book takes `x + 6 = 10` (solution `x = 4`) and does an operation on both sides. Each time the solution stays 4."
      },
      "math": [
        "x + 6 = 10",
        "(+ 2)  →  x + 8 = 12",
        "(− 2)  →  x + 4 = 8",
        "(× 2)  →  2x + 12 = 20",
        "(÷ 2)  →  x/2 + 3 = 5"
      ],
      "why": {
        "he": "המסקנה של הספר: מותר לחבר, לחסר, לכפול או לחלק את שני האגפים באותו מספר — חוץ מכפל או חילוק ב-0 — והמשוואה נשארת שקולה. זה כל הבסיס של \"העברת אגף\": כשמעבירים `+2` ימינה כ-`−2`, בעצם מחסירים 2 משני האגפים. ולמה לא 0? כפל ב-0 הופך כל משוואה ל-`0 = 0`, והפתרון הולך לאיבוד. חילוק ב-0 בכלל אסור.",
        "ru": "Вывод учебника: можно прибавить, вычесть, умножить или разделить обе части на одно и то же число — кроме умножения и деления на 0, — и уравнение останется равносильным. На этом стоит весь «перенос через =»: когда `+2` переходит направо как `−2`, мы на самом деле вычитаем 2 из обеих частей. А почему не 0? Умножение на 0 превращает любое уравнение в `0 = 0`, и решение теряется. А делить на 0 вообще нельзя.",
        "en": "The book's conclusion: you may add, subtract, multiply or divide both sides by the same number — except multiplying or dividing by 0 — and the equation stays equivalent. That is the whole basis of \"moving across =\": when `+2` moves right as `−2`, you are really subtracting 2 from both sides. Why not 0? Multiplying by 0 turns any equation into `0 = 0` and the solution is lost. Dividing by 0 is not allowed at all."
      },
      "_src": "pass-0311"
    }
  ],
  "review": [
    {
      "title": {
        "he": "כלל המאזניים",
        "ru": "Правило весов",
        "en": "The balance rule"
      },
      "text": {
        "he": "מה שעושים לאגף אחד — עושים גם לשני. במעבר אגף `+` הופך ל־`−`.",
        "ru": "Что делаем с одной частью — делаем и с другой. При переносе `+` становится `−`.",
        "en": "Do the same to both sides. Moving across \"=\" turns `+` into `−`."
      }
    },
    {
      "title": {
        "he": "איסוף איברים",
        "ru": "Собираем члены",
        "en": "Collect terms"
      },
      "text": {
        "he": "כל ה־x לאגף אחד, כל המספרים לאגף השני, ובסוף מחלקים במקדם של x — יחד עם הסימן.",
        "ru": "Все x в одну часть, все числа в другую, в конце делим на коэффициент при x — вместе со знаком.",
        "en": "All x terms to one side, all numbers to the other, then divide by the coefficient of x — with its sign."
      }
    },
    {
      "title": {
        "he": "סוגריים",
        "ru": "Скобки",
        "en": "Brackets"
      },
      "text": {
        "he": "קודם פותחים סוגריים. מינוס לפני הסוגריים הופך כל סימן בפנים `−3(5 + x) = −15 − 3x`.",
        "ru": "Сначала раскрываем скобки. Минус перед скобкой меняет каждый знак внутри `−3(5 + x) = −15 − 3x`.",
        "en": "Expand brackets first. A minus in front flips every sign inside `−3(5 + x) = −15 − 3x`."
      }
    },
    {
      "title": {
        "he": "סוגריים כפול סוגריים",
        "ru": "Скобка на скобку",
        "en": "Bracket × bracket"
      },
      "text": {
        "he": "כל איבר בכל איבר. `x²` שמופיע בשני האגפים מצטמצם.",
        "ru": "Каждый член на каждый. `x²` в обеих частях сокращается.",
        "en": "Every term times every term. `x²` on both sides cancels."
      }
    },
    {
      "title": {
        "he": "מכנה משותף",
        "ru": "Общий знаменатель",
        "en": "Common denominator"
      },
      "text": {
        "he": "המכנה הגדול × 2, 3, 4… עד שמתחלק בכולם. כופלים בו כל איבר, גם בלי שבר.",
        "ru": "Самый большой знаменатель × 2, 3, 4…, пока не делится на все. Умножаем на него каждый член, даже без дроби.",
        "en": "Largest denominator × 2, 3, 4… until all divide it. Multiply every term by it, even one without a fraction."
      }
    },
    {
      "title": {
        "he": "מערכת משוואות",
        "ru": "Система уравнений",
        "en": "A system of equations"
      },
      "text": {
        "he": "סימנים שונים — מחברים, סימנים שווים — מחסירים. מוצאים נעלם אחד ומציבים כדי למצוא את השני.",
        "ru": "Знаки разные — складываем, одинаковые — вычитаем. Находим одно неизвестное и подставляем, чтобы найти второе.",
        "en": "Different signs — add, same signs — subtract. Find one unknown, then substitute to find the other."
      }
    },
    {
      "title": {
        "he": "בדיקה",
        "ru": "Проверка",
        "en": "Check"
      },
      "text": {
        "he": "מציבים את התשובה במשוואה המקורית: שני האגפים צריכים לצאת שווים.",
        "ru": "Подставляем ответ в исходное уравнение: обе части должны совпасть.",
        "en": "Substitute the answer into the original equation: both sides must come out equal."
      }
    }
  ],
  "tasks": {
    "groups": {
      "1": {
        "he": "תרגיל 1 — משוואות פשוטות",
        "ru": "Задание 1 — Простые уравнения",
        "en": "Exercise 1 — Simple equations"
      },
      "2": {
        "he": "תרגיל 2 — x בשני האגפים",
        "ru": "Задание 2 — x в обеих частях",
        "en": "Exercise 2 — x on both sides"
      },
      "3": {
        "he": "תרגיל 3 — משוואות עם סוגריים",
        "ru": "Задание 3 — Уравнения со скобками",
        "en": "Exercise 3 — Equations with brackets"
      },
      "4": {
        "he": "תרגיל 4 — סוגריים כפול סוגריים",
        "ru": "Задание 4 — Скобка на скобку",
        "en": "Exercise 4 — Bracket times bracket"
      },
      "5": {
        "he": "תרגיל 5 — משוואות עם מכנה",
        "ru": "Задание 5 — Уравнения со знаменателем",
        "en": "Exercise 5 — Equations with denominators"
      },
      "23": {
        "he": "תרגיל 23 — מערכות משוואות",
        "ru": "Задание 23 — Системы уравнений",
        "en": "Exercise 23 — Systems of equations"
      },
      "24": {
        "he": "תרגיל 24 — מערכת עם כפל של משוואה",
        "ru": "Задание 24 — Система с умножением уравнения",
        "en": "Exercise 24 — A system where an equation is multiplied"
      },
      "book": {
        "he": "עוד מדף התרגילים (ספר, עמ' 17–18)",
        "ru": "Ещё из листа упражнений (учебник, с. 17–18)",
        "en": "More from the exercise sheet (book, pp. 17–18)"
      }
    },
    "teacher": [
      {
        "id": "t1-1",
        "group": "1",
        "label": "1א",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה `−3.5x = 31.5`",
          "ru": "Реши уравнение `−3.5x = 31.5`",
          "en": "Solve the equation `−3.5x = 31.5`"
        },
        "example": {
          "he": "המשוואה:\n```\n−2.5x = 12.5\nx = 12.5 / (−2.5)\nx = −5\n```\nמחלקים את שני הצדדים במספר שלפני x.",
          "ru": "Уравнение:\n```\n−2.5x = 12.5\nx = 12.5 / (−2.5)\nx = −5\n```\nДелим обе части на число перед x.",
          "en": "Equation:\n```\n−2.5x = 12.5\nx = 12.5 / (−2.5)\nx = −5\n```\nDivide both sides by the number in front of x."
        },
        "answer": {
          "value": "-9"
        },
        "hints": [
          {
            "he": "מה \"דבוק\" ל־x? עושים את הפעולה ההפוכה בשני האגפים.",
            "ru": "Что «прилипло» к x? Делаем обратное действие с обеими частями.",
            "en": "What is \"attached\" to x? Do the opposite operation on both sides."
          },
          {
            "he": "צעד ראשון `x = 31.5 / (−3.5)`",
            "ru": "Первый шаг `x = 31.5 / (−3.5)`",
            "en": "First step `x = 31.5 / (−3.5)`"
          },
          {
            "he": "בהמשך מקבלים `31.5 / 3.5 = 9`",
            "ru": "Дальше получится `31.5 / 3.5 = 9`",
            "en": "Next you get `31.5 / 3.5 = 9`"
          }
        ],
        "solution": [
          {
            "he": "מחלקים את שני האגפים ב־`−3.5`",
            "ru": "Делим обе части на `−3.5`",
            "en": "Divide both sides by `−3.5`"
          },
          "x = 31.5 / (−3.5)",
          "x = −9",
          {
            "he": "פלוס חלקי מינוס נותן מינוס.",
            "ru": "Плюс делить на минус даёт минус.",
            "en": "Plus divided by minus gives minus."
          },
          {
            "he": "תשובה `x = −9`",
            "ru": "Ответ `x = −9`",
            "en": "Answer `x = −9`"
          },
          {
            "he": "בדיקה `−3.5 × (−9) = 31.5` ✓",
            "ru": "Проверка `−3.5 × (−9) = 31.5` ✓",
            "en": "Check `−3.5 × (−9) = 31.5` ✓"
          }
        ]
      },
      {
        "id": "t1-2",
        "group": "1",
        "label": "1ב",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה `3x = 18`",
          "ru": "Реши уравнение `3x = 18`",
          "en": "Solve the equation `3x = 18`"
        },
        "example": {
          "he": "המשוואה:\n```\n4x = 28\nx = 28 / 4\nx = 7\n```\nמחלקים את שני הצדדים במספר שלפני x.",
          "ru": "Уравнение:\n```\n4x = 28\nx = 28 / 4\nx = 7\n```\nДелим обе части на число перед x.",
          "en": "Equation:\n```\n4x = 28\nx = 28 / 4\nx = 7\n```\nDivide both sides by the number in front of x."
        },
        "answer": {
          "value": "6"
        },
        "hints": [
          {
            "he": "מה \"דבוק\" ל־x? עושים את הפעולה ההפוכה בשני האגפים.",
            "ru": "Что «прилипло» к x? Делаем обратное действие с обеими частями.",
            "en": "What is \"attached\" to x? Do the opposite operation on both sides."
          },
          {
            "he": "צעד ראשון `x = 18 / 3`",
            "ru": "Первый шаг `x = 18 / 3`",
            "en": "First step `x = 18 / 3`"
          },
          {
            "he": "בהמשך מקבלים `x = 6`",
            "ru": "Дальше получится `x = 6`",
            "en": "Next you get `x = 6`"
          }
        ],
        "solution": [
          {
            "he": "מחלקים את שני האגפים ב־`3`",
            "ru": "Делим обе части на `3`",
            "en": "Divide both sides by `3`"
          },
          "x = 18 / 3",
          "x = 6",
          {
            "he": "תשובה `x = 6`",
            "ru": "Ответ `x = 6`",
            "en": "Answer `x = 6`"
          },
          {
            "he": "בדיקה `3 × 6 = 18` ✓",
            "ru": "Проверка `3 × 6 = 18` ✓",
            "en": "Check `3 × 6 = 18` ✓"
          }
        ]
      },
      {
        "id": "t1-3",
        "group": "1",
        "label": "1ג",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה `x − 8 = 6`",
          "ru": "Реши уравнение `x − 8 = 6`",
          "en": "Solve the equation `x − 8 = 6`"
        },
        "example": {
          "he": "המשוואה:\n```\nx − 5 = 7\nx = 7 + 5\nx = 12\n```\nמעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך.",
          "ru": "Уравнение:\n```\nx − 5 = 7\nx = 7 + 5\nx = 12\n```\nПереносим x в одну сторону, числа в другую. При переносе знак меняется.",
          "en": "Equation:\n```\nx − 5 = 7\nx = 7 + 5\nx = 12\n```\nMove x to one side and the numbers to the other. Moving a term flips its sign."
        },
        "answer": {
          "value": "14"
        },
        "hints": [
          {
            "he": "מה \"דבוק\" ל־x? עושים את הפעולה ההפוכה בשני האגפים.",
            "ru": "Что «прилипло» к x? Делаем обратное действие с обеими частями.",
            "en": "What is \"attached\" to x? Do the opposite operation on both sides."
          },
          {
            "he": "צעד ראשון `x = 6 + 8`",
            "ru": "Первый шаг `x = 6 + 8`",
            "en": "First step `x = 6 + 8`"
          },
          {
            "he": "בהמשך מקבלים `x = 14`",
            "ru": "Дальше получится `x = 14`",
            "en": "Next you get `x = 14`"
          }
        ],
        "solution": [
          {
            "he": "מעבירים את `−8` לאגף ימין, והוא הופך ל־`+8`",
            "ru": "Переносим `−8` вправо, он становится `+8`",
            "en": "Move `−8` to the right; it becomes `+8`"
          },
          "x = 6 + 8",
          "x = 14",
          {
            "he": "תשובה `x = 14`",
            "ru": "Ответ `x = 14`",
            "en": "Answer `x = 14`"
          },
          {
            "he": "בדיקה `14 − 8 = 6` ✓",
            "ru": "Проверка `14 − 8 = 6` ✓",
            "en": "Check `14 − 8 = 6` ✓"
          }
        ]
      },
      {
        "id": "t1-4",
        "group": "1",
        "label": "1ד",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה `x − 4.5 = −13`",
          "ru": "Реши уравнение `x − 4.5 = −13`",
          "en": "Solve the equation `x − 4.5 = −13`"
        },
        "example": {
          "he": "המשוואה:\n```\nx − 2.5 = −7\nx = −7 + 2.5\nx = −4.5\n```\nמעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך.",
          "ru": "Уравнение:\n```\nx − 2.5 = −7\nx = −7 + 2.5\nx = −4.5\n```\nПереносим x в одну сторону, числа в другую. При переносе знак меняется.",
          "en": "Equation:\n```\nx − 2.5 = −7\nx = −7 + 2.5\nx = −4.5\n```\nMove x to one side and the numbers to the other. Moving a term flips its sign."
        },
        "answer": {
          "value": "-8.5"
        },
        "hints": [
          {
            "he": "מה \"דבוק\" ל־x? עושים את הפעולה ההפוכה בשני האגפים.",
            "ru": "Что «прилипло» к x? Делаем обратное действие с обеими частями.",
            "en": "What is \"attached\" to x? Do the opposite operation on both sides."
          },
          {
            "he": "צעד ראשון `x = −13 + 4.5`",
            "ru": "Первый шаг `x = −13 + 4.5`",
            "en": "First step `x = −13 + 4.5`"
          },
          {
            "he": "בהמשך מקבלים `x = −8.5`",
            "ru": "Дальше получится `x = −8.5`",
            "en": "Next you get `x = −8.5`"
          }
        ],
        "solution": [
          {
            "he": "מעבירים את `−4.5` לאגף ימין, והוא הופך ל־`+4.5`",
            "ru": "Переносим `−4.5` вправо, он становится `+4.5`",
            "en": "Move `−4.5` to the right; it becomes `+4.5`"
          },
          "x = −13 + 4.5",
          "x = −8.5",
          {
            "he": "תשובה `x = −8.5`",
            "ru": "Ответ `x = −8.5`",
            "en": "Answer `x = −8.5`"
          },
          {
            "he": "בדיקה `−8.5 − 4.5 = −13` ✓",
            "ru": "Проверка `−8.5 − 4.5 = −13` ✓",
            "en": "Check `−8.5 − 4.5 = −13` ✓"
          }
        ]
      },
      {
        "id": "t2-1",
        "group": "2",
        "label": "2א",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה `−12.3 − 1.6x = −8.3`",
          "ru": "Реши уравнение `−12.3 − 1.6x = −8.3`",
          "en": "Solve the equation `−12.3 − 1.6x = −8.3`"
        },
        "example": {
          "he": "המשוואה:\n```\n−5.2 − 1.4x = 1.8\n−1.4x = 1.8 + 5.2\n−1.4x = 7\nx = 7 / (−1.4)\nx = −5\n```\nמעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך. מחלקים את שני הצדדים במספר שלפני x.",
          "ru": "Уравнение:\n```\n−5.2 − 1.4x = 1.8\n−1.4x = 1.8 + 5.2\n−1.4x = 7\nx = 7 / (−1.4)\nx = −5\n```\nПереносим x в одну сторону, числа в другую. При переносе знак меняется. Делим обе части на число перед x.",
          "en": "Equation:\n```\n−5.2 − 1.4x = 1.8\n−1.4x = 1.8 + 5.2\n−1.4x = 7\nx = 7 / (−1.4)\nx = −5\n```\nMove x to one side and the numbers to the other. Moving a term flips its sign. Divide both sides by the number in front of x."
        },
        "answer": {
          "value": "-2.5"
        },
        "hints": [
          {
            "he": "אוספים את כל ה־x באגף אחד ואת כל המספרים באגף השני. במעבר אגף הסימן מתחלף.",
            "ru": "Собираем все x в одной части, все числа — в другой. При переносе знак меняется.",
            "en": "Gather all x terms on one side and all numbers on the other. Moving a term across \"=\" flips its sign."
          },
          {
            "he": "צעד ראשון `−1.6x = −8.3 + 12.3`",
            "ru": "Первый шаг `−1.6x = −8.3 + 12.3`",
            "en": "First step `−1.6x = −8.3 + 12.3`"
          },
          {
            "he": "בהמשך מקבלים `−1.6x = 4`",
            "ru": "Дальше получится `−1.6x = 4`",
            "en": "Next you get `−1.6x = 4`"
          }
        ],
        "solution": [
          {
            "he": "מעבירים את `−12.3` לאגף ימין",
            "ru": "Переносим `−12.3` вправо",
            "en": "Move `−12.3` to the right"
          },
          "−1.6x = −8.3 + 12.3",
          "−1.6x = 4",
          {
            "he": "מחלקים את שני האגפים ב־`−1.6`",
            "ru": "Делим обе части на `−1.6`",
            "en": "Divide both sides by `−1.6`"
          },
          "x = 4 / (−1.6)",
          "x = −2.5",
          {
            "he": "תשובה `x = −2.5`",
            "ru": "Ответ `x = −2.5`",
            "en": "Answer `x = −2.5`"
          },
          {
            "he": "בדיקה `−12.3 − 1.6 × (−2.5) = −12.3 + 4 = −8.3` ✓",
            "ru": "Проверка `−12.3 − 1.6 × (−2.5) = −12.3 + 4 = −8.3` ✓",
            "en": "Check `−12.3 − 1.6 × (−2.5) = −12.3 + 4 = −8.3` ✓"
          }
        ]
      },
      {
        "id": "t2-2",
        "group": "2",
        "label": "2ב",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה `12 + 3x + 2x = 4x + 8 + 3x`",
          "ru": "Реши уравнение `12 + 3x + 2x = 4x + 8 + 3x`",
          "en": "Solve the equation `12 + 3x + 2x = 4x + 8 + 3x`"
        },
        "example": {
          "he": "המשוואה:\n```\n5 + 4x + x = 3x + 9 + x\n5 + 5x = 4x + 9\n5x − 4x = 9 − 5\nx = 4\n```\nמעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך.",
          "ru": "Уравнение:\n```\n5 + 4x + x = 3x + 9 + x\n5 + 5x = 4x + 9\n5x − 4x = 9 − 5\nx = 4\n```\nПереносим x в одну сторону, числа в другую. При переносе знак меняется.",
          "en": "Equation:\n```\n5 + 4x + x = 3x + 9 + x\n5 + 5x = 4x + 9\n5x − 4x = 9 − 5\nx = 4\n```\nMove x to one side and the numbers to the other. Moving a term flips its sign."
        },
        "answer": {
          "value": "2"
        },
        "hints": [
          {
            "he": "אוספים את כל ה־x באגף אחד ואת כל המספרים באגף השני. במעבר אגף הסימן מתחלף.",
            "ru": "Собираем все x в одной части, все числа — в другой. При переносе знак меняется.",
            "en": "Gather all x terms on one side and all numbers on the other. Moving a term across \"=\" flips its sign."
          },
          {
            "he": "צעד ראשון `12 + 5x = 7x + 8`",
            "ru": "Первый шаг `12 + 5x = 7x + 8`",
            "en": "First step `12 + 5x = 7x + 8`"
          },
          {
            "he": "בהמשך מקבלים `5x − 7x = 8 − 12`",
            "ru": "Дальше получится `5x − 7x = 8 − 12`",
            "en": "Next you get `5x − 7x = 8 − 12`"
          }
        ],
        "solution": [
          {
            "he": "מכנסים איברים דומים",
            "ru": "Приводим подобные",
            "en": "Combine like terms"
          },
          "12 + 5x = 7x + 8",
          {
            "he": "מעבירים אגפים: x שמאלה, מספרים ימינה (הסימן מתחלף)",
            "ru": "Переносим: x влево, числа вправо (знак меняется)",
            "en": "Move terms: x to the left, numbers to the right (the sign flips)"
          },
          "5x − 7x = 8 − 12",
          "−2x = −4",
          {
            "he": "מחלקים את שני האגפים ב־`−2`",
            "ru": "Делим обе части на `−2`",
            "en": "Divide both sides by `−2`"
          },
          "x = −4 / (−2)",
          "x = 2",
          {
            "he": "תשובה `x = 2`",
            "ru": "Ответ `x = 2`",
            "en": "Answer `x = 2`"
          },
          {
            "he": "בדיקה `12 + 6 + 4 = 22 = 8 + 8 + 6` ✓",
            "ru": "Проверка `12 + 6 + 4 = 22 = 8 + 8 + 6` ✓",
            "en": "Check `12 + 6 + 4 = 22 = 8 + 8 + 6` ✓"
          }
        ]
      },
      {
        "id": "t3-1",
        "group": "3",
        "label": "3א",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה `15 − 4(2x − 3) = 43`",
          "ru": "Реши уравнение `15 − 4(2x − 3) = 43`",
          "en": "Solve the equation `15 − 4(2x − 3) = 43`"
        },
        "example": {
          "he": "המשוואה:\n```\n10 − 3(2x − 4) = 40\n10 − 6x + 12 = 40\n22 − 6x = 40\n−6x = 40 − 22\n−6x = 18\nx = −3\n```\nפותחים סוגריים: את המספר שלפני הסוגריים כופלים בכל איבר בפנים. מינוס לפני סוגריים הופך את כל הסימנים בפנים. מעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך. מחלקים את שני הצדדים במספר שלפני x.",
          "ru": "Уравнение:\n```\n10 − 3(2x − 4) = 40\n10 − 6x + 12 = 40\n22 − 6x = 40\n−6x = 40 − 22\n−6x = 18\nx = −3\n```\nРаскрываем скобки: число перед скобкой умножаем на каждое слагаемое внутри. Минус перед скобкой меняет все знаки внутри. Переносим x в одну сторону, числа в другую. При переносе знак меняется. Делим обе части на число перед x.",
          "en": "Equation:\n```\n10 − 3(2x − 4) = 40\n10 − 6x + 12 = 40\n22 − 6x = 40\n−6x = 40 − 22\n−6x = 18\nx = −3\n```\nOpen the brackets: multiply the number in front by every term inside. A minus in front of brackets flips every sign inside. Move x to one side and the numbers to the other. Moving a term flips its sign. Divide both sides by the number in front of x."
        },
        "answer": {
          "value": "-2"
        },
        "hints": [
          {
            "he": "קודם פותחים סוגריים: המספר שלפני הסוגריים כופל כל איבר בפנים, יחד עם הסימן שלו.",
            "ru": "Сначала раскрываем скобки: число перед скобкой умножаем на каждый член внутри, вместе с его знаком.",
            "en": "First expand the brackets: the number in front multiplies every term inside, together with its sign."
          },
          {
            "he": "צעד ראשון `15 − 8x + 12 = 43`",
            "ru": "Первый шаг `15 − 8x + 12 = 43`",
            "en": "First step `15 − 8x + 12 = 43`"
          },
          {
            "he": "בהמשך מקבלים `27 − 8x = 43`",
            "ru": "Дальше получится `27 − 8x = 43`",
            "en": "Next you get `27 − 8x = 43`"
          }
        ],
        "solution": [
          {
            "he": "לא מחשבים קודם `15 − 4`! קודם פותחים סוגריים — `−4` כופל כל איבר",
            "ru": "Нельзя сначала считать `15 − 4`! Сначала раскрываем скобку — `−4` умножает каждый член",
            "en": "Do not compute `15 − 4` first! Expand the bracket first — `−4` multiplies every term"
          },
          "15 − 8x + 12 = 43",
          {
            "he": "מכנסים איברים דומים",
            "ru": "Приводим подобные",
            "en": "Combine like terms"
          },
          "27 − 8x = 43",
          {
            "he": "מעבירים את `27` לאגף ימין",
            "ru": "Переносим `27` вправо",
            "en": "Move `27` to the right"
          },
          "−8x = 43 − 27",
          "−8x = 16",
          {
            "he": "מחלקים את שני האגפים ב־`−8`",
            "ru": "Делим обе части на `−8`",
            "en": "Divide both sides by `−8`"
          },
          "x = 16 / (−8)",
          "x = −2",
          {
            "he": "תשובה `x = −2`",
            "ru": "Ответ `x = −2`",
            "en": "Answer `x = −2`"
          },
          {
            "he": "בדיקה `15 − 4 × (−4 − 3) = 15 + 28 = 43` ✓",
            "ru": "Проверка `15 − 4 × (−4 − 3) = 15 + 28 = 43` ✓",
            "en": "Check `15 − 4 × (−4 − 3) = 15 + 28 = 43` ✓"
          }
        ]
      },
      {
        "id": "t3-2",
        "group": "3",
        "label": "3ב",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה `12 − 3(−x − 4) = 3`",
          "ru": "Реши уравнение `12 − 3(−x − 4) = 3`",
          "en": "Solve the equation `12 − 3(−x − 4) = 3`"
        },
        "example": {
          "he": "המשוואה:\n```\n5 − 2(−x − 3) = 3\n5 + 2x + 6 = 3\n2x + 11 = 3\n2x = 3 − 11\n2x = −8\nx = −4\n```\nפותחים סוגריים: את המספר שלפני הסוגריים כופלים בכל איבר בפנים. מינוס לפני סוגריים הופך את כל הסימנים בפנים. מעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך. מחלקים את שני הצדדים במספר שלפני x.",
          "ru": "Уравнение:\n```\n5 − 2(−x − 3) = 3\n5 + 2x + 6 = 3\n2x + 11 = 3\n2x = 3 − 11\n2x = −8\nx = −4\n```\nРаскрываем скобки: число перед скобкой умножаем на каждое слагаемое внутри. Минус перед скобкой меняет все знаки внутри. Переносим x в одну сторону, числа в другую. При переносе знак меняется. Делим обе части на число перед x.",
          "en": "Equation:\n```\n5 − 2(−x − 3) = 3\n5 + 2x + 6 = 3\n2x + 11 = 3\n2x = 3 − 11\n2x = −8\nx = −4\n```\nOpen the brackets: multiply the number in front by every term inside. A minus in front of brackets flips every sign inside. Move x to one side and the numbers to the other. Moving a term flips its sign. Divide both sides by the number in front of x."
        },
        "answer": {
          "value": "-7"
        },
        "hints": [
          {
            "he": "קודם פותחים סוגריים: המספר שלפני הסוגריים כופל כל איבר בפנים, יחד עם הסימן שלו.",
            "ru": "Сначала раскрываем скобки: число перед скобкой умножаем на каждый член внутри, вместе с его знаком.",
            "en": "First expand the brackets: the number in front multiplies every term inside, together with its sign."
          },
          {
            "he": "צעד ראשון `12 + 3x + 12 = 3`",
            "ru": "Первый шаг `12 + 3x + 12 = 3`",
            "en": "First step `12 + 3x + 12 = 3`"
          },
          {
            "he": "בהמשך מקבלים `24 + 3x = 3`",
            "ru": "Дальше получится `24 + 3x = 3`",
            "en": "Next you get `24 + 3x = 3`"
          }
        ],
        "solution": [
          {
            "he": "פותחים סוגריים `−3 × (−x) = +3x`, `−3 × (−4) = +12`",
            "ru": "Раскрываем скобку `−3 × (−x) = +3x`, `−3 × (−4) = +12`",
            "en": "Expand `−3 × (−x) = +3x`, `−3 × (−4) = +12`"
          },
          "12 + 3x + 12 = 3",
          {
            "he": "מכנסים איברים דומים",
            "ru": "Приводим подобные",
            "en": "Combine like terms"
          },
          "24 + 3x = 3",
          "3x = 3 − 24",
          "3x = −21",
          {
            "he": "מחלקים את שני האגפים ב־`3`",
            "ru": "Делим обе части на `3`",
            "en": "Divide both sides by `3`"
          },
          "x = −7",
          {
            "he": "תשובה `x = −7`",
            "ru": "Ответ `x = −7`",
            "en": "Answer `x = −7`"
          },
          {
            "he": "בדיקה `12 − 3 × (7 − 4) = 12 − 9 = 3` ✓",
            "ru": "Проверка `12 − 3 × (7 − 4) = 12 − 9 = 3` ✓",
            "en": "Check `12 − 3 × (7 − 4) = 12 − 9 = 3` ✓"
          }
        ]
      },
      {
        "id": "t3-3",
        "group": "3",
        "label": "3ג",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה `2(x − 3) − 6(2x − 5) = 5(x + 1) + 49`",
          "ru": "Реши уравнение `2(x − 3) − 6(2x − 5) = 5(x + 1) + 49`",
          "en": "Solve the equation `2(x − 3) − 6(2x − 5) = 5(x + 1) + 49`"
        },
        "example": {
          "he": "המשוואה:\n```\n3(x − 1) − 2(x + 4) = 4(x − 2) + 6\n3x − 3 − 2x − 8 = 4x − 8 + 6\nx − 11 = 4x − 2\nx − 4x = −2 + 11\n−3x = 9\nx = −3\n```\nפותחים סוגריים: את המספר שלפני הסוגריים כופלים בכל איבר בפנים. מינוס לפני סוגריים הופך את כל הסימנים בפנים. מעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך. מחלקים את שני הצדדים במספר שלפני x.",
          "ru": "Уравнение:\n```\n3(x − 1) − 2(x + 4) = 4(x − 2) + 6\n3x − 3 − 2x − 8 = 4x − 8 + 6\nx − 11 = 4x − 2\nx − 4x = −2 + 11\n−3x = 9\nx = −3\n```\nРаскрываем скобки: число перед скобкой умножаем на каждое слагаемое внутри. Минус перед скобкой меняет все знаки внутри. Переносим x в одну сторону, числа в другую. При переносе знак меняется. Делим обе части на число перед x.",
          "en": "Equation:\n```\n3(x − 1) − 2(x + 4) = 4(x − 2) + 6\n3x − 3 − 2x − 8 = 4x − 8 + 6\nx − 11 = 4x − 2\nx − 4x = −2 + 11\n−3x = 9\nx = −3\n```\nOpen the brackets: multiply the number in front by every term inside. A minus in front of brackets flips every sign inside. Move x to one side and the numbers to the other. Moving a term flips its sign. Divide both sides by the number in front of x."
        },
        "answer": {
          "value": "-2"
        },
        "hints": [
          {
            "he": "קודם פותחים סוגריים: המספר שלפני הסוגריים כופל כל איבר בפנים, יחד עם הסימן שלו.",
            "ru": "Сначала раскрываем скобки: число перед скобкой умножаем на каждый член внутри, вместе с его знаком.",
            "en": "First expand the brackets: the number in front multiplies every term inside, together with its sign."
          },
          {
            "he": "צעד ראשון `2x − 6 − 12x + 30 = 5x + 5 + 49`",
            "ru": "Первый шаг `2x − 6 − 12x + 30 = 5x + 5 + 49`",
            "en": "First step `2x − 6 − 12x + 30 = 5x + 5 + 49`"
          },
          {
            "he": "בהמשך מקבלים `−10x + 24 = 5x + 54`",
            "ru": "Дальше получится `−10x + 24 = 5x + 54`",
            "en": "Next you get `−10x + 24 = 5x + 54`"
          }
        ],
        "solution": [
          {
            "he": "פותחים סוגריים",
            "ru": "Раскрываем скобки",
            "en": "Expand the brackets"
          },
          "2x − 6 − 12x + 30 = 5x + 5 + 49",
          {
            "he": "מכנסים איברים דומים",
            "ru": "Приводим подобные",
            "en": "Combine like terms"
          },
          "−10x + 24 = 5x + 54",
          {
            "he": "מעבירים אגפים: x שמאלה, מספרים ימינה (הסימן מתחלף)",
            "ru": "Переносим: x влево, числа вправо (знак меняется)",
            "en": "Move terms: x to the left, numbers to the right (the sign flips)"
          },
          "−10x − 5x = 54 − 24",
          "−15x = 30",
          {
            "he": "מחלקים את שני האגפים ב־`−15`",
            "ru": "Делим обе части на `−15`",
            "en": "Divide both sides by `−15`"
          },
          "x = −2",
          {
            "he": "תשובה `x = −2`",
            "ru": "Ответ `x = −2`",
            "en": "Answer `x = −2`"
          },
          {
            "he": "בדיקה `2 × (−5) − 6 × (−9) = −10 + 54 = 44 = 5 × (−1) + 49` ✓",
            "ru": "Проверка `2 × (−5) − 6 × (−9) = −10 + 54 = 44 = 5 × (−1) + 49` ✓",
            "en": "Check `2 × (−5) − 6 × (−9) = −10 + 54 = 44 = 5 × (−1) + 49` ✓"
          }
        ]
      },
      {
        "id": "t4-1",
        "group": "4",
        "label": "4א",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה `(x + 2)(x + 1) = x(x − 3) − 10`",
          "ru": "Реши уравнение `(x + 2)(x + 1) = x(x − 3) − 10`",
          "en": "Solve the equation `(x + 2)(x + 1) = x(x − 3) − 10`"
        },
        "example": {
          "he": "המשוואה:\n```\n(x + 1)(x + 4) = x(x + 2) + 10\nx² + 4x + x + 4 = x² + 2x + 10\n5x + 4 = 2x + 10\n5x − 2x = 10 − 4\n3x = 6\nx = 2\n```\nפותחים סוגריים \"כל אחד בכל אחד\". x² מופיע בשני הצדדים ומצטמצם. מעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך.",
          "ru": "Уравнение:\n```\n(x + 1)(x + 4) = x(x + 2) + 10\nx² + 4x + x + 4 = x² + 2x + 10\n5x + 4 = 2x + 10\n5x − 2x = 10 − 4\n3x = 6\nx = 2\n```\nРаскрываем скобки «каждое на каждое». x² есть с обеих сторон и сокращается. Переносим x в одну сторону, числа в другую. При переносе знак меняется.",
          "en": "Equation:\n```\n(x + 1)(x + 4) = x(x + 2) + 10\nx² + 4x + x + 4 = x² + 2x + 10\n5x + 4 = 2x + 10\n5x − 2x = 10 − 4\n3x = 6\nx = 2\n```\nOpen the brackets \"each by each\". x² is on both sides and cancels. Move x to one side and the numbers to the other. Moving a term flips its sign."
        },
        "answer": {
          "value": "-2"
        },
        "hints": [
          {
            "he": "כופלים כל איבר מהסוגריים הראשונים בכל איבר מהשניים. `x²` יופיע בשני האגפים ויצטמצם.",
            "ru": "Каждый член первой скобки умножаем на каждый член второй. `x²` будет в обеих частях и сократится.",
            "en": "Multiply every term of the first bracket by every term of the second. `x²` appears on both sides and cancels."
          },
          {
            "he": "צעד ראשון `x² + x + 2x + 2 = x² − 3x − 10`",
            "ru": "Первый шаг `x² + x + 2x + 2 = x² − 3x − 10`",
            "en": "First step `x² + x + 2x + 2 = x² − 3x − 10`"
          },
          {
            "he": "בהמשך מקבלים `3x + 2 = −3x − 10`",
            "ru": "Дальше получится `3x + 2 = −3x − 10`",
            "en": "Next you get `3x + 2 = −3x − 10`"
          }
        ],
        "solution": [
          {
            "he": "כל איבר בכל איבר",
            "ru": "Каждый член на каждый",
            "en": "Every term times every term"
          },
          "x² + x + 2x + 2 = x² − 3x − 10",
          {
            "he": "מכנסים איברים דומים",
            "ru": "Приводим подобные",
            "en": "Combine like terms"
          },
          "x² + 3x + 2 = x² − 3x − 10",
          {
            "he": "`x²` נמצא בשני האגפים ומצטמצם",
            "ru": "`x²` есть в обеих частях и сокращается",
            "en": "`x²` is on both sides and cancels"
          },
          "3x + 2 = −3x − 10",
          {
            "he": "מעבירים אגפים: x שמאלה, מספרים ימינה (הסימן מתחלף)",
            "ru": "Переносим: x влево, числа вправо (знак меняется)",
            "en": "Move terms: x to the left, numbers to the right (the sign flips)"
          },
          "3x + 3x = −10 − 2",
          "6x = −12",
          {
            "he": "מחלקים את שני האגפים ב־`6`",
            "ru": "Делим обе части на `6`",
            "en": "Divide both sides by `6`"
          },
          "x = −2",
          {
            "he": "תשובה `x = −2`",
            "ru": "Ответ `x = −2`",
            "en": "Answer `x = −2`"
          },
          {
            "he": "בדיקה `0 × (−1) = 0 = −2 × (−5) − 10` ✓",
            "ru": "Проверка `0 × (−1) = 0 = −2 × (−5) − 10` ✓",
            "en": "Check `0 × (−1) = 0 = −2 × (−5) − 10` ✓"
          }
        ]
      },
      {
        "id": "t4-2",
        "group": "4",
        "label": "4ב",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה `(x + 3)(x + 4) = x(x + 5) + 96`",
          "ru": "Реши уравнение `(x + 3)(x + 4) = x(x + 5) + 96`",
          "en": "Solve the equation `(x + 3)(x + 4) = x(x + 5) + 96`"
        },
        "example": {
          "he": "המשוואה:\n```\n(x + 2)(x + 5) = x(x + 4) + 40\nx² + 5x + 2x + 10 = x² + 4x + 40\n7x + 10 = 4x + 40\n3x = 30\nx = 10\n```\nפותחים סוגריים \"כל אחד בכל אחד\". x² מופיע בשני הצדדים ומצטמצם. מעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך.",
          "ru": "Уравнение:\n```\n(x + 2)(x + 5) = x(x + 4) + 40\nx² + 5x + 2x + 10 = x² + 4x + 40\n7x + 10 = 4x + 40\n3x = 30\nx = 10\n```\nРаскрываем скобки «каждое на каждое». x² есть с обеих сторон и сокращается. Переносим x в одну сторону, числа в другую. При переносе знак меняется.",
          "en": "Equation:\n```\n(x + 2)(x + 5) = x(x + 4) + 40\nx² + 5x + 2x + 10 = x² + 4x + 40\n7x + 10 = 4x + 40\n3x = 30\nx = 10\n```\nOpen the brackets \"each by each\". x² is on both sides and cancels. Move x to one side and the numbers to the other. Moving a term flips its sign."
        },
        "answer": {
          "value": "42"
        },
        "hints": [
          {
            "he": "כופלים כל איבר מהסוגריים הראשונים בכל איבר מהשניים. `x²` יופיע בשני האגפים ויצטמצם.",
            "ru": "Каждый член первой скобки умножаем на каждый член второй. `x²` будет в обеих частях и сократится.",
            "en": "Multiply every term of the first bracket by every term of the second. `x²` appears on both sides and cancels."
          },
          {
            "he": "צעד ראשון `x² + 4x + 3x + 12 = x² + 5x + 96`",
            "ru": "Первый шаг `x² + 4x + 3x + 12 = x² + 5x + 96`",
            "en": "First step `x² + 4x + 3x + 12 = x² + 5x + 96`"
          },
          {
            "he": "בהמשך מקבלים `7x + 12 = 5x + 96`",
            "ru": "Дальше получится `7x + 12 = 5x + 96`",
            "en": "Next you get `7x + 12 = 5x + 96`"
          }
        ],
        "solution": [
          {
            "he": "כל איבר בכל איבר",
            "ru": "Каждый член на каждый",
            "en": "Every term times every term"
          },
          "x² + 4x + 3x + 12 = x² + 5x + 96",
          {
            "he": "מכנסים איברים דומים",
            "ru": "Приводим подобные",
            "en": "Combine like terms"
          },
          "x² + 7x + 12 = x² + 5x + 96",
          {
            "he": "`x²` נמצא בשני האגפים ומצטמצם",
            "ru": "`x²` есть в обеих частях и сокращается",
            "en": "`x²` is on both sides and cancels"
          },
          "7x + 12 = 5x + 96",
          {
            "he": "מעבירים אגפים: x שמאלה, מספרים ימינה (הסימן מתחלף)",
            "ru": "Переносим: x влево, числа вправо (знак меняется)",
            "en": "Move terms: x to the left, numbers to the right (the sign flips)"
          },
          "7x − 5x = 96 − 12",
          "2x = 84",
          {
            "he": "מחלקים את שני האגפים ב־`2`",
            "ru": "Делим обе части на `2`",
            "en": "Divide both sides by `2`"
          },
          "x = 42",
          {
            "he": "תשובה `x = 42`",
            "ru": "Ответ `x = 42`",
            "en": "Answer `x = 42`"
          },
          {
            "he": "בדיקה `45 × 46 = 2070 = 42 × 47 + 96` ✓",
            "ru": "Проверка `45 × 46 = 2070 = 42 × 47 + 96` ✓",
            "en": "Check `45 × 46 = 2070 = 42 × 47 + 96` ✓"
          }
        ]
      },
      {
        "id": "t4-3",
        "group": "4",
        "label": "4ג",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה `(2x + 1)(x − 1) = (3 + 2x)(x + 3) − 20`",
          "ru": "Реши уравнение `(2x + 1)(x − 1) = (3 + 2x)(x + 3) − 20`",
          "en": "Solve the equation `(2x + 1)(x − 1) = (3 + 2x)(x + 3) − 20`"
        },
        "example": {
          "he": "המשוואה:\n```\n(2x + 3)(x − 2) = (2x + 1)(x + 1) − 9\n2x² − 4x + 3x − 6 = 2x² + 2x + x + 1 − 9\n−x − 6 = 3x − 8\n−x − 3x = −8 + 6\n−4x = −2\nx = 0.5\n```\nפותחים סוגריים \"כל אחד בכל אחד\". x² מופיע בשני הצדדים ומצטמצם. מעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך.",
          "ru": "Уравнение:\n```\n(2x + 3)(x − 2) = (2x + 1)(x + 1) − 9\n2x² − 4x + 3x − 6 = 2x² + 2x + x + 1 − 9\n−x − 6 = 3x − 8\n−x − 3x = −8 + 6\n−4x = −2\nx = 0.5\n```\nРаскрываем скобки «каждое на каждое». x² есть с обеих сторон и сокращается. Переносим x в одну сторону, числа в другую. При переносе знак меняется.",
          "en": "Equation:\n```\n(2x + 3)(x − 2) = (2x + 1)(x + 1) − 9\n2x² − 4x + 3x − 6 = 2x² + 2x + x + 1 − 9\n−x − 6 = 3x − 8\n−x − 3x = −8 + 6\n−4x = −2\nx = 0.5\n```\nOpen the brackets \"each by each\". x² is on both sides and cancels. Move x to one side and the numbers to the other. Moving a term flips its sign."
        },
        "answer": {
          "value": "1"
        },
        "hints": [
          {
            "he": "כופלים כל איבר מהסוגריים הראשונים בכל איבר מהשניים. `x²` יופיע בשני האגפים ויצטמצם.",
            "ru": "Каждый член первой скобки умножаем на каждый член второй. `x²` будет в обеих частях и сократится.",
            "en": "Multiply every term of the first bracket by every term of the second. `x²` appears on both sides and cancels."
          },
          {
            "he": "צעד ראשון `2x² − 2x + x − 1 = 3x + 9 + 2x² + 6x − 20`",
            "ru": "Первый шаг `2x² − 2x + x − 1 = 3x + 9 + 2x² + 6x − 20`",
            "en": "First step `2x² − 2x + x − 1 = 3x + 9 + 2x² + 6x − 20`"
          },
          {
            "he": "בהמשך מקבלים `−x − 1 = 9x − 11`",
            "ru": "Дальше получится `−x − 1 = 9x − 11`",
            "en": "Next you get `−x − 1 = 9x − 11`"
          }
        ],
        "solution": [
          {
            "he": "כל איבר בכל איבר, בשני האגפים",
            "ru": "Каждый член на каждый, в обеих частях",
            "en": "Every term times every term, on both sides"
          },
          "2x² − 2x + x − 1 = 3x + 9 + 2x² + 6x − 20",
          {
            "he": "מכנסים איברים דומים",
            "ru": "Приводим подобные",
            "en": "Combine like terms"
          },
          "2x² − x − 1 = 2x² + 9x − 11",
          {
            "he": "`2x²` נמצא בשני האגפים ומצטמצם",
            "ru": "`2x²` есть в обеих частях и сокращается",
            "en": "`2x²` is on both sides and cancels"
          },
          "−x − 1 = 9x − 11",
          {
            "he": "מעבירים אגפים: x שמאלה, מספרים ימינה (הסימן מתחלף)",
            "ru": "Переносим: x влево, числа вправо (знак меняется)",
            "en": "Move terms: x to the left, numbers to the right (the sign flips)"
          },
          "−x − 9x = −11 + 1",
          "−10x = −10",
          {
            "he": "מחלקים את שני האגפים ב־`−10`",
            "ru": "Делим обе части на `−10`",
            "en": "Divide both sides by `−10`"
          },
          "x = 1",
          {
            "he": "תשובה `x = 1`",
            "ru": "Ответ `x = 1`",
            "en": "Answer `x = 1`"
          },
          {
            "he": "בדיקה `3 × 0 = 0 = 5 × 4 − 20` ✓",
            "ru": "Проверка `3 × 0 = 0 = 5 × 4 − 20` ✓",
            "en": "Check `3 × 0 = 0 = 5 × 4 − 20` ✓"
          }
        ]
      },
      {
        "id": "t5-1",
        "group": "5",
        "label": "5א",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה `x/3 − x/7 = −4`",
          "ru": "Реши уравнение `x/3 − x/7 = −4`",
          "en": "Solve the equation `x/3 − x/7 = −4`"
        },
        "example": {
          "he": "המשוואה:\n```\nx/2 − x/5 = 6        | × 10\n5x − 2x = 60\n3x = 60\nx = 20\n```\nכופלים הכול במכנה המשותף כדי להיפטר מהשברים. מינוס לפני שבר הופך את הסימנים של כל המונה.",
          "ru": "Уравнение:\n```\nx/2 − x/5 = 6        | × 10\n5x − 2x = 60\n3x = 60\nx = 20\n```\nУмножаем всё на общий знаменатель, чтобы убрать дроби. Минус перед дробью меняет знаки всего числителя.",
          "en": "Equation:\n```\nx/2 − x/5 = 6        | × 10\n5x − 2x = 60\n3x = 60\nx = 20\n```\nMultiply everything by the common denominator to get rid of fractions. A minus in front of a fraction flips the signs of the whole numerator."
        },
        "answer": {
          "value": "-21"
        },
        "hints": [
          {
            "he": "מוצאים מכנה משותף וכופלים בו כל איבר במשוואה — גם איבר בלי שבר.",
            "ru": "Находим общий знаменатель и умножаем на него каждый член уравнения — даже без дроби.",
            "en": "Find a common denominator and multiply every term of the equation by it — even a term without a fraction."
          },
          {
            "he": "צעד ראשון `21 × x/3 − 21 × x/7 = 21 × (−4)`",
            "ru": "Первый шаг `21 × x/3 − 21 × x/7 = 21 × (−4)`",
            "en": "First step `21 × x/3 − 21 × x/7 = 21 × (−4)`"
          },
          {
            "he": "בהמשך מקבלים `7x − 3x = −84`",
            "ru": "Дальше получится `7x − 3x = −84`",
            "en": "Next you get `7x − 3x = −84`"
          }
        ],
        "solution": [
          {
            "he": "המכנה המשותף של 3 ו־7 הוא `21`.",
            "ru": "Общий знаменатель 3 и 7 — `21`.",
            "en": "The common denominator of 3 and 7 is `21`."
          },
          {
            "he": "כופלים כל איבר במכנה המשותף `21`",
            "ru": "Умножаем каждый член на общий знаменатель `21`",
            "en": "Multiply every term by the common denominator `21`"
          },
          "21 × x/3 − 21 × x/7 = 21 × (−4)",
          "7x − 3x = −84",
          "4x = −84",
          {
            "he": "מחלקים את שני האגפים ב־`4`",
            "ru": "Делим обе части на `4`",
            "en": "Divide both sides by `4`"
          },
          "x = −21",
          {
            "he": "תשובה `x = −21`",
            "ru": "Ответ `x = −21`",
            "en": "Answer `x = −21`"
          },
          {
            "he": "בדיקה `−21/3 − (−21)/7 = −7 + 3 = −4` ✓",
            "ru": "Проверка `−21/3 − (−21)/7 = −7 + 3 = −4` ✓",
            "en": "Check `−21/3 − (−21)/7 = −7 + 3 = −4` ✓"
          }
        ]
      },
      {
        "id": "t5-2",
        "group": "5",
        "label": "5ב",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה `(3x + 4)/5 = (2x + 14)/10`",
          "ru": "Реши уравнение `(3x + 4)/5 = (2x + 14)/10`",
          "en": "Solve the equation `(3x + 4)/5 = (2x + 14)/10`"
        },
        "example": {
          "he": "המשוואה:\n```\n(x + 5)/4 = (3x + 1)/8        | × 8\n2(x + 5) = 3x + 1\n2x + 10 = 3x + 1\n2x − 3x = 1 − 10\n−x = −9\nx = 9\n```\nכופלים הכול במכנה המשותף כדי להיפטר מהשברים. מינוס לפני שבר הופך את הסימנים של כל המונה.",
          "ru": "Уравнение:\n```\n(x + 5)/4 = (3x + 1)/8        | × 8\n2(x + 5) = 3x + 1\n2x + 10 = 3x + 1\n2x − 3x = 1 − 10\n−x = −9\nx = 9\n```\nУмножаем всё на общий знаменатель, чтобы убрать дроби. Минус перед дробью меняет знаки всего числителя.",
          "en": "Equation:\n```\n(x + 5)/4 = (3x + 1)/8        | × 8\n2(x + 5) = 3x + 1\n2x + 10 = 3x + 1\n2x − 3x = 1 − 10\n−x = −9\nx = 9\n```\nMultiply everything by the common denominator to get rid of fractions. A minus in front of a fraction flips the signs of the whole numerator."
        },
        "answer": {
          "value": "1.5"
        },
        "hints": [
          {
            "he": "מוצאים מכנה משותף וכופלים בו כל איבר במשוואה — גם איבר בלי שבר.",
            "ru": "Находим общий знаменатель и умножаем на него каждый член уравнения — даже без дроби.",
            "en": "Find a common denominator and multiply every term of the equation by it — even a term without a fraction."
          },
          {
            "he": "צעד ראשון `2(3x + 4) = 2x + 14`",
            "ru": "Первый шаг `2(3x + 4) = 2x + 14`",
            "en": "First step `2(3x + 4) = 2x + 14`"
          },
          {
            "he": "בהמשך מקבלים `6x + 8 = 2x + 14`",
            "ru": "Дальше получится `6x + 8 = 2x + 14`",
            "en": "Next you get `6x + 8 = 2x + 14`"
          }
        ],
        "solution": [
          {
            "he": "המכנה הגדול הוא 10, והוא מתחלק גם ב־5. מכנה משותף `10`.",
            "ru": "Самый большой знаменатель 10, он делится и на 5. Общий знаменатель `10`.",
            "en": "The largest denominator is 10, and it is divisible by 5. Common denominator `10`."
          },
          {
            "he": "כופלים כל איבר במכנה המשותף `10`",
            "ru": "Умножаем каждый член на общий знаменатель `10`",
            "en": "Multiply every term by the common denominator `10`"
          },
          "2(3x + 4) = 2x + 14",
          {
            "he": "פותחים סוגריים",
            "ru": "Раскрываем скобки",
            "en": "Expand the brackets"
          },
          "6x + 8 = 2x + 14",
          {
            "he": "מעבירים אגפים: x שמאלה, מספרים ימינה (הסימן מתחלף)",
            "ru": "Переносим: x влево, числа вправо (знак меняется)",
            "en": "Move terms: x to the left, numbers to the right (the sign flips)"
          },
          "6x − 2x = 14 − 8",
          "4x = 6",
          {
            "he": "מחלקים את שני האגפים ב־`4`",
            "ru": "Делим обе части на `4`",
            "en": "Divide both sides by `4`"
          },
          "x = 1.5",
          {
            "he": "תשובה `x = 1.5`",
            "ru": "Ответ `x = 1.5`",
            "en": "Answer `x = 1.5`"
          },
          {
            "he": "בדיקה `(4.5 + 4)/5 = 1.7 = (3 + 14)/10` ✓",
            "ru": "Проверка `(4.5 + 4)/5 = 1.7 = (3 + 14)/10` ✓",
            "en": "Check `(4.5 + 4)/5 = 1.7 = (3 + 14)/10` ✓"
          }
        ]
      },
      {
        "id": "t5-3",
        "group": "5",
        "label": "5ג",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה `(x + 3)/5 + (2x + 4)/3 = −5`",
          "ru": "Реши уравнение `(x + 3)/5 + (2x + 4)/3 = −5`",
          "en": "Solve the equation `(x + 3)/5 + (2x + 4)/3 = −5`"
        },
        "example": {
          "he": "המשוואה:\n```\n(x + 1)/2 + (x − 2)/3 = 4        | × 6\n3(x + 1) + 2(x − 2) = 24\n3x + 3 + 2x − 4 = 24\n5x − 1 = 24\n5x = 25\nx = 5\n```\nכופלים הכול במכנה המשותף כדי להיפטר מהשברים. מינוס לפני שבר הופך את הסימנים של כל המונה.",
          "ru": "Уравнение:\n```\n(x + 1)/2 + (x − 2)/3 = 4        | × 6\n3(x + 1) + 2(x − 2) = 24\n3x + 3 + 2x − 4 = 24\n5x − 1 = 24\n5x = 25\nx = 5\n```\nУмножаем всё на общий знаменатель, чтобы убрать дроби. Минус перед дробью меняет знаки всего числителя.",
          "en": "Equation:\n```\n(x + 1)/2 + (x − 2)/3 = 4        | × 6\n3(x + 1) + 2(x − 2) = 24\n3x + 3 + 2x − 4 = 24\n5x − 1 = 24\n5x = 25\nx = 5\n```\nMultiply everything by the common denominator to get rid of fractions. A minus in front of a fraction flips the signs of the whole numerator."
        },
        "answer": {
          "value": "-8"
        },
        "hints": [
          {
            "he": "מוצאים מכנה משותף וכופלים בו כל איבר במשוואה — גם איבר בלי שבר.",
            "ru": "Находим общий знаменатель и умножаем на него каждый член уравнения — даже без дроби.",
            "en": "Find a common denominator and multiply every term of the equation by it — even a term without a fraction."
          },
          {
            "he": "צעד ראשון `3(x + 3) + 5(2x + 4) = −75`",
            "ru": "Первый шаг `3(x + 3) + 5(2x + 4) = −75`",
            "en": "First step `3(x + 3) + 5(2x + 4) = −75`"
          },
          {
            "he": "בהמשך מקבלים `13x + 29 = −75`",
            "ru": "Дальше получится `13x + 29 = −75`",
            "en": "Next you get `13x + 29 = −75`"
          }
        ],
        "solution": [
          {
            "he": "מכנה משותף של 5 ו־3 `15`. גם את `−5` כופלים ב־15.",
            "ru": "Общий знаменатель 5 и 3 `15`. `−5` тоже умножаем на 15.",
            "en": "Common denominator of 5 and 3 `15`. Multiply `−5` by 15 too."
          },
          {
            "he": "כופלים כל איבר במכנה המשותף `15`",
            "ru": "Умножаем каждый член на общий знаменатель `15`",
            "en": "Multiply every term by the common denominator `15`"
          },
          "3(x + 3) + 5(2x + 4) = −75",
          {
            "he": "פותחים סוגריים",
            "ru": "Раскрываем скобки",
            "en": "Expand the brackets"
          },
          "3x + 9 + 10x + 20 = −75",
          {
            "he": "מכנסים איברים דומים",
            "ru": "Приводим подобные",
            "en": "Combine like terms"
          },
          "13x + 29 = −75",
          "13x = −75 − 29",
          "13x = −104",
          {
            "he": "מחלקים את שני האגפים ב־`13`",
            "ru": "Делим обе части на `13`",
            "en": "Divide both sides by `13`"
          },
          "x = −8",
          {
            "he": "תשובה `x = −8`",
            "ru": "Ответ `x = −8`",
            "en": "Answer `x = −8`"
          },
          {
            "he": "בדיקה `−5/5 + (−12)/3 = −1 − 4 = −5` ✓",
            "ru": "Проверка `−5/5 + (−12)/3 = −1 − 4 = −5` ✓",
            "en": "Check `−5/5 + (−12)/3 = −1 − 4 = −5` ✓"
          }
        ]
      },
      {
        "id": "t5-4",
        "group": "5",
        "label": "5ד",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה `(1 − 7x)/3 + 3x = (x − 3)/5`",
          "ru": "Реши уравнение `(1 − 7x)/3 + 3x = (x − 3)/5`",
          "en": "Solve the equation `(1 − 7x)/3 + 3x = (x − 3)/5`"
        },
        "example": {
          "he": "המשוואה:\n```\n(1 − x)/2 + x = (x + 7)/4        | × 4\n2(1 − x) + 4x = x + 7\n2 − 2x + 4x = x + 7\n2x − x = 7 − 2\nx = 5\n```\nכופלים הכול במכנה המשותף כדי להיפטר מהשברים. מינוס לפני שבר הופך את הסימנים של כל המונה.",
          "ru": "Уравнение:\n```\n(1 − x)/2 + x = (x + 7)/4        | × 4\n2(1 − x) + 4x = x + 7\n2 − 2x + 4x = x + 7\n2x − x = 7 − 2\nx = 5\n```\nУмножаем всё на общий знаменатель, чтобы убрать дроби. Минус перед дробью меняет знаки всего числителя.",
          "en": "Equation:\n```\n(1 − x)/2 + x = (x + 7)/4        | × 4\n2(1 − x) + 4x = x + 7\n2 − 2x + 4x = x + 7\n2x − x = 7 − 2\nx = 5\n```\nMultiply everything by the common denominator to get rid of fractions. A minus in front of a fraction flips the signs of the whole numerator."
        },
        "answer": {
          "value": "-2"
        },
        "hints": [
          {
            "he": "מוצאים מכנה משותף וכופלים בו כל איבר במשוואה — גם איבר בלי שבר.",
            "ru": "Находим общий знаменатель и умножаем на него каждый член уравнения — даже без дроби.",
            "en": "Find a common denominator and multiply every term of the equation by it — even a term without a fraction."
          },
          {
            "he": "צעד ראשון `5(1 − 7x) + 45x = 3(x − 3)`",
            "ru": "Первый шаг `5(1 − 7x) + 45x = 3(x − 3)`",
            "en": "First step `5(1 − 7x) + 45x = 3(x − 3)`"
          },
          {
            "he": "בהמשך מקבלים `5 + 10x = 3x − 9`",
            "ru": "Дальше получится `5 + 10x = 3x − 9`",
            "en": "Next you get `5 + 10x = 3x − 9`"
          }
        ],
        "solution": [
          {
            "he": "מכנה משותף `15`. האיבר `3x` בלי שבר — גם אותו כופלים ב־15.",
            "ru": "Общий знаменатель `15`. Член `3x` без дроби — его тоже умножаем на 15.",
            "en": "Common denominator `15`. The term `3x` has no fraction — multiply it by 15 too."
          },
          {
            "he": "כופלים כל איבר במכנה המשותף `15`",
            "ru": "Умножаем каждый член на общий знаменатель `15`",
            "en": "Multiply every term by the common denominator `15`"
          },
          "5(1 − 7x) + 45x = 3(x − 3)",
          {
            "he": "פותחים סוגריים",
            "ru": "Раскрываем скобки",
            "en": "Expand the brackets"
          },
          "5 − 35x + 45x = 3x − 9",
          {
            "he": "מכנסים איברים דומים",
            "ru": "Приводим подобные",
            "en": "Combine like terms"
          },
          "5 + 10x = 3x − 9",
          {
            "he": "מעבירים אגפים: x שמאלה, מספרים ימינה (הסימן מתחלף)",
            "ru": "Переносим: x влево, числа вправо (знак меняется)",
            "en": "Move terms: x to the left, numbers to the right (the sign flips)"
          },
          "10x − 3x = −9 − 5",
          "7x = −14",
          {
            "he": "מחלקים את שני האגפים ב־`7`",
            "ru": "Делим обе части на `7`",
            "en": "Divide both sides by `7`"
          },
          "x = −2",
          {
            "he": "תשובה `x = −2`",
            "ru": "Ответ `x = −2`",
            "en": "Answer `x = −2`"
          },
          {
            "he": "בדיקה `15/3 − 6 = −1 = −5/5` ✓",
            "ru": "Проверка `15/3 − 6 = −1 = −5/5` ✓",
            "en": "Check `15/3 − 6 = −1 = −5/5` ✓"
          }
        ]
      },
      {
        "id": "t5-5",
        "group": "5",
        "label": "5ה",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה `(2x − 3)/5 + (5x + 12)/16 − (32 − 3x)/20 = (5x − 12)/4`",
          "ru": "Реши уравнение `(2x − 3)/5 + (5x + 12)/16 − (32 − 3x)/20 = (5x − 12)/4`",
          "en": "Solve the equation `(2x − 3)/5 + (5x + 12)/16 − (32 − 3x)/20 = (5x − 12)/4`"
        },
        "example": {
          "he": "המשוואה:\n```\n(x + 1)/2 + (x − 1)/3 − (x + 3)/6 = (x + 2)/2        | × 6\n3(x + 1) + 2(x − 1) − (x + 3) = 3(x + 2)\n3x + 3 + 2x − 2 − x − 3 = 3x + 6\n4x − 2 = 3x + 6\n4x − 3x = 6 + 2\nx = 8\n```\nכופלים הכול במכנה המשותף כדי להיפטר מהשברים. מינוס לפני שבר הופך את הסימנים של כל המונה.",
          "ru": "Уравнение:\n```\n(x + 1)/2 + (x − 1)/3 − (x + 3)/6 = (x + 2)/2        | × 6\n3(x + 1) + 2(x − 1) − (x + 3) = 3(x + 2)\n3x + 3 + 2x − 2 − x − 3 = 3x + 6\n4x − 2 = 3x + 6\n4x − 3x = 6 + 2\nx = 8\n```\nУмножаем всё на общий знаменатель, чтобы убрать дроби. Минус перед дробью меняет знаки всего числителя.",
          "en": "Equation:\n```\n(x + 1)/2 + (x − 1)/3 − (x + 3)/6 = (x + 2)/2        | × 6\n3(x + 1) + 2(x − 1) − (x + 3) = 3(x + 2)\n3x + 3 + 2x − 2 − x − 3 = 3x + 6\n4x − 2 = 3x + 6\n4x − 3x = 6 + 2\nx = 8\n```\nMultiply everything by the common denominator to get rid of fractions. A minus in front of a fraction flips the signs of the whole numerator."
        },
        "answer": {
          "value": "4"
        },
        "hints": [
          {
            "he": "מוצאים מכנה משותף וכופלים בו כל איבר במשוואה — גם איבר בלי שבר.",
            "ru": "Находим общий знаменатель и умножаем на него каждый член уравнения — даже без дроби.",
            "en": "Find a common denominator and multiply every term of the equation by it — even a term without a fraction."
          },
          {
            "he": "צעד ראשון `16(2x − 3) + 5(5x + 12) − 4(32 − 3x) = 20(5x − 12)`",
            "ru": "Первый шаг `16(2x − 3) + 5(5x + 12) − 4(32 − 3x) = 20(5x − 12)`",
            "en": "First step `16(2x − 3) + 5(5x + 12) − 4(32 − 3x) = 20(5x − 12)`"
          },
          {
            "he": "בהמשך מקבלים `69x − 116 = 100x − 240`",
            "ru": "Дальше получится `69x − 116 = 100x − 240`",
            "en": "Next you get `69x − 116 = 100x − 240`"
          }
        ],
        "solution": [
          {
            "he": "מחפשים מכנה משותף: לוקחים את המכנה הגדול (20) וכופלים ב־2, 3, 4… עד שהוא מתחלק בכל המכנים: 40 ו־60 לא מתחלקים ב־16, `80` כן.",
            "ru": "Ищем общий знаменатель: берём самый большой (20) и умножаем на 2, 3, 4…, пока не поделится на все: 40 и 60 не делятся на 16, `80` делится.",
            "en": "Find the common denominator: take the largest (20) and multiply by 2, 3, 4… until it divides by all: 40 and 60 are not divisible by 16, `80` is."
          },
          {
            "he": "כמה פעמים כל מכנה נכנס ב־80 `80 / 5 = 16`, `80 / 16 = 5`, `80 / 20 = 4`, `80 / 4 = 20`.",
            "ru": "Сколько раз каждый знаменатель входит в 80 `80 / 5 = 16`, `80 / 16 = 5`, `80 / 20 = 4`, `80 / 4 = 20`.",
            "en": "How many times each denominator goes into 80 `80 / 5 = 16`, `80 / 16 = 5`, `80 / 20 = 4`, `80 / 4 = 20`."
          },
          {
            "he": "כופלים כל איבר במכנה המשותף `80`",
            "ru": "Умножаем каждый член на общий знаменатель `80`",
            "en": "Multiply every term by the common denominator `80`"
          },
          "16(2x − 3) + 5(5x + 12) − 4(32 − 3x) = 20(5x − 12)",
          {
            "he": "פותחים סוגריים. שימו לב `−4 × (−3x) = +12x`",
            "ru": "Раскрываем скобки. Внимание `−4 × (−3x) = +12x`",
            "en": "Expand the brackets. Note `−4 × (−3x) = +12x`"
          },
          "32x − 48 + 25x + 60 − 128 + 12x = 100x − 240",
          {
            "he": "מכנסים איברים דומים",
            "ru": "Приводим подобные",
            "en": "Combine like terms"
          },
          "69x − 116 = 100x − 240",
          {
            "he": "מעבירים אגפים: x שמאלה, מספרים ימינה (הסימן מתחלף)",
            "ru": "Переносим: x влево, числа вправо (знак меняется)",
            "en": "Move terms: x to the left, numbers to the right (the sign flips)"
          },
          "69x − 100x = −240 + 116",
          "−31x = −124",
          {
            "he": "מחלקים את שני האגפים ב־`−31`",
            "ru": "Делим обе части на `−31`",
            "en": "Divide both sides by `−31`"
          },
          "x = 4",
          {
            "he": "תשובה `x = 4`",
            "ru": "Ответ `x = 4`",
            "en": "Answer `x = 4`"
          },
          {
            "he": "בדיקה `1 + 2 − 1 = 2 = 8/4` ✓",
            "ru": "Проверка `1 + 2 − 1 = 2 = 8/4` ✓",
            "en": "Check `1 + 2 − 1 = 2 = 8/4` ✓"
          }
        ]
      },
      {
        "id": "t23-1",
        "group": "23",
        "label": "23א",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`x + y = 8`\n`x − y = 6`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений\n`x + y = 8`\n`x − y = 6`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations\n`x + y = 8`\n`x − y = 6`\nWrite the answer like this: x = …, y = …"
        },
        "example": {
          "he": "```\nx + y = 7\nx − y = 3\n```\nהמקדמים של y: `1` ו־`−1`, אין צורך לכפול.\nהסימנים של y שונים → מחברים:\n```\n2x = 10\nx = 10 / 2 = 5\n```\nמציבים את x במשוואה הראשונה:\n```\n5 + y = 7\ny = 2\n```",
          "ru": "```\nx + y = 7\nx − y = 3\n```\nКоэффициенты при y: `1` и `−1`, умножать ничего не нужно.\nЗнаки при y разные → складываем:\n```\n2x = 10\nx = 10 / 2 = 5\n```\nПодставляем x в первое уравнение:\n```\n5 + y = 7\ny = 2\n```",
          "en": "```\nx + y = 7\nx − y = 3\n```\nThe y coefficients: `1` and `−1`, no need to multiply.\nThe y signs are different → we add:\n```\n2x = 10\nx = 10 / 2 = 5\n```\nPut x into the first equation:\n```\n5 + y = 7\ny = 2\n```"
        },
        "answer": {
          "accept": [
            "x = 7, y = 1",
            "x=7, y=1",
            "x = 7; y = 1",
            "x=7,y=1",
            "x = 7, у = 1",
            "x=7, у=1",
            "x = 7; у = 1",
            "x=7,у=1",
            "(7, 1)",
            "(7,1)",
            "7, 1",
            "7,1",
            "7; 1"
          ]
        },
        "hints": [
          {
            "he": "חפשו נעלם שהמקדמים שלו שווים או נגדיים. סימנים שונים — מחברים את המשוואות, סימנים שווים — מחסירים.",
            "ru": "Найди неизвестное с одинаковыми или противоположными коэффициентами. Знаки разные — складываем уравнения, одинаковые — вычитаем.",
            "en": "Look for an unknown whose coefficients are equal or opposite. Different signs — add the equations; same signs — subtract."
          },
          {
            "he": "צעד ראשון `(x + y) + (x − y) = 8 + 6`",
            "ru": "Первый шаг `(x + y) + (x − y) = 8 + 6`",
            "en": "First step `(x + y) + (x − y) = 8 + 6`"
          },
          {
            "he": "בהמשך מקבלים `2x = 14`",
            "ru": "Дальше получится `2x = 14`",
            "en": "Next you get `2x = 14`"
          }
        ],
        "solution": [
          {
            "he": "המקדמים של y הם `+1` ו־`−1` — סימנים שונים, לכן מחברים",
            "ru": "Коэффициенты при y — `+1` и `−1`, знаки разные, поэтому складываем",
            "en": "The y coefficients are `+1` and `−1` — different signs, so add"
          },
          "(x + y) + (x − y) = 8 + 6",
          "2x = 14",
          {
            "he": "מחלקים את שני האגפים ב־`2`",
            "ru": "Делим обе части на `2`",
            "en": "Divide both sides by `2`"
          },
          "x = 7",
          {
            "he": "מציבים `x = 7` במשוואה הראשונה",
            "ru": "Подставляем `x = 7` в первое уравнение",
            "en": "Substitute `x = 7` into the first equation"
          },
          "7 + y = 8",
          "y = 1",
          {
            "he": "תשובה `x = 7,  y = 1`",
            "ru": "Ответ `x = 7,  y = 1`",
            "en": "Answer `x = 7,  y = 1`"
          }
        ]
      },
      {
        "id": "t23-2",
        "group": "23",
        "label": "23ב",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`x − y = 1`\n`x + y = 7`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений\n`x − y = 1`\n`x + y = 7`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations\n`x − y = 1`\n`x + y = 7`\nWrite the answer like this: x = …, y = …"
        },
        "example": {
          "he": "```\nx − y = 2\nx + y = 10\n```\nהמקדמים של y: `−1` ו־`1`, אין צורך לכפול.\nהסימנים של y שונים → מחברים:\n```\n2x = 12\nx = 12 / 2 = 6\n```\nמציבים את x במשוואה הראשונה:\n```\n6 − y = 2\n−y = −4\ny = 4\n```",
          "ru": "```\nx − y = 2\nx + y = 10\n```\nКоэффициенты при y: `−1` и `1`, умножать ничего не нужно.\nЗнаки при y разные → складываем:\n```\n2x = 12\nx = 12 / 2 = 6\n```\nПодставляем x в первое уравнение:\n```\n6 − y = 2\n−y = −4\ny = 4\n```",
          "en": "```\nx − y = 2\nx + y = 10\n```\nThe y coefficients: `−1` and `1`, no need to multiply.\nThe y signs are different → we add:\n```\n2x = 12\nx = 12 / 2 = 6\n```\nPut x into the first equation:\n```\n6 − y = 2\n−y = −4\ny = 4\n```"
        },
        "answer": {
          "accept": [
            "x = 4, y = 3",
            "x=4, y=3",
            "x = 4; y = 3",
            "x=4,y=3",
            "x = 4, у = 3",
            "x=4, у=3",
            "x = 4; у = 3",
            "x=4,у=3",
            "(4, 3)",
            "(4,3)",
            "4, 3",
            "4,3",
            "4; 3"
          ]
        },
        "hints": [
          {
            "he": "חפשו נעלם שהמקדמים שלו שווים או נגדיים. סימנים שונים — מחברים את המשוואות, סימנים שווים — מחסירים.",
            "ru": "Найди неизвестное с одинаковыми или противоположными коэффициентами. Знаки разные — складываем уравнения, одинаковые — вычитаем.",
            "en": "Look for an unknown whose coefficients are equal or opposite. Different signs — add the equations; same signs — subtract."
          },
          {
            "he": "צעד ראשון `(x − y) + (x + y) = 1 + 7`",
            "ru": "Первый шаг `(x − y) + (x + y) = 1 + 7`",
            "en": "First step `(x − y) + (x + y) = 1 + 7`"
          },
          {
            "he": "בהמשך מקבלים `2x = 8`",
            "ru": "Дальше получится `2x = 8`",
            "en": "Next you get `2x = 8`"
          }
        ],
        "solution": [
          {
            "he": "מחברים את המשוואות",
            "ru": "Складываем уравнения",
            "en": "Add the equations"
          },
          "(x − y) + (x + y) = 1 + 7",
          "2x = 8",
          {
            "he": "מחלקים את שני האגפים ב־`2`",
            "ru": "Делим обе части на `2`",
            "en": "Divide both sides by `2`"
          },
          "x = 4",
          {
            "he": "מציבים `x = 4` במשוואה השנייה",
            "ru": "Подставляем `x = 4` в второе уравнение",
            "en": "Substitute `x = 4` into the second equation"
          },
          "4 + y = 7",
          "y = 3",
          {
            "he": "תשובה `x = 4,  y = 3`",
            "ru": "Ответ `x = 4,  y = 3`",
            "en": "Answer `x = 4,  y = 3`"
          }
        ]
      },
      {
        "id": "t23-3",
        "group": "23",
        "label": "23ג",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`5x − 2y = −17`\n`3x + 2y = −7`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений\n`5x − 2y = −17`\n`3x + 2y = −7`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations\n`5x − 2y = −17`\n`3x + 2y = −7`\nWrite the answer like this: x = …, y = …"
        },
        "example": {
          "he": "```\n4x − 3y = −10\n2x + 3y = 4\n```\nהמקדמים של y: `−3` ו־`3`, אין צורך לכפול.\nהסימנים של y שונים → מחברים:\n```\n6x = −6\nx = −6 / 6 = −1\n```\nמציבים את x במשוואה הראשונה:\n```\n4 × (−1) − 3y = −10\n−3y = −6\ny = 2\n```",
          "ru": "```\n4x − 3y = −10\n2x + 3y = 4\n```\nКоэффициенты при y: `−3` и `3`, умножать ничего не нужно.\nЗнаки при y разные → складываем:\n```\n6x = −6\nx = −6 / 6 = −1\n```\nПодставляем x в первое уравнение:\n```\n4 × (−1) − 3y = −10\n−3y = −6\ny = 2\n```",
          "en": "```\n4x − 3y = −10\n2x + 3y = 4\n```\nThe y coefficients: `−3` and `3`, no need to multiply.\nThe y signs are different → we add:\n```\n6x = −6\nx = −6 / 6 = −1\n```\nPut x into the first equation:\n```\n4 × (−1) − 3y = −10\n−3y = −6\ny = 2\n```"
        },
        "answer": {
          "accept": [
            "x = −3, y = 1",
            "x=−3, y=1",
            "x = −3; y = 1",
            "x=−3,y=1",
            "x = −3, у = 1",
            "x=−3, у=1",
            "x = −3; у = 1",
            "x=−3,у=1",
            "(−3, 1)",
            "(−3,1)",
            "−3, 1",
            "−3,1",
            "−3; 1"
          ]
        },
        "hints": [
          {
            "he": "חפשו נעלם שהמקדמים שלו שווים או נגדיים. סימנים שונים — מחברים את המשוואות, סימנים שווים — מחסירים.",
            "ru": "Найди неизвестное с одинаковыми или противоположными коэффициентами. Знаки разные — складываем уравнения, одинаковые — вычитаем.",
            "en": "Look for an unknown whose coefficients are equal or opposite. Different signs — add the equations; same signs — subtract."
          },
          {
            "he": "צעד ראשון `8x = −24`",
            "ru": "Первый шаг `8x = −24`",
            "en": "First step `8x = −24`"
          },
          {
            "he": "בהמשך מקבלים `x = −3`",
            "ru": "Дальше получится `x = −3`",
            "en": "Next you get `x = −3`"
          }
        ],
        "solution": [
          {
            "he": "`−2y` ו־`+2y` — מחברים והם מצטמצמים",
            "ru": "`−2y` и `+2y` — складываем, они сокращаются",
            "en": "`−2y` and `+2y` — add and they cancel"
          },
          "8x = −24",
          {
            "he": "מחלקים את שני האגפים ב־`8`",
            "ru": "Делим обе части на `8`",
            "en": "Divide both sides by `8`"
          },
          "x = −3",
          {
            "he": "מציבים `x = −3` במשוואה השנייה",
            "ru": "Подставляем `x = −3` в второе уравнение",
            "en": "Substitute `x = −3` into the second equation"
          },
          "3 × (−3) + 2y = −7",
          "−9 + 2y = −7",
          "2y = 2",
          "y = 1",
          {
            "he": "תשובה `x = −3,  y = 1`",
            "ru": "Ответ `x = −3,  y = 1`",
            "en": "Answer `x = −3,  y = 1`"
          }
        ]
      },
      {
        "id": "t23-4",
        "group": "23",
        "label": "23ד",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`−10x + 4y = −44`\n`7x − 4y = 26`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений\n`−10x + 4y = −44`\n`7x − 4y = 26`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations\n`−10x + 4y = −44`\n`7x − 4y = 26`\nWrite the answer like this: x = …, y = …"
        },
        "example": {
          "he": "```\n−5x + 2y = −18\n3x − 2y = 10\n```\nהמקדמים של y: `2` ו־`−2`, אין צורך לכפול.\nהסימנים של y שונים → מחברים:\n```\n−2x = −8\nx = −8 / (−2) = 4\n```\nמציבים את x במשוואה הראשונה:\n```\n−5 × 4 + 2y = −18\n2y = 2\ny = 1\n```",
          "ru": "```\n−5x + 2y = −18\n3x − 2y = 10\n```\nКоэффициенты при y: `2` и `−2`, умножать ничего не нужно.\nЗнаки при y разные → складываем:\n```\n−2x = −8\nx = −8 / (−2) = 4\n```\nПодставляем x в первое уравнение:\n```\n−5 × 4 + 2y = −18\n2y = 2\ny = 1\n```",
          "en": "```\n−5x + 2y = −18\n3x − 2y = 10\n```\nThe y coefficients: `2` and `−2`, no need to multiply.\nThe y signs are different → we add:\n```\n−2x = −8\nx = −8 / (−2) = 4\n```\nPut x into the first equation:\n```\n−5 × 4 + 2y = −18\n2y = 2\ny = 1\n```"
        },
        "answer": {
          "accept": [
            "x = 6, y = 4",
            "x=6, y=4",
            "x = 6; y = 4",
            "x=6,y=4",
            "x = 6, у = 4",
            "x=6, у=4",
            "x = 6; у = 4",
            "x=6,у=4",
            "(6, 4)",
            "(6,4)",
            "6, 4",
            "6,4",
            "6; 4"
          ]
        },
        "hints": [
          {
            "he": "חפשו נעלם שהמקדמים שלו שווים או נגדיים. סימנים שונים — מחברים את המשוואות, סימנים שווים — מחסירים.",
            "ru": "Найди неизвестное с одинаковыми или противоположными коэффициентами. Знаки разные — складываем уравнения, одинаковые — вычитаем.",
            "en": "Look for an unknown whose coefficients are equal or opposite. Different signs — add the equations; same signs — subtract."
          },
          {
            "he": "צעד ראשון `−3x = −18`",
            "ru": "Первый шаг `−3x = −18`",
            "en": "First step `−3x = −18`"
          },
          {
            "he": "בהמשך מקבלים `x = 6`",
            "ru": "Дальше получится `x = 6`",
            "en": "Next you get `x = 6`"
          }
        ],
        "solution": [
          {
            "he": "`+4y` ו־`−4y` — מחברים",
            "ru": "`+4y` и `−4y` — складываем",
            "en": "`+4y` and `−4y` — add"
          },
          "−3x = −18",
          {
            "he": "מחלקים את שני האגפים ב־`−3`",
            "ru": "Делим обе части на `−3`",
            "en": "Divide both sides by `−3`"
          },
          "x = 6",
          {
            "he": "מציבים `x = 6` במשוואה השנייה",
            "ru": "Подставляем `x = 6` в второе уравнение",
            "en": "Substitute `x = 6` into the second equation"
          },
          "7 × 6 − 4y = 26",
          "42 − 4y = 26",
          "−4y = −16",
          "y = 4",
          {
            "he": "תשובה `x = 6,  y = 4`",
            "ru": "Ответ `x = 6,  y = 4`",
            "en": "Answer `x = 6,  y = 4`"
          }
        ]
      },
      {
        "id": "t23-5",
        "group": "23",
        "label": "23ה",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`−x + y = 7`\n`x + y = −3`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений\n`−x + y = 7`\n`x + y = −3`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations\n`−x + y = 7`\n`x + y = −3`\nWrite the answer like this: x = …, y = …"
        },
        "example": {
          "he": "```\n−x + y = 5\nx + y = 1\n```\nהמקדמים של y: `1` ו־`1`, אין צורך לכפול.\nהסימנים של y זהים → מחסרים:\n```\n−2x = 4\nx = 4 / (−2) = −2\n```\nמציבים את x במשוואה הראשונה:\n```\n−(−2) + y = 5\ny = 3\n```",
          "ru": "```\n−x + y = 5\nx + y = 1\n```\nКоэффициенты при y: `1` и `1`, умножать ничего не нужно.\nЗнаки при y одинаковые → вычитаем:\n```\n−2x = 4\nx = 4 / (−2) = −2\n```\nПодставляем x в первое уравнение:\n```\n−(−2) + y = 5\ny = 3\n```",
          "en": "```\n−x + y = 5\nx + y = 1\n```\nThe y coefficients: `1` and `1`, no need to multiply.\nThe y signs are the same → we subtract:\n```\n−2x = 4\nx = 4 / (−2) = −2\n```\nPut x into the first equation:\n```\n−(−2) + y = 5\ny = 3\n```"
        },
        "answer": {
          "accept": [
            "x = −5, y = 2",
            "x=−5, y=2",
            "x = −5; y = 2",
            "x=−5,y=2",
            "x = −5, у = 2",
            "x=−5, у=2",
            "x = −5; у = 2",
            "x=−5,у=2",
            "(−5, 2)",
            "(−5,2)",
            "−5, 2",
            "−5,2",
            "−5; 2"
          ]
        },
        "hints": [
          {
            "he": "חפשו נעלם שהמקדמים שלו שווים או נגדיים. סימנים שונים — מחברים את המשוואות, סימנים שווים — מחסירים.",
            "ru": "Найди неизвестное с одинаковыми или противоположными коэффициентами. Знаки разные — складываем уравнения, одинаковые — вычитаем.",
            "en": "Look for an unknown whose coefficients are equal or opposite. Different signs — add the equations; same signs — subtract."
          },
          {
            "he": "צעד ראשון `2y = 4`",
            "ru": "Первый шаг `2y = 4`",
            "en": "First step `2y = 4`"
          },
          {
            "he": "בהמשך מקבלים `y = 2`",
            "ru": "Дальше получится `y = 2`",
            "en": "Next you get `y = 2`"
          }
        ],
        "solution": [
          {
            "he": "הפעם x מצטמצם `−x` ו־`+x`. מחברים",
            "ru": "Теперь сокращается x `−x` и `+x`. Складываем",
            "en": "This time x cancels `−x` and `+x`. Add"
          },
          "2y = 4",
          "y = 2",
          {
            "he": "מציבים `y = 2` במשוואה השנייה",
            "ru": "Подставляем `y = 2` в второе уравнение",
            "en": "Substitute `y = 2` into the second equation"
          },
          "x + 2 = −3",
          "x = −5",
          {
            "he": "תשובה `x = −5,  y = 2`",
            "ru": "Ответ `x = −5,  y = 2`",
            "en": "Answer `x = −5,  y = 2`"
          }
        ]
      },
      {
        "id": "t23-6",
        "group": "23",
        "label": "23ו",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`−3x − 2y = −1`\n`3x + 8y = 13`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений\n`−3x − 2y = −1`\n`3x + 8y = 13`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations\n`−3x − 2y = −1`\n`3x + 8y = 13`\nWrite the answer like this: x = …, y = …"
        },
        "example": {
          "he": "```\n−2x − 3y = −5\n2x + 5y = 7\n```\nרוצים להיפטר מ־y. המקדמים של y: `−3` ו־`5`. את הראשונה כופלים ב־5, את השנייה ב־3:\n```\n−10x − 15y = −25\n6x + 15y = 21\n```\nהסימנים של y שונים → מחברים:\n```\n−4x = −4\nx = −4 / (−4) = 1\n```\nמציבים את x במשוואה הראשונה:\n```\n−2 × 1 − 3y = −5\n−3y = −3\ny = 1\n```",
          "ru": "```\n−2x − 3y = −5\n2x + 5y = 7\n```\nХотим убрать y. Коэффициенты при y: `−3` и `5`. Первое умножаем на 5, второе на 3:\n```\n−10x − 15y = −25\n6x + 15y = 21\n```\nЗнаки при y разные → складываем:\n```\n−4x = −4\nx = −4 / (−4) = 1\n```\nПодставляем x в первое уравнение:\n```\n−2 × 1 − 3y = −5\n−3y = −3\ny = 1\n```",
          "en": "```\n−2x − 3y = −5\n2x + 5y = 7\n```\nWe want to remove y. The y coefficients: `−3` and `5`. Multiply the first by 5, the second by 3:\n```\n−10x − 15y = −25\n6x + 15y = 21\n```\nThe y signs are different → we add:\n```\n−4x = −4\nx = −4 / (−4) = 1\n```\nPut x into the first equation:\n```\n−2 × 1 − 3y = −5\n−3y = −3\ny = 1\n```"
        },
        "answer": {
          "accept": [
            "x = −1, y = 2",
            "x=−1, y=2",
            "x = −1; y = 2",
            "x=−1,y=2",
            "x = −1, у = 2",
            "x=−1, у=2",
            "x = −1; у = 2",
            "x=−1,у=2",
            "(−1, 2)",
            "(−1,2)",
            "−1, 2",
            "−1,2",
            "−1; 2"
          ]
        },
        "hints": [
          {
            "he": "חפשו נעלם שהמקדמים שלו שווים או נגדיים. סימנים שונים — מחברים את המשוואות, סימנים שווים — מחסירים.",
            "ru": "Найди неизвестное с одинаковыми или противоположными коэффициентами. Знаки разные — складываем уравнения, одинаковые — вычитаем.",
            "en": "Look for an unknown whose coefficients are equal or opposite. Different signs — add the equations; same signs — subtract."
          },
          {
            "he": "צעד ראשון `6y = 12`",
            "ru": "Первый шаг `6y = 12`",
            "en": "First step `6y = 12`"
          },
          {
            "he": "בהמשך מקבלים `y = 2`",
            "ru": "Дальше получится `y = 2`",
            "en": "Next you get `y = 2`"
          }
        ],
        "solution": [
          {
            "he": "`−3x` ו־`+3x` — מחברים",
            "ru": "`−3x` и `+3x` — складываем",
            "en": "`−3x` and `+3x` — add"
          },
          "6y = 12",
          "y = 2",
          {
            "he": "מציבים `y = 2` במשוואה השנייה",
            "ru": "Подставляем `y = 2` в второе уравнение",
            "en": "Substitute `y = 2` into the second equation"
          },
          "3x + 16 = 13",
          "3x = −3",
          "x = −1",
          {
            "he": "תשובה `x = −1,  y = 2`",
            "ru": "Ответ `x = −1,  y = 2`",
            "en": "Answer `x = −1,  y = 2`"
          }
        ]
      },
      {
        "id": "t24",
        "group": "24",
        "label": "24",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`4x + y = 9`\n`3x − 2y = 4`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений\n`4x + y = 9`\n`3x − 2y = 4`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations\n`4x + y = 9`\n`3x − 2y = 4`\nWrite the answer like this: x = …, y = …"
        },
        "example": {
          "he": "```\n3x + y = 5\n2x − 3y = 7\n```\nרוצים להיפטר מ־y. המקדמים של y: `1` ו־`−3`. את הראשונה כופלים ב־3, את השנייה ב־1:\n```\n9x + 3y = 15\n2x − 3y = 7\n```\nהסימנים של y שונים → מחברים:\n```\n11x = 22\nx = 22 / 11 = 2\n```\nמציבים את x במשוואה הראשונה:\n```\n3 × 2 + y = 5\ny = −1\n```",
          "ru": "```\n3x + y = 5\n2x − 3y = 7\n```\nХотим убрать y. Коэффициенты при y: `1` и `−3`. Первое умножаем на 3, второе на 1:\n```\n9x + 3y = 15\n2x − 3y = 7\n```\nЗнаки при y разные → складываем:\n```\n11x = 22\nx = 22 / 11 = 2\n```\nПодставляем x в первое уравнение:\n```\n3 × 2 + y = 5\ny = −1\n```",
          "en": "```\n3x + y = 5\n2x − 3y = 7\n```\nWe want to remove y. The y coefficients: `1` and `−3`. Multiply the first by 3, the second by 1:\n```\n9x + 3y = 15\n2x − 3y = 7\n```\nThe y signs are different → we add:\n```\n11x = 22\nx = 22 / 11 = 2\n```\nPut x into the first equation:\n```\n3 × 2 + y = 5\ny = −1\n```"
        },
        "answer": {
          "accept": [
            "x = 2, y = 1",
            "x=2, y=1",
            "x = 2; y = 1",
            "x=2,y=1",
            "x = 2, у = 1",
            "x=2, у=1",
            "x = 2; у = 1",
            "x=2,у=1",
            "(2, 1)",
            "(2,1)",
            "2, 1",
            "2,1",
            "2; 1"
          ]
        },
        "hints": [
          {
            "he": "אף נעלם לא מצטמצם מיד. כופלים משוואה אחת (את כל האיברים שלה) במספר, כך שהמקדמים של y יהיו נגדיים.",
            "ru": "Сразу ничего не сокращается. Умножь одно уравнение (все его члены) на число, чтобы коэффициенты при y стали противоположными.",
            "en": "Nothing cancels right away. Multiply one equation (all of its terms) by a number so the y coefficients become opposite."
          },
          {
            "he": "צעד ראשון `8x + 2y = 18`",
            "ru": "Первый шаг `8x + 2y = 18`",
            "en": "First step `8x + 2y = 18`"
          },
          {
            "he": "בהמשך מקבלים `11x = 22`",
            "ru": "Дальше получится `11x = 22`",
            "en": "Next you get `11x = 22`"
          }
        ],
        "solution": [
          {
            "he": "כופלים את המשוואה הראשונה ב־`2` (כל איבר)",
            "ru": "Умножаем первое уравнение на `2` (каждый член)",
            "en": "Multiply the first equation by `2` (every term)"
          },
          "8x + 2y = 18",
          {
            "he": "עכשיו `+2y` ו־`−2y` — מחברים עם המשוואה השנייה",
            "ru": "Теперь `+2y` и `−2y` — складываем со вторым уравнением",
            "en": "Now `+2y` and `−2y` — add to the second equation"
          },
          "11x = 22",
          {
            "he": "מחלקים את שני האגפים ב־`11`",
            "ru": "Делим обе части на `11`",
            "en": "Divide both sides by `11`"
          },
          "x = 2",
          {
            "he": "מציבים `x = 2` במשוואה הראשונה",
            "ru": "Подставляем `x = 2` в первое уравнение",
            "en": "Substitute `x = 2` into the first equation"
          },
          "4 × 2 + y = 9",
          "y = 1",
          {
            "he": "תשובה `x = 2,  y = 1`",
            "ru": "Ответ `x = 2,  y = 1`",
            "en": "Answer `x = 2,  y = 1`"
          }
        ]
      },
      {
        "id": "bk1",
        "group": "book",
        "label": "1יא",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה\n`−9x = −27`",
          "ru": "Реши уравнение\n`−9x = −27`",
          "en": "Solve the equation\n`−9x = −27`"
        },
        "example": {
          "he": "המשוואה:\n```\n−6x = −42\nx = −42 / (−6)\nx = 7\n```\nמחלקים את שני הצדדים במספר שלפני x.",
          "ru": "Уравнение:\n```\n−6x = −42\nx = −42 / (−6)\nx = 7\n```\nДелим обе части на число перед x.",
          "en": "Equation:\n```\n−6x = −42\nx = −42 / (−6)\nx = 7\n```\nDivide both sides by the number in front of x."
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "מחלקים את שני האגפים במספר שליד x.",
            "ru": "Делим обе части на число при x.",
            "en": "Divide both sides by the number next to x."
          }
        ],
        "solution": [
          "x = −27 / (−9)",
          "x = 3",
          {
            "he": "תשובה `x = 3`",
            "ru": "Ответ `x = 3`",
            "en": "Answer `x = 3`"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "bk2",
        "group": "book",
        "label": "1ד",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה\n`2.5x = 18`",
          "ru": "Реши уравнение\n`2.5x = 18`",
          "en": "Solve the equation\n`2.5x = 18`"
        },
        "example": {
          "he": "המשוואה:\n```\n1.5x = 9\nx = 9 / 1.5\nx = 6\n```\nמחלקים את שני הצדדים במספר שלפני x.",
          "ru": "Уравнение:\n```\n1.5x = 9\nx = 9 / 1.5\nx = 6\n```\nДелим обе части на число перед x.",
          "en": "Equation:\n```\n1.5x = 9\nx = 9 / 1.5\nx = 6\n```\nDivide both sides by the number in front of x."
        },
        "answer": {
          "value": "7.2"
        },
        "hints": [
          {
            "he": "מחלקים את שני האגפים במספר שליד x.",
            "ru": "Делим обе части на число при x.",
            "en": "Divide both sides by the number next to x."
          }
        ],
        "solution": [
          "x = 18 / 2.5",
          "x = 7.2",
          {
            "he": "תשובה `x = 7.2`",
            "ru": "Ответ `x = 7.2`",
            "en": "Answer `x = 7.2`"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "bk3",
        "group": "book",
        "label": "2יא",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה\n`x + 7.8 = −2.2`",
          "ru": "Реши уравнение\n`x + 7.8 = −2.2`",
          "en": "Solve the equation\n`x + 7.8 = −2.2`"
        },
        "example": {
          "he": "המשוואה:\n```\nx + 3.5 = −1.5\nx = −1.5 − 3.5\nx = −5\n```\nמעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך.",
          "ru": "Уравнение:\n```\nx + 3.5 = −1.5\nx = −1.5 − 3.5\nx = −5\n```\nПереносим x в одну сторону, числа в другую. При переносе знак меняется.",
          "en": "Equation:\n```\nx + 3.5 = −1.5\nx = −1.5 − 3.5\nx = −5\n```\nMove x to one side and the numbers to the other. Moving a term flips its sign."
        },
        "answer": {
          "value": "-10"
        },
        "hints": [
          {
            "he": "מעבירים את המספר לאגף השני עם הסימן ההפוך.",
            "ru": "Переносим число в другую часть с противоположным знаком.",
            "en": "Move the number to the other side with the opposite sign."
          }
        ],
        "solution": [
          "x = −2.2 − 7.8",
          "x = −10",
          {
            "he": "תשובה `x = −10`",
            "ru": "Ответ `x = −10`",
            "en": "Answer `x = −10`"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "bk4",
        "group": "book",
        "label": "2יב",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה\n`12.3 + x = −4.8`",
          "ru": "Реши уравнение\n`12.3 + x = −4.8`",
          "en": "Solve the equation\n`12.3 + x = −4.8`"
        },
        "example": {
          "he": "המשוואה:\n```\n6.4 + x = −2.6\nx = −2.6 − 6.4\nx = −9\n```\nמעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך.",
          "ru": "Уравнение:\n```\n6.4 + x = −2.6\nx = −2.6 − 6.4\nx = −9\n```\nПереносим x в одну сторону, числа в другую. При переносе знак меняется.",
          "en": "Equation:\n```\n6.4 + x = −2.6\nx = −2.6 − 6.4\nx = −9\n```\nMove x to one side and the numbers to the other. Moving a term flips its sign."
        },
        "answer": {
          "value": "-17.1"
        },
        "hints": [
          {
            "he": "מעבירים את המספר לאגף השני עם הסימן ההפוך.",
            "ru": "Переносим число в другую часть с противоположным знаком.",
            "en": "Move the number to the other side with the opposite sign."
          }
        ],
        "solution": [
          "x = −4.8 − 12.3",
          "x = −17.1",
          {
            "he": "תשובה `x = −17.1`",
            "ru": "Ответ `x = −17.1`",
            "en": "Answer `x = −17.1`"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "bk5",
        "group": "book",
        "label": "3ו",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה\n`2.5x − 4 = −19`",
          "ru": "Реши уравнение\n`2.5x − 4 = −19`",
          "en": "Solve the equation\n`2.5x − 4 = −19`"
        },
        "example": {
          "he": "המשוואה:\n```\n1.5x − 3 = 9\n1.5x = 9 + 3\n1.5x = 12\nx = 8\n```\nמעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך. מחלקים את שני הצדדים במספר שלפני x.",
          "ru": "Уравнение:\n```\n1.5x − 3 = 9\n1.5x = 9 + 3\n1.5x = 12\nx = 8\n```\nПереносим x в одну сторону, числа в другую. При переносе знак меняется. Делим обе части на число перед x.",
          "en": "Equation:\n```\n1.5x − 3 = 9\n1.5x = 9 + 3\n1.5x = 12\nx = 8\n```\nMove x to one side and the numbers to the other. Moving a term flips its sign. Divide both sides by the number in front of x."
        },
        "answer": {
          "value": "-6"
        },
        "hints": [
          {
            "he": "קודם מעבירים את המספר, אחר כך מחלקים.",
            "ru": "Сначала переносим число, потом делим.",
            "en": "Move the number first, then divide."
          }
        ],
        "solution": [
          "2.5x = −19 + 4",
          "2.5x = −15",
          "x = −15 / 2.5",
          "x = −6",
          {
            "he": "תשובה `x = −6`",
            "ru": "Ответ `x = −6`",
            "en": "Answer `x = −6`"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "bk6",
        "group": "book",
        "label": "3י",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה\n`−1.25 + 2.3x = 1.51`",
          "ru": "Реши уравнение\n`−1.25 + 2.3x = 1.51`",
          "en": "Solve the equation\n`−1.25 + 2.3x = 1.51`"
        },
        "example": {
          "he": "המשוואה:\n```\n−0.75 + 1.5x = 2.25\n1.5x = 2.25 + 0.75\n1.5x = 3\nx = 2\n```\nמעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך. מחלקים את שני הצדדים במספר שלפני x.",
          "ru": "Уравнение:\n```\n−0.75 + 1.5x = 2.25\n1.5x = 2.25 + 0.75\n1.5x = 3\nx = 2\n```\nПереносим x в одну сторону, числа в другую. При переносе знак меняется. Делим обе части на число перед x.",
          "en": "Equation:\n```\n−0.75 + 1.5x = 2.25\n1.5x = 2.25 + 0.75\n1.5x = 3\nx = 2\n```\nMove x to one side and the numbers to the other. Moving a term flips its sign. Divide both sides by the number in front of x."
        },
        "answer": {
          "value": "1.2"
        },
        "hints": [
          {
            "he": "קודם מעבירים את המספר, אחר כך מחלקים.",
            "ru": "Сначала переносим число, потом делим.",
            "en": "Move the number first, then divide."
          }
        ],
        "solution": [
          "2.3x = 1.51 + 1.25",
          "2.3x = 2.76",
          "x = 2.76 / 2.3",
          "x = 1.2",
          {
            "he": "תשובה `x = 1.2`",
            "ru": "Ответ `x = 1.2`",
            "en": "Answer `x = 1.2`"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "bk7",
        "group": "book",
        "label": "4ו",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה\n`17x + 4 = 60 + 9x`",
          "ru": "Реши уравнение\n`17x + 4 = 60 + 9x`",
          "en": "Solve the equation\n`17x + 4 = 60 + 9x`"
        },
        "example": {
          "he": "המשוואה:\n```\n11x + 3 = 27 + 5x\n11x − 5x = 27 − 3\n6x = 24\nx = 4\n```\nמעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך. מחלקים את שני הצדדים במספר שלפני x.",
          "ru": "Уравнение:\n```\n11x + 3 = 27 + 5x\n11x − 5x = 27 − 3\n6x = 24\nx = 4\n```\nПереносим x в одну сторону, числа в другую. При переносе знак меняется. Делим обе части на число перед x.",
          "en": "Equation:\n```\n11x + 3 = 27 + 5x\n11x − 5x = 27 − 3\n6x = 24\nx = 4\n```\nMove x to one side and the numbers to the other. Moving a term flips its sign. Divide both sides by the number in front of x."
        },
        "answer": {
          "value": "7"
        },
        "hints": [
          {
            "he": "x לצד אחד, מספרים לצד השני.",
            "ru": "x — в одну сторону, числа — в другую.",
            "en": "x to one side, numbers to the other."
          }
        ],
        "solution": [
          "17x − 9x = 60 − 4",
          "8x = 56",
          "x = 56 / 8",
          "x = 7",
          {
            "he": "תשובה `x = 7`",
            "ru": "Ответ `x = 7`",
            "en": "Answer `x = 7`"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "bk8",
        "group": "book",
        "label": "4ח",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה\n`−20x − 16 = −24x − 18`",
          "ru": "Реши уравнение\n`−20x − 16 = −24x − 18`",
          "en": "Solve the equation\n`−20x − 16 = −24x − 18`"
        },
        "example": {
          "he": "המשוואה:\n```\n−10x − 7 = −14x − 13\n−10x + 14x = −13 + 7\n4x = −6\nx = −1.5\n```\nמעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך. מחלקים את שני הצדדים במספר שלפני x.",
          "ru": "Уравнение:\n```\n−10x − 7 = −14x − 13\n−10x + 14x = −13 + 7\n4x = −6\nx = −1.5\n```\nПереносим x в одну сторону, числа в другую. При переносе знак меняется. Делим обе части на число перед x.",
          "en": "Equation:\n```\n−10x − 7 = −14x − 13\n−10x + 14x = −13 + 7\n4x = −6\nx = −1.5\n```\nMove x to one side and the numbers to the other. Moving a term flips its sign. Divide both sides by the number in front of x."
        },
        "answer": {
          "value": "-0.5"
        },
        "hints": [
          {
            "he": "x לצד אחד, מספרים לצד השני.",
            "ru": "x — в одну сторону, числа — в другую.",
            "en": "x to one side, numbers to the other."
          }
        ],
        "solution": [
          "−20x + 24x = −18 + 16",
          "4x = −2",
          "x = −2 / 4",
          "x = −0.5",
          {
            "he": "תשובה `x = −0.5`",
            "ru": "Ответ `x = −0.5`",
            "en": "Answer `x = −0.5`"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "bk9",
        "group": "book",
        "label": "5ג",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה\n`−4x + 5 − 7x + 4 = 3x + 93`",
          "ru": "Реши уравнение\n`−4x + 5 − 7x + 4 = 3x + 93`",
          "en": "Solve the equation\n`−4x + 5 − 7x + 4 = 3x + 93`"
        },
        "example": {
          "he": "המשוואה:\n```\n−2x + 3 − 5x + 1 = x + 36\n−7x + 4 = x + 36\n−7x − x = 36 − 4\n−8x = 32\nx = −4\n```\nמעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך. מחלקים את שני הצדדים במספר שלפני x.",
          "ru": "Уравнение:\n```\n−2x + 3 − 5x + 1 = x + 36\n−7x + 4 = x + 36\n−7x − x = 36 − 4\n−8x = 32\nx = −4\n```\nПереносим x в одну сторону, числа в другую. При переносе знак меняется. Делим обе части на число перед x.",
          "en": "Equation:\n```\n−2x + 3 − 5x + 1 = x + 36\n−7x + 4 = x + 36\n−7x − x = 36 − 4\n−8x = 32\nx = −4\n```\nMove x to one side and the numbers to the other. Moving a term flips its sign. Divide both sides by the number in front of x."
        },
        "answer": {
          "value": "-6"
        },
        "hints": [
          {
            "he": "x לצד אחד, מספרים לצד השני.",
            "ru": "x — в одну сторону, числа — в другую.",
            "en": "x to one side, numbers to the other."
          }
        ],
        "solution": [
          "−11x + 9 = 3x + 93",
          "−11x − 3x = 93 − 9",
          "−14x = 84",
          "x = 84 / (−14)",
          "x = −6",
          {
            "he": "תשובה `x = −6`",
            "ru": "Ответ `x = −6`",
            "en": "Answer `x = −6`"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "bk10",
        "group": "book",
        "label": "5י",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה\n`3(x + 1) − 4 = 11`",
          "ru": "Реши уравнение\n`3(x + 1) − 4 = 11`",
          "en": "Solve the equation\n`3(x + 1) − 4 = 11`"
        },
        "example": {
          "he": "המשוואה:\n```\n2(x + 3) − 5 = 11\n2x + 6 − 5 = 11\n2x + 1 = 11\n2x = 10\nx = 5\n```\nפותחים סוגריים: את המספר שלפני הסוגריים כופלים בכל איבר בפנים. מינוס לפני סוגריים הופך את כל הסימנים בפנים. מעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך.",
          "ru": "Уравнение:\n```\n2(x + 3) − 5 = 11\n2x + 6 − 5 = 11\n2x + 1 = 11\n2x = 10\nx = 5\n```\nРаскрываем скобки: число перед скобкой умножаем на каждое слагаемое внутри. Минус перед скобкой меняет все знаки внутри. Переносим x в одну сторону, числа в другую. При переносе знак меняется.",
          "en": "Equation:\n```\n2(x + 3) − 5 = 11\n2x + 6 − 5 = 11\n2x + 1 = 11\n2x = 10\nx = 5\n```\nOpen the brackets: multiply the number in front by every term inside. A minus in front of brackets flips every sign inside. Move x to one side and the numbers to the other. Moving a term flips its sign."
        },
        "answer": {
          "value": "4"
        },
        "hints": [
          {
            "he": "קודם פותחים סוגריים.",
            "ru": "Сначала раскрываем скобки.",
            "en": "Open the brackets first."
          }
        ],
        "solution": [
          "3x + 3 − 4 = 11",
          "3x − 1 = 11",
          "3x = 12",
          "x = 4",
          {
            "he": "תשובה `x = 4`",
            "ru": "Ответ `x = 4`",
            "en": "Answer `x = 4`"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "bk11",
        "group": "book",
        "label": "5יד",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה\n`70 − 7(4 − 3x) = 0`",
          "ru": "Реши уравнение\n`70 − 7(4 − 3x) = 0`",
          "en": "Solve the equation\n`70 − 7(4 − 3x) = 0`"
        },
        "example": {
          "he": "המשוואה:\n```\n30 − 5(2 − 4x) = 0\n30 − 10 + 20x = 0\n20 + 20x = 0\n20x = −20\nx = −1\n```\nפותחים סוגריים: את המספר שלפני הסוגריים כופלים בכל איבר בפנים. מינוס לפני סוגריים הופך את כל הסימנים בפנים. מעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך.",
          "ru": "Уравнение:\n```\n30 − 5(2 − 4x) = 0\n30 − 10 + 20x = 0\n20 + 20x = 0\n20x = −20\nx = −1\n```\nРаскрываем скобки: число перед скобкой умножаем на каждое слагаемое внутри. Минус перед скобкой меняет все знаки внутри. Переносим x в одну сторону, числа в другую. При переносе знак меняется.",
          "en": "Equation:\n```\n30 − 5(2 − 4x) = 0\n30 − 10 + 20x = 0\n20 + 20x = 0\n20x = −20\nx = −1\n```\nOpen the brackets: multiply the number in front by every term inside. A minus in front of brackets flips every sign inside. Move x to one side and the numbers to the other. Moving a term flips its sign."
        },
        "answer": {
          "value": "-2"
        },
        "hints": [
          {
            "he": "מינוס לפני הסוגריים הופך את הסימנים בפנים.",
            "ru": "Минус перед скобкой меняет знаки внутри.",
            "en": "A minus before the bracket flips the signs inside."
          }
        ],
        "solution": [
          "70 − 28 + 21x = 0",
          "42 + 21x = 0",
          "21x = −42",
          "x = −2",
          {
            "he": "תשובה `x = −2`",
            "ru": "Ответ `x = −2`",
            "en": "Answer `x = −2`"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "bk12",
        "group": "book",
        "label": "6א",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה\n`5(x − 2) + 3(2x + 1) = 26`",
          "ru": "Реши уравнение\n`5(x − 2) + 3(2x + 1) = 26`",
          "en": "Solve the equation\n`5(x − 2) + 3(2x + 1) = 26`"
        },
        "example": {
          "he": "המשוואה:\n```\n2(x − 1) + 4(x + 2) = 18\n2x − 2 + 4x + 8 = 18\n6x + 6 = 18\n6x = 12\nx = 2\n```\nפותחים סוגריים: את המספר שלפני הסוגריים כופלים בכל איבר בפנים. מינוס לפני סוגריים הופך את כל הסימנים בפנים. מעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך.",
          "ru": "Уравнение:\n```\n2(x − 1) + 4(x + 2) = 18\n2x − 2 + 4x + 8 = 18\n6x + 6 = 18\n6x = 12\nx = 2\n```\nРаскрываем скобки: число перед скобкой умножаем на каждое слагаемое внутри. Минус перед скобкой меняет все знаки внутри. Переносим x в одну сторону, числа в другую. При переносе знак меняется.",
          "en": "Equation:\n```\n2(x − 1) + 4(x + 2) = 18\n2x − 2 + 4x + 8 = 18\n6x + 6 = 18\n6x = 12\nx = 2\n```\nOpen the brackets: multiply the number in front by every term inside. A minus in front of brackets flips every sign inside. Move x to one side and the numbers to the other. Moving a term flips its sign."
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "קודם פותחים סוגריים.",
            "ru": "Сначала раскрываем скобки.",
            "en": "Open the brackets first."
          }
        ],
        "solution": [
          "5x − 10 + 6x + 3 = 26",
          "11x − 7 = 26",
          "11x = 33",
          "x = 3",
          {
            "he": "תשובה `x = 3`",
            "ru": "Ответ `x = 3`",
            "en": "Answer `x = 3`"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "bk13",
        "group": "book",
        "label": "6ה",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה\n`3(2x + 2) − 4(3x + 2) = 5x + 20`",
          "ru": "Реши уравнение\n`3(2x + 2) − 4(3x + 2) = 5x + 20`",
          "en": "Solve the equation\n`3(2x + 2) − 4(3x + 2) = 5x + 20`"
        },
        "example": {
          "he": "המשוואה:\n```\n2(3x + 1) − 3(x + 2) = x + 6\n6x + 2 − 3x − 6 = x + 6\n3x − 4 = x + 6\n3x − x = 6 + 4\n2x = 10\nx = 5\n```\nפותחים סוגריים: את המספר שלפני הסוגריים כופלים בכל איבר בפנים. מינוס לפני סוגריים הופך את כל הסימנים בפנים. מעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך.",
          "ru": "Уравнение:\n```\n2(3x + 1) − 3(x + 2) = x + 6\n6x + 2 − 3x − 6 = x + 6\n3x − 4 = x + 6\n3x − x = 6 + 4\n2x = 10\nx = 5\n```\nРаскрываем скобки: число перед скобкой умножаем на каждое слагаемое внутри. Минус перед скобкой меняет все знаки внутри. Переносим x в одну сторону, числа в другую. При переносе знак меняется.",
          "en": "Equation:\n```\n2(3x + 1) − 3(x + 2) = x + 6\n6x + 2 − 3x − 6 = x + 6\n3x − 4 = x + 6\n3x − x = 6 + 4\n2x = 10\nx = 5\n```\nOpen the brackets: multiply the number in front by every term inside. A minus in front of brackets flips every sign inside. Move x to one side and the numbers to the other. Moving a term flips its sign."
        },
        "answer": {
          "value": "-2"
        },
        "hints": [
          {
            "he": "קודם פותחים סוגריים.",
            "ru": "Сначала раскрываем скобки.",
            "en": "Open the brackets first."
          }
        ],
        "solution": [
          "6x + 6 − 12x − 8 = 5x + 20",
          "−6x − 2 = 5x + 20",
          "−6x − 5x = 20 + 2",
          "−11x = 22",
          "x = −2",
          {
            "he": "תשובה `x = −2`",
            "ru": "Ответ `x = −2`",
            "en": "Answer `x = −2`"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "bk14",
        "group": "book",
        "label": "7א",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה\n`x(x + 5) = x² + 40`",
          "ru": "Реши уравнение\n`x(x + 5) = x² + 40`",
          "en": "Solve the equation\n`x(x + 5) = x² + 40`"
        },
        "example": {
          "he": "המשוואה:\n```\nx(x + 3) = x² + 21\nx² + 3x = x² + 21\n3x = 21\nx = 7\n```\nפותחים סוגריים \"כל אחד בכל אחד\". x² מופיע בשני הצדדים ומצטמצם.",
          "ru": "Уравнение:\n```\nx(x + 3) = x² + 21\nx² + 3x = x² + 21\n3x = 21\nx = 7\n```\nРаскрываем скобки «каждое на каждое». x² есть с обеих сторон и сокращается.",
          "en": "Equation:\n```\nx(x + 3) = x² + 21\nx² + 3x = x² + 21\n3x = 21\nx = 7\n```\nOpen the brackets \"each by each\". x² is on both sides and cancels."
        },
        "answer": {
          "value": "8"
        },
        "hints": [
          {
            "he": "פותחים סוגריים, ו-x² מצטמצם משני הצדדים.",
            "ru": "Раскрываем скобки, и x² сокращается с обеих сторон.",
            "en": "Open the brackets, and x² cancels on both sides."
          }
        ],
        "solution": [
          "x² + 5x = x² + 40",
          "5x = 40",
          "x = 8",
          {
            "he": "תשובה `x = 8`",
            "ru": "Ответ `x = 8`",
            "en": "Answer `x = 8`"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "bk15",
        "group": "book",
        "label": "7ז",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה\n`(3 − x)(x + 2) = (x + 4)(1 − x) + 18`",
          "ru": "Реши уравнение\n`(3 − x)(x + 2) = (x + 4)(1 − x) + 18`",
          "en": "Solve the equation\n`(3 − x)(x + 2) = (x + 4)(1 − x) + 18`"
        },
        "example": {
          "he": "המשוואה:\n```\n(2 − x)(x + 1) = (x + 3)(1 − x) + 5\n2x + 2 − x² − x = x − x² + 3 − 3x + 5\nx + 2 = −2x + 8\nx + 2x = 8 − 2\n3x = 6\nx = 2\n```\nפותחים סוגריים \"כל אחד בכל אחד\". x² מופיע בשני הצדדים ומצטמצם. מעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך.",
          "ru": "Уравнение:\n```\n(2 − x)(x + 1) = (x + 3)(1 − x) + 5\n2x + 2 − x² − x = x − x² + 3 − 3x + 5\nx + 2 = −2x + 8\nx + 2x = 8 − 2\n3x = 6\nx = 2\n```\nРаскрываем скобки «каждое на каждое». x² есть с обеих сторон и сокращается. Переносим x в одну сторону, числа в другую. При переносе знак меняется.",
          "en": "Equation:\n```\n(2 − x)(x + 1) = (x + 3)(1 − x) + 5\n2x + 2 − x² − x = x − x² + 3 − 3x + 5\nx + 2 = −2x + 8\nx + 2x = 8 − 2\n3x = 6\nx = 2\n```\nOpen the brackets \"each by each\". x² is on both sides and cancels. Move x to one side and the numbers to the other. Moving a term flips its sign."
        },
        "answer": {
          "value": "4"
        },
        "hints": [
          {
            "he": "פותחים סוגריים, ו-x² מצטמצם משני הצדדים.",
            "ru": "Раскрываем скобки, и x² сокращается с обеих сторон.",
            "en": "Open the brackets, and x² cancels on both sides."
          }
        ],
        "solution": [
          "3x + 6 − x² − 2x = x − x² + 4 − 4x + 18",
          "x + 6 − x² = −3x + 22 − x²",
          "x + 3x = 22 − 6",
          "4x = 16",
          "x = 4",
          {
            "he": "תשובה `x = 4`",
            "ru": "Ответ `x = 4`",
            "en": "Answer `x = 4`"
          }
        ],
        "_src": "pass-0311"
      }
    ],
    "ai": [
      {
        "id": "ai1-1",
        "level": 1,
        "label": "1.1",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה `7x − 5 = 2x + 20`",
          "ru": "Реши уравнение `7x − 5 = 2x + 20`",
          "en": "Solve the equation `7x − 5 = 2x + 20`"
        },
        "example": {
          "he": "המשוואה:\n```\n6x − 4 = 2x + 12\n6x − 2x = 12 + 4\n4x = 16\nx = 4\n```\nמעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך. מחלקים את שני הצדדים במספר שלפני x.",
          "ru": "Уравнение:\n```\n6x − 4 = 2x + 12\n6x − 2x = 12 + 4\n4x = 16\nx = 4\n```\nПереносим x в одну сторону, числа в другую. При переносе знак меняется. Делим обе части на число перед x.",
          "en": "Equation:\n```\n6x − 4 = 2x + 12\n6x − 2x = 12 + 4\n4x = 16\nx = 4\n```\nMove x to one side and the numbers to the other. Moving a term flips its sign. Divide both sides by the number in front of x."
        },
        "answer": {
          "value": "5"
        },
        "hints": [
          {
            "he": "אוספים את כל ה־x באגף אחד ואת כל המספרים באגף השני. במעבר אגף הסימן מתחלף.",
            "ru": "Собираем все x в одной части, все числа — в другой. При переносе знак меняется.",
            "en": "Gather all x terms on one side and all numbers on the other. Moving a term across \"=\" flips its sign."
          },
          {
            "he": "צעד ראשון `7x − 2x = 20 + 5`",
            "ru": "Первый шаг `7x − 2x = 20 + 5`",
            "en": "First step `7x − 2x = 20 + 5`"
          },
          {
            "he": "בהמשך מקבלים `5x = 25`",
            "ru": "Дальше получится `5x = 25`",
            "en": "Next you get `5x = 25`"
          }
        ],
        "solution": [
          {
            "he": "מעבירים אגפים: x שמאלה, מספרים ימינה (הסימן מתחלף)",
            "ru": "Переносим: x влево, числа вправо (знак меняется)",
            "en": "Move terms: x to the left, numbers to the right (the sign flips)"
          },
          "7x − 2x = 20 + 5",
          "5x = 25",
          {
            "he": "מחלקים את שני האגפים ב־`5`",
            "ru": "Делим обе части на `5`",
            "en": "Divide both sides by `5`"
          },
          "x = 5",
          {
            "he": "תשובה `x = 5`",
            "ru": "Ответ `x = 5`",
            "en": "Answer `x = 5`"
          },
          {
            "he": "בדיקה `35 − 5 = 30 = 10 + 20` ✓",
            "ru": "Проверка `35 − 5 = 30 = 10 + 20` ✓",
            "en": "Check `35 − 5 = 30 = 10 + 20` ✓"
          }
        ]
      },
      {
        "id": "ai1-2",
        "level": 1,
        "label": "1.2",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה `4(x − 2) = 2x + 6`",
          "ru": "Реши уравнение `4(x − 2) = 2x + 6`",
          "en": "Solve the equation `4(x − 2) = 2x + 6`"
        },
        "example": {
          "he": "המשוואה:\n```\n3(x − 1) = x + 9\n3x − 3 = x + 9\n3x − x = 9 + 3\n2x = 12\nx = 6\n```\nפותחים סוגריים: את המספר שלפני הסוגריים כופלים בכל איבר בפנים. מינוס לפני סוגריים הופך את כל הסימנים בפנים. מעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך.",
          "ru": "Уравнение:\n```\n3(x − 1) = x + 9\n3x − 3 = x + 9\n3x − x = 9 + 3\n2x = 12\nx = 6\n```\nРаскрываем скобки: число перед скобкой умножаем на каждое слагаемое внутри. Минус перед скобкой меняет все знаки внутри. Переносим x в одну сторону, числа в другую. При переносе знак меняется.",
          "en": "Equation:\n```\n3(x − 1) = x + 9\n3x − 3 = x + 9\n3x − x = 9 + 3\n2x = 12\nx = 6\n```\nOpen the brackets: multiply the number in front by every term inside. A minus in front of brackets flips every sign inside. Move x to one side and the numbers to the other. Moving a term flips its sign."
        },
        "answer": {
          "value": "7"
        },
        "hints": [
          {
            "he": "קודם פותחים סוגריים: המספר שלפני הסוגריים כופל כל איבר בפנים, יחד עם הסימן שלו.",
            "ru": "Сначала раскрываем скобки: число перед скобкой умножаем на каждый член внутри, вместе с его знаком.",
            "en": "First expand the brackets: the number in front multiplies every term inside, together with its sign."
          },
          {
            "he": "צעד ראשון `4x − 8 = 2x + 6`",
            "ru": "Первый шаг `4x − 8 = 2x + 6`",
            "en": "First step `4x − 8 = 2x + 6`"
          },
          {
            "he": "בהמשך מקבלים `2x = 14`",
            "ru": "Дальше получится `2x = 14`",
            "en": "Next you get `2x = 14`"
          }
        ],
        "solution": [
          {
            "he": "פותחים סוגריים",
            "ru": "Раскрываем скобки",
            "en": "Expand the brackets"
          },
          "4x − 8 = 2x + 6",
          {
            "he": "מעבירים אגפים: x שמאלה, מספרים ימינה (הסימן מתחלף)",
            "ru": "Переносим: x влево, числа вправо (знак меняется)",
            "en": "Move terms: x to the left, numbers to the right (the sign flips)"
          },
          "4x − 2x = 6 + 8",
          "2x = 14",
          {
            "he": "מחלקים את שני האגפים ב־`2`",
            "ru": "Делим обе части на `2`",
            "en": "Divide both sides by `2`"
          },
          "x = 7",
          {
            "he": "תשובה `x = 7`",
            "ru": "Ответ `x = 7`",
            "en": "Answer `x = 7`"
          },
          {
            "he": "בדיקה `4 × 5 = 20 = 14 + 6` ✓",
            "ru": "Проверка `4 × 5 = 20 = 14 + 6` ✓",
            "en": "Check `4 × 5 = 20 = 14 + 6` ✓"
          }
        ]
      },
      {
        "id": "ai1-3",
        "level": 1,
        "label": "1.3",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`x + y = 10`\n`x − y = 4`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений\n`x + y = 10`\n`x − y = 4`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations\n`x + y = 10`\n`x − y = 4`\nWrite the answer like this: x = …, y = …"
        },
        "example": {
          "he": "```\nx + y = 11\nx − y = 5\n```\nהמקדמים של y: `1` ו־`−1`, אין צורך לכפול.\nהסימנים של y שונים → מחברים:\n```\n2x = 16\nx = 16 / 2 = 8\n```\nמציבים את x במשוואה הראשונה:\n```\n8 + y = 11\ny = 3\n```",
          "ru": "```\nx + y = 11\nx − y = 5\n```\nКоэффициенты при y: `1` и `−1`, умножать ничего не нужно.\nЗнаки при y разные → складываем:\n```\n2x = 16\nx = 16 / 2 = 8\n```\nПодставляем x в первое уравнение:\n```\n8 + y = 11\ny = 3\n```",
          "en": "```\nx + y = 11\nx − y = 5\n```\nThe y coefficients: `1` and `−1`, no need to multiply.\nThe y signs are different → we add:\n```\n2x = 16\nx = 16 / 2 = 8\n```\nPut x into the first equation:\n```\n8 + y = 11\ny = 3\n```"
        },
        "answer": {
          "accept": [
            "x = 7, y = 3",
            "x=7, y=3",
            "x = 7; y = 3",
            "x=7,y=3",
            "x = 7, у = 3",
            "x=7, у=3",
            "x = 7; у = 3",
            "x=7,у=3",
            "(7, 3)",
            "(7,3)",
            "7, 3",
            "7,3",
            "7; 3"
          ]
        },
        "hints": [
          {
            "he": "חפשו נעלם שהמקדמים שלו שווים או נגדיים. סימנים שונים — מחברים את המשוואות, סימנים שווים — מחסירים.",
            "ru": "Найди неизвестное с одинаковыми или противоположными коэффициентами. Знаки разные — складываем уравнения, одинаковые — вычитаем.",
            "en": "Look for an unknown whose coefficients are equal or opposite. Different signs — add the equations; same signs — subtract."
          },
          {
            "he": "צעד ראשון `(x + y) + (x − y) = 10 + 4`",
            "ru": "Первый шаг `(x + y) + (x − y) = 10 + 4`",
            "en": "First step `(x + y) + (x − y) = 10 + 4`"
          },
          {
            "he": "בהמשך מקבלים `2x = 14`",
            "ru": "Дальше получится `2x = 14`",
            "en": "Next you get `2x = 14`"
          }
        ],
        "solution": [
          {
            "he": "מחברים את המשוואות",
            "ru": "Складываем уравнения",
            "en": "Add the equations"
          },
          "(x + y) + (x − y) = 10 + 4",
          "2x = 14",
          {
            "he": "מחלקים את שני האגפים ב־`2`",
            "ru": "Делим обе части на `2`",
            "en": "Divide both sides by `2`"
          },
          "x = 7",
          {
            "he": "מציבים `x = 7` במשוואה הראשונה",
            "ru": "Подставляем `x = 7` в первое уравнение",
            "en": "Substitute `x = 7` into the first equation"
          },
          "7 + y = 10",
          "y = 3",
          {
            "he": "תשובה `x = 7,  y = 3`",
            "ru": "Ответ `x = 7,  y = 3`",
            "en": "Answer `x = 7,  y = 3`"
          }
        ]
      },
      {
        "id": "ai2-1",
        "level": 2,
        "label": "2.1",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה `20 − 3(2x − 4) = 2(x + 4)`",
          "ru": "Реши уравнение `20 − 3(2x − 4) = 2(x + 4)`",
          "en": "Solve the equation `20 − 3(2x − 4) = 2(x + 4)`"
        },
        "example": {
          "he": "המשוואה:\n```\n14 − 2(3x − 5) = 3(x + 2)\n14 − 6x + 10 = 3x + 6\n24 − 6x = 3x + 6\n−6x − 3x = 6 − 24\n−9x = −18\nx = 2\n```\nפותחים סוגריים: את המספר שלפני הסוגריים כופלים בכל איבר בפנים. מינוס לפני סוגריים הופך את כל הסימנים בפנים. מעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך.",
          "ru": "Уравнение:\n```\n14 − 2(3x − 5) = 3(x + 2)\n14 − 6x + 10 = 3x + 6\n24 − 6x = 3x + 6\n−6x − 3x = 6 − 24\n−9x = −18\nx = 2\n```\nРаскрываем скобки: число перед скобкой умножаем на каждое слагаемое внутри. Минус перед скобкой меняет все знаки внутри. Переносим x в одну сторону, числа в другую. При переносе знак меняется.",
          "en": "Equation:\n```\n14 − 2(3x − 5) = 3(x + 2)\n14 − 6x + 10 = 3x + 6\n24 − 6x = 3x + 6\n−6x − 3x = 6 − 24\n−9x = −18\nx = 2\n```\nOpen the brackets: multiply the number in front by every term inside. A minus in front of brackets flips every sign inside. Move x to one side and the numbers to the other. Moving a term flips its sign."
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "קודם פותחים סוגריים: המספר שלפני הסוגריים כופל כל איבר בפנים, יחד עם הסימן שלו.",
            "ru": "Сначала раскрываем скобки: число перед скобкой умножаем на каждый член внутри, вместе с его знаком.",
            "en": "First expand the brackets: the number in front multiplies every term inside, together with its sign."
          },
          {
            "he": "צעד ראשון `20 − 6x + 12 = 2x + 8`",
            "ru": "Первый шаг `20 − 6x + 12 = 2x + 8`",
            "en": "First step `20 − 6x + 12 = 2x + 8`"
          },
          {
            "he": "בהמשך מקבלים `32 − 6x = 2x + 8`",
            "ru": "Дальше получится `32 − 6x = 2x + 8`",
            "en": "Next you get `32 − 6x = 2x + 8`"
          }
        ],
        "solution": [
          {
            "he": "פותחים סוגריים. `−3 × (−4) = +12`",
            "ru": "Раскрываем скобки. `−3 × (−4) = +12`",
            "en": "Expand the brackets. `−3 × (−4) = +12`"
          },
          "20 − 6x + 12 = 2x + 8",
          {
            "he": "מכנסים איברים דומים",
            "ru": "Приводим подобные",
            "en": "Combine like terms"
          },
          "32 − 6x = 2x + 8",
          {
            "he": "מעבירים אגפים: x שמאלה, מספרים ימינה (הסימן מתחלף)",
            "ru": "Переносим: x влево, числа вправо (знак меняется)",
            "en": "Move terms: x to the left, numbers to the right (the sign flips)"
          },
          "−6x − 2x = 8 − 32",
          "−8x = −24",
          {
            "he": "מחלקים את שני האגפים ב־`−8`",
            "ru": "Делим обе части на `−8`",
            "en": "Divide both sides by `−8`"
          },
          "x = 3",
          {
            "he": "תשובה `x = 3`",
            "ru": "Ответ `x = 3`",
            "en": "Answer `x = 3`"
          },
          {
            "he": "בדיקה `20 − 3 × 2 = 14 = 2 × 7` ✓",
            "ru": "Проверка `20 − 3 × 2 = 14 = 2 × 7` ✓",
            "en": "Check `20 − 3 × 2 = 14 = 2 × 7` ✓"
          }
        ]
      },
      {
        "id": "ai2-2",
        "level": 2,
        "label": "2.2",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה `(x + 5)(x − 2) = x(x + 1) + 2`",
          "ru": "Реши уравнение `(x + 5)(x − 2) = x(x + 1) + 2`",
          "en": "Solve the equation `(x + 5)(x − 2) = x(x + 1) + 2`"
        },
        "example": {
          "he": "המשוואה:\n```\n(x + 4)(x − 1) = x(x + 2) + 5\nx² − x + 4x − 4 = x² + 2x + 5\n3x − 4 = 2x + 5\nx = 9\n```\nפותחים סוגריים \"כל אחד בכל אחד\". x² מופיע בשני הצדדים ומצטמצם. מעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך.",
          "ru": "Уравнение:\n```\n(x + 4)(x − 1) = x(x + 2) + 5\nx² − x + 4x − 4 = x² + 2x + 5\n3x − 4 = 2x + 5\nx = 9\n```\nРаскрываем скобки «каждое на каждое». x² есть с обеих сторон и сокращается. Переносим x в одну сторону, числа в другую. При переносе знак меняется.",
          "en": "Equation:\n```\n(x + 4)(x − 1) = x(x + 2) + 5\nx² − x + 4x − 4 = x² + 2x + 5\n3x − 4 = 2x + 5\nx = 9\n```\nOpen the brackets \"each by each\". x² is on both sides and cancels. Move x to one side and the numbers to the other. Moving a term flips its sign."
        },
        "answer": {
          "value": "6"
        },
        "hints": [
          {
            "he": "כופלים כל איבר מהסוגריים הראשונים בכל איבר מהשניים. `x²` יופיע בשני האגפים ויצטמצם.",
            "ru": "Каждый член первой скобки умножаем на каждый член второй. `x²` будет в обеих частях и сократится.",
            "en": "Multiply every term of the first bracket by every term of the second. `x²` appears on both sides and cancels."
          },
          {
            "he": "צעד ראשון `x² − 2x + 5x − 10 = x² + x + 2`",
            "ru": "Первый шаг `x² − 2x + 5x − 10 = x² + x + 2`",
            "en": "First step `x² − 2x + 5x − 10 = x² + x + 2`"
          },
          {
            "he": "בהמשך מקבלים `3x − 10 = x + 2`",
            "ru": "Дальше получится `3x − 10 = x + 2`",
            "en": "Next you get `3x − 10 = x + 2`"
          }
        ],
        "solution": [
          {
            "he": "כל איבר בכל איבר",
            "ru": "Каждый член на каждый",
            "en": "Every term times every term"
          },
          "x² − 2x + 5x − 10 = x² + x + 2",
          {
            "he": "מכנסים איברים דומים",
            "ru": "Приводим подобные",
            "en": "Combine like terms"
          },
          "x² + 3x − 10 = x² + x + 2",
          {
            "he": "`x²` נמצא בשני האגפים ומצטמצם",
            "ru": "`x²` есть в обеих частях и сокращается",
            "en": "`x²` is on both sides and cancels"
          },
          "3x − 10 = x + 2",
          {
            "he": "מעבירים אגפים: x שמאלה, מספרים ימינה (הסימן מתחלף)",
            "ru": "Переносим: x влево, числа вправо (знак меняется)",
            "en": "Move terms: x to the left, numbers to the right (the sign flips)"
          },
          "3x − x = 2 + 10",
          "2x = 12",
          {
            "he": "מחלקים את שני האגפים ב־`2`",
            "ru": "Делим обе части на `2`",
            "en": "Divide both sides by `2`"
          },
          "x = 6",
          {
            "he": "תשובה `x = 6`",
            "ru": "Ответ `x = 6`",
            "en": "Answer `x = 6`"
          },
          {
            "he": "בדיקה `11 × 4 = 44 = 6 × 7 + 2` ✓",
            "ru": "Проверка `11 × 4 = 44 = 6 × 7 + 2` ✓",
            "en": "Check `11 × 4 = 44 = 6 × 7 + 2` ✓"
          }
        ]
      },
      {
        "id": "ai2-3",
        "level": 2,
        "label": "2.3",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה `x/4 + (x − 2)/6 = 3`",
          "ru": "Реши уравнение `x/4 + (x − 2)/6 = 3`",
          "en": "Solve the equation `x/4 + (x − 2)/6 = 3`"
        },
        "example": {
          "he": "המשוואה:\n```\nx/3 + (x + 1)/2 = 8        | × 6\n2x + 3(x + 1) = 48\n2x + 3x + 3 = 48\n5x = 45\nx = 9\n```\nכופלים הכול במכנה המשותף כדי להיפטר מהשברים. מינוס לפני שבר הופך את הסימנים של כל המונה.",
          "ru": "Уравнение:\n```\nx/3 + (x + 1)/2 = 8        | × 6\n2x + 3(x + 1) = 48\n2x + 3x + 3 = 48\n5x = 45\nx = 9\n```\nУмножаем всё на общий знаменатель, чтобы убрать дроби. Минус перед дробью меняет знаки всего числителя.",
          "en": "Equation:\n```\nx/3 + (x + 1)/2 = 8        | × 6\n2x + 3(x + 1) = 48\n2x + 3x + 3 = 48\n5x = 45\nx = 9\n```\nMultiply everything by the common denominator to get rid of fractions. A minus in front of a fraction flips the signs of the whole numerator."
        },
        "answer": {
          "value": "8"
        },
        "hints": [
          {
            "he": "מוצאים מכנה משותף וכופלים בו כל איבר במשוואה — גם איבר בלי שבר.",
            "ru": "Находим общий знаменатель и умножаем на него каждый член уравнения — даже без дроби.",
            "en": "Find a common denominator and multiply every term of the equation by it — even a term without a fraction."
          },
          {
            "he": "צעד ראשון `3x + 2(x − 2) = 36`",
            "ru": "Первый шаг `3x + 2(x − 2) = 36`",
            "en": "First step `3x + 2(x − 2) = 36`"
          },
          {
            "he": "בהמשך מקבלים `5x − 4 = 36`",
            "ru": "Дальше получится `5x − 4 = 36`",
            "en": "Next you get `5x − 4 = 36`"
          }
        ],
        "solution": [
          {
            "he": "המכנה הגדול הוא 6. `6 × 2 = 12` מתחלק גם ב־4 — מכנה משותף `12`.",
            "ru": "Самый большой знаменатель 6. `6 × 2 = 12` делится и на 4 — общий знаменатель `12`.",
            "en": "The largest denominator is 6. `6 × 2 = 12` is divisible by 4 too — common denominator `12`."
          },
          {
            "he": "כופלים כל איבר במכנה המשותף `12`",
            "ru": "Умножаем каждый член на общий знаменатель `12`",
            "en": "Multiply every term by the common denominator `12`"
          },
          "3x + 2(x − 2) = 36",
          {
            "he": "פותחים סוגריים",
            "ru": "Раскрываем скобки",
            "en": "Expand the brackets"
          },
          "3x + 2x − 4 = 36",
          {
            "he": "מכנסים איברים דומים",
            "ru": "Приводим подобные",
            "en": "Combine like terms"
          },
          "5x − 4 = 36",
          "5x = 40",
          {
            "he": "מחלקים את שני האגפים ב־`5`",
            "ru": "Делим обе части на `5`",
            "en": "Divide both sides by `5`"
          },
          "x = 8",
          {
            "he": "תשובה `x = 8`",
            "ru": "Ответ `x = 8`",
            "en": "Answer `x = 8`"
          },
          {
            "he": "בדיקה `8/4 + 6/6 = 2 + 1 = 3` ✓",
            "ru": "Проверка `8/4 + 6/6 = 2 + 1 = 3` ✓",
            "en": "Check `8/4 + 6/6 = 2 + 1 = 3` ✓"
          }
        ]
      },
      {
        "id": "ai2-4",
        "level": 2,
        "label": "2.4",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`3x + 2y = 16`\n`5x − 2y = 0`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений\n`3x + 2y = 16`\n`5x − 2y = 0`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations\n`3x + 2y = 16`\n`5x − 2y = 0`\nWrite the answer like this: x = …, y = …"
        },
        "example": {
          "he": "```\n2x + 3y = 9\n4x − 3y = 9\n```\nהמקדמים של y: `3` ו־`−3`, אין צורך לכפול.\nהסימנים של y שונים → מחברים:\n```\n6x = 18\nx = 18 / 6 = 3\n```\nמציבים את x במשוואה הראשונה:\n```\n2 × 3 + 3y = 9\n3y = 3\ny = 1\n```",
          "ru": "```\n2x + 3y = 9\n4x − 3y = 9\n```\nКоэффициенты при y: `3` и `−3`, умножать ничего не нужно.\nЗнаки при y разные → складываем:\n```\n6x = 18\nx = 18 / 6 = 3\n```\nПодставляем x в первое уравнение:\n```\n2 × 3 + 3y = 9\n3y = 3\ny = 1\n```",
          "en": "```\n2x + 3y = 9\n4x − 3y = 9\n```\nThe y coefficients: `3` and `−3`, no need to multiply.\nThe y signs are different → we add:\n```\n6x = 18\nx = 18 / 6 = 3\n```\nPut x into the first equation:\n```\n2 × 3 + 3y = 9\n3y = 3\ny = 1\n```"
        },
        "answer": {
          "accept": [
            "x = 2, y = 5",
            "x=2, y=5",
            "x = 2; y = 5",
            "x=2,y=5",
            "x = 2, у = 5",
            "x=2, у=5",
            "x = 2; у = 5",
            "x=2,у=5",
            "(2, 5)",
            "(2,5)",
            "2, 5",
            "2,5",
            "2; 5"
          ]
        },
        "hints": [
          {
            "he": "חפשו נעלם שהמקדמים שלו שווים או נגדיים. סימנים שונים — מחברים את המשוואות, סימנים שווים — מחסירים.",
            "ru": "Найди неизвестное с одинаковыми или противоположными коэффициентами. Знаки разные — складываем уравнения, одинаковые — вычитаем.",
            "en": "Look for an unknown whose coefficients are equal or opposite. Different signs — add the equations; same signs — subtract."
          },
          {
            "he": "צעד ראשון `8x = 16`",
            "ru": "Первый шаг `8x = 16`",
            "en": "First step `8x = 16`"
          },
          {
            "he": "בהמשך מקבלים `x = 2`",
            "ru": "Дальше получится `x = 2`",
            "en": "Next you get `x = 2`"
          }
        ],
        "solution": [
          {
            "he": "`+2y` ו־`−2y` — מחברים",
            "ru": "`+2y` и `−2y` — складываем",
            "en": "`+2y` and `−2y` — add"
          },
          "8x = 16",
          {
            "he": "מחלקים את שני האגפים ב־`8`",
            "ru": "Делим обе части на `8`",
            "en": "Divide both sides by `8`"
          },
          "x = 2",
          {
            "he": "מציבים `x = 2` במשוואה הראשונה",
            "ru": "Подставляем `x = 2` в первое уравнение",
            "en": "Substitute `x = 2` into the first equation"
          },
          "3 × 2 + 2y = 16",
          "6 + 2y = 16",
          "2y = 10",
          "y = 5",
          {
            "he": "תשובה `x = 2,  y = 5`",
            "ru": "Ответ `x = 2,  y = 5`",
            "en": "Answer `x = 2,  y = 5`"
          }
        ]
      },
      {
        "id": "ai3-1",
        "level": 3,
        "label": "3.1",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה `(3x − 4)/6 − (x + 2)/4 = (x − 5)/3`",
          "ru": "Реши уравнение `(3x − 4)/6 − (x + 2)/4 = (x − 5)/3`",
          "en": "Solve the equation `(3x − 4)/6 − (x + 2)/4 = (x − 5)/3`"
        },
        "example": {
          "he": "המשוואה:\n```\n(x + 3)/4 − (x − 1)/6 = (x − 1)/3        | × 12\n3(x + 3) − 2(x − 1) = 4(x − 1)\n3x + 9 − 2x + 2 = 4x − 4\nx + 11 = 4x − 4\n−3x = −15\nx = 5\n```\nכופלים הכול במכנה המשותף כדי להיפטר מהשברים. מינוס לפני שבר הופך את הסימנים של כל המונה.",
          "ru": "Уравнение:\n```\n(x + 3)/4 − (x − 1)/6 = (x − 1)/3        | × 12\n3(x + 3) − 2(x − 1) = 4(x − 1)\n3x + 9 − 2x + 2 = 4x − 4\nx + 11 = 4x − 4\n−3x = −15\nx = 5\n```\nУмножаем всё на общий знаменатель, чтобы убрать дроби. Минус перед дробью меняет знаки всего числителя.",
          "en": "Equation:\n```\n(x + 3)/4 − (x − 1)/6 = (x − 1)/3        | × 12\n3(x + 3) − 2(x − 1) = 4(x − 1)\n3x + 9 − 2x + 2 = 4x − 4\nx + 11 = 4x − 4\n−3x = −15\nx = 5\n```\nMultiply everything by the common denominator to get rid of fractions. A minus in front of a fraction flips the signs of the whole numerator."
        },
        "answer": {
          "value": "6"
        },
        "hints": [
          {
            "he": "מוצאים מכנה משותף וכופלים בו כל איבר במשוואה — גם איבר בלי שבר.",
            "ru": "Находим общий знаменатель и умножаем на него каждый член уравнения — даже без дроби.",
            "en": "Find a common denominator and multiply every term of the equation by it — even a term without a fraction."
          },
          {
            "he": "צעד ראשון `2(3x − 4) − 3(x + 2) = 4(x − 5)`",
            "ru": "Первый шаг `2(3x − 4) − 3(x + 2) = 4(x − 5)`",
            "en": "First step `2(3x − 4) − 3(x + 2) = 4(x − 5)`"
          },
          {
            "he": "בהמשך מקבלים `3x − 14 = 4x − 20`",
            "ru": "Дальше получится `3x − 14 = 4x − 20`",
            "en": "Next you get `3x − 14 = 4x − 20`"
          }
        ],
        "solution": [
          {
            "he": "מכנה משותף של 6, 4, 3 `12`.",
            "ru": "Общий знаменатель 6, 4, 3 `12`.",
            "en": "Common denominator of 6, 4, 3 `12`."
          },
          {
            "he": "כופלים כל איבר במכנה המשותף `12`",
            "ru": "Умножаем каждый член на общий знаменатель `12`",
            "en": "Multiply every term by the common denominator `12`"
          },
          "2(3x − 4) − 3(x + 2) = 4(x − 5)",
          {
            "he": "פותחים סוגריים. המינוס לפני השבר השני חל על כל המונה",
            "ru": "Раскрываем скобки. Минус перед второй дробью действует на весь числитель",
            "en": "Expand. The minus before the second fraction applies to the whole numerator"
          },
          "6x − 8 − 3x − 6 = 4x − 20",
          {
            "he": "מכנסים איברים דומים",
            "ru": "Приводим подобные",
            "en": "Combine like terms"
          },
          "3x − 14 = 4x − 20",
          {
            "he": "מעבירים אגפים: x שמאלה, מספרים ימינה (הסימן מתחלף)",
            "ru": "Переносим: x влево, числа вправо (знак меняется)",
            "en": "Move terms: x to the left, numbers to the right (the sign flips)"
          },
          "3x − 4x = −20 + 14",
          "−x = −6",
          "x = 6",
          {
            "he": "תשובה `x = 6`",
            "ru": "Ответ `x = 6`",
            "en": "Answer `x = 6`"
          },
          {
            "he": "בדיקה `14/6 − 8/4 = 1/3 = 1/3` ✓",
            "ru": "Проверка `14/6 − 8/4 = 1/3 = 1/3` ✓",
            "en": "Check `14/6 − 8/4 = 1/3 = 1/3` ✓"
          }
        ]
      },
      {
        "id": "ai3-2",
        "level": 3,
        "label": "3.2",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה `(2x − 1)(x + 3) − 2x(x − 4) = 36`",
          "ru": "Реши уравнение `(2x − 1)(x + 3) − 2x(x − 4) = 36`",
          "en": "Solve the equation `(2x − 1)(x + 3) − 2x(x − 4) = 36`"
        },
        "example": {
          "he": "המשוואה:\n```\n(2x + 1)(x − 2) − 2x(x + 1) = −12\n2x² − 4x + x − 2 − 2x² − 2x = −12\n−5x − 2 = −12\n−5x = −10\nx = 2\n```\nפותחים סוגריים \"כל אחד בכל אחד\". x² מופיע בשני הצדדים ומצטמצם. מעבירים את x לצד אחד ואת המספרים לצד השני. במעבר הסימן מתהפך.",
          "ru": "Уравнение:\n```\n(2x + 1)(x − 2) − 2x(x + 1) = −12\n2x² − 4x + x − 2 − 2x² − 2x = −12\n−5x − 2 = −12\n−5x = −10\nx = 2\n```\nРаскрываем скобки «каждое на каждое». x² есть с обеих сторон и сокращается. Переносим x в одну сторону, числа в другую. При переносе знак меняется.",
          "en": "Equation:\n```\n(2x + 1)(x − 2) − 2x(x + 1) = −12\n2x² − 4x + x − 2 − 2x² − 2x = −12\n−5x − 2 = −12\n−5x = −10\nx = 2\n```\nOpen the brackets \"each by each\". x² is on both sides and cancels. Move x to one side and the numbers to the other. Moving a term flips its sign."
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "כופלים כל איבר מהסוגריים הראשונים בכל איבר מהשניים. `x²` יופיע בשני האגפים ויצטמצם.",
            "ru": "Каждый член первой скобки умножаем на каждый член второй. `x²` будет в обеих частях и сократится.",
            "en": "Multiply every term of the first bracket by every term of the second. `x²` appears on both sides and cancels."
          },
          {
            "he": "צעד ראשון `2x² + 6x − x − 3 − 2x² + 8x = 36`",
            "ru": "Первый шаг `2x² + 6x − x − 3 − 2x² + 8x = 36`",
            "en": "First step `2x² + 6x − x − 3 − 2x² + 8x = 36`"
          },
          {
            "he": "בהמשך מקבלים `13x − 3 = 36`",
            "ru": "Дальше получится `13x − 3 = 36`",
            "en": "Next you get `13x − 3 = 36`"
          }
        ],
        "solution": [
          {
            "he": "פותחים את שני הסוגריים. המינוס לפני `2x` הופך את הסימנים בסוגריים השניים",
            "ru": "Раскрываем обе скобки. Минус перед `2x` меняет знаки во второй скобке",
            "en": "Expand both brackets. The minus before `2x` flips the signs in the second bracket"
          },
          "2x² + 6x − x − 3 − 2x² + 8x = 36",
          {
            "he": "`2x² − 2x² = 0`. מכנסים",
            "ru": "`2x² − 2x² = 0`. Приводим подобные",
            "en": "`2x² − 2x² = 0`. Combine"
          },
          "13x − 3 = 36",
          "13x = 39",
          {
            "he": "מחלקים את שני האגפים ב־`13`",
            "ru": "Делим обе части на `13`",
            "en": "Divide both sides by `13`"
          },
          "x = 3",
          {
            "he": "תשובה `x = 3`",
            "ru": "Ответ `x = 3`",
            "en": "Answer `x = 3`"
          },
          {
            "he": "בדיקה `5 × 6 − 6 × (−1) = 30 + 6 = 36` ✓",
            "ru": "Проверка `5 × 6 − 6 × (−1) = 30 + 6 = 36` ✓",
            "en": "Check `5 × 6 − 6 × (−1) = 30 + 6 = 36` ✓"
          }
        ]
      },
      {
        "id": "ai3-3",
        "level": 3,
        "label": "3.3",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`3x + 4y = 10`\n`5x − 3y = 7`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений\n`3x + 4y = 10`\n`5x − 3y = 7`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations\n`3x + 4y = 10`\n`5x − 3y = 7`\nWrite the answer like this: x = …, y = …"
        },
        "example": {
          "he": "```\n2x + 5y = 12\n3x − 2y = −1\n```\nרוצים להיפטר מ־y. המקדמים של y: `5` ו־`−2`. את הראשונה כופלים ב־2, את השנייה ב־5:\n```\n4x + 10y = 24\n15x − 10y = −5\n```\nהסימנים של y שונים → מחברים:\n```\n19x = 19\nx = 19 / 19 = 1\n```\nמציבים את x במשוואה הראשונה:\n```\n2 × 1 + 5y = 12\n5y = 10\ny = 2\n```",
          "ru": "```\n2x + 5y = 12\n3x − 2y = −1\n```\nХотим убрать y. Коэффициенты при y: `5` и `−2`. Первое умножаем на 2, второе на 5:\n```\n4x + 10y = 24\n15x − 10y = −5\n```\nЗнаки при y разные → складываем:\n```\n19x = 19\nx = 19 / 19 = 1\n```\nПодставляем x в первое уравнение:\n```\n2 × 1 + 5y = 12\n5y = 10\ny = 2\n```",
          "en": "```\n2x + 5y = 12\n3x − 2y = −1\n```\nWe want to remove y. The y coefficients: `5` and `−2`. Multiply the first by 2, the second by 5:\n```\n4x + 10y = 24\n15x − 10y = −5\n```\nThe y signs are different → we add:\n```\n19x = 19\nx = 19 / 19 = 1\n```\nPut x into the first equation:\n```\n2 × 1 + 5y = 12\n5y = 10\ny = 2\n```"
        },
        "answer": {
          "accept": [
            "x = 2, y = 1",
            "x=2, y=1",
            "x = 2; y = 1",
            "x=2,y=1",
            "x = 2, у = 1",
            "x=2, у=1",
            "x = 2; у = 1",
            "x=2,у=1",
            "(2, 1)",
            "(2,1)",
            "2, 1",
            "2,1",
            "2; 1"
          ]
        },
        "hints": [
          {
            "he": "כאן צריך לכפול את שתי המשוואות: מחפשים מספר שמתחלק בשני המקדמים של y.",
            "ru": "Здесь нужно умножить оба уравнения: ищем число, которое делится на оба коэффициента при y.",
            "en": "Here both equations need multiplying: look for a number divisible by both y coefficients."
          },
          {
            "he": "צעד ראשון `9x + 12y = 30`",
            "ru": "Первый шаг `9x + 12y = 30`",
            "en": "First step `9x + 12y = 30`"
          },
          {
            "he": "בהמשך מקבלים `20x − 12y = 28`",
            "ru": "Дальше получится `20x − 12y = 28`",
            "en": "Next you get `20x − 12y = 28`"
          }
        ],
        "solution": [
          {
            "he": "המקדמים של y הם 4 ו־3. `12` מתחלק בשניהם.",
            "ru": "Коэффициенты при y — 4 и 3. `12` делится на оба.",
            "en": "The y coefficients are 4 and 3. `12` is divisible by both."
          },
          {
            "he": "כופלים את הראשונה ב־`3`",
            "ru": "Умножаем первое на `3`",
            "en": "Multiply the first by `3`"
          },
          "9x + 12y = 30",
          {
            "he": "כופלים את השנייה ב־`4`",
            "ru": "Умножаем второе на `4`",
            "en": "Multiply the second by `4`"
          },
          "20x − 12y = 28",
          {
            "he": "מחברים את המשוואות",
            "ru": "Складываем уравнения",
            "en": "Add the equations"
          },
          "29x = 58",
          {
            "he": "מחלקים את שני האגפים ב־`29`",
            "ru": "Делим обе части на `29`",
            "en": "Divide both sides by `29`"
          },
          "x = 2",
          {
            "he": "מציבים `x = 2` במשוואה הראשונה",
            "ru": "Подставляем `x = 2` в первое уравнение",
            "en": "Substitute `x = 2` into the first equation"
          },
          "3 × 2 + 4y = 10",
          "4y = 4",
          "y = 1",
          {
            "he": "תשובה `x = 2,  y = 1`",
            "ru": "Ответ `x = 2,  y = 1`",
            "en": "Answer `x = 2,  y = 1`"
          }
        ]
      },
      {
        "id": "ai3-4",
        "level": 3,
        "label": "3.4",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`2x − 5y = −16`\n`−3x + 4y = 17`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений\n`2x − 5y = −16`\n`−3x + 4y = 17`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations\n`2x − 5y = −16`\n`−3x + 4y = 17`\nWrite the answer like this: x = …, y = …"
        },
        "example": {
          "he": "```\n3x − 2y = −8\n−2x + 5y = 9\n```\nרוצים להיפטר מ־y. המקדמים של y: `−2` ו־`5`. את הראשונה כופלים ב־5, את השנייה ב־2:\n```\n15x − 10y = −40\n−4x + 10y = 18\n```\nהסימנים של y שונים → מחברים:\n```\n11x = −22\nx = −22 / 11 = −2\n```\nמציבים את x במשוואה הראשונה:\n```\n3 × (−2) − 2y = −8\n−2y = −2\ny = 1\n```",
          "ru": "```\n3x − 2y = −8\n−2x + 5y = 9\n```\nХотим убрать y. Коэффициенты при y: `−2` и `5`. Первое умножаем на 5, второе на 2:\n```\n15x − 10y = −40\n−4x + 10y = 18\n```\nЗнаки при y разные → складываем:\n```\n11x = −22\nx = −22 / 11 = −2\n```\nПодставляем x в первое уравнение:\n```\n3 × (−2) − 2y = −8\n−2y = −2\ny = 1\n```",
          "en": "```\n3x − 2y = −8\n−2x + 5y = 9\n```\nWe want to remove y. The y coefficients: `−2` and `5`. Multiply the first by 5, the second by 2:\n```\n15x − 10y = −40\n−4x + 10y = 18\n```\nThe y signs are different → we add:\n```\n11x = −22\nx = −22 / 11 = −2\n```\nPut x into the first equation:\n```\n3 × (−2) − 2y = −8\n−2y = −2\ny = 1\n```"
        },
        "answer": {
          "accept": [
            "x = −3, y = 2",
            "x=−3, y=2",
            "x = −3; y = 2",
            "x=−3,y=2",
            "x = −3, у = 2",
            "x=−3, у=2",
            "x = −3; у = 2",
            "x=−3,у=2",
            "(−3, 2)",
            "(−3,2)",
            "−3, 2",
            "−3,2",
            "−3; 2"
          ]
        },
        "hints": [
          {
            "he": "כאן צריך לכפול את שתי המשוואות: מחפשים מספר שמתחלק בשני המקדמים של y.",
            "ru": "Здесь нужно умножить оба уравнения: ищем число, которое делится на оба коэффициента при y.",
            "en": "Here both equations need multiplying: look for a number divisible by both y coefficients."
          },
          {
            "he": "צעד ראשון `6x − 15y = −48`",
            "ru": "Первый шаг `6x − 15y = −48`",
            "en": "First step `6x − 15y = −48`"
          },
          {
            "he": "בהמשך מקבלים `−6x + 8y = 34`",
            "ru": "Дальше получится `−6x + 8y = 34`",
            "en": "Next you get `−6x + 8y = 34`"
          }
        ],
        "solution": [
          {
            "he": "נעלים את x: המקדמים 2 ו־−3, כופלים ב־3 ו־2",
            "ru": "Убираем x: коэффициенты 2 и −3, умножаем на 3 и на 2",
            "en": "Eliminate x: the coefficients are 2 and −3, multiply by 3 and by 2"
          },
          "6x − 15y = −48",
          "−6x + 8y = 34",
          {
            "he": "`6x` ו־`−6x` — מחברים",
            "ru": "`6x` и `−6x` — складываем",
            "en": "`6x` and `−6x` — add"
          },
          "−7y = −14",
          {
            "he": "מחלקים את שני האגפים ב־`−7`",
            "ru": "Делим обе части на `−7`",
            "en": "Divide both sides by `−7`"
          },
          "y = 2",
          {
            "he": "מציבים `y = 2` במשוואה הראשונה",
            "ru": "Подставляем `y = 2` в первое уравнение",
            "en": "Substitute `y = 2` into the first equation"
          },
          "2x − 10 = −16",
          "2x = −6",
          "x = −3",
          {
            "he": "תשובה `x = −3,  y = 2`",
            "ru": "Ответ `x = −3,  y = 2`",
            "en": "Answer `x = −3,  y = 2`"
          }
        ]
      }
    ]
  }
};

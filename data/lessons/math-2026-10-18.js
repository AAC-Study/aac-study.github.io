/* Lesson data file. Format: see the comment at the top of data/lessons/math-2026-11-01.js.
   Every answer and every equation line in the solutions, hints and board examples was checked
   with exact fraction arithmetic (the solution substituted back into each line) — 429 lines.
   Multiplication sign is "×". */
window.LESSONS = window.LESSONS || {};
window.LESSONS['math-2026-10-18'] = {
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
      "kind": "talk",
      "title": {
        "he": "משוואה היא מאזניים",
        "ru": "Уравнение — это весы",
        "en": "An equation is a balance"
      },
      "text": {
        "he": "מה שעושים לאגף אחד — עושים גם לאגף השני. מעבר אגף מחליף פעולה: `+` הופך ל־`−`, כפל הופך לחילוק.",
        "ru": "Что делаем с одной частью (אגף) — делаем и с другой. Перенос через «=» меняет действие: `+` становится `−`, умножение — делением.",
        "en": "Whatever you do to one side (אגף), do to the other. Moving across \"=\" swaps the operation: `+` becomes `−`, multiplication becomes division."
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
      "kind": "tip",
      "title": {
        "he": "מותר להשתמש במחשבון",
        "ru": "Калькулятор можно",
        "en": "A calculator is allowed"
      },
      "text": {
        "he": "אין חובה לחשב ביד — מותר לפתור עם מחשבון. מחלקים במספר שלפני x יחד עם הסימן שלו:",
        "ru": "Не обязательно считать вручную — можно решать на калькуляторе. Делим на число перед x вместе с его знаком:",
        "en": "You don't have to compute by hand — a calculator is allowed. Divide by the number in front of x together with its sign:"
      },
      "math": [
        "−3.5x = 31.5",
        "x = 31.5 / (−3.5)",
        "x = −9"
      ]
    },
    {
      "kind": "board",
      "title": {
        "he": "דוגמה מהלוח: `−12.3 − 1.6x = −8.3`",
        "ru": "Пример с доски: `−12.3 − 1.6x = −8.3`",
        "en": "Board example: `−12.3 − 1.6x = −8.3`"
      },
      "text": {
        "he": "מעבירים את המספר לאגף ימין ומחלקים ב־`−1.6`:",
        "ru": "Переносим число вправо и делим на `−1.6`:",
        "en": "Move the number to the right and divide by `−1.6`:"
      },
      "math": [
        "−1.6x = −8.3 + 12.3",
        "−1.6x = 4",
        "x = −2.5"
      ]
    },
    {
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
      "kind": "tip",
      "title": {
        "he": "מינוס לפני סוגריים",
        "ru": "Минус перед скобкой",
        "en": "A minus in front of brackets"
      },
      "text": {
        "he": "כאן הרבה טועים. המספר שלפני הסוגריים — יחד עם המינוס — כופל כל איבר בפנים:",
        "ru": "Здесь многие ошибаются. Число перед скобкой — вместе с минусом — умножает каждый член внутри:",
        "en": "Many people make mistakes here. The number in front of the brackets — together with its minus — multiplies every term inside:"
      },
      "math": [
        "−3(5 + x) = −15 − 3x"
      ]
    },
    {
      "kind": "board",
      "title": {
        "he": "סוגריים במשוואה: `15 − 4(2x − 3) = 43`",
        "ru": "Скобки в уравнении: `15 − 4(2x − 3) = 43`",
        "en": "Brackets in an equation: `15 − 4(2x − 3) = 43`"
      },
      "text": {
        "he": "לא מחשבים קודם `15 − 4`: הכפל קודם, לכן קודם פותחים סוגריים.",
        "ru": "Нельзя сначала считать `15 − 4`: умножение раньше, поэтому сначала раскрываем скобку.",
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
      "kind": "board",
      "title": {
        "he": "דוגמה מהלוח: מכנה משותף 80",
        "ru": "Пример с доски: общий знаменатель 80",
        "en": "Board example: common denominator 80"
      },
      "text": {
        "he": "`(2x − 3)/5 + (5x + 12)/16 − (32 − 3x)/20 = (5x − 12)/4`\nמעל כל שבר כותבים בכמה כופלים: `80 / 5 = 16`, `80 / 16 = 5`, `80 / 20 = 4`, `80 / 4 = 20`.",
        "ru": "`(2x − 3)/5 + (5x + 12)/16 − (32 − 3x)/20 = (5x − 12)/4`\nНад каждой дробью пишем, на сколько умножаем: `80 / 5 = 16`, `80 / 16 = 5`, `80 / 20 = 4`, `80 / 4 = 20`.",
        "en": "`(2x − 3)/5 + (5x + 12)/16 − (32 − 3x)/20 = (5x − 12)/4`\nAbove each fraction write what it is multiplied by: `80 / 5 = 16`, `80 / 16 = 5`, `80 / 20 = 4`, `80 / 4 = 20`."
      },
      "math": [
        "16(2x − 3) + 5(5x + 12) − 4(32 − 3x) = 20(5x − 12)",
        "32x − 48 + 25x + 60 − 128 + 12x = 100x − 240",
        "−31x = −124",
        "x = 4"
      ]
    },
    {
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
      "kind": "faq",
      "q": {
        "he": "איך בודקים שהתשובה נכונה?",
        "ru": "Как проверить ответ?",
        "en": "How do I check my answer?"
      },
      "a": {
        "he": "מציבים את התשובה במשוואה המקורית ומחשבים כל אגף לחוד. אם שני האגפים שווים — התשובה נכונה. למשל ב־`5x − 8 = 22` עם `x = 6`: `5 × 6 − 8 = 22`.",
        "ru": "Подставляем ответ в исходное уравнение и считаем каждую часть отдельно. Если части равны — ответ верный. Например, в `5x − 8 = 22` при `x = 6`: `5 × 6 − 8 = 22`.",
        "en": "Substitute the answer into the original equation and compute each side separately. If both sides are equal, the answer is right. For example, in `5x − 8 = 22` with `x = 6`: `5 × 6 − 8 = 22`."
      }
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
        "he": "קודם פותחים סוגריים. מינוס לפני הסוגריים הופך כל סימן בפנים: `−3(5 + x) = −15 − 3x`.",
        "ru": "Сначала раскрываем скобки. Минус перед скобкой меняет каждый знак внутри: `−3(5 + x) = −15 − 3x`.",
        "en": "Expand brackets first. A minus in front flips every sign inside: `−3(5 + x) = −15 − 3x`."
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
      }
    },
    "teacher": [
      {
        "id": "t1-1",
        "group": "1",
        "label": "1א",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה: `−3.5x = 31.5`",
          "ru": "Реши уравнение: `−3.5x = 31.5`",
          "en": "Solve the equation: `−3.5x = 31.5`"
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
            "he": "צעד ראשון: `x = 31.5 / (−3.5)`",
            "ru": "Первый шаг: `x = 31.5 / (−3.5)`",
            "en": "First step: `x = 31.5 / (−3.5)`"
          },
          {
            "he": "בהמשך מקבלים: `31.5 / 3.5 = 9`",
            "ru": "Дальше получится: `31.5 / 3.5 = 9`",
            "en": "Next you get: `31.5 / 3.5 = 9`"
          }
        ],
        "solution": [
          {
            "he": "מחלקים את שני האגפים ב־`−3.5`:",
            "ru": "Делим обе части на `−3.5`:",
            "en": "Divide both sides by `−3.5`:"
          },
          "x = 31.5 / (−3.5)",
          "x = −9",
          {
            "he": "פלוס חלקי מינוס נותן מינוס.",
            "ru": "Плюс делить на минус даёт минус.",
            "en": "Plus divided by minus gives minus."
          },
          {
            "he": "תשובה: `x = −9`",
            "ru": "Ответ: `x = −9`",
            "en": "Answer: `x = −9`"
          },
          {
            "he": "בדיקה: `−3.5 × (−9) = 31.5` ✓",
            "ru": "Проверка: `−3.5 × (−9) = 31.5` ✓",
            "en": "Check: `−3.5 × (−9) = 31.5` ✓"
          }
        ]
      },
      {
        "id": "t1-2",
        "group": "1",
        "label": "1ב",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה: `3x = 18`",
          "ru": "Реши уравнение: `3x = 18`",
          "en": "Solve the equation: `3x = 18`"
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
            "he": "צעד ראשון: `x = 18 / 3`",
            "ru": "Первый шаг: `x = 18 / 3`",
            "en": "First step: `x = 18 / 3`"
          },
          {
            "he": "בהמשך מקבלים: `x = 6`",
            "ru": "Дальше получится: `x = 6`",
            "en": "Next you get: `x = 6`"
          }
        ],
        "solution": [
          {
            "he": "מחלקים את שני האגפים ב־`3`:",
            "ru": "Делим обе части на `3`:",
            "en": "Divide both sides by `3`:"
          },
          "x = 18 / 3",
          "x = 6",
          {
            "he": "תשובה: `x = 6`",
            "ru": "Ответ: `x = 6`",
            "en": "Answer: `x = 6`"
          },
          {
            "he": "בדיקה: `3 × 6 = 18` ✓",
            "ru": "Проверка: `3 × 6 = 18` ✓",
            "en": "Check: `3 × 6 = 18` ✓"
          }
        ]
      },
      {
        "id": "t1-3",
        "group": "1",
        "label": "1ג",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה: `x − 8 = 6`",
          "ru": "Реши уравнение: `x − 8 = 6`",
          "en": "Solve the equation: `x − 8 = 6`"
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
            "he": "צעד ראשון: `x = 6 + 8`",
            "ru": "Первый шаг: `x = 6 + 8`",
            "en": "First step: `x = 6 + 8`"
          },
          {
            "he": "בהמשך מקבלים: `x = 14`",
            "ru": "Дальше получится: `x = 14`",
            "en": "Next you get: `x = 14`"
          }
        ],
        "solution": [
          {
            "he": "מעבירים את `−8` לאגף ימין, והוא הופך ל־`+8`:",
            "ru": "Переносим `−8` вправо, он становится `+8`:",
            "en": "Move `−8` to the right; it becomes `+8`:"
          },
          "x = 6 + 8",
          "x = 14",
          {
            "he": "תשובה: `x = 14`",
            "ru": "Ответ: `x = 14`",
            "en": "Answer: `x = 14`"
          },
          {
            "he": "בדיקה: `14 − 8 = 6` ✓",
            "ru": "Проверка: `14 − 8 = 6` ✓",
            "en": "Check: `14 − 8 = 6` ✓"
          }
        ]
      },
      {
        "id": "t1-4",
        "group": "1",
        "label": "1ד",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה: `x − 4.5 = −13`",
          "ru": "Реши уравнение: `x − 4.5 = −13`",
          "en": "Solve the equation: `x − 4.5 = −13`"
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
            "he": "צעד ראשון: `x = −13 + 4.5`",
            "ru": "Первый шаг: `x = −13 + 4.5`",
            "en": "First step: `x = −13 + 4.5`"
          },
          {
            "he": "בהמשך מקבלים: `x = −8.5`",
            "ru": "Дальше получится: `x = −8.5`",
            "en": "Next you get: `x = −8.5`"
          }
        ],
        "solution": [
          {
            "he": "מעבירים את `−4.5` לאגף ימין, והוא הופך ל־`+4.5`:",
            "ru": "Переносим `−4.5` вправо, он становится `+4.5`:",
            "en": "Move `−4.5` to the right; it becomes `+4.5`:"
          },
          "x = −13 + 4.5",
          "x = −8.5",
          {
            "he": "תשובה: `x = −8.5`",
            "ru": "Ответ: `x = −8.5`",
            "en": "Answer: `x = −8.5`"
          },
          {
            "he": "בדיקה: `−8.5 − 4.5 = −13` ✓",
            "ru": "Проверка: `−8.5 − 4.5 = −13` ✓",
            "en": "Check: `−8.5 − 4.5 = −13` ✓"
          }
        ]
      },
      {
        "id": "t2-1",
        "group": "2",
        "label": "2א",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה: `−12.3 − 1.6x = −8.3`",
          "ru": "Реши уравнение: `−12.3 − 1.6x = −8.3`",
          "en": "Solve the equation: `−12.3 − 1.6x = −8.3`"
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
            "he": "צעד ראשון: `−1.6x = −8.3 + 12.3`",
            "ru": "Первый шаг: `−1.6x = −8.3 + 12.3`",
            "en": "First step: `−1.6x = −8.3 + 12.3`"
          },
          {
            "he": "בהמשך מקבלים: `−1.6x = 4`",
            "ru": "Дальше получится: `−1.6x = 4`",
            "en": "Next you get: `−1.6x = 4`"
          }
        ],
        "solution": [
          {
            "he": "מעבירים את `−12.3` לאגף ימין:",
            "ru": "Переносим `−12.3` вправо:",
            "en": "Move `−12.3` to the right:"
          },
          "−1.6x = −8.3 + 12.3",
          "−1.6x = 4",
          {
            "he": "מחלקים את שני האגפים ב־`−1.6`:",
            "ru": "Делим обе части на `−1.6`:",
            "en": "Divide both sides by `−1.6`:"
          },
          "x = 4 / (−1.6)",
          "x = −2.5",
          {
            "he": "תשובה: `x = −2.5`",
            "ru": "Ответ: `x = −2.5`",
            "en": "Answer: `x = −2.5`"
          },
          {
            "he": "בדיקה: `−12.3 − 1.6 × (−2.5) = −12.3 + 4 = −8.3` ✓",
            "ru": "Проверка: `−12.3 − 1.6 × (−2.5) = −12.3 + 4 = −8.3` ✓",
            "en": "Check: `−12.3 − 1.6 × (−2.5) = −12.3 + 4 = −8.3` ✓"
          }
        ]
      },
      {
        "id": "t2-2",
        "group": "2",
        "label": "2ב",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה: `12 + 3x + 2x = 4x + 8 + 3x`",
          "ru": "Реши уравнение: `12 + 3x + 2x = 4x + 8 + 3x`",
          "en": "Solve the equation: `12 + 3x + 2x = 4x + 8 + 3x`"
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
            "he": "צעד ראשון: `12 + 5x = 7x + 8`",
            "ru": "Первый шаг: `12 + 5x = 7x + 8`",
            "en": "First step: `12 + 5x = 7x + 8`"
          },
          {
            "he": "בהמשך מקבלים: `5x − 7x = 8 − 12`",
            "ru": "Дальше получится: `5x − 7x = 8 − 12`",
            "en": "Next you get: `5x − 7x = 8 − 12`"
          }
        ],
        "solution": [
          {
            "he": "מכנסים איברים דומים:",
            "ru": "Приводим подобные:",
            "en": "Combine like terms:"
          },
          "12 + 5x = 7x + 8",
          {
            "he": "מעבירים אגפים: x שמאלה, מספרים ימינה (הסימן מתחלף):",
            "ru": "Переносим: x влево, числа вправо (знак меняется):",
            "en": "Move terms: x to the left, numbers to the right (the sign flips):"
          },
          "5x − 7x = 8 − 12",
          "−2x = −4",
          {
            "he": "מחלקים את שני האגפים ב־`−2`:",
            "ru": "Делим обе части на `−2`:",
            "en": "Divide both sides by `−2`:"
          },
          "x = −4 / (−2)",
          "x = 2",
          {
            "he": "תשובה: `x = 2`",
            "ru": "Ответ: `x = 2`",
            "en": "Answer: `x = 2`"
          },
          {
            "he": "בדיקה: `12 + 6 + 4 = 22 = 8 + 8 + 6` ✓",
            "ru": "Проверка: `12 + 6 + 4 = 22 = 8 + 8 + 6` ✓",
            "en": "Check: `12 + 6 + 4 = 22 = 8 + 8 + 6` ✓"
          }
        ]
      },
      {
        "id": "t3-1",
        "group": "3",
        "label": "3א",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה: `15 − 4(2x − 3) = 43`",
          "ru": "Реши уравнение: `15 − 4(2x − 3) = 43`",
          "en": "Solve the equation: `15 − 4(2x − 3) = 43`"
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
            "he": "צעד ראשון: `15 − 8x + 12 = 43`",
            "ru": "Первый шаг: `15 − 8x + 12 = 43`",
            "en": "First step: `15 − 8x + 12 = 43`"
          },
          {
            "he": "בהמשך מקבלים: `27 − 8x = 43`",
            "ru": "Дальше получится: `27 − 8x = 43`",
            "en": "Next you get: `27 − 8x = 43`"
          }
        ],
        "solution": [
          {
            "he": "לא מחשבים קודם `15 − 4`! קודם פותחים סוגריים — `−4` כופל כל איבר:",
            "ru": "Нельзя сначала считать `15 − 4`! Сначала раскрываем скобку — `−4` умножает каждый член:",
            "en": "Do not compute `15 − 4` first! Expand the bracket first — `−4` multiplies every term:"
          },
          "15 − 8x + 12 = 43",
          {
            "he": "מכנסים איברים דומים:",
            "ru": "Приводим подобные:",
            "en": "Combine like terms:"
          },
          "27 − 8x = 43",
          {
            "he": "מעבירים את `27` לאגף ימין:",
            "ru": "Переносим `27` вправо:",
            "en": "Move `27` to the right:"
          },
          "−8x = 43 − 27",
          "−8x = 16",
          {
            "he": "מחלקים את שני האגפים ב־`−8`:",
            "ru": "Делим обе части на `−8`:",
            "en": "Divide both sides by `−8`:"
          },
          "x = 16 / (−8)",
          "x = −2",
          {
            "he": "תשובה: `x = −2`",
            "ru": "Ответ: `x = −2`",
            "en": "Answer: `x = −2`"
          },
          {
            "he": "בדיקה: `15 − 4 × (−4 − 3) = 15 + 28 = 43` ✓",
            "ru": "Проверка: `15 − 4 × (−4 − 3) = 15 + 28 = 43` ✓",
            "en": "Check: `15 − 4 × (−4 − 3) = 15 + 28 = 43` ✓"
          }
        ]
      },
      {
        "id": "t3-2",
        "group": "3",
        "label": "3ב",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה: `12 − 3(−x − 4) = 3`",
          "ru": "Реши уравнение: `12 − 3(−x − 4) = 3`",
          "en": "Solve the equation: `12 − 3(−x − 4) = 3`"
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
            "he": "צעד ראשון: `12 + 3x + 12 = 3`",
            "ru": "Первый шаг: `12 + 3x + 12 = 3`",
            "en": "First step: `12 + 3x + 12 = 3`"
          },
          {
            "he": "בהמשך מקבלים: `24 + 3x = 3`",
            "ru": "Дальше получится: `24 + 3x = 3`",
            "en": "Next you get: `24 + 3x = 3`"
          }
        ],
        "solution": [
          {
            "he": "פותחים סוגריים: `−3 × (−x) = +3x`, `−3 × (−4) = +12`:",
            "ru": "Раскрываем скобку: `−3 × (−x) = +3x`, `−3 × (−4) = +12`:",
            "en": "Expand: `−3 × (−x) = +3x`, `−3 × (−4) = +12`:"
          },
          "12 + 3x + 12 = 3",
          {
            "he": "מכנסים איברים דומים:",
            "ru": "Приводим подобные:",
            "en": "Combine like terms:"
          },
          "24 + 3x = 3",
          "3x = 3 − 24",
          "3x = −21",
          {
            "he": "מחלקים את שני האגפים ב־`3`:",
            "ru": "Делим обе части на `3`:",
            "en": "Divide both sides by `3`:"
          },
          "x = −7",
          {
            "he": "תשובה: `x = −7`",
            "ru": "Ответ: `x = −7`",
            "en": "Answer: `x = −7`"
          },
          {
            "he": "בדיקה: `12 − 3 × (7 − 4) = 12 − 9 = 3` ✓",
            "ru": "Проверка: `12 − 3 × (7 − 4) = 12 − 9 = 3` ✓",
            "en": "Check: `12 − 3 × (7 − 4) = 12 − 9 = 3` ✓"
          }
        ]
      },
      {
        "id": "t3-3",
        "group": "3",
        "label": "3ג",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה: `2(x − 3) − 6(2x − 5) = 5(x + 1) + 49`",
          "ru": "Реши уравнение: `2(x − 3) − 6(2x − 5) = 5(x + 1) + 49`",
          "en": "Solve the equation: `2(x − 3) − 6(2x − 5) = 5(x + 1) + 49`"
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
            "he": "צעד ראשון: `2x − 6 − 12x + 30 = 5x + 5 + 49`",
            "ru": "Первый шаг: `2x − 6 − 12x + 30 = 5x + 5 + 49`",
            "en": "First step: `2x − 6 − 12x + 30 = 5x + 5 + 49`"
          },
          {
            "he": "בהמשך מקבלים: `−10x + 24 = 5x + 54`",
            "ru": "Дальше получится: `−10x + 24 = 5x + 54`",
            "en": "Next you get: `−10x + 24 = 5x + 54`"
          }
        ],
        "solution": [
          {
            "he": "פותחים סוגריים:",
            "ru": "Раскрываем скобки:",
            "en": "Expand the brackets:"
          },
          "2x − 6 − 12x + 30 = 5x + 5 + 49",
          {
            "he": "מכנסים איברים דומים:",
            "ru": "Приводим подобные:",
            "en": "Combine like terms:"
          },
          "−10x + 24 = 5x + 54",
          {
            "he": "מעבירים אגפים: x שמאלה, מספרים ימינה (הסימן מתחלף):",
            "ru": "Переносим: x влево, числа вправо (знак меняется):",
            "en": "Move terms: x to the left, numbers to the right (the sign flips):"
          },
          "−10x − 5x = 54 − 24",
          "−15x = 30",
          {
            "he": "מחלקים את שני האגפים ב־`−15`:",
            "ru": "Делим обе части на `−15`:",
            "en": "Divide both sides by `−15`:"
          },
          "x = −2",
          {
            "he": "תשובה: `x = −2`",
            "ru": "Ответ: `x = −2`",
            "en": "Answer: `x = −2`"
          },
          {
            "he": "בדיקה: `2 × (−5) − 6 × (−9) = −10 + 54 = 44 = 5 × (−1) + 49` ✓",
            "ru": "Проверка: `2 × (−5) − 6 × (−9) = −10 + 54 = 44 = 5 × (−1) + 49` ✓",
            "en": "Check: `2 × (−5) − 6 × (−9) = −10 + 54 = 44 = 5 × (−1) + 49` ✓"
          }
        ]
      },
      {
        "id": "t4-1",
        "group": "4",
        "label": "4א",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה: `(x + 2)(x + 1) = x(x − 3) − 10`",
          "ru": "Реши уравнение: `(x + 2)(x + 1) = x(x − 3) − 10`",
          "en": "Solve the equation: `(x + 2)(x + 1) = x(x − 3) − 10`"
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
            "he": "צעד ראשון: `x² + x + 2x + 2 = x² − 3x − 10`",
            "ru": "Первый шаг: `x² + x + 2x + 2 = x² − 3x − 10`",
            "en": "First step: `x² + x + 2x + 2 = x² − 3x − 10`"
          },
          {
            "he": "בהמשך מקבלים: `3x + 2 = −3x − 10`",
            "ru": "Дальше получится: `3x + 2 = −3x − 10`",
            "en": "Next you get: `3x + 2 = −3x − 10`"
          }
        ],
        "solution": [
          {
            "he": "כל איבר בכל איבר:",
            "ru": "Каждый член на каждый:",
            "en": "Every term times every term:"
          },
          "x² + x + 2x + 2 = x² − 3x − 10",
          {
            "he": "מכנסים איברים דומים:",
            "ru": "Приводим подобные:",
            "en": "Combine like terms:"
          },
          "x² + 3x + 2 = x² − 3x − 10",
          {
            "he": "`x²` נמצא בשני האגפים ומצטמצם:",
            "ru": "`x²` есть в обеих частях и сокращается:",
            "en": "`x²` is on both sides and cancels:"
          },
          "3x + 2 = −3x − 10",
          {
            "he": "מעבירים אגפים: x שמאלה, מספרים ימינה (הסימן מתחלף):",
            "ru": "Переносим: x влево, числа вправо (знак меняется):",
            "en": "Move terms: x to the left, numbers to the right (the sign flips):"
          },
          "3x + 3x = −10 − 2",
          "6x = −12",
          {
            "he": "מחלקים את שני האגפים ב־`6`:",
            "ru": "Делим обе части на `6`:",
            "en": "Divide both sides by `6`:"
          },
          "x = −2",
          {
            "he": "תשובה: `x = −2`",
            "ru": "Ответ: `x = −2`",
            "en": "Answer: `x = −2`"
          },
          {
            "he": "בדיקה: `0 × (−1) = 0 = −2 × (−5) − 10` ✓",
            "ru": "Проверка: `0 × (−1) = 0 = −2 × (−5) − 10` ✓",
            "en": "Check: `0 × (−1) = 0 = −2 × (−5) − 10` ✓"
          }
        ]
      },
      {
        "id": "t4-2",
        "group": "4",
        "label": "4ב",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה: `(x + 3)(x + 4) = x(x + 5) + 96`",
          "ru": "Реши уравнение: `(x + 3)(x + 4) = x(x + 5) + 96`",
          "en": "Solve the equation: `(x + 3)(x + 4) = x(x + 5) + 96`"
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
            "he": "צעד ראשון: `x² + 4x + 3x + 12 = x² + 5x + 96`",
            "ru": "Первый шаг: `x² + 4x + 3x + 12 = x² + 5x + 96`",
            "en": "First step: `x² + 4x + 3x + 12 = x² + 5x + 96`"
          },
          {
            "he": "בהמשך מקבלים: `7x + 12 = 5x + 96`",
            "ru": "Дальше получится: `7x + 12 = 5x + 96`",
            "en": "Next you get: `7x + 12 = 5x + 96`"
          }
        ],
        "solution": [
          {
            "he": "כל איבר בכל איבר:",
            "ru": "Каждый член на каждый:",
            "en": "Every term times every term:"
          },
          "x² + 4x + 3x + 12 = x² + 5x + 96",
          {
            "he": "מכנסים איברים דומים:",
            "ru": "Приводим подобные:",
            "en": "Combine like terms:"
          },
          "x² + 7x + 12 = x² + 5x + 96",
          {
            "he": "`x²` נמצא בשני האגפים ומצטמצם:",
            "ru": "`x²` есть в обеих частях и сокращается:",
            "en": "`x²` is on both sides and cancels:"
          },
          "7x + 12 = 5x + 96",
          {
            "he": "מעבירים אגפים: x שמאלה, מספרים ימינה (הסימן מתחלף):",
            "ru": "Переносим: x влево, числа вправо (знак меняется):",
            "en": "Move terms: x to the left, numbers to the right (the sign flips):"
          },
          "7x − 5x = 96 − 12",
          "2x = 84",
          {
            "he": "מחלקים את שני האגפים ב־`2`:",
            "ru": "Делим обе части на `2`:",
            "en": "Divide both sides by `2`:"
          },
          "x = 42",
          {
            "he": "תשובה: `x = 42`",
            "ru": "Ответ: `x = 42`",
            "en": "Answer: `x = 42`"
          },
          {
            "he": "בדיקה: `45 × 46 = 2070 = 42 × 47 + 96` ✓",
            "ru": "Проверка: `45 × 46 = 2070 = 42 × 47 + 96` ✓",
            "en": "Check: `45 × 46 = 2070 = 42 × 47 + 96` ✓"
          }
        ]
      },
      {
        "id": "t4-3",
        "group": "4",
        "label": "4ג",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה: `(2x + 1)(x − 1) = (3 + 2x)(x + 3) − 20`",
          "ru": "Реши уравнение: `(2x + 1)(x − 1) = (3 + 2x)(x + 3) − 20`",
          "en": "Solve the equation: `(2x + 1)(x − 1) = (3 + 2x)(x + 3) − 20`"
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
            "he": "צעד ראשון: `2x² − 2x + x − 1 = 3x + 9 + 2x² + 6x − 20`",
            "ru": "Первый шаг: `2x² − 2x + x − 1 = 3x + 9 + 2x² + 6x − 20`",
            "en": "First step: `2x² − 2x + x − 1 = 3x + 9 + 2x² + 6x − 20`"
          },
          {
            "he": "בהמשך מקבלים: `−x − 1 = 9x − 11`",
            "ru": "Дальше получится: `−x − 1 = 9x − 11`",
            "en": "Next you get: `−x − 1 = 9x − 11`"
          }
        ],
        "solution": [
          {
            "he": "כל איבר בכל איבר, בשני האגפים:",
            "ru": "Каждый член на каждый, в обеих частях:",
            "en": "Every term times every term, on both sides:"
          },
          "2x² − 2x + x − 1 = 3x + 9 + 2x² + 6x − 20",
          {
            "he": "מכנסים איברים דומים:",
            "ru": "Приводим подобные:",
            "en": "Combine like terms:"
          },
          "2x² − x − 1 = 2x² + 9x − 11",
          {
            "he": "`2x²` נמצא בשני האגפים ומצטמצם:",
            "ru": "`2x²` есть в обеих частях и сокращается:",
            "en": "`2x²` is on both sides and cancels:"
          },
          "−x − 1 = 9x − 11",
          {
            "he": "מעבירים אגפים: x שמאלה, מספרים ימינה (הסימן מתחלף):",
            "ru": "Переносим: x влево, числа вправо (знак меняется):",
            "en": "Move terms: x to the left, numbers to the right (the sign flips):"
          },
          "−x − 9x = −11 + 1",
          "−10x = −10",
          {
            "he": "מחלקים את שני האגפים ב־`−10`:",
            "ru": "Делим обе части на `−10`:",
            "en": "Divide both sides by `−10`:"
          },
          "x = 1",
          {
            "he": "תשובה: `x = 1`",
            "ru": "Ответ: `x = 1`",
            "en": "Answer: `x = 1`"
          },
          {
            "he": "בדיקה: `3 × 0 = 0 = 5 × 4 − 20` ✓",
            "ru": "Проверка: `3 × 0 = 0 = 5 × 4 − 20` ✓",
            "en": "Check: `3 × 0 = 0 = 5 × 4 − 20` ✓"
          }
        ]
      },
      {
        "id": "t5-1",
        "group": "5",
        "label": "5א",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה: `x/3 − x/7 = −4`",
          "ru": "Реши уравнение: `x/3 − x/7 = −4`",
          "en": "Solve the equation: `x/3 − x/7 = −4`"
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
            "he": "צעד ראשון: `21 × x/3 − 21 × x/7 = 21 × (−4)`",
            "ru": "Первый шаг: `21 × x/3 − 21 × x/7 = 21 × (−4)`",
            "en": "First step: `21 × x/3 − 21 × x/7 = 21 × (−4)`"
          },
          {
            "he": "בהמשך מקבלים: `7x − 3x = −84`",
            "ru": "Дальше получится: `7x − 3x = −84`",
            "en": "Next you get: `7x − 3x = −84`"
          }
        ],
        "solution": [
          {
            "he": "המכנה המשותף של 3 ו־7 הוא `21`.",
            "ru": "Общий знаменатель 3 и 7 — `21`.",
            "en": "The common denominator of 3 and 7 is `21`."
          },
          {
            "he": "כופלים כל איבר במכנה המשותף `21`:",
            "ru": "Умножаем каждый член на общий знаменатель `21`:",
            "en": "Multiply every term by the common denominator `21`:"
          },
          "21 × x/3 − 21 × x/7 = 21 × (−4)",
          "7x − 3x = −84",
          "4x = −84",
          {
            "he": "מחלקים את שני האגפים ב־`4`:",
            "ru": "Делим обе части на `4`:",
            "en": "Divide both sides by `4`:"
          },
          "x = −21",
          {
            "he": "תשובה: `x = −21`",
            "ru": "Ответ: `x = −21`",
            "en": "Answer: `x = −21`"
          },
          {
            "he": "בדיקה: `−21/3 − (−21)/7 = −7 + 3 = −4` ✓",
            "ru": "Проверка: `−21/3 − (−21)/7 = −7 + 3 = −4` ✓",
            "en": "Check: `−21/3 − (−21)/7 = −7 + 3 = −4` ✓"
          }
        ]
      },
      {
        "id": "t5-2",
        "group": "5",
        "label": "5ב",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה: `(3x + 4)/5 = (2x + 14)/10`",
          "ru": "Реши уравнение: `(3x + 4)/5 = (2x + 14)/10`",
          "en": "Solve the equation: `(3x + 4)/5 = (2x + 14)/10`"
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
            "he": "צעד ראשון: `2(3x + 4) = 2x + 14`",
            "ru": "Первый шаг: `2(3x + 4) = 2x + 14`",
            "en": "First step: `2(3x + 4) = 2x + 14`"
          },
          {
            "he": "בהמשך מקבלים: `6x + 8 = 2x + 14`",
            "ru": "Дальше получится: `6x + 8 = 2x + 14`",
            "en": "Next you get: `6x + 8 = 2x + 14`"
          }
        ],
        "solution": [
          {
            "he": "המכנה הגדול הוא 10, והוא מתחלק גם ב־5. מכנה משותף: `10`.",
            "ru": "Самый большой знаменатель 10, он делится и на 5. Общий знаменатель: `10`.",
            "en": "The largest denominator is 10, and it is divisible by 5. Common denominator: `10`."
          },
          {
            "he": "כופלים כל איבר במכנה המשותף `10`:",
            "ru": "Умножаем каждый член на общий знаменатель `10`:",
            "en": "Multiply every term by the common denominator `10`:"
          },
          "2(3x + 4) = 2x + 14",
          {
            "he": "פותחים סוגריים:",
            "ru": "Раскрываем скобки:",
            "en": "Expand the brackets:"
          },
          "6x + 8 = 2x + 14",
          {
            "he": "מעבירים אגפים: x שמאלה, מספרים ימינה (הסימן מתחלף):",
            "ru": "Переносим: x влево, числа вправо (знак меняется):",
            "en": "Move terms: x to the left, numbers to the right (the sign flips):"
          },
          "6x − 2x = 14 − 8",
          "4x = 6",
          {
            "he": "מחלקים את שני האגפים ב־`4`:",
            "ru": "Делим обе части на `4`:",
            "en": "Divide both sides by `4`:"
          },
          "x = 1.5",
          {
            "he": "תשובה: `x = 1.5`",
            "ru": "Ответ: `x = 1.5`",
            "en": "Answer: `x = 1.5`"
          },
          {
            "he": "בדיקה: `(4.5 + 4)/5 = 1.7 = (3 + 14)/10` ✓",
            "ru": "Проверка: `(4.5 + 4)/5 = 1.7 = (3 + 14)/10` ✓",
            "en": "Check: `(4.5 + 4)/5 = 1.7 = (3 + 14)/10` ✓"
          }
        ]
      },
      {
        "id": "t5-3",
        "group": "5",
        "label": "5ג",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה: `(x + 3)/5 + (2x + 4)/3 = −5`",
          "ru": "Реши уравнение: `(x + 3)/5 + (2x + 4)/3 = −5`",
          "en": "Solve the equation: `(x + 3)/5 + (2x + 4)/3 = −5`"
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
            "he": "צעד ראשון: `3(x + 3) + 5(2x + 4) = −75`",
            "ru": "Первый шаг: `3(x + 3) + 5(2x + 4) = −75`",
            "en": "First step: `3(x + 3) + 5(2x + 4) = −75`"
          },
          {
            "he": "בהמשך מקבלים: `13x + 29 = −75`",
            "ru": "Дальше получится: `13x + 29 = −75`",
            "en": "Next you get: `13x + 29 = −75`"
          }
        ],
        "solution": [
          {
            "he": "מכנה משותף של 5 ו־3: `15`. גם את `−5` כופלים ב־15.",
            "ru": "Общий знаменатель 5 и 3: `15`. `−5` тоже умножаем на 15.",
            "en": "Common denominator of 5 and 3: `15`. Multiply `−5` by 15 too."
          },
          {
            "he": "כופלים כל איבר במכנה המשותף `15`:",
            "ru": "Умножаем каждый член на общий знаменатель `15`:",
            "en": "Multiply every term by the common denominator `15`:"
          },
          "3(x + 3) + 5(2x + 4) = −75",
          {
            "he": "פותחים סוגריים:",
            "ru": "Раскрываем скобки:",
            "en": "Expand the brackets:"
          },
          "3x + 9 + 10x + 20 = −75",
          {
            "he": "מכנסים איברים דומים:",
            "ru": "Приводим подобные:",
            "en": "Combine like terms:"
          },
          "13x + 29 = −75",
          "13x = −75 − 29",
          "13x = −104",
          {
            "he": "מחלקים את שני האגפים ב־`13`:",
            "ru": "Делим обе части на `13`:",
            "en": "Divide both sides by `13`:"
          },
          "x = −8",
          {
            "he": "תשובה: `x = −8`",
            "ru": "Ответ: `x = −8`",
            "en": "Answer: `x = −8`"
          },
          {
            "he": "בדיקה: `−5/5 + (−12)/3 = −1 − 4 = −5` ✓",
            "ru": "Проверка: `−5/5 + (−12)/3 = −1 − 4 = −5` ✓",
            "en": "Check: `−5/5 + (−12)/3 = −1 − 4 = −5` ✓"
          }
        ]
      },
      {
        "id": "t5-4",
        "group": "5",
        "label": "5ד",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה: `(1 − 7x)/3 + 3x = (x − 3)/5`",
          "ru": "Реши уравнение: `(1 − 7x)/3 + 3x = (x − 3)/5`",
          "en": "Solve the equation: `(1 − 7x)/3 + 3x = (x − 3)/5`"
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
            "he": "צעד ראשון: `5(1 − 7x) + 45x = 3(x − 3)`",
            "ru": "Первый шаг: `5(1 − 7x) + 45x = 3(x − 3)`",
            "en": "First step: `5(1 − 7x) + 45x = 3(x − 3)`"
          },
          {
            "he": "בהמשך מקבלים: `5 + 10x = 3x − 9`",
            "ru": "Дальше получится: `5 + 10x = 3x − 9`",
            "en": "Next you get: `5 + 10x = 3x − 9`"
          }
        ],
        "solution": [
          {
            "he": "מכנה משותף: `15`. האיבר `3x` בלי שבר — גם אותו כופלים ב־15.",
            "ru": "Общий знаменатель: `15`. Член `3x` без дроби — его тоже умножаем на 15.",
            "en": "Common denominator: `15`. The term `3x` has no fraction — multiply it by 15 too."
          },
          {
            "he": "כופלים כל איבר במכנה המשותף `15`:",
            "ru": "Умножаем каждый член на общий знаменатель `15`:",
            "en": "Multiply every term by the common denominator `15`:"
          },
          "5(1 − 7x) + 45x = 3(x − 3)",
          {
            "he": "פותחים סוגריים:",
            "ru": "Раскрываем скобки:",
            "en": "Expand the brackets:"
          },
          "5 − 35x + 45x = 3x − 9",
          {
            "he": "מכנסים איברים דומים:",
            "ru": "Приводим подобные:",
            "en": "Combine like terms:"
          },
          "5 + 10x = 3x − 9",
          {
            "he": "מעבירים אגפים: x שמאלה, מספרים ימינה (הסימן מתחלף):",
            "ru": "Переносим: x влево, числа вправо (знак меняется):",
            "en": "Move terms: x to the left, numbers to the right (the sign flips):"
          },
          "10x − 3x = −9 − 5",
          "7x = −14",
          {
            "he": "מחלקים את שני האגפים ב־`7`:",
            "ru": "Делим обе части на `7`:",
            "en": "Divide both sides by `7`:"
          },
          "x = −2",
          {
            "he": "תשובה: `x = −2`",
            "ru": "Ответ: `x = −2`",
            "en": "Answer: `x = −2`"
          },
          {
            "he": "בדיקה: `15/3 − 6 = −1 = −5/5` ✓",
            "ru": "Проверка: `15/3 − 6 = −1 = −5/5` ✓",
            "en": "Check: `15/3 − 6 = −1 = −5/5` ✓"
          }
        ]
      },
      {
        "id": "t5-5",
        "group": "5",
        "label": "5ה",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה: `(2x − 3)/5 + (5x + 12)/16 − (32 − 3x)/20 = (5x − 12)/4`",
          "ru": "Реши уравнение: `(2x − 3)/5 + (5x + 12)/16 − (32 − 3x)/20 = (5x − 12)/4`",
          "en": "Solve the equation: `(2x − 3)/5 + (5x + 12)/16 − (32 − 3x)/20 = (5x − 12)/4`"
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
            "he": "צעד ראשון: `16(2x − 3) + 5(5x + 12) − 4(32 − 3x) = 20(5x − 12)`",
            "ru": "Первый шаг: `16(2x − 3) + 5(5x + 12) − 4(32 − 3x) = 20(5x − 12)`",
            "en": "First step: `16(2x − 3) + 5(5x + 12) − 4(32 − 3x) = 20(5x − 12)`"
          },
          {
            "he": "בהמשך מקבלים: `69x − 116 = 100x − 240`",
            "ru": "Дальше получится: `69x − 116 = 100x − 240`",
            "en": "Next you get: `69x − 116 = 100x − 240`"
          }
        ],
        "solution": [
          {
            "he": "מחפשים מכנה משותף: לוקחים את המכנה הגדול (20) וכופלים ב־2, 3, 4… עד שהוא מתחלק בכל המכנים: 40 ו־60 לא מתחלקים ב־16, `80` כן.",
            "ru": "Ищем общий знаменатель: берём самый большой (20) и умножаем на 2, 3, 4…, пока не поделится на все: 40 и 60 не делятся на 16, `80` делится.",
            "en": "Find the common denominator: take the largest (20) and multiply by 2, 3, 4… until it divides by all: 40 and 60 are not divisible by 16, `80` is."
          },
          {
            "he": "כמה פעמים כל מכנה נכנס ב־80: `80 / 5 = 16`, `80 / 16 = 5`, `80 / 20 = 4`, `80 / 4 = 20`.",
            "ru": "Сколько раз каждый знаменатель входит в 80: `80 / 5 = 16`, `80 / 16 = 5`, `80 / 20 = 4`, `80 / 4 = 20`.",
            "en": "How many times each denominator goes into 80: `80 / 5 = 16`, `80 / 16 = 5`, `80 / 20 = 4`, `80 / 4 = 20`."
          },
          {
            "he": "כופלים כל איבר במכנה המשותף `80`:",
            "ru": "Умножаем каждый член на общий знаменатель `80`:",
            "en": "Multiply every term by the common denominator `80`:"
          },
          "16(2x − 3) + 5(5x + 12) − 4(32 − 3x) = 20(5x − 12)",
          {
            "he": "פותחים סוגריים. שימו לב: `−4 × (−3x) = +12x`:",
            "ru": "Раскрываем скобки. Внимание: `−4 × (−3x) = +12x`:",
            "en": "Expand the brackets. Note: `−4 × (−3x) = +12x`:"
          },
          "32x − 48 + 25x + 60 − 128 + 12x = 100x − 240",
          {
            "he": "מכנסים איברים דומים:",
            "ru": "Приводим подобные:",
            "en": "Combine like terms:"
          },
          "69x − 116 = 100x − 240",
          {
            "he": "מעבירים אגפים: x שמאלה, מספרים ימינה (הסימן מתחלף):",
            "ru": "Переносим: x влево, числа вправо (знак меняется):",
            "en": "Move terms: x to the left, numbers to the right (the sign flips):"
          },
          "69x − 100x = −240 + 116",
          "−31x = −124",
          {
            "he": "מחלקים את שני האגפים ב־`−31`:",
            "ru": "Делим обе части на `−31`:",
            "en": "Divide both sides by `−31`:"
          },
          "x = 4",
          {
            "he": "תשובה: `x = 4`",
            "ru": "Ответ: `x = 4`",
            "en": "Answer: `x = 4`"
          },
          {
            "he": "בדיקה: `1 + 2 − 1 = 2 = 8/4` ✓",
            "ru": "Проверка: `1 + 2 − 1 = 2 = 8/4` ✓",
            "en": "Check: `1 + 2 − 1 = 2 = 8/4` ✓"
          }
        ]
      },
      {
        "id": "t23-1",
        "group": "23",
        "label": "23א",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות:\n`x + y = 8`\n`x − y = 6`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений:\n`x + y = 8`\n`x − y = 6`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations:\n`x + y = 8`\n`x − y = 6`\nWrite the answer like this: x = …, y = …"
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
            "he": "צעד ראשון: `(x + y) + (x − y) = 8 + 6`",
            "ru": "Первый шаг: `(x + y) + (x − y) = 8 + 6`",
            "en": "First step: `(x + y) + (x − y) = 8 + 6`"
          },
          {
            "he": "בהמשך מקבלים: `2x = 14`",
            "ru": "Дальше получится: `2x = 14`",
            "en": "Next you get: `2x = 14`"
          }
        ],
        "solution": [
          {
            "he": "המקדמים של y הם `+1` ו־`−1` — סימנים שונים, לכן מחברים:",
            "ru": "Коэффициенты при y — `+1` и `−1`, знаки разные, поэтому складываем:",
            "en": "The y coefficients are `+1` and `−1` — different signs, so add:"
          },
          "(x + y) + (x − y) = 8 + 6",
          "2x = 14",
          {
            "he": "מחלקים את שני האגפים ב־`2`:",
            "ru": "Делим обе части на `2`:",
            "en": "Divide both sides by `2`:"
          },
          "x = 7",
          {
            "he": "מציבים `x = 7` במשוואה הראשונה:",
            "ru": "Подставляем `x = 7` в первое уравнение:",
            "en": "Substitute `x = 7` into the first equation:"
          },
          "7 + y = 8",
          "y = 1",
          {
            "he": "תשובה: `x = 7,  y = 1`",
            "ru": "Ответ: `x = 7,  y = 1`",
            "en": "Answer: `x = 7,  y = 1`"
          }
        ]
      },
      {
        "id": "t23-2",
        "group": "23",
        "label": "23ב",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות:\n`x − y = 1`\n`x + y = 7`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений:\n`x − y = 1`\n`x + y = 7`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations:\n`x − y = 1`\n`x + y = 7`\nWrite the answer like this: x = …, y = …"
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
            "he": "צעד ראשון: `(x − y) + (x + y) = 1 + 7`",
            "ru": "Первый шаг: `(x − y) + (x + y) = 1 + 7`",
            "en": "First step: `(x − y) + (x + y) = 1 + 7`"
          },
          {
            "he": "בהמשך מקבלים: `2x = 8`",
            "ru": "Дальше получится: `2x = 8`",
            "en": "Next you get: `2x = 8`"
          }
        ],
        "solution": [
          {
            "he": "מחברים את המשוואות:",
            "ru": "Складываем уравнения:",
            "en": "Add the equations:"
          },
          "(x − y) + (x + y) = 1 + 7",
          "2x = 8",
          {
            "he": "מחלקים את שני האגפים ב־`2`:",
            "ru": "Делим обе части на `2`:",
            "en": "Divide both sides by `2`:"
          },
          "x = 4",
          {
            "he": "מציבים `x = 4` במשוואה השנייה:",
            "ru": "Подставляем `x = 4` в второе уравнение:",
            "en": "Substitute `x = 4` into the second equation:"
          },
          "4 + y = 7",
          "y = 3",
          {
            "he": "תשובה: `x = 4,  y = 3`",
            "ru": "Ответ: `x = 4,  y = 3`",
            "en": "Answer: `x = 4,  y = 3`"
          }
        ]
      },
      {
        "id": "t23-3",
        "group": "23",
        "label": "23ג",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות:\n`5x − 2y = −17`\n`3x + 2y = −7`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений:\n`5x − 2y = −17`\n`3x + 2y = −7`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations:\n`5x − 2y = −17`\n`3x + 2y = −7`\nWrite the answer like this: x = …, y = …"
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
            "he": "צעד ראשון: `8x = −24`",
            "ru": "Первый шаг: `8x = −24`",
            "en": "First step: `8x = −24`"
          },
          {
            "he": "בהמשך מקבלים: `x = −3`",
            "ru": "Дальше получится: `x = −3`",
            "en": "Next you get: `x = −3`"
          }
        ],
        "solution": [
          {
            "he": "`−2y` ו־`+2y` — מחברים והם מצטמצמים:",
            "ru": "`−2y` и `+2y` — складываем, они сокращаются:",
            "en": "`−2y` and `+2y` — add and they cancel:"
          },
          "8x = −24",
          {
            "he": "מחלקים את שני האגפים ב־`8`:",
            "ru": "Делим обе части на `8`:",
            "en": "Divide both sides by `8`:"
          },
          "x = −3",
          {
            "he": "מציבים `x = −3` במשוואה השנייה:",
            "ru": "Подставляем `x = −3` в второе уравнение:",
            "en": "Substitute `x = −3` into the second equation:"
          },
          "3 × (−3) + 2y = −7",
          "−9 + 2y = −7",
          "2y = 2",
          "y = 1",
          {
            "he": "תשובה: `x = −3,  y = 1`",
            "ru": "Ответ: `x = −3,  y = 1`",
            "en": "Answer: `x = −3,  y = 1`"
          }
        ]
      },
      {
        "id": "t23-4",
        "group": "23",
        "label": "23ד",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות:\n`−10x + 4y = −44`\n`7x − 4y = 26`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений:\n`−10x + 4y = −44`\n`7x − 4y = 26`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations:\n`−10x + 4y = −44`\n`7x − 4y = 26`\nWrite the answer like this: x = …, y = …"
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
            "he": "צעד ראשון: `−3x = −18`",
            "ru": "Первый шаг: `−3x = −18`",
            "en": "First step: `−3x = −18`"
          },
          {
            "he": "בהמשך מקבלים: `x = 6`",
            "ru": "Дальше получится: `x = 6`",
            "en": "Next you get: `x = 6`"
          }
        ],
        "solution": [
          {
            "he": "`+4y` ו־`−4y` — מחברים:",
            "ru": "`+4y` и `−4y` — складываем:",
            "en": "`+4y` and `−4y` — add:"
          },
          "−3x = −18",
          {
            "he": "מחלקים את שני האגפים ב־`−3`:",
            "ru": "Делим обе части на `−3`:",
            "en": "Divide both sides by `−3`:"
          },
          "x = 6",
          {
            "he": "מציבים `x = 6` במשוואה השנייה:",
            "ru": "Подставляем `x = 6` в второе уравнение:",
            "en": "Substitute `x = 6` into the second equation:"
          },
          "7 × 6 − 4y = 26",
          "42 − 4y = 26",
          "−4y = −16",
          "y = 4",
          {
            "he": "תשובה: `x = 6,  y = 4`",
            "ru": "Ответ: `x = 6,  y = 4`",
            "en": "Answer: `x = 6,  y = 4`"
          }
        ]
      },
      {
        "id": "t23-5",
        "group": "23",
        "label": "23ה",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות:\n`−x + y = 7`\n`x + y = −3`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений:\n`−x + y = 7`\n`x + y = −3`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations:\n`−x + y = 7`\n`x + y = −3`\nWrite the answer like this: x = …, y = …"
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
            "he": "צעד ראשון: `2y = 4`",
            "ru": "Первый шаг: `2y = 4`",
            "en": "First step: `2y = 4`"
          },
          {
            "he": "בהמשך מקבלים: `y = 2`",
            "ru": "Дальше получится: `y = 2`",
            "en": "Next you get: `y = 2`"
          }
        ],
        "solution": [
          {
            "he": "הפעם x מצטמצם: `−x` ו־`+x`. מחברים:",
            "ru": "Теперь сокращается x: `−x` и `+x`. Складываем:",
            "en": "This time x cancels: `−x` and `+x`. Add:"
          },
          "2y = 4",
          "y = 2",
          {
            "he": "מציבים `y = 2` במשוואה השנייה:",
            "ru": "Подставляем `y = 2` в второе уравнение:",
            "en": "Substitute `y = 2` into the second equation:"
          },
          "x + 2 = −3",
          "x = −5",
          {
            "he": "תשובה: `x = −5,  y = 2`",
            "ru": "Ответ: `x = −5,  y = 2`",
            "en": "Answer: `x = −5,  y = 2`"
          }
        ]
      },
      {
        "id": "t23-6",
        "group": "23",
        "label": "23ו",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות:\n`−3x − 2y = −1`\n`3x + 8y = 13`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений:\n`−3x − 2y = −1`\n`3x + 8y = 13`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations:\n`−3x − 2y = −1`\n`3x + 8y = 13`\nWrite the answer like this: x = …, y = …"
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
            "he": "צעד ראשון: `6y = 12`",
            "ru": "Первый шаг: `6y = 12`",
            "en": "First step: `6y = 12`"
          },
          {
            "he": "בהמשך מקבלים: `y = 2`",
            "ru": "Дальше получится: `y = 2`",
            "en": "Next you get: `y = 2`"
          }
        ],
        "solution": [
          {
            "he": "`−3x` ו־`+3x` — מחברים:",
            "ru": "`−3x` и `+3x` — складываем:",
            "en": "`−3x` and `+3x` — add:"
          },
          "6y = 12",
          "y = 2",
          {
            "he": "מציבים `y = 2` במשוואה השנייה:",
            "ru": "Подставляем `y = 2` в второе уравнение:",
            "en": "Substitute `y = 2` into the second equation:"
          },
          "3x + 16 = 13",
          "3x = −3",
          "x = −1",
          {
            "he": "תשובה: `x = −1,  y = 2`",
            "ru": "Ответ: `x = −1,  y = 2`",
            "en": "Answer: `x = −1,  y = 2`"
          }
        ]
      },
      {
        "id": "t24",
        "group": "24",
        "label": "24",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות:\n`4x + y = 9`\n`3x − 2y = 4`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений:\n`4x + y = 9`\n`3x − 2y = 4`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations:\n`4x + y = 9`\n`3x − 2y = 4`\nWrite the answer like this: x = …, y = …"
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
            "he": "צעד ראשון: `8x + 2y = 18`",
            "ru": "Первый шаг: `8x + 2y = 18`",
            "en": "First step: `8x + 2y = 18`"
          },
          {
            "he": "בהמשך מקבלים: `11x = 22`",
            "ru": "Дальше получится: `11x = 22`",
            "en": "Next you get: `11x = 22`"
          }
        ],
        "solution": [
          {
            "he": "כופלים את המשוואה הראשונה ב־`2` (כל איבר):",
            "ru": "Умножаем первое уравнение на `2` (каждый член):",
            "en": "Multiply the first equation by `2` (every term):"
          },
          "8x + 2y = 18",
          {
            "he": "עכשיו `+2y` ו־`−2y` — מחברים עם המשוואה השנייה:",
            "ru": "Теперь `+2y` и `−2y` — складываем со вторым уравнением:",
            "en": "Now `+2y` and `−2y` — add to the second equation:"
          },
          "11x = 22",
          {
            "he": "מחלקים את שני האגפים ב־`11`:",
            "ru": "Делим обе части на `11`:",
            "en": "Divide both sides by `11`:"
          },
          "x = 2",
          {
            "he": "מציבים `x = 2` במשוואה הראשונה:",
            "ru": "Подставляем `x = 2` в первое уравнение:",
            "en": "Substitute `x = 2` into the first equation:"
          },
          "4 × 2 + y = 9",
          "y = 1",
          {
            "he": "תשובה: `x = 2,  y = 1`",
            "ru": "Ответ: `x = 2,  y = 1`",
            "en": "Answer: `x = 2,  y = 1`"
          }
        ]
      }
    ],
    "ai": [
      {
        "id": "ai1-1",
        "level": 1,
        "label": "1.1",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה: `7x − 5 = 2x + 20`",
          "ru": "Реши уравнение: `7x − 5 = 2x + 20`",
          "en": "Solve the equation: `7x − 5 = 2x + 20`"
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
            "he": "צעד ראשון: `7x − 2x = 20 + 5`",
            "ru": "Первый шаг: `7x − 2x = 20 + 5`",
            "en": "First step: `7x − 2x = 20 + 5`"
          },
          {
            "he": "בהמשך מקבלים: `5x = 25`",
            "ru": "Дальше получится: `5x = 25`",
            "en": "Next you get: `5x = 25`"
          }
        ],
        "solution": [
          {
            "he": "מעבירים אגפים: x שמאלה, מספרים ימינה (הסימן מתחלף):",
            "ru": "Переносим: x влево, числа вправо (знак меняется):",
            "en": "Move terms: x to the left, numbers to the right (the sign flips):"
          },
          "7x − 2x = 20 + 5",
          "5x = 25",
          {
            "he": "מחלקים את שני האגפים ב־`5`:",
            "ru": "Делим обе части на `5`:",
            "en": "Divide both sides by `5`:"
          },
          "x = 5",
          {
            "he": "תשובה: `x = 5`",
            "ru": "Ответ: `x = 5`",
            "en": "Answer: `x = 5`"
          },
          {
            "he": "בדיקה: `35 − 5 = 30 = 10 + 20` ✓",
            "ru": "Проверка: `35 − 5 = 30 = 10 + 20` ✓",
            "en": "Check: `35 − 5 = 30 = 10 + 20` ✓"
          }
        ]
      },
      {
        "id": "ai1-2",
        "level": 1,
        "label": "1.2",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה: `4(x − 2) = 2x + 6`",
          "ru": "Реши уравнение: `4(x − 2) = 2x + 6`",
          "en": "Solve the equation: `4(x − 2) = 2x + 6`"
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
            "he": "צעד ראשון: `4x − 8 = 2x + 6`",
            "ru": "Первый шаг: `4x − 8 = 2x + 6`",
            "en": "First step: `4x − 8 = 2x + 6`"
          },
          {
            "he": "בהמשך מקבלים: `2x = 14`",
            "ru": "Дальше получится: `2x = 14`",
            "en": "Next you get: `2x = 14`"
          }
        ],
        "solution": [
          {
            "he": "פותחים סוגריים:",
            "ru": "Раскрываем скобки:",
            "en": "Expand the brackets:"
          },
          "4x − 8 = 2x + 6",
          {
            "he": "מעבירים אגפים: x שמאלה, מספרים ימינה (הסימן מתחלף):",
            "ru": "Переносим: x влево, числа вправо (знак меняется):",
            "en": "Move terms: x to the left, numbers to the right (the sign flips):"
          },
          "4x − 2x = 6 + 8",
          "2x = 14",
          {
            "he": "מחלקים את שני האגפים ב־`2`:",
            "ru": "Делим обе части на `2`:",
            "en": "Divide both sides by `2`:"
          },
          "x = 7",
          {
            "he": "תשובה: `x = 7`",
            "ru": "Ответ: `x = 7`",
            "en": "Answer: `x = 7`"
          },
          {
            "he": "בדיקה: `4 × 5 = 20 = 14 + 6` ✓",
            "ru": "Проверка: `4 × 5 = 20 = 14 + 6` ✓",
            "en": "Check: `4 × 5 = 20 = 14 + 6` ✓"
          }
        ]
      },
      {
        "id": "ai1-3",
        "level": 1,
        "label": "1.3",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות:\n`x + y = 10`\n`x − y = 4`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений:\n`x + y = 10`\n`x − y = 4`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations:\n`x + y = 10`\n`x − y = 4`\nWrite the answer like this: x = …, y = …"
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
            "he": "צעד ראשון: `(x + y) + (x − y) = 10 + 4`",
            "ru": "Первый шаг: `(x + y) + (x − y) = 10 + 4`",
            "en": "First step: `(x + y) + (x − y) = 10 + 4`"
          },
          {
            "he": "בהמשך מקבלים: `2x = 14`",
            "ru": "Дальше получится: `2x = 14`",
            "en": "Next you get: `2x = 14`"
          }
        ],
        "solution": [
          {
            "he": "מחברים את המשוואות:",
            "ru": "Складываем уравнения:",
            "en": "Add the equations:"
          },
          "(x + y) + (x − y) = 10 + 4",
          "2x = 14",
          {
            "he": "מחלקים את שני האגפים ב־`2`:",
            "ru": "Делим обе части на `2`:",
            "en": "Divide both sides by `2`:"
          },
          "x = 7",
          {
            "he": "מציבים `x = 7` במשוואה הראשונה:",
            "ru": "Подставляем `x = 7` в первое уравнение:",
            "en": "Substitute `x = 7` into the first equation:"
          },
          "7 + y = 10",
          "y = 3",
          {
            "he": "תשובה: `x = 7,  y = 3`",
            "ru": "Ответ: `x = 7,  y = 3`",
            "en": "Answer: `x = 7,  y = 3`"
          }
        ]
      },
      {
        "id": "ai2-1",
        "level": 2,
        "label": "2.1",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה: `20 − 3(2x − 4) = 2(x + 4)`",
          "ru": "Реши уравнение: `20 − 3(2x − 4) = 2(x + 4)`",
          "en": "Solve the equation: `20 − 3(2x − 4) = 2(x + 4)`"
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
            "he": "צעד ראשון: `20 − 6x + 12 = 2x + 8`",
            "ru": "Первый шаг: `20 − 6x + 12 = 2x + 8`",
            "en": "First step: `20 − 6x + 12 = 2x + 8`"
          },
          {
            "he": "בהמשך מקבלים: `32 − 6x = 2x + 8`",
            "ru": "Дальше получится: `32 − 6x = 2x + 8`",
            "en": "Next you get: `32 − 6x = 2x + 8`"
          }
        ],
        "solution": [
          {
            "he": "פותחים סוגריים. `−3 × (−4) = +12`:",
            "ru": "Раскрываем скобки. `−3 × (−4) = +12`:",
            "en": "Expand the brackets. `−3 × (−4) = +12`:"
          },
          "20 − 6x + 12 = 2x + 8",
          {
            "he": "מכנסים איברים דומים:",
            "ru": "Приводим подобные:",
            "en": "Combine like terms:"
          },
          "32 − 6x = 2x + 8",
          {
            "he": "מעבירים אגפים: x שמאלה, מספרים ימינה (הסימן מתחלף):",
            "ru": "Переносим: x влево, числа вправо (знак меняется):",
            "en": "Move terms: x to the left, numbers to the right (the sign flips):"
          },
          "−6x − 2x = 8 − 32",
          "−8x = −24",
          {
            "he": "מחלקים את שני האגפים ב־`−8`:",
            "ru": "Делим обе части на `−8`:",
            "en": "Divide both sides by `−8`:"
          },
          "x = 3",
          {
            "he": "תשובה: `x = 3`",
            "ru": "Ответ: `x = 3`",
            "en": "Answer: `x = 3`"
          },
          {
            "he": "בדיקה: `20 − 3 × 2 = 14 = 2 × 7` ✓",
            "ru": "Проверка: `20 − 3 × 2 = 14 = 2 × 7` ✓",
            "en": "Check: `20 − 3 × 2 = 14 = 2 × 7` ✓"
          }
        ]
      },
      {
        "id": "ai2-2",
        "level": 2,
        "label": "2.2",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה: `(x + 5)(x − 2) = x(x + 1) + 2`",
          "ru": "Реши уравнение: `(x + 5)(x − 2) = x(x + 1) + 2`",
          "en": "Solve the equation: `(x + 5)(x − 2) = x(x + 1) + 2`"
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
            "he": "צעד ראשון: `x² − 2x + 5x − 10 = x² + x + 2`",
            "ru": "Первый шаг: `x² − 2x + 5x − 10 = x² + x + 2`",
            "en": "First step: `x² − 2x + 5x − 10 = x² + x + 2`"
          },
          {
            "he": "בהמשך מקבלים: `3x − 10 = x + 2`",
            "ru": "Дальше получится: `3x − 10 = x + 2`",
            "en": "Next you get: `3x − 10 = x + 2`"
          }
        ],
        "solution": [
          {
            "he": "כל איבר בכל איבר:",
            "ru": "Каждый член на каждый:",
            "en": "Every term times every term:"
          },
          "x² − 2x + 5x − 10 = x² + x + 2",
          {
            "he": "מכנסים איברים דומים:",
            "ru": "Приводим подобные:",
            "en": "Combine like terms:"
          },
          "x² + 3x − 10 = x² + x + 2",
          {
            "he": "`x²` נמצא בשני האגפים ומצטמצם:",
            "ru": "`x²` есть в обеих частях и сокращается:",
            "en": "`x²` is on both sides and cancels:"
          },
          "3x − 10 = x + 2",
          {
            "he": "מעבירים אגפים: x שמאלה, מספרים ימינה (הסימן מתחלף):",
            "ru": "Переносим: x влево, числа вправо (знак меняется):",
            "en": "Move terms: x to the left, numbers to the right (the sign flips):"
          },
          "3x − x = 2 + 10",
          "2x = 12",
          {
            "he": "מחלקים את שני האגפים ב־`2`:",
            "ru": "Делим обе части на `2`:",
            "en": "Divide both sides by `2`:"
          },
          "x = 6",
          {
            "he": "תשובה: `x = 6`",
            "ru": "Ответ: `x = 6`",
            "en": "Answer: `x = 6`"
          },
          {
            "he": "בדיקה: `11 × 4 = 44 = 6 × 7 + 2` ✓",
            "ru": "Проверка: `11 × 4 = 44 = 6 × 7 + 2` ✓",
            "en": "Check: `11 × 4 = 44 = 6 × 7 + 2` ✓"
          }
        ]
      },
      {
        "id": "ai2-3",
        "level": 2,
        "label": "2.3",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה: `x/4 + (x − 2)/6 = 3`",
          "ru": "Реши уравнение: `x/4 + (x − 2)/6 = 3`",
          "en": "Solve the equation: `x/4 + (x − 2)/6 = 3`"
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
            "he": "צעד ראשון: `3x + 2(x − 2) = 36`",
            "ru": "Первый шаг: `3x + 2(x − 2) = 36`",
            "en": "First step: `3x + 2(x − 2) = 36`"
          },
          {
            "he": "בהמשך מקבלים: `5x − 4 = 36`",
            "ru": "Дальше получится: `5x − 4 = 36`",
            "en": "Next you get: `5x − 4 = 36`"
          }
        ],
        "solution": [
          {
            "he": "המכנה הגדול הוא 6. `6 × 2 = 12` מתחלק גם ב־4 — מכנה משותף `12`.",
            "ru": "Самый большой знаменатель 6. `6 × 2 = 12` делится и на 4 — общий знаменатель `12`.",
            "en": "The largest denominator is 6. `6 × 2 = 12` is divisible by 4 too — common denominator `12`."
          },
          {
            "he": "כופלים כל איבר במכנה המשותף `12`:",
            "ru": "Умножаем каждый член на общий знаменатель `12`:",
            "en": "Multiply every term by the common denominator `12`:"
          },
          "3x + 2(x − 2) = 36",
          {
            "he": "פותחים סוגריים:",
            "ru": "Раскрываем скобки:",
            "en": "Expand the brackets:"
          },
          "3x + 2x − 4 = 36",
          {
            "he": "מכנסים איברים דומים:",
            "ru": "Приводим подобные:",
            "en": "Combine like terms:"
          },
          "5x − 4 = 36",
          "5x = 40",
          {
            "he": "מחלקים את שני האגפים ב־`5`:",
            "ru": "Делим обе части на `5`:",
            "en": "Divide both sides by `5`:"
          },
          "x = 8",
          {
            "he": "תשובה: `x = 8`",
            "ru": "Ответ: `x = 8`",
            "en": "Answer: `x = 8`"
          },
          {
            "he": "בדיקה: `8/4 + 6/6 = 2 + 1 = 3` ✓",
            "ru": "Проверка: `8/4 + 6/6 = 2 + 1 = 3` ✓",
            "en": "Check: `8/4 + 6/6 = 2 + 1 = 3` ✓"
          }
        ]
      },
      {
        "id": "ai2-4",
        "level": 2,
        "label": "2.4",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות:\n`3x + 2y = 16`\n`5x − 2y = 0`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений:\n`3x + 2y = 16`\n`5x − 2y = 0`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations:\n`3x + 2y = 16`\n`5x − 2y = 0`\nWrite the answer like this: x = …, y = …"
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
            "he": "צעד ראשון: `8x = 16`",
            "ru": "Первый шаг: `8x = 16`",
            "en": "First step: `8x = 16`"
          },
          {
            "he": "בהמשך מקבלים: `x = 2`",
            "ru": "Дальше получится: `x = 2`",
            "en": "Next you get: `x = 2`"
          }
        ],
        "solution": [
          {
            "he": "`+2y` ו־`−2y` — מחברים:",
            "ru": "`+2y` и `−2y` — складываем:",
            "en": "`+2y` and `−2y` — add:"
          },
          "8x = 16",
          {
            "he": "מחלקים את שני האגפים ב־`8`:",
            "ru": "Делим обе части на `8`:",
            "en": "Divide both sides by `8`:"
          },
          "x = 2",
          {
            "he": "מציבים `x = 2` במשוואה הראשונה:",
            "ru": "Подставляем `x = 2` в первое уравнение:",
            "en": "Substitute `x = 2` into the first equation:"
          },
          "3 × 2 + 2y = 16",
          "6 + 2y = 16",
          "2y = 10",
          "y = 5",
          {
            "he": "תשובה: `x = 2,  y = 5`",
            "ru": "Ответ: `x = 2,  y = 5`",
            "en": "Answer: `x = 2,  y = 5`"
          }
        ]
      },
      {
        "id": "ai3-1",
        "level": 3,
        "label": "3.1",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה: `(3x − 4)/6 − (x + 2)/4 = (x − 5)/3`",
          "ru": "Реши уравнение: `(3x − 4)/6 − (x + 2)/4 = (x − 5)/3`",
          "en": "Solve the equation: `(3x − 4)/6 − (x + 2)/4 = (x − 5)/3`"
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
            "he": "צעד ראשון: `2(3x − 4) − 3(x + 2) = 4(x − 5)`",
            "ru": "Первый шаг: `2(3x − 4) − 3(x + 2) = 4(x − 5)`",
            "en": "First step: `2(3x − 4) − 3(x + 2) = 4(x − 5)`"
          },
          {
            "he": "בהמשך מקבלים: `3x − 14 = 4x − 20`",
            "ru": "Дальше получится: `3x − 14 = 4x − 20`",
            "en": "Next you get: `3x − 14 = 4x − 20`"
          }
        ],
        "solution": [
          {
            "he": "מכנה משותף של 6, 4, 3: `12`.",
            "ru": "Общий знаменатель 6, 4, 3: `12`.",
            "en": "Common denominator of 6, 4, 3: `12`."
          },
          {
            "he": "כופלים כל איבר במכנה המשותף `12`:",
            "ru": "Умножаем каждый член на общий знаменатель `12`:",
            "en": "Multiply every term by the common denominator `12`:"
          },
          "2(3x − 4) − 3(x + 2) = 4(x − 5)",
          {
            "he": "פותחים סוגריים. המינוס לפני השבר השני חל על כל המונה:",
            "ru": "Раскрываем скобки. Минус перед второй дробью действует на весь числитель:",
            "en": "Expand. The minus before the second fraction applies to the whole numerator:"
          },
          "6x − 8 − 3x − 6 = 4x − 20",
          {
            "he": "מכנסים איברים דומים:",
            "ru": "Приводим подобные:",
            "en": "Combine like terms:"
          },
          "3x − 14 = 4x − 20",
          {
            "he": "מעבירים אגפים: x שמאלה, מספרים ימינה (הסימן מתחלף):",
            "ru": "Переносим: x влево, числа вправо (знак меняется):",
            "en": "Move terms: x to the left, numbers to the right (the sign flips):"
          },
          "3x − 4x = −20 + 14",
          "−x = −6",
          "x = 6",
          {
            "he": "תשובה: `x = 6`",
            "ru": "Ответ: `x = 6`",
            "en": "Answer: `x = 6`"
          },
          {
            "he": "בדיקה: `14/6 − 8/4 = 1/3 = 1/3` ✓",
            "ru": "Проверка: `14/6 − 8/4 = 1/3 = 1/3` ✓",
            "en": "Check: `14/6 − 8/4 = 1/3 = 1/3` ✓"
          }
        ]
      },
      {
        "id": "ai3-2",
        "level": 3,
        "label": "3.2",
        "kind": "number",
        "text": {
          "he": "פתרו את המשוואה: `(2x − 1)(x + 3) − 2x(x − 4) = 36`",
          "ru": "Реши уравнение: `(2x − 1)(x + 3) − 2x(x − 4) = 36`",
          "en": "Solve the equation: `(2x − 1)(x + 3) − 2x(x − 4) = 36`"
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
            "he": "צעד ראשון: `2x² + 6x − x − 3 − 2x² + 8x = 36`",
            "ru": "Первый шаг: `2x² + 6x − x − 3 − 2x² + 8x = 36`",
            "en": "First step: `2x² + 6x − x − 3 − 2x² + 8x = 36`"
          },
          {
            "he": "בהמשך מקבלים: `13x − 3 = 36`",
            "ru": "Дальше получится: `13x − 3 = 36`",
            "en": "Next you get: `13x − 3 = 36`"
          }
        ],
        "solution": [
          {
            "he": "פותחים את שני הסוגריים. המינוס לפני `2x` הופך את הסימנים בסוגריים השניים:",
            "ru": "Раскрываем обе скобки. Минус перед `2x` меняет знаки во второй скобке:",
            "en": "Expand both brackets. The minus before `2x` flips the signs in the second bracket:"
          },
          "2x² + 6x − x − 3 − 2x² + 8x = 36",
          {
            "he": "`2x² − 2x² = 0`. מכנסים:",
            "ru": "`2x² − 2x² = 0`. Приводим подобные:",
            "en": "`2x² − 2x² = 0`. Combine:"
          },
          "13x − 3 = 36",
          "13x = 39",
          {
            "he": "מחלקים את שני האגפים ב־`13`:",
            "ru": "Делим обе части на `13`:",
            "en": "Divide both sides by `13`:"
          },
          "x = 3",
          {
            "he": "תשובה: `x = 3`",
            "ru": "Ответ: `x = 3`",
            "en": "Answer: `x = 3`"
          },
          {
            "he": "בדיקה: `5 × 6 − 6 × (−1) = 30 + 6 = 36` ✓",
            "ru": "Проверка: `5 × 6 − 6 × (−1) = 30 + 6 = 36` ✓",
            "en": "Check: `5 × 6 − 6 × (−1) = 30 + 6 = 36` ✓"
          }
        ]
      },
      {
        "id": "ai3-3",
        "level": 3,
        "label": "3.3",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות:\n`3x + 4y = 10`\n`5x − 3y = 7`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений:\n`3x + 4y = 10`\n`5x − 3y = 7`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations:\n`3x + 4y = 10`\n`5x − 3y = 7`\nWrite the answer like this: x = …, y = …"
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
            "he": "צעד ראשון: `9x + 12y = 30`",
            "ru": "Первый шаг: `9x + 12y = 30`",
            "en": "First step: `9x + 12y = 30`"
          },
          {
            "he": "בהמשך מקבלים: `20x − 12y = 28`",
            "ru": "Дальше получится: `20x − 12y = 28`",
            "en": "Next you get: `20x − 12y = 28`"
          }
        ],
        "solution": [
          {
            "he": "המקדמים של y הם 4 ו־3. `12` מתחלק בשניהם.",
            "ru": "Коэффициенты при y — 4 и 3. `12` делится на оба.",
            "en": "The y coefficients are 4 and 3. `12` is divisible by both."
          },
          {
            "he": "כופלים את הראשונה ב־`3`:",
            "ru": "Умножаем первое на `3`:",
            "en": "Multiply the first by `3`:"
          },
          "9x + 12y = 30",
          {
            "he": "כופלים את השנייה ב־`4`:",
            "ru": "Умножаем второе на `4`:",
            "en": "Multiply the second by `4`:"
          },
          "20x − 12y = 28",
          {
            "he": "מחברים את המשוואות:",
            "ru": "Складываем уравнения:",
            "en": "Add the equations:"
          },
          "29x = 58",
          {
            "he": "מחלקים את שני האגפים ב־`29`:",
            "ru": "Делим обе части на `29`:",
            "en": "Divide both sides by `29`:"
          },
          "x = 2",
          {
            "he": "מציבים `x = 2` במשוואה הראשונה:",
            "ru": "Подставляем `x = 2` в первое уравнение:",
            "en": "Substitute `x = 2` into the first equation:"
          },
          "3 × 2 + 4y = 10",
          "4y = 4",
          "y = 1",
          {
            "he": "תשובה: `x = 2,  y = 1`",
            "ru": "Ответ: `x = 2,  y = 1`",
            "en": "Answer: `x = 2,  y = 1`"
          }
        ]
      },
      {
        "id": "ai3-4",
        "level": 3,
        "label": "3.4",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות:\n`2x − 5y = −16`\n`−3x + 4y = 17`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений:\n`2x − 5y = −16`\n`−3x + 4y = 17`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations:\n`2x − 5y = −16`\n`−3x + 4y = 17`\nWrite the answer like this: x = …, y = …"
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
            "he": "צעד ראשון: `6x − 15y = −48`",
            "ru": "Первый шаг: `6x − 15y = −48`",
            "en": "First step: `6x − 15y = −48`"
          },
          {
            "he": "בהמשך מקבלים: `−6x + 8y = 34`",
            "ru": "Дальше получится: `−6x + 8y = 34`",
            "en": "Next you get: `−6x + 8y = 34`"
          }
        ],
        "solution": [
          {
            "he": "נעלים את x: המקדמים 2 ו־−3, כופלים ב־3 ו־2:",
            "ru": "Убираем x: коэффициенты 2 и −3, умножаем на 3 и на 2:",
            "en": "Eliminate x: the coefficients are 2 and −3, multiply by 3 and by 2:"
          },
          "6x − 15y = −48",
          "−6x + 8y = 34",
          {
            "he": "`6x` ו־`−6x` — מחברים:",
            "ru": "`6x` и `−6x` — складываем:",
            "en": "`6x` and `−6x` — add:"
          },
          "−7y = −14",
          {
            "he": "מחלקים את שני האגפים ב־`−7`:",
            "ru": "Делим обе части на `−7`:",
            "en": "Divide both sides by `−7`:"
          },
          "y = 2",
          {
            "he": "מציבים `y = 2` במשוואה הראשונה:",
            "ru": "Подставляем `y = 2` в первое уравнение:",
            "en": "Substitute `y = 2` into the first equation:"
          },
          "2x − 10 = −16",
          "2x = −6",
          "x = −3",
          {
            "he": "תשובה: `x = −3,  y = 2`",
            "ru": "Ответ: `x = −3,  y = 2`",
            "en": "Answer: `x = −3,  y = 2`"
          }
        ]
      }
    ]
  }
};

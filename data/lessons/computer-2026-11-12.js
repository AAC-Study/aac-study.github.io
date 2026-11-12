/* Lesson data — format: see the comment at the top of data/lessons/math-2026-11-01.js.
   Every truth value, column and function in this file was checked in Python (build script asserts). */
window.LESSONS = window.LESSONS || {};
window.LESSONS["computer-2026-11-12"] = {
  "id": "computer-2026-11-12",
  "subject": "computer",
  "date": "2026-11-12",
  "title": {
    "he": "שערים לוגיים וטבלאות אמת",
    "ru": "Логические вентили и таблицы истинности",
    "en": "Logic gates and truth tables"
  },
  "summary": {
    "he": "מה זה שער לוגי ומה יש ב־ALU, ששת השערים AND, OR, NOT, NAND, NOR, XOR וטבלאות האמת שלהם, emu8086, ותרגיל \"הבניין הקטן\": מסיפור לטבלת אמת, לפונקציה ולמפת שערים.",
    "ru": "Что такое логический вентиль и что внутри ALU, шесть вентилей AND, OR, NOT, NAND, NOR, XOR и их таблицы истинности, emu8086, и задача «Маленький дом»: от истории к таблице истинности, функции и карте вентилей.",
    "en": "What a logic gate is and what is in the ALU, the six gates AND, OR, NOT, NAND, NOR, XOR and their truth tables, emu8086, and \"The small building\": from a story to a truth table, a function and a gate map."
  },
  "timeline": [
    {
      "kind": "board",
      "title": {
        "he": "מה זה שער לוגי",
        "ru": "Что такое логический вентиль (שער לוגי)",
        "en": "What a logic gate is"
      },
      "text": {
        "he": "שער לוגי הוא רכיב שמקבל כניסות (קלט) ונותן יציאה אחת (פלט). כל כניסה ויציאה היא ערך בוליאני: true או false, כלומר 1 או 0.\nבלוח: יחידה לוגית עם כניסות A ו־B ויציאה 0 או 1. בתוך המעבד (CPU) יש ALU — Arithmetic Logic Unit, יחידה שעושה חשבון ולוגיקה, ובתוכה ADDER — המחבר. כולם בנויים משערים כאלה.",
        "ru": "Логический вентиль (שער לוגי) — деталь, которая получает входы и даёт один выход. Каждый вход и выход — логическое (булево) значение: true или false, то есть 1 или 0.\nНа доске: логический блок с входами A и B и выходом 0 или 1. Внутри процессора (CPU) есть ALU — Arithmetic Logic Unit, блок арифметики и логики, а в нём ADDER — сумматор. Всё это собрано из таких вентилей.",
        "en": "A logic gate is a part that takes inputs and gives one output. Every input and output is a boolean value: true or false, that is 1 or 0.\nOn the board: a logic unit with inputs A and B and an output of 0 or 1. Inside the processor (CPU) there is an ALU — Arithmetic Logic Unit, the unit for arithmetic and logic, and inside it an ADDER. All of them are built from such gates."
      },
      "math": [
        "A ─┐",
        "   ├─[ gate ]── 0 / 1",
        "B ─┘"
      ],
      "why": {
        "he": "טבלת אמת כותבת לכל צירוף של כניסות מה יוצא. לשתי כניסות יש 4 צירופים (`2² = 4`), לשלוש כניסות 8 (`2³ = 8`).",
        "ru": "Таблица истинности (טבלת אמת) записывает для каждого сочетания входов, что получится на выходе. Для двух входов 4 сочетания (`2² = 4`), для трёх — 8 (`2³ = 8`).",
        "en": "A truth table writes down what comes out for every combination of inputs. Two inputs have 4 combinations (`2² = 4`), three inputs have 8 (`2³ = 8`)."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "1. שער AND — כפל לוגי",
        "ru": "1. Вентиль AND — логическое умножение",
        "en": "1. The AND gate — logical multiplication"
      },
      "text": {
        "he": "היציאה 1 רק כששתי הכניסות 1. זה כמו כפל: אם יש 0 אחד, התוצאה 0. כותבים `A × B` או `AB`.",
        "ru": "Выход 1, только когда оба входа 1. Это как умножение: если есть хоть один 0, результат 0. Пишут `A × B` или `AB`.",
        "en": "The output is 1 only when both inputs are 1. It is like multiplication: one 0 makes the result 0. Written `A × B` or `AB`."
      },
      "math": [
        "A | B | A and B",
        "0 | 0 | 0",
        "0 | 1 | 0",
        "1 | 0 | 0",
        "1 | 1 | 1"
      ],
      "why": {
        "he": "למה קוראים לזה \"כפל\"? כי הטבלה זהה ללוח הכפל של 0 ו־1: `0 × 0 = 0`, `0 × 1 = 0`, `1 × 1 = 1`. בחיים: נורה עם שני מתגים בטור דולקת רק כששניהם סגורים.",
        "ru": "Почему это называют «умножением»? Таблица совпадает с таблицей умножения для 0 и 1: `0 × 0 = 0`, `0 × 1 = 0`, `1 × 1 = 1`. В жизни: лампочка с двумя выключателями подряд горит, только когда включены оба.",
        "en": "Why is it called \"multiplication\"? The table matches the times table for 0 and 1: `0 × 0 = 0`, `0 × 1 = 0`, `1 × 1 = 1`. In life: a bulb with two switches in a row lights only when both are on."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "2. שער OR — חיבור לוגי",
        "ru": "2. Вентиль OR — логическое сложение",
        "en": "2. The OR gate — logical addition"
      },
      "text": {
        "he": "היציאה 1 כשלפחות כניסה אחת היא 1. כותבים `A + B`.\nשימו לב: כאן `1 + 1 = 1`. זה לא חיבור בינארי (שם `1 + 1 = 10`), אלא \"לפחות אחד דולק\".",
        "ru": "Выход 1, когда хотя бы один вход 1. Пишут `A + B`.\nВнимание: здесь `1 + 1 = 1`. Это не двоичное сложение (там `1 + 1 = 10`), а «хотя бы один включён».",
        "en": "The output is 1 when at least one input is 1. Written `A + B`.\nNote: here `1 + 1 = 1`. This is not binary addition (where `1 + 1 = 10`), but \"at least one is on\"."
      },
      "math": [
        "A | B | A or B",
        "0 | 0 | 0",
        "0 | 1 | 1",
        "1 | 0 | 1",
        "1 | 1 | 1"
      ],
      "why": {
        "he": "למה `1 + 1 = 1`? כי 1 כאן הוא לא כמות אלא \"כן/דולק\". \"דולק או דולק\" זה עדיין \"דולק\". בחיים: נורה עם שני מתגים במקביל דולקת אם לפחות אחד סגור.",
        "ru": "Почему `1 + 1 = 1`? Потому что 1 здесь не количество, а «да/включено». «Включено или включено» — это всё ещё «включено». В жизни: лампочка с двумя выключателями рядом горит, если включён хотя бы один.",
        "en": "Why `1 + 1 = 1`? Because 1 here is not an amount but \"yes/on\". \"On or on\" is still \"on\". In life: a bulb with two switches side by side lights if at least one is on."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "3. שער NOT — היפוך",
        "ru": "3. Вентиль NOT — инверсия",
        "en": "3. The NOT gate — inverting"
      },
      "text": {
        "he": "כניסה אחת. הוא הופך: 0 נהיה 1, ו־1 נהיה 0. כותבים קו מעל האות: `Ā` (קוראים \"A בר\" / \"לא A\").",
        "ru": "Один вход. Он переворачивает: 0 становится 1, а 1 становится 0. Пишут черту над буквой: `Ā` («не A»).",
        "en": "One input. It flips: 0 becomes 1, and 1 becomes 0. Written with a bar over the letter: `Ā` (\"not A\")."
      },
      "math": [
        "A → Ā",
        "0 → 1",
        "1 → 0"
      ],
      "why": {
        "he": "למה צריך NOT? הרבה תנאים הם \"לא\": \"המעלית עוצרת כשמשפחה A לא רוצה…\". בלי NOT אי אפשר לכתוב את `Ā` בפונקציה.",
        "ru": "Зачем нужен NOT? Многие условия — с «не»: «когда семья A не хочет…». Без NOT нельзя записать `Ā` в функции.",
        "en": "Why do we need NOT? Many conditions have a \"not\": \"when family A does not want…\". Without NOT you cannot write `Ā` in a function."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "`4–5`. NAND ו־NOR — עם עיגול ביציאה",
        "ru": "4–5. NAND и NOR — с кружком на выходе",
        "en": "4–5. NAND and NOR — with a circle at the output"
      },
      "text": {
        "he": "NAND = Not AND: קודם AND, ואז הופכים. NOR = Not OR: קודם OR, ואז הופכים. בציור השער העיגול הקטן ביציאה פירושו NOT.",
        "ru": "NAND = Not AND: сначала AND, потом переворачиваем. NOR = Not OR: сначала OR, потом переворачиваем. На рисунке вентиля маленький кружок на выходе означает NOT.",
        "en": "NAND = Not AND: first AND, then flip. NOR = Not OR: first OR, then flip. In the gate drawing the small circle at the output means NOT."
      },
      "math": [
        "A B | NAND | NOR",
        "0 0 |  1   |  1",
        "0 1 |  1   |  0",
        "1 0 |  1   |  0",
        "1 1 |  0   |  0"
      ],
      "why": {
        "he": "NAND הפוך בדיוק מ־AND בכל שורה, ו־NOR הפוך בדיוק מ־OR. מספיק לזכור AND ו־OR ולהפוך.",
        "ru": "NAND в каждой строке ровно наоборот от AND, а NOR — ровно наоборот от OR. Достаточно помнить AND и OR и перевернуть.",
        "en": "NAND is exactly the opposite of AND in every row, and NOR is exactly the opposite of OR. Remember AND and OR and flip them."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "6. XOR — \"או זה או זה, אבל לא שניהם\"",
        "ru": "6. XOR — «или то, или другое, но не оба»",
        "en": "6. XOR — \"this or that, but not both\""
      },
      "text": {
        "he": "Exclusive OR. היציאה 1 כשהכניסות שונות זו מזו. כששתיהן 1, היציאה 0. כותבים `A ⊕ B`.",
        "ru": "Exclusive OR (исключающее ИЛИ). Выход 1, когда входы разные. Когда оба 1, выход 0. Пишут `A ⊕ B`.",
        "en": "Exclusive OR. The output is 1 when the inputs differ. When both are 1, the output is 0. Written `A ⊕ B`."
      },
      "math": [
        "A | B | A xor B",
        "0 | 0 | 0",
        "0 | 1 | 1",
        "1 | 0 | 1",
        "1 | 1 | 0"
      ],
      "why": {
        "he": "איפה XOR שימושי? בחיבור בינארי: הספרה שנכתבת בטור היא בדיוק `A ⊕ B` (`1 + 1 = 10`, כותבים 0), וההעברה היא `A × B`. כך ה־ADDER במעבד בנוי.",
        "ru": "Где пригождается XOR? В двоичном сложении: цифра, которую пишем в столбике, — это ровно `A ⊕ B` (`1 + 1 = 10`, пишем 0), а перенос — `A × B`. Так устроен ADDER в процессоре.",
        "en": "Where is XOR useful? In binary addition: the digit written in the column is exactly `A ⊕ B` (`1 + 1 = 10`, write 0), and the carry is `A × B`. That is how the ADDER in the CPU is built."
      }
    },
    {
      "kind": "talk",
      "title": {
        "he": "emu8086",
        "ru": "emu8086",
        "en": "emu8086"
      },
      "text": {
        "he": "על הלוח נכתב \"הרצה emu8086\". זו תוכנה שמדמה את המעבד 8086 של Intel: אפשר לכתוב בה פקודות אסמבלי ולראות איך המעבד מריץ אותן צעד אחר צעד.\nבתחילת השיעור המרצה ביקשה להוריד את התוכנה (האייקון ירוק): \"זה כלי\", ומתחילים לעבוד איתה כבר מהשבוע. לא לומדים את זה כדי להיות מתכנתי אסמבלי, אלא כדי להבין מה קורה בתוך המעבד.",
        "ru": "На доске было написано «הרצה emu8086» (запуск emu8086). Это программа, которая изображает процессор Intel 8086: в ней можно писать команды ассемблера и смотреть, как процессор выполняет их шаг за шагом.\nВ начале урока преподавательница попросила скачать эту программу (значок зелёный): «это инструмент», работать с ней начинаем уже с этой недели. Учим это не для того, чтобы стать программистами на ассемблере, а чтобы понять, что происходит внутри процессора.",
        "en": "The board said \"הרצה emu8086\" (running emu8086). It is a program that imitates the Intel 8086 processor: you can write assembly commands in it and watch the processor run them step by step.\nAt the start of the lesson the teacher asked us to download it (the icon is green): \"it is a tool\", and we start working with it this week. We do not learn it to become assembly programmers, but to understand what happens inside the CPU."
      },
      "why": {
        "he": "למה מראים אותו בקורס? כי בסוף הקורס לומדים אסמבלי (זה בתוכנית הקורס מהשיעור הראשון), ו־emu8086 מאפשר לראות איך פקודות קטנות רצות בתוך המעבד.",
        "ru": "Зачем его показали? В конце курса будет ассемблер (это есть в плане курса с первого урока), а emu8086 позволяет увидеть, как маленькие команды выполняются внутри процессора.",
        "en": "Why was it shown? The course ends with assembly (it is in the course plan from the first lesson), and emu8086 lets you see small commands run inside the CPU."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "\"הבניין הקטן\": בונים מעגל מתוך סיפור",
        "ru": "«Маленький дом»: строим схему из истории",
        "en": "\"The small building\": building a circuit from a story"
      },
      "text": {
        "he": "בבניין 8 קומות (`0–7`), ובכל קומה 3 משפחות. המעלית עוצרת בקומה רק אם לפחות 2 משפחות רוצות שתעצור (רוב).\nהשלבים:\nא. טבלת אמת: 3 משתנים A, B, C → `2³ = 8` שורות.\nב. לכל שורה רושמים 0 או 1: האם המעלית עוצרת?\nג. מסמנים את השורות שבהן 1.\nד. כותבים את הפונקציה: לכל שורה עם 1 — מכפלה של 3 אותיות (אות עם קו מעליה אם היא 0), ובין המכפלות `+`.",
        "ru": "В доме 8 этажей (0–7), на каждом этаже 3 семьи. Лифт останавливается на этаже, только если хотя бы 2 семьи этого хотят (большинство).\nШаги:\nא. Таблица истинности: 3 переменные A, B, C → `2³ = 8` строк.\nב. Для каждой строки пишем 0 или 1: остановится ли лифт?\nג. Отмечаем строки, где 1.\nד. Пишем функцию: для каждой строки с 1 — произведение 3 букв (буква с чертой, если она 0), а между произведениями `+`.",
        "en": "A building has 8 floors (0–7), and each floor has 3 families. The elevator stops on a floor only if at least 2 families want it to (a majority).\nThe steps:\nא. A truth table: 3 variables A, B, C → `2³ = 8` rows.\nב. For each row write 0 or 1: does the elevator stop?\nג. Mark the rows with 1.\nד. Write the function: for each row with 1 — a product of 3 letters (a letter with a bar if it is 0), with `+` between the products."
      },
      "math": [
        "A B C | f",
        "0 0 0 | 0",
        "0 0 1 | 0",
        "0 1 0 | 0",
        "0 1 1 | 1",
        "1 0 0 | 0",
        "1 0 1 | 1",
        "1 1 0 | 1",
        "1 1 1 | 1",
        "",
        "f(A,B,C) = ĀBC + AB̄C + ABC̄ + ABC"
      ],
      "why": {
        "he": "כל מכפלה \"תופסת\" בדיוק שורה אחת: `ĀBC` שווה 1 רק כש־`A = 0, B = 1, C = 1`. ה־`+` (OR) אוסף את כל השורות האלה יחד. מזה בונים מפת שערים: 4 שערי AND (עם NOT לפני האותיות עם קו) נכנסים לשער OR אחד.",
        "ru": "Каждое произведение «ловит» ровно одну строку: `ĀBC` равно 1, только когда `A = 0`, `B = 1`, `C = 1`. `+` (OR) собирает все эти строки вместе. Из этого строят карту вентилей: 4 вентиля AND (с NOT перед буквами с чертой) входят в один вентиль OR.",
        "en": "Each product \"catches\" exactly one row: `ĀBC` is 1 only when `A = 0`, `B = 1`, `C = 1`. The `+` (OR) collects all those rows together. From this you build the gate map: 4 AND gates (with NOT before the barred letters) go into one OR gate."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "דוגמה 2: \"המספר זוגי\" — יוצא `C̄`",
        "ru": "Пример 2: «число чётное» — получается `C̄`",
        "en": "Example 2: \"the number is even\" — it comes out as `C̄`"
      },
      "text": {
        "he": "בדוגמה השנייה `f = 1` בשורות `0, 2, 4, 6`. לפי אותה שיטה: `f = ĀB̄C̄ + ĀBC̄ + AB̄C̄ + ABC̄`.\nבכל ארבע השורות `C = 0`, ובכל השורות האחרות `C = 1`. לכן כל הפונקציה היא פשוט `C̄`: שער NOT אחד.\nזו הפונקציה \"המספר זוגי\": `0, 2, 4, 6` הם המספרים הזוגיים. בבינארי מספר זוגי תמיד נגמר ב־0, ו־C היא הספרה האחרונה.",
        "ru": "Во втором примере `f = 1` в строках 0, 2, 4, 6. Тем же способом: `f = ĀB̄C̄ + ĀBC̄ + AB̄C̄ + ABC̄`.\nВо всех четырёх строках `C = 0`, а во всех остальных `C = 1`. Значит, вся функция — просто `C̄`: один вентиль NOT.\nЭто функция «число чётное»: 0, 2, 4, 6 — чётные числа. В двоичной записи чётное число всегда кончается на 0, а C — последняя цифра.",
        "en": "In the second example `f = 1` in rows 0, 2, 4, 6. The same way: `f = ĀB̄C̄ + ĀBC̄ + AB̄C̄ + ABC̄`.\nIn all four rows `C = 0`, and in all the other rows `C = 1`. So the whole function is simply `C̄`: one NOT gate.\nThis is the function \"the number is even\": 0, 2, 4, 6 are the even numbers. In binary an even number always ends in 0, and C is the last digit."
      },
      "why": {
        "he": "למה זה חשוב? פונקציה ארוכה = הרבה שערים = מעגל יקר ואיטי יותר. אם רואים שכל השורות עם 1 חולקות דבר אחד (כאן `C = 0`), מקצרים את כל הפונקציה לשער אחד.",
        "ru": "Почему это важно? Длинная функция = много вентилей = схема дороже и медленнее. Если видно, что у всех строк с 1 есть что-то общее (здесь `C = 0`), всю функцию сокращают до одного вентиля.",
        "en": "Why does it matter? A long function = many gates = a costlier, slower circuit. If you see that all rows with 1 share one thing (here `C = 0`), the whole function shrinks to one gate."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "דוגמה 3: תנאי קבלה ללימודים",
        "ru": "Пример 3: условия приёма на учёбу",
        "en": "Example 3: admission conditions"
      },
      "text": {
        "he": "מתקבלים אם: פסיכומטרי מעל 700 או בגרות מעל 80, וגם תנאי נוסף C שחייב להתקיים.\n• `A` — פסיכומטרי מעל 700\n• `B` — בגרות מעל 80\n• `C` — התנאי הנוסף\nהפונקציה:\n`f = (A + B) × C`\nהתרחישים מהשיעור: פסיכומטרי 600 ובגרות 85, ו־C מתקיים → `(0 + 1) × 1 = 1` — מתקבלים. פסיכומטרי 701 ובגרות 89, אבל C לא מתקיים → `(1 + 1) × 0 = 0` — לא מתקבלים.",
        "ru": "Принимают, если: психометрия больше 700 или багрут больше 80, и при этом обязательно выполнено ещё одно условие C.\n• `A` — психометрия больше 700\n• `B` — багрут больше 80\n• `C` — дополнительное условие\nФункция:\n`f = (A + B) × C`\nСценарии с урока: психометрия 600 и багрут 85, C выполнено → `(0 + 1) × 1 = 1` — приняли. Психометрия 701 и багрут 89, но C не выполнено → `(1 + 1) × 0 = 0` — не приняли.",
        "en": "You are admitted if: psychometric above 700 or bagrut above 80, and another condition C must also hold.\n• `A` — psychometric above 700\n• `B` — bagrut above 80\n• `C` — the extra condition\nThe function:\n`f = (A + B) × C`\nThe scenarios from class: psychometric 600 and bagrut 85, C holds → `(0 + 1) × 1 = 1` — admitted. Psychometric 701 and bagrut 89, but C does not hold → `(1 + 1) × 0 = 0` — not admitted."
      },
      "why": {
        "he": "למה סוגריים? \"או\" (`+`) צריך לקרות לפני ה\"וגם\" (`×`), כמו בחשבון: `(0 + 1) × 1`. בלי סוגריים `A + B × C` אומר משהו אחר: מספיק פסיכומטרי מעל 700 גם בלי C. ושימו לב: \"מעל 700\" לא כולל 700 עצמו — מי שקיבל בדיוק 700, אצלו `A = 0`. בטבלת האמת יוצא 1 רק בשורות `011, 101, 111`.",
        "ru": "Зачем скобки? «Или» (`+`) должно сработать раньше «и» (`×`), как в арифметике: `(0 + 1) × 1`. Без скобок `A + B × C` значит другое: хватит психометрии выше 700 даже без C. И внимание: «больше 700» не включает само 700 — у того, кто получил ровно 700, `A = 0`. В таблице истинности 1 выходит только в строках `011, 101, 111`.",
        "en": "Why brackets? \"Or\" (`+`) must happen before \"and\" (`×`), as in arithmetic: `(0 + 1) × 1`. Without brackets `A + B × C` means something else: psychometric above 700 would be enough even without C. And note: \"above 700\" does not include 700 itself — whoever got exactly 700 has `A = 0`. In the truth table 1 comes out only in the rows `011, 101, 111`."
      }
    },
    {
      "kind": "talk",
      "title": {
        "he": "תרגיל 2 ותרגיל הפוך",
        "ru": "Упражнение 2 и обратное упражнение",
        "en": "Exercise 2 and the reverse exercise"
      },
      "text": {
        "he": "על הלוח היה גם תרגיל עם מזגן ו־3 משתנים (טמפרטורה מעל 30° ועוד תנאים) באותם שלבים: 1. טבלת אמת של `2³` שורות. 2. לחלץ פונקציה. 3. לצייר מפת שערים.\nוהתרגיל ההפוך: \"לפניך מפת שערים — חלץ פונקציה והצג אותה בטבלת אמת\". כאן הולכים מהציור לטבלה: לכל שורה מציבים את A, B, C ועוברים שער אחרי שער.",
        "ru": "На доске было ещё упражнение с кондиционером и 3 переменными (температура выше 30° и другие условия) по тем же шагам: 1. Таблица истинности на `2³` строк. 2. Вывести функцию. 3. Нарисовать карту вентилей.\nИ обратное упражнение: «Перед тобой карта вентилей — выведи функцию и покажи её таблицей истинности». Здесь идут от рисунка к таблице: для каждой строки подставляют A, B, C и проходят вентиль за вентилем.",
        "en": "The board also had an exercise with an air conditioner and 3 variables (temperature above 30° and other conditions) with the same steps: 1. A truth table of `2³` rows. 2. Extract the function. 3. Draw the gate map.\nAnd the reverse exercise: \"Here is a gate map — extract the function and show it as a truth table\". Here you go from the drawing to the table: for each row put in A, B, C and go gate by gate."
      },
      "why": {
        "he": "איך עושים את התרגיל ההפוך? בונים טבלת אמת ריקה של 8 שורות, ולכל שורה מציבים A, B, C בציור, וכותבים מעל כל חוט 0 או 1, משמאל לימין, עד היציאה. זו אותה עבודה כמו \"מה התוכנית תדפיס\" ב־Java.",
        "ru": "Как делать обратное упражнение? Строим пустую таблицу истинности на 8 строк, для каждой строки подставляем A, B, C в рисунок и над каждым проводом пишем 0 или 1, слева направо, до выхода. Это та же работа, что «что напечатает программа» в Java.",
        "en": "How to do the reverse exercise? Build an empty 8-row truth table, put A, B, C into the drawing for each row, and write 0 or 1 above every wire, left to right, up to the output. It is the same work as \"what does the program print\" in Java."
      }
    }
  ],
  "review": [
    {
      "title": {
        "he": "AND",
        "ru": "AND",
        "en": "AND"
      },
      "text": {
        "he": "1 רק כששתי הכניסות 1. `0001`",
        "ru": "1, только когда оба входа 1. `0001`",
        "en": "1 only when both inputs are 1. `0001`"
      }
    },
    {
      "title": {
        "he": "OR",
        "ru": "OR",
        "en": "OR"
      },
      "text": {
        "he": "1 כשלפחות אחת 1. `0111`, וכאן `1 + 1 = 1`.",
        "ru": "1, когда хотя бы один 1. `0111`, и здесь `1 + 1 = 1`.",
        "en": "1 when at least one is 1. `0111`, and here `1 + 1 = 1`."
      }
    },
    {
      "title": {
        "he": "NOT",
        "ru": "NOT",
        "en": "NOT"
      },
      "text": {
        "he": "הופך: `0 → 1`, `1 → 0`. כותבים `Ā`.",
        "ru": "Переворачивает: `0 → 1`, `1 → 0`. Пишут `Ā`.",
        "en": "Flips: `0 → 1`, `1 → 0`. Written `Ā`."
      }
    },
    {
      "title": {
        "he": "NAND, NOR",
        "ru": "NAND, NOR",
        "en": "NAND, NOR"
      },
      "text": {
        "he": "ההפך של AND (`1110`) וההפך של OR (`1000`). עיגול ביציאה = NOT.",
        "ru": "Наоборот от AND (`1110`) и наоборот от OR (`1000`). Кружок на выходе = NOT.",
        "en": "The opposite of AND (`1110`) and of OR (`1000`). A circle at the output = NOT."
      }
    },
    {
      "title": {
        "he": "XOR",
        "ru": "XOR",
        "en": "XOR"
      },
      "text": {
        "he": "1 כשהכניסות שונות. `0110`",
        "ru": "1, когда входы разные. `0110`",
        "en": "1 when the inputs differ. `0110`"
      }
    },
    {
      "title": {
        "he": "מסיפור לפונקציה",
        "ru": "От истории к функции",
        "en": "From a story to a function"
      },
      "text": {
        "he": "טבלת אמת → שורות עם 1 → מכפלה לכל שורה (קו מעל אות שהיא 0) → `+` ביניהן.",
        "ru": "Таблица истинности → строки с 1 → произведение на каждую строку (черта над буквой, которая 0) → `+` между ними.",
        "en": "Truth table → rows with 1 → a product for each row (a bar over a letter that is 0) → `+` between them."
      }
    }
  ],
  "tasks": {
    "groups": {
      "gates": {
        "he": "ששת השערים מהלוח",
        "ru": "Шесть вентилей с доски",
        "en": "The six gates from the board"
      },
      "build": {
        "he": "הבניין הקטן ודוגמה 2",
        "ru": "Маленький дом и пример 2",
        "en": "The small building and example 2"
      }
    },
    "teacher": [
      {
        "id": "g1",
        "group": "gates",
        "label": {
          "he": "AND",
          "ru": "AND",
          "en": "AND"
        },
        "kind": "text",
        "text": {
          "he": "מה עמודת היציאה של שער AND? כתבו את עמודת היציאה מלמעלה למטה, לשורות `00, 01, 10, 11` (ארבע ספרות, למשל `0101`).",
          "ru": "Какой столбец выхода у вентиля AND? Напиши столбец выхода сверху вниз для строк `00, 01, 10, 11` (четыре цифры, например `0101`).",
          "en": "What is the output column of the AND gate? Write the output column from top to bottom for the rows `00, 01, 10, 11` (four digits, e.g. `0101`)."
        },
        "example": {
          "he": "שער OR: `0 + 0 = 0`, `0 + 1 = 1`, `1 + 0 = 1`, `1 + 1 = 1` → העמודה `0111`.",
          "ru": "Вентиль OR: `0 + 0 = 0`, `0 + 1 = 1`, `1 + 0 = 1`, `1 + 1 = 1` → столбец `0111`.",
          "en": "The OR gate: `0 + 0 = 0`, `0 + 1 = 1`, `1 + 0 = 1`, `1 + 1 = 1` → the column `0111`."
        },
        "answer": {
          "accept": [
            "0001",
            "0 0 0 1",
            "0,0,0,1",
            "0, 0, 0, 1"
          ]
        },
        "hints": [
          {
            "he": "AND = כפל: כמה זה `0 × 1`?",
            "ru": "AND = умножение: сколько будет `0 × 1`?",
            "en": "AND = multiplication: what is `0 × 1`?"
          }
        ],
        "solution": [
          "0 × 0 = 0",
          "0 × 1 = 0",
          "1 × 0 = 0",
          "1 × 1 = 1",
          {
            "he": "תשובה: 0001",
            "ru": "Ответ: 0001",
            "en": "Answer: 0001"
          }
        ]
      },
      {
        "id": "g2",
        "group": "gates",
        "label": {
          "he": "NAND",
          "ru": "NAND",
          "en": "NAND"
        },
        "kind": "text",
        "text": {
          "he": "מה עמודת היציאה של שער NAND? כתבו את עמודת היציאה מלמעלה למטה, לשורות `00, 01, 10, 11` (ארבע ספרות, למשל `0101`).",
          "ru": "Какой столбец выхода у вентиля NAND? Напиши столбец выхода сверху вниз для строк `00, 01, 10, 11` (четыре цифры, например `0101`).",
          "en": "What is the output column of the NAND gate? Write the output column from top to bottom for the rows `00, 01, 10, 11` (four digits, e.g. `0101`)."
        },
        "example": {
          "he": "בדיקה חלקית של שורה אחת: `A = 1, B = 1` → `AND = 1` → העיגול הופך → `NAND = 0`. זו השורה האחרונה בעמודה.",
          "ru": "Частичная проверка одной строки: `A = 1`, `B = 1` → `AND = 1` → кружок переворачивает → `NAND = 0`. Это последняя строка столбца.",
          "en": "A partial check of one row: `A = 1`, `B = 1` → `AND = 1` → the circle flips it → `NAND = 0`. That is the last row of the column."
        },
        "answer": {
          "accept": [
            "1110",
            "1 1 1 0",
            "1,1,1,0",
            "1, 1, 1, 0"
          ]
        },
        "hints": [
          {
            "he": "קודם AND (`0001`), ואז הופכים כל ספרה.",
            "ru": "Сначала AND (`0001`), потом переворачиваем каждую цифру.",
            "en": "First AND (`0001`), then flip every digit."
          }
        ],
        "solution": [
          "AND:  0 0 0 1",
          "NOT:  1 1 1 0",
          {
            "he": "תשובה: 1110",
            "ru": "Ответ: 1110",
            "en": "Answer: 1110"
          }
        ]
      },
      {
        "id": "g3",
        "group": "gates",
        "label": {
          "he": "NOR",
          "ru": "NOR",
          "en": "NOR"
        },
        "kind": "text",
        "text": {
          "he": "מה עמודת היציאה של שער NOR? כתבו את עמודת היציאה מלמעלה למטה, לשורות `00, 01, 10, 11` (ארבע ספרות, למשל `0101`).",
          "ru": "Какой столбец выхода у вентиля NOR? Напиши столбец выхода сверху вниз для строк `00, 01, 10, 11` (четыре цифры, например `0101`).",
          "en": "What is the output column of the NOR gate? Write the output column from top to bottom for the rows `00, 01, 10, 11` (four digits, e.g. `0101`)."
        },
        "example": {
          "he": "בדיקה חלקית: `A = 0, B = 1` → `OR = 1` → הופכים → `NOR = 0`. זו השורה השנייה בעמודה.",
          "ru": "Частичная проверка: `A = 0`, `B = 1` → `OR = 1` → переворачиваем → `NOR = 0`. Это вторая строка столбца.",
          "en": "A partial check: `A = 0`, `B = 1` → `OR = 1` → flip → `NOR = 0`. That is the second row of the column."
        },
        "answer": {
          "accept": [
            "1000",
            "1 0 0 0",
            "1,0,0,0",
            "1, 0, 0, 0"
          ]
        },
        "hints": [
          {
            "he": "קודם OR, ואז הופכים.",
            "ru": "Сначала OR, потом переворачиваем.",
            "en": "First OR, then flip."
          }
        ],
        "solution": [
          "OR:   0 1 1 1",
          "NOT:  1 0 0 0",
          {
            "he": "תשובה: 1000",
            "ru": "Ответ: 1000",
            "en": "Answer: 1000"
          }
        ]
      },
      {
        "id": "g4",
        "group": "gates",
        "label": {
          "he": "XOR",
          "ru": "XOR",
          "en": "XOR"
        },
        "kind": "text",
        "text": {
          "he": "מה עמודת היציאה של שער XOR? כתבו את עמודת היציאה מלמעלה למטה, לשורות `00, 01, 10, 11` (ארבע ספרות, למשל `0101`).",
          "ru": "Какой столбец выхода у вентиля XOR? Напиши столбец выхода сверху вниз для строк `00, 01, 10, 11` (четыре цифры, например `0101`).",
          "en": "What is the output column of the XOR gate? Write the output column from top to bottom for the rows `00, 01, 10, 11` (four digits, e.g. `0101`)."
        },
        "example": {
          "he": "בדיקה חלקית: `A = 1, B = 1` → שתיהן 1, \"אבל לא שניהם\" → `XOR = 0`.",
          "ru": "Частичная проверка: `A = 1`, `B = 1` → оба 1, «но не оба» → `XOR = 0`.",
          "en": "A partial check: `A = 1`, `B = 1` → both are 1, \"but not both\" → `XOR = 0`."
        },
        "answer": {
          "accept": [
            "0110",
            "0 1 1 0",
            "0,1,1,0",
            "0, 1, 1, 0"
          ]
        },
        "hints": [
          {
            "he": "1 רק כשהכניסות שונות.",
            "ru": "1, только когда входы разные.",
            "en": "1 only when the inputs differ."
          }
        ],
        "solution": [
          "0 0 → 0",
          "0 1 → 1",
          "1 0 → 1",
          "1 1 → 0",
          {
            "he": "תשובה: 0110",
            "ru": "Ответ: 0110",
            "en": "Answer: 0110"
          }
        ]
      },
      {
        "id": "g5",
        "group": "gates",
        "label": {
          "he": "1 + 1 ב־OR",
          "ru": "1 + 1 в OR",
          "en": "1 + 1 in OR"
        },
        "kind": "number",
        "text": {
          "he": "בשער OR (חיבור לוגי), כמה זה `1 + 1`?",
          "ru": "В вентиле OR (логическое сложение) сколько будет `1 + 1`?",
          "en": "In the OR gate (logical addition), what is `1 + 1`?"
        },
        "example": {
          "he": "בחיבור בינארי רגיל (שיעור 05.11) `1 + 1 = 10₂`: כותבים 0 ומעבירים 1. בלוגיקה זה אחרת.",
          "ru": "В обычном двоичном сложении (урок 05.11) `1 + 1 = 10₂`: пишем 0 и переносим 1. В логике по-другому.",
          "en": "In ordinary binary addition (lesson 05.11) `1 + 1 = 10₂`: write 0 and carry 1. In logic it is different."
        },
        "answer": {
          "value": "1"
        },
        "hints": [
          {
            "he": "OR שואל: האם לפחות אחת מהכניסות 1?",
            "ru": "OR спрашивает: хотя бы один вход равен 1?",
            "en": "OR asks: is at least one input 1?"
          }
        ],
        "solution": [
          "1 OR 1 = 1",
          {
            "he": "תשובה: 1",
            "ru": "Ответ: 1",
            "en": "Answer: 1"
          }
        ]
      },
      {
        "id": "g6",
        "group": "gates",
        "label": {
          "he": "מעגל קטן",
          "ru": "Маленькая схема",
          "en": "A small circuit"
        },
        "kind": "number",
        "text": {
          "he": "`A = 1, B = 0, C = 1`. קודם `A AND B`, ואת היציאה מכניסים ל־OR יחד עם C. מה היציאה הסופית?",
          "ru": "`A = 1`, `B = 0`, `C = 1`. Сначала `A AND B`, а его выход идёт в OR вместе с C. Какой итоговый выход?",
          "en": "`A = 1`, `B = 0`, `C = 1`. First `A AND B`, and its output goes into OR together with C. What is the final output?"
        },
        "example": {
          "he": "אותו מעגל עם `A = 0, B = 1, C = 0` → `0 AND 1 = 0` → `0 OR 0 = 0` → היציאה 0.",
          "ru": "Та же схема с `A = 0`, `B = 1`, `C = 0` → `0 AND 1 = 0` → `0 OR 0 = 0` → выход 0.",
          "en": "The same circuit with `A = 0`, `B = 1`, `C = 0` → `0 AND 1 = 0` → `0 OR 0 = 0` → the output is 0."
        },
        "answer": {
          "value": "1"
        },
        "hints": [
          {
            "he": "שער אחרי שער: קודם AND.",
            "ru": "Вентиль за вентилем: сначала AND.",
            "en": "Gate by gate: AND first."
          }
        ],
        "solution": [
          "1 AND 0 = 0",
          "0 OR 1 = 1",
          {
            "he": "תשובה: 1",
            "ru": "Ответ: 1",
            "en": "Answer: 1"
          }
        ]
      },
      {
        "id": "g7",
        "group": "gates",
        "label": {
          "he": "כמה שורות?",
          "ru": "Сколько строк?",
          "en": "How many rows?"
        },
        "kind": "number",
        "text": {
          "he": "כמה שורות יש בטבלת אמת עם 3 כניסות A, B, C?",
          "ru": "Сколько строк в таблице истинности с 3 входами A, B, C?",
          "en": "How many rows does a truth table with 3 inputs A, B, C have?"
        },
        "example": {
          "he": "לשתי כניסות A, B: `2² = 4` שורות: `00, 01, 10, 11`.",
          "ru": "Для двух входов A, B: `2² = 4` строки: `00, 01, 10, 11`.",
          "en": "For two inputs A, B: `2² = 4` rows: `00, 01, 10, 11`."
        },
        "answer": {
          "value": "8"
        },
        "hints": [
          {
            "he": "כל כניסה מכפילה את מספר השורות פי 2.",
            "ru": "Каждый вход удваивает число строк.",
            "en": "Each input doubles the number of rows."
          }
        ],
        "solution": [
          "2³ = 2 × 2 × 2 = 8",
          {
            "he": "תשובה: 8",
            "ru": "Ответ: 8",
            "en": "Answer: 8"
          }
        ]
      },
      {
        "id": "b1",
        "group": "build",
        "label": {
          "he": "כמה שורות עם 1?",
          "ru": "Сколько строк с 1?",
          "en": "How many rows with 1?"
        },
        "kind": "number",
        "text": {
          "he": "בתרגיל \"הבניין הקטן\" המעלית עוצרת אם לפחות 2 מתוך 3 משפחות (A, B, C) רוצות. בכמה שורות מתוך 8 בטבלה `f = 1`?",
          "ru": "В задаче «Маленький дом» лифт останавливается, если хотя бы 2 из 3 семей (A, B, C) хотят. В скольких строках из 8 в таблице `f = 1`?",
          "en": "In \"The small building\" the elevator stops if at least 2 of the 3 families (A, B, C) want it. In how many of the 8 rows is `f = 1`?"
        },
        "example": {
          "he": "אילו המעלית הייתה עוצרת רק כשכל 3 המשפחות רוצות → רק השורה `111` → שורה אחת.",
          "ru": "Если бы лифт останавливался, только когда хотят все 3 семьи → только строка `111` → одна строка.",
          "en": "If the elevator stopped only when all 3 families want it → only the row `111` → one row."
        },
        "answer": {
          "value": "4"
        },
        "hints": [
          {
            "he": "ספרו בכל שורה כמה אחדות יש.",
            "ru": "Посчитай в каждой строке, сколько единиц.",
            "en": "Count how many 1s are in each row."
          }
        ],
        "solution": [
          "011, 101, 110  →  2 ones",
          "111  →  3 ones",
          {
            "he": "תשובה: 4",
            "ru": "Ответ: 4",
            "en": "Answer: 4"
          }
        ]
      },
      {
        "id": "b2",
        "group": "build",
        "label": {
          "he": "איזו שורה?",
          "ru": "Какая строка?",
          "en": "Which row?"
        },
        "kind": "choice",
        "text": {
          "he": "בתרגיל \"הבניין הקטן\": באיזו שורה המעלית עוצרת (`f = 1`)?",
          "ru": "В задаче «Маленький дом»: в какой строке лифт останавливается (`f = 1`)?",
          "en": "In \"The small building\": in which row does the elevator stop (`f = 1`)?"
        },
        "options": [
          "001",
          "010",
          "100",
          "110"
        ],
        "example": {
          "he": "השורה `000`: אף משפחה לא רוצה → 0 מתוך 3 → המעלית לא עוצרת, `f = 0`.",
          "ru": "Строка `000`: ни одна семья не хочет → 0 из 3 → лифт не останавливается, `f = 0`.",
          "en": "The row `000`: no family wants it → 0 of 3 → the elevator does not stop, `f = 0`."
        },
        "answer": {
          "index": 3
        },
        "hints": [
          {
            "he": "צריך לפחות שני 1.",
            "ru": "Нужно хотя бы две единицы.",
            "en": "At least two 1s are needed."
          }
        ],
        "solution": [
          "001, 010, 100  →  one 1",
          "110  →  two 1s  →  f = 1",
          {
            "he": "תשובה: 110",
            "ru": "Ответ: 110",
            "en": "Answer: 110"
          }
        ]
      },
      {
        "id": "b3",
        "group": "build",
        "label": {
          "he": "מכפלה לשורה",
          "ru": "Произведение для строки",
          "en": "A product for a row"
        },
        "kind": "choice",
        "text": {
          "he": "איזו מכפלה בפונקציה של \"הבניין הקטן\" שייכת לשורה `A = 1, B = 0, C = 1`?",
          "ru": "Какое произведение в функции «Маленького дома» относится к строке `A = 1`, `B = 0`, `C = 1`?",
          "en": "Which product in the function of \"The small building\" belongs to the row `A = 1`, `B = 0`, `C = 1`?"
        },
        "options": [
          "ĀBC",
          "AB̄C",
          "ABC̄",
          "ABC"
        ],
        "example": {
          "he": "לשורה `A = 0, B = 1, C = 1`: האות שהיא 0 מקבלת קו → `ĀBC`.",
          "ru": "Для строки `A = 0`, `B = 1`, `C = 1`: буква, которая 0, получает черту → `ĀBC`.",
          "en": "For the row `A = 0`, `B = 1`, `C = 1`: the letter that is 0 gets a bar → `ĀBC`."
        },
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "איזו אות היא 0 בשורה הזאת?",
            "ru": "Какая буква в этой строке равна 0?",
            "en": "Which letter is 0 in this row?"
          }
        ],
        "solution": [
          "B = 0  →  B̄",
          {
            "he": "תשובה: AB̄C",
            "ru": "Ответ: AB̄C",
            "en": "Answer: AB̄C"
          }
        ]
      },
      {
        "id": "b4",
        "group": "build",
        "label": {
          "he": "דוגמה 2",
          "ru": "Пример 2",
          "en": "Example 2"
        },
        "kind": "choice",
        "text": {
          "he": "בדוגמה 2 `f = 1` בשורות `0, 2, 4, 6` (מתוך `0–7`). מה משותף לכל השורות האלה?",
          "ru": "В примере 2 `f = 1` в строках 0, 2, 4, 6 (из 0–7). Что общего у всех этих строк?",
          "en": "In example 2 `f = 1` in rows 0, 2, 4, 6 (of 0–7). What do all these rows have in common?"
        },
        "options": [
          "A = 0",
          "B = 0",
          "C = 0",
          "A = 1"
        ],
        "example": {
          "he": "אילו `f = 1` היה בשורות `4, 5, 6, 7` → `100, 101, 110, 111` → בכולן `A = 1` → `f = A`.",
          "ru": "Если бы `f = 1` было в строках 4, 5, 6, 7 → `100, 101, 110, 111` → во всех `A = 1` → `f = A`.",
          "en": "If `f = 1` were in rows 4, 5, 6, 7 → `100, 101, 110, 111` → all have `A = 1` → `f = A`."
        },
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "כתבו את מספרי השורות בבינארי בשלוש ספרות.",
            "ru": "Запиши номера строк в двоичной трёхзначной записи.",
            "en": "Write the row numbers in binary with three digits."
          },
          {
            "he": "הסתכלו על הספרה הימנית.",
            "ru": "Посмотри на правую цифру.",
            "en": "Look at the rightmost digit."
          }
        ],
        "solution": [
          "0 = 000, 2 = 010, 4 = 100, 6 = 110",
          "C = 0  →  f = C̄",
          {
            "he": "תשובה: C = 0",
            "ru": "Ответ: C = 0",
            "en": "Answer: C = 0"
          }
        ]
      },
      {
        "id": "b5",
        "group": "build",
        "label": {
          "he": "כמה שערי AND?",
          "ru": "Сколько вентилей AND?",
          "en": "How many AND gates?"
        },
        "kind": "number",
        "text": {
          "he": "במפת השערים של `f = ĀBC + AB̄C + ABC̄ + ABC` כל מכפלה היא שער AND, וכולם נכנסים ל־OR אחד. כמה שערי AND יש?",
          "ru": "В карте вентилей для `f = ĀBC + AB̄C + ABC̄ + ABC` каждое произведение — вентиль AND, и все они входят в один OR. Сколько вентилей AND?",
          "en": "In the gate map of `f = ĀBC + AB̄C + ABC̄ + ABC` each product is an AND gate, and they all go into one OR. How many AND gates are there?"
        },
        "example": {
          "he": "לפונקציה `f = ĀB + AB̄` (לא מהשיעור): 2 מכפלות → 2 שערי AND, ושניהם נכנסים ל־OR אחד.",
          "ru": "Для функции `f = ĀB + AB̄` (не с урока): 2 произведения → 2 вентиля AND, и оба входят в один OR.",
          "en": "For the function `f = ĀB + AB̄` (not from class): 2 products → 2 AND gates, both going into one OR."
        },
        "answer": {
          "value": "4"
        },
        "hints": [
          {
            "he": "ספרו את המכפלות בין סימני ה־`+`.",
            "ru": "Посчитай произведения между знаками `+`.",
            "en": "Count the products between the `+` signs."
          }
        ],
        "solution": [
          "ĀBC | AB̄C | ABC̄ | ABC",
          {
            "he": "תשובה: 4",
            "ru": "Ответ: 4",
            "en": "Answer: 4"
          }
        ]
      },
      {
        "id": "b6",
        "group": "build",
        "label": {
          "he": "תנאי קבלה",
          "ru": "Условия приёма",
          "en": "Admission conditions"
        },
        "kind": "text",
        "text": {
          "he": "`f = (A + B) × C` מדוגמה 3. כתבו את כל עמודת f לשורות `000` עד `111`, מלמעלה למטה (8 ספרות).",
          "ru": "`f = (A + B) × C` из примера 3. Напиши весь столбец f для строк от `000` до `111`, сверху вниз (8 цифр).",
          "en": "`f = (A + B) × C` from example 3. Write the whole f column for the rows `000` to `111`, top to bottom (8 digits)."
        },
        "example": {
          "he": "`f = A × B` (לא מהשיעור): 1 רק בשורות `110, 111` → `00000011`.",
          "ru": "`f = A × B` (не с урока): 1 только в строках `110, 111` → `00000011`.",
          "en": "`f = A × B` (not from class): 1 only in the rows `110, 111` → `00000011`."
        },
        "answer": {
          "accept": [
            "00010101",
            "0 0 0 1 0 1 0 1",
            "0,0,0,1,0,1,0,1",
            "0, 0, 0, 1, 0, 1, 0, 1"
          ]
        },
        "hints": [
          {
            "he": "כש־`C = 0`, f תמיד 0.",
            "ru": "Когда `C = 0`, f всегда 0.",
            "en": "When `C = 0`, f is always 0."
          },
          {
            "he": "כש־`C = 1`, צריך לפחות אחד מ־A, B.",
            "ru": "Когда `C = 1`, нужен хотя бы один из A, B.",
            "en": "When `C = 1`, you need at least one of A, B."
          }
        ],
        "solution": [
          "C = 1:  001, 011, 101, 111",
          "001: A + B = 0  →  0",
          "011, 101, 111  →  1",
          {
            "he": "תשובה: 00010101",
            "ru": "Ответ: 00010101",
            "en": "Answer: 00010101"
          }
        ]
      }
    ],
    "ai": [
      {
        "id": "a1",
        "level": 1,
        "label": "1.1",
        "kind": "number",
        "text": {
          "he": "מה יוצא משער NOT אם נכנס 1?",
          "ru": "Что выходит из вентиля NOT, если на входе 1?",
          "en": "What comes out of a NOT gate if 1 goes in?"
        },
        "example": {
          "he": "נכנס 0 → NOT הופך → יוצא 1.",
          "ru": "На входе 0 → NOT переворачивает → на выходе 1.",
          "en": "0 goes in → NOT flips → 1 comes out."
        },
        "answer": {
          "value": "0"
        },
        "hints": [
          {
            "he": "NOT הופך.",
            "ru": "NOT переворачивает.",
            "en": "NOT flips."
          }
        ],
        "solution": [
          "1 → 0",
          {
            "he": "תשובה: 0",
            "ru": "Ответ: 0",
            "en": "Answer: 0"
          }
        ]
      },
      {
        "id": "a2",
        "level": 2,
        "label": "2.1",
        "kind": "number",
        "text": {
          "he": "כמה שורות יש בטבלת אמת עם 4 כניסות?",
          "ru": "Сколько строк в таблице истинности с 4 входами?",
          "en": "How many rows does a truth table with 4 inputs have?"
        },
        "example": {
          "he": "3 כניסות → `2³ = 8` שורות.",
          "ru": "3 входа → `2³ = 8` строк.",
          "en": "3 inputs → `2³ = 8` rows."
        },
        "answer": {
          "value": "16"
        },
        "hints": [
          {
            "he": "`2⁴`",
            "ru": "`2⁴`",
            "en": "`2⁴`"
          }
        ],
        "solution": [
          "2⁴ = 16",
          {
            "he": "תשובה: 16",
            "ru": "Ответ: 16",
            "en": "Answer: 16"
          }
        ]
      },
      {
        "id": "a3",
        "level": 2,
        "label": "2.2",
        "kind": "number",
        "text": {
          "he": "`A = 1, B = 1`. קודם XOR, ואז NOT. מה יוצא?",
          "ru": "`A = 1`, `B = 1`. Сначала XOR, потом NOT. Что получится?",
          "en": "`A = 1`, `B = 1`. First XOR, then NOT. What comes out?"
        },
        "example": {
          "he": "`A = 1, B = 0` → `XOR = 1` (שונים) → NOT → 0.",
          "ru": "`A = 1`, `B = 0` → `XOR = 1` (разные) → NOT → 0.",
          "en": "`A = 1`, `B = 0` → `XOR = 1` (different) → NOT → 0."
        },
        "answer": {
          "value": "1"
        },
        "hints": [
          {
            "he": "האם הכניסות שונות?",
            "ru": "Входы разные?",
            "en": "Are the inputs different?"
          }
        ],
        "solution": [
          "1 XOR 1 = 0",
          "NOT 0 = 1",
          {
            "he": "תשובה: 1",
            "ru": "Ответ: 1",
            "en": "Answer: 1"
          }
        ]
      },
      {
        "id": "a4",
        "level": 3,
        "label": "3.1",
        "kind": "text",
        "text": {
          "he": "`f = AB + C`. כתבו את כל עמודת f לשורות `000` עד `111`, מלמעלה למטה (8 ספרות).",
          "ru": "`f = AB + C`. Напиши весь столбец f для строк от `000` до `111`, сверху вниз (8 цифр).",
          "en": "`f = AB + C`. Write the whole f column for the rows `000` to `111`, top to bottom (8 digits)."
        },
        "example": {
          "he": "`f = A(B + C)` → 1 רק כש־`A = 1` וגם לפחות אחד מ־B, C הוא 1 → השורות `101, 110, 111` → `00000111`.",
          "ru": "`f = A(B + C)` → 1, только когда `A = 1` и хотя бы один из B, C равен 1 → строки `101, 110, 111` → `00000111`.",
          "en": "`f = A(B + C)` → 1 only when `A = 1` and at least one of B, C is 1 → the rows `101, 110, 111` → `00000111`."
        },
        "answer": {
          "accept": [
            "01010111",
            "0 1 0 1 0 1 1 1",
            "0,1,0,1,0,1,1,1",
            "0, 1, 0, 1, 0, 1, 1, 1"
          ]
        },
        "hints": [
          {
            "he": "כש־`C = 1`, f כבר 1.",
            "ru": "Когда `C = 1`, f уже 1.",
            "en": "When `C = 1`, f is already 1."
          },
          {
            "he": "ועוד: `A = 1` וגם `B = 1`.",
            "ru": "И ещё: `A = 1` и `B = 1`.",
            "en": "Plus: `A = 1` and `B = 1`."
          }
        ],
        "solution": [
          "C = 1:  001, 011, 101, 111",
          "AB = 1:  110, 111",
          "000→0 001→1 010→0 011→1 100→0 101→1 110→1 111→1",
          {
            "he": "תשובה: 01010111",
            "ru": "Ответ: 01010111",
            "en": "Answer: 01010111"
          }
        ]
      },
      {
        "id": "a5",
        "level": 3,
        "label": "3.2",
        "kind": "choice",
        "text": {
          "he": "איזה שער נותן בדיוק את מה שיוצא מ־AND ואחריו NOT?",
          "ru": "Какой вентиль даёт ровно то же, что AND, а после него NOT?",
          "en": "Which gate gives exactly what AND followed by NOT gives?"
        },
        "options": [
          "NAND",
          "NOR",
          "XOR",
          "OR"
        ],
        "example": {
          "he": "OR ואחריו NOT → `0111` הופך ל־`1000` → זה NOR.",
          "ru": "OR, а после него NOT → `0111` превращается в `1000` → это NOR.",
          "en": "OR followed by NOT → `0111` becomes `1000` → that is NOR."
        },
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "N = Not.",
            "ru": "N = Not.",
            "en": "N = Not."
          }
        ],
        "solution": [
          "AND: 0001  →  NOT: 1110  =  NAND",
          {
            "he": "תשובה: NAND",
            "ru": "Ответ: NAND",
            "en": "Answer: NAND"
          }
        ]
      }
    ]
  }
};

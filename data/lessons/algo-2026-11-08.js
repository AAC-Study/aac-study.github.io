/* Lesson data — format: see the comment at the top of data/lessons/math-2026-11-01.js.
   Every "what does it print" answer and every example in this file was checked by compiling
   and running the Java code (javac/java 21) with the given input. */
window.LESSONS = window.LESSONS || {};
window.LESSONS["algo-2026-11-08"] = {
  "id": "algo-2026-11-08",
  "subject": "algo",
  "date": "2026-11-08",
  "title": {
    "he": "while עד מספר עצירה, מינימום, מונה ב־for וסכום ספרות",
    "ru": "while до стоп-числа, минимум, счётчик в for и сумма цифр",
    "en": "while until a stop number, minimum, a counter in for and digit sums"
  },
  "summary": {
    "he": "סיכומי for ו־while מאתר הקורס, סכום וממוצע עד `-111` (ומה קורה כששוכחים לקלוט בתוך הלולאה), מינימום עד `-1`, מונה של מספרים שמתחלקים ב־7, ושאלת מבחן 2023: סכום הספרות של מספרים תלת־ספרתיים.",
    "ru": "Конспекты for и while с сайта курса, сумма и среднее до −111 (и что будет, если забыть чтение внутри цикла), минимум до −1, счётчик чисел, которые делятся на 7, и задача экзамена 2023: сумма цифр трёхзначных чисел.",
    "en": "The for and while summaries from the course site, sum and average until -111 (and what happens if you forget to read inside the loop), minimum until -1, a counter of numbers divisible by 7, and the 2023 exam question: the digit sum of three-digit numbers."
  },
  "timeline": [
    {
      "kind": "talk",
      "title": {
        "he": "סיכום מהקורס: לולאת for",
        "ru": "Конспект курса: цикл for",
        "en": "Course summary: the for loop"
      },
      "text": {
        "he": "בתחילת השיעור עברנו על הסיכום \"לולאת for\" מאתר הקורס.\n• מבנה: `for (אתחול; תנאי; עדכון)`. האתחול רץ פעם אחת, התנאי נבדק לפני כל סיבוב, העדכון רץ בסוף כל סיבוב.\n• עולה: `for (int i = 1; i <= 10; i++)`. יורד: `for (int i = 10; i >= 1; i--)`. בקפיצות: `i += 2` נותן `0, 2, 4` … 20.\n• `break` יוצא מהלולאה מיד. `continue` מדלג על שאר הסיבוב הנוכחי ועובר לסיבוב הבא.\n• טעויות נפוצות: `i--` עם התנאי `i < 10` (לולאה אינסופית), שוכחים את העדכון, ונקודה־פסיק `;` מיד אחרי `for (…)`.",
        "ru": "В начале урока прошли конспект «Цикл for» с сайта курса.\n• Устройство: `for (начало; условие; шаг)`. Начало выполняется один раз, условие проверяется перед каждым кругом, шаг выполняется в конце каждого круга.\n• Вверх: `for (int i = 1; i <= 10; i++)`. Вниз: `for (int i = 10; i >= 1; i--)`. Через шаг: `i += 2` даёт 0, 2, 4 … 20.\n• `break` сразу выходит из цикла. `continue` пропускает остаток текущего круга и переходит к следующему.\n• Частые ошибки: `i--` при условии `i < 10` (бесконечный цикл), забыли шаг, и точка с запятой `;` сразу после `for (…)`.",
        "en": "At the start of the lesson we went over the \"for loop\" summary from the course site.\n• Structure: `for (start; condition; update)`. The start runs once, the condition is checked before every round, the update runs at the end of every round.\n• Up: `for (int i = 1; i <= 10; i++)`. Down: `for (int i = 10; i >= 1; i--)`. In steps: `i += 2` gives 0, 2, 4 … 20.\n• `break` leaves the loop at once. `continue` skips the rest of the current round and goes to the next one.\n• Common mistakes: `i--` with the condition `i < 10` (an endless loop), forgetting the update, and a semicolon `;` right after `for (…)`."
      },
      "math": [
        "for (int i = 0; i < 5; i++) {",
        "    System.out.println(\"Iteration: \" + i);",
        "}",
        "// Iteration: 0 … Iteration: 4"
      ],
      "why": {
        "he": "ב־for שלושת החלקים כתובים בשורה אחת, ולכן רואים מיד מאיפה מתחילים, מתי עוצרים ומה משתנה. משתמשים בה כשיודעים מראש כמה סיבובים יהיו.",
        "ru": "В for все три части записаны в одной строке, поэтому сразу видно, откуда начинаем, когда останавливаемся и что меняется. Его берут, когда число кругов известно заранее.",
        "en": "In a for loop all three parts are on one line, so you see at once where it starts, when it stops and what changes. Use it when you know the number of rounds in advance."
      }
    },
    {
      "kind": "talk",
      "title": {
        "he": "סיכום מהקורס: לולאת while",
        "ru": "Конспект курса: цикл while",
        "en": "Course summary: the while loop"
      },
      "text": {
        "he": "אחר כך הסיכום \"לולאת while ב־Java\".\n• התנאי נבדק לפני כל סיבוב. אם הוא לא נכון כבר בהתחלה, הלולאה לא רצה אף פעם (0 סיבובים).\n• משתמשים ב־while כשלא יודעים מראש כמה סיבובים יהיו: למשל קולטים עד שמקלידים מספר עצירה, או בודקים קלט (ציון בין 0 ל־100).\n• כל for אפשר לכתוב כ־while: את האתחול שמים לפני הלולאה, ואת העדכון בסוף הגוף.\n• `while (true)` רץ לנצח, ויוצאים ממנו רק עם `break`.\n• ספירת ספרות: כל עוד `n > 0` עושים `count++` ו־`n /= 10`.",
        "ru": "Потом конспект «Цикл while в Java».\n• Условие проверяется перед каждым кругом. Если оно неверно уже в начале, цикл не выполнится ни разу (0 кругов).\n• while берут, когда заранее неизвестно, сколько будет кругов: например, читаем, пока не введут стоп-число, или проверяем ввод (оценка от 0 до 100).\n• Любой for можно записать через while: начало ставим перед циклом, а шаг в конец тела.\n• `while (true)` крутится вечно, выйти можно только через `break`.\n• Подсчёт цифр: пока `n > 0`, делаем `count++` и `n /= 10`.",
        "en": "Then the summary \"The while loop in Java\".\n• The condition is checked before every round. If it is false at the start, the loop never runs (0 rounds).\n• Use while when you do not know the number of rounds in advance: for example, read until a stop number is typed, or check the input (a grade from 0 to 100).\n• Any for can be written as a while: put the start before the loop and the update at the end of the body.\n• `while (true)` runs forever, and you leave it only with `break`.\n• Counting digits: as long as `n > 0`, do `count++` and `n /= 10`."
      },
      "math": [
        "int i = 0;              // for (int i = 0; i < 5; i++)",
        "while (i < 5) {",
        "    System.out.println(i);",
        "    i++;",
        "}"
      ],
      "why": {
        "he": "ההבדל בין for ל־while הוא לא מה הן יכולות לעשות (שתיהן יכולות הכול), אלא מה נוח לקרוא: for למספר סיבובים ידוע, while ל\"עד ש…\".",
        "ru": "Разница между for и while не в том, что они умеют (оба умеют всё), а в том, что удобнее читать: for для известного числа кругов, while для «пока не…».",
        "en": "The difference between for and while is not what they can do (both can do everything), but what is easier to read: for for a known number of rounds, while for \"until…\"."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "סכום וממוצע עד שמקלידים `-111`",
        "ru": "Сумма и среднее, пока не введут −111",
        "en": "Sum and average until -111 is typed"
      },
      "text": {
        "he": "המשימה: לבקש מהמשתמש מספרים שלמים עד שהוא מקליד `-111`, ואחר כך למצוא את הממוצע שלהם.\nלא יודעים כמה מספרים יהיו, ולכן while. המספר הראשון נקלט לפני הלולאה, וכל מספר הבא נקלט בשורה האחרונה בתוך הלולאה. כך ה־`-111` לא נכנס לסכום ולמונה.\n`(double) sum / count` הופך את החילוק לחילוק עם שבר. בלי `(double)` החלק אחרי הנקודה היה נמחק.",
        "ru": "Задание: просить у пользователя целые числа, пока он не введёт −111, а потом найти их среднее.\nСколько будет чисел, неизвестно, поэтому while. Первое число читается до цикла, каждое следующее — последней строкой внутри цикла. Так −111 не попадает ни в сумму, ни в счётчик.\n`(double) sum / count` делает деление с дробной частью. Без `(double)` всё после точки отбросилось бы.",
        "en": "The task: ask the user for whole numbers until they type -111, then find their average.\nWe do not know how many numbers there will be, so while. The first number is read before the loop, every next one in the last line inside the loop. That way -111 gets into neither the sum nor the counter.\n`(double) sum / count` makes a division with a fraction. Without `(double)` everything after the point would be dropped."
      },
      "math": [
        "Scanner input = new Scanner(System.in);",
        "System.out.println(\"Please enter numbers until -111: \");",
        "int sum = 0;",
        "int count = 0;",
        "int num = input.nextInt();",
        "while (num != -111) {",
        "    sum += num;",
        "    count++;",
        "    num = input.nextInt();",
        "}",
        "double avg = (double) sum / count;",
        "System.out.println(avg);"
      ]
    },
    {
      "kind": "tip",
      "title": {
        "he": "שכחו לקלוט בתוך הלולאה = לולאה אינסופית",
        "ru": "Забыли чтение внутри цикла = бесконечный цикл",
        "en": "Forgot to read inside the loop = an endless loop"
      },
      "text": {
        "he": "בגרסה הראשונה על הלוח לא הייתה בתוך הלולאה השורה `num = input.nextInt();`. אז `num` לא משתנה אף פעם, התנאי `num != -111` נשאר נכון, והלולאה לא נגמרת.\nבכל while שואלים: מה בתוך הלולאה משנה את מה שנבדק בתנאי?",
        "ru": "В первой версии на доске внутри цикла не было строки `num = input.nextInt();`. Тогда `num` никогда не меняется, условие `num != -111` остаётся верным, и цикл не кончается.\nВ каждом while спрашивай себя: что внутри цикла меняет то, что проверяет условие?",
        "en": "In the first version on the board the line `num = input.nextInt();` was missing inside the loop. Then `num` never changes, the condition `num != -111` stays true, and the loop never ends.\nIn every while ask: what inside the loop changes the thing the condition checks?"
      },
      "math": [
        "while (num != -111) {",
        "    sum += num;",
        "    count++;",
        "    // num = input.nextInt();   ← missing"
      ],
      "why": {
        "he": "התנאי של while נבדק שוב ושוב על אותם משתנים. אם אף שורה בגוף לא משנה אותם, התשובה תמיד אותה תשובה.",
        "ru": "Условие while проверяется снова и снова на тех же переменных. Если ни одна строка тела их не меняет, ответ всегда один и тот же.",
        "en": "The while condition is checked again and again on the same variables. If no line in the body changes them, the answer is always the same."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "המספר הקטן ביותר עד שמקלידים `-1`",
        "ru": "Самое маленькое число, пока не введут −1",
        "en": "The smallest number until -1 is typed"
      },
      "text": {
        "he": "אותה תבנית, אבל במקום סכום מחפשים מינימום. `min` מקבל את המספר הראשון, ואז כל מספר חדש שקטן ממנו מחליף אותו.\nעל הלוח הייתה גם הערה: אפשר להתחיל מ־`min = Integer.MAX_VALUE` (המספר הגדול ביותר ש־int יכול להחזיק), כמו `Integer.MIN_VALUE` במקסימום בשיעור הקודם.",
        "ru": "Тот же шаблон, но вместо суммы ищем минимум. `min` получает первое число, а потом каждое новое число, которое меньше, занимает его место.\nНа доске был и комментарий: можно начать с `min = Integer.MAX_VALUE` (самое большое число, которое помещается в int), как `Integer.MIN_VALUE` для максимума на прошлом уроке.",
        "en": "The same pattern, but instead of a sum we look for the minimum. `min` gets the first number, and then every new number that is smaller takes its place.\nThe board also had a comment: you can start with `min = Integer.MAX_VALUE` (the biggest number an int can hold), like `Integer.MIN_VALUE` for the maximum in the previous lesson."
      },
      "math": [
        "int num = input.nextInt();",
        "int min = num;",
        "while (num != -1) {",
        "    if (num < min) {",
        "        min = num;",
        "    }",
        "    num = input.nextInt();",
        "}",
        "System.out.println(\"The minimum number is \" + min);"
      ],
      "why": {
        "he": "`min = num` עובד תמיד, כי המספר הראשון הוא באמת אחד המועמדים. עם `Integer.MAX_VALUE` כל מספר אמיתי יהיה קטן ממנו, אבל אם מקלידים מיד `-1`, יודפס 2147483647.",
        "ru": "`min = num` работает всегда, потому что первое число действительно один из кандидатов. С `Integer.MAX_VALUE` любое настоящее число будет меньше, но если сразу ввести −1, напечатается 2147483647.",
        "en": "`min = num` always works, because the first number really is one of the candidates. With `Integer.MAX_VALUE` every real number is smaller, but if -1 is typed right away, 2147483647 is printed."
      }
    },
    {
      "kind": "tip",
      "title": {
        "he": "\"עד ש…\" בעברית = \"כל עוד לא…\" ב־while",
        "ru": "«Пока не…» = условие «продолжаем, если…»",
        "en": "\"Until…\" means \"while not…\""
      },
      "text": {
        "he": "בקונסולה היה גם תרגיל \"Please enter numbers until amount is 10 or sum > 468\" (את הקוד שלו לא ראינו). כדי לכתוב תנאי כזה הופכים אותו: עוצרים כשיש 10 מספרים או שהסכום עבר 468, ולכן ממשיכים כל עוד יש פחות מ־10 וגם הסכום לא עבר 468.\nה\"או\" של העצירה נהיה \"וגם\" של ההמשך.",
        "ru": "В консоли было ещё упражнение «Please enter numbers until amount is 10 or sum > 468» (его код мы не видели). Чтобы написать такое условие, его переворачивают: остановиться, когда чисел 10 или сумма больше 468, значит продолжать, пока чисел меньше 10 и сумма не больше 468.\n«Или» в условии остановки становится «и» в условии продолжения.",
        "en": "The console also showed the exercise \"Please enter numbers until amount is 10 or sum > 468\" (we did not see its code). To write such a condition you flip it: stop when there are 10 numbers or the sum is over 468, so continue while there are fewer than 10 and the sum is not over 468.\nThe \"or\" of stopping becomes the \"and\" of continuing."
      },
      "math": [
        "// stop:     count == 10 || sum > 468",
        "while (count < 10 && sum <= 468) {",
        "    …",
        "}"
      ]
    },
    {
      "kind": "board",
      "title": {
        "he": "for: כמה מתוך N מספרים מתחלקים ב־7",
        "ru": "for: сколько из N чисел делятся на 7",
        "en": "for: how many of N numbers divide by 7"
      },
      "text": {
        "he": "כאן מספר הסיבובים ידוע: קודם קולטים N, ואז הלולאה רצה בדיוק N פעמים. בכל סיבוב קולטים מספר ובודקים `num % 7 == 0` (השארית בחלוקה ב־7 היא 0). אם כן, `count++`.",
        "ru": "Здесь число кругов известно: сначала читаем N, и цикл крутится ровно N раз. На каждом круге читаем число и проверяем `num % 7 == 0` (остаток от деления на 7 равен 0). Если да, `count++`.",
        "en": "Here the number of rounds is known: first read N, then the loop runs exactly N times. In each round read a number and check `num % 7 == 0` (the remainder of dividing by 7 is 0). If so, `count++`."
      },
      "math": [
        "System.out.println(\"Please enter a number: \");",
        "int N = input.nextInt();",
        "System.out.println(\"Please enter \" + N + \" numbers: \");",
        "int num;",
        "int count = 0;",
        "for (int i = 0; i < N; i++) {",
        "    num = input.nextInt();",
        "    if (num % 7 == 0) {",
        "        count++;",
        "    }",
        "}",
        "System.out.println(\"count of \" + N + \" numbers is \" + count);"
      ],
      "why": {
        "he": "0 מתחלק ב־7 (`0 % 7 = 0`), וגם מספר שלילי כמו `-14` (`-14 % 7 = 0`). המונה סופר את כולם.",
        "ru": "0 делится на 7 (`0 % 7 = 0`), и отрицательное число вроде −14 тоже (`-14 % 7 = 0`). Счётчик посчитает их все.",
        "en": "0 divides by 7 (`0 % 7 = 0`), and so does a negative number like -14 (`-14 % 7 = 0`). The counter counts them all."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "שאלת מבחן: אביב, מועד א, 2023",
        "ru": "Задача с экзамена: весна, срок א, 2023",
        "en": "Exam question: spring, first sitting, 2023"
      },
      "text": {
        "he": "המשימה מהלוח: לכתוב קטע תוכנית שקולט 100 מספרים שלמים חיוביים, ולכל מספר תלת־ספרתי (מ־100 עד 999) מדפיס את סכום הספרות שלו.\nבצד הלוח הייתה תזכורת: \"או\" = `||`, \"וגם\" = `&&`, \"לא\" = `!`.\nהלולאה החיצונית סופרת 100 מספרים. הלולאה הפנימית רצה 3 פעמים, כי למספר תלת־ספרתי יש בדיוק 3 ספרות: בכל סיבוב לוקחים את הספרה האחרונה `num % 10` ומוחקים אותה `num /= 10`.",
        "ru": "Задание с доски: написать часть программы, которая читает 100 целых положительных чисел и для каждого трёхзначного (от 100 до 999) печатает сумму его цифр.\nСбоку на доске была подсказка: «или» = `||`, «и» = `&&`, «не» = `!`.\nВнешний цикл считает 100 чисел. Внутренний крутится 3 раза, потому что у трёхзначного числа ровно 3 цифры: на каждом круге берём последнюю цифру `num % 10` и стираем её `num /= 10`.",
        "en": "The task on the board: write a program part that reads 100 positive whole numbers and, for each three-digit one (100 to 999), prints the sum of its digits.\nOn the side of the board: \"or\" = `||`, \"and\" = `&&`, \"not\" = `!`.\nThe outer loop counts 100 numbers. The inner loop runs 3 times, because a three-digit number has exactly 3 digits: each round takes the last digit `num % 10` and erases it `num /= 10`."
      },
      "math": [
        "System.out.println(\"Please enter 100 numbers: \");",
        "int num;",
        "for (int i = 0; i < 100; i++) {",
        "    num = input.nextInt();",
        "    if (num >= 100 && num <= 999) {",
        "        int sumDig = 0;",
        "        for (int j = 0; j < 3; j++) {",
        "            sumDig += (num % 10);",
        "            num /= 10;",
        "        }",
        "        System.out.println(sumDig);",
        "    }",
        "}"
      ],
      "why": {
        "he": "בלולאה הפנימית משתמשים ב־`j` ולא ב־`i`: ה־`i` של הלולאה החיצונית עדיין קיים, ו־Java לא מרשה להגדיר אותו שוב. ו־`num /= 10` הורס את המספר, אבל זה בסדר, כי אחרי הסכום כבר לא צריך אותו.",
        "ru": "Во внутреннем цикле берут `j`, а не `i`: `i` внешнего цикла ещё существует, и Java не разрешит объявить его второй раз. А `num /= 10` портит число, но это нормально: после суммы оно больше не нужно.",
        "en": "The inner loop uses `j`, not `i`: the outer loop's `i` still exists, and Java does not allow declaring it again. And `num /= 10` destroys the number, but that is fine, because after the sum it is no longer needed."
      }
    },
    {
      "kind": "talk",
      "title": {
        "he": "תרגילי while ו־for באתר הקורס (`1–9`)",
        "ru": "Упражнения на while и for на сайте курса (1–9)",
        "en": "while and for exercises on the course site (1–9)"
      },
      "text": {
        "he": "באתר הקורס יש 9 תרגילים לתרגול עצמי (כאן רק הרשימה, בלי פתרונות):\n1. \"מספר יפה\": הספרה הימנית שווה לשמאלית (`151, 959, 3333`).\n2. כמה פעמים ספרה מופיעה במספר.\n3. סכום הספרות הזוגיות וסכום האי־זוגיות.\n4. היפוך מספר (12345 → 54321).\n5. משולש מספרים (1 / 1 2 / 1 2 3 …).\n6. משולש כוכביות הפוך.\n7. לוח הכפל `1–10`.\n8. מספרים ראשוניים בטווח.\n9. מעוין מכוכביות.",
        "ru": "На сайте курса 9 упражнений для самостоятельной практики (здесь только список, без решений):\n1. «Красивое число»: правая цифра равна левой (151, 959, 3333).\n2. Сколько раз цифра встречается в числе.\n3. Сумма чётных цифр и сумма нечётных.\n4. Перевернуть число (12345 → 54321).\n5. Треугольник из чисел (1 / 1 2 / 1 2 3 …).\n6. Перевёрнутый треугольник из звёздочек.\n7. Таблица умножения 1–10.\n8. Простые числа в диапазоне.\n9. Ромб из звёздочек.",
        "en": "The course site has 9 exercises for self-practice (only the list here, no solutions):\n1. \"A nice number\": the rightmost digit equals the leftmost (151, 959, 3333).\n2. How many times a digit appears in a number.\n3. The sum of the even digits and the sum of the odd ones.\n4. Reverse a number (12345 → 54321).\n5. A number triangle (1 / 1 2 / 1 2 3 …).\n6. An upside-down star triangle.\n7. The multiplication table 1–10.\n8. Prime numbers in a range.\n9. A diamond of stars."
      }
    }
  ],
  "review": [
    {
      "title": {
        "he": "for או while",
        "ru": "for или while",
        "en": "for or while"
      },
      "text": {
        "he": "יודעים כמה סיבובים → for. \"עד ש…\" → while.",
        "ru": "Число кругов известно → for. «Пока не…» → while.",
        "en": "Known number of rounds → for. \"Until…\" → while."
      }
    },
    {
      "title": {
        "he": "מספר עצירה",
        "ru": "Стоп-число",
        "en": "A stop number"
      },
      "text": {
        "he": "קולטים לפני הלולאה ובשורה האחרונה בתוכה. כך מספר העצירה לא נספר.",
        "ru": "Читаем до цикла и последней строкой внутри. Так стоп-число не считается.",
        "en": "Read before the loop and as the last line inside it. That way the stop number is not counted."
      }
    },
    {
      "title": {
        "he": "בלי קליטה בתוך while",
        "ru": "Без чтения внутри while",
        "en": "No read inside while"
      },
      "text": {
        "he": "התנאי לא משתנה → לולאה אינסופית.",
        "ru": "Условие не меняется → бесконечный цикл.",
        "en": "The condition never changes → an endless loop."
      }
    },
    {
      "title": {
        "he": "מינימום",
        "ru": "Минимум",
        "en": "Minimum"
      },
      "text": {
        "he": "`min = num` (הראשון) או `Integer.MAX_VALUE`, ואז `if (num < min) min = num;`",
        "ru": "`min = num` (первое) или `Integer.MAX_VALUE`, потом `if (num < min) min = num;`",
        "en": "`min = num` (the first) or `Integer.MAX_VALUE`, then `if (num < min) min = num;`"
      }
    },
    {
      "title": {
        "he": "מתחלק ב־7",
        "ru": "Делится на 7",
        "en": "Divisible by 7"
      },
      "text": {
        "he": "`num % 7 == 0`",
        "ru": "`num % 7 == 0`",
        "en": "`num % 7 == 0`"
      }
    },
    {
      "title": {
        "he": "סכום ספרות של תלת־ספרתי",
        "ru": "Сумма цифр трёхзначного",
        "en": "Digit sum of a three-digit number"
      },
      "text": {
        "he": "`num >= 100 && num <= 999`, לולאה פנימית עם `j` שלוש פעמים: `num % 10`, `num /= 10`.",
        "ru": "`num >= 100 && num <= 999`, внутренний цикл с `j` три раза: `num % 10`, `num /= 10`.",
        "en": "`num >= 100 && num <= 999`, an inner loop with `j` three times: `num % 10`, `num /= 10`."
      }
    },
    {
      "title": {
        "he": "break ו־continue",
        "ru": "break и continue",
        "en": "break and continue"
      },
      "text": {
        "he": "`break` יוצא מהלולאה. `continue` מדלג לסיבוב הבא.",
        "ru": "`break` выходит из цикла. `continue` прыгает к следующему кругу.",
        "en": "`break` leaves the loop. `continue` jumps to the next round."
      }
    }
  ],
  "tasks": {
    "groups": {
      "while": {
        "he": "סכום וממוצע עד מספר עצירה",
        "ru": "Сумма и среднее до −111",
        "en": "Sum and average until -111"
      },
      "min": {
        "he": "מינימום עד מספר עצירה",
        "ru": "Минимум до −1",
        "en": "Minimum until -1"
      },
      "count7": {
        "he": "מונה ב־for: מתחלק ב־7",
        "ru": "Счётчик в for: делится на 7",
        "en": "A counter in for: divisible by 7"
      },
      "exam": {
        "he": "שאלת מבחן 2023: סכום ספרות",
        "ru": "Задача экзамена 2023: сумма цифр",
        "en": "Exam question 2023: digit sum"
      },
      "course": {
        "he": "מהסיכומים באתר הקורס",
        "ru": "Из конспектов на сайте курса",
        "en": "From the summaries on the course site"
      }
    },
    "teacher": [
      {
        "id": "w1",
        "group": "while",
        "label": {
          "he": "ממוצע",
          "ru": "Среднее",
          "en": "Average"
        },
        "kind": "number",
        "text": {
          "he": "זו תוכנית הממוצע מהשיעור: היא קולטת מספרים עד `-111` ומדפיסה את הממוצע שלהם.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter numbers until -111: \");\nint sum = 0;\nint count = 0;\nint num = input.nextInt();\nwhile (num != -111) {\n    sum += num;\n    count++;\n    num = input.nextInt();\n}\ndouble avg = (double) sum / count;\nSystem.out.println(avg);\n```\nהמשתמש הקליד, אחד אחרי השני: `7, 4, 6, 2, -111`. איזה מספר התוכנית תדפיס בשורה האחרונה?",
          "ru": "Это программа среднего с урока: она читает числа до −111 и печатает их среднее.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter numbers until -111: \");\nint sum = 0;\nint count = 0;\nint num = input.nextInt();\nwhile (num != -111) {\n    sum += num;\n    count++;\n    num = input.nextInt();\n}\ndouble avg = (double) sum / count;\nSystem.out.println(avg);\n```\nПользователь по очереди ввёл: 7, 4, 6, 2, −111. Какое число программа напечатает последней строкой?",
          "en": "This is the average program from the lesson: it reads numbers until -111 and prints their average.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter numbers until -111: \");\nint sum = 0;\nint count = 0;\nint num = input.nextInt();\nwhile (num != -111) {\n    sum += num;\n    count++;\n    num = input.nextInt();\n}\ndouble avg = (double) sum / count;\nSystem.out.println(avg);\n```\nThe user typed one after another: 7, 4, 6, 2, -111. What number does the program print on the last line?"
        },
        "example": {
          "he": "המשתמש הקליד `10, 3, -111` → `sum = 13, count = 2` → `-111` עוצר ולא נספר → `(double) 13 / 2 = 6.5` → מודפס 6.5.",
          "ru": "Пользователь ввёл 10, 3, −111 → `sum = 13`, `count = 2` → −111 останавливает и не считается → `(double) 13 / 2 = 6.5` → печатается 6.5.",
          "en": "The user typed 10, 3, -111 → `sum = 13`, `count = 2` → -111 stops and is not counted → `(double) 13 / 2 = 6.5` → 6.5 is printed."
        },
        "answer": {
          "value": "4.75"
        },
        "hints": [
          {
            "he": "סכמו רק את המספרים שלפני `-111`, וספרו כמה הם.",
            "ru": "Сложи только числа до −111 и посчитай, сколько их.",
            "en": "Add only the numbers before -111 and count them."
          },
          {
            "he": "בזכות `(double)` החלק אחרי הנקודה נשאר.",
            "ru": "Благодаря `(double)` дробная часть остаётся.",
            "en": "Thanks to `(double)` the fraction stays."
          }
        ],
        "solution": [
          "7  →  sum = 7,   count = 1",
          "4  →  sum = 11,  count = 2",
          "6  →  sum = 17,  count = 3",
          "2  →  sum = 19,  count = 4",
          "-111  →  -111 != -111  false  →  exit",
          "(double) 19 / 4 = 4.75",
          {
            "he": "תשובה: 4.75",
            "ru": "Ответ: 4.75",
            "en": "Answer: 4.75"
          }
        ]
      },
      {
        "id": "w2",
        "group": "while",
        "label": {
          "he": "שכחו לקלוט",
          "ru": "Забыли чтение",
          "en": "Forgot the read"
        },
        "kind": "choice",
        "text": {
          "he": "זו הגרסה הראשונה מהלוח: בתוך הלולאה חסרה השורה `num = input.nextInt();`.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter numbers until -111: \");\nint sum = 0;\nint count = 0;\nint num = input.nextInt();\nwhile (num != -111) {\n    sum += num;\n    count++;\n}\ndouble avg = (double) sum / count;\nSystem.out.println(avg);\n```\nהמשתמש הקליד 5. מה יקרה?",
          "ru": "Это первая версия с доски: внутри цикла нет строки `num = input.nextInt();`.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter numbers until -111: \");\nint sum = 0;\nint count = 0;\nint num = input.nextInt();\nwhile (num != -111) {\n    sum += num;\n    count++;\n}\ndouble avg = (double) sum / count;\nSystem.out.println(avg);\n```\nПользователь ввёл 5. Что произойдёт?",
          "en": "This is the first version from the board: the line `num = input.nextInt();` is missing inside the loop.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter numbers until -111: \");\nint sum = 0;\nint count = 0;\nint num = input.nextInt();\nwhile (num != -111) {\n    sum += num;\n    count++;\n}\ndouble avg = (double) sum / count;\nSystem.out.println(avg);\n```\nThe user typed 5. What happens?"
        },
        "options": [
          {
            "he": "תדפיס 5.0",
            "ru": "Напечатает 5.0",
            "en": "It prints 5.0"
          },
          {
            "he": "הלולאה לא תיגמר אף פעם",
            "ru": "Цикл никогда не закончится",
            "en": "The loop never ends"
          },
          {
            "he": "שגיאת קומפילציה",
            "ru": "Ошибка компиляции",
            "en": "A compile error"
          },
          {
            "he": "תדפיס 0",
            "ru": "Напечатает 0",
            "en": "It prints 0"
          }
        ],
        "example": {
          "he": "דוגמה הפוכה, שבה כן משנים בתוך הלולאה:\n```\nint i = 1;\nwhile (i < 4) {\n    System.out.println(i);\n    i++;\n}\n```\n`i++` מגדיל את `i` בכל סיבוב → `1, 2, 3` → כש־`i = 4` התנאי `4 < 4` לא נכון → הלולאה נגמרת אחרי 3 סיבובים.",
          "ru": "Обратный пример, где внутри цикла что-то меняется:\n```\nint i = 1;\nwhile (i < 4) {\n    System.out.println(i);\n    i++;\n}\n```\n`i++` увеличивает `i` на каждом круге → 1, 2, 3 → когда `i = 4`, условие `4 < 4` неверно → цикл кончается после 3 кругов.",
          "en": "The opposite example, where something changes inside the loop:\n```\nint i = 1;\nwhile (i < 4) {\n    System.out.println(i);\n    i++;\n}\n```\n`i++` makes `i` bigger every round → 1, 2, 3 → when `i = 4` the condition `4 < 4` is false → the loop ends after 3 rounds."
        },
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "מה בתוך הלולאה משנה את `num`?",
            "ru": "Что внутри цикла меняет `num`?",
            "en": "What inside the loop changes `num`?"
          }
        ],
        "solution": [
          "num = 5",
          "5 != -111  →  true",
          "sum += 5;  count++;   (num stays 5)",
          "5 != -111  →  true  …",
          {
            "he": "תשובה: הלולאה לא נגמרת",
            "ru": "Ответ: цикл никогда не закончится",
            "en": "Answer: the loop never ends"
          }
        ]
      },
      {
        "id": "w3",
        "group": "while",
        "label": {
          "he": "0 סיבובים",
          "ru": "0 кругов",
          "en": "0 rounds"
        },
        "kind": "number",
        "text": {
          "he": "זו תוכנית הממוצע מהשיעור: היא קולטת מספרים עד `-111` ומדפיסה את הממוצע שלהם.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter numbers until -111: \");\nint sum = 0;\nint count = 0;\nint num = input.nextInt();\nwhile (num != -111) {\n    sum += num;\n    count++;\n    num = input.nextInt();\n}\ndouble avg = (double) sum / count;\nSystem.out.println(avg);\n```\nהמשתמש הקליד מיד `-111`. כמה פעמים ירוץ גוף הלולאה? (כמה יהיה `count`?)",
          "ru": "Это программа среднего с урока: она читает числа до −111 и печатает их среднее.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter numbers until -111: \");\nint sum = 0;\nint count = 0;\nint num = input.nextInt();\nwhile (num != -111) {\n    sum += num;\n    count++;\n    num = input.nextInt();\n}\ndouble avg = (double) sum / count;\nSystem.out.println(avg);\n```\nПользователь сразу ввёл −111. Сколько раз выполнится тело цикла? (Каким будет `count`?)",
          "en": "This is the average program from the lesson: it reads numbers until -111 and prints their average.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter numbers until -111: \");\nint sum = 0;\nint count = 0;\nint num = input.nextInt();\nwhile (num != -111) {\n    sum += num;\n    count++;\n    num = input.nextInt();\n}\ndouble avg = (double) sum / count;\nSystem.out.println(avg);\n```\nThe user typed -111 right away. How many times does the loop body run? (What will `count` be?)"
        },
        "example": {
          "he": "המשתמש הקליד `3, -111` → התנאי `3 != -111` נכון → סיבוב אחד, `count = 1` → נקלט `-111` → התנאי לא נכון → סוף. כלומר סיבוב אחד.",
          "ru": "Пользователь ввёл 3, −111 → условие `3 != -111` верно → один круг, `count = 1` → прочитано −111 → условие неверно → конец. То есть 1 круг.",
          "en": "The user typed 3, -111 → the condition `3 != -111` is true → one round, `count = 1` → -111 is read → the condition is false → the end. So 1 round."
        },
        "answer": {
          "value": "0"
        },
        "hints": [
          {
            "he": "ב־while התנאי נבדק לפני הסיבוב הראשון.",
            "ru": "В while условие проверяется ещё до первого круга.",
            "en": "In while the condition is checked before the first round."
          }
        ],
        "solution": [
          "num = -111",
          "-111 != -111  →  false",
          {
            "he": "תשובה: 0 סיבובים",
            "ru": "Ответ: 0 кругов",
            "en": "Answer: 0 rounds"
          }
        ]
      },
      {
        "id": "m1",
        "group": "min",
        "label": {
          "he": "מינימום",
          "ru": "Минимум",
          "en": "Minimum"
        },
        "kind": "number",
        "text": {
          "he": "זו תוכנית המינימום מהשיעור: היא קולטת מספרים עד `-1` ומדפיסה את הקטן ביותר.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter numbers until num = -1: \");\nint num = input.nextInt();\nint min = num;\nwhile (num != -1) {\n    if (num < min) {\n        min = num;\n    }\n    num = input.nextInt();\n}\nSystem.out.println(\"The minimum number is \" + min);\n```\nהמשתמש הקליד, אחד אחרי השני: `12, 7, 15, 3, 9, -1`. איזה מספר יופיע בסוף השורה האחרונה?",
          "ru": "Это программа минимума с урока: она читает числа до −1 и печатает самое маленькое.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter numbers until num = -1: \");\nint num = input.nextInt();\nint min = num;\nwhile (num != -1) {\n    if (num < min) {\n        min = num;\n    }\n    num = input.nextInt();\n}\nSystem.out.println(\"The minimum number is \" + min);\n```\nПользователь по очереди ввёл: 12, 7, 15, 3, 9, −1. Какое число будет в конце последней строки?",
          "en": "This is the minimum program from the lesson: it reads numbers until -1 and prints the smallest.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter numbers until num = -1: \");\nint num = input.nextInt();\nint min = num;\nwhile (num != -1) {\n    if (num < min) {\n        min = num;\n    }\n    num = input.nextInt();\n}\nSystem.out.println(\"The minimum number is \" + min);\n```\nThe user typed one after another: 12, 7, 15, 3, 9, -1. Which number is at the end of the last line?"
        },
        "example": {
          "he": "המשתמש הקליד `20, 14, 30, -1` → `min = 20` → 14 < 20, אז `min = 14` → 30 לא קטן מ־14 → `-1` עוצר → מודפס `The minimum number is 14`.",
          "ru": "Пользователь ввёл 20, 14, 30, −1 → `min = 20` → 14 < 20, значит `min = 14` → 30 не меньше 14 → −1 останавливает → печатается `The minimum number is 14`.",
          "en": "The user typed 20, 14, 30, -1 → `min = 20` → 14 < 20, so `min = 14` → 30 is not less than 14 → -1 stops → `The minimum number is 14` is printed."
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "בכל סיבוב: האם המספר החדש קטן מ־`min`?",
            "ru": "На каждом круге: новое число меньше `min`?",
            "en": "Each round: is the new number less than `min`?"
          }
        ],
        "solution": [
          "12  →  min = 12",
          "7 < 12  →  min = 7",
          "15 < 7  false",
          "3 < 7  →  min = 3",
          "9 < 3  false",
          "-1  →  exit",
          {
            "he": "תשובה: 3",
            "ru": "Ответ: 3",
            "en": "Answer: 3"
          }
        ]
      },
      {
        "id": "m2",
        "group": "min",
        "label": {
          "he": "שלילי לפני העצירה",
          "ru": "Отрицательное до −1",
          "en": "A negative before -1"
        },
        "kind": "number",
        "text": {
          "he": "זו תוכנית המינימום מהשיעור: היא קולטת מספרים עד `-1` ומדפיסה את הקטן ביותר.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter numbers until num = -1: \");\nint num = input.nextInt();\nint min = num;\nwhile (num != -1) {\n    if (num < min) {\n        min = num;\n    }\n    num = input.nextInt();\n}\nSystem.out.println(\"The minimum number is \" + min);\n```\nהמשתמש הקליד, אחד אחרי השני: `5, 8, -3, 4, -1`. איזה מספר יופיע בסוף השורה האחרונה?",
          "ru": "Это программа минимума с урока: она читает числа до −1 и печатает самое маленькое.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter numbers until num = -1: \");\nint num = input.nextInt();\nint min = num;\nwhile (num != -1) {\n    if (num < min) {\n        min = num;\n    }\n    num = input.nextInt();\n}\nSystem.out.println(\"The minimum number is \" + min);\n```\nПользователь по очереди ввёл: 5, 8, −3, 4, −1. Какое число будет в конце последней строки?",
          "en": "This is the minimum program from the lesson: it reads numbers until -1 and prints the smallest.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter numbers until num = -1: \");\nint num = input.nextInt();\nint min = num;\nwhile (num != -1) {\n    if (num < min) {\n        min = num;\n    }\n    num = input.nextInt();\n}\nSystem.out.println(\"The minimum number is \" + min);\n```\nThe user typed one after another: 5, 8, -3, 4, -1. Which number is at the end of the last line?"
        },
        "example": {
          "he": "המשתמש הקליד `10, -7, 3, -1` → `min = 10` → `-7 < 10`, אז `min = -7` → 3 לא קטן → `-1` הוא רק סימן עצירה, הוא לא נבדק מול `min` → מודפס `-7`.",
          "ru": "Пользователь ввёл 10, −7, 3, −1 → `min = 10` → −7 < 10, значит `min = -7` → 3 не меньше → −1 только знак остановки, с `min` его не сравнивают → печатается −7.",
          "en": "The user typed 10, -7, 3, -1 → `min = 10` → -7 < 10, so `min = -7` → 3 is not smaller → -1 is only the stop sign, it is not compared with `min` → -7 is printed."
        },
        "answer": {
          "value": "-3"
        },
        "hints": [
          {
            "he": "מספר שלילי שאינו `-1` הוא מספר רגיל.",
            "ru": "Отрицательное число, которое не −1, — обычное число.",
            "en": "A negative number that is not -1 is an ordinary number."
          },
          {
            "he": "האם `-1` עצמו נכנס לבדיקה `num < min`?",
            "ru": "Попадает ли само −1 в проверку `num < min`?",
            "en": "Does -1 itself reach the check `num < min`?"
          }
        ],
        "solution": [
          "5  →  min = 5",
          "8 < 5  false",
          "-3 < 5  →  min = -3",
          "4 < -3  false",
          "-1  →  exit  (not compared)",
          {
            "he": "תשובה: `-3`",
            "ru": "Ответ: −3",
            "en": "Answer: -3"
          }
        ]
      },
      {
        "id": "m3",
        "group": "min",
        "label": {
          "he": "Integer.MAX_VALUE",
          "ru": "Integer.MAX_VALUE",
          "en": "Integer.MAX_VALUE"
        },
        "kind": "choice",
        "text": {
          "he": "זו התוכנית עם האפשרות מההערה על הלוח: `min` מתחיל מ־`Integer.MAX_VALUE`.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter numbers until num = -1: \");\nint num = input.nextInt();\nint min = Integer.MAX_VALUE;\nwhile (num != -1) {\n    if (num < min) {\n        min = num;\n    }\n    num = input.nextInt();\n}\nSystem.out.println(\"The minimum number is \" + min);\n```\nהמשתמש הקליד מיד `-1`. מה התוכנית תדפיס בשורה האחרונה?",
          "ru": "Это программа с вариантом из комментария на доске: `min` начинается с `Integer.MAX_VALUE`.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter numbers until num = -1: \");\nint num = input.nextInt();\nint min = Integer.MAX_VALUE;\nwhile (num != -1) {\n    if (num < min) {\n        min = num;\n    }\n    num = input.nextInt();\n}\nSystem.out.println(\"The minimum number is \" + min);\n```\nПользователь сразу ввёл −1. Что программа напечатает последней строкой?",
          "en": "This is the program with the option from the board comment: `min` starts at `Integer.MAX_VALUE`.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter numbers until num = -1: \");\nint num = input.nextInt();\nint min = Integer.MAX_VALUE;\nwhile (num != -1) {\n    if (num < min) {\n        min = num;\n    }\n    num = input.nextInt();\n}\nSystem.out.println(\"The minimum number is \" + min);\n```\nThe user typed -1 right away. What does the program print on the last line?"
        },
        "options": [
          "The minimum number is -1",
          "The minimum number is 0",
          "The minimum number is 2147483647",
          {
            "he": "שגיאה",
            "ru": "Ошибка",
            "en": "An error"
          }
        ],
        "example": {
          "he": "אותו קלט (`-1` מיד) בתוכנית מהשיעור, שבה `int min = num;` → `min = -1` → הלולאה לא רצה → מודפס `The minimum number is -1`.",
          "ru": "Тот же ввод (сразу −1) в программе с урока, где `int min = num;` → `min = -1` → цикл не выполняется → печатается `The minimum number is -1`.",
          "en": "The same input (-1 right away) in the lesson's program, where `int min = num;` → `min = -1` → the loop does not run → `The minimum number is -1` is printed."
        },
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "אם הלולאה לא רצה, מה נשאר ב־`min`?",
            "ru": "Если цикл не выполнился, что осталось в `min`?",
            "en": "If the loop does not run, what is left in `min`?"
          }
        ],
        "solution": [
          "min = Integer.MAX_VALUE = 2147483647",
          "-1 != -1  →  false  →  0 rounds",
          {
            "he": "תשובה: The minimum number is 2147483647",
            "ru": "Ответ: The minimum number is 2147483647",
            "en": "Answer: The minimum number is 2147483647"
          }
        ]
      },
      {
        "id": "c1",
        "group": "count7",
        "label": {
          "he": "מתחלק ב־7",
          "ru": "Делится на 7",
          "en": "Divisible by 7"
        },
        "kind": "number",
        "text": {
          "he": "זו תוכנית המונה מהשיעור: היא קולטת N, אחר כך N מספרים, וסופרת כמה מהם מתחלקים ב־7.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter a number: \");\nint N = input.nextInt();\nSystem.out.println(\"Please enter \" + N + \" numbers: \");\nint num;\nint count = 0;\nfor (int i = 0; i < N; i++) {\n    num = input.nextInt();\n    if (num % 7 == 0) {\n        count++;\n    }\n}\nSystem.out.println(\"count of \" + N + \" numbers is \" + count);\n```\nהמשתמש הקליד קודם 6, ואחר כך: `14, 5, 21, 70, 8, 0`. איזה מספר יופיע בסוף השורה האחרונה?",
          "ru": "Это программа-счётчик с урока: она читает N, потом N чисел и считает, сколько из них делятся на 7.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter a number: \");\nint N = input.nextInt();\nSystem.out.println(\"Please enter \" + N + \" numbers: \");\nint num;\nint count = 0;\nfor (int i = 0; i < N; i++) {\n    num = input.nextInt();\n    if (num % 7 == 0) {\n        count++;\n    }\n}\nSystem.out.println(\"count of \" + N + \" numbers is \" + count);\n```\nПользователь сначала ввёл 6, потом по очереди: 14, 5, 21, 70, 8, 0. Какое число будет в конце последней строки?",
          "en": "This is the counter program from the lesson: it reads N, then N numbers, and counts how many of them divide by 7.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter a number: \");\nint N = input.nextInt();\nSystem.out.println(\"Please enter \" + N + \" numbers: \");\nint num;\nint count = 0;\nfor (int i = 0; i < N; i++) {\n    num = input.nextInt();\n    if (num % 7 == 0) {\n        count++;\n    }\n}\nSystem.out.println(\"count of \" + N + \" numbers is \" + count);\n```\nThe user first typed 6, then one after another: 14, 5, 21, 70, 8, 0. Which number is at the end of the last line?"
        },
        "example": {
          "he": "המשתמש הקליד 4, ואחר כך `7, 10, 28, 3` → `7 % 7 = 0` כן → `10 % 7 = 3` לא → `28 % 7 = 0` כן → `3 % 7 = 3` לא → `count of 4 numbers is 2`.",
          "ru": "Пользователь ввёл 4, потом 7, 10, 28, 3 → `7 % 7 = 0` да → `10 % 7 = 3` нет → `28 % 7 = 0` да → `3 % 7 = 3` нет → `count of 4 numbers is 2`.",
          "en": "The user typed 4, then 7, 10, 28, 3 → `7 % 7 = 0` yes → `10 % 7 = 3` no → `28 % 7 = 0` yes → `3 % 7 = 3` no → `count of 4 numbers is 2`."
        },
        "answer": {
          "value": "4"
        },
        "hints": [
          {
            "he": "לכל מספר חשבו את השארית בחלוקה ב־7.",
            "ru": "Для каждого числа найди остаток от деления на 7.",
            "en": "For each number find the remainder of dividing by 7."
          },
          {
            "he": "כמה זה `0 % 7`?",
            "ru": "Сколько будет `0 % 7`?",
            "en": "What is `0 % 7`?"
          }
        ],
        "solution": [
          "14 % 7 = 0  →  count = 1",
          "5 % 7 = 5",
          "21 % 7 = 0  →  count = 2",
          "70 % 7 = 0  →  count = 3",
          "8 % 7 = 1",
          "0 % 7 = 0  →  count = 4",
          {
            "he": "תשובה: 4",
            "ru": "Ответ: 4",
            "en": "Answer: 4"
          }
        ]
      },
      {
        "id": "c2",
        "group": "count7",
        "label": {
          "he": "גם שליליים",
          "ru": "И отрицательные",
          "en": "Negatives too"
        },
        "kind": "number",
        "text": {
          "he": "זו תוכנית המונה מהשיעור: היא קולטת N, אחר כך N מספרים, וסופרת כמה מהם מתחלקים ב־7.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter a number: \");\nint N = input.nextInt();\nSystem.out.println(\"Please enter \" + N + \" numbers: \");\nint num;\nint count = 0;\nfor (int i = 0; i < N; i++) {\n    num = input.nextInt();\n    if (num % 7 == 0) {\n        count++;\n    }\n}\nSystem.out.println(\"count of \" + N + \" numbers is \" + count);\n```\nהמשתמש הקליד קודם 5, ואחר כך: `35, -14, 6, 49, 13`. איזה מספר יופיע בסוף השורה האחרונה?",
          "ru": "Это программа-счётчик с урока: она читает N, потом N чисел и считает, сколько из них делятся на 7.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter a number: \");\nint N = input.nextInt();\nSystem.out.println(\"Please enter \" + N + \" numbers: \");\nint num;\nint count = 0;\nfor (int i = 0; i < N; i++) {\n    num = input.nextInt();\n    if (num % 7 == 0) {\n        count++;\n    }\n}\nSystem.out.println(\"count of \" + N + \" numbers is \" + count);\n```\nПользователь сначала ввёл 5, потом по очереди: 35, −14, 6, 49, 13. Какое число будет в конце последней строки?",
          "en": "This is the counter program from the lesson: it reads N, then N numbers, and counts how many of them divide by 7.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter a number: \");\nint N = input.nextInt();\nSystem.out.println(\"Please enter \" + N + \" numbers: \");\nint num;\nint count = 0;\nfor (int i = 0; i < N; i++) {\n    num = input.nextInt();\n    if (num % 7 == 0) {\n        count++;\n    }\n}\nSystem.out.println(\"count of \" + N + \" numbers is \" + count);\n```\nThe user first typed 5, then one after another: 35, -14, 6, 49, 13. Which number is at the end of the last line?"
        },
        "example": {
          "he": "המשתמש הקליד 3, ואחר כך `-7, 15, 42` → `-7 % 7 = 0` כן → `15 % 7 = 1` לא → `42 % 7 = 0` כן → `count of 3 numbers is 2`.",
          "ru": "Пользователь ввёл 3, потом −7, 15, 42 → `-7 % 7 = 0` да → `15 % 7 = 1` нет → `42 % 7 = 0` да → `count of 3 numbers is 2`.",
          "en": "The user typed 3, then -7, 15, 42 → `-7 % 7 = 0` yes → `15 % 7 = 1` no → `42 % 7 = 0` yes → `count of 3 numbers is 2`."
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "`-14` הוא `-2` × 7. מה השארית?",
            "ru": "−14 = −2 × 7. Какой остаток?",
            "en": "-14 is -2 × 7. What is the remainder?"
          }
        ],
        "solution": [
          "35 % 7 = 0  →  count = 1",
          "-14 % 7 = 0  →  count = 2",
          "6 % 7 = 6",
          "49 % 7 = 0  →  count = 3",
          "13 % 7 = 6",
          {
            "he": "תשובה: 3",
            "ru": "Ответ: 3",
            "en": "Answer: 3"
          }
        ]
      },
      {
        "id": "x1",
        "group": "exam",
        "label": {
          "he": "5 מספרים",
          "ru": "5 чисел",
          "en": "5 numbers"
        },
        "kind": "text",
        "text": {
          "he": "זו התוכנית משאלת המבחן, רק עם 5 מספרים במקום 100: לכל מספר תלת־ספרתי היא מדפיסה את סכום הספרות.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter 5 numbers: \");\nint num;\nfor (int i = 0; i < 5; i++) {\n    num = input.nextInt();\n    if (num >= 100 && num <= 999) {\n        int sumDig = 0;\n        for (int j = 0; j < 3; j++) {\n            sumDig += (num % 10);\n            num /= 10;\n        }\n        System.out.println(sumDig);\n    }\n}\n```\nהמשתמש הקליד, אחד אחרי השני: `245, 7, 1000, 999, 100`. אילו מספרים התוכנית תדפיס אחרי השורה הראשונה? כתבו אותם עם רווח ביניהם.",
          "ru": "Это программа из экзаменационной задачи, только на 5 чисел вместо 100: для каждого трёхзначного числа она печатает сумму цифр.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter 5 numbers: \");\nint num;\nfor (int i = 0; i < 5; i++) {\n    num = input.nextInt();\n    if (num >= 100 && num <= 999) {\n        int sumDig = 0;\n        for (int j = 0; j < 3; j++) {\n            sumDig += (num % 10);\n            num /= 10;\n        }\n        System.out.println(sumDig);\n    }\n}\n```\nПользователь по очереди ввёл: 245, 7, 1000, 999, 100. Какие числа программа напечатает после первой строки? Напиши их через пробел.",
          "en": "This is the program from the exam question, only with 5 numbers instead of 100: for each three-digit number it prints the digit sum.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter 5 numbers: \");\nint num;\nfor (int i = 0; i < 5; i++) {\n    num = input.nextInt();\n    if (num >= 100 && num <= 999) {\n        int sumDig = 0;\n        for (int j = 0; j < 3; j++) {\n            sumDig += (num % 10);\n            num /= 10;\n        }\n        System.out.println(sumDig);\n    }\n}\n```\nThe user typed one after another: 245, 7, 1000, 999, 100. Which numbers does the program print after the first line? Write them with spaces."
        },
        "example": {
          "he": "אותה תוכנית עם 3 מספרים: `123, 50, 808` → 123 תלת־ספרתי → 3 + 2 + 1 = 6 → ‏50 לא (קטן מ־100) → 808 כן → 8 + 0 + 8 = 16 → מודפס `6 16`.",
          "ru": "Та же программа на 3 числа: 123, 50, 808 → 123 трёхзначное → 3 + 2 + 1 = 6 → 50 нет (меньше 100) → 808 да → 8 + 0 + 8 = 16 → печатается `6 16`.",
          "en": "The same program with 3 numbers: 123, 50, 808 → 123 has three digits → 3 + 2 + 1 = 6 → 50 no (less than 100) → 808 yes → 8 + 0 + 8 = 16 → `6 16` is printed."
        },
        "answer": {
          "accept": [
            "11 27 1",
            "11, 27, 1",
            "11,27,1"
          ]
        },
        "hints": [
          {
            "he": "בדקו כל מספר: האם `num >= 100 && num <= 999`?",
            "ru": "Проверь каждое число: `num >= 100 && num <= 999`?",
            "en": "Check each number: `num >= 100 && num <= 999`?"
          },
          {
            "he": "1000 הוא 4 ספרות, 7 הוא ספרה אחת.",
            "ru": "1000 — это 4 цифры, 7 — одна цифра.",
            "en": "1000 has 4 digits, 7 has one digit."
          }
        ],
        "solution": [
          "245  →  5 + 4 + 2 = 11",
          "7  →  7 >= 100  false  →  skip",
          "1000  →  1000 <= 999  false  →  skip",
          "999  →  9 + 9 + 9 = 27",
          "100  →  0 + 0 + 1 = 1",
          {
            "he": "תשובה: 11 27 1",
            "ru": "Ответ: 11 27 1",
            "en": "Answer: 11 27 1"
          }
        ]
      },
      {
        "id": "x2",
        "group": "exam",
        "label": {
          "he": "|| במקום &&",
          "ru": "|| вместо &&",
          "en": "|| instead of &&"
        },
        "kind": "number",
        "text": {
          "he": "כאן טעו בתנאי: כתבו `||` (או) במקום `&&` (וגם). התוכנית קולטת מספר אחד.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter 1 numbers: \");\nint num;\nfor (int i = 0; i < 1; i++) {\n    num = input.nextInt();\n    if (num >= 100 || num <= 999) {\n        int sumDig = 0;\n        for (int j = 0; j < 3; j++) {\n            sumDig += (num % 10);\n            num /= 10;\n        }\n        System.out.println(sumDig);\n    }\n}\n```\nהמשתמש הקליד 4567. איזה מספר התוכנית תדפיס בשורה האחרונה?",
          "ru": "Здесь ошиблись в условии: написали `||` (или) вместо `&&` (и). Программа читает одно число.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter 1 numbers: \");\nint num;\nfor (int i = 0; i < 1; i++) {\n    num = input.nextInt();\n    if (num >= 100 || num <= 999) {\n        int sumDig = 0;\n        for (int j = 0; j < 3; j++) {\n            sumDig += (num % 10);\n            num /= 10;\n        }\n        System.out.println(sumDig);\n    }\n}\n```\nПользователь ввёл 4567. Какое число программа напечатает последней строкой?",
          "en": "Here the condition is wrong: `||` (or) was written instead of `&&` (and). The program reads one number.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter 1 numbers: \");\nint num;\nfor (int i = 0; i < 1; i++) {\n    num = input.nextInt();\n    if (num >= 100 || num <= 999) {\n        int sumDig = 0;\n        for (int j = 0; j < 3; j++) {\n            sumDig += (num % 10);\n            num /= 10;\n        }\n        System.out.println(sumDig);\n    }\n}\n```\nThe user typed 4567. What number does the program print on the last line?"
        },
        "example": {
          "he": "אותה תוכנית, המשתמש הקליד 2048 → `2048 >= 100` נכון, ועם `||` זה מספיק → הלולאה הפנימית רצה רק 3 פעמים: 8 + 4 + 0 = 12 → מודפס 12 (הספרה 2 נשארה בחוץ).",
          "ru": "Та же программа, пользователь ввёл 2048 → `2048 >= 100` верно, а с `||` этого достаточно → внутренний цикл делает только 3 круга: 8 + 4 + 0 = 12 → печатается 12 (цифра 2 осталась за бортом).",
          "en": "The same program, the user typed 2048 → `2048 >= 100` is true, and with `||` that is enough → the inner loop runs only 3 times: 8 + 4 + 0 = 12 → 12 is printed (the digit 2 is left out)."
        },
        "answer": {
          "value": "18"
        },
        "hints": [
          {
            "he": "עם `||` מספיק שחלק אחד נכון.",
            "ru": "С `||` достаточно, чтобы одна часть была верна.",
            "en": "With `||` one true part is enough."
          },
          {
            "he": "הלולאה הפנימית רצה 3 פעמים בלבד.",
            "ru": "Внутренний цикл делает только 3 круга.",
            "en": "The inner loop runs only 3 times."
          }
        ],
        "solution": [
          "4567 >= 100  →  true  →  enter",
          "j = 0:  4567 % 10 = 7,  sumDig = 7,   num = 456",
          "j = 1:  456 % 10 = 6,  sumDig = 13,  num = 45",
          "j = 2:  45 % 10 = 5,  sumDig = 18,  num = 4",
          {
            "he": "תשובה: 18",
            "ru": "Ответ: 18",
            "en": "Answer: 18"
          }
        ]
      },
      {
        "id": "x3",
        "group": "exam",
        "label": {
          "he": "i בתוך i",
          "ru": "i внутри i",
          "en": "i inside i"
        },
        "kind": "choice",
        "text": {
          "he": "מה יקרה אם בלולאה הפנימית נכתוב `i` במקום `j`?\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter 5 numbers: \");\nint num;\nfor (int i = 0; i < 5; i++) {\n    num = input.nextInt();\n    if (num >= 100 && num <= 999) {\n        int sumDig = 0;\n        for (int i = 0; i < 3; i++) {\n            sumDig += (num % 10);\n            num /= 10;\n        }\n        System.out.println(sumDig);\n    }\n}\n```\nבחרו את התשובה.",
          "ru": "Что будет, если во внутреннем цикле написать `i` вместо `j`?\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter 5 numbers: \");\nint num;\nfor (int i = 0; i < 5; i++) {\n    num = input.nextInt();\n    if (num >= 100 && num <= 999) {\n        int sumDig = 0;\n        for (int i = 0; i < 3; i++) {\n            sumDig += (num % 10);\n            num /= 10;\n        }\n        System.out.println(sumDig);\n    }\n}\n```\nВыбери ответ.",
          "en": "What happens if the inner loop uses `i` instead of `j`?\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter 5 numbers: \");\nint num;\nfor (int i = 0; i < 5; i++) {\n    num = input.nextInt();\n    if (num >= 100 && num <= 999) {\n        int sumDig = 0;\n        for (int i = 0; i < 3; i++) {\n            sumDig += (num % 10);\n            num /= 10;\n        }\n        System.out.println(sumDig);\n    }\n}\n```\nChoose the answer."
        },
        "options": [
          {
            "he": "עובד בדיוק כמו עם j",
            "ru": "Работает так же, как с j",
            "en": "Works exactly like with j"
          },
          {
            "he": "לולאה אינסופית",
            "ru": "Бесконечный цикл",
            "en": "An endless loop"
          },
          {
            "he": "שגיאת קומפילציה: i כבר מוגדר",
            "ru": "Ошибка компиляции: i уже объявлена",
            "en": "A compile error: i is already defined"
          },
          {
            "he": "מדפיס רק את המספר הראשון",
            "ru": "Печатает только первое число",
            "en": "Prints only the first number"
          }
        ],
        "example": {
          "he": "שתי לולאות אחת אחרי השנייה (לא אחת בתוך השנייה) יכולות להשתמש שתיהן ב־`int i`:\n```\nfor (int i = 0; i < 2; i++) {\n    System.out.println(\"A\");\n}\nfor (int i = 0; i < 2; i++) {\n    System.out.println(\"B\");\n}\n```\nה־`i` של הראשונה כבר נעלם כשהשנייה מתחילה → זה עובד ומדפיס A, A, B, B.",
          "ru": "Два цикла один после другого (не один внутри другого) оба могут использовать `int i`:\n```\nfor (int i = 0; i < 2; i++) {\n    System.out.println(\"A\");\n}\nfor (int i = 0; i < 2; i++) {\n    System.out.println(\"B\");\n}\n```\n`i` первого цикла уже исчез, когда начинается второй → это работает и печатает A, A, B, B.",
          "en": "Two loops one after the other (not one inside the other) can both use `int i`:\n```\nfor (int i = 0; i < 2; i++) {\n    System.out.println(\"A\");\n}\nfor (int i = 0; i < 2; i++) {\n    System.out.println(\"B\");\n}\n```\nThe first loop's `i` is already gone when the second starts → this works and prints A, A, B, B."
        },
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "ה־`i` של הלולאה החיצונית עדיין קיים בתוך הלולאה הפנימית.",
            "ru": "`i` внешнего цикла ещё существует внутри внутреннего.",
            "en": "The outer loop's `i` still exists inside the inner loop."
          }
        ],
        "solution": [
          "error: variable i is already defined",
          {
            "he": "תשובה: שגיאת קומפילציה",
            "ru": "Ответ: ошибка компиляции",
            "en": "Answer: a compile error"
          }
        ]
      },
      {
        "id": "x4",
        "group": "exam",
        "label": {
          "he": "מעקב: 2 סיבובים",
          "ru": "Отслеживание: 2 круга",
          "en": "Trace: 2 rounds"
        },
        "kind": "number",
        "text": {
          "he": "זו הלולאה הפנימית משאלת המבחן, אבל היא עוצרת אחרי 2 סיבובים, ו־`num` כבר נתון.\n```\nint num = 472;\nint sumDig = 0;\nfor (int j = 0; j < 2; j++) {\n    sumDig += (num % 10);\n    num /= 10;\n}\nSystem.out.println(sumDig);\n```\nמה התוכנית תדפיס?",
          "ru": "Это внутренний цикл из экзаменационной задачи, но он останавливается после 2 кругов, а `num` уже задано.\n```\nint num = 472;\nint sumDig = 0;\nfor (int j = 0; j < 2; j++) {\n    sumDig += (num % 10);\n    num /= 10;\n}\nSystem.out.println(sumDig);\n```\nЧто напечатает программа?",
          "en": "This is the inner loop from the exam question, but it stops after 2 rounds, and `num` is already given.\n```\nint num = 472;\nint sumDig = 0;\nfor (int j = 0; j < 2; j++) {\n    sumDig += (num % 10);\n    num /= 10;\n}\nSystem.out.println(sumDig);\n```\nWhat does the program print?"
        },
        "example": {
          "he": "אותה לולאה עם `num = 305` → סיבוב 1: `305 % 10 = 5`, `sumDig = 5, num = 30` → סיבוב 2: `30 % 10 = 0`, `sumDig = 5, num = 3` → מודפס 5.",
          "ru": "Тот же цикл с `num = 305` → круг 1: `305 % 10 = 5`, `sumDig = 5`, `num = 30` → круг 2: `30 % 10 = 0`, `sumDig = 5`, `num = 3` → печатается 5.",
          "en": "The same loop with `num = 305` → round 1: `305 % 10 = 5`, `sumDig = 5`, `num = 30` → round 2: `30 % 10 = 0`, `sumDig = 5`, `num = 3` → 5 is printed."
        },
        "answer": {
          "value": "9"
        },
        "hints": [
          {
            "he": "`% 10` נותן את הספרה האחרונה, `/= 10` מוחק אותה.",
            "ru": "`% 10` даёт последнюю цифру, `/= 10` стирает её.",
            "en": "`% 10` gives the last digit, `/= 10` erases it."
          }
        ],
        "solution": [
          "j = 0:  472 % 10 = 2,  sumDig = 2,  num = 47",
          "j = 1:  47 % 10 = 7,  sumDig = 9,  num = 4",
          "j = 2:  2 < 2  false  →  exit",
          {
            "he": "תשובה: 9",
            "ru": "Ответ: 9",
            "en": "Answer: 9"
          }
        ]
      },
      {
        "id": "k1",
        "group": "course",
        "label": {
          "he": "break",
          "ru": "break",
          "en": "break"
        },
        "kind": "text",
        "text": {
          "he": "תוכנית בסגנון הדוגמה של `break` מהסיכום.\n```\nfor (int i = 3; i <= 10; i++) {\n    if (i == 7) {\n        System.out.println(\"Breaking at 7!\");\n        break;\n    }\n    System.out.println(i);\n}\n```\nאילו מספרים יודפסו לפני ההודעה `Breaking at 7!`? כתבו אותם עם רווח ביניהם.",
          "ru": "Программа по образцу примера `break` из конспекта.\n```\nfor (int i = 3; i <= 10; i++) {\n    if (i == 7) {\n        System.out.println(\"Breaking at 7!\");\n        break;\n    }\n    System.out.println(i);\n}\n```\nКакие числа напечатаются до сообщения `Breaking at 7!`? Напиши их через пробел.",
          "en": "A program in the style of the `break` example from the summary.\n```\nfor (int i = 3; i <= 10; i++) {\n    if (i == 7) {\n        System.out.println(\"Breaking at 7!\");\n        break;\n    }\n    System.out.println(i);\n}\n```\nWhich numbers are printed before the message `Breaking at 7!`? Write them with spaces."
        },
        "example": {
          "he": "הדוגמה מהסיכום: הלולאה מ־1 עד 10, ו־`break` כש־`i == 5` → מודפסים `1, 2, 3, 4` → כש־`i = 5` מודפס `Breaking at 5!` ויוצאים, אז 5 עצמו לא מודפס.",
          "ru": "Пример из конспекта: цикл от 1 до 10 и `break`, когда `i == 5` → печатаются 1, 2, 3, 4 → при `i = 5` печатается `Breaking at 5!` и выход, так что само 5 не печатается.",
          "en": "The example from the summary: the loop from 1 to 10, and `break` when `i == 5` → 1, 2, 3, 4 are printed → at `i = 5` `Breaking at 5!` is printed and the loop ends, so 5 itself is not printed."
        },
        "answer": {
          "accept": [
            "3 4 5 6",
            "3, 4, 5, 6",
            "3,4,5,6"
          ]
        },
        "hints": [
          {
            "he": "מאיזה מספר הלולאה מתחילה?",
            "ru": "С какого числа начинается цикл?",
            "en": "Which number does the loop start from?"
          },
          {
            "he": "הבדיקה `i == 7` באה לפני ההדפסה.",
            "ru": "Проверка `i == 7` стоит до печати.",
            "en": "The check `i == 7` comes before the print."
          }
        ],
        "solution": [
          "i = 3, 4, 5, 6  →  printed",
          "i = 7  →  Breaking at 7!  →  break",
          {
            "he": "תשובה: 3 4 5 6",
            "ru": "Ответ: 3 4 5 6",
            "en": "Answer: 3 4 5 6"
          }
        ]
      },
      {
        "id": "k2",
        "group": "course",
        "label": {
          "he": "continue",
          "ru": "continue",
          "en": "continue"
        },
        "kind": "text",
        "text": {
          "he": "תוכנית בסגנון הדוגמה של `continue` מהסיכום.\n```\nfor (int i = 1; i <= 10; i++) {\n    if (i % 3 == 0) {\n        continue;\n    }\n    System.out.println(i);\n}\n```\nאילו מספרים יודפסו? כתבו אותם עם רווח ביניהם.",
          "ru": "Программа по образцу примера `continue` из конспекта.\n```\nfor (int i = 1; i <= 10; i++) {\n    if (i % 3 == 0) {\n        continue;\n    }\n    System.out.println(i);\n}\n```\nКакие числа напечатаются? Напиши их через пробел.",
          "en": "A program in the style of the `continue` example from the summary.\n```\nfor (int i = 1; i <= 10; i++) {\n    if (i % 3 == 0) {\n        continue;\n    }\n    System.out.println(i);\n}\n```\nWhich numbers are printed? Write them with spaces."
        },
        "example": {
          "he": "הדוגמה מהסיכום: `if (i % 2 == 0) continue;` → כל מספר זוגי מדלג על ההדפסה → מודפסים 1 3 5 7 9.",
          "ru": "Пример из конспекта: `if (i % 2 == 0) continue;` → каждое чётное число пропускает печать → печатаются 1 3 5 7 9.",
          "en": "The example from the summary: `if (i % 2 == 0) continue;` → every even number skips the print → 1 3 5 7 9 are printed."
        },
        "answer": {
          "accept": [
            "1 2 4 5 7 8 10",
            "1, 2, 4, 5, 7, 8, 10",
            "1,2,4,5,7,8,10"
          ]
        },
        "hints": [
          {
            "he": "אילו מספרים מ־1 עד 10 מתחלקים ב־3?",
            "ru": "Какие числа от 1 до 10 делятся на 3?",
            "en": "Which numbers from 1 to 10 divide by 3?"
          }
        ],
        "solution": [
          "3, 6, 9  →  i % 3 == 0  →  continue",
          {
            "he": "תשובה: 1 2 4 5 7 8 10",
            "ru": "Ответ: 1 2 4 5 7 8 10",
            "en": "Answer: 1 2 4 5 7 8 10"
          }
        ]
      },
      {
        "id": "k3",
        "group": "course",
        "label": {
          "he": "קפיצות של 5",
          "ru": "Шаг 5",
          "en": "Steps of 5"
        },
        "kind": "number",
        "text": {
          "he": "לולאה בקפיצות, כמו `i += 2` בסיכום.\n```\nfor (int i = 0; i <= 20; i += 5) {\n    System.out.println(i);\n}\n```\nכמה מספרים יודפסו?",
          "ru": "Цикл с шагом, как `i += 2` в конспекте.\n```\nfor (int i = 0; i <= 20; i += 5) {\n    System.out.println(i);\n}\n```\nСколько чисел напечатается?",
          "en": "A loop in steps, like `i += 2` in the summary.\n```\nfor (int i = 0; i <= 20; i += 5) {\n    System.out.println(i);\n}\n```\nHow many numbers are printed?"
        },
        "example": {
          "he": "הדוגמה מהסיכום, `i += 2` מ־0 עד 20 → `0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20` → 11 מספרים (גם 0 וגם 20 נספרים).",
          "ru": "Пример из конспекта, `i += 2` от 0 до 20 → 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 → 11 чисел (и 0, и 20 считаются).",
          "en": "The example from the summary, `i += 2` from 0 to 20 → 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 → 11 numbers (both 0 and 20 count)."
        },
        "answer": {
          "value": "5"
        },
        "hints": [
          {
            "he": "כתבו את הערכים של `i` אחד אחרי השני.",
            "ru": "Выпиши значения `i` по очереди.",
            "en": "Write the values of `i` one by one."
          },
          {
            "he": "`<=` כולל את 20.",
            "ru": "`<=` включает 20.",
            "en": "`<=` includes 20."
          }
        ],
        "solution": [
          "i = 0, 5, 10, 15, 20",
          "i = 25  →  25 <= 20  false",
          {
            "he": "תשובה: 5",
            "ru": "Ответ: 5",
            "en": "Answer: 5"
          }
        ]
      },
      {
        "id": "k4",
        "group": "course",
        "label": {
          "he": "לולאה יורדת",
          "ru": "Цикл вниз",
          "en": "A loop going down"
        },
        "kind": "text",
        "text": {
          "he": "לולאה יורדת בקפיצות של 3.\n```\nfor (int i = 10; i >= 1; i -= 3) {\n    System.out.println(i);\n}\n```\nאילו מספרים יודפסו? כתבו אותם עם רווח ביניהם.",
          "ru": "Цикл вниз с шагом 3.\n```\nfor (int i = 10; i >= 1; i -= 3) {\n    System.out.println(i);\n}\n```\nКакие числа напечатаются? Напиши их через пробел.",
          "en": "A loop going down in steps of 3.\n```\nfor (int i = 10; i >= 1; i -= 3) {\n    System.out.println(i);\n}\n```\nWhich numbers are printed? Write them with spaces."
        },
        "example": {
          "he": "הדוגמה היורדת מהסיכום, עם `i--` מ־5 → `5, 4, 3, 2, 1` → כש־`i = 0` התנאי `0 >= 1` לא נכון.",
          "ru": "Пример вниз из конспекта, с `i--` от 5 → 5, 4, 3, 2, 1 → при `i = 0` условие `0 >= 1` неверно.",
          "en": "The counting-down example from the summary, with `i--` from 5 → 5, 4, 3, 2, 1 → at `i = 0` the condition `0 >= 1` is false."
        },
        "answer": {
          "accept": [
            "10 7 4 1",
            "10, 7, 4, 1",
            "10,7,4,1"
          ]
        },
        "hints": [
          {
            "he": "מחסירים 3 בכל סיבוב.",
            "ru": "На каждом круге вычитаем 3.",
            "en": "Subtract 3 each round."
          }
        ],
        "solution": [
          "10  →  7  →  4  →  1",
          "i = -2  →  -2 >= 1  false",
          {
            "he": "תשובה: 10 7 4 1",
            "ru": "Ответ: 10 7 4 1",
            "en": "Answer: 10 7 4 1"
          }
        ]
      },
      {
        "id": "k5",
        "group": "course",
        "label": {
          "he": "כמה ספרות",
          "ru": "Сколько цифр",
          "en": "How many digits"
        },
        "kind": "number",
        "text": {
          "he": "ספירת ספרות עם while, כמו בסיכום.\n```\nint n = 905060;\nint count = 0;\nwhile (n > 0) {\n    count++;\n    n /= 10;\n}\nSystem.out.println(count);\n```\nמה התוכנית תדפיס?",
          "ru": "Подсчёт цифр через while, как в конспекте.\n```\nint n = 905060;\nint count = 0;\nwhile (n > 0) {\n    count++;\n    n /= 10;\n}\nSystem.out.println(count);\n```\nЧто напечатает программа?",
          "en": "Counting digits with while, like in the summary.\n```\nint n = 905060;\nint count = 0;\nwhile (n > 0) {\n    count++;\n    n /= 10;\n}\nSystem.out.println(count);\n```\nWhat does the program print?"
        },
        "example": {
          "he": "הדוגמה מהסיכום, `n = 1234` → 1234 → 123 → 12 → 1 → 0 → ארבעה סיבובים → מודפס 4.",
          "ru": "Пример из конспекта, `n = 1234` → 1234 → 123 → 12 → 1 → 0 → четыре круга → печатается 4.",
          "en": "The example from the summary, `n = 1234` → 1234 → 123 → 12 → 1 → 0 → four rounds → 4 is printed."
        },
        "answer": {
          "value": "6"
        },
        "hints": [
          {
            "he": "האפסים באמצע ובסוף גם הם ספרות.",
            "ru": "Нули в середине и в конце — тоже цифры.",
            "en": "Zeros in the middle and at the end are digits too."
          }
        ],
        "solution": [
          "905060  →  90506  →  9050  →  905  →  90  →  9  →  0",
          "count = 6",
          {
            "he": "תשובה: 6",
            "ru": "Ответ: 6",
            "en": "Answer: 6"
          }
        ]
      },
      {
        "id": "k6",
        "group": "course",
        "label": {
          "he": "בדיקת ציון",
          "ru": "Проверка оценки",
          "en": "Checking a grade"
        },
        "kind": "number",
        "text": {
          "he": "בדיקת קלט עם while, בסגנון הדוגמה מהסיכום: מבקשים ציון שוב, עד שהוא בין 0 ל־100.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Enter a grade (0-100): \");\nint grade = input.nextInt();\nwhile (grade < 0 || grade > 100) {\n    System.out.println(\"Wrong grade, try again: \");\n    grade = input.nextInt();\n}\nSystem.out.println(\"Your grade: \" + grade);\n```\nהמשתמש הקליד, אחד אחרי השני: `120, -5, 100`. כמה פעמים תודפס השורה `Wrong grade, try again:`?",
          "ru": "Проверка ввода через while по образцу конспекта: просим оценку снова, пока она не окажется от 0 до 100.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Enter a grade (0-100): \");\nint grade = input.nextInt();\nwhile (grade < 0 || grade > 100) {\n    System.out.println(\"Wrong grade, try again: \");\n    grade = input.nextInt();\n}\nSystem.out.println(\"Your grade: \" + grade);\n```\nПользователь по очереди ввёл: 120, −5, 100. Сколько раз напечатается строка `Wrong grade, try again:`?",
          "en": "Input checking with while, in the style of the summary example: ask for the grade again until it is from 0 to 100.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Enter a grade (0-100): \");\nint grade = input.nextInt();\nwhile (grade < 0 || grade > 100) {\n    System.out.println(\"Wrong grade, try again: \");\n    grade = input.nextInt();\n}\nSystem.out.println(\"Your grade: \" + grade);\n```\nThe user typed one after another: 120, -5, 100. How many times is the line `Wrong grade, try again:` printed?"
        },
        "example": {
          "he": "המשתמש הקליד `150, 90` → `150 > 100` נכון → מודפס `Wrong grade…` פעם אחת → נקלט 90 → `90 < 0 || 90 > 100` לא נכון → יוצאים → `Your grade: 90`.",
          "ru": "Пользователь ввёл 150, 90 → `150 > 100` верно → один раз печатается `Wrong grade…` → прочитано 90 → `90 < 0 || 90 > 100` неверно → выход → `Your grade: 90`.",
          "en": "The user typed 150, 90 → `150 > 100` is true → `Wrong grade…` is printed once → 90 is read → `90 < 0 || 90 > 100` is false → exit → `Your grade: 90`."
        },
        "answer": {
          "value": "2"
        },
        "hints": [
          {
            "he": "האם 100 עצמו נחשב שגוי?",
            "ru": "Само 100 считается ошибкой?",
            "en": "Is 100 itself wrong?"
          }
        ],
        "solution": [
          "120  →  120 > 100  true  →  Wrong (1)",
          "-5  →  -5 < 0  true  →  Wrong (2)",
          "100  →  false || false  →  exit",
          {
            "he": "תשובה: 2",
            "ru": "Ответ: 2",
            "en": "Answer: 2"
          }
        ]
      },
      {
        "id": "k7",
        "group": "course",
        "label": {
          "he": "; אחרי while",
          "ru": "; после while",
          "en": "; after while"
        },
        "kind": "choice",
        "text": {
          "he": "טעות נפוצה מהסיכום: נקודה־פסיק אחרי `while (…)`.\n```\nint i = 0;\nwhile (i < 3); {\n    i++;\n}\nSystem.out.println(i);\n```\nמה יקרה?",
          "ru": "Частая ошибка из конспекта: точка с запятой после `while (…)`.\n```\nint i = 0;\nwhile (i < 3); {\n    i++;\n}\nSystem.out.println(i);\n```\nЧто произойдёт?",
          "en": "A common mistake from the summary: a semicolon after `while (…)`.\n```\nint i = 0;\nwhile (i < 3); {\n    i++;\n}\nSystem.out.println(i);\n```\nWhat happens?"
        },
        "options": [
          {
            "he": "תדפיס 3",
            "ru": "Напечатает 3",
            "en": "It prints 3"
          },
          {
            "he": "תדפיס 0",
            "ru": "Напечатает 0",
            "en": "It prints 0"
          },
          {
            "he": "הלולאה לא תיגמר אף פעם",
            "ru": "Цикл никогда не закончится",
            "en": "The loop never ends"
          },
          {
            "he": "שגיאת קומפילציה",
            "ru": "Ошибка компиляции",
            "en": "A compile error"
          }
        ],
        "example": {
          "he": "אותה טעות ב־for:\n```\nfor (int i = 0; i < 3; i++); {\n    System.out.println(\"Hi\");\n}\n```\nה־`;` הוא גוף ריק: הלולאה רצה 3 פעמים ולא עושה כלום, ואז הבלוק `{ }` רץ פעם אחת → `Hi` מודפס פעם אחת בלבד, ולא 3.",
          "ru": "Та же ошибка в for:\n```\nfor (int i = 0; i < 3; i++); {\n    System.out.println(\"Hi\");\n}\n```\n`;` — это пустое тело: цикл делает 3 круга и ничего не делает, потом блок `{ }` выполняется один раз → `Hi` печатается только один раз, а не 3.",
          "en": "The same mistake in for:\n```\nfor (int i = 0; i < 3; i++); {\n    System.out.println(\"Hi\");\n}\n```\nThe `;` is an empty body: the loop runs 3 times doing nothing, then the `{ }` block runs once → `Hi` is printed only once, not 3 times."
        },
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "ה־`;` הוא כל גוף הלולאה. מה משנה את `i` בתוכו?",
            "ru": "`;` и есть всё тело цикла. Что в нём меняет `i`?",
            "en": "The `;` is the whole loop body. What in it changes `i`?"
          }
        ],
        "solution": [
          "while (i < 3) ;     // empty body",
          "i = 0  →  0 < 3  true  →  nothing  →  0 < 3  true …",
          {
            "he": "תשובה: הלולאה לא נגמרת",
            "ru": "Ответ: цикл никогда не закончится",
            "en": "Answer: the loop never ends"
          }
        ]
      },
      {
        "id": "k8",
        "group": "course",
        "label": {
          "he": "while (true)",
          "ru": "while (true)",
          "en": "while (true)"
        },
        "kind": "number",
        "text": {
          "he": "לולאה \"אינסופית בכוונה\" עם `break`, כמו בסיכום: סוכמת מספרים עד שמקלידים 0.\n```\nScanner input = new Scanner(System.in);\nint sum = 0;\nwhile (true) {\n    int num = input.nextInt();\n    if (num == 0) {\n        break;\n    }\n    sum += num;\n}\nSystem.out.println(sum);\n```\nהמשתמש הקליד, אחד אחרי השני: `4, 9, 0, 6`. מה התוכנית תדפיס?",
          "ru": "Цикл «бесконечный нарочно» с `break`, как в конспекте: складывает числа, пока не введут 0.\n```\nScanner input = new Scanner(System.in);\nint sum = 0;\nwhile (true) {\n    int num = input.nextInt();\n    if (num == 0) {\n        break;\n    }\n    sum += num;\n}\nSystem.out.println(sum);\n```\nПользователь по очереди ввёл: 4, 9, 0, 6. Что напечатает программа?",
          "en": "A loop that is \"endless on purpose\" with `break`, like in the summary: it adds numbers until 0 is typed.\n```\nScanner input = new Scanner(System.in);\nint sum = 0;\nwhile (true) {\n    int num = input.nextInt();\n    if (num == 0) {\n        break;\n    }\n    sum += num;\n}\nSystem.out.println(sum);\n```\nThe user typed one after another: 4, 9, 0, 6. What does the program print?"
        },
        "example": {
          "he": "המשתמש הקליד `3, 3, 0` → `sum = 3`, אחר כך `sum = 6` → נקלט 0 → `break` → מודפס 6.",
          "ru": "Пользователь ввёл 3, 3, 0 → `sum = 3`, потом `sum = 6` → прочитан 0 → `break` → печатается 6.",
          "en": "The user typed 3, 3, 0 → `sum = 3`, then `sum = 6` → 0 is read → `break` → 6 is printed."
        },
        "answer": {
          "value": "13"
        },
        "hints": [
          {
            "he": "אחרי `break` התוכנית כבר לא קולטת.",
            "ru": "После `break` программа больше не читает.",
            "en": "After `break` the program reads nothing more."
          }
        ],
        "solution": [
          "4  →  sum = 4",
          "9  →  sum = 13",
          "0  →  break",
          "6  →  never read",
          {
            "he": "תשובה: 13",
            "ru": "Ответ: 13",
            "en": "Answer: 13"
          }
        ]
      }
    ],
    "ai": [
      {
        "id": "a1",
        "level": 1,
        "label": "D1",
        "kind": "number",
        "text": {
          "he": "כמה סיבובים?\n```\nint i = 10;\nint rounds = 0;\nwhile (i > 0) {\n    i -= 4;\n    rounds++;\n}\nSystem.out.println(rounds);\n```\nמה התוכנית תדפיס?",
          "ru": "Сколько кругов?\n```\nint i = 10;\nint rounds = 0;\nwhile (i > 0) {\n    i -= 4;\n    rounds++;\n}\nSystem.out.println(rounds);\n```\nЧто напечатает программа?",
          "en": "How many rounds?\n```\nint i = 10;\nint rounds = 0;\nwhile (i > 0) {\n    i -= 4;\n    rounds++;\n}\nSystem.out.println(rounds);\n```\nWhat does the program print?"
        },
        "example": {
          "he": "`i = 7` ו־`i -= 2` → `7, 5, 3, 1` נכנסים ללולאה → אחר כך `i = -1`, והתנאי `-1 > 0` לא נכון → 4 סיבובים.",
          "ru": "`i = 7` и `i -= 2` → в цикл заходят 7, 5, 3, 1 → потом `i = -1`, и условие `-1 > 0` неверно → 4 круга.",
          "en": "`i = 7` and `i -= 2` → 7, 5, 3, 1 enter the loop → then `i = -1`, and `-1 > 0` is false → 4 rounds."
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "כתבו את `i` לפני כל בדיקה.",
            "ru": "Выписывай `i` перед каждой проверкой.",
            "en": "Write `i` before each check."
          }
        ],
        "solution": [
          "i = 10  →  6, rounds = 1",
          "i = 6  →  2, rounds = 2",
          "i = 2  →  -2, rounds = 3",
          "-2 > 0  false",
          {
            "he": "תשובה: 3",
            "ru": "Ответ: 3",
            "en": "Answer: 3"
          }
        ]
      },
      {
        "id": "a2",
        "level": 1,
        "label": "D2",
        "kind": "number",
        "text": {
          "he": "חילוק עם `(double)`.\n```\nint a = 9;\nint b = 4;\nSystem.out.println((double) a / b);\n```\nמה התוכנית תדפיס?",
          "ru": "Деление с `(double)`.\n```\nint a = 9;\nint b = 4;\nSystem.out.println((double) a / b);\n```\nЧто напечатает программа?",
          "en": "Division with `(double)`.\n```\nint a = 9;\nint b = 4;\nSystem.out.println((double) a / b);\n```\nWhat does the program print?"
        },
        "example": {
          "he": "`a = 7, b = 2` → `a / b` = 3 (שני int, השבר נמחק) → `(double) a / b` = 3.5.",
          "ru": "`a = 7`, `b = 2` → `a / b` = 3 (два int, дробь отбрасывается) → `(double) a / b` = 3.5.",
          "en": "`a = 7`, `b = 2` → `a / b` = 3 (two ints, the fraction is dropped) → `(double) a / b` = 3.5."
        },
        "answer": {
          "value": "2.25"
        },
        "hints": [
          {
            "he": "`(double)` הופך את `a` ל־9.0 לפני החילוק.",
            "ru": "`(double)` превращает `a` в 9.0 до деления.",
            "en": "`(double)` turns `a` into 9.0 before dividing."
          }
        ],
        "solution": [
          "(double) 9 = 9.0",
          "9.0 / 4 = 2.25",
          {
            "he": "תשובה: 2.25",
            "ru": "Ответ: 2.25",
            "en": "Answer: 2.25"
          }
        ]
      },
      {
        "id": "a3",
        "level": 2,
        "label": "D3",
        "kind": "number",
        "text": {
          "he": "התוכנית סופרת מספרים שליליים עד שמקלידים 0.\n```\nScanner input = new Scanner(System.in);\nint neg = 0;\nint num = input.nextInt();\nwhile (num != 0) {\n    if (num < 0) {\n        neg++;\n    }\n    num = input.nextInt();\n}\nSystem.out.println(neg);\n```\nהמשתמש הקליד, אחד אחרי השני: `3, -4, -1, 8, -6, 0`. מה התוכנית תדפיס?",
          "ru": "Программа считает отрицательные числа, пока не введут 0.\n```\nScanner input = new Scanner(System.in);\nint neg = 0;\nint num = input.nextInt();\nwhile (num != 0) {\n    if (num < 0) {\n        neg++;\n    }\n    num = input.nextInt();\n}\nSystem.out.println(neg);\n```\nПользователь по очереди ввёл: 3, −4, −1, 8, −6, 0. Что напечатает программа?",
          "en": "The program counts negative numbers until 0 is typed.\n```\nScanner input = new Scanner(System.in);\nint neg = 0;\nint num = input.nextInt();\nwhile (num != 0) {\n    if (num < 0) {\n        neg++;\n    }\n    num = input.nextInt();\n}\nSystem.out.println(neg);\n```\nThe user typed one after another: 3, -4, -1, 8, -6, 0. What does the program print?"
        },
        "example": {
          "he": "המשתמש הקליד `-2, 5, 0` → `-2 < 0`, אז `neg = 1` → 5 לא שלילי → 0 עוצר → מודפס 1.",
          "ru": "Пользователь ввёл −2, 5, 0 → −2 < 0, значит `neg = 1` → 5 не отрицательное → 0 останавливает → печатается 1.",
          "en": "The user typed -2, 5, 0 → -2 < 0, so `neg = 1` → 5 is not negative → 0 stops → 1 is printed."
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "כאן `-1` הוא מספר רגיל, כי העצירה היא 0.",
            "ru": "Здесь −1 обычное число: остановка по 0.",
            "en": "Here -1 is an ordinary number: the stop is 0."
          }
        ],
        "solution": [
          "-4  →  neg = 1",
          "-1  →  neg = 2",
          "-6  →  neg = 3",
          "0  →  exit",
          {
            "he": "תשובה: 3",
            "ru": "Ответ: 3",
            "en": "Answer: 3"
          }
        ]
      },
      {
        "id": "a4",
        "level": 2,
        "label": "D4",
        "kind": "number",
        "text": {
          "he": "התוכנית סוכמת רק את המספרים החיוביים עד `-111`.\n```\nScanner input = new Scanner(System.in);\nint sum = 0;\nint num = input.nextInt();\nwhile (num != -111) {\n    if (num > 0) {\n        sum += num;\n    }\n    num = input.nextInt();\n}\nSystem.out.println(sum);\n```\nהמשתמש הקליד, אחד אחרי השני: `5, -2, 7, -111`. מה התוכנית תדפיס?",
          "ru": "Программа складывает только положительные числа до −111.\n```\nScanner input = new Scanner(System.in);\nint sum = 0;\nint num = input.nextInt();\nwhile (num != -111) {\n    if (num > 0) {\n        sum += num;\n    }\n    num = input.nextInt();\n}\nSystem.out.println(sum);\n```\nПользователь по очереди ввёл: 5, −2, 7, −111. Что напечатает программа?",
          "en": "The program adds only the positive numbers until -111.\n```\nScanner input = new Scanner(System.in);\nint sum = 0;\nint num = input.nextInt();\nwhile (num != -111) {\n    if (num > 0) {\n        sum += num;\n    }\n    num = input.nextInt();\n}\nSystem.out.println(sum);\n```\nThe user typed one after another: 5, -2, 7, -111. What does the program print?"
        },
        "example": {
          "he": "המשתמש הקליד `3, -8, -111` → 3 > 0, אז `sum = 3` → `-8` לא חיובי → `-111` עוצר → מודפס 3.",
          "ru": "Пользователь ввёл 3, −8, −111 → 3 > 0, значит `sum = 3` → −8 не положительное → −111 останавливает → печатается 3.",
          "en": "The user typed 3, -8, -111 → 3 > 0, so `sum = 3` → -8 is not positive → -111 stops → 3 is printed."
        },
        "answer": {
          "value": "12"
        },
        "hints": [
          {
            "he": "רק מספרים עם `num > 0` נכנסים לסכום.",
            "ru": "В сумму попадают только числа с `num > 0`.",
            "en": "Only numbers with `num > 0` go into the sum."
          }
        ],
        "solution": [
          "5  →  sum = 5",
          "-2  →  skip",
          "7  →  sum = 12",
          "-111  →  exit",
          {
            "he": "תשובה: 12",
            "ru": "Ответ: 12",
            "en": "Answer: 12"
          }
        ]
      },
      {
        "id": "a5",
        "level": 3,
        "label": "D5",
        "kind": "text",
        "text": {
          "he": "שני תנאי עצירה: 5 מספרים, או שהסכום עבר 20.\n```\nScanner input = new Scanner(System.in);\nint count = 0;\nint sum = 0;\nwhile (count < 5 && sum <= 20) {\n    int num = input.nextInt();\n    sum += num;\n    count++;\n}\nSystem.out.println(count + \" \" + sum);\n```\nהמשתמש הקליד, אחד אחרי השני: `6, 8, 9, 2, 1, 3`. מה התוכנית תדפיס? (שני מספרים עם רווח)",
          "ru": "Два условия остановки: 5 чисел или сумма больше 20.\n```\nScanner input = new Scanner(System.in);\nint count = 0;\nint sum = 0;\nwhile (count < 5 && sum <= 20) {\n    int num = input.nextInt();\n    sum += num;\n    count++;\n}\nSystem.out.println(count + \" \" + sum);\n```\nПользователь по очереди ввёл: 6, 8, 9, 2, 1, 3. Что напечатает программа? (два числа через пробел)",
          "en": "Two stop conditions: 5 numbers, or the sum is over 20.\n```\nScanner input = new Scanner(System.in);\nint count = 0;\nint sum = 0;\nwhile (count < 5 && sum <= 20) {\n    int num = input.nextInt();\n    sum += num;\n    count++;\n}\nSystem.out.println(count + \" \" + sum);\n```\nThe user typed one after another: 6, 8, 9, 2, 1, 3. What does the program print? (two numbers with a space)"
        },
        "example": {
          "he": "המשתמש הקליד שישה 1 → אחרי 5 סיבובים `count = 5, sum = 5` → `5 < 5` לא נכון → עוצרים, ה־1 השישי לא נקלט → מודפס `5 5`.",
          "ru": "Пользователь ввёл шесть единиц → после 5 кругов `count = 5`, `sum = 5` → `5 < 5` неверно → стоп, шестая единица не читается → печатается `5 5`.",
          "en": "The user typed six 1s → after 5 rounds `count = 5`, `sum = 5` → `5 < 5` is false → stop, the sixth 1 is not read → `5 5` is printed."
        },
        "answer": {
          "accept": [
            "3 23",
            "3, 23",
            "3,23"
          ]
        },
        "hints": [
          {
            "he": "התנאי נבדק לפני כל סיבוב, אחרי שהסכום כבר גדל.",
            "ru": "Условие проверяется перед каждым кругом, когда сумма уже выросла.",
            "en": "The condition is checked before each round, after the sum has grown."
          }
        ],
        "solution": [
          "6  →  count = 1, sum = 6",
          "8  →  count = 2, sum = 14",
          "9  →  count = 3, sum = 23",
          "23 <= 20  false  →  exit",
          {
            "he": "תשובה: 3 23",
            "ru": "Ответ: 3 23",
            "en": "Answer: 3 23"
          }
        ]
      },
      {
        "id": "a6",
        "level": 3,
        "label": "D6",
        "kind": "text",
        "text": {
          "he": "כמו שאלת המבחן, אבל למספרים בני 4 ספרות.\n```\nScanner input = new Scanner(System.in);\nint num;\nfor (int i = 0; i < 3; i++) {\n    num = input.nextInt();\n    if (num >= 1000 && num <= 9999) {\n        int sumDig = 0;\n        for (int j = 0; j < 4; j++) {\n            sumDig += (num % 10);\n            num /= 10;\n        }\n        System.out.println(sumDig);\n    }\n}\n```\nהמשתמש הקליד, אחד אחרי השני: `1234, 999, 9081`. אילו מספרים יודפסו? כתבו אותם עם רווח ביניהם.",
          "ru": "Как задача экзамена, но для четырёхзначных чисел.\n```\nScanner input = new Scanner(System.in);\nint num;\nfor (int i = 0; i < 3; i++) {\n    num = input.nextInt();\n    if (num >= 1000 && num <= 9999) {\n        int sumDig = 0;\n        for (int j = 0; j < 4; j++) {\n            sumDig += (num % 10);\n            num /= 10;\n        }\n        System.out.println(sumDig);\n    }\n}\n```\nПользователь по очереди ввёл: 1234, 999, 9081. Какие числа напечатаются? Напиши их через пробел.",
          "en": "Like the exam question, but for four-digit numbers.\n```\nScanner input = new Scanner(System.in);\nint num;\nfor (int i = 0; i < 3; i++) {\n    num = input.nextInt();\n    if (num >= 1000 && num <= 9999) {\n        int sumDig = 0;\n        for (int j = 0; j < 4; j++) {\n            sumDig += (num % 10);\n            num /= 10;\n        }\n        System.out.println(sumDig);\n    }\n}\n```\nThe user typed one after another: 1234, 999, 9081. Which numbers are printed? Write them with spaces."
        },
        "example": {
          "he": "אותה תוכנית עם 2 מספרים: `2222, 50` → 2222 בן 4 ספרות → 2 + 2 + 2 + 2 = 8 → ‏50 לא → מודפס 8.",
          "ru": "Та же программа на 2 числа: 2222, 50 → 2222 четырёхзначное → 2 + 2 + 2 + 2 = 8 → 50 нет → печатается 8.",
          "en": "The same program with 2 numbers: 2222, 50 → 2222 has four digits → 2 + 2 + 2 + 2 = 8 → 50 no → 8 is printed."
        },
        "answer": {
          "accept": [
            "10 18",
            "10, 18",
            "10,18"
          ]
        },
        "hints": [
          {
            "he": "999 הוא תלת־ספרתי.",
            "ru": "999 — трёхзначное.",
            "en": "999 has three digits."
          }
        ],
        "solution": [
          "1234  →  4 + 3 + 2 + 1 = 10",
          "999  →  999 >= 1000  false",
          "9081  →  1 + 8 + 0 + 9 = 18",
          {
            "he": "תשובה: 10 18",
            "ru": "Ответ: 10 18",
            "en": "Answer: 10 18"
          }
        ]
      }
    ]
  }
};

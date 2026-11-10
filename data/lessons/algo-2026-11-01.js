/* Lesson data — format: see the comment at the top of data/lessons/math-2026-11-01.js.
   Every "what does it print" answer in this file was checked by compiling and running
   the Java code (javac/java 21) with the given input. */
window.LESSONS = window.LESSONS || {};
window.LESSONS["algo-2026-11-01"] = {
  "id": "algo-2026-11-01",
  "subject": "algo",
  "date": "2026-11-01",
  "title": {
    "he": "לולאות: צבירה, מנייה, while ומקסימום",
    "ru": "Циклы: сумма, счётчик, while и максимум",
    "en": "Loops: sums, counters, while and maximum"
  },
  "summary": {
    "he": "סכומים עם `for`, מונה עם `counter++`, לולאת `while` עם דגל (קלט-דמה), תבנית למציאת מקסימום ו־`Integer.MIN_VALUE`, `break` ו־`continue`, וסכום ספרות של מספר בכל אורך.",
    "ru": "Суммы через `for`, счётчик `counter++`, цикл `while` с флагом (фиктивный ввод), шаблон поиска максимума и `Integer.MIN_VALUE`, `break` и `continue`, сумма цифр числа любой длины.",
    "en": "Sums with `for`, a counter with `counter++`, a `while` loop with a flag (dummy input), the maximum pattern and `Integer.MIN_VALUE`, `break` and `continue`, and the digit sum of a number of any length."
  },
  "timeline": [
    {
      "why": {
        "he": "לפני שכותבים לולאה עונים על שלוש שאלות: מאיפה מתחילים? מתי עוצרים? מה משתנה בכל סיבוב? אם השינוי לא מקרב לעצירה (`i++` כשהתנאי `i > -6`) — הלולאה לא נגמרת. אם התנאי לא נכון כבר בהתחלה — היא לא מתחילה.",
        "ru": "Перед тем как писать цикл, ответь на три вопроса: откуда начинаем? когда останавливаемся? что меняется в каждом проходе? Если изменение не приближает к остановке (`i++` при условии `i > -6`) — цикл не кончится. Если условие неверно уже в начале — он не начнётся.",
        "en": "Before writing a loop answer three questions: where do we start? when do we stop? what changes each round? If the change does not move toward stopping (`i++` with the condition `i > -6`), the loop never ends. If the condition is false at the start, it never begins."
      },
      "kind": "tip",
      "title": {
        "he": "לולאה אינסופית ולולאה שלא רצה",
        "ru": "Бесконечный цикл и цикл, который не запустится",
        "en": "An endless loop and a loop that never runs"
      },
      "text": {
        "he": "שתי טעויות שצריך לבדוק בכל לולאה (דוגמה מהשיעור):\n• התנאי תמיד נכון: `for (int i = 0; i > -6; i++)` — 0, 1, 2… כולם גדולים מ-6-, והלולאה לא נגמרת. (בפועל היא נעצרת רק אחרי כ-2 מיליארד סיבובים, כש-`int` עובר את הגבול שלו.)\n• התנאי לא נכון כבר בפעם הראשונה: `for (int i = 0; i < -6; i++)` — 0 לא קטן מ-6-, אז הלולאה לא רצה אף פעם.",
        "ru": "Две ошибки, которые надо проверять в каждом цикле (пример с урока):\n• Условие всегда верно: `for (int i = 0; i > -6; i++)` — 0, 1, 2… все больше −6, и цикл не кончается. (На деле он остановится только примерно через 2 миллиарда проходов, когда `int` переполнится.)\n• Условие неверно уже в первый раз: `for (int i = 0; i < -6; i++)` — 0 не меньше −6, и цикл не выполнится ни разу.",
        "en": "Two mistakes to check in every loop (example from class):\n• The condition is always true: `for (int i = 0; i > -6; i++)` — 0, 1, 2… are all bigger than -6, and the loop does not end. (In practice it stops only after about 2 billion rounds, when the `int` overflows.)\n• The condition is false from the first check: `for (int i = 0; i < -6; i++)` — 0 is not less than -6, so the loop never runs."
      },
      "math": [
        "for (int i = 0; i > -6; i++)   // almost endless",
        "for (int i = 0; i < -6; i++)   // runs 0 times"
      ]
    },
    {
      "why": {
        "he": "\"צבירה\" זה כמו קופה: מתחילים מ-0 ובכל סיבוב מוסיפים. `sum` חייב להיות מחוץ ללולאה, אחרת הוא מתאפס בכל סיבוב.\nלמה `print` ולא `println` בתוך הלולאה? כדי שכל המספרים יהיו בשורה אחת, ו-`println()` הריק אחרי הלולאה יורד שורה לפני הסכום.",
        "ru": "«Накопление» — как копилка: начинаем с 0 и в каждом проходе добавляем. `sum` обязана быть вне цикла, иначе она обнуляется в каждом проходе.\nПочему `print`, а не `println` внутри цикла? Чтобы все числа были в одной строке, а пустой `println()` после цикла переводит строку перед суммой.",
        "en": "\"Accumulating\" is like a piggy bank: start from 0 and add each round. `sum` must be outside the loop, otherwise it resets every round.\nWhy `print`, not `println`, inside the loop? So all numbers are on one line, and the empty `println()` after the loop moves to a new line before the sum."
      },
      "kind": "talk",
      "title": {
        "he": "תרגילי סכום מאתר הקורס",
        "ru": "Задачи на сумму с сайта курса",
        "en": "Sum exercises from the course site"
      },
      "text": {
        "he": "השיעור התחיל בתרגילים על לולאת `for` מהקובץ באתר הקורס:\n• סכום כל המספרים מ-1 עד 10, ומ-30 עד 50 — להדפיס את המספרים, ובסוף את הסכום בשורה חדשה.\n• סכום המספרים השלמים מ-200 עד 300 — להדפיס רק את הסכום.\n• לקלוט 100 שלשות של מספרים, להדפיס את הממוצע של כל שלשה ולבדוק אם המספר האמצעי שווה לממוצע (\"כן\" / \"לא\").\nהרעיון של צבירה: משתנה `sum` מתחיל מ-0 לפני הלולאה, ובכל סיבוב מוסיפים לו `sum += i;`.",
        "ru": "Урок начался с задач на цикл `for` из файла на сайте курса:\n• Сумма всех чисел от 1 до 10 и от 30 до 50 — напечатать сами числа, а в конце сумму на новой строке.\n• Сумма целых чисел от 200 до 300 — напечатать только сумму.\n• Прочитать 100 троек чисел, напечатать среднее каждой тройки и проверить, равно ли среднее число среднему значению («да» / «нет»).\nИдея накопления: переменная `sum` начинается с 0 до цикла, и в каждом проходе к ней прибавляют `sum += i;`.",
        "en": "The lesson started with `for` loop exercises from the file on the course site:\n• The sum of all numbers from 1 to 10, and from 30 to 50 — print the numbers, and at the end the sum on a new line.\n• The sum of the whole numbers from 200 to 300 — print only the sum.\n• Read 100 triples of numbers, print the average of each triple and check whether the middle number equals that average (\"yes\" / \"no\").\nThe idea of accumulating: a `sum` variable starts at 0 before the loop, and every round adds to it with `sum += i;`."
      },
      "math": [
        "int sum = 0;",
        "for (int i = 1; i <= 10; i++) {",
        "    System.out.print(i + \" \");",
        "    sum += i;",
        "}",
        "System.out.println();",
        "System.out.println(sum);   // 55"
      ]
    },
    {
      "why": {
        "he": "המחשב לא \"מבין\" — הוא מבצע שורה אחרי שורה. טבלת מעקב מכריחה אתכם לעשות בדיוק את מה שהוא עושה, ולכן היא מגלה טעויות שבראש לא רואים. במבחן יש שאלות \"טבלת מעקב\" — זו אותה מיומנות.",
        "ru": "Компьютер не «понимает» — он выполняет строку за строкой. Таблица отслеживания заставляет тебя делать ровно то же, что и он, поэтому она находит ошибки, которых в уме не видно. На экзамене есть задания «טבלת מעקב» — это тот же навык.",
        "en": "The computer does not \"understand\" — it runs line after line. A tracing table makes you do exactly what it does, so it finds mistakes you cannot see in your head. The exam has \"tracing table\" questions — the same skill."
      },
      "kind": "talk",
      "title": {
        "he": "טבלת מעקב",
        "ru": "Таблица отслеживания (טבלת מעקב)",
        "en": "Tracing table"
      },
      "text": {
        "he": "כדי לראות מה הלולאה עושה, כותבים טבלה: עמודה לכל משתנה, שורה לכל סיבוב. לסכום 1 עד 10: `i = 1, sum = 1`; `i = 2, sum = 3`; `i = 3, sum = 6`… ובסוף `sum = 55`.\nההמלצה מהשיעור: מעקב חלקי — כמה סיבובים ראשונים, כי טבלה מלאה יכולה להיות ארוכה מאוד.",
        "ru": "Чтобы увидеть, что делает цикл, пишут таблицу: столбец на каждую переменную, строка на каждый проход. Для суммы 1..10: `i = 1, sum = 1`; `i = 2, sum = 3`; `i = 3, sum = 6`… и в конце `sum = 55`.\nСовет с урока: частичное отслеживание — несколько первых проходов, потому что полная таблица бывает очень длинной.",
        "en": "To see what a loop does, write a table: a column for each variable, a row for each round. For the sum 1..10: `i = 1, sum = 1`; `i = 2, sum = 3`; `i = 3, sum = 6`… and at the end `sum = 55`.\nThe advice from class: a partial trace — the first few rounds, because a full table can be very long."
      },
      "math": [
        "i    sum",
        "1    0 + 1 = 1",
        "2    1 + 2 = 3",
        "3    3 + 3 = 6",
        "…",
        "10   45 + 10 = 55"
      ]
    },
    {
      "why": {
        "he": "`<` לא כולל את הגבול, `<=` כולל. כדי לבדוק אם הגבולות נכונים, בודקים שני דברים: מה הערך בסיבוב הראשון ומה בסיבוב האחרון. כמה מספרים יש מ-30 עד 50? `50 − 30 + 1 = 21`.",
        "ru": "`<` не включает границу, `<=` включает. Чтобы проверить границы, смотри на две вещи: какое значение в первом проходе и какое в последнем. Сколько чисел от 30 до 50? `50 − 30 + 1 = 21`.",
        "en": "`<` does not include the limit, `<=` does. To check the limits, look at two things: the value in the first round and in the last. How many numbers from 30 to 50? `50 − 30 + 1 = 21`."
      },
      "kind": "tip",
      "title": {
        "he": "`i < 51` כדי לכלול את 50",
        "ru": "`i < 51`, чтобы попало и 50",
        "en": "`i < 51` to include 50"
      },
      "text": {
        "he": "לסכום 30 עד 50 כותבים `i <= 50` או `i < 51` — שניהם כוללים את 50 עצמו. `i < 50` עוצר ב-49. התוצאה: `840`.",
        "ru": "Для суммы 30..50 пишут `i <= 50` или `i < 51` — оба варианта включают само 50. `i < 50` остановится на 49. Результат: `840`.",
        "en": "For the sum 30..50 write `i <= 50` or `i < 51` — both include 50 itself. `i < 50` stops at 49. The result: `840`."
      },
      "math": [
        "for (int i = 30; i < 51; i++)   // 30 … 50",
        "    sum += i;",
        "// sum = 840"
      ]
    },
    {
      "why": {
        "he": "אם ה-AI כותב את הקוד, אתם מקבלים תשובה אבל לא את הדרך — ובמבחן על דף אין AI. כשמבקשים הסבר של הדרך, המוח שלכם עושה את העבודה ונשאר עם המיומנות. בגלל זה גם באתר הפרומפטים מבקשים \"להוביל, לא לפתור\".",
        "ru": "Если код пишет ИИ, ты получаешь ответ, но не путь — а на бумажном экзамене ИИ нет. Когда просишь объяснить путь, работу делает твоя голова, и навык остаётся у тебя. Поэтому и промпты на сайте просят «вести, а не решать».",
        "en": "If the AI writes the code, you get an answer but not the way — and there is no AI on a paper exam. When you ask it to explain the way, your brain does the work and keeps the skill. That is why the prompts on this site ask it to \"guide, not solve\"."
      },
      "kind": "tip",
      "title": {
        "he": "בינה מלאכותית: להסביר את הדרך, לא לפתור",
        "ru": "ИИ: объяснить путь, а не решить",
        "en": "AI: explain the way, not solve it"
      },
      "text": {
        "he": "העצה מהשיעור: כשנעזרים ב-AI, מבקשים שיסביר איך מגיעים לפתרון — לא שיכתוב את הקוד. את הקוד כותבים בעצמכם.",
        "ru": "Совет с урока: когда помогаешься ИИ, проси объяснить, как прийти к решению, а не написать код. Код пишешь сам.",
        "en": "The advice from class: when you use AI, ask it to explain how to reach the solution, not to write the code. You write the code yourself."
      }
    },
    {
      "why": {
        "he": "מונה הוא צבירה מיוחדת: במקום להוסיף את המספר, מוסיפים 1 — \"עוד אחד מתאים\". `counter++` נמצא בתוך ה-`if`, כי סופרים רק את מי שעומד בתנאי. ההדפסה אחרי הלולאה, כי רק אז הספירה גמורה.",
        "ru": "Счётчик — это особое накопление: вместо самого числа прибавляем 1 — «ещё один подходит». `counter++` стоит внутри `if`, потому что считаем только тех, кто прошёл условие. Печать — после цикла, потому что только тогда подсчёт закончен.",
        "en": "A counter is a special accumulator: instead of adding the number, add 1 — \"one more matches\". `counter++` is inside the `if` because we count only those who pass. The print is after the loop because only then is the count finished."
      },
      "kind": "board",
      "title": {
        "he": "מונה: מועמדים בגיל 22–40",
        "ru": "Счётчик: кандидаты 22–40 лет",
        "en": "A counter: applicants aged 22–40"
      },
      "text": {
        "he": "התרגיל: לקלוט גילאים של 30 מועמדים לעבודה במפעל ולהדפיס כמה מהם בגיל 22 עד 40. על המסך: משתנה `counter` מתחיל מ-0, ובכל פעם שהתנאי מתקיים — `counter++`. את התוצאה מדפיסים אחרי הלולאה.",
        "ru": "Задача: прочитать возраст 30 кандидатов на работу на заводе и напечатать, сколько из них в возрасте от 22 до 40. На экране: переменная `counter` начинается с 0, и каждый раз, когда условие выполнено, — `counter++`. Результат печатают после цикла.",
        "en": "The exercise: read the ages of 30 job applicants at a factory and print how many are aged 22 to 40. On screen: a `counter` variable starts at 0, and each time the condition holds — `counter++`. The result is printed after the loop."
      },
      "math": [
        "Scanner input = new Scanner(System.in);",
        "int counter = 0;",
        "int age;",
        "for (int i = 0; i < 30; i++) {",
        "    age = input.nextInt();",
        "    if (age >= 22 && age <= 40) {",
        "        counter++;",
        "    }",
        "}",
        "System.out.println(counter);"
      ]
    },
    {
      "why": {
        "he": "`22 < x` כבר נותן `true` או `false`, ואז Java צריכה לבדוק `true < 40` — וזה חסר משמעות. לכן מפרקים לשתי שאלות: \"גדול מ-22?\" וגם \"קטן מ-40?\".",
        "ru": "`22 < x` уже даёт `true` или `false`, и тогда Java пришлось бы проверить `true < 40` — это бессмыслица. Поэтому делим на два вопроса: «больше 22?» и «меньше 40?».",
        "en": "`22 < x` already gives `true` or `false`, and then Java would have to check `true < 40`, which makes no sense. So split it into two questions: \"more than 22?\" and \"less than 40?\"."
      },
      "kind": "tip",
      "title": {
        "he": "ב-Java אי אפשר לכתוב `22 < x < 40`",
        "ru": "В Java нельзя писать `22 < x < 40`",
        "en": "Java does not allow `22 < x < 40`"
      },
      "text": {
        "he": "כמו במתמטיקה זה נראה טבעי, אבל ב-Java זו שגיאה. כותבים שני תנאים עם \"וגם\": `age >= 22 && age <= 40`. (ב-Python דווקא מותר.)",
        "ru": "Как в математике выглядит естественно, но в Java это ошибка. Пишут два условия через «и»: `age >= 22 && age <= 40`. (В Python так как раз можно.)",
        "en": "It looks natural, like in math, but in Java it is an error. Write two conditions joined by \"and\": `age >= 22 && age <= 40`. (Python does allow it.)"
      },
      "math": [
        "if (22 <= age <= 40)            // error",
        "if (age >= 22 && age <= 40)     // correct"
      ]
    },
    {
      "why": {
        "he": "שני מונים בלולאה אחת: כל מספר נבדק פעם אחת ונכנס למונה המתאים. 0 לא חיובי ולא שלילי, ולכן הוא לא נספר באף אחד מהם.\nלממוצע של הציונים בין 60 ל-100 צריך גם סכום וגם מונה — רק של הציונים המתאימים.",
        "ru": "Два счётчика в одном цикле: каждое число проверяется один раз и попадает в нужный счётчик. 0 не положительное и не отрицательное, поэтому его не считает ни один из них.\nДля среднего оценок от 60 до 100 нужны и сумма, и счётчик — только подходящих оценок.",
        "en": "Two counters in one loop: each number is checked once and goes into the right counter. 0 is neither positive nor negative, so neither counts it.\nFor the average of grades between 60 and 100 you need both a sum and a counter — of the matching grades only."
      },
      "kind": "talk",
      "title": {
        "he": "עוד תרגילי מנייה",
        "ru": "Ещё задачи на подсчёт",
        "en": "More counting exercises"
      },
      "text": {
        "he": "מאותו קובץ:\n• ציונים של 10 תלמידים: כמה ציונים בין 90 ל-100, ומה הממוצע של הציונים שבין 60 ל-100.\n• 50 מספרים שלמים: כמה חיוביים וכמה שליליים (שני מונים).\n• לכל המספרים מ-15 עד 34 להדפיס בשורה אחת: המקום הסידורי ברצף, את המספר בריבוע ואת השורש שלו (מעוגל ל-2 ספרות אחרי הנקודה).",
        "ru": "Из того же файла:\n• Оценки 10 учеников: сколько оценок от 90 до 100, и какое среднее у оценок от 60 до 100.\n• 50 целых чисел: сколько положительных и сколько отрицательных (два счётчика).\n• Для всех чисел от 15 до 34 напечатать в одной строке: порядковое место в ряду, квадрат числа и его корень (округлённый до 2 знаков после точки).",
        "en": "From the same file:\n• Grades of 10 students: how many grades are between 90 and 100, and the average of the grades between 60 and 100.\n• 50 whole numbers: how many are positive and how many negative (two counters).\n• For all numbers from 15 to 34 print on one line: the position in the sequence, the number squared and its square root (rounded to 2 decimal places)."
      }
    },
    {
      "why": {
        "he": "`for` מתאים כשיודעים מראש כמה סיבובים. כשהמשתמש מחליט מתי לסיים, צריך סימן מוסכם — דגל. בוחרים דגל שלא יכול להיות נתון אמיתי: ציון לא יכול להיות `-1`, ולכן `-1` הוא דגל טוב.",
        "ru": "`for` подходит, когда число проходов известно заранее. Когда человек сам решает, когда закончить, нужен условный знак — флаг. Флаг выбирают так, чтобы он не мог быть настоящим значением: оценка не может быть `-1`, поэтому `-1` — хороший флаг.",
        "en": "`for` fits when you know the number of rounds in advance. When the user decides when to stop, you need an agreed sign — a flag. Pick a flag that cannot be real data: a grade cannot be `-1`, so `-1` is a good flag."
      },
      "kind": "board",
      "title": {
        "he": "כשלא יודעים כמה: לולאת while ודגל",
        "ru": "Когда количество неизвестно: while и флаг",
        "en": "When the count is unknown: while and a flag"
      },
      "text": {
        "he": "ב-`for` מספר הסיבובים ידוע מראש. כשלא יודעים כמה ציונים יהיו, משתמשים ב-`while` ובדגל.\nמהלוח: דגל — קלט-דמה שתפקידו להגיד שהלולאה מסתיימת. כאן הדגל הוא `-1`: קולטים ציון ראשון לפני הלולאה, וכל עוד הוא לא הדגל — צוברים, סופרים וקולטים את הבא.\nעל המסך: קלט 80, 90, 94, -1 → `Average grade: 88.0`.",
        "ru": "В `for` число проходов известно заранее. Когда неизвестно, сколько будет оценок, используют `while` и флаг.\nС доски: флаг — фиктивный ввод, задача которого сказать, что цикл заканчивается. Здесь флаг — `-1`: первую оценку читаем до цикла, и пока это не флаг — копим сумму, считаем и читаем следующую.\nНа экране: ввод 80, 90, 94, -1 → `Average grade: 88.0`.",
        "en": "In a `for` loop the number of rounds is known in advance. When we do not know how many grades there will be, we use `while` and a flag.\nFrom the board: a flag is dummy input whose job is to say that the loop ends. Here the flag is `-1`: read the first grade before the loop, and as long as it is not the flag — add it up, count it and read the next one.\nOn screen: input 80, 90, 94, -1 → `Average grade: 88.0`."
      },
      "math": [
        "int sum = 0;",
        "int count = 0;",
        "int grade = input.nextInt();",
        "while (grade != -1) {",
        "    sum += grade;",
        "    count++;          // counting the grades",
        "    grade = input.nextInt();",
        "}",
        "double average = (double) sum / count;",
        "System.out.println(\"Average grade: \" + average);"
      ]
    },
    {
      "why": {
        "he": "כאן לא יודעים כמה חבילות יהיו, יודעים רק מתי לעצור — לכן `while`. שימו לב: החבילה שעברה את הגבול כבר נוספה לסכום (600). אם אסור לעבור את 500 בכלל, בודקים לפני שמוסיפים — זו גרסה אחרת של התרגיל.",
        "ru": "Здесь неизвестно, сколько будет посылок, известно только, когда остановиться, — поэтому `while`. Заметь: посылка, которая перешла предел, уже прибавлена к сумме (600). Если переходить 500 вообще нельзя, проверяют до прибавления — это уже другой вариант задачи.",
        "en": "Here we do not know how many packages there will be, only when to stop — so `while`. Note: the package that crossed the limit is already in the sum (600). If 500 must never be passed, check before adding — that is a different version of the task."
      },
      "kind": "board",
      "title": {
        "he": "מעלית: צוברים עד שהמשקל עובר 500",
        "ru": "Лифт: копим, пока вес не превысит 500",
        "en": "An elevator: add up until the weight passes 500"
      },
      "text": {
        "he": "מהשקופית: המשקל המרבי במעלית הוא 500 ק״ג. לא יודעים כמה חבילות יהיו, ולכן `while`: כל עוד הסכום לא עבר 500, קולטים חבילה ומוסיפים.\nהדוגמה מהשיעור: 120, 250, 90, 140 — הסכום מגיע ל-600, עובר את 500, והלולאה נעצרת.",
        "ru": "Со слайда: максимальный вес в лифте 500 кг. Сколько будет посылок, неизвестно, поэтому `while`: пока сумма не больше 500, читаем посылку и прибавляем.\nПример с урока: 120, 250, 90, 140 — сумма становится 600, это больше 500, и цикл останавливается.",
        "en": "From the slide: the elevator holds at most 500 kg. We do not know how many packages there will be, so `while`: as long as the sum is not over 500, read a package and add it.\nThe example from class: 120, 250, 90, 140 — the sum reaches 600, passes 500, and the loop stops."
      },
      "math": [
        "int sum = 0;",
        "while (sum <= 500) {",
        "    int pack = input.nextInt();",
        "    sum += pack;",
        "}",
        "System.out.println(sum);   // 600"
      ]
    },
    {
      "why": {
        "he": "הסדר \"קולטים → בודקים → משתמשים\" חייב להישמר. אם קולטים בתחילת הסיבוב, בודקים את המספר הקודם ומשתמשים בחדש — וכך ה-`-1` נכנס לחישוב לפני שהתנאי ראה אותו. קליטה לפני הלולאה + קליטה בסוף כל סיבוב = התנאי תמיד בודק את המספר החדש.",
        "ru": "Порядок «прочитал → проверил → использовал» должен сохраняться. Если читать в начале прохода, проверяется прежнее число, а используется новое — и `-1` попадает в расчёт раньше, чем условие его увидело. Чтение до цикла + чтение в конце каждого прохода = условие всегда проверяет новое число.",
        "en": "The order \"read → check → use\" must be kept. If you read at the start of the round, you check the previous number and use the new one — so the `-1` gets into the result before the condition sees it. Read before the loop + read at the end of each round = the condition always checks the new number."
      },
      "kind": "tip",
      "title": {
        "he": "את הדגל קולטים לפני הלולאה ובסופה",
        "ru": "Флаг читают до цикла и в конце прохода",
        "en": "Read the flag before the loop and at its end"
      },
      "text": {
        "he": "אם קולטים את הציון בתחילת הסיבוב, ה-`-1` נכנס לסכום ולמונה. לכן: קליטה ראשונה לפני `while`, וקליטה חוזרת כשורה אחרונה בתוך הלולאה — אחרי `sum +=` ו-`count++`. כך התנאי בודק כל ציון חדש לפני שהוא נספר.",
        "ru": "Если читать оценку в начале прохода, `-1` попадёт в сумму и в счётчик. Поэтому: первое чтение до `while`, а повторное — последней строкой внутри цикла, после `sum +=` и `count++`. Так условие проверяет каждую новую оценку до того, как её посчитать.",
        "en": "If you read the grade at the start of the round, the `-1` gets into the sum and the counter. So: the first read goes before `while`, and the next read is the last line inside the loop, after `sum +=` and `count++`. That way the condition checks each new grade before it is counted."
      },
      "math": [
        "// wrong: input 80, 90, -1  →  sum = 169, count = 3",
        "while (grade != -1) {",
        "    grade = input.nextInt();",
        "    sum += grade;",
        "    count++;",
        "}"
      ]
    },
    {
      "why": {
        "he": "רעיון התבנית: \"האלוף עד עכשיו\". `max` שומר את הגדול שראינו עד כה, וכל מספר חדש \"מתמודד\" מולו. אם המספר מנצח — הוא האלוף החדש. בסוף, `max` הוא הגדול מכולם.\nה-`grade <= 100` בתוך ה-`if` נמצא שם כדי שהדגל (מספר לא תקין) לא יהפוך בטעות למקסימום.",
        "ru": "Идея шаблона: «чемпион на данный момент». `max` хранит самое большое из уже увиденных, и каждое новое число «соревнуется» с ним. Победило — становится новым чемпионом. В конце `max` — самое большое из всех.\n`grade <= 100` внутри `if` нужно, чтобы флаг (недопустимое число) случайно не стал максимумом.",
        "en": "The idea: \"the champion so far\". `max` keeps the biggest value seen so far, and every new number \"competes\" with it. If it wins, it is the new champion. At the end `max` is the biggest of all.\nThe `grade <= 100` inside the `if` is there so the flag (an invalid number) does not accidentally become the maximum."
      },
      "kind": "board",
      "title": {
        "he": "תבנית למציאת מספר מקסימלי",
        "ru": "Шаблон поиска максимума",
        "en": "The pattern for finding the maximum"
      },
      "text": {
        "he": "מהלוח: נתונים ציונים של תלמיד במכללה. לא ידוע כמה ציונים, אבל רוצים למצוא את הגבוה.\nהמשתנה `max` מקבל ערך התחלתי נמוך מכל ציון אפשרי (כאן 0). הלולאה רצה כל עוד הציון תקין (0–100), ובכל סיבוב: אם הציון החדש גדול מ-`max` — הוא ה-`max` החדש. בתוך ה-`if` יש גם בדיקה שהציון תקין, כדי שהדגל לא ייכנס ל-`max`.\nעל הלוח הופיע גם: `&&` מקלידים עם `Shift+7`.",
        "ru": "С доски: даны оценки студента колледжа. Сколько их — неизвестно, но нужно найти самую высокую.\nПеременная `max` получает начальное значение ниже любой возможной оценки (здесь 0). Цикл идёт, пока оценка допустима (0–100), и в каждом проходе: если новая оценка больше `max`, она становится новым `max`. Внутри `if` есть и проверка, что оценка допустима, чтобы флаг не попал в `max`.\nЕщё на доске: `&&` набирается через `Shift+7`.",
        "en": "From the board: we are given a college student's grades. We do not know how many, but we want the highest.\nThe variable `max` starts below any possible grade (here 0). The loop runs while the grade is valid (0–100), and on each round: if the new grade is bigger than `max`, it becomes the new `max`. Inside the `if` there is also a check that the grade is valid, so the flag never gets into `max`.\nAlso on the board: `&&` is typed with `Shift+7`."
      },
      "math": [
        "int max = 0;",
        "int grade = 0;",
        "while (grade >= 0 && grade <= 100) {",
        "    grade = input.nextInt();",
        "    if (grade > max && grade <= 100)",
        "        max = grade;",
        "}"
      ]
    },
    {
      "why": {
        "he": "הערך ההתחלתי של `max` חייב להפסיד לכל מספר אמיתי, כדי שהמספר הראשון יחליף אותו. 0 מפסיד רק למספרים חיוביים. `Integer.MIN_VALUE` מפסיד לכל `int`, ולכן הוא בטוח תמיד.",
        "ru": "Начальное значение `max` должно проигрывать любому настоящему числу, чтобы первое же число его заменило. 0 проигрывает только положительным. `Integer.MIN_VALUE` проигрывает любому `int`, поэтому он безопасен всегда.",
        "en": "The starting value of `max` must lose to every real number, so the first number replaces it. 0 loses only to positive numbers. `Integer.MIN_VALUE` loses to every `int`, so it is always safe."
      },
      "kind": "tip",
      "title": {
        "he": "Integer.MIN_VALUE — המספר הנמוך ביותר",
        "ru": "Integer.MIN_VALUE — самое маленькое число",
        "en": "Integer.MIN_VALUE — the lowest number"
      },
      "text": {
        "he": "מהלוח: `Integer.MIN_VALUE` הוא המספר הנמוך ביותר ש-`int` יכול להחזיק, ואפשר להשתמש בו כערך ההתחלתי של `max`. זה חשוב כשהמספרים יכולים להיות שליליים: אם כל המספרים שליליים ו-`max` מתחיל מ-0, התוכנית תדפיס 0 — מספר שבכלל לא הוקלד.",
        "ru": "С доски: `Integer.MIN_VALUE` — самое маленькое число, которое помещается в `int`, и его можно взять начальным значением `max`. Это важно, когда числа могут быть отрицательными: если все числа отрицательные, а `max` начинается с 0, программа напечатает 0 — число, которое вообще не вводили.",
        "en": "From the board: `Integer.MIN_VALUE` is the lowest number an `int` can hold, and it can be used as the starting value of `max`. This matters when numbers can be negative: if all the numbers are negative and `max` starts at 0, the program prints 0 — a number nobody typed."
      },
      "math": [
        "int max = Integer.MIN_VALUE;   // -2147483648"
      ]
    },
    {
      "why": {
        "he": "אותו היגיון הפוך: `min` צריך להתחיל מערך שכל מספר אמיתי קטן ממנו. דרך שלישית שתמיד עובדת: לקלוט את המספר הראשון ולהתחיל ממנו גם את `max` וגם את `min` — ואז לא צריך לנחש בכלל.",
        "ru": "Та же логика наоборот: `min` должен начинаться со значения, которого любое настоящее число меньше. Третий способ, который работает всегда: прочитать первое число и начать с него и `max`, и `min` — тогда ничего угадывать не надо.",
        "en": "The same logic reversed: `min` must start from a value that every real number is smaller than. A third way that always works: read the first number and start both `max` and `min` from it — then you do not need to guess at all."
      },
      "kind": "tip",
      "title": {
        "he": "ערך התחלתי למקסימום ולמינימום",
        "ru": "Начальное значение для максимума и минимума",
        "en": "Starting values for max and min"
      },
      "text": {
        "he": "בתרגיל עם מספרים תלת-ספרתיים צריך גם מינימום. `max` מתחיל מהקטן ביותר האפשרי, ו-`min` מהגדול ביותר האפשרי:\n• תמיד עובד: `max = Integer.MIN_VALUE`, `min = Integer.MAX_VALUE`.\n• כשיודעים את הטווח (תלת-ספרתיים): `max = 100`, `min = 999`.\nאם `min` מתחיל מ-0, אף מספר תלת-ספרתי לא קטן ממנו, ויודפס 0.",
        "ru": "В задаче с трёхзначными числами нужен ещё и минимум. `max` начинается с самого маленького возможного, а `min` — с самого большого возможного:\n• Работает всегда: `max = Integer.MIN_VALUE`, `min = Integer.MAX_VALUE`.\n• Когда диапазон известен (трёхзначные): `max = 100`, `min = 999`.\nЕсли `min` начать с 0, ни одно трёхзначное число не будет меньше, и напечатается 0.",
        "en": "The three-digit exercise also needs a minimum. `max` starts at the smallest possible value, and `min` at the biggest possible value:\n• Always works: `max = Integer.MIN_VALUE`, `min = Integer.MAX_VALUE`.\n• When the range is known (three digits): `max = 100`, `min = 999`.\nIf `min` starts at 0, no three-digit number is smaller, and 0 is printed."
      },
      "math": [
        "int max = 100;   // or Integer.MIN_VALUE",
        "int min = 999;   // or Integer.MAX_VALUE",
        "if (x > max) max = x;",
        "if (x < min) min = x;"
      ]
    },
    {
      "why": {
        "he": "כל ארבעת התרגילים הם אותה תבנית עם תוספת:\n1. מקסימום רגיל.\n2. מקסימום ומינימום באותה לולאה — שני \"אלופים\".\n3. שני הגדולים — `first` ו-`second`.\n4. מקסימום ומונה: כשמגיע מקסימום חדש, המונה חוזר ל-1; כשמגיע שוב אותו מקסימום — `count++`.",
        "ru": "Все четыре задачи — один шаблон с добавкой:\n1. Обычный максимум.\n2. Максимум и минимум в одном цикле — два «чемпиона».\n3. Два самых больших — `first` и `second`.\n4. Максимум и счётчик: пришёл новый максимум — счётчик снова 1; пришёл такой же максимум — `count++`.",
        "en": "All four tasks are one pattern with an extra:\n1. A plain maximum.\n2. Max and min in the same loop — two \"champions\".\n3. The two largest — `first` and `second`.\n4. Max and a counter: a new maximum resets the counter to 1; the same maximum again — `count++`."
      },
      "kind": "talk",
      "title": {
        "he": "תבניות מקסימום: תרגילים",
        "ru": "Шаблоны максимума: задачи",
        "en": "Maximum patterns: exercises"
      },
      "text": {
        "he": "מהקובץ \"תבניות אלגוריתמיות — תבניות מקסימום\":\n1. לקלוט 45 מספרים ולהדפיס את הגדול ביותר.\n2. לקלוט 100 מספרים תלת-ספרתיים ולהדפיס את הגדול ביותר ואת הקטן ביותר.\n3. לקלוט 50 מספרים ולהדפיס את שני הגדולים ביותר (אם הגדול מופיע יותר מפעם אחת, הוא יודפס פעמיים).\n4. לקלוט 80 מספרים ולהדפיס את הגדול ביותר ואת מספר הפעמים שהוא מופיע.",
        "ru": "Из файла «תבניות אלגוריתמיות — תבניות מקסימום»:\n1. Прочитать 45 чисел и напечатать самое большое.\n2. Прочитать 100 трёхзначных чисел и напечатать самое большое и самое маленькое.\n3. Прочитать 50 чисел и напечатать два самых больших (если самое большое встречается больше одного раза, оно печатается дважды).\n4. Прочитать 80 чисел и напечатать самое большое и сколько раз оно встречается.",
        "en": "From the file \"תבניות אלגוריתמיות — תבניות מקסימום\":\n1. Read 45 numbers and print the largest.\n2. Read 100 three-digit numbers and print the largest and the smallest.\n3. Read 50 numbers and print the two largest (if the largest appears more than once, it is printed twice).\n4. Read 80 numbers and print the largest and how many times it appears."
      }
    },
    {
      "why": {
        "he": "כמו טבלת ליגה: כשקבוצה חדשה עוקפת את המקום הראשון, המקום הראשון הישן יורד לשני — לא נעלם. לכן קודם \"מורידים\" (`second = first`) ורק אחר כך מעלים את החדש. בסדר הפוך הערך הישן נמחק לפני ששמרנו אותו.",
        "ru": "Как таблица чемпионата: когда новая команда обгоняет первое место, прежний лидер опускается на второе, а не исчезает. Поэтому сначала «опускаем» (`second = first`), и только потом ставим нового. В обратном порядке старое значение стирается раньше, чем мы его сохранили.",
        "en": "Like a league table: when a new team passes first place, the old leader drops to second, it does not vanish. So first move it down (`second = first`), and only then put the new one up. In the opposite order the old value is erased before we saved it."
      },
      "kind": "board",
      "title": {
        "he": "שני הגדולים: first ו-second",
        "ru": "Два самых больших: first и second",
        "en": "The two largest: first and second"
      },
      "text": {
        "he": "כדי למצוא את שני המספרים הגדולים צריך שני משתנים. כשמגיע מספר גדול מ-`first`, ה-`first` הישן יורד למקום השני — ולכן קודם `second = first`, ורק אחר כך `first = num`. אם המספר לא גדול מ-`first` אבל גדול מ-`second`, מעדכנים רק את `second`.\nמה קורה אם מחליפים את הסדר? `first` כבר השתנה, ושני המשתנים מקבלים אותו מספר.",
        "ru": "Чтобы найти два самых больших числа, нужны две переменные. Когда приходит число больше `first`, старый `first` спускается на второе место — поэтому сначала `second = first`, и только потом `first = num`. Если число не больше `first`, но больше `second`, обновляем только `second`.\nА если поменять порядок? `first` уже изменился, и обе переменные получат одно и то же число.",
        "en": "To find the two largest numbers you need two variables. When a number bigger than `first` arrives, the old `first` moves down to second place — so first `second = first`, and only then `first = num`. If the number is not bigger than `first` but is bigger than `second`, update only `second`.\nWhat if you swap the order? `first` has already changed, and both variables get the same number."
      },
      "math": [
        "if (num > first) {",
        "    second = first;",
        "    first = num;",
        "} else if (num > second) {",
        "    second = num;",
        "}",
        "System.out.println(first + \" \" + second);"
      ]
    },
    {
      "why": {
        "he": "גם כאן קולטים לפני הלולאה ובסוף כל סיבוב — אותה תבנית דגל, רק שהדגל הוא 2.\nלמה `else if`? מספר כמו 6 מתחלק ב-3 וגם זוגי. עם `else if` הוא מקבל רק את הכלל הראשון (`× 10` → 60) ולא מחולק אחר כך ב-2.",
        "ru": "И здесь читаем до цикла и в конце каждого прохода — тот же шаблон флага, только флаг — это 2.\nПочему `else if`? Число вроде 6 делится на 3 и при этом чётное. С `else if` оно получает только первое правило (`× 10` → 60) и потом не делится на 2.",
        "en": "Here too we read before the loop and at the end of each round — the same flag pattern, only the flag is 2.\nWhy `else if`? A number like 6 is divisible by 3 and also even. With `else if` it gets only the first rule (`× 10` → 60) and is not halved afterwards."
      },
      "kind": "board",
      "title": {
        "he": "while עד שמקלידים 2",
        "ru": "while до ввода 2",
        "en": "while until 2 is typed"
      },
      "text": {
        "he": "התרגיל: קולטים מספרים, כמה שלא ידוע מראש; הקלט נגמר כשמקלידים 2. כל מספר שמתחלק ב-3 הופכים למספר הגדול ממנו פי 10, וכל מספר זוגי שלא מתחלק ב-3 — לחצי ממנו. מדפיסים כל מספר אחרי השינוי.\nעל המסך: 20 → 10, 36 → 360, 17 → 17 (17 לא מתחלק ב-3 ולא זוגי, אז הוא לא משתנה).",
        "ru": "Задача: читаем числа, сколько — заранее неизвестно; ввод заканчивается, когда вводят 2. Каждое число, делящееся на 3, превращаем в число в 10 раз больше, а каждое чётное, не делящееся на 3, — в его половину. Печатаем каждое число после изменения.\nНа экране: 20 → 10, 36 → 360, 17 → 17 (17 не делится на 3 и нечётное, поэтому не меняется).",
        "en": "The exercise: read numbers, how many is not known in advance; input ends when 2 is typed. Every number divisible by 3 becomes 10 times bigger, and every even number not divisible by 3 becomes half of itself. Print each number after the change.\nOn screen: 20 → 10, 36 → 360, 17 → 17 (17 is neither divisible by 3 nor even, so it does not change)."
      },
      "math": [
        "System.out.println(\"Please enter numbers until 2:\");",
        "int num = input.nextInt();",
        "while (num != 2) {",
        "    if (num % 3 == 0) {",
        "        num *= 10;",
        "    } else if (num % 2 == 0) {",
        "        num /= 2;",
        "    }",
        "    System.out.println(num);",
        "    num = input.nextInt();",
        "}"
      ]
    },
    {
      "why": {
        "he": "\"עוצרים כש-A או B\" זה בדיוק \"ממשיכים כל עוד לא A וגם לא B\". לכן בתנאי של `while` יש `&&`: ממשיכים רק כששני הדברים עדיין מותרים. ואין חילוק ב-0: הלולאה תמיד רצה לפחות פעם אחת, כי בהתחלה `0 < 60` וגם `0 <= 1200`.",
        "ru": "«Остановиться, когда A или B» — это ровно «продолжать, пока не A и не B». Поэтому в условии `while` стоит `&&`: продолжаем, только пока оба ещё разрешено. И деления на 0 нет: цикл всегда пройдёт хотя бы раз, потому что в начале `0 < 60` и `0 <= 1200`.",
        "en": "\"Stop when A or B\" is exactly \"keep going while not A and not B\". That is why the `while` condition has `&&`: continue only while both are still allowed. And there is no division by 0: the loop always runs at least once, because at the start `0 < 60` and `0 <= 1200`."
      },
      "kind": "board",
      "title": {
        "he": "עד 60 מספרים או עד שהסכום עובר 1200",
        "ru": "До 60 чисел или пока сумма не превысит 1200",
        "en": "Up to 60 numbers or until the sum passes 1200"
      },
      "text": {
        "he": "מהלוח: קלטו מספרים מהמשתמש עד ש: או כמות המספרים תגיע ל-60, או סכום המספרים יעבור את ה-1200. הדפיסו את ממוצע המספרים שנקלטו.\nההסבר על הלוח: אי אפשר לעבור 60 מספרים, אבל מכיוון שיש תנאי נוסף — משתמשים ב-`while` עם שני תנאים.",
        "ru": "С доски: вводите числа, пока либо их количество не дойдёт до 60, либо сумма не превысит 1200. Напечатайте среднее введённых чисел.\nОбъяснение на доске: больше 60 чисел быть не может, но так как есть ещё одно условие — используем `while` с двумя условиями.",
        "en": "From the board: read numbers from the user until either the count reaches 60 or the sum passes 1200. Print the average of the numbers read.\nThe explanation on the board: there cannot be more than 60 numbers, but since there is another condition, we use `while` with two conditions."
      },
      "math": [
        "int count = 0;",
        "int sum = 0;",
        "while (count < 60 && sum <= 1200) {",
        "    int x = input.nextInt();",
        "    sum += x;",
        "    count++;",
        "}",
        "double avg = (double) sum / count;"
      ]
    },
    {
      "why": {
        "he": "`break` כמו \"יציאת חירום\": מסיימים את הלולאה עוד לפני שהתנאי נכשל. `continue` כמו \"דלג על התור הזה\": שאר הסיבוב לא קורה, אבל הלולאה ממשיכה. ב-`while(true)` אין עצירה בתנאי, ולכן חייב להיות `break` — אחרת הלולאה אינסופית.",
        "ru": "`break` — как «аварийный выход»: цикл кончается раньше, чем условие станет ложным. `continue` — как «пропусти этот ход»: остаток прохода не выполняется, но цикл идёт дальше. В `while(true)` условие никогда не остановит, поэтому там обязан быть `break`, иначе цикл бесконечный.",
        "en": "`break` is an \"emergency exit\": the loop ends before its condition fails. `continue` is \"skip this turn\": the rest of the round does not happen, but the loop goes on. In `while(true)` the condition never stops it, so there must be a `break`, otherwise the loop is endless."
      },
      "kind": "talk",
      "title": {
        "he": "בקרת לולאות: break ו-continue",
        "ru": "Управление циклом: break и continue",
        "en": "Loop control: break and continue"
      },
      "text": {
        "he": "`break` — יוצא מהלולאה מיד. `continue` — מדלג על שאר הסיבוב הנוכחי ועובר לסיבוב הבא.\nהתרגילים מהקובץ (חלק ה׳): להדפיס 1 עד 10 ולעצור עם `break` כשמגיעים ל-6; 1 עד 15 ולעצור ב-10; `while(true)` מ-1 והלאה ולעצור ב-15; להדפיס 1 עד 10 ולדלג עם `continue` על 4 ועל 8; 1 עד 20 ולדלג על הזוגיים; 1 עד 10 ולדלג על האי-זוגיים; 1 עד 12, לדלג על 5 ולעצור ב-10.",
        "ru": "`break` — сразу выходит из цикла. `continue` — пропускает остаток текущего прохода и переходит к следующему.\nЗадачи из файла (часть ה׳): напечатать 1–10 и остановиться через `break` на 6; 1–15 и остановиться на 10; `while(true)` от 1 и дальше, остановиться на 15; напечатать 1–10 и пропустить через `continue` 4 и 8; 1–20 и пропустить чётные; 1–10 и пропустить нечётные; 1–12, пропустить 5 и остановиться на 10.",
        "en": "`break` leaves the loop immediately. `continue` skips the rest of the current round and goes on to the next one.\nThe exercises from the file (part ה׳): print 1 to 10 and stop with `break` at 6; 1 to 15 and stop at 10; `while(true)` from 1 onwards and stop at 15; print 1 to 10 and skip 4 and 8 with `continue`; 1 to 20 and skip the even numbers; 1 to 10 and skip the odd numbers; 1 to 12, skip 5 and stop at 10."
      }
    },
    {
      "why": {
        "he": "ה-`continue` \"קופץ\" ישר לשלב `i++` של ה-`for`, ולכן ה-`println` לא קורה רק ב-4 וב-8. אותו פלט אפשר לקבל גם בלי `continue`: `if (i != 4 && i != 8) println(i)`. שתי הדרכים נכונות.",
        "ru": "`continue` «прыгает» сразу к шагу `i++` цикла `for`, поэтому `println` не выполняется только на 4 и 8. Тот же вывод можно получить и без `continue`: `if (i != 4 && i != 8) println(i)`. Оба способа верные.",
        "en": "`continue` \"jumps\" straight to the `i++` step of the `for`, so the `println` is skipped only for 4 and 8. You can get the same output without `continue`: `if (i != 4 && i != 8) println(i)`. Both ways are correct."
      },
      "kind": "board",
      "title": {
        "he": "continue: לדלג על 4 ו-8",
        "ru": "continue: пропустить 4 и 8",
        "en": "continue: skip 4 and 8"
      },
      "text": {
        "he": "על המסך: כש-i שווה 4 או 8, `continue` מדלג על ה-`println`, והלולאה ממשיכה. הפלט: 1, 2, 3, 5, 6, 7, 9, 10.",
        "ru": "На экране: когда i равно 4 или 8, `continue` перепрыгивает через `println`, и цикл продолжается. Вывод: 1, 2, 3, 5, 6, 7, 9, 10.",
        "en": "On screen: when i is 4 or 8, `continue` jumps over the `println`, and the loop goes on. Output: 1, 2, 3, 5, 6, 7, 9, 10."
      },
      "math": [
        "for (int i = 1; i <= 10; i++) {",
        "    if (i == 4 || i == 8) {",
        "        continue;",
        "    }",
        "    System.out.println(i);",
        "}"
      ]
    },
    {
      "why": {
        "he": "בשיעור על 736 עבדנו עם 3 שורות קבועות, כי ידענו שיש 3 ספרות. `while` עובד לכל אורך, כי הוא לא סופר ספרות — הוא ממשיך כל עוד המספר לא נגמר. כשמחקנו את כל הספרות, `number` הופך ל-0 והתנאי נכשל.",
        "ru": "На уроке про 736 было 3 фиксированные строки, потому что мы знали, что цифр 3. `while` работает для любой длины, потому что не считает цифры — он идёт, пока число не кончилось. Когда все цифры стёрты, `number` становится 0, и условие ложно.",
        "en": "In the 736 lesson we used 3 fixed lines because we knew there were 3 digits. `while` works for any length because it does not count digits — it goes on while the number is not used up. When all digits are erased, `number` becomes 0 and the condition fails."
      },
      "kind": "board",
      "title": {
        "he": "סכום ספרות של מספר באורך לא ידוע",
        "ru": "Сумма цифр числа неизвестной длины",
        "en": "The digit sum of a number of unknown length"
      },
      "text": {
        "he": "בשיעור הקודם פירקו את 736 לספרות בשלוש שורות קבועות. עם `while` זה עובד לכל אורך: כל עוד נשארו ספרות, לוקחים את האחרונה (`% 10`) ומוחקים אותה (`/= 10`). על הלוח התנאי היה `num != 0`, ועל המסך `number > 0`.",
        "ru": "Раньше 736 разбирали на цифры тремя фиксированными строками. С `while` это работает для любой длины: пока остались цифры, берём последнюю (`% 10`) и стираем её (`/= 10`). На доске условие было `num != 0`, а на экране `number > 0`.",
        "en": "Earlier, 736 was split into digits with three fixed lines. With `while` it works for any length: while digits are left, take the last one (`% 10`) and remove it (`/= 10`). On the board the condition was `num != 0`, on screen `number > 0`."
      },
      "math": [
        "System.out.println(\"Please enter a number: \");",
        "int number = input.nextInt();",
        "int digSum = 0;",
        "while (number > 0) {",
        "    digSum += (number % 10);",
        "    number /= 10;",
        "}",
        "System.out.println(\"The digit sum is \" + digSum);"
      ]
    },
    {
      "why": {
        "he": "ממוצע של מספרים שלמים יכול לצאת שבר (למשל 7 ו-8 → 7.5). בלי `(double)` Java מחלקת בשלמים ומקבלים 7. מספיק שאחד הצדדים הוא `double` כדי שהחילוק יהיה עשרוני.",
        "ru": "Среднее целых чисел может выйти дробным (например, 7 и 8 → 7.5). Без `(double)` Java делит в целых, и получается 7. Достаточно, чтобы одна сторона была `double`, — и деление станет дробным.",
        "en": "The average of whole numbers can be a fraction (e.g. 7 and 8 → 7.5). Without `(double)` Java divides as integers and you get 7. It is enough for one side to be `double` to make the division decimal."
      },
      "kind": "tip",
      "title": {
        "he": "הערה מהלוח: ממוצע עשרוני",
        "ru": "Заметка с доски: дробное среднее",
        "en": "A note from the board: a decimal average"
      },
      "text": {
        "he": "כמו בשיעורים הקודמים: `double avg = (double) sum / 3;` — ה-`(double)` לפני `sum`, אחרת החילוק בשלמים זורק את השבר.",
        "ru": "Как и на прошлых уроках: `double avg = (double) sum / 3;` — `(double)` перед `sum`, иначе целочисленное деление отбросит дробь.",
        "en": "As in earlier lessons: `double avg = (double) sum / 3;` — the `(double)` goes before `sum`, otherwise integer division drops the fraction."
      }
    },
    {
      "why": {
        "he": "כל `for` אפשר לכתוב כ-`while` ולהפך. הבחירה היא בשביל מי שקורא: `for` אומר \"מספר קבוע של סיבובים\", `while` אומר \"עד שמשהו יקרה\". קוד שמתאים לכוונה קל יותר להבין ולבדוק.",
        "ru": "Любой `for` можно переписать как `while`, и наоборот. Выбор — для того, кто читает: `for` говорит «известное число проходов», `while` — «пока что-то не случится». Код, который совпадает с замыслом, легче понять и проверить.",
        "en": "Any `for` can be written as a `while` and back. The choice is for the reader: `for` says \"a fixed number of rounds\", `while` says \"until something happens\". Code that matches the intent is easier to understand and check."
      },
      "kind": "faq",
      "q": {
        "he": "מתי `for` ומתי `while`?",
        "ru": "Когда `for`, а когда `while`?",
        "en": "When `for` and when `while`?"
      },
      "a": {
        "he": "`for` — כשיודעים מראש כמה סיבובים (30 מועמדים, המספרים 1 עד 10). `while` — כשהלולאה נגמרת לפי תנאי ולא לפי מספר: דגל כמו `-1`, הקלדה של 2, סכום שעובר 1200, או מספר שנגמרו לו הספרות.",
        "ru": "`for` — когда заранее известно число проходов (30 кандидатов, числа от 1 до 10). `while` — когда цикл заканчивается по условию, а не по количеству: флаг вроде `-1`, ввод 2, сумма больше 1200 или число, у которого кончились цифры.",
        "en": "`for` — when you know the number of rounds in advance (30 applicants, the numbers 1 to 10). `while` — when the loop ends by a condition rather than a count: a flag like `-1`, typing 2, a sum passing 1200, or a number that has run out of digits."
      }
    },
    {
      "kind": "talk",
      "title": {
        "he": "מחומרי הקורס: \"תכונה שמורה\" של כל תבנית",
        "ru": "Из материалов курса: «что хранит» каждая переменная-шаблон",
        "en": "From the course files: the \"invariant\" of each pattern"
      },
      "text": {
        "he": "בחומר של משרד החינוך לכל תבנית יש משפט אחד שנכון בכל רגע בלולאה:\n`sum` — סכום כל הערכים שנקלטו עד עכשיו.\n`count` — כמה ערכים מתאימים היו עד עכשיו.\n`max` — הערך הגדול ביותר מבין אלה שנקלטו עד עכשיו.",
        "ru": "В материалах Министерства образования у каждого шаблона есть одна фраза, верная в любой момент цикла:\n`sum` — сумма всех значений, введённых до сих пор.\n`count` — сколько подходящих значений было до сих пор.\n`max` — самое большое из значений, введённых до сих пор.",
        "en": "In the Ministry of Education files each pattern has one sentence that is true at every moment of the loop:\n`sum` — the sum of all values read so far.\n`count` — how many matching values there have been so far.\n`max` — the largest of the values read so far."
      },
      "why": {
        "he": "המשפט הזה עונה על כל שאלה של \"איך לאתחל\". לפני הלולאה עוד לא נקלט כלום — הסכום של כלום הוא 0, וגם המונה 0. ל-max אין \"גדול מכלום\", ולכן לוקחים את הקלט הראשון (או `Integer.MIN_VALUE`). אם המשפט נכון לפני הלולאה ונשמר בכל סיבוב — הוא נכון גם בסוף, וזו התשובה.",
        "ru": "Эта фраза отвечает на любой вопрос «с чего начать». До цикла ещё ничего не введено: сумма ничего — 0, счётчик тоже 0. У max нет «самого большого из ничего», поэтому берут первый ввод (или `Integer.MIN_VALUE`). Если фраза верна до цикла и сохраняется на каждом круге, она верна и в конце, — это и есть ответ.",
        "en": "This sentence answers every \"how do I initialise\" question. Before the loop nothing has been read: the sum of nothing is 0, and so is the counter. max has no \"largest of nothing\", so take the first input (or `Integer.MIN_VALUE`). If the sentence is true before the loop and kept on every pass, it is true at the end — and that is the answer."
      },
      "_src": "pass-0311"
    },
    {
      "kind": "board",
      "title": {
        "he": "מחומרי הקורס: לא רק המקסימום, אלא גם המקום שלו",
        "ru": "Из материалов курса: не только максимум, но и его место",
        "en": "From the course files: not only the maximum but also its place"
      },
      "text": {
        "he": "לפעמים שואלים \"באיזה יום היה הכי חם?\" — לא רק כמה. שומרים עוד משתנה, `place`, ומעדכנים אותו באותו רגע שמעדכנים את `max`.",
        "ru": "Иногда спрашивают «в какой день было жарче всего?», а не только «сколько градусов». Заводим ещё переменную `place` и обновляем её в тот же момент, что и `max`.",
        "en": "Sometimes the question is \"on which day was it hottest?\", not just how hot. Keep one more variable, `place`, and update it at the same moment as `max`."
      },
      "math": [
        "int max = input.nextInt();",
        "int place = 1;",
        "for (int i = 2; i <= 6; i++) {",
        "    int t = input.nextInt();",
        "    if (t > max) {",
        "        max = t;",
        "        place = i;",
        "    }",
        "}",
        "System.out.println(max + \" \" + place);"
      ],
      "why": {
        "he": "למה `>` ולא `>=`? עם `>` נשמר המקום הראשון של המקסימום. עם `>=` כל ערך שווה \"גונב\" את המקום, ונשמר האחרון. בחומר שואלים בדיוק את זה: \"מה יהיה הפלט אם יש שתי מחלקות עם אותו פדיון מקסימלי?\" — התשובה תלויה בסימן אחד.",
        "ru": "Почему `>`, а не `>=`? С `>` запоминается первое место максимума. С `>=` каждое равное значение «забирает» место, и запоминается последнее. В материалах спрашивают ровно это: «что выведет программа, если у двух отделов одинаковая максимальная выручка?» — ответ зависит от одного знака.",
        "en": "Why `>` and not `>=`? With `>` the first place of the maximum is kept. With `>=` every equal value \"steals\" the place, so the last one is kept. The files ask exactly this: \"what is the output if two departments share the top revenue?\" — the answer depends on one sign."
      },
      "_src": "pass-0311"
    },
    {
      "kind": "board",
      "title": {
        "he": "מחומרי הקורס: קבוע עם `final`",
        "ru": "Из материалов курса: константа через `final`",
        "en": "From the course files: a constant with `final`"
      },
      "text": {
        "he": "קבוע הוא שם לערך שלא משתנה. כותבים `final` לפני הטיפוס, ואת השם באותיות גדולות עם קו תחתון בין מילים.",
        "ru": "Константа — имя для значения, которое не меняется. Перед типом пишут `final`, а имя — большими буквами с подчёркиванием между словами.",
        "en": "A constant is a name for a value that does not change. Write `final` before the type, and the name in capitals with underscores between words."
      },
      "math": [
        "final double CM_IN_INCH = 2.54;",
        "double cm = inches * CM_IN_INCH;",
        "CM_IN_INCH = 3;   // error: cannot assign a value to final variable"
      ],
      "why": {
        "he": "למה לא לכתוב 2.54 ישר בנוסחה? כי שם אומר מה המספר עושה, ואם הוא מופיע בעשרה מקומות ומשתנה (למשל מחיר משלוח), מתקנים בשורה אחת. ו-`final` מגן: אם בטעות מנסים לשנות — Java נותנת שגיאה.",
        "ru": "Почему не написать 2.54 прямо в формуле? Имя говорит, что это за число, а если оно встречается в десяти местах и поменяется (например, цена доставки), правишь одну строку. А `final` защищает: если случайно попробуешь изменить, Java выдаст ошибку.",
        "en": "Why not write 2.54 right in the formula? A name says what the number is, and if it appears in ten places and changes (say a delivery price), you fix one line. And `final` protects you: if you try to change it by mistake, Java gives an error."
      },
      "_src": "pass-0311"
    }
  ],
  "review": [
    {
      "title": {
        "he": "צבירה (סכום)",
        "ru": "Накопление (сумма)",
        "en": "Accumulating (sum)"
      },
      "text": {
        "he": "`int sum = 0;` לפני הלולאה, `sum += x;` בתוכה, הדפסה אחריה.",
        "ru": "`int sum = 0;` до цикла, `sum += x;` внутри, печать после.",
        "en": "`int sum = 0;` before the loop, `sum += x;` inside, print after."
      }
    },
    {
      "title": {
        "he": "מנייה (מונה)",
        "ru": "Подсчёт (счётчик)",
        "en": "Counting (counter)"
      },
      "text": {
        "he": "`int counter = 0;` ובתוך `if` — `counter++;`.",
        "ru": "`int counter = 0;`, а внутри `if` — `counter++;`.",
        "en": "`int counter = 0;` and inside an `if` — `counter++;`."
      }
    },
    {
      "title": {
        "he": "while ודגל",
        "ru": "while и флаг",
        "en": "while and a flag"
      },
      "text": {
        "he": "קולטים לפני הלולאה, ובסוף כל סיבוב קולטים שוב. הדגל (למשל `-1`) לא נכנס לחישוב.",
        "ru": "Читаем до цикла и снова в конце каждого прохода. Флаг (например, `-1`) в расчёт не входит.",
        "en": "Read before the loop and again at the end of each round. The flag (e.g. `-1`) is not part of the calculation."
      }
    },
    {
      "title": {
        "he": "מקסימום",
        "ru": "Максимум",
        "en": "Maximum"
      },
      "text": {
        "he": "`int max = Integer.MIN_VALUE;` ואז `if (x > max) max = x;`.",
        "ru": "`int max = Integer.MIN_VALUE;`, затем `if (x > max) max = x;`.",
        "en": "`int max = Integer.MIN_VALUE;` then `if (x > max) max = x;`."
      }
    },
    {
      "title": {
        "he": "טבלת מעקב",
        "ru": "Таблица отслеживания",
        "en": "Tracing table"
      },
      "text": {
        "he": "עמודה לכל משתנה, שורה לכל סיבוב. מספיק כמה סיבובים ראשונים.",
        "ru": "Столбец на переменную, строка на проход. Хватит нескольких первых проходов.",
        "en": "A column per variable, a row per round. The first few rounds are enough."
      }
    },
    {
      "title": {
        "he": "שני הגדולים",
        "ru": "Два самых больших",
        "en": "The two largest"
      },
      "text": {
        "he": "קודם `second = first`, אחר כך `first = num`.",
        "ru": "Сначала `second = first`, потом `first = num`.",
        "en": "First `second = first`, then `first = num`."
      }
    },
    {
      "title": {
        "he": "break / continue",
        "ru": "break / continue",
        "en": "break / continue"
      },
      "text": {
        "he": "`break` — יוצאים מהלולאה. `continue` — מדלגים לסיבוב הבא.",
        "ru": "`break` — выходим из цикла. `continue` — сразу к следующему проходу.",
        "en": "`break` — leave the loop. `continue` — jump to the next round."
      }
    },
    {
      "title": {
        "he": "ספרות עם while",
        "ru": "Цифры через while",
        "en": "Digits with while"
      },
      "text": {
        "he": "`while (n > 0) { s += n % 10; n /= 10; }`",
        "ru": "`while (n > 0) { s += n % 10; n /= 10; }`",
        "en": "`while (n > 0) { s += n % 10; n /= 10; }`"
      }
    },
    {
      "title": {
        "he": "ממוצע",
        "ru": "Среднее",
        "en": "Average"
      },
      "text": {
        "he": "`(double) sum / count` — ולא `(double) (sum / count)`.",
        "ru": "`(double) sum / count` — а не `(double) (sum / count)`.",
        "en": "`(double) sum / count` — not `(double) (sum / count)`."
      }
    }
  ],
  "tasks": {
    "groups": {
      "sum": {
        "he": "סכומים עם for",
        "ru": "Суммы через for",
        "en": "Sums with for"
      },
      "while": {
        "he": "מונה, while ודגל",
        "ru": "Счётчик, while и флаг",
        "en": "Counter, while and flag"
      },
      "max": {
        "he": "תבנית מקסימום",
        "ru": "Шаблон максимума",
        "en": "The maximum pattern"
      },
      "ctrl": {
        "he": "break ו-continue",
        "ru": "break и continue",
        "en": "break and continue"
      },
      "exam": {
        "he": "מבחן לדוגמה 2026",
        "ru": "Пробный экзамен 2026",
        "en": "Sample exam 2026"
      },
      "course": {
        "he": "מחומרי הקורס",
        "ru": "Из материалов курса",
        "en": "From the course files"
      },
      "ws": {
        "he": "דף תרגול: לולאות ומעקב",
        "ru": "Лист упражнений: циклы и отслеживание",
        "en": "Worksheet: loops and tracing"
      }
    },
    "teacher": [
      {
        "id": "p1",
        "group": "sum",
        "label": "1–10",
        "kind": "number",
        "text": {
          "he": "סכום כל המספרים מ-1 עד 10. מה יודפס בשורה האחרונה?\n`int sum = 0;`\n`for (int i = 1; i <= 10; i++) {`\n`    System.out.print(i + \" \");`\n`    sum += i;`\n`}`\n`System.out.println();`\n`System.out.println(sum);`",
          "ru": "Сумма всех чисел от 1 до 10. Что будет в последней строке?\n`int sum = 0;`\n`for (int i = 1; i <= 10; i++) {`\n`    System.out.print(i + \" \");`\n`    sum += i;`\n`}`\n`System.out.println();`\n`System.out.println(sum);`",
          "en": "The sum of all numbers from 1 to 10. What is on the last line?\n`int sum = 0;`\n`for (int i = 1; i <= 10; i++) {`\n`    System.out.print(i + \" \");`\n`    sum += i;`\n`}`\n`System.out.println();`\n`System.out.println(sum);`"
        },
        "answer": {
          "value": "55"
        },
        "hints": [
          {
            "he": "עקבו אחרי `sum` אחרי כל סיבוב.",
            "ru": "Следи за `sum` после каждого прохода.",
            "en": "Track `sum` after every round."
          },
          {
            "he": "רוצים לראות איך `sum` גדל? הוסיפו בתוך הלולאה `System.out.println(i + \" \" + sum);` והריצו.",
            "ru": "Хочешь увидеть, как растёт `sum`? Добавь внутрь цикла `System.out.println(i + \" \" + sum);` и запусти.",
            "en": "Want to see how `sum` grows? Add `System.out.println(i + \" \" + sum);` inside the loop and run it."
          }
        ],
        "solution": [
          "i = 1   →  sum = 1",
          "i = 2   →  sum = 3",
          "i = 3   →  sum = 6",
          "i = 4   →  sum = 10",
          "i = 5   →  sum = 15",
          "i = 6   →  sum = 21",
          "i = 7   →  sum = 28",
          "i = 8   →  sum = 36",
          "i = 9   →  sum = 45",
          "i = 10  →  sum = 55",
          {
            "he": "שורה 1: 1 2 3 ... 10, שורה 2: 55",
            "ru": "Строка 1: 1 2 3 ... 10, строка 2: 55",
            "en": "Line 1: 1 2 3 ... 10, line 2: 55"
          }
        ]
      },
      {
        "id": "p2",
        "group": "sum",
        "label": "30–50",
        "kind": "number",
        "text": {
          "he": "התוכנית מחשבת את הסכום של כל המספרים מ-30 עד 50 (כולל). כתבו אותה, הריצו — מה היא מדפיסה?\n`int sum = 0;`\n`for (int i = 30; i <= 50; i++) {`\n`    sum += i;`\n`}`\n`System.out.println(sum);`",
          "ru": "Программа считает сумму всех чисел от 30 до 50 (включительно). Набери её и запусти — что она напечатает?\n`int sum = 0;`\n`for (int i = 30; i <= 50; i++) {`\n`    sum += i;`\n`}`\n`System.out.println(sum);`",
          "en": "The program adds up all numbers from 30 to 50 (inclusive). Type it in and run it — what does it print?\n`int sum = 0;`\n`for (int i = 30; i <= 50; i++) {`\n`    sum += i;`\n`}`\n`System.out.println(sum);`"
        },
        "answer": {
          "value": "840"
        },
        "hints": [
          {
            "he": "הלולאה מתחילה ב-`i = 30` ונעצרת אחרי `i = 50` — גם 50 נכנס לסכום (`<=`).",
            "ru": "Цикл начинается с `i = 30` и заканчивается после `i = 50` — 50 тоже входит в сумму (`<=`).",
            "en": "The loop starts at `i = 30` and stops after `i = 50` — 50 is added too (`<=`)."
          },
          {
            "he": "כדי לבדוק את עצמכם, הוסיפו בתוך הלולאה `System.out.println(i + \" \" + sum);`: השורה האחרונה תראה את הסכום הסופי.",
            "ru": "Чтобы проверить себя, добавь внутрь цикла `System.out.println(i + \" \" + sum);`: последняя строка покажет итоговую сумму.",
            "en": "To check yourself, add `System.out.println(i + \" \" + sum);` inside the loop: the last line shows the final sum."
          }
        ],
        "solution": [
          "i = 30  →  sum = 30",
          "i = 31  →  sum = 61",
          "i = 32  →  sum = 93",
          "...",
          "i = 50  →  sum = 840   (21 rounds)",
          {
            "he": "מודפס: 840",
            "ru": "Печатается: 840",
            "en": "Printed: 840"
          }
        ]
      },
      {
        "id": "p3",
        "group": "sum",
        "label": "200–300",
        "kind": "number",
        "text": {
          "he": "כתבו תוכנית שמחשבת בלולאת `for` את סכום המספרים השלמים מ-200 עד 300 (כולל) ומדפיסה רק את הסכום עם `System.out.println`. מה היא מדפיסה?",
          "ru": "Напиши программу, которая циклом `for` считает сумму целых чисел от 200 до 300 (включительно) и печатает только сумму через `System.out.println`. Что она напечатает?",
          "en": "Write a program that uses a `for` loop to add up the whole numbers from 200 to 300 (inclusive) and prints only the sum with `System.out.println`. What does it print?"
        },
        "answer": {
          "value": "25250"
        },
        "hints": [
          {
            "he": "כמו בתוכנית 30–50: `int sum = 0;` לפני הלולאה, ובתוכה `sum += i;`.",
            "ru": "Как в программе 30–50: `int sum = 0;` до цикла, а внутри `sum += i;`.",
            "en": "Like the 30–50 program: `int sum = 0;` before the loop, and `sum += i;` inside."
          },
          {
            "he": "הלולאה: `for (int i = 200; i <= 300; i++)`. את `println` שמים אחרי הסוגר `}` — כדי שיודפס רק הסכום הסופי.",
            "ru": "Цикл: `for (int i = 200; i <= 300; i++)`. `println` ставим после скобки `}` — чтобы напечаталась только итоговая сумма.",
            "en": "The loop: `for (int i = 200; i <= 300; i++)`. Put `println` after the closing `}` so that only the final sum is printed."
          }
        ],
        "solution": [
          "int sum = 0;",
          "for (int i = 200; i <= 300; i++) {",
          "    sum += i;",
          "}",
          "System.out.println(sum);",
          {
            "he": "הלולאה רצה 101 סיבובים (200, 201, ..., 300).",
            "ru": "Цикл делает 101 проход (200, 201, ..., 300).",
            "en": "The loop makes 101 rounds (200, 201, ..., 300)."
          },
          {
            "he": "מודפס: 25250",
            "ru": "Печатается: 25250",
            "en": "Printed: 25250"
          }
        ]
      },
      {
        "id": "p4",
        "group": "while",
        "label": {
          "he": "גיל 22–40",
          "ru": "Возраст 22–40",
          "en": "Age 22–40"
        },
        "kind": "number",
        "text": {
          "he": "זו תוכנית המונה מהשיעור, רק עם 6 מועמדים: היא סופרת כמה גילאים בין 22 ל־40.\n```\nScanner input = new Scanner(System.in);\nint counter = 0;\nint age;\nfor (int i = 0; i < 6; i++) {\n    age = input.nextInt();\n    if (age >= 22 && age <= 40) {\n        counter++;\n    }\n}\nSystem.out.println(counter);\n```\nדוגמה עם מספרים אחרים: המשתמש הקליד 18, 25, 45, 39, 21, 50 → הלולאה עושה 6 סיבובים, ובכל סיבוב קולטת גיל אחד → מתאימים רק 25 ו־39 → `counter` = 2 → התוכנית תדפיס 2.\nהמשימה שלך: המשתמש הקליד, אחד אחרי השני, 6 גילאים: 19, 22, 35, 40, 41, 30. איזה מספר התוכנית תדפיס בסוף?",
          "ru": "Это программа-счётчик с урока, только для 6 кандидатов: она считает, сколько возрастов от 22 до 40.\n```\nScanner input = new Scanner(System.in);\nint counter = 0;\nint age;\nfor (int i = 0; i < 6; i++) {\n    age = input.nextInt();\n    if (age >= 22 && age <= 40) {\n        counter++;\n    }\n}\nSystem.out.println(counter);\n```\nПример на других числах: пользователь ввёл 18, 25, 45, 39, 21, 50 → цикл делает 6 кругов, на каждом читает один возраст → подходят только 25 и 39 → `counter` = 2 → программа напечатает 2.\nТвоя задача: Пользователь по очереди ввёл 6 возрастов: 19, 22, 35, 40, 41, 30. Какое число программа напечатает в конце?",
          "en": "This is the counter program from the lesson, only for 6 applicants: it counts how many ages are from 22 to 40.\n```\nScanner input = new Scanner(System.in);\nint counter = 0;\nint age;\nfor (int i = 0; i < 6; i++) {\n    age = input.nextInt();\n    if (age >= 22 && age <= 40) {\n        counter++;\n    }\n}\nSystem.out.println(counter);\n```\nExample with other numbers: the user typed 18, 25, 45, 39, 21, 50 → the loop makes 6 rounds and reads one age in each → only 25 and 39 fit → `counter` = 2 → the program prints 2.\nYour task: The user typed 6 ages one after another: 19, 22, 35, 40, 41, 30. What number does the program print at the end?"
        },
        "answer": {
          "value": "4"
        },
        "hints": [
          {
            "he": "בדקו כל גיל: האם הוא בין 22 ל-40, כולל הקצוות?",
            "ru": "Проверь каждый возраст: от 22 до 40, включая края?",
            "en": "Check each age: is it between 22 and 40, including the ends?"
          }
        ],
        "solution": [
          "19  →  19 >= 22 false  →  counter = 0",
          "22  →  true && true  →  counter = 1",
          "35  →  counter = 2",
          "40  →  40 <= 40 true  →  counter = 3",
          "41  →  41 <= 40 false  →  counter = 3",
          "30  →  counter = 4",
          {
            "he": "מודפס 4",
            "ru": "Печатается 4",
            "en": "4 is printed"
          }
        ]
      },
      {
        "id": "p5",
        "group": "while",
        "label": {
          "he": "ממוצע עם דגל",
          "ru": "Среднее с флагом",
          "en": "Average with a flag"
        },
        "kind": "number",
        "text": {
          "he": "זו תוכנית הממוצע עם הדגל `-1` מהמסך: היא קולטת ציונים עד שמקלידים `-1`.\n```\nScanner input = new Scanner(System.in);\nint sum = 0;\nint count = 0;\nint grade = input.nextInt();\nwhile (grade != -1) {\n    sum += grade;\n    count++;\n    grade = input.nextInt();\n}\ndouble average = (double) sum / count;\nSystem.out.println(\"Average grade: \" + average);\n```\nדוגמה עם מספרים אחרים: המשתמש הקליד 70, 100, -1 → 70: `sum` = 70, `count` = 1 → 100: `sum` = 170, `count` = 2 → `-1` הוא הדגל, הלולאה נגמרה → 170 / 2 = 85 → התוכנית תדפיס `Average grade: 85.0`.\nהמשימה שלך: המשתמש הקליד, אחד אחרי השני: 80, 90, 94, -1. איזה ממוצע התוכנית תדפיס?",
          "ru": "Это программа среднего с флагом `-1` с экрана: она читает оценки, пока не введут `-1`.\n```\nScanner input = new Scanner(System.in);\nint sum = 0;\nint count = 0;\nint grade = input.nextInt();\nwhile (grade != -1) {\n    sum += grade;\n    count++;\n    grade = input.nextInt();\n}\ndouble average = (double) sum / count;\nSystem.out.println(\"Average grade: \" + average);\n```\nПример на других числах: пользователь ввёл 70, 100, -1 → 70: `sum` = 70, `count` = 1 → 100: `sum` = 170, `count` = 2 → `-1` — флаг, цикл закончился → 170 / 2 = 85 → программа напечатает `Average grade: 85.0`.\nТвоя задача: Пользователь по очереди ввёл: 80, 90, 94, -1. Какое среднее напечатает программа?",
          "en": "This is the average program with the flag `-1` from the screen: it reads grades until `-1` is typed.\n```\nScanner input = new Scanner(System.in);\nint sum = 0;\nint count = 0;\nint grade = input.nextInt();\nwhile (grade != -1) {\n    sum += grade;\n    count++;\n    grade = input.nextInt();\n}\ndouble average = (double) sum / count;\nSystem.out.println(\"Average grade: \" + average);\n```\nExample with other numbers: the user typed 70, 100, -1 → 70: `sum` = 70, `count` = 1 → 100: `sum` = 170, `count` = 2 → `-1` is the flag, the loop ends → 170 / 2 = 85 → the program prints `Average grade: 85.0`.\nYour task: The user typed one after another: 80, 90, 94, -1. What average does the program print?"
        },
        "answer": {
          "value": "88"
        },
        "hints": [
          {
            "he": "ה-`-1` הוא דגל: הוא לא נכנס לסכום ולא נספר.",
            "ru": "`-1` — флаг: он не входит в сумму и не считается.",
            "en": "The `-1` is a flag: it is not added and not counted."
          },
          {
            "he": "סכום 3 הציונים חלקי 3.",
            "ru": "Сумма 3 оценок, делённая на 3.",
            "en": "The sum of the 3 grades divided by 3."
          }
        ],
        "solution": [
          "grade = 80  →  sum = 80,  count = 1",
          "grade = 90  →  sum = 170, count = 2",
          "grade = 94  →  sum = 264, count = 3",
          "grade = -1  →  -1 != -1 false  →  exit",
          "(double) 264 / 3 = 88.0",
          {
            "he": "מודפס: Average grade: 88.0",
            "ru": "Печатается: Average grade: 88.0",
            "en": "Printed: Average grade: 88.0"
          }
        ]
      },
      {
        "id": "p6",
        "group": "while",
        "label": {
          "he": "עד 2",
          "ru": "До 2",
          "en": "Until 2"
        },
        "kind": "text",
        "text": {
          "he": "זו התוכנית \"עד שמקלידים 2\" מהמסך: מספר שמתחלק ב־3 נהיה גדול פי 10; מספר זוגי נהיה קטן פי 2; השאר לא משתנים.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter numbers until 2:\");\nint num = input.nextInt();\nwhile (num != 2) {\n    if (num % 3 == 0) {\n        num *= 10;\n    } else if (num % 2 == 0) {\n        num /= 2;\n    }\n    System.out.println(num);\n    num = input.nextInt();\n}\n```\nדוגמה עם מספרים אחרים: המשתמש הקליד 9, 8, 5, 2 → 9 מתחלק ב־3 → מדפיס 90 → 8 זוגי → מדפיס 4 → 5 לא משתנה → מדפיס 5 → 2 — עצור, הלולאה נגמרה → התשובה הייתה `90 4 5`.\nהמשימה שלך: המשתמש הקליד, אחד אחרי השני: 20, 36, 17, 2. אילו מספרים התוכנית תדפיס אחרי השורה `Please enter numbers until 2:`? כתבו אותם עם רווח ביניהם.",
          "ru": "Это программа «до ввода 2» с экрана: число, которое делится на 3, становится в 10 раз больше; чётное становится в 2 раза меньше; остальные не меняются.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter numbers until 2:\");\nint num = input.nextInt();\nwhile (num != 2) {\n    if (num % 3 == 0) {\n        num *= 10;\n    } else if (num % 2 == 0) {\n        num /= 2;\n    }\n    System.out.println(num);\n    num = input.nextInt();\n}\n```\nПример на других числах: пользователь ввёл 9, 8, 5, 2 → 9 делится на 3 → печатает 90 → 8 чётное → печатает 4 → 5 не меняется → печатает 5 → 2 — стоп, цикл закончился → ответ был бы `90 4 5`.\nТвоя задача: Пользователь по очереди ввёл: 20, 36, 17, 2. Какие числа программа напечатает после строки `Please enter numbers until 2:`? Напиши их через пробел.",
          "en": "This is the \"until 2 is typed\" program from the screen: a number divisible by 3 becomes 10 times bigger; an even number becomes 2 times smaller; the rest do not change.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter numbers until 2:\");\nint num = input.nextInt();\nwhile (num != 2) {\n    if (num % 3 == 0) {\n        num *= 10;\n    } else if (num % 2 == 0) {\n        num /= 2;\n    }\n    System.out.println(num);\n    num = input.nextInt();\n}\n```\nExample with other numbers: the user typed 9, 8, 5, 2 → 9 is divisible by 3 → prints 90 → 8 is even → prints 4 → 5 does not change → prints 5 → 2 means stop, the loop ends → the answer would be `90 4 5`.\nYour task: The user typed one after another: 20, 36, 17, 2. Which numbers does the program print after the line `Please enter numbers until 2:`? Write them with spaces."
        },
        "answer": {
          "accept": [
            "10 360 17"
          ]
        },
        "hints": [
          {
            "he": "לכל מספר: קודם בודקים `% 3`, ורק אם לא — בודקים `% 2`.",
            "ru": "Для каждого числа: сначала проверяем `% 3`, и только если нет — `% 2`.",
            "en": "For each number: first check `% 3`, and only if not — check `% 2`."
          },
          {
            "he": "36 מתחלק גם ב-3 וגם ב-2. איזה ענף מתבצע?",
            "ru": "36 делится и на 3, и на 2. Какая ветка выполнится?",
            "en": "36 is divisible by both 3 and 2. Which branch runs?"
          }
        ],
        "solution": [
          "20: 20 % 3 = 2 → no;  20 % 2 = 0 → 20 / 2 = 10  →  print 10",
          "36: 36 % 3 = 0 → 36 * 10 = 360  →  print 360  (else if skipped)",
          "17: 17 % 3 = 2 → no;  17 % 2 = 1 → no  →  print 17",
          "2: 2 != 2 → false  →  exit",
          {
            "he": "תשובה: 10 360 17",
            "ru": "Ответ: 10 360 17",
            "en": "Answer: 10 360 17"
          }
        ]
      },
      {
        "id": "p7",
        "group": "while",
        "label": {
          "he": "60 או 1200",
          "ru": "60 или 1200",
          "en": "60 or 1200"
        },
        "kind": "number",
        "text": {
          "he": "התרגיל מהלוח: התוכנית קולטת מספרים כל עוד יש פחות מ־60 והסכום לא עבר 1200, ואז מדפיסה את הממוצע.\n```\nScanner input = new Scanner(System.in);\nint count = 0;\nint sum = 0;\nwhile (count < 60 && sum <= 1200) {\n    int x = input.nextInt();\n    sum += x;\n    count++;\n}\ndouble avg = (double) sum / count;\nSystem.out.println(avg);\n```\nדוגמה עם מספרים אחרים: המשתמש מקליד 700, 600, 900, … → 700: `sum` = 700, לא מעל 1200, הלולאה ממשיכה → 600: `sum` = 1300, זה מעל 1200, הלולאה נעצרה, את 900 כבר לא קולטים → `count` = 2 → 1300 / 2 → התוכנית תדפיס `650.0`.\nהמשימה שלך: המשתמש מקליד, אחד אחרי השני: 500, 400, 600, 700, … איזה ממוצע התוכנית תדפיס?",
          "ru": "Задача с доски: программа читает числа, пока их меньше 60 и сумма не больше 1200, потом печатает среднее.\n```\nScanner input = new Scanner(System.in);\nint count = 0;\nint sum = 0;\nwhile (count < 60 && sum <= 1200) {\n    int x = input.nextInt();\n    sum += x;\n    count++;\n}\ndouble avg = (double) sum / count;\nSystem.out.println(avg);\n```\nПример на других числах: пользователь вводит 700, 600, 900, … → 700: `sum` = 700, не больше 1200, цикл идёт дальше → 600: `sum` = 1300, это больше 1200, цикл остановился, 900 уже не читается → `count` = 2 → 1300 / 2 → программа напечатает `650.0`.\nТвоя задача: Пользователь по очереди вводит: 500, 400, 600, 700, … Какое среднее напечатает программа?",
          "en": "The exercise from the board: the program reads numbers while there are fewer than 60 and the sum is not over 1200, then prints the average.\n```\nScanner input = new Scanner(System.in);\nint count = 0;\nint sum = 0;\nwhile (count < 60 && sum <= 1200) {\n    int x = input.nextInt();\n    sum += x;\n    count++;\n}\ndouble avg = (double) sum / count;\nSystem.out.println(avg);\n```\nExample with other numbers: the user types 700, 600, 900, … → 700: `sum` = 700, not over 1200, the loop goes on → 600: `sum` = 1300, that is over 1200, the loop stops, 900 is never read → `count` = 2 → 1300 / 2 → the program prints `650.0`.\nYour task: The user types one after another: 500, 400, 600, 700, … What average does the program print?"
        },
        "answer": {
          "value": "500"
        },
        "hints": [
          {
            "he": "בדקו את התנאי לפני כל סיבוב. מתי `sum <= 1200` הופך ל-`false`?",
            "ru": "Проверяй условие перед каждым проходом. Когда `sum <= 1200` станет `false`?",
            "en": "Check the condition before each round. When does `sum <= 1200` become `false`?"
          }
        ],
        "solution": [
          "count = 0, sum = 0  →  true  →  x = 500, sum = 500, count = 1",
          "sum = 500 <= 1200  →  x = 400, sum = 900, count = 2",
          "sum = 900 <= 1200  →  x = 600, sum = 1500, count = 3",
          "sum = 1500 <= 1200  →  false  →  exit",
          "(double) 1500 / 3 = 500.0",
          {
            "he": "תשובה: 500.0",
            "ru": "Ответ: 500.0",
            "en": "Answer: 500.0"
          }
        ]
      },
      {
        "id": "p8",
        "group": "while",
        "label": {
          "he": "סכום ספרות",
          "ru": "Сумма цифр",
          "en": "Digit sum"
        },
        "kind": "number",
        "text": {
          "he": "זו תוכנית סכום הספרות מהמסך: כל עוד המספר גדול מ־0, לוקחים את הספרה האחרונה ומוחקים אותה.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter a number: \");\nint number = input.nextInt();\nint digSum = 0;\nwhile (number > 0) {\n    digSum += (number % 10);\n    number /= 10;\n}\nSystem.out.println(\"The digit sum is \" + digSum);\n```\nדוגמה עם מספרים אחרים: המשתמש הקליד 523 → סיבוב 1: לוקחים 3, `number` = 52 → סיבוב 2: לוקחים 2, `number` = 5 → סיבוב 3: לוקחים 5, `number` = 0, עצור → 3, 2 ו־5 יחד 10 → השורה האחרונה `The digit sum is 10`.\nהמשימה שלך: המשתמש הקליד 4071. איזה מספר יופיע בשורה האחרונה שהתוכנית תדפיס?",
          "ru": "Это программа суммы цифр с экрана: пока число больше 0, берёт последнюю цифру и стирает её.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter a number: \");\nint number = input.nextInt();\nint digSum = 0;\nwhile (number > 0) {\n    digSum += (number % 10);\n    number /= 10;\n}\nSystem.out.println(\"The digit sum is \" + digSum);\n```\nПример на других числах: пользователь ввёл 523 → круг 1: берём 3, `number` = 52 → круг 2: берём 2, `number` = 5 → круг 3: берём 5, `number` = 0, стоп → 3, 2 и 5 вместе 10 → последняя строка `The digit sum is 10`.\nТвоя задача: Пользователь ввёл 4071. Какое число будет в последней строке, которую напечатает программа?",
          "en": "This is the digit sum program from the screen: while the number is above 0, take the last digit and remove it.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Please enter a number: \");\nint number = input.nextInt();\nint digSum = 0;\nwhile (number > 0) {\n    digSum += (number % 10);\n    number /= 10;\n}\nSystem.out.println(\"The digit sum is \" + digSum);\n```\nExample with other numbers: the user typed 523 → round 1: take 3, `number` = 52 → round 2: take 2, `number` = 5 → round 3: take 5, `number` = 0, stop → 3, 2 and 5 make 10 → the last line is `The digit sum is 10`.\nYour task: The user typed 4071. What number is in the last line the program prints?"
        },
        "answer": {
          "value": "12"
        },
        "hints": [
          {
            "he": "בכל סיבוב: הספרה האחרונה נכנסת לסכום, ו-`number` מתקצר בספרה.",
            "ru": "В каждом проходе последняя цифра идёт в сумму, а `number` становится на цифру короче.",
            "en": "Each round: the last digit goes into the sum, and `number` gets one digit shorter."
          }
        ],
        "solution": [
          "number = 4071  →  digSum = 1,   number = 407",
          "number = 407   →  digSum = 8,   number = 40",
          "number = 40    →  digSum = 8,   number = 4",
          "number = 4     →  digSum = 12,  number = 0",
          "0 > 0  →  false  →  exit",
          {
            "he": "מודפס: The digit sum is 12",
            "ru": "Печатается: The digit sum is 12",
            "en": "Printed: The digit sum is 12"
          }
        ]
      },
      {
        "id": "p9",
        "group": "while",
        "label": {
          "he": "ספירת ספרות",
          "ru": "Подсчёт цифр",
          "en": "Counting digits"
        },
        "kind": "number",
        "text": {
          "he": "תרגיל מהקובץ: `int num = 123;` — השתמשו ב-`while` כדי לספור כמה ספרות יש במספר. מה יודפס?\n`int count = 0;`\n`while (num != 0) {`\n`    count++;`\n`    num /= 10;`\n`}`\n`System.out.println(count);`",
          "ru": "Задача из файла: `int num = 123;` — с помощью `while` посчитать, сколько цифр в числе. Что будет напечатано?\n`int count = 0;`\n`while (num != 0) {`\n`    count++;`\n`    num /= 10;`\n`}`\n`System.out.println(count);`",
          "en": "An exercise from the file: `int num = 123;` — use `while` to count how many digits the number has. What is printed?\n`int count = 0;`\n`while (num != 0) {`\n`    count++;`\n`    num /= 10;`\n`}`\n`System.out.println(count);`"
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "כמה פעמים אפשר לחלק את 123 ב-10 עד שמגיעים ל-0?",
            "ru": "Сколько раз можно делить 123 на 10, пока не получится 0?",
            "en": "How many times can you divide 123 by 10 until you reach 0?"
          }
        ],
        "solution": [
          "num = 123  →  count = 1,  num = 12",
          "num = 12   →  count = 2,  num = 1",
          "num = 1    →  count = 3,  num = 0",
          "0 != 0  →  false  →  exit",
          {
            "he": "מודפס 3",
            "ru": "Печатается 3",
            "en": "3 is printed"
          }
        ]
      },
      {
        "id": "p10",
        "group": "max",
        "label": {
          "he": "הציון הגבוה",
          "ru": "Высшая оценка",
          "en": "Highest grade"
        },
        "kind": "number",
        "text": {
          "he": "תבנית המקסימום מהלוח: התוכנית קולטת ציונים בין 0 ל־100 וזוכרת את הגבוה ביותר. מספר מחוץ ל־0–100 עוצר את הלולאה.\n```\nScanner input = new Scanner(System.in);\nint max = 0;\nint grade = 0;\nwhile (grade >= 0 && grade <= 100) {\n    grade = input.nextInt();\n    if (grade > max && grade <= 100)\n        max = grade;\n}\nSystem.out.println(max);\n```\nדוגמה עם מספרים אחרים: המשתמש הקליד 60, 85, 101 → 60: `max` = 60 → 85: גדול מ־60, `max` = 85 → 101: מעל 100, `max` לא משתנה, והלולאה נעצרת → התוכנית תדפיס 85.\nהמשימה שלך: המשתמש הקליד, אחד אחרי השני: 70, 95, 88, -1. איזה מספר התוכנית תדפיס?",
          "ru": "Шаблон максимума с доски: программа читает оценки от 0 до 100 и запоминает самую большую. Число вне 0–100 останавливает цикл.\n```\nScanner input = new Scanner(System.in);\nint max = 0;\nint grade = 0;\nwhile (grade >= 0 && grade <= 100) {\n    grade = input.nextInt();\n    if (grade > max && grade <= 100)\n        max = grade;\n}\nSystem.out.println(max);\n```\nПример на других числах: пользователь ввёл 60, 85, 101 → 60: `max` = 60 → 85: больше 60, `max` = 85 → 101: больше 100, `max` не меняется, и цикл останавливается → программа напечатает 85.\nТвоя задача: Пользователь по очереди ввёл: 70, 95, 88, -1. Какое число напечатает программа?",
          "en": "The maximum template from the board: the program reads grades from 0 to 100 and remembers the highest. A number outside 0–100 stops the loop.\n```\nScanner input = new Scanner(System.in);\nint max = 0;\nint grade = 0;\nwhile (grade >= 0 && grade <= 100) {\n    grade = input.nextInt();\n    if (grade > max && grade <= 100)\n        max = grade;\n}\nSystem.out.println(max);\n```\nExample with other numbers: the user typed 60, 85, 101 → 60: `max` = 60 → 85: bigger than 60, `max` = 85 → 101: over 100, `max` does not change, and the loop stops → the program prints 85.\nYour task: The user typed one after another: 70, 95, 88, -1. What number does the program print?"
        },
        "answer": {
          "value": "95"
        },
        "hints": [
          {
            "he": "בכל סיבוב: האם הציון החדש גדול מ-`max` הנוכחי?",
            "ru": "В каждом проходе: новая оценка больше текущего `max`?",
            "en": "Each round: is the new grade bigger than the current `max`?"
          }
        ],
        "solution": [
          "grade = 70  →  70 > 0  →  max = 70",
          "grade = 95  →  95 > 70  →  max = 95",
          "grade = 88  →  88 > 95 false  →  max = 95",
          "grade = -1  →  -1 > 95 false;  -1 >= 0 false  →  exit",
          {
            "he": "תשובה: 95",
            "ru": "Ответ: 95",
            "en": "Answer: 95"
          }
        ]
      },
      {
        "id": "p11",
        "group": "max",
        "label": "MIN_VALUE",
        "kind": "number",
        "text": {
          "he": "תרגיל 1 מתבניות מקסימום, אבל עם 5 מספרים: התוכנית מדפיסה את הגדול ביותר.\n```\nScanner input = new Scanner(System.in);\nint max = Integer.MIN_VALUE;\nfor (int i = 0; i < 5; i++) {\n    int x = input.nextInt();\n    if (x > max) max = x;\n}\nSystem.out.println(max);\n```\nדוגמה עם מספרים אחרים: המשתמש הקליד -4, -8, -1, -6, -2 → בהתחלה `max` הוא המספר הקטן ביותר → -4 גדול יותר, `max` = -4 → -8 קטן יותר → -1 גדול יותר, `max` = -1 → גם -6 וגם -2 קטנים יותר → התוכנית תדפיס -1.\nהמשימה שלך: המשתמש הקליד, אחד אחרי השני: -7, -3, -12, -5, -9. מה התוכנית תדפיס?",
          "ru": "Задача 1 из шаблонов максимума, но для 5 чисел: программа печатает самое большое.\n```\nScanner input = new Scanner(System.in);\nint max = Integer.MIN_VALUE;\nfor (int i = 0; i < 5; i++) {\n    int x = input.nextInt();\n    if (x > max) max = x;\n}\nSystem.out.println(max);\n```\nПример на других числах: пользователь ввёл -4, -8, -1, -6, -2 → `max` сначала самое маленькое число → -4 больше, `max` = -4 → -8 меньше → -1 больше, `max` = -1 → -6 и -2 меньше → программа напечатает -1.\nТвоя задача: Пользователь по очереди ввёл: -7, -3, -12, -5, -9. Что напечатает программа?",
          "en": "Exercise 1 from the maximum templates, but with 5 numbers: the program prints the largest.\n```\nScanner input = new Scanner(System.in);\nint max = Integer.MIN_VALUE;\nfor (int i = 0; i < 5; i++) {\n    int x = input.nextInt();\n    if (x > max) max = x;\n}\nSystem.out.println(max);\n```\nExample with other numbers: the user typed -4, -8, -1, -6, -2 → at first `max` is the smallest number → -4 is bigger, `max` = -4 → -8 is smaller → -1 is bigger, `max` = -1 → -6 and -2 are smaller → the program prints -1.\nYour task: The user typed one after another: -7, -3, -12, -5, -9. What does the program print?"
        },
        "answer": {
          "value": "-3"
        },
        "hints": [
          {
            "he": "המספר הראשון תמיד גדול מ-`Integer.MIN_VALUE`.",
            "ru": "Первое число всегда больше `Integer.MIN_VALUE`.",
            "en": "The first number is always bigger than `Integer.MIN_VALUE`."
          },
          {
            "he": "בין מספרים שליליים — הגדול הוא הקרוב ביותר ל-0.",
            "ru": "Среди отрицательных самое большое — ближайшее к 0.",
            "en": "Among negative numbers the largest is the one closest to 0."
          }
        ],
        "solution": [
          "x = -7   →  -7 > MIN_VALUE  →  max = -7",
          "x = -3   →  -3 > -7  →  max = -3",
          "x = -12  →  no change",
          "x = -5   →  no change",
          "x = -9   →  no change",
          {
            "he": "מודפס -3. אם `max` היה מתחיל מ-0, היה מודפס 0.",
            "ru": "Печатается -3. Если бы `max` начинался с 0, напечаталось бы 0.",
            "en": "-3 is printed. If `max` had started at 0, 0 would be printed."
          }
        ]
      },
      {
        "id": "p12",
        "group": "ctrl",
        "label": {
          "he": "continue 4, 8",
          "ru": "continue 4, 8",
          "en": "continue 4, 8"
        },
        "kind": "text",
        "text": {
          "he": "הקוד מהמסך. מה יודפס? (כתבו את המספרים עם רווחים)\n`for (int i = 1; i <= 10; i++) {`\n`    if (i == 4 || i == 8) {`\n`        continue;`\n`    }`\n`    System.out.println(i);`\n`}`",
          "ru": "Код с экрана. Что будет напечатано? (напиши числа через пробел)\n`for (int i = 1; i <= 10; i++) {`\n`    if (i == 4 || i == 8) {`\n`        continue;`\n`    }`\n`    System.out.println(i);`\n`}`",
          "en": "The code from the screen. What is printed? (write the numbers with spaces)\n`for (int i = 1; i <= 10; i++) {`\n`    if (i == 4 || i == 8) {`\n`        continue;`\n`    }`\n`    System.out.println(i);`\n`}`"
        },
        "answer": {
          "accept": [
            "1 2 3 5 6 7 9 10",
            "1,2,3,5,6,7,9,10"
          ]
        },
        "hints": [
          {
            "he": "`continue` מדלג על ה-`println` בסיבוב הזה בלבד.",
            "ru": "`continue` перепрыгивает `println` только в этом проходе.",
            "en": "`continue` skips the `println` in this round only."
          }
        ],
        "solution": [
          "i = 1, 2, 3  →  printed",
          "i = 4  →  continue  →  not printed",
          "i = 5, 6, 7  →  printed",
          "i = 8  →  continue  →  not printed",
          "i = 9, 10  →  printed",
          {
            "he": "תשובה: 1 2 3 5 6 7 9 10",
            "ru": "Ответ: 1 2 3 5 6 7 9 10",
            "en": "Answer: 1 2 3 5 6 7 9 10"
          }
        ]
      },
      {
        "id": "p13",
        "group": "ctrl",
        "label": {
          "he": "break ב-6",
          "ru": "break на 6",
          "en": "break at 6"
        },
        "kind": "text",
        "text": {
          "he": "Break ב-For: הדפיסו 1 עד 10, אבל עצרו עם `break` כשהמספר מגיע ל-6. מה יודפס? (כתבו את המספרים עם רווחים)\n`for (int i = 1; i <= 10; i++) {`\n`    if (i == 6) {`\n`        break;`\n`    }`\n`    System.out.println(i);`\n`}`",
          "ru": "Break в For: напечатать от 1 до 10, но остановиться через `break`, когда число дойдёт до 6. Что будет напечатано? (числа через пробел)\n`for (int i = 1; i <= 10; i++) {`\n`    if (i == 6) {`\n`        break;`\n`    }`\n`    System.out.println(i);`\n`}`",
          "en": "Break in For: print 1 to 10, but stop with `break` when the number reaches 6. What is printed? (write the numbers with spaces)\n`for (int i = 1; i <= 10; i++) {`\n`    if (i == 6) {`\n`        break;`\n`    }`\n`    System.out.println(i);`\n`}`"
        },
        "answer": {
          "accept": [
            "1 2 3 4 5",
            "1,2,3,4,5"
          ]
        },
        "hints": [
          {
            "he": "ה-`break` מגיע לפני ה-`println`. האם 6 מודפס?",
            "ru": "`break` стоит до `println`. Напечатается ли 6?",
            "en": "The `break` comes before the `println`. Is 6 printed?"
          }
        ],
        "solution": [
          "i = 1 ... 5  →  printed",
          "i = 6  →  break  →  the loop ends, 6 is not printed",
          {
            "he": "תשובה: 1 2 3 4 5",
            "ru": "Ответ: 1 2 3 4 5",
            "en": "Answer: 1 2 3 4 5"
          }
        ]
      },
      {
        "id": "p14",
        "group": "ctrl",
        "label": {
          "he": "רק זוגיים",
          "ru": "Только чётные",
          "en": "Evens only"
        },
        "kind": "text",
        "text": {
          "he": "Continue ב-For 3: הדפיסו 1 עד 10 ודלגו עם `continue` על האי-זוגיים. מה יודפס? (כתבו את המספרים עם רווחים)\n`for (int i = 1; i <= 10; i++) {`\n`    if (i % 2 != 0) {`\n`        continue;`\n`    }`\n`    System.out.println(i);`\n`}`",
          "ru": "Continue в For 3: напечатать от 1 до 10 и пропустить через `continue` нечётные. Что будет напечатано? (числа через пробел)\n`for (int i = 1; i <= 10; i++) {`\n`    if (i % 2 != 0) {`\n`        continue;`\n`    }`\n`    System.out.println(i);`\n`}`",
          "en": "Continue in For 3: print 1 to 10 and skip the odd numbers with `continue`. What is printed? (write the numbers with spaces)\n`for (int i = 1; i <= 10; i++) {`\n`    if (i % 2 != 0) {`\n`        continue;`\n`    }`\n`    System.out.println(i);`\n`}`"
        },
        "answer": {
          "accept": [
            "2 4 6 8 10",
            "2,4,6,8,10"
          ]
        },
        "hints": [
          {
            "he": "`i % 2 != 0` אומר: i אי-זוגי — ואותו מדלגים.",
            "ru": "`i % 2 != 0` значит: i нечётное — его пропускаем.",
            "en": "`i % 2 != 0` means i is odd — and it is skipped."
          }
        ],
        "solution": [
          "i = 1  →  1 % 2 = 1 != 0  →  continue",
          "i = 2  →  2 % 2 = 0  →  print 2",
          "i = 3  →  continue",
          "i = 4  →  print 4",
          "...",
          "i = 10  →  print 10",
          {
            "he": "תשובה: 2 4 6 8 10",
            "ru": "Ответ: 2 4 6 8 10",
            "en": "Answer: 2 4 6 8 10"
          }
        ]
      },
      {
        "id": "p15",
        "group": "ctrl",
        "label": "Combine",
        "kind": "text",
        "text": {
          "he": "Combine: הדפיסו 1 עד 12. דלגו על 5 (`continue`) ועצרו ב-10 (`break`). מה יודפס? (כתבו את המספרים עם רווחים)\n`for (int i = 1; i <= 12; i++) {`\n`    if (i == 5) continue;`\n`    if (i == 10) break;`\n`    System.out.println(i);`\n`}`",
          "ru": "Combine: напечатать от 1 до 12. Пропустить 5 (`continue`) и остановиться на 10 (`break`). Что будет напечатано? (числа через пробел)\n`for (int i = 1; i <= 12; i++) {`\n`    if (i == 5) continue;`\n`    if (i == 10) break;`\n`    System.out.println(i);`\n`}`",
          "en": "Combine: print 1 to 12. Skip 5 (`continue`) and stop at 10 (`break`). What is printed? (write the numbers with spaces)\n`for (int i = 1; i <= 12; i++) {`\n`    if (i == 5) continue;`\n`    if (i == 10) break;`\n`    System.out.println(i);`\n`}`"
        },
        "answer": {
          "accept": [
            "1 2 3 4 6 7 8 9",
            "1,2,3,4,6,7,8,9"
          ]
        },
        "hints": [
          {
            "he": "עד 4 הכול מודפס. מה קורה ב-5? ומה ב-10?",
            "ru": "До 4 всё печатается. Что происходит на 5? А на 10?",
            "en": "Up to 4 everything is printed. What happens at 5? And at 10?"
          }
        ],
        "solution": [
          "i = 1 ... 4  →  printed",
          "i = 5  →  continue  →  skipped",
          "i = 6 ... 9  →  printed",
          "i = 10  →  break  →  the loop ends (11, 12 never come)",
          {
            "he": "תשובה: 1 2 3 4 6 7 8 9",
            "ru": "Ответ: 1 2 3 4 6 7 8 9",
            "en": "Answer: 1 2 3 4 6 7 8 9"
          }
        ]
      },
      {
        "id": "p16",
        "group": "while",
        "label": {
          "he": "מעלית 500",
          "ru": "Лифт 500",
          "en": "Elevator 500"
        },
        "kind": "number",
        "text": {
          "he": "תוכנית המעלית מהשיעור: מחברת משקלי חבילות כל עוד הסכום לא עבר 500.\n```\nScanner input = new Scanner(System.in);\nint sum = 0;\nwhile (sum <= 500) {\n    sum += input.nextInt();\n}\nSystem.out.println(sum);\n```\nדוגמה עם מספרים אחרים: המשתמש מקליד 300, 150, 100, 80 → `sum` = 300 → 450 → 550, זה מעל 500, הלולאה נעצרה, את 80 כבר לא קולטים → התוכנית תדפיס 550.\nהמשימה שלך: המשתמש מקליד, אחד אחרי השני, משקלי חבילות: 120, 250, 90, 140, 50. מה התוכנית תדפיס?",
          "ru": "Программа с лифтом с урока: складывает веса посылок, пока сумма не больше 500.\n```\nScanner input = new Scanner(System.in);\nint sum = 0;\nwhile (sum <= 500) {\n    sum += input.nextInt();\n}\nSystem.out.println(sum);\n```\nПример на других числах: пользователь вводит 300, 150, 100, 80 → `sum` = 300 → 450 → 550, это больше 500, цикл остановился, 80 уже не читается → программа напечатает 550.\nТвоя задача: Пользователь по очереди вводит веса посылок: 120, 250, 90, 140, 50. Что напечатает программа?",
          "en": "The elevator program from the lesson: adds package weights while the sum is not over 500.\n```\nScanner input = new Scanner(System.in);\nint sum = 0;\nwhile (sum <= 500) {\n    sum += input.nextInt();\n}\nSystem.out.println(sum);\n```\nExample with other numbers: the user types 300, 150, 100, 80 → `sum` = 300 → 450 → 550, that is over 500, the loop stops, 80 is never read → the program prints 550.\nYour task: The user types package weights one after another: 120, 250, 90, 140, 50. What does the program print?"
        },
        "answer": {
          "value": "600"
        },
        "hints": [
          {
            "he": "לפני כל סיבוב בודקים: האם `sum <= 500`? ייתכן שלא כל הקלט ייקרא.",
            "ru": "Перед каждым проходом проверь: `sum <= 500`? Возможно, не весь ввод будет прочитан.",
            "en": "Before each round check: is `sum <= 500`? Maybe not all the input is read."
          }
        ],
        "solution": [
          "0 <= 500  →  sum = 120",
          "120 <= 500  →  sum = 370",
          "370 <= 500  →  sum = 460",
          "460 <= 500  →  sum = 600",
          "600 <= 500  →  false  →  exit",
          {
            "he": "מודפס 600. ה-50 לא נקרא בכלל.",
            "ru": "Печатается 600. Число 50 так и не прочитано.",
            "en": "600 is printed. The 50 is never read."
          }
        ]
      },
      {
        "id": "e1",
        "group": "exam",
        "label": "a, b",
        "kind": "text",
        "text": {
          "he": "טבלת מעקב: מה הערכים הסופיים של a ו-b? כתבו כך: 3 6\n`int a = 10;`\n`int b = 3;`\n`a = a / b;`\n`b = a * 2;`\n`a = a % b;`",
          "ru": "Таблица отслеживания: какие в конце a и b? Напиши так: 3 6\n`int a = 10;`\n`int b = 3;`\n`a = a / b;`\n`b = a * 2;`\n`a = a % b;`",
          "en": "Tracing table: what are a and b at the end? Write like: 3 6\n`int a = 10;`\n`int b = 3;`\n`a = a / b;`\n`b = a * 2;`\n`a = a % b;`"
        },
        "answer": {
          "accept": [
            "3 6",
            "a=3 b=6",
            "a = 3 b = 6",
            "a=3, b=6",
            "a = 3, b = 6"
          ]
        },
        "hints": [
          {
            "he": "`10 / 3` בשלמים זה 3, השארית נזרקת.",
            "ru": "`10 / 3` в целых — это 3, остаток отбрасывается.",
            "en": "`10 / 3` in integers is 3, the remainder is dropped."
          }
        ],
        "solution": [
          "a = 10 / 3 = 3",
          "b = 3 * 2 = 6",
          "a = 3 % 6 = 3",
          {
            "he": "תשובה: a = 3, b = 6",
            "ru": "Ответ: a = 3, b = 6",
            "en": "Answer: a = 3, b = 6"
          }
        ]
      },
      {
        "id": "e2",
        "group": "exam",
        "label": "x++ / ++x",
        "kind": "text",
        "text": {
          "he": "מה הערכים הסופיים של x, y, z? כתבו כך: 1 2 3\n`int x = 5;`\n`int y = x++;`\n`int z = ++x;`",
          "ru": "Какие в конце x, y, z? Напиши так: 1 2 3\n`int x = 5;`\n`int y = x++;`\n`int z = ++x;`",
          "en": "What are x, y, z at the end? Write like: 1 2 3\n`int x = 5;`\n`int y = x++;`\n`int z = ++x;`"
        },
        "answer": {
          "accept": [
            "7 5 7",
            "x=7 y=5 z=7",
            "x = 7 y = 5 z = 7",
            "x=7, y=5, z=7",
            "x = 7, y = 5, z = 7"
          ]
        },
        "hints": [
          {
            "he": "`x++` — קודם נותנים את הערך, אחר כך מגדילים. `++x` — קודם מגדילים.",
            "ru": "`x++` — сначала отдаёт значение, потом увеличивает. `++x` — сначала увеличивает.",
            "en": "`x++` gives the value first, then adds 1. `++x` adds 1 first."
          }
        ],
        "solution": [
          "y = x++  →  y = 5,  x = 6",
          "z = ++x  →  x = 7,  z = 7",
          {
            "he": "תשובה: x = 7, y = 5, z = 7",
            "ru": "Ответ: x = 7, y = 5, z = 7",
            "en": "Answer: x = 7, y = 5, z = 7"
          }
        ]
      },
      {
        "id": "e3",
        "group": "exam",
        "label": "result += 10",
        "kind": "number",
        "text": {
          "he": "מה הערך הסופי של result?\n`int x = 1;`\n`int result = 0;`\n`while (x < 5) {`\n`    if (x % 2 != 0) {`\n`        result += 10;`\n`    } else {`\n`        result += 1;`\n`    }`\n`    x++;`\n`}`",
          "ru": "Какое в конце значение result?\n`int x = 1;`\n`int result = 0;`\n`while (x < 5) {`\n`    if (x % 2 != 0) {`\n`        result += 10;`\n`    } else {`\n`        result += 1;`\n`    }`\n`    x++;`\n`}`",
          "en": "What is the final value of result?\n`int x = 1;`\n`int result = 0;`\n`while (x < 5) {`\n`    if (x % 2 != 0) {`\n`        result += 10;`\n`    } else {`\n`        result += 1;`\n`    }`\n`    x++;`\n`}`"
        },
        "answer": {
          "value": "22"
        },
        "hints": [
          {
            "he": "x עובר על 1, 2, 3, 4. אי-זוגי מוסיף 10, זוגי מוסיף 1.",
            "ru": "x проходит 1, 2, 3, 4. Нечётное добавляет 10, чётное — 1.",
            "en": "x goes 1, 2, 3, 4. Odd adds 10, even adds 1."
          }
        ],
        "solution": [
          "x = 1  →  1 % 2 = 1  →  result = 10",
          "x = 2  →  result = 11",
          "x = 3  →  result = 21",
          "x = 4  →  result = 22",
          "5 < 5  →  false  →  exit",
          {
            "he": "תשובה: 22",
            "ru": "Ответ: 22",
            "en": "Answer: 22"
          }
        ]
      },
      {
        "id": "e4",
        "group": "exam",
        "label": "y *= x",
        "kind": "text",
        "text": {
          "he": "מה הערכים הסופיים של x ו-y? כתבו כך: 1 2\n`int x = 2;`\n`int y = 5;`\n`y *= x;`\n`x = x + y % 3;`",
          "ru": "Какие в конце x и y? Напиши так: 1 2\n`int x = 2;`\n`int y = 5;`\n`y *= x;`\n`x = x + y % 3;`",
          "en": "What are x and y at the end? Write like: 1 2\n`int x = 2;`\n`int y = 5;`\n`y *= x;`\n`x = x + y % 3;`"
        },
        "answer": {
          "accept": [
            "3 10",
            "x=3 y=10",
            "x = 3 y = 10",
            "x=3, y=10",
            "x = 3, y = 10"
          ]
        },
        "hints": [
          {
            "he": "`%` מתבצע לפני `+`.",
            "ru": "`%` выполняется раньше `+`.",
            "en": "`%` is done before `+`."
          }
        ],
        "solution": [
          "y = 5 * 2 = 10",
          "x = 2 + 10 % 3",
          "x = 2 + 1 = 3",
          {
            "he": "תשובה: x = 3, y = 10",
            "ru": "Ответ: x = 3, y = 10",
            "en": "Answer: x = 3, y = 10"
          }
        ]
      },
      {
        "id": "e5",
        "group": "exam",
        "label": "boolean",
        "kind": "choice",
        "text": {
          "he": "מה הערך הסופי של result?\n`boolean isA = true;`\n`boolean isB = false;`\n`boolean result = !isA || (isA && isB);`",
          "ru": "Какое в конце значение result?\n`boolean isA = true;`\n`boolean isB = false;`\n`boolean result = !isA || (isA && isB);`",
          "en": "What is the final value of result?\n`boolean isA = true;`\n`boolean isB = false;`\n`boolean result = !isA || (isA && isB);`"
        },
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "קודם הסוגריים: `true && false`.",
            "ru": "Сначала скобки: `true && false`.",
            "en": "Brackets first: `true && false`."
          }
        ],
        "solution": [
          "!isA = !true = false",
          "isA && isB = true && false = false",
          "false || false = false",
          {
            "he": "תשובה: false",
            "ru": "Ответ: false",
            "en": "Answer: false"
          }
        ],
        "options": [
          "true",
          "false"
        ]
      },
      {
        "id": "e6",
        "group": "exam",
        "label": "factor",
        "kind": "text",
        "text": {
          "he": "מה result ו-factor בסיום? כתבו כך: 1 2\n`int result = 0;`\n`int factor = 1;`\n`for (int i = 0; i < 8; i++) {`\n`    if (i % 4 == 0) {`\n`        factor *= 2;`\n`    }`\n`    if (i >= 5) {`\n`        result -= factor;`\n`    } else {`\n`        result += factor;`\n`    }`\n`}`",
          "ru": "Какие result и factor в конце? Напиши так: 1 2\n`int result = 0;`\n`int factor = 1;`\n`for (int i = 0; i < 8; i++) {`\n`    if (i % 4 == 0) {`\n`        factor *= 2;`\n`    }`\n`    if (i >= 5) {`\n`        result -= factor;`\n`    } else {`\n`        result += factor;`\n`    }`\n`}`",
          "en": "What are result and factor at the end? Write like: 1 2\n`int result = 0;`\n`int factor = 1;`\n`for (int i = 0; i < 8; i++) {`\n`    if (i % 4 == 0) {`\n`        factor *= 2;`\n`    }`\n`    if (i >= 5) {`\n`        result -= factor;`\n`    } else {`\n`        result += factor;`\n`    }`\n`}`"
        },
        "answer": {
          "accept": [
            "0 4",
            "result=0 factor=4",
            "result = 0 factor = 4",
            "result=0, factor=4",
            "result = 0, factor = 4"
          ]
        },
        "hints": [
          {
            "he": "factor מוכפל ב-2 רק כש-i הוא 0 או 4.",
            "ru": "factor удваивается только при i = 0 и i = 4.",
            "en": "factor doubles only when i is 0 or 4."
          },
          {
            "he": "ב-i = 0 עד 4 מוסיפים, ב-5 עד 7 מחסירים.",
            "ru": "При i от 0 до 4 прибавляем, при 5–7 вычитаем.",
            "en": "For i from 0 to 4 add, for 5 to 7 subtract."
          }
        ],
        "solution": [
          "i = 0  →  factor = 2,  result = 2",
          "i = 1  →  result = 4",
          "i = 2  →  result = 6",
          "i = 3  →  result = 8",
          "i = 4  →  factor = 4,  result = 12",
          "i = 5  →  result = 8",
          "i = 6  →  result = 4",
          "i = 7  →  result = 0",
          {
            "he": "תשובה: result = 0, factor = 4",
            "ru": "Ответ: result = 0, factor = 4",
            "en": "Answer: result = 0, factor = 4"
          }
        ]
      },
      {
        "id": "e7",
        "group": "exam",
        "label": "count -= 2",
        "kind": "number",
        "text": {
          "he": "מה הערך הסופי של sum?\n`int count = 5;`\n`int sum = 0;`\n`while (count > 0) {`\n`    sum += count;`\n`    count -= 2;`\n`}`",
          "ru": "Какое в конце значение sum?\n`int count = 5;`\n`int sum = 0;`\n`while (count > 0) {`\n`    sum += count;`\n`    count -= 2;`\n`}`",
          "en": "What is the final value of sum?\n`int count = 5;`\n`int sum = 0;`\n`while (count > 0) {`\n`    sum += count;`\n`    count -= 2;`\n`}`"
        },
        "answer": {
          "value": "9"
        },
        "hints": [
          {
            "he": "count יורד ב-2: 5, 3, 1, ואז -1.",
            "ru": "count уменьшается на 2: 5, 3, 1, потом −1.",
            "en": "count goes down by 2: 5, 3, 1, then -1."
          }
        ],
        "solution": [
          "count = 5  →  sum = 5",
          "count = 3  →  sum = 8",
          "count = 1  →  sum = 9",
          "-1 > 0  →  false  →  exit",
          {
            "he": "תשובה: 9",
            "ru": "Ответ: 9",
            "en": "Answer: 9"
          }
        ]
      },
      {
        "id": "e8",
        "group": "exam",
        "label": "num1 / 3",
        "kind": "number",
        "text": {
          "he": "כתבו קוד: קולטים `int num1` ומדפיסים את `num1` חלקי 3 (חילוק שלמים). מה התוכנית תדפיס אם המשתמש הקליד 17?",
          "ru": "Напиши код: читаем `int num1` и печатаем `num1`, делённое на 3 (целочисленное деление). Что напечатает программа, если пользователь ввёл 17?",
          "en": "Write code: read `int num1` and print `num1` divided by 3 (integer division). What does the program print if the user typed 17?"
        },
        "answer": {
          "value": "5"
        },
        "hints": [
          {
            "he": "`17 / 3` בשלמים: כמה פעמים 3 נכנס ב-17?",
            "ru": "`17 / 3` в целых: сколько раз 3 помещается в 17?",
            "en": "`17 / 3` in integers: how many times does 3 fit into 17?"
          }
        ],
        "solution": [
          "int num1 = input.nextInt();",
          "System.out.println(num1 / 3);",
          "17 / 3 = 5   (5 × 3 = 15)",
          {
            "he": "תשובה: 5",
            "ru": "Ответ: 5",
            "en": "Answer: 5"
          }
        ]
      },
      {
        "id": "e9",
        "group": "exam",
        "label": "age",
        "kind": "choice",
        "text": {
          "he": "כתבו קוד: קולטים `int age`. אם age קטן מ־18 או גדול מ־60 — מדפיסים \"יש הנחה\", אחרת \"אין הנחה\". מה התוכנית תדפיס אם המשתמש הקליד 18?",
          "ru": "Напиши код: читаем `int age`. Если age меньше 18 или больше 60 — печатаем «יש הנחה» (есть скидка), иначе «אין הנחה» (нет скидки). Что напечатает программа, если пользователь ввёл 18?",
          "en": "Write code: read `int age`. If age is less than 18 or more than 60 print \"יש הנחה\" (discount), otherwise \"אין הנחה\" (no discount). What does the program print if the user typed 18?"
        },
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "האם `18 < 18`?",
            "ru": "`18 < 18` — это правда?",
            "en": "Is `18 < 18` true?"
          }
        ],
        "solution": [
          "if (age < 18 || age > 60)",
          "18 < 18  →  false",
          "18 > 60  →  false",
          "false || false  →  false  →  else",
          {
            "he": "תשובה: \"אין הנחה\". הגבול 18 לא נכלל.",
            "ru": "Ответ: «אין הנחה». Граница 18 не входит.",
            "en": "Answer: \"אין הנחה\". The edge 18 is not included."
          }
        ],
        "options": [
          "יש הנחה",
          "אין הנחה"
        ]
      },
      {
        "id": "e10",
        "group": "exam",
        "label": "0, 7, 14…",
        "kind": "number",
        "text": {
          "he": "כתבו לולאת `for` שמחשבת את הממוצע של המספרים מ-0 עד 50 בקפיצות של 7 (0, 7, 14…). מה יודפס עם `(double) sum / count`?",
          "ru": "Напиши цикл `for`, который считает среднее чисел от 0 до 50 с шагом 7 (0, 7, 14…). Что напечатает `(double) sum / count`?",
          "en": "Write a `for` loop that computes the average of the numbers from 0 to 50 in steps of 7 (0, 7, 14…). What does `(double) sum / count` print?"
        },
        "answer": {
          "value": "24.5"
        },
        "hints": [
          {
            "he": "המספרים: 0, 7, 14, 21, 28, 35, 42, 49. 56 כבר גדול מ-50.",
            "ru": "Числа: 0, 7, 14, 21, 28, 35, 42, 49. 56 уже больше 50.",
            "en": "The numbers: 0, 7, 14, 21, 28, 35, 42, 49. 56 is already over 50."
          }
        ],
        "solution": [
          "for (int i = 0; i <= 50; i += 7) { sum += i; count++; }",
          "sum = 0 + 7 + 14 + 21 + 28 + 35 + 42 + 49 = 196",
          "count = 8",
          "196 / 8 = 24.5",
          {
            "he": "תשובה: 24.5 (בלי `(double)` היה יוצא 24)",
            "ru": "Ответ: 24.5 (без `(double)` вышло бы 24)",
            "en": "Answer: 24.5 (without `(double)` it would be 24)"
          }
        ]
      },
      {
        "id": "e11",
        "group": "exam",
        "label": "num = 0",
        "kind": "choice",
        "text": {
          "he": "כתבו קוד: קולטים `int num`. אם num חיובי — בודקים זוגיות ומדפיסים \"מספר חיובי זוגי\" או \"מספר חיובי אי זוגי\". אם num שלילי — \"מספר שלילי\". מה התוכנית תדפיס אם המשתמש הקליד 0?",
          "ru": "Напиши код: читаем `int num`. Если num положительное — проверяем чётность и печатаем «מספר חיובי זוגי» или «מספר חיובי אי זוגי». Если отрицательное — «מספר שלילי». Что напечатает программа, если пользователь ввёл 0?",
          "en": "Write code: read `int num`. If num is positive, check if it is even and print \"מספר חיובי זוגי\" or \"מספר חיובי אי זוגי\". If negative, \"מספר שלילי\". What does the program print if the user typed 0?"
        },
        "answer": {
          "index": 3
        },
        "hints": [
          {
            "he": "האם 0 גדול מ-0? האם 0 קטן מ-0?",
            "ru": "0 больше 0? 0 меньше 0?",
            "en": "Is 0 more than 0? Less than 0?"
          }
        ],
        "solution": [
          "if (num > 0) { … } else if (num < 0) { … }",
          "0 > 0  →  false",
          "0 < 0  →  false",
          {
            "he": "תשובה: לא יודפס כלום — 0 לא חיובי ולא שלילי.",
            "ru": "Ответ: ничего не напечатается — 0 не положительное и не отрицательное.",
            "en": "Answer: nothing is printed — 0 is neither positive nor negative."
          }
        ],
        "options": [
          "מספר חיובי זוגי",
          "מספר חיובי אי זוגי",
          "מספר שלילי",
          {
            "he": "כלום",
            "ru": "Ничего",
            "en": "Nothing"
          }
        ]
      },
      {
        "id": "e12",
        "group": "exam",
        "label": "'a'…'h'",
        "kind": "text",
        "text": {
          "he": "כתבו לולאת `for` שמדפיסה את התווים מ-'a' עד 'h' (כולל), בלי רווחים. מה יודפס?",
          "ru": "Напиши цикл `for`, который печатает символы от 'a' до 'h' (включительно) без пробелов. Что напечатает?",
          "en": "Write a `for` loop that prints the characters from 'a' to 'h' (inclusive) without spaces. What is printed?"
        },
        "answer": {
          "accept": [
            "abcdefgh"
          ]
        },
        "hints": [
          {
            "he": "אפשר לקדם `char` עם `++` כמו מספר.",
            "ru": "`char` можно увеличивать через `++`, как число.",
            "en": "A `char` can be increased with `++`, like a number."
          }
        ],
        "solution": [
          "for (char ch = 'a'; ch <= 'h'; ch++)",
          "    System.out.print(ch);",
          {
            "he": "תשובה: abcdefgh",
            "ru": "Ответ: abcdefgh",
            "en": "Answer: abcdefgh"
          }
        ]
      },
      {
        "id": "e13",
        "group": "exam",
        "label": "a = b",
        "kind": "text",
        "text": {
          "he": "כתבו קוד: קולטים `int a` ו-`int b`. אם a גדול מ-b — `a = b`, אחרת `b = a`. מדפיסים a ו-b. מה יודפס עבור a = 7, b = 3? כתבו כך: 1 2",
          "ru": "Напиши код: читаем `int a` и `int b`. Если a больше b — `a = b`, иначе `b = a`. Печатаем a и b. Что напечатает при a = 7, b = 3? Напиши так: 1 2",
          "en": "Write code: read `int a` and `int b`. If a is more than b, `a = b`, otherwise `b = a`. Print a and b. What is printed for a = 7, b = 3? Write like: 1 2"
        },
        "answer": {
          "accept": [
            "3 3",
            "a=3 b=3",
            "a = 3 b = 3",
            "a=3, b=3",
            "a = 3, b = 3"
          ]
        },
        "hints": [
          {
            "he": "`7 > 3` — איזה ענף רץ?",
            "ru": "`7 > 3` — какая ветка выполнится?",
            "en": "`7 > 3` — which branch runs?"
          }
        ],
        "solution": [
          "7 > 3  →  true  →  a = b = 3",
          {
            "he": "תשובה: 3 3",
            "ru": "Ответ: 3 3",
            "en": "Answer: 3 3"
          }
        ]
      },
      {
        "id": "e14",
        "group": "exam",
        "label": "20 … 0",
        "kind": "number",
        "text": {
          "he": "כתבו לולאת `for` שמדפיסה את המספרים מ-20 עד 0 בקפיצות של 2 אחורה. כמה מספרים יודפסו?",
          "ru": "Напиши цикл `for`, который печатает числа от 20 до 0 с шагом 2 назад. Сколько чисел напечатается?",
          "en": "Write a `for` loop that prints the numbers from 20 down to 0 in steps of 2. How many numbers are printed?"
        },
        "answer": {
          "value": "11"
        },
        "hints": [
          {
            "he": "אל תשכחו את 0 עצמו.",
            "ru": "Не забудь само 0.",
            "en": "Do not forget 0 itself."
          }
        ],
        "solution": [
          "for (int i = 20; i >= 0; i -= 2)",
          "20 18 16 14 12 10 8 6 4 2 0",
          {
            "he": "תשובה: 11 מספרים",
            "ru": "Ответ: 11 чисел",
            "en": "Answer: 11 numbers"
          }
        ]
      },
      {
        "id": "mc1",
        "group": "course",
        "label": "max, place",
        "kind": "text",
        "text": {
          "he": "התוכנית קולטת 6 טמפרטורות ומדפיסה את הגבוהה ביותר ואת מספרה בסדר.\n```\nScanner input = new Scanner(System.in);\nint max = input.nextInt();\nint place = 1;\nfor (int i = 2; i <= 6; i++) {\n    int t = input.nextInt();\n    if (t > max) {\n        max = t;\n        place = i;\n    }\n}\nSystem.out.println(max + \" \" + place);\n```\nדוגמה עם מספרים אחרים: המשתמש הקליד 15, 12, 19, 16, 11, 14 → 15 (מקום 1) → 12 קטן יותר → 19 גדול יותר, `max` = 19, `place` = 3 → 16, 11, 14 קטנים יותר → התוכנית תדפיס `19 3`.\nהמשימה שלך: המשתמש הקליד, אחת אחרי השנייה, 6 טמפרטורות: 20, 25, 31, 18, 31, 27. מה התוכנית תדפיס? כתבו שני מספרים עם רווח, למשל: 1 2",
          "ru": "Программа читает 6 температур и печатает самую высокую и её номер по порядку.\n```\nScanner input = new Scanner(System.in);\nint max = input.nextInt();\nint place = 1;\nfor (int i = 2; i <= 6; i++) {\n    int t = input.nextInt();\n    if (t > max) {\n        max = t;\n        place = i;\n    }\n}\nSystem.out.println(max + \" \" + place);\n```\nПример на других числах: пользователь ввёл 15, 12, 19, 16, 11, 14 → 15 (место 1) → 12 меньше → 19 больше, `max` = 19, `place` = 3 → 16, 11, 14 меньше → программа напечатает `19 3`.\nТвоя задача: Пользователь по очереди ввёл 6 температур: 20, 25, 31, 18, 31, 27. Что напечатает программа? Напиши два числа через пробел, например: 1 2",
          "en": "The program reads 6 temperatures and prints the highest one and its place in order.\n```\nScanner input = new Scanner(System.in);\nint max = input.nextInt();\nint place = 1;\nfor (int i = 2; i <= 6; i++) {\n    int t = input.nextInt();\n    if (t > max) {\n        max = t;\n        place = i;\n    }\n}\nSystem.out.println(max + \" \" + place);\n```\nExample with other numbers: the user typed 15, 12, 19, 16, 11, 14 → 15 (place 1) → 12 is smaller → 19 is bigger, `max` = 19, `place` = 3 → 16, 11, 14 are smaller → the program prints `19 3`.\nYour task: The user typed 6 temperatures one after another: 20, 25, 31, 18, 31, 27. What does the program print? Write two numbers with a space, for example: 1 2"
        },
        "answer": {
          "accept": [
            "31 3"
          ]
        },
        "hints": [
          {
            "he": "31 מופיע פעמיים. האם `31 > 31`?",
            "ru": "31 встречается дважды. `31 > 31` — это правда?",
            "en": "31 appears twice. Is `31 > 31` true?"
          }
        ],
        "solution": [
          "max = 20, place = 1",
          "i = 2  →  25 > 20  →  max = 25, place = 2",
          "i = 3  →  31 > 25  →  max = 31, place = 3",
          "i = 4  →  18 > 31  →  false",
          "i = 5  →  31 > 31  →  false",
          "i = 6  →  27 > 31  →  false",
          {
            "he": "תשובה: 31 3",
            "ru": "Ответ: 31 3",
            "en": "Answer: 31 3"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "mc2",
        "group": "course",
        "label": ">=",
        "kind": "text",
        "text": {
          "he": "אותה תוכנית, אבל בתנאי `>=` במקום `>`.\n```\nScanner input = new Scanner(System.in);\nint max = input.nextInt();\nint place = 1;\nfor (int i = 2; i <= 6; i++) {\n    int t = input.nextInt();\n    if (t >= max) {\n        max = t;\n        place = i;\n    }\n}\nSystem.out.println(max + \" \" + place);\n```\nדוגמה עם מספרים אחרים: המשתמש הקליד 15, 15, 12, 10, 11, 14 → 15 (מקום 1) → שוב 15: `15 >= 15` כן, ולכן `place` = 2 → השאר קטנים יותר → התוכנית תדפיס `15 2`.\nהמשימה שלך: המשתמש הקליד, אחת אחרי השנייה, 6 טמפרטורות: 20, 25, 31, 18, 31, 27. מה התוכנית תדפיס? כתבו שני מספרים עם רווח, למשל: 1 2",
          "ru": "Та же программа, но в условии `>=` вместо `>`.\n```\nScanner input = new Scanner(System.in);\nint max = input.nextInt();\nint place = 1;\nfor (int i = 2; i <= 6; i++) {\n    int t = input.nextInt();\n    if (t >= max) {\n        max = t;\n        place = i;\n    }\n}\nSystem.out.println(max + \" \" + place);\n```\nПример на других числах: пользователь ввёл 15, 15, 12, 10, 11, 14 → 15 (место 1) → снова 15: `15 >= 15` да, значит `place` = 2 → остальные меньше → программа напечатает `15 2`.\nТвоя задача: Пользователь по очереди ввёл 6 температур: 20, 25, 31, 18, 31, 27. Что напечатает программа? Напиши два числа через пробел, например: 1 2",
          "en": "The same program, but the condition uses `>=` instead of `>`.\n```\nScanner input = new Scanner(System.in);\nint max = input.nextInt();\nint place = 1;\nfor (int i = 2; i <= 6; i++) {\n    int t = input.nextInt();\n    if (t >= max) {\n        max = t;\n        place = i;\n    }\n}\nSystem.out.println(max + \" \" + place);\n```\nExample with other numbers: the user typed 15, 15, 12, 10, 11, 14 → 15 (place 1) → 15 again: `15 >= 15` yes, so `place` = 2 → the rest are smaller → the program prints `15 2`.\nYour task: The user typed 6 temperatures one after another: 20, 25, 31, 18, 31, 27. What does the program print? Write two numbers with a space, for example: 1 2"
        },
        "answer": {
          "accept": [
            "31 5"
          ]
        },
        "hints": [
          {
            "he": "עכשיו 31 השני כן מעדכן.",
            "ru": "Теперь второе 31 обновит.",
            "en": "Now the second 31 does update."
          }
        ],
        "solution": [
          "i = 5  →  31 >= 31  →  true  →  place = 5",
          {
            "he": "תשובה: 31 5",
            "ru": "Ответ: 31 5",
            "en": "Answer: 31 5"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "mc3",
        "group": "course",
        "label": {
          "he": "מקסימום ומופעים",
          "ru": "Максимум и сколько раз",
          "en": "Max and occurrences"
        },
        "kind": "text",
        "text": {
          "he": "מחומרי הקורס: התוכנית מדפיסה את המספר הגדול ביותר וכמה פעמים הוא הופיע.\n```\nScanner input = new Scanner(System.in);\nint max = Integer.MIN_VALUE;\nint count = 0;\nfor (int i = 1; i <= 6; i++) {\n    int x = input.nextInt();\n    if (x > max) {\n        max = x;\n        count = 1;\n    } else if (x == max) {\n        count++;\n    }\n}\nSystem.out.println(max + \" \" + count);\n```\nדוגמה עם מספרים אחרים: המשתמש הקליד 5, 3, 5, 7, 2, 7 → 5: `max` = 5, `count` = 1 → 3 קטן יותר → 5 שווה, `count` = 2 → 7 גדול יותר: `max` = 7, `count` שוב 1 → 2 קטן יותר → 7 שווה, `count` = 2 → התוכנית תדפיס `7 2`.\nהמשימה שלך: המשתמש הקליד, אחד אחרי השני: 4, 9, 2, 9, 9, 1. מה התוכנית תדפיס? כתבו שני מספרים עם רווח, למשל: 1 2",
          "ru": "Из материалов курса: программа печатает самое большое число и сколько раз оно встретилось.\n```\nScanner input = new Scanner(System.in);\nint max = Integer.MIN_VALUE;\nint count = 0;\nfor (int i = 1; i <= 6; i++) {\n    int x = input.nextInt();\n    if (x > max) {\n        max = x;\n        count = 1;\n    } else if (x == max) {\n        count++;\n    }\n}\nSystem.out.println(max + \" \" + count);\n```\nПример на других числах: пользователь ввёл 5, 3, 5, 7, 2, 7 → 5: `max` = 5, `count` = 1 → 3 меньше → 5 равно, `count` = 2 → 7 больше: `max` = 7, `count` снова 1 → 2 меньше → 7 равно, `count` = 2 → программа напечатает `7 2`.\nТвоя задача: Пользователь по очереди ввёл: 4, 9, 2, 9, 9, 1. Что напечатает программа? Напиши два числа через пробел, например: 1 2",
          "en": "From the course materials: the program prints the largest number and how many times it appeared.\n```\nScanner input = new Scanner(System.in);\nint max = Integer.MIN_VALUE;\nint count = 0;\nfor (int i = 1; i <= 6; i++) {\n    int x = input.nextInt();\n    if (x > max) {\n        max = x;\n        count = 1;\n    } else if (x == max) {\n        count++;\n    }\n}\nSystem.out.println(max + \" \" + count);\n```\nExample with other numbers: the user typed 5, 3, 5, 7, 2, 7 → 5: `max` = 5, `count` = 1 → 3 is smaller → 5 is equal, `count` = 2 → 7 is bigger: `max` = 7, `count` back to 1 → 2 is smaller → 7 is equal, `count` = 2 → the program prints `7 2`.\nYour task: The user typed one after another: 4, 9, 2, 9, 9, 1. What does the program print? Write two numbers with a space, for example: 1 2"
        },
        "answer": {
          "accept": [
            "9 3"
          ]
        },
        "hints": [
          {
            "he": "מקסימום חדש מתחיל ספירה מחדש מ-1.",
            "ru": "Новый максимум начинает счёт заново с 1.",
            "en": "A new maximum restarts the count at 1."
          }
        ],
        "solution": [
          "4  →  max = 4, count = 1",
          "9  →  max = 9, count = 1",
          "2  →  —",
          "9  →  count = 2",
          "9  →  count = 3",
          "1  →  —",
          {
            "he": "תשובה: 9 3",
            "ru": "Ответ: 9 3",
            "en": "Answer: 9 3"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "mc4",
        "group": "course",
        "label": "nice",
        "kind": "number",
        "text": {
          "he": "מחומרי הקורס: מדפיסים את המספרים 1 עד 50, וליד כל מספר שמתחלק ב-8 כותבים nice. כמה פעמים תודפס המילה nice?",
          "ru": "Из материалов курса: печатаем числа от 1 до 50, а рядом с каждым, которое делится на 8, пишем nice. Сколько раз напечатается nice?",
          "en": "From the course files: print the numbers 1 to 50, and next to each one divisible by 8 write nice. How many times is nice printed?"
        },
        "answer": {
          "value": "6"
        },
        "hints": [
          {
            "he": "`i % 8 == 0`. אילו מספרים עד 50?",
            "ru": "`i % 8 == 0`. Какие это числа до 50?",
            "en": "`i % 8 == 0`. Which numbers up to 50?"
          }
        ],
        "solution": [
          "8, 16, 24, 32, 40, 48",
          "56 > 50",
          {
            "he": "תשובה: 6",
            "ru": "Ответ: 6",
            "en": "Answer: 6"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "mc5",
        "group": "course",
        "label": "final",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`final double CM_IN_INCH = 2.54;`\n`System.out.println(10 * CM_IN_INCH);`",
          "ru": "Что напечатает?\n`final double CM_IN_INCH = 2.54;`\n`System.out.println(10 * CM_IN_INCH);`",
          "en": "What is printed?\n`final double CM_IN_INCH = 2.54;`\n`System.out.println(10 * CM_IN_INCH);`"
        },
        "answer": {
          "value": "25.4"
        },
        "hints": [
          {
            "he": "10 אינץ' בסנטימטרים.",
            "ru": "10 дюймов в сантиметрах.",
            "en": "10 inches in centimetres."
          }
        ],
        "solution": [
          "10 × 2.54 = 25.4",
          {
            "he": "תשובה: 25.4",
            "ru": "Ответ: 25.4",
            "en": "Answer: 25.4"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "wl1",
        "group": "ws",
        "label": "for i < 5",
        "kind": "number",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס?\n`int sum = 0;`\n`for (int i = 1; i < 5; i++) {`\n`    sum += i;`\n`}`\n`System.out.println(sum);`",
          "ru": "Из листа упражнений курса. Что напечатает?\n`int sum = 0;`\n`for (int i = 1; i < 5; i++) {`\n`    sum += i;`\n`}`\n`System.out.println(sum);`",
          "en": "From the course worksheet. What is printed?\n`int sum = 0;`\n`for (int i = 1; i < 5; i++) {`\n`    sum += i;`\n`}`\n`System.out.println(sum);`"
        },
        "answer": {
          "value": "10"
        },
        "hints": [
          {
            "he": "`i < 5` — האם 5 נכנס?",
            "ru": "`i < 5` — 5 входит?",
            "en": "`i < 5` — is 5 included?"
          }
        ],
        "solution": [
          "1 + 2 + 3 + 4 = 10",
          {
            "he": "תשובה: 10",
            "ru": "Ответ: 10",
            "en": "Answer: 10"
          }
        ],
        "_src": "pass-0311-ws"
      },
      {
        "id": "wl2",
        "group": "ws",
        "label": "s += j",
        "kind": "text",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס?\n`String s = \"\";`\n`for (int j = 10; j >= 0; j -= 5) {`\n`    s += j;`\n`}`\n`System.out.println(s);`",
          "ru": "Из листа упражнений курса. Что напечатает?\n`String s = \"\";`\n`for (int j = 10; j >= 0; j -= 5) {`\n`    s += j;`\n`}`\n`System.out.println(s);`",
          "en": "From the course worksheet. What is printed?\n`String s = \"\";`\n`for (int j = 10; j >= 0; j -= 5) {`\n`    s += j;`\n`}`\n`System.out.println(s);`"
        },
        "answer": {
          "accept": [
            "1050"
          ]
        },
        "hints": [
          {
            "he": "s הוא טקסט — מדביקים, לא מחברים.",
            "ru": "s — текст: склеиваем, а не складываем.",
            "en": "s is text — join, do not add."
          }
        ],
        "solution": [
          "j = 10  →  \"10\"",
          "j = 5  →  \"105\"",
          "j = 0  →  \"1050\"",
          {
            "he": "תשובה: 1050",
            "ru": "Ответ: 1050",
            "en": "Answer: 1050"
          }
        ],
        "_src": "pass-0311-ws"
      },
      {
        "id": "wl3",
        "group": "ws",
        "label": "a++ b--",
        "kind": "number",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס?\n`int a = 1;`\n`int b = 5;`\n`while (a < b) {`\n`    a++;`\n`    b--;`\n`}`\n`System.out.println(a);`",
          "ru": "Из листа упражнений курса. Что напечатает?\n`int a = 1;`\n`int b = 5;`\n`while (a < b) {`\n`    a++;`\n`    b--;`\n`}`\n`System.out.println(a);`",
          "en": "From the course worksheet. What is printed?\n`int a = 1;`\n`int b = 5;`\n`while (a < b) {`\n`    a++;`\n`    b--;`\n`}`\n`System.out.println(a);`"
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "כל סיבוב a ו-b מתקרבים ב-2.",
            "ru": "Каждый круг a и b сближаются на 2.",
            "en": "Each pass a and b get 2 closer."
          }
        ],
        "solution": [
          "a = 2, b = 4",
          "a = 3, b = 3",
          "3 < 3  →  false",
          {
            "he": "תשובה: 3",
            "ru": "Ответ: 3",
            "en": "Answer: 3"
          }
        ],
        "_src": "pass-0311-ws"
      },
      {
        "id": "wl4",
        "group": "ws",
        "label": "num /= 2",
        "kind": "number",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס?\n`int count = 0;`\n`int num = 16;`\n`while (num > 0) {`\n`    num /= 2;`\n`    count++;`\n`}`\n`System.out.println(count);`",
          "ru": "Из листа упражнений курса. Что напечатает?\n`int count = 0;`\n`int num = 16;`\n`while (num > 0) {`\n`    num /= 2;`\n`    count++;`\n`}`\n`System.out.println(count);`",
          "en": "From the course worksheet. What is printed?\n`int count = 0;`\n`int num = 16;`\n`while (num > 0) {`\n`    num /= 2;`\n`    count++;`\n`}`\n`System.out.println(count);`"
        },
        "answer": {
          "value": "5"
        },
        "hints": [
          {
            "he": "16, 8, 4, 2, 1, 0 — כמה חלוקות?",
            "ru": "16, 8, 4, 2, 1, 0 — сколько делений?",
            "en": "16, 8, 4, 2, 1, 0 — how many divisions?"
          }
        ],
        "solution": [
          "16 → 8 → 4 → 2 → 1 → 0",
          "count = 5",
          {
            "he": "תשובה: 5",
            "ru": "Ответ: 5",
            "en": "Answer: 5"
          }
        ],
        "_src": "pass-0311-ws"
      },
      {
        "id": "wl5",
        "group": "ws",
        "label": "break",
        "kind": "text",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס?\n`for (int i = 1; i <= 8; i++) {`\n`    if (i == 5) {`\n`        break;`\n`    }`\n`    System.out.print(i);`\n`}`",
          "ru": "Из листа упражнений курса. Что напечатает?\n`for (int i = 1; i <= 8; i++) {`\n`    if (i == 5) {`\n`        break;`\n`    }`\n`    System.out.print(i);`\n`}`",
          "en": "From the course worksheet. What is printed?\n`for (int i = 1; i <= 8; i++) {`\n`    if (i == 5) {`\n`        break;`\n`    }`\n`    System.out.print(i);`\n`}`"
        },
        "answer": {
          "accept": [
            "1234"
          ]
        },
        "hints": [
          {
            "he": "ב-5 יוצאים לפני ההדפסה.",
            "ru": "На 5 выходим до печати.",
            "en": "At 5 we leave before printing."
          }
        ],
        "solution": [
          "1 2 3 4 printed",
          "i = 5  →  break",
          {
            "he": "תשובה: 1234",
            "ru": "Ответ: 1234",
            "en": "Answer: 1234"
          }
        ],
        "_src": "pass-0311-ws"
      },
      {
        "id": "wl6",
        "group": "ws",
        "label": "continue",
        "kind": "text",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס?\n`for (int i = 1; i <= 5; i++) {`\n`    if (i % 2 == 0) {`\n`        continue;`\n`    }`\n`    System.out.print(i);`\n`}`",
          "ru": "Из листа упражнений курса. Что напечатает?\n`for (int i = 1; i <= 5; i++) {`\n`    if (i % 2 == 0) {`\n`        continue;`\n`    }`\n`    System.out.print(i);`\n`}`",
          "en": "From the course worksheet. What is printed?\n`for (int i = 1; i <= 5; i++) {`\n`    if (i % 2 == 0) {`\n`        continue;`\n`    }`\n`    System.out.print(i);`\n`}`"
        },
        "answer": {
          "accept": [
            "135"
          ]
        },
        "hints": [
          {
            "he": "זוגיים מדלגים.",
            "ru": "Чётные пропускаются.",
            "en": "Even numbers are skipped."
          }
        ],
        "solution": [
          "2, 4  →  continue",
          "1 3 5 printed",
          {
            "he": "תשובה: 135",
            "ru": "Ответ: 135",
            "en": "Answer: 135"
          }
        ],
        "_src": "pass-0311-ws"
      },
      {
        "id": "wl7",
        "group": "ws",
        "label": "x + \"\" + y",
        "kind": "text",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס?\n`int x = 0;`\n`int y = 5;`\n`while (x < y) {`\n`    if (x % 2 == 0) {`\n`        x += 2;`\n`        continue;`\n`    }`\n`    y--;`\n`    x++;`\n`}`\n`System.out.println(x + \"\" + y);`",
          "ru": "Из листа упражнений курса. Что напечатает?\n`int x = 0;`\n`int y = 5;`\n`while (x < y) {`\n`    if (x % 2 == 0) {`\n`        x += 2;`\n`        continue;`\n`    }`\n`    y--;`\n`    x++;`\n`}`\n`System.out.println(x + \"\" + y);`",
          "en": "From the course worksheet. What is printed?\n`int x = 0;`\n`int y = 5;`\n`while (x < y) {`\n`    if (x % 2 == 0) {`\n`        x += 2;`\n`        continue;`\n`    }`\n`    y--;`\n`    x++;`\n`}`\n`System.out.println(x + \"\" + y);`"
        },
        "answer": {
          "accept": [
            "65"
          ]
        },
        "hints": [
          {
            "he": "x תמיד זוגי, ולכן תמיד נכנסים ל-if.",
            "ru": "x всегда чётный, поэтому всегда заходим в if.",
            "en": "x is always even, so we always enter the if."
          }
        ],
        "solution": [
          "x = 2",
          "x = 4",
          "x = 6  →  6 < 5  →  false",
          "\"\" makes text  →  \"6\" + \"5\"",
          {
            "he": "תשובה: 65",
            "ru": "Ответ: 65",
            "en": "Answer: 65"
          }
        ],
        "_src": "pass-0311-ws"
      },
      {
        "id": "wl8",
        "group": "ws",
        "label": "break at 3",
        "kind": "number",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס?\n`int a = 0;`\n`for (int i = 0; i < 5; i++) {`\n`    if (i == 3) {`\n`        break;`\n`    }`\n`    a += i;`\n`}`\n`System.out.println(a);`",
          "ru": "Из листа упражнений курса. Что напечатает?\n`int a = 0;`\n`for (int i = 0; i < 5; i++) {`\n`    if (i == 3) {`\n`        break;`\n`    }`\n`    a += i;`\n`}`\n`System.out.println(a);`",
          "en": "From the course worksheet. What is printed?\n`int a = 0;`\n`for (int i = 0; i < 5; i++) {`\n`    if (i == 3) {`\n`        break;`\n`    }`\n`    a += i;`\n`}`\n`System.out.println(a);`"
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "מחברים רק 0, 1, 2.",
            "ru": "Складываем только 0, 1, 2.",
            "en": "Only 0, 1, 2 are added."
          }
        ],
        "solution": [
          "0 + 1 + 2 = 3",
          {
            "he": "תשובה: 3",
            "ru": "Ответ: 3",
            "en": "Answer: 3"
          }
        ],
        "_src": "pass-0311-ws"
      },
      {
        "id": "wl9",
        "group": "ws",
        "label": "5!",
        "kind": "number",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס?\n`int f = 1;`\n`for (int i = 1; i <= 5; i++) {`\n`    f *= i;`\n`}`\n`System.out.println(f);`",
          "ru": "Из листа упражнений курса. Что напечатает?\n`int f = 1;`\n`for (int i = 1; i <= 5; i++) {`\n`    f *= i;`\n`}`\n`System.out.println(f);`",
          "en": "From the course worksheet. What is printed?\n`int f = 1;`\n`for (int i = 1; i <= 5; i++) {`\n`    f *= i;`\n`}`\n`System.out.println(f);`"
        },
        "answer": {
          "value": "120"
        },
        "hints": [
          {
            "he": "במכפלה מתחילים מ-1, לא מ-0.",
            "ru": "Для произведения начинаем с 1, а не с 0.",
            "en": "For a product start at 1, not 0."
          }
        ],
        "solution": [
          "1 × 2 × 3 × 4 × 5 = 120",
          {
            "he": "תשובה: 120",
            "ru": "Ответ: 120",
            "en": "Answer: 120"
          }
        ],
        "_src": "pass-0311-ws"
      },
      {
        "id": "wl10",
        "group": "ws",
        "label": "3⁴",
        "kind": "number",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס?\n`int p = 1;`\n`for (int i = 1; i <= 4; i++) {`\n`    p *= 3;`\n`}`\n`System.out.println(p);`",
          "ru": "Из листа упражнений курса. Что напечатает?\n`int p = 1;`\n`for (int i = 1; i <= 4; i++) {`\n`    p *= 3;`\n`}`\n`System.out.println(p);`",
          "en": "From the course worksheet. What is printed?\n`int p = 1;`\n`for (int i = 1; i <= 4; i++) {`\n`    p *= 3;`\n`}`\n`System.out.println(p);`"
        },
        "answer": {
          "value": "81"
        },
        "hints": [
          {
            "he": "4 פעמים כפול 3.",
            "ru": "4 раза умножить на 3.",
            "en": "Multiply by 3 four times."
          }
        ],
        "solution": [
          "3 → 9 → 27 → 81",
          {
            "he": "תשובה: 81",
            "ru": "Ответ: 81",
            "en": "Answer: 81"
          }
        ],
        "_src": "pass-0311-ws"
      },
      {
        "id": "wl11",
        "group": "ws",
        "label": {
          "he": "ספרות של 87654",
          "ru": "Цифры 87654",
          "en": "Digits of 87654"
        },
        "kind": "number",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס?\n`int num = 87654;`\n`int count = 0;`\n`while (num > 0) {`\n`    count++;`\n`    num /= 10;`\n`}`\n`System.out.println(count);`",
          "ru": "Из листа упражнений курса. Что напечатает?\n`int num = 87654;`\n`int count = 0;`\n`while (num > 0) {`\n`    count++;`\n`    num /= 10;`\n`}`\n`System.out.println(count);`",
          "en": "From the course worksheet. What is printed?\n`int num = 87654;`\n`int count = 0;`\n`while (num > 0) {`\n`    count++;`\n`    num /= 10;`\n`}`\n`System.out.println(count);`"
        },
        "answer": {
          "value": "5"
        },
        "hints": [
          {
            "he": "כל `/ 10` מוריד ספרה אחת.",
            "ru": "Каждое `/ 10` убирает одну цифру.",
            "en": "Each `/ 10` removes one digit."
          }
        ],
        "solution": [
          "87654 → 8765 → 876 → 87 → 8 → 0",
          "count = 5",
          {
            "he": "תשובה: 5",
            "ru": "Ответ: 5",
            "en": "Answer: 5"
          }
        ],
        "_src": "pass-0311-ws"
      }
    ],
    "ai": [
      {
        "id": "d1",
        "level": 1,
        "label": "D1",
        "kind": "number",
        "text": {
          "he": "כמה פעמים תרוץ הלולאה (כמה פעמים יודפס \"Hi\")?\n`for (int i = 0; i < 7; i++) {`\n`    System.out.println(\"Hi\");`\n`}`",
          "ru": "Сколько раз выполнится цикл (сколько раз напечатается \"Hi\")?\n`for (int i = 0; i < 7; i++) {`\n`    System.out.println(\"Hi\");`\n`}`",
          "en": "How many times does the loop run (how many times is \"Hi\" printed)?\n`for (int i = 0; i < 7; i++) {`\n`    System.out.println(\"Hi\");`\n`}`"
        },
        "answer": {
          "value": "7"
        },
        "hints": [
          {
            "he": "i מקבל את הערכים 0, 1, 2, ... — עד איפה?",
            "ru": "i принимает значения 0, 1, 2, ... — до какого?",
            "en": "i takes the values 0, 1, 2, ... — up to what?"
          }
        ],
        "solution": [
          "i = 0, 1, 2, 3, 4, 5, 6",
          "i = 7  →  7 < 7  →  false",
          {
            "he": "7 סיבובים",
            "ru": "7 проходов",
            "en": "7 rounds"
          }
        ]
      },
      {
        "id": "d2",
        "level": 1,
        "label": "D2",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`int s = 0;`\n`for (int i = 1; i <= 4; i++) {`\n`    s += i;`\n`}`\n`System.out.println(s);`",
          "ru": "Что будет напечатано?\n`int s = 0;`\n`for (int i = 1; i <= 4; i++) {`\n`    s += i;`\n`}`\n`System.out.println(s);`",
          "en": "What is printed?\n`int s = 0;`\n`for (int i = 1; i <= 4; i++) {`\n`    s += i;`\n`}`\n`System.out.println(s);`"
        },
        "answer": {
          "value": "10"
        },
        "hints": [
          {
            "he": "עקבו אחרי s אחרי כל סיבוב.",
            "ru": "Следи за s после каждого прохода.",
            "en": "Track s after every round."
          }
        ],
        "solution": [
          "i = 1  →  s = 1",
          "i = 2  →  s = 3",
          "i = 3  →  s = 6",
          "i = 4  →  s = 10",
          {
            "he": "מודפס 10",
            "ru": "Печатается 10",
            "en": "10 is printed"
          }
        ]
      },
      {
        "id": "d3",
        "level": 1,
        "label": "D3",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`int c = 0;`\n`for (int i = 1; i <= 20; i++) {`\n`    if (i % 5 == 0) c++;`\n`}`\n`System.out.println(c);`",
          "ru": "Что будет напечатано?\n`int c = 0;`\n`for (int i = 1; i <= 20; i++) {`\n`    if (i % 5 == 0) c++;`\n`}`\n`System.out.println(c);`",
          "en": "What is printed?\n`int c = 0;`\n`for (int i = 1; i <= 20; i++) {`\n`    if (i % 5 == 0) c++;`\n`}`\n`System.out.println(c);`"
        },
        "answer": {
          "value": "4"
        },
        "hints": [
          {
            "he": "אילו מספרים מ-1 עד 20 מתחלקים ב-5?",
            "ru": "Какие числа от 1 до 20 делятся на 5?",
            "en": "Which numbers from 1 to 20 are divisible by 5?"
          }
        ],
        "solution": [
          "i = 5   →  c = 1",
          "i = 10  →  c = 2",
          "i = 15  →  c = 3",
          "i = 20  →  c = 4",
          {
            "he": "בשאר הסיבובים התנאי `false`. מודפס 4",
            "ru": "В остальных проходах условие `false`. Печатается 4",
            "en": "In the other rounds the condition is `false`. 4 is printed"
          }
        ]
      },
      {
        "id": "d4",
        "level": 2,
        "label": "D4",
        "kind": "number",
        "text": {
          "he": "מכפלה: מה יודפס?\n`int p = 1;`\n`for (int i = 1; i <= 5; i++) {`\n`    p *= i;`\n`}`\n`System.out.println(p);`",
          "ru": "Произведение: что будет напечатано?\n`int p = 1;`\n`for (int i = 1; i <= 5; i++) {`\n`    p *= i;`\n`}`\n`System.out.println(p);`",
          "en": "A product: what is printed?\n`int p = 1;`\n`for (int i = 1; i <= 5; i++) {`\n`    p *= i;`\n`}`\n`System.out.println(p);`"
        },
        "answer": {
          "value": "120"
        },
        "hints": [
          {
            "he": "למה `p` מתחיל מ-1 ולא מ-0?",
            "ru": "Почему `p` начинается с 1, а не с 0?",
            "en": "Why does `p` start at 1 and not 0?"
          },
          {
            "he": "`p *= i` כופל את p ב-i בכל סיבוב.",
            "ru": "`p *= i` умножает p на i в каждом проходе.",
            "en": "`p *= i` multiplies p by i every round."
          }
        ],
        "solution": [
          "i = 1  →  p = 1",
          "i = 2  →  p = 2",
          "i = 3  →  p = 6",
          "i = 4  →  p = 24",
          "i = 5  →  p = 120",
          {
            "he": "מודפס 120. (אם p היה מתחיל מ-0, הכול היה 0.)",
            "ru": "Печатается 120. (Если бы p начинался с 0, всё было бы 0.)",
            "en": "120 is printed. (If p started at 0, everything would be 0.)"
          }
        ]
      },
      {
        "id": "d5",
        "level": 2,
        "label": "D5",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`int s = 0;`\n`for (int i = 10; i >= 1; i -= 3) {`\n`    s += i;`\n`}`\n`System.out.println(s);`",
          "ru": "Что будет напечатано?\n`int s = 0;`\n`for (int i = 10; i >= 1; i -= 3) {`\n`    s += i;`\n`}`\n`System.out.println(s);`",
          "en": "What is printed?\n`int s = 0;`\n`for (int i = 10; i >= 1; i -= 3) {`\n`    s += i;`\n`}`\n`System.out.println(s);`"
        },
        "answer": {
          "value": "22"
        },
        "hints": [
          {
            "he": "הפעם i יורד ב-3: 10, 7, ...",
            "ru": "Теперь i уменьшается на 3: 10, 7, ...",
            "en": "This time i goes down by 3: 10, 7, ..."
          }
        ],
        "solution": [
          "i = 10  →  s = 10",
          "i = 7   →  s = 17",
          "i = 4   →  s = 21",
          "i = 1   →  s = 22",
          "i = -2  →  -2 >= 1  →  false",
          {
            "he": "מודפס 22",
            "ru": "Печатается 22",
            "en": "22 is printed"
          }
        ]
      },
      {
        "id": "d6",
        "level": 2,
        "label": "D6",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`int n = 1;`\n`int steps = 0;`\n`while (n < 100) {`\n`    n *= 3;`\n`    steps++;`\n`}`\n`System.out.println(steps);`",
          "ru": "Что будет напечатано?\n`int n = 1;`\n`int steps = 0;`\n`while (n < 100) {`\n`    n *= 3;`\n`    steps++;`\n`}`\n`System.out.println(steps);`",
          "en": "What is printed?\n`int n = 1;`\n`int steps = 0;`\n`while (n < 100) {`\n`    n *= 3;`\n`    steps++;`\n`}`\n`System.out.println(steps);`"
        },
        "answer": {
          "value": "5"
        },
        "hints": [
          {
            "he": "כתבו את n אחרי כל סיבוב: 3, 9, ...",
            "ru": "Выпиши n после каждого прохода: 3, 9, ...",
            "en": "Write down n after each round: 3, 9, ..."
          },
          {
            "he": "התנאי נבדק לפני כל סיבוב: האם n עדיין קטן מ-100?",
            "ru": "Условие проверяется перед каждым проходом: n ещё меньше 100?",
            "en": "The condition is checked before each round: is n still below 100?"
          }
        ],
        "solution": [
          "1 < 100  →  n = 3,    steps = 1",
          "3 < 100  →  n = 9,    steps = 2",
          "9 < 100  →  n = 27,   steps = 3",
          "27 < 100  →  n = 81,  steps = 4",
          "81 < 100  →  n = 243, steps = 5",
          "243 < 100  →  false  →  exit",
          {
            "he": "מודפס 5",
            "ru": "Печатается 5",
            "en": "5 is printed"
          }
        ]
      },
      {
        "id": "d7",
        "level": 2,
        "label": "D7",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`int s = 0;`\n`for (int i = 1; i <= 10; i++) {`\n`    if (i % 3 == 0) continue;`\n`    s += i;`\n`}`\n`System.out.println(s);`",
          "ru": "Что будет напечатано?\n`int s = 0;`\n`for (int i = 1; i <= 10; i++) {`\n`    if (i % 3 == 0) continue;`\n`    s += i;`\n`}`\n`System.out.println(s);`",
          "en": "What is printed?\n`int s = 0;`\n`for (int i = 1; i <= 10; i++) {`\n`    if (i % 3 == 0) continue;`\n`    s += i;`\n`}`\n`System.out.println(s);`"
        },
        "answer": {
          "value": "37"
        },
        "hints": [
          {
            "he": "אילו מספרים מדלגים? אלה שמתחלקים ב-3.",
            "ru": "Какие числа пропускаются? Те, что делятся на 3.",
            "en": "Which numbers are skipped? Those divisible by 3."
          },
          {
            "he": "סכום 1 עד 10 הוא 55. כמה צריך להוריד?",
            "ru": "Сумма от 1 до 10 — 55. Сколько нужно вычесть?",
            "en": "The sum of 1 to 10 is 55. How much must be subtracted?"
          }
        ],
        "solution": [
          "skipped: 3, 6, 9",
          "s = 1 + 2 + 4 + 5 + 7 + 8 + 10",
          "= 37",
          {
            "he": "בדיקה: 55 − (3 + 6 + 9) = 55 − 18 = 37",
            "ru": "Проверка: 55 − (3 + 6 + 9) = 55 − 18 = 37",
            "en": "Check: 55 − (3 + 6 + 9) = 55 − 18 = 37"
          }
        ]
      },
      {
        "id": "d8",
        "level": 2,
        "label": "D8",
        "kind": "number",
        "text": {
          "he": "ממוצע הזוגיים מ-2 עד 10. מה יודפס?\n`int sum = 0;`\n`int count = 0;`\n`for (int i = 2; i <= 10; i += 2) {`\n`    sum += i;`\n`    count++;`\n`}`\n`System.out.println((double) sum / count);`",
          "ru": "Среднее чётных от 2 до 10. Что будет напечатано?\n`int sum = 0;`\n`int count = 0;`\n`for (int i = 2; i <= 10; i += 2) {`\n`    sum += i;`\n`    count++;`\n`}`\n`System.out.println((double) sum / count);`",
          "en": "The average of the even numbers from 2 to 10. What is printed?\n`int sum = 0;`\n`int count = 0;`\n`for (int i = 2; i <= 10; i += 2) {`\n`    sum += i;`\n`    count++;`\n`}`\n`System.out.println((double) sum / count);`"
        },
        "answer": {
          "value": "6"
        },
        "hints": [
          {
            "he": "צוברים סכום וגם סופרים. כמה מספרים זוגיים יש מ-2 עד 10?",
            "ru": "Копим сумму и считаем количество. Сколько чётных от 2 до 10?",
            "en": "Collect a sum and also count. How many even numbers are there from 2 to 10?"
          }
        ],
        "solution": [
          "i = 2, 4, 6, 8, 10",
          "sum = 30,  count = 5",
          "(double) 30 / 5 = 6.0",
          {
            "he": "מודפס 6.0",
            "ru": "Печатается 6.0",
            "en": "6.0 is printed"
          }
        ]
      },
      {
        "id": "d9",
        "level": 3,
        "label": "D9",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`int x = 1;`\n`while (true) {`\n`    x *= 2;`\n`    if (x > 50) break;`\n`}`\n`System.out.println(x);`",
          "ru": "Что будет напечатано?\n`int x = 1;`\n`while (true) {`\n`    x *= 2;`\n`    if (x > 50) break;`\n`}`\n`System.out.println(x);`",
          "en": "What is printed?\n`int x = 1;`\n`while (true) {`\n`    x *= 2;`\n`    if (x > 50) break;`\n`}`\n`System.out.println(x);`"
        },
        "answer": {
          "value": "64"
        },
        "hints": [
          {
            "he": "`while (true)` רץ לנצח — רק `break` עוצר אותו.",
            "ru": "`while (true)` крутится вечно — остановить его может только `break`.",
            "en": "`while (true)` runs forever — only `break` stops it."
          },
          {
            "he": "x מוכפל ב-2 כל פעם: 2, 4, 8, ... מתי הוא עובר את 50?",
            "ru": "x удваивается: 2, 4, 8, ... Когда он станет больше 50?",
            "en": "x doubles: 2, 4, 8, ... When does it pass 50?"
          }
        ],
        "solution": [
          "x = 2, 4, 8, 16, 32  →  each time x > 50 is false",
          "x = 64  →  64 > 50  →  break",
          {
            "he": "מודפס 64",
            "ru": "Печатается 64",
            "en": "64 is printed"
          }
        ]
      },
      {
        "id": "d10",
        "level": 3,
        "label": "D10",
        "kind": "choice",
        "text": {
          "he": "התוכנית מחפשת את הגדול מבין 3 מספרים, אבל `max` מתחיל מ־0.\n```\nScanner input = new Scanner(System.in);\nint max = 0;\nfor (int i = 0; i < 3; i++) {\n    int x = input.nextInt();\n    if (x > max) max = x;\n}\nSystem.out.println(max);\n```\nדוגמה עם מספרים אחרים: המשתמש הקליד 3, -5, 1 → `max` = 0 → 3 גדול מ־0, `max` = 3 → -5 קטן יותר → 1 קטן יותר → התוכנית תדפיס 3.\nהמשימה שלך: המשתמש הקליד, אחד אחרי השני, 3 מספרים: -4, -2, -9. מה התוכנית תדפיס?",
          "ru": "Программа ищет самое большое из 3 чисел, но `max` начинается с 0.\n```\nScanner input = new Scanner(System.in);\nint max = 0;\nfor (int i = 0; i < 3; i++) {\n    int x = input.nextInt();\n    if (x > max) max = x;\n}\nSystem.out.println(max);\n```\nПример на других числах: пользователь ввёл 3, -5, 1 → `max` = 0 → 3 больше 0, `max` = 3 → -5 меньше → 1 меньше → программа напечатает 3.\nТвоя задача: Пользователь по очереди ввёл 3 числа: -4, -2, -9. Что напечатает программа?",
          "en": "The program looks for the largest of 3 numbers, but `max` starts at 0.\n```\nScanner input = new Scanner(System.in);\nint max = 0;\nfor (int i = 0; i < 3; i++) {\n    int x = input.nextInt();\n    if (x > max) max = x;\n}\nSystem.out.println(max);\n```\nExample with other numbers: the user typed 3, -5, 1 → `max` = 0 → 3 is bigger than 0, `max` = 3 → -5 is smaller → 1 is smaller → the program prints 3.\nYour task: The user typed 3 numbers one after another: -4, -2, -9. What does the program print?"
        },
        "options": [
          "-2",
          "0",
          "-9"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "האם אחד מהמספרים גדול מ-0?",
            "ru": "Хоть одно из чисел больше 0?",
            "en": "Is any of the numbers bigger than 0?"
          }
        ],
        "solution": [
          "-4 > 0  →  false",
          "-2 > 0  →  false",
          "-9 > 0  →  false",
          {
            "he": "`max` נשאר 0 ומודפס 0 — מספר שבכלל לא הוקלד. התיקון: `int max = Integer.MIN_VALUE;` ואז יודפס -2.",
            "ru": "`max` остаётся 0, и печатается 0 — число, которого не вводили. Исправление: `int max = Integer.MIN_VALUE;`, тогда напечатается -2.",
            "en": "`max` stays 0 and 0 is printed — a number nobody typed. The fix: `int max = Integer.MIN_VALUE;`, then -2 is printed."
          }
        ]
      },
      {
        "id": "d11",
        "level": 3,
        "label": "D11",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`int n = 90210;`\n`int c = 0;`\n`while (n != 0) {`\n`    c++;`\n`    n /= 10;`\n`}`\n`System.out.println(c);`",
          "ru": "Что будет напечатано?\n`int n = 90210;`\n`int c = 0;`\n`while (n != 0) {`\n`    c++;`\n`    n /= 10;`\n`}`\n`System.out.println(c);`",
          "en": "What is printed?\n`int n = 90210;`\n`int c = 0;`\n`while (n != 0) {`\n`    c++;`\n`    n /= 10;`\n`}`\n`System.out.println(c);`"
        },
        "answer": {
          "value": "5"
        },
        "hints": [
          {
            "he": "האפסים בתוך המספר לא עוצרים את הלולאה — רק כש-n כולו 0.",
            "ru": "Нули внутри числа цикл не останавливают — только когда n целиком станет 0.",
            "en": "The zeros inside the number do not stop the loop — only when n itself becomes 0."
          }
        ],
        "solution": [
          "n = 90210  →  c = 1,  n = 9021",
          "n = 9021   →  c = 2,  n = 902",
          "n = 902    →  c = 3,  n = 90",
          "n = 90     →  c = 4,  n = 9",
          "n = 9      →  c = 5,  n = 0",
          "0 != 0  →  false  →  exit",
          {
            "he": "מודפס 5",
            "ru": "Печатается 5",
            "en": "5 is printed"
          }
        ]
      },
      {
        "id": "d12",
        "level": 3,
        "label": "D12",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`int n = 123;`\n`int r = 0;`\n`while (n > 0) {`\n`    r = r * 10 + n % 10;`\n`    n /= 10;`\n`}`\n`System.out.println(r);`",
          "ru": "Что будет напечатано?\n`int n = 123;`\n`int r = 0;`\n`while (n > 0) {`\n`    r = r * 10 + n % 10;`\n`    n /= 10;`\n`}`\n`System.out.println(r);`",
          "en": "What is printed?\n`int n = 123;`\n`int r = 0;`\n`while (n > 0) {`\n`    r = r * 10 + n % 10;`\n`    n /= 10;`\n`}`\n`System.out.println(r);`"
        },
        "answer": {
          "value": "321"
        },
        "hints": [
          {
            "he": "בכל סיבוב: `r * 10` מזיז את r ספרה שמאלה, ו-`n % 10` מוסיף את הספרה האחרונה של n.",
            "ru": "В каждом проходе: `r * 10` сдвигает r на цифру влево, а `n % 10` добавляет последнюю цифру n.",
            "en": "Each round: `r * 10` shifts r one digit left, and `n % 10` adds the last digit of n."
          }
        ],
        "solution": [
          "n = 123  →  r = 0 * 10 + 3 = 3,     n = 12",
          "n = 12   →  r = 3 * 10 + 2 = 32,    n = 1",
          "n = 1    →  r = 32 * 10 + 1 = 321,  n = 0",
          "0 > 0  →  false  →  exit",
          {
            "he": "מודפס 321 — המספר בסדר הפוך",
            "ru": "Печатается 321 — число задом наперёд",
            "en": "321 is printed — the number reversed"
          }
        ]
      },
      {
        "id": "d13",
        "level": 2,
        "label": "D13",
        "kind": "choice",
        "text": {
          "he": "מחפשים את המינימום של מספרים תלת-ספרתיים. מאיזה ערך צריך להתחיל את `min`?",
          "ru": "Ищем минимум среди трёхзначных чисел. С какого значения нужно начать `min`?",
          "en": "We look for the minimum of three-digit numbers. What should `min` start at?"
        },
        "options": [
          "0",
          "100",
          "999"
        ],
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "`min` צריך להתחיל גדול מכל מספר שיכול להגיע, כדי שהמספר הראשון יחליף אותו.",
            "ru": "`min` должен начинаться больше любого возможного числа, чтобы первое же число его заменило.",
            "en": "`min` must start bigger than any number that can come, so the first number replaces it."
          }
        ],
        "solution": [
          {
            "he": "עם 0: הקלט 345, 120, 870 — אף מספר לא קטן מ-0, מודפס 0.",
            "ru": "С 0: ввод 345, 120, 870 — ни одно число не меньше 0, печатается 0.",
            "en": "With 0: input 345, 120, 870 — no number is less than 0, 0 is printed."
          },
          {
            "he": "עם 999: `345 < 999` → `min = 345`, `120 < 345` → `min = 120`. מודפס 120.",
            "ru": "С 999: `345 < 999` → `min = 345`, `120 < 345` → `min = 120`. Печатается 120.",
            "en": "With 999: `345 < 999` → `min = 345`, `120 < 345` → `min = 120`. 120 is printed."
          },
          {
            "he": "תשובה: 999 (או `Integer.MAX_VALUE`).",
            "ru": "Ответ: 999 (или `Integer.MAX_VALUE`).",
            "en": "Answer: 999 (or `Integer.MAX_VALUE`)."
          }
        ]
      },
      {
        "id": "d14",
        "level": 3,
        "label": "D14",
        "kind": "choice",
        "text": {
          "he": "הסדר הפוך! התוכנית מחפשת את שני המספרים הגדולים (`first` ו־`second`), אבל בתוך ה־`if` השורות בסדר לא נכון.\n```\nScanner input = new Scanner(System.in);\nint first = Integer.MIN_VALUE;\nint second = Integer.MIN_VALUE;\nfor (int i = 0; i < 4; i++) {\n    int num = input.nextInt();\n    if (num > first) {\n        first = num;\n        second = first;\n    } else if (num > second) {\n        second = num;\n    }\n}\nSystem.out.println(first + \" \" + second);\n```\nדוגמה: הסיבוב הראשון, אם המשתמש הקליד קודם 6 → `6 > first` כן → `first = 6` → ואז `second = first`, כלומר גם `second` הוא 6. את שאר הסיבובים בדקו לבד.\nהמשימה שלך: המשתמש הקליד, אחד אחרי השני, 4 מספרים: 7, 3, 9, 5. מה התוכנית תדפיס?",
          "ru": "Порядок перепутан! Программа ищет два самых больших числа (`first` и `second`), но внутри `if` строки стоят не в том порядке.\n```\nScanner input = new Scanner(System.in);\nint first = Integer.MIN_VALUE;\nint second = Integer.MIN_VALUE;\nfor (int i = 0; i < 4; i++) {\n    int num = input.nextInt();\n    if (num > first) {\n        first = num;\n        second = first;\n    } else if (num > second) {\n        second = num;\n    }\n}\nSystem.out.println(first + \" \" + second);\n```\nПример: первый круг, если пользователь сначала ввёл 6 → `6 > first` да → `first = 6` → потом `second = first`, то есть `second` тоже 6. Дальше проверь каждый круг сам.\nТвоя задача: Пользователь по очереди ввёл 4 числа: 7, 3, 9, 5. Что напечатает программа?",
          "en": "The order is mixed up! The program looks for the two largest numbers (`first` and `second`), but inside the `if` the lines are in the wrong order.\n```\nScanner input = new Scanner(System.in);\nint first = Integer.MIN_VALUE;\nint second = Integer.MIN_VALUE;\nfor (int i = 0; i < 4; i++) {\n    int num = input.nextInt();\n    if (num > first) {\n        first = num;\n        second = first;\n    } else if (num > second) {\n        second = num;\n    }\n}\nSystem.out.println(first + \" \" + second);\n```\nExample: the first round, if the user first typed 6 → `6 > first` yes → `first = 6` → then `second = first`, so `second` is 6 too. Check the other rounds yourself.\nYour task: The user typed 4 numbers one after another: 7, 3, 9, 5. What does the program print?"
        },
        "options": [
          "9 7",
          "9 9",
          "7 9"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "אחרי `first = num` השורה `second = first` מעתיקה את המספר החדש, לא את הישן.",
            "ru": "После `first = num` строка `second = first` копирует новое число, а не старое.",
            "en": "After `first = num` the line `second = first` copies the new number, not the old one."
          }
        ],
        "solution": [
          "7  →  7 > MIN  →  first = 7, second = 7",
          "3  →  3 > 7 false, 3 > 7 false",
          "9  →  9 > 7  →  first = 9, second = 9",
          "5  →  5 > 9 false, 5 > 9 false",
          {
            "he": "מודפס `9 9`. בסדר הנכון (`second = first` קודם) היה מודפס `9 7`.",
            "ru": "Печатается `9 9`. При правильном порядке (сначала `second = first`) было бы `9 7`.",
            "en": "`9 9` is printed. In the right order (`second = first` first) it would be `9 7`."
          }
        ]
      }
    ]
  }
};

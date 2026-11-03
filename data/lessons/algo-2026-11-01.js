/* Lesson data — format: see the comment at the top of data/lessons/math-2026-11-01.js.
   Every "what does it print" answer in this file was checked by compiling and running
   the Java code (javac/java 21) with the given input. */
window.LESSONS = window.LESSONS || {};
window.LESSONS['algo-2026-11-01'] = {
  id: 'algo-2026-11-01',
  subject: 'algo',
  date: '2026-11-01',
  title: { he: 'לולאות: צבירה, מנייה, while ומקסימום', ru: 'Циклы: сумма, счётчик, while и максимум', en: 'Loops: sums, counters, while and maximum' },
  summary: {
    he: 'סכומים עם `for`, מונה עם `counter++`, לולאת `while` עם דגל (קלט-דמה), תבנית למציאת מקסימום ו־`Integer.MIN_VALUE`, `break` ו־`continue`, וסכום ספרות של מספר בכל אורך.',
    ru: 'Суммы через `for`, счётчик `counter++`, цикл `while` с флагом (фиктивный ввод), шаблон поиска максимума и `Integer.MIN_VALUE`, `break` и `continue`, сумма цифр числа любой длины.',
    en: 'Sums with `for`, a counter with `counter++`, a `while` loop with a flag (dummy input), the maximum pattern and `Integer.MIN_VALUE`, `break` and `continue`, and the digit sum of a number of any length.'
  },

  timeline: [
    {"kind": "tip", "title": {"he": "לולאה אינסופית ולולאה שלא רצה", "ru": "Бесконечный цикл и цикл, который не запустится", "en": "An endless loop and a loop that never runs"}, "text": {"he": "שתי טעויות שצריך לבדוק בכל לולאה (דוגמה מהשיעור):\n• התנאי תמיד נכון: `for (int i = 0; i > -6; i++)` — 0, 1, 2… כולם גדולים מ-6-, והלולאה לא נגמרת. (בפועל היא נעצרת רק אחרי כ-2 מיליארד סיבובים, כש-`int` עובר את הגבול שלו.)\n• התנאי לא נכון כבר בפעם הראשונה: `for (int i = 0; i < -6; i++)` — 0 לא קטן מ-6-, אז הלולאה לא רצה אף פעם.", "ru": "Две ошибки, которые надо проверять в каждом цикле (пример с урока):\n• Условие всегда верно: `for (int i = 0; i > -6; i++)` — 0, 1, 2… все больше −6, и цикл не кончается. (На деле он остановится только примерно через 2 миллиарда проходов, когда `int` переполнится.)\n• Условие неверно уже в первый раз: `for (int i = 0; i < -6; i++)` — 0 не меньше −6, и цикл не выполнится ни разу.", "en": "Two mistakes to check in every loop (example from class):\n• The condition is always true: `for (int i = 0; i > -6; i++)` — 0, 1, 2… are all bigger than -6, and the loop does not end. (In practice it stops only after about 2 billion rounds, when the `int` overflows.)\n• The condition is false from the first check: `for (int i = 0; i < -6; i++)` — 0 is not less than -6, so the loop never runs."}, "math": ["for (int i = 0; i > -6; i++)   // almost endless", "for (int i = 0; i < -6; i++)   // runs 0 times"]},
    { kind: 'talk',
      title: { he: 'תרגילי סכום מאתר הקורס', ru: 'Задачи на сумму с сайта курса', en: 'Sum exercises from the course site' },
      text: {
        he: 'השיעור התחיל בתרגילים על לולאת `for` מהקובץ באתר הקורס:\n• סכום כל המספרים מ-1 עד 10, ומ-30 עד 50 — להדפיס את המספרים, ובסוף את הסכום בשורה חדשה.\n• סכום המספרים השלמים מ-200 עד 300 — להדפיס רק את הסכום.\n• לקלוט 100 שלשות של מספרים, להדפיס את הממוצע של כל שלשה ולבדוק אם המספר האמצעי שווה לממוצע ("כן" / "לא").\nהרעיון של צבירה: משתנה `sum` מתחיל מ-0 לפני הלולאה, ובכל סיבוב מוסיפים לו `sum += i;`.',
        ru: 'Урок начался с задач на цикл `for` из файла на сайте курса:\n• Сумма всех чисел от 1 до 10 и от 30 до 50 — напечатать сами числа, а в конце сумму на новой строке.\n• Сумма целых чисел от 200 до 300 — напечатать только сумму.\n• Прочитать 100 троек чисел, напечатать среднее каждой тройки и проверить, равно ли среднее число среднему значению («да» / «нет»).\nИдея накопления: переменная `sum` начинается с 0 до цикла, и в каждом проходе к ней прибавляют `sum += i;`.',
        en: 'The lesson started with `for` loop exercises from the file on the course site:\n• The sum of all numbers from 1 to 10, and from 30 to 50 — print the numbers, and at the end the sum on a new line.\n• The sum of the whole numbers from 200 to 300 — print only the sum.\n• Read 100 triples of numbers, print the average of each triple and check whether the middle number equals that average ("yes" / "no").\nThe idea of accumulating: a `sum` variable starts at 0 before the loop, and every round adds to it with `sum += i;`.'
      },
      math: ['int sum = 0;', 'for (int i = 1; i <= 10; i++) {', '    System.out.print(i + " ");', '    sum += i;', '}', 'System.out.println();', 'System.out.println(sum);   // 55'] },
    {"kind": "talk", "title": {"he": "טבלת מעקב", "ru": "Таблица отслеживания (טבלת מעקב)", "en": "Tracing table"}, "text": {"he": "כדי לראות מה הלולאה עושה, כותבים טבלה: עמודה לכל משתנה, שורה לכל סיבוב. לסכום 1 עד 10: `i = 1, sum = 1`; `i = 2, sum = 3`; `i = 3, sum = 6`… ובסוף `sum = 55`.\nההמלצה מהשיעור: מעקב חלקי — כמה סיבובים ראשונים, כי טבלה מלאה יכולה להיות ארוכה מאוד.", "ru": "Чтобы увидеть, что делает цикл, пишут таблицу: столбец на каждую переменную, строка на каждый проход. Для суммы 1..10: `i = 1, sum = 1`; `i = 2, sum = 3`; `i = 3, sum = 6`… и в конце `sum = 55`.\nСовет с урока: частичное отслеживание — несколько первых проходов, потому что полная таблица бывает очень длинной.", "en": "To see what a loop does, write a table: a column for each variable, a row for each round. For the sum 1..10: `i = 1, sum = 1`; `i = 2, sum = 3`; `i = 3, sum = 6`… and at the end `sum = 55`.\nThe advice from class: a partial trace — the first few rounds, because a full table can be very long."}, "math": ["i    sum", "1    0 + 1 = 1", "2    1 + 2 = 3", "3    3 + 3 = 6", "…", "10   45 + 10 = 55"]},
    {"kind": "tip", "title": {"he": "`i < 51` כדי לכלול את 50", "ru": "`i < 51`, чтобы попало и 50", "en": "`i < 51` to include 50"}, "text": {"he": "לסכום 30 עד 50 כותבים `i <= 50` או `i < 51` — שניהם כוללים את 50 עצמו. `i < 50` עוצר ב-49. התוצאה: `840`.", "ru": "Для суммы 30..50 пишут `i <= 50` или `i < 51` — оба варианта включают само 50. `i < 50` остановится на 49. Результат: `840`.", "en": "For the sum 30..50 write `i <= 50` or `i < 51` — both include 50 itself. `i < 50` stops at 49. The result: `840`."}, "math": ["for (int i = 30; i < 51; i++)   // 30 … 50", "    sum += i;", "// sum = 840"]},
    {"kind": "tip", "title": {"he": "בינה מלאכותית: להסביר את הדרך, לא לפתור", "ru": "ИИ: объяснить путь, а не решить", "en": "AI: explain the way, not solve it"}, "text": {"he": "העצה מהשיעור: כשנעזרים ב-AI, מבקשים שיסביר איך מגיעים לפתרון — לא שיכתוב את הקוד. את הקוד כותבים בעצמכם.", "ru": "Совет с урока: когда помогаешься ИИ, проси объяснить, как прийти к решению, а не написать код. Код пишешь сам.", "en": "The advice from class: when you use AI, ask it to explain how to reach the solution, not to write the code. You write the code yourself."}},
    { kind: 'board',
      title: { he: 'מונה: מועמדים בגיל 22–40', ru: 'Счётчик: кандидаты 22–40 лет', en: 'A counter: applicants aged 22–40' },
      text: {
        he: 'התרגיל: לקלוט גילאים של 30 מועמדים לעבודה במפעל ולהדפיס כמה מהם בגיל 22 עד 40. על המסך: משתנה `counter` מתחיל מ-0, ובכל פעם שהתנאי מתקיים — `counter++`. את התוצאה מדפיסים אחרי הלולאה.',
        ru: 'Задача: прочитать возраст 30 кандидатов на работу на заводе и напечатать, сколько из них в возрасте от 22 до 40. На экране: переменная `counter` начинается с 0, и каждый раз, когда условие выполнено, — `counter++`. Результат печатают после цикла.',
        en: 'The exercise: read the ages of 30 job applicants at a factory and print how many are aged 22 to 40. On screen: a `counter` variable starts at 0, and each time the condition holds — `counter++`. The result is printed after the loop.'
      },
      math: ['Scanner input = new Scanner(System.in);', 'int counter = 0;', 'int age;', 'for (int i = 0; i < 30; i++) {', '    age = input.nextInt();', '    if (age >= 22 && age <= 40) {', '        counter++;', '    }', '}', 'System.out.println(counter);'] },
    {"kind": "tip", "title": {"he": "ב-Java אי אפשר לכתוב `22 < x < 40`", "ru": "В Java нельзя писать `22 < x < 40`", "en": "Java does not allow `22 < x < 40`"}, "text": {"he": "כמו במתמטיקה זה נראה טבעי, אבל ב-Java זו שגיאה. כותבים שני תנאים עם \"וגם\": `age >= 22 && age <= 40`. (ב-Python דווקא מותר.)", "ru": "Как в математике выглядит естественно, но в Java это ошибка. Пишут два условия через «и»: `age >= 22 && age <= 40`. (В Python так как раз можно.)", "en": "It looks natural, like in math, but in Java it is an error. Write two conditions joined by \"and\": `age >= 22 && age <= 40`. (Python does allow it.)"}, "math": ["if (22 <= age <= 40)            // error", "if (age >= 22 && age <= 40)     // correct"]},
    { kind: 'talk',
      title: { he: 'עוד תרגילי מנייה', ru: 'Ещё задачи на подсчёт', en: 'More counting exercises' },
      text: {
        he: 'מאותו קובץ:\n• ציונים של 10 תלמידים: כמה ציונים בין 90 ל-100, ומה הממוצע של הציונים שבין 60 ל-100.\n• 50 מספרים שלמים: כמה חיוביים וכמה שליליים (שני מונים).\n• לכל המספרים מ-15 עד 34 להדפיס בשורה אחת: המקום הסידורי ברצף, את המספר בריבוע ואת השורש שלו (מעוגל ל-2 ספרות אחרי הנקודה).',
        ru: 'Из того же файла:\n• Оценки 10 учеников: сколько оценок от 90 до 100, и какое среднее у оценок от 60 до 100.\n• 50 целых чисел: сколько положительных и сколько отрицательных (два счётчика).\n• Для всех чисел от 15 до 34 напечатать в одной строке: порядковое место в ряду, квадрат числа и его корень (округлённый до 2 знаков после точки).',
        en: 'From the same file:\n• Grades of 10 students: how many grades are between 90 and 100, and the average of the grades between 60 and 100.\n• 50 whole numbers: how many are positive and how many negative (two counters).\n• For all numbers from 15 to 34 print on one line: the position in the sequence, the number squared and its square root (rounded to 2 decimal places).'
      } },
    { kind: 'board',
      title: { he: 'כשלא יודעים כמה: לולאת while ודגל', ru: 'Когда количество неизвестно: while и флаг', en: 'When the count is unknown: while and a flag' },
      text: {
        he: 'ב-`for` מספר הסיבובים ידוע מראש. כשלא יודעים כמה ציונים יהיו, משתמשים ב-`while` ובדגל.\nמהלוח: דגל — קלט-דמה שתפקידו להגיד שהלולאה מסתיימת. כאן הדגל הוא `-1`: קולטים ציון ראשון לפני הלולאה, וכל עוד הוא לא הדגל — צוברים, סופרים וקולטים את הבא.\nעל המסך: קלט 80, 90, 94, -1 → `Average grade: 88.0`.',
        ru: 'В `for` число проходов известно заранее. Когда неизвестно, сколько будет оценок, используют `while` и флаг.\nС доски: флаг — фиктивный ввод, задача которого сказать, что цикл заканчивается. Здесь флаг — `-1`: первую оценку читаем до цикла, и пока это не флаг — копим сумму, считаем и читаем следующую.\nНа экране: ввод 80, 90, 94, -1 → `Average grade: 88.0`.',
        en: 'In a `for` loop the number of rounds is known in advance. When we do not know how many grades there will be, we use `while` and a flag.\nFrom the board: a flag is dummy input whose job is to say that the loop ends. Here the flag is `-1`: read the first grade before the loop, and as long as it is not the flag — add it up, count it and read the next one.\nOn screen: input 80, 90, 94, -1 → `Average grade: 88.0`.'
      },
      math: ['int sum = 0;', 'int count = 0;', 'int grade = input.nextInt();', 'while (grade != -1) {', '    sum += grade;', '    count++;          // counting the grades', '    grade = input.nextInt();', '}', 'double average = (double) sum / count;', 'System.out.println("Average grade: " + average);'] },
    {"kind": "board", "title": {"he": "מעלית: צוברים עד שהמשקל עובר 500", "ru": "Лифт: копим, пока вес не превысит 500", "en": "An elevator: add up until the weight passes 500"}, "text": {"he": "מהשקופית: המשקל המרבי במעלית הוא 500 ק״ג. לא יודעים כמה חבילות יהיו, ולכן `while`: כל עוד הסכום לא עבר 500, קולטים חבילה ומוסיפים.\nהדוגמה מהשיעור: 120, 250, 90, 140 — הסכום מגיע ל-600, עובר את 500, והלולאה נעצרת.", "ru": "Со слайда: максимальный вес в лифте 500 кг. Сколько будет посылок, неизвестно, поэтому `while`: пока сумма не больше 500, читаем посылку и прибавляем.\nПример с урока: 120, 250, 90, 140 — сумма становится 600, это больше 500, и цикл останавливается.", "en": "From the slide: the elevator holds at most 500 kg. We do not know how many packages there will be, so `while`: as long as the sum is not over 500, read a package and add it.\nThe example from class: 120, 250, 90, 140 — the sum reaches 600, passes 500, and the loop stops."}, "math": ["int sum = 0;", "while (sum <= 500) {", "    int pack = input.nextInt();", "    sum += pack;", "}", "System.out.println(sum);   // 600"]},
    {"kind": "tip", "title": {"he": "את הדגל קולטים לפני הלולאה ובסופה", "ru": "Флаг читают до цикла и в конце прохода", "en": "Read the flag before the loop and at its end"}, "text": {"he": "אם קולטים את הציון בתחילת הסיבוב, ה-`-1` נכנס לסכום ולמונה. לכן: קליטה ראשונה לפני `while`, וקליטה חוזרת כשורה אחרונה בתוך הלולאה — אחרי `sum +=` ו-`count++`. כך התנאי בודק כל ציון חדש לפני שהוא נספר.", "ru": "Если читать оценку в начале прохода, `-1` попадёт в сумму и в счётчик. Поэтому: первое чтение до `while`, а повторное — последней строкой внутри цикла, после `sum +=` и `count++`. Так условие проверяет каждую новую оценку до того, как её посчитать.", "en": "If you read the grade at the start of the round, the `-1` gets into the sum and the counter. So: the first read goes before `while`, and the next read is the last line inside the loop, after `sum +=` and `count++`. That way the condition checks each new grade before it is counted."}, "math": ["// wrong: input 80, 90, -1  →  sum = 169, count = 3", "while (grade != -1) {", "    grade = input.nextInt();", "    sum += grade;", "    count++;", "}"]},
    { kind: 'board',
      title: { he: 'תבנית למציאת מספר מקסימלי', ru: 'Шаблон поиска максимума', en: 'The pattern for finding the maximum' },
      text: {
        he: 'מהלוח: נתונים ציונים של תלמיד במכללה. לא ידוע כמה ציונים, אבל רוצים למצוא את הגבוה.\nהמשתנה `max` מקבל ערך התחלתי נמוך מכל ציון אפשרי (כאן 0). הלולאה רצה כל עוד הציון תקין (0–100), ובכל סיבוב: אם הציון החדש גדול מ-`max` — הוא ה-`max` החדש. בתוך ה-`if` יש גם בדיקה שהציון תקין, כדי שהדגל לא ייכנס ל-`max`.\nעל הלוח הופיע גם: `&&` מקלידים עם `Shift+7`.',
        ru: 'С доски: даны оценки студента колледжа. Сколько их — неизвестно, но нужно найти самую высокую.\nПеременная `max` получает начальное значение ниже любой возможной оценки (здесь 0). Цикл идёт, пока оценка допустима (0–100), и в каждом проходе: если новая оценка больше `max`, она становится новым `max`. Внутри `if` есть и проверка, что оценка допустима, чтобы флаг не попал в `max`.\nЕщё на доске: `&&` набирается через `Shift+7`.',
        en: 'From the board: we are given a college student\'s grades. We do not know how many, but we want the highest.\nThe variable `max` starts below any possible grade (here 0). The loop runs while the grade is valid (0–100), and on each round: if the new grade is bigger than `max`, it becomes the new `max`. Inside the `if` there is also a check that the grade is valid, so the flag never gets into `max`.\nAlso on the board: `&&` is typed with `Shift+7`.'
      },
      math: ['int max = 0;', 'int grade = 0;', 'while (grade >= 0 && grade <= 100) {', '    grade = input.nextInt();', '    if (grade > max && grade <= 100)', '        max = grade;', '}'] },
    { kind: 'tip',
      title: { he: 'Integer.MIN_VALUE — המספר הנמוך ביותר', ru: 'Integer.MIN_VALUE — самое маленькое число', en: 'Integer.MIN_VALUE — the lowest number' },
      text: {
        he: 'מהלוח: `Integer.MIN_VALUE` הוא המספר הנמוך ביותר ש-`int` יכול להחזיק, ואפשר להשתמש בו כערך ההתחלתי של `max`. זה חשוב כשהמספרים יכולים להיות שליליים: אם כל המספרים שליליים ו-`max` מתחיל מ-0, התוכנית תדפיס 0 — מספר שבכלל לא הוקלד.',
        ru: 'С доски: `Integer.MIN_VALUE` — самое маленькое число, которое помещается в `int`, и его можно взять начальным значением `max`. Это важно, когда числа могут быть отрицательными: если все числа отрицательные, а `max` начинается с 0, программа напечатает 0 — число, которое вообще не вводили.',
        en: 'From the board: `Integer.MIN_VALUE` is the lowest number an `int` can hold, and it can be used as the starting value of `max`. This matters when numbers can be negative: if all the numbers are negative and `max` starts at 0, the program prints 0 — a number nobody typed.'
      },
      math: ['int max = Integer.MIN_VALUE;   // -2147483648'] },
    {"kind": "tip", "title": {"he": "ערך התחלתי למקסימום ולמינימום", "ru": "Начальное значение для максимума и минимума", "en": "Starting values for max and min"}, "text": {"he": "בתרגיל עם מספרים תלת-ספרתיים צריך גם מינימום. `max` מתחיל מהקטן ביותר האפשרי, ו-`min` מהגדול ביותר האפשרי:\n• תמיד עובד: `max = Integer.MIN_VALUE`, `min = Integer.MAX_VALUE`.\n• כשיודעים את הטווח (תלת-ספרתיים): `max = 100`, `min = 999`.\nאם `min` מתחיל מ-0, אף מספר תלת-ספרתי לא קטן ממנו, ויודפס 0.", "ru": "В задаче с трёхзначными числами нужен ещё и минимум. `max` начинается с самого маленького возможного, а `min` — с самого большого возможного:\n• Работает всегда: `max = Integer.MIN_VALUE`, `min = Integer.MAX_VALUE`.\n• Когда диапазон известен (трёхзначные): `max = 100`, `min = 999`.\nЕсли `min` начать с 0, ни одно трёхзначное число не будет меньше, и напечатается 0.", "en": "The three-digit exercise also needs a minimum. `max` starts at the smallest possible value, and `min` at the biggest possible value:\n• Always works: `max = Integer.MIN_VALUE`, `min = Integer.MAX_VALUE`.\n• When the range is known (three digits): `max = 100`, `min = 999`.\nIf `min` starts at 0, no three-digit number is smaller, and 0 is printed."}, "math": ["int max = 100;   // or Integer.MIN_VALUE", "int min = 999;   // or Integer.MAX_VALUE", "if (x > max) max = x;", "if (x < min) min = x;"]},
    { kind: 'talk',
      title: { he: 'תבניות מקסימום: תרגילים', ru: 'Шаблоны максимума: задачи', en: 'Maximum patterns: exercises' },
      text: {
        he: 'מהקובץ "תבניות אלגוריתמיות — תבניות מקסימום":\n1. לקלוט 45 מספרים ולהדפיס את הגדול ביותר.\n2. לקלוט 100 מספרים תלת-ספרתיים ולהדפיס את הגדול ביותר ואת הקטן ביותר.\n3. לקלוט 50 מספרים ולהדפיס את שני הגדולים ביותר (אם הגדול מופיע יותר מפעם אחת, הוא יודפס פעמיים).\n4. לקלוט 80 מספרים ולהדפיס את הגדול ביותר ואת מספר הפעמים שהוא מופיע.',
        ru: 'Из файла «תבניות אלגוריתמיות — תבניות מקסימום»:\n1. Прочитать 45 чисел и напечатать самое большое.\n2. Прочитать 100 трёхзначных чисел и напечатать самое большое и самое маленькое.\n3. Прочитать 50 чисел и напечатать два самых больших (если самое большое встречается больше одного раза, оно печатается дважды).\n4. Прочитать 80 чисел и напечатать самое большое и сколько раз оно встречается.',
        en: 'From the file "תבניות אלגוריתמיות — תבניות מקסימום":\n1. Read 45 numbers and print the largest.\n2. Read 100 three-digit numbers and print the largest and the smallest.\n3. Read 50 numbers and print the two largest (if the largest appears more than once, it is printed twice).\n4. Read 80 numbers and print the largest and how many times it appears.'
      } },
    {"kind": "board", "title": {"he": "שני הגדולים: first ו-second", "ru": "Два самых больших: first и second", "en": "The two largest: first and second"}, "text": {"he": "כדי למצוא את שני המספרים הגדולים צריך שני משתנים. כשמגיע מספר גדול מ-`first`, ה-`first` הישן יורד למקום השני — ולכן קודם `second = first`, ורק אחר כך `first = num`. אם המספר לא גדול מ-`first` אבל גדול מ-`second`, מעדכנים רק את `second`.\nמה קורה אם מחליפים את הסדר? `first` כבר השתנה, ושני המשתנים מקבלים אותו מספר.", "ru": "Чтобы найти два самых больших числа, нужны две переменные. Когда приходит число больше `first`, старый `first` спускается на второе место — поэтому сначала `second = first`, и только потом `first = num`. Если число не больше `first`, но больше `second`, обновляем только `second`.\nА если поменять порядок? `first` уже изменился, и обе переменные получат одно и то же число.", "en": "To find the two largest numbers you need two variables. When a number bigger than `first` arrives, the old `first` moves down to second place — so first `second = first`, and only then `first = num`. If the number is not bigger than `first` but is bigger than `second`, update only `second`.\nWhat if you swap the order? `first` has already changed, and both variables get the same number."}, "math": ["if (num > first) {", "    second = first;", "    first = num;", "} else if (num > second) {", "    second = num;", "}", "System.out.println(first + \" \" + second);"]},
    { kind: 'board',
      title: { he: 'while עד שמקלידים 2', ru: 'while до ввода 2', en: 'while until 2 is typed' },
      text: {
        he: 'התרגיל: קולטים מספרים, כמה שלא ידוע מראש; הקלט נגמר כשמקלידים 2. כל מספר שמתחלק ב-3 הופכים למספר הגדול ממנו פי 10, וכל מספר זוגי שלא מתחלק ב-3 — לחצי ממנו. מדפיסים כל מספר אחרי השינוי.\nעל המסך: 20 → 10, 36 → 360, 17 → 17 (17 לא מתחלק ב-3 ולא זוגי, אז הוא לא משתנה).',
        ru: 'Задача: читаем числа, сколько — заранее неизвестно; ввод заканчивается, когда вводят 2. Каждое число, делящееся на 3, превращаем в число в 10 раз больше, а каждое чётное, не делящееся на 3, — в его половину. Печатаем каждое число после изменения.\nНа экране: 20 → 10, 36 → 360, 17 → 17 (17 не делится на 3 и нечётное, поэтому не меняется).',
        en: 'The exercise: read numbers, how many is not known in advance; input ends when 2 is typed. Every number divisible by 3 becomes 10 times bigger, and every even number not divisible by 3 becomes half of itself. Print each number after the change.\nOn screen: 20 → 10, 36 → 360, 17 → 17 (17 is neither divisible by 3 nor even, so it does not change).'
      },
      math: ['System.out.println("Please enter numbers until 2:");', 'int num = input.nextInt();', 'while (num != 2) {', '    if (num % 3 == 0) {', '        num *= 10;', '    } else if (num % 2 == 0) {', '        num /= 2;', '    }', '    System.out.println(num);', '    num = input.nextInt();', '}'] },
    { kind: 'board',
      title: { he: 'עד 60 מספרים או עד שהסכום עובר 1200', ru: 'До 60 чисел или пока сумма не превысит 1200', en: 'Up to 60 numbers or until the sum passes 1200' },
      text: {
        he: 'מהלוח: קלטו מספרים מהמשתמש עד ש: או כמות המספרים תגיע ל-60, או סכום המספרים יעבור את ה-1200. הדפיסו את ממוצע המספרים שנקלטו.\nההסבר על הלוח: אי אפשר לעבור 60 מספרים, אבל מכיוון שיש תנאי נוסף — משתמשים ב-`while` עם שני תנאים.',
        ru: 'С доски: вводите числа, пока либо их количество не дойдёт до 60, либо сумма не превысит 1200. Напечатайте среднее введённых чисел.\nОбъяснение на доске: больше 60 чисел быть не может, но так как есть ещё одно условие — используем `while` с двумя условиями.',
        en: 'From the board: read numbers from the user until either the count reaches 60 or the sum passes 1200. Print the average of the numbers read.\nThe explanation on the board: there cannot be more than 60 numbers, but since there is another condition, we use `while` with two conditions.'
      },
      math: ['int count = 0;', 'int sum = 0;', 'while (count < 60 && sum <= 1200) {', '    int x = input.nextInt();', '    sum += x;', '    count++;', '}', 'double avg = (double) sum / count;'] },
    { kind: 'talk',
      title: { he: 'בקרת לולאות: break ו-continue', ru: 'Управление циклом: break и continue', en: 'Loop control: break and continue' },
      text: {
        he: '`break` — יוצא מהלולאה מיד. `continue` — מדלג על שאר הסיבוב הנוכחי ועובר לסיבוב הבא.\nהתרגילים מהקובץ (חלק ה׳): להדפיס 1 עד 10 ולעצור עם `break` כשמגיעים ל-6; 1 עד 15 ולעצור ב-10; `while(true)` מ-1 והלאה ולעצור ב-15; להדפיס 1 עד 10 ולדלג עם `continue` על 4 ועל 8; 1 עד 20 ולדלג על הזוגיים; 1 עד 10 ולדלג על האי-זוגיים; 1 עד 12, לדלג על 5 ולעצור ב-10.',
        ru: '`break` — сразу выходит из цикла. `continue` — пропускает остаток текущего прохода и переходит к следующему.\nЗадачи из файла (часть ה׳): напечатать 1–10 и остановиться через `break` на 6; 1–15 и остановиться на 10; `while(true)` от 1 и дальше, остановиться на 15; напечатать 1–10 и пропустить через `continue` 4 и 8; 1–20 и пропустить чётные; 1–10 и пропустить нечётные; 1–12, пропустить 5 и остановиться на 10.',
        en: '`break` leaves the loop immediately. `continue` skips the rest of the current round and goes on to the next one.\nThe exercises from the file (part ה׳): print 1 to 10 and stop with `break` at 6; 1 to 15 and stop at 10; `while(true)` from 1 onwards and stop at 15; print 1 to 10 and skip 4 and 8 with `continue`; 1 to 20 and skip the even numbers; 1 to 10 and skip the odd numbers; 1 to 12, skip 5 and stop at 10.'
      } },
    { kind: 'board',
      title: { he: 'continue: לדלג על 4 ו-8', ru: 'continue: пропустить 4 и 8', en: 'continue: skip 4 and 8' },
      text: {
        he: 'על המסך: כש-i שווה 4 או 8, `continue` מדלג על ה-`println`, והלולאה ממשיכה. הפלט: 1, 2, 3, 5, 6, 7, 9, 10.',
        ru: 'На экране: когда i равно 4 или 8, `continue` перепрыгивает через `println`, и цикл продолжается. Вывод: 1, 2, 3, 5, 6, 7, 9, 10.',
        en: 'On screen: when i is 4 or 8, `continue` jumps over the `println`, and the loop goes on. Output: 1, 2, 3, 5, 6, 7, 9, 10.'
      },
      math: ['for (int i = 1; i <= 10; i++) {', '    if (i == 4 || i == 8) {', '        continue;', '    }', '    System.out.println(i);', '}'] },
    { kind: 'board',
      title: { he: 'סכום ספרות של מספר באורך לא ידוע', ru: 'Сумма цифр числа неизвестной длины', en: 'The digit sum of a number of unknown length' },
      text: {
        he: 'בשיעור הקודם פירקו את 736 לספרות בשלוש שורות קבועות. עם `while` זה עובד לכל אורך: כל עוד נשארו ספרות, לוקחים את האחרונה (`% 10`) ומוחקים אותה (`/= 10`). על הלוח התנאי היה `num != 0`, ועל המסך `number > 0`.',
        ru: 'Раньше 736 разбирали на цифры тремя фиксированными строками. С `while` это работает для любой длины: пока остались цифры, берём последнюю (`% 10`) и стираем её (`/= 10`). На доске условие было `num != 0`, а на экране `number > 0`.',
        en: 'Earlier, 736 was split into digits with three fixed lines. With `while` it works for any length: while digits are left, take the last one (`% 10`) and remove it (`/= 10`). On the board the condition was `num != 0`, on screen `number > 0`.'
      },
      math: ['System.out.println("Please enter a number: ");', 'int number = input.nextInt();', 'int digSum = 0;', 'while (number > 0) {', '    digSum += (number % 10);', '    number /= 10;', '}', 'System.out.println("The digit sum is " + digSum);'] },
    { kind: 'tip',
      title: { he: 'הערה מהלוח: ממוצע עשרוני', ru: 'Заметка с доски: дробное среднее', en: 'A note from the board: a decimal average' },
      text: {
        he: 'כמו בשיעורים הקודמים: `double avg = (double) sum / 3;` — ה-`(double)` לפני `sum`, אחרת החילוק בשלמים זורק את השבר.',
        ru: 'Как и на прошлых уроках: `double avg = (double) sum / 3;` — `(double)` перед `sum`, иначе целочисленное деление отбросит дробь.',
        en: 'As in earlier lessons: `double avg = (double) sum / 3;` — the `(double)` goes before `sum`, otherwise integer division drops the fraction.'
      } },
    { kind: 'faq',
      q: { he: 'מתי `for` ומתי `while`?', ru: 'Когда `for`, а когда `while`?', en: 'When `for` and when `while`?' },
      a: {
        he: '`for` — כשיודעים מראש כמה סיבובים (30 מועמדים, המספרים 1 עד 10). `while` — כשהלולאה נגמרת לפי תנאי ולא לפי מספר: דגל כמו `-1`, הקלדה של 2, סכום שעובר 1200, או מספר שנגמרו לו הספרות.',
        ru: '`for` — когда заранее известно число проходов (30 кандидатов, числа от 1 до 10). `while` — когда цикл заканчивается по условию, а не по количеству: флаг вроде `-1`, ввод 2, сумма больше 1200 или число, у которого кончились цифры.',
        en: '`for` — when you know the number of rounds in advance (30 applicants, the numbers 1 to 10). `while` — when the loop ends by a condition rather than a count: a flag like `-1`, typing 2, a sum passing 1200, or a number that has run out of digits.'
      } }
  ],

  review: [
    { title: { he: 'צבירה (סכום)', ru: 'Накопление (сумма)', en: 'Accumulating (sum)' },
      text: { he: '`int sum = 0;` לפני הלולאה, `sum += x;` בתוכה, הדפסה אחריה.', ru: '`int sum = 0;` до цикла, `sum += x;` внутри, печать после.', en: '`int sum = 0;` before the loop, `sum += x;` inside, print after.' } },
    { title: { he: 'מנייה (מונה)', ru: 'Подсчёт (счётчик)', en: 'Counting (counter)' },
      text: { he: '`int counter = 0;` ובתוך `if` — `counter++;`.', ru: '`int counter = 0;`, а внутри `if` — `counter++;`.', en: '`int counter = 0;` and inside an `if` — `counter++;`.' } },
    { title: { he: 'while ודגל', ru: 'while и флаг', en: 'while and a flag' },
      text: { he: 'קולטים לפני הלולאה, ובסוף כל סיבוב קולטים שוב. הדגל (למשל `-1`) לא נכנס לחישוב.', ru: 'Читаем до цикла и снова в конце каждого прохода. Флаг (например, `-1`) в расчёт не входит.', en: 'Read before the loop and again at the end of each round. The flag (e.g. `-1`) is not part of the calculation.' } },
    { title: { he: 'מקסימום', ru: 'Максимум', en: 'Maximum' },
      text: { he: '`int max = Integer.MIN_VALUE;` ואז `if (x > max) max = x;`.', ru: '`int max = Integer.MIN_VALUE;`, затем `if (x > max) max = x;`.', en: '`int max = Integer.MIN_VALUE;` then `if (x > max) max = x;`.' } },
    {"title": {"he": "טבלת מעקב", "ru": "Таблица отслеживания", "en": "Tracing table"}, "text": {"he": "עמודה לכל משתנה, שורה לכל סיבוב. מספיק כמה סיבובים ראשונים.", "ru": "Столбец на переменную, строка на проход. Хватит нескольких первых проходов.", "en": "A column per variable, a row per round. The first few rounds are enough."}},
    {"title": {"he": "שני הגדולים", "ru": "Два самых больших", "en": "The two largest"}, "text": {"he": "קודם `second = first`, אחר כך `first = num`.", "ru": "Сначала `second = first`, потом `first = num`.", "en": "First `second = first`, then `first = num`."}},
    { title: { he: 'break / continue', ru: 'break / continue', en: 'break / continue' },
      text: { he: '`break` — יוצאים מהלולאה. `continue` — מדלגים לסיבוב הבא.', ru: '`break` — выходим из цикла. `continue` — сразу к следующему проходу.', en: '`break` — leave the loop. `continue` — jump to the next round.' } },
    { title: { he: 'ספרות עם while', ru: 'Цифры через while', en: 'Digits with while' },
      text: { he: '`while (n > 0) { s += n % 10; n /= 10; }`', ru: '`while (n > 0) { s += n % 10; n /= 10; }`', en: '`while (n > 0) { s += n % 10; n /= 10; }`' } },
    { title: { he: 'ממוצע', ru: 'Среднее', en: 'Average' },
      text: { he: '`(double) sum / count` — ולא `(double) (sum / count)`.', ru: '`(double) sum / count` — а не `(double) (sum / count)`.', en: '`(double) sum / count` — not `(double) (sum / count)`.' } }
  ],

  tasks: {
    groups: {
      'sum': { he: 'סכומים עם for', ru: 'Суммы через for', en: 'Sums with for' },
      'while': { he: 'מונה, while ודגל', ru: 'Счётчик, while и флаг', en: 'Counter, while and flag' },
      'max': { he: 'תבנית מקסימום', ru: 'Шаблон максимума', en: 'The maximum pattern' },
      'ctrl': { he: 'break ו-continue', ru: 'break и continue', en: 'break and continue' }
    },
    teacher: [
      { id: 'p1', group: 'sum', label: '1–10', kind: 'number',
        text: { he: 'סכום כל המספרים מ-1 עד 10. מה יודפס בשורה האחרונה?\n`int sum = 0;`\n`for (int i = 1; i <= 10; i++) {`\n`    System.out.print(i + " ");`\n`    sum += i;`\n`}`\n`System.out.println();`\n`System.out.println(sum);`', ru: 'Сумма всех чисел от 1 до 10. Что будет в последней строке?\n`int sum = 0;`\n`for (int i = 1; i <= 10; i++) {`\n`    System.out.print(i + " ");`\n`    sum += i;`\n`}`\n`System.out.println();`\n`System.out.println(sum);`', en: 'The sum of all numbers from 1 to 10. What is on the last line?\n`int sum = 0;`\n`for (int i = 1; i <= 10; i++) {`\n`    System.out.print(i + " ");`\n`    sum += i;`\n`}`\n`System.out.println();`\n`System.out.println(sum);`' },
        answer: { value: '55' },
        hints: [
          { he: 'עקבו אחרי `sum` אחרי כל סיבוב.', ru: 'Следи за `sum` после каждого прохода.', en: 'Track `sum` after every round.' },
          { he: 'רוצים לראות איך `sum` גדל? הוסיפו בתוך הלולאה `System.out.println(i + " " + sum);` והריצו.', ru: 'Хочешь увидеть, как растёт `sum`? Добавь внутрь цикла `System.out.println(i + " " + sum);` и запусти.', en: 'Want to see how `sum` grows? Add `System.out.println(i + " " + sum);` inside the loop and run it.' }
        ],
        solution: ['i = 1   →  sum = 1', 'i = 2   →  sum = 3', 'i = 3   →  sum = 6', 'i = 4   →  sum = 10', 'i = 5   →  sum = 15', 'i = 6   →  sum = 21', 'i = 7   →  sum = 28', 'i = 8   →  sum = 36', 'i = 9   →  sum = 45', 'i = 10  →  sum = 55', { he: 'שורה 1: 1 2 3 ... 10, שורה 2: 55', ru: 'Строка 1: 1 2 3 ... 10, строка 2: 55', en: 'Line 1: 1 2 3 ... 10, line 2: 55' }] },
      { id: 'p2', group: 'sum', label: '30–50', kind: 'number',
        text: { he: 'התוכנית מחשבת את הסכום של כל המספרים מ-30 עד 50 (כולל). כתבו אותה, הריצו — מה היא מדפיסה?\n`int sum = 0;`\n`for (int i = 30; i <= 50; i++) {`\n`    sum += i;`\n`}`\n`System.out.println(sum);`', ru: 'Программа считает сумму всех чисел от 30 до 50 (включительно). Набери её и запусти — что она напечатает?\n`int sum = 0;`\n`for (int i = 30; i <= 50; i++) {`\n`    sum += i;`\n`}`\n`System.out.println(sum);`', en: 'The program adds up all numbers from 30 to 50 (inclusive). Type it in and run it — what does it print?\n`int sum = 0;`\n`for (int i = 30; i <= 50; i++) {`\n`    sum += i;`\n`}`\n`System.out.println(sum);`' },
        answer: { value: '840' },
        hints: [
          { he: 'הלולאה מתחילה ב-`i = 30` ונעצרת אחרי `i = 50` — גם 50 נכנס לסכום (`<=`).', ru: 'Цикл начинается с `i = 30` и заканчивается после `i = 50` — 50 тоже входит в сумму (`<=`).', en: 'The loop starts at `i = 30` and stops after `i = 50` — 50 is added too (`<=`).' },
          { he: 'כדי לבדוק את עצמכם, הוסיפו בתוך הלולאה `System.out.println(i + " " + sum);`: השורה האחרונה תראה את הסכום הסופי.', ru: 'Чтобы проверить себя, добавь внутрь цикла `System.out.println(i + " " + sum);`: последняя строка покажет итоговую сумму.', en: 'To check yourself, add `System.out.println(i + " " + sum);` inside the loop: the last line shows the final sum.' }
        ],
        solution: ['i = 30  →  sum = 30', 'i = 31  →  sum = 61', 'i = 32  →  sum = 93', '...', 'i = 50  →  sum = 840   (21 rounds)', { he: 'מודפס: 840', ru: 'Печатается: 840', en: 'Printed: 840' }] },
      { id: 'p3', group: 'sum', label: '200–300', kind: 'number',
        text: { he: 'כתבו תוכנית שמחשבת בלולאת `for` את סכום המספרים השלמים מ-200 עד 300 (כולל) ומדפיסה רק את הסכום עם `System.out.println`. מה היא מדפיסה?', ru: 'Напиши программу, которая циклом `for` считает сумму целых чисел от 200 до 300 (включительно) и печатает только сумму через `System.out.println`. Что она напечатает?', en: 'Write a program that uses a `for` loop to add up the whole numbers from 200 to 300 (inclusive) and prints only the sum with `System.out.println`. What does it print?' },
        answer: { value: '25250' },
        hints: [
          { he: 'כמו בתוכנית 30–50: `int sum = 0;` לפני הלולאה, ובתוכה `sum += i;`.', ru: 'Как в программе 30–50: `int sum = 0;` до цикла, а внутри `sum += i;`.', en: 'Like the 30–50 program: `int sum = 0;` before the loop, and `sum += i;` inside.' },
          { he: 'הלולאה: `for (int i = 200; i <= 300; i++)`. את `println` שמים אחרי הסוגר `}` — כדי שיודפס רק הסכום הסופי.', ru: 'Цикл: `for (int i = 200; i <= 300; i++)`. `println` ставим после скобки `}` — чтобы напечаталась только итоговая сумма.', en: 'The loop: `for (int i = 200; i <= 300; i++)`. Put `println` after the closing `}` so that only the final sum is printed.' }
        ],
        solution: ['int sum = 0;', 'for (int i = 200; i <= 300; i++) {', '    sum += i;', '}', 'System.out.println(sum);', { he: 'הלולאה רצה 101 סיבובים (200, 201, ..., 300).', ru: 'Цикл делает 101 проход (200, 201, ..., 300).', en: 'The loop makes 101 rounds (200, 201, ..., 300).' }, { he: 'מודפס: 25250', ru: 'Печатается: 25250', en: 'Printed: 25250' }] },
      { id: 'p4', group: 'while', label: { he: 'גיל 22–40', ru: 'Возраст 22–40', en: 'Age 22–40' }, kind: 'number',
        text: { he: 'תוכנית המונה מהשיעור, אבל עם 6 מועמדים (`i < 6`) במקום 30. הקלט: 19, 22, 35, 40, 41, 30. מה יודפס?\n`if (age >= 22 && age <= 40) counter++;`', ru: 'Программа-счётчик с урока, но для 6 кандидатов (`i < 6`) вместо 30. Ввод: 19, 22, 35, 40, 41, 30. Что будет напечатано?\n`if (age >= 22 && age <= 40) counter++;`', en: 'The counter program from the lesson, but with 6 applicants (`i < 6`) instead of 30. Input: 19, 22, 35, 40, 41, 30. What is printed?\n`if (age >= 22 && age <= 40) counter++;`' },
        answer: { value: '4' },
        hints: [
          { he: 'בדקו כל גיל: האם הוא בין 22 ל-40, כולל הקצוות?', ru: 'Проверь каждый возраст: от 22 до 40, включая края?', en: 'Check each age: is it between 22 and 40, including the ends?' }
        ],
        solution: ['19  →  19 >= 22 false  →  counter = 0', '22  →  true && true  →  counter = 1', '35  →  counter = 2', '40  →  40 <= 40 true  →  counter = 3', '41  →  41 <= 40 false  →  counter = 3', '30  →  counter = 4', { he: 'מודפס 4', ru: 'Печатается 4', en: '4 is printed' }] },
      { id: 'p5', group: 'while', label: { he: 'ממוצע עם דגל', ru: 'Среднее с флагом', en: 'Average with a flag' }, kind: 'number',
        text: { he: 'תוכנית הממוצע עם הדגל `-1` מהמסך. הקלט: 80, 90, 94, -1. מה הממוצע שיודפס?', ru: 'Программа среднего с флагом `-1` с экрана. Ввод: 80, 90, 94, -1. Какое среднее будет напечатано?', en: 'The average program with the flag `-1` from the screen. Input: 80, 90, 94, -1. What average is printed?' },
        answer: { value: '88' },
        hints: [
          { he: 'ה-`-1` הוא דגל: הוא לא נכנס לסכום ולא נספר.', ru: '`-1` — флаг: он не входит в сумму и не считается.', en: 'The `-1` is a flag: it is not added and not counted.' },
          { he: 'סכום 3 הציונים חלקי 3.', ru: 'Сумма 3 оценок, делённая на 3.', en: 'The sum of the 3 grades divided by 3.' }
        ],
        solution: ['grade = 80  →  sum = 80,  count = 1', 'grade = 90  →  sum = 170, count = 2', 'grade = 94  →  sum = 264, count = 3', 'grade = -1  →  -1 != -1 false  →  exit', '(double) 264 / 3 = 88.0', { he: 'מודפס: Average grade: 88.0', ru: 'Печатается: Average grade: 88.0', en: 'Printed: Average grade: 88.0' }] },
      { id: 'p6', group: 'while', label: { he: 'עד 2', ru: 'До 2', en: 'Until 2' }, kind: 'text',
        text: { he: 'התוכנית "עד שמקלידים 2" מהמסך (מתחלק ב-3 → כפול 10, זוגי → חצי). הקלט: 20, 36, 17, 2. מה יודפס? (כתבו את השורות עם רווח ביניהן)', ru: 'Программа «до ввода 2» с экрана (делится на 3 → ×10, чётное → половина). Ввод: 20, 36, 17, 2. Что будет напечатано? (напиши строки через пробел)', en: 'The "until 2 is typed" program from the screen (divisible by 3 → ×10, even → half). Input: 20, 36, 17, 2. What is printed? (write the lines separated by spaces)' },
        answer: { accept: ['10 360 17'] },
        hints: [
          { he: 'לכל מספר: קודם בודקים `% 3`, ורק אם לא — בודקים `% 2`.', ru: 'Для каждого числа: сначала проверяем `% 3`, и только если нет — `% 2`.', en: 'For each number: first check `% 3`, and only if not — check `% 2`.' },
          { he: '36 מתחלק גם ב-3 וגם ב-2. איזה ענף מתבצע?', ru: '36 делится и на 3, и на 2. Какая ветка выполнится?', en: '36 is divisible by both 3 and 2. Which branch runs?' }
        ],
        solution: ['20: 20 % 3 = 2 → no;  20 % 2 = 0 → 20 / 2 = 10  →  print 10', '36: 36 % 3 = 0 → 36 * 10 = 360  →  print 360  (else if skipped)', '17: 17 % 3 = 2 → no;  17 % 2 = 1 → no  →  print 17', '2: 2 != 2 → false  →  exit', { he: 'תשובה: 10 360 17', ru: 'Ответ: 10 360 17', en: 'Answer: 10 360 17' }] },
      { id: 'p7', group: 'while', label: { he: '60 או 1200', ru: '60 или 1200', en: '60 or 1200' }, kind: 'number',
        text: { he: 'עד 60 מספרים או עד שהסכום עובר 1200. הקלט: 500, 400, 600, ... מה הממוצע שיודפס?\n`while (count < 60 && sum <= 1200) {`\n`    int x = input.nextInt();`\n`    sum += x;`\n`    count++;`\n`}`\n`double avg = (double) sum / count;`', ru: 'До 60 чисел или пока сумма не превысит 1200. Ввод: 500, 400, 600, ... Какое среднее будет напечатано?\n`while (count < 60 && sum <= 1200) {`\n`    int x = input.nextInt();`\n`    sum += x;`\n`    count++;`\n`}`\n`double avg = (double) sum / count;`', en: 'Up to 60 numbers or until the sum passes 1200. Input: 500, 400, 600, ... What average is printed?\n`while (count < 60 && sum <= 1200) {`\n`    int x = input.nextInt();`\n`    sum += x;`\n`    count++;`\n`}`\n`double avg = (double) sum / count;`' },
        answer: { value: '500' },
        hints: [
          { he: 'בדקו את התנאי לפני כל סיבוב. מתי `sum <= 1200` הופך ל-`false`?', ru: 'Проверяй условие перед каждым проходом. Когда `sum <= 1200` станет `false`?', en: 'Check the condition before each round. When does `sum <= 1200` become `false`?' }
        ],
        solution: ['count = 0, sum = 0  →  true  →  x = 500, sum = 500, count = 1', 'sum = 500 <= 1200  →  x = 400, sum = 900, count = 2', 'sum = 900 <= 1200  →  x = 600, sum = 1500, count = 3', 'sum = 1500 <= 1200  →  false  →  exit', '(double) 1500 / 3 = 500.0', { he: 'תשובה: 500.0', ru: 'Ответ: 500.0', en: 'Answer: 500.0' }] },
      { id: 'p8', group: 'while', label: { he: 'סכום ספרות', ru: 'Сумма цифр', en: 'Digit sum' }, kind: 'number',
        text: { he: 'תוכנית סכום הספרות מהמסך. הקלט: 4071. מה יהיה `digSum`?\n`while (number > 0) {`\n`    digSum += (number % 10);`\n`    number /= 10;`\n`}`', ru: 'Программа суммы цифр с экрана. Ввод: 4071. Чему будет равен `digSum`?\n`while (number > 0) {`\n`    digSum += (number % 10);`\n`    number /= 10;`\n`}`', en: 'The digit sum program from the screen. Input: 4071. What will `digSum` be?\n`while (number > 0) {`\n`    digSum += (number % 10);`\n`    number /= 10;`\n`}`' },
        answer: { value: '12' },
        hints: [
          { he: 'בכל סיבוב: הספרה האחרונה נכנסת לסכום, ו-`number` מתקצר בספרה.', ru: 'В каждом проходе последняя цифра идёт в сумму, а `number` становится на цифру короче.', en: 'Each round: the last digit goes into the sum, and `number` gets one digit shorter.' }
        ],
        solution: ['number = 4071  →  digSum = 1,   number = 407', 'number = 407   →  digSum = 8,   number = 40', 'number = 40    →  digSum = 8,   number = 4', 'number = 4     →  digSum = 12,  number = 0', '0 > 0  →  false  →  exit', { he: 'מודפס: The digit sum is 12', ru: 'Печатается: The digit sum is 12', en: 'Printed: The digit sum is 12' }] },
      { id: 'p9', group: 'while', label: { he: 'ספירת ספרות', ru: 'Подсчёт цифр', en: 'Counting digits' }, kind: 'number',
        text: { he: 'תרגיל מהקובץ: `int num = 123;` — השתמשו ב-`while` כדי לספור כמה ספרות יש במספר. מה יודפס?\n`int count = 0;`\n`while (num != 0) {`\n`    count++;`\n`    num /= 10;`\n`}`\n`System.out.println(count);`', ru: 'Задача из файла: `int num = 123;` — с помощью `while` посчитать, сколько цифр в числе. Что будет напечатано?\n`int count = 0;`\n`while (num != 0) {`\n`    count++;`\n`    num /= 10;`\n`}`\n`System.out.println(count);`', en: 'An exercise from the file: `int num = 123;` — use `while` to count how many digits the number has. What is printed?\n`int count = 0;`\n`while (num != 0) {`\n`    count++;`\n`    num /= 10;`\n`}`\n`System.out.println(count);`' },
        answer: { value: '3' },
        hints: [{ he: 'כמה פעמים אפשר לחלק את 123 ב-10 עד שמגיעים ל-0?', ru: 'Сколько раз можно делить 123 на 10, пока не получится 0?', en: 'How many times can you divide 123 by 10 until you reach 0?' }],
        solution: ['num = 123  →  count = 1,  num = 12', 'num = 12   →  count = 2,  num = 1', 'num = 1    →  count = 3,  num = 0', '0 != 0  →  false  →  exit', { he: 'מודפס 3', ru: 'Печатается 3', en: '3 is printed' }] },
      { id: 'p10', group: 'max', label: { he: 'הציון הגבוה', ru: 'Высшая оценка', en: 'Highest grade' }, kind: 'number',
        text: { he: 'תבנית המקסימום מהלוח. הקלט: 70, 95, 88, -1. מה יהיה `max` בסוף?\n`int max = 0;`\n`int grade = 0;`\n`while (grade >= 0 && grade <= 100) {`\n`    grade = input.nextInt();`\n`    if (grade > max && grade <= 100)`\n`        max = grade;`\n`}`', ru: 'Шаблон максимума с доски. Ввод: 70, 95, 88, -1. Чему будет равен `max` в конце?\n`int max = 0;`\n`int grade = 0;`\n`while (grade >= 0 && grade <= 100) {`\n`    grade = input.nextInt();`\n`    if (grade > max && grade <= 100)`\n`        max = grade;`\n`}`', en: 'The maximum pattern from the board. Input: 70, 95, 88, -1. What is `max` at the end?\n`int max = 0;`\n`int grade = 0;`\n`while (grade >= 0 && grade <= 100) {`\n`    grade = input.nextInt();`\n`    if (grade > max && grade <= 100)`\n`        max = grade;`\n`}`' },
        answer: { value: '95' },
        hints: [
          { he: 'בכל סיבוב: האם הציון החדש גדול מ-`max` הנוכחי?', ru: 'В каждом проходе: новая оценка больше текущего `max`?', en: 'Each round: is the new grade bigger than the current `max`?' }
        ],
        solution: ['grade = 70  →  70 > 0  →  max = 70', 'grade = 95  →  95 > 70  →  max = 95', 'grade = 88  →  88 > 95 false  →  max = 95', 'grade = -1  →  -1 > 95 false;  -1 >= 0 false  →  exit', { he: 'תשובה: 95', ru: 'Ответ: 95', en: 'Answer: 95' }] },
      { id: 'p11', group: 'max', label: 'MIN_VALUE', kind: 'number',
        text: { he: 'תרגיל 1 מתבניות מקסימום, אבל עם 5 מספרים. הקלט: -7, -3, -12, -5, -9. מה יודפס?\n`int max = Integer.MIN_VALUE;`\n`for (int i = 0; i < 5; i++) {`\n`    int x = input.nextInt();`\n`    if (x > max) max = x;`\n`}`\n`System.out.println(max);`', ru: 'Задача 1 из шаблонов максимума, но для 5 чисел. Ввод: -7, -3, -12, -5, -9. Что будет напечатано?\n`int max = Integer.MIN_VALUE;`\n`for (int i = 0; i < 5; i++) {`\n`    int x = input.nextInt();`\n`    if (x > max) max = x;`\n`}`\n`System.out.println(max);`', en: 'Exercise 1 of the maximum patterns, but with 5 numbers. Input: -7, -3, -12, -5, -9. What is printed?\n`int max = Integer.MIN_VALUE;`\n`for (int i = 0; i < 5; i++) {`\n`    int x = input.nextInt();`\n`    if (x > max) max = x;`\n`}`\n`System.out.println(max);`' },
        answer: { value: '-3' },
        hints: [
          { he: 'המספר הראשון תמיד גדול מ-`Integer.MIN_VALUE`.', ru: 'Первое число всегда больше `Integer.MIN_VALUE`.', en: 'The first number is always bigger than `Integer.MIN_VALUE`.' },
          { he: 'בין מספרים שליליים — הגדול הוא הקרוב ביותר ל-0.', ru: 'Среди отрицательных самое большое — ближайшее к 0.', en: 'Among negative numbers the largest is the one closest to 0.' }
        ],
        solution: ['x = -7   →  -7 > MIN_VALUE  →  max = -7', 'x = -3   →  -3 > -7  →  max = -3', 'x = -12  →  no change', 'x = -5   →  no change', 'x = -9   →  no change', { he: 'מודפס -3. אם `max` היה מתחיל מ-0, היה מודפס 0.', ru: 'Печатается -3. Если бы `max` начинался с 0, напечаталось бы 0.', en: '-3 is printed. If `max` had started at 0, 0 would be printed.' }] },
      { id: 'p12', group: 'ctrl', label: { he: 'continue 4, 8', ru: 'continue 4, 8', en: 'continue 4, 8' }, kind: 'text',
        text: { he: 'הקוד מהמסך. מה יודפס? (כתבו את המספרים עם רווחים)\n`for (int i = 1; i <= 10; i++) {`\n`    if (i == 4 || i == 8) {`\n`        continue;`\n`    }`\n`    System.out.println(i);`\n`}`', ru: 'Код с экрана. Что будет напечатано? (напиши числа через пробел)\n`for (int i = 1; i <= 10; i++) {`\n`    if (i == 4 || i == 8) {`\n`        continue;`\n`    }`\n`    System.out.println(i);`\n`}`', en: 'The code from the screen. What is printed? (write the numbers with spaces)\n`for (int i = 1; i <= 10; i++) {`\n`    if (i == 4 || i == 8) {`\n`        continue;`\n`    }`\n`    System.out.println(i);`\n`}`' },
        answer: { accept: ['1 2 3 5 6 7 9 10', '1,2,3,5,6,7,9,10'] },
        hints: [
          { he: '`continue` מדלג על ה-`println` בסיבוב הזה בלבד.', ru: '`continue` перепрыгивает `println` только в этом проходе.', en: '`continue` skips the `println` in this round only.' }
        ],
        solution: ['i = 1, 2, 3  →  printed', 'i = 4  →  continue  →  not printed', 'i = 5, 6, 7  →  printed', 'i = 8  →  continue  →  not printed', 'i = 9, 10  →  printed', { he: 'תשובה: 1 2 3 5 6 7 9 10', ru: 'Ответ: 1 2 3 5 6 7 9 10', en: 'Answer: 1 2 3 5 6 7 9 10' }] },
      { id: 'p13', group: 'ctrl', label: { he: 'break ב-6', ru: 'break на 6', en: 'break at 6' }, kind: 'text',
        text: { he: 'Break ב-For: הדפיסו 1 עד 10, אבל עצרו עם `break` כשהמספר מגיע ל-6. מה יודפס? (כתבו את המספרים עם רווחים)\n`for (int i = 1; i <= 10; i++) {`\n`    if (i == 6) {`\n`        break;`\n`    }`\n`    System.out.println(i);`\n`}`', ru: 'Break в For: напечатать от 1 до 10, но остановиться через `break`, когда число дойдёт до 6. Что будет напечатано? (числа через пробел)\n`for (int i = 1; i <= 10; i++) {`\n`    if (i == 6) {`\n`        break;`\n`    }`\n`    System.out.println(i);`\n`}`', en: 'Break in For: print 1 to 10, but stop with `break` when the number reaches 6. What is printed? (write the numbers with spaces)\n`for (int i = 1; i <= 10; i++) {`\n`    if (i == 6) {`\n`        break;`\n`    }`\n`    System.out.println(i);`\n`}`' },
        answer: { accept: ['1 2 3 4 5', '1,2,3,4,5'] },
        hints: [
          { he: 'ה-`break` מגיע לפני ה-`println`. האם 6 מודפס?', ru: '`break` стоит до `println`. Напечатается ли 6?', en: 'The `break` comes before the `println`. Is 6 printed?' }
        ],
        solution: ['i = 1 ... 5  →  printed', 'i = 6  →  break  →  the loop ends, 6 is not printed', { he: 'תשובה: 1 2 3 4 5', ru: 'Ответ: 1 2 3 4 5', en: 'Answer: 1 2 3 4 5' }] },
      { id: 'p14', group: 'ctrl', label: { he: 'רק זוגיים', ru: 'Только чётные', en: 'Evens only' }, kind: 'text',
        text: { he: 'Continue ב-For 3: הדפיסו 1 עד 10 ודלגו עם `continue` על האי-זוגיים. מה יודפס? (כתבו את המספרים עם רווחים)\n`for (int i = 1; i <= 10; i++) {`\n`    if (i % 2 != 0) {`\n`        continue;`\n`    }`\n`    System.out.println(i);`\n`}`', ru: 'Continue в For 3: напечатать от 1 до 10 и пропустить через `continue` нечётные. Что будет напечатано? (числа через пробел)\n`for (int i = 1; i <= 10; i++) {`\n`    if (i % 2 != 0) {`\n`        continue;`\n`    }`\n`    System.out.println(i);`\n`}`', en: 'Continue in For 3: print 1 to 10 and skip the odd numbers with `continue`. What is printed? (write the numbers with spaces)\n`for (int i = 1; i <= 10; i++) {`\n`    if (i % 2 != 0) {`\n`        continue;`\n`    }`\n`    System.out.println(i);`\n`}`' },
        answer: { accept: ['2 4 6 8 10', '2,4,6,8,10'] },
        hints: [{ he: '`i % 2 != 0` אומר: i אי-זוגי — ואותו מדלגים.', ru: '`i % 2 != 0` значит: i нечётное — его пропускаем.', en: '`i % 2 != 0` means i is odd — and it is skipped.' }],
        solution: ['i = 1  →  1 % 2 = 1 != 0  →  continue', 'i = 2  →  2 % 2 = 0  →  print 2', 'i = 3  →  continue', 'i = 4  →  print 4', '...', 'i = 10  →  print 10', { he: 'תשובה: 2 4 6 8 10', ru: 'Ответ: 2 4 6 8 10', en: 'Answer: 2 4 6 8 10' }] },
      { id: 'p15', group: 'ctrl', label: 'Combine', kind: 'text',
        text: { he: 'Combine: הדפיסו 1 עד 12. דלגו על 5 (`continue`) ועצרו ב-10 (`break`). מה יודפס? (כתבו את המספרים עם רווחים)\n`for (int i = 1; i <= 12; i++) {`\n`    if (i == 5) continue;`\n`    if (i == 10) break;`\n`    System.out.println(i);`\n`}`', ru: 'Combine: напечатать от 1 до 12. Пропустить 5 (`continue`) и остановиться на 10 (`break`). Что будет напечатано? (числа через пробел)\n`for (int i = 1; i <= 12; i++) {`\n`    if (i == 5) continue;`\n`    if (i == 10) break;`\n`    System.out.println(i);`\n`}`', en: 'Combine: print 1 to 12. Skip 5 (`continue`) and stop at 10 (`break`). What is printed? (write the numbers with spaces)\n`for (int i = 1; i <= 12; i++) {`\n`    if (i == 5) continue;`\n`    if (i == 10) break;`\n`    System.out.println(i);`\n`}`' },
        answer: { accept: ['1 2 3 4 6 7 8 9', '1,2,3,4,6,7,8,9'] },
        hints: [
          { he: 'עד 4 הכול מודפס. מה קורה ב-5? ומה ב-10?', ru: 'До 4 всё печатается. Что происходит на 5? А на 10?', en: 'Up to 4 everything is printed. What happens at 5? And at 10?' }
        ],
        solution: ['i = 1 ... 4  →  printed', 'i = 5  →  continue  →  skipped', 'i = 6 ... 9  →  printed', 'i = 10  →  break  →  the loop ends (11, 12 never come)', { he: 'תשובה: 1 2 3 4 6 7 8 9', ru: 'Ответ: 1 2 3 4 6 7 8 9', en: 'Answer: 1 2 3 4 6 7 8 9' }] },
      {"id": "p16", "group": "while", "label": {"he": "מעלית 500", "ru": "Лифт 500", "en": "Elevator 500"}, "kind": "number", "text": {"he": "תוכנית המעלית מהשיעור. הקלט: 120, 250, 90, 140, 50. מה יודפס?\n`int sum = 0;`\n`while (sum <= 500) {`\n`    sum += input.nextInt();`\n`}`\n`System.out.println(sum);`", "ru": "Программа с лифтом с урока. Ввод: 120, 250, 90, 140, 50. Что будет напечатано?\n`int sum = 0;`\n`while (sum <= 500) {`\n`    sum += input.nextInt();`\n`}`\n`System.out.println(sum);`", "en": "The elevator program from class. Input: 120, 250, 90, 140, 50. What is printed?\n`int sum = 0;`\n`while (sum <= 500) {`\n`    sum += input.nextInt();`\n`}`\n`System.out.println(sum);`"}, "answer": {"value": "600"}, "hints": [{"he": "לפני כל סיבוב בודקים: האם `sum <= 500`? ייתכן שלא כל הקלט ייקרא.", "ru": "Перед каждым проходом проверь: `sum <= 500`? Возможно, не весь ввод будет прочитан.", "en": "Before each round check: is `sum <= 500`? Maybe not all the input is read."}], "solution": ["0 <= 500  →  sum = 120", "120 <= 500  →  sum = 370", "370 <= 500  →  sum = 460", "460 <= 500  →  sum = 600", "600 <= 500  →  false  →  exit", {"he": "מודפס 600. ה-50 לא נקרא בכלל.", "ru": "Печатается 600. Число 50 так и не прочитано.", "en": "600 is printed. The 50 is never read."}]}
    ],

    ai: [
      { id: 'd1', level: 1, label: 'D1', kind: 'number',
        text: { he: 'כמה פעמים תרוץ הלולאה (כמה פעמים יודפס "Hi")?\n`for (int i = 0; i < 7; i++) {`\n`    System.out.println("Hi");`\n`}`', ru: 'Сколько раз выполнится цикл (сколько раз напечатается "Hi")?\n`for (int i = 0; i < 7; i++) {`\n`    System.out.println("Hi");`\n`}`', en: 'How many times does the loop run (how many times is "Hi" printed)?\n`for (int i = 0; i < 7; i++) {`\n`    System.out.println("Hi");`\n`}`' },
        answer: { value: '7' },
        hints: [{ he: 'i מקבל את הערכים 0, 1, 2, ... — עד איפה?', ru: 'i принимает значения 0, 1, 2, ... — до какого?', en: 'i takes the values 0, 1, 2, ... — up to what?' }],
        solution: ['i = 0, 1, 2, 3, 4, 5, 6', 'i = 7  →  7 < 7  →  false', { he: '7 סיבובים', ru: '7 проходов', en: '7 rounds' }] },
      { id: 'd2', level: 1, label: 'D2', kind: 'number',
        text: { he: 'מה יודפס?\n`int s = 0;`\n`for (int i = 1; i <= 4; i++) {`\n`    s += i;`\n`}`\n`System.out.println(s);`', ru: 'Что будет напечатано?\n`int s = 0;`\n`for (int i = 1; i <= 4; i++) {`\n`    s += i;`\n`}`\n`System.out.println(s);`', en: 'What is printed?\n`int s = 0;`\n`for (int i = 1; i <= 4; i++) {`\n`    s += i;`\n`}`\n`System.out.println(s);`' },
        answer: { value: '10' },
        hints: [{ he: 'עקבו אחרי s אחרי כל סיבוב.', ru: 'Следи за s после каждого прохода.', en: 'Track s after every round.' }],
        solution: ['i = 1  →  s = 1', 'i = 2  →  s = 3', 'i = 3  →  s = 6', 'i = 4  →  s = 10', { he: 'מודפס 10', ru: 'Печатается 10', en: '10 is printed' }] },
      { id: 'd3', level: 1, label: 'D3', kind: 'number',
        text: { he: 'מה יודפס?\n`int c = 0;`\n`for (int i = 1; i <= 20; i++) {`\n`    if (i % 5 == 0) c++;`\n`}`\n`System.out.println(c);`', ru: 'Что будет напечатано?\n`int c = 0;`\n`for (int i = 1; i <= 20; i++) {`\n`    if (i % 5 == 0) c++;`\n`}`\n`System.out.println(c);`', en: 'What is printed?\n`int c = 0;`\n`for (int i = 1; i <= 20; i++) {`\n`    if (i % 5 == 0) c++;`\n`}`\n`System.out.println(c);`' },
        answer: { value: '4' },
        hints: [{ he: 'אילו מספרים מ-1 עד 20 מתחלקים ב-5?', ru: 'Какие числа от 1 до 20 делятся на 5?', en: 'Which numbers from 1 to 20 are divisible by 5?' }],
        solution: ['i = 5   →  c = 1', 'i = 10  →  c = 2', 'i = 15  →  c = 3', 'i = 20  →  c = 4', { he: 'בשאר הסיבובים התנאי `false`. מודפס 4', ru: 'В остальных проходах условие `false`. Печатается 4', en: 'In the other rounds the condition is `false`. 4 is printed' }] },
      { id: 'd4', level: 2, label: 'D4', kind: 'number',
        text: { he: 'מכפלה: מה יודפס?\n`int p = 1;`\n`for (int i = 1; i <= 5; i++) {`\n`    p *= i;`\n`}`\n`System.out.println(p);`', ru: 'Произведение: что будет напечатано?\n`int p = 1;`\n`for (int i = 1; i <= 5; i++) {`\n`    p *= i;`\n`}`\n`System.out.println(p);`', en: 'A product: what is printed?\n`int p = 1;`\n`for (int i = 1; i <= 5; i++) {`\n`    p *= i;`\n`}`\n`System.out.println(p);`' },
        answer: { value: '120' },
        hints: [
          { he: 'למה `p` מתחיל מ-1 ולא מ-0?', ru: 'Почему `p` начинается с 1, а не с 0?', en: 'Why does `p` start at 1 and not 0?' },
          { he: '`p *= i` כופל את p ב-i בכל סיבוב.', ru: '`p *= i` умножает p на i в каждом проходе.', en: '`p *= i` multiplies p by i every round.' }
        ],
        solution: ['i = 1  →  p = 1', 'i = 2  →  p = 2', 'i = 3  →  p = 6', 'i = 4  →  p = 24', 'i = 5  →  p = 120', { he: 'מודפס 120. (אם p היה מתחיל מ-0, הכול היה 0.)', ru: 'Печатается 120. (Если бы p начинался с 0, всё было бы 0.)', en: '120 is printed. (If p started at 0, everything would be 0.)' }] },
      { id: 'd5', level: 2, label: 'D5', kind: 'number',
        text: { he: 'מה יודפס?\n`int s = 0;`\n`for (int i = 10; i >= 1; i -= 3) {`\n`    s += i;`\n`}`\n`System.out.println(s);`', ru: 'Что будет напечатано?\n`int s = 0;`\n`for (int i = 10; i >= 1; i -= 3) {`\n`    s += i;`\n`}`\n`System.out.println(s);`', en: 'What is printed?\n`int s = 0;`\n`for (int i = 10; i >= 1; i -= 3) {`\n`    s += i;`\n`}`\n`System.out.println(s);`' },
        answer: { value: '22' },
        hints: [
          { he: 'הפעם i יורד ב-3: 10, 7, ...', ru: 'Теперь i уменьшается на 3: 10, 7, ...', en: 'This time i goes down by 3: 10, 7, ...' }
        ],
        solution: ['i = 10  →  s = 10', 'i = 7   →  s = 17', 'i = 4   →  s = 21', 'i = 1   →  s = 22', 'i = -2  →  -2 >= 1  →  false', { he: 'מודפס 22', ru: 'Печатается 22', en: '22 is printed' }] },
      { id: 'd6', level: 2, label: 'D6', kind: 'number',
        text: { he: 'מה יודפס?\n`int n = 1;`\n`int steps = 0;`\n`while (n < 100) {`\n`    n *= 3;`\n`    steps++;`\n`}`\n`System.out.println(steps);`', ru: 'Что будет напечатано?\n`int n = 1;`\n`int steps = 0;`\n`while (n < 100) {`\n`    n *= 3;`\n`    steps++;`\n`}`\n`System.out.println(steps);`', en: 'What is printed?\n`int n = 1;`\n`int steps = 0;`\n`while (n < 100) {`\n`    n *= 3;`\n`    steps++;`\n`}`\n`System.out.println(steps);`' },
        answer: { value: '5' },
        hints: [
          { he: 'כתבו את n אחרי כל סיבוב: 3, 9, ...', ru: 'Выпиши n после каждого прохода: 3, 9, ...', en: 'Write down n after each round: 3, 9, ...' },
          { he: 'התנאי נבדק לפני כל סיבוב: האם n עדיין קטן מ-100?', ru: 'Условие проверяется перед каждым проходом: n ещё меньше 100?', en: 'The condition is checked before each round: is n still below 100?' }
        ],
        solution: ['1 < 100  →  n = 3,    steps = 1', '3 < 100  →  n = 9,    steps = 2', '9 < 100  →  n = 27,   steps = 3', '27 < 100  →  n = 81,  steps = 4', '81 < 100  →  n = 243, steps = 5', '243 < 100  →  false  →  exit', { he: 'מודפס 5', ru: 'Печатается 5', en: '5 is printed' }] },
      { id: 'd7', level: 2, label: 'D7', kind: 'number',
        text: { he: 'מה יודפס?\n`int s = 0;`\n`for (int i = 1; i <= 10; i++) {`\n`    if (i % 3 == 0) continue;`\n`    s += i;`\n`}`\n`System.out.println(s);`', ru: 'Что будет напечатано?\n`int s = 0;`\n`for (int i = 1; i <= 10; i++) {`\n`    if (i % 3 == 0) continue;`\n`    s += i;`\n`}`\n`System.out.println(s);`', en: 'What is printed?\n`int s = 0;`\n`for (int i = 1; i <= 10; i++) {`\n`    if (i % 3 == 0) continue;`\n`    s += i;`\n`}`\n`System.out.println(s);`' },
        answer: { value: '37' },
        hints: [
          { he: 'אילו מספרים מדלגים? אלה שמתחלקים ב-3.', ru: 'Какие числа пропускаются? Те, что делятся на 3.', en: 'Which numbers are skipped? Those divisible by 3.' },
          { he: 'סכום 1 עד 10 הוא 55. כמה צריך להוריד?', ru: 'Сумма от 1 до 10 — 55. Сколько нужно вычесть?', en: 'The sum of 1 to 10 is 55. How much must be subtracted?' }
        ],
        solution: ['skipped: 3, 6, 9', 's = 1 + 2 + 4 + 5 + 7 + 8 + 10', '= 37', { he: 'בדיקה: 55 − (3 + 6 + 9) = 55 − 18 = 37', ru: 'Проверка: 55 − (3 + 6 + 9) = 55 − 18 = 37', en: 'Check: 55 − (3 + 6 + 9) = 55 − 18 = 37' }] },
      { id: 'd8', level: 2, label: 'D8', kind: 'number',
        text: { he: 'ממוצע הזוגיים מ-2 עד 10. מה יודפס?\n`int sum = 0;`\n`int count = 0;`\n`for (int i = 2; i <= 10; i += 2) {`\n`    sum += i;`\n`    count++;`\n`}`\n`System.out.println((double) sum / count);`', ru: 'Среднее чётных от 2 до 10. Что будет напечатано?\n`int sum = 0;`\n`int count = 0;`\n`for (int i = 2; i <= 10; i += 2) {`\n`    sum += i;`\n`    count++;`\n`}`\n`System.out.println((double) sum / count);`', en: 'The average of the even numbers from 2 to 10. What is printed?\n`int sum = 0;`\n`int count = 0;`\n`for (int i = 2; i <= 10; i += 2) {`\n`    sum += i;`\n`    count++;`\n`}`\n`System.out.println((double) sum / count);`' },
        answer: { value: '6' },
        hints: [{ he: 'צוברים סכום וגם סופרים. כמה מספרים זוגיים יש מ-2 עד 10?', ru: 'Копим сумму и считаем количество. Сколько чётных от 2 до 10?', en: 'Collect a sum and also count. How many even numbers are there from 2 to 10?' }],
        solution: ['i = 2, 4, 6, 8, 10', 'sum = 30,  count = 5', '(double) 30 / 5 = 6.0', { he: 'מודפס 6.0', ru: 'Печатается 6.0', en: '6.0 is printed' }] },
      { id: 'd9', level: 3, label: 'D9', kind: 'number',
        text: { he: 'מה יודפס?\n`int x = 1;`\n`while (true) {`\n`    x *= 2;`\n`    if (x > 50) break;`\n`}`\n`System.out.println(x);`', ru: 'Что будет напечатано?\n`int x = 1;`\n`while (true) {`\n`    x *= 2;`\n`    if (x > 50) break;`\n`}`\n`System.out.println(x);`', en: 'What is printed?\n`int x = 1;`\n`while (true) {`\n`    x *= 2;`\n`    if (x > 50) break;`\n`}`\n`System.out.println(x);`' },
        answer: { value: '64' },
        hints: [
          { he: '`while (true)` רץ לנצח — רק `break` עוצר אותו.', ru: '`while (true)` крутится вечно — остановить его может только `break`.', en: '`while (true)` runs forever — only `break` stops it.' },
          { he: 'x מוכפל ב-2 כל פעם: 2, 4, 8, ... מתי הוא עובר את 50?', ru: 'x удваивается: 2, 4, 8, ... Когда он станет больше 50?', en: 'x doubles: 2, 4, 8, ... When does it pass 50?' }
        ],
        solution: ['x = 2, 4, 8, 16, 32  →  each time x > 50 is false', 'x = 64  →  64 > 50  →  break', { he: 'מודפס 64', ru: 'Печатается 64', en: '64 is printed' }] },
      { id: 'd10', level: 3, label: 'D10', kind: 'choice',
        text: { he: 'מה יודפס? הקלט: -4, -2, -9\n`int max = 0;`\n`for (int i = 0; i < 3; i++) {`\n`    int x = input.nextInt();`\n`    if (x > max) max = x;`\n`}`\n`System.out.println(max);`', ru: 'Что будет напечатано? Ввод: -4, -2, -9\n`int max = 0;`\n`for (int i = 0; i < 3; i++) {`\n`    int x = input.nextInt();`\n`    if (x > max) max = x;`\n`}`\n`System.out.println(max);`', en: 'What is printed? Input: -4, -2, -9\n`int max = 0;`\n`for (int i = 0; i < 3; i++) {`\n`    int x = input.nextInt();`\n`    if (x > max) max = x;`\n`}`\n`System.out.println(max);`' },
        options: ['-2', '0', '-9'],
        answer: { index: 1 },
        hints: [
          { he: 'האם אחד מהמספרים גדול מ-0?', ru: 'Хоть одно из чисел больше 0?', en: 'Is any of the numbers bigger than 0?' }
        ],
        solution: ['-4 > 0  →  false', '-2 > 0  →  false', '-9 > 0  →  false', { he: '`max` נשאר 0 ומודפס 0 — מספר שבכלל לא הוקלד. התיקון: `int max = Integer.MIN_VALUE;` ואז יודפס -2.', ru: '`max` остаётся 0, и печатается 0 — число, которого не вводили. Исправление: `int max = Integer.MIN_VALUE;`, тогда напечатается -2.', en: '`max` stays 0 and 0 is printed — a number nobody typed. The fix: `int max = Integer.MIN_VALUE;`, then -2 is printed.' }] },
      { id: 'd11', level: 3, label: 'D11', kind: 'number',
        text: { he: 'מה יודפס?\n`int n = 90210;`\n`int c = 0;`\n`while (n != 0) {`\n`    c++;`\n`    n /= 10;`\n`}`\n`System.out.println(c);`', ru: 'Что будет напечатано?\n`int n = 90210;`\n`int c = 0;`\n`while (n != 0) {`\n`    c++;`\n`    n /= 10;`\n`}`\n`System.out.println(c);`', en: 'What is printed?\n`int n = 90210;`\n`int c = 0;`\n`while (n != 0) {`\n`    c++;`\n`    n /= 10;`\n`}`\n`System.out.println(c);`' },
        answer: { value: '5' },
        hints: [
          { he: 'האפסים בתוך המספר לא עוצרים את הלולאה — רק כש-n כולו 0.', ru: 'Нули внутри числа цикл не останавливают — только когда n целиком станет 0.', en: 'The zeros inside the number do not stop the loop — only when n itself becomes 0.' }
        ],
        solution: ['n = 90210  →  c = 1,  n = 9021', 'n = 9021   →  c = 2,  n = 902', 'n = 902    →  c = 3,  n = 90', 'n = 90     →  c = 4,  n = 9', 'n = 9      →  c = 5,  n = 0', '0 != 0  →  false  →  exit', { he: 'מודפס 5', ru: 'Печатается 5', en: '5 is printed' }] },
      { id: 'd12', level: 3, label: 'D12', kind: 'number',
        text: { he: 'מה יודפס?\n`int n = 123;`\n`int r = 0;`\n`while (n > 0) {`\n`    r = r * 10 + n % 10;`\n`    n /= 10;`\n`}`\n`System.out.println(r);`', ru: 'Что будет напечатано?\n`int n = 123;`\n`int r = 0;`\n`while (n > 0) {`\n`    r = r * 10 + n % 10;`\n`    n /= 10;`\n`}`\n`System.out.println(r);`', en: 'What is printed?\n`int n = 123;`\n`int r = 0;`\n`while (n > 0) {`\n`    r = r * 10 + n % 10;`\n`    n /= 10;`\n`}`\n`System.out.println(r);`' },
        answer: { value: '321' },
        hints: [
          { he: 'בכל סיבוב: `r * 10` מזיז את r ספרה שמאלה, ו-`n % 10` מוסיף את הספרה האחרונה של n.', ru: 'В каждом проходе: `r * 10` сдвигает r на цифру влево, а `n % 10` добавляет последнюю цифру n.', en: 'Each round: `r * 10` shifts r one digit left, and `n % 10` adds the last digit of n.' }
        ],
        solution: ['n = 123  →  r = 0 * 10 + 3 = 3,     n = 12', 'n = 12   →  r = 3 * 10 + 2 = 32,    n = 1', 'n = 1    →  r = 32 * 10 + 1 = 321,  n = 0', '0 > 0  →  false  →  exit', { he: 'מודפס 321 — המספר בסדר הפוך', ru: 'Печатается 321 — число задом наперёд', en: '321 is printed — the number reversed' }] },
      {"id": "d13", "level": 2, "label": "D13", "kind": "choice", "text": {"he": "מחפשים את המינימום של מספרים תלת-ספרתיים. מאיזה ערך צריך להתחיל את `min`?", "ru": "Ищем минимум среди трёхзначных чисел. С какого значения нужно начать `min`?", "en": "We look for the minimum of three-digit numbers. What should `min` start at?"}, "options": ["0", "100", "999"], "answer": {"index": 2}, "hints": [{"he": "`min` צריך להתחיל גדול מכל מספר שיכול להגיע, כדי שהמספר הראשון יחליף אותו.", "ru": "`min` должен начинаться больше любого возможного числа, чтобы первое же число его заменило.", "en": "`min` must start bigger than any number that can come, so the first number replaces it."}], "solution": [{"he": "עם 0: הקלט 345, 120, 870 — אף מספר לא קטן מ-0, מודפס 0.", "ru": "С 0: ввод 345, 120, 870 — ни одно число не меньше 0, печатается 0.", "en": "With 0: input 345, 120, 870 — no number is less than 0, 0 is printed."}, {"he": "עם 999: `345 < 999` → `min = 345`, `120 < 345` → `min = 120`. מודפס 120.", "ru": "С 999: `345 < 999` → `min = 345`, `120 < 345` → `min = 120`. Печатается 120.", "en": "With 999: `345 < 999` → `min = 345`, `120 < 345` → `min = 120`. 120 is printed."}, {"he": "תשובה: 999 (או `Integer.MAX_VALUE`).", "ru": "Ответ: 999 (или `Integer.MAX_VALUE`).", "en": "Answer: 999 (or `Integer.MAX_VALUE`)."}]},
      {"id": "d14", "level": 3, "label": "D14", "kind": "choice", "text": {"he": "הסדר הפוך! הקלט: 7, 3, 9, 5. בהתחלה `first` ו-`second` שווים ל-`Integer.MIN_VALUE`. מה יודפס ב-`first + \" \" + second`?\n`if (num > first) {`\n`    first = num;`\n`    second = first;`\n`} else if (num > second) {`\n`    second = num;`\n`}`", "ru": "Порядок перепутан! Ввод: 7, 3, 9, 5. В начале `first` и `second` равны `Integer.MIN_VALUE`. Что напечатает `first + \" \" + second`?\n`if (num > first) {`\n`    first = num;`\n`    second = first;`\n`} else if (num > second) {`\n`    second = num;`\n`}`", "en": "The order is swapped! Input: 7, 3, 9, 5. At the start `first` and `second` are `Integer.MIN_VALUE`. What does `first + \" \" + second` print?\n`if (num > first) {`\n`    first = num;`\n`    second = first;`\n`} else if (num > second) {`\n`    second = num;`\n`}`"}, "options": ["9 7", "9 9", "7 9"], "answer": {"index": 1}, "hints": [{"he": "אחרי `first = num` השורה `second = first` מעתיקה את המספר החדש, לא את הישן.", "ru": "После `first = num` строка `second = first` копирует новое число, а не старое.", "en": "After `first = num` the line `second = first` copies the new number, not the old one."}], "solution": ["7  →  7 > MIN  →  first = 7, second = 7", "3  →  3 > 7 false, 3 > 7 false", "9  →  9 > 7  →  first = 9, second = 9", "5  →  5 > 9 false, 5 > 9 false", {"he": "מודפס `9 9`. בסדר הנכון (`second = first` קודם) היה מודפס `9 7`.", "ru": "Печатается `9 9`. При правильном порядке (сначала `second = first`) было бы `9 7`.", "en": "`9 9` is printed. In the right order (`second = first` first) it would be `9 7`."}]}
    ]
  }
};

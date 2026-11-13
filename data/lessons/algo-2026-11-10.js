/* Lesson data — format: see the comment at the top of data/lessons/math-2026-11-01.js.
   Every "what does it print" answer and every example in this file was checked by compiling
   and running the Java code (javac/java 21) with the given input. */
window.LESSONS = window.LESSONS || {};
window.LESSONS["algo-2026-11-10"] = {
  "id": "algo-2026-11-10",
  "subject": "algo",
  "date": "2026-11-10",
  "title": {
    "he": "תרגול: תנאים ולולאות",
    "ru": "Практика: условия и циклы",
    "en": "Practice: conditions and loops"
  },
  "summary": {
    "he": "תרגול Java: `=` מול `==`, אופרטורי השוואה, `&&` `||` `!`, שרשרת `else if` ותנאי בתוך תנאי, לולאת for עם סכום, ספירה לאחור, while עד שמקלידים 5, ושני תרגילים: מספרים שמתחלקים ב־5 ו\"מספר יפה\".",
    "ru": "Практика по Java: `=` и `==`, операторы сравнения, `&&` `||` `!`, цепочка `else if` и условие в условии, цикл for с суммой, обратный отсчёт, while до ввода 5 и две задачи: числа, которые делятся на 5, и «красивое число».",
    "en": "Java practice: `=` vs `==`, comparison operators, `&&` `||` `!`, an `else if` chain and a condition inside a condition, a for loop with a sum, counting down, while until 5 is typed, and two exercises: numbers divisible by 5 and a \"beautiful number\"."
  },
  "timeline": [
    {
      "kind": "tip",
      "title": {
        "he": "מה זה התרגול ואיפה חומר לתרגול עצמי",
        "ru": "Что такое практика и где материалы для самостоятельной тренировки",
        "en": "What the practice session is and where to practise on your own"
      },
      "text": {
        "he": "זה שיעור תרגול (לא השיעור הרגיל של יום ראשון). בתרגול חוזרים על הנושאים לאט ובפירוט.\nבאתר הקורס יש לתרגול עצמי: \"סיכום תנאים\", \"סיכום לולאות\" ו\"תרגילים בלולאות\". המתרגל אמר: אפשר לקפוץ משאלה לשאלה ולבחור מה שמתאים לכם.",
        "ru": "Это практическое занятие (не обычный урок воскресенья). На практике темы повторяют медленно и подробно.\nНа сайте курса для самостоятельной тренировки есть: «סיכום תנאים» (конспект условий), «סיכום לולאות» (конспект циклов) и «תרגילים בלולאות» (упражнения на циклы). Ведущий сказал: можно прыгать с вопроса на вопрос и выбирать то, что подходит.",
        "en": "This is a practice session (not the regular Sunday lesson). In practice the topics are repeated slowly and in detail.\nOn the course site, for practising on your own, there are: \"סיכום תנאים\" (conditions summary), \"סיכום לולאות\" (loops summary) and \"תרגילים בלולאות\" (loop exercises). The instructor said you can jump from question to question and pick what suits you."
      },
      "why": {
        "he": "כדי לכתוב קוד צריך לכתוב הרבה קוד. התרגילים באתר הקורס בנויים בדיוק על מה שלומדים בשיעורים, ולכן הם התרגול הכי קרוב למבחן.",
        "ru": "Чтобы научиться писать код, нужно много писать код. Упражнения на сайте курса построены ровно на том, что проходят на уроках, поэтому это самая близкая к экзамену тренировка.",
        "en": "To learn to write code you have to write a lot of code. The exercises on the course site are built exactly on what the lessons cover, so they are the practice closest to the exam."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "`=` מול `==`",
        "ru": "`=` и `==`",
        "en": "`=` vs `==`"
      },
      "text": {
        "he": "• שווה אחד `=` הוא השמה: לוקחים ערך ושמים אותו בתוך משתנה. `int x = 5;`\n• שווה שווה `==` הוא השוואה: שואלים \"האם שווה?\", והתשובה `true` או `false`.\nלכן בתוך `if` בודקים עם `==`.",
        "ru": "• Одно равно `=` — присваивание: берём значение и кладём его в переменную. `int x = 5;`\n• Два равно `==` — сравнение: спрашиваем «равно ли?», ответ `true` или `false`.\nПоэтому внутри `if` проверяем через `==`.",
        "en": "• One equals `=` is assignment: take a value and put it into a variable. `int x = 5;`\n• Double equals `==` is comparison: ask \"is it equal?\", and the answer is `true` or `false`.\nSo inside `if` you check with `==`."
      },
      "math": [
        "int x = 5;                 // assignment",
        "System.out.println(x == 5); // true",
        "System.out.println(x != 5); // false"
      ],
      "why": {
        "he": "ב־Java הסימן `=` כבר תפוס להשמה, ולכן להשוואה צריך סימן אחר. אם כותבים `if (x = 5)`, זו שגיאת קומפילציה: השמה לא נותנת `true` או `false`.",
        "ru": "В Java знак `=` уже занят присваиванием, поэтому для сравнения нужен другой знак. Если написать `if (x = 5)`, будет ошибка компиляции: присваивание не даёт `true` или `false`.",
        "en": "In Java the sign `=` is already taken by assignment, so comparison needs a different sign. If you write `if (x = 5)`, you get a compile error: an assignment does not give `true` or `false`."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "אופרטורי השוואה",
        "ru": "Операторы сравнения",
        "en": "Comparison operators"
      },
      "text": {
        "he": "• `!=` שונה מ־\n• `>` גדול מ־, `<` קטן מ־ (הפה של הסימן פתוח לכיוון הגדול)\n• `>=` גדול או שווה, `<=` קטן או שווה\nטיפ מהמתרגל: במספרים שלמים `age >= 18` זה אותו דבר כמו `age > 17`. הוא בדרך כלל כותב את הגרסה השנייה, אבל שתיהן נכונות.",
        "ru": "• `!=` — не равно\n• `>` больше, `<` меньше (раскрытая сторона знака смотрит на большее)\n• `>=` больше или равно, `<=` меньше или равно\nСовет ведущего: в целых числах `age >= 18` — то же самое, что `age > 17`. Он обычно пишет второй вариант, но верны оба.",
        "en": "• `!=` not equal\n• `>` greater than, `<` less than (the open side of the sign faces the bigger one)\n• `>=` greater or equal, `<=` less or equal\nThe instructor's tip: for whole numbers `age >= 18` is the same as `age > 17`. He usually writes the second one, but both are correct."
      },
      "math": [
        "x != 5",
        "x > 3",
        "x < 10",
        "age >= 18   // age > 17"
      ],
      "why": {
        "he": "בין 17 ל־18 אין מספר שלם, ולכן \"גדול מ־17\" ו\"לפחות 18\" תופסים בדיוק את אותם מספרים. ב־`double` זה כבר לא נכון: 17.5 גדול מ־17 אבל קטן מ־18.",
        "ru": "Между 17 и 18 нет целого числа, поэтому «больше 17» и «не меньше 18» ловят ровно одни и те же числа. Для `double` это уже неверно: 17.5 больше 17, но меньше 18.",
        "en": "There is no whole number between 17 and 18, so \"greater than 17\" and \"at least 18\" catch exactly the same numbers. For `double` this is no longer true: 17.5 is greater than 17 but less than 18."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "`&&`, `||` ו־`!`",
        "ru": "`&&`, `||` и `!`",
        "en": "`&&`, `||` and `!`"
      },
      "text": {
        "he": "• `&&` (וגם): שני התנאים חייבים להיות נכונים. אחד לא נכון → `false`.\n• `||` (או): מספיק שתנאי אחד נכון. הבדיקה הולכת לפי הסדר: אם הראשון כבר נכון, את השני בכלל לא בודקים.\n• `!` (לא): הופך את התשובה. לא חייבים להשתמש בו, אפשר לכתוב את האופרטור ההפוך: במקום `!(x == 5)` לכתוב `x != 5`.",
        "ru": "• `&&` (и): оба условия должны быть верны. Одно неверно → `false`.\n• `||` (или): достаточно, чтобы одно было верно. Проверка идёт по порядку: если первое уже верно, второе вообще не проверяется.\n• `!` (не): переворачивает ответ. Можно обойтись без него и написать обратный оператор: вместо `!(x == 5)` писать `x != 5`.",
        "en": "• `&&` (and): both conditions must be true. One false → `false`.\n• `||` (or): it is enough for one to be true. The check goes in order: if the first is already true, the second is not checked at all.\n• `!` (not): flips the answer. You don't have to use it, you can write the opposite operator: instead of `!(x == 5)` write `x != 5`."
      },
      "math": [
        "x > 3 && x < 10    // 3 < x < 10",
        "x < 3 || x > 10    // x outside 3..10",
        "!(x == 5)          // x != 5"
      ],
      "why": {
        "he": "כש־`||` רואה שהתנאי הראשון נכון, התשובה כבר ידועה (\"או\" צריך רק אחד), ולכן אין טעם לבדוק עוד. עם `&&` זה הפוך: אם הראשון לא נכון, גם השני לא נבדק.",
        "ru": "Когда `||` видит, что первое условие верно, ответ уже известен («или» нужно только одно), поэтому проверять дальше незачем. С `&&` наоборот: если первое неверно, второе тоже не проверяется.",
        "en": "When `||` sees that the first condition is true, the answer is already known (\"or\" needs just one), so there is no point checking further. With `&&` it is the other way round: if the first is false, the second is not checked either."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "שרשרת `if` / `else if` / `else`",
        "ru": "Цепочка `if` / `else if` / `else`",
        "en": "The `if` / `else if` / `else` chain"
      },
      "text": {
        "he": "כשיש יותר משתי אפשרויות, מוסיפים `else if`. בדוגמה: מי מבין שני המספרים גדול, או שהם שווים.\nבתרגול הרצנו את זה צעד אחרי צעד עם 10 ו־5: התנאי הראשון נכון, מודפס `10 is bigger`, ושני התנאים הבאים בכלל לא נבדקים.\nאם כותבים שלושה `if` נפרדים, זו לא טעות והתוצאה כאן אותה, אבל התוכנית בודקת את כולם: ה־`if` השני לא יודע מה קרה בראשון.",
        "ru": "Когда вариантов больше двух, добавляют `else if`. В примере: какое из двух чисел больше или они равны.\nНа практике прошли это по шагам с 10 и 5: первое условие верно, печатается `10 is bigger`, а два следующих условия вообще не проверяются.\nЕсли написать три отдельных `if`, это не ошибка, и результат здесь тот же, но программа проверяет все: второй `if` не знает, что было в первом.",
        "en": "When there are more than two options, add `else if`. In the example: which of the two numbers is bigger, or are they equal.\nIn practice we stepped through it with 10 and 5: the first condition is true, `10 is bigger` is printed, and the next two conditions are not checked at all.\nIf you write three separate `if`s, it is not a mistake and the result here is the same, but the program checks all of them: the second `if` does not know what happened in the first."
      },
      "math": [
        "Scanner input = new Scanner(System.in);",
        "System.out.println(\"Enter 2 numbers: \");",
        "int num1 = input.nextInt();",
        "int num2 = input.nextInt();",
        "if (num1 > num2) {",
        "    System.out.println(num1 + \" is bigger\");",
        "} else if (num1 < num2) {",
        "    System.out.println(num2 + \" is bigger\");",
        "} else {",
        "    System.out.println(\"equal\");",
        "}"
      ],
      "why": {
        "he": "בשרשרת נכנסים לכל היותר לענף אחד, ולכן היא גם חוסכת בדיקות וגם מונעת הדפסה כפולה. כשהתנאים חופפים (למשל `x > 10` ו־`x > 5`), שני `if` נפרדים ידפיסו שתי שורות. ראו את המשימה \"if נפרדים\".",
        "ru": "В цепочке заходим максимум в одну ветку, поэтому она и экономит проверки, и не даёт напечатать дважды. Когда условия пересекаются (например, `x > 10` и `x > 5`), два отдельных `if` напечатают две строки. См. задачу «Отдельные if».",
        "en": "In a chain you enter at most one branch, so it both saves checks and prevents printing twice. When the conditions overlap (for example `x > 10` and `x > 5`), two separate `if`s print two lines. See the task \"Separate ifs\"."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "תנאי בתוך תנאי",
        "ru": "Условие внутри условия",
        "en": "A condition inside a condition"
      },
      "text": {
        "he": "אפשר לשים `if` בתוך `if`. לתנאי הפנימי מגיעים רק אם החיצוני נכון.\nזה עובד כמו `&&`: \"גם זה וגם זה\". את אותו דבר אפשר לכתוב בשורה אחת: `if (num1 > num2 && num1 > 7)`.\nאבל \"או\" (`||`) אי אפשר לבנות ככה: לפנימי בכלל לא מגיעים, אם החיצוני לא נכון.",
        "ru": "Можно поставить `if` внутрь `if`. Во внутреннее условие попадаем, только если внешнее верно.\nЭто работает как `&&`: «и то, и другое». То же самое можно написать одной строкой: `if (num1 > num2 && num1 > 7)`.\nА «или» (`||`) так не построить: во внутреннее вообще не попадём, если внешнее неверно.",
        "en": "You can put an `if` inside an `if`. You reach the inner condition only if the outer one is true.\nIt works like `&&`: \"both this and that\". The same can be written on one line: `if (num1 > num2 && num1 > 7)`.\nBut \"or\" (`||`) cannot be built this way: if the outer one is false, you never reach the inner one."
      },
      "math": [
        "int num1 = 10;",
        "int num2 = 5;",
        "if (num1 > num2) {",
        "    if (num1 > 7) {",
        "        System.out.println(\"bigger than num2 and bigger than 7\");",
        "    }",
        "}"
      ],
      "why": {
        "he": "תנאי בתוך תנאי נוח כשאחרי הבדיקה הראשונה יש כמה דברים לעשות או כמה בדיקות המשך. כשיש רק בדיקה אחת נוספת, שורה אחת עם `&&` קצרה וברורה יותר.",
        "ru": "Условие в условии удобно, когда после первой проверки нужно сделать несколько вещей или несколько дальнейших проверок. Когда проверка всего одна, одна строка с `&&` короче и понятнее.",
        "en": "A condition inside a condition is handy when, after the first check, there are several things to do or several further checks. When there is only one more check, a single line with `&&` is shorter and clearer."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "לולאת for: שלושה חלקים",
        "ru": "Цикл for: три части",
        "en": "The for loop: three parts"
      },
      "text": {
        "he": "למה לולאה? אם צריך לקלוט 10 מספרים, בלי לולאה כותבים 10 משתנים ו־10 שורות קליטה. הלולאה עושה את זה בשבילנו.\n• חלק 1: נקודת התחלה `int i = 0`. מתחילים כמעט תמיד מ־0.\n• חלק 2: תנאי. כל עוד הוא נכון, ממשיכים. `i < 3` נותן `0, 1, 2`, כלומר 3 סיבובים: כותבים \"קטן מ\" המספר עצמו.\n• חלק 3: קידום `i++`. זה קיצור של `i += 1`, וזה קיצור של `i = i + 1`.\nבתוך הלולאה מבקשים מספר. כדי שהמשתמש יקליד באותה שורה, כותבים `print` ולא `println`.",
        "ru": "Зачем цикл? Если нужно ввести 10 чисел, без цикла пишут 10 переменных и 10 строк ввода. Цикл делает это за нас.\n• Часть 1: старт `int i = 0`. Почти всегда начинают с 0.\n• Часть 2: условие. Пока оно верно, продолжаем. `i < 3` даёт 0, 1, 2, то есть 3 круга: пишут «меньше» самого числа.\n• Часть 3: шаг `i++`. Это сокращение `i += 1`, а оно сокращение `i = i + 1`.\nВнутри цикла просим число. Чтобы пользователь печатал в той же строке, пишут `print`, а не `println`.",
        "en": "Why a loop? If you need to read 10 numbers, without a loop you write 10 variables and 10 input lines. The loop does it for us.\n• Part 1: the start `int i = 0`. You almost always start from 0.\n• Part 2: the condition. As long as it is true, keep going. `i < 3` gives 0, 1, 2, i.e. 3 rounds: write \"less than\" the number itself.\n• Part 3: the step `i++`. It is short for `i += 1`, which is short for `i = i + 1`.\nInside the loop we ask for a number. So that the user types on the same line, write `print`, not `println`."
      },
      "math": [
        "Scanner input = new Scanner(System.in);",
        "for (int i = 0; i < 3; i++) {",
        "    System.out.print(\"Enter number: \");",
        "    int num = input.nextInt();",
        "    System.out.println(num);",
        "}"
      ],
      "why": {
        "he": "מתחילים מ־0 ועוצרים ב\"קטן מ־N\", כי כך מספר הסיבובים הוא בדיוק N, ולא צריך לחשב. `ln` ב־`println` מוסיף ירידת שורה, ולכן בלעדיו הסמן נשאר אחרי ההודעה.",
        "ru": "Начинают с 0 и останавливаются на «меньше N», потому что так число кругов ровно N, и ничего не надо считать. `ln` в `println` добавляет перевод строки, поэтому без него курсор остаётся сразу после сообщения.",
        "en": "Start at 0 and stop at \"less than N\", because then the number of rounds is exactly N, with nothing to work out. The `ln` in `println` adds a line break, so without it the cursor stays right after the message."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "סכום בלולאה עם `+=`",
        "ru": "Сумма в цикле через `+=`",
        "en": "A sum in a loop with `+=`"
      },
      "text": {
        "he": "רוצים לחבר את המספרים שהמשתמש מקליד. המשתנה `sum` נוצר לפני הלולאה, פעם אחת, עם 0. בתוך הלולאה מוסיפים לו כל מספר: `sum += num`, שזה קיצור של `sum = sum + num`.\nבסוף, אחרי הלולאה, מדפיסים את הסכום.",
        "ru": "Хотим сложить числа, которые вводит пользователь. Переменная `sum` создаётся до цикла, один раз, с 0. Внутри цикла к ней прибавляем каждое число: `sum += num` — это сокращение `sum = sum + num`.\nВ конце, после цикла, печатаем сумму.",
        "en": "We want to add up the numbers the user types. The variable `sum` is created before the loop, once, with 0. Inside the loop each number is added to it: `sum += num`, which is short for `sum = sum + num`.\nAt the end, after the loop, print the sum."
      },
      "math": [
        "Scanner input = new Scanner(System.in);",
        "int sum = 0;",
        "for (int i = 0; i < 3; i++) {",
        "    System.out.print(\"Enter number: \");",
        "    int num = input.nextInt();",
        "    sum += num;          // sum = sum + num;",
        "}",
        "System.out.println(\"sum = \" + sum);"
      ],
      "why": {
        "he": "אם יוצרים את `sum` בתוך הלולאה, הוא נוצר מחדש עם 0 בכל סיבוב, והסכום הולך לאיבוד. וגם אחרי הלולאה אי אפשר להשתמש בו: משתנה שנוצר בתוך `{ }` קיים רק שם.",
        "ru": "Если создать `sum` внутри цикла, он создаётся заново с 0 на каждом круге, и сумма теряется. И после цикла его нельзя использовать: переменная, созданная внутри `{ }`, живёт только там.",
        "en": "If you create `sum` inside the loop, it is created again with 0 every round, and the sum is lost. And after the loop you cannot use it: a variable created inside `{ }` exists only there."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "ספירה לאחור עם `i--`, והשתקת קוד עם `//`",
        "ru": "Обратный отсчёт с `i--` и отключение кода через `//`",
        "en": "Counting down with `i--`, and turning code off with `//`"
      },
      "text": {
        "he": "לולאת for יכולה ללכת גם אחורה: מתחילים ממספר גדול, התנאי הוא \"כל עוד `i > 0`\", והקידום `i--`. המתרגל אמר שמשתמשים בזה הרבה.\nועוד טיפ: אם יש קטע קוד שלא רוצים שירוץ, לא חייבים למחוק אותו. שמים `//` בתחילת השורה, והיא הופכת להערה.",
        "ru": "Цикл for умеет идти и назад: начинаем с большого числа, условие «пока `i > 0`», шаг `i--`. Ведущий сказал, что это используют часто.\nИ ещё совет: если кусок кода не должен выполняться, его не обязательно удалять. Ставим `//` в начале строки, и она становится комментарием.",
        "en": "A for loop can also go backwards: start from a big number, the condition is \"while `i > 0`\", and the step is `i--`. The instructor said it is used a lot.\nAnd one more tip: if there is a piece of code you don't want to run, you don't have to delete it. Put `//` at the start of the line and it becomes a comment."
      },
      "math": [
        "for (int i = 5; i > 0; i--) {",
        "    System.out.println(i);",
        "}",
        "// System.out.println(\"this line is turned off\");"
      ],
      "why": {
        "he": "ב־`i--` התנאי חייב \"להסתכל\" לכיוון השני (`i > 0` ולא `i < 5`). אחרת או שהלולאה לא תרוץ בכלל, או שלא תיגמר. השתקה עם `//` נוחה כשבודקים משהו: מחזירים את השורה במחיקה של שני תווים.",
        "ru": "При `i--` условие должно «смотреть» в другую сторону (`i > 0`, а не `i < 5`). Иначе цикл либо не выполнится ни разу, либо не закончится. Отключение через `//` удобно при проверке: строку возвращают, стерев два символа.",
        "en": "With `i--` the condition must \"look\" the other way (`i > 0`, not `i < 5`). Otherwise the loop either never runs or never ends. Turning off with `//` is handy when testing: you bring the line back by deleting two characters."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "while: קולטים עד שמקלידים 5",
        "ru": "while: вводим, пока не введут 5",
        "en": "while: read until 5 is typed"
      },
      "text": {
        "he": "כשלא יודעים מראש כמה פעמים, לוקחים while. התרגיל: לבקש מספרים עד שהמשתמש מקליד 5.\nהמספר הראשון נקלט לפני הלולאה. התנאי `num != 5`: כל עוד המספר שונה מ־5, מבקשים עוד אחד. כשמקלידים 5, התנאי נותן `false`, ולא נכנסים יותר ללולאה.\nבתרגול הקלידו 12, אחר כך עוד מספר, ובסוף 5, והלולאה נגמרה.",
        "ru": "Когда заранее неизвестно, сколько раз, берут while. Задача: просить числа, пока пользователь не введёт 5.\nПервое число читается до цикла. Условие `num != 5`: пока число не 5, просим ещё одно. Когда ввели 5, условие даёт `false`, и в цикл больше не заходим.\nНа практике ввели 12, потом ещё число и в конце 5, и цикл закончился.",
        "en": "When you don't know in advance how many times, use while. The exercise: ask for numbers until the user types 5.\nThe first number is read before the loop. The condition `num != 5`: as long as the number is not 5, ask for another. When 5 is typed, the condition gives `false`, and we don't enter the loop again.\nIn practice they typed 12, then another number and finally 5, and the loop ended."
      },
      "math": [
        "Scanner input = new Scanner(System.in);",
        "System.out.print(\"Enter number: \");",
        "int num = input.nextInt();",
        "while (num != 5) {",
        "    System.out.print(\"Enter number: \");",
        "    num = input.nextInt();",
        "}",
        "System.out.println(\"You entered 5, bye\");"
      ],
      "why": {
        "he": "for מתאים כשמספר הסיבובים ידוע (3 מספרים). כאן הוא תלוי במשתמש, ולכן while. הקליטה בתוך הלולאה היא מה שמשנה את `num`. בלעדיה התנאי לא ישתנה והלולאה לא תיגמר.",
        "ru": "for подходит, когда число кругов известно (3 числа). Здесь оно зависит от пользователя, поэтому while. Ввод внутри цикла — это то, что меняет `num`. Без него условие не изменится, и цикл не закончится.",
        "en": "for suits a known number of rounds (3 numbers). Here it depends on the user, so while. The read inside the loop is what changes `num`. Without it the condition never changes and the loop never ends."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "תרגיל: כל המספרים שמתחלקים ב־5",
        "ru": "Задача: все числа, которые делятся на 5",
        "en": "Exercise: all the numbers divisible by 5"
      },
      "text": {
        "he": "התרגיל: \"כתבו תוכנית שקולטת שני מספרים שלמים ומדפיסה את כל המספרים שמתחלקים ב־5 ביניהם\" (בתרגול: בין 10 ל־100).\n• לולאה: כן, for, כי יודעים מאיפה ועד איפה: `i` מ־`start` עד `end`.\n• מתחלק ב־5: שארית החלוקה היא 0, `i % 5 == 0`.\nהטעות שהייתה בכיתה: בדקו ומדפיסים את `start` במקום את `i`. אבל `start` לא משתנה אף פעם, משתנה רק `i`. לכן התוכנית לא מדפיסה את מה שצריך.",
        "ru": "Задача: «Напишите программу, которая читает два целых числа и печатает все числа между ними, которые делятся на 5» (на практике: между 10 и 100).\n• Цикл: да, for, потому что известно, откуда и докуда: `i` от `start` до `end`.\n• Делится на 5: остаток от деления 0, `i % 5 == 0`.\nОшибка, которая была в классе: проверяли и печатали `start` вместо `i`. Но `start` никогда не меняется, меняется только `i`. Поэтому программа печатает не то.",
        "en": "The exercise: \"Write a program that reads two whole numbers and prints all the numbers between them that are divisible by 5\" (in practice: between 10 and 100).\n• A loop: yes, for, because we know from where to where: `i` from `start` to `end`.\n• Divisible by 5: the remainder is 0, `i % 5 == 0`.\nThe mistake in class: `start` was checked and printed instead of `i`. But `start` never changes, only `i` does. So the program prints the wrong thing."
      },
      "math": [
        "Scanner input = new Scanner(System.in);",
        "System.out.println(\"Enter 2 numbers: \");",
        "int start = input.nextInt();",
        "int end = input.nextInt();",
        "for (int i = start; i <= end; i++) {",
        "    if (i % 5 == 0) {",
        "        System.out.println(i);",
        "    }",
        "}"
      ],
      "why": {
        "he": "בלולאה המשתנה שזז הוא `i`. `start` הוא רק המקום שממנו `i` התחיל. אם הבדיקה על `start`, התשובה זהה בכל סיבוב: או שהוא מודפס בכל סיבוב, או אף פעם. ראו את המשימה \"הטעות עם start\".",
        "ru": "В цикле движется переменная `i`. `start` — только место, откуда `i` стартовал. Если проверять `start`, ответ на каждом круге одинаковый: либо он печатается на каждом круге, либо ни разу. См. задачу «Ошибка со start».",
        "en": "In the loop the variable that moves is `i`. `start` is only where `i` began. If you check `start`, the answer is the same every round: it is either printed every round or never. See the task \"The start mistake\"."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "תרגיל: \"מספר יפה\"",
        "ru": "Задача: «красивое число»",
        "en": "Exercise: a \"beautiful number\""
      },
      "text": {
        "he": "\"מספר יפה\" הוא מספר שהספרה הראשונה שלו שווה לאחרונה. 121 יפה (מתחיל ב־1 ונגמר ב־1), ‏124 ו־152 לא.\n\"חוק ברזל\" מהמתרגל: `num % 10` נותן תמיד את הספרה האחרונה.\nאת הספרה הראשונה מוצאים בלולאה: כל עוד המספר גדול מ־9 (יש בו יותר מספרה אחת), מוחקים ממנו את הספרה האחרונה עם `num /= 10`. ‏`121 → 12 → 1`. מה שנשאר זו הספרה הראשונה.\nבסוף משווים. (ההודעות בהדפסה הן שלנו.)",
        "ru": "«Красивое число» — число, у которого первая цифра равна последней. 121 красивое (начинается на 1 и кончается на 1), а 124 и 152 нет.\n«Железное правило» ведущего: `num % 10` всегда даёт последнюю цифру.\nПервую цифру находим циклом: пока число больше 9 (в нём больше одной цифры), стираем последнюю цифру через `num /= 10`. 121 → 12 → 1. То, что осталось, и есть первая цифра.\nВ конце сравниваем. (Тексты сообщений придуманы нами.)",
        "en": "A \"beautiful number\" is one whose first digit equals its last. 121 is beautiful (starts with 1 and ends with 1), 124 and 152 are not.\nThe instructor's \"iron rule\": `num % 10` always gives the last digit.\nThe first digit is found with a loop: while the number is greater than 9 (it has more than one digit), erase its last digit with `num /= 10`. 121 → 12 → 1. What is left is the first digit.\nAt the end, compare. (The printed messages are ours.)"
      },
      "math": [
        "Scanner input = new Scanner(System.in);",
        "System.out.print(\"Enter number: \");",
        "int num = input.nextInt();",
        "int last = num % 10;",
        "while (num > 9) {",
        "    num /= 10;",
        "}",
        "if (num == last) {",
        "    System.out.println(\"beautiful number\");",
        "} else {",
        "    System.out.println(\"not a beautiful number\");",
        "}"
      ],
      "why": {
        "he": "`/ 10` בין שני int זורק את מה שאחרי הנקודה: `121 / 10 = 12.1`, ונשאר `12`. את הספרה האחרונה שומרים ב־`last` לפני הלולאה, כי אחרי הלולאה `num` כבר השתנה. למה `num > 9` ולא `num > 0`? כי עם `> 0` הלולאה הייתה מוחקת גם את הספרה הראשונה, ונשאר 0.",
        "ru": "`/ 10` между двумя int отбрасывает всё после точки: `121 / 10` — это 12.1, остаётся 12. Последнюю цифру сохраняем в `last` до цикла, потому что после цикла `num` уже изменился. Почему `num > 9`, а не `num > 0`? Потому что с `> 0` цикл стёр бы и первую цифру, и остался бы 0.",
        "en": "`/ 10` between two ints drops everything after the point: `121 / 10` is 12.1, and 12 stays. The last digit is saved in `last` before the loop, because after the loop `num` has already changed. Why `num > 9` and not `num > 0`? Because with `> 0` the loop would erase the first digit too, leaving 0."
      }
    }
  ],
  "review": [
    {
      "title": {
        "he": "`=` מול `==`",
        "ru": "`=` и `==`",
        "en": "`=` vs `==`"
      },
      "text": {
        "he": "`=` שם ערך. `==` שואל \"שווה?\".",
        "ru": "`=` кладёт значение. `==` спрашивает «равно?».",
        "en": "`=` stores a value. `==` asks \"equal?\"."
      }
    },
    {
      "title": {
        "he": "`&&` ו־`||`",
        "ru": "`&&` и `||`",
        "en": "`&&` and `||`"
      },
      "text": {
        "he": "`&&` שניהם. `||` לפחות אחד, ואם הראשון נכון השני לא נבדק.",
        "ru": "`&&` оба. `||` хотя бы одно, и если первое верно, второе не проверяется.",
        "en": "`&&` both. `||` at least one, and if the first is true the second is not checked."
      }
    },
    {
      "title": {
        "he": "`else if`",
        "ru": "`else if`",
        "en": "`else if`"
      },
      "text": {
        "he": "נכנסים לענף אחד לכל היותר. `if`ים נפרדים נבדקים כולם.",
        "ru": "Заходим максимум в одну ветку. Отдельные `if` проверяются все.",
        "en": "At most one branch runs. Separate `if`s are all checked."
      }
    },
    {
      "title": {
        "he": "for",
        "ru": "for",
        "en": "for"
      },
      "text": {
        "he": "`for (int i = 0; i < N; i++)` → בדיוק N סיבובים.",
        "ru": "`for (int i = 0; i < N; i++)` → ровно N кругов.",
        "en": "`for (int i = 0; i < N; i++)` → exactly N rounds."
      }
    },
    {
      "title": {
        "he": "סכום",
        "ru": "Сумма",
        "en": "Sum"
      },
      "text": {
        "he": "`int sum = 0;` לפני הלולאה, `sum += num;` בתוכה.",
        "ru": "`int sum = 0;` до цикла, `sum += num;` внутри.",
        "en": "`int sum = 0;` before the loop, `sum += num;` inside."
      }
    },
    {
      "title": {
        "he": "while",
        "ru": "while",
        "en": "while"
      },
      "text": {
        "he": "לא יודעים כמה פעמים → while. קולטים לפני הלולאה ובתוכה.",
        "ru": "Неизвестно, сколько раз → while. Читаем до цикла и внутри.",
        "en": "Unknown number of times → while. Read before the loop and inside it."
      }
    },
    {
      "title": {
        "he": "ספרות",
        "ru": "Цифры",
        "en": "Digits"
      },
      "text": {
        "he": "`num % 10` הספרה האחרונה. `num /= 10` מוחק אותה.",
        "ru": "`num % 10` — последняя цифра. `num /= 10` стирает её.",
        "en": "`num % 10` is the last digit. `num /= 10` erases it."
      }
    }
  ],
  "tasks": {
    "groups": {
      "cond": {
        "he": "תנאים",
        "ru": "Условия",
        "en": "Conditions"
      },
      "loops": {
        "he": "לולאות",
        "ru": "Циклы",
        "en": "Loops"
      },
      "ex": {
        "he": "תרגילים מהתרגול",
        "ru": "Задачи с практики",
        "en": "Exercises from practice"
      }
    },
    "teacher": [
      {
        "id": "t1",
        "group": "cond",
        "label": {
          "he": "מי גדול?",
          "ru": "Кто больше?",
          "en": "Which is bigger?"
        },
        "kind": "text",
        "text": {
          "he": "זו התוכנית מהתרגול שמשווה בין שני מספרים.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Enter 2 numbers: \");\nint num1 = input.nextInt();\nint num2 = input.nextInt();\nif (num1 > num2) {\n    System.out.println(num1 + \" is bigger\");\n} else if (num1 < num2) {\n    System.out.println(num2 + \" is bigger\");\n} else {\n    System.out.println(\"equal\");\n}\n```\nהמשתמש הקליד, אחד אחרי השני: `4, 9`. מה יודפס בשורה האחרונה?",
          "ru": "Это программа с практики, которая сравнивает два числа.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Enter 2 numbers: \");\nint num1 = input.nextInt();\nint num2 = input.nextInt();\nif (num1 > num2) {\n    System.out.println(num1 + \" is bigger\");\n} else if (num1 < num2) {\n    System.out.println(num2 + \" is bigger\");\n} else {\n    System.out.println(\"equal\");\n}\n```\nПользователь по очереди ввёл: 4, 9. Что напечатается последней строкой?",
          "en": "This is the program from practice that compares two numbers.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Enter 2 numbers: \");\nint num1 = input.nextInt();\nint num2 = input.nextInt();\nif (num1 > num2) {\n    System.out.println(num1 + \" is bigger\");\n} else if (num1 < num2) {\n    System.out.println(num2 + \" is bigger\");\n} else {\n    System.out.println(\"equal\");\n}\n```\nThe user typed one after another: 4, 9. What is printed on the last line?"
        },
        "example": {
          "he": "המשתמש הקליד `8, 3` → `8 > 3` נכון → מודפס `8 is bigger`, ושני הענפים האחרים לא נבדקים.",
          "ru": "Пользователь ввёл 8, 3 → `8 > 3` верно → печатается `8 is bigger`, две другие ветки не проверяются.",
          "en": "The user typed 8, 3 → `8 > 3` is true → `8 is bigger` is printed, the other two branches are not checked."
        },
        "answer": {
          "accept": [
            "9 is bigger"
          ]
        },
        "hints": [
          {
            "he": "איזה מספר נמצא ב־`num2`?",
            "ru": "Какое число лежит в `num2`?",
            "en": "Which number is in `num2`?"
          }
        ],
        "solution": [
          "num1 = 4, num2 = 9",
          "4 > 9  false",
          "4 < 9  true  →  num2 + \" is bigger\"",
          {
            "he": "תשובה: 9 is bigger",
            "ru": "Ответ: 9 is bigger",
            "en": "Answer: 9 is bigger"
          }
        ]
      },
      {
        "id": "t2",
        "group": "cond",
        "label": {
          "he": "if נפרדים",
          "ru": "Отдельные if",
          "en": "Separate ifs"
        },
        "kind": "number",
        "text": {
          "he": "כאן שלושה `if` נפרדים, בלי `else`.\n```\nint x = 15;\nif (x > 10) {\n    System.out.println(\"big\");\n}\nif (x > 5) {\n    System.out.println(\"medium\");\n}\nif (x <= 5) {\n    System.out.println(\"small\");\n}\n```\nכמה שורות התוכנית תדפיס?",
          "ru": "Здесь три отдельных `if`, без `else`.\n```\nint x = 15;\nif (x > 10) {\n    System.out.println(\"big\");\n}\nif (x > 5) {\n    System.out.println(\"medium\");\n}\nif (x <= 5) {\n    System.out.println(\"small\");\n}\n```\nСколько строк напечатает программа?",
          "en": "Here are three separate `if`s, without `else`.\n```\nint x = 15;\nif (x > 10) {\n    System.out.println(\"big\");\n}\nif (x > 5) {\n    System.out.println(\"medium\");\n}\nif (x <= 5) {\n    System.out.println(\"small\");\n}\n```\nHow many lines does the program print?"
        },
        "example": {
          "he": "אותה תוכנית עם `x = 3`:\n```\nint x = 3;\nif (x > 10) {\n    System.out.println(\"big\");\n}\nif (x > 5) {\n    System.out.println(\"medium\");\n}\nif (x <= 5) {\n    System.out.println(\"small\");\n}\n```\n`3 > 10` לא, `3 > 5` לא, `3 <= 5` כן → שורה אחת: `small`.",
          "ru": "Та же программа с `x = 3`:\n```\nint x = 3;\nif (x > 10) {\n    System.out.println(\"big\");\n}\nif (x > 5) {\n    System.out.println(\"medium\");\n}\nif (x <= 5) {\n    System.out.println(\"small\");\n}\n```\n`3 > 10` нет, `3 > 5` нет, `3 <= 5` да → одна строка: `small`.",
          "en": "The same program with `x = 3`:\n```\nint x = 3;\nif (x > 10) {\n    System.out.println(\"big\");\n}\nif (x > 5) {\n    System.out.println(\"medium\");\n}\nif (x <= 5) {\n    System.out.println(\"small\");\n}\n```\n`3 > 10` no, `3 > 5` no, `3 <= 5` yes → one line: `small`."
        },
        "answer": {
          "value": "2"
        },
        "hints": [
          {
            "he": "כל `if` נבדק לבד, גם אם הקודם כבר הדפיס.",
            "ru": "Каждый `if` проверяется сам по себе, даже если предыдущий уже напечатал.",
            "en": "Each `if` is checked on its own, even if the previous one already printed."
          }
        ],
        "solution": [
          "15 > 10  true  →  big",
          "15 > 5  true  →  medium",
          "15 <= 5  false",
          {
            "he": "תשובה: 2 (עם `else if` הייתה רק `big`)",
            "ru": "Ответ: 2 (с `else if` была бы только `big`)",
            "en": "Answer: 2 (with `else if` only `big`)"
          }
        ]
      },
      {
        "id": "t3",
        "group": "cond",
        "label": {
          "he": "&& ו־||",
          "ru": "&& и ||",
          "en": "&& and ||"
        },
        "kind": "text",
        "text": {
          "he": "שני תנאים עם `&&` ועם `||`.\n```\nint age = 16;\nif (age > 17 && age < 50) {\n    System.out.println(\"A\");\n} else {\n    System.out.println(\"B\");\n}\nif (age < 18 || age > 65) {\n    System.out.println(\"C\");\n} else {\n    System.out.println(\"D\");\n}\n```\nמה התוכנית תדפיס? כתבו את שתי האותיות עם רווח.",
          "ru": "Два условия: с `&&` и с `||`.\n```\nint age = 16;\nif (age > 17 && age < 50) {\n    System.out.println(\"A\");\n} else {\n    System.out.println(\"B\");\n}\nif (age < 18 || age > 65) {\n    System.out.println(\"C\");\n} else {\n    System.out.println(\"D\");\n}\n```\nЧто напечатает программа? Напиши обе буквы через пробел.",
          "en": "Two conditions, with `&&` and with `||`.\n```\nint age = 16;\nif (age > 17 && age < 50) {\n    System.out.println(\"A\");\n} else {\n    System.out.println(\"B\");\n}\nif (age < 18 || age > 65) {\n    System.out.println(\"C\");\n} else {\n    System.out.println(\"D\");\n}\n```\nWhat does the program print? Write both letters with a space."
        },
        "example": {
          "he": "אותה תוכנית עם `age = 30`: `30 > 17 && 30 < 50` → שניהם נכונים → `A`. ‏`30 < 18 || 30 > 65` → שניהם לא → `D`. מודפס `A D`.",
          "ru": "Та же программа с `age = 30`: `30 > 17 && 30 < 50` → оба верны → `A`. `30 < 18 || 30 > 65` → оба неверны → `D`. Печатается `A D`.",
          "en": "The same program with `age = 30`: `30 > 17 && 30 < 50` → both true → `A`. `30 < 18 || 30 > 65` → both false → `D`. Prints `A D`."
        },
        "answer": {
          "accept": [
            "B C",
            "B, C",
            "BC",
            "B,C"
          ]
        },
        "hints": [
          {
            "he": "ב־`&&` מספיק שאחד לא נכון.",
            "ru": "В `&&` достаточно, чтобы одно было неверно.",
            "en": "For `&&` one false is enough."
          }
        ],
        "solution": [
          "16 > 17  false  →  && false  →  B",
          "16 < 18  true  →  || true  →  C",
          {
            "he": "תשובה: B C",
            "ru": "Ответ: B C",
            "en": "Answer: B C"
          }
        ]
      },
      {
        "id": "t4",
        "group": "cond",
        "label": {
          "he": "`!`",
          "ru": "`!`",
          "en": "`!`"
        },
        "kind": "text",
        "text": {
          "he": "תנאי עם `!`.\n```\nint x = 5;\nif (!(x == 5)) {\n    System.out.println(\"not five\");\n} else {\n    System.out.println(\"five\");\n}\n```\nמה התוכנית תדפיס?",
          "ru": "Условие с `!`.\n```\nint x = 5;\nif (!(x == 5)) {\n    System.out.println(\"not five\");\n} else {\n    System.out.println(\"five\");\n}\n```\nЧто напечатает программа?",
          "en": "A condition with `!`.\n```\nint x = 5;\nif (!(x == 5)) {\n    System.out.println(\"not five\");\n} else {\n    System.out.println(\"five\");\n}\n```\nWhat does the program print?"
        },
        "example": {
          "he": "עם `x = 8`: `8 == 5` לא נכון → `!` הופך ל־`true` → מודפס `not five`.",
          "ru": "С `x = 8`: `8 == 5` неверно → `!` переворачивает в `true` → печатается `not five`.",
          "en": "With `x = 8`: `8 == 5` is false → `!` flips it to `true` → `not five` is printed."
        },
        "answer": {
          "accept": [
            "five"
          ]
        },
        "hints": [
          {
            "he": "קודם מחשבים את מה שבסוגריים, אחר כך הופכים.",
            "ru": "Сначала считаем то, что в скобках, потом переворачиваем.",
            "en": "First work out what is in the brackets, then flip it."
          }
        ],
        "solution": [
          "x == 5  →  true",
          "!true  →  false  →  else",
          {
            "he": "תשובה: five",
            "ru": "Ответ: five",
            "en": "Answer: five"
          }
        ]
      },
      {
        "id": "t5",
        "group": "loops",
        "label": {
          "he": "סכום",
          "ru": "Сумма",
          "en": "Sum"
        },
        "kind": "number",
        "text": {
          "he": "סכום של 3 מספרים בלולאת for.\n```\nScanner input = new Scanner(System.in);\nint sum = 0;\nfor (int i = 0; i < 3; i++) {\n    System.out.println(\"Enter number: \");\n    int num = input.nextInt();\n    sum += num;\n}\nSystem.out.println(sum);\n```\nהמשתמש הקליד, אחד אחרי השני: `4, 6, 5`. איזה מספר יודפס בשורה האחרונה?",
          "ru": "Сумма 3 чисел в цикле for.\n```\nScanner input = new Scanner(System.in);\nint sum = 0;\nfor (int i = 0; i < 3; i++) {\n    System.out.println(\"Enter number: \");\n    int num = input.nextInt();\n    sum += num;\n}\nSystem.out.println(sum);\n```\nПользователь по очереди ввёл: 4, 6, 5. Какое число напечатается последней строкой?",
          "en": "The sum of 3 numbers in a for loop.\n```\nScanner input = new Scanner(System.in);\nint sum = 0;\nfor (int i = 0; i < 3; i++) {\n    System.out.println(\"Enter number: \");\n    int num = input.nextInt();\n    sum += num;\n}\nSystem.out.println(sum);\n```\nThe user typed one after another: 4, 6, 5. Which number is printed on the last line?"
        },
        "example": {
          "he": "המשתמש הקליד `2, 2, 3` → `sum`: `0 → 2 → 4 → 7` → מודפס 7.",
          "ru": "Пользователь ввёл 2, 2, 3 → `sum`: 0 → 2 → 4 → 7 → печатается 7.",
          "en": "The user typed 2, 2, 3 → `sum`: 0 → 2 → 4 → 7 → 7 is printed."
        },
        "answer": {
          "value": "15"
        },
        "hints": [
          {
            "he": "כתבו את `sum` אחרי כל סיבוב.",
            "ru": "Выписывай `sum` после каждого круга.",
            "en": "Write `sum` after each round."
          }
        ],
        "solution": [
          "i = 0: sum = 0 + 4 = 4",
          "i = 1: sum = 4 + 6 = 10",
          "i = 2: sum = 10 + 5 = 15",
          "i = 3: 3 < 3 false",
          {
            "he": "תשובה: 15",
            "ru": "Ответ: 15",
            "en": "Answer: 15"
          }
        ]
      },
      {
        "id": "t6",
        "group": "loops",
        "label": {
          "he": "אחורה בקפיצות",
          "ru": "Назад с шагом",
          "en": "Backwards in steps"
        },
        "kind": "text",
        "text": {
          "he": "ספירה לאחור, הפעם בקפיצות של 2.\n```\nfor (int i = 9; i > 0; i -= 2) {\n    System.out.println(i);\n}\n```\nאילו מספרים יודפסו? כתבו אותם עם רווח.",
          "ru": "Обратный отсчёт, на этот раз с шагом 2.\n```\nfor (int i = 9; i > 0; i -= 2) {\n    System.out.println(i);\n}\n```\nКакие числа напечатаются? Напиши их через пробел.",
          "en": "Counting down, this time in steps of 2.\n```\nfor (int i = 9; i > 0; i -= 2) {\n    System.out.println(i);\n}\n```\nWhich numbers are printed? Write them with spaces."
        },
        "example": {
          "he": "```\nfor (int i = 3; i > 0; i--) {\n    System.out.println(i);\n}\n```\n`3 → 2 → 1` → `i = 0`, ‏`0 > 0` לא נכון → מודפס 3 2 1.",
          "ru": "```\nfor (int i = 3; i > 0; i--) {\n    System.out.println(i);\n}\n```\n3 → 2 → 1 → `i = 0`, `0 > 0` неверно → печатается 3 2 1.",
          "en": "```\nfor (int i = 3; i > 0; i--) {\n    System.out.println(i);\n}\n```\n3 → 2 → 1 → `i = 0`, `0 > 0` is false → prints 3 2 1."
        },
        "answer": {
          "accept": [
            "9 7 5 3 1",
            "9, 7, 5, 3, 1",
            "97531"
          ]
        },
        "hints": [
          {
            "he": "`i -= 2` מוריד 2 בכל סיבוב.",
            "ru": "`i -= 2` отнимает 2 на каждом круге.",
            "en": "`i -= 2` takes away 2 every round."
          }
        ],
        "solution": [
          "9, 7, 5, 3, 1",
          "i = -1:  -1 > 0  false",
          {
            "he": "תשובה: 9 7 5 3 1",
            "ru": "Ответ: 9 7 5 3 1",
            "en": "Answer: 9 7 5 3 1"
          }
        ]
      },
      {
        "id": "t7",
        "group": "loops",
        "label": {
          "he": "עד 5",
          "ru": "До 5",
          "en": "Until 5"
        },
        "kind": "number",
        "text": {
          "he": "while שסופר מספרים עד שמקלידים 5.\n```\nScanner input = new Scanner(System.in);\nint count = 0;\nint num = input.nextInt();\nwhile (num != 5) {\n    count++;\n    num = input.nextInt();\n}\nSystem.out.println(count);\n```\nהמשתמש הקליד, אחד אחרי השני: `12, 3, 8, 5, 7`. מה התוכנית תדפיס?",
          "ru": "while, который считает числа, пока не введут 5.\n```\nScanner input = new Scanner(System.in);\nint count = 0;\nint num = input.nextInt();\nwhile (num != 5) {\n    count++;\n    num = input.nextInt();\n}\nSystem.out.println(count);\n```\nПользователь по очереди ввёл: 12, 3, 8, 5, 7. Что напечатает программа?",
          "en": "A while that counts numbers until 5 is typed.\n```\nScanner input = new Scanner(System.in);\nint count = 0;\nint num = input.nextInt();\nwhile (num != 5) {\n    count++;\n    num = input.nextInt();\n}\nSystem.out.println(count);\n```\nThe user typed one after another: 12, 3, 8, 5, 7. What does the program print?"
        },
        "example": {
          "he": "המשתמש הקליד `1, 5` → ‏1 שונה מ־5 → `count = 1` → נקלט 5 → `5 != 5` לא נכון → מודפס 1.",
          "ru": "Пользователь ввёл 1, 5 → 1 не равно 5 → `count = 1` → прочитано 5 → `5 != 5` неверно → печатается 1.",
          "en": "The user typed 1, 5 → 1 is not 5 → `count = 1` → 5 is read → `5 != 5` is false → 1 is printed."
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "ה־5 עצמו לא נספר. ומה עם ה־7?",
            "ru": "Сама 5 не считается. А что с 7?",
            "en": "The 5 itself is not counted. And the 7?"
          }
        ],
        "solution": [
          "12 → count = 1",
          "3 → count = 2",
          "8 → count = 3",
          "5 → 5 != 5 false → stop (7 is never read)",
          {
            "he": "תשובה: 3",
            "ru": "Ответ: 3",
            "en": "Answer: 3"
          }
        ]
      },
      {
        "id": "t8",
        "group": "ex",
        "label": {
          "he": "מתחלקים ב־5",
          "ru": "Делятся на 5",
          "en": "Divisible by 5"
        },
        "kind": "text",
        "text": {
          "he": "זו התוכנית של התרגיל \"מתחלקים ב־5\".\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Enter 2 numbers: \");\nint start = input.nextInt();\nint end = input.nextInt();\nfor (int i = start; i <= end; i++) {\n    if (i % 5 == 0) {\n        System.out.println(i);\n    }\n}\n```\nהמשתמש הקליד, אחד אחרי השני: `12, 31`. אילו מספרים יודפסו אחרי ההודעה? כתבו אותם עם רווח.",
          "ru": "Это программа задачи «делятся на 5».\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Enter 2 numbers: \");\nint start = input.nextInt();\nint end = input.nextInt();\nfor (int i = start; i <= end; i++) {\n    if (i % 5 == 0) {\n        System.out.println(i);\n    }\n}\n```\nПользователь по очереди ввёл: 12, 31. Какие числа напечатаются после сообщения? Напиши их через пробел.",
          "en": "This is the program of the \"divisible by 5\" exercise.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Enter 2 numbers: \");\nint start = input.nextInt();\nint end = input.nextInt();\nfor (int i = start; i <= end; i++) {\n    if (i % 5 == 0) {\n        System.out.println(i);\n    }\n}\n```\nThe user typed one after another: 12, 31. Which numbers are printed after the message? Write them with spaces."
        },
        "example": {
          "he": "המשתמש הקליד `3, 11` → `i` עובר 3 … 11 → מתחלקים ב־5: `5, 10` → מודפס 5 10.",
          "ru": "Пользователь ввёл 3, 11 → `i` проходит 3 … 11 → делятся на 5: 5, 10 → печатается 5 10.",
          "en": "The user typed 3, 11 → `i` goes 3 … 11 → divisible by 5: 5, 10 → prints 5 10."
        },
        "answer": {
          "accept": [
            "15 20 25 30",
            "15, 20, 25, 30"
          ]
        },
        "hints": [
          {
            "he": "`i <= end`: גם 31 נבדק, אבל הוא לא מתחלק.",
            "ru": "`i <= end`: 31 тоже проверяется, но не делится.",
            "en": "`i <= end`: 31 is checked too, but it does not divide."
          }
        ],
        "solution": [
          "i = 12 … 31",
          "i % 5 == 0:  15, 20, 25, 30",
          {
            "he": "תשובה: 15 20 25 30",
            "ru": "Ответ: 15 20 25 30",
            "en": "Answer: 15 20 25 30"
          }
        ]
      },
      {
        "id": "t9",
        "group": "ex",
        "label": {
          "he": "הטעות עם start",
          "ru": "Ошибка со start",
          "en": "The start mistake"
        },
        "kind": "choice",
        "text": {
          "he": "זו הגרסה עם הטעות מהכיתה: בודקים ומדפיסים את `start` במקום את `i`.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Enter 2 numbers: \");\nint start = input.nextInt();\nint end = input.nextInt();\nfor (int i = start; i <= end; i++) {\n    if (start % 5 == 0) {\n        System.out.println(start);\n    }\n}\n```\nהמשתמש הקליד, אחד אחרי השני: `12, 20`. מה יודפס אחרי ההודעה?",
          "ru": "Это версия с ошибкой из класса: проверяют и печатают `start` вместо `i`.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Enter 2 numbers: \");\nint start = input.nextInt();\nint end = input.nextInt();\nfor (int i = start; i <= end; i++) {\n    if (start % 5 == 0) {\n        System.out.println(start);\n    }\n}\n```\nПользователь по очереди ввёл: 12, 20. Что напечатается после сообщения?",
          "en": "This is the version with the mistake from class: `start` is checked and printed instead of `i`.\n```\nScanner input = new Scanner(System.in);\nSystem.out.println(\"Enter 2 numbers: \");\nint start = input.nextInt();\nint end = input.nextInt();\nfor (int i = start; i <= end; i++) {\n    if (start % 5 == 0) {\n        System.out.println(start);\n    }\n}\n```\nThe user typed one after another: 12, 20. What is printed after the message?"
        },
        "options": [
          {
            "he": "15 20",
            "ru": "15 20",
            "en": "15 20"
          },
          {
            "he": "לא יודפס כלום",
            "ru": "Ничего не напечатается",
            "en": "Nothing is printed"
          },
          {
            "he": "12 יודפס 9 פעמים",
            "ru": "12 напечатается 9 раз",
            "en": "12 is printed 9 times"
          },
          {
            "he": "הלולאה לא תיגמר",
            "ru": "Цикл никогда не закончится",
            "en": "The loop never ends"
          }
        ],
        "example": {
          "he": "המשתמש הקליד `10, 13` → `i` עובר `10, 11, 12, 13` (4 סיבובים) → בכל סיבוב `10 % 5 == 0` נכון → מודפס 10 ארבע פעמים.",
          "ru": "Пользователь ввёл 10, 13 → `i` проходит 10, 11, 12, 13 (4 круга) → на каждом круге `10 % 5 == 0` верно → 10 печатается четыре раза.",
          "en": "The user typed 10, 13 → `i` goes 10, 11, 12, 13 (4 rounds) → every round `10 % 5 == 0` is true → 10 is printed four times."
        },
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "מה הערך של `start` בכל סיבוב?",
            "ru": "Чему равен `start` на каждом круге?",
            "en": "What is `start` in every round?"
          }
        ],
        "solution": [
          "start = 12 (never changes)",
          "12 % 5 = 2  →  false, every round",
          {
            "he": "תשובה: לא יודפס כלום",
            "ru": "Ответ: ничего не напечатается",
            "en": "Answer: nothing is printed"
          }
        ]
      },
      {
        "id": "t10",
        "group": "ex",
        "label": {
          "he": "הספרה הראשונה",
          "ru": "Первая цифра",
          "en": "The first digit"
        },
        "kind": "number",
        "text": {
          "he": "הלולאה מ\"מספר יפה\" שמוצאת את הספרה הראשונה.\n```\nScanner input = new Scanner(System.in);\nint num = input.nextInt();\nwhile (num > 9) {\n    num /= 10;\n}\nSystem.out.println(num);\n```\nהמשתמש הקליד 47215. מה התוכנית תדפיס?",
          "ru": "Цикл из «красивого числа», который находит первую цифру.\n```\nScanner input = new Scanner(System.in);\nint num = input.nextInt();\nwhile (num > 9) {\n    num /= 10;\n}\nSystem.out.println(num);\n```\nПользователь ввёл 47215. Что напечатает программа?",
          "en": "The loop from \"beautiful number\" that finds the first digit.\n```\nScanner input = new Scanner(System.in);\nint num = input.nextInt();\nwhile (num > 9) {\n    num /= 10;\n}\nSystem.out.println(num);\n```\nThe user typed 47215. What does the program print?"
        },
        "example": {
          "he": "המשתמש הקליד 572. ‏`572 > 9` → ‏57. ‏`57 > 9` → ‏5. ‏`5 > 9` לא נכון → מודפס 5.",
          "ru": "Пользователь ввёл 572. `572 > 9` → 57. `57 > 9` → 5. `5 > 9` неверно → печатается 5.",
          "en": "The user typed 572. `572 > 9` → 57. `57 > 9` → 5. `5 > 9` is false → 5 is printed."
        },
        "answer": {
          "value": "4"
        },
        "hints": [
          {
            "he": "בכל סיבוב נמחקת הספרה האחרונה.",
            "ru": "Каждый круг стирается последняя цифра.",
            "en": "Each round the last digit is erased."
          }
        ],
        "solution": [
          "47215 → 4721 → 472 → 47 → 4",
          "4 > 9  false",
          {
            "he": "תשובה: 4",
            "ru": "Ответ: 4",
            "en": "Answer: 4"
          }
        ]
      },
      {
        "id": "t11",
        "group": "ex",
        "label": {
          "he": "מספר יפה?",
          "ru": "Красивое?",
          "en": "Beautiful?"
        },
        "kind": "choice",
        "text": {
          "he": "זו תוכנית \"מספר יפה\" מהתרגול.\n```\nScanner input = new Scanner(System.in);\nSystem.out.print(\"Enter number: \");\nint num = input.nextInt();\nint last = num % 10;\nwhile (num > 9) {\n    num /= 10;\n}\nif (num == last) {\n    System.out.println(\"beautiful number\");\n} else {\n    System.out.println(\"not a beautiful number\");\n}\n```\nהמשתמש הקליד 3803. מה יודפס אחרי `Enter number: `?",
          "ru": "Это программа «красивое число» с практики.\n```\nScanner input = new Scanner(System.in);\nSystem.out.print(\"Enter number: \");\nint num = input.nextInt();\nint last = num % 10;\nwhile (num > 9) {\n    num /= 10;\n}\nif (num == last) {\n    System.out.println(\"beautiful number\");\n} else {\n    System.out.println(\"not a beautiful number\");\n}\n```\nПользователь ввёл 3803. Что напечатается после `Enter number: `?",
          "en": "This is the \"beautiful number\" program from practice.\n```\nScanner input = new Scanner(System.in);\nSystem.out.print(\"Enter number: \");\nint num = input.nextInt();\nint last = num % 10;\nwhile (num > 9) {\n    num /= 10;\n}\nif (num == last) {\n    System.out.println(\"beautiful number\");\n} else {\n    System.out.println(\"not a beautiful number\");\n}\n```\nThe user typed 3803. What is printed after `Enter number: `?"
        },
        "options": [
          {
            "he": "not a beautiful number",
            "ru": "not a beautiful number",
            "en": "not a beautiful number"
          },
          {
            "he": "beautiful number",
            "ru": "beautiful number",
            "en": "beautiful number"
          },
          {
            "he": "שום דבר",
            "ru": "Ничего",
            "en": "Nothing"
          },
          {
            "he": "הלולאה לא תיגמר",
            "ru": "Цикл никогда не закончится",
            "en": "The loop never ends"
          }
        ],
        "example": {
          "he": "המשתמש הקליד 4551 → `last = 1` → הלולאה: `455 → 45 → 4` → `4 == 1` לא נכון → `not a beautiful number`.",
          "ru": "Пользователь ввёл 4551 → `last = 1` → цикл: 455 → 45 → 4 → `4 == 1` неверно → `not a beautiful number`.",
          "en": "The user typed 4551 → `last = 1` → the loop: 455 → 45 → 4 → `4 == 1` is false → `not a beautiful number`."
        },
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "מה `3803 % 10`?",
            "ru": "Сколько `3803 % 10`?",
            "en": "What is `3803 % 10`?"
          }
        ],
        "solution": [
          "last = 3803 % 10 = 3",
          "3803 → 380 → 38 → 3",
          "3 == 3  →  true",
          {
            "he": "תשובה: beautiful number",
            "ru": "Ответ: beautiful number",
            "en": "Answer: beautiful number"
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
          "he": "קיצורים `+=`, `-=`, `++`.\n```\nint x = 7;\nx += 3;\nx -= 2;\nx++;\nSystem.out.println(x);\n```\nמה התוכנית תדפיס?",
          "ru": "Сокращения `+=`, `-=`, `++`.\n```\nint x = 7;\nx += 3;\nx -= 2;\nx++;\nSystem.out.println(x);\n```\nЧто напечатает программа?",
          "en": "The shortcuts `+=`, `-=`, `++`.\n```\nint x = 7;\nx += 3;\nx -= 2;\nx++;\nSystem.out.println(x);\n```\nWhat does the program print?"
        },
        "example": {
          "he": "עם `x = 1`: ‏1 + 3 = `4 → 4` − 2 = `2 → 2` + 1 = 3 → מודפס 3.",
          "ru": "С `x = 1`: 1 + 3 = 4 → 4 − 2 = 2 → 2 + 1 = 3 → печатается 3.",
          "en": "With `x = 1`: 1 + 3 = 4 → 4 − 2 = 2 → 2 + 1 = 3 → 3 is printed."
        },
        "answer": {
          "value": "9"
        },
        "hints": [
          {
            "he": "כל שורה משנה את `x`.",
            "ru": "Каждая строка меняет `x`.",
            "en": "Every line changes `x`."
          }
        ],
        "solution": [
          "x = 7",
          "x += 3  →  10",
          "x -= 2  →  8",
          "x++  →  9",
          {
            "he": "תשובה: 9",
            "ru": "Ответ: 9",
            "en": "Answer: 9"
          }
        ]
      },
      {
        "id": "a2",
        "level": 2,
        "label": "D2",
        "kind": "text",
        "text": {
          "he": "תנאי בתוך תנאי.\n```\nint x = 12;\nif (x > 10) {\n    if (x % 2 == 0) {\n        System.out.println(\"A\");\n    } else {\n        System.out.println(\"B\");\n    }\n} else {\n    System.out.println(\"C\");\n}\n```\nמה התוכנית תדפיס?",
          "ru": "Условие внутри условия.\n```\nint x = 12;\nif (x > 10) {\n    if (x % 2 == 0) {\n        System.out.println(\"A\");\n    } else {\n        System.out.println(\"B\");\n    }\n} else {\n    System.out.println(\"C\");\n}\n```\nЧто напечатает программа?",
          "en": "A condition inside a condition.\n```\nint x = 12;\nif (x > 10) {\n    if (x % 2 == 0) {\n        System.out.println(\"A\");\n    } else {\n        System.out.println(\"B\");\n    }\n} else {\n    System.out.println(\"C\");\n}\n```\nWhat does the program print?"
        },
        "example": {
          "he": "עם `x = 4`: `4 > 10` לא נכון → לפנימי לא מגיעים → `else` → `C`.",
          "ru": "С `x = 4`: `4 > 10` неверно → во внутреннее не попадаем → `else` → `C`.",
          "en": "With `x = 4`: `4 > 10` is false → we never reach the inner one → `else` → `C`."
        },
        "answer": {
          "accept": [
            "A"
          ]
        },
        "hints": [
          {
            "he": "קודם החיצוני.",
            "ru": "Сначала внешнее.",
            "en": "The outer one first."
          }
        ],
        "solution": [
          "12 > 10  true",
          "12 % 2 == 0  true  →  A",
          {
            "he": "תשובה: A",
            "ru": "Ответ: A",
            "en": "Answer: A"
          }
        ]
      },
      {
        "id": "a3",
        "level": 2,
        "label": "D3",
        "kind": "text",
        "text": {
          "he": "כמה פעמים מחקנו ספרה?\n```\nint num = 90817;\nint rounds = 0;\nwhile (num > 9) {\n    num /= 10;\n    rounds++;\n}\nSystem.out.println(num + \" \" + rounds);\n```\nמה התוכנית תדפיס? (שני מספרים עם רווח)",
          "ru": "Сколько раз стёрли цифру?\n```\nint num = 90817;\nint rounds = 0;\nwhile (num > 9) {\n    num /= 10;\n    rounds++;\n}\nSystem.out.println(num + \" \" + rounds);\n```\nЧто напечатает программа? (два числа через пробел)",
          "en": "How many times was a digit erased?\n```\nint num = 90817;\nint rounds = 0;\nwhile (num > 9) {\n    num /= 10;\n    rounds++;\n}\nSystem.out.println(num + \" \" + rounds);\n```\nWhat does the program print? (two numbers with a space)"
        },
        "example": {
          "he": "עם 352: ‏`352 → 35 → 3`, שני סיבובים → מודפס `3 2`.",
          "ru": "С 352: 352 → 35 → 3, два круга → печатается `3 2`.",
          "en": "With 352: 352 → 35 → 3, two rounds → prints `3 2`."
        },
        "answer": {
          "accept": [
            "9 4",
            "9, 4",
            "9,4"
          ]
        },
        "hints": [
          {
            "he": "במספר בן 5 ספרות מוחקים 4.",
            "ru": "В пятизначном числе стираем 4.",
            "en": "In a five-digit number you erase 4."
          }
        ],
        "solution": [
          "90817 → 9081 → 908 → 90 → 9",
          "rounds = 4",
          {
            "he": "תשובה: 9 4",
            "ru": "Ответ: 9 4",
            "en": "Answer: 9 4"
          }
        ]
      },
      {
        "id": "a4",
        "level": 3,
        "label": "D4",
        "kind": "number",
        "text": {
          "he": "for בקפיצות של 5.\n```\nint count = 0;\nfor (int i = 10; i <= 30; i += 5) {\n    count++;\n}\nSystem.out.println(count);\n```\nמה התוכנית תדפיס?",
          "ru": "for с шагом 5.\n```\nint count = 0;\nfor (int i = 10; i <= 30; i += 5) {\n    count++;\n}\nSystem.out.println(count);\n```\nЧто напечатает программа?",
          "en": "for in steps of 5.\n```\nint count = 0;\nfor (int i = 10; i <= 30; i += 5) {\n    count++;\n}\nSystem.out.println(count);\n```\nWhat does the program print?"
        },
        "example": {
          "he": "עם 0 עד 10: `0, 5`, `10 → 3` סיבובים → מודפס 3.",
          "ru": "С 0 до 10: 0, 5, 10 → 3 круга → печатается 3.",
          "en": "With 0 to 10: 0, 5, 10 → 3 rounds → 3 is printed."
        },
        "answer": {
          "value": "5"
        },
        "hints": [
          {
            "he": "`<=`: גם 30 נכנס.",
            "ru": "`<=`: 30 тоже входит.",
            "en": "`<=`: 30 is included."
          }
        ],
        "solution": [
          "i = 10, 15, 20, 25, 30",
          "count = 5",
          {
            "he": "תשובה: 5",
            "ru": "Ответ: 5",
            "en": "Answer: 5"
          }
        ]
      }
    ]
  }
};

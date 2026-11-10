/* Lesson data — format: see the comment at the top of data/lessons/math-2026-11-01.js.
   Every "what does it print" answer in this file was checked by compiling and running
   the Java code (javac/java 21) with the given input. */
window.LESSONS = window.LESSONS || {};
window.LESSONS["algo-2026-10-25"] = {
  "id": "algo-2026-10-25",
  "subject": "algo",
  "date": "2026-10-25",
  "title": {
    "he": "קלט, משפטי תנאי ואופרטורים לוגיים",
    "ru": "Ввод, условия и логические операторы",
    "en": "Input, conditions and logical operators"
  },
  "summary": {
    "he": "קלט עם `Scanner`, משפטי תנאי `if` / `else if` / `else`, האופרטורים `&&` ו־`||` וטבלת האמת, סדר פעולות, מקסימום של שלושה מספרים, ובסוף — התחלה של לולאת `for`.",
    "ru": "Ввод через `Scanner`, условия `if` / `else if` / `else`, операторы `&&` и `||` и таблица истинности, порядок действий, максимум из трёх чисел, а в конце — начало цикла `for`.",
    "en": "Input with `Scanner`, `if` / `else if` / `else` conditions, the `&&` and `||` operators and the truth table, order of operations, the maximum of three numbers, and at the end — the start of the `for` loop."
  },
  "timeline": [
    {
      "why": {
        "he": "בלי קלט התוכנית תמיד עושה אותו דבר. עם `Scanner` אותו קוד עובד לכל מספר שהמשתמש יקליד. `System.in` זו המקלדת, ולכן כותבים `new Scanner(System.in)` פעם אחת בלבד.\nמלכודת ידועה: אחרי `nextInt()` נשאר ה-Enter, ו-`nextLine()` שבא מיד אחריו מחזיר מחרוזת ריקה.",
        "ru": "Без ввода программа всегда делает одно и то же. Со `Scanner` один и тот же код работает с любым числом, которое наберёт человек. `System.in` — это клавиатура, поэтому `new Scanner(System.in)` пишут один раз.\nИзвестная ловушка: после `nextInt()` остаётся нажатый Enter, и `nextLine()` сразу после него возвращает пустую строку.",
        "en": "Without input a program always does the same thing. With `Scanner` the same code works for any number the user types. `System.in` is the keyboard, so you write `new Scanner(System.in)` only once.\nA known trap: after `nextInt()` the Enter stays behind, and a `nextLine()` right after it returns an empty string."
      },
      "kind": "board",
      "title": {
        "he": "קלט מהמשתמש",
        "ru": "Ввод с клавиатуры",
        "en": "Input from the user"
      },
      "text": {
        "he": "עד עכשיו המספרים היו כתובים בתוך הקוד. כדי שהתוכנית תשאל את המשתמש, משתמשים ב-`Scanner`. על הלוח זה נכתב בשני שלבים:\nשלב I — הגדרת אובייקט הקלט (פעם אחת, בתחילת `main`).\nשלב II — הגדרת המשתנה: התוכנית מחכה שהמשתמש יקליד ויקיש Enter.\nבראש הקובץ צריך `import java.util.Scanner;` (IntelliJ מוסיף אותו).",
        "ru": "До сих пор числа были записаны прямо в коде. Чтобы программа спрашивала человека, используют `Scanner`. На доске это записано в два этапа:\nЭтап I — создать объект ввода (один раз, в начале `main`).\nЭтап II — определить переменную: программа ждёт, пока человек наберёт значение и нажмёт Enter.\nВ начале файла нужен `import java.util.Scanner;` (IntelliJ добавляет его сам).",
        "en": "Until now the numbers were written inside the code. To make the program ask the user, we use `Scanner`. On the board it was written in two stages:\nStage I — create the input object (once, at the start of `main`).\nStage II — define the variable: the program waits for the user to type and press Enter.\nAt the top of the file you need `import java.util.Scanner;` (IntelliJ adds it)."
      },
      "math": [
        "Scanner scanner = new Scanner(System.in);",
        "int x = scanner.nextInt();",
        "double d = scanner.nextDouble();",
        "String s = scanner.nextLine();"
      ]
    },
    {
      "why": {
        "he": "`+` עם טקסט מחבר טקסטים, ו-Java עובדת משמאל לימין. בלי סוגריים: `\"your age is \" + 2026` הופך לטקסט `\"your age is 2026\"`, ומטקסט אי אפשר להחסיר — שגיאה. עם סוגריים קודם מחשבים את המספר.\nלכן `\"a\" + 1 + 2` נותן `a12`, אבל `1 + 2 + \"a\"` נותן `3a`.",
        "ru": "`+` с текстом склеивает тексты, и Java идёт слева направо. Без скобок `\"your age is \" + 2026` превращается в текст `\"your age is 2026\"`, а из текста вычитать нельзя — ошибка. Со скобками сначала считается число.\nПоэтому `\"a\" + 1 + 2` даёт `a12`, а `1 + 2 + \"a\"` даёт `3a`.",
        "en": "`+` with text joins texts, and Java goes left to right. Without brackets `\"your age is \" + 2026` becomes the text `\"your age is 2026\"`, and you cannot subtract from text — an error. With brackets the number is computed first.\nSo `\"a\" + 1 + 2` gives `a12`, but `1 + 2 + \"a\"` gives `3a`."
      },
      "kind": "board",
      "title": {
        "he": "פתרון על המסך: חישוב גיל (שאלה 4)",
        "ru": "Решение на экране: возраст (задание 4)",
        "en": "Solved on screen: age (question 4)"
      },
      "text": {
        "he": "המרצה פתר על המסך את שאלה 4 מדף העבודה. בקלט 1998 התוכנית הדפיסה `your age is 28.`\nהסוגריים סביב `(2026 - year)` חובה: בלעדיהם Java קודם מדביקה את הטקסט ל-2026, ומטקסט אי אפשר לחסר.",
        "ru": "Преподаватель решил на экране задание 4 из листа. При вводе 1998 программа напечатала `your age is 28.`\nСкобки вокруг `(2026 - year)` обязательны: без них Java сначала склеит текст с 2026, а из текста вычитать нельзя.",
        "en": "The teacher solved question 4 of the worksheet on screen. With input 1998 the program printed `your age is 28.`\nThe brackets around `(2026 - year)` are required: without them Java first glues the text to 2026, and you cannot subtract from text."
      },
      "math": [
        "System.out.println(\"Please enter year of birth: \");",
        "int year = scanner.nextInt();",
        "System.out.println(\"your age is \" + (2026 - year) + \".\");"
      ]
    },
    {
      "why": {
        "he": "תוכנית אמיתית צריכה להחליט: לתת הנחה או לא, לקבל סיסמה או לא. לכן התנאי חייב להיות `true` או `false`.\nלמה סוגריים מסולסלים? בלעדיהם רק הפקודה הראשונה אחרי ה-`if` שייכת לו, והשנייה תרוץ תמיד — באג נפוץ. עדיף תמיד לשים `{ }`.",
        "ru": "Настоящая программа должна решать: дать скидку или нет, принять пароль или нет. Поэтому условие обязано быть `true` или `false`.\nЗачем фигурные скобки? Без них к `if` относится только первая команда после него, а вторая выполнится всегда — частая ошибка. Лучше всегда ставить `{ }`.",
        "en": "A real program must decide: give a discount or not, accept a password or not. So the condition must be `true` or `false`.\nWhy curly braces? Without them only the first command after the `if` belongs to it, and the second always runs — a common bug. Better to always write `{ }`."
      },
      "kind": "board",
      "title": {
        "he": "משפטי תנאי: if / else",
        "ru": "Условия: if / else",
        "en": "Conditions: if / else"
      },
      "text": {
        "he": "על הלוח: רוצים לבצע קוד בתנאי מסוים, ואת התנאי רושמים כ-`boolean` — ביטוי שנותן `true` או `false`.\nהתנאי בסוגריים עגולים, הקוד בסוגריים מסולסלים. החלק של `else` אופציונלי.",
        "ru": "На доске: хотим выполнить код при определённом условии, а условие записываем как `boolean` — выражение, которое даёт `true` или `false`.\nУсловие в круглых скобках, код в фигурных. Часть `else` необязательна.",
        "en": "On the board: we want to run code under a certain condition, and the condition is written as a `boolean` — an expression that gives `true` or `false`.\nThe condition goes in round brackets, the code in curly brackets. The `else` part is optional."
      },
      "math": [
        "if (condition) {",
        "    // runs when condition is true",
        "} else {",
        "    // other instructions (optional)",
        "}"
      ]
    },
    {
      "why": {
        "he": "ב-`else if` הסדר קובע: Java עוצרת בענף הראשון שמתקיים. לכן תמיד בודקים את הגבולות: 18 בדיוק, 0 בדיוק. ערכי גבול הם המקום שבו רוב הטעויות מסתתרות — גם במבחן.",
        "ru": "В цепочке `else if` порядок решает: Java останавливается на первой ветке, которая выполнилась. Поэтому всегда проверяй границы: ровно 18, ровно 0. Граничные значения — то место, где прячется большинство ошибок, и на экзамене тоже.",
        "en": "In an `else if` chain the order decides: Java stops at the first branch that holds. So always test the edges: exactly 18, exactly 0. Edge values are where most mistakes hide — on the exam too."
      },
      "kind": "board",
      "title": {
        "he": "דוגמאות מהמסך: גיל",
        "ru": "Примеры с экрана: возраст",
        "en": "Screen examples: age"
      },
      "text": {
        "he": "קודם `if (age > 18)` עם `Yes` / `No`. אחר כך שרשרת עם `else if`: Java בודקת מלמעלה למטה ומבצעת רק את הענף הראשון שבו התנאי `true`.\nקלט 25 → `Yes`, קלט 0 → `No`, קלט 10 → `ll`. שימו לב: 18 נותן `No` בדוגמה הראשונה, כי `18 > 18` הוא `false`.",
        "ru": "Сначала `if (age > 18)` с `Yes` / `No`. Потом цепочка с `else if`: Java проверяет сверху вниз и выполняет только первую ветку, где условие `true`.\nВвод 25 → `Yes`, ввод 0 → `No`, ввод 10 → `ll`. Заметь: 18 в первом примере даёт `No`, потому что `18 > 18` — это `false`.",
        "en": "First `if (age > 18)` with `Yes` / `No`. Then a chain with `else if`: Java checks from top to bottom and runs only the first branch whose condition is `true`.\nInput 25 → `Yes`, input 0 → `No`, input 10 → `ll`. Note: 18 gives `No` in the first example, because `18 > 18` is `false`."
      },
      "math": [
        "int age = sca.nextInt();",
        "if (age > 18) {",
        "    System.out.println(\"Yes\");",
        "} else if (age == 0) {",
        "    System.out.println(\"No\");",
        "} else {",
        "    System.out.println(\"ll\");",
        "}"
      ]
    },
    {
      "why": {
        "he": "דרך קלה לזכור: `&&` — `true` רק אם שניהם `true`. `||` — `false` רק אם שניהם `false`.\nעוד דבר חשוב: Java מפסיקה לבדוק ברגע שהתשובה ידועה. ב-`x != 0 && 10 / x > 1`, אם `x` שווה 0, החלק השני לא מחושב בכלל — ואין חילוק ב-0.",
        "ru": "Легко запомнить: `&&` — `true`, только если оба `true`. `||` — `false`, только если оба `false`.\nЕщё важно: Java перестаёт проверять, как только ответ уже известен. В `x != 0 && 10 / x > 1` при `x` = 0 вторая часть вообще не считается — и деления на 0 нет.",
        "en": "An easy way to remember: `&&` is `true` only if both are `true`. `||` is `false` only if both are `false`.\nAlso important: Java stops checking as soon as the answer is known. In `x != 0 && 10 / x > 1`, if `x` is 0 the second part is not computed at all — so there is no division by 0."
      },
      "kind": "board",
      "title": {
        "he": "אופרטורים לוגיים וטבלת אמת",
        "ru": "Логические операторы и таблица истинности",
        "en": "Logical operators and the truth table"
      },
      "text": {
        "he": "כדי לבדוק שני תנאים יחד מחברים אותם:\n`&&` (וגם) — `true` רק כששניהם `true`.\n`||` (או) — `true` כשלפחות אחד `true`.\n`!` (לא) — הופך: `!true` הוא `false`.\nטבלת האמת מהלוח (α, β — שני תנאים):",
        "ru": "Чтобы проверить два условия сразу, их соединяют:\n`&&` (и) — `true`, только когда оба `true`.\n`||` (или) — `true`, когда хотя бы одно `true`.\n`!` (не) — переворачивает: `!true` — это `false`.\nТаблица истинности с доски (α, β — два условия):",
        "en": "To check two conditions together, join them:\n`&&` (and) — `true` only when both are `true`.\n`||` (or) — `true` when at least one is `true`.\n`!` (not) — flips: `!true` is `false`.\nThe truth table from the board (α, β are two conditions):"
      },
      "math": [
        "α      β      α && β    α || β",
        "T      T        T         T",
        "T      F        F         T",
        "F      T        F         T",
        "F      F        F         F"
      ]
    },
    {
      "why": {
        "he": "למה `7 <= age <= 10` לא עובד? Java מחשבת משמאל: `7 <= age` נותן `true` או `false`, ואז היא מנסה לבדוק `true <= 10` — להשוות ערך אמת למספר אי אפשר. לכן מפרקים לשתי שאלות ומחברים ב-`&&`.",
        "ru": "Почему `7 <= age <= 10` не работает? Java считает слева: `7 <= age` даёт `true` или `false`, а потом пытается проверить `true <= 10` — сравнивать истину с числом нельзя. Поэтому делим на два вопроса и соединяем через `&&`.",
        "en": "Why does `7 <= age <= 10` not work? Java computes from the left: `7 <= age` gives `true` or `false`, then it tries `true <= 10` — you cannot compare a truth value with a number. So split it into two questions joined with `&&`."
      },
      "kind": "board",
      "title": {
        "he": "טווח: \"בין 7 ל-10\"",
        "ru": "Промежуток: «от 7 до 10»",
        "en": "A range: \"between 7 and 10\""
      },
      "text": {
        "he": "במתמטיקה כותבים `7 ≤ age ≤ 10`, אבל ב-Java צריך שתי השוואות ו-`&&`.",
        "ru": "В математике пишут `7 ≤ age ≤ 10`, но в Java нужны два сравнения и `&&`.",
        "en": "In maths we write `7 ≤ age ≤ 10`, but in Java you need two comparisons and `&&`."
      },
      "math": [
        "if (age >= 7 && age <= 10) {",
        "    System.out.println(\"Yes\");",
        "} else {",
        "    System.out.println(\"No\");",
        "}"
      ]
    },
    {
      "why": {
        "he": "תנאי הוא פשוט ערך, ולכן אפשר להדפיס אותו או לשמור אותו כמו מספר. `if` לא חייב לבוא אחרי כל השוואה — הוא צריך רק כשרוצים לבחור מה לעשות.",
        "ru": "Условие — это просто значение, поэтому его можно напечатать или сохранить, как число. `if` не обязан стоять после каждого сравнения — он нужен, только когда надо выбрать, что делать.",
        "en": "A condition is just a value, so you can print it or store it like a number. An `if` does not have to follow every comparison — you need it only when you want to choose what to do."
      },
      "kind": "board",
      "title": {
        "he": "זוגי או אי-זוגי: 87 ו-8",
        "ru": "Чётное или нечётное: 87 и 8",
        "en": "Even or odd: 87 and 8"
      },
      "text": {
        "he": "המרצה הדפיס את התוצאה ישר כ-`boolean`, בלי `if`. `87 % 2` הוא 1, לכן `87 % 2 == 0` הוא `false`, ו-`8 % 2 == 0` הוא `true`.",
        "ru": "Преподаватель печатал результат сразу как `boolean`, без `if`. `87 % 2` — это 1, поэтому `87 % 2 == 0` — `false`, а `8 % 2 == 0` — `true`.",
        "en": "The teacher printed the result directly as a `boolean`, without `if`. `87 % 2` is 1, so `87 % 2 == 0` is `false`, and `8 % 2 == 0` is `true`."
      },
      "math": [
        "int x = 87;",
        "int y = 8;",
        "boolean res = x % 2 == 0 || y % 2 == 0;   // true",
        "res = x % 2 == 0 && y % 2 == 0;           // false",
        "res = x % 2 != 0;                         // true (87 is odd)"
      ]
    },
    {
      "why": {
        "he": "בשפות אחרות (למשל C) מספר יכול לשמש כ\"אמת\" או \"שקר\". Java אוסרת את זה בכוונה: `&&` ו-`||` מקבלים רק `true`/`false`. זה תופס טעויות כבר בכתיבה, לפני שהתוכנית רצה.",
        "ru": "В других языках (например, в C) число может работать как «правда» или «ложь». Java запрещает это нарочно: `&&` и `||` принимают только `true`/`false`. Так ошибки ловятся ещё при написании, до запуска.",
        "en": "In other languages (like C) a number can act as \"true\" or \"false\". Java forbids this on purpose: `&&` and `||` accept only `true`/`false`. This catches mistakes while you write, before the program runs."
      },
      "kind": "tip",
      "title": {
        "he": "ככה אי אפשר: `x % 2 && 0`",
        "ru": "Так нельзя: `x % 2 && 0`",
        "en": "Not allowed: `x % 2 && 0`"
      },
      "text": {
        "he": "המרצה הראה גם מה לא עובד: `boolean res = x % 2 && 0;` מסומן באדום. `x % 2` ו-`0` הם מספרים, ו-`&&` / `||` מחברים רק `true` / `false`. צריך לכתוב את ההשוואה עד הסוף: `x % 2 == 0`.",
        "ru": "Преподаватель показал и то, что не работает: `boolean res = x % 2 && 0;` подчёркнуто красным. `x % 2` и `0` — числа, а `&&` / `||` соединяют только `true` / `false`. Сравнение надо дописать: `x % 2 == 0`.",
        "en": "The teacher also showed what does not work: `boolean res = x % 2 && 0;` is underlined in red. `x % 2` and `0` are numbers, and `&&` / `||` only join `true` / `false`. Write the full comparison: `x % 2 == 0`."
      }
    },
    {
      "why": {
        "he": "בזכות הסדר הזה `x % 2 == 0 && y > 3` עובד בלי סוגריים: קודם חשבון, אחר כך השוואות, ובסוף `&&`. וגם: `&&` לפני `||`, ולכן `a || b && c` הוא `a || (b && c)`. כשלא בטוחים — סוגריים. הם לא מזיקים.",
        "ru": "Благодаря этому порядку `x % 2 == 0 && y > 3` работает без скобок: сначала арифметика, потом сравнения, в конце `&&`. И ещё: `&&` раньше `||`, поэтому `a || b && c` — это `a || (b && c)`. Не уверен — ставь скобки, они не мешают.",
        "en": "Thanks to this order `x % 2 == 0 && y > 3` works without brackets: first arithmetic, then comparisons, and `&&` last. Also: `&&` comes before `||`, so `a || b && c` means `a || (b && c)`. When unsure, use brackets — they never hurt."
      },
      "kind": "board",
      "title": {
        "he": "סדר פעולות",
        "ru": "Порядок действий",
        "en": "Order of operations"
      },
      "text": {
        "he": "הרשימה מהלוח, מהראשון לאחרון:\n1. סוגריים\n2. כפל / חילוק (`*`, `/`, `%`)\n3. חיבור / חיסור\n4. בדיקה לוגית — השוואות (`>`, `<`, `==`, `!=` ...)\n5. אופרטורים לוגיים (`&&`, `||`)\n6. השמה (`=`)",
        "ru": "Список с доски, от первого к последнему:\n1. Скобки\n2. Умножение / деление (`*`, `/`, `%`)\n3. Сложение / вычитание\n4. Логическая проверка — сравнения (`>`, `<`, `==`, `!=` ...)\n5. Логические операторы (`&&`, `||`)\n6. Присваивание (`=`)",
        "en": "The list from the board, first to last:\n1. Brackets\n2. Multiplication / division (`*`, `/`, `%`)\n3. Addition / subtraction\n4. Logical check — comparisons (`>`, `<`, `==`, `!=` ...)\n5. Logical operators (`&&`, `||`)\n6. Assignment (`=`)"
      }
    },
    {
      "why": {
        "he": "למה בלי לולאות? כדי לתרגל קודם את היסודות: קלט, חישוב, תנאי. כל שאלה בדף היא שאלה שיכולה להופיע במבחן (\"כתבו קטע קוד הקולט...\"). ההמלצה לומר את הלוגיקה במילים לפני הקוד — זה מה שמונע את רוב הטעויות.",
        "ru": "Почему без циклов? Чтобы сначала натренировать основы: ввод, вычисления, условия. Каждое задание листа может попасться на экзамене («напиши код, который читает...»). Совет проговорить логику словами до кода — именно это убирает большинство ошибок.",
        "en": "Why no loops? To practise the basics first: input, computing, conditions. Every task on the sheet could appear on the exam (\"write code that reads...\"). The tip to say the logic in words before coding is what prevents most mistakes."
      },
      "kind": "talk",
      "title": {
        "he": "דף העבודה: 20 שאלות",
        "ru": "Рабочий лист: 20 заданий",
        "en": "The worksheet: 20 questions"
      },
      "text": {
        "he": "דף העבודה \"תכנות בסיסי ב-Java\": חלק א׳ — קלט/פלט, משתנים ואופרטורים (1–9), חלק ב׳ — תנאים בסיסיים (10–14), חלק ג׳ — תנאים מורכבים ואופרטורים לוגיים (15–20).\nהכללים: כל הקוד בתוך `main`, קלט עם `Scanner`, ואסור להשתמש בלולאות, במערכים ובמתודות של `String`.\nהטיפ בסוף הדף: לתת למשתנים שמות משמעותיים (`salary` במקום `x`), ולפני תנאי מורכב לנסח את ההיגיון במילים ולהשתמש בסוגריים.",
        "ru": "Рабочий лист «תכנות בסיסי ב-Java»: часть א׳ — ввод/вывод, переменные и операторы (1–9), часть ב׳ — простые условия (10–14), часть ג׳ — сложные условия и логические операторы (15–20).\nПравила: весь код внутри `main`, ввод через `Scanner`, нельзя циклы, массивы и методы `String`.\nСовет внизу листа: давать переменным понятные имена (`salary`, а не `x`), а перед сложным условием проговорить логику словами и ставить скобки.",
        "en": "The worksheet \"תכנות בסיסי ב-Java\": part א׳ — input/output, variables and operators (1–9), part ב׳ — basic conditions (10–14), part ג׳ — complex conditions and logical operators (15–20).\nThe rules: all code inside `main`, input with `Scanner`, and no loops, arrays or `String` methods.\nThe tip at the bottom: give variables meaningful names (`salary` instead of `x`), and before a complex condition say the logic in words and use brackets."
      }
    },
    {
      "why": {
        "he": "בדרך I ה-`else` האחרון מספיק, כי הגענו אליו רק אם x לא הכי גדול וגם y לא — אז נשאר רק z. בדרך II תמיד יש בדיוק שתי השוואות.\nאותו רעיון — \"שומרים את המנצח וממשיכים להשוות\" — הופך בשיעור 01.11 לתבנית המקסימום בלולאה.",
        "ru": "В способе I последнего `else` хватает, потому что до него доходим, только если x не самое большое и y тоже — остаётся только z. В способе II всегда ровно два сравнения.\nТа же идея — «держим победителя и сравниваем дальше» — на уроке 01.11 превращается в шаблон максимума в цикле.",
        "en": "In method I the last `else` is enough, because we reach it only if x is not the biggest and y is not either — only z is left. Method II always uses exactly two comparisons.\nThe same idea — \"keep the winner and keep comparing\" — becomes the maximum pattern in a loop in the 01.11 lesson."
      },
      "kind": "board",
      "title": {
        "he": "שאלה 15: המקסימום מבין 3 מספרים — שתי שיטות",
        "ru": "Задание 15: максимум из 3 чисел — два способа",
        "en": "Question 15: the maximum of 3 numbers — two methods"
      },
      "text": {
        "he": "שיטה I — בדיקת כל המקרים עם `&&`: x הכי גדול אם `x >= y` וגם `x >= z`. אם לא — בודקים בין y ל-z. בענף האחרון מספיק `else`: אם הגענו אליו, z בטוח הכי גדול.\nשיטה II — תנאי מקונן: קודם משווים את x ו-y, ואת המנצח משווים עם z.",
        "ru": "Способ I — проверка всех случаев с `&&`: x наибольшее, если `x >= y` и `x >= z`. Если нет — сравниваем y и z. В последней ветке хватает `else`: если дошли до неё, z точно наибольшее.\nСпособ II — вложенное условие: сначала сравниваем x и y, а победителя — с z.",
        "en": "Method I — check all cases with `&&`: x is the largest if `x >= y` and `x >= z`. If not, compare y and z. In the last branch a plain `else` is enough: if we got there, z is surely the largest.\nMethod II — a nested condition: first compare x and y, then compare the winner with z."
      },
      "math": [
        "// I",
        "if (x >= y && x >= z) System.out.println(x);",
        "else if (y >= z) System.out.println(y);",
        "else System.out.println(z);",
        "",
        "// II",
        "if (x >= y) {",
        "    if (x >= z) System.out.println(x); else System.out.println(z);",
        "} else {",
        "    if (y >= z) System.out.println(y); else System.out.println(z);",
        "}"
      ]
    },
    {
      "why": {
        "he": "1. `%` נראה כמו אחוזים, אבל ב-Java זו שארית. אחוז = שבר: 10% = `0.10`.\n2. ב-`else if` בודקים מהקטן לגדול (או מהגדול לקטן) כדי שכל ענף יתפוס רק את התחום שלו.\n3. `println(y = ...)` עובד, אבל עושה שני דברים בשורה אחת — קשה לקרוא ולבדוק. פעולה אחת בשורה.",
        "ru": "1. `%` похож на проценты, но в Java это остаток. Процент — это дробь: 10% = `0.10`.\n2. В `else if` проверяем от меньшего к большему (или наоборот), чтобы каждая ветка ловила только свой промежуток.\n3. `println(y = ...)` работает, но делает два дела в одной строке — трудно читать и проверять. Одно действие в строке.",
        "en": "1. `%` looks like percent, but in Java it is the remainder. A percent is a fraction: 10% = `0.10`.\n2. In `else if` check from small to big (or big to small) so each branch catches only its own range.\n3. `println(y = ...)` works but does two things in one line — hard to read and check. One action per line."
      },
      "kind": "tip",
      "title": {
        "he": "טעויות נפוצות בדף העבודה",
        "ru": "Частые ошибки в листе",
        "en": "Common mistakes on the worksheet"
      },
      "text": {
        "he": "1. `%` ב-Java הוא שארית, לא אחוזים. 10% ממחיר זה `price * 0.10`, ומחיר אחרי הנחה של 10% הוא `price * 0.9`.\n2. `if` ואחריו `if` נפרד — שניהם נבדקים. `else if` נבדק רק אם כל מה שמעליו היה `false`. לכן בשרשרת `if (m > 6000) ... else if (m > 12000)` הענף השני לעולם לא יתבצע: כל מספר מעל 12000 כבר נכנס לראשון. בודקים מהקטן לגדול: `m <= 6000`, `m <= 12000`, אחרת.\n3. `System.out.println(y = x * 0.9);` גם שומר ב-y וגם מדפיס.",
        "ru": "1. `%` в Java — это остаток, а не проценты. 10% от цены — это `price * 0.10`, а цена со скидкой 10% — `price * 0.9`.\n2. `if` и после него отдельный `if` — проверяются оба. `else if` проверяется, только если всё выше было `false`. Поэтому в цепочке `if (m > 6000) ... else if (m > 12000)` вторая ветка не выполнится никогда: любое число больше 12000 уже попало в первую. Проверяем от меньшего к большему: `m <= 6000`, `m <= 12000`, иначе.\n3. `System.out.println(y = x * 0.9);` и кладёт значение в y, и печатает его.",
        "en": "1. `%` in Java is the remainder, not percent. 10% of a price is `price * 0.10`, and the price after a 10% discount is `price * 0.9`.\n2. An `if` followed by a separate `if` — both are checked. An `else if` is checked only when everything above it was `false`. So in the chain `if (m > 6000) ... else if (m > 12000)` the second branch never runs: every number above 12000 already went into the first one. Check from small to large: `m <= 6000`, `m <= 12000`, otherwise.\n3. `System.out.println(y = x * 0.9);` both stores the value in y and prints it."
      }
    },
    {
      "why": {
        "he": "בלי לולאה, להדפיס 1 עד 200 זה 200 שורות. עם לולאה — 3. וגם: מספר החזרות יכול להיות תלוי בקלט, מה שאי אפשר עם העתק-הדבק.\n`i = 0; i < 30` נותן בדיוק 30 סיבובים (0 עד 29). זה המנהג ב-Java, ובהמשך זה יתאים בדיוק למערכים שמתחילים מ-0.",
        "ru": "Без цикла напечатать 1..200 — это 200 строк. С циклом — 3. И ещё: число повторов может зависеть от ввода, а копированием так не сделать.\n`i = 0; i < 30` даёт ровно 30 проходов (0..29). Это привычка Java, и позже она точно совпадёт с массивами, которые начинаются с 0.",
        "en": "Without a loop, printing 1 to 200 is 200 lines. With a loop it is 3. Also, the number of repeats can depend on the input, which copy-paste cannot do.\n`i = 0; i < 30` gives exactly 30 rounds (0 to 29). That is the Java habit, and later it matches arrays exactly, which start at 0."
      },
      "kind": "board",
      "title": {
        "he": "נושא חדש: לולאת for",
        "ru": "Новая тема: цикл for",
        "en": "New topic: the for loop"
      },
      "text": {
        "he": "מהלוח: לולאה היא בלוק של קוד שמתבצע כמות פעמים. לולאת `for` מגדירה מספר איטרציות קבוע מראש בעזרת משתנה מקומי ואופרטור התקדמות, והלולאה יכולה להשתמש במשתנה.\n`int i = 0` — ערך התחלתי (אתחול), פעם אחת בהתחלה.\n`i < 30` — תנאי עצירה, נבדק לפני כל סיבוב.\n`i++` — התקדמות, אחרי כל סיבוב.\nהדוגמה על הלוח: הדפיסו את כל המספרים מ-1 עד 200.",
        "ru": "С доски: цикл — это блок кода, который выполняется несколько раз. Цикл `for` задаёт заранее известное число итераций с помощью локальной переменной и оператора шага, и цикл может использовать эту переменную.\n`int i = 0` — начальное значение (инициализация), один раз в начале.\n`i < 30` — условие остановки, проверяется перед каждым проходом.\n`i++` — шаг, после каждого прохода.\nПример на доске: напечатайте все числа от 1 до 200.",
        "en": "From the board: a loop is a block of code that runs a number of times. A `for` loop sets a fixed number of iterations in advance with a local variable and a step operator, and the loop can use that variable.\n`int i = 0` — the starting value (initialisation), once at the start.\n`i < 30` — the stop condition, checked before every round.\n`i++` — the step, after every round.\nThe example on the board: print all the numbers from 1 to 200."
      },
      "math": [
        "for (int i = 0; i < 30; i++) {",
        "    // repeats 30 times: i = 0, 1, ..., 29",
        "}",
        "",
        "for (int i = 1; i <= 200; i++) {",
        "    System.out.println(i);",
        "}"
      ]
    },
    {
      "why": {
        "he": "למה `sum` לפני הלולאה? אם מגדירים אותו בתוך הלולאה, הוא מתאפס ל-0 בכל סיבוב, ואחרי הלולאה הוא בכלל לא קיים. משתנה חי רק בתוך הסוגריים `{ }` שבהם הוגדר.\nבדיקה: `2 + 4 + … + 20 = 2 × (1 + 2 + … + 10) = 2 × 55 = 110`.",
        "ru": "Почему `sum` до цикла? Если объявить её внутри цикла, она обнуляется в каждом проходе, а после цикла её вообще нет. Переменная живёт только внутри тех скобок `{ }`, где её объявили.\nПроверка: `2 + 4 + … + 20 = 2 × (1 + 2 + … + 10) = 2 × 55 = 110`.",
        "en": "Why `sum` before the loop? If you declare it inside, it resets to 0 every round, and after the loop it does not exist at all. A variable lives only inside the `{ }` where it was declared.\nCheck: `2 + 4 + … + 20 = 2 × (1 + 2 + … + 10) = 2 × 55 = 110`."
      },
      "kind": "board",
      "title": {
        "he": "סכום הזוגיים עד 20",
        "ru": "Сумма чётных до 20",
        "en": "The sum of even numbers up to 20"
      },
      "text": {
        "he": "כאן הצעד הוא `i += 2`: מתחילים מ-2 וקופצים בשתיים. את `sum` מגדירים לפני הלולאה, כדי לצבור בו. על המסך יצא 110.",
        "ru": "Здесь шаг `i += 2`: начинаем с 2 и прыгаем через одно. `sum` объявляем до цикла, чтобы накапливать в нём. На экране получилось 110.",
        "en": "Here the step is `i += 2`: start at 2 and jump by two. `sum` is declared before the loop so it can collect the total. The screen showed 110."
      },
      "math": [
        "int sum = 0;",
        "for (int i = 2; i <= 20; i += 2) {",
        "    sum += i;",
        "}",
        "System.out.println(sum);   // 110"
      ]
    },
    {
      "why": {
        "he": "התנאי נבדק לפני הסיבוב הראשון, ולכן את k חייבים לקלוט לפני ה-`for`. אם המשתמש מקליד 0, הלולאה לא תרוץ בכלל — וזה נכון: ביקשו 0 מספרים.",
        "ru": "Условие проверяется перед первым проходом, поэтому k обязательно читать до `for`. Если человек введёт 0, цикл не выполнится ни разу — и это правильно: просили 0 чисел.",
        "en": "The condition is checked before the first round, so k must be read before the `for`. If the user types 0, the loop does not run at all — and that is right: they asked for 0 numbers."
      },
      "kind": "board",
      "title": {
        "he": "כמות לפי המשתמש",
        "ru": "Количество задаёт пользователь",
        "en": "The user chooses how many"
      },
      "text": {
        "he": "שאלה מהלוח: ואם רוצים להדפיס רצף של k מספרים לפי רצון המשתמש? כמות המספרים נתונה מראש, וחובה להשתמש במשתנה מחוץ ל-`for` (לא `i`): קולטים את k לפני הלולאה ושמים אותו בתנאי.",
        "ru": "Вопрос с доски: а если нужно напечатать k чисел по желанию пользователя? Количество известно заранее, и обязательно нужна переменная вне `for` (не `i`): читаем k до цикла и ставим его в условие.",
        "en": "A question from the board: what if we want to print a run of k numbers chosen by the user? The amount is known in advance, and you must use a variable outside the `for` (not `i`): read k before the loop and put it in the condition."
      },
      "math": [
        "int k = scanner.nextInt();",
        "for (int i = 1; i <= k; i++) {",
        "    System.out.println(i);",
        "}"
      ]
    },
    {
      "why": {
        "he": "למה מספיק משתנה אחד `x` ל-8 מספרים? כי לא צריך לזכור את כולם — רק את הסכום. כל מספר חדש נכנס ל-`x`, מתווסף ל-`sum`, והקודם כבר לא נחוץ. כשצריך לזכור את כולם — לומדים מערכים, אבל זה עוד לא עכשיו.",
        "ru": "Почему хватает одной переменной `x` на 8 чисел? Потому что помнить их все не нужно — только сумму. Каждое новое число попадает в `x`, прибавляется к `sum`, и прежнее уже не нужно. Когда надо помнить все — изучают массивы, но это ещё впереди.",
        "en": "Why is one variable `x` enough for 8 numbers? Because you do not need to remember them all — only the sum. Each new number goes into `x`, is added to `sum`, and the previous one is no longer needed. When you need them all, you learn arrays — but that comes later."
      },
      "kind": "board",
      "title": {
        "he": "קלט בתוך הלולאה: 8 מספרים",
        "ru": "Ввод внутри цикла: 8 чисел",
        "en": "Input inside the loop: 8 numbers"
      },
      "text": {
        "he": "בכל סיבוב אפשר לקלוט מספר. בדוגמה הראשונה כל מספר הודפס כפול 2 (קלט 61 → 122). בדוגמה השנייה צברו סכום וחישבו ממוצע. על המסך: `The sum is 160`, `The average is 20.0`. ה-`(double)` לפני `sum` — כדי שהחילוק יהיה עשרוני.",
        "ru": "В каждом проходе можно читать число. В первом примере каждое число печаталось умноженным на 2 (ввод 61 → 122). Во втором копили сумму и считали среднее. На экране: `The sum is 160`, `The average is 20.0`. `(double)` перед `sum` — чтобы деление было дробным.",
        "en": "Each round can read a number. In the first example every number was printed times 2 (input 61 → 122). In the second one a sum was collected and the average calculated. The screen showed `The sum is 160`, `The average is 20.0`. The `(double)` before `sum` makes the division decimal."
      },
      "math": [
        "int x;",
        "int sum = 0;",
        "for (int i = 0; i < 8; i++) {",
        "    x = scanner.nextInt();",
        "    sum += x;",
        "}",
        "System.out.println(\"The sum is \" + sum);",
        "double average = (double) sum / 8;",
        "System.out.println(\"The average is \" + average);"
      ]
    },
    {
      "kind": "board",
      "title": {
        "he": "מהשיעור: ספירה בקפיצות ולאחור",
        "ru": "С урока: шаг больше 1 и обратный отсчёт",
        "en": "From class: bigger steps and counting down"
      },
      "text": {
        "he": "בשיעור הראו עוד שלושה דברים עם `for`:\n• `print` במקום `println` ועוד רווח — המספרים יוצאים בשורה אחת.\n• אי-זוגיים: מתחילים ב-1 ועולים ב-2 (`i += 2`) — יוצא 1 3 5 7.\n• ספירה לאחור מ-50 עד 1: מתחילים ב-50, התנאי `i >= 1`, וכל פעם `i--`.",
        "ru": "На уроке показали ещё три вещи с `for`.\n• `print` вместо `println` и пробел — числа выходят в одну строку.\n• Нечётные: начинаем с 1 и прибавляем 2 (`i += 2`) — получается 1 3 5 7.\n• Обратный отсчёт от 50 до 1: начинаем с 50, условие `i >= 1`, и каждый раз `i--`.",
        "en": "In class three more things were shown with `for`.\n• `print` instead of `println` plus a space — the numbers come out on one line.\n• Odd numbers: start at 1 and add 2 (`i += 2`) — gives 1 3 5 7.\n• Counting down from 50 to 1: start at 50, condition `i >= 1`, and `i--` each time."
      },
      "math": [
        "for (int i = 1; i <= 7; i += 2) {",
        "    System.out.print(i + \" \");",
        "}",
        "// 1 3 5 7",
        "",
        "for (int i = 50; i >= 1; i--) {",
        "    System.out.println(i);",
        "}"
      ],
      "why": {
        "he": "שלושת החלקים של `for` חופשיים: מאיפה מתחילים, עד מתי, ואיך זזים. אפשר לזוז ב-1, ב-2 או אחורה. בספירה לאחור חשוב להפוך גם את התנאי: עם `i <= 1` הלולאה לא תרוץ אף פעם, כי 50 כבר גדול מ-1.",
        "ru": "Все три части `for` свободны: откуда начинаем, до каких пор и как шагаем. Шагать можно на 1, на 2 или назад. При обратном отсчёте надо перевернуть и условие: с `i <= 1` цикл не выполнится ни разу, потому что 50 уже больше 1.",
        "en": "All three parts of `for` are free: where to start, until when, and how to step. You can step by 1, by 2 or backwards. When counting down, flip the condition too: with `i <= 1` the loop never runs, because 50 is already greater than 1."
      },
      "_src": "rec-2510"
    },
    {
      "kind": "tip",
      "title": {
        "he": "מהשיעור: `i` חי רק בתוך ה-`for`",
        "ru": "С урока: `i` живёт только внутри `for`",
        "en": "From class: `i` lives only inside the `for`"
      },
      "text": {
        "he": "משתנה שמגדירים בתוך ה-`for` (`int i = …`) קיים רק בתוך הלולאה. אחרי `}` של הלולאה Java כבר לא מכירה אותו, ו-`System.out.println(i)` שם נותן שגיאת קומפילציה (cannot find symbol).",
        "ru": "Переменная, объявленная в самом `for` (`int i = …`), существует только внутри цикла. После `}` цикла Java её уже не знает, и `System.out.println(i)` там даёт ошибку компиляции (cannot find symbol).",
        "en": "A variable declared in the `for` itself (`int i = …`) exists only inside the loop. After the loop's `}` Java no longer knows it, and `System.out.println(i)` there is a compile error (cannot find symbol)."
      },
      "why": {
        "he": "זה אותו כלל של \"תחום\" משיעור 18.10: משתנה חי בתוך הבלוק שבו הוגדר. אם צריך את הערך אחרי הלולאה, מגדירים את המשתנה לפני ה-`for`. כך גם ה-`sum` נשאר אחרי הלולאה: הוא הוגדר לפניה.",
        "ru": "Это то же правило «области видимости» с урока 18.10: переменная живёт внутри блока, где её объявили. Если значение нужно после цикла, переменную объявляют до `for`. Поэтому `sum` остаётся и после цикла: его объявили раньше.",
        "en": "It is the same \"scope\" rule from the 18.10 lesson: a variable lives inside the block where it was declared. If you need the value after the loop, declare the variable before the `for`. That is why `sum` survives the loop: it was declared before it."
      },
      "_src": "rec-2510"
    },
    {
      "kind": "board",
      "title": {
        "he": "מהשיעור: מכפלה מתחילה ב-1, וחזקה בלולאה",
        "ru": "С урока: произведение начинается с 1, и степень через цикл",
        "en": "From class: a product starts at 1, and a power with a loop"
      },
      "text": {
        "he": "מכפלה עובדת כמו סכום, רק עם `*=`. אבל מתחילים ב-1, לא ב-0: אם מתחילים ב-0, כל מה שנכפיל ייתן 0.\nאותו רעיון נותן חזקה: כופלים את הבסיס בעצמו כמה פעמים. `3` בחזקת `5` = 243.",
        "ru": "Произведение работает как сумма, только с `*=`. Но начинаем с 1, а не с 0: если начать с 0, что ни умножай, выйдет 0.\nТа же идея даёт степень: умножаем основание само на себя нужное число раз. `3` в степени `5` = 243.",
        "en": "A product works like a sum, only with `*=`. But it starts at 1, not 0: start at 0 and whatever you multiply gives 0.\nThe same idea gives a power: multiply the base by itself the needed number of times. `3` to the power `5` = 243."
      },
      "math": [
        "int product = 1;",
        "for (int i = 0; i < 8; i++) {",
        "    product *= scanner.nextInt();",
        "}",
        "",
        "int result = 1;",
        "for (int i = 0; i < 5; i++) {",
        "    result *= 3;",
        "}",
        "System.out.println(result);   // 243"
      ],
      "why": {
        "he": "למה 1? כי 1 הוא \"האפס של הכפל\": כפול 1 לא משנה כלום, בדיוק כמו ועוד 0 בסכום. לכן \"קופה\" של סכום מתחילה ב-0, ושל מכפלה ב-1. בחזקה הלולאה רצה בדיוק לפי המעריך: 5 סיבובים — 5 כפלים ב-3.",
        "ru": "Почему 1? Потому что 1 — это «ноль умножения»: умножить на 1 ничего не меняет, ровно как прибавить 0 в сумме. Поэтому «копилка» суммы начинается с 0, а произведения — с 1. В степени цикл крутится ровно по показателю: 5 кругов — 5 умножений на 3.",
        "en": "Why 1? Because 1 is the \"zero of multiplication\": multiplying by 1 changes nothing, just like adding 0 in a sum. So a sum's \"piggy bank\" starts at 0 and a product's at 1. For a power the loop runs exactly by the exponent: 5 rounds — 5 multiplications by 3."
      },
      "_src": "rec-2510"
    },
    {
      "why": {
        "he": "דוגמה: ציון 95.\n`if (g > 90) A; if (g > 80) B;` — יודפסו גם A וגם B.\n`if (g > 90) A; else if (g > 80) B;` — יודפס רק A.\nכשהמצבים לא יכולים לקרות יחד (ציון הוא A או B) — `else if`.",
        "ru": "Пример: оценка 95.\n`if (g > 90) A; if (g > 80) B;` — напечатаются и A, и B.\n`if (g > 90) A; else if (g > 80) B;` — напечатается только A.\nКогда случаи не могут быть одновременно (оценка либо A, либо B) — `else if`.",
        "en": "Example: a grade of 95.\n`if (g > 90) A; if (g > 80) B;` — both A and B are printed.\n`if (g > 90) A; else if (g > 80) B;` — only A is printed.\nWhen the cases cannot happen together (a grade is A or B) — use `else if`."
      },
      "kind": "faq",
      "q": {
        "he": "מה ההבדל בין שני `if` נפרדים לבין `if` ו-`else if`?",
        "ru": "Чем два отдельных `if` отличаются от `if` и `else if`?",
        "en": "What is the difference between two separate `if`s and `if` + `else if`?"
      },
      "a": {
        "he": "שני `if` נפרדים נבדקים תמיד שניהם, ולכן יכולים להתבצע שניהם. ב-`if` / `else if` מתבצע רק הענף הראשון שהתנאי שלו `true`, והשאר מדולגים.",
        "ru": "Два отдельных `if` проверяются оба всегда, поэтому могут выполниться оба. В `if` / `else if` выполняется только первая ветка, где условие `true`, остальные пропускаются.",
        "en": "Two separate `if`s are both always checked, so both can run. With `if` / `else if` only the first branch whose condition is `true` runs, and the rest are skipped."
      }
    },
    {
      "kind": "tip",
      "title": {
        "he": "מחומרי הקורס: כללי קלט",
        "ru": "Из материалов курса: правила ввода",
        "en": "From the course files: input rules"
      },
      "text": {
        "he": "1. `import java.util.Scanner;` — בשורה הראשונה, לפני המחלקה. ב-IntelliJ: עומדים על `Scanner` האדום ולוחצים `Alt + Enter`.\n2. `Scanner input = new Scanner(System.in);` — פעם אחת, בתוך main.\n3. אף פעם לא קולטים בלי להדפיס קודם בקשה: המשתמש צריך לדעת מה להקליד.\nלפי סוג: `nextInt()` — שלם, `nextDouble()` — עשרוני, `next()` — מילה אחת, `nextLine()` — שורה שלמה, `next().charAt(0)` — תו אחד.",
        "ru": "1. `import java.util.Scanner;` — первой строкой, до класса. В IntelliJ: встань на красный `Scanner` и нажми `Alt + Enter`.\n2. `Scanner input = new Scanner(System.in);` — один раз, внутри main.\n3. Никогда не делай ввод, не напечатав сначала просьбу: человек должен знать, что вводить.\nПо типу: `nextInt()` — целое, `nextDouble()` — дробное, `next()` — одно слово, `nextLine()` — целая строка, `next().charAt(0)` — один символ.",
        "en": "1. `import java.util.Scanner;` — on the first line, before the class. In IntelliJ: stand on the red `Scanner` and press `Alt + Enter`.\n2. `Scanner input = new Scanner(System.in);` — once, inside main.\n3. Never read input without printing a request first: the user must know what to type.\nBy type: `nextInt()` — whole, `nextDouble()` — decimal, `next()` — one word, `nextLine()` — a whole line, `next().charAt(0)` — one character."
      },
      "math": [
        "System.out.print(\"Enter your age: \");",
        "int age = input.nextInt();"
      ],
      "why": {
        "he": "למה אין `nextChar()`? כי Scanner קורא מילים, לא תווים. לכן קוראים מילה עם `next()` ולוקחים ממנה את התו הראשון (מקום 0) עם `charAt(0)`. ולמה בקשה לפני קלט? בלי זה המסך פשוט \"קפוא\", והמשתמש לא יודע שהתוכנית מחכה לו — זו גם דרישה במבחנים.",
        "ru": "Почему нет `nextChar()`? Потому что Scanner читает слова, а не символы. Поэтому читают слово через `next()` и берут из него первый символ (место 0) через `charAt(0)`. А зачем просьба перед вводом? Без неё экран просто «замер», и человек не знает, что программа ждёт его. Это ещё и требование на экзаменах.",
        "en": "Why is there no `nextChar()`? Because Scanner reads words, not characters. So you read a word with `next()` and take its first character (position 0) with `charAt(0)`. And why a request before input? Without it the screen just looks \"frozen\" and the user does not know the program is waiting — it is also an exam requirement."
      },
      "_src": "pass-0311"
    },
    {
      "kind": "talk",
      "title": {
        "he": "מחומרי הקורס: ביטוי בוליאני",
        "ru": "Из материалов курса: логическое высказывание",
        "en": "From the course files: a boolean expression"
      },
      "text": {
        "he": "ביטוי בוליאני הוא משפט שאפשר לומר עליו \"אמת\" או \"שקר\" — ורק אחד מהם. `5 > 7` — ביטוי (שקר). \"מה שלומך?\" — לא ביטוי. גם `5 + 8` הוא לא ביטוי בוליאני: הוא מספר, לא אמת ולא שקר. בתוך `if (...)` מותר לשים רק ביטוי בוליאני.",
        "ru": "Логическое (булево) высказывание — это фраза, про которую можно сказать «истина» или «ложь», и только одно из двух. `5 > 7` — высказывание (ложь). «Как дела?» — не высказывание. И `5 + 8` — не булево выражение: это число, не истина и не ложь. Внутри `if (...)` можно ставить только булево выражение.",
        "en": "A boolean expression is a statement you can call \"true\" or \"false\" — exactly one of them. `5 > 7` is one (false). \"How are you?\" is not. And `5 + 8` is not a boolean expression either: it is a number, neither true nor false. Inside `if (...)` only a boolean expression is allowed."
      },
      "why": {
        "he": "זו הסיבה לשגיאה `if (x = 5)`: `x = 5` היא השמה, היא נותנת מספר ולא אמת/שקר, ולכן Java לא מקבלת אותה. משווים עם `==`.",
        "ru": "Вот почему ошибка в `if (x = 5)`: `x = 5` — присваивание, оно даёт число, а не истину/ложь, поэтому Java его не принимает. Сравнивают через `==`.",
        "en": "That is why `if (x = 5)` is an error: `x = 5` is an assignment, it gives a number, not true/false, so Java rejects it. Compare with `==`."
      },
      "_src": "pass-0311"
    },
    {
      "kind": "board",
      "title": {
        "he": "מחומרי הקורס: בלוק `{ }` והזחה",
        "ru": "Из материалов курса: блок `{ }` и отступы",
        "en": "From the course files: the `{ }` block and indentation"
      },
      "text": {
        "he": "בלי סוגריים מסולסלים, `if` שולט רק בשורה אחת אחריו. רוצים כמה פקודות בתנאי — שמים אותן בבלוק `{ }`. ההזחה (Tab) עוזרת לקרוא, אבל Java לא מסתכלת עליה.",
        "ru": "Без фигурных скобок `if` управляет только одной следующей командой. Хочешь несколько команд в условии — заключи их в блок `{ }`. Отступ (Tab) помогает читать, но Java на него не смотрит.",
        "en": "Without braces, `if` controls only the one command after it. Want several commands under a condition? Put them in a `{ }` block. Indentation (Tab) helps reading, but Java ignores it."
      },
      "math": [
        "int k = 7;",
        "if (k > 10)",
        "    System.out.println(\"R\");",
        "    System.out.println(\"S\");   // runs ALWAYS: not inside the if"
      ],
      "why": {
        "he": "זו מלכודת נפוצה: ההזחה \"משקרת\". `S` נראה כאילו הוא בתוך ה-if, אבל בלי `{ }` הוא כבר פקודה רגילה אחריו. לכן ההמלצה בחומר: תמיד לשים `{ }`, גם לפקודה אחת.",
        "ru": "Это частая ловушка: отступ «врёт». Кажется, что `S` внутри if, но без `{ }` это уже обычная команда после него. Поэтому совет из материалов: всегда ставить `{ }`, даже для одной команды.",
        "en": "A common trap: the indentation \"lies\". `S` looks like it is inside the if, but without `{ }` it is an ordinary command after it. So the files advise: always use `{ }`, even for one command."
      },
      "_src": "pass-0311"
    },
    {
      "kind": "board",
      "title": {
        "he": "מהמצגת ומחומרי הקורס: תנאי בתוך תנאי (Nested if)",
        "ru": "Из презентации и материалов: условие внутри условия (Nested if)",
        "en": "From the slides and files: a condition inside a condition (nested if)"
      },
      "text": {
        "he": "אפשר לשים `if` בתוך `if`. משתמשים בזה כשבודקים משהו רק אחרי שבדיקה ראשונה עברה. דוגמה מהמצגת: בודקים סיסמה רק אם שם המשתמש נכון.\nכלל חשוב: `else` שייך ל-`if` הכי קרוב אליו שעוד אין לו `else`.",
        "ru": "Можно поставить `if` внутри `if`. Так делают, когда что-то проверяют только после того, как прошла первая проверка. Пример из презентации: пароль проверяем, только если имя пользователя верное.\nВажное правило: `else` относится к ближайшему `if`, у которого ещё нет `else`.",
        "en": "You can put an `if` inside an `if`. Use it when something is checked only after a first check passed. Example from the slides: check the password only if the username is right.\nKey rule: an `else` belongs to the nearest `if` that does not have an `else` yet."
      },
      "math": [
        "if (user.equals(\"dana\")) {",
        "    if (pass == 1234) {",
        "        System.out.println(\"Welcome\");",
        "    } else {",
        "        System.out.println(\"Wrong password\");",
        "    }",
        "} else {",
        "    System.out.println(\"No such user\");",
        "}"
      ],
      "why": {
        "he": "למה לא לבדוק הכול בבת אחת עם `&&`? כי אז אי אפשר לדעת מה לא נכון — השם או הסיסמה. תנאי מקונן נותן הודעה מדויקת לכל מקרה. ולמה הכלל על `else`? בלי `{ }` אפשר לטעות לאיזה `if` הוא שייך. Java תמיד בוחרת את הקרוב ביותר — לכן שמים `{ }` ומיישרים את `else` מתחת ל-`if` שלו.",
        "ru": "Почему не проверить всё сразу через `&&`? Тогда не узнаешь, что именно неверно — имя или пароль. Вложенное условие даёт точное сообщение для каждого случая. А правило про `else` зачем? Без `{ }` легко ошибиться, к какому `if` он относится. Java всегда выбирает ближайший, поэтому ставят `{ }` и пишут `else` ровно под своим `if`.",
        "en": "Why not check everything at once with `&&`? Then you cannot tell what is wrong — the name or the password. A nested condition gives an exact message for each case. And why the `else` rule? Without `{ }` it is easy to misread which `if` it belongs to. Java always picks the nearest one, so use `{ }` and line up the `else` under its own `if`."
      },
      "_src": "pass-0311"
    },
    {
      "kind": "board",
      "title": {
        "he": "מהמצגת: תנאי מורכב וסוגריים",
        "ru": "Из презентации: сложное условие и скобки",
        "en": "From the slides: a compound condition and brackets"
      },
      "text": {
        "he": "דוגמה מהמצגת: \"אם הגיל מעל 18 וגם יש רישיון, או אם יש אישור מיוחד\". `&&` מחושב לפני `||` (כמו כפל לפני חיבור), ולכן הסוגריים משנים את התשובה:",
        "ru": "Пример из презентации: «если возраст больше 18 и есть права, или если есть особое разрешение». `&&` считается раньше `||` (как умножение раньше сложения), поэтому скобки меняют ответ:",
        "en": "Example from the slides: \"if age is over 18 and there is a licence, or if there is special permission\". `&&` is evaluated before `||` (like multiplication before addition), so brackets change the answer:"
      },
      "math": [
        "age = 16,  license = false,  special = true",
        "age > 18 && license || special      →  true",
        "age > 18 && (license || special)    →  false"
      ],
      "why": {
        "he": "בשורה הראשונה Java קוראת `(age > 18 && license) || special` — האישור המיוחד מספיק לבד. בשנייה הגיל חובה תמיד. שני המשפטים נשמעים דומים במילים, אבל הם שתי חוקים שונים. לכן ההמלצה במצגת: תמיד סוגריים, כדי שהקוד יגיד בדיוק מה שהתכוונתם.",
        "ru": "В первой строке Java читает `(age > 18 && license) || special` — особого разрешения хватает самого по себе. Во второй возраст обязателен всегда. На словах обе фразы звучат похоже, но это два разных правила. Поэтому совет из презентации: всегда ставь скобки, чтобы код говорил ровно то, что ты имел в виду.",
        "en": "In the first line Java reads `(age > 18 && license) || special` — special permission is enough on its own. In the second, age is always required. The two sound alike in words but are different rules. So the slides advise: always use brackets so the code says exactly what you meant."
      },
      "_src": "pass-0311"
    },
    {
      "kind": "tip",
      "title": {
        "he": "מהמצגת: תנאי קבוע `if (true)` / `if (false)`",
        "ru": "Из презентации: постоянное условие `if (true)` / `if (false)`",
        "en": "From the slides: a constant condition `if (true)` / `if (false)`"
      },
      "text": {
        "he": "`if (true)` — הבלוק רץ תמיד. `if (false)` — לעולם לא רץ. משתמשים בזה בזמן פיתוח, כדי \"לכבות\" קטע קוד לבדיקה בלי למחוק אותו, או עם `while (true)` ו-`break` בפנים.",
        "ru": "`if (true)` — блок выполняется всегда. `if (false)` — никогда. Так делают при разработке, чтобы «выключить» кусок кода для проверки, не стирая его, или с `while (true)` и `break` внутри.",
        "en": "`if (true)` — the block always runs. `if (false)` — never runs. It is used while developing, to \"switch off\" a piece of code for testing without deleting it, or with `while (true)` and a `break` inside."
      },
      "why": {
        "he": "זה מראה שבתוך `if` יכול להיות כל ערך בוליאני, לא רק השוואה. `if (isLoggedIn)` עם משתנה `boolean` עובד בדיוק כך: אין צורך לכתוב `== true`.",
        "ru": "Это показывает, что внутри `if` может стоять любое булево значение, а не только сравнение. `if (isLoggedIn)` с переменной `boolean` работает ровно так: писать `== true` не нужно.",
        "en": "It shows that any boolean value can go inside an `if`, not only a comparison. `if (isLoggedIn)` with a `boolean` variable works exactly this way: no need to write `== true`."
      },
      "_src": "pass-0311"
    }
  ],
  "review": [
    {
      "title": {
        "he": "Scanner",
        "ru": "Scanner",
        "en": "Scanner"
      },
      "text": {
        "he": "`Scanner sc = new Scanner(System.in);` ואז `sc.nextInt()`, `sc.nextDouble()`, `sc.nextLine()`.",
        "ru": "`Scanner sc = new Scanner(System.in);`, затем `sc.nextInt()`, `sc.nextDouble()`, `sc.nextLine()`.",
        "en": "`Scanner sc = new Scanner(System.in);` then `sc.nextInt()`, `sc.nextDouble()`, `sc.nextLine()`."
      }
    },
    {
      "title": {
        "he": "if / else if / else",
        "ru": "if / else if / else",
        "en": "if / else if / else"
      },
      "text": {
        "he": "נבדק מלמעלה למטה, ומתבצע רק הענף הראשון שבו התנאי `true`. `else` — אופציונלי.",
        "ru": "Проверяется сверху вниз, выполняется только первая ветка с `true`. `else` — необязателен.",
        "en": "Checked top to bottom; only the first branch with `true` runs. `else` is optional."
      }
    },
    {
      "title": {
        "he": "&& ו-||",
        "ru": "&& и ||",
        "en": "&& and ||"
      },
      "text": {
        "he": "`&&` — שניהם `true`. `||` — לפחות אחד `true`. טווח: `x >= 7 && x <= 10`.",
        "ru": "`&&` — оба `true`. `||` — хотя бы одно `true`. Промежуток: `x >= 7 && x <= 10`.",
        "en": "`&&` — both `true`. `||` — at least one `true`. A range: `x >= 7 && x <= 10`."
      }
    },
    {
      "title": {
        "he": "זוגי",
        "ru": "Чётность",
        "en": "Even / odd"
      },
      "text": {
        "he": "זוגי: `x % 2 == 0`, אי-זוגי: `x % 2 != 0`. `%` זה שארית, לא אחוזים.",
        "ru": "Чётное: `x % 2 == 0`, нечётное: `x % 2 != 0`. `%` — остаток, а не проценты.",
        "en": "Even: `x % 2 == 0`, odd: `x % 2 != 0`. `%` is the remainder, not percent."
      }
    },
    {
      "title": {
        "he": "סדר פעולות",
        "ru": "Порядок действий",
        "en": "Order of operations"
      },
      "text": {
        "he": "סוגריים → `* / %` → `+ -` → השוואות → `&&`, `||` → השמה `=`.",
        "ru": "Скобки → `* / %` → `+ -` → сравнения → `&&`, `||` → присваивание `=`.",
        "en": "Brackets → `* / %` → `+ -` → comparisons → `&&`, `||` → assignment `=`."
      }
    },
    {
      "title": {
        "he": "לולאת for",
        "ru": "Цикл for",
        "en": "The for loop"
      },
      "text": {
        "he": "`for (אתחול; תנאי עצירה; התקדמות)`. צובר כמו `sum` מגדירים לפני הלולאה.",
        "ru": "`for (начало; условие остановки; шаг)`. Накопитель вроде `sum` объявляют до цикла.",
        "en": "`for (start; stop condition; step)`. An accumulator like `sum` is declared before the loop."
      }
    },
    {
      "title": {
        "he": "ממוצע",
        "ru": "Среднее",
        "en": "Average"
      },
      "text": {
        "he": "`(double) sum / count` — אחרת החילוק בשלמים זורק את השבר.",
        "ru": "`(double) sum / count` — иначе целочисленное деление отбросит дробь.",
        "en": "`(double) sum / count` — otherwise integer division drops the fraction."
      }
    }
  ],
  "tasks": {
    "groups": {
      "class": {
        "he": "דוגמאות מהשיעור",
        "ru": "Примеры с урока",
        "en": "Examples from the lesson"
      },
      "sheet": {
        "he": "דף העבודה \"תכנות בסיסי ב-Java\" — מה תדפיס התוכנית?",
        "ru": "Рабочий лист «תכנות בסיסי ב-Java» — что напечатает программа?",
        "en": "Worksheet \"תכנות בסיסי ב-Java\" — what will the program print?"
      },
      "for": {
        "he": "לולאת for מהשיעור",
        "ru": "Цикл for с урока",
        "en": "The for loop from the lesson"
      },
      "course": {
        "he": "מחומרי הקורס ומהמצגת",
        "ru": "Из материалов курса и презентации",
        "en": "From the course files and slides"
      },
      "ws": {
        "he": "דף תרגול: תנאים ומעקב",
        "ru": "Лист упражнений: условия и отслеживание",
        "en": "Worksheet: conditions and tracing"
      },
      "rec": {
        "he": "מהשיעור: עוד לולאות for",
        "ru": "С урока: ещё циклы for",
        "en": "From class: more for loops"
      }
    },
    "teacher": [
      {
        "id": "c1",
        "group": "class",
        "label": {
          "he": "גיל 7–10",
          "ru": "Возраст 7–10",
          "en": "Age 7–10"
        },
        "kind": "choice",
        "text": {
          "he": "תוכנית מהשיעור קולטת גיל ובודקת אם הוא בין 7 ל־10.\n```\nScanner sca = new Scanner(System.in);\nint age = sca.nextInt();\nif (age >= 7 && age <= 10) System.out.println(\"Yes\");\nelse System.out.println(\"No\");\n```\nדוגמה עם מספרים אחרים: המשתמש הקליד 12 → `12 >= 7` כן, `12 <= 10` לא → התנאי לא מתקיים → התוכנית תדפיס `No`.\nהמשימה שלך: המשתמש הקליד 10. מה התוכנית תדפיס?",
          "ru": "Программа с урока читает возраст и проверяет, от 7 до 10 он или нет.\n```\nScanner sca = new Scanner(System.in);\nint age = sca.nextInt();\nif (age >= 7 && age <= 10) System.out.println(\"Yes\");\nelse System.out.println(\"No\");\n```\nПример на других числах: пользователь ввёл 12 → `12 >= 7` да, `12 <= 10` нет → условие не выполнено → программа напечатает `No`.\nТвоя задача: Пользователь ввёл 10. Что напечатает программа?",
          "en": "A program from the lesson reads an age and checks whether it is from 7 to 10.\n```\nScanner sca = new Scanner(System.in);\nint age = sca.nextInt();\nif (age >= 7 && age <= 10) System.out.println(\"Yes\");\nelse System.out.println(\"No\");\n```\nExample with other numbers: the user typed 12 → `12 >= 7` yes, `12 <= 10` no → the condition is false → the program prints `No`.\nYour task: The user typed 10. What does the program print?"
        },
        "options": [
          "Yes",
          "No"
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "בדקו כל חלק של `&&` בנפרד.",
            "ru": "Проверь каждую часть `&&` отдельно.",
            "en": "Check each part of the `&&` separately."
          },
          {
            "he": "`10 <= 10` — האם זה נכון? `<=` כולל שוויון.",
            "ru": "`10 <= 10` — это правда? `<=` включает равенство.",
            "en": "`10 <= 10` — is it true? `<=` includes equality."
          }
        ],
        "solution": [
          "10 >= 7  →  true",
          "10 <= 10  →  true",
          "true && true  →  true",
          {
            "he": "מודפס Yes",
            "ru": "Печатается Yes",
            "en": "Yes is printed"
          }
        ]
      },
      {
        "id": "c2",
        "group": "class",
        "label": {
          "he": "שרשרת else if",
          "ru": "Цепочка else if",
          "en": "else if chain"
        },
        "kind": "text",
        "text": {
          "he": "תוכנית מהשיעור קולטת גיל ובודקת לפי הסדר: גדול מ־18, שווה ל־0, אחרת.\n```\nScanner sca = new Scanner(System.in);\nint age = sca.nextInt();\nif (age > 18) System.out.println(\"Yes\");\nelse if (age == 0) System.out.println(\"No\");\nelse System.out.println(\"ll\");\n```\nדוגמה עם מספרים אחרים: המשתמש הקליד 25 → `25 > 18` כן → התוכנית תדפיס `Yes` ולא בודקת הלאה.\nהמשימה שלך: המשתמש הקליד 10. מה התוכנית תדפיס?",
          "ru": "Программа с урока читает возраст и проверяет его по очереди: больше 18, равен 0, иначе.\n```\nScanner sca = new Scanner(System.in);\nint age = sca.nextInt();\nif (age > 18) System.out.println(\"Yes\");\nelse if (age == 0) System.out.println(\"No\");\nelse System.out.println(\"ll\");\n```\nПример на других числах: пользователь ввёл 25 → `25 > 18` да → программа напечатает `Yes`, дальше не проверяет.\nТвоя задача: Пользователь ввёл 10. Что напечатает программа?",
          "en": "A program from the lesson reads an age and checks it in order: over 18, equal to 0, otherwise.\n```\nScanner sca = new Scanner(System.in);\nint age = sca.nextInt();\nif (age > 18) System.out.println(\"Yes\");\nelse if (age == 0) System.out.println(\"No\");\nelse System.out.println(\"ll\");\n```\nExample with other numbers: the user typed 25 → `25 > 18` yes → the program prints `Yes` and checks nothing more.\nYour task: The user typed 10. What does the program print?"
        },
        "answer": {
          "accept": [
            "ll"
          ]
        },
        "hints": [
          {
            "he": "עברו על התנאים מלמעלה למטה, עד הראשון שהוא `true`.",
            "ru": "Иди по условиям сверху вниз до первого `true`.",
            "en": "Go through the conditions top to bottom until the first `true`."
          }
        ],
        "solution": [
          "10 > 18  →  false",
          "10 == 0  →  false",
          {
            "he": "אף תנאי לא התקיים — מתבצע `else`: מודפס ll",
            "ru": "Ни одно условие не выполнено — работает `else`: печатается ll",
            "en": "No condition was true — the `else` runs: ll is printed"
          }
        ]
      },
      {
        "id": "c3",
        "group": "class",
        "label": {
          "he": "87 ו-8: ||",
          "ru": "87 и 8: ||",
          "en": "87 and 8: ||"
        },
        "kind": "choice",
        "text": {
          "he": "מה יודפס?\n`int x = 87;`\n`int y = 8;`\n`boolean res = x % 2 == 0 || y % 2 == 0;`\n`System.out.println(res);`",
          "ru": "Что будет напечатано?\n`int x = 87;`\n`int y = 8;`\n`boolean res = x % 2 == 0 || y % 2 == 0;`\n`System.out.println(res);`",
          "en": "What is printed?\n`int x = 87;`\n`int y = 8;`\n`boolean res = x % 2 == 0 || y % 2 == 0;`\n`System.out.println(res);`"
        },
        "options": [
          "true",
          "false"
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "חשבו כל צד בנפרד: האם 87 זוגי? האם 8 זוגי?",
            "ru": "Посчитай каждую сторону: 87 чётное? 8 чётное?",
            "en": "Work out each side: is 87 even? Is 8 even?"
          },
          {
            "he": "ל-`||` מספיק צד אחד `true`.",
            "ru": "Для `||` хватает одной стороны `true`.",
            "en": "For `||` one `true` side is enough."
          }
        ],
        "solution": [
          "87 % 2 = 1  →  1 == 0  →  false",
          "8 % 2 = 0  →  0 == 0  →  true",
          "false || true  →  true",
          {
            "he": "מודפס true",
            "ru": "Печатается true",
            "en": "true is printed"
          }
        ]
      },
      {
        "id": "c4",
        "group": "class",
        "label": {
          "he": "87 ו-8: &&",
          "ru": "87 и 8: &&",
          "en": "87 and 8: &&"
        },
        "kind": "choice",
        "text": {
          "he": "אותם x = 87, y = 8. מה יודפס?\n`boolean res = x % 2 == 0 && y % 2 == 0;`\n`System.out.println(res);`",
          "ru": "Те же x = 87, y = 8. Что будет напечатано?\n`boolean res = x % 2 == 0 && y % 2 == 0;`\n`System.out.println(res);`",
          "en": "The same x = 87, y = 8. What is printed?\n`boolean res = x % 2 == 0 && y % 2 == 0;`\n`System.out.println(res);`"
        },
        "options": [
          "true",
          "false"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "ל-`&&` צריך ששני הצדדים יהיו `true`.",
            "ru": "Для `&&` нужно, чтобы обе стороны были `true`.",
            "en": "`&&` needs both sides to be `true`."
          }
        ],
        "solution": [
          "87 % 2 == 0  →  false",
          "8 % 2 == 0  →  true",
          "false && true  →  false",
          {
            "he": "מודפס false",
            "ru": "Печатается false",
            "en": "false is printed"
          }
        ]
      },
      {
        "id": "c5",
        "group": "class",
        "label": {
          "he": "מקסימום (15)",
          "ru": "Максимум (15)",
          "en": "Maximum (15)"
        },
        "kind": "number",
        "text": {
          "he": "שיטה I מהלוח: התוכנית קולטת 3 מספרים x, y, z ומדפיסה את הגדול ביותר.\n```\nScanner sca = new Scanner(System.in);\nint x = sca.nextInt();\nint y = sca.nextInt();\nint z = sca.nextInt();\nif (x >= y && x >= z) System.out.println(x);\nelse if (y >= z) System.out.println(y);\nelse System.out.println(z);\n```\nדוגמה עם מספרים אחרים: המשתמש הקליד 3, 1, 8 → `3 >= 1` כן, אבל `3 >= 8` לא → התנאי הראשון לא מתקיים → `1 >= 8` לא → התוכנית תדפיס את z, כלומר 8.\nהמשימה שלך: המשתמש הקליד, אחד אחרי השני, 3 מספרים: 4, 9, 2 (אלה x, y, z). מה התוכנית תדפיס?",
          "ru": "Способ I с доски: программа читает 3 числа x, y, z и печатает самое большое.\n```\nScanner sca = new Scanner(System.in);\nint x = sca.nextInt();\nint y = sca.nextInt();\nint z = sca.nextInt();\nif (x >= y && x >= z) System.out.println(x);\nelse if (y >= z) System.out.println(y);\nelse System.out.println(z);\n```\nПример на других числах: пользователь ввёл 3, 1, 8 → `3 >= 1` да, но `3 >= 8` нет → первое условие не выполнено → `1 >= 8` нет → программа напечатает z, то есть 8.\nТвоя задача: Пользователь по очереди ввёл 3 числа: 4, 9, 2 (это x, y, z). Что напечатает программа?",
          "en": "Method I from the board: the program reads 3 numbers x, y, z and prints the largest.\n```\nScanner sca = new Scanner(System.in);\nint x = sca.nextInt();\nint y = sca.nextInt();\nint z = sca.nextInt();\nif (x >= y && x >= z) System.out.println(x);\nelse if (y >= z) System.out.println(y);\nelse System.out.println(z);\n```\nExample with other numbers: the user typed 3, 1, 8 → `3 >= 1` yes, but `3 >= 8` no → the first condition is false → `1 >= 8` no → the program prints z, that is 8.\nYour task: The user typed 3 numbers one after another: 4, 9, 2 (these are x, y, z). What does the program print?"
        },
        "answer": {
          "value": "9"
        },
        "hints": [
          {
            "he": "הציבו x = 4, y = 9, z = 2 בתנאי הראשון.",
            "ru": "Подставь x = 4, y = 9, z = 2 в первое условие.",
            "en": "Put x = 4, y = 9, z = 2 into the first condition."
          }
        ],
        "solution": [
          "4 >= 9  →  false",
          "false && ...  →  false",
          "9 >= 2  →  true",
          {
            "he": "מודפס y: 9",
            "ru": "Печатается y: 9",
            "en": "y is printed: 9"
          }
        ]
      },
      {
        "id": "s3",
        "group": "sheet",
        "label": "3",
        "kind": "choice",
        "text": {
          "he": "שאלה 3: התוכנית קולטת 3 מספרים שלמים ומדפיסה את הממוצע שלהם.\n```\nScanner sc = new Scanner(System.in);\nint a = sc.nextInt();\nint b = sc.nextInt();\nint c = sc.nextInt();\nint sum = a + b + c;\nSystem.out.println(sum / 3);\n```\nדוגמה עם מספרים אחרים: המשתמש הקליד 2, 3, 3 → `sum` = 8 → `8 / 3`: שני המספרים `int`, ולכן החלק העשרוני נזרק → התוכנית תדפיס 2.\nהמשימה שלך: המשתמש הקליד, אחד אחרי השני, 3 מספרים: 1, 2, 2. מה התוכנית תדפיס?",
          "ru": "Задание 3: программа читает 3 целых числа и печатает их среднее.\n```\nScanner sc = new Scanner(System.in);\nint a = sc.nextInt();\nint b = sc.nextInt();\nint c = sc.nextInt();\nint sum = a + b + c;\nSystem.out.println(sum / 3);\n```\nПример на других числах: пользователь ввёл 2, 3, 3 → `sum` = 8 → `8 / 3`: оба числа `int`, поэтому дробная часть отбрасывается → программа напечатает 2.\nТвоя задача: Пользователь по очереди ввёл 3 числа: 1, 2, 2. Что напечатает программа?",
          "en": "Exercise 3: the program reads 3 whole numbers and prints their average.\n```\nScanner sc = new Scanner(System.in);\nint a = sc.nextInt();\nint b = sc.nextInt();\nint c = sc.nextInt();\nint sum = a + b + c;\nSystem.out.println(sum / 3);\n```\nExample with other numbers: the user typed 2, 3, 3 → `sum` = 8 → `8 / 3`: both numbers are `int`, so the fraction is dropped → the program prints 2.\nYour task: The user typed 3 numbers one after another: 1, 2, 2. What does the program print?"
        },
        "options": [
          "1",
          "1.6666666666666667",
          "2"
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "`sum` הוא `int`, וגם 3 הוא `int`.",
            "ru": "`sum` — `int`, и 3 тоже `int`.",
            "en": "`sum` is an `int`, and 3 is an `int` too."
          },
          {
            "he": "מה עושה חילוק בשלמים עם השבר?",
            "ru": "Что делает целочисленное деление с дробью?",
            "en": "What does integer division do with the fraction?"
          }
        ],
        "solution": [
          "sum = 1 + 2 + 2 = 5",
          "5 / 3 = 1.666...",
          {
            "he": "חילוק בשלמים זורק את השבר: 1",
            "ru": "Целочисленное деление отбрасывает дробь: 1",
            "en": "Integer division drops the fraction: 1"
          },
          {
            "he": "הנכון לשאלה: `sum / 3.0` → 1.6666666666666667",
            "ru": "Правильно для задания: `sum / 3.0` → 1.6666666666666667",
            "en": "Correct for the question: `sum / 3.0` → 1.6666666666666667"
          }
        ]
      },
      {
        "id": "s4",
        "group": "sheet",
        "label": "4",
        "kind": "number",
        "text": {
          "he": "שאלה 4: התוכנית קולטת שנת לידה ומדפיסה את הגיל (השנה 2026).\n```\nScanner sc = new Scanner(System.in);\nint year = sc.nextInt();\nSystem.out.println(\"your age is \" + (2026 - year) + \".\");\n```\nדוגמה עם מספרים אחרים: המשתמש הקליד 2000 → `2026 - 2000` = 26 → התוכנית תדפיס `your age is 26.`\nהמשימה שלך: המשתמש הקליד 1998. איזה מספר יופיע בשורה שהתוכנית תדפיס?",
          "ru": "Задание 4: программа читает год рождения и печатает возраст (сейчас 2026).\n```\nScanner sc = new Scanner(System.in);\nint year = sc.nextInt();\nSystem.out.println(\"your age is \" + (2026 - year) + \".\");\n```\nПример на других числах: пользователь ввёл 2000 → `2026 - 2000` = 26 → программа напечатает `your age is 26.`\nТвоя задача: Пользователь ввёл 1998. Какое число будет в строке, которую напечатает программа?",
          "en": "Exercise 4: the program reads a birth year and prints the age (it is 2026 now).\n```\nScanner sc = new Scanner(System.in);\nint year = sc.nextInt();\nSystem.out.println(\"your age is \" + (2026 - year) + \".\");\n```\nExample with other numbers: the user typed 2000 → `2026 - 2000` = 26 → the program prints `your age is 26.`\nYour task: The user typed 1998. What number is in the line the program prints?"
        },
        "answer": {
          "value": "28"
        },
        "hints": [
          {
            "he": "הסוגריים מחושבים לפני ההדבקה לטקסט.",
            "ru": "Скобки считаются до склейки с текстом.",
            "en": "The brackets are calculated before joining with the text."
          }
        ],
        "solution": [
          "int year = sc.nextInt();   // 1998",
          "2026 - 1998 = 28",
          {
            "he": "מודפס: your age is 28.",
            "ru": "Печатается: your age is 28.",
            "en": "Printed: your age is 28."
          }
        ]
      },
      {
        "id": "s5",
        "group": "sheet",
        "label": "5",
        "kind": "text",
        "text": {
          "he": "שאלה 5: התוכנית קולטת מספר דו-ספרתי ומדפיסה את ספרת העשרות ואת ספרת האחדות.\n```\nScanner sc = new Scanner(System.in);\nint n = sc.nextInt();\nSystem.out.println(n / 10);\nSystem.out.println(n % 10);\n```\nדוגמה עם מספרים אחרים: המשתמש הקליד 83 → `83 / 10` = 8 (השבר נזרק) → `83 % 10` = 3 (השארית) → התוכנית תדפיס 8 ו־3.\nהמשימה שלך: המשתמש הקליד 47. התוכנית מדפיסה שתי שורות. מה כתוב בהן? כתבו עם רווח, למשל: 1 2",
          "ru": "Задание 5: программа читает двузначное число и печатает цифру десятков и цифру единиц.\n```\nScanner sc = new Scanner(System.in);\nint n = sc.nextInt();\nSystem.out.println(n / 10);\nSystem.out.println(n % 10);\n```\nПример на других числах: пользователь ввёл 83 → `83 / 10` = 8 (дробь отбрасывается) → `83 % 10` = 3 (остаток) → программа напечатает 8 и 3.\nТвоя задача: Пользователь ввёл 47. Программа печатает две строки. Что в них? Напиши через пробел, например: 1 2",
          "en": "Exercise 5: the program reads a two-digit number and prints the tens digit and the ones digit.\n```\nScanner sc = new Scanner(System.in);\nint n = sc.nextInt();\nSystem.out.println(n / 10);\nSystem.out.println(n % 10);\n```\nExample with other numbers: the user typed 83 → `83 / 10` = 8 (the fraction is dropped) → `83 % 10` = 3 (the remainder) → the program prints 8 and 3.\nYour task: The user typed 47. The program prints two lines. What is in them? Write them with a space, for example: 1 2"
        },
        "answer": {
          "accept": [
            "4 7"
          ]
        },
        "hints": [
          {
            "he": "`/ 10` מוחק את הספרה האחרונה, `% 10` לוקח אותה.",
            "ru": "`/ 10` стирает последнюю цифру, `% 10` берёт её.",
            "en": "`/ 10` removes the last digit, `% 10` takes it."
          }
        ],
        "solution": [
          "47 / 10 = 4",
          "47 % 10 = 7",
          {
            "he": "תשובה: 4 ואז 7",
            "ru": "Ответ: 4, потом 7",
            "en": "Answer: 4, then 7"
          }
        ]
      },
      {
        "id": "s6",
        "group": "sheet",
        "label": "6",
        "kind": "text",
        "text": {
          "he": "שאלה 6: התוכנית קולטת מספר ימים ומדפיסה כמה שבועות וימים זה.\n```\nScanner sc = new Scanner(System.in);\nint days = sc.nextInt();\nSystem.out.println(days / 7 + \" weeks and \" + days % 7 + \" days\");\n```\nדוגמה עם מספרים אחרים: המשתמש הקליד 10 → `10 / 7` = 1 → `10 % 7` = 3 → התוכנית תדפיס `1 weeks and 3 days`.\nהמשימה שלך: המשתמש הקליד 17. מה התוכנית תדפיס?",
          "ru": "Задание 6: программа читает число дней и печатает, сколько это недель и дней.\n```\nScanner sc = new Scanner(System.in);\nint days = sc.nextInt();\nSystem.out.println(days / 7 + \" weeks and \" + days % 7 + \" days\");\n```\nПример на других числах: пользователь ввёл 10 → `10 / 7` = 1 → `10 % 7` = 3 → программа напечатает `1 weeks and 3 days`.\nТвоя задача: Пользователь ввёл 17. Что напечатает программа?",
          "en": "Exercise 6: the program reads a number of days and prints how many weeks and days that is.\n```\nScanner sc = new Scanner(System.in);\nint days = sc.nextInt();\nSystem.out.println(days / 7 + \" weeks and \" + days % 7 + \" days\");\n```\nExample with other numbers: the user typed 10 → `10 / 7` = 1 → `10 % 7` = 3 → the program prints `1 weeks and 3 days`.\nYour task: The user typed 17. What does the program print?"
        },
        "answer": {
          "accept": [
            "2 weeks and 3 days"
          ]
        },
        "hints": [
          {
            "he": "`17 / 7` — כמה שבועות שלמים? `17 % 7` — כמה ימים נשארו?",
            "ru": "`17 / 7` — сколько целых недель? `17 % 7` — сколько дней осталось?",
            "en": "`17 / 7` — how many whole weeks? `17 % 7` — how many days are left?"
          }
        ],
        "solution": [
          "17 / 7 = 2",
          "17 % 7 = 17 - 14 = 3",
          "→  \"2 weeks and 3 days\""
        ]
      },
      {
        "id": "s8",
        "group": "sheet",
        "label": "8",
        "kind": "number",
        "text": {
          "he": "שאלה 8: התוכנית קולטת מספר תלת-ספרתי ומדפיסה את סכום הספרות שלו.\n```\nScanner sc = new Scanner(System.in);\nint n = sc.nextInt();\nSystem.out.println(n / 100 + n / 10 % 10 + n % 10);\n```\nדוגמה עם מספרים אחרים: המשתמש הקליד 314 → `314 / 100` = 3 → `314 / 10 % 10` = 1 → `314 % 10` = 4 → יחד 3 ו־1 ו־4 הם 8 → התוכנית תדפיס 8.\nהמשימה שלך: המשתמש הקליד 258. מה התוכנית תדפיס?",
          "ru": "Задание 8: программа читает трёхзначное число и печатает сумму его цифр.\n```\nScanner sc = new Scanner(System.in);\nint n = sc.nextInt();\nSystem.out.println(n / 100 + n / 10 % 10 + n % 10);\n```\nПример на других числах: пользователь ввёл 314 → `314 / 100` = 3 → `314 / 10 % 10` = 1 → `314 % 10` = 4 → 3 и 1 и 4 вместе 8 → программа напечатает 8.\nТвоя задача: Пользователь ввёл 258. Что напечатает программа?",
          "en": "Exercise 8: the program reads a three-digit number and prints the sum of its digits.\n```\nScanner sc = new Scanner(System.in);\nint n = sc.nextInt();\nSystem.out.println(n / 100 + n / 10 % 10 + n % 10);\n```\nExample with other numbers: the user typed 314 → `314 / 100` = 3 → `314 / 10 % 10` = 1 → `314 % 10` = 4 → 3 and 1 and 4 together make 8 → the program prints 8.\nYour task: The user typed 258. What does the program print?"
        },
        "answer": {
          "value": "15"
        },
        "hints": [
          {
            "he": "חשבו כל ספרה בנפרד: מאות, עשרות, אחדות.",
            "ru": "Посчитай каждую цифру отдельно: сотни, десятки, единицы.",
            "en": "Work out each digit separately: hundreds, tens, units."
          },
          {
            "he": "`258 / 10 % 10`: קודם `258 / 10 = 25`, אחר כך `25 % 10`.",
            "ru": "`258 / 10 % 10`: сначала `258 / 10 = 25`, потом `25 % 10`.",
            "en": "`258 / 10 % 10`: first `258 / 10 = 25`, then `25 % 10`."
          }
        ],
        "solution": [
          "258 / 100 = 2",
          "258 / 10 = 25  →  25 % 10 = 5",
          "258 % 10 = 8",
          "2 + 5 + 8 = 15",
          {
            "he": "תשובה: 15",
            "ru": "Ответ: 15",
            "en": "Answer: 15"
          }
        ]
      },
      {
        "id": "s9",
        "group": "sheet",
        "label": "9",
        "kind": "text",
        "text": {
          "he": "שאלה 9: התוכנית קולטת מספר דקות ומדפיסה כמה שעות ודקות זה.\n```\nScanner sc = new Scanner(System.in);\nint num = sc.nextInt();\nSystem.out.println(num / 60 + \" hours and \" + num % 60 + \" minutes\");\n```\nדוגמה עם מספרים אחרים: המשתמש הקליד 75 → `75 / 60` = 1 → `75 % 60` = 15 → התוכנית תדפיס `1 hours and 15 minutes`.\nהמשימה שלך: המשתמש הקליד 130. מה התוכנית תדפיס?",
          "ru": "Задание 9: программа читает число минут и печатает, сколько это часов и минут.\n```\nScanner sc = new Scanner(System.in);\nint num = sc.nextInt();\nSystem.out.println(num / 60 + \" hours and \" + num % 60 + \" minutes\");\n```\nПример на других числах: пользователь ввёл 75 → `75 / 60` = 1 → `75 % 60` = 15 → программа напечатает `1 hours and 15 minutes`.\nТвоя задача: Пользователь ввёл 130. Что напечатает программа?",
          "en": "Exercise 9: the program reads a number of minutes and prints how many hours and minutes that is.\n```\nScanner sc = new Scanner(System.in);\nint num = sc.nextInt();\nSystem.out.println(num / 60 + \" hours and \" + num % 60 + \" minutes\");\n```\nExample with other numbers: the user typed 75 → `75 / 60` = 1 → `75 % 60` = 15 → the program prints `1 hours and 15 minutes`.\nYour task: The user typed 130. What does the program print?"
        },
        "answer": {
          "accept": [
            "2 hours and 10 minutes"
          ]
        },
        "hints": [
          {
            "he": "`130 / 60` שעות שלמות, `130 % 60` דקות שנשארו.",
            "ru": "`130 / 60` — целые часы, `130 % 60` — оставшиеся минуты.",
            "en": "`130 / 60` whole hours, `130 % 60` minutes left."
          }
        ],
        "solution": [
          "130 / 60 = 2",
          "130 % 60 = 130 - 120 = 10",
          "→  \"2 hours and 10 minutes\""
        ]
      },
      {
        "id": "s12",
        "group": "sheet",
        "label": "12",
        "kind": "text",
        "text": {
          "he": "שאלה 12: ציון 55 ומעלה — `Pass`, אחרת `Fail`.\n```\nScanner sc = new Scanner(System.in);\nint grade = sc.nextInt();\nif (grade >= 55) System.out.println(\"Pass\");\nelse System.out.println(\"Fail\");\n```\nדוגמה עם מספרים אחרים: המשתמש הקליד 54 → `54 >= 55` לא → התוכנית תדפיס `Fail`.\nהמשימה שלך: המשתמש הקליד 55. מה התוכנית תדפיס?",
          "ru": "Задание 12: оценка 55 и выше — `Pass`, иначе `Fail`.\n```\nScanner sc = new Scanner(System.in);\nint grade = sc.nextInt();\nif (grade >= 55) System.out.println(\"Pass\");\nelse System.out.println(\"Fail\");\n```\nПример на других числах: пользователь ввёл 54 → `54 >= 55` нет → программа напечатает `Fail`.\nТвоя задача: Пользователь ввёл 55. Что напечатает программа?",
          "en": "Exercise 12: a grade of 55 or more is `Pass`, otherwise `Fail`.\n```\nScanner sc = new Scanner(System.in);\nint grade = sc.nextInt();\nif (grade >= 55) System.out.println(\"Pass\");\nelse System.out.println(\"Fail\");\n```\nExample with other numbers: the user typed 54 → `54 >= 55` no → the program prints `Fail`.\nYour task: The user typed 55. What does the program print?"
        },
        "answer": {
          "accept": [
            "Pass"
          ]
        },
        "hints": [
          {
            "he": "האם `55 >= 55`? `>=` כולל את השוויון.",
            "ru": "`55 >= 55`? `>=` включает равенство.",
            "en": "Is `55 >= 55`? `>=` includes equality."
          }
        ],
        "solution": [
          "55 >= 55  →  true",
          {
            "he": "מודפס Pass",
            "ru": "Печатается Pass",
            "en": "Pass is printed"
          }
        ]
      },
      {
        "id": "s14",
        "group": "sheet",
        "label": "14",
        "kind": "number",
        "text": {
          "he": "שאלה 14: מחיר מעל 1000 — הנחה של 10%, אחרת המחיר המקורי.\n```\nScanner sc = new Scanner(System.in);\ndouble price = sc.nextDouble();\nif (price > 1000) System.out.println(price * 0.9);\nelse System.out.println(price);\n```\nדוגמה עם מספרים אחרים: המשתמש הקליד 800 → `800 > 1000` לא → התוכנית תדפיס את המחיר בלי הנחה: `800.0` (`price` הוא `double`, ולכן עם `.0`).\nהמשימה שלך: המשתמש הקליד 1500. איזה מספר התוכנית תדפיס?",
          "ru": "Задание 14: цена выше 1000 — скидка 10%, иначе исходная цена.\n```\nScanner sc = new Scanner(System.in);\ndouble price = sc.nextDouble();\nif (price > 1000) System.out.println(price * 0.9);\nelse System.out.println(price);\n```\nПример на других числах: пользователь ввёл 800 → `800 > 1000` нет → программа напечатает цену без скидки: `800.0` (`price` — `double`, поэтому с `.0`).\nТвоя задача: Пользователь ввёл 1500. Какое число напечатает программа?",
          "en": "Exercise 14: a price over 1000 gets a 10% discount, otherwise the original price.\n```\nScanner sc = new Scanner(System.in);\ndouble price = sc.nextDouble();\nif (price > 1000) System.out.println(price * 0.9);\nelse System.out.println(price);\n```\nExample with other numbers: the user typed 800 → `800 > 1000` no → the program prints the price without a discount: `800.0` (`price` is a `double`, so it has `.0`).\nYour task: The user typed 1500. What number does the program print?"
        },
        "answer": {
          "value": "1350"
        },
        "hints": [
          {
            "he": "הנחה של 10% = משלמים 90% מהמחיר.",
            "ru": "Скидка 10% = платим 90% цены.",
            "en": "A 10% discount = you pay 90% of the price."
          }
        ],
        "solution": [
          "1500 > 1000  →  true",
          "1500 * 0.9 = 1350.0",
          {
            "he": "מודפס 1350.0",
            "ru": "Печатается 1350.0",
            "en": "1350.0 is printed"
          }
        ]
      },
      {
        "id": "s16",
        "group": "sheet",
        "label": "16",
        "kind": "text",
        "text": {
          "he": "שאלה 16: התוכנית קולטת מספר חודש ומדפיסה עונה (12, 1, 2 — Winter; 3–5 — Spring; 6–8 — Summer; 9–11 — Autumn; אחרת Error).\n```\nScanner sc = new Scanner(System.in);\nint m = sc.nextInt();\nif (m == 12 || m == 1 || m == 2) System.out.println(\"Winter\");\nelse if (m >= 3 && m <= 5) System.out.println(\"Spring\");\nelse if (m >= 6 && m <= 8) System.out.println(\"Summer\");\nelse if (m >= 9 && m <= 11) System.out.println(\"Autumn\");\nelse System.out.println(\"Error\");\n```\nדוגמה עם מספרים אחרים: המשתמש הקליד 7 → התנאי הראשון לא → `7 >= 3 && 7 <= 5` לא → `7 >= 6 && 7 <= 8` כן → התוכנית תדפיס `Summer`.\nהמשימה שלך: המשתמש הקליד 4. מה התוכנית תדפיס?",
          "ru": "Задание 16: программа читает номер месяца и печатает время года (12, 1, 2 — Winter; 3–5 — Spring; 6–8 — Summer; 9–11 — Autumn; иначе Error).\n```\nScanner sc = new Scanner(System.in);\nint m = sc.nextInt();\nif (m == 12 || m == 1 || m == 2) System.out.println(\"Winter\");\nelse if (m >= 3 && m <= 5) System.out.println(\"Spring\");\nelse if (m >= 6 && m <= 8) System.out.println(\"Summer\");\nelse if (m >= 9 && m <= 11) System.out.println(\"Autumn\");\nelse System.out.println(\"Error\");\n```\nПример на других числах: пользователь ввёл 7 → первое условие нет → `7 >= 3 && 7 <= 5` нет → `7 >= 6 && 7 <= 8` да → программа напечатает `Summer`.\nТвоя задача: Пользователь ввёл 4. Что напечатает программа?",
          "en": "Exercise 16: the program reads a month number and prints the season (12, 1, 2 is Winter; 3–5 Spring; 6–8 Summer; 9–11 Autumn; otherwise Error).\n```\nScanner sc = new Scanner(System.in);\nint m = sc.nextInt();\nif (m == 12 || m == 1 || m == 2) System.out.println(\"Winter\");\nelse if (m >= 3 && m <= 5) System.out.println(\"Spring\");\nelse if (m >= 6 && m <= 8) System.out.println(\"Summer\");\nelse if (m >= 9 && m <= 11) System.out.println(\"Autumn\");\nelse System.out.println(\"Error\");\n```\nExample with other numbers: the user typed 7 → the first condition no → `7 >= 3 && 7 <= 5` no → `7 >= 6 && 7 <= 8` yes → the program prints `Summer`.\nYour task: The user typed 4. What does the program print?"
        },
        "answer": {
          "accept": [
            "Spring"
          ]
        },
        "hints": [
          {
            "he": "בדקו את התנאים לפי הסדר עם m = 4.",
            "ru": "Проверяй условия по порядку при m = 4.",
            "en": "Check the conditions in order with m = 4."
          }
        ],
        "solution": [
          "4 == 12 || 4 == 1 || 4 == 2  →  false",
          "4 >= 3 && 4 <= 5  →  true && true  →  true",
          {
            "he": "מודפס Spring",
            "ru": "Печатается Spring",
            "en": "Spring is printed"
          }
        ]
      },
      {
        "id": "s18",
        "group": "sheet",
        "label": "18",
        "kind": "choice",
        "text": {
          "he": "שאלה 18: האם אפשר לבנות משולש מהצלעות 3, 4, 8? (סכום כל שתי צלעות גדול מהשלישית)\n`if (a + b > c && a + c > b && b + c > a) System.out.println(\"Yes\");`\n`else System.out.println(\"No\");`",
          "ru": "Задание 18: можно ли построить треугольник со сторонами 3, 4, 8? (сумма любых двух сторон больше третьей)\n`if (a + b > c && a + c > b && b + c > a) System.out.println(\"Yes\");`\n`else System.out.println(\"No\");`",
          "en": "Question 18: can sides 3, 4, 8 make a triangle? (the sum of any two sides is greater than the third)\n`if (a + b > c && a + c > b && b + c > a) System.out.println(\"Yes\");`\n`else System.out.println(\"No\");`"
        },
        "options": [
          "Yes",
          "No"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "התחילו מ-`a + b > c`: האם `3 + 4 > 8`?",
            "ru": "Начни с `a + b > c`: `3 + 4 > 8`?",
            "en": "Start with `a + b > c`: is `3 + 4 > 8`?"
          }
        ],
        "solution": [
          "3 + 4 = 7,  7 > 8  →  false",
          {
            "he": "ב-`&&` מספיק `false` אחד, וכל התנאי `false`",
            "ru": "В `&&` хватает одного `false` — всё условие `false`",
            "en": "In `&&` one `false` is enough — the whole condition is `false`"
          },
          {
            "he": "מודפס No",
            "ru": "Печатается No",
            "en": "No is printed"
          }
        ]
      },
      {
        "id": "s20",
        "group": "sheet",
        "label": "20",
        "kind": "number",
        "text": {
          "he": "שאלה 20: מס מדורג. כתבו תוכנית שקולטת משכורת `m` (`double`) ומדפיסה את המס עם `System.out.println`. עד 6,000 — אין מס. על החלק שבין 6,000 ל-12,000 משלמים 10%. על כל שקל מעל 12,000 משלמים 20%. מה תדפיס התוכנית עבור הקלט 15000?",
          "ru": "Задание 20: ступенчатый налог. Напиши программу, которая вводит зарплату `m` (`double`) и печатает налог через `System.out.println`. До 6 000 — налога нет. С части между 6 000 и 12 000 платят 10%. С каждого шекеля выше 12 000 платят 20%. Что напечатает программа при вводе 15000?",
          "en": "Question 20: progressive tax. Write a program that reads a salary `m` (`double`) and prints the tax with `System.out.println`. Up to 6,000 — no tax. On the part between 6,000 and 12,000 you pay 10%. On every shekel above 12,000 you pay 20%. What does the program print for input 15000?"
        },
        "answer": {
          "value": "1200"
        },
        "hints": [
          {
            "he": "שלושה ענפים: `if (m <= 6000)`, `else if (m <= 12000)`, `else`.",
            "ru": "Три ветки: `if (m <= 6000)`, `else if (m <= 12000)`, `else`.",
            "en": "Three branches: `if (m <= 6000)`, `else if (m <= 12000)`, `else`."
          },
          {
            "he": "בענף האמצעי: `(m - 6000) * 0.10`. בענף האחרון החלק האמצעי כבר מלא (600), ומוסיפים `(m - 12000) * 0.20`.",
            "ru": "В средней ветке: `(m - 6000) * 0.10`. В последней средняя часть уже полная (600), и прибавляем `(m - 12000) * 0.20`.",
            "en": "Middle branch: `(m - 6000) * 0.10`. In the last branch the middle part is already full (600), and you add `(m - 12000) * 0.20`."
          }
        ],
        "solution": [
          "double m = sc.nextDouble();",
          "double tax;",
          "if (m <= 6000) tax = 0;",
          "else if (m <= 12000) tax = (m - 6000) * 0.10;",
          "else tax = 600 + (m - 12000) * 0.20;",
          "System.out.println(tax);",
          {
            "he": "קלט 15000: גדול מ-12000, ולכן רץ הענף `else`.",
            "ru": "Ввод 15000: больше 12000, поэтому работает ветка `else`.",
            "en": "Input 15000: more than 12000, so the `else` branch runs."
          },
          "tax = 600 + (15000 - 12000) * 0.20 = 600 + 600.0 = 1200.0",
          {
            "he": "מודפס: 1200.0 (ולא 1500 — 10% רק על החלק האמצעי)",
            "ru": "Печатается: 1200.0 (а не 1500 — 10% только со средней части)",
            "en": "Printed: 1200.0 (not 1500 — 10% only on the middle part)"
          }
        ]
      },
      {
        "id": "f1",
        "group": "for",
        "label": {
          "he": "זוגיים עד 20",
          "ru": "Чётные до 20",
          "en": "Evens to 20"
        },
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`int sum = 0;`\n`for (int i = 2; i <= 20; i += 2) {`\n`    sum += i;`\n`}`\n`System.out.println(sum);`",
          "ru": "Что будет напечатано?\n`int sum = 0;`\n`for (int i = 2; i <= 20; i += 2) {`\n`    sum += i;`\n`}`\n`System.out.println(sum);`",
          "en": "What is printed?\n`int sum = 0;`\n`for (int i = 2; i <= 20; i += 2) {`\n`    sum += i;`\n`}`\n`System.out.println(sum);`"
        },
        "answer": {
          "value": "110"
        },
        "hints": [
          {
            "he": "אילו ערכים מקבל i? 2, 4, 6, ... עד 20.",
            "ru": "Какие значения принимает i? 2, 4, 6, ... до 20.",
            "en": "Which values does i take? 2, 4, 6, ... up to 20."
          },
          {
            "he": "חברו בזוגות: 2 + 20, 4 + 18, ... כל זוג 22.",
            "ru": "Складывай парами: 2 + 20, 4 + 18, ... каждая пара 22.",
            "en": "Add in pairs: 2 + 20, 4 + 18, ... each pair is 22."
          }
        ],
        "solution": [
          "i = 2   →  sum = 2",
          "i = 4   →  sum = 6",
          "i = 6   →  sum = 12",
          "i = 8   →  sum = 20",
          "i = 10  →  sum = 30",
          "i = 12  →  sum = 42",
          "i = 14  →  sum = 56",
          "i = 16  →  sum = 72",
          "i = 18  →  sum = 90",
          "i = 20  →  sum = 110",
          {
            "he": "i = 22: התנאי `22 <= 20` הוא `false`, הלולאה נגמרת. מודפס 110",
            "ru": "i = 22: условие `22 <= 20` — `false`, цикл заканчивается. Печатается 110",
            "en": "i = 22: the condition `22 <= 20` is `false`, the loop ends. 110 is printed"
          }
        ]
      },
      {
        "id": "f2",
        "group": "for",
        "label": {
          "he": "ממוצע של 8",
          "ru": "Среднее 8 чисел",
          "en": "Average of 8"
        },
        "kind": "number",
        "text": {
          "he": "התוכנית מהמסך קלטה 8 מספרים והדפיסה `The sum is 160`. מה יודפס בשורה הבאה?\n`double average = (double) sum / 8;`\n`System.out.println(\"The average is \" + average);`",
          "ru": "Программа с экрана прочитала 8 чисел и напечатала `The sum is 160`. Что будет в следующей строке?\n`double average = (double) sum / 8;`\n`System.out.println(\"The average is \" + average);`",
          "en": "The program on screen read 8 numbers and printed `The sum is 160`. What is printed on the next line?\n`double average = (double) sum / 8;`\n`System.out.println(\"The average is \" + average);`"
        },
        "answer": {
          "value": "20"
        },
        "hints": [
          {
            "he": "`(double)` הופך את 160 ל-160.0 לפני החילוק.",
            "ru": "`(double)` превращает 160 в 160.0 до деления.",
            "en": "`(double)` turns 160 into 160.0 before the division."
          }
        ],
        "solution": [
          "(double) 160 = 160.0",
          "160.0 / 8 = 20.0",
          {
            "he": "מודפס: The average is 20.0",
            "ru": "Печатается: The average is 20.0",
            "en": "Printed: The average is 20.0"
          }
        ]
      },
      {
        "id": "mc1",
        "group": "course",
        "label": "else",
        "kind": "text",
        "text": {
          "he": "מה יודפס?\n`int x = 5;`\n`if (x > 3)`\n`    if (x > 10)`\n`        System.out.println(\"A\");`\n`    else`\n`        System.out.println(\"B\");`",
          "ru": "Что напечатает?\n`int x = 5;`\n`if (x > 3)`\n`    if (x > 10)`\n`        System.out.println(\"A\");`\n`    else`\n`        System.out.println(\"B\");`",
          "en": "What is printed?\n`int x = 5;`\n`if (x > 3)`\n`    if (x > 10)`\n`        System.out.println(\"A\");`\n`    else`\n`        System.out.println(\"B\");`"
        },
        "answer": {
          "accept": [
            "B"
          ]
        },
        "hints": [
          {
            "he": "`else` שייך ל-`if` הקרוב ביותר — `x > 10`.",
            "ru": "`else` относится к ближайшему `if` — `x > 10`.",
            "en": "The `else` belongs to the nearest `if` — `x > 10`."
          }
        ],
        "solution": [
          "5 > 3  →  true",
          "5 > 10  →  false  →  else",
          {
            "he": "תשובה: B",
            "ru": "Ответ: B",
            "en": "Answer: B"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "mc2",
        "group": "course",
        "label": "else 2",
        "kind": "text",
        "text": {
          "he": "אותו קוד, אבל `int x = 2;`. מה יודפס? אם כלום — כתבו: כלום",
          "ru": "Тот же код, но `int x = 2;`. Что напечатает? Если ничего — напиши: ничего",
          "en": "The same code but `int x = 2;`. What is printed? If nothing, write: nothing"
        },
        "answer": {
          "accept": [
            "כלום",
            "ничего",
            "nothing",
            "אין",
            "нет"
          ]
        },
        "hints": [
          {
            "he": "ה-`else` שייך ל-`if` הפנימי. האם בכלל נכנסים אליו?",
            "ru": "`else` принадлежит внутреннему `if`. А в него вообще заходим?",
            "en": "The `else` belongs to the inner `if`. Do we even get there?"
          }
        ],
        "solution": [
          "2 > 3  →  false",
          {
            "he": "ה-if החיצוני לא מתקיים, ולו אין else — לא מודפס כלום.",
            "ru": "Внешний if не выполняется, а у него нет else — ничего не печатается.",
            "en": "The outer if is false and it has no else — nothing is printed."
          },
          {
            "he": "תשובה: כלום",
            "ru": "Ответ: ничего",
            "en": "Answer: nothing"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "mc3",
        "group": "course",
        "label": {
          "he": "בלוק",
          "ru": "Блок",
          "en": "Block"
        },
        "kind": "text",
        "text": {
          "he": "מה יודפס? כתבו את מה שיודפס ברווח, למשל: A B\n`int k = 7;`\n`if (k > 10)`\n`    System.out.println(\"R\");`\n`    System.out.println(\"S\");`",
          "ru": "Что напечатает? Напиши всё через пробел, например: A B\n`int k = 7;`\n`if (k > 10)`\n`    System.out.println(\"R\");`\n`    System.out.println(\"S\");`",
          "en": "What is printed? Write everything with spaces, e.g.: A B\n`int k = 7;`\n`if (k > 10)`\n`    System.out.println(\"R\");`\n`    System.out.println(\"S\");`"
        },
        "answer": {
          "accept": [
            "S"
          ]
        },
        "hints": [
          {
            "he": "בלי `{ }` ה-if שולט רק בשורה אחת.",
            "ru": "Без `{ }` if управляет только одной строкой.",
            "en": "Without `{ }` the if controls only one line."
          }
        ],
        "solution": [
          {
            "he": "7 > 10  →  false  →  R לא מודפס",
            "ru": "7 > 10  →  false  →  R не печатается",
            "en": "7 > 10  →  false  →  R is not printed"
          },
          {
            "he": "`S` לא בתוך ה-if, ולכן מודפס תמיד.",
            "ru": "`S` не внутри if, поэтому печатается всегда.",
            "en": "`S` is not inside the if, so it always prints."
          },
          {
            "he": "תשובה: S",
            "ru": "Ответ: S",
            "en": "Answer: S"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "mc4",
        "group": "course",
        "label": "&& ||",
        "kind": "choice",
        "text": {
          "he": "age = 16, license = false, special = true. מה התוצאה?\n`age > 18 && license || special`",
          "ru": "age = 16, license = false, special = true. Какой результат?\n`age > 18 && license || special`",
          "en": "age = 16, license = false, special = true. What is the result?\n`age > 18 && license || special`"
        },
        "options": [
          "true",
          "false"
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "`&&` קודם: `(age > 18 && license)`.",
            "ru": "Сначала `&&`: `(age > 18 && license)`.",
            "en": "`&&` first: `(age > 18 && license)`."
          }
        ],
        "solution": [
          "16 > 18  →  false",
          "false && false  →  false",
          "false || true  →  true",
          {
            "he": "תשובה: true",
            "ru": "Ответ: true",
            "en": "Answer: true"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "mc5",
        "group": "course",
        "label": "&& ( || )",
        "kind": "choice",
        "text": {
          "he": "אותם ערכים, עם סוגריים. מה התוצאה?\n`age > 18 && (license || special)`",
          "ru": "Те же значения, со скобками. Какой результат?\n`age > 18 && (license || special)`",
          "en": "Same values, with brackets. What is the result?\n`age > 18 && (license || special)`"
        },
        "options": [
          "true",
          "false"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "אם החלק השמאלי של `&&` שקרי — הכול שקרי.",
            "ru": "Если левая часть `&&` ложна — всё ложно.",
            "en": "If the left side of `&&` is false, everything is false."
          }
        ],
        "solution": [
          "license || special  →  true",
          "16 > 18  →  false",
          "false && true  →  false",
          {
            "he": "תשובה: false",
            "ru": "Ответ: false",
            "en": "Answer: false"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "mc6",
        "group": "course",
        "label": {
          "he": "בדיוק 100",
          "ru": "Ровно 100",
          "en": "Exactly 100"
        },
        "kind": "text",
        "text": {
          "he": "מחומרי הקורס: תוכנית מדפיסה big אם המספר גדול מ-100, small אם קטן מ-100, ו-exactly אחרת. מה יודפס עבור 100?",
          "ru": "Из материалов курса: программа печатает big, если число больше 100, small — если меньше, иначе exactly. Что напечатает для 100?",
          "en": "From the course files: a program prints big if the number is over 100, small if under, otherwise exactly. What is printed for 100?"
        },
        "answer": {
          "accept": [
            "exactly"
          ]
        },
        "hints": [
          {
            "he": "100 לא גדול מ-100 וגם לא קטן ממנו.",
            "ru": "100 не больше 100 и не меньше.",
            "en": "100 is neither more nor less than 100."
          }
        ],
        "solution": [
          "if (n > 100)  →  false",
          "else if (n < 100)  →  false",
          "else  →  exactly",
          {
            "he": "לכן בחומר שואלים: האם הפתרון עם שני תנאים מכסה גם את 100?",
            "ru": "Поэтому в материалах спрашивают: покрывает ли решение из двух условий и 100?",
            "en": "That is why the files ask: does a two-condition solution cover 100 too?"
          },
          {
            "he": "תשובה: exactly",
            "ru": "Ответ: exactly",
            "en": "Answer: exactly"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "mc7",
        "group": "course",
        "label": {
          "he": "שטח טבעת",
          "ru": "Площадь кольца",
          "en": "Ring area"
        },
        "kind": "number",
        "text": {
          "he": "מחומרי הקורס: שני מעגלים עם מרכז משותף, רדיוסים 3 ו-5 (בסדר כלשהו). מה שטח הטבעת ביניהם? (π = 3.14)",
          "ru": "Из материалов курса: два круга с общим центром, радиусы 3 и 5 (в любом порядке). Какова площадь кольца между ними? (π = 3.14)",
          "en": "From the course files: two circles with a shared centre, radii 3 and 5 (in any order). What is the area of the ring between them? (π = 3.14)"
        },
        "answer": {
          "value": "50.24"
        },
        "hints": [
          {
            "he": "שטח מעגל = π × r × r. מהשטח הגדול מחסירים את הקטן — לכן צריך `if`, כדי לדעת מי גדול.",
            "ru": "Площадь круга = π × r × r. Из большей вычитаем меньшую — поэтому нужен `if`, чтобы знать, какая больше.",
            "en": "Circle area = π × r × r. Subtract the smaller from the larger — that is why you need an `if` to know which is larger."
          }
        ],
        "solution": [
          "3.14 × 5 × 5 = 78.5",
          "3.14 × 3 × 3 = 28.26",
          "78.5 − 28.26 = 50.24",
          {
            "he": "תשובה: 50.24",
            "ru": "Ответ: 50.24",
            "en": "Answer: 50.24"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "mc8",
        "group": "course",
        "label": "charAt(0)",
        "kind": "text",
        "text": {
          "he": "התוכנית קולטת מילה ומדפיסה ממנה תו אחד.\n```\nScanner input = new Scanner(System.in);\nchar first = input.next().charAt(0);\nSystem.out.println(first);\n```\nדוגמה עם מספרים אחרים: המשתמש הקליד world → `charAt(0)` לוקח את התו במקום 0, כלומר הראשון → התוכנית תדפיס `w`.\nהמשימה שלך: המשתמש הקליד את המילה hello. מה התוכנית תדפיס?",
          "ru": "Программа читает слово и печатает один символ из него.\n```\nScanner input = new Scanner(System.in);\nchar first = input.next().charAt(0);\nSystem.out.println(first);\n```\nПример на других числах: пользователь ввёл world → `charAt(0)` берёт символ на месте 0, то есть самый первый → программа напечатает `w`.\nТвоя задача: Пользователь ввёл слово hello. Что напечатает программа?",
          "en": "The program reads a word and prints one character from it.\n```\nScanner input = new Scanner(System.in);\nchar first = input.next().charAt(0);\nSystem.out.println(first);\n```\nExample with other numbers: the user typed world → `charAt(0)` takes the character at place 0, the very first one → the program prints `w`.\nYour task: The user typed the word hello. What does the program print?"
        },
        "answer": {
          "accept": [
            "h"
          ]
        },
        "hints": [
          {
            "he": "הספירה מתחילה מ-0.",
            "ru": "Счёт начинается с 0.",
            "en": "Counting starts at 0."
          }
        ],
        "solution": [
          "next()  →  \"hello\"",
          "charAt(0)  →  h",
          {
            "he": "תשובה: h",
            "ru": "Ответ: h",
            "en": "Answer: h"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "wc1",
        "group": "ws",
        "label": {
          "he": "כניסה",
          "ru": "Вход",
          "en": "Entry"
        },
        "kind": "text",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס?\n`int age = 17;`\n`boolean hasParent = true;`\n`System.out.println(age > 18 || hasParent);`",
          "ru": "Из листа упражнений курса. Что напечатает?\n`int age = 17;`\n`boolean hasParent = true;`\n`System.out.println(age > 18 || hasParent);`",
          "en": "From the course worksheet. What is printed?\n`int age = 17;`\n`boolean hasParent = true;`\n`System.out.println(age > 18 || hasParent);`"
        },
        "answer": {
          "accept": [
            "true"
          ]
        },
        "hints": [
          {
            "he": "ב-`||` מספיק צד אחד.",
            "ru": "Для `||` хватает одной стороны.",
            "en": "For `||` one side is enough."
          }
        ],
        "solution": [
          "17 > 18  →  false",
          "false || true  →  true",
          {
            "he": "תשובה: true",
            "ru": "Ответ: true",
            "en": "Answer: true"
          }
        ],
        "_src": "pass-0311-ws"
      },
      {
        "id": "wc2",
        "group": "ws",
        "label": {
          "he": "תואר",
          "ru": "Диплом",
          "en": "Degree"
        },
        "kind": "text",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס?\n`double gpa = 3.9;`\n`int credits = 80;`\n`System.out.println(gpa > 3.0 && credits >= 100);`",
          "ru": "Из листа упражнений курса. Что напечатает?\n`double gpa = 3.9;`\n`int credits = 80;`\n`System.out.println(gpa > 3.0 && credits >= 100);`",
          "en": "From the course worksheet. What is printed?\n`double gpa = 3.9;`\n`int credits = 80;`\n`System.out.println(gpa > 3.0 && credits >= 100);`"
        },
        "answer": {
          "accept": [
            "false"
          ]
        },
        "hints": [
          {
            "he": "ב-`&&` צריך ששניהם יתקיימו.",
            "ru": "Для `&&` нужны обе стороны.",
            "en": "For `&&` both must hold."
          }
        ],
        "solution": [
          "3.9 > 3.0  →  true",
          "80 >= 100  →  false",
          "true && false  →  false",
          {
            "he": "תשובה: false",
            "ru": "Ответ: false",
            "en": "Answer: false"
          }
        ],
        "_src": "pass-0311-ws"
      },
      {
        "id": "wc3",
        "group": "ws",
        "label": {
          "he": "מס הכנסה",
          "ru": "Подоходный налог",
          "en": "Income tax"
        },
        "kind": "number",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס?\n`double salary = 12000;`\n`double creditPoints = 2.25;`\n`double tax;`\n`if (salary > 15000) tax = salary * 0.20;`\n`else if (salary > 8000) tax = salary * 0.10;`\n`else tax = salary * 0.05;`\n`tax = tax - 225 * creditPoints;`\n`System.out.println(tax);`",
          "ru": "Из листа упражнений курса. Что напечатает?\n`double salary = 12000;`\n`double creditPoints = 2.25;`\n`double tax;`\n`if (salary > 15000) tax = salary * 0.20;`\n`else if (salary > 8000) tax = salary * 0.10;`\n`else tax = salary * 0.05;`\n`tax = tax - 225 * creditPoints;`\n`System.out.println(tax);`",
          "en": "From the course worksheet. What is printed?\n`double salary = 12000;`\n`double creditPoints = 2.25;`\n`double tax;`\n`if (salary > 15000) tax = salary * 0.20;`\n`else if (salary > 8000) tax = salary * 0.10;`\n`else tax = salary * 0.05;`\n`tax = tax - 225 * creditPoints;`\n`System.out.println(tax);`"
        },
        "answer": {
          "value": "693.75"
        },
        "hints": [
          {
            "he": "איזה תנאי מתקיים ראשון עבור 12000?",
            "ru": "Какое условие первым выполнится для 12000?",
            "en": "Which condition is true first for 12000?"
          }
        ],
        "solution": [
          "12000 > 15000  →  false",
          "12000 > 8000  →  true  →  tax = 1200",
          "225 × 2.25 = 506.25",
          "1200 − 506.25 = 693.75",
          {
            "he": "תשובה: 693.75",
            "ru": "Ответ: 693.75",
            "en": "Answer: 693.75"
          }
        ],
        "_src": "pass-0311-ws"
      },
      {
        "id": "wc4",
        "group": "ws",
        "label": {
          "he": "מס 2",
          "ru": "Налог 2",
          "en": "Tax 2"
        },
        "kind": "number",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס?\n`// same code, salary = 22000, creditPoints = 1.0`",
          "ru": "Из листа упражнений курса. Что напечатает?\n`// same code, salary = 22000, creditPoints = 1.0`",
          "en": "From the course worksheet. What is printed?\n`// same code, salary = 22000, creditPoints = 1.0`"
        },
        "answer": {
          "value": "4175.0"
        },
        "hints": [
          {
            "he": "22000 גדול מ-15000.",
            "ru": "22000 больше 15000.",
            "en": "22000 is over 15000."
          }
        ],
        "solution": [
          "tax = 22000 × 0.20 = 4400",
          "4400 − 225 × 1.0 = 4175.0",
          {
            "he": "תשובה: 4175.0",
            "ru": "Ответ: 4175.0",
            "en": "Answer: 4175.0"
          }
        ],
        "_src": "pass-0311-ws"
      },
      {
        "id": "wc5",
        "group": "ws",
        "label": "A / B / C",
        "kind": "text",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס?\n`int x = 10;`\n`int y = 5;`\n`boolean z = false;`\n`if (x > y || !z) {`\n`    if (x * 2 > 20) {`\n`        System.out.println(\"A\");`\n`    } else {`\n`        System.out.println(\"B\");`\n`    }`\n`} else {`\n`    System.out.println(\"C\");`\n`}`",
          "ru": "Из листа упражнений курса. Что напечатает?\n`int x = 10;`\n`int y = 5;`\n`boolean z = false;`\n`if (x > y || !z) {`\n`    if (x * 2 > 20) {`\n`        System.out.println(\"A\");`\n`    } else {`\n`        System.out.println(\"B\");`\n`    }`\n`} else {`\n`    System.out.println(\"C\");`\n`}`",
          "en": "From the course worksheet. What is printed?\n`int x = 10;`\n`int y = 5;`\n`boolean z = false;`\n`if (x > y || !z) {`\n`    if (x * 2 > 20) {`\n`        System.out.println(\"A\");`\n`    } else {`\n`        System.out.println(\"B\");`\n`    }`\n`} else {`\n`    System.out.println(\"C\");`\n`}`"
        },
        "answer": {
          "accept": [
            "B"
          ]
        },
        "hints": [
          {
            "he": "`x * 2 > 20` — האם 20 גדול מ-20?",
            "ru": "`x * 2 > 20` — 20 больше 20?",
            "en": "`x * 2 > 20` — is 20 more than 20?"
          }
        ],
        "solution": [
          "10 > 5  →  true  →  inside",
          "20 > 20  →  false  →  else",
          {
            "he": "תשובה: B",
            "ru": "Ответ: B",
            "en": "Answer: B"
          }
        ],
        "_src": "pass-0311-ws"
      },
      {
        "id": "wc6",
        "group": "ws",
        "label": "H1 / H2 / H3",
        "kind": "text",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס?\n`int temp = 25;`\n`int limit = 30;`\n`boolean warning = false;`\n`if (temp > limit && !warning) {`\n`    System.out.println(\"H1\");`\n`} else if (temp == limit) {`\n`    System.out.println(\"H2\");`\n`} else {`\n`    System.out.println(\"H3\");`\n`}`",
          "ru": "Из листа упражнений курса. Что напечатает?\n`int temp = 25;`\n`int limit = 30;`\n`boolean warning = false;`\n`if (temp > limit && !warning) {`\n`    System.out.println(\"H1\");`\n`} else if (temp == limit) {`\n`    System.out.println(\"H2\");`\n`} else {`\n`    System.out.println(\"H3\");`\n`}`",
          "en": "From the course worksheet. What is printed?\n`int temp = 25;`\n`int limit = 30;`\n`boolean warning = false;`\n`if (temp > limit && !warning) {`\n`    System.out.println(\"H1\");`\n`} else if (temp == limit) {`\n`    System.out.println(\"H2\");`\n`} else {`\n`    System.out.println(\"H3\");`\n`}`"
        },
        "answer": {
          "accept": [
            "H3"
          ]
        },
        "hints": [
          {
            "he": "25 > 30?",
            "ru": "25 > 30?",
            "en": "25 > 30?"
          }
        ],
        "solution": [
          "25 > 30  →  false",
          "25 == 30  →  false",
          "else  →  H3",
          {
            "he": "תשובה: H3",
            "ru": "Ответ: H3",
            "en": "Answer: H3"
          }
        ],
        "_src": "pass-0311-ws"
      },
      {
        "id": "wc7",
        "group": "ws",
        "label": "I1 / I2 / I3",
        "kind": "text",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס?\n`int num = 7;`\n`boolean isValid = true;`\n`if (num % 2 == 1 && isValid) {`\n`    if (num > 5) {`\n`        System.out.println(\"I1\");`\n`    } else {`\n`        System.out.println(\"I2\");`\n`    }`\n`} else {`\n`    System.out.println(\"I3\");`\n`}`",
          "ru": "Из листа упражнений курса. Что напечатает?\n`int num = 7;`\n`boolean isValid = true;`\n`if (num % 2 == 1 && isValid) {`\n`    if (num > 5) {`\n`        System.out.println(\"I1\");`\n`    } else {`\n`        System.out.println(\"I2\");`\n`    }`\n`} else {`\n`    System.out.println(\"I3\");`\n`}`",
          "en": "From the course worksheet. What is printed?\n`int num = 7;`\n`boolean isValid = true;`\n`if (num % 2 == 1 && isValid) {`\n`    if (num > 5) {`\n`        System.out.println(\"I1\");`\n`    } else {`\n`        System.out.println(\"I2\");`\n`    }`\n`} else {`\n`    System.out.println(\"I3\");`\n`}`"
        },
        "answer": {
          "accept": [
            "I1"
          ]
        },
        "hints": [
          {
            "he": "`7 % 2` = ?",
            "ru": "`7 % 2` = ?",
            "en": "`7 % 2` = ?"
          }
        ],
        "solution": [
          "7 % 2 = 1  →  true && true",
          "7 > 5  →  true  →  I1",
          {
            "he": "תשובה: I1",
            "ru": "Ответ: I1",
            "en": "Answer: I1"
          }
        ],
        "_src": "pass-0311-ws"
      },
      {
        "id": "r1",
        "group": "rec",
        "label": {
          "he": "אי-זוגיים",
          "ru": "Нечётные",
          "en": "Odd"
        },
        "kind": "text",
        "text": {
          "he": "מהשיעור. מה יודפס? כתבו כך: 1 2\n`for (int i = 1; i <= 7; i += 2) {`\n`    System.out.print(i + \" \");`\n`}`",
          "ru": "С урока. Что напечатает? Напиши так: 1 2\n`for (int i = 1; i <= 7; i += 2) {`\n`    System.out.print(i + \" \");`\n`}`",
          "en": "From class. What is printed? Write like: 1 2\n`for (int i = 1; i <= 7; i += 2) {`\n`    System.out.print(i + \" \");`\n`}`"
        },
        "answer": {
          "accept": [
            "1 3 5 7"
          ]
        },
        "hints": [
          {
            "he": "מתחילים ב-1 ועולים ב-2.",
            "ru": "Начинаем с 1 и прибавляем 2.",
            "en": "Start at 1 and add 2."
          }
        ],
        "solution": [
          "i = 1  →  1",
          "i = 3  →  3",
          "i = 5  →  5",
          "i = 7  →  7",
          "i = 9  →  9 <= 7 false, stop",
          {
            "he": "תשובה: 1 3 5 7",
            "ru": "Ответ: 1 3 5 7",
            "en": "Answer: 1 3 5 7"
          }
        ],
        "_src": "rec-2510"
      },
      {
        "id": "r2",
        "group": "rec",
        "label": {
          "he": "לאחור",
          "ru": "Назад",
          "en": "Down"
        },
        "kind": "number",
        "text": {
          "he": "מהשיעור. מה יודפס?\n`for (int i = 5; i >= 1; i--) {`\n`    System.out.print(i);`\n`}`",
          "ru": "С урока. Что напечатает?\n`for (int i = 5; i >= 1; i--) {`\n`    System.out.print(i);`\n`}`",
          "en": "From class. What is printed?\n`for (int i = 5; i >= 1; i--) {`\n`    System.out.print(i);`\n`}`"
        },
        "answer": {
          "value": "54321"
        },
        "hints": [
          {
            "he": "`print` בלי רווח — הכול צמוד.",
            "ru": "`print` без пробела — всё подряд.",
            "en": "`print` with no space — all together."
          }
        ],
        "solution": [
          "i = 5, 4, 3, 2, 1",
          "i = 0  →  0 >= 1 false, stop",
          {
            "he": "תשובה: 54321",
            "ru": "Ответ: 54321",
            "en": "Answer: 54321"
          }
        ],
        "_src": "rec-2510"
      },
      {
        "id": "r3",
        "group": "rec",
        "label": {
          "he": "מכפלה",
          "ru": "Произведение",
          "en": "Product"
        },
        "kind": "number",
        "text": {
          "he": "מהשיעור. מה יודפס?\n`int p = 1;`\n`for (int i = 1; i <= 4; i++) {`\n`    p *= i;`\n`}`\n`System.out.println(p);`",
          "ru": "С урока. Что напечатает?\n`int p = 1;`\n`for (int i = 1; i <= 4; i++) {`\n`    p *= i;`\n`}`\n`System.out.println(p);`",
          "en": "From class. What is printed?\n`int p = 1;`\n`for (int i = 1; i <= 4; i++) {`\n`    p *= i;`\n`}`\n`System.out.println(p);`"
        },
        "answer": {
          "value": "24"
        },
        "hints": [
          {
            "he": "1 × 1 × 2 × 3 × 4",
            "ru": "1 × 1 × 2 × 3 × 4",
            "en": "1 × 1 × 2 × 3 × 4"
          }
        ],
        "solution": [
          "p = 1",
          "p = 1 × 1 = 1",
          "p = 1 × 2 = 2",
          "p = 2 × 3 = 6",
          "p = 6 × 4 = 24",
          {
            "he": "תשובה: 24",
            "ru": "Ответ: 24",
            "en": "Answer: 24"
          }
        ],
        "_src": "rec-2510"
      },
      {
        "id": "r4",
        "group": "rec",
        "label": {
          "he": "מכפלה מ-0",
          "ru": "Произведение с 0",
          "en": "Product from 0"
        },
        "kind": "number",
        "text": {
          "he": "מהשיעור. מה יודפס?\n`int p = 0;`\n`for (int i = 1; i <= 4; i++) {`\n`    p *= i;`\n`}`\n`System.out.println(p);`",
          "ru": "С урока. Что напечатает?\n`int p = 0;`\n`for (int i = 1; i <= 4; i++) {`\n`    p *= i;`\n`}`\n`System.out.println(p);`",
          "en": "From class. What is printed?\n`int p = 0;`\n`for (int i = 1; i <= 4; i++) {`\n`    p *= i;`\n`}`\n`System.out.println(p);`"
        },
        "answer": {
          "value": "0"
        },
        "hints": [
          {
            "he": "במה מתחיל p?",
            "ru": "С чего начинается p?",
            "en": "What does p start at?"
          }
        ],
        "solution": [
          "p = 0",
          "0 × 1 = 0",
          "0 × 2 = 0",
          "0 × 3 = 0",
          "0 × 4 = 0",
          {
            "he": "תשובה: 0",
            "ru": "Ответ: 0",
            "en": "Answer: 0"
          }
        ],
        "_src": "rec-2510"
      },
      {
        "id": "r5",
        "group": "rec",
        "label": {
          "he": "חזקה",
          "ru": "Степень",
          "en": "Power"
        },
        "kind": "number",
        "text": {
          "he": "מהשיעור. מה יודפס?\n`int r = 1;`\n`for (int i = 0; i < 5; i++) {`\n`    r *= 3;`\n`}`\n`System.out.println(r);`",
          "ru": "С урока. Что напечатает?\n`int r = 1;`\n`for (int i = 0; i < 5; i++) {`\n`    r *= 3;`\n`}`\n`System.out.println(r);`",
          "en": "From class. What is printed?\n`int r = 1;`\n`for (int i = 0; i < 5; i++) {`\n`    r *= 3;`\n`}`\n`System.out.println(r);`"
        },
        "answer": {
          "value": "243"
        },
        "hints": [
          {
            "he": "כמה סיבובים? i = 0 עד 4.",
            "ru": "Сколько кругов? i = 0 до 4.",
            "en": "How many rounds? i = 0 to 4."
          }
        ],
        "solution": [
          "r = 3",
          "r = 9",
          "r = 27",
          "r = 81",
          "r = 243",
          {
            "he": "תשובה: 243",
            "ru": "Ответ: 243",
            "en": "Answer: 243"
          }
        ],
        "_src": "rec-2510"
      },
      {
        "id": "r6",
        "group": "rec",
        "label": {
          "he": "תחום",
          "ru": "Область видимости",
          "en": "Scope"
        },
        "kind": "choice",
        "text": {
          "he": "מהשיעור. מה יקרה?\n`for (int i = 0; i < 3; i++) {`\n`}`\n`System.out.println(i);`",
          "ru": "С урока. Что произойдёт?\n`for (int i = 0; i < 3; i++) {`\n`}`\n`System.out.println(i);`",
          "en": "From class. What happens?\n`for (int i = 0; i < 3; i++) {`\n`}`\n`System.out.println(i);`"
        },
        "options": [
          {
            "he": "יודפס 3",
            "ru": "Напечатает 3",
            "en": "Prints 3"
          },
          {
            "he": "יודפס 2",
            "ru": "Напечатает 2",
            "en": "Prints 2"
          },
          {
            "he": "שגיאת קומפילציה",
            "ru": "Ошибка компиляции",
            "en": "Compile error"
          }
        ],
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "איפה הוגדר `i`?",
            "ru": "Где объявлена `i`?",
            "en": "Where is `i` declared?"
          }
        ],
        "solution": [
          {
            "he": "`i` הוגדר בתוך ה-`for`.",
            "ru": "`i` объявлена внутри `for`.",
            "en": "`i` is declared inside the `for`."
          },
          {
            "he": "אחרי `}` הוא כבר לא קיים: cannot find symbol.",
            "ru": "После `}` её уже нет: cannot find symbol.",
            "en": "After `}` it no longer exists: cannot find symbol."
          },
          {
            "he": "תשובה: שגיאת קומפילציה",
            "ru": "Ответ — ошибка компиляции",
            "en": "Answer — compile error"
          }
        ],
        "_src": "rec-2510"
      }
    ],
    "ai": [
      {
        "id": "b1",
        "level": 1,
        "label": "B1",
        "kind": "text",
        "text": {
          "he": "מה יודפס?\n`int t = 30;`\n`if (t > 25) System.out.println(\"Hot\");`\n`else System.out.println(\"Cold\");`",
          "ru": "Что будет напечатано?\n`int t = 30;`\n`if (t > 25) System.out.println(\"Hot\");`\n`else System.out.println(\"Cold\");`",
          "en": "What is printed?\n`int t = 30;`\n`if (t > 25) System.out.println(\"Hot\");`\n`else System.out.println(\"Cold\");`"
        },
        "answer": {
          "accept": [
            "Hot"
          ]
        },
        "hints": [
          {
            "he": "האם `30 > 25`?",
            "ru": "`30 > 25`?",
            "en": "Is `30 > 25`?"
          }
        ],
        "solution": [
          "30 > 25  →  true",
          {
            "he": "מתבצע ענף ה-`if`: מודפס Hot",
            "ru": "Выполняется ветка `if`: печатается Hot",
            "en": "The `if` branch runs: Hot is printed"
          }
        ]
      },
      {
        "id": "b2",
        "level": 1,
        "label": "B2",
        "kind": "choice",
        "text": {
          "he": "מה יודפס?\n`System.out.println(15 % 2 == 0);`",
          "ru": "Что будет напечатано?\n`System.out.println(15 % 2 == 0);`",
          "en": "What is printed?\n`System.out.println(15 % 2 == 0);`"
        },
        "options": [
          "true",
          "false",
          "1"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "קודם `15 % 2`, אחר כך ההשוואה עם 0.",
            "ru": "Сначала `15 % 2`, потом сравнение с 0.",
            "en": "First `15 % 2`, then the comparison with 0."
          }
        ],
        "solution": [
          "15 % 2 = 1",
          "1 == 0  →  false",
          {
            "he": "ההשוואה מחזירה `boolean`: false (15 אי-זוגי)",
            "ru": "Сравнение даёт `boolean`: false (15 нечётное)",
            "en": "The comparison gives a `boolean`: false (15 is odd)"
          }
        ]
      },
      {
        "id": "b3",
        "level": 1,
        "label": "B3",
        "kind": "choice",
        "text": {
          "he": "איזה תנאי בודק ש-x נמצא בין 7 ל-10 (כולל)?",
          "ru": "Какое условие проверяет, что x от 7 до 10 (включительно)?",
          "en": "Which condition checks that x is between 7 and 10 (inclusive)?"
        },
        "options": [
          "7 <= x <= 10",
          "x >= 7 && x <= 10",
          "x >= 7 || x <= 10"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "ב-Java כל השוואה היא בין שני ערכים בלבד.",
            "ru": "В Java каждое сравнение — только между двумя значениями.",
            "en": "In Java each comparison is between two values only."
          },
          {
            "he": "צריך ששני התנאים יתקיימו יחד — `&&` או `||`?",
            "ru": "Нужно, чтобы оба условия выполнялись вместе — `&&` или `||`?",
            "en": "Both conditions must hold together — `&&` or `||`?"
          }
        ],
        "solution": [
          {
            "he": "`7 <= x <= 10` לא מתקמפל: `7 <= x` נותן `boolean`, ואי אפשר להשוות `boolean` עם 10.",
            "ru": "`7 <= x <= 10` не компилируется: `7 <= x` даёт `boolean`, а `boolean` с 10 сравнить нельзя.",
            "en": "`7 <= x <= 10` does not compile: `7 <= x` gives a `boolean`, and a `boolean` cannot be compared with 10."
          },
          {
            "he": "עם `||` כל מספר עובר (למשל 50: `50 >= 7` הוא `true`).",
            "ru": "С `||` проходит любое число (например, 50: `50 >= 7` — `true`).",
            "en": "With `||` any number passes (e.g. 50: `50 >= 7` is `true`)."
          },
          {
            "he": "תשובה: `x >= 7 && x <= 10`",
            "ru": "Ответ: `x >= 7 && x <= 10`",
            "en": "Answer: `x >= 7 && x <= 10`"
          }
        ]
      },
      {
        "id": "b4",
        "level": 2,
        "label": "B4",
        "kind": "text",
        "text": {
          "he": "מה יודפס?\n`int g = 85;`\n`if (g >= 90) System.out.println(\"A\");`\n`else if (g >= 80) System.out.println(\"B\");`\n`else if (g >= 55) System.out.println(\"C\");`\n`else System.out.println(\"F\");`",
          "ru": "Что будет напечатано?\n`int g = 85;`\n`if (g >= 90) System.out.println(\"A\");`\n`else if (g >= 80) System.out.println(\"B\");`\n`else if (g >= 55) System.out.println(\"C\");`\n`else System.out.println(\"F\");`",
          "en": "What is printed?\n`int g = 85;`\n`if (g >= 90) System.out.println(\"A\");`\n`else if (g >= 80) System.out.println(\"B\");`\n`else if (g >= 55) System.out.println(\"C\");`\n`else System.out.println(\"F\");`"
        },
        "answer": {
          "accept": [
            "B"
          ]
        },
        "hints": [
          {
            "he": "מלמעלה למטה, עד התנאי הראשון שהוא `true`.",
            "ru": "Сверху вниз, до первого условия с `true`.",
            "en": "Top to bottom, until the first `true` condition."
          },
          {
            "he": "גם `85 >= 55` נכון — אבל האם Java בכלל מגיעה לשם?",
            "ru": "`85 >= 55` тоже верно — но дойдёт ли Java туда?",
            "en": "`85 >= 55` is also true — but does Java even get there?"
          }
        ],
        "solution": [
          "85 >= 90  →  false",
          "85 >= 80  →  true",
          {
            "he": "מודפס B, והשאר מדולגים (גם ש-`85 >= 55`)",
            "ru": "Печатается B, остальное пропускается (хотя `85 >= 55`)",
            "en": "B is printed and the rest is skipped (even though `85 >= 55`)"
          }
        ]
      },
      {
        "id": "b5",
        "level": 2,
        "label": "B5",
        "kind": "text",
        "text": {
          "he": "מה יודפס? (כתבו את השורות עם רווח ביניהן)\n`int x = 15;`\n`if (x > 5) System.out.println(\"A\");`\n`if (x > 10) System.out.println(\"B\");`\n`else System.out.println(\"C\");`",
          "ru": "Что будет напечатано? (напиши строки через пробел)\n`int x = 15;`\n`if (x > 5) System.out.println(\"A\");`\n`if (x > 10) System.out.println(\"B\");`\n`else System.out.println(\"C\");`",
          "en": "What is printed? (write the lines separated by a space)\n`int x = 15;`\n`if (x > 5) System.out.println(\"A\");`\n`if (x > 10) System.out.println(\"B\");`\n`else System.out.println(\"C\");`"
        },
        "answer": {
          "accept": [
            "A B"
          ]
        },
        "hints": [
          {
            "he": "כאן יש שני `if` נפרדים. ה-`else` שייך רק ל-`if` השני.",
            "ru": "Здесь два отдельных `if`. `else` относится только ко второму `if`.",
            "en": "There are two separate `if`s here. The `else` belongs only to the second `if`."
          }
        ],
        "solution": [
          {
            "he": "`if` ראשון: 15 > 5 → true → מודפס A",
            "ru": "Первый `if`: 15 > 5 → true → печатается A",
            "en": "First `if`: 15 > 5 → true → A is printed"
          },
          {
            "he": "`if` שני נבדק בכל מקרה: 15 > 10 → true → מודפס B",
            "ru": "Второй `if` проверяется в любом случае: 15 > 10 → true → печатается B",
            "en": "The second `if` is checked anyway: 15 > 10 → true → B is printed"
          },
          {
            "he": "תשובה: A B. עם `else if` היה מודפס רק A.",
            "ru": "Ответ: A B. С `else if` напечаталось бы только A.",
            "en": "Answer: A B. With `else if` only A would be printed."
          }
        ]
      },
      {
        "id": "b6",
        "level": 2,
        "label": "B6",
        "kind": "choice",
        "text": {
          "he": "מה יודפס?\n`boolean b = 3 + 2 * 4 > 10 || 5 % 2 == 0 && false;`\n`System.out.println(b);`",
          "ru": "Что будет напечатано?\n`boolean b = 3 + 2 * 4 > 10 || 5 % 2 == 0 && false;`\n`System.out.println(b);`",
          "en": "What is printed?\n`boolean b = 3 + 2 * 4 > 10 || 5 % 2 == 0 && false;`\n`System.out.println(b);`"
        },
        "options": [
          "true",
          "false"
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "לפי סדר הפעולות מהלוח: חשבון, השוואות, ואז האופרטורים הלוגיים.",
            "ru": "По порядку действий с доски: арифметика, сравнения, потом логические операторы.",
            "en": "Follow the order from the board: arithmetic, comparisons, then logical operators."
          },
          {
            "he": "`&&` מחושב לפני `||`.",
            "ru": "`&&` считается раньше `||`.",
            "en": "`&&` is evaluated before `||`."
          }
        ],
        "solution": [
          "2 * 4 = 8,  5 % 2 = 1",
          "3 + 8 = 11",
          "11 > 10  →  true,   1 == 0  →  false",
          "true || false && false",
          "false && false  →  false",
          "true || false  →  true",
          {
            "he": "מודפס true",
            "ru": "Печатается true",
            "en": "true is printed"
          }
        ]
      },
      {
        "id": "b7",
        "level": 2,
        "label": "B7",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`int s = 0;`\n`for (int i = 1; i <= 5; i++) {`\n`    s += i;`\n`}`\n`System.out.println(s);`",
          "ru": "Что будет напечатано?\n`int s = 0;`\n`for (int i = 1; i <= 5; i++) {`\n`    s += i;`\n`}`\n`System.out.println(s);`",
          "en": "What is printed?\n`int s = 0;`\n`for (int i = 1; i <= 5; i++) {`\n`    s += i;`\n`}`\n`System.out.println(s);`"
        },
        "answer": {
          "value": "15"
        },
        "hints": [
          {
            "he": "עקבו אחרי i ו-s בכל סיבוב.",
            "ru": "Следи за i и s в каждом проходе.",
            "en": "Track i and s on every round."
          }
        ],
        "solution": [
          "i = 1  →  s = 1",
          "i = 2  →  s = 3",
          "i = 3  →  s = 6",
          "i = 4  →  s = 10",
          "i = 5  →  s = 15",
          {
            "he": "i = 6: `6 <= 5` הוא `false`, סוף. מודפס 15",
            "ru": "i = 6: `6 <= 5` — `false`, конец. Печатается 15",
            "en": "i = 6: `6 <= 5` is `false`, done. 15 is printed"
          }
        ]
      },
      {
        "id": "b8",
        "level": 3,
        "label": "B8",
        "kind": "text",
        "text": {
          "he": "מה יודפס?\n`int x = 8;`\n`if (x % 3 == 0 && x % 4 == 0) System.out.println(\"both\");`\n`else if (x % 3 == 0 || x % 4 == 0) System.out.println(\"one\");`\n`else System.out.println(\"none\");`",
          "ru": "Что будет напечатано?\n`int x = 8;`\n`if (x % 3 == 0 && x % 4 == 0) System.out.println(\"both\");`\n`else if (x % 3 == 0 || x % 4 == 0) System.out.println(\"one\");`\n`else System.out.println(\"none\");`",
          "en": "What is printed?\n`int x = 8;`\n`if (x % 3 == 0 && x % 4 == 0) System.out.println(\"both\");`\n`else if (x % 3 == 0 || x % 4 == 0) System.out.println(\"one\");`\n`else System.out.println(\"none\");`"
        },
        "answer": {
          "accept": [
            "one"
          ]
        },
        "hints": [
          {
            "he": "האם 8 מתחלק ב-3? האם 8 מתחלק ב-4?",
            "ru": "8 делится на 3? 8 делится на 4?",
            "en": "Is 8 divisible by 3? Is 8 divisible by 4?"
          }
        ],
        "solution": [
          "8 % 3 = 2  →  8 % 3 == 0  →  false",
          "8 % 4 = 0  →  8 % 4 == 0  →  true",
          "false && true  →  false",
          "false || true  →  true",
          {
            "he": "מודפס one",
            "ru": "Печатается one",
            "en": "one is printed"
          }
        ]
      },
      {
        "id": "b9",
        "level": 3,
        "label": "B9",
        "kind": "text",
        "text": {
          "he": "מה יודפס? (המספרים מודפסים באותה שורה)\n`for (int i = 0; i < 10; i += 3) {`\n`    System.out.print(i + \" \");`\n`}`",
          "ru": "Что будет напечатано? (числа в одной строке)\n`for (int i = 0; i < 10; i += 3) {`\n`    System.out.print(i + \" \");`\n`}`",
          "en": "What is printed? (the numbers are on one line)\n`for (int i = 0; i < 10; i += 3) {`\n`    System.out.print(i + \" \");`\n`}`"
        },
        "answer": {
          "accept": [
            "0 3 6 9"
          ]
        },
        "hints": [
          {
            "he": "מתחילים מ-0 ומוסיפים 3 בכל פעם, כל עוד `i < 10`.",
            "ru": "Начинаем с 0 и каждый раз прибавляем 3, пока `i < 10`.",
            "en": "Start at 0 and add 3 each time, while `i < 10`."
          }
        ],
        "solution": [
          "i = 0  →  0 < 10  →  print 0",
          "i = 3  →  3 < 10  →  print 3",
          "i = 6  →  6 < 10  →  print 6",
          "i = 9  →  9 < 10  →  print 9",
          "i = 12  →  12 < 10  →  false",
          {
            "he": "תשובה: 0 3 6 9",
            "ru": "Ответ: 0 3 6 9",
            "en": "Answer: 0 3 6 9"
          }
        ]
      },
      {
        "id": "b10",
        "level": 3,
        "label": "B10",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`double total = 250;`\n`if (total >= 200 && total < 500) {`\n`    total -= 20;`\n`} else if (total >= 500) {`\n`    total *= 0.9;`\n`}`\n`System.out.println(total);`",
          "ru": "Что будет напечатано?\n`double total = 250;`\n`if (total >= 200 && total < 500) {`\n`    total -= 20;`\n`} else if (total >= 500) {`\n`    total *= 0.9;`\n`}`\n`System.out.println(total);`",
          "en": "What is printed?\n`double total = 250;`\n`if (total >= 200 && total < 500) {`\n`    total -= 20;`\n`} else if (total >= 500) {`\n`    total *= 0.9;`\n`}`\n`System.out.println(total);`"
        },
        "answer": {
          "value": "230"
        },
        "hints": [
          {
            "he": "באיזה טווח נמצא 250?",
            "ru": "В каком промежутке 250?",
            "en": "Which range is 250 in?"
          }
        ],
        "solution": [
          "250 >= 200  →  true",
          "250 < 500  →  true",
          "true && true  →  true",
          "total = 250 - 20 = 230.0",
          {
            "he": "ה-`else if` מדולג. מודפס 230.0",
            "ru": "`else if` пропускается. Печатается 230.0",
            "en": "The `else if` is skipped. 230.0 is printed"
          }
        ]
      }
    ]
  }
};

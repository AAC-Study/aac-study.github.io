/* Lesson data — format: see the comment at the top of data/lessons/math-2026-11-01.js.
   Every "what does it print" answer in this file was checked by compiling and running
   the Java code (javac/java 21) with the given input. */
window.LESSONS = window.LESSONS || {};
window.LESSONS['algo-2026-10-25'] = {
  id: 'algo-2026-10-25',
  subject: 'algo',
  date: '2026-10-25',
  title: { he: 'קלט, משפטי תנאי ואופרטורים לוגיים', ru: 'Ввод, условия и логические операторы', en: 'Input, conditions and logical operators' },
  summary: {
    he: 'קלט עם `Scanner`, משפטי תנאי `if` / `else if` / `else`, האופרטורים `&&` ו־`||` וטבלת האמת, סדר פעולות, מקסימום של שלושה מספרים, ובסוף — התחלה של לולאת `for`.',
    ru: 'Ввод через `Scanner`, условия `if` / `else if` / `else`, операторы `&&` и `||` и таблица истинности, порядок действий, максимум из трёх чисел, а в конце — начало цикла `for`.',
    en: 'Input with `Scanner`, `if` / `else if` / `else` conditions, the `&&` and `||` operators and the truth table, order of operations, the maximum of three numbers, and at the end — the start of the `for` loop.'
  },

  timeline: [
    { kind: 'board',
      title: { he: 'קלט מהמשתמש', ru: 'Ввод с клавиатуры', en: 'Input from the user' },
      text: {
        he: 'עד עכשיו המספרים היו כתובים בתוך הקוד. כדי שהתוכנית תשאל את המשתמש, משתמשים ב-`Scanner`. על הלוח זה נכתב בשני שלבים:\nשלב I — הגדרת אובייקט הקלט (פעם אחת, בתחילת `main`).\nשלב II — הגדרת המשתנה: התוכנית מחכה שהמשתמש יקליד ויקיש Enter.\nבראש הקובץ צריך `import java.util.Scanner;` (IntelliJ מוסיף אותו).',
        ru: 'До сих пор числа были записаны прямо в коде. Чтобы программа спрашивала человека, используют `Scanner`. На доске это записано в два этапа:\nЭтап I — создать объект ввода (один раз, в начале `main`).\nЭтап II — определить переменную: программа ждёт, пока человек наберёт значение и нажмёт Enter.\nВ начале файла нужен `import java.util.Scanner;` (IntelliJ добавляет его сам).',
        en: 'Until now the numbers were written inside the code. To make the program ask the user, we use `Scanner`. On the board it was written in two stages:\nStage I — create the input object (once, at the start of `main`).\nStage II — define the variable: the program waits for the user to type and press Enter.\nAt the top of the file you need `import java.util.Scanner;` (IntelliJ adds it).'
      },
      math: ['Scanner scanner = new Scanner(System.in);', 'int x = scanner.nextInt();', 'double d = scanner.nextDouble();', 'String s = scanner.nextLine();'] },
    { kind: 'board',
      title: { he: 'פתרון על המסך: חישוב גיל (שאלה 4)', ru: 'Решение на экране: возраст (задание 4)', en: 'Solved on screen: age (question 4)' },
      text: {
        he: 'המרצה פתר על המסך את שאלה 4 מדף העבודה. בקלט 1998 התוכנית הדפיסה `your age is 28.`\nהסוגריים סביב `(2026 - year)` חובה: בלעדיהם Java קודם מדביקה את הטקסט ל-2026, ומטקסט אי אפשר לחסר.',
        ru: 'Преподаватель решил на экране задание 4 из листа. При вводе 1998 программа напечатала `your age is 28.`\nСкобки вокруг `(2026 - year)` обязательны: без них Java сначала склеит текст с 2026, а из текста вычитать нельзя.',
        en: 'The teacher solved question 4 of the worksheet on screen. With input 1998 the program printed `your age is 28.`\nThe brackets around `(2026 - year)` are required: without them Java first glues the text to 2026, and you cannot subtract from text.'
      },
      math: ['System.out.println("Please enter year of birth: ");', 'int year = scanner.nextInt();', 'System.out.println("your age is " + (2026 - year) + ".");'] },
    { kind: 'board',
      title: { he: 'משפטי תנאי: if / else', ru: 'Условия: if / else', en: 'Conditions: if / else' },
      text: {
        he: 'על הלוח: רוצים לבצע קוד בתנאי מסוים, ואת התנאי רושמים כ-`boolean` — ביטוי שנותן `true` או `false`.\nהתנאי בסוגריים עגולים, הקוד בסוגריים מסולסלים. החלק של `else` אופציונלי.',
        ru: 'На доске: хотим выполнить код при определённом условии, а условие записываем как `boolean` — выражение, которое даёт `true` или `false`.\nУсловие в круглых скобках, код в фигурных. Часть `else` необязательна.',
        en: 'On the board: we want to run code under a certain condition, and the condition is written as a `boolean` — an expression that gives `true` or `false`.\nThe condition goes in round brackets, the code in curly brackets. The `else` part is optional.'
      },
      math: ['if (condition) {', '    // runs when condition is true', '} else {', '    // other instructions (optional)', '}'] },
    { kind: 'board',
      title: { he: 'דוגמאות מהמסך: גיל', ru: 'Примеры с экрана: возраст', en: 'Screen examples: age' },
      text: {
        he: 'קודם `if (age > 18)` עם `Yes` / `No`. אחר כך שרשרת עם `else if`: Java בודקת מלמעלה למטה ומבצעת רק את הענף הראשון שבו התנאי `true`.\nקלט 25 → `Yes`, קלט 0 → `No`, קלט 10 → `ll`. שימו לב: 18 נותן `No` בדוגמה הראשונה, כי `18 > 18` הוא `false`.',
        ru: 'Сначала `if (age > 18)` с `Yes` / `No`. Потом цепочка с `else if`: Java проверяет сверху вниз и выполняет только первую ветку, где условие `true`.\nВвод 25 → `Yes`, ввод 0 → `No`, ввод 10 → `ll`. Заметь: 18 в первом примере даёт `No`, потому что `18 > 18` — это `false`.',
        en: 'First `if (age > 18)` with `Yes` / `No`. Then a chain with `else if`: Java checks from top to bottom and runs only the first branch whose condition is `true`.\nInput 25 → `Yes`, input 0 → `No`, input 10 → `ll`. Note: 18 gives `No` in the first example, because `18 > 18` is `false`.'
      },
      math: ['int age = sca.nextInt();', 'if (age > 18) {', '    System.out.println("Yes");', '} else if (age == 0) {', '    System.out.println("No");', '} else {', '    System.out.println("ll");', '}'] },
    { kind: 'board',
      title: { he: 'אופרטורים לוגיים וטבלת אמת', ru: 'Логические операторы и таблица истинности', en: 'Logical operators and the truth table' },
      text: {
        he: 'כדי לבדוק שני תנאים יחד מחברים אותם:\n`&&` (וגם) — `true` רק כששניהם `true`.\n`||` (או) — `true` כשלפחות אחד `true`.\n`!` (לא) — הופך: `!true` הוא `false`.\nטבלת האמת מהלוח (α, β — שני תנאים):',
        ru: 'Чтобы проверить два условия сразу, их соединяют:\n`&&` (и) — `true`, только когда оба `true`.\n`||` (или) — `true`, когда хотя бы одно `true`.\n`!` (не) — переворачивает: `!true` — это `false`.\nТаблица истинности с доски (α, β — два условия):',
        en: 'To check two conditions together, join them:\n`&&` (and) — `true` only when both are `true`.\n`||` (or) — `true` when at least one is `true`.\n`!` (not) — flips: `!true` is `false`.\nThe truth table from the board (α, β are two conditions):'
      },
      math: ['α      β      α && β    α || β', 'T      T        T         T', 'T      F        F         T', 'F      T        F         T', 'F      F        F         F'] },
    { kind: 'board',
      title: { he: 'טווח: "בין 7 ל-10"', ru: 'Промежуток: «от 7 до 10»', en: 'A range: "between 7 and 10"' },
      text: {
        he: 'במתמטיקה כותבים `7 ≤ age ≤ 10`, אבל ב-Java צריך שתי השוואות ו-`&&`.',
        ru: 'В математике пишут `7 ≤ age ≤ 10`, но в Java нужны два сравнения и `&&`.',
        en: 'In maths we write `7 ≤ age ≤ 10`, but in Java you need two comparisons and `&&`.'
      },
      math: ['if (age >= 7 && age <= 10) {', '    System.out.println("Yes");', '} else {', '    System.out.println("No");', '}'] },
    { kind: 'board',
      title: { he: 'זוגי או אי-זוגי: 87 ו-8', ru: 'Чётное или нечётное: 87 и 8', en: 'Even or odd: 87 and 8' },
      text: {
        he: 'המרצה הדפיס את התוצאה ישר כ-`boolean`, בלי `if`. `87 % 2` הוא 1, לכן `87 % 2 == 0` הוא `false`, ו-`8 % 2 == 0` הוא `true`.',
        ru: 'Преподаватель печатал результат сразу как `boolean`, без `if`. `87 % 2` — это 1, поэтому `87 % 2 == 0` — `false`, а `8 % 2 == 0` — `true`.',
        en: 'The teacher printed the result directly as a `boolean`, without `if`. `87 % 2` is 1, so `87 % 2 == 0` is `false`, and `8 % 2 == 0` is `true`.'
      },
      math: ['int x = 87;', 'int y = 8;', 'boolean res = x % 2 == 0 || y % 2 == 0;   // true', 'res = x % 2 == 0 && y % 2 == 0;           // false', 'res = x % 2 != 0;                         // true (87 is odd)'] },
    { kind: 'tip',
      title: { he: 'ככה אי אפשר: `x % 2 && 0`', ru: 'Так нельзя: `x % 2 && 0`', en: 'Not allowed: `x % 2 && 0`' },
      text: {
        he: 'המרצה הראה גם מה לא עובד: `boolean res = x % 2 && 0;` מסומן באדום. `x % 2` ו-`0` הם מספרים, ו-`&&` / `||` מחברים רק `true` / `false`. צריך לכתוב את ההשוואה עד הסוף: `x % 2 == 0`.',
        ru: 'Преподаватель показал и то, что не работает: `boolean res = x % 2 && 0;` подчёркнуто красным. `x % 2` и `0` — числа, а `&&` / `||` соединяют только `true` / `false`. Сравнение надо дописать: `x % 2 == 0`.',
        en: 'The teacher also showed what does not work: `boolean res = x % 2 && 0;` is underlined in red. `x % 2` and `0` are numbers, and `&&` / `||` only join `true` / `false`. Write the full comparison: `x % 2 == 0`.'
      } },
    { kind: 'board',
      title: { he: 'סדר פעולות', ru: 'Порядок действий', en: 'Order of operations' },
      text: {
        he: 'הרשימה מהלוח, מהראשון לאחרון:\n1. סוגריים\n2. כפל / חילוק (`*`, `/`, `%`)\n3. חיבור / חיסור\n4. בדיקה לוגית — השוואות (`>`, `<`, `==`, `!=` ...)\n5. אופרטורים לוגיים (`&&`, `||`)\n6. השמה (`=`)',
        ru: 'Список с доски, от первого к последнему:\n1. Скобки\n2. Умножение / деление (`*`, `/`, `%`)\n3. Сложение / вычитание\n4. Логическая проверка — сравнения (`>`, `<`, `==`, `!=` ...)\n5. Логические операторы (`&&`, `||`)\n6. Присваивание (`=`)',
        en: 'The list from the board, first to last:\n1. Brackets\n2. Multiplication / division (`*`, `/`, `%`)\n3. Addition / subtraction\n4. Logical check — comparisons (`>`, `<`, `==`, `!=` ...)\n5. Logical operators (`&&`, `||`)\n6. Assignment (`=`)'
      } },
    { kind: 'talk',
      title: { he: 'דף העבודה: 20 שאלות', ru: 'Рабочий лист: 20 заданий', en: 'The worksheet: 20 questions' },
      text: {
        he: 'דף העבודה "תכנות בסיסי ב-Java": חלק א׳ — קלט/פלט, משתנים ואופרטורים (1–9), חלק ב׳ — תנאים בסיסיים (10–14), חלק ג׳ — תנאים מורכבים ואופרטורים לוגיים (15–20).\nהכללים: כל הקוד בתוך `main`, קלט עם `Scanner`, ואסור להשתמש בלולאות, במערכים ובמתודות של `String`.\nהטיפ בסוף הדף: לתת למשתנים שמות משמעותיים (`salary` במקום `x`), ולפני תנאי מורכב לנסח את ההיגיון במילים ולהשתמש בסוגריים.',
        ru: 'Рабочий лист «תכנות בסיסי ב-Java»: часть א׳ — ввод/вывод, переменные и операторы (1–9), часть ב׳ — простые условия (10–14), часть ג׳ — сложные условия и логические операторы (15–20).\nПравила: весь код внутри `main`, ввод через `Scanner`, нельзя циклы, массивы и методы `String`.\nСовет внизу листа: давать переменным понятные имена (`salary`, а не `x`), а перед сложным условием проговорить логику словами и ставить скобки.',
        en: 'The worksheet "תכנות בסיסי ב-Java": part א׳ — input/output, variables and operators (1–9), part ב׳ — basic conditions (10–14), part ג׳ — complex conditions and logical operators (15–20).\nThe rules: all code inside `main`, input with `Scanner`, and no loops, arrays or `String` methods.\nThe tip at the bottom: give variables meaningful names (`salary` instead of `x`), and before a complex condition say the logic in words and use brackets.'
      } },
    { kind: 'board',
      title: { he: 'שאלה 15: המקסימום מבין 3 מספרים — שתי שיטות', ru: 'Задание 15: максимум из 3 чисел — два способа', en: 'Question 15: the maximum of 3 numbers — two methods' },
      text: {
        he: 'שיטה I — בדיקת כל המקרים עם `&&`: x הכי גדול אם `x >= y` וגם `x >= z`. אם לא — בודקים בין y ל-z. בענף האחרון מספיק `else`: אם הגענו אליו, z בטוח הכי גדול.\nשיטה II — תנאי מקונן: קודם משווים את x ו-y, ואת המנצח משווים עם z.',
        ru: 'Способ I — проверка всех случаев с `&&`: x наибольшее, если `x >= y` и `x >= z`. Если нет — сравниваем y и z. В последней ветке хватает `else`: если дошли до неё, z точно наибольшее.\nСпособ II — вложенное условие: сначала сравниваем x и y, а победителя — с z.',
        en: 'Method I — check all cases with `&&`: x is the largest if `x >= y` and `x >= z`. If not, compare y and z. In the last branch a plain `else` is enough: if we got there, z is surely the largest.\nMethod II — a nested condition: first compare x and y, then compare the winner with z.'
      },
      math: ['// I', 'if (x >= y && x >= z) System.out.println(x);', 'else if (y >= z) System.out.println(y);', 'else System.out.println(z);', '', '// II', 'if (x >= y) {', '    if (x >= z) System.out.println(x); else System.out.println(z);', '} else {', '    if (y >= z) System.out.println(y); else System.out.println(z);', '}'] },
    { kind: 'tip',
      title: { he: 'טעויות נפוצות בדף העבודה', ru: 'Частые ошибки в листе', en: 'Common mistakes on the worksheet' },
      text: {
        he: '1. `%` ב-Java הוא שארית, לא אחוזים. 10% ממחיר זה `price * 0.10`, ומחיר אחרי הנחה של 10% הוא `price * 0.9`.\n2. `if` ואחריו `if` נפרד — שניהם נבדקים. `else if` נבדק רק אם כל מה שמעליו היה `false`. לכן בשרשרת `if (m > 6000) ... else if (m > 12000)` הענף השני לעולם לא יתבצע: כל מספר מעל 12000 כבר נכנס לראשון. בודקים מהקטן לגדול: `m <= 6000`, `m <= 12000`, אחרת.\n3. `System.out.println(y = x * 0.9);` גם שומר ב-y וגם מדפיס.',
        ru: '1. `%` в Java — это остаток, а не проценты. 10% от цены — это `price * 0.10`, а цена со скидкой 10% — `price * 0.9`.\n2. `if` и после него отдельный `if` — проверяются оба. `else if` проверяется, только если всё выше было `false`. Поэтому в цепочке `if (m > 6000) ... else if (m > 12000)` вторая ветка не выполнится никогда: любое число больше 12000 уже попало в первую. Проверяем от меньшего к большему: `m <= 6000`, `m <= 12000`, иначе.\n3. `System.out.println(y = x * 0.9);` и кладёт значение в y, и печатает его.',
        en: '1. `%` in Java is the remainder, not percent. 10% of a price is `price * 0.10`, and the price after a 10% discount is `price * 0.9`.\n2. An `if` followed by a separate `if` — both are checked. An `else if` is checked only when everything above it was `false`. So in the chain `if (m > 6000) ... else if (m > 12000)` the second branch never runs: every number above 12000 already went into the first one. Check from small to large: `m <= 6000`, `m <= 12000`, otherwise.\n3. `System.out.println(y = x * 0.9);` both stores the value in y and prints it.'
      } },
    { kind: 'board',
      title: { he: 'נושא חדש: לולאת for', ru: 'Новая тема: цикл for', en: 'New topic: the for loop' },
      text: {
        he: 'מהלוח: לולאה היא בלוק של קוד שמתבצע כמות פעמים. לולאת `for` מגדירה מספר איטרציות קבוע מראש בעזרת משתנה מקומי ואופרטור התקדמות, והלולאה יכולה להשתמש במשתנה.\n`int i = 0` — ערך התחלתי (אתחול), פעם אחת בהתחלה.\n`i < 30` — תנאי עצירה, נבדק לפני כל סיבוב.\n`i++` — התקדמות, אחרי כל סיבוב.\nהדוגמה על הלוח: הדפיסו את כל המספרים מ-1 עד 200.',
        ru: 'С доски: цикл — это блок кода, который выполняется несколько раз. Цикл `for` задаёт заранее известное число итераций с помощью локальной переменной и оператора шага, и цикл может использовать эту переменную.\n`int i = 0` — начальное значение (инициализация), один раз в начале.\n`i < 30` — условие остановки, проверяется перед каждым проходом.\n`i++` — шаг, после каждого прохода.\nПример на доске: напечатайте все числа от 1 до 200.',
        en: 'From the board: a loop is a block of code that runs a number of times. A `for` loop sets a fixed number of iterations in advance with a local variable and a step operator, and the loop can use that variable.\n`int i = 0` — the starting value (initialisation), once at the start.\n`i < 30` — the stop condition, checked before every round.\n`i++` — the step, after every round.\nThe example on the board: print all the numbers from 1 to 200.'
      },
      math: ['for (int i = 0; i < 30; i++) {', '    // repeats 30 times: i = 0, 1, ..., 29', '}', '', 'for (int i = 1; i <= 200; i++) {', '    System.out.println(i);', '}'] },
    { kind: 'board',
      title: { he: 'סכום הזוגיים עד 20', ru: 'Сумма чётных до 20', en: 'The sum of even numbers up to 20' },
      text: {
        he: 'כאן הצעד הוא `i += 2`: מתחילים מ-2 וקופצים בשתיים. את `sum` מגדירים לפני הלולאה, כדי לצבור בו. על המסך יצא 110.',
        ru: 'Здесь шаг `i += 2`: начинаем с 2 и прыгаем через одно. `sum` объявляем до цикла, чтобы накапливать в нём. На экране получилось 110.',
        en: 'Here the step is `i += 2`: start at 2 and jump by two. `sum` is declared before the loop so it can collect the total. The screen showed 110.'
      },
      math: ['int sum = 0;', 'for (int i = 2; i <= 20; i += 2) {', '    sum += i;', '}', 'System.out.println(sum);   // 110'] },
    { kind: 'board',
      title: { he: 'כמות לפי המשתמש', ru: 'Количество задаёт пользователь', en: 'The user chooses how many' },
      text: {
        he: 'שאלה מהלוח: ואם רוצים להדפיס רצף של k מספרים לפי רצון המשתמש? כמות המספרים נתונה מראש, וחובה להשתמש במשתנה מחוץ ל-`for` (לא `i`): קולטים את k לפני הלולאה ושמים אותו בתנאי.',
        ru: 'Вопрос с доски: а если нужно напечатать k чисел по желанию пользователя? Количество известно заранее, и обязательно нужна переменная вне `for` (не `i`): читаем k до цикла и ставим его в условие.',
        en: 'A question from the board: what if we want to print a run of k numbers chosen by the user? The amount is known in advance, and you must use a variable outside the `for` (not `i`): read k before the loop and put it in the condition.'
      },
      math: ['int k = scanner.nextInt();', 'for (int i = 1; i <= k; i++) {', '    System.out.println(i);', '}'] },
    { kind: 'board',
      title: { he: 'קלט בתוך הלולאה: 8 מספרים', ru: 'Ввод внутри цикла: 8 чисел', en: 'Input inside the loop: 8 numbers' },
      text: {
        he: 'בכל סיבוב אפשר לקלוט מספר. בדוגמה הראשונה כל מספר הודפס כפול 2 (קלט 61 → 122). בדוגמה השנייה צברו סכום וחישבו ממוצע. על המסך: `The sum is 160`, `The average is 20.0`. ה-`(double)` לפני `sum` — כדי שהחילוק יהיה עשרוני.',
        ru: 'В каждом проходе можно читать число. В первом примере каждое число печаталось умноженным на 2 (ввод 61 → 122). Во втором копили сумму и считали среднее. На экране: `The sum is 160`, `The average is 20.0`. `(double)` перед `sum` — чтобы деление было дробным.',
        en: 'Each round can read a number. In the first example every number was printed times 2 (input 61 → 122). In the second one a sum was collected and the average calculated. The screen showed `The sum is 160`, `The average is 20.0`. The `(double)` before `sum` makes the division decimal.'
      },
      math: ['int x;', 'int sum = 0;', 'for (int i = 0; i < 8; i++) {', '    x = scanner.nextInt();', '    sum += x;', '}', 'System.out.println("The sum is " + sum);', 'double average = (double) sum / 8;', 'System.out.println("The average is " + average);'] },
    { kind: 'faq',
      q: { he: 'מה ההבדל בין שני `if` נפרדים לבין `if` ו-`else if`?', ru: 'Чем два отдельных `if` отличаются от `if` и `else if`?', en: 'What is the difference between two separate `if`s and `if` + `else if`?' },
      a: {
        he: 'שני `if` נפרדים נבדקים תמיד שניהם, ולכן יכולים להתבצע שניהם. ב-`if` / `else if` מתבצע רק הענף הראשון שהתנאי שלו `true`, והשאר מדולגים.',
        ru: 'Два отдельных `if` проверяются оба всегда, поэтому могут выполниться оба. В `if` / `else if` выполняется только первая ветка, где условие `true`, остальные пропускаются.',
        en: 'Two separate `if`s are both always checked, so both can run. With `if` / `else if` only the first branch whose condition is `true` runs, and the rest are skipped.'
      } }
  ],

  review: [
    { title: { he: 'Scanner', ru: 'Scanner', en: 'Scanner' },
      text: { he: '`Scanner sc = new Scanner(System.in);` ואז `sc.nextInt()`, `sc.nextDouble()`, `sc.nextLine()`.', ru: '`Scanner sc = new Scanner(System.in);`, затем `sc.nextInt()`, `sc.nextDouble()`, `sc.nextLine()`.', en: '`Scanner sc = new Scanner(System.in);` then `sc.nextInt()`, `sc.nextDouble()`, `sc.nextLine()`.' } },
    { title: { he: 'if / else if / else', ru: 'if / else if / else', en: 'if / else if / else' },
      text: { he: 'נבדק מלמעלה למטה, ומתבצע רק הענף הראשון שבו התנאי `true`. `else` — אופציונלי.', ru: 'Проверяется сверху вниз, выполняется только первая ветка с `true`. `else` — необязателен.', en: 'Checked top to bottom; only the first branch with `true` runs. `else` is optional.' } },
    { title: { he: '&& ו-||', ru: '&& и ||', en: '&& and ||' },
      text: { he: '`&&` — שניהם `true`. `||` — לפחות אחד `true`. טווח: `x >= 7 && x <= 10`.', ru: '`&&` — оба `true`. `||` — хотя бы одно `true`. Промежуток: `x >= 7 && x <= 10`.', en: '`&&` — both `true`. `||` — at least one `true`. A range: `x >= 7 && x <= 10`.' } },
    { title: { he: 'זוגי', ru: 'Чётность', en: 'Even / odd' },
      text: { he: 'זוגי: `x % 2 == 0`, אי-זוגי: `x % 2 != 0`. `%` זה שארית, לא אחוזים.', ru: 'Чётное: `x % 2 == 0`, нечётное: `x % 2 != 0`. `%` — остаток, а не проценты.', en: 'Even: `x % 2 == 0`, odd: `x % 2 != 0`. `%` is the remainder, not percent.' } },
    { title: { he: 'סדר פעולות', ru: 'Порядок действий', en: 'Order of operations' },
      text: { he: 'סוגריים → `* / %` → `+ -` → השוואות → `&&`, `||` → השמה `=`.', ru: 'Скобки → `* / %` → `+ -` → сравнения → `&&`, `||` → присваивание `=`.', en: 'Brackets → `* / %` → `+ -` → comparisons → `&&`, `||` → assignment `=`.' } },
    { title: { he: 'לולאת for', ru: 'Цикл for', en: 'The for loop' },
      text: { he: '`for (אתחול; תנאי עצירה; התקדמות)`. צובר כמו `sum` מגדירים לפני הלולאה.', ru: '`for (начало; условие остановки; шаг)`. Накопитель вроде `sum` объявляют до цикла.', en: '`for (start; stop condition; step)`. An accumulator like `sum` is declared before the loop.' } },
    { title: { he: 'ממוצע', ru: 'Среднее', en: 'Average' },
      text: { he: '`(double) sum / count` — אחרת החילוק בשלמים זורק את השבר.', ru: '`(double) sum / count` — иначе целочисленное деление отбросит дробь.', en: '`(double) sum / count` — otherwise integer division drops the fraction.' } }
  ],

  tasks: {
    groups: {
      'class': { he: 'דוגמאות מהשיעור', ru: 'Примеры с урока', en: 'Examples from the lesson' },
      'sheet': { he: 'דף העבודה "תכנות בסיסי ב-Java" — מה תדפיס התוכנית?', ru: 'Рабочий лист «תכנות בסיסי ב-Java» — что напечатает программа?', en: 'Worksheet "תכנות בסיסי ב-Java" — what will the program print?' },
      'for': { he: 'לולאת for מהשיעור', ru: 'Цикл for с урока', en: 'The for loop from the lesson' }
    },
    teacher: [
      { id: 'c1', group: 'class', label: { he: 'גיל 7–10', ru: 'Возраст 7–10', en: 'Age 7–10' }, kind: 'choice',
        text: { he: 'המשתמש מקליד 10. מה יודפס?\n`int age = sca.nextInt();`\n`if (age >= 7 && age <= 10) System.out.println("Yes");`\n`else System.out.println("No");`', ru: 'Пользователь вводит 10. Что будет напечатано?\n`int age = sca.nextInt();`\n`if (age >= 7 && age <= 10) System.out.println("Yes");`\n`else System.out.println("No");`', en: 'The user types 10. What is printed?\n`int age = sca.nextInt();`\n`if (age >= 7 && age <= 10) System.out.println("Yes");`\n`else System.out.println("No");`' },
        options: ['Yes', 'No'],
        answer: { index: 0 },
        hints: [
          { he: 'בדקו כל חלק של `&&` בנפרד.', ru: 'Проверь каждую часть `&&` отдельно.', en: 'Check each part of the `&&` separately.' },
          { he: '`10 <= 10` — האם זה נכון? `<=` כולל שוויון.', ru: '`10 <= 10` — это правда? `<=` включает равенство.', en: '`10 <= 10` — is it true? `<=` includes equality.' }
        ],
        solution: ['10 >= 7  →  true', '10 <= 10  →  true', 'true && true  →  true', { he: 'מודפס Yes', ru: 'Печатается Yes', en: 'Yes is printed' }] },
      { id: 'c2', group: 'class', label: { he: 'שרשרת else if', ru: 'Цепочка else if', en: 'else if chain' }, kind: 'text',
        text: { he: 'המשתמש מקליד 10. מה יודפס?\n`if (age > 18) System.out.println("Yes");`\n`else if (age == 0) System.out.println("No");`\n`else System.out.println("ll");`', ru: 'Пользователь вводит 10. Что будет напечатано?\n`if (age > 18) System.out.println("Yes");`\n`else if (age == 0) System.out.println("No");`\n`else System.out.println("ll");`', en: 'The user types 10. What is printed?\n`if (age > 18) System.out.println("Yes");`\n`else if (age == 0) System.out.println("No");`\n`else System.out.println("ll");`' },
        answer: { accept: ['ll'] },
        hints: [
          { he: 'עברו על התנאים מלמעלה למטה, עד הראשון שהוא `true`.', ru: 'Иди по условиям сверху вниз до первого `true`.', en: 'Go through the conditions top to bottom until the first `true`.' }
        ],
        solution: ['10 > 18  →  false', '10 == 0  →  false', { he: 'אף תנאי לא התקיים — מתבצע `else`: מודפס ll', ru: 'Ни одно условие не выполнено — работает `else`: печатается ll', en: 'No condition was true — the `else` runs: ll is printed' }] },
      { id: 'c3', group: 'class', label: { he: '87 ו-8: ||', ru: '87 и 8: ||', en: '87 and 8: ||' }, kind: 'choice',
        text: { he: 'מה יודפס?\n`int x = 87;`\n`int y = 8;`\n`boolean res = x % 2 == 0 || y % 2 == 0;`\n`System.out.println(res);`', ru: 'Что будет напечатано?\n`int x = 87;`\n`int y = 8;`\n`boolean res = x % 2 == 0 || y % 2 == 0;`\n`System.out.println(res);`', en: 'What is printed?\n`int x = 87;`\n`int y = 8;`\n`boolean res = x % 2 == 0 || y % 2 == 0;`\n`System.out.println(res);`' },
        options: ['true', 'false'],
        answer: { index: 0 },
        hints: [
          { he: 'חשבו כל צד בנפרד: האם 87 זוגי? האם 8 זוגי?', ru: 'Посчитай каждую сторону: 87 чётное? 8 чётное?', en: 'Work out each side: is 87 even? Is 8 even?' },
          { he: 'ל-`||` מספיק צד אחד `true`.', ru: 'Для `||` хватает одной стороны `true`.', en: 'For `||` one `true` side is enough.' }
        ],
        solution: ['87 % 2 = 1  →  1 == 0  →  false', '8 % 2 = 0  →  0 == 0  →  true', 'false || true  →  true', { he: 'מודפס true', ru: 'Печатается true', en: 'true is printed' }] },
      { id: 'c4', group: 'class', label: { he: '87 ו-8: &&', ru: '87 и 8: &&', en: '87 and 8: &&' }, kind: 'choice',
        text: { he: 'אותם x = 87, y = 8. מה יודפס?\n`boolean res = x % 2 == 0 && y % 2 == 0;`\n`System.out.println(res);`', ru: 'Те же x = 87, y = 8. Что будет напечатано?\n`boolean res = x % 2 == 0 && y % 2 == 0;`\n`System.out.println(res);`', en: 'The same x = 87, y = 8. What is printed?\n`boolean res = x % 2 == 0 && y % 2 == 0;`\n`System.out.println(res);`' },
        options: ['true', 'false'],
        answer: { index: 1 },
        hints: [
          { he: 'ל-`&&` צריך ששני הצדדים יהיו `true`.', ru: 'Для `&&` нужно, чтобы обе стороны были `true`.', en: '`&&` needs both sides to be `true`.' }
        ],
        solution: ['87 % 2 == 0  →  false', '8 % 2 == 0  →  true', 'false && true  →  false', { he: 'מודפס false', ru: 'Печатается false', en: 'false is printed' }] },
      { id: 'c5', group: 'class', label: { he: 'מקסימום (15)', ru: 'Максимум (15)', en: 'Maximum (15)' }, kind: 'number',
        text: { he: 'שיטה I מהלוח. הקלט: 4, 9, 2 (x, y, z). מה יודפס?\n`if (x >= y && x >= z) System.out.println(x);`\n`else if (y >= z) System.out.println(y);`\n`else System.out.println(z);`', ru: 'Способ I с доски. Ввод: 4, 9, 2 (x, y, z). Что будет напечатано?\n`if (x >= y && x >= z) System.out.println(x);`\n`else if (y >= z) System.out.println(y);`\n`else System.out.println(z);`', en: 'Method I from the board. Input: 4, 9, 2 (x, y, z). What is printed?\n`if (x >= y && x >= z) System.out.println(x);`\n`else if (y >= z) System.out.println(y);`\n`else System.out.println(z);`' },
        answer: { value: '9' },
        hints: [
          { he: 'הציבו x = 4, y = 9, z = 2 בתנאי הראשון.', ru: 'Подставь x = 4, y = 9, z = 2 в первое условие.', en: 'Put x = 4, y = 9, z = 2 into the first condition.' }
        ],
        solution: ['4 >= 9  →  false', 'false && ...  →  false', '9 >= 2  →  true', { he: 'מודפס y: 9', ru: 'Печатается y: 9', en: 'y is printed: 9' }] },
      { id: 's3', group: 'sheet', label: '3', kind: 'choice',
        text: { he: 'שאלה 3 (ממוצע של שלושה). הקלט: 1, 2, 2. מה ידפיס הקוד הזה?\n`int sum = a + b + c;`\n`System.out.println(sum / 3);`', ru: 'Задание 3 (среднее трёх). Ввод: 1, 2, 2. Что напечатает этот код?\n`int sum = a + b + c;`\n`System.out.println(sum / 3);`', en: 'Question 3 (average of three). Input: 1, 2, 2. What does this code print?\n`int sum = a + b + c;`\n`System.out.println(sum / 3);`' },
        options: ['1', '1.6666666666666667', '2'],
        answer: { index: 0 },
        hints: [
          { he: '`sum` הוא `int`, וגם 3 הוא `int`.', ru: '`sum` — `int`, и 3 тоже `int`.', en: '`sum` is an `int`, and 3 is an `int` too.' },
          { he: 'מה עושה חילוק בשלמים עם השבר?', ru: 'Что делает целочисленное деление с дробью?', en: 'What does integer division do with the fraction?' }
        ],
        solution: ['sum = 1 + 2 + 2 = 5', '5 / 3 = 1.666...', { he: 'חילוק בשלמים זורק את השבר: 1', ru: 'Целочисленное деление отбрасывает дробь: 1', en: 'Integer division drops the fraction: 1' }, { he: 'הנכון לשאלה: `sum / 3.0` → 1.6666666666666667', ru: 'Правильно для задания: `sum / 3.0` → 1.6666666666666667', en: 'Correct for the question: `sum / 3.0` → 1.6666666666666667' }] },
      { id: 's4', group: 'sheet', label: '4', kind: 'number',
        text: { he: 'שאלה 4: קולטים שנת לידה ומדפיסים את הגיל (השנה 2026). איזה מספר יופיע בשורה שהתוכנית תדפיס עבור הקלט 1998?\n`System.out.println("your age is " + (2026 - year) + ".");`', ru: 'Задание 4: вводим год рождения и печатаем возраст (сейчас 2026). Какое число будет в строке, которую напечатает программа при вводе 1998?\n`System.out.println("your age is " + (2026 - year) + ".");`', en: 'Question 4: read a birth year and print the age (the year is 2026). Which number appears in the line the program prints for input 1998?\n`System.out.println("your age is " + (2026 - year) + ".");`' },
        answer: { value: '28' },
        hints: [
          { he: 'הסוגריים מחושבים לפני ההדבקה לטקסט.', ru: 'Скобки считаются до склейки с текстом.', en: 'The brackets are calculated before joining with the text.' }
        ],
        solution: ['int year = sc.nextInt();   // 1998', '2026 - 1998 = 28', { he: 'מודפס: your age is 28.', ru: 'Печатается: your age is 28.', en: 'Printed: your age is 28.' }] },
      { id: 's5', group: 'sheet', label: '5', kind: 'text',
        text: { he: 'שאלה 5: מספר דו-ספרתי, ספרת העשרות וספרת האחדות. הקלט 47. מה יודפס? (שתי שורות — כתבו עם רווח)\n`System.out.println(n / 10);`\n`System.out.println(n % 10);`', ru: 'Задание 5: двузначное число, цифра десятков и единиц. Ввод 47. Что будет напечатано? (две строки — напиши через пробел)\n`System.out.println(n / 10);`\n`System.out.println(n % 10);`', en: 'Question 5: a two-digit number, the tens and the units digit. Input 47. What is printed? (two lines — write them with a space)\n`System.out.println(n / 10);`\n`System.out.println(n % 10);`' },
        answer: { accept: ['4 7'] },
        hints: [
          { he: '`/ 10` מוחק את הספרה האחרונה, `% 10` לוקח אותה.', ru: '`/ 10` стирает последнюю цифру, `% 10` берёт её.', en: '`/ 10` removes the last digit, `% 10` takes it.' }
        ],
        solution: ['47 / 10 = 4', '47 % 10 = 7', { he: 'תשובה: 4 ואז 7', ru: 'Ответ: 4, потом 7', en: 'Answer: 4, then 7' }] },
      { id: 's6', group: 'sheet', label: '6', kind: 'text',
        text: { he: 'שאלה 6: ימים → שבועות וימים. הקלט 17. מה יודפס?\n`System.out.println(days / 7 + " weeks and " + days % 7 + " days");`', ru: 'Задание 6: дни → недели и дни. Ввод 17. Что будет напечатано?\n`System.out.println(days / 7 + " weeks and " + days % 7 + " days");`', en: 'Question 6: days → weeks and days. Input 17. What is printed?\n`System.out.println(days / 7 + " weeks and " + days % 7 + " days");`' },
        answer: { accept: ['2 weeks and 3 days'] },
        hints: [
          { he: '`17 / 7` — כמה שבועות שלמים? `17 % 7` — כמה ימים נשארו?', ru: '`17 / 7` — сколько целых недель? `17 % 7` — сколько дней осталось?', en: '`17 / 7` — how many whole weeks? `17 % 7` — how many days are left?' }
        ],
        solution: ['17 / 7 = 2', '17 % 7 = 17 - 14 = 3', '→  "2 weeks and 3 days"'] },
      { id: 's8', group: 'sheet', label: '8', kind: 'number',
        text: { he: 'שאלה 8: סכום הספרות של מספר תלת-ספרתי. הקלט 258. מה יודפס?\n`System.out.println(n / 100 + n / 10 % 10 + n % 10);`', ru: 'Задание 8: сумма цифр трёхзначного числа. Ввод 258. Что будет напечатано?\n`System.out.println(n / 100 + n / 10 % 10 + n % 10);`', en: 'Question 8: the digit sum of a three-digit number. Input 258. What is printed?\n`System.out.println(n / 100 + n / 10 % 10 + n % 10);`' },
        answer: { value: '15' },
        hints: [
          { he: 'חשבו כל ספרה בנפרד: מאות, עשרות, אחדות.', ru: 'Посчитай каждую цифру отдельно: сотни, десятки, единицы.', en: 'Work out each digit separately: hundreds, tens, units.' },
          { he: '`258 / 10 % 10`: קודם `258 / 10 = 25`, אחר כך `25 % 10`.', ru: '`258 / 10 % 10`: сначала `258 / 10 = 25`, потом `25 % 10`.', en: '`258 / 10 % 10`: first `258 / 10 = 25`, then `25 % 10`.' }
        ],
        solution: ['258 / 100 = 2', '258 / 10 = 25  →  25 % 10 = 5', '258 % 10 = 8', '2 + 5 + 8 = 15', { he: 'תשובה: 15', ru: 'Ответ: 15', en: 'Answer: 15' }] },
      { id: 's9', group: 'sheet', label: '9', kind: 'text',
        text: { he: 'שאלה 9: דקות → שעות ודקות. הקלט 130. מה יודפס?\n`System.out.println(num / 60 + " hours and " + num % 60 + " minutes");`', ru: 'Задание 9: минуты → часы и минуты. Ввод 130. Что будет напечатано?\n`System.out.println(num / 60 + " hours and " + num % 60 + " minutes");`', en: 'Question 9: minutes → hours and minutes. Input 130. What is printed?\n`System.out.println(num / 60 + " hours and " + num % 60 + " minutes");`' },
        answer: { accept: ['2 hours and 10 minutes'] },
        hints: [
          { he: '`130 / 60` שעות שלמות, `130 % 60` דקות שנשארו.', ru: '`130 / 60` — целые часы, `130 % 60` — оставшиеся минуты.', en: '`130 / 60` whole hours, `130 % 60` minutes left.' }
        ],
        solution: ['130 / 60 = 2', '130 % 60 = 130 - 120 = 10', '→  "2 hours and 10 minutes"'] },
      { id: 's12', group: 'sheet', label: '12', kind: 'text',
        text: { he: 'שאלה 12: ציון 55 ומעלה — `Pass`, אחרת `Fail`. הקלט 55. מה יודפס?\n`if (grade >= 55) System.out.println("Pass");`\n`else System.out.println("Fail");`', ru: 'Задание 12: оценка 55 и выше — `Pass`, иначе `Fail`. Ввод 55. Что будет напечатано?\n`if (grade >= 55) System.out.println("Pass");`\n`else System.out.println("Fail");`', en: 'Question 12: a grade of 55 or more — `Pass`, otherwise `Fail`. Input 55. What is printed?\n`if (grade >= 55) System.out.println("Pass");`\n`else System.out.println("Fail");`' },
        answer: { accept: ['Pass'] },
        hints: [
          { he: 'האם `55 >= 55`? `>=` כולל את השוויון.', ru: '`55 >= 55`? `>=` включает равенство.', en: 'Is `55 >= 55`? `>=` includes equality.' }
        ],
        solution: ['55 >= 55  →  true', { he: 'מודפס Pass', ru: 'Печатается Pass', en: 'Pass is printed' }] },
      { id: 's14', group: 'sheet', label: '14', kind: 'number',
        text: { he: 'שאלה 14: מחיר מעל 1000 — הנחה של 10%, אחרת המחיר המקורי. הקלט 1500. מה יודפס?\n`double price = sc.nextDouble();`\n`if (price > 1000) System.out.println(price * 0.9);`\n`else System.out.println(price);`', ru: 'Задание 14: цена выше 1000 — скидка 10%, иначе исходная цена. Ввод 1500. Что будет напечатано?\n`double price = sc.nextDouble();`\n`if (price > 1000) System.out.println(price * 0.9);`\n`else System.out.println(price);`', en: 'Question 14: a price above 1000 gets a 10% discount, otherwise the original price. Input 1500. What is printed?\n`double price = sc.nextDouble();`\n`if (price > 1000) System.out.println(price * 0.9);`\n`else System.out.println(price);`' },
        answer: { value: '1350' },
        hints: [
          { he: 'הנחה של 10% = משלמים 90% מהמחיר.', ru: 'Скидка 10% = платим 90% цены.', en: 'A 10% discount = you pay 90% of the price.' }
        ],
        solution: ['1500 > 1000  →  true', '1500 * 0.9 = 1350.0', { he: 'מודפס 1350.0', ru: 'Печатается 1350.0', en: '1350.0 is printed' }] },
      { id: 's16', group: 'sheet', label: '16', kind: 'text',
        text: { he: 'שאלה 16: מספר חודש → עונה (12, 1, 2 — Winter; 3–5 — Spring; 6–8 — Summer; 9–11 — Autumn; אחרת Error). הקלט 4. מה יודפס?\n`if (m == 12 || m == 1 || m == 2) System.out.println("Winter");`\n`else if (m >= 3 && m <= 5) System.out.println("Spring");`\n`else if (m >= 6 && m <= 8) System.out.println("Summer");`\n`else if (m >= 9 && m <= 11) System.out.println("Autumn");`\n`else System.out.println("Error");`', ru: 'Задание 16: номер месяца → время года (12, 1, 2 — Winter; 3–5 — Spring; 6–8 — Summer; 9–11 — Autumn; иначе Error). Ввод 4. Что будет напечатано?\n`if (m == 12 || m == 1 || m == 2) System.out.println("Winter");`\n`else if (m >= 3 && m <= 5) System.out.println("Spring");`\n`else if (m >= 6 && m <= 8) System.out.println("Summer");`\n`else if (m >= 9 && m <= 11) System.out.println("Autumn");`\n`else System.out.println("Error");`', en: 'Question 16: month number → season (12, 1, 2 — Winter; 3–5 — Spring; 6–8 — Summer; 9–11 — Autumn; otherwise Error). Input 4. What is printed?\n`if (m == 12 || m == 1 || m == 2) System.out.println("Winter");`\n`else if (m >= 3 && m <= 5) System.out.println("Spring");`\n`else if (m >= 6 && m <= 8) System.out.println("Summer");`\n`else if (m >= 9 && m <= 11) System.out.println("Autumn");`\n`else System.out.println("Error");`' },
        answer: { accept: ['Spring'] },
        hints: [
          { he: 'בדקו את התנאים לפי הסדר עם m = 4.', ru: 'Проверяй условия по порядку при m = 4.', en: 'Check the conditions in order with m = 4.' }
        ],
        solution: ['4 == 12 || 4 == 1 || 4 == 2  →  false', '4 >= 3 && 4 <= 5  →  true && true  →  true', { he: 'מודפס Spring', ru: 'Печатается Spring', en: 'Spring is printed' }] },
      { id: 's18', group: 'sheet', label: '18', kind: 'choice',
        text: { he: 'שאלה 18: האם אפשר לבנות משולש מהצלעות 3, 4, 8? (סכום כל שתי צלעות גדול מהשלישית)\n`if (a + b > c && a + c > b && b + c > a) System.out.println("Yes");`\n`else System.out.println("No");`', ru: 'Задание 18: можно ли построить треугольник со сторонами 3, 4, 8? (сумма любых двух сторон больше третьей)\n`if (a + b > c && a + c > b && b + c > a) System.out.println("Yes");`\n`else System.out.println("No");`', en: 'Question 18: can sides 3, 4, 8 make a triangle? (the sum of any two sides is greater than the third)\n`if (a + b > c && a + c > b && b + c > a) System.out.println("Yes");`\n`else System.out.println("No");`' },
        options: ['Yes', 'No'],
        answer: { index: 1 },
        hints: [
          { he: 'התחילו מ-`a + b > c`: האם `3 + 4 > 8`?', ru: 'Начни с `a + b > c`: `3 + 4 > 8`?', en: 'Start with `a + b > c`: is `3 + 4 > 8`?' }
        ],
        solution: ['3 + 4 = 7,  7 > 8  →  false', { he: 'ב-`&&` מספיק `false` אחד, וכל התנאי `false`', ru: 'В `&&` хватает одного `false` — всё условие `false`', en: 'In `&&` one `false` is enough — the whole condition is `false`' }, { he: 'מודפס No', ru: 'Печатается No', en: 'No is printed' }] },
      { id: 's20', group: 'sheet', label: '20', kind: 'number',
        text: { he: 'שאלה 20: מס מדורג. כתבו תוכנית שקולטת משכורת `m` (`double`) ומדפיסה את המס עם `System.out.println`. עד 6,000 — אין מס. על החלק שבין 6,000 ל-12,000 משלמים 10%. על כל שקל מעל 12,000 משלמים 20%. מה תדפיס התוכנית עבור הקלט 15000?', ru: 'Задание 20: ступенчатый налог. Напиши программу, которая вводит зарплату `m` (`double`) и печатает налог через `System.out.println`. До 6 000 — налога нет. С части между 6 000 и 12 000 платят 10%. С каждого шекеля выше 12 000 платят 20%. Что напечатает программа при вводе 15000?', en: 'Question 20: progressive tax. Write a program that reads a salary `m` (`double`) and prints the tax with `System.out.println`. Up to 6,000 — no tax. On the part between 6,000 and 12,000 you pay 10%. On every shekel above 12,000 you pay 20%. What does the program print for input 15000?' },
        answer: { value: '1200' },
        hints: [
          { he: 'שלושה ענפים: `if (m <= 6000)`, `else if (m <= 12000)`, `else`.', ru: 'Три ветки: `if (m <= 6000)`, `else if (m <= 12000)`, `else`.', en: 'Three branches: `if (m <= 6000)`, `else if (m <= 12000)`, `else`.' },
          { he: 'בענף האמצעי: `(m - 6000) * 0.10`. בענף האחרון החלק האמצעי כבר מלא (600), ומוסיפים `(m - 12000) * 0.20`.', ru: 'В средней ветке: `(m - 6000) * 0.10`. В последней средняя часть уже полная (600), и прибавляем `(m - 12000) * 0.20`.', en: 'Middle branch: `(m - 6000) * 0.10`. In the last branch the middle part is already full (600), and you add `(m - 12000) * 0.20`.' }
        ],
        solution: [
          'double m = sc.nextDouble();',
          'double tax;',
          'if (m <= 6000) tax = 0;',
          'else if (m <= 12000) tax = (m - 6000) * 0.10;',
          'else tax = 600 + (m - 12000) * 0.20;',
          'System.out.println(tax);',
          { he: 'קלט 15000: גדול מ-12000, ולכן רץ הענף `else`.', ru: 'Ввод 15000: больше 12000, поэтому работает ветка `else`.', en: 'Input 15000: more than 12000, so the `else` branch runs.' },
          'tax = 600 + (15000 - 12000) * 0.20 = 600 + 600.0 = 1200.0',
          { he: 'מודפס: 1200.0 (ולא 1500 — 10% רק על החלק האמצעי)', ru: 'Печатается: 1200.0 (а не 1500 — 10% только со средней части)', en: 'Printed: 1200.0 (not 1500 — 10% only on the middle part)' }
        ] },
      { id: 'f1', group: 'for', label: { he: 'זוגיים עד 20', ru: 'Чётные до 20', en: 'Evens to 20' }, kind: 'number',
        text: { he: 'מה יודפס?\n`int sum = 0;`\n`for (int i = 2; i <= 20; i += 2) {`\n`    sum += i;`\n`}`\n`System.out.println(sum);`', ru: 'Что будет напечатано?\n`int sum = 0;`\n`for (int i = 2; i <= 20; i += 2) {`\n`    sum += i;`\n`}`\n`System.out.println(sum);`', en: 'What is printed?\n`int sum = 0;`\n`for (int i = 2; i <= 20; i += 2) {`\n`    sum += i;`\n`}`\n`System.out.println(sum);`' },
        answer: { value: '110' },
        hints: [
          { he: 'אילו ערכים מקבל i? 2, 4, 6, ... עד 20.', ru: 'Какие значения принимает i? 2, 4, 6, ... до 20.', en: 'Which values does i take? 2, 4, 6, ... up to 20.' },
          { he: 'חברו בזוגות: 2 + 20, 4 + 18, ... כל זוג 22.', ru: 'Складывай парами: 2 + 20, 4 + 18, ... каждая пара 22.', en: 'Add in pairs: 2 + 20, 4 + 18, ... each pair is 22.' }
        ],
        solution: ['i = 2   →  sum = 2', 'i = 4   →  sum = 6', 'i = 6   →  sum = 12', 'i = 8   →  sum = 20', 'i = 10  →  sum = 30', 'i = 12  →  sum = 42', 'i = 14  →  sum = 56', 'i = 16  →  sum = 72', 'i = 18  →  sum = 90', 'i = 20  →  sum = 110', { he: 'i = 22: התנאי `22 <= 20` הוא `false`, הלולאה נגמרת. מודפס 110', ru: 'i = 22: условие `22 <= 20` — `false`, цикл заканчивается. Печатается 110', en: 'i = 22: the condition `22 <= 20` is `false`, the loop ends. 110 is printed' }] },
      { id: 'f2', group: 'for', label: { he: 'ממוצע של 8', ru: 'Среднее 8 чисел', en: 'Average of 8' }, kind: 'number',
        text: { he: 'התוכנית מהמסך קלטה 8 מספרים והדפיסה `The sum is 160`. מה יודפס בשורה הבאה?\n`double average = (double) sum / 8;`\n`System.out.println("The average is " + average);`', ru: 'Программа с экрана прочитала 8 чисел и напечатала `The sum is 160`. Что будет в следующей строке?\n`double average = (double) sum / 8;`\n`System.out.println("The average is " + average);`', en: 'The program on screen read 8 numbers and printed `The sum is 160`. What is printed on the next line?\n`double average = (double) sum / 8;`\n`System.out.println("The average is " + average);`' },
        answer: { value: '20' },
        hints: [
          { he: '`(double)` הופך את 160 ל-160.0 לפני החילוק.', ru: '`(double)` превращает 160 в 160.0 до деления.', en: '`(double)` turns 160 into 160.0 before the division.' }
        ],
        solution: ['(double) 160 = 160.0', '160.0 / 8 = 20.0', { he: 'מודפס: The average is 20.0', ru: 'Печатается: The average is 20.0', en: 'Printed: The average is 20.0' }] }
    ],

    ai: [
      { id: 'b1', level: 1, label: 'B1', kind: 'text',
        text: { he: 'מה יודפס?\n`int t = 30;`\n`if (t > 25) System.out.println("Hot");`\n`else System.out.println("Cold");`', ru: 'Что будет напечатано?\n`int t = 30;`\n`if (t > 25) System.out.println("Hot");`\n`else System.out.println("Cold");`', en: 'What is printed?\n`int t = 30;`\n`if (t > 25) System.out.println("Hot");`\n`else System.out.println("Cold");`' },
        answer: { accept: ['Hot'] },
        hints: [{ he: 'האם `30 > 25`?', ru: '`30 > 25`?', en: 'Is `30 > 25`?' }],
        solution: ['30 > 25  →  true', { he: 'מתבצע ענף ה-`if`: מודפס Hot', ru: 'Выполняется ветка `if`: печатается Hot', en: 'The `if` branch runs: Hot is printed' }] },
      { id: 'b2', level: 1, label: 'B2', kind: 'choice',
        text: { he: 'מה יודפס?\n`System.out.println(15 % 2 == 0);`', ru: 'Что будет напечатано?\n`System.out.println(15 % 2 == 0);`', en: 'What is printed?\n`System.out.println(15 % 2 == 0);`' },
        options: ['true', 'false', '1'],
        answer: { index: 1 },
        hints: [{ he: 'קודם `15 % 2`, אחר כך ההשוואה עם 0.', ru: 'Сначала `15 % 2`, потом сравнение с 0.', en: 'First `15 % 2`, then the comparison with 0.' }],
        solution: ['15 % 2 = 1', '1 == 0  →  false', { he: 'ההשוואה מחזירה `boolean`: false (15 אי-זוגי)', ru: 'Сравнение даёт `boolean`: false (15 нечётное)', en: 'The comparison gives a `boolean`: false (15 is odd)' }] },
      { id: 'b3', level: 1, label: 'B3', kind: 'choice',
        text: { he: 'איזה תנאי בודק ש-x נמצא בין 7 ל-10 (כולל)?', ru: 'Какое условие проверяет, что x от 7 до 10 (включительно)?', en: 'Which condition checks that x is between 7 and 10 (inclusive)?' },
        options: ['7 <= x <= 10', 'x >= 7 && x <= 10', 'x >= 7 || x <= 10'],
        answer: { index: 1 },
        hints: [
          { he: 'ב-Java כל השוואה היא בין שני ערכים בלבד.', ru: 'В Java каждое сравнение — только между двумя значениями.', en: 'In Java each comparison is between two values only.' },
          { he: 'צריך ששני התנאים יתקיימו יחד — `&&` או `||`?', ru: 'Нужно, чтобы оба условия выполнялись вместе — `&&` или `||`?', en: 'Both conditions must hold together — `&&` or `||`?' }
        ],
        solution: [
          { he: '`7 <= x <= 10` לא מתקמפל: `7 <= x` נותן `boolean`, ואי אפשר להשוות `boolean` עם 10.', ru: '`7 <= x <= 10` не компилируется: `7 <= x` даёт `boolean`, а `boolean` с 10 сравнить нельзя.', en: '`7 <= x <= 10` does not compile: `7 <= x` gives a `boolean`, and a `boolean` cannot be compared with 10.' },
          { he: 'עם `||` כל מספר עובר (למשל 50: `50 >= 7` הוא `true`).', ru: 'С `||` проходит любое число (например, 50: `50 >= 7` — `true`).', en: 'With `||` any number passes (e.g. 50: `50 >= 7` is `true`).' },
          { he: 'תשובה: `x >= 7 && x <= 10`', ru: 'Ответ: `x >= 7 && x <= 10`', en: 'Answer: `x >= 7 && x <= 10`' }
        ] },
      { id: 'b4', level: 2, label: 'B4', kind: 'text',
        text: { he: 'מה יודפס?\n`int g = 85;`\n`if (g >= 90) System.out.println("A");`\n`else if (g >= 80) System.out.println("B");`\n`else if (g >= 55) System.out.println("C");`\n`else System.out.println("F");`', ru: 'Что будет напечатано?\n`int g = 85;`\n`if (g >= 90) System.out.println("A");`\n`else if (g >= 80) System.out.println("B");`\n`else if (g >= 55) System.out.println("C");`\n`else System.out.println("F");`', en: 'What is printed?\n`int g = 85;`\n`if (g >= 90) System.out.println("A");`\n`else if (g >= 80) System.out.println("B");`\n`else if (g >= 55) System.out.println("C");`\n`else System.out.println("F");`' },
        answer: { accept: ['B'] },
        hints: [
          { he: 'מלמעלה למטה, עד התנאי הראשון שהוא `true`.', ru: 'Сверху вниз, до первого условия с `true`.', en: 'Top to bottom, until the first `true` condition.' },
          { he: 'גם `85 >= 55` נכון — אבל האם Java בכלל מגיעה לשם?', ru: '`85 >= 55` тоже верно — но дойдёт ли Java туда?', en: '`85 >= 55` is also true — but does Java even get there?' }
        ],
        solution: ['85 >= 90  →  false', '85 >= 80  →  true', { he: 'מודפס B, והשאר מדולגים (גם ש-`85 >= 55`)', ru: 'Печатается B, остальное пропускается (хотя `85 >= 55`)', en: 'B is printed and the rest is skipped (even though `85 >= 55`)' }] },
      { id: 'b5', level: 2, label: 'B5', kind: 'text',
        text: { he: 'מה יודפס? (כתבו את השורות עם רווח ביניהן)\n`int x = 15;`\n`if (x > 5) System.out.println("A");`\n`if (x > 10) System.out.println("B");`\n`else System.out.println("C");`', ru: 'Что будет напечатано? (напиши строки через пробел)\n`int x = 15;`\n`if (x > 5) System.out.println("A");`\n`if (x > 10) System.out.println("B");`\n`else System.out.println("C");`', en: 'What is printed? (write the lines separated by a space)\n`int x = 15;`\n`if (x > 5) System.out.println("A");`\n`if (x > 10) System.out.println("B");`\n`else System.out.println("C");`' },
        answer: { accept: ['A B'] },
        hints: [
          { he: 'כאן יש שני `if` נפרדים. ה-`else` שייך רק ל-`if` השני.', ru: 'Здесь два отдельных `if`. `else` относится только ко второму `if`.', en: 'There are two separate `if`s here. The `else` belongs only to the second `if`.' }
        ],
        solution: [
          { he: '`if` ראשון: 15 > 5 → true → מודפס A', ru: 'Первый `if`: 15 > 5 → true → печатается A', en: 'First `if`: 15 > 5 → true → A is printed' },
          { he: '`if` שני נבדק בכל מקרה: 15 > 10 → true → מודפס B', ru: 'Второй `if` проверяется в любом случае: 15 > 10 → true → печатается B', en: 'The second `if` is checked anyway: 15 > 10 → true → B is printed' },
          { he: 'תשובה: A B. עם `else if` היה מודפס רק A.', ru: 'Ответ: A B. С `else if` напечаталось бы только A.', en: 'Answer: A B. With `else if` only A would be printed.' }
        ] },
      { id: 'b6', level: 2, label: 'B6', kind: 'choice',
        text: { he: 'מה יודפס?\n`boolean b = 3 + 2 * 4 > 10 || 5 % 2 == 0 && false;`\n`System.out.println(b);`', ru: 'Что будет напечатано?\n`boolean b = 3 + 2 * 4 > 10 || 5 % 2 == 0 && false;`\n`System.out.println(b);`', en: 'What is printed?\n`boolean b = 3 + 2 * 4 > 10 || 5 % 2 == 0 && false;`\n`System.out.println(b);`' },
        options: ['true', 'false'],
        answer: { index: 0 },
        hints: [
          { he: 'לפי סדר הפעולות מהלוח: חשבון, השוואות, ואז האופרטורים הלוגיים.', ru: 'По порядку действий с доски: арифметика, сравнения, потом логические операторы.', en: 'Follow the order from the board: arithmetic, comparisons, then logical operators.' },
          { he: '`&&` מחושב לפני `||`.', ru: '`&&` считается раньше `||`.', en: '`&&` is evaluated before `||`.' }
        ],
        solution: ['2 * 4 = 8,  5 % 2 = 1', '3 + 8 = 11', '11 > 10  →  true,   1 == 0  →  false', 'true || false && false', 'false && false  →  false', 'true || false  →  true', { he: 'מודפס true', ru: 'Печатается true', en: 'true is printed' }] },
      { id: 'b7', level: 2, label: 'B7', kind: 'number',
        text: { he: 'מה יודפס?\n`int s = 0;`\n`for (int i = 1; i <= 5; i++) {`\n`    s += i;`\n`}`\n`System.out.println(s);`', ru: 'Что будет напечатано?\n`int s = 0;`\n`for (int i = 1; i <= 5; i++) {`\n`    s += i;`\n`}`\n`System.out.println(s);`', en: 'What is printed?\n`int s = 0;`\n`for (int i = 1; i <= 5; i++) {`\n`    s += i;`\n`}`\n`System.out.println(s);`' },
        answer: { value: '15' },
        hints: [{ he: 'עקבו אחרי i ו-s בכל סיבוב.', ru: 'Следи за i и s в каждом проходе.', en: 'Track i and s on every round.' }],
        solution: ['i = 1  →  s = 1', 'i = 2  →  s = 3', 'i = 3  →  s = 6', 'i = 4  →  s = 10', 'i = 5  →  s = 15', { he: 'i = 6: `6 <= 5` הוא `false`, סוף. מודפס 15', ru: 'i = 6: `6 <= 5` — `false`, конец. Печатается 15', en: 'i = 6: `6 <= 5` is `false`, done. 15 is printed' }] },
      { id: 'b8', level: 3, label: 'B8', kind: 'text',
        text: { he: 'מה יודפס?\n`int x = 8;`\n`if (x % 3 == 0 && x % 4 == 0) System.out.println("both");`\n`else if (x % 3 == 0 || x % 4 == 0) System.out.println("one");`\n`else System.out.println("none");`', ru: 'Что будет напечатано?\n`int x = 8;`\n`if (x % 3 == 0 && x % 4 == 0) System.out.println("both");`\n`else if (x % 3 == 0 || x % 4 == 0) System.out.println("one");`\n`else System.out.println("none");`', en: 'What is printed?\n`int x = 8;`\n`if (x % 3 == 0 && x % 4 == 0) System.out.println("both");`\n`else if (x % 3 == 0 || x % 4 == 0) System.out.println("one");`\n`else System.out.println("none");`' },
        answer: { accept: ['one'] },
        hints: [
          { he: 'האם 8 מתחלק ב-3? האם 8 מתחלק ב-4?', ru: '8 делится на 3? 8 делится на 4?', en: 'Is 8 divisible by 3? Is 8 divisible by 4?' }
        ],
        solution: ['8 % 3 = 2  →  8 % 3 == 0  →  false', '8 % 4 = 0  →  8 % 4 == 0  →  true', 'false && true  →  false', 'false || true  →  true', { he: 'מודפס one', ru: 'Печатается one', en: 'one is printed' }] },
      { id: 'b9', level: 3, label: 'B9', kind: 'text',
        text: { he: 'מה יודפס? (המספרים מודפסים באותה שורה)\n`for (int i = 0; i < 10; i += 3) {`\n`    System.out.print(i + " ");`\n`}`', ru: 'Что будет напечатано? (числа в одной строке)\n`for (int i = 0; i < 10; i += 3) {`\n`    System.out.print(i + " ");`\n`}`', en: 'What is printed? (the numbers are on one line)\n`for (int i = 0; i < 10; i += 3) {`\n`    System.out.print(i + " ");`\n`}`' },
        answer: { accept: ['0 3 6 9'] },
        hints: [
          { he: 'מתחילים מ-0 ומוסיפים 3 בכל פעם, כל עוד `i < 10`.', ru: 'Начинаем с 0 и каждый раз прибавляем 3, пока `i < 10`.', en: 'Start at 0 and add 3 each time, while `i < 10`.' }
        ],
        solution: ['i = 0  →  0 < 10  →  print 0', 'i = 3  →  3 < 10  →  print 3', 'i = 6  →  6 < 10  →  print 6', 'i = 9  →  9 < 10  →  print 9', 'i = 12  →  12 < 10  →  false', { he: 'תשובה: 0 3 6 9', ru: 'Ответ: 0 3 6 9', en: 'Answer: 0 3 6 9' }] },
      { id: 'b10', level: 3, label: 'B10', kind: 'number',
        text: { he: 'מה יודפס?\n`double total = 250;`\n`if (total >= 200 && total < 500) {`\n`    total -= 20;`\n`} else if (total >= 500) {`\n`    total *= 0.9;`\n`}`\n`System.out.println(total);`', ru: 'Что будет напечатано?\n`double total = 250;`\n`if (total >= 200 && total < 500) {`\n`    total -= 20;`\n`} else if (total >= 500) {`\n`    total *= 0.9;`\n`}`\n`System.out.println(total);`', en: 'What is printed?\n`double total = 250;`\n`if (total >= 200 && total < 500) {`\n`    total -= 20;`\n`} else if (total >= 500) {`\n`    total *= 0.9;`\n`}`\n`System.out.println(total);`' },
        answer: { value: '230' },
        hints: [
          { he: 'באיזה טווח נמצא 250?', ru: 'В каком промежутке 250?', en: 'Which range is 250 in?' }
        ],
        solution: ['250 >= 200  →  true', '250 < 500  →  true', 'true && true  →  true', 'total = 250 - 20 = 230.0', { he: 'ה-`else if` מדולג. מודפס 230.0', ru: '`else if` пропускается. Печатается 230.0', en: 'The `else if` is skipped. 230.0 is printed' }] }
    ]
  }
};

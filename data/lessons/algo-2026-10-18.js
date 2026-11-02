/* Lesson data — format: see the comment at the top of data/lessons/math-2026-11-01.js.
   Every "what does it print" answer in this file was checked by compiling and running
   the Java code (javac/java 21). */
window.LESSONS = window.LESSONS || {};
window.LESSONS['algo-2026-10-18'] = {
  id: 'algo-2026-10-18',
  subject: 'algo',
  date: '2026-10-18',
  title: { he: 'משתנים, טיפוסים ופעולות חשבון ב-Java', ru: 'Переменные, типы и арифметика в Java', en: 'Variables, types and arithmetic in Java' },
  summary: {
    he: 'התוכנית הראשונה, טיפוסי נתונים (`int`, `double`, `char`, `boolean`, `String`), חילוק בשלמים, המרת טיפוס, שארית `%`, קיצורים `+=` ו־`++`, ופירוק מספר לספרות.',
    ru: 'Первая программа, типы данных (`int`, `double`, `char`, `boolean`, `String`), целочисленное деление, приведение типа, остаток `%`, сокращения `+=` и `++` и разбор числа на цифры.',
    en: 'The first program, data types (`int`, `double`, `char`, `boolean`, `String`), integer division, casting, the remainder `%`, the shortcuts `+=` and `++`, and splitting a number into digits.'
  },

  timeline: [
    { kind: 'talk',
      title: { he: 'סביבת העבודה: IntelliJ ו-JDK', ru: 'Рабочая среда: IntelliJ и JDK', en: 'The tools: IntelliJ and JDK' },
      text: {
        he: 'JDK היא הפלטפורמה של Java, ו-IntelliJ IDEA היא התוכנה שבה כותבים ומריצים את הקוד. הגרסה החינמית (Community) מספיקה לכל הקורס.\nהתוכנית הראשונה מדפיסה טקסט. מריצים עם המשולש הירוק או `Shift+F10`.',
        ru: 'JDK — это платформа Java, а IntelliJ IDEA — программа, в которой пишут и запускают код. Бесплатной версии (Community) хватит на весь курс.\nПервая программа печатает текст. Запуск — зелёный треугольник или `Shift+F10`.',
        en: 'JDK is the Java platform, and IntelliJ IDEA is the program where you write and run code. The free Community version is enough for the whole course.\nThe first program prints text. Run it with the green triangle or `Shift+F10`.'
      },
      math: ['System.out.println("Hello World");'] },
    { kind: 'tip',
      title: { he: 'במבחן כותבים את הפקודה במלואה', ru: 'На экзамене команду пишут полностью', en: 'Write the full command in the exam' },
      text: {
        he: 'ב-IntelliJ אפשר להקליד `sout` ולקבל `System.out.println();`. אבל המבחן הוא על דף, ומי שכותב את הקיצור מאבד נקודות. התאמנו לכתוב `System.out.println(...)` בשלמותו.',
        ru: 'В IntelliJ можно набрать `sout` и получить `System.out.println();`. Но экзамен на бумаге, и за сокращение снимают баллы. Тренируйся писать `System.out.println(...)` целиком.',
        en: 'In IntelliJ you can type `sout` and get `System.out.println();`. But the exam is on paper, and writing the shortcut loses points. Practise writing `System.out.println(...)` in full.'
      } },
    { kind: 'board',
      title: { he: 'חשבון ב-Java וסדר פעולות', ru: 'Арифметика в Java и порядок действий', en: 'Arithmetic in Java and order of operations' },
      text: {
        he: 'Java יודעת לחשב: `+`, `-`, `*` (כפל), `/` (חילוק). קודם כפל וחילוק, אחר כך חיבור וחיסור.\nבדוגמה הראשונה `2/7` נותן `0`, כי זה חילוק של שני מספרים שלמים.',
        ru: 'Java умеет считать: `+`, `-`, `*` (умножение), `/` (деление). Сначала умножение и деление, потом сложение и вычитание.\nВ первом примере `2/7` даёт `0`, потому что это деление двух целых чисел.',
        en: 'Java can calculate: `+`, `-`, `*` (multiply), `/` (divide). Multiplication and division first, then addition and subtraction.\nIn the first example `2/7` gives `0`, because it divides two whole numbers.'
      },
      math: ['System.out.println(2 + 5 * 7 - 2 / 7);   // 2 + 35 - 0 = 37', 'System.out.println(2 + 3 * 4 - 8 / 2);   // 2 + 12 - 4 = 10'] },
    { kind: 'talk',
      title: { he: 'טיפוסי נתונים', ru: 'Типы данных', en: 'Data types' },
      text: {
        he: 'לפני שם המשתנה כותבים את הטיפוס שלו, וכל פקודה נגמרת ב-`;`.\n`int` — מספר שלם (גם שלילי), בלי שברים.\n`double` — מספר עם נקודה עשרונית.\n`char` — תו אחד בגרש בודד: `\'a\'`.\n`boolean` — `true` או `false`.\n`String` — מחרוזת, רצף של תווים בגרשיים: `"htf"`.',
        ru: 'Перед именем переменной пишут её тип, а каждая команда заканчивается `;`.\n`int` — целое число (и отрицательное), без дробей.\n`double` — число с десятичной точкой.\n`char` — один символ в одинарных кавычках: `\'a\'`.\n`boolean` — `true` или `false`.\n`String` — строка, цепочка символов в двойных кавычках: `"htf"`.',
        en: 'Before the variable name you write its type, and every command ends with `;`.\n`int` — a whole number (negative too), no fractions.\n`double` — a number with a decimal point.\n`char` — one character in single quotes: `\'a\'`.\n`boolean` — `true` or `false`.\n`String` — a sequence of characters in double quotes: `"htf"`.'
      },
      math: ['int x = 6;', 'int c = -6;', 'double g = 0.5;', 'char f = \'a\';', 'boolean b = true;', 'String l = "htf";'] },
    { kind: 'board',
      title: { he: 'שגיאה: אי אפשר לשים 0.5 ב-int', ru: 'Ошибка: 0.5 нельзя положить в int', en: 'Error: 0.5 cannot go into an int' },
      text: {
        he: 'הפקודה `int z = 0.5;` מסומנת באדום. Java לא זורקת את השבר בעצמה, ומדפיסה שגיאה:\n`incompatible types: possible lossy conversion from double to int`.\nלמספר עם נקודה משתמשים ב-`double`.',
        ru: 'Команда `int z = 0.5;` подчёркнута красным. Java сама не отбрасывает дробь и выдаёт ошибку:\n`incompatible types: possible lossy conversion from double to int`.\nДля числа с точкой нужен `double`.',
        en: 'The command `int z = 0.5;` is underlined in red. Java will not drop the fraction by itself and shows an error:\n`incompatible types: possible lossy conversion from double to int`.\nFor a number with a point use `double`.'
      } },
    { kind: 'talk',
      title: { he: 'כמה גדול יכול להיות int', ru: 'Насколько большим может быть int', en: 'How big an int can be' },
      text: {
        he: 'יש ארבעה טיפוסים של מספרים שלמים: `byte`, `short`, `int`, `long`. בקורס משתמשים בעיקר ב-`int`, וחשוב לדעת שהוא מוגבל. למספרים גדולים יותר יש `long`.',
        ru: 'Есть четыре типа целых чисел: `byte`, `short`, `int`, `long`. В курсе в основном используем `int`, и важно знать, что он ограничен. Для чисел побольше есть `long`.',
        en: 'There are four whole-number types: `byte`, `short`, `int`, `long`. The course mostly uses `int`, and it is important to know that it is limited. For bigger numbers there is `long`.'
      },
      math: ['System.out.println(Integer.MAX_VALUE);   // 2147483647'] },
    { kind: 'board',
      title: { he: 'השוואה: == נותן true או false', ru: 'Сравнение: == даёт true или false', en: 'Comparison: == gives true or false' },
      text: {
        he: '`=` אחד שם ערך במשתנה. `==` שואל "האם שווה?" ומחזיר `true` או `false`.',
        ru: 'Одно `=` кладёт значение в переменную. `==` спрашивает «равно ли?» и возвращает `true` или `false`.',
        en: 'One `=` puts a value into a variable. `==` asks "is it equal?" and returns `true` or `false`.'
      },
      math: ['int x = 5;', 'int y = 10;', 'System.out.println(x == 10);   // false', 'System.out.println(x == y);    // false'] },
    { kind: 'board',
      title: { he: 'לכל תו יש מספר', ru: 'У каждого символа есть номер', en: 'Every character has a number' },
      text: {
        he: 'כשמחלקים שני `double`, התוצאה עשרונית. אם שמים תו ב-`double`, מקבלים את המספר שלו: `\'f\'` הוא 102. ו-`\'f\' + 3` הוא 105, כלומר האות `i`.',
        ru: 'При делении двух `double` результат дробный. Если положить символ в `double`, получим его номер: `\'f\'` — это 102. А `\'f\' + 3` — это 105, то есть буква `i`.',
        en: 'Dividing two `double` values gives a decimal result. Put a character into a `double` and you get its number: `\'f\'` is 102. And `\'f\' + 3` is 105, which is the letter `i`.'
      },
      math: ['double x = 5; double y = 10;', 'System.out.println(x / y);   // 0.5', 'double z = \'f\';', 'System.out.println(z);       // 102.0', 'char c = \'f\' + 3;', 'System.out.println(c);       // i'] },
    { kind: 'talk',
      title: { he: 'שמות למשתנים', ru: 'Имена переменных', en: 'Variable names' },
      text: {
        he: 'השם צריך להגיד מה יש במשתנה: `grade1`, `sum`, `mean` ולא סתם `x`.\nהשם הוא מילה אחת בלי רווחים, מתחיל באות, ו-Java מבדילה בין אותיות גדולות לקטנות.\nכשיש כמה מילים — camelCase: המילה הראשונה באות קטנה, וכל מילה הבאה מתחילה באות גדולה: `gradeOfMath`.',
        ru: 'Имя должно говорить, что лежит в переменной: `grade1`, `sum`, `mean`, а не просто `x`.\nИмя — одно слово без пробелов, начинается с буквы, и Java различает большие и маленькие буквы.\nЕсли слов несколько — camelCase: первое слово с маленькой буквы, каждое следующее с большой: `gradeOfMath`.',
        en: 'A name should say what the variable holds: `grade1`, `sum`, `mean` — not just `x`.\nA name is one word with no spaces, starts with a letter, and Java treats upper and lower case as different.\nFor several words use camelCase: the first word in lower case, each next word starting with a capital: `gradeOfMath`.'
      } },
    { kind: 'board',
      title: { he: 'ממוצע של שלושה ציונים', ru: 'Среднее трёх оценок', en: 'The average of three grades' },
      text: {
        he: 'שלושה סטודנטים קיבלו ציונים. הציונים הם `int`, אבל הממוצע צריך להיות `double`: גם ממוצע של מספרים שלמים יכול לצאת עם שבר.\nאם מחלקים ב-`3`, זה חילוק בשלמים (IntelliJ מסמן אזהרה צהובה). לכן מחלקים ב-`3.0`.',
        ru: 'Трое студентов получили оценки. Оценки — `int`, а среднее должно быть `double`: даже среднее целых чисел может выйти дробным.\nЕсли делить на `3`, это целочисленное деление (IntelliJ показывает жёлтое предупреждение). Поэтому делим на `3.0`.',
        en: 'Three students got grades. The grades are `int`, but the average must be `double`: even the average of whole numbers can have a fraction.\nDividing by `3` is integer division (IntelliJ shows a yellow warning). So divide by `3.0`.'
      },
      math: ['int gread1 = 82;', 'int gread2 = 90;', 'int gread3 = 98;', 'int sum = gread1 + gread2 + gread3;   // 270', 'double mean = (gread1 + gread2 + gread3) / 3.0;   // 90.0'] },
    { kind: 'talk',
      title: { he: 'המרת טיפוס (casting)', ru: 'Приведение типа (casting)', en: 'Casting' },
      text: {
        he: 'מ-`int` ל-`double` Java ממירה לבד: `int x = 3; double y = 2 * x;` נותן `6.0`.\nכשמחלקים שני שלמים, `17 / 4` נותן `4`. כדי לקבל `4.25` כותבים לפני המספר את הטיפוס בסוגריים: `(double)`.',
        ru: 'Из `int` в `double` Java переводит сама: `int x = 3; double y = 2 * x;` даёт `6.0`.\nПри делении двух целых `17 / 4` даёт `4`. Чтобы получить `4.25`, перед числом пишут тип в скобках: `(double)`.',
        en: 'From `int` to `double` Java converts by itself: `int x = 3; double y = 2 * x;` gives `6.0`.\nDividing two whole numbers, `17 / 4` gives `4`. To get `4.25`, write the type in brackets before the number: `(double)`.'
      },
      math: ['int x = 17;', 'System.out.println(x / 4);            // 4', 'System.out.println((double) x / 4);   // 4.25'] },
    { kind: 'tip',
      title: { he: 'טעות נפוצה: הסוגריים במקום הלא נכון', ru: 'Частая ошибка: скобки не там', en: 'Common mistake: brackets in the wrong place' },
      text: {
        he: '`(double) (sum / count)` לא עוזר: מה שבתוך הסוגריים מחושב קודם, כחילוק בשלמים, והשבר כבר נזרק. רק אחר כך התוצאה הופכת ל-`double`. כותבים `(double) sum / count`.',
        ru: '`(double) (sum / count)` не помогает: сначала считается то, что в скобках, как целочисленное деление, и дробь уже потеряна. Только потом результат становится `double`. Пиши `(double) sum / count`.',
        en: '`(double) (sum / count)` does not help: what is inside the brackets is calculated first, as integer division, and the fraction is already lost. Only then does the result become `double`. Write `(double) sum / count`.'
      },
      math: ['(double) (17 / 4)   →   4.0', '(double) 17 / 4     →   4.25'] },
    { kind: 'board',
      title: { he: 'שארית החלוקה: %', ru: 'Остаток от деления: %', en: 'The remainder: %' },
      text: {
        he: '`%` (מודולו) נותן את השארית של חילוק בשלמים.\nדוגמה מהשיעור: באוטובוס יש מקום ל-40 ילדים, ויש 97 ילדים. `97 / 40 = 2` אוטובוסים מלאים, ו-`97 % 40 = 17` ילדים נשארים — צריך עוד אוטובוס.\nמספר זוגי: `x % 2 == 0`. מתחלק ב-7: `x % 7 == 0`.\nספרת האחדות: `% 10`.',
        ru: '`%` (модуло) даёт остаток от целочисленного деления.\nПример с урока: в автобус помещается 40 детей, а детей 97. `97 / 40 = 2` полных автобуса, и `97 % 40 = 17` детей остаются — нужен ещё автобус.\nЧётное число: `x % 2 == 0`. Делится на 7: `x % 7 == 0`.\nЦифра единиц: `% 10`.',
        en: '`%` (modulo) gives the remainder of integer division.\nExample from the lesson: a bus holds 40 children and there are 97 children. `97 / 40 = 2` full buses, and `97 % 40 = 17` children are left — one more bus is needed.\nEven number: `x % 2 == 0`. Divisible by 7: `x % 7 == 0`.\nThe units digit: `% 10`.'
      },
      math: ['int x = 48; int y = 8;', 'System.out.println(x % y);      // 0', 'System.out.println(x % 2);      // 0  → even', 'System.out.println(149 % 10);   // 9', 'System.out.println(149 % 100);  // 49'] },
    { kind: 'talk',
      title: { he: 'לשנות את המשתנה עצמו', ru: 'Изменить саму переменную', en: 'Changing the variable itself' },
      text: {
        he: 'השורה `x + 5;` לבדה לא משנה את x (ו-Java מסמנת אותה כשגיאה). כדי לשנות שומרים את התוצאה: `x = x + 5;` או בקיצור `x += 5;`.\nבאותה דרך: `-=`, `*=`, `/=`, `%=`.',
        ru: 'Строка `x + 5;` сама по себе x не меняет (и Java отмечает её как ошибку). Чтобы изменить, сохраняем результат: `x = x + 5;` или короче `x += 5;`.\nТак же работают `-=`, `*=`, `/=`, `%=`.',
        en: 'The line `x + 5;` alone does not change x (and Java marks it as an error). To change it, store the result: `x = x + 5;` or shorter `x += 5;`.\nThe same way: `-=`, `*=`, `/=`, `%=`.'
      },
      math: ['int x = 48;', 'x += 5;   // 53', 'x %= 5;   // 48 % 5 = 3  (starting again from 48)', 'x /= 5;   // 48 / 5 = 9  (starting again from 48)'] },
    { kind: 'tip',
      title: { he: '++ ו-- : הגדלה והקטנה ב-1', ru: '++ и --: плюс и минус 1', en: '++ and --: add or subtract 1' },
      text: {
        he: '`x++` מגדיל את x ב-1, ו-`x--` מקטין ב-1. ב-Python אין דבר כזה.\n`println(x++)` מדפיס את הערך הישן ורק אחר כך מגדיל; `println(++x)` קודם מגדיל ואז מדפיס. המרצה המליץ לא לשים `++` בתוך `println`, אלא לכתוב `x++;` בשורה נפרדת.',
        ru: '`x++` увеличивает x на 1, а `x--` уменьшает на 1. В Python такого нет.\n`println(x++)` печатает старое значение и только потом увеличивает; `println(++x)` сначала увеличивает, потом печатает. Преподаватель советовал не ставить `++` внутрь `println`, а писать `x++;` отдельной строкой.',
        en: '`x++` adds 1 to x, and `x--` subtracts 1. Python has nothing like it.\n`println(x++)` prints the old value and only then adds 1; `println(++x)` adds first and then prints. The teacher recommended not putting `++` inside `println` — write `x++;` on its own line.'
      } },
    { kind: 'board',
      title: { he: 'ביטויים בוליאניים', ru: 'Логические выражения', en: 'Boolean expressions' },
      text: {
        he: 'השוואה אפשר לשמור במשתנה `boolean`. עם `x = 48`:',
        ru: 'Результат сравнения можно сохранить в переменную `boolean`. При `x = 48`:',
        en: 'A comparison can be stored in a `boolean` variable. With `x = 48`:'
      },
      math: ['boolean b = x >= 50;   // false', 'x != 50                // true', 'x % 2 == 0             // true  (even)', 'x % 10 > 5             // true  (8 > 5)'] },
    { kind: 'board',
      title: { he: 'פירוק מספר לספרות: 736', ru: 'Разбор числа на цифры: 736', en: 'Splitting a number into digits: 736' },
      text: {
        he: 'המשימה העיקרית של השיעור. `% 10` נותן את הספרה האחרונה, ו-`/ 10` מוחק אותה. הכלל: מודולו מוחק את הספרות הגדולות, וחילוק — את הקטנות.',
        ru: 'Главная задача урока. `% 10` даёт последнюю цифру, а `/ 10` её стирает. Правило: модуло стирает старшие цифры, а деление — младшие.',
        en: 'The main task of the lesson. `% 10` gives the last digit, and `/ 10` removes it. The rule: modulo removes the big digits, division removes the small ones.'
      },
      math: ['int number = 736;', 'int r = number % 10;          // 6', 'r = number % 100;  r = r / 10;   // 36 → 3', '', 'int sumDigit = 0;', 'sumDigit += number % 10;  number /= 10;   // 6,  number = 73', 'sumDigit += number % 10;  number /= 10;   // 9,  number = 7', 'sumDigit += number;                       // 16'] },
    { kind: 'talk',
      title: { he: 'דף התרגול', ru: 'Лист упражнений', en: 'The practice sheet' },
      text: {
        he: 'בסוף פתרו בכיתה תרגילים 21–24: ספרת האחדות, הספרות של 482, סכום הספרות של 621 (= 9) וספרת המאות של 905. שיעורי בית לא היו. לתרגול יש באתר הקורס את הדף "תרגול סוגי משתנים": בחלקים א–ג פשוט מקלידים את הקוד ובודקים מה יוצא.',
        ru: 'В конце в классе решали упражнения 21–24: цифра единиц, цифры числа 482, сумма цифр 621 (= 9) и цифра сотен 905. Домашнего задания не было. Для практики на сайте курса есть лист «תרגול סוגי משתנים»: в частях א–ג просто набираешь код и смотришь, что выйдет.',
        en: 'At the end the class solved exercises 21–24: the units digit, the digits of 482, the digit sum of 621 (= 9) and the hundreds digit of 905. There was no homework. For practice, the course site has the sheet "תרגול סוגי משתנים": in parts א–ג you just type the code and see what comes out.'
      } },
    { kind: 'faq',
      q: { he: 'למה `7 / 2` נותן 3 ולא 3.5?', ru: 'Почему `7 / 2` даёт 3, а не 3.5?', en: 'Why does `7 / 2` give 3 and not 3.5?' },
      a: {
        he: 'כששני המספרים `int`, גם התוצאה `int`, והשבר פשוט נזרק (לא מעוגל). מספיק שאחד מהם יהיה `double`: `7 / 2.0` או `(double) 7 / 2` נותנים `3.5`.',
        ru: 'Если оба числа `int`, результат тоже `int`, и дробь просто отбрасывается (не округляется). Достаточно, чтобы одно из них было `double`: `7 / 2.0` или `(double) 7 / 2` дают `3.5`.',
        en: 'When both numbers are `int`, the result is `int` too, and the fraction is simply dropped (not rounded). It is enough for one of them to be `double`: `7 / 2.0` or `(double) 7 / 2` gives `3.5`.'
      } }
  ],

  review: [
    { title: { he: 'טיפוסים', ru: 'Типы', en: 'Types' },
      text: { he: '`int` שלם, `double` עשרוני, `char` תו אחד `\'a\'`, `boolean` אמת/שקר, `String` טקסט `"..."`.', ru: '`int` целое, `double` дробное, `char` один символ `\'a\'`, `boolean` да/нет, `String` текст `"..."`.', en: '`int` whole, `double` decimal, `char` one character `\'a\'`, `boolean` true/false, `String` text `"..."`.' } },
    { title: { he: 'חילוק בשלמים', ru: 'Целочисленное деление', en: 'Integer division' },
      text: { he: '`17 / 4 = 4` — השבר נזרק. `17 / 4.0` או `(double) 17 / 4` נותנים `4.25`.', ru: '`17 / 4 = 4` — дробь отбрасывается. `17 / 4.0` или `(double) 17 / 4` дают `4.25`.', en: '`17 / 4 = 4` — the fraction is dropped. `17 / 4.0` or `(double) 17 / 4` gives `4.25`.' } },
    { title: { he: 'שארית %', ru: 'Остаток %', en: 'Remainder %' },
      text: { he: '`97 % 40 = 17`. זוגי: `x % 2 == 0`. ספרה אחרונה: `x % 10`.', ru: '`97 % 40 = 17`. Чётное: `x % 2 == 0`. Последняя цифра: `x % 10`.', en: '`97 % 40 = 17`. Even: `x % 2 == 0`. Last digit: `x % 10`.' } },
    { title: { he: 'פירוק לספרות', ru: 'Разбор на цифры', en: 'Digits' },
      text: { he: '`% 10` לוקח את הספרה האחרונה, `/ 10` מוחק אותה. עשרות: `n / 10 % 10`, מאות: `n / 100`.', ru: '`% 10` берёт последнюю цифру, `/ 10` её стирает. Десятки: `n / 10 % 10`, сотни: `n / 100`.', en: '`% 10` takes the last digit, `/ 10` removes it. Tens: `n / 10 % 10`, hundreds: `n / 100`.' } },
    { title: { he: '= מול ==', ru: '= и ==', en: '= vs ==' },
      text: { he: '`x = 5` שם ערך. `x == 5` בודק ומחזיר `true`/`false`.', ru: '`x = 5` кладёт значение. `x == 5` проверяет и даёт `true`/`false`.', en: '`x = 5` stores a value. `x == 5` checks and gives `true`/`false`.' } },
    { title: { he: 'קיצורים', ru: 'Сокращения', en: 'Shortcuts' },
      text: { he: '`x += 5` זה `x = x + 5`. `x++` מוסיף 1 — עדיף בשורה נפרדת.', ru: '`x += 5` — это `x = x + 5`. `x++` прибавляет 1 — лучше отдельной строкой.', en: '`x += 5` means `x = x + 5`. `x++` adds 1 — best on its own line.' } },
    { title: { he: 'סדר פעולות', ru: 'Порядок действий', en: 'Order of operations' },
      text: { he: 'קודם `*`, `/`, `%`, אחר כך `+`, `-`. סוגריים — תמיד ראשונים.', ru: 'Сначала `*`, `/`, `%`, потом `+`, `-`. Скобки — всегда первыми.', en: 'First `*`, `/`, `%`, then `+`, `-`. Brackets always come first.' } }
  ],

  tasks: {
    groups: {
      'ops': { he: 'חשבון וטיפוסים מהשיעור', ru: 'Арифметика и типы с урока', en: 'Arithmetic and types from the lesson' },
      'mod': { he: 'שארית, קיצורים וספרות', ru: 'Остаток, сокращения и цифры', en: 'Remainder, shortcuts and digits' }
    },
    teacher: [
      { id: 't-ops-1', group: 'ops', label: '1', kind: 'number',
        text: { he: 'מה תדפיס הפקודה?\n`System.out.println(2 + 5 * 7 - 2 / 7);`', ru: 'Что напечатает команда?\n`System.out.println(2 + 5 * 7 - 2 / 7);`', en: 'What does this print?\n`System.out.println(2 + 5 * 7 - 2 / 7);`' },
        answer: { value: '37' },
        hints: [
          { he: 'קודם כפל וחילוק, אחר כך חיבור וחיסור.', ru: 'Сначала умножение и деление, потом сложение и вычитание.', en: 'Multiplication and division first, then addition and subtraction.' },
          { he: '`2 / 7` הוא חילוק של שני שלמים. כמה פעמים 7 נכנס ב-2?', ru: '`2 / 7` — деление двух целых. Сколько раз 7 помещается в 2?', en: '`2 / 7` divides two whole numbers. How many times does 7 fit into 2?' }
        ],
        solution: [
          { he: 'כפל: `5 * 7 = 35`', ru: 'Умножение: `5 * 7 = 35`', en: 'Multiplication: `5 * 7 = 35`' },
          { he: 'חילוק בשלמים: `2 / 7 = 0` (השבר נזרק)', ru: 'Целочисленное деление: `2 / 7 = 0` (дробь отбрасывается)', en: 'Integer division: `2 / 7 = 0` (the fraction is dropped)' },
          '2 + 35 - 0',
          '= 37',
          { he: 'תשובה: 37', ru: 'Ответ: 37', en: 'Answer: 37' }
        ] },
      { id: 't-ops-2', group: 'ops', label: '2', kind: 'number',
        text: { he: 'מה תדפיס הפקודה?\n`System.out.println(2 + 3 * 4 - 8 / 2);`', ru: 'Что напечатает команда?\n`System.out.println(2 + 3 * 4 - 8 / 2);`', en: 'What does this print?\n`System.out.println(2 + 3 * 4 - 8 / 2);`' },
        answer: { value: '10' },
        hints: [
          { he: 'קודם `3 * 4` ו-`8 / 2`.', ru: 'Сначала `3 * 4` и `8 / 2`.', en: 'First `3 * 4` and `8 / 2`.' },
          { he: '`3 * 4 = 12`, `8 / 2 = 4`. עכשיו `2 + 12 - 4`.', ru: '`3 * 4 = 12`, `8 / 2 = 4`. Теперь `2 + 12 - 4`.', en: '`3 * 4 = 12`, `8 / 2 = 4`. Now `2 + 12 - 4`.' }
        ],
        solution: ['3 * 4 = 12', '8 / 2 = 4', '2 + 12 - 4', '= 10', { he: 'תשובה: 10', ru: 'Ответ: 10', en: 'Answer: 10' }] },
      { id: 't-ops-3', group: 'ops', label: '3', kind: 'number',
        text: { he: 'מה יודפס?\n`double x = 5;`\n`double y = 10;`\n`System.out.println(x / y);`', ru: 'Что будет напечатано?\n`double x = 5;`\n`double y = 10;`\n`System.out.println(x / y);`', en: 'What is printed?\n`double x = 5;`\n`double y = 10;`\n`System.out.println(x / y);`' },
        answer: { value: '0.5' },
        hints: [
          { he: 'שני המשתנים הם `double`, אז החילוק לא זורק את השבר.', ru: 'Обе переменные `double`, поэтому деление не отбрасывает дробь.', en: 'Both variables are `double`, so the division keeps the fraction.' }
        ],
        solution: ['x = 5.0,  y = 10.0', '5.0 / 10.0 = 0.5', { he: 'תשובה: 0.5', ru: 'Ответ: 0.5', en: 'Answer: 0.5' }] },
      { id: 't-ops-4', group: 'ops', label: '4', kind: 'text',
        text: { he: 'מה יודפס? (`\'f\'` הוא התו מספר 102)\n`char x = \'f\' + 3;`\n`System.out.println(x);`', ru: 'Что будет напечатано? (`\'f\'` — символ номер 102)\n`char x = \'f\' + 3;`\n`System.out.println(x);`', en: 'What is printed? (`\'f\'` is character number 102)\n`char x = \'f\' + 3;`\n`System.out.println(x);`' },
        answer: { accept: ['i'] },
        hints: [
          { he: 'מוסיפים 3 למספר של התו, והתוצאה נשמרת שוב כתו.', ru: 'К номеру символа прибавляем 3, результат снова хранится как символ.', en: 'Add 3 to the character number; the result is stored as a character again.' },
          { he: '102 + 3 = 105. איזו אות באה 3 אותיות אחרי f?', ru: '102 + 3 = 105. Какая буква идёт через 3 после f?', en: '102 + 3 = 105. Which letter comes 3 after f?' }
        ],
        solution: ['\'f\' = 102', '102 + 3 = 105', 'f → g → h → i', { he: 'המשתנה מסוג `char`, לכן מודפסת האות: i', ru: 'Переменная типа `char`, поэтому печатается буква: i', en: 'The variable is a `char`, so the letter is printed: i' }] },
      { id: 't-ops-5', group: 'ops', label: '5', kind: 'number',
        text: { he: 'מה יודפס?\n`int gread1 = 82;`\n`int gread2 = 90;`\n`int gread3 = 98;`\n`double mean = (gread1 + gread2 + gread3) / 3.0;`\n`System.out.println(mean);`', ru: 'Что будет напечатано?\n`int gread1 = 82;`\n`int gread2 = 90;`\n`int gread3 = 98;`\n`double mean = (gread1 + gread2 + gread3) / 3.0;`\n`System.out.println(mean);`', en: 'What is printed?\n`int gread1 = 82;`\n`int gread2 = 90;`\n`int gread3 = 98;`\n`double mean = (gread1 + gread2 + gread3) / 3.0;`\n`System.out.println(mean);`' },
        answer: { value: '90' },
        hints: [
          { he: 'קודם הסוגריים: הסכום של שלושת הציונים.', ru: 'Сначала скобки: сумма трёх оценок.', en: 'Brackets first: the sum of the three grades.' },
          { he: 'הסכום 270. עכשיו `270 / 3.0`.', ru: 'Сумма 270. Теперь `270 / 3.0`.', en: 'The sum is 270. Now `270 / 3.0`.' }
        ],
        solution: ['82 + 90 + 98 = 270', '270 / 3.0 = 90.0', { he: 'יודפס `90.0` (מספר `double` תמיד מודפס עם נקודה)', ru: 'Будет напечатано `90.0` (число `double` всегда печатается с точкой)', en: '`90.0` is printed (a `double` is always printed with a point)' }] },
      { id: 't-ops-6', group: 'ops', label: '6', kind: 'number',
        text: { he: 'מה יודפס?\n`System.out.println(17 / 4);`', ru: 'Что будет напечатано?\n`System.out.println(17 / 4);`', en: 'What is printed?\n`System.out.println(17 / 4);`' },
        answer: { value: '4' },
        hints: [
          { he: 'שני המספרים שלמים. כמה פעמים 4 נכנס ב-17?', ru: 'Оба числа целые. Сколько раз 4 помещается в 17?', en: 'Both numbers are whole. How many times does 4 fit into 17?' }
        ],
        solution: ['17 / 4 = 4.25', { he: 'חילוק בשלמים זורק את השבר: 4', ru: 'Целочисленное деление отбрасывает дробь: 4', en: 'Integer division drops the fraction: 4' }] },
      { id: 't-ops-7', group: 'ops', label: '7', kind: 'number',
        text: { he: 'מה יודפס?\n`int x = 17;`\n`System.out.println((double) x / 4);`', ru: 'Что будет напечатано?\n`int x = 17;`\n`System.out.println((double) x / 4);`', en: 'What is printed?\n`int x = 17;`\n`System.out.println((double) x / 4);`' },
        answer: { value: '4.25' },
        hints: [
          { he: '`(double)` הופך את x ל-`17.0` לפני החילוק.', ru: '`(double)` превращает x в `17.0` до деления.', en: '`(double)` turns x into `17.0` before the division.' }
        ],
        solution: ['(double) x = 17.0', '17.0 / 4 = 4.25', { he: 'תשובה: 4.25', ru: 'Ответ: 4.25', en: 'Answer: 4.25' }] },
      { id: 't-ops-8', group: 'ops', label: '8', kind: 'number',
        text: { he: 'מה יודפס?\n`int x = 3;`\n`double y = 2 * x;`\n`System.out.println(y);`', ru: 'Что будет напечатано?\n`int x = 3;`\n`double y = 2 * x;`\n`System.out.println(y);`', en: 'What is printed?\n`int x = 3;`\n`double y = 2 * x;`\n`System.out.println(y);`' },
        answer: { value: '6' },
        hints: [
          { he: '`2 * x` הוא `int`, ו-Java ממירה אותו לבד ל-`double`.', ru: '`2 * x` — это `int`, и Java сама превращает его в `double`.', en: '`2 * x` is an `int`, and Java converts it to `double` by itself.' }
        ],
        solution: ['2 * 3 = 6', { he: 'הערך נשמר ב-`double`: יודפס `6.0`', ru: 'Значение сохраняется в `double`: напечатается `6.0`', en: 'The value is stored in a `double`: `6.0` is printed' }] },
      { id: 't-mod-1', group: 'mod', label: '9', kind: 'number',
        text: { he: 'באוטובוס יש מקום ל-40 ילדים, ויש 97 ילדים. מה תדפיס הפקודה (כמה ילדים נשארים אחרי האוטובוסים המלאים)?\n`System.out.println(97 % 40);`', ru: 'В автобус помещается 40 детей, а детей 97. Что напечатает команда (сколько детей останется после полных автобусов)?\n`System.out.println(97 % 40);`', en: 'A bus holds 40 children and there are 97 children. What does this print (how many children are left after the full buses)?\n`System.out.println(97 % 40);`' },
        answer: { value: '17' },
        hints: [
          { he: 'קודם: כמה אוטובוסים מלאים? `97 / 40`.', ru: 'Сначала: сколько полных автобусов? `97 / 40`.', en: 'First: how many full buses? `97 / 40`.' },
          { he: '2 אוטובוסים לוקחים 80 ילדים. כמה נשארו מ-97?', ru: '2 автобуса забирают 80 детей. Сколько осталось из 97?', en: '2 buses take 80 children. How many of the 97 are left?' }
        ],
        solution: ['97 / 40 = 2', '2 * 40 = 80', '97 - 80 = 17', { he: 'תשובה: 17', ru: 'Ответ: 17', en: 'Answer: 17' }] },
      { id: 't-mod-2', group: 'mod', label: '10', kind: 'number',
        text: { he: 'מה יודפס?\n`System.out.println(149 % 100);`', ru: 'Что будет напечатано?\n`System.out.println(149 % 100);`', en: 'What is printed?\n`System.out.println(149 % 100);`' },
        answer: { value: '49' },
        hints: [
          { he: 'מה נשאר מ-149 אחרי שמורידים מאה שלמה אחת?', ru: 'Что остаётся от 149, если убрать одну целую сотню?', en: 'What is left of 149 after removing one whole hundred?' }
        ],
        solution: ['149 / 100 = 1', '149 - 100 = 49', { he: '`% 100` משאיר את שתי הספרות האחרונות: 49', ru: '`% 100` оставляет две последние цифры: 49', en: '`% 100` keeps the last two digits: 49' }] },
      { id: 't-mod-3', group: 'mod', label: '11', kind: 'number',
        text: { he: 'מה יודפס?\n`int x = 48;`\n`x %= 5;`\n`System.out.println(x);`', ru: 'Что будет напечатано?\n`int x = 48;`\n`x %= 5;`\n`System.out.println(x);`', en: 'What is printed?\n`int x = 48;`\n`x %= 5;`\n`System.out.println(x);`' },
        answer: { value: '3' },
        hints: [
          { he: '`x %= 5` זה `x = x % 5`.', ru: '`x %= 5` — это `x = x % 5`.', en: '`x %= 5` means `x = x % 5`.' },
          { he: '5 נכנס ב-48 תשע פעמים (45). מה השארית?', ru: '5 помещается в 48 девять раз (45). Какой остаток?', en: '5 fits into 48 nine times (45). What is the remainder?' }
        ],
        solution: ['x = 48', 'x = 48 % 5', '48 = 9 * 5 + 3', 'x = 3', { he: 'תשובה: 3', ru: 'Ответ: 3', en: 'Answer: 3' }] },
      { id: 't-mod-4', group: 'mod', label: '12', kind: 'number',
        text: { he: 'מה יודפס?\n`int x = 48;`\n`x /= 5;`\n`System.out.println(x);`', ru: 'Что будет напечатано?\n`int x = 48;`\n`x /= 5;`\n`System.out.println(x);`', en: 'What is printed?\n`int x = 48;`\n`x /= 5;`\n`System.out.println(x);`' },
        answer: { value: '9' },
        hints: [
          { he: '`x /= 5` זה `x = x / 5`, ו-x הוא `int`.', ru: '`x /= 5` — это `x = x / 5`, а x — `int`.', en: '`x /= 5` means `x = x / 5`, and x is an `int`.' }
        ],
        solution: ['x = 48 / 5', '48 / 5 = 9.6', { he: 'חילוק בשלמים: x = 9', ru: 'Целочисленное деление: x = 9', en: 'Integer division: x = 9' }] },
      { id: 't-mod-5', group: 'mod', label: '13', kind: 'choice',
        text: { he: 'מה יודפס?\n`int x = 48;`\n`System.out.println(x % 10 > 5);`', ru: 'Что будет напечатано?\n`int x = 48;`\n`System.out.println(x % 10 > 5);`', en: 'What is printed?\n`int x = 48;`\n`System.out.println(x % 10 > 5);`' },
        options: ['true', 'false', '8'],
        answer: { index: 0 },
        hints: [
          { he: 'קודם `x % 10` — הספרה האחרונה של 48. אחר כך ההשוואה.', ru: 'Сначала `x % 10` — последняя цифра 48. Потом сравнение.', en: 'First `x % 10` — the last digit of 48. Then the comparison.' }
        ],
        solution: ['48 % 10 = 8', '8 > 5', { he: 'השוואה מחזירה `boolean`: true', ru: 'Сравнение возвращает `boolean`: true', en: 'A comparison returns a `boolean`: true' }] },
      { id: 't-mod-6', group: 'mod', label: '14', kind: 'number',
        text: { he: 'סכום הספרות של 736. מה יודפס?\n`int number = 736;`\n`int r = 0;`\n`r += number % 10;`\n`number /= 10;`\n`r += number % 10;`\n`number /= 10;`\n`r += number;`\n`System.out.println(r);`', ru: 'Сумма цифр 736. Что будет напечатано?\n`int number = 736;`\n`int r = 0;`\n`r += number % 10;`\n`number /= 10;`\n`r += number % 10;`\n`number /= 10;`\n`r += number;`\n`System.out.println(r);`', en: 'The digit sum of 736. What is printed?\n`int number = 736;`\n`int r = 0;`\n`r += number % 10;`\n`number /= 10;`\n`r += number % 10;`\n`number /= 10;`\n`r += number;`\n`System.out.println(r);`' },
        answer: { value: '16' },
        hints: [
          { he: 'עקבו אחרי `number` ו-`r` שורה אחרי שורה.', ru: 'Следи за `number` и `r` строка за строкой.', en: 'Track `number` and `r` line by line.' },
          { he: '`% 10` לוקח את הספרה האחרונה, `/= 10` מוחק אותה.', ru: '`% 10` берёт последнюю цифру, `/= 10` её стирает.', en: '`% 10` takes the last digit, `/= 10` removes it.' }
        ],
        solution: ['number = 736,  r = 0', 'r += 736 % 10  →  r = 6', 'number /= 10  →  number = 73', 'r += 73 % 10  →  r = 6 + 3 = 9', 'number /= 10  →  number = 7', 'r += 7  →  r = 16', { he: 'תשובה: 16 (7 + 3 + 6)', ru: 'Ответ: 16 (7 + 3 + 6)', en: 'Answer: 16 (7 + 3 + 6)' }] },
      { id: 't-mod-7', group: 'mod', label: '15', kind: 'number',
        text: { he: 'תרגיל 22: מה ספרת העשרות של 482? מה יודפס?\n`int number = 482;`\n`System.out.println(number % 100 / 10);`', ru: 'Упражнение 22: какая цифра десятков у 482? Что будет напечатано?\n`int number = 482;`\n`System.out.println(number % 100 / 10);`', en: 'Exercise 22: what is the tens digit of 482? What is printed?\n`int number = 482;`\n`System.out.println(number % 100 / 10);`' },
        answer: { value: '8' },
        hints: [
          { he: '`%` ו-`/` באותה דרגה — מחשבים משמאל לימין.', ru: '`%` и `/` одного уровня — считаем слева направо.', en: '`%` and `/` have the same level — work left to right.' },
          { he: '`482 % 100 = 82`. עכשיו `82 / 10`.', ru: '`482 % 100 = 82`. Теперь `82 / 10`.', en: '`482 % 100 = 82`. Now `82 / 10`.' }
        ],
        solution: ['482 % 100 = 82', '82 / 10 = 8', { he: 'תשובה: 8', ru: 'Ответ: 8', en: 'Answer: 8' }] },
      { id: 't-mod-8', group: 'mod', label: '16', kind: 'number',
        text: { he: 'תרגיל 24: ספרת המאות של 905. מה יודפס?\n`int number = 905;`\n`System.out.println(number / 100);`', ru: 'Упражнение 24: цифра сотен у 905. Что будет напечатано?\n`int number = 905;`\n`System.out.println(number / 100);`', en: 'Exercise 24: the hundreds digit of 905. What is printed?\n`int number = 905;`\n`System.out.println(number / 100);`' },
        answer: { value: '9' },
        hints: [
          { he: 'חילוק בשלמים ב-100 מוחק שתי ספרות מימין.', ru: 'Целочисленное деление на 100 стирает две цифры справа.', en: 'Integer division by 100 removes two digits on the right.' }
        ],
        solution: ['905 / 100 = 9.05', { he: 'חילוק בשלמים: 9', ru: 'Целочисленное деление: 9', en: 'Integer division: 9' }] }
    ],

    ai: [
      { id: 'a1', level: 1, label: 'A1', kind: 'number',
        text: { he: 'מה יודפס?\n`int a = 7;`\n`int b = 2;`\n`System.out.println(a / b);`', ru: 'Что будет напечатано?\n`int a = 7;`\n`int b = 2;`\n`System.out.println(a / b);`', en: 'What is printed?\n`int a = 7;`\n`int b = 2;`\n`System.out.println(a / b);`' },
        answer: { value: '3' },
        hints: [
          { he: 'שני המשתנים `int`.', ru: 'Обе переменные `int`.', en: 'Both variables are `int`.' },
          { he: '7 / 2 = 3.5, אבל בשלמים השבר נזרק.', ru: '7 / 2 = 3.5, но у целых дробь отбрасывается.', en: '7 / 2 = 3.5, but with whole numbers the fraction is dropped.' }
        ],
        solution: ['7 / 2 = 3.5', { he: 'חילוק בשלמים: 3', ru: 'Целочисленное деление: 3', en: 'Integer division: 3' }] },
      { id: 'a2', level: 1, label: 'A2', kind: 'number',
        text: { he: 'מה יודפס?\n`System.out.println(7 % 3);`', ru: 'Что будет напечатано?\n`System.out.println(7 % 3);`', en: 'What is printed?\n`System.out.println(7 % 3);`' },
        answer: { value: '1' },
        hints: [
          { he: 'כמה פעמים 3 נכנס ב-7, ומה נשאר?', ru: 'Сколько раз 3 помещается в 7, и что остаётся?', en: 'How many times does 3 fit into 7, and what is left?' }
        ],
        solution: ['7 / 3 = 2', '2 * 3 = 6', '7 - 6 = 1', { he: 'תשובה: 1', ru: 'Ответ: 1', en: 'Answer: 1' }] },
      { id: 'a3', level: 1, label: 'A3', kind: 'number',
        text: { he: 'מה יודפס?\n`int x = 5;`\n`x++;`\n`x++;`\n`x--;`\n`System.out.println(x);`', ru: 'Что будет напечатано?\n`int x = 5;`\n`x++;`\n`x++;`\n`x--;`\n`System.out.println(x);`', en: 'What is printed?\n`int x = 5;`\n`x++;`\n`x++;`\n`x--;`\n`System.out.println(x);`' },
        answer: { value: '6' },
        hints: [
          { he: '`x++` מוסיף 1, `x--` מוריד 1.', ru: '`x++` прибавляет 1, `x--` отнимает 1.', en: '`x++` adds 1, `x--` subtracts 1.' }
        ],
        solution: ['x = 5', 'x++  →  6', 'x++  →  7', 'x--  →  6', { he: 'תשובה: 6', ru: 'Ответ: 6', en: 'Answer: 6' }] },
      { id: 'a4', level: 2, label: 'A4', kind: 'number',
        text: { he: 'מה יודפס?\n`System.out.println(10 / 4 * 4);`', ru: 'Что будет напечатано?\n`System.out.println(10 / 4 * 4);`', en: 'What is printed?\n`System.out.println(10 / 4 * 4);`' },
        answer: { value: '8' },
        hints: [
          { he: '`/` ו-`*` באותה דרגה, לכן משמאל לימין: קודם `10 / 4`.', ru: '`/` и `*` одного уровня, поэтому слева направо: сначала `10 / 4`.', en: '`/` and `*` have the same level, so left to right: first `10 / 4`.' },
          { he: '`10 / 4` בשלמים הוא 2, לא 2.5.', ru: '`10 / 4` у целых — это 2, а не 2.5.', en: '`10 / 4` with whole numbers is 2, not 2.5.' }
        ],
        solution: ['10 / 4 = 2', '2 * 4 = 8', { he: 'תשובה: 8 (ולא 10 — השבר הלך לאיבוד בחילוק)', ru: 'Ответ: 8 (а не 10 — дробь потерялась при делении)', en: 'Answer: 8 (not 10 — the fraction was lost in the division)' }] },
      { id: 'a5', level: 2, label: 'A5', kind: 'number',
        text: { he: 'מה יודפס?\n`double d = 7 / 2;`\n`System.out.println(d);`', ru: 'Что будет напечатано?\n`double d = 7 / 2;`\n`System.out.println(d);`', en: 'What is printed?\n`double d = 7 / 2;`\n`System.out.println(d);`' },
        answer: { value: '3' },
        hints: [
          { he: 'מה מחושב קודם: החילוק או השמירה ב-`double`?', ru: 'Что считается раньше: деление или запись в `double`?', en: 'What happens first: the division or storing into `double`?' },
          { he: '`7 / 2` הם שני `int`, אז התוצאה 3. רק אחר כך היא נשמרת ב-`double`.', ru: '`7 / 2` — два `int`, поэтому результат 3. Только потом он записывается в `double`.', en: '`7 / 2` is two `int` values, so the result is 3. Only then is it stored in a `double`.' }
        ],
        solution: ['7 / 2 = 3   (int)', 'd = 3.0', { he: 'יודפס `3.0`', ru: 'Напечатается `3.0`', en: '`3.0` is printed' }] },
      { id: 'a6', level: 2, label: 'A6', kind: 'number',
        text: { he: 'מה יודפס?\n`int x = 10;`\n`x += 3;`\n`x %= 4;`\n`System.out.println(x);`', ru: 'Что будет напечатано?\n`int x = 10;`\n`x += 3;`\n`x %= 4;`\n`System.out.println(x);`', en: 'What is printed?\n`int x = 10;`\n`x += 3;`\n`x %= 4;`\n`System.out.println(x);`' },
        answer: { value: '1' },
        hints: [
          { he: 'קודם `x += 3`, אחר כך `x %= 4` על הערך החדש.', ru: 'Сначала `x += 3`, потом `x %= 4` от нового значения.', en: 'First `x += 3`, then `x %= 4` on the new value.' }
        ],
        solution: ['x = 10', 'x += 3  →  x = 13', 'x %= 4  →  13 % 4', '13 = 3 * 4 + 1', 'x = 1', { he: 'תשובה: 1', ru: 'Ответ: 1', en: 'Answer: 1' }] },
      { id: 'a7', level: 2, label: 'A7', kind: 'number',
        text: { he: 'מה יודפס? (התו `\'a\'` הוא מספר 97)\n`char c = \'a\';`\n`int k = c + 2;`\n`System.out.println(k);`', ru: 'Что будет напечатано? (символ `\'a\'` — номер 97)\n`char c = \'a\';`\n`int k = c + 2;`\n`System.out.println(k);`', en: 'What is printed? (the character `\'a\'` is number 97)\n`char c = \'a\';`\n`int k = c + 2;`\n`System.out.println(k);`' },
        answer: { value: '99' },
        hints: [
          { he: 'הפעם התוצאה נשמרת ב-`int`, לא ב-`char`.', ru: 'На этот раз результат хранится в `int`, а не в `char`.', en: 'This time the result is stored in an `int`, not a `char`.' }
        ],
        solution: ['\'a\' = 97', '97 + 2 = 99', { he: 'k הוא `int`, לכן מודפס המספר 99 (ולא האות c)', ru: 'k — это `int`, поэтому печатается число 99 (а не буква c)', en: 'k is an `int`, so the number 99 is printed (not the letter c)' }] },
      { id: 'a8', level: 2, label: 'A8', kind: 'text',
        text: { he: 'מה תדפיס השורה? (כתבו בדיוק את מה שיופיע על המסך)\n`System.out.println("Sum: " + 2 + 3);`', ru: 'Что напечатает строка? (напиши точно то, что появится на экране)\n`System.out.println("Sum: " + 2 + 3);`', en: 'What does this line print? (write exactly what appears on the screen)\n`System.out.println("Sum: " + 2 + 3);`' },
        answer: { accept: ['Sum: 23', 'Sum:23'] },
        hints: [
          { he: 'Java מחשבת משמאל לימין. מה יוצא מ-`"Sum: " + 2`?', ru: 'Java считает слева направо. Что получится из `"Sum: " + 2`?', en: 'Java works left to right. What is `"Sum: " + 2`?' },
          { he: 'טקסט ועוד מספר הם טקסט. אז גם ה-3 רק נדבק לסוף.', ru: 'Текст плюс число — это текст. Значит, 3 тоже просто приклеится в конец.', en: 'Text plus a number is text. So the 3 is also just glued to the end.' }
        ],
        solution: ['"Sum: " + 2  →  "Sum: 2"', '"Sum: 2" + 3  →  "Sum: 23"', { he: 'כדי לקבל 5 צריך סוגריים: `"Sum: " + (2 + 3)`', ru: 'Чтобы получить 5, нужны скобки: `"Sum: " + (2 + 3)`', en: 'To get 5 you need brackets: `"Sum: " + (2 + 3)`' }] },
      { id: 'a9', level: 3, label: 'A9', kind: 'number',
        text: { he: 'מה יודפס?\n`double avg = (double) (7 / 2);`\n`System.out.println(avg);`', ru: 'Что будет напечатано?\n`double avg = (double) (7 / 2);`\n`System.out.println(avg);`', en: 'What is printed?\n`double avg = (double) (7 / 2);`\n`System.out.println(avg);`' },
        answer: { value: '3' },
        hints: [
          { he: 'מה בתוך הסוגריים מחושב קודם?', ru: 'Что внутри скобок считается первым?', en: 'What inside the brackets is calculated first?' },
          { he: '`7 / 2` הוא חילוק בשלמים. ה-`(double)` מגיע מאוחר מדי.', ru: '`7 / 2` — целочисленное деление. `(double)` приходит слишком поздно.', en: '`7 / 2` is integer division. The `(double)` comes too late.' }
        ],
        solution: ['7 / 2 = 3   (int)', '(double) 3 = 3.0', { he: 'יודפס `3.0`. הנכון: `(double) 7 / 2` → 3.5', ru: 'Напечатается `3.0`. Правильно: `(double) 7 / 2` → 3.5', en: '`3.0` is printed. Correct: `(double) 7 / 2` → 3.5' }] },
      { id: 'a10', level: 3, label: 'A10', kind: 'number',
        text: { he: 'סכום הספרות של 5084. מה יודפס?\n`int n = 5084;`\n`int s = 0;`\n`s += n % 10;  n /= 10;`\n`s += n % 10;  n /= 10;`\n`s += n % 10;  n /= 10;`\n`s += n;`\n`System.out.println(s);`', ru: 'Сумма цифр 5084. Что будет напечатано?\n`int n = 5084;`\n`int s = 0;`\n`s += n % 10;  n /= 10;`\n`s += n % 10;  n /= 10;`\n`s += n % 10;  n /= 10;`\n`s += n;`\n`System.out.println(s);`', en: 'The digit sum of 5084. What is printed?\n`int n = 5084;`\n`int s = 0;`\n`s += n % 10;  n /= 10;`\n`s += n % 10;  n /= 10;`\n`s += n % 10;  n /= 10;`\n`s += n;`\n`System.out.println(s);`' },
        answer: { value: '17' },
        hints: [
          { he: 'כמו 736 מהשיעור, אבל עם 4 ספרות. שימו לב לספרה 0.', ru: 'Как 736 с урока, но с 4 цифрами. Обрати внимание на цифру 0.', en: 'Like 736 from the lesson, but with 4 digits. Watch out for the digit 0.' },
          { he: 'עקבו אחרי n: 5084 → 508 → 50 → 5.', ru: 'Следи за n: 5084 → 508 → 50 → 5.', en: 'Track n: 5084 → 508 → 50 → 5.' }
        ],
        solution: ['n = 5084,  s = 0', 's += 4  →  s = 4,   n = 508', 's += 8  →  s = 12,  n = 50', 's += 0  →  s = 12,  n = 5', 's += 5  →  s = 17', { he: 'תשובה: 17 (5 + 0 + 8 + 4)', ru: 'Ответ: 17 (5 + 0 + 8 + 4)', en: 'Answer: 17 (5 + 0 + 8 + 4)' }] },
      { id: 'a11', level: 3, label: 'A11', kind: 'text',
        text: { he: 'מה יודפס? (כתבו את שתי השורות, עם רווח ביניהן)\n`int x = 5;`\n`System.out.println(x++);`\n`System.out.println(x);`', ru: 'Что будет напечатано? (напиши обе строки через пробел)\n`int x = 5;`\n`System.out.println(x++);`\n`System.out.println(x);`', en: 'What is printed? (write both lines, separated by a space)\n`int x = 5;`\n`System.out.println(x++);`\n`System.out.println(x);`' },
        answer: { accept: ['5 6'] },
        hints: [
          { he: '`x++` בתוך `println`: קודם מדפיס, אחר כך מגדיל.', ru: '`x++` внутри `println`: сначала печатает, потом увеличивает.', en: '`x++` inside `println`: it prints first, then adds 1.' }
        ],
        solution: ['x = 5', { he: 'שורה 1: מודפס הערך הישן 5, ואז x = 6', ru: 'Строка 1: печатается старое значение 5, потом x = 6', en: 'Line 1: the old value 5 is printed, then x = 6' }, { he: 'שורה 2: מודפס 6', ru: 'Строка 2: печатается 6', en: 'Line 2: 6 is printed' }, { he: 'תשובה: 5 6. בגלל הבלבול הזה המרצה המליץ לכתוב `x++;` בשורה נפרדת.', ru: 'Ответ: 5 6. Из-за такой путаницы преподаватель советовал писать `x++;` отдельной строкой.', en: 'Answer: 5 6. Because of this confusion the teacher recommended writing `x++;` on its own line.' }] },
      { id: 'a12', level: 3, label: 'A12', kind: 'text',
        text: { he: '125 דקות. מה יודפס?\n`int total = 125;`\n`System.out.println(total / 60 + " h " + total % 60 + " min");`', ru: '125 минут. Что будет напечатано?\n`int total = 125;`\n`System.out.println(total / 60 + " h " + total % 60 + " min");`', en: '125 minutes. What is printed?\n`int total = 125;`\n`System.out.println(total / 60 + " h " + total % 60 + " min");`' },
        answer: { accept: ['2 h 5 min'] },
        hints: [
          { he: '`/` ו-`%` מחושבים לפני החיבור עם הטקסט.', ru: '`/` и `%` считаются раньше, чем склейка с текстом.', en: '`/` and `%` are calculated before joining with the text.' },
          { he: '`125 / 60 = 2`, `125 % 60 = 5`.', ru: '`125 / 60 = 2`, `125 % 60 = 5`.', en: '`125 / 60 = 2`, `125 % 60 = 5`.' }
        ],
        solution: ['125 / 60 = 2', '125 % 60 = 125 - 120 = 5', '2 + " h " + 5 + " min"', '→  "2 h 5 min"', { he: 'תשובה: 2 h 5 min', ru: 'Ответ: 2 h 5 min', en: 'Answer: 2 h 5 min' }] }
    ]
  }
};

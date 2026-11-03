/* Lesson data — format: see the comment at the top of data/lessons/math-2026-11-01.js.
   Every "what does it print" answer in this file was checked by compiling and running
   the Java code (javac/java 21). */
window.LESSONS = window.LESSONS || {};
window.LESSONS["algo-2026-10-18"] = {
  "id": "algo-2026-10-18",
  "subject": "algo",
  "date": "2026-10-18",
  "title": {
    "he": "משתנים, טיפוסים ופעולות חשבון ב-Java",
    "ru": "Переменные, типы и арифметика в Java",
    "en": "Variables, types and arithmetic in Java"
  },
  "summary": {
    "he": "התוכנית הראשונה, טיפוסי נתונים (`int`, `double`, `char`, `boolean`, `String`), חילוק בשלמים, המרת טיפוס, שארית `%`, קיצורים `+=` ו־`++`, ופירוק מספר לספרות.",
    "ru": "Первая программа, типы данных (`int`, `double`, `char`, `boolean`, `String`), целочисленное деление, приведение типа, остаток `%`, сокращения `+=` и `++` и разбор числа на цифры.",
    "en": "The first program, data types (`int`, `double`, `char`, `boolean`, `String`), integer division, casting, the remainder `%`, the shortcuts `+=` and `++`, and splitting a number into digits."
  },
  "timeline": [
    {
      "why": {
        "he": "המחשב לא מבין Java ישירות. ה-JDK כולל את המהדר (`javac`), שמתרגם את הקוד לשפה של המכונה הווירטואלית, ואת ה-JVM שמריץ אותו. IntelliJ הוא רק העורך: הוא קורא ל-JDK בשבילכם כשלוחצים על המשולש. בלי JDK — IntelliJ לא יכול להריץ כלום.\n`println` מדפיס ויורד שורה, `print` מדפיס בלי לרדת שורה.",
        "ru": "Компьютер не понимает Java напрямую. В JDK есть компилятор (`javac`), который переводит код на язык виртуальной машины, и сама JVM, которая его запускает. IntelliJ — только редактор: когда жмёшь треугольник, он сам вызывает JDK. Без JDK IntelliJ ничего не запустит.\n`println` печатает и переходит на новую строку, `print` — печатает без перехода.",
        "en": "A computer does not understand Java directly. The JDK has the compiler (`javac`), which translates code for the virtual machine, and the JVM that runs it. IntelliJ is only the editor: when you press the triangle it calls the JDK for you. Without a JDK, IntelliJ cannot run anything.\n`println` prints and moves to a new line, `print` prints without moving."
      },
      "kind": "talk",
      "title": {
        "he": "סביבת העבודה: IntelliJ ו-JDK",
        "ru": "Рабочая среда: IntelliJ и JDK",
        "en": "The tools: IntelliJ and JDK"
      },
      "text": {
        "he": "JDK היא הפלטפורמה של Java, ו-IntelliJ IDEA היא התוכנה שבה כותבים ומריצים את הקוד. הגרסה החינמית (Community) מספיקה לכל הקורס.\nהתוכנית הראשונה מדפיסה טקסט. מריצים עם המשולש הירוק או `Shift+F10`.",
        "ru": "JDK — это платформа Java, а IntelliJ IDEA — программа, в которой пишут и запускают код. Бесплатной версии (Community) хватит на весь курс.\nПервая программа печатает текст. Запуск — зелёный треугольник или `Shift+F10`.",
        "en": "JDK is the Java platform, and IntelliJ IDEA is the program where you write and run code. The free Community version is enough for the whole course.\nThe first program prints text. Run it with the green triangle or `Shift+F10`."
      },
      "math": [
        "System.out.println(\"Hello World\");"
      ]
    },
    {
      "why": {
        "he": "`sout` זה קיצור של IntelliJ, לא של Java. המהדר לא מכיר את המילה `sout` — רק העורך מחליף אותה. במבחן על דף אין עורך, ולכן `sout` שם הוא פשוט שגיאה.",
        "ru": "`sout` — это сокращение IntelliJ, а не Java. Компилятор слова `sout` не знает, его подменяет только редактор. На бумажном экзамене редактора нет, поэтому `sout` там — просто ошибка.",
        "en": "`sout` is an IntelliJ shortcut, not Java. The compiler does not know the word `sout`; only the editor replaces it. On a paper exam there is no editor, so `sout` is simply a mistake."
      },
      "kind": "tip",
      "title": {
        "he": "במבחן כותבים את הפקודה במלואה",
        "ru": "На экзамене команду пишут полностью",
        "en": "Write the full command in the exam"
      },
      "text": {
        "he": "ב-IntelliJ אפשר להקליד `sout` ולקבל `System.out.println();`. אבל המבחן הוא על דף, ומי שכותב את הקיצור מאבד נקודות. התאמנו לכתוב `System.out.println(...)` בשלמותו.",
        "ru": "В IntelliJ можно набрать `sout` и получить `System.out.println();`. Но экзамен на бумаге, и за сокращение снимают баллы. Тренируйся писать `System.out.println(...)` целиком.",
        "en": "In IntelliJ you can type `sout` and get `System.out.println();`. But the exam is on paper, and writing the shortcut loses points. Practise writing `System.out.println(...)` in full."
      }
    },
    {
      "why": {
        "he": "הסדר כמו במתמטיקה, כי Java בנויה לחשב נוסחאות כמו שאנחנו כותבים אותן. אם רוצים סדר אחר — סוגריים: `(2 + 5) * 7 = 49`.\n`2 / 7` נותן 0, כי כששני המספרים `int`, גם התוצאה `int` והשבר נזרק (לא מעוגל!).",
        "ru": "Порядок как в математике, потому что Java сделана считать формулы так, как мы их пишем. Нужен другой порядок — ставь скобки: `(2 + 5) * 7 = 49`.\n`2 / 7` даёт 0, потому что оба числа `int`, значит и результат `int`, а дробь отбрасывается (не округляется!).",
        "en": "The order is the same as in math, because Java is built to compute formulas the way we write them. Want another order? Use brackets: `(2 + 5) * 7 = 49`.\n`2 / 7` gives 0 because both numbers are `int`, so the result is `int` and the fraction is dropped (not rounded!)."
      },
      "kind": "board",
      "title": {
        "he": "חשבון ב-Java וסדר פעולות",
        "ru": "Арифметика в Java и порядок действий",
        "en": "Arithmetic in Java and order of operations"
      },
      "text": {
        "he": "Java יודעת לחשב: `+`, `-`, `*` (כפל), `/` (חילוק). קודם כפל וחילוק, אחר כך חיבור וחיסור.\nבדוגמה הראשונה `2/7` נותן `0`, כי זה חילוק של שני מספרים שלמים.",
        "ru": "Java умеет считать: `+`, `-`, `*` (умножение), `/` (деление). Сначала умножение и деление, потом сложение и вычитание.\nВ первом примере `2/7` даёт `0`, потому что это деление двух целых чисел.",
        "en": "Java can calculate: `+`, `-`, `*` (multiply), `/` (divide). Multiplication and division first, then addition and subtraction.\nIn the first example `2/7` gives `0`, because it divides two whole numbers."
      },
      "math": [
        "System.out.println(2 + 5 * 7 - 2 / 7);   // 2 + 35 - 0 = 37",
        "System.out.println(2 + 3 * 4 - 8 / 2);   // 2 + 12 - 4 = 10"
      ]
    },
    {
      "why": {
        "he": "למה לכתוב סוג? כדי שהמחשב ידע כמה זיכרון לשמור ומה מותר לעשות עם הערך. Java בודקת את זה עוד לפני ההרצה ותופסת טעויות מוקדם.\nשימו לב: `'a'` (תו, `char`) ו-`\"a\"` (מחרוזת, `String`) הם שני דברים שונים — גרש אחד מול מירכאות.",
        "ru": "Зачем писать тип? Чтобы компьютер знал, сколько памяти отвести и что можно делать с этим значением. Java проверяет это ещё до запуска и ловит ошибки заранее.\nВнимание: `'a'` (символ, `char`) и `\"a\"` (строка, `String`) — разные вещи: одинарные кавычки против двойных.",
        "en": "Why write a type? So the computer knows how much memory to keep and what is allowed with the value. Java checks this before running and catches mistakes early.\nNote: `'a'` (a character, `char`) and `\"a\"` (a string, `String`) are different things: single quotes vs double quotes."
      },
      "kind": "talk",
      "title": {
        "he": "טיפוסי נתונים",
        "ru": "Типы данных",
        "en": "Data types"
      },
      "text": {
        "he": "לפני שם המשתנה כותבים את הטיפוס שלו, וכל פקודה נגמרת ב-`;`.\n`int` — מספר שלם (גם שלילי), בלי שברים.\n`double` — מספר עם נקודה עשרונית.\n`char` — תו אחד בגרש בודד: `'a'`.\n`boolean` — `true` או `false`.\n`String` — מחרוזת, רצף של תווים בגרשיים: `\"htf\"`.",
        "ru": "Перед именем переменной пишут её тип, а каждая команда заканчивается `;`.\n`int` — целое число (и отрицательное), без дробей.\n`double` — число с десятичной точкой.\n`char` — один символ в одинарных кавычках: `'a'`.\n`boolean` — `true` или `false`.\n`String` — строка, цепочка символов в двойных кавычках: `\"htf\"`.",
        "en": "Before the variable name you write its type, and every command ends with `;`.\n`int` — a whole number (negative too), no fractions.\n`double` — a number with a decimal point.\n`char` — one character in single quotes: `'a'`.\n`boolean` — `true` or `false`.\n`String` — a sequence of characters in double quotes: `\"htf\"`."
      },
      "math": [
        "int x = 6;",
        "int c = -6;",
        "double g = 0.5;",
        "char f = 'a';",
        "boolean b = true;",
        "String l = \"htf\";"
      ]
    },
    {
      "why": {
        "he": "למה שגיאה ולא פשוט לזרוק את השבר? כי אובדן מידע בשקט מסתיר באגים. Java מכריחה אתכם להחליט: או `double`, או להמיר במפורש `(int) 0.5` — ואז אתם יודעים שיצא 0.",
        "ru": "Почему ошибка, а не просто отбросить дробь? Потому что тихая потеря данных прячет баги. Java заставляет решить самому: или `double`, или явное приведение `(int) 0.5` — и тогда ты знаешь, что получится 0.",
        "en": "Why an error instead of just dropping the fraction? Because losing data silently hides bugs. Java makes you decide: either `double`, or an explicit `(int) 0.5` — and then you know you get 0."
      },
      "kind": "board",
      "title": {
        "he": "שגיאה: אי אפשר לשים 0.5 ב-int",
        "ru": "Ошибка: 0.5 нельзя положить в int",
        "en": "Error: 0.5 cannot go into an int"
      },
      "text": {
        "he": "הפקודה `int z = 0.5;` מסומנת באדום. Java לא זורקת את השבר בעצמה, ומדפיסה שגיאה:\n`incompatible types: possible lossy conversion from double to int`.\nלמספר עם נקודה משתמשים ב-`double`.",
        "ru": "Команда `int z = 0.5;` подчёркнута красным. Java сама не отбрасывает дробь и выдаёт ошибку:\n`incompatible types: possible lossy conversion from double to int`.\nДля числа с точкой нужен `double`.",
        "en": "The command `int z = 0.5;` is underlined in red. Java will not drop the fraction by itself and shows an error:\n`incompatible types: possible lossy conversion from double to int`.\nFor a number with a point use `double`."
      }
    },
    {
      "why": {
        "he": "`int` תופס 32 ביטים, ולכן יש לו גבול: מ-`−2147483648` עד `2147483647`. אם עוברים את הגבול — אין שגיאה! המספר \"מתגלגל\" לשלילי: `Integer.MAX_VALUE + 1` שווה ל-`Integer.MIN_VALUE`. לכן למספרים גדולים (למשל אוכלוסיית העולם) לוקחים `long`.",
        "ru": "`int` занимает 32 бита, поэтому у него есть предел: от `−2147483648` до `2147483647`. Если выйти за предел — ошибки не будет! Число «перекатится» в отрицательное: `Integer.MAX_VALUE + 1` равно `Integer.MIN_VALUE`. Поэтому для больших чисел (например, население Земли) берут `long`.",
        "en": "An `int` takes 32 bits, so it has a limit: from `−2147483648` to `2147483647`. Going past it gives no error! The number \"wraps around\" to negative: `Integer.MAX_VALUE + 1` equals `Integer.MIN_VALUE`. So for big numbers (like the world population) use `long`."
      },
      "kind": "talk",
      "title": {
        "he": "כמה גדול יכול להיות int",
        "ru": "Насколько большим может быть int",
        "en": "How big an int can be"
      },
      "text": {
        "he": "יש ארבעה טיפוסים של מספרים שלמים: `byte`, `short`, `int`, `long`. בקורס משתמשים בעיקר ב-`int`, וחשוב לדעת שהוא מוגבל. למספרים גדולים יותר יש `long`.",
        "ru": "Есть четыре типа целых чисел: `byte`, `short`, `int`, `long`. В курсе в основном используем `int`, и важно знать, что он ограничен. Для чисел побольше есть `long`.",
        "en": "There are four whole-number types: `byte`, `short`, `int`, `long`. The course mostly uses `int`, and it is important to know that it is limited. For bigger numbers there is `long`."
      },
      "math": [
        "System.out.println(Integer.MAX_VALUE);   // 2147483647"
      ]
    },
    {
      "why": {
        "he": "`=` זו פקודה: \"שים את הערך מימין במשתנה משמאל\". `==` זו שאלה: \"האם שווים?\", והתשובה היא `true` או `false`. בגלל ההבדל הזה Java לא תיתן לכתוב `if (x = 5)` — זה תופס טעות נפוצה מאוד.",
        "ru": "`=` — это команда: «положи значение справа в переменную слева». `==` — это вопрос: «равны ли?», и ответ `true` или `false`. Из-за этой разницы Java не даст написать `if (x = 5)` — так она ловит очень частую ошибку.",
        "en": "`=` is a command: \"put the value on the right into the variable on the left\". `==` is a question: \"are they equal?\", and the answer is `true` or `false`. Because of this, Java will not let you write `if (x = 5)` — it catches a very common mistake."
      },
      "kind": "board",
      "title": {
        "he": "השוואה: == נותן true או false",
        "ru": "Сравнение: == даёт true или false",
        "en": "Comparison: == gives true or false"
      },
      "text": {
        "he": "`=` אחד שם ערך במשתנה. `==` שואל \"האם שווה?\" ומחזיר `true` או `false`.",
        "ru": "Одно `=` кладёт значение в переменную. `==` спрашивает «равно ли?» и возвращает `true` или `false`.",
        "en": "One `=` puts a value into a variable. `==` asks \"is it equal?\" and returns `true` or `false`."
      },
      "math": [
        "int x = 5;",
        "int y = 10;",
        "System.out.println(x == 10);   // false",
        "System.out.println(x == y);    // false"
      ]
    },
    {
      "why": {
        "he": "המחשב שומר רק מספרים, ולכן לכל תו יש מספר בטבלה (Unicode): `'a'` = 97, `'A'` = 65, `'0'` = 48. האותיות ברצף, ולכן `'f' + 3` נותן את האות שבאה 3 מקומות אחרי — `'i'`.\nזהירות: עם משתנה (`char c = ch + 3;`) צריך המרה: `(char) (ch + 3)`.",
        "ru": "Компьютер хранит только числа, поэтому у каждого символа есть номер в таблице (Unicode): `'a'` = 97, `'A'` = 65, `'0'` = 48. Буквы идут подряд, поэтому `'f' + 3` даёт букву через 3 места — `'i'`.\nОсторожно: с переменной (`char c = ch + 3;`) нужно приведение: `(char) (ch + 3)`.",
        "en": "A computer stores only numbers, so every character has a number in a table (Unicode): `'a'` = 97, `'A'` = 65, `'0'` = 48. Letters come in a row, so `'f' + 3` is the letter 3 places later: `'i'`.\nCareful: with a variable (`char c = ch + 3;`) you need a cast: `(char) (ch + 3)`."
      },
      "kind": "board",
      "title": {
        "he": "לכל תו יש מספר",
        "ru": "У каждого символа есть номер",
        "en": "Every character has a number"
      },
      "text": {
        "he": "כשמחלקים שני `double`, התוצאה עשרונית. אם שמים תו ב-`double`, מקבלים את המספר שלו: `'f'` הוא 102. ו-`'f' + 3` הוא 105, כלומר האות `i`.",
        "ru": "При делении двух `double` результат дробный. Если положить символ в `double`, получим его номер: `'f'` — это 102. А `'f' + 3` — это 105, то есть буква `i`.",
        "en": "Dividing two `double` values gives a decimal result. Put a character into a `double` and you get its number: `'f'` is 102. And `'f' + 3` is 105, which is the letter `i`."
      },
      "math": [
        "double x = 5; double y = 10;",
        "System.out.println(x / y);   // 0.5",
        "double z = 'f';",
        "System.out.println(z);       // 102.0",
        "char c = 'f' + 3;",
        "System.out.println(c);       // i"
      ]
    },
    {
      "why": {
        "he": "קוד קוראים הרבה יותר פעמים ממה שכותבים אותו — גם אתם בעוד שבוע. שם טוב מסביר את עצמו בלי הערות. אסור: להתחיל בספרה, רווחים, מילים שמורות (`int`, `class`). `sum` ו-`Sum` — שני משתנים שונים.",
        "ru": "Код читают гораздо чаще, чем пишут, — и ты сам через неделю тоже. Хорошее имя объясняет себя без комментариев. Нельзя: начинать с цифры, пробелы, служебные слова (`int`, `class`). `sum` и `Sum` — две разные переменные.",
        "en": "Code is read much more often than it is written — by you too, a week later. A good name explains itself without comments. Not allowed: starting with a digit, spaces, reserved words (`int`, `class`). `sum` and `Sum` are two different variables."
      },
      "kind": "talk",
      "title": {
        "he": "שמות למשתנים",
        "ru": "Имена переменных",
        "en": "Variable names"
      },
      "text": {
        "he": "השם צריך להגיד מה יש במשתנה: `grade1`, `sum`, `mean` ולא סתם `x`.\nהשם הוא מילה אחת בלי רווחים, מתחיל באות, ו-Java מבדילה בין אותיות גדולות לקטנות.\nכשיש כמה מילים — camelCase: המילה הראשונה באות קטנה, וכל מילה הבאה מתחילה באות גדולה: `gradeOfMath`.",
        "ru": "Имя должно говорить, что лежит в переменной: `grade1`, `sum`, `mean`, а не просто `x`.\nИмя — одно слово без пробелов, начинается с буквы, и Java различает большие и маленькие буквы.\nЕсли слов несколько — camelCase: первое слово с маленькой буквы, каждое следующее с большой: `gradeOfMath`.",
        "en": "A name should say what the variable holds: `grade1`, `sum`, `mean` — not just `x`.\nA name is one word with no spaces, starts with a letter, and Java treats upper and lower case as different.\nFor several words use camelCase: the first word in lower case, each next word starting with a capital: `gradeOfMath`."
      }
    },
    {
      "why": {
        "he": "כאן יצא בדיוק 90, ולכן קשה לראות את הבעיה. נסו 82, 90, 97: הסכום 269, ו-`269 / 3` בשלמים נותן 89 במקום 89.67. ה-`3.0` הופך את החילוק לעשרוני, כי מספיק שאחד המספרים הוא `double`.",
        "ru": "Здесь вышло ровно 90, поэтому проблему трудно заметить. Попробуй 82, 90, 97: сумма 269, и `269 / 3` в целых даёт 89 вместо 89.67. `3.0` делает деление дробным, потому что достаточно, чтобы одно из чисел было `double`.",
        "en": "Here the result is exactly 90, so the problem is hard to see. Try 82, 90, 97: the sum is 269, and `269 / 3` in integers gives 89 instead of 89.67. The `3.0` makes the division decimal, because it is enough for one number to be `double`."
      },
      "kind": "board",
      "title": {
        "he": "ממוצע של שלושה ציונים",
        "ru": "Среднее трёх оценок",
        "en": "The average of three grades"
      },
      "text": {
        "he": "שלושה סטודנטים קיבלו ציונים. הציונים הם `int`, אבל הממוצע צריך להיות `double`: גם ממוצע של מספרים שלמים יכול לצאת עם שבר.\nאם מחלקים ב-`3`, זה חילוק בשלמים (IntelliJ מסמן אזהרה צהובה). לכן מחלקים ב-`3.0`.",
        "ru": "Трое студентов получили оценки. Оценки — `int`, а среднее должно быть `double`: даже среднее целых чисел может выйти дробным.\nЕсли делить на `3`, это целочисленное деление (IntelliJ показывает жёлтое предупреждение). Поэтому делим на `3.0`.",
        "en": "Three students got grades. The grades are `int`, but the average must be `double`: even the average of whole numbers can have a fraction.\nDividing by `3` is integer division (IntelliJ shows a yellow warning). So divide by `3.0`."
      },
      "math": [
        "int gread1 = 82;",
        "int gread2 = 90;",
        "int gread3 = 98;",
        "int sum = gread1 + gread2 + gread3;   // 270",
        "double mean = (gread1 + gread2 + gread3) / 3.0;   // 90.0"
      ]
    },
    {
      "why": {
        "he": "מ-`int` ל-`double` לא מאבדים כלום, ולכן Java עושה את זה לבד. בכיוון ההפוך מאבדים את השבר, ולכן צריך לכתוב במפורש: `(int) 4.9` נותן 4 (חותך, לא מעגל).\nה-`(double)` פועל רק על הערך שמיד אחריו.",
        "ru": "Из `int` в `double` ничего не теряется, поэтому Java делает это сама. В обратную сторону теряется дробь, поэтому надо писать явно: `(int) 4.9` даёт 4 (отрезает, а не округляет).\n`(double)` действует только на значение сразу после него.",
        "en": "From `int` to `double` nothing is lost, so Java does it alone. The other way the fraction is lost, so you must write it: `(int) 4.9` gives 4 (it cuts, it does not round).\nThe `(double)` acts only on the value right after it."
      },
      "kind": "talk",
      "title": {
        "he": "המרת טיפוס (casting)",
        "ru": "Приведение типа (casting)",
        "en": "Casting"
      },
      "text": {
        "he": "מ-`int` ל-`double` Java ממירה לבד: `int x = 3; double y = 2 * x;` נותן `6.0`.\nכשמחלקים שני שלמים, `17 / 4` נותן `4`. כדי לקבל `4.25` כותבים לפני המספר את הטיפוס בסוגריים: `(double)`.",
        "ru": "Из `int` в `double` Java переводит сама: `int x = 3; double y = 2 * x;` даёт `6.0`.\nПри делении двух целых `17 / 4` даёт `4`. Чтобы получить `4.25`, перед числом пишут тип в скобках: `(double)`.",
        "en": "From `int` to `double` Java converts by itself: `int x = 3; double y = 2 * x;` gives `6.0`.\nDividing two whole numbers, `17 / 4` gives `4`. To get `4.25`, write the type in brackets before the number: `(double)`."
      },
      "math": [
        "int x = 17;",
        "System.out.println(x / 4);            // 4",
        "System.out.println((double) x / 4);   // 4.25"
      ]
    },
    {
      "why": {
        "he": "Java מחשבת קודם את מה שבסוגריים. ב-`(double) (sum / count)` החילוק כבר נעשה בשלמים והשבר כבר אבד — ה-`double` מגיע מאוחר מדי. ב-`(double) sum / count` קודם `sum` הופך ל-`double`, ורק אז מחלקים.",
        "ru": "Java сначала считает то, что в скобках. В `(double) (sum / count)` деление уже прошло в целых, и дробь уже потеряна — `double` приходит слишком поздно. В `(double) sum / count` сначала `sum` становится `double`, и только потом делим.",
        "en": "Java computes the brackets first. In `(double) (sum / count)` the division is already done in integers and the fraction is gone — the `double` comes too late. In `(double) sum / count` first `sum` becomes `double`, and only then we divide."
      },
      "kind": "tip",
      "title": {
        "he": "טעות נפוצה: הסוגריים במקום הלא נכון",
        "ru": "Частая ошибка: скобки не там",
        "en": "Common mistake: brackets in the wrong place"
      },
      "text": {
        "he": "`(double) (sum / count)` לא עוזר: מה שבתוך הסוגריים מחושב קודם, כחילוק בשלמים, והשבר כבר נזרק. רק אחר כך התוצאה הופכת ל-`double`. כותבים `(double) sum / count`.",
        "ru": "`(double) (sum / count)` не помогает: сначала считается то, что в скобках, как целочисленное деление, и дробь уже потеряна. Только потом результат становится `double`. Пиши `(double) sum / count`.",
        "en": "`(double) (sum / count)` does not help: what is inside the brackets is calculated first, as integer division, and the fraction is already lost. Only then does the result become `double`. Write `(double) sum / count`."
      },
      "math": [
        "(double) (17 / 4)   →   4.0",
        "(double) 17 / 4     →   4.25"
      ]
    },
    {
      "why": {
        "he": "`%` עונה על \"מה נשאר?\". בגלל זה הוא שימושי לזוגי/אי-זוגי, להתחלקות, לספרה האחרונה ולמחזורים (שעון: `hour % 12`).\nבאוטובוסים: אם `97 % 40` לא 0, צריך עוד אוטובוס — 3 ולא 2.\nזהירות: ב-Java `-7 % 2` שווה `-1`, ולכן לבדיקת אי-זוגי כתבו `x % 2 != 0` ולא `x % 2 == 1`.",
        "ru": "`%` отвечает на вопрос «что осталось?». Поэтому он нужен для чётности, делимости, последней цифры и циклов (часы: `hour % 12`).\nС автобусами: если `97 % 40` не 0, нужен ещё один автобус — 3, а не 2.\nОсторожно: в Java `-7 % 2` равно `-1`, поэтому нечётность проверяй так: `x % 2 != 0`, а не `x % 2 == 1`.",
        "en": "`%` answers \"what is left?\". That is why it is useful for even/odd, divisibility, the last digit and cycles (a clock: `hour % 12`).\nWith the buses: if `97 % 40` is not 0, you need one more bus — 3, not 2.\nCareful: in Java `-7 % 2` is `-1`, so check odd with `x % 2 != 0`, not `x % 2 == 1`."
      },
      "kind": "board",
      "title": {
        "he": "שארית החלוקה: %",
        "ru": "Остаток от деления: %",
        "en": "The remainder: %"
      },
      "text": {
        "he": "`%` (מודולו) נותן את השארית של חילוק בשלמים.\nדוגמה מהשיעור: באוטובוס יש מקום ל-40 ילדים, ויש 97 ילדים. `97 / 40 = 2` אוטובוסים מלאים, ו-`97 % 40 = 17` ילדים נשארים — צריך עוד אוטובוס.\nמספר זוגי: `x % 2 == 0`. מתחלק ב-7: `x % 7 == 0`.\nספרת האחדות: `% 10`.",
        "ru": "`%` (модуло) даёт остаток от целочисленного деления.\nПример с урока: в автобус помещается 40 детей, а детей 97. `97 / 40 = 2` полных автобуса, и `97 % 40 = 17` детей остаются — нужен ещё автобус.\nЧётное число: `x % 2 == 0`. Делится на 7: `x % 7 == 0`.\nЦифра единиц: `% 10`.",
        "en": "`%` (modulo) gives the remainder of integer division.\nExample from the lesson: a bus holds 40 children and there are 97 children. `97 / 40 = 2` full buses, and `97 % 40 = 17` children are left — one more bus is needed.\nEven number: `x % 2 == 0`. Divisible by 7: `x % 7 == 0`.\nThe units digit: `% 10`."
      },
      "math": [
        "int x = 48; int y = 8;",
        "System.out.println(x % y);      // 0",
        "System.out.println(x % 2);      // 0  → even",
        "System.out.println(149 % 10);   // 9",
        "System.out.println(149 % 100);  // 49"
      ]
    },
    {
      "why": {
        "he": "`x + 5` רק מחשב ערך, אבל לא שומר אותו בשום מקום — כמו לחשב בראש ולשכוח. `=` אומר: \"חשב את הצד הימני ושים בשמאלי\". לכן `x = x + 5` זה לא משוואה מתמטית, אלא פקודה: הערך החדש = הישן + 5.",
        "ru": "`x + 5` только считает значение, но никуда его не сохраняет — как посчитать в уме и забыть. `=` говорит: «посчитай правую часть и положи в левую». Поэтому `x = x + 5` — это не уравнение из математики, а команда: новое значение = старое + 5.",
        "en": "`x + 5` only computes a value, but stores it nowhere — like counting in your head and forgetting. `=` says: \"compute the right side and put it into the left\". So `x = x + 5` is not a math equation but a command: new value = old value + 5."
      },
      "kind": "talk",
      "title": {
        "he": "לשנות את המשתנה עצמו",
        "ru": "Изменить саму переменную",
        "en": "Changing the variable itself"
      },
      "text": {
        "he": "השורה `x + 5;` לבדה לא משנה את x (ו-Java מסמנת אותה כשגיאה). כדי לשנות שומרים את התוצאה: `x = x + 5;` או בקיצור `x += 5;`.\nבאותה דרך: `-=`, `*=`, `/=`, `%=`.",
        "ru": "Строка `x + 5;` сама по себе x не меняет (и Java отмечает её как ошибку). Чтобы изменить, сохраняем результат: `x = x + 5;` или короче `x += 5;`.\nТак же работают `-=`, `*=`, `/=`, `%=`.",
        "en": "The line `x + 5;` alone does not change x (and Java marks it as an error). To change it, store the result: `x = x + 5;` or shorter `x += 5;`.\nThe same way: `-=`, `*=`, `/=`, `%=`."
      },
      "math": [
        "int x = 48;",
        "x += 5;   // 53",
        "x %= 5;   // 48 % 5 = 3  (starting again from 48)",
        "x /= 5;   // 48 / 5 = 9  (starting again from 48)"
      ]
    },
    {
      "why": {
        "he": "`x++` נותן קודם את הערך הישן ורק אחר כך מגדיל; `++x` קודם מגדיל. בתוך `println` קל להתבלבל, ולכן העצה: פעולה אחת בשורה — `x++;` לבד, ואז `println(x)`. במבחן לדוגמה יש בדיוק שאלה כזאת על `x++` ו-`++x`.",
        "ru": "`x++` сначала отдаёт старое значение и только потом увеличивает; `++x` сначала увеличивает. Внутри `println` легко запутаться, поэтому совет: одно действие в строке — `x++;` отдельно, потом `println(x)`. В пробном экзамене есть ровно такой вопрос про `x++` и `++x`.",
        "en": "`x++` first gives the old value and only then adds 1; `++x` adds first. Inside `println` it is easy to get confused, so the advice is: one action per line — `x++;` alone, then `println(x)`. The sample exam has exactly this question about `x++` and `++x`."
      },
      "kind": "tip",
      "title": {
        "he": "++ ו-- : הגדלה והקטנה ב-1",
        "ru": "++ и --: плюс и минус 1",
        "en": "++ and --: add or subtract 1"
      },
      "text": {
        "he": "`x++` מגדיל את x ב-1, ו-`x--` מקטין ב-1. ב-Python אין דבר כזה.\n`println(x++)` מדפיס את הערך הישן ורק אחר כך מגדיל; `println(++x)` קודם מגדיל ואז מדפיס. המרצה המליץ לא לשים `++` בתוך `println`, אלא לכתוב `x++;` בשורה נפרדת.",
        "ru": "`x++` увеличивает x на 1, а `x--` уменьшает на 1. В Python такого нет.\n`println(x++)` печатает старое значение и только потом увеличивает; `println(++x)` сначала увеличивает, потом печатает. Преподаватель советовал не ставить `++` внутрь `println`, а писать `x++;` отдельной строкой.",
        "en": "`x++` adds 1 to x, and `x--` subtracts 1. Python has nothing like it.\n`println(x++)` prints the old value and only then adds 1; `println(++x)` adds first and then prints. The teacher recommended not putting `++` inside `println` — write `x++;` on its own line."
      }
    },
    {
      "why": {
        "he": "תוצאה של השוואה היא ערך כמו כל ערך אחר, ואפשר לשמור אותה. זה נוח כשבודקים אותו תנאי כמה פעמים, ושם טוב (`isEven`) הופך את ה-`if` לקריא: `if (isEven)`.",
        "ru": "Результат сравнения — такое же значение, как любое другое, и его можно сохранить. Это удобно, когда одно условие проверяют несколько раз, а хорошее имя (`isEven`) делает `if` понятным: `if (isEven)`.",
        "en": "The result of a comparison is a value like any other, and you can store it. This is handy when you check the same condition several times, and a good name (`isEven`) makes the `if` readable: `if (isEven)`."
      },
      "kind": "board",
      "title": {
        "he": "ביטויים בוליאניים",
        "ru": "Логические выражения",
        "en": "Boolean expressions"
      },
      "text": {
        "he": "השוואה אפשר לשמור במשתנה `boolean`. עם `x = 48`:",
        "ru": "Результат сравнения можно сохранить в переменную `boolean`. При `x = 48`:",
        "en": "A comparison can be stored in a `boolean` variable. With `x = 48`:"
      },
      "math": [
        "boolean b = x >= 50;   // false",
        "x != 50                // true",
        "x % 2 == 0             // true  (even)",
        "x % 10 > 5             // true  (8 > 5)"
      ]
    },
    {
      "why": {
        "he": "למה זה עובד? בשיטה העשרונית כל מקום שווה פי 10 מהמקום שמימינו: `736 = 7 × 100 + 3 × 10 + 6`. חילוק ב-10 \"מזיז\" את המספר מקום אחד ימינה (6 נופל), והשארית היא בדיוק הספרה שנפלה.\nאותו רעיון בדיוק כמו המרה לבינארי במבוא למחשב — שם מחלקים ב-2.",
        "ru": "Почему это работает? В десятичной системе каждое место в 10 раз больше места справа: `736 = 7 × 100 + 3 × 10 + 6`. Деление на 10 «сдвигает» число на одно место вправо (6 выпадает), а остаток — это ровно выпавшая цифра.\nТа же идея, что и перевод в двоичную систему на מבוא למחשב — там делят на 2.",
        "en": "Why does it work? In the decimal system each place is 10 times the place on its right: `736 = 7 × 100 + 3 × 10 + 6`. Dividing by 10 \"shifts\" the number one place right (the 6 falls off), and the remainder is exactly the digit that fell.\nThe same idea as converting to binary in Intro to Computers — there we divide by 2."
      },
      "kind": "board",
      "title": {
        "he": "פירוק מספר לספרות: 736",
        "ru": "Разбор числа на цифры: 736",
        "en": "Splitting a number into digits: 736"
      },
      "text": {
        "he": "המשימה העיקרית של השיעור. `% 10` נותן את הספרה האחרונה, ו-`/ 10` מוחק אותה. הכלל: מודולו מוחק את הספרות הגדולות, וחילוק — את הקטנות.",
        "ru": "Главная задача урока. `% 10` даёт последнюю цифру, а `/ 10` её стирает. Правило: модуло стирает старшие цифры, а деление — младшие.",
        "en": "The main task of the lesson. `% 10` gives the last digit, and `/ 10` removes it. The rule: modulo removes the big digits, division removes the small ones."
      },
      "math": [
        "int number = 736;",
        "int r = number % 10;          // 6",
        "r = number % 100;  r = r / 10;   // 36 → 3",
        "",
        "int sumDigit = 0;",
        "sumDigit += number % 10;  number /= 10;   // 6,  number = 73",
        "sumDigit += number % 10;  number /= 10;   // 9,  number = 7",
        "sumDigit += number;                       // 16"
      ]
    },
    {
      "why": {
        "he": "למה לתרגל לבד? במבחן יש \"טבלת מעקב\": צריך לדעת מה יודפס בלי להריץ. התרגיל הכי טוב: קודם לנחש את הפלט, אחר כך להריץ ולבדוק. כל פעם שהניחוש לא נכון — למדתם משהו.",
        "ru": "Зачем тренироваться самому? На экзамене есть «таблица отслеживания»: надо знать, что напечатается, без запуска. Лучшая тренировка: сначала угадай вывод, потом запусти и проверь. Каждый раз, когда не угадал, — ты чему-то научился.",
        "en": "Why practise alone? The exam has a \"tracing table\": you must know what is printed without running. The best practice: guess the output first, then run and check. Every wrong guess teaches you something."
      },
      "kind": "talk",
      "title": {
        "he": "דף התרגול",
        "ru": "Лист упражнений",
        "en": "The practice sheet"
      },
      "text": {
        "he": "בסוף פתרו בכיתה תרגילים 21–24: ספרת האחדות, הספרות של 482, סכום הספרות של 621 (= 9) וספרת המאות של 905. שיעורי בית לא היו. לתרגול יש באתר הקורס את הדף \"תרגול סוגי משתנים\": בחלקים א–ג פשוט מקלידים את הקוד ובודקים מה יוצא.",
        "ru": "В конце в классе решали упражнения 21–24: цифра единиц, цифры числа 482, сумма цифр 621 (= 9) и цифра сотен 905. Домашнего задания не было. Для практики на сайте курса есть лист «תרגול סוגי משתנים»: в частях א–ג просто набираешь код и смотришь, что выйдет.",
        "en": "At the end the class solved exercises 21–24: the units digit, the digits of 482, the digit sum of 621 (= 9) and the hundreds digit of 905. There was no homework. For practice, the course site has the sheet \"תרגול סוגי משתנים\": in parts א–ג you just type the code and see what comes out."
      }
    },
    {
      "why": {
        "he": "Java לא מעגלת, אלא חותכת לכיוון 0. לכן גם `7 / 2` נותן 3 (לא 4), ו-`-7 / 2` נותן `-3` (לא `-4`). אם צריך עיגול אמיתי, לומדים בהמשך את `Math.round`.",
        "ru": "Java не округляет, а отрезает в сторону нуля. Поэтому `7 / 2` даёт 3 (не 4), а `-7 / 2` даёт `-3` (не `-4`). Если нужно настоящее округление, позже будет `Math.round`.",
        "en": "Java does not round, it cuts toward zero. So `7 / 2` gives 3 (not 4), and `-7 / 2` gives `-3` (not `-4`). If you need real rounding, `Math.round` comes later."
      },
      "kind": "faq",
      "q": {
        "he": "למה `7 / 2` נותן 3 ולא 3.5?",
        "ru": "Почему `7 / 2` даёт 3, а не 3.5?",
        "en": "Why does `7 / 2` give 3 and not 3.5?"
      },
      "a": {
        "he": "כששני המספרים `int`, גם התוצאה `int`, והשבר פשוט נזרק (לא מעוגל). מספיק שאחד מהם יהיה `double`: `7 / 2.0` או `(double) 7 / 2` נותנים `3.5`.",
        "ru": "Если оба числа `int`, результат тоже `int`, и дробь просто отбрасывается (не округляется). Достаточно, чтобы одно из них было `double`: `7 / 2.0` или `(double) 7 / 2` дают `3.5`.",
        "en": "When both numbers are `int`, the result is `int` too, and the fraction is simply dropped (not rounded). It is enough for one of them to be `double`: `7 / 2.0` or `(double) 7 / 2` gives `3.5`."
      }
    },
    {
      "kind": "talk",
      "title": {
        "he": "מהמצגת: איך תוכנית Java רצה",
        "ru": "Из презентации: как запускается программа на Java",
        "en": "From the slides: how a Java program runs"
      },
      "text": {
        "he": "1. כותבים קוד בקובץ `Main.java`.\n2. המהדר (`javac`) הופך אותו ל-Bytecode — קובץ `Main.class`.\n3. ה-JVM (המכונה הווירטואלית) מריץ את ה-Bytecode על כל מערכת: Windows, Linux, Mac.\nשלושה שמות: JDK — ערכת הפיתוח (מהדר + כל השאר), JRE — סביבת הריצה, JVM — הלב שמריץ. המוטו של Java: Write Once, Run Anywhere.",
        "ru": "1. Пишем код в файле `Main.java`.\n2. Компилятор (`javac`) превращает его в Bytecode — файл `Main.class`.\n3. JVM (виртуальная машина) запускает Bytecode на любой системе: Windows, Linux, Mac.\nТри названия: JDK — набор разработчика (компилятор и всё остальное), JRE — среда запуска, JVM — «сердце», которое выполняет. Девиз Java: Write Once, Run Anywhere («написал один раз — работает везде»).",
        "en": "1. You write code in `Main.java`.\n2. The compiler (`javac`) turns it into Bytecode — the file `Main.class`.\n3. The JVM (virtual machine) runs the Bytecode on any system: Windows, Linux, Mac.\nThree names: JDK — the development kit (compiler and the rest), JRE — the runtime, JVM — the heart that runs it. The Java motto: Write Once, Run Anywhere."
      },
      "why": {
        "he": "למה שלב ביניים? אם Java הייתה מתורגמת ישר לשפה של Windows, היה צריך לתרגם מחדש ל-Mac ול-Linux. ה-Bytecode הוא \"שפה משותפת\", ולכל מערכת יש JVM משלה שמבין אותה. לכן אותו קובץ `.class` רץ בכל מקום. בתיקיית `out` של IntelliJ אפשר לראות את קבצי ה-`.class`.",
        "ru": "Зачем промежуточный шаг? Если бы Java переводили сразу на язык Windows, для Mac и Linux пришлось бы переводить заново. Bytecode — «общий язык», а у каждой системы своя JVM, которая его понимает. Поэтому один и тот же файл `.class` работает везде. В папке `out` в IntelliJ можно увидеть эти файлы `.class`.",
        "en": "Why a middle step? If Java were translated straight into Windows language, you would have to translate again for Mac and Linux. Bytecode is a \"shared language\", and each system has its own JVM that understands it. So the same `.class` file runs everywhere. You can see the `.class` files in IntelliJ's `out` folder."
      },
      "_src": "pass-0311"
    },
    {
      "kind": "tip",
      "title": {
        "he": "מהמצגת: הדיבאגר (Debugger)",
        "ru": "Из презентации: отладчик (Debugger)",
        "en": "From the slides: the Debugger"
      },
      "text": {
        "he": "לוחצים ליד מספר השורה — מופיעה נקודה אדומה (Breakpoint). מריצים עם החיפושית במקום המשולש. התוכנית נעצרת בשורה הזאת, ורואים את הערך של כל משתנה.\n`F8` (Step Over) — שורה אחת קדימה.\n`F7` (Step Into) — להיכנס לתוך פעולה.",
        "ru": "Щёлкни рядом с номером строки — появится красная точка (Breakpoint). Запусти «жучком» вместо треугольника. Программа остановится на этой строке, и видно значение каждой переменной.\n`F8` (Step Over) — на одну строку вперёд.\n`F7` (Step Into) — зайти внутрь метода.",
        "en": "Click next to a line number — a red dot appears (a Breakpoint). Run with the bug icon instead of the triangle. The program stops on that line and you see every variable's value.\n`F8` (Step Over) — one line forward.\n`F7` (Step Into) — step into a method."
      },
      "why": {
        "he": "זו אותה טבלת מעקב שעושים ביד, רק שהמחשב ממלא אותה. כשהתוכנית נותנת תשובה לא נכונה (שגיאה לוגית), עוברים עם F8 שורה אחרי שורה ומחפשים את המקום שבו משתנה קיבל ערך לא צפוי.",
        "ru": "Это та же таблица отслеживания, что делают руками, только заполняет её компьютер. Когда программа даёт неверный ответ (логическая ошибка), идёшь по F8 строка за строкой и ищешь место, где переменная получила неожиданное значение.",
        "en": "It is the same tracing table you do by hand, only the computer fills it in. When a program gives a wrong answer (a logic error), step with F8 line by line and look for where a variable got an unexpected value."
      },
      "_src": "pass-0311"
    },
    {
      "kind": "board",
      "title": {
        "he": "מהמצגת: כל 8 הטיפוסים הפרימיטיביים",
        "ru": "Из презентации: все 8 простых типов",
        "en": "From the slides: all 8 primitive types"
      },
      "text": {
        "he": "בשיעור השתמשנו בעיקר ב-`int`, `double`, `char`, `boolean`. אלה כל השמונה. `String` הוא לא פרימיטיבי — הוא טיפוס ייחוס (נלמד בהמשך).\nמספר עשרוני ב-Java הוא `double` כברירת מחדל. בשביל `float` מוסיפים `f`: `10.5f`. בשביל `long` גדול מוסיפים `L`.",
        "ru": "На уроке мы в основном брали `int`, `double`, `char`, `boolean`. Вот все восемь. `String` — не простой тип, а ссылочный (будет позже).\nДробное число в Java по умолчанию `double`. Для `float` добавляют `f`: `10.5f`. Для большого `long` — `L`.",
        "en": "In class we mostly used `int`, `double`, `char`, `boolean`. Here are all eight. `String` is not primitive — it is a reference type (later).\nA decimal number in Java is `double` by default. For `float` add `f`: `10.5f`. For a big `long` add `L`."
      },
      "math": [
        "byte    1 byte   -128 … 127",
        "short   2 bytes  -32768 … 32767",
        "int     4 bytes  ≈ ±2.1 billion",
        "long    8 bytes  ≈ ±9.2 × 10¹⁸",
        "float   4 bytes  6–7 digits",
        "double  8 bytes  ≈ 15 digits",
        "char    2 bytes  one character (Unicode)",
        "boolean          true / false"
      ],
      "why": {
        "he": "למה כל כך הרבה? כל טיפוס הוא פשרה בין זיכרון לטווח. בתוכניות שלנו `int` ו-`double` מספיקים כמעט תמיד. `long` צריך כשמספרים עוברים 2 מיליארד (למשל אוכלוסיית העולם). `float` חוסך זיכרון, אבל פחות מדויק — לכן ברירת המחדל היא `double`.",
        "ru": "Зачем столько? Каждый тип — компромисс между памятью и диапазоном. В наших программах почти всегда хватает `int` и `double`. `long` нужен, когда числа больше 2 миллиардов (например, население Земли). `float` экономит память, но менее точный, поэтому по умолчанию `double`.",
        "en": "Why so many? Each type trades memory for range. In our programs `int` and `double` are almost always enough. `long` is needed when numbers pass 2 billion (like the world population). `float` saves memory but is less precise, so the default is `double`."
      },
      "_src": "pass-0311"
    },
    {
      "kind": "board",
      "title": {
        "he": "מהמצגת: הכרזה, אתחול והיקף (Scope)",
        "ru": "Из презентации: объявление, инициализация и область видимости (Scope)",
        "en": "From the slides: declaration, initialization and scope"
      },
      "text": {
        "he": "הכרזה — רק טיפוס ושם: `int count;`\nאתחול — ערך ראשון: `count = 0;`\nביחד: `int count = 0;`\nהיקף: משתנה שהוגדר בתוך `{ }` קיים רק בתוך הסוגריים האלה. מחוץ להם הוא \"לא קיים\".",
        "ru": "Объявление — только тип и имя: `int count;`\nИнициализация — первое значение: `count = 0;`\nВместе: `int count = 0;`\nОбласть видимости: переменная, объявленная внутри `{ }`, существует только внутри этих скобок. Снаружи её «нет».",
        "en": "Declaration — just a type and a name: `int count;`\nInitialization — a first value: `count = 0;`\nTogether: `int count = 0;`\nScope: a variable declared inside `{ }` exists only inside those braces. Outside, it \"does not exist\"."
      },
      "math": [
        "int count;        // declaration",
        "count = 0;        // initialization",
        "int total = 0;    // both"
      ],
      "why": {
        "he": "למה זה חשוב? Java לא נותנת להשתמש במשתנה בלי ערך: `int x; System.out.println(x);` היא שגיאה (`variable x might not have been initialized`). והיקף מסביר שגיאה נפוצה בלולאות: משתנה שהוגדר בתוך הלולאה לא קיים אחריה — לכן `sum` מגדירים לפני הלולאה.",
        "ru": "Почему это важно? Java не даёт пользоваться переменной без значения: `int x; System.out.println(x);` — ошибка (`variable x might not have been initialized`). А область видимости объясняет частую ошибку в циклах: переменная, объявленная внутри цикла, после него не существует, поэтому `sum` объявляют до цикла.",
        "en": "Why does it matter? Java will not let you use a variable with no value: `int x; System.out.println(x);` is an error (`variable x might not have been initialized`). And scope explains a common loop mistake: a variable declared inside a loop does not exist after it — that is why `sum` is declared before the loop."
      },
      "_src": "pass-0311"
    },
    {
      "kind": "board",
      "title": {
        "he": "מהמצגת: `a++` מול `++a` בתוך השמה",
        "ru": "Из презентации: `a++` и `++a` внутри присваивания",
        "en": "From the slides: `a++` vs `++a` inside an assignment"
      },
      "text": {
        "he": "לבד בשורה אין הבדל. ההבדל מופיע כשמשתמשים בערך באותה שורה:\n`a++` — קודם נותנים את הערך הישן, אחר כך מגדילים.\n`++a` — קודם מגדילים, אחר כך נותנים.",
        "ru": "Отдельной строкой разницы нет. Разница появляется, когда значение используют в той же строке:\n`a++` — сначала отдаёт старое значение, потом увеличивает.\n`++a` — сначала увеличивает, потом отдаёт.",
        "en": "On its own line there is no difference. The difference appears when the value is used on the same line:\n`a++` gives the old value first, then adds 1.\n`++a` adds 1 first, then gives the value."
      },
      "math": [
        "int a = 5;",
        "int b = a++;   // b = 5, a = 6",
        "int c = 5;",
        "int d = ++c;   // d = 6, c = 6"
      ],
      "why": {
        "he": "איך לזכור: קוראים משמאל לימין. ב-`a++` ה-`a` בא קודם — לכן קודם לוקחים אותו. ב-`++a` ה-`++` בא קודם — לכן קודם מגדילים. זו שאלה אהובה במבחנים (גם במבחן לדוגמה 2026).",
        "ru": "Как запомнить: читаем слева направо. В `a++` сначала стоит `a` — значит, сначала его берут. В `++a` сначала стоит `++` — значит, сначала увеличивают. Это любимый вопрос на экзаменах (есть и в пробном экзамене 2026).",
        "en": "How to remember: read left to right. In `a++` the `a` comes first — so it is taken first. In `++a` the `++` comes first — so it adds first. A favourite exam question (it is in the 2026 sample exam too)."
      },
      "_src": "pass-0311"
    },
    {
      "kind": "board",
      "title": {
        "he": "מהמצגת: שרשור מחרוזות עם `+`",
        "ru": "Из презентации: склейка строк через `+`",
        "en": "From the slides: joining strings with `+`"
      },
      "text": {
        "he": "אם אחד הצדדים של `+` הוא `String`, השני הופך לטקסט, והם מודבקים. Java קוראת משמאל לימין, ולכן הסדר משנה:",
        "ru": "Если с одной стороны `+` стоит `String`, вторая сторона превращается в текст, и они склеиваются. Java читает слева направо, поэтому порядок важен:",
        "en": "If one side of `+` is a `String`, the other side becomes text and they are joined. Java reads left to right, so the order matters:"
      },
      "math": [
        "\"Java\" + 101           →  \"Java101\"",
        "10 + 20 + \" is the sum\" →  \"30 is the sum\"",
        "\"Java\" + 10 + 20       →  \"Java1020\"",
        "\"Java\" + (10 + 20)     →  \"Java30\""
      ],
      "why": {
        "he": "ב-`10 + 20 + \" is the sum\"` שני הראשונים הם מספרים, ולכן קודם מחשבים 30, ורק אחר כך מדביקים טקסט. ב-`\"Java\" + 10` כבר יש טקסט, ומשם הכול טקסט. רוצים חשבון בתוך הדפסה — שמים סוגריים.",
        "ru": "В `10 + 20 + \" is the sum\"` первые два — числа, поэтому сначала считается 30 и только потом приклеивается текст. В `\"Java\" + 10` текст уже есть, и дальше всё становится текстом. Хочешь посчитать внутри печати — ставь скобки.",
        "en": "In `10 + 20 + \" is the sum\"` the first two are numbers, so 30 is computed first and only then text is joined. In `\"Java\" + 10` there is already text, and from there everything is text. Want arithmetic inside a print? Use brackets."
      },
      "_src": "pass-0311"
    },
    {
      "kind": "tip",
      "title": {
        "he": "מחומרי הקורס: עיגול עם `(int)(x + 0.5)`",
        "ru": "Из материалов курса: округление через `(int)(x + 0.5)`",
        "en": "From the course files: rounding with `(int)(x + 0.5)`"
      },
      "text": {
        "he": "`(int)` לא מעגל — הוא חותך את השבר. כדי לעגל למספר השלם הקרוב, מוסיפים קודם 0.5:",
        "ru": "`(int)` не округляет, а отрезает дробь. Чтобы округлить до ближайшего целого, сначала прибавляют 0.5:",
        "en": "`(int)` does not round — it cuts off the fraction. To round to the nearest whole number, add 0.5 first:"
      },
      "math": [
        "(int) (3.25 + 0.5)  →  (int) 3.75  →  3",
        "(int) (3.55 + 0.5)  →  (int) 4.05  →  4",
        "(int) (3.14159 × 10 + 0.5) / 10.0  →  3.1"
      ],
      "why": {
        "he": "למה זה עובד? אם השבר קטן מ-0.5, גם אחרי ההוספה לא מגיעים לשלם הבא, והחיתוך מוריד למטה. אם השבר 0.5 ומעלה, ההוספה עוברת לשלם הבא. לספרה אחת אחרי הנקודה — מכפילים ב-10, מעגלים ומחלקים ב-10.0. (הטריק מתאים למספרים חיוביים.)",
        "ru": "Почему это работает? Если дробь меньше 0.5, то и после прибавления до следующего целого не дотянем, и отрезание даст число вниз. Если дробь 0.5 и больше, прибавление переходит к следующему целому. Для одной цифры после точки умножаем на 10, округляем и делим на 10.0. (Приём подходит для положительных чисел.)",
        "en": "Why does it work? If the fraction is under 0.5, adding 0.5 still does not reach the next whole number, and cutting goes down. If it is 0.5 or more, the addition crosses to the next whole number. For one decimal place, multiply by 10, round and divide by 10.0. (The trick is for positive numbers.)"
      },
      "_src": "pass-0311"
    },
    {
      "kind": "talk",
      "title": {
        "he": "מחומרי הקורס: שלושה סוגי שגיאות",
        "ru": "Из материалов курса: три вида ошибок",
        "en": "From the course files: three kinds of errors"
      },
      "text": {
        "he": "שגיאת תחביר (Syntax) — טעות בכתיבה, למשל חסר `;`. IntelliJ מסמן באדום, והתוכנית לא רצה.\nשגיאת זמן ריצה (Runtime) — התוכנית התחילה ונפלה באמצע, למשל חילוק שלם ב-0 (`ArithmeticException`) או אותיות במקום מספר ב-`nextInt()`.\nשגיאה לוגית — הכול רץ, אבל התשובה לא נכונה. המחשב לא יודע מה התכוונו, ולכן מוצאים אותה רק עם טבלת מעקב או דיבאגר.",
        "ru": "Синтаксическая (Syntax) — ошибка в написании, например, нет `;`. IntelliJ подчёркивает красным, программа не запускается.\nОшибка во время выполнения (Runtime) — программа запустилась и упала посередине, например, деление целых на 0 (`ArithmeticException`) или буквы вместо числа в `nextInt()`.\nЛогическая — всё работает, но ответ неверный. Компьютер не знает, что мы имели в виду, поэтому её находят только таблицей отслеживания или отладчиком.",
        "en": "Syntax error — a writing mistake, e.g. a missing `;`. IntelliJ marks it red and the program does not run.\nRuntime error — the program started and crashed in the middle, e.g. integer division by 0 (`ArithmeticException`) or letters instead of a number in `nextInt()`.\nLogic error — everything runs but the answer is wrong. The computer does not know what we meant, so you find it only with a tracing table or the debugger."
      },
      "why": {
        "he": "כל סוג נתפס בזמן אחר: תחביר — לפני ההרצה, זמן ריצה — בזמן ההרצה, לוגית — רק אחרי, כשבודקים את התוצאה. לכן בודקים תמיד על דוגמה שאת התשובה שלה יודעים מראש. כל השגיאות נקראות \"באגים\", וחיפוש שלהן — Debugging.",
        "ru": "Каждый вид ловится в своё время: синтаксис — до запуска, runtime — во время запуска, логическая — только потом, когда проверяешь результат. Поэтому всегда проверяют на примере, ответ на который знают заранее. Все ошибки называют «багами», а их поиск — Debugging.",
        "en": "Each kind is caught at a different time: syntax — before running, runtime — while running, logic — only afterwards, when you check the result. So always test on an example whose answer you know. All errors are called \"bugs\", and hunting them is debugging."
      },
      "_src": "pass-0311"
    },
    {
      "kind": "talk",
      "title": {
        "he": "מחומרי הקורס: מה זה אלגוריתם",
        "ru": "Из материалов курса: что такое алгоритм",
        "en": "From the course files: what an algorithm is"
      },
      "text": {
        "he": "אלגוריתם הוא מתכון לביצוע משימה: רשימת הוראות שהן\n• חד-משמעיות — אפשר להבין רק בדרך אחת;\n• אפשריות לביצוע;\n• בסדר מוגדר היטב.\nדוגמה מהחומר: בשני מכלים יש תפוזים. כמה להעביר כדי שיהיה שווה? 1. קלט: מכל א. 2. קלט: מכל ב. 3. מעבירים חצי מההפרש. 4. אם בא יותר — מא לב, אחרת — מב לא.",
        "ru": "Алгоритм — это рецепт выполнения задачи: список команд, которые\n• однозначны — понять можно только одним способом;\n• выполнимы;\n• идут в чётко заданном порядке.\nПример из материалов: в двух контейнерах апельсины. Сколько переложить, чтобы стало поровну? 1. Ввод: контейнер А. 2. Ввод: контейнер Б. 3. Перекладываем половину разницы. 4. Если в А больше — из А в Б, иначе — из Б в А.",
        "en": "An algorithm is a recipe for a task: a list of instructions that are\n• unambiguous — they can be read only one way;\n• possible to carry out;\n• in a well-defined order.\nExample from the files: two containers hold oranges. How many to move so they are equal? 1. Input: container A. 2. Input: container B. 3. Move half the difference. 4. If A has more — from A to B, otherwise from B to A."
      },
      "why": {
        "he": "למה חצי מההפרש ולא כל ההפרש? אם מעבירים את כל ההפרש, המכלים רק מתחלפים: במלא יותר יהיה עכשיו פחות. כל תפוז שעובר מקטין צד אחד ומגדיל את השני, ולכן מספיק חצי. כך גם כותבים קוד: קודם מבינים את הבעיה במילים, אחר כך מתרגמים ל-Java.",
        "ru": "Почему половину разницы, а не всю? Если переложить всю разницу, контейнеры просто поменяются местами: в полном станет меньше. Каждый апельсин уменьшает одну сторону и увеличивает другую, поэтому хватает половины. Так же пишут и код: сначала понимают задачу словами, потом переводят на Java.",
        "en": "Why half the difference, not all of it? Moving the whole difference just swaps them: the fuller one would now have less. Each orange shrinks one side and grows the other, so half is enough. Code is written the same way: understand the problem in words first, then translate to Java."
      },
      "_src": "pass-0311"
    }
  ],
  "review": [
    {
      "title": {
        "he": "טיפוסים",
        "ru": "Типы",
        "en": "Types"
      },
      "text": {
        "he": "`int` שלם, `double` עשרוני, `char` תו אחד `'a'`, `boolean` אמת/שקר, `String` טקסט `\"...\"`.",
        "ru": "`int` целое, `double` дробное, `char` один символ `'a'`, `boolean` да/нет, `String` текст `\"...\"`.",
        "en": "`int` whole, `double` decimal, `char` one character `'a'`, `boolean` true/false, `String` text `\"...\"`."
      }
    },
    {
      "title": {
        "he": "חילוק בשלמים",
        "ru": "Целочисленное деление",
        "en": "Integer division"
      },
      "text": {
        "he": "`17 / 4 = 4` — השבר נזרק. `17 / 4.0` או `(double) 17 / 4` נותנים `4.25`.",
        "ru": "`17 / 4 = 4` — дробь отбрасывается. `17 / 4.0` или `(double) 17 / 4` дают `4.25`.",
        "en": "`17 / 4 = 4` — the fraction is dropped. `17 / 4.0` or `(double) 17 / 4` gives `4.25`."
      }
    },
    {
      "title": {
        "he": "שארית %",
        "ru": "Остаток %",
        "en": "Remainder %"
      },
      "text": {
        "he": "`97 % 40 = 17`. זוגי: `x % 2 == 0`. ספרה אחרונה: `x % 10`.",
        "ru": "`97 % 40 = 17`. Чётное: `x % 2 == 0`. Последняя цифра: `x % 10`.",
        "en": "`97 % 40 = 17`. Even: `x % 2 == 0`. Last digit: `x % 10`."
      }
    },
    {
      "title": {
        "he": "פירוק לספרות",
        "ru": "Разбор на цифры",
        "en": "Digits"
      },
      "text": {
        "he": "`% 10` לוקח את הספרה האחרונה, `/ 10` מוחק אותה. עשרות: `n / 10 % 10`, מאות: `n / 100`.",
        "ru": "`% 10` берёт последнюю цифру, `/ 10` её стирает. Десятки: `n / 10 % 10`, сотни: `n / 100`.",
        "en": "`% 10` takes the last digit, `/ 10` removes it. Tens: `n / 10 % 10`, hundreds: `n / 100`."
      }
    },
    {
      "title": {
        "he": "= מול ==",
        "ru": "= и ==",
        "en": "= vs =="
      },
      "text": {
        "he": "`x = 5` שם ערך. `x == 5` בודק ומחזיר `true`/`false`.",
        "ru": "`x = 5` кладёт значение. `x == 5` проверяет и даёт `true`/`false`.",
        "en": "`x = 5` stores a value. `x == 5` checks and gives `true`/`false`."
      }
    },
    {
      "title": {
        "he": "קיצורים",
        "ru": "Сокращения",
        "en": "Shortcuts"
      },
      "text": {
        "he": "`x += 5` זה `x = x + 5`. `x++` מוסיף 1 — עדיף בשורה נפרדת.",
        "ru": "`x += 5` — это `x = x + 5`. `x++` прибавляет 1 — лучше отдельной строкой.",
        "en": "`x += 5` means `x = x + 5`. `x++` adds 1 — best on its own line."
      }
    },
    {
      "title": {
        "he": "סדר פעולות",
        "ru": "Порядок действий",
        "en": "Order of operations"
      },
      "text": {
        "he": "קודם `*`, `/`, `%`, אחר כך `+`, `-`. סוגריים — תמיד ראשונים.",
        "ru": "Сначала `*`, `/`, `%`, потом `+`, `-`. Скобки — всегда первыми.",
        "en": "First `*`, `/`, `%`, then `+`, `-`. Brackets always come first."
      }
    }
  ],
  "tasks": {
    "groups": {
      "ops": {
        "he": "חשבון וטיפוסים מהשיעור",
        "ru": "Арифметика и типы с урока",
        "en": "Arithmetic and types from the lesson"
      },
      "mod": {
        "he": "שארית, קיצורים וספרות",
        "ru": "Остаток, сокращения и цифры",
        "en": "Remainder, shortcuts and digits"
      },
      "course": {
        "he": "מחומרי הקורס ומהמצגת",
        "ru": "Из материалов курса и презентации",
        "en": "From the course files and slides"
      },
      "ws": {
        "he": "דף תרגול: טיפוסים ואופרטורים",
        "ru": "Лист упражнений: типы и операторы",
        "en": "Worksheet: types and operators"
      }
    },
    "teacher": [
      {
        "id": "t-ops-1",
        "group": "ops",
        "label": "1",
        "kind": "number",
        "text": {
          "he": "מה תדפיס הפקודה?\n`System.out.println(2 + 5 * 7 - 2 / 7);`",
          "ru": "Что напечатает команда?\n`System.out.println(2 + 5 * 7 - 2 / 7);`",
          "en": "What does this print?\n`System.out.println(2 + 5 * 7 - 2 / 7);`"
        },
        "answer": {
          "value": "37"
        },
        "hints": [
          {
            "he": "קודם כפל וחילוק, אחר כך חיבור וחיסור.",
            "ru": "Сначала умножение и деление, потом сложение и вычитание.",
            "en": "Multiplication and division first, then addition and subtraction."
          },
          {
            "he": "`2 / 7` הוא חילוק של שני שלמים. כמה פעמים 7 נכנס ב-2?",
            "ru": "`2 / 7` — деление двух целых. Сколько раз 7 помещается в 2?",
            "en": "`2 / 7` divides two whole numbers. How many times does 7 fit into 2?"
          }
        ],
        "solution": [
          {
            "he": "כפל: `5 * 7 = 35`",
            "ru": "Умножение: `5 * 7 = 35`",
            "en": "Multiplication: `5 * 7 = 35`"
          },
          {
            "he": "חילוק בשלמים: `2 / 7 = 0` (השבר נזרק)",
            "ru": "Целочисленное деление: `2 / 7 = 0` (дробь отбрасывается)",
            "en": "Integer division: `2 / 7 = 0` (the fraction is dropped)"
          },
          "2 + 35 - 0",
          "= 37",
          {
            "he": "תשובה: 37",
            "ru": "Ответ: 37",
            "en": "Answer: 37"
          }
        ]
      },
      {
        "id": "t-ops-2",
        "group": "ops",
        "label": "2",
        "kind": "number",
        "text": {
          "he": "מה תדפיס הפקודה?\n`System.out.println(2 + 3 * 4 - 8 / 2);`",
          "ru": "Что напечатает команда?\n`System.out.println(2 + 3 * 4 - 8 / 2);`",
          "en": "What does this print?\n`System.out.println(2 + 3 * 4 - 8 / 2);`"
        },
        "answer": {
          "value": "10"
        },
        "hints": [
          {
            "he": "קודם `3 * 4` ו-`8 / 2`.",
            "ru": "Сначала `3 * 4` и `8 / 2`.",
            "en": "First `3 * 4` and `8 / 2`."
          },
          {
            "he": "`3 * 4 = 12`, `8 / 2 = 4`. עכשיו `2 + 12 - 4`.",
            "ru": "`3 * 4 = 12`, `8 / 2 = 4`. Теперь `2 + 12 - 4`.",
            "en": "`3 * 4 = 12`, `8 / 2 = 4`. Now `2 + 12 - 4`."
          }
        ],
        "solution": [
          "3 * 4 = 12",
          "8 / 2 = 4",
          "2 + 12 - 4",
          "= 10",
          {
            "he": "תשובה: 10",
            "ru": "Ответ: 10",
            "en": "Answer: 10"
          }
        ]
      },
      {
        "id": "t-ops-3",
        "group": "ops",
        "label": "3",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`double x = 5;`\n`double y = 10;`\n`System.out.println(x / y);`",
          "ru": "Что будет напечатано?\n`double x = 5;`\n`double y = 10;`\n`System.out.println(x / y);`",
          "en": "What is printed?\n`double x = 5;`\n`double y = 10;`\n`System.out.println(x / y);`"
        },
        "answer": {
          "value": "0.5"
        },
        "hints": [
          {
            "he": "שני המשתנים הם `double`, אז החילוק לא זורק את השבר.",
            "ru": "Обе переменные `double`, поэтому деление не отбрасывает дробь.",
            "en": "Both variables are `double`, so the division keeps the fraction."
          }
        ],
        "solution": [
          "x = 5.0,  y = 10.0",
          "5.0 / 10.0 = 0.5",
          {
            "he": "תשובה: 0.5",
            "ru": "Ответ: 0.5",
            "en": "Answer: 0.5"
          }
        ]
      },
      {
        "id": "t-ops-4",
        "group": "ops",
        "label": "4",
        "kind": "text",
        "text": {
          "he": "מה יודפס? (`'f'` הוא התו מספר 102)\n`char x = 'f' + 3;`\n`System.out.println(x);`",
          "ru": "Что будет напечатано? (`'f'` — символ номер 102)\n`char x = 'f' + 3;`\n`System.out.println(x);`",
          "en": "What is printed? (`'f'` is character number 102)\n`char x = 'f' + 3;`\n`System.out.println(x);`"
        },
        "answer": {
          "accept": [
            "i"
          ]
        },
        "hints": [
          {
            "he": "מוסיפים 3 למספר של התו, והתוצאה נשמרת שוב כתו.",
            "ru": "К номеру символа прибавляем 3, результат снова хранится как символ.",
            "en": "Add 3 to the character number; the result is stored as a character again."
          },
          {
            "he": "102 + 3 = 105. איזו אות באה 3 אותיות אחרי f?",
            "ru": "102 + 3 = 105. Какая буква идёт через 3 после f?",
            "en": "102 + 3 = 105. Which letter comes 3 after f?"
          }
        ],
        "solution": [
          "'f' = 102",
          "102 + 3 = 105",
          "f → g → h → i",
          {
            "he": "המשתנה מסוג `char`, לכן מודפסת האות: i",
            "ru": "Переменная типа `char`, поэтому печатается буква: i",
            "en": "The variable is a `char`, so the letter is printed: i"
          }
        ]
      },
      {
        "id": "t-ops-5",
        "group": "ops",
        "label": "5",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`int gread1 = 82;`\n`int gread2 = 90;`\n`int gread3 = 98;`\n`double mean = (gread1 + gread2 + gread3) / 3.0;`\n`System.out.println(mean);`",
          "ru": "Что будет напечатано?\n`int gread1 = 82;`\n`int gread2 = 90;`\n`int gread3 = 98;`\n`double mean = (gread1 + gread2 + gread3) / 3.0;`\n`System.out.println(mean);`",
          "en": "What is printed?\n`int gread1 = 82;`\n`int gread2 = 90;`\n`int gread3 = 98;`\n`double mean = (gread1 + gread2 + gread3) / 3.0;`\n`System.out.println(mean);`"
        },
        "answer": {
          "value": "90"
        },
        "hints": [
          {
            "he": "קודם הסוגריים: הסכום של שלושת הציונים.",
            "ru": "Сначала скобки: сумма трёх оценок.",
            "en": "Brackets first: the sum of the three grades."
          },
          {
            "he": "הסכום 270. עכשיו `270 / 3.0`.",
            "ru": "Сумма 270. Теперь `270 / 3.0`.",
            "en": "The sum is 270. Now `270 / 3.0`."
          }
        ],
        "solution": [
          "82 + 90 + 98 = 270",
          "270 / 3.0 = 90.0",
          {
            "he": "יודפס `90.0` (מספר `double` תמיד מודפס עם נקודה)",
            "ru": "Будет напечатано `90.0` (число `double` всегда печатается с точкой)",
            "en": "`90.0` is printed (a `double` is always printed with a point)"
          }
        ]
      },
      {
        "id": "t-ops-6",
        "group": "ops",
        "label": "6",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`System.out.println(17 / 4);`",
          "ru": "Что будет напечатано?\n`System.out.println(17 / 4);`",
          "en": "What is printed?\n`System.out.println(17 / 4);`"
        },
        "answer": {
          "value": "4"
        },
        "hints": [
          {
            "he": "שני המספרים שלמים. כמה פעמים 4 נכנס ב-17?",
            "ru": "Оба числа целые. Сколько раз 4 помещается в 17?",
            "en": "Both numbers are whole. How many times does 4 fit into 17?"
          }
        ],
        "solution": [
          "17 / 4 = 4.25",
          {
            "he": "חילוק בשלמים זורק את השבר: 4",
            "ru": "Целочисленное деление отбрасывает дробь: 4",
            "en": "Integer division drops the fraction: 4"
          }
        ]
      },
      {
        "id": "t-ops-7",
        "group": "ops",
        "label": "7",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`int x = 17;`\n`System.out.println((double) x / 4);`",
          "ru": "Что будет напечатано?\n`int x = 17;`\n`System.out.println((double) x / 4);`",
          "en": "What is printed?\n`int x = 17;`\n`System.out.println((double) x / 4);`"
        },
        "answer": {
          "value": "4.25"
        },
        "hints": [
          {
            "he": "`(double)` הופך את x ל-`17.0` לפני החילוק.",
            "ru": "`(double)` превращает x в `17.0` до деления.",
            "en": "`(double)` turns x into `17.0` before the division."
          }
        ],
        "solution": [
          "(double) x = 17.0",
          "17.0 / 4 = 4.25",
          {
            "he": "תשובה: 4.25",
            "ru": "Ответ: 4.25",
            "en": "Answer: 4.25"
          }
        ]
      },
      {
        "id": "t-ops-8",
        "group": "ops",
        "label": "8",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`int x = 3;`\n`double y = 2 * x;`\n`System.out.println(y);`",
          "ru": "Что будет напечатано?\n`int x = 3;`\n`double y = 2 * x;`\n`System.out.println(y);`",
          "en": "What is printed?\n`int x = 3;`\n`double y = 2 * x;`\n`System.out.println(y);`"
        },
        "answer": {
          "value": "6"
        },
        "hints": [
          {
            "he": "`2 * x` הוא `int`, ו-Java ממירה אותו לבד ל-`double`.",
            "ru": "`2 * x` — это `int`, и Java сама превращает его в `double`.",
            "en": "`2 * x` is an `int`, and Java converts it to `double` by itself."
          }
        ],
        "solution": [
          "2 * 3 = 6",
          {
            "he": "הערך נשמר ב-`double`: יודפס `6.0`",
            "ru": "Значение сохраняется в `double`: напечатается `6.0`",
            "en": "The value is stored in a `double`: `6.0` is printed"
          }
        ]
      },
      {
        "id": "t-mod-1",
        "group": "mod",
        "label": "9",
        "kind": "number",
        "text": {
          "he": "באוטובוס יש מקום ל-40 ילדים, ויש 97 ילדים. מה תדפיס הפקודה (כמה ילדים נשארים אחרי האוטובוסים המלאים)?\n`System.out.println(97 % 40);`",
          "ru": "В автобус помещается 40 детей, а детей 97. Что напечатает команда (сколько детей останется после полных автобусов)?\n`System.out.println(97 % 40);`",
          "en": "A bus holds 40 children and there are 97 children. What does this print (how many children are left after the full buses)?\n`System.out.println(97 % 40);`"
        },
        "answer": {
          "value": "17"
        },
        "hints": [
          {
            "he": "קודם: כמה אוטובוסים מלאים? `97 / 40`.",
            "ru": "Сначала: сколько полных автобусов? `97 / 40`.",
            "en": "First: how many full buses? `97 / 40`."
          },
          {
            "he": "2 אוטובוסים לוקחים 80 ילדים. כמה נשארו מ-97?",
            "ru": "2 автобуса забирают 80 детей. Сколько осталось из 97?",
            "en": "2 buses take 80 children. How many of the 97 are left?"
          }
        ],
        "solution": [
          "97 / 40 = 2",
          "2 * 40 = 80",
          "97 - 80 = 17",
          {
            "he": "תשובה: 17",
            "ru": "Ответ: 17",
            "en": "Answer: 17"
          }
        ]
      },
      {
        "id": "t-mod-2",
        "group": "mod",
        "label": "10",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`System.out.println(149 % 100);`",
          "ru": "Что будет напечатано?\n`System.out.println(149 % 100);`",
          "en": "What is printed?\n`System.out.println(149 % 100);`"
        },
        "answer": {
          "value": "49"
        },
        "hints": [
          {
            "he": "מה נשאר מ-149 אחרי שמורידים מאה שלמה אחת?",
            "ru": "Что остаётся от 149, если убрать одну целую сотню?",
            "en": "What is left of 149 after removing one whole hundred?"
          }
        ],
        "solution": [
          "149 / 100 = 1",
          "149 - 100 = 49",
          {
            "he": "`% 100` משאיר את שתי הספרות האחרונות: 49",
            "ru": "`% 100` оставляет две последние цифры: 49",
            "en": "`% 100` keeps the last two digits: 49"
          }
        ]
      },
      {
        "id": "t-mod-3",
        "group": "mod",
        "label": "11",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`int x = 48;`\n`x %= 5;`\n`System.out.println(x);`",
          "ru": "Что будет напечатано?\n`int x = 48;`\n`x %= 5;`\n`System.out.println(x);`",
          "en": "What is printed?\n`int x = 48;`\n`x %= 5;`\n`System.out.println(x);`"
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "`x %= 5` זה `x = x % 5`.",
            "ru": "`x %= 5` — это `x = x % 5`.",
            "en": "`x %= 5` means `x = x % 5`."
          },
          {
            "he": "5 נכנס ב-48 תשע פעמים (45). מה השארית?",
            "ru": "5 помещается в 48 девять раз (45). Какой остаток?",
            "en": "5 fits into 48 nine times (45). What is the remainder?"
          }
        ],
        "solution": [
          "x = 48",
          "x = 48 % 5",
          "48 = 9 * 5 + 3",
          "x = 3",
          {
            "he": "תשובה: 3",
            "ru": "Ответ: 3",
            "en": "Answer: 3"
          }
        ]
      },
      {
        "id": "t-mod-4",
        "group": "mod",
        "label": "12",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`int x = 48;`\n`x /= 5;`\n`System.out.println(x);`",
          "ru": "Что будет напечатано?\n`int x = 48;`\n`x /= 5;`\n`System.out.println(x);`",
          "en": "What is printed?\n`int x = 48;`\n`x /= 5;`\n`System.out.println(x);`"
        },
        "answer": {
          "value": "9"
        },
        "hints": [
          {
            "he": "`x /= 5` זה `x = x / 5`, ו-x הוא `int`.",
            "ru": "`x /= 5` — это `x = x / 5`, а x — `int`.",
            "en": "`x /= 5` means `x = x / 5`, and x is an `int`."
          }
        ],
        "solution": [
          "x = 48 / 5",
          "48 / 5 = 9.6",
          {
            "he": "חילוק בשלמים: x = 9",
            "ru": "Целочисленное деление: x = 9",
            "en": "Integer division: x = 9"
          }
        ]
      },
      {
        "id": "t-mod-5",
        "group": "mod",
        "label": "13",
        "kind": "choice",
        "text": {
          "he": "מה יודפס?\n`int x = 48;`\n`System.out.println(x % 10 > 5);`",
          "ru": "Что будет напечатано?\n`int x = 48;`\n`System.out.println(x % 10 > 5);`",
          "en": "What is printed?\n`int x = 48;`\n`System.out.println(x % 10 > 5);`"
        },
        "options": [
          "true",
          "false",
          "8"
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "קודם `x % 10` — הספרה האחרונה של 48. אחר כך ההשוואה.",
            "ru": "Сначала `x % 10` — последняя цифра 48. Потом сравнение.",
            "en": "First `x % 10` — the last digit of 48. Then the comparison."
          }
        ],
        "solution": [
          "48 % 10 = 8",
          "8 > 5",
          {
            "he": "השוואה מחזירה `boolean`: true",
            "ru": "Сравнение возвращает `boolean`: true",
            "en": "A comparison returns a `boolean`: true"
          }
        ]
      },
      {
        "id": "t-mod-6",
        "group": "mod",
        "label": "14",
        "kind": "number",
        "text": {
          "he": "סכום הספרות של 736. מה יודפס?\n`int number = 736;`\n`int r = 0;`\n`r += number % 10;`\n`number /= 10;`\n`r += number % 10;`\n`number /= 10;`\n`r += number;`\n`System.out.println(r);`",
          "ru": "Сумма цифр 736. Что будет напечатано?\n`int number = 736;`\n`int r = 0;`\n`r += number % 10;`\n`number /= 10;`\n`r += number % 10;`\n`number /= 10;`\n`r += number;`\n`System.out.println(r);`",
          "en": "The digit sum of 736. What is printed?\n`int number = 736;`\n`int r = 0;`\n`r += number % 10;`\n`number /= 10;`\n`r += number % 10;`\n`number /= 10;`\n`r += number;`\n`System.out.println(r);`"
        },
        "answer": {
          "value": "16"
        },
        "hints": [
          {
            "he": "עקבו אחרי `number` ו-`r` שורה אחרי שורה.",
            "ru": "Следи за `number` и `r` строка за строкой.",
            "en": "Track `number` and `r` line by line."
          },
          {
            "he": "`% 10` לוקח את הספרה האחרונה, `/= 10` מוחק אותה.",
            "ru": "`% 10` берёт последнюю цифру, `/= 10` её стирает.",
            "en": "`% 10` takes the last digit, `/= 10` removes it."
          }
        ],
        "solution": [
          "number = 736,  r = 0",
          "r += 736 % 10  →  r = 6",
          "number /= 10  →  number = 73",
          "r += 73 % 10  →  r = 6 + 3 = 9",
          "number /= 10  →  number = 7",
          "r += 7  →  r = 16",
          {
            "he": "תשובה: 16 (7 + 3 + 6)",
            "ru": "Ответ: 16 (7 + 3 + 6)",
            "en": "Answer: 16 (7 + 3 + 6)"
          }
        ]
      },
      {
        "id": "t-mod-7",
        "group": "mod",
        "label": "15",
        "kind": "number",
        "text": {
          "he": "תרגיל 22: מה ספרת העשרות של 482? מה יודפס?\n`int number = 482;`\n`System.out.println(number % 100 / 10);`",
          "ru": "Упражнение 22: какая цифра десятков у 482? Что будет напечатано?\n`int number = 482;`\n`System.out.println(number % 100 / 10);`",
          "en": "Exercise 22: what is the tens digit of 482? What is printed?\n`int number = 482;`\n`System.out.println(number % 100 / 10);`"
        },
        "answer": {
          "value": "8"
        },
        "hints": [
          {
            "he": "`%` ו-`/` באותה דרגה — מחשבים משמאל לימין.",
            "ru": "`%` и `/` одного уровня — считаем слева направо.",
            "en": "`%` and `/` have the same level — work left to right."
          },
          {
            "he": "`482 % 100 = 82`. עכשיו `82 / 10`.",
            "ru": "`482 % 100 = 82`. Теперь `82 / 10`.",
            "en": "`482 % 100 = 82`. Now `82 / 10`."
          }
        ],
        "solution": [
          "482 % 100 = 82",
          "82 / 10 = 8",
          {
            "he": "תשובה: 8",
            "ru": "Ответ: 8",
            "en": "Answer: 8"
          }
        ]
      },
      {
        "id": "t-mod-8",
        "group": "mod",
        "label": "16",
        "kind": "number",
        "text": {
          "he": "תרגיל 24: ספרת המאות של 905. מה יודפס?\n`int number = 905;`\n`System.out.println(number / 100);`",
          "ru": "Упражнение 24: цифра сотен у 905. Что будет напечатано?\n`int number = 905;`\n`System.out.println(number / 100);`",
          "en": "Exercise 24: the hundreds digit of 905. What is printed?\n`int number = 905;`\n`System.out.println(number / 100);`"
        },
        "answer": {
          "value": "9"
        },
        "hints": [
          {
            "he": "חילוק בשלמים ב-100 מוחק שתי ספרות מימין.",
            "ru": "Целочисленное деление на 100 стирает две цифры справа.",
            "en": "Integer division by 100 removes two digits on the right."
          }
        ],
        "solution": [
          "905 / 100 = 9.05",
          {
            "he": "חילוק בשלמים: 9",
            "ru": "Целочисленное деление: 9",
            "en": "Integer division: 9"
          }
        ]
      },
      {
        "id": "c1",
        "group": "course",
        "label": "res1",
        "kind": "number",
        "text": {
          "he": "תרגיל כיתה מהמצגת. מה הערך של res1?\n`int a = 10;`\n`int b = 3;`\n`double c = 2.5;`\n`double res1 = a / b + c;`",
          "ru": "Классное упражнение из презентации. Чему равно res1?\n`int a = 10;`\n`int b = 3;`\n`double c = 2.5;`\n`double res1 = a / b + c;`",
          "en": "Class exercise from the slides. What is res1?\n`int a = 10;`\n`int b = 3;`\n`double c = 2.5;`\n`double res1 = a / b + c;`"
        },
        "answer": {
          "value": "5.5"
        },
        "hints": [
          {
            "he": "`a / b` הם שני `int`. כמה זה 10 חלקי 3 בשלמים?",
            "ru": "`a / b` — два `int`. Сколько будет 10 делить на 3 в целых?",
            "en": "`a / b` are two `int`s. What is 10 divided by 3 in integers?"
          }
        ],
        "solution": [
          "a / b = 10 / 3 = 3",
          "3 + 2.5 = 5.5",
          {
            "he": "תשובה: 5.5",
            "ru": "Ответ: 5.5",
            "en": "Answer: 5.5"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "c2",
        "group": "course",
        "label": "res2",
        "kind": "choice",
        "text": {
          "he": "אותם a, b, c. מה הערך של res2?\n`boolean res2 = (a % b == 1) && (c > 2);`",
          "ru": "Те же a, b, c. Чему равно res2?\n`boolean res2 = (a % b == 1) && (c > 2);`",
          "en": "Same a, b, c. What is res2?\n`boolean res2 = (a % b == 1) && (c > 2);`"
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
            "he": "כמה זה `10 % 3`?",
            "ru": "Сколько будет `10 % 3`?",
            "en": "What is `10 % 3`?"
          }
        ],
        "solution": [
          "10 % 3 = 1  →  1 == 1  →  true",
          "2.5 > 2  →  true",
          "true && true = true",
          {
            "he": "תשובה: true",
            "ru": "Ответ: true",
            "en": "Answer: true"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "c3",
        "group": "course",
        "label": "res3",
        "kind": "number",
        "text": {
          "he": "ממשיכים: אחרי `a++` מה הערך של res3?\n`a++;`\n`int res3 = a * b;`",
          "ru": "Продолжаем: после `a++` чему равно res3?\n`a++;`\n`int res3 = a * b;`",
          "en": "Continue: after `a++`, what is res3?\n`a++;`\n`int res3 = a * b;`"
        },
        "answer": {
          "value": "33"
        },
        "hints": [
          {
            "he": "אחרי `a++` הערך של a הוא 11.",
            "ru": "После `a++` a равно 11.",
            "en": "After `a++`, a is 11."
          }
        ],
        "solution": [
          "a = 10 + 1 = 11",
          "11 * 3 = 33",
          {
            "he": "תשובה: 33",
            "ru": "Ответ: 33",
            "en": "Answer: 33"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "c4",
        "group": "course",
        "label": "a++",
        "kind": "text",
        "text": {
          "he": "מה יודפס? כתבו כך: 1 2\n`int a = 5;`\n`int b = a++;`\n`System.out.println(a + \" \" + b);`",
          "ru": "Что напечатает? Напиши так: 1 2\n`int a = 5;`\n`int b = a++;`\n`System.out.println(a + \" \" + b);`",
          "en": "What is printed? Write like: 1 2\n`int a = 5;`\n`int b = a++;`\n`System.out.println(a + \" \" + b);`"
        },
        "answer": {
          "accept": [
            "6 5"
          ]
        },
        "hints": [
          {
            "he": "`a++`: קודם b מקבל את הערך הישן, ורק אחר כך a גדל.",
            "ru": "`a++`: сначала b получает старое значение, и только потом a растёт.",
            "en": "`a++`: b gets the old value first, only then a grows."
          }
        ],
        "solution": [
          "b = 5",
          "a = 6",
          {
            "he": "תשובה: 6 5",
            "ru": "Ответ: 6 5",
            "en": "Answer: 6 5"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "c5",
        "group": "course",
        "label": "++c",
        "kind": "text",
        "text": {
          "he": "מה יודפס? כתבו כך: 1 2\n`int c = 5;`\n`int d = ++c;`\n`System.out.println(c + \" \" + d);`",
          "ru": "Что напечатает? Напиши так: 1 2\n`int c = 5;`\n`int d = ++c;`\n`System.out.println(c + \" \" + d);`",
          "en": "What is printed? Write like: 1 2\n`int c = 5;`\n`int d = ++c;`\n`System.out.println(c + \" \" + d);`"
        },
        "answer": {
          "accept": [
            "6 6"
          ]
        },
        "hints": [
          {
            "he": "`++c`: קודם מגדילים, ואז נותנים את הערך.",
            "ru": "`++c`: сначала увеличиваем, потом отдаём значение.",
            "en": "`++c`: add 1 first, then give the value."
          }
        ],
        "solution": [
          "c = 6",
          "d = 6",
          {
            "he": "תשובה: 6 6",
            "ru": "Ответ: 6 6",
            "en": "Answer: 6 6"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "c6",
        "group": "course",
        "label": "10 + 20 + \"\"",
        "kind": "text",
        "text": {
          "he": "מה יודפס?\n`System.out.println(10 + 20 + \" is the sum\");`",
          "ru": "Что напечатает?\n`System.out.println(10 + 20 + \" is the sum\");`",
          "en": "What is printed?\n`System.out.println(10 + 20 + \" is the sum\");`"
        },
        "answer": {
          "accept": [
            "30 is the sum"
          ]
        },
        "hints": [
          {
            "he": "משמאל לימין: קודם `10 + 20`, ושניהם מספרים.",
            "ru": "Слева направо: сначала `10 + 20`, и оба — числа.",
            "en": "Left to right: first `10 + 20`, and both are numbers."
          }
        ],
        "solution": [
          "10 + 20 = 30",
          "30 + \" is the sum\" = \"30 is the sum\"",
          {
            "he": "תשובה: 30 is the sum",
            "ru": "Ответ: 30 is the sum",
            "en": "Answer: 30 is the sum"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "c7",
        "group": "course",
        "label": "\"Java\" + 10 + 20",
        "kind": "text",
        "text": {
          "he": "מה יודפס?\n`System.out.println(\"Java\" + 10 + 20);`",
          "ru": "Что напечатает?\n`System.out.println(\"Java\" + 10 + 20);`",
          "en": "What is printed?\n`System.out.println(\"Java\" + 10 + 20);`"
        },
        "answer": {
          "accept": [
            "Java1020"
          ]
        },
        "hints": [
          {
            "he": "הראשון הוא טקסט, ולכן כל `+` אחריו מדביק.",
            "ru": "Первым стоит текст, поэтому каждый `+` после него склеивает.",
            "en": "The first one is text, so every `+` after it joins."
          }
        ],
        "solution": [
          "\"Java\" + 10 = \"Java10\"",
          "\"Java10\" + 20 = \"Java1020\"",
          {
            "he": "תשובה: Java1020",
            "ru": "Ответ: Java1020",
            "en": "Answer: Java1020"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "c8",
        "group": "course",
        "label": "(int)(x + 0.5)",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`double x = 3.55;`\n`System.out.println((int) (x + 0.5));`",
          "ru": "Что напечатает?\n`double x = 3.55;`\n`System.out.println((int) (x + 0.5));`",
          "en": "What is printed?\n`double x = 3.55;`\n`System.out.println((int) (x + 0.5));`"
        },
        "answer": {
          "value": "4"
        },
        "hints": [
          {
            "he": "קודם החיבור בסוגריים, אחר כך `(int)` חותך.",
            "ru": "Сначала сложение в скобках, потом `(int)` отрезает.",
            "en": "First the addition in brackets, then `(int)` cuts."
          }
        ],
        "solution": [
          "3.55 + 0.5 = 4.05",
          "(int) 4.05 = 4",
          {
            "he": "תשובה: 4",
            "ru": "Ответ: 4",
            "en": "Answer: 4"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "c9",
        "group": "course",
        "label": "(84 + 80 + 90) / 3",
        "kind": "number",
        "text": {
          "he": "מחומרי הקורס: ממוצע של 3 ציונים שלמים. מה יודפס?\n`int g1 = 84, g2 = 80, g3 = 90;`\n`System.out.println((g1 + g2 + g3) / 3);`",
          "ru": "Из материалов курса: среднее трёх целых оценок. Что напечатает?\n`int g1 = 84, g2 = 80, g3 = 90;`\n`System.out.println((g1 + g2 + g3) / 3);`",
          "en": "From the course files: the average of 3 whole grades. What is printed?\n`int g1 = 84, g2 = 80, g3 = 90;`\n`System.out.println((g1 + g2 + g3) / 3);`"
        },
        "answer": {
          "value": "84"
        },
        "hints": [
          {
            "he": "הסכום 254 והוא `int`, וגם 3 הוא `int`.",
            "ru": "Сумма 254 — это `int`, и 3 тоже `int`.",
            "en": "The sum 254 is an `int`, and 3 is an `int` too."
          }
        ],
        "solution": [
          "84 + 80 + 90 = 254",
          "254 / 3 = 84   (84 × 3 = 252)",
          {
            "he": "בלי השבר: הממוצע האמיתי 84.67. כדי לקבל אותו — `/ 3.0`.",
            "ru": "Дробь пропала: настоящее среднее 84.67. Чтобы его получить — `/ 3.0`.",
            "en": "The fraction is gone: the real average is 84.67. To get it, use `/ 3.0`."
          },
          {
            "he": "תשובה: 84",
            "ru": "Ответ: 84",
            "en": "Answer: 84"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "c10",
        "group": "course",
        "label": {
          "he": "תפוזים",
          "ru": "Апельсины",
          "en": "Oranges"
        },
        "kind": "number",
        "text": {
          "he": "מחומרי הקורס: במכל א יש 160 תפוזים, במכל ב יש 100. כמה תפוזים צריך להעביר ממכל א למכל ב כדי שיהיה שווה?",
          "ru": "Из материалов курса: в контейнере А 160 апельсинов, в Б — 100. Сколько нужно переложить из А в Б, чтобы стало поровну?",
          "en": "From the course files: container A has 160 oranges, container B has 100. How many must move from A to B to make them equal?"
        },
        "answer": {
          "value": "30"
        },
        "hints": [
          {
            "he": "חצי מההפרש.",
            "ru": "Половину разницы.",
            "en": "Half the difference."
          }
        ],
        "solution": [
          "160 - 100 = 60",
          "60 / 2 = 30",
          {
            "he": "בדיקה: 130 ו-130.",
            "ru": "Проверка — 130 и 130.",
            "en": "Check — 130 and 130."
          },
          {
            "he": "תשובה: 30",
            "ru": "Ответ: 30",
            "en": "Answer: 30"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "c11",
        "group": "course",
        "label": {
          "he": "שם משתנה",
          "ru": "Имя переменной",
          "en": "Variable name"
        },
        "kind": "choice",
        "text": {
          "he": "מחומרי הקורס: איזה שם משתנה חוקי ב-Java?",
          "ru": "Из материалов курса: какое имя переменной допустимо в Java?",
          "en": "From the course files: which variable name is legal in Java?"
        },
        "options": [
          "size 37",
          "number-1",
          "firstName",
          "a#3"
        ],
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "אסור רווח, מינוס וסימנים כמו #.",
            "ru": "Нельзя пробел, минус и знаки вроде #.",
            "en": "No spaces, minus signs or symbols like #."
          }
        ],
        "solution": [
          {
            "he": "`size 37` — רווח. `number-1` — מינוס. `a#3` — הסימן #.",
            "ru": "`size 37` — пробел. `number-1` — минус. `a#3` — знак #.",
            "en": "`size 37` — a space. `number-1` — a minus. `a#3` — the # sign."
          },
          {
            "he": "תשובה: firstName",
            "ru": "Ответ: firstName",
            "en": "Answer: firstName"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "c12",
        "group": "course",
        "label": {
          "he": "קבוצות של 5",
          "ru": "Группы по 5",
          "en": "Groups of 5"
        },
        "kind": "text",
        "text": {
          "he": "מחומרי הקורס: בכיתה 23 תלמידים, מתחלקים לקבוצות של 5. כמה קבוצות מלאות ייווצרו וכמה תלמידים יישארו בלי קבוצה? כתבו כך: 1 2",
          "ru": "Из материалов курса: в классе 23 ученика, делятся на группы по 5. Сколько полных групп и сколько учеников останется без группы? Напиши так: 1 2",
          "en": "From the course files: a class of 23 splits into groups of 5. How many full groups, and how many students are left without a group? Write like: 1 2"
        },
        "answer": {
          "accept": [
            "4 3"
          ]
        },
        "hints": [
          {
            "he": "קבוצות — `/`, נשארו — `%`.",
            "ru": "Группы — `/`, остаток — `%`.",
            "en": "Groups — `/`, left over — `%`."
          }
        ],
        "solution": [
          "23 / 5 = 4",
          "23 % 5 = 3",
          {
            "he": "תשובה: 4 3",
            "ru": "Ответ: 4 3",
            "en": "Answer: 4 3"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "w18",
        "group": "ws",
        "label": "a / b",
        "kind": "number",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס?\n`int a = 11;`\n`int b = 3;`\n`System.out.println(a / b);`",
          "ru": "Из листа упражнений курса. Что напечатает?\n`int a = 11;`\n`int b = 3;`\n`System.out.println(a / b);`",
          "en": "From the course worksheet. What is printed?\n`int a = 11;`\n`int b = 3;`\n`System.out.println(a / b);`"
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "שני `int` — השבר נזרק.",
            "ru": "Два `int` — дробь отбрасывается.",
            "en": "Two `int`s — the fraction is dropped."
          }
        ],
        "solution": [
          "11 / 3 = 3   (3 × 3 = 9)",
          {
            "he": "תשובה: 3",
            "ru": "Ответ: 3",
            "en": "Answer: 3"
          }
        ],
        "_src": "pass-0311-ws"
      },
      {
        "id": "w19",
        "group": "ws",
        "label": "(double)",
        "kind": "number",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס?\n`int total = 10;`\n`int items = 4;`\n`System.out.println((double) total / items);`",
          "ru": "Из листа упражнений курса. Что напечатает?\n`int total = 10;`\n`int items = 4;`\n`System.out.println((double) total / items);`",
          "en": "From the course worksheet. What is printed?\n`int total = 10;`\n`int items = 4;`\n`System.out.println((double) total / items);`"
        },
        "answer": {
          "value": "2.5"
        },
        "hints": [
          {
            "he": "`(double)` הופך את total ל-10.0 לפני החילוק.",
            "ru": "`(double)` превращает total в 10.0 до деления.",
            "en": "`(double)` makes total 10.0 before dividing."
          }
        ],
        "solution": [
          "(double) 10 = 10.0",
          "10.0 / 4 = 2.5",
          {
            "he": "תשובה: 2.5",
            "ru": "Ответ: 2.5",
            "en": "Answer: 2.5"
          }
        ],
        "_src": "pass-0311-ws"
      },
      {
        "id": "w23",
        "group": "ws",
        "label": {
          "he": "סכום ספרות",
          "ru": "Сумма цифр",
          "en": "Digit sum"
        },
        "kind": "number",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס?\n`int n = 621;`\n`System.out.println(n % 10 + n / 10 % 10 + n / 100);`",
          "ru": "Из листа упражнений курса. Что напечатает?\n`int n = 621;`\n`System.out.println(n % 10 + n / 10 % 10 + n / 100);`",
          "en": "From the course worksheet. What is printed?\n`int n = 621;`\n`System.out.println(n % 10 + n / 10 % 10 + n / 100);`"
        },
        "answer": {
          "value": "9"
        },
        "hints": [
          {
            "he": "אחדות, עשרות, מאות.",
            "ru": "Единицы, десятки, сотни.",
            "en": "Ones, tens, hundreds."
          }
        ],
        "solution": [
          "621 % 10 = 1",
          "621 / 10 % 10 = 62 % 10 = 2",
          "621 / 100 = 6",
          "1 + 2 + 6 = 9",
          {
            "he": "תשובה: 9",
            "ru": "Ответ: 9",
            "en": "Answer: 9"
          }
        ],
        "_src": "pass-0311-ws"
      },
      {
        "id": "w26",
        "group": "ws",
        "label": "y /= 4",
        "kind": "number",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס?\n`double y = 20.0;`\n`y /= 4;`\n`System.out.println(y);`",
          "ru": "Из листа упражнений курса. Что напечатает?\n`double y = 20.0;`\n`y /= 4;`\n`System.out.println(y);`",
          "en": "From the course worksheet. What is printed?\n`double y = 20.0;`\n`y /= 4;`\n`System.out.println(y);`"
        },
        "answer": {
          "value": "5.0"
        },
        "hints": [
          {
            "he": "y הוא `double`, ולכן מודפס עם נקודה.",
            "ru": "y — `double`, поэтому печатается с точкой.",
            "en": "y is a `double`, so it prints with a point."
          }
        ],
        "solution": [
          "y = 20.0 / 4 = 5.0",
          {
            "he": "תשובה: 5.0",
            "ru": "Ответ: 5.0",
            "en": "Answer: 5.0"
          }
        ],
        "_src": "pass-0311-ws"
      },
      {
        "id": "w27",
        "group": "ws",
        "label": "++z",
        "kind": "text",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס? כתבו כך: 1 2\n`int z = 8;`\n`int result = ++z;`\n`System.out.println(z + \" \" + result);`",
          "ru": "Из листа упражнений курса. Что напечатает? Напиши так: 1 2\n`int z = 8;`\n`int result = ++z;`\n`System.out.println(z + \" \" + result);`",
          "en": "From the course worksheet. What is printed? Write like: 1 2\n`int z = 8;`\n`int result = ++z;`\n`System.out.println(z + \" \" + result);`"
        },
        "answer": {
          "accept": [
            "9 9"
          ]
        },
        "hints": [
          {
            "he": "`++z` — קודם מגדילים.",
            "ru": "`++z` — сначала увеличиваем.",
            "en": "`++z` — add first."
          }
        ],
        "solution": [
          "z = 9",
          "result = 9",
          {
            "he": "תשובה: 9 9",
            "ru": "Ответ: 9 9",
            "en": "Answer: 9 9"
          }
        ],
        "_src": "pass-0311-ws"
      },
      {
        "id": "w28",
        "group": "ws",
        "label": "k++",
        "kind": "text",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס? כתבו כך: 1 2\n`int k = 12;`\n`int output = k++;`\n`System.out.println(k + \" \" + output);`",
          "ru": "Из листа упражнений курса. Что напечатает? Напиши так: 1 2\n`int k = 12;`\n`int output = k++;`\n`System.out.println(k + \" \" + output);`",
          "en": "From the course worksheet. What is printed? Write like: 1 2\n`int k = 12;`\n`int output = k++;`\n`System.out.println(k + \" \" + output);`"
        },
        "answer": {
          "accept": [
            "13 12"
          ]
        },
        "hints": [
          {
            "he": "`k++` — קודם נותנים את הערך הישן.",
            "ru": "`k++` — сначала отдаёт старое значение.",
            "en": "`k++` — gives the old value first."
          }
        ],
        "solution": [
          "output = 12",
          "k = 13",
          {
            "he": "תשובה: 13 12",
            "ru": "Ответ: 13 12",
            "en": "Answer: 13 12"
          }
        ],
        "_src": "pass-0311-ws"
      },
      {
        "id": "w29",
        "group": "ws",
        "label": "count = --count",
        "kind": "number",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס?\n`int count = 5;`\n`count = --count;`\n`System.out.println(count);`",
          "ru": "Из листа упражнений курса. Что напечатает?\n`int count = 5;`\n`count = --count;`\n`System.out.println(count);`",
          "en": "From the course worksheet. What is printed?\n`int count = 5;`\n`count = --count;`\n`System.out.println(count);`"
        },
        "answer": {
          "value": "4"
        },
        "hints": [
          {
            "he": "`--count` מקטין ל-4 ונותן 4.",
            "ru": "`--count` уменьшает до 4 и отдаёт 4.",
            "en": "`--count` makes it 4 and gives 4."
          }
        ],
        "solution": [
          "--count  →  4",
          "count = 4",
          {
            "he": "תשובה: 4",
            "ru": "Ответ: 4",
            "en": "Answer: 4"
          }
        ],
        "_src": "pass-0311-ws"
      },
      {
        "id": "w30",
        "group": "ws",
        "label": "val %= 4",
        "kind": "number",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס?\n`int val = 15;`\n`val %= 4;`\n`System.out.println(val);`",
          "ru": "Из листа упражнений курса. Что напечатает?\n`int val = 15;`\n`val %= 4;`\n`System.out.println(val);`",
          "en": "From the course worksheet. What is printed?\n`int val = 15;`\n`val %= 4;`\n`System.out.println(val);`"
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "`val = val % 4`.",
            "ru": "`val = val % 4`.",
            "en": "`val = val % 4`."
          }
        ],
        "solution": [
          "15 % 4 = 3   (4 × 3 = 12)",
          {
            "he": "תשובה: 3",
            "ru": "Ответ: 3",
            "en": "Answer: 3"
          }
        ],
        "_src": "pass-0311-ws"
      },
      {
        "id": "w31",
        "group": "ws",
        "label": "p++; p *= 2",
        "kind": "number",
        "text": {
          "he": "מדף התרגול של הקורס. מה יודפס?\n`int p = 7;`\n`p++;`\n`p *= 2;`\n`System.out.println(p);`",
          "ru": "Из листа упражнений курса. Что напечатает?\n`int p = 7;`\n`p++;`\n`p *= 2;`\n`System.out.println(p);`",
          "en": "From the course worksheet. What is printed?\n`int p = 7;`\n`p++;`\n`p *= 2;`\n`System.out.println(p);`"
        },
        "answer": {
          "value": "16"
        },
        "hints": [
          {
            "he": "קודם 8, אחר כך כפול 2.",
            "ru": "Сначала 8, потом умножить на 2.",
            "en": "First 8, then times 2."
          }
        ],
        "solution": [
          "p = 8",
          "p = 8 × 2 = 16",
          {
            "he": "תשובה: 16",
            "ru": "Ответ: 16",
            "en": "Answer: 16"
          }
        ],
        "_src": "pass-0311-ws"
      }
    ],
    "ai": [
      {
        "id": "a1",
        "level": 1,
        "label": "A1",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`int a = 7;`\n`int b = 2;`\n`System.out.println(a / b);`",
          "ru": "Что будет напечатано?\n`int a = 7;`\n`int b = 2;`\n`System.out.println(a / b);`",
          "en": "What is printed?\n`int a = 7;`\n`int b = 2;`\n`System.out.println(a / b);`"
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "שני המשתנים `int`.",
            "ru": "Обе переменные `int`.",
            "en": "Both variables are `int`."
          },
          {
            "he": "7 / 2 = 3.5, אבל בשלמים השבר נזרק.",
            "ru": "7 / 2 = 3.5, но у целых дробь отбрасывается.",
            "en": "7 / 2 = 3.5, but with whole numbers the fraction is dropped."
          }
        ],
        "solution": [
          "7 / 2 = 3.5",
          {
            "he": "חילוק בשלמים: 3",
            "ru": "Целочисленное деление: 3",
            "en": "Integer division: 3"
          }
        ]
      },
      {
        "id": "a2",
        "level": 1,
        "label": "A2",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`System.out.println(7 % 3);`",
          "ru": "Что будет напечатано?\n`System.out.println(7 % 3);`",
          "en": "What is printed?\n`System.out.println(7 % 3);`"
        },
        "answer": {
          "value": "1"
        },
        "hints": [
          {
            "he": "כמה פעמים 3 נכנס ב-7, ומה נשאר?",
            "ru": "Сколько раз 3 помещается в 7, и что остаётся?",
            "en": "How many times does 3 fit into 7, and what is left?"
          }
        ],
        "solution": [
          "7 / 3 = 2",
          "2 * 3 = 6",
          "7 - 6 = 1",
          {
            "he": "תשובה: 1",
            "ru": "Ответ: 1",
            "en": "Answer: 1"
          }
        ]
      },
      {
        "id": "a3",
        "level": 1,
        "label": "A3",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`int x = 5;`\n`x++;`\n`x++;`\n`x--;`\n`System.out.println(x);`",
          "ru": "Что будет напечатано?\n`int x = 5;`\n`x++;`\n`x++;`\n`x--;`\n`System.out.println(x);`",
          "en": "What is printed?\n`int x = 5;`\n`x++;`\n`x++;`\n`x--;`\n`System.out.println(x);`"
        },
        "answer": {
          "value": "6"
        },
        "hints": [
          {
            "he": "`x++` מוסיף 1, `x--` מוריד 1.",
            "ru": "`x++` прибавляет 1, `x--` отнимает 1.",
            "en": "`x++` adds 1, `x--` subtracts 1."
          }
        ],
        "solution": [
          "x = 5",
          "x++  →  6",
          "x++  →  7",
          "x--  →  6",
          {
            "he": "תשובה: 6",
            "ru": "Ответ: 6",
            "en": "Answer: 6"
          }
        ]
      },
      {
        "id": "a4",
        "level": 2,
        "label": "A4",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`System.out.println(10 / 4 * 4);`",
          "ru": "Что будет напечатано?\n`System.out.println(10 / 4 * 4);`",
          "en": "What is printed?\n`System.out.println(10 / 4 * 4);`"
        },
        "answer": {
          "value": "8"
        },
        "hints": [
          {
            "he": "`/` ו-`*` באותה דרגה, לכן משמאל לימין: קודם `10 / 4`.",
            "ru": "`/` и `*` одного уровня, поэтому слева направо: сначала `10 / 4`.",
            "en": "`/` and `*` have the same level, so left to right: first `10 / 4`."
          },
          {
            "he": "`10 / 4` בשלמים הוא 2, לא 2.5.",
            "ru": "`10 / 4` у целых — это 2, а не 2.5.",
            "en": "`10 / 4` with whole numbers is 2, not 2.5."
          }
        ],
        "solution": [
          "10 / 4 = 2",
          "2 * 4 = 8",
          {
            "he": "תשובה: 8 (ולא 10 — השבר הלך לאיבוד בחילוק)",
            "ru": "Ответ: 8 (а не 10 — дробь потерялась при делении)",
            "en": "Answer: 8 (not 10 — the fraction was lost in the division)"
          }
        ]
      },
      {
        "id": "a5",
        "level": 2,
        "label": "A5",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`double d = 7 / 2;`\n`System.out.println(d);`",
          "ru": "Что будет напечатано?\n`double d = 7 / 2;`\n`System.out.println(d);`",
          "en": "What is printed?\n`double d = 7 / 2;`\n`System.out.println(d);`"
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "מה מחושב קודם: החילוק או השמירה ב-`double`?",
            "ru": "Что считается раньше: деление или запись в `double`?",
            "en": "What happens first: the division or storing into `double`?"
          },
          {
            "he": "`7 / 2` הם שני `int`, אז התוצאה 3. רק אחר כך היא נשמרת ב-`double`.",
            "ru": "`7 / 2` — два `int`, поэтому результат 3. Только потом он записывается в `double`.",
            "en": "`7 / 2` is two `int` values, so the result is 3. Only then is it stored in a `double`."
          }
        ],
        "solution": [
          "7 / 2 = 3   (int)",
          "d = 3.0",
          {
            "he": "יודפס `3.0`",
            "ru": "Напечатается `3.0`",
            "en": "`3.0` is printed"
          }
        ]
      },
      {
        "id": "a6",
        "level": 2,
        "label": "A6",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`int x = 10;`\n`x += 3;`\n`x %= 4;`\n`System.out.println(x);`",
          "ru": "Что будет напечатано?\n`int x = 10;`\n`x += 3;`\n`x %= 4;`\n`System.out.println(x);`",
          "en": "What is printed?\n`int x = 10;`\n`x += 3;`\n`x %= 4;`\n`System.out.println(x);`"
        },
        "answer": {
          "value": "1"
        },
        "hints": [
          {
            "he": "קודם `x += 3`, אחר כך `x %= 4` על הערך החדש.",
            "ru": "Сначала `x += 3`, потом `x %= 4` от нового значения.",
            "en": "First `x += 3`, then `x %= 4` on the new value."
          }
        ],
        "solution": [
          "x = 10",
          "x += 3  →  x = 13",
          "x %= 4  →  13 % 4",
          "13 = 3 * 4 + 1",
          "x = 1",
          {
            "he": "תשובה: 1",
            "ru": "Ответ: 1",
            "en": "Answer: 1"
          }
        ]
      },
      {
        "id": "a7",
        "level": 2,
        "label": "A7",
        "kind": "number",
        "text": {
          "he": "מה יודפס? (התו `'a'` הוא מספר 97)\n`char c = 'a';`\n`int k = c + 2;`\n`System.out.println(k);`",
          "ru": "Что будет напечатано? (символ `'a'` — номер 97)\n`char c = 'a';`\n`int k = c + 2;`\n`System.out.println(k);`",
          "en": "What is printed? (the character `'a'` is number 97)\n`char c = 'a';`\n`int k = c + 2;`\n`System.out.println(k);`"
        },
        "answer": {
          "value": "99"
        },
        "hints": [
          {
            "he": "הפעם התוצאה נשמרת ב-`int`, לא ב-`char`.",
            "ru": "На этот раз результат хранится в `int`, а не в `char`.",
            "en": "This time the result is stored in an `int`, not a `char`."
          }
        ],
        "solution": [
          "'a' = 97",
          "97 + 2 = 99",
          {
            "he": "k הוא `int`, לכן מודפס המספר 99 (ולא האות c)",
            "ru": "k — это `int`, поэтому печатается число 99 (а не буква c)",
            "en": "k is an `int`, so the number 99 is printed (not the letter c)"
          }
        ]
      },
      {
        "id": "a8",
        "level": 2,
        "label": "A8",
        "kind": "text",
        "text": {
          "he": "מה תדפיס השורה? (כתבו בדיוק את מה שיופיע על המסך)\n`System.out.println(\"Sum: \" + 2 + 3);`",
          "ru": "Что напечатает строка? (напиши точно то, что появится на экране)\n`System.out.println(\"Sum: \" + 2 + 3);`",
          "en": "What does this line print? (write exactly what appears on the screen)\n`System.out.println(\"Sum: \" + 2 + 3);`"
        },
        "answer": {
          "accept": [
            "Sum: 23",
            "Sum:23"
          ]
        },
        "hints": [
          {
            "he": "Java מחשבת משמאל לימין. מה יוצא מ-`\"Sum: \" + 2`?",
            "ru": "Java считает слева направо. Что получится из `\"Sum: \" + 2`?",
            "en": "Java works left to right. What is `\"Sum: \" + 2`?"
          },
          {
            "he": "טקסט ועוד מספר הם טקסט. אז גם ה-3 רק נדבק לסוף.",
            "ru": "Текст плюс число — это текст. Значит, 3 тоже просто приклеится в конец.",
            "en": "Text plus a number is text. So the 3 is also just glued to the end."
          }
        ],
        "solution": [
          "\"Sum: \" + 2  →  \"Sum: 2\"",
          "\"Sum: 2\" + 3  →  \"Sum: 23\"",
          {
            "he": "כדי לקבל 5 צריך סוגריים: `\"Sum: \" + (2 + 3)`",
            "ru": "Чтобы получить 5, нужны скобки: `\"Sum: \" + (2 + 3)`",
            "en": "To get 5 you need brackets: `\"Sum: \" + (2 + 3)`"
          }
        ]
      },
      {
        "id": "a9",
        "level": 3,
        "label": "A9",
        "kind": "number",
        "text": {
          "he": "מה יודפס?\n`double avg = (double) (7 / 2);`\n`System.out.println(avg);`",
          "ru": "Что будет напечатано?\n`double avg = (double) (7 / 2);`\n`System.out.println(avg);`",
          "en": "What is printed?\n`double avg = (double) (7 / 2);`\n`System.out.println(avg);`"
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "מה בתוך הסוגריים מחושב קודם?",
            "ru": "Что внутри скобок считается первым?",
            "en": "What inside the brackets is calculated first?"
          },
          {
            "he": "`7 / 2` הוא חילוק בשלמים. ה-`(double)` מגיע מאוחר מדי.",
            "ru": "`7 / 2` — целочисленное деление. `(double)` приходит слишком поздно.",
            "en": "`7 / 2` is integer division. The `(double)` comes too late."
          }
        ],
        "solution": [
          "7 / 2 = 3   (int)",
          "(double) 3 = 3.0",
          {
            "he": "יודפס `3.0`. הנכון: `(double) 7 / 2` → 3.5",
            "ru": "Напечатается `3.0`. Правильно: `(double) 7 / 2` → 3.5",
            "en": "`3.0` is printed. Correct: `(double) 7 / 2` → 3.5"
          }
        ]
      },
      {
        "id": "a10",
        "level": 3,
        "label": "A10",
        "kind": "number",
        "text": {
          "he": "סכום הספרות של 5084. מה יודפס?\n`int n = 5084;`\n`int s = 0;`\n`s += n % 10;  n /= 10;`\n`s += n % 10;  n /= 10;`\n`s += n % 10;  n /= 10;`\n`s += n;`\n`System.out.println(s);`",
          "ru": "Сумма цифр 5084. Что будет напечатано?\n`int n = 5084;`\n`int s = 0;`\n`s += n % 10;  n /= 10;`\n`s += n % 10;  n /= 10;`\n`s += n % 10;  n /= 10;`\n`s += n;`\n`System.out.println(s);`",
          "en": "The digit sum of 5084. What is printed?\n`int n = 5084;`\n`int s = 0;`\n`s += n % 10;  n /= 10;`\n`s += n % 10;  n /= 10;`\n`s += n % 10;  n /= 10;`\n`s += n;`\n`System.out.println(s);`"
        },
        "answer": {
          "value": "17"
        },
        "hints": [
          {
            "he": "כמו 736 מהשיעור, אבל עם 4 ספרות. שימו לב לספרה 0.",
            "ru": "Как 736 с урока, но с 4 цифрами. Обрати внимание на цифру 0.",
            "en": "Like 736 from the lesson, but with 4 digits. Watch out for the digit 0."
          },
          {
            "he": "עקבו אחרי n: 5084 → 508 → 50 → 5.",
            "ru": "Следи за n: 5084 → 508 → 50 → 5.",
            "en": "Track n: 5084 → 508 → 50 → 5."
          }
        ],
        "solution": [
          "n = 5084,  s = 0",
          "s += 4  →  s = 4,   n = 508",
          "s += 8  →  s = 12,  n = 50",
          "s += 0  →  s = 12,  n = 5",
          "s += 5  →  s = 17",
          {
            "he": "תשובה: 17 (5 + 0 + 8 + 4)",
            "ru": "Ответ: 17 (5 + 0 + 8 + 4)",
            "en": "Answer: 17 (5 + 0 + 8 + 4)"
          }
        ]
      },
      {
        "id": "a11",
        "level": 3,
        "label": "A11",
        "kind": "text",
        "text": {
          "he": "מה יודפס? (כתבו את שתי השורות, עם רווח ביניהן)\n`int x = 5;`\n`System.out.println(x++);`\n`System.out.println(x);`",
          "ru": "Что будет напечатано? (напиши обе строки через пробел)\n`int x = 5;`\n`System.out.println(x++);`\n`System.out.println(x);`",
          "en": "What is printed? (write both lines, separated by a space)\n`int x = 5;`\n`System.out.println(x++);`\n`System.out.println(x);`"
        },
        "answer": {
          "accept": [
            "5 6"
          ]
        },
        "hints": [
          {
            "he": "`x++` בתוך `println`: קודם מדפיס, אחר כך מגדיל.",
            "ru": "`x++` внутри `println`: сначала печатает, потом увеличивает.",
            "en": "`x++` inside `println`: it prints first, then adds 1."
          }
        ],
        "solution": [
          "x = 5",
          {
            "he": "שורה 1: מודפס הערך הישן 5, ואז x = 6",
            "ru": "Строка 1: печатается старое значение 5, потом x = 6",
            "en": "Line 1: the old value 5 is printed, then x = 6"
          },
          {
            "he": "שורה 2: מודפס 6",
            "ru": "Строка 2: печатается 6",
            "en": "Line 2: 6 is printed"
          },
          {
            "he": "תשובה: 5 6. בגלל הבלבול הזה המרצה המליץ לכתוב `x++;` בשורה נפרדת.",
            "ru": "Ответ: 5 6. Из-за такой путаницы преподаватель советовал писать `x++;` отдельной строкой.",
            "en": "Answer: 5 6. Because of this confusion the teacher recommended writing `x++;` on its own line."
          }
        ]
      },
      {
        "id": "a12",
        "level": 3,
        "label": "A12",
        "kind": "text",
        "text": {
          "he": "125 דקות. מה יודפס?\n`int total = 125;`\n`System.out.println(total / 60 + \" h \" + total % 60 + \" min\");`",
          "ru": "125 минут. Что будет напечатано?\n`int total = 125;`\n`System.out.println(total / 60 + \" h \" + total % 60 + \" min\");`",
          "en": "125 minutes. What is printed?\n`int total = 125;`\n`System.out.println(total / 60 + \" h \" + total % 60 + \" min\");`"
        },
        "answer": {
          "accept": [
            "2 h 5 min"
          ]
        },
        "hints": [
          {
            "he": "`/` ו-`%` מחושבים לפני החיבור עם הטקסט.",
            "ru": "`/` и `%` считаются раньше, чем склейка с текстом.",
            "en": "`/` and `%` are calculated before joining with the text."
          },
          {
            "he": "`125 / 60 = 2`, `125 % 60 = 5`.",
            "ru": "`125 / 60 = 2`, `125 % 60 = 5`.",
            "en": "`125 / 60 = 2`, `125 % 60 = 5`."
          }
        ],
        "solution": [
          "125 / 60 = 2",
          "125 % 60 = 125 - 120 = 5",
          "2 + \" h \" + 5 + \" min\"",
          "→  \"2 h 5 min\"",
          {
            "he": "תשובה: 2 h 5 min",
            "ru": "Ответ: 2 h 5 min",
            "en": "Answer: 2 h 5 min"
          }
        ]
      }
    ]
  }
};

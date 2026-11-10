/* Lesson computer-2026-10-22 (Intro to Computers): computer structure and binary numbers. Format: see the comment at the top of data/lessons/math-2026-11-01.js. All conversions are generated and checked with parseInt / toString. */
window.LESSONS = window.LESSONS || {};
window.LESSONS["computer-2026-10-22"] = {
  "id": "computer-2026-10-22",
  "subject": "computer",
  "date": "2026-10-22",
  "title": {
    "he": "מבנה המחשב ומספרים בינאריים",
    "ru": "Устройство компьютера и двоичные числа",
    "en": "Computer structure and binary numbers"
  },
  "summary": {
    "he": "רכיבי המחשב והמעבד, פירמידת הזיכרון, ושלוש שיטות: מבסיס 10 לבסיס 2 (חלוקה ב־2 ושיטה טבלאית) ומבסיס 2 לבסיס 10.",
    "ru": "Устройство компьютера и процессора, пирамида памяти и три метода: из десятичной в двоичную (деление на 2 и таблица весов) и из двоичной в десятичную.",
    "en": "Computer and CPU parts, the memory pyramid, and three methods: base 10 to base 2 (division by 2 and the table method) and base 2 to base 10."
  },
  "timeline": [
    { "why": {"he": "למה הסדר הזה? כל נושא נשען על הקודם. בסיסים (0 ו-1) הם השפה של המחשב. שערים לוגיים בונים מ-0 ו-1 החלטות. משערים בונים רכיבים כמו מחבר (ADDER). ואסמבלר הוא הפקודות שהמעבד מבין ישירות. בסוף הקורס רואים את כל הדרך מהחשמל עד התוכנה.", "ru": "Почему такой порядок? Каждая тема стоит на предыдущей. Системы счисления (0 и 1) — язык компьютера. Логические вентили делают из 0 и 1 решения. Из вентилей собирают детали вроде сумматора (ADDER). А ассемблер — команды, которые процессор понимает напрямую. К концу курса виден весь путь от тока до программы.", "en": "Why this order? Each topic rests on the previous one. Number bases (0 and 1) are the computer's language. Logic gates turn 0 and 1 into decisions. Gates build parts like an ADDER. And assembly is the commands the processor understands directly. By the end you see the whole path from electricity to software."},
      "kind": "talk",
      "title": {
        "he": "מה יהיה בקורס",
        "ru": "Что будет в курсе",
        "en": "What the course covers"
      },
      "text": {
        "he": "תוכנית הקורס מהלוח:\n1. היכרות עם רכיבי החומרה של המחשב\n2. מערכות ספרתיות: בינארי, דצימלי, Hexa, Octal\n3. חיבור, חיסור וכפל בבסיסים שונים\n4. שערים לוגיים\n5. טבלאות אמת ומפות קרנו\n6. רכיבים כמו ADDER\n7. אסמבלר",
        "ru": "План курса с доски:\n1. Знакомство с железом компьютера\n2. Системы счисления: двоичная, десятичная, Hexa, Octal\n3. Сложение, вычитание и умножение в разных системах\n4. Логические вентили\n5. Таблицы истинности и карты Карно\n6. Компоненты вроде сумматора (ADDER)\n7. Ассемблер",
        "en": "The course plan from the board:\n1. Computer hardware components\n2. Number systems: binary, decimal, Hexa, Octal\n3. Addition, subtraction and multiplication in different bases\n4. Logic gates\n5. Truth tables and Karnaugh maps\n6. Components such as an ADDER\n7. Assembler"
      }
    },
    { "why": {"he": "זה המודל הפשוט ביותר, והוא מתאים לכל תוכנה: גם התוכניות שכותבים ב-Java קולטות (`Scanner`), מעבדות (לולאות, חישובים) ומוציאות (`println`). כשלא ברור מה תוכנית צריכה לעשות, שואלים שלוש שאלות: מה נכנס, מה קורה בפנים, מה יוצא.", "ru": "Это самая простая модель, и она подходит к любой программе: программы на Java тоже вводят (`Scanner`), обрабатывают (циклы, вычисления) и выводят (`println`). Если непонятно, что должна делать программа, задай три вопроса: что входит, что внутри, что выходит.", "en": "This is the simplest model, and it fits every program: Java programs also take input (`Scanner`), process (loops, calculations) and output (`println`). When it is unclear what a program should do, ask three questions: what goes in, what happens inside, what comes out."},
      "kind": "talk",
      "title": {
        "he": "המחשב כ\"קופסה\": קלט, עיבוד, פלט",
        "ru": "Компьютер как «коробка»: ввод, обработка, вывод",
        "en": "The computer as a \"box\": input, processing, output"
      },
      "text": {
        "he": "משהו נכנס, מעובד בפנים, ויוצאת תוצאה.\nקלט (input): מקלדת, עכבר, מיקרופון, מצלמת רשת.\nפלט (output): מסך, רמקולים, אוזניות.",
        "ru": "Что-то входит, внутри обрабатывается, выходит результат.\nВвод (input): клавиатура, мышь, микрофон, веб-камера.\nВывод (output): экран, колонки, наушники.",
        "en": "Something goes in, gets processed inside, and a result comes out.\nInput: keyboard, mouse, microphone, webcam.\nOutput: screen, speakers, headphones."
      }
    },
    { "why": {"he": "למה לוח אם? כל רכיב עושה דבר אחד, והם צריכים \"לדבר\" ביניהם. לוח האם הוא הכבישים שמחברים את כולם. טרנזיסטור הוא מתג זעיר בלי חלקים זזים: עובר זרם או לא — וזה בדיוק 1 או 0.", "ru": "Зачем материнская плата? Каждая деталь делает что-то одно, и им нужно «разговаривать». Материнская плата — это дороги, которые соединяют всех. Транзистор — крошечный выключатель без движущихся частей: ток идёт или нет, и это ровно 1 или 0.", "en": "Why a motherboard? Each part does one thing, and they need to \"talk\". The motherboard is the roads connecting them all. A transistor is a tiny switch with no moving parts: current flows or not — exactly 1 or 0."},
      "kind": "talk",
      "title": {
        "he": "מה יש בתוך המחשב",
        "ru": "Что внутри компьютера",
        "en": "What is inside the computer"
      },
      "text": {
        "he": "לוח אם (כל הרכיבים מחוברים אליו), ספק כוח, כרטיס מסך, זיכרון, ו־CPU — יחידת העיבוד המרכזית. השבב עצמו בגודל של ציפורן. המעבד עובד בכך שזרם עובר בין מיליארדי טרנזיסטורים.",
        "ru": "Материнская плата (к ней подключено всё остальное), блок питания, видеокарта, память и CPU — центральный процессор. Сам кристалл размером с ноготь. Процессор работает тем, что ток переходит между миллиардами транзисторов.",
        "en": "Motherboard (everything connects to it), power supply, graphics card, memory, and the CPU — the central processing unit. The chip itself is the size of a fingernail. The CPU works by moving current between billions of transistors."
      }
    },
    { "why": {"he": "למה חדר נקי? הטרנזיסטורים קטנים פי אלפים מעובי שערה, ולכן גרגר אבק אחד מכסה אלפים מהם. binning מסביר למה יש דגמים שונים במחירים שונים: שבבים מאותה פרוסה יוצאים קצת שונים באיכות, והטובים יותר נמכרים כדגם מהיר ויקר יותר.", "ru": "Зачем чистая комната? Транзисторы в тысячи раз тоньше волоса, поэтому одна пылинка накрывает тысячи из них. Binning объясняет, почему есть разные модели по разной цене: чипы с одной пластины выходят чуть разными по качеству, и лучшие продают как более быструю и дорогую модель.", "en": "Why a clean room? Transistors are thousands of times thinner than a hair, so one speck of dust covers thousands of them. Binning explains why there are different models at different prices: chips from the same wafer come out slightly different in quality, and the better ones are sold as a faster, pricier model."},
      "kind": "talk",
      "title": {
        "he": "איך מייצרים מעבד",
        "ru": "Как делают процессор",
        "en": "How a CPU is made"
      },
      "text": {
        "he": "מחול מפיקים סיליקון ומכינים ממנו פרוסה עגולה ודקה (wafer). מהנדסים מתכננים איפה יהיו מיליארדי הטרנזיסטורים, ובליתוגרפיה חורטים את התוכנית על הפרוסה. הכול נעשה בחדרים נקיים — ריס אחד על הפרוסה הופך את השבב לפחת. בסוף חותכים את הפרוסה לשבבים, בודקים אותם וממיינים לפי איכות (binning).",
        "ru": "Из песка получают кремний и делают из него круглую тонкую пластину (wafer). Инженеры планируют, где будут миллиарды транзисторов, и литографией переносят план на пластину. Всё это в чистых комнатах — одна ресница на пластине отправляет чип в брак. В конце пластину режут на чипы, проверяют и сортируют по качеству (binning).",
        "en": "Silicon is made from sand and turned into a thin round slice (a wafer). Engineers plan where billions of transistors go, and lithography puts the plan onto the wafer. All of this happens in clean rooms — a single eyelash on the wafer makes the chip a reject. Finally the wafer is cut into chips, which are tested and sorted by quality (binning)."
      }
    },
    { "why": {"he": "למה מחלקים לחלקים? כמו במטבח של מסעדה: אחד מבשל (ALU), אחד מחלק עבודה (CU), אחד מביא מצרכים מהמחסן (MMU). Pipeline הוא כמו פס ייצור — בזמן שפקודה אחת מתבצעת, הבאה כבר נקראת, ולכן הכול מהיר יותר בלי להגביר את הקצב של כל צעד.", "ru": "Почему процессор делят на части? Как кухня ресторана: один готовит (ALU), один раздаёт работу (CU), один приносит продукты со склада (MMU). Pipeline — как конвейер: пока одна команда выполняется, следующая уже читается, поэтому всё быстрее, хотя каждый шаг не ускорили.", "en": "Why split the CPU into parts? Like a restaurant kitchen: one cooks (ALU), one hands out work (CU), one fetches supplies from the store (MMU). The pipeline is like an assembly line: while one command runs, the next is already being read, so everything is faster without speeding up any single step."},
      "kind": "talk",
      "title": {
        "he": "מבנה ה־CPU",
        "ru": "Устройство CPU",
        "en": "Inside the CPU"
      },
      "text": {
        "he": "`ALU` (Arithmetic Logic Unit): חשבון (+ − × ÷) ולוגיקה (AND, OR, XOR, NOT).\n`CU` (Control Unit): יחידת הבקרה, מחליטה איזו יחידה עושה מה.\nיחידה למספרים עשרוניים (עם נקודה, כמו 0.123).\n`Pipeline`: מאיץ את העבודה — המעבד מכין את הצעדים הבאים מראש.\n`MMU` (Memory Management Unit): מעבירה נתונים בין המעבד לזיכרון.",
        "ru": "`ALU` (Arithmetic Logic Unit): арифметика (+ − × ÷) и логика (AND, OR, XOR, NOT).\n`CU` (Control Unit): блок управления, решает, какой блок что делает.\nБлок дробных чисел (с точкой, как 0.123).\n`Pipeline`: ускоряет работу — процессор заранее готовит следующие шаги.\n`MMU` (Memory Management Unit): переносит данные между процессором и памятью.",
        "en": "`ALU` (Arithmetic Logic Unit): arithmetic (+ − × ÷) and logic (AND, OR, XOR, NOT).\n`CU` (Control Unit): decides which unit does what.\nA unit for decimal (floating-point) numbers like 0.123.\n`Pipeline`: speeds things up — the CPU prepares the next steps in advance.\n`MMU` (Memory Management Unit): moves data between the CPU and memory."
      }
    },
    { "kind": "tip",
      "title": {"he": "ליבות: פיזיות ולוגיות", "ru": "Ядра: физические и логические", "en": "Cores: physical and logical"},
      "text": {
        "he": "במנהל המשימות (Task Manager → Performance → CPU) יש שתי שורות: `Cores` — ליבות פיזיות, ו־`Logical processors` — מעבדים לוגיים. ב\"12 ליבות\" שרואים לפעמים מדובר במעבדים לוגיים.\nבהרבה מעבדים ליבה פיזית אחת מריצה שני חוטי עבודה (Hyper-Threading), ולכן המספר הלוגי גדול פי 2.",
        "ru": "В диспетчере задач (Task Manager → Performance → CPU) две строки: `Cores` — физические ядра и `Logical processors` — логические процессоры. «12 ядер», которые часто видят, — это логические.\nВо многих процессорах одно физическое ядро ведёт два потока работы (Hyper-Threading), поэтому логических в 2 раза больше.",
        "en": "In Task Manager (Performance → CPU) there are two lines: `Cores` (physical cores) and `Logical processors`. The \"12 cores\" people often see are logical ones.\nOn many CPUs one physical core runs two threads (Hyper-Threading), so there are twice as many logical processors."
      },
      "why": {
        "he": "למה זה חשוב? ליבה לוגית היא לא ליבה שלמה: שני חוטים חולקים את אותו ALU. היא עוזרת כשליבה מחכה לנתונים מהזיכרון, אבל לא מכפילה את המהירות פי 2.",
        "ru": "Почему это важно? Логическое ядро — не целое ядро: два потока делят один и тот же ALU. Это помогает, пока ядро ждёт данные из памяти, но скорость не удваивается.",
        "en": "Why it matters: a logical core is not a whole core; two threads share the same ALU. It helps while the core waits for data from memory, but it does not double the speed."
      } },
    { "why": {"he": "למה פירמידה ולא סוג זיכרון אחד? אין זיכרון שהוא גם מהיר, גם גדול וגם זול. לכן שמים מעט זיכרון מהיר מאוד ליד המעבד, ויותר ויותר זיכרון איטי וזול רחוק ממנו. דוגמה מהחיים: עט ביד (רגיסטר), קלמר על השולחן (cache), תיק (RAM), ארון בבית (דיסק).", "ru": "Почему пирамида, а не один вид памяти? Не бывает памяти, которая одновременно быстрая, большая и дешёвая. Поэтому рядом с процессором ставят немного очень быстрой памяти, а дальше — всё больше медленной и дешёвой. Пример из жизни: ручка в руке (регистр), пенал на столе (кэш), сумка (RAM), шкаф дома (диск).", "en": "Why a pyramid and not one kind of memory? No memory is fast, big and cheap at once. So a little very fast memory sits next to the processor, and more and more slow, cheap memory further away. A real-life picture: the pen in your hand (register), the pencil case on the desk (cache), your bag (RAM), the cupboard at home (disk)."},
      "kind": "board",
      "title": {
        "he": "פירמידת הזיכרון",
        "ru": "Пирамида памяти",
        "en": "The memory pyramid"
      },
      "text": {
        "he": "מלמעלה למטה:\nאוגרים (רגיסטרים) — בתוך המעבד\nזיכרון L1\nזיכרון מטמון פנימי (L2)\nזיכרון מטמון חיצוני (L3)\nRAM — זיכרון ראשי\nזיכרון משני (דיסק)\nככל שעולים בפירמידה, הזיכרון מהיר יותר, קטן יותר ויקר יותר.",
        "ru": "Сверху вниз:\nрегистры — внутри процессора\nкэш L1\nвнутренний кэш (L2)\nвнешний кэш (L3)\nRAM — оперативная память\nвторичная память (диск)\nЧем выше в пирамиде, тем память быстрее, меньше и дороже.",
        "en": "From top to bottom:\nregisters — inside the CPU\nL1 cache\ninternal cache (L2)\nexternal cache (L3)\nRAM — main memory\nsecondary memory (disk)\nThe higher in the pyramid, the faster, smaller and more expensive the memory."
      }
    },
    { "why": {"he": "למה צריך דגלים? המעבד עושה חישוב, והתוכנית צריכה לדעת \"מה יצא\": האם התוצאה 0, האם היא לא נכנסה. במקום לבדוק את המספר מחדש, מסתכלים על ביט אחד. בדיוק על זה בנויים `if` ולולאות — באסמבלר נראה איך.", "ru": "Зачем флаги? Процессор что-то посчитал, а программе нужно знать «что вышло»: ноль ли результат, поместился ли он. Вместо того чтобы снова проверять число, смотрят на один бит. Именно на этом построены `if` и циклы — на ассемблере увидим как.", "en": "Why flags? The processor computed something, and the program needs to know \"what came out\": is the result 0, did it fit. Instead of checking the number again, it looks at one bit. That is exactly what `if` and loops are built on — we will see how in assembly."},
      "kind": "talk",
      "title": {
        "he": "אוגר הדגלים",
        "ru": "Регистр флагов",
        "en": "The flag register"
      },
      "text": {
        "he": "כל דגל הוא ביט אחד: 0 = הכול רגיל, 1 = קרה משהו מיוחד.\nגלישה (overflow): המערכת מצפה לשתי ספרות, אבל `55 + 55 = 110` — שלוש ספרות. הדגל עולה ל־1.\nאפס (zero): `1 − 1 = 0`. התוצאה 0, והדגל עולה ל־1.\nיש עוד 20–30 אוגרים; נלמד אותם עם אסמבלר.",
        "ru": "Каждый флаг — один бит: 0 = всё обычно, 1 = случилось что-то особенное.\nПереполнение (overflow): система ждёт две цифры, а `55 + 55 = 110` — три цифры. Флаг становится 1.\nНоль (zero): `1 − 1 = 0`. Результат 0, флаг становится 1.\nРегистров ещё 20–30; их пройдём вместе с ассемблером.",
        "en": "Each flag is one bit: 0 = normal, 1 = something special happened.\nOverflow: the system expects two digits, but `55 + 55 = 110` — three digits. The flag becomes 1.\nZero: `1 − 1 = 0`. The result is 0, so the flag becomes 1.\nThere are 20–30 more registers; we will meet them with assembler."
      }
    },
    { "why": {"he": "למה cache עוזר? תוכניות חוזרות על אותם דברים שוב ושוב (לולאה רצה על אותן פקודות). אם הן כבר קרובות, לא צריך ללכת בכל פעם ל-RAM הרחוק. ההבדל גדול: גישה ל-RAM איטית בעשרות מונים מגישה ל-L1.", "ru": "Чем помогает кэш? Программы повторяют одно и то же снова и снова (цикл бегает по тем же командам). Если они уже рядом, не нужно каждый раз ходить в далёкую RAM. Разница большая — обращение к RAM в десятки раз медленнее, чем к L1.", "en": "How does the cache help? Programs repeat the same things again and again (a loop runs over the same commands). If they are already close, there is no need to go to distant RAM every time. The gap is big — reaching RAM is tens of times slower than L1."},
      "kind": "talk",
      "title": {
        "he": "זיכרון מטמון (Cache)",
        "ru": "Кэш (cache)",
        "en": "Cache memory"
      },
      "text": {
        "he": "זיכרון מהיר בתוך המעבד או לידו. מחזיקים בו מה שצריך הרבה, למשל פקודות שכיחות כמו create, move, delete.\nL1 הכי קטן ומהיר, L2 גדול יותר, L3 עוד יותר.\nאפשר לראות אצלכם: `Ctrl + Shift + Esc` ← מנהל המשימות ← ביצועים (Performance) ← CPU. למטה מופיעים L1, L2, L3.",
        "ru": "Быстрая память внутри процессора или рядом с ним. В ней держат то, что нужно часто, например частые команды вроде create, move, delete.\nL1 самый маленький и быстрый, L2 больше, L3 ещё больше.\nМожно посмотреть у себя: `Ctrl + Shift + Esc` → Диспетчер задач → Производительность (Performance) → ЦП. Внизу строки L1, L2, L3.",
        "en": "Fast memory inside or next to the CPU. It holds what is needed often, such as common commands like create, move, delete.\nL1 is the smallest and fastest, L2 is bigger, L3 bigger still.\nSee it yourself: `Ctrl + Shift + Esc` → Task Manager → Performance → CPU. L1, L2, L3 are listed at the bottom."
      }
    },
    { "why": {"he": "לא רק כסף: זיכרון מהיר גם תופס יותר מקום על השבב וצורך יותר חשמל. לכן ה-cache נמדד במגה-בייטים, וה-RAM בגיגה-בייטים.", "ru": "Не только деньги: быстрая память ещё занимает больше места на чипе и ест больше электричества. Поэтому кэш измеряют в мегабайтах, а RAM — в гигабайтах.", "en": "Not only money: fast memory also takes more room on the chip and uses more power. That is why cache is measured in megabytes and RAM in gigabytes."},
      "kind": "qa",
      "q": {
        "he": "למה לא עושים את כל הזיכרון מהיר כמו המטמון?",
        "ru": "Почему не делают всю память такой же быстрой, как кэш?",
        "en": "Why isn't all memory as fast as cache?"
      },
      "a": {
        "he": "כי הוא יקר מאוד. ככל שעולים בפירמידה, כל בייט יקר יותר.",
        "ru": "Потому что она очень дорогая. Чем выше в пирамиде, тем дороже каждый байт.",
        "en": "Because it is very expensive. The higher in the pyramid, the more each byte costs."
      }
    },
    { "why": {"he": "למה RAM נמחק בכיבוי? הוא שומר מידע בעזרת זרם חשמלי, ובלי זרם אין מה לשמור. הדיסק שומר בדרך אחרת, שלא צריכה זרם. זיכרון וירטואלי הוא פשרה: כשה-RAM מלא, מעבירים חלק לדיסק. זה עובד, אבל הדיסק איטי בהרבה — ולכן המחשב \"נתקע\" כשפתוחים יותר מדי דברים.", "ru": "Почему RAM стирается при выключении? Она держит данные с помощью тока, а без тока держать нечем. Диск хранит по-другому, ему ток не нужен. Виртуальная память — компромисс: когда RAM полна, часть переносят на диск. Это работает, но диск гораздо медленнее, поэтому компьютер «тормозит», когда открыто слишком много.", "en": "Why is RAM wiped on shutdown? It holds data using electric current, and without current there is nothing to hold it. The disk stores data another way that needs no power. Virtual memory is a compromise: when RAM is full, part of it moves to disk. It works, but the disk is much slower, so the computer \"lags\" when too much is open."},
      "kind": "talk",
      "title": {
        "he": "RAM, זיכרון וירטואלי וזיכרון משני",
        "ru": "RAM, виртуальная и вторичная память",
        "en": "RAM, virtual memory and secondary memory"
      },
      "text": {
        "he": "RAM (זיכרון ראשי): כל מה שפתוח עכשיו — Word, פייסבוק, טיקטוק. כשהחשמל נופל או מכבים את המחשב, הוא מתרוקן. לכן שומרים ועושים גיבויים.\nכשפותחים יותר מדי, ה־RAM מתמלא והמכשיר נתקע. טיפ: ריסטארט פעם בשבוע מנקה את ה־RAM.\nזיכרון וירטואלי: חלק מהדיסק הקשיח שמשמש המשך ל־RAM. פייסבוק לא עולה כולו ל־RAM: מה שמשתמשים בו כל הזמן נמצא ב־RAM, ופעולה נדירה (להוסיף תמונה לסטורי) יושבת בזיכרון הווירטואלי ועולה כשצריך.\nזיכרון משני: הדיסק — שומר קבצים גם אחרי כיבוי.",
        "ru": "RAM (оперативная память): всё, что открыто сейчас — Word, Facebook, TikTok. Пропало электричество или выключили компьютер — она очистилась. Поэтому сохраняем и делаем резервные копии.\nКогда открыто слишком много, RAM переполняется и устройство тормозит. Совет: перезагрузка раз в неделю очищает RAM.\nВиртуальная память: часть жёсткого диска, которая служит продолжением RAM. Facebook не загружается в RAM целиком: то, чем пользуешься всё время, в RAM, а редкое действие (добавить фото в сторис) лежит в виртуальной памяти и поднимается, когда нужно.\nВторичная память: диск — хранит файлы и после выключения.",
        "en": "RAM (main memory): everything open right now — Word, Facebook, TikTok. When the power goes or the computer is turned off, it is emptied. So save your work and keep backups.\nWhen too much is open, RAM fills up and the device gets stuck. Tip: restarting once a week clears the RAM.\nVirtual memory: part of the hard disk used as an extension of RAM. Facebook doesn't load into RAM entirely: what you use all the time is in RAM, and a rare action (adding a photo to a story) sits in virtual memory and is loaded when needed.\nSecondary memory: the disk — it keeps files after power-off."
      }
    },
    { "why": {"he": "למה זה חוזר? כי כל קוד שנכתוב רץ על הזיכרון הזה: משתנה ב-Java יושב ב-RAM, ו-SQL Server שומר נתונים בדיסק ומחזיק את מה שבשימוש ב-RAM. מי שמבין את הפירמידה מבין למה תוכנית אחת מהירה ואחרת איטית.", "ru": "Почему это вернётся? Любой код, который мы пишем, работает на этой памяти: переменная в Java лежит в RAM, а SQL Server хранит данные на диске и держит нужное в RAM. Кто понимает пирамиду, понимает, почему одна программа быстрая, а другая медленная.", "en": "Why does this come back? Every program we write runs on this memory: a Java variable sits in RAM, and SQL Server keeps data on disk and holds what is in use in RAM. Whoever understands the pyramid understands why one program is fast and another slow."},
      "kind": "qa",
      "q": {
        "he": "נעבור על זה (זיכרון, אוגרים) עוד פעם?",
        "ru": "Мы будем проходить это (память, регистры) ещё раз?",
        "en": "Will we go over this (memory, registers) again?"
      },
      "a": {
        "he": "כן. זה יחזור לאורך כל השנתיים. צריך לדעת מה זה RAM, אוגרים וזיכרון.",
        "ru": "Да. Это будет встречаться все два года. Нужно знать, что такое RAM, регистры и память.",
        "en": "Yes. It comes back throughout the two years. You need to know what RAM, registers and memory are."
      }
    },
    { "why": {"he": "למה דווקא 8? זו בחירה היסטורית שהפכה לסטנדרט: 8 ביטים נותנים 256 צירופים, וזה מספיק לכל האותיות, הספרות והסימנים באנגלית. במחשב \"קילו\" הוא לרוב 1024 ולא 1000 (כי `2¹⁰ = 1024`), ולכן דיסק של 1 TB מופיע ב-Windows כ-931 GB בערך.", "ru": "Почему именно 8? Это историческое решение, которое стало стандартом: 8 бит дают 256 сочетаний, этого хватает на все английские буквы, цифры и знаки. В компьютере «кило» часто 1024, а не 1000 (потому что `2¹⁰ = 1024`), поэтому диск на 1 TB в Windows показывается примерно как 931 GB.", "en": "Why exactly 8? A historical choice that became the standard: 8 bits give 256 combinations, enough for all English letters, digits and signs. In computers \"kilo\" is often 1024, not 1000 (because `2¹⁰ = 1024`), so a 1 TB disk shows in Windows as about 931 GB."},
      "kind": "talk",
      "title": {
        "he": "ביט ובייט",
        "ru": "Бит и байт",
        "en": "Bit and byte"
      },
      "text": {
        "he": "ביט הוא היחידה הקטנה ביותר: ספרה אחת, 0 או 1. 0 = אין זרם, 1 = יש זרם.\n8 ביטים = בייט אחד. לכן כותבים מספרים לעתים קרובות ב־8 ביטים וממלאים אפסים משמאל: `5 = 00000101`.\nכמו מיליגרם, גרם וקילו — מיחידות קטנות בונים גדולות (קילובייט, מגהבייט, גיגהבייט).",
        "ru": "Бит — самая маленькая единица: одна цифра, 0 или 1. 0 = тока нет, 1 = ток есть.\n8 бит = 1 байт. Поэтому числа часто пишут восемью битами, а слева дописывают нули: `5 = 00000101`.\nКак миллиграмм, грамм и килограмм — из маленьких единиц складываются большие (килобайт, мегабайт, гигабайт).",
        "en": "A bit is the smallest unit: one digit, 0 or 1. 0 = no current, 1 = current.\n8 bits = 1 byte. So numbers are often written with 8 bits, filling zeros on the left: `5 = 00000101`.\nLike milligrams, grams and kilos — big units are built from small ones (kilobyte, megabyte, gigabyte)."
      }
    },
    { "why": {"he": "למה המחשב לא עובד בבסיס 10? כי לטרנזיסטור קל להבדיל רק בין שני מצבים — יש זרם או אין. להבדיל בין 10 רמות זרם שונות זה הרבה יותר קשה ויותר טעויות. ולמה תמיד לכתוב את הבסיס? כי `10` לבד יכול להיות עשר, שתיים או שש-עשרה.", "ru": "Почему компьютер не работает в десятичной? Транзистору легко отличать только два состояния — ток есть или нет. Различать 10 разных уровней тока гораздо сложнее, и ошибок больше. А почему всегда писать основание? Потому что `10` само по себе может быть и десятью, и двумя, и шестнадцатью.", "en": "Why does the computer not work in base 10? A transistor can easily tell only two states apart — current or none. Telling 10 different current levels apart is much harder and causes more errors. And why always write the base? Because `10` alone could be ten, two or sixteen."},
      "kind": "talk",
      "title": {
        "he": "בסיס של שיטת ספירה",
        "ru": "Основание системы счисления",
        "en": "The base of a number system"
      },
      "text": {
        "he": "בסיס = כמה ספרות שונות יש בשיטה.\nעשרוני (דצימלי), בסיס 10: הספרות 0–9. אחרי 9 כותבים 10, אחר כך 10–19, 20–29.\nבינארי, בסיס 2: רק 0 ו־1. סופרים `0, 1, 10, 11, 100…`\nאת הבסיס כותבים קטן למטה מימין: `10₁₀` זה עשר, ו־`10₂` זה שתיים. לכן תמיד כותבים את הבסיס.",
        "ru": "Основание = сколько разных цифр в системе.\nДесятичная, основание 10: цифры 0–9. После 9 пишем 10, дальше 10–19, 20–29.\nДвоичная, основание 2: только 0 и 1. Считаем `0, 1, 10, 11, 100…`\nОснование пишут маленьким внизу справа: `10₁₀` — это десять, а `10₂` — это два. Поэтому основание пишем всегда.",
        "en": "Base = how many different digits the system has.\nDecimal, base 10: digits 0–9. After 9 we write 10, then 10–19, 20–29.\nBinary, base 2: only 0 and 1. We count `0, 1, 10, 11, 100…`\nThe base is written small at the bottom right: `10₁₀` is ten, and `10₂` is two. So always write the base."
      }
    },
    { "why": {"he": "זו הסכמה, אבל הגיונית: 0 הוא \"כלום\", ו\"כלום זרם\" הוא כבוי. העיקר שכולם משתמשים באותה הסכמה — אחרת מחשבים לא היו מבינים זה את זה.", "ru": "Это договорённость, но логичная: 0 — это «ничего», а «ничего тока» — выключено. Главное, что все пользуются одной и той же договорённостью, иначе компьютеры не понимали бы друг друга.", "en": "It is a convention, but a logical one: 0 is \"nothing\", and \"no current\" is off. What matters is that everyone uses the same convention, otherwise computers could not understand one another."},
      "kind": "qa",
      "q": {
        "he": "למה 0 זה \"כבוי\" ו־1 \"דולק\"?",
        "ru": "Почему 0 — «выключено», а 1 — «включено»?",
        "en": "Why is 0 \"off\" and 1 \"on\"?"
      },
      "a": {
        "he": "זו מוסכמה שכל העולם קיבל.",
        "ru": "Это договорённость, которую принял весь мир.",
        "en": "It is a convention the whole world agreed on."
      }
    },
    { "why": {"he": "למה המשקלים הם 4, 2, 1? זה כמו בעשרוני: ב-`375` יש 3 מאות, 7 עשרות, 5 אחדות — כל מקום גדול פי 10 מהקודם. בבינארי כל מקום גדול פי 2. כדאי לזכור את הטבלה 0–7 בעל פה: עליה בנויים בהמשך אוקטלי והקסה.", "ru": "Почему веса 4, 2, 1? Как в десятичной: в `375` — 3 сотни, 7 десятков, 5 единиц, каждое место в 10 раз больше предыдущего. В двоичной каждое место больше в 2 раза. Таблицу 0–7 стоит запомнить: на ней дальше строятся восьмеричная и hexa.", "en": "Why are the weights 4, 2, 1? Like in decimal: `375` has 3 hundreds, 7 tens, 5 ones — each place is 10 times the previous. In binary each place is 2 times bigger. Learn the 0–7 table by heart: octal and hexa build on it later."},
      "kind": "board",
      "title": {
        "he": "טבלת המרה מבסיס 10 לבסיס 2",
        "ru": "Таблица перевода из десятичной в двоичную",
        "en": "Conversion table from base 10 to base 2"
      },
      "text": {
        "he": "מעל העמודות המשקלים `2² 2¹ 2⁰` (כלומר 4, 2, 1). לכל מספר מחפשים אילו משקלים נותנים אותו יחד: משקל שצריך = 1, משקל שלא צריך = 0. על הלוח מולאו השורות 0–3; את 4–7 ממשיכים באותה דרך:",
        "ru": "Над столбцами веса `2² 2¹ 2⁰` (то есть 4, 2, 1). Для каждого числа ищем, какие веса вместе его дают: нужный вес = 1, ненужный = 0. На доске заполнили строки 0–3; строки 4–7 заполняются так же:",
        "en": "Above the columns are the weights `2² 2¹ 2⁰` (that is 4, 2, 1). For each number, find which weights add up to it: a needed weight = 1, an unneeded one = 0. Rows 0–3 were filled on the board; rows 4–7 follow the same way:"
      },
      "math": [
        "0 = 000",
        "1 = 001",
        "2 = 010",
        "3 = 011",
        "4 = 100",
        "5 = 101",
        "6 = 110",
        "7 = 111"
      ]
    },
    { "why": {"he": "למה זה עובד? כל ספרה אומרת \"כמה פעמים לקחת את המשקל שלה\". ב-0 לא לוקחים, ב-1 לוקחים פעם אחת. לכן אפשר גם בקיצור — לחבר רק את המשקלים שמעליהם 1.", "ru": "Почему это работает? Каждая цифра говорит «сколько раз взять её вес». При 0 не берём, при 1 берём один раз. Поэтому можно короче — сложить только веса, над которыми стоит 1.", "en": "Why does it work? Each digit says \"how many times to take its weight\". With 0 you take none, with 1 you take it once. So there is a shortcut — add only the weights that have a 1."},
      "kind": "board",
      "title": {
        "he": "מבסיס 2 לבסיס 10: `101₂`",
        "ru": "Из двоичной в десятичную: `101₂`",
        "en": "Base 2 to base 10: `101₂`"
      },
      "text": {
        "he": "האלגוריתם מהלוח: (1) מעל כל ספרה שמים את המשקל שלה, מימין: `2⁰, 2¹, 2²…` (2) מכפילים כל ספרה במשקל שלה. (3) מחברים.",
        "ru": "Алгоритм с доски: (1) над каждой цифрой ставим её вес, начиная справа: `2⁰, 2¹, 2²…` (2) каждую цифру умножаем на её вес. (3) всё складываем.",
        "en": "The algorithm from the board: (1) put each digit's weight above it, starting from the right: `2⁰, 2¹, 2²…` (2) multiply each digit by its weight. (3) add everything up."
      },
      "math": [
        "2² × 1 + 2¹ × 0 + 2⁰ × 1",
        "= 4 × 1 + 2 × 0 + 1 × 1",
        "= 4 + 0 + 1",
        "= 5"
      ]
    },
    { "why": {"he": "למה צריך שמות? כשמדברים על מספר בינארי ארוך, צריך דרך ברורה לומר \"הביט הזה\". ה-LSB מספר אם המספר זוגי (0) או אי-זוגי (1). ה-MSB נותן את הגודל — שינוי בו משנה את המספר הכי הרבה.", "ru": "Зачем названия? Когда говорят о длинном двоичном числе, нужно ясно сказать «вот этот бит». LSB говорит, чётное число (0) или нечётное (1). MSB даёт величину — его изменение меняет число сильнее всего.", "en": "Why names? When talking about a long binary number, you need a clear way to say \"this bit\". The LSB tells whether the number is even (0) or odd (1). The MSB gives the size — changing it changes the number the most."},
      "kind": "board",
      "title": {
        "he": "MSB ו־LSB: `21₁₀ = 10101₂`",
        "ru": "MSB и LSB: `21₁₀ = 10101₂`",
        "en": "MSB and LSB: `21₁₀ = 10101₂`"
      },
      "text": {
        "he": "MSB (Most Significant Bit) — הביט הכי שמאלי, עם המשקל הכי גדול. LSB (Least Significant Bit) — הביט הכי ימני, משקל 1. בדיקה:",
        "ru": "MSB (Most Significant Bit) — самый левый бит, с самым большим весом. LSB (Least Significant Bit) — самый правый бит, вес 1. Проверка:",
        "en": "MSB (Most Significant Bit) — the leftmost bit, with the biggest weight. LSB (Least Significant Bit) — the rightmost bit, weight 1. Check:"
      },
      "math": [
        "2⁴ × 1 + 2³ × 0 + 2² × 1 + 2¹ × 0 + 2⁰ × 1",
        "= 16 + 0 + 4 + 0 + 1",
        "= 21"
      ]
    },
    { "why": {"he": "אותו רעיון בבינארי: ב-`10101₂` הביט השמאלי שווה 16, והימני רק 1. טעות ב-MSB היא טעות של 16, טעות ב-LSB היא טעות של 1.", "ru": "Та же мысль в двоичной: в `10101₂` левый бит стоит 16, а правый только 1. Ошибка в MSB — это ошибка на 16, ошибка в LSB — на 1.", "en": "Same idea in binary: in `10101₂` the left bit is worth 16 and the right one only 1. A mistake in the MSB is off by 16; in the LSB, off by 1."},
      "kind": "tip",
      "title": {
        "he": "למה \"הכי משמעותי\"? דוגמת הרכב",
        "ru": "Почему «самый значимый»? Пример с машиной",
        "en": "Why \"most significant\"? The car example"
      },
      "text": {
        "he": "רכב עולה 213,400. המוכר יוריד בשקט משהו מימין (213,300), אבל על הנחה בספרה השמאלית הוא לא יסכים. הספרה השמאלית היא הכי משמעותית — וכך גם עם ביטים.",
        "ru": "Машина стоит 213 400. Продавец спокойно уберёт что-то справа (213 300), но на скидку в самой левой цифре не согласится. Левая цифра самая значимая — с битами так же.",
        "en": "A car costs 213,400. The seller will happily knock something off on the right (213,300), but not a discount in the leftmost digit. The leftmost digit is the most significant — the same goes for bits."
      }
    },
    { "why": {"he": "למה השארית היא ביט? כשמחלקים ב-2, השארית אומרת אם המספר זוגי — וזה בדיוק ה-LSB. אחר כך מחלקים את החלק השלם, ומקבלים את הביט הבא משמאל. לכן הביט הראשון שיוצא הוא הימני ביותר, וקוראים מלמטה למעלה.", "ru": "Почему остаток — это бит? При делении на 2 остаток говорит, чётное ли число, — а это ровно LSB. Потом делим целую часть и получаем следующий бит слева. Поэтому первый полученный бит — самый правый, и читаем снизу вверх.", "en": "Why is the remainder a bit? When you divide by 2, the remainder says whether the number is even — exactly the LSB. Then you divide the whole part and get the next bit to the left. So the first bit you get is the rightmost, and you read from the bottom up."},
      "kind": "board",
      "title": {
        "he": "מבסיס 10 לבסיס 2: חלוקה ב־2 (השיטה הארוכה)",
        "ru": "Из десятичной в двоичную: деление на 2 («длинный метод»)",
        "en": "Base 10 to base 2: division by 2 (the long method)"
      },
      "text": {
        "he": "(1) כותבים את המספר העשרוני. (2) מחלקים ב־2. (3) את השלם רושמים בטור אחד ואת השארית (0 או 1) בטור נפרד. כל פעם מחלקים את השלם ב־2, עד שהשלם מגיע ל־0. (4) קוראים את השאריות מלמטה למעלה. הדוגמה מהלוח, `10`:",
        "ru": "(1) Пишем десятичное число. (2) Делим на 2. (3) Целую часть пишем в одну колонку, остаток (0 или 1) — в другую. Каждый раз делим целую часть на 2, пока она не станет 0. (4) Читаем остатки снизу вверх. Пример с доски, `10`:",
        "en": "(1) Write the decimal number. (2) Divide by 2. (3) Write the quotient in one column and the remainder (0 or 1) in another. Keep dividing the quotient by 2 until it reaches 0. (4) Read the remainders from bottom to top. The board example, `10`:"
      },
      "math": [
        "10 : 2 = 5   (0)",
        "5 : 2 = 2   (1)",
        "2 : 2 = 1   (0)",
        "1 : 2 = 0   (1)",
        "10₁₀ = 1010₂"
      ]
    },
    { "why": {"he": "בלי השורה הזאת חסר הביט השמאלי ביותר (ה-MSB), והתשובה יוצאת קטנה פי 2 בערך. לכן ממשיכים לחלק עד שהחלק השלם הוא 0, ולא עוצרים ב-1.", "ru": "Без этой строки пропадает самый левый бит (MSB), и ответ выходит примерно вдвое меньше. Поэтому делим, пока целая часть не станет 0, и не останавливаемся на 1.", "en": "Without this line the leftmost bit (MSB) is lost and the answer comes out about half as big. So keep dividing until the whole part is 0; do not stop at 1."},
      "kind": "tip",
      "title": {
        "he": "השורה האחרונה `1 : 2 = 0`",
        "ru": "Последняя строка `1 : 2 = 0`",
        "en": "The last line `1 : 2 = 0`"
      },
      "text": {
        "he": "2 לא נכנס ב־1 אפילו פעם אחת, אז השלם הוא 0, וה־1 עצמו נשאר כשארית.\nועוד טיפ: את השארית הראשונה רואים מיד — למספר זוגי היא 0, לאי־זוגי 1. לכן ה־LSB של מספר אי־זוגי הוא תמיד 1.",
        "ru": "Двойка не помещается в единицу ни разу, значит целое 0, а сама единица остаётся остатком.\nЕщё совет: первый остаток видно сразу — у чётного числа 0, у нечётного 1. Поэтому LSB нечётного числа всегда 1.",
        "en": "2 doesn't go into 1 even once, so the quotient is 0 and the 1 itself is the remainder.\nOne more tip: you can see the first remainder at once — 0 for an even number, 1 for an odd one. So the LSB of an odd number is always 1."
      }
    },
    { "why": {"he": "כי בכל בסיס המשקלים הם חזקות של הבסיס. חלוקה בבסיס \"מקלפת\" ספרה אחת מימין בכל פעם. אותו דבר בעשרוני: `375` חלקי 10 נותן 37 ושארית 5 — הספרה הימנית.", "ru": "Потому что в любой системе веса — степени основания. Деление на основание «снимает» по одной цифре справа. В десятичной так же: `375` делим на 10, выходит 37 и остаток 5 — правая цифра.", "en": "Because in any base the weights are powers of the base. Dividing by the base \"peels off\" one digit from the right each time. Same in decimal: `375` divided by 10 gives 37 remainder 5 — the right digit."},
      "kind": "qa",
      "q": {
        "he": "למה תמיד מחלקים דווקא ב־2?",
        "ru": "Почему делим именно на 2?",
        "en": "Why do we always divide by 2?"
      },
      "a": {
        "he": "מחלקים בבסיס שאליו ממירים. בינארי הוא בסיס 2, לכן מחלקים ב־2. לאוקטלי היינו מחלקים ב־8.",
        "ru": "Делим на основание системы, в которую переводим. Двоичная — основание 2, значит делим на 2. Для восьмеричной делили бы на 8.",
        "en": "We divide by the base we convert to. Binary is base 2, so we divide by 2. For octal we would divide by 8."
      }
    },
    { "why": {"he": "למה מתחילים מהמשקל הגדול? כמו לתת עודף בכסף: קודם השטר הגדול שנכנס, אחר כך הקטנים. כל משקל משתמשים בו פעם אחת לכל היותר, ולכן כל ספרה היא 0 או 1.", "ru": "Почему начинаем с большого веса? Как давать сдачу: сначала самая крупная купюра, которая помещается, потом мелкие. Каждый вес можно взять не больше одного раза, поэтому каждая цифра — 0 или 1.", "en": "Why start with the biggest weight? Like giving change: first the biggest note that fits, then the smaller ones. Each weight can be used at most once, so each digit is 0 or 1."},
      "kind": "board",
      "title": {
        "he": "השיטה הטבלאית (מחסירים משקלים): `710`",
        "ru": "Метод таблицы (вычитаем веса): `710`",
        "en": "The table method (subtracting weights): `710`"
      },
      "text": {
        "he": "כותבים את המשקלים `1024 512 256 128 64 32 16 8 4 2 1`. מתחילים מהמשקל הגדול ביותר שלא גדול מהמספר. נכנס — כותבים 1 ומחסירים; לא נכנס — כותבים 0. בסוף קוראים משמאל לימין:",
        "ru": "Выписываем веса `1024 512 256 128 64 32 16 8 4 2 1`. Начинаем с самого большого веса, не больше нашего числа. Помещается — пишем 1 и вычитаем; не помещается — пишем 0. В конце читаем слева направо:",
        "en": "Write the weights `1024 512 256 128 64 32 16 8 4 2 1`. Start with the largest weight not bigger than the number. If it fits, write 1 and subtract; if not, write 0. At the end read from left to right:"
      },
      "math": [
        "710 − 512 = 198 → 1",
        "256 > 198 → 0",
        "198 − 128 = 70 → 1",
        "70 − 64 = 6 → 1",
        "32, 16, 8 > 6 → 0, 0, 0",
        "6 − 4 = 2 → 1",
        "2 − 2 = 0 → 1",
        "1 > 0 → 0",
        "710₁₀ = 1011000110₂"
      ]
    },
    { "why": {"he": "`1024` הוא `2¹⁰`, ולכן הוא 1 ואחריו עשרה אפסים — כמו ש-1000 הוא 1 ואחריו שלושה אפסים בעשרוני. אפסים משמאל לא משנים ערך, בדיוק כמו ש-`007` הוא 7.", "ru": "`1024` — это `2¹⁰`, поэтому это 1 и десять нулей, как 1000 — это 1 и три нуля в десятичной. Нули слева значение не меняют, ровно как `007` — это 7.", "en": "`1024` is `2¹⁰`, so it is 1 followed by ten zeros, just as 1000 is 1 followed by three zeros in decimal. Leading zeros do not change the value, just as `007` is 7."},
      "kind": "board",
      "title": {
        "he": "עוד דוגמאות בשיטה הטבלאית",
        "ru": "Ещё примеры методом таблицы",
        "en": "More table-method examples"
      },
      "text": {
        "he": "על הלוח הומרו גם `1024`, `350` ו־`86`. (ב־`350` נכתבו על הלוח אפסים נוספים משמאל — הם לא משנים את הערך.)",
        "ru": "На доске перевели ещё `1024`, `350` и `86`. (У `350` на доске были дописаны лишние нули слева — значение они не меняют.)",
        "en": "The board also converted `1024`, `350` and `86`. (For `350` the board had extra zeros on the left — they don't change the value.)"
      },
      "math": [
        "1024₁₀ = 10000000000₂",
        "350₁₀ = 101011110₂",
        "86₁₀ = 1010110₂"
      ]
    },
    { "why": {"he": "בדיקה הפוכה תופסת כמעט כל טעות: אם שכחת ביט או קראת שאריות בכיוון הלא נכון, המספר שחוזר יהיה שונה. במבחן זה לוקח דקה ומציל נקודות.", "ru": "Обратная проверка ловит почти любую ошибку: если пропустил бит или прочитал остатки не в ту сторону, вернётся другое число. На экзамене это минута, которая спасает баллы.", "en": "Checking backwards catches almost any mistake: if you skipped a bit or read the remainders the wrong way, a different number comes back. On the exam it takes a minute and saves points."},
      "kind": "tip",
      "title": {
        "he": "איך מוכיחים שהתשובה נכונה",
        "ru": "Как доказать, что ответ верный",
        "en": "How to prove the answer is right"
      },
      "text": {
        "he": "ממירים את התוצאה בחזרה לבסיס 10. אם יצא המספר המקורי — התשובה נכונה. שתי השיטות (חלוקה וטבלה) נותנות תמיד אותה תשובה: חלוקה נוחה למספרים קטנים, טבלה — לגדולים, במיוחד ליד חזקה של 2 (1024, 4096).",
        "ru": "Переводим результат обратно в десятичную. Получилось исходное число — ответ верный. Оба метода (деление и таблица) всегда дают один ответ: деление удобно для маленьких чисел, таблица — для больших, особенно рядом со степенью двойки (1024, 4096).",
        "en": "Convert the result back to base 10. If you get the original number, the answer is right. Both methods (division and table) always give the same answer: division is handy for small numbers, the table for big ones, especially near a power of 2 (1024, 4096)."
      }
    },
    { "why": {"he": "כל קבוצה מתרגלת שיטה אחרת, ובכוונה. 4096 הוא `2¹²` — 1 ואחריו 12 אפסים, ובשיטת הטבלה זה רואים מיד. 510 ו-1020 קרובים לחזקה (512, 1024) — כדאי לראות איך יוצאים כמעט רק אחדות.", "ru": "Каждая группа тренирует свой способ, и это нарочно. 4096 — это `2¹²`, 1 и 12 нулей, методом таблицы это видно сразу. 510 и 1020 близки к степеням (512, 1024) — посмотри, как выходят почти одни единицы.", "en": "Each group practises a different method, on purpose. 4096 is `2¹²` — 1 followed by 12 zeros, which the table method shows at once. 510 and 1020 are close to powers (512, 1024) — notice how they come out as almost all ones."},
      "kind": "board",
      "title": {
        "he": "תרגילים מהלוח",
        "ru": "Упражнения с доски",
        "en": "Exercises from the board"
      },
      "text": {
        "he": "1. המר לפי השיטה הארוכה (חלוקה ב־2): `17, 19, 35, 40`\n2. המר לפי השיטה הטבלאית: `1020, 75, 510, 4096`\n3. המר מבסיס בינארי לעשרוני: `1011, 1001, 1100, 110111`\nכולם בלשונית התרגילים, עם פתרון שלב אחרי שלב.",
        "ru": "1. Делением на 2: `17, 19, 35, 40`\n2. Методом таблицы: `1020, 75, 510, 4096`\n3. Из двоичной в десятичную: `1011, 1001, 1100, 110111`\nВсе они во вкладке заданий, с решением по шагам.",
        "en": "1. By division by 2: `17, 19, 35, 40`\n2. By the table method: `1020, 75, 510, 4096`\n3. From binary to decimal: `1011, 1001, 1100, 110111`\nAll of them are in the tasks tab, with step-by-step solutions."
      }
    }
  ],
  "review": [
    {
      "title": {
        "he": "קלט ← עיבוד ← פלט",
        "ru": "Ввод → обработка → вывод",
        "en": "Input → processing → output"
      },
      "text": {
        "he": "מקלדת, עכבר, מיקרופון — קלט. מסך, רמקולים — פלט. ה־CPU מעבד: `ALU` מחשב, `CU` מנהל, `MMU` מביא נתונים מהזיכרון.",
        "ru": "Клавиатура, мышь, микрофон — ввод. Экран, колонки — вывод. CPU обрабатывает: `ALU` считает, `CU` управляет, `MMU` приносит данные из памяти.",
        "en": "Keyboard, mouse, mic — input. Screen, speakers — output. The CPU processes: `ALU` computes, `CU` controls, `MMU` fetches data from memory."
      }
    },
    {
      "title": {
        "he": "פירמידת הזיכרון",
        "ru": "Пирамида памяти",
        "en": "Memory pyramid"
      },
      "text": {
        "he": "אוגרים ← L1 ← L2 ← L3 ← RAM ← דיסק. למעלה: מהיר, קטן ויקר. RAM מתרוקן כשמכבים.",
        "ru": "Регистры → L1 → L2 → L3 → RAM → диск. Наверху: быстро, мало и дорого. RAM очищается при выключении.",
        "en": "Registers → L1 → L2 → L3 → RAM → disk. At the top: fast, small, expensive. RAM is emptied at power-off."
      }
    },
    {
      "title": {
        "he": "ביט, בייט, בסיס",
        "ru": "Бит, байт, основание",
        "en": "Bit, byte, base"
      },
      "text": {
        "he": "ביט = 0 או 1. 8 ביטים = בייט. בבסיס 2 יש רק 0 ו־1, ותמיד כותבים את הבסיס: `10₂ = 2`.",
        "ru": "Бит = 0 или 1. 8 бит = байт. В основании 2 есть только 0 и 1, основание пишем всегда: `10₂ = 2`.",
        "en": "Bit = 0 or 1. 8 bits = a byte. Base 2 has only 0 and 1; always write the base: `10₂ = 2`."
      }
    },
    {
      "title": {
        "he": "מבסיס 2 לבסיס 10",
        "ru": "Из 2 в 10",
        "en": "Base 2 → base 10"
      },
      "text": {
        "he": "משקלים מימין `1, 2, 4, 8, 16…`, ספרה × משקל, ומחברים: `1011₂ = 8 + 2 + 1 = 11`.",
        "ru": "Веса справа `1, 2, 4, 8, 16…`, цифра × вес, складываем: `1011₂ = 8 + 2 + 1 = 11`.",
        "en": "Weights from the right `1, 2, 4, 8, 16…`, digit × weight, then add: `1011₂ = 8 + 2 + 1 = 11`."
      }
    },
    {
      "title": {
        "he": "חלוקה ב־2",
        "ru": "Деление на 2",
        "en": "Division by 2"
      },
      "text": {
        "he": "מחלקים עד שהשלם 0, וקוראים את השאריות מלמטה למעלה: `10 → 1010`.",
        "ru": "Делим, пока целая часть не станет 0, остатки читаем снизу вверх: `10 → 1010`.",
        "en": "Divide until the quotient is 0, read the remainders bottom to top: `10 → 1010`."
      }
    },
    {
      "title": {
        "he": "השיטה הטבלאית",
        "ru": "Метод таблицы",
        "en": "The table method"
      },
      "text": {
        "he": "מהמשקל הגדול: נכנס — 1 ומחסירים, לא נכנס — 0. קוראים משמאל לימין: `710 = 1011000110₂`.",
        "ru": "От большого веса: помещается — 1 и вычитаем, нет — 0. Читаем слева направо: `710 = 1011000110₂`.",
        "en": "From the largest weight: fits — 1 and subtract, doesn't — 0. Read left to right: `710 = 1011000110₂`."
      }
    },
    {
      "title": {
        "he": "MSB, LSB ובדיקה",
        "ru": "MSB, LSB и проверка",
        "en": "MSB, LSB and checking"
      },
      "text": {
        "he": "MSB — הביט השמאלי (הכי כבד), LSB — הימני (משקל 1). כל תשובה בודקים בהמרה חזרה.",
        "ru": "MSB — левый бит (самый тяжёлый), LSB — правый (вес 1). Любой ответ проверяем обратным переводом.",
        "en": "MSB — the leftmost bit (heaviest), LSB — the rightmost (weight 1). Check every answer by converting back."
      }
    }
  ],
  "tasks": {
    "groups": {
      "1": {
        "he": "תרגיל 1 — המר בשיטה הארוכה (חלוקה ב־2)",
        "ru": "Задание 1 — Переведите делением на 2",
        "en": "Exercise 1 — Convert by division by 2"
      },
      "2": {
        "he": "תרגיל 2 — המר בשיטה הטבלאית",
        "ru": "Задание 2 — Переведите методом таблицы",
        "en": "Exercise 2 — Convert by the table method"
      },
      "3": {
        "he": "תרגיל 3 — המר מבינארי לעשרוני",
        "ru": "Задание 3 — Из двоичной в десятичную",
        "en": "Exercise 3 — Convert from binary to decimal"
      },
      "class": {
        "he": "נפתר בכיתה",
        "ru": "Решали в классе",
        "en": "Solved in class"
      }
    },
    "teacher": [
      {
        "id": "tc-1",
        "example": {"he": "`12₁₀` → מחלקים ב־2 ורושמים שאריות:\n`12 : 2 = 6`, שארית 0\n`6 : 2 = 3`, שארית 0\n`3 : 2 = 1`, שארית 1\n`1 : 2 = 0`, שארית 1\nקוראים את השאריות מלמטה למעלה → `1100₂`.", "ru": "`12₁₀` → делим на 2 и записываем остатки:\n12 : 2 = 6, остаток 0\n6 : 2 = 3, остаток 0\n3 : 2 = 1, остаток 1\n1 : 2 = 0, остаток 1\nЧитаем остатки снизу вверх → `1100₂`.", "en": "`12₁₀` → divide by 2 and write down the remainders:\n12 : 2 = 6, remainder 0\n6 : 2 = 3, remainder 0\n3 : 2 = 1, remainder 1\n1 : 2 = 0, remainder 1\nRead the remainders from bottom to top → `1100₂`."},
        "group": "class",
        "label": "כא",
        "kind": "text",
        "text": {
          "he": "המירו את `8` לבסיס 2 בשיטת החלוקה ב־2.",
          "ru": "Переведите `8` в двоичную систему делением на 2.",
          "en": "Convert `8` to base 2 using division by 2."
        },
        "answer": {
          "accept": [
            "1000",
            "00001000",
            "000000001000",
            "0000000000001000"
          ]
        },
        "hints": [
          {
            "he": "מחלקים ב־2: השלם עובר לשורה הבאה, השארית נרשמת בצד. ממשיכים עד שהשלם הוא 0.",
            "ru": "Делим на 2: целая часть идёт в следующую строку, остаток пишем сбоку. Продолжаем, пока целая часть не станет 0.",
            "en": "Divide by 2: the quotient goes to the next line, the remainder is written on the side. Continue until the quotient is 0."
          },
          {
            "he": "השורה הראשונה: `8 : 2 = 4`, שארית `0`. בסוף קוראים את השאריות מלמטה למעלה.",
            "ru": "Первая строка: `8 : 2 = 4`, остаток `0`. В конце читаем остатки снизу вверх.",
            "en": "First line: `8 : 2 = 4`, remainder `0`. At the end read the remainders from bottom to top."
          }
        ],
        "solution": [
          {
            "he": "מחלקים ב־2 שוב ושוב, עד שהשלם מגיע ל־0. רושמים כל שארית:",
            "ru": "Делим на 2 снова и снова, пока целая часть не станет 0. Записываем каждый остаток:",
            "en": "Divide by 2 again and again until the quotient is 0. Write down each remainder:"
          },
          {
            "he": "`8 : 2 = 4`, שארית `0`",
            "ru": "`8 : 2 = 4`, остаток `0`",
            "en": "`8 : 2 = 4`, remainder `0`"
          },
          {
            "he": "`4 : 2 = 2`, שארית `0`",
            "ru": "`4 : 2 = 2`, остаток `0`",
            "en": "`4 : 2 = 2`, remainder `0`"
          },
          {
            "he": "`2 : 2 = 1`, שארית `0`",
            "ru": "`2 : 2 = 1`, остаток `0`",
            "en": "`2 : 2 = 1`, remainder `0`"
          },
          {
            "he": "`1 : 2 = 0`, שארית `1`",
            "ru": "`1 : 2 = 0`, остаток `1`",
            "en": "`1 : 2 = 0`, remainder `1`"
          },
          {
            "he": "קוראים את השאריות מלמטה למעלה: `1000`",
            "ru": "Читаем остатки снизу вверх: `1000`",
            "en": "Read the remainders from bottom to top: `1000`"
          },
          {
            "he": "תשובה: `8₁₀ = 1000₂`",
            "ru": "Ответ: `8₁₀ = 1000₂`",
            "en": "Answer: `8₁₀ = 1000₂`"
          },
          {
            "he": "בדיקה: ממירים בחזרה — `1000₂ = 8`",
            "ru": "Проверка: переводим обратно — `1000₂ = 8`",
            "en": "Check: convert back — `1000₂ = 8`"
          }
        ]
      },
      {
        "id": "tc-2",
        "example": {"he": "`26₁₀` → מחלקים ב־2 ורושמים שאריות:\n`26 : 2 = 13`, שארית 0\n`13 : 2 = 6`, שארית 1\n`6 : 2 = 3`, שארית 0\n`3 : 2 = 1`, שארית 1\n`1 : 2 = 0`, שארית 1\nקוראים את השאריות מלמטה למעלה → `11010₂`.", "ru": "`26₁₀` → делим на 2 и записываем остатки:\n26 : 2 = 13, остаток 0\n13 : 2 = 6, остаток 1\n6 : 2 = 3, остаток 0\n3 : 2 = 1, остаток 1\n1 : 2 = 0, остаток 1\nЧитаем остатки снизу вверх → `11010₂`.", "en": "`26₁₀` → divide by 2 and write down the remainders:\n26 : 2 = 13, remainder 0\n13 : 2 = 6, remainder 1\n6 : 2 = 3, remainder 0\n3 : 2 = 1, remainder 1\n1 : 2 = 0, remainder 1\nRead the remainders from bottom to top → `11010₂`."},
        "group": "class",
        "label": "כב",
        "kind": "text",
        "text": {
          "he": "המירו את `20` לבסיס 2 בשיטת החלוקה ב־2.",
          "ru": "Переведите `20` в двоичную систему делением на 2.",
          "en": "Convert `20` to base 2 using division by 2."
        },
        "answer": {
          "accept": [
            "10100",
            "00010100",
            "000000010100",
            "0000000000010100"
          ]
        },
        "hints": [
          {
            "he": "מחלקים ב־2: השלם עובר לשורה הבאה, השארית נרשמת בצד. ממשיכים עד שהשלם הוא 0.",
            "ru": "Делим на 2: целая часть идёт в следующую строку, остаток пишем сбоку. Продолжаем, пока целая часть не станет 0.",
            "en": "Divide by 2: the quotient goes to the next line, the remainder is written on the side. Continue until the quotient is 0."
          },
          {
            "he": "השורה הראשונה: `20 : 2 = 10`, שארית `0`. בסוף קוראים את השאריות מלמטה למעלה.",
            "ru": "Первая строка: `20 : 2 = 10`, остаток `0`. В конце читаем остатки снизу вверх.",
            "en": "First line: `20 : 2 = 10`, remainder `0`. At the end read the remainders from bottom to top."
          }
        ],
        "solution": [
          {
            "he": "מחלקים ב־2 שוב ושוב, עד שהשלם מגיע ל־0. רושמים כל שארית:",
            "ru": "Делим на 2 снова и снова, пока целая часть не станет 0. Записываем каждый остаток:",
            "en": "Divide by 2 again and again until the quotient is 0. Write down each remainder:"
          },
          {
            "he": "`20 : 2 = 10`, שארית `0`",
            "ru": "`20 : 2 = 10`, остаток `0`",
            "en": "`20 : 2 = 10`, remainder `0`"
          },
          {
            "he": "`10 : 2 = 5`, שארית `0`",
            "ru": "`10 : 2 = 5`, остаток `0`",
            "en": "`10 : 2 = 5`, remainder `0`"
          },
          {
            "he": "`5 : 2 = 2`, שארית `1`",
            "ru": "`5 : 2 = 2`, остаток `1`",
            "en": "`5 : 2 = 2`, remainder `1`"
          },
          {
            "he": "`2 : 2 = 1`, שארית `0`",
            "ru": "`2 : 2 = 1`, остаток `0`",
            "en": "`2 : 2 = 1`, remainder `0`"
          },
          {
            "he": "`1 : 2 = 0`, שארית `1`",
            "ru": "`1 : 2 = 0`, остаток `1`",
            "en": "`1 : 2 = 0`, remainder `1`"
          },
          {
            "he": "קוראים את השאריות מלמטה למעלה: `10100`",
            "ru": "Читаем остатки снизу вверх: `10100`",
            "en": "Read the remainders from bottom to top: `10100`"
          },
          {
            "he": "תשובה: `20₁₀ = 10100₂`",
            "ru": "Ответ: `20₁₀ = 10100₂`",
            "en": "Answer: `20₁₀ = 10100₂`"
          },
          {
            "he": "בדיקה: ממירים בחזרה — `10100₂ = 20`",
            "ru": "Проверка: переводим обратно — `10100₂ = 20`",
            "en": "Check: convert back — `10100₂ = 20`"
          }
        ]
      },
      {
        "id": "tc-3",
        "example": {"he": "`43₁₀` → מחלקים ב־2 ורושמים שאריות:\n`43 : 2 = 21`, שארית 1\n`21 : 2 = 10`, שארית 1\n`10 : 2 = 5`, שארית 0\n`5 : 2 = 2`, שארית 1\n`2 : 2 = 1`, שארית 0\n`1 : 2 = 0`, שארית 1\nקוראים את השאריות מלמטה למעלה → `101011₂`.", "ru": "`43₁₀` → делим на 2 и записываем остатки:\n43 : 2 = 21, остаток 1\n21 : 2 = 10, остаток 1\n10 : 2 = 5, остаток 0\n5 : 2 = 2, остаток 1\n2 : 2 = 1, остаток 0\n1 : 2 = 0, остаток 1\nЧитаем остатки снизу вверх → `101011₂`.", "en": "`43₁₀` → divide by 2 and write down the remainders:\n43 : 2 = 21, remainder 1\n21 : 2 = 10, remainder 1\n10 : 2 = 5, remainder 0\n5 : 2 = 2, remainder 1\n2 : 2 = 1, remainder 0\n1 : 2 = 0, remainder 1\nRead the remainders from bottom to top → `101011₂`."},
        "group": "class",
        "label": "כג",
        "kind": "text",
        "text": {
          "he": "המירו את `39` לבסיס 2 בשיטת החלוקה ב־2.",
          "ru": "Переведите `39` в двоичную систему делением на 2.",
          "en": "Convert `39` to base 2 using division by 2."
        },
        "answer": {
          "accept": [
            "100111",
            "00100111",
            "000000100111",
            "0000000000100111"
          ]
        },
        "hints": [
          {
            "he": "מחלקים ב־2: השלם עובר לשורה הבאה, השארית נרשמת בצד. ממשיכים עד שהשלם הוא 0.",
            "ru": "Делим на 2: целая часть идёт в следующую строку, остаток пишем сбоку. Продолжаем, пока целая часть не станет 0.",
            "en": "Divide by 2: the quotient goes to the next line, the remainder is written on the side. Continue until the quotient is 0."
          },
          {
            "he": "השורה הראשונה: `39 : 2 = 19`, שארית `1`. בסוף קוראים את השאריות מלמטה למעלה.",
            "ru": "Первая строка: `39 : 2 = 19`, остаток `1`. В конце читаем остатки снизу вверх.",
            "en": "First line: `39 : 2 = 19`, remainder `1`. At the end read the remainders from bottom to top."
          }
        ],
        "solution": [
          {
            "he": "מחלקים ב־2 שוב ושוב, עד שהשלם מגיע ל־0. רושמים כל שארית:",
            "ru": "Делим на 2 снова и снова, пока целая часть не станет 0. Записываем каждый остаток:",
            "en": "Divide by 2 again and again until the quotient is 0. Write down each remainder:"
          },
          {
            "he": "`39 : 2 = 19`, שארית `1`",
            "ru": "`39 : 2 = 19`, остаток `1`",
            "en": "`39 : 2 = 19`, remainder `1`"
          },
          {
            "he": "`19 : 2 = 9`, שארית `1`",
            "ru": "`19 : 2 = 9`, остаток `1`",
            "en": "`19 : 2 = 9`, remainder `1`"
          },
          {
            "he": "`9 : 2 = 4`, שארית `1`",
            "ru": "`9 : 2 = 4`, остаток `1`",
            "en": "`9 : 2 = 4`, remainder `1`"
          },
          {
            "he": "`4 : 2 = 2`, שארית `0`",
            "ru": "`4 : 2 = 2`, остаток `0`",
            "en": "`4 : 2 = 2`, remainder `0`"
          },
          {
            "he": "`2 : 2 = 1`, שארית `0`",
            "ru": "`2 : 2 = 1`, остаток `0`",
            "en": "`2 : 2 = 1`, remainder `0`"
          },
          {
            "he": "`1 : 2 = 0`, שארית `1`",
            "ru": "`1 : 2 = 0`, остаток `1`",
            "en": "`1 : 2 = 0`, remainder `1`"
          },
          {
            "he": "קוראים את השאריות מלמטה למעלה: `100111`",
            "ru": "Читаем остатки снизу вверх: `100111`",
            "en": "Read the remainders from bottom to top: `100111`"
          },
          {
            "he": "תשובה: `39₁₀ = 100111₂`",
            "ru": "Ответ: `39₁₀ = 100111₂`",
            "en": "Answer: `39₁₀ = 100111₂`"
          },
          {
            "he": "בדיקה: ממירים בחזרה — `100111₂ = 39`",
            "ru": "Проверка: переводим обратно — `100111₂ = 39`",
            "en": "Check: convert back — `100111₂ = 39`"
          }
        ]
      },
      {
        "id": "tc-4",
        "example": {"he": "`86` → כותבים את המשקלים ומתחילים מ־64 (המשקל הכי גדול שלא גדול מ־86):\n```\n64 32 16 8 4 2 1\n\n86 − 64 = 22 → 1\n32 > 22 → 0\n22 − 16 = 6 → 1\n8 > 6 → 0\n6 − 4 = 2 → 1\n2 − 2 = 0 → 1\n1 > 0 → 0\n```\nקוראים משמאל לימין → `1010110₂`.", "ru": "`86` → веса: `64 32 16 8 4 2 1`. Начинаем с 64 (самый большой вес, не больше 86).\n86 − 64 = 22 → 1\n32 > 22 → 0\n22 − 16 = 6 → 1\n8 > 6 → 0\n6 − 4 = 2 → 1\n2 − 2 = 0 → 1\n1 > 0 → 0\nЧитаем слева направо → `1010110₂`.", "en": "`86` → the weights: `64 32 16 8 4 2 1`. Start at 64 (the largest weight not bigger than 86).\n86 − 64 = 22 → 1\n32 > 22 → 0\n22 − 16 = 6 → 1\n8 > 6 → 0\n6 − 4 = 2 → 1\n2 − 2 = 0 → 1\n1 > 0 → 0\nRead from left to right → `1010110₂`."},
        "group": "class",
        "label": "כד",
        "kind": "text",
        "text": {
          "he": "המירו את `79` לבסיס 2 בשיטה הטבלאית.",
          "ru": "Переведите `79` в двоичную систему методом таблицы.",
          "en": "Convert `79` to base 2 using the table method."
        },
        "answer": {
          "accept": [
            "1001111",
            "01001111",
            "000001001111",
            "0000000001001111"
          ]
        },
        "hints": [
          {
            "he": "כותבים את המשקלים: `64 32 16 8 4 2 1`. מתחילים מהגדול.",
            "ru": "Выпиши веса: `64 32 16 8 4 2 1`. Начни с самого большого.",
            "en": "Write the weights: `64 32 16 8 4 2 1`. Start with the largest."
          },
          {
            "he": "`79 − 64 = 15` → 1. ממשיכים עם `15` למשקל הבא.",
            "ru": "`79 − 64 = 15` → 1. Дальше с `15` к следующему весу.",
            "en": "`79 − 64 = 15` → 1. Continue with `15` at the next weight."
          }
        ],
        "solution": [
          {
            "he": "המשקל הגדול ביותר שלא גדול מ־`79` הוא `64`.",
            "ru": "Самый большой вес, не больше `79`, это `64`.",
            "en": "The largest weight not bigger than `79` is `64`."
          },
          "79 − 64 = 15 → 1",
          "32, 16 > 15 → 0, 0",
          "15 − 8 = 7 → 1",
          "7 − 4 = 3 → 1",
          "3 − 2 = 1 → 1",
          "1 − 1 = 0 → 1",
          {
            "he": "קוראים את ה־1 וה־0 משמאל לימין: `1001111`",
            "ru": "Читаем 1 и 0 слева направо: `1001111`",
            "en": "Read the 1s and 0s from left to right: `1001111`"
          },
          {
            "he": "תשובה: `79₁₀ = 1001111₂`",
            "ru": "Ответ: `79₁₀ = 1001111₂`",
            "en": "Answer: `79₁₀ = 1001111₂`"
          }
        ]
      },
      {
        "id": "t1-1",
        "example": {"he": "`21₁₀` → מחלקים ב־2 ורושמים שאריות:\n`21 : 2 = 10`, שארית 1\n`10 : 2 = 5`, שארית 0\n`5 : 2 = 2`, שארית 1\n`2 : 2 = 1`, שארית 0\n`1 : 2 = 0`, שארית 1\nקוראים את השאריות מלמטה למעלה → `10101₂`.", "ru": "`21₁₀` → делим на 2 и записываем остатки:\n21 : 2 = 10, остаток 1\n10 : 2 = 5, остаток 0\n5 : 2 = 2, остаток 1\n2 : 2 = 1, остаток 0\n1 : 2 = 0, остаток 1\nЧитаем остатки снизу вверх → `10101₂`.", "en": "`21₁₀` → divide by 2 and write down the remainders:\n21 : 2 = 10, remainder 1\n10 : 2 = 5, remainder 0\n5 : 2 = 2, remainder 1\n2 : 2 = 1, remainder 0\n1 : 2 = 0, remainder 1\nRead the remainders from bottom to top → `10101₂`."},
        "group": "1",
        "label": "1א",
        "kind": "text",
        "text": {
          "he": "המירו את `17` לבסיס 2 בשיטת החלוקה ב־2.",
          "ru": "Переведите `17` в двоичную систему делением на 2.",
          "en": "Convert `17` to base 2 using division by 2."
        },
        "answer": {
          "accept": [
            "10001",
            "00010001",
            "000000010001",
            "0000000000010001"
          ]
        },
        "hints": [
          {
            "he": "מחלקים ב־2: השלם עובר לשורה הבאה, השארית נרשמת בצד. ממשיכים עד שהשלם הוא 0.",
            "ru": "Делим на 2: целая часть идёт в следующую строку, остаток пишем сбоку. Продолжаем, пока целая часть не станет 0.",
            "en": "Divide by 2: the quotient goes to the next line, the remainder is written on the side. Continue until the quotient is 0."
          },
          {
            "he": "השורה הראשונה: `17 : 2 = 8`, שארית `1`. בסוף קוראים את השאריות מלמטה למעלה.",
            "ru": "Первая строка: `17 : 2 = 8`, остаток `1`. В конце читаем остатки снизу вверх.",
            "en": "First line: `17 : 2 = 8`, remainder `1`. At the end read the remainders from bottom to top."
          }
        ],
        "solution": [
          {
            "he": "מחלקים ב־2 שוב ושוב, עד שהשלם מגיע ל־0. רושמים כל שארית:",
            "ru": "Делим на 2 снова и снова, пока целая часть не станет 0. Записываем каждый остаток:",
            "en": "Divide by 2 again and again until the quotient is 0. Write down each remainder:"
          },
          {
            "he": "`17 : 2 = 8`, שארית `1`",
            "ru": "`17 : 2 = 8`, остаток `1`",
            "en": "`17 : 2 = 8`, remainder `1`"
          },
          {
            "he": "`8 : 2 = 4`, שארית `0`",
            "ru": "`8 : 2 = 4`, остаток `0`",
            "en": "`8 : 2 = 4`, remainder `0`"
          },
          {
            "he": "`4 : 2 = 2`, שארית `0`",
            "ru": "`4 : 2 = 2`, остаток `0`",
            "en": "`4 : 2 = 2`, remainder `0`"
          },
          {
            "he": "`2 : 2 = 1`, שארית `0`",
            "ru": "`2 : 2 = 1`, остаток `0`",
            "en": "`2 : 2 = 1`, remainder `0`"
          },
          {
            "he": "`1 : 2 = 0`, שארית `1`",
            "ru": "`1 : 2 = 0`, остаток `1`",
            "en": "`1 : 2 = 0`, remainder `1`"
          },
          {
            "he": "קוראים את השאריות מלמטה למעלה: `10001`",
            "ru": "Читаем остатки снизу вверх: `10001`",
            "en": "Read the remainders from bottom to top: `10001`"
          },
          {
            "he": "תשובה: `17₁₀ = 10001₂`",
            "ru": "Ответ: `17₁₀ = 10001₂`",
            "en": "Answer: `17₁₀ = 10001₂`"
          },
          {
            "he": "בדיקה: ממירים בחזרה — `10001₂ = 17`",
            "ru": "Проверка: переводим обратно — `10001₂ = 17`",
            "en": "Check: convert back — `10001₂ = 17`"
          }
        ]
      },
      {
        "id": "t1-2",
        "example": {"he": "`23₁₀` → מחלקים ב־2 ורושמים שאריות:\n`23 : 2 = 11`, שארית 1\n`11 : 2 = 5`, שארית 1\n`5 : 2 = 2`, שארית 1\n`2 : 2 = 1`, שארית 0\n`1 : 2 = 0`, שארית 1\nקוראים את השאריות מלמטה למעלה → `10111₂`.", "ru": "`23₁₀` → делим на 2 и записываем остатки:\n23 : 2 = 11, остаток 1\n11 : 2 = 5, остаток 1\n5 : 2 = 2, остаток 1\n2 : 2 = 1, остаток 0\n1 : 2 = 0, остаток 1\nЧитаем остатки снизу вверх → `10111₂`.", "en": "`23₁₀` → divide by 2 and write down the remainders:\n23 : 2 = 11, remainder 1\n11 : 2 = 5, remainder 1\n5 : 2 = 2, remainder 1\n2 : 2 = 1, remainder 0\n1 : 2 = 0, remainder 1\nRead the remainders from bottom to top → `10111₂`."},
        "group": "1",
        "label": "1ב",
        "kind": "text",
        "text": {
          "he": "המירו את `19` לבסיס 2 בשיטת החלוקה ב־2.",
          "ru": "Переведите `19` в двоичную систему делением на 2.",
          "en": "Convert `19` to base 2 using division by 2."
        },
        "answer": {
          "accept": [
            "10011",
            "00010011",
            "000000010011",
            "0000000000010011"
          ]
        },
        "hints": [
          {
            "he": "מחלקים ב־2: השלם עובר לשורה הבאה, השארית נרשמת בצד. ממשיכים עד שהשלם הוא 0.",
            "ru": "Делим на 2: целая часть идёт в следующую строку, остаток пишем сбоку. Продолжаем, пока целая часть не станет 0.",
            "en": "Divide by 2: the quotient goes to the next line, the remainder is written on the side. Continue until the quotient is 0."
          },
          {
            "he": "השורה הראשונה: `19 : 2 = 9`, שארית `1`. בסוף קוראים את השאריות מלמטה למעלה.",
            "ru": "Первая строка: `19 : 2 = 9`, остаток `1`. В конце читаем остатки снизу вверх.",
            "en": "First line: `19 : 2 = 9`, remainder `1`. At the end read the remainders from bottom to top."
          }
        ],
        "solution": [
          {
            "he": "מחלקים ב־2 שוב ושוב, עד שהשלם מגיע ל־0. רושמים כל שארית:",
            "ru": "Делим на 2 снова и снова, пока целая часть не станет 0. Записываем каждый остаток:",
            "en": "Divide by 2 again and again until the quotient is 0. Write down each remainder:"
          },
          {
            "he": "`19 : 2 = 9`, שארית `1`",
            "ru": "`19 : 2 = 9`, остаток `1`",
            "en": "`19 : 2 = 9`, remainder `1`"
          },
          {
            "he": "`9 : 2 = 4`, שארית `1`",
            "ru": "`9 : 2 = 4`, остаток `1`",
            "en": "`9 : 2 = 4`, remainder `1`"
          },
          {
            "he": "`4 : 2 = 2`, שארית `0`",
            "ru": "`4 : 2 = 2`, остаток `0`",
            "en": "`4 : 2 = 2`, remainder `0`"
          },
          {
            "he": "`2 : 2 = 1`, שארית `0`",
            "ru": "`2 : 2 = 1`, остаток `0`",
            "en": "`2 : 2 = 1`, remainder `0`"
          },
          {
            "he": "`1 : 2 = 0`, שארית `1`",
            "ru": "`1 : 2 = 0`, остаток `1`",
            "en": "`1 : 2 = 0`, remainder `1`"
          },
          {
            "he": "קוראים את השאריות מלמטה למעלה: `10011`",
            "ru": "Читаем остатки снизу вверх: `10011`",
            "en": "Read the remainders from bottom to top: `10011`"
          },
          {
            "he": "תשובה: `19₁₀ = 10011₂`",
            "ru": "Ответ: `19₁₀ = 10011₂`",
            "en": "Answer: `19₁₀ = 10011₂`"
          },
          {
            "he": "בדיקה: ממירים בחזרה — `10011₂ = 19`",
            "ru": "Проверка: переводим обратно — `10011₂ = 19`",
            "en": "Check: convert back — `10011₂ = 19`"
          }
        ]
      },
      {
        "id": "t1-3",
        "example": {"he": "`37₁₀` → מחלקים ב־2 ורושמים שאריות:\n`37 : 2 = 18`, שארית 1\n`18 : 2 = 9`, שארית 0\n`9 : 2 = 4`, שארית 1\n`4 : 2 = 2`, שארית 0\n`2 : 2 = 1`, שארית 0\n`1 : 2 = 0`, שארית 1\nקוראים את השאריות מלמטה למעלה → `100101₂`.", "ru": "`37₁₀` → делим на 2 и записываем остатки:\n37 : 2 = 18, остаток 1\n18 : 2 = 9, остаток 0\n9 : 2 = 4, остаток 1\n4 : 2 = 2, остаток 0\n2 : 2 = 1, остаток 0\n1 : 2 = 0, остаток 1\nЧитаем остатки снизу вверх → `100101₂`.", "en": "`37₁₀` → divide by 2 and write down the remainders:\n37 : 2 = 18, remainder 1\n18 : 2 = 9, remainder 0\n9 : 2 = 4, remainder 1\n4 : 2 = 2, remainder 0\n2 : 2 = 1, remainder 0\n1 : 2 = 0, remainder 1\nRead the remainders from bottom to top → `100101₂`."},
        "group": "1",
        "label": "1ג",
        "kind": "text",
        "text": {
          "he": "המירו את `35` לבסיס 2 בשיטת החלוקה ב־2.",
          "ru": "Переведите `35` в двоичную систему делением на 2.",
          "en": "Convert `35` to base 2 using division by 2."
        },
        "answer": {
          "accept": [
            "100011",
            "00100011",
            "000000100011",
            "0000000000100011"
          ]
        },
        "hints": [
          {
            "he": "מחלקים ב־2: השלם עובר לשורה הבאה, השארית נרשמת בצד. ממשיכים עד שהשלם הוא 0.",
            "ru": "Делим на 2: целая часть идёт в следующую строку, остаток пишем сбоку. Продолжаем, пока целая часть не станет 0.",
            "en": "Divide by 2: the quotient goes to the next line, the remainder is written on the side. Continue until the quotient is 0."
          },
          {
            "he": "השורה הראשונה: `35 : 2 = 17`, שארית `1`. בסוף קוראים את השאריות מלמטה למעלה.",
            "ru": "Первая строка: `35 : 2 = 17`, остаток `1`. В конце читаем остатки снизу вверх.",
            "en": "First line: `35 : 2 = 17`, remainder `1`. At the end read the remainders from bottom to top."
          }
        ],
        "solution": [
          {
            "he": "מחלקים ב־2 שוב ושוב, עד שהשלם מגיע ל־0. רושמים כל שארית:",
            "ru": "Делим на 2 снова и снова, пока целая часть не станет 0. Записываем каждый остаток:",
            "en": "Divide by 2 again and again until the quotient is 0. Write down each remainder:"
          },
          {
            "he": "`35 : 2 = 17`, שארית `1`",
            "ru": "`35 : 2 = 17`, остаток `1`",
            "en": "`35 : 2 = 17`, remainder `1`"
          },
          {
            "he": "`17 : 2 = 8`, שארית `1`",
            "ru": "`17 : 2 = 8`, остаток `1`",
            "en": "`17 : 2 = 8`, remainder `1`"
          },
          {
            "he": "`8 : 2 = 4`, שארית `0`",
            "ru": "`8 : 2 = 4`, остаток `0`",
            "en": "`8 : 2 = 4`, remainder `0`"
          },
          {
            "he": "`4 : 2 = 2`, שארית `0`",
            "ru": "`4 : 2 = 2`, остаток `0`",
            "en": "`4 : 2 = 2`, remainder `0`"
          },
          {
            "he": "`2 : 2 = 1`, שארית `0`",
            "ru": "`2 : 2 = 1`, остаток `0`",
            "en": "`2 : 2 = 1`, remainder `0`"
          },
          {
            "he": "`1 : 2 = 0`, שארית `1`",
            "ru": "`1 : 2 = 0`, остаток `1`",
            "en": "`1 : 2 = 0`, remainder `1`"
          },
          {
            "he": "קוראים את השאריות מלמטה למעלה: `100011`",
            "ru": "Читаем остатки снизу вверх: `100011`",
            "en": "Read the remainders from bottom to top: `100011`"
          },
          {
            "he": "תשובה: `35₁₀ = 100011₂`",
            "ru": "Ответ: `35₁₀ = 100011₂`",
            "en": "Answer: `35₁₀ = 100011₂`"
          },
          {
            "he": "בדיקה: ממירים בחזרה — `100011₂ = 35`",
            "ru": "Проверка: переводим обратно — `100011₂ = 35`",
            "en": "Check: convert back — `100011₂ = 35`"
          }
        ]
      },
      {
        "id": "t1-4",
        "example": {"he": "`48₁₀` → מחלקים ב־2 ורושמים שאריות:\n`48 : 2 = 24`, שארית 0\n`24 : 2 = 12`, שארית 0\n`12 : 2 = 6`, שארית 0\n`6 : 2 = 3`, שארית 0\n`3 : 2 = 1`, שארית 1\n`1 : 2 = 0`, שארית 1\nקוראים את השאריות מלמטה למעלה → `110000₂`.", "ru": "`48₁₀` → делим на 2 и записываем остатки:\n48 : 2 = 24, остаток 0\n24 : 2 = 12, остаток 0\n12 : 2 = 6, остаток 0\n6 : 2 = 3, остаток 0\n3 : 2 = 1, остаток 1\n1 : 2 = 0, остаток 1\nЧитаем остатки снизу вверх → `110000₂`.", "en": "`48₁₀` → divide by 2 and write down the remainders:\n48 : 2 = 24, remainder 0\n24 : 2 = 12, remainder 0\n12 : 2 = 6, remainder 0\n6 : 2 = 3, remainder 0\n3 : 2 = 1, remainder 1\n1 : 2 = 0, remainder 1\nRead the remainders from bottom to top → `110000₂`."},
        "group": "1",
        "label": "1ד",
        "kind": "text",
        "text": {
          "he": "המירו את `40` לבסיס 2 בשיטת החלוקה ב־2.",
          "ru": "Переведите `40` в двоичную систему делением на 2.",
          "en": "Convert `40` to base 2 using division by 2."
        },
        "answer": {
          "accept": [
            "101000",
            "00101000",
            "000000101000",
            "0000000000101000"
          ]
        },
        "hints": [
          {
            "he": "מחלקים ב־2: השלם עובר לשורה הבאה, השארית נרשמת בצד. ממשיכים עד שהשלם הוא 0.",
            "ru": "Делим на 2: целая часть идёт в следующую строку, остаток пишем сбоку. Продолжаем, пока целая часть не станет 0.",
            "en": "Divide by 2: the quotient goes to the next line, the remainder is written on the side. Continue until the quotient is 0."
          },
          {
            "he": "השורה הראשונה: `40 : 2 = 20`, שארית `0`. בסוף קוראים את השאריות מלמטה למעלה.",
            "ru": "Первая строка: `40 : 2 = 20`, остаток `0`. В конце читаем остатки снизу вверх.",
            "en": "First line: `40 : 2 = 20`, remainder `0`. At the end read the remainders from bottom to top."
          }
        ],
        "solution": [
          {
            "he": "מחלקים ב־2 שוב ושוב, עד שהשלם מגיע ל־0. רושמים כל שארית:",
            "ru": "Делим на 2 снова и снова, пока целая часть не станет 0. Записываем каждый остаток:",
            "en": "Divide by 2 again and again until the quotient is 0. Write down each remainder:"
          },
          {
            "he": "`40 : 2 = 20`, שארית `0`",
            "ru": "`40 : 2 = 20`, остаток `0`",
            "en": "`40 : 2 = 20`, remainder `0`"
          },
          {
            "he": "`20 : 2 = 10`, שארית `0`",
            "ru": "`20 : 2 = 10`, остаток `0`",
            "en": "`20 : 2 = 10`, remainder `0`"
          },
          {
            "he": "`10 : 2 = 5`, שארית `0`",
            "ru": "`10 : 2 = 5`, остаток `0`",
            "en": "`10 : 2 = 5`, remainder `0`"
          },
          {
            "he": "`5 : 2 = 2`, שארית `1`",
            "ru": "`5 : 2 = 2`, остаток `1`",
            "en": "`5 : 2 = 2`, remainder `1`"
          },
          {
            "he": "`2 : 2 = 1`, שארית `0`",
            "ru": "`2 : 2 = 1`, остаток `0`",
            "en": "`2 : 2 = 1`, remainder `0`"
          },
          {
            "he": "`1 : 2 = 0`, שארית `1`",
            "ru": "`1 : 2 = 0`, остаток `1`",
            "en": "`1 : 2 = 0`, remainder `1`"
          },
          {
            "he": "קוראים את השאריות מלמטה למעלה: `101000`",
            "ru": "Читаем остатки снизу вверх: `101000`",
            "en": "Read the remainders from bottom to top: `101000`"
          },
          {
            "he": "תשובה: `40₁₀ = 101000₂`",
            "ru": "Ответ: `40₁₀ = 101000₂`",
            "en": "Answer: `40₁₀ = 101000₂`"
          },
          {
            "he": "בדיקה: ממירים בחזרה — `101000₂ = 40`",
            "ru": "Проверка: переводим обратно — `101000₂ = 40`",
            "en": "Check: convert back — `101000₂ = 40`"
          }
        ]
      },
      {
        "id": "t2-1",
        "example": {"he": "`1016` → כותבים את המשקלים ומתחילים מ־512 (המשקל הכי גדול שלא גדול מ־1016):\n```\n512 256 128 64 32 16 8 4 2 1\n\n1016 − 512 = 504 → 1\n504 − 256 = 248 → 1\n248 − 128 = 120 → 1\n120 − 64 = 56 → 1\n56 − 32 = 24 → 1\n24 − 16 = 8 → 1\n8 − 8 = 0 → 1\n4 > 0 → 0\n2 > 0 → 0\n1 > 0 → 0\n```\nקוראים משמאל לימין → `1111111000₂`.", "ru": "`1016` → веса: `512 256 128 64 32 16 8 4 2 1`. Начинаем с 512 (самый большой вес, не больше 1016).\n1016 − 512 = 504 → 1\n504 − 256 = 248 → 1\n248 − 128 = 120 → 1\n120 − 64 = 56 → 1\n56 − 32 = 24 → 1\n24 − 16 = 8 → 1\n8 − 8 = 0 → 1\n4 > 0 → 0\n2 > 0 → 0\n1 > 0 → 0\nЧитаем слева направо → `1111111000₂`.", "en": "`1016` → the weights: `512 256 128 64 32 16 8 4 2 1`. Start at 512 (the largest weight not bigger than 1016).\n1016 − 512 = 504 → 1\n504 − 256 = 248 → 1\n248 − 128 = 120 → 1\n120 − 64 = 56 → 1\n56 − 32 = 24 → 1\n24 − 16 = 8 → 1\n8 − 8 = 0 → 1\n4 > 0 → 0\n2 > 0 → 0\n1 > 0 → 0\nRead from left to right → `1111111000₂`."},
        "group": "2",
        "label": "2א",
        "kind": "text",
        "text": {
          "he": "המירו את `1020` לבסיס 2 בשיטה הטבלאית.",
          "ru": "Переведите `1020` в двоичную систему методом таблицы.",
          "en": "Convert `1020` to base 2 using the table method."
        },
        "answer": {
          "accept": [
            "1111111100",
            "001111111100",
            "0000001111111100"
          ]
        },
        "hints": [
          {
            "he": "כותבים את המשקלים: `512 256 128 64 32 16 8 4 2 1`. מתחילים מהגדול.",
            "ru": "Выпиши веса: `512 256 128 64 32 16 8 4 2 1`. Начни с самого большого.",
            "en": "Write the weights: `512 256 128 64 32 16 8 4 2 1`. Start with the largest."
          },
          {
            "he": "`1020 − 512 = 508` → 1. ממשיכים עם `508` למשקל הבא.",
            "ru": "`1020 − 512 = 508` → 1. Дальше с `508` к следующему весу.",
            "en": "`1020 − 512 = 508` → 1. Continue with `508` at the next weight."
          }
        ],
        "solution": [
          {
            "he": "המשקל הגדול ביותר שלא גדול מ־`1020` הוא `512`.",
            "ru": "Самый большой вес, не больше `1020`, это `512`.",
            "en": "The largest weight not bigger than `1020` is `512`."
          },
          "1020 − 512 = 508 → 1",
          "508 − 256 = 252 → 1",
          "252 − 128 = 124 → 1",
          "124 − 64 = 60 → 1",
          "60 − 32 = 28 → 1",
          "28 − 16 = 12 → 1",
          "12 − 8 = 4 → 1",
          "4 − 4 = 0 → 1",
          "2, 1 > 0 → 0, 0",
          {
            "he": "קוראים את ה־1 וה־0 משמאל לימין: `1111111100`",
            "ru": "Читаем 1 и 0 слева направо: `1111111100`",
            "en": "Read the 1s and 0s from left to right: `1111111100`"
          },
          {
            "he": "תשובה: `1020₁₀ = 1111111100₂`",
            "ru": "Ответ: `1020₁₀ = 1111111100₂`",
            "en": "Answer: `1020₁₀ = 1111111100₂`"
          }
        ]
      },
      {
        "id": "t2-2",
        "example": {"he": "`83` → כותבים את המשקלים ומתחילים מ־64 (המשקל הכי גדול שלא גדול מ־83):\n```\n64 32 16 8 4 2 1\n\n83 − 64 = 19 → 1\n32 > 19 → 0\n19 − 16 = 3 → 1\n8 > 3 → 0\n4 > 3 → 0\n3 − 2 = 1 → 1\n1 − 1 = 0 → 1\n```\nקוראים משמאל לימין → `1010011₂`.", "ru": "`83` → веса: `64 32 16 8 4 2 1`. Начинаем с 64 (самый большой вес, не больше 83).\n83 − 64 = 19 → 1\n32 > 19 → 0\n19 − 16 = 3 → 1\n8 > 3 → 0\n4 > 3 → 0\n3 − 2 = 1 → 1\n1 − 1 = 0 → 1\nЧитаем слева направо → `1010011₂`.", "en": "`83` → the weights: `64 32 16 8 4 2 1`. Start at 64 (the largest weight not bigger than 83).\n83 − 64 = 19 → 1\n32 > 19 → 0\n19 − 16 = 3 → 1\n8 > 3 → 0\n4 > 3 → 0\n3 − 2 = 1 → 1\n1 − 1 = 0 → 1\nRead from left to right → `1010011₂`."},
        "group": "2",
        "label": "2ב",
        "kind": "text",
        "text": {
          "he": "המירו את `75` לבסיס 2 בשיטה הטבלאית.",
          "ru": "Переведите `75` в двоичную систему методом таблицы.",
          "en": "Convert `75` to base 2 using the table method."
        },
        "answer": {
          "accept": [
            "1001011",
            "01001011",
            "000001001011",
            "0000000001001011"
          ]
        },
        "hints": [
          {
            "he": "כותבים את המשקלים: `64 32 16 8 4 2 1`. מתחילים מהגדול.",
            "ru": "Выпиши веса: `64 32 16 8 4 2 1`. Начни с самого большого.",
            "en": "Write the weights: `64 32 16 8 4 2 1`. Start with the largest."
          },
          {
            "he": "`75 − 64 = 11` → 1. ממשיכים עם `11` למשקל הבא.",
            "ru": "`75 − 64 = 11` → 1. Дальше с `11` к следующему весу.",
            "en": "`75 − 64 = 11` → 1. Continue with `11` at the next weight."
          }
        ],
        "solution": [
          {
            "he": "המשקל הגדול ביותר שלא גדול מ־`75` הוא `64`.",
            "ru": "Самый большой вес, не больше `75`, это `64`.",
            "en": "The largest weight not bigger than `75` is `64`."
          },
          "75 − 64 = 11 → 1",
          "32, 16 > 11 → 0, 0",
          "11 − 8 = 3 → 1",
          "4 > 3 → 0",
          "3 − 2 = 1 → 1",
          "1 − 1 = 0 → 1",
          {
            "he": "קוראים את ה־1 וה־0 משמאל לימין: `1001011`",
            "ru": "Читаем 1 и 0 слева направо: `1001011`",
            "en": "Read the 1s and 0s from left to right: `1001011`"
          },
          {
            "he": "תשובה: `75₁₀ = 1001011₂`",
            "ru": "Ответ: `75₁₀ = 1001011₂`",
            "en": "Answer: `75₁₀ = 1001011₂`"
          }
        ]
      },
      {
        "id": "t2-3",
        "example": {"he": "`254` → כותבים את המשקלים ומתחילים מ־128 (המשקל הכי גדול שלא גדול מ־254):\n```\n128 64 32 16 8 4 2 1\n\n254 − 128 = 126 → 1\n126 − 64 = 62 → 1\n62 − 32 = 30 → 1\n30 − 16 = 14 → 1\n14 − 8 = 6 → 1\n6 − 4 = 2 → 1\n2 − 2 = 0 → 1\n1 > 0 → 0\n```\nקוראים משמאל לימין → `11111110₂`.", "ru": "`254` → веса: `128 64 32 16 8 4 2 1`. Начинаем с 128 (самый большой вес, не больше 254).\n254 − 128 = 126 → 1\n126 − 64 = 62 → 1\n62 − 32 = 30 → 1\n30 − 16 = 14 → 1\n14 − 8 = 6 → 1\n6 − 4 = 2 → 1\n2 − 2 = 0 → 1\n1 > 0 → 0\nЧитаем слева направо → `11111110₂`.", "en": "`254` → the weights: `128 64 32 16 8 4 2 1`. Start at 128 (the largest weight not bigger than 254).\n254 − 128 = 126 → 1\n126 − 64 = 62 → 1\n62 − 32 = 30 → 1\n30 − 16 = 14 → 1\n14 − 8 = 6 → 1\n6 − 4 = 2 → 1\n2 − 2 = 0 → 1\n1 > 0 → 0\nRead from left to right → `11111110₂`."},
        "group": "2",
        "label": "2ג",
        "kind": "text",
        "text": {
          "he": "המירו את `510` לבסיס 2 בשיטה הטבלאית.",
          "ru": "Переведите `510` в двоичную систему методом таблицы.",
          "en": "Convert `510` to base 2 using the table method."
        },
        "answer": {
          "accept": [
            "111111110",
            "000111111110",
            "0000000111111110"
          ]
        },
        "hints": [
          {
            "he": "כותבים את המשקלים: `256 128 64 32 16 8 4 2 1`. מתחילים מהגדול.",
            "ru": "Выпиши веса: `256 128 64 32 16 8 4 2 1`. Начни с самого большого.",
            "en": "Write the weights: `256 128 64 32 16 8 4 2 1`. Start with the largest."
          },
          {
            "he": "`510 − 256 = 254` → 1. ממשיכים עם `254` למשקל הבא.",
            "ru": "`510 − 256 = 254` → 1. Дальше с `254` к следующему весу.",
            "en": "`510 − 256 = 254` → 1. Continue with `254` at the next weight."
          }
        ],
        "solution": [
          {
            "he": "המשקל הגדול ביותר שלא גדול מ־`510` הוא `256`.",
            "ru": "Самый большой вес, не больше `510`, это `256`.",
            "en": "The largest weight not bigger than `510` is `256`."
          },
          "510 − 256 = 254 → 1",
          "254 − 128 = 126 → 1",
          "126 − 64 = 62 → 1",
          "62 − 32 = 30 → 1",
          "30 − 16 = 14 → 1",
          "14 − 8 = 6 → 1",
          "6 − 4 = 2 → 1",
          "2 − 2 = 0 → 1",
          "1 > 0 → 0",
          {
            "he": "קוראים את ה־1 וה־0 משמאל לימין: `111111110`",
            "ru": "Читаем 1 и 0 слева направо: `111111110`",
            "en": "Read the 1s and 0s from left to right: `111111110`"
          },
          {
            "he": "תשובה: `510₁₀ = 111111110₂`",
            "ru": "Ответ: `510₁₀ = 111111110₂`",
            "en": "Answer: `510₁₀ = 111111110₂`"
          }
        ]
      },
      {
        "id": "t2-4",
        "example": {"he": "`2048` → כותבים את המשקלים ומתחילים מ־2048 (המשקל הכי גדול שלא גדול מ־2048):\n```\n2048 1024 512 256 128 64 32 16 8 4 2 1\n\n2048 − 2048 = 0 → 1\n1024 > 0 → 0\n512 > 0 → 0\n256 > 0 → 0\n128 > 0 → 0\n64 > 0 → 0\n32 > 0 → 0\n16 > 0 → 0\n8 > 0 → 0\n4 > 0 → 0\n2 > 0 → 0\n1 > 0 → 0\n```\nקוראים משמאל לימין → `100000000000₂`.", "ru": "`2048` → веса: `2048 1024 512 256 128 64 32 16 8 4 2 1`. Начинаем с 2048 (самый большой вес, не больше 2048).\n2048 − 2048 = 0 → 1\n1024 > 0 → 0\n512 > 0 → 0\n256 > 0 → 0\n128 > 0 → 0\n64 > 0 → 0\n32 > 0 → 0\n16 > 0 → 0\n8 > 0 → 0\n4 > 0 → 0\n2 > 0 → 0\n1 > 0 → 0\nЧитаем слева направо → `100000000000₂`.", "en": "`2048` → the weights: `2048 1024 512 256 128 64 32 16 8 4 2 1`. Start at 2048 (the largest weight not bigger than 2048).\n2048 − 2048 = 0 → 1\n1024 > 0 → 0\n512 > 0 → 0\n256 > 0 → 0\n128 > 0 → 0\n64 > 0 → 0\n32 > 0 → 0\n16 > 0 → 0\n8 > 0 → 0\n4 > 0 → 0\n2 > 0 → 0\n1 > 0 → 0\nRead from left to right → `100000000000₂`."},
        "group": "2",
        "label": "2ד",
        "kind": "text",
        "text": {
          "he": "המירו את `4096` לבסיס 2 בשיטה הטבלאית.",
          "ru": "Переведите `4096` в двоичную систему методом таблицы.",
          "en": "Convert `4096` to base 2 using the table method."
        },
        "answer": {
          "accept": [
            "1000000000000",
            "0001000000000000"
          ]
        },
        "hints": [
          {
            "he": "כותבים את המשקלים: `4096 2048 1024 512 256 128 64 32 16 8 4 2 1`. מתחילים מהגדול.",
            "ru": "Выпиши веса: `4096 2048 1024 512 256 128 64 32 16 8 4 2 1`. Начни с самого большого.",
            "en": "Write the weights: `4096 2048 1024 512 256 128 64 32 16 8 4 2 1`. Start with the largest."
          },
          {
            "he": "`4096 − 4096 = 0` → 1. ממשיכים עם `0` למשקל הבא.",
            "ru": "`4096 − 4096 = 0` → 1. Дальше с `0` к следующему весу.",
            "en": "`4096 − 4096 = 0` → 1. Continue with `0` at the next weight."
          }
        ],
        "solution": [
          {
            "he": "המשקל הגדול ביותר שלא גדול מ־`4096` הוא `4096`.",
            "ru": "Самый большой вес, не больше `4096`, это `4096`.",
            "en": "The largest weight not bigger than `4096` is `4096`."
          },
          "4096 − 4096 = 0 → 1",
          {
            "he": "`2048` … `1` גדולים מ־`0` → 12 אפסים",
            "ru": "`2048` … `1` больше `0` → 12 нулей",
            "en": "`2048` … `1` are bigger than `0` → 12 zeros"
          },
          {
            "he": "קוראים את ה־1 וה־0 משמאל לימין: `1000000000000`",
            "ru": "Читаем 1 и 0 слева направо: `1000000000000`",
            "en": "Read the 1s and 0s from left to right: `1000000000000`"
          },
          {
            "he": "תשובה: `4096₁₀ = 1000000000000₂`",
            "ru": "Ответ: `4096₁₀ = 1000000000000₂`",
            "en": "Answer: `4096₁₀ = 1000000000000₂`"
          }
        ]
      },
      {
        "id": "t3-1",
        "example": {"he": "`1101₂` → המשקלים מימין לשמאל: 1, 2, 4, 8.\nאיפה שיש 1, לוקחים את המשקל: 8, 4, 1.\n`8 + 4 + 1 = 13` → `13₁₀`.", "ru": "`1101₂` → веса справа налево: 1, 2, 4, 8.\nГде стоит 1, берём вес: 8, 4 и 1.\n8 + 4 + 1 = 13 → `13₁₀`.", "en": "`1101₂` → the weights from right to left: 1, 2, 4, 8.\nWhere there is a 1, take the weight: 8, 4 and 1.\n8 + 4 + 1 = 13 → `13₁₀`."},
        "group": "3",
        "label": "3א",
        "kind": "number",
        "text": {
          "he": "המירו את `1011₂` לבסיס 10.",
          "ru": "Переведите `1011₂` в десятичную систему.",
          "en": "Convert `1011₂` to base 10."
        },
        "answer": {
          "value": "11"
        },
        "hints": [
          {
            "he": "המשקלים מימין: `1, 2, 4, 8`. מכפילים כל ספרה במשקל שלה.",
            "ru": "Веса справа налево: `1, 2, 4, 8`. Каждую цифру умножаем на её вес.",
            "en": "Weights from the right: `1, 2, 4, 8`. Multiply each digit by its weight."
          },
          {
            "he": "עכשיו מחברים: `1 × 8 + 0 × 4 + 1 × 2 + 1 × 1`",
            "ru": "Теперь сложи: `1 × 8 + 0 × 4 + 1 × 2 + 1 × 1`",
            "en": "Now add: `1 × 8 + 0 × 4 + 1 × 2 + 1 × 1`"
          }
        ],
        "solution": [
          {
            "he": "מעל כל ספרה כותבים את המשקל שלה, מימין לשמאל: `2³  2²  2¹  2⁰`",
            "ru": "Над каждой цифрой пишем её вес (справа налево): `2³  2²  2¹  2⁰`",
            "en": "Write each digit's weight above it, from the right: `2³  2²  2¹  2⁰`"
          },
          {
            "he": "מכפילים כל ספרה במשקל שלה ומחברים:",
            "ru": "Умножаем каждую цифру на её вес и складываем:",
            "en": "Multiply each digit by its weight and add:"
          },
          "1 × 2³ + 0 × 2² + 1 × 2¹ + 1 × 2⁰",
          "= 1 × 8 + 0 × 4 + 1 × 2 + 1 × 1",
          "= 8 + 0 + 2 + 1",
          "= 11",
          {
            "he": "תשובה: `1011₂ = 11₁₀`",
            "ru": "Ответ: `1011₂ = 11₁₀`",
            "en": "Answer: `1011₂ = 11₁₀`"
          }
        ]
      },
      {
        "id": "t3-2",
        "example": {"he": "`1010₂` → המשקלים מימין לשמאל: 1, 2, 4, 8.\nאיפה שיש 1, לוקחים את המשקל: 8, 2.\n`8 + 2 = 10` → `10₁₀`.", "ru": "`1010₂` → веса справа налево: 1, 2, 4, 8.\nГде стоит 1, берём вес: 8 и 2.\n8 + 2 = 10 → `10₁₀`.", "en": "`1010₂` → the weights from right to left: 1, 2, 4, 8.\nWhere there is a 1, take the weight: 8 and 2.\n8 + 2 = 10 → `10₁₀`."},
        "group": "3",
        "label": "3ב",
        "kind": "number",
        "text": {
          "he": "המירו את `1001₂` לבסיס 10.",
          "ru": "Переведите `1001₂` в десятичную систему.",
          "en": "Convert `1001₂` to base 10."
        },
        "answer": {
          "value": "9"
        },
        "hints": [
          {
            "he": "המשקלים מימין: `1, 2, 4, 8`. מכפילים כל ספרה במשקל שלה.",
            "ru": "Веса справа налево: `1, 2, 4, 8`. Каждую цифру умножаем на её вес.",
            "en": "Weights from the right: `1, 2, 4, 8`. Multiply each digit by its weight."
          },
          {
            "he": "עכשיו מחברים: `1 × 8 + 0 × 4 + 0 × 2 + 1 × 1`",
            "ru": "Теперь сложи: `1 × 8 + 0 × 4 + 0 × 2 + 1 × 1`",
            "en": "Now add: `1 × 8 + 0 × 4 + 0 × 2 + 1 × 1`"
          }
        ],
        "solution": [
          {
            "he": "מעל כל ספרה כותבים את המשקל שלה, מימין לשמאל: `2³  2²  2¹  2⁰`",
            "ru": "Над каждой цифрой пишем её вес (справа налево): `2³  2²  2¹  2⁰`",
            "en": "Write each digit's weight above it, from the right: `2³  2²  2¹  2⁰`"
          },
          {
            "he": "מכפילים כל ספרה במשקל שלה ומחברים:",
            "ru": "Умножаем каждую цифру на её вес и складываем:",
            "en": "Multiply each digit by its weight and add:"
          },
          "1 × 2³ + 0 × 2² + 0 × 2¹ + 1 × 2⁰",
          "= 1 × 8 + 0 × 4 + 0 × 2 + 1 × 1",
          "= 8 + 0 + 0 + 1",
          "= 9",
          {
            "he": "תשובה: `1001₂ = 9₁₀`",
            "ru": "Ответ: `1001₂ = 9₁₀`",
            "en": "Answer: `1001₂ = 9₁₀`"
          }
        ]
      },
      {
        "id": "t3-3",
        "example": {"he": "`1110₂` → המשקלים מימין לשמאל: 1, 2, 4, 8.\nאיפה שיש 1, לוקחים את המשקל: 8, 4, 2.\n`8 + 4 + 2 = 14` → `14₁₀`.", "ru": "`1110₂` → веса справа налево: 1, 2, 4, 8.\nГде стоит 1, берём вес: 8, 4 и 2.\n8 + 4 + 2 = 14 → `14₁₀`.", "en": "`1110₂` → the weights from right to left: 1, 2, 4, 8.\nWhere there is a 1, take the weight: 8, 4 and 2.\n8 + 4 + 2 = 14 → `14₁₀`."},
        "group": "3",
        "label": "3ג",
        "kind": "number",
        "text": {
          "he": "המירו את `1100₂` לבסיס 10.",
          "ru": "Переведите `1100₂` в десятичную систему.",
          "en": "Convert `1100₂` to base 10."
        },
        "answer": {
          "value": "12"
        },
        "hints": [
          {
            "he": "המשקלים מימין: `1, 2, 4, 8`. מכפילים כל ספרה במשקל שלה.",
            "ru": "Веса справа налево: `1, 2, 4, 8`. Каждую цифру умножаем на её вес.",
            "en": "Weights from the right: `1, 2, 4, 8`. Multiply each digit by its weight."
          },
          {
            "he": "עכשיו מחברים: `1 × 8 + 1 × 4 + 0 × 2 + 0 × 1`",
            "ru": "Теперь сложи: `1 × 8 + 1 × 4 + 0 × 2 + 0 × 1`",
            "en": "Now add: `1 × 8 + 1 × 4 + 0 × 2 + 0 × 1`"
          }
        ],
        "solution": [
          {
            "he": "מעל כל ספרה כותבים את המשקל שלה, מימין לשמאל: `2³  2²  2¹  2⁰`",
            "ru": "Над каждой цифрой пишем её вес (справа налево): `2³  2²  2¹  2⁰`",
            "en": "Write each digit's weight above it, from the right: `2³  2²  2¹  2⁰`"
          },
          {
            "he": "מכפילים כל ספרה במשקל שלה ומחברים:",
            "ru": "Умножаем каждую цифру на её вес и складываем:",
            "en": "Multiply each digit by its weight and add:"
          },
          "1 × 2³ + 1 × 2² + 0 × 2¹ + 0 × 2⁰",
          "= 1 × 8 + 1 × 4 + 0 × 2 + 0 × 1",
          "= 8 + 4 + 0 + 0",
          "= 12",
          {
            "he": "תשובה: `1100₂ = 12₁₀`",
            "ru": "Ответ: `1100₂ = 12₁₀`",
            "en": "Answer: `1100₂ = 12₁₀`"
          }
        ]
      },
      {
        "id": "t3-4",
        "example": {"he": "`111011₂` → המשקלים מימין לשמאל: 1, 2, 4, 8, 16, 32.\nאיפה שיש 1, לוקחים את המשקל: 32, 16, 8, 2, 1.\n`32 + 16 + 8 + 2 + 1 = 59` → `59₁₀`.", "ru": "`111011₂` → веса справа налево: 1, 2, 4, 8, 16, 32.\nГде стоит 1, берём вес: 32, 16, 8, 2 и 1.\n32 + 16 + 8 + 2 + 1 = 59 → `59₁₀`.", "en": "`111011₂` → the weights from right to left: 1, 2, 4, 8, 16, 32.\nWhere there is a 1, take the weight: 32, 16, 8, 2 and 1.\n32 + 16 + 8 + 2 + 1 = 59 → `59₁₀`."},
        "group": "3",
        "label": "3ד",
        "kind": "number",
        "text": {
          "he": "המירו את `110111₂` לבסיס 10.",
          "ru": "Переведите `110111₂` в десятичную систему.",
          "en": "Convert `110111₂` to base 10."
        },
        "answer": {
          "value": "55"
        },
        "hints": [
          {
            "he": "המשקלים מימין: `1, 2, 4, 8, 16, 32`. מכפילים כל ספרה במשקל שלה.",
            "ru": "Веса справа налево: `1, 2, 4, 8, 16, 32`. Каждую цифру умножаем на её вес.",
            "en": "Weights from the right: `1, 2, 4, 8, 16, 32`. Multiply each digit by its weight."
          },
          {
            "he": "עכשיו מחברים: `1 × 32 + 1 × 16 + 0 × 8 + 1 × 4 + 1 × 2 + 1 × 1`",
            "ru": "Теперь сложи: `1 × 32 + 1 × 16 + 0 × 8 + 1 × 4 + 1 × 2 + 1 × 1`",
            "en": "Now add: `1 × 32 + 1 × 16 + 0 × 8 + 1 × 4 + 1 × 2 + 1 × 1`"
          }
        ],
        "solution": [
          {
            "he": "מעל כל ספרה כותבים את המשקל שלה, מימין לשמאל: `2⁵  2⁴  2³  2²  2¹  2⁰`",
            "ru": "Над каждой цифрой пишем её вес (справа налево): `2⁵  2⁴  2³  2²  2¹  2⁰`",
            "en": "Write each digit's weight above it, from the right: `2⁵  2⁴  2³  2²  2¹  2⁰`"
          },
          {
            "he": "מכפילים כל ספרה במשקל שלה ומחברים:",
            "ru": "Умножаем каждую цифру на её вес и складываем:",
            "en": "Multiply each digit by its weight and add:"
          },
          "1 × 2⁵ + 1 × 2⁴ + 0 × 2³ + 1 × 2² + 1 × 2¹ + 1 × 2⁰",
          "= 1 × 32 + 1 × 16 + 0 × 8 + 1 × 4 + 1 × 2 + 1 × 1",
          "= 32 + 16 + 0 + 4 + 2 + 1",
          "= 55",
          {
            "he": "תשובה: `110111₂ = 55₁₀`",
            "ru": "Ответ: `110111₂ = 55₁₀`",
            "en": "Answer: `110111₂ = 55₁₀`"
          }
        ]
      }
    ],
    "ai": [
      {
        "id": "ai1-1",
        "example": {"he": "`11₁₀` → מחלקים ב־2 ורושמים שאריות:\n`11 : 2 = 5`, שארית 1\n`5 : 2 = 2`, שארית 1\n`2 : 2 = 1`, שארית 0\n`1 : 2 = 0`, שארית 1\nקוראים את השאריות מלמטה למעלה → `1011₂`.", "ru": "`11₁₀` → делим на 2 и записываем остатки:\n11 : 2 = 5, остаток 1\n5 : 2 = 2, остаток 1\n2 : 2 = 1, остаток 0\n1 : 2 = 0, остаток 1\nЧитаем остатки снизу вверх → `1011₂`.", "en": "`11₁₀` → divide by 2 and write down the remainders:\n11 : 2 = 5, remainder 1\n5 : 2 = 2, remainder 1\n2 : 2 = 1, remainder 0\n1 : 2 = 0, remainder 1\nRead the remainders from bottom to top → `1011₂`."},
        "level": 1,
        "label": "1.1",
        "kind": "text",
        "text": {
          "he": "המירו את `13` לבסיס 2 בשיטת החלוקה ב־2.",
          "ru": "Переведите `13` в двоичную систему делением на 2.",
          "en": "Convert `13` to base 2 using division by 2."
        },
        "answer": {
          "accept": [
            "1101",
            "00001101",
            "000000001101",
            "0000000000001101"
          ]
        },
        "hints": [
          {
            "he": "מחלקים ב־2: השלם עובר לשורה הבאה, השארית נרשמת בצד. ממשיכים עד שהשלם הוא 0.",
            "ru": "Делим на 2: целая часть идёт в следующую строку, остаток пишем сбоку. Продолжаем, пока целая часть не станет 0.",
            "en": "Divide by 2: the quotient goes to the next line, the remainder is written on the side. Continue until the quotient is 0."
          },
          {
            "he": "השורה הראשונה: `13 : 2 = 6`, שארית `1`. בסוף קוראים את השאריות מלמטה למעלה.",
            "ru": "Первая строка: `13 : 2 = 6`, остаток `1`. В конце читаем остатки снизу вверх.",
            "en": "First line: `13 : 2 = 6`, remainder `1`. At the end read the remainders from bottom to top."
          }
        ],
        "solution": [
          {
            "he": "מחלקים ב־2 שוב ושוב, עד שהשלם מגיע ל־0. רושמים כל שארית:",
            "ru": "Делим на 2 снова и снова, пока целая часть не станет 0. Записываем каждый остаток:",
            "en": "Divide by 2 again and again until the quotient is 0. Write down each remainder:"
          },
          {
            "he": "`13 : 2 = 6`, שארית `1`",
            "ru": "`13 : 2 = 6`, остаток `1`",
            "en": "`13 : 2 = 6`, remainder `1`"
          },
          {
            "he": "`6 : 2 = 3`, שארית `0`",
            "ru": "`6 : 2 = 3`, остаток `0`",
            "en": "`6 : 2 = 3`, remainder `0`"
          },
          {
            "he": "`3 : 2 = 1`, שארית `1`",
            "ru": "`3 : 2 = 1`, остаток `1`",
            "en": "`3 : 2 = 1`, remainder `1`"
          },
          {
            "he": "`1 : 2 = 0`, שארית `1`",
            "ru": "`1 : 2 = 0`, остаток `1`",
            "en": "`1 : 2 = 0`, remainder `1`"
          },
          {
            "he": "קוראים את השאריות מלמטה למעלה: `1101`",
            "ru": "Читаем остатки снизу вверх: `1101`",
            "en": "Read the remainders from bottom to top: `1101`"
          },
          {
            "he": "תשובה: `13₁₀ = 1101₂`",
            "ru": "Ответ: `13₁₀ = 1101₂`",
            "en": "Answer: `13₁₀ = 1101₂`"
          },
          {
            "he": "בדיקה: ממירים בחזרה — `1101₂ = 13`",
            "ru": "Проверка: переводим обратно — `1101₂ = 13`",
            "en": "Check: convert back — `1101₂ = 13`"
          }
        ]
      },
      {
        "id": "ai1-2",
        "example": {"he": "`11001₂` → המשקלים מימין לשמאל: 1, 2, 4, 8, 16.\nאיפה שיש 1, לוקחים את המשקל: 16, 8, 1.\n`16 + 8 + 1 = 25` → `25₁₀`.", "ru": "`11001₂` → веса справа налево: 1, 2, 4, 8, 16.\nГде стоит 1, берём вес: 16, 8 и 1.\n16 + 8 + 1 = 25 → `25₁₀`.", "en": "`11001₂` → the weights from right to left: 1, 2, 4, 8, 16.\nWhere there is a 1, take the weight: 16, 8 and 1.\n16 + 8 + 1 = 25 → `25₁₀`."},
        "level": 1,
        "label": "1.2",
        "kind": "number",
        "text": {
          "he": "המירו את `10110₂` לבסיס 10.",
          "ru": "Переведите `10110₂` в десятичную систему.",
          "en": "Convert `10110₂` to base 10."
        },
        "answer": {
          "value": "22"
        },
        "hints": [
          {
            "he": "המשקלים מימין: `1, 2, 4, 8, 16`. מכפילים כל ספרה במשקל שלה.",
            "ru": "Веса справа налево: `1, 2, 4, 8, 16`. Каждую цифру умножаем на её вес.",
            "en": "Weights from the right: `1, 2, 4, 8, 16`. Multiply each digit by its weight."
          },
          {
            "he": "עכשיו מחברים: `1 × 16 + 0 × 8 + 1 × 4 + 1 × 2 + 0 × 1`",
            "ru": "Теперь сложи: `1 × 16 + 0 × 8 + 1 × 4 + 1 × 2 + 0 × 1`",
            "en": "Now add: `1 × 16 + 0 × 8 + 1 × 4 + 1 × 2 + 0 × 1`"
          }
        ],
        "solution": [
          {
            "he": "מעל כל ספרה כותבים את המשקל שלה, מימין לשמאל: `2⁴  2³  2²  2¹  2⁰`",
            "ru": "Над каждой цифрой пишем её вес (справа налево): `2⁴  2³  2²  2¹  2⁰`",
            "en": "Write each digit's weight above it, from the right: `2⁴  2³  2²  2¹  2⁰`"
          },
          {
            "he": "מכפילים כל ספרה במשקל שלה ומחברים:",
            "ru": "Умножаем каждую цифру на её вес и складываем:",
            "en": "Multiply each digit by its weight and add:"
          },
          "1 × 2⁴ + 0 × 2³ + 1 × 2² + 1 × 2¹ + 0 × 2⁰",
          "= 1 × 16 + 0 × 8 + 1 × 4 + 1 × 2 + 0 × 1",
          "= 16 + 0 + 4 + 2 + 0",
          "= 22",
          {
            "he": "תשובה: `10110₂ = 22₁₀`",
            "ru": "Ответ: `10110₂ = 22₁₀`",
            "en": "Answer: `10110₂ = 22₁₀`"
          }
        ]
      },
      {
        "id": "ai1-3",
        "example": {"he": "`111₂` → המשקלים מימין לשמאל: 1, 2, 4.\nאיפה שיש 1, לוקחים את המשקל: 4, 2, 1.\n`4 + 2 + 1 = 7` → `7₁₀`.", "ru": "`111₂` → веса справа налево: 1, 2, 4.\nГде стоит 1, берём вес: 4, 2 и 1.\n4 + 2 + 1 = 7 → `7₁₀`.", "en": "`111₂` → the weights from right to left: 1, 2, 4.\nWhere there is a 1, take the weight: 4, 2 and 1.\n4 + 2 + 1 = 7 → `7₁₀`."},
        "level": 1,
        "label": "1.3",
        "kind": "number",
        "text": {
          "he": "המירו את `1111₂` לבסיס 10.",
          "ru": "Переведите `1111₂` в десятичную систему.",
          "en": "Convert `1111₂` to base 10."
        },
        "answer": {
          "value": "15"
        },
        "hints": [
          {
            "he": "המשקלים מימין: `1, 2, 4, 8`. מכפילים כל ספרה במשקל שלה.",
            "ru": "Веса справа налево: `1, 2, 4, 8`. Каждую цифру умножаем на её вес.",
            "en": "Weights from the right: `1, 2, 4, 8`. Multiply each digit by its weight."
          },
          {
            "he": "עכשיו מחברים: `1 × 8 + 1 × 4 + 1 × 2 + 1 × 1`",
            "ru": "Теперь сложи: `1 × 8 + 1 × 4 + 1 × 2 + 1 × 1`",
            "en": "Now add: `1 × 8 + 1 × 4 + 1 × 2 + 1 × 1`"
          }
        ],
        "solution": [
          {
            "he": "מעל כל ספרה כותבים את המשקל שלה, מימין לשמאל: `2³  2²  2¹  2⁰`",
            "ru": "Над каждой цифрой пишем её вес (справа налево): `2³  2²  2¹  2⁰`",
            "en": "Write each digit's weight above it, from the right: `2³  2²  2¹  2⁰`"
          },
          {
            "he": "מכפילים כל ספרה במשקל שלה ומחברים:",
            "ru": "Умножаем каждую цифру на её вес и складываем:",
            "en": "Multiply each digit by its weight and add:"
          },
          "1 × 2³ + 1 × 2² + 1 × 2¹ + 1 × 2⁰",
          "= 1 × 8 + 1 × 4 + 1 × 2 + 1 × 1",
          "= 8 + 4 + 2 + 1",
          "= 15",
          {
            "he": "תשובה: `1111₂ = 15₁₀`",
            "ru": "Ответ: `1111₂ = 15₁₀`",
            "en": "Answer: `1111₂ = 15₁₀`"
          }
        ]
      },
      {
        "id": "ai1-4",
        "example": {"he": "שאלה דומה בנושא אחר: איזה זיכרון הכי מהיר והכי קטן?\nמסתכלים על פירמידת הזיכרון: ככל שגבוה יותר, מהיר יותר וקטן יותר.\nלמעלה ביותר האוגרים (רגיסטרים) → התשובה: אוגרים.", "ru": "Похожий вопрос на другую тему: какая память самая быстрая и самая маленькая?\nСмотрим на пирамиду памяти: чем выше, тем быстрее и меньше.\nНа самом верху регистры → ответ: регистры.", "en": "A similar question on another topic: which memory is the fastest and the smallest?\nLook at the memory pyramid: the higher, the faster and smaller.\nAt the very top are the registers → answer: registers."},
        "level": 1,
        "label": "1.4",
        "kind": "choice",
        "text": {
          "he": "איזה חלק במעבד מבצע חיבור ופעולות לוגיות (AND, OR, XOR, NOT)?",
          "ru": "Какая часть процессора выполняет сложение и логические операции (AND, OR, XOR, NOT)?",
          "en": "Which part of the CPU does addition and logic operations (AND, OR, XOR, NOT)?"
        },
        "options": [
          "ALU",
          "CU",
          "MMU"
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "A = Arithmetic, L = Logic.",
            "ru": "A = Arithmetic (арифметика), L = Logic (логика).",
            "en": "A = Arithmetic, L = Logic."
          }
        ],
        "solution": [
          {
            "he": "`ALU` = Arithmetic Logic Unit: חשבון (+ − × ÷) ולוגיקה (AND, OR, XOR, NOT).",
            "ru": "`ALU` = Arithmetic Logic Unit: арифметика (+ − × ÷) и логика (AND, OR, XOR, NOT).",
            "en": "`ALU` = Arithmetic Logic Unit: arithmetic (+ − × ÷) and logic (AND, OR, XOR, NOT)."
          },
          {
            "he": "`CU` היא יחידת הבקרה: מחליטה איזו יחידה עושה מה. `MMU` מעבירה נתונים מהזיכרון.",
            "ru": "`CU` — блок управления: решает, какой блок что делает. `MMU` переносит данные из памяти.",
            "en": "`CU` is the control unit: it decides which unit does what. `MMU` moves data from memory."
          },
          {
            "he": "תשובה: ALU",
            "ru": "Ответ: ALU",
            "en": "Answer: ALU"
          }
        ]
      },
      {
        "id": "ai2-1",
        "example": {"he": "`200` → כותבים את המשקלים ומתחילים מ־128 (המשקל הכי גדול שלא גדול מ־200):\n```\n128 64 32 16 8 4 2 1\n\n200 − 128 = 72 → 1\n72 − 64 = 8 → 1\n32 > 8 → 0\n16 > 8 → 0\n8 − 8 = 0 → 1\n4 > 0 → 0\n2 > 0 → 0\n1 > 0 → 0\n```\nקוראים משמאל לימין → `11001000₂`.", "ru": "`200` → веса: `128 64 32 16 8 4 2 1`. Начинаем с 128 (самый большой вес, не больше 200).\n200 − 128 = 72 → 1\n72 − 64 = 8 → 1\n32 > 8 → 0\n16 > 8 → 0\n8 − 8 = 0 → 1\n4 > 0 → 0\n2 > 0 → 0\n1 > 0 → 0\nЧитаем слева направо → `11001000₂`.", "en": "`200` → the weights: `128 64 32 16 8 4 2 1`. Start at 128 (the largest weight not bigger than 200).\n200 − 128 = 72 → 1\n72 − 64 = 8 → 1\n32 > 8 → 0\n16 > 8 → 0\n8 − 8 = 0 → 1\n4 > 0 → 0\n2 > 0 → 0\n1 > 0 → 0\nRead from left to right → `11001000₂`."},
        "level": 2,
        "label": "2.1",
        "kind": "text",
        "text": {
          "he": "המירו את `100` לבסיס 2 בשיטה הטבלאית.",
          "ru": "Переведите `100` в двоичную систему методом таблицы.",
          "en": "Convert `100` to base 2 using the table method."
        },
        "answer": {
          "accept": [
            "1100100",
            "01100100",
            "000001100100",
            "0000000001100100"
          ]
        },
        "hints": [
          {
            "he": "כותבים את המשקלים: `64 32 16 8 4 2 1`. מתחילים מהגדול.",
            "ru": "Выпиши веса: `64 32 16 8 4 2 1`. Начни с самого большого.",
            "en": "Write the weights: `64 32 16 8 4 2 1`. Start with the largest."
          },
          {
            "he": "`100 − 64 = 36` → 1. ממשיכים עם `36` למשקל הבא.",
            "ru": "`100 − 64 = 36` → 1. Дальше с `36` к следующему весу.",
            "en": "`100 − 64 = 36` → 1. Continue with `36` at the next weight."
          }
        ],
        "solution": [
          {
            "he": "המשקל הגדול ביותר שלא גדול מ־`100` הוא `64`.",
            "ru": "Самый большой вес, не больше `100`, это `64`.",
            "en": "The largest weight not bigger than `100` is `64`."
          },
          "100 − 64 = 36 → 1",
          "36 − 32 = 4 → 1",
          "16, 8 > 4 → 0, 0",
          "4 − 4 = 0 → 1",
          "2, 1 > 0 → 0, 0",
          {
            "he": "קוראים את ה־1 וה־0 משמאל לימין: `1100100`",
            "ru": "Читаем 1 и 0 слева направо: `1100100`",
            "en": "Read the 1s and 0s from left to right: `1100100`"
          },
          {
            "he": "תשובה: `100₁₀ = 1100100₂`",
            "ru": "Ответ: `100₁₀ = 1100100₂`",
            "en": "Answer: `100₁₀ = 1100100₂`"
          }
        ]
      },
      {
        "id": "ai2-2",
        "example": {"he": "`128` → כותבים את המשקלים ומתחילים מ־128 (המשקל הכי גדול שלא גדול מ־128):\n```\n128 64 32 16 8 4 2 1\n\n128 − 128 = 0 → 1\n64 > 0 → 0\n32 > 0 → 0\n16 > 0 → 0\n8 > 0 → 0\n4 > 0 → 0\n2 > 0 → 0\n1 > 0 → 0\n```\nקוראים משמאל לימין → `10000000₂`.", "ru": "`128` → веса: `128 64 32 16 8 4 2 1`. Начинаем с 128 (самый большой вес, не больше 128).\n128 − 128 = 0 → 1\n64 > 0 → 0\n32 > 0 → 0\n16 > 0 → 0\n8 > 0 → 0\n4 > 0 → 0\n2 > 0 → 0\n1 > 0 → 0\nЧитаем слева направо → `10000000₂`.", "en": "`128` → the weights: `128 64 32 16 8 4 2 1`. Start at 128 (the largest weight not bigger than 128).\n128 − 128 = 0 → 1\n64 > 0 → 0\n32 > 0 → 0\n16 > 0 → 0\n8 > 0 → 0\n4 > 0 → 0\n2 > 0 → 0\n1 > 0 → 0\nRead from left to right → `10000000₂`."},
        "level": 2,
        "label": "2.2",
        "kind": "text",
        "text": {
          "he": "המירו את `64` לבסיס 2 בשיטה הטבלאית.",
          "ru": "Переведите `64` в двоичную систему методом таблицы.",
          "en": "Convert `64` to base 2 using the table method."
        },
        "answer": {
          "accept": [
            "1000000",
            "01000000",
            "000001000000",
            "0000000001000000"
          ]
        },
        "hints": [
          {
            "he": "כותבים את המשקלים: `64 32 16 8 4 2 1`. מתחילים מהגדול.",
            "ru": "Выпиши веса: `64 32 16 8 4 2 1`. Начни с самого большого.",
            "en": "Write the weights: `64 32 16 8 4 2 1`. Start with the largest."
          },
          {
            "he": "`64 − 64 = 0` → 1. ממשיכים עם `0` למשקל הבא.",
            "ru": "`64 − 64 = 0` → 1. Дальше с `0` к следующему весу.",
            "en": "`64 − 64 = 0` → 1. Continue with `0` at the next weight."
          }
        ],
        "solution": [
          {
            "he": "המשקל הגדול ביותר שלא גדול מ־`64` הוא `64`.",
            "ru": "Самый большой вес, не больше `64`, это `64`.",
            "en": "The largest weight not bigger than `64` is `64`."
          },
          "64 − 64 = 0 → 1",
          {
            "he": "`32` … `1` גדולים מ־`0` → 6 אפסים",
            "ru": "`32` … `1` больше `0` → 6 нулей",
            "en": "`32` … `1` are bigger than `0` → 6 zeros"
          },
          {
            "he": "קוראים את ה־1 וה־0 משמאל לימין: `1000000`",
            "ru": "Читаем 1 и 0 слева направо: `1000000`",
            "en": "Read the 1s and 0s from left to right: `1000000`"
          },
          {
            "he": "תשובה: `64₁₀ = 1000000₂`",
            "ru": "Ответ: `64₁₀ = 1000000₂`",
            "en": "Answer: `64₁₀ = 1000000₂`"
          }
        ]
      },
      {
        "id": "ai2-3",
        "example": {"he": "המספר `1101₂`. ה־MSB הוא הביט הכי שמאלי.\nהמשקלים מימין לשמאל: 1, 2, 4, 8.\nהביט הכי שמאלי נמצא במקום של המשקל 8 → המשקל של ה־MSB הוא 8.", "ru": "Число `1101₂`. MSB — самый левый бит.\nВеса справа налево: 1, 2, 4, 8.\nСамый левый бит стоит на месте веса 8 → вес MSB = 8.", "en": "The number `1101₂`. The MSB is the leftmost bit.\nThe weights from right to left: 1, 2, 4, 8.\nThe leftmost bit is in the place of weight 8 → the MSB weight is 8."},
        "level": 2,
        "label": "2.3",
        "kind": "number",
        "text": {
          "he": "מה המשקל של ה־MSB במספר `100101₂`?",
          "ru": "Какой вес у MSB в числе `100101₂`?",
          "en": "What is the weight of the MSB in `100101₂`?"
        },
        "answer": {
          "value": "32"
        },
        "hints": [
          {
            "he": "MSB הוא הביט הכי שמאלי. סופרים כמה ספרות יש במספר.",
            "ru": "MSB — самый левый бит. Посчитай, сколько цифр в числе.",
            "en": "The MSB is the leftmost bit. Count how many digits the number has."
          },
          {
            "he": "יש 6 ספרות, ולכן המשקל השמאלי הוא `2⁵`.",
            "ru": "Цифр 6, значит левый вес `2⁵`.",
            "en": "There are 6 digits, so the leftmost weight is `2⁵`."
          }
        ],
        "solution": [
          {
            "he": "המשקלים מימין: `1, 2, 4, 8, 16, 32`",
            "ru": "Веса справа налево: `1, 2, 4, 8, 16, 32`",
            "en": "Weights from the right: `1, 2, 4, 8, 16, 32`"
          },
          {
            "he": "ב־`100101` יש 6 ספרות, וה־MSB עומד במקום השישי מימין.",
            "ru": "В `100101` шесть цифр, MSB стоит на шестом месте справа.",
            "en": "`100101` has 6 digits; the MSB is in the sixth place from the right."
          },
          "2⁵ = 2 × 2 × 2 × 2 × 2 = 32",
          {
            "he": "תשובה: 32",
            "ru": "Ответ: 32",
            "en": "Answer: 32"
          }
        ]
      },
      {
        "id": "ai2-4",
        "example": {"he": "בדיקה קטנה (לא מלאה): המספר 18 זוגי, לכן הביט האחרון (LSB) צריך להיות 0.\nאם הסטודנט קיבל `10011`, רואים את הטעות מיד: `LSB = 1`.\nאבל בדיקה כזאת לא תופסת הכול. תחשוב איזו בדיקה תראה שכל התשובה נכונה.", "ru": "Маленькая проверка (не полная): число 18 чётное, значит последний бит (LSB) должен быть 0.\nЕсли студент получил `10011`, ошибка видна сразу: LSB = 1.\nНо такая проверка ловит не всё. Подумай, какая проверка покажет, что верен весь ответ.", "en": "A small check (not a full one): 18 is even, so the last bit (LSB) must be 0.\nIf the student got `10011`, the mistake is seen at once: LSB = 1.\nBut this check does not catch everything. Think which check shows that the whole answer is right."},
        "level": 2,
        "label": "2.4",
        "kind": "choice",
        "text": {
          "he": "סטודנט המיר את `45` לבינארי וקיבל `101101`. איך בודקים שהתשובה נכונה?",
          "ru": "Студент перевёл `45` в двоичную и получил `101101`. Как проверить, что ответ верный?",
          "en": "A student converted `45` to binary and got `101101`. How do you check the answer?"
        },
        "options": [
          {
            "he": "ממירים את `101101₂` בחזרה לבסיס 10 ובודקים שיוצא 45",
            "ru": "Переводим `101101₂` обратно в десятичную и смотрим, получится ли 45",
            "en": "Convert `101101₂` back to base 10 and see if it gives 45"
          },
          {
            "he": "סופרים כמה ספרות 1 יש בתשובה",
            "ru": "Считаем, сколько единиц в ответе",
            "en": "Count how many 1s are in the answer"
          },
          {
            "he": "מחלקים את 45 ב־10",
            "ru": "Делим 45 на 10",
            "en": "Divide 45 by 10"
          }
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "בשיעור: \"איך מוכיחים שהתשובה נכונה?\" — הולכים בכיוון ההפוך.",
            "ru": "На уроке: «как доказать, что ответ верный?» — идём в обратную сторону.",
            "en": "In class: \"how do you prove the answer is right?\" — go the other way."
          }
        ],
        "solution": [
          {
            "he": "ממירים בחזרה:",
            "ru": "Переводим обратно:",
            "en": "Convert back:"
          },
          "1 × 32 + 0 × 16 + 1 × 8 + 1 × 4 + 0 × 2 + 1 × 1",
          "= 32 + 0 + 8 + 4 + 0 + 1",
          "= 45",
          {
            "he": "יצא המספר המקורי, ולכן התשובה נכונה.",
            "ru": "Получилось исходное число — ответ верный.",
            "en": "We got the original number, so the answer is correct."
          }
        ]
      },
      {
        "id": "ai3-1",
        "example": {"he": "`127₁₀` → מחלקים ב־2 ורושמים שאריות:\n`127 : 2 = 63`, שארית 1\n`63 : 2 = 31`, שארית 1\n`31 : 2 = 15`, שארית 1\n`15 : 2 = 7`, שארית 1\n`7 : 2 = 3`, שארית 1\n`3 : 2 = 1`, שארית 1\n`1 : 2 = 0`, שארית 1\nקוראים את השאריות מלמטה למעלה → `1111111₂`.", "ru": "`127₁₀` → делим на 2 и записываем остатки:\n127 : 2 = 63, остаток 1\n63 : 2 = 31, остаток 1\n31 : 2 = 15, остаток 1\n15 : 2 = 7, остаток 1\n7 : 2 = 3, остаток 1\n3 : 2 = 1, остаток 1\n1 : 2 = 0, остаток 1\nЧитаем остатки снизу вверх → `1111111₂`.", "en": "`127₁₀` → divide by 2 and write down the remainders:\n127 : 2 = 63, remainder 1\n63 : 2 = 31, remainder 1\n31 : 2 = 15, remainder 1\n15 : 2 = 7, remainder 1\n7 : 2 = 3, remainder 1\n3 : 2 = 1, remainder 1\n1 : 2 = 0, remainder 1\nRead the remainders from bottom to top → `1111111₂`."},
        "level": 3,
        "label": "3.1",
        "kind": "text",
        "text": {
          "he": "המירו את `255` לבסיס 2 בשיטת החלוקה ב־2.",
          "ru": "Переведите `255` в двоичную систему делением на 2.",
          "en": "Convert `255` to base 2 using division by 2."
        },
        "answer": {
          "accept": [
            "11111111",
            "000011111111",
            "0000000011111111"
          ]
        },
        "hints": [
          {
            "he": "מחלקים ב־2: השלם עובר לשורה הבאה, השארית נרשמת בצד. ממשיכים עד שהשלם הוא 0.",
            "ru": "Делим на 2: целая часть идёт в следующую строку, остаток пишем сбоку. Продолжаем, пока целая часть не станет 0.",
            "en": "Divide by 2: the quotient goes to the next line, the remainder is written on the side. Continue until the quotient is 0."
          },
          {
            "he": "השורה הראשונה: `255 : 2 = 127`, שארית `1`. בסוף קוראים את השאריות מלמטה למעלה.",
            "ru": "Первая строка: `255 : 2 = 127`, остаток `1`. В конце читаем остатки снизу вверх.",
            "en": "First line: `255 : 2 = 127`, remainder `1`. At the end read the remainders from bottom to top."
          }
        ],
        "solution": [
          {
            "he": "מחלקים ב־2 שוב ושוב, עד שהשלם מגיע ל־0. רושמים כל שארית:",
            "ru": "Делим на 2 снова и снова, пока целая часть не станет 0. Записываем каждый остаток:",
            "en": "Divide by 2 again and again until the quotient is 0. Write down each remainder:"
          },
          {
            "he": "`255 : 2 = 127`, שארית `1`",
            "ru": "`255 : 2 = 127`, остаток `1`",
            "en": "`255 : 2 = 127`, remainder `1`"
          },
          {
            "he": "`127 : 2 = 63`, שארית `1`",
            "ru": "`127 : 2 = 63`, остаток `1`",
            "en": "`127 : 2 = 63`, remainder `1`"
          },
          {
            "he": "`63 : 2 = 31`, שארית `1`",
            "ru": "`63 : 2 = 31`, остаток `1`",
            "en": "`63 : 2 = 31`, remainder `1`"
          },
          {
            "he": "`31 : 2 = 15`, שארית `1`",
            "ru": "`31 : 2 = 15`, остаток `1`",
            "en": "`31 : 2 = 15`, remainder `1`"
          },
          {
            "he": "`15 : 2 = 7`, שארית `1`",
            "ru": "`15 : 2 = 7`, остаток `1`",
            "en": "`15 : 2 = 7`, remainder `1`"
          },
          {
            "he": "`7 : 2 = 3`, שארית `1`",
            "ru": "`7 : 2 = 3`, остаток `1`",
            "en": "`7 : 2 = 3`, remainder `1`"
          },
          {
            "he": "`3 : 2 = 1`, שארית `1`",
            "ru": "`3 : 2 = 1`, остаток `1`",
            "en": "`3 : 2 = 1`, remainder `1`"
          },
          {
            "he": "`1 : 2 = 0`, שארית `1`",
            "ru": "`1 : 2 = 0`, остаток `1`",
            "en": "`1 : 2 = 0`, remainder `1`"
          },
          {
            "he": "קוראים את השאריות מלמטה למעלה: `11111111`",
            "ru": "Читаем остатки снизу вверх: `11111111`",
            "en": "Read the remainders from bottom to top: `11111111`"
          },
          {
            "he": "תשובה: `255₁₀ = 11111111₂`",
            "ru": "Ответ: `255₁₀ = 11111111₂`",
            "en": "Answer: `255₁₀ = 11111111₂`"
          },
          {
            "he": "בדיקה: ממירים בחזרה — `11111111₂ = 255`",
            "ru": "Проверка: переводим обратно — `11111111₂ = 255`",
            "en": "Check: convert back — `11111111₂ = 255`"
          }
        ]
      },
      {
        "id": "ai3-2",
        "example": {"he": "`1500` → כותבים את המשקלים ומתחילים מ־1024 (המשקל הכי גדול שלא גדול מ־1500):\n```\n1024 512 256 128 64 32 16 8 4 2 1\n\n1500 − 1024 = 476 → 1\n512 > 476 → 0\n476 − 256 = 220 → 1\n220 − 128 = 92 → 1\n92 − 64 = 28 → 1\n32 > 28 → 0\n28 − 16 = 12 → 1\n12 − 8 = 4 → 1\n4 − 4 = 0 → 1\n2 > 0 → 0\n1 > 0 → 0\n```\nקוראים משמאל לימין → `10111011100₂`.", "ru": "`1500` → веса: `1024 512 256 128 64 32 16 8 4 2 1`. Начинаем с 1024 (самый большой вес, не больше 1500).\n1500 − 1024 = 476 → 1\n512 > 476 → 0\n476 − 256 = 220 → 1\n220 − 128 = 92 → 1\n92 − 64 = 28 → 1\n32 > 28 → 0\n28 − 16 = 12 → 1\n12 − 8 = 4 → 1\n4 − 4 = 0 → 1\n2 > 0 → 0\n1 > 0 → 0\nЧитаем слева направо → `10111011100₂`.", "en": "`1500` → the weights: `1024 512 256 128 64 32 16 8 4 2 1`. Start at 1024 (the largest weight not bigger than 1500).\n1500 − 1024 = 476 → 1\n512 > 476 → 0\n476 − 256 = 220 → 1\n220 − 128 = 92 → 1\n92 − 64 = 28 → 1\n32 > 28 → 0\n28 − 16 = 12 → 1\n12 − 8 = 4 → 1\n4 − 4 = 0 → 1\n2 > 0 → 0\n1 > 0 → 0\nRead from left to right → `10111011100₂`."},
        "level": 3,
        "label": "3.2",
        "kind": "text",
        "text": {
          "he": "המירו את `1000` לבסיס 2 בשיטה הטבלאית.",
          "ru": "Переведите `1000` в двоичную систему методом таблицы.",
          "en": "Convert `1000` to base 2 using the table method."
        },
        "answer": {
          "accept": [
            "1111101000",
            "001111101000",
            "0000001111101000"
          ]
        },
        "hints": [
          {
            "he": "כותבים את המשקלים: `512 256 128 64 32 16 8 4 2 1`. מתחילים מהגדול.",
            "ru": "Выпиши веса: `512 256 128 64 32 16 8 4 2 1`. Начни с самого большого.",
            "en": "Write the weights: `512 256 128 64 32 16 8 4 2 1`. Start with the largest."
          },
          {
            "he": "`1000 − 512 = 488` → 1. ממשיכים עם `488` למשקל הבא.",
            "ru": "`1000 − 512 = 488` → 1. Дальше с `488` к следующему весу.",
            "en": "`1000 − 512 = 488` → 1. Continue with `488` at the next weight."
          }
        ],
        "solution": [
          {
            "he": "המשקל הגדול ביותר שלא גדול מ־`1000` הוא `512`.",
            "ru": "Самый большой вес, не больше `1000`, это `512`.",
            "en": "The largest weight not bigger than `1000` is `512`."
          },
          "1000 − 512 = 488 → 1",
          "488 − 256 = 232 → 1",
          "232 − 128 = 104 → 1",
          "104 − 64 = 40 → 1",
          "40 − 32 = 8 → 1",
          "16 > 8 → 0",
          "8 − 8 = 0 → 1",
          "4, 2, 1 > 0 → 0, 0, 0",
          {
            "he": "קוראים את ה־1 וה־0 משמאל לימין: `1111101000`",
            "ru": "Читаем 1 и 0 слева направо: `1111101000`",
            "en": "Read the 1s and 0s from left to right: `1111101000`"
          },
          {
            "he": "תשובה: `1000₁₀ = 1111101000₂`",
            "ru": "Ответ: `1000₁₀ = 1111101000₂`",
            "en": "Answer: `1000₁₀ = 1111101000₂`"
          }
        ]
      },
      {
        "id": "ai3-3",
        "example": {"he": "`11001100₂` → המשקלים מימין לשמאל: 1, 2, 4, 8, 16, 32, 64, 128.\nאיפה שיש 1, לוקחים את המשקל: 128, 64, 8, 4.\n`128 + 64 + 8 + 4 = 204` → `204₁₀`.", "ru": "`11001100₂` → веса справа налево: 1, 2, 4, 8, 16, 32, 64, 128.\nГде стоит 1, берём вес: 128, 64, 8 и 4.\n128 + 64 + 8 + 4 = 204 → `204₁₀`.", "en": "`11001100₂` → the weights from right to left: 1, 2, 4, 8, 16, 32, 64, 128.\nWhere there is a 1, take the weight: 128, 64, 8 and 4.\n128 + 64 + 8 + 4 = 204 → `204₁₀`."},
        "level": 3,
        "label": "3.3",
        "kind": "number",
        "text": {
          "he": "המירו את `10101010₂` לבסיס 10.",
          "ru": "Переведите `10101010₂` в десятичную систему.",
          "en": "Convert `10101010₂` to base 10."
        },
        "answer": {
          "value": "170"
        },
        "hints": [
          {
            "he": "המשקלים מימין: `1, 2, 4, 8, 16, 32, 64, 128`. מכפילים כל ספרה במשקל שלה.",
            "ru": "Веса справа налево: `1, 2, 4, 8, 16, 32, 64, 128`. Каждую цифру умножаем на её вес.",
            "en": "Weights from the right: `1, 2, 4, 8, 16, 32, 64, 128`. Multiply each digit by its weight."
          },
          {
            "he": "עכשיו מחברים: `1 × 128 + 0 × 64 + 1 × 32 + 0 × 16 + 1 × 8 + 0 × 4 + 1 × 2 + 0 × 1`",
            "ru": "Теперь сложи: `1 × 128 + 0 × 64 + 1 × 32 + 0 × 16 + 1 × 8 + 0 × 4 + 1 × 2 + 0 × 1`",
            "en": "Now add: `1 × 128 + 0 × 64 + 1 × 32 + 0 × 16 + 1 × 8 + 0 × 4 + 1 × 2 + 0 × 1`"
          }
        ],
        "solution": [
          {
            "he": "מעל כל ספרה כותבים את המשקל שלה, מימין לשמאל: `2⁷  2⁶  2⁵  2⁴  2³  2²  2¹  2⁰`",
            "ru": "Над каждой цифрой пишем её вес (справа налево): `2⁷  2⁶  2⁵  2⁴  2³  2²  2¹  2⁰`",
            "en": "Write each digit's weight above it, from the right: `2⁷  2⁶  2⁵  2⁴  2³  2²  2¹  2⁰`"
          },
          {
            "he": "מכפילים כל ספרה במשקל שלה ומחברים:",
            "ru": "Умножаем каждую цифру на её вес и складываем:",
            "en": "Multiply each digit by its weight and add:"
          },
          "1 × 2⁷ + 0 × 2⁶ + 1 × 2⁵ + 0 × 2⁴ + 1 × 2³ + 0 × 2² + 1 × 2¹ + 0 × 2⁰",
          "= 1 × 128 + 0 × 64 + 1 × 32 + 0 × 16 + 1 × 8 + 0 × 4 + 1 × 2 + 0 × 1",
          "= 128 + 0 + 32 + 0 + 8 + 0 + 2 + 0",
          "= 170",
          {
            "he": "תשובה: `10101010₂ = 170₁₀`",
            "ru": "Ответ: `10101010₂ = 170₁₀`",
            "en": "Answer: `10101010₂ = 170₁₀`"
          }
        ]
      },
      {
        "id": "ai3-4",
        "example": {"he": "המספר `9` כבייט שלם.\nשלב 1. `9₁₀ = 1001₂` — אלה 4 ביטים.\nשלב 2. בבייט יש 8 ביטים. חסרים `8 − 4 = 4` ביטים.\nשלב 3. מוסיפים 4 אפסים משמאל → `00001001`.", "ru": "Число `9` как целый байт.\nШаг 1. `9₁₀ = 1001₂` — это 4 бита.\nШаг 2. В байте 8 бит. Не хватает 8 − 4 = 4 бит.\nШаг 3. Дописываем 4 нуля слева → `00001001`.", "en": "The number `9` as a whole byte.\nStep 1. `9₁₀ = 1001₂` is 4 bits.\nStep 2. A byte has 8 bits. 8 − 4 = 4 bits are missing.\nStep 3. Add 4 zeros on the left → `00001001`."},
        "level": 3,
        "label": "3.4",
        "kind": "text",
        "text": {
          "he": "כתבו את המספר `5` כבייט שלם (8 ביטים).",
          "ru": "Запишите число `5` как целый байт (8 бит).",
          "en": "Write the number `5` as a full byte (8 bits)."
        },
        "answer": {
          "accept": [
            "00000101"
          ]
        },
        "hints": [
          {
            "he": "קודם ממירים: `5 = 4 + 1`.",
            "ru": "Сначала переведи: `5 = 4 + 1`.",
            "en": "First convert: `5 = 4 + 1`."
          },
          {
            "he": "`5 = 101₂`. בבייט יש 8 מקומות: משלימים אפסים משמאל.",
            "ru": "`5 = 101₂`. В байте 8 мест: слева дописываем нули.",
            "en": "`5 = 101₂`. A byte has 8 places: fill zeros on the left."
          }
        ],
        "solution": [
          "5 = 4 + 1",
          "5 = 1 × 4 + 0 × 2 + 1 × 1 = 101₂",
          {
            "he": "ל־`101` יש 3 ספרות. חסרות 5 עד 8.",
            "ru": "В `101` три цифры. До 8 не хватает 5.",
            "en": "`101` has 3 digits. 5 are missing to make 8."
          },
          {
            "he": "משלימים 5 אפסים משמאל: `00000101`",
            "ru": "Дописываем 5 нулей слева: `00000101`",
            "en": "Add 5 zeros on the left: `00000101`"
          },
          {
            "he": "אפסים משמאל לא משנים את הערך.",
            "ru": "Нули слева значение не меняют.",
            "en": "Zeros on the left don't change the value."
          }
        ]
      }
    ]
  }
};

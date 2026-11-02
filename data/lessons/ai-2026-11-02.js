/* Lesson ai-2026-11-02 (Intro to AI): RTC-C prompts, sorting 5 numbers, a price calculator. Format: see the comment at the top of data/lessons/math-2026-11-01.js. Program outputs were checked by running Sort5_Main.java; prices are computed in the generator. */
window.LESSONS = window.LESSONS || {};
window.LESSONS["ai-2026-11-02"] = {
  "id": "ai-2026-11-02",
  "subject": "ai",
  "date": "2026-11-02",
  "title": {
    "he": "פרומפט מדויק: RTC-C",
    "ru": "Точный промпт: RTC-C",
    "en": "Precise prompts: RTC-C"
  },
  "summary": {
    "he": "מבנה RTC-C (תפקיד, משימה, הקשר, מגבלות), תוכנית שממיינת 5 מספרים ובדיקת מקרי קצה, \"החור\" בפרומפט של סוכן שירות, ומחשבון מחיר ב־Gemini.",
    "ru": "Схема RTC-C (роль, задача, контекст, ограничения), программа, которая сортирует 5 чисел, и проверка крайних случаев, «дыра» в промпте агента поддержки и калькулятор цены в Gemini.",
    "en": "The RTC-C structure (Role, Task, Context, Constraints), a program that sorts 5 numbers and testing its edge cases, the \"hole\" in a support agent's prompt, and a price calculator in Gemini."
  },
  "timeline": [
    {
      "kind": "board",
      "title": {
        "he": "משימה: מיון 5 מספרים",
        "ru": "Задание: сортировка 5 чисел",
        "en": "Task: sorting 5 numbers"
      },
      "text": {
        "he": "בקשו מהצ'ט (Gemini, Claude או ChatGPT) לכתוב תוכנית שתמיין 5 מספרים שנקלטו, ותציג אותם בסדר יורד. יש לבדוק מקרי קצה.\nמה הפלט שרוצים לקבל:\n1. לראות קוד\n2. לראות דוגמת הרצה\n3. לקבל דוגמאות של מקרי קצה",
        "ru": "Попросите чат (Gemini, Claude или ChatGPT) написать программу, которая сортирует 5 введённых чисел и выводит их по убыванию. Нужно проверить крайние случаи.\nЧто хотим получить:\n1. увидеть код\n2. увидеть пример запуска\n3. получить примеры крайних случаев",
        "en": "Ask the chat (Gemini, Claude or ChatGPT) to write a program that sorts 5 entered numbers and shows them in descending order. Edge cases must be checked.\nWhat output we want:\n1. see the code\n2. see a sample run\n3. get examples of edge cases"
      }
    },
    {
      "kind": "talk",
      "title": {
        "he": "RTC-C: ממסגור הבקשה לפרומפט מדויק",
        "ru": "RTC-C: от формулировки запроса к точному промпту",
        "en": "RTC-C: from framing a request to a precise prompt"
      },
      "text": {
        "he": "ארבע החלטות פשוטות שמקטינות עמימות ומקלות לבדוק את התוצאה:\nR — תפקיד (Role): מי המודל צריך להיות? מגדירים מומחיות, נקודת מבט ורמת ניסיון.\nT — משימה (Task): מה בדיוק צריך לבצע? פעולה ברורה, תוצר רצוי וקריטריון הצלחה.\nC — הקשר (Context): מה חשוב לדעת מראש? קהל יעד, מטרה, מצב קיים, נתונים.\nC — מגבלות (Constraints): באילו גבולות הפלט עומד? שפה, אורך, טון, פורמט, מקורות, ומה אסור.",
        "ru": "Четыре простых решения, которые уменьшают неясность и упрощают проверку результата:\nR — роль (Role): кем должна быть модель? Задаём экспертизу, точку зрения и уровень опыта.\nT — задача (Task): что именно сделать? Чёткое действие, желаемый результат и критерий успеха.\nC — контекст (Context): что важно знать заранее? Аудитория, цель, текущее положение, данные.\nC — ограничения (Constraints): в каких границах ответ? Язык, длина, тон, формат, источники и что запрещено.",
        "en": "Four simple decisions that reduce ambiguity and make the result easy to check:\nR — Role: who should the model be? Set the expertise, point of view and level of experience.\nT — Task: what exactly should it do? A clear action, the desired output and a success criterion.\nC — Context: what is important to know in advance? Audience, goal, current situation, data.\nC — Constraints: what limits must the output meet? Language, length, tone, format, sources, and what is not allowed."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "דוגמה מהשקף: ארבעת הרכיבים בפרומפט אחד",
        "ru": "Пример со слайда: четыре компонента в одном промпте",
        "en": "Slide example: the four parts in one prompt"
      },
      "text": {
        "he": "תפקיד: פעל כמורה מנוסה לשפת ג'אווה.\nמשימה: הסבר המרה מבסיס 2 לבסיס 10 ב־5 שלבים.\nהקשר: לסטודנטים שלומדים ג'אווה שבועיים.\nמגבלות: בעברית · עד 120 מילים · דוגמה אחת.",
        "ru": "Роль: действуй как опытный преподаватель Java.\nЗадача: объясни перевод из системы 2 в систему 10 за 5 шагов.\nКонтекст: для студентов, которые учат Java две недели.\nОграничения: на иврите · до 120 слов · один пример.",
        "en": "Role: act as an experienced Java teacher.\nTask: explain converting from base 2 to base 10 in 5 steps.\nContext: for students who have been learning Java for two weeks.\nConstraints: in Hebrew · up to 120 words · one example."
      }
    },
    {
      "kind": "tip",
      "title": {
        "he": "RTC-C הוא תהליך איטרטיבי",
        "ru": "RTC-C — итеративный процесс",
        "en": "RTC-C is an iterative flow"
      },
      "text": {
        "he": "שליחה ← בדיקה מול הדרישות ← זיהוי הרכיב החלש ← חידוד ושליחה מחדש.\nאם התשובה לא מדויקת, מחזקים את הרכיב שחסר — ולא מתחילים הכול מחדש.",
        "ru": "Отправка → проверка по требованиям → поиск слабого компонента → уточнение и повторная отправка.\nЕсли ответ неточный, усиливаем недостающий компонент — а не начинаем всё заново.",
        "en": "Send → check against the requirements → find the weak component → refine and resend.\nIf the answer isn't precise, strengthen the missing component — don't start everything over."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "פרומפט RTC-C למשימת המיון",
        "ru": "Промпт RTC-C для задачи сортировки",
        "en": "An RTC-C prompt for the sorting task"
      },
      "text": {
        "he": "\"אתה מורה ל־Java למתחילים (R). כתוב תוכנית שקולטת 5 מספרים ומציגה אותם בסדר יורד (T). אני סטודנט בשנה ראשונה ולמדנו לולאות (C). הצג קוד, דוגמת הרצה ודוגמאות למקרי קצה, עם הסבר קצר בעברית (C).\"",
        "ru": "«Ты преподаватель Java для начинающих (R). Напиши программу, которая получает 5 чисел и выводит их по убыванию (T). Я студент первого курса, мы прошли циклы (C). Покажи код, пример запуска и примеры крайних случаев, с коротким объяснением на иврите (C)».",
        "en": "\"You are a Java teacher for beginners (R). Write a program that reads 5 numbers and shows them in descending order (T). I'm a first-year student and we have learned loops (C). Show the code, a sample run and edge-case examples, with a short explanation in Hebrew (C).\""
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "הקוד: איך מקבלים סדר יורד",
        "ru": "Код: как получается убывание",
        "en": "The code: how descending order is produced"
      },
      "text": {
        "he": "התוכנית קולטת 5 מספרים מסוג `double` עם `Scanner`. אם הקלט אינו מספר (`hasNextDouble` מחזיר false), היא מדפיסה `Not a number, try again:` ומבקשת שוב. `Arrays.sort` ממיין מהקטן לגדול, והלולאה מדפיסה מהסוף להתחלה — ולכן התוצאה בסדר יורד.",
        "ru": "Программа читает 5 чисел типа `double` через `Scanner`. Если ввод не число (`hasNextDouble` возвращает false), она печатает `Not a number, try again:` и просит снова. `Arrays.sort` сортирует по возрастанию, а цикл печатает с конца — поэтому результат по убыванию.",
        "en": "The program reads 5 `double` numbers with a `Scanner`. If the input isn't a number (`hasNextDouble` returns false), it prints `Not a number, try again:` and asks again. `Arrays.sort` sorts from small to large, and the loop prints from the end — so the result is descending."
      },
      "math": [
        "Arrays.sort(a);",
        "for (int i = 4; i >= 0; i--) {",
        "    System.out.print(a[i] + \" \");",
        "}"
      ]
    },
    {
      "kind": "board",
      "title": {
        "he": "דוגמת הרצה",
        "ru": "Пример запуска",
        "en": "Sample run"
      },
      "text": {
        "he": "המספרים מודפסים עם `.0` כי התוכנית מקבלת גם מספרים עשרוניים:",
        "ru": "Числа печатаются с `.0`, потому что программа принимает и дробные числа:",
        "en": "The numbers are printed with `.0` because the program also accepts decimals:"
      },
      "math": [
        "Enter number 1: 5",
        "Enter number 2: 9",
        "Enter number 3: abc",
        "Not a number, try again: 3",
        "Enter number 4: 4",
        "Enter number 5: 2",
        "Descending: 9.0 5.0 4.0 3.0 2.0"
      ]
    },
    {
      "kind": "talk",
      "title": {
        "he": "מקרי קצה שנבדקו",
        "ru": "Проверенные крайние случаи",
        "en": "Edge cases that were checked"
      },
      "text": {
        "he": "כל המספרים שווים: `7 7 7 7 7` ← `7 7 7 7 7`\nשליליים ואפס: `-3 0 -10 8 -1` ← `8 0 -1 -3 -10`\nכבר ממוינים בסדר עולה: `1 2 3 4 5` ← `5 4 3 2 1`\nמספר עשרוני: `2.5 1 9 0 3` ← `9 3 2.5 1 0`\nקלט שאינו מספר: `abc` ← `Not a number, try again`\nכל המקרים עברו.",
        "ru": "Все числа равны: `7 7 7 7 7` → `7 7 7 7 7`\nОтрицательные и ноль: `-3 0 -10 8 -1` → `8 0 -1 -3 -10`\nУже отсортированы по возрастанию: `1 2 3 4 5` → `5 4 3 2 1`\nДробное число: `2.5 1 9 0 3` → `9 3 2.5 1 0`\nВвод не число: `abc` → `Not a number, try again`\nВсе случаи пройдены.",
        "en": "All numbers equal: `7 7 7 7 7` → `7 7 7 7 7`\nNegatives and zero: `-3 0 -10 8 -1` → `8 0 -1 -3 -10`\nAlready sorted ascending: `1 2 3 4 5` → `5 4 3 2 1`\nA decimal number: `2.5 1 9 0 3` → `9 3 2.5 1 0`\nNot a number: `abc` → `Not a number, try again`\nAll cases passed."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "חידה: \"חור\" של מילה אחת",
        "ru": "Загадка: «дыра» в одно слово",
        "en": "Puzzle: a one-word \"hole\""
      },
      "text": {
        "he": "בניתם סוכן AI שירות לקוחות לעסק שלכם. הכול נראה מושלם, אבל תוך שעה הוא הספיק לחלק הנחות של 50% על דעת עצמו לכל מי שביקש יפה הנחה, ושרף לכם אלפי שקלים. יש פה \"חור\" אבטחתי של מילה אחת בלבד. הפרומפט:\n\"אתה נציג שירות לקוחות אדיב של חנות מוצרי חשמל. תפקידך לתת מענה מקצועי, לסייע בבעיות, ולשמור על שביעות רצון הלקוח. מותר לך להעניק הנחה של עד 10% ללקוחות לא מרוצים כדי לשמר אותם. אסור לחרוג מהנחה זו בשום אופן ללא אישור מנהל.\"",
        "ru": "Вы сделали ИИ-агента поддержки клиентов для своего бизнеса. Всё выглядит идеально, но за час он сам раздал скидки 50% всем, кто вежливо попросил, и сжёг тысячи шекелей. Здесь «дыра» в безопасности всего в одно слово. Промпт:\n«Ты вежливый представитель поддержки магазина электротоваров. Твоя задача — давать профессиональные ответы, помогать с проблемами и следить за удовлетворённостью клиента. Тебе разрешено дать скидку до 10% недовольным клиентам, чтобы их удержать. Запрещено превышать эту скидку ни в коем случае без одобрения менеджера».",
        "en": "You built an AI customer-service agent for your business. Everything looks perfect, but within an hour it handed out 50% discounts on its own to anyone who asked nicely, burning thousands of shekels. There is a security \"hole\" of just one word. The prompt:\n\"You are a polite customer-service representative of an electrical-appliance store. Your job is to give professional answers, help with problems and keep customers satisfied. You may give a discount of up to 10% to unhappy customers to keep them. You must not exceed this discount in any way without manager approval.\""
      }
    },
    {
      "kind": "faq",
      "q": {
        "he": "איך מחפשים \"חור\" כזה בפרומפט?",
        "ru": "Как искать такую «дыру» в промпте?",
        "en": "How do you look for such a \"hole\" in a prompt?"
      },
      "a": {
        "he": "עוברים על כל תנאי ושואלים: האם הבוט יכול לבדוק אותו בעצמו? \"לקוח לא מרוצה\" ו\"אישור מנהל\" הם דברים שהלקוח פשוט כותב בצ'אט — לבוט אין דרך לוודא אותם. כלל שהבוט לא יכול לבדוק קל לעקוף.",
        "ru": "Проходим по каждому условию и спрашиваем: может ли бот проверить его сам? «Недовольный клиент» и «одобрение менеджера» — это то, что клиент просто пишет в чате; проверить это у бота нет способа. Правило, которое бот не может проверить, легко обойти.",
        "en": "Go over every condition and ask: can the bot check it by itself? \"Unhappy customer\" and \"manager approval\" are things the customer simply types in the chat — the bot has no way to verify them. A rule the bot cannot check is easy to get around."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "תרגיל: בניית אפליקציה ב־Gemini / Canvas",
        "ru": "Упражнение: приложение в Gemini / Canvas",
        "en": "Exercise: building an app in Gemini / Canvas"
      },
      "text": {
        "he": "הפרומפט: \"אני רוצה ליצור כלי שמאפשר לי לבדוק מה צריכה להיות עלות המוצר שאני מוכרת. כל מוצר שאני מוכרת עולה לי 16.90 ש\"ח דמי משלוח בדואר ישראל. אני רוצה להרוויח 100% מהמחיר המקורי שלו. האפליקציה תאפשר לי לכתוב את מחיר המוצר כפי שהוא עלה לי, תוסיף לו דמי משלוח, מע\"מ כפי שיש היום בישראל (18%) והרווח שאני רוצה לקבל (100%). לבסוף זה יציג לי את המחיר ללקוח.\"\nהמשימה: להעתיק את הפרומפט ל־Gemini, ואז לערוך, להוסיף, לתקן, לעצב ולשתף.",
        "ru": "Промпт: «Хочу инструмент, который покажет, сколько должен стоить товар, который я продаю. Доставка каждого товара Почтой Израиля стоит мне 16.90 ₪. Я хочу заработать 100% от исходной цены. Приложение позволит ввести цену товара, как он мне обошёлся, добавит доставку, НДС, как сейчас в Израиле (18%), и прибыль (100%). В конце покажет цену для клиента».\nЗадание: скопировать промпт в Gemini, затем редактировать, дополнять, исправлять, оформлять и поделиться.",
        "en": "The prompt: \"I want a tool that shows what my product should cost. Each product I sell costs me 16.90 ₪ for Israel Post shipping. I want a 100% profit on its original price. The app lets me type the product price as it cost me, adds shipping, VAT as it is in Israel today (18%) and the profit I want (100%). Finally it shows the price for the customer.\"\nThe task: copy the prompt into Gemini, then edit, add, fix, design and share."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "סדר החישוב במחשבון",
        "ru": "Порядок расчёта в калькуляторе",
        "en": "The calculator's order of calculation"
      },
      "text": {
        "he": "הרווח מחושב על מחיר המוצר בלבד, אחר כך מוסיפים משלוח, והמע\"מ מחושב על הכול (מוצר + רווח + משלוח). דוגמה: מוצר שעלה `50 ₪`:",
        "ru": "Прибыль считается только от цены товара, потом добавляется доставка, а НДС считается на всё (товар + прибыль + доставка). Пример: товар стоил `50 ₪`:",
        "en": "The profit is calculated on the product price only, then shipping is added, and VAT is calculated on everything (product + profit + shipping). Example: a product that cost `50 ₪`:"
      },
      "math": [
        "50 + 50 = 100",
        "100 + 16.90 = 116.90",
        "116.90 × 18 / 100 = 21.042",
        "116.90 + 21.042 = 137.942",
        "≈ 137.94 ₪"
      ]
    }
  ],
  "review": [
    {
      "title": {
        "he": "RTC-C",
        "ru": "RTC-C",
        "en": "RTC-C"
      },
      "text": {
        "he": "תפקיד (מי), משימה (מה), הקשר (למי ולמה), מגבלות (שפה, אורך, פורמט, מה אסור).",
        "ru": "Роль (кто), задача (что), контекст (для кого и зачем), ограничения (язык, длина, формат, что запрещено).",
        "en": "Role (who), Task (what), Context (for whom and why), Constraints (language, length, format, what is not allowed)."
      }
    },
    {
      "title": {
        "he": "לחדד, לא להתחיל מחדש",
        "ru": "Уточнять, а не начинать заново",
        "en": "Refine, don't restart"
      },
      "text": {
        "he": "שליחה ← בדיקה מול הדרישות ← הרכיב החלש ← חידוד ושליחה מחדש.",
        "ru": "Отправка → проверка → слабый компонент → уточнение и повтор.",
        "en": "Send → check → weak component → refine and resend."
      }
    },
    {
      "title": {
        "he": "מיון בסדר יורד",
        "ru": "Сортировка по убыванию",
        "en": "Descending sort"
      },
      "text": {
        "he": "`Arrays.sort` ממיין מהקטן לגדול; לולאה מ־`i = 4` עד `0` מדפיסה מהסוף.",
        "ru": "`Arrays.sort` сортирует по возрастанию; цикл от `i = 4` до `0` печатает с конца.",
        "en": "`Arrays.sort` sorts ascending; a loop from `i = 4` to `0` prints from the end."
      }
    },
    {
      "title": {
        "he": "מקרי קצה",
        "ru": "Крайние случаи",
        "en": "Edge cases"
      },
      "text": {
        "he": "מספרים שווים, שליליים ואפס, כבר ממוינים, עשרוניים, קלט שאינו מספר.",
        "ru": "Равные числа, отрицательные и ноль, уже отсортированные, дробные, ввод не число.",
        "en": "Equal numbers, negatives and zero, already sorted, decimals, non-numeric input."
      }
    },
    {
      "title": {
        "he": "חור בפרומפט",
        "ru": "Дыра в промпте",
        "en": "A hole in the prompt"
      },
      "text": {
        "he": "תנאי שהבוט לא יכול לבדוק (כמו \"אישור מנהל\") קל לעקוף.",
        "ru": "Условие, которое бот не может проверить (как «одобрение менеджера»), легко обойти.",
        "en": "A condition the bot can't check (like \"manager approval\") is easy to get around."
      }
    },
    {
      "title": {
        "he": "מחשבון המחיר",
        "ru": "Калькулятор цены",
        "en": "The price calculator"
      },
      "text": {
        "he": "מוצר + רווח (על המוצר) + משלוח `16.90`, ואז מע\"מ `18%` על הכול: `50 → 137.94 ₪`.",
        "ru": "Товар + прибыль (от товара) + доставка `16.90`, потом НДС `18%` на всё: `50 → 137.94 ₪`.",
        "en": "Product + profit (on the product) + shipping `16.90`, then `18%` VAT on everything: `50 → 137.94 ₪`."
      }
    }
  ],
  "tasks": {
    "groups": {
      "sort": {
        "he": "תוכנית המיון ומקרי קצה",
        "ru": "Программа сортировки и крайние случаи",
        "en": "The sorting program and edge cases"
      },
      "rtcc": {
        "he": "RTC-C",
        "ru": "RTC-C",
        "en": "RTC-C"
      },
      "price": {
        "he": "מחשבון מחיר המכירה",
        "ru": "Калькулятор цены продажи",
        "en": "The selling-price calculator"
      }
    },
    "teacher": [
      {
        "id": "t1",
        "group": "sort",
        "label": "מא",
        "kind": "text",
        "text": {
          "he": "תוכנית המיון מהשיעור. הקלט: `5`, `9`, `abc`, `3`, `4`, `2`. מה יודפס בשורה האחרונה (אחרי `Descending:`)?",
          "ru": "Программа сортировки с урока. Ввод: `5`, `9`, `abc`, `3`, `4`, `2`. Что напечатается в последней строке (после `Descending:`)?",
          "en": "The sorting program from class. Input: `5`, `9`, `abc`, `3`, `4`, `2`. What is printed on the last line (after `Descending:`)?"
        },
        "answer": {
          "accept": [
            "9.0 5.0 4.0 3.0 2.0",
            "9 5 4 3 2",
            "Descending: 9.0 5.0 4.0 3.0 2.0"
          ]
        },
        "hints": [
          {
            "he": "`abc` הוא לא מספר: התוכנית מבקשת שוב ולא סופרת אותו.",
            "ru": "`abc` — не число: программа просит ещё раз и его не считает.",
            "en": "`abc` is not a number: the program asks again and doesn't count it."
          },
          {
            "he": "המספרים הם `5, 9, 3, 4, 2`. `Arrays.sort` ממיין מהקטן לגדול, והלולאה מדפיסה מהסוף.",
            "ru": "Числа: `5, 9, 3, 4, 2`. `Arrays.sort` сортирует по возрастанию, а цикл печатает с конца.",
            "en": "The numbers are `5, 9, 3, 4, 2`. `Arrays.sort` sorts from small to large, and the loop prints from the end."
          }
        ],
        "solution": [
          {
            "he": "`abc` נדחה: `Not a number, try again:` — הקלט הבא `3` נכנס במקומו.",
            "ru": "`abc` отклонено: `Not a number, try again:` — следующий ввод `3` встаёт на его место.",
            "en": "`abc` is rejected: `Not a number, try again:` — the next input `3` takes its place."
          },
          {
            "he": "המערך: `5, 9, 3, 4, 2`",
            "ru": "Массив: `5, 9, 3, 4, 2`",
            "en": "The array: `5, 9, 3, 4, 2`"
          },
          {
            "he": "אחרי `Arrays.sort`: `2, 3, 4, 5, 9`",
            "ru": "После `Arrays.sort`: `2, 3, 4, 5, 9`",
            "en": "After `Arrays.sort`: `2, 3, 4, 5, 9`"
          },
          {
            "he": "הלולאה מ־`i = 4` עד `0` מדפיסה מהסוף להתחלה. המספרים הם `double`, ולכן עם `.0`:",
            "ru": "Цикл от `i = 4` до `0` печатает с конца. Числа типа `double`, поэтому с `.0`:",
            "en": "The loop from `i = 4` down to `0` prints from the end. The numbers are `double`, so they have `.0`:"
          },
          "Descending: 9.0 5.0 4.0 3.0 2.0"
        ]
      },
      {
        "id": "t2",
        "group": "sort",
        "label": "מב",
        "kind": "text",
        "text": {
          "he": "מקרה קצה מהשיעור — שליליים ואפס. הקלט: `-3 0 -10 8 -1`. מה יודפס אחרי `Descending:`?",
          "ru": "Крайний случай с урока — отрицательные и ноль. Ввод: `-3 0 -10 8 -1`. Что напечатается после `Descending:`?",
          "en": "An edge case from class — negatives and zero. Input: `-3 0 -10 8 -1`. What is printed after `Descending:`?"
        },
        "answer": {
          "accept": [
            "8.0 0.0 -1.0 -3.0 -10.0",
            "8 0 -1 -3 -10",
            "Descending: 8.0 0.0 -1.0 -3.0 -10.0"
          ]
        },
        "hints": [
          {
            "he": "במספרים שליליים: `-10` הוא הקטן ביותר.",
            "ru": "Среди отрицательных `-10` — самое маленькое.",
            "en": "Among negatives, `-10` is the smallest."
          },
          {
            "he": "מהקטן לגדול: `-10, -3, -1, 0, 8`. עכשיו מהסוף.",
            "ru": "По возрастанию: `-10, -3, -1, 0, 8`. Теперь с конца.",
            "en": "Small to large: `-10, -3, -1, 0, 8`. Now from the end."
          }
        ],
        "solution": [
          {
            "he": "אחרי `Arrays.sort`: `-10, -3, -1, 0, 8`",
            "ru": "После `Arrays.sort`: `-10, -3, -1, 0, 8`",
            "en": "After `Arrays.sort`: `-10, -3, -1, 0, 8`"
          },
          {
            "he": "מדפיסים מהסוף להתחלה:",
            "ru": "Печатаем с конца:",
            "en": "Print from the end:"
          },
          "Descending: 8.0 0.0 -1.0 -3.0 -10.0",
          {
            "he": "המקרה עבר: סדר יורד נכון גם עם שליליים ואפס.",
            "ru": "Случай пройден: убывание верное и с отрицательными и нулём.",
            "en": "The case passes: correct descending order even with negatives and zero."
          }
        ]
      },
      {
        "id": "t3",
        "group": "rtcc",
        "label": "פא",
        "kind": "choice",
        "text": {
          "he": "בדוגמה מהשקף: \"בעברית · עד 120 מילים · דוגמה אחת\". איזה רכיב של RTC-C זה?",
          "ru": "В примере со слайда: «на иврите · до 120 слов · один пример». Какой это компонент RTC-C?",
          "en": "In the slide's example: \"in Hebrew · up to 120 words · one example\". Which RTC-C component is this?"
        },
        "options": [
          {
            "he": "R — תפקיד",
            "ru": "R — роль",
            "en": "R — Role"
          },
          {
            "he": "T — משימה",
            "ru": "T — задача",
            "en": "T — Task"
          },
          {
            "he": "C — הקשר",
            "ru": "C — контекст",
            "en": "C — Context"
          },
          {
            "he": "C — מגבלות",
            "ru": "C — ограничения",
            "en": "C — Constraints"
          }
        ],
        "answer": {
          "index": 3
        },
        "hints": [
          {
            "he": "שפה, אורך ופורמט — באילו גבולות הפלט עומד?",
            "ru": "Язык, длина и формат — в каких границах ответ?",
            "en": "Language, length and format — what limits must the output meet?"
          }
        ],
        "solution": [
          {
            "he": "R — מי המודל צריך להיות. T — מה בדיוק לבצע. C — מה חשוב לדעת מראש. C — באילו גבולות הפלט עומד.",
            "ru": "R — кем должна быть модель. T — что именно сделать. C — что важно знать заранее. C — в каких границах ответ.",
            "en": "R — who the model should be. T — what exactly to do. C — what to know in advance. C — what limits the output must meet."
          },
          {
            "he": "שפה, אורך ופורמט קובעים את הגבולות של הפלט.",
            "ru": "Язык, длина и формат задают границы ответа.",
            "en": "Language, length and format set the output's limits."
          },
          {
            "he": "תשובה: C — מגבלות (Constraints)",
            "ru": "Ответ: C — ограничения (Constraints)",
            "en": "Answer: C — Constraints"
          }
        ]
      },
      {
        "id": "t4",
        "group": "price",
        "label": "חא",
        "kind": "number",
        "text": {
          "he": "מחשבון מחיר המכירה: המוצר עלה `50 ₪`, רווח `100%`, משלוח `16.90 ₪`. מה הסכום לפני מע\"מ?",
          "ru": "Калькулятор цены продажи: товар стоил `50 ₪`, прибыль `100%`, доставка `16.90 ₪`. Какая сумма до НДС?",
          "en": "The selling-price calculator: the product cost `50 ₪`, profit `100%`, shipping `16.90 ₪`. What is the total before VAT?"
        },
        "answer": {
          "value": "116.90"
        },
        "hints": [
          {
            "he": "הרווח מחושב על מחיר המוצר בלבד: `100%` מ־50.",
            "ru": "Прибыль считается только от цены товара: `100%` от 50.",
            "en": "The profit is on the product price only: `100%` of 50."
          },
          {
            "he": "מוצר + רווח + משלוח.",
            "ru": "Товар + прибыль + доставка.",
            "en": "Product + profit + shipping."
          }
        ],
        "solution": [
          "50 × 100 / 100 = 50",
          "50 + 50 = 100",
          "100 + 16.90 = 116.90",
          {
            "he": "תשובה: `116.90 ₪`",
            "ru": "Ответ: `116.90 ₪`",
            "en": "Answer: `116.90 ₪`"
          }
        ]
      },
      {
        "id": "t5",
        "group": "price",
        "label": "חב",
        "kind": "number",
        "text": {
          "he": "המשך: מוסיפים מע\"מ `18%` על הכול. מה המחיר ללקוח? (עגלו לאגורות — 2 ספרות אחרי הנקודה)",
          "ru": "Продолжение: добавляем НДС `18%` на всё. Какая цена для клиента? (округлите до агорот — 2 знака после точки)",
          "en": "Continued: add `18%` VAT on everything. What is the price for the customer? (round to agorot — 2 decimal places)"
        },
        "answer": {
          "value": "137.94"
        },
        "hints": [
          {
            "he": "המע\"מ מחושב על הסכום שלפני מע\"מ: `116.90`.",
            "ru": "НДС считается от суммы до НДС: `116.90`.",
            "en": "VAT is on the total before VAT: `116.90`."
          },
          {
            "he": "`116.90 × 18 / 100 = 21.042`. עכשיו מחברים ומעגלים.",
            "ru": "`116.90 × 18 / 100 = 21.042`. Теперь сложи и округли.",
            "en": "`116.90 × 18 / 100 = 21.042`. Now add and round."
          }
        ],
        "solution": [
          "116.90 × 18 / 100 = 21.042",
          "116.90 + 21.042 = 137.942",
          "137.942 ≈ 137.94",
          {
            "he": "תשובה: `137.94 ₪`",
            "ru": "Ответ: `137.94 ₪`",
            "en": "Answer: `137.94 ₪`"
          }
        ]
      }
    ],
    "ai": [
      {
        "id": "ai1-1",
        "level": 1,
        "label": "1.1",
        "kind": "choice",
        "text": {
          "he": "\"פעל כמורה מנוסה לשפת ג'אווה.\" איזה רכיב של RTC-C זה?",
          "ru": "«Действуй как опытный преподаватель Java». Какой это компонент RTC-C?",
          "en": "\"Act as an experienced Java teacher.\" Which RTC-C component is this?"
        },
        "options": [
          {
            "he": "R — תפקיד",
            "ru": "R — роль",
            "en": "R — Role"
          },
          {
            "he": "T — משימה",
            "ru": "T — задача",
            "en": "T — Task"
          },
          {
            "he": "C — מגבלות",
            "ru": "C — ограничения",
            "en": "C — Constraints"
          }
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "מי המודל צריך להיות?",
            "ru": "Кем должна быть модель?",
            "en": "Who should the model be?"
          }
        ],
        "solution": [
          {
            "he": "\"פעל כ...\" מגדיר מומחיות ונקודת מבט — זה התפקיד.",
            "ru": "«Действуй как…» задаёт экспертизу и точку зрения — это роль.",
            "en": "\"Act as…\" sets expertise and a point of view — that is the role."
          },
          {
            "he": "תשובה: R — Role",
            "ru": "Ответ: R — Role",
            "en": "Answer: R — Role"
          }
        ]
      },
      {
        "id": "ai1-2",
        "level": 1,
        "label": "1.2",
        "kind": "choice",
        "text": {
          "he": "מה עושה `Arrays.sort(a)` בתוכנית המיון?",
          "ru": "Что делает `Arrays.sort(a)` в программе сортировки?",
          "en": "What does `Arrays.sort(a)` do in the sorting program?"
        },
        "options": [
          {
            "he": "ממיין מהקטן לגדול",
            "ru": "Сортирует по возрастанию",
            "en": "Sorts from smallest to largest"
          },
          {
            "he": "ממיין מהגדול לקטן",
            "ru": "Сортирует по убыванию",
            "en": "Sorts from largest to smallest"
          },
          {
            "he": "מדפיס את המערך",
            "ru": "Печатает массив",
            "en": "Prints the array"
          }
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "אם הוא כבר היה ממיין בסדר יורד, למה הלולאה רצה מ־4 עד 0?",
            "ru": "Если бы он сразу сортировал по убыванию, зачем цикл идёт от 4 до 0?",
            "en": "If it already sorted descending, why would the loop go from 4 down to 0?"
          }
        ],
        "solution": [
          {
            "he": "`Arrays.sort` ממיין בסדר עולה.",
            "ru": "`Arrays.sort` сортирует по возрастанию.",
            "en": "`Arrays.sort` sorts in ascending order."
          },
          {
            "he": "כדי לקבל סדר יורד, הלולאה מדפיסה מהסוף להתחלה:",
            "ru": "Чтобы получить убывание, цикл печатает с конца:",
            "en": "To get descending order, the loop prints from the end:"
          },
          "Arrays.sort(a);",
          "for (int i = 4; i >= 0; i--) {",
          "    System.out.print(a[i] + \" \");",
          "}"
        ]
      },
      {
        "id": "ai1-3",
        "level": 1,
        "label": "1.3",
        "kind": "choice",
        "text": {
          "he": "מה הסדר הנכון בתהליך RTC-C?",
          "ru": "Какой правильный порядок в процессе RTC-C?",
          "en": "What is the right order in the RTC-C flow?"
        },
        "options": [
          {
            "he": "שליחה ← בדיקה מול הדרישות ← זיהוי הרכיב החלש ← חידוד ושליחה מחדש",
            "ru": "Отправка → проверка по требованиям → поиск слабого компонента → уточнение и повторная отправка",
            "en": "Send → check against the requirements → find the weak component → refine and resend"
          },
          {
            "he": "שליחה ← מחיקה ← כתיבת פרומפט חדש מאפס",
            "ru": "Отправка → удаление → новый промпт с нуля",
            "en": "Send → delete → write a new prompt from scratch"
          },
          {
            "he": "בדיקה ← שליחה ← סיום",
            "ru": "Проверка → отправка → конец",
            "en": "Check → send → done"
          }
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "RTC-C הוא flow איטרטיבי: לא מתחילים הכול מחדש.",
            "ru": "RTC-C — итеративный процесс: всё заново не начинают.",
            "en": "RTC-C is an iterative flow: you don't start over."
          }
        ],
        "solution": [
          {
            "he": "שולחים, בודקים את התשובה מול הדרישות, מוצאים איזה רכיב חלש, מחזקים אותו ושולחים שוב.",
            "ru": "Отправляем, проверяем ответ по требованиям, находим слабый компонент, усиливаем его и отправляем снова.",
            "en": "Send, check the answer against the requirements, find the weak component, strengthen it and send again."
          },
          {
            "he": "אם התשובה לא מדויקת — מחזקים את הרכיב שחסר, ולא מתחילים הכול מחדש.",
            "ru": "Если ответ неточный — усиливаем недостающий компонент, а не начинаем всё заново.",
            "en": "If the answer isn't precise, strengthen the missing component instead of starting over."
          }
        ]
      },
      {
        "id": "ai2-1",
        "level": 2,
        "label": "2.1",
        "kind": "number",
        "text": {
          "he": "כמה זה מע\"מ `18%` על `200 ₪`?",
          "ru": "Сколько составит НДС `18%` от `200 ₪`?",
          "en": "How much is `18%` VAT on `200 ₪`?"
        },
        "answer": {
          "value": "36"
        },
        "hints": [
          {
            "he": "`18%` = `18 / 100`.",
            "ru": "`18%` = `18 / 100`.",
            "en": "`18%` = `18 / 100`."
          }
        ],
        "solution": [
          "200 × 18 / 100",
          "= 3600 / 100",
          "= 36",
          {
            "he": "תשובה: `36 ₪`",
            "ru": "Ответ: `36 ₪`",
            "en": "Answer: `36 ₪`"
          }
        ]
      },
      {
        "id": "ai2-2",
        "level": 2,
        "label": "2.2",
        "kind": "number",
        "text": {
          "he": "לפי המחשבון (רווח `100%`, משלוח `16.90 ₪`, מע\"מ `18%`): המוצר עלה `41.55 ₪`. מה המחיר ללקוח?",
          "ru": "По калькулятору (прибыль `100%`, доставка `16.90 ₪`, НДС `18%`): товар стоил `41.55 ₪`. Какая цена для клиента?",
          "en": "With the calculator (profit `100%`, shipping `16.90 ₪`, VAT `18%`): the product cost `41.55 ₪`. What is the price for the customer?"
        },
        "answer": {
          "value": "118.00"
        },
        "hints": [
          {
            "he": "קודם רווח, אחר כך משלוח, ובסוף מע\"מ על הכול.",
            "ru": "Сначала прибыль, потом доставка, в конце НДС на всё.",
            "en": "First profit, then shipping, and VAT on everything last."
          },
          {
            "he": "`41.55 + 41.55 + 16.90 = 100`",
            "ru": "`41.55 + 41.55 + 16.90 = 100`",
            "en": "`41.55 + 41.55 + 16.90 = 100`"
          }
        ],
        "solution": [
          "41.55 × 100 / 100 = 41.55",
          "41.55 + 41.55 = 83.10",
          "83.10 + 16.90 = 100",
          "100 × 18 / 100 = 18",
          "100 + 18 = 118",
          {
            "he": "תשובה: `118 ₪`",
            "ru": "Ответ: `118 ₪`",
            "en": "Answer: `118 ₪`"
          }
        ]
      },
      {
        "id": "ai2-3",
        "level": 2,
        "label": "2.3",
        "kind": "text",
        "text": {
          "he": "תוכנית המיון, קלט שכבר ממוין: `1 2 3 4 5`. מה יודפס אחרי `Descending:`?",
          "ru": "Программа сортировки, уже отсортированный ввод: `1 2 3 4 5`. Что напечатается после `Descending:`?",
          "en": "The sorting program with already-sorted input: `1 2 3 4 5`. What is printed after `Descending:`?"
        },
        "answer": {
          "accept": [
            "5.0 4.0 3.0 2.0 1.0",
            "5 4 3 2 1",
            "Descending: 5.0 4.0 3.0 2.0 1.0"
          ]
        },
        "hints": [
          {
            "he": "`Arrays.sort` לא משנה כלום, והלולאה מדפיסה מהסוף.",
            "ru": "`Arrays.sort` ничего не меняет, а цикл печатает с конца.",
            "en": "`Arrays.sort` changes nothing, and the loop prints from the end."
          }
        ],
        "solution": [
          {
            "he": "אחרי `Arrays.sort`: `1, 2, 3, 4, 5`",
            "ru": "После `Arrays.sort`: `1, 2, 3, 4, 5`",
            "en": "After `Arrays.sort`: `1, 2, 3, 4, 5`"
          },
          {
            "he": "מדפיסים מ־`a[4]` עד `a[0]`:",
            "ru": "Печатаем от `a[4]` до `a[0]`:",
            "en": "Print from `a[4]` to `a[0]`:"
          },
          "Descending: 5.0 4.0 3.0 2.0 1.0"
        ]
      },
      {
        "id": "ai2-4",
        "level": 2,
        "label": "2.4",
        "kind": "choice",
        "text": {
          "he": "מקלידים `abc` במקום מספר. מה התוכנית עושה?",
          "ru": "Вводим `abc` вместо числа. Что делает программа?",
          "en": "You type `abc` instead of a number. What does the program do?"
        },
        "options": [
          {
            "he": "נעצרת עם שגיאה",
            "ru": "Падает с ошибкой",
            "en": "Stops with an error"
          },
          {
            "he": "מדפיסה `Not a number, try again:` ומחכה למספר",
            "ru": "Печатает `Not a number, try again:` и ждёт число",
            "en": "Prints `Not a number, try again:` and waits for a number"
          },
          {
            "he": "שומרת 0 במקום",
            "ru": "Сохраняет вместо него 0",
            "en": "Stores 0 instead"
          }
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "הסתכלו על הלולאה `while (!in.hasNextDouble())`.",
            "ru": "Посмотри на цикл `while (!in.hasNextDouble())`.",
            "en": "Look at the loop `while (!in.hasNextDouble())`."
          }
        ],
        "solution": [
          "while (!in.hasNextDouble()) {",
          "    System.out.print(\"Not a number, try again: \");",
          "    in.next();",
          "}",
          {
            "he": "כל עוד הקלט הבא אינו מספר — מדפיסים הודעה, \"זורקים\" את המילה עם `in.next()` ובודקים שוב.",
            "ru": "Пока следующий ввод не число — печатаем сообщение, «выбрасываем» слово через `in.next()` и проверяем снова.",
            "en": "While the next input is not a number, print the message, throw the word away with `in.next()` and check again."
          }
        ]
      },
      {
        "id": "ai3-1",
        "level": 3,
        "label": "3.1",
        "kind": "number",
        "text": {
          "he": "אותו מחשבון, אבל רווח `50%`: המוצר עלה `30 ₪`, משלוח `16.90 ₪`. מה הסכום לפני מע\"מ?",
          "ru": "Тот же калькулятор, но прибыль `50%`: товар стоил `30 ₪`, доставка `16.90 ₪`. Какая сумма до НДС?",
          "en": "Same calculator, but `50%` profit: the product cost `30 ₪`, shipping `16.90 ₪`. What is the total before VAT?"
        },
        "answer": {
          "value": "61.90"
        },
        "hints": [
          {
            "he": "`50%` מ־30 זה חצי.",
            "ru": "`50%` от 30 — это половина.",
            "en": "`50%` of 30 is half."
          }
        ],
        "solution": [
          "30 × 50 / 100 = 15",
          "30 + 15 = 45",
          "45 + 16.90 = 61.90",
          {
            "he": "תשובה: `61.90 ₪`",
            "ru": "Ответ: `61.90 ₪`",
            "en": "Answer: `61.90 ₪`"
          }
        ]
      },
      {
        "id": "ai3-2",
        "level": 3,
        "label": "3.2",
        "kind": "choice",
        "text": {
          "he": "בפרומפט של סוכן שירות הלקוחות: \"מותר לך להעניק הנחה של עד 10% ללקוחות לא מרוצים… אסור לחרוג ללא אישור מנהל\". איזה תנאי הבוט לא יכול לבדוק בעצמו?",
          "ru": "В промпте агента поддержки: «Тебе разрешено дать скидку до 10% недовольным клиентам… Запрещено превышать без одобрения менеджера». Какое условие бот не может проверить сам?",
          "en": "In the customer-service agent's prompt: \"You may give a discount of up to 10% to unhappy customers… You must not exceed it without manager approval\". Which condition can the bot not check by itself?"
        },
        "options": [
          {
            "he": "להיות אדיב",
            "ru": "Быть вежливым",
            "en": "Being polite"
          },
          {
            "he": "לא יותר מ־10%",
            "ru": "Не больше 10%",
            "en": "No more than 10%"
          },
          {
            "he": "אישור מנהל",
            "ru": "Одобрение менеджера",
            "en": "Manager approval"
          }
        ],
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "איזה תנאי תלוי במשהו שהלקוח פשוט כותב בצ'אט?",
            "ru": "Какое условие зависит от того, что клиент просто пишет в чате?",
            "en": "Which condition depends on something the customer simply types in the chat?"
          }
        ],
        "solution": [
          {
            "he": "את הנימוס ואת גובה ההנחה הבוט שולט בעצמו.",
            "ru": "Вежливость и размер скидки бот контролирует сам.",
            "en": "Politeness and the size of the discount are under the bot's own control."
          },
          {
            "he": "אבל אין לו דרך לוודא שמנהל באמת אישר — לקוח יכול פשוט לכתוב \"המנהל אישר\".",
            "ru": "Но у него нет способа проверить, что менеджер правда одобрил — клиент может просто написать «менеджер разрешил».",
            "en": "But it has no way to verify that a manager really approved — a customer can just write \"the manager approved\"."
          },
          {
            "he": "כלל שהבוט לא יכול לבדוק קל לעקוף. בפרומפט כדאי להגדיר איך מאשרים (למשל: אין חריגה בכלל בצ'אט).",
            "ru": "Правило, которое бот не может проверить, легко обойти. В промпте лучше указать, как подтверждается одобрение (например: в чате превышать нельзя вообще).",
            "en": "A rule the bot cannot check is easy to get around. The prompt should say how approval is given (e.g. no exceptions at all in the chat)."
          }
        ]
      },
      {
        "id": "ai3-3",
        "level": 3,
        "label": "3.3",
        "kind": "choice",
        "text": {
          "he": "ביקשתם קוד מהצ'ט, אבל קיבלתם רק קוד בלי דוגמת הרצה ובלי מקרי קצה. לפי RTC-C, מה עושים?",
          "ru": "Вы попросили у чата код, но получили только код без примера запуска и без крайних случаев. Что делать по RTC-C?",
          "en": "You asked the chat for code but got only code, with no sample run and no edge cases. What do you do according to RTC-C?"
        },
        "options": [
          {
            "he": "מוחקים הכול וכותבים פרומפט חדש מאפס",
            "ru": "Удаляем всё и пишем новый промпт с нуля",
            "en": "Delete everything and write a new prompt from scratch"
          },
          {
            "he": "מחזקים את רכיב המגבלות: \"הצג קוד, דוגמת הרצה ודוגמאות למקרי קצה\" ושולחים שוב",
            "ru": "Усиливаем компонент ограничений: «покажи код, пример запуска и примеры крайних случаев» — и отправляем снова",
            "en": "Strengthen the Constraints part: \"show code, a sample run and edge-case examples\" and send again"
          },
          {
            "he": "מקבלים את התשובה כמו שהיא",
            "ru": "Принимаем ответ как есть",
            "en": "Accept the answer as it is"
          }
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "איזה רכיב קובע את צורת הפלט?",
            "ru": "Какой компонент задаёт форму ответа?",
            "en": "Which component defines the shape of the output?"
          }
        ],
        "solution": [
          {
            "he": "בודקים מול הדרישות: חסרים דוגמת הרצה ומקרי קצה.",
            "ru": "Проверяем по требованиям: нет примера запуска и крайних случаев.",
            "en": "Check against the requirements: the sample run and edge cases are missing."
          },
          {
            "he": "הרכיב החלש — המגבלות (מה צריך להיות בפלט).",
            "ru": "Слабый компонент — ограничения (что должно быть в ответе).",
            "en": "The weak component is Constraints (what the output must contain)."
          },
          {
            "he": "מחדדים אותו ושולחים מחדש — לא מתחילים מאפס.",
            "ru": "Уточняем его и отправляем снова — не с нуля.",
            "en": "Refine it and resend — don't start from zero."
          }
        ]
      }
    ]
  }
};

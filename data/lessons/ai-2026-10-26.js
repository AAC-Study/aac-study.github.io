/* Lesson ai-2026-10-26 (Intro to AI): what AI is, neurons, tokens, the balls puzzle. Format: see the comment at the top of data/lessons/math-2026-11-01.js. Ball traces and neuron sums are computed and checked in the generator. */
window.LESSONS = window.LESSONS || {};
window.LESSONS["ai-2026-10-26"] = {
  "id": "ai-2026-10-26",
  "subject": "ai",
  "date": "2026-10-26",
  "title": {
    "he": "מבוא ל־AI: מה זו בינה מלאכותית",
    "ru": "Введение в ИИ: что такое ИИ",
    "en": "Intro to AI: what AI is"
  },
  "summary": {
    "he": "מה זו בינה מלאכותית ובמה היא שונה מתוכנית רגילה, נוירונים וטוקנים, אתגר הכדורים (שגיאת תחביר מול שגיאה לוגית) ופרומפט \"מנחה — לא פותר\".",
    "ru": "Что такое ИИ и чем он отличается от обычной программы, нейроны и токены, задача с шарами (синтаксическая и логическая ошибка) и промпт «направляет, а не решает».",
    "en": "What AI is and how it differs from an ordinary program, neurons and tokens, the balls puzzle (syntax vs logic errors) and a \"guide, don't solve\" prompt."
  },
  "timeline": [
    { "why": {"he": "למה אנשי תוכנה צריכים להבין \"מאחורי הקלעים\"? כי מי שמבין איך המודל עובד יודע מתי לסמוך עליו ומתי לא, ואיך לבנות עליו מוצר. וב-Full Stack כותבים לבד כי המטרה היא שהידיים והראש ילמדו. אם ה-AI כותב, הוא זה שלמד, לא אתה.", "ru": "Зачем людям софта понимать, что «за кулисами»? Кто понимает, как работает модель, знает, когда ей верить, а когда нет, и как построить на ней продукт. А в Full Stack пишут сами, потому что цель — чтобы научились руки и голова. Если пишет ИИ, учится он, а не ты.", "en": "Why do software people need to see \"behind the scenes\"? Whoever understands how the model works knows when to trust it, when not to, and how to build a product on it. And in Full Stack you write yourself because the goal is for your hands and head to learn. If the AI writes, it learns, not you."},
      "kind": "talk",
      "title": {
        "he": "למה הקורס הזה",
        "ru": "Зачем этот курс",
        "en": "Why this course"
      },
      "text": {
        "he": "כולם משתמשים ב־AI, אבל אנשי תוכנה צריכים גם להבין מה קורה \"מאחורי הקלעים\". בקורס: NotebookLM ו־Gemini (אפשר לבנות סוכנים בלי מנוי בתשלום), ופרויקטים — אפליקציות בתחום שלכם. בשנה הבאה: אוטומציות ו־vibe coding. אבל ב־Full Stack את הקוד כותבים בעצמכם — AI עוזר, לא כותב בשבילכם.",
        "ru": "ИИ пользуются все, но людям софта нужно ещё понимать, что у него «за кулисами». В курсе: NotebookLM и Gemini (агентов можно строить без платной подписки) и проекты — приложения по вашей специальности. В следующем году: автоматизации и vibe coding. Но в Full Stack код пишете сами — ИИ помогает, а не пишет за вас.",
        "en": "Everyone uses AI, but software people also need to understand what happens \"behind the scenes\". The course uses NotebookLM and Gemini (you can build agents without a paid plan), with projects — apps in your field. Next year: automations and vibe coding. But in Full Stack you write the code yourselves — AI helps, it doesn't write it for you."
      }
    },
    { "why": {"he": "למה מודל ממציא? הוא לא \"יודע\" עובדות. הוא בוחר בכל פעם את המילה הבאה שהכי סבירה, ותשובה שנשמעת בטוחה ונעימה היא לרוב \"סבירה\". לכן הוא יכול לנסח שקר בביטחון מלא. הדרך להתגונן: לבקש מקורות, לשאול \"מה החסרונות?\", ולבדוק עובדה חשובה במקום נוסף.", "ru": "Почему модель выдумывает? Она не «знает» факты. Она каждый раз выбирает самое вероятное следующее слово, а уверенный и приятный ответ обычно «вероятен». Поэтому она может сказать неправду с полной уверенностью. Как защититься: просить источники, спрашивать «какие минусы?», а важный факт проверять в другом месте.", "en": "Why does a model make things up? It does not \"know\" facts. It picks the most likely next word each time, and a confident, pleasant answer is usually \"likely\". So it can state something false with full confidence. To protect yourself: ask for sources, ask \"what are the downsides?\", and check important facts elsewhere."},
      "kind": "tip",
      "title": {
        "he": "המודל יכול להמציא בביטחון (הזיה)",
        "ru": "Модель может уверенно выдумывать (галлюцинация)",
        "en": "A model can confidently make things up (hallucination)"
      },
      "text": {
        "he": "דוגמה מהשיעור: Gemini שיבח כיסאות עם גב מחבל — \"חזקים, לאורך זמן\". אחרי שבפרומפט נכתב \"אל תחרטט אותי\", התשובה השתנתה: הם נשחקים בערך תוך 3 שנים. המסקנה: צריך לדעת לדבר עם המודל ולבדוק, לא להעתיק תשובה.\nוכלל לשיעורי הבית: AI הוא עוזר, לא copy-paste. מי שרק מעתיק — אחרי דקה לא זוכר כלום.",
        "ru": "Пример с урока: Gemini хвалил стулья с верёвочной спинкой — «прочные, надолго». После того как в промпт добавили «не вешай мне лапшу» (אל תחרטט אותי), ответ стал другим: изнашиваются примерно за 3 года. Вывод: с моделью надо уметь говорить и проверять, а не копировать ответ.\nИ правило для домашек: ИИ — помощник, а не copy-paste. Кто просто копирует, через минуту ничего не помнит.",
        "en": "An example from class: Gemini praised chairs with rope backs — \"strong, long-lasting\". After the prompt added \"don't sugar-coat it\" (אל תחרטט אותי), the answer changed: they wear out in about 3 years. Lesson: know how to talk to the model and check it, don't just copy the answer.\nAnd a homework rule: AI is a helper, not copy-paste. If you just copy, a minute later you remember nothing."
      }
    },
    { "why": {"he": "המונחים האלה יחזרו בכל הקורס, ולכן כדאי לדעת אותם בעל פה. Overfitting הוא כמו תלמיד ששינן את התשובות של המבחן לדוגמה: במבחן ההוא קיבל 100, ובמבחן חדש נכשל. ו-GPU מתאים ללמידה כי יש בו אלפי ליבות קטנות שעושות הרבה חישובים פשוטים באותו זמן.", "ru": "Эти термины будут во всём курсе, поэтому их стоит знать наизусть. Overfitting — как студент, который зазубрил ответы пробного экзамена: на том экзамене 100, а на новом проваливается. GPU подходит для обучения, потому что в нём тысячи маленьких ядер, которые одновременно делают много простых вычислений.", "en": "These terms come back all course long, so learn them by heart. Overfitting is like a student who memorised the sample exam: 100 on that one, fails a new one. A GPU suits training because it has thousands of small cores doing many simple calculations at the same time."},
      "kind": "talk",
      "title": {
        "he": "מושגים ממשחק הפתיחה",
        "ru": "Термины из игры в начале урока",
        "en": "Terms from the opening quiz game"
      },
      "text": {
        "he": "בתחילת השיעור שיחקו ב־Kahoot על מושגים. כמה מהם:\nמבחן טיורינג — האם אדם מבחין בין שיחה עם מכונה לשיחה עם אדם.\nהזיה (hallucination) — המודל ממציא בביטחון.\nLLM — מודל שפה גדול; הוא מנבא את המילה הבאה.\nAPI — דרך שבה תוכנה חיצונית מחליפה נתונים עם מודל או מערכת.\nפרומפט — מה שכותבים למודל.\nOverfitting (התאמת יתר) — המודל הותאם יותר מדי, ועל נתונים חדשים הוא טועה.\nGPU — מעבד גרפי; צריך אותו לאימון על כמויות ענק של נתונים.\nDeepfake — תמונה או סרטון מזויפים שנראים אמיתיים.",
        "ru": "В начале урока играли в Kahoot на термины. Некоторые из них:\nТест Тьюринга — может ли человек отличить разговор с машиной от разговора с человеком.\nГаллюцинация — модель уверенно выдумывает.\nLLM — большая языковая модель; она предсказывает следующее слово.\nAPI — способ, которым внешняя программа обменивается данными с моделью или системой.\nПромпт — то, что мы пишем модели.\nOverfitting (переобучение) — модель подогнали слишком сильно, и на новых данных она ошибается.\nGPU — графический процессор; нужен для обучения на огромных объёмах данных.\nDeepfake — поддельное фото или видео, которое выглядит настоящим.",
        "en": "The lesson opened with a Kahoot game on terms. Some of them:\nTuring test — can a person tell a chat with a machine from a chat with a human.\nHallucination — the model confidently makes things up.\nLLM — a large language model; it predicts the next word.\nAPI — a way for an outside program to exchange data with a model or system.\nPrompt — what we write to the model.\nOverfitting — the model was fitted too closely, so it makes mistakes on new data.\nGPU — a graphics processor; needed to train on huge amounts of data.\nDeepfake — a fake photo or video that looks real."
      }
    },
    { "why": {"he": "המשפט \"מי שמשתמש ב-AI יחליף את מי שלא\" אומר: הכלי לא עושה את העבודה לבד, הוא מכפיל את מי שיודע להשתמש בו. לכן הקורס מלמד לעבוד איתו, ולא רק להכיר אותו.", "ru": "Фраза «люди с ИИ заменят людей без ИИ» значит: инструмент сам работу не делает, он усиливает того, кто умеет им пользоваться. Поэтому курс учит работать с ним, а не только знать о нём.", "en": "The line \"people who use AI will replace those who do not\" means: the tool does not do the work by itself, it multiplies whoever knows how to use it. So the course teaches you to work with it, not just know about it."},
      "kind": "talk",
      "title": {
        "he": "מה זו בינה מלאכותית",
        "ru": "Что такое ИИ",
        "en": "What AI is"
      },
      "text": {
        "he": "Artificial — מלאכותי, נוצר על ידי האדם. Intelligence — היכולת להבין, ללמוד, לפתור בעיות ולקבל החלטות. AI הוא ניסיון ליצור מערכות מחשב שמבצעות משימות שדורשות \"אינטליגנציה\". המוח האנושי עובד באופן אורגני ואינטואיטיבי; מערכות AI עובדות דרך אלגוריתמים מתמטיים מורכבים.\n\"הבינה המלאכותית לא תחליף אנשים — אנשים שמשתמשים בבינה מלאכותית יחליפו את אלו שלא.\"",
        "ru": "Artificial — искусственный, созданный человеком. Intelligence — способность понимать, учиться, решать задачи и принимать решения. ИИ — попытка создать компьютерные системы, которые выполняют задачи, требующие «интеллекта». Мозг человека работает органически и интуитивно; системы ИИ — через сложные математические алгоритмы.\n«ИИ не заменит людей. Люди, которые пользуются ИИ, заменят тех, кто не пользуется».",
        "en": "Artificial — man-made, created by humans. Intelligence — the ability to understand, learn, solve problems and make decisions. AI is an attempt to build computer systems that do tasks needing \"intelligence\". The human brain works organically and intuitively; AI systems work through complex mathematical algorithms.\n\"AI won't replace people — people who use AI will replace those who don't.\""
      }
    },
    { "why": {"he": "למה עיגולים אחד בתוך השני? כל אחד הוא סוג של הקודם. AI הוא כל מכונה \"חכמה\", גם עם חוקים שאדם כתב. ML הוא AI שלומד מדוגמאות. DL הוא ML עם רשת נוירונים של הרבה שכבות — וזה מה שנמצא בתוך ChatGPT ו-Claude.", "ru": "Почему круги один в другом? Каждый — вид предыдущего. ИИ — любая «умная» машина, даже с правилами, которые написал человек. ML — ИИ, который учится на примерах. DL — ML с многослойной нейросетью, и именно это внутри ChatGPT и Claude.", "en": "Why circles inside circles? Each is a kind of the one before. AI is any \"smart\" machine, even with rules a person wrote. ML is AI that learns from examples. DL is ML with a many-layer neural network — and that is what is inside ChatGPT and Claude."},
      "kind": "talk",
      "title": {
        "he": "מה נלמד",
        "ru": "Что будем учить",
        "en": "What we will learn"
      },
      "text": {
        "he": "AI הוא המושג הרחב. בתוכו למידת מכונה (Machine Learning) — תוכנה שלומדת מנתונים, ובתוכה למידה עמוקה (Deep Learning) — רשתות נוירונים רבות שכבות.\nבפועל: הנדסת פרומפטים, מודלי חשיבה ואוטומציה, חיבור כלים, בניית סוכנים, ופרויקט — אפליקציה משלכם.",
        "ru": "ИИ — самое широкое понятие. Внутри него машинное обучение (Machine Learning) — программа учится на данных, а внутри него глубокое обучение (Deep Learning) — многослойные нейросети.\nНа практике: промпт-инженерия, модели мышления и автоматизация, соединение инструментов, создание агентов и проект — своё приложение.",
        "en": "AI is the widest term. Inside it is Machine Learning — software that learns from data — and inside that, Deep Learning — many-layered neural networks.\nIn practice: prompt engineering, thinking models and automation, connecting tools, building agents, and a project — your own app."
      }
    },
    { "why": {"he": "למה היה צריך 60 שנה? הרעיונות היו מוקדם, אבל לא היה מספיק כוח מחשוב ונתונים. רשתות גדולות צריכות מיליארדי דוגמאות ומעבדים חזקים, וזה קרה רק עם האינטרנט וה-GPU. הסיפור של Tay מראה למה לומדים מנתונים בזהירות: המודל לומד גם את הרע.", "ru": "Почему понадобилось 60 лет? Идеи были давно, но не хватало вычислительной мощности и данных. Большим сетям нужны миллиарды примеров и сильные процессоры, а это появилось только с интернетом и GPU. История Tay показывает, почему учиться на данных надо осторожно: модель учится и плохому.", "en": "Why did it take 60 years? The ideas came early, but there was not enough computing power or data. Big networks need billions of examples and strong processors, which only arrived with the internet and GPUs. The Tay story shows why learning from data needs care: the model learns the bad too."},
      "kind": "talk",
      "title": {
        "he": "קצת היסטוריה",
        "ru": "Немного истории",
        "en": "A bit of history"
      },
      "text": {
        "he": "1950 — אלן טיורינג שואל: \"האם מכונה יכולה לחשוב?\"\n1956 — כנס דרטמות, שם נולד השם \"בינה מלאכותית\".\n1966 — ELIZA, הצ'טבוט הראשון (ג'וזף וייצנבאום, MIT).\n2016 — Tay של Microsoft למד ממשתמשים בטוויטר, למד מהר עלבונות והורד תוך פחות מיממה.\n2017 — מודל Transformer, שעליו בנויים ChatGPT, Claude ואחרים.\nהזינוק התאפשר בזכות מחשבים וזיכרון מהירים ואינטרנט עם המון נתונים.",
        "ru": "1950 — Алан Тьюринг спрашивает: «Может ли машина думать?»\n1956 — конференция в Дартмуте, где родилось название «искусственный интеллект».\n1966 — ELIZA, первый чат-бот (Джозеф Вейценбаум, MIT).\n2016 — Tay от Microsoft учился у пользователей Twitter, быстро научился оскорблениям, и его отключили меньше чем через сутки.\n2017 — модель Transformer, на ней построены ChatGPT, Claude и другие.\nРывок стал возможен благодаря быстрым компьютерам и памяти и интернету с огромным количеством данных.",
        "en": "1950 — Alan Turing asks: \"Can a machine think?\"\n1956 — the Dartmouth conference, where the name \"artificial intelligence\" was born.\n1966 — ELIZA, the first chatbot (Joseph Weizenbaum, MIT).\n2016 — Microsoft's Tay learned from Twitter users, quickly picked up insults and was taken down in less than a day.\n2017 — the Transformer model, the basis of ChatGPT, Claude and others.\nThe leap became possible thanks to fast computers and memory and an internet full of data."
      }
    },
    { "why": {"he": "אין כאן תשובה אחת נכונה, ובכוונה: אותו כלי שעוזר ללמוד יכול גם להזיק ללמידה, אם רק מעתיקים. השאלה היא לא \"טוב או רע\", אלא \"איך משתמשים בו נכון\".", "ru": "Одного верного ответа тут нет, и это нарочно: тот же инструмент, который помогает учиться, может и мешать учёбе, если только копировать. Вопрос не «хорошо или плохо», а «как пользоваться правильно».", "en": "There is no single right answer here, on purpose: the same tool that helps you learn can also hurt learning if you just copy. The question is not \"good or bad\" but \"how to use it well\"."},
      "kind": "talk",
      "title": {
        "he": "AI: מצוין או מסוכן?",
        "ru": "ИИ: отлично или опасно?",
        "en": "AI: great or dangerous?"
      },
      "text": {
        "he": "מצוין: ביצוע משימות ביעילות, מחקר ותגליות, צמצום פערים חברתיים, יצירתיות וחדשנות, בריאות, תהליכי למידה.\nמסוכן: אובדן מקומות עבודה, מידע לא אמין, פגיעה בפרטיות, פגיעה בהתפתחות האישית, איומי אבטחה.",
        "ru": "Отлично: эффективнее выполнять задачи, исследования и открытия, сокращение социального неравенства, творчество и инновации, здоровье, обучение.\nОпасно: потеря рабочих мест, недостоверная информация, угроза приватности, вред личному развитию, угрозы безопасности.",
        "en": "Great: doing tasks efficiently, research and discovery, reducing social gaps, creativity and innovation, health, learning.\nDangerous: job losses, unreliable information, privacy threats, harm to personal growth, security threats."
      }
    },
    { "why": {"he": "למה לא לכתוב חוקים לכל דבר? יש משימות שאי אפשר לנסח בחוקים. נסו לכתוב חוק שמזהה חתול בתמונה — אוזניים? גם לכלב יש. לכן נותנים למכונה אלפי דוגמאות, והיא מוצאת לבד את הדפוס. אבל כשיש חוק ברור, כמו מחשבון, תוכנית רגילה טובה יותר — מדויקת וצפויה.", "ru": "Почему не написать правила на всё? Некоторые задачи правилами не описать. Попробуй написать правило, которое находит кошку на фото — уши? У собаки тоже. Поэтому машине дают тысячи примеров, и она сама находит закономерность. Но когда правило ясное, как в калькуляторе, обычная программа лучше: точная и предсказуемая.", "en": "Why not write rules for everything? Some tasks cannot be put into rules. Try writing a rule that spots a cat in a photo — ears? Dogs have them too. So you give the machine thousands of examples and it finds the pattern itself. But when the rule is clear, like a calculator, a regular program is better: exact and predictable."},
      "kind": "talk",
      "title": {
        "he": "תוכנית רגילה מול AI",
        "ru": "Обычная программа и ИИ",
        "en": "Ordinary program vs AI"
      },
      "text": {
        "he": "תוכנית רגילה עובדת לפי כללים קבועים וברורים, לא לומדת ולא משתפרת, ועושה רק מה שתוכנת (מחשבון תמיד יחזיר `5 + 5 = 10`).\nAI לומד מדוגמאות, משתפר עם הזמן, מתמודד עם מצבים חדשים ומוצא דפוסים מורכבים. איך אדם יודע שזה בית או מטוס? אף אחד לא נתן לו כלל — הוא ראה הרבה דוגמאות.",
        "ru": "Обычная программа работает по постоянным чётким правилам, не учится и не улучшается и делает только то, что запрограммировано (калькулятор всегда вернёт `5 + 5 = 10`).\nИИ учится на примерах, улучшается со временем, справляется с новыми ситуациями и находит сложные закономерности. Откуда человек знает, что это дом или самолёт? Правила ему никто не давал — он видел много примеров.",
        "en": "An ordinary program follows fixed, clear rules, doesn't learn or improve, and does only what it was programmed to do (a calculator always returns `5 + 5 = 10`).\nAI learns from examples, improves over time, handles new situations and finds complex patterns. How does a person know it's a house or a plane? Nobody gave them a rule — they saw many examples."
      }
    },
    { "why": {"he": "הדוגמה מראה את החיסרון של חוק קשיח: `80.01` ו-`200` מקבלים אותה תשובה, וגם `79.99` ו-`80.01` כמעט זהים אבל מקבלים תשובות הפוכות. מערכת לומדת יכולה לשקול עוד נתונים (כמה זמן חם, מה קרה בפעם הקודמת). עם זאת, למכונה מסוכנת לפעמים בדיוק רוצים חוק קשיח.", "ru": "Пример показывает минус жёсткого правила: `80.01` и `200` получают один ответ, а `79.99` и `80.01` почти одинаковы, но получают противоположные. Обучаемая система может учесть ещё данные (как долго жарко, что было в прошлый раз). Но для опасной машины иногда нужно как раз жёсткое правило.", "en": "The example shows the downside of a hard rule: `80.01` and `200` get the same answer, while `79.99` and `80.01` are nearly equal yet get opposite answers. A learning system can weigh more data (how long it has been hot, what happened last time). Still, for a dangerous machine a hard rule is sometimes exactly what you want."},
      "kind": "board",
      "title": {
        "he": "דוגמת הטמפרטורה",
        "ru": "Пример с температурой",
        "en": "The temperature example"
      },
      "text": {
        "he": "לתוכנית רגילה מספיק `80.01` כדי להדפיס stop — הכלל קשיח. AI לומד מדוגמאות ויכול להתאים את עצמו, למשל כשהתנאים משתנים.",
        "ru": "Обычной программе достаточно `80.01`, чтобы напечатать stop — правило жёсткое. ИИ учится на примерах и может подстроиться, например, если условия поменялись.",
        "en": "For an ordinary program `80.01` is enough to print stop — the rule is rigid. AI learns from examples and can adapt, for example when conditions change."
      },
      "math": [
        "if (temp > 80) printf(\"stop\");",
        "else printf(\"ok\");"
      ]
    },
    { "why": {"he": "למה זה בחינם? כי הנתונים על מה שאתה צופה ולוחץ הם מה ששווה כסף: הם עוזרים להראות לך פרסומות שתלחץ עליהן ולהשאיר אותך יותר זמן. כדאי לדעת את זה כשמחליטים מה לשתף.", "ru": "Почему это бесплатно? Потому что данные о том, что ты смотришь и нажимаешь, и стоят денег: они помогают показать рекламу, на которую ты нажмёшь, и удержать тебя дольше. Это стоит помнить, когда решаешь, чем делиться.", "en": "Why is it free? Because the data about what you watch and click is what is worth money: it helps show you ads you will click and keep you longer. Worth knowing when you decide what to share."},
      "kind": "talk",
      "title": {
        "he": "AI בחיים: המלצות חכמות",
        "ru": "ИИ в жизни: умные рекомендации",
        "en": "AI in daily life: smart recommendations"
      },
      "text": {
        "he": "מאחורי המסך עובד AI שעוקב אחרי כל פעולה כדי להכיר אתכם: YouTube מציג פרסומות מתאימות, Netflix ממליץ על סרטים, AliExpress מנתח התנהגות, Spotify בונה פלייליסט שבועי אישי.",
        "ru": "За экраном работает ИИ, который следит за каждым действием, чтобы лучше вас понять: YouTube показывает подходящую рекламу, Netflix рекомендует фильмы, AliExpress анализирует поведение, Spotify составляет личный плейлист на неделю.",
        "en": "Behind the screen, AI follows every action to get to know you: YouTube shows matching ads, Netflix recommends films, AliExpress analyses behaviour, Spotify builds a personal weekly playlist."
      }
    },
    { "why": {"he": "למה משקלים? כי לא כל קלט חשוב באותה מידה. \"למידה\" היא בעצם שינוי קטן של המשקלים שוב ושוב, עד שהטעויות קטנות. backpropagation הוא הדרך לדעת איזה משקל אשם בטעות וכמה לתקן אותו. זה הכול כפל וחיבור, רק מיליארדים מהם — ולכן צריך GPU.", "ru": "Зачем веса? Потому что не каждый вход одинаково важен. «Обучение» — это на самом деле маленькое изменение весов снова и снова, пока ошибок не станет мало. Backpropagation — способ узнать, какой вес виноват в ошибке и насколько его поправить. Всё это умножения и сложения, только их миллиарды, поэтому и нужен GPU.", "en": "Why weights? Because not every input matters equally. \"Learning\" is really nudging the weights again and again until the errors get small. Backpropagation is how you find which weight caused an error and how much to fix it. It is all multiplying and adding, just billions of times — hence the GPU."},
      "kind": "talk",
      "title": {
        "he": "נוירון ורשת נוירונים",
        "ru": "Нейрон и нейросеть",
        "en": "Neurons and neural networks"
      },
      "text": {
        "he": "נוירון במוח: דנדריטים מקבלים אותות, גוף התא אוסף מידע, האקסון מעביר דחף חשמלי, וקצות האקסון מעבירים הודעה לתא הבא.\nנוירון מלאכותי: כל קלט x מוכפל במשקל w, מחברים, מוסיפים b, ופונקציית הפעלה מחליטה אם \"להידלק\": `x1·w1 + x2·w2 + b`. המשקל אומר כמה הקלט חשוב.\nForward propagation — האות עובר קדימה, מהקלט לתשובה. Backpropagation — הרשת משווה לתשובה הנכונה ומתקנת את המשקלים. זה האימון.\nדוגמת החתול: שכבה 1 — ארבע רגליים וזנב (גם כלב וגם נמר!), שכבה 2 — צבע העיניים, והשכבות הבאות מדייקות עד הגזע.",
        "ru": "Нейрон в мозге: дендриты принимают сигналы, тело клетки собирает информацию, аксон проводит электрический импульс, окончания аксона передают сообщение следующей клетке.\nИскусственный нейрон: каждый вход x умножается на вес w, всё складывается, прибавляется b, и функция активации решает, «зажечься» ли: `x1·w1 + x2·w2 + b`. Вес показывает, насколько важен вход.\nForward propagation — сигнал идёт вперёд, от входа к ответу. Backpropagation — сеть сравнивает ответ с правильным и поправляет веса. Это и есть обучение.\nПример с кошкой: слой 1 — четыре лапы и хвост (так выглядят и собака, и тигр!), слой 2 — цвет глаз, следующие слои уточняют вплоть до породы.",
        "en": "A brain neuron: dendrites receive signals, the cell body gathers information, the axon carries an electrical impulse, and the axon terminals pass the message to the next cell.\nAn artificial neuron: each input x is multiplied by a weight w, everything is added, b is added, and an activation function decides whether to \"fire\": `x1·w1 + x2·w2 + b`. The weight says how important an input is.\nForward propagation — the signal goes forward, from input to answer. Backpropagation — the network compares with the right answer and corrects the weights. That is training.\nThe cat example: layer 1 — four legs and a tail (a dog and a tiger too!), layer 2 — eye colour, and the next layers narrow it down to the breed."
      }
    },
    { "why": {"he": "למה המחשב לא \"מבין למה התכוונו\"? כי אין לו הקשר ושכל ישר, יש לו רק את הפקודות. זה הקשר לשיעור האלגוריתמיקה: מה שנראה לנו \"ברור מאליו\" צריך לכתוב בקוד במפורש ובסדר הנכון.", "ru": "Почему компьютер не «понимает, что имели в виду»? У него нет контекста и здравого смысла, есть только команды. В этом связь с алгоритмикой: то, что нам кажется «само собой понятным», в коде надо написать явно и в правильном порядке.", "en": "Why does the computer not \"get what we meant\"? It has no context or common sense, only the commands. That is the link to the algorithms course: whatever seems \"obvious\" to us must be written in code explicitly and in the right order."},
      "kind": "talk",
      "title": {
        "he": "תוכנית = סדרת הוראות מדויקות",
        "ru": "Программа = серия точных инструкций",
        "en": "A program = a series of precise instructions"
      },
      "text": {
        "he": "צורך ← הוראות ← תוצאה. המחשב לא \"מנחש\" מה התכוונו — הוא מבצע בדיוק את ההוראות, באותו סדר. לאדם מספיק להגיד \"תדליק מצלמה\"; למחשב צריך הכול בשלבים: להדליק את המחשב, לפתוח את Zoom בקישור, וכו'. טעות נפוצה: סדר פעולות שגוי — למשל להשוות כדור שעוד לא נשקל.",
        "ru": "Потребность → инструкции → результат. Компьютер не «угадывает», что мы имели в виду, — он выполняет ровно те инструкции, что получил, и в том же порядке. Человеку достаточно сказать «включи камеру»; компьютеру нужно всё по шагам: включить компьютер, открыть Zoom по ссылке и т. д. Частая ошибка: неправильный порядок действий — например, сравнить шар, который ещё не взвесили.",
        "en": "Need → instructions → result. The computer doesn't \"guess\" what we meant — it carries out exactly the instructions it got, in the same order. A person just needs \"turn on the camera\"; a computer needs every step: turn on the computer, open Zoom from the link, and so on. A common mistake: the wrong order of steps — for example, comparing a ball that hasn't been weighed yet."
      }
    },
    { "why": {"he": "שימו לב: האלגוריתם הזה שגוי בכוונה. אל תחפשו בו היגיון — קראו עד הסוף. המטרה היא לראות שקוד יכול לרוץ בלי שום שגיאה ועדיין לתת תשובה לא נכונה. בשביל זה נותנים לכם אותו.", "ru": "Внимание: этот алгоритм нарочно неправильный. Не ищи в нём логику — прочитай до конца. Цель — увидеть, что код может выполниться без единой ошибки и всё равно дать неверный ответ. Для этого его и дают.", "en": "Note: this algorithm is wrong on purpose. Do not look for logic in it — read to the end. The goal is to see that code can run without a single error and still give a wrong answer. That is why it is given."},
      "kind": "board",
      "title": {
        "he": "אתגר לוגי: האלגוריתם רץ — אבל טועה",
        "ru": "Логическая задача: алгоритм работает — но ошибается",
        "en": "Logic challenge: the algorithm runs — but is wrong"
      },
      "text": {
        "he": "לפניכם 10 כדורים, ולכל כדור משקל משלו. האלגוריתם אמור להדפיס את משקל הכדור הכבד ביותר. האלגוריתם המילולי מהשקף:\nאתחול: קח את כדור מס' 1 והנח אותו על המדף הזמני (\"הכדור הכבד ביותר עד כה\").\nלולאת השוואה: עבור כל כדור N מ־2 עד 10:\n• שקול את כדור N.\n• השווה את משקלו של כדור N למשקלו של כדור N−1 (הכדור הקודם בסדרה).\n• אם משקלו של כדור N גדול ממשקלו של כדור N−1, החלף את הכדור שעל המדף בכדור N.\n• אחרת, השאר את המדף ללא שינוי.\nפלט: הצג את הכדור שנשאר על המדף.\nושאלה בתחתית השקף: הקוד מסתיים ללא שגיאת תחביר — האם הוא משיג את המטרה?",
        "ru": "Есть 10 шаров, у каждого свой вес. Алгоритм должен напечатать вес самого тяжёлого. Словесный алгоритм со слайда:\nНачало: возьми шар №1 и положи на временную полку («самый тяжёлый пока что»).\nЦикл сравнения: для каждого шара N от 2 до 10:\n• взвесь шар N;\n• сравни вес шара N с весом шара N−1 (предыдущего в ряду);\n• если шар N тяжелее шара N−1, замени шар на полке шаром N;\n• иначе полку не трогай.\nВывод: покажи шар, который остался на полке.\nИ вопрос внизу слайда: код заканчивается без синтаксической ошибки — достигает ли он цели?",
        "en": "There are 10 balls, each with its own weight. The algorithm should print the weight of the heaviest ball. The algorithm in words, from the slide:\nStart: take ball 1 and put it on the temporary shelf (\"the heaviest so far\").\nComparison loop: for each ball N from 2 to 10:\n• weigh ball N;\n• compare the weight of ball N with the weight of ball N−1 (the previous one in the row);\n• if ball N is heavier than ball N−1, replace the ball on the shelf with ball N;\n• otherwise leave the shelf as it is.\nOutput: show the ball left on the shelf.\nAnd the question at the bottom of the slide: the code finishes without a syntax error — does it reach the goal?"
      }
    },
    { "why": {"he": "למה לבדוק עם 3 שקלים? כי בדוגמה קטנה אפשר לעקוב אחרי כל צעד ביד. כשהשאלה היא \"מי הכי כבד עד עכשיו\", צריך להשוות למי שעל המדף, כי רק הוא זוכר את כל מה שהיה. השכן הקודם יודע רק על עצמו. זה בדיוק משתנה ה-`max` באלגוריתמיקה.", "ru": "Зачем проверять на 3 весах? На маленьком примере можно пройти каждый шаг руками. Когда вопрос «кто самый тяжёлый до сих пор», сравнивать надо с тем, кто на полке, потому что только он «помнит» всё, что было. Предыдущий сосед знает только о себе. Это ровно переменная `max` на алгоритмике.", "en": "Why test with 3 weights? On a small example you can follow every step by hand. When the question is \"who is heaviest so far\", you compare with the one on the shelf, because only it \"remembers\" everything so far. The previous neighbour knows only about itself. That is exactly the `max` variable in algorithms."},
      "kind": "tip",
      "title": {
        "he": "איפה הכשל",
        "ru": "Где ошибка",
        "en": "Where the flaw is"
      },
      "text": {
        "he": "הכשל מכוון: את כדור N משווים לשכן N−1, ולא לכדור שעל המדף. עם `5, 9, 3, 4, 2, 1, 6, 2, 3, 1` האלגוריתם מדפיס `3`, אבל הכבד ביותר הוא `9`. עם שלושה משקלים `9, 3, 5` הוא מדפיס `5`.\nהתיקון — שורה אחת: משווים את כדור N לכדור שעל המדף.",
        "ru": "Ошибка намеренная: шар N сравнивают с соседом N−1, а не с шаром на полке. С `5, 9, 3, 4, 2, 1, 6, 2, 3, 1` алгоритм печатает `3`, а самый тяжёлый — `9`. С тремя весами `9, 3, 5` он печатает `5`.\nИсправление — одна строка: сравнивать шар N с шаром на полке.",
        "en": "The flaw is deliberate: ball N is compared with its neighbour N−1, not with the ball on the shelf. With `5, 9, 3, 4, 2, 1, 6, 2, 3, 1` the algorithm prints `3`, but the heaviest is `9`. With three weights `9, 3, 5` it prints `5`.\nThe fix is one line: compare ball N with the ball on the shelf."
      }
    },
    { "why": {"he": "למה קודם במילים ולא בקוד? כי כך מתמקדים בהיגיון ולא בתחביר. אם האלגוריתם נכון במילים, לתרגם לקוד זה כבר קל. אם הוא שגוי במילים, שום קוד לא יציל אותו.", "ru": "Почему сначала словами, а не кодом? Так думаешь о логике, а не о синтаксисе. Если алгоритм верен словами, перевести его в код уже легко. Если он неверен словами, никакой код его не спасёт.", "en": "Why words first, not code? Because then you focus on logic, not syntax. If the algorithm is right in words, turning it into code is easy. If it is wrong in words, no code will save it."},
      "kind": "talk",
      "title": {
        "he": "האלגוריתם הנכון שבנו יחד",
        "ru": "Правильный алгоритм, который собрали вместе",
        "en": "The correct algorithm built together"
      },
      "text": {
        "he": "בכיתה כתבו קודם במשך 5 דקות אלגוריתם במילים (לא בקוד), ואז בנו יחד:\n1. שוקלים את הכדור הראשון ושמים בקופסה.\n2. לולאה: עוברים על הכדורים 2 עד 10 ושוקלים כל אחד.\n3. משווים את הכדור הנוכחי לכדור שבקופסה.\n4. אם הנוכחי כבד יותר — מחליפים.\n5. ממשיכים עד שבדקו את כל ה־10.",
        "ru": "В классе сначала 5 минут писали алгоритм словами (не кодом), потом собрали вместе:\n1. Взвесить первый шар и положить в коробку.\n2. Цикл: брать шары со 2-го по 10-й и взвешивать.\n3. Сравнивать текущий шар с шаром в коробке.\n4. Если текущий тяжелее — поменять.\n5. Продолжать, пока не проверены все 10.",
        "en": "In class everyone first spent 5 minutes writing the algorithm in words (not code), then it was built together:\n1. Weigh the first ball and put it in the box.\n2. Loop: go over balls 2 to 10 and weigh each one.\n3. Compare the current ball with the ball in the box.\n4. If the current one is heavier — swap.\n5. Continue until all 10 are checked."
      }
    },
    { "why": {"he": "למה שגיאה לוגית מסוכנת יותר? שגיאת תחביר המחשב מראה מיד באדום. שגיאה לוגית שקטה: התוכנית רצה, ונראה שהכול בסדר, עד שמישהו מקבל תשובה לא נכונה. לכן תמיד בודקים על דוגמאות שאת התשובה שלהן יודעים מראש.", "ru": "Почему логическая ошибка опаснее? Синтаксическую компьютер сразу показывает красным. Логическая — тихая: программа работает, и кажется, что всё хорошо, пока кто-то не получит неверный ответ. Поэтому всегда проверяют на примерах, ответ на которые знают заранее.", "en": "Why is a logic error more dangerous? The computer shows a syntax error in red at once. A logic error is silent: the program runs and everything seems fine until someone gets a wrong answer. So always test on examples whose answer you already know."},
      "kind": "talk",
      "title": {
        "he": "שגיאת תחביר מול שגיאה לוגית",
        "ru": "Синтаксическая и логическая ошибка",
        "en": "Syntax error vs logic error"
      },
      "text": {
        "he": "שגיאת תחביר — טעות בכתיבת המילה, למשל `intt` במקום `int`. התוכנית לא רצה, ו־IntelliJ מסמן באדום.\nשגיאה לוגית — הכול כתוב נכון, התוכנית רצה, אבל התשובה שגויה (כמו הכדורים: 3 במקום 9). המחשב לא יגיד לכם — מוצאים אותה רק בבדיקה על דוגמאות.\n\"על מנת שמערכת תבין מה אנחנו רוצים, עלינו לתת לה סדר פעולות לוגיות ולא בהכרח כפי שאנחנו חושבים ביום־יום.\"",
        "ru": "Синтаксическая ошибка — ошибка в написании слова, например `intt` вместо `int`. Программа не запускается, IntelliJ подчеркнёт красным.\nЛогическая ошибка — всё написано правильно, программа работает, но ответ неверный (как с шарами: 3 вместо 9). Компьютер не подскажет — найти её можно только проверкой на примерах.\n«Чтобы система поняла, чего мы хотим, нужно дать ей логический порядок действий, и не обязательно так, как мы думаем в повседневной жизни».",
        "en": "A syntax error is a mistake in writing a word, e.g. `intt` instead of `int`. The program doesn't run, and IntelliJ underlines it in red.\nA logic error: everything is written correctly and the program runs, but the answer is wrong (like the balls: 3 instead of 9). The computer won't tell you — you find it only by testing on examples.\n\"For a system to understand what we want, we must give it a logical order of operations — not necessarily the way we think in everyday life.\""
      }
    },
    { "why": {"he": "למה לבקש מה-AI לא לפתור? כי מה שאתה מגלה לבד אתה זוכר, ומה שקיבלת מוכן נשכח. כללים כמו \"שאלה אחת בכל פעם\" ו\"רמז רק אחרי ניסיון\" הופכים את המודל ממי שעושה במקומך למורה פרטי.", "ru": "Зачем просить ИИ не решать? То, что находишь сам, запоминаешь, а полученное готовым забывается. Правила вроде «один вопрос за раз» и «подсказка только после попытки» превращают модель из того, кто делает вместо тебя, в личного репетитора.", "en": "Why ask the AI not to solve it? What you find yourself, you remember; what you get ready-made, you forget. Rules like \"one question at a time\" and \"a hint only after an attempt\" turn the model from someone doing it for you into a private tutor."},
      "kind": "talk",
      "title": {
        "he": "תרגיל בהנדסת פרומפטים: מנחה — לא פותר",
        "ru": "Упражнение по промпт-инженерии: направляет, а не решает",
        "en": "Prompt engineering exercise: guide, don't solve"
      },
      "text": {
        "he": "גלו את הכשל בלי לבקש את הפתרון. כתבו פרומפט שבו ה־AI מנחה אתכם ולא פותר. מה צריך להיות בפרומפט:\n• שאלה מכוונת אחת בכל פעם\n• מעקב ידני עם 3 משקלים לדוגמה\n• רמז רק אחרי ניסיון שלכם\n• בלי קוד מתוקן ובלי חשיפת השגיאה\n• הצג בעיות קצה והנחה איך לפתור אותן\nהמטרה: להסביר בעצמכם מה האלגוריתם באמת עושה.",
        "ru": "Найдите ошибку, не прося решения. Напишите промпт, где ИИ направляет вас, а не решает. Что должно быть в промпте:\n• один направляющий вопрос за раз\n• ручная проверка на 3 весах для примера\n• подсказка только после вашей попытки\n• без исправленного кода и без раскрытия ошибки\n• показать крайние случаи и подсказать, как их решать\nЦель: самим объяснить, что на самом деле делает алгоритм.",
        "en": "Find the flaw without asking for the solution. Write a prompt in which the AI guides you rather than solving. What the prompt must include:\n• one guiding question at a time\n• a hand trace with 3 sample weights\n• a hint only after your own attempt\n• no fixed code and no revealing the error\n• show edge cases and guide how to solve them\nGoal: explain yourselves what the algorithm really does."
      }
    },
    { "why": {"he": "היתרון: לא צריך לנחש מראש את כל הניסוחים. \"לא נכנס לאתר\", \"שוכח סיסמה\", \"המסך לבן\" — המודל ראה דוגמאות דומות ומבין שזו תקלה. החיסרון: אם בדוגמאות היו טעויות בתוויות, המודל ילמד גם אותן.", "ru": "Плюс: не нужно заранее угадывать все формулировки. «Не захожу на сайт», «забыл пароль», «белый экран» — модель видела похожие примеры и понимает, что это неполадка. Минус: если в примерах были неправильные метки, модель выучит и их.", "en": "The upside: you need not guess every wording in advance. \"Can't get into the site\", \"forgot my password\", \"white screen\" — the model saw similar examples and knows it is a fault. The downside: if the examples had wrong labels, the model learns those too."},
      "kind": "talk",
      "title": {
        "he": "דוגמה: מסווג פניות של סטודנטים",
        "ru": "Пример: классификатор обращений студентов",
        "en": "Example: a student-request classifier"
      },
      "text": {
        "he": "המודל לומד מדוגמאות עם תוויות: \"המערכת לא נפתחת\" ← תקלה, \"מתי מגישים את המטלה?\" ← מועדים, \"איך נרשמים לקורס?\" ← רישום. פנייה חדשה: \"אני לא מצליח להיכנס לאתר\" ← תחזית: תקלה ← התוכנית פותחת קריאת שירות. לא כתבנו כלל לכל משפט — נתנו דוגמאות, והמודל למד לבד.",
        "ru": "Модель учится на примерах с метками: «Система не открывается» → неполадка, «Когда сдавать задание?» → сроки, «Как записаться на курс?» → регистрация. Новое обращение: «Я не могу войти на сайт» → прогноз: неполадка → программа открывает заявку в поддержку. Правило для каждой фразы мы не писали — дали примеры, и модель научилась сама.",
        "en": "The model learns from labelled examples: \"The system won't open\" → fault, \"When is the assignment due?\" → deadlines, \"How do I register for a course?\" → registration. A new request: \"I can't log in to the site\" → prediction: fault → the program opens a support ticket. We didn't write a rule for every sentence — we gave examples and the model learned by itself."
      }
    },
    { "why": {"he": "למה הנתונים צריכים להיות מגוונים? המודל לומד את מה שהכי בולט בתמונות. אם כל התמונות של \"כוס\" צולמו על שולחן לבן, הוא אולי ילמד \"שולחן לבן\" ולא \"כוס\". זו בדיוק ההטיה (bias): המודל טוב כמו הנתונים שלו.", "ru": "Почему данные должны быть разными? Модель учит то, что на фото заметнее всего. Если все фото «чашки» сняты на белом столе, она может выучить «белый стол», а не «чашку». Это и есть предвзятость (bias): модель хороша ровно настолько, насколько хороши её данные.", "en": "Why must the data be varied? The model learns whatever stands out most in the pictures. If every \"cup\" photo was taken on a white table, it may learn \"white table\", not \"cup\". That is bias: a model is only as good as its data."},
      "kind": "talk",
      "title": {
        "he": "Teachable Machine: AI משלכם ב־3 שלבים",
        "ru": "Teachable Machine: свой ИИ за 3 шага",
        "en": "Teachable Machine: your own AI in 3 steps"
      },
      "text": {
        "he": "אתר חינמי של Google שבו מאמנים מודל על תמונות בלי קוד.\n1. Gather — אוספים עשרות או מאות תמונות; כל קבוצה היא מחלקה.\n2. Train — לחיצה אחת, והמערכת לומדת במה המחלקות שונות.\n3. Export — מורידים את המודל ומכניסים לקוד.\nחשוב: הנתונים צריכים להיות מגוונים (תאורה, זוויות), אחרת המודל מוטה (bias).",
        "ru": "Бесплатный сайт Google, где без кода учат модель на своих фото.\n1. Gather — собрать десятки или сотни фото; каждая группа — отдельный класс.\n2. Train — одна кнопка, и система учится, чем классы отличаются.\n3. Export — скачать модель и вставить в код.\nВажно: данные должны быть разными (свет, углы), иначе модель будет предвзятой (bias).",
        "en": "A free Google site where you train a model on your own photos without code.\n1. Gather — collect dozens or hundreds of photos; each group is a class.\n2. Train — one click, and the system learns how the classes differ.\n3. Export — download the model and use it in code.\nImportant: the data must be varied (lighting, angles), or the model will be biased."
      }
    },
    { "why": {"he": "למה עברית \"יקרה\" יותר? הטוקנייזרים נבנו בעיקר על טקסט באנגלית, ולכן מילים באנגלית הן לרוב טוקן אחד, ומילה בעברית נחתכת לכמה חלקים. התוצאה: בעברית החלון מתמלא מהר יותר ותשובה עולה יותר ב-API. לכן לפעמים כדאי לכתוב פרומפט ארוך באנגלית.", "ru": "Почему иврит «дороже»? Токенайзеры строили в основном на английском тексте, поэтому английское слово часто один токен, а слово на иврите режется на несколько кусков. В итоге на иврите окно заполняется быстрее и ответ через API стоит дороже. Поэтому длинный промпт иногда выгоднее писать по-английски.", "en": "Why is Hebrew \"more expensive\"? Tokenizers were built mostly on English text, so an English word is often one token while a Hebrew word is cut into several pieces. As a result, in Hebrew the window fills faster and an API answer costs more. That is why a long prompt is sometimes better written in English."},
      "kind": "talk",
      "title": {
        "he": "טוקנים: מה המודל \"רואה\"",
        "ru": "Токены: что модель «видит»",
        "en": "Tokens: what the model \"sees\""
      },
      "text": {
        "he": "המודל לא קורא מילים כמו אדם. טוקנייזר חותך את הטקסט לחתיכות (טוקנים), כל טוקן הופך למספר, והמודל מחשב איזה טוקן הכי סביר שיבוא אחר כך. התשובה נוצרת טוקן אחרי טוקן — זה ניבוי סטטיסטי, לא \"חשיבה\" אנושית.\nלמה זה חשוב: חלון ההקשר מוגבל (למשל 128,000 טוקנים); יותר טוקנים = תשובה איטית יותר; ב־API משלמים לפי טוקנים; ומילה שנחתכת להרבה חתיכות קשה יותר להבנה. לפי השקפים, עברית יכולה לצרוך פי 3–4 יותר טוקנים מאנגלית.",
        "ru": "Модель читает не слова, как человек. Токенайзер режет текст на кусочки (токены), каждый токен становится номером, и модель считает, какой токен вероятнее всего будет следующим. Ответ создаётся токен за токеном — это статистическое предсказание, а не человеческое «мышление».\nПочему это важно: контекстное окно ограничено (например, 128 000 токенов); больше токенов — дольше ответ; через API платят за токены; а слово, разбитое на много кусочков, модели понять труднее. По слайдам, иврит может тратить в 3–4 раза больше токенов, чем английский.",
        "en": "The model doesn't read words like a person. A tokenizer cuts the text into pieces (tokens), each token becomes a number, and the model computes which token is most likely to come next. The answer is built token by token — statistical prediction, not human \"thinking\".\nWhy it matters: the context window is limited (e.g. 128,000 tokens); more tokens = a slower answer; via the API you pay per token; and a word split into many pieces is harder to understand. According to the slides, Hebrew can use 3–4 times more tokens than English."
      }
    },
    { "why": {"he": "למה צריך סטנדרט כמו MCP? בלעדיו, כל חיבור בין מודל לכלי (יומן, קבצים, מסד נתונים) הוא קוד מיוחד, ועם הרבה מודלים והרבה כלים זה מתפוצץ. עם תקן אחד — כמו USB — כל כלי שמדבר MCP מתחבר לכל מודל שמדבר MCP.", "ru": "Зачем стандарт вроде MCP? Без него каждое соединение модели с инструментом (календарь, файлы, база данных) — отдельный код, а при многих моделях и многих инструментах таких соединений становится огромное число. С одним стандартом, как USB, любой инструмент с MCP подключается к любой модели с MCP.", "en": "Why a standard like MCP? Without it, every link between a model and a tool (calendar, files, database) is custom code, and with many models and many tools the number of links explodes. With one standard, like USB, any tool that speaks MCP plugs into any model that speaks MCP."},
      "kind": "talk",
      "title": {
        "he": "כלים, אקו־סיסטם ו־MCP",
        "ru": "Инструменты, экосистема и MCP",
        "en": "Tools, ecosystems and MCP"
      },
      "text": {
        "he": "יש אלפי כלים עם AI. מנועי שיחה: Claude, ChatGPT, Gemini, Copilot; וגם Perplexity (חיפוש עם מקורות), Grok, ו־NotebookLM (עובדים על החומרים שלכם).\nאקו־סיסטם: רשת של מוצרים ושירותים שמזינים זה את זה, כמו iPhone, שעון, Mac ו־iCloud של Apple.\nMCP (Model Context Protocol) — תקן פתוח של Anthropic: \"צינור\" אחד ובטוח בין מודלי שפה לנתונים, קבצים ותוכנות. \"USB ל־AI\" — לא צריך לכתוב קוד נפרד לכל חיבור.",
        "ru": "Инструментов с ИИ тысячи. Чат-боты: Claude, ChatGPT, Gemini, Copilot; а ещё Perplexity (поиск с источниками), Grok и NotebookLM (работаешь по своим материалам).\nЭкосистема: сеть продуктов и сервисов, которые питают друг друга, как iPhone, часы, Mac и iCloud у Apple.\nMCP (Model Context Protocol) — открытый стандарт от Anthropic: единая безопасная «труба» между языковыми моделями и данными, файлами и программами. «USB для ИИ» — не нужно писать отдельный код для каждой связи.",
        "en": "There are thousands of AI tools. Chatbots: Claude, ChatGPT, Gemini, Copilot; also Perplexity (search with sources), Grok, and NotebookLM (work from your own materials).\nAn ecosystem is a network of products and services that feed each other, like Apple's iPhone, watch, Mac and iCloud.\nMCP (Model Context Protocol) — an open standard from Anthropic: one safe \"pipe\" between language models and data, files and programs. \"USB for AI\" — no need to write separate code for every connection."
      }
    },
    { "why": {"he": "המטרה של המטלה היא לא רק למצוא את הטעות, אלא לתרגל כתיבת פרומפט שמכוון. בשיעור הבא תצטרכו להסביר במילים שלכם מה האלגוריתם עושה בפועל. מי שה-AI פתר לו, לא יוכל.", "ru": "Цель задания — не только найти ошибку, но и потренироваться писать промпт, который направляет. На следующем уроке нужно будет своими словами объяснить, что алгоритм делает на самом деле. Кому решил ИИ, тот не сможет.", "en": "The goal is not only to find the error but to practise writing a prompt that guides. Next lesson you will need to explain in your own words what the algorithm really does. If the AI solved it for you, you will not be able to."},
      "kind": "tip",
      "title": {
        "he": "שיעורי בית",
        "ru": "Домашнее задание",
        "en": "Homework"
      },
      "text": {
        "he": "נכנסים ל־ChatGPT, Gemini או Claude, מדביקים את אלגוריתם הכדורים וכותבים פרומפט לפי כללי השקף (מנחה — לא פותר). בעזרת השאלות והרמזים מוצאים לבד את השגיאה, ומגיעים לשיעור הבא עם תשובה.",
        "ru": "Заходим в ChatGPT, Gemini или Claude, вставляем алгоритм шаров и пишем промпт по правилам слайда (направляет, а не решает). С помощью вопросов и подсказок сами находим ошибку и приходим на следующий урок с ответом.",
        "en": "Open ChatGPT, Gemini or Claude, paste the balls algorithm and write a prompt by the slide's rules (guide, don't solve). Using the questions and hints, find the error yourself and come to the next lesson with the answer."
      }
    }
  ],
  "review": [
    {
      "title": {
        "he": "מה זה AI",
        "ru": "Что такое ИИ",
        "en": "What AI is"
      },
      "text": {
        "he": "מערכות מחשב שמבצעות משימות שדורשות \"אינטליגנציה\": להבין, ללמוד, לפתור, להחליט.",
        "ru": "Компьютерные системы для задач, где нужен «интеллект»: понимать, учиться, решать, выбирать.",
        "en": "Computer systems doing tasks that need \"intelligence\": understanding, learning, solving, deciding."
      }
    },
    {
      "title": {
        "he": "תוכנית רגילה מול AI",
        "ru": "Программа и ИИ",
        "en": "Program vs AI"
      },
      "text": {
        "he": "תוכנית רגילה — כללים קשיחים (`if/else`). AI — לומד מדוגמאות ומשתפר.",
        "ru": "Обычная программа — жёсткие правила (`if/else`). ИИ — учится на примерах и улучшается.",
        "en": "An ordinary program — rigid rules (`if/else`). AI — learns from examples and improves."
      }
    },
    {
      "title": {
        "he": "נוירון",
        "ru": "Нейрон",
        "en": "Neuron"
      },
      "text": {
        "he": "`x1·w1 + x2·w2 + b` ← פונקציית הפעלה. האימון מתקן את המשקלים (backpropagation).",
        "ru": "`x1·w1 + x2·w2 + b` → функция активации. Обучение поправляет веса (backpropagation).",
        "en": "`x1·w1 + x2·w2 + b` → activation function. Training corrects the weights (backpropagation)."
      }
    },
    {
      "title": {
        "he": "טוקנים",
        "ru": "Токены",
        "en": "Tokens"
      },
      "text": {
        "he": "המודל רואה חתיכות טקסט ומנבא את הטוקן הבא. חלון ההקשר, מהירות ומחיר נמדדים בטוקנים.",
        "ru": "Модель видит кусочки текста и предсказывает следующий токен. Контекстное окно, скорость и цена считаются в токенах.",
        "en": "The model sees pieces of text and predicts the next token. Context window, speed and price are measured in tokens."
      }
    },
    {
      "title": {
        "he": "תחביר מול לוגיקה",
        "ru": "Синтаксис и логика",
        "en": "Syntax vs logic"
      },
      "text": {
        "he": "`intt` — שגיאת תחביר, לא רץ. רץ אבל טועה — שגיאה לוגית; מוצאים במעקב ידני.",
        "ru": "`intt` — синтаксическая ошибка, не запускается. Работает, но ошибается — логическая; ищем ручной проверкой.",
        "en": "`intt` — syntax error, won't run. Runs but wrong — logic error; found by tracing by hand."
      }
    },
    {
      "title": {
        "he": "אתגר הכדורים",
        "ru": "Задача с шарами",
        "en": "The balls puzzle"
      },
      "text": {
        "he": "משווים לכדור שעל המדף, לא לשכן N−1. `5, 9, 3, 4, 2, 1, 6, 2, 3, 1`: עם הכשל `3`, אחרי התיקון `9`.",
        "ru": "Сравниваем с шаром на полке, а не с соседом N−1. `5, 9, 3, 4, 2, 1, 6, 2, 3, 1`: с ошибкой `3`, после исправления `9`.",
        "en": "Compare with the ball on the shelf, not neighbour N−1. `5, 9, 3, 4, 2, 1, 6, 2, 3, 1`: flawed `3`, fixed `9`."
      }
    },
    {
      "title": {
        "he": "מנחה — לא פותר",
        "ru": "Направляет, а не решает",
        "en": "Guide, don't solve"
      },
      "text": {
        "he": "שאלה אחת בכל פעם, מעקב ידני עם 3 משקלים, רמז רק אחרי ניסיון, בלי קוד מתוקן.",
        "ru": "Один вопрос за раз, ручная проверка на 3 весах, подсказка только после попытки, без готового кода.",
        "en": "One question at a time, a hand trace with 3 weights, a hint only after an attempt, no fixed code."
      }
    }
  ],
  "tasks": {
    "groups": {
      "balls": {
        "he": "אתגר הכדורים",
        "ru": "Задача с шарами",
        "en": "The balls puzzle"
      },
      "errors": {
        "he": "סוגי שגיאות ותוכנית רגילה",
        "ru": "Виды ошибок и обычная программа",
        "en": "Error types and an ordinary program"
      }
    },
    "teacher": [
      {
        "id": "t1",
        "group": "balls",
        "label": "כא",
        "kind": "number",
        "text": {
          "he": "אלגוריתם הכדורים מהשקף (השוואה לכדור N−1). המשקלים: `5, 9, 3, 4, 2, 1, 6, 2, 3, 1`. מה הוא ידפיס?",
          "ru": "Алгоритм шаров со слайда (сравнение с шаром N−1). Веса: `5, 9, 3, 4, 2, 1, 6, 2, 3, 1`. Что он выведет?",
          "en": "The balls algorithm from the slide (compare with ball N−1). Weights: `5, 9, 3, 4, 2, 1, 6, 2, 3, 1`. What does it print?"
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "עקבו ידנית: כל כדור משווים לשכן שלפניו, לא למדף.",
            "ru": "Пройди вручную: каждый шар сравниваем с соседом перед ним, а не с полкой.",
            "en": "Trace by hand: each ball is compared with the one before it, not with the shelf."
          },
          {
            "he": "המדף מתחלף בכל פעם שכדור כבד מהשכן שלו — גם אם הוא קל מהכדור שעל המדף.",
            "ru": "Полка меняется каждый раз, когда шар тяжелее соседа — даже если он легче шара на полке.",
            "en": "The shelf changes whenever a ball is heavier than its neighbour — even if it is lighter than the ball on the shelf."
          }
        ],
        "solution": [
          {
            "he": "אתחול: כדור 1 (`5`) על המדף.",
            "ru": "Начало: шар №1 (`5`) на полку.",
            "en": "Start: ball 1 (`5`) goes on the shelf."
          },
          {
            "he": "כדור 2: `9 > 5` (כדור 1) ← על המדף `9`",
            "ru": "Шар 2: `9 > 5` (шар 1) → на полку `9`",
            "en": "Ball 2: `9 > 5` (ball 1) → shelf `9`"
          },
          {
            "he": "כדור 3: `3` לא גדול מ־`9` (כדור 2) ← המדף נשאר `9`",
            "ru": "Шар 3: `3` не больше `9` (шар 2) → на полке `9`",
            "en": "Ball 3: `3` is not bigger than `9` (ball 2) → shelf stays `9`"
          },
          {
            "he": "כדור 4: `4 > 3` (כדור 3) ← על המדף `4`",
            "ru": "Шар 4: `4 > 3` (шар 3) → на полку `4`",
            "en": "Ball 4: `4 > 3` (ball 3) → shelf `4`"
          },
          {
            "he": "כדור 5: `2` לא גדול מ־`4` (כדור 4) ← המדף נשאר `4`",
            "ru": "Шар 5: `2` не больше `4` (шар 4) → на полке `4`",
            "en": "Ball 5: `2` is not bigger than `4` (ball 4) → shelf stays `4`"
          },
          {
            "he": "כדור 6: `1` לא גדול מ־`2` (כדור 5) ← המדף נשאר `4`",
            "ru": "Шар 6: `1` не больше `2` (шар 5) → на полке `4`",
            "en": "Ball 6: `1` is not bigger than `2` (ball 5) → shelf stays `4`"
          },
          {
            "he": "כדור 7: `6 > 1` (כדור 6) ← על המדף `6`",
            "ru": "Шар 7: `6 > 1` (шар 6) → на полку `6`",
            "en": "Ball 7: `6 > 1` (ball 6) → shelf `6`"
          },
          {
            "he": "כדור 8: `2` לא גדול מ־`6` (כדור 7) ← המדף נשאר `6`",
            "ru": "Шар 8: `2` не больше `6` (шар 7) → на полке `6`",
            "en": "Ball 8: `2` is not bigger than `6` (ball 7) → shelf stays `6`"
          },
          {
            "he": "כדור 9: `3 > 2` (כדור 8) ← על המדף `3`",
            "ru": "Шар 9: `3 > 2` (шар 8) → на полку `3`",
            "en": "Ball 9: `3 > 2` (ball 8) → shelf `3`"
          },
          {
            "he": "כדור 10: `1` לא גדול מ־`3` (כדור 9) ← המדף נשאר `3`",
            "ru": "Шар 10: `1` не больше `3` (шар 9) → на полке `3`",
            "en": "Ball 10: `1` is not bigger than `3` (ball 9) → shelf stays `3`"
          },
          {
            "he": "פלט: `3`",
            "ru": "Вывод: `3`",
            "en": "Output: `3`"
          },
          {
            "he": "אבל הכבד ביותר הוא `9`. האלגוריתם רץ בלי שגיאה — וטועה.",
            "ru": "Но самый тяжёлый — `9`. Алгоритм работает без ошибок — и ошибается.",
            "en": "But the heaviest is `9`. The algorithm runs without errors — and is wrong."
          }
        ]
      },
      {
        "id": "t2",
        "group": "balls",
        "label": "כב",
        "kind": "choice",
        "text": {
          "he": "איפה הכשל הלוגי באלגוריתם מהשקף?",
          "ru": "Где логическая ошибка в алгоритме со слайда?",
          "en": "Where is the logic flaw in the slide's algorithm?"
        },
        "options": [
          {
            "he": "מתחילים מכדור 1",
            "ru": "Начинаем с шара №1",
            "en": "It starts with ball 1"
          },
          {
            "he": "משווים את כדור N לכדור N−1 במקום לכדור שעל המדף",
            "ru": "Сравниваем шар N с шаром N−1, а не с шаром на полке",
            "en": "Ball N is compared with ball N−1 instead of the ball on the shelf"
          },
          {
            "he": "הלולאה רצה מ־2 עד 10",
            "ru": "Цикл идёт от 2 до 10",
            "en": "The loop runs from 2 to 10"
          }
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "עקבו אחרי `9, 3, 5`. מה יוצא, ומה היה צריך לצאת?",
            "ru": "Пройди `9, 3, 5`. Что получается и что должно было получиться?",
            "en": "Trace `9, 3, 5`. What comes out, and what should have?"
          }
        ],
        "solution": [
          {
            "he": "אתחול: כדור 1 (`9`) על המדף.",
            "ru": "Начало: шар №1 (`9`) на полку.",
            "en": "Start: ball 1 (`9`) goes on the shelf."
          },
          {
            "he": "כדור 2: `3` לא גדול מ־`9` (כדור 1) ← המדף נשאר `9`",
            "ru": "Шар 2: `3` не больше `9` (шар 1) → на полке `9`",
            "en": "Ball 2: `3` is not bigger than `9` (ball 1) → shelf stays `9`"
          },
          {
            "he": "כדור 3: `5 > 3` (כדור 2) ← על המדף `5`",
            "ru": "Шар 3: `5 > 3` (шар 2) → на полку `5`",
            "en": "Ball 3: `5 > 3` (ball 2) → shelf `5`"
          },
          {
            "he": "פלט: `5`",
            "ru": "Вывод: `5`",
            "en": "Output: `5`"
          },
          {
            "he": "`5` \"ניצח\" את השכן `3`, אבל לא את `9` שעל המדף.",
            "ru": "`5` «победил» соседа `3`, но не `9` на полке.",
            "en": "`5` \"beat\" its neighbour `3`, but not the `9` on the shelf."
          },
          {
            "he": "התיקון: משווים את כדור N לכדור שעל המדף.",
            "ru": "Исправление: сравниваем шар N с шаром на полке.",
            "en": "The fix: compare ball N with the ball on the shelf."
          }
        ]
      },
      {
        "id": "t3",
        "group": "balls",
        "label": "כג",
        "kind": "number",
        "text": {
          "he": "אחרי התיקון (משווים לכדור שעל המדף), מה יודפס עבור `5, 9, 3, 4, 2, 1, 6, 2, 3, 1`?",
          "ru": "После исправления (сравниваем с шаром на полке) что выведется для `5, 9, 3, 4, 2, 1, 6, 2, 3, 1`?",
          "en": "After the fix (compare with the ball on the shelf), what is printed for `5, 9, 3, 4, 2, 1, 6, 2, 3, 1`?"
        },
        "answer": {
          "value": "9"
        },
        "hints": [
          {
            "he": "על המדף תמיד נמצא הכבד ביותר מבין אלה שכבר ראינו.",
            "ru": "На полке всегда самый тяжёлый из тех, что уже видели.",
            "en": "The shelf always holds the heaviest ball seen so far."
          }
        ],
        "solution": [
          {
            "he": "אתחול: כדור 1 (`5`) על המדף.",
            "ru": "Начало: шар №1 (`5`) на полку.",
            "en": "Start: ball 1 (`5`) goes on the shelf."
          },
          {
            "he": "כדור 2: `9 > 5` (המדף) ← על המדף `9`",
            "ru": "Шар 2: `9 > 5` (полка) → на полку `9`",
            "en": "Ball 2: `9 > 5` (shelf) → shelf `9`"
          },
          {
            "he": "כדור 3: `3` לא גדול מ־`9` (המדף)",
            "ru": "Шар 3: `3` не больше `9` (полка)",
            "en": "Ball 3: `3` is not bigger than `9` (shelf)"
          },
          {
            "he": "כדור 4: `4` לא גדול מ־`9` (המדף)",
            "ru": "Шар 4: `4` не больше `9` (полка)",
            "en": "Ball 4: `4` is not bigger than `9` (shelf)"
          },
          {
            "he": "כדור 5: `2` לא גדול מ־`9` (המדף)",
            "ru": "Шар 5: `2` не больше `9` (полка)",
            "en": "Ball 5: `2` is not bigger than `9` (shelf)"
          },
          {
            "he": "כדור 6: `1` לא גדול מ־`9` (המדף)",
            "ru": "Шар 6: `1` не больше `9` (полка)",
            "en": "Ball 6: `1` is not bigger than `9` (shelf)"
          },
          {
            "he": "כדור 7: `6` לא גדול מ־`9` (המדף)",
            "ru": "Шар 7: `6` не больше `9` (полка)",
            "en": "Ball 7: `6` is not bigger than `9` (shelf)"
          },
          {
            "he": "כדור 8: `2` לא גדול מ־`9` (המדף)",
            "ru": "Шар 8: `2` не больше `9` (полка)",
            "en": "Ball 8: `2` is not bigger than `9` (shelf)"
          },
          {
            "he": "כדור 9: `3` לא גדול מ־`9` (המדף)",
            "ru": "Шар 9: `3` не больше `9` (полка)",
            "en": "Ball 9: `3` is not bigger than `9` (shelf)"
          },
          {
            "he": "כדור 10: `1` לא גדול מ־`9` (המדף)",
            "ru": "Шар 10: `1` не больше `9` (полка)",
            "en": "Ball 10: `1` is not bigger than `9` (shelf)"
          },
          {
            "he": "פלט: `9`",
            "ru": "Вывод: `9`",
            "en": "Output: `9`"
          }
        ]
      },
      {
        "id": "t4",
        "group": "errors",
        "label": "שא",
        "kind": "choice",
        "text": {
          "he": "האלגוריתם מהשקף \"מסתיים ללא שגיאת תחביר\", אבל לא מוצא את הכדור הכבד. איזו שגיאה זו?",
          "ru": "Алгоритм со слайда «заканчивается без синтаксической ошибки», но не находит самый тяжёлый шар. Что это за ошибка?",
          "en": "The slide's algorithm \"finishes without a syntax error\" but doesn't find the heaviest ball. What kind of error is this?"
        },
        "options": [
          {
            "he": "שגיאת תחביר",
            "ru": "Синтаксическая ошибка",
            "en": "Syntax error"
          },
          {
            "he": "שגיאה לוגית",
            "ru": "Логическая ошибка",
            "en": "Logic error"
          }
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "שגיאת תחביר = טעות בכתיבה, התוכנית לא רצה. כאן התוכנית רצה.",
            "ru": "Синтаксическая = ошибка в написании, программа не запускается. Здесь программа работает.",
            "en": "Syntax error = a typo, the program doesn't run. Here the program runs."
          }
        ],
        "solution": [
          {
            "he": "התוכנית רצה עד הסוף ומדפיסה תשובה.",
            "ru": "Программа работает до конца и печатает ответ.",
            "en": "The program runs to the end and prints an answer."
          },
          {
            "he": "אבל התשובה לא נכונה — סדר הפעולות הלוגי שגוי.",
            "ru": "Но ответ неверный — неверен логический порядок действий.",
            "en": "But the answer is wrong — the logical order of steps is wrong."
          },
          {
            "he": "תשובה: שגיאה לוגית",
            "ru": "Ответ: логическая ошибка",
            "en": "Answer: a logic error"
          }
        ]
      },
      {
        "id": "t5",
        "group": "errors",
        "label": "שב",
        "kind": "choice",
        "text": {
          "he": "כתבו `intt` במקום `int`. איזו שגיאה זו?",
          "ru": "Написали `intt` вместо `int`. Что это за ошибка?",
          "en": "Someone wrote `intt` instead of `int`. What kind of error is this?"
        },
        "options": [
          {
            "he": "שגיאת תחביר",
            "ru": "Синтаксическая ошибка",
            "en": "Syntax error"
          },
          {
            "he": "שגיאה לוגית",
            "ru": "Логическая ошибка",
            "en": "Logic error"
          }
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "זו טעות בכתיבת המילה עצמה.",
            "ru": "Это ошибка в написании самого слова.",
            "en": "It is a mistake in spelling the word itself."
          }
        ],
        "solution": [
          {
            "he": "שגיאת תחביר = טעות בכתיבת המילה, כמו `intt` במקום `int`.",
            "ru": "Синтаксическая ошибка = ошибка в написании слова, как `intt` вместо `int`.",
            "en": "Syntax error = a mistake in writing a word, like `intt` instead of `int`."
          },
          {
            "he": "המחשב לא מכיר את המילה, והתוכנית לא רצה.",
            "ru": "Компьютер не знает такого слова, и программа не запускается.",
            "en": "The computer doesn't know the word, so the program doesn't run."
          },
          {
            "he": "תשובה: שגיאת תחביר",
            "ru": "Ответ: синтаксическая ошибка",
            "en": "Answer: a syntax error"
          }
        ]
      },
      {
        "id": "t6",
        "group": "errors",
        "label": "שג",
        "kind": "choice",
        "text": {
          "he": "`if (temp > 80) printf(\"stop\"); else printf(\"ok\");` הטמפרטורה היא `80.01`. מה תדפיס התוכנית הרגילה?",
          "ru": "`if (temp > 80) printf(\"stop\"); else printf(\"ok\");` Температура `80.01`. Что напечатает обычная программа?",
          "en": "`if (temp > 80) printf(\"stop\"); else printf(\"ok\");` The temperature is `80.01`. What does the ordinary program print?"
        },
        "options": [
          "stop",
          "ok"
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "בודקים את התנאי: האם `80.01 > 80`?",
            "ru": "Проверь условие: `80.01 > 80`?",
            "en": "Check the condition: is `80.01 > 80`?"
          }
        ],
        "solution": [
          "80.01 > 80",
          {
            "he": "התנאי נכון, ולכן מודפס `stop`.",
            "ru": "Условие верно, поэтому печатается `stop`.",
            "en": "The condition is true, so `stop` is printed."
          },
          {
            "he": "הכלל קשיח: תוכנית רגילה לא \"חושבת\" ולא מתאימה את עצמה.",
            "ru": "Правило жёсткое: обычная программа не «думает» и не подстраивается.",
            "en": "The rule is rigid: an ordinary program doesn't \"think\" or adapt."
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
          "he": "מה פירוש המילה Artificial ב־Artificial Intelligence?",
          "ru": "Что значит слово Artificial в Artificial Intelligence?",
          "en": "What does the word Artificial mean in Artificial Intelligence?"
        },
        "options": [
          {
            "he": "מהיר מאוד",
            "ru": "Очень быстрый",
            "en": "Very fast"
          },
          {
            "he": "נוצר על ידי האדם (מלאכותי)",
            "ru": "Созданный человеком (искусственный)",
            "en": "Made by humans (man-made)"
          },
          {
            "he": "חי, טבעי",
            "ru": "Живой, природный",
            "en": "Living, natural"
          }
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "בעברית: בינה מלאכותית.",
            "ru": "На иврите: בינה מלאכותית — «искусственный интеллект».",
            "en": "In Hebrew: בינה מלאכותית — \"artificial intelligence\"."
          }
        ],
        "solution": [
          {
            "he": "Artificial = מלאכותי, נוצר על ידי האדם.",
            "ru": "Artificial = искусственный, созданный человеком.",
            "en": "Artificial = man-made, created by humans."
          },
          {
            "he": "Intelligence = היכולת להבין, ללמוד, לפתור בעיות ולקבל החלטות.",
            "ru": "Intelligence = способность понимать, учиться, решать задачи и принимать решения.",
            "en": "Intelligence = the ability to understand, learn, solve problems and make decisions."
          }
        ]
      },
      {
        "id": "ai1-2",
        "level": 1,
        "label": "1.2",
        "kind": "choice",
        "text": {
          "he": "Spotify בונה לבד פלייליסט שבועי לפי השירים ששמעתם. זו בינה מלאכותית או תוכנית רגילה?",
          "ru": "Spotify сам составляет плейлист недели по песням, которые ты слушал. Это ИИ или обычная программа?",
          "en": "Spotify builds a weekly playlist from the songs you listened to. Is that AI or an ordinary program?"
        },
        "options": [
          {
            "he": "בינה מלאכותית",
            "ru": "ИИ",
            "en": "AI"
          },
          {
            "he": "תוכנית רגילה",
            "ru": "Обычная программа",
            "en": "An ordinary program"
          }
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "האם מישהו כתב כלל \"אם שיר X, הוסף את Y\"?",
            "ru": "Кто-то писал правило «если песня X, добавь Y»?",
            "en": "Did anyone write a rule \"if song X, add Y\"?"
          }
        ],
        "solution": [
          {
            "he": "אף אחד לא כתב כלל לכל שיר.",
            "ru": "Правило для каждой песни никто не писал.",
            "en": "Nobody wrote a rule for every song."
          },
          {
            "he": "המערכת לומדת מהפעולות שלכם ומוצאת דפוסים.",
            "ru": "Система учится на твоих действиях и находит закономерности.",
            "en": "The system learns from what you do and finds patterns."
          },
          {
            "he": "תשובה: בינה מלאכותית. מחשבון עם `5 + 5 = 10` הוא תוכנית רגילה.",
            "ru": "Ответ: ИИ. Калькулятор с `5 + 5 = 10` — обычная программа.",
            "en": "Answer: AI. A calculator doing `5 + 5 = 10` is an ordinary program."
          }
        ]
      },
      {
        "id": "ai1-3",
        "level": 1,
        "label": "1.3",
        "kind": "choice",
        "text": {
          "he": "Teachable Machine: באיזה סדר באים השלבים?",
          "ru": "Teachable Machine: в каком порядке идут шаги?",
          "en": "Teachable Machine: in what order do the steps go?"
        },
        "options": [
          "Train → Gather → Export",
          "Gather → Train → Export",
          "Export → Train → Gather"
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "בלי נתונים אין על מה לאמן.",
            "ru": "Без данных учить не на чем.",
            "en": "Without data there is nothing to train on."
          }
        ],
        "solution": [
          {
            "he": "Gather — אוספים תמונות לכל מחלקה.",
            "ru": "Gather — собираем фото для каждого класса.",
            "en": "Gather — collect photos for each class."
          },
          {
            "he": "Train — מאמנים את המודל.",
            "ru": "Train — обучаем модель.",
            "en": "Train — train the model."
          },
          {
            "he": "Export — מורידים את המודל ומכניסים לקוד.",
            "ru": "Export — скачиваем модель и вставляем в код.",
            "en": "Export — download the model and use it in code."
          }
        ]
      },
      {
        "id": "ai1-4",
        "level": 1,
        "label": "1.4",
        "kind": "number",
        "text": {
          "he": "נוירון: `x1 = 1`, `w1 = 0.8`, `x2 = 0`, `w2 = 0.2`, `b = 0.1`. כמה זה `x1·w1 + x2·w2 + b`?",
          "ru": "Нейрон: `x1 = 1`, `w1 = 0.8`, `x2 = 0`, `w2 = 0.2`, `b = 0.1`. Чему равно `x1·w1 + x2·w2 + b`?",
          "en": "Neuron: `x1 = 1`, `w1 = 0.8`, `x2 = 0`, `w2 = 0.2`, `b = 0.1`. What is `x1·w1 + x2·w2 + b`?"
        },
        "answer": {
          "value": "0.9"
        },
        "hints": [
          {
            "he": "קודם כל כפל, אחר כך מחברים את b.",
            "ru": "Сначала умножения, потом прибавь b.",
            "en": "Do the multiplications first, then add b."
          }
        ],
        "solution": [
          "x1 × w1 = 1 × 0.8 = 0.8",
          "x2 × w2 = 0 × 0.2 = 0",
          "0.8 + 0 + 0.1 = 0.9"
        ]
      },
      {
        "id": "ai2-1",
        "level": 2,
        "label": "2.1",
        "kind": "choice",
        "text": {
          "he": "בתרגיל הקודם הסכום `0.9`. אם הסף הוא `0.5`, האם הנוירון \"נדלק\"?",
          "ru": "В предыдущей задаче сумма `0.9`. Если порог `0.5`, нейрон «зажжётся»?",
          "en": "In the previous task the sum is `0.9`. If the threshold is `0.5`, does the neuron \"fire\"?"
        },
        "options": [
          {
            "he": "כן, כי `0.9 > 0.5`",
            "ru": "Да, потому что `0.9 > 0.5`",
            "en": "Yes, because `0.9 > 0.5`"
          },
          {
            "he": "לא, כי `0.9 < 0.5`",
            "ru": "Нет, потому что `0.9 < 0.5`",
            "en": "No, because `0.9 < 0.5`"
          }
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "פונקציית ההפעלה משווה את הסכום לסף.",
            "ru": "Функция активации сравнивает сумму с порогом.",
            "en": "The activation function compares the sum with the threshold."
          }
        ],
        "solution": [
          "0.9 > 0.5",
          {
            "he": "הסכום גדול מהסף, ולכן הנוירון מעביר אות הלאה.",
            "ru": "Сумма больше порога, поэтому нейрон передаёт сигнал дальше.",
            "en": "The sum is above the threshold, so the neuron passes the signal on."
          }
        ]
      },
      {
        "id": "ai2-2",
        "level": 2,
        "label": "2.2",
        "kind": "number",
        "text": {
          "he": "נוירון: `x1 = 2`, `w1 = 0.5`, `x2 = 1`, `w2 = −0.4`, `b = 0.2`. כמה זה הסכום?",
          "ru": "Нейрон: `x1 = 2`, `w1 = 0.5`, `x2 = 1`, `w2 = −0.4`, `b = 0.2`. Чему равна сумма?",
          "en": "Neuron: `x1 = 2`, `w1 = 0.5`, `x2 = 1`, `w2 = −0.4`, `b = 0.2`. What is the sum?"
        },
        "answer": {
          "value": "0.8"
        },
        "hints": [
          {
            "he": "משקל שלילי מקטין את הסכום.",
            "ru": "Отрицательный вес уменьшает сумму.",
            "en": "A negative weight lowers the sum."
          },
          {
            "he": "`2 × 0.5 = 1`, `1 × (−0.4) = −0.4`.",
            "ru": "`2 × 0.5 = 1`, `1 × (−0.4) = −0.4`.",
            "en": "`2 × 0.5 = 1`, `1 × (−0.4) = −0.4`."
          }
        ],
        "solution": [
          "x1 × w1 = 2 × 0.5 = 1",
          "x2 × w2 = 1 × (−0.4) = −0.4",
          "1 − 0.4 = 0.6",
          "0.6 + 0.2 = 0.8"
        ]
      },
      {
        "id": "ai2-3",
        "level": 2,
        "label": "2.3",
        "kind": "number",
        "text": {
          "he": "האלגוריתם מהשקף (השוואה לשכן). המשקלים: `4, 2, 3`. מה הוא ידפיס?",
          "ru": "Алгоритм со слайда (сравнение с соседом). Веса: `4, 2, 3`. Что он выведет?",
          "en": "The slide's algorithm (compare with the neighbour). Weights: `4, 2, 3`. What does it print?"
        },
        "answer": {
          "value": "3"
        },
        "hints": [
          {
            "he": "`3` משווים ל־`2`, לא ל־`4`.",
            "ru": "`3` сравниваем с `2`, а не с `4`.",
            "en": "`3` is compared with `2`, not with `4`."
          }
        ],
        "solution": [
          {
            "he": "אתחול: כדור 1 (`4`) על המדף.",
            "ru": "Начало: шар №1 (`4`) на полку.",
            "en": "Start: ball 1 (`4`) goes on the shelf."
          },
          {
            "he": "כדור 2: `2` לא גדול מ־`4` (כדור 1) ← המדף נשאר `4`",
            "ru": "Шар 2: `2` не больше `4` (шар 1) → на полке `4`",
            "en": "Ball 2: `2` is not bigger than `4` (ball 1) → shelf stays `4`"
          },
          {
            "he": "כדור 3: `3 > 2` (כדור 2) ← על המדף `3`",
            "ru": "Шар 3: `3 > 2` (шар 2) → на полку `3`",
            "en": "Ball 3: `3 > 2` (ball 2) → shelf `3`"
          },
          {
            "he": "פלט: `3`",
            "ru": "Вывод: `3`",
            "en": "Output: `3`"
          },
          {
            "he": "הכבד ביותר הוא `4` — האלגוריתם טעה.",
            "ru": "Самый тяжёлый — `4`: алгоритм ошибся.",
            "en": "The heaviest is `4` — the algorithm got it wrong."
          }
        ]
      },
      {
        "id": "ai2-4",
        "level": 2,
        "label": "2.4",
        "kind": "choice",
        "text": {
          "he": "מסווג הפניות מהשקף. פנייה חדשה: \"לא מצליח להעלות קובץ למערכת\". איזו תווית ייתן המודל?",
          "ru": "Классификатор обращений со слайда. Новое обращение: «Не получается загрузить файл в систему». Какую метку даст модель?",
          "en": "The request classifier from the slide. New request: \"I can't upload a file to the system\". Which label will the model give?"
        },
        "options": [
          {
            "he": "תקלה",
            "ru": "Неполадка (תקלה)",
            "en": "Fault (תקלה)"
          },
          {
            "he": "מועדים",
            "ru": "Сроки (מועדים)",
            "en": "Deadlines (מועדים)"
          },
          {
            "he": "רישום",
            "ru": "Регистрация (רישום)",
            "en": "Registration (רישום)"
          }
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "בדוגמאות: \"המערכת לא נפתחת\" ← תקלה.",
            "ru": "В примерах: «Система не открывается» → неполадка.",
            "en": "In the examples: \"The system doesn't open\" → fault."
          }
        ],
        "solution": [
          {
            "he": "\"לא מצליח להעלות\" — משהו לא עובד, כמו \"המערכת לא נפתחת\".",
            "ru": "«Не получается загрузить» — что-то не работает, как «система не открывается».",
            "en": "\"Can't upload\" — something doesn't work, like \"the system doesn't open\"."
          },
          {
            "he": "תשובה: תקלה. התוכנית תפתח קריאת שירות.",
            "ru": "Ответ: неполадка. Программа откроет заявку в поддержку.",
            "en": "Answer: fault. The program opens a support ticket."
          }
        ]
      },
      {
        "id": "ai3-1",
        "level": 3,
        "label": "3.1",
        "kind": "number",
        "text": {
          "he": "האלגוריתם מהשקף, 6 כדורים: `3, 8, 1, 7, 2, 4`. מה הוא ידפיס?",
          "ru": "Алгоритм со слайда, 6 шаров: `3, 8, 1, 7, 2, 4`. Что он выведет?",
          "en": "The slide's algorithm, 6 balls: `3, 8, 1, 7, 2, 4`. What does it print?"
        },
        "answer": {
          "value": "4"
        },
        "hints": [
          {
            "he": "המדף מתחלף כל פעם שכדור כבד מהשכן שלו.",
            "ru": "Полка меняется всякий раз, когда шар тяжелее соседа.",
            "en": "The shelf changes every time a ball is heavier than its neighbour."
          },
          {
            "he": "הכדור האחרון `4` משווים ל־`2`.",
            "ru": "Последний шар `4` сравниваем с `2`.",
            "en": "The last ball `4` is compared with `2`."
          }
        ],
        "solution": [
          {
            "he": "אתחול: כדור 1 (`3`) על המדף.",
            "ru": "Начало: шар №1 (`3`) на полку.",
            "en": "Start: ball 1 (`3`) goes on the shelf."
          },
          {
            "he": "כדור 2: `8 > 3` (כדור 1) ← על המדף `8`",
            "ru": "Шар 2: `8 > 3` (шар 1) → на полку `8`",
            "en": "Ball 2: `8 > 3` (ball 1) → shelf `8`"
          },
          {
            "he": "כדור 3: `1` לא גדול מ־`8` (כדור 2) ← המדף נשאר `8`",
            "ru": "Шар 3: `1` не больше `8` (шар 2) → на полке `8`",
            "en": "Ball 3: `1` is not bigger than `8` (ball 2) → shelf stays `8`"
          },
          {
            "he": "כדור 4: `7 > 1` (כדור 3) ← על המדף `7`",
            "ru": "Шар 4: `7 > 1` (шар 3) → на полку `7`",
            "en": "Ball 4: `7 > 1` (ball 3) → shelf `7`"
          },
          {
            "he": "כדור 5: `2` לא גדול מ־`7` (כדור 4) ← המדף נשאר `7`",
            "ru": "Шар 5: `2` не больше `7` (шар 4) → на полке `7`",
            "en": "Ball 5: `2` is not bigger than `7` (ball 4) → shelf stays `7`"
          },
          {
            "he": "כדור 6: `4 > 2` (כדור 5) ← על המדף `4`",
            "ru": "Шар 6: `4 > 2` (шар 5) → на полку `4`",
            "en": "Ball 6: `4 > 2` (ball 5) → shelf `4`"
          },
          {
            "he": "פלט: `4`",
            "ru": "Вывод: `4`",
            "en": "Output: `4`"
          },
          {
            "he": "הכבד ביותר הוא `8`.",
            "ru": "Самый тяжёлый — `8`.",
            "en": "The heaviest is `8`."
          }
        ]
      },
      {
        "id": "ai3-2",
        "level": 3,
        "label": "3.2",
        "kind": "choice",
        "text": {
          "he": "למה שיחה ארוכה בעברית המודל עלול \"לשכוח\" מהר יותר מאשר באנגלית?",
          "ru": "Почему длинный разговор на иврите модель может «забыть» быстрее, чем на английском?",
          "en": "Why might a model \"forget\" a long conversation in Hebrew sooner than in English?"
        },
        "options": [
          {
            "he": "המודל לא אוהב עברית",
            "ru": "Модель не любит иврит",
            "en": "The model doesn't like Hebrew"
          },
          {
            "he": "עברית נחתכת ליותר טוקנים, וחלון ההקשר מתמלא מהר יותר",
            "ru": "Иврит режется на больше токенов, и контекстное окно заполняется быстрее",
            "en": "Hebrew is cut into more tokens, so the context window fills up sooner"
          },
          {
            "he": "בעברית אין טוקנים",
            "ru": "На иврите нет токенов",
            "en": "Hebrew has no tokens"
          }
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "הזיכרון של המודל נמדד בטוקנים, לא במילים.",
            "ru": "Память модели измеряется в токенах, а не в словах.",
            "en": "The model's memory is measured in tokens, not words."
          }
        ],
        "solution": [
          {
            "he": "חלון ההקשר מוגבל, למשל 128,000 טוקנים.",
            "ru": "Контекстное окно ограничено, например 128 000 токенов.",
            "en": "The context window is limited, e.g. 128,000 tokens."
          },
          {
            "he": "אותן מילים בעברית נותנות יותר טוקנים, אז מגיעים לגבול מוקדם יותר.",
            "ru": "Те же слова на иврите дают больше токенов, поэтому лимит наступает раньше.",
            "en": "The same words in Hebrew take more tokens, so the limit is reached earlier."
          },
          {
            "he": "ואז תחילת השיחה כבר לא נכנסת לעיבוד.",
            "ru": "Тогда начало разговора уже не входит в обработку.",
            "en": "Then the start of the conversation no longer fits."
          }
        ]
      },
      {
        "id": "ai3-3",
        "level": 3,
        "label": "3.3",
        "kind": "choice",
        "text": {
          "he": "מה זה MCP?",
          "ru": "Что такое MCP?",
          "en": "What is MCP?"
        },
        "options": [
          {
            "he": "מודל חדש של Google",
            "ru": "Новая модель от Google",
            "en": "A new model from Google"
          },
          {
            "he": "סוג של נוירון במוח",
            "ru": "Вид нейрона в мозге",
            "en": "A kind of neuron in the brain"
          },
          {
            "he": "תקן פתוח לחיבור מודל לקבצים ולתוכנות (\"USB ל־AI\")",
            "ru": "Открытый стандарт, чтобы подключать модель к файлам и программам («USB для ИИ»)",
            "en": "An open standard for connecting a model to files and programs (\"USB for AI\")"
          }
        ],
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "Model Context Protocol — פרוטוקול.",
            "ru": "Model Context Protocol — это протокол.",
            "en": "Model Context Protocol — it is a protocol."
          }
        ],
        "solution": [
          {
            "he": "MCP = Model Context Protocol, תקן פתוח של Anthropic.",
            "ru": "MCP = Model Context Protocol, открытый стандарт от Anthropic.",
            "en": "MCP = Model Context Protocol, an open standard from Anthropic."
          },
          {
            "he": "דרך אחת ובטוחה לחבר מודל לנתונים ולכלים — בלי לכתוב קוד נפרד לכל חיבור.",
            "ru": "Единый безопасный способ связать модель с данными и инструментами — без отдельного кода для каждой связи.",
            "en": "One safe way to connect a model to data and tools — without separate code for each connection."
          }
        ]
      }
    ]
  }
};

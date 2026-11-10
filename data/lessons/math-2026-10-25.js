/* Lesson data file. Format: see the comment at the top of data/lessons/math-2026-11-01.js.
   Every answer and every equation line in the solutions, hints and board examples was checked
   with exact fraction arithmetic (the solution substituted back into each line) — 302 lines.
   Multiplication sign is "×". */
window.LESSONS = window.LESSONS || {};
window.LESSONS["math-2026-10-25"] = {
  "id": "math-2026-10-25",
  "subject": "math",
  "date": "2026-10-25",
  "title": {
    "he": "מערכות משוואות: שיטת החיבור ושיטת גאוס",
    "ru": "Системы уравнений: метод сложения и метод Гаусса",
    "en": "Systems of equations: addition method and Gaussian elimination"
  },
  "summary": {
    "he": "מערכות של שתי משוואות עם כפל של שתי המשוואות, מערכת של שלוש משוואות עם שלושה נעלמים, ודרך קצרה — מטריצה מורחבת ושיטת גאוס.",
    "ru": "Системы из двух уравнений с умножением обоих уравнений, система из трёх уравнений с тремя неизвестными и короткий путь — расширенная матрица и метод Гаусса.",
    "en": "Two-equation systems where both equations are multiplied, a system of three equations in three unknowns, and the short way — an augmented matrix and Gaussian elimination."
  },
  "timeline": [
    {
      "why": {
        "he": "בשיטת החיבור צריך שאחד הנעלמים ייעלם. זה קורה רק כשהמקדמים שלו שווים בגודל ומנוגדים בסימן. כשהם לא כאלה — יוצרים אותם בעצמנו בעזרת כפל, כי כפל של כל המשוואה במספר לא משנה את הפתרון.",
        "ru": "В методе сложения одно неизвестное должно исчезнуть. Это бывает, только когда его коэффициенты равны по модулю и противоположны по знаку. Если это не так — делаем их такими сами, умножением, потому что умножение всего уравнения на число не меняет решения.",
        "en": "In the elimination method one unknown must disappear. That happens only when its coefficients are equal in size and opposite in sign. If they are not, we make them so by multiplying, because multiplying a whole equation by a number does not change its solution."
      },
      "kind": "talk",
      "title": {
        "he": "ממשיכים: מערכות של שתי משוואות",
        "ru": "Продолжаем: системы из двух уравнений",
        "en": "Continuing: systems of two equations"
      },
      "text": {
        "he": "תרגיל 26: שש מערכות שפותרים בשיטת החיבור. כאן כמעט אף נעלם לא מצטמצם מיד, לכן כופלים את המשוואות במספרים כך שהמקדמים של אחד הנעלמים יהיו שווים בגודלם.",
        "ru": "Задание 26: шесть систем, которые решаем методом сложения. Здесь почти ничего не сокращается сразу, поэтому умножаем уравнения на числа, чтобы коэффициенты при одном неизвестном стали равны по модулю.",
        "en": "Exercise 26: six systems solved by the addition method. Here almost nothing cancels right away, so multiply the equations by numbers until the coefficients of one unknown are equal in size."
      }
    },
    {
      "why": {
        "he": "למה 3 ו-2? המקדמים של y הם 2 ו-3, והמספר הקטן ביותר שמתחלק בשניהם הוא 6. לכן הראשונה × 3 (נותן `6y`) והשנייה × 2 (נותן `−6y`). אפשר גם לבטל את x, אבל המספרים יהיו גדולים יותר (35).\nבדיקה — `5 × 5 + 2 × 1 = 27` וגם `7 × 5 − 3 × 1 = 32`.",
        "ru": "Почему 3 и 2? Коэффициенты при y — 2 и 3, а самое маленькое число, которое делится на оба, — 6. Поэтому первое × 3 (получается `6y`), второе × 2 (получается `−6y`). Можно убрать и x, но числа будут больше (35).\nПроверка — `5 × 5 + 2 × 1 = 27` и `7 × 5 − 3 × 1 = 32`.",
        "en": "Why 3 and 2? The y coefficients are 2 and 3, and the smallest number both divide is 6. So the first × 3 (gives `6y`) and the second × 2 (gives `−6y`). You could remove x instead, but the numbers would be bigger (35).\nCheck — `5 × 5 + 2 × 1 = 27` and `7 × 5 − 3 × 1 = 32`."
      },
      "kind": "board",
      "title": {
        "he": "תרגיל 26א על הלוח",
        "ru": "Задание 26א на доске",
        "en": "Exercise 26א on the board"
      },
      "text": {
        "he": "המערכת `5x + 2y = 27`, `7x − 3y = 32` נכתבה על הלוח. כדי לצמצם את y: המקדמים 2 ו־3, לכן כופלים את הראשונה ב־3 ואת השנייה ב־2 — ומקבלים `+6y` ו־`−6y`.",
        "ru": "Система `5x + 2y = 27`, `7x − 3y = 32` написана на доске. Чтобы убрать y: коэффициенты 2 и 3, поэтому первое умножаем на 3, второе на 2 — получаем `+6y` и `−6y`.",
        "en": "The system `5x + 2y = 27`, `7x − 3y = 32` was written on the board. To eliminate y: the coefficients are 2 and 3, so multiply the first by 3 and the second by 2 — giving `+6y` and `−6y`."
      },
      "math": [
        "15x + 6y = 81",
        "14x − 6y = 64",
        "29x = 145",
        "x = 5",
        "y = 1"
      ]
    },
    {
      "why": {
        "he": "שלושה נעלמים צריכים שלוש משוואות, כמו ששניים צריכים שתיים. מבטלים את אותו נעלם (x) משני זוגות, כדי ששתי המשוואות החדשות יהיו עם אותם שני נעלמים (y ו-z) — ואז זו כבר מערכת מוכרת משיעור 18.10.",
        "ru": "Трём неизвестным нужны три уравнения, как двум — два. Убираем одно и то же неизвестное (x) из двух пар, чтобы два новых уравнения были с одними и теми же двумя неизвестными (y и z), — и это уже знакомая система с урока 18.10.",
        "en": "Three unknowns need three equations, just as two need two. Remove the same unknown (x) from two pairs, so the two new equations have the same two unknowns (y and z) — and that is the familiar system from the 18.10 lesson."
      },
      "kind": "talk",
      "title": {
        "he": "שלוש משוואות, שלושה נעלמים",
        "ru": "Три уравнения, три неизвестных",
        "en": "Three equations, three unknowns"
      },
      "text": {
        "he": "תרגיל 1: מערכת עם x, y, z. ממספרים את המשוואות I, II, III. הרעיון: מצמצמים את אותו נעלם (כאן x) משני זוגות — I עם II ו־I עם III. מקבלים שתי משוואות עם y ו־z, ופותרים אותן כמו קודם.",
        "ru": "Задание 1: система с x, y, z. Нумеруем уравнения I, II, III. Идея: убираем одно и то же неизвестное (здесь x) из двух пар — I с II и I с III. Получаем два уравнения с y и z и решаем их, как раньше.",
        "en": "Exercise 1: a system with x, y, z. Number the equations I, II, III. The idea: eliminate the same unknown (here x) from two pairs — I with II and I with III. You get two equations in y and z and solve them as before."
      },
      "math": [
        "I:   2x + 3y + 4z = 20",
        "II:  3x − 2y + 5z = 13",
        "III: 4x + 5y − 2z = 18"
      ]
    },
    {
      "why": {
        "he": "בדיקה של הצעד הראשון `I × 3 − II × 2`.",
        "ru": "Проверка первого шага — `I × 3 − II × 2`.",
        "en": "Checking the first step — `I × 3 − II × 2`."
      },
      "whyMath": [
        "6x − 6x = 0",
        "9y − (−4y) = 13y",
        "12z − 10z = 2z",
        "60 − 26 = 34",
        "13y + 2z = 34"
      ],
      "kind": "board",
      "title": {
        "he": "הדרך הארוכה",
        "ru": "Длинный путь",
        "en": "The long way"
      },
      "text": {
        "he": "I כפול 3 ו־II כפול 2, ואז מחסירים: x נעלם. אחר כך I כפול 2 פחות III. מהמערכת החדשה מצמצמים את y",
        "ru": "I умножаем на 3, II на 2 и вычитаем: x исчезает. Потом I × 2 минус III. Из новой системы убираем y",
        "en": "I times 3 and II times 2, then subtract: x disappears. Then I times 2 minus III. From the new system eliminate y"
      },
      "math": [
        "6x + 9y + 12z = 60",
        "6x − 4y + 10z = 26",
        "13y + 2z = 34",
        "4x + 6y + 8z = 40",
        "y + 10z = 22",
        "13y + 130z = 286",
        "128z = 252",
        "z ≈ 1.969"
      ]
    },
    {
      "why": {
        "he": "במטריצה המקום של המספר אומר איזה נעלם הוא: עמודה ראשונה — x, שנייה — y, שלישית — z. לכן לא צריך לכתוב את האותיות, וכל החשבון נראה נקי יותר. \"מדרגות\" (אפסים מתחת לאלכסון) פירושן שבשורה האחרונה נשאר נעלם אחד בלבד — ומשם מתחילים.",
        "ru": "В матрице место числа говорит, какое это неизвестное: первый столбец — x, второй — y, третий — z. Поэтому буквы писать не нужно, и всё выглядит чище. «Ступеньки» (нули под диагональю) значат, что в последней строке остаётся одно неизвестное, — с неё и начинаем.",
        "en": "In a matrix the position of a number says which unknown it is: column one is x, two is y, three is z. So you do not write the letters, and everything looks cleaner. The \"staircase\" (zeros under the diagonal) means the last row has only one unknown left — that is where you start."
      },
      "kind": "talk",
      "title": {
        "he": "הדרך הקצרה: מטריצה (שיטת גאוס)",
        "ru": "Короткий путь: матрица (метод Гаусса)",
        "en": "The short way: a matrix (Gaussian elimination)"
      },
      "text": {
        "he": "כותבים רק את המקדמים במטריצה מורחבת: כל שורה היא משוואה, והמספר שאחרי הקו הוא האגף הימני. עם השורות עושים את אותן פעולות כמו עם משוואות: כופלים שורה במספר ומחברים או מחסירים שורות. המטרה — צורה מדורגת: אפסים מתחת לאלכסון.",
        "ru": "Записываем только коэффициенты в расширенную матрицу: каждая строка — уравнение, число после черты — правая часть. Со строками делаем те же действия, что с уравнениями: умножаем строку на число, складываем или вычитаем строки. Цель — ступенчатый вид: нули под диагональю.",
        "en": "Write only the coefficients in an augmented matrix: each row is an equation, and the number after the bar is the right-hand side. Do the same things with rows as with equations: multiply a row by a number, add or subtract rows. The goal is staircase form: zeros below the diagonal."
      }
    },
    {
      "why": {
        "he": "כל שורה היא משוואה. להחליף משוואות במקום זה רק לכתוב אותן בסדר אחר, והפתרון לא משתנה. כפל וחיבור הם אותן פעולות כמו בשיטת החיבור, וגם הן לא משנות את הפתרון.",
        "ru": "Каждая строка — это уравнение. Поменять уравнения местами значит просто записать их в другом порядке, решение то же. Умножение и сложение — те же действия, что в методе сложения, они тоже не меняют решения.",
        "en": "Each row is an equation. Swapping equations just writes them in a different order, so the solution stays the same. Multiplying and adding are the same moves as in the addition method, and they do not change the solution either."
      },
      "kind": "board",
      "title": {
        "he": "שלוש הפעולות המותרות על שורות",
        "ru": "Три разрешённых действия со строками",
        "en": "The three allowed row operations"
      },
      "text": {
        "he": "עם שורות המטריצה מותר לעשות רק שלוש פעולות (קוראים להן פעולות אלמנטריות):\n• להחליף שתי שורות במקום;\n• לכפול שורה במספר שאינו 0 (כופלים את כל השורה, גם את המספר שאחרי הקו);\n• לחבר לשורה שורה אחרת או להחסיר אותה (אפשר גם כפול מספר).\nהסימון `R3 ← R3 − 2R1` אומר: השורה השלישית החדשה = השלישית פחות פעמיים הראשונה.",
        "ru": "Со строками матрицы можно делать только три действия (их называют элементарными):\n• поменять две строки местами;\n• умножить строку на число, не равное 0 (умножаем всю строку, и число после черты тоже);\n• прибавить к строке другую строку или вычесть её (можно умноженную на число).\nЗапись `R3 ← R3 − 2R1` значит: новая третья строка = третья минус две первых.",
        "en": "You may do only three things with the rows of the matrix (they are called elementary operations):\n• swap two rows;\n• multiply a row by a number other than 0 (the whole row, including the number after the bar);\n• add another row to a row, or subtract it (it may be multiplied by a number).\nThe notation `R3 ← R3 − 2R1` means: the new third row = the third minus twice the first."
      },
      "math": [
        "R1 ↔ R2",
        "R2 ← 2R2",
        "R3 ← R3 − 2R1"
      ]
    },
    {
      "why": {
        "he": "בדיקה של הצעד `R2 ← 2R2 − 3R1`, מספר אחרי מספר.",
        "ru": "Проверка шага `R2 ← 2R2 − 3R1` число за числом.",
        "en": "Checking the step `R2 ← 2R2 − 3R1` number by number."
      },
      "whyMath": [
        "2 × 3 − 3 × 2 = 0",
        "2 × (−2) − 3 × 3 = −13",
        "2 × 5 − 3 × 4 = −2",
        "2 × 13 − 3 × 20 = −34"
      ],
      "kind": "board",
      "title": {
        "he": "המטריצה מהלוח",
        "ru": "Матрица с доски",
        "en": "The matrix from the board"
      },
      "text": {
        "he": "אותה מערכת מתרגיל 1, בשלושה צעדים",
        "ru": "Та же система из задания 1, за три шага",
        "en": "The same system from exercise 1, in three steps"
      },
      "math": [
        "R1  ( 2   3   4 | 20 )",
        "R2  ( 3  −2   5 | 13 )",
        "R3  ( 4   5  −2 | 18 )",
        "R2 ← 2R2 − 3R1",
        "R2  ( 0  −13  −2 | −34 )",
        "R3 ← R3 − 2R1",
        "R3  ( 0  −1  −10 | −22 )",
        "R3 ← −13R3 + R2",
        "R3  ( 0   0  128 | 252 )"
      ]
    },
    {
      "why": {
        "he": "אם לוקחים את R1, שבה x אינו 0, ה-x יחזור לשורה R3, והאפס שכבר עשינו ייעלם. שורה שיש בה 0 בעמודה הזו מוסיפה 0, ולכן האפס נשאר אפס.",
        "ru": "Если взять R1, где x не равен 0, в R3 снова появится x, и уже сделанный ноль пропадёт. Строка, у которой в этом столбце 0, прибавляет 0, поэтому готовый ноль остаётся нулём.",
        "en": "If you use R1, where x is not 0, the x comes back into R3 and the zero you already made disappears. A row with 0 in that column adds 0, so the zero stays a zero."
      },
      "whyMath": [
        "−13 × 0 + 0 = 0",
        "−13 × (−1) + (−13) = 0",
        "−13 × (−10) + (−2) = 128",
        "−13 × (−22) + (−34) = 252"
      ],
      "kind": "tip",
      "title": {
        "he": "באיזו שורה לעשות אפס?",
        "ru": "Какой строкой делать ноль?",
        "en": "Which row to use for a zero?"
      },
      "text": {
        "he": "שני כללים מהלוח:\n• אם מספר אחד מתחלק בשני, כופלים רק שורה אחת. ב-R3 יש 4 וב-R1 יש 2, לכן `R3 ← R3 − 2R1`. קודם היו 3 ו-2, והיה צריך לכפול את שתי השורות.\n• כשבעמודה כבר יש אפס, לאפס הבא לוקחים שורה שגם בה יש 0 בעמודה הזו. כדי להעלים את ה-−1 ב-R3 לוקחים את R2 ולא את R1: `R3 ← −13R3 + R2`.\nכך לא צריך לכתוב הכול מחדש, וזה היתרון של השיטה.",
        "ru": "Два правила с доски:\n• Если одно число делится на другое, умножаем только одну строку. В R3 стоит 4, в R1 стоит 2, поэтому `R3 ← R3 − 2R1`. Раньше были 3 и 2, и пришлось умножать обе строки.\n• Когда в столбце уже есть ноль, для следующего нуля берём строку, у которой в этом столбце тоже 0. Чтобы убрать −1 в R3, берём R2, а не R1: `R3 ← −13R3 + R2`.\nТак не нужно переписывать всё заново, в этом плюс метода.",
        "en": "Two rules from the board:\n• If one number divides the other, multiply only one row. R3 has 4 and R1 has 2, so `R3 ← R3 − 2R1`. Before, it was 3 and 2, and both rows had to be multiplied.\n• When a column already has a zero, make the next zero with a row that also has 0 in that column. To remove the −1 in R3, use R2, not R1: `R3 ← −13R3 + R2`.\nThis way you don't rewrite everything, and that is the advantage of the method."
      }
    },
    {
      "why": {
        "he": "למה מלמטה למעלה? בשורה האחרונה יש רק z, ולכן מוצאים אותו מיד. בשורה השנייה יש y ו-z — z כבר ידוע, נשאר רק y. בשורה הראשונה נשאר רק x. כל שורה נותנת נעלם אחד חדש.",
        "ru": "Почему снизу вверх? В последней строке есть только z, поэтому его находим сразу. Во второй строке — y и z, а z уже известен, остаётся только y. В первой строке остаётся только x. Каждая строка даёт одно новое неизвестное.",
        "en": "Why bottom up? The last row has only z, so we find it at once. The second row has y and z — z is already known, only y is left. In the first row only x is left. Each row gives one new unknown."
      },
      "kind": "board",
      "title": {
        "he": "חזרה מלמטה למעלה",
        "ru": "Обратный ход: снизу вверх",
        "en": "Back substitution: bottom to top"
      },
      "text": {
        "he": "מהשורה האחרונה מוצאים את z, מהשנייה את y, ומהראשונה את x. על הלוח התקבל בעיגול `z ≈ 1.96`, `y ≈ 2.31`, `x ≈ 2.61`.",
        "ru": "Из последней строки находим z, из второй — y, из первой — x. На доске с округлением получилось `z ≈ 1.96`, `y ≈ 2.31`, `x ≈ 2.61`.",
        "en": "From the last row find z, from the second y, from the first x. On the board, with rounding `z ≈ 1.96`, `y ≈ 2.31`, `x ≈ 2.61`."
      },
      "math": [
        "128z = 252",
        "−13y − 2z = −34",
        "2x + 3y + 4z = 20"
      ]
    },
    {
      "why": {
        "he": "כל מספר מעוגל \"סוחב\" טעות קטנה, והיא נכנסת לחישוב הבא וגדלה. בסוף שלושה צעדים הטעות כבר נראית בספרה השנייה. שברים מדויקים לא סוחבים טעות בכלל, ולכן עדיף לעגל רק בתשובה הסופית.",
        "ru": "Каждое округлённое число «тащит» маленькую ошибку, и она попадает в следующий расчёт и растёт. Через три шага ошибка видна уже во второй цифре. Точные дроби не тащат ошибку вообще, поэтому округлять лучше только в последнем ответе.",
        "en": "Every rounded number \"carries\" a small error, which goes into the next step and grows. After three steps the error shows in the second digit. Exact fractions carry no error at all, so round only the final answer."
      },
      "kind": "tip",
      "title": {
        "he": "זהירות עם עיגול",
        "ru": "Осторожно с округлением",
        "en": "Careful with rounding"
      },
      "text": {
        "he": "התשובה המדויקת היא שברים `z = 63/32 = 1.96875`, `y = 37/16 = 2.3125`, `x = 83/32 = 2.59375`. כשמעגלים באמצע הדרך, הטעות גדלה בכל צעד — לכן על הלוח יצא `x ≈ 2.61` במקום `2.59`. כדאי להשאיר שברים (או כמה ספרות אחרי הנקודה) עד הסוף, ולבדוק בהצבה.",
        "ru": "Точный ответ — дроби `z = 63/32 = 1.96875`, `y = 37/16 = 2.3125`, `x = 83/32 = 2.59375`. Если округлять по ходу, ошибка растёт с каждым шагом — поэтому на доске вышло `x ≈ 2.61` вместо `2.59`. Лучше держать дроби (или больше знаков после точки) до конца и проверять подстановкой.",
        "en": "The exact answer is fractions `z = 63/32 = 1.96875`, `y = 37/16 = 2.3125`, `x = 83/32 = 2.59375`. Rounding along the way makes the error grow at each step — that is why the board shows `x ≈ 2.61` instead of `2.59`. Keep fractions (or more decimal places) until the end, and check by substitution."
      }
    },
    {
      "why": {
        "he": "תשובה בשברים זה לא סימן לטעות. במערכות כאלה זה נפוץ (כאן `x = 95/37`). הדרך לדעת שהתשובה נכונה היא להציב בכל שלוש המשוואות ולא \"לראות שהמספר יפה\".",
        "ru": "Ответ в дробях — не признак ошибки. В таких системах это обычно (здесь `x = 95/37`). Узнать, что ответ верный, можно подстановкой во все три уравнения, а не по тому, «красивое ли число».",
        "en": "An answer in fractions is not a sign of a mistake. In systems like these it is normal (here `x = 95/37`). The way to know it is right is to substitute into all three equations, not to see whether the number \"looks nice\"."
      },
      "kind": "talk",
      "title": {
        "he": "תרגיל 4",
        "ru": "Задание 4",
        "en": "Exercise 4"
      },
      "text": {
        "he": "עוד מערכת עם שלושה נעלמים לפתרון באותה שיטה. גם כאן התשובה יוצאת בשברים (ראו משימה 4 למטה).",
        "ru": "Ещё одна система с тремя неизвестными — решаем тем же способом. Здесь ответ тоже в дробях (см. задачу 4 ниже).",
        "en": "Another system with three unknowns, solved the same way. Here too the answer comes out in fractions (see task 4 below)."
      },
      "math": [
        "6x + 2y − 3z = 13",
        "3x + 4y + 2z = 23",
        "2x − 3y + 5z = 10"
      ]
    },
    {
      "why": {
        "he": "הקבצים האלה כבר נמצאים אצלנו. מהדף \"מערכות עם פתרון יחיד\" לקחנו לאתר את מערכות 1, 4, 2, 8, 23 ו-25 עם פתרון מלא. \"מבוא לווקטורים\" הוא הנושא הבא בקורס, ועוד לא למדנו אותו.",
        "ru": "Эти файлы уже есть у нас. С листа «системы с единственным решением» на сайт взяты системы 1, 4, 2, 8, 23 и 25 с полным решением. «Введение в векторы» — следующая тема курса, её ещё не проходили.",
        "en": "These files are already with us. From the \"systems with a unique solution\" sheet, systems 1, 4, 2, 8, 23 and 25 are on the site with full solutions. \"Intro to vectors\" is the next topic of the course; we have not learned it yet."
      },
      "kind": "talk",
      "title": {
        "he": "חומרים באתר הקורס",
        "ru": "Материалы на сайте курса",
        "en": "Materials on the course site"
      },
      "text": {
        "he": "באתר הקורס (Moodle) נפתחה יחידת הוראה חדשה עם הקבצים: \"מבוא לווקטורים – טכנאים\", \"תרגיל כיתה 2 – גאוס\" ו\"מערכות משוואות ליניאריות עם פתרון יחיד\".",
        "ru": "На сайте курса (Moodle) открыт новый учебный блок (יחידת הוראה חדשה) с файлами: «מבוא לווקטורים – טכנאים» (введение в векторы), «תרגיל כיתה 2 – גאוס» (классное упражнение 2 — Гаусс) и «מערכות משוואות ליניאריות עם פתרון יחיד» (системы линейных уравнений с единственным решением).",
        "en": "A new teaching unit (יחידת הוראה חדשה) is open on the course site (Moodle) with the files: \"מבוא לווקטורים – טכנאים\" (intro to vectors), \"תרגיל כיתה 2 – גאוס\" (class exercise 2 — Gauss) and \"מערכות משוואות ליניאריות עם פתרון יחיד\" (linear systems with a unique solution)."
      }
    },
    {
      "why": {
        "he": "למה דווקא מספר שונה מ-0? כפל ב-0 הופך את השורה ל-`0 = 0` — זה נכון, אבל המידע של המשוואה הלך לאיבוד, ונשארות פחות משוואות מנעלמים.",
        "ru": "Почему именно число, не равное 0? Умножение на 0 превращает строку в `0 = 0` — это верно, но информация уравнения пропала, и уравнений становится меньше, чем неизвестных.",
        "en": "Why a number other than 0? Multiplying by 0 turns the row into `0 = 0` — true, but the information of the equation is lost, and you are left with fewer equations than unknowns."
      },
      "kind": "faq",
      "q": {
        "he": "למה מותר לכפול שורה ולחבר שורות?",
        "ru": "Почему можно умножать строку и складывать строки?",
        "en": "Why may we multiply a row and add rows?"
      },
      "a": {
        "he": "כי כל שורה היא משוואה. כפל של משוואה (שני האגפים) במספר שאינו 0, וחיבור של שתי משוואות, לא משנים את הפתרון — בדיוק כמו בשיטת החיבור.",
        "ru": "Потому что каждая строка — это уравнение. Умножение уравнения (обеих частей) на число, не равное 0, и сложение двух уравнений не меняют решения — так же, как в методе сложения.",
        "en": "Because each row is an equation. Multiplying an equation (both sides) by a nonzero number, and adding two equations, does not change the solution — exactly as in the addition method."
      }
    },
    {
      "why": {
        "he": "זה כמו לכתוב רשימת קניות בטבלה במקום בטקסט: אותו מידע, רק מסודר. בגלל הסדר הקבוע קשה לשכוח צעד, ולכן במבחן עדיף להשתמש במטריצה.",
        "ru": "Это как вести список покупок таблицей, а не текстом: та же информация, только упорядоченная. Из-за постоянного порядка трудно пропустить шаг, поэтому на экзамене удобнее матрица.",
        "en": "It is like writing a shopping list as a table instead of text: the same information, just organised. Because the order is fixed it is hard to skip a step, so on the exam the matrix is handier."
      },
      "kind": "faq",
      "q": {
        "he": "מה ההבדל בין הדרך הארוכה למטריצה?",
        "ru": "Чем длинный путь отличается от матрицы?",
        "en": "How is the long way different from the matrix?"
      },
      "a": {
        "he": "הפעולות אותן פעולות. במטריצה לא כותבים שוב ושוב את x, y, z, והסדר קבוע: קודם אפסים בעמודה הראשונה, אחר כך בשנייה. לכן קל יותר לא ללכת לאיבוד.",
        "ru": "Действия те же самые. В матрице не нужно каждый раз писать x, y, z, и порядок постоянный: сначала нули в первом столбце, потом во втором. Поэтому легче не запутаться.",
        "en": "The operations are the same. In a matrix you don't rewrite x, y, z each time, and the order is fixed: first zeros in column one, then in column two. So it is easier not to get lost."
      }
    },
    {
      "kind": "board",
      "title": {
        "he": "מתרגיל כיתה 2: מה אם בשורה יוצא 0 = מספר?",
        "ru": "Из «תרגיל כיתה 2»: а если в строке выходит 0 = число?",
        "en": "From class exercise 2: what if a row becomes 0 = a number?"
      },
      "text": {
        "he": "בדף של המרצה יש שתי מערכות \"מיוחדות\" (4 ו-5). שם גאוס לא נגמר במספר ל-z, אלא בשורה שכולה אפסים משמאל\n• `0 = −3` — שקר. אין x, y, z שיעשו את זה נכון, ולכן אין פתרון.\n• `0 = 0` — תמיד נכון. משוואה אחת \"נעלמה\", נשארו פחות משוואות מנעלמים, ולכן אינסוף פתרונות.\nבשיעור עבדנו על מערכות עם פתרון יחיד — זה מבט קדימה.",
        "ru": "На листе преподавателя есть две «особые» системы (4 и 5). Там Гаусс заканчивается не числом для z, а строкой, где слева одни нули.\n• `0 = −3` — ложь. Нет таких x, y, z, чтобы это стало верным, поэтому решений нет.\n• `0 = 0` — верно всегда. Одно уравнение «исчезло», уравнений меньше, чем неизвестных, поэтому решений бесконечно много.\nНа уроке мы решали системы с единственным решением — это взгляд вперёд.",
        "en": "The teacher's sheet has two \"special\" systems (4 and 5). There Gauss does not end with a number for z but with a row of zeros on the left.\n• `0 = −3` — false. No x, y, z can make it true, so no solution.\n• `0 = 0` — always true. One equation \"vanished\", there are fewer equations than unknowns, so infinitely many solutions.\nIn class we solved systems with a unique solution — this is a look ahead."
      },
      "math": [
        "R2  ( 2  4  −6 | −5 )",
        "R3  ( 1  2  −3 | −1 )",
        "R2 ← R2 − 2R3",
        "R2  ( 0  0  0 | −3 )",
        "0 = −3"
      ],
      "why": {
        "he": "למה זה קורה? במערכת 4 השורה השנייה היא \"כמעט פי 2\" מהשלישית: אגף שמאל בדיוק פי 2, אבל אגף ימין לא (−5 ולא −2). שתי דרישות שסותרות זו את זו. במערכת 5 השורה השלישית היא בדיוק סכום של שתי הראשונות, ולכן היא לא מוסיפה מידע חדש. גאוס \"מגלה\" את זה לבד — וזה אחד היתרונות שלו.",
        "ru": "Почему так? В системе 4 вторая строка — «почти вдвое» третья: левая часть ровно в 2 раза больше, а правая — нет (−5, а не −2). Два требования противоречат друг другу. В системе 5 третья строка — ровно сумма первых двух, поэтому новой информации она не даёт. Гаусс сам это «обнаруживает» — и это одно из его достоинств.",
        "en": "Why does it happen? In system 4 the second row is \"almost twice\" the third: the left side is exactly 2 times, but the right is not (−5, not −2). Two demands that contradict each other. In system 5 the third row is exactly the sum of the first two, so it adds no new information. Gauss \"discovers\" this by itself — one of its strengths."
      },
      "_src": "pass-0311"
    }
  ],
  "review": [
    {
      "title": {
        "he": "שיטת החיבור",
        "ru": "Метод сложения",
        "en": "The addition method"
      },
      "text": {
        "he": "כופלים משוואות כך שהמקדמים של נעלם אחד יהיו שווים בגודלם. סימנים שונים — מחברים, שווים — מחסירים.",
        "ru": "Умножаем уравнения, чтобы коэффициенты при одном неизвестном стали равны по модулю. Знаки разные — складываем, одинаковые — вычитаем.",
        "en": "Multiply equations so the coefficients of one unknown are equal in size. Different signs — add; same signs — subtract."
      }
    },
    {
      "title": {
        "he": "באיזה מספר לכפול",
        "ru": "На что умножать",
        "en": "What to multiply by"
      },
      "text": {
        "he": "מקדמים 2 ו־3 → מספר משותף 6: כופלים ב־3 וב־2. אם אחד מתחלק בשני — מספיק לכפול משוואה אחת.",
        "ru": "Коэффициенты 2 и 3 → общее число 6: умножаем на 3 и на 2. Если один делится на другой — хватит умножить одно уравнение.",
        "en": "Coefficients 2 and 3 → common number 6: multiply by 3 and by 2. If one divides the other, multiplying one equation is enough."
      }
    },
    {
      "title": {
        "he": "שלושה נעלמים",
        "ru": "Три неизвестных",
        "en": "Three unknowns"
      },
      "text": {
        "he": "מצמצמים את אותו נעלם משני זוגות משוואות → מערכת של שתיים → מוצאים שניים → מציבים ומוצאים את השלישי.",
        "ru": "Убираем одно неизвестное из двух пар уравнений → система из двух → находим два → подставляем и находим третье.",
        "en": "Eliminate the same unknown from two pairs → a system of two → find two unknowns → substitute to find the third."
      }
    },
    {
      "title": {
        "he": "מטריצה מורחבת",
        "ru": "Расширенная матрица",
        "en": "Augmented matrix"
      },
      "text": {
        "he": "שורה = משוואה. לפני הקו המקדמים של x, y, z, אחרי הקו האגף הימני.",
        "ru": "Строка = уравнение. До черты — коэффициенты при x, y, z, после черты — правая часть.",
        "en": "Row = equation. Before the bar: the coefficients of x, y, z; after the bar: the right-hand side."
      }
    },
    {
      "title": {
        "he": "שיטת גאוס",
        "ru": "Метод Гаусса",
        "en": "Gaussian elimination"
      },
      "text": {
        "he": "מאפסים מתחת לאלכסון (צורה מדורגת), ואז חוזרים מלמטה למעלה: z, אחר כך y, אחר כך x.",
        "ru": "Обнуляем под диагональю (ступенчатый вид), потом идём снизу вверх: z, потом y, потом x.",
        "en": "Make zeros below the diagonal (staircase form), then go bottom to top: z, then y, then x."
      }
    },
    {
      "title": {
        "he": "עיגול ובדיקה",
        "ru": "Округление и проверка",
        "en": "Rounding and checking"
      },
      "text": {
        "he": "לא מעגלים באמצע — משאירים שברים. בסוף מציבים בכל המשוואות המקוריות.",
        "ru": "Не округляем по ходу — держим дроби. В конце подставляем во все исходные уравнения.",
        "en": "Don't round midway — keep fractions. At the end substitute into all the original equations."
      }
    }
  ],
  "tasks": {
    "groups": {
      "26": {
        "he": "תרגיל 26 — פתרו את מערכות המשוואות",
        "ru": "Задание 26 — Решите системы уравнений",
        "en": "Exercise 26 — Solve the systems of equations"
      },
      "g1": {
        "he": "תרגיל 1 — שלוש משוואות, שלושה נעלמים",
        "ru": "Задание 1 — Три уравнения, три неизвестных",
        "en": "Exercise 1 — Three equations, three unknowns"
      },
      "g4": {
        "he": "תרגיל 4 — שלוש משוואות, שלושה נעלמים",
        "ru": "Задание 4 — Три уравнения, три неизвестных",
        "en": "Exercise 4 — Three equations, three unknowns"
      },
      "more": {
        "he": "עוד מערכות מדף התרגילים של המרצה",
        "ru": "Ещё системы с листа преподавателя",
        "en": "More systems from the teacher's sheet"
      },
      "cls2": {
        "he": "תרגיל כיתה 2 של המרצה (גאוס)",
        "ru": "Лист преподавателя «תרגיל כיתה 2» (Гаусс)",
        "en": "Teacher's class exercise 2 (Gauss)"
      }
    },
    "teacher": [
      {
        "id": "t26-1",
        "group": "26",
        "label": "26א",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`5x + 2y = 27`\n`7x − 3y = 32`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений\n`5x + 2y = 27`\n`7x − 3y = 32`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations\n`5x + 2y = 27`\n`7x − 3y = 32`\nWrite the answer like this: x = …, y = …"
        },
        "example": {
          "he": "```\n3x + 2y = 12\n2x − 3y = −5\n```\nרוצים להיפטר מ־y. המקדמים של y: `2` ו־−3``. את הראשונה כופלים ב־3, את השנייה ב־2:\n```\n9x + 6y = 36\n4x − 6y = −10\n```\nהסימנים של y שונים → מחברים:\n```\n13x = 26\nx = 26 / 13 = 2\n```\nמציבים את x במשוואה הראשונה:\n```\n3 × 2 + 2y = 12\n2y = 6\ny = 3\n```\nבדיקה במשוואה השנייה: `2 × 2 − 3 × 3 = −5` ✅",
          "ru": "```\n3x + 2y = 12\n2x − 3y = −5\n```\nХотим убрать y. Коэффициенты при y: `2` и `−3`. Первое умножаем на 3, второе на 2:\n```\n9x + 6y = 36\n4x − 6y = −10\n```\nЗнаки при y разные → складываем:\n```\n13x = 26\nx = 26 / 13 = 2\n```\nПодставляем x в первое уравнение:\n```\n3 × 2 + 2y = 12\n2y = 6\ny = 3\n```\nПроверка во втором уравнении: `2 × 2 − 3 × 3 = −5` ✅",
          "en": "```\n3x + 2y = 12\n2x − 3y = −5\n```\nWe want to remove y. The y coefficients: `2` and `−3`. Multiply the first by 3, the second by 2:\n```\n9x + 6y = 36\n4x − 6y = −10\n```\nThe y signs are different → we add:\n```\n13x = 26\nx = 26 / 13 = 2\n```\nPut x into the first equation:\n```\n3 × 2 + 2y = 12\n2y = 6\ny = 3\n```\nCheck in the second equation: `2 × 2 − 3 × 3 = −5` ✅"
        },
        "answer": {
          "accept": [
            "x = 5, y = 1",
            "x=5, y=1",
            "x = 5; y = 1",
            "x=5,y=1",
            "x = 5, у = 1",
            "x=5, у=1",
            "x = 5; у = 1",
            "x=5,у=1",
            "(5, 1)",
            "(5,1)",
            "5, 1",
            "5,1",
            "5; 1"
          ]
        },
        "hints": [
          {
            "he": "אף נעלם לא מצטמצם מיד. בחרו נעלם, וכפלו כל משוואה במספר כך שהמקדמים שלו יהיו שווים בגודלם.",
            "ru": "Сразу ничего не сокращается. Выбери неизвестное и умножь каждое уравнение на число, чтобы коэффициенты при нём стали равны по модулю.",
            "en": "Nothing cancels right away. Pick an unknown and multiply each equation by a number so that its coefficients become equal in size."
          },
          {
            "he": "צעד ראשון `15x + 6y = 81`",
            "ru": "Первый шаг `15x + 6y = 81`",
            "en": "First step `15x + 6y = 81`"
          },
          {
            "he": "בהמשך מקבלים `14x − 6y = 64`",
            "ru": "Дальше получится `14x − 6y = 64`",
            "en": "Next you get `14x − 6y = 64`"
          }
        ],
        "solution": [
          {
            "he": "מצמצמים את y: המקדמים 2 ו־3, המספר המשותף `6`.",
            "ru": "Убираем y: коэффициенты 2 и 3, общее число `6`.",
            "en": "Eliminate y: the coefficients are 2 and 3, the common number is `6`."
          },
          {
            "he": "כופלים את משוואה 1 ב־`3`",
            "ru": "Умножаем уравнение 1 на `3`",
            "en": "Multiply equation 1 by `3`"
          },
          "15x + 6y = 81",
          {
            "he": "כופלים את משוואה 2 ב־`2`",
            "ru": "Умножаем уравнение 2 на `2`",
            "en": "Multiply equation 2 by `2`"
          },
          "14x − 6y = 64",
          {
            "he": "`+6y` ו־`−6y` — מחברים",
            "ru": "`+6y` и `−6y` — складываем",
            "en": "`+6y` and `−6y` — add"
          },
          "29x = 145",
          {
            "he": "מחלקים את שני האגפים ב־`29`",
            "ru": "Делим обе части на `29`",
            "en": "Divide both sides by `29`"
          },
          "x = 5",
          {
            "he": "מציבים `x = 5` במשוואה הראשונה",
            "ru": "Подставляем `x = 5` в первое уравнение",
            "en": "Substitute `x = 5` into the first equation"
          },
          "25 + 2y = 27",
          "2y = 2",
          "y = 1",
          {
            "he": "תשובה `x = 5,  y = 1`",
            "ru": "Ответ `x = 5,  y = 1`",
            "en": "Answer `x = 5,  y = 1`"
          }
        ]
      },
      {
        "id": "t26-2",
        "group": "26",
        "label": "26ב",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`7x − 4y = 5`\n`10x + 3y = 42`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений\n`7x − 4y = 5`\n`10x + 3y = 42`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations\n`7x − 4y = 5`\n`10x + 3y = 42`\nWrite the answer like this: x = …, y = …"
        },
        "example": {
          "he": "```\n4x − 3y = 6\n5x + 2y = 19\n```\nרוצים להיפטר מ־y. המקדמים של y: `−3` ו־`2`. את הראשונה כופלים ב־2, את השנייה ב־3:\n```\n8x − 6y = 12\n15x + 6y = 57\n```\nהסימנים של y שונים → מחברים:\n```\n23x = 69\nx = 69 / 23 = 3\n```\nמציבים את x במשוואה הראשונה:\n```\n4 × 3 − 3y = 6\n−3y = −6\ny = 2\n```\nבדיקה במשוואה השנייה: `5 × 3 + 2 × 2 = 19` ✅",
          "ru": "```\n4x − 3y = 6\n5x + 2y = 19\n```\nХотим убрать y. Коэффициенты при y: `−3` и `2`. Первое умножаем на 2, второе на 3:\n```\n8x − 6y = 12\n15x + 6y = 57\n```\nЗнаки при y разные → складываем:\n```\n23x = 69\nx = 69 / 23 = 3\n```\nПодставляем x в первое уравнение:\n```\n4 × 3 − 3y = 6\n−3y = −6\ny = 2\n```\nПроверка во втором уравнении: `5 × 3 + 2 × 2 = 19` ✅",
          "en": "```\n4x − 3y = 6\n5x + 2y = 19\n```\nWe want to remove y. The y coefficients: `−3` and `2`. Multiply the first by 2, the second by 3:\n```\n8x − 6y = 12\n15x + 6y = 57\n```\nThe y signs are different → we add:\n```\n23x = 69\nx = 69 / 23 = 3\n```\nPut x into the first equation:\n```\n4 × 3 − 3y = 6\n−3y = −6\ny = 2\n```\nCheck in the second equation: `5 × 3 + 2 × 2 = 19` ✅"
        },
        "answer": {
          "accept": [
            "x = 3, y = 4",
            "x=3, y=4",
            "x = 3; y = 4",
            "x=3,y=4",
            "x = 3, у = 4",
            "x=3, у=4",
            "x = 3; у = 4",
            "x=3,у=4",
            "(3, 4)",
            "(3,4)",
            "3, 4",
            "3,4",
            "3; 4"
          ]
        },
        "hints": [
          {
            "he": "אף נעלם לא מצטמצם מיד. בחרו נעלם, וכפלו כל משוואה במספר כך שהמקדמים שלו יהיו שווים בגודלם.",
            "ru": "Сразу ничего не сокращается. Выбери неизвестное и умножь каждое уравнение на число, чтобы коэффициенты при нём стали равны по модулю.",
            "en": "Nothing cancels right away. Pick an unknown and multiply each equation by a number so that its coefficients become equal in size."
          },
          {
            "he": "צעד ראשון `21x − 12y = 15`",
            "ru": "Первый шаг `21x − 12y = 15`",
            "en": "First step `21x − 12y = 15`"
          },
          {
            "he": "בהמשך מקבלים `40x + 12y = 168`",
            "ru": "Дальше получится `40x + 12y = 168`",
            "en": "Next you get `40x + 12y = 168`"
          }
        ],
        "solution": [
          {
            "he": "מצמצמים את y: המקדמים 4 ו־3, המספר המשותף `12`.",
            "ru": "Убираем y: коэффициенты 4 и 3, общее число `12`.",
            "en": "Eliminate y: the coefficients are 4 and 3, the common number is `12`."
          },
          {
            "he": "כופלים את משוואה 1 ב־`3`",
            "ru": "Умножаем уравнение 1 на `3`",
            "en": "Multiply equation 1 by `3`"
          },
          "21x − 12y = 15",
          {
            "he": "כופלים את משוואה 2 ב־`4`",
            "ru": "Умножаем уравнение 2 на `4`",
            "en": "Multiply equation 2 by `4`"
          },
          "40x + 12y = 168",
          {
            "he": "מחברים את המשוואות",
            "ru": "Складываем уравнения",
            "en": "Add the equations"
          },
          "61x = 183",
          {
            "he": "מחלקים את שני האגפים ב־`61`",
            "ru": "Делим обе части на `61`",
            "en": "Divide both sides by `61`"
          },
          "x = 3",
          {
            "he": "מציבים `x = 3` במשוואה הראשונה",
            "ru": "Подставляем `x = 3` в первое уравнение",
            "en": "Substitute `x = 3` into the first equation"
          },
          "21 − 4y = 5",
          "−4y = −16",
          "y = 4",
          {
            "he": "תשובה `x = 3,  y = 4`",
            "ru": "Ответ `x = 3,  y = 4`",
            "en": "Answer `x = 3,  y = 4`"
          }
        ]
      },
      {
        "id": "t26-3",
        "group": "26",
        "label": "26ג",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`11x − 6y = 80`\n`12x + 4y = 24`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений\n`11x − 6y = 80`\n`12x + 4y = 24`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations\n`11x − 6y = 80`\n`12x + 4y = 24`\nWrite the answer like this: x = …, y = …"
        },
        "example": {
          "he": "```\n3x − 4y = 10\n5x + 2y = 8\n```\nרוצים להיפטר מ־y. המקדמים של y: `−4` ו־`2`. את הראשונה כופלים ב־1, את השנייה ב־2:\n```\n3x − 4y = 10\n10x + 4y = 16\n```\nהסימנים של y שונים → מחברים:\n```\n13x = 26\nx = 26 / 13 = 2\n```\nמציבים את x במשוואה הראשונה:\n```\n3 × 2 − 4y = 10\n−4y = 4\ny = −1\n```\nבדיקה במשוואה השנייה: `5 × 2 + 2 × (−1) = 8` ✅",
          "ru": "```\n3x − 4y = 10\n5x + 2y = 8\n```\nХотим убрать y. Коэффициенты при y: `−4` и `2`. Первое умножаем на 1, второе на 2:\n```\n3x − 4y = 10\n10x + 4y = 16\n```\nЗнаки при y разные → складываем:\n```\n13x = 26\nx = 26 / 13 = 2\n```\nПодставляем x в первое уравнение:\n```\n3 × 2 − 4y = 10\n−4y = 4\ny = −1\n```\nПроверка во втором уравнении: `5 × 2 + 2 × (−1) = 8` ✅",
          "en": "```\n3x − 4y = 10\n5x + 2y = 8\n```\nWe want to remove y. The y coefficients: `−4` and `2`. Multiply the first by 1, the second by 2:\n```\n3x − 4y = 10\n10x + 4y = 16\n```\nThe y signs are different → we add:\n```\n13x = 26\nx = 26 / 13 = 2\n```\nPut x into the first equation:\n```\n3 × 2 − 4y = 10\n−4y = 4\ny = −1\n```\nCheck in the second equation: `5 × 2 + 2 × (−1) = 8` ✅"
        },
        "answer": {
          "accept": [
            "x = 4, y = −6",
            "x=4, y=−6",
            "x = 4; y = −6",
            "x=4,y=−6",
            "x = 4, у = −6",
            "x=4, у=−6",
            "x = 4; у = −6",
            "x=4,у=−6",
            "(4, −6)",
            "(4,−6)",
            "4, −6",
            "4,−6",
            "4; −6"
          ]
        },
        "hints": [
          {
            "he": "אף נעלם לא מצטמצם מיד. בחרו נעלם, וכפלו כל משוואה במספר כך שהמקדמים שלו יהיו שווים בגודלם.",
            "ru": "Сразу ничего не сокращается. Выбери неизвестное и умножь каждое уравнение на число, чтобы коэффициенты при нём стали равны по модулю.",
            "en": "Nothing cancels right away. Pick an unknown and multiply each equation by a number so that its coefficients become equal in size."
          },
          {
            "he": "צעד ראשון `22x − 12y = 160`",
            "ru": "Первый шаг `22x − 12y = 160`",
            "en": "First step `22x − 12y = 160`"
          },
          {
            "he": "בהמשך מקבלים `36x + 12y = 72`",
            "ru": "Дальше получится `36x + 12y = 72`",
            "en": "Next you get `36x + 12y = 72`"
          }
        ],
        "solution": [
          {
            "he": "מצמצמים את y: המקדמים 6 ו־4, המספר המשותף `12`.",
            "ru": "Убираем y: коэффициенты 6 и 4, общее число `12`.",
            "en": "Eliminate y: the coefficients are 6 and 4, the common number is `12`."
          },
          {
            "he": "כופלים את משוואה 1 ב־`2`",
            "ru": "Умножаем уравнение 1 на `2`",
            "en": "Multiply equation 1 by `2`"
          },
          "22x − 12y = 160",
          {
            "he": "כופלים את משוואה 2 ב־`3`",
            "ru": "Умножаем уравнение 2 на `3`",
            "en": "Multiply equation 2 by `3`"
          },
          "36x + 12y = 72",
          {
            "he": "מחברים את המשוואות",
            "ru": "Складываем уравнения",
            "en": "Add the equations"
          },
          "58x = 232",
          {
            "he": "מחלקים את שני האגפים ב־`58`",
            "ru": "Делим обе части на `58`",
            "en": "Divide both sides by `58`"
          },
          "x = 4",
          {
            "he": "מציבים `x = 4` במשוואה השנייה",
            "ru": "Подставляем `x = 4` в второе уравнение",
            "en": "Substitute `x = 4` into the second equation"
          },
          "48 + 4y = 24",
          "4y = −24",
          "y = −6",
          {
            "he": "תשובה `x = 4,  y = −6`",
            "ru": "Ответ `x = 4,  y = −6`",
            "en": "Answer `x = 4,  y = −6`"
          }
        ]
      },
      {
        "id": "t26-4",
        "group": "26",
        "label": "26ד",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`9x + 5y = −38`\n`7x + 2y = −39`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений\n`9x + 5y = −38`\n`7x + 2y = −39`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations\n`9x + 5y = −38`\n`7x + 2y = −39`\nWrite the answer like this: x = …, y = …"
        },
        "example": {
          "he": "```\n4x + 3y = 1\n5x + 2y = −4\n```\nרוצים להיפטר מ־y. המקדמים של y: `3` ו־`2`. את הראשונה כופלים ב־2, את השנייה ב־3:\n```\n8x + 6y = 2\n15x + 6y = −12\n```\nהסימנים של y זהים → מחסרים:\n```\n−7x = 14\nx = 14 / (−7) = −2\n```\nמציבים את x במשוואה הראשונה:\n```\n4 × (−2) + 3y = 1\n3y = 9\ny = 3\n```\nבדיקה במשוואה השנייה: `5 × (−2) + 2 × 3 = −4` ✅",
          "ru": "```\n4x + 3y = 1\n5x + 2y = −4\n```\nХотим убрать y. Коэффициенты при y: `3` и `2`. Первое умножаем на 2, второе на 3:\n```\n8x + 6y = 2\n15x + 6y = −12\n```\nЗнаки при y одинаковые → вычитаем:\n```\n−7x = 14\nx = 14 / (−7) = −2\n```\nПодставляем x в первое уравнение:\n```\n4 × (−2) + 3y = 1\n3y = 9\ny = 3\n```\nПроверка во втором уравнении: `5 × (−2) + 2 × 3 = −4` ✅",
          "en": "```\n4x + 3y = 1\n5x + 2y = −4\n```\nWe want to remove y. The y coefficients: `3` and `2`. Multiply the first by 2, the second by 3:\n```\n8x + 6y = 2\n15x + 6y = −12\n```\nThe y signs are the same → we subtract:\n```\n−7x = 14\nx = 14 / (−7) = −2\n```\nPut x into the first equation:\n```\n4 × (−2) + 3y = 1\n3y = 9\ny = 3\n```\nCheck in the second equation: `5 × (−2) + 2 × 3 = −4` ✅"
        },
        "answer": {
          "accept": [
            "x = −7, y = 5",
            "x=−7, y=5",
            "x = −7; y = 5",
            "x=−7,y=5",
            "x = −7, у = 5",
            "x=−7, у=5",
            "x = −7; у = 5",
            "x=−7,у=5",
            "(−7, 5)",
            "(−7,5)",
            "−7, 5",
            "−7,5",
            "−7; 5"
          ]
        },
        "hints": [
          {
            "he": "אף נעלם לא מצטמצם מיד. בחרו נעלם, וכפלו כל משוואה במספר כך שהמקדמים שלו יהיו שווים בגודלם.",
            "ru": "Сразу ничего не сокращается. Выбери неизвестное и умножь каждое уравнение на число, чтобы коэффициенты при нём стали равны по модулю.",
            "en": "Nothing cancels right away. Pick an unknown and multiply each equation by a number so that its coefficients become equal in size."
          },
          {
            "he": "צעד ראשון `18x + 10y = −76`",
            "ru": "Первый шаг `18x + 10y = −76`",
            "en": "First step `18x + 10y = −76`"
          },
          {
            "he": "בהמשך מקבלים `−35x − 10y = 195`",
            "ru": "Дальше получится `−35x − 10y = 195`",
            "en": "Next you get `−35x − 10y = 195`"
          }
        ],
        "solution": [
          {
            "he": "מצמצמים את y: המקדמים 5 ו־2, המספר המשותף `10`. כופלים את השנייה במספר שלילי — ואז מחברים.",
            "ru": "Убираем y: коэффициенты 5 и 2, общее число `10`. Второе умножаем на отрицательное число — и складываем.",
            "en": "Eliminate y: the coefficients are 5 and 2, the common number is `10`. Multiply the second by a negative number, then add."
          },
          {
            "he": "כופלים את משוואה 1 ב־`2`",
            "ru": "Умножаем уравнение 1 на `2`",
            "en": "Multiply equation 1 by `2`"
          },
          "18x + 10y = −76",
          {
            "he": "כופלים את משוואה 2 ב־`−5`",
            "ru": "Умножаем уравнение 2 на `−5`",
            "en": "Multiply equation 2 by `−5`"
          },
          "−35x − 10y = 195",
          {
            "he": "מחברים את המשוואות",
            "ru": "Складываем уравнения",
            "en": "Add the equations"
          },
          "−17x = 119",
          {
            "he": "מחלקים את שני האגפים ב־`−17`",
            "ru": "Делим обе части на `−17`",
            "en": "Divide both sides by `−17`"
          },
          "x = −7",
          {
            "he": "מציבים `x = −7` במשוואה השנייה",
            "ru": "Подставляем `x = −7` в второе уравнение",
            "en": "Substitute `x = −7` into the second equation"
          },
          "−49 + 2y = −39",
          "2y = 10",
          "y = 5",
          {
            "he": "תשובה `x = −7,  y = 5`",
            "ru": "Ответ `x = −7,  y = 5`",
            "en": "Answer `x = −7,  y = 5`"
          }
        ]
      },
      {
        "id": "t26-5",
        "group": "26",
        "label": "26ה",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`−12x + 8y = −72`\n`17x + 4y = 56`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений\n`−12x + 8y = −72`\n`17x + 4y = 56`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations\n`−12x + 8y = −72`\n`17x + 4y = 56`\nWrite the answer like this: x = …, y = …"
        },
        "example": {
          "he": "```\n−6x + 4y = −24\n7x + 2y = 8\n```\nרוצים להיפטר מ־y. המקדמים של y: `4` ו־`2`. את הראשונה כופלים ב־1, את השנייה ב־2:\n```\n−6x + 4y = −24\n14x + 4y = 16\n```\nהסימנים של y זהים → מחסרים:\n```\n−20x = −40\nx = −40 / (−20) = 2\n```\nמציבים את x במשוואה הראשונה:\n```\n−6 × 2 + 4y = −24\n4y = −12\ny = −3\n```\nבדיקה במשוואה השנייה: `7 × 2 + 2 × (−3) = 8` ✅",
          "ru": "```\n−6x + 4y = −24\n7x + 2y = 8\n```\nХотим убрать y. Коэффициенты при y: `4` и `2`. Первое умножаем на 1, второе на 2:\n```\n−6x + 4y = −24\n14x + 4y = 16\n```\nЗнаки при y одинаковые → вычитаем:\n```\n−20x = −40\nx = −40 / (−20) = 2\n```\nПодставляем x в первое уравнение:\n```\n−6 × 2 + 4y = −24\n4y = −12\ny = −3\n```\nПроверка во втором уравнении: `7 × 2 + 2 × (−3) = 8` ✅",
          "en": "```\n−6x + 4y = −24\n7x + 2y = 8\n```\nWe want to remove y. The y coefficients: `4` and `2`. Multiply the first by 1, the second by 2:\n```\n−6x + 4y = −24\n14x + 4y = 16\n```\nThe y signs are the same → we subtract:\n```\n−20x = −40\nx = −40 / (−20) = 2\n```\nPut x into the first equation:\n```\n−6 × 2 + 4y = −24\n4y = −12\ny = −3\n```\nCheck in the second equation: `7 × 2 + 2 × (−3) = 8` ✅"
        },
        "answer": {
          "accept": [
            "x = 4, y = −3",
            "x=4, y=−3",
            "x = 4; y = −3",
            "x=4,y=−3",
            "x = 4, у = −3",
            "x=4, у=−3",
            "x = 4; у = −3",
            "x=4,у=−3",
            "(4, −3)",
            "(4,−3)",
            "4, −3",
            "4,−3",
            "4; −3"
          ]
        },
        "hints": [
          {
            "he": "אולי מספיק לכפול רק משוואה אחת: חפשו מקדם שמתחלק במקדם המתאים במשוואה השנייה.",
            "ru": "Может, хватит умножить одно уравнение: ищи коэффициент, который делится на соответствующий коэффициент во втором.",
            "en": "Maybe multiplying just one equation is enough: look for a coefficient that is divisible by the matching one in the other equation."
          },
          {
            "he": "צעד ראשון `−34x − 8y = −112`",
            "ru": "Первый шаг `−34x − 8y = −112`",
            "en": "First step `−34x − 8y = −112`"
          },
          {
            "he": "בהמשך מקבלים `−46x = −184`",
            "ru": "Дальше получится `−46x = −184`",
            "en": "Next you get `−46x = −184`"
          }
        ],
        "solution": [
          {
            "he": "`8` מתחלק ב־`4`, לכן מספיק לכפול רק את המשוואה השנייה. כופלים ב־`−2` כדי לקבל `−8y`",
            "ru": "`8` делится на `4`, поэтому хватит умножить только второе уравнение. Умножаем на `−2`, чтобы получить `−8y`",
            "en": "`8` is divisible by `4`, so only the second equation needs multiplying. Multiply by `−2` to get `−8y`"
          },
          "−34x − 8y = −112",
          {
            "he": "מחברים את המשוואות",
            "ru": "Складываем уравнения",
            "en": "Add the equations"
          },
          "−46x = −184",
          {
            "he": "מחלקים את שני האגפים ב־`−46`",
            "ru": "Делим обе части на `−46`",
            "en": "Divide both sides by `−46`"
          },
          "x = 4",
          {
            "he": "מציבים `x = 4` במשוואה השנייה",
            "ru": "Подставляем `x = 4` в второе уравнение",
            "en": "Substitute `x = 4` into the second equation"
          },
          "68 + 4y = 56",
          "4y = −12",
          "y = −3",
          {
            "he": "תשובה `x = 4,  y = −3`",
            "ru": "Ответ `x = 4,  y = −3`",
            "en": "Answer `x = 4,  y = −3`"
          }
        ]
      },
      {
        "id": "t26-6",
        "group": "26",
        "label": "26ו",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`−4x + 16y = 12`\n`10x + 23y = 96`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений\n`−4x + 16y = 12`\n`10x + 23y = 96`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations\n`−4x + 16y = 12`\n`10x + 23y = 96`\nWrite the answer like this: x = …, y = …"
        },
        "example": {
          "he": "```\n−3x + 9y = 0\n4x + 5y = 17\n```\nרוצים להיפטר מ־y. המקדמים של y: `9` ו־`5`. את הראשונה כופלים ב־5, את השנייה ב־9:\n```\n−15x + 45y = 0\n36x + 45y = 153\n```\nהסימנים של y זהים → מחסרים:\n```\n−51x = −153\nx = −153 / (−51) = 3\n```\nמציבים את x במשוואה הראשונה:\n```\n−3 × 3 + 9y = 0\n9y = 9\ny = 1\n```\nבדיקה במשוואה השנייה: `4 × 3 + 5 × 1 = 17` ✅",
          "ru": "```\n−3x + 9y = 0\n4x + 5y = 17\n```\nХотим убрать y. Коэффициенты при y: `9` и `5`. Первое умножаем на 5, второе на 9:\n```\n−15x + 45y = 0\n36x + 45y = 153\n```\nЗнаки при y одинаковые → вычитаем:\n```\n−51x = −153\nx = −153 / (−51) = 3\n```\nПодставляем x в первое уравнение:\n```\n−3 × 3 + 9y = 0\n9y = 9\ny = 1\n```\nПроверка во втором уравнении: `4 × 3 + 5 × 1 = 17` ✅",
          "en": "```\n−3x + 9y = 0\n4x + 5y = 17\n```\nWe want to remove y. The y coefficients: `9` and `5`. Multiply the first by 5, the second by 9:\n```\n−15x + 45y = 0\n36x + 45y = 153\n```\nThe y signs are the same → we subtract:\n```\n−51x = −153\nx = −153 / (−51) = 3\n```\nPut x into the first equation:\n```\n−3 × 3 + 9y = 0\n9y = 9\ny = 1\n```\nCheck in the second equation: `4 × 3 + 5 × 1 = 17` ✅"
        },
        "answer": {
          "accept": [
            "x = 5, y = 2",
            "x=5, y=2",
            "x = 5; y = 2",
            "x=5,y=2",
            "x = 5, у = 2",
            "x=5, у=2",
            "x = 5; у = 2",
            "x=5,у=2",
            "(5, 2)",
            "(5,2)",
            "5, 2",
            "5,2",
            "5; 2"
          ]
        },
        "hints": [
          {
            "he": "אף נעלם לא מצטמצם מיד. בחרו נעלם, וכפלו כל משוואה במספר כך שהמקדמים שלו יהיו שווים בגודלם.",
            "ru": "Сразу ничего не сокращается. Выбери неизвестное и умножь каждое уравнение на число, чтобы коэффициенты при нём стали равны по модулю.",
            "en": "Nothing cancels right away. Pick an unknown and multiply each equation by a number so that its coefficients become equal in size."
          },
          {
            "he": "צעד ראשון `−20x + 80y = 60`",
            "ru": "Первый шаг `−20x + 80y = 60`",
            "en": "First step `−20x + 80y = 60`"
          },
          {
            "he": "בהמשך מקבלים `20x + 46y = 192`",
            "ru": "Дальше получится `20x + 46y = 192`",
            "en": "Next you get `20x + 46y = 192`"
          }
        ],
        "solution": [
          {
            "he": "מצמצמים את x: המקדמים 4 ו־10, המספר המשותף `20`.",
            "ru": "Убираем x: коэффициенты 4 и 10, общее число `20`.",
            "en": "Eliminate x: the coefficients are 4 and 10, the common number is `20`."
          },
          {
            "he": "כופלים את משוואה 1 ב־`5`",
            "ru": "Умножаем уравнение 1 на `5`",
            "en": "Multiply equation 1 by `5`"
          },
          "−20x + 80y = 60",
          {
            "he": "כופלים את משוואה 2 ב־`2`",
            "ru": "Умножаем уравнение 2 на `2`",
            "en": "Multiply equation 2 by `2`"
          },
          "20x + 46y = 192",
          {
            "he": "מחברים את המשוואות",
            "ru": "Складываем уравнения",
            "en": "Add the equations"
          },
          "126y = 252",
          {
            "he": "מחלקים את שני האגפים ב־`126`",
            "ru": "Делим обе части на `126`",
            "en": "Divide both sides by `126`"
          },
          "y = 2",
          {
            "he": "מציבים `y = 2` במשוואה הראשונה",
            "ru": "Подставляем `y = 2` в первое уравнение",
            "en": "Substitute `y = 2` into the first equation"
          },
          "−4x + 32 = 12",
          "−4x = −20",
          "x = 5",
          {
            "he": "תשובה `x = 5,  y = 2`",
            "ru": "Ответ `x = 5,  y = 2`",
            "en": "Answer `x = 5,  y = 2`"
          }
        ]
      },
      {
        "id": "t1",
        "group": "g1",
        "label": "1",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`2x + 3y + 4z = 20`\n`3x − 2y + 5z = 13`\n`4x + 5y − 2z = 18`\nכתבו את התשובה כך: x = …, y = …, z = …\nאפשר לכתוב שברים, למשל 3/4.",
          "ru": "Реши систему уравнений\n`2x + 3y + 4z = 20`\n`3x − 2y + 5z = 13`\n`4x + 5y − 2z = 18`\nЗапиши ответ так: x = …, y = …, z = …\nМожно писать дроби, например 3/4.",
          "en": "Solve the system of equations\n`2x + 3y + 4z = 20`\n`3x − 2y + 5z = 13`\n`4x + 5y − 2z = 18`\nWrite the answer like this: x = …, y = …, z = …\nFractions are fine, e.g. 3/4."
        },
        "example": {
          "he": "המטריצה המורחבת:\n```\nR1  ( 1  2  3 | 6 )\nR2  ( 2  −1  1 | 2 )\nR3  ( 3  1  −2 | 2 )\n```\nמאפסים את x ב־R2 וב־R3, ואחר כך את y ב־R3:\n```\nR2 ← R2 − 2R1   ( 0  −5  −5 | −10 )\nR3 ← R3 − 3R1   ( 0  −5  −11 | −16 )\nR3 ← R3 − R2    ( 0  0  −6 | −6 )\n```\nהצבה לאחור, מלמטה למעלה:\n```\n−6z = −6 → z = 1\n−5y − 5z = −10 → y = 1\nx + 2y + 3z = 6 → x = 1\n```",
          "ru": "Расширенная матрица:\n```\nR1  ( 1  2  3 | 6 )\nR2  ( 2  −1  1 | 2 )\nR3  ( 3  1  −2 | 2 )\n```\nОбнуляем x в R2 и R3, потом y в R3:\n```\nR2 ← R2 − 2R1   ( 0  −5  −5 | −10 )\nR3 ← R3 − 3R1   ( 0  −5  −11 | −16 )\nR3 ← R3 − R2    ( 0  0  −6 | −6 )\n```\nОбратный ход, снизу вверх:\n```\n−6z = −6 → z = 1\n−5y − 5z = −10 → y = 1\nx + 2y + 3z = 6 → x = 1\n```",
          "en": "The augmented matrix:\n```\nR1  ( 1  2  3 | 6 )\nR2  ( 2  −1  1 | 2 )\nR3  ( 3  1  −2 | 2 )\n```\nZero out x in R2 and R3, then y in R3:\n```\nR2 ← R2 − 2R1   ( 0  −5  −5 | −10 )\nR3 ← R3 − 3R1   ( 0  −5  −11 | −16 )\nR3 ← R3 − R2    ( 0  0  −6 | −6 )\n```\nBack substitution, bottom to top:\n```\n−6z = −6 → z = 1\n−5y − 5z = −10 → y = 1\nx + 2y + 3z = 6 → x = 1\n```"
        },
        "answer": {
          "accept": [
            "x = 83/32, y = 37/16, z = 63/32",
            "x=83/32, y=37/16, z=63/32",
            "x = 83/32; y = 37/16; z = 63/32",
            "x=83/32,y=37/16,z=63/32",
            "x = 83/32, у = 37/16, z = 63/32",
            "x=83/32, у=37/16, z=63/32",
            "x = 83/32; у = 37/16; z = 63/32",
            "x=83/32,у=37/16,z=63/32",
            "(83/32, 37/16, 63/32)",
            "(83/32,37/16,63/32)",
            "83/32, 37/16, 63/32",
            "83/32,37/16,63/32",
            "83/32; 37/16; 63/32",
            "x = 83/32, y = 37/16, z = 1.96875",
            "x=83/32, y=37/16, z=1.96875",
            "x = 83/32; y = 37/16; z = 1.96875",
            "x=83/32,y=37/16,z=1.96875",
            "x = 83/32, у = 37/16, z = 1.96875",
            "x=83/32, у=37/16, z=1.96875",
            "x = 83/32; у = 37/16; z = 1.96875",
            "x=83/32,у=37/16,z=1.96875",
            "(83/32, 37/16, 1.96875)",
            "(83/32,37/16,1.96875)",
            "83/32, 37/16, 1.96875",
            "83/32,37/16,1.96875",
            "83/32; 37/16; 1.96875",
            "x = 83/32, y = 2.3125, z = 63/32",
            "x=83/32, y=2.3125, z=63/32",
            "x = 83/32; y = 2.3125; z = 63/32",
            "x=83/32,y=2.3125,z=63/32",
            "x = 83/32, у = 2.3125, z = 63/32",
            "x=83/32, у=2.3125, z=63/32",
            "x = 83/32; у = 2.3125; z = 63/32",
            "x=83/32,у=2.3125,z=63/32",
            "(83/32, 2.3125, 63/32)",
            "(83/32,2.3125,63/32)",
            "83/32, 2.3125, 63/32",
            "83/32,2.3125,63/32",
            "83/32; 2.3125; 63/32",
            "x = 83/32, y = 2.3125, z = 1.96875",
            "x=83/32, y=2.3125, z=1.96875",
            "x = 83/32; y = 2.3125; z = 1.96875",
            "x=83/32,y=2.3125,z=1.96875",
            "x = 83/32, у = 2.3125, z = 1.96875",
            "x=83/32, у=2.3125, z=1.96875",
            "x = 83/32; у = 2.3125; z = 1.96875",
            "x=83/32,у=2.3125,z=1.96875",
            "(83/32, 2.3125, 1.96875)",
            "(83/32,2.3125,1.96875)",
            "83/32, 2.3125, 1.96875",
            "83/32,2.3125,1.96875",
            "83/32; 2.3125; 1.96875",
            "x = 2.59375, y = 37/16, z = 63/32",
            "x=2.59375, y=37/16, z=63/32",
            "x = 2.59375; y = 37/16; z = 63/32",
            "x=2.59375,y=37/16,z=63/32",
            "x = 2.59375, у = 37/16, z = 63/32",
            "x=2.59375, у=37/16, z=63/32",
            "x = 2.59375; у = 37/16; z = 63/32",
            "x=2.59375,у=37/16,z=63/32",
            "(2.59375, 37/16, 63/32)",
            "(2.59375,37/16,63/32)",
            "2.59375, 37/16, 63/32",
            "2.59375,37/16,63/32",
            "2.59375; 37/16; 63/32",
            "x = 2.59375, y = 37/16, z = 1.96875",
            "x=2.59375, y=37/16, z=1.96875",
            "x = 2.59375; y = 37/16; z = 1.96875",
            "x=2.59375,y=37/16,z=1.96875",
            "x = 2.59375, у = 37/16, z = 1.96875",
            "x=2.59375, у=37/16, z=1.96875",
            "x = 2.59375; у = 37/16; z = 1.96875",
            "x=2.59375,у=37/16,z=1.96875",
            "(2.59375, 37/16, 1.96875)",
            "(2.59375,37/16,1.96875)",
            "2.59375, 37/16, 1.96875",
            "2.59375,37/16,1.96875",
            "2.59375; 37/16; 1.96875",
            "x = 2.59375, y = 2.3125, z = 63/32",
            "x=2.59375, y=2.3125, z=63/32",
            "x = 2.59375; y = 2.3125; z = 63/32",
            "x=2.59375,y=2.3125,z=63/32",
            "x = 2.59375, у = 2.3125, z = 63/32",
            "x=2.59375, у=2.3125, z=63/32",
            "x = 2.59375; у = 2.3125; z = 63/32",
            "x=2.59375,у=2.3125,z=63/32",
            "(2.59375, 2.3125, 63/32)",
            "(2.59375,2.3125,63/32)",
            "2.59375, 2.3125, 63/32",
            "2.59375,2.3125,63/32",
            "2.59375; 2.3125; 63/32",
            "x = 2.59375, y = 2.3125, z = 1.96875",
            "x=2.59375, y=2.3125, z=1.96875",
            "x = 2.59375; y = 2.3125; z = 1.96875",
            "x=2.59375,y=2.3125,z=1.96875",
            "x = 2.59375, у = 2.3125, z = 1.96875",
            "x=2.59375, у=2.3125, z=1.96875",
            "x = 2.59375; у = 2.3125; z = 1.96875",
            "x=2.59375,у=2.3125,z=1.96875",
            "(2.59375, 2.3125, 1.96875)",
            "(2.59375,2.3125,1.96875)",
            "2.59375, 2.3125, 1.96875",
            "2.59375,2.3125,1.96875",
            "2.59375; 2.3125; 1.96875"
          ]
        },
        "hints": [
          {
            "he": "כותבים מטריצה מורחבת ומאפסים את מה שמתחת לאלכסון: קודם בעמודה הראשונה, אחר כך בשנייה.",
            "ru": "Записываем расширенную матрицу и обнуляем всё под диагональю: сначала в первом столбце, потом во втором.",
            "en": "Write the augmented matrix and make zeros under the diagonal: first in column one, then in column two."
          },
          {
            "he": "צעד ראשון `R2 ← 2R2 − 3R1`",
            "ru": "Первый шаг `R2 ← 2R2 − 3R1`",
            "en": "First step `R2 ← 2R2 − 3R1`"
          },
          {
            "he": "בהמשך מקבלים `R2  ( 0  −13  −2 | −34 )`",
            "ru": "Дальше получится `R2  ( 0  −13  −2 | −34 )`",
            "en": "Next you get `R2  ( 0  −13  −2 | −34 )`"
          }
        ],
        "solution": [
          {
            "he": "כותבים את המקדמים במטריצה מורחבת",
            "ru": "Записываем коэффициенты в расширенную матрицу",
            "en": "Write the coefficients as an augmented matrix"
          },
          "R1  ( 2   3   4 | 20 )",
          "R2  ( 3  −2   5 | 13 )",
          "R3  ( 4   5  −2 | 18 )",
          {
            "he": "מאפסים את x בשורה 2",
            "ru": "Обнуляем x во второй строке",
            "en": "Make x zero in row 2"
          },
          "R2 ← 2R2 − 3R1",
          "R2  ( 0  −13  −2 | −34 )",
          {
            "he": "מאפסים את x בשורה 3",
            "ru": "Обнуляем x в третьей строке",
            "en": "Make x zero in row 3"
          },
          "R3 ← R3 − 2R1",
          "R3  ( 0  −1  −10 | −22 )",
          {
            "he": "מאפסים את y בשורה 3",
            "ru": "Обнуляем y в третьей строке",
            "en": "Make y zero in row 3"
          },
          "R3 ← −13R3 + R2",
          "R3  ( 0   0  128 | 252 )",
          {
            "he": "חוזרים למשוואות, מהשורה התחתונה למעלה",
            "ru": "Возвращаемся к уравнениям, снизу вверх",
            "en": "Back to equations, from the bottom row up"
          },
          "128z = 252",
          "z = 252/128",
          "z = 63/32",
          "−13y − 2z = −34",
          "−13y − 2 × 63/32 = −34",
          "−13y − 63/16 = −34",
          "−13y = −34 + 63/16",
          "−13y = −481/16",
          "y = 37/16",
          "2x + 3y + 4z = 20",
          "2x + 3 × 37/16 + 4 × 63/32 = 20",
          "2x + 111/16 + 63/8 = 20",
          "2x + 237/16 = 20",
          "2x = 83/16",
          "x = 83/32",
          {
            "he": "תשובה `x = 83/32,  y = 37/16,  z = 63/32`",
            "ru": "Ответ `x = 83/32,  y = 37/16,  z = 63/32`",
            "en": "Answer `x = 83/32,  y = 37/16,  z = 63/32`"
          },
          {
            "he": "בעשרוני `x ≈ 2.59`, `y ≈ 2.31`, `z ≈ 1.97`.",
            "ru": "В десятичных `x ≈ 2.59`, `y ≈ 2.31`, `z ≈ 1.97`.",
            "en": "As decimals `x ≈ 2.59`, `y ≈ 2.31`, `z ≈ 1.97`."
          }
        ]
      },
      {
        "id": "t4",
        "group": "g4",
        "label": "4",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`6x + 2y − 3z = 13`\n`3x + 4y + 2z = 23`\n`2x − 3y + 5z = 10`\nכתבו את התשובה כך: x = …, y = …, z = …\nאפשר לכתוב שברים, למשל 3/4.",
          "ru": "Реши систему уравнений\n`6x + 2y − 3z = 13`\n`3x + 4y + 2z = 23`\n`2x − 3y + 5z = 10`\nЗапиши ответ так: x = …, y = …, z = …\nМожно писать дроби, например 3/4.",
          "en": "Solve the system of equations\n`6x + 2y − 3z = 13`\n`3x + 4y + 2z = 23`\n`2x − 3y + 5z = 10`\nWrite the answer like this: x = …, y = …, z = …\nFractions are fine, e.g. 3/4."
        },
        "example": {
          "he": "המטריצה המורחבת:\n```\nR1  ( 1  −1  2 | 4 )\nR2  ( 3  1  1 | 7 )\nR3  ( 2  3  −1 | 3 )\n```\nמאפסים את x ב־R2 וב־R3, ואחר כך את y ב־R3:\n```\nR2 ← R2 − 3R1    ( 0  4  −5 | −5 )\nR3 ← R3 − 2R1    ( 0  5  −5 | −5 )\nR3 ← 4R3 − 5R2   ( 0  0  5 | 5 )\n```\nהצבה לאחור, מלמטה למעלה:\n```\n5z = 5 → z = 1\n4y − 5z = −5 → y = 0\nx − y + 2z = 4 → x = 2\n```",
          "ru": "Расширенная матрица:\n```\nR1  ( 1  −1  2 | 4 )\nR2  ( 3  1  1 | 7 )\nR3  ( 2  3  −1 | 3 )\n```\nОбнуляем x в R2 и R3, потом y в R3:\n```\nR2 ← R2 − 3R1    ( 0  4  −5 | −5 )\nR3 ← R3 − 2R1    ( 0  5  −5 | −5 )\nR3 ← 4R3 − 5R2   ( 0  0  5 | 5 )\n```\nОбратный ход, снизу вверх:\n```\n5z = 5 → z = 1\n4y − 5z = −5 → y = 0\nx − y + 2z = 4 → x = 2\n```",
          "en": "The augmented matrix:\n```\nR1  ( 1  −1  2 | 4 )\nR2  ( 3  1  1 | 7 )\nR3  ( 2  3  −1 | 3 )\n```\nZero out x in R2 and R3, then y in R3:\n```\nR2 ← R2 − 3R1    ( 0  4  −5 | −5 )\nR3 ← R3 − 2R1    ( 0  5  −5 | −5 )\nR3 ← 4R3 − 5R2   ( 0  0  5 | 5 )\n```\nBack substitution, bottom to top:\n```\n5z = 5 → z = 1\n4y − 5z = −5 → y = 0\nx − y + 2z = 4 → x = 2\n```"
        },
        "answer": {
          "accept": [
            "x = 95/37, y = 95/37, z = 93/37",
            "x=95/37, y=95/37, z=93/37",
            "x = 95/37; y = 95/37; z = 93/37",
            "x=95/37,y=95/37,z=93/37",
            "x = 95/37, у = 95/37, z = 93/37",
            "x=95/37, у=95/37, z=93/37",
            "x = 95/37; у = 95/37; z = 93/37",
            "x=95/37,у=95/37,z=93/37",
            "(95/37, 95/37, 93/37)",
            "(95/37,95/37,93/37)",
            "95/37, 95/37, 93/37",
            "95/37,95/37,93/37",
            "95/37; 95/37; 93/37"
          ]
        },
        "hints": [
          {
            "he": "כותבים מטריצה מורחבת ומאפסים את מה שמתחת לאלכסון: קודם בעמודה הראשונה, אחר כך בשנייה.",
            "ru": "Записываем расширенную матрицу и обнуляем всё под диагональю: сначала в первом столбце, потом во втором.",
            "en": "Write the augmented matrix and make zeros under the diagonal: first in column one, then in column two."
          },
          {
            "he": "צעד ראשון `R2 ← 2R2 − R1`",
            "ru": "Первый шаг `R2 ← 2R2 − R1`",
            "en": "First step `R2 ← 2R2 − R1`"
          },
          {
            "he": "בהמשך מקבלים `R2  ( 0  6  7 | 33 )`",
            "ru": "Дальше получится `R2  ( 0  6  7 | 33 )`",
            "en": "Next you get `R2  ( 0  6  7 | 33 )`"
          }
        ],
        "solution": [
          {
            "he": "מטריצה מורחבת",
            "ru": "Расширенная матрица",
            "en": "The augmented matrix"
          },
          "R1  ( 6   2  −3 | 13 )",
          "R2  ( 3   4   2 | 23 )",
          "R3  ( 2  −3   5 | 10 )",
          {
            "he": "מאפסים את x בשורה 2",
            "ru": "Обнуляем x во второй строке",
            "en": "Make x zero in row 2"
          },
          "R2 ← 2R2 − R1",
          "R2  ( 0  6  7 | 33 )",
          {
            "he": "מאפסים את x בשורה 3",
            "ru": "Обнуляем x в третьей строке",
            "en": "Make x zero in row 3"
          },
          "R3 ← 3R3 − R1",
          "R3  ( 0  −11  18 | 17 )",
          {
            "he": "מאפסים את y בשורה 3",
            "ru": "Обнуляем y в третьей строке",
            "en": "Make y zero in row 3"
          },
          "R3 ← 6R3 + 11R2",
          "R3  ( 0   0  185 | 465 )",
          {
            "he": "חוזרים למשוואות, מהשורה התחתונה למעלה",
            "ru": "Возвращаемся к уравнениям, снизу вверх",
            "en": "Back to equations, from the bottom row up"
          },
          "185z = 465",
          "z = 465/185",
          "z = 93/37",
          "6y + 7z = 33",
          "6y + 7 × 93/37 = 33",
          "6y + 651/37 = 33",
          "6y = 33 − 651/37",
          "6y = 570/37",
          "y = 95/37",
          "6x + 2y − 3z = 13",
          "6x + 2 × 95/37 − 3 × 93/37 = 13",
          "6x + 190/37 − 279/37 = 13",
          "6x − 89/37 = 13",
          "6x = 570/37",
          "x = 95/37",
          {
            "he": "תשובה `x = 95/37,  y = 95/37,  z = 93/37`",
            "ru": "Ответ `x = 95/37,  y = 95/37,  z = 93/37`",
            "en": "Answer `x = 95/37,  y = 95/37,  z = 93/37`"
          },
          {
            "he": "בעשרוני `x ≈ 2.57`, `y ≈ 2.57`, `z ≈ 2.51`.",
            "ru": "В десятичных `x ≈ 2.57`, `y ≈ 2.57`, `z ≈ 2.51`.",
            "en": "As decimals `x ≈ 2.57`, `y ≈ 2.57`, `z ≈ 2.51`."
          }
        ]
      },
      {
        "id": "t2",
        "group": "more",
        "label": "2",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`5x + 2y + 3z = 26`\n`2x + 4y − 2z = 4`\n`3x − 3y + 4z = 11`\nכתבו את התשובה כך: x = …, y = …, z = …\nאפשר לכתוב שברים, למשל 3/4.",
          "ru": "Реши систему уравнений\n`5x + 2y + 3z = 26`\n`2x + 4y − 2z = 4`\n`3x − 3y + 4z = 11`\nЗапиши ответ так: x = …, y = …, z = …\nМожно писать дроби, например 3/4.",
          "en": "Solve the system of equations\n`5x + 2y + 3z = 26`\n`2x + 4y − 2z = 4`\n`3x − 3y + 4z = 11`\nWrite the answer like this: x = …, y = …, z = …\nFractions are fine, e.g. 3/4."
        },
        "example": {
          "he": "המטריצה המורחבת:\n```\nR1  ( 1  1  2 | 3 )\nR2  ( 2  3  1 | 1 )\nR3  ( 3  −1  1 | 12 )\n```\nמאפסים את x ב־R2 וב־R3, ואחר כך את y ב־R3:\n```\nR2 ← R2 − 2R1   ( 0  1  −3 | −5 )\nR3 ← R3 − 3R1   ( 0  −4  −5 | 3 )\nR3 ← R3 + 4R2   ( 0  0  −17 | −17 )\n```\nהצבה לאחור, מלמטה למעלה:\n```\n−17z = −17 → z = 1\ny − 3z = −5 → y = −2\nx + y + 2z = 3 → x = 3\n```",
          "ru": "Расширенная матрица:\n```\nR1  ( 1  1  2 | 3 )\nR2  ( 2  3  1 | 1 )\nR3  ( 3  −1  1 | 12 )\n```\nОбнуляем x в R2 и R3, потом y в R3:\n```\nR2 ← R2 − 2R1   ( 0  1  −3 | −5 )\nR3 ← R3 − 3R1   ( 0  −4  −5 | 3 )\nR3 ← R3 + 4R2   ( 0  0  −17 | −17 )\n```\nОбратный ход, снизу вверх:\n```\n−17z = −17 → z = 1\ny − 3z = −5 → y = −2\nx + y + 2z = 3 → x = 3\n```",
          "en": "The augmented matrix:\n```\nR1  ( 1  1  2 | 3 )\nR2  ( 2  3  1 | 1 )\nR3  ( 3  −1  1 | 12 )\n```\nZero out x in R2 and R3, then y in R3:\n```\nR2 ← R2 − 2R1   ( 0  1  −3 | −5 )\nR3 ← R3 − 3R1   ( 0  −4  −5 | 3 )\nR3 ← R3 + 4R2   ( 0  0  −17 | −17 )\n```\nBack substitution, bottom to top:\n```\n−17z = −17 → z = 1\ny − 3z = −5 → y = −2\nx + y + 2z = 3 → x = 3\n```"
        },
        "answer": {
          "accept": [
            "x = −1/2, y = 9/2, z = 13/2",
            "x=−1/2, y=9/2, z=13/2",
            "x = −1/2; y = 9/2; z = 13/2",
            "x=−1/2,y=9/2,z=13/2",
            "x = −1/2, у = 9/2, z = 13/2",
            "x=−1/2, у=9/2, z=13/2",
            "(−1/2, 9/2, 13/2)",
            "(−1/2,9/2,13/2)",
            "−1/2, 9/2, 13/2",
            "−1/2,9/2,13/2",
            "−1/2; 9/2; 13/2",
            "x = −1/2, y = 9/2, z = 6.5",
            "x=−1/2, y=9/2, z=6.5",
            "x = −1/2; y = 9/2; z = 6.5",
            "x=−1/2,y=9/2,z=6.5",
            "x = −1/2, у = 9/2, z = 6.5",
            "x=−1/2, у=9/2, z=6.5",
            "(−1/2, 9/2, 6.5)",
            "(−1/2,9/2,6.5)",
            "−1/2, 9/2, 6.5",
            "−1/2,9/2,6.5",
            "−1/2; 9/2; 6.5",
            "x = −1/2, y = 4.5, z = 13/2",
            "x=−1/2, y=4.5, z=13/2",
            "x = −1/2; y = 4.5; z = 13/2",
            "x=−1/2,y=4.5,z=13/2",
            "x = −1/2, у = 4.5, z = 13/2",
            "x=−1/2, у=4.5, z=13/2",
            "(−1/2, 4.5, 13/2)",
            "(−1/2,4.5,13/2)",
            "−1/2, 4.5, 13/2",
            "−1/2,4.5,13/2",
            "−1/2; 4.5; 13/2",
            "x = −1/2, y = 4.5, z = 6.5",
            "x=−1/2, y=4.5, z=6.5",
            "x = −1/2; y = 4.5; z = 6.5",
            "x=−1/2,y=4.5,z=6.5",
            "x = −1/2, у = 4.5, z = 6.5",
            "x=−1/2, у=4.5, z=6.5",
            "(−1/2, 4.5, 6.5)",
            "(−1/2,4.5,6.5)",
            "−1/2, 4.5, 6.5",
            "−1/2,4.5,6.5",
            "−1/2; 4.5; 6.5",
            "x = −0.5, y = 9/2, z = 13/2",
            "x=−0.5, y=9/2, z=13/2",
            "x = −0.5; y = 9/2; z = 13/2",
            "x=−0.5,y=9/2,z=13/2",
            "x = −0.5, у = 9/2, z = 13/2",
            "x=−0.5, у=9/2, z=13/2",
            "(−0.5, 9/2, 13/2)",
            "(−0.5,9/2,13/2)",
            "−0.5, 9/2, 13/2",
            "−0.5,9/2,13/2",
            "−0.5; 9/2; 13/2",
            "x = −0.5, y = 9/2, z = 6.5",
            "x=−0.5, y=9/2, z=6.5",
            "x = −0.5; y = 9/2; z = 6.5",
            "x=−0.5,y=9/2,z=6.5",
            "x = −0.5, у = 9/2, z = 6.5",
            "x=−0.5, у=9/2, z=6.5",
            "(−0.5, 9/2, 6.5)",
            "(−0.5,9/2,6.5)",
            "−0.5, 9/2, 6.5",
            "−0.5,9/2,6.5",
            "−0.5; 9/2; 6.5",
            "x = −0.5, y = 4.5, z = 13/2",
            "x=−0.5, y=4.5, z=13/2",
            "x = −0.5; y = 4.5; z = 13/2",
            "x=−0.5,y=4.5,z=13/2",
            "x = −0.5, у = 4.5, z = 13/2",
            "x=−0.5, у=4.5, z=13/2",
            "(−0.5, 4.5, 13/2)",
            "(−0.5,4.5,13/2)",
            "−0.5, 4.5, 13/2",
            "−0.5,4.5,13/2",
            "−0.5; 4.5; 13/2",
            "x = −0.5, y = 4.5, z = 6.5",
            "x=−0.5, y=4.5, z=6.5",
            "x = −0.5; y = 4.5; z = 6.5",
            "x=−0.5,y=4.5,z=6.5",
            "x = −0.5, у = 4.5, z = 6.5",
            "x=−0.5, у=4.5, z=6.5",
            "(−0.5, 4.5, 6.5)",
            "(−0.5,4.5,6.5)",
            "−0.5, 4.5, 6.5",
            "−0.5,4.5,6.5",
            "−0.5; 4.5; 6.5"
          ]
        },
        "hints": [
          {
            "he": "כותבים מטריצה מורחבת ומאפסים את מה שמתחת לאלכסון: קודם בעמודה הראשונה, אחר כך בשנייה.",
            "ru": "Записываем расширенную матрицу и обнуляем всё под диагональю: сначала в первом столбце, потом во втором.",
            "en": "Write the augmented matrix and make zeros under the diagonal: first in column one, then in column two."
          },
          {
            "he": "צעד ראשון `R2 ← 5R2 − 2R1`",
            "ru": "Первый шаг `R2 ← 5R2 − 2R1`",
            "en": "First step `R2 ← 5R2 − 2R1`"
          }
        ],
        "solution": [
          {
            "he": "מטריצה מורחבת",
            "ru": "Расширенная матрица",
            "en": "The augmented matrix"
          },
          "R1  ( 5  2  3 | 26 )",
          "R2  ( 2  4  −2 | 4 )",
          "R3  ( 3  −3  4 | 11 )",
          {
            "he": "מאפסים את x בשורה 2",
            "ru": "Обнуляем x во второй строке",
            "en": "Make x zero in row 2"
          },
          "R2 ← 5R2 − 2R1",
          "R2  ( 0  16  −16 | −32 )",
          {
            "he": "מחלקים את השורה ב-16",
            "ru": "Делим строку на 16",
            "en": "Divide the row by 16"
          },
          "R2  ( 0  1  −1 | −2 )",
          {
            "he": "מאפסים את x בשורה 3",
            "ru": "Обнуляем x в третьей строке",
            "en": "Make x zero in row 3"
          },
          "R3 ← 5R3 − 3R1",
          "R3  ( 0  −21  11 | −23 )",
          {
            "he": "מאפסים את y בשורה 3",
            "ru": "Обнуляем y в третьей строке",
            "en": "Make y zero in row 3"
          },
          "R3 ← R3 + 21R2",
          "R3  ( 0  0  −10 | −65 )",
          {
            "he": "מחלקים את השורה ב-5",
            "ru": "Делим строку на 5",
            "en": "Divide the row by 5"
          },
          "R3  ( 0  0  −2 | −13 )",
          {
            "he": "חוזרים למשוואות, מהשורה התחתונה למעלה",
            "ru": "Возвращаемся к уравнениям, снизу вверх",
            "en": "Back to equations, from the bottom row up"
          },
          "−2z = −13",
          "z = 13/2",
          "y − z = −2",
          "y − 13/2 = −2",
          "y = 9/2",
          "5x + 2y + 3z = 26",
          "5x + 2 × 9/2 + 3 × 13/2 = 26",
          "5x + 9 + 39/2 = 26",
          "5x + 57/2 = 26",
          "5x = −5/2",
          "x = −1/2",
          {
            "he": "תשובה `x = −1/2,  y = 9/2,  z = 13/2`",
            "ru": "Ответ `x = −1/2,  y = 9/2,  z = 13/2`",
            "en": "Answer `x = −1/2,  y = 9/2,  z = 13/2`"
          }
        ]
      },
      {
        "id": "t8",
        "group": "more",
        "label": "8",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`5x + 3y + 2z = 28`\n`2x + 4y + 3z = 26`\n`3x + 2y + 5z = 30`\nכתבו את התשובה כך: x = …, y = …, z = …\nאפשר לכתוב שברים, למשל 3/4.",
          "ru": "Реши систему уравнений\n`5x + 3y + 2z = 28`\n`2x + 4y + 3z = 26`\n`3x + 2y + 5z = 30`\nЗапиши ответ так: x = …, y = …, z = …\nМожно писать дроби, например 3/4.",
          "en": "Solve the system of equations\n`5x + 3y + 2z = 28`\n`2x + 4y + 3z = 26`\n`3x + 2y + 5z = 30`\nWrite the answer like this: x = …, y = …, z = …\nFractions are fine, e.g. 3/4."
        },
        "example": {
          "he": "המטריצה המורחבת:\n```\nR1  ( 1  2  2 | 3 )\nR2  ( 2  1  3 | 1 )\nR3  ( 3  2  1 | 6 )\n```\nמאפסים את x ב־R2 וב־R3, ואחר כך את y ב־R3:\n```\nR2 ← R2 − 2R1     ( 0  −3  −1 | −5 )\nR3 ← R3 − 3R1     ( 0  −4  −5 | −3 )\nR3 ← −3R3 + 4R2   ( 0  0  11 | −11 )\n```\nהצבה לאחור, מלמטה למעלה:\n```\n11z = −11 → z = −1\n−3y − z = −5 → y = 2\nx + 2y + 2z = 3 → x = 1\n```",
          "ru": "Расширенная матрица:\n```\nR1  ( 1  2  2 | 3 )\nR2  ( 2  1  3 | 1 )\nR3  ( 3  2  1 | 6 )\n```\nОбнуляем x в R2 и R3, потом y в R3:\n```\nR2 ← R2 − 2R1     ( 0  −3  −1 | −5 )\nR3 ← R3 − 3R1     ( 0  −4  −5 | −3 )\nR3 ← −3R3 + 4R2   ( 0  0  11 | −11 )\n```\nОбратный ход, снизу вверх:\n```\n11z = −11 → z = −1\n−3y − z = −5 → y = 2\nx + 2y + 2z = 3 → x = 1\n```",
          "en": "The augmented matrix:\n```\nR1  ( 1  2  2 | 3 )\nR2  ( 2  1  3 | 1 )\nR3  ( 3  2  1 | 6 )\n```\nZero out x in R2 and R3, then y in R3:\n```\nR2 ← R2 − 2R1     ( 0  −3  −1 | −5 )\nR3 ← R3 − 3R1     ( 0  −4  −5 | −3 )\nR3 ← −3R3 + 4R2   ( 0  0  11 | −11 )\n```\nBack substitution, bottom to top:\n```\n11z = −11 → z = −1\n−3y − z = −5 → y = 2\nx + 2y + 2z = 3 → x = 1\n```"
        },
        "answer": {
          "accept": [
            "x = 8/3, y = 8/3, z = 10/3",
            "x=8/3, y=8/3, z=10/3",
            "x = 8/3; y = 8/3; z = 10/3",
            "x=8/3,y=8/3,z=10/3",
            "x = 8/3, у = 8/3, z = 10/3",
            "x=8/3, у=8/3, z=10/3",
            "(8/3, 8/3, 10/3)",
            "(8/3,8/3,10/3)",
            "8/3, 8/3, 10/3",
            "8/3,8/3,10/3",
            "8/3; 8/3; 10/3"
          ]
        },
        "hints": [
          {
            "he": "כותבים מטריצה מורחבת ומאפסים את מה שמתחת לאלכסון: קודם בעמודה הראשונה, אחר כך בשנייה.",
            "ru": "Записываем расширенную матрицу и обнуляем всё под диагональю: сначала в первом столбце, потом во втором.",
            "en": "Write the augmented matrix and make zeros under the diagonal: first in column one, then in column two."
          },
          {
            "he": "צעד ראשון `R2 ← 5R2 − 2R1`",
            "ru": "Первый шаг `R2 ← 5R2 − 2R1`",
            "en": "First step `R2 ← 5R2 − 2R1`"
          }
        ],
        "solution": [
          {
            "he": "מטריצה מורחבת",
            "ru": "Расширенная матрица",
            "en": "The augmented matrix"
          },
          "R1  ( 5  3  2 | 28 )",
          "R2  ( 2  4  3 | 26 )",
          "R3  ( 3  2  5 | 30 )",
          {
            "he": "מאפסים את x בשורה 2",
            "ru": "Обнуляем x во второй строке",
            "en": "Make x zero in row 2"
          },
          "R2 ← 5R2 − 2R1",
          "R2  ( 0  14  11 | 74 )",
          {
            "he": "מאפסים את x בשורה 3",
            "ru": "Обнуляем x в третьей строке",
            "en": "Make x zero in row 3"
          },
          "R3 ← 5R3 − 3R1",
          "R3  ( 0  1  19 | 66 )",
          {
            "he": "מאפסים את y בשורה 3",
            "ru": "Обнуляем y в третьей строке",
            "en": "Make y zero in row 3"
          },
          "R3 ← 14R3 − R2",
          "R3  ( 0  0  255 | 850 )",
          {
            "he": "מחלקים את השורה ב-85",
            "ru": "Делим строку на 85",
            "en": "Divide the row by 85"
          },
          "R3  ( 0  0  3 | 10 )",
          {
            "he": "חוזרים למשוואות, מהשורה התחתונה למעלה",
            "ru": "Возвращаемся к уравнениям, снизу вверх",
            "en": "Back to equations, from the bottom row up"
          },
          "3z = 10",
          "z = 10/3",
          "14y + 11z = 74",
          "14y + 11 × 10/3 = 74",
          "14y + 110/3 = 74",
          "14y = 112/3",
          "y = 8/3",
          "5x + 3y + 2z = 28",
          "5x + 3 × 8/3 + 2 × 10/3 = 28",
          "5x + 8 + 20/3 = 28",
          "5x + 44/3 = 28",
          "5x = 40/3",
          "x = 8/3",
          {
            "he": "תשובה `x = 8/3,  y = 8/3,  z = 10/3`",
            "ru": "Ответ `x = 8/3,  y = 8/3,  z = 10/3`",
            "en": "Answer `x = 8/3,  y = 8/3,  z = 10/3`"
          }
        ]
      },
      {
        "id": "t23",
        "group": "more",
        "label": "23",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`3x + 4y + 5z = 26`\n`4x + 5y + 3z = 25`\n`5x + 3y + 4z = 21`\nכתבו את התשובה כך: x = …, y = …, z = …\nאפשר לכתוב שברים, למשל 3/4.",
          "ru": "Реши систему уравнений\n`3x + 4y + 5z = 26`\n`4x + 5y + 3z = 25`\n`5x + 3y + 4z = 21`\nЗапиши ответ так: x = …, y = …, z = …\nМожно писать дроби, например 3/4.",
          "en": "Solve the system of equations\n`3x + 4y + 5z = 26`\n`4x + 5y + 3z = 25`\n`5x + 3y + 4z = 21`\nWrite the answer like this: x = …, y = …, z = …\nFractions are fine, e.g. 3/4."
        },
        "example": {
          "he": "המטריצה המורחבת:\n```\nR1  ( 1  3  2 | 7 )\nR2  ( 2  1  −1 | −1 )\nR3  ( 1  −2  3 | −2 )\n```\nמאפסים את x ב־R2 וב־R3, ואחר כך את y ב־R3:\n```\nR2 ← R2 − 2R1   ( 0  −5  −5 | −15 )\nR3 ← R3 − R1    ( 0  −5  1 | −9 )\nR3 ← R3 − R2    ( 0  0  6 | 6 )\n```\nהצבה לאחור, מלמטה למעלה:\n```\n6z = 6 → z = 1\n−5y − 5z = −15 → y = 2\nx + 3y + 2z = 7 → x = −1\n```",
          "ru": "Расширенная матрица:\n```\nR1  ( 1  3  2 | 7 )\nR2  ( 2  1  −1 | −1 )\nR3  ( 1  −2  3 | −2 )\n```\nОбнуляем x в R2 и R3, потом y в R3:\n```\nR2 ← R2 − 2R1   ( 0  −5  −5 | −15 )\nR3 ← R3 − R1    ( 0  −5  1 | −9 )\nR3 ← R3 − R2    ( 0  0  6 | 6 )\n```\nОбратный ход, снизу вверх:\n```\n6z = 6 → z = 1\n−5y − 5z = −15 → y = 2\nx + 3y + 2z = 7 → x = −1\n```",
          "en": "The augmented matrix:\n```\nR1  ( 1  3  2 | 7 )\nR2  ( 2  1  −1 | −1 )\nR3  ( 1  −2  3 | −2 )\n```\nZero out x in R2 and R3, then y in R3:\n```\nR2 ← R2 − 2R1   ( 0  −5  −5 | −15 )\nR3 ← R3 − R1    ( 0  −5  1 | −9 )\nR3 ← R3 − R2    ( 0  0  6 | 6 )\n```\nBack substitution, bottom to top:\n```\n6z = 6 → z = 1\n−5y − 5z = −15 → y = 2\nx + 3y + 2z = 7 → x = −1\n```"
        },
        "answer": {
          "accept": [
            "x = 1/3, y = 10/3, z = 7/3",
            "x=1/3, y=10/3, z=7/3",
            "x = 1/3; y = 10/3; z = 7/3",
            "x=1/3,y=10/3,z=7/3",
            "x = 1/3, у = 10/3, z = 7/3",
            "x=1/3, у=10/3, z=7/3",
            "(1/3, 10/3, 7/3)",
            "(1/3,10/3,7/3)",
            "1/3, 10/3, 7/3",
            "1/3,10/3,7/3",
            "1/3; 10/3; 7/3"
          ]
        },
        "hints": [
          {
            "he": "כותבים מטריצה מורחבת ומאפסים את מה שמתחת לאלכסון: קודם בעמודה הראשונה, אחר כך בשנייה.",
            "ru": "Записываем расширенную матрицу и обнуляем всё под диагональю: сначала в первом столбце, потом во втором.",
            "en": "Write the augmented matrix and make zeros under the diagonal: first in column one, then in column two."
          },
          {
            "he": "צעד ראשון `R2 ← 3R2 − 4R1`",
            "ru": "Первый шаг `R2 ← 3R2 − 4R1`",
            "en": "First step `R2 ← 3R2 − 4R1`"
          }
        ],
        "solution": [
          {
            "he": "מטריצה מורחבת",
            "ru": "Расширенная матрица",
            "en": "The augmented matrix"
          },
          "R1  ( 3  4  5 | 26 )",
          "R2  ( 4  5  3 | 25 )",
          "R3  ( 5  3  4 | 21 )",
          {
            "he": "מאפסים את x בשורה 2",
            "ru": "Обнуляем x во второй строке",
            "en": "Make x zero in row 2"
          },
          "R2 ← 3R2 − 4R1",
          "R2  ( 0  −1  −11 | −29 )",
          {
            "he": "מאפסים את x בשורה 3",
            "ru": "Обнуляем x в третьей строке",
            "en": "Make x zero in row 3"
          },
          "R3 ← 3R3 − 5R1",
          "R3  ( 0  −11  −13 | −67 )",
          {
            "he": "מאפסים את y בשורה 3",
            "ru": "Обнуляем y в третьей строке",
            "en": "Make y zero in row 3"
          },
          "R3 ← R3 − 11R2",
          "R3  ( 0  0  108 | 252 )",
          {
            "he": "מחלקים את השורה ב-36",
            "ru": "Делим строку на 36",
            "en": "Divide the row by 36"
          },
          "R3  ( 0  0  3 | 7 )",
          {
            "he": "חוזרים למשוואות, מהשורה התחתונה למעלה",
            "ru": "Возвращаемся к уравнениям, снизу вверх",
            "en": "Back to equations, from the bottom row up"
          },
          "3z = 7",
          "z = 7/3",
          "−y − 11z = −29",
          "−y − 11 × 7/3 = −29",
          "−y − 77/3 = −29",
          "−y = −10/3",
          "y = 10/3",
          "3x + 4y + 5z = 26",
          "3x + 4 × 10/3 + 5 × 7/3 = 26",
          "3x + 40/3 + 35/3 = 26",
          "3x + 25 = 26",
          "3x = 1",
          "x = 1/3",
          {
            "he": "תשובה `x = 1/3,  y = 10/3,  z = 7/3`",
            "ru": "Ответ `x = 1/3,  y = 10/3,  z = 7/3`",
            "en": "Answer `x = 1/3,  y = 10/3,  z = 7/3`"
          }
        ]
      },
      {
        "id": "t25",
        "group": "more",
        "label": "25",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`4x + 3y + 2z = 25`\n`3x + 2y + 4z = 24`\n`2x + 4y + 3z = 23`\nכתבו את התשובה כך: x = …, y = …, z = …\nאפשר לכתוב שברים, למשל 3/4.",
          "ru": "Реши систему уравнений\n`4x + 3y + 2z = 25`\n`3x + 2y + 4z = 24`\n`2x + 4y + 3z = 23`\nЗапиши ответ так: x = …, y = …, z = …\nМожно писать дроби, например 3/4.",
          "en": "Solve the system of equations\n`4x + 3y + 2z = 25`\n`3x + 2y + 4z = 24`\n`2x + 4y + 3z = 23`\nWrite the answer like this: x = …, y = …, z = …\nFractions are fine, e.g. 3/4."
        },
        "example": {
          "he": "המטריצה המורחבת:\n```\nR1  ( 1  1  −1 | 1 )\nR2  ( 2  3  1 | 7 )\nR3  ( 3  −1  2 | 17 )\n```\nמאפסים את x ב־R2 וב־R3, ואחר כך את y ב־R3:\n```\nR2 ← R2 − 2R1   ( 0  1  3 | 5 )\nR3 ← R3 − 3R1   ( 0  −4  5 | 14 )\nR3 ← R3 + 4R2   ( 0  0  17 | 34 )\n```\nהצבה לאחור, מלמטה למעלה:\n```\n17z = 34 → z = 2\ny + 3z = 5 → y = −1\nx + y − z = 1 → x = 4\n```",
          "ru": "Расширенная матрица:\n```\nR1  ( 1  1  −1 | 1 )\nR2  ( 2  3  1 | 7 )\nR3  ( 3  −1  2 | 17 )\n```\nОбнуляем x в R2 и R3, потом y в R3:\n```\nR2 ← R2 − 2R1   ( 0  1  3 | 5 )\nR3 ← R3 − 3R1   ( 0  −4  5 | 14 )\nR3 ← R3 + 4R2   ( 0  0  17 | 34 )\n```\nОбратный ход, снизу вверх:\n```\n17z = 34 → z = 2\ny + 3z = 5 → y = −1\nx + y − z = 1 → x = 4\n```",
          "en": "The augmented matrix:\n```\nR1  ( 1  1  −1 | 1 )\nR2  ( 2  3  1 | 7 )\nR3  ( 3  −1  2 | 17 )\n```\nZero out x in R2 and R3, then y in R3:\n```\nR2 ← R2 − 2R1   ( 0  1  3 | 5 )\nR3 ← R3 − 3R1   ( 0  −4  5 | 14 )\nR3 ← R3 + 4R2   ( 0  0  17 | 34 )\n```\nBack substitution, bottom to top:\n```\n17z = 34 → z = 2\ny + 3z = 5 → y = −1\nx + y − z = 1 → x = 4\n```"
        },
        "answer": {
          "accept": [
            "x = 10/3, y = 7/3, z = 7/3",
            "x=10/3, y=7/3, z=7/3",
            "x = 10/3; y = 7/3; z = 7/3",
            "x=10/3,y=7/3,z=7/3",
            "x = 10/3, у = 7/3, z = 7/3",
            "x=10/3, у=7/3, z=7/3",
            "(10/3, 7/3, 7/3)",
            "(10/3,7/3,7/3)",
            "10/3, 7/3, 7/3",
            "10/3,7/3,7/3",
            "10/3; 7/3; 7/3"
          ]
        },
        "hints": [
          {
            "he": "כותבים מטריצה מורחבת ומאפסים את מה שמתחת לאלכסון: קודם בעמודה הראשונה, אחר כך בשנייה.",
            "ru": "Записываем расширенную матрицу и обнуляем всё под диагональю: сначала в первом столбце, потом во втором.",
            "en": "Write the augmented matrix and make zeros under the diagonal: first in column one, then in column two."
          },
          {
            "he": "צעד ראשון `R2 ← 4R2 − 3R1`",
            "ru": "Первый шаг `R2 ← 4R2 − 3R1`",
            "en": "First step `R2 ← 4R2 − 3R1`"
          }
        ],
        "solution": [
          {
            "he": "מטריצה מורחבת",
            "ru": "Расширенная матрица",
            "en": "The augmented matrix"
          },
          "R1  ( 4  3  2 | 25 )",
          "R2  ( 3  2  4 | 24 )",
          "R3  ( 2  4  3 | 23 )",
          {
            "he": "מאפסים את x בשורה 2",
            "ru": "Обнуляем x во второй строке",
            "en": "Make x zero in row 2"
          },
          "R2 ← 4R2 − 3R1",
          "R2  ( 0  −1  10 | 21 )",
          {
            "he": "מאפסים את x בשורה 3",
            "ru": "Обнуляем x в третьей строке",
            "en": "Make x zero in row 3"
          },
          "R3 ← 2R3 − R1",
          "R3  ( 0  5  4 | 21 )",
          {
            "he": "מאפסים את y בשורה 3",
            "ru": "Обнуляем y в третьей строке",
            "en": "Make y zero in row 3"
          },
          "R3 ← R3 + 5R2",
          "R3  ( 0  0  54 | 126 )",
          {
            "he": "מחלקים את השורה ב-18",
            "ru": "Делим строку на 18",
            "en": "Divide the row by 18"
          },
          "R3  ( 0  0  3 | 7 )",
          {
            "he": "חוזרים למשוואות, מהשורה התחתונה למעלה",
            "ru": "Возвращаемся к уравнениям, снизу вверх",
            "en": "Back to equations, from the bottom row up"
          },
          "3z = 7",
          "z = 7/3",
          "−y + 10z = 21",
          "−y + 10 × 7/3 = 21",
          "−y + 70/3 = 21",
          "−y = −7/3",
          "y = 7/3",
          "4x + 3y + 2z = 25",
          "4x + 3 × 7/3 + 2 × 7/3 = 25",
          "4x + 7 + 14/3 = 25",
          "4x + 35/3 = 25",
          "4x = 40/3",
          "x = 10/3",
          {
            "he": "תשובה `x = 10/3,  y = 7/3,  z = 7/3`",
            "ru": "Ответ `x = 10/3,  y = 7/3,  z = 7/3`",
            "en": "Answer `x = 10/3,  y = 7/3,  z = 7/3`"
          }
        ]
      },
      {
        "id": "k1",
        "group": "cls2",
        "label": "1",
        "kind": "text",
        "text": {
          "he": "מתרגיל כיתה 2 של המרצה. פתרו בשיטת גאוס\n`5x + 9y = 16`\n`x + 2y = 4`\nכתבו כך: x = …, y = …",
          "ru": "Из «תרגיל כיתה 2» преподавателя. Реши методом Гаусса\n`5x + 9y = 16`\n`x + 2y = 4`\nЗапиши так: x = …, y = …",
          "en": "From the teacher's class exercise 2. Solve by Gaussian elimination\n`5x + 9y = 16`\n`x + 2y = 4`\nWrite like: x = …, y = …"
        },
        "example": {
          "he": "המטריצה המורחבת:\n```\nR1  ( 1  3 | 5 )\nR2  ( 2  5 | 8 )\n```\nמאפסים את x בשורה השנייה:\n```\nR2 ← R2 − 2R1   ( 0  −1 | −2 )\n```\nהצבה לאחור:\n```\n−y = −2 → y = 2\nx + 3y = 5 → x = −1\n```",
          "ru": "Расширенная матрица:\n```\nR1  ( 1  3 | 5 )\nR2  ( 2  5 | 8 )\n```\nОбнуляем x во второй строке:\n```\nR2 ← R2 − 2R1   ( 0  −1 | −2 )\n```\nОбратный ход:\n```\n−y = −2 → y = 2\nx + 3y = 5 → x = −1\n```",
          "en": "The augmented matrix:\n```\nR1  ( 1  3 | 5 )\nR2  ( 2  5 | 8 )\n```\nZero out x in the second row:\n```\nR2 ← R2 − 2R1   ( 0  −1 | −2 )\n```\nBack substitution:\n```\n−y = −2 → y = 2\nx + 3y = 5 → x = −1\n```"
        },
        "answer": {
          "accept": [
            "x = −4, y = 4",
            "x=−4, y=4",
            "x = −4; y = 4",
            "x=−4,y=4",
            "x = −4, у = 4",
            "(−4, 4)",
            "(−4,4)",
            "−4, 4",
            "−4,4",
            "−4; 4",
            "x = -4, y = 4",
            "x=-4, y=4",
            "x = -4; y = 4",
            "x=-4,y=4",
            "x = -4, у = 4",
            "(-4, 4)",
            "(-4,4)",
            "-4, 4",
            "-4,4",
            "-4; 4"
          ]
        },
        "hints": [
          {
            "he": "נוח להחליף שורות, כדי ש-1 יעמוד בהתחלה.",
            "ru": "Удобно поменять строки местами, чтобы в начале стояла 1.",
            "en": "Swap the rows so a 1 is at the start."
          }
        ],
        "solution": [
          "R1  ( 1  2 | 4 )",
          "R2  ( 5  9 | 16 )",
          "R2 ← R2 − 5R1",
          "R2  ( 0  −1 | −4 )",
          "−y = −4",
          "y = 4",
          "x + 2 × 4 = 4",
          "x = 4 − 8",
          "x = −4",
          {
            "he": "תשובה `x = −4,  y = 4`",
            "ru": "Ответ `x = −4,  y = 4`",
            "en": "Answer `x = −4,  y = 4`"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "k2",
        "group": "cls2",
        "label": "2",
        "kind": "text",
        "text": {
          "he": "מתרגיל כיתה 2 של המרצה. פתרו בשיטת גאוס\n`13x + 19y = 29`\n`−12x + 45y = −13`\nכתבו כך: x = …, y = … (שברים מותר)",
          "ru": "Из «תרגיל כיתה 2» преподавателя. Реши методом Гаусса\n`13x + 19y = 29`\n`−12x + 45y = −13`\nЗапиши так: x = …, y = … (можно дробями)",
          "en": "From the teacher's class exercise 2. Solve by Gaussian elimination\n`13x + 19y = 29`\n`−12x + 45y = −13`\nWrite like: x = …, y = … (fractions are fine)"
        },
        "example": {
          "he": "המטריצה המורחבת:\n```\nR1  ( 3  2 | 4 )\nR2  ( −2  5 | 9 )\n```\nמאפסים את x בשורה השנייה:\n```\nR2 ← 3R2 + 2R1   ( 0  19 | 35 )\n```\nהצבה לאחור:\n```\n19y = 35 → y = 35/19\n3x + 2y = 4 → x = 2/19\n```",
          "ru": "Расширенная матрица:\n```\nR1  ( 3  2 | 4 )\nR2  ( −2  5 | 9 )\n```\nОбнуляем x во второй строке:\n```\nR2 ← 3R2 + 2R1   ( 0  19 | 35 )\n```\nОбратный ход:\n```\n19y = 35 → y = 35/19\n3x + 2y = 4 → x = 2/19\n```",
          "en": "The augmented matrix:\n```\nR1  ( 3  2 | 4 )\nR2  ( −2  5 | 9 )\n```\nZero out x in the second row:\n```\nR2 ← 3R2 + 2R1   ( 0  19 | 35 )\n```\nBack substitution:\n```\n19y = 35 → y = 35/19\n3x + 2y = 4 → x = 2/19\n```"
        },
        "answer": {
          "accept": [
            "x = 1552/813, y = 179/813",
            "x=1552/813, y=179/813",
            "x = 1552/813; y = 179/813",
            "x=1552/813,y=179/813",
            "x = 1552/813, у = 179/813",
            "(1552/813, 179/813)",
            "(1552/813,179/813)",
            "1552/813, 179/813",
            "1552/813,179/813",
            "1552/813; 179/813"
          ]
        },
        "hints": [
          {
            "he": "כאן התשובה בשברים — זה בסדר. מאפסים את x: `R2 ← 13R2 + 12R1`.",
            "ru": "Здесь ответ в дробях — это нормально. Обнуляем x — `R2 ← 13R2 + 12R1`.",
            "en": "The answer is in fractions here — that is fine. Zero out x — `R2 ← 13R2 + 12R1`."
          }
        ],
        "solution": [
          "R1  ( 13  19 | 29 )",
          "R2  ( −12  45 | −13 )",
          "R2 ← 13R2 + 12R1",
          "13 × 45 + 12 × 19 = 585 + 228 = 813",
          "13 × (−13) + 12 × 29 = −169 + 348 = 179",
          "R2  ( 0  813 | 179 )",
          "y = 179/813",
          "13x = 29 − 19 × 179/813",
          "13x = (23577 − 3401)/813",
          "13x = 20176/813",
          "x = 1552/813",
          {
            "he": "תשובה `x = 1552/813,  y = 179/813`",
            "ru": "Ответ `x = 1552/813,  y = 179/813`",
            "en": "Answer `x = 1552/813,  y = 179/813`"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "k3",
        "group": "cls2",
        "label": "3",
        "kind": "text",
        "text": {
          "he": "מתרגיל כיתה 2 של המרצה. פתרו בשיטת גאוס\n`2x − 5y + 2z = 7`\n`x + 2y − 4z = 3`\n`3x − 4y − 6z = 10`\nכתבו את התשובה כך: x = …, y = …, z = …\nאפשר לכתוב שברים, למשל 3/4.",
          "ru": "Из «תרגיל כיתה 2» преподавателя. Реши методом Гаусса\n`2x − 5y + 2z = 7`\n`x + 2y − 4z = 3`\n`3x − 4y − 6z = 10`\nЗапиши ответ так: x = …, y = …, z = …\nМожно писать дроби, например 3/4.",
          "en": "From the teacher's class exercise 2. Solve by Gaussian elimination\n`2x − 5y + 2z = 7`\n`x + 2y − 4z = 3`\n`3x − 4y − 6z = 10`\nWrite the answer like this: x = …, y = …, z = …\nFractions are fine, e.g. 3/4."
        },
        "example": {
          "he": "המטריצה המורחבת:\n```\nR1  ( 1  −2  1 | 1 )\nR2  ( 2  1  −3 | 2 )\nR3  ( 3  −1  1 | 6 )\n```\nמאפסים את x ב־R2 וב־R3, ואחר כך את y ב־R3:\n```\nR2 ← R2 − 2R1   ( 0  5  −5 | 0 )\nR3 ← R3 − 3R1   ( 0  5  −2 | 3 )\nR3 ← R3 − R2    ( 0  0  3 | 3 )\n```\nהצבה לאחור, מלמטה למעלה:\n```\n3z = 3 → z = 1\n5y − 5z = 0 → y = 1\nx − 2y + z = 1 → x = 2\n```",
          "ru": "Расширенная матрица:\n```\nR1  ( 1  −2  1 | 1 )\nR2  ( 2  1  −3 | 2 )\nR3  ( 3  −1  1 | 6 )\n```\nОбнуляем x в R2 и R3, потом y в R3:\n```\nR2 ← R2 − 2R1   ( 0  5  −5 | 0 )\nR3 ← R3 − 3R1   ( 0  5  −2 | 3 )\nR3 ← R3 − R2    ( 0  0  3 | 3 )\n```\nОбратный ход, снизу вверх:\n```\n3z = 3 → z = 1\n5y − 5z = 0 → y = 1\nx − 2y + z = 1 → x = 2\n```",
          "en": "The augmented matrix:\n```\nR1  ( 1  −2  1 | 1 )\nR2  ( 2  1  −3 | 2 )\nR3  ( 3  −1  1 | 6 )\n```\nZero out x in R2 and R3, then y in R3:\n```\nR2 ← R2 − 2R1   ( 0  5  −5 | 0 )\nR3 ← R3 − 3R1   ( 0  5  −2 | 3 )\nR3 ← R3 − R2    ( 0  0  3 | 3 )\n```\nBack substitution, bottom to top:\n```\n3z = 3 → z = 1\n5y − 5z = 0 → y = 1\nx − 2y + z = 1 → x = 2\n```"
        },
        "answer": {
          "accept": [
            "x = 75/23, y = −2/23, z = 1/46",
            "x=75/23, y=−2/23, z=1/46",
            "x = 75/23; y = −2/23; z = 1/46",
            "x=75/23,y=−2/23,z=1/46",
            "x = 75/23, у = −2/23, z = 1/46",
            "x=75/23, у=−2/23, z=1/46",
            "(75/23, −2/23, 1/46)",
            "(75/23,−2/23,1/46)",
            "75/23, −2/23, 1/46",
            "75/23,−2/23,1/46",
            "75/23; −2/23; 1/46"
          ]
        },
        "hints": [
          {
            "he": "כותבים מטריצה מורחבת ומאפסים את מה שמתחת לאלכסון: קודם בעמודה הראשונה, אחר כך בשנייה.",
            "ru": "Записываем расширенную матрицу и обнуляем всё под диагональю: сначала в первом столбце, потом во втором.",
            "en": "Write the augmented matrix and make zeros under the diagonal: first in column one, then in column two."
          },
          {
            "he": "צעד ראשון: `R2 ← 2R2 − R1`",
            "ru": "Первый шаг: `R2 ← 2R2 − R1`",
            "en": "First step: `R2 ← 2R2 − R1`"
          }
        ],
        "solution": [
          {
            "he": "מטריצה מורחבת",
            "ru": "Расширенная матрица",
            "en": "The augmented matrix"
          },
          "R1  ( 2  −5  2 | 7 )",
          "R2  ( 1  2  −4 | 3 )",
          "R3  ( 3  −4  −6 | 10 )",
          {
            "he": "מאפסים את x בשורה 2",
            "ru": "Обнуляем x во второй строке",
            "en": "Make x zero in row 2"
          },
          "R2 ← 2R2 − R1",
          "R2  ( 0  9  −10 | −1 )",
          {
            "he": "מאפסים את x בשורה 3",
            "ru": "Обнуляем x в третьей строке",
            "en": "Make x zero in row 3"
          },
          "R3 ← 2R3 − 3R1",
          "R3  ( 0  7  −18 | −1 )",
          {
            "he": "מאפסים את y בשורה 3",
            "ru": "Обнуляем y в третьей строке",
            "en": "Make y zero in row 3"
          },
          "R3 ← 9R3 − 7R2",
          "R3  ( 0  0  −92 | −2 )",
          {
            "he": "מחלקים את השורה ב-2",
            "ru": "Делим строку на 2",
            "en": "Divide the row by 2"
          },
          "R3  ( 0  0  −46 | −1 )",
          {
            "he": "חוזרים למשוואות, מהשורה התחתונה למעלה",
            "ru": "Возвращаемся к уравнениям, снизу вверх",
            "en": "Back to equations, from the bottom row up"
          },
          "−46z = −1",
          "z = 1/46",
          "9y − 10z = −1",
          "9y − 10 × 1/46 = −1",
          "9y − 5/23 = −1",
          "9y = −18/23",
          "y = −2/23",
          "2x − 5y + 2z = 7",
          "2x − 5 × (−2/23) + 2 × 1/46 = 7",
          "2x + 10/23 + 1/23 = 7",
          "2x + 11/23 = 7",
          "2x = 150/23",
          "x = 75/23",
          {
            "he": "תשובה: `x = 75/23,  y = −2/23,  z = 1/46`",
            "ru": "Ответ: `x = 75/23,  y = −2/23,  z = 1/46`",
            "en": "Answer: `x = 75/23,  y = −2/23,  z = 1/46`"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "k4",
        "group": "cls2",
        "label": {
          "he": "4 — מבט קדימה",
          "ru": "4 — взгляд вперёд",
          "en": "4 — a look ahead"
        },
        "kind": "choice",
        "text": {
          "he": "מתרגיל כיתה 2 של המרצה. מה יוצא בשיטת גאוס?\n`2x − 3y + 5z = 8`\n`2x + 4y − 6z = −5`\n`x + 2y − 3z = −1`",
          "ru": "Из «תרגיל כיתה 2» преподавателя. Что получится методом Гаусса?\n`2x − 3y + 5z = 8`\n`2x + 4y − 6z = −5`\n`x + 2y − 3z = −1`",
          "en": "From the teacher's class exercise 2. What does Gaussian elimination give?\n`2x − 3y + 5z = 8`\n`2x + 4y − 6z = −5`\n`x + 2y − 3z = −1`"
        },
        "example": {
          "he": "שני מקרים מיוחדים על מערכת קטנה:\n```\nx + y = 2\n2x + 2y = 5\n```\n`R2 ← R2 − 2R1` → `( 0  0 | 1 )`, כלומר `0 = 1`. זה לא ייתכן → אין פתרונות.\n```\nx + y = 2\n2x + 2y = 4\n```\n`R2 ← R2 − 2R1` → `( 0  0 | 0 )`, כלומר `0 = 0`. השורה נעלמה, יש פחות משוואות מנעלמים → אינסוף פתרונות.\nאם בסוף הכול תקין (כמו `3z = 6`) → פתרון אחד.",
          "ru": "Два особых случая на маленькой системе:\n```\nx + y = 2\n2x + 2y = 5\n```\n`R2 ← R2 − 2R1` → `( 0  0 | 1 )`, то есть `0 = 1`. Так не бывает → решений нет.\n```\nx + y = 2\n2x + 2y = 4\n```\n`R2 ← R2 − 2R1` → `( 0  0 | 0 )`, то есть `0 = 0`. Строка исчезла, уравнений меньше, чем неизвестных → бесконечно много решений.\nЕсли в конце всё нормально (как `3z = 6`) → одно решение.",
          "en": "Two special cases on a small system:\n```\nx + y = 2\n2x + 2y = 5\n```\n`R2 ← R2 − 2R1` → `( 0  0 | 1 )`, that is `0 = 1`. That is impossible → no solutions.\n```\nx + y = 2\n2x + 2y = 4\n```\n`R2 ← R2 − 2R1` → `( 0  0 | 0 )`, that is `0 = 0`. The row vanished, there are fewer equations than unknowns → infinitely many solutions.\nIf at the end everything is normal (like `3z = 6`) → one solution."
        },
        "options": [
          {
            "he": "פתרון יחיד",
            "ru": "Одно решение",
            "en": "One solution"
          },
          {
            "he": "אין פתרון",
            "ru": "Решений нет",
            "en": "No solution"
          },
          {
            "he": "אינסוף פתרונות",
            "ru": "Бесконечно много решений",
            "en": "Infinitely many solutions"
          }
        ],
        "answer": {
          "index": 1
        },
        "hints": [
          {
            "he": "השוו את שורה 2 לשורה 3 כפול 2.",
            "ru": "Сравни строку 2 со строкой 3, умноженной на 2.",
            "en": "Compare row 2 with row 3 times 2."
          }
        ],
        "solution": [
          "2 × R3  ( 2  4  −6 | −2 )",
          "R2 ← R2 − 2R3",
          "R2  ( 0  0  0 | −3 )",
          "0 = −3",
          {
            "he": "תשובה: אין פתרון",
            "ru": "Ответ — решений нет",
            "en": "Answer — no solution"
          }
        ],
        "_src": "pass-0311"
      },
      {
        "id": "k5",
        "group": "cls2",
        "label": {
          "he": "5 — מבט קדימה",
          "ru": "5 — взгляд вперёд",
          "en": "5 — a look ahead"
        },
        "kind": "choice",
        "text": {
          "he": "מתרגיל כיתה 2 של המרצה. מה יוצא בשיטת גאוס?\n`2x + 3y − 4z = −2`\n`x − 2y + z = 7`\n`3x + y − 3z = 5`",
          "ru": "Из «תרגיל כיתה 2» преподавателя. Что получится методом Гаусса?\n`2x + 3y − 4z = −2`\n`x − 2y + z = 7`\n`3x + y − 3z = 5`",
          "en": "From the teacher's class exercise 2. What does Gaussian elimination give?\n`2x + 3y − 4z = −2`\n`x − 2y + z = 7`\n`3x + y − 3z = 5`"
        },
        "example": {
          "he": "שני מקרים מיוחדים על מערכת קטנה:\n```\nx + y = 2\n2x + 2y = 5\n```\n`R2 ← R2 − 2R1` → `( 0  0 | 1 )`, כלומר `0 = 1`. זה לא ייתכן → אין פתרונות.\n```\nx + y = 2\n2x + 2y = 4\n```\n`R2 ← R2 − 2R1` → `( 0  0 | 0 )`, כלומר `0 = 0`. השורה נעלמה, יש פחות משוואות מנעלמים → אינסוף פתרונות.\nאם בסוף הכול תקין (כמו `3z = 6`) → פתרון אחד.",
          "ru": "Два особых случая на маленькой системе:\n```\nx + y = 2\n2x + 2y = 5\n```\n`R2 ← R2 − 2R1` → `( 0  0 | 1 )`, то есть `0 = 1`. Так не бывает → решений нет.\n```\nx + y = 2\n2x + 2y = 4\n```\n`R2 ← R2 − 2R1` → `( 0  0 | 0 )`, то есть `0 = 0`. Строка исчезла, уравнений меньше, чем неизвестных → бесконечно много решений.\nЕсли в конце всё нормально (как `3z = 6`) → одно решение.",
          "en": "Two special cases on a small system:\n```\nx + y = 2\n2x + 2y = 5\n```\n`R2 ← R2 − 2R1` → `( 0  0 | 1 )`, that is `0 = 1`. That is impossible → no solutions.\n```\nx + y = 2\n2x + 2y = 4\n```\n`R2 ← R2 − 2R1` → `( 0  0 | 0 )`, that is `0 = 0`. The row vanished, there are fewer equations than unknowns → infinitely many solutions.\nIf at the end everything is normal (like `3z = 6`) → one solution."
        },
        "options": [
          {
            "he": "פתרון יחיד",
            "ru": "Одно решение",
            "en": "One solution"
          },
          {
            "he": "אין פתרון",
            "ru": "Решений нет",
            "en": "No solution"
          },
          {
            "he": "אינסוף פתרונות",
            "ru": "Бесконечно много решений",
            "en": "Infinitely many solutions"
          }
        ],
        "answer": {
          "index": 2
        },
        "hints": [
          {
            "he": "חברו את שורה 1 ושורה 2 ותשוו לשורה 3.",
            "ru": "Сложи строки 1 и 2 и сравни со строкой 3.",
            "en": "Add rows 1 and 2 and compare with row 3."
          }
        ],
        "solution": [
          "R1 + R2  ( 3  1  −3 | 5 )",
          "R3 ← R3 − R1 − R2",
          "R3  ( 0  0  0 | 0 )",
          "0 = 0",
          {
            "he": "נשארו 2 משוואות ל-3 נעלמים. תשובה: אינסוף פתרונות",
            "ru": "Осталось 2 уравнения на 3 неизвестных. Ответ — бесконечно много решений",
            "en": "2 equations are left for 3 unknowns. Answer — infinitely many solutions"
          }
        ],
        "_src": "pass-0311"
      }
    ],
    "ai": [
      {
        "id": "ai1-1",
        "level": 1,
        "label": "1.1",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`3x + 2y = 18`\n`x − 2y = −2`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений\n`3x + 2y = 18`\n`x − 2y = −2`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations\n`3x + 2y = 18`\n`x − 2y = −2`\nWrite the answer like this: x = …, y = …"
        },
        "example": {
          "he": "```\n2x + 3y = 12\nx − 3y = −3\n```\nהמקדמים של y: `3` ו־−3``, אין צורך לכפול.\nהסימנים של y שונים → מחברים:\n```\n3x = 9\nx = 9 / 3 = 3\n```\nמציבים את x במשוואה הראשונה:\n```\n2 × 3 + 3y = 12\n3y = 6\ny = 2\n```\nבדיקה במשוואה השנייה: `1 × 3 − 3 × 2 = −3` ✅",
          "ru": "```\n2x + 3y = 12\nx − 3y = −3\n```\nКоэффициенты при y: `3` и `−3`, умножать ничего не нужно.\nЗнаки при y разные → складываем:\n```\n3x = 9\nx = 9 / 3 = 3\n```\nПодставляем x в первое уравнение:\n```\n2 × 3 + 3y = 12\n3y = 6\ny = 2\n```\nПроверка во втором уравнении: `1 × 3 − 3 × 2 = −3` ✅",
          "en": "```\n2x + 3y = 12\nx − 3y = −3\n```\nThe y coefficients: `3` and `−3`, no need to multiply.\nThe y signs are different → we add:\n```\n3x = 9\nx = 9 / 3 = 3\n```\nPut x into the first equation:\n```\n2 × 3 + 3y = 12\n3y = 6\ny = 2\n```\nCheck in the second equation: `1 × 3 − 3 × 2 = −3` ✅"
        },
        "answer": {
          "accept": [
            "x = 4, y = 3",
            "x=4, y=3",
            "x = 4; y = 3",
            "x=4,y=3",
            "x = 4, у = 3",
            "x=4, у=3",
            "x = 4; у = 3",
            "x=4,у=3",
            "(4, 3)",
            "(4,3)",
            "4, 3",
            "4,3",
            "4; 3"
          ]
        },
        "hints": [
          {
            "he": "אולי מספיק לכפול רק משוואה אחת: חפשו מקדם שמתחלק במקדם המתאים במשוואה השנייה.",
            "ru": "Может, хватит умножить одно уравнение: ищи коэффициент, который делится на соответствующий коэффициент во втором.",
            "en": "Maybe multiplying just one equation is enough: look for a coefficient that is divisible by the matching one in the other equation."
          },
          {
            "he": "צעד ראשון `4x = 16`",
            "ru": "Первый шаг `4x = 16`",
            "en": "First step `4x = 16`"
          },
          {
            "he": "בהמשך מקבלים `x = 4`",
            "ru": "Дальше получится `x = 4`",
            "en": "Next you get `x = 4`"
          }
        ],
        "solution": [
          {
            "he": "כאן `+2y` ו־`−2y` כבר נגדיים — מחברים בלי לכפול",
            "ru": "Здесь `+2y` и `−2y` уже противоположны — складываем без умножения",
            "en": "Here `+2y` and `−2y` are already opposite — add without multiplying"
          },
          "4x = 16",
          {
            "he": "מחלקים את שני האגפים ב־`4`",
            "ru": "Делим обе части на `4`",
            "en": "Divide both sides by `4`"
          },
          "x = 4",
          {
            "he": "מציבים `x = 4` במשוואה הראשונה",
            "ru": "Подставляем `x = 4` в первое уравнение",
            "en": "Substitute `x = 4` into the first equation"
          },
          "12 + 2y = 18",
          "2y = 6",
          "y = 3",
          {
            "he": "תשובה `x = 4,  y = 3`",
            "ru": "Ответ `x = 4,  y = 3`",
            "en": "Answer `x = 4,  y = 3`"
          }
        ]
      },
      {
        "id": "ai1-2",
        "level": 1,
        "label": "1.2",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`4x + 3y = 5`\n`2x − 5y = 9`\nכתבו את התשובה כך: x = …, y = …",
          "ru": "Реши систему уравнений\n`4x + 3y = 5`\n`2x − 5y = 9`\nЗапиши ответ так: x = …, y = …",
          "en": "Solve the system of equations\n`4x + 3y = 5`\n`2x − 5y = 9`\nWrite the answer like this: x = …, y = …"
        },
        "example": {
          "he": "```\n3x + 2y = −1\n4x − 3y = 10\n```\nרוצים להיפטר מ־y. המקדמים של y: `2` ו־−3``. את הראשונה כופלים ב־3, את השנייה ב־2:\n```\n9x + 6y = −3\n8x − 6y = 20\n```\nהסימנים של y שונים → מחברים:\n```\n17x = 17\nx = 17 / 17 = 1\n```\nמציבים את x במשוואה הראשונה:\n```\n3 × 1 + 2y = −1\n2y = −4\ny = −2\n```\nבדיקה במשוואה השנייה: `4 × 1 − 3 × (−2) = 10` ✅",
          "ru": "```\n3x + 2y = −1\n4x − 3y = 10\n```\nХотим убрать y. Коэффициенты при y: `2` и `−3`. Первое умножаем на 3, второе на 2:\n```\n9x + 6y = −3\n8x − 6y = 20\n```\nЗнаки при y разные → складываем:\n```\n17x = 17\nx = 17 / 17 = 1\n```\nПодставляем x в первое уравнение:\n```\n3 × 1 + 2y = −1\n2y = −4\ny = −2\n```\nПроверка во втором уравнении: `4 × 1 − 3 × (−2) = 10` ✅",
          "en": "```\n3x + 2y = −1\n4x − 3y = 10\n```\nWe want to remove y. The y coefficients: `2` and `−3`. Multiply the first by 3, the second by 2:\n```\n9x + 6y = −3\n8x − 6y = 20\n```\nThe y signs are different → we add:\n```\n17x = 17\nx = 17 / 17 = 1\n```\nPut x into the first equation:\n```\n3 × 1 + 2y = −1\n2y = −4\ny = −2\n```\nCheck in the second equation: `4 × 1 − 3 × (−2) = 10` ✅"
        },
        "answer": {
          "accept": [
            "x = 2, y = −1",
            "x=2, y=−1",
            "x = 2; y = −1",
            "x=2,y=−1",
            "x = 2, у = −1",
            "x=2, у=−1",
            "x = 2; у = −1",
            "x=2,у=−1",
            "(2, −1)",
            "(2,−1)",
            "2, −1",
            "2,−1",
            "2; −1"
          ]
        },
        "hints": [
          {
            "he": "אולי מספיק לכפול רק משוואה אחת: חפשו מקדם שמתחלק במקדם המתאים במשוואה השנייה.",
            "ru": "Может, хватит умножить одно уравнение: ищи коэффициент, который делится на соответствующий коэффициент во втором.",
            "en": "Maybe multiplying just one equation is enough: look for a coefficient that is divisible by the matching one in the other equation."
          },
          {
            "he": "צעד ראשון `4x − 10y = 18`",
            "ru": "Первый шаг `4x − 10y = 18`",
            "en": "First step `4x − 10y = 18`"
          },
          {
            "he": "בהמשך מקבלים `13y = −13`",
            "ru": "Дальше получится `13y = −13`",
            "en": "Next you get `13y = −13`"
          }
        ],
        "solution": [
          {
            "he": "`4x` מתחלק ב־`2x` כופלים את השנייה ב־`2`",
            "ru": "`4x` делится на `2x` умножаем второе на `2`",
            "en": "`4x` is divisible by `2x` multiply the second by `2`"
          },
          "4x − 10y = 18",
          {
            "he": "`4x` ו־`4x` — אותו סימן, לכן מחסירים (הראשונה פחות החדשה)",
            "ru": "`4x` и `4x` — знак одинаковый, поэтому вычитаем (первое минус новое)",
            "en": "`4x` and `4x` — same sign, so subtract (the first minus the new one)"
          },
          "(4x + 3y) − (4x − 10y) = 5 − 18",
          "13y = −13",
          {
            "he": "מחלקים את שני האגפים ב־`13`",
            "ru": "Делим обе части на `13`",
            "en": "Divide both sides by `13`"
          },
          "y = −1",
          {
            "he": "מציבים `y = −1` במשוואה הראשונה",
            "ru": "Подставляем `y = −1` в первое уравнение",
            "en": "Substitute `y = −1` into the first equation"
          },
          "4x − 3 = 5",
          "4x = 8",
          "x = 2",
          {
            "he": "תשובה `x = 2,  y = −1`",
            "ru": "Ответ `x = 2,  y = −1`",
            "en": "Answer `x = 2,  y = −1`"
          }
        ]
      },
      {
        "id": "ai1-3",
        "level": 1,
        "label": "1.3",
        "kind": "choice",
        "text": {
          "he": "במערכת `5x + 2y = 27`, `7x − 3y = 32` רוצים לצמצם את y. מה עושים?",
          "ru": "В системе `5x + 2y = 27`, `7x − 3y = 32` хотим убрать y. Что делаем?",
          "en": "In the system `5x + 2y = 27`, `7x − 3y = 32` we want to eliminate y. What do we do?"
        },
        "example": {
          "he": "המערכת `3x + 4y = 10`, `2x − 5y = −1`. רוצים להיפטר מ־y: המקדמים 4 ו־5 → המספר המשותף 20 → את הראשונה כופלים ב־5, את השנייה ב־4 → מקבלים `20y` ו־−20`y`. הסימנים שונים → מחברים, ו־y נעלם. אם הסימנים היו זהים, היה צריך לחסר.",
          "ru": "Система `3x + 4y = 10`, `2x − 5y = −1`. Хотим убрать y: коэффициенты 4 и 5 → общее число 20 → первое умножаем на 5, второе на 4 → получаем `20y` и `−20y`. Знаки разные → складываем, и y исчезает. Если бы знаки были одинаковые, надо было бы вычитать.",
          "en": "The system `3x + 4y = 10`, `2x − 5y = −1`. We want to remove y: the coefficients 4 and 5 → common number 20 → multiply the first by 5, the second by 4 → we get `20y` and `−20y`. The signs differ → add, and y disappears. If the signs were the same, you would subtract."
        },
        "options": [
          {
            "he": "כופלים את הראשונה ב־3 ואת השנייה ב־2, ומחברים",
            "ru": "Первое умножаем на 3, второе на 2 и складываем",
            "en": "Multiply the first by 3 and the second by 2, then add"
          },
          {
            "he": "כופלים את הראשונה ב־3 ואת השנייה ב־2, ומחסירים",
            "ru": "Первое умножаем на 3, второе на 2 и вычитаем",
            "en": "Multiply the first by 3 and the second by 2, then subtract"
          },
          {
            "he": "כופלים את הראשונה ב־2 ואת השנייה ב־3, ומחברים",
            "ru": "Первое умножаем на 2, второе на 3 и складываем",
            "en": "Multiply the first by 2 and the second by 3, then add"
          }
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "המטרה: שהמקדמים של y יהיו שווים בגודלם ועם סימנים שונים.",
            "ru": "Цель: чтобы коэффициенты при y стали равны по модулю и с разными знаками.",
            "en": "The goal: make the y coefficients equal in size with opposite signs."
          },
          {
            "he": "`2y × 3 = 6y`, `−3y × 2 = −6y`. סימנים שונים — מה עושים?",
            "ru": "`2y × 3 = 6y`, `−3y × 2 = −6y`. Знаки разные — что делаем?",
            "en": "`2y × 3 = 6y`, `−3y × 2 = −6y`. Different signs — what do we do?"
          }
        ],
        "solution": [
          {
            "he": "המקדמים של y `2` ו־`−3`. המספר המשותף `6`.",
            "ru": "Коэффициенты при y `2` и `−3`. Общее число `6`.",
            "en": "The y coefficients `2` and `−3`. Common number `6`."
          },
          "15x + 6y = 81",
          "14x − 6y = 64",
          {
            "he": "`+6y` ו־`−6y` — סימנים שונים, לכן מחברים",
            "ru": "`+6y` и `−6y` — знаки разные, поэтому складываем",
            "en": "`+6y` and `−6y` — different signs, so add"
          },
          "29x = 145",
          {
            "he": "תשובה: כופלים ב־3 וב־2, ומחברים",
            "ru": "Ответ: умножаем на 3 и на 2 и складываем",
            "en": "Answer: multiply by 3 and by 2, then add"
          }
        ]
      },
      {
        "id": "ai2-1",
        "level": 2,
        "label": "2.1",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`x + y + z = 6`\n`2x − y + z = 3`\n`x + 2y − z = 2`\nכתבו את התשובה כך: x = …, y = …, z = …",
          "ru": "Реши систему уравнений\n`x + y + z = 6`\n`2x − y + z = 3`\n`x + 2y − z = 2`\nЗапиши ответ так: x = …, y = …, z = …",
          "en": "Solve the system of equations\n`x + y + z = 6`\n`2x − y + z = 3`\n`x + 2y − z = 2`\nWrite the answer like this: x = …, y = …, z = …"
        },
        "example": {
          "he": "המטריצה המורחבת:\n```\nR1  ( 1  1  1 | 6 )\nR2  ( 2  1  −1 | 5 )\nR3  ( 1  −1  2 | 6 )\n```\nמאפסים את x ב־R2 וב־R3, ואחר כך את y ב־R3:\n```\nR2 ← R2 − 2R1   ( 0  −1  −3 | −7 )\nR3 ← R3 − R1    ( 0  −2  1 | 0 )\nR3 ← R3 − 2R2   ( 0  0  7 | 14 )\n```\nהצבה לאחור, מלמטה למעלה:\n```\n7z = 14 → z = 2\n−y − 3z = −7 → y = 1\nx + y + z = 6 → x = 3\n```",
          "ru": "Расширенная матрица:\n```\nR1  ( 1  1  1 | 6 )\nR2  ( 2  1  −1 | 5 )\nR3  ( 1  −1  2 | 6 )\n```\nОбнуляем x в R2 и R3, потом y в R3:\n```\nR2 ← R2 − 2R1   ( 0  −1  −3 | −7 )\nR3 ← R3 − R1    ( 0  −2  1 | 0 )\nR3 ← R3 − 2R2   ( 0  0  7 | 14 )\n```\nОбратный ход, снизу вверх:\n```\n7z = 14 → z = 2\n−y − 3z = −7 → y = 1\nx + y + z = 6 → x = 3\n```",
          "en": "The augmented matrix:\n```\nR1  ( 1  1  1 | 6 )\nR2  ( 2  1  −1 | 5 )\nR3  ( 1  −1  2 | 6 )\n```\nZero out x in R2 and R3, then y in R3:\n```\nR2 ← R2 − 2R1   ( 0  −1  −3 | −7 )\nR3 ← R3 − R1    ( 0  −2  1 | 0 )\nR3 ← R3 − 2R2   ( 0  0  7 | 14 )\n```\nBack substitution, bottom to top:\n```\n7z = 14 → z = 2\n−y − 3z = −7 → y = 1\nx + y + z = 6 → x = 3\n```"
        },
        "answer": {
          "accept": [
            "x = 1, y = 2, z = 3",
            "x=1, y=2, z=3",
            "x = 1; y = 2; z = 3",
            "x=1,y=2,z=3",
            "x = 1, у = 2, z = 3",
            "x=1, у=2, z=3",
            "x = 1; у = 2; z = 3",
            "x=1,у=2,z=3",
            "(1, 2, 3)",
            "(1,2,3)",
            "1, 2, 3",
            "1,2,3",
            "1; 2; 3"
          ]
        },
        "hints": [
          {
            "he": "מצמצמים את אותו נעלם משני זוגות של משוואות. מקבלים מערכת של שתי משוואות עם שני נעלמים.",
            "ru": "Убираем одно и то же неизвестное из двух пар уравнений. Получится система из двух уравнений с двумя неизвестными.",
            "en": "Eliminate the same unknown from two pairs of equations. You get a system of two equations in two unknowns."
          },
          {
            "he": "צעד ראשון `2x + 3y = 8`",
            "ru": "Первый шаг `2x + 3y = 8`",
            "en": "First step `2x + 3y = 8`"
          },
          {
            "he": "בהמשך מקבלים `3x + y = 5`",
            "ru": "Дальше получится `3x + y = 5`",
            "en": "Next you get `3x + y = 5`"
          }
        ],
        "solution": [
          {
            "he": "ל־z יש מקדמים `+1`, `+1`, `−1` — נוח לצמצם אותו.",
            "ru": "У z коэффициенты `+1`, `+1`, `−1` — его удобно убрать.",
            "en": "z has coefficients `+1`, `+1`, `−1` — it is easy to eliminate."
          },
          {
            "he": "משוואה 1 + משוואה 3",
            "ru": "Уравнение 1 + уравнение 3",
            "en": "Equation 1 + equation 3"
          },
          "2x + 3y = 8",
          {
            "he": "משוואה 2 + משוואה 3",
            "ru": "Уравнение 2 + уравнение 3",
            "en": "Equation 2 + equation 3"
          },
          "3x + y = 5",
          {
            "he": "עכשיו מערכת של שתי משוואות. כופלים את `3x + y = 5` ב־`3`",
            "ru": "Теперь система из двух уравнений. Умножаем `3x + y = 5` на `3`",
            "en": "Now a system of two equations. Multiply `3x + y = 5` by `3`"
          },
          "9x + 3y = 15",
          {
            "he": "מחסירים ממנה את `2x + 3y = 8`",
            "ru": "Вычитаем из него `2x + 3y = 8`",
            "en": "Subtract `2x + 3y = 8` from it"
          },
          "7x = 7",
          "x = 1",
          "3 + y = 5",
          "y = 2",
          {
            "he": "מציבים במשוואה 1",
            "ru": "Подставляем в уравнение 1",
            "en": "Substitute into equation 1"
          },
          "1 + 2 + z = 6",
          "z = 3",
          {
            "he": "תשובה `x = 1,  y = 2,  z = 3`",
            "ru": "Ответ `x = 1,  y = 2,  z = 3`",
            "en": "Answer `x = 1,  y = 2,  z = 3`"
          }
        ]
      },
      {
        "id": "ai2-2",
        "level": 2,
        "label": "2.2",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`2x + y − z = 3`\n`x − y + 2z = 5`\n`3x + 2y + z = 10`\nכתבו את התשובה כך: x = …, y = …, z = …",
          "ru": "Реши систему уравнений\n`2x + y − z = 3`\n`x − y + 2z = 5`\n`3x + 2y + z = 10`\nЗапиши ответ так: x = …, y = …, z = …",
          "en": "Solve the system of equations\n`2x + y − z = 3`\n`x − y + 2z = 5`\n`3x + 2y + z = 10`\nWrite the answer like this: x = …, y = …, z = …"
        },
        "example": {
          "he": "המטריצה המורחבת:\n```\nR1  ( 1  2  1 | 3 )\nR2  ( 2  −1  3 | 0 )\nR3  ( 3  1  −2 | 9 )\n```\nמאפסים את x ב־R2 וב־R3, ואחר כך את y ב־R3:\n```\nR2 ← R2 − 2R1   ( 0  −5  1 | −6 )\nR3 ← R3 − 3R1   ( 0  −5  −5 | 0 )\nR3 ← R3 − R2    ( 0  0  −6 | 6 )\n```\nהצבה לאחור, מלמטה למעלה:\n```\n−6z = 6 → z = −1\n−5y + z = −6 → y = 1\nx + 2y + z = 3 → x = 2\n```",
          "ru": "Расширенная матрица:\n```\nR1  ( 1  2  1 | 3 )\nR2  ( 2  −1  3 | 0 )\nR3  ( 3  1  −2 | 9 )\n```\nОбнуляем x в R2 и R3, потом y в R3:\n```\nR2 ← R2 − 2R1   ( 0  −5  1 | −6 )\nR3 ← R3 − 3R1   ( 0  −5  −5 | 0 )\nR3 ← R3 − R2    ( 0  0  −6 | 6 )\n```\nОбратный ход, снизу вверх:\n```\n−6z = 6 → z = −1\n−5y + z = −6 → y = 1\nx + 2y + z = 3 → x = 2\n```",
          "en": "The augmented matrix:\n```\nR1  ( 1  2  1 | 3 )\nR2  ( 2  −1  3 | 0 )\nR3  ( 3  1  −2 | 9 )\n```\nZero out x in R2 and R3, then y in R3:\n```\nR2 ← R2 − 2R1   ( 0  −5  1 | −6 )\nR3 ← R3 − 3R1   ( 0  −5  −5 | 0 )\nR3 ← R3 − R2    ( 0  0  −6 | 6 )\n```\nBack substitution, bottom to top:\n```\n−6z = 6 → z = −1\n−5y + z = −6 → y = 1\nx + 2y + z = 3 → x = 2\n```"
        },
        "answer": {
          "accept": [
            "x = 2, y = 1, z = 2",
            "x=2, y=1, z=2",
            "x = 2; y = 1; z = 2",
            "x=2,y=1,z=2",
            "x = 2, у = 1, z = 2",
            "x=2, у=1, z=2",
            "x = 2; у = 1; z = 2",
            "x=2,у=1,z=2",
            "(2, 1, 2)",
            "(2,1,2)",
            "2, 1, 2",
            "2,1,2",
            "2; 1; 2"
          ]
        },
        "hints": [
          {
            "he": "מצמצמים את אותו נעלם משני זוגות של משוואות. מקבלים מערכת של שתי משוואות עם שני נעלמים.",
            "ru": "Убираем одно и то же неизвестное из двух пар уравнений. Получится система из двух уравнений с двумя неизвестными.",
            "en": "Eliminate the same unknown from two pairs of equations. You get a system of two equations in two unknowns."
          },
          {
            "he": "צעד ראשון `3x + z = 8`",
            "ru": "Первый шаг `3x + z = 8`",
            "en": "First step `3x + z = 8`"
          },
          {
            "he": "בהמשך מקבלים `x − 3z = −4`",
            "ru": "Дальше получится `x − 3z = −4`",
            "en": "Next you get `x − 3z = −4`"
          }
        ],
        "solution": [
          {
            "he": "מצמצמים את y. משוואה 1 + משוואה 2",
            "ru": "Убираем y. Уравнение 1 + уравнение 2",
            "en": "Eliminate y. Equation 1 + equation 2"
          },
          "3x + z = 8",
          {
            "he": "כופלים את משוואה 1 ב־`2`",
            "ru": "Умножаем уравнение 1 на `2`",
            "en": "Multiply equation 1 by `2`"
          },
          "4x + 2y − 2z = 6",
          {
            "he": "מחסירים ממנה את משוואה 3",
            "ru": "Вычитаем из него уравнение 3",
            "en": "Subtract equation 3 from it"
          },
          "x − 3z = −4",
          {
            "he": "כופלים את `3x + z = 8` ב־`3`",
            "ru": "Умножаем `3x + z = 8` на `3`",
            "en": "Multiply `3x + z = 8` by `3`"
          },
          "9x + 3z = 24",
          {
            "he": "מחברים עם `x − 3z = −4`",
            "ru": "Складываем с `x − 3z = −4`",
            "en": "Add `x − 3z = −4`"
          },
          "10x = 20",
          "x = 2",
          "6 + z = 8",
          "z = 2",
          {
            "he": "מציבים במשוואה 1",
            "ru": "Подставляем в уравнение 1",
            "en": "Substitute into equation 1"
          },
          "4 + y − 2 = 3",
          "y = 1",
          {
            "he": "תשובה `x = 2,  y = 1,  z = 2`",
            "ru": "Ответ `x = 2,  y = 1,  z = 2`",
            "en": "Answer `x = 2,  y = 1,  z = 2`"
          }
        ]
      },
      {
        "id": "ai2-3",
        "level": 2,
        "label": "2.3",
        "kind": "choice",
        "text": {
          "he": "במטריצה המורחבת `R1  ( 1  2  −1 | 4 )`, `R2  ( 3  1  2 | 13 )` עושים `R2 ← R2 − 3R1`. מה השורה החדשה R2?",
          "ru": "В расширенной матрице `R1  ( 1  2  −1 | 4 )`, `R2  ( 3  1  2 | 13 )` делаем `R2 ← R2 − 3R1`. Какой стала строка R2?",
          "en": "In the augmented matrix `R1  ( 1  2  −1 | 4 )`, `R2  ( 3  1  2 | 13 )` we do `R2 ← R2 − 3R1`. What is the new row R2?"
        },
        "example": {
          "he": "השורות:\n```\nR1  ( 1  3  2 | 5 )\nR2  ( 2  1  −1 | 4 )\n```\n`R2 ← R2 − 2R1`: מכל מספר ב־R2 מחסרים פעמיים את המספר של R1 באותה עמודה:\n```\n2 − 2 × 1 = 0\n1 − 2 × 3 = −5\n−1 − 2 × 2 = −5\n4 − 2 × 5 = −6\nR2  ( 0  −5  −5 | −6 )\n```",
          "ru": "Строки:\n```\nR1  ( 1  3  2 | 5 )\nR2  ( 2  1  −1 | 4 )\n```\n`R2 ← R2 − 2R1`: из каждого числа R2 вычитаем удвоенное число R1 в том же столбце:\n```\n2 − 2 × 1 = 0\n1 − 2 × 3 = −5\n−1 − 2 × 2 = −5\n4 − 2 × 5 = −6\nR2  ( 0  −5  −5 | −6 )\n```",
          "en": "The rows:\n```\nR1  ( 1  3  2 | 5 )\nR2  ( 2  1  −1 | 4 )\n```\n`R2 ← R2 − 2R1`: from each number of R2 subtract twice the number of R1 in the same column:\n```\n2 − 2 × 1 = 0\n1 − 2 × 3 = −5\n−1 − 2 × 2 = −5\n4 − 2 × 5 = −6\nR2  ( 0  −5  −5 | −6 )\n```"
        },
        "options": [
          "( 0  −5  5 | 1 )",
          "( 0  −5  −1 | 1 )",
          "( 0  7  5 | 25 )"
        ],
        "answer": {
          "index": 0
        },
        "hints": [
          {
            "he": "קודם כופלים את כל R1 ב־3, ואחר כך מחסירים מ־R2 איבר־איבר, גם בעמודה שאחרי הקו.",
            "ru": "Сначала умножаем всю R1 на 3, потом вычитаем из R2 поэлементно, и в столбце после черты тоже.",
            "en": "First multiply all of R1 by 3, then subtract from R2 entry by entry, including the column after the bar."
          },
          {
            "he": "`3R1 = ( 3  6  −3 | 12 )`. עכשיו `2 − (−3) = ?`",
            "ru": "`3R1 = ( 3  6  −3 | 12 )`. Теперь `2 − (−3) = ?`",
            "en": "`3R1 = ( 3  6  −3 | 12 )`. Now `2 − (−3) = ?`"
          }
        ],
        "solution": [
          {
            "he": "כופלים את R1 ב־3",
            "ru": "Умножаем R1 на 3",
            "en": "Multiply R1 by 3"
          },
          "3R1 = ( 3  6  −3 | 12 )",
          {
            "he": "מחסירים איבר־איבר",
            "ru": "Вычитаем поэлементно",
            "en": "Subtract entry by entry"
          },
          "3 − 3 = 0",
          "1 − 6 = −5",
          "2 − (−3) = 5",
          "13 − 12 = 1",
          {
            "he": "תשובה `( 0  −5  5 | 1 )`",
            "ru": "Ответ `( 0  −5  5 | 1 )`",
            "en": "Answer `( 0  −5  5 | 1 )`"
          }
        ]
      },
      {
        "id": "ai3-1",
        "level": 3,
        "label": "3.1",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`x + y + z = 2`\n`2x + 3y + z = 1`\n`x − y + 2z = 7`\nכתבו את התשובה כך: x = …, y = …, z = …",
          "ru": "Реши систему уравнений\n`x + y + z = 2`\n`2x + 3y + z = 1`\n`x − y + 2z = 7`\nЗапиши ответ так: x = …, y = …, z = …",
          "en": "Solve the system of equations\n`x + y + z = 2`\n`2x + 3y + z = 1`\n`x − y + 2z = 7`\nWrite the answer like this: x = …, y = …, z = …"
        },
        "example": {
          "he": "המטריצה המורחבת:\n```\nR1  ( 1  1  1 | 4 )\nR2  ( 3  2  1 | 7 )\nR3  ( 1  −1  3 | 12 )\n```\nמאפסים את x ב־R2 וב־R3, ואחר כך את y ב־R3:\n```\nR2 ← R2 − 3R1   ( 0  −1  −2 | −5 )\nR3 ← R3 − R1    ( 0  −2  2 | 8 )\nR3 ← R3 − 2R2   ( 0  0  6 | 18 )\n```\nהצבה לאחור, מלמטה למעלה:\n```\n6z = 18 → z = 3\n−y − 2z = −5 → y = −1\nx + y + z = 4 → x = 2\n```",
          "ru": "Расширенная матрица:\n```\nR1  ( 1  1  1 | 4 )\nR2  ( 3  2  1 | 7 )\nR3  ( 1  −1  3 | 12 )\n```\nОбнуляем x в R2 и R3, потом y в R3:\n```\nR2 ← R2 − 3R1   ( 0  −1  −2 | −5 )\nR3 ← R3 − R1    ( 0  −2  2 | 8 )\nR3 ← R3 − 2R2   ( 0  0  6 | 18 )\n```\nОбратный ход, снизу вверх:\n```\n6z = 18 → z = 3\n−y − 2z = −5 → y = −1\nx + y + z = 4 → x = 2\n```",
          "en": "The augmented matrix:\n```\nR1  ( 1  1  1 | 4 )\nR2  ( 3  2  1 | 7 )\nR3  ( 1  −1  3 | 12 )\n```\nZero out x in R2 and R3, then y in R3:\n```\nR2 ← R2 − 3R1   ( 0  −1  −2 | −5 )\nR3 ← R3 − R1    ( 0  −2  2 | 8 )\nR3 ← R3 − 2R2   ( 0  0  6 | 18 )\n```\nBack substitution, bottom to top:\n```\n6z = 18 → z = 3\n−y − 2z = −5 → y = −1\nx + y + z = 4 → x = 2\n```"
        },
        "answer": {
          "accept": [
            "x = 3, y = −2, z = 1",
            "x=3, y=−2, z=1",
            "x = 3; y = −2; z = 1",
            "x=3,y=−2,z=1",
            "x = 3, у = −2, z = 1",
            "x=3, у=−2, z=1",
            "x = 3; у = −2; z = 1",
            "x=3,у=−2,z=1",
            "(3, −2, 1)",
            "(3,−2,1)",
            "3, −2, 1",
            "3,−2,1",
            "3; −2; 1"
          ]
        },
        "hints": [
          {
            "he": "כותבים מטריצה מורחבת ומאפסים את מה שמתחת לאלכסון: קודם בעמודה הראשונה, אחר כך בשנייה.",
            "ru": "Записываем расширенную матрицу и обнуляем всё под диагональю: сначала в первом столбце, потом во втором.",
            "en": "Write the augmented matrix and make zeros under the diagonal: first in column one, then in column two."
          },
          {
            "he": "צעד ראשון `R2 ← R2 − 2R1`",
            "ru": "Первый шаг `R2 ← R2 − 2R1`",
            "en": "First step `R2 ← R2 − 2R1`"
          },
          {
            "he": "בהמשך מקבלים `R2  ( 0  1  −1 | −3 )`",
            "ru": "Дальше получится `R2  ( 0  1  −1 | −3 )`",
            "en": "Next you get `R2  ( 0  1  −1 | −3 )`"
          }
        ],
        "solution": [
          {
            "he": "מטריצה מורחבת",
            "ru": "Расширенная матрица",
            "en": "The augmented matrix"
          },
          "R1  ( 1   1   1 | 2 )",
          "R2  ( 2   3   1 | 1 )",
          "R3  ( 1  −1   2 | 7 )",
          "R2 ← R2 − 2R1",
          "R2  ( 0  1  −1 | −3 )",
          "R3 ← R3 − R1",
          "R3  ( 0  −2  1 | 5 )",
          "R3 ← R3 + 2R2",
          "R3  ( 0  0  −1 | −1 )",
          {
            "he": "חוזרים למשוואות, מהשורה התחתונה למעלה",
            "ru": "Возвращаемся к уравнениям, снизу вверх",
            "en": "Back to equations, from the bottom row up"
          },
          "−z = −1",
          "z = 1",
          "y − z = −3",
          "y − 1 = −3",
          "y = −2",
          "x + y + z = 2",
          "x − 2 + 1 = 2",
          "x = 3",
          {
            "he": "תשובה `x = 3,  y = −2,  z = 1`",
            "ru": "Ответ `x = 3,  y = −2,  z = 1`",
            "en": "Answer `x = 3,  y = −2,  z = 1`"
          }
        ]
      },
      {
        "id": "ai3-2",
        "level": 3,
        "label": "3.2",
        "kind": "text",
        "text": {
          "he": "פתרו את מערכת המשוואות\n`3x + y − 2z = −9`\n`2x − 3y + z = −4`\n`x + 4y + 3z = 19`\nכתבו את התשובה כך: x = …, y = …, z = …",
          "ru": "Реши систему уравнений\n`3x + y − 2z = −9`\n`2x − 3y + z = −4`\n`x + 4y + 3z = 19`\nЗапиши ответ так: x = …, y = …, z = …",
          "en": "Solve the system of equations\n`3x + y − 2z = −9`\n`2x − 3y + z = −4`\n`x + 4y + 3z = 19`\nWrite the answer like this: x = …, y = …, z = …"
        },
        "example": {
          "he": "המטריצה המורחבת:\n```\nR1  ( 1  2  −1 | 3 )\nR2  ( 2  1  1 | 3 )\nR3  ( 3  −1  2 | −2 )\n```\nמאפסים את x ב־R2 וב־R3, ואחר כך את y ב־R3:\n```\nR2 ← R2 − 2R1     ( 0  −3  3 | −3 )\nR3 ← R3 − 3R1     ( 0  −7  5 | −11 )\nR3 ← −3R3 + 7R2   ( 0  0  6 | 12 )\n```\nהצבה לאחור, מלמטה למעלה:\n```\n6z = 12 → z = 2\n−3y + 3z = −3 → y = 3\nx + 2y − z = 3 → x = −1\n```",
          "ru": "Расширенная матрица:\n```\nR1  ( 1  2  −1 | 3 )\nR2  ( 2  1  1 | 3 )\nR3  ( 3  −1  2 | −2 )\n```\nОбнуляем x в R2 и R3, потом y в R3:\n```\nR2 ← R2 − 2R1     ( 0  −3  3 | −3 )\nR3 ← R3 − 3R1     ( 0  −7  5 | −11 )\nR3 ← −3R3 + 7R2   ( 0  0  6 | 12 )\n```\nОбратный ход, снизу вверх:\n```\n6z = 12 → z = 2\n−3y + 3z = −3 → y = 3\nx + 2y − z = 3 → x = −1\n```",
          "en": "The augmented matrix:\n```\nR1  ( 1  2  −1 | 3 )\nR2  ( 2  1  1 | 3 )\nR3  ( 3  −1  2 | −2 )\n```\nZero out x in R2 and R3, then y in R3:\n```\nR2 ← R2 − 2R1     ( 0  −3  3 | −3 )\nR3 ← R3 − 3R1     ( 0  −7  5 | −11 )\nR3 ← −3R3 + 7R2   ( 0  0  6 | 12 )\n```\nBack substitution, bottom to top:\n```\n6z = 12 → z = 2\n−3y + 3z = −3 → y = 3\nx + 2y − z = 3 → x = −1\n```"
        },
        "answer": {
          "accept": [
            "x = −1, y = 2, z = 4",
            "x=−1, y=2, z=4",
            "x = −1; y = 2; z = 4",
            "x=−1,y=2,z=4",
            "x = −1, у = 2, z = 4",
            "x=−1, у=2, z=4",
            "x = −1; у = 2; z = 4",
            "x=−1,у=2,z=4",
            "(−1, 2, 4)",
            "(−1,2,4)",
            "−1, 2, 4",
            "−1,2,4",
            "−1; 2; 4"
          ]
        },
        "hints": [
          {
            "he": "כותבים מטריצה מורחבת ומאפסים את מה שמתחת לאלכסון: קודם בעמודה הראשונה, אחר כך בשנייה.",
            "ru": "Записываем расширенную матрицу и обнуляем всё под диагональю: сначала в первом столбце, потом во втором.",
            "en": "Write the augmented matrix and make zeros under the diagonal: first in column one, then in column two."
          },
          {
            "he": "צעד ראשון `R2 ← 3R2 − 2R1`",
            "ru": "Первый шаг `R2 ← 3R2 − 2R1`",
            "en": "First step `R2 ← 3R2 − 2R1`"
          },
          {
            "he": "בהמשך מקבלים `R2  ( 0  −11  7 | 6 )`",
            "ru": "Дальше получится `R2  ( 0  −11  7 | 6 )`",
            "en": "Next you get `R2  ( 0  −11  7 | 6 )`"
          }
        ],
        "solution": [
          {
            "he": "מטריצה מורחבת",
            "ru": "Расширенная матрица",
            "en": "The augmented matrix"
          },
          "R1  ( 3   1  −2 | −9 )",
          "R2  ( 2  −3   1 | −4 )",
          "R3  ( 1   4   3 | 19 )",
          "R2 ← 3R2 − 2R1",
          "R2  ( 0  −11  7 | 6 )",
          "R3 ← 3R3 − R1",
          "R3  ( 0  11  11 | 66 )",
          "R3 ← R3 + R2",
          "R3  ( 0  0  18 | 72 )",
          {
            "he": "חוזרים למשוואות, מהשורה התחתונה למעלה",
            "ru": "Возвращаемся к уравнениям, снизу вверх",
            "en": "Back to equations, from the bottom row up"
          },
          "18z = 72",
          "z = 4",
          "−11y + 7z = 6",
          "−11y + 28 = 6",
          "−11y = −22",
          "y = 2",
          "3x + y − 2z = −9",
          "3x + 2 − 8 = −9",
          "3x = −3",
          "x = −1",
          {
            "he": "תשובה `x = −1,  y = 2,  z = 4`",
            "ru": "Ответ `x = −1,  y = 2,  z = 4`",
            "en": "Answer `x = −1,  y = 2,  z = 4`"
          }
        ]
      },
      {
        "id": "ai3-3",
        "level": 3,
        "label": "3.3",
        "kind": "number",
        "text": {
          "he": "אחרי שיטת גאוס התקבלה מטריצה מדורגת\n`R1  ( 1  2  −1 | 3 )`\n`R2  ( 0  1   3 | 11 )`\n`R3  ( 0  0   2 | 6 )`\nמצאו את x.",
          "ru": "После метода Гаусса получилась ступенчатая матрица\n`R1  ( 1  2  −1 | 3 )`\n`R2  ( 0  1   3 | 11 )`\n`R3  ( 0  0   2 | 6 )`\nНайди x.",
          "en": "After Gaussian elimination we got a staircase matrix\n`R1  ( 1  2  −1 | 3 )`\n`R2  ( 0  1   3 | 11 )`\n`R3  ( 0  0   2 | 6 )`\nFind x."
        },
        "example": {
          "he": "מטריצה מדורגת:\n```\nR1  ( 1  1  1 | 6 )\nR2  ( 0  1  2 | 7 )\nR3  ( 0  0  3 | 6 )\n```\nהולכים מלמטה למעלה:\n```\n3z = 6 → z = 2\ny + 2 × 2 = 7 → y = 3\nx + 3 + 2 = 6 → x = 1\n```",
          "ru": "Ступенчатая матрица:\n```\nR1  ( 1  1  1 | 6 )\nR2  ( 0  1  2 | 7 )\nR3  ( 0  0  3 | 6 )\n```\nИдём снизу вверх:\n```\n3z = 6 → z = 2\ny + 2 × 2 = 7 → y = 3\nx + 3 + 2 = 6 → x = 1\n```",
          "en": "An echelon matrix:\n```\nR1  ( 1  1  1 | 6 )\nR2  ( 0  1  2 | 7 )\nR3  ( 0  0  3 | 6 )\n```\nGo from the bottom up:\n```\n3z = 6 → z = 2\ny + 2 × 2 = 7 → y = 3\nx + 3 + 2 = 6 → x = 1\n```"
        },
        "answer": {
          "value": "2"
        },
        "hints": [
          {
            "he": "מתחילים מהשורה התחתונה: יש בה רק z.",
            "ru": "Начинаем с нижней строки: в ней только z.",
            "en": "Start from the bottom row: it has only z."
          },
          {
            "he": "צעד ראשון `2z = 6`",
            "ru": "Первый шаг `2z = 6`",
            "en": "First step `2z = 6`"
          },
          {
            "he": "בהמשך מקבלים `y + 3z = 11`",
            "ru": "Дальше получится `y + 3z = 11`",
            "en": "Next you get `y + 3z = 11`"
          }
        ],
        "solution": [
          {
            "he": "חוזרים למשוואות, מהשורה התחתונה למעלה",
            "ru": "Возвращаемся к уравнениям, снизу вверх",
            "en": "Back to equations, from the bottom row up"
          },
          "2z = 6",
          "z = 3",
          "y + 3z = 11",
          "y + 9 = 11",
          "y = 2",
          "x + 2y − z = 3",
          "x + 4 − 3 = 3",
          "x = 2",
          {
            "he": "תשובה `x = 2`",
            "ru": "Ответ `x = 2`",
            "en": "Answer `x = 2`"
          }
        ]
      }
    ]
  }
};

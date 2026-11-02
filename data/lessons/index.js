/* Список уроков (коротко). Полный урок лежит в data/lessons/<id>.js и грузится при открытии. */
window.LESSON_INDEX = [
  { id: 'math-2026-10-18', subject: 'math', date: '2026-10-18',
    title: { he: 'משוואות ממעלה ראשונה ומערכות משוואות', ru: 'Линейные уравнения и системы уравнений', en: 'Linear equations and systems of equations' },
    summary: { he: 'מעבר אגף, פתיחת סוגריים (גם עם מינוס), סוגריים כפול סוגריים, מכנה משותף, ומערכת של שתי משוואות בשיטת החיבור.',
               ru: 'Перенос через «=», раскрытие скобок (и с минусом), скобка на скобку, общий знаменатель и система двух уравнений методом сложения.',
               en: 'Moving terms across "=", expanding brackets (including a minus), bracket times bracket, common denominators, and a system of two equations by the addition method.' } },
  { id: 'math-2026-10-25', subject: 'math', date: '2026-10-25',
    title: { he: 'מערכות משוואות: שיטת החיבור ושיטת גאוס', ru: 'Системы уравнений: метод сложения и метод Гаусса', en: 'Systems of equations: addition method and Gaussian elimination' },
    summary: { he: 'מערכות של שתי משוואות עם כפל של שתי המשוואות, מערכת של שלוש משוואות עם שלושה נעלמים, ודרך קצרה — מטריצה מורחבת ושיטת גאוס.',
               ru: 'Системы из двух уравнений с умножением обоих уравнений, система из трёх уравнений с тремя неизвестными и короткий путь — расширенная матрица и метод Гаусса.',
               en: 'Two-equation systems where both equations are multiplied, a system of three equations in three unknowns, and the short way — an augmented matrix and Gaussian elimination.' } },
  { id: 'math-2026-11-01', subject: 'math', date: '2026-11-01',
    title: { he: 'משוואה ריבועית', ru: 'Квадратные уравнения', en: 'Quadratic equations' },
    summary: { he: 'נוסחת השורשים, הדיסקרימיננטה, הדרך הקצרה כש-a+c=b, ופתיחת סוגריים שמובילה למשוואה ריבועית.',
               ru: 'Формула корней, дискриминант, короткий способ при a+c=b и раскрытие скобок, которое приводит к квадратному уравнению.',
               en: 'The quadratic formula, the discriminant, the a+c=b shortcut, and expanding brackets into a quadratic.' } }
];
window.LESSONS = window.LESSONS || {};

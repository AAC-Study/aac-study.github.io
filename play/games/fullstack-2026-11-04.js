/* Урок-игра: Full stack 04.11 — CSS: подключение, селекторы, padding/margin, grid и flex. */
window.PLAY = window.PLAY || {};
window.PLAY['fullstack-2026-11-04'] = {
  subject: 'fullstack', date: '04.11', badge: 'CSS', title: 'CSS: селекторы, коробки, grid и flex',
  levels: [
    { name: 'Что такое CSS', stages: [
      { type: 'learn', title: 'Скелет и одежда', text: 'HTML — это скелет страницы (что на ней есть). CSS — одежда (как это выглядит): цвета, размеры, расположение.',
        code: ['h1 {', '  color: beige;', '  background-color: darkred;', '}'], after: 'Правило: `селектор { свойство: значение; }`',
        why: 'Когда вид отделён от содержания, можно поменять дизайн всего сайта в одном файле и не трогать HTML.' },
      { type: 'quiz', q: 'Какая строка в `<head>` подключает файл `design.css`?', options: [
        { t: '`<link rel="stylesheet" href="design.css">`', ok: true, why: 'link + rel="stylesheet" говорит браузеру: «это файл стилей, возьми оформление оттуда».' },
        { t: '`<style src="design.css">`', why: 'У тега style нет src. В style пишут CSS прямо внутри страницы.' },
        { t: '`<css href="design.css">`', why: 'Тега css не существует. Файл стилей подключают через link.' } ] }
    ] },
    { name: 'Селекторы', stages: [
      { type: 'sort', q: 'Разложи селекторы по видам.', buckets: ['тег', 'class', 'id'], cards: [
        { t: 'h1', b: 0 }, { t: 'p', b: 0 }, { t: '.one', b: 1 }, { t: '.menu', b: 1 }, { t: '#batman', b: 2 }, { t: '#special', b: 2 } ],
        why: 'Без знака — тег (все такие элементы). Точка — class (группа). Решётка — id (один конкретный элемент).' },
      { type: 'quiz', q: 'У заголовка есть и class, и id, и для обоих написаны разные цвета. Какой победит?', options: [
        { t: 'id', ok: true, why: 'Порядок силы: id → class → тег. id самый точный — он про один элемент.' },
        { t: 'class', why: 'class сильнее тега, но слабее id.' },
        { t: 'тот, что ниже в файле', why: 'Порядок в файле решает только при одинаковой силе селекторов. id сильнее class.' } ] }
    ] },
    { name: 'Коробки', stages: [
      { type: 'quiz', q: 'Добавили `padding-left: 20rem` к h1. Что сдвинулось?', options: [
        { t: 'Текст внутри коробки', ok: true, why: 'padding — отступ ВНУТРИ коробки, между краем и текстом. Сама коробка стоит на месте.' },
        { t: 'Вся коробка вместе с фоном', why: 'Так работает margin — отступ СНАРУЖИ. padding двигает содержимое внутри.' } ] }
    ] },
    { name: 'grid', stages: [
      { type: 'learn', title: 'Родитель велит детям выстроиться', code: ['.box {', '  display: grid;', '  grid-template-columns: auto auto;', '}'],
        text: 'grid ставим **родителю** (шкафу), а дети (полки с коробками) сами встают в сетку. Сколько слов после `grid-template-columns` — столько столбцов.',
        why: 'Так раскладкой управляют в одном месте. Не нужно двигать каждый блок отдельно.' },
      { type: 'widget', widget: 'grid', q: 'Сделай **3 столбца**. Нажимай на варианты и смотри, как меняется сетка.', options: ['auto', 'auto auto', 'auto auto auto', 'auto auto auto auto'], start: 'auto', target: 'auto auto auto',
        why: 'Три слова auto — три столбца. 6 коробок встали в 2 ряда по 3.' },
      { type: 'widget', widget: 'grid', q: 'Как #batman на уроке: пусть коробка 1 займёт **2 столбца**.', options: ['auto auto auto'], start: 'auto auto auto', target: 'auto auto auto', spanCtl: true,
        why: '`grid-column: 1 /span 2` — начать с 1-го столбца и растянуться на 2. Остальные коробки сдвинулись дальше.' }
    ] },
    { name: 'flex', stages: [
      { type: 'quiz', q: '`display: flex; flex-direction: row;` у родителя. Как встанут карточки телефонов?', options: [
        { t: 'В один ряд, слева направо', ok: true, why: 'flex выстраивает детей в линию, row — по горизонтали. Удобно для ряда карточек или меню.' },
        { t: 'Друг под другом', why: 'Это column. row — в строку.' },
        { t: 'Сеткой 2 × 2', why: 'Сетку со столбцами и строками делает grid. flex — одна линия.' } ] }
    ] }
  ]
};

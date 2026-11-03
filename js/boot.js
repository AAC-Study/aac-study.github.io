/* Тема и язык до отрисовки страницы (без «вспышки» светлой темы). Отдельный файл, чтобы работала защита CSP. */
    /* тема ставится до отрисовки, чтобы не мигало */
    try { var th = JSON.parse(localStorage.getItem('theme')); if (!th) th = window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; document.documentElement.setAttribute('data-theme', th); } catch (e) {}

/* Шрифты Google грузим, не задерживая страницу: пока они качаются, текст виден системным шрифтом */
try {
  var fl = document.createElement('link');
  fl.rel = 'stylesheet'; fl.media = 'print';
  fl.href = 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap';
  fl.onload = function () { fl.media = 'all'; };
  document.head.appendChild(fl);
} catch (e) {}

/* Экран загрузки: если сеть медленная, через 6 секунд — короткая подсказка */
setTimeout(function () {
  var sp = document.getElementById('splash'), x = document.getElementById('splash-slow');
  if (!sp || !x) return;
  var lang = 'he'; try { lang = JSON.parse(localStorage.getItem('lang')) || 'he'; } catch (e) {}
  x.textContent = { ru: 'Медленный интернет… ещё чуть-чуть', en: 'Slow connection… almost there' }[lang] || 'אינטרנט איטי… עוד רגע';
  sp.className += ' is-slow';
}, 6000);

/* Тема и язык до отрисовки страницы (без «вспышки» светлой темы). Отдельный файл, чтобы работала защита CSP. */
    /* тема ставится до отрисовки, чтобы не мигало */
    try { var th = JSON.parse(localStorage.getItem('theme')); if (!th) th = window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; document.documentElement.setAttribute('data-theme', th); } catch (e) {}

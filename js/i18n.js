/* Языки интерфейса: he (по умолчанию), ru, en. Модули добавляют свои строки через I18N.add(). */
(function () {
  'use strict';
  var dict = { he: {}, ru: {}, en: {} };
  var I18N = {
    lang: 'he',
    langs: [
      { id: 'he', label: 'עברית', short: 'HE', dir: 'rtl' },
      { id: 'ru', label: 'Русский', short: 'RU', dir: 'ltr' },
      { id: 'en', label: 'English', short: 'EN', dir: 'ltr' }
    ],
    add: function (d) {
      Object.keys(d).forEach(function (l) {
        if (!dict[l]) dict[l] = {};
        Object.keys(d[l]).forEach(function (k) { dict[l][k] = d[l][k]; });
      });
    },
    /* t('key', {n: 5}) → строка с подстановкой {n} */
    t: function (key, vars) {
      var s = (dict[I18N.lang] && dict[I18N.lang][key]) || dict.he[key] || dict.ru[key] || key;
      if (vars) Object.keys(vars).forEach(function (v) { s = s.split('{' + v + '}').join(vars[v]); });
      return s;
    },
    dir: function () { return I18N.lang === 'he' ? 'rtl' : 'ltr'; },
    set: function (l) {
      if (!dict[l]) return;
      I18N.lang = l;
      U.storage.set('lang', l);
      document.documentElement.setAttribute('lang', l);
      document.documentElement.setAttribute('dir', I18N.dir());
      document.dispatchEvent(new CustomEvent('langchange', { detail: l }));
    },
    init: function () {
      var saved = U.storage.get('lang', null);
      if (!saved) {
        var nav = (navigator.language || 'he').slice(0, 2).toLowerCase();
        saved = nav === 'ru' || nav === 'uk' ? 'ru' : 'he'; /* по умолчанию иврит */
      }
      I18N.lang = dict[saved] ? saved : 'he';
      document.documentElement.setAttribute('lang', I18N.lang);
      document.documentElement.setAttribute('dir', I18N.dir());
    }
  };
  window.I18N = I18N;
  window.t = I18N.t;

  I18N.add({
    he: {
      app_name: 'AAC Study', app_sub: 'לומדים ביחד · הנדסאי תוכנה',
      nav_home: 'ראשי', nav_subjects: 'מקצועות', nav_profile: 'האזור האישי', nav_settings: 'הגדרות', nav_logout: 'יציאה', nav_menu: 'תפריט',
      theme_light: 'מצב בהיר', theme_dark: 'מצב כהה', lang: 'שפה', notifications: 'התראות', no_notifications: 'אין התראות חדשות',
      login_title: 'כניסה', register_title: 'הרשמה', email: 'אימייל', password: 'סיסמה', display_name: 'שם תצוגה',
      invite_code: 'קוד הזמנה', invite_hint: 'את הקוד מקבלים מחבר בקבוצה', btn_login: 'כניסה', btn_register: 'להירשם',
      have_account: 'כבר יש לך חשבון?', no_account: 'אין לך חשבון?', err_invite: 'קוד הזמנה שגוי', err_email_domain: 'אפשר להירשם רק עם אימייל ‎@gmail.com או ‎@mail.ru', email_domains_hint: 'רק ‎@gmail.com או ‎@mail.ru', err_signup: 'ההרשמה לא הצליחה. בדקו את האימייל ואת קוד ההזמנה', err_login: 'אימייל או סיסמה שגויים',
      err_exists: 'כבר יש חשבון עם האימייל הזה', err_short_pass: 'סיסמה לפחות 6 תווים', err_fields: 'צריך למלא את כל השדות', err_network: 'אין חיבור לאינטרנט', err_confirm: 'צריך לאשר את האימייל (הגדרה בשרת)', pw_forgot: 'שכחת סיסמה?', pw_forgot_title: 'סיסמה חדשה דרך המייל', pw_forgot_hint: 'כתבו את האימייל שאיתו נרשמתם. נשלח מכתב עם קישור לבחירת סיסמה חדשה.', pw_send: 'שלחו קישור', pw_sent_1: 'אם יש חשבון כזה, המכתב כבר בדרך אל', pw_sent_2: 'פתחו את המכתב ולחצו על הקישור. אין מכתב? בדקו בספאם וחכו כמה דקות.', pw_back: 'חזרה לכניסה', pw_new_title: 'בחרו סיסמה חדשה', pw_new: 'סיסמה חדשה', pw_new2: 'שוב', pw_save: 'שמירת הסיסמה', pw_later: 'אחר כך', pw_done: 'הסיסמה שונתה', pw_mismatch: 'הסיסמאות לא זהות', pw_rule: 'לפחות 6 תווים. אפשר להחליף סיסמה פעם ב-24 שעות.', pw_wait: 'הסיסמה הוחלפה לא מזמן. אפשר שוב בעוד כ-{h} שעות.', pw_section: 'חשבון', pw_change: 'החלפת סיסמה', pw_change_btn: 'להחליף', err_pass_cooldown: 'הסיסמה הוחלפה לפני פחות מ-24 שעות. נסו מאוחר יותר', err_same_pass: 'הסיסמה החדשה זהה לישנה', err_pass_save: 'לא הצלחנו לשמור את הסיסמה. נסו שוב', err_too_often: 'יותר מדי מכתבים. חכו קצת ונסו שוב', remember_me: 'זכור אותי', remember_hint: 'נשארים מחוברים 7 ימים. בלי הסימון: יציאה אוטומטית אחרי 30 דקות שלא נמצאים באתר.', reg_done: 'החשבון נוצר! עכשיו היכנסו עם האימייל והסיסמה.', auth_expired: 'יצאת אוטומטית. היכנס/י שוב.', err_mail_send: 'השרת לא הצליח לשלוח את המכתב. נסו שוב מאוחר יותר', err_recover: 'לא הצלחנו לשלוח מכתב. בדקו את האימייל ונסו שוב', err_email_bad: 'האימייל נראה לא תקין', err_not_confirmed: 'קודם צריך לאשר את האימייל: פתחו את המכתב ולחצו על הקישור', err_captcha: 'בדיקת "לא רובוט" נכשלה. נסו שוב', err_captcha_wait: 'רגע: הבדיקה שאתם לא רובוט עוד לא הסתיימה', err_captcha_load: 'בדיקת "לא רובוט" לא נטענה. רעננו את הדף', auth_mail_h: 'בדקו את האימייל', auth_mail_1: 'שלחנו מכתב עם קישור אל', auth_mail_2: 'לחצו על הקישור, והאתר ייפתח כשאתם כבר מחוברים. המכתב לא הגיע? בדקו בתיקיית הספאם.', auth_confirmed: 'האימייל אושר! עכשיו היכנסו עם האימייל והסיסמה.', auth_link_bad: 'הקישור כבר לא תקף. היכנסו עם האימייל והסיסמה',
      mock_banner: 'מצב ניסיון: הנתונים נשמרים רק בדפדפן הזה',
      hello: 'שלום, {name}', home_lead: 'כל השיעורים, המשימות והחזרות במקום אחד.', continue_learning: 'להמשיך ללמוד',
      level: 'רמה {n}', xp_to_next: 'עוד {n} נקודות לרמה הבאה', xp: 'נקודות', lessons_count: 'שיעורים: {n}', no_lessons_yet: 'עוד אין שיעורים',
      subjects_title: 'מקצועות', lessons_title: 'שיעורים', open: 'לפתוח',
      profile_title: 'האזור האישי', change_avatar: 'להחליף תמונה', choose_frame: 'מסגרת', locked_until: 'נפתח ברמה {n}',
      how_xp: 'איך מקבלים נקודות', xp_read: 'קראת שיעור עד הסוף', xp_download: 'הורדת קובץ', xp_solve: 'פתרת משימה לבד', xp_solve_hint: 'פתרת אחרי רמז',
      level_word: 'רמה', level_max: 'רמה מקסימלית', save: 'שמירה', title_word: 'תואר', zone_public: 'רואים כולם', zone_private: 'רק אתה רואה', demo_unlocked_note: 'גרסת ניסיון: כל המסגרות והתארים פתוחים לך לבדיקה.', nav_admin: 'בעיות', admin_kind_user: 'דיווח של חבר', admin_kind_error: 'שגיאה באתר', admin_title: 'דיווחים על בעיות', admin_lead: 'כאן מופיעות בעיות שחברים דיווחו ושגיאות שהאתר רשם. העתק ושלח ל-Claude לתיקון.', admin_empty: 'אין דיווחים. הכול עובד 🙂', admin_copy: 'העתקת פרומפט', admin_resolve: 'טופל', admin_prompt_intro: 'באתר הלימוד שלנו דווחה בעיה. הנה הפרטים, תקן בבקשה:', admin_new: 'דיווחים חדשים: {n}', copied: 'הועתק', rp_title: 'דיווח על בעיה', rp_lead: 'משהו לא עובד או לא ברור? כתבו במילים פשוטות, הדיווח מגיע ישר למנהל האתר.', rp_what: 'מה קרה?', rp_send: 'שליחה', rp_thanks: 'תודה! הדיווח נשלח', rp_cta_title: 'מצאתם בעיה?', rp_cta_text: 'ספרו לנו ונתקן כמה שיותר מהר.', rp_open: 'לכתוב', set_look: 'מראה', set_learning: 'לימוד', set_demo: 'גרסת ניסיון', set_lang_hint: 'שפת האתר. קבצי השיעור להורדה זמינים בעברית וברוסית.', set_theme: 'ערכת צבעים', set_light: 'בהיר', set_dark: 'כהה', set_system: 'כמו במכשיר', set_accent: 'צבע מוביל', set_textsize: 'גודל טקסט', set_motion_hint: 'עוצר אנימציות של מסגרות, תארים ותפריט.', set_hint_open: 'לפתוח רמז אוטומטית', set_hint_open_hint: 'אחרי תשובה שגויה הרמז נפתח לבד.', set_demo_unlock: 'לפתוח הכול לבדיקה', set_demo_unlock_hint: 'כל המסגרות והתארים, בלי קשר לרמה.', set_demo_reset: 'איפוס נתוני הניסיון', set_demo_reset_hint: 'מוחק חשבונות, נקודות ודיווחים בדפדפן הזה.', set_demo_reset_btn: 'איפוס', set_demo_reset_sure: 'בטוח? ללחוץ שוב',
      set_accent_custom: 'צבע משלך', set_hue: 'גוון', set_sat: 'עוצמה', set_light_lvl: 'בהירות', set_soft: 'שקיפות רקעים', set_accent_reset: 'ברירת מחדל', side_collapse: 'לכווץ תפריט', side_expand: 'להרחיב תפריט',
      settings_title: 'הגדרות', reduce_motion: 'פחות אנימציות', saved: 'נשמר', level_up: 'עלית לרמה {n}!', points_plus: '+{n} נקודות'
    },
    ru: {
      app_name: 'AAC Study', app_sub: 'Учимся вместе · техник-программист',
      nav_home: 'Главная', nav_subjects: 'Предметы', nav_profile: 'Личный кабинет', nav_settings: 'Настройки', nav_logout: 'Выйти', nav_menu: 'Меню',
      theme_light: 'Светлая тема', theme_dark: 'Тёмная тема', lang: 'Язык', notifications: 'Уведомления', no_notifications: 'Новых уведомлений нет',
      login_title: 'Вход', register_title: 'Регистрация', email: 'Email', password: 'Пароль', display_name: 'Имя на сайте',
      invite_code: 'Код приглашения', invite_hint: 'Код даёт друг из группы', btn_login: 'Войти', btn_register: 'Зарегистрироваться',
      have_account: 'Уже есть аккаунт?', no_account: 'Нет аккаунта?', err_invite: 'Неверный код приглашения', err_email_domain: 'Регистрироваться можно только с почтой @gmail.com или @mail.ru', email_domains_hint: 'Только @gmail.com или @mail.ru', err_signup: 'Не получилось зарегистрироваться. Проверь email и код приглашения', err_login: 'Неверный email или пароль',
      err_exists: 'Аккаунт с этим email уже есть', err_short_pass: 'Пароль минимум 6 символов', err_fields: 'Заполни все поля', err_network: 'Нет связи с интернетом', err_confirm: 'Нужно подтвердить email (настройка сервера)', pw_forgot: 'Забыл пароль?', pw_forgot_title: 'Новый пароль по почте', pw_forgot_hint: 'Напиши email, с которым регистрировался. Пришлём письмо со ссылкой, по ней задашь новый пароль.', pw_send: 'Прислать ссылку', pw_sent_1: 'Если такой аккаунт есть, письмо уже летит на', pw_sent_2: 'Открой письмо и нажми на ссылку. Письма нет? Посмотри в «Спаме» и подожди пару минут.', pw_back: 'Назад ко входу', pw_new_title: 'Придумай новый пароль', pw_new: 'Новый пароль', pw_new2: 'Ещё раз', pw_save: 'Сохранить пароль', pw_later: 'Позже', pw_done: 'Пароль изменён', pw_mismatch: 'Пароли не совпадают', pw_rule: 'Минимум 6 символов. Менять пароль можно раз в 24 часа.', pw_wait: 'Пароль уже меняли недавно. Снова можно примерно через {h} ч.', pw_section: 'Аккаунт', pw_change: 'Сменить пароль', pw_change_btn: 'Сменить', err_pass_cooldown: 'Пароль меняли меньше 24 часов назад. Попробуй позже', err_same_pass: 'Новый пароль совпадает со старым', err_pass_save: 'Не получилось сохранить пароль. Попробуй ещё раз', err_too_often: 'Слишком много писем. Подожди немного и попробуй снова', remember_me: 'Запомнить меня', remember_hint: 'Вход сохранится на 7 дней. Без галочки: автоматический выход через 30 минут, если ты не на сайте.', reg_done: 'Аккаунт создан! Теперь войди со своим email и паролем.', auth_expired: 'Ты автоматически вышел. Войди снова.', err_mail_send: 'Сервер не смог отправить письмо. Попробуй позже', err_recover: 'Не получилось отправить письмо. Проверь email и попробуй снова', err_email_bad: 'Похоже, email написан с ошибкой', err_not_confirmed: 'Сначала подтверди почту: открой письмо и нажми на ссылку', err_captcha: 'Проверка «не робот» не прошла. Попробуй ещё раз', err_captcha_wait: 'Секунду: проверка, что ты не робот, ещё идёт', err_captcha_load: 'Проверка «не робот» не загрузилась. Обнови страницу', auth_mail_h: 'Проверь почту', auth_mail_1: 'Мы отправили письмо со ссылкой на', auth_mail_2: 'Нажми на ссылку, и сайт откроется уже со входом. Письма нет? Посмотри в папке «Спам».', auth_confirmed: 'Почта подтверждена! Теперь войди со своим email и паролем.', auth_link_bad: 'Ссылка уже не действует. Войди с email и паролем',
      mock_banner: 'Пробный режим: данные хранятся только в этом браузере',
      hello: 'Привет, {name}', home_lead: 'Все уроки, задачи и повторение в одном месте.', continue_learning: 'Продолжить',
      level: 'Уровень {n}', xp_to_next: 'Ещё {n} очков до следующего уровня', xp: 'очков', lessons_count: 'Уроков: {n}', no_lessons_yet: 'Уроков пока нет',
      subjects_title: 'Предметы', lessons_title: 'Уроки', open: 'Открыть',
      profile_title: 'Личный кабинет', change_avatar: 'Сменить фото', choose_frame: 'Рамка', locked_until: 'Откроется на уровне {n}',
      how_xp: 'Как получить очки', xp_read: 'Прочитал урок до конца', xp_download: 'Скачал файл', xp_solve: 'Решил задачу сам', xp_solve_hint: 'Решил после подсказки',
      level_word: 'Уровень', level_max: 'Максимальный уровень', save: 'Сохранить', title_word: 'Титул', zone_public: 'Видят все', zone_private: 'Видишь только ты', demo_unlocked_note: 'Пробная версия: все рамки и титулы открыты тебе для проверки.', nav_admin: 'Проблемы', admin_kind_user: 'Сообщение друга', admin_kind_error: 'Ошибка сайта', admin_title: 'Сообщения о проблемах', admin_lead: 'Здесь проблемы, о которых написали друзья, и ошибки, которые записал сайт. Скопируй и пришли Claude для исправления.', admin_empty: 'Сообщений нет. Всё работает 🙂', admin_copy: 'Скопировать промпт', admin_resolve: 'Исправлено', admin_prompt_intro: 'На нашем учебном сайте сообщили о проблеме. Вот подробности, исправь, пожалуйста:', admin_new: 'Новых сообщений: {n}', copied: 'Скопировано', rp_title: 'Сообщить о проблеме', rp_lead: 'Что-то не работает или непонятно? Напиши простыми словами, сообщение сразу придёт админу сайта.', rp_what: 'Что случилось?', rp_send: 'Отправить', rp_thanks: 'Спасибо! Сообщение отправлено', rp_cta_title: 'Нашёл проблему?', rp_cta_text: 'Напиши нам, и мы быстро исправим.', rp_open: 'Написать', set_look: 'Внешний вид', set_learning: 'Учёба', set_demo: 'Пробная версия', set_lang_hint: 'Язык сайта. Файлы уроков можно скачать на иврите и на русском.', set_theme: 'Тема', set_light: 'Светлая', set_dark: 'Тёмная', set_system: 'Как на устройстве', set_accent: 'Основной цвет', set_textsize: 'Размер текста', set_motion_hint: 'Останавливает анимацию рамок, титулов и меню.', set_hint_open: 'Открывать подсказку сразу', set_hint_open_hint: 'После неверного ответа подсказка откроется сама.', set_demo_unlock: 'Открыть всё для проверки', set_demo_unlock_hint: 'Все рамки и титулы независимо от уровня.', set_demo_reset: 'Сбросить пробные данные', set_demo_reset_hint: 'Удаляет аккаунты, очки и сообщения в этом браузере.', set_demo_reset_btn: 'Сбросить', set_demo_reset_sure: 'Точно? Нажми ещё раз',
      set_accent_custom: 'Свой цвет', set_hue: 'Оттенок', set_sat: 'Насыщенность', set_light_lvl: 'Яркость', set_soft: 'Прозрачность подложек', set_accent_reset: 'По умолчанию', side_collapse: 'Свернуть меню', side_expand: 'Развернуть меню',
      settings_title: 'Настройки', reduce_motion: 'Меньше анимации', saved: 'Сохранено', level_up: 'Новый уровень: {n}!', points_plus: '+{n} очков'
    },
    en: {
      app_name: 'AAC Study', app_sub: 'Learning together · Software Technician',
      nav_home: 'Home', nav_subjects: 'Subjects', nav_profile: 'My profile', nav_settings: 'Settings', nav_logout: 'Log out', nav_menu: 'Menu',
      theme_light: 'Light theme', theme_dark: 'Dark theme', lang: 'Language', notifications: 'Notifications', no_notifications: 'No new notifications',
      login_title: 'Log in', register_title: 'Sign up', email: 'Email', password: 'Password', display_name: 'Display name',
      invite_code: 'Invite code', invite_hint: 'Get the code from a friend in the group', btn_login: 'Log in', btn_register: 'Sign up',
      have_account: 'Already have an account?', no_account: 'No account yet?', err_invite: 'Wrong invite code', err_email_domain: 'You can only sign up with an @gmail.com or @mail.ru email', email_domains_hint: 'Only @gmail.com or @mail.ru', err_signup: 'Could not sign up. Check the email and the invite code', err_login: 'Wrong email or password',
      err_exists: 'An account with this email already exists', err_short_pass: 'Password must be at least 6 characters', err_fields: 'Please fill in all fields', err_network: 'No internet connection', err_confirm: 'Email confirmation is required (server setting)', pw_forgot: 'Forgot password?', pw_forgot_title: 'New password by email', pw_forgot_hint: 'Enter the email you signed up with. We will send a link to set a new password.', pw_send: 'Send link', pw_sent_1: 'If that account exists, the letter is on its way to', pw_sent_2: 'Open the letter and tap the link. No letter? Check spam and wait a couple of minutes.', pw_back: 'Back to sign in', pw_new_title: 'Choose a new password', pw_new: 'New password', pw_new2: 'Repeat it', pw_save: 'Save password', pw_later: 'Later', pw_done: 'Password changed', pw_mismatch: 'The passwords do not match', pw_rule: 'At least 6 characters. You can change it once every 24 hours.', pw_wait: 'The password was changed recently. You can change it again in about {h} h.', pw_section: 'Account', pw_change: 'Change password', pw_change_btn: 'Change', err_pass_cooldown: 'The password was changed less than 24 hours ago. Try later', err_same_pass: 'The new password is the same as the old one', err_pass_save: 'Could not save the password. Please try again', err_too_often: 'Too many emails. Wait a little and try again', remember_me: 'Remember me', remember_hint: 'Stay signed in for 7 days. Without it you are signed out after 30 minutes away from the site.', reg_done: 'Account created! Now sign in with your email and password.', auth_expired: 'You were signed out automatically. Please sign in again.', err_mail_send: 'The server could not send the email. Please try later', err_recover: 'Could not send the email. Check the address and try again', err_email_bad: 'This email address looks wrong', err_not_confirmed: 'Please confirm your email first: open the letter and tap the link', err_captcha: 'The "not a robot" check failed. Please try again', err_captcha_wait: 'One moment: the "not a robot" check is still running', err_captcha_load: 'The "not a robot" check did not load. Refresh the page', auth_mail_h: 'Check your email', auth_mail_1: 'We sent a letter with a link to', auth_mail_2: 'Tap the link and the site opens with you already signed in. No letter? Look in the spam folder.', auth_confirmed: 'Email confirmed! Now sign in with your email and password.', auth_link_bad: 'This link no longer works. Sign in with your email and password',
      mock_banner: 'Demo mode: data is saved only in this browser',
      hello: 'Hi, {name}', home_lead: 'All lessons, tasks and review in one place.', continue_learning: 'Continue',
      level: 'Level {n}', xp_to_next: '{n} more points to the next level', xp: 'points', lessons_count: 'Lessons: {n}', no_lessons_yet: 'No lessons yet',
      subjects_title: 'Subjects', lessons_title: 'Lessons', open: 'Open',
      profile_title: 'My profile', change_avatar: 'Change photo', choose_frame: 'Frame', locked_until: 'Unlocks at level {n}',
      how_xp: 'How to earn points', xp_read: 'Read a lesson to the end', xp_download: 'Downloaded a file', xp_solve: 'Solved a task yourself', xp_solve_hint: 'Solved after a hint',
      level_word: 'Level', level_max: 'Max level', save: 'Save', title_word: 'Title', zone_public: 'Everyone sees', zone_private: 'Only you see', demo_unlocked_note: 'Demo: all frames and titles are unlocked for you to test.', nav_admin: 'Issues', admin_kind_user: 'Friend report', admin_kind_error: 'Site error', admin_title: 'Problem reports', admin_lead: 'Problems friends reported and errors the site logged. Copy one and send it to Claude to fix.', admin_empty: 'No reports. Everything works 🙂', admin_copy: 'Copy prompt', admin_resolve: 'Fixed', admin_prompt_intro: 'A problem was reported on our study site. Details below, please fix it:', admin_new: 'New reports: {n}', copied: 'Copied', rp_title: 'Report a problem', rp_lead: 'Something broken or unclear? Write it in plain words; it goes straight to the site admin.', rp_what: 'What happened?', rp_send: 'Send', rp_thanks: 'Thanks! Report sent', rp_cta_title: 'Found a problem?', rp_cta_text: 'Tell us and we will fix it fast.', rp_open: 'Write', set_look: 'Appearance', set_learning: 'Learning', set_demo: 'Demo', set_lang_hint: 'Site language. Lesson files download in Hebrew and Russian.', set_theme: 'Theme', set_light: 'Light', set_dark: 'Dark', set_system: 'Device', set_accent: 'Accent color', set_textsize: 'Text size', set_motion_hint: 'Stops frame, title and menu animations.', set_hint_open: 'Open hints automatically', set_hint_open_hint: 'After a wrong answer the hint opens by itself.', set_demo_unlock: 'Unlock everything for testing', set_demo_unlock_hint: 'All frames and titles regardless of level.', set_demo_reset: 'Reset demo data', set_demo_reset_hint: 'Deletes accounts, points and reports in this browser.', set_demo_reset_btn: 'Reset', set_demo_reset_sure: 'Sure? Tap again',
      set_accent_custom: 'Your own color', set_hue: 'Hue', set_sat: 'Intensity', set_light_lvl: 'Brightness', set_soft: 'Background opacity', set_accent_reset: 'Default', side_collapse: 'Collapse menu', side_expand: 'Expand menu',
      settings_title: 'Settings', reduce_motion: 'Less animation', saved: 'Saved', level_up: 'Level up: {n}!', points_plus: '+{n} points'
    }
  });
})();

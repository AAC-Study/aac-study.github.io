/* Настройки сайта. Адрес базы и Publishable key — открытые данные (их видит любой браузер),
   защиту даёт сама база (RLS). Секретный ключ (sb_secret_…) сюда НИКОГДА не кладём.
   Если SUPABASE_URL оставить пустым, сайт работает в пробном режиме (всё только в этом браузере). */
window.APP_CONFIG = {
  SUPABASE_URL: 'https://zckcgydjbjpanegmyzvs.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_glTOkGnFhBZm6FjMyoUO1A_mHfhM7Qy',
  INVITE_CODE_HINT: 'AAC',
  MOCK_INVITE_CODE: 'AAC2026',
  // Cloudflare Turnstile (проверка «не робот»): ОТКРЫТЫЙ Site Key. Пусто = проверка выключена.
  // Secret Key сюда НЕ кладём, он только в Supabase.
  TURNSTILE_SITE_KEY: '0x4AAAAAAFx0f9qhNlPY-0n9'
};

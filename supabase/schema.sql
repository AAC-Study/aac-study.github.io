-- =====================================================================
-- Учебный сайт: база Supabase (этап 1). Запускается один раз в SQL Editor.
-- Профили, очки, журнал проблем, аватарки. Права проверяет сама база (RLS).
-- =====================================================================

-- Код приглашения хранится только в базе (его не видно в коде сайта).
create table if not exists public.app_secrets (key text primary key, value text not null);
alter table public.app_secrets enable row level security;  -- нет политик = никто снаружи не читает
insert into public.app_secrets(key, value) values ('invite_code', 'CHANGE-ME') on conflict (key) do nothing;
-- С каких почт можно регистрироваться (через запятую; пусто = с любых). Просьба Дениса 03.11: только gmail.com и mail.ru.
insert into public.app_secrets(key, value) values ('email_domains', 'gmail.com,mail.ru') on conflict (key) do nothing;
insert into public.app_secrets(key, value) values ('ip_salt', md5(random()::text || clock_timestamp()::text)) on conflict (key) do nothing;
create or replace function public.email_domain_ok(email text) returns boolean
language sql stable security definer set search_path = public as $$
  select coalesce((select value from public.app_secrets where key = 'email_domains'), '') = ''
      or lower(split_part(coalesce(email, ''), '@', 2)) = any (string_to_array(replace(lower((select value from public.app_secrets where key = 'email_domains')), ' ', ''), ','));
$$;
revoke execute on function public.email_domain_ok(text) from public, anon, authenticated;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null check (char_length(name) between 1 and 64),
  avatar_url text,
  frame text not null default 'none',
  xp int not null default 0,
  role text not null default 'student' check (role in ('student','admin')),
  prefs jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
drop policy if exists "profiles: read by members" on public.profiles;
create policy "profiles: read by members" on public.profiles for select to authenticated using (true);
drop policy if exists "profiles: update own" on public.profiles;
create policy "profiles: update own" on public.profiles for update to authenticated
  using (id = auth.uid()) with check (id = auth.uid());
-- xp и role нельзя менять напрямую: только через функцию award() / админом
revoke update on public.profiles from authenticated, anon;
grant update (name, avatar_url, frame, prefs) on public.profiles to authenticated;

-- Новый пользователь: проверка кода приглашения + профиль. Первый = админ.
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
declare code text; is_first boolean;
begin
  select value into code from public.app_secrets where key = 'invite_code';
  if coalesce(new.raw_user_meta_data->>'invite', '') is distinct from code then
    raise exception 'invalid_invite';
  end if;
  if not public.email_domain_ok(new.email) then
    raise exception 'bad_email_domain';
  end if;
  select not exists(select 1 from public.profiles) into is_first;
  insert into public.profiles(id, name, role)
  values (new.id, coalesce(nullif(trim(new.raw_user_meta_data->>'name'), ''), split_part(new.email, '@', 1)),
          case when is_first then 'admin' else 'student' end);
  return new;
end $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();
-- смена почты тоже только на разрешённую
create or replace function public.check_email_change() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if new.email is distinct from old.email and not public.email_domain_ok(new.email) then
    raise exception 'bad_email_domain';
  end if;
  return new;
end $$;
drop trigger if exists check_email_change on auth.users;
create trigger check_email_change before update of email on auth.users
  for each row execute function public.check_email_change();

-- Очки: за каждый ключ один раз. Сколько очков — решает база, не браузер.
create table if not exists public.progress (
  user_id uuid not null references public.profiles(id) on delete cascade,
  key text not null check (char_length(key) <= 200),
  points int not null,
  created_at timestamptz not null default now(),
  primary key (user_id, key)
);
alter table public.progress enable row level security;
drop policy if exists "progress: read own" on public.progress;
create policy "progress: read own" on public.progress for select to authenticated using (user_id = auth.uid());

create or replace function public.award(p_key text, p_kind text default null, p_level int default 0) returns json
language plpgsql security definer set search_path = public as $$
declare pts int; fam text; new_xp int;
begin
  if auth.uid() is null then raise exception 'no_session'; end if;
  if exists(select 1 from public.profiles where id = auth.uid() and banned) then raise exception 'banned'; end if;
  fam := split_part(p_key, ':', 1);
  if fam not in ('read', 'download', 'solve') then raise exception 'bad_key'; end if;
  if char_length(p_key) > 200 or not public.award_key_ok(p_key) then raise exception 'bad_key'; end if;
  if p_level is null or p_level < 0 or p_level > 3 then raise exception 'bad_level'; end if;
  pts := case
    when fam = 'read' then 10
    when fam = 'download' then 5
    when fam = 'solve' and coalesce(p_kind, 'solve') = 'solve' then 20 + 5 * p_level
    when fam = 'solve' and p_kind = 'solve_hint' then 10 + 5 * p_level
    else 0 end;
  if pts = 0 then raise exception 'bad_kind'; end if;
  insert into public.progress(user_id, key, points) values (auth.uid(), p_key, pts) on conflict do nothing;
  if not found then
    select xp into new_xp from public.profiles where id = auth.uid();
    return json_build_object('added', 0, 'xp', new_xp);
  end if;
  update public.profiles set xp = xp + pts where id = auth.uid() returning xp into new_xp;
  return json_build_object('added', pts, 'xp', new_xp);
end $$;
grant execute on function public.award(text, text, int) to authenticated;

-- Журнал проблем (кнопка «Проверить» не справилась, ошибки страницы) — видит только админ.
create table if not exists public.issues (
  id bigint generated always as identity primary key,
  user_id uuid default auth.uid() references public.profiles(id) on delete set null,
  info jsonb not null,
  resolved boolean not null default false,
  created_at timestamptz not null default now()
);
alter table public.issues enable row level security;
drop policy if exists "issues: anyone signed in can report" on public.issues;
create policy "issues: anyone signed in can report" on public.issues for insert to authenticated with check (user_id = auth.uid());
drop policy if exists "issues: reporter sees own" on public.issues;
create policy "issues: reporter sees own" on public.issues for select to authenticated using (user_id = auth.uid());
drop policy if exists "issues: admin reads" on public.issues;
create policy "issues: admin reads" on public.issues for select to authenticated
  using (exists(select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));
drop policy if exists "issues: admin updates" on public.issues;
create policy "issues: admin updates" on public.issues for update to authenticated
  using (exists(select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));

-- Аватарки: публичное чтение, запись только в свою папку <user_id>/...
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('avatars', 'avatars', true, 204800, array['image/jpeg','image/png','image/webp'])
on conflict (id) do nothing;
drop policy if exists "avatars: upload own" on storage.objects;
create policy "avatars: upload own" on storage.objects for insert to authenticated
  with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);
drop policy if exists "avatars: update own" on storage.objects;
create policy "avatars: update own" on storage.objects for update to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);
drop policy if exists "avatars: delete own" on storage.objects;
create policy "avatars: delete own" on storage.objects for delete to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);

-- Пуш-уведомления: подписки устройств. Одно устройство (браузер) = одна строка.
-- Отправляет их функция supabase/functions/push (ключи VAPID она создаёт сама и хранит в app_secrets).
create table if not exists public.push_subs (
  endpoint text primary key,
  user_id uuid not null default auth.uid() references public.profiles(id) on delete cascade,
  p256dh text not null,
  auth text not null,
  lang text not null default 'he',
  ua text,
  created_at timestamptz not null default now()
);
alter table public.push_subs enable row level security;
drop policy if exists "push: own insert" on public.push_subs;
create policy "push: own insert" on public.push_subs for insert to authenticated with check (user_id = auth.uid());
drop policy if exists "push: own update" on public.push_subs;
create policy "push: own update" on public.push_subs for update to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
drop policy if exists "push: own read" on public.push_subs;
create policy "push: own read" on public.push_subs for select to authenticated using (user_id = auth.uid());
drop policy if exists "push: own delete" on public.push_subs;
create policy "push: own delete" on public.push_subs for delete to authenticated using (user_id = auth.uid());

-- ---------- админка: код приглашения и бан ----------
-- banned меняет только админ (через admin_ban); сам человек его поменять не может (update разрешён только на name, avatar_url, frame, prefs).
alter table public.profiles add column if not exists banned boolean not null default false;

create or replace function public.me_ok() returns boolean
language sql stable security definer set search_path = public as $$
  select exists(select 1 from public.profiles where id = auth.uid() and not banned);
$$;
create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists(select 1 from public.profiles where id = auth.uid() and role = 'admin' and not banned);
$$;

create or replace function public.admin_invite_get() returns text
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'not_admin'; end if;
  return (select value from public.app_secrets where key = 'invite_code');
end $$;

create or replace function public.admin_invite_set(p_code text) returns void
language plpgsql security definer set search_path = public as $$
declare c text := trim(coalesce(p_code, ''));
begin
  if not public.is_admin() then raise exception 'not_admin'; end if;
  if char_length(c) < 6 or char_length(c) > 64 then raise exception 'bad_invite'; end if;
  update public.app_secrets set value = c where key = 'invite_code';
end $$;

-- Бан: человек больше не может войти (Supabase Auth: banned_until), его вход на всех устройствах сбрасывается,
-- а база отказывает ему во всём (me_ok). Разбан возвращает всё как было. Себя и других админов забанить нельзя.
create or replace function public.admin_ban(p_user uuid, p_on boolean) returns void
language plpgsql security definer set search_path = public as $$
declare on_ boolean := coalesce(p_on, true);
begin
  if not public.is_admin() then raise exception 'not_admin'; end if;
  if p_user = auth.uid() then raise exception 'ban_self'; end if;
  if exists(select 1 from public.profiles where id = p_user and role = 'admin') then raise exception 'ban_admin'; end if;
  update public.profiles set banned = on_ where id = p_user;
  if not found then raise exception 'not_found'; end if;
  if on_ then delete from public.push_subs where user_id = p_user; end if;
  begin
    update auth.users set banned_until = case when on_ then '2999-12-31'::timestamptz else null end where id = p_user;
    if on_ then delete from auth.sessions where user_id = p_user; end if;
  exception when others then null;   -- если нет доступа к auth — всё равно действует запрет в базе (me_ok)
  end;
end $$;

-- забаненный не пишет о проблемах и не получает очки
drop policy if exists "issues: anyone signed in can report" on public.issues;
create policy "issues: anyone signed in can report" on public.issues for insert to authenticated with check (user_id = auth.uid() and public.me_ok());

revoke execute on function public.me_ok(), public.is_admin(), public.admin_invite_get(), public.admin_invite_set(text), public.admin_ban(uuid, boolean) from public, anon;
grant execute on function public.me_ok(), public.is_admin(), public.admin_invite_get(), public.admin_invite_set(text), public.admin_ban(uuid, boolean) to authenticated;

-- ---------- черновики задач: перенос между устройствами ----------
-- Каждый видит и меняет только свои черновики. Не больше 500 черновиков и ~400 КБ на один.
create table if not exists public.drafts (
  user_id uuid not null default auth.uid() references public.profiles(id) on delete cascade,
  key text not null check (char_length(key) between 1 and 200),
  data jsonb not null check (octet_length(data::text) <= 400000),
  updated_at timestamptz not null default now(),
  primary key (user_id, key)
);
alter table public.drafts enable row level security;
drop policy if exists "drafts: own read" on public.drafts;
create policy "drafts: own read" on public.drafts for select to authenticated using (user_id = auth.uid());
drop policy if exists "drafts: own insert" on public.drafts;
create policy "drafts: own insert" on public.drafts for insert to authenticated with check (user_id = auth.uid() and public.me_ok());
drop policy if exists "drafts: own update" on public.drafts;
create policy "drafts: own update" on public.drafts for update to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid() and public.me_ok());
drop policy if exists "drafts: own delete" on public.drafts;
create policy "drafts: own delete" on public.drafts for delete to authenticated using (user_id = auth.uid());
revoke all on public.drafts from anon;

create or replace function public.drafts_limit() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if exists(select 1 from public.drafts where user_id = new.user_id and key = new.key) then return new; end if;   -- это обновление
  if (select count(*) from public.drafts where user_id = new.user_id) >= 500 then raise exception 'too_many_drafts'; end if;
  return new;
end $$;
drop trigger if exists drafts_limit on public.drafts;
create trigger drafts_limit before insert on public.drafts for each row execute function public.drafts_limit();
-- Всего на человека не больше ~15 МБ черновиков (проверка безопасности 03.11: иначе один аккаунт мог забить всю бесплатную базу).
create or replace function public.drafts_total() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if (select coalesce(sum(octet_length(d.data::text)), 0) from public.drafts d where d.user_id = new.user_id and d.key <> new.key)
     + octet_length(new.data::text) > 15000000 then raise exception 'too_many_drafts'; end if;
  return new;
end $$;
drop trigger if exists drafts_total on public.drafts;
create trigger drafts_total before insert or update of data on public.drafts for each row execute function public.drafts_total();
revoke execute on function public.drafts_total() from public, anon, authenticated;

-- ---------- защита (проверка безопасности 02.11) ----------
-- 1) Подписка на пуш — только адрес настоящей службы браузера (иначе функция могла бы стучаться куда угодно), не больше 10 устройств.
alter table public.push_subs drop constraint if exists push_subs_endpoint_ok;
alter table public.push_subs add constraint push_subs_endpoint_ok check (
  endpoint ~* '^https://([a-z0-9-]+\.)*(fcm\.googleapis\.com|android\.googleapis\.com|updates\.push\.services\.mozilla\.com|notify\.windows\.com|push\.apple\.com)/'
  and char_length(endpoint) <= 1000 and char_length(p256dh) <= 200 and char_length(auth) <= 100) not valid;
create or replace function public.push_subs_limit() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from public.push_subs where user_id = new.user_id and endpoint <> new.endpoint) >= 10 then
    delete from public.push_subs where endpoint = (select endpoint from public.push_subs where user_id = new.user_id order by created_at limit 1);
  end if;
  return new;
end $$;
drop trigger if exists push_subs_limit on public.push_subs;
create trigger push_subs_limit before insert on public.push_subs for each row execute function public.push_subs_limit();

-- С какого адреса сайта подписано устройство. Пуш открывает тот адрес, где подписались,
-- поэтому подписки со старого адреса (denisv1.github.io/aac-study, до переезда 02.11 ~18:48 UTC) удаляем.
alter table public.push_subs add column if not exists origin text;
delete from public.push_subs where origin is null and created_at < '2026-11-02 18:48:00+00';

-- 2) Сообщения о проблемах: не больше ~4 МБ (4 фото), 10 в час и 300 всего от одного человека.
alter table public.issues drop constraint if exists issues_info_size;
alter table public.issues add constraint issues_info_size check (octet_length(info::text) <= 4500000) not valid;
create or replace function public.issues_limit() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from public.issues where user_id = new.user_id and created_at > now() - interval '1 hour') >= 10 then raise exception 'too_many_reports'; end if;
  if (select count(*) from public.issues where user_id = new.user_id) >= 300 then raise exception 'too_many_reports'; end if;
  -- всего от одного человека не больше ~30 МБ (03.11)
  if new.user_id is not null and (select coalesce(sum(octet_length(i.info::text)), 0) from public.issues i where i.user_id = new.user_id)
     + octet_length(new.info::text) > 30000000 then raise exception 'too_many_reports'; end if;
  return new;
end $$;
drop trigger if exists issues_limit on public.issues;
create trigger issues_limit before insert on public.issues for each row execute function public.issues_limit();

-- Сообщение о проблеме от гостя (экран входа/регистрации, ещё без аккаунта). Просьба Дениса 03.11.
-- Защита от спама: до ~1,5 МБ (2 фото); с одного адреса (IP) 5 в час; 30 в час на весь сайт;
-- непрочитанных гостевых не больше 60 и не больше ~40 МБ (проверка безопасности 03.11).
-- IP не хранится: только его хеш с секретной солью, чтобы считать лимит.
alter table public.issues add column if not exists src text;
create or replace function public.report_issue_guest(p jsonb) returns bigint
language plpgsql security definer set search_path = public as $$
declare new_id bigint; hdr jsonb; ip text; tag text;
begin
  if p is null or jsonb_typeof(p) <> 'object' then raise exception 'bad_report'; end if;
  if octet_length(p::text) > 1600000 then raise exception 'report_too_big'; end if;
  begin hdr := nullif(current_setting('request.headers', true), '')::jsonb; exception when others then hdr := null; end;
  ip := coalesce(hdr->>'cf-connecting-ip', split_part(coalesce(hdr->>'x-forwarded-for', ''), ',', 1), '');
  tag := case when btrim(ip) = '' then null
    else md5(btrim(ip) || coalesce((select value from public.app_secrets where key = 'ip_salt'), 'aac')) end;
  if tag is not null and (select count(*) from public.issues i where i.src = tag and i.created_at > now() - interval '1 hour') >= 5
    then raise exception 'too_many_reports'; end if;
  if (select count(*) from public.issues i where i.user_id is null and i.info->>'type' = 'guest' and i.created_at > now() - interval '1 hour') >= 30
    then raise exception 'too_many_reports'; end if;
  if (select count(*) from public.issues i where i.user_id is null and i.info->>'type' = 'guest' and not i.resolved) >= 60
    then raise exception 'too_many_reports'; end if;
  if (select coalesce(sum(octet_length(i.info::text)), 0) from public.issues i where i.user_id is null and not i.resolved) > 40000000
    then raise exception 'too_many_reports'; end if;
  -- только известные поля и только текст (иначе странные данные могли сломать список у админа); картинки — только data:image/…
  insert into public.issues(user_id, info, src)
  values (null, jsonb_strip_nulls(jsonb_build_object(
      'type', 'guest',
      'text', left(case when jsonb_typeof(p->'text') = 'string' then p->>'text' end, 20000),
      'html', left(case when jsonb_typeof(p->'html') = 'string' then p->>'html' end, 1500000),
      'email', left(case when jsonb_typeof(p->'email') = 'string' then p->>'email' end, 200),
      'where', left(case when jsonb_typeof(p->'where') = 'string' then p->>'where' end, 40),
      'err', left(case when jsonb_typeof(p->'err') = 'string' then p->>'err' end, 400),
      'errText', left(case when jsonb_typeof(p->'errText') = 'string' then p->>'errText' end, 400),
      'errAt', left(case when jsonb_typeof(p->'errAt') in ('string', 'number') then p->>'errAt' end, 40),
      'page', left(case when jsonb_typeof(p->'page') = 'string' then p->>'page' end, 80),
      'ua', left(case when jsonb_typeof(p->'ua') = 'string' then p->>'ua' end, 400),
      'lang', left(case when jsonb_typeof(p->'lang') = 'string' then p->>'lang' end, 10),
      'screen', left(case when jsonb_typeof(p->'screen') = 'string' then p->>'screen' end, 40),
      'images', case when jsonb_typeof(p->'images') = 'array' then
        (select coalesce(jsonb_agg(x), '[]'::jsonb) from (select x from jsonb_array_elements(p->'images') x
          where jsonb_typeof(x) = 'string' and x #>> '{}' like 'data:image/%' limit 2) z) end)), tag)
  returning id into new_id;
  return new_id;
end $$;
revoke execute on function public.report_issue_guest(jsonb) from public;
grant execute on function public.report_issue_guest(jsonb) to anon, authenticated;

-- 3) Очки только за то, что есть на сайте: список ключей (уроки, задачи) заполняет страница setup.html.
--    Пока список пуст (старая настройка), проверка не включается — чтобы ничего не сломать.
create table if not exists public.award_keys (key text primary key);
alter table public.award_keys enable row level security;   -- без политик: снаружи не видно
revoke all on public.award_keys from anon, authenticated;
create or replace function public.award_key_ok(p_key text) returns boolean
language sql stable security definer set search_path = public as $$
  select not exists(select 1 from public.award_keys limit 1)
      or exists(select 1 from public.award_keys where key = p_key)
      or (p_key like 'download:%' and exists(select 1 from public.award_keys where key = 'read:' || split_part(p_key, ':', 2))
          and split_part(p_key, ':', 3) in ('he', 'ru', 'offline'));
$$;
revoke execute on function public.award_key_ok(text) from public, anon, authenticated;

-- ============ Пароль: менять можно не чаще раза в 24 часа (просьба 02.11) ============
-- Работает и для «Забыл пароль?», и для смены пароля. Время последней смены видит только сам человек.
create table if not exists public.pass_changes (
  user_id uuid primary key references auth.users(id) on delete cascade,
  changed_at timestamptz not null default now()
);
alter table public.pass_changes enable row level security;
drop policy if exists "pass_changes: read own" on public.pass_changes;
create policy "pass_changes: read own" on public.pass_changes for select to authenticated using (user_id = auth.uid());
revoke insert, update, delete on public.pass_changes from anon, authenticated;
grant select on public.pass_changes to authenticated;

create or replace function public.pass_cooldown() returns trigger
language plpgsql security definer set search_path = public as $$
declare last timestamptz;
begin
  -- первый пароль (регистрация) не считается; считается только замена старого
  if new.encrypted_password is distinct from old.encrypted_password
     and coalesce(old.encrypted_password, '') <> '' then
    select changed_at into last from public.pass_changes where user_id = new.id;
    if last is not null and last > now() - interval '24 hours' then
      raise exception 'pass_cooldown';
    end if;
    insert into public.pass_changes(user_id, changed_at) values (new.id, now())
      on conflict (user_id) do update set changed_at = excluded.changed_at;
  end if;
  return new;
end $$;
revoke execute on function public.pass_cooldown() from public, anon, authenticated;
drop trigger if exists pass_cooldown on auth.users;
create trigger pass_cooldown before update of encrypted_password on auth.users
  for each row execute function public.pass_cooldown();

-- Проверка безопасности 03.11: настройки профиля не больше ~8 КБ.
alter table public.profiles drop constraint if exists profiles_prefs_size;
alter table public.profiles add constraint profiles_prefs_size check (octet_length(prefs::text) <= 8000) not valid;

-- =====================================================================
-- Домашние задания (03.11): «Я сделал» + ежедневное напоминание.
-- Список заданий (hw_items) setup.html заполняет из data/homework.js, расписание (pg_cron) — тоже там.
-- =====================================================================
create table if not exists public.hw_items (
  id text primary key check (id ~ '^[a-z0-9-]{1,80}$'),
  due timestamptz,
  title jsonb not null default '{}'::jsonb
);
alter table public.hw_items enable row level security;
drop policy if exists "hw_items: read" on public.hw_items;
create policy "hw_items: read" on public.hw_items for select to authenticated using (true);
revoke all on public.hw_items from anon;
revoke insert, update, delete on public.hw_items from authenticated;
grant select on public.hw_items to authenticated;

create table if not exists public.hw_done (
  user_id uuid not null default auth.uid() references public.profiles(id) on delete cascade,
  hw_id text not null check (hw_id ~ '^[a-z0-9-]{1,80}$'),
  done_at timestamptz not null default now(),
  primary key (user_id, hw_id)
);
alter table public.hw_done enable row level security;
drop policy if exists "hw_done: read own" on public.hw_done;
create policy "hw_done: read own" on public.hw_done for select to authenticated using (user_id = auth.uid());
drop policy if exists "hw_done: add own" on public.hw_done;
create policy "hw_done: add own" on public.hw_done for insert to authenticated
  with check (user_id = auth.uid() and exists (select 1 from public.hw_items i where i.id = hw_id));
drop policy if exists "hw_done: remove own" on public.hw_done;
create policy "hw_done: remove own" on public.hw_done for delete to authenticated using (user_id = auth.uid());
revoke all on public.hw_done from anon;
revoke update on public.hw_done from authenticated;
grant select, insert, delete on public.hw_done to authenticated;

-- ключ, с которым расписание зовёт функцию push (снаружи его никто не видит)
insert into public.app_secrets(key, value) values ('cron_key', replace(gen_random_uuid()::text || gen_random_uuid()::text, '-', ''))
  on conflict (key) do nothing;

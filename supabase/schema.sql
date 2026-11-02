-- =====================================================================
-- Учебный сайт: база Supabase (этап 1). Запускается один раз в SQL Editor.
-- Профили, очки, журнал проблем, аватарки. Права проверяет сама база (RLS).
-- =====================================================================

-- Код приглашения хранится только в базе (его не видно в коде сайта).
create table if not exists public.app_secrets (key text primary key, value text not null);
alter table public.app_secrets enable row level security;  -- нет политик = никто снаружи не читает
insert into public.app_secrets(key, value) values ('invite_code', 'CHANGE-ME') on conflict (key) do nothing;

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
create policy "profiles: read by members" on public.profiles for select to authenticated using (true);
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
  select not exists(select 1 from public.profiles) into is_first;
  insert into public.profiles(id, name, role)
  values (new.id, coalesce(nullif(trim(new.raw_user_meta_data->>'name'), ''), split_part(new.email, '@', 1)),
          case when is_first then 'admin' else 'student' end);
  return new;
end $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- Очки: за каждый ключ один раз. Сколько очков — решает база, не браузер.
create table if not exists public.progress (
  user_id uuid not null references public.profiles(id) on delete cascade,
  key text not null check (char_length(key) <= 200),
  points int not null,
  created_at timestamptz not null default now(),
  primary key (user_id, key)
);
alter table public.progress enable row level security;
create policy "progress: read own" on public.progress for select to authenticated using (user_id = auth.uid());

create or replace function public.award(p_key text, p_kind text default null, p_level int default 0) returns json
language plpgsql security definer set search_path = public as $$
declare pts int; fam text; new_xp int;
begin
  if auth.uid() is null then raise exception 'no_session'; end if;
  fam := split_part(p_key, ':', 1);
  if fam not in ('read', 'download', 'solve') then raise exception 'bad_key'; end if;
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
create policy "issues: anyone signed in can report" on public.issues for insert to authenticated with check (user_id = auth.uid());
create policy "issues: reporter sees own" on public.issues for select to authenticated using (user_id = auth.uid());
create policy "issues: admin reads" on public.issues for select to authenticated
  using (exists(select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));
create policy "issues: admin updates" on public.issues for update to authenticated
  using (exists(select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));

-- Аватарки: публичное чтение, запись только в свою папку <user_id>/...
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('avatars', 'avatars', true, 204800, array['image/jpeg','image/png','image/webp'])
on conflict (id) do nothing;
create policy "avatars: upload own" on storage.objects for insert to authenticated
  with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "avatars: update own" on storage.objects for update to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);
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
create policy "push: own insert" on public.push_subs for insert to authenticated with check (user_id = auth.uid());
create policy "push: own update" on public.push_subs for update to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "push: own read" on public.push_subs for select to authenticated using (user_id = auth.uid());
create policy "push: own delete" on public.push_subs for delete to authenticated using (user_id = auth.uid());

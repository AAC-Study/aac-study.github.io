-- =====================================================================
-- Учебный сайт: люди, друзья, чаты, группы (этап 2).
-- Запускать ПОСЛЕ schema.sql, один раз, в Supabase → SQL Editor.
-- Скрипт можно запускать повторно: он пересоздаёт функции и политики.
--
-- Все правила проверяет сама база (RLS + триггеры + функции security definer),
-- поэтому из консоли браузера обойти их нельзя:
--   * заявки/дружба/блокировка/закреп — только через функции sc_*;
--   * личный чат — только между взаимными друзьями, без блокировки;
--   * группы: права участников, права админов, «пишут только админы»,
--     медленный режим, запрещённые слова, автоудаление (expires_at),
--     ограничение и бан (в том числе до даты), максимум 50 участников;
--   * фото/файлы чата лежат в закрытом бакете `chat`, читать могут только участники.
-- Ошибки приходят как текст 'sc_err_*' — сайт переводит их на язык пользователя.
-- =====================================================================

-- ---------- уровни (та же формула, что в js/store.js) ----------
create or replace function public.sc_level(p_xp int) returns int
language plpgsql immutable set search_path = public as $$
declare lvl int := 0; need int := 50; lft int := coalesce(p_xp, 0);
begin
  while lvl < 90 and lft >= need loop
    lft := lft - need; lvl := lvl + 1; need := 50 + 25 * lvl;
  end loop;
  return lvl;
end $$;

-- ---------- оформление: с какого уровня открывается стиль ----------
create table if not exists public.sc_style_levels (
  kind text not null check (kind in ('nick', 'bubble', 'bg')),
  id text not null,
  lvl int not null,
  primary key (kind, id)
);
alter table public.sc_style_levels enable row level security;
drop policy if exists "styles: read" on public.sc_style_levels;
create policy "styles: read" on public.sc_style_levels for select to authenticated using (true);
-- держать в синхронизации с js/social.js (STYLES)
insert into public.sc_style_levels(kind, id, lvl) values
  ('nick','plain',0),('nick','accent',0),('nick','ocean',2),('nick','sunset',4),('nick','mint',6),
  ('nick','berry',8),('nick','royal',10),('nick','retro',13),('nick','ember',16),('nick','frost',20),
  ('nick','shimmer',10),('nick','aurora',15),('nick','glow',20),('nick','wave',25),('nick','neon',30),
  ('nick','rainbow',40),('nick','fire',50),('nick','galaxy',60),('nick','glitch',75),('nick','celestial',90),
  ('bubble','classic',0),('bubble','soft',0),('bubble','glass',2),('bubble','outline',4),('bubble','paper',6),
  ('bubble','mint',8),('bubble','sky',10),('bubble','rose',13),('bubble','midnight',16),('bubble','sunset',20),
  ('bubble','aurora',10),('bubble','shimmer',15),('bubble','neon',20),('bubble','prism',25),('bubble','stars',30),
  ('bubble','lava',40),('bubble','ocean',50),('bubble','holo',60),('bubble','ember',75),('bubble','cosmic',90),
  ('bg','plain',0),('bg','dots',0),('bg','grid',2),('bg','waves',4),('bg','dawn',6),
  ('bg','mint',8),('bg','night',10),('bg','paper',13),('bg','stripes',16),('bg','prism',20),
  ('bg','aurora',10),('bg','stars',15),('bg','bubbles',20),('bg','flow',25),('bg','rain',30),
  ('bg','snow',40),('bg','nebula',50),('bg','pulse',60),('bg','tide',75),('bg','petals',90)
on conflict (kind, id) do update set lvl = excluded.lvl;

-- закрытый стиль нельзя выбрать даже через консоль: проверка при изменении prefs
create or replace function public.sc_check_prefs() returns trigger
language plpgsql security definer set search_path = public as $$
declare r record; v text; need int; lvl int;
begin
  if new.prefs is not distinct from old.prefs then return new; end if;
  lvl := public.sc_level(new.xp);
  for r in select * from (values ('nickStyle', 'nick'), ('bubbleStyle', 'bubble'), ('chatBg', 'bg')) as x(k, kind) loop
    v := new.prefs ->> r.k;
    if v is not null and v is distinct from (old.prefs ->> r.k) then
      select s.lvl into need from public.sc_style_levels s where s.kind = r.kind and s.id = v;
      if need is null or need > lvl then raise exception 'sc_err_locked'; end if;
    end if;
  end loop;
  return new;
end $$;
drop trigger if exists sc_profiles_prefs on public.profiles;
create trigger sc_profiles_prefs before update of prefs on public.profiles
  for each row execute function public.sc_check_prefs();

-- =====================================================================
-- ДРУЗЬЯ
-- =====================================================================
create table if not exists public.friend_requests (
  from_id uuid not null references public.profiles(id) on delete cascade,
  to_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (from_id, to_id),
  check (from_id <> to_id)
);
create index if not exists friend_requests_to on public.friend_requests(to_id);

-- взаимная дружба: одна строка на пару, user_a < user_b
create table if not exists public.friendships (
  user_a uuid not null references public.profiles(id) on delete cascade,
  user_b uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_a, user_b),
  check (user_a < user_b)
);
create index if not exists friendships_b on public.friendships(user_b);

-- личные отметки: закреп, блок, «удалён из друзей» — видит только владелец
create table if not exists public.user_marks (
  owner_id uuid not null references public.profiles(id) on delete cascade,
  target_id uuid not null references public.profiles(id) on delete cascade,
  pinned boolean not null default false,
  blocked boolean not null default false,
  removed boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (owner_id, target_id),
  check (owner_id <> target_id)
);

create table if not exists public.sc_notifications (
  id bigint generated always as identity primary key,
  user_id uuid not null references public.profiles(id) on delete cascade,
  kind text not null check (kind in ('request', 'accepted', 'added')),
  actor_id uuid references public.profiles(id) on delete cascade,
  chat_id uuid,
  seen boolean not null default false,
  created_at timestamptz not null default now()
);
create index if not exists sc_notifications_user on public.sc_notifications(user_id, created_at desc);

alter table public.friend_requests enable row level security;
alter table public.friendships enable row level security;
alter table public.user_marks enable row level security;
alter table public.sc_notifications enable row level security;

drop policy if exists "requests: own" on public.friend_requests;
create policy "requests: own" on public.friend_requests for select to authenticated
  using (from_id = auth.uid() or to_id = auth.uid());
drop policy if exists "friendships: own" on public.friendships;
create policy "friendships: own" on public.friendships for select to authenticated
  using (auth.uid() in (user_a, user_b));
drop policy if exists "marks: own" on public.user_marks;
create policy "marks: own" on public.user_marks for select to authenticated using (owner_id = auth.uid());
drop policy if exists "notif: own read" on public.sc_notifications;
create policy "notif: own read" on public.sc_notifications for select to authenticated using (user_id = auth.uid());
drop policy if exists "notif: own seen" on public.sc_notifications;
create policy "notif: own seen" on public.sc_notifications for update to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());
drop policy if exists "notif: own delete" on public.sc_notifications;
create policy "notif: own delete" on public.sc_notifications for delete to authenticated using (user_id = auth.uid());

-- писать напрямую нельзя: только функции ниже (security definer)
revoke insert, update, delete on public.friend_requests, public.friendships, public.user_marks from anon, authenticated;
revoke insert, update on public.sc_notifications from anon, authenticated;
grant update (seen) on public.sc_notifications to authenticated;
revoke all on public.sc_style_levels from anon;
revoke insert, update, delete on public.sc_style_levels from authenticated;

-- ---------- внутренние проверки ----------
create or replace function public.sc_are_friends(x uuid, y uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists(select 1 from public.friendships where user_a = least(x, y) and user_b = greatest(x, y));
$$;
create or replace function public.sc_blocked_either(x uuid, y uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists(select 1 from public.user_marks where blocked
    and ((owner_id = x and target_id = y) or (owner_id = y and target_id = x)));
$$;
create or replace function public.sc_mark(p_owner uuid, p_target uuid, p_field text, p_on boolean) returns void
language plpgsql security definer set search_path = public as $$
begin
  insert into public.user_marks(owner_id, target_id) values (p_owner, p_target) on conflict do nothing;
  if p_field = 'pinned' then update public.user_marks set pinned = p_on, updated_at = now() where owner_id = p_owner and target_id = p_target;
  elsif p_field = 'blocked' then update public.user_marks set blocked = p_on, updated_at = now() where owner_id = p_owner and target_id = p_target;
  elsif p_field = 'removed' then update public.user_marks set removed = p_on, updated_at = now() where owner_id = p_owner and target_id = p_target;
  end if;
end $$;
revoke execute on function public.sc_are_friends(uuid, uuid) from public, anon, authenticated;
revoke execute on function public.sc_blocked_either(uuid, uuid) from public, anon, authenticated;
revoke execute on function public.sc_mark(uuid, uuid, text, boolean) from public, anon, authenticated;

create or replace function public.sc_uid() returns uuid
language plpgsql stable set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'sc_err_auth'; end if;
  return auth.uid();
end $$;

-- ---------- заявки и дружба ----------
create or replace function public.sc_friend_accept(p_from uuid) returns text
language plpgsql security definer set search_path = public as $$
declare me uuid := public.sc_uid();
begin
  delete from public.friend_requests where from_id = p_from and to_id = me;
  if not found then raise exception 'sc_err_no_request'; end if;
  delete from public.friend_requests where from_id = me and to_id = p_from;
  if public.sc_blocked_either(me, p_from) then raise exception 'sc_err_blocked'; end if;
  insert into public.friendships(user_a, user_b) values (least(me, p_from), greatest(me, p_from)) on conflict do nothing;
  update public.user_marks set removed = false where (owner_id = me and target_id = p_from) or (owner_id = p_from and target_id = me);
  update public.sc_notifications set seen = true where user_id = me and actor_id = p_from and kind = 'request';
  insert into public.sc_notifications(user_id, kind, actor_id) values (p_from, 'accepted', me);
  return 'friend';
end $$;

create or replace function public.sc_friend_request(p_to uuid) returns text
language plpgsql security definer set search_path = public as $$
declare me uuid := public.sc_uid();
begin
  if p_to = me then raise exception 'sc_err_self'; end if;
  if not exists(select 1 from public.profiles where id = p_to) then raise exception 'sc_err_generic'; end if;
  if public.sc_blocked_either(me, p_to) then raise exception 'sc_err_blocked'; end if;
  if public.sc_are_friends(me, p_to) then return 'friend'; end if;
  if exists(select 1 from public.friend_requests where from_id = p_to and to_id = me) then
    return public.sc_friend_accept(p_to);   -- встречная заявка = дружба
  end if;
  insert into public.friend_requests(from_id, to_id) values (me, p_to) on conflict do nothing;
  if found then
    delete from public.sc_notifications where user_id = p_to and actor_id = me and kind = 'request';
    insert into public.sc_notifications(user_id, kind, actor_id) values (p_to, 'request', me);
  end if;
  return 'outgoing';
end $$;

create or replace function public.sc_friend_cancel(p_to uuid) returns text
language plpgsql security definer set search_path = public as $$
declare me uuid := public.sc_uid();
begin
  delete from public.friend_requests where from_id = me and to_id = p_to;
  delete from public.sc_notifications where user_id = p_to and actor_id = me and kind = 'request';
  return 'none';
end $$;

create or replace function public.sc_friend_decline(p_from uuid) returns text
language plpgsql security definer set search_path = public as $$
declare me uuid := public.sc_uid();
begin
  delete from public.friend_requests where from_id = p_from and to_id = me;
  update public.sc_notifications set seen = true where user_id = me and actor_id = p_from and kind = 'request';
  return 'none';
end $$;

create or replace function public.sc_friend_remove(p_other uuid) returns text
language plpgsql security definer set search_path = public as $$
declare me uuid := public.sc_uid();
begin
  delete from public.friendships where user_a = least(me, p_other) and user_b = greatest(me, p_other);
  if found then perform public.sc_mark(me, p_other, 'removed', true); end if;
  return 'removed';
end $$;

create or replace function public.sc_friend_restore(p_other uuid) returns text
language plpgsql security definer set search_path = public as $$
declare me uuid := public.sc_uid();
begin
  if not exists(select 1 from public.user_marks where owner_id = me and target_id = p_other and removed) then
    raise exception 'sc_err_generic';
  end if;
  if public.sc_blocked_either(me, p_other) then raise exception 'sc_err_blocked'; end if;
  insert into public.friendships(user_a, user_b) values (least(me, p_other), greatest(me, p_other)) on conflict do nothing;
  perform public.sc_mark(me, p_other, 'removed', false);
  return 'friend';
end $$;

create or replace function public.sc_block(p_other uuid, p_on boolean) returns text
language plpgsql security definer set search_path = public as $$
declare me uuid := public.sc_uid();
begin
  if p_other = me then raise exception 'sc_err_self'; end if;
  perform public.sc_mark(me, p_other, 'blocked', coalesce(p_on, true));
  if coalesce(p_on, true) then
    delete from public.friend_requests where (from_id = me and to_id = p_other) or (from_id = p_other and to_id = me);
    delete from public.sc_notifications where user_id = me and actor_id = p_other and kind = 'request';
  end if;
  return case when coalesce(p_on, true) then 'blocked' else 'none' end;
end $$;

create or replace function public.sc_pin_user(p_other uuid, p_on boolean) returns text
language plpgsql security definer set search_path = public as $$
declare me uuid := public.sc_uid();
begin
  if p_other = me then raise exception 'sc_err_self'; end if;
  perform public.sc_mark(me, p_other, 'pinned', coalesce(p_on, true));
  return 'ok';
end $$;

-- публичная статистика профиля: только числа, ничего личного
create or replace function public.sc_public_stats(p_user uuid) returns json
language sql stable security definer set search_path = public as $$
  select json_build_object(
    'read', (select count(*) from public.progress where user_id = p_user and key like 'read:%'),
    'solved', (select count(*) from public.progress where user_id = p_user and key like 'solve:%'),
    'friends', (select count(*) from public.friendships where p_user in (user_a, user_b)))
  where auth.uid() is not null;
$$;

-- =====================================================================
-- ЧАТЫ
-- =====================================================================
create table if not exists public.chats (
  id uuid primary key default gen_random_uuid(),
  kind text not null,
  direct_key text unique,
  title text check (title is null or char_length(title) between 1 and 64),
  about text check (about is null or char_length(about) <= 300),
  bg text,
  owner_id uuid references public.profiles(id) on delete set null,
  pinned_msg_id bigint,
  -- что могут обычные участники (как в Telegram)
  p_text boolean not null default true,
  p_photos boolean not null default true,
  p_files boolean not null default true,
  p_stickers boolean not null default true,
  p_links boolean not null default true,
  p_reactions boolean not null default true,
  p_add boolean not null default true,
  p_pin boolean not null default true,
  p_info boolean not null default false,
  -- настройки группы
  only_admins boolean not null default false,
  slow_sec int not null default 0 check (slow_sec between 0 and 86400),
  autodel_sec int not null default 0 check (autodel_sec between 0 and 31622400),
  autodel_scope text not null default 'all' check (autodel_scope in ('all', 'except_admins')),
  banned_words text[] not null default '{}' check (cardinality(banned_words) <= 200),
  created_at timestamptz not null default now(),
  last_msg_at timestamptz not null default now()
);

-- 'support' — личная переписка пользователя с админами сайта («Сообщить о проблеме»), без дружбы
alter table public.chats drop constraint if exists chats_kind_check;
alter table public.chats add constraint chats_kind_check check (kind in ('direct', 'group', 'support'));

create table if not exists public.chat_members (
  chat_id uuid not null references public.chats(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  role text not null default 'member' check (role in ('owner', 'admin', 'member')),
  -- права админа
  r_info boolean not null default false,
  r_delete boolean not null default false,
  r_ban boolean not null default false,
  r_add boolean not null default false,
  r_pin boolean not null default false,
  r_promote boolean not null default false,
  promoted_by uuid,
  restricted_until timestamptz,          -- может читать, но не писать (до даты; 'infinity' = навсегда)
  last_read_at timestamptz not null default now(),
  last_sent_at timestamptz,
  joined_at timestamptz not null default now(),
  primary key (chat_id, user_id)
);
create index if not exists chat_members_user on public.chat_members(user_id);
-- «без уведомлений»: свой переключатель у каждого участника чата
alter table public.chat_members add column if not exists muted boolean not null default false;

create table if not exists public.chat_bans (
  chat_id uuid not null references public.chats(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  until timestamptz,                     -- null = навсегда
  by_id uuid,
  created_at timestamptz not null default now(),
  primary key (chat_id, user_id)
);

create table if not exists public.messages (
  id bigint generated always as identity primary key,
  chat_id uuid not null references public.chats(id) on delete cascade,
  sender_id uuid references public.profiles(id) on delete set null default auth.uid(),
  kind text not null default 'text' check (kind in ('text', 'photo', 'file', 'sticker', 'system')),
  body text check (body is null or char_length(body) <= 4000),
  media_path text,
  file_name text check (file_name is null or char_length(file_name) <= 200),
  file_size int,
  reply_to bigint references public.messages(id) on delete set null,
  deleted boolean not null default false,
  edited_at timestamptz,
  expires_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists messages_chat_id on public.messages(chat_id, id);
create index if not exists messages_chat_upd on public.messages(chat_id, updated_at);
create index if not exists messages_expires on public.messages(expires_at) where expires_at is not null;

create table if not exists public.reactions (
  message_id bigint not null references public.messages(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  emoji text not null check (char_length(emoji) between 1 and 16),
  created_at timestamptz not null default now(),
  primary key (message_id, user_id)       -- одна реакция от человека на сообщение
);

alter table public.chats enable row level security;
alter table public.chat_members enable row level security;
alter table public.chat_bans enable row level security;
alter table public.messages enable row level security;
alter table public.reactions enable row level security;

-- ---------- помощники для политик (security definer, без рекурсии RLS) ----------
create or replace function public.sc_is_member(p_chat uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists(select 1 from public.chat_members where chat_id = p_chat and user_id = auth.uid());
$$;
create or replace function public.sc_try_uuid(p text) returns uuid
language plpgsql immutable as $$
begin return p::uuid; exception when others then return null; end $$;
create or replace function public.sc_msg_chat(p_msg bigint) returns uuid
language sql stable security definer set search_path = public as $$
  select chat_id from public.messages where id = p_msg and (expires_at is null or expires_at > now());
$$;
create or replace function public.sc_has_banned(p_words text[], p_text text) returns boolean
language sql immutable as $$
  select p_text is not null and exists(
    select 1 from unnest(coalesce(p_words, '{}')) w
    where btrim(w) <> '' and position(lower(btrim(w)) in lower(p_text)) > 0);
$$;
create or replace function public.sc_has_link(p_text text) returns boolean
language sql immutable as $$
  select coalesce(p_text ~* '(https?://|www\.)\S+|\m[a-z0-9-]+\.(com|net|org|io|ru|il|co|me|app|dev|info|ly|gg|tv|xyz|link)\M', false);
$$;
-- может ли пользователь загружать фото/файлы в этот чат (политика бакета)
create or replace function public.sc_can_upload(p_chat uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists(
    select 1 from public.chat_members m join public.chats c on c.id = m.chat_id
    where m.chat_id = p_chat and m.user_id = auth.uid()
      and (c.kind in ('direct', 'support') or m.role in ('owner', 'admin') or (
        not c.only_admins and (m.restricted_until is null or m.restricted_until <= now()) and (c.p_photos or c.p_files))));
$$;
-- права в группе: 'info' | 'settings' | 'delete' | 'ban' | 'add' | 'pin' | 'promote'
create or replace function public.sc_can(p_chat uuid, p_user uuid, p_what text) returns boolean
language plpgsql stable security definer set search_path = public as $$
declare c public.chats; m public.chat_members;
begin
  select * into c from public.chats where id = p_chat;
  select * into m from public.chat_members where chat_id = p_chat and user_id = p_user;
  if c.id is null or m.user_id is null then return false; end if;
  if c.kind = 'direct' then return p_what = 'pin'; end if;
  if c.kind = 'support' then return false; end if;
  if m.role = 'owner' then return true; end if;
  if m.role = 'admin' then
    -- админ может всё, что могут обычные участники, плюс свои права
    return case p_what when 'info' then m.r_info or c.p_info when 'settings' then m.r_ban when 'delete' then m.r_delete
      when 'ban' then m.r_ban when 'add' then m.r_add or c.p_add when 'pin' then m.r_pin or c.p_pin
      when 'promote' then m.r_promote else false end;
  end if;
  if m.restricted_until is not null and m.restricted_until > now() then return false; end if;
  return case p_what when 'info' then c.p_info when 'add' then c.p_add when 'pin' then c.p_pin else false end;
end $$;
revoke execute on function public.sc_can(uuid, uuid, text) from public, anon, authenticated;
revoke execute on function public.sc_msg_chat(bigint) from public, anon;
revoke execute on function public.sc_can_upload(uuid) from public, anon;
revoke execute on function public.sc_is_member(uuid) from public, anon;

-- ---------- политики ----------
drop policy if exists "chats: members read" on public.chats;
create policy "chats: members read" on public.chats for select to authenticated using (public.sc_is_member(id));
drop policy if exists "members: members read" on public.chat_members;
create policy "members: members read" on public.chat_members for select to authenticated using (public.sc_is_member(chat_id));
drop policy if exists "bans: members read" on public.chat_bans;
create policy "bans: members read" on public.chat_bans for select to authenticated using (public.sc_is_member(chat_id));
drop policy if exists "messages: members read" on public.messages;
create policy "messages: members read" on public.messages for select to authenticated
  using (public.sc_is_member(chat_id) and (expires_at is null or expires_at > now()));
drop policy if exists "messages: members write" on public.messages;
create policy "messages: members write" on public.messages for insert to authenticated
  with check (public.sc_is_member(chat_id) and sender_id = auth.uid());
drop policy if exists "messages: edit own" on public.messages;
create policy "messages: edit own" on public.messages for update to authenticated
  using (sender_id = auth.uid() and not deleted and kind in ('text', 'photo', 'file'))
  with check (sender_id = auth.uid());
drop policy if exists "reactions: members read" on public.reactions;
create policy "reactions: members read" on public.reactions for select to authenticated
  using (public.sc_is_member(public.sc_msg_chat(message_id)));

revoke insert, update, delete on public.chats, public.chat_members, public.chat_bans, public.reactions from anon, authenticated;
revoke update, delete on public.messages from anon, authenticated;
grant update (body) on public.messages to authenticated;   -- редактировать можно только текст
revoke all on public.chats, public.chat_members, public.chat_bans, public.messages, public.reactions,
  public.friend_requests, public.friendships, public.user_marks, public.sc_notifications from anon;

-- ---------- триггер: каждое новое сообщение проходит все правила ----------
create or replace function public.sc_msg_before_insert() returns trigger
language plpgsql security definer set search_path = public as $$
declare c public.chats; m public.chat_members; me uuid := auth.uid(); other uuid; adm boolean; wait int;
begin
  select * into c from public.chats where id = new.chat_id;
  if c.id is null then raise exception 'sc_err_not_member'; end if;
  new.created_at := now(); new.updated_at := now(); new.deleted := false; new.edited_at := null; new.expires_at := null;

  if new.kind = 'system' then
    -- служебные строки («X добавил Y») пишут только функции sc_* ниже
    if coalesce(current_setting('sc.internal', true), '') <> '1' then raise exception 'sc_err_no_rights'; end if;
  else
    if me is null then raise exception 'sc_err_auth'; end if;
    new.sender_id := me;
    select * into m from public.chat_members where chat_id = new.chat_id and user_id = me;
    if m.user_id is null then raise exception 'sc_err_not_member'; end if;
    -- форма сообщения
    if new.kind in ('text', 'photo', 'file', 'sticker') and new.body is not null and btrim(new.body) = '' then new.body := null; end if;
    if new.kind = 'text' and new.body is null then raise exception 'sc_err_empty'; end if;
    if new.kind = 'sticker' and (new.body is null or char_length(new.body) > 16) then raise exception 'sc_err_empty'; end if;
    if new.kind in ('photo', 'file') then
      if new.media_path is null or new.media_path not like (new.chat_id::text || '/' || me::text || '/%') then raise exception 'sc_err_generic'; end if;
      if new.body is not null and char_length(new.body) > 1000 then raise exception 'sc_err_too_long'; end if;
    else
      new.media_path := null; new.file_name := null; new.file_size := null;
    end if;
    if new.kind = 'photo' then new.file_name := null; new.file_size := null; end if;
    if new.reply_to is not null and not exists(select 1 from public.messages where id = new.reply_to and chat_id = new.chat_id) then
      new.reply_to := null;
    end if;

    if c.kind = 'direct' then
      select user_id into other from public.chat_members where chat_id = c.id and user_id <> me limit 1;
      if other is null or not public.sc_are_friends(me, other) then raise exception 'sc_err_not_friends'; end if;
      if public.sc_blocked_either(me, other) then raise exception 'sc_err_blocked'; end if;
    elsif c.kind = 'group' then
      adm := m.role in ('owner', 'admin');
      if not adm then
        if c.only_admins then raise exception 'sc_err_only_admins'; end if;
        if m.restricted_until is not null and m.restricted_until > now() then raise exception 'sc_err_restricted'; end if;
        if new.kind = 'text' and not c.p_text then raise exception 'sc_err_no_text'; end if;
        if new.kind = 'photo' and not c.p_photos then raise exception 'sc_err_no_photos'; end if;
        if new.kind = 'file' and not c.p_files then raise exception 'sc_err_no_files'; end if;
        if new.kind = 'sticker' and not c.p_stickers then raise exception 'sc_err_no_stickers'; end if;
        if new.kind <> 'sticker' and not c.p_links and public.sc_has_link(new.body) then raise exception 'sc_err_no_links'; end if;
        if c.slow_sec > 0 and m.last_sent_at is not null and m.last_sent_at + make_interval(secs => c.slow_sec) > now() then
          wait := greatest(1, ceil(extract(epoch from (m.last_sent_at + make_interval(secs => c.slow_sec) - now())))::int);
          raise exception 'sc_err_slow' using hint = wait::text;
        end if;
      end if;
      if public.sc_has_banned(c.banned_words, new.body) or public.sc_has_banned(c.banned_words, new.file_name) then
        raise exception 'sc_err_banned_word';
      end if;
    end if;
    update public.chat_members set last_sent_at = now(), last_read_at = now() where chat_id = c.id and user_id = me;
  end if;

  if c.autodel_sec > 0 and not (c.kind = 'group' and c.autodel_scope = 'except_admins'
      and exists(select 1 from public.chat_members where chat_id = c.id and user_id = new.sender_id and role in ('owner', 'admin'))) then
    new.expires_at := now() + make_interval(secs => c.autodel_sec);
  end if;
  update public.chats set last_msg_at = now() where id = c.id;
  return new;
end $$;
drop trigger if exists sc_messages_bi on public.messages;
create trigger sc_messages_bi before insert on public.messages
  for each row execute function public.sc_msg_before_insert();

-- правка своего сообщения: те же запрещённые слова; служебные правки (удаление, реакции) — только из sc_*
create or replace function public.sc_msg_before_update() returns trigger
language plpgsql security definer set search_path = public as $$
declare c public.chats;
begin
  if coalesce(current_setting('sc.internal', true), '') = '1' then return new; end if;
  if old.deleted or old.kind not in ('text', 'photo', 'file') then raise exception 'sc_err_no_rights'; end if;
  if new.body is not null and btrim(new.body) = '' then new.body := null; end if;
  if old.kind = 'text' and new.body is null then raise exception 'sc_err_empty'; end if;
  if old.kind <> 'text' and new.body is not null and char_length(new.body) > 1000 then raise exception 'sc_err_too_long'; end if;
  select * into c from public.chats where id = old.chat_id;
  if c.kind = 'group' and public.sc_has_banned(c.banned_words, new.body) then raise exception 'sc_err_banned_word'; end if;
  if c.kind = 'group' and not c.p_links and public.sc_has_link(new.body)
     and not exists(select 1 from public.chat_members where chat_id = c.id and user_id = old.sender_id and role in ('owner', 'admin')) then
    raise exception 'sc_err_no_links';
  end if;
  -- менять можно только текст
  new.id := old.id; new.chat_id := old.chat_id; new.sender_id := old.sender_id; new.kind := old.kind;
  new.media_path := old.media_path; new.file_name := old.file_name; new.file_size := old.file_size; new.reply_to := old.reply_to;
  new.created_at := old.created_at; new.expires_at := old.expires_at; new.deleted := old.deleted;
  new.edited_at := now(); new.updated_at := now();
  return new;
end $$;
drop trigger if exists sc_messages_bu on public.messages;
create trigger sc_messages_bu before update on public.messages
  for each row execute function public.sc_msg_before_update();

-- служебная строка в чат
create or replace function public.sc_system(p_chat uuid, p_actor uuid, p_event text, p_target uuid) returns void
language plpgsql security definer set search_path = public as $$
begin
  perform set_config('sc.internal', '1', true);
  insert into public.messages(chat_id, sender_id, kind, body)
  values (p_chat, p_actor, 'system', json_build_object('e', p_event, 't', p_target)::text);
  perform set_config('sc.internal', '', true);
end $$;
revoke execute on function public.sc_system(uuid, uuid, text, uuid) from public, anon, authenticated;

-- ---------- список чатов с последним сообщением и счётчиком непрочитанных ----------
create or replace function public.sc_my_chats() returns json
language sql stable security definer set search_path = public as $$
  select coalesce(json_agg(x order by x.last_msg_at desc), '[]'::json) from (
    select c.id, c.kind, c.title, c.bg, c.pinned_msg_id, c.last_msg_at, me.role, me.muted, c.owner_id,
      (select count(*) from public.chat_members k where k.chat_id = c.id) as member_count,
      (select k.user_id from public.chat_members k where k.chat_id = c.id and k.user_id <> me.user_id limit 1) as other_id,
      (select row_to_json(l) from (
          select mm.id, mm.sender_id, mm.kind, mm.body, mm.file_name, mm.created_at from public.messages mm
          where mm.chat_id = c.id and not mm.deleted and (mm.expires_at is null or mm.expires_at > now())
          order by mm.id desc limit 1) l) as last,
      (select count(*) from public.messages mm where mm.chat_id = c.id and mm.created_at > me.last_read_at
          and mm.sender_id is distinct from me.user_id and not mm.deleted and mm.kind <> 'system'
          and (mm.expires_at is null or mm.expires_at > now())) as unread
    from public.chats c join public.chat_members me on me.chat_id = c.id and me.user_id = auth.uid()
  ) x;
$$;

create or replace function public.sc_mute(p_chat uuid, p_on boolean) returns void
language sql security definer set search_path = public as $$
  update public.chat_members set muted = coalesce(p_on, true) where chat_id = p_chat and user_id = auth.uid();
$$;

create or replace function public.sc_mark_read(p_chat uuid) returns void
language sql security definer set search_path = public as $$
  update public.chat_members set last_read_at = now() where chat_id = p_chat and user_id = auth.uid();
$$;

-- личный чат: только между взаимными друзьями
create or replace function public.sc_open_direct(p_other uuid) returns uuid
language plpgsql security definer set search_path = public as $$
declare me uuid := public.sc_uid(); k text; cid uuid;
begin
  if p_other = me then raise exception 'sc_err_self'; end if;
  k := least(me::text, p_other::text) || ':' || greatest(me::text, p_other::text);
  select id into cid from public.chats where direct_key = k;
  if cid is not null then return cid; end if;
  if not public.sc_are_friends(me, p_other) then raise exception 'sc_err_not_friends'; end if;
  if public.sc_blocked_either(me, p_other) then raise exception 'sc_err_blocked'; end if;
  insert into public.chats(kind, direct_key) values ('direct', k) on conflict (direct_key) do nothing returning id into cid;
  if cid is null then select id into cid from public.chats where direct_key = k; return cid; end if;
  insert into public.chat_members(chat_id, user_id) values (cid, me), (cid, p_other);
  return cid;
end $$;

-- переписка с поддержкой: пользователь + все админы сайта (дружба не нужна). Возвращает id чата.
create or replace function public.sc_support_open() returns uuid
language plpgsql security definer set search_path = public as $$
declare me uuid := public.sc_uid(); k text := 'support:' || me::text; cid uuid;
begin
  select id into cid from public.chats where direct_key = k;
  if cid is null then
    insert into public.chats(kind, direct_key, owner_id) values ('support', k, me)
      on conflict (direct_key) do nothing returning id into cid;
    if cid is null then select id into cid from public.chats where direct_key = k; end if;
  end if;
  insert into public.chat_members(chat_id, user_id) values (cid, me) on conflict do nothing;
  -- новые админы тоже видят переписку
  insert into public.chat_members(chat_id, user_id)
    select cid, p.id from public.profiles p where p.role = 'admin' on conflict do nothing;
  return cid;
end $$;

-- группа из друзей, максимум 50 человек
create or replace function public.sc_create_group(p_title text, p_members uuid[]) returns uuid
language plpgsql security definer set search_path = public as $$
declare me uuid := public.sc_uid(); cid uuid; x uuid; ids uuid[]; ttl text := btrim(coalesce(p_title, ''));
begin
  if ttl = '' or char_length(ttl) > 64 then raise exception 'sc_err_title'; end if;
  select coalesce(array_agg(distinct u), '{}') into ids from unnest(coalesce(p_members, '{}')) u where u <> me;
  if cardinality(ids) + 1 > 50 then raise exception 'sc_err_group_full'; end if;
  foreach x in array ids loop
    if not public.sc_are_friends(me, x) then raise exception 'sc_err_not_friends'; end if;
    if public.sc_blocked_either(me, x) then raise exception 'sc_err_blocked'; end if;
  end loop;
  insert into public.chats(kind, title, owner_id) values ('group', ttl, me) returning id into cid;
  insert into public.chat_members(chat_id, user_id, role, r_info, r_delete, r_ban, r_add, r_pin, r_promote)
    values (cid, me, 'owner', true, true, true, true, true, true);
  perform public.sc_system(cid, me, 'created', null);
  foreach x in array ids loop
    insert into public.chat_members(chat_id, user_id) values (cid, x);
    insert into public.sc_notifications(user_id, kind, actor_id, chat_id) values (x, 'added', me, cid);
  end loop;
  return cid;
end $$;

create or replace function public.sc_group_add(p_chat uuid, p_users uuid[]) returns int
language plpgsql security definer set search_path = public as $$
declare me uuid := public.sc_uid(); x uuid; n int := 0; total int; b public.chat_bans;
begin
  if not exists(select 1 from public.chats where id = p_chat and kind = 'group') then raise exception 'sc_err_not_member'; end if;
  if not public.sc_can(p_chat, me, 'add') then raise exception 'sc_err_no_rights'; end if;
  foreach x in array coalesce(p_users, '{}') loop
    continue when x = me or exists(select 1 from public.chat_members where chat_id = p_chat and user_id = x);
    if not public.sc_are_friends(me, x) then raise exception 'sc_err_not_friends'; end if;
    if public.sc_blocked_either(me, x) then raise exception 'sc_err_blocked'; end if;
    select * into b from public.chat_bans where chat_id = p_chat and user_id = x;
    if b.user_id is not null and (b.until is null or b.until > now()) then
      if not public.sc_can(p_chat, me, 'ban') then raise exception 'sc_err_user_banned'; end if;
    end if;
    delete from public.chat_bans where chat_id = p_chat and user_id = x;
    select count(*) into total from public.chat_members where chat_id = p_chat;
    if total >= 50 then raise exception 'sc_err_group_full'; end if;
    insert into public.chat_members(chat_id, user_id) values (p_chat, x);
    insert into public.sc_notifications(user_id, kind, actor_id, chat_id) values (x, 'added', me, p_chat);
    perform public.sc_system(p_chat, me, 'added', x);
    n := n + 1;
  end loop;
  return n;
end $$;

-- действия с участником: kick | ban | unban | restrict | unrestrict | promote | demote
create or replace function public.sc_member_action(p_chat uuid, p_user uuid, p_action text,
  p_until timestamptz default null, p_rights jsonb default '{}'::jsonb) returns text
language plpgsql security definer set search_path = public as $$
declare me uuid := public.sc_uid(); a public.chat_members; t public.chat_members; ok boolean;
begin
  if not exists(select 1 from public.chats where id = p_chat and kind = 'group') then raise exception 'sc_err_not_member'; end if;
  select * into a from public.chat_members where chat_id = p_chat and user_id = me;
  if a.user_id is null then raise exception 'sc_err_not_member'; end if;
  select * into t from public.chat_members where chat_id = p_chat and user_id = p_user;
  if p_user = me then raise exception 'sc_err_self'; end if;
  if t.role = 'owner' then raise exception 'sc_err_owner'; end if;

  if p_action in ('kick', 'ban', 'restrict', 'unrestrict') then
    if not public.sc_can(p_chat, me, 'ban') then raise exception 'sc_err_no_rights'; end if;
    -- админа может ограничить только владелец или тот, кто его назначил
    if t.role = 'admin' and not (a.role = 'owner' or t.promoted_by = me) then raise exception 'sc_err_no_rights'; end if;
    if p_action = 'ban' then
      insert into public.chat_bans(chat_id, user_id, until, by_id) values (p_chat, p_user, p_until, me)
        on conflict (chat_id, user_id) do update set until = excluded.until, by_id = excluded.by_id, created_at = now();
    end if;
    if p_action in ('kick', 'ban') then
      if t.user_id is null then return 'ok'; end if;
      delete from public.chat_members where chat_id = p_chat and user_id = p_user;
      perform public.sc_system(p_chat, me, case when p_action = 'ban' then 'banned' else 'kicked' end, p_user);
    elsif p_action = 'restrict' then
      if t.user_id is null then raise exception 'sc_err_not_member'; end if;
      update public.chat_members set restricted_until = coalesce(p_until, 'infinity'::timestamptz), role = 'member',
        r_info = false, r_delete = false, r_ban = false, r_add = false, r_pin = false, r_promote = false
        where chat_id = p_chat and user_id = p_user;
    else
      update public.chat_members set restricted_until = null where chat_id = p_chat and user_id = p_user;
    end if;
    return 'ok';
  elsif p_action = 'unban' then
    if not public.sc_can(p_chat, me, 'ban') then raise exception 'sc_err_no_rights'; end if;
    delete from public.chat_bans where chat_id = p_chat and user_id = p_user;
    return 'ok';
  elsif p_action = 'promote' then
    if t.user_id is null then raise exception 'sc_err_not_member'; end if;
    if not public.sc_can(p_chat, me, 'promote') then raise exception 'sc_err_no_rights'; end if;
    if t.role = 'admin' and not (a.role = 'owner' or t.promoted_by = me) then raise exception 'sc_err_no_rights'; end if;
    p_rights := coalesce(p_rights, '{}'::jsonb);
    -- нельзя дать право, которого нет у себя
    ok := a.role = 'owner' or not (
      (coalesce((p_rights->>'info')::boolean, false) and not a.r_info) or
      (coalesce((p_rights->>'delete')::boolean, false) and not a.r_delete) or
      (coalesce((p_rights->>'ban')::boolean, false) and not a.r_ban) or
      (coalesce((p_rights->>'add')::boolean, false) and not a.r_add) or
      (coalesce((p_rights->>'pin')::boolean, false) and not a.r_pin) or
      (coalesce((p_rights->>'promote')::boolean, false) and not a.r_promote));
    if not ok then raise exception 'sc_err_no_rights'; end if;
    update public.chat_members set role = 'admin', promoted_by = case when t.role = 'admin' then t.promoted_by else me end,
      restricted_until = null,
      r_info = coalesce((p_rights->>'info')::boolean, false), r_delete = coalesce((p_rights->>'delete')::boolean, false),
      r_ban = coalesce((p_rights->>'ban')::boolean, false), r_add = coalesce((p_rights->>'add')::boolean, false),
      r_pin = coalesce((p_rights->>'pin')::boolean, false), r_promote = coalesce((p_rights->>'promote')::boolean, false)
      where chat_id = p_chat and user_id = p_user;
    return 'ok';
  elsif p_action = 'demote' then
    if t.role <> 'admin' then return 'ok'; end if;
    if not (a.role = 'owner' or (public.sc_can(p_chat, me, 'promote') and t.promoted_by = me)) then raise exception 'sc_err_no_rights'; end if;
    update public.chat_members set role = 'member', promoted_by = null,
      r_info = false, r_delete = false, r_ban = false, r_add = false, r_pin = false, r_promote = false
      where chat_id = p_chat and user_id = p_user;
    return 'ok';
  end if;
  raise exception 'sc_err_generic';
end $$;

create or replace function public.sc_leave(p_chat uuid) returns void
language plpgsql security definer set search_path = public as $$
declare me uuid := public.sc_uid(); r text;
begin
  select m.role into r from public.chat_members m join public.chats c on c.id = m.chat_id
    where m.chat_id = p_chat and m.user_id = me and c.kind = 'group';
  if r is null then raise exception 'sc_err_not_member'; end if;
  if r = 'owner' then raise exception 'sc_err_owner'; end if;
  delete from public.chat_members where chat_id = p_chat and user_id = me;
  perform public.sc_system(p_chat, me, 'left', null);
end $$;

create or replace function public.sc_group_delete(p_chat uuid) returns void
language plpgsql security definer set search_path = public as $$
declare me uuid := public.sc_uid();
begin
  if not exists(select 1 from public.chat_members m join public.chats c on c.id = m.chat_id
      where m.chat_id = p_chat and m.user_id = me and m.role = 'owner' and c.kind = 'group') then
    raise exception 'sc_err_no_rights';
  end if;
  delete from public.chats where id = p_chat;
end $$;

-- изменение группы: название/описание/фон — право «информация», остальное — право «бан/ограничения»
create or replace function public.sc_group_update(p_chat uuid, p_patch jsonb) returns void
language plpgsql security definer set search_path = public as $$
declare me uuid := public.sc_uid(); k text; w text[];
  info_keys text[] := array['title', 'about', 'bg'];
  set_keys text[] := array['p_text','p_photos','p_files','p_stickers','p_links','p_reactions','p_add','p_pin','p_info',
                           'only_admins','slow_sec','autodel_sec','autodel_scope','banned_words'];
begin
  if not exists(select 1 from public.chats where id = p_chat and kind = 'group') then raise exception 'sc_err_not_member'; end if;
  for k in select jsonb_object_keys(coalesce(p_patch, '{}'::jsonb)) loop
    if k = any(info_keys) then
      if not public.sc_can(p_chat, me, 'info') then raise exception 'sc_err_no_rights'; end if;
    elsif k = any(set_keys) then
      if not public.sc_can(p_chat, me, 'settings') then raise exception 'sc_err_no_rights'; end if;
    else
      raise exception 'sc_err_generic';
    end if;
  end loop;
  if p_patch ? 'title' and (btrim(coalesce(p_patch->>'title', '')) = '' or char_length(btrim(p_patch->>'title')) > 64) then
    raise exception 'sc_err_title';
  end if;
  if p_patch ? 'bg' and p_patch->>'bg' is not null
     and not exists(select 1 from public.sc_style_levels where kind = 'bg' and id = p_patch->>'bg') then
    raise exception 'sc_err_generic';
  end if;
  if p_patch ? 'banned_words' then
    select coalesce(array_agg(distinct left(btrim(x), 40)), '{}') into w
      from jsonb_array_elements_text(p_patch->'banned_words') x where btrim(x) <> '';
  end if;
  update public.chats set
    title = case when p_patch ? 'title' then btrim(p_patch->>'title') else title end,
    about = case when p_patch ? 'about' then nullif(left(btrim(coalesce(p_patch->>'about', '')), 300), '') else about end,
    bg = case when p_patch ? 'bg' then p_patch->>'bg' else bg end,
    p_text = coalesce((p_patch->>'p_text')::boolean, p_text),
    p_photos = coalesce((p_patch->>'p_photos')::boolean, p_photos),
    p_files = coalesce((p_patch->>'p_files')::boolean, p_files),
    p_stickers = coalesce((p_patch->>'p_stickers')::boolean, p_stickers),
    p_links = coalesce((p_patch->>'p_links')::boolean, p_links),
    p_reactions = coalesce((p_patch->>'p_reactions')::boolean, p_reactions),
    p_add = coalesce((p_patch->>'p_add')::boolean, p_add),
    p_pin = coalesce((p_patch->>'p_pin')::boolean, p_pin),
    p_info = coalesce((p_patch->>'p_info')::boolean, p_info),
    only_admins = coalesce((p_patch->>'only_admins')::boolean, only_admins),
    slow_sec = coalesce((p_patch->>'slow_sec')::int, slow_sec),
    autodel_sec = coalesce((p_patch->>'autodel_sec')::int, autodel_sec),
    autodel_scope = coalesce(p_patch->>'autodel_scope', autodel_scope),
    banned_words = case when p_patch ? 'banned_words' then w else banned_words end
  where id = p_chat;
end $$;

create or replace function public.sc_pin_message(p_chat uuid, p_msg bigint) returns void
language plpgsql security definer set search_path = public as $$
declare me uuid := public.sc_uid();
begin
  if not public.sc_can(p_chat, me, 'pin') then raise exception 'sc_err_no_rights'; end if;
  if p_msg is not null and not exists(select 1 from public.messages where id = p_msg and chat_id = p_chat and not deleted) then
    raise exception 'sc_err_generic';
  end if;
  update public.chats set pinned_msg_id = p_msg where id = p_chat;
end $$;

-- удалить сообщение: своё — всегда, чужое — админ с правом «удалять»
create or replace function public.sc_delete_message(p_msg bigint) returns void
language plpgsql security definer set search_path = public as $$
declare me uuid := public.sc_uid(); mm public.messages;
begin
  select * into mm from public.messages where id = p_msg;
  if mm.id is null or not exists(select 1 from public.chat_members where chat_id = mm.chat_id and user_id = me) then
    raise exception 'sc_err_not_member';
  end if;
  if mm.kind = 'system' and not public.sc_can(mm.chat_id, me, 'delete') then raise exception 'sc_err_no_rights'; end if;
  if mm.sender_id is distinct from me and not public.sc_can(mm.chat_id, me, 'delete') then raise exception 'sc_err_no_rights'; end if;
  perform set_config('sc.internal', '1', true);
  update public.messages set deleted = true, body = null, media_path = null, file_name = null, file_size = null, updated_at = now()
    where id = p_msg;
  perform set_config('sc.internal', '', true);
  delete from public.reactions where message_id = p_msg;
  update public.chats set pinned_msg_id = null where id = mm.chat_id and pinned_msg_id = p_msg;
end $$;

-- реакция: то же эмодзи ещё раз — снять; другое — заменить
create or replace function public.sc_react(p_msg bigint, p_emoji text) returns text
language plpgsql security definer set search_path = public as $$
declare me uuid := public.sc_uid(); mm public.messages; c public.chats; m public.chat_members; other uuid; cur text; res text;
begin
  select * into mm from public.messages where id = p_msg and not deleted and kind <> 'system'
    and (expires_at is null or expires_at > now());
  if mm.id is null then raise exception 'sc_err_generic'; end if;
  select * into c from public.chats where id = mm.chat_id;
  select * into m from public.chat_members where chat_id = mm.chat_id and user_id = me;
  if m.user_id is null then raise exception 'sc_err_not_member'; end if;
  if p_emoji is null or char_length(p_emoji) < 1 or char_length(p_emoji) > 16 then raise exception 'sc_err_generic'; end if;
  if c.kind = 'direct' then
    select user_id into other from public.chat_members where chat_id = c.id and user_id <> me limit 1;
    if other is not null and public.sc_blocked_either(me, other) then raise exception 'sc_err_blocked'; end if;
  elsif m.role = 'member' and (not c.p_reactions or (m.restricted_until is not null and m.restricted_until > now())) then
    raise exception 'sc_err_no_reactions';
  end if;
  select emoji into cur from public.reactions where message_id = p_msg and user_id = me;
  if cur = p_emoji then
    delete from public.reactions where message_id = p_msg and user_id = me; res := 'removed';
  else
    insert into public.reactions(message_id, user_id, emoji) values (p_msg, me, p_emoji)
      on conflict (message_id, user_id) do update set emoji = excluded.emoji, created_at = now();
    res := 'added';
  end if;
  perform set_config('sc.internal', '1', true);
  update public.messages set updated_at = now() where id = p_msg;   -- чтобы опрос увидел изменение
  perform set_config('sc.internal', '', true);
  return res;
end $$;

create or replace function public.sc_notif_seen() returns void
language sql security definer set search_path = public as $$
  update public.sc_notifications set seen = true where user_id = auth.uid() and not seen and kind <> 'request';
$$;

-- функции для сайта: только вошедшим
do $$
declare f text;
begin
  foreach f in array array[
    'sc_friend_request(uuid)', 'sc_friend_cancel(uuid)', 'sc_friend_accept(uuid)', 'sc_friend_decline(uuid)',
    'sc_friend_remove(uuid)', 'sc_friend_restore(uuid)', 'sc_block(uuid, boolean)', 'sc_pin_user(uuid, boolean)',
    'sc_public_stats(uuid)', 'sc_my_chats()', 'sc_mark_read(uuid)', 'sc_open_direct(uuid)', 'sc_create_group(text, uuid[])',
    'sc_group_add(uuid, uuid[])', 'sc_member_action(uuid, uuid, text, timestamptz, jsonb)', 'sc_leave(uuid)',
    'sc_group_delete(uuid)', 'sc_group_update(uuid, jsonb)', 'sc_pin_message(uuid, bigint)', 'sc_delete_message(bigint)',
    'sc_react(bigint, text)', 'sc_notif_seen()', 'sc_support_open()', 'sc_mute(uuid, boolean)'] loop
    execute format('revoke execute on function public.%s from public, anon', f);
    execute format('grant execute on function public.%s to authenticated', f);
  end loop;
end $$;
revoke execute on function public.sc_msg_before_insert() from public, anon, authenticated;
revoke execute on function public.sc_msg_before_update() from public, anon, authenticated;
revoke execute on function public.sc_check_prefs() from public, anon, authenticated;

-- =====================================================================
-- ФОТО И ФАЙЛЫ ЧАТА: закрытый бакет `chat`, путь <chat_id>/<user_id>/<файл>
-- читать могут только участники чата, класть — только в свою папку.
-- =====================================================================
insert into storage.buckets (id, name, public, file_size_limit)
values ('chat', 'chat', false, 10485760)
on conflict (id) do update set public = false, file_size_limit = excluded.file_size_limit;

drop policy if exists "chat files: members read" on storage.objects;
create policy "chat files: members read" on storage.objects for select to authenticated
  using (bucket_id = 'chat' and public.sc_is_member(public.sc_try_uuid((storage.foldername(name))[1])));
drop policy if exists "chat files: upload own" on storage.objects;
create policy "chat files: upload own" on storage.objects for insert to authenticated
  with check (bucket_id = 'chat' and (storage.foldername(name))[2] = auth.uid()::text
    and public.sc_can_upload(public.sc_try_uuid((storage.foldername(name))[1])));
drop policy if exists "chat files: delete own" on storage.objects;
create policy "chat files: delete own" on storage.objects for delete to authenticated
  using (bucket_id = 'chat' and (storage.foldername(name))[2] = auth.uid()::text);

-- =====================================================================
-- АВТОУДАЛЕНИЕ. Просроченные сообщения уже скрыты политикой чтения (expires_at).
-- Чтобы они ещё и физически стирались, включите pg_cron (бесплатно на Supabase):
--   Dashboard → Database → Extensions → pg_cron → Enable, затем выполните ОДИН раз:
--
-- select cron.schedule('sc-autodelete', '*/15 * * * *', $cron$
--   delete from public.messages where expires_at is not null and expires_at < now() - interval '1 minute';
--   delete from public.friend_requests where created_at < now() - interval '180 days';
--   delete from public.sc_notifications where seen and created_at < now() - interval '60 days';
-- $cron$);
--
-- Проверить: select * from cron.job;   Отключить: select cron.unschedule('sc-autodelete');
-- =====================================================================

-- ---------- пуш-уведомления: отметки «уже отправлено» ----------
-- Пишет только функция push (секретным ключом): каждое событие пушится один раз.
create table if not exists public.push_log (key text primary key, at timestamptz not null default now());
alter table public.push_log enable row level security;
revoke all on public.push_log from anon, authenticated;

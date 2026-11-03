// Функция «push» для Supabase Edge Functions: отправляет пуш-уведомления.
// Ключи VAPID создаёт сама при первом запуске и хранит в таблице app_secrets
// (их никто не видит и никуда пересылать не нужно).
// При создании функции выключить «Verify JWT»: вход проверяется здесь, в коде.
import * as webpush from "jsr:@negrel/webpush@0.5.0";

const URL = Deno.env.get("SUPABASE_URL")!;
function secretKey(): string {
  try {
    const all = JSON.parse(Deno.env.get("SUPABASE_SECRET_KEYS") || "{}");
    if (all.default) return all.default;
  } catch (_) { /* старый формат */ }
  return Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
}
const SECRET = secretKey();
// Адреса сайта. Пуш открывается на том адресе, где человек включил уведомления,
// поэтому на подписки с других (старых) адресов не шлём и удаляем их. Новый домен — добавить сюда первым.
const SITES = ["https://aac-study.github.io"];

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json" } });

async function db(path: string, init: RequestInit = {}) {
  const res = await fetch(`${URL}/rest/v1/${path}`, {
    ...init,
    // новый ключ sb_secret_… передаётся только в apikey; старый JWT-ключ — ещё и в Authorization
    headers: { apikey: SECRET, ...(SECRET.startsWith("eyJ") ? { Authorization: `Bearer ${SECRET}` } : {}), "Content-Type": "application/json", ...(init.headers || {}) },
  });
  const txt = await res.text();
  if (!res.ok) throw new Error(`db ${res.status}: ${txt}`);
  return txt ? JSON.parse(txt) : null;
}

let server: webpush.ApplicationServer | null = null;
let publicKey = "";
async function appServer() {
  if (server) return server;
  let rows = await db("app_secrets?key=eq.vapid&select=value");
  if (!rows.length) {
    const keys = await webpush.generateVapidKeys({ extractable: true });
    const exported = await webpush.exportVapidKeys(keys);
    await db("app_secrets?on_conflict=key", {
      method: "POST",
      headers: { Prefer: "resolution=ignore-duplicates" },
      body: JSON.stringify({ key: "vapid", value: JSON.stringify(exported) }),
    });
    rows = await db("app_secrets?key=eq.vapid&select=value");
  }
  const vapidKeys = await webpush.importVapidKeys(JSON.parse(rows[0].value), { extractable: false });
  server = await webpush.ApplicationServer.new({ contactInformation: SITES[0] + "/", vapidKeys });
  publicKey = await webpush.exportApplicationServerKey(vapidKeys);
  return server;
}

async function currentUser(req: Request): Promise<string | null> {
  const auth = req.headers.get("Authorization") || "";
  if (!auth.startsWith("Bearer ")) return null;
  const res = await fetch(`${URL}/auth/v1/user`, { headers: { apikey: SECRET, Authorization: auth } });
  if (!res.ok) return null;
  const u = await res.json();
  return u && u.id ? u.id : null;
}

type Msg = { title: string; body: string; url?: string; tag?: string };
// x — подробности: имя, группа, текст, задержка
type X = { name?: string; chat?: string | null; text?: string; mkind?: string; delay?: number; support?: boolean; url?: string; tag?: string;
  ls?: Record<string, string>; sjn?: Record<string, string>; n?: number; hwt?: Record<string, string> };
const clip = (s: string, n = 140) => (s.length > n ? s.slice(0, n - 1) + "…" : s);
const pickLangs = (o: unknown, n: number) => {
  const r: Record<string, string> = {};
  for (const l of ["he", "ru", "en"]) r[l] = clip(String(((o || {}) as Record<string, unknown>)[l] || ""), n);
  return r;
};
function msgBody(x: X, media: Record<string, string>) {
  const t = x.mkind && x.mkind !== "text" ? (media[x.mkind] || "") + (x.text ? " " + x.text : "") : (x.text || "");
  return clip(x.chat ? `${x.name}: ${t}` : t);
}
const TEXT: Record<string, Record<string, (x: X) => Msg>> = {
  he: {
    test: (x) => ({ title: "בדיקה 🔔", body: "התראות עובדות במכשיר הזה." + (x.delay ? ` (אחרי ${x.delay} שניות)` : ""), tag: "test" }),
    goal: () => ({ title: "המטרה הושגה! 🎯", body: "לחצת על 3 הכפתורים. ככה יגיעו התראות על הישגים.", tag: "goal" }),
    issue: (x) => ({ title: "דיווח חדש על בעיה", body: x.text || "", url: "#/admin", tag: "issue" }),
    request: (x) => ({ title: "בקשת חברות 👋", body: `${x.name} רוצה להוסיף אותך לחברים`, tag: "friends" }),
    accepted: (x) => ({ title: "חבר חדש 🤝", body: `${x.name} אישר/ה את בקשת החברות`, tag: "friends" }),
    added: (x) => ({ title: "קבוצה חדשה 👥", body: `הוסיפו אותך לקבוצה «${x.chat || ""}»`, tag: "group" }),
    message: (x) => ({ title: x.support ? "תמיכה" : (x.chat || x.name || ""), body: msgBody(x, { photo: "📷 תמונה", file: "📎 קובץ", sticker: "מדבקה" }) }),
    lesson: (x) => ({ title: `שיעור חדש 📚 ${x.sjn?.he || ""}`.trim(), body: x.ls?.he || "", tag: "lesson" }),
    hw: (x) => ({ title: "שיעורי בית 📝", body: x.n === 1 ? `עוד לא סיימת: «${x.hwt?.he || ""}». כשתסיים, לחץ «עשיתי».` : `יש לך ${x.n} שיעורי בית שעוד לא סומנו «עשיתי».`, url: "#/homework", tag: "hw" }),
  },
  ru: {
    test: (x) => ({ title: "Проверка 🔔", body: "Уведомления на этом устройстве работают." + (x.delay ? ` (через ${x.delay} сек)` : ""), tag: "test" }),
    goal: () => ({ title: "Цель выполнена! 🎯", body: "Все 3 кнопки нажаты. Так будут приходить уведомления о достижениях.", tag: "goal" }),
    issue: (x) => ({ title: "Новое сообщение о проблеме", body: x.text || "", url: "#/admin", tag: "issue" }),
    request: (x) => ({ title: "Заявка в друзья 👋", body: `${x.name} хочет добавить тебя в друзья`, tag: "friends" }),
    accepted: (x) => ({ title: "Новый друг 🤝", body: `${x.name} принял(а) твою заявку`, tag: "friends" }),
    added: (x) => ({ title: "Новая группа 👥", body: `Тебя добавили в группу «${x.chat || ""}»`, tag: "group" }),
    message: (x) => ({ title: x.support ? "Поддержка" : (x.chat || x.name || ""), body: msgBody(x, { photo: "📷 Фото", file: "📎 Файл", sticker: "Стикер" }) }),
    lesson: (x) => ({ title: `Новый урок 📚 ${x.sjn?.ru || ""}`.trim(), body: x.ls?.ru || "", tag: "lesson" }),
    hw: (x) => ({ title: "Домашнее задание 📝", body: x.n === 1 ? `Ещё не сделано: «${x.hwt?.ru || ""}». Когда закончишь, нажми «Я сделал».` : `Ещё не сделано заданий: ${x.n}. Когда закончишь, нажми «Я сделал».`, url: "#/homework", tag: "hw" }),
  },
  en: {
    test: (x) => ({ title: "Test 🔔", body: "Notifications work on this device." + (x.delay ? ` (after ${x.delay} s)` : ""), tag: "test" }),
    goal: () => ({ title: "Goal reached! 🎯", body: "You pressed 3 buttons. Achievement alerts will arrive like this.", tag: "goal" }),
    issue: (x) => ({ title: "New problem report", body: x.text || "", url: "#/admin", tag: "issue" }),
    request: (x) => ({ title: "Friend request 👋", body: `${x.name} wants to add you as a friend`, tag: "friends" }),
    accepted: (x) => ({ title: "New friend 🤝", body: `${x.name} accepted your request`, tag: "friends" }),
    added: (x) => ({ title: "New group 👥", body: `You were added to the group “${x.chat || ""}”`, tag: "group" }),
    message: (x) => ({ title: x.support ? "Support" : (x.chat || x.name || ""), body: msgBody(x, { photo: "📷 Photo", file: "📎 File", sticker: "Sticker" }) }),
    lesson: (x) => ({ title: `New lesson 📚 ${x.sjn?.en || ""}`.trim(), body: x.ls?.en || "", tag: "lesson" }),
    hw: (x) => ({ title: "Homework 📝", body: x.n === 1 ? `Not done yet: “${x.hwt?.en || ""}”. When you finish, tap “I did it”.` : `${x.n} homework tasks are not done yet. When you finish, tap “I did it”.`, url: "#/homework", tag: "hw" }),
  },
};

// Пуши шлём только настоящим службам браузеров (Google, Mozilla, Microsoft, Apple) и только по https.
// Иначе любой мог бы сохранить «подписку» с адресом внутреннего сервера и заставить функцию стучаться туда (SSRF).
const PUSH_HOSTS = /(^|\.)(fcm\.googleapis\.com|android\.googleapis\.com|updates\.push\.services\.mozilla\.com|notify\.windows\.com|push\.apple\.com)$/i;
const okEndpoint = (u: unknown) => {
  try { const x = new globalThis.URL(String(u)); return x.protocol === "https:" && !x.port && PUSH_HOSTS.test(x.hostname); } catch (_) { return false; }
};
const host = (u: string) => { try { return new globalThis.URL(u).host; } catch (_) { return "?"; } };
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const runtime = () => (globalThis as { EdgeRuntime?: { waitUntil(p: Promise<unknown>): void } }).EdgeRuntime;

// Защита от спама: сколько ждать перед пушем этому человеку (0 = сразу, -1 = не слать). См. push_take в social.sql.
async function takeSlot(uid: string): Promise<number> {
  try { return Number(await db("rpc/push_take", { method: "POST", body: JSON.stringify({ p_user: uid }) })) || 0; }
  catch (e) { console.error("push_take", String(e)); return 0; }   // если что-то не так с базой — лучше отправить
}

type Sub = { user_id: string; endpoint: string; p256dh: string; auth: string; lang: string; origin?: string | null };
async function deliver(subs: Sub[], kind: string, x: X): Promise<number> {
  const as = await appServer();
  let sent = 0;
  await Promise.all(subs.map(async (s) => {
    if (!okEndpoint(s.endpoint)) { console.error(`push skipped: not a browser push service → ${host(s.endpoint)}`); return; }
    const msg = (TEXT[s.lang] || TEXT.he)[kind](x);
    if (x.url) msg.url = x.url;
    if (x.tag) msg.tag = x.tag;
    try {
      await as.subscribe({ endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } })
        .pushTextMessage(JSON.stringify(msg), { ttl: 24 * 3600, urgency: webpush.Urgency.High });
      sent++;
      console.log(`push ok ${kind} → ${host(s.endpoint)}`);
    } catch (e) {
      // устройство отписалось или подписка устарела — удаляем
      if (e instanceof webpush.PushMessageError && e.isGone()) {
        console.log(`push gone ${host(s.endpoint)} — подписка удалена`);
        await db(`push_subs?endpoint=eq.${encodeURIComponent(s.endpoint)}`, { method: "DELETE" });
      } else {
        let detail = "";
        try {
          const r = (e as { response?: Response }).response;
          if (r) detail = ` status=${r.status} ${(await r.text()).slice(0, 300)}`;
        } catch (_) { /* */ }
        console.error(`push failed ${kind} → ${host(s.endpoint)}: ${String(e)}${detail}`);
      }
    }
  }));
  return sent;
}

// Отправить пуш людям userIds на все их устройства. Возвращает, сколько ушло сразу
// (пуши, отложенные защитой от спама, уходят в фоне).
async function sendTo(userIds: string[], kind: string, x: X = {}, onlyEndpoint?: string) {
  if (!userIds.length) return 0;
  let q = `push_subs?user_id=in.(${userIds.join(",")})&select=user_id,endpoint,p256dh,auth,lang,origin`;
  if (onlyEndpoint) q += `&endpoint=eq.${encodeURIComponent(onlyEndpoint)}`;
  const [all] = await Promise.all([db(q) as Promise<Sub[]>, appServer()]);
  const subs: Sub[] = [];
  for (const s of all) {
    if (!s.origin || SITES.includes(s.origin)) { subs.push(s); continue; }
    console.log(`push: подписка со старого адреса ${s.origin} удалена`);
    await db(`push_subs?endpoint=eq.${encodeURIComponent(s.endpoint)}`, { method: "DELETE" });
  }
  if (!subs.length) { console.log(`push ${kind}: у получателя нет ни одного устройства с уведомлениями`); return 0; }
  const byUser = new Map<string, Sub[]>();
  for (const s of subs) byUser.set(s.user_id, [...(byUser.get(s.user_id) || []), s]);
  const limited = kind !== "test" && kind !== "goal";   // проверочные пуши не ограничиваем
  const counts = await Promise.all([...byUser].map(async ([u, list]) => {
    const wait = limited ? await takeSlot(u) : 0;
    if (wait < 0) { console.log(`push ${kind}: слишком много пушей подряд, этот пропущен`); return 0; }
    if (!wait) return deliver(list, kind, x);
    console.log(`push ${kind}: защита от спама, отправка через ${wait} мс`);
    const job = sleep(wait).then(() => deliver(list, kind, x)).catch((e) => { console.error("delayed push failed", String(e)); return 0; });
    const rt = runtime();
    if (rt) rt.waitUntil(job); else await job;
    return 0;
  }));
  return counts.reduce((a, b) => a + b, 0);
}

// «Занять» отправку: каждое событие пушится только один раз, даже если сайт попросит дважды.
async function claim(keys: string[]): Promise<Set<string>> {
  if (!keys.length) return new Set();
  const rows = await db("push_log?on_conflict=key", {
    method: "POST",
    headers: { Prefer: "resolution=ignore-duplicates,return=representation" },
    body: JSON.stringify(keys.map((key) => ({ key }))),
  });
  return new Set((rows || []).map((r: { key: string }) => r.key));
}
const ago = (ms: number) => new Date(Date.now() - ms).toISOString();
// ---------- напоминания о домашке (зовёт расписание pg_cron раз в 10 минут) ----------
const HW_TZ = "Asia/Jerusalem", HW_TIME = "11:00", HW_WINDOW = 120;   // по умолчанию Израиль, 11:00; окно — 2 часа
function localNow(tz: string): { day: string; min: number } | null {
  try {
    const parts = new Intl.DateTimeFormat("en-CA", { timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date());
    const g = (t: string) => parts.find((p) => p.type === t)?.value || "";
    return { day: `${g("year")}-${g("month")}-${g("day")}`, min: Number(g("hour")) * 60 + Number(g("minute")) };
  } catch (_) { return null; }
}
type HwCfg = { on?: boolean; tz?: string; time?: string };
async function hwTick() {
  const items: { id: string; due: string | null; title: Record<string, string> }[] = await db("hw_items?select=id,due,title");
  const open = items.filter((i) => !i.due || new Date(i.due).getTime() > Date.now());
  if (!open.length) return { sent: 0, open: 0 };
  const subs: { user_id: string }[] = await db("push_subs?select=user_id");
  const withPush = [...new Set(subs.map((x) => x.user_id))];
  if (!withPush.length) return { sent: 0, open: open.length };
  const people: { id: string; prefs?: { hwRemind?: HwCfg } }[] = await db(`profiles?banned=is.false&id=in.(${withPush.join(",")})&select=id,prefs`);
  const done: { user_id: string; hw_id: string }[] = await db(`hw_done?user_id=in.(${withPush.join(",")})&select=user_id,hw_id`);
  let sent = 0;
  for (const p of people) {
    const c: HwCfg = (p.prefs && p.prefs.hwRemind) || {};
    if (c.on === false) continue;
    const time = /^([01]\d|2[0-3]):[0-5]\d$/.test(String(c.time || "")) ? String(c.time) : HW_TIME;
    const now = localNow(typeof c.tz === "string" && /^[A-Za-z_]+(\/[A-Za-z_+-]+){0,2}$/.test(c.tz) ? c.tz : HW_TZ) || localNow(HW_TZ)!;
    const at = Number(time.slice(0, 2)) * 60 + Number(time.slice(3));
    if (now.min < at || now.min >= at + HW_WINDOW) continue;
    const mine = new Set(done.filter((d) => d.user_id === p.id).map((d) => d.hw_id));
    const left = open.filter((i) => !mine.has(i.id));
    if (!left.length) continue;
    if (!(await claim([`hw:${p.id}:${now.day}`])).size) continue;   // не чаще раза в день
    sent += await sendTo([p.id], "hw", { n: left.length, hwt: pickLangs(left[0].title, 80) });
  }
  return { sent, open: open.length };
}

async function nameOf(uid: string) {
  const r = await db(`profiles?id=eq.${uid}&select=name`);
  return (r[0]?.name as string) || "";
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  try {
    const t0 = Date.now();
    const [uid, body] = await Promise.all([currentUser(req), req.json().catch(() => ({}))]);
    // гость (ещё без аккаунта) сообщил о проблеме на экране входа/регистрации → пуш админам, один раз и только свежее сообщение
    if (!uid && body.action === "issue_guest") {
      const id = Number(body.id);
      if (!Number.isFinite(id) || id <= 0) return json({ error: "bad id" }, 400);
      const rows = await db(`issues?id=eq.${id}&user_id=is.null&created_at=gt.${ago(2 * 60e3)}&select=info`);
      if (!rows.length || rows[0].info?.type !== "guest") return json({ error: "not found" }, 404);
      if (!(await claim([`i:${id}`])).size) return json({ sent: 0 });
      const info = rows[0].info || {};
      const admins = (await db("profiles?role=eq.admin&select=id")).map((x: { id: string }) => x.id);
      const pics = info.images?.length ? ` 📷${info.images.length}` : "";
      const who = "👤 " + String(info.email || "?").slice(0, 60) + (info.err ? " [" + String(info.err).slice(0, 60) + "]" : "") + ": ";
      const sent = await sendTo(admins, "issue", { text: clip(who + String(info.text || "")) + pics });
      return json({ sent });
    }
    // расписание (pg_cron) — без пользователя, но со своим ключом из app_secrets
    if (!uid && body.action === "hw_tick") {
      const k = await db("app_secrets?key=eq.cron_key&select=value");
      if (!k.length || typeof body.key !== "string" || body.key.length < 32 || body.key !== k[0].value) return json({ error: "forbidden" }, 403);
      const r = await hwTick();
      console.log(`hw_tick: открытых заданий ${r.open}, отправлено ${r.sent}, ${Date.now() - t0} мс`);
      return json(r);
    }
    if (!uid) return json({ error: "not signed in" }, 401);
    // «разогрев»: сайт зовёт это, когда человек начинает печатать, чтобы пуш потом ушёл без задержки на запуск функции
    if (body.action === "warm") { await appServer(); return json({ ok: true }); }
    const action = String(body.action || "");

    if (action === "key") { await appServer(); return json({ key: publicKey }); }

    if (action === "save") {   // сохранить подписку этого устройства
      const s = body.sub || {};
      if (!okEndpoint(s.endpoint) || !s.keys?.p256dh || !s.keys?.auth || String(s.keys.p256dh).length > 200 || String(s.keys.auth).length > 100) {
        return json({ error: "bad subscription" }, 400);
      }
      await db("push_subs?on_conflict=endpoint", {
        method: "POST",
        headers: { Prefer: "resolution=merge-duplicates" },
        body: JSON.stringify({ endpoint: s.endpoint, user_id: uid, p256dh: s.keys.p256dh, auth: s.keys.auth,
          lang: ["he", "ru", "en"].includes(body.lang) ? body.lang : "he", ua: String(body.ua || "").slice(0, 300),
          origin: String(req.headers.get("origin") || "").slice(0, 200) || null }),
      });
      return json({ ok: true });
    }
    if (action === "remove") {
      await db(`push_subs?endpoint=eq.${encodeURIComponent(String(body.endpoint || ""))}&user_id=eq.${uid}`, { method: "DELETE" });
      return json({ ok: true });
    }
    if (action === "test" || action === "goal") {
      const delay = Math.max(0, Math.min(30, Number(body.delay) || 0));   // до 30 секунд: успеть закрыть сайт
      const job = (async () => {
        if (delay) await new Promise((r) => setTimeout(r, delay * 1000));
        return await sendTo([uid], action, { delay }, body.endpoint || undefined);
      })();
      // С задержкой отвечаем сразу, а отправляем в фоне: человек может закрыть сайт,
      // и запрос оборвётся, но фоновая задача Supabase (EdgeRuntime.waitUntil) доработает.
      const rt = runtime();
      if (delay && rt) {
        rt.waitUntil(job.catch((e) => console.error("delayed push failed", String(e))));
        return json({ queued: true, delay });
      }
      return json({ sent: await job });
    }
    if (action === "lesson") {   // админ: «вышел новый урок» → всем, у кого включён этот предмет (один раз на урок)
      const meRow = (await db(`profiles?id=eq.${uid}&select=role,banned`))[0];
      if (!meRow || meRow.role !== "admin" || meRow.banned) return json({ error: "not admin" }, 403);
      const id = String(body.id || ""), subject = String(body.subject || "");
      if (!/^[a-z0-9-]{1,80}$/i.test(id) || !/^[a-z0-9-]{1,40}$/i.test(subject)) return json({ error: "bad lesson" }, 400);
      if (!(await claim([`l:${id}`])).size) return json({ sent: 0, again: true });
      const people = await db(`profiles?banned=is.false&select=id,prefs`);
      const ids = people.filter((p: { prefs?: { pushTopics?: Record<string, boolean> } }) => !(p.prefs?.pushTopics && p.prefs.pushTopics[subject] === false))
        .map((p: { id: string }) => p.id);
      const sent = await sendTo(ids, "lesson", { ls: pickLangs(body.title, 120), sjn: pickLangs(body.subjectName, 40), url: `#/lesson/${id}` });
      return json({ sent });
    }
    if (action === "issue") {   // друг сообщил о проблеме → пуш всем админам (один раз)
      const id = Number(body.id);
      const rows = await db(`issues?id=eq.${id}&user_id=eq.${uid}&created_at=gt.${ago(10 * 60e3)}&select=info,profiles(name)`);
      if (!rows.length) return json({ error: "not found" }, 404);
      if (!(await claim([`i:${id}`])).size) return json({ sent: 0 });
      const info = rows[0].info || {};
      const who = rows[0].profiles?.name ? rows[0].profiles.name + ": " : "";
      const admins = (await db("profiles?role=eq.admin&select=id")).map((x: { id: string }) => x.id);
      const pics = info.images?.length ? ` 📷${info.images.length}` : "";
      const sent = await sendTo(admins, "issue", { text: clip(who + String(info.text || "")) + pics });
      return json({ sent });
    }
    if (action === "social") {   // заявка в друзья, принятая заявка, добавление в группу
      const rows: { id: number; user_id: string; kind: string; chat_id: string | null }[] =
        await db(`sc_notifications?actor_id=eq.${uid}&created_at=gt.${ago(5 * 60e3)}&select=id,user_id,kind,chat_id`);
      const got = await claim(rows.map((r) => `n:${r.id}`));
      const todo = rows.filter((r) => got.has(`n:${r.id}`));
      if (!todo.length) return json({ sent: 0 });
      const name = await nameOf(uid);
      const chatIds = [...new Set(todo.map((r) => r.chat_id).filter(Boolean))];
      const titles: Record<string, string> = {};
      if (chatIds.length) for (const c of await db(`chats?id=in.(${chatIds.join(",")})&select=id,title`)) titles[c.id] = c.title || "";
      const counts = await Promise.all(todo.map((r) => sendTo([r.user_id], r.kind, {
        name, chat: r.chat_id ? titles[r.chat_id] : null,
        url: r.kind === "added" && r.chat_id ? `#/chat/${r.chat_id}` : (r.kind === "request" ? "#/people" : `#/user/${uid}`),
      })));
      return json({ sent: counts.reduce((a, b) => a + b, 0) });
    }
    if (action === "message") {   // новое сообщение в чате → всем остальным участникам
      const rows = await db(`messages?id=eq.${Number(body.id)}&sender_id=eq.${uid}&deleted=is.false&created_at=gt.${ago(2 * 60e3)}&select=id,chat_id,kind,body,created_at`);
      if (!rows.length) return json({ sent: 0 });
      const m = rows[0];
      // всё, что не зависит друг от друга, спрашиваем у базы одновременно — так пуш уходит быстрее
      const [got, chats, members, name, recent] = await Promise.all([
        claim([`m:${m.id}`]),
        db(`chats?id=eq.${m.chat_id}&select=kind,title`),
        // не шлём тем, кто выключил уведомления чата, и тем, кто прямо сейчас сидит в этом чате (отметка here_at, живёт 25 с)
        db(`chat_members?chat_id=eq.${m.chat_id}&user_id=neq.${uid}&muted=is.false&or=(here_at.is.null,here_at.lt.%22${ago(25e3)}%22)&select=user_id`),
        nameOf(uid),
        db(`issues?user_id=eq.${uid}&created_at=gt.${ago(2 * 60e3)}&select=id&limit=1`),
        appServer(),
      ]);
      const chat = chats[0];
      if (!got.size || !chat) return json({ sent: 0 });
      if (chat.kind === "support" && recent.length) return json({ sent: 0 });   // «Сообщить о проблеме» уже прислало админу свой пуш
      const sent = await sendTo(members.map((x: { user_id: string }) => x.user_id), "message", {
        name, chat: chat.kind === "group" ? chat.title : null, support: chat.kind === "support",
        text: String(m.body || ""), mkind: m.kind, url: `#/chat/${m.chat_id}`, tag: `chat-${m.chat_id}`,
      });
      console.log(`message ${m.id}: функция ${Date.now() - t0} мс, с момента отправки ${Date.now() - new Date(m.created_at).getTime()} мс`);
      return json({ sent });
    }
    return json({ error: "unknown action" }, 400);
  } catch (e) {
    console.error(e);
    return json({ error: "server error" }, 500);   // подробности только в логах функции
  }
});

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
    headers: { apikey: SECRET, Authorization: `Bearer ${SECRET}`, "Content-Type": "application/json", ...(init.headers || {}) },
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
  server = await webpush.ApplicationServer.new({ contactInformation: "mailto:admin@example.com", vapidKeys });
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
const TEXT: Record<string, Record<string, (x?: string) => Msg>> = {
  he: {
    test: () => ({ title: "בדיקה 🔔", body: "התראות עובדות במכשיר הזה.", tag: "test" }),
    goal: () => ({ title: "המטרה הושגה! 🎯", body: "לחצת על 3 הכפתורים. ככה יגיעו התראות על הישגים.", tag: "goal" }),
    issue: (x) => ({ title: "דיווח חדש על בעיה", body: x || "", url: "#/admin", tag: "issue" }),
  },
  ru: {
    test: () => ({ title: "Проверка 🔔", body: "Уведомления на этом устройстве работают.", tag: "test" }),
    goal: () => ({ title: "Цель выполнена! 🎯", body: "Все 3 кнопки нажаты. Так будут приходить уведомления о достижениях.", tag: "goal" }),
    issue: (x) => ({ title: "Новое сообщение о проблеме", body: x || "", url: "#/admin", tag: "issue" }),
  },
  en: {
    test: () => ({ title: "Test 🔔", body: "Notifications work on this device.", tag: "test" }),
    goal: () => ({ title: "Goal reached! 🎯", body: "You pressed 3 buttons. Achievement alerts will arrive like this.", tag: "goal" }),
    issue: (x) => ({ title: "New problem report", body: x || "", url: "#/admin", tag: "issue" }),
  },
};

async function sendTo(userIds: string[], kind: string, extra?: string, onlyEndpoint?: string) {
  if (!userIds.length) return 0;
  const as = await appServer();
  let q = `push_subs?user_id=in.(${userIds.join(",")})&select=endpoint,p256dh,auth,lang`;
  if (onlyEndpoint) q += `&endpoint=eq.${encodeURIComponent(onlyEndpoint)}`;
  const subs = await db(q);
  let sent = 0;
  await Promise.all(subs.map(async (s: { endpoint: string; p256dh: string; auth: string; lang: string }) => {
    const msg = (TEXT[s.lang] || TEXT.he)[kind](extra);
    try {
      await as.subscribe({ endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } })
        .pushTextMessage(JSON.stringify(msg), { ttl: 24 * 3600, urgency: webpush.Urgency.High, topic: msg.tag || "msg" });
      sent++;
    } catch (e) {
      // устройство отписалось или подписка устарела — удаляем
      if (e instanceof webpush.PushMessageError && e.isGone()) {
        await db(`push_subs?endpoint=eq.${encodeURIComponent(s.endpoint)}`, { method: "DELETE" });
      } else console.error("push failed", String(e));
    }
  }));
  return sent;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  try {
    const uid = await currentUser(req);
    if (!uid) return json({ error: "not signed in" }, 401);
    const body = await req.json().catch(() => ({}));
    const action = String(body.action || "");

    if (action === "key") { await appServer(); return json({ key: publicKey }); }

    if (action === "save") {   // сохранить подписку этого устройства
      const s = body.sub || {};
      if (!s.endpoint || !s.keys?.p256dh || !s.keys?.auth) return json({ error: "bad subscription" }, 400);
      await db("push_subs?on_conflict=endpoint", {
        method: "POST",
        headers: { Prefer: "resolution=merge-duplicates" },
        body: JSON.stringify({ endpoint: s.endpoint, user_id: uid, p256dh: s.keys.p256dh, auth: s.keys.auth,
          lang: ["he", "ru", "en"].includes(body.lang) ? body.lang : "he", ua: String(body.ua || "").slice(0, 300) }),
      });
      return json({ ok: true });
    }
    if (action === "remove") {
      await db(`push_subs?endpoint=eq.${encodeURIComponent(String(body.endpoint || ""))}&user_id=eq.${uid}`, { method: "DELETE" });
      return json({ ok: true });
    }
    if (action === "test" || action === "goal") {
      const delay = Math.max(0, Math.min(30, Number(body.delay) || 0));   // до 30 секунд: успеть закрыть сайт
      if (delay) await new Promise((r) => setTimeout(r, delay * 1000));
      const sent = await sendTo([uid], action, undefined, body.endpoint || undefined);
      return json({ sent });
    }
    if (action === "issue") {   // друг сообщил о проблеме → пуш всем админам
      const rows = await db(`issues?id=eq.${Number(body.id)}&user_id=eq.${uid}&select=info,profiles(name)`);
      if (!rows.length) return json({ error: "not found" }, 404);
      const info = rows[0].info || {};
      const who = rows[0].profiles?.name ? rows[0].profiles.name + ": " : "";
      const admins = (await db("profiles?role=eq.admin&select=id")).map((x: { id: string }) => x.id);
      const pics = info.images?.length ? ` 📷${info.images.length}` : "";
      const sent = await sendTo(admins, "issue", (who + String(info.text || "")).slice(0, 140) + pics);
      return json({ sent });
    }
    return json({ error: "unknown action" }, 400);
  } catch (e) {
    console.error(e);
    return json({ error: String(e) }, 500);
  }
});

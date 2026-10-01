import { v } from "convex/values";

import { action, internalMutation, internalQuery, mutation } from "./_generated/server";
import { internal } from "./_generated/api";
import { computeSignupProof } from "./signupProof";

const OTP_LENGTH = 6;
const OTP_VALIDITY_MS = 10 * 60 * 1000;
/** "Kodu Tekrar Gönder" için sunucu taraflı minimum bekleme — istemci UI'ı bunu 60sn gösterir, burası gerçek zorunluluğu uygular (API doğrudan çağrılsa bile atlanamaz). */
const RESEND_COOLDOWN_MS = 60 * 1000;
/** Bu kadar yanlış denemeden sonra kod kilitlenir — kullanıcı yeni kod istemek zorunda kalır (brute-force koruması, 6 haneli kod = 1M kombinasyon). */
const MAX_OTP_ATTEMPTS = 5;
/** Resend'e giden tek bir isteğin en fazla bekleyebileceği süre — sağlayıcı yavaşlarsa kullanıcıyı dakikalarca beklemeye bırakmamak için. */
const RESEND_REQUEST_TIMEOUT_MS = 8000;
/**
 * Resend'in özel alan adı doğrulaması gerektirmeyen sandbox göndericisi —
 * yalnızca Resend hesabının SAHİBİNİN kendi doğrulanmış adresine teslim
 * edilebilir, başka hiçbir alıcıya ULAŞMAZ. Yerel geliştirmede fallback
 * olarak kullanılır. Prod'da MUTLAKA `RESEND_FROM_EMAIL` env değişkenini
 * beautyloop.net Resend'de doğrulandıktan sonra `BeautyLoop
 * <noreply@beautyloop.net>` olarak ayarla — aksi halde gerçek kullanıcılara
 * e-posta hiçbir zaman ulaşmaz (bkz. `npx convex env set RESEND_FROM_EMAIL`).
 */
const RESEND_SANDBOX_FROM_ADDRESS = "BeautyLoop <onboarding@resend.dev>";

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function generateOtpCode(): string {
  const max = 10 ** OTP_LENGTH;
  return Math.floor(Math.random() * max).toString().padStart(OTP_LENGTH, "0");
}

/**
 * Kod veritabanında asla düz metin (plaintext) tutulmaz — yalnızca SHA-256
 * hash'i saklanır (Convex isolate runtime'ı Web Crypto API'sini destekler,
 * bu yüzden ek bir bağımlılık gerekmez). DB'ye erişimi olan biri (ör. Convex
 * dashboard'undan) gerçek kodu asla göremez; doğrulama, girilen kodun
 * hash'ini kayıtlı hash'le karşılaştırarak yapılır.
 */
async function hashOtp(code: string): Promise<string> {
  const data = new TextEncoder().encode(code);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function buildOtpEmailHtml(code: string): string {
  return `
    <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 420px; margin: 0 auto; color: #3A3532;">
      <h2 style="margin-bottom: 4px;">BeautyLoop e-posta doğrulama</h2>
      <p style="color: #6B615D;">Hesabını doğrulamak için aşağıdaki kodu uygulamaya gir:</p>
      <p style="font-size: 32px; font-weight: 700; letter-spacing: 6px; text-align: center; background: #F6DFDA; color: #4A231E; padding: 16px; border-radius: 16px;">${code}</p>
      <p style="color: #6B615D; font-size: 13px;">Bu kod 10 dakika geçerlidir. Bu isteği sen yapmadıysan bu e-postayı yok sayabilirsin.</p>
    </div>
  `;
}

/**
 * Resend'in HTTP API'sine tek bir deneme gönderir. `AbortController` ile
 * sabit bir zaman aşımı uygular — sağlayıcı yanıt vermezse `fetch` süresiz
 * asılı kalmaz, en geç `RESEND_REQUEST_TIMEOUT_MS` sonra başarısız döner.
 */
async function sendOtpEmailOnce(params: {
  apiKey: string;
  from: string;
  to: string;
  code: string;
}): Promise<{ ok: true } | { ok: false; reason: string }> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), RESEND_REQUEST_TIMEOUT_MS);
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${params.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: params.from,
        to: [params.to],
        subject: "BeautyLoop doğrulama kodun",
        html: buildOtpEmailHtml(params.code),
      }),
      signal: controller.signal,
    });
    if (response.ok) {
      return { ok: true };
    }
    const errorText = await response.text();
    return { ok: false, reason: `HTTP ${response.status}: ${errorText}` };
  } catch (err) {
    const reason = err instanceof Error && err.name === "AbortError" ? "timeout" : String(err);
    return { ok: false, reason };
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Resend üzerinden OTP e-postası gönderir. Geçici ağ/sağlayıcı hatalarına
 * karşı bir kez tekrar dener (toplamda en fazla ~2×8sn, saniyeler
 * mertebesinde kalır) — kalıcı hatalarda (ör. yanlış API key, doğrulanmamış
 * alan adı) ikinci deneme de aynı şekilde başarısız olur ve `false` döner,
 * böylece çağıran taraf kullanıcıya net bir hata gösterebilir.
 */
async function sendOtpEmailWithRetry(params: { apiKey: string; from: string; to: string; code: string }): Promise<boolean> {
  const first = await sendOtpEmailOnce(params);
  if (first.ok) {
    return true;
  }
  // eslint-disable-next-line no-console -- gönderim hatasını teşhis edebilmek için kasıtlı
  console.error(`[BeautyLoop OTP] Resend gönderimi başarısız (1. deneme): ${first.reason}`);

  const retry = await sendOtpEmailOnce(params);
  if (retry.ok) {
    return true;
  }
  // eslint-disable-next-line no-console -- gönderim hatasını teşhis edebilmek için kasıtlı
  console.error(`[BeautyLoop OTP] Resend gönderimi başarısız (2. deneme, vazgeçiliyor): ${retry.reason}`);
  return false;
}

export const checkEmailAlreadyRegistered = internalQuery({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const existingAccount = await ctx.db
      .query("authAccounts")
      .withIndex("providerAndAccountId", (q) => q.eq("provider", "password").eq("providerAccountId", args.email))
      .unique();
    return existingAccount !== null;
  },
});

/**
 * Yeni kod üretip kaydeder — ama önce sunucu taraflı 60sn cooldown'ı
 * kontrol eder (bkz. RESEND_COOLDOWN_MS). Bu kontrol mutation içinde
 * (Convex'in transactional garantisi altında) yapıldığı için, aynı e-posta
 * için art arda gelen istekler arasında yarış durumu (race condition) oluşmaz.
 */
export const storeSignupOtp = internalMutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const now = Date.now();
    const existingRequest = await ctx.db
      .query("emailVerificationRequests")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();

    if (existingRequest?.lastSentAt && now - existingRequest.lastSentAt < RESEND_COOLDOWN_MS) {
      throw new Error("OTP_RESEND_COOLDOWN");
    }

    const code = generateOtpCode();
    const otpHash = await hashOtp(code);
    const otpExpiresAt = now + OTP_VALIDITY_MS;

    if (existingRequest) {
      await ctx.db.patch(existingRequest._id, {
        otp: otpHash,
        otpExpiresAt,
        verified: false,
        lastSentAt: now,
        attempts: 0,
      });
    } else {
      await ctx.db.insert("emailVerificationRequests", {
        email: args.email,
        otp: otpHash,
        otpExpiresAt,
        verified: false,
        lastSentAt: now,
        attempts: 0,
      });
    }

    // Düz metin kod yalnızca burada, çağırana (e-posta gönderme adımı için)
    // döner — DB'ye hiçbir zaman bu haliyle yazılmaz.
    return code;
  },
});

/**
 * Kayıt akışının 1. adımı: bu e-posta için henüz hesap yoksa (ve 60sn
 * cooldown dolmuşsa) 6 haneli kod üretip kaydeder, Resend'in HTTP API'si
 * üzerinden (SMTP değil — bağlantı havuzlama/handshake gecikmesi yok, tek
 * bir HTTPS POST) gerçek bir e-posta olarak gönderir. Yanıt saniyeler
 * içinde döner: `sendOtpEmailWithRetry` en fazla iki deneme × 8sn zaman
 * aşımı ile sınırlıdır.
 *
 * `RESEND_API_KEY` env değişkeni ayarlı değilse (ör. yerel geliştirme),
 * gerçek gönderim atlanır ve kod yalnızca terminale yazdırılır. Ayarlıysa
 * ("prod modu") gönderim zorunludur — başarısız olursa kullanıcıya net bir
 * hata döner (`EMAIL_SEND_FAILED`), e-postanın "gönderildi" sanılıp aslında
 * hiç ulaşmaması gibi sessiz bir başarısızlığa izin verilmez.
 */
export const requestSignupOtp = action({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const email = normalizeEmail(args.email);

    const alreadyRegistered = await ctx.runQuery(internal.emailVerification.checkEmailAlreadyRegistered, {
      email,
    });
    if (alreadyRegistered) {
      throw new Error("EMAIL_ALREADY_REGISTERED");
    }

    const code = await ctx.runMutation(internal.emailVerification.storeSignupOtp, { email });

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // Geliştirme kolaylığı: Resend ayarlı değilse kod terminale yazdırılır.
      // Prod dağıtımında RESEND_API_KEY her zaman ayarlı olmalı — bu dal hiç çalışmaz.
      // eslint-disable-next-line no-console -- geliştirme ortamında OTP'yi görebilmek için kasıtlı
      console.log(`[BeautyLoop OTP] ${email} → ${code} (10 dk geçerli) — RESEND_API_KEY yok, yalnızca burada görünüyor`);
      return;
    }

    const from = process.env.RESEND_FROM_EMAIL || RESEND_SANDBOX_FROM_ADDRESS;
    const sent = await sendOtpEmailWithRetry({ apiKey, from, to: email, code });
    if (!sent) {
      throw new Error("EMAIL_SEND_FAILED");
    }

    // Prod modunda kodun kendisi loglanmaz (güvenlik) — yalnızca başarı bilgisi.
    // eslint-disable-next-line no-console -- gönderim teyidini görebilmek için kasıtlı
    console.log(`[BeautyLoop OTP] ${email} → Resend ile gönderildi ✓`);
  },
});

/**
 * Kayıt akışının 2. adımı: girilen kodu doğrular. Doğruysa isteği
 * `verified:true` işaretler (kodu tekrar kullanılamaz hale getirmek için
 * temizler) ve bir "imza" (`proof`) döner. İstemci bu imzayı 3. adımda
 * (şifre belirleme) `signIn("password", {flow:"signUp", signupProof})`'a
 * ekler; `convex/auth.ts`'teki Password `profile` callback'i aynı imzayı
 * senkron olarak yeniden hesaplayıp karşılaştırır — eşleşmezse hesap
 * oluşturulmaz (bkz. convex/signupProof.ts).
 *
 * Yanlış kod girişleri sayılır (`attempts`); `MAX_OTP_ATTEMPTS`'e ulaşınca
 * kod kilitlenir ve doğru kod girilse bile reddedilir — kullanıcı yeni bir
 * kod istemek zorunda kalır. Bu, 6 haneli kodun brute-force ile
 * denenmesini pratik olarak imkansız hale getirir.
 */
export const verifySignupOtp = mutation({
  args: { email: v.string(), code: v.string() },
  handler: async (ctx, args) => {
    const email = normalizeEmail(args.email);
    const request = await ctx.db
      .query("emailVerificationRequests")
      .withIndex("by_email", (q) => q.eq("email", email))
      .unique();

    if (!request) {
      throw new Error("OTP_NOT_REQUESTED");
    }
    if (Date.now() > request.otpExpiresAt) {
      throw new Error("OTP_EXPIRED");
    }
    if ((request.attempts ?? 0) >= MAX_OTP_ATTEMPTS) {
      throw new Error("OTP_TOO_MANY_ATTEMPTS");
    }
    const inputHash = await hashOtp(args.code);
    if (inputHash !== request.otp) {
      await ctx.db.patch(request._id, { attempts: (request.attempts ?? 0) + 1 });
      throw new Error("OTP_INVALID");
    }

    await ctx.db.patch(request._id, { verified: true, otp: "", attempts: 0 });
    return { proof: computeSignupProof(email) };
  },
});

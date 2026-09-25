import { v } from "convex/values";

import { action, internalMutation, internalQuery, mutation } from "./_generated/server";
import { internal } from "./_generated/api";
import { computeSignupProof } from "./signupProof";

const OTP_LENGTH = 6;
const OTP_VALIDITY_MS = 10 * 60 * 1000;
/** Yalnızca `npx convex env set OTP_TEST_BYPASS true` ile açık olan dağıtımlarda geçerli sabit test kodu. Prod'da bu env değişkenini ASLA ayarlama. */
const TEST_OTP_CODE = "123456";
/** Resend'in özel alan adı doğrulaması gerektirmeyen varsayılan gönderici adresi. */
const RESEND_FROM_ADDRESS = "skinLoop <onboarding@resend.dev>";

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function generateOtpCode(): string {
  const max = 10 ** OTP_LENGTH;
  return Math.floor(Math.random() * max).toString().padStart(OTP_LENGTH, "0");
}

function buildOtpEmailHtml(code: string): string {
  return `
    <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 420px; margin: 0 auto; color: #3A3532;">
      <h2 style="margin-bottom: 4px;">skinLoop e-posta doğrulama</h2>
      <p style="color: #6B615D;">Hesabını doğrulamak için aşağıdaki kodu uygulamaya gir:</p>
      <p style="font-size: 32px; font-weight: 700; letter-spacing: 6px; text-align: center; background: #F6DFDA; color: #4A231E; padding: 16px; border-radius: 16px;">${code}</p>
      <p style="color: #6B615D; font-size: 13px;">Bu kod 10 dakika geçerlidir. Bu isteği sen yapmadıysan bu e-postayı yok sayabilirsin.</p>
    </div>
  `;
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

export const storeSignupOtp = internalMutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const code = generateOtpCode();
    const otpExpiresAt = Date.now() + OTP_VALIDITY_MS;

    const existingRequest = await ctx.db
      .query("emailVerificationRequests")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();

    if (existingRequest) {
      await ctx.db.patch(existingRequest._id, { otp: code, otpExpiresAt, verified: false });
    } else {
      await ctx.db.insert("emailVerificationRequests", {
        email: args.email,
        otp: code,
        otpExpiresAt,
        verified: false,
      });
    }

    return code;
  },
});

/**
 * Kayıt akışının 1. adımı: bu e-posta için henüz hesap yoksa 6 haneli kod
 * üretip kaydeder, Resend üzerinden gerçek bir e-posta olarak gönderir.
 * `RESEND_API_KEY` env değişkeni ayarlı değilse (ör. yerel geliştirme),
 * gönderim sessizce atlanır ve kod yalnızca terminale yazdırılır — bu
 * yüzden `action` (dış API çağrısı için `fetch` yalnızca action'larda
 * çalışır), DB işlemlerini internal query/mutation'lara devrediyor.
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
    let emailSent = false;
    if (apiKey) {
      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: RESEND_FROM_ADDRESS,
            to: [email],
            subject: "skinLoop doğrulama kodun",
            html: buildOtpEmailHtml(code),
          }),
        });
        if (response.ok) {
          emailSent = true;
        } else {
          const errorText = await response.text();
          // eslint-disable-next-line no-console -- gönderim hatasını teşhis edebilmek için kasıtlı
          console.error(`[skinLoop OTP] Resend gönderimi başarısız (${response.status}): ${errorText}`);
        }
      } catch (err) {
        // eslint-disable-next-line no-console -- gönderim hatasını teşhis edebilmek için kasıtlı
        console.error("[skinLoop OTP] Resend isteği başarısız:", err);
      }
    }

    // Geliştirme kolaylığı: Resend ayarlı değilse (veya başarısız olursa) kod
    // yine de terminale yazdırılır. NOT: gerçek bir prod dağıtımına geçerken
    // bu satır kaldırılmalı — kodun loglara düşmesi istenmez.
    // eslint-disable-next-line no-console -- geliştirme ortamında OTP'yi görebilmek için kasıtlı
    console.log(
      `[skinLoop OTP] ${email} → ${code} (10 dk geçerli)${emailSent ? " — Resend ile gönderildi ✓" : " — e-posta gönderilemedi, yalnızca burada görünüyor"}`,
    );
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
 */
export const verifySignupOtp = mutation({
  args: { email: v.string(), code: v.string() },
  handler: async (ctx, args) => {
    const email = normalizeEmail(args.email);
    const request = await ctx.db
      .query("emailVerificationRequests")
      .withIndex("by_email", (q) => q.eq("email", email))
      .unique();

    const bypassEnabled = process.env.OTP_TEST_BYPASS === "true";
    if (bypassEnabled && args.code === TEST_OTP_CODE) {
      if (request) {
        await ctx.db.patch(request._id, { verified: true, otp: "" });
      } else {
        await ctx.db.insert("emailVerificationRequests", {
          email,
          otp: "",
          otpExpiresAt: Date.now() + OTP_VALIDITY_MS,
          verified: true,
        });
      }
      return { proof: computeSignupProof(email) };
    }

    if (!request) {
      throw new Error("OTP_NOT_REQUESTED");
    }
    if (Date.now() > request.otpExpiresAt) {
      throw new Error("OTP_EXPIRED");
    }
    if (args.code !== request.otp) {
      throw new Error("OTP_INVALID");
    }

    await ctx.db.patch(request._id, { verified: true, otp: "" });
    return { proof: computeSignupProof(email) };
  },
});

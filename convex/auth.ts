import Apple from "@auth/core/providers/apple";
import Google from "@auth/core/providers/google";
import { Password } from "@convex-dev/auth/providers/Password";
import { convexAuth } from "@convex-dev/auth/server";
import type { WithoutSystemFields } from "convex/server";

import type { Doc } from "./_generated/dataModel";
import { KVKK_CONSENT_VERSION } from "./legalConsent";
import { computeSignupProof } from "./signupProof";

type UserProfile = WithoutSystemFields<Doc<"users">> & { email: string };

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [
    Password({
      id: "password",
      /**
       * Her akış (signUp/signIn/reset/...) için çağrılır. `@convex-dev/auth`
       * bu callback'i SENKRON çağırıyor (await edilmiyor —
       * node_modules/@convex-dev/auth/dist/providers/Password.js:56), bu
       * yüzden veritabanına erişilemiyor. Ölçtüm: `callbacks.beforeSessionCreation`
       * gibi async hook'larda throw etmek daha önce oluşturulmuş
       * users/authAccounts satırlarını GERİ ALMIYOR (createAccount ayrı bir
       * mutation'da commit ediyor) — yetim, parola hash'i barındıran hesap
       * satırları kalıyor. Bu yüzden e-posta OTP kontrolü burada, hesap
       * oluşturulmadan ÖNCEKİ tek senkron adımda, deterministik bir imza
       * karşılaştırmasıyla yapılıyor (bkz. convex/signupProof.ts) — `throw`
       * burada `createAccount` çağrılmadan önce gerçekleştiği için hiçbir
       * satır asla yazılmıyor.
       */
      profile(params): UserProfile {
        const email = params.email as string;
        if (params.flow !== "signUp") {
          return { email };
        }

        if (params.kvkkConsent !== true) {
          throw new Error("KVKK_CONSENT_REQUIRED");
        }

        const expectedProof = computeSignupProof(email);
        if (params.signupProof !== expectedProof) {
          throw new Error("EMAIL_NOT_VERIFIED");
        }

        return {
          email,
          kvkkConsent: true,
          kvkkConsentDate: new Date().toISOString(),
          kvkkConsentVersion: KVKK_CONSENT_VERSION,
          // E-posta hesap oluşturulmadan önce zaten OTP ile doğrulandı
          // (bkz. convex/emailVerification.ts).
          isEmailVerified: true,
        };
      },
    }),
    // Env değişkenleri eksikse (AUTH_GOOGLE_ID/SECRET) bu sağlayıcı yalnızca
    // kullanıcı gerçekten "Google ile Giriş Yap"a dokunduğunda hata verir —
    // deploy'u veya diğer sağlayıcıları engellemez.
    Google,
    // Apple, `client_secret` alanında Apple Developer hesabınla imzaladığın
    // bir JWT bekler (AUTH_APPLE_SECRET) — bkz. kurulum notları.
    Apple,
  ],
});

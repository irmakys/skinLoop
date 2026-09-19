import Apple from "@auth/core/providers/apple";
import Google from "@auth/core/providers/google";
import { Password } from "@convex-dev/auth/providers/Password";
import { convexAuth } from "@convex-dev/auth/server";
import type { WithoutSystemFields } from "convex/server";

import type { Doc } from "./_generated/dataModel";
import { KVKK_CONSENT_VERSION } from "./legalConsent";

type UserProfile = WithoutSystemFields<Doc<"users">> & { email: string };

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [
    Password({
      id: "password",
      /**
       * Her akış (signUp/signIn/reset/...) için çağrılır, ama yalnızca
       * `flow === "signUp"` sırasında dönen değer hesap oluşturmak için
       * kullanılır (bkz. node_modules/@convex-dev/auth/src/providers/Password.ts).
       * `kvkkConsent !== true` ise burada throw edilir — bu, `createAccount`
       * çağrılmadan ÖNCE gerçekleşir, yani onay olmadan sunucuda hesap
       * oluşturulması fiilen imkânsızdır (istemcideki disabled/uyarı kontrolü
       * yalnızca UX içindir, asıl garanti burada).
       */
      profile(params): UserProfile {
        const email = params.email as string;
        if (params.flow !== "signUp") {
          return { email };
        }

        if (params.kvkkConsent !== true) {
          throw new Error("KVKK_CONSENT_REQUIRED");
        }

        return {
          email,
          kvkkConsent: true,
          kvkkConsentDate: new Date().toISOString(),
          kvkkConsentVersion: KVKK_CONSENT_VERSION,
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

import { useAuthActions, useConvexAuth } from "@convex-dev/auth/react";

import { signInWithOAuth } from "@/lib/authOAuth";

function toFriendlyAuthError(error: unknown): Error {
  const raw = error instanceof Error ? error.message : String(error);

  if (/InvalidAccountId|InvalidSecret|invalid.*password|invalid.*credentials/i.test(raw)) {
    return new Error("Hatalı e-posta veya şifre.");
  }
  if (/already exists|AccountAlreadyExists/i.test(raw)) {
    return new Error("Bu e-posta zaten kayıtlı. Giriş yapmayı dene.");
  }
  if (/TooManyFailedAttempts/i.test(raw)) {
    return new Error("Çok fazla başarısız deneme. Lütfen daha sonra tekrar dene.");
  }
  if (/KVKK_CONSENT_REQUIRED/i.test(raw)) {
    return new Error("Devam etmeden önce KVKK metnini ve kullanıcı sözleşmesini onaylamalısın.");
  }
  if (/OAuth-cancelled/i.test(raw)) {
    return new Error("Giriş iptal edildi.");
  }
  if (/OAuth-no-code|Configuration|client_id|client_secret/i.test(raw)) {
    return new Error("Bu giriş yöntemi şu anda kullanılamıyor. Lütfen e-posta ile giriş yap.");
  }
  if (/Network request failed|fetch/i.test(raw)) {
    return new Error("Bağlantı hatası. İnternet bağlantını kontrol et.");
  }

  return new Error("Bir şeyler ters gitti. Lütfen tekrar dene.");
}

const DEV_TEST_EMAIL = "test@skinloop.dev";
const DEV_TEST_PASSWORD = "test1234";

export function useSession() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { signIn, signOut } = useAuthActions();

  async function signUpWithPassword(email: string, password: string, kvkkConsent: boolean) {
    try {
      await signIn("password", { email, password, flow: "signUp", kvkkConsent });
    } catch (error) {
      throw toFriendlyAuthError(error);
    }
  }

  async function signInWithPassword(email: string, password: string) {
    try {
      await signIn("password", { email, password, flow: "signIn" });
    } catch (error) {
      throw toFriendlyAuthError(error);
    }
  }

  async function signInWithGoogle() {
    try {
      await signInWithOAuth("google", signIn);
    } catch (error) {
      throw toFriendlyAuthError(error);
    }
  }

  async function signInWithApple() {
    try {
      await signInWithOAuth("apple", signIn);
    } catch (error) {
      throw toFriendlyAuthError(error);
    }
  }

  /**
   * Yalnızca geliştirme ortamında: sabit bir test hesabıyla tek tıkla giriş.
   * Hesap yoksa otomatik oluşturur, varsa doğrudan giriş yapar.
   */
  async function signInAsTestUser() {
    try {
      await signIn("password", {
        email: DEV_TEST_EMAIL,
        password: DEV_TEST_PASSWORD,
        flow: "signIn",
      });
    } catch {
      // Geliştirme kolaylığı: hızlı test girişi için onayı otomatik veriyoruz.
      await signIn("password", {
        email: DEV_TEST_EMAIL,
        password: DEV_TEST_PASSWORD,
        flow: "signUp",
        kvkkConsent: true,
      });
    }
  }

  return {
    isAuthenticated,
    isLoading,
    signUpWithPassword,
    signInWithPassword,
    signInWithGoogle,
    signInWithApple,
    signInAsTestUser,
    signOut,
  };
}

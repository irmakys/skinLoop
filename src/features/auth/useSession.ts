import { api } from "@convex/_generated/api";
import { useAuthActions, useConvexAuth } from "@convex-dev/auth/react";
import { useAction, useMutation } from "convex/react";

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
  if (/EMAIL_NOT_VERIFIED/i.test(raw)) {
    return new Error("E-postanı doğrulamadan hesap oluşturulamaz.");
  }
  if (/EMAIL_ALREADY_REGISTERED/i.test(raw)) {
    return new Error("Bu e-posta zaten kayıtlı. Giriş yapmayı dene.");
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
const DEV_TEST_OTP_CODE = "123456";

export function useSession() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { signIn, signOut } = useAuthActions();
  const requestSignupOtp = useAction(api.emailVerification.requestSignupOtp);
  const verifySignupOtp = useMutation(api.emailVerification.verifySignupOtp);

  /** E-posta OTP ile önceden doğrulanmış olmalı — bkz. requestSignupOtp/verifySignupOtp ve convex/auth.ts. */
  async function signUpWithPassword(
    email: string,
    password: string,
    kvkkConsent: boolean,
    signupProof: string,
  ) {
    try {
      await signIn("password", { email, password, flow: "signUp", kvkkConsent, signupProof });
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
   * Hesap yoksa, gerçek akışın aynısını (OTP iste → sabit test koduyla
   * doğrula → imzayla kaydol) otomatik yürüterek oluşturur — böylece bu
   * kısayol, `convex/auth.ts`'teki zorunlu e-posta doğrulamasını atlamaz,
   * yalnızca kod girme adımını otomatikleştirir. `OTP_TEST_BYPASS` env
   * değişkeni bu dev dağıtımında açık olduğu için çalışır.
   */
  async function signInAsTestUser() {
    try {
      await signIn("password", {
        email: DEV_TEST_EMAIL,
        password: DEV_TEST_PASSWORD,
        flow: "signIn",
      });
    } catch {
      await requestSignupOtp({ email: DEV_TEST_EMAIL });
      const result = await verifySignupOtp({ email: DEV_TEST_EMAIL, code: DEV_TEST_OTP_CODE });
      await signIn("password", {
        email: DEV_TEST_EMAIL,
        password: DEV_TEST_PASSWORD,
        flow: "signUp",
        kvkkConsent: true,
        signupProof: result.proof,
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

import { useAuthActions, useConvexAuth } from "@convex-dev/auth/react";

import { useLocale, type TranslationKey } from "@/i18n/LocaleContext";

function toFriendlyAuthError(error: unknown, t: (key: TranslationKey) => string): Error {
  const raw = error instanceof Error ? error.message : String(error);

  if (/InvalidAccountId|InvalidSecret|invalid.*password|invalid.*credentials/i.test(raw)) {
    return new Error(t("auth.errors.invalidCredentials"));
  }
  if (/already exists|AccountAlreadyExists/i.test(raw)) {
    return new Error(t("auth.errors.emailAlreadyRegistered"));
  }
  if (/TooManyFailedAttempts/i.test(raw)) {
    return new Error(t("auth.errors.tooManyAttempts"));
  }
  if (/KVKK_CONSENT_REQUIRED/i.test(raw)) {
    return new Error(t("auth.errors.mustAcceptLegal"));
  }
  if (/EMAIL_NOT_VERIFIED/i.test(raw)) {
    return new Error(t("auth.errors.emailNotVerified"));
  }
  if (/EMAIL_ALREADY_REGISTERED/i.test(raw)) {
    return new Error(t("auth.errors.emailAlreadyRegistered"));
  }
  if (/OAuth-cancelled/i.test(raw)) {
    return new Error(t("auth.errors.signInCancelled"));
  }
  if (/OAuth-no-code|Configuration|client_id|client_secret/i.test(raw)) {
    return new Error(t("auth.errors.providerUnavailable"));
  }
  if (/Network request failed|fetch/i.test(raw)) {
    return new Error(t("auth.errors.networkError"));
  }

  return new Error(t("auth.errors.genericRetry"));
}

export function useSession() {
  const { t } = useLocale();
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { signIn, signOut } = useAuthActions();

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
      throw toFriendlyAuthError(error, t);
    }
  }

  async function signInWithPassword(email: string, password: string) {
    try {
      await signIn("password", { email, password, flow: "signIn" });
    } catch (error) {
      throw toFriendlyAuthError(error, t);
    }
  }

  return {
    isAuthenticated,
    isLoading,
    signUpWithPassword,
    signInWithPassword,
    signOut,
  };
}

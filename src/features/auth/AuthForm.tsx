import { api } from "@convex/_generated/api";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useAction, useMutation } from "convex/react";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import {
  ActivityIndicator,
  Button,
  Checkbox,
  HelperText,
  IconButton,
  SegmentedButtons,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";

import { AmbientBackground } from "@/components/AmbientBackground";
import { Logo } from "@/components/Logo";
import { LegalModal, type LegalDocumentType } from "@/features/auth/LegalModal";
import { OtpDigitsInput } from "@/features/auth/OtpDigitsInput";
import { useSession } from "@/features/auth/useSession";
import { useLocale, type TranslationKey } from "@/i18n/LocaleContext";
import { FONT_DISPLAY_BOLD } from "@/theme/fonts";
import { CARD_RADIUS, CARD_SHADOW } from "@/theme/theme";

type Mode = "sign-in" | "sign-up";
type SignUpStep = "email" | "otp" | "password";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** Sunucudaki gerçek zorunluluk `convex/emailVerification.ts`'teki RESEND_COOLDOWN_MS (60sn) ile eşleşir. */
const RESEND_COOLDOWN_SECONDS = 60;

function toFriendlyOtpError(error: unknown, t: (key: TranslationKey) => string): string {
  const raw = error instanceof Error ? error.message : String(error);
  if (/EMAIL_ALREADY_REGISTERED/.test(raw)) {
    return t("auth.errors.emailAlreadyRegistered");
  }
  if (/OTP_EXPIRED/.test(raw)) {
    return t("auth.errors.otpExpired");
  }
  if (/OTP_TOO_MANY_ATTEMPTS/.test(raw)) {
    return t("auth.errors.otpTooManyAttempts");
  }
  if (/OTP_INVALID/.test(raw)) {
    return t("auth.errors.otpInvalid");
  }
  if (/OTP_NOT_REQUESTED/.test(raw)) {
    return t("auth.errors.otpNotRequested");
  }
  if (/OTP_RESEND_COOLDOWN/.test(raw)) {
    return t("auth.errors.otpResendCooldown");
  }
  if (/EMAIL_SEND_FAILED/.test(raw)) {
    return t("auth.errors.emailSendFailed");
  }
  return t("auth.errors.genericRetry");
}

/**
 * Giriş Yap / Kayıt Ol sekmeli tek ekran. Kayıt Ol, sahte hesapları
 * engellemek için 3 adımlı bir sihirbaz: 1) e-posta → OTP iste,
 * 2) 6 haneli kodu doğrula, 3) şifre belirleyip kaydı tamamla. Hesap,
 * e-posta gerçekten doğrulanmadan sunucuda ASLA oluşturulmaz (bkz.
 * convex/auth.ts + convex/emailVerification.ts).
 */
export function AuthForm() {
  const theme = useTheme();
  const { t } = useLocale();
  const router = useRouter();
  const { signInWithPassword, signUpWithPassword } = useSession();
  const requestSignupOtp = useAction(api.emailVerification.requestSignupOtp);
  const verifySignupOtp = useMutation(api.emailVerification.verifySignupOtp);

  const [mode, setMode] = useState<Mode>("sign-in");
  const [signUpStep, setSignUpStep] = useState<SignUpStep>("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [legalModalType, setLegalModalType] = useState<LegalDocumentType | null>(null);
  const [signupProof, setSignupProof] = useState<string | null>(null);
  const [otpResetKey, setOtpResetKey] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(RESEND_COOLDOWN_SECONDS);

  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [otpError, setOtpError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (mode !== "sign-up" || signUpStep !== "otp") {
      return;
    }
    const interval = setInterval(() => {
      setSecondsLeft((current) => (current > 0 ? current - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [mode, signUpStep]);

  function resetSignUpWizard() {
    setSignUpStep("email");
    setPassword("");
    setIsAgreed(false);
    setSignupProof(null);
    setOtpError(null);
  }

  function handleModeChange(value: string) {
    setMode(value as Mode);
    setEmailError(null);
    setPasswordError(null);
    setFormError(null);
    resetSignUpWizard();
  }

  function validateEmail(): boolean {
    setEmailError(null);
    if (!email.trim()) {
      setEmailError(t("auth.emailRequired"));
      return false;
    }
    if (!EMAIL_PATTERN.test(email.trim())) {
      setEmailError(t("auth.emailInvalid"));
      return false;
    }
    return true;
  }

  async function handleRequestOtp() {
    setFormError(null);
    if (!validateEmail()) {
      return;
    }
    setIsSubmitting(true);
    try {
      await requestSignupOtp({ email: email.trim() });
      setSignUpStep("otp");
      setSecondsLeft(RESEND_COOLDOWN_SECONDS);
      setOtpResetKey((key) => key + 1);
    } catch (err) {
      setFormError(toFriendlyOtpError(err, t));
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleVerifyOtp(code: string) {
    setOtpError(null);
    setIsSubmitting(true);
    try {
      const result = await verifySignupOtp({ email: email.trim(), code });
      setSignupProof(result.proof);
      setSignUpStep("password");
    } catch (err) {
      setOtpError(toFriendlyOtpError(err, t));
      setOtpResetKey((key) => key + 1);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleResendOtp() {
    setOtpError(null);
    setIsSubmitting(true);
    try {
      await requestSignupOtp({ email: email.trim() });
      setSecondsLeft(RESEND_COOLDOWN_SECONDS);
      setOtpResetKey((key) => key + 1);
    } catch (err) {
      setOtpError(toFriendlyOtpError(err, t));
    } finally {
      setIsSubmitting(false);
    }
  }

  function validatePassword(): boolean {
    setPasswordError(null);
    if (!password) {
      setPasswordError(t("auth.passwordRequired"));
      return false;
    }
    if (password.length < 6) {
      setPasswordError(t("auth.passwordTooShort"));
      return false;
    }
    return true;
  }

  async function handleCompleteSignUp() {
    setFormError(null);
    if (!validatePassword()) {
      return;
    }
    if (!isAgreed) {
      setFormError(t("auth.mustAcceptLegalForm"));
      return;
    }
    if (!signupProof) {
      setFormError(t("auth.verificationNotFound"));
      setSignUpStep("email");
      return;
    }

    setIsSubmitting(true);
    try {
      await signUpWithPassword(email.trim(), password, isAgreed, signupProof);
      router.replace("/(tabs)/planner");
    } catch (err) {
      setFormError(err instanceof Error ? err.message : t("auth.errors.generic"));
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleSignIn() {
    setFormError(null);
    if (!validateEmail()) {
      return;
    }
    if (!password) {
      setPasswordError(t("auth.passwordRequired"));
      return;
    }
    setPasswordError(null);

    setIsSubmitting(true);
    try {
      await signInWithPassword(email.trim(), password);
      router.replace("/(tabs)/planner");
    } catch (err) {
      setFormError(err instanceof Error ? err.message : t("auth.errors.generic"));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AmbientBackground>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center", padding: 24 }}
        keyboardShouldPersistTaps="handled"
      >
      <View style={{ alignItems: "center", gap: 6, marginBottom: 28 }}>
        <Logo size={60} />
        <Text
          style={{
            fontFamily: FONT_DISPLAY_BOLD,
            fontSize: 32,
            letterSpacing: 0.3,
            color: theme.colors.onBackground,
          }}
        >
          BeautyLoop
        </Text>
        <Text
          variant="bodyMedium"
          style={{
            color: theme.colors.onSurfaceVariant,
            letterSpacing: 0.4,
          }}
        >
          {t("auth.tagline")}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: theme.colors.surface,
          borderRadius: CARD_RADIUS,
          padding: 20,
          gap: 14,
          ...CARD_SHADOW,
        }}
      >
        <SegmentedButtons
          value={mode}
          onValueChange={handleModeChange}
          buttons={[
            { value: "sign-in", label: t("auth.signIn") },
            { value: "sign-up", label: t("auth.signUpTab") },
          ]}
        />

        {mode === "sign-in" ? (
          <>
            <View style={{ gap: 4 }}>
              <TextInput
                mode="outlined"
                label={t("auth.email")}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoComplete="email"
                keyboardType="email-address"
                left={<TextInput.Icon icon="email-outline" />}
                error={emailError !== null}
              />
              {emailError ? <HelperText type="error">{emailError}</HelperText> : null}
            </View>

            <View style={{ gap: 4 }}>
              <TextInput
                mode="outlined"
                label={t("auth.password")}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoComplete="password"
                left={<TextInput.Icon icon="lock-outline" />}
                right={
                  <TextInput.Icon
                    icon={showPassword ? "eye-off-outline" : "eye-outline"}
                    onPress={() => setShowPassword((current) => !current)}
                    forceTextInputFocus={false}
                  />
                }
                error={passwordError !== null}
              />
              {passwordError ? <HelperText type="error">{passwordError}</HelperText> : null}
            </View>

            {formError ? <HelperText type="error">{formError}</HelperText> : null}

            <Button
              mode="contained"
              onPress={handleSignIn}
              loading={isSubmitting}
              disabled={isSubmitting}
              style={{ borderRadius: CARD_RADIUS }}
              contentStyle={{ height: 48 }}
            >
              {t("auth.signIn")}
            </Button>
          </>
        ) : null}

        {mode === "sign-up" && signUpStep === "email" ? (
          <>
            <View style={{ gap: 4 }}>
              <TextInput
                mode="outlined"
                label={t("auth.email")}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoComplete="email"
                keyboardType="email-address"
                left={<TextInput.Icon icon="email-outline" />}
                error={emailError !== null}
              />
              {emailError ? <HelperText type="error">{emailError}</HelperText> : null}
            </View>

            {formError ? <HelperText type="error">{formError}</HelperText> : null}

            <Button
              mode="contained"
              onPress={handleRequestOtp}
              loading={isSubmitting}
              disabled={isSubmitting}
              style={{ borderRadius: CARD_RADIUS }}
              contentStyle={{ height: 48 }}
            >
              {t("auth.sendCode")}
            </Button>
          </>
        ) : null}

        {mode === "sign-up" && signUpStep === "otp" ? (
          <>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
              <IconButton
                icon="arrow-left"
                size={18}
                onPress={() => setSignUpStep("email")}
                style={{ margin: 0 }}
              />
              <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant, flex: 1 }}>
                {t("auth.otpSent", { email })}
              </Text>
            </View>

            <OtpDigitsInput key={otpResetKey} onComplete={handleVerifyOtp} error={otpError !== null} />

            {otpError ? <HelperText type="error">{otpError}</HelperText> : null}
            {isSubmitting ? <ActivityIndicator /> : null}

            <View style={{ alignItems: "center" }}>
              {secondsLeft > 0 ? (
                <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
                  {t("auth.resendCooldown", { time: secondsLeft })}
                </Text>
              ) : (
                <Button mode="text" onPress={handleResendOtp} loading={isSubmitting} disabled={isSubmitting}>
                  {t("auth.resendCode")}
                </Button>
              )}
            </View>

            <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant, textAlign: "center" }}>
              {t("auth.checkSpamNote")}
            </Text>
          </>
        ) : null}

        {mode === "sign-up" && signUpStep === "password" ? (
          <>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                backgroundColor: theme.colors.tertiaryContainer,
                borderRadius: 14,
                padding: 10,
              }}
            >
              <MaterialCommunityIcons
                name="check-circle-outline"
                size={16}
                color={theme.colors.onTertiaryContainer}
              />
              <Text variant="bodySmall" style={{ color: theme.colors.onTertiaryContainer, flex: 1 }}>
                {t("auth.emailVerified", { email })}
              </Text>
            </View>

            <View style={{ gap: 4 }}>
              <TextInput
                mode="outlined"
                label={t("auth.password")}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoComplete="password-new"
                left={<TextInput.Icon icon="lock-outline" />}
                right={
                  <TextInput.Icon
                    icon={showPassword ? "eye-off-outline" : "eye-outline"}
                    onPress={() => setShowPassword((current) => !current)}
                    forceTextInputFocus={false}
                  />
                }
                error={passwordError !== null}
              />
              {passwordError ? <HelperText type="error">{passwordError}</HelperText> : null}
            </View>

            <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 4 }}>
              <Checkbox
                status={isAgreed ? "checked" : "unchecked"}
                onPress={() => setIsAgreed((current) => !current)}
              />
              <Text
                variant="bodySmall"
                style={{ flex: 1, color: theme.colors.onSurfaceVariant, marginTop: 10 }}
                onPress={() => setIsAgreed((current) => !current)}
              >
                {t("legal.consentBefore")}
                <Text
                  variant="bodySmall"
                  style={{ color: theme.colors.primary, fontWeight: "700" }}
                  onPress={() => setLegalModalType("terms")}
                >
                  {t("legal.termsLink")}
                </Text>
                {t("legal.consentBetween")}
                <Text
                  variant="bodySmall"
                  style={{ color: theme.colors.primary, fontWeight: "700" }}
                  onPress={() => setLegalModalType("kvkk")}
                >
                  {t("legal.kvkkLink")}
                </Text>
                {t("legal.consentAfter")}
              </Text>
            </View>

            {formError ? <HelperText type="error">{formError}</HelperText> : null}

            <Button
              mode="contained"
              onPress={handleCompleteSignUp}
              loading={isSubmitting}
              disabled={isSubmitting || !isAgreed}
              style={{ borderRadius: CARD_RADIUS }}
              contentStyle={{ height: 48 }}
            >
              {t("auth.registerSubmit")}
            </Button>
          </>
        ) : null}
      </View>

      <LegalModal documentType={legalModalType} onDismiss={() => setLegalModalType(null)} />
      </ScrollView>
    </AmbientBackground>
  );
}

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
import { FONT_DISPLAY_BOLD } from "@/theme/fonts";
import { CARD_RADIUS, CARD_SHADOW } from "@/theme/theme";

type Mode = "sign-in" | "sign-up";
type SignUpStep = "email" | "otp" | "password";
type SocialProvider = "google" | "apple";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESEND_COOLDOWN_SECONDS = 180;

function formatCooldown(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function toFriendlyOtpError(error: unknown): string {
  const raw = error instanceof Error ? error.message : String(error);
  if (/EMAIL_ALREADY_REGISTERED/.test(raw)) {
    return "Bu e-posta zaten kayıtlı. Giriş yapmayı dene.";
  }
  if (/OTP_EXPIRED/.test(raw)) {
    return "Kodun süresi doldu. Yeni bir kod iste.";
  }
  if (/OTP_INVALID/.test(raw)) {
    return "Girdiğin kod hatalı. Lütfen tekrar dene.";
  }
  if (/OTP_NOT_REQUESTED/.test(raw)) {
    return "Önce bir doğrulama kodu istemelisin.";
  }
  return "Bir şeyler ters gitti. Lütfen tekrar dene.";
}

function SocialSignInButton({
  provider,
  loading,
  onPress,
}: {
  provider: SocialProvider;
  loading: boolean;
  onPress: () => void;
}) {
  const theme = useTheme();
  const label = provider === "google" ? "Google ile Giriş Yap" : "Apple ile Giriş Yap";

  return (
    <Button
      mode="outlined"
      onPress={onPress}
      disabled={loading}
      style={{ borderRadius: CARD_RADIUS, borderColor: theme.colors.outline }}
      contentStyle={{ height: 48 }}
      icon={({ size, color }) =>
        loading ? (
          <ActivityIndicator size={size} color={color} />
        ) : (
          <MaterialCommunityIcons name={provider} size={size} color={color} />
        )
      }
      textColor={theme.colors.onSurface}
    >
      {label}
    </Button>
  );
}

/**
 * Giriş Yap / Kayıt Ol sekmeli tek ekran. Kayıt Ol, sahte hesapları
 * engellemek için 3 adımlı bir sihirbaz: 1) e-posta → OTP iste,
 * 2) 6 haneli kodu doğrula, 3) şifre belirleyip kaydı tamamla. Hesap,
 * e-posta gerçekten doğrulanmadan sunucuda ASLA oluşturulmaz (bkz.
 * convex/auth.ts + convex/emailVerification.ts). Google/Apple OAuth
 * akışlarını da aynı kartta birleştirir (bkz. useSession).
 */
export function AuthForm() {
  const theme = useTheme();
  const router = useRouter();
  const {
    signInWithPassword,
    signUpWithPassword,
    signInWithGoogle,
    signInWithApple,
    signInAsTestUser,
  } = useSession();
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
  const [loadingProvider, setLoadingProvider] = useState<SocialProvider | null>(null);
  const [isTestLoginSubmitting, setIsTestLoginSubmitting] = useState(false);

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
      setEmailError("E-posta zorunludur.");
      return false;
    }
    if (!EMAIL_PATTERN.test(email.trim())) {
      setEmailError("Geçerli bir e-posta adresi gir.");
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
      setFormError(toFriendlyOtpError(err));
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
      setOtpError(toFriendlyOtpError(err));
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
      setOtpError(toFriendlyOtpError(err));
    } finally {
      setIsSubmitting(false);
    }
  }

  function validatePassword(): boolean {
    setPasswordError(null);
    if (!password) {
      setPasswordError("Şifre zorunludur.");
      return false;
    }
    if (password.length < 6) {
      setPasswordError("Şifre en az 6 karakter olmalı.");
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
      setFormError("Lütfen devam etmeden önce KVKK metnini ve kullanıcı sözleşmesini onaylayın.");
      return;
    }
    if (!signupProof) {
      setFormError("E-posta doğrulaması bulunamadı. Lütfen baştan dene.");
      setSignUpStep("email");
      return;
    }

    setIsSubmitting(true);
    try {
      await signUpWithPassword(email.trim(), password, isAgreed, signupProof);
      router.replace("/(tabs)/planner");
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Bir şeyler ters gitti.");
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
      setPasswordError("Şifre zorunludur.");
      return;
    }
    setPasswordError(null);

    setIsSubmitting(true);
    try {
      await signInWithPassword(email.trim(), password);
      router.replace("/(tabs)/planner");
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Bir şeyler ters gitti.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleSocialSignIn(provider: SocialProvider) {
    setFormError(null);
    setLoadingProvider(provider);
    try {
      if (provider === "google") {
        await signInWithGoogle();
      } else {
        await signInWithApple();
      }
      router.replace("/(tabs)/planner");
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Bir şeyler ters gitti.");
    } finally {
      setLoadingProvider(null);
    }
  }

  async function handleTestLogin() {
    setFormError(null);
    setIsTestLoginSubmitting(true);
    try {
      await signInAsTestUser();
      router.replace("/(tabs)/planner");
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Test girişi başarısız oldu.");
    } finally {
      setIsTestLoginSubmitting(false);
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
          skinLoop
        </Text>
        <Text
          variant="bodyMedium"
          style={{
            color: theme.colors.onSurfaceVariant,
            letterSpacing: 0.4,
          }}
        >
          Cilt bakım rutinini takip et
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
            { value: "sign-in", label: "Giriş Yap" },
            { value: "sign-up", label: "Kayıt Ol" },
          ]}
        />

        {mode === "sign-in" ? (
          <>
            <View style={{ gap: 4 }}>
              <TextInput
                mode="outlined"
                label="E-posta"
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
                label="Şifre"
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
              Giriş Yap
            </Button>
          </>
        ) : null}

        {mode === "sign-up" && signUpStep === "email" ? (
          <>
            <View style={{ gap: 4 }}>
              <TextInput
                mode="outlined"
                label="E-posta"
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
              Kod Gönder
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
                {email} adresine gönderilen 6 haneli kodu gir.
              </Text>
            </View>

            <OtpDigitsInput key={otpResetKey} onComplete={handleVerifyOtp} error={otpError !== null} />

            {otpError ? <HelperText type="error">{otpError}</HelperText> : null}
            {isSubmitting ? <ActivityIndicator /> : null}

            <View style={{ alignItems: "center" }}>
              {secondsLeft > 0 ? (
                <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }}>
                  Kodu tekrar gönderebilmek için {formatCooldown(secondsLeft)}
                </Text>
              ) : (
                <Button mode="text" onPress={handleResendOtp} loading={isSubmitting}>
                  Kodu Tekrar Gönder
                </Button>
              )}
            </View>

            {__DEV__ ? (
              <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant, textAlign: "center" }}>
                Geliştirme test kodu: 123456
              </Text>
            ) : null}
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
                {email} doğrulandı. Şimdi bir şifre belirle.
              </Text>
            </View>

            <View style={{ gap: 4 }}>
              <TextInput
                mode="outlined"
                label="Şifre"
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
                <Text
                  variant="bodySmall"
                  style={{ color: theme.colors.primary, fontWeight: "700" }}
                  onPress={() => setLegalModalType("terms")}
                >
                  Kullanıcı Sözleşmesi
                </Text>
                &apos;ni ve{" "}
                <Text
                  variant="bodySmall"
                  style={{ color: theme.colors.primary, fontWeight: "700" }}
                  onPress={() => setLegalModalType("kvkk")}
                >
                  KVKK Aydınlatma Metni
                </Text>
                &apos;ni okudum, kişisel verilerimin işlenmesini onaylıyorum.
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
              Kaydol
            </Button>
          </>
        ) : null}

        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginVertical: 4 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: theme.colors.outlineVariant }} />
          <Text variant="labelMedium" style={{ color: theme.colors.onSurfaceVariant }}>
            veya
          </Text>
          <View style={{ flex: 1, height: 1, backgroundColor: theme.colors.outlineVariant }} />
        </View>

        <View style={{ gap: 10 }}>
          <SocialSignInButton
            provider="google"
            loading={loadingProvider === "google"}
            onPress={() => handleSocialSignIn("google")}
          />
          <SocialSignInButton
            provider="apple"
            loading={loadingProvider === "apple"}
            onPress={() => handleSocialSignIn("apple")}
          />
        </View>
      </View>

      {__DEV__ ? (
        <Button
          mode="text"
          onPress={handleTestLogin}
          loading={isTestLoginSubmitting}
          style={{ marginTop: 16 }}
        >
          Test Kullanıcısı ile Hızlı Giriş
        </Button>
      ) : null}

      <LegalModal documentType={legalModalType} onDismiss={() => setLegalModalType(null)} />
      </ScrollView>
    </AmbientBackground>
  );
}

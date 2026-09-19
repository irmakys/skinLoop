import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import {
  ActivityIndicator,
  Button,
  Checkbox,
  HelperText,
  SegmentedButtons,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";

import { LegalModal, type LegalDocumentType } from "@/features/auth/LegalModal";
import { useSession } from "@/features/auth/useSession";
import { CARD_RADIUS, CARD_SHADOW } from "@/theme/theme";

type Mode = "sign-in" | "sign-up";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SocialProvider = "google" | "apple";

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
 * Giriş Yap / Kayıt Ol sekmeli tek ekran. E-posta+şifre ve Google/Apple
 * OAuth akışlarını tek bir kart içinde birleştirir (bkz. useSession).
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

  const [mode, setMode] = useState<Mode>("sign-in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [legalModalType, setLegalModalType] = useState<LegalDocumentType | null>(null);

  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingProvider, setLoadingProvider] = useState<SocialProvider | null>(null);
  const [isTestLoginSubmitting, setIsTestLoginSubmitting] = useState(false);

  function validate(): boolean {
    let valid = true;
    setEmailError(null);
    setPasswordError(null);

    if (!email.trim()) {
      setEmailError("E-posta zorunludur.");
      valid = false;
    } else if (!EMAIL_PATTERN.test(email.trim())) {
      setEmailError("Geçerli bir e-posta adresi gir.");
      valid = false;
    }

    if (!password) {
      setPasswordError("Şifre zorunludur.");
      valid = false;
    } else if (mode === "sign-up" && password.length < 6) {
      setPasswordError("Şifre en az 6 karakter olmalı.");
      valid = false;
    }

    return valid;
  }

  async function handleSubmit() {
    setFormError(null);
    if (!validate()) {
      return;
    }
    if (mode === "sign-up" && !isAgreed) {
      setFormError("Lütfen devam etmeden önce KVKK metnini ve kullanıcı sözleşmesini onaylayın.");
      return;
    }

    setIsSubmitting(true);
    try {
      if (mode === "sign-up") {
        await signUpWithPassword(email.trim(), password, isAgreed);
      } else {
        await signInWithPassword(email.trim(), password);
      }
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
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center", padding: 24 }}
      style={{ backgroundColor: theme.colors.background }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={{ alignItems: "center", gap: 4, marginBottom: 24 }}>
        <MaterialCommunityIcons name="water-outline" size={36} color={theme.colors.primary} />
        <Text variant="headlineSmall" style={{ fontWeight: "700", color: theme.colors.onBackground }}>
          skinLoop
        </Text>
        <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant }}>
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
          onValueChange={(value) => {
            setMode(value as Mode);
            setEmailError(null);
            setPasswordError(null);
            setFormError(null);
            setIsAgreed(false);
          }}
          buttons={[
            { value: "sign-in", label: "Giriş Yap" },
            { value: "sign-up", label: "Kayıt Ol" },
          ]}
        />

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

        {mode === "sign-up" ? (
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
        ) : null}

        {formError ? <HelperText type="error">{formError}</HelperText> : null}

        <Button
          mode="contained"
          onPress={handleSubmit}
          loading={isSubmitting}
          disabled={isSubmitting || (mode === "sign-up" && !isAgreed)}
          style={{ borderRadius: CARD_RADIUS }}
          contentStyle={{ height: 48 }}
        >
          {mode === "sign-up" ? "Kayıt Ol" : "Giriş Yap"}
        </Button>

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
  );
}

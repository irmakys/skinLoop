import { api } from "@convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { useState, type ReactNode } from "react";
import { ScrollView, View } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";

import { useSession } from "@/features/auth/useSession";
import { LegalModal, type LegalDocumentType } from "@/features/auth/LegalModal";
import { CARD_RADIUS, CARD_SHADOW } from "@/theme/theme";

/**
 * Şifreyle kaydolan kullanıcılar için KVKK onayı zaten hesap oluşturulurken
 * sunucuda zorunlu kılınıyor (bkz. convex/auth.ts Password `profile`).
 * Ama Google/Apple OAuth akışı, yönlendirme tabanlı olduğundan sağlayıcıya
 * giderken bir "onay kutusu" parametresi taşıyamaz — bu yüzden ilk girişten
 * hemen sonra bu tam ekran zorunlu onay adımıyla yakalanır. Aynı mekanizma,
 * bu özellikten ÖNCE şifreyle kaydolmuş eski hesapları da (kvkkConsent alanı
 * olmayanlar) kapsar, böylece tek bir kontrol noktası her senaryoyu kapsar.
 *
 * `children`, kullanıcı zaten onaylamışsa (veya oturum/veri henüz yüklenmeden)
 * olduğu gibi render edilir; onay eksikse tüm uygulamanın yerine bu ekran
 * gösterilir ve kullanıcı "Onaylıyorum"a basana kadar geçemez.
 */
export function LegalConsentGate({ children }: { children: ReactNode }) {
  const theme = useTheme();
  const { signOut } = useSession();
  const user = useQuery(api.users.getCurrentUser);
  const acceptKvkkConsent = useMutation(api.users.acceptKvkkConsent);

  const [legalModalType, setLegalModalType] = useState<LegalDocumentType | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  // Kullanıcı verisi henüz gelmediyse veya zaten onaylıysa uygulamayı olduğu gibi göster.
  if (user === undefined || user === null || user.kvkkConsent) {
    return <>{children}</>;
  }

  async function handleAccept() {
    setIsSubmitting(true);
    try {
      await acceptKvkkConsent();
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleDecline() {
    setIsSigningOut(true);
    try {
      await signOut();
    } finally {
      setIsSigningOut(false);
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", padding: 24 }}>
        <View
          style={{
            backgroundColor: theme.colors.surface,
            borderRadius: CARD_RADIUS,
            padding: 20,
            gap: 12,
            ...CARD_SHADOW,
          }}
        >
          <Text variant="headlineSmall" style={{ fontWeight: "700", color: theme.colors.onSurface }}>
            Devam Etmeden Önce
          </Text>
          <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant, lineHeight: 21 }}>
            skinLoop&apos;u kullanmaya devam edebilmen için{" "}
            <Text
              style={{ color: theme.colors.primary, fontWeight: "700" }}
              onPress={() => setLegalModalType("terms")}
            >
              Kullanıcı Sözleşmesi
            </Text>
            &apos;ni ve{" "}
            <Text
              style={{ color: theme.colors.primary, fontWeight: "700" }}
              onPress={() => setLegalModalType("kvkk")}
            >
              KVKK Aydınlatma Metni
            </Text>
            &apos;ni okuyup kişisel verilerinin işlenmesini onaylaman gerekiyor.
          </Text>

          <Button
            mode="contained"
            onPress={handleAccept}
            loading={isSubmitting}
            style={{ borderRadius: CARD_RADIUS, marginTop: 8 }}
            contentStyle={{ height: 48 }}
          >
            Okudum, Onaylıyorum ve Devam Et
          </Button>
          <Button mode="text" onPress={handleDecline} loading={isSigningOut} textColor={theme.colors.error}>
            Reddet ve Çıkış Yap
          </Button>
        </View>
      </ScrollView>

      <LegalModal documentType={legalModalType} onDismiss={() => setLegalModalType(null)} />
    </View>
  );
}

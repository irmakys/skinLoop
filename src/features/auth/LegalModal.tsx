import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView, View } from "react-native";
import { IconButton, Modal, Portal, Text, useTheme } from "react-native-paper";

import { KVKK_DISCLOSURE_TEXT, TERMS_AND_CONSENT_TEXT } from "@/features/auth/legalContent";
import { CARD_RADIUS } from "@/theme/theme";

export type LegalDocumentType = "kvkk" | "terms";

const TITLES: Record<LegalDocumentType, string> = {
  kvkk: "KVKK Aydınlatma Metni",
  terms: "Kullanıcı Sözleşmesi & Açık Rıza Metni",
};

const CONTENTS: Record<LegalDocumentType, string> = {
  kvkk: KVKK_DISCLOSURE_TEXT,
  terms: TERMS_AND_CONSENT_TEXT,
};

type LegalModalProps = {
  documentType: LegalDocumentType | null;
  onDismiss: () => void;
};

/**
 * KVKK Aydınlatma Metni / Kullanıcı Sözleşmesi için alttan açılan, kaydırılabilir
 * yasal metin sayfası. Kayıt formundaki onay kutusundan ve gerektiğinde
 * LegalConsentGate'ten tetiklenir.
 */
export function LegalModal({ documentType, onDismiss }: LegalModalProps) {
  const theme = useTheme();

  return (
    <Portal>
      <Modal
        visible={documentType !== null}
        onDismiss={onDismiss}
        contentContainerStyle={{
          backgroundColor: theme.colors.surface,
          borderTopLeftRadius: CARD_RADIUS,
          borderTopRightRadius: CARD_RADIUS,
          marginTop: "auto",
          maxHeight: "85%",
          paddingBottom: 24,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingTop: 16,
          }}
        >
          <Text variant="titleMedium" style={{ fontWeight: "700", flex: 1 }} numberOfLines={2}>
            {documentType ? TITLES[documentType] : ""}
          </Text>
          <IconButton icon="close" onPress={onDismiss} />
        </View>

        <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 8, paddingBottom: 12 }}>
          <View
            style={{
              flexDirection: "row",
              gap: 8,
              backgroundColor: theme.colors.secondaryContainer,
              borderRadius: 14,
              padding: 12,
              marginBottom: 16,
            }}
          >
            <MaterialCommunityIcons name="information-outline" size={18} color={theme.colors.onSecondaryContainer} />
            <Text variant="bodySmall" style={{ color: theme.colors.onSecondaryContainer, flex: 1 }}>
              Bu metin bir taslaktır; köşeli parantez içindeki alanlar yayına almadan önce
              doldurulmalı ve bir hukuk danışmanına onaylatılmalıdır.
            </Text>
          </View>

          <Text variant="bodyMedium" style={{ color: theme.colors.onSurface, lineHeight: 22 }}>
            {documentType ? CONTENTS[documentType] : ""}
          </Text>
        </ScrollView>
      </Modal>
    </Portal>
  );
}

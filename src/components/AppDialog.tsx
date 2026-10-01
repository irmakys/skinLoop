import type { ReactNode } from "react";
import { ScrollView, type StyleProp, type ViewStyle } from "react-native";
import { Dialog, Portal, useTheme } from "react-native-paper";

import { DIALOG_RADIUS, hexToRgba } from "@/theme/theme";

type AppDialogProps = {
  visible: boolean;
  onDismiss: () => void;
  /** Verilmezse Dialog.Title render edilmez (ör. kendi başlığını kendi çizen takvim gibi özel içerikler). */
  title?: string;
  children: ReactNode;
  /** Genelde Vazgeç/Kaydet gibi Button'lar. Verilmezse Dialog.Actions render edilmez. */
  actions?: ReactNode;
  dismissable?: boolean;
  /** İçerik öğeleri arası dikey boşluk. */
  contentGap?: number;
  /** Bazı içerikler (ör. tam genişlikte tıklanabilir satırlar) kendi yatay boşluğunu kendi yönetmek ister. */
  contentPaddingHorizontal?: number;
  maxWidth?: number;
  contentStyle?: StyleProp<ViewStyle>;
};

/**
 * Projedeki tüm modal/dialog/alert'ler için ortak, taşma korumalı kutu.
 * Çözdüğü sorunlar:
 *  - Aşırı köşe yuvarlaklığı: Paper'ın MD3 varsayılanı `roundness*7` (112px)
 *    yerine sabit, ölçülü `DIALOG_RADIUS` kullanılır.
 *  - Geniş ekranlarda (tablet) kutunun aşırı genişlemesi: `maxWidth` ile sınırlanır.
 *  - İçerik ekran boyunu aşarsa kutunun tamamının bozulması yerine yalnızca
 *    içerik `Dialog.ScrollArea` + `ScrollView` ile dikeyde kayar, kutu
 *    `maxHeight` ile sabit tutulur.
 *  - Buton satırının (Vazgeç/Sil vb.) dar ekranlarda taşması: Dialog.Actions
 *    `flexWrap` ile, sığmayan buton alt satıra kayar, üst üste binmez.
 */
export function AppDialog({
  visible,
  onDismiss,
  title,
  children,
  actions,
  dismissable = true,
  contentGap = 12,
  contentPaddingHorizontal = 24,
  maxWidth = 440,
  contentStyle,
}: AppDialogProps) {
  const theme = useTheme();

  return (
    <Portal>
      <Dialog
        visible={visible}
        onDismiss={onDismiss}
        dismissable={dismissable}
        style={{
          borderRadius: DIALOG_RADIUS,
          alignSelf: "center",
          width: "100%",
          maxWidth,
          maxHeight: "85%",
        }}
      >
        {title ? <Dialog.Title style={{ flexShrink: 1 }}>{title}</Dialog.Title> : null}

        <Dialog.ScrollArea
          style={{
            borderColor: hexToRgba(theme.colors.outline, 0.15),
            paddingHorizontal: 0,
          }}
        >
          <ScrollView
            contentContainerStyle={[
              { gap: contentGap, paddingHorizontal: contentPaddingHorizontal, paddingVertical: 12 },
              contentStyle,
            ]}
          >
            {children}
          </ScrollView>
        </Dialog.ScrollArea>

        {actions ? (
          <Dialog.Actions style={{ flexWrap: "wrap", gap: 8, justifyContent: "flex-end" }}>
            {actions}
          </Dialog.Actions>
        ) : null}
      </Dialog>
    </Portal>
  );
}

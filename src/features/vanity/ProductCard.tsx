import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { memo, type ComponentProps } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { IconButton, Text, useTheme } from "react-native-paper";

import { LeopardPattern } from "@/components/LeopardPattern";
import { CATEGORY_ICONS, CATEGORY_LABEL_KEYS, type Category } from "@/constants/categories";
import { useLocale } from "@/i18n/LocaleContext";
import { useAppTheme } from "@/theme/ThemeContext";
import { FONT_DISPLAY_BOLD } from "@/theme/fonts";
import {
  CARD_RADIUS,
  LEOPARD_BORDER,
  LEOPARD_PATTERN_BORDER,
  LEOPARD_PATTERN_FILL,
  THEME_GRADIENTS,
  glowShadow,
  hexToRgba,
  isPatternedTheme,
} from "@/theme/theme";

type ProductCardProps = {
  name: string;
  brand: string | null;
  category: Category;
  expiresAt: number;
  onPress?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
};

function formatDate(epochMs: number): string {
  return new Date(epochMs).toLocaleDateString("tr-TR", { day: "2-digit", month: "short", year: "numeric" });
}

/** Pil/hap biçimli küçük etiket — durum veya kategori göstermek için. */
function PillBadge({
  label,
  icon,
  backgroundColor,
  textColor,
}: {
  label: string;
  icon?: ComponentProps<typeof MaterialCommunityIcons>["name"];
  backgroundColor: string;
  textColor: string;
}) {
  return (
    <View style={[styles.pill, { backgroundColor }]}>
      {icon ? <MaterialCommunityIcons name={icon} size={13} color={textColor} /> : null}
      <Text variant="labelSmall" style={{ color: textColor, fontWeight: "600" }}>
        {label}
      </Text>
    </View>
  );
}

/**
 * Vanity ürün kartı — "Structured" ilhamlı tasarım dili: yüksek köşe
 * yuvarlaklığı, yumuşak dağınık gölge, ikon rozeti ve hap etiketler.
 * Renkleri seçili ThemeContext paletinden (useTheme) otomatik alır.
 */
export const ProductCard = memo(function ProductCard({
  name,
  brand,
  category,
  expiresAt,
  onPress,
  onEdit,
  onDelete,
}: ProductCardProps) {
  const theme = useTheme();
  const { themeId } = useAppTheme();
  const { t } = useLocale();
  const leopard = isPatternedTheme(themeId);
  // eslint-disable-next-line react-hooks/purity -- süresi dolmuş rozetini göstermek için render anındaki zaman yeterli
  const isExpired = expiresAt < Date.now();

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.card,
        glowShadow(THEME_GRADIENTS[themeId][0], 0.16),
        {
          backgroundColor: hexToRgba(theme.colors.surface, leopard ? 0.74 : 0.86),
          borderRadius: CARD_RADIUS,
          borderWidth: 1,
          borderColor: leopard ? LEOPARD_BORDER : hexToRgba(THEME_GRADIENTS[themeId][0], 0.22),
          overflow: "hidden",
        },
      ]}
    >
      {leopard ? (
        <LeopardPattern
          borderColor={LEOPARD_PATTERN_BORDER}
          fillColor={LEOPARD_PATTERN_FILL}
          opacity={0.16}
          tileSize={55}
          style={StyleSheet.absoluteFill}
        />
      ) : null}
      <LinearGradient
        colors={THEME_GRADIENTS[themeId]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.iconBadge, { borderRadius: CARD_RADIUS / 1.6 }]}
      >
        <MaterialCommunityIcons name={CATEGORY_ICONS[category]} size={24} color="#FFFFFF" />
      </LinearGradient>

      <View style={{ flex: 1, gap: 4 }}>
        <Text
          style={{ fontFamily: FONT_DISPLAY_BOLD, fontSize: 16, color: theme.colors.onSurface }}
          numberOfLines={1}
        >
          {name}
        </Text>
        {brand ? (
          <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant }} numberOfLines={1}>
            {brand}
          </Text>
        ) : null}

        <View style={styles.pillRow}>
          <PillBadge
            label={t(CATEGORY_LABEL_KEYS[category])}
            backgroundColor={theme.colors.secondaryContainer}
            textColor={theme.colors.onSecondaryContainer}
          />
          <PillBadge
            label={isExpired ? t("vanity.expired") : formatDate(expiresAt)}
            icon={isExpired ? "alert-circle-outline" : "calendar-check-outline"}
            backgroundColor={isExpired ? theme.colors.errorContainer : theme.colors.tertiaryContainer}
            textColor={isExpired ? theme.colors.onErrorContainer : theme.colors.onTertiaryContainer}
          />
        </View>
      </View>

      {onEdit || onDelete ? (
        <View style={{ flexDirection: "row" }}>
          {onEdit ? (
            <IconButton
              icon="pencil-outline"
              size={18}
              onPress={onEdit}
              iconColor={theme.colors.onSurfaceVariant}
            />
          ) : null}
          {onDelete ? (
            <IconButton icon="delete-outline" size={18} onPress={onDelete} iconColor={theme.colors.error} />
          ) : null}
        </View>
      ) : null}
    </Pressable>
  );
});

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 16,
  },
  iconBadge: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  pillRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 4,
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
});

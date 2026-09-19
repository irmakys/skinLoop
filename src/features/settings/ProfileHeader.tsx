import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { api } from "@convex/_generated/api";
import type { Id } from "@convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import type { ComponentProps } from "react";
import { useState } from "react";
import { Pressable, View } from "react-native";
import { ActivityIndicator, Button, Dialog, HelperText, Portal, Text, TextInput, useTheme } from "react-native-paper";

import { CARD_RADIUS, CARD_SHADOW } from "@/theme/theme";

const AVATAR_SIZE = 88;

function initialsFor(name: string | null, email: string | null): string {
  if (name?.trim()) {
    const parts = name.trim().split(/\s+/);
    return parts
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("");
  }
  return email?.[0]?.toUpperCase() ?? "?";
}

function StatItem({
  icon,
  value,
  label,
}: {
  icon: ComponentProps<typeof MaterialCommunityIcons>["name"];
  value: number;
  label: string;
}) {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, alignItems: "center", gap: 2 }}>
      <MaterialCommunityIcons name={icon} size={18} color={theme.colors.primary} />
      <Text variant="titleMedium" style={{ fontWeight: "700", color: theme.colors.onSurface }}>
        {value}
      </Text>
      <Text variant="labelSmall" style={{ color: theme.colors.onSurfaceVariant }}>
        {label}
      </Text>
    </View>
  );
}

export function ProfileHeader() {
  const theme = useTheme();
  const user = useQuery(api.users.getCurrentUser);
  const stats = useQuery(api.users.getProfileStats);
  const updateProfileName = useMutation(api.users.updateProfileName);
  const generateAvatarUploadUrl = useMutation(api.users.generateAvatarUploadUrl);
  const updateProfileImage = useMutation(api.users.updateProfileImage);

  const [isUploadingAvatar, setIsUploadingAvatar] = useState(false);
  const [avatarError, setAvatarError] = useState<string | null>(null);

  const [isNameDialogVisible, setIsNameDialogVisible] = useState(false);
  const [nameDraft, setNameDraft] = useState("");
  const [isSavingName, setIsSavingName] = useState(false);
  const [nameError, setNameError] = useState<string | null>(null);

  function openNameDialog() {
    setNameDraft(user?.name ?? "");
    setNameError(null);
    setIsNameDialogVisible(true);
  }

  async function handleSaveName() {
    if (!nameDraft.trim()) {
      setNameError("Kullanıcı adı boş olamaz.");
      return;
    }
    setIsSavingName(true);
    try {
      await updateProfileName({ name: nameDraft.trim() });
      setIsNameDialogVisible(false);
    } catch (err) {
      setNameError(err instanceof Error ? err.message : "Kaydedilemedi.");
    } finally {
      setIsSavingName(false);
    }
  }

  async function handlePickAvatar() {
    setAvatarError(null);
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      setAvatarError("Galeriye erişim izni verilmedi.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });
    if (result.canceled || result.assets.length === 0) {
      return;
    }

    setIsUploadingAvatar(true);
    try {
      const uploadUrl = await generateAvatarUploadUrl();
      const response = await fetch(result.assets[0].uri);
      const blob = await response.blob();
      const uploadResponse = await fetch(uploadUrl, {
        method: "POST",
        headers: { "Content-Type": blob.type || "image/jpeg" },
        body: blob,
      });
      const { storageId } = (await uploadResponse.json()) as { storageId: Id<"_storage"> };
      await updateProfileImage({ storageId });
    } catch (err) {
      setAvatarError(err instanceof Error ? err.message : "Fotoğraf yüklenemedi.");
    } finally {
      setIsUploadingAvatar(false);
    }
  }

  return (
    <View
      style={{
        backgroundColor: theme.colors.surface,
        borderRadius: CARD_RADIUS,
        padding: 20,
        alignItems: "center",
        gap: 12,
        ...CARD_SHADOW,
      }}
    >
      <Pressable onPress={handlePickAvatar} disabled={isUploadingAvatar}>
        <View
          style={{
            width: AVATAR_SIZE,
            height: AVATAR_SIZE,
            borderRadius: AVATAR_SIZE / 2,
            backgroundColor: theme.colors.primaryContainer,
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {isUploadingAvatar ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : user?.image ? (
            <Image
              source={{ uri: user.image }}
              style={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
              contentFit="cover"
            />
          ) : (
            <Text variant="headlineSmall" style={{ color: theme.colors.onPrimaryContainer, fontWeight: "700" }}>
              {initialsFor(user?.name ?? null, user?.email ?? null)}
            </Text>
          )}
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 28,
            height: 28,
            borderRadius: 14,
            backgroundColor: theme.colors.primary,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 2,
            borderColor: theme.colors.surface,
          }}
        >
          <MaterialCommunityIcons name="camera-outline" size={14} color={theme.colors.onPrimary} />
        </View>
      </Pressable>
      {avatarError ? <HelperText type="error">{avatarError}</HelperText> : null}

      <Pressable
        onPress={openNameDialog}
        style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
      >
        <Text variant="titleLarge" style={{ fontWeight: "700", color: theme.colors.onSurface }}>
          {user?.name?.trim() || "İsimsiz Kullanıcı"}
        </Text>
        <MaterialCommunityIcons name="pencil-outline" size={16} color={theme.colors.onSurfaceVariant} />
      </Pressable>
      <Text variant="bodySmall" style={{ color: theme.colors.onSurfaceVariant, marginTop: -8 }}>
        {user?.email ?? "—"}
      </Text>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: 8,
          paddingTop: 14,
          borderTopWidth: 1,
          borderTopColor: theme.colors.outlineVariant,
        }}
      >
        <StatItem icon="bottle-tonic-outline" value={stats?.totalProducts ?? 0} label="Ürün" />
        <StatItem icon="calendar-check-outline" value={stats?.totalLoops ?? 0} label="Rutin" />
        <StatItem icon="check-circle-outline" value={stats?.totalCompletions ?? 0} label="Tamamlanan" />
      </View>

      <Portal>
        <Dialog visible={isNameDialogVisible} onDismiss={() => setIsNameDialogVisible(false)}>
          <Dialog.Title>Kullanıcı Adını Düzenle</Dialog.Title>
          <Dialog.Content style={{ gap: 8 }}>
            <TextInput
              mode="outlined"
              label="Kullanıcı Adı"
              value={nameDraft}
              onChangeText={setNameDraft}
              autoFocus
            />
            {nameError ? <HelperText type="error">{nameError}</HelperText> : null}
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setIsNameDialogVisible(false)}>Vazgeç</Button>
            <Button onPress={handleSaveName} loading={isSavingName}>
              Kaydet
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

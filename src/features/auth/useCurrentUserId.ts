import { api } from "@convex/_generated/api";
import { useQuery } from "convex/react";

/**
 * Journal gibi cihaz-yerel (Convex'e hiç gitmeyen) verileri kullanıcıya
 * özel bir alt klasörde tutabilmek için mevcut kullanıcının id'sini döner
 * (bkz. src/lib/journalStorage.ts) — aynı cihazda birden fazla hesap
 * oturum açtığında Galeri'nin hesaplar arasında karışmaması için gerekli.
 */
export function useCurrentUserId(): string | null {
  const user = useQuery(api.users.getCurrentUser);
  return user?._id ?? null;
}

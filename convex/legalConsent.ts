/**
 * KVKK Aydınlatma Metni / Kullanıcı Sözleşmesi'nin geçerli sürümü. Metinler
 * değiştiğinde bu sürüm numarası da güncellenmeli; `getCurrentUser` bunu
 * kullanıcının onayladığı sürümle karşılaştırıp gerekirse yeniden onay
 * istemek için kullanılabilir (bkz. src/features/auth/LegalConsentGate.tsx).
 *
 * Sürüm bilinçli olarak yalnızca sunucuda tanımlanır — istemciden gelen bir
 * değer değildir, böylece kullanıcı hangi metne onay verdiğini değiştiremez.
 */
export const KVKK_CONSENT_VERSION = "v1.0";

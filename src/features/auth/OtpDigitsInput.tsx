import { useRef, useState } from "react";
import { View, type TextInput as RNTextInput } from "react-native";
import { TextInput } from "react-native-paper";

type OtpDigitsInputProps = {
  length?: number;
  onComplete: (code: string) => void;
  error?: boolean;
};

/**
 * 6 haneli (varsayılan) kod giriş kutuları — her rakam girildiğinde bir
 * sonraki kutuya otomatik odaklanır, backspace ile geriye gider. Kendi
 * durumunu kendi tutar; dışarıdan sıfırlamak için bu bileşene farklı bir
 * `key` vererek React'in yeniden mount etmesini sağla (ör. kod hatalıysa
 * veya "tekrar gönder" sonrası).
 */
export function OtpDigitsInput({ length = 6, onComplete, error }: OtpDigitsInputProps) {
  const [digits, setDigits] = useState<string[]>(Array<string>(length).fill(""));
  const inputRefs = useRef<(RNTextInput | null)[]>(Array<null>(length).fill(null));

  function handleChangeDigit(index: number, value: string) {
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...digits];
    next[index] = digit;
    setDigits(next);

    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    const code = next.join("");
    if (code.length === length) {
      onComplete(code);
    }
  }

  function handleKeyPress(index: number, key: string) {
    if (key === "Backspace" && digits[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  }

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 8 }}>
      {digits.map((digit, index) => (
        <TextInput
          key={index}
          ref={(el: RNTextInput | null) => {
            inputRefs.current[index] = el;
          }}
          mode="outlined"
          value={digit}
          onChangeText={(value) => handleChangeDigit(index, value)}
          onKeyPress={({ nativeEvent }) => handleKeyPress(index, nativeEvent.key)}
          keyboardType="number-pad"
          maxLength={1}
          style={{ flex: 1, textAlign: "center" }}
          contentStyle={{ textAlign: "center" }}
          error={error}
        />
      ))}
    </View>
  );
}

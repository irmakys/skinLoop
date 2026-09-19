import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { DEFAULT_THEME_ID, THEMES, type ThemeId } from "@/theme/theme";

const THEME_STORAGE_KEY = "skinloop.themeId";

type ThemeContextValue = {
  themeId: ThemeId;
  setThemeId: (themeId: ThemeId) => void;
  isLoaded: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function AppThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeIdState] = useState<ThemeId>(DEFAULT_THEME_ID);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(THEME_STORAGE_KEY)
      .then((stored) => {
        if (stored && stored in THEMES) {
          setThemeIdState(stored as ThemeId);
        }
      })
      .finally(() => setIsLoaded(true));
  }, []);

  function setThemeId(next: ThemeId) {
    setThemeIdState(next);
    AsyncStorage.setItem(THEME_STORAGE_KEY, next).catch(() => {});
  }

  const value = useMemo(() => ({ themeId, setThemeId, isLoaded }), [themeId, isLoaded]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useAppTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useAppTheme, AppThemeProvider içinde kullanılmalı.");
  }
  return {
    ...context,
    theme: THEMES[context.themeId],
  };
}

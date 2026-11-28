import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { palette } from "../theme/tokens";

const KEY = "themeMode";
const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const system = useColorScheme();
  const [mode, setModeState] = useState("system"); // "system" | "light" | "dark"

  useEffect(() => {
    AsyncStorage.getItem(KEY)
      .then((v) => {
        if (v === "light" || v === "dark" || v === "system") setModeState(v);
      })
      .catch(() => {});
  }, []);

  function setMode(m) {
    setModeState(m);
    AsyncStorage.setItem(KEY, m).catch(() => {});
  }

  const scheme = mode === "system" ? (system === "dark" ? "dark" : "light") : mode;
  const value = { theme: palette[scheme], isDark: scheme === "dark", mode, setMode };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
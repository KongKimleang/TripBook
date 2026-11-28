import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "../../context/ThemeContext";
import { spacing } from "../../theme/tokens";

export default function Screen({ children, scroll = false, safeTop = false, style }) {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const pad = { padding: spacing.md, paddingTop: safeTop ? insets.top + spacing.md : spacing.md };

  if (scroll) {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: theme.bg }}
        contentContainerStyle={[pad, { paddingBottom: spacing.xl }, style]}
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </ScrollView>
    );
  }
  return <View style={[{ flex: 1, backgroundColor: theme.bg }, pad, style]}>{children}</View>;
}
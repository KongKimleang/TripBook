import { TextInput, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { radius, spacing } from "../../theme/tokens";
import AppText from "./AppText";

export default function Input({ label, error, style, ...props }) {
  const { theme } = useTheme();
  return (
    <View style={{ marginBottom: spacing.md }}>
      {label ? <AppText variant="caption" color="muted" style={{ marginBottom: spacing.xs }}>{label}</AppText> : null}
      <TextInput
        placeholderTextColor={theme.muted}
        style={[
          {
            minHeight: 48, borderWidth: 1, borderColor: error ? theme.danger : theme.border,
            backgroundColor: theme.surface, color: theme.text, borderRadius: radius.md,
            paddingHorizontal: spacing.md, fontSize: 16,
          },
          style,
        ]}
        {...props}
      />
      {error ? <AppText variant="caption" color="danger" style={{ marginTop: spacing.xs }}>{error}</AppText> : null}
    </View>
  );
}
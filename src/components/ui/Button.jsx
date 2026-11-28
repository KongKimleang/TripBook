import { ActivityIndicator, Pressable, Text } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { radius, spacing } from "../../theme/tokens";

export default function Button({ title, onPress, variant = "primary", loading = false, disabled = false, style }) {
  const { theme } = useTheme();
  const outline = variant === "outline";
  const bg = variant === "primary" ? theme.primary : variant === "danger" ? theme.danger : "transparent";
  const fg = outline ? theme.primary : "#FFFFFF";

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      accessibilityRole="button"
      style={({ pressed }) => [
        {
          minHeight: 48, borderRadius: radius.md, alignItems: "center", justifyContent: "center",
          paddingHorizontal: spacing.md, backgroundColor: bg,
          borderWidth: outline ? 1.5 : 0, borderColor: theme.primary,
          opacity: disabled ? 0.5 : pressed ? 0.75 : 1,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={fg} />
      ) : (
        <Text style={{ color: fg, fontWeight: "700", fontSize: 16 }}>{title}</Text>
      )}
    </Pressable>
  );
}
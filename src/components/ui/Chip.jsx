import { Pressable, Text } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { radius, spacing } from "../../theme/tokens";

export default function Chip({ label, selected = false, onPress }) {
  const { theme } = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={{
        minHeight: 40, justifyContent: "center", paddingHorizontal: spacing.md,
        borderRadius: radius.pill, marginRight: spacing.sm, borderWidth: 1,
        backgroundColor: selected ? theme.primary : theme.surface,
        borderColor: selected ? theme.primary : theme.border,
      }}
    >
      <Text style={{ color: selected ? "#FFFFFF" : theme.text, fontWeight: "600" }}>{label}</Text>
    </Pressable>
  );
}
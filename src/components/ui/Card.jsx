import { Pressable, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { radius, spacing } from "../../theme/tokens";

export default function Card({ children, onPress, style }) {
  const { theme } = useTheme();
  const base = [
    {
      backgroundColor: theme.surface, borderWidth: 1, borderColor: theme.border,
      borderRadius: radius.lg, padding: spacing.md, marginBottom: spacing.sm,
    },
    style,
  ];
  if (onPress) {
    return (
      <Pressable onPress={onPress} style={({ pressed }) => [...base, { opacity: pressed ? 0.8 : 1 }]}>
        {children}
      </Pressable>
    );
  }
  return <View style={base}>{children}</View>;
}
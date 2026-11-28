import { StyleSheet, Text } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { fontSize } from "../../theme/tokens";

export default function AppText({ variant = "body", color = "text", style, ...props }) {
  const { theme } = useTheme();
  return <Text style={[styles[variant], { color: theme[color] ?? color }, style]} {...props} />;
}

const styles = StyleSheet.create({
  display: { fontSize: fontSize.display, fontWeight: "800" },
  title: { fontSize: fontSize.title, fontWeight: "700" },
  subtitle: { fontSize: fontSize.subtitle, fontWeight: "600" },
  body: { fontSize: fontSize.body },
  caption: { fontSize: fontSize.caption },
});
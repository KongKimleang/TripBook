import { View } from "react-native";
import AppText from "../components/ui/AppText";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Screen from "../components/ui/Screen";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { spacing } from "../theme/tokens";

const NEXT = { system: "light", light: "dark", dark: "system" };

export default function TempHome() {
  const { user, logout } = useAuth();
  const { mode, setMode } = useTheme();

  return (
    <Screen safeTop>
      <AppText variant="title">Hello, {user?.name}</AppText>
      <Card style={{ marginTop: spacing.md }}>
        <AppText variant="subtitle">Theme: {mode}</AppText>
        <AppText color="muted">Tap to cycle system, light, dark.</AppText>
        <View style={{ height: spacing.sm }} />
        <Button title="Change theme" variant="outline" onPress={() => setMode(NEXT[mode])} />
      </Card>
      <Button title="Log out" onPress={logout} />
    </Screen>
  );
}
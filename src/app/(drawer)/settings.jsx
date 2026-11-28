import { View } from "react-native";
import AppText from "../../components/ui/AppText";
import Card from "../../components/ui/Card";
import Chip from "../../components/ui/Chip";
import Screen from "../../components/ui/Screen";
import { useTheme } from "../../context/ThemeContext";
import { spacing } from "../../theme/tokens";

const MODES = [
  { key: "system", label: "System" },
  { key: "light", label: "Light" },
  { key: "dark", label: "Dark" },
];

export default function Settings() {
  const { mode, setMode } = useTheme();
  return (
    <Screen>
      <Card>
        <AppText variant="subtitle">Appearance</AppText>
        <AppText color="muted" style={{ marginBottom: spacing.md }}>
          System follows your phone's setting.
        </AppText>
        <View style={{ flexDirection: "row" }}>
          {MODES.map((m) => (
            <Chip key={m.key} label={m.label} selected={mode === m.key} onPress={() => setMode(m.key)} />
          ))}
        </View>
      </Card>
    </Screen>
  );
}
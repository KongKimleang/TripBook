import { View } from "react-native";
import { spacing } from "../../theme/tokens";
import AppText from "./AppText";
import Card from "./Card";
import Screen from "./Screen";

export default function Placeholder({ title, purpose, phase, children }) {
  return (
    <Screen scroll>
      <AppText variant="title">{title}</AppText>
      <Card style={{ marginTop: spacing.md }}>
        <AppText variant="caption" color="muted">WHAT THIS SCREEN IS FOR</AppText>
        <AppText style={{ marginTop: spacing.xs }}>{purpose}</AppText>
        <AppText variant="caption" color="muted" style={{ marginTop: spacing.sm }}>
          Built in {phase}
        </AppText>
      </Card>
      <View style={{ marginTop: spacing.sm }}>{children}</View>
    </Screen>
  );
}
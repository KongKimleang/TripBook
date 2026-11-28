import AppText from "../../components/ui/AppText";
import Card from "../../components/ui/Card";
import Screen from "../../components/ui/Screen";

export default function About() {
  return (
    <Screen>
      <Card>
        <AppText variant="subtitle" color="primary">TripBook</AppText>
        <AppText style={{ marginTop: 8 }}>
          A shared trip app that helps friend groups plan, follow, and remember a trip
          without one person carrying the whole load.
        </AppText>
        <AppText variant="caption" color="muted" style={{ marginTop: 8 }}>
          ICT 304 final project
        </AppText>
      </Card>
    </Screen>
  );
}

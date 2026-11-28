import { useRouter } from "expo-router";
import { View } from "react-native";
import Button from "../../../components/ui/Button";
import Placeholder from "../../../components/ui/Placeholder";

export default function Trips() {
  const router = useRouter();
  return (
    <Placeholder
      title="My Trips"
      purpose="All your trips as cards, with filters: All, Upcoming, Ongoing, Past, Cancelled. You can also create a new trip here."
      phase="Phase 4"
    >
      <Button title="Open sample trip (slides in)" onPress={() => router.push("/trip/demo")} />
      <View style={{ height: 8 }} />
      <Button title="New trip (opens as a modal)" variant="outline" onPress={() => router.push("/trip/new")} />
    </Placeholder>
  );
}
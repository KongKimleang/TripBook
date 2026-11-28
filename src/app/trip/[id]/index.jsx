import { Stack, useLocalSearchParams } from "expo-router";
import Placeholder from "../../../components/ui/Placeholder";

export default function TripDetail() {
  const { id } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen options={{ title: "Trip details" }} />
      <Placeholder
        title={`Trip ${id}`}
        purpose="The trip's cover, profile card, spending total, members, invite code, and the day-by-day plan cards."
        phase="Phase 5"
      />
    </>
  );
}
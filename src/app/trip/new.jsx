import { useRouter } from "expo-router";
import Button from "../../components/ui/Button";
import Placeholder from "../../components/ui/Placeholder";

export default function NewTrip() {
  const router = useRouter();
  return (
    <Placeholder
      title="Create a trip"
      purpose="Enter the trip name, where from and where to, dates, a note, and an optional cover photo."
      phase="Phase 4"
    >
      <Button title="Close" variant="outline" onPress={() => router.back()} />
    </Placeholder>
  );
}
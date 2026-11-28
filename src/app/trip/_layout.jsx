import { Stack } from "expo-router";
import { useTheme } from "../../context/ThemeContext";

export default function TripLayout() {
  const { theme } = useTheme();
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.surface },
        headerTintColor: theme.text,
        headerTitleStyle: { fontWeight: "700" },
        headerBackTitle: "Back",
        animation: "slide_from_right",
        contentStyle: { backgroundColor: theme.bg },
      }}
    >
      <Stack.Screen name="new" options={{ title: "New trip", presentation: "modal" }} />
    </Stack>
  );
}
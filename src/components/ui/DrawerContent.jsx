import { View, Pressable, Alert, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import AppText from "./AppText";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import { radius, spacing } from "../../theme/tokens";

export default function DrawerContent({ state, navigation, descriptors }) {
  const { user, logout } = useAuth();
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  function confirmLogout() {
    Alert.alert("Log out?", "You can log back in any time.", [
      { text: "Cancel", style: "cancel" },
      { text: "Log out", style: "destructive", onPress: logout },
    ]);
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.surface, paddingTop: insets.top }}>
      <View style={{ padding: spacing.md, borderBottomWidth: 1, borderColor: theme.border }}>
        <AppText variant="subtitle">{user?.name}</AppText>
        <AppText variant="caption" color="muted">{user?.email}</AppText>
      </View>

      <ScrollView contentContainerStyle={{ padding: spacing.sm }}>
        {state.routes.map((route, index) => {
          const focused = state.index === index;
          const { drawerLabel, title, drawerIcon } = descriptors[route.key].options;
          const label = typeof drawerLabel === "string" ? drawerLabel : title ?? route.name;
          const color = focused ? theme.primary : theme.text;

          return (
            <Pressable
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              style={{
                flexDirection: "row", alignItems: "center", minHeight: 48,
                paddingHorizontal: spacing.md, borderRadius: radius.md, marginBottom: 2,
                backgroundColor: focused ? theme.bg : "transparent",
              }}
            >
              {drawerIcon ? drawerIcon({ color, size: 22, focused }) : null}
              <AppText style={{ marginLeft: spacing.md, color, fontWeight: focused ? "700" : "500" }}>
                {label}
              </AppText>
            </Pressable>
          );
        })}
      </ScrollView>

      <Pressable
        onPress={confirmLogout}
        style={{
          flexDirection: "row", alignItems: "center", minHeight: 52, margin: spacing.sm,
          marginBottom: insets.bottom + spacing.sm, paddingHorizontal: spacing.md,
        }}
      >
        <Ionicons name="log-out-outline" size={22} color={theme.danger} />
        <AppText color="danger" style={{ marginLeft: spacing.md, fontWeight: "600" }}>Log out</AppText>
      </Pressable>
    </View>
  );
}
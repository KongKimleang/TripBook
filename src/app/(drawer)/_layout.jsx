import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import DrawerContent from "../../components/ui/DrawerContent";
import { useTheme } from "../../context/ThemeContext";

const icon = (name) => ({ color, size }) => <Ionicons name={name} size={size} color={color} />;

export default function DrawerLayout() {
  const { theme } = useTheme();
  return (
    <Drawer
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: theme.surface },
        headerTintColor: theme.text,
        headerTitleStyle: { fontWeight: "700" },
        drawerActiveTintColor: theme.primary,
        drawerInactiveTintColor: theme.text,
        drawerStyle: { backgroundColor: theme.surface },
        sceneStyle: { backgroundColor: theme.bg },
      }}
    >
      <Drawer.Screen name="(tabs)" options={{ title: "Home", drawerLabel: "Home", headerShown: false, drawerIcon: icon("home-outline") }} />
      <Drawer.Screen name="saved" options={{ title: "Saved plans", drawerIcon: icon("heart-outline") }} />
      <Drawer.Screen name="settings" options={{ title: "Settings", drawerIcon: icon("settings-outline") }} />
      <Drawer.Screen name="about" options={{ title: "About", drawerIcon: icon("information-circle-outline") }} />
    </Drawer>
  );
}
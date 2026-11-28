import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { Pressable } from "react-native";
import { useTheme } from "../../context/ThemeContext";

export default function MenuButton() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  return (
    <Pressable
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      hitSlop={12}
      accessibilityLabel="Open menu"
      style={{ marginLeft: 16 }}
    >
      <Ionicons name="menu" size={26} color={theme.text} />
    </Pressable>
  );
}
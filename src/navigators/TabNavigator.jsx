import { ProfileScreen } from "../assets/screens/ProfileScreen";
import { TodoNavigator } from "./TodoNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ROUTES } from "./routes";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor: "#000",
        tabBarLabelStyle: {
          fontSize: 10,
        },
      })}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
        name={ROUTES.HOME}
        component={TodoNavigator}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
        name={ROUTES.PROFILE}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../assets/screens/LoginScreen";
import { ROUTES } from "./routes";
const Stack = createNativeStackNavigator()

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
      name={ROUTES.LOGIN}
      component={LoginScreen}
      options={{
        headerShown: false,
      }}
      />
    </Stack.Navigator>
  )
};

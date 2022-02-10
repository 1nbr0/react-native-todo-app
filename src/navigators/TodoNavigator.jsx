import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TaskScreen } from "../assets/screens/TaskScreen";
import { TodoScreen } from "../assets/screens/TodoScreen";
import { ROUTES } from "./routes";

const Stack = createNativeStackNavigator();

export const TodoNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.TODO}
        component={TodoScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={ROUTES.TASK} component={TaskScreen} />
    </Stack.Navigator>
  );
};

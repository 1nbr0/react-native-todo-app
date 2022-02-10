import { View, Text, Button, StyleSheet } from "react-native";
import { useAuth } from "../../contexts/AuthProvider";

export const ProfileScreen = () => {
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button title="Log Out" onPress={() => logout(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

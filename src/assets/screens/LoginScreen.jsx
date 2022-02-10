import { View, TextInput, StyleSheet, Button } from "react-native";
import { useAuth } from "../../contexts/AuthProvider";
import React, { useState } from "react";
import { Title } from "../../components/Title";
import Dash from "../../icons/Dash";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, login } = useAuth();

  return (
    <View style={styles.container}>
      <Title before={"Login "} text={"or Register"} />
      <Dash fill="purple" width={200} height={200} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Register"
          onPress={() => register(email, password)}
          disabled={!email || !password}
        />
        <Button
          title="Login"
          color={"purple"}
          onPress={() => login(email, password)}
          disabled={!email || !password}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 50,
    padding: 10,
    margin: 20,
  },
  input: {
    flex: 1,
  },
  buttonContainer: {
    width: 200,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

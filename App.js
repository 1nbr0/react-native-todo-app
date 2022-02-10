import React, { useState } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  View,
  Modal,
  Text,
  Pressable,
} from "react-native";
import { Layout } from "./src/components/Layout";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./src/navigators/TabNavigator";
import { AuthProvider, useAuth } from "./src/contexts/AuthProvider";
import { AuthNavigator } from "./src/navigators/AuthNavigator";
import { TaskProvider } from "./src/contexts/TaskProvider";
import { ThemeProvider } from "./src/contexts/ThemeProvider";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Layout>
          <ImageBackground
            source={require("./src/assets/background.png")}
            style={styles.background}
            imageStyle={styles.image}
            resizeMode="cover"
          >
            <NavigationContainer theme={navTheme}>
              <Root />
            </NavigationContainer>
          </ImageBackground>
        </Layout>
      </AuthProvider>
    </ThemeProvider>
  );
}

const Root = () => {
  const { currentUser, loading, error, cleanError } = useAuth();

  if (error) {
    return (
      <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{error}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => cleanError()}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return currentUser ? (
    <TaskProvider>
      <TabNavigator />
    </TaskProvider>
  ) : (
    <AuthNavigator />
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  image: {
    opacity: 0.1,
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

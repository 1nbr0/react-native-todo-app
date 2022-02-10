import React, { useState } from "react";
import {
  TextInput,
  Text,
  StyleSheet,
  View,
  FlatList,
  Pressable,
} from "react-native";
import { Task } from "../../components/Task";
import { Title } from "../../components/Title";
import { AntDesign } from "@expo/vector-icons";
import { useTask } from "../../contexts/TaskProvider";

export const TodoScreen = () => {
  const [currentText, setCurrentText] = useState("");
  const [visibility, setVisibility] = useState(false);
  const { tasks, handleAdd, handleDelete, handleToggleComplete } = useTask();

  return (
    <>
      <View style={styles.container}>
        <Title before={"My"} text={"Todo App "} after={"☑"} />
        {visibility && (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Todo"
              value={currentText}
              onChangeText={(newText) => setCurrentText(newText)}
            />
            <Pressable
              disabled={!currentText}
              onPress={() => {
                handleAdd(currentText);
                setVisibility(false);
                setCurrentText("");
              }}
              style={styles.inputAddContainer}
            >
              <Text style={styles.inputAdd}>Add</Text>
            </Pressable>
          </View>
        )}
        <FlatList
          keyExtractor={(item) => item.id}
          data={tasks}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <Task
              task={item}
              onDelete={() => handleDelete(item.id)}
              onToogleComplete={() => handleToggleComplete(item.id)}
            />
          )}
        />
      </View>
      <Pressable style={styles.addButton} onPress={() => setVisibility(true)}>
        <AntDesign name="plus" style={styles.addButtonText} />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "5%",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 50,
    padding: 10,
  },
  list: {
    flexGrow: 1,
    paddingBottom: 15,
  },
  input: {
    flex: 1,
  },
  addButton: {
    position: "absolute",
    right: "5%",
    bottom: "5%",
    backgroundColor: "purple",
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  addButtonText: {
    color: "white",
    fontSize: 35,
    lineHeight: 50,
  },
  inputAddContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputAdd: {
    textAlign: "left",
    color: "purple",
    fontSize: 20,
  },
});

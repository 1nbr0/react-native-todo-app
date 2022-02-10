import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";

export const Task = ({ task, onDelete, onToogleComplete }) => {

  const navigation = useNavigation()

  return (
    <View style={styles.taskContainer}>
      <Pressable 
        onPress={() => navigation.navigate("Task", { task })}
        onLongPress={() => onToogleComplete(task.id)}
        style={styles.checkContainer}
      >
        <Image source={task.isCompleted ? require("../assets/checked.png") : require("../assets/unchecked.png")} style={styles.image} />
        <Text style={task.isCompleted ? styles.todoTextCompleted : styles.todoText } >{task.value}</Text>
      </Pressable>
      <Pressable onPress={() => onDelete()}>
        <Image source={require("../assets/trash.png")} style={styles.image} />
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    padding: 15,
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  todoText: {
    flex: 1,
    fontSize: 15,
    maxWidth: "80%",
    fontSize: 20,
    color: 'black',
  },
  checkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoTextCompleted: {
    flex: 1,
    fontSize: 15,
    maxWidth: "80%",
    fontSize: 20,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: 'green',
  },
  image: {
    width: 32,
    height: 32,
  }
})

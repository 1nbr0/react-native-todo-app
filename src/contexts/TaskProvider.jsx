import React, { createContext, useState, useContext, useEffect } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "./AuthProvider";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, `users/${currentUser.uid}/tasks`),
      (querrySnapshot) => {
        const myTasks = querrySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setTasks(myTasks);
      }
    );
    return () => unsubscribe();
  }, []);

  const handleAdd = async (currentText) => {
    const newTask = {
      value: currentText,
      isCompleted: false,
      createdAt: serverTimestamp(),
      updateAt: serverTimestamp(),
    };

    const collectionRef = collection(db, `users/${currentUser.uid}/tasks`);

    await addDoc(collectionRef, newTask);
  };

  const handleDelete = async (id) => {
    const docRef = doc(db, `users/${currentUser.uid}/tasks/`, id);
    await deleteDoc(docRef);
  };

  const handleToggleComplete = async (id) => {
    const docRef = doc(db, `users/${currentUser.uid}/tasks/`, id);
    const currentTask = tasks.find((task) => task.id === id);
    const updateData = {
      isCompleted: !currentTask.isCompleted,
      updateAt: serverTimestamp(),
    };
    await updateDoc(docRef, updateData);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        handleAdd,
        handleDelete,
        handleToggleComplete,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  const context = useContext(TaskContext);

  if (context === undefined) {
    throw new Error("useTask must be used within a TaskProvider");
  }

  return context;
};

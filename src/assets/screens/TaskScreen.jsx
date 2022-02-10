import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export const TaskScreen = () => {

  const route = useRoute();

  return (
      <View>
        <Text>{route.params.task.value}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
})
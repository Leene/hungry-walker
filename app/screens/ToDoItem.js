import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ToDoItem(props) {
  const { item } = props;
  return (
    <TouchableOpacity>
      <Text>{item.text}</Text>
    </TouchableOpacity>
  );
}

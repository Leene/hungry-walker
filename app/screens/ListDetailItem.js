import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

export default function ListDetailItem({ item, pressHandler }) {
  //const { item, pressHandler } = props;
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 10,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: colors.ListDetailItemColor,
    //fontWeight: "bold",
  },
});

import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import colors from "../config/colors";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export default function Header() {
  return (
    <View style={styles.navigation}>
      <Text>Navigation</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navigation: {
    borderWidth: 2,
    borderColor: "greenyellow",
  },
});

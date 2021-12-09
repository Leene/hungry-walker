import React from "react";
import { StyleSheet, View } from "react-native";
import BasicScreen from "./app/screens/BasicScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <BasicScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //paddingTop: Constants.statusBarHeight,
  },
});

import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  PickerIOSComponent,
} from "react-native";
import WelcomeScreen from "./WelcomeScreen";
import Header from "./Header";
import Navigation from "./Navigation";

import colors from "../config/colors";

export default function BasicScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.navigation}>
        <Navigation />
      </View>
      <View style={styles.main}>
        <WelcomeScreen />
      </View>

      <View style={styles.addButton}>+</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
  },

  main: {
    flex: 2,
  },

  navigation: {
    flex: 0.5,
  },

  addButton: {
    width: 100,
    height: 100,
    backgroundColor: colors.violet,
    fontSize: 30,
    fontWeight: "bold",
  },
});

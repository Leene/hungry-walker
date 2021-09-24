import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  PickerIOSComponent,
} from "react-native";
import WelcomeScreen from "./WelcomeScreen";

import colors from "../config/colors";

function BasicScreen(props) {
  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={styles.row}>
            <Image
              style={styles.headerLogo}
              source={{
                uri: "https://img.icons8.com/ios-filled/100/777777/hungry.png",
              }}
            />
            <Text style={styles.h1Title}>Hungry Walker</Text>
          </View>
        </View>
      </View>
      <View style={styles.navigation}>
        <Text>Navigation</Text>
      </View>

      <View style={styles.mainContainer}>
        <WelcomeScreen />
      </View>

      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headerContainer: {
    flex: 0.05,
    borderWidth: 2,
    borderColor: "orange",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 2,
    borderColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    justifyContent: "flex-end",
    alignItems: "center",
  },

  headerLogo: {
    width: 30,
    height: 30,
  },
  h1Title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
    borderWidth: 2,
    borderColor: "greenyellow",
    textTransform: "uppercase",
  },

  navigation: {
    flex: 0.1,

    borderWidth: 2,
    borderColor: "greenyellow",
  },

  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  logo: {
    width: 100,
    height: 100,
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    // position: "absolute",
    //top: 70,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "red",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
});
export default BasicScreen;

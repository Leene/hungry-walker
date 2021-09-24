import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  PickerIOSComponent,
} from "react-native";

import colors from "../config/colors";

function WelcomeScreen(props) {
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
            <View style={styles.h1Title}>
              <Text>Hungry Walker</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.navigation}>
        <Text>Navigation</Text>
      </View>
      <ImageBackground
        style={styles.background}
        source={{ uri: "https://picsum.photos/300/500" }}
      >
        <View style={styles.logoContainer}>
          <Text>main</Text>
          <Image
            style={styles.logo}
            source={{ uri: "https://img.icons8.com/nolan/128/ok.png" }}
          />
          <Text>Sell what you don't need</Text>
        </View>
        <Text style={styles.titleText}>Einkaufsliste</Text>

        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
      </ImageBackground>
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
    alignItems: "left",
  },

  headerLogo: {
    width: 30,
    height: 30,
  },
  h1Title: {
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
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
  },
});
export default WelcomeScreen;

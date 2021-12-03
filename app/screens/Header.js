import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import colors from "../config/colors";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <View style={styles.row}>
          <Image
            style={styles.logo}
            source={require("../assets/img/HungryWalkerLogo_1color.png")}
          />
          {/*
          <Image
            style={styles.logo}
            source={require("../assets/img/HungryWalkerLogo_2color.png")}
          />
           <Image
            style={styles.logo}
            source={require("../assets/img/HungryWalkerLogo_3color.png")}
          />
            <Image
            style={styles.logo}
            source={require("../assets/img/HungryWalkerLogo_fullcolor.png")}
          /> */}
          {/*   <Image
            style={styles.headerLogo}
            source={{
              uri: "https://img.icons8.com/ios-filled/100/aa5896/grapes.png",
            }}
          /> */}

          <Text style={styles.h1Title}>Hungry Walker</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    //backgroundColor: colors.light,
    backgroundColor: colors.headerBackground,
    width: vw(100),
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },

  headerLogo: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  logo: {
    width: 40,
    height: 40,
    margin: 5,
  },
  h1Title: {
    fontSize: 22,
    //fontWeight: "bold",
    fontWeight: "bold",
    color: colors.light,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
});

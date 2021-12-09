import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import colors from "../config/colors";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <View style={styles.row}>
          <Image
            style={styles.logo}
            source={require("../assets/img/HungryWalkerLogo_1color.png")}
          />
          <Text style={styles.h1Title}>Hungry Walker</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: vw(100),
    backgroundColor: colors.headerBackground,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 40,
    width: 40,
    margin: 5,
  },
  h1Title: {
    textTransform: "uppercase",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 2,
    color: colors.light,
  },
});

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
            style={styles.headerLogo}
            source={{
              uri: "https://img.icons8.com/ios-filled/100/ffffff/hungry.png",
            }}
          />
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
  h1Title: {
    fontSize: 22,
    //fontWeight: "bold",
    fontWeight: "bold",
    color: colors.light,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
});

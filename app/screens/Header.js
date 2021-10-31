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
              uri: "https://img.icons8.com/ios-filled/100/777777/hungry.png",
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
    borderWidth: 2,
    borderColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {},
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
    color: colors.primary,
    borderWidth: 2,
    borderColor: "greenyellow",
    textTransform: "uppercase",
  },
});

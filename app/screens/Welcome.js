import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import colors from "../config/colors";

export default function Welcome() {
  return (
    <View style={styles.welcomeContainer}>
      <Image
        style={styles.logo}
        source={{ uri: "https://img.icons8.com/nolan/128/ok.png" }}
      />
      <Text style={styles.h1Title}>Welcome</Text>
      <Text style={styles.h3TitleText}>
        Eine Einkaufsliste mit Standorterkennung
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeContainer: {
    borderWidth: 2,
    borderColor: "blue",
    height: "10%",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  h1Title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
    borderWidth: 2,
    borderColor: "greenyellow",
    textTransform: "uppercase",
  },
  h3TitleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.light,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 3,
  },
});

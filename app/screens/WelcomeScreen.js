import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import colors from "../config/colors";

export default function WelcomeScreen() {
  return (
    <View style={styles.welcomeContainer}>
      <Image
        style={styles.logo}
        source={{ uri: "https://img.icons8.com/nolan/128/ok.png" }}
      />
      <Text style={styles.h2TitleText}>Hungry Walker</Text>
      <View style={styles.h3TitleTexteContainer}>
        <Text style={styles.h3TitleText}>
          Zweite Einkaufsliste mit Standorterkennung
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
  welcomeContainer: {
    borderWidth: 2,
    borderColor: "blue",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  h2TitleText: {
    flex: 1,
    fontSize: 30,
    fontWeight: "bold",
    color: colors.light,
    paddingBottom: 50,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  h3TitleTexteContainer: {
    borderWidth: 2,
    borderColor: "violet",
    alignItems: "flex-end",
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

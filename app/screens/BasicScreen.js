import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  FlatList,
  Pressable,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import WelcomeScreen from "./WelcomeScreen";
import Welcome from "./Welcome";
import Header from "./Header";
import Navigation from "./Navigation";

import ListDetailContent from "./ListDetailContent";
import ListContent from "./ListContent";

import colors from "../config/colors";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export default function BasicScreen() {
  const [todos, setTodos] = useState([
    { text: "kaufe Oliven", key: "1" },
    { text: "Programmiere fleißig", key: "2" },
    { text: "trinke einen Tee", key: "3" },
    { text: "gddgg ", key: "4" },
  ]);

  const [inputText, setInputText] = useState("");
  const [headline, setHeadline] = useState("Meine Listen");

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    setInputText("");
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Header />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View style={styles.headline}>
            <Text style={styles.headlineText}>{headline}</Text>
            <Pressable
              style={[styles.addButton]}
              onPress={() => submitHandler(inputText)}
            >
              <Text style={styles.addButtonText}>+</Text>
            </Pressable>
          </View>
          {/* <ListDetailContent
            headline={"Lebensmittel"}
            setHeadline={setHeadline}
          /> */}
          <ListContent headline={"Alle Listen"} setHeadline={setHeadline} />
        </KeyboardAvoidingView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: vh(100),
    /* height:
      Platform.OS === "android" ? vh(100) - StatusBar.currentHeight : vh(100), */
    backgroundColor: colors.secondary,
    flexDirection: "column",
    alignItems: "center",
  },

  list: {
    backgroundColor: "white",
    width: vw(90),
    margin: 20,
    padding: 10,
  },
  headline: {
    height: 100,
    backgroundColor: colors.headlineBackground,
    width: vw(100),
    paddingLeft: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  headlineText: {
    fontSize: 35,
    fontWeight: "100",
    color: colors.light,
    textTransform: "uppercase",
  },
  main: {
    //flex: 1,
    height: "60%",
    backgroundColor: colors.mainBackground,
    width: vw(100),
    alignItems: "center",
  },

  addButton: {
    height: 80,
    width: 80,
    //marginTop: -50,
    //marginLeft: -50,
    //marginBottom: -5,
    paddingLeft: 20,
    borderTopLeftRadius: 80,
    backgroundColor: colors.addButtonColor,
    alignItems: "center",
    justifyContent: "center",
  },

  addButtonText: {
    fontSize: 50,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});

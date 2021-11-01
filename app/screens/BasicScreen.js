import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Platform,
  Text,
  StatusBar,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";
import WelcomeScreen from "./WelcomeScreen";
import Welcome from "./Welcome";
import Header from "./Header";
import Navigation from "./Navigation";
import ToDoItem from "./ToDoItem";
import AddProduct from "./AddProduct";

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
        <View style={styles.header}>
          <Header />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View style={styles.navigation}>
            <Text>navi </Text>
          </View>

          <View style={styles.main}>
            <Text>Meine Einkaufsliste </Text>
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <ToDoItem item={item} pressHandler={pressHandler} />
                )}
              />
            </View>
          </View>

          <View style={styles.bottomNav}>
            <AddProduct
              submitHandler={submitHandler}
              inputText={inputText}
              setInputText={setInputText}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height:
      Platform.OS === "android" ? vh(100) - StatusBar.currentHeight : vh(100),

    flexDirection: "column",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "orange",
  },

  list: {
    backgroundColor: "white",
    width: vw(90),
    margin: 20,
    padding: 10,
  },
  navigation: {
    height: 50,
    backgroundColor: "lightgreen",
    width: vw(100),
  },
  main: {
    flex: 5,
    backgroundColor: "yellow",
    width: vw(100),
    alignItems: "center",
  },

  bottomNav: {
    flex: 1,
    width: vw(100),
    alignItems: "center",
    justifyContent: "center",
  },
});

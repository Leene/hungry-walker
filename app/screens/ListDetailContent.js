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
  TextInput,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import WelcomeScreen from "./WelcomeScreen";
import Welcome from "./Welcome";
import Header from "./Header";
import Navigation from "./Navigation";
import ListDetailItem from "./ListDetailItem";
import AddProductForm from "./AddProductForm";

import colors from "../config/colors";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export default function ListDetailContent() {
  const [todos, setTodos] = useState([
    { text: "kaufe Oliven", key: "1" },
    { text: "Programmiere fleißig", key: "2" },
    { text: "trinke einen Tee", key: "3" },
    { text: "gddgg ", key: "4" },
  ]);

  const [inputText, setInputText] = useState("");

  const changeHandler = (val) => {
    setInputText(val);
  };

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
        <View style={styles.main}>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <ListDetailItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
        <View style={styles.bottomNav}>
          <AddProductForm
            submitHandler={submitHandler}
            inputText={inputText}
            setInputText={setInputText}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    /* height:
      Platform.OS === "android" ? vh(100) - StatusBar.currentHeight : vh(100), */

    //height: "70%",
    alignContent: "space-between",
  },

  list: {
    //flex: 1,
    backgroundColor: "white",
    width: vw(90),
    margin: 20,
    padding: 10,
    height: "100%",
  },

  main: {
    flex: 1,
    //height: "100%",
    height: vh(70),
    backgroundColor: colors.mainBackground,
    width: vw(100),
    alignItems: "center",
  },

  bottomNav: {
    flex: 1,

    /* position: "absolute",
    bottom: 0, */
    height: 40,
    width: vw(100),
    alignSelf: "flex-end",
    justifyContent: "center",
    backgroundColor: colors.mainBackground,
  },
});

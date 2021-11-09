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
import ListItem from "./ListItem";
import AddProductForm from "./AddProductForm";

import colors from "../config/colors";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export default function ListContent({ headline, setHeadline }) {
  const [todos, setTodos] = useState([
    { text: "Lebensmittel", key: "1" },
    { text: "WG", key: "2" },
    { text: "Timo", key: "3" },
    { text: "Liste 4 ", key: "4" },
  ]);

  function updateHeadline() {
    //setHeadline("Neu");
    setHeadline(headline);
    return headline;
  }
  updateHeadline();

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
                /*  <ListDetailItem item={item} pressHandler={pressHandler} /> */
                <ListItem item={item} />
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
    width: vw(90),
    margin: 10,
    padding: 10,
    height: "100%",
  },

  main: {
    //flex: 1,
    height: "70%",
    //height: vh(80),
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

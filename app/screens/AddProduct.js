import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextImport,
  Button,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export default function AddProduct({ submitHandler, inputText, setInputText }) {
  const changeHandler = (val) => {
    setInputText(val);
  };

  return (
    <View style={styles.inputContainer}>
      <Pressable onPress={() => submitHandler(inputText)}></Pressable>
      <TextInput
        style={styles.input}
        placeholder="Neuer Eintrag ..."
        onChangeText={changeHandler}
        value={inputText}
      />
      <Pressable
        style={[styles.addButton]}
        onPress={() => submitHandler(inputText)}
      >
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "space-between",
    width: vw(100),
    flexDirection: "row",
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "pink",
    width: vw(90),
    height: "100%",
  },

  addButton: {
    height: 110,
    width: 110,
    marginTop: -50,
    marginLeft: -50,
    borderTopLeftRadius: 80,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderColor: "#999",
  },

  addButtonText: {
    fontSize: 50,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});

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

import colors from "../config/colors";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export default function AddListItemForm({
  submitHandler,
  inputText,
  setInputText,
}) {
  const changeHandler = (val) => {
    setInputText(val);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Neuer Liste ..."
        onChangeText={changeHandler}
        value={inputText}
      />

      {/* //////////////////////////// */}
      <View style={styles.inputContainer}>
        <View style={styles.leftContainer}>
          <TextInput
            style={styles.input}
            placeholder="Neuer Liste ..."
            onChangeText={changeHandler}
            value={inputText}
          />
          <Text style={styles.productCounterText}>0 Einträge</Text>
        </View>

        <Pressable
          style={[styles.addButton]}
          onPress={() => submitHandler(inputText)}
        >
          <Text style={styles.addButtonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: vh(20),
    margin: 20,
    padding: 10,
    backgroundColor: colors.inputColor,
    alignContent: "flex-end",
  },
  leftContainer: {
    width: "60%",
    //flexDirection: "row",
  },
  /*  inputContainer: {
    justifyContent: "space-between",
    width: vw(100),
    flexDirection: "row",
  }, */
  productCounterText: {
    margin: 0,
    padding: 0,
    borderWidth: 2,
    textAlign: "right",
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    marginBottom: 30,
    paddingHorizontal: 8,
    paddingVertical: 6,
    //backgroundColor: "pink",
    //backgroundColor: "rgba(171, 166, 159, 0.5)",

    width: vw(70),
    height: "100%",
  },

  addButton: {
    height: 110,
    width: 110,
    marginTop: -50,
    marginLeft: -50,
    borderTopLeftRadius: 80,
    backgroundColor: colors.inputButtonColor,
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 5,
    borderColor: colors.mainBackground,
  },

  addButtonText: {
    fontSize: 50,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: colors.buttonIcon,
  },
});

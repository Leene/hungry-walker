import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextImport,
  Button,
  View,
  TextInput,
} from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export default function AddProduct2({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Neuer Eintrag ..."
        onChangeText={changeHandler}
      />
      {/*       <Button onPress={() => console.log(text)} title="add Todo" color="" />
       */}
      <Button onPress={() => submitHandler(text)} title="add Todo" />
      {/*  <View style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "pink",
    width: "100%",
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: "coral",
    alignItems: "center",
    width: "80%",
  },
});

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextImport,
  Button,
  View,
  TextInput,
  Pressable,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export default function AddProduct({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <KeyboardAwareScrollView behavior="paddingd">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Neuer Eintrag ..."
          onChangeText={changeHandler}
        />
        <Pressable style={styles.addButton} onPress={() => submitHandler(text)}>
          <Text style={styles.addButtonText}>+</Text>
        </Pressable>
      </View>
    </KeyboardAwareScrollView>
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

  addButton: {
    height: 90,
    width: 90,

    borderTopLeftRadius: 80,
    backgroundColor: "pink",
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

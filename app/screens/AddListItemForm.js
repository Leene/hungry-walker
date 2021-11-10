import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextImport,
  Button,
  View,
  Image,
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
    <View>
      <View>
        <Text style={styles.formHeader}>Neu</Text>
        <View style={styles.container}>
          {/*       <View style={styles.inputContainer}>
           */}
          <View style={styles.imgDraftDeleteContainer}>
            <Image
              style={styles.imgDraftDelete}
              source={{
                //uri: "https://img.icons8.com/material-rounded/96/332a1e/delete-forever.png",
                uri: "https://img.icons8.com/material-rounded/96/ffffff/delete-forever.png",
              }}
            />
          </View>
          <View style={styles.containerDraftText}>
            <TextInput
              style={styles.itemDraftHeadline}
              placeholder="Neue Liste..."
              onChangeText={changeHandler}
              value={inputText}
            />
            <Text style={styles.productDraftCounter}>0 Einträge</Text>
          </View>
          <View style={styles.imgDraftContainer}>
            <Image
              style={styles.imgDraft}
              source={{
                uri: "https://img.icons8.com/ios/100/ffffff/image-gallery.png",
              }}
            />
            <Text>Bild wählen ...</Text>
          </View>
        </View>
        <Button
          style={styles.AddListSubmitBtn}
          color={colors.addItemDraftColor}
          title="Bestätigen"
          onPress={() => submitHandler(inputText)}
        ></Button>
        {/* <Pressable
        style={[styles.addButton]}
        onPress={() => submitHandler(inputText)}
      >
        <Text style={styles.addButtonText}>+</Text>
      </Pressable> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: vh(25),
    margin: 0,
    padding: 10,

    //backgroundColor: colors.inputColor,

    backgroundColor: "grey",
    //alignContent: "flex-end",
    flexDirection: "row",
  },

  formHeader: {
    backgroundColor: colors.addItemDraftColor,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    padding: 4,
    height: "15%",
    textAlign: "center",
    fontWeight: "600",
    color: "white",
    fontSize: 15,
  },
  imgDraftDeleteContainer: {
    height: 48,
    width: 48,
    padding: 8,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    backgroundColor: "rgba(51, 42, 30, 0.5)",
    borderBottomRightRadius: 40,
    marginTop: -10,
    marginLeft: -10,
    opacity: 0.3,
  },
  imgDraftContainer: {
    height: "75%",
    width: "25%",
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.light,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  imgDraft: {
    height: 50,
    width: 50,
    opacity: 0.3,
  },
  imgDraftDelete: {
    height: 25,
    width: 25,
  },
  itemDraftHeadline: {
    fontSize: 40,
    fontWeight: "100",
    //paddingTop: 50,
    paddingBottom: 10,
    marginTop: 60,

    color: colors.light,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,

    //fontWeight: "bold",
  },

  containerDraftText: {
    flex: 1,
    height: vh(20),
    marginTop: 5,
    paddingLeft: 0,
    marginLeft: -25,
  },

  productDraftCounter: {
    fontSize: 18,
    fontWeight: "100",
    color: colors.light,
    marginTop: 5,
    marginLeft: 10,
    paddingLeft: 5,
    textAlign: "right",
    opacity: 0.3,
  },

  input: {
    // borderBottomWidth: 1,
    //borderBottomColor: colors.light,
    // marginBottom: 30,
    // paddingHorizontal: 8,
    // paddingVertical: 6,
    //backgroundColor: "pink",
    //backgroundColor: "rgba(171, 166, 159, 0.5)",
    width: vw(70),
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
  AddListSubmitBtn: {},
});

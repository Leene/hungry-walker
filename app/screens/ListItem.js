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
  TouchableOpacity,
} from "react-native";
import WelcomeScreen from "./WelcomeScreen";
import Welcome from "./Welcome";
import Header from "./Header";
import Navigation from "./Navigation";
import ListDetailItem from "./ListDetailItem";
import AddProductForm from "./AddProductForm";

import colors from "../config/colors";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export default function ListItem({ item, pressHandler }) {
  //export default function ListItem({ item }) {
  const productAmount = 11;

  //const { item, pressHandler } = props;
  return (
    <View>
      {/* <TouchableOpacity> */}
      <View style={styles.container}>
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
          <View style={styles.imgDeleteContainer}>
            <Image
              style={styles.imgDelete}
              source={{
                //uri: "https://img.icons8.com/material-rounded/96/332a1e/delete-forever.png",
                uri: "https://img.icons8.com/material-rounded/96/ffffff/delete-forever.png",
              }}
            />
          </View>
        </TouchableOpacity>
        {/*   <Text style={styles.item}>{item.text}</Text> */}
        <View style={styles.containerText}>
          <Text style={styles.itemHeadline}>{item.text}</Text>
          <Text style={styles.productCounter}>
            {productAmount} Eintrag/-träge
          </Text>
        </View>

        <Image
          style={styles.img}
          source={{
            uri: "https://img.icons8.com/ios-filled/100/ffffff/hungry.png",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: vh(30),

    marginTop: 5,
    backgroundColor: colors.listItemColor,
    flexDirection: "row",
  },
  containerText: {
    flex: 1,
    height: vh(20),
    marginTop: 5,
    paddingLeft: 0,
    marginLeft: -25,
  },
  productCounter: {
    fontSize: 18,
    fontWeight: "100",
    color: colors.light,
    marginTop: 5,
    marginLeft: 10,
    paddingLeft: 5,
    textAlign: "right",
  },
  img: {
    height: 120,
    width: 120,
    opacity: 0.6,
  },
  imgDeleteContainer: {
    height: 48,
    width: 48,
    padding: 8,
    // backgroundColor: "rgba(255, 255, 255, 0.4)",
    backgroundColor: "rgba(51, 42, 30, 0.5)",
    borderBottomRightRadius: 40,
  },
  imgDelete: {
    height: 25,
    width: 25,
  },
  itemHeadline: {
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
});

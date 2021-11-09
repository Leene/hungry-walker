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

//export default function ListItem({ item, pressHandler }) {
export default function ListItem({ item }) {
  const productAmount = 11;

  //const { item, pressHandler } = props;
  return (
    //<TouchableOpacity onPress={() => pressHandler(item.key)}>
    <View>
      {/* <TouchableOpacity> */}
      <View style={styles.container}>
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
      {/*  </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: vh(20),
    marginTop: 5,
    backgroundColor: colors.listItemColor,
    flexDirection: "row",
  },
  containerText: {
    flex: 1,
    height: vh(20),
    marginTop: 5,
    paddingLeft: 20,
  },
  productCounter: {
    fontSize: 18,
    fontWeight: "light",
    color: colors.light,
    marginTop: 5,
    marginLeft: 10,
    paddingLeft: 5,

    textAlign: "right",
  },
  img: {
    height: 150,
    width: 150,
  },
  itemHeadline: {
    fontSize: 40,
    fontWeight: "100",
    padding: 16,
    marginTop: 10,

    color: colors.light,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,

    //fontWeight: "bold",
  },
});

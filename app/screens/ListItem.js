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
import openDatabase from "./openDatabase";

import colors from "../config/colors";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
const db = openDatabase();

export default function ListItem({
  item,
  deleteItemHandler,
  modalOpen2,
  setModalOpen2,
  setListName,
  listName,
  listItemAmount,
  setListItemAmount,
}) {
  //export default function ListItem({ item }) {
  ///const listItemAmount = 11;

  //const { item, deleteItemHandler } = props;
  const updateDetailListHeadline = () => {
    setModalOpen2(true);
    setListName(item.text);
  };
  /// anzahl der DB einträge setListItemAmount
  //SELECT COUNT(*) FROM items WHERE Listename;
  /////////////////////////////////////////////////////////////////////////
  /*   const amountOfProducts = () => {
    // is text empty?

    db.transaction((tx) => {
      tx.executeSql(
        //"select COUNT(*) from items",
        "select COUNT(*) from items WHERE liste='Timo'",
        [],
        (_, { rows }) => console.log(JSON.stringify(rows))
      );
    }, null);
    return console.log("Amount of products der liste" + "Listennamwe fehlt:");
  };

  //////////////////////
  amountOfProducts(); */

  // return console.log("listName:" + listName);

  return (
    <View>
      {/* <TouchableOpacity> */}
      <TouchableOpacity onPress={() => updateDetailListHeadline()}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => deleteItemHandler(item.key)}>
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
              {listItemAmount} Eintrag/-träge
            </Text>
          </View>

          <Image
            style={styles.img}
            source={{
              uri: "https://img.icons8.com/ios-filled/100/ffffff/hungry.png",
            }}
          />
        </View>
      </TouchableOpacity>
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

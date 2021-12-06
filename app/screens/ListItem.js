import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import openDatabase from "./openDatabase";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import colors from "../config/colors";

const db = openDatabase();

export default function ListItem({
  item,
  deleteItemHandler,
  setModalOpen2,
  setListName,
  listItemAmount,
}) {
  const updateDetailListHeadline = () => {
    setModalOpen2(true);
    setListName(item.text);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => updateDetailListHeadline()}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => deleteItemHandler(item.key)}>
            <View style={styles.imgDeleteContainer}>
              <Image
                style={styles.imgDelete}
                source={{
                  uri: "https://img.icons8.com/material-rounded/96/ffffff/delete-forever.png",
                }}
              />
            </View>
          </TouchableOpacity>
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
    flexDirection: "row",
    height: vh(30),
    marginTop: 5,
    backgroundColor: colors.listItemColor,
  },
  imgDeleteContainer: {
    height: 48,
    width: 48,
    padding: 8,
    backgroundColor: "rgba(51, 42, 30, 0.5)",
    borderBottomRightRadius: 40,
  },
  imgDelete: {
    height: 25,
    width: 25,
  },
  containerText: {
    flex: 1,
    height: vh(20),
    paddingLeft: 0,
    marginTop: 5,
    marginLeft: -25,
  },
  itemHeadline: {
    fontSize: 40,
    fontWeight: "100",
    color: colors.light,
    paddingBottom: 10,
    marginTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
  productCounter: {
    textAlign: "right",
    fontSize: 18,
    fontWeight: "100",
    color: colors.light,
    paddingLeft: 5,
    marginTop: 5,
    marginLeft: 10,
  },
  img: {
    height: 120,
    width: 120,
    opacity: 0.6,
  },
});

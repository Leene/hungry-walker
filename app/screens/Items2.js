import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import colors from "../config/colors";

import openDatabase from "./openDatabase";
import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";

export default function Items2({ done: doneHeading, onPressItem, db, shop }) {
  const [items, setItems] = React.useState(null);

  /* console.log("------1------");
  console.log("Items2: ");
  console.log(items); */

  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        `select * from items where done = ?;`,
        [doneHeading ? 1 : 0],
        (_, { rows: { _array } }) => setItems(_array)
      );
    });
  }, []);

  const heading = doneHeading ? "Gekauft" : "Einkaufen";

  if (items === null || items.length === 0) {
    return null;
  }

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionHeading}>{heading}</Text>

      {items.map(({ id, done, value, shopbrand }) => (
        <View
          style={[
            styles.listDetailItem,
            {
              backgroundColor: done ? "#aaa" : colors.ListDetailItemColor,
            },
          ]}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              key={id}
              onPress={() => onPressItem && onPressItem(id)}
              style={{
                width: 30,
                height: 30,
                backgroundColor: done ? "#1c9963" : "orange",
                borderColor: "#fff",
                borderWidth: 3,
                borderRadius: 20,
                padding: 8,
              }}
            ></TouchableOpacity>
            <Text
              style={{
                paddingLeft: 5,
                paddingRight: 5,
                marginLeft: 5,
                marginRight: 5,
                color: done ? "#fff" : "#000",
                textAlign: "left",
              }}
            >
              {value}
            </Text>
          </View>
          <Text
            style={[
              styles.shopText,
              { color: done ? "#555" : "#999", textAlign: "right" },
            ]}
          >
            {shopbrand}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  shopText: {},
  listDetailItem: {
    padding: 16,
    //paddingRight: 0,
    marginTop: 10,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //width: "100%",

    borderWidth: 1,
  },

  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  flexRow: {
    flexDirection: "row",
  },
  input: {
    borderColor: "#4630eb",
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    height: 48,
    margin: 16,
    padding: 8,
  },
  listArea: {
    backgroundColor: "#f0f0f0",
    flex: 1,
    paddingTop: 16,
  },
  sectionContainer: {
    marginBottom: 16,
    marginHorizontal: 16,
  },
  sectionHeading: {
    fontSize: 18,
    marginBottom: 8,
  },
});

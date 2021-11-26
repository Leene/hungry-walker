import React, { useState, Component } from "react";
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
import Header from "./Header";

import ListDetailContent from "./ListDetailContent";
import ListContent from "./ListContent";

import colors from "../config/colors";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";

import openDatabase from "./openDatabase";

import Items2 from "./Items2";
import DropDownPicker from "react-native-dropdown-picker";

import { Picker } from "@react-native-picker/picker";
// Datenbank erzeugen
// Relationen erzeugen
// Datensätze anlegen
// Datensätze ausgeben

///// openDatabasefuntion placeholder

const db = openDatabase();

///// Items placeholder

export default function ListDetailContent2() {
  const [text, setText] = React.useState(null);
  const [whichShop, setWhichShop] = React.useState(null);
  const [forceUpdate, forceUpdateId] = useForceUpdate();
  const [headline, setHeadline] = useState("Meine Listen");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("java");
  const [formData, setFormData] = useState({
    done: 0,
    title: "leer",
    shop: "Penny?",
  });
  const [selectedShop, setSelectedShop] = useState();

  //console.log("formadata.shop: " + formData.shop);

  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        //"create table if not exists items (id INTEGER PRIMARY KEY NOT NULL, done INT, value TEXT);"
        "create table if not exists items (id INTEGER PRIMARY KEY NOT NULL, done INT, value TEXT, shopbrand TEXT);"
      );
    });
  }, []);

  /*   const add = (text) => {
    // is text empty?
    if (text === null || text === "") {
      return false;
    }

    db.transaction(
      (tx) => {
        tx.executeSql("insert into items (done, value) values (0, ?)", [text]);
        tx.executeSql("select * from items", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      },
      null,
      forceUpdate
    );
  }; */

  const add = (text, shop) => {
    console.log("ADDText:" + text);
    console.log("ADDshop:" + shop);
    // is text empty?
    if (text === null || text === "") {
      return false;
    }
    db.transaction(
      (tx) => {
        tx.executeSql(
          "insert into items (done, value, shopbrand) values (0, ?, ?)",
          [text, shop]
          //"insert into items (done, value) values (0, 'Kafka'), (0, 'Franz')",
        );
        tx.executeSql("select * from items", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      },
      null,
      forceUpdate
    );
  };

  const updateView = (text, shop) => {
    console.log("ADDText:" + text);
    console.log("ADDshop:" + shop);
    // is text empty?
    db.transaction(
      (tx) => {
        //tx.executeSql("delete * from items");
        //tx.executeSql(`delete from items where id = 4;`);
        tx.executeSql("select * from items", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      },
      null,
      forceUpdate
    );
  };

  const deletTable = (text, shop) => {
    console.log("ADDText:" + text);
    console.log("ADDshop:" + shop);
    // is text empty?
    db.transaction(
      (tx) => {
        tx.executeSql(`drop table items`);
      },
      null,
      forceUpdate
    );
  };

  //let formData = [{ done: 0, value: "leer", shop: "Penny" }];

  //formData.push({ done: 1, value: "Kartoffeln", shop: "Aldi" });
  //console.log(formData[0]);
  // console.log(formData[1]);
  /* console.log("--------------");
  console.log("formData: ");
  console.log(formData);
  console.log("formData.shop: " + formData.shop);
  console.log("formData.done: " + formData.done);
  console.log("formData.title: " + formData.title); */

  //formData.pop();

  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <View style={styles.headline}>
        <Text style={styles.headlineText}>{headline} LDContent2</Text>
        {/*  <Pressable
          style={[styles.addButton]}
          onPress={() => setModalOpen(true)}
        >
          <Text style={styles.addButtonText}>+</Text>
        </Pressable> */}

        <Pressable
          style={{ backgroundColor: "#44bb54" }}
          onPress={() => {
            updateView(formData.title, formData.shop);
          }}
        >
          <Text>Aktualisieren</Text>
        </Pressable>
        <Pressable
          style={{ backgroundColor: "#bb44bb" }}
          onPress={() => {
            deletTable(formData.title, formData.shop);
          }}
        >
          <Text>Tabelle löschen</Text>
        </Pressable>
      </View>

      {Platform.OS === "web" ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.heading}>
            These App uses Expo SQLite, which is not supported on the Web.
          </Text>
        </View>
      ) : (
        <>
          <ScrollView style={styles.listArea}>
            <Items2
              shop={formData.shop}
              db={openDatabase()}
              key={`forceupdate-todo-${forceUpdateId}`}
              done={false}
              onPressItem={(id) =>
                db.transaction(
                  (tx) => {
                    tx.executeSql(`update items set done = 1 where id = ?;`, [
                      id,
                    ]);
                  },
                  null,
                  forceUpdate
                )
              }
            />
            <Items2
              shop={formData.shop}
              db={openDatabase()}
              done
              key={`forceupdate-done-${forceUpdateId}`}
              onPressItem={(id) =>
                db.transaction(
                  (tx) => {
                    tx.executeSql(`delete from items where id = 37;`);
                    tx.executeSql(`delete from items where id = ?;`, [id]);
                    //tx.executeSql(`delete * from items where done = 1`);
                  },
                  null,
                  forceUpdate
                )
              }
            />
            <View style={{ height: 60 }}></View>
          </ScrollView>

          <View style={styles.flexRow}>
            <TextInput
              /*               onChangeText={(text) => setText(text)}*/
              onChangeText={(text) =>
                setFormData({
                  done: formData.done,
                  title: text,
                  shop: formData.shop,
                })
              }
              /*  onSubmitEditing={() => {
                add(text);
                setText(null);
              }} */
              placeholder="Neuer Eintragee ..."
              style={styles.input}
              value={text}
            />
            <Picker
              style={styles.picker}
              selectedValue={formData.shop}
              //selectedValue={selectedShop}
              /*   onValueChange={
                ((itemValue, itemIndex) => setSelectedShop(itemValue),
                setFormData({
                  done: formData.done,
                  title: formData.title,
                  shop: selectedShop,
                }))
              } */
              onValueChange={(itemValue, itemIndex) =>
                setFormData({
                  done: formData.done,
                  title: formData.title,
                  shop: itemValue,
                })
              }
            >
              <Picker.Item label="--Alle--" value="--Alle--" />
              <Picker.Item label="Aldi" value="Aldi" />
              <Picker.Item label="Budni" value="Budni" />
              <Picker.Item label="DM" value="DM" />
              <Picker.Item label="Edeka" value="Edeka" />
              <Picker.Item label="Lidl" value="Lidl" />
              <Picker.Item label="Penny" value="Penny" />
              <Picker.Item label="Real" value="Real" />
              <Picker.Item label="Rossmann" value="Rossmann" />
              <Picker.Item label="Rewe" value="Rewe" />
            </Picker>
            {/*    <TextInput
              onChangeText={(text) => setWhichShop(text)}
              onSubmitEditing={() => {
                add(whichShop);
                setWhichShop(null);
              }}
              placeholder="Shop? ..."
              style={styles.inputShop}
              value={whichShop}
            /> */}

            <Pressable
              style={[styles.addButton]}
              /*               onPress={() => submitHandler(inputText)*/
              onPress={() => {
                add(formData.title, formData.shop);
                //setFormData({ done: 0, title: "leer", shop: "leer" });
              }}
            >
              <Text style={styles.addButtonText}>+</Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
}

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return [() => setValue(value + 1), value];
}

const styles = StyleSheet.create({
  headline: {
    height: 100,
    backgroundColor: colors.headlineBackground,
    width: vw(100),
    paddingLeft: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  headlineText: {
    fontSize: 35,
    fontWeight: "100",
    color: colors.light,
    textTransform: "uppercase",
  },

  addButton: {
    position: "absolute",
    right: 0,
    bottom: 70,
    height: 80,
    width: 80,
    paddingLeft: 20,
    borderTopLeftRadius: 80,
    backgroundColor: colors.addButtonColor,
    alignItems: "center",
    justifyContent: "center",
  },

  addButtonText: {
    fontSize: 50,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
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
  picker: {
    width: vw(30),
  },
  input: {
    /*  borderColor: "#4630eb",
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    height: 48,
    margin: 16,
    padding: 8, */
    marginBottom: 30,
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: colors.inputColor,
    width: vw(70),
    height: "100%",
  },
  inputShop: {
    width: vw(30),
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

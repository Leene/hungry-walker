import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  Platform,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { Picker } from "@react-native-picker/picker";
import openDatabase from "./openDatabase";
import colors from "../config/colors";
import ProductItem from "./ProductItem";

const db = openDatabase();

export default function ListDetailContent2({
  setModalOpen2,
  listName,
  setListName,
  listItemAmount,
  setListItemAmount,
}) {
  const [text, setText] = React.useState(null);
  const [forceUpdate, forceUpdateId] = useForceUpdate();
  const [formData, setFormData] = useState({
    done: 0,
    title: "Produktname vergessen",
    shop: "Shop vergessen",
  });

  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists items (id INTEGER PRIMARY KEY NOT NULL, done INT, value TEXT, shopbrand TEXT, liste TEXT);"
      );
    });
  }, []);

  const add = (text, shop) => {
    console.log("ADDText:" + text);
    console.log("ADDshop:" + shop);

    if (text === null || text === "") {
      return false;
    }
    db.transaction(
      (tx) => {
        tx.executeSql(
          "insert into items (done, value, shopbrand, liste) values (0, ?, ?, ?)",
          [text, shop, listName]
        );
        tx.executeSql("select * from items", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      },
      null,
      forceUpdate
    );
  };

  /* >>>>>>> database admin buttons handler >>>>>>>>
   const updateView = (text, shop) => {
    db.transaction(
      (tx) => {
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

    db.transaction(
      (tx) => {
        tx.executeSql(`drop table items`);
      },
      null,
      forceUpdate
    );
  }; <<<<<<<<<<<<<< */

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.listDetailModalCloseButton}
        onPress={() => setModalOpen2(false)}
      >
        <Image
          style={styles.listDetailModalCloseButtonIcon}
          source={{
            uri: "https://img.icons8.com/android/96/ffffff/back.png",
          }}
        />
        <Text style={styles.listDetailModalCloseButtonText}>Zurück</Text>
      </TouchableOpacity>

      {Platform.OS === "web" ? (
        <View style={styles.wrongPlatformContainer}>
          <Text style={styles.wrongPlatformText}>
            These app uses Expo SQLite, which is not supported on the web.
            Please open it on a virtual/real smartphone.
          </Text>
        </View>
      ) : (
        <>
          <ScrollView style={styles.container}>
            <View style={styles.listAreaHeadline}>
              <Text style={styles.listAreaHeadlineText}>{listName}</Text>
              {/* >>>>>>> database admin buttons >>>>>>>>
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
              <<<<<<<<<<<<<< */}
            </View>
            <ProductItem
              listItemAmount={listItemAmount}
              setListItemAmount={setListItemAmount}
              listName={listName}
              setListName={setListName}
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
            <ProductItem
              listName={listName}
              db={openDatabase()}
              done
              key={`forceupdate-done-${forceUpdateId}`}
              onPressItem={(id) =>
                db.transaction(
                  (tx) => {
                    // tx.executeSql(`delete from items where id = 37;`);
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
              style={styles.input}
              placeholder="Neuer Eintrag ..."
              value={text}
              onChangeText={(text) =>
                setFormData({
                  done: formData.done,
                  title: text,
                  shop: formData.shop,
                })
              }
            />
            <Picker
              style={styles.picker}
              selectedValue={formData.shop}
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
            <Pressable
              style={styles.addButton}
              onPress={() => {
                add(formData.title, formData.shop);
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listDetailModalCloseButton: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    backgroundColor: colors.headerBackground,
  },
  listDetailModalCloseButtonIcon: {
    //upto 96px
    height: 25,
    width: 25,
    alignSelf: "center",
  },
  listDetailModalCloseButtonText: {
    alignSelf: "center",
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "300",
    color: colors.light,
    paddingLeft: 8,
  },
  wrongPlatformContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: vh(80),
    width: vh(80),
  },
  wrongPlatformText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    margin: 100,
  },
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  listAreaHeadline: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 100,
    width: vw(100),
    paddingLeft: 30,
    backgroundColor: colors.headlineBackground,
  },
  listAreaHeadlineText: {
    textTransform: "uppercase",
    fontSize: 35,
    fontWeight: "100",
    color: colors.light,
  },
  flexRow: {
    flexDirection: "row",
  },
  input: {
    height: "100%",
    width: vw(70),
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginBottom: 30,
    backgroundColor: colors.inputColor,
  },
  picker: {
    width: vw(30),
  },

  addButton: {
    position: "absolute",
    bottom: 70,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: 80,
    paddingLeft: 20,
    backgroundColor: colors.addButtonColor,
    borderTopLeftRadius: 80,
  },
  addButtonText: {
    fontSize: 50,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});

import React, { useState } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";
import BasicScreen2 from "./app/screens/BasicScreen2";
import BasicScreen from "./app/screens/BasicScreen";
import ListDetailContent2 from "./app/screens/ListDetailContent2";

import DropDownPicker from "react-native-dropdown-picker";

/* function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase("db.db");
  return db;
}

const db = openDatabase(); */

/*f unction Items({ done: doneHeading, onPressItem }) {
  const [items, setItems] = React.useState(null);

  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        `select * from items where done = ?;`,
        [doneHeading ? 1 : 0],
        (_, { rows: { _array } }) => setItems(_array)
      );
    });
  }, []);

  const heading = doneHeading ? "Completed" : "Todo";

  if (items === null || items.length === 0) {
    return null;
  }

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionHeading}>{heading}</Text>
      {items.map(({ id, done, value }) => (
        <TouchableOpacity
          key={id}
          onPress={() => onPressItem && onPressItem(id)}
          style={{
            backgroundColor: done ? "#1c9963" : "#fff",
            borderColor: "#000",
            borderWidth: 1,
            padding: 8,
          }}
        >
          <Text style={{ color: done ? "#fff" : "#000" }}>{value}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
} */

export default function App() {
  /* const [text, setText] = React.useState(null);
  const [forceUpdate, forceUpdateId] = useForceUpdate(); */

  /*  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists items (id integer primary key not null, done int, value text);"
      );
    });
  }, []);
 */
  /* const add = (text) => {
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

  return (
    <View style={styles.container}>
      {/*<Text style={styles.heading}>SQLite Example</Text>

        {Platform.OS === "web" ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.heading}>
            Expo SQlite is not supported on web!
          </Text>
        </View>
      ) : (
        <>
          <View style={styles.flexRow}>
            <TextInput
              onChangeText={(text) => setText(text)}
              onSubmitEditing={() => {
                add(text);
                setText(null);
              }}
              placeholder="what do you need to do?"
              style={styles.input}
              value={text}
            />
          </View>
          <ScrollView style={styles.listArea}>
            <Items
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
            <Items
              done
              key={`forceupdate-done-${forceUpdateId}`}
              onPressItem={(id) =>
                db.transaction(
                  (tx) => {
                    tx.executeSql(`delete from items where id = ?;`, [id]);
                  },
                  null,
                  forceUpdate
                )
              }
            />
          </ScrollView>
        </>
      )} */}

      {/* <BasicScreen2 /> */}
      <ListDetailContent2 />
    </View>
  );
}

/* function useForceUpdate() {
  const [value, setValue] = useState(0);
  return [() => setValue(value + 1), value];
} */

const styles = StyleSheet.create({
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

/* import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
  AppRegistry,
  Alert,
} from "react-native";
import BasicScreen from "./app/screens/BasicScreen";
/* import ListTile from "./app/screens/ListTile";
 */
/*import SQLite from "react-native-sqlite-storage";

const db = SQLite.openDatabase(
  {
    name: "HungryWalkerDB",
    location: "default",
  },
  () => {},
  (error) => {
    console.log(error);
  }
);

export default function App() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shop, setShop] = useState("");
  const [unit, setUnit] = useState("");

  useEffect(() => {
    createTable();
    //getData();
  }, []);
  ///////////////////7777
  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXIST" +
          "Products" +
          "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Quantity INTEGER, Unit TEXT, Shop TEXT);"
      );
    });
  };
  ///////////////////

  const getData = () => {
    try {
      db.transaction((tx) => {
        //tx.executeSql("SELECT Name, Quantity, Unit, Shop FROM Products WHERE ID=1");
        tx.executeSql("SELECT Name, Quantity, Unit, Shop FROM Products "),
          [],
          (tx, results) => {
            var len = results.rows.length;
            if (len > 0) {
              var productName = results.rows.item(0).Name;
              var productQuantity = results.rows.item(0).Quantity;
              var productUnit = results.rows.item(0).Unit;
              var productShop = results.rows.item(0).Shop;
              setName(productName);
              setName(productQuantity);
              setName(productUnit);
              setName(productShop);
            }
          };
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setData = async () => {
    if (name.length == 0 || AppRegistry.length == 0) {
      Alert.alert("Warning!", "Please write your data.");
    } else {
      try {
        // var user = {
        //   Name: name,
        //   Age: age,
        // };
        // await AsyncStorage.setItem("ProductData", JSON.stringify(products));
        //navigation.navigate("Home");
        await db.transaction(async (tx) => {
          /*    await tx.executeSql(
            "INSERT INTO Products (Name, Quantity, Unit, Shop) VALUES ('" +
              Name +
              "', " +
              Quantity +
              ", '" +
              Unit +
              "', '" +
              Shop +
              "')"
          ); */
/*
          await tx.executeSql(
            "INSERT INTO Products (Name, Quantity, Unit, Shop) VALUES (?,?,?,?)",
            [Name, Quantity, Unit, Shop]
          );
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <BasicScreen />

      {/*  <ListTile /> }*/
/*   </SafeAreaView>
  );
}
 */

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
import Header from "./Header";

import ListDetailContent from "./ListDetailContent";
import ListContent from "./ListContent";

import colors from "../config/colors";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";

import openDatabase from "./openDatabase";

import Items2 from "./Items2";

// Datenbank erzeugen
// Relationen erzeugen
// Datensätze anlegen
// Datensätze ausgeben

///// openDatabasefuntion placeholder

const db = openDatabase();

///// Items placeholder

export default function App() {
  const [text, setText] = React.useState(null);
  const [forceUpdate, forceUpdateId] = useForceUpdate();

  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists items (id integer primary key not null, done int, value text);"
      );
    });
  }, []);

  const add = (text) => {
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
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>SQLite Example Basic2</Text>

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
            <Items2
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
              db={openDatabase()}
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

//////////////////

/* export default function BasicScreen2() {
  const [todos, setTodos] = useState([
    { text: "kaufe Oliven", key: "1" },
    { text: "Programmiere fleißig", key: "2" },
    { text: "trinke einen Tee", key: "3" },
    { text: "gddgg ", key: "4" },
  ]);

  const [inputText, setInputText] = useState("");
  const [headline, setHeadline] = useState("Meine Listen");
  const [modalOpen, setModalOpen] = useState(false);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    setInputText("");
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Header />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View style={styles.headline}>
            <Text style={styles.headlineText}>? {headline} </Text>
            <Pressable
              style={[styles.addButton]}
              onPress={() => setModalOpen(true)}
            >
              <Text style={styles.addButtonText}>+</Text>
            </Pressable>
          </View>
          {/* <ListDetailContent
            headline={"Lebensmittel"}
            setHeadline={setHeadline}
          /> 
          <ListContent
            headline={"Alle Listen"}
            setHeadline={setHeadline}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
        </KeyboardAvoidingView>
      </View>
    </>
  );
}
*/
/* const styles = StyleSheet.create({
  container: {
    height: vh(100), */
/* height:
      Platform.OS === "android" ? vh(100) - StatusBar.currentHeight : vh(100), */
/*  backgroundColor: colors.secondary,
    flexDirection: "column",
    alignItems: "center",
  },

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
  main: {
    height: "60%",
    backgroundColor: colors.mainBackground,
    width: vw(100),
    alignItems: "center",
  },

  addButton: {
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
});
 */

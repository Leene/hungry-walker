import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import Header from "./Header";
import ListDetailContent from "./ListDetailContent";
import ListContent from "./ListContent";
import colors from "../config/colors";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";
import openDatabase from "./openDatabase";
import Items2 from "./Items2";
import ListDetailContent2 from "./ListDetailContent2";

const db = openDatabase();

export default function BasicScreen2() {
  const [text, setText] = React.useState(null);
  const [forceUpdate, forceUpdateId] = useForceUpdate();
  const [headline, setHeadline] = useState("Meine Listen?");
  const [listName, setListName] = useState("Listenname");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [listItemAmount, setListItemAmount] = useState(100);

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
      <View>
        <Header />
      </View>

      <View style={styles.headline}>
        <Text style={styles.headlineText}>{headline}</Text>
        <Pressable
          style={[styles.addButton]}
          onPress={() => setModalOpen(true)}
        >
          <Text style={styles.addButtonText}>+</Text>
        </Pressable>
      </View>
      <Modal
        transparent={true}
        backdropColor={"#235672"}
        backdropOpacity={0.5}
        visible={modalOpen2}
        animationType="slide"
      >
        <View style={styles.modalContainer2}>
          <View style={styles.modalMain}>
            <ListDetailContent2
              listItemAmount={listItemAmount}
              setListItemAmount={setListItemAmount}
              listName={listName}
              setListName={setListName}
              headline={headline}
              setHeadline={setHeadline}
              modalOpen2={modalOpen2}
              setModalOpen2={setModalOpen2}
            />
          </View>
        </View>
      </Modal>
      <ListContent
        listItemAmount={listItemAmount}
        setListItemAmount={setListItemAmount}
        headline={headline}
        setHeadline={setHeadline}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        modalOpen2={modalOpen2}
        setModalOpen2={setModalOpen2}
        setListName={setListName}
        listName={listName}
      />
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
  modalContainer2: {
    flex: 1,
    alignItems: "center",
  },
  modalMain: {
    backgroundColor: colors.listFormBackground,
  },
  addButton2: {
    height: 80,
    width: 80,
    paddingLeft: 20,
    borderTopLeftRadius: 80,
    backgroundColor: "hotpink",
    alignItems: "center",
    justifyContent: "center",
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

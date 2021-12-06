import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Modal,
  ScrollView,
} from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import Constants from "expo-constants";
import openDatabase from "./openDatabase";
import colors from "../config/colors";
import Header from "./Header";
import ListContent from "./ListContent";
import ListDetailContent from "./ListDetailContent";

const db = openDatabase();

export default function BasicScreen2() {
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

  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <ScrollView>
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
          <View style={styles.modalContainerDetailList}>
            <View>
              <ListDetailContent
                listName={listName}
                setListName={setListName}
                headline={headline}
                setHeadline={setHeadline}
                setModalOpen2={setModalOpen2}
              />
            </View>
          </View>
        </Modal>
        <ListContent
          listItemAmount={listItemAmount}
          headline={headline}
          setHeadline={setHeadline}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          setModalOpen2={setModalOpen2}
          setListName={setListName}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
  },
  headline: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 100,
    width: vw(100),
    paddingLeft: 30,
    backgroundColor: colors.headlineBackground,
  },
  headlineText: {
    textTransform: "uppercase",
    fontSize: 35,
    fontWeight: "100",
    color: colors.light,
  },
  addButton: {
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
  modalContainerDetailList: {
    flex: 1,
    alignItems: "center",
  },
});

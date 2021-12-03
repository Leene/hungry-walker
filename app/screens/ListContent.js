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
  Button,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ListDetailItem from "./ListDetailItem";
import ListItem from "./ListItem";
import AddProductForm from "./AddProductForm";
import AddListItemForm from "./AddListItemForm";

import colors from "../config/colors";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export default function ListContent({
  headline,
  setHeadline,
  modalOpen,
  setModalOpen,
  modalOpen2,
  setModalOpen2,
  setListName,
  listName,
  listItemAmount,
  setListItemAmount,
}) {
  const [todos, setTodos] = useState([
    { text: "Lebensmittel", key: "1" },
    { text: "WG", key: "2" },
    { text: "Timo", key: "3" },
    { text: "Liste 4 ", key: "4" },
  ]);

  function updateHeadline() {
    setHeadline(headline);
    return headline;
  }
  updateHeadline();

  const [inputText, setInputText] = useState("");

  const changeHandler = (val) => {
    setInputText(val);
  };

  const deleteItemHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };
  const openDetailList = (key) => {
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
        <View style={styles.main}>
          <View style={styles.list}>
            <Text>ListContent.js</Text>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <ListItem
                  item={item}
                  deleteItemHandler={deleteItemHandler}
                  modalOpen2={modalOpen2}
                  setModalOpen2={setModalOpen2}
                  setListName={setListName}
                  listName={listName}
                  listItemAmount={listItemAmount}
                  setListItemAmount={setListItemAmount}
                />
                /*  (<ListItem item={item} />) */
              )}
            />
          </View>
        </View>
      </View>

      <Modal
        transparent={true}
        backdropColor={"#235672"}
        backdropOpacity={0.5}
        visible={modalOpen}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderText}>Neue Liste erstellen</Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setModalOpen(false)}
            >
              <Text style={styles.modalCloseButtonText}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.modalMain}>
            <View style={styles.TextAndImageContainer}>
              <View style={styles.containerDraftText}>
                <TextInput
                  style={styles.itemDraftTitle}
                  placeholder="Neue Liste..."
                  onChangeText={changeHandler}
                  value={inputText}
                />
                <Text style={styles.productDraftCounter}>0 Einträge</Text>
              </View>
              <View style={styles.imgDraftContainer}>
                <Image
                  style={styles.imgDraft}
                  source={{
                    uri: "https://img.icons8.com/ios/100/ffffff/image-gallery.png",
                  }}
                />
                <Text>Bild wählen ...</Text>
              </View>
            </View>
            <View style={styles.modalSubmitButtonContainer}>
              <Button
                style={styles.modalSubmitButton}
                title={"Bestätigen"}
                onPress={() => submitHandler(inputText)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalItself: {},
  modalHeader: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: colors.listFormHeader,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: "space-between",
  },
  modalHeaderText: {
    padding: 8,
    marginLeft: 20,
    color: colors.light,
    fontWeight: "700",
    letterSpacing: 0.5,
    fontSize: 18,
  },
  modalCloseButton: {
    borderTopRightRadius: 20,
    fontWeight: "700",
    backgroundColor: "rgba(51, 42, 30, 0.5)",
    padding: 8,
    justifyContent: "flex-end",
    width: "10%",
    alignItems: "center",
  },
  modalCloseButtonText: {
    color: colors.light,
    fontWeight: "700",
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    //height: 300,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  modalMain: {
    width: "100%",
    padding: 10,
    backgroundColor: colors.listFormBackground,
  },
  TextAndImageContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  imgDraft: {
    height: 50,
    width: 50,
    opacity: 0.3,
  },

  itemDraftTitle: {
    fontSize: 40,
    fontWeight: "100",
    //paddingTop: 50,
    paddingBottom: 10,
    marginTop: 30,
    marginBottom: 10,

    color: colors.light,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
  productDraftCounter: {
    fontSize: 18,
    fontWeight: "100",
    color: colors.light,
    marginTop: 0,
    marginLeft: 10,
    marginBottom: 30,
    paddingLeft: 5,
    textAlign: "right",
    opacity: 0.8,
  },

  imgDraftContainer: {
    width: "30%",
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: colors.light,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  modalSubmitButtonContainer: {
    width: "100%",
  },

  container: {
    flex: 1,
    /* height:
      Platform.OS === "android" ? vh(100) - StatusBar.currentHeight : vh(100), */
    alignContent: "space-between",
  },

  list: {
    flex: 1,
    width: vw(100),
    margin: 10,
    padding: 0,
    height: "100%",
  },

  main: {
    flex: 1,
    //height: "70%",
    //height: vh(80),
    backgroundColor: colors.mainBackground,
    width: vw(100),
    alignItems: "center",
  },
});

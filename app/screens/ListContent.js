import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  TextInput,
  Button,
  Modal,
  TouchableOpacity,
} from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import colors from "../config/colors";
import ListItem from "./ListItem";

export default function ListContent({
  headline,
  setHeadline,
  modalOpen,
  setModalOpen,
  setModalOpen2,
  setListName,
  listItemAmount,
}) {
  const [inputText, setInputText] = useState("");
  const [lists, setLists] = useState([
    { text: "Lebensmittel", key: "1" },
    { text: "WG", key: "2" },
    { text: "Timo", key: "3" },
    { text: "Liste 4 ", key: "4" },
  ]);

  function updateHeadline() {
    setHeadline(headline);
    return headline;
  }
  const changeHandler = (val) => {
    setInputText(val);
  };
  const deleteItemHandler = (key) => {
    setLists((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };
  const submitHandler = (text) => {
    setInputText("");
    setLists((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };
  updateHeadline();
  return (
    <>
      <View>
        <FlatList
          data={lists}
          renderItem={({ item }) => (
            <ListItem
              item={item}
              deleteItemHandler={deleteItemHandler}
              setModalOpen2={setModalOpen2}
              setListName={setListName}
              listItemAmount={listItemAmount}
            />
          )}
        />
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
              <View>
                <TextInput
                  style={styles.itemDraftTitle}
                  placeholder="Neue Liste..."
                  onChangeText={changeHandler}
                  value={inputText}
                />
                <Text style={styles.productDraftCounter}>0 Einträge</Text>
              </View>

              <Image
                style={styles.draftLogo}
                source={require("../assets/img/HungryWalkerLogo_1color.png")}
              />
              {/*   <View style={styles.imgDraftContainer}>
                <Image
                  style={styles.imgDraft}
                  source={{
                    uri: "https://img.icons8.com/ios/100/ffffff/image-gallery.png",
                  }}
                />
                <Text>Bild wählen ...</Text>
              </View> */}
            </View>
            <View style={styles.modalSubmitButtonContainer}>
              <Button
                color={colors.primary}
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
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: colors.listFormHeader,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modalHeaderText: {
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.5,
    color: colors.light,
    padding: 8,
    marginLeft: 20,
  },
  modalCloseButton: {
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "700",
    backgroundColor: "rgba(51, 42, 30, 0.5)",
    width: "10%",
    padding: 8,
    borderTopRightRadius: 20,
  },
  modalCloseButtonText: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.light,
  },
  modalMain: {
    width: "100%",
    padding: 10,
    backgroundColor: colors.listFormBackground,
  },
  TextAndImageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  itemDraftTitle: {
    fontSize: 40,
    fontWeight: "100",
    color: colors.light,
    paddingBottom: 10,
    marginTop: 30,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
  productDraftCounter: {
    textAlign: "right",
    fontSize: 18,
    fontWeight: "100",
    color: colors.light,
    marginTop: 0,
    marginBottom: 30,
    marginLeft: 10,
    paddingLeft: 5,
    opacity: 0.8,
  },

  draftLogo: {
    height: 150,
    width: 150,
    opacity: 0.5,
    transform: [{ rotate: "20deg" }],
  },
  imgDraftContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "30%",
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: colors.light,
  },
  imgDraft: {
    height: 50,
    width: 50,
    opacity: 0.3,
  },
  modalSubmitButtonContainer: {
    width: "100%",
  },
});

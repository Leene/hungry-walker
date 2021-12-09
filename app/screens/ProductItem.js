import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import Constants from "expo-constants";

export default function ProductItem({
  done: doneHeading,
  onPressItem,
  db,
  listName,
  listItemAmount,
  setListItemAmount,
}) {
  const [items, setItems] = React.useState(null);

  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        `select * from items where done = ? AND liste = "${listName}";`,
        [doneHeading ? 1 : 0],
        (_, { rows: { _array } }) => setItems(_array)
      );
    });
  }, []);

  const heading = doneHeading ? "Gekauft" : "Einkaufen";

  /*    const updateListItemAmount = () => {
    setListItemAmount(listItemAmount++);
    return console.log("listItemAmounte: " + listItemAmount);
  }; */

  if (items === null || items.length === 0) {
    return null;
  }
  return (
    <View style={styles.listDetailItemContainer}>
      <Text style={styles.listDetailItemHeading}>{heading}</Text>

      {items.map(({ id, done, value, shopbrand, liste }) => (
        <View
          style={[
            styles.listDetailItem,
            {
              backgroundColor: done
                ? colors.listItemBackgroundColor
                : colors.listDetailItemColor,
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
                padding: 8,
                // backgroundColor: done ? "#1c9963" : "orange",
                backgroundColor: done
                  ? colors.listItemBulletColor_done
                  : colors.listItemBulletColor_active,
                borderWidth: 3,
                borderColor: "#fff",
                borderRadius: 20,
              }}
            ></TouchableOpacity>
            <Text
              style={{
                textAlign: "left",
                color: done ? "#fff" : "#000",
                paddingLeft: 5,
                paddingRight: 5,
                marginLeft: 5,
                marginRight: 5,
              }}
            >
              {value}
            </Text>
          </View>
          <Text
            style={{
              textAlign: "right",
              color: done ? "#555" : "#999",
            }}
          >
            {shopbrand}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listDetailItemContainer: {
    margin: 16,
  },
  listDetailItemHeading: {
    fontSize: 18,
    marginBottom: 8,
  },
  listDetailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginTop: 10,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
});

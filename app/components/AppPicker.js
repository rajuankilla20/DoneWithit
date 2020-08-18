import React, { useState } from "react";
import { StyleSheet, View, Modal, Button, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import Screen from "../components/Screen";
import AppText from "./AppText";
import { TouchableWithoutFeedback } from "react-native";
import PickerItem from "./PickerItem";

export default function AppPicker({
  icon,
  items,
  onSelectedItem,
  placeholder,
  selectedItem,
}) {
  const [modelVisible, setmodelVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setmodelVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={25}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modelVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setmodelVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setmodelVisible(false);
                  onSelectedItem(item.label);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flexDirection: "row",
    padding: 15,
    borderRadius: 25,
    width: "100%",
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

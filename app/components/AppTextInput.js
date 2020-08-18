import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import colors from "../config/colors";
import Screen from "../components/Screen";
import defaultStyles from "../config/styles";

export default function AppTextInput({ icon, ...otherProps }) {
  return (
    <Screen>
      <View style={styles.container}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={25}
            color={colors.medium}
            style={styles.icon}
          />
        )}
        <TextInput style={defaultStyles.text} {...otherProps} />
      </View>
    </Screen>
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
});

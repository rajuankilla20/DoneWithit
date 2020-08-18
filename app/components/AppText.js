import React from "react";
import { StyleSheet, Text, Platform } from "react-native";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}> {children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "dodgerblue",
    ...Platform.select({
      ios: {
        fontSize: 9,
        fontFamily: "Avenir",
      },
      andriod: {
        fontSize: 9,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default AppText;

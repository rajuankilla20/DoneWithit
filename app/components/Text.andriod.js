import React from "react";
import { StyleSheet, Text } from "react-native";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {" "}
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "dodgerblue",
    fontSize: 40,
    fontFamily: "Roboto",
  },
});

export default AppText;

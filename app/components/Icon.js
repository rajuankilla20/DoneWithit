import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Icon({
  name,
  size = 50,
  backgroundColor = "yello",
  iconColor = "white",
}) {
  return (
    <View
      style={{
        height: size,
        width: size,
        backgroundColor,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={name}
        size={size * 0.5}
        color={iconColor}
        backgroundColor={backgroundColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

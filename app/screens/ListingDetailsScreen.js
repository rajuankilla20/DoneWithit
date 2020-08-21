import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Text from "../components/Text";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/umbrella.jpg")} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Red Umbrella for sale</Text>
        <Text style={styles.price}> 100$</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/jkrish.jpg")}
            title="Jaikrish"
            subTitle="10 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 50,
  },
});

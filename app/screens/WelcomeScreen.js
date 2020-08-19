import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.backgroundImage}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/donewithit-logo.png")}
          style={styles.logo}
        />
        <Text style={styles.tagline}> Sell what you Don't Need </Text>
      </View>

      <View style={styles.loginContainer}>
        <AppButton title="Login" onPress={() => console.log("Login tapped")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => console.log("Register tapped")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  loginContainer: {
    padding: 5,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginVertical: 10,
  },
});
export default WelcomeScreen;

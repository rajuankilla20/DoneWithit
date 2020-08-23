import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";

import Button from "./app/components/Button";
import Screen from "./app/components/Screen";
import Text from "./app/components/Text";
import colors from "./app/config/colors";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="Link"
      onPress={() => {
        navigation.navigate("TweetDetails", { id: 1 });
      }}
    />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text> Tweets </Text>
    <Link />
    {/* <Button title="View Tweet" onPress={() => navigation.navigate("Tweets")} /> */}
  </Screen>
);
const TweetDetails = ({ route }) => (
  <Screen>
    <Text> Tweet Details : {route.params.id}</Text>
  </Screen>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Account"
      component={Account}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Feed" component={StackNavigator} />
  </Tab.Navigator>
);

const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Tweets"
    screenOptions={{
      headerStyle: { backgroundColor: "tomato" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      // options={({ route }) => ({ title: route.params.id })}
      options={{
        headerStyle: { backgroundColor: "dodgerblue" },
        headerTintColor: "white",
      }}
    />
  </Stack.Navigator>
);

export default function App() {
  console.log("app executed");

  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    backgroundColor: colors.light,
  },
});

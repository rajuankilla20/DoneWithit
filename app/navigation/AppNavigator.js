import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigator from "./AccountNavigator";

import FeedNavigator from "./FeedNavigator";
import NewListingButton from "./NewListingButton";

import routes from "../navigation/routes";
import useNotifications from "../hooks/useNotifications";

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  useNotifications();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Listings"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              size={size}
              color={color}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

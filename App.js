import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";
import React, { useState } from "react";
import { StyleSheet, Button } from "react-native";
import { Notifications } from "expo";

import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import OfflineNotice from "./app/components/OfflineNotice";
import colors from "./app/config/colors";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import { navigationRef } from "./app/navigation/rootNavigation";
import Screen from "./app/components/Screen";

export default function App() {
  console.log("app executed");
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();

    if (user) setUser(user);
  };

  if (!isReady) {
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );
  }
  // useEffect(() => {
  //   restoreToken();
  // }, []);

  const showNotifications = () => {
    // Notifications.presentLocalNotificationAsync({
    //   title: "Congratulations",
    //   body: "Your order was successfully placed",
    //   data: {
    //     _displayInForeground: true,
    //   },
    // });
    // to send scheduled notifications
    Notifications.scheduleLocalNotificationAsync(
      {
        title: "Congratulations",
        body: "Your order was successfully placed",
      },
      {
        time: new Date().getTime() + 2000,
      }
    );
  };
  return (
    // <Screen>
    //   <Button title="Tap me" onPress={showNotifications} />
    // </Screen>
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
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

import { useEffect } from "react";

import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

import expoPushTokenApi from "../api/expoPushTokens";
import navigation from "../navigation/rootNavigation";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();
    if (notificationListener) Notifications.addListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);

      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokenApi.register(token);
      console.log(token);
    } catch (error) {
      console.log("Error getting push notifications ", error);
    }
  };
};

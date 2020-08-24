import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ListItem from "../components/lists/ListItem";
import Constants from "expo-constants";

import Screen from "../components/Screen";
import ListItemSeperator from "../components/lists/ListItemSeperator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
const initialMessages = [
  {
    id: 1,
    title: "JK",
    description: "Hey! Is this item still available?",
    image: require("../assets/jkrish.jpg"),
  },
  {
    id: 2,
    title: "JK",
    description: "I'm interested in it. When will you able to post it?",
    image: require("../assets/jkrish.jpg"),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/jkrish.jpg"),
            },
            {
              id: 3,
              title: "T3",
              description: "D3",
              image: require("../assets/jkrish.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

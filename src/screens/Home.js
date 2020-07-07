import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Headers from "../components/Header";
import Card from "../components/Card";
import { mainColor } from "../Colors";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

export default function HomeScreen() {
  const carddata = useSelector((state) => {
    return state;
  });
  return (
    <View style={styles.homewrapper}>
      <Headers />
      <FlatList
        data={carddata}
        renderItem={({ item }) => {
          return (
            <Card
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={(item) => item.id.videoId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homewrapper: {
    flex: 1,
    backgroundColor: mainColor,
  },
});

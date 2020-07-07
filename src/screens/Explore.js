import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Headers from "../components/Header";
import { mainColor, lightWhite, secoundryColor } from "../Colors";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const LitileCard = ({ name }) => {
  return (
    <View style={styles.litlteCardWrapper}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const Explore = () => {
  const carddata = useSelector((state) => {
    return state;
  });
  return (
    <View style={styles.exploreWrapper}>
      <Headers />
      <ScrollView>
        <View style={styles.cardView}>
          <LitileCard name="Trending" />
          <LitileCard name="Music" />
          <LitileCard name="Gaming" />
          <LitileCard name="News" />
          <LitileCard name="Films" />
          <LitileCard name="Live" />
          <LitileCard name="#WithMe" />
        </View>
        <Text style={styles.cardList}>Trending videos</Text>
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
      </ScrollView>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  exploreWrapper: {
    flex: 1,
    backgroundColor: mainColor,
  },
  litlteCardWrapper: {
    backgroundColor: "red",
    width: 170,
    height: 40,
    padding: 7,
    margin: 2,
    borderRadius: 4,
    marginTop: 10,
  },
  text: {
    fontSize: 22,
    textAlign: "center",
    color: secoundryColor,
  },
  cardView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  cardList: {
    margin: 10,
    fontSize: 22,
    borderBottomWidth: 1,
    borderBottomColor: secoundryColor,
    color: secoundryColor,
  },
});

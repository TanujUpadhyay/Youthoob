import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { mainColor, lightWhite, secoundryColor } from "../Colors";
import Constant from "expo-constants";
import MiniCard from "../components/MiniCard";
import { useSelector, useDispatch } from "react-redux";

const SearchScreen = ({ navigation }) => {
  const [value, setValue] = useState("");
  // const [miniCard, setMiniCard] = useState([]);
  const dispatch = useDispatch();
  const miniCard = useSelector((state) => {
    return state;
  });

  const [loading, setLoading] = useState(false);
  const API_KEY = "";
  const fetchdata = () => {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${value}&type=video&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        dispatch({ type: "add", payload: data.items });
        // setMiniCard(data.items);
      });
  };

  return (
    <View style={styles.searchwrapper}>
      <View style={styles.iconsWrapper}>
        <Ionicons
          name="md-arrow-back"
          color={secoundryColor}
          size={32}
          onPress={() => navigation.goBack()}
        />
        <TextInput
          value={value}
          onChangeText={(text) => {
            setValue(text);
          }}
          placeholder={"  Search... "}
          placeholderTextColor={secoundryColor}
          padding={3}
          style={styles.inputText}
        />
        <Ionicons
          name="md-send"
          color={secoundryColor}
          size={32}
          onPress={() => {
            fetchdata();
          }}
        />
      </View>
      {loading ? (
        <ActivityIndicator
          style={styles.indicater}
          size="large"
          color={secoundryColor}
        />
      ) : null}
      <FlatList
        data={miniCard}
        renderItem={({ item }) => {
          return (
            <MiniCard
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
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchwrapper: {
    flex: 1,
    backgroundColor: mainColor,
    marginTop: Constant.statusBarHeight,
  },
  indicater: {
    marginTop: 15,
  },
  iconsWrapper: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    elevation: 1,
    borderBottomColor: "gray",
    borderBottomWidth: 0.7,
  },
  inputText: {
    width: "70%",
    height: 29,
    backgroundColor: lightWhite,
  },
});

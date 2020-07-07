import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  Dimensions,
} from "react-native";
import Constant from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { WebView } from "react-native-webview";

//my color
import { mainColor, lightWhite, secoundryColor } from "../Colors";

const VideoPlayer = ({ route }) => {
  const { videoId, title } = route.params;
  return (
    <View style={styles.VideoPlayerWrapper}>
      <View style={styles.videoStyle}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
        />
      </View>
      <Text style={styles.videotext} numberOfLines={2} ellipsizeMode={"tail"}>
        {title}
      </Text>
      <View style={styles.extraView} />
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  VideoPlayerWrapper: {
    flex: 1,
    backgroundColor: mainColor,
    marginTop: Constant.statusBarHeight,
  },
  videoStyle: {
    width: "100%",
    height: 300,
    borderBottomWidth: 2,
  },
  videotext: {
    fontSize: 20,
    width: Dimensions.get("screen").width - 50,
    margin: 9,
    color: secoundryColor,
  },
  extraView: {
    borderBottomWidth: 1,
  },
});

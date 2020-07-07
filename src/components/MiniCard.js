import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { mainColor, lightWhite, secoundryColor } from "../Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const MiniCard = ({ title, channel, videoId }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("videoPlayer", { videoId, title });
      }}
    >
      <View style={styles.miniCardWrapper}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          }}
          style={styles.thumnail}
        />
        <View style={styles.detailsWrapper}>
          <Text
            style={styles.detailsText}
            ellipsizeMode="tail"
            numberOfLines={3}
          >
            {title}
          </Text>
          <Text style={styles.smallDetails}>{channel}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default MiniCard;

const styles = StyleSheet.create({
  miniCardWrapper: {
    flexDirection: "row",
    margin: 8,
  },
  thumnail: {
    width: "46%",
    height: 92,
  },
  detailsWrapper: {
    paddingLeft: 9,
    margin: 5,
    marginTop: 0,
  },
  detailsText: {
    width: Dimensions.get("screen").width / 2.2,
    color: secoundryColor,
    fontSize: 15,
  },
  smallDetails: {
    color: lightWhite,
    fontSize: 13,
  },
});

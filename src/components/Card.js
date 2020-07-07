import React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Constant from "expo-constants";
import { mainColor, secoundryColor, lightWhite } from "../Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Card = ({ title, channel, videoId }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("videoPlayer", { videoId, title });
      }}
    >
      <View style={styles.cardWrapper}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          }}
          style={styles.thumnail}
        />
        <View style={styles.tumnailDetails}>
          <MaterialIcons
            style={styles.dp}
            name="account-circle"
            size={40}
            color={secoundryColor}
          />
          <View style={styles.detailsWrraper}>
            <Text
              style={styles.detailsText}
              ellipsizeMode="tail"
              numberOfLines={2}
            >
              {title}
            </Text>
            <Text style={styles.smallDetails}>{channel}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardWrapper: {
    marginBottom: 15,
    backgroundColor: mainColor,
  },
  thumnail: {
    width: "100%",
    height: 200,
  },
  dp: {
    marginTop: 6,
  },
  tumnailDetails: {
    flexDirection: "row",
    margin: 10,
  },
  detailsWrraper: {
    marginLeft: 10,
  },
  detailsText: {
    fontSize: 16.5,
    width: Dimensions.get("screen").width - 90,
    color: secoundryColor,
  },
  smallDetails: {
    color: lightWhite,
    fontSize: 12,
  },
});

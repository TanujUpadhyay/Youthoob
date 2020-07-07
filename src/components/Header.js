import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { mainColor, secoundryColor, lightWhite } from "../Colors";
import Constant from "expo-constants";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.headerWrapper}>
      <View style={styles.logoWrapper}>
        <Entypo name="youtube" size={31} color="#FF0000" />
        <Text transform={true} style={styles.logoText}>
          Youthoob
        </Text>
      </View>
      <View style={styles.otherLogos}>
        <Ionicons name="md-videocam" size={23} color={secoundryColor} />
        <Ionicons
          name="md-search"
          size={23}
          color={secoundryColor}
          onPress={() => navigation.navigate("Search")}
        />
        <MaterialIcons name="account-circle" size={30} color={secoundryColor} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    height: 47,
    backgroundColor: mainColor,
    marginTop: Constant.statusBarHeight,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 4,
    borderBottomColor: "#b09e99",
    borderBottomWidth: 0.3,
  },

  logoWrapper: {
    marginLeft: 10,
    flexDirection: "row",
    marginTop: 5,
  },
  logoText: {
    fontSize: 23.5,
    marginLeft: 5,
    fontWeight: "900",
    color: secoundryColor,
  },
  otherLogos: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 150,
    margin: 8,
  },
});

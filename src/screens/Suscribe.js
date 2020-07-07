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
import Headers from "../components/Header";
import { mainColor, lightWhite, secoundryColor } from "../Colors";

const Suscribe = () => {
  return (
    <View style={styles.SuscribeWrapper}>
      <Headers />
      <Text style={styles.textStyle}>
        Subscription feature Coming soon.....
      </Text>
      <Text style={styles.textStyle2}>
        This is a small prototype All the features will soon be added. Thank you
        for using this application.. Hope u enjoy it 😊{" "}
      </Text>
    </View>
  );
};

export default Suscribe;

const styles = StyleSheet.create({
  SuscribeWrapper: {
    flex: 1,
    backgroundColor: mainColor,
  },
  textStyle: {
    fontSize: 32,
    margin: 20,
    marginTop: 40,
    color: secoundryColor,
  },
  textStyle2: {
    fontSize: 32,
    margin: 5,
    padding: 5,
    marginTop: 20,
    color: secoundryColor,
  },
});

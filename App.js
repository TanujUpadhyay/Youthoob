import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { createStore } from "redux";
import { Provider } from "react-redux";
//my color
import { mainColor, secoundryColor, headercolorTheme } from "./src/Colors";
// my screens
import HomeScreen from "./src/screens/Home";
// reducers
import { reducer } from "./src/reducers/reducer";
// all the screns
import SearchScreen from "./src/screens/Search";
import VideoPlayer from "./src/screens/VideoPlayer";
import Explore from "./src/screens/Explore";
import Suscribe from "./src/screens/Suscribe";

//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyAhZgugYo5qJXnXjG8uoaW7muOWPjEqxHg

//AIzaSyAhZgugYo5qJXnXjG8uoaW7muOWPjEqxHg

const customDarkTheam = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor: headercolorTheme,
    iconColor: secoundryColor,
  },
};

const customDefaltTheam = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor: secoundryColor,
    iconColor: mainColor,
  },
};

const store = createStore(reducer);

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Explore") {
            iconName = "explore";
          } else if (route.name === "Subscriptions") {
            iconName = "subscriptions";
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={23} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: secoundryColor,
        inactiveTintColor: "gray",
        style: styles.tabbarColors,
      }}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Explore" component={Explore} />
      <Tabs.Screen name="Subscriptions" component={Suscribe} />
    </Tabs.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={customDefaltTheam}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="rootHome" component={RootHome} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="videoPlayer" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  // appWrapper: {
  //   flex: 1,
  //   backgroundColor: mainColor,
  // },
  tabbarColors: {
    backgroundColor: mainColor,
    padding: 2,
    paddingBottom: 1,
    paddingTop: 3,
    borderTopColor: mainColor,
    height: 43,
  },
});

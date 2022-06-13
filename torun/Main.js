import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";
import FormStack from "./FormStack";

const Stack = createStackNavigator();

//Functions
function WelcomeScreenLoad() {
  const navigation = useNavigation();
  return (
    <View style={welcomeScreenStyles.WelcomeScreen}>
      <View style={welcomeScreenStyles.Group652}>
        <View style={welcomeScreenStyles.Component2}></View>
        <View style={welcomeScreenStyles.Group813}>
          <Text style={welcomeScreenStyles.Txt594}>Welcome to NS ONE</Text>
        </View>
        <Image
          style={welcomeScreenStyles.Undraw_checking_boxes_re_9h8m11}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/nfgw2p06bac-26%3A125?alt=media&token=24591a03-4597-4c02-a834-8963728d1437",
          }}
        />
        <Text style={welcomeScreenStyles.Txt481}>
          Your one-stop app for all of your yearly NSmen obligations
        </Text>
        <View style={welcomeScreenStyles.Group952}>
          <TouchableOpacity onPress={() => navigation.navigate("TwoFAScreen")}>
            <Text style={welcomeScreenStyles.Txt330}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function TwoFALoad() {
  const navigation = useNavigation();
  return (
    <View style={twoFAStyles._2faScreen}>
      <View style={twoFAStyles.Group092}>
        <Image
          style={twoFAStyles.Image7}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/87uxkuj51v7-26%3A123?alt=media&token=6f0c3579-6050-4a37-b562-f20bb81b73bf",
          }}
        />
        <TouchableHighlight onPress={() => navigation.navigate("Forms")}>
          <Image
            style={twoFAStyles.Image3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/87uxkuj51v7-26%3A121?alt=media&token=5b572832-e84b-46c6-9070-0dc8e1d94caa",
            }}
          />
        </TouchableHighlight>
        <Image
          style={twoFAStyles.Image8}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/87uxkuj51v7-26%3A124?alt=media&token=63b37cd8-ce11-4283-ace6-90042af85199",
          }}
        />
      </View>
    </View>
  );
}

//Export default stack
export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreenLoad}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TwoFAScreen"
        component={TwoFALoad}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Forms"
        component={FormStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

// WeclcomeScreen styles
const welcomeScreenStyles = StyleSheet.create({
  WelcomeScreen: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 209,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(229,245,223,1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    width: 428,
    height: 926,
  },
  Group652: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  Txt599: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Group813: {
    paddingTop: 14,
    paddingBottom: 13,
    paddingLeft: 86,
    paddingRight: 85,
    marginBottom: 63,
    backgroundColor: "rgba(29,129,20,1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(252,252,252,1)",
    backdropFilter: "blur(4px)",
    width: 428,
    height: 61,
  },
  Txt594: {
    fontSize: 26,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },

  Undraw_checking_boxes_re_9h8m11: {
    width: 326,
    height: 261,
    marginBottom: 90,
  },
  Txt481: {
    fontSize: 24,
    fontWeight: "300",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 358,
    height: 107,
    marginBottom: 34,
  },
  Group952: {
    paddingTop: 11,
    paddingBottom: 10,
    paddingLeft: 152,
    paddingRight: 154,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 380,
    height: 55,
  },
  Txt330: {
    fontSize: 26,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },
});

// 2FA Styles
const twoFAStyles = StyleSheet.create({
  _2faScreen: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 75,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 926,
  },
  Group092: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 52,
  },
  Txt885: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Image7: {
    width: 428,
    height: 210,
    marginBottom: 78,
  },
  Image3: {
    width: 316,
    height: 327,
    marginBottom: 88,
  },
  Image8: {
    width: 428,
    height: 60,
  },
});

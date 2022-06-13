import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { NavigationContainer, useNavigaton } from "@react-navigation/native";

import Main from "./torun/Main";

export default function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}

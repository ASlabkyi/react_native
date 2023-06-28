import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen";
import { LoginScreen } from "./src/Screens/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <RegistrationScreen />
        {/* <LoginScreen /> */}
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

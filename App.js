import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import BasicScreen from "./app/screens/BasicScreen";

export default function App() {
  return (
   
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <BasicScreen />
      </SafeAreaView>
 
  );
}

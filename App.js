import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Navigation from "./Navigation";
import TextComponent from "./components/TextComponent";

export default function App() {
  return (
    // <TextComponent style={styles.container} />
    <Navigation />
  );
}

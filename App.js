import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./app/navigation/AppNavigator";
import FavouritesScreen from "./app/screens/FavouritesScreen";
import MovieDetailsScreen from "./app/screens/MovieDetailsScreen";
import SearchScreen from "./app/screens/SearchScreen";

export default function App() {
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

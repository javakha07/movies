import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import SingleMovie from "../components/SingleMovie";
import colors from "../config/colors";
import Constants from "expo-constants";
import AppText from "../components/Text";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

export default function FavouritesScreen({ movies }) {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Screen style={styles.background}>
      <AppText
        style={{
          fontFamily: "Poppins",
          fontSize: 25,
          color: colors.white,
          margin: 20,
        }}
      >
        Favourites
      </AppText>
      <FlatList
        data={movies}
        keyExtractor={(movie) => movie.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <SingleMovie
            title={item.title}
            image={{ uri: item.image }}
            onPress={() =>
              navigation.navigate("DetailsScreen", {
                title: item.title,
                image: item.image,
                description: item.description,
                item: item,
              })
            }
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 25,
    color: colors.white,
    margin: 20,
  },
});

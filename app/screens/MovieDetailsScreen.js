import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import colors from "../config/colors";
import { useFonts } from "expo-font";
import AppButton from "../components/Button";
import { NavigationContainer } from "@react-navigation/native";

// const movie = {
//   id: 1,
//   title: "Forrest Gump",
//   image: require("../assets/forrest.jpg"),
//   description:
//     "Forrest Gump, an innocent and kind-hearted Alabama boy, has been dealing with other people's unkindness nearly all his life. Having grown up with beautiful Jenny, his only friend, Forrest yearns to learn all about the ways of the world and embarks on a mission to find his true purpose in life. ",
//   director: "Robert Zemeckis",
// };

export default function MovieDetailsScreen({
  route,
  onAdd,
  onDelete,
  navigation,
}) {
  const { image, title, description, item } = route.params;

  console.log(title);
  let [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.topScreen}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.detailsContainer}>
          <Text style={[styles.title, { fontFamily: "Poppins" }]}>{title}</Text>
        </View>
      </View>
      <ScrollView style={styles.scroll}>
        <Text style={styles.description}>Description: {description}</Text>
        <Text style={styles.description}>Director: Quentin Tarantino</Text>
        <Text style={styles.description}>Cast:</Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Favourite"
          width="60%"
          onPress={() => {
            onAdd(item);
            navigation.navigate("Home");
          }}
        />
        <AppButton
          title="Hide"
          width="35%"
          color="white"
          textColor="red"
          onPress={() => onDelete(item)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  description: {
    color: colors.white,
    fontSize: 22,
  },
  detailsContainer: {
    bottom: 50,
    alignItems: "center",
    alignSelf: "stretch",
  },
  image: {
    width: "100%",
    height: "100%",
    overflow: "visible",
  },
  price: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    color: colors.white,
    fontSize: 35,
  },
  topScreen: {
    height: "70%",
  },
  scroll: {},
});

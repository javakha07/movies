import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import React from "react";
import colors from "../config/colors";
import AppText from "./Text";
import { useFonts } from "expo-font";

export default function SingleMovie({ onPress, title, image, style }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} />
          <Image
            style={styles.rating}
            source={require("../assets/rating.png")}
          />
        </View>

        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    overflow: "hidden",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "50%",
  },
  detailsContainer: {
    marginTop: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    borderRadius: 6,
    width: "80%",
    height: 220,
    overflow: "hidden",
  },
  title: {
    color: colors.white,
    width: "100%",
    height: 40,
  },
  rating: {
    position: "absolute",
    top: 5,
    right: 5,
  },
});

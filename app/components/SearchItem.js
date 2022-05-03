import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import React from "react";
import AppText from "./Text";
import colors from "../config/colors";

export default function SearchItem({ image, title, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: image }} />
        </View>

        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title.slice(0, 20)}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    marginVertical: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: "100%", height: "100%" },
  imageContainer: {
    borderRadius: 6,
    height: 110,
    width: 80,
    margin: 5,
  },
  title: {
    color: colors.white,
    fontSize: 10,
  },
  rating: {
    position: "absolute",
    top: 5,
    right: 5,
  },
});

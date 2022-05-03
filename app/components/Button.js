import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({
  title,
  onPress,
  color = "red",
  width = "50%",
  textColor = "white",
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color], width }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.red,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,

    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;

import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const BtnReg = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 51,
    width: "100%",
    backgroundColor: "rgb(255, 108, 0)",
    borderRadius: 100,
    marginTop: 30,
  },
  text: {
    color: "#fff",
    fontSize: 22,
  },
});

import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const CustomButton = ({ onClick }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onClick}>
      <AntDesign name="plus" style={styles.btnText} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btn: {
    width: 25,
    height: 25,
    borderColor: "rgb(255, 108, 0)",
    borderRadius: "50%",
    borderWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 12,
    right: -12,
  },
  btnText: {
    fontSize: 20,
    color: "rgb(255, 108, 0)",
  },
});

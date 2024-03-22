import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
} from "react-native";

export const CustomInput = ({ placeholder, value, seter }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ width: "100%" }}
    >
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={(e) => seter(e)}
      />
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 50,
    width: "100%",
    backgroundColor: "rgb(246, 246, 246)",
    borderWidth: 1,
    borderColor: "rgb(232, 232, 232)",
    borderRadius: 8,
    marginTop: 20,
    paddingLeft: 15,
  },
});

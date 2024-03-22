import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { CustomButton } from "../../components/UI/CustomButton/CustomButton";
import { CustomInput } from "../../components/UI/CustomInput/CustomInput";
import { BtnReg } from "../../components/BtnReg/BtnReg";

export const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <CustomButton />
      </View>
      <Text style={styles.title}>Реєстрація</Text>
      <CustomInput placeholder="Логін" value={login} seter={setLogin} />
      <CustomInput
        placeholder="Адреса електронної пошти"
        value={email}
        seter={setEmail}
      />
      <View style={styles.containerPassword}>
        <CustomInput
          placeholder="Пароль"
          value={password}
          seter={setPassword}
        />
        <View style={styles.containerBtn}>
          <Button title={"Показати"} color={"rgb(27, 67, 113)"} />
        </View>
      </View>
      <BtnReg onPress={handleSubmit}>Зареєстуватися</BtnReg>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 75,
    paddingLeft: 16,
    paddingRight: 16,
  },
  imageContainer: {
    position: "absolute",
    width: 120,
    height: 120,
    left: 128,
    top: -60,
    backgroundColor: "rgb(246, 246, 246)",
    borderRadius: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 500,
  },
  containerPassword: {
    width: "100%",
    position: "relative",
  },
  containerBtn: {
    position: "absolute",
    right: 10,
    top: 25,
  },
});

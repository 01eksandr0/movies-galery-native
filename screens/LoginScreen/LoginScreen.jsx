import React from "react";
import { Button, ImageBackground, StyleSheet, View } from "react-native";
import img from "../../img/обоиРС.jpeg";
import { CustomInput } from "../../components/UI/CustomInput/CustomInput";
import { BtnReg } from "../../components/UI/BtnReg/BtnReg.jsx";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground style={styles.imgBack} source={img}>
      <View style={styles.container}>
        <CustomInput placeholder={"Твоя електронна адреса"} />
        <CustomInput placeholder={"Твій пароль"} />
        <BtnReg onPress={() => navigation.navigate("Home")}>Увійти</BtnReg>
      </View>
      <Button
        title="Вже зареєстрований?"
        onPress={() => navigation.navigate("Registration")}
      />
    </ImageBackground>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  imgBack: {
    height: "100%",
    width: "100%",
  },
  container: {
    paddingTop: 250,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

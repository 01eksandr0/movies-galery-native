import React from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import img from "../../img/обоиРС.jpeg";
import { CustomInput } from "../../components/UI/CustomInput/CustomInput";
import { BtnReg } from "../../components/UI/BtnReg/BtnReg.jsx";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground style={styles.imgBack} source={img}>
      <View style={styles.container}>
        <CustomInput placeholder={"Твоє імʼя"} />
        <CustomInput placeholder={"Твоя електронна адреса"} />
        <CustomInput placeholder={"Придумай пароль"} />
        <BtnReg onPress={() => navigation.navigate("Home")}>
          Зареєструватися
        </BtnReg>
      </View>
      <Button
        title="Вже зареєстрований?"
        onPress={() => navigation.navigate("Login")}
      />
    </ImageBackground>
  );
};
export default RegisterScreen;

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

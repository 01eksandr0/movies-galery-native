import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export const Movie = ({ id, src, text }) => {
  const navigation = useNavigation();
  return (
    <View style={s.item}>
      <Image style={s.img} source={{ uri: `${src}` }} />
      <View style={s.abContainer}>
        <Text style={s.text}>{text}</Text>
        <Button
          onPress={() => navigation.navigate("MoreInfo", { id })}
          style={s.btn}
          title="Про фільм"
        />
      </View>
    </View>
  );
};
const s = StyleSheet.create({
  item: {
    width: "100%",
    marginBottom: 10,
    position: "relative",
    overflow: "hidden",
    borderRadius: 20,
  },
  img: {
    height: 200,
    width: "100%",
  },
  abContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    padding: 8,
  },
});

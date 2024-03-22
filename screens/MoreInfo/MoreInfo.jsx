import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import requests from "../../js/api";

export const MoreInfo = () => {
  const {
    params: { id },
  } = useRoute();
  const [info, setInfo] = useState({});
  useEffect(() => {
    const getInfoMovie = async () => {
      try {
        const { data } = await requests.getDetailsMovie(id);
        setInfo(data);
        console.log(data);
      } catch (error) {}
    };
    getInfoMovie();
  }, [id]);

  return (
    <>
      {info.title ? (
        <View style={s.constainer}>
          <Image
            style={{ width: "auto", height: 250, borderRadius: 5 }}
            source={{
              uri: `${"https://image.tmdb.org/t/p/w500" + info.backdrop_path}`,
            }}
          />
          <Text style={s.text}>{info.title}</Text>
          <Text style={s.genres}>
            Genres: {info.genres.map((i) => i.name).join(", ")}.{" "}
          </Text>
          <Text style={s.genres}>Release: {info.release_date}. </Text>
          <Text style={s.genres}>
            Country: {info.production_countries[0].name}.
          </Text>
          <Text style={s.genres}>
            User Score: {parseInt(info.vote_average * 10)}%.
          </Text>
        </View>
      ) : (
        <Text style={{ paddingTop: 100, textAlign: "center" }}>Loading</Text>
      )}
    </>
  );
};

const s = StyleSheet.create({
  constainer: {
    padding: 20,
    backgroundColor: "#c1bebe",
    height: "100%",
  },
  text: { fontSize: 34, textAlign: "center", marginTop: 10, color: "#fff" },
  genres: {
    fontSize: 20,
    color: "#000",
    marginTop: 30,
  },
});

import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import requests from "../../js/api";
import { Movie } from "../../components/Movie/Movie";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await requests.getTrendMovies();
        setMovies(data.results);
      } catch (error) {}
    };
    getMovies();
  }, []);
  return (
    <View>
      <ScrollView style={s.container}>
        {movies.map((i) => (
          <Movie
            text={i.title}
            src={"https://image.tmdb.org/t/p/w500" + i.backdrop_path}
            id={i.id}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    padding: 20,
  },
});

import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import requests from "../../js/api";
import { Movie } from "../../components/Movie/Movie";

export const Search = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const handleClick = async () => {
    if (!value) return;
    try {
      const { data } = await requests.getMoviesByWord(value);
      setList(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={s.container}>
      <View style={s.inputContainer}>
        <TextInput
          style={s.input}
          placeholder="Search..."
          value={value}
          onChangeText={(e) => setValue(e)}
        />
        <TouchableOpacity style={s.btn} onPress={handleClick}>
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {!!list.length && (
        <ScrollView>
          {list.map((i) => (
            <Movie
              text={i.title}
              src={"https://image.tmdb.org/t/p/w500" + i.backdrop_path}
              id={i.id}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const s = StyleSheet.create({
  container: { padding: 20 },
  inputContainer: { position: "relative", marginBottom: 20 },
  input: {
    width: "100%",
    height: 40,
    borderRadius: 10,
    paddingLeft: 20,
    backgroundColor: "#a19e9e",
  },
  btn: { position: "absolute", right: 20, top: 6 },
});

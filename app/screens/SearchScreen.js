import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import { Searchbar } from "react-native-paper";
import AppText from "../components/Text";
import colors from "../config/colors";
import { useFonts } from "expo-font";
import SearchItem from "../components/SearchItem";

const SearchScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins.ttf"),
  });
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("dark");
  const getMoviesFromApiAsync = async () => {
    try {
      const response = await fetch(
        `https://imdb-api.com/en/API/Search/k_5z9k01bl/${search}`
      );
      const json = await response.json();
      setMovies(json.results);
      // console.log(json.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMoviesFromApiAsync();
    console.log("Movies: ", movies);
  }, [search]);

  return (
    <View style={styles.container}>
      <AppText style={styles.text}>Find your favorite movie</AppText>
      <Searchbar
        style={styles.input}
        placeholder="Search"
        onChangeText={(val) => setSearch(val)}
        value={search}
      />
      <FlatList
        data={movies}
        keyExtractor={(movie) => movie.id.toString()}
        numColumns={4}
        renderItem={({ item }) => (
          // <Text>{item.title}</Text>
          <SearchItem
            title={item.title}
            image={item.image}
            onPress={() =>
              navigation.navigate("DetailsScreen", {
                title: item.title,
                image: item.image,
                description: item.description,
                item: item,
              })
            }
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    alignItems: "center",
    flex: 1,
  },
  input: {
    height: "10%",
    width: "90%",
  },
  text: {
    fontSize: 30,
    color: colors.white,
    fontFamily: "Poppins",
    marginTop: 30,
  },
});

export default SearchScreen;

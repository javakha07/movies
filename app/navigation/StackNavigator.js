import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import FavouritesScreen from "../screens/FavouritesScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import SearchScreen from "../screens/SearchScreen";

const Stack = createStackNavigator();

export default function StackNavigator() {
  const [movies, setMovies] = useState([]);
  const changefavorites = (movie) => {
    setMovies((prevState) => [...prevState, movie]);
  };
  const handleDelete = (movie) => {
    // Delete the message from messages
    setMovies(movies.filter((m) => m.id !== movie.id));
  };
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home">
        {(props) => <FavouritesScreen movies={movies} />}
      </Stack.Screen>
      <Stack.Screen name="DetailsScreen">
        {(props) => (
          <MovieDetailsScreen
            onAdd={changefavorites}
            onDelete={handleDelete}
            {...props}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

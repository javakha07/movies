import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavouritesScreen from "../screens/FavouritesScreen";
import SearchScreen from "../screens/SearchScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";

const Tab = createBottomTabNavigator();

export default function AppNavigator({ data, changeSearch }) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarItemStyle: { color: colors.primary },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Favourites"
          component={StackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image source={require("../assets/M.png")} fadeDuration={0} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="movie-search"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../Tools/Defaults";
import Icon from "react-native-vector-icons/Ionicons";
import { RecipesProvider } from "../Redux/RecipesContext";

import SignInScreen from "../Screens/SignIn";
import SignUpScreen from "../Screens/SignUp";
import ListRecipesScreen from "../Screens/ListRecipes";
import ViewRecipeScreen from "../Screens/ViewRecipe";
import AddRecipeScreen from "../Screens/AddRecipe";
import SettingsScreen from "../Screens/Settings";

import { useUser } from "../Redux/UserContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function getHeaderOptions(title, buttonText) {
  return {
    title: title,
    headerStyle: {
      backgroundColor: COLORS.PRIMARY,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
    headerRight: () => <TouchableOpacity text={buttonText} />,
    headerShown: true,
  };
}

function AuthStack() {
  return (
    <Stack.Navigator options={{ headerShown: false }}>
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListRecipes"
        component={ListRecipesScreen}
        options={getHeaderOptions("RECIPES", "New Recipe")}
      />
      <Stack.Screen name="ViewRecipe" component={ViewRecipeScreen} />
      <Stack.Screen
        name="AddRecipe"
        component={AddRecipeScreen}
        options={getHeaderOptions("NEW RECIPE", "Save")}
      />
    </Stack.Navigator>
  );
}

const BottomTabNavigator = () => {
  const { user } = useUser();

  const getIconName = (routename, focused) => {
    let iconName;

    switch (routename) {
      case "Auth":
        iconName = "people";
        break;
      case "Settings":
        iconName = "settings";
        break;
      default:
        iconName = "restaurant";
    }

    return focused ? iconName : iconName + "-outline";
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = getIconName(route.name, focused);

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarInactiveTintColor: COLORS.SECONDARY,
        headerShown: false,
      })}
    >
      {user ? (
        <Tab.Screen name="Home" component={HomeStack} />
      ) : (
        <Tab.Screen name="Auth" component={AuthStack} />
      )}
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={getHeaderOptions("SETTINGS", "Logout")}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

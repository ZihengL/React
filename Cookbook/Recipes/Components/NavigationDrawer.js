import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../Tools/Defaults";
import Icon from "react-native-vector-icons/Ionicons";

import SignInScreen from "../Screens/SignIn";
import SignUpScreen from "../Screens/SignUp";
import ListRecipesScreen from "../Screens/ListRecipes";
import ViewRecipeScreen from "../Screens/ViewRecipe";
import AddRecipeScreen from "../Screens/AddRecipe";
import SettingsScreen from "../Screens/Settings";

import { useUser } from "../Redux/UserContext";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

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
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
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

function NavigationDrawer() {
  const { user } = useUser();

  return (
    <Drawer.Navigator initialRouteName={user ? "Home" : "Auth"}>
      {user ? (
        <Drawer.Screen name="Home" component={HomeStack} />
      ) : (
        <Drawer.Screen name="Auth" component={AuthStack} />
      )}
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={getHeaderOptions("SETTINGS", "Logout")}
      />
    </Drawer.Navigator>
  );
}

export default NavigationDrawer;

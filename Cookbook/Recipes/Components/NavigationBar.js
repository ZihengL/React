import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Ionicons";
import { useUser } from "../Redux/UserContext";
import ButtonComponent from "../Components/ButtonComponent";

import SignInScreen from "../Screens/SignIn";
import SignUpScreen from "../Screens/SignUp";

import ListRecipesScreen from "../Screens/ListRecipes";
import ViewRecipeScreen from "../Screens/ViewRecipe";
import AddRecipeScreen from "../Screens/AddRecipe";
import SettingsScreen from "../Screens/Settings";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
    <Stack.Navigator
    // screenOptions={{
    //   headerShown: false,
    // }}
    >
      <Stack.Screen
        name="ListRecipes"
        component={ListRecipesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ViewRecipe"
        component={ViewRecipeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddRecipe"
        component={AddRecipeScreen}
        options={{
          headerRight: () => <TouchableOpacity text="Save" />,
        }}
      />
    </Stack.Navigator>
  );
}

const BottomTabNavigator = () => {
  const { user } = useUser();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     const token = await SecureStore.getItemAsync("userToken");
  //     setIsLoggedIn(!!token);
  //   };

  //   checkLoginStatus();
  // }, []);

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
        tabBarActiveTintColor: "#246b7d",
        tabBarInactiveTintColor: "#ccc8c8",
        headerShown: false,
      })}
    >
      {user ? (
        <Tab.Screen name="Home" component={HomeStack} />
      ) : (
        <Tab.Screen name="Auth" component={AuthStack} />
      )}
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

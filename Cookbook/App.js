/**
 * @format
 */

import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RecipesProvider } from "./Recipes/Redux/RecipesContext";
import { UserProvider } from "./Recipes/Redux/UserContext";

import ListRecipesScreen from "./Recipes/Screens/ListRecipes";
import ViewRecipeScreen from "./Recipes/Screens/ViewRecipe";
import AddRecipeScreen from "./Recipes/Screens/AddRecipe";

import BottomTabNavigator from "./Recipes/Components/NavigationBar";

const App = () => {
  return (
    <UserProvider>
      <RecipesProvider>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </RecipesProvider>
    </UserProvider>
  );
};

export default App;

/* <Stack.Navigator initialRouteName="Home">
<Stack.Screen name="Home" component={ListRecipesScreen} />
<Stack.Screen name="ViewRecipe" component={ViewRecipeScreen} />
<Stack.Screen name="AddRecipe" component={AddRecipeScreen} />
</Stack.Navigator> */

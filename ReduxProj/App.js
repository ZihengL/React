import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RecipesProvider} from './Recipes/Redux/RecipesContext';
import ListRecipesScreen from './Recipes/Screens/ListRecipes';
import ViewRecipeScreen from './Recipes/Screens/ViewRecipe';
import AddRecipeScreen from './Recipes/Screens/AddRecipe';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <RecipesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Recipes">
          <Stack.Screen name="Recipes" component={ListRecipesScreen} />
          <Stack.Screen name="ViewRecipe" component={ViewRecipeScreen} />
          <Stack.Screen name="AddRecipe" component={AddRecipeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecipesProvider>
  );
};

export default App;

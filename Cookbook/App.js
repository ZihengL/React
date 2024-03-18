/**
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RecipesScreen} from './Screens/RecipesScreen';
import {RecipeScreen} from './Screens/RecipeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Recipes">
          {/* <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} /> */}
          <Stack.Screen name="Recipes" component={RecipesScreen} />
          <Stack.Screen name="Recipe" component={RecipeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;

/* <Stack.Screen name="Recipe" component={RecipeScreen} />
   <Stack.Screen name="Recipe" component={CameraScreen} /> */
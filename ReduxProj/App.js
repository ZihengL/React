import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {RecipesProvider} from './Recipes/Redux/RecipesContext';
// import BottomTabNavigator from './Recipes/Components/NavigationBar';
import ListRecipesScreen from './Recipes/Screens/ListRecipes';
import ViewRecipeScreen from './Recipes/Screens/ViewRecipe';
import AddRecipeScreen from './Recipes/Screens/AddRecipe';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

function AuthStack() {
  return (
    <Stack.Navigator options={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ListRecipes" component={ListRecipesScreen} />
      <Stack.Screen name="ViewRecipe" component={ViewRecipeScreen} />
      <Stack.Screen name="AddRecipe" component={AddRecipeScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <RecipesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={ListRecipesScreen} />
          <Stack.Screen name="ViewRecipe" component={ViewRecipeScreen} />
          <Stack.Screen name="AddRecipe" component={AddRecipeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecipesProvider>
  );
};

export default App;

/* <Tab.Screen name="Settings" component={SettingsScreen} /> */

/* <Stack.Navigator initialRouteName="Home">
  <Stack.Screen name="Home" component={ListRecipesScreen} />
  <Stack.Screen name="ViewRecipe" component={ViewRecipeScreen} />
  <Stack.Screen name="AddRecipe" component={AddRecipeScreen} />
</Stack.Navigator> */

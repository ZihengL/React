import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import ListRecipesScreen from '../Screens/ListRecipes';
import ViewRecipeScreen from '../Screens/ViewRecipe';
import AddRecipeScreen from '../Screens/AddRecipe';
import SettingsScreen from '../Screens/Settings';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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

const BottomTabNavigator = () => {
  const isLoggedIn = true;
  const initialStack = isLoggedIn ? HomeStack : AuthStack;

  const getIconName = (routename, focused) => {
    let iconName;

    switch (routename) {
      case 'Settings':
        iconName = 'settings';
        break;
      default:
        iconName = 'restaurant';
    }

    return focused ? iconName : iconName + '-outline';
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            const iconName = getIconName(route.name, focused);

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#246b7d',
          tabBarInactiveTintColor: '#ccc8c8',
        })}>
        <Tab.Screen name="Home" component={initialStack} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;

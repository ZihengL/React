import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import GameScreen from './Screens/GameScreen';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Game" component={GameScreen} />
    </Stack.Navigator>
  );
}

export default AppStack;

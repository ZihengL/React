import React, {useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListItemsScreen from './Notes/Screens/ListItems';
import AddItemScreen from './Notes/Screens/AddItem';
import ViewItemScreen from './Notes/Screens/ViewItem';
import {NotesProvider} from './Notes/ItemsContext';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NotesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Notes">
          <Stack.Screen name="Items" component={ListItemsScreen} />
          <Stack.Screen name="ViewItem" component={ViewItemScreen} />
          <Stack.Screen name="AddItem" component={AddItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NotesProvider>
  );
};

export default App;

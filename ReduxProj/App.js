import React, {useReducer} from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {initialState, notesReducer} from './Notes/notesReducer';
import NotesScreen from './Notes/NotesScreen'; // Assume this is your current App content
import AddNoteScreen from './Notes/AddNoteScreen'; // New screen for adding notes
import {NotesProvider} from './Notes/NotesContext'; // Import your provider

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NotesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Notes">
          <Stack.Screen name="Notes" component={NotesScreen} />
          <Stack.Screen name="AddNote" component={AddNoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NotesProvider>
  );
};

export default App;

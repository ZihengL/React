import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {initialState, notesReducer} from './notesReducer';
import {NotesContext} from './NotesContext'; // Import the context

const NotesScreen = ({navigation}) => {
  const {state, dispatch} = useContext(NotesContext); // Use the context

  const removeNote = id => {
    dispatch({type: 'REMOVE_NOTE', payload: id});
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Add Note" onPress={() => navigation.navigate('AddNote')} />
      {state.notes.map(note => (
        <TouchableOpacity key={note.id} onPress={() => removeNote(note.id)}>
          <Text>{note.content}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NotesScreen;

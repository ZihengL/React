import React, {useState, useContext} from 'react';
import {View, TextInput, Button} from 'react-native';
import {NotesContext} from './NotesContext'; // Import the context

const AddNoteScreen = ({navigation}) => {
  const [note, setNote] = useState('');
  const {dispatch} = useContext(NotesContext); // Use the context

  const saveNote = () => {
    if (note.trim()) {
      dispatch({type: 'ADD_NOTE', payload: {id: Date.now(), content: note}}); // Use a unique ID for each note
      navigation.goBack();
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        placeholder="Write your note here..."
        value={note}
        onChangeText={setNote}
        style={{height: 40, borderColor: 'gray', borderWidth: 1, width: '80%'}}
      />
      <Button title="Save Note" onPress={saveNote} />
    </View>
  );
};

export default AddNoteScreen;

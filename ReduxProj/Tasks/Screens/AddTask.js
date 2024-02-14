import React, {useState, useContext} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {TasksContext} from '../TasksContext';
import CustomButton from '../Components/CustomButton';
import ImageButton from '../Components/ImageButton';
// import Checkbox from '../Components/Checkbox';

const AddTaskScreen = ({navigation}) => {
  const {isComplete, setCompletion} = useState(false);
  const [task, setTask] = useState('');
  const {dispatch} = useContext(TasksContext);

  const saveTask = () => {
    if (task.trim()) {
      dispatch({
        type: 'ADD_TASK',
        payload: {id: Date.now(), description: task, isComplete: false},
      });
      navigation.goBack();
    }
  };

  const getCompletion = () => {
    return isComplete ? 'O' : 'X';
  };

  return (
    <View style={styles.container}>
      <CustomButton text={getCompletion} onPress={setCompletion} />

      <TextInput
        placeholder="What's your task?"
        value={task}
        onChangeText={setTask}
        style={styles.text}
      />
      <CustomButton text="Save" onPress={saveTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    padding: 20,
    borderColor: 'gray',
    borderWidth: 0.5,
    width: '95%',
    margin: 20,
  },
  checkbox: {
    padding: 15,
  },
});

export default AddTaskScreen;

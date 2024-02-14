import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TasksContext} from '../TasksContext';
import CustomButton from '../Components/CustomButton';

const ViewTaskScreen = ({route, navigation}) => {
  const {taskID} = route.params;
  const {state, dispatch} = useContext(TasksContext);
  const task = state.tasks.find(t => t.id === taskID);

  const deleteItem = () => {
    dispatch({type: 'REMOVE_TASK', payload: taskID});
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {task ? (
        <Text style={styles.text}>{task.content}</Text>
      ) : (
        <Text>Task not found</Text>
      )}
      <CustomButton text="Delete" onPress={deleteItem} />
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
    flexGrow: 1,
    padding: 20,
  },
});

export default ViewTaskScreen;

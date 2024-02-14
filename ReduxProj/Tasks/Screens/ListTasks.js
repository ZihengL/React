import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {TasksContext} from '../TasksContext';
import CustomButton from '../Components/CustomButton';
import TaskListItem from '../Components/TaskListItem';
import TaskComponent from '../Components/TaskComponent';

const ListTasksScreen = ({navigation}) => {
  const {state} = useContext(TasksContext);

  return (
    <View style={styles.container}>
      <View>
        {state.tasks.map(task => (
          // <TaskListItem
          //   task={task}
          //   onPress={() => navigation.navigate('ViewTask', {taskID: task.id})}
          // />
          <TaskComponent
            id={task.id}
            desc={task.description}
            complete={task.isComplete}
            onPress={() => navigation.navigate('ViewTask', {taskID: task.id})}
          />
        ))}
      </View>
      <CustomButton text="Add" onPress={() => navigation.navigate('AddTask')} />
      <CustomButton text="Test" onPress={() => navigation.navigate('Test')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    margin: 'auto',
  },
});

export default ListTasksScreen;

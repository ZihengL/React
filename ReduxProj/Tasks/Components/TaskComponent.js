import React, {useState, useContext} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import ImageButton from './ImageButton';
// import {CheckBox} from './Checkbox';
import {TasksContext} from '../TasksContext';
import CustomButton from './CustomButton';

const TaskComponent = ({id, desc, complete, onPress}) => {
  const [isComplete, setCompletion] = useState(complete);
  const {state, dispatch} = useContext(TasksContext);

  const getTextStyle = () => {
    return isComplete ? styles.textComplete : styles.textIncomplete;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity key={id} style={styles.description} onPress={onPress}>
        <Text style={styles.text}>{desc}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        key={id}
        style={styles.other}
        onPress={() => dispatch({type: 'REMOVE_TASK', payload: id})}>
        <Text style={styles.text}>Del</Text>
      </TouchableOpacity>
      {/* <CustomButton
        text="Del"
        onPress={() => dispatch({type: 'REMOVE_TASK', payload: id})}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    padding: 10,
    margin: 10,
    flexDirection: 'row',
  },
  other: {
    width: '10%',
    padding: 10,
    backgroundColor: 'red',
    color: 'white',
    margin: 'auto',
  },
  description: {
    width: '50%',
    textAlign: 'left',
    color: 'white',
    padding: 10,
    margin: 'auto',
  },
  text: {
    color: 'white',
    fontFamily: 'Helvetica',
  },
  textComplete: {
    color: 'white',
    fontFamily: 'Helvetica',
    textDecorationLine: 'line-through',
  },
});

export default TaskComponent;

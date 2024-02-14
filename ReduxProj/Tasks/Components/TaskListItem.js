import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const TaskListItem = ({key, content, onPress}) => {
  return (
    <TouchableOpacity key={key} style={styles.container} onPress={onPress}>
      <Text style={styles.textstyle}>{content}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'left',
    justifyContent: 'center',
    backgroundColor: 'gray',
    padding: 5,
    margin: 5,
  },
  textstyle: {
    color: 'white',
    fontFamily: 'Helvetica',
  },
});

export default TaskListItem;

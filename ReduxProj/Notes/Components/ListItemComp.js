import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const ListItemComp = ({key, content, onPress}) => {
  return (
    <TouchableOpacity key={key} style={styles.container} onPress={onPress}>
      <Text style={styles.textstyle}>{content}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textstyle: {
    color: '#1B3855',
    fontFamily: 'Helvetica',
  },
});

export default ListItemComp;

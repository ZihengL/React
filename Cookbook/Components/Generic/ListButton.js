import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function ListButton(onPress) {
  return (
  <TouchableOpacity style={styles.container} onPress={onPress}>

  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    margin: 0,
    alignItems: 'left',
    justifyContent: 'center',
    backgroundColor: '#72A0C1',
  },
  textstyle: {
    color: '#1B3855',
    fontFamily: 'Helvetica',
  },
});

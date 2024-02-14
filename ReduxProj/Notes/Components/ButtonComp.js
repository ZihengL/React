import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const ButtonComp = ({text, onPress, containerStyle}) => {
  const style = containerStyle ? containerStyle : styles.container;

  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={styles.textstyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#72A0C1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 15,
    margin: 20,
  },
  textstyle: {
    color: '#1B3855',
    fontFamily: 'Helvetica',
  },
});

export default ButtonComp;

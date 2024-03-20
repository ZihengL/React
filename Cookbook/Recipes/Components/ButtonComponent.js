import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const ButtonComponent = ({text, onPress, containerStyle}) => {
  const style = containerStyle ? containerStyle : styles.container;

  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={styles.textstyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    backgroundColor: '#246b7d',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 15,
    margin: 20,
  },
  textstyle: {
    color: '#FFF',
  },
});

export default ButtonComponent;

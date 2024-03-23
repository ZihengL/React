import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import { COLORS } from "../Tools/Defaults";

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
    width: '40%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    backgroundColor: COLORS.PRIMARY,
  },
  textstyle: {
    color: '#FFF',
  },
});

export default ButtonComponent;

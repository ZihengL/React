import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Button = ({text, onPress, textStyle, btnStyle}) => {
  return (
    <TouchableOpacity style={btnStyle} onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

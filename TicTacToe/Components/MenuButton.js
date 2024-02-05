import React from 'react';
import {StyleSheet} from 'react-native';
import Button from './Button';

const MenuButton = ({text, onPress}) => {
  return (
    <Button
      text={text}
      onPress={onPress}
      textStyle={styles.text}
      btnStyle={styles.button}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#dd9f22',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#b07e1b',
    margin: 20,
  },
  text: {
    fontSize: 20,
    color: '#1B3855',
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
});

export default MenuButton;

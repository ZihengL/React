import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import ImageButton from './ImageButton';

const Checkbox = ({checked, onPress}) => {
  const [isChecked, setCheck] = useState(checked);

  const addedOnPress = () => {
    setCheck(!isChecked);
    onPress;
  };

  const getLink = () => {
    return isChecked
      ? 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
      : 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
  };

  return (
    <ImageButton
      link={getLink}
      style={styles.container}
      onPress={addedOnPress}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 15,
    margin: 20,
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox: {
    padding: 15,
    justifyContent: 'center',
  },
});

export default Checkbox;

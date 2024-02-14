import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';

const ImageButton = ({link, containerStyle, onPress}) => {
  const style = containerStyle ? containerStyle : styles.container;

  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Image source={link} style={styles.image} />;
    </TouchableOpacity>
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
});

export default ImageButton;

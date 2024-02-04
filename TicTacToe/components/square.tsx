// Square.tsx
import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

type Props = {
  value: 'X' | 'O' | null;
  onPress: () => void;
};

const Square: React.FC<Props> = ({value, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.square}>
      <Text style={styles.squareText}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 104,
    height: 104,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#999',
  },
  squareText: {
    fontSize: 30,
  },
});

export default Square;

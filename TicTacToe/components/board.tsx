// Board.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Square from './square';

type Props = {
  squares: Array<'X' | 'O' | null>;
  onPress: (index: number) => void;
};

const Board: React.FC<Props> = ({squares, onPress}) => {
  return (
    <View style={styles.board}>
      {squares.map((square, index) => (
        <Square key={index} value={square} onPress={() => onPress(index)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 312,
  },
});

export default Board;

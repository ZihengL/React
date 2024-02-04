import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Square from './Square';

// 0 | 1 | 2
// 3 | 4 | 5
// 6 | 7 | 8

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isP1Turn, setTurn] = useState(true);

  const reset = () => {
    setBoard(Array(9).fill(null));
  };

  // TODO: This doesn't work properly..
  const handlePress = index => {
    if (board[index] === null) {
      setBoard(
        board.map((mark, idx) =>
          idx === index ? (isP1Turn ? 'X' : 'O') : mark,
        ),
      );

      setTurn(!isP1Turn);
    }
  };

  return (
    <View style={styles.board}>
      {board.map(index => (
        <Square
          key={index}
          style={styles.row}
          onPress={() => handlePress(index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
});

export default Board;

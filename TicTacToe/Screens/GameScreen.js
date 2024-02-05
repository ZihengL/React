import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Square from '../Components/Square';
import MenuButton from '../Components/MenuButton';

// 0 | 1 | 2
// 3 | 4 | 5
// 6 | 7 | 8

const GameScreen = ({navigation, route}) => {
  const LEN = 3;
  const P1MARK = 'X';
  const P2MARK = 'O';
  const TIE = 'Tie!';
  const PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(LEN * LEN).fill(null));
  const [turnHistory, setHistory] = useState([]);
  const [isP1Turn, setTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [context, setContext] = useState('');
  const {player1, player2} = route.params;

  // GAME FUNCTIONS

  const getMark = forPlayer1 => {
    return forPlayer1 ? P1MARK : P2MARK;
  };

  const getCurrentPlayer = () => {
    return isP1Turn ? player1 : player2;
  };

  const getPlayer = turn => {
    return turn ? player1 : player2;
  };

  // const getContext = () => {
  //   if (winner === null) {
  //     return 'Next: ' + (isP1Turn ? player2 : player1);
  //   } else {
  //     return winner === TIE ? TIE : 'Winner: ' + winner;
  //   }
  // };

  const handlePress = index => {
    if (board[index] === null && winner === null) {
      const newBoard = [...board];
      newBoard[index] = getMark(isP1Turn);

      setContext('Next: ' + getPlayer(!isP1Turn));
      setBoard(newBoard);
      setHistory([...turnHistory, index]);
      checkWinner(newBoard, index);
      setTurn(!isP1Turn);
    }
  };

  // Async bs
  const checkWinner = (ref, lastIndex) => {
    for (let i = 0; i < PATTERNS.length && !winner; i++) {
      if (PATTERNS[i].lastIndexOf(lastIndex) !== -1) {
        const [a, b, c] = PATTERNS[i];

        if (ref[a] && ref[a] === ref[b] && ref[a] === ref[c]) {
          setWinner(getCurrentPlayer);
          setContext('Winner: ' + isP1Turn ? player1 : player2);
        }
      }
    }

    if (winner === null && turnHistory.length === board.length) {
      setWinner(TIE);
      setContext(TIE);
    }
  };

  // MENU FUNCTIONS

  const reset = () => {
    setBoard(Array(LEN * LEN).fill(null));
    setHistory([]);

    setTurn(true);
    setWinner(null);
    setContext('Next: ' + player1);
  };

  const undo = () => {
    const newHistory = [...turnHistory];
    const lastIndex = newHistory.pop();

    if (lastIndex !== undefined) {
      const newBoard = [...board];
      newBoard[lastIndex] = null;

      setBoard(newBoard);
      setHistory(newHistory);
      setTurn(!isP1Turn);
      setWinner(null);
      setContext('Next: ' + isP1Turn ? player1 : player2);
    }
  };

  const back = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.board}>
        {board.map((_, index) => (
          <Square
            key={index}
            mark={board[index]}
            onPress={() => handlePress(index)}
          />
        ))}
      </View>
      <View style={styles.menu}>
        <Text>{context}</Text>
        <MenuButton text={'undo'} onPress={undo} />
        <MenuButton text={'reset'} onPress={reset} />
        <MenuButton text={'back'} onPress={back} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // borderWidth: 1,
    // borderColor: '#b07e1b',
  },
  menu: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GameScreen;

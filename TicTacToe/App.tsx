// App.tsx
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Board from './components/board';

const App = () => {
  const [gameState, setGameState] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);

  const onSquarePress = (idx: number) => {
    const newState = [...gameState];
    if (newState[idx] || calculateWinner(newState)) {
      return;
    }
    newState[idx] = isXNext ? 'X' : 'O';
    setGameState(newState);
    setHistory([...history, newState]);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setGameState(Array(9).fill(null));
    setHistory([Array(9).fill(null)]);
    setIsXNext(true);
  };

  const undoLastMove = () => {
    if (history.length <= 1) {
      return;
    }
    const newHistory = history.slice(0, history.length - 1);
    setGameState(newHistory[newHistory.length - 1]);
    setHistory(newHistory);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(gameState);
  const status = winner
    ? `Gagnant: ${winner}`
    : `Prochain joueur: ${isXNext ? 'X' : 'O'}`;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <Text style={styles.status}>{status}</Text>
      <Board squares={gameState} onPress={onSquarePress} />
      <TouchableOpacity onPress={resetGame} style={styles.button}>
        <Text style={styles.buttonText}>Nouvelle partie</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={undoLastMove} style={styles.button}>
        <Text style={styles.buttonText}>Undo</Text>
      </TouchableOpacity>
    </View>
  );
};

const calculateWinner = (
  squares: Array<'X' | 'O' | null>,
): 'X' | 'O' | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  status: {
    margin: 20,
    fontSize: 20,
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 312,
  },
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
  button: {
    margin: 5,
    padding: 10,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#333',
  },
});

export default App;

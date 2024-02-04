import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Square from './Components/Square';
import Board from './Components/Board';

const App = () => {
  // const [isPlayer1, setTurn] = useState(true);

  return (
    <View style={styles.container}>
      <Board />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;

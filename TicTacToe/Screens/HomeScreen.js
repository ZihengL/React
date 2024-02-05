import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import MenuButton from '../Components/MenuButton';
import Title from '../Components/Title';

const HomeScreen = ({navigation}) => {
  const [player1, setPlayer1] = useState('Player 1');
  const [player2, setPlayer2] = useState('Player 2');

  const startGame = () => {
    console.log('names ' + player1 + ' ' + player2);
    navigation.navigate('Game', {player1, player2});
  };

  const print = () => {
    console.log('poadasdsa');
  };

  return (
    <View style={styles.container}>
      <Title />
      <TextInput
        editable
        style={styles.input}
        onChangeText={text => setPlayer1(text)}
        value={player1}
        placeholder="Player 1"
      />
      <TextInput
        editable
        style={styles.input}
        onChangeText={text => setPlayer2(text)}
        value={player2}
        placeholder="Player 2"
      />
      <MenuButton text="Start Game" onPress={startGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a141e',
  },
  input: {
    width: '80%',
    backgroundColor: '#1B3855',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 20,
    fontSize: 20,
    color: 'white',
    fontFamily: 'Helvetica',
  },
});

export default HomeScreen;

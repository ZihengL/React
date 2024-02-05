import React from 'react';
import {StyleSheet} from 'react-native';
import Button from './Button';

// const Square = () => {
//   const [mark, setMark] = useState(null);

//   const handlePress = isPlayer1 => {
//     if (mark === null) {
//       setMark(isPlayer1 ? 'X' : 'O');
//     }
//   };

//   const playTurn = isPlayer1 => {
//     if (mark === null) {
//       setMark(isPlayer1 ? 'X' : 'O');
//     }
//   };

//   return (
//     <View style={styles.square}>
//       <Text style={styles.mark}>{mark}</Text>
//     </View>
//   );
// };

// const Square = ({onPress, mark}) => {
//   return (
//     <TouchableOpacity style={styles.square} onPress={onPress}>
//       <Text style={styles.mark}>{mark}</Text>
//     </TouchableOpacity>
//   );
// };

const Square = ({mark, onPress}) => {
  return (
    <Button
      text={mark}
      onPress={onPress}
      textStyle={styles.mark}
      btnStyle={styles.square}
    />
  );
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: '#548ec9',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  mark: {
    fontSize: 30,
    color: '#1B3855',
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
});

export default Square;

import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

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

const Square = ({onPress, mark}) => {
  return (
    <TouchableOpacity style={styles.square} onPress={onPress}>
      <Text style={styles.mark}>X</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: '#e7a2',
    border: 'solid',
    borderWidth: 3,
    borderColor: '#1B3855',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mark: {
    fontSize: 30,
    color: '#1B3855',
    fontWeight: 'bold',
    fontFamily: 'Montserrat, sans-serif',
  },
});

export default Square;

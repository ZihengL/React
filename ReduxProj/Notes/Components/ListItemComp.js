import React, {useContext} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {ItemsContext} from '../ItemsContext';

const ListItemComp = ({key, content, onPress}) => {
  const {dispatch} = useContext(ItemsContext);

  const deleteItem = () => {
    dispatch({type: 'REMOVE_ITEM', payload: {id: key}});
  };

  const setComplete = () => {
    dispatch({type: ''})
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity key={key} style={styles.item} onPress={onPress}>
        <Text>{content}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={deleteItem}>
        <Image
          source={require('./../img/trash.png')}
          style={styles.ImageIconStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  item: {
    flex: 1,
    width: '100%',

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    padding: 5,
    margin: 5,
  },
});

export default ListItemComp;

import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Button, StyleSheet} from 'react-native';
import {ItemsContext} from '../ItemsContext';
import ButtonComp from '../Components/ButtonComp';
import ListItemComp from '../Components/ListItemComp';

const ListItemsScreen = ({navigation}) => {
  const {state, dispatch} = useContext(ItemsContext);

  // const removeItem = id => {
  //   dispatch({type: 'REMOVE_NOTE', payload: id});
  // };

  return (
    <View style={styles.container}>
      {state.items.map(item => (
        <ListItemComp
          key={item.id}
          // onPress={() => navigation.navigate('ViewItem', {itemID: item.id})}>
          content={item.content}
          onPress={() => navigation.navigate('ViewItem', {itemID: item.id})}
        />
      ))}

      <ButtonComp text="+" onPress={() => navigation.navigate('AddItem')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default ListItemsScreen;

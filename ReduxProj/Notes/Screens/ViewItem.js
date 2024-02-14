import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {ItemsContext} from '../ItemsContext';
import ButtonComp from '../Components/ButtonComp';

const ViewItemScreen = ({route, navigation}) => {
  const {itemID} = route.params;
  const {state, dispatch} = useContext(ItemsContext);
  const item = state.items.find(i => i.id === itemID);

  const deleteItem = () => {
    dispatch({type: 'REMOVE_ITEM', payload: itemID});
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {item ? (
        <Text style={styles.text}>{item.content}</Text>
      ) : (
        <Text>Item not found</Text>
      )}
      <ButtonComp text="Delete" onPress={deleteItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flexGrow: 1,
    padding: 20,
  },
});

export default ViewItemScreen;

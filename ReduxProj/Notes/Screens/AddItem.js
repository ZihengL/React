import React, {useState, useContext} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {ItemsContext} from '../ItemsContext';
import ButtonComp from '../Components/ButtonComp';

const AddItemScreen = ({navigation}) => {
  const [item, setItem] = useState('');
  const {dispatch} = useContext(ItemsContext);

  const saveItem = () => {
    if (item.trim()) {
      dispatch({type: 'ADD_ITEM', payload: {id: Date.now(), content: item}});
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Write your note here..."
        value={item}
        onChangeText={setItem}
        style={styles.text}
      />
      <ButtonComp text="Save" onPress={saveItem} />
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
    flex: 1,
    padding: 20,
    borderColor: 'gray',
    borderWidth: 0.5,
    width: '95%',
    margin: 20,
  },
});

export default AddItemScreen;

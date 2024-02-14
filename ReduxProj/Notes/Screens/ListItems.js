import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {ItemsContext} from '../ItemsContext';
import ButtonComp from '../Components/ButtonComp';
import ListItemComp from '../Components/ListItemComp';

const ListItemsScreen = ({navigation}) => {
  const {state} = useContext(ItemsContext);

  return (
    <View style={styles.container}>
      <View>
        {state.items.map(item => (
          <ListItemComp
            key={item.id}
            // onPress={() => navigation.navigate('ViewItem', {itemID: item.id})}>
            content={item.content}
            onPress={() => navigation.navigate('ViewItem', {itemID: item.id})}
          />
        ))}
      </View>
      <ButtonComp text="Add" onPress={() => navigation.navigate('AddItem')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    margin: 'auto',
  },
});

export default ListItemsScreen;

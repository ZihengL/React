import React, {useState, useContext} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {ItemsContext} from '../ItemsContext';
import ButtonComp from '../Components/ButtonComp';
import ListItemComp from '../Components/ListItemComp';

const ListItemsScreen = ({navigation}) => {
  const [filter, setFilter] = useState(1);
  const {state} = useContext(ItemsContext);

  const changeFilter = () => {
    if (filter < 3) {
      setFilter(filter + 1);
    } else {
      setFilter(1);
    }
  };

  const getFilterText = () => {
    if (filter === 1) {
      return 'ALL';
    } else if (filter === 2) {
      return 'COMPLETED';
    } else {
      return 'ACTIVE';
    }
  };

  return (
    <View style={styles.container}>
      <View>
        {state.items.map(item => (
          <ListItemComp
            key={item.id}
            content={item.content}
            onPress={() => navigation.navigate('ViewItem', {itemID: item.id})}
          />
        ))}
      </View>
      <ButtonComp text="Add" onPress={() => navigation.navigate('AddItem')} />
      <TouchableOpacity text={getFilterText} onPress={changeFilter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    margin: 'auto',
    flexDirection: 'column',
    padding: 20,
  },
});

export default ListItemsScreen;

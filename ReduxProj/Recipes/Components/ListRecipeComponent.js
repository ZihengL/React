import React, {useContext} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {ACTIONS} from '../Redux/RecipesReducer';

const ListRecipeComponent = ({key, content, onPress}) => {
  const {dispatch} = useContext(RecipesContext);

  const deleteRecipe = () => {
    dispatch({type: 'DELETE', payload: {id: key}});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity key={key} style={styles.item} onPress={onPress}>
        <Text>{content}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={deleteRecipe}>
        <Image
          source={require('../../res/trash.png')}
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

export default ListRecipeComponent;

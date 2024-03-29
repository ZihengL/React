import React, {useState, useContext, useReducer} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

import {recipesReducer} from '../Redux/RecipesReducer';

import {useRecipes} from '../Redux/RecipesContext';
import ButtonComponent from '../Components/ButtonComponent';
import ListRecipeComponent from '../Components/ListRecipeComponent';

const ListRecipesScreen = ({navigation}) => {
  const {recipes} = useRecipes();
  const [val, setVal] = useState('Nah');

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={recipe => recipe.id.toString()}
        renderItem={({item}) => (
          <ListRecipeComponent recipe={item} navigation={navigation} />
        )}
      />
      <Text>{val}</Text>
      <ButtonComponent
        text="+"
        // onPress={() => navigation.navigate('AddRecipe')}
        onPress={() => {
          console.log('pressed');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 0,
    backgroundColor: '#f8f8f8',
  },
});

export default ListRecipesScreen;

import React, {useState, useContext, useReducer} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {recipesReducer} from '../Redux/RecipesReducer';
import {useRecipes} from '../Redux/RecipesContext';
import ButtonComponent from '../Components/ButtonComponent';
import ListRecipeComponent from '../Components/ListRecipeComponent';

const ListRecipesScreen = ({navigation}) => {
  const {recipes} = useRecipes();

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={recipe => recipe.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ViewRecipe', {recipeID: item.id})
            }>
            <View style={styles.recipeName}>
            <Text>{item.name}</Text>
            <Text>{new Date(item.id).toDateString()}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <ButtonComponent
        text="+"
        onPress={() => navigation.navigate('AddRecipe')}
      />
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
  recipeName: {
    backgroundColor: "#2678",
  },
});

export default ListRecipesScreen;

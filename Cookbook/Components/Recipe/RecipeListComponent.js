import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {useRecipes} from '../../redux/RecipesProvider';
// import ListedRecipe from './ListedRecipeComponent';

export default function RecipeListComponent({navigation}) {
  const recipes = useRecipes();

  const onPress = id => {
    navigation.navigate('Recipe', {recipeID: id});
  };

  return (
    <ul style={styles.container}>
      {recipes.map(recipe => {
        <li key={recipe.id}>
          <TouchableOpacity style={styles.recipe} onPress={onPress(recipe.id)}>
            <Text style={styles.title}>{recipe.title}</Text>
            <div>
              <Text style={styles.info}>{recipe.author}</Text>
              <Text style={styles.info}>{recipe.id}</Text>
            </div>
          </TouchableOpacity>
        </li>;
      })}
    </ul>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
    justifyContent: 'start',
  },
  recipe: {
    padding: 5,
    margin: 0,
    borderBottom: 1,
    backgroundColor: '#72A0C1',
    alignItems: 'left',
    justifyContent: 'start',
  },
  title: {
    color: '#1B3855',
    fontFamily: 'Helvetica',
    fontWeight: 30,
    fontSize: 20,
  },
  info: {
    color: '#1B3855',
    fontFamily: 'Helvetica',
    fontWeight: 15,
    fontSize: 12,
  },
});

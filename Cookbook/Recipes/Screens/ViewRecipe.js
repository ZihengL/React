import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRecipes} from '../Redux/RecipesContext';
import ButtonComponent from '../Components/ButtonComponent';

const ViewRecipeScreen = ({route, navigation}) => {
  const {recipes} = useRecipes();
  const {recipeID} = route.params;
  const recipe = recipes.find(r => r.id === recipeID);

  return (
    <View style={styles.container}>
      <Text>{recipe.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'start',
    alignItems: 'left',
  },
  text: {
    flexGrow: 1,
    padding: 20,
  },
});

export default ViewRecipeScreen;

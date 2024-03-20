import React, {useState, useContext} from 'react';
import {View, TextInput, StyleSheet, Text } from 'react-native';

import {useRecipes} from '../Redux/RecipesContext';
import {ACTIONS} from '../Redux/RecipesReducer';
import ButtonComponent from '../Components/ButtonComponent';

const AddRecipeScreen = ({navigation}) => {
  const {dispatch} = useRecipes();

  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [picture, setPicture] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const addRecipe = () => {
    const recipe = {
      id: Date.now(),
      author,
      name,
      picture,
      ingredients,
      instructions,
    };

    dispatch({type: ACTIONS.ADD, payload: recipe});
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NEW RECIPE</Text>

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Author"
        value={author}
        onChangeText={setAuthor}
        style={styles.input}
      />

      <TextInput
        placeholder="Picture"
        value={picture}
        onChangeText={setPicture}
        style={styles.input}
      />

      <TextInput
        placeholder="Ingredients"
        value={ingredients}
        onChangeText={setIngredients}
        style={styles.input}
      />

      <TextInput
        placeholder="Instructions"
        value={instructions}
        onChangeText={setInstructions}
        style={styles.instructions}
        multiline
        numberOfLines={3}
      />

      <ButtonComponent text="Save" onPress={addRecipe} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'start',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    margin: 40,
    color: '#246b7d',
    fontWeight: 'bold',
    fontSize: 30,
    textTransform: 'uppercase',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginBottom: 16,
    color: '#246b7d',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  instructions: {
    flex: 1,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    color: '#246b7d',
    padding: 8,
    textAlignVertical: 'top',
  },
});

export default AddRecipeScreen;

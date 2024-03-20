import React, {useState, useContext} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
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
      name,
      author,
      picture,
      ingredients,
      instructions,
    };

    dispatch({type: ACTIONS.ADD, payload: recipe});
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
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
        style={styles.input}
      />

      <ButtonComponent text="Save" onPress={addRecipe} />
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
  input: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  // input: {
  //   flex: 1,
  //   padding: 20,
  //   borderColor: 'gray',
  //   borderWidth: 0.5,
  //   width: '95%',
  //   margin: 20,
  //   color: '#FFF',
  // },
});

export default AddRecipeScreen;

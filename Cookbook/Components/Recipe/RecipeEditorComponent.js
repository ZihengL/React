import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {
  useRecipes,
  useRecipesDispatch,
  ACTIONS,
} from '../../redux/RecipesProvider';

export default Recipe = ({recipeId = null}) => {
  const recipes = useRecipes();
  const dispatch = useRecipesDispatch();

  // Recipe

  const recipe = recipeId
    ? recipes.find(r => r.id === recipeId)
    : {
        name: '',
        picture: null,
        ingredients: [],
        instructions: '',
      };

  // Vars
  const creationDate = recipe.creationDate;
  const [name, setName] = useState(recipe.name);
  const [picture, setPicture] = useState(recipe.picture);
  const [ingredients, setIngredients] = useState(recipe.ingredients.join(', '));
  const [instructions, setInstructions] = useState(recipe.instructions);

  // Handlers
  const handleUpdate = () => {
    dispatch({
      type: ACTIONS.UPDATE,
      payload: {
        id: recipeId,
        creationDate: creationDate,
        name: name,
        picture: picture,
        ingredients: ingredients.split(', '),
        instructions: instructions,
      },
    });
  };

  const handleDelete = () => {
    dispatch({
      type: ACTIONS.DELETE,
      payload: {id: recipeId},
    });
  };

  return (
    <View>
      <Text>Edit</Text>
      <TextInput value={name} onChangeText={setName} placeholder="Name" />
      <TextInput
        value={ingredients}
        onChangeText={setIngredients}
        placeholder="Ingredient"
      />
      <TextInput
        value={instructions}
        onChangeText={setInstructions}
        placeholder="Instructions"
      />
      <Button title="Save" onPress={handleUpdate} />
      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
};

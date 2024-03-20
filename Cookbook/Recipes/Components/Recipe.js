import React, {useState} from 'react';

const Recipe = ({recipe, dispatch}) => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [picture, setPicture] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  return <div>RecipeComponent</div>;
}

export default Recipe;
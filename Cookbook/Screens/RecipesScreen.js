import React, {useState, useContext} from 'react';
import {RecipesProvider} from '../redux/RecipesProvider';

export default RecipesScreen = ({navigation}) => {
  return (
      <RecipesProvider>
        <h1>Recipes</h1>
      </RecipesProvider>
  );
};

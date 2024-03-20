import React, {useReducer} from 'react';

export const ACTIONS = {
  ADD: 'add',
  UPDATE: 'update',
  DELETE: 'delete',
};

export const recipesReducer = (recipes, action) => {
  const currentRecipes = Array.isArray(recipes) ? recipes : [];

  switch (action.type) {
    case ACTIONS.ADD:
      const recipe = action.payload;

      return [
        ...currentRecipes,
        {
          id: Date.now(),
          name: recipe.name,
          author: recipe.author,
          picture: recipe.picture,
          ingredients: recipe.ingredients,
          instructions: recipe.instructions,
        },
      ];
    case ACTIONS.UPDATE:
      return currentRecipes.map(recipe => {
        if (recipe.id === action.payload.id) {
          return action.payload;
        } else {
          return recipe;
        }
      });
    case ACTIONS.DELETE:
      return currentRecipes.filter(recipe => recipe.id !== action.payload.id);
    default:
      throw Error(`Unknown action: ${action.type}`);
  }
};

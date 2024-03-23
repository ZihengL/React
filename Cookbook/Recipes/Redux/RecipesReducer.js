// import { ACTIONS } from "../Tools/Defaults";
import * as SecureStore from "expo-secure-store";

export const ACTIONS = {
  ADD: "add",
  UPDATE: "update",
  DELETE: "delete",
  SET: "set",
};

export const recipesReducer = (recipes, action) => {
  const currentRecipes = Array.isArray(recipes) ? recipes : [];

  switch (action.type) {
    case ACTIONS.ADD: {
      const recipe = action.payload;
      const newRecipes = [
        ...currentRecipes,
        {
          id: Date.now(),
          user_id: recipe.user_id,
          name: recipe.name,
          author: recipe.author,
          picture: recipe.picture,
          ingredients: recipe.ingredients,
          instructions: recipe.instructions,
        },
      ];

      // SecureStore.setItemAsync(`${recipe.user_id}_recipes`, newRecipes);
      return newRecipes;
    }
    case ACTIONS.UPDATE: {
      const newRecipes = currentRecipes.map((recipe) => {
        if (recipe.id === action.payload.id) {
          return action.payload;
        } else {
          return recipe;
        }
      });

      // SecureStore.setItemAsync(
      //   `${newRecipes[0].user_id}_recipes`,
      //   newRecipes
      // );
      return newRecipes;
    }
    case ACTIONS.DELETE: {
      const newRecipes = currentRecipes.filter(
        (recipe) => recipe.id !== action.payload.id
      );

      // SecureStore.setItemAsync(
      //   `${newRecipes[0].user_id}_recipes`,
      //   newRecipes
      // );
      return newRecipes;
    }
    case ACTIONS.SET: {
      // const retrievedRecipesData = SecureStore.getItemAsync(
      //   `${action.payload}_recipes`
      // );
      // const recipes = retrievedRecipesData ? JSON.parse(recipes) : [];

      return action.payload;
    }
    default:
      throw Error(`Unknown action: ${action.type}`);
  }
};

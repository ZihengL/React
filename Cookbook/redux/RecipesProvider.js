import React, {createContext, useContext, useReducer} from 'react';

const RecipesContext = createContext(null);

const RecipesDispatchContext = createContext(null);

export function useRecipes() {
  return useContext(RecipesContext);
}

export function useRecipesDispatch() {
  return useContext(RecipesDispatchContext);
}

export function RecipesProvider({children}) {
  const [recipes, dispatch] = useReducer(recipesReducer, initialRecipes);

  return (
    <RecipesContext.Provider value={recipes}>
      <RecipesDispatchContext.Provider value={dispatch}>
        {children}
      </RecipesDispatchContext.Provider>
    </RecipesContext.Provider>
  );
}

const ACTIONS = {
  ADD: 'add',
  UPDATE: 'update',
  DELETE: 'delete',
};

function recipesReducer(recipes, action) {
  switch (action.type) {
    case ACTIONS.ADD: {
      return [
        ...recipes,
        {
          id: Date.now(),
          name: action.payload.name,
          author: action.payload.author,
          picture: action.payload.picture,
          ingredients: action.payload.ingredients,
          instructions: action.payload.instructions,
        },
      ];
    }
    case ACTIONS.UPDATE: {
      return recipes.map(recipe => {
        if (recipe.id === action.recipe.id) {
          return {
            ...recipe,
            ...action.payload,
          };
        } else {
          return recipe;
        }
      });
    }
    case ACTIONS.DELETE: {
      return recipes.filter(recipe => recipe.id !== action.payload.id);
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

// new Date(year, month, day, hours, minutes, seconds, milliseconds);
const initialRecipes = [
  {
    id: new Date(2020, 1, 1, 15, 0, 0, 0), 
    name: "Spaghetti & meatballs", 
    author: "Joblo", 
    picture: null, 
    ingredients: ['pasta', 'tomato sauce', 'parsley', 'ground beef', 'salt & pepper'],
    instructions: "Just do it."
  },
  {
    id: new Date(2021, 2, 1, 15, 0, 0, 0), 
    name: "Chocolate chip cookies", 
    author: "Janeblo", 
    picture: null, 
    ingredients: ['all-purpose flour', 'chocolate chips', 'water', 'sugar'],
    instructions: "Just do it."
  },
  {
    id: new Date(2021, 2, 1, 15, 0, 0, 0), 
    name: "Caesar salad", 
    author: "Bob", 
    picture: null, 
    ingredients: ['iceberg lettuce', 'croutons', 'caesar sauce', 'bacon bits', 'salt & pepper'],
    instructions: "Just do it."
  }
];

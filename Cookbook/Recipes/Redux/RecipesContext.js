import React, { createContext, useContext, useReducer, useEffect } from "react";
import { initialState, recipesReducer } from "./RecipesReducer";

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [recipes, dispatch] = useReducer(recipesReducer, []);

  // useEffect(() => {
  //   const newState = { ...recipes, userId: user ? user.id : null };
  // }, [user]);

  return (
    <RecipesContext.Provider value={{ recipes, dispatch }}>
      {children}
    </RecipesContext.Provider>
  );
};

export const useRecipes = () => {
  const context = React.useContext(RecipesContext);

  if (context === undefined) {
    throw new Error("useRecipes must be used within a RecipesProvider");
  }
  return context;
};

// export const useRecipes = () => useContext(RecipesContext);

// import React, { createContext, useState, useContext } from 'react';
import React, { createContext, useState, useContext, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { useRecipes } from "./RecipesContext";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  useEffect(() => {
    loadStayLoggedIn();
  }, [loadStayLoggedIn]);

  const loadStayLoggedIn = async () => {
    try {
      const value = await SecureStore.getItemAsync("stayLoggedIn");
      const userDataString = await SecureStore.getItemAsync("savedUser");
      const userData = userDataString ? JSON.parse(userDataString) : null;

      if (value === "true" && userData) {
        setUser(userData);
        setStayLoggedIn(true);
      } else {
        await SecureStore.deleteItemAsync("savedUser");
        setStayLoggedIn(false);
        setUser(null);
      }
    } catch (error) {
      console.error("Error loading settings", error);
    }
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, stayLoggedIn, setStayLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

export const getSavedUser = async () => {
  const savedUser = await SecureStore.getItemAsync("savedUser");

  if (savedUser) {
    const userDetails = JSON.parse(savedUser);

    return userDetails;
  }

  return null;
};

export const saveRecipes = async (userId, recipes) => {
    try {
        const key = `recipes_${userId}`;
        const jsonValue = JSON.stringify(recipes);
        await SecureStore.setItemAsync(key, jsonValue);
      } catch (error) {
        console.error('Error saving recipes', error);
      }
}

const fetchRecipes = async (userId) => {
    try {
      const key = `recipes_${userId}`;
      const jsonValue = await SecureStore.getItemAsync(key);
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (error) {
      console.error('Error fetching recipes', error);
      return [];
    }
  };
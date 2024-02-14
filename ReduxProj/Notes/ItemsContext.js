import React, {createContext, useReducer} from 'react';
import {initialState, itemsReducer} from './itemsReducer';

export const ItemsContext = createContext();

export const NotesProvider = ({children}) => {
  const [state, dispatch] = useReducer(itemsReducer, initialState);

  return (
    <ItemsContext.Provider value={{state, dispatch}}>
      {children}
    </ItemsContext.Provider>
  );
};

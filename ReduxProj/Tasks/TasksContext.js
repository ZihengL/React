import React, {createContext, useReducer} from 'react';
import {initialState, tasksReducer} from './tasksReducer';

export const TasksContext = createContext();

export const TasksProvider = ({children}) => {
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  return (
    <TasksContext.Provider value={{state, dispatch}}>
      {children}
    </TasksContext.Provider>
  );
};

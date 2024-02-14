export const initialState = {tasks: []};

export const tasksReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {...state, tasks: [...state.tasks, action.payload]};
    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case 'UPDATE_TASK':
      const {id, description, isComplete} = action.payload;
      const newState = [...state];
      newState.map(task => {
        if (task.id === id) {
          task.description = description;
          task.isComplete = isComplete;
        }
      });

      return newState;
    default:
      return state;
  }
};

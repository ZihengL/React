export const initialState = {notes: []};

export const notesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {...state, notes: [...state.notes, action.payload]};
    case 'REMOVE_NOTE':
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload),
      };
    default:
      return state;
  }
};

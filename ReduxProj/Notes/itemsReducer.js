export const initialState = {items: []};

export const itemsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {...state, items: [...state.items, action.payload]};
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'COMPLETE_ITEM':
      const {id, content, complete} = action.payload;
      const newState = [...state];
      newState.map(item => {
        if (item.id === id) {
          item.content = content;
          item.complete = complete;
        }
      });

      return newState;
    default:
      return state;
  }
};

export const compReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {...state, items: [...state.items, action.payload]};
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

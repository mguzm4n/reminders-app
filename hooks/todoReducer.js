export const initialState = {
  pendingItems: [],
};

export const TodoActions = {
  'SET': 'set',
  'ADD': 'add',
};

export const todoReducer = (state, action) => {
  switch(action.type){
    case TodoActions.SET:
      return {
        pendingItems: action.payload.fetchedItems
      };
    case TodoActions.ADD:
      return {
        ...state.pendingItems,
        action.payload.
      };
    default:
      return;
  }
};
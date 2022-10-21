import uuid from 'react-native-uuid';
import { addItemTo } from '../utils.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        pendingItems: action.payload
      };

    case TodoActions.ADD:

      const newPendingItem = {
        id: uuid.v4(),
        ...action.payload.formData,
      };

      addItemTo('pendings', newPendingItem);
      return {
        pendingItems: [
          ...state.pendingItems,
          newPendingItem
        ]
      };

    default:
      return;
  }
};
import uuid from 'uuid';
import {
  GET_ITEMS,
  CREATE_ITEM,
  DELETE_ITEM
} from '../actions/types';

const initialState = {
  items: [
    { id: uuid(), name: 'Eggs0' },
    { id: uuid(), name: 'Eggs1' },
    { id: uuid(), name: 'Eggs2' },
    { id: uuid(), name: 'Eggs3' }
  ]
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state
      }
    default:
      return state;
  }
}
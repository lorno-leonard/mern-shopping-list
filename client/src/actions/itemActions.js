import { GET_ITEMS, CREATE_ITEM, DELETE_ITEM } from "./types";

export const getItems = () => {
  return {
    type: GET_ITEMS
  };
};

export const createItem = item => {
  return {
    type: CREATE_ITEM,
    payload: item
  };
};

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};

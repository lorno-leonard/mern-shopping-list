import axios from "axios";
import { GET_ITEMS, CREATE_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get("/api/items").then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};

export const createItem = item => dispatch => {
  axios.post("/api/items", item).then(res =>
    dispatch({
      type: CREATE_ITEM,
      payload: res.data
    })
  );
};

export const deleteItem = id => dispatch => {
  axios.delete(`/api/items/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};

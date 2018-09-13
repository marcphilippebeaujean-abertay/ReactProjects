import { ADD_EXPENSE, REMOVE_EXPENSE } from "./actionTypes";

export const addExpense = expense => dispatch =>
  dispatch({
    type: ADD_EXPENSE,
    data: expense
  });

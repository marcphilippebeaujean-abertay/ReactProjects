import { ADD_EXPENSE, REMOVE_EXPENSE } from "../actions/Types";

const initialState = {
  itemName: "",
  itemQuantity: 0,
  itemExpense: 0
};

const addExpenseReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default addExpenseReducer;

import { ADD_EXPENSE, REMOVE_EXPENSE } from "../actions/Types";

const initialState = {
  itemIsIncome: false,
  itemName: "",
  itemQuantity: 0,
  itemExpense: 0
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return action.data;
    default:
      return state;
  }
};

export default expenseReducer;

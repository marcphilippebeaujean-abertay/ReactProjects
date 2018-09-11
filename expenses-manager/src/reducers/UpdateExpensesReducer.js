import { ADD_EXPENSE, REMOVE_EXPENSE } from "../actions/Types";

const initialState = {
  itemName: "",
  itemQuantity: 0,
  itemExpense: 0
};

const addExpenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        items: action.data
      };
    default:
      return state;
  }
};

export default addExpenseReducer;

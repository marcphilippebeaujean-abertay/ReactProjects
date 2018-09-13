import { ADD_EXPENSE, REMOVE_EXPENSE } from "../actions/actionTypes";
import { initFormState } from "../components/formComponent";

const defaultState = {
  ...initFormState,
  balance: 100
};

let calculateNewBalance = previousState => {
  let income = previousState.isExpense
    ? previousState.itemExpense * -1 * previousState.itemQuantity
    : previousState.itemExpense * previousState.itemQuantity;
  return previousState.balance + income;
};

const expenseReducer = (previousState = defaultState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return { ...action.data, balance: calculateNewBalance(previousState) }; // return added expense
    default:
      return previousState;
  }
};

export default expenseReducer;

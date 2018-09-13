import actionTypes from "../actions/actionTypes";
import { initFormState } from "../components/formComponent";

const defaultState = {
  ...initFormState,
  balance: 100
};

let calculateNewBalance = (newState, previousBalance) => {
  let income = newState.isExpense
    ? newState.itemExpense * -1 * newState.itemQuantity
    : newState.itemExpense * newState.itemQuantity;
  return previousBalance + income;
};

const expenseReducer = (previousState = defaultState, action) => {
  // create temp since state should never be modifed directly
  let newState = { ...previousState };
  switch (action.type) {
    case actionTypes.ADD_EXPENSE:
      newState = {
        ...initFormState,
        balance: calculateNewBalance(action.data, previousState.balance)
      };
      break;
    case actionTypes.ITEM_NAME_UPDATE:
      newState.itemName = action.data;
      break;
    default:
      break;
  }
  return newState;
};

export default expenseReducer;

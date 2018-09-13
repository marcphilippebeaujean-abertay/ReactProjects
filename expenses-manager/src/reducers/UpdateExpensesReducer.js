import actionTypes from "../actions/actionTypes";
import { initFormState } from "../components/formComponent";

const defaultState = {
  ...initFormState,
  balance: 100
};

let calculateNewBalance = (itemData, previousBalance) => {
  let income = itemData.itemValue * itemData.itemQuantity;
  console.log(itemData.isExpense);
  if (itemData.isExpense) {
    income *= -1;
  }
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
      console.log(JSON.stringify(newState));
      break;
    case actionTypes.ITEM_NAME_UPDATE:
      newState.itemName = action.data;
      break;
    case actionTypes.ITEM_QUANTITY_UPDATE:
      newState.itemQuantity = action.data;
      break;
    case actionTypes.ITEM_VALUE_UPDATE:
      newState.itemValue = action.data;
      break;
    case actionTypes.FORM_WARNING:
      newState.warningMessage = action.data;
      break;
    default:
      break;
  }
  return newState;
};

export default expenseReducer;

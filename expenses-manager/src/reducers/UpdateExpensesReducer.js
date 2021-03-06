import actionTypes from "../actions/actionTypes";

const initFormState = {
  itemName: "",
  itemQuantity: 0,
  itemValue: 0,
  isExpense: false,
  warningMessage: ""
};

const defaultState = {
  ...initFormState,
  balance: 100,
  transactionHistory: [],
  uniqueTransactionID: 0
};

let calculateIncome = item => {
  let income = Number(item.itemValue) * Number(item.itemQuantity);
  if (item.isExpense) {
    income *= -1;
  }
  return income;
};

const expenseReducer = (previousState = defaultState, action) => {
  // create temp since state should never be modifed directly
  let newState = { ...previousState };
  switch (action.type) {
    case actionTypes.ADD_EXPENSE:
      newState = {
        ...initFormState,
        balance: calculateIncome(action.data) + previousState.balance,
        transactionHistory: previousState.transactionHistory.concat({
          ...action.data,
          uniqueTransactionID: previousState.uniqueTransactionID
        }),
        uniqueTransactionID: previousState.uniqueTransactionID + 1
      };
      break;
    case actionTypes.REMOVE_EXPENSE:
      newState.transactionHistory = previousState.transactionHistory.filter(
        elem => elem.uniqueTransactionID !== action.data.uniqueTransactionID
      );
      newState.balance = previousState.balance - calculateIncome(action.data);
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

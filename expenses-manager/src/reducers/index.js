import { combineReducers } from "redux";
import addExpenseReducer from "./AddExpenseReducer";

export default combineReducers({
  addExpense: addExpenseReducer
});

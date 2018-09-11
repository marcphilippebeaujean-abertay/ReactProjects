import { combineReducers } from "redux";
import addExpenseReducer from "./UpdateExpensesReducer";

export default combineReducers({
  addExpense: addExpenseReducer
});

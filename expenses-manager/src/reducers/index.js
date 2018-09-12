import { combineReducers } from "redux";
import expenseReducer from "./UpdateExpensesReducer";

export default combineReducers({
  expenses: expenseReducer
});

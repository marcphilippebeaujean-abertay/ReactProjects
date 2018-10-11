import navigationReducer from "./navigationReducer";
import contactsFormReducer from "./contactsFormReducer";
import contentReducer from "./contentReducer";
import calculatorReducer from "./calculatorReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  navReducer: navigationReducer,
  contactsFormReducer: contactsFormReducer,
  contentReducer: contentReducer,
  calcReducer: calculatorReducer
});

export default rootReducer;

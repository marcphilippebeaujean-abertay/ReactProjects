import navigationReducer from "./navigationReducer";
import contactsFormReducer from "./contactsFormReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  navReducer: navigationReducer,
  contactsFormReducer: contactsFormReducer
});

export default rootReducer;

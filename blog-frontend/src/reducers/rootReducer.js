import navigationReducer from "./navigationReducer";
import contactsFormReducer from "./contactsFormReducer";
import contentReducer from "./contentReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  navReducer: navigationReducer,
  contactsFormReducer: contactsFormReducer,
  contentReducer: contentReducer
});

export default rootReducer;

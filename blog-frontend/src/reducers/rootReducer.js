import navigationReducer from "./navigationReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  navReducer: navigationReducer
});

export default rootReducer;

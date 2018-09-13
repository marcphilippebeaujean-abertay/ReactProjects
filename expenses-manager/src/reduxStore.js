import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import expenseReducer from "./reducers/updateExpensesReducer";
import { initFormState } from "./components/formComponent";

const initialState = {
  ...initFormState,
  balance: 100
};

const middleware = [thunk];

const store = createStore(
  expenseReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

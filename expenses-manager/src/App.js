import React, { Component } from "react";
import "./App.css";
import store from "./reduxStore";
import "./components/formComponent";
import BalanceDisplayComponent from "./components/balanceDisplayComponent";
import FormComponent from "./components/formComponent";
import TransactionList from "./components/transactionList";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store} className="App">
        <div className="App">
          <BalanceDisplayComponent />
          <FormComponent />
          <TransactionList />
        </div>
      </Provider>
    );
  }
}

export default App;

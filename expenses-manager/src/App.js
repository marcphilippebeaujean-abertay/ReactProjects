import React, { Component } from "react";
import "./App.css";
import store from "./Store.js";
import "./components/FormComponent.jsx";
import BalanceDisplayComponent from "./components/BalanceDisplayComponent.jsx";
import FormComponent from "./components/FormComponent.jsx";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store} className="App">
        <div className="App">
          <BalanceDisplayComponent />
          <div id="form-background">
            <FormComponent />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

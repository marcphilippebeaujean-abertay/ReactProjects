import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Calculator from "./components/calculator";
import store from "./reduxStore";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React Calculator</h1>
          </header>
          <div id="calculator-container">
            <Calculator />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Calculator from "./components/calculator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Calculator</h1>
        </header>
        <div id="calculator-container">
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;

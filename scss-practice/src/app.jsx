import React, { Component } from "react";
import logo from "./logo.svg";
import "./css/style.css";
import FlickeringTextComponent from "./components/flickeringText";
import AnimatedCircle from "./components/animatedCircle";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CSS Demo Projects</h1>
        </header>
        <FlickeringTextComponent />
        <AnimatedCircle />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import ButtonInterface from "./buttonInterface";
import "../css/style.css";

export default class Calculator extends Component {
  render() {
    return (
      <div id="calculator">
        <p className="button-text calculation-display">0</p>
        <ButtonInterface />
      </div>
    );
  }
}

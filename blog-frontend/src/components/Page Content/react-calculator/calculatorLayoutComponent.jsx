import React, { Component } from "react";
import ReactCalculator from "./calculator";
import "../../../css/style.css";

export default class CalculatorLayoutComponent extends Component {
  render() {
    return (
      <div id="calculator-layout">
        <div className="align-vertically">
          <h2 id="react-calculator-header">React Calculator</h2>
          <ReactCalculator />
        </div>
      </div>
    );
  }
}

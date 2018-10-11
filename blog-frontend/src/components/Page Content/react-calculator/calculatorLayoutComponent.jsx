import React, { Component } from "react";
import ReactCalculator from "./calculator";
import "../../../css/style.css";

export default class CalculatorLayoutComponent extends Component {
  render() {
    return (
      <div id="calculator-layout">
        <ReactCalculator />
      </div>
    );
  }
}

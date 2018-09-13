import React, { Component } from "react";
import "./balanceDisplayComponent.css";
import { connect } from "react-redux";
import { moneyRegex } from "../usefulConstants/regex";

class BalanceDisplayComponent extends Component {
  getBalanceDisplay = () => {
    let balanceString = this.props.balance.toString();
    let regexMatch = balanceString.match(moneyRegex); // matches everything after "."
    if (regexMatch !== null) {
      console.log(regexMatch[1].length);
    }
    if (regexMatch === null) {
      balanceString += ".00";
    } else if (regexMatch[1].length === 1) {
      balanceString += "0";
    } else {
      if (regexMatch[1].length !== 2) {
        console.log("strange balance regex result!");
      }
    }
    return balanceString + "£";
  };

  render() {
    return (
      <div id="cash-display">
        <h1
          style={
            this.props.balance > 0 ? { color: "#28a745" } : { color: "#dc3545" }
          }
        >
          {this.getBalanceDisplay()}
        </h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    balance: state.balance
  };
};

export default connect(
  mapStateToProps,
  null
)(BalanceDisplayComponent);

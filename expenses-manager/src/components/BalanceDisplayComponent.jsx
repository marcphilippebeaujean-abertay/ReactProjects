import React, { Component } from "react";
import "./balanceDisplayComponent.css";
import { connect } from "react-redux";

class BalanceDisplayComponent extends Component {
  render() {
    return (
      <div id="cash-display">
        <h1
          style={
            this.props.balance > 0 ? { color: "#28a745" } : { color: "#dc3545" }
          }
        >
          {this.props.balance}
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

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { convertNumToBalance } from "../usefulConstants/balanceManagement";
import "./transactionList.css";

class TransactionList extends Component {
  generateTransactionList = () => {
    return this.props.transactionHistory.map(elem => (
      <li
        key={elem.uniqueTransactionID}
        style={elem.isExpense ? { color: "#dc3545" } : { color: "#28a745" }}
        className="transaction-list-item"
      >
        <p className="list-item">{elem.itemName}</p>
        <p className="list-item">
          {convertNumToBalance(elem.itemValue * elem.itemQuantity)}
        </p>
        <div className="list-item">
          <button className="removal-btn list-item btn btn-danger">-</button>
        </div>
      </li>
    ));
  };

  render() {
    return <ul className="income-list">{this.generateTransactionList()}</ul>;
  }
}

TransactionList.propTypes = {
  transactionHistory: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    transactionHistory: state.transactionHistory
  };
};

export default connect(
  mapStateToProps,
  null
)(TransactionList);

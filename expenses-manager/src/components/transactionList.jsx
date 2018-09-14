import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { convertNumToBalance } from "../usefulConstants/balanceManagement";

class TransactionList extends Component {
  generateTransactionList = isExpensesList => {
    const style = isExpensesList ? { color: "#dc3545" } : { color: "#28a745" };
    const incomeList = this.props.transactionHistory.filter(
      elem => elem.isExpense === isExpensesList
    );
    const listElements = incomeList.map(elem => (
      <li key={elem.uniqueTransactionID} style={style}>
        {elem.itemName}
        {convertNumToBalance(elem.itemValue)}
      </li>
    ));
    return listElements;
  };

  render() {
    return (
      <div>
        <ul className="income-list">{this.generateTransactionList(false)}</ul>
      </div>
    );
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

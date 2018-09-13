import React, { Component } from "react";
import PropTypes from "prop-types";
import actionTypes from "../actions/actionTypes";
import "./FormComponent.css";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";

const badInputWarningMessage = "Error: Invalid Input!";

export const initFormState = {
  itemName: "",
  itemQuantity: 0,
  itemExpense: 0,
  isExpense: false,
  warningMessage: ""
};

class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.handleItemNameInput = this.handleItemNameInput.bind(this);
  }
  handleItemNameInput = event => {
    this.props.onItemNameUpdated({ itemName: event.target.value });
  };

  handleItemExpenseInput = event => {
    //this.setState({ itemExpense: event.target.value });
  };

  handleItemQuantityInput = event => {
    //this.setState({ itemQuantity: event.target.value });
  };

  validInput = (itemName, itemQuantity, itemExpense) => {
    if (itemName === "") {
      return false;
    } else if (itemQuantity <= 0) {
      return false;
    } else if (itemExpense <= 0) {
      return false;
    } else {
      return true;
    }
  };

  onItemSubmit = isIncome => {
    const { itemName, itemQuantity, itemExpense } = this.props;
    if (this.validInput(itemName, itemQuantity, itemExpense)) {
      const item = {
        itemIsIncome: isIncome,
        itemName: itemName,
        itemQuantity: itemQuantity,
        itemExpense: itemExpense
      };
      // DISPATCH UPDATE TO STAE
    } else {
      // DISPATCH WARNING MESSAGE TO STATE
    }
  };

  render() {
    return (
      <React.Fragment>
        <div id="form-background">
          <div id="form-main">
            <input
              id="item-name-form"
              className="form-element"
              placeholder="Item description..."
              type="text"
              value={this.props.itemName}
              onChange={this.handleItemNameInput}
            />
            <label className="form-label">Value</label>
            <input
              id="item-expense-form"
              className="form-element"
              type="number"
              value={this.props.itemExpense}
              onChange={this.handleItemExpenseInput}
            />
            <label className="form-label">Quantity</label>
            <input
              id="item-quantity-form"
              className="form-element"
              type="number"
              value={this.props.itemQuantity}
              onChange={this.handleItemQuantityInput}
            />
            <div className="form-buttons-background">
              <button
                id="income-btn"
                className="btn btn-success submits"
                onClick={() => this.onItemSubmit(true)}
              >
                +
              </button>
              <button
                id="expense-btn"
                className="btn btn-danger submits"
                onClick={() => this.onItemSubmit(false)}
              >
                -
              </button>
            </div>
          </div>
        </div>
        <div id="warning-message">
          <p>{this.props.warningMessage}</p>
        </div>
      </React.Fragment>
    );
  }
}

FormComponent.propTypes = {
  itemName: PropTypes.string.isRequired,
  itemQuantity: PropTypes.number.isRequired,
  itemExpense: PropTypes.number.isRequired,
  isExpense: PropTypes.bool.isRequired,
  warningMessage: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    itemName: state.itemName,
    itemQuantity: state.itemQuantity,
    itemExpense: state.itemExpense,
    isExpense: state.isExpense,
    warningMessage: state.warningMessage
  };
};

const mapDispatchToProps = (dispatch, actionData) => {
  return {
    onItemNameUpdated: () =>
      dispatch({ type: actionTypes.ITEM_NAME_UPDATE, ...actionData }),
    onAddedExpense: () =>
      dispatch({ type: actionTypes.ADD_EXPENSE, ...actionData })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormComponent);

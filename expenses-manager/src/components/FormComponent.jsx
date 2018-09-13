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
  itemValue: 0,
  isExpense: false,
  warningMessage: ""
};

class FormComponent extends Component {
  handleItemNameInput = event => {
    this.props.onItemNameUpdated(event.target.value);
  };

  handleItemExpenseInput = event => {
    this.props.onItemValueUpdated(Number(event.target.value));
  };

  handleItemQuantityInput = event => {
    this.props.onItemQuantityUpdated(Number(event.target.value));
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
        itemName,
        itemQuantity,
        itemExpense
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
              value={this.props.itemValue}
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
  itemValue: PropTypes.number.isRequired,
  isExpense: PropTypes.bool.isRequired,
  warningMessage: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    itemName: state.itemName,
    itemQuantity: state.itemQuantity,
    itemValue: state.itemValue,
    isExpense: state.isExpense,
    warningMessage: state.warningMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onItemNameUpdated: itemName =>
      dispatch({ type: actionTypes.ITEM_NAME_UPDATE, data: itemName }),
    onItemValueUpdated: itemValue =>
      dispatch({ type: actionTypes.ITEM_VALUE_UPDATE, data: itemValue }),
    onItemQuantityUpdated: itemQuantity =>
      dispatch({ type: actionTypes.ITEM_QUANTITY_UPDATE, data: itemQuantity }),
    onInputError: () =>
      dispatch({
        type: actionTypes.FORM_WARNING,
        data: badInputWarningMessage
      }),
    onAddedExpense: formProps =>
      dispatch({ type: actionTypes.ADD_EXPENSE, data: formProps })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormComponent);

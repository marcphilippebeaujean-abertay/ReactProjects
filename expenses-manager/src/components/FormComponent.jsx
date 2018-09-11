import React, { Component } from "react";
import "./FormComponent.css";
import "bootstrap/dist/css/bootstrap.css";

class FormComponent extends Component {
  state = {
    itemName: "",
    itemQuantity: 0,
    itemExpense: 0
  };

  handleItemNameInput = event => {
    this.setState({ itemName: event.value });
  };

  handleItemExpenseInput = event => {
    this.setState({ itemExpense: event.value });
  };

  handleItemQuantityInput = event => {
    this.setState({ itemQuantity: event.value });
  };

  render() {
    return (
      <div id="form-main">
        <label className="form-label">Item Name</label>
        <input
          id="item-name-form"
          className="form-element"
          type="text"
          value={this.state.itemName}
          onChange={this.handleItemNameInput}
        />
        <label className="form-label">Value</label>
        <input
          id="item-expense-form"
          className="form-element"
          type="number"
          value={this.state.itemExpense}
          onChange={this.handleItemExpenseInput}
        />
        <label className="form-label">Quantity</label>
        <input
          id="item-quantity-form"
          className="form-element"
          type="number"
          value={this.state.itemQuantity}
          onChange={this.handleItemQuantityInput}
        />
        <div className="form-buttons-background">
          <button id="income-btn" className="btn btn-outline-success submits">
            Income
          </button>
          <button id="expense-btn" className="btn btn-outline-danger submits">
            Expense
          </button>
        </div>
      </div>
    );
  }
}

export default FormComponent;

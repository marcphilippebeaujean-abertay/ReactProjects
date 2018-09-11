import React, { Component } from "react";
import "./FormComponent.css";

class FormComponent extends Component {
  state = {
    itemName: "",
    itemQuantity: 0,
    itemExpense: 0
  };

  handleInputChange = event => {
    this.setState({ itemName: event.value });
  };

  render() {
    return (
      <div id="form-main">
        <input
          id="item-name-form"
          type="text"
          value={this.state.itemName}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default FormComponent;

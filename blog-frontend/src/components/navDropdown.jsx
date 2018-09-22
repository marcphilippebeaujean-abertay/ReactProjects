import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/style.css";

export default class NavDropDown extends Component {
  dropdownList = this.props.dropDownElements.map((dropdownName, index) => (
    <button key={index} className="nav-element nav-element-dropdown">
      <p key={index}>{dropdownName}</p>
    </button>
  ));
  render() {
    return <div className="nav-dropdown-vertical">{this.dropdownList}</div>;
  }
}

NavDropDown.propTypes = {
  dropDownElements: PropTypes.array.isRequired
};

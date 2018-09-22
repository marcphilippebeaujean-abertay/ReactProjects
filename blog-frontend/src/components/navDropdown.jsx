import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../css/style.css";

class NavDropDown extends Component {
  dropdownList = this.props.dropDownElements.map((dropdownName, index) => (
    <button key={index} className="nav-element nav-element-dropdown">
      <p key={index}>{dropdownName}</p>
    </button>
  ));
  render() {
    {
      return this.dropdownList;
    }
  }
}

NavDropDown.propTypes = {
  dropDownElements: PropTypes.array.isRequired
};

export default NavDropDown;

import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/style.css";

export default class ButtonComponent extends Component {
  render() {
    return (
      <button style={this.props.bgStyle} className="btn-calc button-text">
        {this.props.btnText}
      </button>
    );
  }
}

ButtonComponent.propTypes = {
  btnText: PropTypes.string.isRequired,
  bgStyle: PropTypes.object.isRequired
};

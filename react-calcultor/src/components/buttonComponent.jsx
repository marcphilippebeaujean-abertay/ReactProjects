import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../css/style.css";

class ButtonComponent extends Component {
  render() {
    return (
      <button
        style={this.props.bgStyle}
        onClick={() => this.props.onButtonPressed(this)}
        className="btn-calc button-text interface-btn"
      >
        {this.props.btnText}
      </button>
    );
  }
}

ButtonComponent.propTypes = {
  btnText: PropTypes.string.isRequired,
  bgStyle: PropTypes.object.isRequired,
  onButtonPressed: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onButtonPressed: button =>
      dispatch({
        type: "BUTTON_PRESSED",
        data: button.props.btnText
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ButtonComponent);

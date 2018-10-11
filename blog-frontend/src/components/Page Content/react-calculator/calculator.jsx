import React, { Component } from "react";
import ButtonInterface from "./buttonInterface";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../../css/style.css";

class Calculator extends Component {
  render() {
    return (
      <div id="calculator">
        <p className="button-text calculation-display" id="prev-cal-display">
          {this.props.calcDisplay}
        </p>
        <p className="button-text calculation-display">
          {this.props.currentInputDisplay}
        </p>
        <ButtonInterface />
      </div>
    );
  }
}

Calculator.propTypes = {
  calcDisplay: PropTypes.string.isRequired,
  currentInputDisplay: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    calcDisplay: state.calcReducer.calcDisplay,
    currentInputDisplay: state.calcReducer.currentInputDisplay
  };
};

export default connect(
  mapStateToProps,
  null
)(Calculator);

import React, { Component } from "react";
import ButtonInterface from "./buttonInterface";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../css/style.css";

class Calculator extends Component {
  render() {
    return (
      <div id="calculator">
        <p className="button-text calculation-display" id="prev-cal-display">
          {this.props.previousCalcDisplay}
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
  previousCalcDisplay: PropTypes.string.isRequired,
  currentInputDisplay: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    previousCalcDisplay: state.previousCalcDisplay,
    currentInputDisplay: state.currentInputDisplay
  };
};

export default connect(
  mapStateToProps,
  null
)(Calculator);

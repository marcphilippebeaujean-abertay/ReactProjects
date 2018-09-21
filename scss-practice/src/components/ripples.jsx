import React, { Component } from "react";
import "../css/style.css";

export default class RippleWaves extends Component {
  render() {
    return (
      <div className="frame" id="ripples-bg">
        <div id="ripple-container">
          <div className="ripple-circle" id="ripple-1">
            <div className="water-circle" />
          </div>
        </div>
      </div>
    );
  }
}

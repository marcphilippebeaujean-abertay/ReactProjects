import React, { Component } from "react";
import "../css/style.css";

export default class BouncingCircles extends Component {
  render() {
    return (
      <div className="frame" id="bouncing-circles-bg">
        <div id="bouncing-crcl-div">
          <div className="bouncing-crcl" id="bouncing-crcl-1" />
          <div className="bouncing-crcl" id="bouncing-crcl-2" />
          <div className="bouncing-crcl" id="bouncing-crcl-3" />
          <div className="bouncing-crcl" id="bouncing-crcl-4" />
        </div>
      </div>
    );
  }
}

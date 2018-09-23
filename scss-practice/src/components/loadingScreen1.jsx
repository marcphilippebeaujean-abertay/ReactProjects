import React, { Component } from "react";
import "../css/style.css";

export default class LoadingScreen_1 extends Component {
  render() {
    return (
      <div className="frame" id="ripples-bg">
        <div id="bar-background">
          <div id="loading-bar" />
        </div>
      </div>
    );
  }
}

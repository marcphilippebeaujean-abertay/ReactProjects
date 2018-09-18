import React, { Component } from "react";
import "../css/style.css";

export default class KidPortrait extends Component {
  render() {
    return (
      <div className="frame" id="kid-p-background">
        <div id="kid-face-features">
          <div className="kid-eye" />
        </div>
        <div id="kid-main">
          <div id="kid-face" className="kid-black-border" />
          <div id="kid-shirt" className="kid-black-border" />
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "../css/style.css";

class FlickeringTextComponent extends Component {
  render() {
    return (
      <div className="frame" id="hi-frame">
        <div id="word">
          <div className="letter" id="letter-H">
            <div className="letter-component letter-H-side" />
            <div className="letter-component" id="letter-H-middle" />
            <div className="letter-component letter-H-side" />
          </div>
          <div className="letter" id="letter-I">
            <div className="letter-component letter-I-top" />
            <div className="letter-component" id="letter-I-base" />
            <div className="letter-component letter-I-top" />
          </div>
        </div>
      </div>
    );
  }
}

export default FlickeringTextComponent;

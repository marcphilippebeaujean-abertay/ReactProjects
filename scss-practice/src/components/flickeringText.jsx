import React, { Component } from "react";
import "../css/style.css";

class FlickeringTextComponent extends Component {
  render() {
    return (
      <div className="frame" id="hi-frame">
        <div id="word-vertical-center">
          <div id="word">
            <div className="letter" id="letter-H">
              <div className="letter-component letter-H-side letter-component-1" />
              <div
                className="letter-component  letter-component-2"
                id="letter-H-middle"
              />
              <div className="letter-component letter-H-side letter-component-3" />
            </div>
            <div className="letter" id="letter-I">
              <div className="letter-component letter-I-top letter-component-4" />
              <div
                className="letter-component letter-component-5"
                id="letter-I-middle"
              />
              <div className="letter-component letter-I-top letter-component-6" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FlickeringTextComponent;

import React, { Component } from "react";
import "../css/style.css";

class AnimatedCircle extends Component {
  componentDidMount() {
    console.log("circle div mounted!");
  }
  render() {
    return (
      <div className="frame" id="anim-circle-frame">
        <div id="circle">
          <div id="top-half">
            <div className="circle-fragment circle-fragment-1" id="top-left" />
            <div className="circle-fragment circle-fragment-2" id="top-right" />
          </div>
          <div id="bottom-half">
            <div
              className="circle-fragment  circle-fragment-3"
              id="bottom-left"
            />
            <div
              className="circle-fragment circle-fragment-4"
              id="bottom-right"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AnimatedCircle;

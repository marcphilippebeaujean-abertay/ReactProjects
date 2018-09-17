import React, { Component } from "react";
import ButtonComponent from "./buttonComponent";
import "../css/style.css";

const operatorBtnStyle = {
  backgroundColor: "#60605f"
};

const numberBtnStyle = {
  backgroundColor: "#6d7582"
};

const redBtnStyle = {
  backgroundColor: "#a81906",
  gridColumnStart: 1,
  gridColumnEnd: 3
};

const equalsStyle = {
  backgroundColor: "#2377ff",
  gridColumn: 4,
  gridRowStart: 4,
  gridRowEnd: 6
};

export default class ButtonInterface extends Component {
  render() {
    return (
      <div id="button-grid">
        <ButtonComponent btnText="AC" bgStyle={redBtnStyle} />
        <ButtonComponent btnText="/" bgStyle={operatorBtnStyle} />
        <ButtonComponent btnText="x" bgStyle={operatorBtnStyle} />
        <ButtonComponent btnText="7" bgStyle={numberBtnStyle} />
        <ButtonComponent btnText="8" bgStyle={numberBtnStyle} />
        <ButtonComponent btnText="9" bgStyle={numberBtnStyle} />
        <ButtonComponent btnText="-" bgStyle={operatorBtnStyle} />
        <ButtonComponent btnText="4" bgStyle={numberBtnStyle} />
        <ButtonComponent btnText="5" bgStyle={numberBtnStyle} />
        <ButtonComponent btnText="6" bgStyle={numberBtnStyle} />
        <ButtonComponent btnText="+" bgStyle={operatorBtnStyle} />
        <ButtonComponent btnText="1" bgStyle={numberBtnStyle} />
        <ButtonComponent btnText="2" bgStyle={numberBtnStyle} />
        <ButtonComponent btnText="3" bgStyle={numberBtnStyle} />
        <ButtonComponent btnText="=" bgStyle={equalsStyle} />
        <ButtonComponent
          btnText="0"
          bgStyle={{
            ...numberBtnStyle,
            gridColumnStart: 1,
            gridColumnEnd: 3
          }}
        />
        <ButtonComponent btnText="." bgStyle={numberBtnStyle} />
      </div>
    );
  }
}

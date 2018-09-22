import React, { Component } from "react";
import NavDropdown from "./navDropdown";
import "../css/style.css";

export default class NavBar extends Component {
  render() {
    return (
      <div id="nav-div">
        <button className="nav-element nav-element-main" id="nav-left-element">
          <p>home</p>
        </button>
        <button className="nav-element nav-element-main">
          <p>archive</p>
        </button>
        <button className="nav-element nav-element-main">
          <p>projects</p>
        </button>
        <NavDropdown dropDownElements={["games", "websites", "software"]} />
        <button className="nav-element nav-element-main">
          <p>resume</p>
        </button>
        <button className="nav-element nav-element-main" id="nav-right-element">
          <p>contact</p>
        </button>
      </div>
    );
  }
}

import React, { Component } from "react";
import NavDropdown from "./navDropdown";
import "../css/style.css";

class NavBar extends Component {
  render() {
    return (
      <nav id="nav-div">
        <div className="nav-element nav-element-main" id="nav-left-element">
          <p>home</p>
        </div>
        <div className="nav-element nav-element-main">
          <p>archive</p>
        </div>
        <div className="nav-element nav-element-main" id="nav-element-projects">
          <p>projects</p>
          <div className="nav-dropdown-vertical" id="projects-dropdown">
            <NavDropdown dropDownElements={["games", "software", "web"]} />
          </div>
        </div>
        <div className="nav-element nav-element-main">
          <p>resume</p>
        </div>
        <div className="nav-element nav-element-main" id="nav-right-element">
          <p>contact</p>
        </div>
      </nav>
    );
  }
}

export default NavBar;

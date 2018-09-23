import React, { Component } from "react";
import "../css/style.css";

class NavDropDown extends Component {
  render() {
    return (
      <div className="dropdown-vertical" id="projects-dropdown">
        <div className="nav-element project-dropdown-element">
          <p>games</p>
        </div>
        <div className="nav-element project-dropdown-element">
          <p>web</p>
        </div>
        <div className="nav-element project-dropdown-element">
          <p>software</p>
        </div>
      </div>
    );
  }
}

export default NavDropDown;

import React, { Component } from "react";
import NavGamesDropdown from "./navGamesDropdown";
import "../css/style.css";

class NavDropDown extends Component {
  render() {
    return (
      <div className="dropdown-vertical" id="projects-dropdown">
        <div
          className="nav-element project-dropdown-element"
          id="games-dropdown-div"
        >
          <p>
            games
            <i className="arrow arrow-right" id="games-arrow" />
          </p>
          <NavGamesDropdown />
        </div>
        <div className="nav-element project-dropdown-element">
          <p>
            web
            <i className="arrow arrow-right" />
          </p>
        </div>
        <div className="nav-element project-dropdown-element">
          <p>software</p>
        </div>
      </div>
    );
  }
}

export default NavDropDown;

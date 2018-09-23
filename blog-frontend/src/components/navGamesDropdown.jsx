import React, { Component } from "react";
import "../css/style.css";

export default class NavGamesDropdown extends Component {
  render() {
    return (
      <div id="games-dropdown">
        <div className="nav-element project-dropdown-element">
          <p>she-town</p>
        </div>
        <div className="nav-element project-dropdown-element">
          <p>indestructible</p>
        </div>
      </div>
    );
  }
}

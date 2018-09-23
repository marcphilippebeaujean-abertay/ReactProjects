import React, { Component } from "react";
import "../css/style.css";

export default class NavGamesDropdown extends Component {
  render() {
    return (
      <div id="games-dropdown">
        <div
          className="nav-element project-dropdown-element scndry-dd"
          id="she-town-dropdown"
        >
          <p>she-town</p>
        </div>
        <div
          className="nav-element project-dropdown-element scndry-dd"
          id="indestructible-dropdown"
        >
          <p>indestructible</p>
        </div>
      </div>
    );
  }
}

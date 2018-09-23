import React, { Component } from "react";
import "../css/style.css";

export default class NavGamesDropdown extends Component {
  render() {
    return (
      <div className="scndry-dd" id="games-dropdown">
        <div
          className="nav-element project-dropdown-element scndry-dd-elem"
          id="she-town-dropdown"
        >
          <p>she-town</p>
        </div>
        <div
          className="nav-element project-dropdown-element scndry-dd-elem"
          id="indestructible-dropdown"
        >
          <p>indestructible</p>
        </div>
      </div>
    );
  }
}

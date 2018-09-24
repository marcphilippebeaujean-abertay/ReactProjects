import React, { Component } from "react";
import "../css/style.css";

export default class NavGamesDropdown extends Component {
  onClickNavBtn = event => {
    console.log("clicked!");
  };

  render() {
    return (
      <div className="scndry-dd" id="games-dropdown">
        <button
          className="nav-element project-dropdown-element scndry-dd-elem"
          id="she-town-dropdown"
          onClick={this.onClickNavBtn}
        >
          <p>she-town</p>
        </button>
        <button
          className="nav-element project-dropdown-element scndry-dd-elem"
          id="indestructible-dropdown"
          onClick={this.onClickNavBtn}
        >
          <p>indestructible</p>
        </button>
      </div>
    );
  }
}

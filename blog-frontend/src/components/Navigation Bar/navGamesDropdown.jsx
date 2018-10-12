import React, { Component } from "react";
import DropdownButton from "./dropdownButton";
import SecondaryDropdownLayout from "./secondaryDropdownLayout";
import "../../css/style.css";
import SheTownLogo from "../../media/she-town-player.png";
import TMFLogo from "../../media/tmf-logo.png";
import { Link } from "react-router-dom";

export default class NavGamesDropdown extends Component {
  render() {
    return (
      <SecondaryDropdownLayout sidebarId="games">
        <a
          href="https://www.themissingfew.com/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <DropdownButton styleId="tmf-dropdown">
            <img src={TMFLogo} alt="The Missing Few Logo" id="tmf-logo" />
          </DropdownButton>
        </a>
        <Link to="/she-town" style={{ textDecoration: "none" }}>
          <DropdownButton styleId="she-town-dropdown">
            <img
              src={SheTownLogo}
              alt="Character from She-Town"
              className="logo-img"
              id="she-town-logo"
            />
            <p id="she-town-text">she-town</p>
          </DropdownButton>
        </Link>
        <DropdownButton styleId="indestructible-dropdown">
          <p>indestructible</p>
        </DropdownButton>
      </SecondaryDropdownLayout>
    );
  }
}

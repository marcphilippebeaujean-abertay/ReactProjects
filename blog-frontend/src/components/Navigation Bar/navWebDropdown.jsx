import React, { Component } from "react";
import DropdownButton from "./dropdownButton";
import SecondaryDropdownLayout from "./secondaryDropdownLayout";
import "../../css/style.css";
import { Link } from "react-router-dom";

export default class NavWebDropdown extends Component {
  render() {
    return (
      <SecondaryDropdownLayout sidebarId="web">
        <Link to="/she-town" style={{ textDecoration: "none" }}>
          <DropdownButton styleId="react-calculator">
            <p id="she-town-text">React Calculator</p>
          </DropdownButton>
        </Link>
      </SecondaryDropdownLayout>
    );
  }
}

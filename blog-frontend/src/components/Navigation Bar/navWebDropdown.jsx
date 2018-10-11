import React, { Component } from "react";
import DropdownButton from "./dropdownButton";
import SecondaryDropdownLayout from "./secondaryDropdownLayout";
import "../../css/style.css";
import { Link } from "react-router-dom";
import ReactLogo from "../../media/react-logo.png";

export default class NavWebDropdown extends Component {
  render() {
    return (
      <SecondaryDropdownLayout sidebarId="web">
        <Link to="/react-calculator" style={{ textDecoration: "none" }}>
          <DropdownButton styleId="react-calculator">
            <img src={ReactLogo} alt="React logo" id="react-logo" />
            <p id="react-calculator-text">
              React
              <br />
              Calculator
            </p>
          </DropdownButton>
        </Link>
      </SecondaryDropdownLayout>
    );
  }
}

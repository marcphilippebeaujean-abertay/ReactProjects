import React, { Component } from "react";
import NavGamesDropdown from "./navGamesDropdown";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { isMobile } from "react-device-detect";
import { shouldntBeMobile } from "../..";
import "../../css/style.css";

class NavDropDown extends Component {
  OnDropElemClicked = () => {
    if (isMobile === shouldntBeMobile) {
      this.props.onDropdownElementClicked();
    }
  };
  render() {
    return this.props.dropdownShouldShow ? (
      <div className="dropdown-vertical" id="projects-dropdown">
        <NavGamesDropdown />
        <div className="nav-element project-dropdown-element">
          <p>web</p>
        </div>
        <div className="nav-element project-dropdown-element">
          <p>software</p>
        </div>
      </div>
    ) : null;
  }
}

NavDropDown.propTypes = {
  dropdownShouldShow: PropTypes.bool.isRequired,
  onDropdownElementClicked: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    dropdownShouldShow: state.navReducer.dropdownShouldShow
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDropdownElementClicked: () =>
      dispatch({
        type: "ON_DROPDOWN_CLICKED",
        exitedViaHover: false
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavDropDown);

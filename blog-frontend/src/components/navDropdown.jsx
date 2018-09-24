import React, { Component } from "react";
import NavGamesDropdown from "./navGamesDropdown";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../css/style.css";

class NavDropDown extends Component {
  render() {
    return (
      <div
        className="dropdown-vertical"
        id="projects-dropdown"
        style={
          this.props.dropdownShouldShow
            ? { display: "flex" }
            : { display: "none" }
        }
      >
        <div
          className="nav-element project-dropdown-element"
          id="games-dropdown-div"
        >
          <p>games</p>
        </div>
        <NavGamesDropdown />
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

NavDropDown.propTypes = {
  dropdownShouldShow: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    dropdownShouldShow: state.navReducer.dropdownShouldShow
  };
};

export default connect(
  mapStateToProps,
  null
)(NavDropDown);

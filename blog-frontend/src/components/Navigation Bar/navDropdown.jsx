import React, { Component } from "react";
import NavGamesDropdown from "./navGamesDropdown";
import DropdownBlankSpace from "./dropdownBlankSpace";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../css/style.css";

class NavDropDown extends Component {
  render() {
    return this.props.dropdownShouldShow ? (
      <div className="dropdown-vertical" id="projects-dropdown">
        <NavGamesDropdown />
        <DropdownBlankSpace />
      </div>
    ) : null;
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

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavDropDown);

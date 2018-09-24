import React, { Component } from "react";
import NavDropdown from "./navDropdown";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../css/style.css";

class NavBar extends Component {
  render() {
    return (
      <nav id="nav-div">
        <div className="nav-element nav-element-main nav-left-element">
          <p>home</p>
        </div>
        <div className="nav-element nav-element-main">
          <p>archive</p>
        </div>
        <div
          className="nav-element nav-element-main dropdown-container"
          id="projects-dropdown-container"
          onMouseEnter={() => this.props.onHover()}
          onMouseLeave={() => this.props.onHoverEnded()}
        >
          <p>projects</p>
          <NavDropdown />
        </div>
        <div className="nav-element nav-element-main">
          <p>resume</p>
        </div>
        <div className="nav-element nav-element-main" id="nav-right-element">
          <p>contact</p>
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  onHoverEnded: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onHoverEnded: () =>
      dispatch({
        type: "HIDE_DROPDOWN"
      }),
    onHover: () =>
      dispatch({
        type: "SHOW_DROPDOWN"
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NavBar);

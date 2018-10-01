import React, { Component } from "react";
import NavDropdown from "./navDropdown";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../css/style.css";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";

class NavBar extends Component {
  componentWillUnmount() {}
  render() {
    return (
      <nav id="nav-div">
        <Link
          to="/"
          className="nav-element nav-element-main nav-left-element btn-div"
          style={{ textDecoration: "none" }}
        >
          <p>Home</p>
        </Link>
        <div className="nav-element nav-element-main btn-div">
          <p>Archive</p>
        </div>
        <div
          className="nav-element nav-element-main dropdown-container"
          id="projects-dropdown-container"
          onClick={() => {
            if (this.props.exitedViaHover === false && isMobile) {
              this.props.onHover();
            }
          }}
          onMouseEnter={() => {
            this.props.onHover();
          }}
          onMouseLeave={() => {
            this.props.onHoverEnded();
          }}
        >
          <p>
            Projects
            <i className="arrow arrow-down" />
          </p>
          <NavDropdown />
        </div>
        <div className="nav-element nav-element-main btn-div">
          <p>Resume</p>
        </div>
        <Link
          to="/contact"
          className="nav-element nav-element-main btn-div"
          id="nav-right-element"
          style={{ textDecoration: "none" }}
        >
          <p>Contact</p>
        </Link>
      </nav>
    );
  }
}

NavBar.propTypes = {
  onHoverEnded: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
  exitedViaHover: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    exitedViaHover: state.navReducer.exitedViaHover
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onHoverEnded: () =>
      dispatch({
        type: "HIDE_DROPDOWN",
        exitedViaHover: false
      }),
    onHover: () =>
      dispatch({
        type: "SHOW_DROPDOWN"
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

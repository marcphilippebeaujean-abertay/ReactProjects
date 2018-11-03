import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../css/style.css";
import { Link } from "react-router-dom";
import MobileNavButton from "./mobileNavBtn";

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
          <Link
              to="/projects"
              className="nav-element nav-element-main btn-div"
              style={{ textDecoration: "none" }}
          >
            <p>
              Projects
            </p>
          </Link>
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
          <MobileNavButton/>
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

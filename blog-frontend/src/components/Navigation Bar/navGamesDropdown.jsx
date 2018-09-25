import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../../css/style.css";
import SheTownLogo from "../../media/she-town-player.png";
import { Link } from "react-router-dom";

class NavGamesDropdown extends Component {
  render() {
    return (
      <div id="games-dropout">
        <div
          className="nav-element project-dropdown-element"
          id="games-dropdown-div"
          onClick={this.OnDropElemClicked}
        >
          <p>games</p>
          <i className="arrow arrow-right" />
        </div>
        <div className="scndry-dd" id="games-dropdown">
          <Link to="/she-town" style={{ textDecoration: "none" }}>
            <div
              className="nav-element project-dropdown-element scndry-dd-elem btn-div"
              id="she-town-dropdown"
              onClick={() => this.props.onBtnClicked()}
            >
              <img
                src={SheTownLogo}
                alt="Character from She-Town"
                className="logo-img"
                id="she-town-logo"
              />
              <p id="she-town-text">she-town</p>
            </div>
          </Link>
          <div
            className="nav-element project-dropdown-element scndry-dd-elem btn-div"
            id="indestructible-dropdown"
            onClick={() => this.props.onBtnClicked()}
          >
            <p>indestructible</p>
          </div>
        </div>
      </div>
    );
  }
}

NavGamesDropdown.propTypes = {
  onBtnClicked: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onBtnClicked: () =>
      dispatch({
        type: "HIDE_DROPDOWN",
        exitedViaHover: false
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NavGamesDropdown);

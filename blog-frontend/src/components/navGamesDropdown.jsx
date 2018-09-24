import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../css/style.css";

class NavGamesDropdown extends Component {
  render() {
    return (
      <div className="scndry-dd" id="games-dropdown">
        <div
          className="nav-element project-dropdown-element scndry-dd-elem"
          id="she-town-dropdown"
          onClick={() => this.props.onBtnClicked()}
        >
          <p>she-town</p>
        </div>
        <div
          className="nav-element project-dropdown-element scndry-dd-elem"
          id="indestructible-dropdown"
          onClick={() => this.props.onBtnClicked()}
        >
          <p>indestructible</p>
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
        type: "HIDE_DROPDOWN"
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NavGamesDropdown);

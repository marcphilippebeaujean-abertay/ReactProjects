import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../../css/style.css";
import SheTownLogo from "../../media/she-town-player.png";
import { Link } from "react-router-dom";

const sidebarID = "games";

class NavGamesDropdown extends Component {
  renderSidebar = () => {
    return this.props.curSidebarHovered === sidebarID ? (
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
    ) : null;
  };

  render() {
    return (
      <div id="games-dropout">
        <div
          className="nav-element project-dropdown-element"
          id="games-dropdown-div"
          onClick={this.OnDropElemClicked}
          onMouseEnter={() => this.props.onBtnHovered()}
          onMouseLeave={() => this.props.onBtnUnhovered()}
        >
          <p>games</p>
          <i className="arrow arrow-right" />
        </div>
        {this.renderSidebar()}
      </div>
    );
  }
}

NavGamesDropdown.propTypes = {
  onBtnClicked: PropTypes.func.isRequired,
  onBtnHovered: PropTypes.func.isRequired,
  onBtnUnhovered: PropTypes.func.isRequired,
  curSidebarHovered: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClicked: () =>
      dispatch({
        type: "HIDE_DROPDOWN",
        exitedViaHover: false
      }),
    onBtnHovered: () =>
      dispatch({
        type: "SIDEBAR_CATEGORY_HOVERED",
        curSidebarHovered: sidebarID
      }),
    onBtnUnhovered: () =>
      dispatch({
        type: "SIDEBAR_CATEGORY_UNHOVERED",
        sidebarID: sidebarID
      })
  };
};

const mapStateToProps = state => {
  return {
    curSidebarHovered: state.navReducer.curSidebarHovered
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavGamesDropdown);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../css/style.css";

export default class SecondaryDropdownLayout extends Component {
  render() {
    <div
      id="games-dropout"
      onMouseLeave={() => this.props.onBtnUnhovered()}
      onMouseEnter={() => this.props.onBtnHovered()}
    >
      <div
        className="nav-element project-dropdown-element"
        id="games-dropdown-div"
        onClick={this.OnDropElemClicked}
      >
        <p>games</p>
        <i className="arrow arrow-right" />
      </div>
      {this.renderSidebar()}
    </div>;
  }
}

SecondaryDropdownLayout.propTypes = {
  onBtnHovered: PropTypes.func.isRequired,
  onBtnUnhovered: PropTypes.func.isRequired,
  sidebarIsHovered: PropTypes.func.isRequired,
  dropdownElements: PropTypes.object.isRequired
};

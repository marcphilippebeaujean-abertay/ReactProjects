import React, { Component } from "react";
import PropTypes from "prop-types";
import DropdownBlankSpace from "./dropdownBlankSpace";
import { connect } from "react-redux";
import "../../css/style.css";

export default class SecondaryDropdownLayout extends Component {
  render() {
    <div
      className="dropout-div"
      onMouseLeave={() => this.props.onDropdownUnhovered()}
      onMouseEnter={() => this.props.onDropdownHovered()}
    >
      <div
        className="nav-element project-dropdown-element"
        className="dropout-entry-div"
      >
        <p>{this.props.sidebarId}</p>
        <i className="arrow arrow-right" />
      </div>
      { this.props.IsSidebarHovered() ? 
        <div className="scndry-dd"> 
        {props.children}
        <DropdownBlankSpace/>
        </div> : null }
    </div>;
  }
}

SecondaryDropdownLayout.propTypes = {
  onDropdownHovered: PropTypes.func.isRequired,
  onDropdownUnhovered: PropTypes.func.isRequired,
  sidebarIsHovered: PropTypes.func.isRequired,
  sidebarId: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onDropdownHovered: () =>
        dispatch({
          type: "SIDEBAR_CATEGORY_HOVERED",
          sidebarId: ownProps.sidebarId
        }),
      onDropdownUnhovered: () =>
        dispatch({
          type: "SIDEBAR_CATEGORY_UNHOVERED",
          sidebarId: ownProps.sidebarId
        }),
      onBtnClicked: () =>
        dispatch({
          type: "HIDE_DROPDOWN",
          exitedViaHover: false
        })
    };
  };
  
  const mapStateToProps = (state, ownProps) => {
    return {
      IsSidebarHovered: () => {
          return state.curSidebarHovered === ownProps.sidebarId
      }
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SecondaryDropdownLayout);
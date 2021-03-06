import React, { Component } from "react";
import PropTypes from "prop-types";
import DropdownBlankSpace from "./dropdownBlankSpace";
import { connect } from "react-redux";
import "../../css/style.css";

class SecondaryDropdownLayout extends Component {
  componentDidMount() {
    this.props.onDropdownMounted();
  }
  IsSidebarHovered = () => {
    return this.props.curSidebarHovered === this.props.sidebarId;
  };
  render() {
    return (
      <div
        className="dropout-div"
        onMouseLeave={() => this.props.onDropdownUnhovered()}
        onMouseEnter={() => this.props.onDropdownHovered()}
      >
        <div className="nav-element project-dropdown-element dropout-entry-div">
          <p>{this.props.sidebarId}</p>
          <i className="arrow arrow-right" />
        </div>
        {this.IsSidebarHovered() ? (
          <div
            className={`scndry-dd scndry-dd-top-padding-${this.props.getDropdownHeight()}`}
          >
            {this.props.children}
            <DropdownBlankSpace />
          </div>
        ) : null}
      </div>
    );
  }
}

SecondaryDropdownLayout.propTypes = {
  onDropdownHovered: PropTypes.func.isRequired,
  onDropdownUnhovered: PropTypes.func.isRequired,
  sidebarId: PropTypes.string.isRequired,
  curSidebarHovered: PropTypes.string.isRequired,
  getDropdownHeight: PropTypes.func.isRequired
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
    onDropdownMounted: () =>
      dispatch({
        type: "ON_DROPDOWN_MOUNTED",
        sidebarId: ownProps.sidebarId
      })
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    curSidebarHovered: state.navReducer.curSidebarHovered,
    getDropdownHeight: () => {
      return state.navReducer.mountedDropdowns.indexOf(ownProps.sidebarId);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondaryDropdownLayout);

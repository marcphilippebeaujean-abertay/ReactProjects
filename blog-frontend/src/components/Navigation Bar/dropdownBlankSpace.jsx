import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// Component that when hovered, will close the dropdown.
// Allows for dynamic dropdown height creation without
// having to adjust style of dropdown everytime a new
// element is added.

class DropdownBlankSpace extends Component {
  render() {
    return (
      <div
        className="dropdown-blank-space"
        onMouseEnter={() => this.props.onHovered()}
      />
    );
  }
}

DropdownBlankSpace.propTypes = {
  onHovered: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onHovered: () =>
      dispatch({
        type: "HIDE_DROPDOWN",
        exitedViaHover: true
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DropdownBlankSpace);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class DropdownButton extends Component {
  render() {
    return (
      <div
        className="nav-element project-dropdown-element scndry-dd-elem btn-div"
        id={`${this.props.styleId}`}
        onClick={() => this.props.onButtonClicked()}
      >
        {this.props.children}
      </div>
    );
  }
}

DropdownButton.propTypes = {
  styleId: PropTypes.string.isRequired,
  onButtonClicked: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onButtonClicked: () =>
      dispatch({
        type: "HIDE_DROPDOWN",
        exitedViaHover: false
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DropdownButton);

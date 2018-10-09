import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../css/style.css";

class ReadMoreToggle extends Component {
  render() {
    return (
      <div>
        {this.props.shouldDisplayInfo ? (
          <div>
            {this.props.children}
            <p
              className="content-show-toggle-btn"
              onClick={() => this.props.onButtonClicked()}
            >
              Hide
            </p>
          </div>
        ) : (
          <p
            className="content-show-toggle-btn"
            onClick={() => this.props.onButtonClicked()}
          >
            Show More
          </p>
        )}
      </div>
    );
  }
}

ReadMoreToggle.propTypes = {
  shouldDisplayInfo: PropTypes.bool.isRequired,
  contentId: PropTypes.string.isRequired,
  onButtonClicked: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  if (
    !state.contentReducer.contentToDisplay.hasOwnProperty(ownProps.contentId)
  ) {
    console.log(`Missing content id: ${ownProps.contentId}`);
  }
  return {
    shouldDisplayInfo: state.contentReducer.contentToDisplay[ownProps.contentId]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onButtonClicked: () =>
      dispatch({
        type: "TOGGLE_CONTENT",
        contentId: ownProps.contentId
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadMoreToggle);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../css/style.css";
class ContactFormElement extends Component {
  render() {
    return (
      <React.Fragment>
        <input
          className="contact-form-elem contact-form-tex-input small-form-elem"
          type="text"
          name={this.props.id}
          placeholder={this.props.placeholderText}
          value={this.props.formValue}
          onChange={event => this.props.onFieldInput(event.target.value)}
        />
        {this.props.errorMsg !== "" ? (
          <p className="contact-form-error">
            {this.props.showError ? this.props.errorMsg : ""}
          </p>
        ) : null}
      </React.Fragment>
    );
  }
}

ContactFormElement.propTypes = {
  id: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
  errorMsg: PropTypes.string.isRequired,
  formValue: PropTypes.string.isRequired,
  showError: PropTypes.bool.isRequired,
  onFieldInput: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    formValue: state.contactsFormReducer.forms[ownProps.id].formInput,
    showError: state.contactsFormReducer.forms[ownProps.id].showError
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFieldInput: input => {
      dispatch({
        type: "FORM_INPUT_UPDATE",
        formInput: input,
        formId: ownProps.id
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactFormElement);

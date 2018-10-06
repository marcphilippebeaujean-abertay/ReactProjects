import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../css/style.css";

import ContactFormElement from "./contactFormElement";

class ContactComponent extends Component {
  render() {
    return (
      <div id="contacts-div">
        <div id="contacts-header-div">
          <h2 id="contacts-header">I'd love to hear from you.</h2>
        </div>
        <form id="contacts-form">
          <div id="contacts-grid">
            <div className="form-input-elem" id="form-def-text-inputs">
              <ContactFormElement
                placeholderText={"Name..."}
                errorMsg={"Please enter at least 6 characters"}
                id={"nameForm"}
              />
              <ContactFormElement
                placeholderText={"E-Mail..."}
                errorMsg={"Please enter a valid E-Mail"}
                id={"emailForm"}
              />
              <input
                className="contact-form-elem contact-form-tex-input small-form-elem"
                type="text"
                name="subject"
                placeholder="Subject..."
                value={this.props.emailInput}
                onChange={event =>
                  this.props.onEmailFieldInput(event.target.value)
                }
              />
            </div>
            <div className="form-input-elem">
              <textarea
                className="contact-form-elem contact-form-tex-input"
                id="contact-message"
                cols="40"
                rows="5"
                name="message"
                placeholder="Message..."
                value={this.props.messageInput}
                onChange={event =>
                  this.props.onMessageFieldInput(event.target.value)
                }
              />
              <p className="contact-form-error">{this.props.msgErrorMsg}</p>
            </div>
          </div>
        </form>
        <button
          id="contacts-submit-btn"
          type="submit"
          value="Submit"
          onClick={() => this.props.onFormSubmitted()}
        >
          Submit
        </button>
      </div>
    );
  }
}

ContactComponent.propTypes = {
  emailInput: PropTypes.string.isRequired,
  nameInput: PropTypes.string.isRequired,
  messageInput: PropTypes.string.isRequired,
  subjectInput: PropTypes.string.isRequired,
  onNameFieldInput: PropTypes.func.isRequired,
  onEmailFieldInput: PropTypes.func.isRequired,
  onMessageFieldInput: PropTypes.func.isRequired,
  onFormSubmitted: PropTypes.func.isRequired,
  nameErrorMsg: PropTypes.string.isRequired,
  emailErrorMsg: PropTypes.string.isRequired,
  msgErrorMsg: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    emailInput: state.contactsFormReducer.emailForm,
    nameInput: state.contactsFormReducer.nameForm,
    messageInput: state.contactsFormReducer.messageForm,
    subjectInput: state.contactsFormReducer.subjectForm,
    emailErrorMsg: state.contactsFormReducer.emailErrorMsg,
    nameErrorMsg: state.contactsFormReducer.nameErrorMsg,
    msgErrorMsg: state.contactsFormReducer.messageErrorMsg
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onNameFieldInput: input =>
      dispatch({
        type: "NAME_FORM_UPDATE",
        data: input
      }),
    onEmailFieldInput: input =>
      dispatch({
        type: "EMAIL_FORM_UPDATE",
        data: input
      }),
    onMessageFieldInput: input =>
      dispatch({
        type: "MESSAGE_FORM_UPDATE",
        data: input
      }),
    onFormSubmitted: () =>
      dispatch({
        type: "FORM_SUBMIT_ATTEMPT"
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactComponent);

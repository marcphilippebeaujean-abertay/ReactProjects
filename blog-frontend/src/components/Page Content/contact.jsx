import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../css/style.css";

import ContactFormElement from "./contactFormElement";

class ContactComponent extends Component {
  componentDidMount() {}
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
              <ContactFormElement
                placeholderText={"Subject..."}
                errorMsg={""}
                id={"subjectForm"}
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
  messageInput: PropTypes.string.isRequired,
  onMessageFieldInput: PropTypes.func.isRequired,
  onFormSubmitted: PropTypes.func.isRequired,
  msgErrorMsg: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    msgErrorMsg: state.contactsFormReducer.messageErrorMsg,
    messageInput: state.contactsFormReducer.messageInput
  };
};

const mapDispatchToProps = dispatch => {
  return {
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

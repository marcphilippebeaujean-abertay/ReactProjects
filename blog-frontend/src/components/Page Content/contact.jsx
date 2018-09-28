import React, { Component } from "react";
import "../../css/style.css";

export default class ContactComponent extends Component {
  render() {
    return (
      <div id="contacts-div">
        <div id="contacts-header-div">
          <h2 id="contacts-header">let's get in touch . . .</h2>
        </div>
        <form className="contact-form-elem" id="contacts-form">
          <input
            className="contact-form-elem contact-form-tex-input"
            type="text"
            name="name"
            placeholder="Full Name..."
          />
          <input
            className="contact-form-elem contact-form-tex-input"
            type="text"
            name="email"
            placeholder="Email..."
          />
          <textarea
            className="contact-form-elem contact-form-tex-input"
            id="contact-message"
            cols="40"
            rows="5"
            name="message"
            placeholder="Message..."
          />
          <input id="contacts-submit-btn" type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

import React, { Component } from "react";
import "../../css/style.css";

export default class ContactComponent extends Component {
  render() {
    return (
      <div id="contacts-div">
        <div id="contacts-header-div">
          <h2 id="contacts-header">Let's get in Touch</h2>
        </div>
        <form className="contact-form-elem" id="contacts-form">
          <input
            className="contact-form-elem contact-form-tex-input"
            type="text"
            name="name"
            placeholder="Your Full Name..."
          />
          <input
            className="contact-form-elem contact-form-tex-input"
            type="text"
            name="email"
            placeholder="Your Email..."
          />
          <textarea
            className="contact-form-elem contact-form-tex-input"
            id="contact-message"
            cols="40"
            rows="5"
            name="message"
            placeholder="Your Message..."
          />
          <input className="contact-form-elem" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

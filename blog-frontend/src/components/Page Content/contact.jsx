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
          <label className="contact-form-elem">Name</label>
          <input
            className="contact-form-elem contact-form-tex-input"
            type="text"
            name="name"
          />
          <input className="contact-form-elem" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

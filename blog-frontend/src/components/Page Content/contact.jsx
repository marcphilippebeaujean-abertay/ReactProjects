import React, { Component } from "react";
import "../../css/style.css";

export default class ContactComponent extends Component {
  render() {
    return (
      <div id="contacts-div">
        <h2 id="contacts-header">Contact</h2>
        <form id="contacts-form">
          <label>Name</label>
          <input type="text" name="name" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

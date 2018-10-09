import React, { Component } from "react";
import NavBar from "./Navigation Bar/navBar";
import "../css/style.css";
import SocialMediaSidebar from "./socialMedia";

export default class PersistentContentComponent extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div id="navbar-spacing" />
        <SocialMediaSidebar />
      </div>
    );
  }
}

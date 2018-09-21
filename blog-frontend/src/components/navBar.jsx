import React, { Component } from "react";
import "../css/style.css";

export default class NavBar extends Component {
  render() {
    return (
      <div id="nav-div">
        <nav className="nav-element">home</nav>
        <nav className="nav-element">archive</nav>
        <nav className="nav-element">projects</nav>
        <nav className="nav-element">resume</nav>
        <nav className="nav-element">contact</nav>
      </div>
    );
  }
}

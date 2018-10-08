import React, { Component } from "react";

// Component that when hovered, will close the dropdown.
// Allows for dynamic dropdown height creation without
// having to adjust style of dropdown everytime a new
// element is added.

export default class DropdownBlankSpace extends Component {
  render() {
    return <div className="dropdown-blank-space" />;
  }
}

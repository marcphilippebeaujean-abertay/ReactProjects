import React, { Component } from "react";

export default class ProjectSubsection extends Component {
  render() {
    return (
      <div className="project-subsection">
        <div className="projects-horizontal-center">{this.props.children}</div>
      </div>
    );
  }
}

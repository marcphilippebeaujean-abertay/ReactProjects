import React, { Component } from "react";
import ProjectSubsection from "./projectSubsection";
import ProjectDisplay from "./projectDisplay";
import SheTownLogo from "../../media/she-town-player.png";
import IndestructibleLogo from "../../media/indestructible.png";
import ReactLogo from "../../media/react-logo.png";
import TMFLogo from "../../media/tmf-logo.png";
import GGJLogo from "../../media/ggj_logo.png";
import { Link } from "react-router-dom";

class Projects extends Component {
  render() {
    return (
      <div>
        <div style={{ height: "30px" }} />
        <ProjectSubsection>
          <a className="project-display-link">
            <ProjectDisplay
              projectImg={SheTownLogo}
              projectName={"She-Town"}
              textStyle={"she-town-text"}
              imgStyle={"she-town-lgo"}
            />
          </a>
          <a className="project-display-link">
            <ProjectDisplay
              projectImg={IndestructibleLogo}
              projectName={"indestructible"}
              textStyle={"indestructible-text"}
              imgStyle={"indestructible-logo"}
            />
          </a>
        </ProjectSubsection>
        <ProjectSubsection>
          <Link
            to="/react-calculator"
            style={{ textDecoration: "none" }}
            className="project-display-link"
          >
            <ProjectDisplay
              projectImg={ReactLogo}
              projectName={"ReactCalc"}
              textStyle={"react-calc-text"}
              imgStyle={"react-calc-logo"}
            />
          </Link>
          <a
            href="https://www.themissingfew.com/"
            rel="noreferrer noopener"
            target="_blank"
            className="project-display-link"
          >
            <ProjectDisplay
              projectImg={TMFLogo}
              projectName={""}
              textStyle={"indestructible-text"}
              imgStyle={"tmf-logo"}
            />
          </a>
        </ProjectSubsection>
        <ProjectSubsection>
          <Link
            to="/game-jams"
            style={{ textDecoration: "none" }}
            className="project-display-link"
          >
            <ProjectDisplay
              projectImg={GGJLogo}
              projectName={"Game Jams"}
              textStyle={"game-jams-text"}
              imgStyle={"game-jams-logo"}
            />
          </Link>
        </ProjectSubsection>
      </div>
    );
  }
}

export default Projects;

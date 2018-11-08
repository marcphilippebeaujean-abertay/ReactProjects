import React, {Component} from 'react';
import ProjectDisplay from "./projectDisplay";
import SheTownLogo from "../../media/she-town-player.png";
import IndestructibleLogo from "../../media/indestructible.png"
import ReactLogo from "../../media/react-logo.png";
import TMFLogo from "../../media/tmf-logo.png";
import {Link} from "react-router-dom";

class Projects extends Component {
    render() {
        return (
            <div>
                <div style={{height: "30px"}}/>
                <div className="project-subsection">
                    <div className="projects-horizontal-center">
                        <ProjectDisplay
                            projectImg={SheTownLogo}
                            projectName={"She-Town"}
                            textStyle={"she-town-text"}
                            imgStyle={'she-town-lgo'}
                        />
                        <ProjectDisplay
                            projectImg={IndestructibleLogo}
                            projectName={"indestructible"}
                            textStyle={"indestructible-text"}
                            imgStyle={'indestructible-logo'}
                        />
                    </div>
                </div>
                <div className="project-subsection">
                    <div className="projects-horizontal-center">
                        <Link to="/react-calculator" style={{ textDecoration: "none" }}>
                            <ProjectDisplay
                                projectImg={ReactLogo}
                                projectName={"ReactCalc"}
                                textStyle={"react-calc-text"}
                                imgStyle={'react-calc-logo'}
                            />
                        </Link>
                        <a
                            href="https://www.themissingfew.com/"
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            <ProjectDisplay
                                projectImg={TMFLogo}
                                projectName={""}
                                textStyle={"indestructible-text"}
                                imgStyle={'tmf-logo'}
                            />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
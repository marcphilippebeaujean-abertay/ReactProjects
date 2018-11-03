import React, {Component} from 'react';
import ProjectDisplay from "./projectDisplay";
import SheTownLogo from "../../media/she-town-player.png";
import IndestructibleLogo from "../../media/indestructible.png"
import ReactLogo from "../../media/react-logo.png";
import TMFLogo from "../../media/tmf-logo.png";

class Projects extends Component {
    render() {
        return (
            <div>
                <div style={{height: "30px"}}/>
                <div className="project-subsection">
                        <ProjectDisplay
                            projectImg={SheTownLogo}
                            projectName={"She-Town"}
                            textStyle={"she-town-text"}
                            imgStyle={'she-town-logo'}
                        />
                        <ProjectDisplay
                            projectImg={IndestructibleLogo}
                            projectName={"indestructible"}
                            textStyle={"indestructible-text"}
                            imgStyle={'indestructible-logo'}
                        />
                </div>
                <div className="project-subsection">
                    <ProjectDisplay
                        projectImg={ReactLogo}
                        projectName={"ReactCalc"}
                        textStyle={"react-calc-text"}
                        imgStyle={'react-calc-logo'}
                    />
                    <ProjectDisplay
                        projectImg={TMFLogo}
                        projectName={""}
                        textStyle={"indestructible-text"}
                        imgStyle={'tmf-logo'}
                    />
                </div>
            </div>
        );
    }
}

export default Projects;
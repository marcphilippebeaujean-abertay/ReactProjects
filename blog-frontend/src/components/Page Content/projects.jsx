import React, {Component} from 'react';
import ProjectDisplay from "./projectDisplay";
import SheTownLogo from "../../media/she-town-player.png";


class Projects extends Component {
    render() {
        return (
            <div>
                <h2 className="main-header-style saas-test">Projects</h2>
                <div className="project-subsection">
                        <ProjectDisplay
                            projectImg={SheTownLogo}
                            projectName={"She-Town"}
                            textStyle={"she-town-text"}
                            imgStyle={'she-town-logo'}
                        />
                        <ProjectDisplay projectImg={"none"} projectName={"none"}/>
                </div>
            </div>
        );
    }
}

export default Projects;
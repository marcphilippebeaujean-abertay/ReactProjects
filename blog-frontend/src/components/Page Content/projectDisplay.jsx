import React, {Component} from 'react';
import PropTypes from "prop-types";


class ProjectDisplay extends Component {
    render() {
        return (
            <div>
                <div className="project-img-container">
                    <img src={this.props.projectImg} alt={this.props.projectImg} />
                </div>
            </div>
        );
    }
}
ProjectDisplay.propTypes = {
    projectImg: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired
};


export default ProjectDisplay;
import React, {Component} from 'react';
import PropTypes from "prop-types";
class ProjectDisplay extends Component {
    render() {
        return (
            <div>
                <div className="project-img-container">
                    <img src={this.props.projectImg} alt={this.props.projectImg} id={this.props.imgStyle}/>
                </div>
                <h3 className="project-header" id={this.props.textStyle}>{this.props.projectName}</h3>
            </div>
        );
    }
}
ProjectDisplay.propTypes = {
    projectImg: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired
};


export default ProjectDisplay;
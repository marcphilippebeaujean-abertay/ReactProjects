import React, {Component} from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../css/style.css";

class MobileNavOptionsOverlay extends Component {
    render() {
        return this.props.phoneNavMenuShowing ? (
            <div id="mobile-nav-options-overlay">
                <Link
                    to="/"
                    className="mobile-nav-elem"
                    style={{ textDecoration: "none" }}
                    onClick={()=> this.props.onButtonClicked()}
                >
                    <p>Home</p>
                </Link>
                <Link
                    to="/projects"
                    className="mobile-nav-elem"
                    style={{ textDecoration: "none" }}
                    onClick={()=> this.props.onButtonClicked()}
                >
                    <p>
                        Projects
                    </p>
                </Link>
                <div
                    className="mobile-nav-elem"
                    onClick={()=> this.props.onButtonClicked()}
                >
                    <p>Resume</p>
                </div>
                <Link
                    to="/contact"
                    className="mobile-nav-elem"
                    id=""
                    style={{ textDecoration: "none" }}
                    onClick={()=> this.props.onButtonClicked()}
                >
                    <p>Contact</p>
                </Link>
            </div>
        ) : null;
    }
}
MobileNavOptionsOverlay.propTypes = {
    phoneNavMenuShowing: PropTypes.bool.isRequired,
    onButtonClicked: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        phoneNavMenuShowing: state.navReducer.phoneNavMenuShowing
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onButtonClicked: () =>
            dispatch({
                type: "TOGGLE_PHONE_NAV_MENU"
            })
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MobileNavOptionsOverlay);
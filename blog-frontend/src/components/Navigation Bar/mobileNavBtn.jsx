import React, {Component} from 'react';
import MobileNavBtn from "../../media/three-line-nav-btn.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class MobileNavButton extends Component {
    render() {
        return (
            <div id="mobile-nav-div">
                <img src={MobileNavBtn}
                     alt={"Navigation Button for Mobile Devices"}
                     id="three-line-btn"
                     onClick={()=> this.props.onButtonClicked()}
                />
            </div>
        );
    }
}

MobileNavButton.propTypes = {
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
)(MobileNavButton);
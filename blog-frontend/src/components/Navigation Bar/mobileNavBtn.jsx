import React, {Component} from 'react';
import MobileNavBtn from "../../media/three-line-nav-btn.png";

class MobileNavButton extends Component {
    render() {
        return (
            <div id="mobile-nav-div">
                <img src={MobileNavBtn}
                     alt={"Navigation Button for Mobile Devices"}
                     id="three-line-btn"
                />
            </div>
        );
    }
}

export default MobileNavButton;
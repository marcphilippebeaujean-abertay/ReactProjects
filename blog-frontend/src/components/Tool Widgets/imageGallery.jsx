import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImg: props.images[0]
    };
  }
  listImageSelectors = () => {
    console.log(this.props.images);
    return this.props.images.map(imgUrl => (
      <div key={imgUrl}>
        <img
          src={imgUrl}
          alt={imgUrl}
          key={imgUrl}
          className="img-gallery-selection"
        />
      </div>
    ));
  };

  render() {
    return (
      <div className="img-gallery-main-div">
        <div className="img-center-div">
          <img
            src={this.state.mainImg}
            alt={this.state.mainImg}
            className="img-gallery-main-img"
          />
        </div>
        <div className="img-center-div">
          <div className="img-selector">{this.listImageSelectors()}</div>
        </div>
      </div>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};

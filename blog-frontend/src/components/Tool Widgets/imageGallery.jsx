import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImg: props.images[0]
    };
  }
  render() {
    return (
      <div>
        <img
          src={this.state.mainImg}
          alt={this.state.mainImg}
          className="img-gallery-main"
        />
      </div>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired
};

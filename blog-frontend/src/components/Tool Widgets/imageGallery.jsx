import React, { Component } from "react";
import PropTypes from "prop-types";
import ImgToggleArrow from "../../media/toggle-arrows.png";

export default class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImg: props.images[0],
      curImg: 0,
      imgSelected: false
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
  showImageToggleArrows = () => {
    return this.state.imgSelected ? (
      <React.Fragment>
        <img
          src={ImgToggleArrow}
          alt="left arrow used to toggle between images"
          className="gallery-arrow gallery-arrow-right"
        />
        <img
          src={ImgToggleArrow}
          alt="left arrow used to toggle between images"
          className="gallery-arrow gallery-arrow-left"
        />
      </React.Fragment>
    ) : null;
  };

  render() {
    return (
      <div
        className="img-gallery-main-div"
        onMouseLeave={() =>
          this.setState({ ...this.state, imgSelected: false })
        }
        onMouseEnter={() => this.setState({ ...this.state, imgSelected: true })}
      >
        <div className="img-center-div">
          <img
            src={this.props.images[this.state.curImg]}
            alt={this.props.images[this.state.curImg]}
            className="img-gallery-main-img"
          />
          {this.showImageToggleArrows()}
        </div>
      </div>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};

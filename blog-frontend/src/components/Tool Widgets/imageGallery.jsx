import React, { Component } from "react";
import PropTypes from "prop-types";
import ImgToggleArrow from "../../media/toggle-arrows.png";

export default class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  toggleDisplayImg = increment => {
    let state = this.state;
    let curImgID = this.state.curImg;
    curImgID = increment ? curImgID + 1 : curImgID - 1;
    if (curImgID >= this.props.images.length) {
      curImgID = 0;
    } else if (curImgID < 0) {
      curImgID = this.props.images.length - 1;
    }
    this.setState({ ...state, curImg: curImgID });
  };
  showImageToggleArrows = () => {
    return this.state.imgSelected && this.props.images.length > 0 ? (
      <React.Fragment>
        <img
          src={ImgToggleArrow}
          alt="right arrow used to toggle between images"
          className="gallery-arrow gallery-arrow-right"
          onClick={() => this.toggleDisplayImg(true)}
        />
        <img
          src={ImgToggleArrow}
          alt="left arrow used to toggle between images"
          className="gallery-arrow gallery-arrow-left"
          onClick={() => this.toggleDisplayImg(false)}
        />
        <p className="gallery-img-id-display">
          {`${this.state.curImg + 1} / ${this.props.images.length}`}
        </p>
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

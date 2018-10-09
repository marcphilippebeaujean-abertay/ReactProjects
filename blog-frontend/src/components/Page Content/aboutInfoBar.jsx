import React, { Component } from "react";
import "../../css/style.css";

export default class AboutInfoBar extends Component {
  render() {
    return (
      <div>
        <h2 className="blog-post-header">About</h2>
        <p id="about-infotext-main">
          Hi! My name is Marc Philippe Beaujean, welcome to my web page and
          personal blog. I code things, like games, websites and software. I'm
          also a huge fan of statistics and machine learning. <br />
          <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }
}

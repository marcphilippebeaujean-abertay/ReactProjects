import React, { Component } from "react";
import TwitterLogo from "../media/twitter.png";
import GitLogo from "../media/github.png";
import LinkedInLogo from "../media/linked-in.png";
import "../css/style.css";

export default class SocialMediaSidebar extends Component {
  render() {
    return (
      <div id="social-media-sidebar">
        <a
          href="https://twitter.com/marcbeaujean"
          rel="noreferrer noopener"
          target="_blank"
          className="debug-bg-1"
        />
          <img
              src={TwitterLogo}
              alt="Twitter logo"
              className="social-media-logo-1"
              id="twitter-logo"
          />
        <a
          href="https://github.com/marcphilippebeaujean-abertay"
          rel="noreferrer noopener"
          target="_blank"
          className="debug-bg-2"
        />
        <img
            src={GitLogo}
            alt="GitHub logo"
            className="social-media-logo-2"
            id="github-logo"
        />
        <a
          href="https://www.linkedin.com/in/marc-philippe-beaujean-5ab27815a/"
          rel="noreferrer noopener"
          target="_blank"
          className="debug-bg-3"
        />
        <img
            src={LinkedInLogo}
            alt="LinkedIn logo"
            className="social-media-logo-3"
            id="linked-in-logo"
        />
      </div>
    );
  }
}

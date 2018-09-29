import React, { Component } from "react";
import TwitterLogo from "../media/twitter.png";
import GitLogo from "../media/github.png";
import LinkedInLogo from "../media/linked-in.png";
import "../css/style.css";

export default class SocialMediaSidebar extends Component {
  render() {
    return (
      <div id="social-media-sidebar">
        <a href="https://twitter.com/marcbeaujean" target="_blank">
          <img
            src={TwitterLogo}
            alt="Twitter logo"
            className="social-media-logo"
            id="twitter-logo"
          />
        </a>
        <img
          src={GitLogo}
          alt="GitHub logo"
          className="social-media-logo"
          id="github-logo"
        />
        <a
          href="https://www.linkedin.com/in/marc-philippe-beaujean-5ab27815a/"
          target="_blank"
        >
          <img
            src={LinkedInLogo}
            alt="LinkedIn logo"
            className="social-media-logo"
            id="linked-in-logo"
          />
        </a>
      </div>
    );
  }
}

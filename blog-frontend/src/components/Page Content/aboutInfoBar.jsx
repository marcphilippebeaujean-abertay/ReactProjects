import React, { Component } from "react";
import "../../css/style.css";
import ScottischFlag from "../../media/flags/scotland.jpg";
import GermanyFlag from "../../media/flags/germany.png";
import EnglishFlag from "../../media/flags/great_britain.png";

export default class AboutInfoBar extends Component {
  render() {
    return (
      <div>
        <p className="about-infotext-main">
          Hi! My name is Marc Philippe Beaujean, welcome to my web page and
          personal blog. I code things - more specifically: games, websites and
          software. I'm also interested in statistical analysis and machine
          learning.{" "}
        </p>
        <div className="about-infotext-main">
          <h3 className="blog-post-header about-header">About Me</h3>
          <div className="about-infotext-main">
            <ul className="about-list-keypoints">
              <li>
                Country of Origin:{" "}
                <img src={GermanyFlag} alt="Germany" className="flag" />
              </li>
              <li>
                Spoken Languages:{" "}
                <img src={GermanyFlag} alt="German, " className="flag" />{" "}
                <img src={EnglishFlag} alt="English" className="flag" />
              </li>
              <li>Date of Birth: 1996</li>
              <li>Programming Languages: C++, Python, JavaScript</li>
              <li>Other Skills: HTML, CSS, Git, HLSL, Unix Command Line</li>
              <li>
                Academic Qualifications: International Baccalaureate, BSc(Hons)
                Computer Games Applications Development
              </li>
              <li>
                University: Abertay University{" "}
                <img src={ScottischFlag} alt="Scotland" className="flag" />
              </li>
              <li>
                Employment Status: <b>Looking for job!</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

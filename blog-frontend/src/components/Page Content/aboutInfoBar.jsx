import React, { Component } from "react";
import "../../css/style.css";

export default class AboutInfoBar extends Component {
  render() {
    return (
      <div>
        <h2 className="blog-post-header">About</h2>
        <p id="about-infotext-main">
          My name is Marc Philippe Beaujean, welcome to my web page and personal
          blog (coded and depolyed from scratch with leading frameworks and
          technologies like ReactJS, Redux and Django)! I am currently studying
          at Abertay University in Scotland and looking for a job as a games,
          web or software developer. <br />
          <br /> I began my coding career as a game developer, by making games
          at University and during a multitude of game jams. Since I began
          programming in an education environment in 2015, I have learned and
          mastered three distinct languages: C++, Python and JavaScript.
          Nowadays, my skills are not only limited to game development, as I
          have dabbled into various areas of computing, ranging from front and
          back-end web development to machine learning (a topic I am very
          passionate about and currently dedicating my dissertation to).
          <br /> <br />
          On my page, you will find information in the form of blog posts, links
          to most of my projects, and a downloadable resume. I hope you enjoy
          your stay!
        </p>
      </div>
    );
  }
}

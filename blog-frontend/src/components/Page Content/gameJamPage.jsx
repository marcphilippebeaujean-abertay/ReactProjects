import React, { Component } from "react";
import DoomedTravellerSplash from "../../media/GameScreenshots/DoomedTraveller/doomed_traveller.png";
import ImageGallery from "../Tool Widgets/imageGallery";
import "../../css/style.css";

console.log(DoomedTravellerSplash);
export default class GameJamInfoPage extends Component {
  render() {
    return (
      <div>
        <div className="blog-post-header-div">
          <h2 className="page-header-main">Game Jams</h2>
        </div>

        <h3 className="page-header-main">Dam Good Game</h3>
        <p className="blog-date">
          Published <time>Marc 17, 2018</time>
        </p>
        <h3 className="page-header-main">Doomed Traveller</h3>
        <p className="blog-date">
          Published <time>January 27, 2016</time>
        </p>
        <img src={DoomedTravellerSplash} className="game-jam-splash" />
        <p>
          <b>Jam Title:</b> Global Game Jam 2016
        </p>
        <p>
          <b>Jam Theme:</b> Ritual
        </p>
        <p>
          <b>Genre:</b> Arcade Adventure
        </p>
        <p className="jam-description">
          <b>Description:</b> Play as a wizard who is trying to assemble four
          artifacts that are required to complete a ritual, while evil cultists
          try to stop him. This was my first ever game jam and quite frankly,
          this is reflected by the clunky controlls..- a testimony to how far
          I've come since then!
        </p>
      </div>
    );
  }
}

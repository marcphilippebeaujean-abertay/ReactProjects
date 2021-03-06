import React, { Component } from "react";
import DoomedTravellerSplash from "../../media/GameScreenshots/doomed_traveller.png";
import dt1 from "../../media/GameScreenshots/doomed_traveller_1.png";
import dt2 from "../../media/GameScreenshots/doomed_traveller_2.png";
import dt3 from "../../media/GameScreenshots/doomed_traveller_3.png";
import DamGGSplash from "../../media/GameScreenshots/dam_good_splash.png";
import DamGood1 from "../../media/GameScreenshots/dam_good_1.png";
import DamGood2 from "../../media/GameScreenshots/dam_good_2.png";
import IndestructibleSplash from "../../media/GameScreenshots/indestructible.png";
import Indestructible1 from "../../media/indestructible_1.png";
import Indestructible2 from "../../media/indestructible_2.png";
import Indestructible3 from "../../media/indestructible_3.png";
import transbit from "../../media/GameScreenshots/transbit.png";
import ImageGallery from "../Tool Widgets/imageGallery";
import "../../css/style.css";

export default class GameJamInfoPage extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div className="blog-post-header-div">
          <h2 className="page-header-main">Game Jams</h2>
        </div>
        <h3 className="page-header-main">Indestructible</h3>
        <p className="blog-date">
          Published <time>Jan 28, 2018</time>
        </p>
        <ImageGallery
          images={[
            IndestructibleSplash,
            Indestructible1,
            Indestructible2,
            Indestructible3
          ]}
        />
        <p>
          <b>Jam Title:</b> Global Game Jam 2018
        </p>
        <p>
          <b>Jame Theme:</b> Transmition
        </p>
        <p>
          <b>Jam Duration:</b> 3 Days
        </p>
        <p>
          <b>Genre:</b> Arcade
        </p>
        <p>
          <b>Description:</b> Play with the Nokia on your smartphone! A game
          where the player needs to press the button on the number pad,
          corresponding to the letters coming down the screen at increasingly
          faster speed.
        </p>
        <a
          href="https://globalgamejam.org/2018/games/indestructible"
          rel="noreferrer noopener"
          target="_blank"
        >
          Source Code and Download
        </a>
        <h3 className="page-header-main">Dam Good Game</h3>
        <p className="blog-date">
          Published <time>March 17, 2018</time>
        </p>
        <ImageGallery images={[DamGGSplash, DamGood1, DamGood2]} />
        <p>
          <b>Jam Title:</b> AGDS Jam
        </p>
        <p>
          <b>Jame Theme:</b> Waves
        </p>
        <p>
          <b>Jam Duration:</b> 3 Days
        </p>
        <p>
          <b>Genre:</b> Action
        </p>
        <p>
          <b>Description:</b> A wacky arcade game where the player tries to lead
          Squirrels on Jet-Skis to safety, whilst these are being attacked by
          giant lazer beavers. The player can repell the beavers by creating
          waves that push them away!{" "}
        </p>
        <a
          href="https://github.com/JanekUchman/DamGoodGame/tree/master/Better%20Game"
          rel="noreferrer noopener"
          target="_blank"
        >
          Source Code
        </a>
        <h3 className="page-header-main">Doomed Traveller</h3>
        <p className="blog-date">
          Published <time>January 27, 2016</time>
        </p>
        <ImageGallery images={[DoomedTravellerSplash, dt1, dt2, dt3]} />
        <p>
          <b>Jam Title:</b> Global Game Jam 2016
        </p>
        <p>
          <b>Jam Theme:</b> Ritual
        </p>
        <p>
          <b>Jam Duration:</b> 3 Days
        </p>
        <p>
          <b>Genre:</b> Adventure
        </p>
        <p className="jam-description">
          <b>Description:</b> Play as a wizard who is trying to assemble four
          artifacts that are required to complete a ritual, while evil cultists
          try to stop him. This was my first ever game jam and quite frankly,
          this is reflected by the clunky controlls..- a testimony to how far
          I've come since then!
        </p>
        <a
          href="https://globalgamejam.org/2016/games/doom-traveler"
          rel="noreferrer noopener"
          target="_blank"
        >
          Source Code and Download
        </a>
        <h3 className="page-header-main">Transbit</h3>
        <p className="blog-date">
          Published <time>May 25th, 2018</time>
        </p>
        <ImageGallery images={[transbit]} />
        <p>
          <b>Jam Title:</b> De Space Jam!
        </p>
        <p>
          <b>Jam Theme:</b> Multiple Dimensions
        </p>
        <p>
          <b>Jam Duration:</b> 5 Days
        </p>
        <p>
          <b>Genre:</b> Rogue-Lite
        </p>
        <p className="jam-description">
          <b>Description:</b> Transcend into another dimension - in this
          rogue-lite, the player needs to fight himself through each room and
          use powerups to become stronger, as the amount of enemies increases!
        </p>
        <a
          href="https://borzi.itch.io/transbit"
          rel="noreferrer noopener"
          target="_blank"
        >
          Download
        </a>
      </div>
    );
  }
}

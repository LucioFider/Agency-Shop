import React from "react";
import { girl, logo, wave } from "../assets";

const Hero = () => {
  return (
    <div>
      <nav>
        <div className="container">
          <img src={logo} alt="logo" className="nav-logo" />
        </div>
      </nav>
      <header>
        <div className="meet">
          <p className="text-small accent2">Meet Megan</p>
          <h2>Your Kind of Piano Teacher</h2>
          <p>
            Hello, I’m Megan Canabrey, a piano teacher of more than 15 years.
            I’m here to guide you as you learn the piano as an adult or a child,
            whether you’re a beginner or simply need a new challenge.
          </p>
          <a href="#method" className="btn accent1-bg bkg1-link">
            My teaching method
          </a>
        </div>
        <div className="meet-img">
          <img src={girl} alt="Megan Canabrey" className="meet-img__teacher" />
          <a href="#connect" className="btn btn-connect bkg2-bg text-link">
            <strong>
              Interested in learning?
              <span className="accent1-link">Let’s Connect!</span>
            </strong>
            <img width="20px" src={wave} alt="Emoji Wave" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Hero;

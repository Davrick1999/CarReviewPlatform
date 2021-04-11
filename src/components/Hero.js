import React from "react";
import "../App.css";
import "./Hero.css";
import { AutoScroll } from "./AutoScroll";

function Hero() {
  return (
    <div className="hero-container" id="hero">
      <h1>Car Review Platform</h1>
      <p>Review your favorite cars</p>
      <div className="hero-btns">
        <AutoScroll
          href="#cards"
          className="btns"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
        >
          GET STARTED
        </AutoScroll>
      </div>
    </div>
  );
}

export default Hero;

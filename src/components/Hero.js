import React from "react";
import "../App.css";
import "./Hero.css";
import { Button } from "./Button";

function Hero() {
  return (
    <div className="hero-container" id="hero">
      <h1>Car Review Platform</h1>
      <p>Review your favorite cars</p>
      <div className="hero-btns">
        <Button
          to="/compare"
          className="btns"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default Hero;

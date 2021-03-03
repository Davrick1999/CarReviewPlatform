import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Car Review Platform</h1>
      <p>Review your favorite cars</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn-primary"
          buttonSize="btn-large"
        >
          WATCH TRAILER
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

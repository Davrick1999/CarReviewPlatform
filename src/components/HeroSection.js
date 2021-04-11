import React from "react";
import "../App.css";
import "./HeroSection.css";
import specs from "./specs";

function HeroSection() {
  const carSpecs = specs.map((spec, index) => {
    return (
      <div key={index} className="bg1">
        <h2>
          {spec.title} <span>{spec.sub}</span>
        </h2>
        <p>{spec.p}</p>
      </div>
    );
  });

  return <div className="hero-section-container">{carSpecs}</div>;
}

export default HeroSection;

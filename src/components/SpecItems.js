import React from "react";
import "./../App.css";
import specs from "./specs";

function SpecItems() {
  const carSpecs = specs.map((spec, index) => {
    return (
      <div key={index} class="center btn-half-outline">
        <h2>
          {spec.title} <span>{spec.sub}</span>
        </h2>
        <p>{spec.p}</p>
      </div>
    );
  });
  return carSpecs;
}

export default SpecItems;

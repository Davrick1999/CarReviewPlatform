import React from "react";
import "./../App.css";
import CardItem from "./CardItem";
import cardPic9 from "../assets/images/img-9.jpg";
import cardPic8 from "../assets/images/img-6.jpg";
import SpecItems from "./SpecItems";

function CompCards() {
  return (
    <div className="compcards comparison">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src={cardPic9} text={<SpecItems />} label="Supercar" />
            <CardItem src={cardPic8} text={<SpecItems />} label="Supercar" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CompCards;

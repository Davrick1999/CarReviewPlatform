import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import cardPic9 from "../assets/images/img-9.jpg";
import cardPic8 from "../assets/images/img-8.jpg";
import cardPic7 from "../assets/images/img-7.jpg";
import cardPic6 from "../assets/images/img-6.jpg";
import cardPic4 from "../assets/images/img-4.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these cars</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={cardPic9}
              text="Pick yourself one of the coolest supercars"
              label="Supercars"
              path="/services"
            />
            <CardItem
              src={cardPic8}
              text="When it comes to luxury, RR is the king"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={cardPic6}
              text="Pick yourself one of the coolest supercars"
              label="Supercars"
              path="/services"
            />
            <CardItem
              src={cardPic4}
              text="When it comes to luxury, RR is the king"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src={cardPic7}
              text="Don't forget about family cars"
              label="Safest cars"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

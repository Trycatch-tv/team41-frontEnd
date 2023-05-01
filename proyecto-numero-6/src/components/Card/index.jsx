import React from "react";
import { StartRate } from "../StarRate";
import Eye from "../../assets/visibility.png";
import "./Card.css";

function Card({ imgSrc, altImg, title, description, by, toggleModal }) {
  return (
    <div className="Card">
      <div className="Card__container">
        <img src={imgSrc} alt={altImg} />
        <h2>{title}</h2>
        <p>{`Por: ${by}`}</p>
      </div>
      <p>{description}</p>
      <div className="Card__options">
        <StartRate totalStars={5} />
        <button onClick={toggleModal}>
          <img src={Eye} alt="Eye" />
        </button>
      </div>
    </div>
  );
}

export { Card };

import React from "react";
import "./Card.css";

const Card = ({ emoji, title, desc }) => {
  return (
    <div className="cardd">
      <img src={emoji} alt="" />
      <span>{title}</span>
      <span>{desc}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;

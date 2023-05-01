import "./Card.css";

import React from "react";

const Card = ({ id, theme, name, link, posterLink }) => {
  return (
    <div className="allMoviesContainer">
      <div className="moviesContainer">
        <img className="moviesPoster" src={posterLink} alt="photo" />

        <div className="moviesDescription">
          <p className="moviesName">{name}</p>
          <button className="moviesPlayAndDownload">
            <a href={link} className="card-a" target="_blank">
              Watch
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

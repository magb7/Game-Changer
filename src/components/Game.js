import React from "react";
import { Link } from "react-router-dom";
import "./Game.css";

const Game = ({ gameInfo, deleteGame }) => {
  return (
    <Link to={`/Game/Screenshots/${gameInfo.id}`} className="link-wrapper">
      <div
        className="game-wrapper"
        style={{
          background: `no-repeat center/100% url(${gameInfo.background_image})`,
          objectFit: "cover",
        }}
      >
        <button onClick={() => deleteGame(gameInfo.id)} className="delete-btn">
          X
        </button>
        <div className="info-wrapper">
          <h2 className="title">{gameInfo.name}</h2>
          <p>Release date: {gameInfo.released}</p>
          <p>Rate: {gameInfo.rating}</p>
        </div>
      </div>
    </Link>
  );
};

export default Game;

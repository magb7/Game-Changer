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
        }}
      >
        <button onClick={() => deleteGame(gameInfo.id)} className="delete-btn">
          X
        </button>
        <div className="info-wrapper">
          <h2>{gameInfo.name}</h2>
          <div className="details-wrapper">
            <p>release date: {gameInfo.released}</p>
            <p>rate: {gameInfo.rating}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Game;

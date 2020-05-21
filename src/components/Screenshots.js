import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Screenshots.css";

// Context
import GameContext from "../contexts/game-context";

const Screenshots = () => {
  const { gameInfo, setGameInfo } = useContext(GameContext);
  let { gameId } = useParams();

  useEffect(() => {
    getGameId();
  }, [gameId]);

  const getGameId = () => {
    const id = Number(gameId);
    const filteredGameId = [...gameInfo].filter((game) => {
      return game.id === id;
    });
    setGameInfo(filteredGameId);
  };

  return (
    <div
      className="screenshot-container"
      style={{
        backgroundImage: `url(${gameInfo[0].background_image})`,
      }}
    >
      <div className="top-bar">
        <Link to={`/`}>
          <button className="home-link">Back Home</button>
        </Link>
        <h2>{gameInfo[0].name}</h2>
      </div>

      <div className="content-wrapper">
        {gameInfo[0] ? (
          gameInfo[0].short_screenshots.map((screenshot, index) => {
            return (
              <a href={screenshot.image} target="_blank">
                <img
                  src={screenshot.image}
                  alt="Screenshot from the game"
                  key={index}
                />
              </a>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Screenshots;

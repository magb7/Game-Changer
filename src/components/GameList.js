import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./GameList.css";

// Component
import Game from "./Game";
import GameContext from "../contexts/game-context";

const GameList = () => {
  const { gameInfo, setGameInfo } = useContext(GameContext);
  const [toggleBestGame, setToggleBestGame] = useState(false);

  useEffect(() => {
    getGame();
  }, []);

  const getGame = () => {
    axios
      .get("https://wild-games.herokuapp.com/api/v1")
      .then((response) => response.data)
      .then((data) => setGameInfo(data));
  };

  const deleteGame = (id) => {
    const deletedGame = gameInfo.filter((game) => {
      return game.id !== id;
    });
    setGameInfo(deletedGame);
  };

  const filterBestGame = () => {
    if (!toggleBestGame) {
      const bestGame = gameInfo.filter((game) => {
        return game.rating >= 4.5;
      });
      setToggleBestGame(!toggleBestGame);
      setGameInfo(bestGame);
    } else {
      getGame();
      setToggleBestGame(!toggleBestGame);
    }
  };

  return (
    <div className={toggleBestGame ? "container-filtered" : "container"}>
      <button
        className="sortGame"
        onClick={() => {
          filterBestGame();
        }}
      >
        {toggleBestGame ? "All Games" : "Best Games"}
      </button>
      <div className="gameList-wrapper">
        {gameInfo ? (
          gameInfo.map((game, index) => {
            return <Game gameInfo={game} deleteGame={deleteGame} key={index} />;
          })
        ) : (
          <p> Loading...</p>
        )}
      </div>
    </div>
  );
};

export default GameList;

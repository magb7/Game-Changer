import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

// Context
import GameContext from "./contexts/game-context";

// Component
import GameList from "./components/GameList";
import Screenshots from "./components/Screenshots";

function App() {
  const [gameInfo, setGameInfo] = useState([]);
  const value = { gameInfo, setGameInfo };

  return (
    <div>
      <GameContext.Provider value={value}>
        <Switch>
          <Route exact path="/" component={GameList} />
          <Route path="/Game/Screenshots/:gameId" component={Screenshots} />
        </Switch>
      </GameContext.Provider>
    </div>
  );
}

export default App;

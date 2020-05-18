import { createContext } from "react";

const GameContext = createContext({
  gameInfo: [],
  setGameInfo: () => {},
});

export default GameContext;

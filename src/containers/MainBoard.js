import React, { useReducer } from "react";
import gameStateReducer from "../store/game_state";
import Board from "../components/js/board/Board";

export const gameContext = React.createContext();

const MainBoard = () => {
  const [state, dispatch] = useReducer(gameStateReducer, { myTurn: true });
  return (
    <gameContext.Provider value={{ state, dispatch }}>
      <Board />
    </gameContext.Provider>
  );
};

export default MainBoard;

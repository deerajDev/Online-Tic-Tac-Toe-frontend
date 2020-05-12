import React, { useReducer } from "react";
import gameStateReducer from "../store/game_state";
import Board from "../components/js/board/Board";

export const gameContextDispatch = React.createContext();
export const gameContextState = React.createContext();

const MainBoard = () => {
  const [state, dispatch] = useReducer(gameStateReducer, {
    myTurn: true,
    gameStarted: false,
  });
  return (
    <gameContextDispatch.Provider value={dispatch}>
      <gameContextState.Provider value={state}>
        <Board gameId={state.gameID} />
      </gameContextState.Provider>
    </gameContextDispatch.Provider>
  );
};

export default MainBoard;

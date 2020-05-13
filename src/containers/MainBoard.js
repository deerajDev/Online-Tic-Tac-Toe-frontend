import React, { useReducer } from "react";
import gameStateReducer from "../store/game_state";
import cellStateReducer from "../store/cell_state";
import Board from "../components/js/board/Board";

//game state state
export const gameContextDispatch = React.createContext();
export const gameContextState = React.createContext();

//opponent move
export const opponentContextDispatch = React.createContext();
export const opponentContextState = React.createContext();

const MainBoard = () => {
  const [state, dispatch] = useReducer(gameStateReducer, {
    myTurn: true,
    gameStarted: false,
  });
  const [cellState, cellStateDispatcher] = useReducer(cellStateReducer);
  return (
    <gameContextDispatch.Provider value={dispatch}>
      <gameContextState.Provider value={state}>
        <opponentContextDispatch.Provider value={cellStateDispatcher}>
          <opponentContextState.Provider value={cellState}>
            <Board gameId={state.gameID} />
          </opponentContextState.Provider>
        </opponentContextDispatch.Provider>
      </gameContextState.Provider>
    </gameContextDispatch.Provider>
  );
};

export default MainBoard;

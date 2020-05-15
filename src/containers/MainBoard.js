import React, { useReducer } from "react";
import gameStateReducer from "../store/game_state";
import joinStateReducer from "../store/extra_state";
import Board from "../components/js/board/Board";

//game state state
export const gameContextDispatch = React.createContext();
export const gameContextState = React.createContext();

//extra state for setting flag
export const joinContextState = React.createContext();

const matrix = [
  [undefined, undefined, undefined],
  [undefined, undefined, undefined],
  [undefined, undefined, undefined],
];

const MainBoard = () => {
  const [state, dispatch] = useReducer(gameStateReducer, {
    myTurn: false,
    gameStarted: false,
    matrix,
  });

  //join state,
  const joinState = useReducer(joinStateReducer)[0];

  return (
    <gameContextDispatch.Provider value={dispatch}>
      <gameContextState.Provider value={state}>
        <joinContextState.Provider value={joinState}>
          <Board />
        </joinContextState.Provider>
      </gameContextState.Provider>
    </gameContextDispatch.Provider>
  );
};

export default MainBoard;

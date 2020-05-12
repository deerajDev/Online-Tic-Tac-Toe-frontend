import React, { useContext } from "react";
import { gameContextState } from "../../../containers/MainBoard";
import PlayerInfo from "./PlayerInfo";
import "../../css/Board/game_info.css";
const GameInfo = () => {
  const state = useContext(gameContextState);
  if (state.gameStarted) {
    return (
      <div className="player-info">
        <PlayerInfo
          name={"You"}
          animationClass={state.myTurn ? "player-active" : null}
        />
        <PlayerInfo
          name={"Opponent"}
          animationClass={!state.myTurn ? "player-active" : null}
        />
      </div>
    );
  } else {
    return <h2 className="show-info">Waiting for your Opponent </h2>;
  }
};

export default GameInfo;

import React, { useContext } from "react";
import { gameContextState } from "../../../containers/MainBoard";
import PlayerInfo from "./PlayerInfo";
import "../../css/Board/game_info.css";
const GameInfo = () => {
  const state = useContext(gameContextState);
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
};

export default GameInfo;

import React from "react";
import PlayerInfo from "./PlayerInfo";
import "../../css/Board/game_info.css";
const GameInfo = () => {
  return (
    <div className="player-info">
      <PlayerInfo />
      <PlayerInfo />
    </div>
  );
};

export default GameInfo;

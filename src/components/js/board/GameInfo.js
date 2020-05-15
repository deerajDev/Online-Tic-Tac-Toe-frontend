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
          imgID={state.userType}
          name={"You"}
          animationClass={state.myTurn ? "player-active" : null}
        />
        <PlayerInfo
          imgID={(state.userType + 1) % 2}
          name={"Opponent"}
          animationClass={!state.myTurn ? "player-active" : null}
        />
      </div>
    );
  } else {
    return <h6 className="show-info">Share this gameId and start playing</h6>;
  }
};

export default GameInfo;

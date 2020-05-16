import React, { useContext } from "react";
import {
  gameContextDispatch,
  gameContextState,
} from "../../../containers/MainBoard";
import { joinStateContext, notificationDispatchContext } from "../../../App";
import Row from "./Row";
import GameInfo from "./GameInfo";
import "../../css/Board/board.css";

let connection = null;
export const connectionContext = React.createContext();
const Board = (props) => {
  //context of connection

  //using opponent context
  const gameState = useContext(gameContextState);
  const gameDispatcher = useContext(gameContextDispatch);
  //using game_state_context

  //using join context
  const joinState = useContext(joinStateContext);

  //notification dispatcher
  const notificationDispatch = useContext(notificationDispatchContext);
  //creating a connection object
  if (!connection) {
    connection = new WebSocket("ws://localhost:9000");
    connection.onopen = () => {
      if (joinState) {
        connection.send(
          JSON.stringify({ action: "join_game", game_id: joinState.gameID })
        );
      } else {
        connection.send(JSON.stringify({ action: "create_game" }));
      }
    };

    connection.onmessage = (msg) => {
      const data = JSON.parse(msg.data);

      const action = data["action"];
      if (action === "set_game_id") {
        //set the host gameID
        setGameID(data["gameID"]);
      }
      //if it's opponent turn
      else if (action === "opponent_turn") {
        gameDispatcher({
          type: "SWITCH_TURN",
          payload: false,
        });
      }
      if (action === "game_settings") {
        //game settings handler
        gameSettings(data);
      } else if (action === "update_matrix") {
        gameDispatcher({
          type: "UPDATE_MATRIX",
          payload: data,
        });
      }

      //if it's a draw
      else if (action === "draw") {
        notificationDispatch({
          type: "WARNING",
          payload: "match draw",
        });

        gameDispatcher({
          type: "RESET",
          payload: data,
        });
        notificationDispatch({
          type: "RESET",
        });
      }
      //if you lost
      else if (action === "you_lost") {
        //you lost handler
        notificationDispatch({
          type: "ERROR",
          payload: "You lost",
        });

        gameDispatcher({
          type: "RESET",
          payload: data,
        });
        notificationDispatch({
          type: "RESET",
        });
      }
      //if you won
      else if (action === "you_won") {
        //you won handler

        notificationDispatch({
          type: "SUCCESS",
          payload: "You won",
        });
        gameDispatcher({
          type: "RESET",
          payload: data,
        });
        notificationDispatch({
          type: "RESET",
        });
      }
    };
  }

  //utilities for connection
  const setGameID = (gameID) => {
    gameDispatcher({
      type: "SET_GAME_ID",
      payload: gameID,
    });
  };

  const gameSettings = (data) => {
    //sets the gameVariable
    gameDispatcher({ type: "SET_GAME_CONFIG", payload: data });
  };

  return (
    <connectionContext.Provider value={connection}>
      <div className="board">
        <h2 className="board-heading">Game id : {gameState.gameID}</h2>
        <Row row_num={"0"} />
        <Row row_num={"1"} />
        <Row row_num={"2"} />
        <GameInfo />
      </div>
    </connectionContext.Provider>
  );
};

export default Board;

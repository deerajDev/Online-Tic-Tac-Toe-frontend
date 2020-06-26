import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { joinDispatcherContext, notificationDispatchContext } from "../../App";
import Button from "./button/Button";

import "../css/modal/modal.css";
const baseURL = "Online-Tic-Tac-Toe-frontend";
const Modal = () => {
  const [gameID, setGameID] = useState("");
  const history = useHistory();
  const joinDispatcher = useContext(joinDispatcherContext);
  const notificationDispatcher = useContext(notificationDispatchContext);

  const verifyGameID = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch(`http://localhost:9000/${gameID}`);
      if (data.status === 200) {
        joinDispatcher({
          type: "JOIN",
          payload: gameID,
        });
        notificationDispatcher({
          type: "SUCCESS",
          payload: "Start playing",
        });
        notificationDispatcher({
          type: "RESET",
        });
        //redirect to the game board

        history.push(`${baseURL}/game`);
      }
      //pushing to board
    } catch (e) {
      notificationDispatcher({
        type: "ERROR",
        payload: "Invalid GameID",
      });

      notificationDispatcher({
        type: "RESET",
      });
    }
  };

  return (
    <div className="modal_container_wrapper">
      <div className="modal_container">
        <input
          value={gameID}
          className="modal_input"
          placeholder={"enter game id"}
          maxLength="15"
          onChange={(e) => setGameID(e.target.value)}
        />
        <Button
          onClickHandler={verifyGameID}
          extra_button_style="button_override"
          text={"Join game"}
          extra_text_style={"button_text_override"}
        />
      </div>
    </div>
  );
};

export default Modal;

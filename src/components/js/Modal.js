import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { joinDispatcherContext } from "../../App";
import Button from "./button/Button";

import "../css/modal/modal.css";
const Modal = () => {
  const [gameID, setGameID] = useState("");
  const history = useHistory();
  const joinDispatcher = useContext(joinDispatcherContext);

  const verifyGameID = async (e) => {
    e.preventDefault();
    try {
      // const verified = await fetch(`http://localhost:9000/${gameID}`);

      //dispatching the data
      joinDispatcher({
        type: "JOIN",
        payload: gameID,
      });

      //pushing to board
      history.push("/game");
    } catch (e) {
      console.log(e);
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

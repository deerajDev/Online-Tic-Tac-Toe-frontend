import React, { useState, useContext } from "react";
import {
  gameContextState,
  gameContextDispatch,
  opponentContextState,
} from "../../../containers/MainBoard";
import Image from "./Image";
import "../../css/Board/cell.css";

const Cell = (props) => {
  const [clicked, setClicked] = useState(false);
  const state = useContext(gameContextState);
  const dispatch = useContext(gameContextDispatch);
  const opponentMove = useContext(opponentContextState);
  const handleChange = () => {
    setClicked(true);
    dispatch({ type: "SWITCH_TURN" });
  };
  //if opponent move belongs to this cell
  if (opponentMove && opponentMove.opponentMove === props.cell_num) {
    return (
      <div className="cell">
        <Image imageID={state.userType + 1} />
      </div>
    );
  }

  //if this box is clicked  by you
  return (
    <div
      className="cell"
      // onClick={state.myTurn & state.gameStarted ? handleChange : null}
      onClick={handleChange}
    >
      {clicked && <Image imageID={state.userType} />}
    </div>
  );
};

export default Cell;

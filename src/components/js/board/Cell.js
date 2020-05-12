import React, { useState, useContext } from "react";
import {
  gameContextState,
  gameContextDispatch,
} from "../../../containers/MainBoard";
import Image from "./Image";
import "../../css/Board/cell.css";

const Cell = () => {
  const [clicked, setClicked] = useState(false);
  const state = useContext(gameContextState);
  const dispatch = useContext(gameContextDispatch);
  const handleChange = () => {
    setClicked(true);
    dispatch({ type: "SWITCH_TURN" });
  };
  return (
    <div className="cell" onClick={state.myTurn ? handleChange : null}>
      {clicked && <Image />}
    </div>
  );
};

export default Cell;

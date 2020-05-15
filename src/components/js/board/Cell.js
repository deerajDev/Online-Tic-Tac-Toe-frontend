import React, { useContext, useMemo } from "react";
import {
  gameContextState,
} from "../../../containers/MainBoard";
import { connectionContext } from "./Board";
import Image from "./Image";
import "../../css/Board/cell.css";

const Cell = (props) => {
  const gameState = useContext(gameContextState);
  const connection = useContext(connectionContext);
  //memoiszation of row num and col num
  const [row_num, col_num] = useMemo(() => {
    const temp = props.cell_num.split("_");
    const row_num = parseInt(temp[0]);
    const col_num = parseInt(temp[1]);
    return [row_num, col_num];
  }, []);

  const value = gameState.matrix[row_num][col_num];
  const handleChange = () => {
    connection.send(
      JSON.stringify({
        action: "update",
        userType: gameState.userType,
        cell_num: props.cell_num,
      })
    );
  };
  //if matrix value is undefined
  if (value !== undefined) {
    return (
      <div className="cell">
        <Image imgID={value % 2} />
      </div>
    );
  }
  //else render the empty cell
  else {
    return (
      <div
        className="cell"
        onClick={gameState.myTurn & gameState.gameStarted ? handleChange : null}
      ></div>
    );
  }
};

export default Cell;

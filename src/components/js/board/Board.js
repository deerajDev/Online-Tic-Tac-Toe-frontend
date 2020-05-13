import React from "react";
import Row from "./Row";
import GameInfo from "./GameInfo";
import "../../css/Board/board.css";
const Board = (props) => {
  return (
    <div className="board">
      <h2 className="board-heading">Game id : {props.gameID}</h2>
      <Row row_num={"0"} />
      <Row row_num={"1"} />
      <Row row_num={"2"} />
      <GameInfo />
    </div>
  );
};

export default Board;

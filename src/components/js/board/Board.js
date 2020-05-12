import React from "react";
import Row from "./Row";
import GameInfo from "./GameInfo";
import "../../css/Board/board.css";
const Board = (props) => {
  return (
    <div className="board">
      <h2 className="board-heading">Game id: 2344534</h2>
      <Row />
      <Row />
      <Row />
      <GameInfo />
    </div>
  );
};

export default Board;

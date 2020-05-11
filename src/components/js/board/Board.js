import React from "react";
import Row from "./Row";
import "../../css/Board/board.css";
const Board = () => {
  return (
    <div className="board">
      <Row />
      <Row />
      <Row />
    </div>
  );
};

export default Board;

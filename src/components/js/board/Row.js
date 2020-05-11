import React from "react";
import Cell from "./Cell";
import "../../css/Board/row.css";

const Row = () => {
  return (
    <div className="row">
      <Cell />
      <Cell />
      <Cell />
    </div>
  );
};

export default Row;

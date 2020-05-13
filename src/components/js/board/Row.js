import React from "react";
import Cell from "./Cell";
import "../../css/Board/row.css";

const Row = (props) => {
  return (
    <div className="row">
      <Cell cell_num={`${props.row_num}_0`} />
      <Cell cell_num={`${props.row_num}_1`} />
      <Cell cell_num={`${props.row_num}_2`} />
    </div>
  );
};

export default Row;

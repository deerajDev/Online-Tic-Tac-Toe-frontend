import React, { useState } from "react";
import Image from "./Image";
import "../../css/Board/cell.css";

const Cell = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="cell" onClick={() => setClicked(true)}>
      {clicked && <Image />}
    </div>
  );
};

export default Cell;

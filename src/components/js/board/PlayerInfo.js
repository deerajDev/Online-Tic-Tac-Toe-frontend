import React from "react";
import Image from "./Image";

const PlayerInfo = (props) => {
  return (
    <div>
      <h3 className={`${props.animationClass}`}>{props.name}</h3>
      <Image />
    </div>
  );
};

export default PlayerInfo;

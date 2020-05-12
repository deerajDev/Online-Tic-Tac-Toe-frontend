import React, { useContext } from "react";
import { gameContextState } from "../../../containers/MainBoard";
import { Cancel, Circle } from "./Svg";

const Image = () => {
  const state = useContext(gameContextState);
  if (state.gameStarted) {
    if (state.userType % 2 === 0) {
      return <Circle />;
    } else {
      return <Cancel />;
    }
  }
  return <></>;
};

export default Image;

import React from "react";
import { Cancel, Circle } from "./Svg";

const Image = (props) => {
  if (props.imageID) {
    if (props.imageID % 2 === 0) {
      return <Circle />;
    } else {
      console.log("entered the else statement");
      return <Cancel />;
    }
  } else return <></>;
};
export default Image;

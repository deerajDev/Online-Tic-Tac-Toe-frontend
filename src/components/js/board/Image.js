import React from "react";
import { Cancel, Circle } from "./Svg";

const Image = (props) => {
  if (props.imageID) {
    if (props.imageID % 2 === 0) {
      return <Circle />;
    } else {
      return <Cancel />;
    }
  } else return <></>;
};
export default Image;

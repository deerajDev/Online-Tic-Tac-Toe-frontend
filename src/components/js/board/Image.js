import React from "react";
import { Cancel, Circle } from "./Svg";

const Image = (props) => {
  if (props.imgID !== undefined) {
    if (props.imgID % 2 === 0) {
      return <Circle />;
    } else {
      return <Cancel />;
    }
  } else return <></>;
};
export default Image;

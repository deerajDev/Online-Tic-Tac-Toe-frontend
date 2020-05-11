import React from "react";
import Button from "./Button";
import "../../css/button/button_container.css";

const ButtonContainer = (props) => {
  return (
    <div className="button_container">
      <Button onClickHandler={props.hostGameHandler} text={"Host Game"} />
      <Button onClickHandler={props.createGameHandler} text={"Join Game"} />
    </div>
  );
};

export default ButtonContainer;

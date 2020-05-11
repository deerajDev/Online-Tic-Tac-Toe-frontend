import React from "react";
import Button from "./Button";
import "./css/button_container.css";

const ButtonContainer = () => {
  return (
    <div className="button_container">
      <Button text={"Host Game"} />
      <Button text={"Join Game"} />
    </div>
  );
};

export default ButtonContainer;

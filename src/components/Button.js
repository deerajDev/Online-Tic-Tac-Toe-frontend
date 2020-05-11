import React from "react";
import "./css/button.css";

const Button = (props) => {
  return (
    <div onClick={} className="button">
      <p className="button_text">{props.text}</p>
    </div>
  );
};

export default Button;

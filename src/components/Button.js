import React from "react";
import "./css/button.css";

const Button = (props) => {
  return (
    <div className={`button ${props.extra_button_style}`}>
      <p className={`button_text ${props.extra_text_style}`}>{props.text}</p>
    </div>
  );
};

export default Button;

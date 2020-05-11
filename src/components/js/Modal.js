import React from "react";
import Button from "./Button";
import "../css/modal/modal.css";
const Modal = () => {
  return (
    <div className="modal_container_wrapper">
      <div className="modal_container">
        <input
          className="modal_input"
          placeholder={"enter game id"}
          maxLength="15"
        />
        <Button
          extra_button_style="button_override"
          text={"Join game"}
          extra_text_style={"button_text_override"}
        />
      </div>
    </div>
  );
};

export default Modal;

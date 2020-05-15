import React from "react";
import "../../css/notification/notification.css";

const Notification = (props) => {
  return (
    <div className="notification-container">
      <p className="notification-message">{props.state.msg}</p>
      <div className={`${props.state.type}`}></div>
    </div>
  );
};

export default Notification;

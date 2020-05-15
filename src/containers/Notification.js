import React, { useContext } from "react";
import { notificationStateContext } from "../App";

import Notifier from "../components/js/notification/Notification";

const Notification = () => {
  const state = useContext(notificationStateContext);
  if (state) {
    return <Notifier state={state} />;
  } else {
    return <></>;
  }
};
export default Notification;

import React, { useReducer } from "react";
import notificationReducer from "../store/notification";

import Notifier from "../components/js/notification/Notification";

const initialState = {};

const Notification = () => {
  const state = useReducer(notificationReducer, initialState)[0];
  if (state.msg) {
    return <Notifier state={state} />;
  } else {
    return <></>;
  }
};
export default Notification;

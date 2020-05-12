const notificationReducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return { msg: action.msg, color: "green" };
    case "WARNING":
      return { msg: action.msg, color: "yellow" };
    case "ERROR":
      return { msg: action.msg, color: "red" };
    default:
      return state;
  }
};

export default notificationReducer;

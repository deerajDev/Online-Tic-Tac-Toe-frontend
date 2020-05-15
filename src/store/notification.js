const notificationReducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return { msg: action.payload, type: "success" };
    case "WARNING":
      return { msg: action.payload, type: "info" };
    case "ERROR":
      return { msg: action.payload, type: "error" };
    default:
      return state;
  }
};

export default notificationReducer;

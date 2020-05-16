const notificationReducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return { msg: action.payload, type: "success" };
    case "WARNING":
      return { msg: action.payload, type: "info" };
    case "ERROR":
      console.log("entered error case");
      return { msg: action.payload, type: "error" };
    
    case "RESET":
      return{
        msg:undefined, type:undefined
      }
    default:
      return state;
  }
};

export default notificationReducer;

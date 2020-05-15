const cellStateReducer = (state, action) => {
  switch (action.type) {
    case "OPPONENT_MOVE":
      return {
        opponentMove: action.payload,
      };

    default:
      return state;
  }
};

export default cellStateReducer;

const cellStateReducer = (state, action) => {
  switch (action.type) {
    case "OPPONENT_MOVE":
      return {
        opponent_move: action.payload,
      };

    default:
      return state;
  }
};

export default cellStateReducer;

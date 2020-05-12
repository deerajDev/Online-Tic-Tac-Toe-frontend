const gameStateReducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_TURN":
      return {
        ...state,
        myTurn: !state.myTurn,
      };
    case "SET_GAME_ID":
      return {
        ...state,
        gameID: action.payload.gameID,
      };

    case "SET_USER_CONFIG":
      return {
        ...state,
        userType: action.payload.userType,
        gameStarted: true,
      };
    default:
      return state;
  }
};

export default gameStateReducer;

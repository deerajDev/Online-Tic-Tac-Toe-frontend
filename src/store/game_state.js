

const gameStateReducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_TURN":
      return {
        myTurn: !state.myTurn,
      };

    default:
      return state;
  }
};



export default gameStateReducer;

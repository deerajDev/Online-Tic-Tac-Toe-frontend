const gameStateReducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_TURN":
      return {
        ...state,
        myTurn: action.payload,
      };
    case "SET_GAME_ID":
      return {
        ...state,
        gameID: action.payload,
      };

    case "SET_GAME_CONFIG":
      return {
        ...state,
        ...action.payload,
        gameStarted: true,
      };

    case "JOIN":
      return {
        ...state,
        join: true,
      };
    case "UPDATE_MATRIX":
      const value = action.payload.value;
      const [row_num, col_num] = action.payload["cell_num"];
      state["matrix"][row_num][col_num] = value;

      return {
        ...state,
        ...action.payload,
      };

    case "RESET":
      const matrix = [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
      ];
      return {
        ...state,
        matrix: matrix,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default gameStateReducer;

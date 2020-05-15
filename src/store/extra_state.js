const joinContextReducer = (state, action) => {
  switch (action.type) {
    case "JOIN":
      return { ...state, join: true, gameID: action.payload };
    default:
      return state;
  }
};

export default joinContextReducer;

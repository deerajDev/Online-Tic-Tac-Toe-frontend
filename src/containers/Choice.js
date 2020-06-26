import React from "react";
import ButtonContainer from "../components/js/button/ButtonContainer";

import { useHistory } from "react-router-dom";
const baseURL = "/Online-Tic-Tac-Toe-frontend";
const Choice = () => {
  const history = useHistory();
  const redirectTo = (path) => {
    history.push(path);
  };

  return (
    <ButtonContainer
      hostGameHandler={() => redirectTo(`${baseURL}/game`)}
      createGameHandler={() => redirectTo(`${baseURL}/join`)}
    />
  );
};

export default Choice;

import React from "react";
import ButtonContainer from "../components/ButtonContainer";
import { useHistory } from "react-router-dom";

const Choice = () => {
  const history = useHistory();
  const redirectTo = (path) => {
    history.push(path);
  };
  return (
    <div>
      <ButtonContainer
        hostGameHandler={() => redirectTo("/")}
        createGameHandler={() => redirectTo("/join")}
      />
    </div>
  );
};

export default Choice;

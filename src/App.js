import React from "react";
import Choices from "./containers/Choice";
import JoinGame from "./containers/JoinGame";
import MainBoard from "./containers/MainBoard";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Choices} />
      <Route exact path="/join" component={JoinGame} />
      <Route exact path="/game" component={MainBoard} />
    </Router>
  );
};

export default App;

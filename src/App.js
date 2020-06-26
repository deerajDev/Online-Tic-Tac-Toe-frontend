import React, { useReducer } from "react";
import joinReducer from "./store/extra_state";
import notificationReducer from "./store/notification";
import Choices from "./containers/Choice";
import JoinGame from "./containers/JoinGame";
import MainBoard from "./containers/MainBoard";
import Notification from "./containers/Notification";
import { BrowserRouter as Router, Route } from "react-router-dom";

//join context
export const joinStateContext = React.createContext();
export const joinDispatcherContext = React.createContext();

//notification context
export const notificationStateContext = React.createContext();
export const notificationDispatchContext = React.createContext();

const baseURL = "Online-Tic-Tac-Toe-frontend";
const App = () => {
  const [joinState, joinDispatcher] = useReducer(joinReducer);
  const [notificationState, notificationDispatch] = useReducer(
    notificationReducer
  );
  return (
    <Router>
      <notificationStateContext.Provider value={notificationState}>
        <notificationDispatchContext.Provider value={notificationDispatch}>
          <joinDispatcherContext.Provider value={joinDispatcher}>
            <joinStateContext.Provider value={joinState}>
              <Notification />
              <Route exact path={`${baseURL}/`} component={Choices} />
              <Route exact path={`${baseURL}/join`} component={JoinGame} />
              <Route exact path={`${baseURL}/game`} component={MainBoard} />
            </joinStateContext.Provider>
          </joinDispatcherContext.Provider>
        </notificationDispatchContext.Provider>
      </notificationStateContext.Provider>
    </Router>
  );
};

export default App;

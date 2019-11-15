import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "store";

import App from "App";
import SignUp from "Modules/AuthModule/SignUp/SignUp";
import LogIn from "Modules/AuthModule/LogIn/LogIn";
import TodoList from "Modules/TodoList/TodoList";

function NoMatch() {
  return <Redirect to="/welcome" />;
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/welcome" component={App} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/todolist" component={TodoList} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
    ,
  </Provider>,
  document.getElementById("root")
);

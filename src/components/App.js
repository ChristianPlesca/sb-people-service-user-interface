import React from "react";
import history from "../history";
import { Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./NavBar";
import HomePage from "./homepage/HomePage";
import LoginForm from "./authentication/LogIn";
import ListUsers from "./userslist/ListUsers";

const App = () => {
  return (
    <Router history={history}>
      <div>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginForm} />
          <Route path="/users-list" component={ListUsers} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

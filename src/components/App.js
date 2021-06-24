import React from "react";
import history from "../history";
import { Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./NavBar";
import HomePage from "./homepage/HomePage";
import LoginForm from "./authentication/LogIn";

const App = () => {
  return (
    <Router history={history}>
      <div>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

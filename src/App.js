import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Home from "./components/Pages/Home";
import UserSingle from "./components/Users/UserSingle";
import Alert from "./components/Layout/Alert";
import About from "./components/Pages/About";
import GitHubState from "./Context/gitHub/GitHubState";
import AlertState from "./Context/Alert/AlertState";
import NotFound from "./components/Pages/NotFound";

const App = () => {
  return (
    <GitHubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={UserSingle} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GitHubState>
  );
};

export default App;

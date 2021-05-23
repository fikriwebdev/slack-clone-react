import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Switch>
            <Route path="/">
              <h1>Hey this is the homepage</h1>
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;

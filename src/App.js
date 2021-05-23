import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./parts/Header";

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Switch>
            <Route path="/">
              <Header />
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;

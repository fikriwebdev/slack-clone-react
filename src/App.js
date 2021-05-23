import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./parts/Header";
import Sidebar from "./parts/Sidebar";
import styled from "styled-components";

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route path="/">{/* Chat */}</Route>
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

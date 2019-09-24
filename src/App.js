import React from "react";
import "./GlobalStyle.js";

import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle.js";
import Home from "./pages/Home.js";
import New from "./pages/New.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/new" exact component={New} />
      </Router>
    </>
  );
}

export default App;

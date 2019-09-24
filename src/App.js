import React from "react";

import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle.js";
import Home from "./pages/Home.js";
import New from "./pages/New.js";
import { func } from "prop-types";
import darkTheme from "./themes/dark.js";
import defaultTheme from "./themes/default.js";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.background};
`;

function App() {
  const [darkmode, setDarkmode] = React.useState(false);

  function handleToggleTheme() {
    setDarkmode(!darkmode);
  }
  return (
    <>
      <ThemeProvider theme={darkmode ? darkTheme : defaultTheme}>
        <Container>
          <GlobalStyle />
          <Router>
            <Route
              path="/"
              exact
              component={props => (
                <Home toggleTheme={handleToggleTheme} {...props} />
              )}
            />
            <Route path="/new" exact component={New} />
          </Router>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;

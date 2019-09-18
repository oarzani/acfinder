import React from "react";
import "./App.css";
import FilterList from "./components/FiltersList";
import RestaurantList from "./components/RestaurantList";
import Title from "./components/Header";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  font-size: 14px;
  background: green;
  /* background: #faf9ee; */
}
`;

const Appdiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Main = styled.main`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding-bottom: 25px;
`;

function App() {
  const [filters, setFilters] = React.useState({
    categories: "sushi"
  });

  function handleFilterChange(name, value) {
    const newFilters = { ...filters };
    if (value) {
      newFilters[name] = value;
    } else {
      delete newFilters[name];
    }
    //Frage.
    setFilters(newFilters);
  }
  return (
    <>
      <GlobalStyle />
      <Appdiv>
        <Title />
        <Main>
          <FilterList
            onFilterChange={handleFilterChange}
            selectedFilter={filters}
          />
          <RestaurantList selectedFilters={filters} />
        </Main>
      </Appdiv>
    </>
  );
}

export default App;

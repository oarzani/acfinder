import React from "react";
import RestaurantList from "../components/RestaurantList";
import FilterList from "../components/FiltersList";
import Title from "../components/Header";
import styled from "styled-components";

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

function Home() {
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
  );
}

export default Home;

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

function Home({ history, location }) {
  const params = new URLSearchParams(location.search);
  const [filters, setFilters] = React.useState({
    categories: params.get("categories") || "",
    distance: params.get("distance") || "",
    rating: params.get("price") || ""
  });
  function handleFilterChange(name, value) {
    // Create a copy of filter objects
    const newFilters = { ...filters };

    if (value) {
      newFilters[name] = value;
    } else {
      delete newFilters[name];
    }

    setFilters(newFilters);

    let searchString = "/?";
    const newFiltersAsArray = Object.entries(newFilters);
    for (const [filterName, filterValue] of newFiltersAsArray) {
      searchString += `${filterName}=${filterValue} &`;
    }
    let searchStringFinal = searchString.slice(0, -1);
    history.push(searchStringFinal);
    // history.push(
    //   `/?categories=${newFilters.categories}&distance=${newFilters.distance}&price=${newFilters.price}`
    // );
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

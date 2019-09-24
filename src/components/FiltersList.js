import React from "react";
import Filter from "./Filter";
import { filters, getFilterByName } from "../api/filters";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

function FilterList({ className, onFilterChange, selectedFilter }) {
  const [focusedFilterName, setFocusedFilterName] = React.useState(null);
  const focusedFilter = focusedFilterName && getFilterByName(focusedFilterName);
  return (
    <Container>
      {filters.map(filter => {
        return (
          <Filter
            key={filter.name}
            filter={filter}
            onChange={onFilterChange}
            selectFilter={selectedFilter[filter.name]}
          />
        );
      })}
    </Container>
  );
}

export default FilterList;

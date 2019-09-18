import React from "react";
import Filter from "./Filter";
import { filters } from "../api/filters";
import styled from "styled-components";

const ListFilter = styled.section`
  height: 80px;
  width: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #ffc15e;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0 5px 5px rgba(117, 117, 90, 0.6);
`;

function FilterList({ onFilterChange, selectedFilters }) {
  return (
    <ListFilter>
      {filters.map(filter => {
        return (
          <Filter
            key={filter.name}
            filter={filter}
            onChange={onFilterChange}
            selectFilter={selectedFilters[filter.name]}
          />
        );
      })}
    </ListFilter>
  );
}

export default FilterList;

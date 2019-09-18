import React from "react";
import styled from "styled-components";

const Filtercomponent = styled.select`
  width: 20%;
  height: 25px;
  border: solid #874c62 3px;
  border-radius: 5px;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

function Filter({ selectedFilter, filter, onChange }) {
  return (
    <Filtercomponent
      className="filter"
      onChange={event => {
        onChange(filter.name, event.target.value);
      }}
    >
      <option value="">{filter.name}</option>
      {filter.options.map(option => {
        const selected = option === selectedFilter;
        return (
          <option key={option} value={option} selected={selected}>
            {option}
          </option>
        );
      })}
    </Filtercomponent>
  );
}

export default Filter;

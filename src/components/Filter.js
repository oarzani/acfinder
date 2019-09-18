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

function Filter({ filter, onChange }) {
  return (
    <Filtercomponent
      className="filter"
      onChange={event => {
        onChange(filter.name, event.target.value);
      }}
    >
      <option value="">{filter.name}</option>
      {filter.options.map(option => {
        return <option key={option}>{option}</option>;
      })}
    </Filtercomponent>
  );
}

export default Filter;

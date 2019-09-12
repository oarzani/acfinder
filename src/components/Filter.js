import React from "react";

function Filter(props) {
  return (
    <select className="filter">
      <option value="Option">{props.filter.type}</option>
      <option value="Option">{props.filter.options[0]}</option>
      <option value="Option">{props.filter.options[1]}</option>
      <option value="Option">{props.filter.options[2]}</option>
      <option value="Option">{props.filter.options[3]}</option>
    </select>
  );
}

export default Filter;

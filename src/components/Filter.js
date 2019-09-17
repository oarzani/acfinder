// import React from "react";

// function Filter(props) {
//   const [filter, setFilter] = React.useState("");
//   return (

//       <select
//         className="filter"
//         value={filter}
//         onChange={event => setFilter(event.target.value);}>
//         <option>{props.filter.type}</option>
//         {props.filter.options.map(singleElement => {
//           return <option>{singleElement}</option>;
//         })}
//       </select>

//   );
// }

// export default Filter;

// {filters.map(filter => {
//   return <Filter filter={filter} />;
// })}
import React from "react";

function Filter({ filter, onChange }) {
  return (
    <select
      className="filter"
      onChange={event => {
        onChange(filter.name, event.target.value);
      }}
    >
      <option value="">{filter.name}</option>
      {filter.options.map(option => {
        return <option key={option}>{option}</option>;
      })}
    </select>
  );
}

export default Filter;

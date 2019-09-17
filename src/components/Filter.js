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

function Filter(props) {
  return (
    <select
      className="filter"
      onChange={event => {
        props.onChange(props.filter.name, event.target.value);
      }}
    >
      <option>{props.filter.name}</option>
      {props.filter.options.map(option => {
        return <option key={option}>{option}</option>;
      })}
    </select>
  );
}

export default Filter;

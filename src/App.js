import React from "react";
import "./App.css";
import FilterList from "./components/FiltersList";
import RestaurantList from "./components/RestaurantList";
import Header from "./components/Header";

function App() {
  const [filter, setFilter] = React.useState(null);

  function handleFilterChange(name, value) {
    const newFilter = {
      name: name,
      value: value
    };
    setFilter(newFilter);
  }

  return (
    <div className="App">
      <Header />
      <main className="main">
        <FilterList onFilterChange={handleFilterChange} />
        <RestaurantList selectedFilter={filter} />
      </main>
    </div>
  );
}

export default App;

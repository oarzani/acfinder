import React from "react";
import "./App.css";
import FilterList from "./components/FiltersList";
import RestaurantList from "./components/RestaurantList";
import Header from "./components/Header";

function App() {
  const [filters, setFilters] = React.useState("");

  function handleFilterChange(name, value) {
    const newFilters = { ...filters };
    newFilters[name] = value;
    setFilters(newFilters);
  }

  return (
    <div className="App">
      <Header />
      <main className="main">
        <FilterList onFilterChange={handleFilterChange} />
        <RestaurantList selectedFilters={filters} />
      </main>
    </div>
  );
}

export default App;

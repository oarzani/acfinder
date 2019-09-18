import React from "react";
import "./App.css";
import FilterList from "./components/FiltersList";
import RestaurantList from "./components/RestaurantList";
import Header from "./components/Header";

function App() {
  const [filters, setFilters] = React.useState({
    categories: "wraps"
  });

  function handleFilterChange(name, value) {
    const newFilters = { ...filters };
    if (value) {
      newFilters[name] = value;
    } else {
      delete newFilters[name];
    }
    //Frage.
    setFilters(newFilters);
  }

  return (
    <div className="App">
      <Header />
      <main className="main">
        <FilterList
          selectedFilters={filters}
          onFilterChange={handleFilterChange}
        />
        <RestaurantList selectedFilters={filters} />
      </main>
    </div>
  );
}

export default App;

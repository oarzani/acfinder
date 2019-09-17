import React from "react";
import Restaurant from "./Restaurant";
import { restaurants } from "../api/restaurants";

function RestaurantList({ selectedFilter }) {
  console.log(selectedFilter);
  const filtereredRestraunts = restaurants.filter(restaurant => {
    if (!selectedFilter) {
      return true;
    }
    if (selectedFilter.name === "distance") {
      switch (selectedFilter.value) {
        case "<1":
          return restaurant.distance < 1;
        case "<2":
          return restaurant.distance < 2;
        case "<4":
          return restaurant.distance < 4;
        default:
          break;
      }
    }
    if (selectedFilter.name === "price") {
      return restaurant.price >= selectedFilter.value.length;
      // return restaurant.price.includes(selectedFilter.value);
    }

    if (selectedFilter.name === "categories") {
      return restaurant.categories.includes(selectedFilter.value);
    }
    return true;
  });
  return (
    <div class="restaurantList">
      {filtereredRestraunts.map(restaurant => {
        return <Restaurant restaurant={restaurant} />;
      })}
    </div>
  );
}

export default RestaurantList;

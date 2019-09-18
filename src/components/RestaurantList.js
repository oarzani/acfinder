import React from "react";
import Restaurant from "./Restaurant";
import { restaurants } from "../api/restaurants";

function RestaurantList({ selectedFilters }) {
  console.log(selectedFilters);
  const filtereredRestraunts = restaurants.filter(restaurant => {
    let y = true;

    if (selectedFilters.distance) {
      switch (selectedFilters.distance) {
        case "<1":
          y = restaurant.distance < 1;
          break;
        case "<2":
          y = restaurant.distance < 2;
          break;
        case "<4":
          y = restaurant.distance < 4;
          break;
        default:
          break;
      }
    }
    if (y && selectedFilters.price) {
      y = restaurant.price === selectedFilters.price;
    }

    if (y && selectedFilters.categories) {
      y = restaurant.categories.includes(selectedFilters.categories);
    }
    return y;
  });
  return (
    <section class="list__restaurant">
      {filtereredRestraunts.map(restaurant => {
        return <Restaurant restaurant={restaurant} />;
      })}
    </section>
  );
}

export default RestaurantList;

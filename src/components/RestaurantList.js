import React from "react";
import Restaurant from "./Restaurant";
import { restaurants } from "../api/restaurants";

function RestaurantList() {
  return (
    <div class="restaurantList">
      {restaurants.map(restaurant => {
        return <Restaurant restaurant={restaurant} />;
      })}
    </div>
  );
}

export default RestaurantList;

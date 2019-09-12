import React from "react";
import Phrase from "./Text";
import Pic from "./Pic";

function Restaurant() {
  return (
    <article className="restaurant">
      <div className="innerRestaurant">
        <Pic />
        <Phrase />
      </div>
    </article>
  );
}

export default Restaurant;

import React from "react";
import Phrase from "./Text";
import Pic from "./Pic";

function Restaurant(props) {
  //props ist standartmäßig leer. Props ist ein Opject
  return (
    <article className="restaurant">
      <div className="innerRestaurant">
        {/* <Pic />
        <Phrase /> */}
        {props.restaurant.title}
      </div>
    </article>
  );
}

export default Restaurant;

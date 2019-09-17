// import React from "react";
// import Phrase from "./Text";
// import Pic from "./Pic";

// function Restaurant(props) {
//   //props ist standartmäßig leer. Props ist ein Opject
//   return (
//     <article className="restaurant">
//       <div className="innerRestaurant">
//         {/* <Pic />
//         <Phrase /> */}
//         {props.restaurant.title}
//       </div>
//     </article>
//   );
// }

// export default Restaurant;
import React from "react";
import { restaurants } from "../api/restaurants";

function Restaurant(props) {
  return (
    <div className="restaurant">
      {props.restaurant.title}
      <img
        src={props.restaurant.imgSrc}
        className="card__img"
        alt={props.restaurant.title}
      />
      <p>{props.restaurant.description}</p>
      <p>
        Distance: {props.restaurant.distance} minutes
        <br />
        Rating: {props.restaurant.rating} stars
        <br />
        Categories:
        {props.restaurant.categories.map(category => {
          return (
            <span className="innerRestaurant" key={category}>
              {category}
            </span>
          );
        })}
      </p>
    </div>
  );
}

export default Restaurant;

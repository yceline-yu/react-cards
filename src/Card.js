import React from "react";

/** Card - renders a card
 * 
 * 
 */
function Card({ image, value, suit }){
  return (
    <img src={image} alt={`${value} of ${suit}`}/>
  )
}

export default Card;
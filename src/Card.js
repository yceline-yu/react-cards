import React from 'react';

/** Card - renders a card
 *
 * Props: image (url)
 *        value (string)
 *        suit (string)
 *
 * State: none
 *
 * Deck -> Card
 */
function Card({ image, value, suit }) {
  return <img src={image} alt={`${value} of ${suit}`} />;
}

export default Card;

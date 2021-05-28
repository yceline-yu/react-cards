import React, { useState } from 'react';
import Card from './Card';
import axios from 'axios';

const BASE_API_URL = 'https://deckofcardsapi.com/api/deck';
/** Card Game
 *
 * Prop: deckId (integer)
 *
 * State: cardList ([array of objects])
 *
 * App -> CardGame > Card
 *
 * deckid is state in app and prop here
 */
function CardGame({ deckId }) { //do the effect and logic in here. so effect and it's resutl are in same component
  const [cardList, setCardList] = useState([]);

  async function handleClick(evt) {
    if (cardList.length === 5) {
      alert('Error: no cards remaining!');
    } else {
      const response = await axios.get(
        `${BASE_API_URL}/${deckId}/draw/?count=1`
      );
      console.log('handleClick response ->', response.data);
      setCardList((currCards) => [response.data.cards[0], ...currCards]);

    }
  }
//do map here not in return
  return (
    <div>
      <button onClick={handleClick}>Card Please!</button>
      {cardList.length}
      <div>
        {cardList.map((card) => (
          <span key={card.code}>
            <Card image={card.image} value={card.value} suit={card.suit} />
          </span>
        ))}
      </div>
    </div>
  );
}

export default CardGame;

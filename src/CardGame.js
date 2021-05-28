import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const BASE_API_URL = "https://deckofcardsapi.com/api/deck"
/** Card Game
 * 
 * Prop:
 * -none?
 * 
 * State:
 * - cardList? [array of objects]
 */
function CardGame({ deckId }){
  const [cardList, setCardList] = useState([]);

  async function handleClick(evt){
    const response = await axios.get(`${BASE_API_URL}/${deckId}/draw/?count=1`);
    console.log("handleClick response ->", response.data.cards[0])
    setCardList(currCards => [response.data.cards[0], ...currCards]);
  }

  return (
    <div>
      <button onClick={handleClick}>Card Please!</button>
      <ul>
        {cardList.map(card => <li key={card.code}>
          <Card image={card.image} value={card.value} suit={card.suit}/>
        </li>)}
      </ul>
    </div>
  )
}

export default CardGame;
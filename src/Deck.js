import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';

const BASE_API_URL = 'https://deckofcardsapi.com/api/deck';
/** Card Game
 *
 * Prop: none
 *
 * State: cardList ({code, image, suit, value})
 *        deck ({deck_id, remaining, shuffled, success})
 *
 * App -> Deck > Card
 *
 */

function Deck() {
  const [cardList, setCardList] = useState([]);
  const [deck, setDeck] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isShuffling, setIsShuffling] = useState(false);


  useEffect(function getDeckWhenMounted() {
    async function getDeck() {
      const response = await axios.get(`${BASE_API_URL}/new/shuffle/`);
      setDeck(response.data);
      console.log("response.data APP=", response.data)
      setIsLoading(false);
    }
    getDeck();
  }, []);

  useEffect(function shuffleDeck() {
    async function shuffleDeck() {
      const response = await axios.get(`${BASE_API_URL}/${deck.deck_id}/shuffle/`);
      console.log("response.data APP=", response.data)
      setIsShuffling(false);
    }
    if (isShuffling) {
      console.log("getting shuffle only if truthy!");
      shuffleDeck()
    };
  }, [isShuffling]);

  async function handleClick(evt) {
    if (cardList.length === 5) {
      alert('Error: no cards remaining!');
    } else {
      const response = await axios.get(
        `${BASE_API_URL}/${deck.deck_id}/draw/?count=1`
      );
      console.log('handleClick response ->', response.data);
      setCardList((currCards) => [response.data.cards[0], ...currCards]);

    }
  }

  function handleShuffle(evt) {
    setIsShuffling(true);
    setCardList([]);
  }

  let cards = cardList.map(card =>
    <span key={card.code}>
      <Card image={card.image} value={card.value} suit={card.suit} />
    </span>);

  return (
    <div>
      { isLoading || isShuffling
        ? "Getting a deck!"
        : <div><button onClick={handleShuffle}>Shuffle!</button>
          <button onClick={handleClick}>Card Please!</button></div>}
      <div>{cards}</div>
    </div>
  );
}

export default Deck;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CardGame from './CardGame';

const DECK_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle'; //use as base and ieport

/** Simple app to draw card from a deck
 *
 * Props: none
 * State: isLoading (boolean)
 *        deckId (integer)
 *
 * App -> CardGame
 */

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [deckId, setDeckId] = useState(null);

  useEffect(function getDeckIdWhenMounted() {
    async function getDeckId() {
      const response = await axios.get(DECK_URL);
      setDeckId(response.data.deck_id);
      console.log("response.data APP=", response.data)
      setIsLoading(false);
    }
    getDeckId();
  }, []);

  return (
    <div className="App">
      {isLoading ? 'Getting Cards!' : <CardGame deckId={deckId} />}
    </div>
  );
}

export default App;

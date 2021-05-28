import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import CardGame from "./CardGame"

const DECK_URL = "https://deckofcardsapi.com/api/deck/new/"
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [deck, setDeck] = useState({});

  useEffect(function getDeckIdWhenMounted(){
    async function getDeckId() {
      const response = await axios.get(DECK_URL)
      setDeck(currDeck => ({...currDeck, 
                            remainingCards: response.data.remaining,
                            deckId: response.data.deck_id }));
      setIsLoading(false);                      
    }
    getDeckId();
  }, [ ]);

  return (
    <div className="App">
      { isLoading 
      ? "Getting Cards!"
      : <CardGame deckId={ deck.deckId }/>
      }
    </div>
  );
}

export default App;

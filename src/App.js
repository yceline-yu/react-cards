import React from 'react';
import './App.css';
import Deck from './Deck';
import "bootstrap/dist/css/bootstrap.css";

/** Simple app to draw card from a deck
 *
 *
 * App -> Deck
 */

function App() {
  return (
    <div className="App">
      <Deck />
    </div>
  );
}

export default App;

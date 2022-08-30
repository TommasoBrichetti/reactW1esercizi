import React from "react";
import Buttons from "./bottone";
import Immages from "./immagine";
import './App.css'

function App() {
  return (
    <div className="body">

      <h1 style={{fontSize: '3.5rem'}}>Titolo</h1>

      <Buttons  contenuto="press me"/>
      <Buttons  contenuto="not press" />
      <Buttons  contenuto="press me too" />
      <Buttons  contenuto="press all of us" />

      <Immages width="200px" class="immagine" src="/frog.png" alt="frog"/>
    </div>
  );
}

export default App;

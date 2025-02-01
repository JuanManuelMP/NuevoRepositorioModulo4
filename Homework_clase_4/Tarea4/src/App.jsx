import React from "react";
import RickAndMortyCharacterCard from "./RickAndMortyCharacterCard";

function App() {
  return (
    <div>
      <h1>Personajes de Rick y Morty</h1>
      <div className="character-list">
        <RickAndMortyCharacterCard id={1} />
        <RickAndMortyCharacterCard id={2} />
        <RickAndMortyCharacterCard id={3} />
        <RickAndMortyCharacterCard id={10} />
      </div>
    </div>
  );
}

export default App;

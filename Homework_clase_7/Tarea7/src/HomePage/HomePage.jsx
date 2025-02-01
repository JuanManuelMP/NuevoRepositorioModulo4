import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container">
      <h1>Bienvenido a la página de Rick and Morty</h1>
      <h3>Enlaces rápidos</h3>
      <Link to="/characters">Ir a personajes</Link>
      <Link to="/episodes">Ir a episodios</Link>
    </div>
  );
}

export default HomePage;

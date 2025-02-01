import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function CharacterDetailPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => setCharacter(data));
  }, [id]);

  if (!character) return <h2>Cargando...</h2>;

  return (
    <div className="container">
      <div className="details">
        <h1>{character.name}</h1>
        <img src={character.image} alt={character.name} />
        <p>Especie: {character.species}</p>
        <p>Género: {character.gender}</p>
        <p>Estado: {character.status}</p>
      </div>
      <br />
      <Link to="/characters">Volver a la lista</Link>
    </div>
  );
}

export default CharacterDetailPage;

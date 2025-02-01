import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CharacterPage() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        if (data.results) {
          setCharacters(data.results);
        } else {
          setError("No se encontraron personajes");
        }
        setLoading(false);
      })
      .catch(error => {
        setError("Error al obtener los personajes");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Cargando personajes...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="container">
      <h1>Lista de Personajes</h1>
      <ul className="list">
        {characters.map(character => (
          <li key={character.id} className="card">
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <Link to={`/characters/${character.id}`}>Ver detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterPage;

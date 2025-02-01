import React, { useEffect, useState } from 'react';

function EpisodesPage() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
      .then(response => response.json())
      .then(data => setEpisodes(data.results));
  }, []);

  return (
    <div>
      <h1>Lista de Episodios</h1>
      <ul>
        {episodes.map(episode => (
          <li key={episode.id}>{episode.name} - {episode.air_date}</li>
        ))}
      </ul>
    </div>
  );
}

export default EpisodesPage;

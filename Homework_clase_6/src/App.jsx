import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard/CharacterCard';

function App() {

  const [charactersList, setCharactersList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(1); 

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((response) => response.json()) 
      .then((data) => {
        setCharactersList(data.results);
        setTotalPages(data.info.pages); 
      })
      .catch((error) => console.error('Error al obtener los datos:', error));
  }, [currentPage]); 


  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Personajes de Rick and Morty</h1>
      
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {charactersList.map((character) => (
          <CharacterCard
            key={character.id}
            name={character.name}
            image={character.image}
            genre={character.gender}
            status={character.status}
          />
        ))}
      </div>

  
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default App;

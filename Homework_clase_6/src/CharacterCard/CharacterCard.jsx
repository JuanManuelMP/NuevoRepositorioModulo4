import React from 'react';

function CharacterCard({ name, image, genre, status }) {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg" />
      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <p className="text-sm">Género: {genre}</p>
      <p className="text-sm">Estado: {status}</p>
    </div>
  );
}

export default CharacterCard;

import React from "react";

function CharacterCard({ name, image, genre, status }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="card-image" />
      <p> genero: {genre}</p>
      <p>estado: {status}</p>
    </div>
  );
}

export default CharacterCard;

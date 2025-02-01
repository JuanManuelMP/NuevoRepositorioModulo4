import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

function RickAndMortyCharacterCard({ id }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setImage(data.image);
        setGenre(data.gender);
        setStatus(data.status);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  return (
    <CharacterCard
      name={name}
      image={image}
      genre={genre}
      status={status}
    />
  );
}

export default RickAndMortyCharacterCard;

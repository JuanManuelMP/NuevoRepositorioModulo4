import React from "react";

function Details({ genre, status }) {
  return (
    <div>
      <p><strong>Género:</strong> {genre}</p>
      <p><strong>Estado:</strong> {status}</p>
    </div>
  );
}

export default Details;

import React from 'react';

function Details({ genre, status }) {
  return (
    <div style={{ textAlign: 'center', fontSize: '1.2rem', color: '#555' }}>
      <p>
        <b>Género:</b> {genre}
      </p>
      <p>
        <b>Estado:</b> {status}
      </p>
    </div>
  );
}

export default Details;

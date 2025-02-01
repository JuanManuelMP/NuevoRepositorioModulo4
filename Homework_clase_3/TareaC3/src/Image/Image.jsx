import React from 'react';

function Image({ url }) {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <img
        src={url}
        alt="Artista/Personaje"
        style={{ width: '200px', height: '200px', borderRadius: '50%' }}
      />
    </div>
  );
}

export default Image;

import React from 'react';

function Title({ title }) {
  return (
    <h1 style={{ fontSize: '2rem', color: '#4CAF50', textAlign: 'center' }}>
      {title}
    </h1>
  );
}

export default Title;

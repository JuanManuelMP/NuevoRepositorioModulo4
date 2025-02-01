import React from 'react';
import Title from './Title/Title';
import Image from './Image/Image';
import Details from './Details/Details';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      {/* Título del personaje/artista */}
      <Title title="Papa Emeritus III" />

      {/* Imagen del personaje/artista */}
      <Image url="https://i.pinimg.com/564x/76/34/aa/7634aa3df8165aaea08ff205c032690c.jpg" />

      {/* Detalles del personaje/artista */}
      <Details genre="Masculino" status="Muerto" />
    </div>
  );
}

export default App;

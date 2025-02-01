import React from 'react'

const Home = ({user, setUser}) => {
    const handleClick = () =>{
        setUser([])
    }
  return (
    <div>
        <h3>Bienvenido {user}</h3>
        <button onClick={handleClick}>Volver</button>
    </div>
  )
}

export default Home
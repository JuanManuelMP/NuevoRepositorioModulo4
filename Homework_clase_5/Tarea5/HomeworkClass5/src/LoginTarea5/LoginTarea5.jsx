import React, { useState } from 'react'
import './LoginTarea5.css'

const LoginTarea5 = ({setUser}) => {

  const[usuario, setUsuario] = useState ('');
  const[Password, setPassword] = useState ('');
  const[errors, setErrors] = useState ({
   nombreError: false, 
   contraseñaError: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({
        nombreError: usuario === '',
        PasswordError: Password ==='',
    })
    if(usuario !=='' && Password !==''){
       setUser([usuario])
    }
  }
    
  console.log(usuario, Password)
  return (
    <div>
        <h1>Form</h1>
        <form className ='formularioTarea' onSubmit={handleSubmit}>
            <label>Usuario</label>
            <input type="text" onChange={e => setUsuario(e.target.value)}/>
            {errors.nombreError && <p className='error'>El usuario es requerido</p>}

            <label>Password</label>
            <input type='text'onChange={e => setPassword(e.target.value)}/>
            
            {errors.PasswordError && <p className='error'>La contraseña es requerida</p>}
            
            <button type="submit">Ingresar</button>

        </form>
    </div>
         
  )
}

export default LoginTarea5
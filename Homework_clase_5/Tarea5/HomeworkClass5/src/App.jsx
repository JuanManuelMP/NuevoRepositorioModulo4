import { useState } from 'react'
import './App.css'
import LoginTarea5 from './LoginTarea5/LoginTarea5'
import Home from './Home/Home'

function App() {

  const [user, setUser] = useState('');

  return (
    <div>
     {
     !user.length > 0
     ?<LoginTarea5 setUser={setUser}/>
     :<Home user = {user} setUser={setUser}/>
     }
     
      <h1>________________________</h1>
    </div>
      
  )
}

export default App

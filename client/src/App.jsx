import { createContext, useEffect, useState } from 'react'
import {UnSignedNavbar, Signed} from './components/navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home'
import SignUp from './components/sign-up'
import LogIn from './components/log-in'

export const UserContext = createContext()

function App() {
  
  const [user, setUser] = useState(null);
  
  
  useEffect(() => {
    fetch('http://localhost:3000/api/me', {
      method: "GET",
      credentials: "include"
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      
      .catch(() => setUser(null))
  }, [])
  
  return (
    <>
    <UnSignedNavbar />
    <Routes>
    <Route path="/" element={<Home user={user}/>} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<LogIn />} />
    </Routes>
    </>
  )
}

export default App

import { createContext, useEffect, useState } from 'react'
import Navbar from './components/navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home'
import SignUp from './components/sign-up'
import LogIn from './components/log-in'
import './App.css'
import BecomeMember from './components/becomemember'

export const UserContext = createContext()

function App() {
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    fetch('http://localhost:3000/api/me', {
      method: "GET",
      credentials: "include"
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .finally(() => setLoading(false));
  }, [])
  
  return (
    <UserContext.Provider value={{ user, loading}}>
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<LogIn />} />
    <Route path="/member" element={<BecomeMember />} />
    </Routes>
    </>
    </UserContext.Provider>
  )
}

export default App

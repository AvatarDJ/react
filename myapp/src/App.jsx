import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import ButtonChange from './components/ButtonChange'
import Api from './components/Api'
import Pokemon from './components/Pokemon'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/state" element={<StateBasics />} />
        <Route path="/b" element={<ButtonChange/>}/>
        <Route path="/a" element={<Api />} />
        <Route path="/p" element={<Pokemon/>}/>

      </Routes>
      
     
      

      
    </>
    
  )
}

export default App

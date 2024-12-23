import { useState } from 'react'
import './App.css'

import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import AddProductForm from './components/AddProductForm'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar /><br /><br /><br />
      <Routes>
        <Route path="/add" element={<AddProductForm/>} />
        <Route path="/" element={<Home />} />
        
      </Routes>
      
     
      

      
    </>
    
  )
}

export default App

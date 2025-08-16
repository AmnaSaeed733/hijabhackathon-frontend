
import React from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import Signup from './components/signup'
import Login from './components/login'
import Hijab from './components/hijab'

function App() {

  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/hijab" element={<Hijab />} />
      </Routes>
      
   </BrowserRouter>
    </>
  )
}

export default App

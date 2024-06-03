import React from 'react';
import './App.css'
import Home from './views/screen/Home'
import Login from './views/screen/Login'
import Signup from './views/screen/Signup'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
} 

export default App

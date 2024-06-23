import React from 'react';
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Choose,Diseases,Home,Login,Signup } from './import.manage';
import Predict from './views/screen/prediction/Predict';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/diseases" element={<Choose />} />
        <Route path="/diseases/:id" element={<Predict />} />

      </Routes>
    </BrowserRouter>
  )
} 

export default App

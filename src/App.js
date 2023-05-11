 import React from 'react'
 import './css/Style.css'
import LoginHome from './Compnents/LoginHome'
import Home from './Compnents/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 
 export default function App() {
   return (
     <div>
     
      <Router>
    <Routes>
      <Route exact path="/" element={ <LoginHome/>} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  </Router>
       
     </div>
   )
 }
 
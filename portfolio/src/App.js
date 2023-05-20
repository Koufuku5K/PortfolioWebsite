import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/HomePage/Home.js';
import Portfolio from './components/PortfolioPage/Portfolio.js';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Portfolio" element={<Portfolio/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

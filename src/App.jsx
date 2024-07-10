// src/App.js
// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Characters from './components/Characters';
import CharacterDetail from './components/CharacterDetail';
import './App.css'; // Para estilos globales

const App = () => {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
      </Routes>
    </>
  );
};

export default App;

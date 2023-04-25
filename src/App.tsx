import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Characters from './pages/Characters';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AboutCharacter from './pages/AboutCharacter';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/:id" element={<Characters />} />
        <Route path="/character/:id" element={<AboutCharacter />} />
      </Routes>
    </>
  );
}

export default App;

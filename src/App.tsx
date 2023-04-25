import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Characters from './pages/Characters';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/:id" element={<Characters />} />
      </Routes>
    </>
  );
}

export default App;

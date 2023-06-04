import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Betbar from './components/Betbar/Betbar';
import Mlb from './pages/Mlb';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/mlb' element={<Mlb />} />
      </Routes>
      <Betbar />
    </>
  );
}

export default App;

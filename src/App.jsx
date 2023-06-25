import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Betbar from './components/Betbar/Betbar';
import Mlb from './pages/Mlb';
import Betslip from './pages/Betslip';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/mlb' element={<Mlb />} />
        <Route path='/betslip' element={<Betslip />} />
      </Routes>
      <Betbar />
    </>
  );
}

export default App;

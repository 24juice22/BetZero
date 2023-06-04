import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Betbar from './components/Betbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home />} />
      </Routes>
      <Betbar />
    </>
  );
}

export default App;

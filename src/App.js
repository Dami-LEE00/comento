import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import New from './pages/New';
import Best from './pages/Best';
import Smart from './pages/Smart';
import Special from './pages/Special';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

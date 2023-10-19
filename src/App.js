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
        <Route path='/new' element={<New />} />
        <Route path='/best' element={<Best />} />
        <Route path='/smart' element={<Smart />} />
        <Route path='/special' element={<Special />} />
      </Routes>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import New from './pages/New';
import Best from './pages/Best';
import Smart from './pages/Smart';
import Special from './pages/Special';

const tabs = [
  {
    menu: 'Home',
    url: '',
  },
  {
    menu: '신상품',
    url: 'new',
  },
  {
    menu: '베스트',
    url: 'best',
  },
  {
    menu: '알뜰쇼핑',
    url: 'smart',
  },
  {
    menu: '특가/혜택',
    url: 'special',
  },
];

function App() {
  const [currentTab, setCurrentTab] = useState('Home');

  useEffect(() => {
    document.title = `${currentTab}`;
  }, [currentTab]);

  return (
    <div>
      <Nav tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
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

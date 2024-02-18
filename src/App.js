import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MainBoard from './components/MainBoard';
import TrendingCategories from './components/Categories';

function App() {
  return (
    <>
      <NavBar/>
      <MainBoard/>
      <TrendingCategories/>
    </>
  );
}
export default App;

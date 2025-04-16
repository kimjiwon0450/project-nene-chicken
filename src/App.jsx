import './App.css';
import ChickenFooter from './components/ChickenFooter';
import ChickenNavBar from './components/ChickenNavBar';

import React from 'react'; // eslint-disable-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import MenuSection from './components/MenuSection';
import ServiceBoxes from './components/ServiceBoxes';

function App() {
  return (
    <div className='App'>
      <ChickenNavBar />

      <ChickenFooter />
    </div>
  );
}

export default App;
